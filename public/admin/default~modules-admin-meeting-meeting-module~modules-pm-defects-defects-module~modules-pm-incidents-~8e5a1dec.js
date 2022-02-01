(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["default~modules-admin-meeting-meeting-module~modules-pm-defects-defects-module~modules-pm-incidents-~8e5a1dec"],{

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/modules/timesheet/components/create-timesheet-modal/create-timesheet-modal.component.html":
/*!*************************************************************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/modules/timesheet/components/create-timesheet-modal/create-timesheet-modal.component.html ***!
  \*************************************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<div class=\"modal-header\">\r\n    <h2 class=\"modal-title font-weight-normal\">\r\n        <i aria-hidden=\"true\" class=\"fa fa-clock-o\"></i>&nbsp;{{'timesheet.create.title1' | translate}}</h2>\r\n    <button (click)=\"bsModalRef.hide()\" aria-label=\"Close\" class=\"close\" data-dismiss=\"modal\" type=\"button\">\r\n        <span aria-hidden=\"true\">&times;</span></button>\r\n</div>\r\n<form (ngSubmit)=\"onSubmit()\" [formGroup]=\"createTimesheetForm\" class=\"form\">\r\n    <div class=\"modal-body\">\r\n        <div class=\"form-body\">\r\n            <div class=\"row\">\r\n                <div class=\"col-md-6\">\r\n                    <div [ngClass]=\"{ 'is-invalid': isFormSubmitted && timesheetControl.start_time.errors }\" class=\"form-group\">\r\n                        <label for=\"start_time\">{{'timesheet.create.fields.start_time' | translate}}\r\n                            <span class=\"text-danger\">&nbsp;*</span></label>\r\n                        <div class=\"position-relative has-icon-left\">\r\n                            <owl-date-time #startDT></owl-date-time>\r\n                            <input (dateTimeChange)=\"startTimeChange($event)\" [owlDateTimeTrigger]=\"startDT\" [owlDateTime]=\"startDT\" aria-describedby=\"inputGroupPrepend1\" class=\"form-control\" formControlName=\"start_time\" id=\"start_time\" placeholder=\"{{'timesheet.create.placeholders.placeholder1' | translate}}\"/>\r\n                            <div class=\"form-control-position\"><i class=\"ft-calendar\"></i></div>\r\n                        </div>\r\n                        <div *ngIf=\"isFormSubmitted && timesheetControl.start_time.errors\" class=\"invalid-feedback\">\r\n                            <div *ngIf=\"timesheetControl.start_time.errors.required\">{{'timesheet.create.error_messages.message1' | translate}}</div>\r\n                        </div>\r\n                    </div>\r\n                </div>\r\n                <div class=\"col-md-6\">\r\n                    <div [ngClass]=\"{ 'is-invalid': isFormSubmitted && timesheetControl.end_time.errors }\" class=\"form-group\">\r\n                        <label for=\"end_time\">{{'timesheet.create.fields.end_time' | translate}}\r\n                            <span class=\"text-danger\">&nbsp;*</span></label>\r\n                        <div class=\"position-relative has-icon-left\">\r\n                            <owl-date-time #endDT></owl-date-time>\r\n                            <input [min]=\"createTimesheetForm.get('start_time').value\" [owlDateTimeTrigger]=\"endDT\" [owlDateTime]=\"endDT\" aria-describedby=\"inputGroupPrepend2\" class=\"form-control\" formControlName=\"end_time\" id=\"end_time\" placeholder=\"{{'timesheet.create.placeholders.placeholder2' | translate}}\"/>\r\n                            <div class=\"form-control-position\"><i class=\"ft-calendar\"></i></div>\r\n                        </div>\r\n                        <div *ngIf=\"isFormSubmitted && timesheetControl.end_time.errors\" class=\"invalid-feedback\">\r\n                            <div *ngIf=\"timesheetControl.end_time.errors.required\">{{'timesheet.create.error_messages.message2' | translate}}</div>\r\n                        </div>\r\n                    </div>\r\n                </div>\r\n                <div class=\"col-md-12\">\r\n                    <div class=\"form-group\">\r\n                        <label for=\"note\">{{'timesheet.create.fields.note' | translate}}</label>\r\n                        <textarea [ngClass]=\"{ 'is-invalid': isFormSubmitted && timesheetControl.note.errors }\" class=\"form-control\" formControlName=\"note\" id=\"note\" placeholder=\"{{'timesheet.create.placeholders.placeholder3' | translate}}\"></textarea>\r\n                        <div *ngIf=\"isFormSubmitted && timesheetControl.note.errors\" class=\"invalid-feedback\">\r\n                            <div *ngIf=\"timesheetControl.note.errors.required\">{{'timesheet.create.error_messages.message4' | translate}}</div>\r\n                        </div>\r\n                    </div>\r\n                </div>\r\n            </div>\r\n        </div>\r\n    </div>\r\n    <div class=\"modal-footer\">\r\n        <button (click)=\"onCancel()\" class=\"btn btn-cancel mb-0\" type=\"button\">{{'common.close' | translate}}</button>\r\n        <button class=\"btn btn-submit mb-0\" type=\"submit\">{{'common.create' | translate}}</button>\r\n    </div>\r\n</form>\r\n");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/modules/timesheet/components/edit-timesheet-modal/edit-timesheet-modal.component.html":
/*!*********************************************************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/modules/timesheet/components/edit-timesheet-modal/edit-timesheet-modal.component.html ***!
  \*********************************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<div class=\"modal-header\">\r\n    <h2 class=\"modal-title font-weight-normal\">\r\n        <i aria-hidden=\"true\" class=\"fa fa-clock-o\"></i>&nbsp;{{'timesheet.create.title2' | translate}}</h2>\r\n    <button (click)=\"bsEditRoleModalRef.hide()\" aria-label=\"Close\" class=\"close\" data-dismiss=\"modal\" type=\"button\">\r\n        <span aria-hidden=\"true\">&times;</span></button>\r\n</div>\r\n<form (ngSubmit)=\"onSubmit()\" [formGroup]=\"editTimesheetForm\" class=\"form\">\r\n    <div class=\"modal-body\">\r\n        <div class=\"form-body\">\r\n            <div class=\"row\">\r\n                <div class=\"col-md-6\">\r\n                    <div [ngClass]=\"{ 'is-invalid': isFormSubmitted && timesheetControl.start_time.errors }\" class=\"form-group\">\r\n                        <label for=\"start_time\">{{'timesheet.create.fields.start_time' | translate}}\r\n                            <span class=\"text-danger\">&nbsp;*</span></label>\r\n                        <div class=\"position-relative has-icon-left\">\r\n                            <owl-date-time #startDT></owl-date-time>\r\n                            <input (dateTimeChange)=\"startTimeChange($event)\" [owlDateTimeTrigger]=\"startDT\" [owlDateTime]=\"startDT\" aria-describedby=\"inputGroupPrepend1\" class=\"form-control\" formControlName=\"start_time\" id=\"start_time\" placeholder=\"{{'timesheet.create.placeholders.placeholder1' | translate}}\"/>\r\n                            <div class=\"form-control-position\"><i class=\"ft-calendar\"></i></div>\r\n                        </div>\r\n                        <div *ngIf=\"isFormSubmitted && timesheetControl.start_time.errors\" class=\"invalid-feedback\">\r\n                            <div *ngIf=\"timesheetControl.start_time.errors.required\">{{'timesheet.create.error_messages.message1' | translate}}</div>\r\n                        </div>\r\n                    </div>\r\n                </div>\r\n                <div class=\"col-md-6\">\r\n                    <div [ngClass]=\"{ 'is-invalid': isFormSubmitted && timesheetControl.end_time.errors }\" class=\"form-group\">\r\n                        <label for=\"end_time\">{{'timesheet.create.fields.end_time' | translate}}\r\n                            <span class=\"text-danger\">&nbsp;*</span></label>\r\n                        <div class=\"position-relative has-icon-left\">\r\n                            <owl-date-time #endDT></owl-date-time>\r\n                            <input [min]=\"editTimesheetForm.get('start_time').value\" [owlDateTimeTrigger]=\"endDT\" [owlDateTime]=\"endDT\" aria-describedby=\"inputGroupPrepend2\" class=\"form-control\" formControlName=\"end_time\" id=\"end_time\" placeholder=\"{{'timesheet.create.placeholders.placeholder2' | translate}}\"/>\r\n                            <div class=\"form-control-position\"><i class=\"ft-calendar\"></i></div>\r\n                        </div>\r\n                        <div *ngIf=\"isFormSubmitted && timesheetControl.end_time.errors\" class=\"invalid-feedback\">\r\n                            <div *ngIf=\"timesheetControl.end_time.errors.required\">{{'timesheet.create.error_messages.message2' | translate}}</div>\r\n                        </div>\r\n                    </div>\r\n                </div>\r\n                <div class=\"col-md-12\">\r\n                    <div class=\"form-group\">\r\n                        <label for=\"note\">{{'timesheet.create.fields.note' | translate}}</label>\r\n                        <textarea [ngClass]=\"{ 'is-invalid': isFormSubmitted && timesheetControl.note.errors }\" class=\"form-control\" formControlName=\"note\" id=\"note\" placeholder=\"{{'timesheet.create.placeholders.placeholder3' | translate}}\"></textarea>\r\n                        <div *ngIf=\"isFormSubmitted && timesheetControl.note.errors\" class=\"invalid-feedback\">\r\n                            <div *ngIf=\"timesheetControl.note.errors.required\">{{'timesheet.create.error_messages.message4' | translate}}</div>\r\n                        </div>\r\n                    </div>\r\n                </div>\r\n            </div>\r\n        </div>\r\n    </div>\r\n    <div class=\"modal-footer\">\r\n        <button (click)=\"onCancel()\" class=\"btn btn-cancel mb-0\" type=\"button\">{{'common.close' | translate}}</button>\r\n        <button class=\"btn btn-submit mb-0\" type=\"submit\">{{'common.update' | translate}}</button>\r\n    </div>\r\n</form>\r\n");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/modules/timesheet/components/timesheet-list/timesheet-list.component.html":
/*!*********************************************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/modules/timesheet/components/timesheet-list/timesheet-list.component.html ***!
  \*********************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<section>\r\n    <div class=\"row\">\r\n        <div class=\"col-sm-12\">\r\n            <div class=\"card bg-transparent mt-0 mb-0\">\r\n                <!-- Card header -->\r\n                <div class=\"card-header p-0\">\r\n                    <h4 class=\"sub-title mt-3\"><span>{{'timesheet.title' | translate}}</span></h4>\r\n                    <div *ngxPermissionsOnly=\"['admin', 'super_admin', 'timesheet_create']\" class=\"card-buttons pt-2 pb-2 pr-1\">\r\n                        <a (click)=\"addTimesheet()\" *ngIf=\"module_id==5\" class=\"btn btn-create mb-0\" placement=\"top\" tooltip=\"{{'common.add_to_timesheet' | translate}}\"><i class=\"fa fa-plus\"></i></a>\r\n                        <a (click)=\"openTimesheetCreateModal()\" *ngIf=\"module_id!=5\" class=\"btn btn-create mb-0\" placement=\"top\" tooltip=\"{{'common.create' | translate}}\"><i class=\"fa fa-plus\"></i></a>\r\n                    </div>\r\n                </div>\r\n                <!-- Card content -->\r\n                <div class=\"card-content\">\r\n                    <!-- Card body -->\r\n                    <div *ngIf=\"timesheets?.length != 0\" class=\"card-body\">\r\n                        <!-- Timesheet list -->\r\n                        <div class=\"row\">\r\n                            <div class=\"col-sm-12\">\r\n                                <div *ngIf=\"isPageLoaded\" class=\"table-responsive-xs table-responsive-sm table-responsive-md table-responsive-lg table-responsive-xl overflow-x-auto\">\r\n                                    <table class=\"table table-bordered table-hover b4-datatable\">\r\n                                        <thead>\r\n                                        <tr>\r\n                                            <th class=\"width-50\">{{'timesheet.columns.photo' | translate}}</th>\r\n                                            <th class=\"width-50\">{{'timesheet.columns.user' | translate}}</th>\r\n                                            <th>{{'timesheet.columns.note' | translate}}</th>\r\n                                            <th class=\"width-110\">{{'timesheet.columns.start_time' | translate}}</th>\r\n                                            <th class=\"width-110\">{{'timesheet.columns.end_time' | translate}}</th>\r\n                                            <th class=\"width-50\">{{'timesheet.columns.time_h' | translate}}</th>\r\n                                            <th class=\"width-50\">{{'timesheet.columns.actions' | translate}}</th>\r\n                                        </tr>\r\n                                        </thead>\r\n                                        <tbody *ngIf=\"timesheets?.length != 0\">\r\n                                        <tr *ngFor=\"let timesheet of timesheets; index as i\">\r\n                                            <td class=\"people-lists\">\r\n                                                <a [routerLink]=\"['/users/profile', timesheet.user.id]\" class=\"btn btn-profile-info rounded-circle text-dark\" placement=\"top\" tooltip=\"{{timesheet.user.firstname}} {{timesheet.user.lastname}}\">\r\n                                                    <img *ngIf=\"timesheet.user.avatar\" alt=\"Profile\" class=\"img-sm rounded-circle\" src=\"{{apiUrl}}/uploads/profile/{{timesheet.user.avatar}}\"/>\r\n                                                    <img *ngIf=\"!timesheet.user.avatar\" alt=\"Profile\" class=\"img-sm rounded-circle\" src=\"../assets/img/profile_small.jpg\"/>\r\n                                                </a>\r\n                                            </td>\r\n                                            <td>{{timesheet.user.firstname}} {{timesheet.user.lastname}}</td>\r\n                                            <td>\r\n                                                <ng-container *ngIf=\"getCheckPermission(timesheet) else elseBlock;\">\r\n                                                    <inline-edit-textarea (updateValue)=\"saveTimesheetDetail(i, 'note', $event);\" [elementFor]=\"'timesheet.inline_edit.note' | translate\" [fieldValue]=\"timesheet.note\" [isRequired]=\"'false'\" [name]=\"'note'\"></inline-edit-textarea>\r\n                                                </ng-container>\r\n                                                <ng-template #elseBlock>{{timesheet.note}}</ng-template>\r\n                                            </td>\r\n                                            <td>{{timesheet.start_time | dateTimeFormatFilter: loginUser.settings.date_time_format}}</td>\r\n                                            <td>{{timesheet.end_time | dateTimeFormatFilter: loginUser.settings.date_time_format}}</td>\r\n                                            <td>{{timesheet.hour_time}}</td>\r\n                                            <td class=\"actions-dropdown\">\r\n                                                <div class=\"btn-group\" dropdown>\r\n                                                    <button aria-controls=\"dropdown-basic-10\" class=\"dropdown-toggle btn-action\" dropdownToggle id=\"button-basic-10\" type=\"button\">\r\n                                                        <i class=\"fa fa-ellipsis-v\"></i></button>\r\n                                                    <ul *dropdownMenu aria-labelledby=\"button-basic-10\" class=\"dropdown-menu animated fadeIn\" id=\"dropdown-basic-10\" role=\"menu\">\r\n                                                        <li *ngIf=\"getCheckPermission(timesheet)\" role=\"menuitem\">\r\n                                                            <a (click)=\"editTimesheet(timesheet)\" class=\"dropdown-item btn btn-edit btn-raised\" tooltip=\"{{'common.edit' | translate}}\"><i class=\"fa fa-pencil-square-o\"></i></a>\r\n                                                        </li>\r\n                                                        <li *ngIf=\"getCheckPermission(timesheet)\" role=\"menuitem\">\r\n                                                            <a (click)=\"deleteTimesheet(timesheet.id,i)\" class=\"dropdown-item btn btn-delete btn-raised\" tooltip=\"{{'common.delete' | translate}}\"><i class=\"fa fa-trash-o\"></i></a>\r\n                                                        </li>\r\n                                                    </ul>\r\n                                                </div>\r\n                                            </td>\r\n                                        </tr>\r\n                                        </tbody>\r\n                                        <tfoot *ngIf=\"timesheets?.length == 0\">\r\n                                        <tr>\r\n                                            <td class=\"no-data-available text-center\" colspan=\"7\">{{'common.datatable.sEmptyTable' | translate}}</td>\r\n                                        </tr>\r\n                                        </tfoot>\r\n                                    </table>\r\n                                </div>\r\n                            </div>\r\n                        </div>\r\n                    </div>\r\n                </div>\r\n            </div>\r\n        </div>\r\n    </div>\r\n</section>\r\n");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/modules/timesheet/pages/my-timesheet/my-timesheet.component.html":
/*!************************************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/modules/timesheet/pages/my-timesheet/my-timesheet.component.html ***!
  \************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<section class=\"hide_empty_message\">\r\n    <div class=\"row\">\r\n        <div class=\"col-sm-12\">\r\n            <div class=\"card pl-2 pr-2\">\r\n                <div class=\"card-header pl-0 pr-0 border-bottom\">\r\n                    <h4 class=\"main-title mt-2\"><span>{{'timesheet.title' | translate}}</span></h4>\r\n                    <div class=\"card-buttons\">\r\n                        <a *ngxPermissionsOnly=\"['admin', 'super_admin', 'holidays_view']\" [routerLink]=\"['/holidays']\" class=\"btn btn-create mb-0\" placement=\"top\" tooltip=\"{{'holidays.title' | translate}}\"><i class=\"fa fa-tree\"></i></a>\r\n                        <a *ngxPermissionsOnly=\"['admin', 'super_admin', 'reports_view']\" [routerLink]=\"['/timesheet/all']\" class=\"btn btn-create mb-0\" tooltip=\"{{'timesheet.title2' | translate}}\"><i class=\"fa fa-clock-o\"></i></a>\r\n                        <a (click)=\"openTimesheetCreateModal()\" *ngxPermissionsOnly=\"['admin', 'super_admin', 'timesheet_create']\" class=\"btn btn-create mb-0\" placement=\"top\" tooltip=\"{{'common.add' | translate}}\"><i class=\"fa fa-plus\"></i></a>\r\n                    </div>\r\n                </div>\r\n                <!-- Card content -->\r\n                <div class=\"card-content pt-3 pb-3\">\r\n                    <!-- Card body -->\r\n                    <div class=\"card-body\">\r\n                        <!-- Filter buttons -->\r\n                        <form (ngSubmit)=\"onSubmit()\" [formGroup]=\"timesheetFilterForm\">\r\n                            <div *ngIf=\"isPageLoaded\" class=\"row d-flex\">\r\n                                <div class=\"col-sm-2\">\r\n                                    <div [ngClass]=\"{ 'is-invalid': isFormSubmitted && filterControl.range.errors }\" class=\"form-group\">\r\n                                        <label class=\"sr-only\" for=\"range\"></label>\r\n                                        <ng-select (change)=\"rangeChange($event)\" [clearable]=\"false\" [items]=\"range\" [multiple]=\"false\" [searchable]=\"true\" [selectOnTab]=\"true\" bindLabel=\"label\" bindValue=\"id\" formControlName=\"range\" labelForId=\"range\"></ng-select>\r\n                                        <div *ngIf=\"isFormSubmitted && filterControl.range.errors\" class=\"invalid-feedback\">\r\n                                            <div *ngIf=\"filterControl.range.errors.required\">{{'timesheet.filter.error_messages.message1' | translate }}</div>\r\n                                        </div>\r\n                                    </div>\r\n                                </div>\r\n                                <div *ngIf=\"filterControl.range.value == 'period'\" class=\"col-sm-3\">\r\n                                    <div [ngClass]=\"{ 'is-invalid': isFormSubmitted && filterControl.period_from.errors }\" class=\"form-group\">\r\n                                        <label class=\"sr-only\" for=\"period_from\"></label>\r\n                                        <div class=\"position-relative has-icon-left\">\r\n                                            <input #dp1=\"bsDatepicker\" (bsValueChange)=\"periodFromDateChange($event)\" [bsConfig]=\"datepickerConfig\" bsDatepicker class=\"form-control\" formControlName=\"period_from\" id=\"period_from\" placeholder=\"{{'timesheet.filter.placeholders.placeholder3' | translate }}\"/>\r\n                                            <div class=\"form-control-position\"><i class=\"ft-calendar\"></i></div>\r\n                                            <div *ngIf=\"isFormSubmitted && filterControl.period_from.errors\" class=\"invalid-feedback\">\r\n                                                <div *ngIf=\"filterControl.period_from.errors\">{{'timesheet.filter.error_messages.message2' | translate }}</div>\r\n                                            </div>\r\n                                        </div>\r\n                                    </div>\r\n                                </div>\r\n                                <div *ngIf=\"filterControl.range.value == 'period'\" class=\"col-sm-3\">\r\n                                    <div [ngClass]=\"{ 'is-invalid': isFormSubmitted && filterControl.period_to.errors }\" class=\"form-group\">\r\n                                        <label class=\"sr-only\" for=\"period_to\"></label>\r\n                                        <div class=\"position-relative has-icon-left\">\r\n                                            <input #dp2=\"bsDatepicker\" [bsConfig]=\"datepickerConfig\" [minDate]=\"timesheetFilterForm.get('period_from').value\" bsDatepicker class=\"form-control\" formControlName=\"period_to\" id=\"period_to\" placeholder=\"{{'timesheet.filter.placeholders.placeholder4' | translate }}\"/>\r\n                                            <div class=\"form-control-position\"><i class=\"ft-calendar\"></i></div>\r\n                                            <div *ngIf=\"isFormSubmitted && filterControl.period_to.errors\" class=\"invalid-feedback\">\r\n                                                <div *ngIf=\"filterControl.period_to.errors\">{{'timesheet.filter.error_messages.message3' | translate }}</div>\r\n                                            </div>\r\n                                        </div>\r\n                                    </div>\r\n                                </div>\r\n                                <div class=\"col-sm-3\">\r\n                                    <div class=\"form-group\">\r\n                                        <label class=\"sr-only\" for=\"project_ids\"></label>\r\n                                        <ng-select (change)=\"onSubmit()\" [items]=\"projects\" [multiple]=\"true\" [searchable]=\"true\" [selectOnTab]=\"true\" [selectableGroup]=\"false\" bindLabel=\"project_name\" bindValue=\"id\" formControlName=\"project_ids\" labelForId=\"project_ids\" placeholder=\"{{'timesheet.filter.placeholders.placeholder1' | translate }}\">\r\n                                            <ng-template let-item=\"item\" ng-option-tmp>{{item.project_name}}</ng-template>\r\n                                        </ng-select>\r\n                                    </div>\r\n                                </div>\r\n                                <div class=\"col-sm-3\">\r\n                                    <div class=\"form-group\">\r\n                                        <label class=\"sr-only\" for=\"client_id\"></label>\r\n                                        <ng-select (change)=\"onSubmit()\" [items]=\"clients\" [multiple]=\"false\" [searchable]=\"true\" [selectOnTab]=\"true\" bindLabel=\"firstname\" bindValue=\"id\" formControlName=\"client_id\" labelForId=\"client_id\" placeholder=\"{{'timesheet.filter.placeholders.placeholder2' | translate }}\">\r\n                                            <ng-template let-item=\"item\" ng-option-tmp>\r\n                                                {{item.firstname}} {{item.lastname}}\r\n                                            </ng-template>\r\n                                        </ng-select>\r\n                                    </div>\r\n                                </div>\r\n                                <div class=\"col text-left btn_apply d-none\">\r\n                                    <button class=\"btn btn-submit btn-sm mb-0\" type=\"submit\">{{'common.apply' | translate}}</button>\r\n                                </div>\r\n                            </div>\r\n                        </form>\r\n                        <!-- Timesheet list datatable -->\r\n                        <div class=\"row\">\r\n                            <div class=\"col-sm-12\">\r\n                                <div class=\"table-responsive-xs table-responsive-sm table-responsive-md table-responsive-lg table-responsive-xl\">\r\n                                    <table [dtOptions]=\"dtOptions\" [dtTrigger]=\"dtTrigger\" class=\"table table-bordered table-hover b4-datatable\" datatable id=\"timesheets_table\" width=\"100%\">\r\n                                        <thead>\r\n                                        <tr>\r\n                                            <th class=\"width-50\">{{'timesheet.columns.project_name' | translate}}</th>\r\n                                            <th>{{'timesheet.columns.entry' | translate}}</th>\r\n                                            <th class=\"width-125\">{{'timesheet.columns.note' | translate}}</th>\r\n                                            <th class=\"width-75\">{{'timesheet.columns.start_time' | translate}}</th>\r\n                                            <th class=\"width-75\">{{'timesheet.columns.end_time' | translate}}</th>\r\n                                            <th class=\"width-50\">{{'timesheet.columns.time_h' | translate}}</th>\r\n                                            <th class=\"width-50\">{{'timesheet.columns.actions' | translate}}</th>\r\n                                        </tr>\r\n                                        </thead>\r\n                                        <tbody *ngIf=\"timesheets?.length > 0\">\r\n                                        <tr *ngFor=\"let timesheet of timesheets; index as i\">\r\n                                            <td>\r\n                                                <ng-container *ngIf=\"timesheet.project_id; else elseBlock\">\r\n                                                    <a [routerLink]=\"['/projects/detail', timesheet.project_id]\" class=\"text-info\" tooltip=\"{{timesheet.project_name}}\">#{{timesheet.project_generated_id}}</a>\r\n                                                </ng-container>\r\n                                                <ng-template #elseBlock>-</ng-template>\r\n                                            </td>\r\n                                            <td>\r\n                                                <ng-container *ngIf=\"timesheet.module_id == 2\">\r\n                                                    <a [routerLink]=\"['/tasks/detail', timesheet.module_related_id]\" class=\"text-info\">#{{timesheet.task_generated_id}}</a> - {{timesheet.task_name}}\r\n                                                </ng-container>\r\n                                                <ng-container *ngIf=\"timesheet.module_id == 3\">\r\n                                                    <a [routerLink]=\"['/defects/detail', timesheet.module_related_id]\" class=\"text-info\">#{{timesheet.defect_generated_id}}</a> - {{timesheet.defect_name}}\r\n                                                </ng-container>\r\n                                                <ng-container *ngIf=\"timesheet.module_id == 4\">\r\n                                                    <a [routerLink]=\"['/incidents/detail', timesheet.module_related_id]\" class=\"text-info\">#{{timesheet.incident_generated_id}}</a> - {{timesheet.incident_name}}\r\n                                                </ng-container>\r\n                                                <ng-container *ngIf=\"timesheet.module_id == 5\">\r\n                                                    <a [routerLink]=\"['/meetings/detail', timesheet.module_related_id]\" class=\"text-info\">#{{timesheet.meeting_generated_id}}</a> - {{timesheet.meeting_title}}\r\n                                                </ng-container>\r\n                                                <ng-container *ngIf=\"timesheet.module_id == 6\">-</ng-container>\r\n                                                <ng-container *ngIf=\"timesheet.module_id == 7\">\r\n                                                    {{timesheet.leave_title}}\r\n                                                </ng-container>\r\n                                            </td>\r\n                                            <td>\r\n                                                <inline-edit-textarea (updateValue)=\"saveTimesheetDetail(i, 'note', $event);\" [elementFor]=\"'timesheet.inline_edit.note' | translate\" [fieldValue]=\"timesheet.note\" [isRequired]=\"'false'\" [name]=\"'note'\"></inline-edit-textarea>\r\n                                            </td>\r\n                                            <td>{{timesheet.start_time | dateTimeFormatFilter: loginUser.settings.date_time_format}}</td>\r\n                                            <td>{{timesheet.end_time | dateTimeFormatFilter: loginUser.settings.date_time_format}}</td>\r\n                                            <td>{{timesheet.hour_time}}</td>\r\n                                            <td class=\"actions-dropdown\">\r\n                                                <div class=\"btn-group\" dropdown>\r\n                                                    <button aria-controls=\"dropdown-basic-1\" class=\"dropdown-toggle btn-action\" dropdownToggle id=\"button-basic-1\" type=\"button\">\r\n                                                        <i class=\"fa fa-ellipsis-v\"></i></button>\r\n                                                    <ul *dropdownMenu aria-labelledby=\"button-basic-1\" class=\"dropdown-menu animated fadeIn\" id=\"dropdown-basic-1\" role=\"menu\">\r\n                                                        <li role=\"menuitem\">\r\n                                                            <a (click)=\"openTimesheetEditModal(timesheet)\" class=\"dropdown-item btn btn-edit btn-raised\" tooltip=\"{{'common.edit' | translate}}\"><i class=\"fa fa-pencil-square-o\"></i></a>\r\n                                                        </li>\r\n                                                        <li role=\"menuitem\">\r\n                                                            <a (click)=\"deleteTimesheet(timesheet.id)\" class=\"dropdown-item btn btn-danger btn-delete btn-raised\" tooltip=\"{{'common.delete' | translate}}\"><i class=\"fa fa-trash-o\"></i></a>\r\n                                                        </li>\r\n                                                    </ul>\r\n                                                </div>\r\n                                            </td>\r\n                                        </tr>\r\n                                        </tbody>\r\n                                        <tbody *ngIf=\"timesheets?.length != 0\">\r\n                                        <tr>\r\n                                            <td colspan=\"4\"></td>\r\n                                            <td class=\"text-center\"><b>{{'common.total' | translate}}</b></td>\r\n                                            <td><b>{{totalHours.hour_time}}</b></td>\r\n                                            <td></td>\r\n                                        </tr>\r\n                                        </tbody>\r\n                                        <tfoot class=\"tfoot_dt d-none\">\r\n                                        <tr>\r\n                                            <td class=\"no-data-available text-center\" colspan=\"7\">{{'common.datatable.sEmptyTable' | translate}}</td>\r\n                                        </tr>\r\n                                        </tfoot>\r\n                                    </table>\r\n                                </div>\r\n                            </div>\r\n                        </div>\r\n                    </div>\r\n                </div>\r\n            </div>\r\n        </div>\r\n    </div>\r\n</section>\r\n");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/modules/timesheet/pages/timesheet/timesheet.component.html":
/*!******************************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/modules/timesheet/pages/timesheet/timesheet.component.html ***!
  \******************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<section class=\"hide_empty_message\">\r\n    <div class=\"row\">\r\n        <div class=\"col-sm-12\">\r\n            <div class=\"card pl-2 pr-2\">\r\n                <div class=\"card-header pl-0 pr-0 border-bottom\">\r\n                    <h4 class=\"main-title mt-2\"><span>{{'timesheet.title' | translate}}</span></h4>\r\n                    <div class=\"card-buttons\">\r\n                        <a *ngxPermissionsOnly=\"['admin', 'super_admin', 'holidays_view']\" [routerLink]=\"['/holidays']\" class=\"btn btn-create mb-0\" placement=\"top\" tooltip=\"{{'holidays.title' | translate}}\"><i class=\"fa fa-tree\"></i></a>\r\n                        <a *ngxPermissionsOnly=\"['admin', 'super_admin', 'timesheet_view']\" [routerLink]=\"['/timesheet']\" class=\"btn btn-create mb-0\" tooltip=\"{{'timesheet.title1' | translate}}\"><i class=\"fa fa-clock-o\"></i></a>\r\n                    </div>\r\n                </div>\r\n                <!-- Card content -->\r\n                <div class=\"card-content pt-3 pb-3\">\r\n                    <!-- Card body -->\r\n                    <div class=\"card-body\">\r\n                        <!-- Filter buttons -->\r\n                        <form (ngSubmit)=\"onSubmit()\" [formGroup]=\"timesheetFilterForm\">\r\n                            <div *ngIf=\"isPageLoaded\" class=\"row d-flex\">\r\n                                <div class=\"col-sm-2\">\r\n                                    <div [ngClass]=\"{ 'is-invalid': isFormSubmitted && filterControl.range.errors }\" class=\"form-group\">\r\n                                        <label class=\"sr-only\" for=\"range\"></label>\r\n                                        <ng-select (change)=\"rangeChange($event)\" [clearable]=\"false\" [items]=\"range\" [multiple]=\"false\" [searchable]=\"true\" [selectOnTab]=\"true\" bindLabel=\"label\" bindValue=\"id\" formControlName=\"range\" labelForId=\"range\"></ng-select>\r\n                                        <div *ngIf=\"isFormSubmitted && filterControl.range.errors\" class=\"invalid-feedback\">\r\n                                            <div *ngIf=\"filterControl.range.errors.required\">{{'timesheet.filter.error_messages.message1' | translate }}</div>\r\n                                        </div>\r\n                                    </div>\r\n                                </div>\r\n                                <div *ngIf=\"filterControl.range.value == 'period'\" class=\"col-sm-3\">\r\n                                    <div [ngClass]=\"{ 'is-invalid': isFormSubmitted && filterControl.period_from.errors }\" class=\"form-group\">\r\n                                        <label class=\"sr-only\" for=\"period_from\"></label>\r\n                                        <div class=\"position-relative has-icon-left\">\r\n                                            <input #dp1=\"bsDatepicker\" (bsValueChange)=\"periodFromDateChange($event)\" [bsConfig]=\"datepickerConfig\" bsDatepicker class=\"form-control\" formControlName=\"period_from\" id=\"period_from\" placeholder=\"{{'timesheet.filter.placeholders.placeholder3' | translate }}\"/>\r\n                                            <div class=\"form-control-position\"><i class=\"ft-calendar\"></i></div>\r\n                                            <div *ngIf=\"isFormSubmitted && filterControl.period_from.errors\" class=\"invalid-feedback\">\r\n                                                <div *ngIf=\"filterControl.period_from.errors\">{{'timesheet.filter.error_messages.message2' | translate }}</div>\r\n                                            </div>\r\n                                        </div>\r\n                                    </div>\r\n                                </div>\r\n                                <div *ngIf=\"filterControl.range.value == 'period'\" class=\"col-sm-3\">\r\n                                    <div [ngClass]=\"{ 'is-invalid': isFormSubmitted && filterControl.period_to.errors }\" class=\"form-group\">\r\n                                        <label class=\"sr-only\" for=\"period_to\"></label>\r\n                                        <div class=\"position-relative has-icon-left\">\r\n                                            <input #dp2=\"bsDatepicker\" [bsConfig]=\"datepickerConfig\" [minDate]=\"timesheetFilterForm.get('period_from').value\" bsDatepicker class=\"form-control\" formControlName=\"period_to\" id=\"period_to\" placeholder=\"{{'timesheet.filter.placeholders.placeholder4' | translate }}\"/>\r\n                                            <div class=\"form-control-position\"><i class=\"ft-calendar\"></i></div>\r\n                                            <div *ngIf=\"isFormSubmitted && filterControl.period_to.errors\" class=\"invalid-feedback\">\r\n                                                <div *ngIf=\"filterControl.period_to.errors\">{{'timesheet.filter.error_messages.message3' | translate }}</div>\r\n                                            </div>\r\n                                        </div>\r\n                                    </div>\r\n                                </div>\r\n                                <div class=\"col-sm-3\">\r\n                                    <div class=\"form-group\">\r\n                                        <label class=\"sr-only\" for=\"user_id\"></label>\r\n                                        <ng-select (change)=\"onSubmit()\" [items]=\"users\" [multiple]=\"false\" [searchable]=\"true\" [selectOnTab]=\"true\" [selectableGroup]=\"false\" bindLabel=\"firstname\" bindValue=\"id\" formControlName=\"user_id\" labelForId=\"user_id\" placeholder=\"{{'timesheet.filter.placeholders.placeholder5' | translate }}\">\r\n                                            <ng-template let-item=\"item\" ng-option-tmp>\r\n                                                {{item.firstname}} {{item.lastname}}\r\n                                            </ng-template>\r\n                                        </ng-select>\r\n                                    </div>\r\n                                </div>\r\n                                <div class=\"col-sm-3\">\r\n                                    <div class=\"form-group\">\r\n                                        <label class=\"sr-only\" for=\"client_id\"></label>\r\n                                        <ng-select (change)=\"onSubmit()\" [items]=\"clients\" [multiple]=\"false\" [searchable]=\"true\" [selectOnTab]=\"true\" bindLabel=\"firstname\" bindValue=\"id\" formControlName=\"client_id\" labelForId=\"client_id\" placeholder=\"{{'timesheet.filter.placeholders.placeholder2' | translate }}\">\r\n                                            <ng-template let-item=\"item\" ng-option-tmp>\r\n                                                {{item.firstname}} {{item.lastname}}\r\n                                            </ng-template>\r\n                                        </ng-select>\r\n                                    </div>\r\n                                </div>\r\n                                <div class=\"col-sm-3\">\r\n                                    <div class=\"form-group\">\r\n                                        <label class=\"sr-only\" for=\"project_ids\"></label>\r\n                                        <ng-select (change)=\"onSubmit()\" [items]=\"projects\" [multiple]=\"true\" [searchable]=\"true\" [selectOnTab]=\"true\" [selectableGroup]=\"false\" bindLabel=\"project_name\" bindValue=\"id\" formControlName=\"project_ids\" labelForId=\"project_ids\" placeholder=\"{{'timesheet.filter.placeholders.placeholder1' | translate }}\">\r\n                                            <ng-template let-item=\"item\" ng-option-tmp>{{item.project_name}}</ng-template>\r\n                                        </ng-select>\r\n                                    </div>\r\n                                </div>\r\n                                <div class=\"col text-left btn_apply d-none\">\r\n                                    <button class=\"btn btn-submit btn-sm mb-0\" type=\"submit\">{{'common.apply' | translate}}</button>\r\n                                </div>\r\n                            </div>\r\n                        </form>\r\n                        <!-- Timesheet list datatable -->\r\n                        <div class=\"row\">\r\n                            <div class=\"col-sm-12\">\r\n                                <div class=\"table-responsive-xs table-responsive-sm table-responsive-md table-responsive-lg table-responsive-xl\">\r\n                                    <table [dtOptions]=\"dtOptions\" [dtTrigger]=\"dtTrigger\" class=\"table table-bordered table-hover b4-datatable\" datatable id=\"timesheets_table\" width=\"100%\">\r\n                                        <thead>\r\n                                        <tr>\r\n                                            <th class=\"width-30\">{{'timesheet.columns.user' | translate}}</th>\r\n                                            <th class=\"width-50\">{{'timesheet.columns.project_name' | translate}}</th>\r\n                                            <th>{{'timesheet.columns.entry' | translate}}</th>\r\n                                            <th class=\"width-150\">{{'timesheet.columns.note' | translate}}</th>\r\n                                            <th class=\"width-75\">{{'timesheet.columns.start_time' | translate}}</th>\r\n                                            <th class=\"width-75\">{{'timesheet.columns.end_time' | translate}}</th>\r\n                                            <th class=\"width-50\">{{'timesheet.columns.time_h' | translate}}</th>\r\n                                        </tr>\r\n                                        </thead>\r\n                                        <tbody *ngIf=\"timesheets?.length != 0\">\r\n                                        <tr *ngFor=\"let timesheet of timesheets; index as i\">\r\n                                            <td class=\"people-lists\">\r\n                                                <a [routerLink]=\"['/users/profile', timesheet.user.id]\" class=\"btn btn-profile-info rounded-circle text-dark\" placement=\"top\" tooltip=\"{{timesheet.user.firstname}} {{timesheet.user.lastname}}\">\r\n                                                    <img *ngIf=\"timesheet.user.avatar\" alt=\"Profile\" class=\"img-sm rounded-circle\" src=\"{{apiUrl}}/uploads/profile/{{timesheet.user.avatar}}\"/>\r\n                                                    <img *ngIf=\"!timesheet.user.avatar\" alt=\"Profile\" class=\"img-sm rounded-circle\" src=\"../assets/img/profile_small.jpg\"/>\r\n                                                </a>\r\n                                            </td>\r\n                                            <td>\r\n                                                <ng-container *ngIf=\"timesheet.project_id; else elseBlock\">\r\n                                                    <a [routerLink]=\"['/projects/detail', timesheet.project_id]\" class=\"text-info\" tooltip=\"{{timesheet.project_name}}\">#{{timesheet.project_generated_id}}</a>\r\n                                                </ng-container>\r\n                                                <ng-template #elseBlock>-</ng-template>\r\n                                            </td>\r\n                                            <td>\r\n                                                <ng-container *ngIf=\"timesheet.module_id == 2\">\r\n                                                    <a [routerLink]=\"['/tasks/detail', timesheet.module_related_id]\" class=\"text-info\">#{{timesheet.task_generated_id}}</a> - {{timesheet.task_name}}\r\n                                                </ng-container>\r\n                                                <ng-container *ngIf=\"timesheet.module_id == 3\">\r\n                                                    <a [routerLink]=\"['/defects/detail', timesheet.module_related_id]\" class=\"text-info\">#{{timesheet.defect_generated_id}}</a> - {{timesheet.defect_name}}\r\n                                                </ng-container>\r\n                                                <ng-container *ngIf=\"timesheet.module_id == 4\">\r\n                                                    <a [routerLink]=\"['/incidents/detail', timesheet.module_related_id]\" class=\"text-info\">#{{timesheet.incident_generated_id}}</a> - {{timesheet.incident_name}}\r\n                                                </ng-container>\r\n                                                <ng-container *ngIf=\"timesheet.module_id == 5\">\r\n                                                    <a [routerLink]=\"['/meetings/detail', timesheet.module_related_id]\" class=\"text-info\">#{{timesheet.meeting_generated_id}}</a> - {{timesheet.meeting_title}}\r\n                                                </ng-container>\r\n                                                <ng-container *ngIf=\"timesheet.module_id == 6\">-</ng-container>\r\n                                                <ng-container *ngIf=\"timesheet.module_id == 7\">\r\n                                                    {{timesheet.leave_title}}\r\n                                                </ng-container>\r\n                                            </td>\r\n                                            <td>{{timesheet.note}}</td>\r\n                                            <td>{{timesheet.start_time | dateTimeFormatFilter: loginUser.settings.date_time_format}}</td>\r\n                                            <td>{{timesheet.end_time | dateTimeFormatFilter: loginUser.settings.date_time_format}}</td>\r\n                                            <td>{{timesheet.hour_time}}</td>\r\n                                        </tr>\r\n                                        </tbody>\r\n                                        <tbody *ngIf=\"timesheets?.length != 0\">\r\n                                        <tr>\r\n                                            <td colspan=\"5\"></td>\r\n                                            <td class=\"text-center\"><b>{{'common.total' | translate}}</b></td>\r\n                                            <td><b>{{totalHours.hour_time}}</b></td>\r\n                                        </tr>\r\n                                        </tbody>\r\n                                        <tfoot class=\"tfoot_dt d-none\">\r\n                                        <tr>\r\n                                            <td class=\"no-data-available text-center\" colspan=\"7\">{{'common.datatable.sEmptyTable' | translate}}</td>\r\n                                        </tr>\r\n                                        </tfoot>\r\n                                    </table>\r\n                                </div>\r\n                            </div>\r\n                        </div>\r\n                    </div>\r\n                </div>\r\n            </div>\r\n        </div>\r\n    </div>\r\n</section>\r\n");

/***/ }),

