(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["modules-pm-tasks-tasks-module"],{

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/modules/pm/tasks/components/create-attachment-modal/create-attachment-modal.component.html":
/*!**************************************************************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/modules/pm/tasks/components/create-attachment-modal/create-attachment-modal.component.html ***!
  \**************************************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<div class=\"modal-header\">\r\n    <h2 class=\"modal-title font-weight-normal\">\r\n        <i aria-hidden=\"true\" class=\"fa fa-paperclip modal-icon\"></i>&nbsp;{{'attachments.title' | translate}}</h2>\r\n    <button (click)=\"bsCreateAttachmentModalRef.hide()\" aria-label=\"Close\" class=\"close\" data-dismiss=\"modal\" type=\"button\">\r\n        <span aria-hidden=\"true\">&times;</span></button>\r\n</div>\r\n<form (ngSubmit)=\"onSubmit()\" [formGroup]=\"createAttachmentForm\" class=\"form\">\r\n    <div class=\"modal-body\">\r\n        <div class=\"form-body\">\r\n            <div class=\"row\">\r\n                <div class=\"col-md-12\">\r\n                    <div class=\"form-group\">\r\n                        <label for=\"file_name\">{{'attachments.create.fields.file_title' | translate }}\r\n                            <span class=\"text-danger\">&nbsp;*</span></label>\r\n                        <input [ngClass]=\"{ 'is-invalid': isFormSubmitted && attachment.file_name.errors }\" class=\"form-control\" formControlName=\"file_name\" id=\"file_name\" placeholder=\"{{'attachments.create.placeholders.placeholder1' | translate }}\" type=\"text\"/>\r\n                        <div *ngIf=\"isFormSubmitted && attachment.file_name.errors\" class=\"invalid-feedback\">\r\n                            <div *ngIf=\"attachment.file_name.errors.required\">{{'attachments.create.error_messages.message1' | translate }}</div>\r\n                            <div *ngIf=\"attachment.file_name.errors.maxlength\">{{'attachments.create.error_messages.message5' | translate}}</div>\r\n                        </div>\r\n                    </div>\r\n                </div>\r\n                <div class=\"col-md-12\">\r\n                    <div [ngClass]=\"{ 'is-invalid': isFormSubmitted && attachment.file.errors }\" class=\"form-group\">\r\n                        <label for=\"file\">{{'attachments.create.fields.attachment' | translate }}\r\n                            <span class=\"text-danger\">&nbsp;*</span></label>\r\n                        <input formControlName=\"file\" type=\"hidden\">\r\n                        <div #logodropzone class=\"dropzone dz-clickable\">\r\n                            <div class=\"dz-default dz-message\">\r\n                                <span><strong>{{'attachments.create.error_messages.message2' | translate }}</strong></span>\r\n                            </div>\r\n                        </div>\r\n                        <div *ngIf=\"isFormSubmitted && attachment.file.errors\" class=\"invalid-feedback\">\r\n                            <div *ngIf=\"attachment.file.errors.required\">{{'attachments.create.error_messages.message3' | translate }}</div>\r\n                        </div>\r\n                    </div>\r\n                </div>\r\n                <input formControlName=\"file_extension\" type=\"hidden\">\r\n            </div>\r\n        </div>\r\n    </div>\r\n    <div class=\"modal-footer\">\r\n        <button (click)=\"onCancel()\" class=\"btn btn-cancel mb-0\" data-dismiss=\"modal\" type=\"button\">{{'common.cancel' | translate }}</button>\r\n        <button class=\"btn btn-submit mb-0\" type=\"submit\">{{'common.create' | translate }}</button>\r\n    </div>\r\n</form>\r\n");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/modules/pm/tasks/components/task-activities/task-activities.component.html":
/*!**********************************************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/modules/pm/tasks/components/task-activities/task-activities.component.html ***!
  \**********************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<div class=\"activity-timeline\">\r\n    <div class=\"card overflow-hidden shadow-none p-2\">\r\n        <div [perfectScrollbar]=\"scrollConfig\" class=\"card-body\">\r\n            <ul class=\"timeline pr-2\">\r\n                <li *ngFor=\"let activity of task.activities; index as i\" class=\"d-flex flex-column\">\r\n                    <div class=\"d-flex flex-column flex-md-row justify-content-start justify-content-md-between\">\r\n                        <a [routerLink]=\"['/users/profile', activity.user.id]\" placement=\"top\" tooltip=\"{{activity.user.firstname}} {{activity.user.lastname}}\">\r\n                            <img *ngIf=\"!activity.user.avatar\" alt=\"Profile Photo\" class=\"user-profile\" src=\"../assets/img/profile_small.jpg\"/>\r\n                            <img *ngIf=\"activity.user.avatar\" alt=\"Profile Photo\" class=\"user-profile\" src=\"{{apiUrl}}/uploads/profile/{{activity.user.avatar}}\"/>\r\n                            <span class=\"ml-1 activity-user\">{{activity.user.firstname}} {{activity.user.lastname}}</span>\r\n                        </a>\r\n                        <a class=\"float-left activity-date\" href=\"javascript:void(0)\">\r\n                            <span class=\"badge badge-secondary\">{{activity.diff_for_humans}}</span>\r\n                            {{activity.created_at | dateTimeFormatFilter: loginUser.settings.date_time_format }}\r\n                        </a>\r\n                    </div>\r\n                    <p [innerHTML]=\"activity.description\"></p>\r\n                </li>\r\n            </ul>\r\n        </div>\r\n    </div>\r\n</div>\r\n");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/modules/pm/tasks/components/task-attachments/task-attachments.component.html":
/*!************************************************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/modules/pm/tasks/components/task-attachments/task-attachments.component.html ***!
  \************************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<!-- Card header -->\r\n<div class=\"card-header justify-content-center p-0\">\r\n    <div class=\"card-buttons pt-2 pb-2 pr-1\">\r\n        <button (click)=\"openAttachmentCreateModal()\" class=\"btn btn-create mb-0\" tooltip=\"{{'common.create' | translate}}\" type=\"button\">\r\n            <i class=\"fa fa-upload\"></i><span>{{'common.drag_file' | translate}}</span></button>\r\n    </div>\r\n</div><!-- Card body -->\r\n<div class=\"card-body\">\r\n    <div *ngIf=\"attachments?.length != 0\" class=\"row border-top pt-2\">\r\n        <div *ngFor=\"let file of attachments; index as i\" class=\"col-sm-4\">\r\n            <div class=\"file-browser\">\r\n                <div class=\"actions-dropdown text-right m-1 pr-2\">\r\n                    <div class=\"btn-group\" dropdown>\r\n                        <a aria-controls=\"dropdown-basic-1\" class=\"dropdown-toggle\" dropdownToggle href=\"javascript:void(0);\" id=\"button-basic-1\"><i class=\"fa fa-ellipsis-v\"></i></a>\r\n                        <ul *dropdownMenu aria-labelledby=\"button-basic-1\" class=\"dropdown-menu animated fadeIn\" id=\"dropdown-basic-1\" role=\"menu\">\r\n                            <li role=\"menuitem\">\r\n                                <a class=\"dropdown-item btn btn-download btn-raised\" download=\"{{file.file_name}}\" href=\"{{apiUrl}}/uploads/task_attachment/{{file.file_hash}}\" target=\"_blank\" tooltip=\"{{'common.download' | translate}}\"><i class=\"fa fa-download\"></i></a>\r\n                            </li>\r\n                            <li *ngIf=\"permission\" role=\"menuitem\">\r\n                                <a (click)=\"attachmentDelete(attachment.id)\" class=\"dropdown-item btn btn-delete btn-raised\" tooltip=\"{{'common.delete' | translate}}\"><i class=\"fa fa-trash-o\"></i></a>\r\n                            </li>\r\n                        </ul>\r\n                    </div>\r\n                </div>\r\n                <div class=\"file-box\">\r\n                    <div class=\"files\">\r\n                        <div *ngIf=\"file.icon\" class=\"icon docx\">\r\n                            <i [ngClass]=\"file.icon\"></i>\r\n                        </div>\r\n                        <div *ngIf=\"file.isImageFile\" class=\"image\">\r\n                            <img alt=\"image\" class=\"img-fluid height-100\" src=\"{{ apiUrl }}/uploads/task_attachment/{{file.file_hash}}\"/>\r\n                        </div>\r\n                        <div class=\"file-name\">\r\n                            <a download=\"{{file.file_name}}\" href=\"{{apiUrl}}/uploads/task_attachment/{{file.file_hash}}\" target=\"_blank\" tooltip=\"{{file.file_name}}\">\r\n                                <h4>{{ (file.file_name.length > 20) ? (file.file_name | slice:0:20) + '..' : (file.file_name) }}</h4>\r\n                            </a>\r\n                            <p>{{'file_browser.title7' | translate}}: {{ file.updated_at | dateTimeFormatFilter:loginUser.settings.date_time_format }}</p>\r\n                        </div>\r\n                    </div>\r\n                    <span class=\"corner\"></span>\r\n                </div>\r\n            </div>\r\n        </div>\r\n    </div>\r\n    <div *ngIf=\"attachments?.length == 0\" class=\"row border-top pt-2\">\r\n        <div class=\"col-sm-12 text-center\">{{'common.datatable.sEmptyTable' | translate}}</div>\r\n    </div>\r\n</div>\r\n");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/modules/pm/tasks/components/task-comments/task-comments.component.html":
/*!******************************************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/modules/pm/tasks/components/task-comments/task-comments.component.html ***!
  \******************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<!-- Card header -->\r\n<div class=\"card-header p-0\">\r\n    <div class=\"card-buttons pt-2 pb-2 pr-1\">\r\n        <button (click)=\"onSubmit()\" class=\"btn btn-create mb-0\" id=\"post_comment\" tooltip=\"{{'common.create_comment' | translate}}\">\r\n            <i class=\"fa fa-plus\"></i><span>{{'comments.buttons.button1' | translate}}</span></button>\r\n    </div>\r\n</div><!-- Card body -->\r\n<div class=\"card-body\">\r\n    <div class=\"row\">\r\n        <div class=\"col-sm-12\">\r\n            <form [formGroup]=\"taskCommentsForm\" class=\"bs4-forms\">\r\n                <div class=\"form-group\">\r\n                    <textarea [ngClass]=\"{ 'is-invalid': isCommentFormSubmitted && commentControl.comment.errors }\" class=\"form-control\" formControlName=\"comment\" id=\"comment\" name=\"comment\" placeholder=\"{{'comments.create.placeholders.placeholder1' | translate}}\"></textarea>\r\n                    <div *ngIf=\"isCommentFormSubmitted && commentControl.comment.errors\" class=\"invalid-feedback\">\r\n                        <div *ngIf=\"commentControl.comment.errors.required\">{{'comments.create.error_messages.message1' | translate}}</div>\r\n                    </div>\r\n                </div>\r\n                <div class=\"form-group\">\r\n                    <input formControlName=\"files\" type=\"hidden\">\r\n                    <div #commentdropzone class=\"dropzone dz-clickable\">\r\n                        <div class=\"dz-default dz-message\">\r\n                            <span><strong>{{'comments.create.error_messages.message2' | translate}}</strong></span>\r\n                        </div>\r\n                    </div>\r\n                </div>\r\n            </form>\r\n        </div>\r\n    </div>\r\n    <!-- Comments lists -->\r\n    <div class=\"row\">\r\n        <div class=\"col-sm-12\">\r\n            <accordion [closeOthers]=\"oneAtATime\">\r\n                <ng-container *ngFor=\"let comment of comments\">\r\n                    <accordion-group [panelClass]=\"customClass\">\r\n                        <button accordion-heading class=\"btn btn-link btn-block d-lg-flex justify-content-between\" type=\"button\">\r\n                            <div class=\"\">\r\n                                <i class=\"fa fa-angle-down\"></i>\r\n                                <img *ngIf=\"!comment.user.avatar\" alt=\"User profile\" class=\"img-sm rounded-circle\" src=\"../assets/img/profile_large.jpg\"/>\r\n                                <img *ngIf=\"comment.user.avatar\" alt=\"User profile\" class=\"img-sm rounded-circle\" src=\"{{apiUrl}}/uploads/profile/{{comment.user.avatar}}\"/>\r\n                                <span>{{comment.user.firstname}} {{comment.user.lastname}}</span>\r\n                            </div>\r\n                            <div class=\" text-dark pt-1\">{{comment.created_at | dateTimeFormatFilter: loginUser.settings.date_time_format }}</div>\r\n                        </button>\r\n                        <div class=\"comment-text\">\r\n                            <inline-edit-textarea (updateValue)=\"saveComments(comment, 'comment', $event);\" [elementFor]=\"'common.comment' | translate\" [fieldValue]=\"comment.comment\" [isRequired]=\"'true'\" [name]=\"'comment'\"></inline-edit-textarea>\r\n                            <ul *ngIf=\"comment.attachments\" class=\"attachment_box\">\r\n                                <li *ngFor=\"let item of comment.attachments;let i = index; trackBy: i\">\r\n                                    <a download=\"{{item.name}}\" href=\"{{apiUrl}}/uploads/task_attachment/{{item.file}}\" target=\"_blank\"><span>{{item.name}}</span></a>\r\n                                </li>\r\n                            </ul>\r\n                        </div>\r\n                        <div class=\"comment-reply\">\r\n                            <a (click)=\"commentDelete(comment.id)\" *ngIf=\"permission\" class=\"text-danger\">{{'common.remove' | translate}}</a>\r\n                            <!-- <a (click)=\"showReplayCommentBox(comment.id)\">{{'comments.buttons.button2' | translate}}</a> -->\r\n                        </div>\r\n                    </accordion-group>\r\n                </ng-container>\r\n            </accordion>\r\n        </div>\r\n    </div>\r\n\r\n</div>\r\n");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/modules/pm/tasks/components/task-details/task-details.component.html":
/*!****************************************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/modules/pm/tasks/components/task-details/task-details.component.html ***!
  \****************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<div class=\"card-content\">\r\n    <div class=\"card-body\">\r\n        <div class=\"row mr-2 ml-2\">\r\n            <div class=\"col-md-12 card-separator\">\r\n                <div class=\"d-flex justify-content-between\">\r\n                    <div class=\" task-name d-lg-flex\">\r\n                        <h4 class=\"task-id\"><span>#{{task.generated_id}}</span></h4>\r\n                        <p class=\"task-title ml-lg-2\">\r\n                            {{task.name}}\r\n                        </p>\r\n                    </div>\r\n                    <div class=\" task-action\">\r\n                        <a *ngIf=\"permission\" [routerLink]=\"['/tasks/edit', task.id]\" class=\"btn btn-create mb-2 mb-lg-0 float-right\" tooltip=\"{{'common.edit' | translate}}\"><i class=\"fa fa-pencil-square-o\"></i></a>\r\n                    </div>\r\n                </div>\r\n            </div>\r\n            <div class=\"col-md-12 pr-0 pl-0 \">\r\n                <form class=\"form-body overflow-hidden mt-3\">\r\n                    <!-- Detail fields -->\r\n                    <div class=\"col-md-12\">\r\n                        <div class=\"row\">\r\n                            <!-- left side -->\r\n                            <div class=\"col-lg-4 pr-lg-3 pl-lg-2 pr-2 pl-2\">\r\n                                <div class=\"row\">\r\n                                    <div class=\"col\">\r\n                                        <div class=\"row\">\r\n                                            <div class=\"col card-separator mb-3\">\r\n                                                <div class=\"col-lg-12 mb-3\">\r\n                                                    <label>{{'tasks.create.fields.project_name' | translate}}</label>\r\n                                                    <div class=\"detail-inline\">{{task.project1.project_name}}</div>\r\n                                                </div>\r\n                                                <div class=\"col-lg-12 mb-3\">\r\n                                                    <label>{{'tasks.create.fields.project_version' | translate}}</label>\r\n                                                    <div class=\"detail-inline\">{{task.project_version}}</div>\r\n                                                </div>\r\n                                                <div class=\"col-md-12 mb-3 d-flex justify-content-between\">\r\n                                                    <div>\r\n                                                        <label>{{'tasks.create.fields.status' | translate}}</label>\r\n                                                        <div class=\"status-dropdown\">\r\n                                                            <ng-container *ngIf=\"permission; else elseBlock\">\r\n                                                                <div class=\"btn-group\" dropdown>\r\n                                                                    <button aria-controls=\"dropdown-basic\" class=\"btn dropdown-toggle select-btn-lg\" dropdownToggle id=\"button-basic\" type=\"button\">{{getTranslateStatus(task.status) | translate}}&nbsp;<span class=\"caret\"></span>\r\n                                                                    </button>\r\n                                                                    <ul *dropdownMenu aria-labelledby=\"button-basic\" class=\"dropdown-menu animated fadeIn\" id=\"dropdown-basic\" role=\"menu\">\r\n                                                                        <li *ngFor=\"let status of (getTaskStatus(task.status) | translate)\" role=\"menuitem\">\r\n                                                                            <a (click)=\"changeTaskStatus([task.id], status);task.status = status.id\" [ngClass]=\"{'active': task.status == status.id}\" class=\"dropdown-item btn btn-sm {{status.class}}\">{{status.label}}</a>\r\n                                                                        </li>\r\n                                                                    </ul>\r\n                                                                </div>\r\n                                                            </ng-container>\r\n                                                            <ng-template #elseBlock>\r\n                                                                <ng-container *ngFor=\"let status of (getTaskStatus(task.status) | translate)\">\r\n                                                                    <div class=\"budges-status\">\r\n                                                                        <span *ngIf=\"status.id == task.status\" class=\"{{status.class}}\">{{status.label}}</span>\r\n                                                                    </div>\r\n                                                                </ng-container>\r\n                                                            </ng-template>\r\n                                                        </div>\r\n                                                    </div>\r\n                                                    <div>\r\n                                                        <label>{{'tasks.create.fields.priority' | translate }}</label>\r\n                                                        <ng-container *ngIf=\"permission; else elseBlock8\">\r\n                                                            <div class=\"status-dropdown\">\r\n                                                                <div class=\"btn-group\" dropdown>\r\n                                                                    <button aria-controls=\"dropdown-basic-3\" class=\"btn dropdown-toggle\" dropdownToggle id=\"button-basic-3\" type=\"button\">{{getTranslatePriorities(task.priority) | translate}}&nbsp;<span class=\"caret\"></span>\r\n                                                                    </button>\r\n                                                                    <ul *dropdownMenu aria-labelledby=\"button-basic-3\" class=\"dropdown-menu animated fadeIn\" id=\"dropdown-basic-3\" role=\"menu\">\r\n                                                                        <li *ngFor=\"let priority of ('tasks.priorities' | translate)\" role=\"menuitem\">\r\n                                                                            <a (click)=\"changeTaskPriority([task.id], priority);task.priority = priority.id\" [ngClass]=\"{'active': task.priority == priority.id}\" class=\"dropdown-item btn btn-sm {{priority.class}}\">{{priority.label}}</a>\r\n                                                                        </li>\r\n                                                                    </ul>\r\n                                                                </div>\r\n                                                            </div>\r\n                                                        </ng-container>\r\n                                                        <ng-template #elseBlock8>\r\n                                                            <ng-container *ngFor=\"let priority of ('tasks.priorities' | translate)\">\r\n                                                                <div class=\"budges-status\">\r\n                                                                    <span *ngIf=\"priority.id == task.priority\" class=\"{{priority.class}}\">{{priority.label}}</span>\r\n                                                                </div>\r\n                                                            </ng-container>\r\n                                                        </ng-template>\r\n                                                    </div>\r\n                                                </div>\r\n                                                <div class=\"col-lg-12 mb-3 d-flex justify-content-between\">\r\n                                                    <div class=\"text-center\">\r\n                                                        <label>{{'tasks.create.fields.created_by' | translate}}</label>\r\n                                                        <div class=\"people-lists\">\r\n                                                            <a [routerLink]=\"['/users/profile', task.created_by]\" class=\"btn btn-profile-info rounded-circle text-dark\" placement=\"top\" tooltip=\"{{task.created_firstname}} {{task.created_lastname}}\">\r\n                                                                <img *ngIf=\"task.created_avatar\" alt=\"Profile\" class=\"img-sm rounded-circle\" src=\"{{apiUrl}}/uploads/profile/{{task.created_avatar}}\"/>\r\n                                                                <img *ngIf=\"!task.created_avatar\" alt=\"Profile\" class=\"img-sm rounded-circle\" src=\"../assets/img/profile_small.jpg\"/>\r\n                                                            </a><br>\r\n                                                            <span class=\"mt-2\">{{task.created_firstname}} {{task.created_lastname}}</span>\r\n                                                        </div>\r\n                                                    </div>\r\n                                                    <div class=\"text-center\">\r\n                                                        <label>{{'tasks.create.fields.assigned_To' | translate}}</label>\r\n                                                        <div class=\"people-lists\">\r\n                                                            <ng-container *ngIf=\"task.assign_user == null; else elseBlock6\">\r\n                                                                <a class=\"btn btn-profile-danger rounded-circle text-dark\" href=\"javascript:void(0);\" placement=\"top\" tooltip=\"{{'common.unassigned' | translate}}\">\r\n                                                                    <img alt=\"Profile\" class=\"img-sm rounded-circle\" src=\"../assets/img/unassign.jpg\"/>\r\n                                                                </a>\r\n                                                            </ng-container>\r\n                                                            <ng-template #elseBlock6>\r\n                                                                <a [routerLink]=\"['/users/profile', task.assign_user.id]\" class=\"btn btn-profile-info rounded-circle text-dark\" placement=\"top\" tooltip=\"{{task.assign_user.firstname}} {{task.assign_user.lastname}}\">\r\n                                                                    <img *ngIf=\"task.assign_user.avatar\" alt=\"Profile\" class=\"img-sm rounded-circle\" src=\"{{apiUrl}}/uploads/profile/{{task.assign_user.avatar}}\"/>\r\n                                                                    <img *ngIf=\"!task.assign_user.avatar\" alt=\"Profile\" class=\"img-sm rounded-circle\" src=\"../assets/img/profile_small.jpg\"/>\r\n                                                                </a><br>\r\n                                                                <span class=\"mt-2\">{{task.assign_user.firstname}} {{task.assign_user.lastname}}</span>\r\n                                                            </ng-template>\r\n                                                        </div>\r\n                                                    </div>\r\n                                                </div>\r\n                                                <div class=\"col-lg-12 mb-3\">\r\n                                                    <label>{{'tasks.create.fields.progress' | translate}}</label>\r\n                                                    <div>\r\n                                                        <progressbar [animate]=\"true\" [value]=\"task.progress\" max=\"100\">\r\n                                                            <strong>{{task.progress}}%</strong></progressbar>\r\n                                                    </div>\r\n                                                </div>\r\n                                            </div>\r\n                                            <div class=\"col-md-12 card-separator\">\r\n                                                <div class=\"col-lg-12 mb-3\">\r\n                                                    <label>{{'tasks.create.fields.plan_startdate' | translate}}</label>\r\n                                                    <div class=\"detail-inline\">{{task.planned_start_date | dateTimeFormatFilter : loginUser.settings.date_format}}</div>\r\n                                                </div>\r\n                                                <div class=\"col-lg-12 mb-3\">\r\n                                                    <label>{{'tasks.create.fields.plan_enddate' | translate}}</label>\r\n                                                    <div class=\"detail-inline\">{{task.planned_end_date | dateTimeFormatFilter : loginUser.settings.date_format}}</div>\r\n                                                </div>\r\n                                                <div class=\"col-lg-12 mb-3\">\r\n                                                    <label>{{'tasks.create.fields.actual_startdate' | translate}}</label>\r\n                                                    <div class=\"detail-inline\">{{task.task_start_date | dateTimeFormatFilter : loginUser.settings.date_time_format}}</div>\r\n                                                </div>\r\n                                                <div class=\"col-lg-12 mb-3\">\r\n                                                    <label>{{'tasks.create.fields.actual_enddate' | translate}}</label>\r\n                                                    <div class=\"detail-inline\">{{task.task_end_date | dateTimeFormatFilter : loginUser.settings.date_time_format}}</div>\r\n                                                </div>\r\n                                                <div class=\"col-lg-12 mb-3\">\r\n                                                    <label>{{'tasks.create.fields.estimate_hours' | translate}}</label>\r\n                                                    <div class=\"detail-inline\">\r\n                                                        <ng-container *ngIf=\"permission; else elseBlock1\">\r\n                                                            <inline-edit-hours (updateValue)=\"saveTaskDetail('estimated_hours', $event);\" [elementFor]=\"'tasks.inline_edit.estimate_hours' | translate\" [fieldValue]=\"task.estimated_hours\" [isRequired]=\"'false'\" [name]=\"'estimated_hours'\"></inline-edit-hours>\r\n                                                        </ng-container>\r\n                                                        <ng-template #elseBlock1>{{ task.estimated_hours}}</ng-template>\r\n                                                    </div>\r\n                                                </div>\r\n                                                <div class=\"col-lg-12 mb-3\">\r\n                                                    <label>{{'tasks.create.fields.actual_hours' | translate}}</label>\r\n                                                    <div class=\"detail-inline\">{{task.actual_hours}}</div>\r\n                                                </div>\r\n                                                <div class=\"col-lg-12 mb-3\">\r\n                                                    <label>{{'common.created' | translate}}</label>\r\n                                                    <div class=\"detail-inline\">{{task.created_at | dateTimeFormatFilter : loginUser.settings.date_time_format}}</div>\r\n                                                </div>\r\n                                                <div class=\"col-lg-12 mb-3\">\r\n                                                    <label>{{'common.updated' | translate}}</label>\r\n                                                    <div class=\"detail-inline\">{{task.updated_at | dateTimeFormatFilter : loginUser.settings.date_time_format}}</div>\r\n                                                </div>\r\n                                            </div>\r\n                                        </div>\r\n                                    </div>\r\n                                    <!-- Task Activity -->\r\n                                    <div class=\"col-lg-12 col-md-12 col-xs-12 col-sm-12 mt-1 pl-0 pr-0\"></div>\r\n                                </div>\r\n                            </div>\r\n                            <!-- right side -->\r\n                            <div class=\"col-lg-8\">\r\n                                <div class=\"row\">\r\n                                    <!-- Description field -->\r\n                                    <div class=\"col-lg-12 col-md-12 col-xs-12 col-sm-12 description-detail mb-3 card-separator\">\r\n                                        <h4 class=\"sub-title\"><span>{{'tasks.details.title2' | translate}}</span></h4>\r\n                                        <div class=\"detail-inline\">\r\n                                            <ng-container *ngIf=\"permission; else elseBlock2\">\r\n                                                <inline-edit-text-editor (updateValue)=\"saveTaskDetail('description', $event);\" [elementFor]=\"'tasks.inline_edit.description' | translate\" [fieldValue]=\"task.description\" [name]=\"'description'\"></inline-edit-text-editor>\r\n                                            </ng-container>\r\n                                            <ng-template #elseBlock2>\r\n                                                <p [innerHtml]=\"task.description\"></p>\r\n                                            </ng-template>\r\n                                        </div>\r\n                                    </div>\r\n                                    <!-- Custom fields -->\r\n                                    <div *ngIf=\"task.custom_fields.length > 0\" class=\"col-lg-12 col-md-12 col-xs-12 col-sm-12 card-separator mb-3\">\r\n                                        <h4 class=\"sub-title\"><span>{{'tasks.details.title1' | translate}}</span></h4>\r\n                                        <div class=\"row\">\r\n                                            <ng-container *ngFor=\"let customField of task.custom_fields\">\r\n                                                <div *ngIf=\"customField.field_type != 'textarea'\" class=\"col-lg-4 col-md-6 mt-2\">\r\n                                                    <ng-container *ngIf=\"customField.field_type == 'text' || customField.field_type == 'numeric'\">\r\n                                                        <label>{{customField.field_label}}</label>\r\n                                                        <div class=\"detail-inline\">{{task[customField.field_column]}}</div>\r\n                                                    </ng-container>\r\n                                                    <ng-container *ngIf=\"customField.field_type == 'date'\">\r\n                                                        <label>{{customField.field_label}}</label>\r\n                                                        <div class=\"detail-inline\">{{task[customField.field_column] | dateTimeFormatFilter: loginUser.settings.date_format}}</div>\r\n                                                    </ng-container>\r\n                                                    <ng-container *ngIf=\"customField.field_type == 'dropdown'\">\r\n                                                        <label>{{customField.field_label}}</label>\r\n                                                        <div class=\"detail-inline\">\r\n                                                            <ng-container *ngFor=\"let fieldValue of getParseArray(customField.default_value)\">\r\n                                                                <ng-container *ngIf=\"fieldValue.value == task[customField.field_column]\">\r\n                                                                    {{fieldValue.label}}\r\n                                                                </ng-container>\r\n                                                            </ng-container>\r\n                                                        </div>\r\n                                                    </ng-container>\r\n                                                    <ng-container *ngIf=\"customField.field_type == 'checkbox'\">\r\n                                                        <label>{{customField.field_label}}</label>\r\n                                                        <div class=\"detail-inline\">\r\n                                                            <div *ngIf=\"task[customField.field_column] == 1; else checkboxElseBlock\">{{'common.true' | translate}}</div>\r\n                                                            <ng-template #checkboxElseBlock>{{'common.false' | translate}}</ng-template>\r\n                                                        </div>\r\n                                                    </ng-container>\r\n                                                </div>\r\n                                            </ng-container>\r\n                                            <ng-container *ngFor=\"let customField of task.custom_fields\">\r\n                                                <div *ngIf=\"customField.field_type == 'textarea'\" class=\"col-lg-4 col-md-6 mt-2\">\r\n                                                    <ng-container>\r\n                                                        <label>{{customField.field_label}}</label>\r\n                                                        <div class=\"detail-inline\">{{task[customField.field_column]}}</div>\r\n                                                    </ng-container>\r\n                                                </div>\r\n                                            </ng-container>\r\n                                        </div>\r\n                                    </div>\r\n                                    <!-- Todos list -->\r\n                                    <div class=\"col-lg-12 col-md-12 col-xs-12 col-sm-12 card-separator mb-3\">\r\n                                        <app-todo-detail [module_id]=\"2\" [module_related_id]=\"task.id\"></app-todo-detail>\r\n                                    </div>\r\n                                    <!-- Sub-task list -->\r\n                                    <div *ngIf=\"task.parent_task_id == 0\" class=\"col-lg-12 col-md-12 col-xs-12 col-sm-12 card-separator mb-3\">\r\n                                        <div class=\"card-header p-0\">\r\n                                            <h4 class=\"sub-title mt-3\">\r\n                                                <span>{{'tasks.details.title3' | translate}}</span></h4>\r\n                                            <div class=\"card-buttons pt-2 pr-1 pt-2\">\r\n                                                <a *ngxPermissionsOnly=\"['admin', 'super_admin', 'tasks_create']\" [routerLink]=\"['/tasks/create', task.id]\" class=\"btn btn-create mb-2 mb-lg-0  float-right\" tooltip=\"{{'tasks.tooltips.sub_task' | translate}}\"><i class=\"fa fa-plus\"></i></a>\r\n                                            </div>\r\n                                        </div>\r\n                                        <div *ngIf=\"task.sub_tasks?.length != 0\" class=\"table-responsive-xs table-responsive-sm table-responsive-md table-responsive-lg table-responsive-xl overflow-x-auto\">\r\n                                            <table class=\"table table-bordered table-hover b4-datatable\">\r\n                                                <thead>\r\n                                                <tr>\r\n                                                    <th>{{'tasks.columns.id' | translate}}</th>\r\n                                                    <th>{{'tasks.columns.task_name' | translate}}</th>\r\n                                                    <th>{{'tasks.columns.end_date' | translate}}</th>\r\n                                                    <th>{{'tasks.columns.hours' | translate}}</th>\r\n                                                    <th>{{'tasks.columns.priority' | translate}}</th>\r\n                                                    <th>{{'tasks.columns.creator' | translate}}</th>\r\n                                                    <th>{{'tasks.columns.assigned' | translate}}</th>\r\n                                                    <th>{{'tasks.columns.status' | translate}}</th>\r\n                                                    <th>{{'tasks.columns.actions' | translate}}</th>\r\n                                                </tr>\r\n                                                </thead>\r\n                                                <tbody>\r\n                                                <tr *ngFor=\"let sub_task of task.sub_tasks; index as i\">\r\n                                                    <td>\r\n                                                        <a [routerLink]=\"['/tasks/detail', sub_task.id]\" tooltip=\"{{'common.view' | translate}}\">{{sub_task.generated_id}}</a>\r\n                                                    </td>\r\n                                                    <td>\r\n                                                        <ng-container *ngIf=\"getCheckPermission(sub_task); else elseBlock3\">\r\n                                                            <inline-edit-input (updateValue)=\"saveSubTaskDetail(sub_task, 'name', $event);\" [elementFor]=\"'tasks.inline_edit.task_name' | translate\" [fieldValue]=\"sub_task.name\" [isRequired]=\"'true'\" [name]=\"'name'\" [type]=\"'text'\"></inline-edit-input>\r\n                                                        </ng-container>\r\n                                                        <ng-template #elseBlock3>{{sub_task.name}}</ng-template>\r\n                                                    </td>\r\n                                                    <td>{{sub_task.task_end_date | dateTimeFormatFilter: loginUser.settings.date_format}}</td>\r\n                                                    <td>{{sub_task.estimated_hours}}</td>\r\n                                                    <td class=\"budges-status\">\r\n                                                        <ng-container *ngFor=\"let priority of ('tasks.priorities' | translate)\">\r\n                                                            <div class=\"budges-status\">\r\n                                                                <span *ngIf=\"priority.id == sub_task.priority\" class=\"{{priority.class}}\">{{priority.label}}</span>\r\n                                                            </div>\r\n                                                        </ng-container>\r\n                                                    </td>\r\n                                                    <td class=\"people-lists\">\r\n                                                        <a [routerLink]=\"['/users/profile', sub_task.created_by]\" class=\"btn btn-profile-danger rounded-circle text-dark\" placement=\"top\" tooltip=\"{{sub_task.created_user.firstname}} {{sub_task.created_user.lastname}}\">\r\n                                                            <img *ngIf=\"sub_task.created_user.avatar\" alt=\"Profile\" class=\"img-sm rounded-circle\" src=\"{{apiUrl}}/uploads/profile/{{sub_task.created_user.avatar}}\"/>\r\n                                                            <img *ngIf=\"!sub_task.created_user.avatar\" alt=\"Profile\" class=\"img-sm rounded-circle\" src=\"../assets/img/profile_small.jpg\"/>\r\n                                                        </a>\r\n                                                    </td>\r\n                                                    <td class=\"people-lists\">\r\n                                                        <ng-container *ngIf=\"sub_task.assign_to == null; else elseBlock7\">\r\n                                                            <a class=\"btn btn-profile-danger rounded-circle text-dark\" href=\"javascript:void(0);\" placement=\"top\" tooltip=\"{{'common.unassigned' | translate}}\">\r\n                                                                <img alt=\"Profile\" class=\"img-sm rounded-circle\" src=\"../assets/img/unassign.jpg\"/>\r\n                                                            </a>\r\n                                                        </ng-container>\r\n                                                        <ng-template #elseBlock7>\r\n                                                            <a [routerLink]=\"['/users/profile', sub_task.assign_to]\" class=\"btn btn-profile-danger rounded-circle text-dark\" placement=\"top\" tooltip=\"{{sub_task.assign_user.firstname}} {{sub_task.assign_user.lastname}}\">\r\n                                                                <img *ngIf=\"sub_task.assign_user.avatar\" alt=\"Profile\" class=\"img-sm rounded-circle\" src=\"{{apiUrl}}/uploads/profile/{{sub_task.assign_user.avatar}}\"/>\r\n                                                                <img *ngIf=\"!sub_task.assign_user.avatar\" alt=\"Profile\" class=\"img-sm rounded-circle\" src=\"../assets/img/profile_small.jpg\"/>\r\n                                                            </a>\r\n                                                        </ng-template>\r\n                                                    </td>\r\n                                                    <td class=\"status-dropdown\">\r\n                                                        <ng-container *ngIf=\"getCheckPermission(sub_task); else elseBlock4\">\r\n                                                            <div class=\"btn-group\" dropdown>\r\n                                                                <button aria-controls=\"dropdown-basic-2\" class=\"btn dropdown-toggle select-btn-lg\" dropdownToggle id=\"button-basic-2\" type=\"button\">{{getTranslateStatus(sub_task.status) | translate}}&nbsp;<span class=\"caret\"></span>\r\n                                                                </button>\r\n                                                                <ul *dropdownMenu aria-labelledby=\"button-basic-2\" class=\"dropdown-menu animated fadeIn\" id=\"dropdown-basic-2\" role=\"menu\">\r\n                                                                    <li *ngFor=\"let status of (getTaskStatus(sub_task.status) | translate)\" role=\"menuitem\">\r\n                                                                        <a (click)=\"changeTaskStatus([sub_task.id], status);sub_task.status = status.id\" [ngClass]=\"{'active': sub_task.status == status.id}\" class=\"dropdown-item btn btn-sm {{status.class}}\">{{status.label}}</a>\r\n                                                                    </li>\r\n                                                                </ul>\r\n                                                            </div>\r\n                                                        </ng-container>\r\n                                                        <ng-template #elseBlock4>\r\n                                                            <ng-container *ngFor=\"let status of (getTaskStatus(sub_task.status) | translate)\">\r\n                                                                <div class=\"budges-status\">\r\n                                                                    <span *ngIf=\"status.id == sub_task.status\" class=\"{{status.class}}\">{{status.label}}</span>\r\n                                                                </div>\r\n                                                            </ng-container>\r\n                                                        </ng-template>\r\n                                                    </td>\r\n                                                    <td class=\"actions-dropdown\">\r\n                                                        <div class=\"btn-group\" dropdown>\r\n                                                            <button aria-controls=\"dropdown-basic-1\" class=\"dropdown-toggle btn-action\" dropdownToggle id=\"button-basic-1\" type=\"button\">\r\n                                                                <i class=\"fa fa-ellipsis-v\"></i></button>\r\n                                                            <ul *dropdownMenu aria-labelledby=\"button-basic-1\" class=\"dropdown-menu animated fadeIn\" id=\"dropdown-basic-1\" role=\"menu\">\r\n                                                                <li *ngIf=\"getCheckPermission(sub_task)\" role=\"menuitem\">\r\n                                                                    <a [routerLink]=\"['/tasks/edit', sub_task.id]\" class=\"dropdown-item btn btn-edit btn-raised\" tooltip=\"{{'common.edit' | translate}}\"><i class=\"fa fa-pencil-square-o\"></i></a>\r\n                                                                </li>\r\n                                                                <li *ngIf=\"getCheckPermission(sub_task)\" role=\"menuitem\">\r\n                                                                    <a (click)=\"deleteSubTask(sub_task.id)\" class=\"dropdown-item btn btn-delete btn-raised\" tooltip=\"{{'common.delete' | translate}}\"><i class=\"fa fa-trash-o\"></i></a>\r\n                                                                </li>\r\n                                                            </ul>\r\n                                                        </div>\r\n                                                    </td>\r\n                                                </tr>\r\n                                                </tbody>\r\n                                            </table>\r\n                                        </div>\r\n                                    </div>\r\n                                    <!-- Task Timesheet -->\r\n                                    <div class=\"col-lg-12 col-md-12 col-xs-12 col-sm-12 card-separator mb-3\">\r\n                                        <app-timesheet-list [apiUrl]=\"apiUrl\" [loginUser]=\"loginUser\" [module_id]=\"'2'\" [module_related_id]=\"task.id\" [project_id]=\"task.project_id\"></app-timesheet-list>\r\n                                    </div>\r\n                                    <!-- Tab Design -->\r\n                                    <tabset class=\"nav nav-tabs d-flex justify-content-left details-tabs col-md-12 p-0\">\r\n                                        <tab class=\"card-separator mb-3\" customClass=\"text-left\" id=\"1\">\r\n                                            <ng-template tabHeading>\r\n                                                <div class=\"d-flex\">\r\n                                                    <i class=\"fa fa-comments-o\"></i><span class=\"mt-1 ml-1\">{{'comments.title' | translate}}</span>\r\n                                                </div>\r\n                                            </ng-template>\r\n                                            <!-- Task Comment -->\r\n                                            <div class=\"col-lg-12 pr-0 pl-0\">\r\n                                                <app-task-comments [apiUrl]=\"apiUrl\" [loginUser]=\"loginUser\" [permission]=\"permission\"></app-task-comments>\r\n                                            </div>\r\n                                        </tab>\r\n                                        <tab class=\"card-separator mb-3\" customClass=\"text-left\" id=\"2\">\r\n                                            <ng-template tabHeading>\r\n                                                <div class=\"d-flex\">\r\n                                                    <i class=\"fa fa-paperclip\"></i><span class=\"mt-1 ml-1\">{{'attachments.title' | translate}}</span>\r\n                                                </div>\r\n                                            </ng-template>\r\n                                            <!-- Task Attachment -->\r\n                                            <div class=\"col-lg-12 col-md-12 col-xs-12 col-sm-12 pr-0 pl-0\">\r\n                                                <app-task-attachments [apiUrl]=\"apiUrl\" [loginUser]=\"loginUser\" [permission]=\"permission\" [task]=\"task\"></app-task-attachments>\r\n                                            </div>\r\n                                        </tab>\r\n                                        <tab class=\"card-separator mb-3 tab-width\" customClass=\"text-left\" id=\"3\">\r\n                                            <ng-template tabHeading>\r\n                                                <div class=\"d-flex\">\r\n                                                    <i class=\"fa fa-sticky-note-o\"></i><span class=\"mt-1 ml-1\">{{'notes.title' | translate}}</span>\r\n                                                </div>\r\n                                            </ng-template>\r\n                                            <!-- Notes -->\r\n                                            <div class=\"col-lg-12 col-md-12 col-xs-12 col-sm-12\">\r\n                                                <!-- <h4 class=\"sub-title pt-2\"><span>{{'notes.title' | translate}}</span></h4> -->\r\n                                                <div class=\"detail-inline\">\r\n                                                    <ng-container *ngIf=\"permission; else elseBlock5\">\r\n                                                        <inline-edit-text-editor (updateValue)=\"saveTaskDetail('notes', $event);\" [elementFor]=\"'tasks.inline_edit.notes' | translate\" [fieldValue]=\"task.notes\" [name]=\"'notes'\"></inline-edit-text-editor>\r\n                                                    </ng-container>\r\n                                                    <ng-template #elseBlock5></ng-template>\r\n                                                </div>\r\n                                            </div>\r\n                                        </tab>\r\n                                        <tab class=\"card-separator mb-3\" customClass=\"text-left\" id=\"4\">\r\n                                            <ng-template tabHeading>\r\n                                                <div class=\"d-flex\">\r\n                                                    <i class=\"fa fa-list\"></i><span class=\"mt-1 ml-1\">{{'activities.title' | translate}}</span>\r\n                                                </div>\r\n                                            </ng-template>\r\n                                            <app-task-activities [apiUrl]=\"apiUrl\" [loginUser]=\"loginUser\" [task]=\"task\"></app-task-activities>\r\n                                        </tab>\r\n                                    </tabset>\r\n                                    <!-- Tab Design End -->\r\n                                </div>\r\n                            </div>\r\n                        </div>\r\n                    </div>\r\n                </form>\r\n            </div>\r\n        </div>\r\n    </div>\r\n</div>\r\n");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/modules/pm/tasks/components/task-import-modal/task-import-modal.component.html":
/*!**************************************************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/modules/pm/tasks/components/task-import-modal/task-import-modal.component.html ***!
  \**************************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<div class=\"modal-header\">\r\n    <h2 class=\"modal-title font-weight-normal\">\r\n        <i aria-hidden=\"true\" class=\"fa fa-tasks modal-icon\"></i>&nbsp;{{'tasks.title3' | translate}}</h2>\r\n    <button (click)=\"onCancel()\" class=\"close\" type=\"button\"><span aria-hidden=\"true\">&times;</span></button>\r\n</div>\r\n<form class=\"form\">\r\n    <div class=\"modal-body\">\r\n        <div class=\"form-body\">\r\n            <div class=\"row\">\r\n                <div class=\"col-md-12\">\r\n                    <div class=\"form-group\">\r\n                        <span class=\"text-danger\">{{'tasks.budges.csv_file' | translate}}</span><br><br>\r\n                        <label>{{'tasks.create.fields.csv_file' | translate}} <span class=\"text-danger\">*</span></label>\r\n                        <input (change)=\"fileUpload($event.target.files)\" accept=\".csv\" class=\"mb-3 btn btn-secondary\" id=\"file\" type=\"file\">\r\n                        <div *ngIf=\"!csvFileSelected && isFormSubmitted\" class=\"text-danger\">{{'tasks.create.error_messages.message15' | translate}}</div>\r\n                    </div>\r\n                </div>\r\n            </div>\r\n        </div>\r\n    </div>\r\n    <div class=\"modal-footer\">\r\n        <button (click)=\"onCancel()\" class=\"btn btn-cancel mb-0\" type=\"button\">{{'common.close' | translate}}</button>\r\n        <button (click)=\"onSubmit()\" class=\"btn btn-submit mb-0\">{{'common.import' | translate}}</button>\r\n    </div>\r\n</form>\r\n");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/modules/pm/tasks/components/task-notes/task-notes.component.html":
/*!************************************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/modules/pm/tasks/components/task-notes/task-notes.component.html ***!
  \************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<!-- Card header -->\r\n<div class=\"card-header pl-0 pr-0 border-bottom\">\r\n    <h4 class=\"card-title mt-3\">{{'notes.title' | translate}}</h4>\r\n</div><!-- Card body -->\r\n<div class=\"card-body pt-3\">\r\n    <div class=\"row\">\r\n        <div class=\"col-lg-12 mb-3\">\r\n            <form (ngSubmit)=\"onSubmit()\" [formGroup]=\"editNoteForm\" class=\"bs4-forms\">\r\n                <div class=\"form-group\">\r\n                    <app-ngx-editor [placeholder]=\"''\" [spellcheck]=\"true\" formControlName=\"notes\" height=\"100px\" id=\"notes\" minHeight=\"50px\"></app-ngx-editor>\r\n                </div>\r\n                <div *ngIf=\"permission\" class=\"form-group text-right\">\r\n                    <button class=\"btn btn-submit mb-0\" type=\"submit\">{{'common.update' | translate}}</button>\r\n                </div>\r\n            </form>\r\n        </div>\r\n    </div>\r\n</div>\r\n");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/modules/pm/tasks/pages/task-copy/task-copy.component.html":
/*!*****************************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/modules/pm/tasks/pages/task-copy/task-copy.component.html ***!
  \*****************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<section *ngIf=\"isPageLoaded\" id=\"basic-form-layouts\">\r\n    <form (ngSubmit)=\"onSubmit()\" [formGroup]=\"copyTaskForm\">\r\n        <div class=\"row\">\r\n            <div class=\"col-md-6\">\r\n                <div class=\"card\">\r\n                    <div class=\"card-header\">\r\n                        <h4 class=\"card-title\">\r\n                            {{'tasks.title6' | translate}}\r\n                        </h4>\r\n                    </div>\r\n                    <div class=\"card-body\">\r\n                        <div class=\"px-3\">\r\n                            <div class=\"form-body\">\r\n                                <h4 class=\"form-section\"><i class=\"ft-type\"></i> {{'tasks.headings.head1' | translate}}\r\n                                </h4>\r\n                                <div class=\"row\">\r\n                                    <div class=\"col-md-4\">\r\n                                        <div class=\"form-group\">\r\n                                            <label for=\"generated_id\">{{'tasks.create.fields.task_ID' | translate }}&nbsp;<span class=\"text-danger\">*</span></label>\r\n                                            <input [ngClass]=\"{ 'is-invalid': isFormSubmitted && taskControl.generated_id.errors }\" class=\"form-control\" formControlName=\"generated_id\" id=\"generated_id\" readonly type=\"text\"/>\r\n                                            <div *ngIf=\"isFormSubmitted && taskControl.generated_id.errors\" class=\"invalid-feedback\">\r\n                                                <div *ngIf=\"taskControl.generated_id.errors.required\">{{'tasks.create.error_messages.message3' | translate }}</div>\r\n                                            </div>\r\n                                        </div>\r\n                                    </div>\r\n                                    <div class=\"col-md-8\">\r\n                                        <div class=\"form-group\">\r\n                                            <label for=\"name\">{{'tasks.create.fields.task_name' | translate }}&nbsp;<span class=\"text-danger\">*</span></label>\r\n                                            <input [ngClass]=\"{ 'is-invalid': isFormSubmitted && taskControl.name.errors }\" class=\"form-control\" formControlName=\"name\" id=\"name\" placeholder=\"{{'tasks.create.placeholders.placeholder1' | translate }}\" type=\"text\"/>\r\n                                            <div *ngIf=\"isFormSubmitted && taskControl.name.errors\" class=\"invalid-feedback\">\r\n                                                <div *ngIf=\"taskControl.name.errors.required\">{{'tasks.create.error_messages.message1' | translate }}</div>\r\n                                                <div *ngIf=\"taskControl.name.errors.maxlength\">{{'tasks.create.error_messages.message2' | translate }}</div>\r\n                                            </div>\r\n                                        </div>\r\n                                    </div>\r\n                                </div>\r\n                                <h4 class=\"form-section\">\r\n                                    <i class=\"ft-calendar\"></i> {{'tasks.headings.head2' | translate}}</h4>\r\n                                <div class=\"row\">\r\n                                    <div class=\"col-md-6\">\r\n                                        <div [ngClass]=\"{ 'is-invalid': isFormSubmitted && taskControl.planned_start_date.errors }\" class=\"form-group\">\r\n                                            <label for=\"planned_start_date\">{{'tasks.create.fields.plan_startdate' | translate }}</label>\r\n                                            <div class=\"position-relative has-icon-left\">\r\n                                                <input #dp1=\"bsDatepicker\" (onHidden)=\"planstartDateChange($event)\" [bsConfig]=\"datepickerConfig\" bsDatepicker class=\"form-control\" formControlName=\"planned_start_date\" id=\"planned_start_date\" placeholder=\"{{'tasks.create.placeholders.placeholder2' | translate }}\" type=\"text\"/>\r\n                                                <div class=\"form-control-position\"><i class=\"ft-calendar\"></i></div>\r\n                                                <div *ngIf=\"isFormSubmitted && taskControl.planned_start_date.errors\" class=\"invalid-feedback\">\r\n                                                    <div *ngIf=\"taskControl.planned_start_date.errors\">{{'tasks.create.error_messages.message4' | translate }}</div>\r\n                                                </div>\r\n                                            </div>\r\n                                        </div>\r\n                                    </div>\r\n                                    <div class=\"col-md-6\">\r\n                                        <div [ngClass]=\"{ 'is-invalid': isFormSubmitted && taskControl.planned_end_date.errors }\" class=\"form-group\">\r\n                                            <label for=\"planned_end_date\">{{'tasks.create.fields.plan_enddate' | translate }}</label>\r\n                                            <div class=\"position-relative has-icon-left\">\r\n                                                <input #dp2=\"bsDatepicker\" [bsConfig]=\"datepickerConfig\" [minDate]=\"copyTaskForm.get('planned_start_date').value\" bsDatepicker class=\"form-control\" formControlName=\"planned_end_date\" id=\"planned_end_date\" placeholder=\"{{'tasks.create.placeholders.placeholder3' | translate }}\" type=\"text\"/>\r\n                                                <div class=\"form-control-position\"><i class=\"ft-calendar\"></i></div>\r\n                                                <div *ngIf=\"isFormSubmitted && taskControl.planned_end_date.errors\" class=\"invalid-feedback\">\r\n                                                    <div *ngIf=\"taskControl.planned_end_date.errors\">{{'tasks.create.error_messages.message5' | translate }}</div>\r\n                                                </div>\r\n                                            </div>\r\n                                        </div>\r\n                                    </div>\r\n                                    <div class=\"col-md-6\">\r\n                                        <div [ngClass]=\"{ 'is-invalid': isFormSubmitted && taskControl.task_start_date.errors }\" class=\"form-group\">\r\n                                            <label for=\"task_start_date\">{{'tasks.create.fields.actual_startdate' | translate }}</label>\r\n                                            <div class=\"position-relative has-icon-left\">\r\n                                                <input #dp3=\"bsDatepicker\" (onHidden)=\"taskstartDateChange($event)\" [bsConfig]=\"datepickerConfig\" bsDatepicker class=\"form-control\" formControlName=\"task_start_date\" id=\"task_start_date\" placeholder=\"{{'tasks.create.placeholders.placeholder4' | translate }}\" type=\"text\"/>\r\n                                                <div class=\"form-control-position\"><i class=\"ft-calendar\"></i></div>\r\n                                                <div *ngIf=\"isFormSubmitted && taskControl.task_start_date.errors\" class=\"invalid-feedback\">\r\n                                                    <div *ngIf=\"taskControl.task_start_date.errors\">{{'tasks.create.error_messages.message6' | translate }}</div>\r\n                                                </div>\r\n                                            </div>\r\n                                        </div>\r\n                                    </div>\r\n                                    <div class=\"col-md-6\">\r\n                                        <div [ngClass]=\"{ 'is-invalid': isFormSubmitted && taskControl.task_end_date.errors }\" class=\"form-group\">\r\n                                            <label for=\"task_end_date\">{{'tasks.create.fields.actual_enddate' | translate }}</label>\r\n                                            <div class=\"position-relative has-icon-left\">\r\n                                                <input #dp4=\"bsDatepicker\" [bsConfig]=\"datepickerConfig\" [minDate]=\"copyTaskForm.get('task_start_date').value\" bsDatepicker class=\"form-control\" formControlName=\"task_end_date\" id=\"task_end_date\" placeholder=\"{{'tasks.create.placeholders.placeholder5' | translate }}\" type=\"text\"/>\r\n                                                <div class=\"form-control-position\"><i class=\"ft-calendar\"></i></div>\r\n                                                <div *ngIf=\"isFormSubmitted && taskControl.task_end_date.errors\" class=\"invalid-feedback\">\r\n                                                    <div *ngIf=\"taskControl.task_end_date.errors\">{{'tasks.create.error_messages.message7' | translate }}</div>\r\n                                                </div>\r\n                                            </div>\r\n                                        </div>\r\n                                    </div>\r\n                                </div>\r\n                                <h4 class=\"form-section\">\r\n                                    <i class=\"ft-trending-up\"></i> {{'tasks.headings.head3' | translate}}</h4>\r\n                                <div class=\"row\">\r\n                                    <div class=\"col-md-12\">\r\n                                        <div class=\"form-group\">\r\n                                            <label>{{'tasks.create.fields.progress' | translate }}</label>\r\n                                            <ng5-slider [options]=\"progressOptions\" formControlName=\"progress\"></ng5-slider>\r\n                                        </div>\r\n                                    </div>\r\n                                </div>\r\n                            </div>\r\n                        </div>\r\n                    </div>\r\n                </div>\r\n            </div>\r\n            <div class=\"col-md-6\">\r\n                <div class=\"card\">\r\n                    <div class=\"card-header\">&nbsp;</div>\r\n                    <div class=\"card-body\">\r\n                        <div class=\"px-3\">\r\n                            <div class=\"form-body\">\r\n                                <h4 class=\"form-section\">\r\n                                    <i class=\"fa ft-zap\"></i> {{'tasks.headings.head4' | translate}}</h4>\r\n                                <div class=\"row\">\r\n                                    <div class=\"col-md-7\">\r\n                                        <div [ngClass]=\"{ 'is-invalid': isFormSubmitted && taskControl.project_id.errors }\" class=\"form-group\">\r\n                                            <label for=\"project_id\">{{'tasks.create.fields.project_name' | translate }}&nbsp;<span class=\"text-danger\">*</span></label>\r\n                                            <ng-select (change)=\"projectChange($event)\" (clear)=\"clearVersionValues('project_version')\" [items]=\"projects\" [searchable]=\"true\" [selectOnTab]=\"true\" bindLabel=\"project_name\" bindValue=\"id\" formControlName=\"project_id\" labelForId=\"project_id\" placeholder=\"{{'tasks.create.placeholders.placeholder6' | translate }}\">\r\n                                                <ng-template let-item=\"item\" ng-option-tmp>\r\n                                                    {{item.project_name}}\r\n                                                </ng-template>\r\n                                            </ng-select>\r\n                                            <div *ngIf=\"isFormSubmitted && taskControl.project_id.errors\" class=\"invalid-feedback\">\r\n                                                <div *ngIf=\"taskControl.project_id.errors.required\">{{'tasks.create.error_messages.message8' | translate }}</div>\r\n                                            </div>\r\n                                        </div>\r\n                                    </div>\r\n                                    <div class=\"col-md-5\">\r\n                                        <div class=\"form-group\">\r\n                                            <label for=\"project_version\">{{'tasks.create.fields.project_version' | translate }}</label>\r\n                                            <ng-select [items]=\"projectVersions\" [searchable]=\"true\" [selectOnTab]=\"true\" formControlName=\"project_version\" placeholder=\"{{'tasks.create.placeholders.placeholder7' | translate }}\">\r\n                                                <ng-template let-item=\"item\" ng-option-tmp>\r\n                                                    {{item}}\r\n                                                </ng-template>\r\n                                            </ng-select>\r\n                                        </div>\r\n                                    </div>\r\n                                </div>\r\n                                <h4 class=\"form-section\">\r\n                                    <i class=\"ft-file-text\"></i> {{'tasks.headings.head5' | translate}}</h4>\r\n                                <div class=\"row\">\r\n                                    <div class=\"col-md-6\">\r\n                                        <div class=\"form-group\">\r\n                                            <label for=\"assign_to\">{{'tasks.create.fields.assigned_To' | translate }}</label>\r\n                                            <ng-select [items]=\"users\" [searchable]=\"true\" [selectOnTab]=\"true\" bindLabel=\"firstname\" bindValue=\"id\" formControlName=\"assign_to\" labelForId=\"assign_to\" placeholder=\"{{'tasks.create.placeholders.placeholder8' | translate }}\">\r\n                                                <ng-template let-item=\"item\" ng-option-tmp>{{item.firstname}} {{item.lastname}}</ng-template>\r\n                                            </ng-select>\r\n                                        </div>\r\n                                    </div>\r\n                                    <div class=\"col-md-6\">\r\n                                        <div [ngClass]=\"{ 'is-invalid': isFormSubmitted && taskControl.status.errors }\" class=\"form-group\">\r\n                                            <label for=\"status\">{{'tasks.create.fields.status' | translate }}&nbsp;<span class=\"text-danger\">*</span>\r\n                                            </label>\r\n                                            <ng-select [items]=\"(getTaskStatus(task.status) | translate)\" [searchable]=\"true\" [selectOnTab]=\"true\" bindLabel=\"label\" bindValue=\"id\" formControlName=\"status\" labelForId=\"status\" placeholder=\"{{'tasks.create.placeholders.placeholder9' | translate }}\"></ng-select>\r\n                                            <div *ngIf=\"isFormSubmitted && taskControl.status.errors\" class=\"invalid-feedback\">\r\n                                                <div *ngIf=\"taskControl.status.errors.required\">{{'tasks.create.error_messages.message11' | translate }}</div>\r\n                                            </div>\r\n                                        </div>\r\n                                    </div>\r\n                                    <div class=\"col-md-6\">\r\n                                        <div [ngClass]=\"{ 'is-invalid': isFormSubmitted && taskControl.priority.errors }\" class=\"form-group\">\r\n                                            <label for=\"status\">{{'tasks.create.fields.priority' | translate }}&nbsp;<span class=\"text-danger\">*</span></label>\r\n                                            <ng-select [items]=\"('tasks.priorities' | translate)\" [searchable]=\"true\" [selectOnTab]=\"true\" bindLabel=\"label\" bindValue=\"id\" formControlName=\"priority\" labelForId=\"priority\" placeholder=\"{{'tasks.create.placeholders.placeholder10' | translate }}\"></ng-select>\r\n                                            <div *ngIf=\"isFormSubmitted && taskControl.priority.errors\" class=\"invalid-feedback\">\r\n                                                <div *ngIf=\"taskControl.priority.errors.required\">{{'tasks.create.error_messages.message12' | translate }}</div>\r\n                                            </div>\r\n                                        </div>\r\n                                    </div>\r\n                                    <div class=\"col-md-6\">\r\n                                        <div class=\"form-group\">\r\n                                            <label for=\"estimated_hours\">{{'tasks.create.fields.estimate_hours' | translate }}</label>\r\n                                            <input [ngClass]=\"{ 'is-invalid': (isFormSubmitted && taskControl.estimated_hours.errors || isHoursValid) }\" class=\"form-control\" formControlName=\"estimated_hours\" placeholder=\"00:00\" type='text'>\r\n                                            <div *ngIf=\"isFormSubmitted && taskControl.estimated_hours.errors\" class=\"invalid-feedback\">\r\n                                                <div *ngIf=\"taskControl.estimated_hours.errors.pattern\">{{'tasks.create.error_messages.message13' | translate }}</div>\r\n                                            </div>\r\n                                            <div *ngIf=\"isHoursValid\" class=\"invalid-feedback\">\r\n                                                <div *ngIf=\"isHoursValid\">{{'tasks.create.error_messages.message14' | translate }} {{this.task.project1.estimated_hours}}.</div>\r\n                                            </div>\r\n                                        </div>\r\n                                    </div>\r\n                                </div>\r\n                            </div>\r\n                        </div>\r\n                    </div>\r\n                </div>\r\n            </div>\r\n            <div *ngIf=\"customFields.length > 0\" class=\"col-md-12\">\r\n                <div class=\"card\">\r\n                    <div class=\"card-body\">\r\n                        <div class=\"px-3\">\r\n                            <div class=\"form-body\">\r\n                                <h4 class=\"form-section\"><i class=\"ft-star\"></i> {{'tasks.headings.head6' | translate}}\r\n                                </h4>\r\n                                <div class=\"row mb-3\">\r\n                                    <div class=\"col-md-12\">\r\n                                        <app-show-custom-field-element [controls]=\"copyTaskForm.get('custom_field')\" [customFields]=\"customFields\" [formArray]=\"'custom_field'\" [formName]=\"copyTaskForm\" [isFormSubmitted]=\"isFormSubmitted\"></app-show-custom-field-element>\r\n                                    </div>\r\n                                </div>\r\n                            </div>\r\n                        </div>\r\n                    </div>\r\n                </div>\r\n            </div>\r\n            <div class=\"col-md-12\">\r\n                <div class=\"card\">\r\n                    <div class=\"card-body\">\r\n                        <div class=\"px-3\">\r\n                            <div class=\"form-body\">\r\n                                <h4 class=\"form-section\">\r\n                                    <i class=\"ft-message-square\"></i> {{'tasks.headings.head7' | translate}}</h4>\r\n                                <div class=\"row mb-3\">\r\n                                    <div class=\"col-md-12\">\r\n                                        <div class=\"form-group\">\r\n                                            <label for=\"description\">{{'tasks.create.fields.description' | translate }}</label>\r\n                                            <app-ngx-editor [placeholder]=\"''\" [spellcheck]=\"true\" formControlName=\"description\" height=\"100px\" id=\"description\" minHeight=\"50px\"></app-ngx-editor>\r\n                                        </div>\r\n                                    </div>\r\n                                    <div class=\"col-md-12 text-right\">\r\n                                        <a [routerLink]=\"['/tasks']\" class=\"btn btn-cancel mb-0\">{{'common.cancel' | translate}}</a>\r\n                                        <button class=\"btn btn-submit mb-0\" type=\"submit\">{{'common.copy' | translate}}</button>\r\n                                    </div>\r\n                                </div>\r\n                            </div>\r\n                        </div>\r\n                    </div>\r\n                </div>\r\n            </div>\r\n        </div>\r\n    </form>\r\n</section>\r\n");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/modules/pm/tasks/pages/task-create/task-create.component.html":
/*!*********************************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/modules/pm/tasks/pages/task-create/task-create.component.html ***!
  \*********************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<section *ngIf=\"isPageLoaded\" id=\"basic-form-layouts\">\r\n    <form (ngSubmit)=\"onSubmit()\" [formGroup]=\"createTaskForm\">\r\n        <div class=\"row\">\r\n            <div class=\"col-md-6\">\r\n                <div class=\"card\">\r\n                    <div class=\"card-header\">\r\n                        <h4 class=\"main-title\" id=\"basic-layout-form\">\r\n                            <ng-container *ngIf=\"parent_task_id == 0;\">{{'tasks.title1' | translate}}</ng-container>\r\n                            <ng-container *ngIf=\"parent_task_id != 0;\">{{'tasks.title2' | translate}}</ng-container>\r\n                        </h4>\r\n                    </div>\r\n                    <div class=\"card-body\">\r\n                        <div class=\"px-3\">\r\n                            <div class=\"form-body\">\r\n                                <h4 class=\"form-section\"><i class=\"ft-type\"></i> {{'tasks.headings.head1' | translate}}\r\n                                </h4>\r\n                                <div class=\"row\">\r\n                                    <div class=\"col-md-4\">\r\n                                        <div class=\"form-group\">\r\n                                            <label *ngIf=\"parent_task_id == 0\" for=\"generated_id\">{{'tasks.create.fields.task_ID' | translate }}&nbsp;<span class=\"text-danger\">*</span></label>\r\n                                            <label *ngIf=\"parent_task_id != 0\" for=\"generated_id\">{{'tasks.create.fields.subtask_Id' | translate }}&nbsp;<span class=\"text-danger\">*</span></label>\r\n                                            <input [ngClass]=\"{ 'is-invalid': isFormSubmitted && taskControl.generated_id.errors }\" class=\"form-control\" formControlName=\"generated_id\" id=\"generated_id\" placeholder=\"T000\" readonly type=\"text\"/>\r\n                                            <div *ngIf=\"isFormSubmitted && taskControl.generated_id.errors\" class=\"invalid-feedback\">\r\n                                                <div *ngIf=\"taskControl.generated_id.errors.required\">{{'tasks.create.error_messages.message3' | translate }}</div>\r\n                                            </div>\r\n                                        </div>\r\n                                    </div>\r\n                                    <div class=\"col-md-8\">\r\n                                        <div class=\"form-group\">\r\n                                            <label for=\"name\">{{'tasks.create.fields.task_name' | translate }}&nbsp;<span class=\"text-danger\">*</span></label>\r\n                                            <input [ngClass]=\"{ 'is-invalid': isFormSubmitted && taskControl.name.errors }\" class=\"form-control\" formControlName=\"name\" id=\"name\" placeholder=\"{{'tasks.create.placeholders.placeholder1' | translate }}\" type=\"text\"/>\r\n                                            <div *ngIf=\"isFormSubmitted && taskControl.name.errors\" class=\"invalid-feedback\">\r\n                                                <div *ngIf=\"taskControl.name.errors.required\">{{'tasks.create.error_messages.message1' | translate }}</div>\r\n                                                <div *ngIf=\"taskControl.name.errors.maxlength\">{{'tasks.create.error_messages.message2' | translate }}</div>\r\n                                            </div>\r\n                                        </div>\r\n                                    </div>\r\n                                </div>\r\n                                <h4 class=\"form-section\">\r\n                                    <i class=\"ft-calendar\"></i> {{'tasks.headings.head2' | translate}}</h4>\r\n                                <div class=\"row\">\r\n                                    <div class=\"col-md-6\">\r\n                                        <div [ngClass]=\"{ 'is-invalid': isFormSubmitted && taskControl.planned_start_date.errors }\" class=\"form-group\">\r\n                                            <label for=\"planned_start_date\">{{'tasks.create.fields.plan_startdate' | translate }}</label>\r\n                                            <div class=\"position-relative has-icon-left\">\r\n                                                <input #dp1=\"bsDatepicker\" (bsValueChange)=\"planstartDateChange($event)\" [bsConfig]=\"datepickerConfig\" bsDatepicker class=\"form-control\" formControlName=\"planned_start_date\" id=\"planned_start_date\" placeholder=\"{{'tasks.create.placeholders.placeholder2' | translate }}\" type=\"text\"/>\r\n                                                <div class=\"form-control-position\"><i class=\"ft-calendar\"></i></div>\r\n                                                <div *ngIf=\"isFormSubmitted && taskControl.planned_start_date.errors\" class=\"invalid-feedback\">\r\n                                                    <div *ngIf=\"taskControl.planned_start_date.errors\">{{'tasks.create.error_messages.message4' | translate }}</div>\r\n                                                </div>\r\n                                            </div>\r\n                                        </div>\r\n                                    </div>\r\n                                    <div class=\"col-md-6\">\r\n                                        <div [ngClass]=\"{ 'is-invalid': isFormSubmitted && taskControl.planned_end_date.errors }\" class=\"form-group\">\r\n                                            <label for=\"end-date\">{{'tasks.create.fields.plan_enddate' | translate }}</label>\r\n                                            <div class=\"position-relative has-icon-left\">\r\n                                                <input #dp2=\"bsDatepicker\" [bsConfig]=\"datepickerConfig\" [minDate]=\"createTaskForm.get('planned_start_date').value\" bsDatepicker class=\"form-control\" formControlName=\"planned_end_date\" id=\"planned_end_date\" placeholder=\"{{'tasks.create.placeholders.placeholder3' | translate }}\" type=\"text\"/>\r\n                                                <div class=\"form-control-position\"><i class=\"ft-calendar\"></i></div>\r\n                                                <div *ngIf=\"isFormSubmitted && taskControl.planned_end_date.errors\" class=\"invalid-feedback\">\r\n                                                    <div *ngIf=\"taskControl.planned_end_date.errors\">{{'tasks.create.error_messages.message5' | translate }}</div>\r\n                                                </div>\r\n                                            </div>\r\n                                        </div>\r\n                                    </div>\r\n                                    <div class=\"col-md-6\">\r\n                                        <div [ngClass]=\"{ 'is-invalid': isFormSubmitted && taskControl.task_start_date.errors }\" class=\"form-group\">\r\n                                            <label for=\"task_start_date\">{{'tasks.create.fields.actual_startdate' | translate }}</label>\r\n                                            <div class=\"position-relative has-icon-left\">\r\n                                                <input #dp3=\"bsDatepicker\" (bsValueChange)=\"taskstartDateChange($event)\" [bsConfig]=\"datepickerConfig\" bsDatepicker class=\"form-control\" formControlName=\"task_start_date\" id=\"task_start_date\" placeholder=\"{{'tasks.create.placeholders.placeholder4' | translate }}\" type=\"text\"/>\r\n                                                <div class=\"form-control-position\"><i class=\"ft-calendar\"></i></div>\r\n                                                <div *ngIf=\"isFormSubmitted && taskControl.task_start_date.errors\" class=\"invalid-feedback\">\r\n                                                    <div *ngIf=\"taskControl.task_start_date.errors\">{{'tasks.create.error_messages.message6' | translate }}</div>\r\n                                                </div>\r\n                                            </div>\r\n                                        </div>\r\n                                    </div>\r\n                                    <div class=\"col-md-6\">\r\n                                        <div [ngClass]=\"{ 'is-invalid': isFormSubmitted && taskControl.task_end_date.errors }\" class=\"form-group\">\r\n                                            <label for=\"end-date\">{{'tasks.create.fields.actual_enddate' | translate }}</label>\r\n                                            <div class=\"position-relative has-icon-left\">\r\n                                                <input #dp4=\"bsDatepicker\" [bsConfig]=\"datepickerConfig\" [minDate]=\"createTaskForm.get('task_start_date').value\" bsDatepicker class=\"form-control\" formControlName=\"task_end_date\" id=\"task_end_date\" placeholder=\"{{'tasks.create.placeholders.placeholder5' | translate }}\" type=\"text\"/>\r\n                                                <div class=\"form-control-position\"><i class=\"ft-calendar\"></i></div>\r\n                                                <div *ngIf=\"isFormSubmitted && taskControl.task_end_date.errors\" class=\"invalid-feedback\">\r\n                                                    <div *ngIf=\"taskControl.task_end_date.errors\">{{'tasks.create.error_messages.message7' | translate }}</div>\r\n                                                </div>\r\n                                            </div>\r\n                                        </div>\r\n                                    </div>\r\n                                </div>\r\n                                <h4 class=\"form-section\">\r\n                                    <i class=\"ft-trending-up\"></i> {{'tasks.headings.head3' | translate}}</h4>\r\n                                <div class=\"row\">\r\n                                    <div class=\"col-md-12\">\r\n                                        <div class=\"form-group\">\r\n                                            <label>{{'tasks.create.fields.progress' | translate }}</label>\r\n                                            <ng5-slider [options]=\"progressOptions\" formControlName=\"progress\"></ng5-slider>\r\n                                        </div>\r\n                                    </div>\r\n                                </div>\r\n                            </div>\r\n                        </div>\r\n                    </div>\r\n                </div>\r\n            </div>\r\n            <div class=\"col-md-6\">\r\n                <div class=\"card\">\r\n                    <div class=\"card-header\">&nbsp;</div>\r\n                    <div class=\"card-body\">\r\n                        <div class=\"px-3\">\r\n                            <div class=\"form-body\">\r\n                                <h4 class=\"form-section\">\r\n                                    <i class=\"fa ft-zap\"></i> {{'tasks.headings.head4' | translate}}</h4>\r\n                                <div *ngIf=\"parent_task_id == 0;\" class=\"row\">\r\n                                    <div class=\"col-md-7\">\r\n                                        <div [ngClass]=\"{ 'is-invalid': isFormSubmitted && taskControl.project_id.errors }\" class=\"form-group\">\r\n                                            <label for=\"project_id\">{{'tasks.create.fields.project_name' | translate }}&nbsp;<span class=\"text-danger\">*</span></label>\r\n                                            <ng-select (change)=\"projectChange($event)\" [items]=\"projects\" [searchable]=\"true\" [selectOnTab]=\"true\" bindLabel=\"project_name\" bindValue=\"id\" formControlName=\"project_id\" labelForId=\"project_id\" placeholder=\"{{'tasks.create.placeholders.placeholder6' | translate }}\">\r\n                                                <ng-template let-item=\"item\" ng-option-tmp>{{item.project_name}}</ng-template>\r\n                                            </ng-select>\r\n                                            <div *ngIf=\"isFormSubmitted && taskControl.project_id.errors\" class=\"invalid-feedback\">\r\n                                                <div *ngIf=\"taskControl.project_id.errors.required\">{{'tasks.create.error_messages.message8' | translate }}</div>\r\n                                            </div>\r\n                                        </div>\r\n                                    </div>\r\n                                    <div class=\"col-md-5\">\r\n                                        <div class=\"form-group\">\r\n                                            <label for=\"project_version\">{{'tasks.create.fields.project_version' | translate }}</label>\r\n                                            <ng-select [items]=\"projectVersions\" [searchable]=\"true\" [selectOnTab]=\"true\" formControlName=\"project_version\" placeholder=\"{{'tasks.create.placeholders.placeholder7' | translate }}\">\r\n                                                <ng-template let-item=\"item\" ng-option-tmp>{{item}}</ng-template>\r\n                                            </ng-select>\r\n                                        </div>\r\n                                    </div>\r\n                                </div>\r\n                                <div *ngIf=\"parent_task_id != 0;\" class=\"row\">\r\n                                    <div class=\"col-md-12\">\r\n                                        <div class=\"form-group\">\r\n                                            <label>{{'tasks.create.fields.project_name' | translate }}:</label><span class=\"badge badge-secondary\">{{project.project_name}}</span><br>\r\n                                            <label>{{'tasks.create.fields.project_version' | translate }}:</label><span class=\"badge badge-secondary\">{{parentTask.project_version}}</span><br>\r\n                                            <label>{{'tasks.create.fields.parent_taskID' | translate }}:</label><span class=\"badge badge-secondary\">{{parentTask.generated_id}}</span>\r\n                                        </div>\r\n                                    </div>\r\n                                </div>\r\n                                <h4 class=\"form-section\">\r\n                                    <i class=\"ft-file-text\"></i> {{'tasks.headings.head5' | translate}}</h4>\r\n                                <div class=\"row\">\r\n                                    <div class=\"col-md-6\">\r\n                                        <div class=\"form-group\">\r\n                                            <label for=\"assign_to\">{{'tasks.create.fields.assigned_To' | translate }}</label>\r\n                                            <ng-select [items]=\"users\" [searchable]=\"true\" [selectOnTab]=\"true\" bindLabel=\"firstname\" bindValue=\"id\" formControlName=\"assign_to\" labelForId=\"assign_to\" placeholder=\"{{'tasks.create.placeholders.placeholder8' | translate }}\">\r\n                                                <ng-template let-item=\"item\" ng-option-tmp>{{item.firstname}} {{item.lastname}}</ng-template>\r\n                                            </ng-select>\r\n                                        </div>\r\n                                    </div>\r\n                                    <div class=\"col-md-6\">\r\n                                        <div [ngClass]=\"{ 'is-invalid': isFormSubmitted && taskControl.status.errors }\" class=\"form-group\">\r\n                                            <label for=\"status\">{{'tasks.create.fields.status' | translate }}&nbsp;<span class=\"text-danger\">*</span>\r\n                                            </label>\r\n                                            <ng-select [items]=\"(getTaskStatus() | translate)\" [searchable]=\"true\" [selectOnTab]=\"true\" bindLabel=\"label\" bindValue=\"id\" formControlName=\"status\" labelForId=\"status\" placeholder=\"{{'tasks.create.placeholders.placeholder9' | translate }}\"></ng-select>\r\n                                            <div *ngIf=\"isFormSubmitted && taskControl.status.errors\" class=\"invalid-feedback\">\r\n                                                <div *ngIf=\"taskControl.status.errors.required\">{{'tasks.create.error_messages.message11' | translate }}</div>\r\n                                            </div>\r\n                                        </div>\r\n                                    </div>\r\n                                    <div class=\"col-md-6\">\r\n                                        <div [ngClass]=\"{ 'is-invalid': isFormSubmitted && taskControl.priority.errors }\" class=\"form-group\">\r\n                                            <label for=\"priority\">{{'tasks.create.fields.priority' | translate }}&nbsp;<span class=\"text-danger\">*</span></label>\r\n                                            <ng-select [items]=\"('tasks.priorities' | translate)\" [searchable]=\"true\" [selectOnTab]=\"true\" bindLabel=\"label\" bindValue=\"id\" formControlName=\"priority\" labelForId=\"priority\" placeholder=\"{{'tasks.create.placeholders.placeholder10' | translate }}\"></ng-select>\r\n                                            <div *ngIf=\"isFormSubmitted && taskControl.priority.errors\" class=\"invalid-feedback\">\r\n                                                <div *ngIf=\"taskControl.priority.errors.required\">{{'tasks.create.error_messages.message12' | translate }}</div>\r\n                                            </div>\r\n                                        </div>\r\n                                    </div>\r\n                                    <div class=\"col-md-6\">\r\n                                        <div class=\"form-group\">\r\n                                            <label for=\"estimated_hours\">{{'tasks.create.fields.estimate_hours' | translate }}</label>\r\n                                            <input [ngClass]=\"{ 'is-invalid': (isFormSubmitted && taskControl.estimated_hours.errors || isHoursValid) }\" class=\"form-control\" formControlName=\"estimated_hours\" placeholder=\"00:00\" type='text'>\r\n                                            <div *ngIf=\"isFormSubmitted && taskControl.estimated_hours.errors\" class=\"invalid-feedback\">\r\n                                                <div *ngIf=\"taskControl.estimated_hours.errors.pattern\">{{'tasks.create.error_messages.message13' | translate }}</div>\r\n                                            </div>\r\n                                            <div *ngIf=\"isHoursValid\" class=\"invalid-feedback\">\r\n                                                <div *ngIf=\"isHoursValid\">{{'tasks.create.error_messages.message14' | translate }} {{this.project.estimated_hours}}.</div>\r\n                                            </div>\r\n                                        </div>\r\n                                    </div>\r\n                                </div>\r\n                            </div>\r\n                        </div>\r\n                    </div>\r\n                </div>\r\n            </div>\r\n            <div *ngIf=\"customFields.length > 0\" class=\"col-md-12\">\r\n                <div class=\"card\">\r\n                    <div class=\"card-body\">\r\n                        <div class=\"px-3\">\r\n                            <div class=\"form-body\">\r\n                                <h4 class=\"form-section\"><i class=\"ft-star\"></i> {{'tasks.headings.head6' | translate}}\r\n                                </h4>\r\n                                <div class=\"row mb-3\">\r\n                                    <div class=\"col-md-12\">\r\n                                        <app-show-custom-field-element [controls]=\"createTaskForm.get('custom_field')\" [customFields]=\"customFields\" [formArray]=\"'custom_field'\" [formName]=\"createTaskForm\" [isFormSubmitted]=\"isFormSubmitted\"></app-show-custom-field-element>\r\n                                    </div>\r\n                                </div>\r\n                            </div>\r\n                        </div>\r\n                    </div>\r\n                </div>\r\n            </div>\r\n            <div class=\"col-md-12\">\r\n                <div class=\"card\">\r\n                    <div class=\"card-body\">\r\n                        <div class=\"px-3\">\r\n                            <div class=\"form-body\">\r\n                                <h4 class=\"form-section\">\r\n                                    <i class=\"ft-message-square\"></i> {{'tasks.headings.head7' | translate}}</h4>\r\n                                <div class=\"row mb-3\">\r\n                                    <div class=\"col-md-12\">\r\n                                        <div class=\"form-group\">\r\n                                            <label for=\"description\">{{'tasks.create.fields.description' | translate }}</label>\r\n                                            <app-ngx-editor [placeholder]=\"''\" [spellcheck]=\"true\" formControlName=\"description\" height=\"100px\" id=\"description\" minHeight=\"50px\"></app-ngx-editor>\r\n                                        </div>\r\n                                    </div>\r\n                                    <div class=\"col-md-12 text-right\">\r\n                                        <a [routerLink]=\"['/tasks']\" class=\"btn btn-cancel mb-0\">{{'common.cancel' | translate}}</a>\r\n                                        <button class=\"btn btn-submit mb-0\" type=\"submit\">{{'common.create' | translate}}</button>\r\n                                    </div>\r\n                                </div>\r\n                            </div>\r\n                        </div>\r\n                    </div>\r\n                </div>\r\n            </div>\r\n        </div>\r\n    </form>\r\n</section>\r\n");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/modules/pm/tasks/pages/task-detail/task-detail.component.html":
/*!*********************************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/modules/pm/tasks/pages/task-detail/task-detail.component.html ***!
  \*********************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<section class=\"row detail-page\">\r\n    <div *ngIf=\"isPageLoaded\" class=\"card bg-transparent\">\r\n        <app-task-details [apiUrl]=\"apiUrl\" [loginUser]=\"loginUser\" [permission]=\"permission\" [task]=\"task\"></app-task-details>\r\n    </div>\r\n</section>\r\n");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/modules/pm/tasks/pages/task-edit/task-edit.component.html":
/*!*****************************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/modules/pm/tasks/pages/task-edit/task-edit.component.html ***!
  \*****************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<section *ngIf=\"isPageLoaded\" id=\"basic-form-layouts\">\r\n    <form (ngSubmit)=\"onSubmit()\" [formGroup]=\"editTaskForm\">\r\n        <div class=\"row\">\r\n            <div class=\"col-md-6\">\r\n                <div class=\"card\">\r\n                    <div class=\"card-header\">\r\n                        <h4 class=\"card-title\">\r\n                            <ng-container *ngIf=\"task.parent_task_id == 0;\">{{'tasks.title4' | translate}}</ng-container>\r\n                            <ng-container *ngIf=\"task.parent_task_id != 0;\">{{'tasks.title5' | translate}}</ng-container>\r\n                        </h4>\r\n                    </div>\r\n                    <div class=\"card-body\">\r\n                        <div class=\"px-3\">\r\n                            <div class=\"form-body\">\r\n                                <h4 class=\"form-section\"><i class=\"ft-type\"></i> {{'tasks.headings.head1' | translate}}\r\n                                </h4>\r\n                                <div class=\"row\">\r\n                                    <div class=\"col-md-4\">\r\n                                        <div class=\"form-group\">\r\n                                            <label *ngIf=\"task.parent_task_id == 0\" for=\"generated_id\">{{'tasks.create.fields.task_ID' | translate }}&nbsp;<span class=\"text-danger\">*</span></label>\r\n                                            <label *ngIf=\"task.parent_task_id !=0\" for=\"generated_id\">{{'tasks.create.fields.subtask_Id' | translate }}&nbsp;<span class=\"text-danger\">*</span></label>\r\n                                            <input [ngClass]=\"{ 'is-invalid': isFormSubmitted && taskControl.generated_id.errors }\" class=\"form-control\" formControlName=\"generated_id\" id=\"generated_id\" readonly type=\"text\"/>\r\n                                            <div *ngIf=\"isFormSubmitted && taskControl.generated_id.errors\" class=\"invalid-feedback\">\r\n                                                <div *ngIf=\"taskControl.generated_id.errors.required\">{{'tasks.create.error_messages.message3' | translate }}</div>\r\n                                            </div>\r\n                                        </div>\r\n                                    </div>\r\n                                    <div class=\"col-md-8\">\r\n                                        <div class=\"form-group\">\r\n                                            <label for=\"name\">{{'tasks.create.fields.task_name' | translate }}&nbsp;<span class=\"text-danger\">*</span></label>\r\n                                            <input [ngClass]=\"{ 'is-invalid': isFormSubmitted && taskControl.name.errors }\" class=\"form-control\" formControlName=\"name\" id=\"name\" placeholder=\"{{'tasks.create.placeholders.placeholder1' | translate }}\" type=\"text\"/>\r\n                                            <div *ngIf=\"isFormSubmitted && taskControl.name.errors\" class=\"invalid-feedback\">\r\n                                                <div *ngIf=\"taskControl.name.errors.required\">{{'tasks.create.error_messages.message1' | translate }}</div>\r\n                                                <div *ngIf=\"taskControl.name.errors.maxlength\">{{'tasks.create.error_messages.message2' | translate }}</div>\r\n                                            </div>\r\n                                        </div>\r\n                                    </div>\r\n                                </div>\r\n                                <h4 class=\"form-section\">\r\n                                    <i class=\"ft-calendar\"></i> {{'tasks.headings.head2' | translate}}</h4>\r\n                                <div class=\"row\">\r\n                                    <div class=\"col-md-6\">\r\n                                        <div [ngClass]=\"{ 'is-invalid': isFormSubmitted && taskControl.planned_start_date.errors }\" class=\"form-group\">\r\n                                            <label for=\"planned_start_date\">{{'tasks.create.fields.plan_startdate' | translate }}</label>\r\n                                            <div class=\"position-relative has-icon-left\">\r\n                                                <input #dp1=\"bsDatepicker\" (onHidden)=\"planstartDateChange($event)\" [bsConfig]=\"datepickerConfig\" bsDatepicker class=\"form-control\" formControlName=\"planned_start_date\" id=\"planned_start_date\" placeholder=\"{{'tasks.create.placeholders.placeholder2' | translate }}\" type=\"text\"/>\r\n                                                <div class=\"form-control-position\"><i class=\"ft-calendar\"></i></div>\r\n                                                <div *ngIf=\"isFormSubmitted && taskControl.planned_start_date.errors\" class=\"invalid-feedback\">\r\n                                                    <div *ngIf=\"taskControl.planned_start_date.errors\">{{'tasks.create.error_messages.message4' | translate }}</div>\r\n                                                </div>\r\n                                            </div>\r\n                                        </div>\r\n                                    </div>\r\n                                    <div class=\"col-md-6\">\r\n                                        <div [ngClass]=\"{ 'is-invalid': isFormSubmitted && taskControl.planned_end_date.errors }\" class=\"form-group\">\r\n                                            <label for=\"planned_end_date\">{{'tasks.create.fields.plan_enddate' | translate }}</label>\r\n                                            <div class=\"position-relative has-icon-left\">\r\n                                                <input #dp2=\"bsDatepicker\" [bsConfig]=\"datepickerConfig\" [minDate]=\"editTaskForm.get('planned_start_date').value\" bsDatepicker class=\"form-control\" formControlName=\"planned_end_date\" id=\"planned_end_date\" placeholder=\"{{'tasks.create.placeholders.placeholder3' | translate }}\" type=\"text\"/>\r\n                                                <div class=\"form-control-position\"><i class=\"ft-calendar\"></i></div>\r\n                                                <div *ngIf=\"isFormSubmitted && taskControl.planned_end_date.errors\" class=\"invalid-feedback\">\r\n                                                    <div *ngIf=\"taskControl.planned_end_date.errors\">{{'tasks.create.error_messages.message5' | translate }}</div>\r\n                                                </div>\r\n                                            </div>\r\n                                        </div>\r\n                                    </div>\r\n                                    <div class=\"col-md-6\">\r\n                                        <div [ngClass]=\"{ 'is-invalid': isFormSubmitted && taskControl.task_start_date.errors }\" class=\"form-group\">\r\n                                            <label for=\"task_start_date\">{{'tasks.create.fields.actual_startdate' | translate }}</label>\r\n                                            <div class=\"position-relative has-icon-left\">\r\n                                                <input #dp3=\"bsDatepicker\" (onHidden)=\"taskstartDateChange($event)\" [bsConfig]=\"datepickerConfig\" bsDatepicker class=\"form-control\" formControlName=\"task_start_date\" id=\"task_start_date\" placeholder=\"{{'tasks.create.placeholders.placeholder4' | translate }}\" type=\"text\"/>\r\n                                                <div class=\"form-control-position\"><i class=\"ft-calendar\"></i></div>\r\n                                                <div *ngIf=\"isFormSubmitted && taskControl.task_start_date.errors\" class=\"invalid-feedback\">\r\n                                                    <div *ngIf=\"taskControl.task_start_date.errors\">{{'tasks.create.error_messages.message6' | translate }}</div>\r\n                                                </div>\r\n                                            </div>\r\n                                        </div>\r\n                                    </div>\r\n                                    <div class=\"col-md-6\">\r\n                                        <div [ngClass]=\"{ 'is-invalid': isFormSubmitted && taskControl.task_end_date.errors }\" class=\"form-group\">\r\n                                            <label for=\"task_end_date\">{{'tasks.create.fields.actual_enddate' | translate }}</label>\r\n                                            <div class=\"position-relative has-icon-left\">\r\n                                                <input #dp4=\"bsDatepicker\" [bsConfig]=\"datepickerConfig\" [minDate]=\"editTaskForm.get('task_start_date').value\" bsDatepicker class=\"form-control\" formControlName=\"task_end_date\" id=\"task_end_date\" placeholder=\"{{'tasks.create.placeholders.placeholder5' | translate }}\" type=\"text\"/>\r\n                                                <div class=\"form-control-position\"><i class=\"ft-calendar\"></i></div>\r\n                                                <div *ngIf=\"isFormSubmitted && taskControl.task_end_date.errors\" class=\"invalid-feedback\">\r\n                                                    <div *ngIf=\"taskControl.task_end_date.errors\">{{'tasks.create.error_messages.message7' | translate }}</div>\r\n                                                </div>\r\n                                            </div>\r\n                                        </div>\r\n                                    </div>\r\n                                </div>\r\n                                <h4 class=\"form-section\">\r\n                                    <i class=\"ft-trending-up\"></i> {{'tasks.headings.head3' | translate}}</h4>\r\n                                <div class=\"row\">\r\n                                    <div class=\"col-md-12\">\r\n                                        <div class=\"form-group\">\r\n                                            <label>{{'tasks.create.fields.progress' | translate }}</label>\r\n                                            <ng5-slider [options]=\"progressOptions\" formControlName=\"progress\"></ng5-slider>\r\n                                        </div>\r\n                                    </div>\r\n                                </div>\r\n                            </div>\r\n                        </div>\r\n                    </div>\r\n                </div>\r\n            </div>\r\n            <div class=\"col-md-6\">\r\n                <div class=\"card\">\r\n                    <div class=\"card-header\">&nbsp;</div>\r\n                    <div class=\"card-body\">\r\n                        <div class=\"px-3\">\r\n                            <div class=\"form-body\">\r\n                                <h4 class=\"form-section\">\r\n                                    <i class=\"fa ft-zap\"></i> {{'tasks.headings.head4' | translate}}</h4>\r\n                                <div *ngIf=\"task.parent_task_id == 0\" class=\"row\">\r\n                                    <div class=\"col-md-7\">\r\n                                        <div [ngClass]=\"{ 'is-invalid': isFormSubmitted && taskControl.project_id.errors }\" class=\"form-group\">\r\n                                            <label for=\"project_id\">{{'tasks.create.fields.project_name' | translate }}&nbsp;<span class=\"text-danger\">*</span></label>\r\n                                            <ng-select (change)=\"projectChange($event)\" (clear)=\"clearVersionValues('project_version')\" [items]=\"projects\" [searchable]=\"true\" [selectOnTab]=\"true\" bindLabel=\"project_name\" bindValue=\"id\" formControlName=\"project_id\" labelForId=\"project_id\" placeholder=\"{{'tasks.create.placeholders.placeholder6' | translate }}\">\r\n                                                <ng-template let-item=\"item\" ng-option-tmp>\r\n                                                    {{item.project_name}}\r\n                                                </ng-template>\r\n                                            </ng-select>\r\n                                            <div *ngIf=\"isFormSubmitted && taskControl.project_id.errors\" class=\"invalid-feedback\">\r\n                                                <div *ngIf=\"taskControl.project_id.errors.required\">{{'tasks.create.error_messages.message8' | translate }}</div>\r\n                                            </div>\r\n                                        </div>\r\n                                    </div>\r\n                                    <div class=\"col-md-5\">\r\n                                        <div class=\"form-group\">\r\n                                            <label for=\"project_version\">{{'tasks.create.fields.project_version' | translate }}</label>\r\n                                            <ng-select [items]=\"projectVersions\" [searchable]=\"true\" [selectOnTab]=\"true\" formControlName=\"project_version\" placeholder=\"{{'tasks.create.placeholders.placeholder7' | translate }}\">\r\n                                                <ng-template let-item=\"item\" ng-option-tmp>\r\n                                                    {{item}}\r\n                                                </ng-template>\r\n                                            </ng-select>\r\n                                        </div>\r\n                                    </div>\r\n                                </div>\r\n                                <div *ngIf=\"task.parent_task_id != 0;\" class=\"row\">\r\n                                    <div class=\"col-md-12\">\r\n                                        <div class=\"form-group\">\r\n                                            <label>{{'tasks.create.fields.project_name' | translate }}:</label>\r\n                                            <span class=\"badge badge-secondary\">{{task.project1.project_name}}</span><br>\r\n                                            <label>{{'tasks.create.fields.project_version' | translate }}:</label>\r\n                                            <span class=\"badge badge-secondary\">{{parentTask.project_version}}</span><br>\r\n                                            <label>{{'tasks.create.fields.parent_taskID' | translate }}:</label><span class=\"badge badge-secondary\">{{parentTask.generated_id}}</span>\r\n                                        </div>\r\n                                    </div>\r\n                                </div>\r\n                                <h4 class=\"form-section\">\r\n                                    <i class=\"ft-file-text\"></i> {{'tasks.headings.head5' | translate}}</h4>\r\n                                <div class=\"row\">\r\n                                    <div class=\"col-md-6\">\r\n                                        <div class=\"form-group\">\r\n                                            <label for=\"assign_to\">{{'tasks.create.fields.assigned_To' | translate }}</label>\r\n                                            <ng-select [items]=\"users\" [searchable]=\"true\" [selectOnTab]=\"true\" bindLabel=\"firstname\" bindValue=\"id\" formControlName=\"assign_to\" labelForId=\"assign_to\" placeholder=\"{{'tasks.create.placeholders.placeholder8' | translate }}\">\r\n                                                <ng-template let-item=\"item\" ng-option-tmp>{{item.firstname}} {{item.lastname}}</ng-template>\r\n                                            </ng-select>\r\n                                        </div>\r\n                                    </div>\r\n                                    <div class=\"col-md-6\">\r\n                                        <div [ngClass]=\"{ 'is-invalid': isFormSubmitted && taskControl.status.errors }\" class=\"form-group\">\r\n                                            <label for=\"status\">{{'tasks.create.fields.status' | translate }}&nbsp;<span class=\"text-danger\">*</span>\r\n                                            </label>\r\n                                            <ng-select [items]=\"(getTaskStatus(task.status) | translate)\" [searchable]=\"true\" [selectOnTab]=\"true\" bindLabel=\"label\" bindValue=\"id\" formControlName=\"status\" labelForId=\"status\" placeholder=\"{{'tasks.create.placeholders.placeholder9' | translate }}\"></ng-select>\r\n                                            <div *ngIf=\"isFormSubmitted && taskControl.status.errors\" class=\"invalid-feedback\">\r\n                                                <div *ngIf=\"taskControl.status.errors.required\">{{'tasks.create.error_messages.message11' | translate }}</div>\r\n                                            </div>\r\n                                        </div>\r\n                                    </div>\r\n                                    <div class=\"col-md-6\">\r\n                                        <div [ngClass]=\"{ 'is-invalid': isFormSubmitted && taskControl.priority.errors }\" class=\"form-group\">\r\n                                            <label for=\"status\">{{'tasks.create.fields.priority' | translate }}&nbsp;<span class=\"text-danger\">*</span></label>\r\n                                            <ng-select [items]=\"('tasks.priorities' | translate)\" [searchable]=\"true\" [selectOnTab]=\"true\" bindLabel=\"label\" bindValue=\"id\" formControlName=\"priority\" labelForId=\"priority\" placeholder=\"{{'tasks.create.placeholders.placeholder10' | translate }}\"></ng-select>\r\n                                            <div *ngIf=\"isFormSubmitted && taskControl.priority.errors\" class=\"invalid-feedback\">\r\n                                                <div *ngIf=\"taskControl.priority.errors.required\">{{'tasks.create.error_messages.message12' | translate }}</div>\r\n                                            </div>\r\n                                        </div>\r\n                                    </div>\r\n                                    <div class=\"col-md-6\">\r\n                                        <div class=\"form-group\">\r\n                                            <label for=\"estimated_hours\">{{'tasks.create.fields.estimate_hours' | translate }}</label>\r\n                                            <input [ngClass]=\"{ 'is-invalid': (isFormSubmitted && taskControl.estimated_hours.errors || isHoursValid) }\" class=\"form-control\" formControlName=\"estimated_hours\" placeholder=\"00:00\" type='text'>\r\n                                            <div *ngIf=\"isFormSubmitted && taskControl.estimated_hours.errors\" class=\"invalid-feedback\">\r\n                                                <div *ngIf=\"taskControl.estimated_hours.errors.pattern\">{{'tasks.create.error_messages.message13' | translate }}</div>\r\n                                            </div>\r\n                                            <div *ngIf=\"isHoursValid\" class=\"invalid-feedback\">\r\n                                                <div *ngIf=\"isHoursValid\">{{'tasks.create.error_messages.message14' | translate }} {{this.task.project1.estimated_hours}}.</div>\r\n                                            </div>\r\n                                        </div>\r\n                                    </div>\r\n                                </div>\r\n                            </div>\r\n                        </div>\r\n                    </div>\r\n                </div>\r\n            </div>\r\n            <div *ngIf=\"customFields.length > 0\" class=\"col-md-12\">\r\n                <div class=\"card\">\r\n                    <div class=\"card-body\">\r\n                        <div class=\"px-3\">\r\n                            <div class=\"form-body\">\r\n                                <h4 class=\"form-section\"><i class=\"ft-star\"></i> {{'tasks.headings.head6' | translate}}\r\n                                </h4>\r\n                                <div class=\"row mb-3\">\r\n                                    <div class=\"col-md-12\">\r\n                                        <app-show-custom-field-element [controls]=\"editTaskForm.get('custom_field')\" [customFields]=\"customFields\" [formArray]=\"'custom_field'\" [formName]=\"editTaskForm\" [isFormSubmitted]=\"isFormSubmitted\"></app-show-custom-field-element>\r\n                                    </div>\r\n                                </div>\r\n                            </div>\r\n                        </div>\r\n                    </div>\r\n                </div>\r\n            </div>\r\n            <div class=\"col-md-12\">\r\n                <div class=\"card\">\r\n                    <div class=\"card-body\">\r\n                        <div class=\"px-3\">\r\n                            <div class=\"form-body\">\r\n                                <h4 class=\"form-section\">\r\n                                    <i class=\"ft-message-square\"></i> {{'tasks.headings.head7' | translate}}</h4>\r\n                                <div class=\"row mb-3\">\r\n                                    <div class=\"col-md-12\">\r\n                                        <div class=\"form-group\">\r\n                                            <label for=\"description\">{{'tasks.create.fields.description' | translate }}</label>\r\n                                            <app-ngx-editor [placeholder]=\"''\" [spellcheck]=\"true\" formControlName=\"description\" height=\"100px\" id=\"description\" minHeight=\"50px\"></app-ngx-editor>\r\n                                        </div>\r\n                                    </div>\r\n                                    <div class=\"col-md-12 text-right\">\r\n                                        <a [routerLink]=\"['/tasks']\" class=\"btn btn-cancel mb-0\">{{'common.cancel' | translate}}</a>\r\n                                        <button class=\"btn btn-submit mb-0\" type=\"submit\">{{'common.update' | translate}}</button>\r\n                                    </div>\r\n                                </div>\r\n                            </div>\r\n                        </div>\r\n                    </div>\r\n                </div>\r\n            </div>\r\n        </div>\r\n    </form>\r\n</section>\r\n");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/modules/pm/tasks/pages/task-list/task-list.component.html":
/*!*****************************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/modules/pm/tasks/pages/task-list/task-list.component.html ***!
  \*****************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<section class=\"hide_empty_message\">\r\n    <div class=\"row\">\r\n        <div class=\"col-sm-12\">\r\n            <div class=\"card pl-2 pr-2 pb-2\">\r\n                <!-- Card header -->\r\n                <div class=\"card-header pl-0 pr-0 border-bottom\">\r\n                    <h4 class=\"main-title mt-2\"><span>{{'tasks.title' | translate}}</span></h4>\r\n                    <div class=\"card-buttons\">\r\n                        <a [routerLink]=\"['/taskboard']\" class=\"btn btn-create mb-0\" tooltip=\"{{'common.switch_to_kanban' | translate}}\"><i class=\"fa fa-trello\"></i><span>{{'common.kanban' | translate}}</span></a>\r\n                        <a *ngxPermissionsOnly=\"['admin', 'super_admin', 'tasks_create']\" class=\"btn btn-create mb-0\" download=\"import_tasks.csv\" href=\"{{ apiUrl }}/csv/import_tasks.csv\" placement=\"top\" tooltip=\"{{'common.tooltip.task_csv_sample' | translate}}\"><i class=\"fa fa-files-o\"></i></a>\r\n                        <button (click)=\"openTaskImportModal()\" *ngxPermissionsOnly=\"['admin', 'super_admin', 'tasks_create']\" class=\"btn btn-create mb-0\" tooltip=\"{{'common.import' | translate}}\">\r\n                            <i class=\"fa fa-upload\"></i></button>\r\n                        <a *ngxPermissionsOnly=\"['admin', 'super_admin', 'tasks_create']\" [routerLink]=\"['/tasks/create']\" class=\"btn btn-create mb-0\" tooltip=\"{{'common.create' | translate}}\"><i class=\"fa fa-plus\"></i></a>\r\n                    </div>\r\n                </div>\r\n                <!-- Card content -->\r\n                <div class=\"card-content pt-3\">\r\n                    <!-- Card body -->\r\n                    <div class=\"card-body \">\r\n                        <!-- Filter buttons -->\r\n                        <div *ngIf=\"isPageLoaded\" class=\"d-flex flex-column flex-lg-row d-lg-inline-flex mb-3\">\r\n                            <div class=\"pr-0\">\r\n                                <div class=\"btn-group mr-2 mb-2\">\r\n                                    <label (click)=\"filterByStatus(statusfilterId, taskFilterKey)\" [(ngModel)]=\"taskFilterKey\" btnRadio=\"all\" class=\"btn btn-secondary btn-toggle m-0\" role=\"button\" tabindex=\"0\">{{'common.status.all' | translate}}</label>\r\n                                    <label (click)=\"filterByStatus(statusfilterId, taskFilterKey)\" [(ngModel)]=\"taskFilterKey\" btnRadio=\"selected\" class=\"btn btn-secondary btn-toggle m-0\" role=\"button\" tabindex=\"0\">{{'common.status.my' | translate}}</label>\r\n                                </div>\r\n                            </div>\r\n                            <div class=\" pl-lg-0 btn-filters \">\r\n                                <button (click)=\"filterByStatus(1, taskFilterKey)\" [ngClass]=\"{'active': statusfilterId ==1}\" class=\"btn btn-raised open\" type=\"button\">\r\n                                    <p>{{'common.status.open' | translate}}</p><span class=\"badge badge-light\">\r\n                                        <ng-container *ngIf=\"countStatus.open; else elseCondition2;\">{{countStatus.open}}</ng-container>\r\n                                        <ng-template #elseCondition2>0</ng-template>\r\n                                    </span>\r\n                                </button>\r\n                                <button (click)=\"filterByStatus(2, taskFilterKey)\" [ngClass]=\"{'active': statusfilterId==2}\" class=\"btn btn-raised in_progress\" type=\"button\">\r\n                                    <p>{{'common.status.in_progress' | translate}}</p><span class=\"badge badge-light\">\r\n                                        <ng-container *ngIf=\"countStatus.in_progress; else elseCondition3;\">{{countStatus.in_progress}}</ng-container>\r\n                                        <ng-template #elseCondition3>0</ng-template>\r\n                                    </span>\r\n                                </button>\r\n                                <button (click)=\"filterByStatus(6, taskFilterKey)\" [ngClass]=\"{'active': statusfilterId==3}\" class=\"btn btn-raised completed\" type=\"button\">\r\n                                    <p>{{'common.status.completed' | translate}}</p><span class=\"badge badge-light\">\r\n                                        <ng-container *ngIf=\"countStatus.completed; else elseCondition4;\">{{countStatus.completed}}</ng-container>\r\n                                        <ng-template #elseCondition4>0</ng-template>\r\n                                    </span>\r\n                                </button>\r\n                                <button [ngClass]=\"{'active': statusfilterId ==0}\" [routerLink]=\"['/tasks', 0, taskFilterKey]\" class=\"btn btn-raised btn-secondary\" type=\"button\">\r\n                                    <p>{{'common.status.total' | translate}}</p>\r\n                                    <span class=\"badge badge-light\">\r\n                                        <ng-container *ngIf=\"countStatus.all; else elseCondition1;\">{{countStatus.all}}</ng-container>\r\n                                        <ng-template #elseCondition1>0</ng-template>\r\n                                    </span>\r\n                                </button>\r\n                            </div>\r\n                        </div>\r\n                        <!-- Tasks lists -->\r\n                        <div class=\"row\">\r\n                            <div class=\"col-sm-12\">\r\n                                <div class=\"table-responsive-xs table-responsive-sm table-responsive-md table-responsive-lg table-responsive-xl overflow-x-auto\">\r\n                                    <table [dtOptions]=\"dtOptions\" [dtTrigger]=\"dtTrigger\" class=\"table table-bordered table-hover b4-datatable\" datatable id=\"tasks_table\" width=\"100%\">\r\n                                        <thead>\r\n                                        <tr>\r\n                                            <th>{{'tasks.columns.id' | translate}}</th>\r\n                                            <th>{{'tasks.columns.task_name' | translate}}</th>\r\n                                            <th>{{'tasks.columns.start_date' | translate}}</th>\r\n                                            <th>{{'tasks.columns.end_date' | translate}}</th>\r\n                                            <th>{{'tasks.columns.hours' | translate}}</th>\r\n                                            <th>{{'tasks.columns.assigned' | translate}}</th>\r\n                                            <th>{{'tasks.columns.priority' | translate}}</th>\r\n                                            <th>{{'tasks.columns.status' | translate}}</th>\r\n                                            <th>{{'tasks.columns.actions' | translate}}</th>\r\n                                        </tr>\r\n                                        </thead>\r\n                                        <tbody *ngIf=\"tasks?.length != 0\">\r\n                                        <tr *ngFor=\"let task of tasks; index as i\">\r\n                                            <td>\r\n                                                <a [routerLink]=\"['/tasks/detail', task.id]\" tooltip=\"{{'common.view' | translate}}\">{{task.generated_id}}</a>\r\n                                            </td>\r\n                                            <td>\r\n                                                <ng-container *ngIf=\"getCheckPermission(task); else elseBlock1\">\r\n                                                    <inline-edit-input (updateValue)=\"saveTaskDetail(i, 'name', $event);\" [elementFor]=\"'tasks.inline_edit.task_name' | translate\" [fieldValue]=\"task.name\" [isRequired]=\"'true'\" [name]=\"'name'\" [type]=\"'text'\"></inline-edit-input>\r\n                                                </ng-container>\r\n                                                <ng-template #elseBlock1>{{task.name}}</ng-template>\r\n                                            </td>\r\n                                            <td>{{task.task_start_date | dateTimeFormatFilter: loginUser.settings.date_format}}</td>\r\n                                            <td>{{task.task_end_date | dateTimeFormatFilter: loginUser.settings.date_format}}</td>\r\n                                            <td>{{task.actual_hours}}</td>\r\n                                            <td class=\"people-lists\">\r\n                                                <ng-container *ngIf=\"task.assign_to == null; else elseBlock3\">\r\n                                                    <a class=\"btn btn-profile-danger rounded-circle text-dark\" href=\"javascript:void(0);\" placement=\"top\" tooltip=\"{{'common.unassigned' | translate}}\">\r\n                                                        <img alt=\"Profile\" class=\"img-sm rounded-circle\" src=\"../assets/img/unassign.jpg\"/>\r\n                                                    </a>\r\n                                                </ng-container>\r\n                                                <ng-template #elseBlock3>\r\n                                                    <a [routerLink]=\"['/users/profile', task.assign_to]\" class=\"btn btn-profile-danger rounded-circle text-dark\" placement=\"top\" tooltip=\"{{task.assign_firstname}} {{task.assign_lastname}}\">\r\n                                                        <img *ngIf=\"task.assign_avatar\" alt=\"Profile\" class=\"img-sm rounded-circle\" src=\"{{apiUrl}}/uploads/profile/{{task.assign_avatar}}\"/>\r\n                                                        <img *ngIf=\"!task.assign_avatar\" alt=\"Profile\" class=\"img-sm rounded-circle\" src=\"../assets/img/profile_small.jpg\"/>\r\n                                                    </a>\r\n                                                </ng-template>\r\n                                            </td>\r\n                                            <td class=\"budges-status\">\r\n                                                <ng-container *ngFor=\"let priority of ('tasks.priorities' | translate)\">\r\n                                                    <div class=\"budges-status\">\r\n                                                        <span *ngIf=\"priority.id == task.priority\" class=\"{{priority.class}}\">{{priority.label}}</span>\r\n                                                    </div>\r\n                                                </ng-container>\r\n                                            </td>\r\n                                            <td class=\"status-dropdown\">\r\n                                                <div class=\"overdue-td\">\r\n                                                    <ng-container *ngIf=\"getCheckPermission(task); else elseBlock2\">\r\n                                                        <div class=\"btn-group\" dropdown>\r\n                                                            <button aria-controls=\"dropdown-basic\" class=\"btn dropdown-toggle select-btn-lg\" dropdownToggle id=\"button-basic\" type=\"button\">{{getTranslateStatus(task.status) | translate}}&nbsp;<span class=\"caret\"></span>\r\n                                                            </button>\r\n                                                            <ul *dropdownMenu aria-labelledby=\"button-basic\" class=\"dropdown-menu animated fadeIn\" id=\"dropdown-basic\" role=\"menu\">\r\n                                                                <li *ngFor=\"let status of (getTaskStatus(task.status) | translate)\" role=\"menuitem\">\r\n                                                                    <a (click)=\"changeTaskStatus([task.id], status);task.status = status.id\" [ngClass]=\"{'active': task.status == status.id}\" class=\"dropdown-item btn btn-sm {{status.class}}\">{{status.label}}</a>\r\n                                                                </li>\r\n                                                            </ul>\r\n                                                        </div>\r\n                                                    </ng-container>\r\n                                                    <ng-template #elseBlock2>\r\n                                                        <ng-container *ngFor=\"let status of (getTaskStatus(task.status) | translate)\">\r\n                                                            <div class=\"budges-status\">\r\n                                                                <span *ngIf=\"status.id == task.status\" class=\"{{status.class}}\">{{status.label}}</span>\r\n                                                            </div>\r\n                                                        </ng-container>\r\n                                                    </ng-template>\r\n                                                    <ng-container *ngIf=\"task.is_overdue\">\r\n                                                        <i aria-hidden=\"true\" class=\"fa fa-clock-o overdue-icon\" tooltip=\"{{'common.overdue' | translate}} : {{task.is_overdue}} {{'common.days' | translate}}\"></i>\r\n                                                    </ng-container>\r\n                                                </div>\r\n                                            </td>\r\n                                            <td class=\"actions-dropdown\">\r\n                                                <div class=\"btn-group\" dropdown>\r\n                                                    <button aria-controls=\"dropdown-basic-1\" class=\"dropdown-toggle btn-action\" dropdownToggle id=\"button-basic-1\" type=\"button\">\r\n                                                        <i class=\"fa fa-ellipsis-v\"></i></button>\r\n                                                    <ul *dropdownMenu aria-labelledby=\"button-basic-1\" class=\"dropdown-menu animated fadeIn\" id=\"dropdown-basic-1\" role=\"menu\">\r\n                                                        <li *ngIf=\"getCheckPermission(task)\" role=\"menuitem\">\r\n                                                            <a [routerLink]=\"['/tasks/edit', task.id]\" class=\"dropdown-item btn btn-edit btn-raised\" tooltip=\"{{'common.edit' | translate}}\"><i class=\"fa fa-pencil-square-o\"></i></a>\r\n                                                        </li>\r\n                                                        <li *ngxPermissionsOnly=\"['admin', 'super_admin', 'tasks_create']\" role=\"menuitem\">\r\n                                                            <a [routerLink]=\"['/tasks/copy', task.id]\" class=\"dropdown-item btn btn-edit btn-raised\" tooltip=\"{{'common.copy' | translate}}\"><i class=\"fa fa-clone\"></i></a>\r\n                                                        </li>\r\n                                                        <li *ngIf=\"getCheckPermission(task)\" role=\"menuitem\">\r\n                                                            <a (click)=\"deleteTask(task.id)\" class=\"dropdown-item btn btn-delete btn-raised\" tooltip=\"{{'common.delete' | translate}}\"><i class=\"fa fa-trash-o\"></i></a>\r\n                                                        </li>\r\n                                                    </ul>\r\n                                                </div>\r\n                                            </td>\r\n                                        </tr>\r\n                                        </tbody>\r\n                                        <tfoot *ngIf=\"tasks?.length == 0\" class=\"tfoot_dt\">\r\n                                        <tr>\r\n                                            <td class=\"no-data-available text-center\" colspan=\"9\">{{'common.datatable.sEmptyTable' | translate}}</td>\r\n                                        </tr>\r\n                                        </tfoot>\r\n                                    </table>\r\n                                </div>\r\n                            </div>\r\n                        </div>\r\n                    </div>\r\n                </div>\r\n            </div>\r\n        </div>\r\n    </div>\r\n</section>\r\n");

/***/ }),

