(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["modules-crm-providers-providers-module"],{

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/modules/crm/providers/components/create-provider/create-provider.component.html":
/*!***************************************************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/modules/crm/providers/components/create-provider/create-provider.component.html ***!
  \***************************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<div class=\"modal-header\">\r\n    <h2 class=\"modal-title font-weight-normal\">\r\n        <i aria-hidden=\"true\" class=\"fa fa-user-o\"></i>&nbsp;{{'providers.title' | translate}}</h2>\r\n    <button (click)=\"bsCreateProviderModalRef.hide()\" aria-label=\"Close\" class=\"close\" data-dismiss=\"modal\" type=\"button\">\r\n        <span aria-hidden=\"true\">&times;</span></button>\r\n</div>\r\n<form (ngSubmit)=\"onSubmit()\" [formGroup]=\"createProviderForm\" class=\"form\">\r\n    <div class=\"modal-body\">\r\n        <div class=\"form-body\">\r\n            <div class=\"row\">\r\n                <div class=\"col-md-6\">\r\n                    <div class=\"form-group\">\r\n                        <label for=\"firstname\">{{'providers.create.fields.first_name' | translate}}\r\n                            <span class=\"text-danger\">&nbsp;*</span></label>\r\n                        <div class=\"position-relative has-icon-left\">\r\n                            <input [ngClass]=\"{ 'is-invalid': isSubmitted && providerControl.firstname.errors }\" class=\"form-control\" formControlName=\"firstname\" id=\"firstname\" placeholder=\"{{'providers.create.placeholders.placeholder1' | translate}}\" type=\"text\"/>\r\n                            <div class=\"form-control-position\">\r\n                                <i aria-hidden=\"true\" class=\"fa fa-lock\"></i>\r\n                            </div>\r\n                            <div *ngIf=\"isSubmitted && providerControl.firstname.errors\" class=\"invalid-feedback\">\r\n                                <div *ngIf=\"providerControl.firstname.errors.required\">{{'providers.create.error_messages.message1' | translate}}</div>\r\n                                <div *ngIf=\"providerControl.firstname.errors.maxlength\">{{'providers.create.error_messages.message2' | translate}}</div>\r\n                            </div>\r\n                        </div>\r\n                    </div>\r\n                </div>\r\n                <div class=\"col-md-6\">\r\n                    <div class=\"form-group\">\r\n                        <label for=\"lastname\">{{'providers.create.fields.last_name' | translate}}\r\n                            <span class=\"text-danger\">&nbsp;*</span></label>\r\n                        <div class=\"position-relative has-icon-left\">\r\n                            <input [ngClass]=\"{ 'is-invalid': isSubmitted && providerControl.lastname.errors }\" class=\"form-control\" formControlName=\"lastname\" id=\"lastname\" placeholder=\"{{'providers.create.placeholders.placeholder2' | translate}}\" type=\"text\"/>\r\n                            <div class=\"form-control-position\">\r\n                                <i aria-hidden=\"true\" class=\"fa fa-lock\"></i>\r\n                            </div>\r\n                            <div *ngIf=\"isSubmitted && providerControl.lastname.errors\" class=\"invalid-feedback\">\r\n                                <div *ngIf=\"providerControl.lastname.errors.required\">{{'providers.create.error_messages.message3' | translate}}</div>\r\n                                <div *ngIf=\"providerControl.lastname.errors.maxlength\">{{'providers.create.error_messages.message4' | translate}}</div>\r\n                            </div>\r\n                        </div>\r\n                    </div>\r\n                </div>\r\n                <div class=\"col-md-6\">\r\n                    <div class=\"form-group\">\r\n                        <label for=\"lastname\">{{'providers.create.fields.email' | translate}}\r\n                            <span class=\"text-danger\">&nbsp;*</span></label>\r\n                        <div class=\"position-relative has-icon-left\">\r\n                            <input [ngClass]=\"{ 'is-invalid': isSubmitted && providerControl.email.errors }\" class=\"form-control\" formControlName=\"email\" id=\"email\" placeholder=\"{{'providers.create.placeholders.placeholder3' | translate}}\" type=\"email\"/>\r\n                            <div class=\"form-control-position\">\r\n                                <i aria-hidden=\"true\" class=\"fa fa-lock\"></i>\r\n                            </div>\r\n                            <div *ngIf=\"isSubmitted && providerControl.email.errors\" class=\"invalid-feedback\">\r\n                                <div *ngIf=\"providerControl.email.errors.required\">{{'providers.create.error_messages.message5' | translate}}</div>\r\n                                <div *ngIf=\"providerControl.email.errors.email\">{{'providers.create.error_messages.message6' | translate}}</div>\r\n                            </div>\r\n                        </div>\r\n                    </div>\r\n                </div>\r\n                <div class=\"col-md-6\">\r\n                    <div [ngClass]=\"{ 'is-invalid': isSubmitted && providerControl.color.errors }\" class=\"form-group\">\r\n                        <label for=\"color\">{{'providers.create.fields.color' | translate}}\r\n                            <span class=\"text-danger\">&nbsp;*</span></label>\r\n                        <div class=\"position-relative has-icon-left\">\r\n                            <input (colorPickerChange)=\"createProviderForm.get('color').setValue($event)\" [colorPicker]=\"createProviderForm.get('color').value\" [cpCancelButton]=\"true\" [cpOKButton]=\"true\" [style.background]=\"createProviderForm.get('color').value\" [value]=\"createProviderForm.get('color').value\" class=\"form-control\" formControlName=\"color\" id=\"color\">\r\n                            <div class=\"form-control-position\"><i class=\"ft-droplet\"></i></div>\r\n                        </div>\r\n                        <div *ngIf=\"isSubmitted && providerControl.color.errors\" class=\"invalid-feedback\">\r\n                            <div *ngIf=\"providerControl.color.errors.required\">{{'providers.create.error_messages.message7' | translate}}</div>\r\n                        </div>\r\n                    </div>\r\n                </div>\r\n            </div>\r\n        </div>\r\n    </div>\r\n    <div class=\"modal-footer\">\r\n        <button (click)=\"onCancel()\" class=\"btn btn-cancel mb-0\" type=\"button\">{{'common.close' | translate}}</button>\r\n        <button class=\"btn btn-submit mb-0\" type=\"submit\">{{'common.create' | translate}}</button>\r\n    </div>\r\n</form>\r\n");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/modules/crm/providers/components/edit-provider/edit-provider.component.html":
/*!***********************************************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/modules/crm/providers/components/edit-provider/edit-provider.component.html ***!
  \***********************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<div class=\"modal-header\">\r\n    <h2 class=\"modal-title font-weight-normal\">\r\n        <i aria-hidden=\"true\" class=\"fa fa-user-o\"></i>&nbsp;{{'providers.title' | translate}}</h2>\r\n    <button (click)=\"bsEditProviderModalRef.hide()\" aria-label=\"Close\" class=\"close\" data-dismiss=\"modal\" type=\"button\">\r\n        <span aria-hidden=\"true\">&times;</span></button>\r\n</div>\r\n<form (ngSubmit)=\"onSubmit()\" [formGroup]=\"editProviderForm\" class=\"form\">\r\n    <div class=\"modal-body\">\r\n        <div class=\"form-body\">\r\n            <div class=\"row\">\r\n                <div class=\"col-md-6\">\r\n                    <div class=\"form-group\">\r\n                        <label for=\"firstname\">{{'providers.create.fields.first_name' | translate}}\r\n                            <span class=\"text-danger\">&nbsp;*</span></label>\r\n                        <div class=\"position-relative has-icon-left\">\r\n                            <input [ngClass]=\"{ 'is-invalid': isSubmitted && providerControl.firstname.errors }\" class=\"form-control\" formControlName=\"firstname\" id=\"firstname\" placeholder=\"{{'providers.create.placeholders.placeholder1' | translate}}\" type=\"text\"/>\r\n                            <div class=\"form-control-position\">\r\n                                <i aria-hidden=\"true\" class=\"fa fa-lock\"></i>\r\n                            </div>\r\n                            <div *ngIf=\"isSubmitted && providerControl.firstname.errors\" class=\"invalid-feedback\">\r\n                                <div *ngIf=\"providerControl.firstname.errors.required\">{{'providers.create.error_messages.message1' | translate}}</div>\r\n                                <div *ngIf=\"providerControl.firstname.errors.maxlength\">{{'providers.create.error_messages.message2' | translate}}</div>\r\n                            </div>\r\n                        </div>\r\n                    </div>\r\n                </div>\r\n                <div class=\"col-md-6\">\r\n                    <div class=\"form-group\">\r\n                        <label for=\"lastname\">{{'providers.create.fields.last_name' | translate}}\r\n                            <span class=\"text-danger\">&nbsp;*</span></label>\r\n                        <div class=\"position-relative has-icon-left\">\r\n                            <input [ngClass]=\"{ 'is-invalid': isSubmitted && providerControl.lastname.errors }\" class=\"form-control\" formControlName=\"lastname\" id=\"lastname\" placeholder=\"{{'providers.create.placeholders.placeholder2' | translate}}\" type=\"text\"/>\r\n                            <div class=\"form-control-position\">\r\n                                <i aria-hidden=\"true\" class=\"fa fa-lock\"></i>\r\n                            </div>\r\n                            <div *ngIf=\"isSubmitted && providerControl.lastname.errors\" class=\"invalid-feedback\">\r\n                                <div *ngIf=\"providerControl.lastname.errors.required\">{{'providers.create.error_messages.message3' | translate}}</div>\r\n                                <div *ngIf=\"providerControl.lastname.errors.maxlength\">{{'providers.create.error_messages.message4' | translate}}</div>\r\n                            </div>\r\n                        </div>\r\n                    </div>\r\n                </div>\r\n                <div class=\"col-md-6\">\r\n                    <div class=\"form-group\">\r\n                        <label for=\"lastname\">{{'providers.create.fields.email' | translate}}\r\n                            <span class=\"text-danger\">&nbsp;*</span></label>\r\n                        <div class=\"position-relative has-icon-left\">\r\n                            <input [ngClass]=\"{ 'is-invalid': isSubmitted && providerControl.email.errors }\" class=\"form-control\" formControlName=\"email\" id=\"email\" placeholder=\"{{'providers.create.placeholders.placeholder3' | translate}}\" type=\"email\"/>\r\n                            <div class=\"form-control-position\">\r\n                                <i aria-hidden=\"true\" class=\"fa fa-lock\"></i>\r\n                            </div>\r\n                            <div *ngIf=\"isSubmitted && providerControl.email.errors\" class=\"invalid-feedback\">\r\n                                <div *ngIf=\"providerControl.email.errors.required\">{{'providers.create.error_messages.message5' | translate}}</div>\r\n                                <div *ngIf=\"providerControl.email.errors.email\">{{'providers.create.error_messages.message6' | translate}}</div>\r\n                            </div>\r\n                        </div>\r\n                    </div>\r\n                </div>\r\n                <div class=\"col-md-6\">\r\n                    <div [ngClass]=\"{ 'is-invalid': isSubmitted && providerControl.color.errors }\" class=\"form-group\">\r\n                        <label for=\"color\">{{'providers.create.fields.color' | translate}}\r\n                            <span class=\"text-danger\">&nbsp;*</span></label>\r\n                        <div class=\"position-relative has-icon-left\">\r\n                            <input (colorPickerChange)=\"editProviderForm.get('color').setValue($event)\" [colorPicker]=\"editProviderForm.get('color').value\" [cpCancelButton]=\"true\" [cpOKButton]=\"true\" [style.background]=\"editProviderForm.get('color').value\" [value]=\"editProviderForm.get('color').value\" class=\"form-control\" formControlName=\"color\" id=\"color\">\r\n                            <div class=\"form-control-position\"><i class=\"ft-droplet\"></i></div>\r\n                        </div>\r\n                        <div *ngIf=\"isSubmitted && providerControl.lastname.errors\" class=\"invalid-feedback\">\r\n                            <div *ngIf=\"providerControl.lastname.errors.required\">{{'providers.create.error_messages.message5' | translate}}</div>\r\n                        </div>\r\n                    </div>\r\n                </div>\r\n            </div>\r\n        </div>\r\n    </div>\r\n    <div class=\"modal-footer\">\r\n        <button (click)=\"onCancel()\" class=\"btn btn-cancel mb-0\" type=\"button\">{{'common.close' | translate}}</button>\r\n        <button class=\"btn btn-submit mb-0\" type=\"submit\">{{'common.update' | translate}}</button>\r\n    </div>\r\n</form>\r\n");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/modules/crm/providers/pages/providers-list/providers-list.component.html":
/*!********************************************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/modules/crm/providers/pages/providers-list/providers-list.component.html ***!
  \********************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<section>\r\n    <div class=\"row\">\r\n        <div class=\"col-sm-12\">\r\n            <div class=\"card pl-2 pr-2\">\r\n                <div class=\"card-header pl-0 pr-0 border-bottom\">\r\n                    <h4 class=\"main-title mb-0 mt-2\"><span>{{'providers.title' | translate}}</span></h4>\r\n                    <div class=\"card-buttons\">\r\n                        <a [routerLink]=\"['/appointments']\" class=\"btn btn-create mb-0\" tooltip=\"{{'appointments.title' | translate}}\"><i class=\"fa fa-calendar-plus-o\"></i><span>{{'appointments.title' | translate}}</span></a>\r\n                        <a (click)=\"openProviderCreateModal()\" *ngxPermissionsOnly=\"['admin', 'super_admin']\" class=\"btn btn-create mb-0\" tooltip=\"{{'common.create' | translate}}\"><i class=\"fa fa-plus\"></i></a>\r\n                    </div>\r\n                </div>\r\n                <div class=\"card-content pt-3 pb-3\">\r\n                    <div class=\"card-body\">\r\n                        <div class=\"table-responsive-xs table-responsive-sm table-responsive-md table-responsive-lg table-responsive-xl\">\r\n                            <table [dtOptions]=\"dtOptions\" [dtTrigger]=\"dtTrigger\" class=\"table table-bordered table-hover b4-datatable\" datatable id=\"provider_table\" width=\"100%\">\r\n                                <thead>\r\n                                <tr>\r\n                                    <th>#</th>\r\n                                    <th>{{'providers.columns.firstname' | translate}}</th>\r\n                                    <th>{{'providers.columns.lastname' | translate}}</th>\r\n                                    <th>{{'providers.columns.email' | translate}}</th>\r\n                                    <th>{{'providers.columns.color' | translate}}</th>\r\n                                    <th>{{'providers.columns.actions' | translate}}</th>\r\n                                </tr>\r\n                                </thead>\r\n                                <tbody *ngIf=\"providers?.length != 0\">\r\n                                <tr *ngFor=\"let provider of providers; index as i\">\r\n                                    <td class=\"text-center\">{{ i + 1 }}</td>\r\n                                    <td>{{provider.firstname}}</td>\r\n                                    <td>{{provider.lastname}}</td>\r\n                                    <td>{{provider.email}}</td>\r\n                                    <td>\r\n                                        <div [ngStyle]=\"{'background-color': provider.color}\" class=\"width-30 height-30\"></div>\r\n                                    </td>\r\n                                    <td class=\"actions-dropdown\">\r\n                                        <div class=\"btn-group\" dropdown>\r\n                                            <button aria-controls=\"dropdown-basic-1\" class=\"dropdown-toggle btn-action\" dropdownToggle id=\"button-basic-1\" type=\"button\">\r\n                                                <i class=\"fa fa-ellipsis-v\"></i></button>\r\n                                            <ul *dropdownMenu aria-labelledby=\"button-basic-1\" class=\"dropdown-menu animated fadeIn\" id=\"dropdown-basic-1\" role=\"menu\">\r\n                                                <li role=\"menuitem\">\r\n                                                    <a (click)=\"openProviderEditModal(provider)\" *ngxPermissionsOnly=\"['admin', 'super_admin']\" class=\"dropdown-item btn btn-edit btn-raised\"><i class=\"fa fa-pencil-square-o\" tooltip=\"{{'common.edit' | translate}}\"></i></a>\r\n                                                </li>\r\n                                                <li role=\"menuitem\">\r\n                                                    <a (click)=\"deleteProvider(provider.id)\" *ngxPermissionsOnly=\"['admin', 'super_admin']\" class=\"dropdown-item btn btn-delete btn-raised\"><i class=\"fa fa-trash-o\" tooltip=\"{{'common.delete' | translate}}\"></i></a>\r\n                                                </li>\r\n                                            </ul>\r\n                                        </div>\r\n                                    </td>\r\n                                </tr>\r\n                                </tbody>\r\n                                <tfoot *ngIf=\"providers?.length == 0\" class=\"tfoot_dt\">\r\n                                <tr>\r\n                                    <td class=\"no-data-available text-center\" colspan=\"5\">{{'common.datatable.sEmptyTable' | translate}}</td>\r\n                                </tr>\r\n                                </tfoot>\r\n                            </table>\r\n                        </div>\r\n                    </div>\r\n                </div>\r\n            </div>\r\n        </div>\r\n    </div>\r\n</section>\r\n");

/***/ }),

