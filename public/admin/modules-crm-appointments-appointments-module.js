(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["modules-crm-appointments-appointments-module"],{

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/modules/crm/appointments/components/create-appointment/create-appointment.component.html":
/*!************************************************************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/modules/crm/appointments/components/create-appointment/create-appointment.component.html ***!
  \************************************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<div class=\"modal-header\">\r\n    <h2 class=\"modal-title font-weight-normal\">\r\n        <i aria-hidden=\"true\" class=\"fa fa-calendar-plus-o\"></i>&nbsp;{{'appointments.title' | translate}}</h2>\r\n    <button (click)=\"bsCreateModalRef.hide()\" aria-label=\"Close\" class=\"close\" data-dismiss=\"modal\" type=\"button\">\r\n        <span aria-hidden=\"true\">&times;</span></button>\r\n</div>\r\n<form (ngSubmit)=\"onSubmit()\" *ngIf=\"isPageLoad\" [formGroup]=\"createAppointmentForm\" class=\"form\">\r\n    <div class=\"modal-body\">\r\n        <div class=\"form-body\">\r\n            <div class=\"row\">\r\n                <div class=\"col-md-12\">\r\n                    <div [ngClass]=\"{ 'is-invalid': isFormSubmitted && appointmentControl.provider_id.errors }\" class=\"form-group\">\r\n                        <label for=\"provider_id\">{{'appointments.create.fields.provider' | translate}}\r\n                            <span class=\"text-danger\">&nbsp;*</span></label>\r\n                        <ng-select [items]=\"providers\" [multiple]=\"false\" [searchable]=\"true\" [selectOnTab]=\"true\" bindLabel=\"firstname\" bindValue=\"id\" formControlName=\"provider_id\" labelForId=\"provider_id\" placeholder=\"{{'common.unassigned' | translate}}\">\r\n                            <ng-template let-item=\"item\" ng-option-tmp>{{item.firstname}} {{item.lastname}}</ng-template>\r\n                        </ng-select>\r\n                        <div *ngIf=\"isFormSubmitted && appointmentControl.provider_id.errors\" class=\"invalid-feedback\">\r\n                            <div *ngIf=\"appointmentControl.provider_id.errors.required\">{{'appointments.create.error_messages.message1' | translate}}</div>\r\n                        </div>\r\n                    </div>\r\n                </div>\r\n            </div>\r\n            <div class=\"row\">\r\n                <div class=\"col-md-6\">\r\n                    <div [ngClass]=\"{ 'is-invalid': isFormSubmitted && appointmentControl.start_date_time.errors }\" class=\"form-group\">\r\n                        <label for=\"start_date_time\">{{'appointments.create.fields.start_date' | translate}}\r\n                            <span class=\"text-danger\">&nbsp;*</span></label>\r\n                        <div class=\"position-relative has-icon-left\">\r\n                            <owl-date-time #startDT></owl-date-time>\r\n                            <input (dateTimeChange)=\"startDateChange($event)\" [min]=\"minDate\" [owlDateTimeTrigger]=\"startDT\" [owlDateTime]=\"startDT\" aria-describedby=\"inputGroupPrepend2\" class=\"form-control\" formControlName=\"start_date_time\" id=\"start_date_time\" placeholder=\"{{'appointments.create.placeholders.placeholder1' | translate}}\" type=\"text\"/>\r\n                            <div class=\"form-control-position\"><i class=\"ft-calendar\"></i></div>\r\n                        </div>\r\n                        <div *ngIf=\"isFormSubmitted && appointmentControl.start_date_time.errors\" class=\"invalid-feedback\">\r\n                            <div *ngIf=\"appointmentControl.start_date_time.errors\">{{'appointments.create.error_messages.message2' | translate}}</div>\r\n                        </div>\r\n                        <span *ngIf=\"availabileSlots && availabileSlots.length > 0\" class=\"badge badge-secondary\">{{'appointments.budges.title1' | translate}}:\r\n\t\t\t\t\t\t\t<ng-container *ngFor=\"let slots of availabileSlots; let last = last\">\r\n\t\t\t\t\t\t\t\t{{slots.start_date_time | dateTimeFormatFilter: 'HH:mm'}} to {{slots.end_date_time | dateTimeFormatFilter: 'HH:mm'}}\r\n                                <ng-container *ngIf=\"!last\"><br></ng-container>\r\n\t\t\t\t\t\t\t</ng-container>\r\n\t\t\t\t\t\t</span>\r\n                    </div>\r\n                </div>\r\n                <div class=\"col-md-6\">\r\n                    <div [ngClass]=\"{ 'is-invalid': isFormSubmitted && appointmentControl.end_date_time.errors }\" class=\"form-group\">\r\n                        <label for=\"end_date_time\">{{'appointments.create.fields.end_date' | translate}}\r\n                            <span class=\"text-danger\">&nbsp;*</span></label>\r\n                        <div class=\"position-relative has-icon-left\">\r\n                            <owl-date-time #endDT></owl-date-time>\r\n                            <input [min]=\"createAppointmentForm.get('start_date_time').value\" [owlDateTimeTrigger]=\"endDT\" [owlDateTime]=\"endDT\" aria-describedby=\"inputGroupPrepend3\" class=\"form-control\" formControlName=\"end_date_time\" id=\"end_date_time\" placeholder=\"{{'appointments.create.placeholders.placeholder2' | translate}}\" type=\"text\"/>\r\n                            <div class=\"form-control-position\"><i class=\"ft-calendar\"></i></div>\r\n                        </div>\r\n                        <div *ngIf=\"isFormSubmitted && appointmentControl.end_date_time.errors\" class=\"invalid-feedback\">\r\n                            <div *ngIf=\"appointmentControl.end_date_time.errors\">{{'appointments.create.error_messages.message3' | translate}}</div>\r\n                        </div>\r\n                    </div>\r\n                </div>\r\n            </div>\r\n            <div class=\"row\">\r\n                <div class=\"col-md-12\">\r\n                    <div class=\"form-group\">\r\n                        <label for=\"title\">{{'appointments.create.fields.title' | translate}}\r\n                            <span class=\"text-danger\">&nbsp;*</span></label>\r\n                        <div class=\"position-relative has-icon-left\">\r\n                            <input [ngClass]=\"{ 'is-invalid': isFormSubmitted && appointmentControl.title.errors }\" class=\"form-control\" formControlName=\"title\" id=\"title\" placeholder=\"{{'appointments.create.placeholders.placeholder3' | translate}}\" type=\"text\"/>\r\n                            <div class=\"form-control-position\">\r\n                                <i aria-hidden=\"true\" class=\"fa fa-lock\"></i>\r\n                            </div>\r\n                            <div *ngIf=\"isFormSubmitted && appointmentControl.title.errors\" class=\"invalid-feedback\">\r\n                                <div *ngIf=\"appointmentControl.title.errors.required\">{{'appointments.create.error_messages.message4' | translate}}</div>\r\n                                <div *ngIf=\"appointmentControl.title.errors.maxlength\">{{'appointments.create.error_messages.message5' | translate}}</div>\r\n                            </div>\r\n                        </div>\r\n                    </div>\r\n                </div>\r\n                <div class=\"col-md-12\">\r\n                    <div class=\"form-group\">\r\n                        <label for=\"client_id\">{{'appointments.create.fields.client' | translate}}</label>\r\n                        <ng-select [items]=\"clients\" [searchable]=\"true\" [selectOnTab]=\"true\" bindLabel=\"firstname\" bindValue=\"id\" formControlName=\"client_id\" labelForId=\"client_id\" placeholder=\"{{'appointments.create.placeholders.placeholder4' | translate}}\">\r\n                            <ng-template let-item=\"item\" ng-option-tmp>{{item.firstname}} {{item.lastname}}</ng-template>\r\n                        </ng-select>\r\n                    </div>\r\n                </div>\r\n                <div class=\"col-md-6\">\r\n                    <div class=\"form-group\">\r\n                        <label for=\"location\">{{'appointments.create.fields.location' | translate}}</label>\r\n                        <input class=\"form-control\" formControlName=\"location\" id=\"location\" placeholder=\"{{'appointments.create.placeholders.placeholder5' | translate}}\" type=\"text\"/>\r\n                    </div>\r\n                </div>\r\n                <div class=\"col-md-6\">\r\n                    <div class=\"form-group\">\r\n                        <label for=\"location\">{{'appointments.create.fields.attendees' | translate}}\r\n                            <span class=\"text-danger\">&nbsp;*</span></label>\r\n                        <input [ngClass]=\"{ 'is-invalid': isFormSubmitted && appointmentControl.attendees.errors }\" class=\"form-control\" formControlName=\"attendees\" id=\"attendees\" placeholder=\"{{'appointments.create.placeholders.placeholder6' | translate}}\" type=\"text\"/>\r\n                        <div *ngIf=\"isFormSubmitted && appointmentControl.attendees.errors\" class=\"invalid-feedback\">\r\n                            <div *ngIf=\"appointmentControl.attendees.errors.required\">{{'appointments.create.error_messages.message7' | translate}}</div>\r\n                        </div>\r\n                    </div>\r\n                </div>\r\n                <div class=\"col-md-12\">\r\n                    <div class=\"form-group\">\r\n                        <label for=\"note\">{{'appointments.create.fields.notes' | translate}}</label>\r\n                        <app-ngx-editor [placeholder]=\"''\" [spellcheck]=\"true\" formControlName=\"note\" height=\"100px\" id=\"note\" minHeight=\"50px\"></app-ngx-editor>\r\n                    </div>\r\n                </div>\r\n            </div>\r\n        </div>\r\n    </div>\r\n    <div class=\"modal-footer\">\r\n        <button (click)=\"onCancel()\" class=\"btn btn-cancel mb-0\" type=\"button\">{{'common.close' | translate}}</button>\r\n        <button class=\"btn btn-submit mb-0\" type=\"submit\">{{'common.create' | translate}}</button>\r\n    </div>\r\n</form>\r\n");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/modules/crm/appointments/components/edit-appointment/edit-appointment.component.html":
/*!********************************************************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/modules/crm/appointments/components/edit-appointment/edit-appointment.component.html ***!
  \********************************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<div class=\"modal-header\">\r\n    <h2 class=\"modal-title font-weight-normal\">\r\n        <i aria-hidden=\"true\" class=\"fa fa-calendar-plus-o\"></i>&nbsp;{{'appointments.title' | translate}}</h2>\r\n    <button (click)=\"bsEditModalRef.hide()\" aria-label=\"Close\" class=\"close\" data-dismiss=\"modal\" type=\"button\">\r\n        <span aria-hidden=\"true\">&times;</span></button>\r\n</div>\r\n<form (ngSubmit)=\"onSubmit()\" *ngIf=\"isPageLoad\" [formGroup]=\"editAppointmentForm\" class=\"form\">\r\n    <div class=\"modal-body\">\r\n        <div class=\"form-body\">\r\n            <div class=\"row\">\r\n                <div class=\"col-md-12\">\r\n                    <div [ngClass]=\"{ 'is-invalid': isFormSubmitted && appointmentControl.provider_id.errors }\" class=\"form-group\">\r\n                        <label for=\"provider_id\">{{'appointments.create.fields.provider' | translate}}\r\n                            <span class=\"text-danger\">&nbsp;*</span></label>\r\n                        <ng-select (change)=\"changeProvider($event)\" [items]=\"providers\" [multiple]=\"false\" [searchable]=\"true\" [selectOnTab]=\"true\" bindLabel=\"firstname\" bindValue=\"id\" formControlName=\"provider_id\" labelForId=\"provider_id\" placeholder=\"{{'common.unassigned' | translate}}\">\r\n                            <ng-template let-item=\"item\" ng-option-tmp>{{item.firstname}} {{item.lastname}}</ng-template>\r\n                        </ng-select>\r\n                        <div *ngIf=\"isFormSubmitted && appointmentControl.provider_id.errors\" class=\"invalid-feedback\">\r\n                            <div *ngIf=\"appointmentControl.provider_id.errors.required\">{{'appointments.create.error_messages.message1' | translate}}</div>\r\n                        </div>\r\n                    </div>\r\n                </div>\r\n            </div>\r\n            <div class=\"row\">\r\n                <div class=\"col-md-6\">\r\n                    <div [ngClass]=\"{ 'is-invalid': isFormSubmitted && appointmentControl.start_date_time.errors }\" class=\"form-group\">\r\n                        <label for=\"start_date_time\">{{'appointments.create.fields.start_date' | translate}}\r\n                            <span class=\"text-danger\">&nbsp;*</span></label>\r\n                        <div class=\"position-relative has-icon-left\">\r\n                            <owl-date-time #startDT></owl-date-time>\r\n                            <input (dateTimeChange)=\"startDateChange($event)\" [min]=\"minDate\" [owlDateTimeTrigger]=\"startDT\" [owlDateTime]=\"startDT\" aria-describedby=\"inputGroupPrepend2\" class=\"form-control\" formControlName=\"start_date_time\" id=\"start_date_time\" placeholder=\"{{'appointments.create.placeholders.placeholder1' | translate}}\" type=\"text\"/>\r\n                            <div class=\"form-control-position\"><i class=\"ft-calendar\"></i></div>\r\n                        </div>\r\n                        <div *ngIf=\"isFormSubmitted && appointmentControl.start_date_time.errors\" class=\"invalid-feedback\">\r\n                            <div *ngIf=\"appointmentControl.start_date_time.errors\">{{'appointments.create.error_messages.message2' | translate}}</div>\r\n                        </div>\r\n                        <span *ngIf=\"availabileSlots && availabileSlots.length > 0\" class=\"badge badge-secondary\">{{'appointments.budges.title1' | translate}}:\r\n\t\t\t\t\t\t\t<ng-container *ngFor=\"let slots of availabileSlots; let last = last\">\r\n\t\t\t\t\t\t\t\t{{slots.start_date_time | dateTimeFormatFilter: 'HH:mm'}} to {{slots.end_date_time | dateTimeFormatFilter: 'HH:mm'}}\r\n                                <ng-container *ngIf=\"!last\"><br></ng-container>\r\n\t\t\t\t\t\t\t</ng-container>\r\n\t\t\t\t\t\t</span>\r\n                    </div>\r\n                </div>\r\n                <div class=\"col-md-6\">\r\n                    <div [ngClass]=\"{ 'is-invalid': isFormSubmitted && appointmentControl.end_date_time.errors }\" class=\"form-group\">\r\n                        <label for=\"end_date_time\">{{'appointments.create.fields.end_date' | translate}}\r\n                            <span class=\"text-danger\">&nbsp;*</span></label>\r\n                        <div class=\"position-relative has-icon-left\">\r\n                            <owl-date-time #endDT></owl-date-time>\r\n                            <input [min]=\"editAppointmentForm.get('start_date_time').value\" [owlDateTimeTrigger]=\"endDT\" [owlDateTime]=\"endDT\" aria-describedby=\"inputGroupPrepend3\" class=\"form-control\" formControlName=\"end_date_time\" id=\"end_date_time\" placeholder=\"{{'appointments.create.placeholders.placeholder2' | translate}}\" type=\"text\"/>\r\n                            <div class=\"form-control-position\"><i class=\"ft-calendar\"></i></div>\r\n                        </div>\r\n                        <div *ngIf=\"isFormSubmitted && appointmentControl.end_date_time.errors\" class=\"invalid-feedback\">\r\n                            <div *ngIf=\"appointmentControl.end_date_time.errors\">{{'appointments.create.error_messages.message3' | translate}}</div>\r\n                        </div>\r\n                    </div>\r\n                </div>\r\n            </div>\r\n            <div class=\"row\">\r\n                <div class=\"col-md-12\">\r\n                    <div class=\"form-group\">\r\n                        <label for=\"title\">{{'appointments.create.fields.title' | translate}}\r\n                            <span class=\"text-danger\">&nbsp;*</span></label>\r\n                        <div class=\"position-relative has-icon-left\">\r\n                            <input [ngClass]=\"{ 'is-invalid': isFormSubmitted && appointmentControl.title.errors }\" class=\"form-control\" formControlName=\"title\" id=\"title\" placeholder=\"{{'appointments.create.placeholders.placeholder3' | translate}}\" type=\"text\"/>\r\n                            <div class=\"form-control-position\">\r\n                                <i aria-hidden=\"true\" class=\"fa fa-lock\"></i>\r\n                            </div>\r\n                            <div *ngIf=\"isFormSubmitted && appointmentControl.title.errors\" class=\"invalid-feedback\">\r\n                                <div *ngIf=\"appointmentControl.title.errors.required\">{{'appointments.create.error_messages.message4' | translate}}</div>\r\n                                <div *ngIf=\"appointmentControl.title.errors.maxlength\">{{'appointments.create.error_messages.message5' | translate}}</div>\r\n                            </div>\r\n                        </div>\r\n                    </div>\r\n                </div>\r\n                <div class=\"col-md-6\">\r\n                    <div class=\"form-group\">\r\n                        <label for=\"client_id\">{{'appointments.create.fields.client' | translate}}</label>\r\n                        <ng-select [items]=\"clients\" [searchable]=\"true\" [selectOnTab]=\"true\" bindLabel=\"firstname\" bindValue=\"id\" formControlName=\"client_id\" labelForId=\"client_id\" placeholder=\"{{'appointments.create.placeholders.placeholder4' | translate}}\">\r\n                            <ng-template let-item=\"item\" ng-option-tmp>{{item.firstname}} {{item.lastname}}</ng-template>\r\n                        </ng-select>\r\n                    </div>\r\n                </div>\r\n                <div class=\"col-md-6\">\r\n                    <div [ngClass]=\"{ 'is-invalid': isFormSubmitted && appointmentControl.status.errors }\" class=\"form-group\">\r\n                        <label for=\"status\">{{'appointments.create.fields.status' | translate}}&nbsp;<span class=\"text-danger\">*</span></label>\r\n                        <ng-select [items]=\"('appointments.status' | translate)\" [searchable]=\"true\" [selectOnTab]=\"true\" bindLabel=\"label\" bindValue=\"id\" formControlName=\"status\" labelForId=\"status\" placeholder=\"{{'appointments.create.placeholders.placeholder7' | translate}}\"></ng-select>\r\n                        <div *ngIf=\"isFormSubmitted && appointmentControl.status.errors\" class=\"invalid-feedback\">\r\n                            <div *ngIf=\"appointmentControl.status.errors.required\">{{'appointments.create.error_messages.message8' | translate}}</div>\r\n                        </div>\r\n                    </div>\r\n                </div>\r\n                <div class=\"col-md-6\">\r\n                    <div class=\"form-group\">\r\n                        <label for=\"location\">{{'appointments.create.fields.location' | translate}}</label>\r\n                        <input class=\"form-control\" formControlName=\"location\" id=\"location\" placeholder=\"{{'appointments.create.placeholders.placeholder5' | translate}}\" type=\"text\"/>\r\n                    </div>\r\n                </div>\r\n                <div class=\"col-md-6\">\r\n                    <div class=\"form-group\">\r\n                        <label for=\"location\">{{'appointments.create.fields.attendees' | translate}}\r\n                            <span class=\"text-danger\">&nbsp;*</span></label>\r\n                        <input [ngClass]=\"{ 'is-invalid': isFormSubmitted && appointmentControl.attendees.errors }\" class=\"form-control\" formControlName=\"attendees\" id=\"attendees\" placeholder=\"{{'appointments.create.placeholders.placeholder6' | translate}}\" type=\"text\"/>\r\n                        <div *ngIf=\"isFormSubmitted && appointmentControl.attendees.errors\" class=\"invalid-feedback\">\r\n                            <div *ngIf=\"appointmentControl.attendees.errors.required\">{{'appointments.create.error_messages.message7' | translate}}</div>\r\n                        </div>\r\n                    </div>\r\n                </div>\r\n                <div class=\"col-md-12\">\r\n                    <div class=\"form-group\">\r\n                        <label for=\"note\">{{'appointments.create.fields.notes' | translate}}</label>\r\n                        <app-ngx-editor [placeholder]=\"''\" [spellcheck]=\"true\" formControlName=\"note\" height=\"100px\" id=\"note\" minHeight=\"50px\"></app-ngx-editor>\r\n                    </div>\r\n                </div>\r\n            </div>\r\n        </div>\r\n    </div>\r\n    <div class=\"modal-footer\">\r\n        <button (click)=\"onCancel()\" class=\"btn btn-cancel mb-0\" type=\"button\">{{'common.close' | translate}}</button>\r\n        <button class=\"btn btn-submit mb-0\" type=\"submit\">{{'common.update' | translate}}</button>\r\n    </div>\r\n</form>\r\n");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/modules/crm/appointments/pages/appointments-detail/appointments-detail.component.html":
/*!*********************************************************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/modules/crm/appointments/pages/appointments-detail/appointments-detail.component.html ***!
  \*********************************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<section class=\"detail-page\">\r\n    <div *ngIf=\"isPageLoaded\" class=\"card\">\r\n        <div class=\"card-content\">\r\n            <div class=\" border-bottom\">\r\n                <div class=\"d-flex justify-content-between\">\r\n                    <div class=\" task-name d-lg-flex\">\r\n                        <h4 class=\"task-id\"><span>#{{appointment.generated_id}}</span></h4>\r\n                        <p class=\"task-title ml-lg-2\">\r\n                            {{appointment.title}}\r\n                        </p>\r\n                    </div>\r\n                    <div class=\"task-action mr-3\">\r\n                        <div class=\"status-dropdown\">\r\n                            <div *ngxPermissionsOnly=\"['admin', 'super_admin', 'appointment_edit']; else elseBlock1; then thenBlock1\"></div>\r\n                            <ng-template #thenBlock1>\r\n                                <div class=\"btn-group\" dropdown>\r\n                                    <button aria-controls=\"dropdown-basic\" class=\"btn dropdown-toggle select-btn-lg\" dropdownToggle id=\"button-basic\" type=\"button\">{{getTranslateStatus(appointment.status) | translate}}&nbsp;<span class=\"caret\"></span>\r\n                                    </button>\r\n                                    <ul *dropdownMenu aria-labelledby=\"button-basic\" class=\"dropdown-menu animated fadeIn\" id=\"dropdown-basic\" role=\"menu\">\r\n                                        <li *ngFor=\"let status of ('appointments.status' | translate)\" role=\"menuitem\">\r\n                                            <a (click)=\"changeAppointmentStatus([appointment.id], status);appointment.status = status.id\" [ngClass]=\"{'active': appointment.status == status.id}\" class=\"dropdown-item btn btn-sm {{status.class}}\">{{status.label}}</a>\r\n                                        </li>\r\n                                    </ul>\r\n                                </div>\r\n                            </ng-template>\r\n                            <ng-template #elseBlock1>\r\n                                <ng-container *ngFor=\"let status of ('appointments.status' | translate)\">\r\n                                    <div class=\"budges-status\">\r\n                                        <span *ngIf=\"status.id == appointment.status\" class=\"{{status.class}}\">{{status.label}}</span>\r\n                                    </div>\r\n                                </ng-container>\r\n                            </ng-template>\r\n                        </div>\r\n                    </div>\r\n                </div>\r\n            </div>\r\n            <div class=\"card-body\">\r\n                <form class=\"form-body overflow-hidden mt-3\">\r\n                    <!-- Detail fields -->\r\n                    <div class=\"col-lg-12 \">\r\n                        <div class=\"row\">\r\n                            <div class=\"col-lg-4 col-md-6 mb-3\">\r\n                                <label>{{'appointments.columns.requester' | translate }}</label>\r\n                                <div class=\"people-lists\">\r\n                                    <a [routerLink]=\"['/users/profile', appointment.user_id]\" class=\"btn btn-profile-info rounded-circle text-dark\" placement=\"top\" tooltip=\"{{appointment.requesters.firstname}} {{appointment.requesters.lastname}}\">\r\n                                        <img *ngIf=\"appointment.requesters.avatar\" alt=\"Profile\" class=\"img-sm rounded-circle\" src=\"{{apiUrl}}/uploads/profile/{{appointment.requesters.avatar}}\"/>\r\n                                        <img *ngIf=\"!appointment.requesters.avatar\" alt=\"Profile\" class=\"img-sm rounded-circle\" src=\"../assets/img/profile_small.jpg\"/>\r\n                                    </a>\r\n                                </div>\r\n                            </div>\r\n                            <div class=\"col-lg-4 col-md-6 mb-3\">\r\n                                <label>{{'appointments.create.fields.provider' | translate }}</label>\r\n                                <div class=\"detail-inline\">\r\n                                    {{appointment.providers.firstname}} {{appointment.providers.lastname}}\r\n                                </div>\r\n                            </div>\r\n                            <div class=\"col-lg-4 col-md-6 mb-3\">\r\n                                <label>{{'appointments.create.fields.client' | translate }}</label>\r\n                                <div class=\"detail-inline\">\r\n                                    <ng-container *ngIf=\"appointment.client_id; else elseBlock4\">\r\n                                        {{appointment.clients.firstname}} {{appointment.clients.lastname}}\r\n                                    </ng-container>\r\n                                    <ng-template #elseBlock4>-</ng-template>\r\n                                </div>\r\n                            </div>\r\n                            <div class=\"col-lg-4 col-md-6 mb-3\">\r\n                                <label>{{'appointments.create.fields.attendees' | translate }}</label>\r\n                                <div class=\"detail-inline\">\r\n                                    {{appointment.attendees}}\r\n                                </div>\r\n                            </div>\r\n                            <div class=\"col-lg-4 col-md-6 mb-3\">\r\n                                <label>{{'appointments.create.fields.start_date' | translate }}</label>\r\n                                <div class=\"detail-inline\">{{appointment.start_date_time | dateTimeFormatFilter: loginUser.settings.date_time_format}}</div>\r\n                            </div>\r\n                            <div class=\"col-lg-4 col-md-6 mb-3\">\r\n                                <label>{{'appointments.create.fields.end_date' | translate }}</label>\r\n                                <div class=\"detail-inline\">{{appointment.end_date_time | dateTimeFormatFilter: loginUser.settings.date_time_format}}</div>\r\n                            </div>\r\n                            <div class=\"col-lg-4 col-md-6 mb-3\">\r\n                                <label>{{'appointments.create.fields.location' | translate }}</label>\r\n                                <div class=\"detail-inline\">{{appointment.location}}</div>\r\n                            </div>\r\n                            <div class=\"col-lg-4 col-md-6 mb-3\">\r\n                                <label>{{'common.created' | translate}}</label>\r\n                                <div class=\"detail-inline\">{{appointment.created_at | dateTimeFormatFilter : loginUser.settings.date_time_format}}</div>\r\n                            </div>\r\n                            <div class=\"col-lg-4 col-md-6 mb-3\">\r\n                                <label>{{'common.updated' | translate}}</label>\r\n                                <div class=\"detail-inline\">{{appointment.updated_at | dateTimeFormatFilter : loginUser.settings.date_time_format}}</div>\r\n                            </div>\r\n                            <div class=\"border-bottom\"></div>\r\n                            <!-- Description field -->\r\n                            <div class=\"col-lg-12 col-md-12 col-xs-12 col-sm-12 mt-3 mb-3 description-detail \">\r\n                                <h4 class=\"sub-title\"><span>{{'appointments.create.fields.notes' | translate}}</span>\r\n                                </h4>\r\n                                <div class=\"detail-inline\">\r\n                                    <p [innerHtml]=\"appointment.note\"></p>\r\n                                </div>\r\n                            </div>\r\n                        </div>\r\n                    </div>\r\n                </form>\r\n            </div>\r\n        </div>\r\n    </div>\r\n</section>\r\n");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/modules/crm/appointments/pages/appointments-list/appointments-list.component.html":
/*!*****************************************************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/modules/crm/appointments/pages/appointments-list/appointments-list.component.html ***!
  \*****************************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<section class=\"hide_empty_message\">\r\n    <div class=\"row\">\r\n        <div class=\"col-sm-12\">\r\n            <div class=\"card pl-2 pr-2 pb-2\">\r\n                <!-- Card header -->\r\n                <div class=\"card-header pl-0 pr-0 border-bottom\">\r\n                    <h4 class=\"main-title mt-2\"><span>{{'appointments.title' | translate}}</span></h4>\r\n                    <div class=\"card-buttons\">\r\n                        <a *ngxPermissionsOnly=\"['admin', 'super_admin']\" [routerLink]=\"['/providers']\" class=\"btn btn-create  mb-0 mr-1\" tooltip=\"{{'providers.title' | translate}}\"><i class=\"fa fa-industry\"></i><span>{{'providers.title' | translate}}</span></a>\r\n                        <a [routerLink]=\"['/appointments/calendar']\" class=\"btn btn-create mb-0\" tooltip=\"{{'common.switch_to_calendar' | translate}}\"><i class=\"fa fa-calendar-plus-o\"></i><span>{{'common.calendar' | translate}}</span></a>\r\n                        <button (click)=\"openAppointmentCreateModal()\" *ngxPermissionsOnly=\"['admin', 'super_admin', 'appointment_create']\" class=\"btn btn-create mb-0\" tooltip=\"{{'common.create' | translate}}\">\r\n                            <i class=\"fa fa-plus\"></i></button>\r\n                    </div>\r\n                </div>\r\n                <!-- Card content -->\r\n                <div class=\"card-content pt-3\">\r\n                    <!-- Card body -->\r\n                    <div class=\"card-body\">\r\n                        <!-- Filter buttons -->\r\n                        <div *ngIf=\"isPageLoaded\" class=\"d-flex flex-column flex-lg-row d-lg-inline-flex mb-3\">\r\n                            <div class=\"pl-lg-0 btn-filters\">\r\n                                <button (click)=\"filterByStatus(1)\" [ngClass]=\"{'active': statusfilterId==1}\" class=\"btn btn-raised open\" type=\"button\">\r\n                                    <p>{{'common.status.reserved' | translate}}</p>\r\n                                    <span class=\"badge badge-light\">{{statusCount[1]}}</span>\r\n                                </button>\r\n                                <button (click)=\"filterByStatus(2)\" [ngClass]=\"{'active': statusfilterId ==2}\" class=\"btn btn-raised assigned\" type=\"button\">\r\n                                    <p>{{'common.status.confirmed' | translate}}</p>\r\n                                    <span class=\"badge badge-light\">{{statusCount[2]}}</span>\r\n                                </button>\r\n                                <button (click)=\"filterByStatus(3)\" [ngClass]=\"{'active': statusfilterId==3}\" class=\"btn btn-raised completed\" type=\"button\">\r\n                                    <p>{{'common.status.finished' | translate}}</p>\r\n                                    <span class=\"badge badge-light\">{{statusCount[3]}}</span>\r\n                                </button>\r\n                                <button (click)=\"filterByStatus(4)\" [ngClass]=\"{'active': statusfilterId==4}\" class=\"btn btn-raised cancel\" type=\"button\">\r\n                                    <p>{{'common.status.canceled' | translate}}</p>\r\n                                    <span class=\"badge badge-light\">{{statusCount[4]}}</span>\r\n                                </button>\r\n                                <button [ngClass]=\"{'active': statusfilterId ==0}\" [routerLink]=\"['/appointments']\" class=\"btn btn-raised btn-secondary\" type=\"button\">\r\n                                    <p>{{'common.status.total' | translate}}</p>\r\n                                    <span class=\"badge badge-light\">{{statusCount[0]}}</span>\r\n                                </button>\r\n                            </div>\r\n                        </div>\r\n                        <!-- Appointment list datatable -->\r\n                        <div class=\"row\">\r\n                            <div class=\"col-sm-12\">\r\n                                <div class=\"table-responsive-xs table-responsive-sm table-responsive-md table-responsive-lg table-responsive-xl\">\r\n                                    <table [dtOptions]=\"dtOptions\" [dtTrigger]=\"dtTrigger\" class=\"table table-bordered table-hover b4-datatable\" datatable id=\"appointments_table\" width=\"100%\">\r\n                                        <thead>\r\n                                        <tr>\r\n                                            <th>{{'appointments.columns.id' | translate}}</th>\r\n                                            <th>{{'appointments.columns.title' | translate}}</th>\r\n                                            <th>{{'appointments.columns.provider' | translate}}</th>\r\n                                            <th>{{'appointments.columns.start_time' | translate}}</th>\r\n                                            <th>{{'appointments.columns.end_time' | translate}}</th>\r\n                                            <th>{{'appointments.columns.location' | translate}}</th>\r\n                                            <th>{{'appointments.columns.status' | translate}}</th>\r\n                                            <th>{{'appointments.columns.actions' | translate}}</th>\r\n                                        </tr>\r\n                                        </thead>\r\n                                        <tbody *ngIf=\"appointments?.length != 0\">\r\n                                        <tr *ngFor=\"let appointment of appointments; index as i\">\r\n                                            <td>\r\n                                                <ng-container *ngxPermissionsOnly=\"['admin', 'super_admin', 'appointment_view'] else elseBlock1;\">\r\n                                                    <a [routerLink]=\"['/appointments/detail', appointment.id]\" tooltip=\"{{'common.view' | translate}}\">{{appointment.generated_id}}</a>\r\n                                                </ng-container>\r\n                                                <ng-template #elseBlock1>{{appointment.generated_id}}</ng-template>\r\n                                            </td>\r\n                                            <td>{{appointment.title}}</td>\r\n                                            <td>{{appointment.provider_firstname}} {{appointment.provider_lastname}}</td>\r\n                                            <td>{{appointment.start_date_time | dateTimeFormatFilter: loginUser.settings.date_time_format}}</td>\r\n                                            <td>{{appointment.end_date_time | dateTimeFormatFilter: loginUser.settings.date_time_format}}</td>\r\n                                            <td>{{appointment.location}}</td>\r\n                                            <td class=\"status-dropdown\">\r\n                                                <div *ngxPermissionsOnly=\"['admin', 'super_admin', 'appointment_edit']; else elseBlock1; then thenBlock1\"></div>\r\n                                                <ng-template #elseBlock1>\r\n                                                    <ng-container *ngFor=\"let status of ('appointments.status' | translate)\">\r\n                                                        <div class=\"budges-status\">\r\n                                                            <span *ngIf=\"status.id == appointment.status\" class=\"{{status.class}}\">{{status.label}}</span>\r\n                                                        </div>\r\n                                                    </ng-container>\r\n                                                </ng-template>\r\n                                                <ng-template #thenBlock1>\r\n                                                    <div class=\"btn-group\" dropdown>\r\n                                                        <button aria-controls=\"dropdown-basic\" class=\"btn dropdown-toggle select-btn-lg\" dropdownToggle id=\"button-basic\" type=\"button\">{{getTranslateStatus(appointment.status) | translate}}&nbsp;<span class=\"caret\"></span>\r\n                                                        </button>\r\n                                                        <ul *dropdownMenu aria-labelledby=\"button-basic\" class=\"dropdown-menu animated fadeIn\" id=\"dropdown-basic\" role=\"menu\">\r\n                                                            <li *ngFor=\"let status of ('appointments.status' | translate)\" role=\"menuitem\">\r\n                                                                <a (click)=\"changeAppointmentStatus([appointment.id], status);appointment.status = status.id\" [ngClass]=\"{'active': appointment.status == status.id}\" class=\"dropdown-item btn btn-sm {{status.class}}\">{{status.label}}</a>\r\n                                                            </li>\r\n                                                        </ul>\r\n                                                    </div>\r\n                                                </ng-template>\r\n                                            </td>\r\n                                            <td class=\"actions-dropdown\">\r\n                                                <div class=\"btn-group\" dropdown>\r\n                                                    <button aria-controls=\"dropdown-basic-1\" class=\"dropdown-toggle btn-action\" dropdownToggle id=\"button-basic-1\" type=\"button\">\r\n                                                        <i class=\"fa fa-ellipsis-v\"></i></button>\r\n                                                    <ul *dropdownMenu aria-labelledby=\"button-basic-1\" class=\"dropdown-menu animated fadeIn\" id=\"dropdown-basic-1\" role=\"menu\">\r\n                                                        <li role=\"menuitem\">\r\n                                                            <a (click)=\"openAppointmentEditModal(appointment)\" *ngxPermissionsOnly=\"['admin', 'super_admin', 'appointment_edit']\" class=\"dropdown-item btn btn-edit btn-raised\" tooltip=\"{{'common.edit' | translate}}\"><i class=\"fa fa-pencil-square-o\"></i></a>\r\n                                                        </li>\r\n                                                        <li role=\"menuitem\">\r\n                                                            <a (click)=\"deleteAppointment(appointment.id)\" *ngxPermissionsOnly=\"['admin', 'super_admin', 'appointment_delete']\" class=\"dropdown-item btn btn-delete btn-raised\" tooltip=\"{{'common.delete' | translate}}\"><i class=\"fa fa-trash-o\"></i></a>\r\n                                                        </li>\r\n                                                    </ul>\r\n                                                </div>\r\n                                            </td>\r\n                                        </tr>\r\n                                        </tbody>\r\n                                        <tfoot *ngIf=\"appointments?.length == 0\" class=\"tfoot_dt\">\r\n                                        <tr>\r\n                                            <td class=\"no-data-available text-center\" colspan=\"8\">{{'common.datatable.sEmptyTable' | translate}}</td>\r\n                                        </tr>\r\n                                        </tfoot>\r\n                                    </table>\r\n                                </div>\r\n                            </div>\r\n                        </div>\r\n                    </div>\r\n                </div>\r\n            </div>\r\n        </div>\r\n    </div>\r\n</section>\r\n");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/modules/crm/appointments/pages/appointments/appointments.component.html":
/*!*******************************************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/modules/crm/appointments/pages/appointments/appointments.component.html ***!
  \*******************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<section>\r\n    <div class=\"row\">\r\n        <div class=\"col-sm-12\">\r\n            <div class=\"card pb-2\">\r\n                <div class=\"card-header pl-0 pr-0 border-bottom\">\r\n                    <div class=\"col-md-12\">\r\n                        <div class=\"row\">\r\n                            <div class=\"col-md-4\">\r\n                                <h4 class=\"main-title mt-2\"><span>{{'appointments.title' | translate}}</span></h4>\r\n                            </div>\r\n                            <div class=\"col-md-8 text-lg-right\">\r\n                                <div class=\"row\">\r\n                                    <div class=\"col-md-5 mb-lg-0 mb-2\">\r\n                                        <form class=\"form mt-1 \">\r\n                                            <div class=\"position-relative has-icon-left\">\r\n                                                <input #dp=\"bsDatepicker\" (bsValueChange)=\"appointmentYearChange($event)\" [(bsValue)]=\"year\" [bsConfig]=\"{ dateInputFormat: 'MM-YYYY', minMode : minMode }\" aria-describedby=\"inputGroupPrepend1\" bsDatepicker class=\"form-control\" id=\"search_for_month\" name=\"search_for_month\" placeholder=\"{{'appointments.create.placeholders.placeholder8' | translate}}\" type=\"text\" value=\"{{ year | dateTimeFormatFilter:'MM-YYYY' }}\"/>\r\n                                                <div class=\"form-control-position\"><i class=\"ft-calendar\"></i></div>\r\n                                            </div>\r\n                                        </form>\r\n                                    </div>\r\n                                    <div class=\"col-md-7`\">\r\n                                        <a [routerLink]=\"['/appointments']\" class=\"btn btn-create  mb-0 mr-1\" tooltip=\"{{'common.switch_to_list' | translate}}\"><i class=\"fa fa-list\"></i><span>{{'common.list' | translate}}</span></a>\r\n                                        <a *ngxPermissionsOnly=\"['admin', 'super_admin']\" [routerLink]=\"['/providers']\" class=\"btn btn-create  mb-0 mr-1\" tooltip=\"{{'providers.title' | translate}}\"><i class=\"fa fa-industry\"></i><span>{{'providers.title' | translate}}</span></a>\r\n                                        <button (click)=\"openAppointmentCreateModal()\" *ngxPermissionsOnly=\"['admin', 'super_admin', 'appointment_create']\" class=\"btn btn-create mb-0\" tooltip=\"{{'common.create' | translate}}\">\r\n                                            <i class=\"fa fa-plus\"></i></button>\r\n                                    </div>\r\n                                </div>\r\n                            </div>\r\n                        </div>\r\n                    </div>\r\n                </div>\r\n                <div class=\"card-body pl-2 pr-2 pt-3 pb-3\">\r\n                    <!-- Filter buttons -->\r\n                    <div *ngIf=\"isCalendarLoaded\" class=\"row btn-filters mb-3\">\r\n                        <div class=\"col-sm-12\">\r\n                            <button (click)=\"filterByStatus(1)\" [ngClass]=\"{'active': appoitmentFilterKey === 1}\" class=\"btn btn-raised open\">\r\n                                <p>{{'common.status.reserved' | translate}}</p>\r\n                                <span class=\"badge badge-light\">{{appointments.statusCount[1]}}</span>\r\n                            </button>\r\n                            <button (click)=\"filterByStatus(2)\" [ngClass]=\"{'active': appoitmentFilterKey == 2}\" class=\"btn btn-raised assigned\">\r\n                                <p>{{'common.status.confirmed' | translate}}</p>\r\n                                <span class=\"badge badge-light\">{{appointments.statusCount[2]}}</span>\r\n                            </button>\r\n                            <button (click)=\"filterByStatus(3)\" [ngClass]=\"{'active': appoitmentFilterKey == 3}\" class=\"btn btn-raised completed\">\r\n                                <p>{{'common.status.finished' | translate}}</p>\r\n                                <span class=\"badge badge-light\">{{appointments.statusCount[3]}}</span>\r\n                            </button>\r\n                            <button (click)=\"filterByStatus(4)\" [ngClass]=\"{'active': appoitmentFilterKey == 4}\" class=\"btn btn-raised cancel\">\r\n                                <p>{{'common.status.canceled' | translate}}</p>\r\n                                <span class=\"badge badge-light\">{{appointments.statusCount[4]}}</span>\r\n                            </button>\r\n                            <button (click)=\"filterByStatus(0)\" [ngClass]=\"{'active': appoitmentFilterKey == 0 }\" class=\"btn btn-raised btn-secondary\">\r\n                                <p>{{'common.status.total' | translate}}</p>\r\n                                <span class=\"badge badge-light\">{{appointments.statusCount[0]}}</span>\r\n                            </button>\r\n                        </div>\r\n                    </div>\r\n                    <div class=\"row\">\r\n                        <div class=\"col-sm-12\">\r\n                            <div class=\"row text-center\">\r\n\r\n                                <div class=\"col-md-6 d-flex mb-lg-0 mb-2 ml-lg-0 ml-4\">\r\n                                    <div (viewDateChange)=\"closeOpenMonthViewDay()\" [(viewDate)]=\"viewDate\" [view]=\"view\" class=\"btn calender-day\" mwlCalendarPreviousView>\r\n                                        <i class=\"calendar-icon fa fa-chevron-left\"></i>\r\n                                    </div>\r\n                                    <div class=\"ml-2 mr-2\">\r\n                                        <h3>{{ viewDate | calendarDate:(view + 'ViewTitle'): loginUser.language }}</h3>\r\n                                    </div>\r\n                                    <div (viewDateChange)=\"closeOpenMonthViewDay()\" [(viewDate)]=\"viewDate\" [view]=\"view\" class=\"btn calender-day\" mwlCalendarNextView>\r\n                                        <i class=\"calendar-icon fa fa-chevron-right\"></i>\r\n                                    </div>\r\n                                </div>\r\n                                <div class=\"col-md-6 mb-lg-0 mb-2 text-lg-right\">\r\n                                    <div class=\"btn-view-date\">\r\n                                        <div [(viewDate)]=\"viewDate\" class=\"btn calender-today mb-1\" mwlCalendarToday>{{'calendar.today' | translate}}</div>\r\n                                        <div (click)=\"setView(CalendarView.Month)\" [class.active]=\"view === CalendarView.Month\" class=\"btn calender-today mb-1\">{{'calendar.month' | translate}}</div>\r\n                                        <div (click)=\"setView(CalendarView.Week)\" [class.active]=\"view === CalendarView.Week\" class=\"btn calender-today mb-1\">{{'calendar.week' | translate}}</div>\r\n                                        <div (click)=\"setView(CalendarView.Day)\" [class.active]=\"view === CalendarView.Day\" class=\"btn calender-today mb-1\">{{'calendar.day' | translate}}</div>\r\n                                    </div>\r\n                                </div>\r\n                            </div>\r\n                            <br/>\r\n                            <div [ngSwitch]=\"view\">\r\n                                <mwl-calendar-month-view (dayClicked)=\"dayClicked($event.day)\" *ngSwitchCase=\"CalendarView.Month\" [activeDayIsOpen]=\"activeDayIsOpen\" [events]=\"events\" [locale]=\"loginUser.language\" [refresh]=\"refresh\" [viewDate]=\"viewDate\"></mwl-calendar-month-view>\r\n                                <mwl-calendar-week-view *ngSwitchCase=\"CalendarView.Week\" [events]=\"events\" [locale]=\"loginUser.language\" [refresh]=\"refresh\" [viewDate]=\"viewDate\"></mwl-calendar-week-view>\r\n                                <mwl-calendar-day-view *ngSwitchCase=\"CalendarView.Day\" [events]=\"events\" [locale]=\"loginUser.language\" [refresh]=\"refresh\" [viewDate]=\"viewDate\"></mwl-calendar-day-view>\r\n                            </div>\r\n                        </div>\r\n                    </div>\r\n                </div>\r\n            </div>\r\n        </div>\r\n    </div>\r\n</section>\r\n");

/***/ }),