/***/ "./src/app/core/services/meeting.service.ts":
/*!**************************************************!*\
  !*** ./src/app/core/services/meeting.service.ts ***!
  \**************************************************/
/*! exports provided: MeetingService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MeetingService", function() { return MeetingService; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../environments/environment */ "./src/environments/environment.ts");




var MeetingService = /** @class */ (function () {
    function MeetingService(http) {
        this.http = http;
        this.apiUrl = _environments_environment__WEBPACK_IMPORTED_MODULE_3__["environment"].apiUrl;
    }
    MeetingService.prototype.getAll = function () {
        return this.http.get(this.apiUrl + "/api/meetings");
    };
    MeetingService.prototype.getById = function (id) {
        return this.http.get(this.apiUrl + "/api/meetings/" + id);
    };
    MeetingService.prototype.create = function (meeting) {
        return this.http.post(this.apiUrl + "/api/meetings", meeting);
    };
    MeetingService.prototype.update = function (meeting) {
        return this.http.put(this.apiUrl + "/api/meetings/" + meeting.id, meeting);
    };
    MeetingService.prototype.delete = function (id) {
        return this.http.delete(this.apiUrl + "/api/meetings/" + id);
    };
    MeetingService.prototype.changeStatus = function (params) {
        return this.http.post(this.apiUrl + "/api/meetings/" + params.ids + "/change-status", { 'status': params.status });
    };
    MeetingService.prototype.getCalendarMeetings = function () {
        return this.http.get(this.apiUrl + "/api/meetings/calendar");
    };
    MeetingService.ctorParameters = function () { return [
        { type: _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClient"] }
    ]; };
    MeetingService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
            providedIn: 'root'
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClient"]])
    ], MeetingService);
    return MeetingService;
}());



