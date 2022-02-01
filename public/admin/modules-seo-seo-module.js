(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["modules-seo-seo-module"],{

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/modules/seo/components/create-seo/create-seo.component.html":
/*!*******************************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/modules/seo/components/create-seo/create-seo.component.html ***!
  \*******************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<div class=\"modal-header\">\r\n  <h2 class=\"modal-title font-weight-normal\">\r\n    <i aria-hidden=\"true\" class=\"fa fa-shopping-basket\"></i>&nbsp;{{'seo.title2' | translate}}\r\n  </h2>\r\n  <button (click)=\"bsModalRef.hide()\" aria-label=\"Close\" class=\"close\" data-dismiss=\"modal\" type=\"button\">\r\n    <span aria-hidden=\"true\">&times;</span></button>\r\n</div>\r\n<form (ngSubmit)=\"onSubmit()\" *ngIf=\"isFormLoaded\" [formGroup]=\"createSeoForm\" class=\"form\">\r\n  <div class=\"modal-body\">\r\n    <div class=\"form-body\">\r\n      <div class=\"row\">\r\n        <div class=\"col-md-12\">\r\n          <div class=\"form-group\">\r\n            <label for=\"attr\">{{'seo.create.fields.attr' | translate}}\r\n              <span class=\"text-danger\">&nbsp;*</span></label>\r\n            <input [ngClass]=\"{ 'is-invalid': isFormSubmitted && seoControl.attr.errors }\" class=\"form-control\"\r\n              formControlName=\"attr\" id=\"attr\" placeholder=\"{{'seo.create.placeholders.placeholder1' | translate }}\"\r\n              type=\"text\" />\r\n            <div *ngIf=\"isFormSubmitted && seoControl.attr.errors\" class=\"invalid-feedback\">\r\n              <div *ngIf=\"seoControl.attr.errors.required\">{{'seo.create.error_messages.message1' | translate}}</div>\r\n            </div>\r\n          </div>\r\n        </div>\r\n        <div class=\"col-md-12\">\r\n          <div class=\"form-group\">\r\n            <label for=\"value\">{{'seo.create.fields.value' | translate}}\r\n              <span class=\"text-danger\">&nbsp;*</span></label>\r\n            <input [ngClass]=\"{ 'is-invalid': isFormSubmitted && seoControl.value.errors }\" class=\"form-control\"\r\n              formControlName=\"value\" id=\"value\" placeholder=\"{{'seo.create.placeholders.placeholder2' | translate }}\"\r\n              type=\"text\" />\r\n            <div *ngIf=\"isFormSubmitted && seoControl.value.errors\" class=\"invalid-feedback\">\r\n              <div *ngIf=\"seoControl.value.errors.required\">{{'seo.create.error_messages.message2' | translate}}</div>\r\n              <div *ngIf=\"seoControl.value.errors.pattern\">{{'seo.create.error_messages.message2' | translate}}</div>\r\n            </div>\r\n          </div>\r\n        </div>\r\n        <div class=\"col-md-12\">\r\n          <div class=\"form-group\">\r\n            <label for=\"attr\">{{'seo.create.fields.default' | translate}}\r\n            </label>\r\n            <input class=\"form-control\" formControlName=\"default\" id=\"default\"\r\n              placeholder=\"{{'seo.create.placeholders.placeholder1' | translate }}\" type=\"text\" />\r\n          </div>\r\n        </div>\r\n        <div class=\"col-md-12\">\r\n          <div [ngClass]=\"{ 'is-invalid': isFormSubmitted && seoControl.type.errors }\" class=\"form-group\">\r\n            <label for=\"status\">{{'seo.create.fields.type' | translate}}&nbsp;<span class=\"text-danger\">*</span>\r\n            </label>\r\n            <ng-select [items]=\"types\" [searchable]=\"true\" [selectOnTab]=\"true\" bindLabel=\"label\" bindValue=\"id\" formControlName=\"type\"\r\n             placeholder=\"{{'seo.create.placeholders.placeholder4' | translate}}\"></ng-select>\r\n            <div *ngIf=\"isFormSubmitted && seoControl.type.errors\" class=\"invalid-feedback\">\r\n              <div *ngIf=\"seoControl.type.errors.required\">{{'seo.create.error_messages.message3' | translate}}</div>\r\n            </div>\r\n          </div>\r\n        </div>\r\n      </div>\r\n    </div>\r\n  </div>\r\n  <div class=\"modal-footer\">\r\n    <button (click)=\"onCancel()\" class=\"btn btn-cancel mb-0\" type=\"button\">{{'common.close' | translate}}</button>\r\n    <button class=\"btn btn-submit mb-0\" type=\"submit\">{{'common.create' | translate}}</button>\r\n  </div>\r\n</form>");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/modules/seo/components/edit-seo/edit-seo.component.html":
/*!***************************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/modules/seo/components/edit-seo/edit-seo.component.html ***!
  \***************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<div class=\"modal-header\">\r\n  <h2 class=\"modal-title font-weight-normal\">\r\n    <i aria-hidden=\"true\" class=\"fa fa-shopping-basket\"></i>&nbsp;{{'seo.title2' | translate}}\r\n  </h2>\r\n  <button (click)=\"bsModalRef.hide()\" aria-label=\"Close\" class=\"close\" data-dismiss=\"modal\" type=\"button\">\r\n    <span aria-hidden=\"true\">&times;</span></button>\r\n</div>\r\n<form (ngSubmit)=\"onSubmit()\" *ngIf=\"isFormLoaded\" [formGroup]=\"editSeoForm\" class=\"form\">\r\n  <div class=\"modal-body\">\r\n    <div class=\"form-body\">\r\n      <div class=\"row\">\r\n        <div class=\"col-md-12\">\r\n          <div class=\"form-group\">\r\n            <label for=\"attr\">{{'seo.create.fields.attr' | translate}}\r\n              <span class=\"text-danger\">&nbsp;*</span></label>\r\n            <input [ngClass]=\"{ 'is-invalid': isFormSubmitted && seoControl.attr.errors }\" class=\"form-control\"\r\n              formControlName=\"attr\" id=\"attr\" placeholder=\"{{'seo.create.placeholders.placeholder1' | translate }}\"\r\n              type=\"text\" />\r\n            <div *ngIf=\"isFormSubmitted && seoControl.attr.errors\" class=\"invalid-feedback\">\r\n              <div *ngIf=\"seoControl.attr.errors.required\">{{'seo.create.error_messages.message1' | translate}}</div>\r\n            </div>\r\n          </div>\r\n        </div>\r\n        <div class=\"col-md-12\">\r\n          <div class=\"form-group\">\r\n            <label for=\"value\">{{'seo.create.fields.value' | translate}}\r\n              <span class=\"text-danger\">&nbsp;*</span></label>\r\n            <input [ngClass]=\"{ 'is-invalid': isFormSubmitted && seoControl.value.errors }\" class=\"form-control\"\r\n              formControlName=\"value\" id=\"value\" placeholder=\"{{'seo.create.placeholders.placeholder2' | translate }}\"\r\n              type=\"text\" />\r\n            <div *ngIf=\"isFormSubmitted && seoControl.value.errors\" class=\"invalid-feedback\">\r\n              <div *ngIf=\"seoControl.value.errors.required\">{{'seo.create.error_messages.message2' | translate}}</div>\r\n              <div *ngIf=\"seoControl.value.errors.pattern\">{{'seo.create.error_messages.message2' | translate}}</div>\r\n            </div>\r\n          </div>\r\n        </div>\r\n        <div class=\"col-md-12\">\r\n          <div class=\"form-group\">\r\n            <label for=\"attr\">{{'seo.create.fields.default' | translate}}\r\n            </label>\r\n            <input class=\"form-control\" formControlName=\"default\" id=\"default\"\r\n              placeholder=\"{{'seo.create.placeholders.placeholder1' | translate }}\" type=\"text\" />\r\n          </div>\r\n        </div>\r\n        <div class=\"col-md-12\">\r\n          <div [ngClass]=\"{ 'is-invalid': isFormSubmitted && seoControl.type.errors }\" class=\"form-group\">\r\n            <label for=\"status\">{{'seo.create.fields.type' | translate}}&nbsp;<span class=\"text-danger\">*</span>\r\n            </label>\r\n            <ng-select [items]=\"types\" [searchable]=\"true\" [selectOnTab]=\"true\" bindLabel=\"label\" bindValue=\"id\" formControlName=\"type\"\r\n             placeholder=\"{{'seo.create.placeholders.placeholder4' | translate}}\"></ng-select>\r\n            <div *ngIf=\"isFormSubmitted && seoControl.type.errors\" class=\"invalid-feedback\">\r\n              <div *ngIf=\"seoControl.type.errors.required\">{{'seo.create.error_messages.message3' | translate}}</div>\r\n            </div>\r\n          </div>\r\n        </div>\r\n      </div>\r\n    </div>\r\n  </div>\r\n  <div class=\"modal-footer\">\r\n    <button (click)=\"onCancel()\" class=\"btn btn-cancel mb-0\" type=\"button\">{{'common.close' | translate}}</button>\r\n    <button class=\"btn btn-submit mb-0\" type=\"submit\">{{'common.create' | translate}}</button>\r\n  </div>\r\n</form>");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/modules/seo/pages/seo-list/seo-list.component.html":
/*!**********************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/modules/seo/pages/seo-list/seo-list.component.html ***!
  \**********************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<section class=\"hide_empty_message\">\r\n    <div class=\"row\">\r\n        <div class=\"col-sm-12\">\r\n            <div class=\"card pl-2 pr-2\">\r\n                <div class=\"card-header pl-0 pr-0 border-bottom\">\r\n                    <h4 class=\"main-title mt-2\"><span>{{'seo.title' | translate}}</span></h4>\r\n                    <div class=\"card-buttons\">\r\n                        <button (click)=\"openSeoCreateModal()\" *ngxPermissionsOnly=\"['admin', 'super_admin', 'seo_create']\" class=\"btn btn-create mb-0\" tooltip=\"{{'common.create' | translate}}\">\r\n                            <i class=\"fa fa-plus\"></i></button>\r\n                    </div>\r\n                </div>\r\n                <!-- Card content -->\r\n                <div class=\"card-content pt-3 pb-3\">\r\n                    <!-- Card body -->\r\n                    <div class=\"card-body\">\r\n                        <!-- Items list datatable -->\r\n                        <div class=\"row\">\r\n                            <div class=\"col-sm-12\">\r\n                                <div class=\"table-responsive-xs table-responsive-sm table-responsive-md table-responsive-lg table-responsive-xl\">\r\n                                    <table [dtOptions]=\"dtOptions\" [dtTrigger]=\"dtTrigger\" class=\"table table-bordered table-hover b4-datatable\" datatable id=\"seo_table\" width=\"100%\">\r\n                                        <thead>\r\n                                        <tr>\r\n                                            <th>{{'seo.columns.attr' | translate}}</th>\r\n                                            <th>{{'seo.columns.value' | translate}}</th>\r\n                                            <th>{{'seo.columns.type' | translate}}</th>\r\n                                            <th>{{'seo.columns.default' | translate}}</th>\r\n                                            <th>{{'seo.columns.page' | translate}}</th>\r\n                                            <th>{{'common.actions' | translate}}</th>\r\n                                        </tr>\r\n                                        </thead>\r\n                                        <tbody>\r\n                                        <tr *ngFor=\"let item of seos; index as i\">\r\n                                            <td>{{item.attr}}</td>\r\n                                            <td>{{item.value}}</td>\r\n                                            <td>\r\n                                              {{item.type}}\r\n                                            </td>\r\n                                            <td>{{item.default}}</td>\r\n                                            <td>{{item.symbol}}</td>\r\n                                            <td class=\"actions-dropdown\">\r\n                                                <div class=\"btn-group\" dropdown>\r\n                                                    <button aria-controls=\"dropdown-basic-1\" class=\"dropdown-toggle btn-action\" dropdownToggle id=\"button-basic-1\" type=\"button\">\r\n                                                        <i class=\"fa fa-ellipsis-v\"></i></button>\r\n                                                    <ul *dropdownMenu aria-labelledby=\"button-basic-1\" class=\"dropdown-menu animated fadeIn\" id=\"dropdown-basic-1\" role=\"menu\">\r\n                                                        <li *ngxPermissionsOnly=\"['admin', 'super_admin', 'seo_edit']\" role=\"menuitem\">\r\n                                                            <a (click)=\"openSeoEditModal(item)\" class=\"dropdown-item btn btn-edit btn-raised\"><i class=\"fa fa-pencil-square-o\" tooltip=\"{{'common.edit' | translate}}\"></i></a>\r\n                                                        </li>\r\n                                                        <li *ngxPermissionsOnly=\"['admin', 'super_admin', 'seo_delete']\" role=\"menuitem\">\r\n                                                            <a (click)=\"deleteSeo(item.id)\" class=\"dropdown-item btn btn-delete btn-raised\"><i class=\"fa fa-trash-o\" tooltip=\"{{'common.delete' | translate}}\"></i></a>\r\n                                                        </li>\r\n                                                    </ul>\r\n                                                </div>\r\n                                            </td>\r\n                                        </tr>\r\n                                        </tbody>\r\n                                        <tfoot *ngIf=\"items?.length == 0\" class=\"tfoot_dt\">\r\n                                        <tr>\r\n                                            <td class=\"no-data-available text-center\" colspan=\"6\">{{'common.datatable.sEmptyTable' | translate}}</td>\r\n                                        </tr>\r\n                                        </tfoot>\r\n                                    </table>\r\n                                </div>\r\n                            </div>\r\n                        </div>\r\n                    </div>\r\n                </div>\r\n            </div>\r\n        </div>\r\n    </div>\r\n</section>\r\n");

/***/ }),