/***/ "./src/app/core/helpers/crm-helper.ts":
/*!********************************************!*\
  !*** ./src/app/core/helpers/crm-helper.ts ***!
  \********************************************/
/*! exports provided: appointment_status_key_value */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "appointment_status_key_value", function() { return appointment_status_key_value; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");

//--
// Appointments
var appointment_status_key_value = [];
appointment_status_key_value[1] = 'common.status.reserved';
appointment_status_key_value[2] = 'common.status.confirmed';
appointment_status_key_value[3] = 'common.status.finished';
appointment_status_key_value[4] = 'common.status.canceled';


/***/ }),

/***/ "./src/app/core/services/appointments.service.ts":
/*!*******************************************************!*\
  !*** ./src/app/core/services/appointments.service.ts ***!
  \*******************************************************/
/*! exports provided: AppointmentsService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppointmentsService", function() { return AppointmentsService; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../environments/environment */ "./src/environments/environment.ts");




var AppointmentsService = /** @class */ (function () {
    function AppointmentsService(http) {
        this.http = http;
        this.apiUrl = _environments_environment__WEBPACK_IMPORTED_MODULE_3__["environment"].apiUrl;
    }
    AppointmentsService.prototype.getAll = function (status, date) {
        return this.http.get(this.apiUrl + "/api/appointments?status=" + status + "&date=" + date);
    };
    AppointmentsService.prototype.getById = function (id) {
        return this.http.get(this.apiUrl + "/api/appointments/" + id);
    };
    AppointmentsService.prototype.create = function (appointments) {
        return this.http.post(this.apiUrl + "/api/appointments", appointments);
    };
    AppointmentsService.prototype.update = function (appointments) {
        return this.http.put(this.apiUrl + "/api/appointments/" + appointments.id, appointments);
    };
    AppointmentsService.prototype.delete = function (id) {
        return this.http.delete(this.apiUrl + "/api/appointments/" + id);
    };
    AppointmentsService.prototype.changeStatus = function (appointments) {
        return this.http.post(this.apiUrl + "/api/appointments/" + appointments.id + "/change-status", { status: appointments.status });
    };
    AppointmentsService.prototype.getAppointmentAvailabilities = function (appointments) {
        return this.http.get(this.apiUrl + "/api/appointments/availabilities/" + appointments.provider_id + "/" + appointments.start_date_time);
    };
    AppointmentsService.ctorParameters = function () { return [
        { type: _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClient"] }
    ]; };
    AppointmentsService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
            providedIn: 'root'
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClient"]])
    ], AppointmentsService);
    return AppointmentsService;
}());



