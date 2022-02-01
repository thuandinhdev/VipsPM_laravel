(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["modules-posts-options-options-module"],{

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/modules/posts/options/components/options-create/options-create.component.html":
/*!*************************************************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/modules/posts/options/components/options-create/options-create.component.html ***!
  \*************************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<div class=\"modal-header\">\r\n    <h2 class=\"modal-title font-weight-normal\">\r\n        <i aria-hidden=\"true\" class=\"fa fa-list-alt\"></i>&nbsp;{{optionsLang.title1}}</h2>\r\n    <button (click)=\"bsModalRef.hide()\" aria-label=\"Close\" class=\"close\" data-dismiss=\"modal\" type=\"button\">\r\n        <span aria-hidden=\"true\">&times;</span></button>\r\n</div>\r\n<form (ngSubmit)=\"onSubmit()\" [formGroup]=\"createSpecificationForm\" class=\"bs4-forms\">\r\n    <div class=\"modal-body\">\r\n        <div class=\"form-body\">\r\n            <div class=\"row\">\r\n                <div class=\"col-md-12\">\r\n                    <div class=\"form-group\">\r\n                        <label for=\"name\">{{optionsLang.create.fields.name}}\r\n                            <span class=\"text-danger\">&nbsp;*</span>\r\n                        </label>\r\n                        <input [ngClass]=\"{ 'is-invalid': isFormSubmitted && optionsControl.name.errors }\" class=\"form-control\" formControlName=\"name\" id=\"name\" placeholder=\"{{optionsLang.create.placeholders.placeholder1}}\" type=\"text\"/>\r\n                        <div *ngIf=\"isFormSubmitted && optionsControl.name.errors\" class=\"invalid-feedback\">\r\n                            <div *ngIf=\"optionsControl.field_label.errors.required\">{{optionsLang.create.error_messages.message2}}</div>\r\n                        </div>\r\n                    </div>\r\n                </div>\r\n                <div class=\"col-md-12\">\r\n                    <div class=\"form-group\">\r\n                        <label for=\"description\">{{optionsLang.create.fields.description}}\r\n                        </label>\r\n                        <input [ngClass]=\"{ 'is-invalid': isFormSubmitted && optionsControl.description.errors }\" class=\"form-control\" formControlName=\"description\" id=\"description\" placeholder=\"{{optionsLang.create.placeholders.placeholder2}}\" type=\"text\"/>\r\n                        <div *ngIf=\"isFormSubmitted && optionsControl.description.errors\" class=\"invalid-feedback\">\r\n                            <div *ngIf=\"optionsControl.description.errors.required\">{{optionsLang.create.error_messages.message2}}</div>\r\n                        </div>\r\n                    </div>\r\n                </div>\r\n            </div>\r\n            <div class=\"row\" *ngIf=\"moduletype != 'manufacturers'\">\r\n                <div class=\"col-md-12\">\r\n                    <div class=\"table-responsive-xs table-responsive-sm table-responsive-md table-responsive-lg table-responsive-xl\">\r\n                        <ng-container formArrayName=\"options\">\r\n                            <table cellpadding=\"0\" cellspacing=\"0\" class=\"table table-bordered table-hover b4-datatable\" width=\"100%\">\r\n                                <thead>\r\n                                <tr>\r\n                                    <th>{{optionsLang.columns.name}}</th>\r\n                                    <th>\r\n                                        <button (click)=\"addOption()\" class=\"btn btn-raised mint-gradient white mb-0\" type=\"button\">\r\n                                            <i class=\"fa fa-plus\"></i></button>\r\n                                    </th>\r\n                                </tr>\r\n                                </thead>\r\n                                <tbody *ngIf=\"createSpecificationForm.get('options').controls?.length != 0\">\r\n                                <tr *ngFor=\"let option of createSpecificationForm.get('options').controls; let j = index\">\r\n                                    <ng-container [formGroupName]=\"j\">\r\n                                        <td class=\"width-80-per\">\r\n                                            <input [ngClass]=\"{ 'is-invalid': isFormSubmitted && optionsControl.options.controls[j].controls.name.errors }\" class=\"form-control\" formControlName=\"name\" type=\"text\"/>\r\n                                            <div *ngIf=\"isFormSubmitted &&  optionsControl.options.controls[j].controls.name.errors\" class=\"invalid-feedback\">\r\n                                                <div *ngIf=\"optionsControl.options.controls[j].controls.name.errors.required\">{{optionsLang.create.error_messages.message5}}</div>\r\n                                            </div>\r\n                                        </td>\r\n                                        <td>\r\n                                            <a (click)=\"deleteOption(j)\" class=\"btn btn-raised mint-gradient white\"><i class=\"fa fa-close\"></i></a>\r\n                                        </td>\r\n                                    </ng-container>\r\n                                </tr>\r\n                                </tbody>\r\n                            </table>\r\n                        </ng-container>\r\n                    </div>\r\n                </div>\r\n            </div>\r\n        </div>\r\n    </div>\r\n    <div class=\"modal-footer\">\r\n        <button (click)=\"onCancel()\" class=\"btn btn-cancel mb-0\" data-dismiss=\"modal\" type=\"button\">{{'common.close' | translate}}</button>\r\n        <button class=\"btn btn-submit mb-0\" type=\"submit\"><span>{{'common.create' | translate}}</span></button>\r\n    </div>\r\n</form>\r\n");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/modules/posts/options/components/options-edit/options-edit.component.html":
/*!*********************************************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/modules/posts/options/components/options-edit/options-edit.component.html ***!
  \*********************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<div class=\"modal-header\">\r\n    <h2 class=\"modal-title font-weight-normal\">\r\n        <i aria-hidden=\"true\" class=\"fa fa-list-alt\"></i>&nbsp;{{optionsLang.title2}}</h2>\r\n    <button (click)=\"bsModalRef.hide()\" aria-label=\"Close\" class=\"close\" data-dismiss=\"modal\" type=\"button\">\r\n        <span aria-hidden=\"true\">&times;</span></button>\r\n</div>\r\n<form (ngSubmit)=\"onSubmit()\" [formGroup]=\"editOptionsForm\" class=\"bs4-forms\">\r\n    <div class=\"modal-body\">\r\n        <div class=\"form-body\">\r\n            <div class=\"row\">\r\n                <div class=\"col-md-12\">\r\n                    <div class=\"form-group\">\r\n                        <label for=\"name\">{{optionsLang.create.fields.name}}\r\n                            <span class=\"text-danger\">&nbsp;*</span>\r\n                        </label>\r\n                        <input [ngClass]=\"{ 'is-invalid': isFormSubmitted && optionsControl.name.errors }\" class=\"form-control\" formControlName=\"name\" id=\"name\" placeholder=\"{{optionsLang.create.placeholders.placeholder1}}\" type=\"text\"/>\r\n                        <div *ngIf=\"isFormSubmitted && optionsControl.name.errors\" class=\"invalid-feedback\">\r\n                            <div *ngIf=\"optionsControl.field_label.errors.required\">{{optionsLang.create.error_messages.message2}}</div>\r\n                        </div>\r\n                    </div>\r\n                </div>\r\n                <div class=\"col-md-12\">\r\n                    <div class=\"form-group\">\r\n                        <label for=\"description\">{{optionsLang.create.fields.description}}\r\n                        </label>\r\n                        <input [ngClass]=\"{ 'is-invalid': isFormSubmitted && optionsControl.description.errors }\" class=\"form-control\" formControlName=\"description\" id=\"description\" placeholder=\"{{optionsLang.create.placeholders.placeholder2}}\" type=\"text\"/>\r\n                        <div *ngIf=\"isFormSubmitted && optionsControl.description.errors\" class=\"invalid-feedback\">\r\n                            <div *ngIf=\"optionsControl.description.errors.required\">{{optionsLang.create.error_messages.message2}}</div>\r\n                        </div>\r\n                    </div>\r\n                </div>\r\n            </div>\r\n            <div class=\"row\" *ngIf=\"moduletype != 'manufacturers'\">\r\n                <div class=\"col-md-12\">\r\n                    <div class=\"table-responsive-xs table-responsive-sm table-responsive-md table-responsive-lg table-responsive-xl\">\r\n                        <ng-container formArrayName=\"options\">\r\n                            <table cellpadding=\"0\" cellspacing=\"0\" class=\"table table-bordered table-hover b4-datatable\" width=\"100%\">\r\n                                <thead>\r\n                                <tr>\r\n                                    <th>{{optionsLang.columns.name}}</th>\r\n                                    <th>\r\n                                        <button (click)=\"addOption()\" class=\"btn btn-raised mint-gradient white mb-0\" type=\"button\">\r\n                                            <i class=\"fa fa-plus\"></i></button>\r\n                                    </th>\r\n                                </tr>\r\n                                </thead>\r\n                                <tbody *ngIf=\"editOptionsForm.get('options').controls?.length != 0\">\r\n                                <tr *ngFor=\"let option of editOptionsForm.get('options').controls; let j = index\">\r\n                                    <ng-container [formGroupName]=\"j\">\r\n                                        <td class=\"width-80-per\">\r\n                                            <input [ngClass]=\"{ 'is-invalid': isFormSubmitted && optionsControl.options.controls[j].controls.name.errors }\" class=\"form-control\" formControlName=\"name\" type=\"text\"/>\r\n                                            <div *ngIf=\"isFormSubmitted &&  optionsControl.options.controls[j].controls.name.errors\" class=\"invalid-feedback\">\r\n                                                <div *ngIf=\"optionsControl.options.controls[j].controls.name.errors.required\">{{optionsLang.create.error_messages.message5}}</div>\r\n                                            </div>\r\n                                        </td>\r\n                                        <td>\r\n                                            <a (click)=\"deleteOption(j)\" class=\"btn btn-raised mint-gradient white\"><i class=\"fa fa-close\"></i></a>\r\n                                        </td>\r\n                                    </ng-container>\r\n                                </tr>\r\n                                </tbody>\r\n                            </table>\r\n                        </ng-container>\r\n                    </div>\r\n                </div>\r\n            </div>\r\n        </div>\r\n    </div>\r\n    <div class=\"modal-footer\">\r\n        <button (click)=\"onCancel()\" class=\"btn btn-cancel mb-0\" data-dismiss=\"modal\" type=\"button\">{{'common.close' | translate}}</button>\r\n        <button class=\"btn btn-submit mb-0\" type=\"submit\"><span>{{'common.create' | translate}}</span></button>\r\n    </div>\r\n</form>\r\n\r\n");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/modules/posts/options/pages/options-lists/options-lists.component.html":
/*!******************************************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/modules/posts/options/pages/options-lists/options-lists.component.html ***!
  \******************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<section class=\"hide_empty_message\">\r\n    <div class=\"row\">\r\n        <div class=\"col-sm-12\">\r\n            <div class=\"card pl-2 pr-2\">\r\n                <div class=\"card-header pl-0 pr-0 border-bottom\">\r\n                    <h4 class=\"main-title mt-2\"><span>{{optionsLang.title}}</span></h4>\r\n                    <div *ngxPermissionsOnly=\"['admin', 'super_admin', 'options_create']\" class=\"card-buttons\">\r\n                        <a (click)=\"openOptionsCreateModal()\" class=\"btn btn-create mb-0\" tooltip=\"{{'common.create' | translate}}\"><i class=\"fa fa-plus\"></i></a>\r\n                    </div>\r\n                </div>\r\n                <div class=\"card-content pt-3 pb-3\">\r\n                    <div class=\"card-body\">\r\n                        <div class=\"row\">\r\n                            <div class=\"col-sm-12\">\r\n                                <div class=\"table-responsive-xs table-responsive-sm table-responsive-md table-responsive-lg table-responsive-xl\">\r\n                                    <table [dtOptions]=\"dtOptions\" [dtTrigger]=\"dtTrigger\" class=\"table table-bordered table-hover b4-datatable\" datatable id=\"specification_table\" width=\"100%\">\r\n                                        <thead>\r\n                                        <tr>\r\n                                            <th>{{optionsLang.columns.name}} #</th>\r\n                                            <th>{{optionsLang.columns.description}}</th>\r\n                                            <th>{{'common.actions' | translate}}</th>\r\n                                        </tr>\r\n                                        </thead>\r\n                                        <tbody>\r\n                                        <tr *ngFor=\"let option of options; index as i\">\r\n                                            <td><a>{{option.name}}</a></td>\r\n                                            <td>{{option.description}}</td>\r\n                                            <td class=\"actions-dropdown\">\r\n                                                <div class=\"btn-group\" dropdown>\r\n                                                    <button aria-controls=\"dropdown-basic-1\" class=\"dropdown-toggle btn-action\" dropdownToggle id=\"button-basic-1\" type=\"button\">\r\n                                                        <i class=\"fa fa-ellipsis-v\"></i></button>\r\n                                                    <ul *dropdownMenu aria-labelledby=\"button-basic-1\" class=\"dropdown-menu animated fadeIn\" id=\"dropdown-basic-1\" role=\"menu\">\r\n                                                        <li role=\"menuitem\">\r\n                                                            <a *ngxPermissionsOnly=\"['admin', 'super_admin', 'options_edit']\" (click)=\"openOptionsEditModal(option)\" class=\"dropdown-item btn btn-edit btn-raised\"><i class=\"fa fa-pencil-square-o\" tooltip=\"{{'common.edit' | translate}}\"></i></a>\r\n                                                        </li>\r\n                                                        <li role=\"menuitem\">\r\n                                                            <a (click)=\"deleteSpecification(option.id)\" *ngxPermissionsOnly=\"['admin', 'super_admin', 'options_delete']\" class=\"dropdown-item btn btn-delete btn-raised\"><i class=\"fa fa-trash-o\" tooltip=\"{{'common.delete' | translate}}\"></i></a>\r\n                                                        </li>\r\n                                                    </ul>\r\n                                                </div>\r\n                                            </td>\r\n                                        </tr>\r\n                                        </tbody>\r\n                                        <tfoot *ngIf=\"options?.length == 0\" class=\"tfoot_dt\">\r\n                                        <tr>\r\n                                            <td class=\"no-data-available text-center\" colspan=\"3\">{{'common.datatable.sEmptyTable' | translate}}</td>\r\n                                        </tr>\r\n                                        </tfoot>\r\n                                    </table>\r\n                                </div>\r\n                            </div>\r\n                        </div>\r\n                    </div>\r\n                </div>\r\n            </div>\r\n        </div>\r\n    </div>\r\n</section>\r\n");

/***/ }),

