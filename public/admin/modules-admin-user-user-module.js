(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["modules-admin-user-user-module"],{

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/modules/admin/user/components/assign-user/assign-user.component.html":
/*!****************************************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/modules/admin/user/components/assign-user/assign-user.component.html ***!
  \****************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<div class=\"modal-header\">\r\n    <h2 class=\"modal-title font-weight-normal\">\r\n        <i aria-hidden=\"true\" class=\"fa fa-lock\"></i>&nbsp;{{'users.title3' | translate}}</h2>\r\n    <button (click)=\"bsModalRef.hide()\" aria-label=\"Close\" class=\"close\" data-dismiss=\"modal\" type=\"button\">\r\n        <span aria-hidden=\"true\">&times;</span></button>\r\n</div>\r\n<form (ngSubmit)=\"onSubmit()\" *ngIf=\"isModalLoaded\" class=\"bs4-forms\" class=\"form\">\r\n    <div class=\"modal-body\">\r\n        <div class=\"form-body\">\r\n            <div class=\"row\">\r\n                <div class=\"col-md-12\">\r\n                    <div [ngClass]=\"{ 'is-invalid': isFormSubmitted && checkObjectKeys() }\" class=\"form-group\">\r\n                        <label>{{'users.create.fields.select_users' | translate}}&nbsp;<span class=\"text-danger\">*</span></label>\r\n                        <div class=\"col-sm-12\">\r\n                            <div *ngFor=\"let permission of permissions | keyvalue; let $index=index;\" class=\"form-check i-child-checks m-b-xs\">\r\n                                <div>\r\n                                    <label class=\"checkbox-container\">\r\n                                        <input (change)=\"changePermissions($index, permission.key)\" [checked]=\"isPermissionChecked(permission.key, assignPermissions, $index)\" name=\"parent_{{$index}}\" type=\"checkbox\"/>\r\n                                        {{permissionsUsers[permission.key].name}}\r\n                                        <span class=\"checkbox-checkmark\"></span>\r\n                                    </label>\r\n                                </div>\r\n                                <div [hidden]=\"!hideElements[$index]\" class=\"col-sm-12 hide\">\r\n                                    <div class=\"form-row\">\r\n                                        <div *ngFor=\"let pValue of permission.value\" class=\"col-sm-3 col-12 m-xs\">\r\n                                            <label class=\"checkbox-container\">\r\n                                                <input [(checklist)]=\"assignPermissions[permission.key]\" [checklistValue]=\"pValue\" [disabled]=\"pValue === 'view'\" name=\"child_{{$index}}\" type=\"checkbox\"/>\r\n                                                {{pValue | titlecase}}\r\n                                                <span class=\"checkbox-checkmark\"></span>\r\n                                            </label>\r\n                                        </div>\r\n                                    </div>\r\n                                </div>\r\n                            </div>\r\n                            <div *ngIf=\"isFormSubmitted && checkObjectKeys()\" class=\"invalid-feedback\">{{'users.create.error_messages.message20' | translate}}</div>\r\n                        </div>\r\n                    </div>\r\n                </div>\r\n            </div>\r\n        </div>\r\n    </div>\r\n    <div class=\"modal-footer\">\r\n        <button (click)=\"onCancel()\" class=\"btn btn-cancel mb-0\" type=\"button\">{{'common.cancel' | translate}}</button>\r\n        <button class=\"btn btn-submit mb-0\" type=\"submit\">{{'common.assign' | translate}}</button>\r\n    </div>\r\n</form>\r\n");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/modules/admin/user/components/change-email-modal/change-email-modal.component.html":
/*!******************************************************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/modules/admin/user/components/change-email-modal/change-email-modal.component.html ***!
  \******************************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<div class=\"modal-header\">\r\n    <h2 class=\"modal-title\"><i aria-hidden=\"true\" class=\"fa fa-envelope\"></i>&nbsp;{{'users.title4' | translate}}</h2>\r\n    <button (click)=\"bsModalRef.hide()\" aria-label=\"Close\" class=\"close\" data-dismiss=\"modal\" type=\"button\">\r\n        <span aria-hidden=\"true\">&times;</span></button>\r\n</div>\r\n<form (ngSubmit)=\"onSubmit()\" [formGroup]=\"changeUserEmailForm\" class=\"bs4-forms\">\r\n    <div class=\"modal-body\">\r\n        <div class=\"form-body\">\r\n            <div class=\"row\">\r\n                <div class=\"col-md-12\">\r\n                    <div class=\"form-group\">\r\n                        <label for=\"email\">{{'users.create.fields.email' | translate}}&nbsp;<span class=\"text-danger\">*</span></label>\r\n                        <input [ngClass]=\"{ 'is-invalid': isFormSubmitted && userControl.email.errors }\" class=\"form-control\" formControlName=\"email\" id=\"email\" placeholder=\"{{'users.create.placeholders.placeholder3' | translate}}\" type=\"email\"/>\r\n                        <div *ngIf=\"isFormSubmitted && userControl.email.errors\" class=\"invalid-feedback\">\r\n                            <div *ngIf=\"userControl.email.errors.required\">{{'users.create.error_messages.message5' | translate}}</div>\r\n                            <div *ngIf=\"userControl.email.errors.email\">{{'users.create.error_messages.message6' | translate}}</div>\r\n                        </div>\r\n                    </div>\r\n                </div>\r\n                <div class=\"col-md-12\">\r\n                    <div class=\"form-group\">\r\n                        <label for=\"password\">{{'users.create.fields.password' | translate}}&nbsp;<span class=\"text-danger\">*</span></label>\r\n                        <input [ngClass]=\"{ 'is-invalid': isFormSubmitted && userControl.password.errors }\" class=\"form-control\" formControlName=\"password\" id=\"password\" placeholder=\"{{'users.create.placeholders.placeholder4' | translate}}\" type=\"password\"/>\r\n                        <div *ngIf=\"isFormSubmitted && userControl.password.errors\" class=\"invalid-feedback\">\r\n                            <div *ngIf=\"userControl.password.errors.required\">{{'users.create.error_messages.message7' | translate}}</div>\r\n                        </div>\r\n                    </div>\r\n                </div>\r\n            </div>\r\n        </div>\r\n    </div>\r\n    <div class=\"modal-footer\">\r\n        <button (click)=\"onCancel()\" class=\"btn btn-cancel mb-0\" data-dismiss=\"modal\" type=\"button\">{{'common.cancel' | translate}}</button>\r\n        <button class=\"btn btn-submit mb-0\" type=\"submit\"><span>{{'common.update' | translate}}</span></button>\r\n    </div>\r\n</form>\r\n");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/modules/admin/user/components/change-password-modal/change-password-modal.component.html":
/*!************************************************************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/modules/admin/user/components/change-password-modal/change-password-modal.component.html ***!
  \************************************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<div class=\"modal-header\">\r\n    <h2 class=\"modal-title font-weight-normal\">\r\n        <i aria-hidden=\"true\" class=\"fa fa-lock\"></i>&nbsp;{{'users.title5' | translate}}</h2>\r\n    <button (click)=\"bsModalRef.hide()\" aria-label=\"Close\" class=\"close\" data-dismiss=\"modal\" type=\"button\">\r\n        <span aria-hidden=\"true\">&times;</span></button>\r\n</div>\r\n<form (ngSubmit)=\"onSubmit()\" [formGroup]=\"changeUserPasswordForm\" class=\"bs4-forms\">\r\n    <div class=\"modal-body\">\r\n        <div class=\"form-body\">\r\n            <div class=\"row\">\r\n                <div class=\"col-md-12\">\r\n                    <div class=\"form-group\">\r\n                        <label for=\"old_password\">{{'users.create.fields.old_password' | translate}}&nbsp;<span class=\"text-danger\">*</span></label>\r\n                        <input [ngClass]=\"{ 'is-invalid': isFormSubmitted && userControl.old_password.errors }\" class=\"form-control\" formControlName=\"old_password\" id=\"old_password\" placeholder=\"{{'users.create.placeholders.placeholder11' | translate}}\" type=\"password\"/>\r\n                        <div *ngIf=\"isFormSubmitted && userControl.old_password.errors\" class=\"invalid-feedback\">\r\n                            <div *ngIf=\"userControl.old_password.errors.required\">{{'users.create.error_messages.message7' | translate}}</div>\r\n                        </div>\r\n                    </div>\r\n                </div>\r\n                <div class=\"col-md-12\">\r\n                    <div class=\"form-group\">\r\n                        <label for=\"password\">{{'users.create.fields.new_password' | translate}}&nbsp;<span class=\"text-danger\">*</span></label>\r\n                        <input [ngClass]=\"{ 'is-invalid': isFormSubmitted && userControl.password.errors }\" class=\"form-control\" formControlName=\"password\" id=\"password\" placeholder=\"{{'users.create.placeholders.placeholder4' | translate}}\" type=\"password\"/>\r\n                        <div *ngIf=\"isFormSubmitted && userControl.password.errors\" class=\"invalid-feedback\">\r\n                            <div *ngIf=\"userControl.password.errors.required\">{{'users.create.error_messages.message7' | translate}}</div>\r\n                            <div *ngIf=\"userControl.password.errors.minlength || userControl.password.errors.maxlength\">{{'users.create.error_messages.message8' | translate}}</div>\r\n                        </div>\r\n                    </div>\r\n                </div>\r\n                <div class=\"col-md-12\">\r\n                    <div class=\"form-group\">\r\n                        <label for=\"password_confirmation\">{{'users.create.fields.confirm_password' | translate}}&nbsp;<span class=\"text-danger\">*</span></label>\r\n                        <input [ngClass]=\"{ 'is-invalid': isFormSubmitted && userControl.password_confirmation.errors }\" autocomplete=\"off\" class=\"form-control\" formControlName=\"password_confirmation\" id=\"password_confirmation\" placeholder=\"{{'users.create.placeholders.placeholder5' | translate}}\" type=\"password\"/>\r\n                        <div *ngIf=\"isFormSubmitted && userControl.password_confirmation.errors\" class=\"invalid-feedback\">\r\n                            <div *ngIf=\"userControl.password_confirmation.errors.required\">{{'users.create.error_messages.message9' | translate}}</div>\r\n                            <div *ngIf=\"userControl.password_confirmation.errors.mustMatch\">{{'users.create.error_messages.message10' | translate}}</div>\r\n                        </div>\r\n                    </div>\r\n                </div>\r\n            </div>\r\n        </div>\r\n    </div>\r\n    <div class=\"modal-footer\">\r\n        <button (click)=\"onCancel()\" class=\"btn btn-cancel mb-0\" data-dismiss=\"modal\" type=\"button\">{{'common.close' | translate}}</button>\r\n        <button class=\"btn btn-submit mb-0\" type=\"submit\"><span>{{'common.change' | translate}}</span></button>\r\n    </div>\r\n</form>\r\n");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/modules/admin/user/components/import-user/import-user.component.html":
/*!****************************************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/modules/admin/user/components/import-user/import-user.component.html ***!
  \****************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<div class=\"modal-header\">\r\n    <h2 class=\"modal-title font-weight-normal\">\r\n        <i aria-hidden=\"true\" class=\"fa fa-users modal-icon\"></i>&nbsp;{{'users.title6' | translate}}</h2>\r\n    <button (click)=\"onCancel()\" class=\"close\" type=\"button\"><span aria-hidden=\"true\">&times;</span></button>\r\n</div>\r\n<form class=\"form\">\r\n    <div class=\"modal-body\">\r\n        <div class=\"form-body\">\r\n            <div class=\"row\">\r\n                <div class=\"col-md-12\">\r\n                    <div class=\"form-group\">\r\n                        <label>{{'users.create.fields.csv_file' | translate}}\r\n                            <span class=\"text-danger\">*</span></label><br>\r\n                        <input (change)=\"fileUpload($event.target.files)\" accept=\".csv\" class=\"mb-3 btn btn-secondary\" id=\"file\" type=\"file\">\r\n                        <div *ngIf=\"!csvFileSelected && isFormSubmitted\" class=\"text-danger\">{{'users.create.error_messages.message21' | translate}}</div>\r\n                    </div>\r\n                </div>\r\n            </div>\r\n        </div>\r\n    </div>\r\n    <div class=\"modal-footer\">\r\n        <button (click)=\"onCancel()\" class=\"btn btn-cancel mb-0\" type=\"button\">{{'common.close' | translate}}</button>\r\n        <button (click)=\"onSubmit()\" class=\"btn btn-submit mb-0\">{{'common.import' | translate}}</button>\r\n    </div>\r\n</form>\r\n");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/modules/admin/user/components/user-activities/user-activities.component.html":
/*!************************************************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/modules/admin/user/components/user-activities/user-activities.component.html ***!
  \************************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<!-- Card header -->\r\n<div class=\"card-header pl-0 pb-0 pr-0 border-bottom\">\r\n    <h4 class=\"main-title mt-2\"><span>{{'activities.title' | translate}}</span></h4>\r\n</div><!-- Card body -->\r\n<div class=\"card-body pt-3 hide_empty_message\">\r\n    <div class=\"row\">\r\n        <div class=\"col-sm-12\">\r\n            <div class=\"table-responsive-xs table-responsive-sm table-responsive-md table-responsive-lg table-responsive-xl\">\r\n                <table [dtOptions]=\"dtOptions\" [dtTrigger]=\"dtTrigger\" class=\"table table-bordered table-hover b4-datatable\" datatable id=\"role_table\" width=\"100%\">\r\n                    <thead>\r\n                    <tr>\r\n                        <th>{{ 'activities.columns.date' | translate }}</th>\r\n                        <th>{{ 'activities.columns.module' | translate }}</th>\r\n                        <th>{{ 'activities.columns.activity' | translate }}</th>\r\n                    </tr>\r\n                    </thead>\r\n                    <tbody *ngIf=\"activities?.length != 0\">\r\n                    <tr *ngFor=\"let activity of activities; index as i\">\r\n                        <td>{{activity.created_at | dateTimeFormatFilter: loginUser.settings.date_time_format}}</td>\r\n                        <td class=\"budges-status\"><span class=\"open\">{{activity.module}}</span></td>\r\n                        <td [innerHTML]=\"activity.description\"></td>\r\n                    </tr>\r\n                    </tbody>\r\n                    <tfoot *ngIf=\"activities?.length == 0\" class=\"tfoot_dt\">\r\n                    <tr>\r\n                        <td class=\"no-data-available\" class=\"text-center\" colspan=\"3\">{{'common.datatable.sEmptyTable' | translate}}</td>\r\n                    </tr>\r\n                    </tfoot>\r\n                </table>\r\n            </div>\r\n        </div>\r\n    </div>\r\n</div>\r\n");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/modules/admin/user/components/user-avatar-modal/user-avatar-modal.component.html":
/*!****************************************************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/modules/admin/user/components/user-avatar-modal/user-avatar-modal.component.html ***!
  \****************************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<div class=\"modal-header\">\r\n    <h2 class=\"modal-title font-weight-normal\">\r\n        <i aria-hidden=\"true\" class=\"fa fa-user\"></i>&nbsp;{{'users.title7' | translate}}</h2>\r\n    <button (click)=\"bsModalRef.hide()\" aria-label=\"Close\" class=\"close\" data-dismiss=\"modal\" type=\"button\">\r\n        <span aria-hidden=\"true\">&times;</span></button>\r\n</div>\r\n<form (ngSubmit)=\"onSubmit()\" class=\"bs4-forms\">\r\n    <div class=\"modal-body\">\r\n        <div class=\"form-row\">\r\n            <div class=\"col-12\">\r\n                <div #profileDropzone class=\"dropzone dz-clickable\">\r\n                    <div *ngIf=\"isProfileLoaded && usersData.avatar\" class=\"dz-preview dz-image-preview\">\r\n                        <div class=\"dz-image\">\r\n                            <img src=\"{{apiUrl}}/uploads/profile/{{usersData.avatar}}\"/>\r\n                        </div>\r\n                        <a (click)=\"removeDropzoneImage()\" class=\"btn btn-sm btn-block\">{{'common.remove_file' | translate}}</a>\r\n                    </div>\r\n                    <div class=\"dz-default dz-message\">\r\n                        <span><strong>{{'users.create.error_messages.message11' | translate}}</strong></span>\r\n                    </div>\r\n                </div>\r\n                <div class=\"people-lists text-center\">\r\n                    <a (click)=\"setAvatar(avatar)\" *ngFor=\"let avatar of avatars;\" [ngClass]=\"{active: isActive(avatar)}\" class=\"btn btn-profile-danger rounded-circle text-dark\">\r\n                        <img alt=\"Profile\" class=\"img-sm rounded-circle\" src=\"{{apiUrl}}/uploads/profile/{{avatar}}\"/>\r\n                    </a>\r\n                </div>\r\n            </div>\r\n        </div>\r\n    </div>\r\n    <div class=\"modal-footer\">\r\n        <button (click)=\"onCancel()\" class=\"btn btn-cancel mb-0\" data-dismiss=\"modal\" type=\"button\">{{'common.close' | translate}}</button>\r\n        <button class=\"btn btn-submit mb-0\" type=\"submit\"><span>{{'common.update' | translate}}</span></button>\r\n    </div>\r\n</form>\r\n");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/modules/admin/user/components/user-defects/user-defects.component.html":
/*!******************************************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/modules/admin/user/components/user-defects/user-defects.component.html ***!
  \******************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<!-- Card header -->\r\n<div class=\"card-header pl-0 pb-0 pr-0 border-bottom\">\r\n    <h4 class=\"main-title mt-2\"><span>{{'defects.title' | translate}}</span></h4>\r\n</div><!-- Card body -->\r\n<div class=\"card-body pt-3 hide_empty_message\">\r\n    <div class=\"row\">\r\n        <div class=\"col-sm-12\">\r\n            <div class=\"table-responsive-xs table-responsive-sm table-responsive-md table-responsive-lg table-responsive-xl\">\r\n                <table [dtOptions]=\"dtOptions\" [dtTrigger]=\"dtTrigger\" class=\"table table-bordered table-hover b4-datatable\" datatable id=\"defects_table\" width=\"100%\">\r\n                    <thead>\r\n                    <tr>\r\n                        <th>{{ 'defects.columns.id' | translate }}</th>\r\n                        <th>{{ 'defects.columns.defect_name' | translate }}</th>\r\n                        <th>{{ 'defects.columns.start_date' | translate }}</th>\r\n                        <th>{{ 'defects.columns.end_date' | translate }}</th>\r\n                        <th>{{ 'defects.columns.type' | translate }}</th>\r\n                        <th>{{ 'defects.columns.severity' | translate }}</th>\r\n                        <th>{{ 'defects.columns.status' | translate }}</th>\r\n                    </tr>\r\n                    </thead>\r\n                    <tbody *ngIf=\"defects?.length != 0\">\r\n                    <tr *ngFor=\"let defect of defects\">\r\n                        <td>{{defect.generated_id}}</td>\r\n                        <td>{{defect.defect_name}}</td>\r\n                        <td>{{defect.start_date | dateTimeFormatFilter: loginUser.settings.date_format}}</td>\r\n                        <td>{{defect.end_date | dateTimeFormatFilter: loginUser.settings.date_format}}</td>\r\n                        <td class=\"budges-status\">\r\n                            <ng-container *ngFor=\"let type of ('defects.defect_types' | translate)\">\r\n                                <span *ngIf=\"type.id == defect.defect_type\" class=\"badge badge-secondary\">{{type.label}}</span>\r\n                            </ng-container>\r\n                        </td>\r\n                        <td class=\"budges-status\">\r\n                            <ng-container *ngFor=\"let severity of ('defects.severities' | translate)\">\r\n                                <span *ngIf=\"severity.id == defect.severity\" class=\"{{severity.class}}\">{{severity.label | translate}}</span>\r\n                            </ng-container>\r\n                        </td>\r\n                        <td class=\"budges-status\">\r\n                            <ng-container *ngFor=\"let status of ('defects.status' | translate)\">\r\n                                <span *ngIf=\"status.id == defect.status\" class=\"{{status.class}}\">{{status.label | translate}}</span>\r\n                            </ng-container>\r\n                        </td>\r\n                    </tr>\r\n                    </tbody>\r\n                    <tfoot *ngIf=\"defects?.length == 0\" class=\"tfoot_dt\">\r\n                    <tr>\r\n                        <td class=\"no-data-available text-center\" colspan=\"7\">{{'common.datatable.sEmptyTable' | translate}}</td>\r\n                    </tr>\r\n                    </tfoot>\r\n                </table>\r\n            </div>\r\n        </div>\r\n    </div>\r\n</div>\r\n");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/modules/admin/user/components/user-detail-update/user-detail-update.component.html":
/*!******************************************************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/modules/admin/user/components/user-detail-update/user-detail-update.component.html ***!
  \******************************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<div *ngIf=\"isPageLoad\" class=\"card-content\">\r\n    <div class=\"card-body\">\r\n        <div class=\"row\">\r\n            <!-- Detail fields -->\r\n            <div class=\"col-md-12\">\r\n                <h4 class=\"main-title mt-2 float-left\"><span>{{user.firstname}} {{user.lastname}}</span></h4>\r\n                <div class=\"float-right mb-3\">\r\n                    <button (click)=\"openAvatarChangeModal()\" *ngIf=\"permission\" class=\"btn btn-create w-auto mr-2\">\r\n                        <i class=\"fa fa-user\"></i><span>{{'users.title7' | translate}}</span></button>\r\n                    <button (click)=\"changeEmail()\" *ngIf=\"permission\" class=\"btn btn-create w-auto mr-2\">\r\n                        <i class=\"fa fa-envelope\"></i><span>{{'users.title4' | translate}}</span></button>\r\n                    <button (click)=\"changePassword()\" *ngIf=\"permission\" class=\"btn btn-create w-auto\">\r\n                        <i class=\"fa fa-lock\"></i><span>{{'users.title5' | translate}}</span></button>\r\n                </div>\r\n            </div>\r\n        </div>\r\n        <div class=\"row\">\r\n            <form class=\"form-body\">\r\n                <!-- Detail fields -->\r\n                <div class=\"col-md-12\">\r\n                    <div class=\"row\">\r\n                        <div class=\"col-lg-4 col-md-6 mb-3\">\r\n                            <label>{{'users.create.fields.employment_ID' | translate}}</label>\r\n                            <div class=\"detail-inline\">{{user.emp_id}}</div>\r\n                        </div>\r\n                        <div class=\"col-lg-4 col-md-6 mb-3\">\r\n                            <label>{{'users.create.fields.first_name' | translate}}</label>\r\n                            <div class=\"detail-inline\">\r\n                                <ng-container *ngIf=\"permission; else elseBlock1\">\r\n                                    <inline-edit-input (updateValue)=\"saveUserDetail('firstname', $event);\" [elementFor]=\"'users.inline_edit.first_name' | translate\" [fieldValue]=\"user.firstname\" [isRequired]=\"'true'\" [maxLength]=\"20\" [name]=\"'firstname'\" [type]=\"'text'\"></inline-edit-input>\r\n                                </ng-container>\r\n                                <ng-template #elseBlock1>{{user.firstname}}</ng-template>\r\n                            </div>\r\n                        </div>\r\n                        <div class=\"col-lg-4 col-md-6 mb-3\">\r\n                            <label>{{'users.create.fields.last_name' | translate}}</label>\r\n                            <div class=\"detail-inline\">\r\n                                <ng-container *ngIf=\"permission; else elseBlock2\">\r\n                                    <inline-edit-input (updateValue)=\"saveUserDetail('lastname', $event);\" [elementFor]=\"'users.inline_edit.last_name' | translate\" [fieldValue]=\"user.lastname\" [isRequired]=\"'true'\" [maxLength]=\"20\" [name]=\"'lastname'\" [type]=\"'text'\"></inline-edit-input>\r\n                                </ng-container>\r\n                                <ng-template #elseBlock2>{{user.lastname}}</ng-template>\r\n                            </div>\r\n                        </div>\r\n                        <div class=\"col-lg-4 col-md-6 mb-3\">\r\n                            <label>{{'users.create.fields.username' | translate}}</label>\r\n                            <div class=\"detail-inline\">\r\n                                <ng-container *ngIf=\"permission; else elseBlock3\">\r\n                                    <inline-edit-input (updateValue)=\"saveUserDetail('username', $event);\" [elementFor]=\"'users.inline_edit.username' | translate\" [fieldValue]=\"user.username\" [isRequired]=\"'true'\" [maxLength]=\"30\" [minLength]=\"3\" [name]=\"'username'\" [type]=\"'text'\" pattern=\"^\\S*$\"></inline-edit-input>\r\n                                </ng-container>\r\n                                <ng-template #elseBlock3>{{user.username}}</ng-template>\r\n                            </div>\r\n                        </div>\r\n                        <div *ngIf=\"user.is_client == 0\" class=\"col-lg-4 col-md-6 mb-3\">\r\n                            <label>{{'users.create.fields.primary_manager' | translate}}</label>\r\n                            <div class=\"detail-inline\">\r\n                                <ng-container *ngIf=\"permission; else elseBlock15\">\r\n                                    <inline-edit-select (updateValue)=\"saveUserDetail('primary_manager', $event);\" [elementFor]=\"'users.inline_edit.primary_manager' | translate\" [isRequired]=\"'false'\" [name]=\"'primary_manager'\" [options]=\"users\" [selectedValue]=\"user.primary_manager\" [txtField]=\"'primary_manager'\"></inline-edit-select>\r\n                                </ng-container>\r\n                                <ng-template #elseBlock15>\r\n                                    <ng-container *ngFor=\"let loop_user of users;\">\r\n                                        <span *ngIf=\"user.primary_manager == loop_user.value\">{{loop_user.label}}</span>\r\n                                    </ng-container>\r\n                                </ng-template>\r\n                            </div>\r\n                        </div>\r\n                        <div *ngIf=\"user.is_client == 0\" class=\"col-lg-4 col-md-6 mb-3\">\r\n                            <label>{{'users.create.fields.secondary_manager' | translate}}</label>\r\n                            <div class=\"detail-inline\">\r\n                                <ng-container *ngIf=\"permission; else elseBlock16\">\r\n                                    <inline-edit-select (updateValue)=\"saveUserDetail('secondary_manager', $event);\" [elementFor]=\"'users.inline_edit.secondary_manager' | translate\" [isRequired]=\"'false'\" [name]=\"'secondary_manager'\" [options]=\"users\" [selectedValue]=\"user.secondary_manager\" [txtField]=\"'secondary_manager'\"></inline-edit-select>\r\n                                </ng-container>\r\n                                <ng-template #elseBlock16>\r\n                                    <ng-container *ngFor=\"let loop_user of users;\">\r\n                                        <span *ngIf=\"user.secondary_manager == loop_user.value\">{{loop_user.label}}</span>\r\n                                    </ng-container>\r\n                                </ng-template>\r\n                            </div>\r\n                        </div>\r\n                        <div class=\"col-lg-4 col-md-6 mb-3\">\r\n                            <label>{{'users.create.fields.joining_date' | translate}}</label>\r\n                            <div class=\"detail-inline\">\r\n                                <ng-container *ngIf=\"permission; else elseBlock7\">\r\n                                    <inline-edit-date (updateValue)=\"saveUserDetail('joining_date', $event);\" [datepickerConfigs]=\"datepickerConfigs\" [elementFor]=\"'users.inline_edit.joining_date' | translate\" [fieldValue]=\"user.joining_date\" [format]=\"loginUser.settings.date_format\" [isRequired]=\"'false'\" [name]=\"'joindate'\"></inline-edit-date>\r\n                                </ng-container>\r\n                                <ng-template #elseBlock7>\r\n                                    {{user.joining_date | dateTimeFormatFilter: loginUser.settings.date_format}}\r\n                                </ng-template>\r\n                            </div>\r\n                        </div>\r\n                    </div>\r\n                    <h4 class=\"main-title mt-2\"><span>{{'users.headings.head1' | translate}}</span></h4>\r\n                    <div class=\"row\">\r\n                        <div class=\"col-lg-4 col-md-6 mb-3\">\r\n                            <label>{{'users.create.fields.father_name' | translate}}</label>\r\n                            <div class=\"detail-inline\">\r\n                                <ng-container *ngIf=\"permission; else elseBlock5\">\r\n                                    <inline-edit-input (updateValue)=\"saveUserDetail('father_name', $event);\" [elementFor]=\"'users.inline_edit.father_name' | translate\" [fieldValue]=\"user.father_name\" [isRequired]=\"'false'\" [name]=\"'father_name'\" [type]=\"'text'\"></inline-edit-input>\r\n                                </ng-container>\r\n                                <ng-template #elseBlock5>{{user.father_name}}</ng-template>\r\n                            </div>\r\n                        </div>\r\n                        <div class=\"col-lg-4 col-md-6 mb-3\">\r\n                            <label>{{'users.create.fields.mother_name' | translate}}</label>\r\n                            <div class=\"detail-inline\">\r\n                                <ng-container *ngIf=\"permission; else elseBlock6\">\r\n                                    <inline-edit-input (updateValue)=\"saveUserDetail('mother_name', $event);\" [elementFor]=\"'users.inline_edit.mother_name' | translate\" [fieldValue]=\"user.mother_name\" [isRequired]=\"'false'\" [name]=\"'mother_name'\" [type]=\"'text'\"></inline-edit-input>\r\n                                </ng-container>\r\n                                <ng-template #elseBlock6>{{user.mother_name}}</ng-template>\r\n                            </div>\r\n                        </div>\r\n                        <div class=\"col-lg-4 col-md-6 mb-3\">\r\n                            <label>{{'users.create.fields.gender' | translate}}</label>\r\n                            <div class=\"detail-inline\">\r\n                                <ng-container *ngIf=\"permission; else elseBlock4\">\r\n                                    <inline-edit-select (updateValue)=\"saveUserDetail('gender', $event);\" [elementFor]=\"'users.inline_edit.gender' | translate\" [isRequired]=\"'true'\" [name]=\"'gender'\" [options]=\"('users.gender_options' | translate)\" [selectedValue]=\"user.gender\" [txtField]=\"'gender'\"></inline-edit-select>\r\n                                </ng-container>\r\n                                <ng-template #elseBlock4>\r\n                                    <ng-container *ngFor=\"let gender of ('users.gender_options' | translate)\">\r\n                                        <span *ngIf=\"user.gender == gender.value\">{{gender.label}}</span>\r\n                                    </ng-container>\r\n                                </ng-template>\r\n                            </div>\r\n                        </div>\r\n                        <div class=\"col-lg-4 col-md-6 mb-3\">\r\n                            <label>{{'users.create.fields.dob' | translate}}</label>\r\n                            <div class=\"detail-inline\">\r\n                                <ng-container *ngIf=\"permission; else elseBlock8\">\r\n                                    <inline-edit-date (updateValue)=\"saveUserDetail('dob', $event);\" [datepickerConfigs]=\"datepickerConfigs\" [elementFor]=\"'users.inline_edit.dob' | translate\" [fieldValue]=\"user.dob\" [format]=\"loginUser.settings.date_format\" [isRequired]=\"'false'\" [name]=\"'dob'\"></inline-edit-date>\r\n                                </ng-container>\r\n                                <ng-template #elseBlock8>\r\n                                    {{user.dob | dateTimeFormatFilter: loginUser.settings.date_format}}\r\n                                </ng-template>\r\n                            </div>\r\n                        </div>\r\n                        <div class=\"col-lg-4 col-md-6 mb-3\">\r\n                            <label>{{'users.create.fields.marital_status' | translate}}</label>\r\n                            <div class=\"detail-inline\">\r\n                                <ng-container *ngIf=\"permission; else elseBlock9\">\r\n                                    <inline-edit-select (updateValue)=\"saveUserDetail('maritial_status', $event);\" [elementFor]=\"'users.inline_edit.maritial_status' | translate\" [isRequired]=\"'false'\" [name]=\"'maritial_status'\" [options]=\"('users.marital_status' | translate)\" [selectedValue]=\"user.maritial_status\" [txtField]=\"'maritial status'\"></inline-edit-select>\r\n                                </ng-container>\r\n                                <ng-template #elseBlock9>\r\n                                    <ng-container *ngFor=\"let marital of ('users.marital_status' | translate)\">\r\n                                        <span *ngIf=\"user.maritial_status == marital.value\">{{marital.label}}</span>\r\n                                    </ng-container>\r\n                                </ng-template>\r\n                            </div>\r\n                        </div>\r\n                        <div class=\"col-lg-4 col-md-6 mb-3\">\r\n                            <label>{{'users.create.fields.language' | translate}}</label>\r\n                            <div class=\"detail-inline\">\r\n                                <ng-container *ngIf=\"permission; else elseBlock11\">\r\n                                    <inline-edit-select (updateValue)=\"saveUserDetail('language', $event);\" [elementFor]=\"'users.inline_edit.language' | translate\" [isRequired]=\"'false'\" [name]=\"'language'\" [options]=\"languages\" [selectedValue]=\"user.language\" [txtField]=\"'language'\"></inline-edit-select>\r\n                                </ng-container>\r\n                                <ng-template #elseBlock11>\r\n                                    <ng-container *ngFor=\"let language of languages\">\r\n                                        <span *ngIf=\"user.language == language.value\">{{language.label}}</span>\r\n                                    </ng-container>\r\n                                </ng-template>\r\n                            </div>\r\n                        </div>\r\n                    </div>\r\n                    <h4 class=\"main-title mt-2\"><span>{{'users.headings.head4' | translate}}</span></h4>\r\n                    <div class=\"row\">\r\n                        <div class=\"col-lg-4 col-md-6 mb-3\">\r\n                            <label>{{'users.create.fields.email' | translate}}</label>\r\n                            <div class=\"detail-inline\">{{user.email}}</div>\r\n                        </div>\r\n                        <div class=\"col-lg-4 col-md-6 mb-3\">\r\n                            <label>{{'users.create.fields.skype' | translate}}</label>\r\n                            <div class=\"detail-inline\">\r\n                                <ng-container *ngIf=\"permission; else elseBlock12\">\r\n                                    <inline-edit-input (updateValue)=\"saveUserDetail('skype', $event);\" [elementFor]=\"'users.inline_edit.skype' | translate\" [fieldValue]=\"user.skype\" [isRequired]=\"'false'\" [name]=\"'skype'\" [type]=\"'text'\"></inline-edit-input>\r\n                                </ng-container>\r\n                                <ng-template #elseBlock12>{{user.skype}}</ng-template>\r\n                            </div>\r\n                        </div>\r\n                        <div class=\"col-lg-4 col-md-6 mb-3\">\r\n                            <label>{{'users.create.fields.mobile' | translate}}</label>\r\n                            <div class=\"detail-inline\">\r\n                                <ng-container *ngIf=\"permission; else elseBlock13\">\r\n                                    <inline-edit-input (updateValue)=\"saveUserDetail('mobile', $event);\" [elementFor]=\"'users.inline_edit.mobile' | translate\" [fieldValue]=\"user.mobile\" [isRequired]=\"'false'\" [name]=\"'mobile'\" [type]=\"'text'\" pattern=\"^(?:[+])?(\\d[ -]?){1,15}$\"></inline-edit-input>\r\n                                </ng-container>\r\n                                <ng-template #elseBlock13>{{user.mobile}}</ng-template>\r\n                            </div>\r\n                        </div>\r\n                        <div class=\"col-lg-4 col-md-6 mb-3\">\r\n                            <label>{{'users.create.fields.phone' | translate}}</label>\r\n                            <div class=\"detail-inline\">\r\n                                <ng-container *ngIf=\"permission; else elseBlock14\">\r\n                                    <inline-edit-input (updateValue)=\"saveUserDetail('phone', $event);\" [elementFor]=\"'users.inline_edit.phone' | translate\" [fieldValue]=\"user.phone\" [isRequired]=\"'false'\" [name]=\"'phone'\" [type]=\"'text'\" pattern=\"^(?:[+])?(\\d[ -]?){1,15}$\"></inline-edit-input>\r\n                                </ng-container>\r\n                                <ng-template #elseBlock14>{{user.phone}}</ng-template>\r\n                            </div>\r\n                        </div>\r\n                        <div class=\"col-lg-4 col-md-6 mb-3\">\r\n                            <label>{{'users.create.fields.address' | translate}}</label>\r\n                            <div class=\"detail-inline\">\r\n                                <ng-container *ngIf=\"permission; else elseBlock17\">\r\n                                    <inline-edit-textarea (updateValue)=\"saveUserDetail('address', $event);\" [elementFor]=\"'users.inline_edit.address' | translate\" [fieldValue]=\"user.address\" [isRequired]=\"'false'\" [name]=\"'address'\"></inline-edit-textarea>\r\n                                </ng-container>\r\n                                <ng-template #elseBlock17>{{user.address}}</ng-template>\r\n                            </div>\r\n                        </div>\r\n                        <div class=\"col-lg-4 col-md-6 mb-3\">\r\n                            <label>{{'users.create.fields.country' | translate}}</label>\r\n                            <div class=\"detail-inline\">\r\n                                <ng-container *ngIf=\"permission; else elseBlock10\">\r\n                                    <inline-edit-select (updateValue)=\"saveUserDetail('country', $event);\" [elementFor]=\"'users.inline_edit.country' | translate\" [isRequired]=\"'false'\" [name]=\"'country'\" [options]=\"countries\" [selectedValue]=\"user.country\" [txtField]=\"'country'\"></inline-edit-select>\r\n                                </ng-container>\r\n                                <ng-template #elseBlock10>\r\n                                    <ng-container *ngFor=\"let country of countries\">\r\n                                        <span *ngIf=\"user.country == country.value\">{{country.label}}</span>\r\n                                    </ng-container>\r\n                                </ng-template>\r\n                            </div>\r\n                        </div>\r\n                        <div class=\"col-lg-4 col-md-6 mb-3\">\r\n                            <label>{{'users.inline_edit.state' | translate}}</label>\r\n                            <div class=\"detail-inline\">\r\n                                <ng-container *ngIf=\"permission; else elseBlock12\">\r\n                                    <inline-edit-input (updateValue)=\"saveUserDetail('state', $event);\" [elementFor]=\"'users.inline_edit.state' | translate\" [fieldValue]=\"user.state\" [isRequired]=\"'false'\" [name]=\"'state'\" [type]=\"'text'\"></inline-edit-input>\r\n                                </ng-container>\r\n                                <ng-template #elseBlock12>{{user.state}}</ng-template>\r\n                            </div>\r\n                        </div>\r\n                        <div class=\"col-lg-4 col-md-6 mb-3\">\r\n                            <label>{{'users.inline_edit.city' | translate}}</label>\r\n                            <div class=\"detail-inline\">\r\n                                <ng-container *ngIf=\"permission; else elseBlock12\">\r\n                                    <inline-edit-input (updateValue)=\"saveUserDetail('city', $event);\" [elementFor]=\"'users.inline_edit.city' | translate\" [fieldValue]=\"user.city\" [isRequired]=\"'false'\" [name]=\"'city'\" [type]=\"'text'\"></inline-edit-input>\r\n                                </ng-container>\r\n                                <ng-template #elseBlock12>{{user.city}}</ng-template>\r\n                            </div>\r\n                        </div>\r\n                        <div class=\"col-lg-4 col-md-6 mb-3\">\r\n                            <label>{{'users.inline_edit.postal_code' | translate}}</label>\r\n                            <div class=\"detail-inline\">\r\n                                <ng-container *ngIf=\"permission; else elseBlock12\">\r\n                                    <inline-edit-input (updateValue)=\"saveUserDetail('postal_code', $event);\" [elementFor]=\"'users.inline_edit.postal_code' | translate\" [fieldValue]=\"user.postal_code\" [isRequired]=\"'false'\" [name]=\"'postal_code'\" [type]=\"'text'\"></inline-edit-input>\r\n                                </ng-container>\r\n                                <ng-template #elseBlock12>{{user.postal_code}}</ng-template>\r\n                            </div>\r\n                        </div>\r\n                    </div>\r\n                </div>\r\n            </form>\r\n        </div>\r\n    </div>\r\n</div>\r\n");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/modules/admin/user/components/user-incidents/user-incidents.component.html":
/*!**********************************************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/modules/admin/user/components/user-incidents/user-incidents.component.html ***!
  \**********************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<!-- Card header -->\r\n<div class=\"card-header pl-0 pb-0 pr-0 border-bottom\">\r\n    <h4 class=\"main-title mt-2\"><span>{{'incidents.title' | translate}}</span></h4>\r\n</div><!-- Card body -->\r\n<div class=\"card-body pt-3 hide_empty_message\">\r\n    <div class=\"row\">\r\n        <div class=\"col-sm-12\">\r\n            <div class=\"table-responsive-xs table-responsive-sm table-responsive-md table-responsive-lg table-responsive-xl\">\r\n                <table [dtOptions]=\"dtOptions\" [dtTrigger]=\"dtTrigger\" class=\"table table-bordered table-hover b4-datatable\" datatable id=\"incidents_table\" width=\"100%\">\r\n                    <thead>\r\n                    <tr>\r\n                        <th>{{ 'incidents.columns.id' | translate }}</th>\r\n                        <th>{{ 'incidents.columns.incident_name' | translate }}</th>\r\n                        <th>{{ 'incidents.columns.start_date' | translate }}</th>\r\n                        <th>{{ 'incidents.columns.end_date' | translate }}</th>\r\n                        <th>{{ 'incidents.columns.type' | translate }}</th>\r\n                        <th>{{ 'incidents.columns.priority' | translate }}</th>\r\n                        <th>{{ 'incidents.columns.status' | translate }}</th>\r\n                    </tr>\r\n                    </thead>\r\n                    <tbody *ngIf=\"incidents?.length != 0\">\r\n                    <tr *ngFor=\"let incident of incidents\">\r\n                        <td>{{incident.generated_id}}</td>\r\n                        <td>{{incident.incident_name}}</td>\r\n                        <td>{{incident.start_date | dateTimeFormatFilter: loginUser.settings.date_format}}</td>\r\n                        <td>{{incident.end_date | dateTimeFormatFilter: loginUser.settings.date_format}}</td>\r\n                        <td class=\"budges-status\">\r\n                            <ng-container *ngFor=\"let type of ('incidents.incident_types' | translate)\">\r\n                                <span *ngIf=\"type.id == incident.incident_type\" class=\"badge badge-secondary\">{{type.label}}</span>\r\n                            </ng-container>\r\n                        </td>\r\n                        <td class=\"budges-status\">\r\n                            <ng-container *ngFor=\"let priority of ('incidents.priorities' | translate)\">\r\n                                <span *ngIf=\"priority.id == incident.priority\" class=\"{{priority.class}}\">{{priority.label | translate}}</span>\r\n                            </ng-container>\r\n                        </td>\r\n                        <td class=\"budges-status\">\r\n                            <ng-container *ngFor=\"let status of ('incidents.status' | translate)\">\r\n                                <span *ngIf=\"status.id == incident.status\" class=\"{{status.class}}\">{{status.label | translate}}</span>\r\n                            </ng-container>\r\n                        </td>\r\n                    </tr>\r\n                    </tbody>\r\n                    <tfoot *ngIf=\"incidents?.length == 0\" class=\"tfoot_dt\">\r\n                    <tr>\r\n                        <td class=\"no-data-available\" class=\"text-center\" colspan=\"7\">{{'common.datatable.sEmptyTable' | translate}}</td>\r\n                    </tr>\r\n                    </tfoot>\r\n                </table>\r\n            </div>\r\n        </div>\r\n    </div>\r\n</div>\r\n");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/modules/admin/user/components/user-projects/user-projects.component.html":
/*!********************************************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/modules/admin/user/components/user-projects/user-projects.component.html ***!
  \********************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<!-- Card header -->\r\n<div class=\"card-header pl-0 pb-0 pr-0 border-bottom\">\r\n    <h4 class=\"main-title mt-2\"><span>{{'projects.title' | translate}}</span></h4>\r\n</div><!-- Card body -->\r\n<div class=\"card-body pt-3 hide_empty_message\">\r\n    <div class=\"row\">\r\n        <div class=\"col-sm-12\">\r\n            <div class=\"table-responsive-xs table-responsive-sm table-responsive-md table-responsive-lg table-responsive-xl\">\r\n                <table [dtOptions]=\"dtOptions\" [dtTrigger]=\"dtTrigger\" class=\"table table-bordered table-hover b4-datatable\" datatable id=\"projects_table\" width=\"100%\">\r\n                    <thead>\r\n                    <tr>\r\n                        <th>{{ 'projects.columns.id' | translate }}</th>\r\n                        <th>{{ 'projects.columns.project_name' | translate }}</th>\r\n                        <th>{{ 'projects.columns.start' | translate }}</th>\r\n                        <th>{{ 'projects.columns.end' | translate }}</th>\r\n                        <th>{{ 'projects.columns.progress' | translate }}</th>\r\n                        <th>{{ 'projects.columns.status' | translate }}</th>\r\n                    </tr>\r\n                    </thead>\r\n                    <tbody *ngIf=\"projects?.length != 0\">\r\n                    <tr *ngFor=\"let project of projects\">\r\n                        <td>{{project.generated_id}}</td>\r\n                        <td>{{project.project_name}}</td>\r\n                        <td>{{project.start_date | dateTimeFormatFilter: loginUser.settings.date_format}}</td>\r\n                        <td>{{project.end_date | dateTimeFormatFilter: loginUser.settings.date_format}}</td>\r\n                        <td class=\"completion\">\r\n                            <small>{{'common.status.completed' | translate}}:<strong>{{project.progress}}%</strong></small>\r\n                            <progressbar [animate]=\"true\" [value]=\"project.progress\" max=\"100\"></progressbar>\r\n                        </td>\r\n                        <td class=\"budges-status\">\r\n                            <ng-container *ngFor=\"let status of ('projects.status' | translate)\">\r\n                                <span *ngIf=\"status.id == project.status\" class=\"{{status.class}}\">{{status.label}}</span>\r\n                            </ng-container>\r\n                        </td>\r\n                    </tr>\r\n                    </tbody>\r\n                    <tfoot *ngIf=\"projects?.length == 0\" class=\"tfoot_dt\">\r\n                    <tr>\r\n                        <td class=\"no-data-available text-center\" colspan=\"6\">{{'common.datatable.sEmptyTable' | translate}}</td>\r\n                    </tr>\r\n                    </tfoot>\r\n                </table>\r\n            </div>\r\n        </div>\r\n    </div>\r\n</div>\r\n");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/modules/admin/user/components/user-tasks/user-tasks.component.html":
/*!**************************************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/modules/admin/user/components/user-tasks/user-tasks.component.html ***!
  \**************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<!-- Card header -->\r\n<div class=\"card-header pl-0 pb-0 pr-0 border-bottom\">\r\n    <h4 class=\"main-title mt-2\"><span>{{'tasks.title' | translate}}</span></h4>\r\n</div><!-- Card body -->\r\n<div class=\"card-body pt-3 hide_empty_message\">\r\n    <div class=\"row\">\r\n        <div class=\"col-sm-12\">\r\n            <div class=\"table-responsive-xs table-responsive-sm table-responsive-md table-responsive-lg table-responsive-xl\">\r\n                <table [dtOptions]=\"dtOptions\" [dtTrigger]=\"dtTrigger\" class=\"table table-bordered table-hover b4-datatable\" datatable id=\"tasks_table\" width=\"100%\">\r\n                    <thead>\r\n                    <tr>\r\n                        <th>{{ 'tasks.columns.id' | translate }}</th>\r\n                        <th>{{ 'tasks.columns.task_name' | translate }}</th>\r\n                        <th>{{ 'tasks.columns.start_date' | translate }}</th>\r\n                        <th>{{ 'tasks.columns.end_date' | translate }}</th>\r\n                        <th>{{ 'tasks.columns.progress' | translate }}</th>\r\n                        <th>{{ 'tasks.columns.priority' | translate }}</th>\r\n                        <th>{{ 'tasks.columns.status' | translate }}</th>\r\n                    </tr>\r\n                    </thead>\r\n                    <tbody *ngIf=\"tasks?.length != 0\">\r\n                    <tr *ngFor=\"let task of tasks\">\r\n                        <td>{{task.generated_id}}</td>\r\n                        <td>{{task.name}}</td>\r\n                        <td>{{task.task_start_date | dateTimeFormatFilter: loginUser.settings.date_format}}</td>\r\n                        <td>{{task.task_end_date | dateTimeFormatFilter: loginUser.settings.date_format}}</td>\r\n                        <td class=\"completion\">\r\n                            <small>{{'common.status.completed' | translate}}:<strong>{{task.progress}}%</strong></small>\r\n                            <progressbar [animate]=\"true\" [value]=\"task.progress\" max=\"100\"></progressbar>\r\n                        </td>\r\n                        <td class=\"budges-status\">\r\n                            <ng-container *ngFor=\"let priority of ('tasks.priorities' | translate)\">\r\n                                <div class=\"budges-status\">\r\n                                    <span *ngIf=\"priority.id == task.priority\" class=\"{{priority.class}}\">{{priority.label}}</span>\r\n                                </div>\r\n                            </ng-container>\r\n                        </td>\r\n                        <td class=\"budges-status\">\r\n                            <ng-container *ngFor=\"let status of ('tasks.status' | translate)\">\r\n                                <span *ngIf=\"status.id == task.status\" class=\"{{status.class}}\">{{status.label}}</span>\r\n                            </ng-container>\r\n                        </td>\r\n                    </tr>\r\n                    </tbody>\r\n                    <tfoot *ngIf=\"tasks?.length == 0\" class=\"tfoot_dt\">\r\n                    <tr>\r\n                        <td class=\"no-data-available text-center\" colspan=\"7\">{{'common.datatable.sEmptyTable' | translate}}</td>\r\n                    </tr>\r\n                    </tfoot>\r\n                </table>\r\n            </div>\r\n        </div>\r\n    </div>\r\n</div>\r\n");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/modules/admin/user/pages/user-create/user-create.component.html":
/*!***********************************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/modules/admin/user/pages/user-create/user-create.component.html ***!
  \***********************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<section *ngIf=\"isPageLoaded\" id=\"basic-form-layouts\">\r\n    <form (ngSubmit)=\"onSubmit()\" [formGroup]=\"createUserForm\">\r\n        <div class=\"row\">\r\n            <div class=\"col-md-6\">\r\n                <div class=\"card\">\r\n                    <div class=\"card-header\">\r\n                        <h4 class=\"card-title\">{{'users.title1' | translate}}</h4>\r\n                    </div>\r\n                    <div class=\"card-body\">\r\n                        <div class=\"px-3\">\r\n                            <div class=\"form-body\">\r\n                                <h4 class=\"form-section\"><i class=\"ft-user\"></i> {{'users.headings.head1' | translate}}\r\n                                </h4>\r\n                                <div class=\"row\">\r\n                                    <div class=\"col-md-6\">\r\n                                        <div class=\"form-group\">\r\n                                            <label for=\"firstname\">{{'users.create.fields.first_name' | translate}}&nbsp;<span class=\"text-danger\">*</span></label>\r\n                                            <input [ngClass]=\"{ 'is-invalid': isFormSubmitted && userControl.firstname.errors }\" class=\"form-control\" formControlName=\"firstname\" id=\"firstname\" placeholder=\"{{'users.create.placeholders.placeholder1' | translate}}\" type=\"text\"/>\r\n                                            <div *ngIf=\"isFormSubmitted && userControl.firstname.errors\" class=\"invalid-feedback\">\r\n                                                <div *ngIf=\"userControl.firstname.errors.required\">{{'users.create.error_messages.message1' | translate}}</div>\r\n                                                <div *ngIf=\"userControl.firstname.errors.maxlength\">{{'users.create.error_messages.message2' | translate}}</div>\r\n                                            </div>\r\n                                        </div>\r\n                                    </div>\r\n                                    <div class=\"col-md-6\">\r\n                                        <div class=\"form-group\">\r\n                                            <label for=\"lastname\">{{'users.create.fields.last_name' | translate}}&nbsp;<span class=\"text-danger\">*</span></label>\r\n                                            <input [ngClass]=\"{ 'is-invalid': isFormSubmitted && userControl.lastname.errors }\" class=\"form-control\" formControlName=\"lastname\" id=\"lastname\" placeholder=\"{{'users.create.placeholders.placeholder2' | translate}}\" type=\"text\"/>\r\n                                            <div *ngIf=\"isFormSubmitted && userControl.lastname.errors\" class=\"invalid-feedback\">\r\n                                                <div *ngIf=\"userControl.lastname.errors.required\">{{'users.create.error_messages.message3' | translate}}</div>\r\n                                                <div *ngIf=\"userControl.lastname.errors.maxlength\">{{'users.create.error_messages.message4' | translate}}</div>\r\n                                            </div>\r\n                                        </div>\r\n                                    </div>\r\n                                    <div class=\"col-md-12\">\r\n                                        <div class=\"form-group\">\r\n                                            <label for=\"email\">{{'users.create.fields.email' | translate}}&nbsp;<span class=\"text-danger\">*</span></label>\r\n                                            <input [ngClass]=\"{ 'is-invalid': isFormSubmitted && userControl.email.errors }\" class=\"form-control\" formControlName=\"email\" id=\"email\" placeholder=\"{{'users.create.placeholders.placeholder3' | translate}}\" type=\"email\"/>\r\n                                            <div *ngIf=\"isFormSubmitted && userControl.email.errors\" class=\"invalid-feedback\">\r\n                                                <div *ngIf=\"userControl.email.errors.required\">{{'users.create.error_messages.message5' | translate}}</div>\r\n                                                <div *ngIf=\"userControl.email.errors.email\">{{'users.create.error_messages.message6' | translate}}</div>\r\n                                            </div>\r\n                                        </div>\r\n                                    </div>\r\n                                    <div class=\"col-md-6\">\r\n                                        <div class=\"form-group\">\r\n                                            <label for=\"password\">{{'users.create.fields.password' | translate}}&nbsp;<span class=\"text-danger\">*</span></label>\r\n                                            <input [ngClass]=\"{ 'is-invalid': isFormSubmitted && userControl.password.errors }\" autocomplete=\"off\" class=\"form-control\" formControlName=\"password\" id=\"password\" placeholder=\"{{'users.create.placeholders.placeholder4' | translate}}\" type=\"password\"/>\r\n                                            <div *ngIf=\"isFormSubmitted && userControl.password.errors\" class=\"invalid-feedback\">\r\n                                                <div *ngIf=\"userControl.password.errors.required\">{{'users.create.error_messages.message7' | translate}}</div>\r\n                                                <div *ngIf=\"userControl.password.errors.minlength || userControl.password.errors.maxlength\">{{'users.create.error_messages.message8' | translate}}</div>\r\n                                            </div>\r\n                                        </div>\r\n                                    </div>\r\n                                    <div class=\"col-md-6\">\r\n                                        <div class=\"form-group\">\r\n                                            <label for=\"password_confirmation\">{{'users.create.fields.confirm_password' | translate}}&nbsp;<span class=\"text-danger\">*</span></label>\r\n                                            <input [ngClass]=\"{ 'is-invalid': isFormSubmitted && userControl.password_confirmation.errors }\" autocomplete=\"off\" class=\"form-control\" formControlName=\"password_confirmation\" id=\"password_confirmation\" placeholder=\"{{'users.create.placeholders.placeholder5' | translate}}\" type=\"password\"/>\r\n                                            <div *ngIf=\"isFormSubmitted && userControl.password_confirmation.errors\" class=\"invalid-feedback\">\r\n                                                <div *ngIf=\"userControl.password_confirmation.errors.required\">{{'users.create.error_messages.message9' | translate}}</div>\r\n                                                <div *ngIf=\"userControl.password_confirmation.errors.mustMatch\">{{'users.create.error_messages.message10' | translate}}</div>\r\n                                            </div>\r\n                                        </div>\r\n                                    </div>\r\n                                </div>\r\n\r\n                                <h4 class=\"form-section\">\r\n                                    <i class=\"ft-file-text\"></i> {{'users.headings.head2' | translate}}</h4>\r\n                                <div class=\"row\">\r\n                                    <div class=\"col-md-12\">\r\n                                        <div class=\"form-group\">\r\n                                            <label>{{'users.create.fields.profile_photo' | translate}}</label>\r\n                                            <input formControlName=\"avatar\" type=\"hidden\">\r\n                                            <div #pdfDropzone class=\"dropzone dz-clickable\">\r\n                                                <div class=\"dz-default dz-message\">\r\n                                                    <span><strong>{{'users.create.error_messages.message11' | translate}}</strong></span>\r\n                                                </div>\r\n                                            </div>\r\n                                            <div class=\"people-lists text-center\">\r\n                                                <a (click)=\"setAvatar(avatar)\" *ngFor=\"let avatar of avatars;\" [ngClass]=\"{active: isActive(avatar)}\" class=\"btn btn-profile-danger rounded-circle text-dark\">\r\n                                                    <img alt=\"Profile\" class=\"img-sm rounded-circle\" src=\"{{apiUrl}}/uploads/profile/{{avatar}}\"/>\r\n                                                </a>\r\n                                            </div>\r\n                                        </div>\r\n                                    </div>\r\n                                    <div class=\"col-md-12\">\r\n                                        <div [ngClass]=\"{ 'is-invalid': isFormSubmitted && userControl.department_roles.errors }\" class=\"form-group\">\r\n                                            <label>{{'users.create.fields.departments_roles' | translate}}&nbsp;<span class=\"text-danger\">*</span></label>\r\n                                            <ng-select (change)=\"departmentRolesChange($event)\" [items]=\"departmentsRoles\" [multiple]=\"true\" [selectableGroup]=\"false\" bindLabel=\"name\" bindValue=\"id\" formControlName=\"department_roles\" groupBy=\"roles\" placeholder=\"{{'users.create.placeholders.placeholder6' | translate}}\">\r\n                                                <ng-template let-item=\"item\" ng-optgroup-tmp>{{item.name}}</ng-template>\r\n                                                <ng-template let-item=\"item\" ng-option-tmp>{{item.name}}</ng-template>\r\n                                            </ng-select>\r\n                                            <div *ngIf=\"isFormSubmitted && userControl.department_roles.errors\" class=\"invalid-feedback\">\r\n                                                <div *ngIf=\"userControl.department_roles.errors.required\">{{'users.create.error_messages.message12' | translate}}</div>\r\n                                            </div>\r\n                                        </div>\r\n                                    </div>\r\n                                    <div class=\"col-md-12\">\r\n                                        <label class=\"checkbox-container\">\r\n                                            <input class=\"form-control\" formControlName=\"is_super_admin\" id=\"is_super_admin\" type=\"checkbox\"/>{{'users.create.fields.is_departmenthead' | translate}}\r\n                                            <span class=\"checkbox-checkmark\"></span>\r\n                                        </label>\r\n                                    </div>\r\n                                    <div class=\"col-md-12\">\r\n                                        <div class=\"form-group\">\r\n                                            <label>{{'users.create.fields.assigned_to' | translate}}&nbsp;<span class=\"text-danger\">*</span></label><br/>\r\n                                            <div class=\"form-check radio-container\">\r\n                                                <input (change)=\"changePermission($event)\" class=\"form-check-input\" formControlName=\"assign_permission\" id=\"customize_permission1\" type=\"radio\" value=\"all\"/>\r\n                                                <label class=\"form-check-label\" for=\"customize_permission1\">{{'users.create.fields.everyone' | translate}}</label>\r\n                                                <span class=\"radio-checkmark\"></span>\r\n                                            </div>\r\n                                            <br/>\r\n                                            <div class=\"form-check radio-container\">\r\n                                                <input (change)=\"changePermission($event)\" class=\"form-check-input\" formControlName=\"assign_permission\" id=\"customize_permission2\" type=\"radio\" value=\"cutomize\"/>\r\n                                                <label class=\"form-check-label\" for=\"customize_permission2\">{{'users.create.fields.customize_permission' | translate}}</label>\r\n                                                <span class=\"radio-checkmark\"></span>\r\n                                            </div>\r\n                                            <div *ngIf=\"isPermissionRequired\" class=\"invalid-feedback d-block\">{{'users.create.error_messages.message13' | translate}}</div>\r\n                                        </div>\r\n                                    </div>\r\n                                </div>\r\n                            </div>\r\n                        </div>\r\n                    </div>\r\n                </div>\r\n            </div>\r\n            <div class=\"col-md-6\">\r\n                <div class=\"card\">\r\n                    <div class=\"card-header\">&nbsp;</div>\r\n                    <div class=\"card-body\">\r\n                        <div class=\"px-3\">\r\n                            <div class=\"form-body\">\r\n                                <h4 class=\"form-section\"><i class=\"ft-user\"></i> {{'users.headings.head3' | translate}}\r\n                                </h4>\r\n                                <div class=\"row\">\r\n                                    <div class=\"col-md-6\">\r\n                                        <div class=\"form-group\">\r\n                                            <label for=\"user_generated_id\">{{'users.create.fields.userid' | translate}}&nbsp;<span class=\"text-danger\">*</span></label>\r\n                                            <input [ngClass]=\"{ 'is-invalid': isFormSubmitted && userControl.user_generated_id.errors }\" class=\"form-control\" formControlName=\"user_generated_id\" id=\"user_generated_id\" placeholder=\"USR000\" readonly tabindex=\"-1\" type=\"text\"/>\r\n                                            <div *ngIf=\"isFormSubmitted && userControl.user_generated_id.errors\" class=\"invalid-feedback\">\r\n                                                <div *ngIf=\"userControl.user_generated_id.errors.required\">{{'users.create.error_messages.message14' | translate}}</div>\r\n                                            </div>\r\n                                        </div>\r\n                                    </div>\r\n                                    <div class=\"col-md-6\">\r\n                                        <div class=\"form-group\">\r\n                                            <label for=\"employee_id\">{{'users.create.fields.employment_ID' | translate}}&nbsp;<span class=\"text-danger\">*</span></label>\r\n                                            <input [ngClass]=\"{ 'is-invalid': isFormSubmitted && userControl.emp_id.errors }\" class=\"form-control\" formControlName=\"emp_id\" id=\"employee_id\" placeholder=\"EMP0001\" type=\"text\"/>\r\n                                            <div *ngIf=\"isFormSubmitted && userControl.emp_id.errors\" class=\"invalid-feedback\">\r\n                                                <div *ngIf=\"userControl.emp_id.errors.required\">{{'users.create.error_messages.message15' | translate}}</div>\r\n                                            </div>\r\n                                        </div>\r\n                                    </div>\r\n                                    <div class=\"col-md-6\">\r\n                                        <div class=\"form-group\">\r\n                                            <label for=\"username\">{{'users.create.fields.username' | translate}}&nbsp;<span class=\"text-danger\">*</span></label>\r\n                                            <div class=\"input-group\">\r\n                                                <div class=\"input-group-prepend no-borders no-paddings\">\r\n                                                    <span class=\"input-group-text font-12\" id=\"usernamePrepend\">@</span>\r\n                                                </div>\r\n                                                <input [ngClass]=\"{ 'is-invalid': isFormSubmitted && userControl.username.errors }\" aria-describedby=\"usernamePrepend\" autocomplete=\"nope\" class=\"form-control\" formControlName=\"username\" id=\"username\" placeholder=\"{{'users.create.placeholders.placeholder7' | translate}}\" type=\"text\"/>\r\n                                                <div *ngIf=\"isFormSubmitted && userControl.username.errors\" class=\"invalid-feedback\">\r\n                                                    <div *ngIf=\"userControl.username.errors.required\">{{'users.create.error_messages.message16' | translate}}</div>\r\n                                                    <div *ngIf=\"userControl.username.errors.minlength || userControl.username.errors.maxlength || userControl.username.errors.pattern\">{{'users.create.error_messages.message17' | translate}}</div>\r\n                                                </div>\r\n                                            </div>\r\n                                        </div>\r\n                                    </div>\r\n                                    <div class=\"col-md-6\">\r\n                                        <div class=\"form-group\">\r\n                                            <label for=\"primary_manager\">{{'users.create.fields.primary_manager' | translate}}</label>\r\n                                            <ng-select [items]=\"users\" [searchable]=\"true\" [selectOnTab]=\"true\" bindLabel=\"firstname\" bindValue=\"id\" formControlName=\"primary_manager\" labelForId=\"primary_manager\" placeholder=\"{{'users.create.placeholders.placeholder12' | translate}}\">\r\n                                                <ng-template let-item=\"item\" ng-option-tmp>\r\n                                                    {{item.firstname}} {{item.lastname}}\r\n                                                </ng-template>\r\n                                            </ng-select>\r\n                                        </div>\r\n                                    </div>\r\n                                    <div class=\"col-md-6\">\r\n                                        <div class=\"form-group\">\r\n                                            <label for=\"secondary_manager\">{{'users.create.fields.secondary_manager' | translate}}</label>\r\n                                            <ng-select [items]=\"users\" [searchable]=\"true\" [selectOnTab]=\"true\" bindLabel=\"firstname\" bindValue=\"id\" formControlName=\"secondary_manager\" labelForId=\"secondary_manager\" placeholder=\"{{'users.create.placeholders.placeholder13' | translate}}\">\r\n                                                <ng-template let-item=\"item\" ng-option-tmp>\r\n                                                    {{item.firstname}} {{item.lastname}}\r\n                                                </ng-template>\r\n                                            </ng-select>\r\n                                        </div>\r\n                                    </div>\r\n                                    <div class=\"col-md-6\">\r\n                                        <div class=\"form-group\">\r\n                                            <label for=\"language\">{{'users.create.fields.language' | translate}}</label>\r\n                                            <ng-select [items]=\"languages\" [searchable]=\"true\" [selectOnTab]=\"true\" bindLabel=\"name\" bindValue=\"language\" formControlName=\"language\" labelForId=\"language\" placeholder=\"{{'users.create.placeholders.placeholder10' | translate}}\"></ng-select>\r\n                                        </div>\r\n                                    </div>\r\n                                </div>\r\n                                <h4 class=\"form-section\"><i class=\"ft-mail\"></i> {{'users.headings.head4' | translate}}\r\n                                </h4>\r\n                                <div class=\"row\">\r\n                                    <div class=\"col-md-6\">\r\n                                        <div class=\"form-group\">\r\n                                            <label for=\"mobile\">{{'users.create.fields.mobile' | translate}}</label>\r\n                                            <input [ngClass]=\"{ 'is-invalid': isFormSubmitted && userControl.mobile.errors }\" class=\"form-control\" formControlName=\"mobile\" id=\"mobile\" placeholder=\"xxxxxxxxxx\" type=\"text\"/>\r\n                                            <div *ngIf=\"isFormSubmitted && userControl.mobile.errors\" class=\"invalid-feedback\">\r\n                                                <div *ngIf=\"userControl.mobile.errors.pattern\">{{'users.create.error_messages.message18' | translate}}</div>\r\n                                            </div>\r\n                                        </div>\r\n                                    </div>\r\n                                    <div class=\"col-md-6\">\r\n                                        <div class=\"form-group\">\r\n                                            <label for=\"phone\">{{'users.create.fields.phone' | translate}}</label>\r\n                                            <input [ngClass]=\"{ 'is-invalid': isFormSubmitted && userControl.phone.errors }\" class=\"form-control\" formControlName=\"phone\" id=\"phone\" placeholder=\"xxxxxxxxxx\" type=\"text\"/>\r\n                                            <div *ngIf=\"isFormSubmitted && userControl.phone.errors\" class=\"invalid-feedback\">\r\n                                                <div *ngIf=\"userControl.phone.errors.pattern\">{{'users.create.error_messages.message19' | translate}}</div>\r\n                                            </div>\r\n                                        </div>\r\n                                    </div>\r\n                                    <div class=\"col-md-6\">\r\n                                        <div class=\"form-group\">\r\n                                            <label for=\"skype\">{{'users.create.fields.skype' | translate}}</label>\r\n                                            <input class=\"form-control\" formControlName=\"skype\" id=\"skype\" placeholder=\"{{'users.create.placeholders.placeholder8' | translate}}\" type=\"text\"/>\r\n                                        </div>\r\n                                    </div>\r\n                                    <div class=\"col-md-6\">\r\n                                        <div class=\"form-group\">\r\n                                            <label for=\"country\">{{'users.create.fields.country' | translate}}</label>\r\n                                            <ng-select [items]=\"countries\" [searchable]=\"true\" [selectOnTab]=\"true\" bindLabel=\"name\" bindValue=\"code\" formControlName=\"country\" labelForId=\"country\" placeholder=\"{{'users.create.placeholders.placeholder9' | translate}}\"></ng-select>\r\n                                        </div>\r\n                                    </div>\r\n                                    <div class=\"col-md-12\">\r\n                                        <div class=\"form-group\">\r\n                                            <label for=\"address\">{{'clients.create.fields.address' | translate}}</label>\r\n                                            <textarea class=\"form-control\" formControlName=\"address\" id=\"address\" placeholder=\"{{'users.create.placeholders.placeholder14' | translate}}\"></textarea>\r\n                                        </div>\r\n                                    </div>\r\n                                </div>\r\n                            </div>\r\n                        </div>\r\n                    </div>\r\n                </div>\r\n            </div>\r\n            <div class=\"col-md-12 text-right\">\r\n                <a [routerLink]=\"['/users']\" class=\"btn btn-cancel\">{{'common.cancel' | translate}}</a>\r\n                <button class=\"btn btn-submit\" type=\"submit\">{{'common.create' | translate}}</button>\r\n            </div>\r\n        </div>\r\n    </form>\r\n</section>\r\n");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/modules/admin/user/pages/user-detail/user-detail.component.html":
/*!***********************************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/modules/admin/user/pages/user-detail/user-detail.component.html ***!
  \***********************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<section *ngIf=\"isPageLoaded\" class=\"users-profile mt-lg-2 mt-4\">\r\n    <div class=\"row\">\r\n        <div class=\"col-sm-12\">\r\n            <div class=\"card user-profile-head\">\r\n                <div class=\"profile-head\">\r\n                    <div class=\"profile-image\">\r\n                        <img *ngIf=\"user.avatar\" alt=\"Profile Image\" class=\"rounded-circle img-border\" height=\"150\" src=\"{{apiUrl}}/uploads/profile/{{user.avatar}}\" width=\"150\">\r\n                        <img *ngIf=\"!user.avatar\" alt=\"Profile Image\" class=\"rounded-circle img-border\" height=\"150\" src=\"../assets/img/profile_large.jpg\" width=\"150\">\r\n                    </div>\r\n                    <div class=\"profile-image\">\r\n                        <h3>{{user.firstname}} {{user.lastname}}</h3>\r\n                        <p class=\"status-text\">{{user.emp_id}}</p>\r\n                        <p class=\"small\">\r\n\t\t\t\t\t\t\t<span>\r\n\t\t\t\t\t\t\t\t<ng-container *ngIf=\"loginUser.online_status; else elseBlock\">\r\n\t\t\t\t\t\t\t\t\t<i class=\"fa fa-dot-circle-o text-success\"></i>&nbsp;{{'common.online' | translate}}\r\n\t\t\t\t\t\t\t\t</ng-container>\r\n\t\t\t\t\t\t\t\t<ng-template #elseBlock>\r\n\t\t\t\t\t\t\t\t\t<i class=\"fa fa-dot-circle-o text-danger\"></i>&nbsp;{{'common.offline' | translate}}\r\n\t\t\t\t\t\t\t\t</ng-template>\r\n\t\t\t\t\t\t\t</span>\r\n                        </p>\r\n                    </div>\r\n                </div>\r\n                <div class=\"budges-status\">\r\n                    <ng-container *ngFor=\"let department of user.departments;\">\r\n                        <span *ngFor=\"let role of department.roles;\" [ngClass]=\"{'cancel': role.id == 1, 'completed': role.id != 1}\">{{role.name}} ({{department.name}})</span>\r\n                    </ng-container>\r\n                </div>\r\n            </div>\r\n        </div>\r\n    </div>\r\n    <div class=\"row\">\r\n        <div class=\"col-sm-12\">\r\n            <div class=\"card\">\r\n                <div class=\"px-3 pt-3\">\r\n                    <div class=\"row\">\r\n                        <div class=\"col-xl-3 col-lg-6 col-md-6 col-12 mb-3\">\r\n                            <div class=\"list-inline-buttons\">\r\n                                <span class=\"btn-danger\">{{user.projects_count}}</span>&nbsp;{{'projects.title' | translate}}\r\n                            </div>\r\n                        </div>\r\n                        <div class=\"col-xl-3 col-lg-6 col-md-6 col-12 mb-3\">\r\n                            <div class=\"list-inline-buttons\">\r\n                                <span class=\"btn-primary\">{{user.tasks_count}}</span>&nbsp;{{'tasks.title' | translate}}\r\n                            </div>\r\n                        </div>\r\n                        <div class=\"col-xl-3 col-lg-6 col-md-6 col-12 mb-3\">\r\n                            <div class=\"list-inline-buttons\">\r\n                                <span class=\"btn-info\">{{user.defects_count}}</span>&nbsp;{{'defects.title' | translate}}\r\n                            </div>\r\n                        </div>\r\n                        <div class=\"col-xl-3 col-lg-6 col-md-6 col-12 mb-3\">\r\n                            <div class=\"list-inline-buttons\">\r\n                                <span class=\"btn-success\">{{user.incidents_count}}</span>&nbsp;{{'incidents.title' | translate}}\r\n                            </div>\r\n                        </div>\r\n                    </div>\r\n                    <div class=\"row\">\r\n                        <div class=\"col-xl-3 col-lg-6 col-md-6 col-12 mb-3\">\r\n                            <div class=\"list-inline-buttons\">\r\n                                <span class=\"btn-info\">{{user.comment}}</span>&nbsp;{{'users.profile.comments' | translate}}\r\n                            </div>\r\n                        </div>\r\n                        <div class=\"col-xl-3 col-lg-6 col-md-6 col-12 mb-3\">\r\n                            <div class=\"list-inline-buttons\">\r\n                                <span class=\"btn-warning\">{{user.activities.countActivities}}</span>&nbsp;{{'users.profile.activities' | translate}}\r\n                            </div>\r\n                        </div>\r\n                        <div class=\"col-xl-3 col-lg-6 col-md-6 col-12 mb-3\">\r\n                            <div class=\"list-inline-buttons\">\r\n                                <span class=\"btn-danger\">{{user.mailbox.countMailbox}}</span>&nbsp;{{'users.profile.total_messages' | translate}}\r\n                            </div>\r\n                        </div>\r\n                        <div class=\"col-xl-3 col-lg-6 col-md-6 col-12 mb-3\">\r\n                            <div class=\"list-inline-buttons\">\r\n                                <span class=\"btn-primary\">{{user.articles.countArticle}}</span>&nbsp;{{'users.profile.articles' | translate}}\r\n                            </div>\r\n                        </div>\r\n                    </div>\r\n                </div>\r\n            </div>\r\n        </div>\r\n    </div>\r\n    <div *ngIf=\"!loginUser.is_client && !user.is_client\" class=\"row\">\r\n        <div class=\"col-xl-3 col-lg-6 col-md-6 col-12\">\r\n            <div class=\"card blackberry-gradient\">\r\n                <div class=\"card-body\">\r\n                    <div class=\"card-block pt-2 pb-2\">\r\n                        <div class=\"media\">\r\n                            <div class=\"media-body white text-left\">\r\n                                <h3 class=\"font-l-1 mb-0\">{{user.timesheet.total_hour_time}}</h3>\r\n                                <span>{{'users.profile.total_hours' | translate}}</span>\r\n                            </div>\r\n                            <div class=\"media-right white text-right pt-1\">\r\n                                <i class=\"fa fa-clock-o fa-3x\"></i>\r\n                            </div>\r\n                        </div>\r\n                    </div>\r\n                </div>\r\n            </div>\r\n        </div>\r\n        <div class=\"col-xl-3 col-lg-6 col-md-6 col-12\">\r\n            <div class=\"card green-tea-gradient\">\r\n                <div class=\"card-body\">\r\n                    <div class=\"card-block pt-2 pb-2\">\r\n                        <div class=\"media\">\r\n                            <div class=\"media-body white text-left\">\r\n                                <h3 class=\"font-l-1 mb-0\">{{user.timesheet[2]}}</h3>\r\n                                <span>{{'users.profile.task_hours' | translate}}</span>\r\n                            </div>\r\n                            <div class=\"media-right white text-right pt-1\">\r\n                                <i class=\"fa fa-tasks fa-3x\"></i>\r\n                            </div>\r\n                        </div>\r\n                    </div>\r\n                </div>\r\n            </div>\r\n        </div>\r\n        <div class=\"col-xl-3 col-lg-6 col-md-6 col-12\">\r\n            <div class=\"card ibiza-sunset-gradient\">\r\n                <div class=\"card-body\">\r\n                    <div class=\"card-block pt-2 pb-2\">\r\n                        <div class=\"media\">\r\n                            <div class=\"media-body white text-left\">\r\n                                <h3 class=\"font-l-1 mb-0\">{{user.timesheet[3]}}</h3>\r\n                                <span>{{'users.profile.defect_hours' | translate}}</span>\r\n                            </div>\r\n                            <div class=\"media-right white text-right pt-1\">\r\n                                <i class=\"fa fa-bug fa-3x\"></i>\r\n                            </div>\r\n                        </div>\r\n                    </div>\r\n                </div>\r\n            </div>\r\n        </div>\r\n        <div class=\"col-xl-3 col-lg-6 col-md-6 col-12\">\r\n            <div class=\"card plum-gradient\">\r\n                <div class=\"card-body\">\r\n                    <div class=\"card-block pt-2 pb-2\">\r\n                        <div class=\"media\">\r\n                            <div class=\"media-body white text-left\">\r\n                                <h3 class=\"font-l-1 mb-0\">{{user.timesheet[4]}}</h3>\r\n                                <span>{{'users.profile.incident_hours' | translate}}</span>\r\n                            </div>\r\n                            <div class=\"media-right white text-right pt-1\">\r\n                                <i class=\"fa fa-ticket fa-3x\"></i>\r\n                            </div>\r\n                        </div>\r\n                    </div>\r\n                </div>\r\n            </div>\r\n        </div>\r\n        <div class=\"col-xl-3 col-lg-6 col-md-6 col-12\">\r\n            <div class=\"card cosmic-fusion-gradient\">\r\n                <div class=\"card-body\">\r\n                    <div class=\"card-block pt-2 pb-2\">\r\n                        <div class=\"media\">\r\n                            <div class=\"media-body white text-left\">\r\n                                <h3 class=\"font-l-1 mb-0\">{{user.timesheet[5]}}</h3>\r\n                                <span>{{'users.profile.meeting_hours' | translate}}</span>\r\n                            </div>\r\n                            <div class=\"media-right white text-right pt-1\">\r\n                                <i class=\"fa fa-group fa-3x\"></i>\r\n                            </div>\r\n                        </div>\r\n                    </div>\r\n                </div>\r\n            </div>\r\n        </div>\r\n        <div class=\"col-xl-3 col-lg-6 col-md-6 col-12\">\r\n            <div class=\"card blackberry-gradient\">\r\n                <div class=\"card-body\">\r\n                    <div class=\"card-block pt-2 pb-2\">\r\n                        <div class=\"media\">\r\n                            <div class=\"media-body white text-left\">\r\n                                <h3 class=\"font-l-1 mb-0\">{{user.timesheet[7]}}</h3>\r\n                                <span>{{'users.profile.leave_hours' | translate}}</span>\r\n                            </div>\r\n                            <div class=\"media-right white text-right pt-1\">\r\n                                <i class=\"fa fa-calendar-times-o fa-3x\"></i>\r\n                            </div>\r\n                        </div>\r\n                    </div>\r\n                </div>\r\n            </div>\r\n        </div>\r\n        <div class=\"col-xl-3 col-lg-6 col-md-6 col-12\">\r\n            <div class=\"card green-tea-gradient\">\r\n                <div class=\"card-body\">\r\n                    <div class=\"card-block pt-2 pb-2\">\r\n                        <div class=\"media\">\r\n                            <div class=\"media-body white text-left\">\r\n                                <h3 class=\"font-l-1 mb-0\">{{user.timesheet[6]}}</h3>\r\n                                <span>{{'users.profile.other_hours' | translate}}</span>\r\n                            </div>\r\n                            <div class=\"media-right white text-right pt-1\">\r\n                                <i class=\"fa fa-cube fa-3x\"></i>\r\n                            </div>\r\n                        </div>\r\n                    </div>\r\n                </div>\r\n            </div>\r\n        </div>\r\n    </div>\r\n    <div class=\"row\" class=\"detail-page\">\r\n        <div class=\"card\">\r\n            <tabset class=\"nav nav-tabs d-flex justify-content-center\">\r\n                <tab (selectTab)=\"setActiveUserTab($event)\" customClass=\"text-left\" id=\"1\">\r\n                    <ng-template tabHeading>\r\n                        <div class=\"d-flex\">\r\n                            <i class=\"fa fa-info-circle\"></i><span class=\"mt-1 ml-1\">{{'common.details' | translate}}</span>\r\n                        </div>\r\n                    </ng-template>\r\n                    <app-user-detail-update *ngIf=\"getActiveUserTab('1')\" [loginUser]=\"loginUser\" [permission]=\"permission\" [user]=\"user\"></app-user-detail-update>\r\n                </tab>\r\n                <div *ngIf=\"permission\">\r\n                    <tab (selectTab)=\"setActiveUserTab($event)\" customClass=\"text-left\" id=\"2\">\r\n                        <ng-template tabHeading>\r\n                            <div class=\"d-flex\">\r\n                                <i class=\"fa fa-product-hunt\"></i><span class=\"mt-1 ml-1\">{{'users.profile.projects' | translate}}</span>\r\n                            </div>\r\n                        </ng-template>\r\n                        <app-user-projects *ngIf=\"getActiveUserTab('2')\" [loginUser]=\"loginUser\"></app-user-projects>\r\n                    </tab>\r\n                    <tab (selectTab)=\"setActiveUserTab($event)\" customClass=\"text-left\" id=\"3\">\r\n                        <ng-template tabHeading>\r\n                            <div class=\"d-flex\">\r\n                                <i class=\"fa fa-tasks\"></i><span class=\"mt-1 ml-1\">{{'users.profile.tasks' | translate}}</span>\r\n                            </div>\r\n                        </ng-template>\r\n                        <app-user-tasks *ngIf=\"getActiveUserTab('3')\" [loginUser]=\"loginUser\"></app-user-tasks>\r\n                    </tab>\r\n                    <tab (selectTab)=\"setActiveUserTab($event)\" customClass=\"text-left\" id=\"4\">\r\n                        <ng-template tabHeading>\r\n                            <div class=\"d-flex\">\r\n                                <i class=\"fa fa-bug\"></i><span class=\"mt-1 ml-1\">{{'users.profile.defects' | translate}}</span>\r\n                            </div>\r\n                        </ng-template>\r\n                        <app-user-defects *ngIf=\"getActiveUserTab('4')\" [loginUser]=\"loginUser\"></app-user-defects>\r\n                    </tab>\r\n                    <tab (selectTab)=\"setActiveUserTab($event)\" customClass=\"text-left\" id=\"5\">\r\n                        <ng-template tabHeading>\r\n                            <div class=\"d-flex\">\r\n                                <i class=\"fa fa-ticket\"></i><span class=\"mt-1 ml-1\">{{'users.profile.incidents' | translate}}</span>\r\n                            </div>\r\n                        </ng-template>\r\n                        <app-user-incidents *ngIf=\"getActiveUserTab('5')\" [apiUrl]=\"apiUrl\" [loginUser]=\"loginUser\"></app-user-incidents>\r\n                    </tab>\r\n                    <tab (selectTab)=\"setActiveUserTab($event)\" customClass=\"text-left\" id=\"6\">\r\n                        <ng-template tabHeading>\r\n                            <div class=\"d-flex\">\r\n                                <i class=\"fa fa-history\"></i><span class=\"mt-1 ml-1\">{{'users.profile.activities' | translate}}</span>\r\n                            </div>\r\n                        </ng-template>\r\n                        <app-user-activities *ngIf=\"getActiveUserTab('6')\" [loginUser]=\"loginUser\" [user]=\"user\"></app-user-activities>\r\n                    </tab>\r\n                </div>\r\n            </tabset>\r\n        </div>\r\n    </div>\r\n</section>\r\n");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/modules/admin/user/pages/user-edit/user-edit.component.html":
/*!*******************************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/modules/admin/user/pages/user-edit/user-edit.component.html ***!
  \*******************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<section *ngIf=\"isPageLoaded\" id=\"basic-form-layouts\">\r\n    <form (ngSubmit)=\"onSubmit()\" [formGroup]=\"editUserForm\">\r\n        <div class=\"row\">\r\n            <div class=\"col-md-6\">\r\n                <div class=\"card\">\r\n                    <div class=\"card-header\">\r\n                        <h4 class=\"card-title\" id=\"basic-layout-form\">{{'users.title2' | translate}}</h4>\r\n                    </div>\r\n                    <div class=\"card-body\">\r\n                        <div class=\"px-3\">\r\n                            <div class=\"form-body\">\r\n                                <h4 class=\"form-section\"><i class=\"ft-user\"></i> {{'users.headings.head1' | translate}}\r\n                                </h4>\r\n                                <div class=\"row\">\r\n                                    <div class=\"col-md-6\">\r\n                                        <div class=\"form-group\">\r\n                                            <label for=\"firstname\">{{'users.create.fields.first_name' | translate}}&nbsp;<span class=\"text-danger\">*</span></label>\r\n                                            <input [ngClass]=\"{ 'is-invalid': isFormSubmitted && userControl.firstname.errors }\" class=\"form-control\" formControlName=\"firstname\" id=\"firstname\" placeholder=\"{{'users.create.placeholders.placeholder1' | translate}}\" type=\"text\"/>\r\n                                            <div *ngIf=\"isFormSubmitted && userControl.firstname.errors\" class=\"invalid-feedback\">\r\n                                                <div *ngIf=\"userControl.firstname.errors.required\">{{'users.create.error_messages.message1' | translate}}</div>\r\n                                                <div *ngIf=\"userControl.firstname.errors.maxlength\">{{'users.create.error_messages.message2' | translate}}</div>\r\n                                            </div>\r\n                                        </div>\r\n                                    </div>\r\n                                    <div class=\"col-md-6\">\r\n                                        <div class=\"form-group\">\r\n                                            <label for=\"lastname\">{{'users.create.fields.last_name' | translate}}&nbsp;<span class=\"text-danger\">*</span></label>\r\n                                            <input [ngClass]=\"{ 'is-invalid': isFormSubmitted && userControl.lastname.errors }\" class=\"form-control\" formControlName=\"lastname\" id=\"lastname\" placeholder=\"{{'users.create.placeholders.placeholder2' | translate}}\" type=\"text\"/>\r\n                                            <div *ngIf=\"isFormSubmitted && userControl.lastname.errors\" class=\"invalid-feedback\">\r\n                                                <div *ngIf=\"userControl.lastname.errors.required\">{{'users.create.error_messages.message3' | translate}}</div>\r\n                                                <div *ngIf=\"userControl.lastname.errors.maxlength\">{{'users.create.error_messages.message4' | translate}}</div>\r\n                                            </div>\r\n                                        </div>\r\n                                    </div>\r\n                                    <div class=\"col-md-12\">\r\n                                        <div class=\"form-group\">\r\n                                            <label for=\"email\">{{'users.create.fields.email' | translate}}&nbsp;<span class=\"text-danger\">*</span></label>\r\n                                            <input [ngClass]=\"{ 'is-invalid': isFormSubmitted && userControl.email.errors }\" class=\"form-control\" formControlName=\"email\" id=\"email\" placeholder=\"{{'users.create.placeholders.placeholder3' | translate}}\" type=\"email\"/>\r\n                                            <div *ngIf=\"isFormSubmitted && userControl.email.errors\" class=\"invalid-feedback\">\r\n                                                <div *ngIf=\"userControl.email.errors.required\">{{'users.create.error_messages.message5' | translate}}</div>\r\n                                                <div *ngIf=\"userControl.email.errors.email\">{{'users.create.error_messages.message6' | translate}}</div>\r\n                                            </div>\r\n                                        </div>\r\n                                    </div>\r\n                                </div>\r\n                                <h4 class=\"form-section\">\r\n                                    <i class=\"ft-file-text\"></i> {{'users.headings.head2' | translate}}</h4>\r\n                                <div class=\"row\">\r\n                                    <div class=\"col-md-12\">\r\n                                        <div class=\"form-group\">\r\n                                            <label>{{'users.create.fields.profile_photo' | translate}}</label>\r\n                                            <input formControlName=\"avatar\" type=\"hidden\">\r\n                                            <div #pdfDropzone class=\"dropzone dz-clickable\">\r\n                                                <div *ngIf=\"isProfileLoaded && user.avatar\" class=\"dz-preview dz-image-preview\">\r\n                                                    <div class=\"dz-image\">\r\n                                                        <img src=\"{{apiUrl}}/uploads/profile/{{user.avatar}}\"/>\r\n                                                    </div>\r\n                                                    <a (click)=\"removeDropzoneImage()\" class=\"btn btn-default btn-sm btn-block\">{{'common.remove_file' | translate}}</a>\r\n                                                </div>\r\n                                                <!-- <div class=\"dz-default dz-message\" *ngIf=\"isProfileUploded\"> -->\r\n                                                <div class=\"dz-default dz-message\">\r\n                                                    <span><strong>{{'users.create.error_messages.message11' | translate}}</strong></span>\r\n                                                </div>\r\n                                            </div>\r\n                                            <div class=\"people-lists text-center\">\r\n                                                <a (click)=\"setAvatar(avatar)\" *ngFor=\"let avatar of avatars;\" [ngClass]=\"{active: isActive(avatar)}\" class=\"btn btn-profile-danger rounded-circle text-dark\">\r\n                                                    <img alt=\"Profile\" class=\"img-sm rounded-circle\" src=\"{{apiUrl}}/uploads/profile/{{avatar}}\"/>\r\n                                                </a>\r\n                                            </div>\r\n                                        </div>\r\n                                    </div>\r\n                                    <div class=\"col-md-12\">\r\n                                        <div [ngClass]=\"{ 'is-invalid': isFormSubmitted && userControl.department_roles.errors }\" class=\"form-group\">\r\n                                            <label>{{'users.create.fields.departments_roles' | translate}}&nbsp;<span class=\"text-danger\">*</span></label>\r\n                                            <ng-select (change)=\"departmentRolesChange($event)\" [items]=\"departmentsRoles\" [multiple]=\"true\" [selectableGroup]=\"false\" bindLabel=\"name\" bindValue=\"id\" formControlName=\"department_roles\" groupBy=\"department_name\" placeholder=\"{{'users.create.placeholders.placeholder6' | translate}}\">\r\n                                                <ng-template let-item=\"item\" ng-optgroup-tmp>\r\n                                                    {{item.department_name || 'Unnamed group'}}\r\n                                                </ng-template>\r\n                                            </ng-select>\r\n                                            <div *ngIf=\"isFormSubmitted && userControl.department_roles.errors\" class=\"invalid-feedback\">\r\n                                                <div *ngIf=\"userControl.department_roles.errors.required\">{{'users.create.error_messages.message12' | translate}}</div>\r\n                                            </div>\r\n                                        </div>\r\n                                    </div>\r\n                                    <div class=\"col-md-12\">\r\n                                        <label class=\"checkbox-container\">\r\n                                            <input class=\"form-control\" formControlName=\"is_super_admin\" id=\"is_super_admin\" type=\"checkbox\"/>{{'users.create.fields.is_departmenthead' | translate}}\r\n                                            <span class=\"checkbox-checkmark\"></span>\r\n                                        </label>\r\n                                    </div>\r\n                                    <div class=\"col-md-12\">\r\n                                        <div class=\"form-group\">\r\n                                            <label>{{'users.create.fields.assigned_to' | translate}}&nbsp;<span class=\"text-danger\">*</span></label><br/>\r\n                                            <div class=\"form-check radio-container\">\r\n                                                <input (change)=\"changePermission($event);isButtonShow = false\" class=\"form-check-input\" formControlName=\"assign_permission\" id=\"customize_permission1\" type=\"radio\" value=\"all\"/>\r\n                                                <label class=\"form-check-label\" for=\"customize_permission1\">{{'users.create.fields.everyone' | translate}}</label>\r\n                                                <span class=\"radio-checkmark\"></span>\r\n                                            </div>\r\n                                            <br/>\r\n                                            <div class=\"form-check radio-container\">\r\n                                                <input (change)=\"changePermission($event);isButtonShow = true\" class=\"form-check-input\" formControlName=\"assign_permission\" id=\"customize_permission2\" type=\"radio\" value=\"cutomize\"/>\r\n                                                <label class=\"form-check-label\" for=\"customize_permission2\">{{'users.create.fields.customize_permission' | translate}}</label>\r\n                                                <span class=\"radio-checkmark\"></span><br/><br/>\r\n                                                <button (click)=\"openAssignUserModal($event)\" *ngIf=\"isButtonShow\" class=\"btn btn-raised btn-primary\">\r\n                                                    <span>{{'users.buttons.assign_permission' | translate}}</span>\r\n                                                </button>\r\n                                            </div>\r\n                                            <div *ngIf=\"isPermissionRequired\" class=\"invalid-feedback d-block\">{{'users.create.error_messages.message13' | translate}}</div>\r\n                                        </div>\r\n                                    </div>\r\n                                </div>\r\n                            </div>\r\n                        </div>\r\n                    </div>\r\n                </div>\r\n            </div>\r\n            <div class=\"col-md-6\">\r\n                <div class=\"card\">\r\n                    <div class=\"card-header\">&nbsp;</div>\r\n                    <div class=\"card-body\">\r\n                        <div class=\"px-3\">\r\n                            <div class=\"form-body\">\r\n                                <h4 class=\"form-section\"><i class=\"ft-user\"></i> {{'users.headings.head3' | translate}}\r\n                                </h4>\r\n                                <div class=\"row\">\r\n                                    <div class=\"col-md-6\">\r\n                                        <div class=\"form-group\">\r\n                                            <label for=\"user_generated_id\">{{'users.create.fields.userid' | translate}}&nbsp;<span class=\"text-danger\">*</span></label>\r\n                                            <input [ngClass]=\"{ 'is-invalid': isFormSubmitted && userControl.user_generated_id.errors }\" abindex=\"-1\" class=\"form-control\" formControlName=\"user_generated_id\" id=\"user_generated_id\" placeholder=\"USR000\" readonly type=\"text\"/>\r\n                                            <div *ngIf=\"isFormSubmitted && userControl.user_generated_id.errors\" class=\"invalid-feedback\">\r\n                                                <div *ngIf=\"userControl.user_generated_id.errors.required\">{{'users.create.error_messages.message14' | translate}}</div>\r\n                                            </div>\r\n                                        </div>\r\n                                    </div>\r\n                                    <div class=\"col-md-6\">\r\n                                        <div class=\"form-group\">\r\n                                            <label for=\"employee_id\">{{'users.create.fields.employment_ID' | translate}}&nbsp;<span class=\"text-danger\">*</span></label>\r\n                                            <input [ngClass]=\"{ 'is-invalid': isFormSubmitted && userControl.emp_id.errors }\" class=\"form-control\" formControlName=\"emp_id\" id=\"employee_id\" placeholder=\"EMP0001\" type=\"text\"/>\r\n                                            <div *ngIf=\"isFormSubmitted && userControl.emp_id.errors\" class=\"invalid-feedback\">\r\n                                                <div *ngIf=\"userControl.emp_id.errors.required\">{{'users.create.error_messages.message15' | translate}}</div>\r\n                                            </div>\r\n                                        </div>\r\n                                    </div>\r\n                                    <div class=\"col-md-6\">\r\n                                        <div class=\"form-group\">\r\n                                            <label for=\"username\">{{'users.create.fields.username' | translate}}&nbsp;<span class=\"text-danger\">*</span></label>\r\n                                            <div class=\"input-group\">\r\n                                                <div class=\"input-group-prepend no-borders no-paddings\">\r\n                                                    <span class=\"input-group-text font-12\" id=\"usernamePrepend\">@</span>\r\n                                                </div>\r\n                                                <input [ngClass]=\"{ 'is-invalid': isFormSubmitted && userControl.username.errors }\" aria-describedby=\"usernamePrepend\" class=\"form-control\" formControlName=\"username\" id=\"username\" placeholder=\"{{'users.create.placeholders.placeholder7' | translate}}\" type=\"text\"/>\r\n                                                <div *ngIf=\"isFormSubmitted && userControl.username.errors\" class=\"invalid-feedback\">\r\n                                                    <div *ngIf=\"userControl.username.errors.required\">{{'users.create.error_messages.message16' | translate}}</div>\r\n                                                    <div *ngIf=\"userControl.username.errors.minlength || userControl.username.errors.maxlength || userControl.username.errors.pattern\">{{'users.create.error_messages.message17' | translate}}</div>\r\n                                                </div>\r\n                                            </div>\r\n                                        </div>\r\n                                    </div>\r\n                                    <div class=\"col-md-6\">\r\n                                        <div class=\"form-group\">\r\n                                            <label for=\"primary_manager\">{{'users.create.fields.primary_manager' | translate}}</label>\r\n                                            <ng-select [items]=\"users\" [searchable]=\"true\" [selectOnTab]=\"true\" bindLabel=\"firstname\" bindValue=\"id\" formControlName=\"primary_manager\" labelForId=\"primary_manager\" placeholder=\"{{'users.create.placeholders.placeholder12' | translate}}\">\r\n                                                <ng-template let-item=\"item\" ng-option-tmp>\r\n                                                    {{item.firstname}} {{item.lastname}}\r\n                                                </ng-template>\r\n                                            </ng-select>\r\n                                        </div>\r\n                                    </div>\r\n                                    <div class=\"col-md-6\">\r\n                                        <div class=\"form-group\">\r\n                                            <label for=\"secondary_manager\">{{'users.create.fields.secondary_manager' | translate}}</label>\r\n                                            <ng-select [items]=\"users\" [searchable]=\"true\" [selectOnTab]=\"true\" bindLabel=\"firstname\" bindValue=\"id\" formControlName=\"secondary_manager\" labelForId=\"secondary_manager\" placeholder=\"{{'users.create.placeholders.placeholder13' | translate}}\">\r\n                                                <ng-template let-item=\"item\" ng-option-tmp>\r\n                                                    {{item.firstname}} {{item.lastname}}\r\n                                                </ng-template>\r\n                                            </ng-select>\r\n                                        </div>\r\n                                    </div>\r\n                                    <div class=\"col-md-6\">\r\n                                        <div class=\"form-group\">\r\n                                            <label for=\"language\">{{'users.create.fields.language' | translate}}</label>\r\n                                            <ng-select [items]=\"languages\" [searchable]=\"true\" [selectOnTab]=\"true\" bindLabel=\"name\" bindValue=\"language\" formControlName=\"language\" labelForId=\"language\" placeholder=\"{{'users.create.placeholders.placeholder10' | translate}}\"></ng-select>\r\n                                        </div>\r\n                                    </div>\r\n                                </div>\r\n                                <h4 class=\"form-section\"><i class=\"ft-mail\"></i> {{'users.headings.head4' | translate}}\r\n                                </h4>\r\n                                <div class=\"row\">\r\n                                    <div class=\"col-md-6\">\r\n                                        <div class=\"form-group\">\r\n                                            <label for=\"mobile\">{{'users.create.fields.mobile' | translate}}</label>\r\n                                            <input [ngClass]=\"{ 'is-invalid': isFormSubmitted && userControl.mobile.errors }\" class=\"form-control\" formControlName=\"mobile\" id=\"mobile\" placeholder=\"xxxxxxxxxx\" type=\"text\"/>\r\n                                            <div *ngIf=\"isFormSubmitted && userControl.mobile.errors\" class=\"invalid-feedback\">\r\n                                                <div *ngIf=\"userControl.mobile.errors.pattern\">{{'users.create.error_messages.message18' | translate}}</div>\r\n                                            </div>\r\n                                        </div>\r\n                                    </div>\r\n                                    <div class=\"col-md-6\">\r\n                                        <div class=\"form-group\">\r\n                                            <label for=\"phone\">{{'users.create.fields.phone' | translate}}</label>\r\n                                            <input [ngClass]=\"{ 'is-invalid': isFormSubmitted && userControl.phone.errors }\" class=\"form-control\" formControlName=\"phone\" id=\"phone\" placeholder=\"xxxxxxxxxx\" type=\"text\"/>\r\n                                            <div *ngIf=\"isFormSubmitted && userControl.phone.errors\" class=\"invalid-feedback\">\r\n                                                <div *ngIf=\"userControl.phone.errors.pattern\">{{'users.create.error_messages.message19' | translate}}</div>\r\n                                            </div>\r\n                                        </div>\r\n                                    </div>\r\n                                    <div class=\"col-md-6\">\r\n                                        <div class=\"form-group\">\r\n                                            <label for=\"skype\">{{'users.create.fields.skype' | translate}}</label>\r\n                                            <input class=\"form-control\" formControlName=\"skype\" id=\"skype\" placeholder=\"{{'users.create.placeholders.placeholder8' | translate}}\" type=\"text\"/>\r\n                                        </div>\r\n                                    </div>\r\n                                    <div class=\"col-md-6\">\r\n                                        <div class=\"form-group\">\r\n                                            <label for=\"country\">{{'users.create.fields.country' | translate}}</label>\r\n                                            <ng-select [items]=\"countries\" [searchable]=\"true\" [selectOnTab]=\"true\" bindLabel=\"name\" bindValue=\"code\" formControlName=\"country\" labelForId=\"country\" placeholder=\"{{'users.create.placeholders.placeholder9' | translate}}\"></ng-select>\r\n                                        </div>\r\n                                    </div>\r\n                                    <div class=\"col-md-12\">\r\n                                        <div class=\"form-group\">\r\n                                            <label for=\"address\">{{'users.create.fields.address' | translate}}</label>\r\n                                            <textarea class=\"form-control\" formControlName=\"address\" id=\"address\" placeholder=\"{{'users.create.placeholders.placeholder14' | translate}}\"></textarea>\r\n                                        </div>\r\n                                    </div>\r\n                                </div>\r\n                            </div>\r\n                        </div>\r\n                    </div>\r\n                </div>\r\n            </div>\r\n            <div class=\"col-md-12 text-right\">\r\n                <a [routerLink]=\"['/users']\" class=\"btn btn-cancel\">{{'common.cancel' | translate}}</a>\r\n                <button class=\"btn btn-submit\" type=\"submit\">{{'common.update' | translate}}</button>\r\n            </div>\r\n        </div>\r\n    </form>\r\n</section>\r\n");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/modules/admin/user/pages/user/user.component.html":
/*!*********************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/modules/admin/user/pages/user/user.component.html ***!
  \*********************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<section class=\"hide_empty_message\">\r\n    <div class=\"row\">\r\n        <div class=\"col-sm-12\">\r\n            <div class=\"card pl-2 pr-2\">\r\n                <div class=\"card-header pl-0 pr-0 border-bottom\">\r\n                    <h4 class=\"main-title mt-2\"><span>{{'users.title' | translate}}</span></h4>\r\n                    <div class=\"card-buttons\">\r\n                        <a *ngxPermissionsOnly=\"['admin', 'super_admin', 'users_create']\" class=\"btn btn-create mb-0\" download=\"import_users.csv\" href=\"{{ apiUrl }}/csv/import_users.csv\" placement=\"top\" tooltip=\"{{'common.tooltip.user_csv_sample' | translate}}\"><i class=\"fa fa-files-o\"></i></a>\r\n                        <button (click)=\"openUserImportModal()\" *ngxPermissionsOnly=\"['admin', 'super_admin', 'users_create']\" class=\"btn btn-create mb-0\" tooltip=\"{{'common.import' | translate}}\">\r\n                            <i class=\"fa fa-upload\"></i></button>\r\n                        <a *ngxPermissionsOnly=\"['admin', 'super_admin', 'users_create']\" [routerLink]=\"['/users/create']\" class=\"btn btn-create mb-0\" tooltip=\"{{'common.create' | translate}}\"><i class=\"fa fa-plus\"></i></a>\r\n                    </div>\r\n                </div>\r\n                <div class=\"card-content pt-3 pb-3\">\r\n                    <div class=\"card-body\">\r\n                        <div class=\"table-responsive-xs table-responsive-sm table-responsive-md table-responsive-lg table-responsive-xl\">\r\n                            <table [dtOptions]=\"dtOptions\" [dtTrigger]=\"dtTrigger\" class=\"table table-bordered table-hover b4-datatable\" datatable id=\"users_table\" width=\"100%\">\r\n                                <thead>\r\n                                <tr>\r\n                                    <th>{{'users.columns.photo' | translate}}</th>\r\n                                    <th>{{'users.columns.first_name' | translate}}</th>\r\n                                    <th>{{'users.columns.last_name' | translate}}</th>\r\n                                    <th>{{'users.columns.username' | translate}}</th>\r\n                                    <th>{{'users.columns.status' | translate}}</th>\r\n                                    <th>{{'users.columns.departments_roles' | translate}}</th>\r\n                                    <th>{{'users.columns.actions' | translate}}</th>\r\n                                </tr>\r\n                                </thead>\r\n                                <tbody *ngIf=\"users?.length != 0\">\r\n                                <tr *ngFor=\"let user of users; index as i\">\r\n                                    <td class=\"people-lists\">\r\n                                        <a [routerLink]=\"['/users/profile', user.id]\" class=\"btn btn-profile-info rounded-circle text-dark\" placement=\"top\" tooltip=\"{{user.firstname}} {{user.lastname}}\">\r\n                                            <img *ngIf=\"user.avatar\" alt=\"Profile\" class=\"img-sm rounded-circle\" src=\"{{apiUrl}}/uploads/profile/{{user.avatar}}\"/>\r\n                                            <img *ngIf=\"!user.avatar\" alt=\"Profile\" class=\"img-sm rounded-circle\" src=\"../assets/img/profile_small.jpg\"/>\r\n                                        </a>\r\n                                    </td>\r\n                                    <td>\r\n                                        <ng-container *ngIf=\"user.department_role_perm.isEditable; else elseBlock1\">\r\n                                            <inline-edit-input (updateValue)=\"saveUserDetail(i, 'firstname', $event);\" [elementFor]=\"'users.inline_edit.first_name' | translate\" [fieldValue]=\"user.firstname\" [isRequired]=\"'true'\" [maxLength]=\"20\" [name]=\"'firstname'\" [type]=\"'text'\"></inline-edit-input>\r\n                                        </ng-container>\r\n                                        <ng-template #elseBlock1>{{user.firstname}}</ng-template>\r\n                                    </td>\r\n                                    <td>\r\n                                        <ng-container *ngIf=\"user.department_role_perm.isEditable; else elseBlock2\">\r\n                                            <inline-edit-input (updateValue)=\"saveUserDetail(i, 'lastname', $event);\" [elementFor]=\"'users.inline_edit.last_name' | translate\" [fieldValue]=\"user.lastname\" [isRequired]=\"'true'\" [maxLength]=\"20\" [name]=\"'lastname'\" [type]=\"'text'\"></inline-edit-input>\r\n                                        </ng-container>\r\n                                        <ng-template #elseBlock2>{{user.lastname}}</ng-template>\r\n                                    </td>\r\n                                    <td>\r\n                                        <a [routerLink]=\"['profile', user.id]\" tooltip=\"{{'common.view' | translate}}\">{{user.username}}</a>\r\n                                    </td>\r\n                                    <td class=\"text-center\">\r\n                                        <ng-container *ngIf=\"user.department_role_perm.isEditable && user.id != 1; else elseBlock3\">\r\n                                            <ui-switch (valueChange)=\"setActiveDeactiveUser($event, user)\" [checked]=\"user.is_active == '1' ? true : false\"></ui-switch>\r\n                                        </ng-container>\r\n                                        <ng-template #elseBlock3>\r\n                                            <div class=\"budges-status\">\r\n                                                <span *ngIf=\"user.is_active == '1'\" class=\"completed\">{{'common.status.active' | translate}}</span>\r\n                                                <span *ngIf=\"user.is_active == '0'\" class=\"cancel\">{{'common.status.deactive' | translate}}</span>\r\n                                            </div>\r\n                                        </ng-template>\r\n                                    </td>\r\n                                    <td class=\"budges-status\">\r\n                                        <ng-template *ngIf=\"user.roles?.length == 0;else elseBlock4\">-</ng-template>\r\n                                        <ng-template #elseBlock4>\r\n                                            <span *ngFor=\"let role of departments[user.id]\" [ngClass]=\"{'cancel': role.role_id == 1, 'completed': role.role_id != 1}\">{{role.role_name}} ({{role.department_name}})</span>\r\n                                        </ng-template>\r\n                                    </td>\r\n                                    <td class=\"actions-dropdown\">\r\n                                        <div class=\"btn-group\" dropdown>\r\n                                            <button aria-controls=\"dropdown-basic-1\" class=\"dropdown-toggle btn-action\" dropdownToggle id=\"button-basic-1\" type=\"button\">\r\n                                                <i class=\"fa fa-ellipsis-v\"></i></button>\r\n                                            <ul *dropdownMenu aria-labelledby=\"button-basic-1\" class=\"dropdown-menu animated fadeIn\" id=\"dropdown-basic-1\" role=\"menu\">\r\n                                                <li *ngIf=\"user.email_verified == '0' || user.email_verified == 0\" role=\"menuitem\">\r\n                                                    <a (click)=\"sendInviteUserMail(user.id)\" *ngxPermissionsOnly=\"['admin', 'super_admin']\" class=\"dropdown-item btn btn-invite btn-raised\" tooltip=\"{{'common.invite' | translate}}\"><i class=\"fa fa-envelope-o\"></i></a>\r\n                                                </li>\r\n                                                <li role=\"menuitem\">\r\n                                                    <a *ngIf=\"user.department_role_perm.isEditable\" [routerLink]=\"['edit', user.id]\" class=\"dropdown-item btn btn-edit btn-raised\" tooltip=\"{{'common.edit' | translate}}\"><i class=\"fa fa-pencil-square-o\"></i></a>\r\n                                                </li>\r\n                                                <li role=\"menuitem\">\r\n                                                    <a (click)=\"userDelete(user.id)\" *ngIf=\"user.department_role_perm.isDeletable\" class=\"dropdown-item btn btn-delete btn-raised\" tooltip=\"{{'common.delete' | translate}}\"><i class=\"fa fa-trash-o\"></i></a>\r\n                                                </li>\r\n                                            </ul>\r\n                                        </div>\r\n                                    </td>\r\n                                </tr>\r\n                                </tbody>\r\n                                <tfoot *ngIf=\"users?.length == 0\" class=\"tfoot_dt\">\r\n                                <tr>\r\n                                    <td class=\"no-data-available text-center\" colspan=\"7\">{{'common.datatable.sEmptyTable' | translate}}</td>\r\n                                </tr>\r\n                                </tfoot>\r\n                            </table>\r\n                        </div>\r\n                    </div>\r\n                </div>\r\n            </div>\r\n        </div>\r\n    </div>\r\n</section>\r\n");

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

/***/ "./src/app/modules/admin/user/components/assign-user/assign-user.component.scss":
/*!**************************************************************************************!*\
  !*** ./src/app/modules/admin/user/components/assign-user/assign-user.component.scss ***!
  \**************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL21vZHVsZXMvYWRtaW4vdXNlci9jb21wb25lbnRzL2Fzc2lnbi11c2VyL2Fzc2lnbi11c2VyLmNvbXBvbmVudC5zY3NzIn0= */");

/***/ }),

