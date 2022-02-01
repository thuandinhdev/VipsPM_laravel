(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["modules-sales-items-items-module"],{

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/modules/sales/items/components/create-item/create-item.component.html":
/*!*****************************************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/modules/sales/items/components/create-item/create-item.component.html ***!
  \*****************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<div class=\"modal-header\">\r\n    <h2 class=\"modal-title font-weight-normal\">\r\n        <i aria-hidden=\"true\" class=\"fa fa-shopping-basket\"></i>&nbsp;{{'items.title2' | translate}}</h2>\r\n    <button (click)=\"bsModalRef.hide()\" aria-label=\"Close\" class=\"close\" data-dismiss=\"modal\" type=\"button\">\r\n        <span aria-hidden=\"true\">&times;</span></button>\r\n</div>\r\n<form (ngSubmit)=\"onSubmit()\" *ngIf=\"isFormLoaded\" [formGroup]=\"createItemForm\" class=\"form\">\r\n    <div class=\"modal-body\">\r\n        <div class=\"form-body\">\r\n            <div class=\"row\">\r\n                <div class=\"col-md-6\">\r\n                    <div class=\"form-group\">\r\n                        <label for=\"name\">{{'items.create.fields.name' | translate}}\r\n                            <span class=\"text-danger\">&nbsp;*</span></label>\r\n                        <input [ngClass]=\"{ 'is-invalid': isFormSubmitted && itemControl.name.errors }\" class=\"form-control\" formControlName=\"name\" id=\"name\" placeholder=\"{{'items.create.placeholders.placeholder1' | translate }}\" type=\"text\"/>\r\n                        <div *ngIf=\"isFormSubmitted && itemControl.name.errors\" class=\"invalid-feedback\">\r\n                            <div *ngIf=\"itemControl.name.errors.required\">{{'items.create.error_messages.message1' | translate}}</div>\r\n                        </div>\r\n                    </div>\r\n                </div>\r\n                <div class=\"col-md-6\">\r\n                    <div class=\"form-group\">\r\n                        <label for=\"name\">{{'items.create.fields.price' | translate}}\r\n                            <span class=\"text-danger\">&nbsp;*</span></label>\r\n                        <input [ngClass]=\"{ 'is-invalid': isFormSubmitted && itemControl.price.errors }\" class=\"form-control\" formControlName=\"price\" id=\"price\" placeholder=\"{{'items.create.placeholders.placeholder2' | translate }}\" type=\"text\"/>\r\n                        <div *ngIf=\"isFormSubmitted && itemControl.price.errors\" class=\"invalid-feedback\">\r\n                            <div *ngIf=\"itemControl.price.errors.required\">{{'items.create.error_messages.message2' | translate}}</div>\r\n                            <div *ngIf=\"itemControl.price.errors.pattern\">{{'items.create.error_messages.message3' | translate}}</div>\r\n                        </div>\r\n                    </div>\r\n                </div>\r\n                <div class=\"col-md-6\">\r\n                    <div class=\"form-group\">\r\n                        <label for=\"name\">{{'items.create.fields.unit' | translate}}</label>\r\n                        <input class=\"form-control\" formControlName=\"unit\" id=\"unit\" placeholder=\"{{'items.create.placeholders.placeholder3' | translate }}\" type=\"text\"/>\r\n                    </div>\r\n                </div>\r\n                <div class=\"col-md-6\">\r\n                    <div class=\"form-group\">\r\n                        <label for=\"leave_type_id\">{{'items.create.fields.tax' | translate}}</label>\r\n                        <ng-select [items]=\"taxes\" [multiple]=\"true\" [searchable]=\"true\" [selectOnTab]=\"true\" bindLabel=\"tax_name\" bindValue=\"id\" formControlName=\"taxes\" labelForId=\"taxes\" placeholder=\"{{'items.create.placeholders.placeholder4' | translate }}\">\r\n                            <ng-template let-item=\"item\" ng-option-tmp>\r\n                                {{item.tax_name}} : {{item.tax_rate}}%\r\n                            </ng-template>\r\n                        </ng-select>\r\n                    </div>\r\n                </div>\r\n                <div class=\"col-md-12\">\r\n                    <div class=\"form-group\">\r\n                        <label for=\"description\">{{'items.create.fields.description' | translate}}</label>\r\n                        <textarea class=\"form-control\" formControlName=\"description\" id=\"description\" placeholder=\"{{'items.create.placeholders.placeholder5' | translate}}\"></textarea>\r\n                    </div>\r\n                </div>\r\n            </div>\r\n        </div>\r\n    </div>\r\n    <div class=\"modal-footer\">\r\n        <button (click)=\"onCancel()\" class=\"btn btn-cancel mb-0\" type=\"button\">{{'common.close' | translate}}</button>\r\n        <button class=\"btn btn-submit mb-0\" type=\"submit\">{{'common.create' | translate}}</button>\r\n    </div>\r\n</form>\r\n");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/modules/sales/items/components/edit-item/edit-item.component.html":
/*!*************************************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/modules/sales/items/components/edit-item/edit-item.component.html ***!
  \*************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<div class=\"modal-header\">\r\n    <h2 class=\"modal-title font-weight-normal\">\r\n        <i aria-hidden=\"true\" class=\"fa fa-shopping-basket\"></i>&nbsp;{{'items.title3' | translate}}</h2>\r\n    <button (click)=\"bsModalRef.hide()\" aria-label=\"Close\" class=\"close\" data-dismiss=\"modal\" type=\"button\">\r\n        <span aria-hidden=\"true\">&times;</span></button>\r\n</div>\r\n<form (ngSubmit)=\"onSubmit()\" *ngIf=\"isFormLoaded\" [formGroup]=\"editItemForm\" class=\"form\">\r\n    <div class=\"modal-body\">\r\n        <div class=\"form-body\">\r\n            <div class=\"row\">\r\n                <div class=\"col-md-12\">\r\n                    <div class=\"alert alert-warning\" role=\"alert\">{{'items.labels.label1' | translate}}</div>\r\n                </div>\r\n                <div class=\"col-md-6\">\r\n                    <div class=\"form-group\">\r\n                        <label for=\"name\">{{'items.create.fields.name' | translate}}\r\n                            <span class=\"text-danger\">&nbsp;*</span></label>\r\n                        <input [ngClass]=\"{ 'is-invalid': isFormSubmitted && itemControl.name.errors }\" class=\"form-control\" formControlName=\"name\" id=\"name\" placeholder=\"{{'items.create.placeholders.placeholder1' | translate }}\" type=\"text\"/>\r\n                        <div *ngIf=\"isFormSubmitted && itemControl.name.errors\" class=\"invalid-feedback\">\r\n                            <div *ngIf=\"itemControl.name.errors.required\">{{'items.create.error_messages.message1' | translate}}</div>\r\n                        </div>\r\n                    </div>\r\n                </div>\r\n                <div class=\"col-md-6\">\r\n                    <div class=\"form-group\">\r\n                        <label for=\"name\">{{'items.create.fields.price' | translate}}\r\n                            <span class=\"text-danger\">&nbsp;*</span></label>\r\n                        <input [ngClass]=\"{ 'is-invalid': isFormSubmitted && itemControl.price.errors }\" class=\"form-control\" formControlName=\"price\" id=\"price\" placeholder=\"{{'items.create.placeholders.placeholder2' | translate }}\" type=\"text\"/>\r\n                        <div *ngIf=\"isFormSubmitted && itemControl.price.errors\" class=\"invalid-feedback\">\r\n                            <div *ngIf=\"itemControl.price.errors.required\">{{'items.create.error_messages.message2' | translate}}</div>\r\n                            <div *ngIf=\"itemControl.price.errors.pattern\">{{'items.create.error_messages.message3' | translate}}</div>\r\n                        </div>\r\n                    </div>\r\n                </div>\r\n                <div class=\"col-md-6\">\r\n                    <div class=\"form-group\">\r\n                        <label for=\"name\">{{'items.create.fields.unit' | translate}}</label>\r\n                        <input class=\"form-control\" formControlName=\"unit\" id=\"unit\" placeholder=\"{{'items.create.placeholders.placeholder3' | translate }}\" type=\"text\"/>\r\n                    </div>\r\n                </div>\r\n                <div class=\"col-md-6\">\r\n                    <div class=\"form-group\">\r\n                        <label for=\"leave_type_id\">{{'items.create.fields.tax' | translate}}</label>\r\n                        <ng-select [items]=\"taxes\" [multiple]=\"true\" [searchable]=\"true\" [selectOnTab]=\"true\" bindLabel=\"tax_name\" bindValue=\"id\" formControlName=\"taxes\" labelForId=\"taxes\" placeholder=\"{{'items.create.placeholders.placeholder4' | translate }}\">\r\n                            <ng-template let-item=\"item\" ng-option-tmp>\r\n                                {{item.tax_name}} : {{item.tax_rate}}%\r\n                            </ng-template>\r\n                        </ng-select>\r\n                    </div>\r\n                </div>\r\n                <div class=\"col-md-12\">\r\n                    <div class=\"form-group\">\r\n                        <label for=\"description\">{{'items.create.fields.description' | translate}}</label>\r\n                        <textarea class=\"form-control\" formControlName=\"description\" id=\"description\" placeholder=\"{{'items.create.placeholders.placeholder5' | translate}}\"></textarea>\r\n                    </div>\r\n                </div>\r\n            </div>\r\n        </div>\r\n    </div>\r\n    <div class=\"modal-footer\">\r\n        <button (click)=\"onCancel()\" class=\"btn btn-cancel mb-0\" type=\"button\">{{'common.close' | translate}}</button>\r\n        <button class=\"btn btn-submit mb-0\" type=\"submit\">{{'common.update' | translate}}</button>\r\n    </div>\r\n</form>\r\n");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/modules/sales/items/components/item-groups/item-groups.component.html":
/*!*****************************************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/modules/sales/items/components/item-groups/item-groups.component.html ***!
  \*****************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/modules/sales/items/pages/items-list/items-list.component.html":
/*!**********************************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/modules/sales/items/pages/items-list/items-list.component.html ***!
  \**********************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<section class=\"hide_empty_message\">\r\n    <div class=\"row\">\r\n        <div class=\"col-sm-12\">\r\n            <div class=\"card pl-2 pr-2\">\r\n                <div class=\"card-header pl-0 pr-0 border-bottom\">\r\n                    <h4 class=\"main-title mt-2\"><span>{{'items.title' | translate}}</span></h4>\r\n                    <div class=\"card-buttons\">\r\n                        <a *ngxPermissionsOnly=\"['admin', 'super_admin', 'taxes_view']\" [routerLink]=\"['/taxes']\" class=\"btn btn-create mb-0\" tooltip=\"{{'taxes.title1' | translate}}\"><i class=\"fa fa-percent\"></i></a>\r\n                        <button (click)=\"openItemCreateModal()\" *ngxPermissionsOnly=\"['admin', 'super_admin', 'items_create']\" class=\"btn btn-create mb-0\" tooltip=\"{{'common.create' | translate}}\">\r\n                            <i class=\"fa fa-plus\"></i></button>\r\n                    </div>\r\n                </div>\r\n                <!-- Card content -->\r\n                <div class=\"card-content pt-3 pb-3\">\r\n                    <!-- Card body -->\r\n                    <div class=\"card-body\">\r\n                        <!-- Items list datatable -->\r\n                        <div class=\"row\">\r\n                            <div class=\"col-sm-12\">\r\n                                <div class=\"table-responsive-xs table-responsive-sm table-responsive-md table-responsive-lg table-responsive-xl\">\r\n                                    <table [dtOptions]=\"dtOptions\" [dtTrigger]=\"dtTrigger\" class=\"table table-bordered table-hover b4-datatable\" datatable id=\"items_table\" width=\"100%\">\r\n                                        <thead>\r\n                                        <tr>\r\n                                            <th>{{'items.columns.name' | translate}}</th>\r\n                                            <th>{{'items.columns.description' | translate}}</th>\r\n                                            <th>{{'items.columns.tax' | translate}}</th>\r\n                                            <th>{{'items.columns.unit' | translate}}</th>\r\n                                            <th>{{'items.columns.price' | translate}}</th>\r\n                                            <th>{{'common.actions' | translate}}</th>\r\n                                        </tr>\r\n                                        </thead>\r\n                                        <tbody>\r\n                                        <tr *ngFor=\"let item of items; index as i\">\r\n                                            <td>{{item.name}}</td>\r\n                                            <td>{{item.description}}</td>\r\n                                            <td class=\"budges-status\">\r\n                                                <div *ngFor=\"let tax of item.taxes;\">\r\n                                                    <span class=\"open\">{{tax.tax_name}} ({{tax.tax_rate}}%)</span>\r\n                                                </div>\r\n                                            </td>\r\n                                            <td>{{item.unit}}</td>\r\n                                            <td>{{loginUser.currency.symbol}}{{item.price}}</td>\r\n                                            <td class=\"actions-dropdown\">\r\n                                                <div class=\"btn-group\" dropdown>\r\n                                                    <button aria-controls=\"dropdown-basic-1\" class=\"dropdown-toggle btn-action\" dropdownToggle id=\"button-basic-1\" type=\"button\">\r\n                                                        <i class=\"fa fa-ellipsis-v\"></i></button>\r\n                                                    <ul *dropdownMenu aria-labelledby=\"button-basic-1\" class=\"dropdown-menu animated fadeIn\" id=\"dropdown-basic-1\" role=\"menu\">\r\n                                                        <li *ngxPermissionsOnly=\"['admin', 'super_admin', 'items_edit']\" role=\"menuitem\">\r\n                                                            <a (click)=\"openItemEditModal(item)\" class=\"dropdown-item btn btn-edit btn-raised\"><i class=\"fa fa-pencil-square-o\" tooltip=\"{{'common.edit' | translate}}\"></i></a>\r\n                                                        </li>\r\n                                                        <li *ngxPermissionsOnly=\"['admin', 'super_admin', 'items_delete']\" role=\"menuitem\">\r\n                                                            <a (click)=\"deleteItem(item.id)\" class=\"dropdown-item btn btn-delete btn-raised\"><i class=\"fa fa-trash-o\" tooltip=\"{{'common.delete' | translate}}\"></i></a>\r\n                                                        </li>\r\n                                                    </ul>\r\n                                                </div>\r\n                                            </td>\r\n                                        </tr>\r\n                                        </tbody>\r\n                                        <tfoot *ngIf=\"items?.length == 0\" class=\"tfoot_dt\">\r\n                                        <tr>\r\n                                            <td class=\"no-data-available text-center\" colspan=\"6\">{{'common.datatable.sEmptyTable' | translate}}</td>\r\n                                        </tr>\r\n                                        </tfoot>\r\n                                    </table>\r\n                                </div>\r\n                            </div>\r\n                        </div>\r\n                    </div>\r\n                </div>\r\n            </div>\r\n        </div>\r\n    </div>\r\n</section>\r\n");

/***/ }),

