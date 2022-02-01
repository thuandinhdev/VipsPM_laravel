(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["modules-admin-meeting-meeting-module"],{

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/modules/admin/meeting/components/create-meeting-modal/create-meeting-modal.component.html":
/*!*************************************************************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/modules/admin/meeting/components/create-meeting-modal/create-meeting-modal.component.html ***!
  \*************************************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<div class=\"modal-header\">\r\n    <h2 class=\"modal-title font-weight-normal\">\r\n        <i aria-hidden=\"true\" class=\"fa fa-group\"></i>&nbsp;{{'meetings.title' | translate}}</h2>\r\n    <button (click)=\"bsModalRef.hide()\" aria-label=\"Close\" class=\"close\" data-dismiss=\"modal\" type=\"button\">\r\n        <span aria-hidden=\"true\">&times;</span></button>\r\n</div>\r\n<form (ngSubmit)=\"onSubmit()\" [formGroup]=\"createMeetingForm\" class=\"form\">\r\n    <div class=\"modal-body\">\r\n        <div class=\"form-body\">\r\n            <div class=\"row\">\r\n                <div class=\"col-md-8\">\r\n                    <div class=\"form-group\">\r\n                        <label for=\"title\">{{'meetings.create.fields.title' | translate}}\r\n                            <span class=\"text-danger\">&nbsp;*</span></label>\r\n                        <div class=\"position-relative has-icon-left\">\r\n                            <input [ngClass]=\"{ 'is-invalid': isFormSubmitted && meetingControl.title.errors }\" class=\"form-control\" formControlName=\"title\" id=\"title\" placeholder=\"{{'meetings.create.placeholders.placeholder1' | translate}}\" type=\"text\"/>\r\n                            <div class=\"form-control-position\">\r\n                                <i aria-hidden=\"true\" class=\"fa fa-lock\"></i>\r\n                            </div>\r\n                            <div *ngIf=\"isFormSubmitted && meetingControl.title.errors\" class=\"invalid-feedback\">\r\n                                <div *ngIf=\"meetingControl.title.errors.required\">{{'meetings.create.error_messages.message1' | translate}}</div>\r\n                                <div *ngIf=\"meetingControl.title.errors.maxlength\">{{'meetings.create.error_messages.message2' | translate}}</div>\r\n                            </div>\r\n                        </div>\r\n                    </div>\r\n                </div>\r\n                <div *ngIf=\"loginUser\" class=\"col-md-4\">\r\n                    <div class=\"card shadow-none\">\r\n                        <div class=\"card-img text-center\">\r\n                            <img *ngIf=\"loginUser.avatar\" alt=\"{{loginUser.firstname}}\" class=\"img-sm rounded-circle\" src=\"{{apiUrl}}/uploads/profile/{{loginUser.avatar}}\">\r\n                            <img *ngIf=\"!loginUser.avatar\" alt=\"Profile\" class=\"img-sm rounded-circle\" src=\"../assets/img/profile_large.jpg\">\r\n                        </div>\r\n                        <div class=\"card-body text-center\">\r\n                            <label class=\"m-0\">{{loginUser.firstname}} {{loginUser.lastname}}</label>\r\n                        </div>\r\n                    </div>\r\n                </div>\r\n                <div class=\"col-md-6\">\r\n                    <div [ngClass]=\"{ 'is-invalid': isFormSubmitted && meetingControl.start_date.errors }\" class=\"form-group\">\r\n                        <label for=\"start_date\">{{'meetings.create.fields.start_date' | translate}}\r\n                            <span class=\"text-danger\">&nbsp;*</span></label>\r\n                        <div class=\"position-relative has-icon-left\">\r\n                            <owl-date-time #startDT></owl-date-time>\r\n                            <input (dateTimeChange)=\"startDateChange($event)\" [owlDateTimeTrigger]=\"startDT\" [owlDateTime]=\"startDT\" aria-describedby=\"inputGroupPrepend2\" class=\"form-control\" formControlName=\"start_date\" id=\"start_date\" placeholder=\"{{'meetings.create.placeholders.placeholder2' | translate}}\" type=\"text\"/>\r\n                            <div class=\"form-control-position\"><i class=\"ft-calendar\"></i></div>\r\n                        </div>\r\n                        <div *ngIf=\"isFormSubmitted && meetingControl.start_date.errors\" class=\"invalid-feedback\">\r\n                            <div *ngIf=\"meetingControl.start_date.errors.required\">{{'meetings.create.error_messages.message3' | translate}}</div>\r\n                        </div>\r\n                    </div>\r\n                </div>\r\n                <div class=\"col-md-6\">\r\n                    <div [ngClass]=\"{ 'is-invalid': isFormSubmitted && meetingControl.end_date.errors }\" class=\"form-group\">\r\n                        <label for=\"end_date\">{{'meetings.create.fields.end_date' | translate}}\r\n                            <span class=\"text-danger\">&nbsp;*</span></label>\r\n                        <div class=\"position-relative has-icon-left\">\r\n                            <owl-date-time #endDT></owl-date-time>\r\n                            <input [min]=\"createMeetingForm.get('start_date').value\" [owlDateTimeTrigger]=\"endDT\" [owlDateTime]=\"endDT\" aria-describedby=\"inputGroupPrepend3\" class=\"form-control\" formControlName=\"end_date\" id=\"end_date\" placeholder=\"{{'meetings.create.placeholders.placeholder3' | translate}}\" type=\"text\"/>\r\n                            <div class=\"form-control-position\"><i class=\"ft-calendar\"></i></div>\r\n                        </div>\r\n                        <div *ngIf=\"isFormSubmitted && meetingControl.end_date.errors\" class=\"invalid-feedback\">\r\n                            <div *ngIf=\"meetingControl.end_date.errors.required\">{{'meetings.create.error_messages.message4' | translate}}</div>\r\n                        </div>\r\n                    </div>\r\n                </div>\r\n                <div class=\"col-md-6\">\r\n                    <div class=\"form-group\">\r\n                        <label for=\"client_id\">{{'meetings.create.fields.client_name' | translate }}</label>\r\n                        <ng-select [items]=\"clients\" [searchable]=\"true\" [selectOnTab]=\"true\" bindLabel=\"firstname\" bindValue=\"id\" formControlName=\"client_id\" labelForId=\"client_id\" placeholder=\"{{'meetings.create.placeholders.placeholder6' | translate }}\">\r\n                            <ng-template let-item=\"item\" ng-option-tmp>\r\n                                {{item.firstname}} {{item.lastname}}\r\n                            </ng-template>\r\n                        </ng-select>\r\n                    </div>\r\n                </div>\r\n                <div class=\"col-md-6\">\r\n                    <div class=\"form-group\">\r\n                        <label for=\"location\">{{'meetings.create.fields.location' | translate}}</label>\r\n                        <input class=\"form-control\" formControlName=\"location\" id=\"location\" placeholder=\"{{'meetings.create.placeholders.placeholder5' | translate}}\" type=\"text\"/>\r\n                    </div>\r\n                </div>\r\n                <div class=\"col-md-12\">\r\n                    <div [ngClass]=\"{ 'is-invalid': isFormSubmitted && meetingControl.members.errors }\" class=\"form-group\">\r\n                        <label for=\"members\">{{'meetings.create.fields.peoples' | translate}}\r\n                            <span class=\"text-danger\">&nbsp;*</span></label>\r\n                        <ng-select [items]=\"users\" [multiple]=\"true\" [searchable]=\"true\" bindLabel=\"firstname\" bindValue=\"id\" formControlName=\"members\" placeholder=\"{{'meetings.create.placeholders.placeholder4' | translate}}\">\r\n                            <ng-template let-item=\"item\" ng-option-tmp>\r\n                                {{item.firstname}} {{item.lastname}}\r\n                            </ng-template>\r\n                        </ng-select>\r\n                        <div *ngIf=\"isFormSubmitted && meetingControl.members.errors\" class=\"invalid-feedback\">\r\n                            <div *ngIf=\"meetingControl.members.errors.required\">{{'meetings.create.error_messages.message5' | translate}}</div>\r\n                        </div>\r\n                    </div>\r\n                </div>\r\n                <div class=\"col-md-12\">\r\n                    <div class=\"form-group\">\r\n                        <label for=\"description\">{{'meetings.create.fields.description' | translate}}</label>\r\n                        <app-ngx-editor [placeholder]=\"''\" [spellcheck]=\"true\" formControlName=\"description\" height=\"100px\" id=\"description\" minHeight=\"50px\"></app-ngx-editor>\r\n                    </div>\r\n                </div>\r\n            </div>\r\n        </div>\r\n    </div>\r\n    <div class=\"modal-footer\">\r\n        <button (click)=\"onCancel()\" class=\"btn btn-cancel mb-0\" type=\"button\">{{'common.close' | translate}}</button>\r\n        <button class=\"btn btn-submit mb-0\" type=\"submit\">{{'common.create' | translate}}</button>\r\n    </div>\r\n</form>\r\n");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/modules/admin/meeting/components/edit-meeting-modal/edit-meeting-modal.component.html":
/*!*********************************************************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/modules/admin/meeting/components/edit-meeting-modal/edit-meeting-modal.component.html ***!
  \*********************************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<div class=\"modal-header\">\r\n    <h2 class=\"modal-title font-weight-normal\">\r\n        <i aria-hidden=\"true\" class=\"fa fa-group\"></i>&nbsp;{{'meetings.title' | translate}}</h2>\r\n    <button (click)=\"bsModalRef.hide()\" aria-label=\"Close\" class=\"close\" data-dismiss=\"modal\" type=\"button\">\r\n        <span aria-hidden=\"true\">&times;</span></button>\r\n</div>\r\n<form (ngSubmit)=\"onSubmit()\" *ngIf=\"isPageLoaded\" [formGroup]=\"editMeetingForm\" class=\"form\">\r\n    <div class=\"modal-body\">\r\n        <div class=\"form-body\">\r\n            <div class=\"row\">\r\n                <div class=\"col-md-8\">\r\n                    <div class=\"form-group\">\r\n                        <label for=\"title\">{{'meetings.create.fields.title' | translate}}\r\n                            <span class=\"text-danger\">&nbsp;*</span></label>\r\n                        <div class=\"position-relative has-icon-left\">\r\n                            <input [ngClass]=\"{ 'is-invalid': isFormSubmitted && meetingControl.title.errors }\" class=\"form-control\" formControlName=\"title\" id=\"title\" placeholder=\"{{'meetings.create.placeholders.placeholder1' | translate}}\" type=\"text\"/>\r\n                            <div class=\"form-control-position\">\r\n                                <i aria-hidden=\"true\" class=\"fa fa-lock\"></i>\r\n                            </div>\r\n                            <div *ngIf=\"isFormSubmitted && meetingControl.title.errors\" class=\"invalid-feedback\">\r\n                                <div *ngIf=\"meetingControl.title.errors.required\">{{'meetings.create.error_messages.message1' | translate}}</div>\r\n                                <div *ngIf=\"meetingControl.title.errors.maxlength\">{{'meetings.create.error_messages.message2' | translate}}</div>\r\n                            </div>\r\n                        </div>\r\n                    </div>\r\n                </div>\r\n                <div class=\"col-md-4\">\r\n                    <div class=\"card shadow-none\">\r\n                        <div class=\"card-img text-center\">\r\n                            <img *ngIf=\"meeting.avatar\" alt=\"{{meeting.firstname}}\" class=\"img-sm rounded-circle\" src=\"{{apiUrl}}/uploads/profile/{{meeting.avatar}}\">\r\n                            <img *ngIf=\"!meeting.avatar\" alt=\"Profile\" class=\"img-sm rounded-circle\" src=\"../assets/img/profile_large.jpg\">\r\n                        </div>\r\n                        <div class=\"card-body text-center\">\r\n                            <label class=\"m-0\">{{meeting.firstname}} {{meeting.lastname}}</label>\r\n                        </div>\r\n                    </div>\r\n                </div>\r\n                <div class=\"col-md-6\">\r\n                    <div [ngClass]=\"{ 'is-invalid': isFormSubmitted && meetingControl.start_date.errors }\" class=\"form-group\">\r\n                        <label for=\"start_date\">{{'meetings.create.fields.start_date' | translate}}\r\n                            <span class=\"text-danger\">&nbsp;*</span></label>\r\n                        <div class=\"position-relative has-icon-left\">\r\n                            <owl-date-time #startDT></owl-date-time>\r\n                            <input (dateTimeChange)=\"startDateChange($event)\" [owlDateTimeTrigger]=\"startDT\" [owlDateTime]=\"startDT\" aria-describedby=\"inputGroupPrepend2\" class=\"form-control\" formControlName=\"start_date\" id=\"start_date\" placeholder=\"{{'meetings.create.placeholders.placeholder2' | translate}}\" type=\"text\"/>\r\n                            <div class=\"form-control-position\"><i class=\"ft-calendar\"></i></div>\r\n                        </div>\r\n                        <div *ngIf=\"isFormSubmitted && meetingControl.start_date.errors\" class=\"invalid-feedback\">\r\n                            <div *ngIf=\"meetingControl.start_date.errors.required\">{{'meetings.create.error_messages.message3' | translate}}</div>\r\n                        </div>\r\n                    </div>\r\n                </div>\r\n                <div class=\"col-md-6\">\r\n                    <div [ngClass]=\"{ 'is-invalid': isFormSubmitted && meetingControl.end_date.errors }\" class=\"form-group\">\r\n                        <label for=\"end_date\">{{'meetings.create.fields.end_date' | translate}}\r\n                            <span class=\"text-danger\">&nbsp;*</span></label>\r\n                        <div class=\"position-relative has-icon-left\">\r\n                            <owl-date-time #endDT></owl-date-time>\r\n                            <input [min]=\"editMeetingForm.get('start_date').value\" [owlDateTimeTrigger]=\"endDT\" [owlDateTime]=\"endDT\" aria-describedby=\"inputGroupPrepend3\" class=\"form-control\" formControlName=\"end_date\" id=\"end_date\" placeholder=\"{{'meetings.create.placeholders.placeholder3' | translate}}\" type=\"text\"/>\r\n                            <div class=\"form-control-position\"><i class=\"ft-calendar\"></i></div>\r\n                        </div>\r\n                        <div *ngIf=\"isFormSubmitted && meetingControl.end_date.errors\" class=\"invalid-feedback\">\r\n                            <div *ngIf=\"meetingControl.end_date.errors.required\">{{'meetings.create.error_messages.message4' | translate}}</div>\r\n                        </div>\r\n                    </div>\r\n                </div>\r\n                <div class=\"col-md-6\">\r\n                    <div class=\"form-group\">\r\n                        <label for=\"client_id\">{{'meetings.create.fields.client_name' | translate }}</label>\r\n                        <ng-select [items]=\"clients\" [searchable]=\"true\" [selectOnTab]=\"true\" bindLabel=\"firstname\" bindValue=\"id\" formControlName=\"client_id\" labelForId=\"client_id\" placeholder=\"{{'meetings.create.placeholders.placeholder6' | translate }}\">\r\n                            <ng-template let-item=\"item\" ng-option-tmp>\r\n                                {{item.firstname}} {{item.lastname}}\r\n                            </ng-template>\r\n                        </ng-select>\r\n                    </div>\r\n                </div>\r\n                <div class=\"col-md-6\">\r\n                    <div class=\"form-group\">\r\n                        <label for=\"location\">{{'meetings.create.fields.location' | translate}}</label>\r\n                        <input class=\"form-control\" formControlName=\"location\" id=\"location\" placeholder=\"{{'meetings.create.placeholders.placeholder5' | translate}}\" type=\"text\"/>\r\n                    </div>\r\n                </div>\r\n                <div class=\"col-md-6\">\r\n                    <div [ngClass]=\"{ 'is-invalid': isFormSubmitted && meetingControl.members.errors }\" class=\"form-group\">\r\n                        <label for=\"members\">{{'meetings.create.fields.peoples' | translate}}\r\n                            <span class=\"text-danger\">&nbsp;*</span></label>\r\n                        <ng-select [items]=\"users\" [multiple]=\"true\" [searchable]=\"true\" bindLabel=\"firstname\" bindValue=\"id\" formControlName=\"members\" placeholder=\"{{'meetings.create.placeholders.placeholder4' | translate}}\">\r\n                            <ng-template let-item=\"item\" ng-option-tmp>\r\n                                {{item.firstname}} {{item.lastname}}\r\n                            </ng-template>\r\n                        </ng-select>\r\n                        <div *ngIf=\"isFormSubmitted && meetingControl.members.errors\" class=\"invalid-feedback\">\r\n                            <div *ngIf=\"meetingControl.members.errors.required\">{{'meetings.create.error_messages.message5' | translate}}</div>\r\n                        </div>\r\n                    </div>\r\n                </div>\r\n                <div class=\"col-md-6\">\r\n                    <div [ngClass]=\"{ 'is-invalid': isFormSubmitted && meetingControl.status.errors }\" class=\"form-group\">\r\n                        <label for=\"status\">{{'meetings.create.fields.status' | translate }}&nbsp;<span class=\"text-danger\">*</span></label>\r\n                        <ng-select [items]=\"('meetings.status' | translate)\" [searchable]=\"true\" [selectOnTab]=\"true\" bindLabel=\"label\" bindValue=\"id\" formControlName=\"status\" labelForId=\"status\" placeholder=\"{{'meetings.create.placeholders.placeholder7' | translate }}\"></ng-select>\r\n                        <div *ngIf=\"isFormSubmitted && meetingControl.status.errors\" class=\"invalid-feedback\">\r\n                            <div *ngIf=\"meetingControl.status.errors.required\">{{'meetings.create.error_messages.message7' | translate }}</div>\r\n                        </div>\r\n                    </div>\r\n                </div>\r\n                <div class=\"col-md-12\">\r\n                    <div class=\"form-group\">\r\n                        <label for=\"description\">{{'meetings.create.fields.description' | translate}}</label>\r\n                        <app-ngx-editor [placeholder]=\"''\" [spellcheck]=\"true\" formControlName=\"description\" height=\"100px\" id=\"description\" minHeight=\"50px\"></app-ngx-editor>\r\n                    </div>\r\n                </div>\r\n            </div>\r\n        </div>\r\n    </div>\r\n    <div class=\"modal-footer\">\r\n        <button (click)=\"onCancel()\" class=\"btn btn-cancel mb-0\" type=\"button\">{{'common.close' | translate}}</button>\r\n        <button class=\"btn btn-submit mb-0\" type=\"submit\">{{'common.update' | translate}}</button>\r\n    </div>\r\n</form>\r\n");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/modules/admin/meeting/components/meeting-details/meeting-details.component.html":
/*!***************************************************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/modules/admin/meeting/components/meeting-details/meeting-details.component.html ***!
  \***************************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<div class=\"card-content\">\r\n    <div class=\" border-bottom\">\r\n        <div class=\"d-flex justify-content-between\">\r\n            <div class=\" task-name d-lg-flex\">\r\n                <h4 class=\"task-id\"><span>#{{meeting.generated_id}}</span></h4>\r\n                <p class=\"task-title ml-lg-2\">{{meeting.title}}</p>\r\n            </div>\r\n            <div class=\"task-action mr-3\">\r\n                <div class=\"status-dropdown\">\r\n                    <div *ngxPermissionsOnly=\"['admin', 'super_admin', 'meetings_edit']; else elseBlock1; then thenBlock1\"></div>\r\n                    <ng-template #thenBlock1>\r\n                        <div class=\"btn-group\" dropdown>\r\n                            <button aria-controls=\"dropdown-basic\" class=\"btn dropdown-toggle select-btn-lg\" dropdownToggle id=\"button-basic\" type=\"button\">{{getTranslateStatus(meeting.status) | translate}}&nbsp;<span class=\"caret\"></span>\r\n                            </button>\r\n                            <ul *dropdownMenu aria-labelledby=\"button-basic\" class=\"dropdown-menu animated fadeIn\" id=\"dropdown-basic\" role=\"menu\">\r\n                                <li *ngFor=\"let status of ('meetings.status' | translate)\" role=\"menuitem\">\r\n                                    <a (click)=\"changeMeetingStatus([meeting.id], status);meeting.status = status.id\" [ngClass]=\"{'active': meeting.status == status.id}\" class=\"dropdown-item btn btn-sm {{status.class}}\">{{status.label}}</a>\r\n                                </li>\r\n                            </ul>\r\n                        </div>\r\n                    </ng-template>\r\n                    <ng-template #elseBlock1>\r\n                        <ng-container *ngFor=\"let status of ('meetings.status' | translate)\">\r\n                            <div class=\"budges-status\">\r\n                                <span *ngIf=\"status.id == meeting.status\" class=\"{{status.class}}\">{{status.label}}</span>\r\n                            </div>\r\n                        </ng-container>\r\n                    </ng-template>\r\n                </div>\r\n            </div>\r\n        </div>\r\n    </div>\r\n    <div class=\"card-body\">\r\n        <form class=\"form-body overflow-hidden mt-3\">\r\n            <!-- Detail fields -->\r\n            <div class=\"col-lg-12 \">\r\n                <div class=\"row\">\r\n                    <div class=\"col-lg-4 col-md-6 mb-3\">\r\n                        <label>{{'meetings.columns.organizer' | translate }}</label>\r\n                        <div class=\"people-lists\">\r\n                            <a [routerLink]=\"['/users/profile', meeting.organizer_id]\" class=\"btn btn-profile-info rounded-circle text-dark\" placement=\"top\" tooltip=\"{{meeting.user.firstname}} {{meeting.user.lastname}}\">\r\n                                <img *ngIf=\"meeting.user.avatar\" alt=\"Profile\" class=\"img-sm rounded-circle\" src=\"{{apiUrl}}/uploads/profile/{{meeting.user.avatar}}\"/>\r\n                                <img *ngIf=\"!meeting.user.avatar\" alt=\"Profile\" class=\"img-sm rounded-circle\" src=\"../assets/img/profile_small.jpg\"/>\r\n                            </a>\r\n                        </div>\r\n                    </div>\r\n                    <div class=\"col-lg-4 col-md-6 mb-3\">\r\n                        <label>{{'meetings.create.fields.peoples' | translate }}</label>\r\n                        <div class=\"people-lists\">\r\n                            <ng-container *ngFor=\"let member of meeting.members index as i; odd as isOdd; even as isEven\">\r\n                                <a *ngIf=\"member.id != meeting.organizer_id && member.id != meeting.client_id\" [ngClass]=\"{'btn-profile-info popover-item': isOdd, 'btn-profile-danger': isEven, 'popover-item': i!=0}\" [routerLink]=\"['/users/profile', member.id]\" class=\"btn rounded-circle text-dark\" placement=\"top\" tooltip=\"{{member.firstname}} {{member.lastname}}\">\r\n                                    <img *ngIf=\"member.avatar\" alt=\"Profile\" class=\"img-sm rounded-circle\" src=\"{{apiUrl}}/uploads/profile/{{member.avatar}}\"/>\r\n                                    <img *ngIf=\"!member.avatar\" alt=\"Profile\" class=\"img-sm rounded-circle\" src=\"../assets/img/profile_small.jpg\"/>\r\n                                </a>\r\n                            </ng-container>\r\n                        </div>\r\n                    </div>\r\n                    <div class=\"col-lg-4 col-md-6 mb-3\">\r\n                        <label>{{'meetings.create.fields.client_name' | translate }}</label>\r\n                        <div class=\"detail-inline\">\r\n                            <ng-container *ngIf=\"meeting.client_id; else elseBlock4\">\r\n                                {{meeting.client.firstname}} {{meeting.client.lastname}}\r\n                            </ng-container>\r\n                            <ng-template #elseBlock4>-</ng-template>\r\n                        </div>\r\n                    </div>\r\n                    <div class=\"col-lg-4 col-md-6 mb-3\">\r\n                        <label>{{'meetings.create.fields.start_date' | translate }}</label>\r\n                        <div class=\"detail-inline\">{{meeting.start_date | dateTimeFormatFilter: loginUser.settings.date_time_format}}</div>\r\n                    </div>\r\n                    <div class=\"col-lg-4 col-md-6 mb-3\">\r\n                        <label>{{'meetings.create.fields.end_date' | translate }}</label>\r\n                        <div class=\"detail-inline\">{{meeting.end_date | dateTimeFormatFilter: loginUser.settings.date_time_format}}</div>\r\n                    </div>\r\n                    <div class=\"col-lg-4 col-md-6 mb-3\">\r\n                        <label>{{'common.hours' | translate }}</label>\r\n                        <div class=\"detail-inline\">{{meeting.hour_time}}</div>\r\n                    </div>\r\n                    <div class=\"col-lg-4 col-md-6 mb-3\">\r\n                        <label>{{'meetings.create.fields.location' | translate }}</label>\r\n                        <div class=\"detail-inline\">{{meeting.location}}</div>\r\n                    </div>\r\n                    <div class=\"col-lg-4 col-md-6 mb-3\">\r\n                        <label>{{'common.created' | translate}}</label>\r\n                        <div class=\"detail-inline\">{{meeting.created_at | dateTimeFormatFilter : loginUser.settings.date_time_format}}</div>\r\n                    </div>\r\n                    <div class=\"col-lg-4 col-md-6 mb-3\">\r\n                        <label>{{'common.updated' | translate}}</label>\r\n                        <div class=\"detail-inline\">{{meeting.updated_at | dateTimeFormatFilter : loginUser.settings.date_time_format}}</div>\r\n                    </div>\r\n                    <div class=\"col-lg-4 col-md-6 mb-3\"></div>\r\n                    <div class=\"border-bottom\"></div>\r\n                    <!-- Description field -->\r\n                    <div class=\"col-lg-12 col-md-12 col-xs-12 col-sm-12 mt-3 mb-3 description-detail \">\r\n                        <h4 class=\"sub-title\"><span>{{'meetings.details.title1' | translate}}</span></h4>\r\n                        <div class=\"detail-inline\">\r\n                            <p [innerHtml]=\"meeting.description\"></p>\r\n                        </div>\r\n                    </div>\r\n                    <div class=\"border-bottom\"></div>\r\n                    <!-- Meeting timesheet -->\r\n                    <div class=\"col-lg-12 col-md-12 col-xs-12 col-sm-12\">\r\n                        <app-timesheet-list [apiUrl]=\"apiUrl\" [loginUser]=\"loginUser\" [module_id]=\"'5'\" [module_related_id]=\"meeting.id\" [project_id]=\"''\"></app-timesheet-list>\r\n                    </div>\r\n                </div>\r\n            </div>\r\n        </form>\r\n    </div>\r\n</div>\r\n");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/modules/admin/meeting/pages/meeting-detail/meeting-detail.component.html":
/*!********************************************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/modules/admin/meeting/pages/meeting-detail/meeting-detail.component.html ***!
  \********************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<section class=\"detail-page\">\r\n    <div *ngIf=\"isPageLoaded\" class=\"card\">\r\n        <app-meeting-details [apiUrl]=\"apiUrl\" [loginUser]=\"loginUser\" [meeting]=\"meeting\"></app-meeting-details>\r\n    </div>\r\n</section>\r\n");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/modules/admin/meeting/pages/meeting/meeting.component.html":
/*!******************************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/modules/admin/meeting/pages/meeting/meeting.component.html ***!
  \******************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<section class=\"hide_empty_message\">\r\n    <div class=\"row\">\r\n        <div class=\"col-sm-12\">\r\n            <div class=\"card pl-2 pr-2\">\r\n                <div class=\"card-header pl-0 pr-0 border-bottom\">\r\n                    <h4 class=\"main-title mt-2\"><span>{{'meetings.title' | translate}}</span></h4>\r\n                    <button (click)=\"openMeetingCreateModal()\" *ngxPermissionsOnly=\"['admin', 'super_admin', 'meetings_create']\" class=\"btn btn-create mb-0\" tooltip=\"{{'common.create' | translate}}\">\r\n                        <i class=\"fa fa-plus\"></i></button>\r\n                </div>\r\n                <div class=\"card-content pt-3 pb-3\">\r\n                    <div class=\"card-body\">\r\n                        <!-- Filter buttons -->\r\n                        <div *ngIf=\"isPageLoaded\" class=\"row btn-filters mb-3\">\r\n                            <div class=\"col-sm-12\">\r\n                                <button (click)=\"filterByStatus(1)\" [ngClass]=\"{ 'active': statusfilterId == 1 }\" class=\"btn btn-raised open\" type=\"button\">\r\n                                    <p>{{'common.status.open' | translate}}</p>\r\n                                    <span class=\"badge badge-light\">{{countStatus.open}}</span>\r\n                                </button>\r\n                                <button (click)=\"filterByStatus(2)\" [ngClass]=\"{ 'active': statusfilterId ==2  }\" class=\"btn btn-raised in_progress\" type=\"button\">\r\n                                    <p>{{'common.status.in_progress' | translate}}</p>\r\n                                    <span class=\"badge badge-light\">{{countStatus.in_progress}}</span>\r\n                                </button>\r\n                                <button (click)=\"filterByStatus(3)\" [ngClass]=\"{ 'active': statusfilterId == 3 }\" class=\"btn btn-raised cancel\" type=\"button\">\r\n                                    <p>{{'common.status.cancel' | translate}}</p>\r\n                                    <span class=\"badge badge-light\">{{countStatus.cancel}}</span>\r\n                                </button>\r\n                                <button (click)=\"filterByStatus(4)\" [ngClass]=\"{ 'active': statusfilterId == 4 }\" class=\"btn btn-raised completed\" type=\"button\">\r\n                                    <p>{{'common.status.completed' | translate}}</p>\r\n                                    <span class=\"badge badge-light\">{{countStatus.completed}}</span>\r\n                                </button>\r\n                                <button [ngClass]=\"{ 'active': statusfilterId == 0 }\" [routerLink]=\"['/meetings']\" class=\"btn btn-raised btn-secondary\" type=\"button\">\r\n                                    <p>{{'common.status.total' | translate}}</p>\r\n                                    <span class=\"badge badge-light\">{{countStatus.all}}</span>\r\n                                </button>\r\n                            </div>\r\n                        </div>\r\n                        <!-- Meeting list datatable -->\r\n                        <div class=\"table-responsive-xs table-responsive-sm table-responsive-md table-responsive-lg table-responsive-xl\">\r\n                            <table [dtOptions]=\"dtOptions\" [dtTrigger]=\"dtTrigger\" class=\"table table-bordered table-hover b4-datatable\" datatable id=\"meeting_table\" width=\"100%\">\r\n                                <thead>\r\n                                <tr>\r\n                                    <th>{{'meetings.columns.id' | translate}}</th>\r\n                                    <th>{{'meetings.columns.title' | translate}}</th>\r\n                                    <th>{{'meetings.columns.organizer' | translate}}</th>\r\n                                    <th>{{'meetings.columns.peoples' | translate}}</th>\r\n                                    <th>{{'meetings.columns.start' | translate}}</th>\r\n                                    <th>{{'meetings.columns.end' | translate}}</th>\r\n                                    <th>{{'meetings.columns.hours' | translate}}</th>\r\n                                    <th>{{'meetings.columns.status' | translate}}</th>\r\n                                    <th>{{'meetings.columns.actions' | translate}}</th>\r\n                                </tr>\r\n                                </thead>\r\n                                <tbody *ngIf=\"meetings?.length != 0\">\r\n                                <tr *ngFor=\"let meeting of meetings; index as i\">\r\n                                    <td>\r\n                                        <ng-container *ngxPermissionsOnly=\"['admin', 'super_admin', 'meetings_view'] else elseBlock1;\">\r\n                                            <a [routerLink]=\"['/meetings/detail', meeting.id]\" tooltip=\"{{'common.view' | translate}}\">{{meeting.generated_id}}</a>\r\n                                        </ng-container>\r\n                                        <ng-template #elseBlock1>{{meeting.generated_id}}</ng-template>\r\n                                    </td>\r\n                                    <td>\r\n                                        <div *ngxPermissionsOnly=\"['admin', 'super_admin', 'meetings_edit']; else elseBlock2; then thenBlock\"></div>\r\n                                        <ng-template #elseBlock2>\r\n                                            {{meeting.title}}\r\n                                        </ng-template>\r\n                                        <ng-template #thenBlock>\r\n                                            <inline-edit-input (updateValue)=\"saveMeetingDetail(i, 'title', $event);\" [elementFor]=\"'meetings.inline_edit.title' | translate\" [fieldValue]=\"meeting.title\" [isRequired]=\"'true'\" [maxLength]=\"50\" [name]=\"'title'\" [type]=\"'text'\"></inline-edit-input>\r\n                                        </ng-template>\r\n                                    </td>\r\n                                    <td class=\"people-lists\">\r\n                                        <a [routerLink]=\"['/users/profile', meeting.organizer_id]\" class=\"btn btn-profile-info rounded-circle text-dark\" placement=\"top\" tooltip=\"{{meeting.firstname}} {{meeting.lastname}}\">\r\n                                            <img *ngIf=\"meeting.avatar\" alt=\"Profile\" class=\"img-sm rounded-circle\" src=\"{{apiUrl}}/uploads/profile/{{meeting.avatar}}\"/>\r\n                                            <img *ngIf=\"!meeting.avatar\" alt=\"Profile\" class=\"img-sm rounded-circle\" src=\"../assets/img/profile_small.jpg\"/>\r\n                                        </a>\r\n                                    </td>\r\n                                    <td class=\"people-lists\">\r\n                                        <ng-container *ngFor=\"let member of meeting.members index as i; odd as isOdd; even as isEven\">\r\n                                            <a *ngIf=\"member.member_id != meeting.organizer_id\" [routerLink]=\"['/users/profile', member.member_id]\" class=\"btn rounded-circle popover-item text-dark btn-profile-info\" placement=\"top\" tooltip=\"{{member.firstname}} {{member.lastname}}\">\r\n                                                <img *ngIf=\"member.avatar\" alt=\"Profile\" class=\"img-sm rounded-circle\" src=\"{{apiUrl}}/uploads/profile/{{member.avatar}}\"/>\r\n                                                <img *ngIf=\"!member.avatar\" alt=\"Profile\" class=\"img-sm rounded-circle\" src=\"../assets/img/profile_small.jpg\"/>\r\n                                            </a>\r\n                                        </ng-container>\r\n                                    </td>\r\n                                    <td>{{meeting.start_date | dateTimeFormatFilter: loginUser.settings.date_time_format }}</td>\r\n                                    <td>{{meeting.end_date | dateTimeFormatFilter: loginUser.settings.date_time_format }}</td>\r\n                                    <td>{{meeting.hour_time}} </td>\r\n                                    <td class=\"status-dropdown\">\r\n                                        <div *ngxPermissionsOnly=\"['admin', 'super_admin', 'meetings_edit']; else elseBlock1; then thenBlock1\"></div>\r\n                                        <ng-template #thenBlock1>\r\n                                            <div class=\"btn-group\" dropdown>\r\n                                                <button aria-controls=\"dropdown-basic\" class=\"btn dropdown-toggle select-btn-lg\" dropdownToggle id=\"button-basic\" type=\"button\">{{getTranslateStatus(meeting.status) | translate}}&nbsp;<span class=\"caret\"></span>\r\n                                                </button>\r\n                                                <ul *dropdownMenu aria-labelledby=\"button-basic\" class=\"dropdown-menu animated fadeIn\" id=\"dropdown-basic\" role=\"menu\">\r\n                                                    <li *ngFor=\"let status of ('meetings.status' | translate)\" role=\"menuitem\">\r\n                                                        <a (click)=\"changeMeetingStatus([meeting.id], status);meeting.status = status.id\" [ngClass]=\"{'active': meeting.status == status.id}\" class=\"dropdown-item btn btn-sm {{status.class}}\">{{status.label}}</a>\r\n                                                    </li>\r\n                                                </ul>\r\n                                            </div>\r\n                                        </ng-template>\r\n                                        <ng-template #elseBlock1>\r\n                                            <ng-container *ngFor=\"let status of ('meetings.status' | translate)\">\r\n                                                <div class=\"budges-status\">\r\n                                                    <span *ngIf=\"status.id == meeting.status\" class=\"{{status.class}}\">{{status.label}}</span>\r\n                                                </div>\r\n                                            </ng-container>\r\n                                        </ng-template>\r\n                                    </td>\r\n                                    <td class=\"actions-dropdown\">\r\n                                        <div class=\"btn-group\" dropdown>\r\n                                            <button aria-controls=\"dropdown-basic-1\" class=\"dropdown-toggle btn-action\" dropdownToggle id=\"button-basic-1\" type=\"button\">\r\n                                                <i class=\"fa fa-ellipsis-v\"></i></button>\r\n                                            <ul *dropdownMenu aria-labelledby=\"button-basic-1\" class=\"dropdown-menu animated fadeIn\" id=\"dropdown-basic-1\" role=\"menu\">\r\n                                                <li *ngxPermissionsOnly=\"['admin', 'super_admin', 'meetings_edit']\" role=\"menuitem\">\r\n                                                    <a (click)=\"openMeetingEditModal(meeting)\" class=\"dropdown-item btn btn-edit btn-raised\" tooltip=\"{{'common.edit' | translate}}\"><i class=\"fa fa-pencil-square-o\"></i></a>\r\n                                                </li>\r\n                                                <li *ngxPermissionsOnly=\"['admin', 'super_admin', 'meetings_delete']\" role=\"menuitem\">\r\n                                                    <a (click)=\"removeMeeting(meeting.id)\" class=\"dropdown-item btn btn-delete btn-raised\" tooltip=\"{{'common.delete' | translate}}\"><i class=\"fa fa-trash-o\"></i></a>\r\n                                                </li>\r\n                                            </ul>\r\n                                        </div>\r\n                                    </td>\r\n                                </tr>\r\n                                </tbody>\r\n                                <tfoot *ngIf=\"meetings?.length == 0\" class=\"tfoot_dt\">\r\n                                <tr>\r\n                                    <td class=\"no-data-available text-center\" colspan=\"9\">{{'common.datatable.sEmptyTable' | translate}}</td>\r\n                                </tr>\r\n                                </tfoot>\r\n                            </table>\r\n                        </div>\r\n                    </div>\r\n                </div>\r\n            </div>\r\n        </div>\r\n    </div>\r\n</section>\r\n");

/***/ }),

