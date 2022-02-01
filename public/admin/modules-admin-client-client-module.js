(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["modules-admin-client-client-module"],{

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/modules/admin/client/pages/client-create/client-create.component.html":
/*!*****************************************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/modules/admin/client/pages/client-create/client-create.component.html ***!
  \*****************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<section *ngIf=\"isPageLoaded\" id=\"basic-form-layouts\">\r\n    <form (ngSubmit)=\"onSubmit()\" [formGroup]=\"createClientForm\">\r\n        <div class=\"row\">\r\n            <div class=\"col-md-6\">\r\n                <div class=\"card\">\r\n                    <div class=\"card-header\">\r\n                        <h4 class=\"card-title\" id=\"basic-layout-form\">{{'clients.title1' | translate}}</h4>\r\n                    </div>\r\n                    <div class=\"card-body\">\r\n                        <div class=\"px-3\">\r\n                            <div class=\"form-body\">\r\n                                <h4 class=\"form-section\">\r\n                                    <i class=\"ft-user\"></i> {{'clients.headings.head1' | translate}}</h4>\r\n                                <div class=\"row\">\r\n                                    <div class=\"col-md-6\">\r\n                                        <div class=\"form-group\">\r\n                                            <label for=\"firstname\">{{'clients.create.fields.first_name' | translate}}&nbsp;<span class=\"text-danger\">*</span></label>\r\n                                            <input [ngClass]=\"{ 'is-invalid': isFormSubmitted && clientControl.firstname.errors }\" class=\"form-control\" formControlName=\"firstname\" id=\"firstname\" placeholder=\"{{'clients.create.placeholders.placeholder1' | translate}}\" type=\"text\"/>\r\n                                            <div *ngIf=\"isFormSubmitted && clientControl.firstname.errors\" class=\"invalid-feedback\">\r\n                                                <div *ngIf=\"clientControl.firstname.errors.required\">{{'clients.create.error_messages.message1' | translate}}</div>\r\n                                                <div *ngIf=\"clientControl.firstname.errors.maxlength\">{{'clients.create.error_messages.message2' | translate}}</div>\r\n                                            </div>\r\n                                        </div>\r\n                                    </div>\r\n                                    <div class=\"col-md-6\">\r\n                                        <div class=\"form-group\">\r\n                                            <label for=\"lastname\">{{'clients.create.fields.last_name' | translate}}&nbsp;<span class=\"text-danger\">*</span></label>\r\n                                            <input [ngClass]=\"{ 'is-invalid': isFormSubmitted && clientControl.lastname.errors }\" class=\"form-control\" formControlName=\"lastname\" id=\"lastname\" placeholder=\"{{'clients.create.placeholders.placeholder2' | translate}}\" type=\"text\"/>\r\n                                            <div *ngIf=\"isFormSubmitted && clientControl.lastname.errors\" class=\"invalid-feedback\">\r\n                                                <div *ngIf=\"clientControl.lastname.errors.required\">{{'clients.create.error_messages.message3' | translate}}</div>\r\n                                                <div *ngIf=\"clientControl.lastname.errors.maxlength\">{{'clients.create.error_messages.message4' | translate}}</div>\r\n                                            </div>\r\n                                        </div>\r\n                                    </div>\r\n                                    <div class=\"col-md-12\">\r\n                                        <div class=\"form-group\">\r\n                                            <label for=\"email\">{{'clients.create.fields.email' | translate}}&nbsp;<span class=\"text-danger\">*</span></label>\r\n                                            <input [ngClass]=\"{ 'is-invalid': isFormSubmitted && clientControl.email.errors }\" class=\"form-control\" formControlName=\"email\" id=\"email\" placeholder=\"{{'clients.create.placeholders.placeholder3' | translate}}\" type=\"email\"/>\r\n                                            <div *ngIf=\"isFormSubmitted && clientControl.email.errors\" class=\"invalid-feedback\">\r\n                                                <div *ngIf=\"clientControl.email.errors.required\">{{'clients.create.error_messages.message5' | translate}}</div>\r\n                                                <div *ngIf=\"clientControl.email.errors.email\">{{'clients.create.error_messages.message6' | translate}}</div>\r\n                                            </div>\r\n                                        </div>\r\n                                    </div>\r\n                                    <div class=\"col-md-6\">\r\n                                        <div class=\"form-group\">\r\n                                            <label for=\"password\">{{'clients.create.fields.password' | translate}}&nbsp;<span class=\"text-danger\">*</span></label>\r\n                                            <input [ngClass]=\"{ 'is-invalid': isFormSubmitted && clientControl.password.errors }\" autocomplete=\"off\" class=\"form-control\" formControlName=\"password\" id=\"password\" placeholder=\"{{'clients.create.placeholders.placeholder4' | translate}}\" type=\"password\"/>\r\n                                            <div *ngIf=\"isFormSubmitted && clientControl.password.errors\" class=\"invalid-feedback\">\r\n                                                <div *ngIf=\"clientControl.password.errors.required\">{{'clients.create.error_messages.message7' | translate}}</div>\r\n                                                <div *ngIf=\"clientControl.password.errors.minlength || clientControl.password.errors.maxlength\">{{'clients.create.error_messages.message8' | translate}}</div>\r\n                                            </div>\r\n                                        </div>\r\n                                    </div>\r\n                                    <div class=\"col-md-6\">\r\n                                        <div class=\"form-group\">\r\n                                            <label for=\"password_confirmation\">{{'clients.create.fields.confirm_password' | translate}}&nbsp;<span class=\"text-danger\">*</span></label>\r\n                                            <input [ngClass]=\"{ 'is-invalid': isFormSubmitted && clientControl.password_confirmation.errors }\" autocomplete=\"off\" class=\"form-control\" formControlName=\"password_confirmation\" id=\"password_confirmation\" placeholder=\"{{'clients.create.placeholders.placeholder5' | translate}}\" type=\"password\"/>\r\n                                            <div *ngIf=\"isFormSubmitted && clientControl.password_confirmation.errors\" class=\"invalid-feedback\">\r\n                                                <div *ngIf=\"clientControl.password_confirmation.errors.required\">{{'clients.create.error_messages.message9' | translate}}</div>\r\n                                                <div *ngIf=\"clientControl.password_confirmation.errors.mustMatch\">{{'clients.create.error_messages.message10' | translate}}</div>\r\n                                            </div>\r\n                                        </div>\r\n                                    </div>\r\n                                </div>\r\n                                <h4 class=\"form-section\">\r\n                                    <i class=\"ft-user\"></i> {{'clients.headings.head2' | translate}}</h4>\r\n                                <div class=\"row\" formGroupName=\"clients\">\r\n                                    <div class=\"col-md-6\">\r\n                                        <div class=\"form-group\">\r\n                                            <label for=\"company_name\">{{'clients.create.fields.company_name' | translate}}</label>\r\n                                            <input class=\"form-control\" formControlName=\"company_name\" id=\"company_name\" placeholder=\"{{'clients.create.placeholders.placeholder6' | translate}}\" type=\"text\"/>\r\n                                        </div>\r\n                                    </div>\r\n                                    <div class=\"col-md-6\">\r\n                                        <div class=\"form-group\">\r\n                                            <label for=\"company_email\">{{'clients.create.fields.company_email' | translate}}</label>\r\n                                            <input [ngClass]=\"{ 'is-invalid': isFormSubmitted && clientControl.clients.controls.company_email.errors }\" class=\"form-control\" formControlName=\"company_email\" id=\"company_email\" placeholder=\"{{'clients.create.placeholders.placeholder7' | translate}}\" type=\"email\"/>\r\n                                            <div *ngIf=\"isFormSubmitted && clientControl.clients.controls.company_email.errors\" class=\"invalid-feedback\">\r\n                                                <div *ngIf=\"clientControl.clients.controls.company_email.errors.email\">{{'clients.create.error_messages.message6' | translate}}</div>\r\n                                            </div>\r\n                                        </div>\r\n                                    </div>\r\n                                    <div class=\"col-md-6\">\r\n                                        <div class=\"form-group\">\r\n                                            <label for=\"company_phone\">{{'clients.create.fields.company_phone' | translate}}</label>\r\n                                            <input [ngClass]=\"{ 'is-invalid': isFormSubmitted && clientControl.clients.controls.company_phone.errors }\" class=\"form-control\" formControlName=\"company_phone\" id=\"company_phone\" placeholder=\"xxxxxxxxxx\" type=\"text\"/>\r\n                                            <div *ngIf=\"isFormSubmitted && clientControl.clients.controls.company_phone.errors\" class=\"invalid-feedback\">\r\n                                                <div *ngIf=\"clientControl.clients.controls.company_phone.errors.pattern\">{{'clients.create.error_messages.message12' | translate}}</div>\r\n                                            </div>\r\n                                        </div>\r\n                                    </div>\r\n                                    <div class=\"col-md-6\">\r\n                                        <div class=\"form-group\">\r\n                                            <label for=\"company_mobile\">{{'clients.create.fields.company_mobile' | translate}}</label>\r\n                                            <input [ngClass]=\"{ 'is-invalid': isFormSubmitted && clientControl.clients.controls.company_mobile.errors }\" class=\"form-control\" formControlName=\"company_mobile\" id=\"company_mobile\" placeholder=\"xxxxxxxxxx\" type=\"text\"/>\r\n                                            <div *ngIf=\"isFormSubmitted && clientControl.clients.controls.company_mobile.errors\" class=\"invalid-feedback\">\r\n                                                <div *ngIf=\"clientControl.clients.controls.company_mobile.errors.pattern\">{{'clients.create.error_messages.message14' | translate}}</div>\r\n                                            </div>\r\n                                        </div>\r\n                                    </div>\r\n                                    <div class=\"col-md-6\">\r\n                                        <div class=\"form-group\">\r\n                                            <label for=\"company_country\">{{'clients.create.fields.company_country' | translate}}</label>\r\n                                            <ng-select [items]=\"countries\" [searchable]=\"true\" [selectOnTab]=\"true\" bindLabel=\"name\" bindValue=\"code\" formControlName=\"company_country\" labelForId=\"company_country\" placeholder=\"{{'clients.create.placeholders.placeholder8' | translate}}\"></ng-select>\r\n                                        </div>\r\n                                    </div>\r\n                                    <div class=\"col-md-6\">\r\n                                        <div class=\"form-group\">\r\n                                            <label for=\"company_city\">{{'clients.create.fields.company_city' | translate}}</label>\r\n                                            <input class=\"form-control\" formControlName=\"company_city\" id=\"company_city\" placeholder=\"{{'clients.create.placeholders.placeholder9' | translate}}\" type=\"text\"/>\r\n                                        </div>\r\n                                    </div>\r\n                                    <div class=\"col-md-6\">\r\n                                        <div class=\"form-group\">\r\n                                            <label for=\"company_zipcode\">{{'clients.create.fields.zip_code' | translate}}</label>\r\n                                            <input class=\"form-control\" formControlName=\"company_zipcode\" id=\"company_zipcode\" placeholder=\"{{'clients.create.placeholders.placeholder10' | translate}}\" type=\"text\"/>\r\n                                        </div>\r\n                                    </div>\r\n                                    <div class=\"col-md-6\">\r\n                                        <div class=\"form-group\">\r\n                                            <label for=\"company_fax\">{{'clients.create.fields.company_fax' | translate}}</label>\r\n                                            <input class=\"form-control\" formControlName=\"company_fax\" id=\"company_fax\" placeholder=\"{{'clients.create.placeholders.placeholder11' | translate}}\" type=\"text\"/>\r\n                                        </div>\r\n                                    </div>\r\n                                    <div class=\"col-md-6\">\r\n                                        <div class=\"form-group\">\r\n                                            <label for=\"website\">{{'clients.create.fields.company_website' | translate}}</label>\r\n                                            <input [ngClass]=\"{ 'is-invalid': isFormSubmitted && clientControl.clients.controls.website.errors }\" class=\"form-control\" formControlName=\"website\" placeholder=\"{{'clients.create.placeholders.placeholder12' | translate}}\" type=\"text\"/>\r\n                                            <div *ngIf=\"isFormSubmitted && clientControl.clients.controls.website.errors\" class=\"invalid-feedback\">\r\n                                                <div *ngIf=\"clientControl.clients.controls.website.errors.pattern\">{{'clients.create.error_messages.message15' | translate}}</div>\r\n                                            </div>\r\n                                        </div>\r\n                                    </div>\r\n                                    <div class=\"col-md-6\">\r\n                                        <div class=\"form-group\">\r\n                                            <label for=\"skype_id\">{{'clients.create.fields.skype' | translate}}</label>\r\n                                            <input class=\"form-control\" formControlName=\"skype_id\" placeholder=\"{{'clients.create.placeholders.placeholder13' | translate}}\" type=\"text\"/>\r\n                                        </div>\r\n                                    </div>\r\n                                    <div class=\"col-md-12\">\r\n                                        <div class=\"form-group\">\r\n                                            <label for=\"company_address\">{{'clients.create.fields.company_address' | translate}}</label>\r\n                                            <textarea class=\"form-control\" formControlName=\"company_address\" id=\"company_address\" placeholder=\"{{'clients.create.placeholders.placeholder14' | translate}}\"></textarea>\r\n                                        </div>\r\n                                    </div>\r\n                                </div>\r\n                                <h4 class=\"form-section\">\r\n                                    <i class=\"ft-server\"></i> {{'clients.headings.head3' | translate}}</h4>\r\n                                <div class=\"row\" formGroupName=\"clients\">\r\n                                    <div class=\"col-md-6\">\r\n                                        <div class=\"form-group\">\r\n                                            <label for=\"hosting_company\">{{'clients.create.fields.hosting_company' | translate}}</label>\r\n                                            <input class=\"form-control\" formControlName=\"hosting_company\" id=\"hosting_company\" placeholder=\"{{'clients.create.placeholders.placeholder15' | translate}}\" type=\"text\"/>\r\n                                        </div>\r\n                                    </div>\r\n                                    <div class=\"col-md-6\">\r\n                                        <div class=\"form-group\">\r\n                                            <label for=\"host_username\">{{'clients.create.fields.username' | translate}}</label>\r\n                                            <input class=\"form-control\" formControlName=\"host_username\" id=\"host_username\" placeholder=\"{{'clients.create.placeholders.placeholder16' | translate}}\" type=\"text\"/>\r\n                                        </div>\r\n                                    </div>\r\n                                    <div class=\"col-md-6\">\r\n                                        <div class=\"form-group\">\r\n                                            <label for=\"host_password\">{{'clients.create.fields.password' | translate}}</label>\r\n                                            <input class=\"form-control\" formControlName=\"host_password\" id=\"host_password\" placeholder=\"{{'clients.create.placeholders.placeholder17' | translate}}\" type=\"password\"/>\r\n                                        </div>\r\n                                    </div>\r\n                                    <div class=\"col-md-6\">\r\n                                        <div class=\"form-group\">\r\n                                            <label for=\"host_port\">{{'clients.create.fields.port' | translate}}</label>\r\n                                            <input class=\"form-control\" formControlName=\"host_port\" id=\"host_port\" placeholder=\"{{'clients.create.placeholders.placeholder18' | translate}}\" type=\"text\"/>\r\n                                        </div>\r\n                                    </div>\r\n                                </div>\r\n                            </div>\r\n                        </div>\r\n                    </div>\r\n                </div>\r\n            </div>\r\n            <div class=\"col-md-6\">\r\n                <div class=\"card\">\r\n                    <div class=\"card-header\">&nbsp;</div>\r\n                    <div class=\"card-body\">\r\n                        <div class=\"px-3\">\r\n                            <div class=\"form-body\">\r\n                                <h4 class=\"form-section\">\r\n                                    <i class=\"ft-user\"></i> {{'clients.headings.head4' | translate}}</h4>\r\n                                <div class=\"row\">\r\n                                    <div class=\"col-md-6\">\r\n                                        <div class=\"form-group\">\r\n                                            <label for=\"user_generated_id\">{{'clients.create.fields.client_ID' | translate}}&nbsp;<span class=\"text-danger\">*</span></label>\r\n                                            <input [ngClass]=\"{ 'is-invalid': isFormSubmitted && clientControl.user_generated_id.errors }\" class=\"form-control\" formControlName=\"user_generated_id\" id=\"user_generated_id\" placeholder=\"USR000\" readonly type=\"text\"/>\r\n                                            <div *ngIf=\"isFormSubmitted && clientControl.user_generated_id.errors\" class=\"invalid-feedback\">\r\n                                                <div *ngIf=\"clientControl.user_generated_id.errors.required\">{{'clients.create.error_messages.message17' | translate}}</div>\r\n                                            </div>\r\n                                        </div>\r\n                                    </div>\r\n                                    <div class=\"col-md-6\">\r\n                                        <div class=\"form-group\">\r\n                                            <label for=\"username\">{{'clients.create.fields.username' | translate}}&nbsp;<span class=\"text-danger\">*</span></label>\r\n                                            <div class=\"input-group\">\r\n                                                <div class=\"input-group-prepend no-borders no-paddings\">\r\n                                                    <span class=\"input-group-text font-12\" id=\"usernamePrepend\">@</span>\r\n                                                </div>\r\n                                                <input [ngClass]=\"{ 'is-invalid': isFormSubmitted && clientControl.username.errors }\" aria-describedby=\"usernamePrepend\" class=\"form-control\" formControlName=\"username\" id=\"username\" placeholder=\"{{'clients.create.placeholders.placeholder19' | translate}}\" type=\"text\"/>\r\n                                                <div *ngIf=\"isFormSubmitted && clientControl.username.errors\" class=\"invalid-feedback\">\r\n                                                    <div *ngIf=\"clientControl.username.errors.required\">{{'clients.create.error_messages.message19' | translate}}</div>\r\n                                                    <div *ngIf=\"clientControl.username.errors.minlength || clientControl.username.errors.maxlength || clientControl.username.errors.pattern\">{{'clients.create.error_messages.message20' | translate}}</div>\r\n                                                </div>\r\n                                            </div>\r\n                                        </div>\r\n                                    </div>\r\n                                    <div class=\"col-md-6\">\r\n                                        <div class=\"form-group\">\r\n                                            <label for=\"language\">{{'clients.create.fields.language' | translate}}</label>\r\n                                            <ng-select [items]=\"languages\" [searchable]=\"true\" [selectOnTab]=\"true\" bindLabel=\"name\" bindValue=\"language\" formControlName=\"language\" labelForId=\"language\" placeholder=\"{{'clients.create.placeholders.placeholder22' | translate}}\"></ng-select>\r\n                                        </div>\r\n                                    </div>\r\n                                </div>\r\n                                <h4 class=\"form-section\">\r\n                                    <i class=\"ft-mail\"></i> {{'clients.headings.head5' | translate}}</h4>\r\n                                <div class=\"row\">\r\n                                    <div class=\"col-md-6\">\r\n                                        <div class=\"form-group\">\r\n                                            <label for=\"mobile\">{{'clients.create.fields.mobile' | translate}}</label>\r\n                                            <input [ngClass]=\"{ 'is-invalid': isFormSubmitted && clientControl.mobile.errors }\" class=\"form-control\" formControlName=\"mobile\" id=\"mobile\" placeholder=\"xxxxxxxxxx\" type=\"text\"/>\r\n                                            <div *ngIf=\"isFormSubmitted && clientControl.mobile.errors\" class=\"invalid-feedback\">\r\n                                                <div *ngIf=\"clientControl.mobile.errors.pattern\">{{'clients.create.error_messages.message21' | translate}}</div>\r\n                                            </div>\r\n                                        </div>\r\n                                    </div>\r\n                                    <div class=\"col-md-6\">\r\n                                        <div class=\"form-group\">\r\n                                            <label for=\"phone\">{{'clients.create.fields.phone' | translate}}</label>\r\n                                            <input [ngClass]=\"{ 'is-invalid': isFormSubmitted && clientControl.phone.errors }\" class=\"form-control\" formControlName=\"phone\" id=\"phone\" placeholder=\"xxxxxxxxxx\" type=\"text\"/>\r\n                                            <div *ngIf=\"isFormSubmitted && clientControl.phone.errors\" class=\"invalid-feedback\">\r\n                                                <div *ngIf=\"clientControl.phone.errors.pattern\">{{'clients.create.error_messages.message22' | translate}}</div>\r\n                                            </div>\r\n                                        </div>\r\n                                    </div>\r\n                                    <div class=\"col-md-6\">\r\n                                        <div class=\"form-group\">\r\n                                            <label for=\"skype\">{{'clients.create.fields.skype' | translate}}</label>\r\n                                            <input class=\"form-control\" formControlName=\"skype\" id=\"skype\" placeholder=\"{{'clients.create.placeholders.placeholder20' | translate}}\" type=\"text\"/>\r\n                                        </div>\r\n                                    </div>\r\n                                    <div class=\"col-md-6\">\r\n                                        <div class=\"form-group\">\r\n                                            <label for=\"country\">{{'clients.create.fields.country' | translate}}</label>\r\n                                            <ng-select [items]=\"countries\" [searchable]=\"true\" [selectOnTab]=\"true\" bindLabel=\"name\" bindValue=\"id\" formControlName=\"country\" labelForId=\"country\" placeholder=\"{{'clients.create.placeholders.placeholder21' | translate}}\"></ng-select>\r\n                                        </div>\r\n                                    </div>\r\n                                    <div class=\"col-md-12\">\r\n                                        <div class=\"form-group\">\r\n                                            <label for=\"address\">{{'clients.create.fields.address' | translate}}</label>\r\n                                            <textarea class=\"form-control\" formControlName=\"address\" id=\"address\" placeholder=\"{{'clients.create.placeholders.placeholder27' | translate}}\"></textarea>\r\n                                        </div>\r\n                                    </div>\r\n                                </div>\r\n                                <h4 class=\"form-section\">\r\n                                    <i class=\"ft-file-text\"></i> {{'clients.headings.head6' | translate}}</h4>\r\n                                <div class=\"row\">\r\n                                    <div class=\"col-md-12\">\r\n                                        <div class=\"form-group\">\r\n                                            <label>{{'clients.create.fields.profile_photo' | translate}}</label>\r\n                                            <input formControlName=\"avatar\" type=\"hidden\">\r\n                                            <div #profiledropzone class=\"dropzone dz-clickable\">\r\n                                                <div class=\"dz-default dz-message\">\r\n                                                    <span><strong>{{'clients.create.error_messages.message23' | translate}}</strong></span>\r\n                                                </div>\r\n                                            </div>\r\n                                            <div class=\"people-lists text-center\">\r\n                                                <a (click)=\"setAvatar(avatar)\" *ngFor=\"let avatar of avatars;\" [ngClass]=\"{active: isActive(avatar)}\" class=\"btn btn-profile-danger rounded-circle text-dark\">\r\n                                                    <img alt=\"Profile\" class=\"img-sm rounded-circle\" src=\"{{apiUrl}}/uploads/profile/{{avatar}}\"/>\r\n                                                </a>\r\n                                            </div>\r\n                                        </div>\r\n                                    </div>\r\n                                    <div class=\"col-md-12\">\r\n                                        <div [ngClass]=\"{ 'is-invalid': isFormSubmitted && clientControl.department_roles.errors }\" class=\"form-group\">\r\n                                            <label>{{'clients.create.fields.departments_roles' | translate}}&nbsp;<span class=\"text-danger\">*</span></label>\r\n                                            <ng-select (change)=\"departmentRolesChange($event)\" [items]=\"departmentsRoles\" [multiple]=\"true\" [selectableGroup]=\"false\" bindLabel=\"name\" bindValue=\"id\" formControlName=\"department_roles\" groupBy=\"roles\" placeholder=\"{{'clients.create.placeholders.placeholder23' | translate}}\">\r\n                                                <ng-template let-item=\"item\" ng-optgroup-tmp>{{item.name}}</ng-template>\r\n                                                <ng-template let-item=\"item\" ng-option-tmp>{{item.name}}</ng-template>\r\n                                            </ng-select>\r\n                                            <div *ngIf=\"isFormSubmitted && clientControl.department_roles.errors\" class=\"invalid-feedback\">\r\n                                                <div *ngIf=\"clientControl.department_roles.errors.required\">{{'clients.create.error_messages.message24' | translate}}</div>\r\n                                            </div>\r\n                                        </div>\r\n                                    </div>\r\n                                </div>\r\n                                <h4 class=\"form-section\">\r\n                                    <i class=\"ft-file-text\"></i> {{'clients.headings.head7' | translate}}</h4>\r\n                                <div class=\"row\" formGroupName=\"clients\">\r\n                                    <div class=\"col-md-6\">\r\n                                        <div class=\"form-group\">\r\n                                            <label for=\"facebook\">{{'clients.create.fields.facebook_URL' | translate}}</label>\r\n                                            <input class=\"form-control\" formControlName=\"facebook\" id=\"facebook\" placeholder=\"{{'clients.create.placeholders.placeholder24' | translate}}\" type=\"text\"/>\r\n                                        </div>\r\n                                    </div>\r\n                                    <div class=\"col-md-6\">\r\n                                        <div class=\"form-group\">\r\n                                            <label for=\"twitter\">{{'clients.create.fields.twitter_URL' | translate}}</label>\r\n                                            <input class=\"form-control\" formControlName=\"twitter\" id=\"twitter\" placeholder=\"{{'clients.create.placeholders.placeholder25' | translate}}\" type=\"text\"/>\r\n                                        </div>\r\n                                    </div>\r\n                                    <div class=\"col-md-6\">\r\n                                        <div class=\"form-group\">\r\n                                            <label for=\"linkedin\">{{'clients.create.fields.linkedIn_URL' | translate}}</label>\r\n                                            <input class=\"form-control\" formControlName=\"linkedin\" id=\"linkedin\" placeholder=\"{{'clients.create.placeholders.placeholder26' | translate}}\" type=\"text\"/>\r\n                                        </div>\r\n                                    </div>\r\n                                </div>\r\n                            </div>\r\n                        </div>\r\n                    </div>\r\n                </div>\r\n            </div>\r\n            <div class=\"col-md-12 text-right\">\r\n                <a [routerLink]=\"['/clients']\" class=\"btn btn-cancel\">{{'common.cancel' | translate}}</a>\r\n                <button class=\"btn btn-submit\" type=\"submit\">{{'common.create' | translate}}</button>\r\n            </div>\r\n        </div>\r\n    </form>\r\n</section>\r\n");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/modules/admin/client/pages/client-detail/client-detail.component.html":
/*!*****************************************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/modules/admin/client/pages/client-detail/client-detail.component.html ***!
  \*****************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<section *ngIf=\"isPageLoaded\" class=\"detail-page\">\r\n    <div class=\"card\">\r\n        <div class=\"card-header border-bottom\">\r\n            <h4 class=\"main-title\"><span>{{client.firstname}} {{client.lastname}}</span></h4>\r\n            <button [routerLink]=\"['/users/profile', client.id]\" class=\"btn btn-create mb-0 \" tooltip=\"{{'common.profile' | translate}}\">\r\n                <i class=\"fa fa-eye\"></i></button>\r\n        </div>\r\n        <div class=\"card-body p-2\">\r\n            <div class=\"row\">\r\n                <form class=\"form-body\">\r\n                    <div class=\"col-md-12\">\r\n                        <div class=\"row\">\r\n                            <div class=\"col-lg-4 col-md-6 mb-3\">\r\n                                <label>{{'clients.create.fields.company_name' | translate}}</label>\r\n                                <div class=\"detail-inline\">{{client.clients.company_name}}</div>\r\n                            </div>\r\n                            <div class=\"col-lg-4 col-md-6 mb-3\">\r\n                                <label>{{'clients.create.fields.company_email' | translate}}</label>\r\n                                <div class=\"detail-inline\">{{client.clients.company_email}}</div>\r\n                            </div>\r\n                            <div class=\"col-lg-4 col-md-6 mb-3\">\r\n                                <label>{{'clients.create.fields.company_phone' | translate}}</label>\r\n                                <div class=\"detail-inline\">{{client.clients.company_phone}}</div>\r\n                            </div>\r\n                            <div class=\"col-lg-4 col-md-6 mb-3\">\r\n                                <label>{{'clients.create.fields.company_address' | translate}}</label>\r\n                                <div class=\"detail-inline\">{{client.clients.company_address}}</div>\r\n                            </div>\r\n                        </div>\r\n                    </div>\r\n                    <div class=\"col-md-12\">\r\n                        <h4 class=\"detail-page-title\"><span>{{'clients.headings.head3' | translate}}</span></h4>\r\n                        <div class=\"row\">\r\n                            <div class=\"col-lg-4 col-md-6 mb-3\">\r\n                                <label>{{'clients.create.fields.hosting_company' | translate}}</label>\r\n                                <div class=\"detail-inline\">{{client.clients.hosting_company}}</div>\r\n                            </div>\r\n                            <div class=\"col-lg-4 col-md-6 mb-3\">\r\n                                <label>{{'clients.create.fields.username' | translate}}</label>\r\n                                <div class=\"detail-inline\">{{client.clients.host_username}}</div>\r\n                            </div>\r\n                            <div class=\"col-lg-4 col-md-6 mb-3\">\r\n                                <label>{{'clients.create.fields.port' | translate}}</label>\r\n                                <div class=\"detail-inline\">{{client.clients.host_port}}</div>\r\n                            </div>\r\n                        </div>\r\n                    </div>\r\n                </form>\r\n            </div>\r\n        </div>\r\n        <!-- \t<tabset class=\"nav nav-tabs d-flex justify-content-center\">\r\n\t\t\t<tab customClass=\"text-left\">\r\n\t\t\t\t<ng-template tabHeading><i class=\"fa fa-suitcase\"></i>{{'clients.headings.head2' | translate}}</ng-template>\r\n\t\t\t\t\r\n\t\t\t</tab>\r\n\t\t</tabset> -->\r\n    </div>\r\n</section>\r\n");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/modules/admin/client/pages/client-edit/client-edit.component.html":
/*!*************************************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/modules/admin/client/pages/client-edit/client-edit.component.html ***!
  \*************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<section *ngIf=\"isPageLoaded\" id=\"basic-form-layouts\">\r\n    <form (ngSubmit)=\"onSubmit()\" [formGroup]=\"editClientForm\">\r\n        <div class=\"row\">\r\n            <div class=\"col-md-6\">\r\n                <div class=\"card\">\r\n                    <div class=\"card-header\">\r\n                        <h4 class=\"card-title\" id=\"basic-layout-form\">{{'clients.title2' | translate}}</h4>\r\n                    </div>\r\n                    <div class=\"card-body\">\r\n                        <div class=\"px-3\">\r\n                            <div class=\"form-body\">\r\n                                <h4 class=\"form-section\">\r\n                                    <i class=\"ft-user\"></i> {{'clients.headings.head1' | translate}}</h4>\r\n                                <div class=\"row\">\r\n                                    <div class=\"col-md-6\">\r\n                                        <div class=\"form-group\">\r\n                                            <label for=\"firstname\">{{'clients.create.fields.first_name' | translate}}&nbsp;<span class=\"text-danger\">*</span></label>\r\n                                            <input [ngClass]=\"{ 'is-invalid': isFormSubmitted && clientControl.firstname.errors }\" class=\"form-control\" formControlName=\"firstname\" id=\"firstname\" placeholder=\"{{'clients.create.placeholders.placeholder1' | translate}}\" type=\"text\"/>\r\n                                            <div *ngIf=\"isFormSubmitted && clientControl.firstname.errors\" class=\"invalid-feedback\">\r\n                                                <div *ngIf=\"clientControl.firstname.errors.required\">{{'clients.create.error_messages.message1' | translate}}</div>\r\n                                                <div *ngIf=\"clientControl.firstname.errors.maxlength\">{{'clients.create.error_messages.message2' | translate}}</div>\r\n                                            </div>\r\n                                        </div>\r\n                                    </div>\r\n                                    <div class=\"col-md-6\">\r\n                                        <div class=\"form-group\">\r\n                                            <label for=\"lastname\">{{'clients.create.fields.last_name' | translate}}&nbsp;<span class=\"text-danger\">*</span></label>\r\n                                            <input [ngClass]=\"{ 'is-invalid': isFormSubmitted && clientControl.lastname.errors }\" class=\"form-control\" formControlName=\"lastname\" id=\"lastname\" placeholder=\"{{'clients.create.placeholders.placeholder2' | translate}}\" type=\"text\"/>\r\n                                            <div *ngIf=\"isFormSubmitted && clientControl.lastname.errors\" class=\"invalid-feedback\">\r\n                                                <div *ngIf=\"clientControl.lastname.errors.required\">{{'clients.create.error_messages.message3' | translate}}</div>\r\n                                                <div *ngIf=\"clientControl.lastname.errors.maxlength\">{{'clients.create.error_messages.message4' | translate}}</div>\r\n                                            </div>\r\n                                        </div>\r\n                                    </div>\r\n                                    <div class=\"col-md-12\">\r\n                                        <div class=\"form-group\">\r\n                                            <label for=\"email\">{{'clients.create.fields.email' | translate}}&nbsp;<span class=\"text-danger\">*</span></label>\r\n                                            <input [ngClass]=\"{ 'is-invalid': isFormSubmitted && clientControl.email.errors }\" class=\"form-control\" formControlName=\"email\" id=\"email\" placeholder=\"{{'clients.create.placeholders.placeholder3' | translate}}\" type=\"email\"/>\r\n                                            <div *ngIf=\"isFormSubmitted && clientControl.email.errors\" class=\"invalid-feedback\">\r\n                                                <div *ngIf=\"clientControl.email.errors.required\">{{'clients.create.error_messages.message5' | translate}}</div>\r\n                                                <div *ngIf=\"clientControl.email.errors.email\">{{'clients.create.error_messages.message6' | translate}}</div>\r\n                                            </div>\r\n                                        </div>\r\n                                    </div>\r\n                                </div>\r\n                                <h4 class=\"form-section\">\r\n                                    <i class=\"ft-user\"></i> {{'clients.headings.head2' | translate}}</h4>\r\n                                <div class=\"row\" formGroupName=\"clients\">\r\n                                    <div class=\"col-md-6\">\r\n                                        <div class=\"form-group\">\r\n                                            <label for=\"company_name\">{{'clients.create.fields.company_name' | translate}}</label>\r\n                                            <input class=\"form-control\" formControlName=\"company_name\" id=\"company_name\" placeholder=\"{{'clients.create.placeholders.placeholder6' | translate}}\" type=\"text\"/>\r\n                                        </div>\r\n                                    </div>\r\n                                    <div class=\"col-md-6\">\r\n                                        <div class=\"form-group\">\r\n                                            <label for=\"company_email\">{{'clients.create.fields.company_email' | translate}}</label>\r\n                                            <input [ngClass]=\"{ 'is-invalid': isFormSubmitted && clientControl.clients.controls.company_email.errors }\" class=\"form-control\" formControlName=\"company_email\" id=\"company_email\" placeholder=\"{{'clients.create.placeholders.placeholder7' | translate}}\" type=\"email\"/>\r\n                                            <div *ngIf=\"isFormSubmitted && clientControl.clients.controls.company_email.errors\" class=\"invalid-feedback\">\r\n                                                <div *ngIf=\"clientControl.clients.controls.company_email.errors.email\">{{'clients.create.error_messages.message6' | translate}}</div>\r\n                                            </div>\r\n                                        </div>\r\n                                    </div>\r\n                                    <div class=\"col-md-6\">\r\n                                        <div class=\"form-group\">\r\n                                            <label for=\"company_phone\">{{'clients.create.fields.company_phone' | translate}}</label>\r\n                                            <input [ngClass]=\"{ 'is-invalid': isFormSubmitted && clientControl.clients.controls.company_phone.errors }\" class=\"form-control\" formControlName=\"company_phone\" id=\"company_phone\" placeholder=\"xxxxxxxxxx\" type=\"text\"/>\r\n                                            <div *ngIf=\"isFormSubmitted && clientControl.clients.controls.company_phone.errors\" class=\"invalid-feedback\">\r\n                                                <div *ngIf=\"clientControl.clients.controls.company_phone.errors.pattern\">{{'clients.create.error_messages.message12' | translate}}</div>\r\n                                            </div>\r\n                                        </div>\r\n                                    </div>\r\n                                    <div class=\"col-md-6\">\r\n                                        <div class=\"form-group\">\r\n                                            <label for=\"company_mobile\">{{'clients.create.fields.company_mobile' | translate}}</label>\r\n                                            <input [ngClass]=\"{ 'is-invalid': isFormSubmitted && clientControl.clients.controls.company_mobile.errors }\" class=\"form-control\" formControlName=\"company_mobile\" id=\"company_mobile\" placeholder=\"xxxxxxxxxx\" type=\"text\"/>\r\n                                            <div *ngIf=\"isFormSubmitted && clientControl.clients.controls.company_mobile.errors\" class=\"invalid-feedback\">\r\n                                                <div *ngIf=\"clientControl.clients.controls.company_mobile.errors.pattern\">{{'clients.create.error_messages.message14' | translate}}</div>\r\n                                            </div>\r\n                                        </div>\r\n                                    </div>\r\n                                    <div class=\"col-md-6\">\r\n                                        <div class=\"form-group\">\r\n                                            <label for=\"company_country\">{{'clients.create.fields.company_country' | translate}}</label>\r\n                                            <ng-select [items]=\"countries\" [searchable]=\"true\" [selectOnTab]=\"true\" bindLabel=\"name\" bindValue=\"code\" formControlName=\"company_country\" labelForId=\"company_country\" placeholder=\"{{'clients.create.placeholders.placeholder8' | translate}}\"></ng-select>\r\n                                        </div>\r\n                                    </div>\r\n                                    <div class=\"col-md-6\">\r\n                                        <div class=\"form-group\">\r\n                                            <label for=\"company_city\">{{'clients.create.fields.company_city' | translate}}</label>\r\n                                            <input class=\"form-control\" formControlName=\"company_city\" id=\"company_city\" placeholder=\"{{'clients.create.placeholders.placeholder9' | translate}}\" type=\"text\"/>\r\n                                        </div>\r\n                                    </div>\r\n                                    <div class=\"col-md-6\">\r\n                                        <div class=\"form-group\">\r\n                                            <label for=\"company_zipcode\">{{'clients.create.fields.zip_code' | translate}}</label>\r\n                                            <input class=\"form-control\" formControlName=\"company_zipcode\" id=\"company_zipcode\" placeholder=\"{{'clients.create.placeholders.placeholder10' | translate}}\" type=\"text\"/>\r\n                                        </div>\r\n                                    </div>\r\n                                    <div class=\"col-md-6\">\r\n                                        <div class=\"form-group\">\r\n                                            <label for=\"company_fax\">{{'clients.create.fields.company_fax' | translate}}</label>\r\n                                            <input class=\"form-control\" formControlName=\"company_fax\" id=\"company_fax\" placeholder=\"{{'clients.create.placeholders.placeholder11' | translate}}\" type=\"text\"/>\r\n                                        </div>\r\n                                    </div>\r\n                                    <div class=\"col-md-6\">\r\n                                        <div class=\"form-group\">\r\n                                            <label for=\"website\">{{'clients.create.fields.company_website' | translate}}</label>\r\n                                            <input [ngClass]=\"{ 'is-invalid': isFormSubmitted && clientControl.clients.controls.website.errors }\" class=\"form-control\" formControlName=\"website\" placeholder=\"{{'clients.create.placeholders.placeholder12' | translate}}\" type=\"text\"/>\r\n                                            <div *ngIf=\"isFormSubmitted && clientControl.clients.controls.website.errors\" class=\"invalid-feedback\">\r\n                                                <div *ngIf=\"clientControl.clients.controls.website.errors.pattern\">{{'clients.create.error_messages.message15' | translate}}</div>\r\n                                            </div>\r\n                                        </div>\r\n                                    </div>\r\n                                    <div class=\"col-md-6\">\r\n                                        <div class=\"form-group\">\r\n                                            <label for=\"skype_id\">{{'clients.create.fields.skype' | translate}}</label>\r\n                                            <input class=\"form-control\" formControlName=\"skype_id\" placeholder=\"{{'clients.create.placeholders.placeholder13' | translate}}\" type=\"text\"/>\r\n                                        </div>\r\n                                    </div>\r\n                                    <div class=\"col-md-12\">\r\n                                        <div class=\"form-group\">\r\n                                            <label for=\"company_address\">{{'clients.create.fields.company_address' | translate}}</label>\r\n                                            <textarea class=\"form-control\" formControlName=\"company_address\" id=\"company_address\" placeholder=\"{{'clients.create.placeholders.placeholder14' | translate}}\"></textarea>\r\n                                        </div>\r\n                                    </div>\r\n                                </div>\r\n                                <h4 class=\"form-section\">\r\n                                    <i class=\"ft-server\"></i> {{'clients.headings.head3' | translate}}</h4>\r\n                                <div class=\"row\" formGroupName=\"clients\">\r\n                                    <div class=\"col-md-6\">\r\n                                        <div class=\"form-group\">\r\n                                            <label for=\"hosting_company\">{{'clients.create.fields.hosting_company' | translate}}</label>\r\n                                            <input class=\"form-control\" formControlName=\"hosting_company\" id=\"hosting_company\" placeholder=\"{{'clients.create.placeholders.placeholder15' | translate}}\" type=\"text\"/>\r\n                                        </div>\r\n                                    </div>\r\n                                    <div class=\"col-md-6\">\r\n                                        <div class=\"form-group\">\r\n                                            <label for=\"host_username\">{{'clients.create.fields.username' | translate}}</label>\r\n                                            <input class=\"form-control\" formControlName=\"host_username\" id=\"host_username\" placeholder=\"{{'clients.create.placeholders.placeholder16' | translate}}\" type=\"text\"/>\r\n                                        </div>\r\n                                    </div>\r\n                                    <div class=\"col-md-6\">\r\n                                        <div class=\"form-group\">\r\n                                            <label for=\"host_password\">{{'clients.create.fields.password' | translate}}</label>\r\n                                            <input class=\"form-control\" formControlName=\"host_password\" id=\"host_password\" placeholder=\"{{'clients.create.placeholders.placeholder17' | translate}}\" type=\"password\"/>\r\n                                        </div>\r\n                                    </div>\r\n                                    <div class=\"col-md-6\">\r\n                                        <div class=\"form-group\">\r\n                                            <label for=\"host_port\">{{'clients.create.fields.port' | translate}}</label>\r\n                                            <input class=\"form-control\" formControlName=\"host_port\" id=\"host_port\" placeholder=\"{{'clients.create.placeholders.placeholder18' | translate}}\" type=\"text\"/>\r\n                                        </div>\r\n                                    </div>\r\n                                </div>\r\n                            </div>\r\n                        </div>\r\n                    </div>\r\n                </div>\r\n            </div>\r\n            <div class=\"col-md-6\">\r\n                <div class=\"card\">\r\n                    <div class=\"card-header\">&nbsp;</div>\r\n                    <div class=\"card-body\">\r\n                        <div class=\"px-3\">\r\n                            <div class=\"form-body\">\r\n                                <h4 class=\"form-section\">\r\n                                    <i class=\"ft-user\"></i> {{'clients.headings.head4' | translate}}</h4>\r\n                                <div class=\"row\">\r\n                                    <div class=\"col-md-6\">\r\n                                        <div class=\"form-group\">\r\n                                            <label for=\"user_generated_id\">{{'clients.create.fields.client_ID' | translate}}&nbsp;<span class=\"text-danger\">*</span></label>\r\n                                            <input [ngClass]=\"{ 'is-invalid': isFormSubmitted && clientControl.user_generated_id.errors }\" class=\"form-control\" formControlName=\"user_generated_id\" id=\"user_generated_id\" placeholder=\"USR000\" readonly type=\"text\"/>\r\n                                            <div *ngIf=\"isFormSubmitted && clientControl.user_generated_id.errors\" class=\"invalid-feedback\">\r\n                                                <div *ngIf=\"clientControl.user_generated_id.errors.required\">{{'clients.create.error_messages.message17' | translate}}</div>\r\n                                            </div>\r\n                                        </div>\r\n                                    </div>\r\n                                    <div class=\"col-md-6\">\r\n                                        <div class=\"form-group\">\r\n                                            <label for=\"username\">{{'clients.create.fields.username' | translate}}&nbsp;<span class=\"text-danger\">*</span></label>\r\n                                            <div class=\"input-group\">\r\n                                                <div class=\"input-group-prepend no-borders no-paddings\">\r\n                                                    <span class=\"input-group-text font-12\" id=\"usernamePrepend\">@</span>\r\n                                                </div>\r\n                                                <input [ngClass]=\"{ 'is-invalid': isFormSubmitted && clientControl.username.errors }\" aria-describedby=\"usernamePrepend\" class=\"form-control\" formControlName=\"username\" id=\"username\" placeholder=\"Enter Username\" type=\"text\"/>\r\n                                                <div *ngIf=\"isFormSubmitted && clientControl.username.errors\" class=\"invalid-feedback\">\r\n                                                    <div *ngIf=\"clientControl.username.errors.required\">{{'clients.create.error_messages.message19' | translate}}</div>\r\n                                                    <div *ngIf=\"clientControl.username.errors.minlength || clientControl.username.errors.maxlength || clientControl.username.errors.pattern\">{{'clients.create.error_messages.message20' | translate}}</div>\r\n                                                </div>\r\n                                            </div>\r\n                                        </div>\r\n                                    </div>\r\n                                    <div class=\"col-md-6\">\r\n                                        <div class=\"form-group\">\r\n                                            <label for=\"language\">{{'clients.create.fields.language' | translate}}</label>\r\n                                            <ng-select [items]=\"languages\" [searchable]=\"true\" [selectOnTab]=\"true\" bindLabel=\"name\" bindValue=\"language\" formControlName=\"language\" labelForId=\"language\" placeholder=\"{{'clients.create.placeholders.placeholder22' | translate}}\"></ng-select>\r\n                                        </div>\r\n                                    </div>\r\n                                </div>\r\n                                <h4 class=\"form-section\">\r\n                                    <i class=\"ft-mail\"></i> {{'clients.headings.head5' | translate}}</h4>\r\n                                <div class=\"row\">\r\n                                    <div class=\"col-md-6\">\r\n                                        <div class=\"form-group\">\r\n                                            <label for=\"mobile\">{{'clients.create.fields.mobile' | translate}}</label>\r\n                                            <input [ngClass]=\"{ 'is-invalid': isFormSubmitted && clientControl.mobile.errors }\" class=\"form-control\" formControlName=\"mobile\" id=\"mobile\" placeholder=\"xxxxxxxxxx\" type=\"text\"/>\r\n                                            <div *ngIf=\"isFormSubmitted && clientControl.mobile.errors\" class=\"invalid-feedback\">\r\n                                                <div *ngIf=\"clientControl.mobile.errors.pattern\">{{'clients.create.error_messages.message21' | translate}}</div>\r\n                                            </div>\r\n                                        </div>\r\n                                    </div>\r\n                                    <div class=\"col-md-6\">\r\n                                        <div class=\"form-group\">\r\n                                            <label for=\"phone\">{{'clients.create.fields.phone' | translate}}</label>\r\n                                            <input [ngClass]=\"{ 'is-invalid': isFormSubmitted && clientControl.phone.errors }\" class=\"form-control\" formControlName=\"phone\" id=\"phone\" placeholder=\"xxxxxxxxxx\" type=\"text\"/>\r\n                                            <div *ngIf=\"isFormSubmitted && clientControl.phone.errors\" class=\"invalid-feedback\">\r\n                                                <div *ngIf=\"clientControl.phone.errors.pattern\">{{'clients.create.error_messages.message22' | translate}}</div>\r\n                                            </div>\r\n                                        </div>\r\n                                    </div>\r\n                                    <div class=\"col-md-6\">\r\n                                        <div class=\"form-group\">\r\n                                            <label for=\"skype\">{{'clients.create.fields.skype' | translate}}</label>\r\n                                            <input class=\"form-control\" formControlName=\"skype\" id=\"skype\" placeholder=\"{{'clients.create.placeholders.placeholder20' | translate}}\" type=\"text\"/>\r\n                                        </div>\r\n                                    </div>\r\n                                    <div class=\"col-md-6\">\r\n                                        <div class=\"form-group\">\r\n                                            <label for=\"country\">{{'clients.create.fields.country' | translate}}</label>\r\n                                            <ng-select [items]=\"countries\" [searchable]=\"true\" [selectOnTab]=\"true\" bindLabel=\"name\" bindValue=\"code\" formControlName=\"country\" labelForId=\"country\" placeholder=\"{{'clients.create.placeholders.placeholder21' | translate}}\"></ng-select>\r\n                                        </div>\r\n                                    </div>\r\n                                    <div class=\"col-md-12\">\r\n                                        <div class=\"form-group\">\r\n                                            <label for=\"address\">{{'clients.create.fields.address' | translate}}</label>\r\n                                            <textarea class=\"form-control\" formControlName=\"address\" id=\"address\" placeholder=\"{{'clients.create.placeholders.placeholder27' | translate}}\"></textarea>\r\n                                        </div>\r\n                                    </div>\r\n                                </div>\r\n                                <h4 class=\"form-section\">\r\n                                    <i class=\"ft-file-text\"></i> {{'clients.headings.head6' | translate}}</h4>\r\n                                <div class=\"row\">\r\n                                    <div class=\"col-md-12\">\r\n                                        <div class=\"form-group\">\r\n                                            <label>{{'clients.create.fields.profile_photo' | translate}}</label>\r\n                                            <input formControlName=\"avatar\" type=\"hidden\">\r\n                                            <div #profiledropzone class=\"dropzone dz-clickable\">\r\n                                                <div *ngIf=\"isProfileLoaded && client.avatar\" class=\"dz-preview dz-image-preview\">\r\n                                                    <div class=\"dz-image\">\r\n                                                        <img src=\"{{apiUrl}}/uploads/profile/{{client.avatar}}\"/>\r\n                                                    </div>\r\n                                                    <a (click)=\"removeDropzoneImage()\" class=\"btn btn-default btn-sm btn-block\">{{'common.remove_file' | translate}}</a>\r\n                                                </div>\r\n                                                <div class=\"dz-default dz-message\">\r\n                                                    <span><strong>{{'clients.create.error_messages.message23' | translate}}</strong></span>\r\n                                                </div>\r\n                                            </div>\r\n                                            <div class=\"people-lists text-center\">\r\n                                                <a (click)=\"setAvatar(avatar)\" *ngFor=\"let avatar of avatars;\" [ngClass]=\"{active: isActive(avatar)}\" class=\"btn btn-profile-danger rounded-circle text-dark\">\r\n                                                    <img alt=\"Profile\" class=\"img-sm rounded-circle\" src=\"{{apiUrl}}/uploads/profile/{{avatar}}\"/>\r\n                                                </a>\r\n                                            </div>\r\n                                        </div>\r\n                                    </div>\r\n                                    <div class=\"col-md-12\">\r\n                                        <div [ngClass]=\"{ 'is-invalid': isFormSubmitted && clientControl.department_roles.errors }\" class=\"form-group\">\r\n                                            <label>{{'clients.create.fields.departments_roles' | translate}}&nbsp;<span class=\"text-danger\">*</span></label>\r\n                                            <ng-select (change)=\"departmentRolesChange($event)\" [items]=\"departmentsRoles\" [multiple]=\"true\" [selectableGroup]=\"false\" bindLabel=\"name\" bindValue=\"id\" formControlName=\"department_roles\" groupBy=\"department_name\" placeholder=\"{{'clients.create.placeholders.placeholder23' | translate}}\">\r\n                                                <ng-template let-item=\"item\" ng-optgroup-tmp>\r\n                                                    {{item.department_name || 'Unnamed group'}}\r\n                                                </ng-template>\r\n                                            </ng-select>\r\n                                            <div *ngIf=\"isFormSubmitted && clientControl.department_roles.errors\" class=\"invalid-feedback\">\r\n                                                <div *ngIf=\"clientControl.department_roles.errors.required\">{{'clients.create.error_messages.message24' | translate}}</div>\r\n                                            </div>\r\n                                        </div>\r\n                                    </div>\r\n                                </div>\r\n                                <h4 class=\"form-section\">\r\n                                    <i class=\"ft-file-text\"></i> {{'clients.headings.head7' | translate}}</h4>\r\n                                <div class=\"row\" formGroupName=\"clients\">\r\n                                    <div class=\"col-md-6\">\r\n                                        <div class=\"form-group\">\r\n                                            <label for=\"facebook\">{{'clients.create.fields.facebook_URL' | translate}}</label>\r\n                                            <input class=\"form-control\" formControlName=\"facebook\" id=\"facebook\" placeholder=\"{{'clients.create.placeholders.placeholder24' | translate}}\" type=\"text\"/>\r\n                                        </div>\r\n                                    </div>\r\n                                    <div class=\"col-md-6\">\r\n                                        <div class=\"form-group\">\r\n                                            <label for=\"twitter\">{{'clients.create.fields.twitter_URL' | translate}}</label>\r\n                                            <input class=\"form-control\" formControlName=\"twitter\" id=\"twitter\" placeholder=\"{{'clients.create.placeholders.placeholder25' | translate}}\" type=\"text\"/>\r\n                                        </div>\r\n                                    </div>\r\n                                    <div class=\"col-md-6\">\r\n                                        <div class=\"form-group\">\r\n                                            <label for=\"linkedin\">{{'clients.create.fields.linkedIn_URL' | translate}}</label>\r\n                                            <input class=\"form-control\" formControlName=\"linkedin\" id=\"linkedin\" placeholder=\"{{'clients.create.placeholders.placeholder26' | translate}}\" type=\"text\"/>\r\n                                        </div>\r\n                                    </div>\r\n                                </div>\r\n                            </div>\r\n                        </div>\r\n                    </div>\r\n                </div>\r\n            </div>\r\n            <div class=\"col-md-12 text-right\">\r\n                <a [routerLink]=\"['/clients']\" class=\"btn btn-cancel\">{{'common.cancel' | translate}}</a>\r\n                <button class=\"btn btn-submit\" type=\"submit\">{{'common.update' | translate}}</button>\r\n            </div>\r\n        </div>\r\n    </form>\r\n</section>\r\n");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/modules/admin/client/pages/client/client.component.html":
/*!***************************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/modules/admin/client/pages/client/client.component.html ***!
  \***************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<section class=\"hide_empty_message\">\r\n    <div class=\"row\">\r\n        <div class=\"col-sm-12\">\r\n            <div class=\"card pl-2 pr-2\">\r\n                <div class=\"card-header pl-0 pr-0 border-bottom\">\r\n                    <h4 class=\"main-title mt-2\"><span>{{'clients.title' | translate}}</span></h4>\r\n                    <a *ngxPermissionsOnly=\"['admin', 'super_admin', 'clients_create']\" [routerLink]=\"['/clients/create']\" class=\"btn btn-create mb-0\" tooltip=\"{{'common.create' | translate}}\"><i class=\"fa fa-plus\"></i></a>\r\n                </div>\r\n                <div class=\"card-content pt-3 pb-3\">\r\n                    <div class=\"card-body\">\r\n                        <div class=\" table-responsive-xs table-responsive-sm table-responsive-md table-responsive-lg table-responsive-xl overflow-x-auto\">\r\n                            <table [dtOptions]=\"dtOptions\" [dtTrigger]=\"dtTrigger\" class=\"table table-bordered table-hover b4-datatable\" datatable id=\"clients_table\" width=\"100%\">\r\n                                <thead>\r\n                                <tr>\r\n                                    <th>{{'clients.columns.photo' | translate}}</th>\r\n                                    <th>{{'clients.columns.first_name' | translate}}</th>\r\n                                    <th>{{'clients.columns.last_name' | translate}}</th>\r\n                                    <th>{{'clients.columns.username' | translate}}</th>\r\n                                    <th>{{'clients.columns.company_name' | translate}}</th>\r\n                                    <th>{{'clients.columns.company_email' | translate}}</th>\r\n                                    <th>{{'clients.columns.status' | translate}}</th>\r\n                                    <th>{{'clients.columns.departments_roles' | translate}}</th>\r\n                                    <th>{{'clients.columns.actions' | translate}}</th>\r\n                                </tr>\r\n                                </thead>\r\n                                <tbody *ngIf=\"clients?.length != 0\">\r\n                                <tr *ngFor=\"let client of clients; index as i\">\r\n                                    <td class=\"people-lists\">\r\n                                        <a [routerLink]=\"['/users/profile', client.id]\" class=\"btn btn-profile-info rounded-circle text-dark\" placement=\"top\" tooltip=\"{{client.firstname}} {{client.lastname}}\">\r\n                                            <img *ngIf=\"client.avatar\" alt=\"Profile\" class=\"img-sm rounded-circle\" src=\"{{apiUrl}}/uploads/profile/{{client.avatar}}\"/>\r\n                                            <img *ngIf=\"!client.avatar\" alt=\"Profile\" class=\"img-sm rounded-circle\" src=\"../assets/img/profile_small.jpg\"/>\r\n                                        </a>\r\n                                    </td>\r\n                                    <td>\r\n                                        <div *ngxPermissionsOnly=\"['admin', 'super_admin', 'clients_edit']; else elseBlock1; then thenBlock1\"></div>\r\n                                        <ng-template #elseBlock1>{{client.firstname}}</ng-template>\r\n                                        <ng-template #thenBlock1>\r\n                                            <inline-edit-input (updateValue)=\"saveClientDetail(i, 'firstname', $event);\" [elementFor]=\"'clients.inline_edit.first_name' | translate\" [fieldValue]=\"client.firstname\" [isRequired]=\"'true'\" [maxLength]=\"20\" [name]=\"'firstname'\" [type]=\"'text'\"></inline-edit-input>\r\n                                        </ng-template>\r\n                                    </td>\r\n                                    <td>\r\n                                        <div *ngxPermissionsOnly=\"['admin', 'super_admin', 'clients_edit']; else elseBlock2; then thenBlock2\"></div>\r\n                                        <ng-template #elseBlock2>{{client.lastname}}</ng-template>\r\n                                        <ng-template #thenBlock2>\r\n                                            <inline-edit-input (updateValue)=\"saveClientDetail(i, 'lastname', $event);\" [elementFor]=\"'clients.inline_edit.last_name' | translate\" [fieldValue]=\"client.lastname\" [isRequired]=\"'true'\" [maxLength]=\"20\" [name]=\"'lastname'\" [type]=\"'text'\"></inline-edit-input>\r\n                                        </ng-template>\r\n                                    </td>\r\n                                    <td>\r\n                                        <a [routerLink]=\"['profile', client.id]\" tooltip=\"{{'common.view' | translate}}\">{{client.username}}</a>\r\n                                    </td>\r\n                                    <td>{{client.clients.company_name}}</td>\r\n                                    <td>{{client.clients.company_email}}</td>\r\n                                    <td class=\"text-center\">\r\n                                        <div *ngxPermissionsOnly=\"['admin', 'super_admin', 'clients_edit']; else elseBlock; then thenBlock\"></div>\r\n                                        <ng-template #elseBlock>\r\n                                            <div class=\"budges-status\">\r\n                                                <span *ngIf=\"client.is_active == '1'\" class=\"completed\">{{'common.status.active' | translate}}</span>\r\n                                                <span *ngIf=\"client.is_active == '0'\" class=\"cancel\">{{'common.status.deactive' | translate}}</span>\r\n                                            </div>\r\n                                        </ng-template>\r\n                                        <ng-template #thenBlock>\r\n                                            <ui-switch (valueChange)=\"setActiveDeactiveUser($event, client)\" [checked]=\"client.is_active == '1' ? true : false\"></ui-switch>\r\n                                        </ng-template>\r\n                                    </td>\r\n                                    <td class=\"budges-status\">\r\n                                        <ng-template *ngIf=\"client.roles?.length == 0;else elseBlock4\">-</ng-template>\r\n                                        <ng-template #elseBlock4>\r\n                                            <span *ngFor=\"let role of departments[client.id]\" class=\"completed\">{{role.role_name}} ({{role.department_name}})</span>\r\n                                        </ng-template>\r\n                                    </td>\r\n                                    <td class=\"actions-dropdown\">\r\n                                        <div class=\"btn-group\" dropdown>\r\n                                            <button aria-controls=\"dropdown-basic-1\" class=\"dropdown-toggle btn-action\" dropdownToggle id=\"button-basic-1\" type=\"button\">\r\n                                                <i class=\"fa fa-ellipsis-v\"></i></button>\r\n                                            <ul *dropdownMenu aria-labelledby=\"button-basic-1\" class=\"dropdown-menu animated fadeIn\" id=\"dropdown-basic-1\" role=\"menu\">\r\n                                                <li *ngIf=\"client.email_verified == '0' || client.email_verified == 0\" role=\"menuitem\">\r\n                                                    <a (click)=\"sendInviteUserMail(client.id)\" *ngxPermissionsOnly=\"['admin', 'super_admin']\" class=\"dropdown-item btn btn-invite btn-raised\" tooltip=\"{{'common.invite' | translate}}\"><i class=\"fa fa-envelope-o\"></i></a>\r\n                                                </li>\r\n                                                <li role=\"menuitem\">\r\n                                                    <a *ngxPermissionsOnly=\"['admin', 'super_admin', 'clients_edit']\" [routerLink]=\"['edit', client.id]\" class=\"dropdown-item btn btn-edit btn-raised\" tooltip=\"{{'common.edit' | translate}}\"><i class=\"fa fa-pencil-square-o\"></i></a>\r\n                                                </li>\r\n                                                <li role=\"menuitem\">\r\n                                                    <a (click)=\"deleteClient(client.id)\" *ngxPermissionsOnly=\"['admin', 'super_admin', 'clients_delete']\" class=\"dropdown-item btn btn-delete btn-raised\" tooltip=\"{{'common.delete' | translate}}\"><i class=\"fa fa-trash-o\"></i></a>\r\n                                                </li>\r\n                                            </ul>\r\n                                        </div>\r\n                                    </td>\r\n                                </tr>\r\n                                </tbody>\r\n                                <tfoot *ngIf=\"clients?.length == 0\" class=\"tfoot_dt\">\r\n                                <tr>\r\n                                    <td class=\"no-data-available text-center\" colspan=\"9\">{{'common.datatable.sEmptyTable' | translate}}</td>\r\n                                </tr>\r\n                                </tfoot>\r\n                            </table>\r\n                        </div>\r\n                    </div>\r\n                </div>\r\n            </div>\r\n        </div>\r\n    </div>\r\n</section>\r\n");

/***/ }),