/***/ "./src/app/modules/posts/options/components/options-create/options-create.component.scss":
/*!***********************************************************************************************!*\
  !*** ./src/app/modules/posts/options/components/options-create/options-create.component.scss ***!
  \***********************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL21vZHVsZXMvcG9zdHMvb3B0aW9ucy9jb21wb25lbnRzL29wdGlvbnMtY3JlYXRlL29wdGlvbnMtY3JlYXRlLmNvbXBvbmVudC5zY3NzIn0= */");

/***/ }),

/***/ "./src/app/modules/posts/options/components/options-create/options-create.component.ts":
/*!*********************************************************************************************!*\
  !*** ./src/app/modules/posts/options/components/options-create/options-create.component.ts ***!
  \*********************************************************************************************/
/*! exports provided: OptionsCreateComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "OptionsCreateComponent", function() { return OptionsCreateComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var ngx_bootstrap_modal__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ngx-bootstrap/modal */ "./node_modules/ngx-bootstrap/modal/fesm5/ngx-bootstrap-modal.js");
/* harmony import */ var ngx_toastr__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ngx-toastr */ "./node_modules/ngx-toastr/fesm5/ngx-toastr.js");
/* harmony import */ var _ngx_translate_core__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @ngx-translate/core */ "./node_modules/@ngx-translate/core/fesm5/ngx-translate-core.js");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! rxjs */ "./node_modules/rxjs/_esm5/index.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _core_services_options_service__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../../../../../core/services/options.service */ "./src/app/core/services/options.service.ts");
/* harmony import */ var _core_services_helper_service__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../../../../../core/services/helper.service */ "./src/app/core/services/helper.service.ts");










