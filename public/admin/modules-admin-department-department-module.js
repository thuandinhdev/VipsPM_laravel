(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["modules-admin-department-department-module"],{

/***/ "./node_modules/ngx-select2/fesm5/ngx-select2.js":
/*!*******************************************************!*\
  !*** ./node_modules/ngx-select2/fesm5/ngx-select2.js ***!
  \*******************************************************/
/*! exports provided: LSelect2Module, LSelect2Component */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LSelect2Module", function() { return LSelect2Module; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LSelect2Component", function() { return LSelect2Component; });
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");





/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
var LSelect2Component = /** @class */ (function () {
    function LSelect2Component(_renderer) {
        this._renderer = _renderer;
        this.options = {};
        this.required = false;
        this.maxCount = Number.MAX_SAFE_INTEGER;
        this.minCount = Number.MIN_SAFE_INTEGER;
        this.valueChange = new _angular_core__WEBPACK_IMPORTED_MODULE_2__["EventEmitter"]();
        this._onChange = (/**
         * @param {?} _
         * @return {?}
         */
        function (_) { });
        this._onTouched = (/**
         * @return {?}
         */
        function () { });
    }
    /**
     * @return {?}
     */
    LSelect2Component.prototype.ngOnInit = /**
     * @return {?}
     */
    function () { };
    /**
     * @return {?}
     */
    LSelect2Component.prototype.ngAfterViewInit = /**
     * @return {?}
     */
    function () {
        var _this = this;
        this._jqueryElement = $(this.selectControll.nativeElement);
        this.initSelect2();
        this._jqueryElement.on('select2:select select2:unselect', (/**
         * @param {?} e
         * @return {?}
         */
        function (e) {
            var e_1, _a;
            /** @type {?} */
            var data = _this._jqueryElement.select2('data');
            try {
                for (var data_1 = Object(tslib__WEBPACK_IMPORTED_MODULE_1__["__values"])(data), data_1_1 = data_1.next(); !data_1_1.done; data_1_1 = data_1.next()) {
                    var item = data_1_1.value;
                    delete item.element;
                    delete item.disabled;
                    delete item.selected;
                }
            }
            catch (e_1_1) { e_1 = { error: e_1_1 }; }
            finally {
                try {
                    if (data_1_1 && !data_1_1.done && (_a = data_1.return)) _a.call(data_1);
                }
                finally { if (e_1) throw e_1.error; }
            }
            if (!_this.options.multiple) {
                data = (e.type == 'select2:unselect') ? null : data[0];
            }
            _this.selectedValue = data;
            _this._onChange(data);
            _this.valueChange.emit(data);
        }));
        if (this.selectedValue) {
            this.setSelect2Value(this.selectedValue);
        }
    };
    /**
     * @param {?} changes
     * @return {?}
     */
    LSelect2Component.prototype.ngOnChanges = /**
     * @param {?} changes
     * @return {?}
     */
    function (changes) {
        if (!this._jqueryElement)
            return;
        if (this.hasChanged(changes)) {
            this.initSelect2();
            if (this.selectedValue) {
                this.setSelect2Value(this.selectedValue);
            }
        }
    };
    /**
     * @return {?}
     */
    LSelect2Component.prototype.ngOnDestroy = /**
     * @return {?}
     */
    function () {
        this._jqueryElement.select2('destroy');
    };
    /**
     * @param {?} value
     * @return {?}
     */
    LSelect2Component.prototype.writeValue = /**
     * @param {?} value
     * @return {?}
     */
    function (value) {
        this.selectedValue = value;
        if (value !== null && value !== undefined)
            this.setSelect2Value(value);
    };
    /**
     * @param {?} fn
     * @return {?}
     */
    LSelect2Component.prototype.registerOnChange = /**
     * @param {?} fn
     * @return {?}
     */
    function (fn) {
        this._onChange = fn;
    };
    /**
     * @param {?} fn
     * @return {?}
     */
    LSelect2Component.prototype.registerOnTouched = /**
     * @param {?} fn
     * @return {?}
     */
    function (fn) {
        this._onTouched = fn;
    };
    /**
     * @param {?} isDisabled
     * @return {?}
     */
    LSelect2Component.prototype.setDisabledState = /**
     * @param {?} isDisabled
     * @return {?}
     */
    function (isDisabled) {
        this.disabled = isDisabled;
    };
    /**
     * @param {?} c
     * @return {?}
     */
    LSelect2Component.prototype.validate = /**
     * @param {?} c
     * @return {?}
     */
    function (c) {
        if (this.disabled) {
            return null;
        }
        /** @type {?} */
        var length = this.selectedValue ? this.selectedValue.length : 0;
        if (this.required === true && length === 0) {
            return { required: true };
        }
        if (this.minCount > 0 && length < this.minCount) {
            return { minCount: true };
        }
        if (this.maxCount > 0 && length > this.maxCount) {
            return { maxCount: true };
        }
        return null;
    };
    /**
     * @private
     * @return {?}
     */
    LSelect2Component.prototype.initSelect2 = /**
     * @private
     * @return {?}
     */
    function () {
        if (this._jqueryElement.hasClass('select2-hidden-accessible') == true) {
            this._jqueryElement.select2('destroy');
            this._renderer.setElementProperty(this.selectControll.nativeElement, 'innerHTML', '');
        }
        /** @type {?} */
        var options = {
            data: this.data
        };
        Object.assign(options, this.options);
        this._jqueryElement.select2(options);
    };
    /**
     * @private
     * @param {?} value
     * @return {?}
     */
    LSelect2Component.prototype.setSelect2Value = /**
     * @private
     * @param {?} value
     * @return {?}
     */
    function (value) {
        if (!this._jqueryElement || !value) {
            this.selectedValue = value;
            return;
        }
        /** @type {?} */
        var targetVal = value['id'] || value;
        if (Array.isArray(value)) {
            targetVal = value.map((/**
             * @param {?} x
             * @return {?}
             */
            function (x) { return x['id']; }));
        }
        this._jqueryElement.val(targetVal).trigger('change');
    };
    /**
     * @private
     * @param {?} changes
     * @return {?}
     */
    LSelect2Component.prototype.hasChanged = /**
     * @private
     * @param {?} changes
     * @return {?}
     */
    function (changes) {
        if (changes['data'] && JSON.stringify(changes['data'].previousValue) !== JSON.stringify(changes['data'].currentValue)) {
            return true;
        }
        if (changes['options'] && JSON.stringify(changes['options'].previousValue) !== JSON.stringify(changes['options'].currentValue)) {
            return true;
        }
        return false;
    };
    LSelect2Component.decorators = [
        { type: _angular_core__WEBPACK_IMPORTED_MODULE_2__["Component"], args: [{
                    selector: 'l-select2',
                    template: "<select #selectControll [disabled]=\"disabled\" style=\"width: 100%\">\r\n  <ng-content select=\"option, optgroup\">\r\n  </ng-content>\r\n</select>",
                    providers: [
                        {
                            provide: _angular_forms__WEBPACK_IMPORTED_MODULE_3__["NG_VALUE_ACCESSOR"],
                            useExisting: Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["forwardRef"])((/**
                             * @return {?}
                             */
                            function () { return LSelect2Component; })),
                            multi: true
                        },
                        {
                            provide: _angular_forms__WEBPACK_IMPORTED_MODULE_3__["NG_VALIDATORS"],
                            useExisting: Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["forwardRef"])((/**
                             * @return {?}
                             */
                            function () { return LSelect2Component; })),
                            multi: true
                        }
                    ]
                }] }
    ];
    /** @nocollapse */
    LSelect2Component.ctorParameters = function () { return [
        { type: _angular_core__WEBPACK_IMPORTED_MODULE_2__["Renderer"] }
    ]; };
    LSelect2Component.propDecorators = {
        selectControll: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_2__["ViewChild"], args: ['selectControll',] }],
        data: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_2__["Input"] }],
        disabled: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_2__["Input"] }],
        options: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_2__["Input"] }],
        required: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_2__["Input"] }],
        maxCount: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_2__["Input"] }],
        minCount: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_2__["Input"] }],
        valueChange: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_2__["Output"] }]
    };
    return LSelect2Component;
}());

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
var LSelect2Module = /** @class */ (function () {
    function LSelect2Module() {
    }
    LSelect2Module.decorators = [
        { type: _angular_core__WEBPACK_IMPORTED_MODULE_2__["NgModule"], args: [{
                    imports: [
                        _angular_common__WEBPACK_IMPORTED_MODULE_0__["CommonModule"],
                        _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"]
                    ],
                    declarations: [
                        LSelect2Component
                    ],
                    exports: [
                        LSelect2Component
                    ]
                },] }
    ];
    return LSelect2Module;
}());

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */



//# sourceMappingURL=ngx-select2.js.map

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/modules/admin/department/components/create-department-modal/create-department-modal.component.html":
/*!**********************************************************************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/modules/admin/department/components/create-department-modal/create-department-modal.component.html ***!
  \**********************************************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<div class=\"modal-header\">\r\n    <h2 class=\"modal-title font-weight-normal\">\r\n        <i aria-hidden=\"true\" class=\"fa fa-building-o\"></i>&nbsp;{{'departments.title' | translate}}</h2>\r\n    <button (click)=\"bsCreateModalRef.hide()\" aria-label=\"Close\" class=\"close\" data-dismiss=\"modal\" type=\"button\">\r\n        <span aria-hidden=\"true\">&times;</span></button>\r\n</div>\r\n<form (ngSubmit)=\"onSubmit()\" [formGroup]=\"createDepartmentForm\" class=\"form\">\r\n    <div class=\"modal-body\">\r\n        <div class=\"form-body\">\r\n            <div class=\"row\">\r\n                <div class=\"col-md-12\">\r\n                    <div class=\"form-group\">\r\n                        <label for=\"department_name\">{{'departments.create.fields.department_name' | translate}}\r\n                            <span class=\"text-danger\">&nbsp;*</span></label>\r\n                        <div class=\"position-relative has-icon-left\">\r\n                            <input [ngClass]=\"{ 'is-invalid': isSubmitted && departmentControl.department_name.errors }\" class=\"form-control\" formControlName=\"department_name\" id=\"department_name\" maxlength=\"20\" placeholder=\"{{'departments.create.placeholders.placeholder1' | translate}}\" type=\"text\"/>\r\n                            <div class=\"form-control-position\">\r\n                                <i aria-hidden=\"true\" class=\"fa fa-lock\"></i>\r\n                            </div>\r\n                            <div *ngIf=\"isSubmitted && departmentControl.department_name.errors\" class=\"invalid-feedback\">\r\n                                <div *ngIf=\"departmentControl.department_name.errors.required\">{{'departments.create.error_messages.message1' | translate}}</div>\r\n                                <div *ngIf=\"departmentControl.department_name.errors.maxlength\">{{'departments.create.error_messages.message2' | translate}}</div>\r\n                            </div>\r\n                        </div>\r\n                    </div>\r\n                </div>\r\n                <div class=\"col-md-12\">\r\n                    <div [ngClass]=\"{ 'is-invalid': isSubmitted && department_roles.length == 0 }\" class=\"form-group\">\r\n                        <label>{{'departments.create.fields.department_roles' | translate}}\r\n                            <span class=\"text-danger\">&nbsp;*</span></label><br/>\r\n                        <label *ngFor=\"let role of roles; index as i\" class=\"checkbox-container font-12 font-bold\">\r\n                            <input [(checklist)]=\"department_roles\" [checklistValue]=\"role.id\" class=\"form-control\" name=\"department_chk_department_chk_{{i}}\" type=\"checkbox\"/>\r\n                            {{role.name}}&nbsp;&nbsp; <span class=\"checkbox-checkmark\"></span>\r\n                        </label>\r\n                        <div *ngIf=\"isSubmitted && department_roles.length == 0\" class=\"invalid-feedback\">{{'departments.create.error_messages.message3' | translate}}</div>\r\n                    </div>\r\n                </div>\r\n            </div>\r\n        </div>\r\n    </div>\r\n    <div class=\"modal-footer\">\r\n        <button (click)=\"onCancel()\" class=\"btn btn-cancel mb-0\" type=\"button\">{{'common.close' | translate}}</button>\r\n        <button class=\"btn btn-submit mb-0\" type=\"submit\">{{'common.create' | translate}}</button>\r\n    </div>\r\n</form>\r\n");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/modules/admin/department/components/edit-department-modal/edit-department-modal.component.html":
/*!******************************************************************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/modules/admin/department/components/edit-department-modal/edit-department-modal.component.html ***!
  \******************************************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<div class=\"modal-header\">\r\n    <h2 class=\"modal-title font-weight-normal\">\r\n        <i aria-hidden=\"true\" class=\"fa fa-building-o\"></i>&nbsp;{{'departments.title' | translate}}</h2>\r\n    <button (click)=\"bsEditModalRef.hide()\" aria-label=\"Close\" class=\"close\" data-dismiss=\"modal\" type=\"button\">\r\n        <span aria-hidden=\"true\">&times;</span></button>\r\n</div>\r\n<form (ngSubmit)=\"onSubmit()\" [formGroup]=\"editDepartmentForm\" class=\"form\">\r\n    <div class=\"modal-body\">\r\n        <div class=\"form-body\">\r\n            <div class=\"row\">\r\n                <div class=\"col-md-12\">\r\n                    <div class=\"form-group\">\r\n                        <label for=\"department_name\">{{'departments.create.fields.department_name' | translate}}\r\n                            <span class=\"text-danger\">&nbsp;*</span></label>\r\n                        <div class=\"position-relative has-icon-left\">\r\n                            <input [ngClass]=\"{ 'is-invalid': isSubmitted && departmentControl.department_name.errors }\" class=\"form-control\" formControlName=\"department_name\" id=\"department_name\" maxlength=\"20\" placeholder=\"{{'departments.create.placeholders.placeholder1' | translate}}\" type=\"text\"/>\r\n                            <div class=\"form-control-position\">\r\n                                <i aria-hidden=\"true\" class=\"fa fa-lock\"></i>\r\n                            </div>\r\n                            <div *ngIf=\"isSubmitted && departmentControl.department_name.errors\" class=\"invalid-feedback\">\r\n                                <div *ngIf=\"departmentControl.department_name.errors.required\">{{'departments.create.error_messages.message1' | translate}}</div>\r\n                                <div *ngIf=\"departmentControl.department_name.errors.maxlength\">{{'departments.create.error_messages.message2' | translate}}</div>\r\n                            </div>\r\n                        </div>\r\n                    </div>\r\n                </div>\r\n                <div class=\"col-md-12\">\r\n                    <div [ngClass]=\"{ 'is-invalid': isSubmitted && department_roles.length == 0 }\" class=\"form-group\">\r\n                        <label>{{'departments.create.fields.department_roles' | translate}}\r\n                            <span class=\"text-danger\">&nbsp;*</span></label><br/>\r\n                        <label *ngFor=\"let role of roles; index as i\" class=\"checkbox-container font-12 font-bold\">\r\n                            <input [(checklist)]=\"department_roles\" [checklistValue]=\"role.id\" class=\"form-control\" name=\"department_chk_department_chk_{{i}}\" type=\"checkbox\"/>\r\n                            {{role.name}}&nbsp;&nbsp; <span class=\"checkbox-checkmark\"></span>\r\n                        </label>\r\n                        <div *ngIf=\"isSubmitted && department_roles.length == 0\" class=\"invalid-feedback\">{{'departments.create.error_messages.message3' | translate}}</div>\r\n                    </div>\r\n                </div>\r\n            </div>\r\n        </div>\r\n    </div>\r\n    <div class=\"modal-footer\">\r\n        <button (click)=\"onCancel()\" class=\"btn btn-cancel mb-0\" type=\"button\">{{'common.close' | translate}}</button>\r\n        <button class=\"btn btn-submit mb-0\" type=\"submit\">{{'common.update' | translate}}</button>\r\n    </div>\r\n</form>\r\n");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/modules/admin/department/pages/department-detail/department-detail.component.html":
/*!*****************************************************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/modules/admin/department/pages/department-detail/department-detail.component.html ***!
  \*****************************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<section *ngIf=\"isDepartmentLoaded\">\r\n    <div class=\"row\">\r\n        <div class=\"col-sm-12\">\r\n            <div class=\"card pl-2 pr-2\">\r\n                <div class=\"card-header pl-0 pr-0\">\r\n                    <!-- <h4 class=\"card-title d-inline-block mb-0 mt-1\">{{'departments.title1' | translate}}</h4> -->\r\n                </div>\r\n                <div class=\"card-content\">\r\n                    <div class=\"card-body\">\r\n                        <div class=\"px-3 pb-3\">\r\n                            <form class=\"form\" id=\"departmentForm\">\r\n                                <div class=\"form-body\">\r\n                                    <div class=\"row border-bottom\">\r\n                                        <div class=\"col-sm-3\">\r\n                                            <div class=\"form-group\">\r\n                                                <label for=\"department_id\">{{'departments.create.fields.department' | translate}}&nbsp;<span class=\"text-danger\">*</span></label>\r\n                                                <input [(ngModel)]=\"departmentInfo.department.name\" class=\"form-control\" id=\"department_id\" name=\"department_id\" readonly=\"\" type=\"text\">\r\n                                            </div>\r\n                                        </div>\r\n                                        <div class=\"col-sm-3\">\r\n                                            <div class=\"form-group\">\r\n                                                <label for=\"role_id\">{{'departments.create.fields.designation' | translate}}&nbsp;<span class=\"text-danger\">*</span></label>\r\n                                                <input [(ngModel)]=\"departmentInfo.department.roles[0].name\" class=\"form-control\" id=\"role_id\" name=\"role_id\" readonly=\"\" type=\"text\">\r\n                                            </div>\r\n                                        </div>\r\n                                        <div class=\"col-sm-6\">\r\n                                            <div class=\"form-group mt-3\">\r\n                                                <a [routerLink]=\"['/departments']\" class=\"btn btn-cancel\">{{'common.cancel' | translate}}</a>\r\n                                                <button (click)=\"saveDepartment()\" *ngxPermissionsOnly=\"['admin', 'super_admin', 'departments_edit']\" class=\"btn btn-submit\" type=\"button\">{{'common.update' | translate}}</button>\r\n                                            </div>\r\n                                        </div>\r\n                                    </div>\r\n                                    <div class=\"row\">\r\n                                        <div class=\"col-sm-12\">\r\n                                            <div class=\"table-responsive-xs table-responsive-sm table-responsive-md table-responsive-lg\">\r\n                                                <table class=\"table table-bordered department_detail mb-0\">\r\n                                                    <thead>\r\n                                                    <tr>\r\n                                                        <th></th>\r\n                                                        <th>\r\n                                                            <label class=\"checkbox-container\" tooltip=\"{{'departments.tooltip.tooltip1' | translate}}\">\r\n                                                                <input (change)=\"selectAllPermissions($event)\" class=\"form-control\" id=\"select_all\" name=\"select_all\" type=\"checkbox\"/>\r\n                                                                <b>{{'departments.create.fields.permission' | translate}}</b>\r\n                                                                <span class=\"checkbox-checkmark\"></span>\r\n                                                            </label>\r\n                                                        </th>\r\n                                                        <th>\r\n                                                            <label class=\"checkbox-container\" tooltip=\"{{'departments.tooltip.tooltip2' | translate}}\">\r\n                                                                <input (change)=\"selectAllViewPermissions($event)\" class=\"form-control\" id=\"select_all_view\" name=\"select_all_view\" type=\"checkbox\"/>\r\n                                                                <b>{{'common.view' | translate}}</b>\r\n                                                                <span class=\"checkbox-checkmark\"></span>\r\n                                                            </label>\r\n                                                        </th>\r\n                                                        <th>\r\n                                                            <label class=\"checkbox-container\" tooltip=\"{{'departments.tooltip.tooltip3' | translate}}\">\r\n                                                                <input (change)=\"selectAllCreatePermissions($event)\" class=\"form-control\" id=\"select_all_create\" name=\"select_all_create\" type=\"checkbox\"/>\r\n                                                                <b>{{'common.create' | translate}}</b>\r\n                                                                <span class=\"checkbox-checkmark\"></span>\r\n                                                            </label>\r\n                                                        </th>\r\n                                                        <th>\r\n                                                            <label class=\"checkbox-container\" tooltip=\"{{'departments.tooltip.tooltip4' | translate}}\">\r\n                                                                <input (change)=\"selectAllEditPermissions($event)\" class=\"form-control\" id=\"select_all_edit\" name=\"select_all_edit\" type=\"checkbox\"/>\r\n                                                                <b>{{'common.edit' | translate}}</b>\r\n                                                                <span class=\"checkbox-checkmark\"></span>\r\n                                                            </label>\r\n                                                        </th>\r\n                                                        <th>\r\n                                                            <label class=\"checkbox-container\" tooltip=\"{{'departments.tooltip.tooltip5' | translate}}\">\r\n                                                                <input (change)=\"selectAllDeletePermissions($event)\" class=\"form-control\" id=\"select_all_delete\" name=\"select_all_delete\" type=\"checkbox\"/>\r\n                                                                <b>{{'common.delete' | translate}}</b>\r\n                                                                <span class=\"checkbox-checkmark\"></span>\r\n                                                            </label>\r\n                                                        </th>\r\n                                                    </tr>\r\n                                                    </thead>\r\n                                                    <tbody *ngFor=\"let menu of departmentInfo.menus | keyvalue; let $index=index;\">\r\n                                                    <tr *ngIf=\"isObjectEmpty(menu.value)\">\r\n                                                        <td></td>\r\n                                                        <td>\r\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<span class=\"checkbox-container menus_selected parent\">\r\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<label tooltip=\"{{'departments.tooltip.tooltip6' | translate}}\">\r\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<input [checked]=\"getPermissionChecked(menu.value, 'id')\" class=\"form-control\" id=\"{{menu.value}}\" type=\"checkbox\" value=\"{{menu.value}}\">\r\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<span class=\"checkbox-checkmark\"></span>\r\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<strong>{{menu.key | translate}}</strong>\r\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t</label>\r\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t</span>\r\n                                                        </td>\r\n                                                        <td>\r\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<span class=\"checkbox-container view\">\r\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<label class=\"view\" tooltip=\"{{'departments.tooltip.tooltip2' | translate}}\">\r\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<input [checked]=\"getPermissionChecked(menu.value, 'view')\" class=\"form-control {{menu.value}}\" id=\"{{menu.value}}\" name=\"view_{{menu.value}}_{{menu.value}}\" type=\"checkbox\" value=\"{{menu.value}}\">\r\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<span class=\"checkbox-checkmark\"></span>\r\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t</label>\r\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t</span>\r\n                                                        </td>\r\n                                                        <td>\r\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<span class=\"checkbox-container create\">\r\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<label class=\"create\" tooltip=\"{{'departments.tooltip.tooltip7' | translate}}\">\r\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<input [checked]=\"getPermissionChecked(menu.value, 'created')\" class=\"form-control {{menu.value}}\" id=\"{{menu.value}}\" name=\"create_{{menu.value}}_{{menu.value}}\" type=\"checkbox\" value=\"{{menu.value}}\">\r\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<span class=\"checkbox-checkmark\"></span>\r\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t</label>\r\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t</span>\r\n                                                        </td>\r\n                                                        <td>\r\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<span class=\"checkbox-container edit\">\r\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<label class=\"edit\" tooltip=\"{{'departments.tooltip.tooltip8' | translate}}\">\r\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<input [checked]=\"getPermissionChecked(menu.value, 'edited')\" class=\"form-control {{menu.value}}\" id=\"{{menu.value}}\" name=\"edit_{{menu.value}}_{{menu.value}}\" type=\"checkbox\" value=\"{{menu.value}}\">\r\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<span class=\"checkbox-checkmark\"></span>\r\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t</label>\r\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t</span>\r\n                                                        </td>\r\n                                                        <td>\r\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<span class=\"checkbox-container delete\">\r\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<label class=\"delete\" tooltip=\"{{'departments.tooltip.tooltip9' | translate}}\">\r\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<input [checked]=\"getPermissionChecked(menu.value, 'deleted')\" class=\"form-control {{menu.value}}\" id=\"{{menu.value}}\" name=\"delete_{{menu.value}}_{{menu.value}}\" type=\"checkbox\" value=\"{{menu.value}}\">\r\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<span class=\"checkbox-checkmark\"></span>\r\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t</label>\r\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t</span>\r\n                                                        </td>\r\n                                                    </tr>\r\n                                                    <tr *ngIf=\"!isObjectEmpty(menu.value)\">\r\n                                                        <td class=\"p-0\" colspan=\"6\">\r\n                                                            <table *ngFor=\"let childMenu of menu.value | keyvalue\" class=\"table table-bordered mb-0\">\r\n                                                                <tr ng-if=\"isObjectEmpty(nestedChildMenu.value)\">\r\n                                                                    <td class=\"text-center\">\r\n                                                                        <a (click)=\"expandRow($index)\">\r\n                                                                            <i *ngIf=\"$index === expandedIndex\" aria-hidden=\"true\" class=\"fa fa-caret-square-o-right\"></i>\r\n                                                                            <i *ngIf=\"$index !== expandedIndex\" aria-hidden=\"true\" class=\"fa fa-caret-square-o-down\"></i>\r\n                                                                        </a>\r\n                                                                    </td>\r\n                                                                    <td>\r\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<span class=\"checkbox-container menus_selected nested_parent\">\r\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<label tooltip=\"{{'departments.tooltip.tooltip10' | translate}}\">\r\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<input [checked]=\"getPermissionChecked(childMenu.key, 'id')\" class=\"form-control\" id=\"{{childMenu.key}}\" type=\"checkbox\" value=\"{{childMenu.key}}\">\r\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<span class=\"checkbox-checkmark\"></span>\r\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<strong>{{menu.key | translate}}</strong>\r\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t</label>\r\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t</span>\r\n                                                                    </td>\r\n                                                                    <td>\r\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<span class=\"checkbox-container\">\r\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<label class=\"view\" tooltip=\"{{'departments.tooltip.tooltip10' | translate}}\">\r\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<input [checked]=\"getPermissionChecked(childMenu.key, 'view')\" class=\"form-control {{childMenu.key}} all_view\" id=\"all_view_{{childMenu.key}}\" name=\"view_{{childMenu.key}}_{{childMenu.key}}\" type=\"checkbox\" value=\"{{childMenu.key}}\">\r\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<span class=\"checkbox-checkmark\"></span>\r\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t</label>\r\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t</span>\r\n                                                                    </td>\r\n                                                                    <td>\r\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<span class=\"checkbox-container\">\r\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<label class=\"create\" tooltip=\"{{'departments.tooltip.tooltip10' | translate}}\">\r\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<input [checked]=\"getPermissionChecked(childMenu.key, 'created')\" class=\"form-control {{childMenu.key}} all_create\" id=\"all_create_{{childMenu.key}}\" name=\"create_{{childMenu.key}}_{{childMenu.key}}\" type=\"checkbox\" value=\"{{childMenu.key}}\">\r\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<span class=\"checkbox-checkmark\"></span>\r\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t</label>\r\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t</span>\r\n                                                                    </td>\r\n                                                                    <td>\r\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<span class=\"checkbox-container\">\r\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<label class=\"edit\" tooltip=\"{{'departments.tooltip.tooltip10' | translate}}\">\r\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<input [checked]=\"getPermissionChecked(childMenu.key, 'edited')\" class=\"form-control {{childMenu.key}} all_edit\" id=\"all_edit_{{childMenu.key}}\" name=\"edit_{{childMenu.key}}_{{childMenu.key}}\" type=\"checkbox\" value=\"{{childMenu.key}}\">\r\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<span class=\"checkbox-checkmark\"></span>\r\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t</label>\r\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t</span>\r\n                                                                    </td>\r\n                                                                    <td>\r\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<span class=\"checkbox-container\">\r\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<label class=\"delete\" tooltip=\"{{'departments.tooltip.tooltip10' | translate}}\">\r\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<input [checked]=\"getPermissionChecked(childMenu.key, 'edited')\" class=\"form-control {{childMenu.key}} all_delete\" id=\"all_delete_{{childMenu.key}}\" name=\"delete_{{childMenu.key}}_{{childMenu.key}}\" type=\"checkbox\">\r\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<span class=\"checkbox-checkmark\"></span>\r\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t</label>\r\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t</span>\r\n                                                                    </td>\r\n                                                                </tr>\r\n                                                                <tr *ngFor=\"let nestedChildMenu of childMenu.value | keyvalue\" [hidden]=\"$index === expandedIndex\">\r\n                                                                    <td class=\"p-0\" colspan=\"6\">\r\n                                                                        <table class=\"table table-hover mb-0 table-bordered\">\r\n                                                                            <tbody>\r\n                                                                            <tr class=\"child c_{{childMenu.key}}\" ng-if=\"isObjectEmpty(nestedChildMenu.value)\">\r\n                                                                                <td></td>\r\n                                                                                <td>\r\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<span class=\"checkbox-container nested_parent_child\">\r\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<label tooltip=\"{{'departments.tooltip.tooltip6' | translate}}\">\r\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<input [checked]=\"getPermissionChecked(nestedChildMenu.value, 'id')\" class=\"form-control {{childMenu.key}}\" id=\"{{nestedChildMenu.value}}\" type=\"checkbox\" value=\"{{nestedChildMenu.value}}\">\r\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<span class=\"checkbox-checkmark\"></span>\r\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<strong>{{nestedChildMenu.key | translate}}</strong>\r\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t</label>\r\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t</span>\r\n                                                                                </td>\r\n                                                                                <td>\r\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<span class=\"checkbox-container\">\r\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<label class=\"view\" tooltip=\"{{'departments.tooltip.tooltip2' | translate}}\">\r\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<input [checked]=\"getPermissionChecked(nestedChildMenu.value, 'view')\" class=\"form-control {{childMenu.key}} {{nestedChildMenu.value}}\" name=\"view_{{childMenu.key}}_{{nestedChildMenu.value}}\" type=\"checkbox\" value=\"{{nestedChildMenu.value}}\">\r\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<span class=\"checkbox-checkmark\"></span>\r\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t</label>\r\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t</span>\r\n                                                                                </td>\r\n                                                                                <td>\r\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<span class=\"checkbox-container\">\r\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<label class=\"create\" tooltip=\"{{'departments.tooltip.tooltip7' | translate}}\">\r\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<input [checked]=\"getPermissionChecked(nestedChildMenu.value, 'created')\" class=\"form-control {{childMenu.key}} {{nestedChildMenu.value}}\" name=\"create_{{childMenu.key}}_{{nestedChildMenu.value}}\" type=\"checkbox\" value=\"{{nestedChildMenu.value}}\">\r\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<span class=\"checkbox-checkmark\"></span>\r\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t</label>\r\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t</span>\r\n                                                                                </td>\r\n                                                                                <td>\r\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<span class=\"checkbox-container\">\r\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<label class=\"edit\" tooltip=\"{{'departments.tooltip.tooltip8' | translate}}\">\r\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<input [checked]=\"getPermissionChecked(nestedChildMenu.value, 'edited')\" class=\"form-control {{childMenu.key}} {{nestedChildMenu.value}}\" name=\"edit_{{childMenu.key}}_{{nestedChildMenu.value}}\" type=\"checkbox\" value=\"{{nestedChildMenu.value}}\">\r\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<span class=\"checkbox-checkmark\"></span>\r\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t</label>\r\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t</span>\r\n                                                                                </td>\r\n                                                                                <td>\r\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<span class=\"checkbox-container\">\r\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<label class=\"delete\" tooltip=\"{{'departments.tooltip.tooltip9' | translate}}\">\r\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<input [checked]=\"getPermissionChecked(nestedChildMenu.value, 'deleted')\" class=\"form-control {{childMenu.key}} {{nestedChildMenu.value}}\" name=\"delete_{{childMenu.key}}_{{nestedChildMenu.value}}\" type=\"checkbox\" value=\"{{nestedChildMenu.value}}\">\r\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<span class=\"checkbox-checkmark\"></span>\r\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t</label>\r\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t</span>\r\n                                                                                </td>\r\n                                                                            </tr>\r\n                                                                            <tr ng-if=\"!isObjectEmpty(nestedChildMenu.value)\"></tr>\r\n                                                                            </tbody>\r\n                                                                        </table>\r\n                                                                    </td>\r\n                                                                </tr>\r\n                                                            </table>\r\n                                                        </td>\r\n                                                    </tr>\r\n                                                    </tbody>\r\n                                                </table>\r\n                                            </div>\r\n                                        </div>\r\n                                    </div>\r\n                                </div>\r\n                            </form>\r\n                        </div>\r\n                    </div>\r\n                </div>\r\n            </div>\r\n        </div>\r\n    </div>\r\n</section>\r\n");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/modules/admin/department/pages/department/department.component.html":
/*!***************************************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/modules/admin/department/pages/department/department.component.html ***!
  \***************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<section>\r\n    <div class=\"row\">\r\n        <div class=\"col-sm-12\">\r\n            <div class=\"card pl-2 pr-2\">\r\n                <div class=\"card-header pl-0 pr-0 border-bottom\">\r\n                    <h4 class=\"main-title mt-2\"><span>{{'departments.title' | translate}}</span></h4>\r\n                    <button (click)=\"openDepartmentCreateModal()\" *ngxPermissionsOnly=\"['admin', 'super_admin', 'departments_create']\" class=\"btn btn-create mb-0\" tooltip=\"{{'common.create' | translate}}\">\r\n                        <i class=\"fa fa-plus\"></i></button>\r\n                </div>\r\n                <div class=\"card-content pt-3 pb-3\">\r\n                    <div class=\"card-body\">\r\n                        <div class=\"row\">\r\n                            <div *ngFor=\"let department of departments; index as i\" class=\"col-sm-6\">\r\n                                <div class=\"row\">\r\n                                    <div class=\"col-sm-12\">\r\n                                        <h4 class=\"float-left sub-title\">{{department.name}}</h4>\r\n                                        <div class=\"action-btn btn-group float-right\" dropdown=\"\">\r\n                                            <button class=\"btn btn-outline-info mb-0\" type=\"button\">{{'departments.columns.actions' | translate}}</button>\r\n                                            <button aria-expanded=\"false\" aria-haspopup=\"true\" class=\"btn btn-outline-info dropdown-toggle mb-0\" dropdownToggle=\"\" type=\"button\">\r\n                                                <span class=\"sr-only\">Toggle Dropdown</span>\r\n                                            </button>\r\n                                            <div *dropdownMenu=\"\" class=\"dropdown-menu action-dropdown animated fadeIn\" role=\"menu\">\r\n                                                <a (click)=\"openDepartmentEditModal(department)\" *ngxPermissionsOnly=\"['admin', 'super_admin', 'departments_edit']\" class=\"dropdown-item\"><i class=\"fa fa-pencil\"></i>&nbsp;Edit</a>\r\n                                                <a (click)=\"deleteDepartment(department.id)\" *ngxPermissionsOnly=\"['admin', 'super_admin', 'departments_delete']\" class=\"dropdown-item\"><i class=\"fa fa-trash-o\"></i>&nbsp;Delete</a>\r\n                                            </div>\r\n                                        </div>\r\n                                    </div>\r\n                                    <div class=\"col-sm-12\">\r\n                                        <div class=\"table-responsive-xs table-responsive-sm table-responsive-md table-responsive-lg table-responsive-xl mt-1\">\r\n                                            <table class=\"table table-bordered table-hover b4-datatable\">\r\n                                                <thead>\r\n                                                <tr>\r\n                                                    <th class=\"width-50\">D{{ i + 1 }}</th>\r\n                                                    <th>{{'departments.columns.designation' | translate}}</th>\r\n                                                    <th class=\"width-50\">{{'departments.columns.actions' | translate}}</th>\r\n                                                </tr>\r\n                                                </thead>\r\n                                                <tbody *ngIf=\"department.roles?.length != 0\">\r\n                                                <tr *ngFor=\"let role of department.roles; index as j\">\r\n                                                    <td class=\"text-center\">{{ j + 1 }}</td>\r\n                                                    <td>\r\n                                                        <div *ngxPermissionsOnly=\"['admin', 'super_admin', 'departments_view']; else elseBlock2; then thenBlock\"></div>\r\n                                                        <ng-template #elseBlock2>\r\n                                                            {{role.name}}&nbsp;\r\n                                                            <span class=\"badge badge-pill badge-dark\">{{role.users}}</span>\r\n                                                        </ng-template>\r\n                                                        <ng-template #thenBlock>\r\n                                                            <a [routerLink]=\"['detail', department.id, role.id]\" tooltip=\"{{'departments.tooltip.tooltip11' | translate}}\">{{role.name}}&nbsp;</a><span class=\"badge badge-pill badge-dark\">{{role.users}}</span>\r\n                                                        </ng-template>\r\n                                                    </td>\r\n                                                    <td class=\"actions-dropdown\">\r\n                                                        <div class=\"btn-group\" dropdown>\r\n                                                            <button aria-controls=\"dropdown-basic-1\" class=\"dropdown-toggle btn-action\" dropdownToggle id=\"button-basic-1\" type=\"button\">\r\n                                                                <i class=\"fa fa-ellipsis-v\"></i></button>\r\n                                                            <ul *dropdownMenu aria-labelledby=\"button-basic-1\" class=\"dropdown-menu animated fadeIn\" id=\"dropdown-basic-1\" role=\"menu\">\r\n                                                                <li *ngxPermissionsOnly=\"['admin', 'super_admin', 'departments_view']\" role=\"menuitem\">\r\n                                                                    <a [routerLink]=\"['detail', department.id, role.id]\" class=\"dropdown-item btn btn-edit btn-raised\" tooltip=\"{{'departments.tooltip.tooltip11' | translate}}\"><i class=\"fa fa-lock\"></i></a>\r\n                                                                </li>\r\n                                                                <li *ngxPermissionsOnly=\"['admin', 'super_admin', 'departments_delete']\" role=\"menuitem\">\r\n                                                                    <a (click)=\"deleteDepartmentRole(department.id, role.id)\" class=\"dropdown-item btn btn-delete btn-raised\" tooltip=\"{{'common.delete' | translate}}\"><i class=\"fa fa-trash-o\"></i></a>\r\n                                                                </li>\r\n                                                            </ul>\r\n                                                        </div>\r\n                                                    </td>\r\n                                                </tr>\r\n                                                </tbody>\r\n                                                <tfoot *ngIf=\"department?.length == 0\">\r\n                                                <tr>\r\n                                                    <td class=\"text-center\" colspan=\"3\">\r\n                                                        <img src=\"assets/img/norecord-img.png\" width=\"50\">\r\n                                                        <p class=\"mt-1\">{{ 'common.empty_message.departments' | translate }}</p>\r\n                                                    </td>\r\n                                                </tr>\r\n                                                </tfoot>\r\n                                            </table>\r\n                                        </div>\r\n                                    </div>\r\n                                </div>\r\n                            </div>\r\n                        </div>\r\n                    </div>\r\n                </div>\r\n            </div>\r\n        </div>\r\n    </div>\r\n</section>\r\n");

/***/ }),