/***/ "./src/app/modules/admin/user/components/assign-user/assign-user.component.ts":
/*!************************************************************************************!*\
  !*** ./src/app/modules/admin/user/components/assign-user/assign-user.component.ts ***!
  \************************************************************************************/
/*! exports provided: AssignUserComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AssignUserComponent", function() { return AssignUserComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var ngx_bootstrap_modal__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ngx-bootstrap/modal */ "./node_modules/ngx-bootstrap/modal/fesm5/ngx-bootstrap-modal.js");
/* harmony import */ var ngx_toastr__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ngx-toastr */ "./node_modules/ngx-toastr/fesm5/ngx-toastr.js");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! rxjs */ "./node_modules/rxjs/_esm5/index.js");
/* harmony import */ var _core_services_user_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../../../../core/services/user.service */ "./src/app/core/services/user.service.ts");






var AssignUserComponent = /** @class */ (function () {
    function AssignUserComponent(bsModalRef, toastr, userService) {
        this.bsModalRef = bsModalRef;
        this.toastr = toastr;
        this.userService = userService;
        this.event = new _angular_core__WEBPACK_IMPORTED_MODULE_1__["EventEmitter"]();
        this.isFormSubmitted = false;
        this.permissions = [];
        this.permissionsUsers = [];
        this.assignPermissions = [];
        this.hideElements = [];
        this.isModalLoaded = false;
    }
    AssignUserComponent.prototype.ngOnInit = function () {
        this.onClose = new rxjs__WEBPACK_IMPORTED_MODULE_4__["Subject"]();
        this.getAssignUserPermissions();
    };
    AssignUserComponent.prototype.onCancel = function () {
        this.onClose.next(false);
        this.bsModalRef.hide();
    };
    AssignUserComponent.prototype.getAssignUserPermissions = function () {
        var _this = this;
        this.userService.getUserPermissions()
            .subscribe(function (data) {
            _this.assignUserPermissions = data;
            _this.setAssignUserPermissions();
            _this.isModalLoaded = true;
        });
    };
    AssignUserComponent.prototype.setAssignUserPermissions = function () {
        for (var iRow in this.assignUserPermissions) {
            this.permissions[this.assignUserPermissions[iRow].id] = ['view', 'delete', 'edit'];
            this.permissionsUsers[this.assignUserPermissions[iRow].id] = {
                'name': this.assignUserPermissions[iRow].firstname + ' ' + this.assignUserPermissions[iRow].lastname
            };
        }
    };
    AssignUserComponent.prototype.changePermissions = function (index, key) {
        this.hideElements[index] = !this.hideElements[index];
        if (this.hideElements[index]) {
            this.assignPermissions[key] = ['view'];
        }
        else {
            delete this.assignPermissions[key];
        }
    };
    AssignUserComponent.prototype.checkObjectKeys = function () {
        return Object.keys(this.assignPermissions).length == 0;
    };
    AssignUserComponent.prototype.isPermissionChecked = function (key, permission, index) {
        if (permission[key]) {
            this.hideElements[index] = true;
            return true;
        }
        else {
            return false;
        }
    };
    AssignUserComponent.prototype.onSubmit = function () {
        this.isFormSubmitted = true;
        if (this.checkObjectKeys()) {
            return false;
        }
        this.event.emit({ permissions: this.assignPermissions });
        this.onCancel();
    };
    AssignUserComponent.ctorParameters = function () { return [
        { type: ngx_bootstrap_modal__WEBPACK_IMPORTED_MODULE_2__["BsModalRef"] },
        { type: ngx_toastr__WEBPACK_IMPORTED_MODULE_3__["ToastrService"] },
        { type: _core_services_user_service__WEBPACK_IMPORTED_MODULE_5__["UserService"] }
    ]; };
    AssignUserComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-assign-user',
            template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./assign-user.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/modules/admin/user/components/assign-user/assign-user.component.html")).default,
            styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./assign-user.component.scss */ "./src/app/modules/admin/user/components/assign-user/assign-user.component.scss")).default]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [ngx_bootstrap_modal__WEBPACK_IMPORTED_MODULE_2__["BsModalRef"],
            ngx_toastr__WEBPACK_IMPORTED_MODULE_3__["ToastrService"],
            _core_services_user_service__WEBPACK_IMPORTED_MODULE_5__["UserService"]])
    ], AssignUserComponent);
    return AssignUserComponent;
}());