/***/ "./src/app/modules/sales/items/components/create-item/create-item.component.scss":
/*!***************************************************************************************!*\
  !*** ./src/app/modules/sales/items/components/create-item/create-item.component.scss ***!
  \***************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL21vZHVsZXMvc2FsZXMvaXRlbXMvY29tcG9uZW50cy9jcmVhdGUtaXRlbS9jcmVhdGUtaXRlbS5jb21wb25lbnQuc2NzcyJ9 */");

/***/ }),

/***/ "./src/app/modules/sales/items/components/create-item/create-item.component.ts":
/*!*************************************************************************************!*\
  !*** ./src/app/modules/sales/items/components/create-item/create-item.component.ts ***!
  \*************************************************************************************/
/*! exports provided: CreateItemComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CreateItemComponent", function() { return CreateItemComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var ngx_bootstrap_modal__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ngx-bootstrap/modal */ "./node_modules/ngx-bootstrap/modal/fesm5/ngx-bootstrap-modal.js");
/* harmony import */ var ngx_toastr__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ngx-toastr */ "./node_modules/ngx-toastr/fesm5/ngx-toastr.js");
/* harmony import */ var _ngx_translate_core__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @ngx-translate/core */ "./node_modules/@ngx-translate/core/fesm5/ngx-translate-core.js");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! rxjs */ "./node_modules/rxjs/_esm5/index.js");
/* harmony import */ var _core_services_item_service__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../../../../../core/services/item.service */ "./src/app/core/services/item.service.ts");
/* harmony import */ var _core_services_tax_service__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../../../../../core/services/tax.service */ "./src/app/core/services/tax.service.ts");