/***/ "./src/app/core/services/import-task.service.ts":
/*!******************************************************!*\
  !*** ./src/app/core/services/import-task.service.ts ***!
  \******************************************************/
/*! exports provided: ImportTaskService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ImportTaskService", function() { return ImportTaskService; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../environments/environment */ "./src/environments/environment.ts");




var ImportTaskService = /** @class */ (function () {
    function ImportTaskService(http) {
        this.http = http;
        this.apiUrl = _environments_environment__WEBPACK_IMPORTED_MODULE_3__["environment"].apiUrl;
    }
    ImportTaskService.prototype.create = function (importTask) {
        return this.http.post(this.apiUrl + "/api/tasks/import", importTask);
    };
    ImportTaskService.ctorParameters = function () { return [
        { type: _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClient"] }
    ]; };
    ImportTaskService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
            providedIn: 'root'
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClient"]])
    ], ImportTaskService);
    return ImportTaskService;
}());



/***/ }),

/***/ "./src/app/core/services/task-attachment.service.ts":
/*!**********************************************************!*\
  !*** ./src/app/core/services/task-attachment.service.ts ***!
  \**********************************************************/
/*! exports provided: TaskAttachmentService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TaskAttachmentService", function() { return TaskAttachmentService; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../environments/environment */ "./src/environments/environment.ts");