/***/ "./src/app/modules/crm/providers/components/create-provider/create-provider.component.scss":
/*!*************************************************************************************************!*\
  !*** ./src/app/modules/crm/providers/components/create-provider/create-provider.component.scss ***!
  \*************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL21vZHVsZXMvY3JtL3Byb3ZpZGVycy9jb21wb25lbnRzL2NyZWF0ZS1wcm92aWRlci9jcmVhdGUtcHJvdmlkZXIuY29tcG9uZW50LnNjc3MifQ== */");

/***/ }),

/***/ "./src/app/modules/crm/providers/components/create-provider/create-provider.component.ts":
/*!***********************************************************************************************!*\
  !*** ./src/app/modules/crm/providers/components/create-provider/create-provider.component.ts ***!
  \***********************************************************************************************/
/*! exports provided: CreateProviderComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CreateProviderComponent", function() { return CreateProviderComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var ngx_bootstrap_modal__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ngx-bootstrap/modal */ "./node_modules/ngx-bootstrap/modal/fesm5/ngx-bootstrap-modal.js");
/* harmony import */ var ngx_toastr__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ngx-toastr */ "./node_modules/ngx-toastr/fesm5/ngx-toastr.js");
/* harmony import */ var _ngx_translate_core__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @ngx-translate/core */ "./node_modules/@ngx-translate/core/fesm5/ngx-translate-core.js");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! rxjs */ "./node_modules/rxjs/_esm5/index.js");
/* harmony import */ var _core_services_provider_service__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../../../../../core/services/provider.service */ "./src/app/core/services/provider.service.ts");