/***/ "./src/app/modules/admin/meeting/components/create-meeting-modal/create-meeting-modal.component.scss":
/*!***********************************************************************************************************!*\
  !*** ./src/app/modules/admin/meeting/components/create-meeting-modal/create-meeting-modal.component.scss ***!
  \***********************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL21vZHVsZXMvYWRtaW4vbWVldGluZy9jb21wb25lbnRzL2NyZWF0ZS1tZWV0aW5nLW1vZGFsL2NyZWF0ZS1tZWV0aW5nLW1vZGFsLmNvbXBvbmVudC5zY3NzIn0= */");

/***/ }),

/***/ "./src/app/modules/admin/meeting/components/create-meeting-modal/create-meeting-modal.component.ts":
/*!*********************************************************************************************************!*\
  !*** ./src/app/modules/admin/meeting/components/create-meeting-modal/create-meeting-modal.component.ts ***!
  \*********************************************************************************************************/
/*! exports provided: CreateMeetingModalComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CreateMeetingModalComponent", function() { return CreateMeetingModalComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var ngx_bootstrap_modal__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ngx-bootstrap/modal */ "./node_modules/ngx-bootstrap/modal/fesm5/ngx-bootstrap-modal.js");
/* harmony import */ var ngx_toastr__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ngx-toastr */ "./node_modules/ngx-toastr/fesm5/ngx-toastr.js");
/* harmony import */ var _ngx_translate_core__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @ngx-translate/core */ "./node_modules/@ngx-translate/core/fesm5/ngx-translate-core.js");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! rxjs */ "./node_modules/rxjs/_esm5/index.js");
/* harmony import */ var _core_services_authentication_service__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../../../../../core/services/authentication.service */ "./src/app/core/services/authentication.service.ts");
/* harmony import */ var _core_services_user_service__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../../../../../core/services/user.service */ "./src/app/core/services/user.service.ts");
/* harmony import */ var _core_services_client_service__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../../../../../core/services/client.service */ "./src/app/core/services/client.service.ts");
/* harmony import */ var _core_services_meeting_service__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ../../../../../core/services/meeting.service */ "./src/app/core/services/meeting.service.ts");
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ../../../../../../environments/environment */ "./src/environments/environment.ts");
/* harmony import */ var moment__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! moment */ "./node_modules/moment/moment.js");
/* harmony import */ var moment__WEBPACK_IMPORTED_MODULE_12___default = /*#__PURE__*/__webpack_require__.n(moment__WEBPACK_IMPORTED_MODULE_12__);













