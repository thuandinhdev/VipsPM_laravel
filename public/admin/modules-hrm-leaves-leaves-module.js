(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["modules-hrm-leaves-leaves-module"],{

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/modules/hrm/leaves/components/create-leave/create-leave.component.html":
/*!******************************************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/modules/hrm/leaves/components/create-leave/create-leave.component.html ***!
  \******************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<div class=\"modal-header\">\r\n    <h2 class=\"modal-title font-weight-normal\">\r\n        <i aria-hidden=\"true\" class=\"fa fa-suitcase\"></i>&nbsp;{{'leaves.title6' | translate}}</h2>\r\n    <button (click)=\"onCancel()\" aria-label=\"Close\" class=\"close\" data-dismiss=\"modal\" type=\"button\">\r\n        <span aria-hidden=\"true\">&times;</span></button>\r\n</div>\r\n<form (ngSubmit)=\"onSubmit()\" *ngIf=\"isPageLoad\" [formGroup]=\"createLeaveForm\" class=\"form\">\r\n    <div class=\"modal-body\">\r\n        <div class=\"form-body\">\r\n            <div class=\"row\">\r\n                <div *ngxPermissionsOnly=\"['admin', 'super_admin']\" class=\"col-md-6\">\r\n                    <div [ngClass]=\"{ 'is-invalid': isFormSubmitted && leaveControl.user_id.errors }\" class=\"form-group\">\r\n                        <label for=\"user_id\">{{'leaves.create.fields.user' | translate}}\r\n                            <span class=\"text-danger\">&nbsp;*</span></label>\r\n                        <ng-select [items]=\"users\" [multiple]=\"false\" [searchable]=\"true\" bindLabel=\"firstname\" bindValue=\"id\" formControlName=\"user_id\" placeholder=\"{{'leaves.create.placeholders.placeholder1' | translate}}\">\r\n                            <ng-template let-item=\"item\" ng-option-tmp>\r\n                                {{item.firstname}} {{item.lastname}}\r\n                            </ng-template>\r\n                        </ng-select>\r\n                        <div *ngIf=\"isFormSubmitted && leaveControl.user_id.errors\" class=\"invalid-feedback\">\r\n                            <div *ngIf=\"leaveControl.user_id.errors.required\">{{'leaves.create.error_messages.message1' | translate}}</div>\r\n                        </div>\r\n                    </div>\r\n                </div>\r\n                <div class=\"col-md-6\">\r\n                    <div [ngClass]=\"{ 'is-invalid': isFormSubmitted && leaveControl.leave_type_id.errors }\" class=\"form-group\">\r\n                        <label for=\"leave_type_id\">{{'leaves.create.fields.leave_type' | translate}}&nbsp;<span class=\"text-danger\">*</span></label>\r\n                        <div class=\"d-flex\">\r\n                            <ng-select [items]=\"leavetypes\" [searchable]=\"true\" [selectOnTab]=\"true\" bindLabel=\"leave_type\" bindValue=\"id\" formControlName=\"leave_type_id\" labelForId=\"leave_type\" placeholder=\"{{'leaves.create.placeholders.placeholder2' | translate}}\"></ng-select>\r\n                            <button (click)=\"openLeaveTypeModal($event)\" *ngxPermissionsOnly=\"['admin', 'super_admin', 'leavetypes_create']\" class=\"btn btn-secondary\" placement=\"left\" tooltip=\"{{'leave_types.title3' | translate }}\" type=\"button\">\r\n                                <i class=\"fa fa-plus\"></i></button>\r\n                        </div>\r\n                        <div *ngIf=\"isFormSubmitted && leaveControl.leave_type_id.errors\" class=\"invalid-feedback\">\r\n                            <div *ngIf=\"leaveControl.leave_type_id.errors.required\">{{'leaves.create.error_messages.message2' | translate}}</div>\r\n                        </div>\r\n                    </div>\r\n                </div>\r\n                <div class=\"col-md-6\">\r\n                    <div class=\"form-group\">\r\n                        <label>{{'leaves.create.fields.duration' | translate}}</label><br>\r\n                        <div class=\"form-check radio-container d-block\">\r\n                            <input (change)=\"changeDuration($event)\" class=\"form-check-input\" formControlName=\"duration\" id=\"checkbox1\" type=\"radio\" value=\"full\">\r\n                            <label class=\"form-check-label\" for=\"checkbox1\">&nbsp;{{'leaves.labels.single' | translate}}&nbsp;</label>\r\n                            <span class=\"radio-checkmark\"></span>\r\n                        </div>\r\n                        <div class=\"form-check radio-container d-block\">\r\n                            <input (change)=\"changeDuration($event)\" class=\"form-check-input\" formControlName=\"duration\" id=\"checkbox2\" type=\"radio\" value=\"multiple\">\r\n                            <label class=\"form-check-label\" for=\"checkbox2\">&nbsp;{{'leaves.labels.multiple' | translate}}</label>\r\n                            <span class=\"radio-checkmark\"></span>\r\n                        </div>\r\n                        <div class=\"form-check radio-container d-block\">\r\n                            <input (change)=\"changeDuration($event)\" class=\"form-check-input\" formControlName=\"duration\" id=\"checkbox3\" type=\"radio\" value=\"half\">\r\n                            <label class=\"form-check-label\" for=\"checkbox3\">&nbsp;{{'leaves.labels.half_day' | translate}}</label>\r\n                            <span class=\"radio-checkmark\"></span>\r\n                        </div>\r\n                    </div>\r\n                </div>\r\n                <div class=\"col-md-6\">\r\n                    <div *ngIf=\"createLeaveForm.get('duration').value == 'full' || createLeaveForm.get('duration').value == 'half'\" [ngClass]=\"{ 'is-invalid': isFormSubmitted && leaveControl.leave_date.errors }\" class=\"form-group\">\r\n                        <label for=\"leave_date\">{{'leaves.create.fields.leave_date' | translate}}\r\n                            <span class=\"text-danger\">&nbsp;*</span></label>\r\n                        <div class=\"position-relative has-icon-left\">\r\n                            <input #dp=\"bsDatepicker\" [bsConfig]=\"datepickerConfig\" [ngClass]=\"{ 'is-invalid': isFormSubmitted && leaveControl.leave_date.errors }\" aria-describedby=\"inputGroupPrepend3\" bsDatepicker class=\"form-control\" formControlName=\"leave_date\" id=\"leave_date\" placeholder=\"{{'leaves.create.placeholders.placeholder3' | translate}}\" type=\"text\"/>\r\n                            <div class=\"form-control-position\"><i class=\"ft-calendar\"></i></div>\r\n                        </div>\r\n                        <div *ngIf=\"isFormSubmitted && leaveControl.leave_date.errors\" class=\"invalid-feedback\">\r\n                            <div *ngIf=\"leaveControl.leave_date.errors.required\">{{'leaves.create.error_messages.message3' | translate}}</div>\r\n                        </div>\r\n                    </div>\r\n                    <div *ngIf=\"createLeaveForm.get('duration').value == 'half'\" class=\"form-group\">\r\n                        <ng-select [items]=\"('leaves.half_leaves_status' | translate)\" [searchable]=\"true\" [selectOnTab]=\"true\" bindLabel=\"label\" bindValue=\"id\" formControlName=\"duration_type\" labelForId=\"label\"></ng-select>\r\n                    </div>\r\n                    <div *ngIf=\"createLeaveForm.get('duration').value == 'multiple'\" [ngClass]=\"{ 'is-invalid': isFormSubmitted && leaveControl.multi_date.errors }\" class=\"form-group budges-status\">\r\n                        <label for=\"multi_date\">{{'leaves.create.fields.leave_date' | translate}}\r\n                            <span class=\"text-danger\">&nbsp;*</span></label>\r\n                        <div class=\"position-relative has-icon-left\">\r\n                            <input #dp1=\"bsDatepicker\" (bsValueChange)=\"onValueChange($event)\" [bsConfig]=\"datepickerConfig\" [bsValue]=\"dateSelected\" [dateCustomClasses]=\"selectedClass\" [ngClass]=\"{ 'is-invalid': isFormSubmitted && leaveControl.multi_date.errors }\" aria-describedby=\"inputGroupPrepend4\" bsDatepicker class=\"form-control\" formControlName=\"multi_date\" id=\"multi_date\" placeholder=\"{{'leaves.create.placeholders.placeholder3' | translate}}\" type=\"text\"/>\r\n                            <div class=\"form-control-position\"><i class=\"ft-calendar\"></i></div>\r\n                        </div>\r\n                        <span *ngFor=\"let date of dateSelected\" class=\"open\">{{date | dateTimeFormatFilter: loginUser.settings.date_format}}</span>\r\n                        <div *ngIf=\"isFormSubmitted && leaveControl.multi_date.errors\" class=\"invalid-feedback\">\r\n                            <div *ngIf=\"leaveControl.multi_date.errors.required\">{{'leaves.create.error_messages.message3' | translate}}</div>\r\n                        </div>\r\n                    </div>\r\n                </div>\r\n                <div class=\"col-md-12\">\r\n                    <div [ngClass]=\"{ 'is-invalid': isFormSubmitted && leaveControl.reason.errors }\" class=\"form-group\">\r\n                        <label for=\"reason\">{{'leaves.create.fields.reason' | translate}}&nbsp;<span class=\"text-danger\">*</span>\r\n                        </label>\r\n                        <textarea class=\"form-control\" formControlName=\"reason\" id=\"reason\" placeholder=\"{{'leaves.create.placeholders.placeholder5' | translate}}\"></textarea>\r\n                        <div *ngIf=\"isFormSubmitted && leaveControl.reason.errors\" class=\"invalid-feedback\">\r\n                            <div *ngIf=\"leaveControl.reason.errors.required\">{{'leaves.create.error_messages.message5' | translate}}</div>\r\n                        </div>\r\n                    </div>\r\n                </div>\r\n                <div class=\"col-md-12\">\r\n                    <div class=\"form-group\">\r\n                        <label>{{'leaves.create.fields.attachments' | translate}}</label>\r\n                        <div #leaveDropzone class=\"dropzone dz-clickable\">\r\n                            <div class=\"dz-default dz-message\">\r\n                                <span><strong>{{'leaves.create.error_messages.message6' | translate}}</strong></span>\r\n                            </div>\r\n                        </div>\r\n                    </div>\r\n                </div>\r\n            </div>\r\n        </div>\r\n    </div>\r\n    <div class=\"modal-footer\">\r\n        <button (click)=\"onCancel()\" class=\"btn btn-cancel mb-0\" type=\"button\">{{'common.close' | translate}}</button>\r\n        <button class=\"btn btn-submit mb-0\" type=\"submit\">{{'common.create' | translate}}</button>\r\n    </div>\r\n</form>\r\n");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/modules/hrm/leaves/components/edit-leave/edit-leave.component.html":
/*!**************************************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/modules/hrm/leaves/components/edit-leave/edit-leave.component.html ***!
  \**************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<div class=\"modal-header\">\r\n    <h2 class=\"modal-title font-weight-normal\">\r\n        <i aria-hidden=\"true\" class=\"fa fa-suitcase\"></i>&nbsp;{{'leaves.title7' | translate}}</h2>\r\n    <button (click)=\"bsModalRef.hide()\" aria-label=\"Close\" class=\"close\" data-dismiss=\"modal\" type=\"button\">\r\n        <span aria-hidden=\"true\">&times;</span></button>\r\n</div>\r\n<form (ngSubmit)=\"onSubmit()\" *ngIf=\"isPageLoad\" [formGroup]=\"editLeaveForm\" class=\"form\">\r\n    <div class=\"modal-body\">\r\n        <div class=\"form-body\">\r\n            <div class=\"row\">\r\n                <div class=\"col-md-6\">\r\n                    <div [ngClass]=\"{ 'is-invalid': isFormSubmitted && leaveControl.leave_type_id.errors }\" class=\"form-group\">\r\n                        <label for=\"leave_type_id\">{{'leaves.create.fields.leave_type' | translate}}&nbsp;<span class=\"text-danger\">*</span></label>\r\n                        <div class=\"d-flex\">\r\n                            <ng-select [items]=\"leavetypes\" [searchable]=\"true\" [selectOnTab]=\"true\" bindLabel=\"leave_type\" bindValue=\"id\" formControlName=\"leave_type_id\" labelForId=\"leave_type\" placeholder=\"{{'leaves.create.placeholders.placeholder2' | translate}}\"></ng-select>\r\n                            <button (click)=\"openLeaveTypeModal();\" *ngxPermissionsOnly=\"['admin', 'super_admin', 'leavetypes_create']\" class=\"btn btn-secondary\" placement=\"left\" tooltip=\"{{'leave_types.title3' | translate }}\" type=\"button\">\r\n                                <i class=\"fa fa-plus\"></i></button>\r\n                        </div>\r\n                        <div *ngIf=\"isFormSubmitted && leaveControl.leave_type_id.errors\" class=\"invalid-feedback\">\r\n                            <div *ngIf=\"leaveControl.leave_type_id.errors.required\">{{'leaves.create.error_messages.message2' | translate}}</div>\r\n                        </div>\r\n                    </div>\r\n                </div>\r\n                <div class=\"col-md-6\">\r\n                    <div class=\"form-group\">\r\n                        <label>{{'leaves.create.fields.duration' | translate}}</label><br>\r\n                        <div class=\"form-check radio-container d-block\">\r\n                            <input (change)=\"changeDuration($event)\" class=\"form-check-input\" formControlName=\"duration\" id=\"checkbox1\" type=\"radio\" value=\"full\">\r\n                            <label class=\"form-check-label\" for=\"checkbox1\">&nbsp;{{'leaves.labels.single' | translate}}&nbsp;</label>\r\n                            <span class=\"radio-checkmark\"></span>\r\n                        </div>\r\n                        <div class=\"form-check radio-container d-block\">\r\n                            <input (change)=\"changeDuration($event)\" class=\"form-check-input\" formControlName=\"duration\" id=\"checkbox3\" type=\"radio\" value=\"half\">\r\n                            <label class=\"form-check-label\" for=\"checkbox3\">&nbsp;{{'leaves.labels.half_day' | translate}}</label>\r\n                            <span class=\"radio-checkmark\"></span>\r\n                        </div>\r\n                    </div>\r\n                </div>\r\n                <div class=\"col-md-6\">\r\n                    <div [ngClass]=\"{ 'is-invalid': isFormSubmitted && leaveControl.leave_date.errors }\" class=\"form-group\">\r\n                        <label for=\"leave_date\">{{'leaves.create.fields.leave_date' | translate}}\r\n                            <span class=\"text-danger\">&nbsp;*</span></label>\r\n                        <div class=\"position-relative has-icon-left\">\r\n                            <input #dp=\"bsDatepicker\" [bsConfig]=\"datepickerConfig\" [ngClass]=\"{ 'is-invalid': isFormSubmitted && leaveControl.leave_date.errors }\" aria-describedby=\"inputGroupPrepend1\" bsDatepicker class=\"form-control\" formControlName=\"leave_date\" id=\"leave_date\" placeholder=\"{{'leaves.create.placeholders.placeholder3' | translate}}\" type=\"text\"/>\r\n                            <div class=\"form-control-position\"><i class=\"ft-calendar\"></i></div>\r\n                        </div>\r\n                        <div *ngIf=\"isFormSubmitted && leaveControl.leave_date.errors\" class=\"invalid-feedback\">\r\n                            <div *ngIf=\"leaveControl.leave_date.errors.required\">{{'leaves.create.error_messages.message3' | translate}}</div>\r\n                        </div>\r\n                    </div>\r\n                    <div *ngIf=\"editLeaveForm.get('duration').value == 'half'\" class=\"form-group\">\r\n                        <ng-select [items]=\"('leaves.half_leaves_status' | translate)\" [searchable]=\"true\" [selectOnTab]=\"true\" bindLabel=\"label\" bindValue=\"id\" formControlName=\"duration_type\" labelForId=\"label\"></ng-select>\r\n                    </div>\r\n                </div>\r\n                <div class=\"col-md-12\">\r\n                    <div [ngClass]=\"{ 'is-invalid': isFormSubmitted && leaveControl.reason.errors }\" class=\"form-group\">\r\n                        <label for=\"reason\">{{'leaves.create.fields.reason' | translate}}&nbsp;<span class=\"text-danger\">*</span>\r\n                        </label>\r\n                        <textarea class=\"form-control\" formControlName=\"reason\" id=\"reason\" placeholder=\"{{'leaves.create.placeholders.placeholder5' | translate}}\"></textarea>\r\n                        <div *ngIf=\"isFormSubmitted && leaveControl.reason.errors\" class=\"invalid-feedback\">\r\n                            <div *ngIf=\"leaveControl.reason.errors.required\">{{'leaves.create.error_messages.message5' | translate}}</div>\r\n                        </div>\r\n                    </div>\r\n                </div>\r\n                <div class=\"col-md-12\">\r\n                    <div class=\"form-group\">\r\n                        <label>{{'leaves.create.fields.attachments' | translate}}</label>\r\n                        <div #leaveDropzone class=\"dropzone dz-clickable\">\r\n                            <ng-container *ngFor=\"let attachment of leave.attachments; index as i\">\r\n                                <div class=\"dz-preview dz-file-preview\">\r\n                                    <div class=\"dz-image\"><img data-dz-thumbnail=\"\"></div>\r\n                                    <div class=\"dz-details\">\r\n                                        <div class=\"dz-size\">\r\n                                            <span data-dz-size=\"\">\r\n                                                <a download=\"{{attachment.file_name}}\" href=\"{{apiUrl}}/uploads/leave_attachment/{{attachment.file_hash}}\" target=\"_blank\">{{'common.download' | translate}}</a>\r\n                                            </span>\r\n                                        </div>\r\n                                        <div class=\"dz-filename\"><span data-dz-name=\"\">{{attachment.file_name}}</span>\r\n                                        </div>\r\n                                    </div>\r\n                                    <button (click)=\"removeattachments(attachment.id)\" class=\"btn btn-sm btn-block\" type=\"button\">{{'common.remove_file' | translate}}</button>\r\n                                </div>\r\n                            </ng-container>\r\n                            <div class=\"dz-default dz-message\">\r\n                                <span><strong>{{'leaves.create.error_messages.message6' | translate}}</strong></span>\r\n                            </div>\r\n                        </div>\r\n                    </div>\r\n                </div>\r\n            </div>\r\n        </div>\r\n    </div>\r\n    <div class=\"modal-footer\">\r\n        <button (click)=\"onCancel()\" class=\"btn btn-cancel mb-0\" type=\"button\">{{'common.close' | translate}}</button>\r\n        <button class=\"btn btn-submit mb-0\" type=\"submit\">{{'common.update' | translate}}</button>\r\n    </div>\r\n</form>\r\n");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/modules/hrm/leaves/components/leave-detail/leave-detail.component.html":
/*!******************************************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/modules/hrm/leaves/components/leave-detail/leave-detail.component.html ***!
  \******************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<div class=\"modal-header\">\r\n    <h2 class=\"modal-title font-weight-normal\">\r\n        <i aria-hidden=\"true\" class=\"fa fa-suitcase\"></i>&nbsp;{{'leave_report.title1' | translate}}</h2>\r\n    <button (click)=\"onCancel()\" aria-label=\"Close\" class=\"close\" data-dismiss=\"modal\" type=\"button\">\r\n        <span aria-hidden=\"true\">&times;</span></button>\r\n</div>\r\n<div *ngIf=\"isPageLoad\" class=\"modal-body\">\r\n    <div class=\"card pl-2 pr-2\">\r\n        <div class=\"card-header pl-0 pr-0 d-flex\">\r\n            <div class=\"row\">\r\n                <ng-container *ngFor=\"let leaveCount of leavesData.leavesCount; index as j\">\r\n                    <div class=\"col-lg-3 col-md-4 col-sm-6 budges-status\">\r\n                        <span [ngStyle]=\"{'background-color': leaveCount.color}\">{{leaveCount.count}}</span>&nbsp;{{leaveCount.leave_type}}\r\n                    </div>\r\n                </ng-container>\r\n            </div>\r\n        </div>\r\n        <div class=\"card-content pt-3 pb-3\">\r\n            <div class=\"card-body\">\r\n                <div class=\"table-responsive-xs table-responsive-sm table-responsive-md table-responsive-lg table-responsive-xl\">\r\n                    <table class=\"table table-bordered table-hover b4-datatable\" id=\"leaves_table\" width=\"100%\">\r\n                        <thead>\r\n                        <tr>\r\n                            <th>#</th>\r\n                            <th>{{'leaves.columns.leave_type' | translate}}</th>\r\n                            <th>{{'leaves.columns.leave_date' | translate}}</th>\r\n                            <th>{{'leaves.columns.duration' | translate}}</th>\r\n                            <th>{{'leaves.columns.reason' | translate}}</th>\r\n                        </tr>\r\n                        </thead>\r\n                        <tbody *ngIf=\"leavesData.leaves?.length != 0\">\r\n                        <tr *ngFor=\"let leave of leavesData.leaves; index as i\">\r\n                            <td class=\"text-center\">{{ i + 1 }}</td>\r\n                            <td>{{leave.leave_type.leave_type}}</td>\r\n                            <td>{{leave.leave_date}}</td>\r\n                            <td>\r\n                                <ng-container *ngIf=\"leave.duration == 'half' else elseBlock4\">\r\n                                    <ng-container *ngIf=\"leave.duration_type == 'first_half' else elseBlock5\">\r\n                                        {{'leaves.labels.first_half_day' | translate}}\r\n                                    </ng-container>\r\n                                    <ng-template #elseBlock5>\r\n                                        {{'leaves.labels.second_half_day' | translate}}\r\n                                    </ng-template>\r\n                                </ng-container>\r\n                                <ng-template #elseBlock4>\r\n                                    {{'leaves.labels.full_day' | translate}}\r\n                                </ng-template>\r\n                            </td>\r\n                            <td>{{leave.reason}}</td>\r\n                        </tr>\r\n                        </tbody>\r\n                        <tfoot *ngIf=\"leavesData.leaves?.length == 0\" class=\"tfoot_dt\">\r\n                        <tr>\r\n                            <td class=\"no-data-available text-center\" colspan=\"5\">{{'common.datatable.sEmptyTable' | translate}}</td>\r\n                        </tr>\r\n                        </tfoot>\r\n                    </table>\r\n                </div>\r\n            </div>\r\n        </div>\r\n    </div>\r\n</div>\r\n");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/modules/hrm/leaves/components/leave-type-modal/leave-type-modal.component.html":
/*!**************************************************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/modules/hrm/leaves/components/leave-type-modal/leave-type-modal.component.html ***!
  \**************************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<div class=\"modal-header\">\r\n    <h2 class=\"modal-title font-weight-normal\"><i aria-hidden=\"true\" class=\"fa fa-suitcase\"></i>&nbsp;Leave Types</h2>\r\n    <button (click)=\"onCancel()\" aria-label=\"Close\" class=\"close\" data-dismiss=\"modal\" type=\"button\">\r\n        <span aria-hidden=\"true\">&times;</span></button>\r\n</div>\r\n<div class=\"modal-body\">\r\n    <app-leave-types-list></app-leave-types-list>\r\n</div>\r\n");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/modules/hrm/leaves/pages/calendar-view/calendar-view.component.html":
/*!***************************************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/modules/hrm/leaves/pages/calendar-view/calendar-view.component.html ***!
  \***************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<section>\r\n    <div class=\"row\">\r\n        <div class=\"col-sm-12\">\r\n            <div class=\"card pl-2 pr-2 pb-3\">\r\n                <div class=\"card-header pl-0 pr-0 border-bottom\">\r\n                    <h4 class=\"main-title mt-2\"><span>{{'leaves.title5' | translate}}</span></h4>\r\n                    <div class=\"card-buttons\">\r\n                        <a [routerLink]=\"['/leaves']\" class=\"btn btn-create mb-0\" tooltip=\"{{'leaves.title3' | translate}}\"><i class=\"fa fa-list\"></i></a>\r\n                        <a [routerLink]=\"['/leaves/request']\" class=\"btn btn-create mb-0\" tooltip=\"{{'leaves.title2' | translate}}\"><i class=\"fa fa-trello\"></i></a>\r\n                        <a *ngxPermissionsOnly=\"['admin', 'super_admin', 'reports_view']\" [routerLink]=\"['/leaves/report']\" class=\"btn btn-create mb-0\" tooltip=\"{{'common.report' | translate}}\"><i class=\"fa fa-area-chart\"></i></a>\r\n                    </div>\r\n                </div>\r\n                <div class=\"card-body pt-3\">\r\n                    <div class=\"row\">\r\n                        <div class=\"col-sm-12\">\r\n                            <div class=\"row text-center\">\r\n                                <div class=\"col-md-6 d-flex mb-lg-0 mb-2 ml-lg-0 ml-4\">\r\n                                    <div (viewDateChange)=\"closeOpenMonthViewDay()\" [(viewDate)]=\"viewDate\" [view]=\"view\" class=\"btn calender-day\" mwlCalendarPreviousView>\r\n                                        <i class=\"calendar-icon fa fa-chevron-left\"></i>\r\n                                    </div>\r\n                                    <div class=\"ml-2 mr-2\">\r\n                                        <h3>{{ viewDate | calendarDate:(view + 'ViewTitle'): loginUser.language }}</h3>\r\n                                    </div>\r\n                                    <div (viewDateChange)=\"closeOpenMonthViewDay()\" [(viewDate)]=\"viewDate\" [view]=\"view\" class=\"btn calender-day\" mwlCalendarNextView>\r\n                                        <i class=\"calendar-icon fa fa-chevron-right\"></i>\r\n                                    </div>\r\n                                </div>\r\n                                <div class=\"col-md-6 mb-lg-0 mb-2 text-lg-right\">\r\n                                    <div class=\"btn-view-date\">\r\n                                        <div [(viewDate)]=\"viewDate\" class=\"btn calender-today mb-1\" mwlCalendarToday>{{'calendar.today' | translate}}</div>\r\n                                        <div (click)=\"setView(CalendarView.Month)\" [class.active]=\"view === CalendarView.Month\" class=\"btn calender-today mb-1\">{{'calendar.month' | translate}}</div>\r\n                                        <div (click)=\"setView(CalendarView.Week)\" [class.active]=\"view === CalendarView.Week\" class=\"btn calender-today mb-1\">{{'calendar.week' | translate}}</div>\r\n                                        <div (click)=\"setView(CalendarView.Day)\" [class.active]=\"view === CalendarView.Day\" class=\"btn calender-today mb-1\">{{'calendar.day' | translate}}</div>\r\n                                    </div>\r\n                                </div>\r\n                            </div>\r\n                            <br/>\r\n                            <div [ngSwitch]=\"view\">\r\n                                <mwl-calendar-month-view (dayClicked)=\"dayClicked($event.day)\" *ngSwitchCase=\"CalendarView.Month\" [activeDayIsOpen]=\"activeDayIsOpen\" [events]=\"events\" [locale]=\"loginUser.language\" [refresh]=\"refresh\" [viewDate]=\"viewDate\"></mwl-calendar-month-view>\r\n                                <mwl-calendar-week-view *ngSwitchCase=\"CalendarView.Week\" [events]=\"events\" [locale]=\"loginUser.language\" [refresh]=\"refresh\" [viewDate]=\"viewDate\"></mwl-calendar-week-view>\r\n                                <mwl-calendar-day-view *ngSwitchCase=\"CalendarView.Day\" [events]=\"events\" [locale]=\"loginUser.language\" [refresh]=\"refresh\" [viewDate]=\"viewDate\"></mwl-calendar-day-view>\r\n                            </div>\r\n                        </div>\r\n                    </div>\r\n                </div>\r\n            </div>\r\n        </div>\r\n    </div>\r\n</section>\r\n");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/modules/hrm/leaves/pages/leaves-list/leaves-list.component.html":
/*!***********************************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/modules/hrm/leaves/pages/leaves-list/leaves-list.component.html ***!
  \***********************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<section class=\"hide_empty_message\">\r\n    <div class=\"row\">\r\n        <div class=\"col-sm-12\">\r\n            <div class=\"card pl-2 pr-2\">\r\n                <div class=\"card-header pl-0 pr-0 border-bottom\">\r\n                    <h4 class=\"main-title mt-2\"><span>{{'leaves.title' | translate}}</span></h4>\r\n                    <div class=\"card-buttons\">\r\n                        <a *ngxPermissionsOnly=\"['admin', 'super_admin', 'leavetypes_view']\" [routerLink]=\"['/leave-types']\" class=\"btn btn-create mb-0\" tooltip=\"{{'leave_types.title' | translate}}\"><i class=\"fa fa-suitcase\"></i></a>\r\n                        <a [routerLink]=\"['/leaves/request']\" class=\"btn btn-create mb-0\" tooltip=\"{{'leaves.title2' | translate}}\"><i class=\"fa fa-trello\"></i></a>\r\n                        <a [routerLink]=\"['/leaves/calendar']\" class=\"btn btn-create mb-0\" tooltip=\"{{'common.calendar_view' | translate}}\"><i class=\"fa fa-calendar\"></i></a>\r\n                        <a *ngxPermissionsOnly=\"['admin', 'super_admin', 'reports_view']\" [routerLink]=\"['/leaves/report']\" class=\"btn btn-create mb-0\" tooltip=\"{{'common.report' | translate}}\"><i class=\"fa fa-area-chart\"></i></a>\r\n                        <a (click)=\"openLeaveCreateModal()\" *ngxPermissionsOnly=\"['admin', 'super_admin', 'leaves_create']\" class=\"btn btn-create mb-0\" tooltip=\"{{'common.create' | translate}}\"><i class=\"fa fa-plus\"></i></a>\r\n                    </div>\r\n                </div>\r\n                <div class=\"card-content pt-3 pb-3\">\r\n                    <div class=\"card-body\">\r\n                        <div class=\"table-responsive-xs table-responsive-sm table-responsive-md table-responsive-lg table-responsive-xl\">\r\n                            <table [dtOptions]=\"dtOptions\" [dtTrigger]=\"dtTrigger\" class=\"table table-bordered table-hover b4-datatable\" datatable id=\"leaves_table\" width=\"100%\">\r\n                                <thead>\r\n                                <tr>\r\n                                    <th>#</th>\r\n                                    <th>{{'leaves.create.fields.user' | translate}}</th>\r\n                                    <th>{{'leaves.create.fields.leave_date' | translate}}</th>\r\n                                    <th>{{'leaves.create.fields.leave_type' | translate}}</th>\r\n                                    <th>{{'leaves.create.fields.duration' | translate}}</th>\r\n                                    <th>{{'leaves.create.fields.status' | translate}}</th>\r\n                                    <th>{{'common.actions' | translate}}</th>\r\n                                </tr>\r\n                                </thead>\r\n                                <tbody *ngIf=\"leaves?.length != 0\">\r\n                                <tr *ngFor=\"let leave of leaves; index as i\">\r\n                                    <td class=\"text-center\">{{ i + 1 }}</td>\r\n                                    <td>{{leave.firstname}} {{leave.lastname}}</td>\r\n                                    <td class=\"budges-status\">\r\n                                        <span class=\"open\">{{leave.leave_date}}</span>\r\n                                    </td>\r\n                                    <td>{{leave.leave_type}}</td>\r\n                                    <td>\r\n                                        <ng-container *ngIf=\"leave.duration == 'half' else elseBlock4\">\r\n                                            <ng-container *ngIf=\"leave.duration_type == 'first_half' else elseBlock5\">\r\n                                                {{'leaves.labels.first_half_day' | translate}}\r\n                                            </ng-container>\r\n                                            <ng-template #elseBlock5>\r\n                                                {{'leaves.labels.second_half_day' | translate}}\r\n                                            </ng-template>\r\n                                        </ng-container>\r\n                                        <ng-template #elseBlock4>\r\n                                            {{'leaves.labels.full_day' | translate}}\r\n                                        </ng-template>\r\n                                    </td>\r\n                                    <td class=\"status-dropdown\">\r\n                                        <ng-container *ngxPermissionsOnly=\"['admin', 'super_admin', 'leaves_edit'] else elseBlock;\">\r\n                                            <div class=\"btn-group\" dropdown>\r\n                                                <ng-container *ngIf=\"getCheckStatusChangePermission(leave) else elseBlock\">\r\n                                                    <button aria-controls=\"dropdown-basic\" class=\"btn dropdown-toggle select-btn-lg\" dropdownToggle id=\"button-basic\" type=\"button\">{{getTranslateStatus(leave.status) | translate}}&nbsp;<span class=\"caret\"></span>\r\n                                                    </button>\r\n                                                    <ul *dropdownMenu aria-labelledby=\"button-basic\" class=\"dropdown-menu animated fadeIn\" id=\"dropdown-basic\" role=\"menu\">\r\n                                                        <ng-container *ngFor=\"let status of ('leaves.status' | translate)\">\r\n                                                            <li *ngIf=\"status.id == 1 || status.id == 2 || status.id == 3\" role=\"menuitem\">\r\n                                                                <a (click)=\"changeLeaveStatus([leave.id], status);leave.status = status.id\" [ngClass]=\"{'active': leave.status == status.id}\" class=\"dropdown-item btn btn-sm {{status.class}}\">{{status.label}}</a>\r\n                                                            </li>\r\n                                                        </ng-container>\r\n                                                    </ul>\r\n                                                </ng-container>\r\n                                            </div>\r\n                                        </ng-container>\r\n                                        <ng-template #elseBlock>\r\n                                            <ng-container *ngFor=\"let status of ('leaves.status' | translate)\">\r\n                                                <div class=\"budges-status\">\r\n                                                    <span *ngIf=\"status.id == leave.status\" class=\"{{status.class}}\">{{status.label}}</span>\r\n                                                </div>\r\n                                            </ng-container>\r\n                                        </ng-template>\r\n                                    </td>\r\n                                    <td class=\"actions-dropdown\">\r\n                                        <div *ngIf=\"getCheckPermission(leave) else elseBlock1;\" class=\"btn-group\" dropdown>\r\n                                            <button aria-controls=\"dropdown-basic-1\" class=\"dropdown-toggle btn-action\" dropdownToggle id=\"button-basic-1\" type=\"button\">\r\n                                                <i class=\"fa fa-ellipsis-v\"></i></button>\r\n                                            <ul *dropdownMenu aria-labelledby=\"button-basic-1\" class=\"dropdown-menu animated fadeIn\" id=\"dropdown-basic-1\" role=\"menu\">\r\n                                                <li role=\"menuitem\">\r\n                                                    <a (click)=\"openLeaveEditModal(leave)\" class=\"dropdown-item btn btn-edit btn-raised\"><i class=\"fa fa-pencil-square-o\" tooltip=\"{{'common.edit' | translate}}\"></i></a>\r\n                                                </li>\r\n                                                <li role=\"menuitem\">\r\n                                                    <a (click)=\"deleteLeave(leave.id)\" class=\"dropdown-item btn btn-delete btn-raised\"><i class=\"fa fa-trash-o\" tooltip=\"{{'common.delete' | translate}}\"></i></a>\r\n                                                </li>\r\n                                            </ul>\r\n                                        </div>\r\n                                        <ng-template #elseBlock1><span>-</span></ng-template>\r\n                                    </td>\r\n                                </tr>\r\n                                </tbody>\r\n                                <tfoot *ngIf=\"leaves?.length == 0\" class=\"tfoot_dt\">\r\n                                <tr>\r\n                                    <td class=\"no-data-available text-center\" colspan=\"6\">{{'common.datatable.sEmptyTable' | translate}}</td>\r\n                                </tr>\r\n                                </tfoot>\r\n                            </table>\r\n                        </div>\r\n                    </div>\r\n                </div>\r\n            </div>\r\n        </div>\r\n    </div>\r\n</section>\r\n");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/modules/hrm/leaves/pages/leaves-report/leaves-report.component.html":
/*!***************************************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/modules/hrm/leaves/pages/leaves-report/leaves-report.component.html ***!
  \***************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<section class=\"hide_empty_message\">\r\n    <div class=\"row\">\r\n        <div class=\"col-sm-4\">\r\n            <div class=\"card pl-2 pr-2\">\r\n                <div class=\"card-content pt-3 pb-3\">\r\n                    <div class=\"card-body\">\r\n                        <div class=\"row\">\r\n                            <div class=\"col-xs-12 col-12 form-group\">\r\n                                <label for=\"daterangepicker\">{{'leave_report.filter.fields.date_range' | translate}}</label>\r\n                                <input [(ngModel)]=\"period_from_to\" bsDaterangepicker class=\"form-control\" placeholder=\"{{'leave_report.filter.placeholders.placeholder1' | translate}}\" type=\"text\"/>\r\n                            </div>\r\n                            <div class=\"col-xs-12 col-12 form-group\">\r\n                                <label for=\"user_id\">{{'leave_report.filter.fields.employee_name' | translate}}</label>\r\n                                <ng-select [(ngModel)]=\"user_id\" [items]=\"users\" [multiple]=\"false\" [searchable]=\"true\" bindLabel=\"firstname\" bindValue=\"id\" placeholder=\"{{'leave_report.filter.placeholders.placeholder2' | translate}}\">\r\n                                    <ng-template let-item=\"item\" ng-option-tmp>\r\n                                        {{item.firstname}} {{item.lastname}}\r\n                                    </ng-template>\r\n                                </ng-select>\r\n                            </div>\r\n                            <div class=\"col-xs-12 col-12 form-group\">\r\n                                <button (click)=\"submitFilter()\" class=\"btn btn-submit mb-0\" type=\"button\">{{'common.apply' | translate}}</button>\r\n                                <button (click)=\"resetForm()\" class=\"btn btn-cancel mb-0\" type=\"button\">{{'common.reset' | translate}}</button>\r\n                            </div>\r\n                        </div>\r\n                    </div>\r\n                </div>\r\n            </div>\r\n        </div>\r\n        <div class=\"col-sm-8\">\r\n            <div class=\"card pl-2 pr-2\">\r\n                <div class=\"card-header pl-0 pr-0 border-bottom\">\r\n                    <h4 class=\"main-title mt-2\"><span>{{'leave_report.title' | translate}}</span></h4>\r\n                    <div class=\"card-buttons\">\r\n                        <a [routerLink]=\"['/leaves']\" class=\"btn btn-create mb-0\" tooltip=\"{{'leaves.title3' | translate}}\"><i class=\"fa fa-suitcase\"></i></a>\r\n                        <a [routerLink]=\"['/leaves/request']\" class=\"btn btn-create mb-0\" tooltip=\"{{'leaves.title2' | translate}}\"><i class=\"fa fa-trello\"></i></a>\r\n                        <a [routerLink]=\"['/leaves/calendar']\" class=\"btn btn-create mb-0\" tooltip=\"{{'common.calendar_view' | translate}}\"><i class=\"fa fa-calendar\"></i></a>\r\n                    </div>\r\n                </div>\r\n                <div class=\"card-content pt-3 pb-3\">\r\n                    <div class=\"card-body\">\r\n                        <div class=\"table-responsive-xs table-responsive-sm table-responsive-md table-responsive-lg table-responsive-xl\">\r\n                            <table [dtOptions]=\"dtOptions\" [dtTrigger]=\"dtTrigger\" class=\"table table-bordered table-hover b4-datatable\" datatable id=\"leaves_table\" width=\"100%\">\r\n                                <thead>\r\n                                <tr>\r\n                                    <th>#</th>\r\n                                    <th>{{'leave_report.columns.user' | translate}}</th>\r\n                                    <th>{{'leave_report.columns.approved_leave' | translate}}</th>\r\n                                    <th>{{'leave_report.columns.pending_leave' | translate}}</th>\r\n                                </tr>\r\n                                </thead>\r\n                                <tbody *ngIf=\"leaves?.length != 0\">\r\n                                <tr *ngFor=\"let leave of leaves; index as i\">\r\n                                    <td class=\"text-center\">{{ i + 1 }}</td>\r\n                                    <td>{{leave.firstname}} {{leave.lastname}}</td>\r\n                                    <td class=\"budges-status\">\r\n                                        <span class=\"open\">{{leave.approved_leaves}}</span>\r\n                                        <a (click)=\"openLeaveDetail(2, leave.id)\">&nbsp;{{'common.view' | translate}}</a>\r\n                                    </td>\r\n                                    <td class=\"budges-status\">\r\n                                        <span class=\"in_progress\">{{leave.pending_leaves}}</span>\r\n                                        <a (click)=\"openLeaveDetail(1, leave.id)\">&nbsp;{{'common.view' | translate}}</a>\r\n                                    </td>\r\n                                </tr>\r\n                                </tbody>\r\n                                <tfoot *ngIf=\"leaves?.length == 0\" class=\"tfoot_dt\">\r\n                                <tr>\r\n                                    <td class=\"no-data-available text-center\" colspan=\"4\">{{'common.datatable.sEmptyTable' | translate}}</td>\r\n                                </tr>\r\n                                </tfoot>\r\n                            </table>\r\n                        </div>\r\n                    </div>\r\n                </div>\r\n            </div>\r\n        </div>\r\n    </div>\r\n</section>\r\n");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/modules/hrm/leaves/pages/list-view/list-view.component.html":
/*!*******************************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/modules/hrm/leaves/pages/list-view/list-view.component.html ***!
  \*******************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<section>\r\n    <div class=\"row\">\r\n        <div class=\"col-sm-12\">\r\n            <div class=\"card pl-2 pr-2\">\r\n                <div class=\"card-header pl-0 pr-0\">\r\n                    <h4 class=\"main-title mt-2\"><span>{{'leaves.title2' | translate}}</span></h4>\r\n                    <div class=\"card-buttons\">\r\n                        <a [routerLink]=\"['/leaves']\" class=\"btn btn-create mb-0\" tooltip=\"{{'leaves.title3' | translate}}\"><i class=\"fa fa-suitcase\"></i></a>\r\n                        <a [routerLink]=\"['/leaves/calendar']\" class=\"btn btn-create mb-0\" tooltip=\"{{'common.calendar_view' | translate}}\"><i class=\"fa fa-calendar\"></i></a>\r\n                        <a *ngxPermissionsOnly=\"['admin', 'super_admin', 'reports_view']\" [routerLink]=\"['/leaves/report']\" class=\"btn btn-create mb-0\" tooltip=\"{{'common.report' | translate}}\"><i class=\"fa fa-area-chart\"></i></a>\r\n                    </div>\r\n                </div>\r\n            </div>\r\n        </div>\r\n    </div>\r\n    <div class=\"row project-planner-list\">\r\n        <ng-container *ngFor=\"let leave of leaves; let i = index\">\r\n            <div class=\"col-lg-6 \">\r\n                <div class=\"card list-details\">\r\n                    <div class=\"card-body p-3\">\r\n                        <div class=\"task-name\">\r\n                            <p class=\"task-title\">{{leave.leave_type.leave_type}} {{'leaves.title4' | translate}}</p>\r\n                            <div class=\"mb-15\">\r\n                                <a href=\"#\" placement=\"top\" tooltip=\"{{leave.user.firstname}} {{leave.user.lastname}}\">\r\n                                    <img *ngIf=\"leave.user.avatar\" alt=\"Profile\" class=\"img-sm rounded-circle\" src=\"{{apiUrl}}/uploads/profile/{{leave.user.avatar}}\"/>\r\n                                    <img *ngIf=\"!leave.user.avatar\" alt=\"Profile\" class=\"img-sm rounded-circle\" src=\"../assets/img/profile_small.jpg\"/>\r\n                                </a>\r\n                                <span class=\"ml-3\"><a [routerLink]=\"['/users/profile', leave.user.id]\">{{leave.user.firstname}} {{leave.user.lastname}}</a></span>\r\n                            </div>\r\n                        </div>\r\n                        <div class=\"text-size d-lg-flex justify-content-between mt-2 mb-2\">\r\n                            <div class=\"d-flex\">\r\n                                <div class=\"mb-lg-0 mb-2\"><strong>{{'leaves.columns.leave_date' | translate}}:</strong>\r\n                                </div>\r\n                                <div class=\"ml-2 mr-2\">\r\n                                    <span>{{ leave.leave_date | dateTimeFormatFilter: loginUser.settings.date_format }}</span>\r\n                                </div>\r\n                            </div>\r\n                            <ng-container *ngIf=\"leave.duration =='half' else elseBlock\">\r\n                                <div class=\"d-flex\">\r\n                                    <div class=\"mb-lg-0 mb-2\">\r\n                                        <strong>{{'leaves.columns.duration' | translate}}:</strong></div>\r\n                                    <div class=\"ml-2 mr-2\">\r\n                                        <span>{{ getTranslateDurationType(leave.duration_type) | translate }}</span>\r\n                                    </div>\r\n                                </div>\r\n                            </ng-container>\r\n                            <ng-template #elseBlock>\r\n                                <div class=\"d-flex\">\r\n                                    <div class=\"mb-lg-0 mb-2\">\r\n                                        <strong>{{'leaves.columns.duration' | translate}}:</strong></div>\r\n                                    <div class=\"ml-2 mr-2\"><span>{{'leaves.labels.full_day' | translate}}</span></div>\r\n                                </div>\r\n                            </ng-template>\r\n                        </div>\r\n                        <p class=\"mb-2 text-size\">\r\n\t\t\t\t\t\t\t<span class=\"pr-2 text-nowrap mb-2 d-inline-block\">\r\n\t\t\t\t\t\t\t\t<i class=\"fa fa-tasks mr-1 text-muted\"></i>\r\n\t\t\t\t\t\t\t\t<b>{{leave.total_leave}}</b> {{'leaves.labels.total_leaves' | translate}}\r\n\t\t\t\t\t\t\t</span>\r\n                            <span class=\"pr-2 text-nowrap mb-2 d-inline-block\">\r\n\t\t\t\t\t\t\t\t<i class=\"fa fa-thumbs-o-up mr-1 text-muted\"></i>\r\n\t\t\t\t\t\t\t\t<b>{{leave.total_approved_leaves}}</b> {{'leaves.labels.approved' | translate}}\r\n\t\t\t\t\t\t\t</span>\r\n                            <span class=\"pr-2 text-nowrap mb-2 d-inline-block\">\r\n\t\t\t\t\t\t\t\t<i class=\"fa fa-indent mr-1 text-muted\"></i>\r\n\t\t\t\t\t\t\t\t<b>{{leave.remaining_leaves}}</b> {{'leaves.labels.remaining' | translate}}\r\n\t\t\t\t\t\t\t</span>\r\n                        </p>\r\n                        <p>{{leave.reason}}</p>\r\n                        <ng-container *ngFor=\"let attachment of leave.attachments\">\r\n                            <div>\r\n                                <a download=\"{{attachment.file_name}}\" href=\"{{apiUrl}}/uploads/leave_attachment/{{attachment.file_hash}}\" target=\"_blank\">{{attachment.file_name}}</a>\r\n                            </div>\r\n                        </ng-container>\r\n                        <div class=\"text-right\">\r\n                            <button (click)=\"changeLeaveStatus([leave.id], 2);\" class=\"btn btn-submit\" type=\"button\">{{'leaves.buttons.accept' | translate}}</button>\r\n                            <button (click)=\"changeRejectLeaveStatus([leave.id], 3);\" class=\"btn btn-cancel\" type=\"button\">{{'leaves.buttons.reject' | translate}}</button>\r\n                        </div>\r\n                    </div>\r\n                </div>\r\n            </div>\r\n        </ng-container>\r\n        <div *ngIf=\"leaves?.length == 0\" class=\"col-md-12\">\r\n            <div class=\"card\">\r\n                <div class=\"card-body\">\r\n                    <div class=\"card-content pt-2\">\r\n                        <div class=\"text-center\">\r\n                            <img src=\"assets/img/norecord-img.png\" width=\"50\">\r\n                            <p class=\"mt-1\">{{'common.empty_message.leaves' | translate}}</p>\r\n                        </div>\r\n                    </div>\r\n                </div>\r\n            </div>\r\n        </div>\r\n    </div>\r\n</section>\r\n");

/***/ }),

