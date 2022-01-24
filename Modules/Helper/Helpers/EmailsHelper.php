<?php

namespace Modules\Helper\Helpers;

use Auth;
use Carbon\Carbon;
use DB;
use Mail;
use Modules\Defect\Models\Defect;
use Modules\EmailTemplate\Models\EmailTemplate;
use Modules\Helper\Jobs\SendEmailJob;
use Modules\Incident\Models\Incident;
use Modules\Projects\Models\Project;
use Modules\Setting\Models\Setting;
use Modules\Task\Models\Task;
use Modules\User\Models\User\User;

/**
 * Class EmailsHelper
 *
 * The Helper is Defined for send different mail.
 *
 * PHP version 7.1.3
 *
 * @category  Helper
 * @package   Modules\Helper
 * @author    Vipul Patel <vipul@chetsapp.com>
 * @copyright 2019 Chetsapp Group
 * @license   Chetsapp Private Limited
 * @version   Release: @1.0@
 * @link      http://chetsapp.com
 * @since     Class available since Release 1.0
 */
class EmailsHelper
{
    /**
     * Send mail.
     *
     * @param String $template   [Email html]
     * @param Array  $parameters [Required params]
     * @param Array  $config     [Send mail config]
     *
     * @return void
     */
    public function sendmail($template = '', $parameters = [], $config = [])
    {
        try {
            Mail::send(
                $template,
                $parameters,
                function ($mail) use ($config) {
                    $mail->to($config['email'], $config['name'])
                        ->from($config['from'])
                        ->subject($config['subject']);
                }
            );
        } catch (\Exception $e) {
        }
    }

    /**
     * Send mail with attachments.
     *
     * @param String $template         [Email html]
     * @param Array  $parameters       [Required params]
     * @param Array  $config           [Send mail config]
     * @param Array  $attachmentsFiles [Attachment files]
     *
     * @return void
     */
    public function sendmailAttachments(
        $template = '',
        $parameters = [],
        $config = [],
        $attachmentsFiles = []
    ) {
        try {
            Mail::send(
                ['html' => $template],
                $parameters,
                function ($mail) use ($config, $attachmentsFiles) {
                    $mail->to($config['email'], $config['name'])
                        ->from($config['from'])
                        ->subject($config['subject']);

                    if (!empty($attachmentsFiles)) {
                        foreach ($attachmentsFiles as $key => $value) {
                            $mail->attach(
                                $value['file'],
                                array(
                                    'as'   => $value['name'],
                                    'mime' => $value['mime']
                                )
                            );
                        }
                    }
                }
            );
        } catch (\Exception $e) { }
    }

    /**
     * Send mails.
     *
     * @param String $to      [Mail to address]
     * @param String $name    [Mail from name]
     * @param String $subject [Mail subject]
     * @param String $body    [Mail body]
     *
     * @return void
     */
    private function _sendEmails($to, $name, $subject, $body)
    {
        try {
            Mail::send([], [], function ($message) use ($to, $name, $subject, $body) {
                    $message->setBody($body, 'text/html');
                    $message->to($to, $name);
                    $message->subject($subject);
                }
            );
            return [ 'status' => true ];
        } catch (\Exception $e) {
            return [ 'status' => false, 'msg' => $e->getMessage() ];
        }
    }

    /**
     * Send mails in queue.
     *
     * @param String $to      [Mail to]
     * @param String $name    [From name]
     * @param String $subject [Mail subject]
     * @param String $body    [Mail body]
     *
     * @return void
     */
    private function _sendEmailsInQueue($to, $name, $subject, $body)
    {
        try {
            $details['to'] = $to;
            $details['name'] = $name;
            $details['subject'] = $subject;
            $details['body'] = $body;
            // SendEmailJob::dispatch($details)->onConnection('sync');
            $job = (new SendEmailJob($details))->delay(Carbon::now()->addSeconds(5));
            dispatch($job);
        } catch (\Exception $e) {
            pr($e->getMessage(), 1);
        }
    }

    /**
     * Send user activate email.
     *
     * @param Object $user     [User object]
     * @param String $password [Password]
     *
     * @return Boolean
     */
    public function sendActivateEmail($user, $password)
    {
        $email_template = EmailTemplate::where('type', 'activate_account')->first();
        if (!empty($email_template)) {
            $name = $user->firstname. ' '. $user->lastname;
            $activate_url = str_replace("{ACTIVATE_URL}", config('app.url').'/api/verify/user/' . $user->email_verification_code, $email_template->template_body);
            $activate_period = str_replace("{ACTIVATION_PERIOD}", config('core.EMAIL_ACTIVATION_EXPIRE') / 3600, $activate_url);
            $username = str_replace("{USERNAME}", $user->username, $activate_period);
            $user_email = str_replace("{EMAIL}", $user->email, $username);
            $user_password = str_replace("{PASSWORD}", $password, $user_email);
            $message = str_replace("{SITE_NAME}", config('core.COMPANY_NAME'), $user_password);

            $this->_sendEmails(
                $user->email,
                $name,
                $email_template->template_subject,
                $message
            );
        }
        return true;
    }

    /**
     * Send change email verify mail.
     *
     * @param Object $user  [User object]
     * @param Array  $input [Request data for change mail]
     *
     * @return Boolean
     */
    public function sendChangeEmailVerifyEmail($user, $input)
    {
        $email_template = EmailTemplate::where('type', 'change_email')->first();
        if (!empty($email_template)) {
            $name = $user->firstname. ' '. $user->lastname;
            $activate_url = str_replace("{NEW_EMAIL_KEY_URL}", config('app.url').'/api/verify/user/' . $user->email_verification_code .'/'.encrypt($input['email']), $email_template->template_body);
            $site_url = str_replace("{SITE_URL}", config('app.front_url'), $activate_url);
            $user_email = str_replace("{NEW_EMAIL}", $input['email'], $site_url);
            $message = str_replace("{SITE_NAME}", config('core.COMPANY_NAME'), $user_email);

            $this->_sendEmails(
                $input['email'],
                $name,
                $email_template->template_subject,
                $message
            );
        }
        return true;
    }

    /**
     * Send change password mail.
     *
     * @param Object $user     [User object]
     * @param String $password [Actual password]
     *
     * @return Boolean
     */
    public function sendChangePasswordEmail($user, $password)
    {
        $email_template = EmailTemplate::where('type', 'reset_password')->first();
        if (!empty($email_template)) {
            $name = $user->firstname. ' '. $user->lastname;

            $username = str_replace("{USERNAME}", $user->username, $email_template->template_body);
            $user_email = str_replace("{EMAIL}", $user->email, $username);
            $user_password = str_replace("{NEW_PASSWORD}", $password, $user_email);
            $message = str_replace("{SITE_NAME}", config('core.COMPANY_NAME'), $user_password);

            $this->_sendEmails(
                $user->email,
                $name,
                $email_template->template_subject,
                $message
            );
        }
        return true;
    }