var CreateItemComponent = /** @class */ (function () {
    function CreateItemComponent(translate, bsModalRef, formBuilder, toastr, modalService, datepipe, itemService, taxService) {
        this.translate = translate;
        this.bsModalRef = bsModalRef;
        this.formBuilder = formBuilder;
        this.toastr = toastr;
        this.modalService = modalService;
        this.datepipe = datepipe;
        this.itemService = itemService;
        this.taxService = taxService;
        this.event = new _angular_core__WEBPACK_IMPORTED_MODULE_1__["EventEmitter"]();
        this.taxes = [];
        this.isFormSubmitted = false;
        this.isFormLoaded = false;
    }
    Object.defineProperty(CreateItemComponent.prototype, "itemControl", {
        get: function () {
            return this.createItemForm.controls;
        },
        enumerable: true,
        configurable: true
    });
    CreateItemComponent.prototype.ngOnInit = function () {
        this.onClose = new rxjs__WEBPACK_IMPORTED_MODULE_7__["Subject"]();
        this.getTaxes();
    };
    CreateItemComponent.prototype.loadForm = function () {
        this.createItemForm = this.formBuilder.group({
            name: [null, _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required],
            price: [null, [_angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required, _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].pattern(/^-?(?:(?:0|[1-9][0-9]*)(?:.[0-9]{1,8})?|.[0-9]{1,8})$/)]],
            description: [],
            unit: [],
            taxes: []
        });
        this.isFormLoaded = true;
    };
    CreateItemComponent.prototype.getTaxes = function () {
        var _this = this;
        this.taxService.getAll().subscribe(function (data) {
            _this.taxes = data;
            _this.loadForm();
        });
    };
    CreateItemComponent.prototype.onSubmit = function () {
        var _this = this;
        this.isFormSubmitted = true;
        if (this.createItemForm.invalid) {
            return;
        }
        this.itemService.create(this.createItemForm.value)
            .subscribe(function (data) {
            _this.toastr.success(_this.translate.instant('items.messages.create'), _this.translate.instant('items.title'));
            _this.event.emit({ data: true });
            _this.onCancel();
        }, function (error) {
            _this.onCancel();
        });
    };
    CreateItemComponent.prototype.onCancel = function () {
        this.onClose.next(false);
        this.bsModalRef.hide();
    };
    CreateItemComponent.ctorParameters = function () { return [
        { type: _ngx_translate_core__WEBPACK_IMPORTED_MODULE_6__["TranslateService"] },
        { type: ngx_bootstrap_modal__WEBPACK_IMPORTED_MODULE_4__["BsModalRef"] },
        { type: _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormBuilder"] },
        { type: ngx_toastr__WEBPACK_IMPORTED_MODULE_5__["ToastrService"] },
        { type: ngx_bootstrap_modal__WEBPACK_IMPORTED_MODULE_4__["BsModalService"] },
        { type: _angular_common__WEBPACK_IMPORTED_MODULE_3__["DatePipe"] },
        { type: _core_services_item_service__WEBPACK_IMPORTED_MODULE_8__["ItemService"] },
        { type: _core_services_tax_service__WEBPACK_IMPORTED_MODULE_9__["TaxService"] }
    ]; };
    CreateItemComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-create-item',
            template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./create-item.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/modules/sales/items/components/create-item/create-item.component.html")).default,
            styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./create-item.component.scss */ "./src/app/modules/sales/items/components/create-item/create-item.component.scss")).default]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_ngx_translate_core__WEBPACK_IMPORTED_MODULE_6__["TranslateService"],
            ngx_bootstrap_modal__WEBPACK_IMPORTED_MODULE_4__["BsModalRef"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormBuilder"],
            ngx_toastr__WEBPACK_IMPORTED_MODULE_5__["ToastrService"],
            ngx_bootstrap_modal__WEBPACK_IMPORTED_MODULE_4__["BsModalService"],
            _angular_common__WEBPACK_IMPORTED_MODULE_3__["DatePipe"],
            _core_services_item_service__WEBPACK_IMPORTED_MODULE_8__["ItemService"],
            _core_services_tax_service__WEBPACK_IMPORTED_MODULE_9__["TaxService"]])
    ], CreateItemComponent);
    return CreateItemComponent;
}());