/***/ "./src/app/modules/seo/components/create-seo/create-seo.component.scss":
/*!*****************************************************************************!*\
  !*** ./src/app/modules/seo/components/create-seo/create-seo.component.scss ***!
  \*****************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL21vZHVsZXMvc2VvL2NvbXBvbmVudHMvY3JlYXRlLXNlby9jcmVhdGUtc2VvLmNvbXBvbmVudC5zY3NzIn0= */");

/***/ }),

/***/ "./src/app/modules/seo/components/create-seo/create-seo.component.ts":
/*!***************************************************************************!*\
  !*** ./src/app/modules/seo/components/create-seo/create-seo.component.ts ***!
  \***************************************************************************/
/*! exports provided: CreateSeoComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CreateSeoComponent", function() { return CreateSeoComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _ngx_translate_core__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ngx-translate/core */ "./node_modules/@ngx-translate/core/fesm5/ngx-translate-core.js");
/* harmony import */ var ngx_bootstrap__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ngx-bootstrap */ "./node_modules/ngx-bootstrap/esm5/ngx-bootstrap.js");
/* harmony import */ var ngx_toastr__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ngx-toastr */ "./node_modules/ngx-toastr/fesm5/ngx-toastr.js");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! rxjs */ "./node_modules/rxjs/_esm5/index.js");
/* harmony import */ var src_app_core_services_seo_service__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! src/app/core/services/seo.service */ "./src/app/core/services/seo.service.ts");