var TaskAttachmentService = /** @class */ (function () {
    function TaskAttachmentService(http) {
        this.http = http;
        this.apiUrl = _environments_environment__WEBPACK_IMPORTED_MODULE_3__["environment"].apiUrl;
    }
    TaskAttachmentService.prototype.getAllAttachmentById = function (taskId) {
        return this.http.get(this.apiUrl + "/api/task-attachment/" + taskId);
    };
    TaskAttachmentService.prototype.create = function (taskAttachment) {
        return this.http.post(this.apiUrl + "/api/task-attachment", taskAttachment);
    };
    TaskAttachmentService.prototype.delete = function (id) {
        return this.http.delete(this.apiUrl + "/api/task-attachment/" + id);
    };
    TaskAttachmentService.ctorParameters = function () { return [
        { type: _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClient"] }
    ]; };
    TaskAttachmentService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
            providedIn: 'root'
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClient"]])
    ], TaskAttachmentService);
    return TaskAttachmentService;
}());



/***/ }),

/***/ "./src/app/core/services/task-comments.service.ts":
/*!********************************************************!*\
  !*** ./src/app/core/services/task-comments.service.ts ***!
  \********************************************************/
/*! exports provided: TaskCommentsService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TaskCommentsService", function() { return TaskCommentsService; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../environments/environment */ "./src/environments/environment.ts");