/***/ }),

/***/ "./src/app/modules/crm/appointments/appointments-routing.module.ts":
/*!*************************************************************************!*\
  !*** ./src/app/modules/crm/appointments/appointments-routing.module.ts ***!
  \*************************************************************************/
/*! exports provided: AppointmentsRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppointmentsRoutingModule", function() { return AppointmentsRoutingModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var ngx_permissions__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ngx-permissions */ "./node_modules/ngx-permissions/ngx-permissions.umd.js");
/* harmony import */ var ngx_permissions__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(ngx_permissions__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _pages_appointments_appointments_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./pages/appointments/appointments.component */ "./src/app/modules/crm/appointments/pages/appointments/appointments.component.ts");
/* harmony import */ var _pages_appointments_list_appointments_list_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./pages/appointments-list/appointments-list.component */ "./src/app/modules/crm/appointments/pages/appointments-list/appointments-list.component.ts");
/* harmony import */ var _pages_appointments_detail_appointments_detail_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./pages/appointments-detail/appointments-detail.component */ "./src/app/modules/crm/appointments/pages/appointments-detail/appointments-detail.component.ts");







var routes = [
    {
        path: '',
        children: [
            {
                path: '',
                component: _pages_appointments_list_appointments_list_component__WEBPACK_IMPORTED_MODULE_5__["AppointmentsListComponent"]
            },
            {
                path: 'calendar',
                canActivate: [ngx_permissions__WEBPACK_IMPORTED_MODULE_3__["NgxPermissionsGuard"]],
                component: _pages_appointments_appointments_component__WEBPACK_IMPORTED_MODULE_4__["AppointmentsComponent"],
                data: {
                    breadcrumbs: {
                        text: 'common.calendar',
                        icon: 'fa fa-calendar-plus-o',
                        hasParams: true,
                        show: true,
                        isHome: true
                    }
                }
            },
            {
                path: 'detail/:id',
                canActivate: [ngx_permissions__WEBPACK_IMPORTED_MODULE_3__["NgxPermissionsGuard"]],
                component: _pages_appointments_detail_appointments_detail_component__WEBPACK_IMPORTED_MODULE_6__["AppointmentsDetailComponent"],
                data: {
                    breadcrumbs: {
                        text: 'common.detail',
                        icon: 'fa fa-calendar-plus-o',
                        hasParams: true,
                        show: true,
                        isHome: true
                    },
                    permissions: {
                        only: ['admin', 'super_admin', 'appointment_view']
                    }
                }
            },
            {
                path: ':statusId',
                component: _pages_appointments_list_appointments_list_component__WEBPACK_IMPORTED_MODULE_5__["AppointmentsListComponent"]
            }
        ]
    }
];
var AppointmentsRoutingModule = /** @class */ (function () {
    function AppointmentsRoutingModule() {
    }
    AppointmentsRoutingModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)],
            exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]]
        })
    ], AppointmentsRoutingModule);
    return AppointmentsRoutingModule;
}());