/***/ "./src/app/core/helpers/hrm.helper.ts":
/*!********************************************!*\
  !*** ./src/app/core/helpers/hrm.helper.ts ***!
  \********************************************/
/*! exports provided: leave_status_key_value, half_leaves_duration */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "leave_status_key_value", function() { return leave_status_key_value; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "half_leaves_duration", function() { return half_leaves_duration; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");

//--
// Leave status
var leave_status_key_value = [];
leave_status_key_value[1] = 'common.status.pending';
leave_status_key_value[2] = 'common.status.approved';
leave_status_key_value[3] = 'common.status.rejected';
leave_status_key_value[4] = 'common.status.cancel';
leave_status_key_value[5] = 'common.status.taken';
var half_leaves_duration = [];
half_leaves_duration['first_half'] = 'leaves.labels.first_half_day';
half_leaves_duration['second_half'] = 'leaves.labels.second_half_day';


/***/ }),

/***/ "./src/app/core/services/leave.service.ts":
/*!************************************************!*\
  !*** ./src/app/core/services/leave.service.ts ***!
  \************************************************/
/*! exports provided: LeaveService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LeaveService", function() { return LeaveService; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../environments/environment */ "./src/environments/environment.ts");




var LeaveService = /** @class */ (function () {
    function LeaveService(http) {
        this.http = http;
        this.apiUrl = _environments_environment__WEBPACK_IMPORTED_MODULE_3__["environment"].apiUrl;
    }
    LeaveService.prototype.getAll = function () {
        return this.http.get(this.apiUrl + "/api/leaves");
    };
    LeaveService.prototype.getById = function (id) {
        return this.http.get(this.apiUrl + "/api/leaves/" + id);
    };
    LeaveService.prototype.create = function (leave) {
        return this.http.post(this.apiUrl + "/api/leaves", leave);
    };
    LeaveService.prototype.update = function (leave) {
        return this.http.put(this.apiUrl + "/api/leaves/" + leave.id, leave);
    };
    LeaveService.prototype.delete = function (id) {
        return this.http.delete(this.apiUrl + "/api/leaves/" + id);
    };
    LeaveService.prototype.getCalendarLeaves = function () {
        return this.http.get(this.apiUrl + "/api/leaves/calendar");
    };
    LeaveService.prototype.getPendingLeaves = function () {
        return this.http.get(this.apiUrl + "/api/leaves/pending");
    };
    LeaveService.prototype.changeStatus = function (leave) {
        return this.http.post(this.apiUrl + "/api/leaves/change-status/" + leave.id, { 'status': leave.status });
    };
    LeaveService.prototype.changeRejectLeaveStatus = function (leave) {
        return this.http.post(this.apiUrl + "/api/leaves/change-status/" + leave.id, leave);
    };
    LeaveService.prototype.getLeaveReportDetails = function (leave) {
        return this.http.post(this.apiUrl + "/api/leaves/report-details", leave);
    };
    LeaveService.ctorParameters = function () { return [
        { type: _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClient"] }
    ]; };
    LeaveService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
            providedIn: 'root'
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClient"]])
    ], LeaveService);
    return LeaveService;
}());