var OptionsCreateComponent = /** @class */ (function () {
    function OptionsCreateComponent(translate, bsModalRef, formBuilder, toastr, router, optionsService, helperService) {
        this.translate = translate;
        this.bsModalRef = bsModalRef;
        this.formBuilder = formBuilder;
        this.toastr = toastr;
        this.router = router;
        this.optionsService = optionsService;
        this.helperService = helperService;
        this.event = new _angular_core__WEBPACK_IMPORTED_MODULE_1__["EventEmitter"]();
        this.isFormSubmitted = false;
        this.isPageLoaded = false;
    }
    Object.defineProperty(OptionsCreateComponent.prototype, "optionsControl", {
        get: function () {
            return this.createSpecificationForm.controls;
        },
        enumerable: true,
        configurable: true
    });
    OptionsCreateComponent.prototype.ngOnInit = function () {
        switch (this.router.url) {
            case '/specifications':
                this.moduletype = 'specifications';
                this.optionsLang = this.translate.instant('specifications');
                break;
            case '/properties':
                this.moduletype = 'properties';
                this.optionsLang = this.translate.instant('properties');
                break;
            case '/manufacturers':
                this.moduletype = 'manufacturers';
                this.optionsLang = this.translate.instant('manufacturers');
                break;
        }
        this.onClose = new rxjs__WEBPACK_IMPORTED_MODULE_6__["Subject"]();
        this.loadForms();
    };
    OptionsCreateComponent.prototype.loadForms = function () {
        this.createSpecificationForm = this.formBuilder.group({
            name: [null, _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required],
            options_types_indentify: ['thongso'],
            description: [null],
            options: this.formBuilder.array([]),
            status: [true, _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required],
        });
    };
    OptionsCreateComponent.prototype.addOption = function () {
        var control = this.createSpecificationForm.controls.options;
        control.push(this.formBuilder.group({
            name: [null, _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required]
        }));
    };
    OptionsCreateComponent.prototype.deleteOption = function (index) {
        var control = this.createSpecificationForm.controls.options;
        control.removeAt(index);
    };
    OptionsCreateComponent.prototype.onSubmit = function () {
        var _this = this;
        this.isFormSubmitted = true;
        if (this.createSpecificationForm.invalid) {
            return;
        }
        if (this.createSpecificationForm.value.field_type == 'dropdown') {
            this.createSpecificationForm.patchValue({ default_value: this.createSpecificationForm.value.options });
        }
        this.createSpecificationForm.value.options_types_indentify = this.moduletype;
        this.optionsService.create(this.createSpecificationForm.value)
            .subscribe(function (data) {
            _this.toastr.success(_this.optionsLang.messages.create, _this.optionsLang.title);
            _this.event.emit({ data: true });
            _this.onCancel();
        });
    };
    OptionsCreateComponent.prototype.onCancel = function () {
        this.onClose.next(false);
        this.bsModalRef.hide();
    };
    OptionsCreateComponent.ctorParameters = function () { return [
        { type: _ngx_translate_core__WEBPACK_IMPORTED_MODULE_5__["TranslateService"] },
        { type: ngx_bootstrap_modal__WEBPACK_IMPORTED_MODULE_3__["BsModalRef"] },
        { type: _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormBuilder"] },
        { type: ngx_toastr__WEBPACK_IMPORTED_MODULE_4__["ToastrService"] },
        { type: _angular_router__WEBPACK_IMPORTED_MODULE_7__["Router"] },
        { type: _core_services_options_service__WEBPACK_IMPORTED_MODULE_8__["OptionsService"] },
        { type: _core_services_helper_service__WEBPACK_IMPORTED_MODULE_9__["HelperService"] }
    ]; };
    OptionsCreateComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-options-create',
            template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./options-create.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/modules/posts/options/components/options-create/options-create.component.html")).default,
            styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./options-create.component.scss */ "./src/app/modules/posts/options/components/options-create/options-create.component.scss")).default]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_ngx_translate_core__WEBPACK_IMPORTED_MODULE_5__["TranslateService"],
            ngx_bootstrap_modal__WEBPACK_IMPORTED_MODULE_3__["BsModalRef"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormBuilder"],
            ngx_toastr__WEBPACK_IMPORTED_MODULE_4__["ToastrService"],
            _angular_router__WEBPACK_IMPORTED_MODULE_7__["Router"],
            _core_services_options_service__WEBPACK_IMPORTED_MODULE_8__["OptionsService"],
            _core_services_helper_service__WEBPACK_IMPORTED_MODULE_9__["HelperService"]])
    ], OptionsCreateComponent);
    return OptionsCreateComponent;
}());