var TaskCommentsService = /** @class */ (function () {
    function TaskCommentsService(http) {
        this.http = http;
        this.apiUrl = _environments_environment__WEBPACK_IMPORTED_MODULE_3__["environment"].apiUrl;
    }
    TaskCommentsService.prototype.create = function (taskComment) {
        return this.http.post(this.apiUrl + "/api/task-comment", taskComment);
    };
    TaskCommentsService.prototype.update = function (taskComment) {
        return this.http.put(this.apiUrl + "/api/task-comment/" + taskComment.id, taskComment);
    };
    TaskCommentsService.prototype.delete = function (id) {
        return this.http.delete(this.apiUrl + "/api/task-comment/" + id);
    };
    TaskCommentsService.ctorParameters = function () { return [
        { type: _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClient"] }
    ]; };
    TaskCommentsService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
            providedIn: 'root'
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClient"]])
    ], TaskCommentsService);
    return TaskCommentsService;
}());



/***/ }),

/***/ "./src/app/modules/pm/tasks/components/create-attachment-modal/create-attachment-modal.component.scss":
/*!************************************************************************************************************!*\
  !*** ./src/app/modules/pm/tasks/components/create-attachment-modal/create-attachment-modal.component.scss ***!
  \************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL21vZHVsZXMvcG0vdGFza3MvY29tcG9uZW50cy9jcmVhdGUtYXR0YWNobWVudC1tb2RhbC9jcmVhdGUtYXR0YWNobWVudC1tb2RhbC5jb21wb25lbnQuc2NzcyJ9 */");

/***/ }),

/***/ "./src/app/modules/pm/tasks/components/create-attachment-modal/create-attachment-modal.component.ts":
/*!**********************************************************************************************************!*\
  !*** ./src/app/modules/pm/tasks/components/create-attachment-modal/create-attachment-modal.component.ts ***!
  \**********************************************************************************************************/
/*! exports provided: CreateAttachmentModalComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CreateAttachmentModalComponent", function() { return CreateAttachmentModalComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var ngx_bootstrap_modal__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ngx-bootstrap/modal */ "./node_modules/ngx-bootstrap/modal/fesm5/ngx-bootstrap-modal.js");
/* harmony import */ var ngx_toastr__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ngx-toastr */ "./node_modules/ngx-toastr/fesm5/ngx-toastr.js");
/* harmony import */ var _ngx_translate_core__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @ngx-translate/core */ "./node_modules/@ngx-translate/core/fesm5/ngx-translate-core.js");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! rxjs */ "./node_modules/rxjs/_esm5/index.js");
/* harmony import */ var _core_services_task_attachment_service__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./../../../../../core/services/task-attachment.service */ "./src/app/core/services/task-attachment.service.ts");
/* harmony import */ var dropzone__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! dropzone */ "./node_modules/dropzone/dist/dropzone.js");
/* harmony import */ var dropzone__WEBPACK_IMPORTED_MODULE_9___default = /*#__PURE__*/__webpack_require__.n(dropzone__WEBPACK_IMPORTED_MODULE_9__);