    /**
     * Send meeting invite people emails.
     *
     * @param Array  $users      [Users array]
     * @param Object $meeting    [Meeting details]
     *
     * @return Boolean
     */
    public function sendMeetingEmails($users, $meeting)
    {
        $users = User::whereIn('id', $users)->get();
        $email_template = EmailTemplate::where('type', 'meeting')->first();

        if (!empty($email_template) && !empty($users)) {
            foreach ($users as $key => $value) {
                $name = $value->firstname.' '.$value->lastname;
                $message = $email_template->template_body;
                $subject = $meeting->title .' '.date("l, F j, Y g:i A", strtotime($meeting->start_date));
                $meeting_date = date("l, F j, Y", strtotime($meeting->start_date));
                $meeting_time = date("g:i A", strtotime($meeting->start_date));
                $site_name = str_replace("{COMPANY_NAME}", config('core.COMPANY_NAME'), $message);
                $user_name = str_replace("{NAME}", $name, $site_name);
                $meeting_date_time = str_replace("{MEETING_DATE}", $meeting_date, $user_name);
                $meeting_time_date = str_replace("{MEETING_TIME}", $meeting_time, $meeting_date_time);
                $description = str_replace("{DESCRIPTION}", $meeting->description, $meeting_time_date);
                $message = str_replace("{LOCATION}", $meeting->location, $description);
                
                $this->_sendEmailsInQueue($value->email, $name, $subject, $message);
            }
        }
    }

    /**
     * Send meeting cancel emails.
     *
     * @param Array  $users      [Users array]
     * @param Object $meeting    [Meeting details]
     *
     * @return Boolean
     */
    public function sendMeetingCancelEmails($users, $meeting)
    {
        $users = User::whereIn('id', $users)->get();
        $email_template = EmailTemplate::where('type', 'cancel_meeting')->first();

        if (!empty($email_template) && !empty($users)) {
            foreach ($users as $key => $value) {
                $name = $value->firstname.' '.$value->lastname;
                $message = $email_template->template_body;
                $subject = $meeting->title .' '.date("l, F j, Y g:i A", strtotime($meeting->start_date));
                $meeting_date = date("l, F j, Y", strtotime($meeting->start_date));
                $meeting_time = date("g:i A", strtotime($meeting->start_date));
                $site_name = str_replace("{COMPANY_NAME}", config('core.COMPANY_NAME'), $message);
                $user_name = str_replace("{NAME}", $name, $site_name);
                $meeting_date_time = str_replace("{MEETING_DATE}", $meeting_date, $user_name);
                $meeting_time_date = str_replace("{MEETING_TIME}", $meeting_time, $meeting_date_time);
                $description = str_replace("{DESCRIPTION}", $meeting->description, $meeting_time_date);
                $message = str_replace("{LOCATION}", $meeting->location, $description);
                
                $this->_sendEmailsInQueue($value->email, $name, $subject, $message);
            }
        }
    }

    /**
     * Send announcement emails.
     *
     * @param Array  $users        [Users array]
     * @param Object $announcement [Announcement details]
     *
     * @return Boolean
     */
    public function sendAnnouncementEmails($users, $announcement)
    {
        $setting = Setting::select("is_announcement_notification")->first();
        if($setting->is_announcement_notification){
            $email_template = EmailTemplate::where('type', 'announcement')->first();
            if (!empty($email_template) && !empty($users)) {
                foreach ($users as $key => $value) {
                    $name = $value->firstname.' '.$value->lastname;
                    $message = $email_template->template_body;
                    $subject = $announcement->title .' '.date("l, F j, Y g:i A", strtotime($announcement->start_date));
                    $announcement_start_date = date("l, F j, Y g:i A", strtotime($announcement->start_date));
                    $announcement_end_date = date("l, F j, Y g:i A", strtotime($announcement->end_date));
                    $site_name = str_replace("{COMPANY_NAME}", config('core.COMPANY_NAME'), $message);
                    $user_name = str_replace("{NAME}", $name, $site_name);
                    $title = str_replace("{TITLE}", $announcement->title, $user_name);
                    $announcement_start_date = str_replace("{START_DATE}", $announcement_start_date, $title);
                    $announcement_end_date = str_replace("{END_DATE}", $announcement_end_date, $announcement_start_date);
                    $message = str_replace("{DESCRIPTION}", $announcement->description, $announcement_end_date);
                    $this->_sendEmailsInQueue(
                        $value->email,
                        $name,
                        $subject,
                        $message
                    );
                }
            }
        }
    }

    /**
     * Forgot user password.
     *
     * @param String $url  [Forgot password URL]
     * @param Object $user [User object]
     *
     * @return Boolean
     */
    public function sendForgotPasswordEmail($url, $user)
    {
        $email_template = EmailTemplate::where('type', 'forgot_password')->first();

        if (!empty($email_template)) {
            $message = $email_template->template_body;
            $subject = $email_template->template_subject;

            $site_url = str_replace("{SITE_URL}", config('app.url'), $message);
            $key_url = str_replace("{PASS_KEY_URL}", $url, $site_url);
            $message = str_replace("{SITE_NAME}", config('core.COMPANY_NAME'), $key_url);

            $this->_sendEmails(
                $user->email,
                $user->firstname.' '.$user->lastname,
                $email_template->template_subject,
                $message
            );
        }
        return true;
    }

    /**
     * Send user reset password email.
     *
     * @param Object $user     [User object]
     * @param String $password [Password]
     *
     * @return Boolean
     */
    public function sendResetEmail($user, $password)
    {
        $email_template = EmailTemplate::where('type', 'reset_password')->first();

        if (!empty($email_template)) {
            $message = $email_template->template_body;
            $subject = $email_template->template_subject;

            $site_name = str_replace("{SITE_NAME}", config('core.COMPANY_NAME'), $message);
            $username = str_replace("{USERNAME}", $user->username, $site_name);
            $user_email = str_replace("{EMAIL}", $user->email, $username);
            $message = str_replace("{NEW_PASSWORD}", $password, $user_email);

            $this->_sendEmails(
                $user->email,
                $user->firstname,
                $subject,
                $message
            );
        }
        return true;
    }

    /**
     * Send invite people mail.
     *
     * @param Object $user [User object]
     *
     * @return Boolean
     */
    public function sendInviteUserMail($user)
    {
        $url = config('app.front_url').'/#/users/profile/'. $user->id;
        $email_template = EmailTemplate::where('type', 'welcome_email')->first();

        if (!empty($email_template)) {
            $message = $email_template->template_body;
            $subject = $email_template->template_subject;

            $username = str_replace("{NAME}", $user->firstname .' '. $user->lastname, $message);
            $site_url = str_replace("{COMPANY_URL}", $url, $username);
            $message = str_replace("{COMPANY_NAME}", config('core.COMPANY_NAME'), $site_url);

            return $this->_sendEmails($user->email, $user->firstname, $subject, $message);
        }
        return false;
    }