var CreateMeetingModalComponent = /** @class */ (function () {
    function CreateMeetingModalComponent(translate, bsModalRef, formBuilder, toastr, userService, clientService, meetingService, authenticationService) {
        var _this = this;
        this.translate = translate;
        this.bsModalRef = bsModalRef;
        this.formBuilder = formBuilder;
        this.toastr = toastr;
        this.userService = userService;
        this.clientService = clientService;
        this.meetingService = meetingService;
        this.authenticationService = authenticationService;
        this.event = new _angular_core__WEBPACK_IMPORTED_MODULE_1__["EventEmitter"]();
        this.isFormSubmitted = false;
        this.isPageLoaded = false;
        this.users = [];
        this.clients = [];
        this.datepickerConfig = {
            dateInputFormat: 'YYYY-MM-DD',
            containerClass: 'theme-red'
        };
        this.apiUrl = _environments_environment__WEBPACK_IMPORTED_MODULE_11__["environment"].apiUrl;
        this.authenticationService.loginUser.subscribe(function (x) { return _this.loginUser = x; });
    }
    Object.defineProperty(CreateMeetingModalComponent.prototype, "meetingControl", {
        get: function () {
            return this.createMeetingForm.controls;
        },
        enumerable: true,
        configurable: true
    });
    CreateMeetingModalComponent.prototype.ngOnInit = function () {
        this.onClose = new rxjs__WEBPACK_IMPORTED_MODULE_6__["Subject"]();
        this.getUsers();
        this.getClients();
        this.loadForms();
    };
    CreateMeetingModalComponent.prototype.getUsers = function () {
        var _this = this;
        this.userService.getAll().subscribe(function (data) {
            _this.users = data;
            _this.isPageLoaded = true;
        });
    };
    CreateMeetingModalComponent.prototype.getClients = function () {
        var _this = this;
        this.clientService.getAll().subscribe(function (data) {
            _this.clients = data;
        });
    };
    CreateMeetingModalComponent.prototype.loadForms = function () {
        this.createMeetingForm = this.formBuilder.group({
            organizer_id: [null],
            title: [null, [_angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required, _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].maxLength(255)]],
            description: [''],
            members: [null, _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required],
            client_id: [null],
            start_date: [null, _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required],
            end_date: [null, _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required],
            location: ['']
        });
    };
    CreateMeetingModalComponent.prototype.startDateChange = function (start_date) {
        this.createMeetingForm.patchValue({ end_date: new Date(start_date.value) });
    };
    CreateMeetingModalComponent.prototype.onSubmit = function () {
        var _this = this;
        this.isFormSubmitted = true;
        if (this.createMeetingForm.invalid) {
            return;
        }
        this.createMeetingForm.value.start_date = moment__WEBPACK_IMPORTED_MODULE_12__(this.createMeetingForm.value.start_date).format('YYYY-MM-DD HH:mm:ss');
        this.createMeetingForm.value.end_date = moment__WEBPACK_IMPORTED_MODULE_12__(this.createMeetingForm.value.end_date).format('YYYY-MM-DD HH:mm:ss');
        // --
        // Check dates
        if ((this.createMeetingForm.value.start_date == this.createMeetingForm.value.end_date) || (this.createMeetingForm.value.start_date > this.createMeetingForm.value.end_date)) {
            this.toastr.error(this.translate.instant('meetings.create.error_messages.message6'), this.translate.instant('meetings.title'));
            return false;
        }
        this.meetingService.create(this.createMeetingForm.value)
            .subscribe(function (data) {
            _this.toastr.success(_this.translate.instant('meetings.messages.create'), _this.translate.instant('meetings.title'));
            _this.event.emit({ data: true });
            _this.onCancel();
        }, function (error) {
            _this.event.emit({ data: true });
            _this.onCancel();
        });
    };
    CreateMeetingModalComponent.prototype.onCancel = function () {
        this.onClose.next(false);
        this.bsModalRef.hide();
    };
    CreateMeetingModalComponent.ctorParameters = function () { return [
        { type: _ngx_translate_core__WEBPACK_IMPORTED_MODULE_5__["TranslateService"] },
        { type: ngx_bootstrap_modal__WEBPACK_IMPORTED_MODULE_3__["BsModalRef"] },
        { type: _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormBuilder"] },
        { type: ngx_toastr__WEBPACK_IMPORTED_MODULE_4__["ToastrService"] },
        { type: _core_services_user_service__WEBPACK_IMPORTED_MODULE_8__["UserService"] },
        { type: _core_services_client_service__WEBPACK_IMPORTED_MODULE_9__["ClientService"] },
        { type: _core_services_meeting_service__WEBPACK_IMPORTED_MODULE_10__["MeetingService"] },
        { type: _core_services_authentication_service__WEBPACK_IMPORTED_MODULE_7__["AuthenticationService"] }
    ]; };
    CreateMeetingModalComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-create-meeting-modal',
            template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./create-meeting-modal.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/modules/admin/meeting/components/create-meeting-modal/create-meeting-modal.component.html")).default,
            styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./create-meeting-modal.component.scss */ "./src/app/modules/admin/meeting/components/create-meeting-modal/create-meeting-modal.component.scss")).default]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_ngx_translate_core__WEBPACK_IMPORTED_MODULE_5__["TranslateService"],
            ngx_bootstrap_modal__WEBPACK_IMPORTED_MODULE_3__["BsModalRef"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormBuilder"],
            ngx_toastr__WEBPACK_IMPORTED_MODULE_4__["ToastrService"],
            _core_services_user_service__WEBPACK_IMPORTED_MODULE_8__["UserService"],
            _core_services_client_service__WEBPACK_IMPORTED_MODULE_9__["ClientService"],
            _core_services_meeting_service__WEBPACK_IMPORTED_MODULE_10__["MeetingService"],
            _core_services_authentication_service__WEBPACK_IMPORTED_MODULE_7__["AuthenticationService"]])
    ], CreateMeetingModalComponent);
    return CreateMeetingModalComponent;
}());