var CreateAttachmentModalComponent = /** @class */ (function () {
    function CreateAttachmentModalComponent(translate, bsCreateAttachmentModalRef, formBuilder, toastr, taskAttachmentService, route, router) {
        this.translate = translate;
        this.bsCreateAttachmentModalRef = bsCreateAttachmentModalRef;
        this.formBuilder = formBuilder;
        this.toastr = toastr;
        this.taskAttachmentService = taskAttachmentService;
        this.route = route;
        this.router = router;
        this.event = new _angular_core__WEBPACK_IMPORTED_MODULE_1__["EventEmitter"]();
        this.isFormSubmitted = false;
        this.isPageLoaded = false;
        this.isfileUploded = false;
        this.isfileLoaded = true;
    }
    Object.defineProperty(CreateAttachmentModalComponent.prototype, "attachment", {
        get: function () {
            return this.createAttachmentForm.controls;
        },
        enumerable: true,
        configurable: true
    });
    CreateAttachmentModalComponent.prototype.ngOnInit = function () {
        this.onClose = new rxjs__WEBPACK_IMPORTED_MODULE_7__["Subject"]();
        this.loadForms();
    };
    CreateAttachmentModalComponent.prototype.loadForms = function () {
        var _this_1 = this;
        this.createAttachmentForm = this.formBuilder.group({
            task_id: [this.taskId],
            file_name: ['', [_angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required, _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].maxLength(255)]],
            file: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required],
            file_extension: [this.fileName],
            file_description: ['']
        });
        setTimeout(function () {
            _this_1.loadDropzone();
        });
    };
    CreateAttachmentModalComponent.prototype.loadDropzone = function () {
        var that = this;
        new dropzone__WEBPACK_IMPORTED_MODULE_9__(this.logodropzone.nativeElement, {
            url: 'https://httpbin.org/post',
            maxFiles: 1,
            clickable: true,
            createImageThumbnails: true,
            init: function () {
                this.on('addedfile', function (file) {
                    var removeButton = dropzone__WEBPACK_IMPORTED_MODULE_9__["createElement"]('<button class=\'btn btn-sm btn-block\'>' + that.translate.instant('common.remove_file') + '</button>');
                    var _this = this;
                    removeButton.addEventListener('click', function (e) {
                        e.preventDefault();
                        e.stopPropagation();
                        _this.removeFile(file);
                    });
                    file.previewElement.appendChild(removeButton);
                    if (file) {
                        var reader_1 = new FileReader();
                        that.fileName = file.name;
                        if (that.fileName) {
                            that.fileName = that.fileName.split('.').pop();
                        }
                        reader_1.onload = function (e) {
                            that.createAttachmentForm.patchValue({ file: reader_1.result });
                            that.createAttachmentForm.patchValue({ file_extension: that.fileName });
                        };
                        reader_1.readAsDataURL(file);
                    }
                });
                this.on('removedfile', function (file) {
                    that.createAttachmentForm.patchValue({ file: null });
                });
                this.on('error', function (file, message) {
                    if (file) {
                        that.toastr.error(message);
                    }
                });
            }
        });
    };
    CreateAttachmentModalComponent.prototype.removeDropzoneImage = function () {
        this.isfileUploded = true;
        this.isfileLoaded = false;
    };
    CreateAttachmentModalComponent.prototype.onSubmit = function () {
        var _this_1 = this;
        this.isFormSubmitted = true;
        if (this.createAttachmentForm.invalid) {
            return;
        }
        this.taskAttachmentService.create(this.createAttachmentForm.value)
            .subscribe(function (data) {
            _this_1.toastr.success(_this_1.translate.instant('attachments.messages.create'), _this_1.translate.instant('attachments.title'));
            _this_1.event.emit({ data: data });
            _this_1.onCancel();
        });
    };
    CreateAttachmentModalComponent.prototype.onCancel = function () {
        this.onClose.next(false);
        this.bsCreateAttachmentModalRef.hide();
    };
    CreateAttachmentModalComponent.ctorParameters = function () { return [
        { type: _ngx_translate_core__WEBPACK_IMPORTED_MODULE_6__["TranslateService"] },
        { type: ngx_bootstrap_modal__WEBPACK_IMPORTED_MODULE_4__["BsModalRef"] },
        { type: _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormBuilder"] },
        { type: ngx_toastr__WEBPACK_IMPORTED_MODULE_5__["ToastrService"] },
        { type: _core_services_task_attachment_service__WEBPACK_IMPORTED_MODULE_8__["TaskAttachmentService"] },
        { type: _angular_router__WEBPACK_IMPORTED_MODULE_3__["ActivatedRoute"] },
        { type: _angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"] }
    ]; };
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewChild"])('logodropzone', { static: false }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", _angular_core__WEBPACK_IMPORTED_MODULE_1__["ElementRef"])
    ], CreateAttachmentModalComponent.prototype, "logodropzone", void 0);
    CreateAttachmentModalComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-create-attachment-modal',
            template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./create-attachment-modal.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/modules/pm/tasks/components/create-attachment-modal/create-attachment-modal.component.html")).default,
            styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./create-attachment-modal.component.scss */ "./src/app/modules/pm/tasks/components/create-attachment-modal/create-attachment-modal.component.scss")).default]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_ngx_translate_core__WEBPACK_IMPORTED_MODULE_6__["TranslateService"],
            ngx_bootstrap_modal__WEBPACK_IMPORTED_MODULE_4__["BsModalRef"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormBuilder"],
            ngx_toastr__WEBPACK_IMPORTED_MODULE_5__["ToastrService"],
            _core_services_task_attachment_service__WEBPACK_IMPORTED_MODULE_8__["TaskAttachmentService"],
            _angular_router__WEBPACK_IMPORTED_MODULE_3__["ActivatedRoute"],
            _angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"]])
    ], CreateAttachmentModalComponent);
    return CreateAttachmentModalComponent;
}());



/***/ }),

/***/ "./src/app/modules/pm/tasks/components/task-activities/task-activities.component.scss":
/*!********************************************************************************************!*\
  !*** ./src/app/modules/pm/tasks/components/task-activities/task-activities.component.scss ***!
  \********************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL21vZHVsZXMvcG0vdGFza3MvY29tcG9uZW50cy90YXNrLWFjdGl2aXRpZXMvdGFzay1hY3Rpdml0aWVzLmNvbXBvbmVudC5zY3NzIn0= */");

/***/ }),

/***/ "./src/app/modules/pm/tasks/components/task-activities/task-activities.component.ts":
/*!******************************************************************************************!*\
  !*** ./src/app/modules/pm/tasks/components/task-activities/task-activities.component.ts ***!
  \******************************************************************************************/
/*! exports provided: TaskActivitiesComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TaskActivitiesComponent", function() { return TaskActivitiesComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");


var TaskActivitiesComponent = /** @class */ (function () {
    function TaskActivitiesComponent() {
        this.scrollConfig = {};
    }
    TaskActivitiesComponent.prototype.ngOnInit = function () {
    };
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])(),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", Object)
    ], TaskActivitiesComponent.prototype, "task", void 0);
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])(),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", Object)
    ], TaskActivitiesComponent.prototype, "loginUser", void 0);
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])(),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", Object)
    ], TaskActivitiesComponent.prototype, "apiUrl", void 0);
    TaskActivitiesComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-task-activities',
            template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./task-activities.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/modules/pm/tasks/components/task-activities/task-activities.component.html")).default,
            styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./task-activities.component.scss */ "./src/app/modules/pm/tasks/components/task-activities/task-activities.component.scss")).default]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [])
    ], TaskActivitiesComponent);
    return TaskActivitiesComponent;
}());



/***/ }),

/***/ "./src/app/modules/pm/tasks/components/task-attachments/task-attachments.component.scss":
/*!**********************************************************************************************!*\
  !*** ./src/app/modules/pm/tasks/components/task-attachments/task-attachments.component.scss ***!
  \**********************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL21vZHVsZXMvcG0vdGFza3MvY29tcG9uZW50cy90YXNrLWF0dGFjaG1lbnRzL3Rhc2stYXR0YWNobWVudHMuY29tcG9uZW50LnNjc3MifQ== */");

/***/ }),

/***/ "./src/app/modules/pm/tasks/components/task-attachments/task-attachments.component.ts":
/*!********************************************************************************************!*\
  !*** ./src/app/modules/pm/tasks/components/task-attachments/task-attachments.component.ts ***!
  \********************************************************************************************/
/*! exports provided: TaskAttachmentsComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TaskAttachmentsComponent", function() { return TaskAttachmentsComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var ngx_bootstrap_modal__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ngx-bootstrap/modal */ "./node_modules/ngx-bootstrap/modal/fesm5/ngx-bootstrap-modal.js");
/* harmony import */ var ngx_toastr__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ngx-toastr */ "./node_modules/ngx-toastr/fesm5/ngx-toastr.js");
/* harmony import */ var _ngx_translate_core__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @ngx-translate/core */ "./node_modules/@ngx-translate/core/fesm5/ngx-translate-core.js");
/* harmony import */ var sweetalert2__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! sweetalert2 */ "./node_modules/sweetalert2/dist/sweetalert2.all.js");
/* harmony import */ var sweetalert2__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(sweetalert2__WEBPACK_IMPORTED_MODULE_7__);
/* harmony import */ var _core_services_task_attachment_service__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../../../../../core/services/task-attachment.service */ "./src/app/core/services/task-attachment.service.ts");
/* harmony import */ var _components_create_attachment_modal_create_attachment_modal_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../../components/create-attachment-modal/create-attachment-modal.component */ "./src/app/modules/pm/tasks/components/create-attachment-modal/create-attachment-modal.component.ts");










var TaskAttachmentsComponent = /** @class */ (function () {
    function TaskAttachmentsComponent(translate, toastr, route, http, modalService, taskAttachmentService) {
        this.translate = translate;
        this.toastr = toastr;
        this.route = route;
        this.http = http;
        this.modalService = modalService;
        this.taskAttachmentService = taskAttachmentService;
        this.modalConfigs = {
            animated: true,
            keyboard: true,
            backdrop: true,
            ignoreBackdropClick: false,
            class: 'inmodal modal-dialog-centered modal-md animated fadeIn',
            initialState: {
                taskId: this.route.snapshot.params.id,
            }
        };
        this.getAllAttachment(this.route.snapshot.params.id);
    }
    TaskAttachmentsComponent.prototype.ngOnInit = function () {
    };
    TaskAttachmentsComponent.prototype.getAllAttachment = function (taskId) {
        var _this = this;
        this.taskAttachmentService.getAllAttachmentById(taskId).subscribe(function (data) {
            _this.attachments = data;
            _this.getFiles();
        });
    };
    TaskAttachmentsComponent.prototype.getFiles = function () {
        for (var iRow in this.attachments) {
            switch (this.attachments[iRow].file_extension) {
                case 'txt':
                    this.attachments[iRow].icon = 'fa fa-file-text';
                    break;
                case 'mp3':
                case 'wav':
                case 'raw':
                case 'tta':
                    this.attachments[iRow].icon = 'fa fa-music';
                    break;
                case 'webm':
                case 'flv':
                case 'ogg':
                case 'mov':
                case 'mp4':
                case 'm4p':
                case 'mpeg':
                case 'f4v':
                case '3gp':
                    this.attachments[iRow].icon = 'fa fa-film';
                    break;
                case 'pdf':
                    this.attachments[iRow].icon = 'fa fa-file-pdf-o';
                    break;
                case 'jpeg':
                case 'jpg':
                case 'png':
                case 'gif':
                case 'bmp':
                case 'svg':
                    this.attachments[iRow].isImageFile = true;
                    break;
                default:
                    this.attachments[iRow].isImageFile = false;
                    this.attachments[iRow].icon = 'fa fa-file';
                    break;
            }
        }
    };
    TaskAttachmentsComponent.prototype.openAttachmentCreateModal = function () {
        var _this = this;
        this.modalRef = this.modalService.show(_components_create_attachment_modal_create_attachment_modal_component__WEBPACK_IMPORTED_MODULE_9__["CreateAttachmentModalComponent"], this.modalConfigs);
        this.modalRef.content.event.subscribe(function (data) {
            _this.getAllAttachment(_this.task.id);
        });
    };
    TaskAttachmentsComponent.prototype.attachmentDelete = function (attachmentId) {
        var _this = this;
        sweetalert2__WEBPACK_IMPORTED_MODULE_7___default.a.fire({
            title: this.translate.instant('common.swal.title'),
            text: this.translate.instant('common.swal.text'),
            type: 'warning',
            showCancelButton: true,
            confirmButtonText: this.translate.instant('common.swal.confirmButtonText'),
            cancelButtonText: this.translate.instant('common.swal.cancelButtonText')
        }).then(function (result) {
            if (result.value) {
                _this.taskAttachmentService.delete(attachmentId).subscribe(function (data) {
                    _this.toastr.success(_this.translate.instant('attachments.messages.delete'), _this.translate.instant('tasks.title'));
                    _this.getAllAttachment(_this.task.id);
                });
            }
        });
    };
    TaskAttachmentsComponent.ctorParameters = function () { return [
        { type: _ngx_translate_core__WEBPACK_IMPORTED_MODULE_6__["TranslateService"] },
        { type: ngx_toastr__WEBPACK_IMPORTED_MODULE_5__["ToastrService"] },
        { type: _angular_router__WEBPACK_IMPORTED_MODULE_3__["ActivatedRoute"] },
        { type: _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClient"] },
        { type: ngx_bootstrap_modal__WEBPACK_IMPORTED_MODULE_4__["BsModalService"] },
        { type: _core_services_task_attachment_service__WEBPACK_IMPORTED_MODULE_8__["TaskAttachmentService"] }
    ]; };
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])(),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", Object)
    ], TaskAttachmentsComponent.prototype, "task", void 0);
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])(),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", Object)
    ], TaskAttachmentsComponent.prototype, "loginUser", void 0);
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])(),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", Boolean)
    ], TaskAttachmentsComponent.prototype, "permission", void 0);
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])(),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", Object)
    ], TaskAttachmentsComponent.prototype, "apiUrl", void 0);
    TaskAttachmentsComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-task-attachments',
            template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./task-attachments.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/modules/pm/tasks/components/task-attachments/task-attachments.component.html")).default,
            styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./task-attachments.component.scss */ "./src/app/modules/pm/tasks/components/task-attachments/task-attachments.component.scss")).default]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_ngx_translate_core__WEBPACK_IMPORTED_MODULE_6__["TranslateService"],
            ngx_toastr__WEBPACK_IMPORTED_MODULE_5__["ToastrService"],
            _angular_router__WEBPACK_IMPORTED_MODULE_3__["ActivatedRoute"],
            _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClient"],
            ngx_bootstrap_modal__WEBPACK_IMPORTED_MODULE_4__["BsModalService"],
            _core_services_task_attachment_service__WEBPACK_IMPORTED_MODULE_8__["TaskAttachmentService"]])
    ], TaskAttachmentsComponent);
    return TaskAttachmentsComponent;
}());



/***/ }),

/***/ "./src/app/modules/pm/tasks/components/task-comments/task-comments.component.scss":
/*!****************************************************************************************!*\
  !*** ./src/app/modules/pm/tasks/components/task-comments/task-comments.component.scss ***!
  \****************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL21vZHVsZXMvcG0vdGFza3MvY29tcG9uZW50cy90YXNrLWNvbW1lbnRzL3Rhc2stY29tbWVudHMuY29tcG9uZW50LnNjc3MifQ== */");

/***/ }),

/***/ "./src/app/modules/pm/tasks/components/task-comments/task-comments.component.ts":
/*!**************************************************************************************!*\
  !*** ./src/app/modules/pm/tasks/components/task-comments/task-comments.component.ts ***!
  \**************************************************************************************/
/*! exports provided: TaskCommentsComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TaskCommentsComponent", function() { return TaskCommentsComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var ngx_toastr__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ngx-toastr */ "./node_modules/ngx-toastr/fesm5/ngx-toastr.js");
/* harmony import */ var _ngx_translate_core__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @ngx-translate/core */ "./node_modules/@ngx-translate/core/fesm5/ngx-translate-core.js");
/* harmony import */ var sweetalert2__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! sweetalert2 */ "./node_modules/sweetalert2/dist/sweetalert2.all.js");
/* harmony import */ var sweetalert2__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(sweetalert2__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var _core_services_task_service__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../../../../../core/services/task.service */ "./src/app/core/services/task.service.ts");
/* harmony import */ var _core_services_task_comments_service__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../../../../../core/services/task-comments.service */ "./src/app/core/services/task-comments.service.ts");
/* harmony import */ var dropzone__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! dropzone */ "./node_modules/dropzone/dist/dropzone.js");
/* harmony import */ var dropzone__WEBPACK_IMPORTED_MODULE_9___default = /*#__PURE__*/__webpack_require__.n(dropzone__WEBPACK_IMPORTED_MODULE_9__);










var TaskCommentsComponent = /** @class */ (function () {
    function TaskCommentsComponent(translate, router, route, formBuilder, toastr, taskCommentsService, taskService) {
        this.translate = translate;
        this.router = router;
        this.route = route;
        this.formBuilder = formBuilder;
        this.toastr = toastr;
        this.taskCommentsService = taskCommentsService;
        this.taskService = taskService;
        this.isPageLoaded = false;
        this.isCommentFormSubmitted = false;
        this.isReplayFormSubmitted = false;
        this.parentChild = [];
        this.selectedFiles = [];
        this.taskId = this.route.snapshot.params.id;
        this.customClass = 'comment-collapse';
        this.oneAtATime = true;
    }
    Object.defineProperty(TaskCommentsComponent.prototype, "commentControl", {
        get: function () {
            return this.taskCommentsForm.controls;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(TaskCommentsComponent.prototype, "replyCommentControl", {
        get: function () {
            return this.taskCommentsReplyForm.controls;
        },
        enumerable: true,
        configurable: true
    });
    TaskCommentsComponent.prototype.ngOnInit = function () {
        var _this_1 = this;
        this.loadForms();
        this.getComment(this.taskId);
        this.loadReplyForm();
        setTimeout(function () {
            _this_1.loadDropzone();
        });
    };
    TaskCommentsComponent.prototype.loadForms = function () {
        var that = this;
        this.taskCommentsForm = this.formBuilder.group({
            task_id: [this.taskId],
            comment: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required],
            files: [null]
        });
    };
    TaskCommentsComponent.prototype.loadReplyForm = function () {
        this.taskCommentsReplyForm = this.formBuilder.group({
            task_id: [this.taskId],
            replay_comment: [''],
            parent_id: [null],
        });
    };
    TaskCommentsComponent.prototype.loadDropzone = function () {
        var that = this;
        this.dropzoneObj = new dropzone__WEBPACK_IMPORTED_MODULE_9__(this.commentdropzone.nativeElement, {
            url: 'https://httpbin.org/post',
            maxFiles: 5,
            clickable: true,
            createImageThumbnails: true,
            init: function () {
                this.on('addedfile', function (file) {
                    var removeButton = dropzone__WEBPACK_IMPORTED_MODULE_9__["createElement"]('<button class=\'btn btn-sm btn-block\'>' + that.translate.instant('common.remove_file') + '</button>');
                    var _this = this;
                    removeButton.addEventListener('click', function (e) {
                        e.preventDefault();
                        e.stopPropagation();
                        _this.removeFile(file);
                    });
                    file.previewElement.appendChild(removeButton);
                    if (file) {
                        var reader_1 = new FileReader();
                        that.fileDetails = file;
                        reader_1.onload = function (e) {
                            var thisFile = {
                                uuid: that.fileDetails.upload.uuid,
                                name: file.name,
                                extension: file.name.split('.').pop(),
                                size: file.size,
                                file: reader_1.result
                            };
                            that.selectedFiles.push(thisFile);
                        };
                        reader_1.readAsDataURL(file);
                    }
                });
                this.on('removedfile', function (file) {
                    that.fileDetails = file;
                    that.selectedFiles.forEach(function (value, index) {
                        if (value.uuid == that.fileDetails.upload.uuid) {
                            that.selectedFiles.splice(index, 1);
                        }
                    });
                });
                this.on('error', function (file, message) {
                    if (file) {
                        that.toastr.error(message);
                    }
                });
            }
        });
    };
    TaskCommentsComponent.prototype.onSubmit = function () {
        var _this_1 = this;
        this.isCommentFormSubmitted = true;
        if (this.taskCommentsForm.invalid) {
            return;
        }
        this.taskCommentsForm.patchValue({ files: this.selectedFiles });
        this.taskCommentsService.create(this.taskCommentsForm.value).subscribe(function (data) {
            _this_1.toastr.success(_this_1.translate.instant('comments.messages.create'), _this_1.translate.instant('comments.title'));
            _this_1.dropzoneObj.removeAllFiles();
            _this_1.getComment(_this_1.taskId);
            _this_1.commentFormReset();
            _this_1.loadForms();
        });
    };
    TaskCommentsComponent.prototype.replyFormReset = function () {
        this.taskCommentsReplyForm.patchValue({ replay_comment: '' });
        this.taskCommentsReplyForm.patchValue({ files: '' });
        this.taskCommentsReplyForm.patchValue({ attachments: '' });
    };
    TaskCommentsComponent.prototype.commentFormReset = function () {
        this.isCommentFormSubmitted = false;
        this.commentControl.comment.reset();
        this.taskCommentsForm.patchValue({ attachments: null });
    };
    TaskCommentsComponent.prototype.showReplayCommentBox = function (id) {
        $('#comment_replay_' + id).removeClass('d-none');
    };
    TaskCommentsComponent.prototype.getComment = function (taskID) {
        var _this_1 = this;
        this.taskService.getById(taskID).subscribe(function (data) {
            _this_1.taskData = data;
            _this_1.taskData.comments = _this_1.getNestedChildren(_this_1.taskData.comments, 0);
            _this_1.comments = _this_1.taskData.comments;
        });
    };
    TaskCommentsComponent.prototype.getNestedChildren = function (comment, parent) {
        var parentChild = [];
        for (var i in comment) {
            if (comment[i].attachments && ($.type(comment[i].attachments) === 'string')) {
                var jsonParse = JSON.parse(comment[i].attachments);
                comment[i].attachments = jsonParse;
            }
            if (comment[i].parent_id == parent) {
                var child = this.getNestedChildren(comment, comment[i].id);
                if (child.length) {
                    comment[i].child = child;
                }
                parentChild.push(comment[i]);
            }
        }
        return parentChild;
    };
    TaskCommentsComponent.prototype.postReplayComment = function (comment) {
        var _this_1 = this;
        if (this.taskCommentsReplyForm.value.replay_comment) {
            this.isReplayFormSubmitted = true;
            comment.parent_id = comment.id;
            comment.files = '';
            comment.comment = this.taskCommentsReplyForm.value.replay_comment;
            this.taskCommentsReplyForm.patchValue({ attachments: '' });
            var replyCommentValues = {
                comment: this.taskCommentsReplyForm.value.replay_comment,
                parent_id: comment.parent_id,
                task_id: comment.task_id,
                user: comment.user,
                user_id: comment.user_id,
                files: '',
                attachments: '',
                replay_comment: this.taskCommentsReplyForm.value.replay_comment
            };
            if (this.taskCommentsReplyForm.invalid) {
                return;
            }
            this.taskCommentsService.create(replyCommentValues)
                .subscribe(function (resp) {
                _this_1.toastr.success(_this_1.translate.instant('comments.messages.create'), _this_1.translate.instant('comments.title'));
                _this_1.getComment(_this_1.taskId);
                _this_1.replyFormReset();
                _this_1.loadForms();
            });
        }
        else {
            this.toastr.error(this.translate.instant('comments.create.error_messages.message4'), this.translate.instant('comments.title'));
            return false;
        }
    };
    TaskCommentsComponent.prototype.commentDelete = function (commentId) {
        var _this_1 = this;
        sweetalert2__WEBPACK_IMPORTED_MODULE_6___default.a.fire({
            title: this.translate.instant('common.swal.title'),
            text: this.translate.instant('common.swal.text'),
            type: 'warning',
            showCancelButton: true,
            confirmButtonText: this.translate.instant('common.swal.confirmButtonText'),
            cancelButtonText: this.translate.instant('common.swal.cancelButtonText')
        }).then(function (result) {
            if (result.value) {
                _this_1.taskCommentsService.delete(commentId)
                    .subscribe(function (data) {
                    _this_1.toastr.success(_this_1.translate.instant('comments.messages.delete'), _this_1.translate.instant('tasks.title'));
                    _this_1.getComment(_this_1.taskId);
                });
            }
        });
    };
    TaskCommentsComponent.prototype.saveComments = function (comment, index, value) {
        var _this_1 = this;
        comment[index] = value;
        this.taskCommentsService.update(comment).subscribe(function (data) {
            _this_1.toastr.success(_this_1.translate.instant('comments.messages.update'), _this_1.translate.instant('tasks.title'));
            _this_1.getComment(_this_1.taskId);
        });
    };
    TaskCommentsComponent.ctorParameters = function () { return [
        { type: _ngx_translate_core__WEBPACK_IMPORTED_MODULE_5__["TranslateService"] },
        { type: _angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"] },
        { type: _angular_router__WEBPACK_IMPORTED_MODULE_3__["ActivatedRoute"] },
        { type: _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormBuilder"] },
        { type: ngx_toastr__WEBPACK_IMPORTED_MODULE_4__["ToastrService"] },
        { type: _core_services_task_comments_service__WEBPACK_IMPORTED_MODULE_8__["TaskCommentsService"] },
        { type: _core_services_task_service__WEBPACK_IMPORTED_MODULE_7__["TaskService"] }
    ]; };
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])(),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", Boolean)
    ], TaskCommentsComponent.prototype, "permission", void 0);
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])(),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", Object)
    ], TaskCommentsComponent.prototype, "apiUrl", void 0);
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])(),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", Object)
    ], TaskCommentsComponent.prototype, "loginUser", void 0);
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewChild"])('commentdropzone', { static: false }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", _angular_core__WEBPACK_IMPORTED_MODULE_1__["ElementRef"])
    ], TaskCommentsComponent.prototype, "commentdropzone", void 0);
    TaskCommentsComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-task-comments',
            template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./task-comments.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/modules/pm/tasks/components/task-comments/task-comments.component.html")).default,
            styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./task-comments.component.scss */ "./src/app/modules/pm/tasks/components/task-comments/task-comments.component.scss")).default]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_ngx_translate_core__WEBPACK_IMPORTED_MODULE_5__["TranslateService"],
            _angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"],
            _angular_router__WEBPACK_IMPORTED_MODULE_3__["ActivatedRoute"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormBuilder"],
            ngx_toastr__WEBPACK_IMPORTED_MODULE_4__["ToastrService"],
            _core_services_task_comments_service__WEBPACK_IMPORTED_MODULE_8__["TaskCommentsService"],
            _core_services_task_service__WEBPACK_IMPORTED_MODULE_7__["TaskService"]])
    ], TaskCommentsComponent);
    return TaskCommentsComponent;
}());



/***/ }),

/***/ "./src/app/modules/pm/tasks/components/task-details/task-details.component.scss":
/*!**************************************************************************************!*\
  !*** ./src/app/modules/pm/tasks/components/task-details/task-details.component.scss ***!
  \**************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL21vZHVsZXMvcG0vdGFza3MvY29tcG9uZW50cy90YXNrLWRldGFpbHMvdGFzay1kZXRhaWxzLmNvbXBvbmVudC5zY3NzIn0= */");

/***/ }),

/***/ "./src/app/modules/pm/tasks/components/task-details/task-details.component.ts":
/*!************************************************************************************!*\
  !*** ./src/app/modules/pm/tasks/components/task-details/task-details.component.ts ***!
  \************************************************************************************/
/*! exports provided: TaskDetailsComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TaskDetailsComponent", function() { return TaskDetailsComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var ngx_toastr__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ngx-toastr */ "./node_modules/ngx-toastr/fesm5/ngx-toastr.js");
/* harmony import */ var ngx_permissions__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ngx-permissions */ "./node_modules/ngx-permissions/ngx-permissions.umd.js");
/* harmony import */ var ngx_permissions__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(ngx_permissions__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _ngx_translate_core__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ngx-translate/core */ "./node_modules/@ngx-translate/core/fesm5/ngx-translate-core.js");
/* harmony import */ var sweetalert2__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! sweetalert2 */ "./node_modules/sweetalert2/dist/sweetalert2.all.js");
/* harmony import */ var sweetalert2__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(sweetalert2__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _core_services_task_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../../../../core/services/task.service */ "./src/app/core/services/task.service.ts");
/* harmony import */ var _core_helpers_pm_helper__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./../../../../../core/helpers/pm-helper */ "./src/app/core/helpers/pm-helper.ts");