/***/ "./src/app/modules/admin/department/components/create-department-modal/create-department-modal.component.scss":
/*!********************************************************************************************************************!*\
  !*** ./src/app/modules/admin/department/components/create-department-modal/create-department-modal.component.scss ***!
  \********************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL21vZHVsZXMvYWRtaW4vZGVwYXJ0bWVudC9jb21wb25lbnRzL2NyZWF0ZS1kZXBhcnRtZW50LW1vZGFsL2NyZWF0ZS1kZXBhcnRtZW50LW1vZGFsLmNvbXBvbmVudC5zY3NzIn0= */");

/***/ }),

/***/ "./src/app/modules/admin/department/components/create-department-modal/create-department-modal.component.ts":
/*!******************************************************************************************************************!*\
  !*** ./src/app/modules/admin/department/components/create-department-modal/create-department-modal.component.ts ***!
  \******************************************************************************************************************/
/*! exports provided: CreateDepartmentModalComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CreateDepartmentModalComponent", function() { return CreateDepartmentModalComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var ngx_bootstrap_modal__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ngx-bootstrap/modal */ "./node_modules/ngx-bootstrap/modal/fesm5/ngx-bootstrap-modal.js");
/* harmony import */ var ngx_toastr__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ngx-toastr */ "./node_modules/ngx-toastr/fesm5/ngx-toastr.js");
/* harmony import */ var _ngx_translate_core__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @ngx-translate/core */ "./node_modules/@ngx-translate/core/fesm5/ngx-translate-core.js");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! rxjs */ "./node_modules/rxjs/_esm5/index.js");
/* harmony import */ var _core_services_role_service__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../../../../../core/services/role.service */ "./src/app/core/services/role.service.ts");
/* harmony import */ var _core_services_department_service__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../../../../../core/services/department.service */ "./src/app/core/services/department.service.ts");