/***/ }),

/***/ "./src/app/modules/hrm/leaves/components/create-leave/create-leave.component.scss":
/*!****************************************************************************************!*\
  !*** ./src/app/modules/hrm/leaves/components/create-leave/create-leave.component.scss ***!
  \****************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("::ng-deep .bs-datepicker-body table td span.custom-selected-date,\n::ng-deep .bs-datepicker-body table td span.custom-selected-date.selected {\n  background-color: red !important;\n  color: white !important;\n}\n\n::ng-deep .bs-datepicker-body table td span.selected {\n  background-color: transparent !important;\n  color: #54708b !important;\n}\n\n::ng-deep .bs-datepicker-body table.days span.in-range:before {\n  background-color: transparent !important;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvbW9kdWxlcy9ocm0vbGVhdmVzL2NvbXBvbmVudHMvY3JlYXRlLWxlYXZlL0M6XFxVc2Vyc1xcdGh1YW5cXE9uZURyaXZlXFxEZXNrdG9wXFxnbGF2YWwtdGh1YW5kaW5oL3NyY1xcYXBwXFxtb2R1bGVzXFxocm1cXGxlYXZlc1xcY29tcG9uZW50c1xcY3JlYXRlLWxlYXZlXFxjcmVhdGUtbGVhdmUuY29tcG9uZW50LnNjc3MiLCJzcmMvYXBwL21vZHVsZXMvaHJtL2xlYXZlcy9jb21wb25lbnRzL2NyZWF0ZS1sZWF2ZS9jcmVhdGUtbGVhdmUuY29tcG9uZW50LnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7O0VBRUksZ0NBQUE7RUFDQSx1QkFBQTtBQ0NKOztBREVBO0VBQ0ksd0NBQUE7RUFDQSx5QkFBQTtBQ0NKOztBREVBO0VBQ0ksd0NBQUE7QUNDSiIsImZpbGUiOiJzcmMvYXBwL21vZHVsZXMvaHJtL2xlYXZlcy9jb21wb25lbnRzL2NyZWF0ZS1sZWF2ZS9jcmVhdGUtbGVhdmUuY29tcG9uZW50LnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyI6Om5nLWRlZXAgLmJzLWRhdGVwaWNrZXItYm9keSB0YWJsZSB0ZCBzcGFuLmN1c3RvbS1zZWxlY3RlZC1kYXRlLFxyXG46Om5nLWRlZXAgLmJzLWRhdGVwaWNrZXItYm9keSB0YWJsZSB0ZCBzcGFuLmN1c3RvbS1zZWxlY3RlZC1kYXRlLnNlbGVjdGVkIHtcclxuICAgIGJhY2tncm91bmQtY29sb3I6IHJlZCAhaW1wb3J0YW50O1xyXG4gICAgY29sb3I6IHdoaXRlICFpbXBvcnRhbnQ7XHJcbn1cclxuXHJcbjo6bmctZGVlcCAuYnMtZGF0ZXBpY2tlci1ib2R5IHRhYmxlIHRkIHNwYW4uc2VsZWN0ZWQge1xyXG4gICAgYmFja2dyb3VuZC1jb2xvcjogdHJhbnNwYXJlbnQgIWltcG9ydGFudDtcclxuICAgIGNvbG9yOiAjNTQ3MDhiICFpbXBvcnRhbnQ7XHJcbn1cclxuXHJcbjo6bmctZGVlcCAuYnMtZGF0ZXBpY2tlci1ib2R5IHRhYmxlLmRheXMgc3Bhbi5pbi1yYW5nZTpiZWZvcmUge1xyXG4gICAgYmFja2dyb3VuZC1jb2xvcjogdHJhbnNwYXJlbnQgIWltcG9ydGFudDtcclxufVxyXG4iLCI6Om5nLWRlZXAgLmJzLWRhdGVwaWNrZXItYm9keSB0YWJsZSB0ZCBzcGFuLmN1c3RvbS1zZWxlY3RlZC1kYXRlLFxuOjpuZy1kZWVwIC5icy1kYXRlcGlja2VyLWJvZHkgdGFibGUgdGQgc3Bhbi5jdXN0b20tc2VsZWN0ZWQtZGF0ZS5zZWxlY3RlZCB7XG4gIGJhY2tncm91bmQtY29sb3I6IHJlZCAhaW1wb3J0YW50O1xuICBjb2xvcjogd2hpdGUgIWltcG9ydGFudDtcbn1cblxuOjpuZy1kZWVwIC5icy1kYXRlcGlja2VyLWJvZHkgdGFibGUgdGQgc3Bhbi5zZWxlY3RlZCB7XG4gIGJhY2tncm91bmQtY29sb3I6IHRyYW5zcGFyZW50ICFpbXBvcnRhbnQ7XG4gIGNvbG9yOiAjNTQ3MDhiICFpbXBvcnRhbnQ7XG59XG5cbjo6bmctZGVlcCAuYnMtZGF0ZXBpY2tlci1ib2R5IHRhYmxlLmRheXMgc3Bhbi5pbi1yYW5nZTpiZWZvcmUge1xuICBiYWNrZ3JvdW5kLWNvbG9yOiB0cmFuc3BhcmVudCAhaW1wb3J0YW50O1xufSJdfQ== */");