var CreateProviderComponent = /** @class */ (function () {
    function CreateProviderComponent(translate, bsCreateProviderModalRef, formBuilder, toastr, providerService) {
        this.translate = translate;
        this.bsCreateProviderModalRef = bsCreateProviderModalRef;
        this.formBuilder = formBuilder;
        this.toastr = toastr;
        this.providerService = providerService;
        this.event = new _angular_core__WEBPACK_IMPORTED_MODULE_1__["EventEmitter"]();
        this.isSubmitted = false;
    }
    Object.defineProperty(CreateProviderComponent.prototype, "providerControl", {
        get: function () {
            return this.createProviderForm.controls;
        },
        enumerable: true,
        configurable: true
    });
    CreateProviderComponent.prototype.ngOnInit = function () {
        this.onClose = new rxjs__WEBPACK_IMPORTED_MODULE_6__["Subject"]();
        this.loadForm();
    };
    CreateProviderComponent.prototype.loadForm = function () {
        this.createProviderForm = this.formBuilder.group({
            firstname: [null, [_angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required, _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].maxLength(50)]],
            lastname: [null, [_angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required, _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].maxLength(50)]],
            email: [null, [_angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required, _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].email]],
            color: [null, _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required],
        });
    };
    CreateProviderComponent.prototype.onSubmit = function () {
        var _this = this;
        this.isSubmitted = true;
        if (this.createProviderForm.invalid) {
            return;
        }
        this.providerService.create(this.createProviderForm.value)
            .subscribe(function (data) {
            _this.toastr.success(_this.translate.instant('providers.messages.create'), _this.translate.instant('providers.title'));
            _this.event.emit({ data: true });
            _this.onCancel();
        }, function (error) {
            _this.onCancel();
        });
    };
    CreateProviderComponent.prototype.onCancel = function () {
        this.onClose.next(false);
        this.bsCreateProviderModalRef.hide();
    };
    CreateProviderComponent.ctorParameters = function () { return [
        { type: _ngx_translate_core__WEBPACK_IMPORTED_MODULE_5__["TranslateService"] },
        { type: ngx_bootstrap_modal__WEBPACK_IMPORTED_MODULE_3__["BsModalRef"] },
        { type: _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormBuilder"] },
        { type: ngx_toastr__WEBPACK_IMPORTED_MODULE_4__["ToastrService"] },
        { type: _core_services_provider_service__WEBPACK_IMPORTED_MODULE_7__["ProviderService"] }
    ]; };
    CreateProviderComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-create-provider',
            template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./create-provider.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/modules/crm/providers/components/create-provider/create-provider.component.html")).default,
            styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./create-provider.component.scss */ "./src/app/modules/crm/providers/components/create-provider/create-provider.component.scss")).default]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_ngx_translate_core__WEBPACK_IMPORTED_MODULE_5__["TranslateService"],
            ngx_bootstrap_modal__WEBPACK_IMPORTED_MODULE_3__["BsModalRef"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormBuilder"],
            ngx_toastr__WEBPACK_IMPORTED_MODULE_4__["ToastrService"],
            _core_services_provider_service__WEBPACK_IMPORTED_MODULE_7__["ProviderService"]])
    ], CreateProviderComponent);
    return CreateProviderComponent;
}());