/***/ }),

/***/ "./src/app/core/services/project.service.ts":
/*!**************************************************!*\
  !*** ./src/app/core/services/project.service.ts ***!
  \**************************************************/
/*! exports provided: ProjectService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ProjectService", function() { return ProjectService; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../environments/environment */ "./src/environments/environment.ts");




var ProjectService = /** @class */ (function () {
    function ProjectService(http) {
        this.http = http;
        this.apiUrl = _environments_environment__WEBPACK_IMPORTED_MODULE_3__["environment"].apiUrl;
    }
    ProjectService.prototype.getAll = function () {
        return this.http.get(this.apiUrl + "/api/projects");
    };
    ProjectService.prototype.getMyProjects = function () {
        return this.http.get(this.apiUrl + "/api/projects/my");
    };
    ProjectService.prototype.getById = function (id) {
        return this.http.get(this.apiUrl + "/api/projects/" + id);
    };
    ProjectService.prototype.getProjectById = function (id) {
        return this.http.get(this.apiUrl + "/api/projects/getbyid/" + id);
    };
    ProjectService.prototype.create = function (project) {
        return this.http.post(this.apiUrl + "/api/projects", project);
    };
    ProjectService.prototype.update = function (project) {
        return this.http.put(this.apiUrl + "/api/projects/" + project.id, project);
    };
    ProjectService.prototype.delete = function (id, params) {
        return this.http.post(this.apiUrl + "/api/projects/delete/" + id, params);
    };
    ProjectService.prototype.updateNotes = function (project) {
        return this.http.put(this.apiUrl + "/api/projects/notes/" + project.id, project);
    };
    ProjectService.prototype.changeStatus = function (project) {
        return this.http.post(this.apiUrl + "/api/projects/" + project.ids + "/change-status", { 'status': project.status });
    };
    ProjectService.prototype.getReleasePlanner = function () {
        return this.http.get(this.apiUrl + "/api/projects/release-planner");
    };
    ProjectService.prototype.getProject = function () {
        return this.http.get(this.apiUrl + "/api/projects/projectmembers", {});
    };
    ProjectService.prototype.getProjectPermission = function (id) {
        return this.http.get(this.apiUrl + "/api/projects/" + id + "/permission", {});
    };
    ProjectService.ctorParameters = function () { return [
        { type: _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClient"] }
    ]; };
    ProjectService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
            providedIn: 'root'
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClient"]])
    ], ProjectService);
    return ProjectService;
}());