/***/ }),

/***/ "./src/app/modules/admin/user/components/change-email-modal/change-email-modal.component.scss":
/*!****************************************************************************************************!*\
  !*** ./src/app/modules/admin/user/components/change-email-modal/change-email-modal.component.scss ***!
  \****************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL21vZHVsZXMvYWRtaW4vdXNlci9jb21wb25lbnRzL2NoYW5nZS1lbWFpbC1tb2RhbC9jaGFuZ2UtZW1haWwtbW9kYWwuY29tcG9uZW50LnNjc3MifQ== */");

/***/ }),

/***/ "./src/app/modules/admin/user/components/change-email-modal/change-email-modal.component.ts":
/*!**************************************************************************************************!*\
  !*** ./src/app/modules/admin/user/components/change-email-modal/change-email-modal.component.ts ***!
  \**************************************************************************************************/
/*! exports provided: ChangeEmailModalComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ChangeEmailModalComponent", function() { return ChangeEmailModalComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var ngx_bootstrap_modal__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ngx-bootstrap/modal */ "./node_modules/ngx-bootstrap/modal/fesm5/ngx-bootstrap-modal.js");
/* harmony import */ var ngx_toastr__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ngx-toastr */ "./node_modules/ngx-toastr/fesm5/ngx-toastr.js");
/* harmony import */ var _ngx_translate_core__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @ngx-translate/core */ "./node_modules/@ngx-translate/core/fesm5/ngx-translate-core.js");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! rxjs */ "./node_modules/rxjs/_esm5/index.js");
/* harmony import */ var _core_services_user_service__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../../../../../core/services/user.service */ "./src/app/core/services/user.service.ts");