/***/ }),

/***/ "./src/app/modules/hrm/leaves/components/create-leave/create-leave.component.ts":
/*!**************************************************************************************!*\
  !*** ./src/app/modules/hrm/leaves/components/create-leave/create-leave.component.ts ***!
  \**************************************************************************************/
/*! exports provided: CreateLeaveComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CreateLeaveComponent", function() { return CreateLeaveComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var ngx_bootstrap_modal__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ngx-bootstrap/modal */ "./node_modules/ngx-bootstrap/modal/fesm5/ngx-bootstrap-modal.js");
/* harmony import */ var ngx_toastr__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ngx-toastr */ "./node_modules/ngx-toastr/fesm5/ngx-toastr.js");
/* harmony import */ var _ngx_translate_core__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @ngx-translate/core */ "./node_modules/@ngx-translate/core/fesm5/ngx-translate-core.js");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! rxjs */ "./node_modules/rxjs/_esm5/index.js");
/* harmony import */ var _core_services_leave_service__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../../../../../core/services/leave.service */ "./src/app/core/services/leave.service.ts");
/* harmony import */ var _core_services_leavetype_service__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../../../../../core/services/leavetype.service */ "./src/app/core/services/leavetype.service.ts");
/* harmony import */ var _core_services_user_service__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ../../../../../core/services/user.service */ "./src/app/core/services/user.service.ts");
/* harmony import */ var _core_services_authentication_service__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ../../../../../core/services/authentication.service */ "./src/app/core/services/authentication.service.ts");
/* harmony import */ var _components_leave_type_modal_leave_type_modal_component__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ../../components/leave-type-modal/leave-type-modal.component */ "./src/app/modules/hrm/leaves/components/leave-type-modal/leave-type-modal.component.ts");
/* harmony import */ var dropzone__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! dropzone */ "./node_modules/dropzone/dist/dropzone.js");
/* harmony import */ var dropzone__WEBPACK_IMPORTED_MODULE_13___default = /*#__PURE__*/__webpack_require__.n(dropzone__WEBPACK_IMPORTED_MODULE_13__);














var CreateLeaveComponent = /** @class */ (function () {
    function CreateLeaveComponent(translate, bsModalRef, formBuilder, toastr, modalService, datepipe, leaveService, leavetypeService, userService, authenticationService) {
        var _this_1 = this;
        this.translate = translate;
        this.bsModalRef = bsModalRef;
        this.formBuilder = formBuilder;
        this.toastr = toastr;
        this.modalService = modalService;
        this.datepipe = datepipe;
        this.leaveService = leaveService;
        this.leavetypeService = leavetypeService;
        this.userService = userService;
        this.authenticationService = authenticationService;
        this.event = new _angular_core__WEBPACK_IMPORTED_MODULE_1__["EventEmitter"]();
        this.isFormSubmitted = false;
        this.isPageLoad = false;
        this.dateSelected = [];
        this.selectedClass = [];
        this.selectedFiles = [];
        this.datepickerConfig = {
            dateInputFormat: 'YYYY-MM-DD',
            containerClass: 'theme-red'
        };
        this.modalConfigs = {
            animated: true,
            keyboard: true,
            backdrop: true,
            ignoreBackdropClick: false,
            class: 'inmodal modal-dialog-centered modal-lg animated fadeIn'
        };
        this.authenticationService.loginUser.subscribe(function (x) { return _this_1.loginUser = x; });
    }
    Object.defineProperty(CreateLeaveComponent.prototype, "leaveControl", {
        get: function () {
            return this.createLeaveForm.controls;
        },
        enumerable: true,
        configurable: true
    });
    CreateLeaveComponent.prototype.ngOnInit = function () {
        this.onClose = new rxjs__WEBPACK_IMPORTED_MODULE_7__["Subject"]();
        this.getLeaveTypes(true);
        this.getUsers();
    };
    CreateLeaveComponent.prototype.loadForm = function () {
        var _this_1 = this;
        if (this.loginUser.is_admin || this.loginUser.is_super_admin) {
            this.createLeaveForm = this.formBuilder.group({
                user_id: [null, _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required],
                leave_type_id: [null, _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required],
                duration: ['full'],
                multi_date: [null],
                leave_date: [null],
                duration_type: [null],
                reason: [null, _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required],
                status: [1],
                files: [null]
            });
        }
        else {
            this.createLeaveForm = this.formBuilder.group({
                user_id: [this.loginUser.id],
                leave_type_id: [null, _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required],
                duration: ['full'],
                multi_date: [null],
                leave_date: [null],
                duration_type: [null],
                reason: [null, _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required],
                status: [1],
                files: [null]
            });
        }
        this.changeDuration();
        this.isPageLoad = true;
        setTimeout(function () {
            _this_1.loadDropzone();
        });
    };
    CreateLeaveComponent.prototype.loadDropzone = function () {
        var that = this;
        this.dropzoneObj = new dropzone__WEBPACK_IMPORTED_MODULE_13__(this.leaveDropzone.nativeElement, {
            url: 'https://httpbin.org/post',
            maxFiles: 5,
            clickable: true,
            createImageThumbnails: true,
            init: function () {
                this.on('addedfile', function (file) {
                    var removeButton = dropzone__WEBPACK_IMPORTED_MODULE_13__["createElement"]('<button class=\'btn btn-sm btn-block\'>' + that.translate.instant('common.remove_file') + '</button>');
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
    CreateLeaveComponent.prototype.changeDuration = function ($event) {
        if ($event === void 0) { $event = []; }
        if (this.createLeaveForm.value.duration == 'multiple') {
            this.selectedClass = [];
            this.dateSelected = [];
            this.createLeaveForm.get('multi_date').setValidators([_angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required]);
            this.createLeaveForm.get('multi_date').updateValueAndValidity();
            this.createLeaveForm.get('leave_date').clearValidators();
            this.createLeaveForm.get('leave_date').updateValueAndValidity();
        }
        else {
            this.createLeaveForm.get('leave_date').setValidators([_angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required]);
            this.createLeaveForm.get('leave_date').updateValueAndValidity();
            this.createLeaveForm.get('multi_date').clearValidators();
            this.createLeaveForm.get('multi_date').updateValueAndValidity();
        }
        if (this.createLeaveForm.value.duration == 'half') {
            this.createLeaveForm.patchValue({ 'duration_type': 'first_half' });
        }
        else {
            this.createLeaveForm.patchValue({ 'duration_type': null });
        }
    };
    CreateLeaveComponent.prototype.getLeaveTypes = function (isFormload) {
        var _this_1 = this;
        if (isFormload === void 0) { isFormload = false; }
        this.leavetypeService.getAll()
            .subscribe(function (data) {
            _this_1.leavetypes = data;
            if (isFormload) {
                _this_1.loadForm();
            }
        });
    };
    CreateLeaveComponent.prototype.getUsers = function () {
        var _this_1 = this;
        this.userService.getAll()
            .subscribe(function (data) {
            _this_1.users = data;
        });
    };
    CreateLeaveComponent.prototype.getDateItem = function (date) {
        return date.getFullYear() + "-" + (date.getMonth() + 1) + "-" + date.getDate();
    };
    CreateLeaveComponent.prototype.onValueChange = function (event) {
        var _this_1 = this;
        if (event && event.length === undefined) {
            var date_1 = this.getDateItem(event);
            var index = this.dateSelected.findIndex(function (item) {
                var testDate = _this_1.getDateItem(item);
                return testDate === date_1;
            });
            if (index < 0) {
                this.dateSelected.push(event);
            }
            else {
                this.dateSelected.splice(index, 1);
            }
        }
        if (this.dateSelected.length > 0) {
            this.selectedClass = this.dateSelected.map(function (date) {
                return {
                    date: date,
                    classes: ['custom-selected-date']
                };
            });
        }
    };
    CreateLeaveComponent.prototype.renderDates = function () {
        var dateArray = [];
        if (this.dateSelected) {
            for (var i in this.dateSelected) {
                dateArray.push(this.datepipe.transform(this.dateSelected[i], 'yyyy-MM-dd'));
            }
        }
        return dateArray;
    };
    CreateLeaveComponent.prototype.openLeaveTypeModal = function () {
        var _this_1 = this;
        this.bsModalRef = this.modalService.show(_components_leave_type_modal_leave_type_modal_component__WEBPACK_IMPORTED_MODULE_12__["LeaveTypeModalComponent"], this.modalConfigs);
        this.bsModalRef.content.event.subscribe(function (data) {
            _this_1.getLeaveTypes();
        });
    };
    CreateLeaveComponent.prototype.onSubmit = function () {
        var _this_1 = this;
        this.isFormSubmitted = true;
        if (this.createLeaveForm.invalid) {
            return;
        }
        this.createLeaveForm.patchValue({ files: this.selectedFiles });
        this.createLeaveForm.value.leave_date = this.datepipe.transform(this.createLeaveForm.value.leave_date, 'yyyy-MM-dd');
        this.createLeaveForm.value.multi_date = this.renderDates();
        this.leaveService.create(this.createLeaveForm.value).subscribe(function (data) {
            _this_1.toastr.success(_this_1.translate.instant('leaves.messages.create'), _this_1.translate.instant('leaves.title'));
            _this_1.onCancel();
            _this_1.event.emit({ data: true });
        }, function (error) {
            _this_1.onCancel();
        });
    };
    CreateLeaveComponent.prototype.onCancel = function () {
        this.onClose.next(false);
        this.bsModalRef.hide();
    };
    CreateLeaveComponent.ctorParameters = function () { return [
        { type: _ngx_translate_core__WEBPACK_IMPORTED_MODULE_6__["TranslateService"] },
        { type: ngx_bootstrap_modal__WEBPACK_IMPORTED_MODULE_4__["BsModalRef"] },
        { type: _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormBuilder"] },
        { type: ngx_toastr__WEBPACK_IMPORTED_MODULE_5__["ToastrService"] },
        { type: ngx_bootstrap_modal__WEBPACK_IMPORTED_MODULE_4__["BsModalService"] },
        { type: _angular_common__WEBPACK_IMPORTED_MODULE_3__["DatePipe"] },
        { type: _core_services_leave_service__WEBPACK_IMPORTED_MODULE_8__["LeaveService"] },
        { type: _core_services_leavetype_service__WEBPACK_IMPORTED_MODULE_9__["LeavetypeService"] },
        { type: _core_services_user_service__WEBPACK_IMPORTED_MODULE_10__["UserService"] },
        { type: _core_services_authentication_service__WEBPACK_IMPORTED_MODULE_11__["AuthenticationService"] }
    ]; };
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewChild"])('leaveDropzone', { static: false }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", _angular_core__WEBPACK_IMPORTED_MODULE_1__["ElementRef"])
    ], CreateLeaveComponent.prototype, "leaveDropzone", void 0);
    CreateLeaveComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-create-leave',
            template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./create-leave.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/modules/hrm/leaves/components/create-leave/create-leave.component.html")).default,
            styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./create-leave.component.scss */ "./src/app/modules/hrm/leaves/components/create-leave/create-leave.component.scss")).default]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_ngx_translate_core__WEBPACK_IMPORTED_MODULE_6__["TranslateService"],
            ngx_bootstrap_modal__WEBPACK_IMPORTED_MODULE_4__["BsModalRef"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormBuilder"],
            ngx_toastr__WEBPACK_IMPORTED_MODULE_5__["ToastrService"],
            ngx_bootstrap_modal__WEBPACK_IMPORTED_MODULE_4__["BsModalService"],
            _angular_common__WEBPACK_IMPORTED_MODULE_3__["DatePipe"],
            _core_services_leave_service__WEBPACK_IMPORTED_MODULE_8__["LeaveService"],
            _core_services_leavetype_service__WEBPACK_IMPORTED_MODULE_9__["LeavetypeService"],
            _core_services_user_service__WEBPACK_IMPORTED_MODULE_10__["UserService"],
            _core_services_authentication_service__WEBPACK_IMPORTED_MODULE_11__["AuthenticationService"]])
    ], CreateLeaveComponent);
    return CreateLeaveComponent;
}());



/***/ }),