var TaskDetailsComponent = /** @class */ (function () {
    function TaskDetailsComponent(ngxRolesService, translate, taskService, toastr) {
        this.ngxRolesService = ngxRolesService;
        this.translate = translate;
        this.taskService = taskService;
        this.toastr = toastr;
        this.taskstatusKeyValue = _core_helpers_pm_helper__WEBPACK_IMPORTED_MODULE_7__["task_status_key_value"];
        this.taskPriorityKeyValue = _core_helpers_pm_helper__WEBPACK_IMPORTED_MODULE_7__["task_priority_key_value"];
        this.knOptions = {
            readOnly: true,
            size: 150,
            unit: '%',
            textColor: '#000000',
            fontSize: '32',
            valueformat: 'percent',
            value: 0,
            max: 100,
            trackWidth: 19,
            barWidth: 20,
            trackColor: '#D8D8D8',
            barColor: '#FF6F17'
        };
    }
    TaskDetailsComponent.prototype.ngOnInit = function () {
    };
    TaskDetailsComponent.prototype.getTaskById = function (taskId) {
        var _this = this;
        this.taskService.getById(taskId)
            .subscribe(function (data) {
            _this.task = data;
        });
    };
    TaskDetailsComponent.prototype.getTaskStatus = function (status) {
        return 'tasks.status' + status;
    };
    TaskDetailsComponent.prototype.getTranslateStatus = function (statusKey) {
        return this.taskstatusKeyValue[statusKey];
    };
    TaskDetailsComponent.prototype.getTranslatePriorities = function (priorityKey) {
        return this.taskPriorityKeyValue[priorityKey];
    };
    TaskDetailsComponent.prototype.changeTaskPriority = function (taskId, priority) {
        var _this = this;
        this.taskService.changePriority({ id: taskId, priority: priority.id }).subscribe(function (data) {
            _this.toastr.success(_this.translate.instant('tasks.messages.priority'), _this.translate.instant('tasks.title'));
            _this.getTaskById(_this.task.id);
        });
    };
    TaskDetailsComponent.prototype.changeTaskStatus = function (taskID, status) {
        var _this = this;
        var changeTask = {
            id: taskID,
            status: status.id
        };
        this.taskService.changeStatus(changeTask).subscribe(function (data) {
            _this.toastr.success(_this.translate.instant('tasks.messages.status'), _this.translate.instant('tasks.title'));
            _this.getTaskById(_this.task.id);
        });
    };
    TaskDetailsComponent.prototype.getParseArray = function (string) {
        return JSON.parse(string);
    };
    TaskDetailsComponent.prototype.saveTaskDetail = function (name, value) {
        var _this = this;
        this.task[name] = value;
        this.taskService.update(this.task)
            .subscribe(function (data) {
            _this.toastr.success(_this.translate.instant('tasks.messages.update'), _this.translate.instant('tasks.title'));
            _this.getTaskById(_this.task.id);
        });
    };
    TaskDetailsComponent.prototype.saveSubTaskDetail = function (subTask, name, value) {
        var _this = this;
        subTask[name] = value;
        this.taskService.update(subTask).subscribe(function (data) {
            _this.toastr.success(_this.translate.instant('tasks.messages.update'), _this.translate.instant('tasks.title'));
            _this.getTaskById(_this.task.id);
        });
    };
    TaskDetailsComponent.prototype.getCheckPermission = function (sub_task) {
        var role = this.ngxRolesService.getRole('admin');
        if ((role && role.name == 'admin') || this.loginUser.is_super_admin) {
            return true;
        }
        else if (sub_task.assign_to == this.loginUser.id || sub_task.created_by == this.loginUser.id) {
            return true;
        }
        else {
            return false;
        }
    };
    TaskDetailsComponent.prototype.deleteSubTask = function (id) {
        var _this = this;
        sweetalert2__WEBPACK_IMPORTED_MODULE_5___default.a.fire({
            title: this.translate.instant('common.swal.title'),
            text: this.translate.instant('common.swal.text'),
            type: 'warning',
            showCancelButton: true,
            confirmButtonText: this.translate.instant('common.swal.confirmButtonText'),
            cancelButtonText: this.translate.instant('common.swal.cancelButtonText')
        }).then(function (result) {
            if (result.value) {
                _this.taskService.delete(id).subscribe(function (data) {
                    _this.toastr.success(_this.translate.instant('tasks.messages.delete'), _this.translate.instant('tasks.title'));
                    _this.getTaskById(_this.task.id);
                });
            }
        });
    };
    TaskDetailsComponent.ctorParameters = function () { return [
        { type: ngx_permissions__WEBPACK_IMPORTED_MODULE_3__["NgxRolesService"] },
        { type: _ngx_translate_core__WEBPACK_IMPORTED_MODULE_4__["TranslateService"] },
        { type: _core_services_task_service__WEBPACK_IMPORTED_MODULE_6__["TaskService"] },
        { type: ngx_toastr__WEBPACK_IMPORTED_MODULE_2__["ToastrService"] }
    ]; };
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])(),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", Object)
    ], TaskDetailsComponent.prototype, "task", void 0);
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])(),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", Object)
    ], TaskDetailsComponent.prototype, "loginUser", void 0);
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])(),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", Boolean)
    ], TaskDetailsComponent.prototype, "permission", void 0);
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])(),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", Object)
    ], TaskDetailsComponent.prototype, "apiUrl", void 0);
    TaskDetailsComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-task-details',
            template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./task-details.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/modules/pm/tasks/components/task-details/task-details.component.html")).default,
            styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./task-details.component.scss */ "./src/app/modules/pm/tasks/components/task-details/task-details.component.scss")).default]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [ngx_permissions__WEBPACK_IMPORTED_MODULE_3__["NgxRolesService"],
            _ngx_translate_core__WEBPACK_IMPORTED_MODULE_4__["TranslateService"],
            _core_services_task_service__WEBPACK_IMPORTED_MODULE_6__["TaskService"],
            ngx_toastr__WEBPACK_IMPORTED_MODULE_2__["ToastrService"]])
    ], TaskDetailsComponent);
    return TaskDetailsComponent;
}());



/***/ }),

/***/ "./src/app/modules/pm/tasks/components/task-import-modal/task-import-modal.component.scss":
/*!************************************************************************************************!*\
  !*** ./src/app/modules/pm/tasks/components/task-import-modal/task-import-modal.component.scss ***!
  \************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL21vZHVsZXMvcG0vdGFza3MvY29tcG9uZW50cy90YXNrLWltcG9ydC1tb2RhbC90YXNrLWltcG9ydC1tb2RhbC5jb21wb25lbnQuc2NzcyJ9 */");

/***/ }),

/***/ "./src/app/modules/pm/tasks/components/task-import-modal/task-import-modal.component.ts":
/*!**********************************************************************************************!*\
  !*** ./src/app/modules/pm/tasks/components/task-import-modal/task-import-modal.component.ts ***!
  \**********************************************************************************************/
/*! exports provided: TaskImportModalComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TaskImportModalComponent", function() { return TaskImportModalComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var ngx_bootstrap_modal__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ngx-bootstrap/modal */ "./node_modules/ngx-bootstrap/modal/fesm5/ngx-bootstrap-modal.js");
/* harmony import */ var ngx_toastr__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ngx-toastr */ "./node_modules/ngx-toastr/fesm5/ngx-toastr.js");
/* harmony import */ var _ngx_translate_core__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ngx-translate/core */ "./node_modules/@ngx-translate/core/fesm5/ngx-translate-core.js");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! rxjs */ "./node_modules/rxjs/_esm5/index.js");
/* harmony import */ var _core_services_import_task_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../../../../core/services/import-task.service */ "./src/app/core/services/import-task.service.ts");







var TaskImportModalComponent = /** @class */ (function () {
    function TaskImportModalComponent(translate, bsImportTaskModalRef, toastr, importTaskService) {
        this.translate = translate;
        this.bsImportTaskModalRef = bsImportTaskModalRef;
        this.toastr = toastr;
        this.importTaskService = importTaskService;
        this.event = new _angular_core__WEBPACK_IMPORTED_MODULE_1__["EventEmitter"]();
        this.fileAttached = false;
        this.isPageLoaded = false;
        this.isFormSubmitted = false;
        this.csvFileSelected = false;
    }
    TaskImportModalComponent.prototype.ngOnInit = function () {
        this.onClose = new rxjs__WEBPACK_IMPORTED_MODULE_5__["Subject"]();
    };
    TaskImportModalComponent.prototype.fileUpload = function (files) {
        var _this = this;
        if (files && files.length > 0) {
            var file = files.item(0);
            var reader_1 = new FileReader();
            reader_1.readAsText(file);
            reader_1.onload = function (event) {
                var csvdata = reader_1.result;
                _this.csvData = csvdata;
                _this.fileAttached = true;
                if (_this.csvData != undefined) {
                    _this.csvFileSelected = true;
                }
                else {
                    _this.csvFileSelected = false;
                }
                var filename = files[0].name;
                var ext = filename.substr(filename.lastIndexOf('.') + 1);
                if (ext != 'csv') {
                    _this.toastr.error(_this.translate.instant('teams.create.error_messages.message15'), _this.translate.instant('teams.title'));
                    _this.csvFileSelected = false;
                    return;
                }
                var newLinebrk = csvdata.split('\n');
                var columnNames = newLinebrk[0].split(',');
                _this.csvFileColumnName = columnNames;
            };
        }
    };
    TaskImportModalComponent.prototype.onSubmit = function () {
        var _this = this;
        this.isFormSubmitted = true;
        this.importTaskService.create({ csv_file: this.csvData })
            .subscribe(function (data) {
            _this.event.emit({ data: true });
            _this.onCancel();
        });
    };
    TaskImportModalComponent.prototype.onCancel = function () {
        this.onClose.next(false);
        this.bsImportTaskModalRef.hide();
    };
    TaskImportModalComponent.ctorParameters = function () { return [
        { type: _ngx_translate_core__WEBPACK_IMPORTED_MODULE_4__["TranslateService"] },
        { type: ngx_bootstrap_modal__WEBPACK_IMPORTED_MODULE_2__["BsModalRef"] },
        { type: ngx_toastr__WEBPACK_IMPORTED_MODULE_3__["ToastrService"] },
        { type: _core_services_import_task_service__WEBPACK_IMPORTED_MODULE_6__["ImportTaskService"] }
    ]; };
    TaskImportModalComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-task-import-modal',
            template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./task-import-modal.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/modules/pm/tasks/components/task-import-modal/task-import-modal.component.html")).default,
            styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./task-import-modal.component.scss */ "./src/app/modules/pm/tasks/components/task-import-modal/task-import-modal.component.scss")).default]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_ngx_translate_core__WEBPACK_IMPORTED_MODULE_4__["TranslateService"],
            ngx_bootstrap_modal__WEBPACK_IMPORTED_MODULE_2__["BsModalRef"],
            ngx_toastr__WEBPACK_IMPORTED_MODULE_3__["ToastrService"],
            _core_services_import_task_service__WEBPACK_IMPORTED_MODULE_6__["ImportTaskService"]])
    ], TaskImportModalComponent);
    return TaskImportModalComponent;
}());



/***/ }),

/***/ "./src/app/modules/pm/tasks/components/task-notes/task-notes.component.scss":
/*!**********************************************************************************!*\
  !*** ./src/app/modules/pm/tasks/components/task-notes/task-notes.component.scss ***!
  \**********************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL21vZHVsZXMvcG0vdGFza3MvY29tcG9uZW50cy90YXNrLW5vdGVzL3Rhc2stbm90ZXMuY29tcG9uZW50LnNjc3MifQ== */");

/***/ }),

/***/ "./src/app/modules/pm/tasks/components/task-notes/task-notes.component.ts":
/*!********************************************************************************!*\
  !*** ./src/app/modules/pm/tasks/components/task-notes/task-notes.component.ts ***!
  \********************************************************************************/
/*! exports provided: TaskNotesComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TaskNotesComponent", function() { return TaskNotesComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var ngx_toastr__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ngx-toastr */ "./node_modules/ngx-toastr/fesm5/ngx-toastr.js");
/* harmony import */ var _ngx_translate_core__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ngx-translate/core */ "./node_modules/@ngx-translate/core/fesm5/ngx-translate-core.js");
/* harmony import */ var _core_services_task_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../../../../core/services/task.service */ "./src/app/core/services/task.service.ts");






var TaskNotesComponent = /** @class */ (function () {
    function TaskNotesComponent(translate, formBuilder, toastr, taskService) {
        this.translate = translate;
        this.formBuilder = formBuilder;
        this.toastr = toastr;
        this.taskService = taskService;
        this.isFormSubmitted = false;
    }
    TaskNotesComponent.prototype.ngOnInit = function () {
        this.editNoteForm = this.formBuilder.group({
            id: [this.task.id],
            notes: [this.task.notes]
        });
    };
    TaskNotesComponent.prototype.onSubmit = function () {
        var _this = this;
        this.isFormSubmitted = true;
        if (this.editNoteForm.invalid) {
            return;
        }
        this.taskService.updateNotes(this.editNoteForm.value)
            .subscribe(function (data) {
            _this.toastr.success(_this.translate.instant('notes.messages.update'), _this.translate.instant('tasks.title'));
        });
    };
    TaskNotesComponent.ctorParameters = function () { return [
        { type: _ngx_translate_core__WEBPACK_IMPORTED_MODULE_4__["TranslateService"] },
        { type: _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormBuilder"] },
        { type: ngx_toastr__WEBPACK_IMPORTED_MODULE_3__["ToastrService"] },
        { type: _core_services_task_service__WEBPACK_IMPORTED_MODULE_5__["TaskService"] }
    ]; };
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])(),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", Object)
    ], TaskNotesComponent.prototype, "task", void 0);
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])(),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", Boolean)
    ], TaskNotesComponent.prototype, "permission", void 0);
    TaskNotesComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-task-notes',
            template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./task-notes.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/modules/pm/tasks/components/task-notes/task-notes.component.html")).default,
            styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./task-notes.component.scss */ "./src/app/modules/pm/tasks/components/task-notes/task-notes.component.scss")).default]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_ngx_translate_core__WEBPACK_IMPORTED_MODULE_4__["TranslateService"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormBuilder"],
            ngx_toastr__WEBPACK_IMPORTED_MODULE_3__["ToastrService"],
            _core_services_task_service__WEBPACK_IMPORTED_MODULE_5__["TaskService"]])
    ], TaskNotesComponent);
    return TaskNotesComponent;
}());



/***/ }),

/***/ "./src/app/modules/pm/tasks/pages/task-copy/task-copy.component.scss":
/*!***************************************************************************!*\
  !*** ./src/app/modules/pm/tasks/pages/task-copy/task-copy.component.scss ***!
  \***************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL21vZHVsZXMvcG0vdGFza3MvcGFnZXMvdGFzay1jb3B5L3Rhc2stY29weS5jb21wb25lbnQuc2NzcyJ9 */");

/***/ }),

/***/ "./src/app/modules/pm/tasks/pages/task-copy/task-copy.component.ts":
/*!*************************************************************************!*\
  !*** ./src/app/modules/pm/tasks/pages/task-copy/task-copy.component.ts ***!
  \*************************************************************************/
/*! exports provided: TaskCopyComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TaskCopyComponent", function() { return TaskCopyComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var ngx_toastr__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ngx-toastr */ "./node_modules/ngx-toastr/fesm5/ngx-toastr.js");
/* harmony import */ var _ngx_translate_core__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @ngx-translate/core */ "./node_modules/@ngx-translate/core/fesm5/ngx-translate-core.js");
/* harmony import */ var _core_services_authentication_service__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../../../../../core/services/authentication.service */ "./src/app/core/services/authentication.service.ts");
/* harmony import */ var _core_services_project_service__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../../../../../core/services/project.service */ "./src/app/core/services/project.service.ts");
/* harmony import */ var _core_services_task_service__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../../../../../core/services/task.service */ "./src/app/core/services/task.service.ts");
/* harmony import */ var _core_services_custom_fields_service__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ../../../../../core/services/custom-fields.service */ "./src/app/core/services/custom-fields.service.ts");











var TaskCopyComponent = /** @class */ (function () {
    function TaskCopyComponent(translate, datepipe, route, router, formBuilder, toastr, projectService, taskService, customFieldsService, authenticationService) {
        var _this = this;
        this.translate = translate;
        this.datepipe = datepipe;
        this.route = route;
        this.router = router;
        this.formBuilder = formBuilder;
        this.toastr = toastr;
        this.projectService = projectService;
        this.taskService = taskService;
        this.customFieldsService = customFieldsService;
        this.authenticationService = authenticationService;
        this.customFields = { length: 0 };
        this.isFormSubmitted = false;
        this.isPageLoaded = false;
        this.isHoursValid = false;
        this.users = [];
        this.userIds = [];
        this.projectVersions = [];
        this.progressOptions = {
            floor: 0,
            ceil: 100
        };
        this.datepickerConfig = {
            dateInputFormat: 'YYYY-MM-DD',
            containerClass: 'theme-red'
        };
        this.route.paramMap.subscribe(function (params) {
            _this.getTaskById(params.get('id'));
        });
        this.authenticationService.loginUser.subscribe(function (x) { return _this.loginUser = x; });
    }
    Object.defineProperty(TaskCopyComponent.prototype, "taskControl", {
        get: function () {
            return this.copyTaskForm.controls;
        },
        enumerable: true,
        configurable: true
    });
    TaskCopyComponent.prototype.ngOnInit = function () {
        this.getProjects();
    };
    TaskCopyComponent.prototype.getTaskById = function (taskId) {
        var _this = this;
        this.taskService.getById(taskId).subscribe(function (data) {
            _this.task = data;
            _this.setDateFormat();
            _this.loadForms();
        });
    };
    TaskCopyComponent.prototype.setDateFormat = function () {
        if (this.task.planned_start_date) {
            this.task.planned_start_date = new Date(this.task.planned_start_date);
        }
        if (this.task.planned_end_date) {
            this.task.planned_end_date = new Date(this.task.planned_end_date);
        }
        if (this.task.task_start_date) {
            this.task.task_start_date = new Date(this.task.task_start_date);
        }
        if (this.task.task_end_date) {
            this.task.task_end_date = new Date(this.task.task_end_date);
        }
    };
    TaskCopyComponent.prototype.loadForms = function () {
        // Project users
        this.users = this.task.project1.users;
        for (var i = 0; i < this.users.length; i++) {
            this.userIds.push(this.users[i].id);
        }
        // Project Version
        this.projectVersions = this.task.project1.project_version.split(',');
        this.copyTaskForm = this.formBuilder.group({
            name: [this.task.name, _angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].required],
            generated_id: ['T0...', [_angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].required]],
            project_id: [this.task.project_id, _angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].required],
            project_version: [this.task.project_version],
            planned_start_date: [this.task.planned_start_date],
            planned_end_date: [this.task.planned_end_date],
            task_start_date: [this.task.task_start_date],
            task_end_date: [this.task.task_end_date],
            assign_to: [this.task.assign_to],
            status: [this.task.status, _angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].required],
            priority: [this.task.priority, _angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].required],
            estimated_hours: [this.task.estimated_hours, _angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].pattern(/^[0-9]+\:[0-5][0-9]$/)],
            progress: [parseInt(this.task.progress)],
            description: [this.task.description],
            users: [this.userIds],
            custom_field: this.formBuilder.array([]),
            custom_fields: [null],
        });
        this.getGeneratedId();
        this.getCustomFieldByForm();
        this.isPageLoaded = true;
    };
    TaskCopyComponent.prototype.getGeneratedId = function () {
        var _this = this;
        this.taskService.getGeneratedId().subscribe(function (data) {
            _this.copyTaskForm.patchValue({ generated_id: data });
        });
    };
    TaskCopyComponent.prototype.getCustomFieldByForm = function () {
        var _this = this;
        this.customFieldsService.getCustomFieldByForm(2).subscribe(function (data) {
            _this.customFields = data;
            if (_this.customFields.length > 0) {
                _this.addDynamicField(_this.customFields);
            }
        });
    };
    TaskCopyComponent.prototype.addDynamicField = function (fieldList) {
        var _this = this;
        fieldList.forEach(function (element) {
            var _a, _b;
            var control = _this.copyTaskForm.controls.custom_field;
            var validators = null;
            if (element.is_required == 1) {
                validators = [_angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].required];
            }
            if (element.field_type == 'date' && _this.task[element.field_column] != null) {
                control.push(_this.formBuilder.group((_a = {},
                    _a[element.field_column] = [new Date(_this.task[element.field_column]), validators],
                    _a)));
            }
            else {
                control.push(_this.formBuilder.group((_b = {},
                    _b[element.field_column] = [_this.task[element.field_column], validators],
                    _b)));
            }
        });
    };
    TaskCopyComponent.prototype.getTaskStatus = function (status) {
        return 'tasks.status' + status;
    };
    TaskCopyComponent.prototype.getProjects = function () {
        var _this = this;
        this.projectService.getProject().subscribe(function (data) {
            _this.projects = data;
        });
    };
    TaskCopyComponent.prototype.projectChange = function (event) {
        this.userIds = [];
        this.copyTaskForm.patchValue({ project_version: null });
        this.copyTaskForm.patchValue({ assign_to: null });
        this.copyTaskForm.patchValue({ planned_start_date: null });
        this.copyTaskForm.patchValue({ planned_end_date: null });
        this.copyTaskForm.patchValue({ task_start_date: null });
        this.copyTaskForm.patchValue({ task_end_date: null });
        if (this.copyTaskForm.value.project_id == undefined || this.copyTaskForm.value.project_id == null || this.copyTaskForm.value.project_id == '') {
            this.projectVersions = null;
            this.users = null;
            return;
        }
        this.projectVersions = event.project_version.split(',');
        // Project users
        this.users = event.users;
        for (var i = 0; i < this.users.length; i++) {
            this.userIds.push(this.users[i].id);
        }
        this.copyTaskForm.patchValue({ users: this.userIds });
    };
    TaskCopyComponent.prototype.clearVersionValues = function () {
        this.copyTaskForm.patchValue({ project_version: null });
    };
    TaskCopyComponent.prototype.planstartDateChange = function (event) {
        this.copyTaskForm.patchValue({ planned_end_date: this.copyTaskForm.value.planned_start_date });
    };
    TaskCopyComponent.prototype.taskstartDateChange = function (event) {
        this.copyTaskForm.patchValue({ task_end_date: this.copyTaskForm.value.task_start_date });
    };
    TaskCopyComponent.prototype.onSubmit = function () {
        var _this = this;
        this.isFormSubmitted = true;
        this.isHoursValid = false;
        if (this.copyTaskForm.invalid) {
            return;
        }
        // Hours validation
        if (this.copyTaskForm.value.estimated_hours && this.task.project1.estimated_hours) {
            var projectHours = this.task.project1.estimated_hours.replace(/:/g, '.'), taskHours = this.copyTaskForm.value.estimated_hours.replace(/:/g, '.');
            if (parseInt(projectHours) < parseInt(taskHours)) {
                this.isHoursValid = true;
                return;
            }
        }
        if (this.customFields.length > 0) {
            this.setCustomFields();
        }
        this.copyTaskForm.value.planned_start_date = this.datepipe.transform(this.copyTaskForm.value.planned_start_date, 'yyyy-MM-dd');
        this.copyTaskForm.value.planned_end_date = this.datepipe.transform(this.copyTaskForm.value.planned_end_date, 'yyyy-MM-dd');
        this.copyTaskForm.value.task_start_date = this.datepipe.transform(this.copyTaskForm.value.task_start_date, 'yyyy-MM-dd');
        this.copyTaskForm.value.task_end_date = this.datepipe.transform(this.copyTaskForm.value.task_end_date, 'yyyy-MM-dd');
        this.taskService.create(this.copyTaskForm.value).subscribe(function (data) {
            _this.toastr.success(_this.translate.instant('tasks.messages.copy'), _this.translate.instant('tasks.title'));
            _this.router.navigate(['tasks']);
        });
    };
    TaskCopyComponent.prototype.setCustomFields = function () {
        var arr = this.copyTaskForm.value.custom_field;
        var obj = {};
        var iRow = 0;
        var that = this;
        arr.forEach(function (item) {
            var key = Object.keys(item)[0];
            obj[key] = item[key];
            if (that.customFields[iRow++].field_type == 'date') {
                obj[key] = that.datepipe.transform(item[key], 'yyyy-MM-dd');
            }
        });
        this.copyTaskForm.patchValue({ custom_fields: obj });
    };
    TaskCopyComponent.ctorParameters = function () { return [
        { type: _ngx_translate_core__WEBPACK_IMPORTED_MODULE_6__["TranslateService"] },
        { type: _angular_common__WEBPACK_IMPORTED_MODULE_2__["DatePipe"] },
        { type: _angular_router__WEBPACK_IMPORTED_MODULE_4__["ActivatedRoute"] },
        { type: _angular_router__WEBPACK_IMPORTED_MODULE_4__["Router"] },
        { type: _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormBuilder"] },
        { type: ngx_toastr__WEBPACK_IMPORTED_MODULE_5__["ToastrService"] },
        { type: _core_services_project_service__WEBPACK_IMPORTED_MODULE_8__["ProjectService"] },
        { type: _core_services_task_service__WEBPACK_IMPORTED_MODULE_9__["TaskService"] },
        { type: _core_services_custom_fields_service__WEBPACK_IMPORTED_MODULE_10__["CustomFieldsService"] },
        { type: _core_services_authentication_service__WEBPACK_IMPORTED_MODULE_7__["AuthenticationService"] }
    ]; };
    TaskCopyComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-task-copy',
            template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./task-copy.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/modules/pm/tasks/pages/task-copy/task-copy.component.html")).default,
            styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./task-copy.component.scss */ "./src/app/modules/pm/tasks/pages/task-copy/task-copy.component.scss")).default]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_ngx_translate_core__WEBPACK_IMPORTED_MODULE_6__["TranslateService"],
            _angular_common__WEBPACK_IMPORTED_MODULE_2__["DatePipe"],
            _angular_router__WEBPACK_IMPORTED_MODULE_4__["ActivatedRoute"],
            _angular_router__WEBPACK_IMPORTED_MODULE_4__["Router"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormBuilder"],
            ngx_toastr__WEBPACK_IMPORTED_MODULE_5__["ToastrService"],
            _core_services_project_service__WEBPACK_IMPORTED_MODULE_8__["ProjectService"],
            _core_services_task_service__WEBPACK_IMPORTED_MODULE_9__["TaskService"],
            _core_services_custom_fields_service__WEBPACK_IMPORTED_MODULE_10__["CustomFieldsService"],
            _core_services_authentication_service__WEBPACK_IMPORTED_MODULE_7__["AuthenticationService"]])
    ], TaskCopyComponent);
    return TaskCopyComponent;
}());



/***/ }),

/***/ "./src/app/modules/pm/tasks/pages/task-create/task-create.component.scss":
/*!*******************************************************************************!*\
  !*** ./src/app/modules/pm/tasks/pages/task-create/task-create.component.scss ***!
  \*******************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("::ng-deep .odd {\n  display: none;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvbW9kdWxlcy9wbS90YXNrcy9wYWdlcy90YXNrLWNyZWF0ZS9DOlxcVXNlcnNcXHRodWFuXFxPbmVEcml2ZVxcRGVza3RvcFxcZ2xhdmFsLXRodWFuZGluaC9zcmNcXGFwcFxcbW9kdWxlc1xccG1cXHRhc2tzXFxwYWdlc1xcdGFzay1jcmVhdGVcXHRhc2stY3JlYXRlLmNvbXBvbmVudC5zY3NzIiwic3JjL2FwcC9tb2R1bGVzL3BtL3Rhc2tzL3BhZ2VzL3Rhc2stY3JlYXRlL3Rhc2stY3JlYXRlLmNvbXBvbmVudC5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0ksYUFBQTtBQ0NKIiwiZmlsZSI6InNyYy9hcHAvbW9kdWxlcy9wbS90YXNrcy9wYWdlcy90YXNrLWNyZWF0ZS90YXNrLWNyZWF0ZS5jb21wb25lbnQuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIjo6bmctZGVlcCAub2RkIHtcclxuICAgIGRpc3BsYXk6IG5vbmVcclxufSIsIjo6bmctZGVlcCAub2RkIHtcbiAgZGlzcGxheTogbm9uZTtcbn0iXX0= */");

/***/ }),

/***/ "./src/app/modules/pm/tasks/pages/task-create/task-create.component.ts":
/*!*****************************************************************************!*\
  !*** ./src/app/modules/pm/tasks/pages/task-create/task-create.component.ts ***!
  \*****************************************************************************/
/*! exports provided: TaskCreateComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TaskCreateComponent", function() { return TaskCreateComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var ngx_toastr__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ngx-toastr */ "./node_modules/ngx-toastr/fesm5/ngx-toastr.js");
/* harmony import */ var _ngx_translate_core__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @ngx-translate/core */ "./node_modules/@ngx-translate/core/fesm5/ngx-translate-core.js");
/* harmony import */ var _core_services_task_service__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../../../../../core/services/task.service */ "./src/app/core/services/task.service.ts");
/* harmony import */ var _core_services_custom_fields_service__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../../../../../core/services/custom-fields.service */ "./src/app/core/services/custom-fields.service.ts");
/* harmony import */ var _core_services_project_service__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../../../../../core/services/project.service */ "./src/app/core/services/project.service.ts");