/***/ "./src/app/core/services/client.service.ts":
/*!*************************************************!*\
  !*** ./src/app/core/services/client.service.ts ***!
  \*************************************************/
/*! exports provided: ClientService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ClientService", function() { return ClientService; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../environments/environment */ "./src/environments/environment.ts");




var ClientService = /** @class */ (function () {
    function ClientService(http) {
        this.http = http;
        this.apiUrl = _environments_environment__WEBPACK_IMPORTED_MODULE_3__["environment"].apiUrl;
    }
    ClientService.prototype.getAll = function () {
        return this.http.get(this.apiUrl + "/api/clients");
    };
    ClientService.prototype.getClientsWithTrashed = function () {
        return this.http.get(this.apiUrl + "/api/clients/withtrashed");
    };
    ClientService.prototype.getById = function (id) {
        return this.http.get(this.apiUrl + "/api/clients/" + id);
    };
    ClientService.prototype.create = function (client) {
        return this.http.post(this.apiUrl + "/api/clients", client);
    };
    ClientService.prototype.update = function (client) {
        return this.http.put(this.apiUrl + "/api/clients/" + client.id, client);
    };
    ClientService.prototype.delete = function (id, params) {
        return this.http.post(this.apiUrl + "/api/clients/delete/" + id, params);
    };
    ClientService.prototype.setActiveDeactiveUser = function (client) {
        return this.http.put(this.apiUrl + "/api/clients/status-change/" + client.id, client);
    };
    ClientService.prototype.sendInviteUserMail = function (id) {
        return this.http.get(this.apiUrl + "/api/users/invite/" + id);
    };
    ClientService.ctorParameters = function () { return [
        { type: _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClient"] }
    ]; };
    ClientService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
            providedIn: 'root'
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClient"]])
    ], ClientService);
    return ClientService;
}());