/***/ "./src/app/modules/hrm/leaves/components/edit-leave/edit-leave.component.scss":
/*!************************************************************************************!*\
  !*** ./src/app/modules/hrm/leaves/components/edit-leave/edit-leave.component.scss ***!
  \************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("::ng-deep .bs-datepicker-body table td span.custom-selected-date,\n::ng-deep .bs-datepicker-body table td span.custom-selected-date.selected {\n  background-color: red !important;\n  color: white !important;\n}\n\n::ng-deep .bs-datepicker-body table td span.selected {\n  background-color: transparent !important;\n  color: #54708b !important;\n}\n\n::ng-deep .bs-datepicker-body table.days span.in-range:before {\n  background-color: transparent !important;\n}\n\nimg {\n  max-width: 100%;\n  height: 120px;\n}\n\n.dz-image-custom {\n  border-radius: 20px;\n  width: 120px;\n  height: 120px;\n  position: relative;\n  display: block;\n  z-index: 10;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvbW9kdWxlcy9ocm0vbGVhdmVzL2NvbXBvbmVudHMvZWRpdC1sZWF2ZS9DOlxcVXNlcnNcXHRodWFuXFxPbmVEcml2ZVxcRGVza3RvcFxcZ2xhdmFsLXRodWFuZGluaC9zcmNcXGFwcFxcbW9kdWxlc1xcaHJtXFxsZWF2ZXNcXGNvbXBvbmVudHNcXGVkaXQtbGVhdmVcXGVkaXQtbGVhdmUuY29tcG9uZW50LnNjc3MiLCJzcmMvYXBwL21vZHVsZXMvaHJtL2xlYXZlcy9jb21wb25lbnRzL2VkaXQtbGVhdmUvZWRpdC1sZWF2ZS5jb21wb25lbnQuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTs7RUFFSSxnQ0FBQTtFQUNBLHVCQUFBO0FDQ0o7O0FERUE7RUFDSSx3Q0FBQTtFQUNBLHlCQUFBO0FDQ0o7O0FERUE7RUFDSSx3Q0FBQTtBQ0NKOztBREVBO0VBQ0ksZUFBQTtFQUNBLGFBQUE7QUNDSjs7QURFQTtFQUNJLG1CQUFBO0VBQ0EsWUFBQTtFQUNBLGFBQUE7RUFDQSxrQkFBQTtFQUNBLGNBQUE7RUFDQSxXQUFBO0FDQ0oiLCJmaWxlIjoic3JjL2FwcC9tb2R1bGVzL2hybS9sZWF2ZXMvY29tcG9uZW50cy9lZGl0LWxlYXZlL2VkaXQtbGVhdmUuY29tcG9uZW50LnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyI6Om5nLWRlZXAgLmJzLWRhdGVwaWNrZXItYm9keSB0YWJsZSB0ZCBzcGFuLmN1c3RvbS1zZWxlY3RlZC1kYXRlLFxyXG46Om5nLWRlZXAgLmJzLWRhdGVwaWNrZXItYm9keSB0YWJsZSB0ZCBzcGFuLmN1c3RvbS1zZWxlY3RlZC1kYXRlLnNlbGVjdGVkIHtcclxuICAgIGJhY2tncm91bmQtY29sb3I6IHJlZCAhaW1wb3J0YW50O1xyXG4gICAgY29sb3I6IHdoaXRlICFpbXBvcnRhbnQ7XHJcbn1cclxuXHJcbjo6bmctZGVlcCAuYnMtZGF0ZXBpY2tlci1ib2R5IHRhYmxlIHRkIHNwYW4uc2VsZWN0ZWQge1xyXG4gICAgYmFja2dyb3VuZC1jb2xvcjogdHJhbnNwYXJlbnQgIWltcG9ydGFudDtcclxuICAgIGNvbG9yOiAjNTQ3MDhiICFpbXBvcnRhbnQ7XHJcbn1cclxuXHJcbjo6bmctZGVlcCAuYnMtZGF0ZXBpY2tlci1ib2R5IHRhYmxlLmRheXMgc3Bhbi5pbi1yYW5nZTpiZWZvcmUge1xyXG4gICAgYmFja2dyb3VuZC1jb2xvcjogdHJhbnNwYXJlbnQgIWltcG9ydGFudDtcclxufVxyXG5cclxuaW1nIHtcclxuICAgIG1heC13aWR0aDogMTAwJTtcclxuICAgIGhlaWdodDogMTIwcHg7XHJcbn1cclxuXHJcbi5kei1pbWFnZS1jdXN0b20ge1xyXG4gICAgYm9yZGVyLXJhZGl1czogMjBweDtcclxuICAgIHdpZHRoOiAxMjBweDtcclxuICAgIGhlaWdodDogMTIwcHg7XHJcbiAgICBwb3NpdGlvbjogcmVsYXRpdmU7XHJcbiAgICBkaXNwbGF5OiBibG9jaztcclxuICAgIHotaW5kZXg6IDEwO1xyXG59XHJcbiIsIjo6bmctZGVlcCAuYnMtZGF0ZXBpY2tlci1ib2R5IHRhYmxlIHRkIHNwYW4uY3VzdG9tLXNlbGVjdGVkLWRhdGUsXG46Om5nLWRlZXAgLmJzLWRhdGVwaWNrZXItYm9keSB0YWJsZSB0ZCBzcGFuLmN1c3RvbS1zZWxlY3RlZC1kYXRlLnNlbGVjdGVkIHtcbiAgYmFja2dyb3VuZC1jb2xvcjogcmVkICFpbXBvcnRhbnQ7XG4gIGNvbG9yOiB3aGl0ZSAhaW1wb3J0YW50O1xufVxuXG46Om5nLWRlZXAgLmJzLWRhdGVwaWNrZXItYm9keSB0YWJsZSB0ZCBzcGFuLnNlbGVjdGVkIHtcbiAgYmFja2dyb3VuZC1jb2xvcjogdHJhbnNwYXJlbnQgIWltcG9ydGFudDtcbiAgY29sb3I6ICM1NDcwOGIgIWltcG9ydGFudDtcbn1cblxuOjpuZy1kZWVwIC5icy1kYXRlcGlja2VyLWJvZHkgdGFibGUuZGF5cyBzcGFuLmluLXJhbmdlOmJlZm9yZSB7XG4gIGJhY2tncm91bmQtY29sb3I6IHRyYW5zcGFyZW50ICFpbXBvcnRhbnQ7XG59XG5cbmltZyB7XG4gIG1heC13aWR0aDogMTAwJTtcbiAgaGVpZ2h0OiAxMjBweDtcbn1cblxuLmR6LWltYWdlLWN1c3RvbSB7XG4gIGJvcmRlci1yYWRpdXM6IDIwcHg7XG4gIHdpZHRoOiAxMjBweDtcbiAgaGVpZ2h0OiAxMjBweDtcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xuICBkaXNwbGF5OiBibG9jaztcbiAgei1pbmRleDogMTA7XG59Il19 */");

/***/ }),

/***/ "./src/app/modules/hrm/leaves/components/edit-leave/edit-leave.component.ts":
/*!**********************************************************************************!*\
  !*** ./src/app/modules/hrm/leaves/components/edit-leave/edit-leave.component.ts ***!
  \**********************************************************************************/
/*! exports provided: EditLeaveComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "EditLeaveComponent", function() { return EditLeaveComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var ngx_bootstrap_modal__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ngx-bootstrap/modal */ "./node_modules/ngx-bootstrap/modal/fesm5/ngx-bootstrap-modal.js");
/* harmony import */ var ngx_toastr__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ngx-toastr */ "./node_modules/ngx-toastr/fesm5/ngx-toastr.js");
/* harmony import */ var _ngx_translate_core__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @ngx-translate/core */ "./node_modules/@ngx-translate/core/fesm5/ngx-translate-core.js");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! rxjs */ "./node_modules/rxjs/_esm5/index.js");
/* harmony import */ var _core_services_leave_service__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../../../../../core/services/leave.service */ "./src/app/core/services/leave.service.ts");
/* harmony import */ var _core_services_leavetype_service__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../../../../../core/services/leavetype.service */ "./src/app/core/services/leavetype.service.ts");
/* harmony import */ var _components_leave_type_modal_leave_type_modal_component__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ../../components/leave-type-modal/leave-type-modal.component */ "./src/app/modules/hrm/leaves/components/leave-type-modal/leave-type-modal.component.ts");
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ../../../../../../environments/environment */ "./src/environments/environment.ts");
/* harmony import */ var dropzone__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! dropzone */ "./node_modules/dropzone/dist/dropzone.js");
/* harmony import */ var dropzone__WEBPACK_IMPORTED_MODULE_12___default = /*#__PURE__*/__webpack_require__.n(dropzone__WEBPACK_IMPORTED_MODULE_12__);













var EditLeaveComponent = /** @class */ (function () {
    function EditLeaveComponent(translate, bsModalRef, formBuilder, modalService, toastr, datepipe, leaveService, leavetypeService) {
        this.translate = translate;
        this.bsModalRef = bsModalRef;
        this.formBuilder = formBuilder;
        this.modalService = modalService;
        this.toastr = toastr;
        this.datepipe = datepipe;
        this.leaveService = leaveService;
        this.leavetypeService = leavetypeService;
        this.event = new _angular_core__WEBPACK_IMPORTED_MODULE_1__["EventEmitter"]();
        this.selectedFiles = [];
        this.removedFiles = [];
        this.isFormSubmitted = false;
        this.isPageLoad = false;
        this.isFormLoad = false;
        this.datepickerConfig = {
            dateInputFormat: 'YYYY-MM-DD',
            containerClass: 'theme-red'
        };
        this.modalConfigs = {
            animated: true,
            keyboard: true,
            backdrop: true,
            ignoreBackdropClick: false,
            class: 'inmodal modal-dialog-centered modal-lg animated fadeIn'
        };
        this.apiUrl = _environments_environment__WEBPACK_IMPORTED_MODULE_11__["environment"].apiUrl;
    }
    Object.defineProperty(EditLeaveComponent.prototype, "leaveControl", {
        get: function () {
            return this.editLeaveForm.controls;
        },
        enumerable: true,
        configurable: true
    });
    EditLeaveComponent.prototype.ngOnInit = function () {
        this.onClose = new rxjs__WEBPACK_IMPORTED_MODULE_7__["Subject"]();
        this.getLeaveTypes(true);
    };
    EditLeaveComponent.prototype.loadForm = function () {
        var _this_1 = this;
        this.editLeaveForm = this.formBuilder.group({
            id: [this.leave.id],
            user_id: [this.leave.user_id],
            leave_type_id: [this.leave.leave_type_id, _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required],
            duration: [this.leave.duration],
            duration_type: [this.leave.duration_type],
            leave_date: [new Date(this.leave.leave_date), _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required],
            reason: [this.leave.reason, _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required],
            status: [this.leave.status],
            files: [null],
            removed_files: [null]
        });
        this.isPageLoad = true;
        setTimeout(function () {
            _this_1.loadDropzone();
        });
    };
    EditLeaveComponent.prototype.loadDropzone = function () {
        var that = this;
        this.dropzoneObj = new dropzone__WEBPACK_IMPORTED_MODULE_12__(this.leaveDropzone.nativeElement, {
            url: 'https://httpbin.org/post',
            maxFiles: 5,
            clickable: true,
            createImageThumbnails: true,
            init: function () {
                this.on('addedfile', function (file) {
                    var removeButton = dropzone__WEBPACK_IMPORTED_MODULE_12__["createElement"]('<button class=\'btn btn-sm btn-block\'>' + that.translate.instant('common.remove_file') + '</button>');
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
    EditLeaveComponent.prototype.removeattachments = function (id) {
        var _this_1 = this;
        this.leave.attachments.forEach(function (value, index) {
            if (value.id == id) {
                _this_1.leave.attachments.splice(index, 1);
                _this_1.removedFiles.push(id);
            }
        });
    };
    EditLeaveComponent.prototype.changeDuration = function ($event) {
        if ($event === void 0) { $event = []; }
        if (this.editLeaveForm.value.duration == 'half') {
            this.editLeaveForm.patchValue({ 'duration_type': 'first_half' });
        }
        else {
            this.editLeaveForm.patchValue({ 'duration_type': null });
        }
    };
    EditLeaveComponent.prototype.getLeaveTypes = function (isFormload) {
        var _this_1 = this;
        if (isFormload === void 0) { isFormload = false; }
        this.leavetypeService.getAll()
            .subscribe(function (data) {
            _this_1.leavetypes = data;
            if (isFormload) {
                _this_1.loadForm();
            }
        });
    };
    EditLeaveComponent.prototype.openLeaveTypeModal = function () {
        var _this_1 = this;
        this.bsModalRef = this.modalService.show(_components_leave_type_modal_leave_type_modal_component__WEBPACK_IMPORTED_MODULE_10__["LeaveTypeModalComponent"], this.modalConfigs);
        this.bsModalRef.content.event.subscribe(function (data) {
            _this_1.getLeaveTypes();
        });
        return false;
    };
    EditLeaveComponent.prototype.onSubmit = function () {
        var _this_1 = this;
        this.isFormSubmitted = true;
        if (this.editLeaveForm.invalid) {
            return;
        }
        this.editLeaveForm.patchValue({ files: this.selectedFiles });
        this.editLeaveForm.patchValue({ removed_files: this.removedFiles });
        this.editLeaveForm.value.leave_date = this.datepipe.transform(this.editLeaveForm.value.leave_date, 'yyyy-MM-dd');
        this.leaveService.update(this.editLeaveForm.value).subscribe(function (data) {
            _this_1.toastr.success(_this_1.translate.instant('leaves.messages.update'), _this_1.translate.instant('leaves.title'));
            _this_1.onCancel();
            _this_1.event.emit({ data: true });
        }, function (error) {
            _this_1.onCancel();
        });
    };
    EditLeaveComponent.prototype.onCancel = function () {
        this.onClose.next(false);
        this.bsModalRef.hide();
    };
    EditLeaveComponent.ctorParameters = function () { return [
        { type: _ngx_translate_core__WEBPACK_IMPORTED_MODULE_6__["TranslateService"] },
        { type: ngx_bootstrap_modal__WEBPACK_IMPORTED_MODULE_4__["BsModalRef"] },
        { type: _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormBuilder"] },
        { type: ngx_bootstrap_modal__WEBPACK_IMPORTED_MODULE_4__["BsModalService"] },
        { type: ngx_toastr__WEBPACK_IMPORTED_MODULE_5__["ToastrService"] },
        { type: _angular_common__WEBPACK_IMPORTED_MODULE_3__["DatePipe"] },
        { type: _core_services_leave_service__WEBPACK_IMPORTED_MODULE_8__["LeaveService"] },
        { type: _core_services_leavetype_service__WEBPACK_IMPORTED_MODULE_9__["LeavetypeService"] }
    ]; };
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewChild"])('leaveDropzone', { static: false }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", _angular_core__WEBPACK_IMPORTED_MODULE_1__["ElementRef"])
    ], EditLeaveComponent.prototype, "leaveDropzone", void 0);
    EditLeaveComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-edit-leave',
            template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./edit-leave.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/modules/hrm/leaves/components/edit-leave/edit-leave.component.html")).default,
            styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./edit-leave.component.scss */ "./src/app/modules/hrm/leaves/components/edit-leave/edit-leave.component.scss")).default]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_ngx_translate_core__WEBPACK_IMPORTED_MODULE_6__["TranslateService"],
            ngx_bootstrap_modal__WEBPACK_IMPORTED_MODULE_4__["BsModalRef"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormBuilder"],
            ngx_bootstrap_modal__WEBPACK_IMPORTED_MODULE_4__["BsModalService"],
            ngx_toastr__WEBPACK_IMPORTED_MODULE_5__["ToastrService"],
            _angular_common__WEBPACK_IMPORTED_MODULE_3__["DatePipe"],
            _core_services_leave_service__WEBPACK_IMPORTED_MODULE_8__["LeaveService"],
            _core_services_leavetype_service__WEBPACK_IMPORTED_MODULE_9__["LeavetypeService"]])
    ], EditLeaveComponent);
    return EditLeaveComponent;
}());



/***/ }),

/***/ "./src/app/modules/hrm/leaves/components/leave-detail/leave-detail.component.scss":
/*!****************************************************************************************!*\
  !*** ./src/app/modules/hrm/leaves/components/leave-detail/leave-detail.component.scss ***!
  \****************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL21vZHVsZXMvaHJtL2xlYXZlcy9jb21wb25lbnRzL2xlYXZlLWRldGFpbC9sZWF2ZS1kZXRhaWwuY29tcG9uZW50LnNjc3MifQ== */");

/***/ }),

/***/ "./src/app/modules/hrm/leaves/components/leave-detail/leave-detail.component.ts":
/*!**************************************************************************************!*\
  !*** ./src/app/modules/hrm/leaves/components/leave-detail/leave-detail.component.ts ***!
  \**************************************************************************************/
/*! exports provided: LeaveDetailComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LeaveDetailComponent", function() { return LeaveDetailComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var ngx_bootstrap_modal__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ngx-bootstrap/modal */ "./node_modules/ngx-bootstrap/modal/fesm5/ngx-bootstrap-modal.js");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! rxjs */ "./node_modules/rxjs/_esm5/index.js");
/* harmony import */ var _core_services_leave_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../../../../core/services/leave.service */ "./src/app/core/services/leave.service.ts");





var LeaveDetailComponent = /** @class */ (function () {
    function LeaveDetailComponent(bsModalRef1, modalService, leaveService) {
        this.bsModalRef1 = bsModalRef1;
        this.modalService = modalService;
        this.leaveService = leaveService;
        this.event = new _angular_core__WEBPACK_IMPORTED_MODULE_1__["EventEmitter"]();
        this.isPageLoad = false;
    }
    LeaveDetailComponent.prototype.ngOnInit = function () {
        this.onClose = new rxjs__WEBPACK_IMPORTED_MODULE_3__["Subject"]();
        this.getLeaves();
    };
    LeaveDetailComponent.prototype.getLeaves = function () {
        var _this = this;
        this.leaveService.getLeaveReportDetails(this.leave)
            .subscribe(function (data) {
            _this.leavesData = data;
            _this.isPageLoad = true;
        });
    };
    LeaveDetailComponent.prototype.onCancel = function () {
        this.event.emit({ data: true });
        this.onClose.next(false);
        this.bsModalRef1.hide();
    };
    LeaveDetailComponent.ctorParameters = function () { return [
        { type: ngx_bootstrap_modal__WEBPACK_IMPORTED_MODULE_2__["BsModalRef"] },
        { type: ngx_bootstrap_modal__WEBPACK_IMPORTED_MODULE_2__["BsModalService"] },
        { type: _core_services_leave_service__WEBPACK_IMPORTED_MODULE_4__["LeaveService"] }
    ]; };
    LeaveDetailComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-leave-detail',
            template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./leave-detail.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/modules/hrm/leaves/components/leave-detail/leave-detail.component.html")).default,
            styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./leave-detail.component.scss */ "./src/app/modules/hrm/leaves/components/leave-detail/leave-detail.component.scss")).default]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [ngx_bootstrap_modal__WEBPACK_IMPORTED_MODULE_2__["BsModalRef"],
            ngx_bootstrap_modal__WEBPACK_IMPORTED_MODULE_2__["BsModalService"],
            _core_services_leave_service__WEBPACK_IMPORTED_MODULE_4__["LeaveService"]])
    ], LeaveDetailComponent);
    return LeaveDetailComponent;
}());



/***/ }),

/***/ "./src/app/modules/hrm/leaves/components/leave-type-modal/leave-type-modal.component.scss":
/*!************************************************************************************************!*\
  !*** ./src/app/modules/hrm/leaves/components/leave-type-modal/leave-type-modal.component.scss ***!
  \************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL21vZHVsZXMvaHJtL2xlYXZlcy9jb21wb25lbnRzL2xlYXZlLXR5cGUtbW9kYWwvbGVhdmUtdHlwZS1tb2RhbC5jb21wb25lbnQuc2NzcyJ9 */");

/***/ }),

/***/ "./src/app/modules/hrm/leaves/components/leave-type-modal/leave-type-modal.component.ts":
/*!**********************************************************************************************!*\
  !*** ./src/app/modules/hrm/leaves/components/leave-type-modal/leave-type-modal.component.ts ***!
  \**********************************************************************************************/
/*! exports provided: LeaveTypeModalComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LeaveTypeModalComponent", function() { return LeaveTypeModalComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var ngx_bootstrap_modal__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ngx-bootstrap/modal */ "./node_modules/ngx-bootstrap/modal/fesm5/ngx-bootstrap-modal.js");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! rxjs */ "./node_modules/rxjs/_esm5/index.js");