    /**
     * Send project assign email.
     *
     * @param Object $users      [Users object]
     * @param Int    $project_id [Project id]
     * @param String $subject    [Subject]
     * @param String $project    [Project name]
     * @param String $name       [Sender name]
     *
     * @return Boolean
     */
    public function sendProjectAssignUserEmail($users, $project_id, $subject, $project, $name)
    {
        $email_template = EmailTemplate::where('type', 'assigned_project')->first();

        if (!empty($email_template)) {
            $url = config('app.front_url').'/#/projects/detail/'.$project_id;
            foreach ($users as $key => $value) {
                $message = $email_template->template_body;

                $site_name = str_replace("{SITE_NAME}", config('core.COMPANY_NAME'), $message);
                $site_url = str_replace("{PROJECT_NAME}", $project, $site_name);
                $assign_by = str_replace("{ASSIGNED_BY}", $name, $site_url);
                $message = str_replace("{PROJECT_URL}", $url, $assign_by);

                $this->_sendEmailsInQueue($value['email'], $name, $subject, $message);
            }
        }

        return true;
    }

    /**
     * Send project create client notification.
     *
     * @param String $project_name [Project name]
     * @param Int    $client_id    [Client id]
     * @param Int    $project_id   [Project id]
     *
     * @return Boolean
     */
    public function sendCreateProjectNotiClientMail($project_name, $client_id, $project_id)
    {
        $user = User::findOrFail($client_id);
        $email_template = EmailTemplate::where('type', 'notification_client')->first();

        if (!empty($user) && !empty($email_template)) {
            $name = $user->firstname.' '.$user->lastname;
            $url = config('app.front_url').'/#/projects/detail/'.$project_id;
            
            $message = $email_template->template_body;
            $subject = $email_template->template_subject;

            $site_name = str_replace("{SITE_NAME}", config('core.COMPANY_NAME'), $message);
            $project_name = str_replace("{PROJECT_NAME}", $project_name, $site_name);
            $project_link = str_replace("{CLIENT_NAME}", $name, $project_name);
            $message = str_replace("{PROJECT_LINK}", $url, $project_link);

            $this->_sendEmailsInQueue($user->email, $name, $subject, $message);
        }
    }

    /**
     * Send project completed client notification.
     *
     * @param Object $project    [Project object]
     * @param Int    $project_id [Project id]
     *
     * @return Boolean
     */
    public function sendProjectCompletedNotificationClientMail($project, $project_id)
    {
        if($project->client_id){
            $user = User::findOrFail($project->client_id);
            $email_template = EmailTemplate::where('type', 'complete_projects')->first();

            if (!empty($email_template)) {
                $name = $user->firstname.' '.$user->lastname;
                $url = config('app.front_url').'/#/projects/detail/'.$project_id;

                $message = $email_template->template_body;
                $subject = $email_template->template_subject;

                $site_name = str_replace("{SITE_NAME}", config('core.COMPANY_NAME'), $message);
                $project_name = str_replace("{PROJECT_NAME}", $project->project_name, $site_name);
                $project_link = str_replace("{CLIENT_NAME}", $user->firstname.' '.$user->lastname, $project_name);
                $message = str_replace("{PROJECT_LINK}", $url, $project_link);

                $this->_sendEmailsInQueue($user->email, $name, $subject, $message);
            }
        }
        
    }

    /**
     * Send project user comment.
     *
     * @param Object $logginUser     [Login user object]
     * @param Object $projectcomment [Project comment object]
     *
     * @return Boolean
     */
    public function sendProjectCommentMail($logginUser, $projectcomment)
    {
        $project = $this->_getAssignProjectUsers($projectcomment->project_id);
        $email_template = EmailTemplate::where('type', 'project_comments')->first();

        if (!empty($email_template)) {
            $url = config('app.front_url').'/#/projects/detail/'. $projectcomment->project_id;
            foreach ($project->users as $key => $value) {
                $message = $email_template->template_body;
                $subject = $email_template->template_subject;

                $posted_by = str_replace("{POSTED_BY}", $logginUser->firstname.' '.$logginUser->lastname, $message);
                $project_name = str_replace("{PROJECT_NAME}", $project->project_name, $posted_by);
                $site_url = str_replace("{COMMENT_URL}", $url, $project_name);
                $comment = str_replace("{COMMENT_MESSAGE}", $projectcomment->comment, $site_url);
                $message = str_replace("{SITE_NAME}", config('core.COMPANY_NAME'), $comment);

                $this->_sendEmailsInQueue(
                    $value->email,
                    $value->name,
                    $subject,
                    $message
                );
            }
        }
    }

    /**
     * Send project user attachment.
     *
     * @param Object $logginUser        [Login user object]
     * @param Object $projectAttachment [Project attachment object]
     *
     * @return Boolean
     */
    public function sendProjectAttachmentMail($logginUser, $projectAttachment)
    {
        $project = $this->_getAssignProjectUsers($projectAttachment->project_id);
        $email_template = EmailTemplate::where('type', 'project_attachment')->first();

        if (!empty($email_template)) {
            $url = config('app.front_url').'/#/projects/detail/'. $projectAttachment->project_id;
            foreach ($project->users as $key => $value) {
                $message = $email_template->template_body;
                $subject = $email_template->template_subject;

                $posted_by = str_replace("{UPLOADED_BY}", $logginUser->firstname.' '.$logginUser->lastname, $message);
                $project_name = str_replace("{PROJECT_NAME}", $project->project_name, $posted_by);
                $site_url = str_replace("{PROJECT_URL}", $url, $project_name);
                $message = str_replace("{SITE_NAME}", config('core.COMPANY_NAME'), $site_url);

                $this->_sendEmailsInQueue(
                    $value->email,
                    $value->name,
                    $subject,
                    $message
                );
            }
        }
    }

    /**
     * Get project users.
     *
     * @param Int $projectId [Project id]
     *
     * @return Object
     */
    private function _getAssignProjectUsers($projectId)
    {
        return Project::with([
            'users' => function ($query) {
                    $query->select('id','email',DB::raw("CONCAT(firstname,' ',lastname) as name"))
                        ->where('edit',1);
                }
            ])
            ->where('id',$projectId)
            ->first();
    }

    /**
     * Send task/subtask assign email.
     *
     * @param Array  $users   [Users array]
     * @param Object $task    [Task]
     * @param String $subject [Subject]
     * @param String $name    [Sender name]
     *
     * @return Boolean
     */
    public function sendTaskAssignUserEmail($users, $task, $subject, $name)
    {
        $email_template = EmailTemplate::where('type', 'task_assigned')->first();
        if (!empty($email_template)) {
            $url = config('app.front_url').'/#/tasks/detail/'.$task->id;
            $assignUser= User::select('id', 'firstname', 'lastname')->find($task->assign_to);
            foreach ($users as $key => $value) {
                $message = $email_template->template_body;

                $site_name = str_replace("{SITE_NAME}", config('core.COMPANY_NAME'), $message);
                $site_url = str_replace("{TASK_NAME}", $task->name, $site_name);
                $assign_to = str_replace("{ASSIGNED_TO}", $assignUser->firstname.' '.$assignUser->lastname, $site_url);
                $assign_by = str_replace("{ASSIGNED_BY}", $name, $assign_to);
                $message = str_replace("{TASK_URL}", $url, $assign_by);
                $this->_sendEmailsInQueue(
                    $value['email'],
                    $value['firstname'].' '.$value['lastname'],
                    $subject,
                    $message
                );
            }
        }
        return true;
    }