var ChangeEmailModalComponent = /** @class */ (function () {
    function ChangeEmailModalComponent(translate, bsModalRef, formBuilder, toastr, userService) {
        this.translate = translate;
        this.bsModalRef = bsModalRef;
        this.formBuilder = formBuilder;
        this.toastr = toastr;
        this.userService = userService;
        this.event = new _angular_core__WEBPACK_IMPORTED_MODULE_1__["EventEmitter"]();
        this.isFormSubmitted = false;
    }
    Object.defineProperty(ChangeEmailModalComponent.prototype, "userControl", {
        get: function () {
            return this.changeUserEmailForm.controls;
        },
        enumerable: true,
        configurable: true
    });
    ChangeEmailModalComponent.prototype.ngOnInit = function () {
        this.onClose = new rxjs__WEBPACK_IMPORTED_MODULE_6__["Subject"]();
        this.loadForms();
    };
    ChangeEmailModalComponent.prototype.loadForms = function () {
        this.changeUserEmailForm = this.formBuilder.group({
            id: this.user.id,
            email: [null, [_angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required, _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].email]],
            password: [null, _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required]
        });
    };
    ChangeEmailModalComponent.prototype.onSubmit = function () {
        var _this = this;
        this.isFormSubmitted = true;
        if (this.changeUserEmailForm.invalid) {
            return;
        }
        // --
        // this.toastr.error(this.translate.instant('common.not_allowed'));
        // this.onCancel();
        // return;
        this.userService.changeEmail(this.changeUserEmailForm.value)
            .subscribe(function (data) {
            _this.toastr.success(_this.translate.instant('users.messages.email_change'), _this.translate.instant('users.title'));
            _this.onCancel();
        }, function (error) {
            _this.onCancel();
        });
    };
    ChangeEmailModalComponent.prototype.onCancel = function () {
        this.onClose.next(false);
        this.bsModalRef.hide();
    };
    ChangeEmailModalComponent.ctorParameters = function () { return [
        { type: _ngx_translate_core__WEBPACK_IMPORTED_MODULE_5__["TranslateService"] },
        { type: ngx_bootstrap_modal__WEBPACK_IMPORTED_MODULE_3__["BsModalRef"] },
        { type: _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormBuilder"] },
        { type: ngx_toastr__WEBPACK_IMPORTED_MODULE_4__["ToastrService"] },
        { type: _core_services_user_service__WEBPACK_IMPORTED_MODULE_7__["UserService"] }
    ]; };
    ChangeEmailModalComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-change-email-modal',
            template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./change-email-modal.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/modules/admin/user/components/change-email-modal/change-email-modal.component.html")).default,
            styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./change-email-modal.component.scss */ "./src/app/modules/admin/user/components/change-email-modal/change-email-modal.component.scss")).default]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_ngx_translate_core__WEBPACK_IMPORTED_MODULE_5__["TranslateService"],
            ngx_bootstrap_modal__WEBPACK_IMPORTED_MODULE_3__["BsModalRef"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormBuilder"],
            ngx_toastr__WEBPACK_IMPORTED_MODULE_4__["ToastrService"],
            _core_services_user_service__WEBPACK_IMPORTED_MODULE_7__["UserService"]])
    ], ChangeEmailModalComponent);
    return ChangeEmailModalComponent;
}());



/***/ }),

/***/ "./src/app/modules/admin/user/components/change-password-modal/change-password-modal.component.scss":
/*!**********************************************************************************************************!*\
  !*** ./src/app/modules/admin/user/components/change-password-modal/change-password-modal.component.scss ***!
  \**********************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL21vZHVsZXMvYWRtaW4vdXNlci9jb21wb25lbnRzL2NoYW5nZS1wYXNzd29yZC1tb2RhbC9jaGFuZ2UtcGFzc3dvcmQtbW9kYWwuY29tcG9uZW50LnNjc3MifQ== */");

/***/ }),

/***/ "./src/app/modules/admin/user/components/change-password-modal/change-password-modal.component.ts":
/*!********************************************************************************************************!*\
  !*** ./src/app/modules/admin/user/components/change-password-modal/change-password-modal.component.ts ***!
  \********************************************************************************************************/
/*! exports provided: ChangePasswordModalComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ChangePasswordModalComponent", function() { return ChangePasswordModalComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var ngx_bootstrap_modal__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ngx-bootstrap/modal */ "./node_modules/ngx-bootstrap/modal/fesm5/ngx-bootstrap-modal.js");
/* harmony import */ var ngx_toastr__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ngx-toastr */ "./node_modules/ngx-toastr/fesm5/ngx-toastr.js");
/* harmony import */ var _ngx_translate_core__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @ngx-translate/core */ "./node_modules/@ngx-translate/core/fesm5/ngx-translate-core.js");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! rxjs */ "./node_modules/rxjs/_esm5/index.js");
/* harmony import */ var _core_services_user_service__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../../../../../core/services/user.service */ "./src/app/core/services/user.service.ts");
/* harmony import */ var _core_helpers_must_match_validator__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./../../../../../core/helpers/must-match.validator */ "./src/app/core/helpers/must-match.validator.ts");









var ChangePasswordModalComponent = /** @class */ (function () {
    function ChangePasswordModalComponent(translate, bsModalRef, formBuilder, toastr, userService) {
        this.translate = translate;
        this.bsModalRef = bsModalRef;
        this.formBuilder = formBuilder;
        this.toastr = toastr;
        this.userService = userService;
        this.event = new _angular_core__WEBPACK_IMPORTED_MODULE_1__["EventEmitter"]();
        this.isFormSubmitted = false;
    }
    Object.defineProperty(ChangePasswordModalComponent.prototype, "userControl", {
        get: function () {
            return this.changeUserPasswordForm.controls;
        },
        enumerable: true,
        configurable: true
    });
    ChangePasswordModalComponent.prototype.ngOnInit = function () {
        this.onClose = new rxjs__WEBPACK_IMPORTED_MODULE_6__["Subject"]();
        this.loadForms();
    };
    ChangePasswordModalComponent.prototype.loadForms = function () {
        this.changeUserPasswordForm = this.formBuilder.group({
            id: this.user.id,
            old_password: [null, _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required],
            password: [null, [_angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required, _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].minLength(3), _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].maxLength(30)]],
            password_confirmation: [null, _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required],
        }, {
            validator: Object(_core_helpers_must_match_validator__WEBPACK_IMPORTED_MODULE_8__["MustMatch"])('password', 'password_confirmation')
        });
    };
    ChangePasswordModalComponent.prototype.onSubmit = function () {
        var _this = this;
        this.isFormSubmitted = true;
        if (this.changeUserPasswordForm.invalid) {
            return;
        }
        // --
        // this.toastr.error(this.translate.instant('common.not_allowed'));
        // this.onCancel();
        // return;
        this.userService.changePassword(this.changeUserPasswordForm.value)
            .subscribe(function (data) {
            _this.toastr.success(_this.translate.instant('users.messages.password_change'), _this.translate.instant('users.title'));
            _this.onCancel();
        }, function (error) {
            _this.onCancel();
        });
    };
    ChangePasswordModalComponent.prototype.onCancel = function () {
        this.onClose.next(false);
        this.bsModalRef.hide();
    };
    ChangePasswordModalComponent.ctorParameters = function () { return [
        { type: _ngx_translate_core__WEBPACK_IMPORTED_MODULE_5__["TranslateService"] },
        { type: ngx_bootstrap_modal__WEBPACK_IMPORTED_MODULE_3__["BsModalRef"] },
        { type: _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormBuilder"] },
        { type: ngx_toastr__WEBPACK_IMPORTED_MODULE_4__["ToastrService"] },
        { type: _core_services_user_service__WEBPACK_IMPORTED_MODULE_7__["UserService"] }
    ]; };
    ChangePasswordModalComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-change-password-modal',
            template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./change-password-modal.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/modules/admin/user/components/change-password-modal/change-password-modal.component.html")).default,
            styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./change-password-modal.component.scss */ "./src/app/modules/admin/user/components/change-password-modal/change-password-modal.component.scss")).default]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_ngx_translate_core__WEBPACK_IMPORTED_MODULE_5__["TranslateService"],
            ngx_bootstrap_modal__WEBPACK_IMPORTED_MODULE_3__["BsModalRef"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormBuilder"],
            ngx_toastr__WEBPACK_IMPORTED_MODULE_4__["ToastrService"],
            _core_services_user_service__WEBPACK_IMPORTED_MODULE_7__["UserService"]])
    ], ChangePasswordModalComponent);
    return ChangePasswordModalComponent;
}());



/***/ }),

/***/ "./src/app/modules/admin/user/components/import-user/import-user.component.scss":
/*!**************************************************************************************!*\
  !*** ./src/app/modules/admin/user/components/import-user/import-user.component.scss ***!
  \**************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL21vZHVsZXMvYWRtaW4vdXNlci9jb21wb25lbnRzL2ltcG9ydC11c2VyL2ltcG9ydC11c2VyLmNvbXBvbmVudC5zY3NzIn0= */");

/***/ }),

/***/ "./src/app/modules/admin/user/components/import-user/import-user.component.ts":
/*!************************************************************************************!*\
  !*** ./src/app/modules/admin/user/components/import-user/import-user.component.ts ***!
  \************************************************************************************/
/*! exports provided: ImportUserComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ImportUserComponent", function() { return ImportUserComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var ngx_bootstrap_modal__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ngx-bootstrap/modal */ "./node_modules/ngx-bootstrap/modal/fesm5/ngx-bootstrap-modal.js");
/* harmony import */ var ngx_toastr__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ngx-toastr */ "./node_modules/ngx-toastr/fesm5/ngx-toastr.js");
/* harmony import */ var _ngx_translate_core__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ngx-translate/core */ "./node_modules/@ngx-translate/core/fesm5/ngx-translate-core.js");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! rxjs */ "./node_modules/rxjs/_esm5/index.js");
/* harmony import */ var _core_services_user_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../../../../core/services/user.service */ "./src/app/core/services/user.service.ts");