/***/ }),

/***/ "./src/app/modules/admin/meeting/components/edit-meeting-modal/edit-meeting-modal.component.scss":
/*!*******************************************************************************************************!*\
  !*** ./src/app/modules/admin/meeting/components/edit-meeting-modal/edit-meeting-modal.component.scss ***!
  \*******************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL21vZHVsZXMvYWRtaW4vbWVldGluZy9jb21wb25lbnRzL2VkaXQtbWVldGluZy1tb2RhbC9lZGl0LW1lZXRpbmctbW9kYWwuY29tcG9uZW50LnNjc3MifQ== */");

/***/ }),

/***/ "./src/app/modules/admin/meeting/components/edit-meeting-modal/edit-meeting-modal.component.ts":
/*!*****************************************************************************************************!*\
  !*** ./src/app/modules/admin/meeting/components/edit-meeting-modal/edit-meeting-modal.component.ts ***!
  \*****************************************************************************************************/
/*! exports provided: EditMeetingModalComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "EditMeetingModalComponent", function() { return EditMeetingModalComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var ngx_bootstrap_modal__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ngx-bootstrap/modal */ "./node_modules/ngx-bootstrap/modal/fesm5/ngx-bootstrap-modal.js");
/* harmony import */ var ngx_toastr__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ngx-toastr */ "./node_modules/ngx-toastr/fesm5/ngx-toastr.js");
/* harmony import */ var _ngx_translate_core__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @ngx-translate/core */ "./node_modules/@ngx-translate/core/fesm5/ngx-translate-core.js");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! rxjs */ "./node_modules/rxjs/_esm5/index.js");
/* harmony import */ var _core_services_user_service__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../../../../../core/services/user.service */ "./src/app/core/services/user.service.ts");
/* harmony import */ var _core_services_client_service__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../../../../../core/services/client.service */ "./src/app/core/services/client.service.ts");
/* harmony import */ var _core_services_meeting_service__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../../../../../core/services/meeting.service */ "./src/app/core/services/meeting.service.ts");
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ../../../../../../environments/environment */ "./src/environments/environment.ts");
/* harmony import */ var moment__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! moment */ "./node_modules/moment/moment.js");
/* harmony import */ var moment__WEBPACK_IMPORTED_MODULE_11___default = /*#__PURE__*/__webpack_require__.n(moment__WEBPACK_IMPORTED_MODULE_11__);