/***/ }),

/***/ "./src/app/modules/sales/items/components/edit-item/edit-item.component.scss":
/*!***********************************************************************************!*\
  !*** ./src/app/modules/sales/items/components/edit-item/edit-item.component.scss ***!
  \***********************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL21vZHVsZXMvc2FsZXMvaXRlbXMvY29tcG9uZW50cy9lZGl0LWl0ZW0vZWRpdC1pdGVtLmNvbXBvbmVudC5zY3NzIn0= */");

/***/ }),

/***/ "./src/app/modules/sales/items/components/edit-item/edit-item.component.ts":
/*!*********************************************************************************!*\
  !*** ./src/app/modules/sales/items/components/edit-item/edit-item.component.ts ***!
  \*********************************************************************************/
/*! exports provided: EditItemComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "EditItemComponent", function() { return EditItemComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var ngx_bootstrap_modal__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ngx-bootstrap/modal */ "./node_modules/ngx-bootstrap/modal/fesm5/ngx-bootstrap-modal.js");
/* harmony import */ var ngx_toastr__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ngx-toastr */ "./node_modules/ngx-toastr/fesm5/ngx-toastr.js");
/* harmony import */ var _ngx_translate_core__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @ngx-translate/core */ "./node_modules/@ngx-translate/core/fesm5/ngx-translate-core.js");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! rxjs */ "./node_modules/rxjs/_esm5/index.js");
/* harmony import */ var _core_services_item_service__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../../../../../core/services/item.service */ "./src/app/core/services/item.service.ts");
/* harmony import */ var _core_services_tax_service__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../../../../../core/services/tax.service */ "./src/app/core/services/tax.service.ts");