var CreateSeoComponent = /** @class */ (function () {
    function CreateSeoComponent(translate, bsModalRef, formBuilder, toastr, modalService, datepipe, seoService) {
        this.translate = translate;
        this.bsModalRef = bsModalRef;
        this.formBuilder = formBuilder;
        this.toastr = toastr;
        this.modalService = modalService;
        this.datepipe = datepipe;
        this.seoService = seoService;
        this.event = new _angular_core__WEBPACK_IMPORTED_MODULE_2__["EventEmitter"]();
        this.isFormSubmitted = false;
        this.isFormLoaded = false;
    }
    Object.defineProperty(CreateSeoComponent.prototype, "seoControl", {
        get: function () {
            return this.createSeoForm.controls;
        },
        enumerable: true,
        configurable: true
    });
    CreateSeoComponent.prototype.ngOnInit = function () {
        this.onClose = new rxjs__WEBPACK_IMPORTED_MODULE_7__["Subject"]();
        this.types = [
            {
                id: 1,
                label: "select in page"
            },
            {
                id: 0,
                label: "all"
            },
        ];
        this.loadForm();
    };
    CreateSeoComponent.prototype.loadForm = function () {
        this.createSeoForm = this.formBuilder.group({
            attr: [null, _angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].required],
            value: [null, _angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].required],
            type: [null, _angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].required],
            default: [null]
        });
        this.isFormLoaded = true;
    };
    CreateSeoComponent.prototype.onSubmit = function () {
        var _this = this;
        this.isFormSubmitted = true;
        if (this.createSeoForm.invalid) {
            return;
        }
        this.seoService.create(this.createSeoForm.value).subscribe(function (data) {
            _this.toastr.success(_this.translate.instant('seo.messages.create'), _this.translate.instant('seo.title'));
            _this.event.emit({ data: true });
            _this.onCancel();
        }, function (error) {
            _this.onCancel();
        });
    };
    CreateSeoComponent.prototype.onCancel = function () {
        this.onClose.next(false);
        this.bsModalRef.hide();
    };
    CreateSeoComponent.ctorParameters = function () { return [
        { type: _ngx_translate_core__WEBPACK_IMPORTED_MODULE_4__["TranslateService"] },
        { type: ngx_bootstrap__WEBPACK_IMPORTED_MODULE_5__["BsModalRef"] },
        { type: _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormBuilder"] },
        { type: ngx_toastr__WEBPACK_IMPORTED_MODULE_6__["ToastrService"] },
        { type: ngx_bootstrap__WEBPACK_IMPORTED_MODULE_5__["BsModalService"] },
        { type: _angular_common__WEBPACK_IMPORTED_MODULE_1__["DatePipe"] },
        { type: src_app_core_services_seo_service__WEBPACK_IMPORTED_MODULE_8__["SeoService"] }
    ]; };
    CreateSeoComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["Component"])({
            selector: 'app-create-seo',
            template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./create-seo.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/modules/seo/components/create-seo/create-seo.component.html")).default,
            styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./create-seo.component.scss */ "./src/app/modules/seo/components/create-seo/create-seo.component.scss")).default]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_ngx_translate_core__WEBPACK_IMPORTED_MODULE_4__["TranslateService"],
            ngx_bootstrap__WEBPACK_IMPORTED_MODULE_5__["BsModalRef"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormBuilder"],
            ngx_toastr__WEBPACK_IMPORTED_MODULE_6__["ToastrService"],
            ngx_bootstrap__WEBPACK_IMPORTED_MODULE_5__["BsModalService"],
            _angular_common__WEBPACK_IMPORTED_MODULE_1__["DatePipe"],
            src_app_core_services_seo_service__WEBPACK_IMPORTED_MODULE_8__["SeoService"]])
    ], CreateSeoComponent);
    return CreateSeoComponent;
}());