/***/ }),

/***/ "./src/app/modules/posts/options/components/options-edit/options-edit.component.scss":
/*!*******************************************************************************************!*\
  !*** ./src/app/modules/posts/options/components/options-edit/options-edit.component.scss ***!
  \*******************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL21vZHVsZXMvcG9zdHMvb3B0aW9ucy9jb21wb25lbnRzL29wdGlvbnMtZWRpdC9vcHRpb25zLWVkaXQuY29tcG9uZW50LnNjc3MifQ== */");

/***/ }),

/***/ "./src/app/modules/posts/options/components/options-edit/options-edit.component.ts":
/*!*****************************************************************************************!*\
  !*** ./src/app/modules/posts/options/components/options-edit/options-edit.component.ts ***!
  \*****************************************************************************************/
/*! exports provided: OptionsEditComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "OptionsEditComponent", function() { return OptionsEditComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var ngx_bootstrap_modal__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ngx-bootstrap/modal */ "./node_modules/ngx-bootstrap/modal/fesm5/ngx-bootstrap-modal.js");
/* harmony import */ var ngx_toastr__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ngx-toastr */ "./node_modules/ngx-toastr/fesm5/ngx-toastr.js");
/* harmony import */ var _ngx_translate_core__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @ngx-translate/core */ "./node_modules/@ngx-translate/core/fesm5/ngx-translate-core.js");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! rxjs */ "./node_modules/rxjs/_esm5/index.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _core_services_options_service__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../../../../../core/services/options.service */ "./src/app/core/services/options.service.ts");
/* harmony import */ var _core_services_helper_service__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../../../../../core/services/helper.service */ "./src/app/core/services/helper.service.ts");