var CreateDepartmentModalComponent = /** @class */ (function () {
    function CreateDepartmentModalComponent(translate, bsCreateModalRef, formBuilder, toastr, roleService, departmentService) {
        this.translate = translate;
        this.bsCreateModalRef = bsCreateModalRef;
        this.formBuilder = formBuilder;
        this.toastr = toastr;
        this.roleService = roleService;
        this.departmentService = departmentService;
        this.isSubmitted = false;
        this.department_roles = [];
    }
    Object.defineProperty(CreateDepartmentModalComponent.prototype, "departmentControl", {
        get: function () {
            return this.createDepartmentForm.controls;
        },
        enumerable: true,
        configurable: true
    });
    CreateDepartmentModalComponent.prototype.ngOnInit = function () {
        this.onClose = new rxjs__WEBPACK_IMPORTED_MODULE_6__["Subject"]();
        this.loadForm();
        this.getRoles();
    };
    CreateDepartmentModalComponent.prototype.loadForm = function () {
        this.createDepartmentForm = this.formBuilder.group({
            department_name: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required]
        });
    };
    CreateDepartmentModalComponent.prototype.getRoles = function () {
        var _this = this;
        this.roleService.getAll()
            .subscribe(function (data) {
            _this.roles = data;
        });
    };
    CreateDepartmentModalComponent.prototype.onSubmit = function () {
        var _this = this;
        this.isSubmitted = true;
        if (this.createDepartmentForm.invalid || this.department_roles.length == 0) {
            return;
        }
        var roleObj = {
            name: this.createDepartmentForm.value.department_name,
            department_roles: this.department_roles
        };
        this.departmentService.create(roleObj)
            .subscribe(function (data) {
            _this.toastr.success(_this.translate.instant('departments.messages.create'), _this.translate.instant('departments.title'));
            _this.onCancel();
        }, function (error) {
            _this.onCancel();
        });
    };
    CreateDepartmentModalComponent.prototype.onCancel = function () {
        this.onClose.next(false);
        this.bsCreateModalRef.hide();
    };
    CreateDepartmentModalComponent.ctorParameters = function () { return [
        { type: _ngx_translate_core__WEBPACK_IMPORTED_MODULE_5__["TranslateService"] },
        { type: ngx_bootstrap_modal__WEBPACK_IMPORTED_MODULE_3__["BsModalRef"] },
        { type: _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormBuilder"] },
        { type: ngx_toastr__WEBPACK_IMPORTED_MODULE_4__["ToastrService"] },
        { type: _core_services_role_service__WEBPACK_IMPORTED_MODULE_7__["RoleService"] },
        { type: _core_services_department_service__WEBPACK_IMPORTED_MODULE_8__["DepartmentService"] }
    ]; };
    CreateDepartmentModalComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-create-department-modal',
            template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./create-department-modal.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/modules/admin/department/components/create-department-modal/create-department-modal.component.html")).default,
            styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./create-department-modal.component.scss */ "./src/app/modules/admin/department/components/create-department-modal/create-department-modal.component.scss")).default]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_ngx_translate_core__WEBPACK_IMPORTED_MODULE_5__["TranslateService"],
            ngx_bootstrap_modal__WEBPACK_IMPORTED_MODULE_3__["BsModalRef"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormBuilder"],
            ngx_toastr__WEBPACK_IMPORTED_MODULE_4__["ToastrService"],
            _core_services_role_service__WEBPACK_IMPORTED_MODULE_7__["RoleService"],
            _core_services_department_service__WEBPACK_IMPORTED_MODULE_8__["DepartmentService"]])
    ], CreateDepartmentModalComponent);
    return CreateDepartmentModalComponent;
}());