var ImportUserComponent = /** @class */ (function () {
    function ImportUserComponent(translate, bsImportUserModalRef, toastr, userService) {
        this.translate = translate;
        this.bsImportUserModalRef = bsImportUserModalRef;
        this.toastr = toastr;
        this.userService = userService;
        this.event = new _angular_core__WEBPACK_IMPORTED_MODULE_1__["EventEmitter"]();
        this.fileAttached = false;
        this.isPageLoaded = false;
        this.isFormSubmitted = false;
        this.csvFileSelected = false;
    }
    ImportUserComponent.prototype.ngOnInit = function () {
        this.onClose = new rxjs__WEBPACK_IMPORTED_MODULE_5__["Subject"]();
    };
    ImportUserComponent.prototype.fileUpload = function (files) {
        var _this = this;
        if (files && files.length > 0) {
            var file = files.item(0), reader_1 = new FileReader();
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
                    _this.toastr.error(_this.translate.instant('users.create.error_messages.message22'), _this.translate.instant('users.title'));
                    _this.csvFileSelected = false;
                    return;
                }
                var newLinebrk = csvdata.split('\n');
                var columnNames = newLinebrk[0].split(',');
                _this.csvFileColumnName = columnNames;
            };
        }
    };
    ImportUserComponent.prototype.onSubmit = function () {
        var _this = this;
        this.isFormSubmitted = true;
        this.userService.import({ csv_file: this.csvData })
            .subscribe(function (data) {
            _this.event.emit({ data: true });
            _this.onCancel();
        });
    };
    ImportUserComponent.prototype.onCancel = function () {
        this.onClose.next(false);
        this.bsImportUserModalRef.hide();
    };
    ImportUserComponent.ctorParameters = function () { return [
        { type: _ngx_translate_core__WEBPACK_IMPORTED_MODULE_4__["TranslateService"] },
        { type: ngx_bootstrap_modal__WEBPACK_IMPORTED_MODULE_2__["BsModalRef"] },
        { type: ngx_toastr__WEBPACK_IMPORTED_MODULE_3__["ToastrService"] },
        { type: _core_services_user_service__WEBPACK_IMPORTED_MODULE_6__["UserService"] }
    ]; };
    ImportUserComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-import-user',
            template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./import-user.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/modules/admin/user/components/import-user/import-user.component.html")).default,
            styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./import-user.component.scss */ "./src/app/modules/admin/user/components/import-user/import-user.component.scss")).default]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_ngx_translate_core__WEBPACK_IMPORTED_MODULE_4__["TranslateService"],
            ngx_bootstrap_modal__WEBPACK_IMPORTED_MODULE_2__["BsModalRef"],
            ngx_toastr__WEBPACK_IMPORTED_MODULE_3__["ToastrService"],
            _core_services_user_service__WEBPACK_IMPORTED_MODULE_6__["UserService"]])
    ], ImportUserComponent);
    return ImportUserComponent;
}());



/***/ }),

/***/ "./src/app/modules/admin/user/components/user-activities/user-activities.component.scss":
/*!**********************************************************************************************!*\
  !*** ./src/app/modules/admin/user/components/user-activities/user-activities.component.scss ***!
  \**********************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = (".hide_empty_message ::ng-deep .odd {\n  display: none;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvbW9kdWxlcy9hZG1pbi91c2VyL2NvbXBvbmVudHMvdXNlci1hY3Rpdml0aWVzL0M6XFxVc2Vyc1xcdGh1YW5cXE9uZURyaXZlXFxEZXNrdG9wXFxnbGF2YWwtdGh1YW5kaW5oL3NyY1xcYXBwXFxtb2R1bGVzXFxhZG1pblxcdXNlclxcY29tcG9uZW50c1xcdXNlci1hY3Rpdml0aWVzXFx1c2VyLWFjdGl2aXRpZXMuY29tcG9uZW50LnNjc3MiLCJzcmMvYXBwL21vZHVsZXMvYWRtaW4vdXNlci9jb21wb25lbnRzL3VzZXItYWN0aXZpdGllcy91c2VyLWFjdGl2aXRpZXMuY29tcG9uZW50LnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDSSxhQUFBO0FDQ0oiLCJmaWxlIjoic3JjL2FwcC9tb2R1bGVzL2FkbWluL3VzZXIvY29tcG9uZW50cy91c2VyLWFjdGl2aXRpZXMvdXNlci1hY3Rpdml0aWVzLmNvbXBvbmVudC5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLmhpZGVfZW1wdHlfbWVzc2FnZSA6Om5nLWRlZXAgLm9kZCB7XHJcbiAgICBkaXNwbGF5OiBub25lXHJcbn0iLCIuaGlkZV9lbXB0eV9tZXNzYWdlIDo6bmctZGVlcCAub2RkIHtcbiAgZGlzcGxheTogbm9uZTtcbn0iXX0= */");

/***/ }),

/***/ "./src/app/modules/admin/user/components/user-activities/user-activities.component.ts":
/*!********************************************************************************************!*\
  !*** ./src/app/modules/admin/user/components/user-activities/user-activities.component.ts ***!
  \********************************************************************************************/
/*! exports provided: UserActivitiesComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "UserActivitiesComponent", function() { return UserActivitiesComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");
/* harmony import */ var angular_datatables__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! angular-datatables */ "./node_modules/angular-datatables/index.js");
/* harmony import */ var ngx_export_as__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ngx-export-as */ "./node_modules/ngx-export-as/fesm2015/ngx-export-as.js");
/* harmony import */ var ngx_toastr__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ngx-toastr */ "./node_modules/ngx-toastr/fesm5/ngx-toastr.js");
/* harmony import */ var _ngx_translate_core__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @ngx-translate/core */ "./node_modules/@ngx-translate/core/fesm5/ngx-translate-core.js");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! rxjs */ "./node_modules/rxjs/_esm5/index.js");
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../../../../../../environments/environment */ "./src/environments/environment.ts");
/* harmony import */ var datatables_net__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! datatables.net */ "./node_modules/datatables.net/js/jquery.dataTables.js");
/* harmony import */ var datatables_net__WEBPACK_IMPORTED_MODULE_9___default = /*#__PURE__*/__webpack_require__.n(datatables_net__WEBPACK_IMPORTED_MODULE_9__);
/* harmony import */ var datatables_net_bs4__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! datatables.net-bs4 */ "./node_modules/datatables.net-bs4/js/dataTables.bootstrap4.js");
/* harmony import */ var datatables_net_bs4__WEBPACK_IMPORTED_MODULE_10___default = /*#__PURE__*/__webpack_require__.n(datatables_net_bs4__WEBPACK_IMPORTED_MODULE_10__);











var UserActivitiesComponent = /** @class */ (function () {
    function UserActivitiesComponent(translate, http, exportAsService, toastr) {
        this.translate = translate;
        this.http = http;
        this.exportAsService = exportAsService;
        this.toastr = toastr;
        this.dtTrigger = new rxjs__WEBPACK_IMPORTED_MODULE_7__["Subject"]();
        this.dtOptions = {};
        this.activities = [];
        this.exportAsConfig = {
            type: 'pdf',
            elementIdOrContent: 'activities_table',
        };
        this.apiUrl = _environments_environment__WEBPACK_IMPORTED_MODULE_8__["environment"].apiUrl;
    }
    UserActivitiesComponent.prototype.ngOnInit = function () {
        this.loadRoleDatatable();
    };
    UserActivitiesComponent.prototype.loadRoleDatatable = function () {
        var _this = this;
        var that = this;
        this.dtOptions = {
            pagingType: 'full_numbers',
            pageLength: that.loginUser.settings.tables_pagination_limit,
            serverSide: true,
            processing: true,
            dom: '<"html5buttons"B>ltfrtip',
            order: [0],
            columns: [{
                    'sortable': true,
                    'width': '18%',
                    'target': [0]
                }, {
                    'sortable': true,
                    'width': '20%',
                    'target': [1]
                }, {
                    'sortable': true,
                    'width': '62%',
                    'target': [3]
                }
            ],
            buttons: [{
                    extend: 'csv',
                    title: this.translate.instant('activities.title'),
                    className: 'btn btn-datatable-gredient',
                    action: function (e, dt, node, config) {
                        that.exportFiles('csv');
                    }
                }, {
                    extend: 'excel',
                    title: this.translate.instant('activities.title'),
                    className: 'btn btn-datatable-gredient',
                    action: function (e, dt, node, config) {
                        that.exportFiles('xlsx');
                    }
                }, {
                    extend: 'pdf',
                    title: this.translate.instant('activities.title'),
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
                dataTablesParameters.userId = _this.user.id;
                _this.http
                    .post(_this.apiUrl + '/api/all-activities', dataTablesParameters, {})
                    .subscribe(function (resp) {
                    if (resp) {
                        _this.activities = resp.data;
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
    UserActivitiesComponent.prototype.exportFiles = function (type) {
        this.exportAsConfig.type = type;
        this.exportAsService.save(this.exportAsConfig, this.translate.instant('activities.title')).subscribe(function () {
        });
    };
    UserActivitiesComponent.prototype.ngAfterViewInit = function () {
        this.dtTrigger.next();
    };
    UserActivitiesComponent.prototype.ngOnDestroy = function () {
        this.dtTrigger.unsubscribe();
    };
    UserActivitiesComponent.ctorParameters = function () { return [
        { type: _ngx_translate_core__WEBPACK_IMPORTED_MODULE_6__["TranslateService"] },
        { type: _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClient"] },
        { type: ngx_export_as__WEBPACK_IMPORTED_MODULE_4__["ExportAsService"] },
        { type: ngx_toastr__WEBPACK_IMPORTED_MODULE_5__["ToastrService"] }
    ]; };
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])(),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", Object)
    ], UserActivitiesComponent.prototype, "user", void 0);
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])(),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", Object)
    ], UserActivitiesComponent.prototype, "loginUser", void 0);
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewChild"])(angular_datatables__WEBPACK_IMPORTED_MODULE_3__["DataTableDirective"], { static: true }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", angular_datatables__WEBPACK_IMPORTED_MODULE_3__["DataTableDirective"])
    ], UserActivitiesComponent.prototype, "dtElement", void 0);
    UserActivitiesComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-user-activities',
            template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./user-activities.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/modules/admin/user/components/user-activities/user-activities.component.html")).default,
            styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./user-activities.component.scss */ "./src/app/modules/admin/user/components/user-activities/user-activities.component.scss")).default]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_ngx_translate_core__WEBPACK_IMPORTED_MODULE_6__["TranslateService"],
            _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClient"],
            ngx_export_as__WEBPACK_IMPORTED_MODULE_4__["ExportAsService"],
            ngx_toastr__WEBPACK_IMPORTED_MODULE_5__["ToastrService"]])
    ], UserActivitiesComponent);
    return UserActivitiesComponent;
}());



/***/ }),

/***/ "./src/app/modules/admin/user/components/user-avatar-modal/user-avatar-modal.component.scss":
/*!**************************************************************************************************!*\
  !*** ./src/app/modules/admin/user/components/user-avatar-modal/user-avatar-modal.component.scss ***!
  \**************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL21vZHVsZXMvYWRtaW4vdXNlci9jb21wb25lbnRzL3VzZXItYXZhdGFyLW1vZGFsL3VzZXItYXZhdGFyLW1vZGFsLmNvbXBvbmVudC5zY3NzIn0= */");

/***/ }),

/***/ "./src/app/modules/admin/user/components/user-avatar-modal/user-avatar-modal.component.ts":
/*!************************************************************************************************!*\
  !*** ./src/app/modules/admin/user/components/user-avatar-modal/user-avatar-modal.component.ts ***!
  \************************************************************************************************/
/*! exports provided: UserAvatarModalComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "UserAvatarModalComponent", function() { return UserAvatarModalComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! rxjs */ "./node_modules/rxjs/_esm5/index.js");
/* harmony import */ var ngx_bootstrap_modal__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ngx-bootstrap/modal */ "./node_modules/ngx-bootstrap/modal/fesm5/ngx-bootstrap-modal.js");
/* harmony import */ var ngx_toastr__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ngx-toastr */ "./node_modules/ngx-toastr/fesm5/ngx-toastr.js");
/* harmony import */ var _ngx_translate_core__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @ngx-translate/core */ "./node_modules/@ngx-translate/core/fesm5/ngx-translate-core.js");
/* harmony import */ var _core_services_user_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../../../../core/services/user.service */ "./src/app/core/services/user.service.ts");
/* harmony import */ var _core_helpers_admin_helper__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../../../../../core/helpers/admin.helper */ "./src/app/core/helpers/admin.helper.ts");
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../../../../../../environments/environment */ "./src/environments/environment.ts");
/* harmony import */ var dropzone__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! dropzone */ "./node_modules/dropzone/dist/dropzone.js");
/* harmony import */ var dropzone__WEBPACK_IMPORTED_MODULE_9___default = /*#__PURE__*/__webpack_require__.n(dropzone__WEBPACK_IMPORTED_MODULE_9__);










var UserAvatarModalComponent = /** @class */ (function () {
    function UserAvatarModalComponent(translate, bsModalRef, toastr, userService) {
        this.translate = translate;
        this.bsModalRef = bsModalRef;
        this.toastr = toastr;
        this.userService = userService;
        this.event = new _angular_core__WEBPACK_IMPORTED_MODULE_1__["EventEmitter"]();
        this.avatars = _core_helpers_admin_helper__WEBPACK_IMPORTED_MODULE_7__["UserAvatars"];
        this.isFormSubmitted = false;
        this.isProfileUploded = false;
        this.isProfileLoaded = true;
        this.apiUrl = _environments_environment__WEBPACK_IMPORTED_MODULE_8__["environment"].apiUrl;
    }
    UserAvatarModalComponent.prototype.ngOnInit = function () {
        this.usersData = Object.assign({}, this.user);
        this.onClose = new rxjs__WEBPACK_IMPORTED_MODULE_2__["Subject"]();
        this.loadDropzone();
        this.setAvatar(this.usersData.avatar);
    };
    UserAvatarModalComponent.prototype.loadDropzone = function () {
        var that = this;
        new dropzone__WEBPACK_IMPORTED_MODULE_9__(this.profileDropzone.nativeElement, {
            url: 'https://httpbin.org/post',
            maxFiles: 1,
            clickable: true,
            acceptedFiles: 'image/*',
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
                        reader_1.onload = function (e) {
                            that.isProfileUploded = true;
                            that.usersData.avatar = reader_1.result;
                            that.isProfileLoaded = false;
                        };
                        reader_1.readAsDataURL(file);
                    }
                });
                this.on('removedfile', function (file) {
                    that.usersData.avatar = null;
                    that.isProfileLoaded = false;
                });
                this.on('error', function (file, message) {
                    if (file) {
                        that.toastr.error(message);
                    }
                });
            }
        });
    };
    UserAvatarModalComponent.prototype.removeDropzoneImage = function () {
        this.isProfileUploded = true;
        this.isProfileLoaded = false;
        this.usersData.avatar = null;
    };
    UserAvatarModalComponent.prototype.setAvatar = function (avatar) {
        if (avatar === this.selected) {
            this.selected = null;
        }
        else {
            this.selected = avatar;
        }
        this.usersData.avatar = this.selected;
    };
    UserAvatarModalComponent.prototype.isActive = function (avatar) {
        return this.selected === avatar;
    };
    ;
    UserAvatarModalComponent.prototype.onSubmit = function () {
        var _this_1 = this;
        this.usersData.type = 'list';
        this.usersData.UserAvatars = this.avatars;
        this.userService.update(this.usersData).subscribe(function (data) {
            _this_1.toastr.success(_this_1.translate.instant('users.messages.avatar'), _this_1.translate.instant('users.title'));
            _this_1.event.emit({ data: true });
            _this_1.onCancel();
        }, function (error) {
            _this_1.onCancel();
        });
    };
    UserAvatarModalComponent.prototype.onCancel = function () {
        this.onClose.next(false);
        this.bsModalRef.hide();
    };
    UserAvatarModalComponent.ctorParameters = function () { return [
        { type: _ngx_translate_core__WEBPACK_IMPORTED_MODULE_5__["TranslateService"] },
        { type: ngx_bootstrap_modal__WEBPACK_IMPORTED_MODULE_3__["BsModalRef"] },
        { type: ngx_toastr__WEBPACK_IMPORTED_MODULE_4__["ToastrService"] },
        { type: _core_services_user_service__WEBPACK_IMPORTED_MODULE_6__["UserService"] }
    ]; };
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewChild"])('profileDropzone', { static: true }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", _angular_core__WEBPACK_IMPORTED_MODULE_1__["ElementRef"])
    ], UserAvatarModalComponent.prototype, "profileDropzone", void 0);
    UserAvatarModalComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-user-avatar-modal',
            template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./user-avatar-modal.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/modules/admin/user/components/user-avatar-modal/user-avatar-modal.component.html")).default,
            styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./user-avatar-modal.component.scss */ "./src/app/modules/admin/user/components/user-avatar-modal/user-avatar-modal.component.scss")).default]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_ngx_translate_core__WEBPACK_IMPORTED_MODULE_5__["TranslateService"],
            ngx_bootstrap_modal__WEBPACK_IMPORTED_MODULE_3__["BsModalRef"],
            ngx_toastr__WEBPACK_IMPORTED_MODULE_4__["ToastrService"],
            _core_services_user_service__WEBPACK_IMPORTED_MODULE_6__["UserService"]])
    ], UserAvatarModalComponent);
    return UserAvatarModalComponent;
}());



/***/ }),

/***/ "./src/app/modules/admin/user/components/user-defects/user-defects.component.scss":
/*!****************************************************************************************!*\
  !*** ./src/app/modules/admin/user/components/user-defects/user-defects.component.scss ***!
  \****************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = (".hide_empty_message ::ng-deep .odd {\n  display: none;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvbW9kdWxlcy9hZG1pbi91c2VyL2NvbXBvbmVudHMvdXNlci1kZWZlY3RzL0M6XFxVc2Vyc1xcdGh1YW5cXE9uZURyaXZlXFxEZXNrdG9wXFxnbGF2YWwtdGh1YW5kaW5oL3NyY1xcYXBwXFxtb2R1bGVzXFxhZG1pblxcdXNlclxcY29tcG9uZW50c1xcdXNlci1kZWZlY3RzXFx1c2VyLWRlZmVjdHMuY29tcG9uZW50LnNjc3MiLCJzcmMvYXBwL21vZHVsZXMvYWRtaW4vdXNlci9jb21wb25lbnRzL3VzZXItZGVmZWN0cy91c2VyLWRlZmVjdHMuY29tcG9uZW50LnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDSSxhQUFBO0FDQ0oiLCJmaWxlIjoic3JjL2FwcC9tb2R1bGVzL2FkbWluL3VzZXIvY29tcG9uZW50cy91c2VyLWRlZmVjdHMvdXNlci1kZWZlY3RzLmNvbXBvbmVudC5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLmhpZGVfZW1wdHlfbWVzc2FnZSA6Om5nLWRlZXAgLm9kZCB7XHJcbiAgICBkaXNwbGF5OiBub25lXHJcbn0iLCIuaGlkZV9lbXB0eV9tZXNzYWdlIDo6bmctZGVlcCAub2RkIHtcbiAgZGlzcGxheTogbm9uZTtcbn0iXX0= */");

/***/ }),

/***/ "./src/app/modules/admin/user/components/user-defects/user-defects.component.ts":
/*!**************************************************************************************!*\
  !*** ./src/app/modules/admin/user/components/user-defects/user-defects.component.ts ***!
  \**************************************************************************************/
/*! exports provided: UserDefectsComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "UserDefectsComponent", function() { return UserDefectsComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var ngx_export_as__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ngx-export-as */ "./node_modules/ngx-export-as/fesm2015/ngx-export-as.js");
/* harmony import */ var _ngx_translate_core__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @ngx-translate/core */ "./node_modules/@ngx-translate/core/fesm5/ngx-translate-core.js");
/* harmony import */ var angular_datatables__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! angular-datatables */ "./node_modules/angular-datatables/index.js");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! rxjs */ "./node_modules/rxjs/_esm5/index.js");
/* harmony import */ var _core_services_defect_service__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./../../../../../core/services/defect.service */ "./src/app/core/services/defect.service.ts");
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../../../../../../environments/environment */ "./src/environments/environment.ts");
/* harmony import */ var datatables_net__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! datatables.net */ "./node_modules/datatables.net/js/jquery.dataTables.js");
/* harmony import */ var datatables_net__WEBPACK_IMPORTED_MODULE_10___default = /*#__PURE__*/__webpack_require__.n(datatables_net__WEBPACK_IMPORTED_MODULE_10__);
/* harmony import */ var datatables_net_bs4__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! datatables.net-bs4 */ "./node_modules/datatables.net-bs4/js/dataTables.bootstrap4.js");
/* harmony import */ var datatables_net_bs4__WEBPACK_IMPORTED_MODULE_11___default = /*#__PURE__*/__webpack_require__.n(datatables_net_bs4__WEBPACK_IMPORTED_MODULE_11__);












var UserDefectsComponent = /** @class */ (function () {
    function UserDefectsComponent(translate, http, exportAsService, defectService, route) {
        this.translate = translate;
        this.http = http;
        this.exportAsService = exportAsService;
        this.defectService = defectService;
        this.route = route;
        this.dtTrigger = new rxjs__WEBPACK_IMPORTED_MODULE_7__["Subject"]();
        this.dtOptions = {};
        this.defects = [];
        this.userId = this.route.snapshot.paramMap.get('id');
        this.exportAsConfig = {
            type: 'pdf',
            elementIdOrContent: 'defects_table',
        };
        this.apiUrl = _environments_environment__WEBPACK_IMPORTED_MODULE_9__["environment"].apiUrl;
    }
    UserDefectsComponent.prototype.ngOnInit = function () {
        this.loadDatatable();
    };
    UserDefectsComponent.prototype.loadDatatable = function () {
        var _this = this;
        var that = this;
        this.dtOptions = {
            pagingType: 'full_numbers',
            pageLength: that.loginUser.settings.tables_pagination_limit,
            serverSide: true,
            processing: true,
            dom: '<"html5buttons"B>ltfrtip',
            select: true,
            order: [0],
            columns: [{
                    'sortable': true,
                    'width': '7%',
                    'target': [0]
                }, {
                    'sortable': true,
                    'target': [1]
                }, {
                    'sortable': true,
                    'width': '12%',
                    'target': [2]
                }, {
                    'sortable': true,
                    'width': '12%',
                    'target': [3]
                }, {
                    'sortable': true,
                    'width': '11%',
                    'target': [4]
                }, {
                    'sortable': true,
                    'width': '10%',
                    'target': [5]
                }, {
                    'sortable': true,
                    'width': '10%',
                    'target': [6]
                }],
            buttons: [{
                    extend: 'csv',
                    title: this.translate.instant('defects.title'),
                    className: 'btn btn-datatable-gredient',
                    action: function (e, dt, node, config) {
                        that.exportFiles('csv');
                    }
                }, {
                    extend: 'excel',
                    title: this.translate.instant('defects.title'),
                    className: 'btn btn-datatable-gredient',
                    action: function (e, dt, node, config) {
                        that.exportFiles('xlsx');
                    }
                }, {
                    extend: 'pdf',
                    title: this.translate.instant('defects.title'),
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
                dataTablesParameters = {
                    columns: dataTablesParameters.columns,
                    draw: dataTablesParameters.draw,
                    length: dataTablesParameters.length,
                    order: dataTablesParameters.order,
                    search: dataTablesParameters.search,
                    start: dataTablesParameters.start,
                    isUserProfile: 1,
                    user_id: _this.userId
                };
                _this.http
                    .post(_this.apiUrl + '/api/all-defects', dataTablesParameters, {})
                    .subscribe(function (resp) {
                    _this.defects = resp.data;
                    callback({
                        recordsTotal: resp.recordsTotal,
                        recordsFiltered: resp.recordsFiltered,
                        data: [],
                    });
                });
            }
        };
    };
    UserDefectsComponent.prototype.exportFiles = function (type) {
        this.exportAsConfig.type = type;
        this.exportAsService.save(this.exportAsConfig, this.translate.instant('defects.title')).subscribe(function () {
        });
    };
    UserDefectsComponent.prototype.ngAfterViewInit = function () {
        this.dtTrigger.next();
    };
    UserDefectsComponent.prototype.ngOnDestroy = function () {
        this.dtTrigger.unsubscribe();
    };
    UserDefectsComponent.prototype.rerender = function () {
        var _this = this;
        this.dtElement.dtInstance.then(function (dtInstance) {
            dtInstance.destroy();
            setTimeout(function () {
                _this.dtTrigger.next();
            });
        });
    };
    UserDefectsComponent.ctorParameters = function () { return [
        { type: _ngx_translate_core__WEBPACK_IMPORTED_MODULE_5__["TranslateService"] },
        { type: _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClient"] },
        { type: ngx_export_as__WEBPACK_IMPORTED_MODULE_4__["ExportAsService"] },
        { type: _core_services_defect_service__WEBPACK_IMPORTED_MODULE_8__["DefectService"] },
        { type: _angular_router__WEBPACK_IMPORTED_MODULE_3__["ActivatedRoute"] }
    ]; };
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])(),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", Object)
    ], UserDefectsComponent.prototype, "loginUser", void 0);
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewChild"])(angular_datatables__WEBPACK_IMPORTED_MODULE_6__["DataTableDirective"], { static: true }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", angular_datatables__WEBPACK_IMPORTED_MODULE_6__["DataTableDirective"])
    ], UserDefectsComponent.prototype, "dtElement", void 0);
    UserDefectsComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-user-defects',
            template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./user-defects.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/modules/admin/user/components/user-defects/user-defects.component.html")).default,
            styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./user-defects.component.scss */ "./src/app/modules/admin/user/components/user-defects/user-defects.component.scss")).default]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_ngx_translate_core__WEBPACK_IMPORTED_MODULE_5__["TranslateService"],
            _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClient"],
            ngx_export_as__WEBPACK_IMPORTED_MODULE_4__["ExportAsService"],
            _core_services_defect_service__WEBPACK_IMPORTED_MODULE_8__["DefectService"],
            _angular_router__WEBPACK_IMPORTED_MODULE_3__["ActivatedRoute"]])
    ], UserDefectsComponent);
    return UserDefectsComponent;
}());



/***/ }),

/***/ "./src/app/modules/admin/user/components/user-detail-update/user-detail-update.component.scss":
/*!****************************************************************************************************!*\
  !*** ./src/app/modules/admin/user/components/user-detail-update/user-detail-update.component.scss ***!
  \****************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL21vZHVsZXMvYWRtaW4vdXNlci9jb21wb25lbnRzL3VzZXItZGV0YWlsLXVwZGF0ZS91c2VyLWRldGFpbC11cGRhdGUuY29tcG9uZW50LnNjc3MifQ== */");

/***/ }),

/***/ "./src/app/modules/admin/user/components/user-detail-update/user-detail-update.component.ts":
/*!**************************************************************************************************!*\
  !*** ./src/app/modules/admin/user/components/user-detail-update/user-detail-update.component.ts ***!
  \**************************************************************************************************/
/*! exports provided: UserDetailUpdateComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "UserDetailUpdateComponent", function() { return UserDetailUpdateComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var ngx_bootstrap_modal__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ngx-bootstrap/modal */ "./node_modules/ngx-bootstrap/modal/fesm5/ngx-bootstrap-modal.js");
/* harmony import */ var ngx_toastr__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ngx-toastr */ "./node_modules/ngx-toastr/fesm5/ngx-toastr.js");
/* harmony import */ var _ngx_translate_core__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @ngx-translate/core */ "./node_modules/@ngx-translate/core/fesm5/ngx-translate-core.js");
/* harmony import */ var _core_services_user_service__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../../../../../core/services/user.service */ "./src/app/core/services/user.service.ts");
/* harmony import */ var _core_services_helper_service__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../../../../../core/services/helper.service */ "./src/app/core/services/helper.service.ts");
/* harmony import */ var _core_services_translation_service__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../../../../../core/services/translation.service */ "./src/app/core/services/translation.service.ts");
/* harmony import */ var _components_user_avatar_modal_user_avatar_modal_component__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ../../components/user-avatar-modal/user-avatar-modal.component */ "./src/app/modules/admin/user/components/user-avatar-modal/user-avatar-modal.component.ts");
/* harmony import */ var _components_change_email_modal_change_email_modal_component__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ../../components/change-email-modal/change-email-modal.component */ "./src/app/modules/admin/user/components/change-email-modal/change-email-modal.component.ts");
/* harmony import */ var _components_change_password_modal_change_password_modal_component__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ../../components/change-password-modal/change-password-modal.component */ "./src/app/modules/admin/user/components/change-password-modal/change-password-modal.component.ts");