    /**
     * Send task change status mail.
     *
     * @param Object $logginUser [Login user object]
     * @param Object $task     [Task object]
     *
     * @return Boolean
     */
    public function sendTaskStatusChangeMails($logginUser, $task)
    {
        $url = config('app.front_url').'/#/tasks/detail/'. $task->id;
        $tasks = $this->_getAssignTaskUsers($task->id);
        $email_template = EmailTemplate::where('type', 'task_updated')->first();

        if (!empty($email_template)) {
            foreach ($tasks->users as $key => $value) {
                $message = $email_template->template_body;
                $subject = $email_template->template_subject;

                $task_name = str_replace("{TASK_NAME}", $task->name, $message);
                $assigned_by = str_replace("{ASSIGNED_BY}", ucfirst($logginUser->firstname.' '.$logginUser->lastname), $task_name);
                $site_url = str_replace("{TASK_URL}", $url, $assigned_by);
                $message = str_replace("{SITE_NAME}", config('core.COMPANY_NAME'), $site_url);

                $this->_sendEmailsInQueue(
                    $value->email,
                    $value->name,
                    $subject,
                    $message
                );
            }
        }
    }

    /**
     * Send task assign user comment.
     *
     * @param Object $logginUser  [Login user object]
     * @param Object $taskComment [Task comment object]
     *
     * @return Boolean
     */
    public function sendTaskCommentMail($logginUser, $taskComment)
    {
        $url = config('app.front_url').'/#/tasks/detail/'. $taskComment->task_id;
        $tasks = $this->_getAssignTaskUsers($taskComment->task_id);
        $email_template = EmailTemplate::where('type', 'task_comments')->first();
        if (!empty($email_template)) {
            foreach ($tasks->users as $key => $value) {
                $message = $email_template->template_body;
                $subject = $email_template->template_subject;

                $posted_by = str_replace("{POSTED_BY}", $logginUser->firstname.' '.$logginUser->lastname, $message);
                $task_name = str_replace("{TASK_NAME}", $tasks->name, $posted_by);
                $site_url = str_replace("{COMMENT_URL}", $url, $task_name);
                $comment = str_replace("{COMMENT_MESSAGE}", $taskComment->comment, $site_url);
                $message = str_replace("{SITE_NAME}", config('core.COMPANY_NAME'), $comment);
                
                $this->_sendEmailsInQueue(
                    $value->email,
                    $value->name,
                    $subject,
                    $message
                );
            }
        }
    }

    /**
     * Send task assign user attachment.
     *
     * @param Object $logginUser     [Login user object]
     * @param Object $taskAttachment [Task attachment object]
     *
     * @return Boolean
     */
    public function sendTaskAttachmentMail($logginUser, $taskAttachment)
    {
        $url = config('app.front_url').'/#/tasks/detail/'. $taskAttachment->task_id;
        $tasks = $this->_getAssignTaskUsers($taskAttachment->task_id);
        $email_template = EmailTemplate::where('type', 'task_attachment')->first();
        
        if (!empty($email_template)) {
            foreach ($tasks->users as $key => $value) {
                $message = $email_template->template_body;
                $subject = $email_template->template_subject;

                $posted_by = str_replace("{UPLOADED_BY}", $logginUser->firstname.' '.$logginUser->lastname, $message);
                $task_name = str_replace("{TASK_NAME}", $tasks->name, $posted_by);
                $site_url = str_replace("{TASK_URL}", $url, $task_name);
                $message = str_replace("{SITE_NAME}", config('core.COMPANY_NAME'), $site_url);
                
                $this->_sendEmailsInQueue(
                    $value->email,
                    $value->name,
                    $subject,
                    $message
                );
            }
        }
    }

    /**
     * Get assign task users.
     *
     * @param Int $taskId [Task id]
     *
     * @return Object
     */
    private function _getAssignTaskUsers($taskId)
    {
        return Task::with([
            'users' => function ($query) {
                    $query->select('id','email',DB::raw("CONCAT(firstname,' ',lastname) as name"));
                }
            ])
            ->where('id',$taskId)
            ->first();
    }

    /**
     * Send task assign email.
     *
     * @param Object $users      [Users object]
     * @param String $name       [Sender name]
     * @param String $subject    [Defect subject]
     * @param Object $defect     [Defect]
     *
     * @return Boolean
     */
    public function sendDefectAssignMails($users, $name, $subject, $defect)
    {
        $email_template = EmailTemplate::where('type', 'defect_assigned')->first();

        if (!empty($email_template)) {
            $url = config('app.front_url').'/#/defects/detail/'.$defect->id;
            $assignUser= User::select('id', 'firstname', 'lastname')->find($defect->assign_member);
            foreach ($users as $key => $value) {
                $message = $email_template->template_body;

                $site_name = str_replace("{SITE_NAME}", config('core.COMPANY_NAME'), $message);
                $defect_title = str_replace("{DEFECT_TITLE}", $defect->defect_name, $site_name);
                $assign_to = str_replace("{ASSIGNED_TO}", $assignUser->firstname.' '.$assignUser->lastname, $defect_title);
                $assign_by = str_replace("{ASSIGNED_BY}", $name, $assign_to);
                $message = str_replace("{DEFECT_URL}", $url, $assign_by);

                $this->_sendEmailsInQueue(
                    $value['email'],
                    $value['firstname'].' '.$value['lastname'],
                    $subject,
                    $message
                );
            }
        }
        return true;
    }

    /**
     * Send defects change status mail.
     *
     * @param Object $logginUser [Login user object]
     * @param Object $defect     [Defect object]
     *
     * @return Boolean
     */
    public function sendDefectStatusChangeMails($logginUser, $defect)
    {
        $status_list = [
            1 => 'Assigned',
            2 => 'Closed',
            3 => 'In Progress',
            4 => 'Open',
            5 => 'Solved',
            6 => 'Re-open',
            7 => 'Deferred',
        ];
        $url = config('app.front_url').'/#/defects/detail/'. $defect->id;
        $defects = $this->_getAssignDefectsUsers($defect->id);
        $email_template = EmailTemplate::where('type', 'defect_updated')->first();

        if (!empty($email_template)) {
            foreach ($defects->users as $key => $value) {
                $message = $email_template->template_body;
                $subject = $email_template->template_subject;

                $defect_name = str_replace("{DEFECT_TITLE}", $defect->defect_name, $message);
                $bug_status = str_replace("{STATUS}", $status_list[$defect->status], $defect_name);
                $assigned_by = str_replace("{MARKED_BY}", ucfirst($logginUser->firstname.' '.$logginUser->lastname), $bug_status);
                $site_url = str_replace("{DEFECT_URL}", $url, $assigned_by);
                $message = str_replace("{SITE_NAME}", config('core.COMPANY_NAME'), $site_url);

                $this->_sendEmailsInQueue(
                    $value->email,
                    $value->name,
                    $subject,
                    $message
                );
            }
        }
    }