/***/ }),

/***/ "./src/app/modules/admin/client/client-routing.module.ts":
/*!***************************************************************!*\
  !*** ./src/app/modules/admin/client/client-routing.module.ts ***!
  \***************************************************************/
/*! exports provided: ClientRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ClientRoutingModule", function() { return ClientRoutingModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var ngx_permissions__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ngx-permissions */ "./node_modules/ngx-permissions/ngx-permissions.umd.js");
/* harmony import */ var ngx_permissions__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(ngx_permissions__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _pages_client_client_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./pages/client/client.component */ "./src/app/modules/admin/client/pages/client/client.component.ts");
/* harmony import */ var _pages_client_create_client_create_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./pages/client-create/client-create.component */ "./src/app/modules/admin/client/pages/client-create/client-create.component.ts");
/* harmony import */ var _pages_client_edit_client_edit_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./pages/client-edit/client-edit.component */ "./src/app/modules/admin/client/pages/client-edit/client-edit.component.ts");
/* harmony import */ var _pages_client_detail_client_detail_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./pages/client-detail/client-detail.component */ "./src/app/modules/admin/client/pages/client-detail/client-detail.component.ts");








var routes = [
    {
        path: '',
        children: [
            {
                path: '',
                component: _pages_client_client_component__WEBPACK_IMPORTED_MODULE_4__["ClientComponent"],
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
                        only: ['admin', 'super_admin', 'clients_create']
                    }
                },
                component: _pages_client_create_client_create_component__WEBPACK_IMPORTED_MODULE_5__["ClientCreateComponent"]
            },
            {
                path: 'edit/:id',
                canActivate: [ngx_permissions__WEBPACK_IMPORTED_MODULE_3__["NgxPermissionsGuard"]],
                data: {
                    breadcrumbs: {
                        text: 'common.edit',
                        icon: 'fa fa-user-circle',
                        show: true,
                        isHome: true
                    },
                    permissions: {
                        only: ['admin', 'super_admin', 'clients_edit']
                    }
                },
                component: _pages_client_edit_client_edit_component__WEBPACK_IMPORTED_MODULE_6__["ClientEditComponent"]
            },
            {
                path: 'profile/:id',
                canActivate: [ngx_permissions__WEBPACK_IMPORTED_MODULE_3__["NgxPermissionsGuard"]],
                data: {
                    breadcrumbs: {
                        text: 'common.detail',
                        icon: 'fa fa-user-circle',
                        show: true,
                        isHome: true
                    }
                },
                component: _pages_client_detail_client_detail_component__WEBPACK_IMPORTED_MODULE_7__["ClientDetailComponent"]
            }
        ]
    }
];
var ClientRoutingModule = /** @class */ (function () {
    function ClientRoutingModule() {
    }
    ClientRoutingModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)],
            exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]]
        })
    ], ClientRoutingModule);
    return ClientRoutingModule;
}());