var EditItemComponent = /** @class */ (function () {
    function EditItemComponent(translate, bsModalRef, formBuilder, toastr, modalService, datepipe, itemService, taxService) {
        this.translate = translate;
        this.bsModalRef = bsModalRef;
        this.formBuilder = formBuilder;
        this.toastr = toastr;
        this.modalService = modalService;
        this.datepipe = datepipe;
        this.itemService = itemService;
        this.taxService = taxService;
        this.event = new _angular_core__WEBPACK_IMPORTED_MODULE_1__["EventEmitter"]();
        this.taxes = [];
        this.isFormSubmitted = false;
        this.isFormLoaded = false;
    }
    Object.defineProperty(EditItemComponent.prototype, "itemControl", {
        get: function () {
            return this.editItemForm.controls;
        },
        enumerable: true,
        configurable: true
    });
    EditItemComponent.prototype.ngOnInit = function () {
        this.onClose = new rxjs__WEBPACK_IMPORTED_MODULE_7__["Subject"]();
        this.getTaxes();
    };
    EditItemComponent.prototype.loadForm = function () {
        var taxes = [];
        for (var iRow in this.item.taxes) {
            taxes.push(this.item.taxes[iRow].id);
        }
        this.editItemForm = this.formBuilder.group({
            id: [this.item.id],
            name: [this.item.name, _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required],
            price: [this.item.price, [_angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required, _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].pattern(/^-?(?:(?:0|[1-9][0-9]*)(?:.[0-9]{1,8})?|.[0-9]{1,8})$/)]],
            description: [this.item.description],
            unit: [this.item.unit],
            taxes: [taxes]
        });
        this.isFormLoaded = true;
    };
    EditItemComponent.prototype.getTaxes = function () {
        var _this = this;
        this.taxService.getAll().subscribe(function (data) {
            _this.taxes = data;
            _this.loadForm();
        });
    };
    EditItemComponent.prototype.onSubmit = function () {
        var _this = this;
        this.isFormSubmitted = true;
        if (this.editItemForm.invalid) {
            return;
        }
        this.itemService.update(this.editItemForm.value)
            .subscribe(function (data) {
            _this.toastr.success(_this.translate.instant('items.messages.update'), _this.translate.instant('items.title'));
            _this.event.emit({ data: true });
            _this.onCancel();
        }, function (error) {
            _this.onCancel();
        });
    };
    EditItemComponent.prototype.onCancel = function () {
        this.onClose.next(false);
        this.bsModalRef.hide();
    };
    EditItemComponent.ctorParameters = function () { return [
        { type: _ngx_translate_core__WEBPACK_IMPORTED_MODULE_6__["TranslateService"] },
        { type: ngx_bootstrap_modal__WEBPACK_IMPORTED_MODULE_4__["BsModalRef"] },
        { type: _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormBuilder"] },
        { type: ngx_toastr__WEBPACK_IMPORTED_MODULE_5__["ToastrService"] },
        { type: ngx_bootstrap_modal__WEBPACK_IMPORTED_MODULE_4__["BsModalService"] },
        { type: _angular_common__WEBPACK_IMPORTED_MODULE_3__["DatePipe"] },
        { type: _core_services_item_service__WEBPACK_IMPORTED_MODULE_8__["ItemService"] },
        { type: _core_services_tax_service__WEBPACK_IMPORTED_MODULE_9__["TaxService"] }
    ]; };
    EditItemComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-edit-item',
            template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./edit-item.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/modules/sales/items/components/edit-item/edit-item.component.html")).default,
            styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./edit-item.component.scss */ "./src/app/modules/sales/items/components/edit-item/edit-item.component.scss")).default]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_ngx_translate_core__WEBPACK_IMPORTED_MODULE_6__["TranslateService"],
            ngx_bootstrap_modal__WEBPACK_IMPORTED_MODULE_4__["BsModalRef"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormBuilder"],
            ngx_toastr__WEBPACK_IMPORTED_MODULE_5__["ToastrService"],
            ngx_bootstrap_modal__WEBPACK_IMPORTED_MODULE_4__["BsModalService"],
            _angular_common__WEBPACK_IMPORTED_MODULE_3__["DatePipe"],
            _core_services_item_service__WEBPACK_IMPORTED_MODULE_8__["ItemService"],
            _core_services_tax_service__WEBPACK_IMPORTED_MODULE_9__["TaxService"]])
    ], EditItemComponent);
    return EditItemComponent;
}());