/***/ }),

/***/ "./src/app/modules/seo/components/edit-seo/edit-seo.component.scss":
/*!*************************************************************************!*\
  !*** ./src/app/modules/seo/components/edit-seo/edit-seo.component.scss ***!
  \*************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL21vZHVsZXMvc2VvL2NvbXBvbmVudHMvZWRpdC1zZW8vZWRpdC1zZW8uY29tcG9uZW50LnNjc3MifQ== */");

/***/ }),

/***/ "./src/app/modules/seo/components/edit-seo/edit-seo.component.ts":
/*!***********************************************************************!*\
  !*** ./src/app/modules/seo/components/edit-seo/edit-seo.component.ts ***!
  \***********************************************************************/
/*! exports provided: EditSeoComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "EditSeoComponent", function() { return EditSeoComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _ngx_translate_core__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ngx-translate/core */ "./node_modules/@ngx-translate/core/fesm5/ngx-translate-core.js");
/* harmony import */ var ngx_bootstrap__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ngx-bootstrap */ "./node_modules/ngx-bootstrap/esm5/ngx-bootstrap.js");
/* harmony import */ var ngx_toastr__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ngx-toastr */ "./node_modules/ngx-toastr/fesm5/ngx-toastr.js");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! rxjs */ "./node_modules/rxjs/_esm5/index.js");
/* harmony import */ var src_app_core_services_seo_service__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! src/app/core/services/seo.service */ "./src/app/core/services/seo.service.ts");









