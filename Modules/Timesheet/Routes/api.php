<?php

use Illuminate\Http\Request;

/*
|--------------------------------------------------------------------------
| API Routes
|--------------------------------------------------------------------------
|
| Here is where you can register API routes for your application. These
| routes are loaded by the RouteServiceProvider within a group which
| is assigned the "api" middleware group. Enjoy building your API!
|
*/

Route::group(
    ['middleware' => 'auth:api'],
    function () {
        Route::post('my-timesheets', 'TimesheetController@getMyTimesheets');
        Route::post('get-timesheets', 'TimesheetController@getTimesheetsByModule');
        Route::post('project-timesheets', 'TimesheetController@getProjectTimesheets');
        Route::post('timesheets-report', 'TimesheetController@getTimesheetsReport');
        Route::resource('timesheets', 'TimesheetController');
        Route::resource('timer-logs', 'TimerLogsController');
    }
);