/***/ }),

/***/ "./src/app/core/services/timesheet.service.ts":
/*!****************************************************!*\
  !*** ./src/app/core/services/timesheet.service.ts ***!
  \****************************************************/
/*! exports provided: TimesheetService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TimesheetService", function() { return TimesheetService; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../environments/environment */ "./src/environments/environment.ts");




var TimesheetService = /** @class */ (function () {
    function TimesheetService(http) {
        this.http = http;
        this.apiUrl = _environments_environment__WEBPACK_IMPORTED_MODULE_3__["environment"].apiUrl;
    }
    TimesheetService.prototype.getTimesheetsByModule = function (params) {
        return this.http.post(this.apiUrl + "/api/get-timesheets", params);
    };
    TimesheetService.prototype.create = function (params) {
        return this.http.post(this.apiUrl + "/api/timesheets", params);
    };
    TimesheetService.prototype.update = function (timesheet) {
        return this.http.put(this.apiUrl + "/api/timesheets/" + timesheet.id, timesheet);
    };
    TimesheetService.prototype.delete = function (id) {
        return this.http.delete(this.apiUrl + "/api/timesheets/" + id);
    };
    TimesheetService.ctorParameters = function () { return [
        { type: _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClient"] }
    ]; };
    TimesheetService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
            providedIn: 'root'
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClient"]])
    ], TimesheetService);
    return TimesheetService;
}());



/***/ }),

/***/ "./src/app/modules/timesheet/components/create-timesheet-modal/create-timesheet-modal.component.scss":
/*!***********************************************************************************************************!*\
  !*** ./src/app/modules/timesheet/components/create-timesheet-modal/create-timesheet-modal.component.scss ***!
  \***********************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL21vZHVsZXMvdGltZXNoZWV0L2NvbXBvbmVudHMvY3JlYXRlLXRpbWVzaGVldC1tb2RhbC9jcmVhdGUtdGltZXNoZWV0LW1vZGFsLmNvbXBvbmVudC5zY3NzIn0= */");

/***/ }),

/***/ "./src/app/modules/timesheet/components/create-timesheet-modal/create-timesheet-modal.component.ts":
/*!*********************************************************************************************************!*\
  !*** ./src/app/modules/timesheet/components/create-timesheet-modal/create-timesheet-modal.component.ts ***!
  \*********************************************************************************************************/
/*! exports provided: CreateTimesheetModalComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CreateTimesheetModalComponent", function() { return CreateTimesheetModalComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var ngx_bootstrap_modal__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ngx-bootstrap/modal */ "./node_modules/ngx-bootstrap/modal/fesm5/ngx-bootstrap-modal.js");
/* harmony import */ var ngx_toastr__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ngx-toastr */ "./node_modules/ngx-toastr/fesm5/ngx-toastr.js");
/* harmony import */ var _ngx_translate_core__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @ngx-translate/core */ "./node_modules/@ngx-translate/core/fesm5/ngx-translate-core.js");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! rxjs */ "./node_modules/rxjs/_esm5/index.js");
/* harmony import */ var moment__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! moment */ "./node_modules/moment/moment.js");
/* harmony import */ var moment__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(moment__WEBPACK_IMPORTED_MODULE_7__);
/* harmony import */ var _core_services_timesheet_service__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../../../../core/services/timesheet.service */ "./src/app/core/services/timesheet.service.ts");









var CreateTimesheetModalComponent = /** @class */ (function () {
    function CreateTimesheetModalComponent(translate, bsModalRef, formBuilder, toastr, timesheetService) {
        this.translate = translate;
        this.bsModalRef = bsModalRef;
        this.formBuilder = formBuilder;
        this.toastr = toastr;
        this.timesheetService = timesheetService;
        this.event = new _angular_core__WEBPACK_IMPORTED_MODULE_1__["EventEmitter"]();
        this.isFormSubmitted = false;
    }
    Object.defineProperty(CreateTimesheetModalComponent.prototype, "timesheetControl", {
        get: function () {
            return this.createTimesheetForm.controls;
        },
        enumerable: true,
        configurable: true
    });
    CreateTimesheetModalComponent.prototype.ngOnInit = function () {
        this.onClose = new rxjs__WEBPACK_IMPORTED_MODULE_6__["Subject"]();
        this.loadForms();
    };
    CreateTimesheetModalComponent.prototype.loadForms = function () {
        this.createTimesheetForm = this.formBuilder.group({
            project_id: [this.params.project_id],
            module_id: [this.params.module_id, _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required],
            module_related_id: [this.params.module_related_id],
            start_time: [new Date(), _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required],
            end_time: [new Date(), _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required],
            note: [null],
        });
    };
    CreateTimesheetModalComponent.prototype.startTimeChange = function (start_time) {
        this.createTimesheetForm.patchValue({ end_time: new Date(start_time.value) });
    };
    CreateTimesheetModalComponent.prototype.onSubmit = function () {
        var _this = this;
        this.isFormSubmitted = true;
        if (this.createTimesheetForm.invalid) {
            return;
        }
        this.createTimesheetForm.value.start_time = moment__WEBPACK_IMPORTED_MODULE_7__(this.createTimesheetForm.value.start_time).format('YYYY-MM-DD HH:mm:ss');
        this.createTimesheetForm.value.end_time = moment__WEBPACK_IMPORTED_MODULE_7__(this.createTimesheetForm.value.end_time).format('YYYY-MM-DD HH:mm:ss');
        // Check dates.
        if ((this.createTimesheetForm.value.start_time == this.createTimesheetForm.value.end_time) || (this.createTimesheetForm.value.start_time > this.createTimesheetForm.value.end_time)) {
            this.toastr.error(this.translate.instant('timesheet.create.error_messages.message3'), this.translate.instant('timesheet.title'));
            return false;
        }
        this.timesheetService.create(this.createTimesheetForm.value).subscribe(function (data) {
            _this.toastr.success(_this.translate.instant('timesheet.messages.create'), _this.translate.instant('timesheet.title'));
            _this.event.emit({ data: true });
            _this.onCancel();
        }, function (error) {
            _this.event.emit({ data: true });
            _this.onCancel();
        });
    };
    CreateTimesheetModalComponent.prototype.onCancel = function () {
        this.onClose.next(false);
        this.bsModalRef.hide();
    };
    CreateTimesheetModalComponent.ctorParameters = function () { return [
        { type: _ngx_translate_core__WEBPACK_IMPORTED_MODULE_5__["TranslateService"] },
        { type: ngx_bootstrap_modal__WEBPACK_IMPORTED_MODULE_3__["BsModalRef"] },
        { type: _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormBuilder"] },
        { type: ngx_toastr__WEBPACK_IMPORTED_MODULE_4__["ToastrService"] },
        { type: _core_services_timesheet_service__WEBPACK_IMPORTED_MODULE_8__["TimesheetService"] }
    ]; };
    CreateTimesheetModalComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-create-timesheet-modal',
            template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./create-timesheet-modal.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/modules/timesheet/components/create-timesheet-modal/create-timesheet-modal.component.html")).default,
            styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./create-timesheet-modal.component.scss */ "./src/app/modules/timesheet/components/create-timesheet-modal/create-timesheet-modal.component.scss")).default]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_ngx_translate_core__WEBPACK_IMPORTED_MODULE_5__["TranslateService"],
            ngx_bootstrap_modal__WEBPACK_IMPORTED_MODULE_3__["BsModalRef"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormBuilder"],
            ngx_toastr__WEBPACK_IMPORTED_MODULE_4__["ToastrService"],
            _core_services_timesheet_service__WEBPACK_IMPORTED_MODULE_8__["TimesheetService"]])
    ], CreateTimesheetModalComponent);
    return CreateTimesheetModalComponent;
}());