var OptionsEditComponent = /** @class */ (function () {
    function OptionsEditComponent(translate, bsModalRef, formBuilder, toastr, optionsService, router, helperService) {
        this.translate = translate;
        this.bsModalRef = bsModalRef;
        this.formBuilder = formBuilder;
        this.toastr = toastr;
        this.optionsService = optionsService;
        this.router = router;
        this.helperService = helperService;
        this.event = new _angular_core__WEBPACK_IMPORTED_MODULE_1__["EventEmitter"]();
        this.isFormSubmitted = false;
        this.isPageLoaded = false;
    }
    Object.defineProperty(OptionsEditComponent.prototype, "optionsControl", {
        get: function () {
            return this.editOptionsForm.controls;
        },
        enumerable: true,
        configurable: true
    });
    OptionsEditComponent.prototype.ngOnInit = function () {
        switch (this.router.url) {
            case '/specifications':
                this.moduletype = 'specifications';
                this.optionsLang = this.translate.instant('specifications');
                break;
            case '/properties':
                this.moduletype = 'properties';
                this.optionsLang = this.translate.instant('properties');
                break;
            case '/manufacturers':
                this.moduletype = 'manufacturers';
                this.optionsLang = this.translate.instant('manufacturers');
                break;
        }
        this.onClose = new rxjs__WEBPACK_IMPORTED_MODULE_6__["Subject"]();
        this.loadForms();
    };
    OptionsEditComponent.prototype.loadForms = function () {
        this.editOptionsForm = this.formBuilder.group({
            id: [this.options.id, _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required],
            name: [this.options.name, _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required],
            options_types_indentify: [this.options.options_types_indentify, _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required],
            description: [this.options.description],
            options: this.formBuilder.array([]),
            status: [true, _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required],
        });
        for (var _i = 0, _a = this.options.options; _i < _a.length; _i++) {
            var valueOption = _a[_i];
            var control = this.editOptionsForm.controls.options;
            control.push(this.formBuilder.group({
                name: [valueOption.name, _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required],
                id: [valueOption.id]
            }));
        }
        this.isPageLoaded = true;
    };
    OptionsEditComponent.prototype.addOption = function () {
        var control = this.editOptionsForm.controls.options;
        control.push(this.formBuilder.group({
            name: [null, _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required]
        }));
    };
    OptionsEditComponent.prototype.deleteOption = function (index) {
        var control = this.editOptionsForm.controls.options;
        control.removeAt(index);
    };
    OptionsEditComponent.prototype.onSubmit = function () {
        var _this = this;
        this.isFormSubmitted = true;
        if (this.editOptionsForm.invalid) {
            return;
        }
        this.optionsService.update(this.editOptionsForm.value)
            .subscribe(function (data) {
            _this.toastr.success(_this.optionsLang.messages.update, _this.optionsLang.title);
            _this.event.emit({ data: true });
            _this.onCancel();
        });
    };
    OptionsEditComponent.prototype.onCancel = function () {
        this.onClose.next(false);
        this.bsModalRef.hide();
    };
    OptionsEditComponent.ctorParameters = function () { return [
        { type: _ngx_translate_core__WEBPACK_IMPORTED_MODULE_5__["TranslateService"] },
        { type: ngx_bootstrap_modal__WEBPACK_IMPORTED_MODULE_3__["BsModalRef"] },
        { type: _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormBuilder"] },
        { type: ngx_toastr__WEBPACK_IMPORTED_MODULE_4__["ToastrService"] },
        { type: _core_services_options_service__WEBPACK_IMPORTED_MODULE_8__["OptionsService"] },
        { type: _angular_router__WEBPACK_IMPORTED_MODULE_7__["Router"] },
        { type: _core_services_helper_service__WEBPACK_IMPORTED_MODULE_9__["HelperService"] }
    ]; };
    OptionsEditComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-options-edit',
            template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./options-edit.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/modules/posts/options/components/options-edit/options-edit.component.html")).default,
            styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./options-edit.component.scss */ "./src/app/modules/posts/options/components/options-edit/options-edit.component.scss")).default]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_ngx_translate_core__WEBPACK_IMPORTED_MODULE_5__["TranslateService"],
            ngx_bootstrap_modal__WEBPACK_IMPORTED_MODULE_3__["BsModalRef"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormBuilder"],
            ngx_toastr__WEBPACK_IMPORTED_MODULE_4__["ToastrService"],
            _core_services_options_service__WEBPACK_IMPORTED_MODULE_8__["OptionsService"],
            _angular_router__WEBPACK_IMPORTED_MODULE_7__["Router"],
            _core_services_helper_service__WEBPACK_IMPORTED_MODULE_9__["HelperService"]])
    ], OptionsEditComponent);
    return OptionsEditComponent;
}());



/***/ }),

/***/ "./src/app/modules/posts/options/options-routing.module.ts":
/*!*****************************************************************!*\
  !*** ./src/app/modules/posts/options/options-routing.module.ts ***!
  \*****************************************************************/
/*! exports provided: OptionsRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "OptionsRoutingModule", function() { return OptionsRoutingModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var ngx_permissions__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ngx-permissions */ "./node_modules/ngx-permissions/ngx-permissions.umd.js");
/* harmony import */ var ngx_permissions__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(ngx_permissions__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _pages_options_lists_options_lists_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./pages/options-lists/options-lists.component */ "./src/app/modules/posts/options/pages/options-lists/options-lists.component.ts");
/* harmony import */ var _components_options_create_options_create_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./components/options-create/options-create.component */ "./src/app/modules/posts/options/components/options-create/options-create.component.ts");
/* harmony import */ var _components_options_edit_options_edit_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./components/options-edit/options-edit.component */ "./src/app/modules/posts/options/components/options-edit/options-edit.component.ts");