var TaskCreateComponent = /** @class */ (function () {
    function TaskCreateComponent(translate, router, route, formBuilder, toastr, taskService, projectService, customFieldsService, datepipe) {
        this.translate = translate;
        this.router = router;
        this.route = route;
        this.formBuilder = formBuilder;
        this.toastr = toastr;
        this.taskService = taskService;
        this.projectService = projectService;
        this.customFieldsService = customFieldsService;
        this.datepipe = datepipe;
        this.customFields = { length: 0 };
        this.isFormSubmitted = false;
        this.isPageLoaded = false;
        this.isHoursValid = false;
        this.projectVersions = [];
        this.users = [];
        this.userIds = [];
        this.parent_task_id = this.route.snapshot.params.id;
        this.progressOptions = {
            floor: 0,
            ceil: 100
        };
        this.datepickerConfig = {
            dateInputFormat: 'YYYY-MM-DD',
            containerClass: 'theme-red'
        };
    }
    Object.defineProperty(TaskCreateComponent.prototype, "taskControl", {
        get: function () {
            return this.createTaskForm.controls;
        },
        enumerable: true,
        configurable: true
    });
    TaskCreateComponent.prototype.ngOnInit = function () {
        if (this.parent_task_id == '' || this.parent_task_id == null) {
            this.parent_task_id = 0;
        }
        this.getProjects();
    };
    TaskCreateComponent.prototype.loadForms = function (parentTaskId) {
        if (parentTaskId == 0) {
            this.createTaskForm = this.formBuilder.group({
                parent_task_id: [parentTaskId],
                name: ['', [_angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].required, _angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].maxLength(255)]],
                generated_id: ['T0001', _angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].required],
                project_id: [null, _angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].required],
                project_version: [null],
                planned_start_date: [null],
                planned_end_date: [null],
                task_start_date: [null],
                task_end_date: [null],
                assign_to: [null],
                status: [1, _angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].required],
                priority: [4, _angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].required],
                estimated_hours: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].pattern(/^[0-9]+\:[0-5][0-9]$/)],
                progress: [0],
                description: [''],
                users: [],
                custom_field: this.formBuilder.array([]),
                custom_fields: [null],
            });
            this.getGeneratedId();
            this.getCustomFieldByForm();
            this.isPageLoaded = true;
        }
        else {
            this.getParentTask(this.parent_task_id);
        }
    };
    TaskCreateComponent.prototype.loadSubtaskForm = function (parentTask) {
        this.parentTask = parentTask;
        this.project = this.parentTask.project1;
        // --
        // Project users
        this.users = this.project.users;
        for (var i = 0; i < this.users.length; i++) {
            this.userIds.push(this.users[i].id);
        }
        this.createTaskForm = this.formBuilder.group({
            parent_task_id: [parentTask.id],
            name: ['', [_angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].required, _angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].maxLength(255)]],
            generated_id: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].required],
            project_id: [this.project.id],
            project_version: [this.project.project_version],
            planned_start_date: [null],
            planned_end_date: [null],
            task_start_date: [null],
            task_end_date: [null],
            assign_to: [null],
            status: [parentTask.status, _angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].required],
            priority: [4, _angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].required],
            estimated_hours: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].pattern(/^[0-9]+\:[0-5][0-9]$/)],
            progress: [0],
            description: [''],
            users: [this.userIds],
            custom_field: this.formBuilder.array([]),
            custom_fields: [null],
        });
        this.getSubTaskGeneratedId(parentTask.id);
        this.getCustomFieldByForm();
        this.isPageLoaded = true;
    };
    TaskCreateComponent.prototype.getCustomFieldByForm = function () {
        var _this = this;
        this.customFieldsService.getCustomFieldByForm(2)
            .subscribe(function (data) {
            _this.customFields = data;
            if (_this.customFields.length > 0) {
                _this.addDynamicField(_this.customFields);
            }
        });
    };
    TaskCreateComponent.prototype.getTaskStatus = function () {
        if (this.parent_task_id == 0) {
            return 'tasks.status';
        }
        else {
            return 'tasks.parent_status' + this.parentTask.status;
        }
    };
    TaskCreateComponent.prototype.getProjects = function () {
        var _this = this;
        this.projectService.getProject()
            .subscribe(function (data) {
            _this.projects = data;
            _this.loadForms(_this.parent_task_id);
        });
    };
    TaskCreateComponent.prototype.getGeneratedId = function () {
        var _this = this;
        this.taskService.getGeneratedId().subscribe(function (data) {
            _this.createTaskForm.patchValue({ generated_id: data });
        });
    };
    TaskCreateComponent.prototype.getSubTaskGeneratedId = function (parentTaskId) {
        var _this = this;
        this.taskService.getsubTaskCountByParent(parentTaskId).subscribe(function (data) {
            _this.createTaskForm.patchValue({ generated_id: _this.parentTask.generated_id + '.' + data });
        });
    };
    TaskCreateComponent.prototype.getParentTask = function (parentTaskId) {
        var _this = this;
        this.taskService.getParentTask(parentTaskId)
            .subscribe(function (data) {
            _this.loadSubtaskForm(data);
        });
    };
    TaskCreateComponent.prototype.projectChange = function (event) {
        this.userIds = [];
        this.createTaskForm.patchValue({ project_version: null });
        this.createTaskForm.patchValue({ assign_to: null });
        this.createTaskForm.patchValue({ planned_start_date: null });
        this.createTaskForm.patchValue({ planned_end_date: null });
        this.createTaskForm.patchValue({ task_start_date: null });
        this.createTaskForm.patchValue({ task_end_date: null });
        if (this.createTaskForm.value.project_id == undefined || this.createTaskForm.value.project_id == null || this.createTaskForm.value.project_id == '') {
            this.projectVersions = null;
            this.users = null;
            return;
        }
        // --
        // Project version
        this.projectVersions = event.project_version.split(',');
        // --
        // Project users
        this.users = event.users;
        for (var i = 0; i < this.users.length; i++) {
            this.userIds.push(this.users[i].id);
        }
        this.createTaskForm.patchValue({ users: this.userIds });
        this.project = event;
    };
    TaskCreateComponent.prototype.addDynamicField = function (fieldList) {
        var _this = this;
        fieldList.forEach(function (element) {
            var _a;
            var control = _this.createTaskForm.controls.custom_field;
            var validators = null;
            if (element.is_required == 1) {
                validators = [_angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].required];
            }
            control.push(_this.formBuilder.group((_a = {},
                _a[element.field_column] = [null, validators],
                _a)));
        });
    };
    TaskCreateComponent.prototype.setCustomFields = function () {
        var arr = this.createTaskForm.value.custom_field, obj = {}, iRow = 0, that = this;
        arr.forEach(function (item) {
            var key = Object.keys(item)[0];
            obj[key] = item[key];
            if (that.customFields[iRow++].field_type == 'date') {
                obj[key] = that.datepipe.transform(item[key], 'yyyy-MM-dd');
            }
        });
        this.createTaskForm.patchValue({ custom_fields: obj });
    };
    TaskCreateComponent.prototype.planstartDateChange = function (event) {
        this.createTaskForm.patchValue({ planned_end_date: event });
    };
    TaskCreateComponent.prototype.taskstartDateChange = function (event) {
        this.createTaskForm.patchValue({ task_end_date: event });
    };
    TaskCreateComponent.prototype.onSubmit = function () {
        var _this = this;
        this.isFormSubmitted = true;
        this.isHoursValid = false;
        if (this.createTaskForm.invalid) {
            return;
        }
        // --
        // Hours validation
        if (this.createTaskForm.value.estimated_hours && this.project.estimated_hours) {
            var projectHours = this.project.estimated_hours.replace(/:/g, '.'), taskHours = this.createTaskForm.value.estimated_hours.replace(/:/g, '.');
            if (parseInt(projectHours) < parseInt(taskHours)) {
                this.isHoursValid = true;
                return;
            }
        }
        if (this.customFields.length > 0) {
            this.setCustomFields();
        }
        this.createTaskForm.value.planned_start_date = this.datepipe.transform(this.createTaskForm.value.planned_start_date, 'yyyy-MM-dd');
        this.createTaskForm.value.planned_end_date = this.datepipe.transform(this.createTaskForm.value.planned_end_date, 'yyyy-MM-dd');
        this.createTaskForm.value.task_start_date = this.datepipe.transform(this.createTaskForm.value.task_start_date, 'yyyy-MM-dd');
        this.createTaskForm.value.task_end_date = this.datepipe.transform(this.createTaskForm.value.task_end_date, 'yyyy-MM-dd');
        this.taskService.create(this.createTaskForm.value)
            .subscribe(function (data) {
            _this.toastr.success(_this.translate.instant('tasks.messages.create'), _this.translate.instant('tasks.title'));
            _this.router.navigate(['tasks']);
        });
    };
    TaskCreateComponent.ctorParameters = function () { return [
        { type: _ngx_translate_core__WEBPACK_IMPORTED_MODULE_6__["TranslateService"] },
        { type: _angular_router__WEBPACK_IMPORTED_MODULE_4__["Router"] },
        { type: _angular_router__WEBPACK_IMPORTED_MODULE_4__["ActivatedRoute"] },
        { type: _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormBuilder"] },
        { type: ngx_toastr__WEBPACK_IMPORTED_MODULE_5__["ToastrService"] },
        { type: _core_services_task_service__WEBPACK_IMPORTED_MODULE_7__["TaskService"] },
        { type: _core_services_project_service__WEBPACK_IMPORTED_MODULE_9__["ProjectService"] },
        { type: _core_services_custom_fields_service__WEBPACK_IMPORTED_MODULE_8__["CustomFieldsService"] },
        { type: _angular_common__WEBPACK_IMPORTED_MODULE_2__["DatePipe"] }
    ]; };
    TaskCreateComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-task-create',
            template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./task-create.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/modules/pm/tasks/pages/task-create/task-create.component.html")).default,
            preserveWhitespaces: true,
            styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./task-create.component.scss */ "./src/app/modules/pm/tasks/pages/task-create/task-create.component.scss")).default]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_ngx_translate_core__WEBPACK_IMPORTED_MODULE_6__["TranslateService"],
            _angular_router__WEBPACK_IMPORTED_MODULE_4__["Router"],
            _angular_router__WEBPACK_IMPORTED_MODULE_4__["ActivatedRoute"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormBuilder"],
            ngx_toastr__WEBPACK_IMPORTED_MODULE_5__["ToastrService"],
            _core_services_task_service__WEBPACK_IMPORTED_MODULE_7__["TaskService"],
            _core_services_project_service__WEBPACK_IMPORTED_MODULE_9__["ProjectService"],
            _core_services_custom_fields_service__WEBPACK_IMPORTED_MODULE_8__["CustomFieldsService"],
            _angular_common__WEBPACK_IMPORTED_MODULE_2__["DatePipe"]])
    ], TaskCreateComponent);
    return TaskCreateComponent;
}());



/***/ }),

/***/ "./src/app/modules/pm/tasks/pages/task-detail/task-detail.component.scss":
/*!*******************************************************************************!*\
  !*** ./src/app/modules/pm/tasks/pages/task-detail/task-detail.component.scss ***!
  \*******************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL21vZHVsZXMvcG0vdGFza3MvcGFnZXMvdGFzay1kZXRhaWwvdGFzay1kZXRhaWwuY29tcG9uZW50LnNjc3MifQ== */");

/***/ }),

/***/ "./src/app/modules/pm/tasks/pages/task-detail/task-detail.component.ts":
/*!*****************************************************************************!*\
  !*** ./src/app/modules/pm/tasks/pages/task-detail/task-detail.component.ts ***!
  \*****************************************************************************/
/*! exports provided: TaskDetailComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TaskDetailComponent", function() { return TaskDetailComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var ngx_permissions__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ngx-permissions */ "./node_modules/ngx-permissions/ngx-permissions.umd.js");
/* harmony import */ var ngx_permissions__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(ngx_permissions__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _core_services_task_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../../../../core/services/task.service */ "./src/app/core/services/task.service.ts");
/* harmony import */ var src_app_core_services_authentication_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! src/app/core/services/authentication.service */ "./src/app/core/services/authentication.service.ts");
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../../../../../environments/environment */ "./src/environments/environment.ts");







var TaskDetailComponent = /** @class */ (function () {
    function TaskDetailComponent(route, router, ngxRolesService, taskService, authenticationService) {
        var _this = this;
        this.route = route;
        this.router = router;
        this.ngxRolesService = ngxRolesService;
        this.taskService = taskService;
        this.authenticationService = authenticationService;
        this.isPageLoaded = false;
        this.permission = false;
        this.apiUrl = _environments_environment__WEBPACK_IMPORTED_MODULE_6__["environment"].apiUrl;
        this.route.paramMap.subscribe(function (params) {
            _this.getById(params.get('id'));
        });
        this.authenticationService.loginUser.subscribe(function (x) { return _this.loginUser = x; });
    }
    TaskDetailComponent.prototype.ngOnInit = function () {
    };
    TaskDetailComponent.prototype.getCheckPermission = function (task) {
        var role = this.ngxRolesService.getRole('admin');
        if ((role && role.name == 'admin') || this.loginUser.is_super_admin) {
            this.permission = true;
        }
        else if (task.assign_to == this.loginUser.id || task.created_by == this.loginUser.id) {
            this.permission = true;
        }
    };
    TaskDetailComponent.prototype.getById = function (taskId) {
        var _this = this;
        this.taskService.getById(taskId).subscribe(function (data) {
            _this.task = data;
            _this.getCheckPermission(_this.task);
            _this.isPageLoaded = true;
        });
    };
    TaskDetailComponent.ctorParameters = function () { return [
        { type: _angular_router__WEBPACK_IMPORTED_MODULE_2__["ActivatedRoute"] },
        { type: _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"] },
        { type: ngx_permissions__WEBPACK_IMPORTED_MODULE_3__["NgxRolesService"] },
        { type: _core_services_task_service__WEBPACK_IMPORTED_MODULE_4__["TaskService"] },
        { type: src_app_core_services_authentication_service__WEBPACK_IMPORTED_MODULE_5__["AuthenticationService"] }
    ]; };
    TaskDetailComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-task-detail',
            template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./task-detail.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/modules/pm/tasks/pages/task-detail/task-detail.component.html")).default,
            styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./task-detail.component.scss */ "./src/app/modules/pm/tasks/pages/task-detail/task-detail.component.scss")).default]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_router__WEBPACK_IMPORTED_MODULE_2__["ActivatedRoute"],
            _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"],
            ngx_permissions__WEBPACK_IMPORTED_MODULE_3__["NgxRolesService"],
            _core_services_task_service__WEBPACK_IMPORTED_MODULE_4__["TaskService"],
            src_app_core_services_authentication_service__WEBPACK_IMPORTED_MODULE_5__["AuthenticationService"]])
    ], TaskDetailComponent);
    return TaskDetailComponent;
}());



/***/ }),

/***/ "./src/app/modules/pm/tasks/pages/task-edit/task-edit.component.scss":
/*!***************************************************************************!*\
  !*** ./src/app/modules/pm/tasks/pages/task-edit/task-edit.component.scss ***!
  \***************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL21vZHVsZXMvcG0vdGFza3MvcGFnZXMvdGFzay1lZGl0L3Rhc2stZWRpdC5jb21wb25lbnQuc2NzcyJ9 */");

/***/ }),

/***/ "./src/app/modules/pm/tasks/pages/task-edit/task-edit.component.ts":
/*!*************************************************************************!*\
  !*** ./src/app/modules/pm/tasks/pages/task-edit/task-edit.component.ts ***!
  \*************************************************************************/
/*! exports provided: TaskEditComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TaskEditComponent", function() { return TaskEditComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var ngx_toastr__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ngx-toastr */ "./node_modules/ngx-toastr/fesm5/ngx-toastr.js");
/* harmony import */ var ngx_permissions__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ngx-permissions */ "./node_modules/ngx-permissions/ngx-permissions.umd.js");
/* harmony import */ var ngx_permissions__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(ngx_permissions__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var _ngx_translate_core__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @ngx-translate/core */ "./node_modules/@ngx-translate/core/fesm5/ngx-translate-core.js");
/* harmony import */ var _core_services_custom_fields_service__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../../../../../core/services/custom-fields.service */ "./src/app/core/services/custom-fields.service.ts");
/* harmony import */ var _core_services_task_service__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../../../../../core/services/task.service */ "./src/app/core/services/task.service.ts");
/* harmony import */ var _core_services_project_service__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ../../../../../core/services/project.service */ "./src/app/core/services/project.service.ts");
/* harmony import */ var _core_services_authentication_service__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ../../../../../core/services/authentication.service */ "./src/app/core/services/authentication.service.ts");












var TaskEditComponent = /** @class */ (function () {
    function TaskEditComponent(translate, datepipe, route, router, ngxRolesService, formBuilder, toastr, taskService, projectService, customFieldsService, authenticationService) {
        var _this = this;
        this.translate = translate;
        this.datepipe = datepipe;
        this.route = route;
        this.router = router;
        this.ngxRolesService = ngxRolesService;
        this.formBuilder = formBuilder;
        this.toastr = toastr;
        this.taskService = taskService;
        this.projectService = projectService;
        this.customFieldsService = customFieldsService;
        this.authenticationService = authenticationService;
        this.customFields = { length: 0 };
        this.isFormSubmitted = false;
        this.isPageLoaded = false;
        this.isHoursValid = false;
        this.users = [];
        this.userIds = [];
        this.projectVersions = [];
        this.progressOptions = {
            floor: 0,
            ceil: 100
        };
        this.datepickerConfig = {
            dateInputFormat: 'YYYY-MM-DD',
            containerClass: 'theme-red'
        };
        this.route.paramMap.subscribe(function (params) {
            _this.getTaskById(params.get('id'));
        });
        this.authenticationService.loginUser.subscribe(function (x) { return _this.loginUser = x; });
    }
    Object.defineProperty(TaskEditComponent.prototype, "taskControl", {
        get: function () {
            return this.editTaskForm.controls;
        },
        enumerable: true,
        configurable: true
    });
    TaskEditComponent.prototype.ngOnInit = function () {
        this.getProjects();
    };
    TaskEditComponent.prototype.loadForms = function () {
        this.editTaskForm = this.formBuilder.group({
            id: [this.task.id],
            parent_task_id: [this.task.parent_task_id],
            name: [this.task.name, _angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].required],
            generated_id: [this.task.generated_id, [_angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].required]],
            project_id: [this.task.project_id, _angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].required],
            project_version: [this.task.project_version],
            planned_start_date: [this.task.planned_start_date],
            planned_end_date: [this.task.planned_end_date],
            task_start_date: [this.task.task_start_date],
            task_end_date: [this.task.task_end_date],
            assign_to: [this.task.assign_to],
            status: [this.task.status, _angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].required],
            priority: [this.task.priority, _angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].required],
            estimated_hours: [this.task.estimated_hours, _angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].pattern(/^[0-9]+\:[0-5][0-9]$/)],
            progress: [parseInt(this.task.progress)],
            description: [this.task.description],
            users: [],
            custom_field: this.formBuilder.array([]),
            custom_fields: [null],
        });
        // --
        // Project Version
        this.projectVersions = this.task.project1.project_version.split(',');
        // --
        // Project users
        this.users = this.task.project1.users;
        for (var i = 0; i < this.users.length; i++) {
            this.userIds.push({ 'id': this.users[i].id });
        }
        this.editTaskForm.patchValue({ users: this.userIds });
        // --
        // Custom fields
        this.getCustomFieldByForm();
        // --
        // Parent task dates
        if (this.task.parent_task_id != 0) {
            this.getParentTask(this.task.parent_task_id);
        }
        else {
            this.isPageLoaded = true;
        }
    };
    TaskEditComponent.prototype.loadSubtaskForm = function (parentTask) {
        this.parentTask = parentTask;
        this.isPageLoaded = true;
    };
    TaskEditComponent.prototype.getTaskStatus = function (status) {
        return 'tasks.status' + status;
    };
    TaskEditComponent.prototype.getCustomFieldByForm = function () {
        var _this = this;
        this.customFieldsService.getCustomFieldByForm(2)
            .subscribe(function (data) {
            _this.customFields = data;
            if (_this.customFields.length > 0) {
                _this.addDynamicField(_this.customFields);
            }
        });
    };
    TaskEditComponent.prototype.addDynamicField = function (fieldList) {
        var _this = this;
        fieldList.forEach(function (element) {
            var _a, _b;
            var control = _this.editTaskForm.controls.custom_field;
            var validators = null;
            if (element.is_required == 1) {
                validators = [_angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].required];
            }
            if (element.field_type == 'date' && _this.task[element.field_column] != null) {
                control.push(_this.formBuilder.group((_a = {},
                    _a[element.field_column] = [new Date(_this.task[element.field_column]), validators],
                    _a)));
            }
            else {
                control.push(_this.formBuilder.group((_b = {},
                    _b[element.field_column] = [_this.task[element.field_column], validators],
                    _b)));
            }
        });
    };
    TaskEditComponent.prototype.getCheckPermission = function (task) {
        var role = this.ngxRolesService.getRole('admin');
        if ((role && role.name == 'admin') || this.loginUser.is_super_admin) {
        }
        else if (task.assign_to == this.loginUser.id || task.created_by == this.loginUser.id) {
        }
        else {
            this.router.navigate(['tasks']);
        }
    };
    TaskEditComponent.prototype.getProjects = function () {
        var _this = this;
        this.projectService.getProject().subscribe(function (data) {
            _this.projects = data;
        });
    };
    TaskEditComponent.prototype.getTaskById = function (taskId) {
        var _this = this;
        this.taskService.getById(taskId)
            .subscribe(function (data) {
            _this.task = data;
            _this.getCheckPermission(_this.task);
            _this.setDateFormat();
            _this.loadForms();
        });
    };
    TaskEditComponent.prototype.setDateFormat = function () {
        if (this.task.planned_start_date) {
            this.task.planned_start_date = new Date(this.task.planned_start_date);
        }
        if (this.task.planned_end_date) {
            this.task.planned_end_date = new Date(this.task.planned_end_date);
        }
        if (this.task.task_start_date) {
            this.task.task_start_date = new Date(this.task.task_start_date);
        }
        if (this.task.task_end_date) {
            this.task.task_end_date = new Date(this.task.task_end_date);
        }
    };
    TaskEditComponent.prototype.getParentTask = function (parentTaskId) {
        var _this = this;
        this.taskService.getParentTask(parentTaskId)
            .subscribe(function (data) {
            _this.loadSubtaskForm(data);
        });
    };
    TaskEditComponent.prototype.setCustomFields = function () {
        var arr = this.editTaskForm.value.custom_field;
        var obj = {};
        var iRow = 0;
        var that = this;
        arr.forEach(function (item) {
            var key = Object.keys(item)[0];
            obj[key] = item[key];
            if (that.customFields[iRow++].field_type == 'date') {
                obj[key] = that.datepipe.transform(item[key], 'yyyy-MM-dd');
            }
        });
        this.editTaskForm.patchValue({ custom_fields: obj });
    };
    TaskEditComponent.prototype.projectChange = function (event) {
        this.userIds = [];
        this.editTaskForm.patchValue({ project_version: null });
        this.editTaskForm.patchValue({ assign_to: null });
        this.editTaskForm.patchValue({ planned_start_date: null });
        this.editTaskForm.patchValue({ planned_end_date: null });
        this.editTaskForm.patchValue({ task_start_date: null });
        this.editTaskForm.patchValue({ task_end_date: null });
        if (this.editTaskForm.value.project_id == undefined || this.editTaskForm.value.project_id == null || this.editTaskForm.value.project_id == '') {
            this.projectVersions = null;
            this.users = null;
            return;
        }
        this.projectVersions = event.project_version.split(',');
        // --
        // Project users
        this.users = event.users;
        for (var i = 0; i < this.users.length; i++) {
            this.userIds.push({ 'id': this.users[i].id });
        }
        this.editTaskForm.patchValue({ users: this.userIds });
    };
    TaskEditComponent.prototype.clearVersionValues = function () {
        this.editTaskForm.patchValue({ project_version: null });
    };
    TaskEditComponent.prototype.planstartDateChange = function (event) {
        this.editTaskForm.patchValue({ planned_end_date: this.editTaskForm.value.planned_start_date });
    };
    TaskEditComponent.prototype.taskstartDateChange = function (event) {
        this.editTaskForm.patchValue({ task_end_date: this.editTaskForm.value.task_start_date });
    };
    TaskEditComponent.prototype.onSubmit = function () {
        var _this = this;
        this.isFormSubmitted = true;
        this.isHoursValid = false;
        if (this.editTaskForm.invalid) {
            return;
        }
        // --
        // Hours validation
        if (this.editTaskForm.value.estimated_hours && this.task.project1.estimated_hours) {
            var projectHours = this.task.project1.estimated_hours.replace(/:/g, '.'), taskHours = this.editTaskForm.value.estimated_hours.replace(/:/g, '.');
            if (parseInt(projectHours) < parseInt(taskHours)) {
                this.isHoursValid = true;
                return;
            }
        }
        if (this.customFields.length > 0) {
            this.setCustomFields();
        }
        this.editTaskForm.value.planned_start_date = this.datepipe.transform(this.editTaskForm.value.planned_start_date, 'yyyy-MM-dd');
        this.editTaskForm.value.planned_end_date = this.datepipe.transform(this.editTaskForm.value.planned_end_date, 'yyyy-MM-dd');
        this.editTaskForm.value.task_start_date = this.datepipe.transform(this.editTaskForm.value.task_start_date, 'yyyy-MM-dd');
        this.editTaskForm.value.task_end_date = this.datepipe.transform(this.editTaskForm.value.task_end_date, 'yyyy-MM-dd');
        this.taskService.update(this.editTaskForm.value).subscribe(function (data) {
            _this.toastr.success(_this.translate.instant('tasks.messages.update'), _this.translate.instant('tasks.title'));
            _this.router.navigate(['tasks']);
        });
    };
    TaskEditComponent.ctorParameters = function () { return [
        { type: _ngx_translate_core__WEBPACK_IMPORTED_MODULE_7__["TranslateService"] },
        { type: _angular_common__WEBPACK_IMPORTED_MODULE_2__["DatePipe"] },
        { type: _angular_router__WEBPACK_IMPORTED_MODULE_4__["ActivatedRoute"] },
        { type: _angular_router__WEBPACK_IMPORTED_MODULE_4__["Router"] },
        { type: ngx_permissions__WEBPACK_IMPORTED_MODULE_6__["NgxRolesService"] },
        { type: _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormBuilder"] },
        { type: ngx_toastr__WEBPACK_IMPORTED_MODULE_5__["ToastrService"] },
        { type: _core_services_task_service__WEBPACK_IMPORTED_MODULE_9__["TaskService"] },
        { type: _core_services_project_service__WEBPACK_IMPORTED_MODULE_10__["ProjectService"] },
        { type: _core_services_custom_fields_service__WEBPACK_IMPORTED_MODULE_8__["CustomFieldsService"] },
        { type: _core_services_authentication_service__WEBPACK_IMPORTED_MODULE_11__["AuthenticationService"] }
    ]; };
    TaskEditComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-task-edit',
            template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./task-edit.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/modules/pm/tasks/pages/task-edit/task-edit.component.html")).default,
            preserveWhitespaces: true,
            styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./task-edit.component.scss */ "./src/app/modules/pm/tasks/pages/task-edit/task-edit.component.scss")).default]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_ngx_translate_core__WEBPACK_IMPORTED_MODULE_7__["TranslateService"],
            _angular_common__WEBPACK_IMPORTED_MODULE_2__["DatePipe"],
            _angular_router__WEBPACK_IMPORTED_MODULE_4__["ActivatedRoute"],
            _angular_router__WEBPACK_IMPORTED_MODULE_4__["Router"],
            ngx_permissions__WEBPACK_IMPORTED_MODULE_6__["NgxRolesService"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormBuilder"],
            ngx_toastr__WEBPACK_IMPORTED_MODULE_5__["ToastrService"],
            _core_services_task_service__WEBPACK_IMPORTED_MODULE_9__["TaskService"],
            _core_services_project_service__WEBPACK_IMPORTED_MODULE_10__["ProjectService"],
            _core_services_custom_fields_service__WEBPACK_IMPORTED_MODULE_8__["CustomFieldsService"],
            _core_services_authentication_service__WEBPACK_IMPORTED_MODULE_11__["AuthenticationService"]])
    ], TaskEditComponent);
    return TaskEditComponent;
}());



/***/ }),

/***/ "./src/app/modules/pm/tasks/pages/task-list/task-list.component.scss":
/*!***************************************************************************!*\
  !*** ./src/app/modules/pm/tasks/pages/task-list/task-list.component.scss ***!
  \***************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = (".hide_empty_message ::ng-deep .odd {\n  display: none;\n}\n\n.btn-filters .status-dropdown .btn.assigned,\n.btn-filters .status-dropdown .btn.open {\n  background: none;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvbW9kdWxlcy9wbS90YXNrcy9wYWdlcy90YXNrLWxpc3QvQzpcXFVzZXJzXFx0aHVhblxcT25lRHJpdmVcXERlc2t0b3BcXGdsYXZhbC10aHVhbmRpbmgvc3JjXFxhcHBcXG1vZHVsZXNcXHBtXFx0YXNrc1xccGFnZXNcXHRhc2stbGlzdFxcdGFzay1saXN0LmNvbXBvbmVudC5zY3NzIiwic3JjL2FwcC9tb2R1bGVzL3BtL3Rhc2tzL3BhZ2VzL3Rhc2stbGlzdC90YXNrLWxpc3QuY29tcG9uZW50LnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDSSxhQUFBO0FDQ0o7O0FERUE7O0VBRUksZ0JBQUE7QUNDSiIsImZpbGUiOiJzcmMvYXBwL21vZHVsZXMvcG0vdGFza3MvcGFnZXMvdGFzay1saXN0L3Rhc2stbGlzdC5jb21wb25lbnQuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIi5oaWRlX2VtcHR5X21lc3NhZ2UgOjpuZy1kZWVwIC5vZGQge1xyXG4gICAgZGlzcGxheTogbm9uZVxyXG59XHJcblxyXG4uYnRuLWZpbHRlcnMgLnN0YXR1cy1kcm9wZG93biAuYnRuLmFzc2lnbmVkLFxyXG4uYnRuLWZpbHRlcnMgLnN0YXR1cy1kcm9wZG93biAuYnRuLm9wZW4ge1xyXG4gICAgYmFja2dyb3VuZDogbm9uZTtcclxufVxyXG4iLCIuaGlkZV9lbXB0eV9tZXNzYWdlIDo6bmctZGVlcCAub2RkIHtcbiAgZGlzcGxheTogbm9uZTtcbn1cblxuLmJ0bi1maWx0ZXJzIC5zdGF0dXMtZHJvcGRvd24gLmJ0bi5hc3NpZ25lZCxcbi5idG4tZmlsdGVycyAuc3RhdHVzLWRyb3Bkb3duIC5idG4ub3BlbiB7XG4gIGJhY2tncm91bmQ6IG5vbmU7XG59Il19 */");

/***/ }),

/***/ "./src/app/modules/pm/tasks/pages/task-list/task-list.component.ts":
/*!*************************************************************************!*\
  !*** ./src/app/modules/pm/tasks/pages/task-list/task-list.component.ts ***!
  \*************************************************************************/
/*! exports provided: TaskListComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TaskListComponent", function() { return TaskListComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var ngx_bootstrap_modal__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ngx-bootstrap/modal */ "./node_modules/ngx-bootstrap/modal/fesm5/ngx-bootstrap-modal.js");
/* harmony import */ var ngx_export_as__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ngx-export-as */ "./node_modules/ngx-export-as/fesm2015/ngx-export-as.js");
/* harmony import */ var ngx_toastr__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ngx-toastr */ "./node_modules/ngx-toastr/fesm5/ngx-toastr.js");
/* harmony import */ var ngx_permissions__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ngx-permissions */ "./node_modules/ngx-permissions/ngx-permissions.umd.js");
/* harmony import */ var ngx_permissions__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(ngx_permissions__WEBPACK_IMPORTED_MODULE_7__);
/* harmony import */ var _ngx_translate_core__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @ngx-translate/core */ "./node_modules/@ngx-translate/core/fesm5/ngx-translate-core.js");
/* harmony import */ var angular_datatables__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! angular-datatables */ "./node_modules/angular-datatables/index.js");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! rxjs */ "./node_modules/rxjs/_esm5/index.js");
/* harmony import */ var sweetalert2__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! sweetalert2 */ "./node_modules/sweetalert2/dist/sweetalert2.all.js");
/* harmony import */ var sweetalert2__WEBPACK_IMPORTED_MODULE_11___default = /*#__PURE__*/__webpack_require__.n(sweetalert2__WEBPACK_IMPORTED_MODULE_11__);
/* harmony import */ var _core_services_task_service__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ../../../../../core/services/task.service */ "./src/app/core/services/task.service.ts");
/* harmony import */ var _core_services_authentication_service__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ../../../../../core/services/authentication.service */ "./src/app/core/services/authentication.service.ts");
/* harmony import */ var _components_task_import_modal_task_import_modal_component__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ./../../components/task-import-modal/task-import-modal.component */ "./src/app/modules/pm/tasks/components/task-import-modal/task-import-modal.component.ts");
/* harmony import */ var _core_helpers_pm_helper__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! ./../../../../../core/helpers/pm-helper */ "./src/app/core/helpers/pm-helper.ts");
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! ../../../../../../environments/environment */ "./src/environments/environment.ts");
/* harmony import */ var datatables_net__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! datatables.net */ "./node_modules/datatables.net/js/jquery.dataTables.js");
/* harmony import */ var datatables_net__WEBPACK_IMPORTED_MODULE_17___default = /*#__PURE__*/__webpack_require__.n(datatables_net__WEBPACK_IMPORTED_MODULE_17__);
/* harmony import */ var datatables_net_bs4__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! datatables.net-bs4 */ "./node_modules/datatables.net-bs4/js/dataTables.bootstrap4.js");
/* harmony import */ var datatables_net_bs4__WEBPACK_IMPORTED_MODULE_18___default = /*#__PURE__*/__webpack_require__.n(datatables_net_bs4__WEBPACK_IMPORTED_MODULE_18__);



