/***/ }),

/***/ "./src/app/modules/admin/client/client.module.ts":
/*!*******************************************************!*\
  !*** ./src/app/modules/admin/client/client.module.ts ***!
  \*******************************************************/
/*! exports provided: ClientModule, HttpLoaderFactory */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ClientModule", function() { return ClientModule; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "HttpLoaderFactory", function() { return HttpLoaderFactory; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");
/* harmony import */ var _ng_select_ng_select__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @ng-select/ng-select */ "./node_modules/@ng-select/ng-select/fesm5/ng-select.js");
/* harmony import */ var ngx_bootstrap__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ngx-bootstrap */ "./node_modules/ngx-bootstrap/esm5/ngx-bootstrap.js");
/* harmony import */ var ngx_export_as__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ngx-export-as */ "./node_modules/ngx-export-as/fesm2015/ngx-export-as.js");
/* harmony import */ var ngx_ui_switch__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ngx-ui-switch */ "./node_modules/ngx-ui-switch/ui-switch.es5.js");
/* harmony import */ var ngx_permissions__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ngx-permissions */ "./node_modules/ngx-permissions/ngx-permissions.umd.js");
/* harmony import */ var ngx_permissions__WEBPACK_IMPORTED_MODULE_9___default = /*#__PURE__*/__webpack_require__.n(ngx_permissions__WEBPACK_IMPORTED_MODULE_9__);
/* harmony import */ var _ngx_translate_core__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @ngx-translate/core */ "./node_modules/@ngx-translate/core/fesm5/ngx-translate-core.js");
/* harmony import */ var _ngx_translate_http_loader__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! @ngx-translate/http-loader */ "./node_modules/@ngx-translate/http-loader/fesm5/ngx-translate-http-loader.js");
/* harmony import */ var angular_datatables__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! angular-datatables */ "./node_modules/angular-datatables/index.js");
/* harmony import */ var _client_routing_module__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ./client-routing.module */ "./src/app/modules/admin/client/client-routing.module.ts");
/* harmony import */ var _shared_shared_module__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ../../../shared/shared.module */ "./src/app/shared/shared.module.ts");
/* harmony import */ var _pages_client_client_component__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! ./pages/client/client.component */ "./src/app/modules/admin/client/pages/client/client.component.ts");
/* harmony import */ var _pages_client_create_client_create_component__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! ./pages/client-create/client-create.component */ "./src/app/modules/admin/client/pages/client-create/client-create.component.ts");
/* harmony import */ var _pages_client_edit_client_edit_component__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! ./pages/client-edit/client-edit.component */ "./src/app/modules/admin/client/pages/client-edit/client-edit.component.ts");
/* harmony import */ var _pages_client_detail_client_detail_component__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! ./pages/client-detail/client-detail.component */ "./src/app/modules/admin/client/pages/client-detail/client-detail.component.ts");



