var EditMeetingModalComponent = /** @class */ (function () {
    function EditMeetingModalComponent(translate, bsModalRef, formBuilder, toastr, userService, clientService, meetingService) {
        this.translate = translate;
        this.bsModalRef = bsModalRef;
        this.formBuilder = formBuilder;
        this.toastr = toastr;
        this.userService = userService;
        this.clientService = clientService;
        this.meetingService = meetingService;
        this.event = new _angular_core__WEBPACK_IMPORTED_MODULE_1__["EventEmitter"]();
        this.isFormSubmitted = false;
        this.isPageLoaded = false;
        this.users = [];
        this.clients = [];
        this.teamMembers = [];
        this.datepickerConfig = {
            dateInputFormat: 'YYYY-MM-DD',
            containerClass: 'theme-red'
        };
        this.apiUrl = _environments_environment__WEBPACK_IMPORTED_MODULE_10__["environment"].apiUrl;
    }
    Object.defineProperty(EditMeetingModalComponent.prototype, "meetingControl", {
        get: function () {
            return this.editMeetingForm.controls;
        },
        enumerable: true,
        configurable: true
    });
    EditMeetingModalComponent.prototype.ngOnInit = function () {
        this.onClose = new rxjs__WEBPACK_IMPORTED_MODULE_6__["Subject"]();
        this.getUsers();
        this.getClients();
    };
    EditMeetingModalComponent.prototype.getUsers = function () {
        var _this = this;
        this.userService.getAll().subscribe(function (data) {
            _this.users = data;
            _this.loadForms();
        });
    };
    EditMeetingModalComponent.prototype.getClients = function () {
        var _this = this;
        this.clientService.getAll().subscribe(function (data) {
            _this.clients = data;
        });
    };
    EditMeetingModalComponent.prototype.loadForms = function () {
        for (var iRow in this.meeting.members) {
            if (!this.meeting.members[iRow].is_client && this.meeting.members[iRow].member_id != this.meeting.organizer_id) {
                this.teamMembers.push(this.meeting.members[iRow].member_id);
            }
        }
        this.editMeetingForm = this.formBuilder.group({
            id: [this.meeting.id],
            title: [this.meeting.title, [_angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required, _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].maxLength(255)]],
            organizer_id: [this.meeting.organizer_id],
            description: [this.meeting.description],
            members: [this.teamMembers, _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required],
            client_id: [this.meeting.client_id],
            start_date: [new Date(this.meeting.start_date), _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required],
            end_date: [new Date(this.meeting.end_date), _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required],
            location: [this.meeting.location],
            status: [this.meeting.status, _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required],
        });
        this.isPageLoaded = true;
    };
    EditMeetingModalComponent.prototype.startDateChange = function (start_date) {
        this.editMeetingForm.patchValue({ end_date: new Date(start_date.value) });
    };
    EditMeetingModalComponent.prototype.onSubmit = function () {
        var _this = this;
        this.isFormSubmitted = true;
        if (this.editMeetingForm.invalid) {
            return;
        }
        this.editMeetingForm.value.start_date = moment__WEBPACK_IMPORTED_MODULE_11__(this.editMeetingForm.value.start_date).format('YYYY-MM-DD HH:mm:ss');
        this.editMeetingForm.value.end_date = moment__WEBPACK_IMPORTED_MODULE_11__(this.editMeetingForm.value.end_date).format('YYYY-MM-DD HH:mm:ss');
        // --
        // Check dates
        if ((this.editMeetingForm.value.start_date == this.editMeetingForm.value.end_date) || (this.editMeetingForm.value.start_date > this.editMeetingForm.value.end_date)) {
            this.toastr.error(this.translate.instant('meetings.create.error_messages.message6'), this.translate.instant('meetings.title'));
            return false;
        }
        this.meetingService.update(this.editMeetingForm.value)
            .subscribe(function (data) {
            _this.toastr.success(_this.translate.instant('meetings.messages.update'), _this.translate.instant('meetings.title'));
            _this.event.emit({ data: true });
            _this.onCancel();
        }, function (error) {
            _this.event.emit({ data: true });
            _this.onCancel();
        });
    };
    EditMeetingModalComponent.prototype.onCancel = function () {
        this.onClose.next(false);
        this.bsModalRef.hide();
    };
    EditMeetingModalComponent.ctorParameters = function () { return [
        { type: _ngx_translate_core__WEBPACK_IMPORTED_MODULE_5__["TranslateService"] },
        { type: ngx_bootstrap_modal__WEBPACK_IMPORTED_MODULE_3__["BsModalRef"] },
        { type: _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormBuilder"] },
        { type: ngx_toastr__WEBPACK_IMPORTED_MODULE_4__["ToastrService"] },
        { type: _core_services_user_service__WEBPACK_IMPORTED_MODULE_7__["UserService"] },
        { type: _core_services_client_service__WEBPACK_IMPORTED_MODULE_8__["ClientService"] },
        { type: _core_services_meeting_service__WEBPACK_IMPORTED_MODULE_9__["MeetingService"] }
    ]; };
    EditMeetingModalComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-edit-meeting-modal',
            template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./edit-meeting-modal.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/modules/admin/meeting/components/edit-meeting-modal/edit-meeting-modal.component.html")).default,
            styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./edit-meeting-modal.component.scss */ "./src/app/modules/admin/meeting/components/edit-meeting-modal/edit-meeting-modal.component.scss")).default]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_ngx_translate_core__WEBPACK_IMPORTED_MODULE_5__["TranslateService"],
            ngx_bootstrap_modal__WEBPACK_IMPORTED_MODULE_3__["BsModalRef"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormBuilder"],
            ngx_toastr__WEBPACK_IMPORTED_MODULE_4__["ToastrService"],
            _core_services_user_service__WEBPACK_IMPORTED_MODULE_7__["UserService"],
            _core_services_client_service__WEBPACK_IMPORTED_MODULE_8__["ClientService"],
            _core_services_meeting_service__WEBPACK_IMPORTED_MODULE_9__["MeetingService"]])
    ], EditMeetingModalComponent);
    return EditMeetingModalComponent;
}());