    /**
     * Send defects assign user comment.
     *
     * @param Object $logginUser    [Login user object]
     * @param Object $defectComment [Defect comment object]
     *
     * @return Boolean
     */
    public function sendDefectCommentMail($logginUser, $defectComment)
    {
        $url = config('app.front_url').'/#/defects/detail/'. $defectComment->defect_id;
        $defects = $this->_getAssignDefectsUsers($defectComment->defect_id);
        $email_template = EmailTemplate::where('type', 'defect_comments')->first();

        if (!empty($email_template)) {
            foreach ($defects->users as $key => $value) {
                $message = $email_template->template_body;
                $subject = $email_template->template_subject;

                $posted_by = str_replace("{POSTED_BY}", $logginUser->firstname.' '.$logginUser->lastname, $message);
                $defect_name = str_replace("{DEFECT_TITLE}", $defects->defect_name, $posted_by);
                $site_url = str_replace("{COMMENT_URL}", $url, $defect_name);
                $comment = str_replace("{COMMENT_MESSAGE}", $defectComment->comment, $site_url);
                $message = str_replace("{SITE_NAME}", config('core.COMPANY_NAME'), $comment);

                $this->_sendEmailsInQueue(
                    $value->email,
                    $value->name,
                    $subject,
                    $message
                );
            }
        }
    }

    /**
     * Send defects assign user attachment.
     *
     * @param Object $logginUser       [Login user object]
     * @param Object $defectAttachment [Defect Attachment Object]
     *
     * @return Boolean
     */
    public function sendDefectAttachmentMail($logginUser, $defectAttachment)
    {
        $url = config('app.front_url').'/#/defects/detail/'. $defectAttachment->defect_id;
        $defects = $this->_getAssignDefectsUsers($defectAttachment->defect_id);
        $email_template = EmailTemplate::where('type', 'defect_attachment')->first();

        if (!empty($email_template)) {
            foreach ($defects->users as $key => $value) {
                $message = $email_template->template_body;
                $subject = $email_template->template_subject;

                $posted_by = str_replace("{UPLOADED_BY}", $logginUser->firstname.' '.$logginUser->lastname, $message);
                $defect_name = str_replace("{DEFECT_TITLE}", $defects->defect_name, $posted_by);
                $site_url = str_replace("{DEFECT_URL}", $url, $defect_name);
                $message = str_replace("{SITE_NAME}", config('core.COMPANY_NAME'), $site_url);

                $this->_sendEmailsInQueue(
                    $value->email,
                    $value->name,
                    $subject,
                    $message
                );
            }
        }
    }

    /**
     * Get assign defect users.
     *
     * @param Int $defectId [Defect Id]
     *
     * @return Object
     */
    private function _getAssignDefectsUsers($defectId)
    {
        return Defect::with([
            'users' => function ($query) {
                    $query->select('id','email',DB::raw("CONCAT(firstname,' ',lastname) as name"));
                }
            ])
            ->where('id',$defectId)
            ->first();
    }

    /**
     * Send incident assign email.
     *
     * @param Array  $users        [Users array]
     * @param String $name         [Login user name]
     * @param String $subject      [Email subject]
     * @param Object $incident [Incident]
     *
     * @return Boolean
     */
    public function sendIncidentAssignMails($users, $name, $subject, $incident)
    {
        $email_template = EmailTemplate::where('type', 'incident_assigned')->first();
        if (!empty($email_template)) {
            $url = config('app.front_url').'/#/incidents/detail/'.$incident->id;
            $assignUser= User::select('id', 'firstname', 'lastname')->find($incident->assign_to);
            foreach ($users as $key => $value) {
                $message = $email_template->template_body;

                $site_name = str_replace("{SITE_NAME}", config('core.COMPANY_NAME'), $message);
                $incident_title = str_replace("{INCIDENT_TITLE}", $incident->incident_name, $site_name);
                $assign_to = str_replace("{ASSIGNED_TO}", $assignUser->firstname.' '.$assignUser->lastname, $incident_title);
                $assign_by = str_replace("{ASSIGNED_BY}", $name, $assign_to);
                $message = str_replace("{INCIDENT_URL}", $url, $assign_by);

                $this->_sendEmailsInQueue(
                    $value['email'],
                    $value['firstname'].' '.$value['lastname'],
                    $subject,
                    $message
                );
            }
        }

        return true;
    }

    /**
     * Send incident change status mail.
     *
     * @param Object $logginUser [Login user object]
     * @param Object $incident     [Incident object]
     *
     * @return Boolean
     */
    public function sendIncidentStatusChangeMails($logginUser, $incident)
    {
        $status_list = [
            1 => 'Open',
            2 => 'Assigned',
            3 => 'In Progress',
            4 => 'Solved',
            5 => 'Deferred',
            6 => 'Re-open',
            7 => 'Closed',
        ];
        $url = config('app.front_url').'/#/incidents/detail/'. $incident->id;
        $incidentUsers = $this->_getAssignIncidentUsers($incident->id);
        $email_template = EmailTemplate::where('type', 'incident_updated')->first();
        if (!empty($email_template) && !empty($incidentUsers)) {
            foreach ($incidentUsers->users as $key => $value) {
                $message = $email_template->template_body;
                $subject = $email_template->template_subject;

                $incident_name = str_replace("{INCIDENT_TITLE}", $incident->incident_name, $message);
                $bug_status = str_replace("{STATUS}", $status_list[$incident->status], $incident_name);
                $assigned_by = str_replace("{MARKED_BY}", ucfirst($logginUser->firstname.' '.$logginUser->lastname), $bug_status);
                $site_url = str_replace("{INCIDENT_URL}", $url, $assigned_by);
                $message = str_replace("{SITE_NAME}", config('core.COMPANY_NAME'), $site_url);
                $this->_sendEmailsInQueue(
                    $value->email,
                    $value->name,
                    $subject,
                    $message
                );
            }
        }
    }

    /**
     * Send incidents comment mail.
     *
     * @param Object $logginUser      [Login user object]
     * @param Object $incidentComment [Incident comment]
     *
     * @return Boolean
     */
    public function sendIncidentCommentMail($logginUser, $incidentComment)
    {
        $url = config('app.front_url').'/#/incidents/detail/'. $incidentComment->incident_id;
        $incidentUsers = $this->_getAssignIncidentUsers($incidentComment->incident_id);
        $email_template = EmailTemplate::where('type', 'incident_comments')->first();

        if (!empty($email_template) && !empty($incidentUsers)) {
            $incidentName = $incidentUsers->incident_name;
            foreach ($incidentUsers->users as $key => $value) {
                $message = $email_template->template_body;
                $subject = $email_template->template_subject;

                $posted_by = str_replace("{POSTED_BY}", $logginUser->firstname.' '.$logginUser->lastname, $message);
                $incident_name = str_replace("{INCIDENT_TITLE}", $incidentName, $posted_by);
                $site_url = str_replace("{COMMENT_URL}", $url, $incident_name);
                $comment = str_replace("{COMMENT_MESSAGE}", $incidentComment->comment, $site_url);
                $message = str_replace("{SITE_NAME}", config('core.COMPANY_NAME'), $comment);

                $this->_sendEmailsInQueue(
                    $value->email,
                    $value->name,
                    $subject,
                    $message
                );
            }
        }
    }