var ClientModule = /** @class */ (function () {
    function ClientModule() {
    }
    ClientModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            declarations: [
                _pages_client_client_component__WEBPACK_IMPORTED_MODULE_15__["ClientComponent"],
                _pages_client_create_client_create_component__WEBPACK_IMPORTED_MODULE_16__["ClientCreateComponent"],
                _pages_client_edit_client_edit_component__WEBPACK_IMPORTED_MODULE_17__["ClientEditComponent"],
                _pages_client_detail_client_detail_component__WEBPACK_IMPORTED_MODULE_18__["ClientDetailComponent"]
            ],
            imports: [
                _angular_common__WEBPACK_IMPORTED_MODULE_3__["CommonModule"],
                _angular_common__WEBPACK_IMPORTED_MODULE_3__["CommonModule"],
                _ng_select_ng_select__WEBPACK_IMPORTED_MODULE_5__["NgSelectModule"],
                _client_routing_module__WEBPACK_IMPORTED_MODULE_13__["ClientRoutingModule"],
                _angular_common__WEBPACK_IMPORTED_MODULE_3__["CommonModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormsModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_2__["ReactiveFormsModule"],
                angular_datatables__WEBPACK_IMPORTED_MODULE_12__["DataTablesModule"],
                ngx_export_as__WEBPACK_IMPORTED_MODULE_7__["ExportAsModule"],
                ngx_permissions__WEBPACK_IMPORTED_MODULE_9__["NgxPermissionsModule"],
                ngx_bootstrap__WEBPACK_IMPORTED_MODULE_6__["TooltipModule"].forRoot(),
                ngx_bootstrap__WEBPACK_IMPORTED_MODULE_6__["DatepickerModule"].forRoot(),
                ngx_bootstrap__WEBPACK_IMPORTED_MODULE_6__["BsDatepickerModule"].forRoot(),
                ngx_bootstrap__WEBPACK_IMPORTED_MODULE_6__["BsDropdownModule"].forRoot(),
                ngx_bootstrap__WEBPACK_IMPORTED_MODULE_6__["TabsModule"].forRoot(),
                ngx_ui_switch__WEBPACK_IMPORTED_MODULE_8__["UiSwitchModule"].forRoot({
                    checkedLabel: 'Active',
                    uncheckedLabel: 'Inactive',
                    color: 'rgb(0, 189, 99)',
                    switchColor: '#FFFFFF',
                    defaultBgColor: '#c6c6c6',
                    defaultBoColor: '#c39ef8'
                }),
                _ngx_translate_core__WEBPACK_IMPORTED_MODULE_10__["TranslateModule"].forChild({
                    loader: {
                        provide: _ngx_translate_core__WEBPACK_IMPORTED_MODULE_10__["TranslateLoader"],
                        useFactory: (HttpLoaderFactory),
                        deps: [_angular_common_http__WEBPACK_IMPORTED_MODULE_4__["HttpClient"]]
                    }
                }),
                _shared_shared_module__WEBPACK_IMPORTED_MODULE_14__["SharedModule"],
            ]
        })
    ], ClientModule);
    return ClientModule;
}());