var UserDetailUpdateComponent = /** @class */ (function () {
    function UserDetailUpdateComponent(translate, route, datePipe, modalService, toastr, userService, helperService, translationService) {
        this.translate = translate;
        this.route = route;
        this.datePipe = datePipe;
        this.modalService = modalService;
        this.toastr = toastr;
        this.userService = userService;
        this.helperService = helperService;
        this.translationService = translationService;
        this.countries = [];
        this.languages = [];
        this.users = [];
        this.modalConfigs = {};
        this.datepickerConfigs = { dateInputFormat: 'YYYY-MM-DD' };
        this.isPageLoad = false;
    }
    UserDetailUpdateComponent.prototype.ngOnInit = function () {
        this.getLanguages();
        this.getUsers();
        this.loadForms(this.user);
    };
    UserDetailUpdateComponent.prototype.loadForms = function (user) {
        this.modalConfigs = {
            animated: true,
            keyboard: true,
            backdrop: true,
            ignoreBackdropClick: false,
            class: 'inmodal modal-dialog-centered modal-md animated fadeIn',
            initialState: {
                user: user
            }
        };
    };
    UserDetailUpdateComponent.prototype.getUserById = function (userId) {
        var _this = this;
        this.userService.getById(userId)
            .subscribe(function (data) {
            _this.loadForms(data);
        });
    };
    UserDetailUpdateComponent.prototype.getLanguages = function () {
        var that = this;
        that.translationService.getAllActiveTranslations()
            .subscribe(function (data) {
            for (var iRow in data) {
                that.languages.push({
                    label: data[iRow].name,
                    value: data[iRow].language
                });
            }
            that.getCountries();
        });
    };
    UserDetailUpdateComponent.prototype.getUsers = function () {
        var _this = this;
        this.userService.getAll().subscribe(function (data) {
            for (var iRow in data) {
                _this.users.push({
                    label: data[iRow].firstname + ' ' + data[iRow].lastname,
                    value: data[iRow].id
                });
            }
        });
    };
    UserDetailUpdateComponent.prototype.getCountries = function () {
        var _this = this;
        this.helperService.getCountries()
            .subscribe(function (data) {
            for (var iRow in data) {
                _this.countries.push({
                    label: data[iRow].name,
                    value: data[iRow].code
                });
            }
            _this.isPageLoad = true;
        });
    };
    UserDetailUpdateComponent.prototype.openAvatarChangeModal = function () {
        var _this = this;
        this.modalRef = this.modalService.show(_components_user_avatar_modal_user_avatar_modal_component__WEBPACK_IMPORTED_MODULE_10__["UserAvatarModalComponent"], this.modalConfigs);
        this.modalRef.content.event.subscribe(function (data) {
            _this.getUserById(_this.user.id);
        });
    };
    UserDetailUpdateComponent.prototype.changeEmail = function () {
        this.modalRef = this.modalService.show(_components_change_email_modal_change_email_modal_component__WEBPACK_IMPORTED_MODULE_11__["ChangeEmailModalComponent"], this.modalConfigs);
        this.modalRef.content.event.subscribe(function (data) {
        });
    };
    UserDetailUpdateComponent.prototype.changePassword = function () {
        this.modalRef = this.modalService.show(_components_change_password_modal_change_password_modal_component__WEBPACK_IMPORTED_MODULE_12__["ChangePasswordModalComponent"], this.modalConfigs);
        this.modalRef.content.event.subscribe(function (data) {
        });
    };
    UserDetailUpdateComponent.prototype.saveUserDetail = function (name, value) {
        var _this = this;
        if (value instanceof Date) {
            value = this.datePipe.transform(value, 'yyyy-MM-dd');
        }
        this.user[name] = value;
        this.user.type = 'list';
        this.userService.update(this.user)
            .subscribe(function (data) {
            _this.toastr.success(_this.translate.instant('users.messages.update'), _this.translate.instant('users.title'));
        });
    };
    UserDetailUpdateComponent.ctorParameters = function () { return [
        { type: _ngx_translate_core__WEBPACK_IMPORTED_MODULE_6__["TranslateService"] },
        { type: _angular_router__WEBPACK_IMPORTED_MODULE_2__["ActivatedRoute"] },
        { type: _angular_common__WEBPACK_IMPORTED_MODULE_3__["DatePipe"] },
        { type: ngx_bootstrap_modal__WEBPACK_IMPORTED_MODULE_4__["BsModalService"] },
        { type: ngx_toastr__WEBPACK_IMPORTED_MODULE_5__["ToastrService"] },
        { type: _core_services_user_service__WEBPACK_IMPORTED_MODULE_7__["UserService"] },
        { type: _core_services_helper_service__WEBPACK_IMPORTED_MODULE_8__["HelperService"] },
        { type: _core_services_translation_service__WEBPACK_IMPORTED_MODULE_9__["TranslationService"] }
    ]; };
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])(),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", Object)
    ], UserDetailUpdateComponent.prototype, "user", void 0);
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])(),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", Object)
    ], UserDetailUpdateComponent.prototype, "loginUser", void 0);
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])(),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", Object)
    ], UserDetailUpdateComponent.prototype, "permission", void 0);
    UserDetailUpdateComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-user-detail-update',
            template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./user-detail-update.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/modules/admin/user/components/user-detail-update/user-detail-update.component.html")).default,
            providers: [_angular_common__WEBPACK_IMPORTED_MODULE_3__["DatePipe"]],
            styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./user-detail-update.component.scss */ "./src/app/modules/admin/user/components/user-detail-update/user-detail-update.component.scss")).default]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_ngx_translate_core__WEBPACK_IMPORTED_MODULE_6__["TranslateService"],
            _angular_router__WEBPACK_IMPORTED_MODULE_2__["ActivatedRoute"],
            _angular_common__WEBPACK_IMPORTED_MODULE_3__["DatePipe"],
            ngx_bootstrap_modal__WEBPACK_IMPORTED_MODULE_4__["BsModalService"],
            ngx_toastr__WEBPACK_IMPORTED_MODULE_5__["ToastrService"],
            _core_services_user_service__WEBPACK_IMPORTED_MODULE_7__["UserService"],
            _core_services_helper_service__WEBPACK_IMPORTED_MODULE_8__["HelperService"],
            _core_services_translation_service__WEBPACK_IMPORTED_MODULE_9__["TranslationService"]])
    ], UserDetailUpdateComponent);
    return UserDetailUpdateComponent;
}());



/***/ }),

/***/ "./src/app/modules/admin/user/components/user-incidents/user-incidents.component.scss":
/*!********************************************************************************************!*\
  !*** ./src/app/modules/admin/user/components/user-incidents/user-incidents.component.scss ***!
  \********************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = (".hide_empty_message ::ng-deep .odd {\n  display: none;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvbW9kdWxlcy9hZG1pbi91c2VyL2NvbXBvbmVudHMvdXNlci1pbmNpZGVudHMvQzpcXFVzZXJzXFx0aHVhblxcT25lRHJpdmVcXERlc2t0b3BcXGdsYXZhbC10aHVhbmRpbmgvc3JjXFxhcHBcXG1vZHVsZXNcXGFkbWluXFx1c2VyXFxjb21wb25lbnRzXFx1c2VyLWluY2lkZW50c1xcdXNlci1pbmNpZGVudHMuY29tcG9uZW50LnNjc3MiLCJzcmMvYXBwL21vZHVsZXMvYWRtaW4vdXNlci9jb21wb25lbnRzL3VzZXItaW5jaWRlbnRzL3VzZXItaW5jaWRlbnRzLmNvbXBvbmVudC5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0ksYUFBQTtBQ0NKIiwiZmlsZSI6InNyYy9hcHAvbW9kdWxlcy9hZG1pbi91c2VyL2NvbXBvbmVudHMvdXNlci1pbmNpZGVudHMvdXNlci1pbmNpZGVudHMuY29tcG9uZW50LnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyIuaGlkZV9lbXB0eV9tZXNzYWdlIDo6bmctZGVlcCAub2RkIHtcclxuICAgIGRpc3BsYXk6IG5vbmVcclxufSIsIi5oaWRlX2VtcHR5X21lc3NhZ2UgOjpuZy1kZWVwIC5vZGQge1xuICBkaXNwbGF5OiBub25lO1xufSJdfQ== */");

/***/ }),

/***/ "./src/app/modules/admin/user/components/user-incidents/user-incidents.component.ts":
/*!******************************************************************************************!*\
  !*** ./src/app/modules/admin/user/components/user-incidents/user-incidents.component.ts ***!
  \******************************************************************************************/
/*! exports provided: UserIncidentsComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "UserIncidentsComponent", function() { return UserIncidentsComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var ngx_export_as__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ngx-export-as */ "./node_modules/ngx-export-as/fesm2015/ngx-export-as.js");
/* harmony import */ var _ngx_translate_core__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @ngx-translate/core */ "./node_modules/@ngx-translate/core/fesm5/ngx-translate-core.js");
/* harmony import */ var angular_datatables__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! angular-datatables */ "./node_modules/angular-datatables/index.js");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! rxjs */ "./node_modules/rxjs/_esm5/index.js");
/* harmony import */ var _core_services_incident_service__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./../../../../../core/services/incident.service */ "./src/app/core/services/incident.service.ts");
/* harmony import */ var datatables_net__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! datatables.net */ "./node_modules/datatables.net/js/jquery.dataTables.js");
/* harmony import */ var datatables_net__WEBPACK_IMPORTED_MODULE_9___default = /*#__PURE__*/__webpack_require__.n(datatables_net__WEBPACK_IMPORTED_MODULE_9__);
/* harmony import */ var datatables_net_bs4__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! datatables.net-bs4 */ "./node_modules/datatables.net-bs4/js/dataTables.bootstrap4.js");
/* harmony import */ var datatables_net_bs4__WEBPACK_IMPORTED_MODULE_10___default = /*#__PURE__*/__webpack_require__.n(datatables_net_bs4__WEBPACK_IMPORTED_MODULE_10__);











var UserIncidentsComponent = /** @class */ (function () {
    function UserIncidentsComponent(translate, http, exportAsService, incidentService, route) {
        this.translate = translate;
        this.http = http;
        this.exportAsService = exportAsService;
        this.incidentService = incidentService;
        this.route = route;
        this.dtTrigger = new rxjs__WEBPACK_IMPORTED_MODULE_7__["Subject"]();
        this.dtOptions = {};
        this.incidents = [];
        this.userId = this.route.snapshot.paramMap.get('id');
        this.exportAsConfig = {
            type: 'pdf',
            elementIdOrContent: 'incidents_table',
        };
    }
    UserIncidentsComponent.prototype.ngOnInit = function () {
        this.loadDatatable();
    };
    UserIncidentsComponent.prototype.loadDatatable = function () {
        var _this = this;
        var that = this;
        this.dtOptions = {
            pagingType: 'full_numbers',
            pageLength: that.loginUser.settings.tables_pagination_limit,
            serverSide: true,
            processing: true,
            dom: '<"html5buttons"B>ltfrtip',
            select: true,
            order: [0],
            columns: [{
                    'sortable': true,
                    'width': '7%',
                    'target': [0]
                }, {
                    'sortable': true,
                    'target': [1]
                }, {
                    'sortable': true,
                    'width': '12%',
                    'target': [2]
                }, {
                    'sortable': true,
                    'width': '12%',
                    'target': [3]
                }, {
                    'sortable': true,
                    'width': '11%',
                    'target': [4]
                }, {
                    'sortable': true,
                    'width': '10%',
                    'target': [5]
                }, {
                    'sortable': true,
                    'width': '10%',
                    'target': [6]
                }],
            buttons: [{
                    extend: 'csv',
                    title: this.translate.instant('incidents.title'),
                    className: 'btn btn-datatable-gredient',
                    action: function (e, dt, node, config) {
                        that.exportFiles('csv');
                    }
                }, {
                    extend: 'excel',
                    title: this.translate.instant('incidents.title'),
                    className: 'btn btn-datatable-gredient',
                    action: function (e, dt, node, config) {
                        that.exportFiles('xlsx');
                    }
                }, {
                    extend: 'pdf',
                    title: this.translate.instant('incidents.title'),
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
                dataTablesParameters = {
                    columns: dataTablesParameters.columns,
                    draw: dataTablesParameters.draw,
                    length: dataTablesParameters.length,
                    order: dataTablesParameters.order,
                    search: dataTablesParameters.search,
                    start: dataTablesParameters.start,
                    isUserProfile: 1,
                    user_id: _this.userId
                };
                _this.http.post(_this.apiUrl + '/api/all-incident', dataTablesParameters, {}).subscribe(function (resp) {
                    _this.incidents = resp.data;
                    callback({
                        recordsTotal: resp.recordsTotal,
                        recordsFiltered: resp.recordsFiltered,
                        data: [],
                    });
                });
            }
        };
    };
    UserIncidentsComponent.prototype.exportFiles = function (type) {
        this.exportAsConfig.type = type;
        this.exportAsService.save(this.exportAsConfig, this.translate.instant('incidents.title')).subscribe(function () {
        });
    };
    UserIncidentsComponent.prototype.ngAfterViewInit = function () {
        this.dtTrigger.next();
    };
    UserIncidentsComponent.prototype.ngOnDestroy = function () {
        this.dtTrigger.unsubscribe();
    };
    UserIncidentsComponent.prototype.rerender = function () {
        var _this = this;
        this.dtElement.dtInstance.then(function (dtInstance) {
            dtInstance.destroy();
            setTimeout(function () {
                _this.dtTrigger.next();
            });
        });
    };
    UserIncidentsComponent.ctorParameters = function () { return [
        { type: _ngx_translate_core__WEBPACK_IMPORTED_MODULE_5__["TranslateService"] },
        { type: _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClient"] },
        { type: ngx_export_as__WEBPACK_IMPORTED_MODULE_4__["ExportAsService"] },
        { type: _core_services_incident_service__WEBPACK_IMPORTED_MODULE_8__["IncidentService"] },
        { type: _angular_router__WEBPACK_IMPORTED_MODULE_3__["ActivatedRoute"] }
    ]; };
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])(),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", Object)
    ], UserIncidentsComponent.prototype, "loginUser", void 0);
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])(),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", Object)
    ], UserIncidentsComponent.prototype, "apiUrl", void 0);
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewChild"])(angular_datatables__WEBPACK_IMPORTED_MODULE_6__["DataTableDirective"], { static: true }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", angular_datatables__WEBPACK_IMPORTED_MODULE_6__["DataTableDirective"])
    ], UserIncidentsComponent.prototype, "dtElement", void 0);
    UserIncidentsComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-user-incidents',
            template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./user-incidents.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/modules/admin/user/components/user-incidents/user-incidents.component.html")).default,
            styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./user-incidents.component.scss */ "./src/app/modules/admin/user/components/user-incidents/user-incidents.component.scss")).default]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_ngx_translate_core__WEBPACK_IMPORTED_MODULE_5__["TranslateService"],
            _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClient"],
            ngx_export_as__WEBPACK_IMPORTED_MODULE_4__["ExportAsService"],
            _core_services_incident_service__WEBPACK_IMPORTED_MODULE_8__["IncidentService"],
            _angular_router__WEBPACK_IMPORTED_MODULE_3__["ActivatedRoute"]])
    ], UserIncidentsComponent);
    return UserIncidentsComponent;
}());



/***/ }),

/***/ "./src/app/modules/admin/user/components/user-projects/user-projects.component.scss":
/*!******************************************************************************************!*\
  !*** ./src/app/modules/admin/user/components/user-projects/user-projects.component.scss ***!
  \******************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = (".hide_empty_message ::ng-deep .odd {\n  display: none;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvbW9kdWxlcy9hZG1pbi91c2VyL2NvbXBvbmVudHMvdXNlci1wcm9qZWN0cy9DOlxcVXNlcnNcXHRodWFuXFxPbmVEcml2ZVxcRGVza3RvcFxcZ2xhdmFsLXRodWFuZGluaC9zcmNcXGFwcFxcbW9kdWxlc1xcYWRtaW5cXHVzZXJcXGNvbXBvbmVudHNcXHVzZXItcHJvamVjdHNcXHVzZXItcHJvamVjdHMuY29tcG9uZW50LnNjc3MiLCJzcmMvYXBwL21vZHVsZXMvYWRtaW4vdXNlci9jb21wb25lbnRzL3VzZXItcHJvamVjdHMvdXNlci1wcm9qZWN0cy5jb21wb25lbnQuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNJLGFBQUE7QUNDSiIsImZpbGUiOiJzcmMvYXBwL21vZHVsZXMvYWRtaW4vdXNlci9jb21wb25lbnRzL3VzZXItcHJvamVjdHMvdXNlci1wcm9qZWN0cy5jb21wb25lbnQuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIi5oaWRlX2VtcHR5X21lc3NhZ2UgOjpuZy1kZWVwIC5vZGQge1xyXG4gICAgZGlzcGxheTogbm9uZVxyXG59IiwiLmhpZGVfZW1wdHlfbWVzc2FnZSA6Om5nLWRlZXAgLm9kZCB7XG4gIGRpc3BsYXk6IG5vbmU7XG59Il19 */");

/***/ }),

/***/ "./src/app/modules/admin/user/components/user-projects/user-projects.component.ts":
/*!****************************************************************************************!*\
  !*** ./src/app/modules/admin/user/components/user-projects/user-projects.component.ts ***!
  \****************************************************************************************/
/*! exports provided: UserProjectsComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "UserProjectsComponent", function() { return UserProjectsComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var angular_datatables__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! angular-datatables */ "./node_modules/angular-datatables/index.js");
/* harmony import */ var ngx_export_as__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ngx-export-as */ "./node_modules/ngx-export-as/fesm2015/ngx-export-as.js");
/* harmony import */ var _ngx_translate_core__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @ngx-translate/core */ "./node_modules/@ngx-translate/core/fesm5/ngx-translate-core.js");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! rxjs */ "./node_modules/rxjs/_esm5/index.js");
/* harmony import */ var _core_services_project_service__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./../../../../../core/services/project.service */ "./src/app/core/services/project.service.ts");
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../../../../../../environments/environment */ "./src/environments/environment.ts");
/* harmony import */ var datatables_net__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! datatables.net */ "./node_modules/datatables.net/js/jquery.dataTables.js");
/* harmony import */ var datatables_net__WEBPACK_IMPORTED_MODULE_10___default = /*#__PURE__*/__webpack_require__.n(datatables_net__WEBPACK_IMPORTED_MODULE_10__);
/* harmony import */ var datatables_net_bs4__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! datatables.net-bs4 */ "./node_modules/datatables.net-bs4/js/dataTables.bootstrap4.js");
/* harmony import */ var datatables_net_bs4__WEBPACK_IMPORTED_MODULE_11___default = /*#__PURE__*/__webpack_require__.n(datatables_net_bs4__WEBPACK_IMPORTED_MODULE_11__);












var UserProjectsComponent = /** @class */ (function () {
    function UserProjectsComponent(translate, http, exportAsService, projectService, route) {
        this.translate = translate;
        this.http = http;
        this.exportAsService = exportAsService;
        this.projectService = projectService;
        this.route = route;
        this.dtTrigger = new rxjs__WEBPACK_IMPORTED_MODULE_7__["Subject"]();
        this.dtOptions = {};
        this.projects = [];
        this.userId = this.route.snapshot.paramMap.get('id');
        this.exportAsConfig = {
            type: 'pdf',
            elementIdOrContent: 'projects_table',
        };
        this.apiUrl = _environments_environment__WEBPACK_IMPORTED_MODULE_9__["environment"].apiUrl;
    }
    UserProjectsComponent.prototype.ngOnInit = function () {
        this.loadProjectDatatable();
    };
    UserProjectsComponent.prototype.loadProjectDatatable = function () {
        var _this = this;
        var that = this;
        this.dtOptions = {
            pagingType: 'full_numbers',
            pageLength: that.loginUser.settings.tables_pagination_limit,
            serverSide: true,
            processing: true,
            dom: '<"html5buttons"B>ltfrtip',
            select: true,
            order: [0],
            columns: [{
                    'sortable': true,
                    'width': '8%',
                    'target': [0]
                }, {
                    'sortable': true,
                    'target': [1]
                }, {
                    'sortable': true,
                    'width': '11%',
                    'target': [2]
                }, {
                    'sortable': true,
                    'width': '11%',
                    'target': [3]
                }, {
                    'sortable': true,
                    'width': '11%',
                    'target': [4]
                }, {
                    'sortable': true,
                    'width': '11%',
                    'target': [5]
                }],
            buttons: [{
                    extend: 'csv',
                    title: this.translate.instant('projects.title'),
                    className: 'btn btn-datatable-gredient',
                    action: function (e, dt, node, config) {
                        that.exportFiles('csv');
                    }
                }, {
                    extend: 'excel',
                    title: this.translate.instant('projects.title'),
                    className: 'btn btn-datatable-gredient',
                    action: function (e, dt, node, config) {
                        that.exportFiles('xlsx');
                    }
                }, {
                    extend: 'pdf',
                    title: this.translate.instant('projects.title'),
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
                dataTablesParameters = {
                    columns: dataTablesParameters.columns,
                    draw: dataTablesParameters.draw,
                    length: dataTablesParameters.length,
                    order: dataTablesParameters.order,
                    search: dataTablesParameters.search,
                    start: dataTablesParameters.start,
                    isUserProfile: 1,
                    user_id: _this.userId
                };
                _this.http
                    .post(_this.apiUrl + '/api/all-projects', dataTablesParameters, {})
                    .subscribe(function (resp) {
                    _this.projects = resp.data;
                    callback({
                        recordsTotal: resp.recordsTotal,
                        recordsFiltered: resp.recordsFiltered,
                        data: [],
                    });
                });
            }
        };
    };
    UserProjectsComponent.prototype.exportFiles = function (type) {
        this.exportAsConfig.type = type;
        this.exportAsService.save(this.exportAsConfig, this.translate.instant('projects.title')).subscribe(function () {
        });
    };
    UserProjectsComponent.prototype.ngAfterViewInit = function () {
        this.dtTrigger.next();
    };
    UserProjectsComponent.prototype.ngOnDestroy = function () {
        this.dtTrigger.unsubscribe();
    };
    UserProjectsComponent.prototype.rerender = function () {
        var _this = this;
        this.dtElement.dtInstance.then(function (dtInstance) {
            dtInstance.destroy();
            setTimeout(function () {
                _this.dtTrigger.next();
            });
        });
    };
    UserProjectsComponent.ctorParameters = function () { return [
        { type: _ngx_translate_core__WEBPACK_IMPORTED_MODULE_6__["TranslateService"] },
        { type: _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClient"] },
        { type: ngx_export_as__WEBPACK_IMPORTED_MODULE_5__["ExportAsService"] },
        { type: _core_services_project_service__WEBPACK_IMPORTED_MODULE_8__["ProjectService"] },
        { type: _angular_router__WEBPACK_IMPORTED_MODULE_3__["ActivatedRoute"] }
    ]; };
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])(),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", Object)
    ], UserProjectsComponent.prototype, "loginUser", void 0);
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewChild"])(angular_datatables__WEBPACK_IMPORTED_MODULE_4__["DataTableDirective"], { static: true }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", angular_datatables__WEBPACK_IMPORTED_MODULE_4__["DataTableDirective"])
    ], UserProjectsComponent.prototype, "dtElement", void 0);
    UserProjectsComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-user-projects',
            template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./user-projects.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/modules/admin/user/components/user-projects/user-projects.component.html")).default,
            styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./user-projects.component.scss */ "./src/app/modules/admin/user/components/user-projects/user-projects.component.scss")).default]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_ngx_translate_core__WEBPACK_IMPORTED_MODULE_6__["TranslateService"],
            _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClient"],
            ngx_export_as__WEBPACK_IMPORTED_MODULE_5__["ExportAsService"],
            _core_services_project_service__WEBPACK_IMPORTED_MODULE_8__["ProjectService"],
            _angular_router__WEBPACK_IMPORTED_MODULE_3__["ActivatedRoute"]])
    ], UserProjectsComponent);
    return UserProjectsComponent;
}());



/***/ }),

/***/ "./src/app/modules/admin/user/components/user-tasks/user-tasks.component.scss":
/*!************************************************************************************!*\
  !*** ./src/app/modules/admin/user/components/user-tasks/user-tasks.component.scss ***!
  \************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = (".hide_empty_message ::ng-deep .odd {\n  display: none;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvbW9kdWxlcy9hZG1pbi91c2VyL2NvbXBvbmVudHMvdXNlci10YXNrcy9DOlxcVXNlcnNcXHRodWFuXFxPbmVEcml2ZVxcRGVza3RvcFxcZ2xhdmFsLXRodWFuZGluaC9zcmNcXGFwcFxcbW9kdWxlc1xcYWRtaW5cXHVzZXJcXGNvbXBvbmVudHNcXHVzZXItdGFza3NcXHVzZXItdGFza3MuY29tcG9uZW50LnNjc3MiLCJzcmMvYXBwL21vZHVsZXMvYWRtaW4vdXNlci9jb21wb25lbnRzL3VzZXItdGFza3MvdXNlci10YXNrcy5jb21wb25lbnQuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNJLGFBQUE7QUNDSiIsImZpbGUiOiJzcmMvYXBwL21vZHVsZXMvYWRtaW4vdXNlci9jb21wb25lbnRzL3VzZXItdGFza3MvdXNlci10YXNrcy5jb21wb25lbnQuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIi5oaWRlX2VtcHR5X21lc3NhZ2UgOjpuZy1kZWVwIC5vZGQge1xyXG4gICAgZGlzcGxheTogbm9uZVxyXG59IiwiLmhpZGVfZW1wdHlfbWVzc2FnZSA6Om5nLWRlZXAgLm9kZCB7XG4gIGRpc3BsYXk6IG5vbmU7XG59Il19 */");

/***/ }),

/***/ "./src/app/modules/admin/user/components/user-tasks/user-tasks.component.ts":
/*!**********************************************************************************!*\
  !*** ./src/app/modules/admin/user/components/user-tasks/user-tasks.component.ts ***!
  \**********************************************************************************/
/*! exports provided: UserTasksComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "UserTasksComponent", function() { return UserTasksComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");
/* harmony import */ var ngx_export_as__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ngx-export-as */ "./node_modules/ngx-export-as/fesm2015/ngx-export-as.js");
/* harmony import */ var _ngx_translate_core__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @ngx-translate/core */ "./node_modules/@ngx-translate/core/fesm5/ngx-translate-core.js");
/* harmony import */ var angular_datatables__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! angular-datatables */ "./node_modules/angular-datatables/index.js");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! rxjs */ "./node_modules/rxjs/_esm5/index.js");
/* harmony import */ var _core_services_task_service__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./../../../../../core/services/task.service */ "./src/app/core/services/task.service.ts");
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../../../../../../environments/environment */ "./src/environments/environment.ts");
/* harmony import */ var datatables_net__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! datatables.net */ "./node_modules/datatables.net/js/jquery.dataTables.js");
/* harmony import */ var datatables_net__WEBPACK_IMPORTED_MODULE_10___default = /*#__PURE__*/__webpack_require__.n(datatables_net__WEBPACK_IMPORTED_MODULE_10__);
/* harmony import */ var datatables_net_bs4__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! datatables.net-bs4 */ "./node_modules/datatables.net-bs4/js/dataTables.bootstrap4.js");
/* harmony import */ var datatables_net_bs4__WEBPACK_IMPORTED_MODULE_11___default = /*#__PURE__*/__webpack_require__.n(datatables_net_bs4__WEBPACK_IMPORTED_MODULE_11__);












var UserTasksComponent = /** @class */ (function () {
    function UserTasksComponent(translate, http, exportAsService, taskService, route) {
        this.translate = translate;
        this.http = http;
        this.exportAsService = exportAsService;
        this.taskService = taskService;
        this.route = route;
        this.dtTrigger = new rxjs__WEBPACK_IMPORTED_MODULE_7__["Subject"]();
        this.dtOptions = {};
        this.tasks = [];
        this.userId = this.route.snapshot.paramMap.get('id');
        this.exportAsConfig = {
            type: 'pdf',
            elementIdOrContent: 'tasks_table',
        };
        this.apiUrl = _environments_environment__WEBPACK_IMPORTED_MODULE_9__["environment"].apiUrl;
    }
    UserTasksComponent.prototype.ngOnInit = function () {
        this.loadTaskDatatable();
    };
    UserTasksComponent.prototype.loadTaskDatatable = function () {
        var _this = this;
        var that = this;
        this.dtOptions = {
            pagingType: 'full_numbers',
            pageLength: that.loginUser.settings.tables_pagination_limit,
            serverSide: true,
            processing: true,
            dom: '<"html5buttons"B>ltfrtip',
            select: true,
            order: [0],
            columns: [{
                    'sortable': true,
                    'width': '7%',
                    'target': [0]
                }, {
                    'sortable': true,
                    'target': [1]
                }, {
                    'sortable': true,
                    'width': '12%',
                    'target': [2]
                }, {
                    'sortable': true,
                    'width': '12%',
                    'target': [3]
                }, {
                    'sortable': true,
                    'width': '11%',
                    'target': [4]
                }, {
                    'sortable': true,
                    'width': '10%',
                    'target': [5]
                }, {
                    'sortable': true,
                    'width': '10%',
                    'target': [6]
                }],
            buttons: [{
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
                dataTablesParameters = {
                    columns: dataTablesParameters.columns,
                    draw: dataTablesParameters.draw,
                    length: dataTablesParameters.length,
                    order: dataTablesParameters.order,
                    search: dataTablesParameters.search,
                    start: dataTablesParameters.start,
                    isUserProfile: 1,
                    user_id: _this.userId
                };
                _this.http
                    .post(_this.apiUrl + '/api/all-tasks', dataTablesParameters, {})
                    .subscribe(function (resp) {
                    _this.tasks = resp.data;
                    callback({
                        recordsTotal: resp.recordsTotal,
                        recordsFiltered: resp.recordsFiltered,
                        data: [],
                    });
                });
            }
        };
    };
    UserTasksComponent.prototype.exportFiles = function (type) {
        this.exportAsConfig.type = type;
        this.exportAsService.save(this.exportAsConfig, this.translate.instant('tasks.title')).subscribe(function () {
        });
    };
    UserTasksComponent.prototype.ngAfterViewInit = function () {
        this.dtTrigger.next();
    };
    UserTasksComponent.prototype.ngOnDestroy = function () {
        this.dtTrigger.unsubscribe();
    };
    UserTasksComponent.prototype.rerender = function () {
        var _this = this;
        this.dtElement.dtInstance.then(function (dtInstance) {
            dtInstance.destroy();
            setTimeout(function () {
                _this.dtTrigger.next();
            });
        });
    };
    UserTasksComponent.ctorParameters = function () { return [
        { type: _ngx_translate_core__WEBPACK_IMPORTED_MODULE_5__["TranslateService"] },
        { type: _angular_common_http__WEBPACK_IMPORTED_MODULE_3__["HttpClient"] },
        { type: ngx_export_as__WEBPACK_IMPORTED_MODULE_4__["ExportAsService"] },
        { type: _core_services_task_service__WEBPACK_IMPORTED_MODULE_8__["TaskService"] },
        { type: _angular_router__WEBPACK_IMPORTED_MODULE_2__["ActivatedRoute"] }
    ]; };
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])(),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", Object)
    ], UserTasksComponent.prototype, "loginUser", void 0);
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewChild"])(angular_datatables__WEBPACK_IMPORTED_MODULE_6__["DataTableDirective"], { static: true }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", angular_datatables__WEBPACK_IMPORTED_MODULE_6__["DataTableDirective"])
    ], UserTasksComponent.prototype, "dtElement", void 0);
    UserTasksComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-user-tasks',
            template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./user-tasks.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/modules/admin/user/components/user-tasks/user-tasks.component.html")).default,
            styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./user-tasks.component.scss */ "./src/app/modules/admin/user/components/user-tasks/user-tasks.component.scss")).default]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_ngx_translate_core__WEBPACK_IMPORTED_MODULE_5__["TranslateService"],
            _angular_common_http__WEBPACK_IMPORTED_MODULE_3__["HttpClient"],
            ngx_export_as__WEBPACK_IMPORTED_MODULE_4__["ExportAsService"],
            _core_services_task_service__WEBPACK_IMPORTED_MODULE_8__["TaskService"],
            _angular_router__WEBPACK_IMPORTED_MODULE_2__["ActivatedRoute"]])
    ], UserTasksComponent);
    return UserTasksComponent;
}());



/***/ }),

/***/ "./src/app/modules/admin/user/pages/user-create/user-create.component.scss":
/*!*********************************************************************************!*\
  !*** ./src/app/modules/admin/user/pages/user-create/user-create.component.scss ***!
  \*********************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL21vZHVsZXMvYWRtaW4vdXNlci9wYWdlcy91c2VyLWNyZWF0ZS91c2VyLWNyZWF0ZS5jb21wb25lbnQuc2NzcyJ9 */");

/***/ }),

/***/ "./src/app/modules/admin/user/pages/user-create/user-create.component.ts":
/*!*******************************************************************************!*\
  !*** ./src/app/modules/admin/user/pages/user-create/user-create.component.ts ***!
  \*******************************************************************************/
/*! exports provided: UserCreateComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "UserCreateComponent", function() { return UserCreateComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var ngx_toastr__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ngx-toastr */ "./node_modules/ngx-toastr/fesm5/ngx-toastr.js");
/* harmony import */ var ngx_bootstrap_modal__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ngx-bootstrap/modal */ "./node_modules/ngx-bootstrap/modal/fesm5/ngx-bootstrap-modal.js");
/* harmony import */ var _ngx_translate_core__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @ngx-translate/core */ "./node_modules/@ngx-translate/core/fesm5/ngx-translate-core.js");
/* harmony import */ var _core_services_department_service__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../../../../../core/services/department.service */ "./src/app/core/services/department.service.ts");
/* harmony import */ var _core_services_user_service__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../../../../../core/services/user.service */ "./src/app/core/services/user.service.ts");
/* harmony import */ var _core_services_helper_service__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../../../../../core/services/helper.service */ "./src/app/core/services/helper.service.ts");
/* harmony import */ var _core_services_translation_service__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ../../../../../core/services/translation.service */ "./src/app/core/services/translation.service.ts");
/* harmony import */ var _components_assign_user_assign_user_component__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ../../components/assign-user/assign-user.component */ "./src/app/modules/admin/user/components/assign-user/assign-user.component.ts");
/* harmony import */ var _core_helpers_must_match_validator__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ./../../../../../core/helpers/must-match.validator */ "./src/app/core/helpers/must-match.validator.ts");
/* harmony import */ var dropzone__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! dropzone */ "./node_modules/dropzone/dist/dropzone.js");
/* harmony import */ var dropzone__WEBPACK_IMPORTED_MODULE_13___default = /*#__PURE__*/__webpack_require__.n(dropzone__WEBPACK_IMPORTED_MODULE_13__);
/* harmony import */ var _core_helpers_app_helper__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ../../../../../core/helpers/app.helper */ "./src/app/core/helpers/app.helper.ts");
/* harmony import */ var _core_helpers_admin_helper__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! ../../../../../core/helpers/admin.helper */ "./src/app/core/helpers/admin.helper.ts");
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! ../../../../../../environments/environment */ "./src/environments/environment.ts");

