/***/ }),

/***/ "./src/app/modules/crm/providers/components/edit-provider/edit-provider.component.scss":
/*!*********************************************************************************************!*\
  !*** ./src/app/modules/crm/providers/components/edit-provider/edit-provider.component.scss ***!
  \*********************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL21vZHVsZXMvY3JtL3Byb3ZpZGVycy9jb21wb25lbnRzL2VkaXQtcHJvdmlkZXIvZWRpdC1wcm92aWRlci5jb21wb25lbnQuc2NzcyJ9 */");

/***/ }),

/***/ "./src/app/modules/crm/providers/components/edit-provider/edit-provider.component.ts":
/*!*******************************************************************************************!*\
  !*** ./src/app/modules/crm/providers/components/edit-provider/edit-provider.component.ts ***!
  \*******************************************************************************************/
/*! exports provided: EditProviderComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "EditProviderComponent", function() { return EditProviderComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var ngx_bootstrap_modal__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ngx-bootstrap/modal */ "./node_modules/ngx-bootstrap/modal/fesm5/ngx-bootstrap-modal.js");
/* harmony import */ var ngx_toastr__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ngx-toastr */ "./node_modules/ngx-toastr/fesm5/ngx-toastr.js");
/* harmony import */ var _ngx_translate_core__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @ngx-translate/core */ "./node_modules/@ngx-translate/core/fesm5/ngx-translate-core.js");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! rxjs */ "./node_modules/rxjs/_esm5/index.js");
/* harmony import */ var _core_services_provider_service__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../../../../../core/services/provider.service */ "./src/app/core/services/provider.service.ts");