/***/ }),

/***/ "./src/app/modules/admin/department/components/edit-department-modal/edit-department-modal.component.scss":
/*!****************************************************************************************************************!*\
  !*** ./src/app/modules/admin/department/components/edit-department-modal/edit-department-modal.component.scss ***!
  \****************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL21vZHVsZXMvYWRtaW4vZGVwYXJ0bWVudC9jb21wb25lbnRzL2VkaXQtZGVwYXJ0bWVudC1tb2RhbC9lZGl0LWRlcGFydG1lbnQtbW9kYWwuY29tcG9uZW50LnNjc3MifQ== */");

/***/ }),

/***/ "./src/app/modules/admin/department/components/edit-department-modal/edit-department-modal.component.ts":
/*!**************************************************************************************************************!*\
  !*** ./src/app/modules/admin/department/components/edit-department-modal/edit-department-modal.component.ts ***!
  \**************************************************************************************************************/
/*! exports provided: EditDepartmentModalComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "EditDepartmentModalComponent", function() { return EditDepartmentModalComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var ngx_bootstrap_modal__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ngx-bootstrap/modal */ "./node_modules/ngx-bootstrap/modal/fesm5/ngx-bootstrap-modal.js");
/* harmony import */ var ngx_toastr__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ngx-toastr */ "./node_modules/ngx-toastr/fesm5/ngx-toastr.js");
/* harmony import */ var _ngx_translate_core__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @ngx-translate/core */ "./node_modules/@ngx-translate/core/fesm5/ngx-translate-core.js");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! rxjs */ "./node_modules/rxjs/_esm5/index.js");
/* harmony import */ var _core_services_role_service__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../../../../../core/services/role.service */ "./src/app/core/services/role.service.ts");
/* harmony import */ var _core_services_department_service__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../../../../../core/services/department.service */ "./src/app/core/services/department.service.ts");