var UserCreateComponent = /** @class */ (function () {
    function UserCreateComponent(translate, router, formBuilder, modalService, toastr, departmentService, userService, helperService, translationService) {
        this.translate = translate;
        this.router = router;
        this.formBuilder = formBuilder;
        this.modalService = modalService;
        this.toastr = toastr;
        this.departmentService = departmentService;
        this.userService = userService;
        this.helperService = helperService;
        this.translationService = translationService;
        this.apiUrl = _environments_environment__WEBPACK_IMPORTED_MODULE_16__["environment"].apiUrl;
        this.users = [];
        this.avatars = _core_helpers_admin_helper__WEBPACK_IMPORTED_MODULE_15__["UserAvatars"];
        this.isFormSubmitted = false;
        this.isPageLoaded = false;
        this.isPermissionRequired = false;
        this.isProfileLoaded = true;
        this.isProfileUploded = false;
        this.modalConfigs = {
            animated: true,
            keyboard: true,
            backdrop: true,
            ignoreBackdropClick: false,
            class: 'inmodal modal-dialog-centered modal-md animated fadeIn'
        };
    }
    Object.defineProperty(UserCreateComponent.prototype, "userControl", {
        get: function () {
            return this.createUserForm.controls;
        },
        enumerable: true,
        configurable: true
    });
    UserCreateComponent.prototype.ngOnInit = function () {
        this.getDepartments();
        this.getCountries();
        this.getLanguages();
        this.getUserGeneratedId();
        this.getUsers();
        this.loadForms();
    };
    UserCreateComponent.prototype.loadForms = function () {
        var that = this;
        this.createUserForm = this.formBuilder.group({
            user_generated_id: ['USR0001', _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required],
            emp_id: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required],
            username: ['', [_angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required, _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].minLength(3), _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].maxLength(30), _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].pattern(/^\S*$/)]],
            firstname: ['', [_angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required, _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].maxLength(20)]],
            lastname: ['', [_angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required, _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].maxLength(20)]],
            email: ['', [_angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required, _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].email]],
            password: ['', [_angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required, _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].minLength(3), _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].maxLength(30)]],
            password_confirmation: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required],
            skype: [''],
            country: [null],
            mobile: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].pattern(_core_helpers_app_helper__WEBPACK_IMPORTED_MODULE_14__["RegExpEnum"].phone_regular_expression)],
            language: ['en'],
            primary_manager: [null],
            secondary_manager: [null],
            phone: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].pattern(_core_helpers_app_helper__WEBPACK_IMPORTED_MODULE_14__["RegExpEnum"].phone_regular_expression)],
            address: [''],
            is_super_admin: [false],
            avatar: [null],
            assign_permission: ['all'],
            department_roles: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required],
            permission: ['']
        }, {
            validator: Object(_core_helpers_must_match_validator__WEBPACK_IMPORTED_MODULE_12__["MustMatch"])('password', 'password_confirmation')
        });
        this.isPageLoaded = true;
        setTimeout(function () {
            that.loadDropzone();
        });
    };
    UserCreateComponent.prototype.loadDropzone = function () {
        var that = this;
        new dropzone__WEBPACK_IMPORTED_MODULE_13__(this.pdfDropzone.nativeElement, {
            url: 'https://httpbin.org/post',
            maxFiles: 1,
            clickable: true,
            acceptedFiles: 'image/*',
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
                        reader_1.onload = function (e) {
                            that.createUserForm.patchValue({ avatar: reader_1.result });
                            that.isProfileLoaded = false;
                        };
                        reader_1.readAsDataURL(file);
                    }
                });
                this.on('removedfile', function (file) {
                    that.createUserForm.patchValue({ avatar: null });
                    that.isProfileLoaded = false;
                });
                this.on('error', function (file, message) {
                    if (file) {
                        that.toastr.error(message);
                    }
                });
            }
        });
    };
    UserCreateComponent.prototype.removeDropzoneImage = function () {
        this.isProfileUploded = true;
        this.isProfileLoaded = false;
        this.createUserForm.patchValue({ avatar: null });
    };
    UserCreateComponent.prototype.setAvatar = function (avatar) {
        if (avatar === this.selected) {
            this.selected = null;
        }
        else {
            this.selected = avatar;
        }
        this.createUserForm.patchValue({ avatar: this.selected });
    };
    UserCreateComponent.prototype.isActive = function (avatar) {
        return this.selected === avatar;
    };
    ;
    UserCreateComponent.prototype.getDepartments = function () {
        var _this_1 = this;
        this.departmentService.getAll()
            .subscribe(function (data) {
            _this_1.departmentsRoles = data;
        });
    };
    UserCreateComponent.prototype.getLanguages = function () {
        var _this_1 = this;
        this.translationService.getAllActiveTranslations()
            .subscribe(function (data) {
            _this_1.languages = data;
        });
    };
    UserCreateComponent.prototype.getCountries = function () {
        var _this_1 = this;
        this.helperService.getCountries()
            .subscribe(function (data) {
            _this_1.countries = data;
        });
    };
    UserCreateComponent.prototype.getUserGeneratedId = function () {
        var _this_1 = this;
        this.userService.getUserGeneratedId().subscribe(function (data) {
            _this_1.createUserForm.patchValue({ user_generated_id: data });
        });
    };
    UserCreateComponent.prototype.getUsers = function () {
        var _this_1 = this;
        this.userService.getAll().subscribe(function (data) {
            _this_1.users = data;
        });
    };
    UserCreateComponent.prototype.departmentRolesChange = function (event) {
        this.selectedDepartmentRoles = event;
    };
    UserCreateComponent.prototype.changePermission = function (event) {
        var _this_1 = this;
        this.isPermissionRequired = false;
        if (event.target.value == 'cutomize') {
            this.modalRef = this.modalService.show(_components_assign_user_assign_user_component__WEBPACK_IMPORTED_MODULE_11__["AssignUserComponent"], this.modalConfigs);
            this.modalRef.content.event.subscribe(function (data) {
                _this_1.createUserForm.patchValue({ permission: data.permissions });
            });
        }
    };
    UserCreateComponent.prototype.onSubmit = function () {
        var _this_1 = this;
        this.createUserForm.value.department_roles = [];
        this.isFormSubmitted = true;
        if (this.userControl.assign_permission.value == 'cutomize' && this.createUserForm.value.permission.length == 0) {
            this.isPermissionRequired = true;
            return false;
        }
        if (this.createUserForm.invalid) {
            return;
        }
        if (this.selectedDepartmentRoles) {
            for (var iRow in this.selectedDepartmentRoles) {
                if (this.selectedDepartmentRoles[iRow].pivot) {
                    this.createUserForm.value.department_roles.push(this.selectedDepartmentRoles[iRow].pivot);
                }
            }
        }
        this.userService.create(this.createUserForm.value)
            .subscribe(function (data) {
            _this_1.toastr.success(_this_1.translate.instant('users.messages.create'), _this_1.translate.instant('users.title'));
            _this_1.router.navigate(['users']);
        });
    };
    UserCreateComponent.ctorParameters = function () { return [
        { type: _ngx_translate_core__WEBPACK_IMPORTED_MODULE_6__["TranslateService"] },
        { type: _angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"] },
        { type: _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormBuilder"] },
        { type: ngx_bootstrap_modal__WEBPACK_IMPORTED_MODULE_5__["BsModalService"] },
        { type: ngx_toastr__WEBPACK_IMPORTED_MODULE_4__["ToastrService"] },
        { type: _core_services_department_service__WEBPACK_IMPORTED_MODULE_7__["DepartmentService"] },
        { type: _core_services_user_service__WEBPACK_IMPORTED_MODULE_8__["UserService"] },
        { type: _core_services_helper_service__WEBPACK_IMPORTED_MODULE_9__["HelperService"] },
        { type: _core_services_translation_service__WEBPACK_IMPORTED_MODULE_10__["TranslationService"] }
    ]; };
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewChild"])('pdfDropzone', { static: false }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", _angular_core__WEBPACK_IMPORTED_MODULE_1__["ElementRef"])
    ], UserCreateComponent.prototype, "pdfDropzone", void 0);
    UserCreateComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-user-create',
            template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./user-create.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/modules/admin/user/pages/user-create/user-create.component.html")).default,
            styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./user-create.component.scss */ "./src/app/modules/admin/user/pages/user-create/user-create.component.scss")).default]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_ngx_translate_core__WEBPACK_IMPORTED_MODULE_6__["TranslateService"],
            _angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormBuilder"],
            ngx_bootstrap_modal__WEBPACK_IMPORTED_MODULE_5__["BsModalService"],
            ngx_toastr__WEBPACK_IMPORTED_MODULE_4__["ToastrService"],
            _core_services_department_service__WEBPACK_IMPORTED_MODULE_7__["DepartmentService"],
            _core_services_user_service__WEBPACK_IMPORTED_MODULE_8__["UserService"],
            _core_services_helper_service__WEBPACK_IMPORTED_MODULE_9__["HelperService"],
            _core_services_translation_service__WEBPACK_IMPORTED_MODULE_10__["TranslationService"]])
    ], UserCreateComponent);
    return UserCreateComponent;
}());



/***/ }),

/***/ "./src/app/modules/admin/user/pages/user-detail/user-detail.component.scss":
/*!*********************************************************************************!*\
  !*** ./src/app/modules/admin/user/pages/user-detail/user-detail.component.scss ***!
  \*********************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL21vZHVsZXMvYWRtaW4vdXNlci9wYWdlcy91c2VyLWRldGFpbC91c2VyLWRldGFpbC5jb21wb25lbnQuc2NzcyJ9 */");

/***/ }),

/***/ "./src/app/modules/admin/user/pages/user-detail/user-detail.component.ts":
/*!*******************************************************************************!*\
  !*** ./src/app/modules/admin/user/pages/user-detail/user-detail.component.ts ***!
  \*******************************************************************************/
/*! exports provided: UserDetailComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "UserDetailComponent", function() { return UserDetailComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var ngx_toastr__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ngx-toastr */ "./node_modules/ngx-toastr/fesm5/ngx-toastr.js");
/* harmony import */ var ngx_permissions__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ngx-permissions */ "./node_modules/ngx-permissions/ngx-permissions.umd.js");
/* harmony import */ var ngx_permissions__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(ngx_permissions__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _core_services_user_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../../../../core/services/user.service */ "./src/app/core/services/user.service.ts");
/* harmony import */ var _core_services_authentication_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../../../../core/services/authentication.service */ "./src/app/core/services/authentication.service.ts");
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../../../../../../environments/environment */ "./src/environments/environment.ts");








var UserDetailComponent = /** @class */ (function () {
    function UserDetailComponent(ngxRolesService, route, router, toastr, userService, authenticationService) {
        var _this = this;
        this.ngxRolesService = ngxRolesService;
        this.route = route;
        this.router = router;
        this.toastr = toastr;
        this.userService = userService;
        this.authenticationService = authenticationService;
        this.userActiveTab = '1';
        this.isPageLoaded = false;
        this.permission = false;
        this.apiUrl = _environments_environment__WEBPACK_IMPORTED_MODULE_7__["environment"].apiUrl;
        this.authenticationService.loginUser.subscribe(function (x) { return _this.loginUser = x; });
        this.route.paramMap.subscribe(function (params) {
            _this.getUserById(params.get('id'));
        });
    }
    UserDetailComponent.prototype.ngOnInit = function () {
    };
    UserDetailComponent.prototype.setActiveUserTab = function ($event) {
        this.userActiveTab = $event.id;
    };
    UserDetailComponent.prototype.getActiveUserTab = function (tab) {
        return this.userActiveTab === tab;
    };
    UserDetailComponent.prototype.checkUserHavePermission = function (user) {
        var roleName = this.ngxRolesService.getRole('admin');
        if ((roleName && roleName.name == 'admin') || this.loginUser.is_super_admin) {
            this.permission = true;
        }
        else if ((this.checkDepartmentsRoles(user) || user.is_super_admin) && user.id == this.loginUser.id) {
            this.permission = true;
        }
        else if ((this.checkDepartmentsRoles(user) || user.is_super_admin) && user.id != this.loginUser.id) {
            this.permission = false;
        }
        else if (user.id == this.loginUser.id) {
            this.permission = true;
        }
        else if (!user.permission) {
            this.permission = false;
        }
        else {
            if (user.permission == 'all') {
                for (var iRow in this.assignUserPermissions) {
                    if (this.assignUserPermissions[iRow].id == this.loginUser.id) {
                        this.permission = true;
                    }
                }
            }
            else {
                if (typeof user.permission == 'string') {
                    var loginUserPermissions = JSON.parse(user.permission);
                    if (loginUserPermissions[this.loginUser.id]) {
                        for (var iRow in loginUserPermissions[this.loginUser.id]) {
                            if (loginUserPermissions[this.loginUser.id][iRow] == 'edit') {
                                this.permission = true;
                            }
                        }
                    }
                }
                else {
                    this.permission = false;
                }
            }
        }
        this.isPageLoaded = true;
    };
    UserDetailComponent.prototype.checkDepartmentsRoles = function (user) {
        var isAdmin = false;
        for (var iRow in user.departments) {
            for (var jRow in user.departments[iRow].roles) {
                if (user.departments[iRow].roles[jRow].id == 1) {
                    isAdmin = true;
                }
            }
        }
        return isAdmin;
    };
    UserDetailComponent.prototype.getAssignUserPermissions = function () {
        var _this = this;
        this.userService.getUserPermissions()
            .subscribe(function (data) {
            _this.assignUserPermissions = data;
            _this.checkUserHavePermission(_this.user);
        });
    };
    UserDetailComponent.prototype.getUserById = function (userId) {
        var _this = this;
        this.userService.getById(userId)
            .subscribe(function (data) {
            _this.user = data;
            _this.getAssignUserPermissions();
        });
    };
    UserDetailComponent.ctorParameters = function () { return [
        { type: ngx_permissions__WEBPACK_IMPORTED_MODULE_4__["NgxRolesService"] },
        { type: _angular_router__WEBPACK_IMPORTED_MODULE_2__["ActivatedRoute"] },
        { type: _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"] },
        { type: ngx_toastr__WEBPACK_IMPORTED_MODULE_3__["ToastrService"] },
        { type: _core_services_user_service__WEBPACK_IMPORTED_MODULE_5__["UserService"] },
        { type: _core_services_authentication_service__WEBPACK_IMPORTED_MODULE_6__["AuthenticationService"] }
    ]; };
    UserDetailComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-user-detail',
            template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./user-detail.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/modules/admin/user/pages/user-detail/user-detail.component.html")).default,
            styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./user-detail.component.scss */ "./src/app/modules/admin/user/pages/user-detail/user-detail.component.scss")).default]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [ngx_permissions__WEBPACK_IMPORTED_MODULE_4__["NgxRolesService"],
            _angular_router__WEBPACK_IMPORTED_MODULE_2__["ActivatedRoute"],
            _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"],
            ngx_toastr__WEBPACK_IMPORTED_MODULE_3__["ToastrService"],
            _core_services_user_service__WEBPACK_IMPORTED_MODULE_5__["UserService"],
            _core_services_authentication_service__WEBPACK_IMPORTED_MODULE_6__["AuthenticationService"]])
    ], UserDetailComponent);
    return UserDetailComponent;
}());



/***/ }),

/***/ "./src/app/modules/admin/user/pages/user-edit/user-edit.component.scss":
/*!*****************************************************************************!*\
  !*** ./src/app/modules/admin/user/pages/user-edit/user-edit.component.scss ***!
  \*****************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL21vZHVsZXMvYWRtaW4vdXNlci9wYWdlcy91c2VyLWVkaXQvdXNlci1lZGl0LmNvbXBvbmVudC5zY3NzIn0= */");

/***/ }),

/***/ "./src/app/modules/admin/user/pages/user-edit/user-edit.component.ts":
/*!***************************************************************************!*\
  !*** ./src/app/modules/admin/user/pages/user-edit/user-edit.component.ts ***!
  \***************************************************************************/
/*! exports provided: UserEditComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "UserEditComponent", function() { return UserEditComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var ngx_bootstrap_modal__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ngx-bootstrap/modal */ "./node_modules/ngx-bootstrap/modal/fesm5/ngx-bootstrap-modal.js");
/* harmony import */ var ngx_toastr__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ngx-toastr */ "./node_modules/ngx-toastr/fesm5/ngx-toastr.js");
/* harmony import */ var _ngx_translate_core__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @ngx-translate/core */ "./node_modules/@ngx-translate/core/fesm5/ngx-translate-core.js");
/* harmony import */ var ngx_permissions__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ngx-permissions */ "./node_modules/ngx-permissions/ngx-permissions.umd.js");
/* harmony import */ var ngx_permissions__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(ngx_permissions__WEBPACK_IMPORTED_MODULE_7__);
/* harmony import */ var _core_services_user_service__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../../../../../core/services/user.service */ "./src/app/core/services/user.service.ts");
/* harmony import */ var _core_services_department_service__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../../../../../core/services/department.service */ "./src/app/core/services/department.service.ts");
/* harmony import */ var _core_services_helper_service__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ../../../../../core/services/helper.service */ "./src/app/core/services/helper.service.ts");
/* harmony import */ var _core_services_authentication_service__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ../../../../../core/services/authentication.service */ "./src/app/core/services/authentication.service.ts");
/* harmony import */ var _core_services_translation_service__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ../../../../../core/services/translation.service */ "./src/app/core/services/translation.service.ts");
/* harmony import */ var _components_assign_user_assign_user_component__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ../../components/assign-user/assign-user.component */ "./src/app/modules/admin/user/components/assign-user/assign-user.component.ts");
/* harmony import */ var _core_helpers_admin_helper__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ../../../../../core/helpers/admin.helper */ "./src/app/core/helpers/admin.helper.ts");
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! ../../../../../../environments/environment */ "./src/environments/environment.ts");
/* harmony import */ var dropzone__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! dropzone */ "./node_modules/dropzone/dist/dropzone.js");
/* harmony import */ var dropzone__WEBPACK_IMPORTED_MODULE_16___default = /*#__PURE__*/__webpack_require__.n(dropzone__WEBPACK_IMPORTED_MODULE_16__);

















var UserEditComponent = /** @class */ (function () {
    function UserEditComponent(translate, ngxRolesService, route, router, formBuilder, modalService, toastr, authenticationService, departmentService, userService, helperService, translationService) {
        var _this_1 = this;
        this.translate = translate;
        this.ngxRolesService = ngxRolesService;
        this.route = route;
        this.router = router;
        this.formBuilder = formBuilder;
        this.modalService = modalService;
        this.toastr = toastr;
        this.authenticationService = authenticationService;
        this.departmentService = departmentService;
        this.userService = userService;
        this.helperService = helperService;
        this.translationService = translationService;
        this.users = [];
        this.avatars = _core_helpers_admin_helper__WEBPACK_IMPORTED_MODULE_14__["UserAvatars"];
        this.isFormSubmitted = false;
        this.isPermissionRequired = false;
        this.departmentsRoles = [];
        this.departmentsObj = [];
        this.isPageLoaded = false;
        this.isProfileLoaded = true;
        this.isButtonShow = false;
        this.apiUrl = _environments_environment__WEBPACK_IMPORTED_MODULE_15__["environment"].apiUrl;
        this.authenticationService.loginUser.subscribe(function (x) { return _this_1.loginUser = x; });
        this.route.paramMap.subscribe(function (params) {
            _this_1.getUserById(params.get('id'));
        });
    }
    Object.defineProperty(UserEditComponent.prototype, "userControl", {
        get: function () {
            return this.editUserForm.controls;
        },
        enumerable: true,
        configurable: true
    });
    UserEditComponent.prototype.ngOnInit = function () {
        this.getCountries();
        this.getLanguages();
        this.getUsers();
    };
    UserEditComponent.prototype.checkUserHavePermission = function (user) {
        var roleName = this.ngxRolesService.getRole('admin'), isEditable = false;
        if (roleName && roleName.name == 'admin' || this.loginUser.is_super_admin) {
            isEditable = true;
        }
        else if (!user.permission) {
            isEditable = false;
        }
        else {
            if (user.permission == 'all') {
                for (var iRow in this.assignUserPermissions) {
                    if (this.assignUserPermissions[iRow].id == this.loginUser.id) {
                        isEditable = true;
                    }
                }
            }
            else {
                if (typeof user.permission == 'string') {
                    var loginUserPermissions = JSON.parse(user.permission);
                    if (loginUserPermissions[this.loginUser.id]) {
                        for (var iRow in loginUserPermissions[this.loginUser.id]) {
                            if (loginUserPermissions[this.loginUser.id][iRow] == 'edit') {
                                isEditable = true;
                            }
                        }
                    }
                }
                else {
                    isEditable = false;
                }
            }
        }
        if (!isEditable) {
            this.router.navigate(['users']);
        }
    };
    UserEditComponent.prototype.getAssignUserPermissions = function () {
        var _this_1 = this;
        this.userService.getUserPermissions()
            .subscribe(function (data) {
            _this_1.assignUserPermissions = data;
            _this_1.checkUserHavePermission(_this_1.user);
        });
    };
    UserEditComponent.prototype.getUserById = function (userId) {
        var _this_1 = this;
        this.userService.getById(userId)
            .subscribe(function (data) {
            _this_1.user = data;
            _this_1.getAssignUserPermissions();
            _this_1.getDepartments();
        });
    };
    UserEditComponent.prototype.getDepartments = function () {
        var _this_1 = this;
        this.departmentService.getAll()
            .subscribe(function (data) {
            _this_1.getDepartmentsRoles(data);
        });
    };
    UserEditComponent.prototype.getLanguages = function () {
        var _this_1 = this;
        this.translationService.getAllActiveTranslations()
            .subscribe(function (data) {
            _this_1.languages = data;
        });
    };
    UserEditComponent.prototype.getUsers = function () {
        var _this_1 = this;
        this.userService.getAll().subscribe(function (data) {
            _this_1.users = data;
        });
    };
    UserEditComponent.prototype.getCountries = function () {
        var _this_1 = this;
        this.helperService.getCountries()
            .subscribe(function (data) {
            _this_1.countries = data;
        });
    };
    UserEditComponent.prototype.getDepartmentsRoles = function (departments) {
        var that = this;
        for (var iRow in departments) {
            for (var jRow in departments[iRow].roles) {
                this.departmentsRoles.push({
                    id: departments[iRow].id + '_' + departments[iRow].roles[jRow].id,
                    role_id: departments[iRow].roles[jRow].id,
                    name: departments[iRow].roles[jRow].name,
                    department_id: departments[iRow].id,
                    department_name: departments[iRow].name
                });
            }
        }
        for (var iRow in this.user.departments) {
            for (var jRow in this.user.departments[iRow].roles) {
                this.departmentsObj.push(this.user.departments[iRow].id + '_' + this.user.departments[iRow].roles[jRow].id);
            }
        }
        this.loadUserForm();
        setTimeout(function () {
            that.loadDropzone();
        });
    };
    UserEditComponent.prototype.loadUserForm = function () {
        this.editUserForm = this.formBuilder.group({
            id: [this.user.id],
            user_generated_id: [this.user.user_generated_id, _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required],
            emp_id: [this.user.emp_id, _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required],
            username: [this.user.username, [_angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required, _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].minLength(3), _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].maxLength(30), _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].pattern(/^\S*$/)]],
            firstname: [this.user.firstname, [_angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required, _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].maxLength(20)]],
            lastname: [this.user.lastname, [_angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required, _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].maxLength(20)]],
            email: [this.user.email, [_angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required, _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].email]],
            skype: [this.user.skype],
            country: [this.user.country],
            mobile: [this.user.mobile, _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].pattern(/^(?:[+])?(\d[ -]?){1,15}$/)],
            language: [this.user.language],
            primary_manager: [this.user.primary_manager],
            secondary_manager: [this.user.secondary_manager],
            phone: [this.user.phone, _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].pattern(/^(?:[+])?(\d[ -]?){1,15}$/)],
            address: [this.user.address],
            is_super_admin: [this.user.is_super_admin],
            avatar: [this.user.avatar],
            assign_permission: ['all'],
            department_roles: [this.departmentsObj, _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required],
            permission: ['']
        });
        if (this.user.permission !== 'all') {
            this.isButtonShow = true;
            this.editUserForm.patchValue({ assign_permission: 'cutomize' });
            this.user.permission = JSON.parse(this.user.permission);
            this.editUserForm.patchValue({ permission: this.user.permission });
        }
        this.setAvatar(this.user.avatar);
        this.selectedDepartmentRoles = this.removeUnderscoreIds(this.departmentsObj);
        this.isPageLoaded = true;
    };
    UserEditComponent.prototype.openAssignUserModal = function ($event) {
        var _this_1 = this;
        var modalConfigs = {
            animated: true,
            keyboard: true,
            backdrop: true,
            ignoreBackdropClick: false,
            class: 'inmodal modal-dialog-centered modal-md animated fadeIn',
            initialState: {
                assignPermissions: this.user.permission
            }
        };
        this.modalRef = this.modalService.show(_components_assign_user_assign_user_component__WEBPACK_IMPORTED_MODULE_13__["AssignUserComponent"], modalConfigs);
        this.modalRef.content.event.subscribe(function (data) {
            _this_1.editUserForm.patchValue({ permission: data.permissions });
        });
        return false;
    };
    UserEditComponent.prototype.loadDropzone = function () {
        var that = this;
        new dropzone__WEBPACK_IMPORTED_MODULE_16__(this.pdfDropzone.nativeElement, {
            url: 'https://httpbin.org/post',
            maxFiles: 1,
            clickable: true,
            acceptedFiles: 'image/*',
            createImageThumbnails: true,
            init: function () {
                this.on('addedfile', function (file) {
                    var removeButton = dropzone__WEBPACK_IMPORTED_MODULE_16__["createElement"]('<button class=\'btn btn-sm btn-block\'>' + that.translate.instant('common.remove_file') + '</button>');
                    var _this = this;
                    removeButton.addEventListener('click', function (e) {
                        e.preventDefault();
                        e.stopPropagation();
                        _this.removeFile(file);
                    });
                    file.previewElement.appendChild(removeButton);
                    if (file) {
                        var reader_1 = new FileReader();
                        reader_1.onload = function (e) {
                            that.editUserForm.patchValue({ avatar: reader_1.result });
                            that.isProfileLoaded = false;
                        };
                        reader_1.readAsDataURL(file);
                    }
                });
                this.on('removedfile', function (file) {
                    that.editUserForm.patchValue({ avatar: null });
                    that.isProfileLoaded = false;
                });
                this.on('error', function (file, message) {
                    if (file) {
                        that.toastr.error(message);
                    }
                });
            }
        });
    };
    UserEditComponent.prototype.removeDropzoneImage = function () {
        this.isProfileLoaded = false;
        this.editUserForm.patchValue({ avatar: null });
    };
    UserEditComponent.prototype.setAvatar = function (avatar) {
        if (avatar === this.selected) {
            this.selected = null;
        }
        else {
            this.selected = avatar;
        }
        this.editUserForm.patchValue({ avatar: this.selected });
    };
    UserEditComponent.prototype.isActive = function (avatar) {
        return this.selected === avatar;
    };
    ;
    UserEditComponent.prototype.changePermission = function (event) {
        this.isPermissionRequired = false;
        if (event.target.value == 'cutomize') {
            this.user.permission = [];
        }
    };
    UserEditComponent.prototype.departmentRolesChange = function (event) {
        this.selectedDepartmentRoles = event;
    };
    UserEditComponent.prototype.removeUnderscoreIds = function (ids) {
        var idsObj = [];
        for (var iRow in ids) {
            var splitIds = ids[iRow].split('_');
            idsObj.push({
                department_id: splitIds[0],
                role_id: splitIds[1],
            });
        }
        return idsObj;
    };
    UserEditComponent.prototype.onSubmit = function () {
        var _this_1 = this;
        this.isFormSubmitted = true;
        if (this.editUserForm.invalid) {
            return;
        }
        if (this.userControl.assign_permission.value == 'cutomize' && this.editUserForm.value.permission.length == 0) {
            this.isPermissionRequired = true;
            return false;
        }
        // --
        // this.toastr.error(this.translate.instant('common.not_allowed'));
        // this.router.navigate(['users']);
        // return;
        this.editUserForm.value.department_roles = this.selectedDepartmentRoles;
        this.editUserForm.value.UserAvatars = this.avatars;
        this.userService.update(this.editUserForm.value)
            .subscribe(function (data) {
            _this_1.toastr.success(_this_1.translate.instant('users.messages.update'), _this_1.translate.instant('users.title'));
            _this_1.router.navigate(['users']);
        });
    };
    UserEditComponent.ctorParameters = function () { return [
        { type: _ngx_translate_core__WEBPACK_IMPORTED_MODULE_6__["TranslateService"] },
        { type: ngx_permissions__WEBPACK_IMPORTED_MODULE_7__["NgxRolesService"] },
        { type: _angular_router__WEBPACK_IMPORTED_MODULE_3__["ActivatedRoute"] },
        { type: _angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"] },
        { type: _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormBuilder"] },
        { type: ngx_bootstrap_modal__WEBPACK_IMPORTED_MODULE_4__["BsModalService"] },
        { type: ngx_toastr__WEBPACK_IMPORTED_MODULE_5__["ToastrService"] },
        { type: _core_services_authentication_service__WEBPACK_IMPORTED_MODULE_11__["AuthenticationService"] },
        { type: _core_services_department_service__WEBPACK_IMPORTED_MODULE_9__["DepartmentService"] },
        { type: _core_services_user_service__WEBPACK_IMPORTED_MODULE_8__["UserService"] },
        { type: _core_services_helper_service__WEBPACK_IMPORTED_MODULE_10__["HelperService"] },
        { type: _core_services_translation_service__WEBPACK_IMPORTED_MODULE_12__["TranslationService"] }
    ]; };
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewChild"])('pdfDropzone', { static: false }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", _angular_core__WEBPACK_IMPORTED_MODULE_1__["ElementRef"])
    ], UserEditComponent.prototype, "pdfDropzone", void 0);
    UserEditComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-user-edit',
            template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./user-edit.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/modules/admin/user/pages/user-edit/user-edit.component.html")).default,
            styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./user-edit.component.scss */ "./src/app/modules/admin/user/pages/user-edit/user-edit.component.scss")).default]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_ngx_translate_core__WEBPACK_IMPORTED_MODULE_6__["TranslateService"],
            ngx_permissions__WEBPACK_IMPORTED_MODULE_7__["NgxRolesService"],
            _angular_router__WEBPACK_IMPORTED_MODULE_3__["ActivatedRoute"],
            _angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormBuilder"],
            ngx_bootstrap_modal__WEBPACK_IMPORTED_MODULE_4__["BsModalService"],
            ngx_toastr__WEBPACK_IMPORTED_MODULE_5__["ToastrService"],
            _core_services_authentication_service__WEBPACK_IMPORTED_MODULE_11__["AuthenticationService"],
            _core_services_department_service__WEBPACK_IMPORTED_MODULE_9__["DepartmentService"],
            _core_services_user_service__WEBPACK_IMPORTED_MODULE_8__["UserService"],
            _core_services_helper_service__WEBPACK_IMPORTED_MODULE_10__["HelperService"],
            _core_services_translation_service__WEBPACK_IMPORTED_MODULE_12__["TranslationService"]])
    ], UserEditComponent);
    return UserEditComponent;
}());