var EditProviderComponent = /** @class */ (function () {
    function EditProviderComponent(translate, bsEditProviderModalRef, formBuilder, providerService, toastr) {
        this.translate = translate;
        this.bsEditProviderModalRef = bsEditProviderModalRef;
        this.formBuilder = formBuilder;
        this.providerService = providerService;
        this.toastr = toastr;
        this.event = new _angular_core__WEBPACK_IMPORTED_MODULE_1__["EventEmitter"]();
        this.isSubmitted = false;
    }
    Object.defineProperty(EditProviderComponent.prototype, "providerControl", {
        get: function () {
            return this.editProviderForm.controls;
        },
        enumerable: true,
        configurable: true
    });
    EditProviderComponent.prototype.ngOnInit = function () {
        this.onClose = new rxjs__WEBPACK_IMPORTED_MODULE_6__["Subject"]();
        this.loadForm();
    };
    EditProviderComponent.prototype.loadForm = function () {
        this.editProviderForm = this.formBuilder.group({
            id: [this.provider.id],
            firstname: [this.provider.firstname, [_angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required, _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].maxLength(50)]],
            lastname: [this.provider.lastname, [_angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required, _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].maxLength(50)]],
            email: [this.provider.email, [_angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required, _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].email]],
            color: [this.provider.color, _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required]
        });
    };
    EditProviderComponent.prototype.onSubmit = function () {
        var _this = this;
        this.isSubmitted = true;
        if (this.editProviderForm.invalid) {
            return;
        }
        this.providerService.update(this.editProviderForm.value)
            .subscribe(function (data) {
            _this.toastr.success(_this.translate.instant('providers.messages.edit'), _this.translate.instant('providers.title'));
            _this.event.emit({ data: true });
            _this.onCancel();
        }, function (error) {
            _this.onCancel();
        });
    };
    EditProviderComponent.prototype.onCancel = function () {
        this.onClose.next(false);
        this.bsEditProviderModalRef.hide();
    };
    EditProviderComponent.ctorParameters = function () { return [
        { type: _ngx_translate_core__WEBPACK_IMPORTED_MODULE_5__["TranslateService"] },
        { type: ngx_bootstrap_modal__WEBPACK_IMPORTED_MODULE_3__["BsModalRef"] },
        { type: _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormBuilder"] },
        { type: _core_services_provider_service__WEBPACK_IMPORTED_MODULE_7__["ProviderService"] },
        { type: ngx_toastr__WEBPACK_IMPORTED_MODULE_4__["ToastrService"] }
    ]; };
    EditProviderComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-edit-provider',
            template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./edit-provider.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/modules/crm/providers/components/edit-provider/edit-provider.component.html")).default,
            styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./edit-provider.component.scss */ "./src/app/modules/crm/providers/components/edit-provider/edit-provider.component.scss")).default]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_ngx_translate_core__WEBPACK_IMPORTED_MODULE_5__["TranslateService"],
            ngx_bootstrap_modal__WEBPACK_IMPORTED_MODULE_3__["BsModalRef"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormBuilder"],
            _core_services_provider_service__WEBPACK_IMPORTED_MODULE_7__["ProviderService"],
            ngx_toastr__WEBPACK_IMPORTED_MODULE_4__["ToastrService"]])
    ], EditProviderComponent);
    return EditProviderComponent;
}());



/***/ }),