/***/ }),

/***/ "./src/app/modules/admin/meeting/components/meeting-details/meeting-details.component.scss":
/*!*************************************************************************************************!*\
  !*** ./src/app/modules/admin/meeting/components/meeting-details/meeting-details.component.scss ***!
  \*************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL21vZHVsZXMvYWRtaW4vbWVldGluZy9jb21wb25lbnRzL21lZXRpbmctZGV0YWlscy9tZWV0aW5nLWRldGFpbHMuY29tcG9uZW50LnNjc3MifQ== */");

/***/ }),

/***/ "./src/app/modules/admin/meeting/components/meeting-details/meeting-details.component.ts":
/*!***********************************************************************************************!*\
  !*** ./src/app/modules/admin/meeting/components/meeting-details/meeting-details.component.ts ***!
  \***********************************************************************************************/
/*! exports provided: MeetingDetailsComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MeetingDetailsComponent", function() { return MeetingDetailsComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _ngx_translate_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @ngx-translate/core */ "./node_modules/@ngx-translate/core/fesm5/ngx-translate-core.js");
/* harmony import */ var ngx_toastr__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ngx-toastr */ "./node_modules/ngx-toastr/fesm5/ngx-toastr.js");
/* harmony import */ var _core_services_meeting_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../../../../core/services/meeting.service */ "./src/app/core/services/meeting.service.ts");
/* harmony import */ var _core_helpers_admin_helper__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../../../../core/helpers/admin.helper */ "./src/app/core/helpers/admin.helper.ts");






var MeetingDetailsComponent = /** @class */ (function () {
    function MeetingDetailsComponent(translate, toastr, meetingService) {
        this.translate = translate;
        this.toastr = toastr;
        this.meetingService = meetingService;
        this.meetingstatusKeyValue = _core_helpers_admin_helper__WEBPACK_IMPORTED_MODULE_5__["meeting_status_key_value"];
    }
    MeetingDetailsComponent.prototype.ngOnInit = function () {
    };
    MeetingDetailsComponent.prototype.getTranslateStatus = function (statusKey) {
        return this.meetingstatusKeyValue[statusKey];
    };
    MeetingDetailsComponent.prototype.changeMeetingStatus = function (meetingIDs, status) {
        var _this = this;
        var params = {
            ids: meetingIDs,
            status: status.id
        };
        this.meetingService.changeStatus(params).subscribe(function (data) {
            _this.toastr.success(_this.translate.instant('meetings.messages.status'), _this.translate.instant('meetings.title'));
        });
    };
    MeetingDetailsComponent.ctorParameters = function () { return [
        { type: _ngx_translate_core__WEBPACK_IMPORTED_MODULE_2__["TranslateService"] },
        { type: ngx_toastr__WEBPACK_IMPORTED_MODULE_3__["ToastrService"] },
        { type: _core_services_meeting_service__WEBPACK_IMPORTED_MODULE_4__["MeetingService"] }
    ]; };
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])(),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", Object)
    ], MeetingDetailsComponent.prototype, "meeting", void 0);
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])(),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", Object)
    ], MeetingDetailsComponent.prototype, "loginUser", void 0);
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])(),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", Object)
    ], MeetingDetailsComponent.prototype, "apiUrl", void 0);
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])(),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", Object)
    ], MeetingDetailsComponent.prototype, "permission", void 0);
    MeetingDetailsComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-meeting-details',
            template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./meeting-details.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/modules/admin/meeting/components/meeting-details/meeting-details.component.html")).default,
            styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./meeting-details.component.scss */ "./src/app/modules/admin/meeting/components/meeting-details/meeting-details.component.scss")).default]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_ngx_translate_core__WEBPACK_IMPORTED_MODULE_2__["TranslateService"],
            ngx_toastr__WEBPACK_IMPORTED_MODULE_3__["ToastrService"],
            _core_services_meeting_service__WEBPACK_IMPORTED_MODULE_4__["MeetingService"]])
    ], MeetingDetailsComponent);
    return MeetingDetailsComponent;
}());



/***/ }),

/***/ "./src/app/modules/admin/meeting/meeting-routing.module.ts":
/*!*****************************************************************!*\
  !*** ./src/app/modules/admin/meeting/meeting-routing.module.ts ***!
  \*****************************************************************/
/*! exports provided: MeetingRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MeetingRoutingModule", function() { return MeetingRoutingModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var ngx_permissions__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ngx-permissions */ "./node_modules/ngx-permissions/ngx-permissions.umd.js");
/* harmony import */ var ngx_permissions__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(ngx_permissions__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _pages_meeting_meeting_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./pages/meeting/meeting.component */ "./src/app/modules/admin/meeting/pages/meeting/meeting.component.ts");
/* harmony import */ var _pages_meeting_detail_meeting_detail_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./pages/meeting-detail/meeting-detail.component */ "./src/app/modules/admin/meeting/pages/meeting-detail/meeting-detail.component.ts");






var routes = [
    {
        path: '',
        children: [
            {
                path: '',
                canActivate: [ngx_permissions__WEBPACK_IMPORTED_MODULE_3__["NgxPermissionsGuard"]],
                component: _pages_meeting_meeting_component__WEBPACK_IMPORTED_MODULE_4__["MeetingComponent"],
                data: {
                    permissions: {
                        only: ['admin', 'super_admin', 'meetings_view']
                    }
                }
            },
            {
                path: 'detail/:id',
                component: _pages_meeting_detail_meeting_detail_component__WEBPACK_IMPORTED_MODULE_5__["MeetingDetailComponent"],
                canActivate: [ngx_permissions__WEBPACK_IMPORTED_MODULE_3__["NgxPermissionsGuard"]],
                data: {
                    breadcrumbs: {
                        text: 'common.detail',
                        icon: 'fa fa-briefcase',
                        hasParams: true,
                        show: true,
                        isHome: true
                    },
                    permissions: {
                        only: ['admin', 'super_admin', 'meetings_view']
                    }
                }
            },
            {
                path: ':statusId',
                component: _pages_meeting_meeting_component__WEBPACK_IMPORTED_MODULE_4__["MeetingComponent"]
            }
        ]
    }
];
var MeetingRoutingModule = /** @class */ (function () {
    function MeetingRoutingModule() {
    }
    MeetingRoutingModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)],
            exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]]
        })
    ], MeetingRoutingModule);
    return MeetingRoutingModule;
}());



/***/ }),

/***/ "./src/app/modules/admin/meeting/meeting.module.ts":
/*!*********************************************************!*\
  !*** ./src/app/modules/admin/meeting/meeting.module.ts ***!
  \*********************************************************/
/*! exports provided: MeetingModule, HttpLoaderFactory */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MeetingModule", function() { return MeetingModule; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "HttpLoaderFactory", function() { return HttpLoaderFactory; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var ngx_bootstrap__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ngx-bootstrap */ "./node_modules/ngx-bootstrap/esm5/ngx-bootstrap.js");
/* harmony import */ var ngx_export_as__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ngx-export-as */ "./node_modules/ngx-export-as/fesm2015/ngx-export-as.js");
/* harmony import */ var ngx_editor__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ngx-editor */ "./node_modules/ngx-editor/fesm5/ngx-editor.js");
/* harmony import */ var _ng_select_ng_select__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @ng-select/ng-select */ "./node_modules/@ng-select/ng-select/fesm5/ng-select.js");
/* harmony import */ var ngx_permissions__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ngx-permissions */ "./node_modules/ngx-permissions/ngx-permissions.umd.js");
/* harmony import */ var ngx_permissions__WEBPACK_IMPORTED_MODULE_9___default = /*#__PURE__*/__webpack_require__.n(ngx_permissions__WEBPACK_IMPORTED_MODULE_9__);
/* harmony import */ var _ngx_translate_core__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @ngx-translate/core */ "./node_modules/@ngx-translate/core/fesm5/ngx-translate-core.js");
/* harmony import */ var _ngx_translate_http_loader__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! @ngx-translate/http-loader */ "./node_modules/@ngx-translate/http-loader/fesm5/ngx-translate-http-loader.js");
/* harmony import */ var ng_pick_datetime__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ng-pick-datetime */ "./node_modules/ng-pick-datetime/picker.js");
/* harmony import */ var angular_datatables__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! angular-datatables */ "./node_modules/angular-datatables/index.js");
/* harmony import */ var _shared_shared_module__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ../../../shared/shared.module */ "./src/app/shared/shared.module.ts");
/* harmony import */ var _meeting_routing_module__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! ./meeting-routing.module */ "./src/app/modules/admin/meeting/meeting-routing.module.ts");
/* harmony import */ var _pages_meeting_meeting_component__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! ./pages/meeting/meeting.component */ "./src/app/modules/admin/meeting/pages/meeting/meeting.component.ts");
/* harmony import */ var _components_create_meeting_modal_create_meeting_modal_component__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! ./components/create-meeting-modal/create-meeting-modal.component */ "./src/app/modules/admin/meeting/components/create-meeting-modal/create-meeting-modal.component.ts");
/* harmony import */ var _components_edit_meeting_modal_edit_meeting_modal_component__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! ./components/edit-meeting-modal/edit-meeting-modal.component */ "./src/app/modules/admin/meeting/components/edit-meeting-modal/edit-meeting-modal.component.ts");
/* harmony import */ var _timesheet_timesheet_module__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(/*! ../../timesheet/timesheet.module */ "./src/app/modules/timesheet/timesheet.module.ts");
/* harmony import */ var _pages_meeting_detail_meeting_detail_component__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__(/*! ./pages/meeting-detail/meeting-detail.component */ "./src/app/modules/admin/meeting/pages/meeting-detail/meeting-detail.component.ts");
/* harmony import */ var _components_meeting_details_meeting_details_component__WEBPACK_IMPORTED_MODULE_21__ = __webpack_require__(/*! ./components/meeting-details/meeting-details.component */ "./src/app/modules/admin/meeting/components/meeting-details/meeting-details.component.ts");






