/***/ }),

/***/ "./src/app/modules/sales/items/components/item-groups/item-groups.component.scss":
/*!***************************************************************************************!*\
  !*** ./src/app/modules/sales/items/components/item-groups/item-groups.component.scss ***!
  \***************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL21vZHVsZXMvc2FsZXMvaXRlbXMvY29tcG9uZW50cy9pdGVtLWdyb3Vwcy9pdGVtLWdyb3Vwcy5jb21wb25lbnQuc2NzcyJ9 */");

/***/ }),

/***/ "./src/app/modules/sales/items/components/item-groups/item-groups.component.ts":
/*!*************************************************************************************!*\
  !*** ./src/app/modules/sales/items/components/item-groups/item-groups.component.ts ***!
  \*************************************************************************************/
/*! exports provided: ItemGroupsComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ItemGroupsComponent", function() { return ItemGroupsComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");


var ItemGroupsComponent = /** @class */ (function () {
    function ItemGroupsComponent() {
    }
    ItemGroupsComponent.prototype.ngOnInit = function () {
    };
    ItemGroupsComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-item-groups',
            template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./item-groups.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/modules/sales/items/components/item-groups/item-groups.component.html")).default,
            styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./item-groups.component.scss */ "./src/app/modules/sales/items/components/item-groups/item-groups.component.scss")).default]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [])
    ], ItemGroupsComponent);
    return ItemGroupsComponent;
}());



/***/ }),

/***/ "./src/app/modules/sales/items/items-routing.module.ts":
/*!*************************************************************!*\
  !*** ./src/app/modules/sales/items/items-routing.module.ts ***!
  \*************************************************************/
/*! exports provided: ItemsRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ItemsRoutingModule", function() { return ItemsRoutingModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var ngx_permissions__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ngx-permissions */ "./node_modules/ngx-permissions/ngx-permissions.umd.js");
/* harmony import */ var ngx_permissions__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(ngx_permissions__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _pages_items_list_items_list_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./pages/items-list/items-list.component */ "./src/app/modules/sales/items/pages/items-list/items-list.component.ts");





var routes = [{
        path: '',
        children: [
            {
                path: '',
                canActivate: [ngx_permissions__WEBPACK_IMPORTED_MODULE_3__["NgxPermissionsGuard"]],
                component: _pages_items_list_items_list_component__WEBPACK_IMPORTED_MODULE_4__["ItemsListComponent"]
            }
        ]
    }
];
var ItemsRoutingModule = /** @class */ (function () {
    function ItemsRoutingModule() {
    }
    ItemsRoutingModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)],
            exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]]
        })
    ], ItemsRoutingModule);
    return ItemsRoutingModule;
}());



/***/ }),

/***/ "./src/app/modules/sales/items/items.module.ts":
/*!*****************************************************!*\
  !*** ./src/app/modules/sales/items/items.module.ts ***!
  \*****************************************************/
/*! exports provided: ItemsModule, HttpLoaderFactory */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ItemsModule", function() { return ItemsModule; });
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
/* harmony import */ var _items_routing_module__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ./items-routing.module */ "./src/app/modules/sales/items/items-routing.module.ts");
/* harmony import */ var _shared_shared_module__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ../../../shared/shared.module */ "./src/app/shared/shared.module.ts");
/* harmony import */ var _pages_items_list_items_list_component__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! ./pages/items-list/items-list.component */ "./src/app/modules/sales/items/pages/items-list/items-list.component.ts");
/* harmony import */ var _components_item_groups_item_groups_component__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! ./components/item-groups/item-groups.component */ "./src/app/modules/sales/items/components/item-groups/item-groups.component.ts");
/* harmony import */ var _components_create_item_create_item_component__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! ./components/create-item/create-item.component */ "./src/app/modules/sales/items/components/create-item/create-item.component.ts");
/* harmony import */ var _components_edit_item_edit_item_component__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! ./components/edit-item/edit-item.component */ "./src/app/modules/sales/items/components/edit-item/edit-item.component.ts");



















var ItemsModule = /** @class */ (function () {
    function ItemsModule() {
    }
    ItemsModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            declarations: [
                _pages_items_list_items_list_component__WEBPACK_IMPORTED_MODULE_15__["ItemsListComponent"],
                _components_item_groups_item_groups_component__WEBPACK_IMPORTED_MODULE_16__["ItemGroupsComponent"],
                _components_create_item_create_item_component__WEBPACK_IMPORTED_MODULE_17__["CreateItemComponent"],
                _components_edit_item_edit_item_component__WEBPACK_IMPORTED_MODULE_18__["EditItemComponent"]
            ],
            imports: [
                _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
                _items_routing_module__WEBPACK_IMPORTED_MODULE_13__["ItemsRoutingModule"],
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
                _components_item_groups_item_groups_component__WEBPACK_IMPORTED_MODULE_16__["ItemGroupsComponent"],
                _components_create_item_create_item_component__WEBPACK_IMPORTED_MODULE_17__["CreateItemComponent"],
                _components_edit_item_edit_item_component__WEBPACK_IMPORTED_MODULE_18__["EditItemComponent"]
            ],
            providers: []
        })
    ], ItemsModule);
    return ItemsModule;
}());