/***/ }),

/***/ "./src/app/modules/timesheet/components/edit-timesheet-modal/edit-timesheet-modal.component.scss":
/*!*******************************************************************************************************!*\
  !*** ./src/app/modules/timesheet/components/edit-timesheet-modal/edit-timesheet-modal.component.scss ***!
  \*******************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL21vZHVsZXMvdGltZXNoZWV0L2NvbXBvbmVudHMvZWRpdC10aW1lc2hlZXQtbW9kYWwvZWRpdC10aW1lc2hlZXQtbW9kYWwuY29tcG9uZW50LnNjc3MifQ== */");

/***/ }),

/***/ "./src/app/modules/timesheet/components/edit-timesheet-modal/edit-timesheet-modal.component.ts":
/*!*****************************************************************************************************!*\
  !*** ./src/app/modules/timesheet/components/edit-timesheet-modal/edit-timesheet-modal.component.ts ***!
  \*****************************************************************************************************/
/*! exports provided: EditTimesheetModalComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "EditTimesheetModalComponent", function() { return EditTimesheetModalComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var ngx_bootstrap_modal__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ngx-bootstrap/modal */ "./node_modules/ngx-bootstrap/modal/fesm5/ngx-bootstrap-modal.js");
/* harmony import */ var ngx_toastr__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ngx-toastr */ "./node_modules/ngx-toastr/fesm5/ngx-toastr.js");
/* harmony import */ var _ngx_translate_core__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @ngx-translate/core */ "./node_modules/@ngx-translate/core/fesm5/ngx-translate-core.js");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! rxjs */ "./node_modules/rxjs/_esm5/index.js");
/* harmony import */ var moment__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! moment */ "./node_modules/moment/moment.js");
/* harmony import */ var moment__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(moment__WEBPACK_IMPORTED_MODULE_7__);
/* harmony import */ var _core_services_timesheet_service__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../../../../core/services/timesheet.service */ "./src/app/core/services/timesheet.service.ts");









var EditTimesheetModalComponent = /** @class */ (function () {
    function EditTimesheetModalComponent(translate, bsEditRoleModalRef, formBuilder, toastr, timesheetService) {
        this.translate = translate;
        this.bsEditRoleModalRef = bsEditRoleModalRef;
        this.formBuilder = formBuilder;
        this.toastr = toastr;
        this.timesheetService = timesheetService;
        this.event = new _angular_core__WEBPACK_IMPORTED_MODULE_1__["EventEmitter"]();
        this.isFormSubmitted = false;
    }
    Object.defineProperty(EditTimesheetModalComponent.prototype, "timesheetControl", {
        get: function () {
            return this.editTimesheetForm.controls;
        },
        enumerable: true,
        configurable: true
    });
    EditTimesheetModalComponent.prototype.ngOnInit = function () {
        this.onClose = new rxjs__WEBPACK_IMPORTED_MODULE_6__["Subject"]();
        this.loadForm();
    };
    EditTimesheetModalComponent.prototype.loadForm = function () {
        this.editTimesheetForm = this.formBuilder.group({
            id: [this.timesheet.id],
            start_time: [new Date(this.timesheet.start_time), _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required],
            end_time: [new Date(this.timesheet.end_time), _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required],
            note: [this.timesheet.note],
        });
    };
    EditTimesheetModalComponent.prototype.startTimeChange = function (start_time) {
        this.editTimesheetForm.patchValue({ end_time: new Date(start_time.value) });
    };
    EditTimesheetModalComponent.prototype.onSubmit = function () {
        var _this = this;
        this.isFormSubmitted = true;
        if (this.editTimesheetForm.invalid) {
            return;
        }
        this.editTimesheetForm.value.start_time = moment__WEBPACK_IMPORTED_MODULE_7__(this.editTimesheetForm.value.start_time).format('YYYY-MM-DD HH:mm:ss');
        this.editTimesheetForm.value.end_time = moment__WEBPACK_IMPORTED_MODULE_7__(this.editTimesheetForm.value.end_time).format('YYYY-MM-DD HH:mm:ss');
        // --
        // Check dates
        if ((this.editTimesheetForm.value.start_time == this.editTimesheetForm.value.end_time) || (this.editTimesheetForm.value.start_time > this.editTimesheetForm.value.end_time)) {
            this.toastr.error(this.translate.instant('timesheet.create.error_messages.message3'), this.translate.instant('timesheet.title'));
            return false;
        }
        this.timesheetService.update(this.editTimesheetForm.value).subscribe(function (data) {
            _this.toastr.success(_this.translate.instant('timesheet.messages.update'), _this.translate.instant('timesheet.title'));
            _this.event.emit({ data: true });
            _this.onCancel();
        }, function (error) {
            _this.onCancel();
        });
    };
    EditTimesheetModalComponent.prototype.onCancel = function () {
        this.onClose.next(false);
        this.bsEditRoleModalRef.hide();
    };
    EditTimesheetModalComponent.ctorParameters = function () { return [
        { type: _ngx_translate_core__WEBPACK_IMPORTED_MODULE_5__["TranslateService"] },
        { type: ngx_bootstrap_modal__WEBPACK_IMPORTED_MODULE_3__["BsModalRef"] },
        { type: _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormBuilder"] },
        { type: ngx_toastr__WEBPACK_IMPORTED_MODULE_4__["ToastrService"] },
        { type: _core_services_timesheet_service__WEBPACK_IMPORTED_MODULE_8__["TimesheetService"] }
    ]; };
    EditTimesheetModalComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-edit-timesheet-modal',
            template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./edit-timesheet-modal.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/modules/timesheet/components/edit-timesheet-modal/edit-timesheet-modal.component.html")).default,
            styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./edit-timesheet-modal.component.scss */ "./src/app/modules/timesheet/components/edit-timesheet-modal/edit-timesheet-modal.component.scss")).default]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_ngx_translate_core__WEBPACK_IMPORTED_MODULE_5__["TranslateService"],
            ngx_bootstrap_modal__WEBPACK_IMPORTED_MODULE_3__["BsModalRef"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormBuilder"],
            ngx_toastr__WEBPACK_IMPORTED_MODULE_4__["ToastrService"],
            _core_services_timesheet_service__WEBPACK_IMPORTED_MODULE_8__["TimesheetService"]])
    ], EditTimesheetModalComponent);
    return EditTimesheetModalComponent;
}());



/***/ }),

/***/ "./src/app/modules/timesheet/components/timesheet-list/timesheet-list.component.scss":
/*!*******************************************************************************************!*\
  !*** ./src/app/modules/timesheet/components/timesheet-list/timesheet-list.component.scss ***!
  \*******************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL21vZHVsZXMvdGltZXNoZWV0L2NvbXBvbmVudHMvdGltZXNoZWV0LWxpc3QvdGltZXNoZWV0LWxpc3QuY29tcG9uZW50LnNjc3MifQ== */");

/***/ }),

/***/ "./src/app/modules/timesheet/components/timesheet-list/timesheet-list.component.ts":
/*!*****************************************************************************************!*\
  !*** ./src/app/modules/timesheet/components/timesheet-list/timesheet-list.component.ts ***!
  \*****************************************************************************************/
/*! exports provided: TimesheetListComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TimesheetListComponent", function() { return TimesheetListComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var ngx_bootstrap_modal__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ngx-bootstrap/modal */ "./node_modules/ngx-bootstrap/modal/fesm5/ngx-bootstrap-modal.js");
/* harmony import */ var ngx_toastr__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ngx-toastr */ "./node_modules/ngx-toastr/fesm5/ngx-toastr.js");
/* harmony import */ var ngx_permissions__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ngx-permissions */ "./node_modules/ngx-permissions/ngx-permissions.umd.js");
/* harmony import */ var ngx_permissions__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(ngx_permissions__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _ngx_translate_core__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @ngx-translate/core */ "./node_modules/@ngx-translate/core/fesm5/ngx-translate-core.js");
/* harmony import */ var sweetalert2__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! sweetalert2 */ "./node_modules/sweetalert2/dist/sweetalert2.all.js");
/* harmony import */ var sweetalert2__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(sweetalert2__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var _core_services_timesheet_service__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../../../../core/services/timesheet.service */ "./src/app/core/services/timesheet.service.ts");
/* harmony import */ var _core_services_meeting_service__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../../../../core/services/meeting.service */ "./src/app/core/services/meeting.service.ts");
/* harmony import */ var _components_create_timesheet_modal_create_timesheet_modal_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../../components/create-timesheet-modal/create-timesheet-modal.component */ "./src/app/modules/timesheet/components/create-timesheet-modal/create-timesheet-modal.component.ts");
/* harmony import */ var _components_edit_timesheet_modal_edit_timesheet_modal_component__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ../../components/edit-timesheet-modal/edit-timesheet-modal.component */ "./src/app/modules/timesheet/components/edit-timesheet-modal/edit-timesheet-modal.component.ts");











var TimesheetListComponent = /** @class */ (function () {
    function TimesheetListComponent(translate, modalService, toastr, ngxRolesService, timesheetService, meetingService) {
        this.translate = translate;
        this.modalService = modalService;
        this.toastr = toastr;
        this.ngxRolesService = ngxRolesService;
        this.timesheetService = timesheetService;
        this.meetingService = meetingService;
        this.isPageLoaded = false;
    }
    TimesheetListComponent.prototype.ngOnInit = function () {
        this.getTimesheet();
    };
    TimesheetListComponent.prototype.getTimesheet = function () {
        var _this = this;
        var params = { 'module_id': this.module_id, 'module_related_id': this.module_related_id };
        this.timesheetService.getTimesheetsByModule(params).subscribe(function (data) {
            _this.timesheets = data;
            _this.isPageLoaded = true;
        });
    };
    TimesheetListComponent.prototype.openTimesheetCreateModal = function () {
        var _this = this;
        var modalConfigs = {
            animated: true,
            keyboard: true,
            backdrop: true,
            ignoreBackdropClick: false,
            class: 'inmodal modal-dialog-centered modal-md animated fadeIn',
            initialState: {
                params: {
                    module_id: this.module_id,
                    module_related_id: this.module_related_id,
                    project_id: this.project_id
                }
            }
        };
        this.modalRef = this.modalService.show(_components_create_timesheet_modal_create_timesheet_modal_component__WEBPACK_IMPORTED_MODULE_9__["CreateTimesheetModalComponent"], modalConfigs);
        this.modalRef.content.event.subscribe(function (data) {
            _this.getTimesheet();
        });
    };
    TimesheetListComponent.prototype.editTimesheet = function (timesheet) {
        var _this = this;
        var modalConfigs = {
            animated: true,
            keyboard: true,
            backdrop: true,
            ignoreBackdropClick: false,
            class: 'inmodal modal-dialog-centered modal-md animated fadeIn',
            initialState: {
                timesheet: timesheet
            }
        };
        this.modalRef = this.modalService.show(_components_edit_timesheet_modal_edit_timesheet_modal_component__WEBPACK_IMPORTED_MODULE_10__["EditTimesheetModalComponent"], modalConfigs);
        this.modalRef.content.event.subscribe(function (data) {
            _this.getTimesheet();
        });
    };
    TimesheetListComponent.prototype.deleteTimesheet = function (id, index) {
        var _this = this;
        sweetalert2__WEBPACK_IMPORTED_MODULE_6___default.a.fire({
            title: this.translate.instant('common.swal.title'),
            text: this.translate.instant('common.swal.text') + this.translate.instant('timesheet.title').toLowerCase() + '!',
            type: 'warning',
            showCancelButton: true,
            confirmButtonText: this.translate.instant('common.swal.confirmButtonText'),
            cancelButtonText: this.translate.instant('common.swal.cancelButtonText')
        }).then(function (result) {
            if (result.value) {
                _this.timesheetService.delete(id).subscribe(function (data) {
                    _this.timesheets.splice(index, 1);
                    _this.toastr.success(_this.translate.instant('timesheet.messages.delete'), _this.translate.instant('timesheet.title'));
                });
            }
        });
    };
    TimesheetListComponent.prototype.saveTimesheetDetail = function (index, name, value) {
        var _this = this;
        this.timesheets[index][name] = value;
        this.timesheetService.update(this.timesheets[index]).subscribe(function (data) {
            _this.toastr.success(_this.translate.instant('timesheet.messages.update'), _this.translate.instant('timesheet.title'));
            _this.getTimesheet();
        });
    };
    TimesheetListComponent.prototype.getCheckPermission = function (timesheet) {
        var role = this.ngxRolesService.getRole('admin');
        if ((role && role.name == 'admin') || this.loginUser.is_super_admin) {
            return true;
        }
        else if (timesheet.created_user_id == this.loginUser.id) {
            return true;
        }
        else {
            return false;
        }
    };
    TimesheetListComponent.prototype.addTimesheet = function () {
        var _this = this;
        if (this.module_id == 5) {
            this.meetingService.getById(this.module_related_id).subscribe(function (data) {
                var meeting = data;
                var params = {
                    project_id: null,
                    module_id: _this.module_id,
                    module_related_id: _this.module_related_id,
                    start_time: meeting.start_date,
                    end_time: meeting.end_date,
                    note: null
                };
                _this.timesheetService.create(params).subscribe(function (data) {
                    _this.getTimesheet();
                    _this.toastr.success(_this.translate.instant('timesheet.messages.create'), _this.translate.instant('timesheet.title'));
                }, function (error) {
                    _this.toastr.error(_this.translate.instant('common.error_messages.message5'));
                });
            }, function (error) {
                _this.toastr.error(_this.translate.instant('common.error_messages.message5'));
            });
        }
        else {
            this.toastr.error(this.translate.instant('common.error_messages.message5'));
        }
    };
    TimesheetListComponent.ctorParameters = function () { return [
        { type: _ngx_translate_core__WEBPACK_IMPORTED_MODULE_5__["TranslateService"] },
        { type: ngx_bootstrap_modal__WEBPACK_IMPORTED_MODULE_2__["BsModalService"] },
        { type: ngx_toastr__WEBPACK_IMPORTED_MODULE_3__["ToastrService"] },
        { type: ngx_permissions__WEBPACK_IMPORTED_MODULE_4__["NgxRolesService"] },
        { type: _core_services_timesheet_service__WEBPACK_IMPORTED_MODULE_7__["TimesheetService"] },
        { type: _core_services_meeting_service__WEBPACK_IMPORTED_MODULE_8__["MeetingService"] }
    ]; };
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])(),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", Number)
    ], TimesheetListComponent.prototype, "module_id", void 0);
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])(),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", Number)
    ], TimesheetListComponent.prototype, "module_related_id", void 0);
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])(),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", Number)
    ], TimesheetListComponent.prototype, "project_id", void 0);
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])(),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", Object)
    ], TimesheetListComponent.prototype, "loginUser", void 0);
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])(),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", Object)
    ], TimesheetListComponent.prototype, "apiUrl", void 0);
    TimesheetListComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-timesheet-list',
            template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./timesheet-list.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/modules/timesheet/components/timesheet-list/timesheet-list.component.html")).default,
            styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./timesheet-list.component.scss */ "./src/app/modules/timesheet/components/timesheet-list/timesheet-list.component.scss")).default]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_ngx_translate_core__WEBPACK_IMPORTED_MODULE_5__["TranslateService"],
            ngx_bootstrap_modal__WEBPACK_IMPORTED_MODULE_2__["BsModalService"],
            ngx_toastr__WEBPACK_IMPORTED_MODULE_3__["ToastrService"],
            ngx_permissions__WEBPACK_IMPORTED_MODULE_4__["NgxRolesService"],
            _core_services_timesheet_service__WEBPACK_IMPORTED_MODULE_7__["TimesheetService"],
            _core_services_meeting_service__WEBPACK_IMPORTED_MODULE_8__["MeetingService"]])
    ], TimesheetListComponent);
    return TimesheetListComponent;
}());