/***/ "./src/app/modules/crm/providers/pages/providers-list/providers-list.component.scss":
/*!******************************************************************************************!*\
  !*** ./src/app/modules/crm/providers/pages/providers-list/providers-list.component.scss ***!
  \******************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("::ng-deep .odd, .dataTables_empty {\n  display: none;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvbW9kdWxlcy9jcm0vcHJvdmlkZXJzL3BhZ2VzL3Byb3ZpZGVycy1saXN0L0M6XFxVc2Vyc1xcdGh1YW5cXE9uZURyaXZlXFxEZXNrdG9wXFxnbGF2YWwtdGh1YW5kaW5oL3NyY1xcYXBwXFxtb2R1bGVzXFxjcm1cXHByb3ZpZGVyc1xccGFnZXNcXHByb3ZpZGVycy1saXN0XFxwcm92aWRlcnMtbGlzdC5jb21wb25lbnQuc2NzcyIsInNyYy9hcHAvbW9kdWxlcy9jcm0vcHJvdmlkZXJzL3BhZ2VzL3Byb3ZpZGVycy1saXN0L3Byb3ZpZGVycy1saXN0LmNvbXBvbmVudC5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0ksYUFBQTtBQ0NKIiwiZmlsZSI6InNyYy9hcHAvbW9kdWxlcy9jcm0vcHJvdmlkZXJzL3BhZ2VzL3Byb3ZpZGVycy1saXN0L3Byb3ZpZGVycy1saXN0LmNvbXBvbmVudC5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiOjpuZy1kZWVwIC5vZGQsIC5kYXRhVGFibGVzX2VtcHR5IHtcclxuICAgIGRpc3BsYXk6IG5vbmVcclxufSIsIjo6bmctZGVlcCAub2RkLCAuZGF0YVRhYmxlc19lbXB0eSB7XG4gIGRpc3BsYXk6IG5vbmU7XG59Il19 */");

/***/ }),

/***/ "./src/app/modules/crm/providers/pages/providers-list/providers-list.component.ts":
/*!****************************************************************************************!*\
  !*** ./src/app/modules/crm/providers/pages/providers-list/providers-list.component.ts ***!
  \****************************************************************************************/
/*! exports provided: ProvidersListComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ProvidersListComponent", function() { return ProvidersListComponent; });
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
/* harmony import */ var _core_services_provider_service__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ../../../../../core/services/provider.service */ "./src/app/core/services/provider.service.ts");
/* harmony import */ var _core_services_authentication_service__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ../../../../../core/services/authentication.service */ "./src/app/core/services/authentication.service.ts");
/* harmony import */ var _components_create_provider_create_provider_component__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ../../components/create-provider/create-provider.component */ "./src/app/modules/crm/providers/components/create-provider/create-provider.component.ts");
/* harmony import */ var _components_edit_provider_edit_provider_component__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ../../components/edit-provider/edit-provider.component */ "./src/app/modules/crm/providers/components/edit-provider/edit-provider.component.ts");
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! ../../../../../../environments/environment */ "./src/environments/environment.ts");
/* harmony import */ var datatables_net__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! datatables.net */ "./node_modules/datatables.net/js/jquery.dataTables.js");
/* harmony import */ var datatables_net__WEBPACK_IMPORTED_MODULE_16___default = /*#__PURE__*/__webpack_require__.n(datatables_net__WEBPACK_IMPORTED_MODULE_16__);
/* harmony import */ var datatables_net_bs4__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! datatables.net-bs4 */ "./node_modules/datatables.net-bs4/js/dataTables.bootstrap4.js");
/* harmony import */ var datatables_net_bs4__WEBPACK_IMPORTED_MODULE_17___default = /*#__PURE__*/__webpack_require__.n(datatables_net_bs4__WEBPACK_IMPORTED_MODULE_17__);


