var TaskListComponent = /** @class */ (function () {
    function TaskListComponent(translate, ngxRolesService, modalService, http, exportAsService, taskService, router, toastr, route, authenticationService) {
        var _this = this;
        this.translate = translate;
        this.ngxRolesService = ngxRolesService;
        this.modalService = modalService;
        this.http = http;
        this.exportAsService = exportAsService;
        this.taskService = taskService;
        this.router = router;
        this.toastr = toastr;
        this.route = route;
        this.authenticationService = authenticationService;
        this.dtTrigger = new rxjs__WEBPACK_IMPORTED_MODULE_10__["Subject"]();
        this.dtOptions = {};
        this.statusfilterId = 0;
        this.tasks = [];
        this.taskstatusKeyValue = _core_helpers_pm_helper__WEBPACK_IMPORTED_MODULE_15__["task_status_key_value"];
        this.taskFilterKey = 'selected';
        this.isPageLoaded = false;
        this.exportAsConfig = {
            type: 'pdf',
            elementIdOrContent: 'tasks_table',
        };
        this.datepickerConfig = {
            dateInputFormat: 'YYYY-MM-DD',
            containerClass: 'theme-red'
        };
        this.modalConfigs = {
            animated: true,
            keyboard: true,
            backdrop: true,
            ignoreBackdropClick: false,
            class: 'inmodal modal-dialog-centered animated fadeIn'
        };
        this.apiUrl = _environments_environment__WEBPACK_IMPORTED_MODULE_16__["environment"].apiUrl;
        this.authenticationService.loginUser.subscribe(function (x) { return _this.loginUser = x; });
    }
    TaskListComponent.prototype.ngOnInit = function () {
        this.loadTaskDatatable();
    };
    TaskListComponent.prototype.loadTaskDatatable = function () {
        var _this = this;
        this.statusfilterId = 0;
        if (this.route.snapshot.params['statusId']) {
            this.statusfilterId = this.route.snapshot.params['statusId'];
        }
        if (this.route.snapshot.params['taskFilterKey']) {
            this.taskFilterKey = this.route.snapshot.params['taskFilterKey'];
        }
        var that = this;
        this.dtOptions = {
            pagingType: 'full_numbers',
            pageLength: that.loginUser.settings.tables_pagination_limit,
            serverSide: true,
            processing: true,
            dom: '<"html5buttons"B>ltfrtip',
            order: [0],
            columns: [
                {
                    'sortable': true,
                    'width': '7%',
                    'target': [0]
                },
                {
                    'sortable': true,
                    'target': [1]
                },
                {
                    'sortable': true,
                    'width': '8%',
                    'target': [2]
                },
                {
                    'sortable': true,
                    'width': '8%',
                    'target': [3]
                },
                {
                    'sortable': true,
                    'width': '8%',
                    'target': [4]
                },
                {
                    'sortable': true,
                    'width': '10%',
                    'target': [5]
                },
                {
                    'sortable': true,
                    'width': '10%',
                    'target': [6]
                },
                {
                    'sortable': true,
                    'width': '10%',
                    'target': [7]
                },
                {
                    'sortable': false,
                    'width': '5%',
                    'target': [8]
                }
            ],
            buttons: [
                {
                    extend: 'csv',
                    title: this.translate.instant('tasks.title'),
                    className: 'btn btn-datatable-gredient',
                    action: function (e, dt, node, config) {
                        that.exportFiles('csv');
                    }
                }, {
                    extend: 'excel',
                    title: this.translate.instant('tasks.title'),
                    className: 'btn btn-datatable-gredient',
                    action: function (e, dt, node, config) {
                        that.exportFiles('xlsx');
                    }
                }, {
                    extend: 'pdf',
                    title: this.translate.instant('tasks.title'),
                    className: 'btn btn-datatable-gredient',
                    action: function (e, dt, node, config) {
                        that.exportFiles('pdf');
                    }
                }
            ],
            language: {
                'sEmptyTable': this.translate.instant('common.datatable.sEmptyTable'),
                'sInfo': this.translate.instant('common.datatable.sInfo'),
                'sInfoEmpty': this.translate.instant('common.datatable.sInfoEmpty'),
                'sSearch': '',
                'sInfoPostFix': this.translate.instant('common.datatable.sInfoPostFix'),
                'sInfoThousands': this.translate.instant('common.datatable.sInfoThousands'),
                'sLengthMenu': this.translate.instant('common.datatable.sLengthMenu'),
                'sLoadingRecords': this.translate.instant('common.datatable.sLoadingRecords'),
                'sProcessing': this.translate.instant('common.datatable.sProcessing'),
                'sZeroRecords': this.translate.instant('common.datatable.sZeroRecords'),
                'sSearchPlaceholder': this.translate.instant('common.datatable.sSearchPlaceholder'),
                'oPaginate': {
                    'sFirst': this.translate.instant('common.datatable.oPaginate.sFirst'),
                    'sLast': this.translate.instant('common.datatable.oPaginate.sLast'),
                    'sNext': this.translate.instant('common.datatable.oPaginate.sNext'),
                    'sPrevious': this.translate.instant('common.datatable.oPaginate.sPrevious')
                },
                'oAria': {
                    'sSortAscending': this.translate.instant('common.datatable.oAria.sSortAscending'),
                    'sSortDescending': this.translate.instant('common.datatable.oAria.sSortDescending')
                }
            },
            ajax: function (dataTablesParameters, callback) {
                dataTablesParameters = {
                    columns: dataTablesParameters.columns,
                    draw: dataTablesParameters.draw,
                    length: dataTablesParameters.length,
                    order: dataTablesParameters.order,
                    search: dataTablesParameters.search,
                    start: dataTablesParameters.start,
                    status: _this.statusfilterId,
                    filter: _this.taskFilterKey
                };
                _this.http
                    .post(_this.apiUrl + '/api/all-tasks', dataTablesParameters, {})
                    .subscribe(function (resp) {
                    _this.isPageLoaded = true;
                    _this.tasks = resp.data;
                    _this.countStatus = resp;
                    _this.countStatus = _this.countStatus.statusCount;
                    if (_this.countStatus.all == 0) {
                        _this.countStatus.all = 0;
                        _this.countStatus.open = 0;
                        _this.countStatus.in_progress = 0;
                        _this.countStatus.completed = 0;
                    }
                    callback({
                        recordsTotal: resp.recordsTotal,
                        recordsFiltered: resp.recordsFiltered,
                        data: [],
                    });
                });
            }
        };
    };
    TaskListComponent.prototype.ngAfterViewInit = function () {
        this.dtTrigger.next();
    };
    TaskListComponent.prototype.ngOnDestroy = function () {
        this.dtTrigger.unsubscribe();
    };
    TaskListComponent.prototype.rerender = function () {
        var _this = this;
        this.dtElement.dtInstance.then(function (dtInstance) {
            dtInstance.destroy();
            setTimeout(function () {
                _this.dtTrigger.next();
                if (_this.tasks.length > 0) {
                    $('.tfoot_dt').addClass('d-none');
                }
                else {
                    $('.tfoot_dt').removeClass('d-none');
                }
            });
        });
    };
    TaskListComponent.prototype.exportFiles = function (type) {
        this.exportAsConfig.type = type;
        this.exportAsService.save(this.exportAsConfig, this.translate.instant('tasks.title')).subscribe(function () {
        });
    };
    TaskListComponent.prototype.getCheckPermission = function (task) {
        var role = this.ngxRolesService.getRole('admin');
        if ((role && role.name == 'admin') || this.loginUser.is_super_admin) {
            return true;
        }
        else if (task.assign_to == this.loginUser.id || task.created_by == this.loginUser.id) {
            return true;
        }
        else {
            return false;
        }
    };
    TaskListComponent.prototype.changeTaskStatus = function (taskID, status) {
        var _this = this;
        var changeTask = {
            id: taskID,
            status: status.id
        };
        this.taskService.changeStatus(changeTask)
            .subscribe(function (data) {
            _this.toastr.success(_this.translate.instant('tasks.messages.status'), _this.translate.instant('tasks.title'));
            _this.rerender();
        });
    };
    TaskListComponent.prototype.filterByStatus = function (statusID, taskFilterKey) {
        this.router.routeReuseStrategy.shouldReuseRoute = function () { return false; };
        this.router.navigate(['tasks', statusID, taskFilterKey]);
    };
    TaskListComponent.prototype.getTaskStatus = function (status) {
        return 'tasks.status' + status;
    };
    TaskListComponent.prototype.getTranslateStatus = function (statusKey) {
        return this.taskstatusKeyValue[statusKey];
    };
    TaskListComponent.prototype.saveTaskDetail = function (index, name, value) {
        var _this = this;
        this.tasks[index][name] = value;
        this.taskService.update(this.tasks[index])
            .subscribe(function (data) {
            _this.toastr.success(_this.translate.instant('tasks.messages.update'), _this.translate.instant('tasks.title'));
            _this.rerender();
        });
    };
    TaskListComponent.prototype.deleteTask = function (id) {
        var _this = this;
        sweetalert2__WEBPACK_IMPORTED_MODULE_11___default.a.fire({
            title: this.translate.instant('common.swal.title'),
            text: this.translate.instant('common.swal.text'),
            type: 'warning',
            showCancelButton: true,
            confirmButtonText: this.translate.instant('common.swal.confirmButtonText'),
            cancelButtonText: this.translate.instant('common.swal.cancelButtonText')
        }).then(function (result) {
            if (result.value) {
                _this.taskService.delete(id)
                    .subscribe(function (data) {
                    _this.toastr.success(_this.translate.instant('tasks.messages.delete'), _this.translate.instant('tasks.title'));
                    _this.rerender();
                });
            }
        });
    };
    TaskListComponent.prototype.openTaskImportModal = function () {
        var _this = this;
        this.modalRef = this.modalService.show(_components_task_import_modal_task_import_modal_component__WEBPACK_IMPORTED_MODULE_14__["TaskImportModalComponent"], this.modalConfigs);
        this.modalRef.content.event.subscribe(function (data) {
            _this.toastr.success(_this.translate.instant('tasks.messages.import'), _this.translate.instant('tasks.title'));
            _this.rerender();
        });
    };
    TaskListComponent.ctorParameters = function () { return [
        { type: _ngx_translate_core__WEBPACK_IMPORTED_MODULE_8__["TranslateService"] },
        { type: ngx_permissions__WEBPACK_IMPORTED_MODULE_7__["NgxRolesService"] },
        { type: ngx_bootstrap_modal__WEBPACK_IMPORTED_MODULE_4__["BsModalService"] },
        { type: _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClient"] },
        { type: ngx_export_as__WEBPACK_IMPORTED_MODULE_5__["ExportAsService"] },
        { type: _core_services_task_service__WEBPACK_IMPORTED_MODULE_12__["TaskService"] },
        { type: _angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"] },
        { type: ngx_toastr__WEBPACK_IMPORTED_MODULE_6__["ToastrService"] },
        { type: _angular_router__WEBPACK_IMPORTED_MODULE_3__["ActivatedRoute"] },
        { type: _core_services_authentication_service__WEBPACK_IMPORTED_MODULE_13__["AuthenticationService"] }
    ]; };
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewChild"])(angular_datatables__WEBPACK_IMPORTED_MODULE_9__["DataTableDirective"], { static: true }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", angular_datatables__WEBPACK_IMPORTED_MODULE_9__["DataTableDirective"])
    ], TaskListComponent.prototype, "dtElement", void 0);
    TaskListComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-task-list',
            template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./task-list.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/modules/pm/tasks/pages/task-list/task-list.component.html")).default,
            preserveWhitespaces: true,
            styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./task-list.component.scss */ "./src/app/modules/pm/tasks/pages/task-list/task-list.component.scss")).default]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_ngx_translate_core__WEBPACK_IMPORTED_MODULE_8__["TranslateService"],
            ngx_permissions__WEBPACK_IMPORTED_MODULE_7__["NgxRolesService"],
            ngx_bootstrap_modal__WEBPACK_IMPORTED_MODULE_4__["BsModalService"],
            _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClient"],
            ngx_export_as__WEBPACK_IMPORTED_MODULE_5__["ExportAsService"],
            _core_services_task_service__WEBPACK_IMPORTED_MODULE_12__["TaskService"],
            _angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"],
            ngx_toastr__WEBPACK_IMPORTED_MODULE_6__["ToastrService"],
            _angular_router__WEBPACK_IMPORTED_MODULE_3__["ActivatedRoute"],
            _core_services_authentication_service__WEBPACK_IMPORTED_MODULE_13__["AuthenticationService"]])
    ], TaskListComponent);
    return TaskListComponent;
}());



/***/ }),

/***/ "./src/app/modules/pm/tasks/task-routing.module.ts":
/*!*********************************************************!*\
  !*** ./src/app/modules/pm/tasks/task-routing.module.ts ***!
  \*********************************************************/
/*! exports provided: TasksRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TasksRoutingModule", function() { return TasksRoutingModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var ngx_permissions__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ngx-permissions */ "./node_modules/ngx-permissions/ngx-permissions.umd.js");
/* harmony import */ var ngx_permissions__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(ngx_permissions__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _pages_task_create_task_create_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./pages/task-create/task-create.component */ "./src/app/modules/pm/tasks/pages/task-create/task-create.component.ts");
/* harmony import */ var _pages_task_edit_task_edit_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./pages/task-edit/task-edit.component */ "./src/app/modules/pm/tasks/pages/task-edit/task-edit.component.ts");
/* harmony import */ var _pages_task_list_task_list_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./pages/task-list/task-list.component */ "./src/app/modules/pm/tasks/pages/task-list/task-list.component.ts");
/* harmony import */ var _pages_task_detail_task_detail_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./pages/task-detail/task-detail.component */ "./src/app/modules/pm/tasks/pages/task-detail/task-detail.component.ts");
/* harmony import */ var _pages_task_copy_task_copy_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./pages/task-copy/task-copy.component */ "./src/app/modules/pm/tasks/pages/task-copy/task-copy.component.ts");









var routes = [
    {
        path: '',
        children: [
            {
                path: '',
                canActivate: [ngx_permissions__WEBPACK_IMPORTED_MODULE_3__["NgxPermissionsGuard"]],
                component: _pages_task_list_task_list_component__WEBPACK_IMPORTED_MODULE_6__["TaskListComponent"],
                data: {
                    permissions: {
                        only: ['admin', 'super_admin', 'tasks_view']
                    }
                }
            },
            {
                path: 'create',
                canActivate: [ngx_permissions__WEBPACK_IMPORTED_MODULE_3__["NgxPermissionsGuard"]],
                component: _pages_task_create_task_create_component__WEBPACK_IMPORTED_MODULE_4__["TaskCreateComponent"],
                data: {
                    breadcrumbs: {
                        text: 'common.create',
                        icon: 'fa fa-tasks',
                        show: true,
                        isHome: true
                    },
                    permissions: {
                        only: ['admin', 'super_admin', 'tasks_create']
                    }
                }
            },
            {
                path: 'copy/:id',
                canActivate: [ngx_permissions__WEBPACK_IMPORTED_MODULE_3__["NgxPermissionsGuard"]],
                component: _pages_task_copy_task_copy_component__WEBPACK_IMPORTED_MODULE_8__["TaskCopyComponent"],
                data: {
                    breadcrumbs: {
                        text: 'common.copy',
                        icon: 'fa fa-tasks',
                        show: true,
                        isHome: true
                    },
                    permissions: {
                        only: ['admin', 'super_admin', 'tasks_create']
                    }
                }
            },
            {
                path: 'edit/:id',
                canActivate: [ngx_permissions__WEBPACK_IMPORTED_MODULE_3__["NgxPermissionsGuard"]],
                component: _pages_task_edit_task_edit_component__WEBPACK_IMPORTED_MODULE_5__["TaskEditComponent"],
                data: {
                    breadcrumbs: {
                        text: 'common.edit',
                        icon: 'fa fa-tasks',
                        hasParams: true,
                        show: true,
                        isHome: true
                    }
                }
            },
            {
                path: 'create/:id',
                component: _pages_task_create_task_create_component__WEBPACK_IMPORTED_MODULE_4__["TaskCreateComponent"],
                canActivate: [ngx_permissions__WEBPACK_IMPORTED_MODULE_3__["NgxPermissionsGuard"]],
                data: {
                    breadcrumbs: {
                        text: 'common.create',
                        icon: 'fa fa-tasks',
                        hasParams: true,
                        show: true,
                        isHome: true
                    },
                    permissions: {
                        only: ['admin', 'super_admin', 'tasks_create']
                    }
                }
            },
            {
                path: 'detail/:id',
                component: _pages_task_detail_task_detail_component__WEBPACK_IMPORTED_MODULE_7__["TaskDetailComponent"],
                canActivate: [ngx_permissions__WEBPACK_IMPORTED_MODULE_3__["NgxPermissionsGuard"]],
                data: {
                    breadcrumbs: {
                        text: 'common.detail',
                        icon: 'fa fa-tasks',
                        hasParams: true,
                        show: true,
                        isHome: true
                    },
                    permissions: {
                        only: ['admin', 'super_admin', 'tasks_view']
                    }
                }
            },
            {
                path: ':statusId/:taskFilterKey',
                component: _pages_task_list_task_list_component__WEBPACK_IMPORTED_MODULE_6__["TaskListComponent"]
            }
        ]
    }
];
var TasksRoutingModule = /** @class */ (function () {
    function TasksRoutingModule() {
    }
    TasksRoutingModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)],
            exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]]
        })
    ], TasksRoutingModule);
    return TasksRoutingModule;
}());



/***/ }),

/***/ "./src/app/modules/pm/tasks/tasks.module.ts":
/*!**************************************************!*\
  !*** ./src/app/modules/pm/tasks/tasks.module.ts ***!
  \**************************************************/
/*! exports provided: TasksModule, HttpLoaderFactory */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TasksModule", function() { return TasksModule; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "HttpLoaderFactory", function() { return HttpLoaderFactory; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var ngx_bootstrap__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ngx-bootstrap */ "./node_modules/ngx-bootstrap/esm5/ngx-bootstrap.js");
/* harmony import */ var ngx_perfect_scrollbar__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ngx-perfect-scrollbar */ "./node_modules/ngx-perfect-scrollbar/dist/ngx-perfect-scrollbar.es5.js");
/* harmony import */ var ngx_export_as__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ngx-export-as */ "./node_modules/ngx-export-as/fesm2015/ngx-export-as.js");
/* harmony import */ var ngx_editor__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ngx-editor */ "./node_modules/ngx-editor/fesm5/ngx-editor.js");
/* harmony import */ var ngx_bootstrap_progressbar__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ngx-bootstrap/progressbar */ "./node_modules/ngx-bootstrap/progressbar/fesm5/ngx-bootstrap-progressbar.js");
/* harmony import */ var ngx_permissions__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ngx-permissions */ "./node_modules/ngx-permissions/ngx-permissions.umd.js");
/* harmony import */ var ngx_permissions__WEBPACK_IMPORTED_MODULE_10___default = /*#__PURE__*/__webpack_require__.n(ngx_permissions__WEBPACK_IMPORTED_MODULE_10__);
/* harmony import */ var _ng_select_ng_select__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! @ng-select/ng-select */ "./node_modules/@ng-select/ng-select/fesm5/ng-select.js");
/* harmony import */ var _ngx_translate_core__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! @ngx-translate/core */ "./node_modules/@ngx-translate/core/fesm5/ngx-translate-core.js");
/* harmony import */ var _ngx_translate_http_loader__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! @ngx-translate/http-loader */ "./node_modules/@ngx-translate/http-loader/fesm5/ngx-translate-http-loader.js");
/* harmony import */ var angular_datatables__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! angular-datatables */ "./node_modules/angular-datatables/index.js");
/* harmony import */ var angular_draggable_droppable__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! angular-draggable-droppable */ "./node_modules/angular-draggable-droppable/fesm5/angular-draggable-droppable.js");
/* harmony import */ var angular_resizable_element__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! angular-resizable-element */ "./node_modules/angular-resizable-element/fesm5/angular-resizable-element.js");
/* harmony import */ var ng5_slider__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! ng5-slider */ "./node_modules/ng5-slider/esm5/ng5-slider.js");
/* harmony import */ var _task_routing_module__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! ./task-routing.module */ "./src/app/modules/pm/tasks/task-routing.module.ts");
/* harmony import */ var _shared_shared_module__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(/*! ../../../shared/shared.module */ "./src/app/shared/shared.module.ts");
/* harmony import */ var _admin_todo_todo_module__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__(/*! ../../admin/todo/todo.module */ "./src/app/modules/admin/todo/todo.module.ts");
/* harmony import */ var _pages_task_create_task_create_component__WEBPACK_IMPORTED_MODULE_21__ = __webpack_require__(/*! ./pages/task-create/task-create.component */ "./src/app/modules/pm/tasks/pages/task-create/task-create.component.ts");
/* harmony import */ var _pages_task_edit_task_edit_component__WEBPACK_IMPORTED_MODULE_22__ = __webpack_require__(/*! ./pages/task-edit/task-edit.component */ "./src/app/modules/pm/tasks/pages/task-edit/task-edit.component.ts");
/* harmony import */ var _pages_task_list_task_list_component__WEBPACK_IMPORTED_MODULE_23__ = __webpack_require__(/*! ./pages/task-list/task-list.component */ "./src/app/modules/pm/tasks/pages/task-list/task-list.component.ts");
/* harmony import */ var _pages_task_detail_task_detail_component__WEBPACK_IMPORTED_MODULE_24__ = __webpack_require__(/*! ./pages/task-detail/task-detail.component */ "./src/app/modules/pm/tasks/pages/task-detail/task-detail.component.ts");
/* harmony import */ var _components_task_details_task_details_component__WEBPACK_IMPORTED_MODULE_25__ = __webpack_require__(/*! ./components/task-details/task-details.component */ "./src/app/modules/pm/tasks/components/task-details/task-details.component.ts");
/* harmony import */ var _components_task_activities_task_activities_component__WEBPACK_IMPORTED_MODULE_26__ = __webpack_require__(/*! ./components/task-activities/task-activities.component */ "./src/app/modules/pm/tasks/components/task-activities/task-activities.component.ts");
/* harmony import */ var _components_task_attachments_task_attachments_component__WEBPACK_IMPORTED_MODULE_27__ = __webpack_require__(/*! ./components/task-attachments/task-attachments.component */ "./src/app/modules/pm/tasks/components/task-attachments/task-attachments.component.ts");
/* harmony import */ var _components_task_comments_task_comments_component__WEBPACK_IMPORTED_MODULE_28__ = __webpack_require__(/*! ./components/task-comments/task-comments.component */ "./src/app/modules/pm/tasks/components/task-comments/task-comments.component.ts");
/* harmony import */ var _components_task_import_modal_task_import_modal_component__WEBPACK_IMPORTED_MODULE_29__ = __webpack_require__(/*! ./components/task-import-modal/task-import-modal.component */ "./src/app/modules/pm/tasks/components/task-import-modal/task-import-modal.component.ts");
/* harmony import */ var _components_task_notes_task_notes_component__WEBPACK_IMPORTED_MODULE_30__ = __webpack_require__(/*! ./components/task-notes/task-notes.component */ "./src/app/modules/pm/tasks/components/task-notes/task-notes.component.ts");
/* harmony import */ var _components_create_attachment_modal_create_attachment_modal_component__WEBPACK_IMPORTED_MODULE_31__ = __webpack_require__(/*! ./components/create-attachment-modal/create-attachment-modal.component */ "./src/app/modules/pm/tasks/components/create-attachment-modal/create-attachment-modal.component.ts");
/* harmony import */ var _timesheet_timesheet_module__WEBPACK_IMPORTED_MODULE_32__ = __webpack_require__(/*! ../../timesheet/timesheet.module */ "./src/app/modules/timesheet/timesheet.module.ts");
/* harmony import */ var _pages_task_copy_task_copy_component__WEBPACK_IMPORTED_MODULE_33__ = __webpack_require__(/*! ./pages/task-copy/task-copy.component */ "./src/app/modules/pm/tasks/pages/task-copy/task-copy.component.ts");


































var TasksModule = /** @class */ (function () {
    function TasksModule() {
    }
    TasksModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            declarations: [
                _pages_task_create_task_create_component__WEBPACK_IMPORTED_MODULE_21__["TaskCreateComponent"],
                _pages_task_edit_task_edit_component__WEBPACK_IMPORTED_MODULE_22__["TaskEditComponent"],
                _pages_task_list_task_list_component__WEBPACK_IMPORTED_MODULE_23__["TaskListComponent"],
                _pages_task_detail_task_detail_component__WEBPACK_IMPORTED_MODULE_24__["TaskDetailComponent"],
                _components_task_details_task_details_component__WEBPACK_IMPORTED_MODULE_25__["TaskDetailsComponent"],
                _components_task_activities_task_activities_component__WEBPACK_IMPORTED_MODULE_26__["TaskActivitiesComponent"],
                _components_task_attachments_task_attachments_component__WEBPACK_IMPORTED_MODULE_27__["TaskAttachmentsComponent"],
                _components_task_comments_task_comments_component__WEBPACK_IMPORTED_MODULE_28__["TaskCommentsComponent"],
                _components_task_import_modal_task_import_modal_component__WEBPACK_IMPORTED_MODULE_29__["TaskImportModalComponent"],
                _components_task_notes_task_notes_component__WEBPACK_IMPORTED_MODULE_30__["TaskNotesComponent"],
                _components_create_attachment_modal_create_attachment_modal_component__WEBPACK_IMPORTED_MODULE_31__["CreateAttachmentModalComponent"],
                _pages_task_copy_task_copy_component__WEBPACK_IMPORTED_MODULE_33__["TaskCopyComponent"],
            ],
            imports: [
                _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
                _task_routing_module__WEBPACK_IMPORTED_MODULE_18__["TasksRoutingModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_4__["FormsModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_4__["ReactiveFormsModule"],
                _ng_select_ng_select__WEBPACK_IMPORTED_MODULE_11__["NgSelectModule"],
                angular_datatables__WEBPACK_IMPORTED_MODULE_14__["DataTablesModule"],
                ngx_export_as__WEBPACK_IMPORTED_MODULE_7__["ExportAsModule"],
                ngx_bootstrap__WEBPACK_IMPORTED_MODULE_5__["BsDropdownModule"],
                ngx_editor__WEBPACK_IMPORTED_MODULE_8__["NgxEditorModule"],
                angular_draggable_droppable__WEBPACK_IMPORTED_MODULE_15__["DragAndDropModule"],
                angular_resizable_element__WEBPACK_IMPORTED_MODULE_16__["ResizableModule"],
                ng5_slider__WEBPACK_IMPORTED_MODULE_17__["Ng5SliderModule"],
                ngx_perfect_scrollbar__WEBPACK_IMPORTED_MODULE_6__["PerfectScrollbarModule"],
                ngx_bootstrap_progressbar__WEBPACK_IMPORTED_MODULE_9__["ProgressbarModule"].forRoot(),
                ngx_permissions__WEBPACK_IMPORTED_MODULE_10__["NgxPermissionsModule"],
                ngx_bootstrap__WEBPACK_IMPORTED_MODULE_5__["TooltipModule"].forRoot(),
                ngx_bootstrap__WEBPACK_IMPORTED_MODULE_5__["DatepickerModule"].forRoot(),
                ngx_bootstrap__WEBPACK_IMPORTED_MODULE_5__["BsDatepickerModule"].forRoot(),
                ngx_bootstrap__WEBPACK_IMPORTED_MODULE_5__["ModalModule"].forRoot(),
                ngx_bootstrap__WEBPACK_IMPORTED_MODULE_5__["TabsModule"].forRoot(),
                ngx_bootstrap__WEBPACK_IMPORTED_MODULE_5__["ButtonsModule"].forRoot(),
                ngx_bootstrap__WEBPACK_IMPORTED_MODULE_5__["AccordionModule"].forRoot(),
                _ngx_translate_core__WEBPACK_IMPORTED_MODULE_12__["TranslateModule"].forChild({
                    loader: {
                        provide: _ngx_translate_core__WEBPACK_IMPORTED_MODULE_12__["TranslateLoader"],
                        useFactory: (HttpLoaderFactory),
                        deps: [_angular_common_http__WEBPACK_IMPORTED_MODULE_3__["HttpClient"]]
                    }
                }),
                _admin_todo_todo_module__WEBPACK_IMPORTED_MODULE_20__["TodoModule"],
                _timesheet_timesheet_module__WEBPACK_IMPORTED_MODULE_32__["TimesheetModule"],
                _shared_shared_module__WEBPACK_IMPORTED_MODULE_19__["SharedModule"]
            ],
            entryComponents: [_components_create_attachment_modal_create_attachment_modal_component__WEBPACK_IMPORTED_MODULE_31__["CreateAttachmentModalComponent"], _components_task_import_modal_task_import_modal_component__WEBPACK_IMPORTED_MODULE_29__["TaskImportModalComponent"]]
        })
    ], TasksModule);
    return TasksModule;
}());

// Required for AOT compilation
function HttpLoaderFactory(http) {
    return new _ngx_translate_http_loader__WEBPACK_IMPORTED_MODULE_13__["TranslateHttpLoader"](http, './assets/i18n/', '.json');
}


/***/ })

}]);
//# sourceMappingURL=modules-pm-tasks-tasks-module.js.map