/***/ }),

/***/ "./src/app/modules/crm/appointments/appointments.module.ts":
/*!*****************************************************************!*\
  !*** ./src/app/modules/crm/appointments/appointments.module.ts ***!
  \*****************************************************************/
/*! exports provided: AppointmentsModule, HttpLoaderFactory */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppointmentsModule", function() { return AppointmentsModule; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "HttpLoaderFactory", function() { return HttpLoaderFactory; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");
/* harmony import */ var ngx_bootstrap__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ngx-bootstrap */ "./node_modules/ngx-bootstrap/esm5/ngx-bootstrap.js");
/* harmony import */ var angular_datatables__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! angular-datatables */ "./node_modules/angular-datatables/index.js");
/* harmony import */ var ngx_export_as__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ngx-export-as */ "./node_modules/ngx-export-as/fesm2015/ngx-export-as.js");
/* harmony import */ var ngx_editor__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ngx-editor */ "./node_modules/ngx-editor/fesm5/ngx-editor.js");
/* harmony import */ var _ng_select_ng_select__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @ng-select/ng-select */ "./node_modules/@ng-select/ng-select/fesm5/ng-select.js");
/* harmony import */ var _ngx_translate_core__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @ngx-translate/core */ "./node_modules/@ngx-translate/core/fesm5/ngx-translate-core.js");
/* harmony import */ var ngx_permissions__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ngx-permissions */ "./node_modules/ngx-permissions/ngx-permissions.umd.js");
/* harmony import */ var ngx_permissions__WEBPACK_IMPORTED_MODULE_11___default = /*#__PURE__*/__webpack_require__.n(ngx_permissions__WEBPACK_IMPORTED_MODULE_11__);
/* harmony import */ var _ngx_translate_http_loader__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! @ngx-translate/http-loader */ "./node_modules/@ngx-translate/http-loader/fesm5/ngx-translate-http-loader.js");
/* harmony import */ var ng_pick_datetime__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ng-pick-datetime */ "./node_modules/ng-pick-datetime/picker.js");
/* harmony import */ var angular_calendar__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! angular-calendar */ "./node_modules/angular-calendar/fesm5/angular-calendar.js");
/* harmony import */ var angular_draggable_droppable__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! angular-draggable-droppable */ "./node_modules/angular-draggable-droppable/fesm5/angular-draggable-droppable.js");
/* harmony import */ var angular_resizable_element__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! angular-resizable-element */ "./node_modules/angular-resizable-element/fesm5/angular-resizable-element.js");
/* harmony import */ var angular_calendar_date_adapters_date_fns__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! angular-calendar/date-adapters/date-fns */ "./node_modules/angular-calendar/date-adapters/date-fns/index.js");
/* harmony import */ var angular_calendar_date_adapters_date_fns__WEBPACK_IMPORTED_MODULE_17___default = /*#__PURE__*/__webpack_require__.n(angular_calendar_date_adapters_date_fns__WEBPACK_IMPORTED_MODULE_17__);
/* harmony import */ var _appointments_routing_module__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! ./appointments-routing.module */ "./src/app/modules/crm/appointments/appointments-routing.module.ts");
/* harmony import */ var _shared_shared_module__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(/*! ../../../shared/shared.module */ "./src/app/shared/shared.module.ts");
/* harmony import */ var _pages_appointments_appointments_component__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__(/*! ./pages/appointments/appointments.component */ "./src/app/modules/crm/appointments/pages/appointments/appointments.component.ts");
/* harmony import */ var _components_create_appointment_create_appointment_component__WEBPACK_IMPORTED_MODULE_21__ = __webpack_require__(/*! ./components/create-appointment/create-appointment.component */ "./src/app/modules/crm/appointments/components/create-appointment/create-appointment.component.ts");
/* harmony import */ var _components_edit_appointment_edit_appointment_component__WEBPACK_IMPORTED_MODULE_22__ = __webpack_require__(/*! ./components/edit-appointment/edit-appointment.component */ "./src/app/modules/crm/appointments/components/edit-appointment/edit-appointment.component.ts");
/* harmony import */ var _pages_appointments_list_appointments_list_component__WEBPACK_IMPORTED_MODULE_23__ = __webpack_require__(/*! ./pages/appointments-list/appointments-list.component */ "./src/app/modules/crm/appointments/pages/appointments-list/appointments-list.component.ts");
/* harmony import */ var _pages_appointments_detail_appointments_detail_component__WEBPACK_IMPORTED_MODULE_24__ = __webpack_require__(/*! ./pages/appointments-detail/appointments-detail.component */ "./src/app/modules/crm/appointments/pages/appointments-detail/appointments-detail.component.ts");

