/***/ }),

/***/ "./src/app/modules/timesheet/pages/my-timesheet/my-timesheet.component.scss":
/*!**********************************************************************************!*\
  !*** ./src/app/modules/timesheet/pages/my-timesheet/my-timesheet.component.scss ***!
  \**********************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = (".hide_empty_message ::ng-deep .odd {\n  display: none;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvbW9kdWxlcy90aW1lc2hlZXQvcGFnZXMvbXktdGltZXNoZWV0L0M6XFxVc2Vyc1xcdGh1YW5cXE9uZURyaXZlXFxEZXNrdG9wXFxnbGF2YWwtdGh1YW5kaW5oL3NyY1xcYXBwXFxtb2R1bGVzXFx0aW1lc2hlZXRcXHBhZ2VzXFxteS10aW1lc2hlZXRcXG15LXRpbWVzaGVldC5jb21wb25lbnQuc2NzcyIsInNyYy9hcHAvbW9kdWxlcy90aW1lc2hlZXQvcGFnZXMvbXktdGltZXNoZWV0L215LXRpbWVzaGVldC5jb21wb25lbnQuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNJLGFBQUE7QUNDSiIsImZpbGUiOiJzcmMvYXBwL21vZHVsZXMvdGltZXNoZWV0L3BhZ2VzL215LXRpbWVzaGVldC9teS10aW1lc2hlZXQuY29tcG9uZW50LnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyIuaGlkZV9lbXB0eV9tZXNzYWdlIDo6bmctZGVlcCAub2RkIHtcclxuICAgIGRpc3BsYXk6IG5vbmVcclxufSIsIi5oaWRlX2VtcHR5X21lc3NhZ2UgOjpuZy1kZWVwIC5vZGQge1xuICBkaXNwbGF5OiBub25lO1xufSJdfQ== */");

/***/ }),

/***/ "./src/app/modules/timesheet/pages/my-timesheet/my-timesheet.component.ts":
/*!********************************************************************************!*\
  !*** ./src/app/modules/timesheet/pages/my-timesheet/my-timesheet.component.ts ***!
  \********************************************************************************/
/*! exports provided: MyTimesheetComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MyTimesheetComponent", function() { return MyTimesheetComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
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
/* harmony import */ var _core_services_timesheet_service__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ../../../../core/services/timesheet.service */ "./src/app/core/services/timesheet.service.ts");
/* harmony import */ var _core_services_project_service__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ../../../../core/services/project.service */ "./src/app/core/services/project.service.ts");
/* harmony import */ var _core_services_client_service__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ../../../../core/services/client.service */ "./src/app/core/services/client.service.ts");
/* harmony import */ var _core_services_authentication_service__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! ../../../../core/services/authentication.service */ "./src/app/core/services/authentication.service.ts");
/* harmony import */ var _components_create_timesheet_modal_create_timesheet_modal_component__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! ../../components/create-timesheet-modal/create-timesheet-modal.component */ "./src/app/modules/timesheet/components/create-timesheet-modal/create-timesheet-modal.component.ts");
/* harmony import */ var _components_edit_timesheet_modal_edit_timesheet_modal_component__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! ../../components/edit-timesheet-modal/edit-timesheet-modal.component */ "./src/app/modules/timesheet/components/edit-timesheet-modal/edit-timesheet-modal.component.ts");
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! ../../../../../environments/environment */ "./src/environments/environment.ts");
/* harmony import */ var datatables_net__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(/*! datatables.net */ "./node_modules/datatables.net/js/jquery.dataTables.js");
/* harmony import */ var datatables_net__WEBPACK_IMPORTED_MODULE_19___default = /*#__PURE__*/__webpack_require__.n(datatables_net__WEBPACK_IMPORTED_MODULE_19__);
/* harmony import */ var datatables_net_bs4__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__(/*! datatables.net-bs4 */ "./node_modules/datatables.net-bs4/js/dataTables.bootstrap4.js");
/* harmony import */ var datatables_net_bs4__WEBPACK_IMPORTED_MODULE_20___default = /*#__PURE__*/__webpack_require__.n(datatables_net_bs4__WEBPACK_IMPORTED_MODULE_20__);





















var MyTimesheetComponent = /** @class */ (function () {
    function MyTimesheetComponent(translate, ngxRolesService, formBuilder, modalService, http, exportAsService, toastr, timesheetService, projectService, clientService, authenticationService) {
        var _this = this;
        this.translate = translate;
        this.ngxRolesService = ngxRolesService;
        this.formBuilder = formBuilder;
        this.modalService = modalService;
        this.http = http;
        this.exportAsService = exportAsService;
        this.toastr = toastr;
        this.timesheetService = timesheetService;
        this.projectService = projectService;
        this.clientService = clientService;
        this.authenticationService = authenticationService;
        this.apiUrl = _environments_environment__WEBPACK_IMPORTED_MODULE_18__["environment"].apiUrl;
        this.dtTrigger = new rxjs__WEBPACK_IMPORTED_MODULE_10__["Subject"]();
        this.dtOptions = {};
        this.timesheets = [];
        this.clients = [];
        this.isPageLoaded = false;
        this.isFormSubmitted = false;
        this.range = [
            { id: 'today', label: this.translate.instant('timesheet.range.today') },
            { id: 'this_month', label: this.translate.instant('timesheet.range.this_month') },
            { id: 'last_month', label: this.translate.instant('timesheet.range.last_month') },
            { id: 'this_week', label: this.translate.instant('timesheet.range.this_week') },
            { id: 'last_week', label: this.translate.instant('timesheet.range.last_week') },
            { id: 'period', label: this.translate.instant('timesheet.range.period') }
        ];
        this.exportAsConfig = {
            type: 'pdf',
            elementIdOrContent: 'timesheets_table',
        };
        this.datepickerConfig = {
            dateInputFormat: 'YYYY-MM-DD',
            containerClass: 'theme-red'
        };
        this.authenticationService.loginUser.subscribe(function (x) { return _this.loginUser = x; });
    }
    Object.defineProperty(MyTimesheetComponent.prototype, "filterControl", {
        get: function () {
            return this.timesheetFilterForm.controls;
        },
        enumerable: true,
        configurable: true
    });
    MyTimesheetComponent.prototype.ngOnInit = function () {
        this.getProjects();
        this.getClients();
        this.loadForms();
        this.loadTimesheetDatatable();
    };
    MyTimesheetComponent.prototype.getProjects = function () {
        var _this = this;
        this.projectService.getMyProjects().subscribe(function (data) {
            _this.projects = data;
        });
    };
    MyTimesheetComponent.prototype.getClients = function () {
        var _this = this;
        this.clientService.getClientsWithTrashed().subscribe(function (data) {
            _this.clients = data;
        });
    };
    MyTimesheetComponent.prototype.loadForms = function () {
        this.timesheetFilterForm = this.formBuilder.group({
            range: [this.range[0].id, [_angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].required]],
            period_from: [null],
            period_to: [null],
            project_ids: [null],
            client_id: [null],
        });
    };
    MyTimesheetComponent.prototype.rangeChange = function (event) {
        var fromControl = this.timesheetFilterForm.get('period_from');
        var toControl = this.timesheetFilterForm.get('period_to');
        if (event.id === 'period') {
            fromControl.setValidators([_angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].required]);
            toControl.setValidators([_angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].required]);
            $('.btn_apply').removeClass('d-none');
        }
        else {
            fromControl.clearValidators();
            toControl.clearValidators();
            $('.btn_apply').addClass('d-none');
            this.onSubmit();
        }
        fromControl.updateValueAndValidity();
        toControl.updateValueAndValidity();
    };
    MyTimesheetComponent.prototype.periodFromDateChange = function (event) {
        this.timesheetFilterForm.patchValue({ period_to: event });
    };
    MyTimesheetComponent.prototype.onSubmit = function () {
        this.isFormSubmitted = true;
        if (this.timesheetFilterForm.invalid) {
            return;
        }
        this.rerender();
    };
    MyTimesheetComponent.prototype.loadTimesheetDatatable = function () {
        var _this = this;
        var that = this;
        this.dtOptions = {
            pagingType: 'full_numbers',
            pageLength: that.loginUser.settings.tables_pagination_limit,
            serverSide: true,
            order: [0],
            processing: true,
            dom: '<"html5buttons"B>ltfrtip',
            columns: [
                {
                    'sortable': true,
                    'target': [0]
                },
                {
                    'sortable': false,
                    'target': [1]
                },
                {
                    'sortable': true,
                    'target': [2]
                },
                {
                    'sortable': true,
                    'target': [3]
                },
                {
                    'sortable': true,
                    'target': [4]
                },
                {
                    'sortable': true,
                    'target': [5]
                },
                {
                    'sortable': false,
                    'target': [6]
                }
            ],
            buttons: [
                {
                    extend: 'csv',
                    title: this.translate.instant('timesheet.title'),
                    className: 'btn btn-datatable-gredient',
                    action: function (e, dt, node, config) {
                        that.exportFiles('csv');
                    }
                }, {
                    extend: 'excel',
                    title: this.translate.instant('timesheet.title'),
                    className: 'btn btn-datatable-gredient',
                    action: function (e, dt, node, config) {
                        that.exportFiles('xlsx');
                    }
                }, {
                    extend: 'pdf',
                    title: this.translate.instant('timesheet.title'),
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
                    range: _this.timesheetFilterForm.value.range,
                    period_from: _this.timesheetFilterForm.value.period_from,
                    period_to: _this.timesheetFilterForm.value.period_to,
                    project_ids: _this.timesheetFilterForm.value.project_ids,
                    client_id: _this.timesheetFilterForm.value.client_id,
                };
                _this.http.post(_this.apiUrl + '/api/my-timesheets', dataTablesParameters, {}).subscribe(function (resp) {
                    _this.isPageLoaded = true;
                    that.timesheets = resp.data;
                    _this.totalHours = resp;
                    _this.totalHours = _this.totalHours.total;
                    callback({
                        recordsTotal: resp.recordsTotal,
                        recordsFiltered: resp.recordsFiltered,
                        data: [],
                    });
                    setTimeout(function () {
                        _this.setMessage();
                    });
                });
            }
        };
    };
    MyTimesheetComponent.prototype.ngAfterViewInit = function () {
        this.dtTrigger.next();
    };
    MyTimesheetComponent.prototype.ngOnDestroy = function () {
        this.dtTrigger.unsubscribe();
    };
    MyTimesheetComponent.prototype.rerender = function () {
        var _this = this;
        this.dtElement.dtInstance.then(function (dtInstance) {
            dtInstance.destroy();
            setTimeout(function () {
                _this.dtTrigger.next();
                _this.setMessage();
            }, 200);
        });
    };
    MyTimesheetComponent.prototype.setMessage = function () {
        if (this.timesheets.length > 0) {
            $('.tfoot_dt').addClass('d-none');
        }
        else {
            $('.tfoot_dt').removeClass('d-none');
        }
    };
    MyTimesheetComponent.prototype.exportFiles = function (type) {
        this.exportAsConfig.type = type;
        this.exportAsService.save(this.exportAsConfig, this.translate.instant('timesheet.title')).subscribe(function () {
        });
    };
    MyTimesheetComponent.prototype.openTimesheetCreateModal = function () {
        var _this = this;
        var modalConfigs = {
            animated: true,
            keyboard: true,
            backdrop: true,
            ignoreBackdropClick: false,
            class: 'inmodal modal-dialog-centered modal-md animated fadeIn',
            initialState: {
                params: {
                    module_id: 6,
                    module_related_id: null,
                    project_id: null
                }
            }
        };
        this.modalRef = this.modalService.show(_components_create_timesheet_modal_create_timesheet_modal_component__WEBPACK_IMPORTED_MODULE_16__["CreateTimesheetModalComponent"], modalConfigs);
        this.modalRef.content.event.subscribe(function (data) {
            _this.rerender();
        });
    };
    MyTimesheetComponent.prototype.openTimesheetEditModal = function (timesheet) {
        var _this = this;
        var modalConfigs = {
            animated: true,
            keyboard: true,
            backdrop: true,
            ignoreBackdropClick: false,
            class: 'inmodal modal-dialog-centered modal-md animated fadeIn',
            initialState: {
                timesheet: timesheet
            }
        };
        this.modalRef = this.modalService.show(_components_edit_timesheet_modal_edit_timesheet_modal_component__WEBPACK_IMPORTED_MODULE_17__["EditTimesheetModalComponent"], modalConfigs);
        this.modalRef.content.event.subscribe(function (data) {
            _this.rerender();
        });
    };
    MyTimesheetComponent.prototype.deleteTimesheet = function (id) {
        var _this = this;
        sweetalert2__WEBPACK_IMPORTED_MODULE_11___default.a.fire({
            title: this.translate.instant('common.swal.title'),
            text: this.translate.instant('common.swal.text') + this.translate.instant('timesheet.title').toLowerCase() + '!',
            type: 'warning',
            showCancelButton: true,
            confirmButtonText: this.translate.instant('common.swal.confirmButtonText'),
            cancelButtonText: this.translate.instant('common.swal.cancelButtonText')
        }).then(function (result) {
            if (result.value) {
                _this.timesheetService.delete(id).subscribe(function (data) {
                    _this.rerender();
                    _this.toastr.success(_this.translate.instant('timesheet.messages.delete'), _this.translate.instant('timesheet.title'));
                });
            }
        });
    };
    MyTimesheetComponent.prototype.saveTimesheetDetail = function (index, name, value) {
        var _this = this;
        this.timesheets[index][name] = value;
        this.timesheetService.update(this.timesheets[index]).subscribe(function (data) {
            _this.toastr.success(_this.translate.instant('timesheet.messages.update'), _this.translate.instant('timesheet.title'));
            _this.rerender();
        });
    };
    MyTimesheetComponent.ctorParameters = function () { return [
        { type: _ngx_translate_core__WEBPACK_IMPORTED_MODULE_8__["TranslateService"] },
        { type: ngx_permissions__WEBPACK_IMPORTED_MODULE_7__["NgxRolesService"] },
        { type: _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormBuilder"] },
        { type: ngx_bootstrap_modal__WEBPACK_IMPORTED_MODULE_4__["BsModalService"] },
        { type: _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClient"] },
        { type: ngx_export_as__WEBPACK_IMPORTED_MODULE_5__["ExportAsService"] },
        { type: ngx_toastr__WEBPACK_IMPORTED_MODULE_6__["ToastrService"] },
        { type: _core_services_timesheet_service__WEBPACK_IMPORTED_MODULE_12__["TimesheetService"] },
        { type: _core_services_project_service__WEBPACK_IMPORTED_MODULE_13__["ProjectService"] },
        { type: _core_services_client_service__WEBPACK_IMPORTED_MODULE_14__["ClientService"] },
        { type: _core_services_authentication_service__WEBPACK_IMPORTED_MODULE_15__["AuthenticationService"] }
    ]; };
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewChild"])(angular_datatables__WEBPACK_IMPORTED_MODULE_9__["DataTableDirective"], { static: true }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", angular_datatables__WEBPACK_IMPORTED_MODULE_9__["DataTableDirective"])
    ], MyTimesheetComponent.prototype, "dtElement", void 0);
    MyTimesheetComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-my-timesheet',
            template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./my-timesheet.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/modules/timesheet/pages/my-timesheet/my-timesheet.component.html")).default,
            styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./my-timesheet.component.scss */ "./src/app/modules/timesheet/pages/my-timesheet/my-timesheet.component.scss")).default]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_ngx_translate_core__WEBPACK_IMPORTED_MODULE_8__["TranslateService"],
            ngx_permissions__WEBPACK_IMPORTED_MODULE_7__["NgxRolesService"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormBuilder"],
            ngx_bootstrap_modal__WEBPACK_IMPORTED_MODULE_4__["BsModalService"],
            _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClient"],
            ngx_export_as__WEBPACK_IMPORTED_MODULE_5__["ExportAsService"],
            ngx_toastr__WEBPACK_IMPORTED_MODULE_6__["ToastrService"],
            _core_services_timesheet_service__WEBPACK_IMPORTED_MODULE_12__["TimesheetService"],
            _core_services_project_service__WEBPACK_IMPORTED_MODULE_13__["ProjectService"],
            _core_services_client_service__WEBPACK_IMPORTED_MODULE_14__["ClientService"],
            _core_services_authentication_service__WEBPACK_IMPORTED_MODULE_15__["AuthenticationService"]])
    ], MyTimesheetComponent);
    return MyTimesheetComponent;
}());