var LeaveTypeModalComponent = /** @class */ (function () {
    function LeaveTypeModalComponent(bsModalRef1, modalService) {
        this.bsModalRef1 = bsModalRef1;
        this.modalService = modalService;
        this.event = new _angular_core__WEBPACK_IMPORTED_MODULE_1__["EventEmitter"]();
    }
    LeaveTypeModalComponent.prototype.ngOnInit = function () {
        this.onClose = new rxjs__WEBPACK_IMPORTED_MODULE_3__["Subject"]();
    };
    LeaveTypeModalComponent.prototype.onCancel = function () {
        this.event.emit({ data: true });
        this.onClose.next(false);
        this.bsModalRef1.hide();
    };
    LeaveTypeModalComponent.ctorParameters = function () { return [
        { type: ngx_bootstrap_modal__WEBPACK_IMPORTED_MODULE_2__["BsModalRef"] },
        { type: ngx_bootstrap_modal__WEBPACK_IMPORTED_MODULE_2__["BsModalService"] }
    ]; };
    LeaveTypeModalComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-leave-type-modal',
            template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./leave-type-modal.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/modules/hrm/leaves/components/leave-type-modal/leave-type-modal.component.html")).default,
            styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./leave-type-modal.component.scss */ "./src/app/modules/hrm/leaves/components/leave-type-modal/leave-type-modal.component.scss")).default]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [ngx_bootstrap_modal__WEBPACK_IMPORTED_MODULE_2__["BsModalRef"],
            ngx_bootstrap_modal__WEBPACK_IMPORTED_MODULE_2__["BsModalService"]])
    ], LeaveTypeModalComponent);
    return LeaveTypeModalComponent;
}());



/***/ }),

/***/ "./src/app/modules/hrm/leaves/leaves-routing.module.ts":
/*!*************************************************************!*\
  !*** ./src/app/modules/hrm/leaves/leaves-routing.module.ts ***!
  \*************************************************************/
/*! exports provided: LeavesRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LeavesRoutingModule", function() { return LeavesRoutingModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var ngx_permissions__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ngx-permissions */ "./node_modules/ngx-permissions/ngx-permissions.umd.js");
/* harmony import */ var ngx_permissions__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(ngx_permissions__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _pages_leaves_list_leaves_list_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./pages/leaves-list/leaves-list.component */ "./src/app/modules/hrm/leaves/pages/leaves-list/leaves-list.component.ts");
/* harmony import */ var _pages_calendar_view_calendar_view_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./pages/calendar-view/calendar-view.component */ "./src/app/modules/hrm/leaves/pages/calendar-view/calendar-view.component.ts");
/* harmony import */ var _pages_list_view_list_view_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./pages/list-view/list-view.component */ "./src/app/modules/hrm/leaves/pages/list-view/list-view.component.ts");
/* harmony import */ var _pages_leaves_report_leaves_report_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./pages/leaves-report/leaves-report.component */ "./src/app/modules/hrm/leaves/pages/leaves-report/leaves-report.component.ts");








var routes = [
    {
        path: '',
        children: [
            {
                path: '',
                canActivate: [ngx_permissions__WEBPACK_IMPORTED_MODULE_3__["NgxPermissionsGuard"]],
                component: _pages_leaves_list_leaves_list_component__WEBPACK_IMPORTED_MODULE_4__["LeavesListComponent"]
            },
            {
                path: 'calendar',
                canActivate: [ngx_permissions__WEBPACK_IMPORTED_MODULE_3__["NgxPermissionsGuard"]],
                component: _pages_calendar_view_calendar_view_component__WEBPACK_IMPORTED_MODULE_5__["CalendarViewComponent"],
                data: {
                    breadcrumbs: {
                        text: 'breadcrumbs.calendar.title',
                        icon: 'fa fa-calendar',
                        show: true,
                        isHome: true
                    }
                }
            },
            {
                path: 'request',
                canActivate: [ngx_permissions__WEBPACK_IMPORTED_MODULE_3__["NgxPermissionsGuard"]],
                component: _pages_list_view_list_view_component__WEBPACK_IMPORTED_MODULE_6__["ListViewComponent"],
                data: {
                    breadcrumbs: {
                        text: 'common.request',
                        icon: 'fa fa-trello',
                        show: true,
                        isHome: true
                    }
                }
            },
            {
                path: 'report',
                canActivate: [ngx_permissions__WEBPACK_IMPORTED_MODULE_3__["NgxPermissionsGuard"]],
                component: _pages_leaves_report_leaves_report_component__WEBPACK_IMPORTED_MODULE_7__["LeavesReportComponent"],
                data: {
                    breadcrumbs: {
                        text: 'common.report',
                        icon: 'fa fa-area-chart',
                        show: true,
                        isHome: true
                    }
                }
            },
        ]
    }
];
var LeavesRoutingModule = /** @class */ (function () {
    function LeavesRoutingModule() {
    }
    LeavesRoutingModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)],
            exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]]
        })
    ], LeavesRoutingModule);
    return LeavesRoutingModule;
}());



/***/ }),

/***/ "./src/app/modules/hrm/leaves/leaves.module.ts":
/*!*****************************************************!*\
  !*** ./src/app/modules/hrm/leaves/leaves.module.ts ***!
  \*****************************************************/
/*! exports provided: LeavesModule, HttpLoaderFactory */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LeavesModule", function() { return LeavesModule; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "HttpLoaderFactory", function() { return HttpLoaderFactory; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");
/* harmony import */ var ngx_bootstrap__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ngx-bootstrap */ "./node_modules/ngx-bootstrap/esm5/ngx-bootstrap.js");
/* harmony import */ var ngx_export_as__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ngx-export-as */ "./node_modules/ngx-export-as/fesm2015/ngx-export-as.js");
/* harmony import */ var ngx_editor__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ngx-editor */ "./node_modules/ngx-editor/fesm5/ngx-editor.js");
/* harmony import */ var ngx_permissions__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ngx-permissions */ "./node_modules/ngx-permissions/ngx-permissions.umd.js");
/* harmony import */ var ngx_permissions__WEBPACK_IMPORTED_MODULE_8___default = /*#__PURE__*/__webpack_require__.n(ngx_permissions__WEBPACK_IMPORTED_MODULE_8__);
/* harmony import */ var _ng_select_ng_select__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @ng-select/ng-select */ "./node_modules/@ng-select/ng-select/fesm5/ng-select.js");
/* harmony import */ var _ngx_translate_core__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @ngx-translate/core */ "./node_modules/@ngx-translate/core/fesm5/ngx-translate-core.js");
/* harmony import */ var _ngx_translate_http_loader__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! @ngx-translate/http-loader */ "./node_modules/@ngx-translate/http-loader/fesm5/ngx-translate-http-loader.js");
/* harmony import */ var angular_datatables__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! angular-datatables */ "./node_modules/angular-datatables/index.js");
/* harmony import */ var angular_calendar__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! angular-calendar */ "./node_modules/angular-calendar/fesm5/angular-calendar.js");
/* harmony import */ var angular_draggable_droppable__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! angular-draggable-droppable */ "./node_modules/angular-draggable-droppable/fesm5/angular-draggable-droppable.js");
/* harmony import */ var angular_resizable_element__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! angular-resizable-element */ "./node_modules/angular-resizable-element/fesm5/angular-resizable-element.js");
/* harmony import */ var angular_calendar_date_adapters_date_fns__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! angular-calendar/date-adapters/date-fns */ "./node_modules/angular-calendar/date-adapters/date-fns/index.js");
/* harmony import */ var angular_calendar_date_adapters_date_fns__WEBPACK_IMPORTED_MODULE_16___default = /*#__PURE__*/__webpack_require__.n(angular_calendar_date_adapters_date_fns__WEBPACK_IMPORTED_MODULE_16__);
/* harmony import */ var _leaves_routing_module__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! ./leaves-routing.module */ "./src/app/modules/hrm/leaves/leaves-routing.module.ts");
/* harmony import */ var _shared_shared_module__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! ../../../shared/shared.module */ "./src/app/shared/shared.module.ts");
/* harmony import */ var _leave_types_leave_types_module__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(/*! ../leave-types/leave-types.module */ "./src/app/modules/hrm/leave-types/leave-types.module.ts");
/* harmony import */ var _pages_leaves_list_leaves_list_component__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__(/*! ./pages/leaves-list/leaves-list.component */ "./src/app/modules/hrm/leaves/pages/leaves-list/leaves-list.component.ts");
/* harmony import */ var _components_create_leave_create_leave_component__WEBPACK_IMPORTED_MODULE_21__ = __webpack_require__(/*! ./components/create-leave/create-leave.component */ "./src/app/modules/hrm/leaves/components/create-leave/create-leave.component.ts");
/* harmony import */ var _components_edit_leave_edit_leave_component__WEBPACK_IMPORTED_MODULE_22__ = __webpack_require__(/*! ./components/edit-leave/edit-leave.component */ "./src/app/modules/hrm/leaves/components/edit-leave/edit-leave.component.ts");
/* harmony import */ var _pages_calendar_view_calendar_view_component__WEBPACK_IMPORTED_MODULE_23__ = __webpack_require__(/*! ./pages/calendar-view/calendar-view.component */ "./src/app/modules/hrm/leaves/pages/calendar-view/calendar-view.component.ts");
/* harmony import */ var _pages_list_view_list_view_component__WEBPACK_IMPORTED_MODULE_24__ = __webpack_require__(/*! ./pages/list-view/list-view.component */ "./src/app/modules/hrm/leaves/pages/list-view/list-view.component.ts");
/* harmony import */ var _pages_leaves_report_leaves_report_component__WEBPACK_IMPORTED_MODULE_25__ = __webpack_require__(/*! ./pages/leaves-report/leaves-report.component */ "./src/app/modules/hrm/leaves/pages/leaves-report/leaves-report.component.ts");
/* harmony import */ var _components_leave_type_modal_leave_type_modal_component__WEBPACK_IMPORTED_MODULE_26__ = __webpack_require__(/*! ./components/leave-type-modal/leave-type-modal.component */ "./src/app/modules/hrm/leaves/components/leave-type-modal/leave-type-modal.component.ts");
/* harmony import */ var _components_leave_detail_leave_detail_component__WEBPACK_IMPORTED_MODULE_27__ = __webpack_require__(/*! ./components/leave-detail/leave-detail.component */ "./src/app/modules/hrm/leaves/components/leave-detail/leave-detail.component.ts");




























var LeavesModule = /** @class */ (function () {
    function LeavesModule() {
    }
    LeavesModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            declarations: [
                _pages_leaves_list_leaves_list_component__WEBPACK_IMPORTED_MODULE_20__["LeavesListComponent"],
                _components_create_leave_create_leave_component__WEBPACK_IMPORTED_MODULE_21__["CreateLeaveComponent"],
                _components_edit_leave_edit_leave_component__WEBPACK_IMPORTED_MODULE_22__["EditLeaveComponent"],
                _pages_calendar_view_calendar_view_component__WEBPACK_IMPORTED_MODULE_23__["CalendarViewComponent"],
                _pages_list_view_list_view_component__WEBPACK_IMPORTED_MODULE_24__["ListViewComponent"],
                _pages_leaves_report_leaves_report_component__WEBPACK_IMPORTED_MODULE_25__["LeavesReportComponent"],
                _components_leave_type_modal_leave_type_modal_component__WEBPACK_IMPORTED_MODULE_26__["LeaveTypeModalComponent"],
                _components_leave_detail_leave_detail_component__WEBPACK_IMPORTED_MODULE_27__["LeaveDetailComponent"]
            ],
            imports: [
                _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
                _leaves_routing_module__WEBPACK_IMPORTED_MODULE_17__["LeavesRoutingModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_3__["ReactiveFormsModule"],
                ngx_permissions__WEBPACK_IMPORTED_MODULE_8__["NgxPermissionsModule"],
                angular_datatables__WEBPACK_IMPORTED_MODULE_12__["DataTablesModule"],
                ngx_export_as__WEBPACK_IMPORTED_MODULE_6__["ExportAsModule"],
                ngx_editor__WEBPACK_IMPORTED_MODULE_7__["NgxEditorModule"],
                _ng_select_ng_select__WEBPACK_IMPORTED_MODULE_9__["NgSelectModule"],
                ngx_bootstrap__WEBPACK_IMPORTED_MODULE_5__["ModalModule"].forRoot(),
                ngx_bootstrap__WEBPACK_IMPORTED_MODULE_5__["TooltipModule"].forRoot(),
                ngx_bootstrap__WEBPACK_IMPORTED_MODULE_5__["BsDropdownModule"].forRoot(),
                ngx_bootstrap__WEBPACK_IMPORTED_MODULE_5__["DatepickerModule"].forRoot(),
                ngx_bootstrap__WEBPACK_IMPORTED_MODULE_5__["BsDatepickerModule"].forRoot(),
                _ngx_translate_core__WEBPACK_IMPORTED_MODULE_10__["TranslateModule"].forChild({
                    loader: {
                        provide: _ngx_translate_core__WEBPACK_IMPORTED_MODULE_10__["TranslateLoader"],
                        useFactory: (HttpLoaderFactory),
                        deps: [_angular_common_http__WEBPACK_IMPORTED_MODULE_4__["HttpClient"]]
                    }
                }),
                angular_draggable_droppable__WEBPACK_IMPORTED_MODULE_14__["DragAndDropModule"],
                angular_resizable_element__WEBPACK_IMPORTED_MODULE_15__["ResizableModule"],
                angular_calendar__WEBPACK_IMPORTED_MODULE_13__["CalendarModule"].forRoot({
                    provide: angular_calendar__WEBPACK_IMPORTED_MODULE_13__["DateAdapter"],
                    useFactory: angular_calendar_date_adapters_date_fns__WEBPACK_IMPORTED_MODULE_16__["adapterFactory"]
                }),
                _shared_shared_module__WEBPACK_IMPORTED_MODULE_18__["SharedModule"],
                _leave_types_leave_types_module__WEBPACK_IMPORTED_MODULE_19__["LeaveTypesModule"]
            ],
            entryComponents: [
                _components_create_leave_create_leave_component__WEBPACK_IMPORTED_MODULE_21__["CreateLeaveComponent"],
                _components_edit_leave_edit_leave_component__WEBPACK_IMPORTED_MODULE_22__["EditLeaveComponent"],
                _components_leave_type_modal_leave_type_modal_component__WEBPACK_IMPORTED_MODULE_26__["LeaveTypeModalComponent"],
                _components_leave_detail_leave_detail_component__WEBPACK_IMPORTED_MODULE_27__["LeaveDetailComponent"]
            ],
            providers: []
        })
    ], LeavesModule);
    return LeavesModule;
}());

// Required for AOT compilation
function HttpLoaderFactory(http) {
    return new _ngx_translate_http_loader__WEBPACK_IMPORTED_MODULE_11__["TranslateHttpLoader"](http, './assets/i18n/', '.json');
}


/***/ }),

/***/ "./src/app/modules/hrm/leaves/pages/calendar-view/calendar-view.component.scss":
/*!*************************************************************************************!*\
  !*** ./src/app/modules/hrm/leaves/pages/calendar-view/calendar-view.component.scss ***!
  \*************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL21vZHVsZXMvaHJtL2xlYXZlcy9wYWdlcy9jYWxlbmRhci12aWV3L2NhbGVuZGFyLXZpZXcuY29tcG9uZW50LnNjc3MifQ== */");

/***/ }),

/***/ "./src/app/modules/hrm/leaves/pages/calendar-view/calendar-view.component.ts":
/*!***********************************************************************************!*\
  !*** ./src/app/modules/hrm/leaves/pages/calendar-view/calendar-view.component.ts ***!
  \***********************************************************************************/
/*! exports provided: CalendarViewComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CalendarViewComponent", function() { return CalendarViewComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var angular_calendar__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! angular-calendar */ "./node_modules/angular-calendar/fesm5/angular-calendar.js");
/* harmony import */ var date_fns__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! date-fns */ "./node_modules/date-fns/index.js");
/* harmony import */ var date_fns__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(date_fns__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! rxjs */ "./node_modules/rxjs/_esm5/index.js");
/* harmony import */ var _core_services_leave_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../../../../core/services/leave.service */ "./src/app/core/services/leave.service.ts");
/* harmony import */ var _core_services_authentication_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../../../../core/services/authentication.service */ "./src/app/core/services/authentication.service.ts");