// Required for AOT compilation
function HttpLoaderFactory(http) {
    return new _ngx_translate_http_loader__WEBPACK_IMPORTED_MODULE_11__["TranslateHttpLoader"](http, './assets/i18n/', '.json');
}


/***/ }),

/***/ "./src/app/modules/sales/items/pages/items-list/items-list.component.scss":
/*!********************************************************************************!*\
  !*** ./src/app/modules/sales/items/pages/items-list/items-list.component.scss ***!
  \********************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = (".hide_empty_message ::ng-deep .odd {\n  display: none;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvbW9kdWxlcy9zYWxlcy9pdGVtcy9wYWdlcy9pdGVtcy1saXN0L0M6XFxVc2Vyc1xcdGh1YW5cXE9uZURyaXZlXFxEZXNrdG9wXFxnbGF2YWwtdGh1YW5kaW5oL3NyY1xcYXBwXFxtb2R1bGVzXFxzYWxlc1xcaXRlbXNcXHBhZ2VzXFxpdGVtcy1saXN0XFxpdGVtcy1saXN0LmNvbXBvbmVudC5zY3NzIiwic3JjL2FwcC9tb2R1bGVzL3NhbGVzL2l0ZW1zL3BhZ2VzL2l0ZW1zLWxpc3QvaXRlbXMtbGlzdC5jb21wb25lbnQuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNJLGFBQUE7QUNDSiIsImZpbGUiOiJzcmMvYXBwL21vZHVsZXMvc2FsZXMvaXRlbXMvcGFnZXMvaXRlbXMtbGlzdC9pdGVtcy1saXN0LmNvbXBvbmVudC5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLmhpZGVfZW1wdHlfbWVzc2FnZSA6Om5nLWRlZXAgLm9kZCB7XHJcbiAgICBkaXNwbGF5OiBub25lXHJcbn0iLCIuaGlkZV9lbXB0eV9tZXNzYWdlIDo6bmctZGVlcCAub2RkIHtcbiAgZGlzcGxheTogbm9uZTtcbn0iXX0= */");

/***/ }),

/***/ "./src/app/modules/sales/items/pages/items-list/items-list.component.ts":
/*!******************************************************************************!*\
  !*** ./src/app/modules/sales/items/pages/items-list/items-list.component.ts ***!
  \******************************************************************************/
/*! exports provided: ItemsListComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ItemsListComponent", function() { return ItemsListComponent; });
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
/* harmony import */ var _core_services_item_service__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ../../../../../core/services/item.service */ "./src/app/core/services/item.service.ts");
/* harmony import */ var _core_services_authentication_service__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ../../../../../core/services/authentication.service */ "./src/app/core/services/authentication.service.ts");
/* harmony import */ var _components_create_item_create_item_component__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ../../components/create-item/create-item.component */ "./src/app/modules/sales/items/components/create-item/create-item.component.ts");
/* harmony import */ var _components_edit_item_edit_item_component__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ../../components/edit-item/edit-item.component */ "./src/app/modules/sales/items/components/edit-item/edit-item.component.ts");
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! ../../../../../../environments/environment */ "./src/environments/environment.ts");
/* harmony import */ var datatables_net__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! datatables.net */ "./node_modules/datatables.net/js/jquery.dataTables.js");
/* harmony import */ var datatables_net__WEBPACK_IMPORTED_MODULE_16___default = /*#__PURE__*/__webpack_require__.n(datatables_net__WEBPACK_IMPORTED_MODULE_16__);
/* harmony import */ var datatables_net_bs4__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! datatables.net-bs4 */ "./node_modules/datatables.net-bs4/js/dataTables.bootstrap4.js");
/* harmony import */ var datatables_net_bs4__WEBPACK_IMPORTED_MODULE_17___default = /*#__PURE__*/__webpack_require__.n(datatables_net_bs4__WEBPACK_IMPORTED_MODULE_17__);


