var EditSeoComponent = /** @class */ (function () {
    function EditSeoComponent(translate, bsModalRef, formBuilder, toastr, modalService, datepipe, seoService) {
        this.translate = translate;
        this.bsModalRef = bsModalRef;
        this.formBuilder = formBuilder;
        this.toastr = toastr;
        this.modalService = modalService;
        this.datepipe = datepipe;
        this.seoService = seoService;
        this.event = new _angular_core__WEBPACK_IMPORTED_MODULE_2__["EventEmitter"]();
        this.isFormSubmitted = false;
        this.isFormLoaded = false;
    }
    Object.defineProperty(EditSeoComponent.prototype, "seoControl", {
        get: function () {
            return this.editSeoForm.controls;
        },
        enumerable: true,
        configurable: true
    });
    EditSeoComponent.prototype.ngOnInit = function () {
        this.onClose = new rxjs__WEBPACK_IMPORTED_MODULE_7__["Subject"]();
        this.types = [
            {
                id: 1,
                label: "select in page"
            },
            {
                id: 0,
                label: "all"
            },
        ];
        this.loadForm();
    };
    EditSeoComponent.prototype.loadForm = function () {
        this.editSeoForm = this.formBuilder.group({
            id: [this.seo.id, _angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].required],
            attr: [this.seo.attr, _angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].required],
            value: [this.seo.value, _angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].required],
            type: [this.seo.type, _angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].required],
            default: [this.seo.default]
        });
        this.isFormLoaded = true;
    };
    EditSeoComponent.prototype.onSubmit = function () {
        var _this = this;
        this.isFormSubmitted = true;
        if (this.editSeoForm.invalid) {
            return;
        }
        this.seoService.update(this.editSeoForm.value).subscribe(function (data) {
            _this.toastr.success(_this.translate.instant('seo.messages.create'), _this.translate.instant('seo.title'));
            _this.event.emit({ data: true });
            _this.onCancel();
        }, function (error) {
            _this.onCancel();
        });
    };
    EditSeoComponent.prototype.onCancel = function () {
        this.onClose.next(false);
        this.bsModalRef.hide();
    };
    EditSeoComponent.ctorParameters = function () { return [
        { type: _ngx_translate_core__WEBPACK_IMPORTED_MODULE_4__["TranslateService"] },
        { type: ngx_bootstrap__WEBPACK_IMPORTED_MODULE_5__["BsModalRef"] },
        { type: _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormBuilder"] },
        { type: ngx_toastr__WEBPACK_IMPORTED_MODULE_6__["ToastrService"] },
        { type: ngx_bootstrap__WEBPACK_IMPORTED_MODULE_5__["BsModalService"] },
        { type: _angular_common__WEBPACK_IMPORTED_MODULE_1__["DatePipe"] },
        { type: src_app_core_services_seo_service__WEBPACK_IMPORTED_MODULE_8__["SeoService"] }
    ]; };
    EditSeoComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["Component"])({
            selector: 'app-edit-seo',
            template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./edit-seo.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/modules/seo/components/edit-seo/edit-seo.component.html")).default,
            styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./edit-seo.component.scss */ "./src/app/modules/seo/components/edit-seo/edit-seo.component.scss")).default]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_ngx_translate_core__WEBPACK_IMPORTED_MODULE_4__["TranslateService"],
            ngx_bootstrap__WEBPACK_IMPORTED_MODULE_5__["BsModalRef"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormBuilder"],
            ngx_toastr__WEBPACK_IMPORTED_MODULE_6__["ToastrService"],
            ngx_bootstrap__WEBPACK_IMPORTED_MODULE_5__["BsModalService"],
            _angular_common__WEBPACK_IMPORTED_MODULE_1__["DatePipe"],
            src_app_core_services_seo_service__WEBPACK_IMPORTED_MODULE_8__["SeoService"]])
    ], EditSeoComponent);
    return EditSeoComponent;
}());



/***/ }),

/***/ "./src/app/modules/seo/pages/seo-list/seo-list.component.scss":
/*!********************************************************************!*\
  !*** ./src/app/modules/seo/pages/seo-list/seo-list.component.scss ***!
  \********************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL21vZHVsZXMvc2VvL3BhZ2VzL3Nlby1saXN0L3Nlby1saXN0LmNvbXBvbmVudC5zY3NzIn0= */");

/***/ }),

/***/ "./src/app/modules/seo/pages/seo-list/seo-list.component.ts":
/*!******************************************************************!*\
  !*** ./src/app/modules/seo/pages/seo-list/seo-list.component.ts ***!
  \******************************************************************/