var AppointmentsModule = /** @class */ (function () {
    function AppointmentsModule() {
    }
    AppointmentsModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            declarations: [
                _pages_appointments_appointments_component__WEBPACK_IMPORTED_MODULE_20__["AppointmentsComponent"],
                _components_create_appointment_create_appointment_component__WEBPACK_IMPORTED_MODULE_21__["CreateAppointmentComponent"],
                _components_edit_appointment_edit_appointment_component__WEBPACK_IMPORTED_MODULE_22__["EditAppointmentComponent"],
                _pages_appointments_list_appointments_list_component__WEBPACK_IMPORTED_MODULE_23__["AppointmentsListComponent"],
                _pages_appointments_detail_appointments_detail_component__WEBPACK_IMPORTED_MODULE_24__["AppointmentsDetailComponent"]
            ],
            imports: [
                _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
                _appointments_routing_module__WEBPACK_IMPORTED_MODULE_18__["AppointmentsRoutingModule"],
                angular_datatables__WEBPACK_IMPORTED_MODULE_6__["DataTablesModule"],
                ngx_export_as__WEBPACK_IMPORTED_MODULE_7__["ExportAsModule"],
                angular_draggable_droppable__WEBPACK_IMPORTED_MODULE_15__["DragAndDropModule"],
                angular_resizable_element__WEBPACK_IMPORTED_MODULE_16__["ResizableModule"],
                _ng_select_ng_select__WEBPACK_IMPORTED_MODULE_9__["NgSelectModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_3__["ReactiveFormsModule"],
                ngx_editor__WEBPACK_IMPORTED_MODULE_8__["NgxEditorModule"],
                ng_pick_datetime__WEBPACK_IMPORTED_MODULE_13__["OwlDateTimeModule"],
                ng_pick_datetime__WEBPACK_IMPORTED_MODULE_13__["OwlNativeDateTimeModule"],
                ngx_permissions__WEBPACK_IMPORTED_MODULE_11__["NgxPermissionsModule"],
                ngx_bootstrap__WEBPACK_IMPORTED_MODULE_5__["ModalModule"].forRoot(),
                ngx_bootstrap__WEBPACK_IMPORTED_MODULE_5__["TooltipModule"].forRoot(),
                ngx_bootstrap__WEBPACK_IMPORTED_MODULE_5__["DatepickerModule"].forRoot(),
                ngx_bootstrap__WEBPACK_IMPORTED_MODULE_5__["BsDatepickerModule"].forRoot(),
                ngx_bootstrap__WEBPACK_IMPORTED_MODULE_5__["BsDropdownModule"].forRoot(),
                angular_calendar__WEBPACK_IMPORTED_MODULE_14__["CalendarModule"].forRoot({
                    provide: angular_calendar__WEBPACK_IMPORTED_MODULE_14__["DateAdapter"],
                    useFactory: angular_calendar_date_adapters_date_fns__WEBPACK_IMPORTED_MODULE_17__["adapterFactory"]
                }),
                _ngx_translate_core__WEBPACK_IMPORTED_MODULE_10__["TranslateModule"].forChild({
                    loader: {
                        provide: _ngx_translate_core__WEBPACK_IMPORTED_MODULE_10__["TranslateLoader"],
                        useFactory: (HttpLoaderFactory),
                        deps: [_angular_common_http__WEBPACK_IMPORTED_MODULE_4__["HttpClient"]]
                    }
                }),
                _shared_shared_module__WEBPACK_IMPORTED_MODULE_19__["SharedModule"]
            ],
            entryComponents: [
                _components_create_appointment_create_appointment_component__WEBPACK_IMPORTED_MODULE_21__["CreateAppointmentComponent"],
                _components_edit_appointment_edit_appointment_component__WEBPACK_IMPORTED_MODULE_22__["EditAppointmentComponent"]
            ],
            providers: []
        })
    ], AppointmentsModule);
    return AppointmentsModule;
}());

// Required for AOT compilation
function HttpLoaderFactory(http) {
    return new _ngx_translate_http_loader__WEBPACK_IMPORTED_MODULE_12__["TranslateHttpLoader"](http, './assets/i18n/', '.json');
}


/***/ }),

/***/ "./src/app/modules/crm/appointments/components/create-appointment/create-appointment.component.scss":
/*!**********************************************************************************************************!*\
  !*** ./src/app/modules/crm/appointments/components/create-appointment/create-appointment.component.scss ***!
  \**********************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL21vZHVsZXMvY3JtL2FwcG9pbnRtZW50cy9jb21wb25lbnRzL2NyZWF0ZS1hcHBvaW50bWVudC9jcmVhdGUtYXBwb2ludG1lbnQuY29tcG9uZW50LnNjc3MifQ== */");

/***/ }),

/***/ "./src/app/modules/crm/appointments/components/create-appointment/create-appointment.component.ts":
/*!********************************************************************************************************!*\
  !*** ./src/app/modules/crm/appointments/components/create-appointment/create-appointment.component.ts ***!
  \********************************************************************************************************/
/*! exports provided: CreateAppointmentComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CreateAppointmentComponent", function() { return CreateAppointmentComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var ngx_bootstrap_modal__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ngx-bootstrap/modal */ "./node_modules/ngx-bootstrap/modal/fesm5/ngx-bootstrap-modal.js");
/* harmony import */ var ngx_toastr__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ngx-toastr */ "./node_modules/ngx-toastr/fesm5/ngx-toastr.js");
/* harmony import */ var _ngx_translate_core__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @ngx-translate/core */ "./node_modules/@ngx-translate/core/fesm5/ngx-translate-core.js");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! rxjs */ "./node_modules/rxjs/_esm5/index.js");
/* harmony import */ var _core_services_client_service__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../../../../../core/services/client.service */ "./src/app/core/services/client.service.ts");
/* harmony import */ var _core_services_provider_service__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../../../../../core/services/provider.service */ "./src/app/core/services/provider.service.ts");
/* harmony import */ var _core_services_appointments_service__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../../../../../core/services/appointments.service */ "./src/app/core/services/appointments.service.ts");
/* harmony import */ var moment__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! moment */ "./node_modules/moment/moment.js");
/* harmony import */ var moment__WEBPACK_IMPORTED_MODULE_10___default = /*#__PURE__*/__webpack_require__.n(moment__WEBPACK_IMPORTED_MODULE_10__);











var CreateAppointmentComponent = /** @class */ (function () {
    function CreateAppointmentComponent(translate, bsCreateModalRef, formBuilder, toastr, clientService, providerService, appointmentsService) {
        this.translate = translate;
        this.bsCreateModalRef = bsCreateModalRef;
        this.formBuilder = formBuilder;
        this.toastr = toastr;
        this.clientService = clientService;
        this.providerService = providerService;
        this.appointmentsService = appointmentsService;
        this.event = new _angular_core__WEBPACK_IMPORTED_MODULE_1__["EventEmitter"]();
        this.minDate = new Date;
        this.clients = [];
        this.isFormSubmitted = false;
        this.isPageLoad = false;
    }
    Object.defineProperty(CreateAppointmentComponent.prototype, "appointmentControl", {
        get: function () {
            return this.createAppointmentForm.controls;
        },
        enumerable: true,
        configurable: true
    });
    CreateAppointmentComponent.prototype.ngOnInit = function () {
        this.onClose = new rxjs__WEBPACK_IMPORTED_MODULE_6__["Subject"]();
        this.getClients();
    };
    CreateAppointmentComponent.prototype.loadForm = function () {
        this.createAppointmentForm = this.formBuilder.group({
            title: [null, [_angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required, _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].maxLength(255)]],
            client_id: [null],
            provider_id: [null, _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required],
            attendees: [null, _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required],
            start_date_time: [null, _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required],
            end_date_time: [null, _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required],
            location: [''],
            note: ['']
        });
        this.isPageLoad = true;
        this.checkAvailabilities(false);
    };
    CreateAppointmentComponent.prototype.startDateChange = function (startDate) {
        this.createAppointmentForm.patchValue({ end_date_time: new Date(startDate.value) });
        this.checkAvailabilities(true);
    };
    CreateAppointmentComponent.prototype.getClients = function () {
        var _this = this;
        this.clientService.getAll()
            .subscribe(function (data) {
            _this.clients = data;
            _this.getProviders();
        });
    };
    CreateAppointmentComponent.prototype.getProviders = function () {
        var _this = this;
        this.providerService.getAll()
            .subscribe(function (data) {
            _this.providers = data;
            _this.loadForm();
        });
    };
    CreateAppointmentComponent.prototype.checkAvailabilities = function (isValid) {
        var _this = this;
        if (!this.createAppointmentForm.value.provider_id && isValid) {
            this.toastr.error(this.translate.instant('appointments.create.error_messages.message9'), this.translate.instant('appointments.title'));
            return false;
        }
        this.createAppointmentForm.value.start_date_time = moment__WEBPACK_IMPORTED_MODULE_10__(this.createAppointmentForm.value.start_date_time).format('YYYY-MM-DD HH:mm:ss');
        this.appointmentsService.getAppointmentAvailabilities(this.createAppointmentForm.value)
            .subscribe(function (data) {
            _this.availabileSlots = data;
        });
    };
    CreateAppointmentComponent.prototype.onSubmit = function () {
        var _this = this;
        this.isFormSubmitted = true;
        if (this.createAppointmentForm.invalid) {
            return;
        }
        this.createAppointmentForm.value.start_date_time = moment__WEBPACK_IMPORTED_MODULE_10__(this.createAppointmentForm.value.start_date_time).format('YYYY-MM-DD HH:mm:ss');
        this.createAppointmentForm.value.end_date_time = moment__WEBPACK_IMPORTED_MODULE_10__(this.createAppointmentForm.value.end_date_time).format('YYYY-MM-DD HH:mm:ss');
        this.appointmentsService.create(this.createAppointmentForm.value)
            .subscribe(function (data) {
            _this.toastr.success(_this.translate.instant('appointments.messages.create'), _this.translate.instant('appointments.title'));
            _this.event.emit({ data: true });
            _this.onCancel();
        });
    };
    CreateAppointmentComponent.prototype.onCancel = function () {
        this.onClose.next(false);
        this.bsCreateModalRef.hide();
    };
    CreateAppointmentComponent.ctorParameters = function () { return [
        { type: _ngx_translate_core__WEBPACK_IMPORTED_MODULE_5__["TranslateService"] },
        { type: ngx_bootstrap_modal__WEBPACK_IMPORTED_MODULE_3__["BsModalRef"] },
        { type: _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormBuilder"] },
        { type: ngx_toastr__WEBPACK_IMPORTED_MODULE_4__["ToastrService"] },
        { type: _core_services_client_service__WEBPACK_IMPORTED_MODULE_7__["ClientService"] },
        { type: _core_services_provider_service__WEBPACK_IMPORTED_MODULE_8__["ProviderService"] },
        { type: _core_services_appointments_service__WEBPACK_IMPORTED_MODULE_9__["AppointmentsService"] }
    ]; };
    CreateAppointmentComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-create-appointment',
            template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./create-appointment.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/modules/crm/appointments/components/create-appointment/create-appointment.component.html")).default,
            styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./create-appointment.component.scss */ "./src/app/modules/crm/appointments/components/create-appointment/create-appointment.component.scss")).default]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_ngx_translate_core__WEBPACK_IMPORTED_MODULE_5__["TranslateService"],
            ngx_bootstrap_modal__WEBPACK_IMPORTED_MODULE_3__["BsModalRef"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormBuilder"],
            ngx_toastr__WEBPACK_IMPORTED_MODULE_4__["ToastrService"],
            _core_services_client_service__WEBPACK_IMPORTED_MODULE_7__["ClientService"],
            _core_services_provider_service__WEBPACK_IMPORTED_MODULE_8__["ProviderService"],
            _core_services_appointments_service__WEBPACK_IMPORTED_MODULE_9__["AppointmentsService"]])
    ], CreateAppointmentComponent);
    return CreateAppointmentComponent;
}());



/***/ }),

/***/ "./src/app/modules/crm/appointments/components/edit-appointment/edit-appointment.component.scss":
/*!******************************************************************************************************!*\
  !*** ./src/app/modules/crm/appointments/components/edit-appointment/edit-appointment.component.scss ***!
  \******************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL21vZHVsZXMvY3JtL2FwcG9pbnRtZW50cy9jb21wb25lbnRzL2VkaXQtYXBwb2ludG1lbnQvZWRpdC1hcHBvaW50bWVudC5jb21wb25lbnQuc2NzcyJ9 */");

/***/ }),

/***/ "./src/app/modules/crm/appointments/components/edit-appointment/edit-appointment.component.ts":
/*!****************************************************************************************************!*\
  !*** ./src/app/modules/crm/appointments/components/edit-appointment/edit-appointment.component.ts ***!
  \****************************************************************************************************/
/*! exports provided: EditAppointmentComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "EditAppointmentComponent", function() { return EditAppointmentComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var ngx_bootstrap_modal__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ngx-bootstrap/modal */ "./node_modules/ngx-bootstrap/modal/fesm5/ngx-bootstrap-modal.js");
/* harmony import */ var ngx_toastr__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ngx-toastr */ "./node_modules/ngx-toastr/fesm5/ngx-toastr.js");
/* harmony import */ var _ngx_translate_core__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @ngx-translate/core */ "./node_modules/@ngx-translate/core/fesm5/ngx-translate-core.js");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! rxjs */ "./node_modules/rxjs/_esm5/index.js");
/* harmony import */ var _core_services_client_service__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../../../../../core/services/client.service */ "./src/app/core/services/client.service.ts");
/* harmony import */ var _core_services_provider_service__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../../../../../core/services/provider.service */ "./src/app/core/services/provider.service.ts");
/* harmony import */ var _core_services_appointments_service__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../../../../../core/services/appointments.service */ "./src/app/core/services/appointments.service.ts");
/* harmony import */ var moment__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! moment */ "./node_modules/moment/moment.js");
/* harmony import */ var moment__WEBPACK_IMPORTED_MODULE_10___default = /*#__PURE__*/__webpack_require__.n(moment__WEBPACK_IMPORTED_MODULE_10__);