    /**
     * Send incidents assign user attachment.
     *
     * @param Object $logginUser         [Login user object]
     * @param Object $incidentAttachment [Incident Attachment]
     *
     * @return Boolean
     */
    public function sendIncidentAttachmentMail($logginUser, $incidentAttachment)
    {
        $url = config('app.front_url').'/#/incidents/detail/'. $incidentAttachment->incident_id;
        $incidentUsers = $this->_getAssignIncidentUsers($incidentAttachment->incident_id);
        $email_template = EmailTemplate::where('type', 'incident_attachment')->first();

        if (!empty($email_template) && !empty($incidentUsers)) {
            $incidentName = $incidentUsers->incident_name;
            foreach ($incidentUsers->users as $key => $value) {
                $message = $email_template->template_body;
                $subject = $email_template->template_subject;

                $posted_by = str_replace("{UPLOADED_BY}", $logginUser->firstname.' '.$logginUser->lastname, $message);
                $incident_name = str_replace("{INCIDENT_TITLE}", $incidentName, $posted_by);
                $site_url = str_replace("{INCIDENT_URL}", $url, $incident_name);
                $message = str_replace("{SITE_NAME}", config('core.COMPANY_NAME'), $site_url);

                $this->_sendEmailsInQueue(
                    $value->email,
                    $value->name,
                    $subject,
                    $message
                );
            }
        }
    }

    /**
     * Get assign incident users.
     *
     * @param Int $incidentId [Row id]
     *
     * @return Object
     */
    private function _getAssignIncidentUsers($incidentId)
    {
        return Incident::with([
            'users' => function ($query) {
                $query->select('id',DB::raw("CONCAT(firstname,' ',lastname) as name"),'email');
            }
        ])
        ->where('id', $incidentId)
        ->first();
    }

    /**
     * Send appointment email.
     *
     * @param Array  $users      [Users array]
     * @param Object $appointment    [Appointment details]
     *
     * @return Boolean
     */
    public function sendAppointmentEmail($users, $appointment)
    {
        $email_template = EmailTemplate::where('type', 'appointment_mail')->first();

        if (!empty($email_template)) {
            foreach ($users as $key => $value) {
                $name = $value->firstname.' '.$value->lastname;
                $message = $email_template->template_body;
                $subject = $appointment->title .' '.date("l, F j, Y g:i A", strtotime($appointment->start_date_time));
                $appointment_date = date("l, F j, Y", strtotime($appointment->start_date_time));
                $appointment_time = date("g:i A", strtotime($appointment->start_date_time));
                $site_name = str_replace("{COMPANY_NAME}", config('core.COMPANY_NAME'), $message);
                $user_name = str_replace("{NAME}", $name, $site_name);
                $appointment_date_time = str_replace("{APPOINTEMENT_DATE}", $appointment_date, $user_name);
                $appointment_time_date = str_replace("{APPOINTEMENT_TIME}", $appointment_time, $appointment_date_time);
                $description = str_replace("{DESCRIPTION}", $appointment->note, $appointment_time_date);
                $message = str_replace("{LOCATION}", $appointment->location, $description);
                
                $this->_sendEmailsInQueue($value->email, $name, $subject, $message);
            }
        }
    }

    /**
     * Send leave request email.
     *
     * @param Object $leave    [Leave details]
     *
     * @return Boolean
     */
    public function sendLeaveRequestEmail($leave, $input = [])
    {
        $email_template = EmailTemplate::where('type', 'leave_request')->first();

        if (!empty($email_template)) {
            $leaveTypes = \Modules\LeaveType\Models\LeaveType::find($leave->leave_type_id);
            $user = User::find($leave->user_id);
            $users = [];
            array_push($users, $user->primary_manager, $user->secondary_manager);
            foreach ($users as $key => $value) {
                $u = User::select('email', 'firstname', 'lastname')->find($value);
                if (!empty($u)){
                    $message = $email_template->template_body;
                    $leave_type = str_replace("{LEAVE_TYPE}", $leaveTypes->leave_type, $message);
                    if ($leave->duration == 'multiple' && isset($input['multi_date'])) {
                        $leave_date = str_replace("{DATE}", implode(',', $input['multi_date']), $leave_type);
                    }else{
                        if ($leave->duration == "half") {
                           $leave_date = str_replace("{DATE}", $leave->leave_date. " (" .ucwords(str_replace('_', ' ', $leave->duration_type)). ")" , $leave_type);
                        }else{
                            $leave_date = str_replace("{DATE}", $leave->leave_date, $leave_type);
                        }
                    }
                    $reason = str_replace("{REASON}", $leave->reason, $leave_date);
                    $message = str_replace("{NAME}", $user->firstname." ".$user->lastname, $reason);

                    $this->_sendEmailsInQueue(
                        $u->email,
                        $u->firstname." ".$u->lastname, 
                        $email_template->template_subject, 
                        $message
                    );
                }
            }
        }
    }

    /**
     * Send leave approvel email.
     *
     * @param Object $leave    [Leave details]
     *
     * @return Boolean
     */
    public function sendLeaveApprovelEmail($leave)
    {
        $email_template = EmailTemplate::where('type', 'approve_leave')->first();

        if (!empty($email_template)) {

            $user = Auth::user();
            $req_user = User::find($leave->user_id);
            $req_user_name = $req_user->firstname." ".$req_user->lastname;

            $message = $email_template->template_body;
            $name = str_replace("{NAME}", $req_user_name, $message);
            $leave_type = str_replace("{LEAVE_TYPE}", $leave->leaveType->leave_type, $name);
            $leave_date = str_replace("{DATE}", $leave->leave_date, $leave_type);
            $message = str_replace("{APPROVED_BY}", $user->firstname." ".$user->lastname, $leave_date);

            $this->_sendEmailsInQueue(
                $req_user->email,
                $req_user_name, 
                $email_template->template_subject, 
                $message
            );
        }
    }