/*! exports provided: SeoListComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SeoListComponent", function() { return SeoListComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _ngx_translate_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @ngx-translate/core */ "./node_modules/@ngx-translate/core/fesm5/ngx-translate-core.js");
/* harmony import */ var angular_datatables__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! angular-datatables */ "./node_modules/angular-datatables/index.js");
/* harmony import */ var ngx_bootstrap__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ngx-bootstrap */ "./node_modules/ngx-bootstrap/esm5/ngx-bootstrap.js");
/* harmony import */ var ngx_export_as__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ngx-export-as */ "./node_modules/ngx-export-as/fesm2015/ngx-export-as.js");
/* harmony import */ var ngx_permissions__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ngx-permissions */ "./node_modules/ngx-permissions/ngx-permissions.umd.js");
/* harmony import */ var ngx_permissions__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(ngx_permissions__WEBPACK_IMPORTED_MODULE_7__);
/* harmony import */ var ngx_toastr__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ngx-toastr */ "./node_modules/ngx-toastr/fesm5/ngx-toastr.js");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! rxjs */ "./node_modules/rxjs/_esm5/index.js");
/* harmony import */ var sweetalert2__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! sweetalert2 */ "./node_modules/sweetalert2/dist/sweetalert2.all.js");
/* harmony import */ var sweetalert2__WEBPACK_IMPORTED_MODULE_10___default = /*#__PURE__*/__webpack_require__.n(sweetalert2__WEBPACK_IMPORTED_MODULE_10__);
/* harmony import */ var src_app_core_services_authentication_service__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! src/app/core/services/authentication.service */ "./src/app/core/services/authentication.service.ts");
/* harmony import */ var src_environments_environment__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! src/environments/environment */ "./src/environments/environment.ts");
/* harmony import */ var _components_create_seo_create_seo_component__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ../../components/create-seo/create-seo.component */ "./src/app/modules/seo/components/create-seo/create-seo.component.ts");
/* harmony import */ var _components_edit_seo_edit_seo_component__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ../../components/edit-seo/edit-seo.component */ "./src/app/modules/seo/components/edit-seo/edit-seo.component.ts");
/* harmony import */ var src_app_core_services_seo_service__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! src/app/core/services/seo.service */ "./src/app/core/services/seo.service.ts");
