/***/ }),

/***/ "./src/app/modules/timesheet/pages/timesheet/timesheet.component.scss":
/*!****************************************************************************!*\
  !*** ./src/app/modules/timesheet/pages/timesheet/timesheet.component.scss ***!
  \****************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = (".hide_empty_message ::ng-deep .odd {\n  display: none;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvbW9kdWxlcy90aW1lc2hlZXQvcGFnZXMvdGltZXNoZWV0L0M6XFxVc2Vyc1xcdGh1YW5cXE9uZURyaXZlXFxEZXNrdG9wXFxnbGF2YWwtdGh1YW5kaW5oL3NyY1xcYXBwXFxtb2R1bGVzXFx0aW1lc2hlZXRcXHBhZ2VzXFx0aW1lc2hlZXRcXHRpbWVzaGVldC5jb21wb25lbnQuc2NzcyIsInNyYy9hcHAvbW9kdWxlcy90aW1lc2hlZXQvcGFnZXMvdGltZXNoZWV0L3RpbWVzaGVldC5jb21wb25lbnQuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNJLGFBQUE7QUNDSiIsImZpbGUiOiJzcmMvYXBwL21vZHVsZXMvdGltZXNoZWV0L3BhZ2VzL3RpbWVzaGVldC90aW1lc2hlZXQuY29tcG9uZW50LnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyIuaGlkZV9lbXB0eV9tZXNzYWdlIDo6bmctZGVlcCAub2RkIHtcclxuICAgIGRpc3BsYXk6IG5vbmVcclxufSIsIi5oaWRlX2VtcHR5X21lc3NhZ2UgOjpuZy1kZWVwIC5vZGQge1xuICBkaXNwbGF5OiBub25lO1xufSJdfQ== */");

/***/ }),

/***/ "./src/app/modules/timesheet/pages/timesheet/timesheet.component.ts":
/*!**************************************************************************!*\
  !*** ./src/app/modules/timesheet/pages/timesheet/timesheet.component.ts ***!
  \**************************************************************************/
/*! exports provided: TimesheetComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TimesheetComponent", function() { return TimesheetComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var ngx_export_as__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ngx-export-as */ "./node_modules/ngx-export-as/fesm2015/ngx-export-as.js");
/* harmony import */ var ngx_toastr__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ngx-toastr */ "./node_modules/ngx-toastr/fesm5/ngx-toastr.js");
/* harmony import */ var _ngx_translate_core__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @ngx-translate/core */ "./node_modules/@ngx-translate/core/fesm5/ngx-translate-core.js");
/* harmony import */ var angular_datatables__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! angular-datatables */ "./node_modules/angular-datatables/index.js");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! rxjs */ "./node_modules/rxjs/_esm5/index.js");
/* harmony import */ var _core_services_timesheet_service__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../../../../core/services/timesheet.service */ "./src/app/core/services/timesheet.service.ts");
/* harmony import */ var _core_services_project_service__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ../../../../core/services/project.service */ "./src/app/core/services/project.service.ts");
/* harmony import */ var _core_services_client_service__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ../../../../core/services/client.service */ "./src/app/core/services/client.service.ts");
/* harmony import */ var _core_services_user_service__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ../../../../core/services/user.service */ "./src/app/core/services/user.service.ts");
/* harmony import */ var _core_services_authentication_service__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ../../../../core/services/authentication.service */ "./src/app/core/services/authentication.service.ts");
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ../../../../../environments/environment */ "./src/environments/environment.ts");
/* harmony import */ var datatables_net__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! datatables.net */ "./node_modules/datatables.net/js/jquery.dataTables.js");
/* harmony import */ var datatables_net__WEBPACK_IMPORTED_MODULE_15___default = /*#__PURE__*/__webpack_require__.n(datatables_net__WEBPACK_IMPORTED_MODULE_15__);
/* harmony import */ var datatables_net_bs4__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! datatables.net-bs4 */ "./node_modules/datatables.net-bs4/js/dataTables.bootstrap4.js");
/* harmony import */ var datatables_net_bs4__WEBPACK_IMPORTED_MODULE_16___default = /*#__PURE__*/__webpack_require__.n(datatables_net_bs4__WEBPACK_IMPORTED_MODULE_16__);

