var MeetingModule = /** @class */ (function () {
    function MeetingModule() {
    }
    MeetingModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            declarations: [
                _pages_meeting_meeting_component__WEBPACK_IMPORTED_MODULE_16__["MeetingComponent"],
                _components_create_meeting_modal_create_meeting_modal_component__WEBPACK_IMPORTED_MODULE_17__["CreateMeetingModalComponent"],
                _components_edit_meeting_modal_edit_meeting_modal_component__WEBPACK_IMPORTED_MODULE_18__["EditMeetingModalComponent"],
                _pages_meeting_detail_meeting_detail_component__WEBPACK_IMPORTED_MODULE_20__["MeetingDetailComponent"],
                _components_meeting_details_meeting_details_component__WEBPACK_IMPORTED_MODULE_21__["MeetingDetailsComponent"]
            ],
            imports: [
                _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
                _meeting_routing_module__WEBPACK_IMPORTED_MODULE_15__["MeetingRoutingModule"],
                _ng_select_ng_select__WEBPACK_IMPORTED_MODULE_8__["NgSelectModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_4__["FormsModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_4__["ReactiveFormsModule"],
                ngx_permissions__WEBPACK_IMPORTED_MODULE_9__["NgxPermissionsModule"],
                angular_datatables__WEBPACK_IMPORTED_MODULE_13__["DataTablesModule"],
                ngx_export_as__WEBPACK_IMPORTED_MODULE_6__["ExportAsModule"],
                ngx_editor__WEBPACK_IMPORTED_MODULE_7__["NgxEditorModule"],
                ng_pick_datetime__WEBPACK_IMPORTED_MODULE_12__["OwlDateTimeModule"],
                ng_pick_datetime__WEBPACK_IMPORTED_MODULE_12__["OwlNativeDateTimeModule"],
                ngx_bootstrap__WEBPACK_IMPORTED_MODULE_5__["ModalModule"].forRoot(),
                ngx_bootstrap__WEBPACK_IMPORTED_MODULE_5__["TooltipModule"].forRoot(),
                ngx_bootstrap__WEBPACK_IMPORTED_MODULE_5__["DatepickerModule"].forRoot(),
                ngx_bootstrap__WEBPACK_IMPORTED_MODULE_5__["BsDatepickerModule"].forRoot(),
                ngx_bootstrap__WEBPACK_IMPORTED_MODULE_5__["BsDropdownModule"].forRoot(),
                ngx_bootstrap__WEBPACK_IMPORTED_MODULE_5__["TabsModule"].forRoot(),
                _ngx_translate_core__WEBPACK_IMPORTED_MODULE_10__["TranslateModule"].forChild({
                    loader: {
                        provide: _ngx_translate_core__WEBPACK_IMPORTED_MODULE_10__["TranslateLoader"],
                        useFactory: (HttpLoaderFactory),
                        deps: [_angular_common_http__WEBPACK_IMPORTED_MODULE_3__["HttpClient"]]
                    }
                }),
                _shared_shared_module__WEBPACK_IMPORTED_MODULE_14__["SharedModule"],
                _timesheet_timesheet_module__WEBPACK_IMPORTED_MODULE_19__["TimesheetModule"]
            ],
            entryComponents: [
                _components_create_meeting_modal_create_meeting_modal_component__WEBPACK_IMPORTED_MODULE_17__["CreateMeetingModalComponent"],
                _components_edit_meeting_modal_edit_meeting_modal_component__WEBPACK_IMPORTED_MODULE_18__["EditMeetingModalComponent"]
            ]
        })
    ], MeetingModule);
    return MeetingModule;
}());

// Required for AOT compilation
function HttpLoaderFactory(http) {
    return new _ngx_translate_http_loader__WEBPACK_IMPORTED_MODULE_11__["TranslateHttpLoader"](http, './assets/i18n/', '.json');
}


/***/ }),

/***/ "./src/app/modules/admin/meeting/pages/meeting-detail/meeting-detail.component.scss":
/*!******************************************************************************************!*\
  !*** ./src/app/modules/admin/meeting/pages/meeting-detail/meeting-detail.component.scss ***!
  \******************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL21vZHVsZXMvYWRtaW4vbWVldGluZy9wYWdlcy9tZWV0aW5nLWRldGFpbC9tZWV0aW5nLWRldGFpbC5jb21wb25lbnQuc2NzcyJ9 */");

/***/ }),

/***/ "./src/app/modules/admin/meeting/pages/meeting-detail/meeting-detail.component.ts":
/*!****************************************************************************************!*\
  !*** ./src/app/modules/admin/meeting/pages/meeting-detail/meeting-detail.component.ts ***!
  \****************************************************************************************/
/*! exports provided: MeetingDetailComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MeetingDetailComponent", function() { return MeetingDetailComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _core_services_meeting_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../../../core/services/meeting.service */ "./src/app/core/services/meeting.service.ts");
/* harmony import */ var src_app_core_services_authentication_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! src/app/core/services/authentication.service */ "./src/app/core/services/authentication.service.ts");
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../../../../../environments/environment */ "./src/environments/environment.ts");






var MeetingDetailComponent = /** @class */ (function () {
    function MeetingDetailComponent(route, router, meetingService, authenticationService) {
        var _this = this;
        this.route = route;
        this.router = router;
        this.meetingService = meetingService;
        this.authenticationService = authenticationService;
        this.isPageLoaded = false;
        this.activeMeetingTab = '1';
        this.apiUrl = _environments_environment__WEBPACK_IMPORTED_MODULE_5__["environment"].apiUrl;
        this.route.paramMap.subscribe(function (params) {
            _this.getById(params.get('id'));
        });
        this.authenticationService.loginUser.subscribe(function (x) { return _this.loginUser = x; });
    }
    MeetingDetailComponent.prototype.ngOnInit = function () {
    };
    MeetingDetailComponent.prototype.getById = function (taskId) {
        var _this = this;
        this.meetingService.getById(taskId).subscribe(function (data) {
            _this.meeting = data;
            _this.isPageLoaded = true;
        });
    };
    MeetingDetailComponent.ctorParameters = function () { return [
        { type: _angular_router__WEBPACK_IMPORTED_MODULE_2__["ActivatedRoute"] },
        { type: _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"] },
        { type: _core_services_meeting_service__WEBPACK_IMPORTED_MODULE_3__["MeetingService"] },
        { type: src_app_core_services_authentication_service__WEBPACK_IMPORTED_MODULE_4__["AuthenticationService"] }
    ]; };
    MeetingDetailComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-meeting-detail',
            template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./meeting-detail.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/modules/admin/meeting/pages/meeting-detail/meeting-detail.component.html")).default,
            styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./meeting-detail.component.scss */ "./src/app/modules/admin/meeting/pages/meeting-detail/meeting-detail.component.scss")).default]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_router__WEBPACK_IMPORTED_MODULE_2__["ActivatedRoute"],
            _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"],
            _core_services_meeting_service__WEBPACK_IMPORTED_MODULE_3__["MeetingService"],
            src_app_core_services_authentication_service__WEBPACK_IMPORTED_MODULE_4__["AuthenticationService"]])
    ], MeetingDetailComponent);
    return MeetingDetailComponent;
}());



/***/ }),

/***/ "./src/app/modules/admin/meeting/pages/meeting/meeting.component.scss":
/*!****************************************************************************!*\
  !*** ./src/app/modules/admin/meeting/pages/meeting/meeting.component.scss ***!
  \****************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = (".hide_empty_message ::ng-deep .odd {\n  display: none;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvbW9kdWxlcy9hZG1pbi9tZWV0aW5nL3BhZ2VzL21lZXRpbmcvQzpcXFVzZXJzXFx0aHVhblxcT25lRHJpdmVcXERlc2t0b3BcXGdsYXZhbC10aHVhbmRpbmgvc3JjXFxhcHBcXG1vZHVsZXNcXGFkbWluXFxtZWV0aW5nXFxwYWdlc1xcbWVldGluZ1xcbWVldGluZy5jb21wb25lbnQuc2NzcyIsInNyYy9hcHAvbW9kdWxlcy9hZG1pbi9tZWV0aW5nL3BhZ2VzL21lZXRpbmcvbWVldGluZy5jb21wb25lbnQuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNJLGFBQUE7QUNDSiIsImZpbGUiOiJzcmMvYXBwL21vZHVsZXMvYWRtaW4vbWVldGluZy9wYWdlcy9tZWV0aW5nL21lZXRpbmcuY29tcG9uZW50LnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyIuaGlkZV9lbXB0eV9tZXNzYWdlIDo6bmctZGVlcCAub2RkIHtcclxuICAgIGRpc3BsYXk6IG5vbmVcclxufSIsIi5oaWRlX2VtcHR5X21lc3NhZ2UgOjpuZy1kZWVwIC5vZGQge1xuICBkaXNwbGF5OiBub25lO1xufSJdfQ== */");

/***/ }),

/***/ "./src/app/modules/admin/meeting/pages/meeting/meeting.component.ts":
/*!**************************************************************************!*\
  !*** ./src/app/modules/admin/meeting/pages/meeting/meeting.component.ts ***!
  \**************************************************************************/
/*! exports provided: MeetingComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MeetingComponent", function() { return MeetingComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var ngx_bootstrap_modal__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ngx-bootstrap/modal */ "./node_modules/ngx-bootstrap/modal/fesm5/ngx-bootstrap-modal.js");
/* harmony import */ var ngx_export_as__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ngx-export-as */ "./node_modules/ngx-export-as/fesm2015/ngx-export-as.js");
/* harmony import */ var _ngx_translate_core__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @ngx-translate/core */ "./node_modules/@ngx-translate/core/fesm5/ngx-translate-core.js");
/* harmony import */ var ngx_toastr__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ngx-toastr */ "./node_modules/ngx-toastr/fesm5/ngx-toastr.js");
/* harmony import */ var angular_datatables__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! angular-datatables */ "./node_modules/angular-datatables/index.js");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! rxjs */ "./node_modules/rxjs/_esm5/index.js");
/* harmony import */ var sweetalert2__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! sweetalert2 */ "./node_modules/sweetalert2/dist/sweetalert2.all.js");
/* harmony import */ var sweetalert2__WEBPACK_IMPORTED_MODULE_11___default = /*#__PURE__*/__webpack_require__.n(sweetalert2__WEBPACK_IMPORTED_MODULE_11__);
/* harmony import */ var _core_services_meeting_service__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ../../../../../core/services/meeting.service */ "./src/app/core/services/meeting.service.ts");
/* harmony import */ var _core_services_authentication_service__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ../../../../../core/services/authentication.service */ "./src/app/core/services/authentication.service.ts");
/* harmony import */ var _components_create_meeting_modal_create_meeting_modal_component__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ../../components/create-meeting-modal/create-meeting-modal.component */ "./src/app/modules/admin/meeting/components/create-meeting-modal/create-meeting-modal.component.ts");
/* harmony import */ var _components_edit_meeting_modal_edit_meeting_modal_component__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! ../../components/edit-meeting-modal/edit-meeting-modal.component */ "./src/app/modules/admin/meeting/components/edit-meeting-modal/edit-meeting-modal.component.ts");
/* harmony import */ var _core_helpers_admin_helper__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! ../../../../../core/helpers/admin.helper */ "./src/app/core/helpers/admin.helper.ts");
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! ../../../../../../environments/environment */ "./src/environments/environment.ts");
/* harmony import */ var datatables_net__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! datatables.net */ "./node_modules/datatables.net/js/jquery.dataTables.js");
/* harmony import */ var datatables_net__WEBPACK_IMPORTED_MODULE_18___default = /*#__PURE__*/__webpack_require__.n(datatables_net__WEBPACK_IMPORTED_MODULE_18__);
/* harmony import */ var datatables_net_bs4__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(/*! datatables.net-bs4 */ "./node_modules/datatables.net-bs4/js/dataTables.bootstrap4.js");
/* harmony import */ var datatables_net_bs4__WEBPACK_IMPORTED_MODULE_19___default = /*#__PURE__*/__webpack_require__.n(datatables_net_bs4__WEBPACK_IMPORTED_MODULE_19__);




