var CalendarViewComponent = /** @class */ (function () {
    function CalendarViewComponent(leaveService, authenticationService) {
        var _this = this;
        this.leaveService = leaveService;
        this.authenticationService = authenticationService;
        this.isCalendarLoaded = false;
        this.view = angular_calendar__WEBPACK_IMPORTED_MODULE_2__["CalendarView"].Month;
        this.CalendarView = angular_calendar__WEBPACK_IMPORTED_MODULE_2__["CalendarView"];
        this.viewDate = new Date();
        this.refresh = new rxjs__WEBPACK_IMPORTED_MODULE_4__["Subject"]();
        this.events = this.allCalendarEvents;
        this.activeDayIsOpen = true;
        this.authenticationService.loginUser.subscribe(function (x) { return _this.loginUser = x; });
    }
    CalendarViewComponent.prototype.ngOnInit = function () {
        this.getLeaves();
    };
    CalendarViewComponent.prototype.dayClicked = function (_a) {
        var date = _a.date, events = _a.events;
        if (Object(date_fns__WEBPACK_IMPORTED_MODULE_3__["isSameMonth"])(date, this.viewDate)) {
            if ((Object(date_fns__WEBPACK_IMPORTED_MODULE_3__["isSameDay"])(this.viewDate, date) && this.activeDayIsOpen === true) ||
                events.length === 0) {
                this.activeDayIsOpen = false;
            }
            else {
                this.activeDayIsOpen = true;
            }
            this.viewDate = date;
        }
    };
    CalendarViewComponent.prototype.addEvent = function (leaves) {
        this.events = leaves;
        this.isCalendarLoaded = true;
        this.refreshView();
    };
    CalendarViewComponent.prototype.refreshView = function () {
        this.refresh.next();
    };
    CalendarViewComponent.prototype.setView = function (view) {
        this.view = view;
    };
    CalendarViewComponent.prototype.closeOpenMonthViewDay = function () {
        this.activeDayIsOpen = false;
    };
    CalendarViewComponent.prototype.getLeaves = function () {
        var _this = this;
        this.leaveService.getCalendarLeaves().subscribe(function (data) {
            _this.leaves = data;
            _this.setCalendarData();
        });
    };
    CalendarViewComponent.prototype.setCalendarData = function () {
        var eventsAll = [];
        this.leaves.forEach(function (element) {
            eventsAll.push({
                start: Object(date_fns__WEBPACK_IMPORTED_MODULE_3__["startOfDay"])(new Date(element.leave_date)),
                title: element.user.full_name + ' - ' + element.leave_type.leave_type + ' - ' + element.reason,
                color: {
                    primary: element.leave_type.color,
                    secondary: element.leave_type.color
                }
            });
        });
        this.addEvent(eventsAll);
        this.allCalendarEvents = eventsAll;
    };
    CalendarViewComponent.ctorParameters = function () { return [
        { type: _core_services_leave_service__WEBPACK_IMPORTED_MODULE_5__["LeaveService"] },
        { type: _core_services_authentication_service__WEBPACK_IMPORTED_MODULE_6__["AuthenticationService"] }
    ]; };
    CalendarViewComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-calendar-view',
            template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./calendar-view.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/modules/hrm/leaves/pages/calendar-view/calendar-view.component.html")).default,
            styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./calendar-view.component.scss */ "./src/app/modules/hrm/leaves/pages/calendar-view/calendar-view.component.scss")).default]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_core_services_leave_service__WEBPACK_IMPORTED_MODULE_5__["LeaveService"],
            _core_services_authentication_service__WEBPACK_IMPORTED_MODULE_6__["AuthenticationService"]])
    ], CalendarViewComponent);
    return CalendarViewComponent;
}());



/***/ }),

/***/ "./src/app/modules/hrm/leaves/pages/leaves-list/leaves-list.component.scss":
/*!*********************************************************************************!*\
  !*** ./src/app/modules/hrm/leaves/pages/leaves-list/leaves-list.component.scss ***!
  \*********************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = (".hide_empty_message ::ng-deep .odd {\n  display: none;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvbW9kdWxlcy9ocm0vbGVhdmVzL3BhZ2VzL2xlYXZlcy1saXN0L0M6XFxVc2Vyc1xcdGh1YW5cXE9uZURyaXZlXFxEZXNrdG9wXFxnbGF2YWwtdGh1YW5kaW5oL3NyY1xcYXBwXFxtb2R1bGVzXFxocm1cXGxlYXZlc1xccGFnZXNcXGxlYXZlcy1saXN0XFxsZWF2ZXMtbGlzdC5jb21wb25lbnQuc2NzcyIsInNyYy9hcHAvbW9kdWxlcy9ocm0vbGVhdmVzL3BhZ2VzL2xlYXZlcy1saXN0L2xlYXZlcy1saXN0LmNvbXBvbmVudC5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0ksYUFBQTtBQ0NKIiwiZmlsZSI6InNyYy9hcHAvbW9kdWxlcy9ocm0vbGVhdmVzL3BhZ2VzL2xlYXZlcy1saXN0L2xlYXZlcy1saXN0LmNvbXBvbmVudC5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLmhpZGVfZW1wdHlfbWVzc2FnZSA6Om5nLWRlZXAgLm9kZCB7XHJcbiAgICBkaXNwbGF5OiBub25lXHJcbn0iLCIuaGlkZV9lbXB0eV9tZXNzYWdlIDo6bmctZGVlcCAub2RkIHtcbiAgZGlzcGxheTogbm9uZTtcbn0iXX0= */");

/***/ }),

/***/ "./src/app/modules/hrm/leaves/pages/leaves-list/leaves-list.component.ts":
/*!*******************************************************************************!*\
  !*** ./src/app/modules/hrm/leaves/pages/leaves-list/leaves-list.component.ts ***!
  \*******************************************************************************/
/*! exports provided: LeavesListComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LeavesListComponent", function() { return LeavesListComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");
/* harmony import */ var angular_datatables__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! angular-datatables */ "./node_modules/angular-datatables/index.js");
/* harmony import */ var ngx_bootstrap_modal__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ngx-bootstrap/modal */ "./node_modules/ngx-bootstrap/modal/fesm5/ngx-bootstrap-modal.js");
/* harmony import */ var ngx_export_as__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ngx-export-as */ "./node_modules/ngx-export-as/fesm2015/ngx-export-as.js");
/* harmony import */ var ngx_toastr__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ngx-toastr */ "./node_modules/ngx-toastr/fesm5/ngx-toastr.js");
/* harmony import */ var _ngx_translate_core__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @ngx-translate/core */ "./node_modules/@ngx-translate/core/fesm5/ngx-translate-core.js");
/* harmony import */ var ngx_permissions__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ngx-permissions */ "./node_modules/ngx-permissions/ngx-permissions.umd.js");
/* harmony import */ var ngx_permissions__WEBPACK_IMPORTED_MODULE_8___default = /*#__PURE__*/__webpack_require__.n(ngx_permissions__WEBPACK_IMPORTED_MODULE_8__);
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! rxjs */ "./node_modules/rxjs/_esm5/index.js");
/* harmony import */ var sweetalert2__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! sweetalert2 */ "./node_modules/sweetalert2/dist/sweetalert2.all.js");
/* harmony import */ var sweetalert2__WEBPACK_IMPORTED_MODULE_10___default = /*#__PURE__*/__webpack_require__.n(sweetalert2__WEBPACK_IMPORTED_MODULE_10__);
/* harmony import */ var _core_services_leave_service__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ../../../../../core/services/leave.service */ "./src/app/core/services/leave.service.ts");
/* harmony import */ var _core_services_authentication_service__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ../../../../../core/services/authentication.service */ "./src/app/core/services/authentication.service.ts");
/* harmony import */ var _components_create_leave_create_leave_component__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ../../components/create-leave/create-leave.component */ "./src/app/modules/hrm/leaves/components/create-leave/create-leave.component.ts");
/* harmony import */ var _components_edit_leave_edit_leave_component__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ../../components/edit-leave/edit-leave.component */ "./src/app/modules/hrm/leaves/components/edit-leave/edit-leave.component.ts");
/* harmony import */ var _core_helpers_hrm_helper__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! ../../../../../core/helpers/hrm.helper */ "./src/app/core/helpers/hrm.helper.ts");
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! ../../../../../../environments/environment */ "./src/environments/environment.ts");
/* harmony import */ var datatables_net__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! datatables.net */ "./node_modules/datatables.net/js/jquery.dataTables.js");
/* harmony import */ var datatables_net__WEBPACK_IMPORTED_MODULE_17___default = /*#__PURE__*/__webpack_require__.n(datatables_net__WEBPACK_IMPORTED_MODULE_17__);
/* harmony import */ var datatables_net_bs4__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! datatables.net-bs4 */ "./node_modules/datatables.net-bs4/js/dataTables.bootstrap4.js");
/* harmony import */ var datatables_net_bs4__WEBPACK_IMPORTED_MODULE_18___default = /*#__PURE__*/__webpack_require__.n(datatables_net_bs4__WEBPACK_IMPORTED_MODULE_18__);



















var LeavesListComponent = /** @class */ (function () {
    function LeavesListComponent(translate, ngxRolesService, http, toastr, modalService, exportAsService, authenticationService, leaveService) {
        var _this = this;
        this.translate = translate;
        this.ngxRolesService = ngxRolesService;
        this.http = http;
        this.toastr = toastr;
        this.modalService = modalService;
        this.exportAsService = exportAsService;
        this.authenticationService = authenticationService;
        this.leaveService = leaveService;
        this.dtTrigger = new rxjs__WEBPACK_IMPORTED_MODULE_9__["Subject"]();
        this.dtOptions = {};
        this.leaves = [];
        this.leaveStatusKeyValue = _core_helpers_hrm_helper__WEBPACK_IMPORTED_MODULE_15__["leave_status_key_value"];
        this.exportAsConfig = {
            type: 'pdf',
            elementIdOrContent: 'leaves_table',
        };
        this.modalConfigs = {
            animated: true,
            keyboard: true,
            backdrop: true,
            ignoreBackdropClick: false,
            class: 'inmodal modal-dialog-centered modal-md animated fadeIn'
        };
        this.apiUrl = _environments_environment__WEBPACK_IMPORTED_MODULE_16__["environment"].apiUrl;
        this.authenticationService.loginUser.subscribe(function (x) { return _this.loginUser = x; });
    }
    LeavesListComponent.prototype.ngOnInit = function () {
        this.loadLeaveDatatable();
    };
    LeavesListComponent.prototype.getCheckStatusChangePermission = function (leave) {
        var role = this.ngxRolesService.getRole('admin');
        if (leave.status == 1) {
            if ((role && role.name == 'admin') || this.loginUser.is_super_admin) {
                return true;
            }
            else if (this.loginUser.id == leave.user_id) {
                return false;
            }
        }
        return false;
    };
    LeavesListComponent.prototype.getCheckPermission = function (leave) {
        var isAllowed = false, role = this.ngxRolesService.getRole('admin');
        if (this.loginUser.id == leave.user_id) {
            isAllowed = true;
        }
        if (leave.status == 2 || leave.status == 3) {
            isAllowed = false;
        }
        return isAllowed;
    };
    LeavesListComponent.prototype.loadLeaveDatatable = function () {
        var _this = this;
        var that = this;
        this.dtOptions = {
            pagingType: 'full_numbers',
            pageLength: that.loginUser.settings.tables_pagination_limit,
            serverSide: true,
            processing: true,
            dom: '<"html5buttons"B>ltfrtip',
            order: [0, 'desc'],
            columns: [{
                    'sortable': true,
                    'width': '5%',
                    'target': [0]
                }, {
                    'sortable': true,
                    'width': '18%',
                    'target': [1]
                }, {
                    'sortable': true,
                    'width': '18%',
                    'target': [2]
                }, {
                    'sortable': true,
                    'width': '18%',
                    'target': [3]
                }, {
                    'sortable': true,
                    'width': '18%',
                    'target': [4]
                }, {
                    'sortable': true,
                    'width': '18%',
                    'target': [5]
                }, {
                    'sortable': false,
                    'width': '5%',
                    'target': [6]
                }
            ],
            buttons: [{
                    extend: 'csv',
                    className: 'btn btn-datatable-gredient',
                    action: function (e, dt, node, config) {
                        that.exportFiles('csv');
                    }
                }, {
                    extend: 'excel',
                    className: 'btn btn-datatable-gredient',
                    action: function (e, dt, node, config) {
                        that.exportFiles('xlsx');
                    }
                }, {
                    extend: 'pdf',
                    className: 'btn btn-datatable-gredient',
                    action: function (e, dt, node, config) {
                        that.exportFiles('pdf');
                    }
                }],
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
                _this.http
                    .post(_this.apiUrl + '/api/all-leaves', dataTablesParameters, {})
                    .subscribe(function (resp) {
                    if (resp) {
                        _this.leaves = resp.data;
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
    LeavesListComponent.prototype.exportFiles = function (type) {
        this.exportAsConfig.type = type;
        this.exportAsService.save(this.exportAsConfig, this.translate.instant('leaves.title')).subscribe(function () {
        });
    };
    LeavesListComponent.prototype.ngAfterViewInit = function () {
        this.dtTrigger.next();
    };
    LeavesListComponent.prototype.ngOnDestroy = function () {
        this.dtTrigger.unsubscribe();
    };
    LeavesListComponent.prototype.rerender = function () {
        var _this = this;
        this.dtElement.dtInstance.then(function (dtInstance) {
            dtInstance.destroy();
            setTimeout(function () {
                _this.dtTrigger.next();
                if (_this.leaves.length > 0) {
                    $('.tfoot_dt').addClass('d-none');
                }
                else {
                    $('.tfoot_dt').removeClass('d-none');
                }
            });
        });
    };
    LeavesListComponent.prototype.openLeaveCreateModal = function () {
        var _this = this;
        this.modalRef = this.modalService.show(_components_create_leave_create_leave_component__WEBPACK_IMPORTED_MODULE_13__["CreateLeaveComponent"], this.modalConfigs);
        this.modalRef.content.event.subscribe(function (data) {
            _this.rerender();
        });
    };
    LeavesListComponent.prototype.openLeaveEditModal = function (leave) {
        var _this = this;
        var modalConfig = {
            animated: true,
            keyboard: true,
            backdrop: true,
            ignoreBackdropClick: false,
            class: 'inmodal modal-dialog-centered modal-md animated fadeIn',
            initialState: {
                leave: leave
            }
        };
        this.modalRef = this.modalService.show(_components_edit_leave_edit_leave_component__WEBPACK_IMPORTED_MODULE_14__["EditLeaveComponent"], modalConfig);
        this.modalRef.content.event.subscribe(function (data) {
            _this.rerender();
        });
    };
    LeavesListComponent.prototype.changeLeaveStatus = function (leaveId, status) {
        var _this = this;
        var leave = {
            id: leaveId,
            status: status.id
        };
        if (status.id == 3) {
            sweetalert2__WEBPACK_IMPORTED_MODULE_10___default.a.fire({
                input: 'textarea',
                inputPlaceholder: this.translate.instant('leaves.create.fields.reject_reason') + ' ...',
                inputAttributes: {
                    'aria-label': this.translate.instant('leaves.create.fields.reject_reason')
                },
                showCancelButton: true
            }).then(function (result) {
                if (result.value || result.value == '') {
                    var leave_1 = {
                        id: leaveId,
                        status: status.id,
                        reject_reason: result.value
                    };
                    _this.changeStatus(leave_1);
                }
            });
        }
        else {
            this.changeStatus(leave);
        }
    };
    LeavesListComponent.prototype.changeStatus = function (leave) {
        var _this = this;
        this.leaveService.changeStatus(leave)
            .subscribe(function (data) {
            _this.toastr.success(_this.translate.instant('leaves.messages.status'), _this.translate.instant('leaves.title'));
            _this.rerender();
        });
    };
    LeavesListComponent.prototype.deleteLeave = function (id) {
        var _this = this;
        sweetalert2__WEBPACK_IMPORTED_MODULE_10___default.a.fire({
            title: this.translate.instant('common.swal.title'),
            text: this.translate.instant('common.swal.text') + this.translate.instant('leaves.title1'),
            type: 'warning',
            showCancelButton: true,
            confirmButtonText: this.translate.instant('common.swal.confirmButtonText'),
            cancelButtonText: this.translate.instant('common.swal.cancelButtonText')
        }).then(function (result) {
            if (result.value) {
                _this.leaveService.delete(id)
                    .subscribe(function (data) {
                    _this.toastr.success(_this.translate.instant('leaves.messages.delete'), _this.translate.instant('leaves.title'));
                    _this.rerender();
                });
            }
        });
    };
    LeavesListComponent.prototype.getTranslateStatus = function (statusKey) {
        return this.leaveStatusKeyValue[statusKey];
    };
    LeavesListComponent.ctorParameters = function () { return [
        { type: _ngx_translate_core__WEBPACK_IMPORTED_MODULE_7__["TranslateService"] },
        { type: ngx_permissions__WEBPACK_IMPORTED_MODULE_8__["NgxRolesService"] },
        { type: _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClient"] },
        { type: ngx_toastr__WEBPACK_IMPORTED_MODULE_6__["ToastrService"] },
        { type: ngx_bootstrap_modal__WEBPACK_IMPORTED_MODULE_4__["BsModalService"] },
        { type: ngx_export_as__WEBPACK_IMPORTED_MODULE_5__["ExportAsService"] },
        { type: _core_services_authentication_service__WEBPACK_IMPORTED_MODULE_12__["AuthenticationService"] },
        { type: _core_services_leave_service__WEBPACK_IMPORTED_MODULE_11__["LeaveService"] }
    ]; };
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewChild"])(angular_datatables__WEBPACK_IMPORTED_MODULE_3__["DataTableDirective"], { static: true }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", angular_datatables__WEBPACK_IMPORTED_MODULE_3__["DataTableDirective"])
    ], LeavesListComponent.prototype, "dtElement", void 0);
    LeavesListComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-leaves-list',
            template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./leaves-list.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/modules/hrm/leaves/pages/leaves-list/leaves-list.component.html")).default,
            styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./leaves-list.component.scss */ "./src/app/modules/hrm/leaves/pages/leaves-list/leaves-list.component.scss")).default]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_ngx_translate_core__WEBPACK_IMPORTED_MODULE_7__["TranslateService"],
            ngx_permissions__WEBPACK_IMPORTED_MODULE_8__["NgxRolesService"],
            _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClient"],
            ngx_toastr__WEBPACK_IMPORTED_MODULE_6__["ToastrService"],
            ngx_bootstrap_modal__WEBPACK_IMPORTED_MODULE_4__["BsModalService"],
            ngx_export_as__WEBPACK_IMPORTED_MODULE_5__["ExportAsService"],
            _core_services_authentication_service__WEBPACK_IMPORTED_MODULE_12__["AuthenticationService"],
            _core_services_leave_service__WEBPACK_IMPORTED_MODULE_11__["LeaveService"]])
    ], LeavesListComponent);
    return LeavesListComponent;
}());



/***/ }),