var EditDepartmentModalComponent = /** @class */ (function () {
    function EditDepartmentModalComponent(translate, bsEditModalRef, formBuilder, toastr, roleService, departmentService) {
        this.translate = translate;
        this.bsEditModalRef = bsEditModalRef;
        this.formBuilder = formBuilder;
        this.toastr = toastr;
        this.roleService = roleService;
        this.departmentService = departmentService;
        this.isSubmitted = false;
        this.department_roles = [];
    }
    Object.defineProperty(EditDepartmentModalComponent.prototype, "departmentControl", {
        get: function () {
            return this.editDepartmentForm.controls;
        },
        enumerable: true,
        configurable: true
    });
    EditDepartmentModalComponent.prototype.ngOnInit = function () {
        this.onClose = new rxjs__WEBPACK_IMPORTED_MODULE_6__["Subject"]();
        this.getRoles();
        this.loadForm();
    };
    EditDepartmentModalComponent.prototype.loadForm = function () {
        this.editDepartmentForm = this.formBuilder.group({
            department_name: [this.department.name, _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required]
        });
        if (this.department && this.department.roles.length > 0) {
            for (var iRow in this.department.roles) {
                this.department_roles.push(this.department.roles[iRow].id);
            }
        }
    };
    EditDepartmentModalComponent.prototype.getRoles = function () {
        var _this = this;
        this.roleService.getAll()
            .subscribe(function (data) {
            _this.roles = data;
        });
    };
    EditDepartmentModalComponent.prototype.onSubmit = function () {
        var _this = this;
        this.isSubmitted = true;
        if (this.editDepartmentForm.invalid || this.department_roles.length == 0) {
            return;
        }
        // --
        // this.toastr.error(this.translate.instant('common.not_allowed'));
        // this.onCancel();
        // return;
        var roleObj = {
            id: this.department.id,
            name: this.editDepartmentForm.value.department_name,
            department_roles: this.department_roles
        };
        this.departmentService.update(roleObj)
            .subscribe(function (data) {
            _this.toastr.success(_this.translate.instant('departments.messages.update'), _this.translate.instant('departments.title'));
            _this.onCancel();
        }, function (error) {
            _this.onCancel();
        });
    };
    EditDepartmentModalComponent.prototype.onCancel = function () {
        this.onClose.next(false);
        this.bsEditModalRef.hide();
    };
    EditDepartmentModalComponent.ctorParameters = function () { return [
        { type: _ngx_translate_core__WEBPACK_IMPORTED_MODULE_5__["TranslateService"] },
        { type: ngx_bootstrap_modal__WEBPACK_IMPORTED_MODULE_3__["BsModalRef"] },
        { type: _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormBuilder"] },
        { type: ngx_toastr__WEBPACK_IMPORTED_MODULE_4__["ToastrService"] },
        { type: _core_services_role_service__WEBPACK_IMPORTED_MODULE_7__["RoleService"] },
        { type: _core_services_department_service__WEBPACK_IMPORTED_MODULE_8__["DepartmentService"] }
    ]; };
    EditDepartmentModalComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-edit-department-modal',
            template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./edit-department-modal.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/modules/admin/department/components/edit-department-modal/edit-department-modal.component.html")).default,
            styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./edit-department-modal.component.scss */ "./src/app/modules/admin/department/components/edit-department-modal/edit-department-modal.component.scss")).default]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_ngx_translate_core__WEBPACK_IMPORTED_MODULE_5__["TranslateService"],
            ngx_bootstrap_modal__WEBPACK_IMPORTED_MODULE_3__["BsModalRef"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormBuilder"],
            ngx_toastr__WEBPACK_IMPORTED_MODULE_4__["ToastrService"],
            _core_services_role_service__WEBPACK_IMPORTED_MODULE_7__["RoleService"],
            _core_services_department_service__WEBPACK_IMPORTED_MODULE_8__["DepartmentService"]])
    ], EditDepartmentModalComponent);
    return EditDepartmentModalComponent;
}());



/***/ }),

/***/ "./src/app/modules/admin/department/department-routing.module.ts":
/*!***********************************************************************!*\
  !*** ./src/app/modules/admin/department/department-routing.module.ts ***!
  \***********************************************************************/
/*! exports provided: DepartmentRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DepartmentRoutingModule", function() { return DepartmentRoutingModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var ngx_permissions__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ngx-permissions */ "./node_modules/ngx-permissions/ngx-permissions.umd.js");
/* harmony import */ var ngx_permissions__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(ngx_permissions__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _pages_department_department_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./pages/department/department.component */ "./src/app/modules/admin/department/pages/department/department.component.ts");
/* harmony import */ var _pages_department_detail_department_detail_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./pages/department-detail/department-detail.component */ "./src/app/modules/admin/department/pages/department-detail/department-detail.component.ts");






var routes = [
    {
        path: '',
        children: [
            {
                path: '',
                component: _pages_department_department_component__WEBPACK_IMPORTED_MODULE_4__["DepartmentComponent"]
            },
            {
                path: 'detail/:id/:roleId',
                canActivate: [ngx_permissions__WEBPACK_IMPORTED_MODULE_3__["NgxPermissionsGuard"]],
                data: {
                    breadcrumbs: {
                        text: 'common.detail',
                        icon: 'fa fa-lock',
                        show: true,
                        isHome: true
                    },
                    permissions: {
                        only: ['admin', 'super_admin', 'departments_view']
                    }
                },
                component: _pages_department_detail_department_detail_component__WEBPACK_IMPORTED_MODULE_5__["DepartmentDetailComponent"]
            }
        ]
    }
];
var DepartmentRoutingModule = /** @class */ (function () {
    function DepartmentRoutingModule() {
    }
    DepartmentRoutingModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)],
            exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]]
        })
    ], DepartmentRoutingModule);
    return DepartmentRoutingModule;
}());



/***/ }),

/***/ "./src/app/modules/admin/department/department.module.ts":
/*!***************************************************************!*\
  !*** ./src/app/modules/admin/department/department.module.ts ***!
  \***************************************************************/
/*! exports provided: DepartmentModule, HttpLoaderFactory */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DepartmentModule", function() { return DepartmentModule; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "HttpLoaderFactory", function() { return HttpLoaderFactory; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");
/* harmony import */ var ngx_bootstrap__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ngx-bootstrap */ "./node_modules/ngx-bootstrap/esm5/ngx-bootstrap.js");
/* harmony import */ var ngx_select2__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ngx-select2 */ "./node_modules/ngx-select2/fesm5/ngx-select2.js");
/* harmony import */ var ngx_permissions__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ngx-permissions */ "./node_modules/ngx-permissions/ngx-permissions.umd.js");
/* harmony import */ var ngx_permissions__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(ngx_permissions__WEBPACK_IMPORTED_MODULE_7__);
/* harmony import */ var _ngx_translate_core__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @ngx-translate/core */ "./node_modules/@ngx-translate/core/fesm5/ngx-translate-core.js");
/* harmony import */ var _ngx_translate_http_loader__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @ngx-translate/http-loader */ "./node_modules/@ngx-translate/http-loader/fesm5/ngx-translate-http-loader.js");
/* harmony import */ var angular_datatables__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! angular-datatables */ "./node_modules/angular-datatables/index.js");
/* harmony import */ var angular_checklist__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! angular-checklist */ "./node_modules/angular-checklist/fesm5/angular-checklist.js");
/* harmony import */ var _shared_shared_module__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ../../../shared/shared.module */ "./src/app/shared/shared.module.ts");
/* harmony import */ var _department_routing_module__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ./department-routing.module */ "./src/app/modules/admin/department/department-routing.module.ts");
/* harmony import */ var _pages_department_department_component__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ./pages/department/department.component */ "./src/app/modules/admin/department/pages/department/department.component.ts");
/* harmony import */ var _components_create_department_modal_create_department_modal_component__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! ./components/create-department-modal/create-department-modal.component */ "./src/app/modules/admin/department/components/create-department-modal/create-department-modal.component.ts");
/* harmony import */ var _components_edit_department_modal_edit_department_modal_component__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! ./components/edit-department-modal/edit-department-modal.component */ "./src/app/modules/admin/department/components/edit-department-modal/edit-department-modal.component.ts");
/* harmony import */ var _pages_department_detail_department_detail_component__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! ./pages/department-detail/department-detail.component */ "./src/app/modules/admin/department/pages/department-detail/department-detail.component.ts");


















var DepartmentModule = /** @class */ (function () {
    function DepartmentModule() {
    }
    DepartmentModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            declarations: [
                _pages_department_department_component__WEBPACK_IMPORTED_MODULE_14__["DepartmentComponent"],
                _components_create_department_modal_create_department_modal_component__WEBPACK_IMPORTED_MODULE_15__["CreateDepartmentModalComponent"],
                _components_edit_department_modal_edit_department_modal_component__WEBPACK_IMPORTED_MODULE_16__["EditDepartmentModalComponent"],
                _pages_department_detail_department_detail_component__WEBPACK_IMPORTED_MODULE_17__["DepartmentDetailComponent"]
            ],
            imports: [
                _angular_common__WEBPACK_IMPORTED_MODULE_3__["CommonModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormsModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_2__["ReactiveFormsModule"],
                _department_routing_module__WEBPACK_IMPORTED_MODULE_13__["DepartmentRoutingModule"],
                angular_datatables__WEBPACK_IMPORTED_MODULE_10__["DataTablesModule"],
                angular_checklist__WEBPACK_IMPORTED_MODULE_11__["ChecklistModule"],
                ngx_select2__WEBPACK_IMPORTED_MODULE_6__["LSelect2Module"],
                ngx_permissions__WEBPACK_IMPORTED_MODULE_7__["NgxPermissionsModule"],
                ngx_bootstrap__WEBPACK_IMPORTED_MODULE_5__["ModalModule"].forRoot(),
                ngx_bootstrap__WEBPACK_IMPORTED_MODULE_5__["TooltipModule"].forRoot(),
                ngx_bootstrap__WEBPACK_IMPORTED_MODULE_5__["BsDropdownModule"].forRoot(),
                _ngx_translate_core__WEBPACK_IMPORTED_MODULE_8__["TranslateModule"].forChild({
                    loader: {
                        provide: _ngx_translate_core__WEBPACK_IMPORTED_MODULE_8__["TranslateLoader"],
                        useFactory: (HttpLoaderFactory),
                        deps: [_angular_common_http__WEBPACK_IMPORTED_MODULE_4__["HttpClient"]]
                    }
                }),
                _shared_shared_module__WEBPACK_IMPORTED_MODULE_12__["SharedModule"]
            ],
            entryComponents: [
                _components_create_department_modal_create_department_modal_component__WEBPACK_IMPORTED_MODULE_15__["CreateDepartmentModalComponent"],
                _components_edit_department_modal_edit_department_modal_component__WEBPACK_IMPORTED_MODULE_16__["EditDepartmentModalComponent"],
            ]
        })
    ], DepartmentModule);
    return DepartmentModule;
}());