    /**
     * Send leave rejection email.
     *
     * @param Object $leave    [Leave details]
     *
     * @return Boolean
     */
    public function sendLeaveRejectionEmail($leave)
    {
        $email_template = EmailTemplate::where('type', 'reject_leave')->first();

        if (!empty($email_template)) {

            $user = Auth::user();
            $req_user = User::find($leave->user_id);
            $req_user_name = $req_user->firstname." ".$req_user->lastname;

            $message = $email_template->template_body;
            $name = str_replace("{NAME}", $req_user_name, $message);
            $leave_type = str_replace("{LEAVE_TYPE}", $leave->leaveType->leave_type, $name);
            $leave_date = str_replace("{DATE}", $leave->leave_date, $leave_type);
            $reject_reason = str_replace("{REJECT_REASON}", $leave->reject_reason, $leave_date);
            $message = str_replace("{REJECT_BY}", $user->firstname." ".$user->lastname, $reject_reason);

            $this->_sendEmailsInQueue(
                $req_user->email,
                $req_user_name, 
                $email_template->template_subject, 
                $message
            );
        }
    }

    /**
     * Send estimate to customer.
     *
     * @param Object $estimate    [Estimate details]
     *
     * @return Boolean
     */
    public function sendEstimateEmail($estimate)
    {
        $email_template = EmailTemplate::where('type', 'send_estimate')->first();

        if (!empty($email_template)) {
            $currency = Setting::Currency()->first();
            $setting = Setting::select('company_name', 'company_address', 'company_phone')->first();
            $estimateSetting = \Modules\Estimate\Models\EstimateSetting::first();
            $url = config('app.front_url').'/#/estimates/detail/'.$estimate->id;
            $body = $email_template->template_body;
            $customer_name = str_replace("{CUSTOMER_NAME}", $estimate->client->full_name, $body);
            $amount = str_replace("{AMOUNT}", $currency->symbol.' '.number_format($estimate->total_amount,2), $customer_name);
            $estimate_number = str_replace("{ESTIMATE_NUMBER}", $estimate->estimate_number, $amount);
            $estimate_url = str_replace("{ESTIMATE_URL}", $url, $estimate_number);
            $body = str_replace("{COMPANY_NAME}", config('core.COMPANY_NAME'), $estimate_url);

            $subject = str_replace("{ESTIMATE_NUMBER}", $estimate->estimate_number, $email_template->template_subject);

            \View::addLocation(base_path().'/Modules/Estimate/Resources/views');
            $pdf = \PDF::loadView('estimate-1', compact('estimate', 'currency', 'setting', 'estimateSetting'));
            $pdfStream = $pdf->stream();

            try {
                Mail::send([], [], function ($message) use ($subject, $estimate, $body, $pdfStream) {
                    $message->setBody($body, 'text/html');
                    $message->to($estimate->client->email, $estimate->client->full_name);
                    $message->subject($subject);
                    $message->attachData($pdfStream, $estimate->estimate_number.'.pdf', ['mime' => 'application/pdf']);
                });
                return [ 'status' => true ];
            } catch (\Exception $e) {
                return [ 'status' => false, 'msg' => $e->getMessage() ];
            }
        }
    }

    /**
     * Send estimate declined email to staff.
     *
     * @param Object $estimate    [Estimate details]
     *
     * @return Boolean
     */
    public function sendEstimateDeclinedEmail($estimate)
    {
        $email_template = EmailTemplate::where('type', 'estimate_declined')->first();

        if (!empty($email_template)) {
            $url = config('app.front_url').'/#/estimates/detail/'.$estimate->id;
            $client_name = $estimate->client->firstname.' '.$estimate->client->lastname;
            $subject = str_replace("{ESTIMATE_NUMBER}", $estimate->estimate_number, $email_template->template_subject);
            $body = $email_template->template_body;
            $customer_name = str_replace("{CUSTOMER_NAME}", $client_name, $body);
            $estimate_number = str_replace("{ESTIMATE_NUMBER}", $estimate->estimate_number, $customer_name);
            $message = str_replace("{ESTIMATE_URL}", $url, $estimate_number);

            $this->_sendEmailsInQueue(
                $estimate->user->email,
                $estimate->user->firstname.' '.$estimate->user->lastname, 
                $subject, 
                $message
            );
        }
    }

    /**
     * Send estimate accepted email to staff.
     *
     * @param Object $estimate    [Estimate details]
     *
     * @return Boolean
     */
    public function sendEstimateAcceptedEmail($estimate)
    {
        $email_template = EmailTemplate::where('type', 'estimate_accepted')->first();

        if (!empty($email_template)) {
            $url = config('app.front_url').'/#/estimates/detail/'.$estimate->id;
            $client_name = $estimate->client->firstname.' '.$estimate->client->lastname;
            $subject = str_replace("{ESTIMATE_NUMBER}", $estimate->estimate_number, $email_template->template_subject);
            $body = $email_template->template_body;
            $customer_name = str_replace("{CUSTOMER_NAME}", $client_name, $body);
            $estimate_number = str_replace("{ESTIMATE_NUMBER}", $estimate->estimate_number, $customer_name);
            $message = str_replace("{ESTIMATE_URL}", $url, $estimate_number);

            $this->_sendEmailsInQueue(
                $estimate->user->email,
                $estimate->user->firstname.' '.$estimate->user->lastname, 
                $subject, 
                $message
            );
        }
    }

    /**
     * Send estimate thank you email to customer.
     *
     * @param Object $estimate    [Estimate details]
     *
     * @return Boolean
     */
    public function sendEstimateThankYouEmail($estimate)
    {
        $email_template = EmailTemplate::where('type', 'thank_you_for_accepting_estimate')->first();
        
        if (!empty($email_template)) {
            $client_name = $estimate->client->firstname.' '.$estimate->client->lastname;
            $subject = str_replace("{ESTIMATE_NUMBER}", $estimate->estimate_number, $email_template->template_subject);
            $body = $email_template->template_body;
            $customer_name = str_replace("{CUSTOMER_NAME}", $client_name, $body);
            $estimate_number = str_replace("{ESTIMATE_NUMBER}", $estimate->estimate_number, $customer_name);
            $message = str_replace("{COMPANY_NAME}", config('core.COMPANY_NAME'), $estimate_number);

            $this->_sendEmailsInQueue(
                $estimate->client->email,
                $client_name, 
                $subject, 
                $message
            );
        }
    }

    /**
     * Send estimate expiration reminder email to customer.
     *
     * @param Object $estimate    [Estimate details]
     *
     * @return Boolean
     */
    public function sendEstimateExpirationReminderEmail($estimate)
    {
        $email_template = EmailTemplate::where('type', 'estimate_expiration_reminder')->first();
        
        if (!empty($email_template)) {
            $url = config('app.front_url').'/#/estimates/detail/'.$estimate->id;
            $client_name = $estimate->client->firstname.' '.$estimate->client->lastname;
            $subject = str_replace("{ESTIMATE_NUMBER}", $estimate->estimate_number, $email_template->template_subject);
            $body = $email_template->template_body;
            $customer_name = str_replace("{CUSTOMER_NAME}", $client_name, $body);
            $estimate_number = str_replace("{ESTIMATE_NUMBER}", $estimate->estimate_number, $customer_name);
            $estimate_valid_till = str_replace("{ESTIMATE_VALID_TILL}", date("d-m-Y", strtotime($estimate->valid_till)), $estimate_number);
            $estimate_url = str_replace("{ESTIMATE_URL}", $url, $estimate_valid_till);
            $message = str_replace("{COMPANY_NAME}", config('core.COMPANY_NAME'), $estimate_url);

            $this->_sendEmailsInQueue(
                $estimate->client->email,
                $client_name, 
                $subject, 
                $message
            );
        }
    }