// Required for AOT compilation
function HttpLoaderFactory(http) {
    return new _ngx_translate_http_loader__WEBPACK_IMPORTED_MODULE_11__["TranslateHttpLoader"](http, './assets/i18n/', '.json');
}


/***/ }),

/***/ "./src/app/modules/admin/client/pages/client-create/client-create.component.scss":
/*!***************************************************************************************!*\
  !*** ./src/app/modules/admin/client/pages/client-create/client-create.component.scss ***!
  \***************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL21vZHVsZXMvYWRtaW4vY2xpZW50L3BhZ2VzL2NsaWVudC1jcmVhdGUvY2xpZW50LWNyZWF0ZS5jb21wb25lbnQuc2NzcyJ9 */");

/***/ }),

/***/ "./src/app/modules/admin/client/pages/client-create/client-create.component.ts":
/*!*************************************************************************************!*\
  !*** ./src/app/modules/admin/client/pages/client-create/client-create.component.ts ***!
  \*************************************************************************************/
/*! exports provided: ClientCreateComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ClientCreateComponent", function() { return ClientCreateComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var ngx_toastr__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ngx-toastr */ "./node_modules/ngx-toastr/fesm5/ngx-toastr.js");
/* harmony import */ var _ngx_translate_core__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @ngx-translate/core */ "./node_modules/@ngx-translate/core/fesm5/ngx-translate-core.js");
/* harmony import */ var _core_services_department_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../../../../core/services/department.service */ "./src/app/core/services/department.service.ts");
/* harmony import */ var _core_services_user_service__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../../../../../core/services/user.service */ "./src/app/core/services/user.service.ts");
/* harmony import */ var _core_services_client_service__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../../../../../core/services/client.service */ "./src/app/core/services/client.service.ts");
/* harmony import */ var _core_services_helper_service__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../../../../../core/services/helper.service */ "./src/app/core/services/helper.service.ts");
/* harmony import */ var _core_services_translation_service__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ../../../../../core/services/translation.service */ "./src/app/core/services/translation.service.ts");
/* harmony import */ var _core_helpers_must_match_validator__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./../../../../../core/helpers/must-match.validator */ "./src/app/core/helpers/must-match.validator.ts");
/* harmony import */ var _core_helpers_admin_helper__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ../../../../../core/helpers/admin.helper */ "./src/app/core/helpers/admin.helper.ts");
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ../../../../../../environments/environment */ "./src/environments/environment.ts");
/* harmony import */ var dropzone__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! dropzone */ "./node_modules/dropzone/dist/dropzone.js");
/* harmony import */ var dropzone__WEBPACK_IMPORTED_MODULE_14___default = /*#__PURE__*/__webpack_require__.n(dropzone__WEBPACK_IMPORTED_MODULE_14__);















var ClientCreateComponent = /** @class */ (function () {
    function ClientCreateComponent(translate, router, formBuilder, toastr, departmentService, userService, clientService, helperService, translationService) {
        this.translate = translate;
        this.router = router;
        this.formBuilder = formBuilder;
        this.toastr = toastr;
        this.departmentService = departmentService;
        this.userService = userService;
        this.clientService = clientService;
        this.helperService = helperService;
        this.translationService = translationService;
        this.apiUrl = _environments_environment__WEBPACK_IMPORTED_MODULE_13__["environment"].apiUrl;
        this.avatars = _core_helpers_admin_helper__WEBPACK_IMPORTED_MODULE_12__["UserAvatars"];
        this.isFormSubmitted = false;
        this.isPageLoaded = false;
    }
    Object.defineProperty(ClientCreateComponent.prototype, "clientControl", {
        get: function () {
            return this.createClientForm.controls;
        },
        enumerable: true,
        configurable: true
    });
    ClientCreateComponent.prototype.ngOnInit = function () {
        this.getDepartments();
        this.getCountries();
        this.getLanguages();
    };
    ClientCreateComponent.prototype.loadForms = function () {
        var that = this;
        this.createClientForm = this.formBuilder.group({
            user_generated_id: ['USR0001', _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required],
            username: ['', [_angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required, _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].minLength(3), _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].maxLength(30), _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].pattern(/^\S*$/)]],
            firstname: ['', [_angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required, _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].maxLength(20)]],
            lastname: ['', [_angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required, _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].maxLength(20)]],
            email: ['', [_angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required, _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].email]],
            password: ['', [_angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required, _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].minLength(3), _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].maxLength(30)]],
            password_confirmation: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required],
            skype: [''],
            country: [null],
            mobile: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].pattern(/^(?:[+])?(\d[ -]?){1,15}$/)],
            language: ['en'],
            phone: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].pattern(/^(?:[+])?(\d[ -]?){1,15}$/)],
            address: [''],
            avatar: [null],
            department_roles: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required],
            clients: this.formBuilder.group({
                company_name: [''],
                company_email: ['', [_angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].email]],
                company_phone: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].pattern(/^(?:[+])?(\d[ -]?){1,15}$/)],
                company_mobile: ['', [_angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].pattern(/^(?:[+])?(\d[ -]?){1,15}$/)]],
                company_zipcode: [''],
                company_city: [''],
                company_country: [null],
                company_fax: [''],
                company_address: [''],
                website: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].pattern(/[-a-zA-Z0-9@:%_\+.~#?&//=]{2,256}\.[a-z]{2,4}\b(\/[-a-zA-Z0-9@:%_\+.~#?&//=]*)?/)],
                skype_id: [''],
                facebook: [''],
                twitter: [''],
                linkedin: [''],
                hosting_company: [''],
                host_name: [''],
                host_username: [''],
                host_password: [''],
                host_port: ['']
            })
        }, {
            validator: Object(_core_helpers_must_match_validator__WEBPACK_IMPORTED_MODULE_11__["MustMatch"])('password', 'password_confirmation')
        });
        this.getUserGeneratedId();
        this.isPageLoaded = true;
        setTimeout(function () {
            that.loadDropzone();
        });
    };
    ClientCreateComponent.prototype.loadDropzone = function () {
        var that = this;
        new dropzone__WEBPACK_IMPORTED_MODULE_14__(this.profiledropzone.nativeElement, {
            url: 'https://httpbin.org/post',
            maxFiles: 1,
            clickable: true,
            acceptedFiles: 'image/*',
            createImageThumbnails: true,
            init: function () {
                this.on('addedfile', function (file) {
                    var removeButton = dropzone__WEBPACK_IMPORTED_MODULE_14__["createElement"]('<button class=\'btn btn-sm btn-block\'>' + that.translate.instant('common.remove_file') + '</button>');
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
                            that.createClientForm.patchValue({ avatar: reader_1.result });
                        };
                        reader_1.readAsDataURL(file);
                    }
                });
                this.on('removedfile', function (file) {
                    that.createClientForm.patchValue({ avatar: '' });
                });
                this.on('error', function (file, message) {
                    if (file) {
                        that.toastr.error(message);
                    }
                });
            }
        });
    };
    ClientCreateComponent.prototype.setAvatar = function (avatar) {
        if (avatar === this.selected) {
            this.selected = null;
        }
        else {
            this.selected = avatar;
        }
        this.createClientForm.patchValue({ avatar: this.selected });
    };
    ClientCreateComponent.prototype.isActive = function (avatar) {
        return this.selected === avatar;
    };
    ;
    ClientCreateComponent.prototype.departmentRolesChange = function (event) {
        this.selectedDepartmentRoles = event;
    };
    ClientCreateComponent.prototype.getDepartments = function () {
        var _this_1 = this;
        this.departmentService.getDepartmentsClientsRoles()
            .subscribe(function (data) {
            _this_1.departmentsRoles = data;
            _this_1.loadForms();
        });
    };
    ClientCreateComponent.prototype.getLanguages = function () {
        var _this_1 = this;
        this.translationService.getAllActiveTranslations()
            .subscribe(function (data) {
            _this_1.languages = data;
        });
    };
    ClientCreateComponent.prototype.getCountries = function () {
        var _this_1 = this;
        this.helperService.getCountries()
            .subscribe(function (data) {
            _this_1.countries = data;
        });
    };
    ClientCreateComponent.prototype.getUserGeneratedId = function () {
        var _this_1 = this;
        this.userService.getUserGeneratedId().subscribe(function (data) {
            _this_1.createClientForm.patchValue({ user_generated_id: data });
        });
    };
    ClientCreateComponent.prototype.onSubmit = function () {
        var _this_1 = this;
        this.createClientForm.value.department_roles = [];
        this.isFormSubmitted = true;
        if (this.createClientForm.invalid) {
            return;
        }
        if (this.selectedDepartmentRoles) {
            for (var iRow in this.selectedDepartmentRoles) {
                if (this.selectedDepartmentRoles[iRow].pivot) {
                    this.createClientForm.value.department_roles.push(this.selectedDepartmentRoles[iRow].pivot);
                }
            }
        }
        this.clientService.create(this.createClientForm.value)
            .subscribe(function (data) {
            _this_1.toastr.success(_this_1.translate.instant('clients.messages.create'), _this_1.translate.instant('clients.title'));
            _this_1.router.navigate(['clients']);
        });
    };
    ClientCreateComponent.ctorParameters = function () { return [
        { type: _ngx_translate_core__WEBPACK_IMPORTED_MODULE_5__["TranslateService"] },
        { type: _angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"] },
        { type: _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormBuilder"] },
        { type: ngx_toastr__WEBPACK_IMPORTED_MODULE_4__["ToastrService"] },
        { type: _core_services_department_service__WEBPACK_IMPORTED_MODULE_6__["DepartmentService"] },
        { type: _core_services_user_service__WEBPACK_IMPORTED_MODULE_7__["UserService"] },
        { type: _core_services_client_service__WEBPACK_IMPORTED_MODULE_8__["ClientService"] },
        { type: _core_services_helper_service__WEBPACK_IMPORTED_MODULE_9__["HelperService"] },
        { type: _core_services_translation_service__WEBPACK_IMPORTED_MODULE_10__["TranslationService"] }
    ]; };
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewChild"])('profiledropzone', { static: false }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", _angular_core__WEBPACK_IMPORTED_MODULE_1__["ElementRef"])
    ], ClientCreateComponent.prototype, "profiledropzone", void 0);
    ClientCreateComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-client-create',
            template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./client-create.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/modules/admin/client/pages/client-create/client-create.component.html")).default,
            styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./client-create.component.scss */ "./src/app/modules/admin/client/pages/client-create/client-create.component.scss")).default]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_ngx_translate_core__WEBPACK_IMPORTED_MODULE_5__["TranslateService"],
            _angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormBuilder"],
            ngx_toastr__WEBPACK_IMPORTED_MODULE_4__["ToastrService"],
            _core_services_department_service__WEBPACK_IMPORTED_MODULE_6__["DepartmentService"],
            _core_services_user_service__WEBPACK_IMPORTED_MODULE_7__["UserService"],
            _core_services_client_service__WEBPACK_IMPORTED_MODULE_8__["ClientService"],
            _core_services_helper_service__WEBPACK_IMPORTED_MODULE_9__["HelperService"],
            _core_services_translation_service__WEBPACK_IMPORTED_MODULE_10__["TranslationService"]])
    ], ClientCreateComponent);
    return ClientCreateComponent;
}());