// Required for AOT compilation
function HttpLoaderFactory(http) {
    return new _ngx_translate_http_loader__WEBPACK_IMPORTED_MODULE_9__["TranslateHttpLoader"](http, './assets/i18n/', '.json');
}


/***/ }),

/***/ "./src/app/modules/admin/department/pages/department-detail/department-detail.component.scss":
/*!***************************************************************************************************!*\
  !*** ./src/app/modules/admin/department/pages/department-detail/department-detail.component.scss ***!
  \***************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL21vZHVsZXMvYWRtaW4vZGVwYXJ0bWVudC9wYWdlcy9kZXBhcnRtZW50LWRldGFpbC9kZXBhcnRtZW50LWRldGFpbC5jb21wb25lbnQuc2NzcyJ9 */");

/***/ }),

/***/ "./src/app/modules/admin/department/pages/department-detail/department-detail.component.ts":
/*!*************************************************************************************************!*\
  !*** ./src/app/modules/admin/department/pages/department-detail/department-detail.component.ts ***!
  \*************************************************************************************************/
/*! exports provided: DepartmentDetailComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DepartmentDetailComponent", function() { return DepartmentDetailComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var ngx_toastr__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ngx-toastr */ "./node_modules/ngx-toastr/fesm5/ngx-toastr.js");
/* harmony import */ var _ngx_translate_core__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @ngx-translate/core */ "./node_modules/@ngx-translate/core/fesm5/ngx-translate-core.js");
/* harmony import */ var _core_services_department_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../../../../core/services/department.service */ "./src/app/core/services/department.service.ts");
/* harmony import */ var _core_helpers_app_helper__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../../../../../core/helpers/app.helper */ "./src/app/core/helpers/app.helper.ts");
/* harmony import */ var lodash__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! lodash */ "./node_modules/lodash/lodash.js");
/* harmony import */ var lodash__WEBPACK_IMPORTED_MODULE_8___default = /*#__PURE__*/__webpack_require__.n(lodash__WEBPACK_IMPORTED_MODULE_8__);









var DepartmentDetailComponent = /** @class */ (function () {
    function DepartmentDetailComponent(translate, route, router, http, toastr, departmentService) {
        var _this = this;
        this.translate = translate;
        this.route = route;
        this.router = router;
        this.http = http;
        this.toastr = toastr;
        this.departmentService = departmentService;
        this.isDepartmentLoaded = false;
        this.route.paramMap.subscribe(function (params) {
            _this.getDepartments(params.get('id'), params.get('roleId'));
        });
    }
    DepartmentDetailComponent.prototype.ngOnInit = function () {
    };
    DepartmentDetailComponent.prototype.getDepartments = function (departmentId, roleId) {
        var _this = this;
        this.departmentId = departmentId;
        this.roleId = roleId;
        this.departmentService.getDepartmentDetail(departmentId, roleId)
            .subscribe(function (data) {
            _this.isDepartmentLoaded = true;
            _this.departmentInfo = data;
            setTimeout(function () {
                Object(_core_helpers_app_helper__WEBPACK_IMPORTED_MODULE_7__["loadDepartmentMenu"])();
            });
        });
    };
    DepartmentDetailComponent.prototype.selectAllPermissions = function (event) {
        $(':checkbox').prop('checked', event.target.checked);
    };
    DepartmentDetailComponent.prototype.selectAllViewPermissions = function (event) {
        var that = this;
        $('.view input').prop('checked', event.target.checked);
        // --
        // All parent/nested parent selected
        if ($('.view input').prop('checked') == true) {
            that.checkParentPermission(1);
        }
        else {
            that.uncheckParentPermission(1, 2);
        }
    };
    DepartmentDetailComponent.prototype.selectAllCreatePermissions = function (event) {
        var that = this;
        $('.create input').prop('checked', event.target.checked);
        // --
        // All parent/nested parent selected
        if ($('.create input').prop('checked') == true) {
            that.checkParentPermission(1);
        }
        else {
            that.uncheckParentPermission(1, 3);
        }
    };
    DepartmentDetailComponent.prototype.selectAllEditPermissions = function (event) {
        var that = this;
        $('.edit input').prop('checked', event.target.checked);
        // --
        // All parent/nested parent selected
        if ($('.edit input').prop('checked') == true) {
            that.checkParentPermission(1);
        }
        else {
            that.uncheckParentPermission(1, 4);
        }
    };
    DepartmentDetailComponent.prototype.selectAllDeletePermissions = function (event) {
        var that = this;
        $('.delete input').prop('checked', event.target.checked);
        // --
        // All parent/nested parent selected
        if ($('.delete input').prop('checked') == true) {
            that.checkParentPermission(1);
        }
        else {
            that.uncheckParentPermission(1, 5);
        }
    };
    // --
    // Check permissions
    DepartmentDetailComponent.prototype.checkParentPermission = function (key) {
        // --
        // Parent
        $('.parent').each(function () {
            $(this).parent().parent().children('td').eq(key).find('input').prop('checked', true);
        });
        // --
        // Nested parent
        $('.nested_parent').each(function () {
            $(this).parent().parent().children('td').eq(key).find('input').prop('checked', true);
        });
        // --
        // Nested parent child
        $('.nested_parent_child').each(function () {
            $(this).parent().parent().children('td').eq(key).find('input').prop('checked', true);
        });
    };
    // --
    // Uncheck permissions
    DepartmentDetailComponent.prototype.uncheckParentPermission = function (key, key1) {
        // --
        // Parent
        $('.parent').each(function () {
            if ($(this).parent().parent().find('input:checked').not($(this).parent().parent().children('td').eq(key).find('input')).not($(this).parent().parent().children('td').eq(key1).find('input')).length == 0) {
                $(this).parent().parent().children('td').eq(key).find('input').prop('checked', false);
            }
        });
        // --
        // Nested parent
        $('.nested_parent').each(function () {
            if ($(this).parent().parent().find('input:checked').not($(this).parent().parent().children('td').eq(key).find('input')).not($(this).parent().parent().children('td').eq(key1).find('input')).length == 0) {
                $(this).parent().parent().children('td').eq(key).find('input').prop('checked', false);
            }
        });
        // --
        // Nested parent child
        $('.nested_parent_child').each(function () {
            if ($(this).parent().parent().find('input:checked').not($(this).parent().parent().children('td').eq(key).find('input')).not($(this).parent().parent().children('td').eq(key1).find('input')).length == 0) {
                $(this).parent().parent().children('td').eq(key).find('input').prop('checked', false);
            }
        });
    };
    DepartmentDetailComponent.prototype.getPermissionChecked = function (permissionKey, key) {
        if (this.departmentInfo.permissions[permissionKey]) {
            switch (key) {
                case 'view':
                    return this.departmentInfo.permissions[permissionKey].view == permissionKey;
                    break;
                case 'created':
                    return this.departmentInfo.permissions[permissionKey].created == permissionKey;
                    break;
                case 'edited':
                    return this.departmentInfo.permissions[permissionKey].edited == permissionKey;
                    break;
                case 'deleted':
                    return this.departmentInfo.permissions[permissionKey].deleted == permissionKey;
                    break;
                default:
                    return this.departmentInfo.permissions[permissionKey].id == permissionKey;
                    break;
            }
        }
        else {
            return false;
        }
    };
    DepartmentDetailComponent.prototype.isObjectEmpty = function (obj) {
        for (var key in obj) {
            if (obj.hasOwnProperty(key)) {
                return false;
            }
        }
        return true;
    };
    DepartmentDetailComponent.prototype.expandRow = function (index) {
        this.expandedIndex = index === this.expandedIndex ? -1 : index;
    };
    DepartmentDetailComponent.prototype.saveDepartment = function () {
        // --
        // this.toastr.error(this.translate.instant('common.not_allowed'));
        // this.router.navigate(['departments']);
        // return;
        var _this = this;
        var submenu = [], menu = [], childMenu = [], finalSubmenus = [];
        if ($('form#departmentForm').serializeArray()) {
            submenu = $('form#departmentForm').serializeArray();
        }
        $('.menus_selected input:checkbox:checked').map(function () {
            menu.push($(this).val());
        }).get();
        $('.child input:checkbox:checked').map(function () {
            childMenu.push($(this).val());
        }).get();
        // --
        // Submenus
        if (submenu) {
            for (var iRow in submenu) {
                if (!finalSubmenus[submenu[iRow].value]) {
                    finalSubmenus[submenu[iRow].value] = {
                        'view': 0,
                        'created': 0,
                        'edited': 0,
                        'deleted': 0
                    };
                }
                if (submenu[iRow].name.indexOf('view') == 0) {
                    finalSubmenus[submenu[iRow].value].view = parseInt(submenu[iRow].value);
                }
                if (submenu[iRow].name.indexOf('create') == 0) {
                    finalSubmenus[submenu[iRow].value].created = parseInt(submenu[iRow].value);
                }
                if (submenu[iRow].name.indexOf('edit') == 0) {
                    finalSubmenus[submenu[iRow].value].edited = parseInt(submenu[iRow].value);
                }
                if (submenu[iRow].name.indexOf('delete') == 0) {
                    finalSubmenus[submenu[iRow].value].deleted = parseInt(submenu[iRow].value);
                }
            }
        }
        this.departmentService.updateDepartmentDetail(this.departmentId, this.roleId, { 'menu': lodash__WEBPACK_IMPORTED_MODULE_8__["union"](menu, childMenu), 'submenu': finalSubmenus }).subscribe(function (data) {
            _this.toastr.success(_this.translate.instant('departments.messages.update'), _this.translate.instant('departments.title'));
            _this.router.navigate(['departments']);
        });
    };
    DepartmentDetailComponent.ctorParameters = function () { return [
        { type: _ngx_translate_core__WEBPACK_IMPORTED_MODULE_5__["TranslateService"] },
        { type: _angular_router__WEBPACK_IMPORTED_MODULE_3__["ActivatedRoute"] },
        { type: _angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"] },
        { type: _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClient"] },
        { type: ngx_toastr__WEBPACK_IMPORTED_MODULE_4__["ToastrService"] },
        { type: _core_services_department_service__WEBPACK_IMPORTED_MODULE_6__["DepartmentService"] }
    ]; };
    DepartmentDetailComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-department-detail',
            template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./department-detail.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/modules/admin/department/pages/department-detail/department-detail.component.html")).default,
            styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./department-detail.component.scss */ "./src/app/modules/admin/department/pages/department-detail/department-detail.component.scss")).default]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_ngx_translate_core__WEBPACK_IMPORTED_MODULE_5__["TranslateService"],
            _angular_router__WEBPACK_IMPORTED_MODULE_3__["ActivatedRoute"],
            _angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"],
            _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClient"],
            ngx_toastr__WEBPACK_IMPORTED_MODULE_4__["ToastrService"],
            _core_services_department_service__WEBPACK_IMPORTED_MODULE_6__["DepartmentService"]])
    ], DepartmentDetailComponent);
    return DepartmentDetailComponent;
}());