var ProvidersListComponent = /** @class */ (function () {
    function ProvidersListComponent(translate, ngxRolesService, http, toastr, modalService, exportAsService, authenticationService, providerService) {
        var _this = this;
        this.translate = translate;
        this.ngxRolesService = ngxRolesService;
        this.http = http;
        this.toastr = toastr;
        this.modalService = modalService;
        this.exportAsService = exportAsService;
        this.authenticationService = authenticationService;
        this.providerService = providerService;
        this.dtTrigger = new rxjs__WEBPACK_IMPORTED_MODULE_9__["Subject"]();
        this.dtOptions = {};
        this.providers = [];
        this.exportAsConfig = {
            type: 'pdf',
            elementIdOrContent: 'provider_table',
        };
        this.modalConfigs = {
            animated: true,
            keyboard: true,
            backdrop: true,
            ignoreBackdropClick: false,
            class: 'inmodal modal-dialog-centered modal-md animated fadeIn'
        };
        this.apiUrl = _environments_environment__WEBPACK_IMPORTED_MODULE_15__["environment"].apiUrl;
        this.authenticationService.loginUser.subscribe(function (x) { return _this.loginUser = x; });
    }
    ProvidersListComponent.prototype.ngOnInit = function () {
        this.loadProviderDatatable();
    };
    ProvidersListComponent.prototype.loadProviderDatatable = function () {
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
                    'width': '2%',
                    'target': [0]
                }, {
                    'sortable': true,
                    'target': [1]
                }, {
                    'sortable': true,
                    'target': [2]
                }, {
                    'sortable': true,
                    'target': [3]
                }, {
                    'sortable': false,
                    'target': [4]
                }, {
                    'sortable': false,
                    'width': '5%',
                    'target': [5]
                }
            ],
            buttons: [{
                    extend: 'csv',
                    title: this.translate.instant('providers.title'),
                    className: 'btn btn-datatable-gredient',
                    action: function (e, dt, node, config) {
                        that.exportFiles('csv');
                    }
                }, {
                    extend: 'excel',
                    title: this.translate.instant('providers.title'),
                    className: 'btn btn-datatable-gredient',
                    action: function (e, dt, node, config) {
                        that.exportFiles('xlsx');
                    }
                }, {
                    extend: 'pdf',
                    title: this.translate.instant('providers.title'),
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
                    .post(_this.apiUrl + '/api/all-providers', dataTablesParameters, {})
                    .subscribe(function (resp) {
                    if (resp) {
                        _this.providers = resp.data;
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
    ProvidersListComponent.prototype.exportFiles = function (type) {
        this.exportAsConfig.type = type;
        this.exportAsService.save(this.exportAsConfig, this.translate.instant('providers.title')).subscribe(function () {
        });
    };
    ProvidersListComponent.prototype.ngAfterViewInit = function () {
        this.dtTrigger.next();
    };
    ProvidersListComponent.prototype.ngOnDestroy = function () {
        this.dtTrigger.unsubscribe();
    };
    ProvidersListComponent.prototype.rerender = function () {
        var _this = this;
        this.dtElement.dtInstance.then(function (dtInstance) {
            dtInstance.destroy();
            setTimeout(function () {
                _this.dtTrigger.next();
                if (_this.providers.length > 0) {
                    $('.tfoot_dt').addClass('d-none');
                }
                else {
                    $('.tfoot_dt').removeClass('d-none');
                }
            });
        });
    };
    ProvidersListComponent.prototype.openProviderCreateModal = function () {
        var _this = this;
        this.modalRef = this.modalService.show(_components_create_provider_create_provider_component__WEBPACK_IMPORTED_MODULE_13__["CreateProviderComponent"], this.modalConfigs);
        this.modalRef.content.event.subscribe(function (data) {
            _this.rerender();
        });
    };
    ProvidersListComponent.prototype.openProviderEditModal = function (provider) {
        var _this = this;
        var modalConfig = {
            animated: true,
            keyboard: true,
            backdrop: true,
            ignoreBackdropClick: false,
            class: 'inmodal modal-dialog-centered modal-md animated fadeIn',
            initialState: {
                provider: provider
            }
        };
        this.modalRef = this.modalService.show(_components_edit_provider_edit_provider_component__WEBPACK_IMPORTED_MODULE_14__["EditProviderComponent"], modalConfig);
        this.modalRef.content.event.subscribe(function (data) {
            _this.rerender();
        });
    };
    ProvidersListComponent.prototype.deleteProvider = function (id) {
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
                _this.providerService.delete(id)
                    .subscribe(function (data) {
                    _this.toastr.success(_this.translate.instant('providers.messages.delete'), _this.translate.instant('providers.title'));
                    _this.rerender();
                });
            }
        });
    };
    ProvidersListComponent.ctorParameters = function () { return [
        { type: _ngx_translate_core__WEBPACK_IMPORTED_MODULE_7__["TranslateService"] },
        { type: ngx_permissions__WEBPACK_IMPORTED_MODULE_8__["NgxRolesService"] },
        { type: _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClient"] },
        { type: ngx_toastr__WEBPACK_IMPORTED_MODULE_6__["ToastrService"] },
        { type: ngx_bootstrap_modal__WEBPACK_IMPORTED_MODULE_4__["BsModalService"] },
        { type: ngx_export_as__WEBPACK_IMPORTED_MODULE_5__["ExportAsService"] },
        { type: _core_services_authentication_service__WEBPACK_IMPORTED_MODULE_12__["AuthenticationService"] },
        { type: _core_services_provider_service__WEBPACK_IMPORTED_MODULE_11__["ProviderService"] }
    ]; };
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewChild"])(angular_datatables__WEBPACK_IMPORTED_MODULE_3__["DataTableDirective"], { static: true }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", angular_datatables__WEBPACK_IMPORTED_MODULE_3__["DataTableDirective"])
    ], ProvidersListComponent.prototype, "dtElement", void 0);
    ProvidersListComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-providers-list',
            template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./providers-list.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/modules/crm/providers/pages/providers-list/providers-list.component.html")).default,
            styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./providers-list.component.scss */ "./src/app/modules/crm/providers/pages/providers-list/providers-list.component.scss")).default]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_ngx_translate_core__WEBPACK_IMPORTED_MODULE_7__["TranslateService"],
            ngx_permissions__WEBPACK_IMPORTED_MODULE_8__["NgxRolesService"],
            _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClient"],
            ngx_toastr__WEBPACK_IMPORTED_MODULE_6__["ToastrService"],
            ngx_bootstrap_modal__WEBPACK_IMPORTED_MODULE_4__["BsModalService"],
            ngx_export_as__WEBPACK_IMPORTED_MODULE_5__["ExportAsService"],
            _core_services_authentication_service__WEBPACK_IMPORTED_MODULE_12__["AuthenticationService"],
            _core_services_provider_service__WEBPACK_IMPORTED_MODULE_11__["ProviderService"]])
    ], ProvidersListComponent);
    return ProvidersListComponent;
}());



/***/ }),

/***/ "./src/app/modules/crm/providers/providers-routing.module.ts":
/*!*******************************************************************!*\
  !*** ./src/app/modules/crm/providers/providers-routing.module.ts ***!
  \*******************************************************************/
/*! exports provided: ProvidersRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ProvidersRoutingModule", function() { return ProvidersRoutingModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var ngx_permissions__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ngx-permissions */ "./node_modules/ngx-permissions/ngx-permissions.umd.js");
/* harmony import */ var ngx_permissions__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(ngx_permissions__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _pages_providers_list_providers_list_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./pages/providers-list/providers-list.component */ "./src/app/modules/crm/providers/pages/providers-list/providers-list.component.ts");





var routes = [
    {
        path: '',
        children: [
            {
                path: '',
                canActivate: [ngx_permissions__WEBPACK_IMPORTED_MODULE_3__["NgxPermissionsGuard"]],
                component: _pages_providers_list_providers_list_component__WEBPACK_IMPORTED_MODULE_4__["ProvidersListComponent"]
            }
        ]
    }
];
var ProvidersRoutingModule = /** @class */ (function () {
    function ProvidersRoutingModule() {
    }
    ProvidersRoutingModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)],
            exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]]
        })
    ], ProvidersRoutingModule);
    return ProvidersRoutingModule;
}());



/***/ }),