// import {SpecificationViewComponent} from './pages/specification-view/specification-view.component';
var routes = [{
        path: '',
        children: [
            {
                path: '',
                canActivate: [ngx_permissions__WEBPACK_IMPORTED_MODULE_3__["NgxPermissionsGuard"]],
                component: _pages_options_lists_options_lists_component__WEBPACK_IMPORTED_MODULE_4__["OptionsListsComponent"]
            },
            {
                path: 'create',
                canActivate: [ngx_permissions__WEBPACK_IMPORTED_MODULE_3__["NgxPermissionsGuard"]],
                data: {
                    breadcrumbs: {
                        text: 'common.create',
                        icon: 'fa fa-external-link',
                        show: true,
                        isHome: true
                    },
                    permissions: {
                        only: ['admin', 'super_admin', 'options_create']
                    }
                },
                component: _components_options_create_options_create_component__WEBPACK_IMPORTED_MODULE_5__["OptionsCreateComponent"]
            },
            {
                path: 'edit/:id',
                canActivate: [ngx_permissions__WEBPACK_IMPORTED_MODULE_3__["NgxPermissionsGuard"]],
                data: {
                    breadcrumbs: {
                        text: 'common.edit',
                        icon: 'fa fa-external-link',
                        show: true,
                        isHome: true
                    },
                    permissions: {
                        only: ['admin', 'super_admin', 'options_edit']
                    }
                },
                component: _components_options_edit_options_edit_component__WEBPACK_IMPORTED_MODULE_6__["OptionsEditComponent"]
            },
        ]
    }
];
var OptionsRoutingModule = /** @class */ (function () {
    function OptionsRoutingModule() {
    }
    OptionsRoutingModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)],
            exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]]
        })
    ], OptionsRoutingModule);
    return OptionsRoutingModule;
}());



/***/ }),

/***/ "./src/app/modules/posts/options/options.module.ts":
/*!*********************************************************!*\
  !*** ./src/app/modules/posts/options/options.module.ts ***!
  \*********************************************************/
/*! exports provided: OptionsModule, HttpLoaderFactory */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "OptionsModule", function() { return OptionsModule; });
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
/* harmony import */ var _options_routing_module__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ./options-routing.module */ "./src/app/modules/posts/options/options-routing.module.ts");
/* harmony import */ var _shared_shared_module__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ../../../shared/shared.module */ "./src/app/shared/shared.module.ts");
/* harmony import */ var _pages_options_lists_options_lists_component__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! ./pages/options-lists/options-lists.component */ "./src/app/modules/posts/options/pages/options-lists/options-lists.component.ts");
/* harmony import */ var _components_options_create_options_create_component__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! ./components/options-create/options-create.component */ "./src/app/modules/posts/options/components/options-create/options-create.component.ts");
/* harmony import */ var _components_options_edit_options_edit_component__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! ./components/options-edit/options-edit.component */ "./src/app/modules/posts/options/components/options-edit/options-edit.component.ts");


















var OptionsModule = /** @class */ (function () {
    function OptionsModule() {
    }
    OptionsModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            declarations: [
                _pages_options_lists_options_lists_component__WEBPACK_IMPORTED_MODULE_15__["OptionsListsComponent"],
                _components_options_create_options_create_component__WEBPACK_IMPORTED_MODULE_16__["OptionsCreateComponent"],
                _components_options_edit_options_edit_component__WEBPACK_IMPORTED_MODULE_17__["OptionsEditComponent"],
            ],
            imports: [
                _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
                _options_routing_module__WEBPACK_IMPORTED_MODULE_13__["OptionsRoutingModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_3__["ReactiveFormsModule"],
                ngx_permissions__WEBPACK_IMPORTED_MODULE_8__["NgxPermissionsModule"],
                angular_datatables__WEBPACK_IMPORTED_MODULE_12__["DataTablesModule"],
                ngx_export_as__WEBPACK_IMPORTED_MODULE_6__["ExportAsModule"],
                ngx_editor__WEBPACK_IMPORTED_MODULE_7__["NgxEditorModule"],
                _ng_select_ng_select__WEBPACK_IMPORTED_MODULE_9__["NgSelectModule"],
                ngx_bootstrap__WEBPACK_IMPORTED_MODULE_5__["ModalModule"].forRoot(),
                ngx_bootstrap__WEBPACK_IMPORTED_MODULE_5__["DatepickerModule"].forRoot(),
                ngx_bootstrap__WEBPACK_IMPORTED_MODULE_5__["BsDatepickerModule"].forRoot(),
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
                _components_options_create_options_create_component__WEBPACK_IMPORTED_MODULE_16__["OptionsCreateComponent"],
                _components_options_edit_options_edit_component__WEBPACK_IMPORTED_MODULE_17__["OptionsEditComponent"],
            ]
        })
    ], OptionsModule);
    return OptionsModule;
}());

// Required for AOT compilation
function HttpLoaderFactory(http) {
    return new _ngx_translate_http_loader__WEBPACK_IMPORTED_MODULE_11__["TranslateHttpLoader"](http, './assets/i18n/', '.json');
}


/***/ }),

/***/ "./src/app/modules/posts/options/pages/options-lists/options-lists.component.scss":
/*!****************************************************************************************!*\
  !*** ./src/app/modules/posts/options/pages/options-lists/options-lists.component.scss ***!
  \****************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = (".hide_empty_message ::ng-deep .odd {\n  display: none;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvbW9kdWxlcy9wb3N0cy9vcHRpb25zL3BhZ2VzL29wdGlvbnMtbGlzdHMvQzpcXFVzZXJzXFx0aHVhblxcT25lRHJpdmVcXERlc2t0b3BcXGdsYXZhbC10aHVhbmRpbmgvc3JjXFxhcHBcXG1vZHVsZXNcXHBvc3RzXFxvcHRpb25zXFxwYWdlc1xcb3B0aW9ucy1saXN0c1xcb3B0aW9ucy1saXN0cy5jb21wb25lbnQuc2NzcyIsInNyYy9hcHAvbW9kdWxlcy9wb3N0cy9vcHRpb25zL3BhZ2VzL29wdGlvbnMtbGlzdHMvb3B0aW9ucy1saXN0cy5jb21wb25lbnQuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNJLGFBQUE7QUNDSiIsImZpbGUiOiJzcmMvYXBwL21vZHVsZXMvcG9zdHMvb3B0aW9ucy9wYWdlcy9vcHRpb25zLWxpc3RzL29wdGlvbnMtbGlzdHMuY29tcG9uZW50LnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyIuaGlkZV9lbXB0eV9tZXNzYWdlIDo6bmctZGVlcCAub2RkIHtcclxuICAgIGRpc3BsYXk6IG5vbmVcclxufSIsIi5oaWRlX2VtcHR5X21lc3NhZ2UgOjpuZy1kZWVwIC5vZGQge1xuICBkaXNwbGF5OiBub25lO1xufSJdfQ== */");