var SeoListComponent = /** @class */ (function () {
    function SeoListComponent(translate, ngxRolesService, http, toastr, modalService, exportAsService, seoService, authenticationService) {
        var _this = this;
        this.translate = translate;
        this.ngxRolesService = ngxRolesService;
        this.http = http;
        this.toastr = toastr;
        this.modalService = modalService;
        this.exportAsService = exportAsService;
        this.seoService = seoService;
        this.authenticationService = authenticationService;
        this.dtTrigger = new rxjs__WEBPACK_IMPORTED_MODULE_9__["Subject"]();
        this.dtOptions = {};
        this.seos = [];
        this.exportAsConfig = {
            type: 'pdf',
            elementIdOrContent: 'seo_table',
        };
        this.modalConfigs = {
            animated: true,
            keyboard: true,
            backdrop: true,
            ignoreBackdropClick: false,
            class: 'inmodal modal-dialog-centered modal-lg animated fadeIn'
        };
        this.apiUrl = src_environments_environment__WEBPACK_IMPORTED_MODULE_12__["environment"].apiUrl;
        this.authenticationService.loginUser.subscribe(function (x) { return _this.loginUser = x; });
    }
    SeoListComponent.prototype.ngOnInit = function () {
        this.loadItemDatatable();
    };
    SeoListComponent.prototype.loadItemDatatable = function () {
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
                    'width': '',
                    'target': [0]
                }, {
                    'sortable': true,
                    'width': '',
                    'target': [1]
                }, {
                    'sortable': false,
                    'width': '',
                    'target': [2]
                }, {
                    'sortable': true,
                    'width': '',
                    'target': [3]
                }, {
                    'sortable': true,
                    'width': '',
                    'target': [4]
                }, {
                    'sortable': false,
                    'width': '5%',
                    'target': [5]
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
                _this.http.post(_this.apiUrl + '/api/all-seo', dataTablesParameters, {}).subscribe(function (resp) {
                    if (resp) {
                        _this.seos = resp.data;
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
    SeoListComponent.prototype.ngAfterViewInit = function () {
        this.dtTrigger.next();
    };
    SeoListComponent.prototype.exportFiles = function (type) {
        this.exportAsConfig.type = type;
        this.exportAsService.save(this.exportAsConfig, this.translate.instant('seo.title')).subscribe(function () {
        });
    };
    SeoListComponent.prototype.openSeoCreateModal = function () {
        var _this = this;
        this.modalRef = this.modalService.show(_components_create_seo_create_seo_component__WEBPACK_IMPORTED_MODULE_13__["CreateSeoComponent"], this.modalConfigs);
        this.modalRef.content.event.subscribe(function (data) {
            _this.rerender();
        });
    };
    SeoListComponent.prototype.rerender = function () {
        var _this = this;
        this.dtElement.dtInstance.then(function (dtInstance) {
            dtInstance.destroy();
            setTimeout(function () {
                _this.dtTrigger.next();
                if (_this.seos.length > 0) {
                    $('.tfoot_dt').addClass('d-none');
                }
                else {
                    $('.tfoot_dt').removeClass('d-none');
                }
            });
        });
    };
    SeoListComponent.prototype.openSeoEditModal = function (seo) {
        var _this = this;
        var modalConfig = {
            animated: true,
            keyboard: true,
            backdrop: true,
            ignoreBackdropClick: false,
            class: 'inmodal modal-dialog-centered modal-lg animated fadeIn',
            initialState: {
                seo: seo
            }
        };
        this.modalRef = this.modalService.show(_components_edit_seo_edit_seo_component__WEBPACK_IMPORTED_MODULE_14__["EditSeoComponent"], modalConfig);
        this.modalRef.content.event.subscribe(function (data) {
            _this.rerender();
        });
    };
    SeoListComponent.prototype.deleteSeo = function (id) {
        var _this = this;
        sweetalert2__WEBPACK_IMPORTED_MODULE_10___default.a.fire({
            title: this.translate.instant('common.swal.title'),
            text: this.translate.instant('common.swal.text') + this.translate.instant('seo.title1'),
            type: 'warning',
            showCancelButton: true,
            confirmButtonText: this.translate.instant('common.swal.confirmButtonText'),
            cancelButtonText: this.translate.instant('common.swal.cancelButtonText')
        }).then(function (result) {
            if (result.value) {
                _this.seoService.delete(id)
                    .subscribe(function (data) {
                    _this.toastr.success(_this.translate.instant('seo.messages.delete'), _this.translate.instant('seo.title'));
                    _this.rerender();
                });
            }
        });
    };
    SeoListComponent.ctorParameters = function () { return [
        { type: _ngx_translate_core__WEBPACK_IMPORTED_MODULE_3__["TranslateService"] },
        { type: ngx_permissions__WEBPACK_IMPORTED_MODULE_7__["NgxRolesService"] },
        { type: _angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpClient"] },
        { type: ngx_toastr__WEBPACK_IMPORTED_MODULE_8__["ToastrService"] },
        { type: ngx_bootstrap__WEBPACK_IMPORTED_MODULE_5__["BsModalService"] },
        { type: ngx_export_as__WEBPACK_IMPORTED_MODULE_6__["ExportAsService"] },
        { type: src_app_core_services_seo_service__WEBPACK_IMPORTED_MODULE_15__["SeoService"] },
        { type: src_app_core_services_authentication_service__WEBPACK_IMPORTED_MODULE_11__["AuthenticationService"] }
    ]; };
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["ViewChild"])(angular_datatables__WEBPACK_IMPORTED_MODULE_4__["DataTableDirective"], { static: true }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", angular_datatables__WEBPACK_IMPORTED_MODULE_4__["DataTableDirective"])
    ], SeoListComponent.prototype, "dtElement", void 0);
    SeoListComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["Component"])({
            selector: 'app-seo-list',
            template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./seo-list.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/modules/seo/pages/seo-list/seo-list.component.html")).default,
            styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./seo-list.component.scss */ "./src/app/modules/seo/pages/seo-list/seo-list.component.scss")).default]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_ngx_translate_core__WEBPACK_IMPORTED_MODULE_3__["TranslateService"],
            ngx_permissions__WEBPACK_IMPORTED_MODULE_7__["NgxRolesService"],
            _angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpClient"],
            ngx_toastr__WEBPACK_IMPORTED_MODULE_8__["ToastrService"],
            ngx_bootstrap__WEBPACK_IMPORTED_MODULE_5__["BsModalService"],
            ngx_export_as__WEBPACK_IMPORTED_MODULE_6__["ExportAsService"],
            src_app_core_services_seo_service__WEBPACK_IMPORTED_MODULE_15__["SeoService"],
            src_app_core_services_authentication_service__WEBPACK_IMPORTED_MODULE_11__["AuthenticationService"]])
    ], SeoListComponent);
    return SeoListComponent;
}());



/***/ }),

/***/ "./src/app/modules/seo/seo-routing.module.ts":
/*!***************************************************!*\
  !*** ./src/app/modules/seo/seo-routing.module.ts ***!
  \***************************************************/
/*! exports provided: SeoRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SeoRoutingModule", function() { return SeoRoutingModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var ngx_permissions__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ngx-permissions */ "./node_modules/ngx-permissions/ngx-permissions.umd.js");
/* harmony import */ var ngx_permissions__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(ngx_permissions__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _pages_seo_list_seo_list_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./pages/seo-list/seo-list.component */ "./src/app/modules/seo/pages/seo-list/seo-list.component.ts");





var routes = [{
        path: '',
        children: [
            {
                path: '',
                canActivate: [ngx_permissions__WEBPACK_IMPORTED_MODULE_3__["NgxPermissionsGuard"]],
                component: _pages_seo_list_seo_list_component__WEBPACK_IMPORTED_MODULE_4__["SeoListComponent"]
            }
        ]
    }
];
var SeoRoutingModule = /** @class */ (function () {
    function SeoRoutingModule() {
    }
    SeoRoutingModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)],
            exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]]
        })
    ], SeoRoutingModule);
    return SeoRoutingModule;
}());