var MeetingComponent = /** @class */ (function () {
    function MeetingComponent(translate, datePipe, http, router, route, modalService, exportAsService, toastr, meetingService, authenticationService) {
        var _this = this;
        this.translate = translate;
        this.datePipe = datePipe;
        this.http = http;
        this.router = router;
        this.route = route;
        this.modalService = modalService;
        this.exportAsService = exportAsService;
        this.toastr = toastr;
        this.meetingService = meetingService;
        this.authenticationService = authenticationService;
        this.dtTrigger = new rxjs__WEBPACK_IMPORTED_MODULE_10__["Subject"]();
        this.dtOptions = {};
        this.meetings = [];
        this.members = [];
        this.meetingstatusKeyValue = _core_helpers_admin_helper__WEBPACK_IMPORTED_MODULE_16__["meeting_status_key_value"];
        this.isPageLoaded = false;
        this.exportAsConfig = {
            type: 'pdf',
            elementIdOrContent: 'meeting_table',
        };
        this.modalConfigs = {
            animated: true,
            keyboard: true,
            backdrop: true,
            ignoreBackdropClick: false,
            class: 'inmodal modal-dialog-centered modal-md animated fadeIn'
        };
        this.apiUrl = _environments_environment__WEBPACK_IMPORTED_MODULE_17__["environment"].apiUrl;
        this.authenticationService.loginUser.subscribe(function (x) { return _this.loginUser = x; });
    }
    MeetingComponent.prototype.ngOnInit = function () {
        this.loadMeetingDatatable();
    };
    MeetingComponent.prototype.loadMeetingDatatable = function () {
        var _this = this;
        this.statusfilterId = 0;
        if (this.route.snapshot.params['statusId']) {
            this.statusfilterId = this.route.snapshot.params['statusId'];
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
                    'width': '9%',
                    'target': [0]
                },
                {
                    'sortable': true,
                    'width': '20%',
                    'target': [1]
                },
                {
                    'sortable': true,
                    'width': '8%',
                    'target': [2]
                },
                {
                    'sortable': false,
                    'width': '15%',
                    'target': [3]
                },
                {
                    'sortable': true,
                    'width': '14%',
                    'target': [4]
                },
                {
                    'sortable': true,
                    'width': '14%',
                    'target': [5]
                },
                {
                    'sortable': true,
                    'width': '5%',
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
                    title: this.translate.instant('meetings.title'),
                    className: 'btn btn-datatable-gredient',
                    action: function (e, dt, node, config) {
                        that.exportFiles('csv');
                    }
                }, {
                    extend: 'excel',
                    title: this.translate.instant('meetings.title'),
                    className: 'btn btn-datatable-gredient',
                    action: function (e, dt, node, config) {
                        that.exportFiles('xlsx');
                    }
                }, {
                    extend: 'pdf',
                    title: this.translate.instant('meetings.title'),
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
                    statusId: _this.statusfilterId,
                };
                _this.http
                    .post(that.apiUrl + '/api/all-meetings', dataTablesParameters, {})
                    .subscribe(function (resp) {
                    if (resp) {
                        _this.meetings = resp.data;
                        _this.countStatus = resp;
                        _this.countStatus = _this.countStatus.statusCount;
                        _this.isPageLoaded = true;
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
    MeetingComponent.prototype.filterByStatus = function (statusID) {
        this.router.routeReuseStrategy.shouldReuseRoute = function () { return false; };
        this.router.navigate(['meetings', statusID]);
    };
    MeetingComponent.prototype.exportFiles = function (type) {
        this.exportAsConfig.type = type;
        this.exportAsService.save(this.exportAsConfig, this.translate.instant('meetings.title')).subscribe(function () {
        });
    };
    MeetingComponent.prototype.ngAfterViewInit = function () {
        this.dtTrigger.next();
    };
    MeetingComponent.prototype.ngOnDestroy = function () {
        this.dtTrigger.unsubscribe();
    };
    MeetingComponent.prototype.rerender = function () {
        var _this = this;
        this.dtElement.dtInstance.then(function (dtInstance) {
            dtInstance.destroy();
            setTimeout(function () {
                _this.dtTrigger.next();
                if (_this.meetings.length > 0) {
                    $('.tfoot_dt').addClass('d-none');
                }
                else {
                    $('.tfoot_dt').removeClass('d-none');
                }
            });
        });
    };
    MeetingComponent.prototype.openMeetingCreateModal = function () {
        var _this = this;
        this.modalRef = this.modalService.show(_components_create_meeting_modal_create_meeting_modal_component__WEBPACK_IMPORTED_MODULE_14__["CreateMeetingModalComponent"], this.modalConfigs);
        this.modalRef.content.event.subscribe(function (data) {
            _this.rerender();
        });
    };
    MeetingComponent.prototype.openMeetingEditModal = function (meeting) {
        var _this = this;
        var modalConfig = {
            animated: true,
            keyboard: true,
            backdrop: true,
            ignoreBackdropClick: false,
            class: 'inmodal modal-dialog-centered modal-md animated fadeIn',
            initialState: {
                meeting: meeting
            }
        };
        this.modalRef = this.modalService.show(_components_edit_meeting_modal_edit_meeting_modal_component__WEBPACK_IMPORTED_MODULE_15__["EditMeetingModalComponent"], modalConfig);
        this.modalRef.content.event.subscribe(function (data) {
            _this.rerender();
        });
    };
    MeetingComponent.prototype.removeMeeting = function (id) {
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
                _this.meetingService.delete(id)
                    .subscribe(function (data) {
                    _this.toastr.success(_this.translate.instant('meetings.messages.delete'), _this.translate.instant('meetings.title'));
                    _this.rerender();
                });
            }
        });
    };
    MeetingComponent.prototype.saveMeetingDetail = function (index, name, value) {
        var _this = this;
        if (value instanceof Date) {
            value = this.datePipe.transform(value, 'yyyy-MM-dd h:mm:ss a');
        }
        this.meetings[index][name] = value;
        for (var iRow in this.meetings[index].members) {
            this.members.push(this.meetings[index].members[iRow].member_id);
        }
        this.meetings[index].members = this.members;
        this.meetingService.update(this.meetings[index])
            .subscribe(function (data) {
            _this.toastr.success(_this.translate.instant('meetings.messages.update'), _this.translate.instant('meetings.title'));
            _this.rerender();
        }, function (error) {
            _this.rerender();
        });
    };
    MeetingComponent.prototype.getTranslateStatus = function (statusKey) {
        return this.meetingstatusKeyValue[statusKey];
    };
    MeetingComponent.prototype.changeMeetingStatus = function (meetingIDs, status) {
        var _this = this;
        var params = {
            ids: meetingIDs,
            status: status.id
        };
        this.meetingService.changeStatus(params).subscribe(function (data) {
            _this.toastr.success(_this.translate.instant('meetings.messages.status'), _this.translate.instant('meetings.title'));
            _this.rerender();
        });
    };
    MeetingComponent.ctorParameters = function () { return [
        { type: _ngx_translate_core__WEBPACK_IMPORTED_MODULE_7__["TranslateService"] },
        { type: _angular_common__WEBPACK_IMPORTED_MODULE_2__["DatePipe"] },
        { type: _angular_common_http__WEBPACK_IMPORTED_MODULE_3__["HttpClient"] },
        { type: _angular_router__WEBPACK_IMPORTED_MODULE_4__["Router"] },
        { type: _angular_router__WEBPACK_IMPORTED_MODULE_4__["ActivatedRoute"] },
        { type: ngx_bootstrap_modal__WEBPACK_IMPORTED_MODULE_5__["BsModalService"] },
        { type: ngx_export_as__WEBPACK_IMPORTED_MODULE_6__["ExportAsService"] },
        { type: ngx_toastr__WEBPACK_IMPORTED_MODULE_8__["ToastrService"] },
        { type: _core_services_meeting_service__WEBPACK_IMPORTED_MODULE_12__["MeetingService"] },
        { type: _core_services_authentication_service__WEBPACK_IMPORTED_MODULE_13__["AuthenticationService"] }
    ]; };
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewChild"])(angular_datatables__WEBPACK_IMPORTED_MODULE_9__["DataTableDirective"], { static: true }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", angular_datatables__WEBPACK_IMPORTED_MODULE_9__["DataTableDirective"])
    ], MeetingComponent.prototype, "dtElement", void 0);
    MeetingComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-meeting',
            template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./meeting.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/modules/admin/meeting/pages/meeting/meeting.component.html")).default,
            providers: [_angular_common__WEBPACK_IMPORTED_MODULE_2__["DatePipe"]],
            styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./meeting.component.scss */ "./src/app/modules/admin/meeting/pages/meeting/meeting.component.scss")).default]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_ngx_translate_core__WEBPACK_IMPORTED_MODULE_7__["TranslateService"],
            _angular_common__WEBPACK_IMPORTED_MODULE_2__["DatePipe"],
            _angular_common_http__WEBPACK_IMPORTED_MODULE_3__["HttpClient"],
            _angular_router__WEBPACK_IMPORTED_MODULE_4__["Router"],
            _angular_router__WEBPACK_IMPORTED_MODULE_4__["ActivatedRoute"],
            ngx_bootstrap_modal__WEBPACK_IMPORTED_MODULE_5__["BsModalService"],
            ngx_export_as__WEBPACK_IMPORTED_MODULE_6__["ExportAsService"],
            ngx_toastr__WEBPACK_IMPORTED_MODULE_8__["ToastrService"],
            _core_services_meeting_service__WEBPACK_IMPORTED_MODULE_12__["MeetingService"],
            _core_services_authentication_service__WEBPACK_IMPORTED_MODULE_13__["AuthenticationService"]])
    ], MeetingComponent);
    return MeetingComponent;
}());



/***/ })

}]);
//# sourceMappingURL=modules-admin-meeting-meeting-module.js.map