/***/ }),

/***/ "./src/app/modules/posts/options/pages/options-lists/options-lists.component.ts":
/*!**************************************************************************************!*\
  !*** ./src/app/modules/posts/options/pages/options-lists/options-lists.component.ts ***!
  \**************************************************************************************/
/*! exports provided: OptionsListsComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "OptionsListsComponent", function() { return OptionsListsComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var ngx_bootstrap_modal__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ngx-bootstrap/modal */ "./node_modules/ngx-bootstrap/modal/fesm5/ngx-bootstrap-modal.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");
/* harmony import */ var _ngx_translate_core__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ngx-translate/core */ "./node_modules/@ngx-translate/core/fesm5/ngx-translate-core.js");
/* harmony import */ var ngx_export_as__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ngx-export-as */ "./node_modules/ngx-export-as/fesm2015/ngx-export-as.js");
/* harmony import */ var ngx_toastr__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ngx-toastr */ "./node_modules/ngx-toastr/fesm5/ngx-toastr.js");
/* harmony import */ var _core_services_authentication_service__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../../../../../core/services/authentication.service */ "./src/app/core/services/authentication.service.ts");
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../../../../../../environments/environment */ "./src/environments/environment.ts");
/* harmony import */ var angular_datatables__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! angular-datatables */ "./node_modules/angular-datatables/index.js");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! rxjs */ "./node_modules/rxjs/_esm5/index.js");
/* harmony import */ var sweetalert2__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! sweetalert2 */ "./node_modules/sweetalert2/dist/sweetalert2.all.js");
/* harmony import */ var sweetalert2__WEBPACK_IMPORTED_MODULE_11___default = /*#__PURE__*/__webpack_require__.n(sweetalert2__WEBPACK_IMPORTED_MODULE_11__);
/* harmony import */ var datatables_net__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! datatables.net */ "./node_modules/datatables.net/js/jquery.dataTables.js");
/* harmony import */ var datatables_net__WEBPACK_IMPORTED_MODULE_12___default = /*#__PURE__*/__webpack_require__.n(datatables_net__WEBPACK_IMPORTED_MODULE_12__);
/* harmony import */ var datatables_net_bs4__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! datatables.net-bs4 */ "./node_modules/datatables.net-bs4/js/dataTables.bootstrap4.js");
/* harmony import */ var datatables_net_bs4__WEBPACK_IMPORTED_MODULE_13___default = /*#__PURE__*/__webpack_require__.n(datatables_net_bs4__WEBPACK_IMPORTED_MODULE_13__);
/* harmony import */ var _core_services_options_service__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ../../../../../core/services/options.service */ "./src/app/core/services/options.service.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _components_options_create_options_create_component__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! ../../components/options-create/options-create.component */ "./src/app/modules/posts/options/components/options-create/options-create.component.ts");
/* harmony import */ var _components_options_edit_options_edit_component__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! ../../components/options-edit/options-edit.component */ "./src/app/modules/posts/options/components/options-edit/options-edit.component.ts");


