    /**
     * Send invoice to customer.
     *
     * @param Object $invoice    [Invoice details]
     *
     * @return Boolean
     */
    public function sendInvoiceEmail($invoice)
    {
        $email_template = EmailTemplate::where('type', 'send_invoice')->first();

        if (!empty($email_template)) {
            $currency = Setting::Currency()->first();
            $setting = Setting::select('company_name', 'company_address', 'company_phone')->first();
            $invoiceSetting = \Modules\Invoice\Models\InvoiceSetting::first();
            $paymentMethods = \Modules\Payment\Models\PaymentMethod::where('status', 1)->where('show_on_pdf', 1)->get();

            $url = config('app.front_url').'/#/invoices/detail/'.$invoice->id;
            $body = $email_template->template_body;
            $customer_name = str_replace("{CUSTOMER_NAME}", $invoice->client->full_name, $body);
            $amount = str_replace("{AMOUNT}", $currency->symbol.' '.number_format($invoice->total_amount,2), $customer_name);
            $invoice_number = str_replace("{INVOICE_NUMBER}", $invoice->invoice_number, $amount);
            $invoice_url = str_replace("{INVOICE_URL}", $url, $invoice_number);
            $body = str_replace("{COMPANY_NAME}", config('core.COMPANY_NAME'), $invoice_url);

            $subject = str_replace("{INVOICE_NUMBER}", $invoice->invoice_number, $email_template->template_subject);

            \View::addLocation(base_path().'/Modules/Invoice/Resources/views');
            $pdf = \PDF::loadView('invoice-1', compact('invoice', 'currency', 'setting', 'invoiceSetting', 'paymentMethods'));
            $pdfStream = $pdf->stream();

            try {
                Mail::send([], [], function ($message) use ($subject, $invoice, $body, $pdfStream) {
                    $message->setBody($body, 'text/html');
                    $message->to($invoice->client->email, $invoice->client->full_name);
                    $message->subject($subject);
                    $message->attachData($pdfStream, $invoice->invoice_number.'.pdf', ['mime' => 'application/pdf']);
                });
                return [ 'status' => true ];
            } catch (\Exception $e) {
                return [ 'status' => false, 'msg' => $e->getMessage() ];
            }
        }
    }

    /**
     * Send invoice expiration reminder email to customer.
     *
     * @param Object $invoice    [Invoice details]
     *
     * @return Boolean
     */
    public function sendInvoiceExpirationReminderEmail($invoice)
    {
        $email_template = EmailTemplate::where('type', 'invoice_overdue_notice')->first();
        
        if (!empty($email_template)) {
            $url = config('app.front_url').'/#/invoices/detail/'.$invoice->id;
            $subject = str_replace("{INVOICE_NUMBER}", $invoice->invoice_number, $email_template->template_subject);
            $body = $email_template->template_body;
            $customer_name = str_replace("{CUSTOMER_NAME}", $invoice->client->full_name, $body);
            $invoice_number = str_replace("{INVOICE_NUMBER}", $invoice->invoice_number, $customer_name);
            $invoice_due_date = str_replace("{DUE_DATE}", date("d-m-Y", strtotime($invoice->due_date)), $invoice_number);
            $invoice_url = str_replace("{INVOICE_URL}", $url, $invoice_due_date);
            $message = str_replace("{COMPANY_NAME}", config('core.COMPANY_NAME'), $invoice_url);

            $this->_sendEmailsInQueue(
                $invoice->client->email,
                $invoice->client->full_name, 
                $subject, 
                $message
            );
        }
    }

    /**
     * Send payment receipt to customer.
     *
     * @param Object $payment    [Payment details]
     *
     * @return Boolean
     */
    public function sendPaymentEmailToCustomer($payment)
    {
        $email_template = EmailTemplate::where('type', 'payment_added_send_to_customer')->first();

        if (!empty($email_template)) {
            $currency = Setting::Currency()->first();
            $setting = Setting::select('company_name', 'company_address', 'company_phone')->first();
            $invoiceSetting = \Modules\Invoice\Models\InvoiceSetting::first();
            $url = config('app.front_url').'/#/invoices/detail/'.$payment->invoice_id;
            $body = $email_template->template_body;
            $customer_name = str_replace("{CUSTOMER_NAME}", $payment->client->full_name, $body);
            $receipt_number = str_replace("{RECEIPT_NUMBER}", $payment->receipt_number, $customer_name);
            $invoice_number = str_replace("{INVOICE_NUMBER}", $payment->invoice->invoice_number, $receipt_number);
            $invoice_url = str_replace("{INVOICE_URL}", $url, $invoice_number);
            $body = str_replace("{COMPANY_NAME}", config('core.COMPANY_NAME'), $invoice_url);

            $subject = str_replace("{INVOICE_NUMBER}", $payment->invoice->invoice_number, $email_template->template_subject);

            \View::addLocation(base_path().'/Modules/Payment/Resources/views');
            $pdf = \PDF::loadView('payment-1', compact('payment', 'currency', 'setting', 'invoiceSetting'));
            $pdfStream = $pdf->stream();

            try {
                Mail::send([], [], function ($message) use ($subject, $payment, $body, $pdfStream) {
                    $message->setBody($body, 'text/html');
                    $message->to($payment->client->email, $payment->client->full_name);
                    $message->subject($subject);
                    $message->attachData($pdfStream, $payment->receipt_number.'.pdf', ['mime' => 'application/pdf']);
                });
                return [ 'status' => true ];
            } catch (\Exception $e) {
                return [ 'status' => false, 'msg' => $e->getMessage() ];
            }
        }
    }

    /**
     * Send payment email to staff.
     *
     * @param Object $payment    [Payment details]
     *
     * @return Boolean
     */
    public function sendPaymentEmailToStaff($payment)
    {
        $email_template = EmailTemplate::where('type', 'payment_added_send_to_staff')->first();

        if (!empty($email_template)) {
            $url = config('app.front_url').'/#/invoices/detail/'.$payment->invoice_id;
            $subject = str_replace("{INVOICE_NUMBER}", $payment->invoice->invoice_number, $email_template->template_subject);
            $body = $email_template->template_body;
            $invoice_number = str_replace("{INVOICE_NUMBER}",  $payment->invoice->invoice_number, $body);
            $invoice_url = str_replace("{INVOICE_URL}", $url, $invoice_number);
            $message = str_replace("{CUSTOMER_NAME}", $payment->client->full_name, $invoice_url);

            $this->_sendEmailsInQueue(
                $payment->invoice->user->email,
                $payment->invoice->user->full_name, 
                $subject, 
                $message
            );
        }
    }
}