var EditAppointmentComponent = /** @class */ (function () {
    function EditAppointmentComponent(translate, bsEditModalRef, formBuilder, toastr, clientService, providerService, appointmentsService) {
        this.translate = translate;
        this.bsEditModalRef = bsEditModalRef;
        this.formBuilder = formBuilder;
        this.toastr = toastr;
        this.clientService = clientService;
        this.providerService = providerService;
        this.appointmentsService = appointmentsService;
        this.event = new _angular_core__WEBPACK_IMPORTED_MODULE_1__["EventEmitter"]();
        this.clients = [];
        this.isFormSubmitted = false;
        this.isPageLoad = false;
    }
    Object.defineProperty(EditAppointmentComponent.prototype, "appointmentControl", {
        get: function () {
            return this.editAppointmentForm.controls;
        },
        enumerable: true,
        configurable: true
    });
    EditAppointmentComponent.prototype.ngOnInit = function () {
        this.onClose = new rxjs__WEBPACK_IMPORTED_MODULE_6__["Subject"]();
        this.getClients();
    };
    EditAppointmentComponent.prototype.loadForm = function () {
        this.editAppointmentForm = this.formBuilder.group({
            id: [this.appointment.id],
            title: [this.appointment.title, [_angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required, _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].maxLength(255)]],
            client_id: [this.appointment.client_id],
            provider_id: [this.appointment.provider_id, _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required],
            attendees: [this.appointment.attendees, _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required],
            start_date_time: [new Date(this.appointment.start_date_time), _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required],
            end_date_time: [new Date(this.appointment.end_date_time), _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required],
            status: [this.appointment.status, _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required],
            location: [this.appointment.location],
            note: [this.appointment.note]
        });
        this.checkAvailabilities();
        this.isPageLoad = true;
    };
    EditAppointmentComponent.prototype.startDateChange = function (start_date) {
        this.editAppointmentForm.patchValue({ end_date_time: new Date(start_date.value) });
        this.checkAvailabilities();
    };
    EditAppointmentComponent.prototype.getClients = function () {
        var _this = this;
        this.clientService.getAll()
            .subscribe(function (data) {
            _this.clients = data;
            _this.getProviders();
        });
    };
    EditAppointmentComponent.prototype.getProviders = function () {
        var _this = this;
        this.providerService.getAll()
            .subscribe(function (data) {
            _this.providers = data;
            _this.loadForm();
        });
    };
    EditAppointmentComponent.prototype.changeProvider = function () {
        this.editAppointmentForm.patchValue({ start_date_time: null });
        this.editAppointmentForm.patchValue({ end_date_time: null });
        this.availabileSlots = [];
    };
    EditAppointmentComponent.prototype.checkAvailabilities = function () {
        var _this = this;
        if (!this.editAppointmentForm.value.provider_id) {
            this.toastr.error(this.translate.instant('appointments.create.error_messages.message9'), this.translate.instant('appointments.title'));
            return false;
        }
        this.editAppointmentForm.value.start_date_time = moment__WEBPACK_IMPORTED_MODULE_10__(this.editAppointmentForm.value.start_date_time).format('YYYY-MM-DD HH:mm:ss');
        this.appointmentsService.getAppointmentAvailabilities(this.editAppointmentForm.value)
            .subscribe(function (data) {
            _this.availabileSlots = data;
        });
    };
    EditAppointmentComponent.prototype.onSubmit = function () {
        var _this = this;
        this.isFormSubmitted = true;
        if (this.editAppointmentForm.invalid) {
            return;
        }
        this.editAppointmentForm.value.start_date_time = moment__WEBPACK_IMPORTED_MODULE_10__(this.editAppointmentForm.value.start_date_time).format('YYYY-MM-DD HH:mm:ss');
        this.editAppointmentForm.value.end_date_time = moment__WEBPACK_IMPORTED_MODULE_10__(this.editAppointmentForm.value.end_date_time).format('YYYY-MM-DD HH:mm:ss');
        this.appointmentsService.update(this.editAppointmentForm.value)
            .subscribe(function (data) {
            _this.toastr.success(_this.translate.instant('appointments.messages.edit'), _this.translate.instant('appointments.title'));
            _this.event.emit({ data: true });
            _this.onCancel();
        });
    };
    EditAppointmentComponent.prototype.onCancel = function () {
        this.onClose.next(false);
        this.bsEditModalRef.hide();
    };
    EditAppointmentComponent.ctorParameters = function () { return [
        { type: _ngx_translate_core__WEBPACK_IMPORTED_MODULE_5__["TranslateService"] },
        { type: ngx_bootstrap_modal__WEBPACK_IMPORTED_MODULE_3__["BsModalRef"] },
        { type: _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormBuilder"] },
        { type: ngx_toastr__WEBPACK_IMPORTED_MODULE_4__["ToastrService"] },
        { type: _core_services_client_service__WEBPACK_IMPORTED_MODULE_7__["ClientService"] },
        { type: _core_services_provider_service__WEBPACK_IMPORTED_MODULE_8__["ProviderService"] },
        { type: _core_services_appointments_service__WEBPACK_IMPORTED_MODULE_9__["AppointmentsService"] }
    ]; };
    EditAppointmentComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-edit-appointment',
            template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./edit-appointment.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/modules/crm/appointments/components/edit-appointment/edit-appointment.component.html")).default,
            styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./edit-appointment.component.scss */ "./src/app/modules/crm/appointments/components/edit-appointment/edit-appointment.component.scss")).default]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_ngx_translate_core__WEBPACK_IMPORTED_MODULE_5__["TranslateService"],
            ngx_bootstrap_modal__WEBPACK_IMPORTED_MODULE_3__["BsModalRef"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormBuilder"],
            ngx_toastr__WEBPACK_IMPORTED_MODULE_4__["ToastrService"],
            _core_services_client_service__WEBPACK_IMPORTED_MODULE_7__["ClientService"],
            _core_services_provider_service__WEBPACK_IMPORTED_MODULE_8__["ProviderService"],
            _core_services_appointments_service__WEBPACK_IMPORTED_MODULE_9__["AppointmentsService"]])
    ], EditAppointmentComponent);
    return EditAppointmentComponent;
}());



/***/ }),

/***/ "./src/app/modules/crm/appointments/pages/appointments-detail/appointments-detail.component.scss":
/*!*******************************************************************************************************!*\
  !*** ./src/app/modules/crm/appointments/pages/appointments-detail/appointments-detail.component.scss ***!
  \*******************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL21vZHVsZXMvY3JtL2FwcG9pbnRtZW50cy9wYWdlcy9hcHBvaW50bWVudHMtZGV0YWlsL2FwcG9pbnRtZW50cy1kZXRhaWwuY29tcG9uZW50LnNjc3MifQ== */");

/***/ }),

/***/ "./src/app/modules/crm/appointments/pages/appointments-detail/appointments-detail.component.ts":
/*!*****************************************************************************************************!*\
  !*** ./src/app/modules/crm/appointments/pages/appointments-detail/appointments-detail.component.ts ***!
  \*****************************************************************************************************/
/*! exports provided: AppointmentsDetailComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppointmentsDetailComponent", function() { return AppointmentsDetailComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var ngx_toastr__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ngx-toastr */ "./node_modules/ngx-toastr/fesm5/ngx-toastr.js");
/* harmony import */ var _ngx_translate_core__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ngx-translate/core */ "./node_modules/@ngx-translate/core/fesm5/ngx-translate-core.js");
/* harmony import */ var _core_services_appointments_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../../../../core/services/appointments.service */ "./src/app/core/services/appointments.service.ts");
/* harmony import */ var src_app_core_services_authentication_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! src/app/core/services/authentication.service */ "./src/app/core/services/authentication.service.ts");
/* harmony import */ var _core_helpers_crm_helper__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./../../../../../core/helpers/crm-helper */ "./src/app/core/helpers/crm-helper.ts");








var AppointmentsDetailComponent = /** @class */ (function () {
    function AppointmentsDetailComponent(translate, toastr, route, appointmentsService, authenticationService) {
        var _this = this;
        this.translate = translate;
        this.toastr = toastr;
        this.route = route;
        this.appointmentsService = appointmentsService;
        this.authenticationService = authenticationService;
        this.isPageLoaded = false;
        this.appointmentStatusKeyValue = _core_helpers_crm_helper__WEBPACK_IMPORTED_MODULE_7__["appointment_status_key_value"];
        this.route.paramMap.subscribe(function (params) {
            _this.getById(params.get('id'));
        });
        this.authenticationService.loginUser.subscribe(function (x) { return _this.loginUser = x; });
    }
    AppointmentsDetailComponent.prototype.ngOnInit = function () {
    };
    AppointmentsDetailComponent.prototype.getById = function (appointmentId) {
        var _this = this;
        this.appointmentsService.getById(appointmentId).subscribe(function (data) {
            _this.appointment = data;
            _this.isPageLoaded = true;
        });
    };
    AppointmentsDetailComponent.prototype.getTranslateStatus = function (statusKey) {
        return this.appointmentStatusKeyValue[statusKey];
    };
    AppointmentsDetailComponent.prototype.changeAppointmentStatus = function (appointmentId, status) {
        var _this = this;
        this.appointmentsService.changeStatus({ id: appointmentId, status: status.id }).subscribe(function (data) {
            _this.toastr.success(_this.translate.instant('appointments.messages.status'), _this.translate.instant('appointments.title'));
        });
    };
    AppointmentsDetailComponent.ctorParameters = function () { return [
        { type: _ngx_translate_core__WEBPACK_IMPORTED_MODULE_4__["TranslateService"] },
        { type: ngx_toastr__WEBPACK_IMPORTED_MODULE_3__["ToastrService"] },
        { type: _angular_router__WEBPACK_IMPORTED_MODULE_2__["ActivatedRoute"] },
        { type: _core_services_appointments_service__WEBPACK_IMPORTED_MODULE_5__["AppointmentsService"] },
        { type: src_app_core_services_authentication_service__WEBPACK_IMPORTED_MODULE_6__["AuthenticationService"] }
    ]; };
    AppointmentsDetailComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-appointments-detail',
            template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./appointments-detail.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/modules/crm/appointments/pages/appointments-detail/appointments-detail.component.html")).default,
            styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./appointments-detail.component.scss */ "./src/app/modules/crm/appointments/pages/appointments-detail/appointments-detail.component.scss")).default]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_ngx_translate_core__WEBPACK_IMPORTED_MODULE_4__["TranslateService"],
            ngx_toastr__WEBPACK_IMPORTED_MODULE_3__["ToastrService"],
            _angular_router__WEBPACK_IMPORTED_MODULE_2__["ActivatedRoute"],
            _core_services_appointments_service__WEBPACK_IMPORTED_MODULE_5__["AppointmentsService"],
            src_app_core_services_authentication_service__WEBPACK_IMPORTED_MODULE_6__["AuthenticationService"]])
    ], AppointmentsDetailComponent);
    return AppointmentsDetailComponent;
}());



/***/ }),

/***/ "./src/app/modules/crm/appointments/pages/appointments-list/appointments-list.component.scss":
/*!***************************************************************************************************!*\
  !*** ./src/app/modules/crm/appointments/pages/appointments-list/appointments-list.component.scss ***!
  \***************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = (".hide_empty_message ::ng-deep .odd {\n  display: none;\n}\n\n.btn-filters .status-dropdown .btn.assigned,\n.btn-filters .status-dropdown .btn.open {\n  background: none;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvbW9kdWxlcy9jcm0vYXBwb2ludG1lbnRzL3BhZ2VzL2FwcG9pbnRtZW50cy1saXN0L0M6XFxVc2Vyc1xcdGh1YW5cXE9uZURyaXZlXFxEZXNrdG9wXFxnbGF2YWwtdGh1YW5kaW5oL3NyY1xcYXBwXFxtb2R1bGVzXFxjcm1cXGFwcG9pbnRtZW50c1xccGFnZXNcXGFwcG9pbnRtZW50cy1saXN0XFxhcHBvaW50bWVudHMtbGlzdC5jb21wb25lbnQuc2NzcyIsInNyYy9hcHAvbW9kdWxlcy9jcm0vYXBwb2ludG1lbnRzL3BhZ2VzL2FwcG9pbnRtZW50cy1saXN0L2FwcG9pbnRtZW50cy1saXN0LmNvbXBvbmVudC5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0ksYUFBQTtBQ0NKOztBREVBOztFQUVJLGdCQUFBO0FDQ0oiLCJmaWxlIjoic3JjL2FwcC9tb2R1bGVzL2NybS9hcHBvaW50bWVudHMvcGFnZXMvYXBwb2ludG1lbnRzLWxpc3QvYXBwb2ludG1lbnRzLWxpc3QuY29tcG9uZW50LnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyIuaGlkZV9lbXB0eV9tZXNzYWdlIDo6bmctZGVlcCAub2RkIHtcclxuICAgIGRpc3BsYXk6IG5vbmVcclxufVxyXG5cclxuLmJ0bi1maWx0ZXJzIC5zdGF0dXMtZHJvcGRvd24gLmJ0bi5hc3NpZ25lZCxcclxuLmJ0bi1maWx0ZXJzIC5zdGF0dXMtZHJvcGRvd24gLmJ0bi5vcGVuIHtcclxuICAgIGJhY2tncm91bmQ6IG5vbmU7XHJcbn1cclxuIiwiLmhpZGVfZW1wdHlfbWVzc2FnZSA6Om5nLWRlZXAgLm9kZCB7XG4gIGRpc3BsYXk6IG5vbmU7XG59XG5cbi5idG4tZmlsdGVycyAuc3RhdHVzLWRyb3Bkb3duIC5idG4uYXNzaWduZWQsXG4uYnRuLWZpbHRlcnMgLnN0YXR1cy1kcm9wZG93biAuYnRuLm9wZW4ge1xuICBiYWNrZ3JvdW5kOiBub25lO1xufSJdfQ== */");