var OptionsListsComponent = /** @class */ (function () {
    function OptionsListsComponent(translate, modalService, exportAsService, http, toastr, router, optionsService, authenticationService) {
        var _this = this;
        this.translate = translate;
        this.modalService = modalService;
        this.exportAsService = exportAsService;
        this.http = http;
        this.toastr = toastr;
        this.router = router;
        this.optionsService = optionsService;
        this.authenticationService = authenticationService;
        this.dtTrigger = new rxjs__WEBPACK_IMPORTED_MODULE_10__["Subject"]();
        this.dtOptions = {};
        this.options = [];
        this.exportAsConfig = {
            type: 'pdf',
            elementIdOrContent: 'specification_table',
        };
        this.modalConfigs = {
            animated: true,
            keyboard: true,
            backdrop: true,
            ignoreBackdropClick: false,
            class: 'inmodal modal-dialog-centered animated fadeIn modal-lg'
        };
        this.apiUrl = _environments_environment__WEBPACK_IMPORTED_MODULE_8__["environment"].apiUrl;
        this.authenticationService.loginUser.subscribe(function (x) { return _this.loginUser = x; });
    }
    OptionsListsComponent.prototype.ngOnInit = function () {
        switch (this.router.url) {
            case '/specifications':
                this.moduletype = 'specifications';
                this.optionsLang = this.translate.instant('specifications');
                break;
            case '/properties':
                this.moduletype = 'properties';
                this.optionsLang = this.translate.instant('properties');
                break;
            case '/manufacturers':
                this.moduletype = 'manufacturers';
                this.optionsLang = this.translate.instant('manufacturers');
                break;
        }
        this.loadDatatable();
    };
    OptionsListsComponent.prototype.loadDatatable = function () {
        var _this = this;
        var that = this;
        this.dtOptions = {
            pagingType: 'full_numbers',
            pageLength: that.loginUser.settings.tables_pagination_limit,
            serverSide: true,
            processing: true,
            dom: '<"html5buttons"B>ltfrtip',
            data: [],
            order: [0],
            columns: [
                {
                    'sortable': true,
                    'width': '40%',
                    'target': [0]
                },
                {
                    'sortable': true,
                    'width': '40%',
                    'target': [1]
                },
                {
                    'sortable': true,
                    'width': '20%',
                    'target': [2]
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
                _this.http.post(_this.apiUrl + '/api/all-options', Object.assign(dataTablesParameters, { moduletype: _this.moduletype }), {}).subscribe(function (resp) {
                    _this.options = resp.data;
                    _this.settings = resp;
                    _this.settings = _this.settings.settings;
                    callback({
                        recordsTotal: resp.recordsTotal,
                        recordsFiltered: resp.recordsFiltered,
                        data: [],
                    });
                });
            }
        };
    };
    OptionsListsComponent.prototype.exportFiles = function (type) {
        this.exportAsConfig.type = type;
        this.exportAsService.save(this.exportAsConfig, this.translate.instant('options.title')).subscribe(function () {
        });
    };
    OptionsListsComponent.prototype.ngAfterViewInit = function () {
        this.dtTrigger.next();
    };
    OptionsListsComponent.prototype.ngOnDestroy = function () {
        this.dtTrigger.unsubscribe();
    };
    OptionsListsComponent.prototype.rerender = function () {
        var _this = this;
        this.dtElement.dtInstance.then(function (dtInstance) {
            dtInstance.destroy();
            setTimeout(function () {
                _this.dtTrigger.next();
                if (_this.options.length > 0) {
                    $('.tfoot_dt').addClass('d-none');
                }
                else {
                    $('.tfoot_dt').removeClass('d-none');
                }
            });
        });
    };
    OptionsListsComponent.prototype.deleteSpecification = function (id) {
        var _this = this;
        sweetalert2__WEBPACK_IMPORTED_MODULE_11___default.a.fire({
            title: this.translate.instant('common.swal.title'),
            text: this.translate.instant('common.swal.text') + this.optionsLang.title,
            type: 'warning',
            showCancelButton: true,
            confirmButtonText: this.translate.instant('common.swal.confirmButtonText'),
            cancelButtonText: this.translate.instant('common.swal.cancelButtonText')
        }).then(function (result) {
            if (result.value) {
                _this.optionsService.delete(id).subscribe(function (data) {
                    _this.toastr.success(_this.optionsLang.messages.delete, _this.optionsLang.title);
                    _this.rerender();
                });
            }
        });
    };
    OptionsListsComponent.prototype.getTranslateStatus = function (statusKey) {
        // return this.specificationStatusKeyValue[statusKey];
        return [];
    };
    OptionsListsComponent.prototype.openOptionsCreateModal = function () {
        var _this = this;
        this.modalRef = this.modalService.show(_components_options_create_options_create_component__WEBPACK_IMPORTED_MODULE_16__["OptionsCreateComponent"], this.modalConfigs);
        this.modalRef.content.event.subscribe(function (data) {
            _this.rerender();
        });
    };
    OptionsListsComponent.prototype.openOptionsEditModal = function (specification) {
        var _this = this;
        this.optionsService.getById(specification.id)
            .subscribe(function (resp) {
            var modalConfig = {
                animated: true,
                keyboard: true,
                backdrop: true,
                ignoreBackdropClick: false,
                class: 'inmodal modal-dialog-centered animated fadeIn modal-lg',
                initialState: {
                    options: resp
                }
            };
            _this.modalRef = _this.modalService.show(_components_options_edit_options_edit_component__WEBPACK_IMPORTED_MODULE_17__["OptionsEditComponent"], modalConfig);
            _this.modalRef.content.event.subscribe(function (data) {
                _this.rerender();
            });
        });
    };
    OptionsListsComponent.ctorParameters = function () { return [
        { type: _ngx_translate_core__WEBPACK_IMPORTED_MODULE_4__["TranslateService"] },
        { type: ngx_bootstrap_modal__WEBPACK_IMPORTED_MODULE_2__["BsModalService"] },
        { type: ngx_export_as__WEBPACK_IMPORTED_MODULE_5__["ExportAsService"] },
        { type: _angular_common_http__WEBPACK_IMPORTED_MODULE_3__["HttpClient"] },
        { type: ngx_toastr__WEBPACK_IMPORTED_MODULE_6__["ToastrService"] },
        { type: _angular_router__WEBPACK_IMPORTED_MODULE_15__["Router"] },
        { type: _core_services_options_service__WEBPACK_IMPORTED_MODULE_14__["OptionsService"] },
        { type: _core_services_authentication_service__WEBPACK_IMPORTED_MODULE_7__["AuthenticationService"] }
    ]; };
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewChild"])(angular_datatables__WEBPACK_IMPORTED_MODULE_9__["DataTableDirective"], { static: true }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", angular_datatables__WEBPACK_IMPORTED_MODULE_9__["DataTableDirective"])
    ], OptionsListsComponent.prototype, "dtElement", void 0);
    OptionsListsComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-options-lists',
            template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./options-lists.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/modules/posts/options/pages/options-lists/options-lists.component.html")).default,
            styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./options-lists.component.scss */ "./src/app/modules/posts/options/pages/options-lists/options-lists.component.scss")).default]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_ngx_translate_core__WEBPACK_IMPORTED_MODULE_4__["TranslateService"],
            ngx_bootstrap_modal__WEBPACK_IMPORTED_MODULE_2__["BsModalService"],
            ngx_export_as__WEBPACK_IMPORTED_MODULE_5__["ExportAsService"],
            _angular_common_http__WEBPACK_IMPORTED_MODULE_3__["HttpClient"],
            ngx_toastr__WEBPACK_IMPORTED_MODULE_6__["ToastrService"],
            _angular_router__WEBPACK_IMPORTED_MODULE_15__["Router"],
            _core_services_options_service__WEBPACK_IMPORTED_MODULE_14__["OptionsService"],
            _core_services_authentication_service__WEBPACK_IMPORTED_MODULE_7__["AuthenticationService"]])
    ], OptionsListsComponent);
    return OptionsListsComponent;
}());



/***/ })

}]);
//# sourceMappingURL=modules-posts-options-options-module.js.map