/***/ "./src/app/modules/crm/providers/providers.module.ts":
/*!***********************************************************!*\
  !*** ./src/app/modules/crm/providers/providers.module.ts ***!
  \***********************************************************/
/*! exports provided: ProvidersModule, HttpLoaderFactory */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ProvidersModule", function() { return ProvidersModule; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "HttpLoaderFactory", function() { return HttpLoaderFactory; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");
/* harmony import */ var ngx_bootstrap__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ngx-bootstrap */ "./node_modules/ngx-bootstrap/esm5/ngx-bootstrap.js");
/* harmony import */ var ngx_export_as__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ngx-export-as */ "./node_modules/ngx-export-as/fesm2015/ngx-export-as.js");
/* harmony import */ var ngx_editor__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ngx-editor */ "./node_modules/ngx-editor/fesm5/ngx-editor.js");
/* harmony import */ var ngx_permissions__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ngx-permissions */ "./node_modules/ngx-permissions/ngx-permissions.umd.js");
/* harmony import */ var ngx_permissions__WEBPACK_IMPORTED_MODULE_8___default = /*#__PURE__*/__webpack_require__.n(ngx_permissions__WEBPACK_IMPORTED_MODULE_8__);
/* harmony import */ var ngx_color_picker__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ngx-color-picker */ "./node_modules/ngx-color-picker/dist/ngx-color-picker.es5.js");
/* harmony import */ var _ngx_translate_core__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @ngx-translate/core */ "./node_modules/@ngx-translate/core/fesm5/ngx-translate-core.js");
/* harmony import */ var _ngx_translate_http_loader__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! @ngx-translate/http-loader */ "./node_modules/@ngx-translate/http-loader/fesm5/ngx-translate-http-loader.js");
/* harmony import */ var angular_datatables__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! angular-datatables */ "./node_modules/angular-datatables/index.js");
/* harmony import */ var _providers_routing_module__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ./providers-routing.module */ "./src/app/modules/crm/providers/providers-routing.module.ts");
/* harmony import */ var _shared_shared_module__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ../../../shared/shared.module */ "./src/app/shared/shared.module.ts");
/* harmony import */ var _pages_providers_list_providers_list_component__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! ./pages/providers-list/providers-list.component */ "./src/app/modules/crm/providers/pages/providers-list/providers-list.component.ts");
/* harmony import */ var _components_create_provider_create_provider_component__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! ./components/create-provider/create-provider.component */ "./src/app/modules/crm/providers/components/create-provider/create-provider.component.ts");
/* harmony import */ var _components_edit_provider_edit_provider_component__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! ./components/edit-provider/edit-provider.component */ "./src/app/modules/crm/providers/components/edit-provider/edit-provider.component.ts");


















var ProvidersModule = /** @class */ (function () {
    function ProvidersModule() {
    }
    ProvidersModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            declarations: [
                _pages_providers_list_providers_list_component__WEBPACK_IMPORTED_MODULE_15__["ProvidersListComponent"],
                _components_create_provider_create_provider_component__WEBPACK_IMPORTED_MODULE_16__["CreateProviderComponent"],
                _components_edit_provider_edit_provider_component__WEBPACK_IMPORTED_MODULE_17__["EditProviderComponent"]
            ],
            imports: [
                _angular_common__WEBPACK_IMPORTED_MODULE_3__["CommonModule"],
                _providers_routing_module__WEBPACK_IMPORTED_MODULE_13__["ProvidersRoutingModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormsModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_2__["ReactiveFormsModule"],
                ngx_permissions__WEBPACK_IMPORTED_MODULE_8__["NgxPermissionsModule"],
                angular_datatables__WEBPACK_IMPORTED_MODULE_12__["DataTablesModule"],
                ngx_export_as__WEBPACK_IMPORTED_MODULE_6__["ExportAsModule"],
                ngx_editor__WEBPACK_IMPORTED_MODULE_7__["NgxEditorModule"],
                ngx_color_picker__WEBPACK_IMPORTED_MODULE_9__["ColorPickerModule"],
                ngx_bootstrap__WEBPACK_IMPORTED_MODULE_5__["ModalModule"].forRoot(),
                ngx_bootstrap__WEBPACK_IMPORTED_MODULE_5__["TooltipModule"].forRoot(),
                ngx_bootstrap__WEBPACK_IMPORTED_MODULE_5__["BsDropdownModule"].forRoot(),
                _ngx_translate_core__WEBPACK_IMPORTED_MODULE_10__["TranslateModule"].forChild({
                    loader: {
                        provide: _ngx_translate_core__WEBPACK_IMPORTED_MODULE_10__["TranslateLoader"],
                        useFactory: (HttpLoaderFactory),
                        deps: [_angular_common_http__WEBPACK_IMPORTED_MODULE_4__["HttpClient"]]
                    }
                }),
                _shared_shared_module__WEBPACK_IMPORTED_MODULE_14__["SharedModule"]
            ],
            entryComponents: [
                _components_create_provider_create_provider_component__WEBPACK_IMPORTED_MODULE_16__["CreateProviderComponent"],
                _components_edit_provider_edit_provider_component__WEBPACK_IMPORTED_MODULE_17__["EditProviderComponent"]
            ],
            providers: []
        })
    ], ProvidersModule);
    return ProvidersModule;
}());

// Required for AOT compilation
function HttpLoaderFactory(http) {
    return new _ngx_translate_http_loader__WEBPACK_IMPORTED_MODULE_11__["TranslateHttpLoader"](http, './assets/i18n/', '.json');
}


/***/ })

}]);
//# sourceMappingURL=modules-crm-providers-providers-module.js.map