var TimesheetComponent = /** @class */ (function () {
    function TimesheetComponent(translate, formBuilder, http, exportAsService, toastr, timesheetService, projectService, clientService, userService, authenticationService) {
        var _this = this;
        this.translate = translate;
        this.formBuilder = formBuilder;
        this.http = http;
        this.exportAsService = exportAsService;
        this.toastr = toastr;
        this.timesheetService = timesheetService;
        this.projectService = projectService;
        this.clientService = clientService;
        this.userService = userService;
        this.authenticationService = authenticationService;
        this.apiUrl = _environments_environment__WEBPACK_IMPORTED_MODULE_14__["environment"].apiUrl;
        this.dtTrigger = new rxjs__WEBPACK_IMPORTED_MODULE_8__["Subject"]();
        this.dtOptions = {};
        this.timesheets = [];
        this.clients = [];
        this.users = [];
        this.isPageLoaded = false;
        this.isFormSubmitted = false;
        this.range = [
            { id: 'today', label: this.translate.instant('timesheet.range.today') },
            { id: 'this_month', label: this.translate.instant('timesheet.range.this_month') },
            { id: 'last_month', label: this.translate.instant('timesheet.range.last_month') },
            { id: 'this_week', label: this.translate.instant('timesheet.range.this_week') },
            { id: 'last_week', label: this.translate.instant('timesheet.range.last_week') },
            { id: 'period', label: this.translate.instant('timesheet.range.period') }
        ];
        this.exportAsConfig = {
            type: 'pdf',
            elementIdOrContent: 'timesheets_table',
        };
        this.datepickerConfig = {
            dateInputFormat: 'YYYY-MM-DD',
            containerClass: 'theme-red'
        };
        this.authenticationService.loginUser.subscribe(function (x) { return _this.loginUser = x; });
    }
    Object.defineProperty(TimesheetComponent.prototype, "filterControl", {
        get: function () {
            return this.timesheetFilterForm.controls;
        },
        enumerable: true,
        configurable: true
    });
    TimesheetComponent.prototype.ngOnInit = function () {
        this.getProjects();
        this.getClients();
        this.getUsers();
        this.loadForms();
        this.loadTimesheetDatatable();
    };
    TimesheetComponent.prototype.getProjects = function () {
        var _this = this;
        this.projectService.getAll().subscribe(function (data) {
            _this.projects = data;
        });
    };
    TimesheetComponent.prototype.getClients = function () {
        var _this = this;
        this.clientService.getClientsWithTrashed().subscribe(function (data) {
            _this.clients = data;
        });
    };
    TimesheetComponent.prototype.getUsers = function () {
        var _this = this;
        this.userService.getAll().subscribe(function (data) {
            _this.users = data;
        });
    };
    TimesheetComponent.prototype.loadForms = function () {
        this.timesheetFilterForm = this.formBuilder.group({
            range: [this.range[3].id, [_angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].required]],
            period_from: [null],
            period_to: [null],
            user_id: [null],
            project_ids: [null],
            client_id: [null],
        });
    };
    TimesheetComponent.prototype.rangeChange = function (event) {
        var fromControl = this.timesheetFilterForm.get('period_from');
        var toControl = this.timesheetFilterForm.get('period_to');
        if (event.id === 'period') {
            fromControl.setValidators([_angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].required]);
            toControl.setValidators([_angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].required]);
            $('.btn_apply').removeClass('d-none');
        }
        else {
            fromControl.clearValidators();
            toControl.clearValidators();
            $('.btn_apply').addClass('d-none');
            this.onSubmit();
        }
        fromControl.updateValueAndValidity();
        toControl.updateValueAndValidity();
    };
    TimesheetComponent.prototype.periodFromDateChange = function (event) {
        this.timesheetFilterForm.patchValue({ period_to: event });
    };
    TimesheetComponent.prototype.onSubmit = function () {
        this.isFormSubmitted = true;
        if (this.timesheetFilterForm.invalid) {
            return;
        }
        this.rerender();
    };
    TimesheetComponent.prototype.loadTimesheetDatatable = function () {
        var _this = this;
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
                    'target': [0]
                },
                {
                    'sortable': true,
                    'target': [1]
                },
                {
                    'sortable': false,
                    'target': [2]
                },
                {
                    'sortable': true,
                    'target': [3]
                },
                {
                    'sortable': true,
                    'target': [4]
                },
                {
                    'sortable': true,
                    'target': [5]
                },
                {
                    'sortable': true,
                    'target': [6]
                }
            ],
            buttons: [
                {
                    extend: 'csv',
                    title: this.translate.instant('timesheet.title'),
                    className: 'btn btn-datatable-gredient',
                    action: function (e, dt, node, config) {
                        that.exportFiles('csv');
                    }
                }, {
                    extend: 'excel',
                    title: this.translate.instant('timesheet.title'),
                    className: 'btn btn-datatable-gredient',
                    action: function (e, dt, node, config) {
                        that.exportFiles('xlsx');
                    }
                }, {
                    extend: 'pdf',
                    title: this.translate.instant('timesheet.title'),
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
                    range: _this.timesheetFilterForm.value.range,
                    period_from: _this.timesheetFilterForm.value.period_from,
                    period_to: _this.timesheetFilterForm.value.period_to,
                    user_id: _this.timesheetFilterForm.value.user_id,
                    project_ids: _this.timesheetFilterForm.value.project_ids,
                    client_id: _this.timesheetFilterForm.value.client_id,
                };
                _this.http.post(_this.apiUrl + '/api/timesheets-report', dataTablesParameters, {}).subscribe(function (resp) {
                    _this.isPageLoaded = true;
                    _this.timesheets = resp.data;
                    _this.totalHours = resp;
                    _this.totalHours = _this.totalHours.total;
                    callback({
                        recordsTotal: resp.recordsTotal,
                        recordsFiltered: resp.recordsFiltered,
                        data: [],
                    });
                    setTimeout(function () {
                        _this.setMessage();
                    });
                });
            }
        };
    };
    TimesheetComponent.prototype.ngAfterViewInit = function () {
        this.dtTrigger.next();
    };
    TimesheetComponent.prototype.ngOnDestroy = function () {
        this.dtTrigger.unsubscribe();
    };
    TimesheetComponent.prototype.rerender = function () {
        var _this = this;
        this.dtElement.dtInstance.then(function (dtInstance) {
            dtInstance.destroy();
            setTimeout(function () {
                _this.dtTrigger.next();
                _this.setMessage();
            }, 200);
        });
    };
    TimesheetComponent.prototype.setMessage = function () {
        if (this.timesheets.length > 0) {
            $('.tfoot_dt').addClass('d-none');
        }
        else {
            $('.tfoot_dt').removeClass('d-none');
        }
    };
    TimesheetComponent.prototype.exportFiles = function (type) {
        this.exportAsConfig.type = type;
        this.exportAsService.save(this.exportAsConfig, this.translate.instant('timesheet.title')).subscribe(function () {
        });
    };
    TimesheetComponent.ctorParameters = function () { return [
        { type: _ngx_translate_core__WEBPACK_IMPORTED_MODULE_6__["TranslateService"] },
        { type: _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormBuilder"] },
        { type: _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClient"] },
        { type: ngx_export_as__WEBPACK_IMPORTED_MODULE_4__["ExportAsService"] },
        { type: ngx_toastr__WEBPACK_IMPORTED_MODULE_5__["ToastrService"] },
        { type: _core_services_timesheet_service__WEBPACK_IMPORTED_MODULE_9__["TimesheetService"] },
        { type: _core_services_project_service__WEBPACK_IMPORTED_MODULE_10__["ProjectService"] },
        { type: _core_services_client_service__WEBPACK_IMPORTED_MODULE_11__["ClientService"] },
        { type: _core_services_user_service__WEBPACK_IMPORTED_MODULE_12__["UserService"] },
        { type: _core_services_authentication_service__WEBPACK_IMPORTED_MODULE_13__["AuthenticationService"] }
    ]; };
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewChild"])(angular_datatables__WEBPACK_IMPORTED_MODULE_7__["DataTableDirective"], { static: true }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", angular_datatables__WEBPACK_IMPORTED_MODULE_7__["DataTableDirective"])
    ], TimesheetComponent.prototype, "dtElement", void 0);
    TimesheetComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-timesheet',
            template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./timesheet.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/modules/timesheet/pages/timesheet/timesheet.component.html")).default,
            styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./timesheet.component.scss */ "./src/app/modules/timesheet/pages/timesheet/timesheet.component.scss")).default]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_ngx_translate_core__WEBPACK_IMPORTED_MODULE_6__["TranslateService"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormBuilder"],
            _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClient"],
            ngx_export_as__WEBPACK_IMPORTED_MODULE_4__["ExportAsService"],
            ngx_toastr__WEBPACK_IMPORTED_MODULE_5__["ToastrService"],
            _core_services_timesheet_service__WEBPACK_IMPORTED_MODULE_9__["TimesheetService"],
            _core_services_project_service__WEBPACK_IMPORTED_MODULE_10__["ProjectService"],
            _core_services_client_service__WEBPACK_IMPORTED_MODULE_11__["ClientService"],
            _core_services_user_service__WEBPACK_IMPORTED_MODULE_12__["UserService"],
            _core_services_authentication_service__WEBPACK_IMPORTED_MODULE_13__["AuthenticationService"]])
    ], TimesheetComponent);
    return TimesheetComponent;
}());



/***/ }),

/***/ "./src/app/modules/timesheet/timesheet-routing.module.ts":
/*!***************************************************************!*\
  !*** ./src/app/modules/timesheet/timesheet-routing.module.ts ***!
  \***************************************************************/
/*! exports provided: TimesheetRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TimesheetRoutingModule", function() { return TimesheetRoutingModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var ngx_permissions__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ngx-permissions */ "./node_modules/ngx-permissions/ngx-permissions.umd.js");
/* harmony import */ var ngx_permissions__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(ngx_permissions__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _pages_my_timesheet_my_timesheet_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./pages/my-timesheet/my-timesheet.component */ "./src/app/modules/timesheet/pages/my-timesheet/my-timesheet.component.ts");
/* harmony import */ var _pages_timesheet_timesheet_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./pages/timesheet/timesheet.component */ "./src/app/modules/timesheet/pages/timesheet/timesheet.component.ts");






var routes = [
    {
        path: '',
        children: [
            {
                path: '',
                canActivate: [ngx_permissions__WEBPACK_IMPORTED_MODULE_3__["NgxPermissionsGuard"]],
                component: _pages_my_timesheet_my_timesheet_component__WEBPACK_IMPORTED_MODULE_4__["MyTimesheetComponent"],
                data: {
                    permissions: {
                        only: ['admin', 'super_admin', 'timesheet_view']
                    }
                }
            },
            {
                path: 'all',
                canActivate: [ngx_permissions__WEBPACK_IMPORTED_MODULE_3__["NgxPermissionsGuard"]],
                component: _pages_timesheet_timesheet_component__WEBPACK_IMPORTED_MODULE_5__["TimesheetComponent"],
                data: {
                    permissions: {
                        only: ['admin', 'super_admin', 'reports_view']
                    }
                }
            }
        ]
    }
];
var TimesheetRoutingModule = /** @class */ (function () {
    function TimesheetRoutingModule() {
    }
    TimesheetRoutingModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)],
            exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]]
        })
    ], TimesheetRoutingModule);
    return TimesheetRoutingModule;
}());



/***/ }),

/***/ "./src/app/modules/timesheet/timesheet.module.ts":
/*!*******************************************************!*\
  !*** ./src/app/modules/timesheet/timesheet.module.ts ***!
  \*******************************************************/
/*! exports provided: TimesheetModule, HttpLoaderFactory */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TimesheetModule", function() { return TimesheetModule; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "HttpLoaderFactory", function() { return HttpLoaderFactory; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var ng_pick_datetime__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ng-pick-datetime */ "./node_modules/ng-pick-datetime/picker.js");
/* harmony import */ var ngx_bootstrap__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ngx-bootstrap */ "./node_modules/ngx-bootstrap/esm5/ngx-bootstrap.js");
/* harmony import */ var ngx_permissions__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ngx-permissions */ "./node_modules/ngx-permissions/ngx-permissions.umd.js");
/* harmony import */ var ngx_permissions__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(ngx_permissions__WEBPACK_IMPORTED_MODULE_7__);
/* harmony import */ var _ngx_translate_core__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @ngx-translate/core */ "./node_modules/@ngx-translate/core/fesm5/ngx-translate-core.js");
/* harmony import */ var _ngx_translate_http_loader__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @ngx-translate/http-loader */ "./node_modules/@ngx-translate/http-loader/fesm5/ngx-translate-http-loader.js");
/* harmony import */ var angular_datatables__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! angular-datatables */ "./node_modules/angular-datatables/index.js");
/* harmony import */ var ngx_export_as__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ngx-export-as */ "./node_modules/ngx-export-as/fesm2015/ngx-export-as.js");
/* harmony import */ var _ng_select_ng_select__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! @ng-select/ng-select */ "./node_modules/@ng-select/ng-select/fesm5/ng-select.js");
/* harmony import */ var _shared_shared_module__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ../../shared/shared.module */ "./src/app/shared/shared.module.ts");
/* harmony import */ var _timesheet_routing_module__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ./timesheet-routing.module */ "./src/app/modules/timesheet/timesheet-routing.module.ts");
/* harmony import */ var _pages_timesheet_timesheet_component__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! ./pages/timesheet/timesheet.component */ "./src/app/modules/timesheet/pages/timesheet/timesheet.component.ts");
/* harmony import */ var _components_timesheet_list_timesheet_list_component__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! ./components/timesheet-list/timesheet-list.component */ "./src/app/modules/timesheet/components/timesheet-list/timesheet-list.component.ts");
/* harmony import */ var _components_create_timesheet_modal_create_timesheet_modal_component__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! ./components/create-timesheet-modal/create-timesheet-modal.component */ "./src/app/modules/timesheet/components/create-timesheet-modal/create-timesheet-modal.component.ts");
/* harmony import */ var _components_edit_timesheet_modal_edit_timesheet_modal_component__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! ./components/edit-timesheet-modal/edit-timesheet-modal.component */ "./src/app/modules/timesheet/components/edit-timesheet-modal/edit-timesheet-modal.component.ts");
/* harmony import */ var _pages_my_timesheet_my_timesheet_component__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(/*! ./pages/my-timesheet/my-timesheet.component */ "./src/app/modules/timesheet/pages/my-timesheet/my-timesheet.component.ts");




















var TimesheetModule = /** @class */ (function () {
    function TimesheetModule() {
    }
    TimesheetModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            declarations: [
                _pages_timesheet_timesheet_component__WEBPACK_IMPORTED_MODULE_15__["TimesheetComponent"],
                _components_timesheet_list_timesheet_list_component__WEBPACK_IMPORTED_MODULE_16__["TimesheetListComponent"],
                _components_create_timesheet_modal_create_timesheet_modal_component__WEBPACK_IMPORTED_MODULE_17__["CreateTimesheetModalComponent"],
                _components_edit_timesheet_modal_edit_timesheet_modal_component__WEBPACK_IMPORTED_MODULE_18__["EditTimesheetModalComponent"],
                _pages_my_timesheet_my_timesheet_component__WEBPACK_IMPORTED_MODULE_19__["MyTimesheetComponent"]
            ],
            imports: [
                _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_4__["FormsModule"],
                ngx_bootstrap__WEBPACK_IMPORTED_MODULE_6__["BsDropdownModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_4__["ReactiveFormsModule"],
                ng_pick_datetime__WEBPACK_IMPORTED_MODULE_5__["OwlDateTimeModule"],
                ng_pick_datetime__WEBPACK_IMPORTED_MODULE_5__["OwlNativeDateTimeModule"],
                ngx_permissions__WEBPACK_IMPORTED_MODULE_7__["NgxPermissionsModule"],
                _timesheet_routing_module__WEBPACK_IMPORTED_MODULE_14__["TimesheetRoutingModule"],
                angular_datatables__WEBPACK_IMPORTED_MODULE_10__["DataTablesModule"],
                ngx_export_as__WEBPACK_IMPORTED_MODULE_11__["ExportAsModule"],
                _ng_select_ng_select__WEBPACK_IMPORTED_MODULE_12__["NgSelectModule"],
                ngx_bootstrap__WEBPACK_IMPORTED_MODULE_6__["ModalModule"].forRoot(),
                ngx_bootstrap__WEBPACK_IMPORTED_MODULE_6__["TooltipModule"].forRoot(),
                ngx_bootstrap__WEBPACK_IMPORTED_MODULE_6__["BsDatepickerModule"].forRoot(),
                _ngx_translate_core__WEBPACK_IMPORTED_MODULE_8__["TranslateModule"].forChild({
                    loader: {
                        provide: _ngx_translate_core__WEBPACK_IMPORTED_MODULE_8__["TranslateLoader"],
                        useFactory: (HttpLoaderFactory),
                        deps: [_angular_common_http__WEBPACK_IMPORTED_MODULE_3__["HttpClient"]]
                    }
                }),
                _shared_shared_module__WEBPACK_IMPORTED_MODULE_13__["SharedModule"]
            ],
            exports: [
                _components_timesheet_list_timesheet_list_component__WEBPACK_IMPORTED_MODULE_16__["TimesheetListComponent"]
            ],
            entryComponents: [
                _components_create_timesheet_modal_create_timesheet_modal_component__WEBPACK_IMPORTED_MODULE_17__["CreateTimesheetModalComponent"],
                _components_edit_timesheet_modal_edit_timesheet_modal_component__WEBPACK_IMPORTED_MODULE_18__["EditTimesheetModalComponent"]
            ]
        })
    ], TimesheetModule);
    return TimesheetModule;
}());

// Required for AOT compilation
function HttpLoaderFactory(http) {
    return new _ngx_translate_http_loader__WEBPACK_IMPORTED_MODULE_9__["TranslateHttpLoader"](http, './assets/i18n/', '.json');
}


/***/ })

}]);
//# sourceMappingURL=default~modules-admin-meeting-meeting-module~modules-pm-defects-defects-module~modules-pm-incidents-~8e5a1dec.js.map