/***/ "./src/app/modules/hrm/leaves/pages/leaves-report/leaves-report.component.scss":
/*!*************************************************************************************!*\
  !*** ./src/app/modules/hrm/leaves/pages/leaves-report/leaves-report.component.scss ***!
  \*************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = (".hide_empty_message ::ng-deep .odd {\n  display: none;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvbW9kdWxlcy9ocm0vbGVhdmVzL3BhZ2VzL2xlYXZlcy1yZXBvcnQvQzpcXFVzZXJzXFx0aHVhblxcT25lRHJpdmVcXERlc2t0b3BcXGdsYXZhbC10aHVhbmRpbmgvc3JjXFxhcHBcXG1vZHVsZXNcXGhybVxcbGVhdmVzXFxwYWdlc1xcbGVhdmVzLXJlcG9ydFxcbGVhdmVzLXJlcG9ydC5jb21wb25lbnQuc2NzcyIsInNyYy9hcHAvbW9kdWxlcy9ocm0vbGVhdmVzL3BhZ2VzL2xlYXZlcy1yZXBvcnQvbGVhdmVzLXJlcG9ydC5jb21wb25lbnQuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNJLGFBQUE7QUNDSiIsImZpbGUiOiJzcmMvYXBwL21vZHVsZXMvaHJtL2xlYXZlcy9wYWdlcy9sZWF2ZXMtcmVwb3J0L2xlYXZlcy1yZXBvcnQuY29tcG9uZW50LnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyIuaGlkZV9lbXB0eV9tZXNzYWdlIDo6bmctZGVlcCAub2RkIHtcclxuICAgIGRpc3BsYXk6IG5vbmVcclxufSIsIi5oaWRlX2VtcHR5X21lc3NhZ2UgOjpuZy1kZWVwIC5vZGQge1xuICBkaXNwbGF5OiBub25lO1xufSJdfQ== */");

/***/ }),

/***/ "./src/app/modules/hrm/leaves/pages/leaves-report/leaves-report.component.ts":
/*!***********************************************************************************!*\
  !*** ./src/app/modules/hrm/leaves/pages/leaves-report/leaves-report.component.ts ***!
  \***********************************************************************************/
/*! exports provided: LeavesReportComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LeavesReportComponent", function() { return LeavesReportComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var ngx_bootstrap_modal__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ngx-bootstrap/modal */ "./node_modules/ngx-bootstrap/modal/fesm5/ngx-bootstrap-modal.js");
/* harmony import */ var angular_datatables__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! angular-datatables */ "./node_modules/angular-datatables/index.js");
/* harmony import */ var _ngx_translate_core__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @ngx-translate/core */ "./node_modules/@ngx-translate/core/fesm5/ngx-translate-core.js");
/* harmony import */ var ngx_export_as__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ngx-export-as */ "./node_modules/ngx-export-as/fesm2015/ngx-export-as.js");
/* harmony import */ var ngx_permissions__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ngx-permissions */ "./node_modules/ngx-permissions/ngx-permissions.umd.js");
/* harmony import */ var ngx_permissions__WEBPACK_IMPORTED_MODULE_8___default = /*#__PURE__*/__webpack_require__.n(ngx_permissions__WEBPACK_IMPORTED_MODULE_8__);
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! rxjs */ "./node_modules/rxjs/_esm5/index.js");
/* harmony import */ var _core_services_leave_service__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ../../../../../core/services/leave.service */ "./src/app/core/services/leave.service.ts");
/* harmony import */ var _core_services_authentication_service__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ../../../../../core/services/authentication.service */ "./src/app/core/services/authentication.service.ts");
/* harmony import */ var _core_services_user_service__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ../../../../../core/services/user.service */ "./src/app/core/services/user.service.ts");
/* harmony import */ var _components_leave_detail_leave_detail_component__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ../../components/leave-detail/leave-detail.component */ "./src/app/modules/hrm/leaves/components/leave-detail/leave-detail.component.ts");
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ../../../../../../environments/environment */ "./src/environments/environment.ts");
/* harmony import */ var datatables_net__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! datatables.net */ "./node_modules/datatables.net/js/jquery.dataTables.js");
/* harmony import */ var datatables_net__WEBPACK_IMPORTED_MODULE_15___default = /*#__PURE__*/__webpack_require__.n(datatables_net__WEBPACK_IMPORTED_MODULE_15__);
/* harmony import */ var datatables_net_bs4__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! datatables.net-bs4 */ "./node_modules/datatables.net-bs4/js/dataTables.bootstrap4.js");
/* harmony import */ var datatables_net_bs4__WEBPACK_IMPORTED_MODULE_16___default = /*#__PURE__*/__webpack_require__.n(datatables_net_bs4__WEBPACK_IMPORTED_MODULE_16__);

















var LeavesReportComponent = /** @class */ (function () {
    function LeavesReportComponent(translate, ngxRolesService, http, datepipe, modalService, exportAsService, authenticationService, leaveService, userService) {
        var _this = this;
        this.translate = translate;
        this.ngxRolesService = ngxRolesService;
        this.http = http;
        this.datepipe = datepipe;
        this.modalService = modalService;
        this.exportAsService = exportAsService;
        this.authenticationService = authenticationService;
        this.leaveService = leaveService;
        this.userService = userService;
        this.dtTrigger = new rxjs__WEBPACK_IMPORTED_MODULE_9__["Subject"]();
        this.dtOptions = {};
        this.leaves = [];
        this.isFormLoad = false;
        this.user_id = null;
        this.exportAsConfig = {
            type: 'pdf',
            elementIdOrContent: 'leaves_table',
        };
        this.apiUrl = _environments_environment__WEBPACK_IMPORTED_MODULE_14__["environment"].apiUrl;
        this.authenticationService.loginUser.subscribe(function (x) { return _this.loginUser = x; });
    }
    LeavesReportComponent.prototype.ngOnInit = function () {
        this.getUsers();
        this.loadLeaveDatatable();
    };
    LeavesReportComponent.prototype.loadLeaveDatatable = function () {
        var _this = this;
        var that = this;
        this.dtOptions = {
            pagingType: 'full_numbers',
            pageLength: that.loginUser.settings.tables_pagination_limit,
            serverSide: true,
            processing: true,
            dom: '<"html5buttons"B>ltfrtip',
            order: [1, 'asc'],
            columns: [{
                    'sortable': false,
                    'width': '2%',
                    'target': [0]
                }, {
                    'sortable': true,
                    'target': [1]
                }, {
                    'sortable': false,
                    'width': '10%',
                    'target': [2]
                }, {
                    'sortable': false,
                    'width': '10%',
                    'target': [3]
                }
            ],
            buttons: [{
                    extend: 'csv',
                    className: 'btn btn-datatable-gredient',
                    action: function (e, dt, node, config) {
                        that.exportFiles('csv');
                    }
                }, {
                    extend: 'excel',
                    className: 'btn btn-datatable-gredient',
                    action: function (e, dt, node, config) {
                        that.exportFiles('xlsx');
                    }
                }, {
                    extend: 'pdf',
                    className: 'btn btn-datatable-gredient',
                    action: function (e, dt, node, config) {
                        that.exportFiles('pdf');
                    }
                }],
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
                if (_this.isFormLoad) {
                    dataTablesParameters.period_from = _this.period_from;
                    dataTablesParameters.period_to = _this.period_to;
                    dataTablesParameters.user_id = _this.user_id;
                }
                _this.http
                    .post(_this.apiUrl + '/api/leaves/report', dataTablesParameters, {})
                    .subscribe(function (resp) {
                    if (resp) {
                        _this.leaves = resp.data;
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
    LeavesReportComponent.prototype.getUsers = function () {
        var _this = this;
        this.userService.getAll()
            .subscribe(function (data) {
            _this.users = data;
        });
    };
    LeavesReportComponent.prototype.submitFilter = function () {
        if (this.period_from_to) {
            this.period_from = this.datepipe.transform(this.period_from_to[0], 'yyyy-MM-dd');
            this.period_to = this.datepipe.transform(this.period_from_to[1], 'yyyy-MM-dd');
        }
        this.isFormLoad = true;
        this.rerender();
    };
    LeavesReportComponent.prototype.resetForm = function () {
        this.isFormLoad = false;
        this.period_from_to = null;
        this.user_id = null;
        this.rerender();
    };
    LeavesReportComponent.prototype.exportFiles = function (type) {
        this.exportAsConfig.type = type;
        this.exportAsService.save(this.exportAsConfig, this.translate.instant('leave_report.title')).subscribe(function () {
        });
    };
    LeavesReportComponent.prototype.ngAfterViewInit = function () {
        this.dtTrigger.next();
    };
    LeavesReportComponent.prototype.ngOnDestroy = function () {
        this.dtTrigger.unsubscribe();
    };
    LeavesReportComponent.prototype.rerender = function () {
        var _this = this;
        this.dtElement.dtInstance.then(function (dtInstance) {
            dtInstance.destroy();
            setTimeout(function () {
                _this.dtTrigger.next();
                if (_this.leaves.length > 0) {
                    $('.tfoot_dt').addClass('d-none');
                }
                else {
                    $('.tfoot_dt').removeClass('d-none');
                }
            });
        });
    };
    LeavesReportComponent.prototype.openLeaveDetail = function (status, user_id) {
        var modalConfig = {
            animated: true,
            keyboard: true,
            backdrop: true,
            ignoreBackdropClick: false,
            class: 'inmodal modal-dialog-centered modal-lg animated fadeIn',
            initialState: {
                leave: {
                    startDate: this.period_from,
                    endDate: this.period_to,
                    userId: user_id,
                    status: status
                }
            }
        };
        this.modalRef = this.modalService.show(_components_leave_detail_leave_detail_component__WEBPACK_IMPORTED_MODULE_13__["LeaveDetailComponent"], modalConfig);
        this.modalRef.content.event.subscribe(function (data) {
        });
    };
    LeavesReportComponent.ctorParameters = function () { return [
        { type: _ngx_translate_core__WEBPACK_IMPORTED_MODULE_6__["TranslateService"] },
        { type: ngx_permissions__WEBPACK_IMPORTED_MODULE_8__["NgxRolesService"] },
        { type: _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClient"] },
        { type: _angular_common__WEBPACK_IMPORTED_MODULE_3__["DatePipe"] },
        { type: ngx_bootstrap_modal__WEBPACK_IMPORTED_MODULE_4__["BsModalService"] },
        { type: ngx_export_as__WEBPACK_IMPORTED_MODULE_7__["ExportAsService"] },
        { type: _core_services_authentication_service__WEBPACK_IMPORTED_MODULE_11__["AuthenticationService"] },
        { type: _core_services_leave_service__WEBPACK_IMPORTED_MODULE_10__["LeaveService"] },
        { type: _core_services_user_service__WEBPACK_IMPORTED_MODULE_12__["UserService"] }
    ]; };
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewChild"])(angular_datatables__WEBPACK_IMPORTED_MODULE_5__["DataTableDirective"], { static: true }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", angular_datatables__WEBPACK_IMPORTED_MODULE_5__["DataTableDirective"])
    ], LeavesReportComponent.prototype, "dtElement", void 0);
    LeavesReportComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-leaves-report',
            template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./leaves-report.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/modules/hrm/leaves/pages/leaves-report/leaves-report.component.html")).default,
            styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./leaves-report.component.scss */ "./src/app/modules/hrm/leaves/pages/leaves-report/leaves-report.component.scss")).default]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_ngx_translate_core__WEBPACK_IMPORTED_MODULE_6__["TranslateService"],
            ngx_permissions__WEBPACK_IMPORTED_MODULE_8__["NgxRolesService"],
            _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClient"],
            _angular_common__WEBPACK_IMPORTED_MODULE_3__["DatePipe"],
            ngx_bootstrap_modal__WEBPACK_IMPORTED_MODULE_4__["BsModalService"],
            ngx_export_as__WEBPACK_IMPORTED_MODULE_7__["ExportAsService"],
            _core_services_authentication_service__WEBPACK_IMPORTED_MODULE_11__["AuthenticationService"],
            _core_services_leave_service__WEBPACK_IMPORTED_MODULE_10__["LeaveService"],
            _core_services_user_service__WEBPACK_IMPORTED_MODULE_12__["UserService"]])
    ], LeavesReportComponent);
    return LeavesReportComponent;
}());



/***/ }),

/***/ "./src/app/modules/hrm/leaves/pages/list-view/list-view.component.scss":
/*!*****************************************************************************!*\
  !*** ./src/app/modules/hrm/leaves/pages/list-view/list-view.component.scss ***!
  \*****************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL21vZHVsZXMvaHJtL2xlYXZlcy9wYWdlcy9saXN0LXZpZXcvbGlzdC12aWV3LmNvbXBvbmVudC5zY3NzIn0= */");

/***/ }),

/***/ "./src/app/modules/hrm/leaves/pages/list-view/list-view.component.ts":
/*!***************************************************************************!*\
  !*** ./src/app/modules/hrm/leaves/pages/list-view/list-view.component.ts ***!
  \***************************************************************************/
/*! exports provided: ListViewComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ListViewComponent", function() { return ListViewComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");
/* harmony import */ var ngx_toastr__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ngx-toastr */ "./node_modules/ngx-toastr/fesm5/ngx-toastr.js");
/* harmony import */ var _ngx_translate_core__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ngx-translate/core */ "./node_modules/@ngx-translate/core/fesm5/ngx-translate-core.js");
/* harmony import */ var ngx_permissions__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ngx-permissions */ "./node_modules/ngx-permissions/ngx-permissions.umd.js");
/* harmony import */ var ngx_permissions__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(ngx_permissions__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var sweetalert2__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! sweetalert2 */ "./node_modules/sweetalert2/dist/sweetalert2.all.js");
/* harmony import */ var sweetalert2__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(sweetalert2__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var _core_services_leave_service__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../../../../../core/services/leave.service */ "./src/app/core/services/leave.service.ts");
/* harmony import */ var _core_services_authentication_service__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../../../../../core/services/authentication.service */ "./src/app/core/services/authentication.service.ts");
/* harmony import */ var _core_helpers_hrm_helper__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../../../../../core/helpers/hrm.helper */ "./src/app/core/helpers/hrm.helper.ts");
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ../../../../../../environments/environment */ "./src/environments/environment.ts");











var ListViewComponent = /** @class */ (function () {
    function ListViewComponent(translate, ngxRolesService, http, toastr, authenticationService, leaveService) {
        var _this = this;
        this.translate = translate;
        this.ngxRolesService = ngxRolesService;
        this.http = http;
        this.toastr = toastr;
        this.authenticationService = authenticationService;
        this.leaveService = leaveService;
        this.halfLeavesDuration = _core_helpers_hrm_helper__WEBPACK_IMPORTED_MODULE_9__["half_leaves_duration"];
        this.apiUrl = _environments_environment__WEBPACK_IMPORTED_MODULE_10__["environment"].apiUrl;
        this.authenticationService.loginUser.subscribe(function (x) { return _this.loginUser = x; });
    }
    ListViewComponent.prototype.ngOnInit = function () {
        this.getPendingLeaves();
    };
    ListViewComponent.prototype.getPendingLeaves = function () {
        var _this = this;
        this.leaveService.getPendingLeaves().subscribe(function (data) {
            _this.leaves = data;
        });
    };
    ListViewComponent.prototype.changeLeaveStatus = function (leaveId, statusId) {
        var _this = this;
        var changeLeave = {
            id: leaveId,
            status: statusId
        };
        this.leaveService.changeStatus(changeLeave)
            .subscribe(function (data) {
            _this.toastr.success(_this.translate.instant('leaves.messages.approve'), _this.translate.instant('leaves.title'));
            _this.getPendingLeaves();
        });
    };
    ListViewComponent.prototype.changeRejectLeaveStatus = function (leaveId, statusId) {
        var _this = this;
        sweetalert2__WEBPACK_IMPORTED_MODULE_6___default.a.fire({
            input: 'textarea',
            inputPlaceholder: this.translate.instant('leaves.create.fields.reject_reason') + ' ...',
            inputAttributes: {
                'aria-label': this.translate.instant('leaves.create.fields.reject_reason')
            },
            showCancelButton: true
        }).then(function (result) {
            if (result.value || result.value == '') {
                var changeLeave = {
                    id: leaveId,
                    status: statusId,
                    reject_reason: result.value
                };
                _this.leaveService.changeRejectLeaveStatus(changeLeave)
                    .subscribe(function (data) {
                    _this.toastr.success(_this.translate.instant('leaves.messages.reject'), _this.translate.instant('leaves.title'));
                    _this.getPendingLeaves();
                });
            }
        });
    };
    ListViewComponent.prototype.getTranslateDurationType = function (durationType) {
        return this.halfLeavesDuration[durationType];
    };
    ListViewComponent.ctorParameters = function () { return [
        { type: _ngx_translate_core__WEBPACK_IMPORTED_MODULE_4__["TranslateService"] },
        { type: ngx_permissions__WEBPACK_IMPORTED_MODULE_5__["NgxRolesService"] },
        { type: _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClient"] },
        { type: ngx_toastr__WEBPACK_IMPORTED_MODULE_3__["ToastrService"] },
        { type: _core_services_authentication_service__WEBPACK_IMPORTED_MODULE_8__["AuthenticationService"] },
        { type: _core_services_leave_service__WEBPACK_IMPORTED_MODULE_7__["LeaveService"] }
    ]; };
    ListViewComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-list-view',
            template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./list-view.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/modules/hrm/leaves/pages/list-view/list-view.component.html")).default,
            styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./list-view.component.scss */ "./src/app/modules/hrm/leaves/pages/list-view/list-view.component.scss")).default]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_ngx_translate_core__WEBPACK_IMPORTED_MODULE_4__["TranslateService"],
            ngx_permissions__WEBPACK_IMPORTED_MODULE_5__["NgxRolesService"],
            _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClient"],
            ngx_toastr__WEBPACK_IMPORTED_MODULE_3__["ToastrService"],
            _core_services_authentication_service__WEBPACK_IMPORTED_MODULE_8__["AuthenticationService"],
            _core_services_leave_service__WEBPACK_IMPORTED_MODULE_7__["LeaveService"]])
    ], ListViewComponent);
    return ListViewComponent;
}());



/***/ })

}]);
//# sourceMappingURL=modules-hrm-leaves-leaves-module.js.map