var ItemsListComponent = /** @class */ (function () {
    function ItemsListComponent(translate, ngxRolesService, http, toastr, modalService, exportAsService, authenticationService, itemService) {
        var _this = this;
        this.translate = translate;
        this.ngxRolesService = ngxRolesService;
        this.http = http;
        this.toastr = toastr;
        this.modalService = modalService;
        this.exportAsService = exportAsService;
        this.authenticationService = authenticationService;
        this.itemService = itemService;
        this.dtTrigger = new rxjs__WEBPACK_IMPORTED_MODULE_9__["Subject"]();
        this.dtOptions = {};
        this.items = [];
        this.exportAsConfig = {
            type: 'pdf',
            elementIdOrContent: 'items_table',
        };
        this.modalConfigs = {
            animated: true,
            keyboard: true,
            backdrop: true,
            ignoreBackdropClick: false,
            class: 'inmodal modal-dialog-centered modal-lg animated fadeIn'
        };
        this.apiUrl = _environments_environment__WEBPACK_IMPORTED_MODULE_15__["environment"].apiUrl;
        this.authenticationService.loginUser.subscribe(function (x) { return _this.loginUser = x; });
    }
    ItemsListComponent.prototype.ngOnInit = function () {
        this.loadItemDatatable();
    };
    ItemsListComponent.prototype.loadItemDatatable = function () {
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
                    'width': '25%',
                    'target': [0]
                }, {
                    'sortable': true,
                    'width': '35%',
                    'target': [1]
                }, {
                    'sortable': false,
                    'width': '13%',
                    'target': [2]
                }, {
                    'sortable': true,
                    'width': '10%',
                    'target': [3]
                }, {
                    'sortable': true,
                    'width': '10%',
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
                _this.http.post(_this.apiUrl + '/api/all-items', dataTablesParameters, {}).subscribe(function (resp) {
                    if (resp) {
                        _this.items = resp.data;
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
    ItemsListComponent.prototype.exportFiles = function (type) {
        this.exportAsConfig.type = type;
        this.exportAsService.save(this.exportAsConfig, this.translate.instant('items.title')).subscribe(function () {
        });
    };
    ItemsListComponent.prototype.ngAfterViewInit = function () {
        this.dtTrigger.next();
    };
    ItemsListComponent.prototype.ngOnDestroy = function () {
        this.dtTrigger.unsubscribe();
    };
    ItemsListComponent.prototype.rerender = function () {
        var _this = this;
        this.dtElement.dtInstance.then(function (dtInstance) {
            dtInstance.destroy();
            setTimeout(function () {
                _this.dtTrigger.next();
                if (_this.items.length > 0) {
                    $('.tfoot_dt').addClass('d-none');
                }
                else {
                    $('.tfoot_dt').removeClass('d-none');
                }
            });
        });
    };
    ItemsListComponent.prototype.openItemCreateModal = function () {
        var _this = this;
        this.modalRef = this.modalService.show(_components_create_item_create_item_component__WEBPACK_IMPORTED_MODULE_13__["CreateItemComponent"], this.modalConfigs);
        this.modalRef.content.event.subscribe(function (data) {
            _this.rerender();
        });
    };
    ItemsListComponent.prototype.openItemEditModal = function (item) {
        var _this = this;
        var modalConfig = {
            animated: true,
            keyboard: true,
            backdrop: true,
            ignoreBackdropClick: false,
            class: 'inmodal modal-dialog-centered modal-lg animated fadeIn',
            initialState: {
                item: item
            }
        };
        this.modalRef = this.modalService.show(_components_edit_item_edit_item_component__WEBPACK_IMPORTED_MODULE_14__["EditItemComponent"], modalConfig);
        this.modalRef.content.event.subscribe(function (data) {
            _this.rerender();
        });
    };
    ItemsListComponent.prototype.deleteItem = function (id) {
        var _this = this;
        sweetalert2__WEBPACK_IMPORTED_MODULE_10___default.a.fire({
            title: this.translate.instant('common.swal.title'),
            text: this.translate.instant('common.swal.text') + this.translate.instant('items.title1'),
            type: 'warning',
            showCancelButton: true,
            confirmButtonText: this.translate.instant('common.swal.confirmButtonText'),
            cancelButtonText: this.translate.instant('common.swal.cancelButtonText')
        }).then(function (result) {
            if (result.value) {
                _this.itemService.delete(id)
                    .subscribe(function (data) {
                    _this.toastr.success(_this.translate.instant('items.messages.delete'), _this.translate.instant('items.title'));
                    _this.rerender();
                });
            }
        });
    };
    ItemsListComponent.ctorParameters = function () { return [
        { type: _ngx_translate_core__WEBPACK_IMPORTED_MODULE_7__["TranslateService"] },
        { type: ngx_permissions__WEBPACK_IMPORTED_MODULE_8__["NgxRolesService"] },
        { type: _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClient"] },
        { type: ngx_toastr__WEBPACK_IMPORTED_MODULE_6__["ToastrService"] },
        { type: ngx_bootstrap_modal__WEBPACK_IMPORTED_MODULE_4__["BsModalService"] },
        { type: ngx_export_as__WEBPACK_IMPORTED_MODULE_5__["ExportAsService"] },
        { type: _core_services_authentication_service__WEBPACK_IMPORTED_MODULE_12__["AuthenticationService"] },
        { type: _core_services_item_service__WEBPACK_IMPORTED_MODULE_11__["ItemService"] }
    ]; };
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewChild"])(angular_datatables__WEBPACK_IMPORTED_MODULE_3__["DataTableDirective"], { static: true }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", angular_datatables__WEBPACK_IMPORTED_MODULE_3__["DataTableDirective"])
    ], ItemsListComponent.prototype, "dtElement", void 0);
    ItemsListComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-items-list',
            template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./items-list.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/modules/sales/items/pages/items-list/items-list.component.html")).default,
            styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./items-list.component.scss */ "./src/app/modules/sales/items/pages/items-list/items-list.component.scss")).default]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_ngx_translate_core__WEBPACK_IMPORTED_MODULE_7__["TranslateService"],
            ngx_permissions__WEBPACK_IMPORTED_MODULE_8__["NgxRolesService"],
            _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClient"],
            ngx_toastr__WEBPACK_IMPORTED_MODULE_6__["ToastrService"],
            ngx_bootstrap_modal__WEBPACK_IMPORTED_MODULE_4__["BsModalService"],
            ngx_export_as__WEBPACK_IMPORTED_MODULE_5__["ExportAsService"],
            _core_services_authentication_service__WEBPACK_IMPORTED_MODULE_12__["AuthenticationService"],
            _core_services_item_service__WEBPACK_IMPORTED_MODULE_11__["ItemService"]])
    ], ItemsListComponent);
    return ItemsListComponent;
}());



/***/ })

}]);
//# sourceMappingURL=modules-sales-items-items-module.js.map