/***/ }),

/***/ "./src/app/modules/admin/user/pages/user/user.component.scss":
/*!*******************************************************************!*\
  !*** ./src/app/modules/admin/user/pages/user/user.component.scss ***!
  \*******************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = (".hide_empty_message ::ng-deep .odd {\n  display: none;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvbW9kdWxlcy9hZG1pbi91c2VyL3BhZ2VzL3VzZXIvQzpcXFVzZXJzXFx0aHVhblxcT25lRHJpdmVcXERlc2t0b3BcXGdsYXZhbC10aHVhbmRpbmgvc3JjXFxhcHBcXG1vZHVsZXNcXGFkbWluXFx1c2VyXFxwYWdlc1xcdXNlclxcdXNlci5jb21wb25lbnQuc2NzcyIsInNyYy9hcHAvbW9kdWxlcy9hZG1pbi91c2VyL3BhZ2VzL3VzZXIvdXNlci5jb21wb25lbnQuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNJLGFBQUE7QUNDSiIsImZpbGUiOiJzcmMvYXBwL21vZHVsZXMvYWRtaW4vdXNlci9wYWdlcy91c2VyL3VzZXIuY29tcG9uZW50LnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyIuaGlkZV9lbXB0eV9tZXNzYWdlIDo6bmctZGVlcCAub2RkIHtcclxuICAgIGRpc3BsYXk6IG5vbmVcclxufSIsIi5oaWRlX2VtcHR5X21lc3NhZ2UgOjpuZy1kZWVwIC5vZGQge1xuICBkaXNwbGF5OiBub25lO1xufSJdfQ== */");

/***/ }),

/***/ "./src/app/modules/admin/user/pages/user/user.component.ts":
/*!*****************************************************************!*\
  !*** ./src/app/modules/admin/user/pages/user/user.component.ts ***!
  \*****************************************************************/
/*! exports provided: UserComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "UserComponent", function() { return UserComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var angular_datatables__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! angular-datatables */ "./node_modules/angular-datatables/index.js");
/* harmony import */ var ngx_bootstrap_modal__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ngx-bootstrap/modal */ "./node_modules/ngx-bootstrap/modal/fesm5/ngx-bootstrap-modal.js");
/* harmony import */ var ngx_toastr__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ngx-toastr */ "./node_modules/ngx-toastr/fesm5/ngx-toastr.js");
/* harmony import */ var ngx_export_as__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ngx-export-as */ "./node_modules/ngx-export-as/fesm2015/ngx-export-as.js");
/* harmony import */ var _ngx_translate_core__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @ngx-translate/core */ "./node_modules/@ngx-translate/core/fesm5/ngx-translate-core.js");
/* harmony import */ var ngx_permissions__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ngx-permissions */ "./node_modules/ngx-permissions/ngx-permissions.umd.js");
/* harmony import */ var ngx_permissions__WEBPACK_IMPORTED_MODULE_9___default = /*#__PURE__*/__webpack_require__.n(ngx_permissions__WEBPACK_IMPORTED_MODULE_9__);
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! rxjs */ "./node_modules/rxjs/_esm5/index.js");
/* harmony import */ var sweetalert2__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! sweetalert2 */ "./node_modules/sweetalert2/dist/sweetalert2.all.js");
/* harmony import */ var sweetalert2__WEBPACK_IMPORTED_MODULE_11___default = /*#__PURE__*/__webpack_require__.n(sweetalert2__WEBPACK_IMPORTED_MODULE_11__);
/* harmony import */ var _core_services_user_service__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ../../../../../core/services/user.service */ "./src/app/core/services/user.service.ts");
/* harmony import */ var _core_services_authentication_service__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ../../../../../core/services/authentication.service */ "./src/app/core/services/authentication.service.ts");
/* harmony import */ var _components_import_user_import_user_component__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ../../components/import-user/import-user.component */ "./src/app/modules/admin/user/components/import-user/import-user.component.ts");
/* harmony import */ var _core_helpers_admin_helper__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! ../../../../../core/helpers/admin.helper */ "./src/app/core/helpers/admin.helper.ts");
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! ../../../../../../environments/environment */ "./src/environments/environment.ts");
/* harmony import */ var datatables_net__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! datatables.net */ "./node_modules/datatables.net/js/jquery.dataTables.js");
/* harmony import */ var datatables_net__WEBPACK_IMPORTED_MODULE_17___default = /*#__PURE__*/__webpack_require__.n(datatables_net__WEBPACK_IMPORTED_MODULE_17__);
/* harmony import */ var datatables_net_bs4__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! datatables.net-bs4 */ "./node_modules/datatables.net-bs4/js/dataTables.bootstrap4.js");
/* harmony import */ var datatables_net_bs4__WEBPACK_IMPORTED_MODULE_18___default = /*#__PURE__*/__webpack_require__.n(datatables_net_bs4__WEBPACK_IMPORTED_MODULE_18__);



















var UserComponent = /** @class */ (function () {
    function UserComponent(translate, ngxRolesService, router, route, http, exportAsService, modalService, toastr, authenticationService, userService) {
        var _this = this;
        this.translate = translate;
        this.ngxRolesService = ngxRolesService;
        this.router = router;
        this.route = route;
        this.http = http;
        this.exportAsService = exportAsService;
        this.modalService = modalService;
        this.toastr = toastr;
        this.authenticationService = authenticationService;
        this.userService = userService;
        this.dtTrigger = new rxjs__WEBPACK_IMPORTED_MODULE_10__["Subject"]();
        this.dtOptions = {};
        this.users = [];
        this.departments = [];
        this.departments_roles = [];
        this.avatars = _core_helpers_admin_helper__WEBPACK_IMPORTED_MODULE_15__["UserAvatars"];
        this.exportAsConfig = {
            type: 'pdf',
            elementIdOrContent: 'users_table',
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
        this.getAssignUserPermissions();
    }
    UserComponent.prototype.ngOnInit = function () {
        this.loadUserDatatable();
    };
    UserComponent.prototype.loadUserDatatable = function () {
        var _this = this;
        var that = this;
        this.dtOptions = {
            pagingType: 'full_numbers',
            pageLength: that.loginUser.settings.tables_pagination_limit,
            serverSide: true,
            processing: true,
            order: [1, 'asc'],
            dom: '<"html5buttons"B>ltfrtip',
            columns: [
                {
                    'sortable': false,
                    'width': '1%',
                    'target': [0]
                },
                {
                    'sortable': true,
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
                    'width': '8%',
                    'target': [4]
                },
                {
                    'sortable': false,
                    'width': '30%',
                    'target': [5]
                },
                {
                    'sortable': false,
                    'width': '5%',
                    'target': [6]
                }
            ],
            buttons: [
                {
                    extend: 'csv',
                    title: this.translate.instant('users.title'),
                    className: 'btn btn-datatable-gredient',
                    action: function (e, dt, node, config) {
                        that.exportFiles('csv');
                    }
                }, {
                    extend: 'excel',
                    title: this.translate.instant('users.title'),
                    className: 'btn btn-datatable-gredient',
                    action: function (e, dt, node, config) {
                        that.exportFiles('xlsx');
                    }
                }, {
                    extend: 'pdf',
                    title: this.translate.instant('users.title'),
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
                _this.http
                    .post(_this.apiUrl + '/api/all-users', dataTablesParameters, {})
                    .subscribe(function (resp) {
                    if (resp) {
                        _this.users = resp.data;
                        _this.loadUserDepartments();
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
    UserComponent.prototype.ngAfterViewInit = function () {
        this.dtTrigger.next();
    };
    UserComponent.prototype.ngOnDestroy = function () {
        this.dtTrigger.unsubscribe();
    };
    UserComponent.prototype.rerender = function () {
        var _this = this;
        this.dtElement.dtInstance.then(function (dtInstance) {
            dtInstance.destroy();
            setTimeout(function () {
                _this.dtTrigger.next();
                if (_this.users.length > 0) {
                    $('.tfoot_dt').addClass('d-none');
                }
                else {
                    $('.tfoot_dt').removeClass('d-none');
                }
            });
        });
    };
    UserComponent.prototype.exportFiles = function (type) {
        this.exportAsConfig.type = type;
        this.exportAsService.save(this.exportAsConfig, this.translate.instant('users.title')).subscribe(function () {
        });
    };
    UserComponent.prototype.loadUserDepartments = function () {
        for (var iRow in this.users) {
            this.checkUserHavePermission(iRow, this.users[iRow].permission);
            for (var jRow in this.users[iRow].roles) {
                for (var kRow in this.users[iRow].roles[jRow].user_departments) {
                    if ((this.users[iRow].roles[jRow].user_departments[kRow].pivot.role_id == this.users[iRow].roles[jRow].id) && (this.users[iRow].roles[jRow].user_departments[kRow].pivot.user_id == this.users[iRow].id)) {
                        if (!this.departments_roles[this.users[iRow].roles[jRow].user_departments[kRow].pivot.user_id + '_' + this.users[iRow].roles[jRow].user_departments[kRow].pivot.role_id + '_' + this.users[iRow].roles[jRow].user_departments[kRow].pivot.department_id]) {
                            this.departments_roles[this.users[iRow].roles[jRow].user_departments[kRow].pivot.user_id + '_' + this.users[iRow].roles[jRow].user_departments[kRow].pivot.role_id + '_' + this.users[iRow].roles[jRow].user_departments[kRow].pivot.department_id] = [];
                            if (!this.departments[this.users[iRow].id]) {
                                this.departments[this.users[iRow].id] = [];
                            }
                            this.departments[this.users[iRow].id].push({
                                user_id: this.users[iRow].roles[jRow].user_departments[kRow].pivot.user_id,
                                role_id: this.users[iRow].roles[jRow].user_departments[kRow].pivot.role_id,
                                department_id: this.users[iRow].roles[jRow].user_departments[kRow].pivot.department_id,
                                role_name: this.users[iRow].roles[jRow].name,
                                department_name: this.users[iRow].roles[jRow].user_departments[kRow].name
                            });
                        }
                    }
                }
            }
        }
    };
    UserComponent.prototype.getAssignUserPermissions = function () {
        var _this = this;
        this.userService.getUserPermissions()
            .subscribe(function (data) {
            _this.assignUserPermissions = data;
        });
    };
    UserComponent.prototype.setActiveDeactiveUser = function (value, user) {
        // --
        // this.toastr.error(this.translate.instant('common.not_allowed'));
        // return;
        var _this = this;
        user.is_active = value;
        this.userService.setActiveDeactiveUser(user)
            .subscribe(function (data) {
            _this.toastr.success(_this.translate.instant('users.messages.status'), _this.translate.instant('users.title'));
            _this.rerender();
        }, function (error) {
            _this.rerender();
        });
    };
    UserComponent.prototype.sendInviteUserMail = function (id) {
        var _this = this;
        this.userService.sendInviteUserMail(id)
            .subscribe(function (data) {
            _this.toastr.success(_this.translate.instant('users.messages.invite'), _this.translate.instant('users.title'));
            _this.rerender();
        });
    };
    UserComponent.prototype.checkUserHavePermission = function (iRow, userPermissions) {
        var roleName = this.ngxRolesService.getRole('admin');
        var allowedPermission = {
            isEditable: false,
            isDeletable: false
        };
        if (roleName && roleName.name == 'admin' || this.loginUser.is_super_admin) {
            allowedPermission = {
                isEditable: true,
                isDeletable: true
            };
        }
        if (!userPermissions) {
            allowedPermission = {
                isEditable: false,
                isDeletable: false
            };
        }
        else {
            if (userPermissions == 'all') {
                for (var iRow_1 in this.assignUserPermissions) {
                    if (this.assignUserPermissions[iRow_1].id == this.loginUser.id) {
                        allowedPermission = {
                            isEditable: true,
                            isDeletable: true
                        };
                    }
                }
            }
            else {
                var loginUserPermissions = JSON.parse(userPermissions);
                if (loginUserPermissions[this.loginUser.id]) {
                    for (var iRow_2 in loginUserPermissions[this.loginUser.id]) {
                        if (loginUserPermissions[this.loginUser.id][iRow_2] == 'edit') {
                            allowedPermission.isEditable = true;
                        }
                        if (loginUserPermissions[this.loginUser.id][iRow_2] == 'delete') {
                            allowedPermission.isDeletable = true;
                        }
                    }
                }
            }
        }
        this.users[iRow].department_role_perm = allowedPermission;
    };
    UserComponent.prototype.openUserImportModal = function () {
        var _this = this;
        this.modalRef = this.modalService.show(_components_import_user_import_user_component__WEBPACK_IMPORTED_MODULE_14__["ImportUserComponent"], this.modalConfigs);
        this.modalRef.content.event.subscribe(function (data) {
            _this.toastr.success(_this.translate.instant('users.messages.import'), _this.translate.instant('users.title'));
            _this.rerender();
        });
    };
    UserComponent.prototype.userDelete = function (userId) {
        var _this = this;
        sweetalert2__WEBPACK_IMPORTED_MODULE_11___default.a.fire({
            title: this.translate.instant('common.swal.title'),
            text: this.translate.instant('common.swal.text2'),
            type: 'warning',
            showCancelButton: true,
            confirmButtonText: this.translate.instant('common.swal.confirmButtonText'),
            cancelButtonText: this.translate.instant('common.swal.cancelButtonText')
        }).then(function (result) {
            if (result.value) {
                // --
                // this.toastr.error(this.translate.instant('common.not_allowed'));
                // return;
                _this.userService.delete(userId, { 'UserAvatars': _this.avatars }).subscribe(function (data) {
                    _this.toastr.success(_this.translate.instant('users.messages.delete'), _this.translate.instant('users.title'));
                    _this.rerender();
                });
            }
        });
    };
    UserComponent.prototype.saveUserDetail = function (index, name, value) {
        var _this = this;
        this.users[index][name] = value;
        this.users[index]['type'] = 'list';
        this.userService.update(this.users[index])
            .subscribe(function (data) {
            _this.toastr.success(_this.translate.instant('users.messages.update'), _this.translate.instant('users.title'));
            _this.rerender();
        });
    };
    UserComponent.ctorParameters = function () { return [
        { type: _ngx_translate_core__WEBPACK_IMPORTED_MODULE_8__["TranslateService"] },
        { type: ngx_permissions__WEBPACK_IMPORTED_MODULE_9__["NgxRolesService"] },
        { type: _angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"] },
        { type: _angular_router__WEBPACK_IMPORTED_MODULE_3__["ActivatedRoute"] },
        { type: _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClient"] },
        { type: ngx_export_as__WEBPACK_IMPORTED_MODULE_7__["ExportAsService"] },
        { type: ngx_bootstrap_modal__WEBPACK_IMPORTED_MODULE_5__["BsModalService"] },
        { type: ngx_toastr__WEBPACK_IMPORTED_MODULE_6__["ToastrService"] },
        { type: _core_services_authentication_service__WEBPACK_IMPORTED_MODULE_13__["AuthenticationService"] },
        { type: _core_services_user_service__WEBPACK_IMPORTED_MODULE_12__["UserService"] }
    ]; };
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewChild"])(angular_datatables__WEBPACK_IMPORTED_MODULE_4__["DataTableDirective"], { static: true }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", angular_datatables__WEBPACK_IMPORTED_MODULE_4__["DataTableDirective"])
    ], UserComponent.prototype, "dtElement", void 0);
    UserComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-user',
            template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./user.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/modules/admin/user/pages/user/user.component.html")).default,
            styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./user.component.scss */ "./src/app/modules/admin/user/pages/user/user.component.scss")).default]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_ngx_translate_core__WEBPACK_IMPORTED_MODULE_8__["TranslateService"],
            ngx_permissions__WEBPACK_IMPORTED_MODULE_9__["NgxRolesService"],
            _angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"],
            _angular_router__WEBPACK_IMPORTED_MODULE_3__["ActivatedRoute"],
            _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClient"],
            ngx_export_as__WEBPACK_IMPORTED_MODULE_7__["ExportAsService"],
            ngx_bootstrap_modal__WEBPACK_IMPORTED_MODULE_5__["BsModalService"],
            ngx_toastr__WEBPACK_IMPORTED_MODULE_6__["ToastrService"],
            _core_services_authentication_service__WEBPACK_IMPORTED_MODULE_13__["AuthenticationService"],
            _core_services_user_service__WEBPACK_IMPORTED_MODULE_12__["UserService"]])
    ], UserComponent);
    return UserComponent;
}());



/***/ }),

/***/ "./src/app/modules/admin/user/user-routing.module.ts":
/*!***********************************************************!*\
  !*** ./src/app/modules/admin/user/user-routing.module.ts ***!
  \***********************************************************/
/*! exports provided: UserRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "UserRoutingModule", function() { return UserRoutingModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var ngx_permissions__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ngx-permissions */ "./node_modules/ngx-permissions/ngx-permissions.umd.js");
/* harmony import */ var ngx_permissions__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(ngx_permissions__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _pages_user_user_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./pages/user/user.component */ "./src/app/modules/admin/user/pages/user/user.component.ts");
/* harmony import */ var _pages_user_create_user_create_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./pages/user-create/user-create.component */ "./src/app/modules/admin/user/pages/user-create/user-create.component.ts");
/* harmony import */ var _pages_user_edit_user_edit_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./pages/user-edit/user-edit.component */ "./src/app/modules/admin/user/pages/user-edit/user-edit.component.ts");
/* harmony import */ var _pages_user_detail_user_detail_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./pages/user-detail/user-detail.component */ "./src/app/modules/admin/user/pages/user-detail/user-detail.component.ts");








var routes = [
    {
        path: '',
        children: [
            {
                path: '',
                canActivate: [ngx_permissions__WEBPACK_IMPORTED_MODULE_3__["NgxPermissionsGuard"]],
                data: {
                    permissions: {
                        only: ['admin', 'super_admin', 'users_view']
                    }
                },
                component: _pages_user_user_component__WEBPACK_IMPORTED_MODULE_4__["UserComponent"]
            },
            {
                path: 'create',
                canActivate: [ngx_permissions__WEBPACK_IMPORTED_MODULE_3__["NgxPermissionsGuard"]],
                data: {
                    breadcrumbs: {
                        text: 'common.create',
                        icon: 'fa fa-user-circle',
                        show: true,
                        isHome: true
                    },
                    permissions: {
                        only: ['admin', 'super_admin', 'users_create']
                    }
                },
                component: _pages_user_create_user_create_component__WEBPACK_IMPORTED_MODULE_5__["UserCreateComponent"],
            },
            {
                path: 'edit/:id',
                canActivate: [ngx_permissions__WEBPACK_IMPORTED_MODULE_3__["NgxPermissionsGuard"]],
                data: {
                    breadcrumbs: {
                        text: 'common.edit',
                        icon: 'fa fa-user-circle',
                        hasParams: true,
                        show: true,
                        isHome: true
                    },
                    permissions: {
                        only: ['admin', 'super_admin', 'users_edit']
                    }
                },
                component: _pages_user_edit_user_edit_component__WEBPACK_IMPORTED_MODULE_6__["UserEditComponent"]
            },
            {
                path: 'profile/:id',
                canActivate: [ngx_permissions__WEBPACK_IMPORTED_MODULE_3__["NgxPermissionsGuard"]],
                data: {
                    breadcrumbs: {
                        text: 'common.profile',
                        icon: 'fa fa-user-circle',
                        hasParams: true,
                        show: true,
                        isHome: true
                    }
                },
                component: _pages_user_detail_user_detail_component__WEBPACK_IMPORTED_MODULE_7__["UserDetailComponent"]
            },
        ]
    }
];
var UserRoutingModule = /** @class */ (function () {
    function UserRoutingModule() {
    }
    UserRoutingModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)],
            exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]]
        })
    ], UserRoutingModule);
    return UserRoutingModule;
}());



/***/ }),

/***/ "./src/app/modules/admin/user/user.module.ts":
/*!***************************************************!*\
  !*** ./src/app/modules/admin/user/user.module.ts ***!
  \***************************************************/
/*! exports provided: UserModule, HttpLoaderFactory */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "UserModule", function() { return UserModule; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "HttpLoaderFactory", function() { return HttpLoaderFactory; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");
/* harmony import */ var ngx_bootstrap__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ngx-bootstrap */ "./node_modules/ngx-bootstrap/esm5/ngx-bootstrap.js");
/* harmony import */ var ngx_export_as__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ngx-export-as */ "./node_modules/ngx-export-as/fesm2015/ngx-export-as.js");
/* harmony import */ var _ng_select_ng_select__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @ng-select/ng-select */ "./node_modules/@ng-select/ng-select/fesm5/ng-select.js");
/* harmony import */ var ngx_ui_switch__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ngx-ui-switch */ "./node_modules/ngx-ui-switch/ui-switch.es5.js");
/* harmony import */ var ngx_permissions__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ngx-permissions */ "./node_modules/ngx-permissions/ngx-permissions.umd.js");
/* harmony import */ var ngx_permissions__WEBPACK_IMPORTED_MODULE_9___default = /*#__PURE__*/__webpack_require__.n(ngx_permissions__WEBPACK_IMPORTED_MODULE_9__);
/* harmony import */ var ngx_bootstrap_progressbar__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ngx-bootstrap/progressbar */ "./node_modules/ngx-bootstrap/progressbar/fesm5/ngx-bootstrap-progressbar.js");
/* harmony import */ var _ngx_translate_core__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! @ngx-translate/core */ "./node_modules/@ngx-translate/core/fesm5/ngx-translate-core.js");
/* harmony import */ var _ngx_translate_http_loader__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! @ngx-translate/http-loader */ "./node_modules/@ngx-translate/http-loader/fesm5/ngx-translate-http-loader.js");
/* harmony import */ var angular_checklist__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! angular-checklist */ "./node_modules/angular-checklist/fesm5/angular-checklist.js");
/* harmony import */ var angular_datatables__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! angular-datatables */ "./node_modules/angular-datatables/index.js");
/* harmony import */ var _user_routing_module__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! ./user-routing.module */ "./src/app/modules/admin/user/user-routing.module.ts");
/* harmony import */ var _shared_shared_module__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! ../../../shared/shared.module */ "./src/app/shared/shared.module.ts");
/* harmony import */ var _pages_user_user_component__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! ./pages/user/user.component */ "./src/app/modules/admin/user/pages/user/user.component.ts");
/* harmony import */ var _pages_user_create_user_create_component__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! ./pages/user-create/user-create.component */ "./src/app/modules/admin/user/pages/user-create/user-create.component.ts");
/* harmony import */ var _pages_user_edit_user_edit_component__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(/*! ./pages/user-edit/user-edit.component */ "./src/app/modules/admin/user/pages/user-edit/user-edit.component.ts");
/* harmony import */ var _pages_user_detail_user_detail_component__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__(/*! ./pages/user-detail/user-detail.component */ "./src/app/modules/admin/user/pages/user-detail/user-detail.component.ts");
/* harmony import */ var _components_assign_user_assign_user_component__WEBPACK_IMPORTED_MODULE_21__ = __webpack_require__(/*! ./components/assign-user/assign-user.component */ "./src/app/modules/admin/user/components/assign-user/assign-user.component.ts");
/* harmony import */ var _components_user_activities_user_activities_component__WEBPACK_IMPORTED_MODULE_22__ = __webpack_require__(/*! ./components/user-activities/user-activities.component */ "./src/app/modules/admin/user/components/user-activities/user-activities.component.ts");
/* harmony import */ var _components_user_avatar_modal_user_avatar_modal_component__WEBPACK_IMPORTED_MODULE_23__ = __webpack_require__(/*! ./components/user-avatar-modal/user-avatar-modal.component */ "./src/app/modules/admin/user/components/user-avatar-modal/user-avatar-modal.component.ts");
/* harmony import */ var _components_change_email_modal_change_email_modal_component__WEBPACK_IMPORTED_MODULE_24__ = __webpack_require__(/*! ./components/change-email-modal/change-email-modal.component */ "./src/app/modules/admin/user/components/change-email-modal/change-email-modal.component.ts");
/* harmony import */ var _components_change_password_modal_change_password_modal_component__WEBPACK_IMPORTED_MODULE_25__ = __webpack_require__(/*! ./components/change-password-modal/change-password-modal.component */ "./src/app/modules/admin/user/components/change-password-modal/change-password-modal.component.ts");
/* harmony import */ var _components_user_detail_update_user_detail_update_component__WEBPACK_IMPORTED_MODULE_26__ = __webpack_require__(/*! ./components/user-detail-update/user-detail-update.component */ "./src/app/modules/admin/user/components/user-detail-update/user-detail-update.component.ts");
/* harmony import */ var _components_user_defects_user_defects_component__WEBPACK_IMPORTED_MODULE_27__ = __webpack_require__(/*! ./components/user-defects/user-defects.component */ "./src/app/modules/admin/user/components/user-defects/user-defects.component.ts");
/* harmony import */ var _components_user_projects_user_projects_component__WEBPACK_IMPORTED_MODULE_28__ = __webpack_require__(/*! ./components/user-projects/user-projects.component */ "./src/app/modules/admin/user/components/user-projects/user-projects.component.ts");
/* harmony import */ var _components_user_tasks_user_tasks_component__WEBPACK_IMPORTED_MODULE_29__ = __webpack_require__(/*! ./components/user-tasks/user-tasks.component */ "./src/app/modules/admin/user/components/user-tasks/user-tasks.component.ts");
/* harmony import */ var _components_import_user_import_user_component__WEBPACK_IMPORTED_MODULE_30__ = __webpack_require__(/*! ./components/import-user/import-user.component */ "./src/app/modules/admin/user/components/import-user/import-user.component.ts");
/* harmony import */ var _components_user_incidents_user_incidents_component__WEBPACK_IMPORTED_MODULE_31__ = __webpack_require__(/*! ./components/user-incidents/user-incidents.component */ "./src/app/modules/admin/user/components/user-incidents/user-incidents.component.ts");
































var UserModule = /** @class */ (function () {
    function UserModule() {
    }
    UserModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            declarations: [
                _pages_user_user_component__WEBPACK_IMPORTED_MODULE_17__["UserComponent"],
                _pages_user_create_user_create_component__WEBPACK_IMPORTED_MODULE_18__["UserCreateComponent"],
                _pages_user_edit_user_edit_component__WEBPACK_IMPORTED_MODULE_19__["UserEditComponent"],
                _pages_user_detail_user_detail_component__WEBPACK_IMPORTED_MODULE_20__["UserDetailComponent"],
                _components_assign_user_assign_user_component__WEBPACK_IMPORTED_MODULE_21__["AssignUserComponent"],
                _components_user_activities_user_activities_component__WEBPACK_IMPORTED_MODULE_22__["UserActivitiesComponent"],
                _components_user_avatar_modal_user_avatar_modal_component__WEBPACK_IMPORTED_MODULE_23__["UserAvatarModalComponent"],
                _components_change_email_modal_change_email_modal_component__WEBPACK_IMPORTED_MODULE_24__["ChangeEmailModalComponent"],
                _components_change_password_modal_change_password_modal_component__WEBPACK_IMPORTED_MODULE_25__["ChangePasswordModalComponent"],
                _components_user_detail_update_user_detail_update_component__WEBPACK_IMPORTED_MODULE_26__["UserDetailUpdateComponent"],
                _components_user_defects_user_defects_component__WEBPACK_IMPORTED_MODULE_27__["UserDefectsComponent"],
                _components_user_projects_user_projects_component__WEBPACK_IMPORTED_MODULE_28__["UserProjectsComponent"],
                _components_user_tasks_user_tasks_component__WEBPACK_IMPORTED_MODULE_29__["UserTasksComponent"],
                _components_import_user_import_user_component__WEBPACK_IMPORTED_MODULE_30__["ImportUserComponent"],
                _components_user_incidents_user_incidents_component__WEBPACK_IMPORTED_MODULE_31__["UserIncidentsComponent"],
            ],
            imports: [
                _angular_common__WEBPACK_IMPORTED_MODULE_3__["CommonModule"],
                _ng_select_ng_select__WEBPACK_IMPORTED_MODULE_7__["NgSelectModule"],
                angular_checklist__WEBPACK_IMPORTED_MODULE_13__["ChecklistModule"],
                _user_routing_module__WEBPACK_IMPORTED_MODULE_15__["UserRoutingModule"],
                _angular_common__WEBPACK_IMPORTED_MODULE_3__["CommonModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormsModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_2__["ReactiveFormsModule"],
                ngx_permissions__WEBPACK_IMPORTED_MODULE_9__["NgxPermissionsModule"],
                angular_datatables__WEBPACK_IMPORTED_MODULE_14__["DataTablesModule"],
                ngx_export_as__WEBPACK_IMPORTED_MODULE_6__["ExportAsModule"],
                ngx_bootstrap__WEBPACK_IMPORTED_MODULE_5__["ModalModule"].forRoot(),
                ngx_bootstrap__WEBPACK_IMPORTED_MODULE_5__["TooltipModule"].forRoot(),
                ngx_bootstrap__WEBPACK_IMPORTED_MODULE_5__["DatepickerModule"].forRoot(),
                ngx_bootstrap__WEBPACK_IMPORTED_MODULE_5__["BsDatepickerModule"].forRoot(),
                ngx_bootstrap__WEBPACK_IMPORTED_MODULE_5__["BsDropdownModule"].forRoot(),
                ngx_bootstrap__WEBPACK_IMPORTED_MODULE_5__["TabsModule"].forRoot(),
                ngx_bootstrap_progressbar__WEBPACK_IMPORTED_MODULE_10__["ProgressbarModule"].forRoot(),
                ngx_ui_switch__WEBPACK_IMPORTED_MODULE_8__["UiSwitchModule"].forRoot({
                    checkedLabel: 'Active',
                    uncheckedLabel: 'Inactive',
                    color: 'rgb(0, 189, 99)',
                    switchColor: '#FFFFFF',
                    defaultBgColor: '#c6c6c6',
                    defaultBoColor: '#c39ef8'
                }),
                _ngx_translate_core__WEBPACK_IMPORTED_MODULE_11__["TranslateModule"].forChild({
                    loader: {
                        provide: _ngx_translate_core__WEBPACK_IMPORTED_MODULE_11__["TranslateLoader"],
                        useFactory: (HttpLoaderFactory),
                        deps: [_angular_common_http__WEBPACK_IMPORTED_MODULE_4__["HttpClient"]]
                    }
                }),
                _shared_shared_module__WEBPACK_IMPORTED_MODULE_16__["SharedModule"]
            ],
            entryComponents: [
                _components_assign_user_assign_user_component__WEBPACK_IMPORTED_MODULE_21__["AssignUserComponent"],
                _components_user_avatar_modal_user_avatar_modal_component__WEBPACK_IMPORTED_MODULE_23__["UserAvatarModalComponent"],
                _components_change_email_modal_change_email_modal_component__WEBPACK_IMPORTED_MODULE_24__["ChangeEmailModalComponent"],
                _components_change_password_modal_change_password_modal_component__WEBPACK_IMPORTED_MODULE_25__["ChangePasswordModalComponent"],
                _components_user_projects_user_projects_component__WEBPACK_IMPORTED_MODULE_28__["UserProjectsComponent"],
                _components_import_user_import_user_component__WEBPACK_IMPORTED_MODULE_30__["ImportUserComponent"]
            ],
        })
    ], UserModule);
    return UserModule;
}());

// Required for AOT compilation
function HttpLoaderFactory(http) {
    return new _ngx_translate_http_loader__WEBPACK_IMPORTED_MODULE_12__["TranslateHttpLoader"](http, './assets/i18n/', '.json');
}


/***/ })

}]);
//# sourceMappingURL=modules-admin-user-user-module.js.map