/***/ }),

/***/ "./src/app/modules/admin/client/pages/client-detail/client-detail.component.scss":
/*!***************************************************************************************!*\
  !*** ./src/app/modules/admin/client/pages/client-detail/client-detail.component.scss ***!
  \***************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL21vZHVsZXMvYWRtaW4vY2xpZW50L3BhZ2VzL2NsaWVudC1kZXRhaWwvY2xpZW50LWRldGFpbC5jb21wb25lbnQuc2NzcyJ9 */");

/***/ }),

/***/ "./src/app/modules/admin/client/pages/client-detail/client-detail.component.ts":
/*!*************************************************************************************!*\
  !*** ./src/app/modules/admin/client/pages/client-detail/client-detail.component.ts ***!
  \*************************************************************************************/
/*! exports provided: ClientDetailComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ClientDetailComponent", function() { return ClientDetailComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _core_services_client_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../../../core/services/client.service */ "./src/app/core/services/client.service.ts");




var ClientDetailComponent = /** @class */ (function () {
    function ClientDetailComponent(route, router, clientService) {
        this.route = route;
        this.router = router;
        this.clientService = clientService;
        this.isPageLoaded = false;
    }
    ClientDetailComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.route.paramMap.subscribe(function (params) {
            _this.getClientById(params.get('id'));
        });
    };
    ClientDetailComponent.prototype.getClientById = function (id) {
        var _this = this;
        this.clientService.getById(id)
            .subscribe(function (data) {
            _this.client = data;
            _this.isPageLoaded = true;
        });
    };
    ClientDetailComponent.ctorParameters = function () { return [
        { type: _angular_router__WEBPACK_IMPORTED_MODULE_2__["ActivatedRoute"] },
        { type: _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"] },
        { type: _core_services_client_service__WEBPACK_IMPORTED_MODULE_3__["ClientService"] }
    ]; };
    ClientDetailComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-client-detail',
            template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./client-detail.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/modules/admin/client/pages/client-detail/client-detail.component.html")).default,
            styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./client-detail.component.scss */ "./src/app/modules/admin/client/pages/client-detail/client-detail.component.scss")).default]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_router__WEBPACK_IMPORTED_MODULE_2__["ActivatedRoute"],
            _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"],
            _core_services_client_service__WEBPACK_IMPORTED_MODULE_3__["ClientService"]])
    ], ClientDetailComponent);
    return ClientDetailComponent;
}());



/***/ }),

/***/ "./src/app/modules/admin/client/pages/client-edit/client-edit.component.scss":
/*!***********************************************************************************!*\
  !*** ./src/app/modules/admin/client/pages/client-edit/client-edit.component.scss ***!
  \***********************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL21vZHVsZXMvYWRtaW4vY2xpZW50L3BhZ2VzL2NsaWVudC1lZGl0L2NsaWVudC1lZGl0LmNvbXBvbmVudC5zY3NzIn0= */");

/***/ }),

/***/ "./src/app/modules/admin/client/pages/client-edit/client-edit.component.ts":
/*!*********************************************************************************!*\
  !*** ./src/app/modules/admin/client/pages/client-edit/client-edit.component.ts ***!
  \*********************************************************************************/
/*! exports provided: ClientEditComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ClientEditComponent", function() { return ClientEditComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var ngx_toastr__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ngx-toastr */ "./node_modules/ngx-toastr/fesm5/ngx-toastr.js");
/* harmony import */ var _ngx_translate_core__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @ngx-translate/core */ "./node_modules/@ngx-translate/core/fesm5/ngx-translate-core.js");
/* harmony import */ var _core_services_department_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../../../../core/services/department.service */ "./src/app/core/services/department.service.ts");
/* harmony import */ var _core_services_client_service__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../../../../../core/services/client.service */ "./src/app/core/services/client.service.ts");
/* harmony import */ var _core_services_helper_service__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../../../../../core/services/helper.service */ "./src/app/core/services/helper.service.ts");
/* harmony import */ var _core_services_translation_service__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../../../../../core/services/translation.service */ "./src/app/core/services/translation.service.ts");
/* harmony import */ var _core_helpers_admin_helper__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ../../../../../core/helpers/admin.helper */ "./src/app/core/helpers/admin.helper.ts");
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ../../../../../../environments/environment */ "./src/environments/environment.ts");
/* harmony import */ var dropzone__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! dropzone */ "./node_modules/dropzone/dist/dropzone.js");
/* harmony import */ var dropzone__WEBPACK_IMPORTED_MODULE_12___default = /*#__PURE__*/__webpack_require__.n(dropzone__WEBPACK_IMPORTED_MODULE_12__);













var ClientEditComponent = /** @class */ (function () {
    function ClientEditComponent(translate, route, router, formBuilder, toastr, departmentService, clientService, helperService, translationService) {
        this.translate = translate;
        this.route = route;
        this.router = router;
        this.formBuilder = formBuilder;
        this.toastr = toastr;
        this.departmentService = departmentService;
        this.clientService = clientService;
        this.helperService = helperService;
        this.translationService = translationService;
        this.avatars = _core_helpers_admin_helper__WEBPACK_IMPORTED_MODULE_10__["UserAvatars"];
        this.isFormSubmitted = false;
        this.departmentsRoles = [];
        this.departmentsObj = [];
        this.isPageLoaded = false;
        this.isProfileLoaded = true;
        this.apiUrl = _environments_environment__WEBPACK_IMPORTED_MODULE_11__["environment"].apiUrl;
    }
    Object.defineProperty(ClientEditComponent.prototype, "clientControl", {
        get: function () {
            return this.editClientForm.controls;
        },
        enumerable: true,
        configurable: true
    });
    ClientEditComponent.prototype.ngOnInit = function () {
        var _this_1 = this;
        this.route.paramMap.subscribe(function (params) {
            _this_1.getClientById(params.get('id'));
        });
        this.getCountries();
        this.getLanguages();
    };
    ClientEditComponent.prototype.loadForms = function () {
        this.editClientForm = this.formBuilder.group({
            id: [this.client.id],
            user_generated_id: [this.client.user_generated_id, _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required],
            username: [this.client.username, [_angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required, _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].minLength(3), _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].maxLength(30), _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].pattern(/^\S*$/)]],
            firstname: [this.client.firstname, [_angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required, _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].maxLength(20)]],
            lastname: [this.client.lastname, [_angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required, _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].maxLength(20)]],
            email: [this.client.email, [_angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required, _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].email]],
            skype: [this.client.skype],
            country: [this.client.country],
            mobile: [this.client.mobile, _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].pattern(/^(?:[+])?(\d[ -]?){1,15}$/)],
            language: [this.client.language],
            phone: [this.client.phone, _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].pattern(/^(?:[+])?(\d[ -]?){1,15}$/)],
            address: [this.client.address],
            avatar: [this.client.avatar],
            department_roles: [this.departmentsObj, _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required],
            clients: this.formBuilder.group({
                company_name: [this.client.clients.company_name],
                company_email: [this.client.clients.company_email, [_angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].email]],
                company_phone: [this.client.clients.company_phone, [_angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].pattern(/^(?:[+])?(\d[ -]?){1,15}$/)]],
                company_mobile: [this.client.clients.company_mobile, [_angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].pattern(/^(?:[+])?(\d[ -]?){1,15}$/)]],
                company_zipcode: [this.client.clients.company_zipcode],
                company_city: [this.client.clients.company_city],
                company_country: [this.client.clients.company_country],
                company_fax: [this.client.clients.company_fax],
                company_address: [this.client.clients.company_address],
                website: [this.client.clients.website, _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].pattern(/[-a-zA-Z0-9@:%_\+.~#?&//=]{2,256}\.[a-z]{2,4}\b(\/[-a-zA-Z0-9@:%_\+.~#?&//=]*)?/)],
                skype_id: [this.client.clients.skype_id],
                facebook: [this.client.clients.facebook],
                twitter: [this.client.clients.twitter],
                linkedin: [this.client.clients.linkedin],
                hosting_company: [this.client.clients.hosting_company],
                host_name: [this.client.clients.host_name],
                host_username: [this.client.clients.host_username],
                host_password: [this.client.clients.host_password],
                host_port: [this.client.clients.host_port]
            })
        });
        this.setAvatar(this.client.avatar);
        this.selectedDepartmentRoles = this.removeUnderscoreIds(this.departmentsObj);
        this.isPageLoaded = true;
    };
    ClientEditComponent.prototype.loadDropzone = function () {
        var that = this;
        new dropzone__WEBPACK_IMPORTED_MODULE_12__(this.profiledropzone.nativeElement, {
            url: 'https://httpbin.org/post',
            maxFiles: 1,
            clickable: true,
            acceptedFiles: 'image/*',
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
                        reader_1.onload = function (e) {
                            that.editClientForm.patchValue({ avatar: reader_1.result });
                            that.isProfileLoaded = false;
                        };
                        reader_1.readAsDataURL(file);
                    }
                });
                this.on('removedfile', function (file) {
                    that.editClientForm.patchValue({ avatar: null });
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
    ClientEditComponent.prototype.removeDropzoneImage = function () {
        this.isProfileLoaded = false;
        this.editClientForm.patchValue({ avatar: null });
    };
    ClientEditComponent.prototype.setAvatar = function (avatar) {
        if (avatar === this.selected) {
            this.selected = null;
        }
        else {
            this.selected = avatar;
        }
        this.editClientForm.patchValue({ avatar: this.selected });
    };
    ClientEditComponent.prototype.isActive = function (avatar) {
        return this.selected === avatar;
    };
    ;
    ClientEditComponent.prototype.getClientById = function (id) {
        var _this_1 = this;
        this.clientService.getById(id)
            .subscribe(function (data) {
            _this_1.client = data;
            _this_1.getDepartments();
        });
    };
    ClientEditComponent.prototype.getDepartments = function () {
        var _this_1 = this;
        this.departmentService.getDepartmentsClientsRoles()
            .subscribe(function (data) {
            _this_1.getDepartmentsRoles(data);
        });
    };
    ClientEditComponent.prototype.getLanguages = function () {
        var _this_1 = this;
        this.translationService.getAllActiveTranslations()
            .subscribe(function (data) {
            _this_1.languages = data;
        });
    };
    ClientEditComponent.prototype.getCountries = function () {
        var _this_1 = this;
        this.helperService.getCountries()
            .subscribe(function (data) {
            _this_1.countries = data;
        });
    };
    ClientEditComponent.prototype.departmentRolesChange = function (event) {
        this.selectedDepartmentRoles = event;
    };
    ClientEditComponent.prototype.removeUnderscoreIds = function (ids) {
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
    ClientEditComponent.prototype.getDepartmentsRoles = function (departments) {
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
        for (var iRow in this.client.departments) {
            for (var jRow in this.client.departments[iRow].roles) {
                this.departmentsObj.push(this.client.departments[iRow].id + '_' + this.client.departments[iRow].roles[jRow].id);
            }
        }
        this.loadForms();
        setTimeout(function () {
            that.loadDropzone();
        });
    };
    ClientEditComponent.prototype.onSubmit = function () {
        var _this_1 = this;
        this.isFormSubmitted = true;
        if (this.editClientForm.invalid) {
            return;
        }
        // // --
        // this.toastr.error(this.translate.instant('common.not_allowed'));
        // this.router.navigate(['clients']);
        // return;
        this.editClientForm.value.department_roles = this.selectedDepartmentRoles;
        this.editClientForm.value.UserAvatars = this.avatars;
        this.clientService.update(this.editClientForm.value)
            .subscribe(function (data) {
            _this_1.toastr.success(_this_1.translate.instant('clients.messages.update'), _this_1.translate.instant('clients.title'));
            _this_1.router.navigate(['clients']);
        });
    };
    ClientEditComponent.ctorParameters = function () { return [
        { type: _ngx_translate_core__WEBPACK_IMPORTED_MODULE_5__["TranslateService"] },
        { type: _angular_router__WEBPACK_IMPORTED_MODULE_3__["ActivatedRoute"] },
        { type: _angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"] },
        { type: _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormBuilder"] },
        { type: ngx_toastr__WEBPACK_IMPORTED_MODULE_4__["ToastrService"] },
        { type: _core_services_department_service__WEBPACK_IMPORTED_MODULE_6__["DepartmentService"] },
        { type: _core_services_client_service__WEBPACK_IMPORTED_MODULE_7__["ClientService"] },
        { type: _core_services_helper_service__WEBPACK_IMPORTED_MODULE_8__["HelperService"] },
        { type: _core_services_translation_service__WEBPACK_IMPORTED_MODULE_9__["TranslationService"] }
    ]; };
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewChild"])('profiledropzone', { static: false }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", _angular_core__WEBPACK_IMPORTED_MODULE_1__["ElementRef"])
    ], ClientEditComponent.prototype, "profiledropzone", void 0);
    ClientEditComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-client-edit',
            template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./client-edit.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/modules/admin/client/pages/client-edit/client-edit.component.html")).default,
            styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./client-edit.component.scss */ "./src/app/modules/admin/client/pages/client-edit/client-edit.component.scss")).default]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_ngx_translate_core__WEBPACK_IMPORTED_MODULE_5__["TranslateService"],
            _angular_router__WEBPACK_IMPORTED_MODULE_3__["ActivatedRoute"],
            _angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormBuilder"],
            ngx_toastr__WEBPACK_IMPORTED_MODULE_4__["ToastrService"],
            _core_services_department_service__WEBPACK_IMPORTED_MODULE_6__["DepartmentService"],
            _core_services_client_service__WEBPACK_IMPORTED_MODULE_7__["ClientService"],
            _core_services_helper_service__WEBPACK_IMPORTED_MODULE_8__["HelperService"],
            _core_services_translation_service__WEBPACK_IMPORTED_MODULE_9__["TranslationService"]])
    ], ClientEditComponent);
    return ClientEditComponent;
}());