/***/ }),

/***/ "./src/app/modules/crm/appointments/pages/appointments-list/appointments-list.component.ts":
/*!*************************************************************************************************!*\
  !*** ./src/app/modules/crm/appointments/pages/appointments-list/appointments-list.component.ts ***!
  \*************************************************************************************************/
/*! exports provided: AppointmentsListComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppointmentsListComponent", function() { return AppointmentsListComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");
/* harmony import */ var ngx_bootstrap_modal__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ngx-bootstrap/modal */ "./node_modules/ngx-bootstrap/modal/fesm5/ngx-bootstrap-modal.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var ngx_export_as__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ngx-export-as */ "./node_modules/ngx-export-as/fesm2015/ngx-export-as.js");
/* harmony import */ var ngx_toastr__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ngx-toastr */ "./node_modules/ngx-toastr/fesm5/ngx-toastr.js");
/* harmony import */ var _ngx_translate_core__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @ngx-translate/core */ "./node_modules/@ngx-translate/core/fesm5/ngx-translate-core.js");
/* harmony import */ var angular_datatables__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! angular-datatables */ "./node_modules/angular-datatables/index.js");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! rxjs */ "./node_modules/rxjs/_esm5/index.js");
/* harmony import */ var sweetalert2__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! sweetalert2 */ "./node_modules/sweetalert2/dist/sweetalert2.all.js");
/* harmony import */ var sweetalert2__WEBPACK_IMPORTED_MODULE_10___default = /*#__PURE__*/__webpack_require__.n(sweetalert2__WEBPACK_IMPORTED_MODULE_10__);
/* harmony import */ var _core_services_appointments_service__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ../../../../../core/services/appointments.service */ "./src/app/core/services/appointments.service.ts");
/* harmony import */ var _core_services_authentication_service__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ../../../../../core/services/authentication.service */ "./src/app/core/services/authentication.service.ts");
/* harmony import */ var _components_create_appointment_create_appointment_component__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ../../components/create-appointment/create-appointment.component */ "./src/app/modules/crm/appointments/components/create-appointment/create-appointment.component.ts");
/* harmony import */ var _components_edit_appointment_edit_appointment_component__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ../../components/edit-appointment/edit-appointment.component */ "./src/app/modules/crm/appointments/components/edit-appointment/edit-appointment.component.ts");
/* harmony import */ var _core_helpers_crm_helper__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! ./../../../../../core/helpers/crm-helper */ "./src/app/core/helpers/crm-helper.ts");
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! ../../../../../../environments/environment */ "./src/environments/environment.ts");
/* harmony import */ var datatables_net__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! datatables.net */ "./node_modules/datatables.net/js/jquery.dataTables.js");
/* harmony import */ var datatables_net__WEBPACK_IMPORTED_MODULE_17___default = /*#__PURE__*/__webpack_require__.n(datatables_net__WEBPACK_IMPORTED_MODULE_17__);
/* harmony import */ var datatables_net_bs4__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! datatables.net-bs4 */ "./node_modules/datatables.net-bs4/js/dataTables.bootstrap4.js");
/* harmony import */ var datatables_net_bs4__WEBPACK_IMPORTED_MODULE_18___default = /*#__PURE__*/__webpack_require__.n(datatables_net_bs4__WEBPACK_IMPORTED_MODULE_18__);



















var AppointmentsListComponent = /** @class */ (function () {
    function AppointmentsListComponent(translate, router, route, http, exportAsService, toastr, modalService, appointmentsService, authenticationService) {
        var _this = this;
        this.translate = translate;
        this.router = router;
        this.route = route;
        this.http = http;
        this.exportAsService = exportAsService;
        this.toastr = toastr;
        this.modalService = modalService;
        this.appointmentsService = appointmentsService;
        this.authenticationService = authenticationService;
        this.dtTrigger = new rxjs__WEBPACK_IMPORTED_MODULE_9__["Subject"]();
        this.dtOptions = {};
        this.appointments = [];
        this.appointmentStatusKeyValue = _core_helpers_crm_helper__WEBPACK_IMPORTED_MODULE_15__["appointment_status_key_value"];
        this.isPageLoaded = false;
        this.exportAsConfig = {
            type: 'pdf',
            elementIdOrContent: 'appointments_table',
        };
        this.apiUrl = _environments_environment__WEBPACK_IMPORTED_MODULE_16__["environment"].apiUrl;
        this.authenticationService.loginUser.subscribe(function (x) { return _this.loginUser = x; });
    }
    AppointmentsListComponent.prototype.ngOnInit = function () {
        this.loadAppointmentDatatable();
    };
    AppointmentsListComponent.prototype.loadAppointmentDatatable = function () {
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
                    'width': '8%',
                    'target': [0]
                },
                {
                    'sortable': true,
                    'target': [0]
                },
                {
                    'sortable': true,
                    'width': '15%',
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
                    'width': '12%',
                    'target': [4]
                },
                {
                    'sortable': true,
                    'width': '12%',
                    'target': [5]
                },
                {
                    'sortable': false,
                    'target': [6],
                    'width': '5%'
                }
            ],
            buttons: [
                {
                    extend: 'csv',
                    title: this.translate.instant('appointments.title'),
                    className: 'btn btn-datatable-gredient',
                    action: function (e, dt, node, config) {
                        that.exportFiles('csv');
                    }
                }, {
                    extend: 'excel',
                    title: this.translate.instant('appointments.title'),
                    className: 'btn btn-datatable-gredient',
                    action: function (e, dt, node, config) {
                        that.exportFiles('xlsx');
                    }
                }, {
                    extend: 'pdf',
                    title: this.translate.instant('appointments.title'),
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
                    status: _this.statusfilterId
                };
                _this.http
                    .post(_this.apiUrl + '/api/all-appointments', dataTablesParameters, {})
                    .subscribe(function (resp) {
                    _this.isPageLoaded = true;
                    _this.appointments = resp.data;
                    _this.statusCount = resp;
                    _this.statusCount = _this.statusCount.statusCount;
                    callback({
                        recordsTotal: resp.recordsTotal,
                        recordsFiltered: resp.recordsFiltered,
                        data: [],
                    });
                });
            }
        };
    };
    AppointmentsListComponent.prototype.filterByStatus = function (statusID) {
        this.router.routeReuseStrategy.shouldReuseRoute = function () { return false; };
        this.router.navigate(['appointments', statusID]);
    };
    AppointmentsListComponent.prototype.ngAfterViewInit = function () {
        this.dtTrigger.next();
    };
    AppointmentsListComponent.prototype.ngOnDestroy = function () {
        this.dtTrigger.unsubscribe();
    };
    AppointmentsListComponent.prototype.rerender = function () {
        var _this = this;
        this.dtElement.dtInstance.then(function (dtInstance) {
            dtInstance.destroy();
            setTimeout(function () {
                _this.dtTrigger.next();
                if (_this.appointments.length > 0) {
                    $('.tfoot_dt').addClass('d-none');
                }
                else {
                    $('.tfoot_dt').removeClass('d-none');
                }
            });
        });
    };
    AppointmentsListComponent.prototype.exportFiles = function (type) {
        this.exportAsConfig.type = type;
        this.exportAsService.save(this.exportAsConfig, this.translate.instant('appointments.title')).subscribe(function () {
        });
    };
    AppointmentsListComponent.prototype.openAppointmentCreateModal = function () {
        var _this = this;
        var modalConfigs = {
            animated: true,
            keyboard: true,
            backdrop: true,
            ignoreBackdropClick: false,
            class: 'inmodal modal-dialog-centered modal-md animated fadeIn'
        };
        this.modalRef = this.modalService.show(_components_create_appointment_create_appointment_component__WEBPACK_IMPORTED_MODULE_13__["CreateAppointmentComponent"], modalConfigs);
        this.modalRef.content.event.subscribe(function (data) {
            _this.rerender();
        });
    };
    AppointmentsListComponent.prototype.openAppointmentEditModal = function (appointment) {
        var _this = this;
        var modalConfig = {
            animated: true,
            keyboard: true,
            backdrop: true,
            ignoreBackdropClick: false,
            class: 'inmodal modal-dialog-centered modal-md animated fadeIn',
            initialState: {
                appointment: appointment
            }
        };
        this.modalRef = this.modalService.show(_components_edit_appointment_edit_appointment_component__WEBPACK_IMPORTED_MODULE_14__["EditAppointmentComponent"], modalConfig);
        this.modalRef.content.event.subscribe(function (data) {
            _this.rerender();
        });
    };
    AppointmentsListComponent.prototype.deleteAppointment = function (id) {
        var _this = this;
        sweetalert2__WEBPACK_IMPORTED_MODULE_10___default.a.fire({
            title: this.translate.instant('common.swal.title'),
            text: this.translate.instant('common.swal.text'),
            type: 'warning',
            showCancelButton: true,
            confirmButtonText: this.translate.instant('common.swal.confirmButtonText'),
            cancelButtonText: this.translate.instant('common.swal.cancelButtonText')
        }).then(function (result) {
            if (result.value) {
                _this.appointmentsService.delete(id).subscribe(function (data) {
                    _this.toastr.success(_this.translate.instant('appointments.messages.delete'), _this.translate.instant('appointments.title'));
                    _this.rerender();
                });
            }
        });
    };
    AppointmentsListComponent.prototype.getTranslateStatus = function (statusKey) {
        return this.appointmentStatusKeyValue[statusKey];
    };
    AppointmentsListComponent.prototype.changeAppointmentStatus = function (appointmentId, status) {
        var _this = this;
        this.appointmentsService.changeStatus({ id: appointmentId, status: status.id }).subscribe(function (data) {
            _this.toastr.success(_this.translate.instant('appointments.messages.status'), _this.translate.instant('appointments.title'));
            _this.rerender();
        });
    };
    AppointmentsListComponent.ctorParameters = function () { return [
        { type: _ngx_translate_core__WEBPACK_IMPORTED_MODULE_7__["TranslateService"] },
        { type: _angular_router__WEBPACK_IMPORTED_MODULE_4__["Router"] },
        { type: _angular_router__WEBPACK_IMPORTED_MODULE_4__["ActivatedRoute"] },
        { type: _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClient"] },
        { type: ngx_export_as__WEBPACK_IMPORTED_MODULE_5__["ExportAsService"] },
        { type: ngx_toastr__WEBPACK_IMPORTED_MODULE_6__["ToastrService"] },
        { type: ngx_bootstrap_modal__WEBPACK_IMPORTED_MODULE_3__["BsModalService"] },
        { type: _core_services_appointments_service__WEBPACK_IMPORTED_MODULE_11__["AppointmentsService"] },
        { type: _core_services_authentication_service__WEBPACK_IMPORTED_MODULE_12__["AuthenticationService"] }
    ]; };
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewChild"])(angular_datatables__WEBPACK_IMPORTED_MODULE_8__["DataTableDirective"], { static: true }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", angular_datatables__WEBPACK_IMPORTED_MODULE_8__["DataTableDirective"])
    ], AppointmentsListComponent.prototype, "dtElement", void 0);
    AppointmentsListComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-appointments-list',
            template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./appointments-list.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/modules/crm/appointments/pages/appointments-list/appointments-list.component.html")).default,
            styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./appointments-list.component.scss */ "./src/app/modules/crm/appointments/pages/appointments-list/appointments-list.component.scss")).default]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_ngx_translate_core__WEBPACK_IMPORTED_MODULE_7__["TranslateService"],
            _angular_router__WEBPACK_IMPORTED_MODULE_4__["Router"],
            _angular_router__WEBPACK_IMPORTED_MODULE_4__["ActivatedRoute"],
            _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClient"],
            ngx_export_as__WEBPACK_IMPORTED_MODULE_5__["ExportAsService"],
            ngx_toastr__WEBPACK_IMPORTED_MODULE_6__["ToastrService"],
            ngx_bootstrap_modal__WEBPACK_IMPORTED_MODULE_3__["BsModalService"],
            _core_services_appointments_service__WEBPACK_IMPORTED_MODULE_11__["AppointmentsService"],
            _core_services_authentication_service__WEBPACK_IMPORTED_MODULE_12__["AuthenticationService"]])
    ], AppointmentsListComponent);
    return AppointmentsListComponent;
}());



/***/ }),

/***/ "./src/app/modules/crm/appointments/pages/appointments/appointments.component.scss":
/*!*****************************************************************************************!*\
  !*** ./src/app/modules/crm/appointments/pages/appointments/appointments.component.scss ***!
  \*****************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL21vZHVsZXMvY3JtL2FwcG9pbnRtZW50cy9wYWdlcy9hcHBvaW50bWVudHMvYXBwb2ludG1lbnRzLmNvbXBvbmVudC5zY3NzIn0= */");

/***/ }),

/***/ "./src/app/modules/crm/appointments/pages/appointments/appointments.component.ts":
/*!***************************************************************************************!*\
  !*** ./src/app/modules/crm/appointments/pages/appointments/appointments.component.ts ***!
  \***************************************************************************************/