/***/ }),

/***/ "./src/app/modules/admin/department/pages/department/department.component.scss":
/*!*************************************************************************************!*\
  !*** ./src/app/modules/admin/department/pages/department/department.component.scss ***!
  \*************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL21vZHVsZXMvYWRtaW4vZGVwYXJ0bWVudC9wYWdlcy9kZXBhcnRtZW50L2RlcGFydG1lbnQuY29tcG9uZW50LnNjc3MifQ== */");

/***/ }),

/***/ "./src/app/modules/admin/department/pages/department/department.component.ts":
/*!***********************************************************************************!*\
  !*** ./src/app/modules/admin/department/pages/department/department.component.ts ***!
  \***********************************************************************************/
/*! exports provided: DepartmentComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DepartmentComponent", function() { return DepartmentComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");
/* harmony import */ var ngx_bootstrap_modal__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ngx-bootstrap/modal */ "./node_modules/ngx-bootstrap/modal/fesm5/ngx-bootstrap-modal.js");
/* harmony import */ var ngx_toastr__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ngx-toastr */ "./node_modules/ngx-toastr/fesm5/ngx-toastr.js");
/* harmony import */ var _ngx_translate_core__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @ngx-translate/core */ "./node_modules/@ngx-translate/core/fesm5/ngx-translate-core.js");
/* harmony import */ var sweetalert2__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! sweetalert2 */ "./node_modules/sweetalert2/dist/sweetalert2.all.js");
/* harmony import */ var sweetalert2__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(sweetalert2__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var _core_services_department_service__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../../../../../core/services/department.service */ "./src/app/core/services/department.service.ts");
/* harmony import */ var _components_create_department_modal_create_department_modal_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../../components/create-department-modal/create-department-modal.component */ "./src/app/modules/admin/department/components/create-department-modal/create-department-modal.component.ts");
/* harmony import */ var _components_edit_department_modal_edit_department_modal_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../../components/edit-department-modal/edit-department-modal.component */ "./src/app/modules/admin/department/components/edit-department-modal/edit-department-modal.component.ts");










var DepartmentComponent = /** @class */ (function () {
    function DepartmentComponent(translate, http, modalService, toastr, departmentService) {
        this.translate = translate;
        this.http = http;
        this.modalService = modalService;
        this.toastr = toastr;
        this.departmentService = departmentService;
        this.modalConfigs = {
            animated: true,
            keyboard: true,
            backdrop: true,
            ignoreBackdropClick: false,
            class: 'inmodal modal-dialog-centered modal-md animated fadeIn'
        };
    }
    DepartmentComponent.prototype.ngOnInit = function () {
        this.getDepartments();
    };
    DepartmentComponent.prototype.getDepartments = function () {
        var _this = this;
        this.departmentService.getAll()
            .subscribe(function (data) {
            _this.departments = data;
        });
    };
    DepartmentComponent.prototype.openDepartmentCreateModal = function () {
        var _this = this;
        this.modalRef = this.modalService.show(_components_create_department_modal_create_department_modal_component__WEBPACK_IMPORTED_MODULE_8__["CreateDepartmentModalComponent"], this.modalConfigs);
        this.modalRef.content.onClose.subscribe(function (result) {
            _this.getDepartments();
        });
    };
    DepartmentComponent.prototype.openDepartmentEditModal = function (department) {
        var _this = this;
        var modalConfig = {
            animated: true,
            keyboard: true,
            backdrop: true,
            ignoreBackdropClick: false,
            class: 'inmodal modal-dialog-centered modal-md animated fadeIn',
            initialState: {
                department: department
            }
        };
        this.modalRef = this.modalService.show(_components_edit_department_modal_edit_department_modal_component__WEBPACK_IMPORTED_MODULE_9__["EditDepartmentModalComponent"], modalConfig);
        this.modalRef.content.onClose.subscribe(function (result) {
            _this.getDepartments();
        });
    };
    DepartmentComponent.prototype.deleteDepartment = function (departmentId) {
        var _this = this;
        sweetalert2__WEBPACK_IMPORTED_MODULE_6___default.a.fire({
            title: this.translate.instant('common.swal.title'),
            text: this.translate.instant('common.swal.text1'),
            type: 'warning',
            showCancelButton: true,
            confirmButtonText: this.translate.instant('common.swal.confirmButtonText'),
            cancelButtonText: this.translate.instant('common.swal.cancelButtonText')
        }).then(function (result) {
            if (result.value) {
                // // --
                // this.toastr.error(this.translate.instant('common.not_allowed'));
                // return;
                _this.departmentService.delete(departmentId)
                    .subscribe(function (data) {
                    _this.toastr.success(_this.translate.instant('departments.messages.update'), _this.translate.instant('departments.title'));
                    _this.getDepartments();
                });
            }
        });
    };
    DepartmentComponent.prototype.deleteDepartmentRole = function (departmentId, roleId) {
        var _this = this;
        sweetalert2__WEBPACK_IMPORTED_MODULE_6___default.a.fire({
            title: this.translate.instant('common.swal.title'),
            text: this.translate.instant('common.swal.text') + ' ' + this.translate.instant('departments.title2').toLowerCase(),
            type: 'warning',
            showCancelButton: true,
            confirmButtonText: this.translate.instant('common.swal.confirmButtonText'),
            cancelButtonText: this.translate.instant('common.swal.cancelButtonText')
        }).then(function (result) {
            if (result.value) {
                // // --
                // this.toastr.error(this.translate.instant('common.not_allowed'));
                // return;
                _this.departmentService.deleteDepartmentRole(departmentId, roleId)
                    .subscribe(function (data) {
                    _this.toastr.success(_this.translate.instant('roles.messages.delete'), _this.translate.instant('departments.title'));
                    _this.getDepartments();
                });
            }
        });
    };
    DepartmentComponent.ctorParameters = function () { return [
        { type: _ngx_translate_core__WEBPACK_IMPORTED_MODULE_5__["TranslateService"] },
        { type: _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClient"] },
        { type: ngx_bootstrap_modal__WEBPACK_IMPORTED_MODULE_3__["BsModalService"] },
        { type: ngx_toastr__WEBPACK_IMPORTED_MODULE_4__["ToastrService"] },
        { type: _core_services_department_service__WEBPACK_IMPORTED_MODULE_7__["DepartmentService"] }
    ]; };
    DepartmentComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-department',
            template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./department.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/modules/admin/department/pages/department/department.component.html")).default,
            styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./department.component.scss */ "./src/app/modules/admin/department/pages/department/department.component.scss")).default]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_ngx_translate_core__WEBPACK_IMPORTED_MODULE_5__["TranslateService"],
            _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClient"],
            ngx_bootstrap_modal__WEBPACK_IMPORTED_MODULE_3__["BsModalService"],
            ngx_toastr__WEBPACK_IMPORTED_MODULE_4__["ToastrService"],
            _core_services_department_service__WEBPACK_IMPORTED_MODULE_7__["DepartmentService"]])
    ], DepartmentComponent);
    return DepartmentComponent;
}());



/***/ })

}]);
//# sourceMappingURL=modules-admin-department-department-module.js.map