/***/ }),

/***/ "./src/app/modules/seo/seo.module.ts":
/*!*******************************************!*\
  !*** ./src/app/modules/seo/seo.module.ts ***!
  \*******************************************/
/*! exports provided: SeoModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SeoModule", function() { return SeoModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _pages_seo_list_seo_list_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./pages/seo-list/seo-list.component */ "./src/app/modules/seo/pages/seo-list/seo-list.component.ts");
/* harmony import */ var _seo_routing_module__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./seo-routing.module */ "./src/app/modules/seo/seo-routing.module.ts");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var ngx_permissions__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ngx-permissions */ "./node_modules/ngx-permissions/ngx-permissions.umd.js");
/* harmony import */ var ngx_permissions__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(ngx_permissions__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var angular_datatables__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! angular-datatables */ "./node_modules/angular-datatables/index.js");
/* harmony import */ var ngx_export_as__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ngx-export-as */ "./node_modules/ngx-export-as/fesm2015/ngx-export-as.js");
/* harmony import */ var ngx_editor__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ngx-editor */ "./node_modules/ngx-editor/fesm5/ngx-editor.js");
/* harmony import */ var _ng_select_ng_select__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @ng-select/ng-select */ "./node_modules/@ng-select/ng-select/fesm5/ng-select.js");
/* harmony import */ var ngx_bootstrap__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ngx-bootstrap */ "./node_modules/ngx-bootstrap/esm5/ngx-bootstrap.js");
/* harmony import */ var _ngx_translate_core__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! @ngx-translate/core */ "./node_modules/@ngx-translate/core/fesm5/ngx-translate-core.js");
/* harmony import */ var src_app_shared_shared_module__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! src/app/shared/shared.module */ "./src/app/shared/shared.module.ts");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");
/* harmony import */ var _components_create_seo_create_seo_component__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! ./components/create-seo/create-seo.component */ "./src/app/modules/seo/components/create-seo/create-seo.component.ts");
/* harmony import */ var _components_edit_seo_edit_seo_component__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! ./components/edit-seo/edit-seo.component */ "./src/app/modules/seo/components/edit-seo/edit-seo.component.ts");

















var SeoModule = /** @class */ (function () {
    function SeoModule() {
    }
    SeoModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            declarations: [_pages_seo_list_seo_list_component__WEBPACK_IMPORTED_MODULE_3__["SeoListComponent"], _pages_seo_list_seo_list_component__WEBPACK_IMPORTED_MODULE_3__["SeoListComponent"], _components_create_seo_create_seo_component__WEBPACK_IMPORTED_MODULE_15__["CreateSeoComponent"], _components_edit_seo_edit_seo_component__WEBPACK_IMPORTED_MODULE_16__["EditSeoComponent"]],
            imports: [
                _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
                _seo_routing_module__WEBPACK_IMPORTED_MODULE_4__["SeoRoutingModule"],
                _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_5__["FormsModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_5__["ReactiveFormsModule"],
                ngx_permissions__WEBPACK_IMPORTED_MODULE_6__["NgxPermissionsModule"],
                angular_datatables__WEBPACK_IMPORTED_MODULE_7__["DataTablesModule"],
                ngx_export_as__WEBPACK_IMPORTED_MODULE_8__["ExportAsModule"],
                ngx_editor__WEBPACK_IMPORTED_MODULE_9__["NgxEditorModule"],
                _ng_select_ng_select__WEBPACK_IMPORTED_MODULE_10__["NgSelectModule"],
                ngx_bootstrap__WEBPACK_IMPORTED_MODULE_11__["ModalModule"].forRoot(),
                ngx_bootstrap__WEBPACK_IMPORTED_MODULE_11__["TooltipModule"].forRoot(),
                ngx_bootstrap__WEBPACK_IMPORTED_MODULE_11__["BsDropdownModule"].forRoot(),
                _ngx_translate_core__WEBPACK_IMPORTED_MODULE_12__["TranslateModule"].forChild({
                    loader: {
                        provide: _ngx_translate_core__WEBPACK_IMPORTED_MODULE_12__["TranslateLoader"],
                        useFactory: (src_app_shared_shared_module__WEBPACK_IMPORTED_MODULE_13__["HttpLoaderFactory"]),
                        deps: [_angular_common_http__WEBPACK_IMPORTED_MODULE_14__["HttpClient"]]
                    }
                }),
                src_app_shared_shared_module__WEBPACK_IMPORTED_MODULE_13__["SharedModule"]
            ],
            entryComponents: [
                _components_create_seo_create_seo_component__WEBPACK_IMPORTED_MODULE_15__["CreateSeoComponent"],
                _components_edit_seo_edit_seo_component__WEBPACK_IMPORTED_MODULE_16__["EditSeoComponent"]
            ],
            providers: []
        })
    ], SeoModule);
    return SeoModule;
}());



/***/ })

}]);
//# sourceMappingURL=modules-seo-seo-module.js.map