/***/ }),

/***/ "./src/app/modules/admin/client/pages/client/client.component.scss":
/*!*************************************************************************!*\
  !*** ./src/app/modules/admin/client/pages/client/client.component.scss ***!
  \*************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = (".hide_empty_message ::ng-deep .odd {\n  display: none;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvbW9kdWxlcy9hZG1pbi9jbGllbnQvcGFnZXMvY2xpZW50L0M6XFxVc2Vyc1xcdGh1YW5cXE9uZURyaXZlXFxEZXNrdG9wXFxnbGF2YWwtdGh1YW5kaW5oL3NyY1xcYXBwXFxtb2R1bGVzXFxhZG1pblxcY2xpZW50XFxwYWdlc1xcY2xpZW50XFxjbGllbnQuY29tcG9uZW50LnNjc3MiLCJzcmMvYXBwL21vZHVsZXMvYWRtaW4vY2xpZW50L3BhZ2VzL2NsaWVudC9jbGllbnQuY29tcG9uZW50LnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDSSxhQUFBO0FDQ0oiLCJmaWxlIjoic3JjL2FwcC9tb2R1bGVzL2FkbWluL2NsaWVudC9wYWdlcy9jbGllbnQvY2xpZW50LmNvbXBvbmVudC5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLmhpZGVfZW1wdHlfbWVzc2FnZSA6Om5nLWRlZXAgLm9kZCB7XHJcbiAgICBkaXNwbGF5OiBub25lXHJcbn0iLCIuaGlkZV9lbXB0eV9tZXNzYWdlIDo6bmctZGVlcCAub2RkIHtcbiAgZGlzcGxheTogbm9uZTtcbn0iXX0= */");

/***/ }),

/***/ "./src/app/modules/admin/client/pages/client/client.component.ts":
/*!***********************************************************************!*\
  !*** ./src/app/modules/admin/client/pages/client/client.component.ts ***!
  \***********************************************************************/
/*! exports provided: ClientComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ClientComponent", function() { return ClientComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");
/* harmony import */ var ngx_export_as__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ngx-export-as */ "./node_modules/ngx-export-as/fesm2015/ngx-export-as.js");
/* harmony import */ var ngx_toastr__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ngx-toastr */ "./node_modules/ngx-toastr/fesm5/ngx-toastr.js");
/* harmony import */ var _ngx_translate_core__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @ngx-translate/core */ "./node_modules/@ngx-translate/core/fesm5/ngx-translate-core.js");
/* harmony import */ var angular_datatables__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! angular-datatables */ "./node_modules/angular-datatables/index.js");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! rxjs */ "./node_modules/rxjs/_esm5/index.js");
/* harmony import */ var sweetalert2__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! sweetalert2 */ "./node_modules/sweetalert2/dist/sweetalert2.all.js");
/* harmony import */ var sweetalert2__WEBPACK_IMPORTED_MODULE_8___default = /*#__PURE__*/__webpack_require__.n(sweetalert2__WEBPACK_IMPORTED_MODULE_8__);
/* harmony import */ var _core_services_client_service__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../../../../../core/services/client.service */ "./src/app/core/services/client.service.ts");
/* harmony import */ var _core_services_authentication_service__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ../../../../../core/services/authentication.service */ "./src/app/core/services/authentication.service.ts");
/* harmony import */ var _core_helpers_admin_helper__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ../../../../../core/helpers/admin.helper */ "./src/app/core/helpers/admin.helper.ts");
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ../../../../../../environments/environment */ "./src/environments/environment.ts");
/* harmony import */ var datatables_net__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! datatables.net */ "./node_modules/datatables.net/js/jquery.dataTables.js");
/* harmony import */ var datatables_net__WEBPACK_IMPORTED_MODULE_13___default = /*#__PURE__*/__webpack_require__.n(datatables_net__WEBPACK_IMPORTED_MODULE_13__);
/* harmony import */ var datatables_net_bs4__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! datatables.net-bs4 */ "./node_modules/datatables.net-bs4/js/dataTables.bootstrap4.js");
/* harmony import */ var datatables_net_bs4__WEBPACK_IMPORTED_MODULE_14___default = /*#__PURE__*/__webpack_require__.n(datatables_net_bs4__WEBPACK_IMPORTED_MODULE_14__);















var ClientComponent = /** @class */ (function () {
    function ClientComponent(translate, http, exportAsService, toastr, authenticationService, clientService) {
        var _this = this;
        this.translate = translate;
        this.http = http;
        this.exportAsService = exportAsService;
        this.toastr = toastr;
        this.authenticationService = authenticationService;
        this.clientService = clientService;
        this.dtTrigger = new rxjs__WEBPACK_IMPORTED_MODULE_7__["Subject"]();
        this.dtOptions = {};
        this.clients = [];
        this.departments = [];
        this.departments_roles = [];
        this.avatars = _core_helpers_admin_helper__WEBPACK_IMPORTED_MODULE_11__["UserAvatars"];
        this.exportAsConfig = {
            type: 'pdf',
            elementIdOrContent: 'clients_table',
        };
        this.apiUrl = _environments_environment__WEBPACK_IMPORTED_MODULE_12__["environment"].apiUrl;
        this.authenticationService.loginUser.subscribe(function (x) { return _this.loginUser = x; });
    }
    ClientComponent.prototype.ngOnInit = function () {
        this.loadClientDatatable();
    };
    ClientComponent.prototype.loadClientDatatable = function () {
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
                    'width': '10%',
                    'target': [1]
                },
                {
                    'sortable': true,
                    'width': '10%',
                    'target': [2]
                },
                {
                    'sortable': true,
                    'target': [3]
                },
                {
                    'sortable': false,
                    'target': [4]
                },
                {
                    'sortable': false,
                    'target': [5]
                },
                {
                    'sortable': true,
                    'target': [6]
                },
                {
                    'sortable': false,
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
                    title: this.translate.instant('clients.title'),
                    className: 'btn btn-datatable-gredient',
                    action: function (e, dt, node, config) {
                        that.exportFiles('csv');
                    }
                }, {
                    extend: 'excel',
                    title: this.translate.instant('clients.title'),
                    className: 'btn btn-datatable-gredient',
                    action: function (e, dt, node, config) {
                        that.exportFiles('xlsx');
                    }
                }, {
                    extend: 'pdf',
                    title: this.translate.instant('clients.title'),
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
                    .post(_this.apiUrl + '/api/all-clients', dataTablesParameters, {})
                    .subscribe(function (resp) {
                    _this.clients = resp.data;
                    _this.loadUserDepartments();
                    callback({
                        recordsTotal: resp.recordsTotal,
                        recordsFiltered: resp.recordsFiltered,
                        data: [],
                    });
                });
            }
        };
    };
    ClientComponent.prototype.loadUserDepartments = function () {
        for (var iRow in this.clients) {
            for (var jRow in this.clients[iRow].roles) {
                for (var kRow in this.clients[iRow].roles[jRow].userdepartments) {
                    if ((this.clients[iRow].roles[jRow].userdepartments[kRow].pivot.role_id == this.clients[iRow].roles[jRow].id) && (this.clients[iRow].roles[jRow].userdepartments[kRow].pivot.user_id == this.clients[iRow].id)) {
                        if (!this.departments_roles[this.clients[iRow].roles[jRow].userdepartments[kRow].pivot.user_id + '_' + this.clients[iRow].roles[jRow].userdepartments[kRow].pivot.role_id + '_' + this.clients[iRow].roles[jRow].userdepartments[kRow].pivot.department_id]) {
                            this.departments_roles[this.clients[iRow].roles[jRow].userdepartments[kRow].pivot.user_id + '_' + this.clients[iRow].roles[jRow].userdepartments[kRow].pivot.role_id + '_' + this.clients[iRow].roles[jRow].userdepartments[kRow].pivot.department_id] = [];
                            if (!this.departments[this.clients[iRow].id]) {
                                this.departments[this.clients[iRow].id] = [];
                            }
                            this.departments[this.clients[iRow].id].push({
                                user_id: this.clients[iRow].roles[jRow].userdepartments[kRow].pivot.user_id,
                                role_id: this.clients[iRow].roles[jRow].userdepartments[kRow].pivot.role_id,
                                department_id: this.clients[iRow].roles[jRow].userdepartments[kRow].pivot.department_id,
                                role_name: this.clients[iRow].roles[jRow].name,
                                department_name: this.clients[iRow].roles[jRow].userdepartments[kRow].name
                            });
                        }
                    }
                }
            }
        }
    };
    ClientComponent.prototype.ngAfterViewInit = function () {
        this.dtTrigger.next();
    };
    ClientComponent.prototype.ngOnDestroy = function () {
        this.dtTrigger.unsubscribe();
    };
    ClientComponent.prototype.rerender = function () {
        var _this = this;
        this.dtElement.dtInstance.then(function (dtInstance) {
            dtInstance.destroy();
            setTimeout(function () {
                _this.dtTrigger.next();
            });
            if (_this.clients.length > 0) {
                $('.tfoot_dt').addClass('d-none');
            }
            else {
                $('.tfoot_dt').removeClass('d-none');
            }
        });
    };
    ClientComponent.prototype.exportFiles = function (type) {
        this.exportAsConfig.type = type;
        this.exportAsService.save(this.exportAsConfig, 'clients').subscribe(function () {
        });
    };
    ClientComponent.prototype.setActiveDeactiveUser = function (value, client) {
        // --
        // this.toastr.error(this.translate.instant('common.not_allowed'));
        // return;
        var _this = this;
        client.is_active = value;
        this.clientService.setActiveDeactiveUser(client)
            .subscribe(function (data) {
            _this.toastr.success(_this.translate.instant('clients.messages.status'), _this.translate.instant('clients.title'));
            _this.rerender();
        }, function (error) {
            _this.rerender();
        });
    };
    ClientComponent.prototype.sendInviteUserMail = function (id) {
        var _this = this;
        this.clientService.sendInviteUserMail(id)
            .subscribe(function (data) {
            _this.toastr.success(_this.translate.instant('clients.messages.invite'), _this.translate.instant('clients.title'));
            _this.rerender();
        });
    };
    ClientComponent.prototype.deleteClient = function (id) {
        var _this = this;
        sweetalert2__WEBPACK_IMPORTED_MODULE_8___default.a.fire({
            title: this.translate.instant('common.swal.title'),
            text: this.translate.instant('common.swal.text3'),
            type: 'warning',
            showCancelButton: true,
            confirmButtonText: this.translate.instant('common.swal.confirmButtonText'),
            cancelButtonText: this.translate.instant('common.swal.cancelButtonText')
        }).then(function (result) {
            if (result.value) {
                // --
                // this.toastr.error(this.translate.instant('common.not_allowed'));
                // return;
                _this.clientService.delete(id, { 'UserAvatars': _this.avatars }).subscribe(function (data) {
                    _this.toastr.success(_this.translate.instant('clients.messages.delete'), _this.translate.instant('clients.title'));
                    _this.rerender();
                });
            }
        });
    };
    ClientComponent.prototype.saveClientDetail = function (index, name, value) {
        var _this = this;
        this.clients[index][name] = value;
        this.clients[index]['type'] = 'list';
        this.clientService.update(this.clients[index])
            .subscribe(function (data) {
            _this.toastr.success(_this.translate.instant('clients.messages.update'), _this.translate.instant('clients.title'));
            _this.rerender();
        });
    };
    ClientComponent.ctorParameters = function () { return [
        { type: _ngx_translate_core__WEBPACK_IMPORTED_MODULE_5__["TranslateService"] },
        { type: _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClient"] },
        { type: ngx_export_as__WEBPACK_IMPORTED_MODULE_3__["ExportAsService"] },
        { type: ngx_toastr__WEBPACK_IMPORTED_MODULE_4__["ToastrService"] },
        { type: _core_services_authentication_service__WEBPACK_IMPORTED_MODULE_10__["AuthenticationService"] },
        { type: _core_services_client_service__WEBPACK_IMPORTED_MODULE_9__["ClientService"] }
    ]; };
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewChild"])(angular_datatables__WEBPACK_IMPORTED_MODULE_6__["DataTableDirective"], { static: true }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", angular_datatables__WEBPACK_IMPORTED_MODULE_6__["DataTableDirective"])
    ], ClientComponent.prototype, "dtElement", void 0);
    ClientComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-client',
            template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./client.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/modules/admin/client/pages/client/client.component.html")).default,
            styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./client.component.scss */ "./src/app/modules/admin/client/pages/client/client.component.scss")).default]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_ngx_translate_core__WEBPACK_IMPORTED_MODULE_5__["TranslateService"],
            _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClient"],
            ngx_export_as__WEBPACK_IMPORTED_MODULE_3__["ExportAsService"],
            ngx_toastr__WEBPACK_IMPORTED_MODULE_4__["ToastrService"],
            _core_services_authentication_service__WEBPACK_IMPORTED_MODULE_10__["AuthenticationService"],
            _core_services_client_service__WEBPACK_IMPORTED_MODULE_9__["ClientService"]])
    ], ClientComponent);
    return ClientComponent;
}());



/***/ })

}]);
//# sourceMappingURL=modules-admin-client-client-module.js.map