/*! exports provided: AppointmentsComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppointmentsComponent", function() { return AppointmentsComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");
/* harmony import */ var ngx_bootstrap_modal__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ngx-bootstrap/modal */ "./node_modules/ngx-bootstrap/modal/fesm5/ngx-bootstrap-modal.js");
/* harmony import */ var ngx_toastr__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ngx-toastr */ "./node_modules/ngx-toastr/fesm5/ngx-toastr.js");
/* harmony import */ var _ngx_translate_core__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @ngx-translate/core */ "./node_modules/@ngx-translate/core/fesm5/ngx-translate-core.js");
/* harmony import */ var ngx_permissions__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ngx-permissions */ "./node_modules/ngx-permissions/ngx-permissions.umd.js");
/* harmony import */ var ngx_permissions__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(ngx_permissions__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var angular_calendar__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! angular-calendar */ "./node_modules/angular-calendar/fesm5/angular-calendar.js");
/* harmony import */ var date_fns__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! date-fns */ "./node_modules/date-fns/index.js");
/* harmony import */ var date_fns__WEBPACK_IMPORTED_MODULE_8___default = /*#__PURE__*/__webpack_require__.n(date_fns__WEBPACK_IMPORTED_MODULE_8__);
/* harmony import */ var _core_helpers_custom_event_title_formatter_provider__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../../../../../core/helpers/custom-event-title-formatter.provider */ "./src/app/core/helpers/custom-event-title-formatter.provider.ts");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! rxjs */ "./node_modules/rxjs/_esm5/index.js");
/* harmony import */ var sweetalert2__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! sweetalert2 */ "./node_modules/sweetalert2/dist/sweetalert2.all.js");
/* harmony import */ var sweetalert2__WEBPACK_IMPORTED_MODULE_11___default = /*#__PURE__*/__webpack_require__.n(sweetalert2__WEBPACK_IMPORTED_MODULE_11__);
/* harmony import */ var _core_services_appointments_service__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ../../../../../core/services/appointments.service */ "./src/app/core/services/appointments.service.ts");
/* harmony import */ var _core_services_provider_service__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ../../../../../core/services/provider.service */ "./src/app/core/services/provider.service.ts");
/* harmony import */ var _core_services_authentication_service__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ../../../../../core//services/authentication.service */ "./src/app/core/services/authentication.service.ts");
/* harmony import */ var _components_create_appointment_create_appointment_component__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! ../../components/create-appointment/create-appointment.component */ "./src/app/modules/crm/appointments/components/create-appointment/create-appointment.component.ts");
/* harmony import */ var _components_edit_appointment_edit_appointment_component__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! ../../components/edit-appointment/edit-appointment.component */ "./src/app/modules/crm/appointments/components/edit-appointment/edit-appointment.component.ts");
/* harmony import */ var moment__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! moment */ "./node_modules/moment/moment.js");
/* harmony import */ var moment__WEBPACK_IMPORTED_MODULE_17___default = /*#__PURE__*/__webpack_require__.n(moment__WEBPACK_IMPORTED_MODULE_17__);


















var AppointmentsComponent = /** @class */ (function () {
    function AppointmentsComponent(translate, ngxRolesService, http, toastr, modalService, providerService, appointmentsService, authenticationService) {
        var _this = this;
        this.translate = translate;
        this.ngxRolesService = ngxRolesService;
        this.http = http;
        this.toastr = toastr;
        this.modalService = modalService;
        this.providerService = providerService;
        this.appointmentsService = appointmentsService;
        this.authenticationService = authenticationService;
        this.isCalendarLoaded = false;
        this.view = angular_calendar__WEBPACK_IMPORTED_MODULE_7__["CalendarView"].Month;
        this.CalendarView = angular_calendar__WEBPACK_IMPORTED_MODULE_7__["CalendarView"];
        this.viewDate = new Date();
        this.refresh = new rxjs__WEBPACK_IMPORTED_MODULE_10__["Subject"]();
        this.events = this.AllCalendarEvents;
        this.activeDayIsOpen = true;
        this.minMode = 'month';
        this.appoitmentFilterKey = 0;
        this.modalConfigs = {
            animated: true,
            keyboard: true,
            backdrop: true,
            ignoreBackdropClick: false,
            class: 'inmodal modal-dialog-centered modal-md animated fadeIn'
        };
        this.authenticationService.loginUser.subscribe(function (x) { return _this.loginUser = x; });
    }
    AppointmentsComponent.prototype.ngOnInit = function () {
        this.filterDate = moment__WEBPACK_IMPORTED_MODULE_17__(this.year).format('YYYY-MM');
        this.getProviders();
    };
    AppointmentsComponent.prototype.dayClicked = function (_a) {
        var date = _a.date, events = _a.events;
        if (Object(date_fns__WEBPACK_IMPORTED_MODULE_8__["isSameMonth"])(date, this.viewDate)) {
            if ((Object(date_fns__WEBPACK_IMPORTED_MODULE_8__["isSameDay"])(this.viewDate, date) && this.activeDayIsOpen === true) ||
                events.length === 0) {
                this.activeDayIsOpen = false;
            }
            else {
                this.activeDayIsOpen = true;
            }
            this.viewDate = date;
        }
    };
    AppointmentsComponent.prototype.addEvent = function (tasks) {
        this.events = tasks;
        this.refreshView();
    };
    AppointmentsComponent.prototype.refreshView = function () {
        this.refresh.next();
    };
    AppointmentsComponent.prototype.setView = function (view) {
        this.view = view;
    };
    AppointmentsComponent.prototype.closeOpenMonthViewDay = function () {
        this.activeDayIsOpen = false;
    };
    AppointmentsComponent.prototype.getAppointments = function (status, date) {
        var _this = this;
        if (status === void 0) { status = 0; }
        this.appointmentsService.getAll(status, date)
            .subscribe(function (data) {
            _this.appointments = data;
            _this.isCalendarLoaded = true;
            _this.setCalendarData();
        });
    };
    AppointmentsComponent.prototype.filterByStatus = function (status) {
        this.appoitmentFilterKey = status;
        this.getAppointments(status, this.filterDate);
    };
    AppointmentsComponent.prototype.appointmentYearChange = function ($event) {
        this.filterDate = moment__WEBPACK_IMPORTED_MODULE_17__($event).format('YYYY-MM');
        this.getAppointments(this.appoitmentFilterKey, this.filterDate);
    };
    AppointmentsComponent.prototype.setCalendarData = function () {
        var _this = this;
        var eventsAll = [];
        var roleName = this.ngxRolesService.getRole('admin');
        var isAllowed = false;
        if ((roleName && roleName.name == 'admin') || this.loginUser.is_super_admin) {
            isAllowed = true;
        }
        this.appointments['data'].forEach(function (element) {
            var provider = _this.getProvider(element.provider_id);
            if (provider) {
                if (element.user_id == _this.loginUser.id) {
                    isAllowed = true;
                }
                if (isAllowed) {
                    eventsAll.push({
                        start: new Date(element.start_date_time),
                        end: new Date(element.end_date_time),
                        title: '(' + moment__WEBPACK_IMPORTED_MODULE_17__(element.start_date_time).format(_this.loginUser.settings.date_time_format) + ' - ' + moment__WEBPACK_IMPORTED_MODULE_17__(element.end_date_time).format(_this.loginUser.settings.date_time_format) + ') ' + provider.firstname + ' ' + provider.lastname + ' / ' + element.title,
                        allDay: true,
                        cssClass: 'event_' + element.id,
                        color: {
                            primary: provider.color,
                            secondary: provider.color
                        },
                        actions: [
                            {
                                label: '<i class="fa fa-fw fa-pencil"></i>',
                                onClick: function (_a) {
                                    var event = _a.event;
                                    _this.openAppointmentEditModal(event);
                                }
                            }, {
                                label: '<i class="fa fa-fw fa-times"></i>',
                                onClick: function (_a) {
                                    var event = _a.event;
                                    _this.deleteAppointment(event);
                                }
                            }
                        ]
                    });
                }
                else {
                    eventsAll.push({
                        start: new Date(element.start_date_time),
                        end: new Date(element.end_date_time),
                        title: '(' + moment__WEBPACK_IMPORTED_MODULE_17__(element.start_date_time).format(_this.loginUser.settings.date_time_format) + ' - ' + moment__WEBPACK_IMPORTED_MODULE_17__(element.end_date_time).format(_this.loginUser.settings.date_time_format) + ') ' + provider.firstname + ' ' + provider.lastname + ' / ' + element.title,
                        allDay: true,
                        cssClass: 'event_' + element.id,
                        color: {
                            primary: provider.color,
                            secondary: provider.color
                        },
                        actions: []
                    });
                }
            }
        });
        this.addEvent(eventsAll);
        this.AllCalendarEvents = eventsAll;
    };
    AppointmentsComponent.prototype.getProvider = function (providerId) {
        for (var iRow in this.providers) {
            if (this.providers[iRow].id == providerId) {
                return this.providers[iRow];
            }
        }
    };
    AppointmentsComponent.prototype.getAppointment = function (id) {
        for (var iRow in this.appointments['data']) {
            if (this.appointments['data'][iRow].id == id) {
                return this.appointments['data'][iRow];
            }
        }
    };
    AppointmentsComponent.prototype.getProviders = function () {
        var _this = this;
        this.providerService.getAll()
            .subscribe(function (data) {
            _this.providers = data;
            _this.getAppointments(_this.appoitmentFilterKey, _this.filterDate);
        });
    };
    AppointmentsComponent.prototype.openAppointmentCreateModal = function () {
        var _this = this;
        this.modalRef = this.modalService.show(_components_create_appointment_create_appointment_component__WEBPACK_IMPORTED_MODULE_15__["CreateAppointmentComponent"], this.modalConfigs);
        this.modalRef.content.event.subscribe(function (data) {
            _this.getAppointments(_this.appoitmentFilterKey, _this.filterDate);
        });
    };
    AppointmentsComponent.prototype.openAppointmentEditModal = function (event) {
        var _this = this;
        var appointment = this.getAppointment(parseInt(this.getSecondPartString(event.cssClass)));
        var modalConfig = {
            animated: true,
            keyboard: true,
            backdrop: true,
            ignoreBackdropClick: false,
            class: 'inmodal modal-dialog-centered modal-md animated fadeIn',
            initialState: {
                appointment: appointment
            }
        };
        this.modalRef = this.modalService.show(_components_edit_appointment_edit_appointment_component__WEBPACK_IMPORTED_MODULE_16__["EditAppointmentComponent"], modalConfig);
        this.modalRef.content.event.subscribe(function (data) {
            _this.getAppointments(_this.appoitmentFilterKey, _this.filterDate);
        });
    };
    AppointmentsComponent.prototype.deleteAppointment = function (event) {
        var _this = this;
        var appointmentId = parseInt(this.getSecondPartString(event.cssClass));
        sweetalert2__WEBPACK_IMPORTED_MODULE_11___default.a.fire({
            title: this.translate.instant('common.swal.title'),
            text: this.translate.instant('common.swal.text'),
            type: 'warning',
            showCancelButton: true,
            confirmButtonText: this.translate.instant('common.swal.confirmButtonText'),
            cancelButtonText: this.translate.instant('common.swal.cancelButtonText')
        }).then(function (result) {
            if (result.value) {
                _this.appointmentsService.delete(appointmentId)
                    .subscribe(function (data) {
                    _this.toastr.success(_this.translate.instant('appointments.messages.delete'), _this.translate.instant('appointments.title'));
                    _this.getAppointments(_this.appoitmentFilterKey, _this.filterDate);
                });
            }
        });
    };
    AppointmentsComponent.prototype.getSecondPartString = function (str) {
        return str.split('_')[1];
    };
    AppointmentsComponent.ctorParameters = function () { return [
        { type: _ngx_translate_core__WEBPACK_IMPORTED_MODULE_5__["TranslateService"] },
        { type: ngx_permissions__WEBPACK_IMPORTED_MODULE_6__["NgxRolesService"] },
        { type: _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClient"] },
        { type: ngx_toastr__WEBPACK_IMPORTED_MODULE_4__["ToastrService"] },
        { type: ngx_bootstrap_modal__WEBPACK_IMPORTED_MODULE_3__["BsModalService"] },
        { type: _core_services_provider_service__WEBPACK_IMPORTED_MODULE_13__["ProviderService"] },
        { type: _core_services_appointments_service__WEBPACK_IMPORTED_MODULE_12__["AppointmentsService"] },
        { type: _core_services_authentication_service__WEBPACK_IMPORTED_MODULE_14__["AuthenticationService"] }
    ]; };
    AppointmentsComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-appointments',
            changeDetection: _angular_core__WEBPACK_IMPORTED_MODULE_1__["ChangeDetectionStrategy"].OnPush,
            template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./appointments.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/modules/crm/appointments/pages/appointments/appointments.component.html")).default,
            providers: [{
                    provide: angular_calendar__WEBPACK_IMPORTED_MODULE_7__["CalendarEventTitleFormatter"],
                    useClass: _core_helpers_custom_event_title_formatter_provider__WEBPACK_IMPORTED_MODULE_9__["CustomEventTitleFormatter"]
                }],
            styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./appointments.component.scss */ "./src/app/modules/crm/appointments/pages/appointments/appointments.component.scss")).default]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_ngx_translate_core__WEBPACK_IMPORTED_MODULE_5__["TranslateService"],
            ngx_permissions__WEBPACK_IMPORTED_MODULE_6__["NgxRolesService"],
            _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClient"],
            ngx_toastr__WEBPACK_IMPORTED_MODULE_4__["ToastrService"],
            ngx_bootstrap_modal__WEBPACK_IMPORTED_MODULE_3__["BsModalService"],
            _core_services_provider_service__WEBPACK_IMPORTED_MODULE_13__["ProviderService"],
            _core_services_appointments_service__WEBPACK_IMPORTED_MODULE_12__["AppointmentsService"],
            _core_services_authentication_service__WEBPACK_IMPORTED_MODULE_14__["AuthenticationService"]])
    ], AppointmentsComponent);
    return AppointmentsComponent;
}());



/***/ })

}]);
//# sourceMappingURL=modules-crm-appointments-appointments-module.js.map