(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["modules-settings-web-settings-web-module"],{

/***/ "./node_modules/ngx-monaco-editor/fesm5/ngx-monaco-editor.js":
/*!*******************************************************************!*\
  !*** ./node_modules/ngx-monaco-editor/fesm5/ngx-monaco-editor.js ***!
  \*******************************************************************/
/*! exports provided: EditorComponent, MonacoEditorModule, NGX_MONACO_EDITOR_CONFIG, ɵa, ɵb */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "EditorComponent", function() { return EditorComponent; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MonacoEditorModule", function() { return MonacoEditorModule; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "NGX_MONACO_EDITOR_CONFIG", function() { return NGX_MONACO_EDITOR_CONFIG; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ɵa", function() { return BaseEditor; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ɵb", function() { return DiffEditorComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! rxjs */ "./node_modules/rxjs/_esm5/index.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");






/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
/** @type {?} */
var loadedMonaco = false;
/** @type {?} */
var loadPromise;
/**
 * @abstract
 */
var BaseEditor = /** @class */ (function () {
    function BaseEditor(config) {
        this.config = config;
        this.onInit = new _angular_core__WEBPACK_IMPORTED_MODULE_1__["EventEmitter"]();
    }
    Object.defineProperty(BaseEditor.prototype, "options", {
        get: /**
         * @return {?}
         */
        function () {
            return this._options;
        },
        set: /**
         * @param {?} options
         * @return {?}
         */
        function (options) {
            this._options = Object.assign({}, this.config.defaultOptions, options);
            if (this._editor) {
                this._editor.dispose();
                this.initMonaco(options);
            }
        },
        enumerable: true,
        configurable: true
    });
    /**
     * @return {?}
     */
    BaseEditor.prototype.ngAfterViewInit = /**
     * @return {?}
     */
    function () {
        var _this = this;
        if (loadedMonaco) {
            // Wait until monaco editor is available
            loadPromise.then((/**
             * @return {?}
             */
            function () {
                _this.initMonaco(_this.options);
            }));
        }
        else {
            loadedMonaco = true;
            loadPromise = new Promise((/**
             * @param {?} resolve
             * @return {?}
             */
            function (resolve) {
                /** @type {?} */
                var baseUrl = _this.config.baseUrl || './assets';
                if (typeof (((/** @type {?} */ (window))).monaco) === 'object') {
                    resolve();
                    return;
                }
                /** @type {?} */
                var onGotAmdLoader = (/**
                 * @return {?}
                 */
                function () {
                    // Load monaco
                    ((/** @type {?} */ (window))).require.config({ paths: { 'vs': baseUrl + "/monaco/vs" } });
                    ((/** @type {?} */ (window))).require(['vs/editor/editor.main'], (/**
                     * @return {?}
                     */
                    function () {
                        if (typeof _this.config.onMonacoLoad === 'function') {
                            _this.config.onMonacoLoad();
                        }
                        _this.initMonaco(_this.options);
                        resolve();
                    }));
                });
                // Load AMD loader if necessary
                if (!((/** @type {?} */ (window))).require) {
                    /** @type {?} */
                    var loaderScript = document.createElement('script');
                    loaderScript.type = 'text/javascript';
                    loaderScript.src = baseUrl + "/monaco/vs/loader.js";
                    loaderScript.addEventListener('load', onGotAmdLoader);
                    document.body.appendChild(loaderScript);
                }
                else {
                    onGotAmdLoader();
                }
            }));
        }
    };
    /**
     * @return {?}
     */
    BaseEditor.prototype.ngOnDestroy = /**
     * @return {?}
     */
    function () {
        if (this._windowResizeSubscription) {
            this._windowResizeSubscription.unsubscribe();
        }
        if (this._editor) {
            this._editor.dispose();
            this._editor = undefined;
        }
    };
    BaseEditor.propDecorators = {
        _editorContainer: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewChild"], args: ['editorContainer', { static: true },] }],
        onInit: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Output"] }],
        options: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"], args: ['options',] }]
    };
    return BaseEditor;
}());
if (false) {}

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
/** @type {?} */
var NGX_MONACO_EDITOR_CONFIG = new _angular_core__WEBPACK_IMPORTED_MODULE_1__["InjectionToken"]('NGX_MONACO_EDITOR_CONFIG');
/**
 * @record
 */
function NgxMonacoEditorConfig() { }
if (false) {}

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
var EditorComponent = /** @class */ (function (_super) {
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__extends"])(EditorComponent, _super);
    function EditorComponent(zone, editorConfig) {
        var _this = _super.call(this, editorConfig) || this;
        _this.zone = zone;
        _this.editorConfig = editorConfig;
        _this._value = '';
        _this.propagateChange = (/**
         * @param {?} _
         * @return {?}
         */
        function (_) { });
        _this.onTouched = (/**
         * @return {?}
         */
        function () { });
        return _this;
    }
    Object.defineProperty(EditorComponent.prototype, "model", {
        set: /**
         * @param {?} model
         * @return {?}
         */
        function (model) {
            this.options.model = model;
            if (this._editor) {
                this._editor.dispose();
                this.initMonaco(this.options);
            }
        },
        enumerable: true,
        configurable: true
    });
    /**
     * @param {?} value
     * @return {?}
     */
    EditorComponent.prototype.writeValue = /**
     * @param {?} value
     * @return {?}
     */
    function (value) {
        var _this = this;
        this._value = value || '';
        // Fix for value change while dispose in process.
        setTimeout((/**
         * @return {?}
         */
        function () {
            if (_this._editor && !_this.options.model) {
                _this._editor.setValue(_this._value);
            }
        }));
    };
    /**
     * @param {?} fn
     * @return {?}
     */
    EditorComponent.prototype.registerOnChange = /**
     * @param {?} fn
     * @return {?}
     */
    function (fn) {
        this.propagateChange = fn;
    };
    /**
     * @param {?} fn
     * @return {?}
     */
    EditorComponent.prototype.registerOnTouched = /**
     * @param {?} fn
     * @return {?}
     */
    function (fn) {
        this.onTouched = fn;
    };
    /**
     * @protected
     * @param {?} options
     * @return {?}
     */
    EditorComponent.prototype.initMonaco = /**
     * @protected
     * @param {?} options
     * @return {?}
     */
    function (options) {
        var _this = this;
        /** @type {?} */
        var hasModel = !!options.model;
        if (hasModel) {
            /** @type {?} */
            var model = monaco.editor.getModel(options.model.uri || '');
            if (model) {
                options.model = model;
                options.model.setValue(this._value);
            }
            else {
                options.model = monaco.editor.createModel(options.model.value, options.model.language, options.model.uri);
            }
        }
        this._editor = monaco.editor.create(this._editorContainer.nativeElement, options);
        if (!hasModel) {
            this._editor.setValue(this._value);
        }
        this._editor.onDidChangeModelContent((/**
         * @param {?} e
         * @return {?}
         */
        function (e) {
            /** @type {?} */
            var value = _this._editor.getValue();
            _this.propagateChange(value);
            // value is not propagated to parent when executing outside zone.
            _this.zone.run((/**
             * @return {?}
             */
            function () { return _this._value = value; }));
        }));
        this._editor.onDidBlurEditorWidget((/**
         * @return {?}
         */
        function () {
            _this.onTouched();
        }));
        // refresh layout on resize event.
        if (this._windowResizeSubscription) {
            this._windowResizeSubscription.unsubscribe();
        }
        this._windowResizeSubscription = Object(rxjs__WEBPACK_IMPORTED_MODULE_3__["fromEvent"])(window, 'resize').subscribe((/**
         * @return {?}
         */
        function () { return _this._editor.layout(); }));
        this.onInit.emit(this._editor);
    };
    EditorComponent.decorators = [
        { type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"], args: [{
                    selector: 'ngx-monaco-editor',
                    template: '<div class="editor-container" #editorContainer></div>',
                    providers: [{
                            provide: _angular_forms__WEBPACK_IMPORTED_MODULE_2__["NG_VALUE_ACCESSOR"],
                            useExisting: Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["forwardRef"])((/**
                             * @return {?}
                             */
                            function () { return EditorComponent; })),
                            multi: true
                        }],
                    styles: ["\n    :host {\n      display: block;\n      height: 200px;\n    }\n\n    .editor-container {\n      width: 100%;\n      height: 98%;\n    }\n  "]
                }] }
    ];
    /** @nocollapse */
    EditorComponent.ctorParameters = function () { return [
        { type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["NgZone"] },
        { type: undefined, decorators: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Inject"], args: [NGX_MONACO_EDITOR_CONFIG,] }] }
    ]; };
    EditorComponent.propDecorators = {
        model: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"], args: ['model',] }]
    };
    return EditorComponent;
}(BaseEditor));
if (false) {}

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
var DiffEditorComponent = /** @class */ (function (_super) {
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__extends"])(DiffEditorComponent, _super);
    function DiffEditorComponent(editorConfig) {
        var _this = _super.call(this, editorConfig) || this;
        _this.editorConfig = editorConfig;
        return _this;
    }
    Object.defineProperty(DiffEditorComponent.prototype, "originalModel", {
        set: /**
         * @param {?} model
         * @return {?}
         */
        function (model) {
            this._originalModel = model;
            if (this._editor) {
                this._editor.dispose();
                this.initMonaco(this.options);
            }
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(DiffEditorComponent.prototype, "modifiedModel", {
        set: /**
         * @param {?} model
         * @return {?}
         */
        function (model) {
            this._modifiedModel = model;
            if (this._editor) {
                this._editor.dispose();
                this.initMonaco(this.options);
            }
        },
        enumerable: true,
        configurable: true
    });
    /**
     * @protected
     * @param {?} options
     * @return {?}
     */
    DiffEditorComponent.prototype.initMonaco = /**
     * @protected
     * @param {?} options
     * @return {?}
     */
    function (options) {
        var _this = this;
        if (!this._originalModel || !this._modifiedModel) {
            throw new Error('originalModel or modifiedModel not found for ngx-monaco-diff-editor');
        }
        this._originalModel.language = this._originalModel.language || options.language;
        this._modifiedModel.language = this._modifiedModel.language || options.language;
        /** @type {?} */
        var originalModel = monaco.editor.createModel(this._originalModel.code, this._originalModel.language);
        /** @type {?} */
        var modifiedModel = monaco.editor.createModel(this._modifiedModel.code, this._modifiedModel.language);
        this._editorContainer.nativeElement.innerHTML = '';
        /** @type {?} */
        var theme = options.theme;
        this._editor = monaco.editor.createDiffEditor(this._editorContainer.nativeElement, options);
        options.theme = theme;
        this._editor.setModel({
            original: originalModel,
            modified: modifiedModel
        });
        // refresh layout on resize event.
        if (this._windowResizeSubscription) {
            this._windowResizeSubscription.unsubscribe();
        }
        this._windowResizeSubscription = Object(rxjs__WEBPACK_IMPORTED_MODULE_3__["fromEvent"])(window, 'resize').subscribe((/**
         * @return {?}
         */
        function () { return _this._editor.layout(); }));
        this.onInit.emit(this._editor);
    };
    DiffEditorComponent.decorators = [
        { type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"], args: [{
                    selector: 'ngx-monaco-diff-editor',
                    template: '<div class="editor-container" #editorContainer></div>',
                    styles: ["\n    :host {\n      display: block;\n      height: 200px;\n    }\n\n    .editor-container {\n      width: 100%;\n      height: 98%;\n    }\n  "]
                }] }
    ];
    /** @nocollapse */
    DiffEditorComponent.ctorParameters = function () { return [
        { type: undefined, decorators: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Inject"], args: [NGX_MONACO_EDITOR_CONFIG,] }] }
    ]; };
    DiffEditorComponent.propDecorators = {
        originalModel: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"], args: ['originalModel',] }],
        modifiedModel: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"], args: ['modifiedModel',] }]
    };
    return DiffEditorComponent;
}(BaseEditor));
if (false) {}

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
var MonacoEditorModule = /** @class */ (function () {
    function MonacoEditorModule() {
    }
    /**
     * @param {?=} config
     * @return {?}
     */
    MonacoEditorModule.forRoot = /**
     * @param {?=} config
     * @return {?}
     */
    function (config) {
        if (config === void 0) { config = {}; }
        return {
            ngModule: MonacoEditorModule,
            providers: [
                { provide: NGX_MONACO_EDITOR_CONFIG, useValue: config }
            ]
        };
    };
    MonacoEditorModule.decorators = [
        { type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"], args: [{
                    imports: [
                        _angular_common__WEBPACK_IMPORTED_MODULE_4__["CommonModule"]
                    ],
                    declarations: [
                        EditorComponent,
                        DiffEditorComponent
                    ],
                    exports: [
                        EditorComponent,
                        DiffEditorComponent
                    ]
                },] }
    ];
    return MonacoEditorModule;
}());

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
/**
 * @record
 */
function DiffEditorModel() { }
if (false) {}
/**
 * @record
 */
function NgxEditorModel() { }
if (false) {}

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */


//# sourceMappingURL=ngx-monaco-editor.js.map


/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/modules/settings-web/components/manager-regions-create/manager-regions-create.component.html":
/*!****************************************************************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/modules/settings-web/components/manager-regions-create/manager-regions-create.component.html ***!
  \****************************************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<div class=\"modal-header\">\r\n    <h2 class=\"modal-title font-weight-normal\">\r\n        <i aria-hidden=\"true\" class=\"fa fa-list-alt\"></i>&nbsp;{{'settings_web.manager_regions.create.title1' | translate}}</h2>\r\n    <button (click)=\"bsModalRef.hide()\" aria-label=\"Close\" class=\"close\" data-dismiss=\"modal\" type=\"button\">\r\n        <span aria-hidden=\"true\">&times;</span></button>\r\n</div>\r\n<form (ngSubmit)=\"onSubmit()\" [formGroup]=\"createManagerRegionsForm\" class=\"bs4-forms\">\r\n    <div class=\"modal-body\">\r\n        <div class=\"form-body\">\r\n            <div class=\"row\">\r\n                <div class=\"col-md-12\">\r\n                    <div class=\"form-group\">\r\n                        <label for=\"regions_id\">{{'settings_web.manager_regions.create.fields.select_region' | translate}}</label>\r\n                        <span class=\"text-danger\">*</span>\r\n                        <ng-select [items]=\"regionData\" [ngClass]=\"{ 'is-invalid': isFormSubmitted && managerRegionsControl.regions_id.errors }\" [searchable]=\"true\" [selectOnTab]=\"true\" bindLabel=\"name\" bindValue=\"id\" formControlName=\"regions_id\" placeholder=\"{{'settings_web.manager_regions.create.placeholders.placeholder1' | translate}}\"></ng-select>\r\n                        <div *ngIf=\"isFormSubmitted && managerRegionsControl.regions_id.errors\" class=\"invalid-feedback\">\r\n                            <div *ngIf=\"managerRegionsControl.regions_id.errors.required\">{{'settings_web.manager_regions.create.fields.select_region' | translate}} {{'shared.error_messages.message1' | translate}}</div>\r\n                        </div>\r\n                    </div>\r\n                </div>\r\n                <div class=\"col-md-12\">\r\n                    <div class=\"form-group\">\r\n                        <label for=\"index\">{{'settings_web.manager_regions.create.fields.index' | translate}}</label>\r\n                        <span class=\"text-danger\">*</span>\r\n                        <input [ngClass]=\"{ 'is-invalid': isFormSubmitted && managerRegionsControl.index.errors }\" class=\"form-control\" formControlName=\"index\" placeholder=\"{{'settings_web.manager_regions.create.fields.index' | translate}}\" type=\"text\"/>\r\n                        <div *ngIf=\"isFormSubmitted && managerRegionsControl.index.errors\" class=\"invalid-feedback\">\r\n                            <div *ngIf=\"managerRegionsControl.index.errors.required\">{{'settings_web.manager_regions.create.fields.index' | translate}} {{'shared.error_messages.message1' | translate}}</div>\r\n                            <div *ngIf=\"managerRegionsControl.index.errors.min\">{{'settings_web.manager_regions.create.fields.index' | translate}} {{'shared.error_messages.message2' | translate}}</div>\r\n                        </div>\r\n                    </div>\r\n                </div>\r\n            </div>\r\n\r\n        </div>\r\n    </div>\r\n    <div class=\"modal-footer\">\r\n        <button (click)=\"onCancel()\" class=\"btn btn-cancel mb-0\" data-dismiss=\"modal\" type=\"button\">{{'common.close' | translate}}</button>\r\n        <button class=\"btn btn-submit mb-0\" type=\"submit\"><span>{{'common.create' | translate}}</span></button>\r\n    </div>\r\n</form>\r\n");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/modules/settings-web/components/manager-regions-edit/manager-regions-edit.component.html":
/*!************************************************************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/modules/settings-web/components/manager-regions-edit/manager-regions-edit.component.html ***!
  \************************************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<div class=\"modal-header\">\r\n    <h2 class=\"modal-title font-weight-normal\">\r\n        <i aria-hidden=\"true\" class=\"fa fa-list-alt\"></i>&nbsp;{{'settings_web.manager_regions.create.title2' | translate}}</h2>\r\n    <button (click)=\"bsModalRef.hide()\" aria-label=\"Close\" class=\"close\" data-dismiss=\"modal\" type=\"button\">\r\n        <span aria-hidden=\"true\">&times;</span></button>\r\n</div>\r\n<form (ngSubmit)=\"onSubmit()\" [formGroup]=\"editManagerRegionsForm\" class=\"bs4-forms\">\r\n    <div class=\"modal-body\">\r\n        <div class=\"form-body\">\r\n            <div class=\"row\">\r\n                <div class=\"col-md-12\">\r\n                    <div class=\"form-group\">\r\n                        <label for=\"regions_id\">{{'settings_web.manager_regions.create.fields.select_region' | translate}}</label>\r\n                        <span class=\"text-danger\">*</span>\r\n                        <ng-select [items]=\"regionData\" [ngClass]=\"{ 'is-invalid': isFormSubmitted && managerRegionsControl.regions_id.errors }\" [searchable]=\"true\" [selectOnTab]=\"true\" bindLabel=\"name\" bindValue=\"id\" formControlName=\"regions_id\" placeholder=\"{{'settings_web.manager_regions.create.placeholders.placeholder1' | translate}}\"></ng-select>\r\n                        <div *ngIf=\"isFormSubmitted && managerRegionsControl.regions_id.errors\" class=\"invalid-feedback\">\r\n                            <div *ngIf=\"managerRegionsControl.regions_id.errors.required\">{{'settings_web.manager_regions.create.fields.select_region' | translate}} {{'shared.error_messages.message1' | translate}}</div>\r\n                        </div>\r\n                    </div>\r\n                </div>\r\n                <div class=\"col-md-12\">\r\n                    <div class=\"form-group\">\r\n                        <label for=\"index\">{{'settings_web.manager_regions.create.fields.index' | translate}}</label>\r\n                        <span class=\"text-danger\">*</span>\r\n                        <input [ngClass]=\"{ 'is-invalid': isFormSubmitted && managerRegionsControl.index.errors }\" class=\"form-control\" formControlName=\"index\" placeholder=\"{{'settings_web.manager_regions.create.fields.index' | translate}}\" type=\"text\"/>\r\n                        <div *ngIf=\"isFormSubmitted && managerRegionsControl.index.errors\" class=\"invalid-feedback\">\r\n                            <div *ngIf=\"managerRegionsControl.index.errors.required\">{{'settings_web.manager_regions.create.fields.index' | translate}} {{'shared.error_messages.message1' | translate}}</div>\r\n                            <div *ngIf=\"managerRegionsControl.index.errors.min\">{{'settings_web.manager_regions.create.fields.index' | translate}} {{'shared.error_messages.message2' | translate}}</div>\r\n                        </div>\r\n                    </div>\r\n                </div>\r\n            </div>\r\n        </div>\r\n    </div>\r\n    <div class=\"modal-footer\">\r\n        <button (click)=\"onCancel()\" class=\"btn btn-cancel mb-0\" data-dismiss=\"modal\" type=\"button\">{{'common.close' | translate}}</button>\r\n        <button class=\"btn btn-submit mb-0\" type=\"submit\"><span>{{'common.update' | translate}}</span></button>\r\n    </div>\r\n</form>\r\n");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/modules/settings-web/components/manager-widgets-create/manager-widgets-create.component.html":
/*!****************************************************************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/modules/settings-web/components/manager-widgets-create/manager-widgets-create.component.html ***!
  \****************************************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<div class=\"modal-header\">\r\n    <h2 class=\"modal-title font-weight-normal\">\r\n        <i aria-hidden=\"true\" class=\"fa fa-list-alt\"></i>&nbsp;{{'settings_web.manager_widgets.create.title1' | translate}}</h2>\r\n    <button (click)=\"bsModalRef.hide()\" aria-label=\"Close\" class=\"close\" data-dismiss=\"modal\" type=\"button\">\r\n        <span aria-hidden=\"true\">&times;</span></button>\r\n</div>\r\n<form (ngSubmit)=\"onSubmit()\" [formGroup]=\"createManagerWidgetsForm\" class=\"bs4-forms\">\r\n    <div class=\"modal-body\">\r\n        <div class=\"form-body\">\r\n            <div class=\"row\">\r\n                <div class=\"col-md-12\">\r\n                    <div class=\"form-group\">\r\n                        <label for=\"widgets_id\">{{'settings_web.manager_widgets.create.fields.select_widget' | translate}}</label>\r\n                        <span class=\"text-danger\">*</span>\r\n                        <ng-select [items]=\"widgetData\" [ngClass]=\"{ 'is-invalid': isFormSubmitted && managerWidgetsControl.widgets_id.errors }\" [searchable]=\"true\" [selectOnTab]=\"true\" bindLabel=\"name\" bindValue=\"id\" formControlName=\"widgets_id\" placeholder=\"{{'settings_web.manager_widgets.create.placeholders.placeholder1' | translate}}\"></ng-select>\r\n                        <div *ngIf=\"isFormSubmitted && managerWidgetsControl.widgets_id.errors\" class=\"invalid-feedback\">\r\n                            <div *ngIf=\"managerWidgetsControl.widgets_id.errors.required\">{{'settings_web.manager_widgets.create.fields.select_widget' | translate}} {{'shared.error_messages.message1' | translate}}</div>\r\n                        </div>\r\n                    </div>\r\n                </div>\r\n                <div class=\"col-md-12\">\r\n                    <div class=\"form-group\">\r\n                        <label for=\"index\">{{'settings_web.manager_widgets.create.fields.index' | translate}}</label>\r\n                        <span class=\"text-danger\">*</span>\r\n                        <input [ngClass]=\"{ 'is-invalid': isFormSubmitted && managerWidgetsControl.index.errors }\" class=\"form-control\" formControlName=\"index\" placeholder=\"{{'settings_web.manager_widgets.create.placeholders.placeholder2' | translate}}\" type=\"text\"/>\r\n                        <div *ngIf=\"isFormSubmitted && managerWidgetsControl.index.errors\" class=\"invalid-feedback\">\r\n                            <div *ngIf=\"managerWidgetsControl.index.errors.required\">{{'settings_web.manager_widgets.create.fields.index' | translate}} {{'shared.error_messages.message1' | translate}}</div>\r\n                            <div *ngIf=\"managerWidgetsControl.index.errors.min\">{{'settings_web.manager_widgets.create.fields.index' | translate}} {{'shared.error_messages.message2' | translate}}</div>\r\n                        </div>\r\n                    </div>\r\n                </div>\r\n            </div>\r\n\r\n        </div>\r\n    </div>\r\n    <div class=\"modal-footer\">\r\n        <button (click)=\"onCancel()\" class=\"btn btn-cancel mb-0\" data-dismiss=\"modal\" type=\"button\">{{'common.close' | translate}}</button>\r\n        <button class=\"btn btn-submit mb-0\" type=\"submit\"><span>{{'common.create' | translate}}</span></button>\r\n    </div>\r\n</form>\r\n");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/modules/settings-web/components/manager-widgets-edit/manager-widgets-edit.component.html":
/*!************************************************************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/modules/settings-web/components/manager-widgets-edit/manager-widgets-edit.component.html ***!
  \************************************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<div class=\"modal-header\">\r\n    <h2 class=\"modal-title font-weight-normal\">\r\n        <i aria-hidden=\"true\" class=\"fa fa-list-alt\"></i>&nbsp;{{'settings_web.manager_widgets.create.title2' | translate}}</h2>\r\n    <button (click)=\"bsModalRef.hide()\" aria-label=\"Close\" class=\"close\" data-dismiss=\"modal\" type=\"button\">\r\n        <span aria-hidden=\"true\">&times;</span></button>\r\n</div>\r\n<form (ngSubmit)=\"onSubmit()\" [formGroup]=\"editManagerWidgetsForm\" class=\"bs4-forms\">\r\n    <div class=\"modal-body\">\r\n        <div class=\"form-body\">\r\n            <div class=\"row\">\r\n                <div class=\"col-md-12\">\r\n                    <div class=\"form-group\">\r\n                        <label for=\"widgets_id\">{{'settings_web.manager_widgets.create.fields.select_widget' | translate}}</label>\r\n                        <span class=\"text-danger\">*</span>\r\n                        <ng-select [items]=\"widgetData\" [ngClass]=\"{ 'is-invalid': isFormSubmitted && managerWidgetsControl.widgets_id.errors }\" [searchable]=\"true\" [selectOnTab]=\"true\" bindLabel=\"name\" bindValue=\"id\" formControlName=\"widgets_id\" placeholder=\"{{'settings_web.manager_widgets.create.placeholders.placeholder1' | translate}}\"></ng-select>\r\n                        <div *ngIf=\"isFormSubmitted && managerWidgetsControl.widgets_id.errors\" class=\"invalid-feedback\">\r\n                            <div *ngIf=\"managerWidgetsControl.widgets_id.errors.required\">{{'settings_web.manager_widgets.create.fields.select_widget' | translate}} {{'shared.error_messages.message1' | translate}}</div>\r\n                        </div>\r\n                    </div>\r\n                </div>\r\n                <div class=\"col-md-12\">\r\n                    <div class=\"form-group\">\r\n                        <label for=\"index\">{{'settings_web.manager_widgets.create.fields.index' | translate}}</label>\r\n                        <span class=\"text-danger\">*</span>\r\n                        <input [ngClass]=\"{ 'is-invalid': isFormSubmitted && managerWidgetsControl.index.errors }\" class=\"form-control\" formControlName=\"index\" placeholder=\"{{'settings_web.manager_widgets.create.placeholders.placeholder2' | translate}}\" type=\"text\"/>\r\n                        <div *ngIf=\"isFormSubmitted && managerWidgetsControl.index.errors\" class=\"invalid-feedback\">\r\n                            <div *ngIf=\"managerWidgetsControl.index.errors.required\">{{'settings_web.manager_widgets.create.fields.index' | translate}} {{'shared.error_messages.message1' | translate}}</div>\r\n                            <div *ngIf=\"managerWidgetsControl.index.errors.min\">{{'settings_web.manager_widgets.create.fields.index' | translate}} {{'shared.error_messages.message2' | translate}}</div>\r\n                        </div>\r\n                    </div>\r\n                </div>\r\n            </div>\r\n        </div>\r\n    </div>\r\n    <div class=\"modal-footer\">\r\n        <button (click)=\"onCancel()\" class=\"btn btn-cancel mb-0\" data-dismiss=\"modal\" type=\"button\">{{'common.close' | translate}}</button>\r\n        <button class=\"btn btn-submit mb-0\" type=\"submit\"><span>{{'common.update' | translate}}</span></button>\r\n    </div>\r\n</form>\r\n");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/modules/settings-web/components/manager-widgets-types-create/manager-widgets-types-create.component.html":
/*!****************************************************************************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/modules/settings-web/components/manager-widgets-types-create/manager-widgets-types-create.component.html ***!
  \****************************************************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<div class=\"modal-header\">\r\n    <h2 class=\"modal-title font-weight-normal\">\r\n        <i aria-hidden=\"true\" class=\"fa fa-list-alt\"></i>&nbsp;{{'settings_web.manager_widgets_types.create.title1' | translate}}\r\n    </h2>\r\n    <button (click)=\"bsModalRef.hide()\" aria-label=\"Close\" class=\"close\" data-dismiss=\"modal\" type=\"button\">\r\n        <span aria-hidden=\"true\">&times;</span></button>\r\n</div>\r\n<form (ngSubmit)=\"onSubmit()\" [formGroup]=\"createManagerWidgetsTypesForm\" class=\"bs4-forms\">\r\n    <div class=\"modal-body\">\r\n        <div class=\"form-body\">\r\n            <div class=\"row\">\r\n                <div class=\"col-md-12\">\r\n                    <div class=\"form-group\">\r\n                        <label for=\"field_id\">{{'settings_web.manager_widgets_types.create.fields.select_field' | translate}}</label>\r\n                        <span class=\"text-danger\">*</span>\r\n                        <ng-select (change)=\"onChange($event)\" [items]=\"fieldData\" [ngClass]=\"{ 'is-invalid': isFormSubmitted && managerWidgetsTypesControl.field_id.errors }\" [searchable]=\"true\" [selectOnTab]=\"true\" bindLabel=\"name\" bindValue=\"id\" formControlName=\"field_id\" placeholder=\"{{'settings_web.manager_widgets_types.create.placeholders.placeholder1' | translate}}\"></ng-select>\r\n                        <div *ngIf=\"isFormSubmitted && managerWidgetsTypesControl.field_id.errors\" class=\"invalid-feedback\">\r\n                            <div *ngIf=\"managerWidgetsTypesControl.field_id.errors.required\">{{'settings_web.manager_widgets_types.create.fields.select_field' | translate}} {{'shared.error_messages.message1' | translate}}</div>\r\n                        </div>\r\n                    </div>\r\n                </div>\r\n                <div class=\"col-md-12\">\r\n                    <div class=\"form-group\">\r\n                        <label for=\"label\">{{'settings_web.manager_widgets_types.create.fields.label' | translate}}</label>\r\n                        <span class=\"text-danger\">*</span>\r\n                        <input [ngClass]=\"{ 'is-invalid': isFormSubmitted && managerWidgetsTypesControl.label.errors }\" class=\"form-control\" formControlName=\"label\" placeholder=\"{{'settings_web.manager_widgets_types.create.placeholders.placeholder3' | translate}}\" type=\"text\"/>\r\n                        <div *ngIf=\"isFormSubmitted && managerWidgetsTypesControl.label.errors\" class=\"invalid-feedback\">\r\n                            <div *ngIf=\"managerWidgetsTypesControl.label.errors.required\">{{'settings_web.manager_widgets_types.create.fields.label' | translate}} {{'shared.error_messages.message1' | translate}}</div>\r\n                        </div>\r\n                    </div>\r\n                </div>\r\n                <div class=\"col-md-12\">\r\n                    <div class=\"form-group\">\r\n                        <label>{{'settings_web.manager_widgets_types.create.fields.required' | translate}}</label>\r\n                        <input class=\"form-control\" formControlName=\"is_required\" type=\"checkbox\"/>\r\n                    </div>\r\n                </div>\r\n                <div class=\"col-md-12\">\r\n                    <div class=\"form-group\">\r\n                        <label>{{'settings_web.manager_widgets_types.create.fields.index' | translate}}</label>\r\n                        <span class=\"text-danger\">*</span>\r\n                        <input [ngClass]=\"{ 'is-invalid': isFormSubmitted && managerWidgetsTypesControl.index.errors }\" class=\"form-control\" formControlName=\"index\" placeholder=\"{{'settings_web.manager_widgets_types.create.placeholders.placeholder3' | translate}}\" type=\"number\"/>\r\n                        <div *ngIf=\"isFormSubmitted && managerWidgetsTypesControl.index.errors\" class=\"invalid-feedback\">\r\n                            <div *ngIf=\"managerWidgetsTypesControl.index.errors.required\">{{'settings_web.manager_widgets_types.create.fields.index' | translate}} {{'shared.error_messages.message1' | translate}}</div>\r\n                            <div *ngIf=\"managerWidgetsTypesControl.index.errors.min\">{{'settings_web.manager_widgets_types.create.fields.index' | translate}} {{'shared.error_messages.message2' | translate}}</div>\r\n                        </div>\r\n                    </div>\r\n                </div>\r\n                <div class=\"col-md-12\">\r\n                    <div class=\"form-group\">\r\n                        <label for=\"render_type\">{{'settings_web.manager_widgets_types.create.fields.render_type' | translate}}</label>\r\n                        <span class=\"text-danger\">*</span>\r\n                        <ng-select [items]=\"renderTypeData\" [ngClass]=\"{ 'is-invalid': isFormSubmitted && managerWidgetsTypesControl.render_type.errors }\" [searchable]=\"true\" [selectOnTab]=\"true\" bindLabel=\"name\" bindValue=\"value\" formControlName=\"render_type\" placeholder=\"{{'settings_web.manager_widgets_types.create.placeholders.placeholder2' | translate}}\"></ng-select>\r\n                        <div *ngIf=\"isFormSubmitted && managerWidgetsTypesControl.render_type.errors\" class=\"invalid-feedback\">\r\n                            <div *ngIf=\"managerWidgetsTypesControl.render_type.errors.required\">{{'settings_web.manager_widgets_types.create.fields.render_type' | translate}} {{'shared.error_messages.message1' | translate}}</div>\r\n                        </div>\r\n                    </div>\r\n                </div>\r\n                <div *ngIf=\"createManagerWidgetsTypesForm.get('field_id').value == 3\" class=\"col-md-12\">\r\n                    <div class=\"table-responsive-xs table-responsive-sm table-responsive-md table-responsive-lg table-responsive-xl\">\r\n                        <ng-container formArrayName=\"select_options\">\r\n                            <table cellpadding=\"0\" cellspacing=\"0\" class=\"table table-bordered table-hover b4-datatable\" width=\"100%\">\r\n                                <thead>\r\n                                <tr>\r\n                                    <th colspan=\"3\" text-align=\"center\">{{'settings.custom_fields.headings.head1' | translate}}</th>\r\n                                </tr>\r\n                                <tr>\r\n                                    <th>{{'settings.custom_fields.columns.label' | translate}}</th>\r\n                                    <th>{{'settings.custom_fields.columns.value' | translate}}</th>\r\n                                    <th>\r\n                                        <button (click)=\"addOption()\" class=\"btn btn-raised mint-gradient white mb-0\" type=\"button\">\r\n                                            <i class=\"fa fa-plus\"></i></button>\r\n                                    </th>\r\n                                </tr>\r\n                                </thead>\r\n                                <tbody *ngIf=\"createManagerWidgetsTypesForm.get('select_options').controls?.length != 0\">\r\n                                <tr *ngFor=\"let option of createManagerWidgetsTypesForm.get('select_options').controls; let j = index\">\r\n                                    <ng-container [formGroupName]=\"j\">\r\n                                        <td>\r\n                                            <input [ngClass]=\"{ 'is-invalid': isFormSubmitted && managerWidgetsTypesControl.select_options.controls[j].controls.label.errors }\" class=\"form-control\" formControlName=\"label\" type=\"text\"/>\r\n                                            <div *ngIf=\"isFormSubmitted &&  managerWidgetsTypesControl.select_options.controls[j].controls.label.errors\" class=\"invalid-feedback\">\r\n                                                <div *ngIf=\"managerWidgetsTypesControl.select_options.controls[j].controls.label.errors.required\">{{'settings.custom_fields.create.error_messages.message5' | translate}}</div>\r\n                                            </div>\r\n                                        </td>\r\n                                        <td>\r\n                                            <input [ngClass]=\"{ 'is-invalid': isFormSubmitted && managerWidgetsTypesControl.select_options.controls[j].controls.value.errors }\" class=\"form-control\" formControlName=\"value\" type=\"text\"/>\r\n                                            <div *ngIf=\"isFormSubmitted &&  managerWidgetsTypesControl.select_options.controls[j].controls.value.errors\" class=\"invalid-feedback\">\r\n                                                <div *ngIf=\"managerWidgetsTypesControl.select_options.controls[j].controls.value.errors.required\">{{'settings.custom_fields.create.error_messages.message6' | translate}}</div>\r\n                                            </div>\r\n                                        </td>\r\n                                        <td>\r\n                                            <a (click)=\"deleteOption(j)\" class=\"btn btn-raised mint-gradient white\"><i class=\"fa fa-close\"></i></a>\r\n                                        </td>\r\n                                    </ng-container>\r\n                                </tr>\r\n                                </tbody>\r\n                            </table>\r\n                        </ng-container>\r\n                    </div>\r\n                </div>\r\n            </div>\r\n        </div>\r\n    </div>\r\n    <div class=\"modal-footer\">\r\n        <button (click)=\"onCancel()\" class=\"btn btn-cancel mb-0\" data-dismiss=\"modal\" type=\"button\">{{'common.close' | translate}}</button>\r\n        <button class=\"btn btn-submit mb-0\" type=\"submit\"><span>{{'common.create' | translate}}</span></button>\r\n    </div>\r\n</form>\r\n");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/modules/settings-web/components/manager-widgets-types-edit/manager-widgets-types-edit.component.html":
/*!************************************************************************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/modules/settings-web/components/manager-widgets-types-edit/manager-widgets-types-edit.component.html ***!
  \************************************************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<div class=\"modal-header\">\r\n    <h2 class=\"modal-title font-weight-normal\">\r\n        <i aria-hidden=\"true\" class=\"fa fa-list-alt\"></i>&nbsp;{{'settings_web.manager_widgets_types.create.title2' | translate}}\r\n    </h2>\r\n    <button (click)=\"bsModalRef.hide()\" aria-label=\"Close\" class=\"close\" data-dismiss=\"modal\" type=\"button\">\r\n        <span aria-hidden=\"true\">&times;</span></button>\r\n</div>\r\n<form (ngSubmit)=\"onSubmit()\" [formGroup]=\"editManagerWidgetsTypesForm\" class=\"bs4-forms\">\r\n    <div class=\"modal-body\">\r\n        <div class=\"form-body\">\r\n            <div class=\"row\">\r\n                <div class=\"col-md-12\">\r\n                    <div class=\"form-group\">\r\n                        <label for=\"field_id\">{{'settings_web.manager_widgets_types.create.fields.select_field' | translate}}</label>\r\n                        <span class=\"text-danger\">*</span>\r\n                        <ng-select (change)=\"onChange($event)\" [items]=\"fieldData\" [ngClass]=\"{ 'is-invalid': isFormSubmitted && managerWidgetsTypesControl.field_id.errors }\" [searchable]=\"true\" [selectOnTab]=\"true\" bindLabel=\"name\" bindValue=\"id\" formControlName=\"field_id\" placeholder=\"{{'settings_web.manager_widgets_types.create.placeholders.placeholder1' | translate}}\"></ng-select>\r\n                        <div *ngIf=\"isFormSubmitted && managerWidgetsTypesControl.field_id.errors\" class=\"invalid-feedback\">\r\n                            <div *ngIf=\"managerWidgetsTypesControl.field_id.errors.required\">{{'settings_web.manager_widgets_types.create.fields.select_field' | translate}} {{'shared.error_messages.message1' | translate}}</div>\r\n                        </div>\r\n                    </div>\r\n                </div>\r\n                <div class=\"col-md-12\">\r\n                    <div class=\"form-group\">\r\n                        <label for=\"label\">{{'settings_web.manager_widgets_types.create.fields.label' | translate}}</label>\r\n                        <span class=\"text-danger\">*</span>\r\n                        <input [ngClass]=\"{ 'is-invalid': isFormSubmitted && managerWidgetsTypesControl.label.errors }\" class=\"form-control\" formControlName=\"label\" placeholder=\"{{'settings_web.manager_widgets_types.create.placeholders.placeholder3' | translate}}\" type=\"text\"/>\r\n                        <div *ngIf=\"isFormSubmitted && managerWidgetsTypesControl.label.errors\" class=\"invalid-feedback\">\r\n                            <div *ngIf=\"managerWidgetsTypesControl.label.errors.required\">{{'settings_web.manager_widgets_types.create.fields.label' | translate}} {{'shared.error_messages.message1' | translate}}</div>\r\n                        </div>\r\n                    </div>\r\n                </div>\r\n                <div class=\"col-md-12\">\r\n                    <div class=\"form-group\">\r\n                        <label>{{'settings_web.manager_widgets_types.create.fields.required' | translate}}</label>\r\n                        <input class=\"form-control\" formControlName=\"is_required\" type=\"checkbox\"/>\r\n                    </div>\r\n                </div>\r\n                <div class=\"col-md-12\">\r\n                    <div class=\"form-group\">\r\n                        <label>{{'settings_web.manager_widgets_types.create.fields.index' | translate}}</label>\r\n                        <span class=\"text-danger\">*</span>\r\n                        <input [ngClass]=\"{ 'is-invalid': isFormSubmitted && managerWidgetsTypesControl.index.errors }\" class=\"form-control\" formControlName=\"index\" placeholder=\"{{'settings_web.manager_widgets_types.create.placeholders.placeholder3' | translate}}\" type=\"number\"/>\r\n                        <div *ngIf=\"isFormSubmitted && managerWidgetsTypesControl.index.errors\" class=\"invalid-feedback\">\r\n                            <div *ngIf=\"managerWidgetsTypesControl.index.errors.required\">{{'settings_web.manager_widgets_types.create.fields.index' | translate}} {{'shared.error_messages.message1' | translate}}</div>\r\n                            <div *ngIf=\"managerWidgetsTypesControl.index.errors.min\">{{'settings_web.manager_widgets_types.create.fields.index' | translate}} {{'shared.error_messages.message2' | translate}}</div>\r\n                        </div>\r\n                    </div>\r\n                </div>\r\n                <div class=\"col-md-12\">\r\n                    <div class=\"form-group\">\r\n                        <label for=\"render_type\">{{'settings_web.manager_widgets_types.create.fields.render_type' | translate}}</label>\r\n                        <span class=\"text-danger\">*</span>\r\n                        <ng-select [items]=\"renderTypeData\" [ngClass]=\"{ 'is-invalid': isFormSubmitted && managerWidgetsTypesControl.render_type.errors }\" [searchable]=\"true\" [selectOnTab]=\"true\" bindLabel=\"name\" bindValue=\"value\" formControlName=\"render_type\" placeholder=\"{{'settings_web.manager_widgets_types.create.placeholders.placeholder2' | translate}}\"></ng-select>\r\n                        <div *ngIf=\"isFormSubmitted && managerWidgetsTypesControl.render_type.errors\" class=\"invalid-feedback\">\r\n                            <div *ngIf=\"managerWidgetsTypesControl.render_type.errors.required\">{{'settings_web.manager_widgets_types.create.fields.render_type' | translate}} {{'shared.error_messages.message1' | translate}}</div>\r\n                        </div>\r\n                    </div>\r\n                </div>\r\n                <div *ngIf=\"editManagerWidgetsTypesForm.get('field_id').value == 3\" class=\"col-md-12\">\r\n                    <div class=\"table-responsive-xs table-responsive-sm table-responsive-md table-responsive-lg table-responsive-xl\">\r\n                        <ng-container formArrayName=\"select_options\">\r\n                            <table cellpadding=\"0\" cellspacing=\"0\" class=\"table table-bordered table-hover b4-datatable\" width=\"100%\">\r\n                                <thead>\r\n                                <tr>\r\n                                    <th colspan=\"3\" text-align=\"center\">{{'settings.custom_fields.headings.head1' | translate}}</th>\r\n                                </tr>\r\n                                <tr>\r\n                                    <th>{{'settings.custom_fields.columns.label' | translate}}</th>\r\n                                    <th>{{'settings.custom_fields.columns.value' | translate}}</th>\r\n                                    <th>\r\n                                        <button (click)=\"addOption()\" class=\"btn btn-raised mint-gradient white mb-0\" type=\"button\">\r\n                                            <i class=\"fa fa-plus\"></i></button>\r\n                                    </th>\r\n                                </tr>\r\n                                </thead>\r\n                                <tbody *ngIf=\"editManagerWidgetsTypesForm.get('select_options').controls?.length != 0\">\r\n                                <tr *ngFor=\"let option of editManagerWidgetsTypesForm.get('select_options').controls; let j = index\">\r\n                                    <ng-container [formGroupName]=\"j\">\r\n                                        <td>\r\n                                            <input [ngClass]=\"{ 'is-invalid': isFormSubmitted && managerWidgetsTypesControl.select_options.controls[j].controls.label.errors }\" class=\"form-control\" formControlName=\"label\" type=\"text\"/>\r\n                                            <div *ngIf=\"isFormSubmitted &&  managerWidgetsTypesControl.select_options.controls[j].controls.label.errors\" class=\"invalid-feedback\">\r\n                                                <div *ngIf=\"managerWidgetsTypesControl.select_options.controls[j].controls.label.errors.required\">{{'settings.custom_fields.create.error_messages.message5' | translate}}</div>\r\n                                            </div>\r\n                                        </td>\r\n                                        <td>\r\n                                            <input [ngClass]=\"{ 'is-invalid': isFormSubmitted && managerWidgetsTypesControl.select_options.controls[j].controls.value.errors }\" class=\"form-control\" formControlName=\"value\" type=\"text\"/>\r\n                                            <div *ngIf=\"isFormSubmitted &&  managerWidgetsTypesControl.select_options.controls[j].controls.value.errors\" class=\"invalid-feedback\">\r\n                                                <div *ngIf=\"managerWidgetsTypesControl.select_options.controls[j].controls.value.errors.required\">{{'settings.custom_fields.create.error_messages.message6' | translate}}</div>\r\n                                            </div>\r\n                                        </td>\r\n                                        <td>\r\n                                            <a (click)=\"deleteOption(j)\" class=\"btn btn-raised mint-gradient white\"><i class=\"fa fa-close\"></i></a>\r\n                                        </td>\r\n                                    </ng-container>\r\n                                </tr>\r\n                                </tbody>\r\n                            </table>\r\n                        </ng-container>\r\n                    </div>\r\n                </div>\r\n            </div>\r\n        </div>\r\n    </div>\r\n    <div class=\"modal-footer\">\r\n        <button (click)=\"onCancel()\" class=\"btn btn-cancel mb-0\" data-dismiss=\"modal\" type=\"button\">{{'common.close' | translate}}</button>\r\n        <button class=\"btn btn-submit mb-0\" type=\"submit\"><span>{{'common.update' | translate}}</span></button>\r\n    </div>\r\n</form>\r\n");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/modules/settings-web/components/pages-create/pages-create.component.html":
/*!********************************************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/modules/settings-web/components/pages-create/pages-create.component.html ***!
  \********************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<div class=\"modal-header\">\r\n    <h2 class=\"modal-title font-weight-normal\">\r\n        <i aria-hidden=\"true\" class=\"fa fa-list-alt\"></i>&nbsp;{{'settings_web.pages.create.title1' | translate}}</h2>\r\n    <button (click)=\"bsModalRef.hide()\" aria-label=\"Close\" class=\"close\" data-dismiss=\"modal\" type=\"button\">\r\n        <span aria-hidden=\"true\">&times;</span></button>\r\n</div>\r\n<form (ngSubmit)=\"onSubmit()\" [formGroup]=\"createPagesForm\" class=\"bs4-forms\">\r\n    <div class=\"modal-body\">\r\n        <h4 class=\"form-section\" (click)=\"isCollapsedHead1 = !isCollapsedHead1\" [attr.aria-expanded]=\"!isCollapsedHead1\" aria-controls=\"collapseBasic\">\r\n            {{'categorys.headings.head1' | translate}}\r\n            <i class=\"fa\" [ngClass] = \"isCollapsedHead1 ? 'fa-plus' : 'fa-minus'\"></i>\r\n        </h4>\r\n        <div class=\"row\" [collapse]=\"isCollapsedHead1\" [isAnimated]=\"true\">\r\n            <div class=\"col-md-12\">\r\n                <div class=\"form-group\">\r\n                    <label for=\"name\">{{'settings_web.pages.create.fields.name' | translate}}</label>&nbsp;\r\n                    <span class=\"text-danger\">*</span>\r\n                    <input [ngClass]=\"{ 'is-invalid': isFormSubmitted && pagesControl.name.errors }\" class=\"form-control\" formControlName=\"name\" placeholder=\"{{'settings_web.pages.create.placeholders.placeholder2' | translate}}\" type=\"text\"/>\r\n                    <div *ngIf=\"isFormSubmitted && pagesControl.name.errors\" class=\"invalid-feedback\">\r\n                        <div>{{'settings_web.pages.create.fields.name' | translate}} {{'shared.error_messages.message1' | translate}}</div>\r\n                    </div>\r\n                </div>\r\n            </div>\r\n            <div class=\"col-md-12\">\r\n                <div class=\"form-group\">\r\n                    <label for=\"type\">{{'settings_web.pages.create.fields.type' | translate}}</label>&nbsp;\r\n                    <span class=\"text-danger\">*</span>\r\n                    <ng-select [items]=\"dataType\" [ngClass]=\"{ 'is-invalid': isFormSubmitted && pagesControl.type.errors }\" [searchable]=\"true\" [selectOnTab]=\"true\" bindLabel=\"label\" bindValue=\"value\" formControlName=\"type\" placeholder=\"{{'settings_web.pages.create.placeholders.placeholder5' | translate}}\" (change)=\"typeChange($event)\"></ng-select>\r\n                    <div *ngIf=\"isFormSubmitted && pagesControl.type.errors\" class=\"invalid-feedback\">\r\n                        <div *ngIf=\"pagesControl.type.errors.required\">{{'settings_web.pages.create.fields.type' | translate}} {{'shared.error_messages.message1' | translate}}</div>\r\n                    </div>\r\n                </div>\r\n            </div>\r\n            <div class=\"col-md-12\" *ngIf=\"createPagesForm.controls['type'].value == 0\">\r\n                <div class=\"form-group\">\r\n                    <label for=\"title\">{{'settings_web.pages.create.fields.title' | translate}}</label>&nbsp;\r\n                    <span class=\"text-danger\">*</span>\r\n                    <input [ngClass]=\"{ 'is-invalid': isFormSubmitted && pagesControl.title.errors }\" class=\"form-control\" formControlName=\"title\" placeholder=\"{{'settings_web.pages.create.placeholders.placeholder4' | translate}}\" type=\"text\"/>\r\n                    <div *ngIf=\"isFormSubmitted && pagesControl.title.errors\" class=\"invalid-feedback\">\r\n                        <div>{{'settings_web.pages.create.fields.title' | translate}} {{'shared.error_messages.message1' | translate}}</div>\r\n                    </div>\r\n                </div>\r\n            </div>\r\n            <div class=\"col-md-12\" *ngIf=\"createPagesForm.controls['type'].value == 0\">\r\n                <div class=\"form-group\">\r\n                    <label for=\"url\">{{'settings_web.pages.create.fields.url' | translate}}</label>&nbsp;\r\n                    <span class=\"text-danger\">*</span>\r\n                    <input [ngClass]=\"{ 'is-invalid': isFormSubmitted && pagesControl.url.errors }\" class=\"form-control\" formControlName=\"url\" placeholder=\"{{'settings_web.pages.create.placeholders.placeholder3' | translate}}\" type=\"text\"/>\r\n                    <div *ngIf=\"isFormSubmitted && pagesControl.url.errors\" class=\"invalid-feedback\">\r\n                        <div>{{'settings_web.pages.create.fields.url' | translate}} {{'shared.error_messages.message1' | translate}}</div>\r\n                    </div>\r\n                </div>\r\n            </div>\r\n            <div class=\"col-md-12\">\r\n                <div class=\"form-group\">\r\n                    <label for=\"templates_id\">{{'settings_web.pages.create.fields.template' | translate}}</label>\r\n                    <span class=\"text-danger\">*</span>\r\n                    <ng-select [items]=\"templateData\" [ngClass]=\"{ 'is-invalid': isFormSubmitted && pagesControl.templates_id.errors }\" [searchable]=\"true\" [selectOnTab]=\"true\" bindLabel=\"name\" bindValue=\"id\" formControlName=\"templates_id\" placeholder=\"{{'settings_web.pages.create.placeholders.placeholder1' | translate}}\"></ng-select>\r\n                    <div *ngIf=\"isFormSubmitted && pagesControl.templates_id.errors\" class=\"invalid-feedback\">\r\n                        <div>{{'settings_web.pages.create.fields.template' | translate}} {{'shared.error_messages.message1' | translate}}</div>\r\n                    </div>\r\n                </div>\r\n            </div>\r\n            <div class=\"col-md-12\">\r\n                <div class=\"form-group\">\r\n                    <label>{{'settings_web.pages.create.fields.description' | translate}}</label>&nbsp;\r\n                    <textarea class=\"form-control\" formControlName=\"description\" id=\"description\" name=\"description\" placeholder=\"{{'settings_web.pages.create.placeholders.placeholder6' | translate}}\"></textarea>\r\n                </div>\r\n            </div>\r\n        </div>\r\n        <h4 class=\"form-section\" (click)=\"isCollapsedHead2 = !isCollapsedHead2\" [attr.aria-expanded]=\"!isCollapsedHead2\" aria-controls=\"collapseBasic\" *ngIf=\"createPagesForm.controls['type'].value == 0\">\r\n            {{'categorys.headings.head2' | translate}}\r\n            <i class=\"fa\" [ngClass] = \"isCollapsedHead2 ? 'fa-plus' : 'fa-minus'\"></i>\r\n        </h4>\r\n        <div class=\"row\" [collapse]=\"isCollapsedHead2\" [isAnimated]=\"true\" *ngIf=\"createPagesForm.controls['type'].value == 0\">\r\n            <div class=\"col-md-12\">\r\n                <div class=\"form-group\">\r\n                    <label for=\"seo\">{{'seo.create.fields.meta' | translate}}</label>\r\n                    <ng-select  (add)=\"onAddMetaTag($event)\" (remove)=\"onRemoveMetaTag($event)\" [clearable]=\"false\" [multiple]=\"true\" [items]=\"seoData\" [searchable]=\"true\" [selectOnTab]=\"true\" bindLabel=\"label\" bindValue=\"id\" formControlName=\"seo\" labelForId=\"seo\" placeholder=\"{{'seo.create.placeholders.placeholder6' | translate}}\">\r\n                        <ng-template let-item=\"item\" ng-option-tmp>\r\n                            {{item.label}}\r\n                        </ng-template>\r\n                    </ng-select>\r\n                </div>\r\n            </div>\r\n            <div class=\"px-2\">\r\n                <div class=\"table-responsive-xs table-responsive-sm table-responsive-md table-responsive-lg table-responsive-xl\" formArrayName=\"seoData\">\r\n                    <table class=\"table table-bordered table-hover b4-datatable\" id=\"variations_table\" width=\"100%\">\r\n                        <thead>\r\n                        <tr>\r\n                            <th>{{'seo.create.fields.stt' | translate}}</th>\r\n                            <th >{{'seo.create.fields.meta' | translate}}</th>\r\n                            <th>{{'seo.create.fields.content' | translate}}</th>\r\n                        </tr>\r\n                        </thead>\r\n                        <tbody>\r\n                        <tr  *ngFor=\"let seo of createPagesForm.controls.seoData.controls; let i=index\" [formGroupName]=\"i\">\r\n                            <td>\r\n                                <label>{{i+1}}</label>\r\n                            </td>\r\n                            <td >\r\n                                <div class=\"form-group\">\r\n                                    <label>{{createPagesForm.value.seoData[i]['meta']}}</label>\r\n                                </div>\r\n                            </td>\r\n                            <td>\r\n                                <div class=\"form-group\">\r\n                                    <textarea class=\"form-control\" formControlName=\"content\" name=\"description\" placeholder=\"{{'seo.create.placeholders.placeholder7' | translate}}\"></textarea>\r\n                                </div>\r\n                            </td>\r\n                        </tr>\r\n                        </tbody>\r\n                    </table>\r\n                </div>\r\n            </div>\r\n        </div>\r\n    </div>\r\n    <div class=\"modal-footer\">\r\n        <button (click)=\"onCancel()\" class=\"btn btn-cancel mb-0\" data-dismiss=\"modal\" type=\"button\">{{'common.close' | translate}}</button>\r\n        <button class=\"btn btn-submit mb-0\" type=\"submit\"><span>{{'common.create' | translate}}</span></button>\r\n    </div>\r\n</form>\r\n");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/modules/settings-web/components/pages-edit/pages-edit.component.html":
/*!****************************************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/modules/settings-web/components/pages-edit/pages-edit.component.html ***!
  \****************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<div class=\"modal-header\">\r\n    <h2 class=\"modal-title font-weight-normal\">\r\n        <i aria-hidden=\"true\" class=\"fa fa-list-alt\"></i>&nbsp;{{'settings_web.pages.create.title1' | translate}}</h2>\r\n    <button (click)=\"bsModalRef.hide()\" aria-label=\"Close\" class=\"close\" data-dismiss=\"modal\" type=\"button\">\r\n        <span aria-hidden=\"true\">&times;</span></button>\r\n</div>\r\n<form (ngSubmit)=\"onSubmit()\" [formGroup]=\"editPagesForm\" class=\"bs4-forms\">\r\n    <div class=\"modal-body\">\r\n        <h4 class=\"form-section\" (click)=\"isCollapsedHead1 = !isCollapsedHead1\" [attr.aria-expanded]=\"!isCollapsedHead1\" aria-controls=\"collapseBasic\">\r\n            {{'categorys.headings.head1' | translate}}\r\n            <i class=\"fa\" [ngClass] = \"isCollapsedHead1 ? 'fa-plus' : 'fa-minus'\"></i>\r\n        </h4>\r\n        <div class=\"row\" [collapse]=\"isCollapsedHead1\" [isAnimated]=\"true\">\r\n            <div class=\"col-md-12\">\r\n                <div class=\"form-group\">\r\n                    <label for=\"name\">{{'settings_web.pages.create.fields.name' | translate}}</label>&nbsp;\r\n                    <span class=\"text-danger\">*</span>\r\n                    <input [ngClass]=\"{ 'is-invalid': isFormSubmitted && pagesControl.name.errors }\" class=\"form-control\" formControlName=\"name\" placeholder=\"{{'settings_web.pages.create.placeholders.placeholder2' | translate}}\" type=\"text\"/>\r\n                    <div *ngIf=\"isFormSubmitted && pagesControl.name.errors\" class=\"invalid-feedback\">\r\n                        <div>{{'settings_web.pages.create.fields.name' | translate}} {{'shared.error_messages.message1' | translate}}</div>\r\n                    </div>\r\n                </div>\r\n            </div>\r\n            <div class=\"col-md-12\">\r\n                <div class=\"form-group\">\r\n                    <label for=\"type\">{{'settings_web.pages.create.fields.type' | translate}}</label>&nbsp;\r\n                    <span class=\"text-danger\">*</span>\r\n                    <ng-select [items]=\"dataType\" [ngClass]=\"{ 'is-invalid': isFormSubmitted && pagesControl.type.errors }\" [searchable]=\"true\" [selectOnTab]=\"true\" bindLabel=\"label\" bindValue=\"value\" formControlName=\"type\" placeholder=\"{{'settings_web.pages.create.placeholders.placeholder5' | translate}}\" (change)=\"typeChange($event)\"></ng-select>\r\n                    <div *ngIf=\"isFormSubmitted && pagesControl.type.errors\" class=\"invalid-feedback\">\r\n                        <div *ngIf=\"pagesControl.type.errors.required\">{{'settings_web.pages.create.fields.type' | translate}} {{'shared.error_messages.message1' | translate}}</div>\r\n                    </div>\r\n                </div>\r\n            </div>\r\n            <div class=\"col-md-12\" *ngIf=\"editPagesForm.controls['type'].value == 0\">\r\n                <div class=\"form-group\">\r\n                    <label for=\"title\">{{'settings_web.pages.create.fields.title' | translate}}</label>&nbsp;\r\n                    <span class=\"text-danger\">*</span>\r\n                    <input [ngClass]=\"{ 'is-invalid': isFormSubmitted && pagesControl.title.errors }\" class=\"form-control\" formControlName=\"title\" placeholder=\"{{'settings_web.pages.create.placeholders.placeholder4' | translate}}\" type=\"text\"/>\r\n                    <div *ngIf=\"isFormSubmitted && pagesControl.title.errors\" class=\"invalid-feedback\">\r\n                        <div>{{'settings_web.pages.create.fields.title' | translate}} {{'shared.error_messages.message1' | translate}}</div>\r\n                    </div>\r\n                </div>\r\n            </div>\r\n            <div class=\"col-md-12\" *ngIf=\"editPagesForm.controls['type'].value == 0\">\r\n                <div class=\"form-group\">\r\n                    <label for=\"url\">{{'settings_web.pages.create.fields.url' | translate}}</label>&nbsp;\r\n                    <span class=\"text-danger\">*</span>\r\n                    <input [ngClass]=\"{ 'is-invalid': isFormSubmitted && pagesControl.url.errors }\" class=\"form-control\" formControlName=\"url\" placeholder=\"{{'settings_web.pages.create.placeholders.placeholder3' | translate}}\" type=\"text\"/>\r\n                    <div *ngIf=\"isFormSubmitted && pagesControl.url.errors\" class=\"invalid-feedback\">\r\n                        <div>{{'settings_web.pages.create.fields.url' | translate}} {{'shared.error_messages.message1' | translate}}</div>\r\n                    </div>\r\n                </div>\r\n            </div>\r\n            <div class=\"col-md-12\">\r\n                <div class=\"form-group\">\r\n                    <label for=\"templates_id\">{{'settings_web.pages.create.fields.template' | translate}}</label>\r\n                    <span class=\"text-danger\">*</span>\r\n                    <ng-select [items]=\"templateData\" [ngClass]=\"{ 'is-invalid': isFormSubmitted && pagesControl.templates_id.errors }\" [searchable]=\"true\" [selectOnTab]=\"true\" bindLabel=\"name\" bindValue=\"id\" formControlName=\"templates_id\" placeholder=\"{{'settings_web.pages.create.placeholders.placeholder1' | translate}}\"></ng-select>\r\n                    <div *ngIf=\"isFormSubmitted && pagesControl.templates_id.errors\" class=\"invalid-feedback\">\r\n                        <div>{{'settings_web.pages.create.fields.template' | translate}} {{'shared.error_messages.message1' | translate}}</div>\r\n                    </div>\r\n                </div>\r\n            </div>\r\n            <div class=\"col-md-12\">\r\n                <div class=\"form-group\">\r\n                    <label>{{'settings_web.pages.create.fields.description' | translate}}</label>&nbsp;\r\n                    <textarea class=\"form-control\" formControlName=\"description\" id=\"description\" name=\"description\" placeholder=\"{{'settings_web.pages.create.placeholders.placeholder6' | translate}}\"></textarea>\r\n                </div>\r\n            </div>\r\n        </div>\r\n        <h4 class=\"form-section\" (click)=\"isCollapsedHead2 = !isCollapsedHead2\" [attr.aria-expanded]=\"!isCollapsedHead2\" aria-controls=\"collapseBasic\" *ngIf=\"editPagesForm.controls['type'].value == 0\">\r\n            {{'categorys.headings.head2' | translate}}\r\n            <i class=\"fa\" [ngClass] = \"isCollapsedHead2 ? 'fa-plus' : 'fa-minus'\"></i>\r\n        </h4>\r\n        <div class=\"row\" [collapse]=\"isCollapsedHead2\" [isAnimated]=\"true\" *ngIf=\"editPagesForm.controls['type'].value == 0\">\r\n            <div class=\"col-md-12\">\r\n                <div class=\"form-group\">\r\n                    <label for=\"seo\">{{'seo.create.fields.meta' | translate}}</label>\r\n                    <ng-select (add)=\"onAddMetaTag($event)\" (remove)=\"onRemoveMetaTag($event)\" [clearable]=\"false\" [multiple]=\"true\" [items]=\"seoData\" [searchable]=\"true\" [selectOnTab]=\"true\" bindLabel=\"label\" bindValue=\"id\" formControlName=\"seo\" labelForId=\"seo\" placeholder=\"{{'seo.create.placeholders.placeholder6' | translate}}\">\r\n                        <ng-template let-item=\"item\" ng-option-tmp>\r\n                            {{item.label}}\r\n                        </ng-template>\r\n                    </ng-select>\r\n                </div>\r\n            </div>\r\n            <div class=\"px-2\">\r\n                <div class=\"table-responsive-xs table-responsive-sm table-responsive-md table-responsive-lg table-responsive-xl\" formArrayName=\"seoData\">\r\n                    <table class=\"table table-bordered table-hover b4-datatable\" id=\"variations_table\" width=\"100%\">\r\n                        <thead>\r\n                        <tr>\r\n                            <th>{{'seo.create.fields.stt' | translate}}</th>\r\n                            <th >{{'seo.create.fields.meta' | translate}}</th>\r\n                            <th>{{'seo.create.fields.content' | translate}}</th>\r\n                        </tr>\r\n                        </thead>\r\n                        <tbody>\r\n                        <tr  *ngFor=\"let seo of editPagesForm.controls.seoData.controls; let i=index\" [formGroupName]=\"i\">\r\n                            <td>\r\n                                <label>{{i+1}}</label>\r\n                            </td>\r\n                            <td >\r\n                                <div class=\"form-group\">\r\n                                    <label>{{editPagesForm.value.seoData[i]['meta']}}</label>\r\n                                </div>\r\n                            </td>\r\n                            <td>\r\n                                <div class=\"form-group\">\r\n                                    <textarea class=\"form-control\" formControlName=\"content\"  name=\"description\" placeholder=\"{{'seo.create.placeholders.placeholder7' | translate}}\"></textarea>\r\n                                </div>\r\n                            </td>\r\n                        </tr>\r\n                        </tbody>\r\n                    </table>\r\n                </div>\r\n            </div>\r\n        </div>\r\n    </div>\r\n    <div class=\"modal-footer\">\r\n        <button (click)=\"onCancel()\" class=\"btn btn-cancel mb-0\" data-dismiss=\"modal\" type=\"button\">{{'common.close' | translate}}</button>\r\n        <button class=\"btn btn-submit mb-0\" type=\"submit\"><span>{{'common.create' | translate}}</span></button>\r\n    </div>\r\n</form>\r\n");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/modules/settings-web/components/pages/pages.component.html":
/*!******************************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/modules/settings-web/components/pages/pages.component.html ***!
  \******************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<!-- Card header -->\r\n<div class=\"card-header pl-0 pr-0 mb-3 border-bottom\">\r\n    <h4 class=\"sub-title mt-3\"><span>{{'settings_web.pages.title' | translate}}</span></h4>\r\n    <button (click)=\"openPageCreateModal()\" *ngxPermissionsOnly=\"['admin', 'super_admin', 'pages_create']\" class=\"btn btn-create mb-0\" tooltip=\"{{'common.create' | translate}}\" type=\"button\">\r\n        <i class=\"fa fa-plus\"></i>\r\n    </button>\r\n</div>\r\n<div class=\"card-content\">\r\n    <div class=\"card-body\">\r\n        <div class=\"table-responsive-xs table-responsive-sm table-responsive-md table-responsive-lg table-responsive-xl\">\r\n            <table [dtOptions]=\"dtOptions\" [dtTrigger]=\"dtTrigger\" class=\"table table-bordered table-hover b4-datatable\" datatable id=\"custom_field_table\" width=\"100%\">\r\n                <thead>\r\n                <tr>\r\n                    <th>#</th>\r\n                    <th>{{'settings_web.pages.columns.name' | translate}}</th>\r\n                    <th>{{'settings_web.pages.columns.type' | translate}}</th>\r\n                    <th>{{'settings_web.pages.columns.title' | translate}}</th>\r\n                    <th>{{'settings_web.pages.columns.url' | translate}}</th>\r\n                    <th>{{'settings_web.pages.columns.template' | translate}}</th>\r\n                    <th>{{'settings_web.pages.columns.description' | translate}}</th>\r\n                    <th>{{'settings_web.pages.columns.actions' | translate}}</th>\r\n                </tr>\r\n                </thead>\r\n                <tbody *ngIf=\"pages?.length != 0\">\r\n                <tr *ngFor=\"let page of pages; index as i\">\r\n                    <td>{{i + 1}}</td>\r\n                    <td>\r\n                        <a *ngIf=\"page.type == 0\" class=\"\" href=\"{{apiUrl}}/{{page.url}}\" placement=\"top\" target=\"_blank\" tooltip=\"{{'common.view' | translate}}\">{{page.name}}</a>\r\n                        <div *ngIf=\"page.type != 0\">{{page.name}}</div>\r\n                        <button (click)=\"clonePage(page.id)\" *ngxPermissionsOnly=\"['admin', 'super_admin', 'pages_create']\" class=\"btn btn-create mb-0\" tooltip=\"{{'common.create' | translate}}\" type=\"button\">\r\n                            Clone\r\n                        </button>\r\n                    </td>\r\n                    <td>{{showTypePage(page.type)}}</td>\r\n                    <td>{{page.title}}</td>\r\n                    <td>{{page.url}}</td>\r\n                    <td>{{page.template_name}}</td>\r\n                    <td>{{page.description}}</td>\r\n                    <td class=\"actions-dropdown\">\r\n                        <div class=\"btn-group\" dropdown>\r\n                            <button aria-controls=\"dropdown-basic-1\" class=\"dropdown-toggle btn-action\" dropdownToggle id=\"button-basic-1\" type=\"button\">\r\n                                <i class=\"fa fa-ellipsis-v\"></i></button>\r\n                            <ul *dropdownMenu aria-labelledby=\"button-basic-1\" class=\"dropdown-menu animated fadeIn\" id=\"dropdown-basic-1\" role=\"menu\">\r\n                                <li *ngxPermissionsOnly=\"['admin', 'super_admin', 'pages_edit']\" role=\"menuitem\">\r\n                                    <a [routerLink]=\"['/settings-web/manager-widgets', page.id]\" class=\"dropdown-item btn btn-view btn-raised\" placement=\"top\" tooltip=\"{{'common.manager' | translate}}\"><i class=\"fa fa-cog\"></i></a>\r\n                                </li>\r\n                                <li *ngxPermissionsOnly=\"['admin', 'super_admin', 'pages_edit']\" role=\"menuitem\">\r\n                                    <a (click)=\"openPageEditModal(page)\" class=\"dropdown-item btn btn-edit btn-raised\" placement=\"top\" tooltip=\"{{'common.edit' | translate}}\"><i class=\"fa fa-pencil-square-o\"></i></a>\r\n                                </li>\r\n                                <li *ngxPermissionsOnly=\"['admin', 'super_admin', 'pages_delete']\" role=\"menuitem\">\r\n                                    <a (click)=\"removePage(page.id)\" class=\"dropdown-item btn btn-delete btn-raised\" placement=\"top\" tooltip=\"{{'common.delete' | translate}}\"><i class=\"fa fa-trash-o\"></i></a>\r\n                                </li>\r\n                            </ul>\r\n                        </div>\r\n                    </td>\r\n                </tr>\r\n                </tbody>\r\n                <tfoot *ngIf=\"pages?.length == 0\" class=\"tfoot_dt\">\r\n                <tr>\r\n                    <td class=\"no-data-available text-center\" colspan=\"7\">{{'common.datatable.sEmptyTable' | translate}}</td>\r\n                </tr>\r\n                </tfoot>\r\n            </table>\r\n        </div>\r\n    </div>\r\n</div>\r\n");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/modules/settings-web/components/regions-create/regions-create.component.html":
/*!************************************************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/modules/settings-web/components/regions-create/regions-create.component.html ***!
  \************************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<div class=\"modal-header\">\r\n    <h2 class=\"modal-title font-weight-normal\">\r\n        <i aria-hidden=\"true\" class=\"fa fa-list-alt\"></i>&nbsp;{{'settings_web.regions.create.title1' | translate}}</h2>\r\n    <button (click)=\"bsModalRef.hide()\" aria-label=\"Close\" class=\"close\" data-dismiss=\"modal\" type=\"button\">\r\n        <span aria-hidden=\"true\">&times;</span></button>\r\n</div>\r\n<form (ngSubmit)=\"onSubmit()\" [formGroup]=\"createRegionsForm\" class=\"bs4-forms\">\r\n    <div class=\"modal-body\">\r\n        <div class=\"form-body\">\r\n            <div class=\"row\">\r\n                <div class=\"col-md-12\">\r\n                    <div class=\"form-group\">\r\n                        <label for=\"name\">{{'settings_web.regions.create.fields.name' | translate}}</label>&nbsp;\r\n                        <span class=\"text-danger\">*</span>\r\n                        <input [ngClass]=\"{ 'is-invalid': isFormSubmitted && regionsControl.name.errors }\" class=\"form-control\" formControlName=\"name\" placeholder=\"{{'settings_web.regions.create.placeholders.placeholder1' | translate}}\" type=\"text\"/>\r\n                        <div *ngIf=\"isFormSubmitted && regionsControl.name.errors\" class=\"invalid-feedback\">\r\n                            <div *ngIf=\"regionsControl.name.errors.required\">{{'settings_web.regions.create.fields.name' | translate}} {{'shared.error_messages.message1' | translate}}</div>\r\n                        </div>\r\n                    </div>\r\n                </div>\r\n                <div class=\"col-md-12\">\r\n                    <div class=\"form-group\">\r\n                        <label for=\"number_content\">{{'settings_web.regions.create.fields.number_content' | translate}}</label>&nbsp;\r\n                        <span class=\"text-danger\">*</span>\r\n                        <input [ngClass]=\"{ 'is-invalid': isFormSubmitted && regionsControl.number_content.errors }\" class=\"form-control\" formControlName=\"number_content\" placeholder=\"{{'settings_web.regions.create.placeholders.placeholder2' | translate}}\" type=\"number\"/>\r\n                        <div *ngIf=\"isFormSubmitted && regionsControl.number_content.errors\" class=\"invalid-feedback\">\r\n                            <div *ngIf=\"regionsControl.number_content.errors.required\">{{'settings_web.regions.create.fields.number_content' | translate}} {{'shared.error_messages.message1' | translate}}</div>\r\n                            <div *ngIf=\"regionsControl.number_content.errors.min\">{{'settings_web.regions.create.fields.number_content' | translate}} {{'shared.error_messages.message2' | translate}}</div>\r\n                        </div>\r\n                    </div>\r\n                </div>\r\n                <div class=\"col-md-12\">\r\n                    <div class=\"form-group\">\r\n                        <label>{{'settings_web.regions.create.fields.description' | translate}}</label>\r\n                        <textarea class=\"form-control\" formControlName=\"description\" id=\"description\" name=\"description\" placeholder=\"{{'settings_web.regions.create.placeholders.placeholder3' | translate}}\"></textarea>\r\n                    </div>\r\n                </div>\r\n                <div class=\"col-md-12\">\r\n                    <div class=\"form-group\">\r\n                        <label [ngClass]=\"{ 'is-invalid': isFormSubmitted && regionsControl.content_html.errors }\" for=\"content_html\">{{'settings_web.themes.create.fields.content_html' | translate}}</label>&nbsp;\r\n                        <span class=\"text-danger\">*</span>\r\n                        <ngx-monaco-editor [options]=\"editorOptions\" class=\"code-editor\" formControlName=\"content_html\"></ngx-monaco-editor>\r\n                        <div *ngIf=\"isFormSubmitted && regionsControl.content_html.errors\" class=\"invalid-feedback\">\r\n                            <div>{{'settings_web.regions.create.fields.content_html' | translate}} {{'shared.error_messages.message1' | translate}}</div>\r\n                        </div>\r\n                    </div>\r\n                </div>\r\n            </div>\r\n\r\n        </div>\r\n    </div>\r\n    <div class=\"modal-footer\">\r\n        <button (click)=\"onCancel()\" class=\"btn btn-cancel mb-0\" data-dismiss=\"modal\" type=\"button\">{{'common.close' | translate}}</button>\r\n        <button class=\"btn btn-submit mb-0\" type=\"submit\"><span>{{'common.create' | translate}}</span></button>\r\n    </div>\r\n</form>\r\n");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/modules/settings-web/components/regions-edit/regions-edit.component.html":
/*!********************************************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/modules/settings-web/components/regions-edit/regions-edit.component.html ***!
  \********************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<div class=\"modal-header\">\r\n    <h2 class=\"modal-title font-weight-normal\">\r\n        <i aria-hidden=\"true\" class=\"fa fa-list-alt\"></i>&nbsp;{{'settings_web.regions.create.title2' | translate}}</h2>\r\n    <button (click)=\"bsModalRef.hide()\" aria-label=\"Close\" class=\"close\" data-dismiss=\"modal\" type=\"button\">\r\n        <span aria-hidden=\"true\">&times;</span></button>\r\n</div>\r\n<form (ngSubmit)=\"onSubmit()\" [formGroup]=\"editRegionsForm\" class=\"bs4-forms\">\r\n    <div class=\"modal-body\">\r\n        <div class=\"form-body\">\r\n            <div class=\"row\">\r\n                <div class=\"col-md-12\">\r\n                    <div class=\"form-group\">\r\n                        <label for=\"name\">{{'settings_web.regions.create.fields.name' | translate}}</label>&nbsp;\r\n                        <span class=\"text-danger\">*</span>\r\n                        <input [ngClass]=\"{ 'is-invalid': isFormSubmitted && regionsControl.name.errors }\" class=\"form-control\" formControlName=\"name\" placeholder=\"{{'settings_web.regions.create.placeholders.placeholder1' | translate}}\" type=\"text\"/>\r\n                        <div *ngIf=\"isFormSubmitted && regionsControl.name.errors\" class=\"invalid-feedback\">\r\n                            <div *ngIf=\"regionsControl.name.errors.required\">{{'settings_web.regions.create.fields.name' | translate}} {{'shared.error_messages.message1' | translate}}</div>\r\n                        </div>\r\n                    </div>\r\n                </div>\r\n                <div class=\"col-md-12\">\r\n                    <div class=\"form-group\">\r\n                        <label for=\"number_content\">{{'settings_web.regions.create.fields.number_content' | translate}}</label>&nbsp;\r\n                        <span class=\"text-danger\">*</span>\r\n                        <input [ngClass]=\"{ 'is-invalid': isFormSubmitted && regionsControl.number_content.errors }\" class=\"form-control\" formControlName=\"number_content\" placeholder=\"{{'settings_web.regions.create.placeholders.placeholder2' | translate}}\" type=\"number\"/>\r\n                        <div *ngIf=\"isFormSubmitted && regionsControl.number_content.errors\" class=\"invalid-feedback\">\r\n                            <div *ngIf=\"regionsControl.number_content.errors.required\">{{'settings_web.regions.create.fields.number_content' | translate}} {{'shared.error_messages.message1' | translate}}</div>\r\n                            <div *ngIf=\"regionsControl.number_content.errors.min\">{{'settings_web.regions.create.fields.number_content' | translate}} {{'shared.error_messages.message2' | translate}}</div>\r\n                        </div>\r\n                    </div>\r\n                </div>\r\n                <div class=\"col-md-12\">\r\n                    <div class=\"form-group\">\r\n                        <label>{{'settings_web.regions.create.fields.description' | translate}}</label>\r\n                        <textarea [ngClass]=\"{ 'is-invalid': isFormSubmitted && regionsControl.description.errors }\" class=\"form-control\" formControlName=\"description\" id=\"description\" name=\"description\" placeholder=\"{{'settings_web.regions.create.placeholders.placeholder3' | translate}}\"></textarea>\r\n                    </div>\r\n                </div>\r\n                <div class=\"col-md-12\">\r\n                    <div class=\"form-group\">\r\n                        <label [ngClass]=\"{ 'is-invalid': isFormSubmitted && regionsControl.content_html.errors }\" for=\"content_html\">{{'settings_web.regions.create.fields.content_html' | translate}}</label>&nbsp;\r\n                        <span class=\"text-danger\">*</span>\r\n                        <ngx-monaco-editor [options]=\"editorOptions\" class=\"code-editor\" formControlName=\"content_html\"></ngx-monaco-editor>\r\n                        <div *ngIf=\"isFormSubmitted && regionsControl.content_html.errors\" class=\"invalid-feedback\">\r\n                            <div>{{'settings_web.regions.create.fields.content_html' | translate}} {{'shared.error_messages.message1' | translate}}</div>\r\n                        </div>\r\n                    </div>\r\n                </div>\r\n            </div>\r\n        </div>\r\n    </div>\r\n    <div class=\"modal-footer\">\r\n        <button (click)=\"onCancel()\" class=\"btn btn-cancel mb-0\" data-dismiss=\"modal\" type=\"button\">{{'common.close' | translate}}</button>\r\n        <button class=\"btn btn-submit mb-0\" type=\"submit\"><span>{{'common.update' | translate}}</span></button>\r\n    </div>\r\n</form>\r\n");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/modules/settings-web/components/regions/regions.component.html":
/*!**********************************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/modules/settings-web/components/regions/regions.component.html ***!
  \**********************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<!-- Card header -->\r\n<div class=\"card-header pl-0 pr-0 mb-3 border-bottom\">\r\n    <h4 class=\"sub-title mt-3\"><span>{{'settings_web.regions.title' | translate}}</span></h4>\r\n    <button (click)=\"openRegionCreateModal()\" *ngxPermissionsOnly=\"['admin', 'super_admin', 'regions_create']\" class=\"btn btn-create mb-0\" tooltip=\"{{'common.create' | translate}}\" type=\"button\">\r\n        <i class=\"fa fa-plus\"></i>\r\n    </button>\r\n</div>\r\n<div class=\"card-content\">\r\n    <div class=\"card-body\">\r\n        <div class=\"table-responsive-xs table-responsive-sm table-responsive-md table-responsive-lg table-responsive-xl\">\r\n            <table [dtOptions]=\"dtOptions\" [dtTrigger]=\"dtTrigger\" class=\"table table-bordered table-hover b4-datatable\" datatable id=\"regions_table\" width=\"100%\">\r\n                <thead>\r\n                <tr>\r\n                    <th>#</th>\r\n                    <th>{{'settings_web.regions.columns.name' | translate}}</th>\r\n                    <th>{{'settings_web.regions.columns.description' | translate}}</th>\r\n                    <th>{{'settings_web.regions.columns.number_content' | translate}}</th>\r\n                    <th>{{'settings_web.regions.columns.actions' | translate}}</th>\r\n                </tr>\r\n                </thead>\r\n                <tbody *ngIf=\"regions?.length != 0\">\r\n                <tr *ngFor=\"let region of regions; index as i\">\r\n                    <td>{{i + 1}}</td>\r\n                    <td>{{region.name}}</td>\r\n                    <td>{{region.description}}</td>\r\n                    <td>{{region.number_content}}</td>\r\n                    <td class=\"actions-dropdown\">\r\n                        <div class=\"btn-group\" dropdown>\r\n                            <button aria-controls=\"dropdown-basic-1\" class=\"dropdown-toggle btn-action\" dropdownToggle id=\"button-basic-1\" type=\"button\">\r\n                                <i class=\"fa fa-ellipsis-v\"></i></button>\r\n                            <ul *dropdownMenu aria-labelledby=\"button-basic-1\" class=\"dropdown-menu animated fadeIn\" id=\"dropdown-basic-1\" role=\"menu\">\r\n                                <li *ngxPermissionsOnly=\"['admin', 'super_admin', 'regions_edit']\" role=\"menuitem\">\r\n                                    <a (click)=\"openRegionEditModal(region)\" class=\"dropdown-item btn btn-edit btn-raised\" placement=\"top\" tooltip=\"{{'common.edit' | translate}}\"><i class=\"fa fa-pencil-square-o\"></i></a>\r\n                                </li>\r\n                                <li *ngxPermissionsOnly=\"['admin', 'super_admin', 'regions_delete']\" role=\"menuitem\">\r\n                                    <a (click)=\"removeRegion(region.id)\" class=\"dropdown-item btn btn-delete btn-raised\" placement=\"top\" tooltip=\"{{'common.delete' | translate}}\"><i class=\"fa fa-trash-o\"></i></a>\r\n                                </li>\r\n                            </ul>\r\n                        </div>\r\n                    </td>\r\n                </tr>\r\n                </tbody>\r\n                <tfoot *ngIf=\"regions?.length == 0\" class=\"tfoot_dt\">\r\n                <tr>\r\n                    <td class=\"no-data-available text-center\" colspan=\"5\">{{'common.datatable.sEmptyTable' | translate}}</td>\r\n                </tr>\r\n                </tfoot>\r\n            </table>\r\n        </div>\r\n    </div>\r\n</div>\r\n");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/modules/settings-web/components/templates-create/templates-create.component.html":
/*!****************************************************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/modules/settings-web/components/templates-create/templates-create.component.html ***!
  \****************************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<div class=\"modal-header\">\r\n    <h2 class=\"modal-title font-weight-normal\">\r\n        <i aria-hidden=\"true\" class=\"fa fa-list-alt\"></i>&nbsp;{{'settings_web.templates.create.title1' | translate}}</h2>\r\n    <button (click)=\"bsModalRef.hide()\" aria-label=\"Close\" class=\"close\" data-dismiss=\"modal\" type=\"button\">\r\n        <span aria-hidden=\"true\">&times;</span></button>\r\n</div>\r\n<form (ngSubmit)=\"onSubmit()\" [formGroup]=\"createTemplatesForm\" class=\"bs4-forms\">\r\n    <div class=\"modal-body\">\r\n        <div class=\"form-body\">\r\n            <div class=\"row\">\r\n                <div class=\"col-md-12\">\r\n                    <div class=\"form-group\">\r\n                        <label for=\"name\">{{'settings_web.templates.create.fields.name' | translate}}</label>&nbsp;\r\n                        <span class=\"text-danger\">*</span>\r\n                        <input [ngClass]=\"{ 'is-invalid': isFormSubmitted && templatesControl.name.errors }\" class=\"form-control\" formControlName=\"name\" placeholder=\"{{'settings_web.templates.create.placeholders.placeholder1' | translate}}\" type=\"text\"/>\r\n                        <div *ngIf=\"isFormSubmitted && templatesControl.name.errors\" class=\"invalid-feedback\">\r\n                            <div>{{'settings_web.templates.create.fields.name' | translate}} {{'shared.error_messages.message1' | translate}}</div>\r\n                        </div>\r\n                    </div>\r\n                </div>\r\n                <div class=\"col-md-12\">\r\n                    <div class=\"form-group\">\r\n                        <label>{{'settings_web.templates.create.fields.description' | translate}}</label>&nbsp;\r\n                        <textarea class=\"form-control\" formControlName=\"description\" id=\"description\" name=\"description\" placeholder=\"{{'settings_web.templates.create.placeholders.placeholder2' | translate}}\"></textarea>\r\n                    </div>\r\n                </div>\r\n            </div>\r\n\r\n        </div>\r\n    </div>\r\n    <div class=\"modal-footer\">\r\n        <button (click)=\"onCancel()\" class=\"btn btn-cancel mb-0\" data-dismiss=\"modal\" type=\"button\">{{'common.close' | translate}}</button>\r\n        <button class=\"btn btn-submit mb-0\" type=\"submit\"><span>{{'common.create' | translate}}</span></button>\r\n    </div>\r\n</form>\r\n");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/modules/settings-web/components/templates-edit/templates-edit.component.html":
/*!************************************************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/modules/settings-web/components/templates-edit/templates-edit.component.html ***!
  \************************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<div class=\"modal-header\">\r\n    <h2 class=\"modal-title font-weight-normal\">\r\n        <i aria-hidden=\"true\" class=\"fa fa-list-alt\"></i>&nbsp;{{'settings_web.templates.create.title2' | translate}}</h2>\r\n    <button (click)=\"bsModalRef.hide()\" aria-label=\"Close\" class=\"close\" data-dismiss=\"modal\" type=\"button\">\r\n        <span aria-hidden=\"true\">&times;</span></button>\r\n</div>\r\n<form (ngSubmit)=\"onSubmit()\" [formGroup]=\"editTemplatesForm\" class=\"bs4-forms\">\r\n    <div class=\"modal-body\">\r\n        <div class=\"form-body\">\r\n            <div class=\"row\">\r\n                <div class=\"col-md-12\">\r\n                    <div class=\"form-group\">\r\n                        <label for=\"name\">{{'settings_web.templates.create.fields.name' | translate}}</label>&nbsp;\r\n                        <span class=\"text-danger\">*</span>\r\n                        <input [ngClass]=\"{ 'is-invalid': isFormSubmitted && templatesControl.name.errors }\" class=\"form-control\" formControlName=\"name\" placeholder=\"{{'settings_web.templates.create.placeholders.placeholder1' | translate}}\" type=\"text\"/>\r\n                        <div *ngIf=\"isFormSubmitted && templatesControl.name.errors\" class=\"invalid-feedback\">\r\n                            <div>{{'settings_web.templates.create.fields.name' | translate}} {{'shared.error_messages.message1' | translate}}</div>\r\n                        </div>\r\n                    </div>\r\n                </div>\r\n                <div class=\"col-md-12\">\r\n                    <div class=\"form-group\">\r\n                        <label>{{'settings_web.templates.create.fields.description' | translate}}</label>&nbsp;\r\n                        <textarea class=\"form-control\" formControlName=\"description\" id=\"description\" name=\"description\" placeholder=\"{{'settings_web.templates.create.placeholders.placeholder2' | translate}}\"></textarea>\r\n                    </div>\r\n                </div>\r\n            </div>\r\n        </div>\r\n    </div>\r\n    <div class=\"modal-footer\">\r\n        <button (click)=\"onCancel()\" class=\"btn btn-cancel mb-0\" data-dismiss=\"modal\" type=\"button\">{{'common.close' | translate}}</button>\r\n        <button class=\"btn btn-submit mb-0\" type=\"submit\"><span>{{'common.update' | translate}}</span></button>\r\n    </div>\r\n</form>\r\n");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/modules/settings-web/components/templates/templates.component.html":
/*!**************************************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/modules/settings-web/components/templates/templates.component.html ***!
  \**************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<!-- Card header -->\r\n<div class=\"card-header pl-0 pr-0 mb-3 border-bottom\">\r\n    <h4 class=\"sub-title mt-3\"><span>{{'settings_web.templates.title' | translate}}</span></h4>\r\n    <button (click)=\"openTemplateCreateModal()\" *ngxPermissionsOnly=\"['admin', 'super_admin', 'templates_create']\" class=\"btn btn-create mb-0\" tooltip=\"{{'common.create' | translate}}\" type=\"button\">\r\n        <i class=\"fa fa-plus\"></i>\r\n    </button>\r\n</div>\r\n<div class=\"card-content\">\r\n    <div class=\"card-body\">\r\n        <div class=\"table-responsive-xs table-responsive-sm table-responsive-md table-responsive-lg table-responsive-xl\">\r\n            <table [dtOptions]=\"dtOptions\" [dtTrigger]=\"dtTrigger\" class=\"table table-bordered table-hover b4-datatable\" datatable id=\"custom_field_table\" width=\"100%\">\r\n                <thead>\r\n                <tr>\r\n                    <th>#</th>\r\n                    <th>{{'settings_web.templates.columns.name' | translate}}</th>\r\n                    <th>{{'settings_web.templates.columns.description' | translate}}</th>\r\n                    <th>{{'settings_web.templates.columns.actions' | translate}}</th>\r\n                </tr>\r\n                </thead>\r\n                <tbody *ngIf=\"templates?.length != 0\">\r\n                <tr *ngFor=\"let template of templates; index as i\">\r\n                    <td>{{i + 1}}</td>\r\n                    <td>\r\n                        <a class=\"\" href=\"{{apiUrl}}/template-{{template.machine_name}}\" placement=\"top\" target=\"_blank\" tooltip=\"{{'common.view' | translate}}\">{{template.name}}</a>\r\n                    </td>\r\n                    <td>{{template.description}}</td>\r\n                    <td class=\"actions-dropdown\">\r\n                        <div class=\"btn-group\" dropdown>\r\n                            <button aria-controls=\"dropdown-basic-1\" class=\"dropdown-toggle btn-action\" dropdownToggle id=\"button-basic-1\" type=\"button\">\r\n                                <i class=\"fa fa-ellipsis-v\"></i></button>\r\n                            <ul *dropdownMenu aria-labelledby=\"button-basic-1\" class=\"dropdown-menu animated fadeIn\" id=\"dropdown-basic-1\" role=\"menu\">\r\n                                <li role=\"menuitem\">\r\n                                    <a [routerLink]=\"['/settings-web/manager-regions', template.id]\" class=\"dropdown-item btn btn-view btn-raised\" placement=\"top\" tooltip=\"{{'common.manager' | translate}}\"><i class=\"fa fa-cog\"></i></a>\r\n                                </li>\r\n                                <li *ngxPermissionsOnly=\"['admin', 'super_admin', 'templates_edit']\" role=\"menuitem\">\r\n                                    <a (click)=\"openTemplateEditModal(template)\" class=\"dropdown-item btn btn-edit btn-raised\" placement=\"top\" tooltip=\"{{'common.edit' | translate}}\"><i class=\"fa fa-pencil-square-o\"></i></a>\r\n                                </li>\r\n                                <li *ngxPermissionsOnly=\"['admin', 'super_admin', 'templates_delete']\" role=\"menuitem\">\r\n                                    <a (click)=\"removeTemplate(template.id)\" class=\"dropdown-item btn btn-delete btn-raised\" placement=\"top\" tooltip=\"{{'common.delete' | translate}}\"><i class=\"fa fa-trash-o\"></i></a>\r\n                                </li>\r\n                            </ul>\r\n                        </div>\r\n                    </td>\r\n                </tr>\r\n                </tbody>\r\n                <tfoot *ngIf=\"templates?.length == 0\" class=\"tfoot_dt\">\r\n                <tr>\r\n                    <td class=\"no-data-available text-center\" colspan=\"4\">{{'common.datatable.sEmptyTable' | translate}}</td>\r\n                </tr>\r\n                </tfoot>\r\n            </table>\r\n        </div>\r\n    </div>\r\n</div>\r\n");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/modules/settings-web/components/themes-create-import/themes-create-import.component.html":
/*!************************************************************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/modules/settings-web/components/themes-create-import/themes-create-import.component.html ***!
  \************************************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<div class=\"modal-header\">\r\n    <h2 class=\"modal-title font-weight-normal\">\r\n        <i aria-hidden=\"true\" class=\"fa fa-list-alt\"></i>&nbsp;{{'settings-web.themes.title' | translate}}</h2>\r\n    <button (click)=\"bsModalRef.hide()\" aria-label=\"Close\" class=\"close\" data-dismiss=\"modal\" type=\"button\">\r\n        <span aria-hidden=\"true\">&times;</span></button>\r\n</div>\r\n<form (ngSubmit)=\"onSubmit()\" [formGroup]=\"createThemesForm\" class=\"bs4-forms\">\r\n    <div class=\"modal-body\">\r\n        <div class=\"form-body\">\r\n            <div class=\"row\">\r\n                <div class=\"col-md-12\">\r\n                    <div class=\"form-group\">\r\n                        <label>{{'settings-web.themes.create.fields.folder' | translate}}</label>&nbsp;\r\n                        <span class=\"text-danger\">*</span>\r\n                        <input class=\"form-control\" formControlName=\"folder\" placeholder=\"{{'settings-web.themes.create.fields.folder' | translate}}\" type=\"file\"/>\r\n                    </div>\r\n                </div>\r\n            </div>\r\n\r\n        </div>\r\n    </div>\r\n    <div class=\"modal-footer\">\r\n        <button (click)=\"onCancel()\" class=\"btn btn-cancel mb-0\" data-dismiss=\"modal\" type=\"button\">{{'common.close' | translate}}</button>\r\n        <button class=\"btn btn-submit mb-0\" type=\"submit\"><span>{{'common.create' | translate}}</span></button>\r\n    </div>\r\n</form>\r\n");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/modules/settings-web/components/themes-create/themes-create.component.html":
/*!**********************************************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/modules/settings-web/components/themes-create/themes-create.component.html ***!
  \**********************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<div class=\"modal-header\">\r\n    <h2 class=\"modal-title font-weight-normal\">\r\n        <i aria-hidden=\"true\" class=\"fa fa-list-alt\"></i>&nbsp;{{'settings_web.themes.create.title1' | translate}}</h2>\r\n    <button (click)=\"bsModalRef.hide()\" aria-label=\"Close\" class=\"close\" data-dismiss=\"modal\" type=\"button\">\r\n        <span aria-hidden=\"true\">&times;</span></button>\r\n</div>\r\n<form (ngSubmit)=\"onSubmit()\" [formGroup]=\"createThemesForm\" class=\"bs4-forms\">\r\n    <div class=\"modal-body\">\r\n        <div class=\"form-body\">\r\n            <div class=\"row\">\r\n                <div class=\"col-md-12\">\r\n                    <div class=\"form-group\">\r\n                        <label for=\"name\">{{'settings_web.themes.create.fields.name' | translate}}</label>&nbsp;\r\n                        <span class=\"text-danger\">*</span>\r\n                        <input [ngClass]=\"{ 'is-invalid': isFormSubmitted && themesControl.name.errors }\" class=\"form-control\" formControlName=\"name\" placeholder=\"{{'settings_web.themes.create.placeholders.placeholder1' | translate}}\" type=\"text\"/>\r\n                        <div *ngIf=\"isFormSubmitted && themesControl.name.errors\" class=\"invalid-feedback\">\r\n                            <div>{{'settings_web.themes.create.fields.name' | translate}} {{'shared.error_messages.message1' | translate}}</div>\r\n                        </div>\r\n                    </div>\r\n                </div>\r\n                <div class=\"col-md-12\">\r\n                    <div class=\"form-group\">\r\n                        <label for=\"folder\">{{'settings_web.themes.create.fields.folder' | translate}}</label>&nbsp;\r\n                        <span class=\"text-danger\">*</span>\r\n                        <input [ngClass]=\"{ 'is-invalid': isFormSubmitted && themesControl.folder.errors }\" class=\"form-control\" formControlName=\"folder\" placeholder=\"{{'settings_web.themes.create.placeholders.placeholder2' | translate}}\" type=\"text\"/>\r\n                        <div *ngIf=\"isFormSubmitted && themesControl.folder.errors\" class=\"invalid-feedback\">\r\n                            <div *ngIf=\"themesControl.folder.errors.required\">{{'settings_web.themes.create.fields.folder' | translate}} {{'shared.error_messages.message1' | translate}}</div>\r\n                            <div *ngIf=\"themesControl.folder.errors.pattern\">{{'settings_web.themes.create.fields.folder' | translate}} {{'shared.error_messages.message2' | translate}} </div>\r\n                        </div>\r\n                    </div>\r\n                </div>\r\n                <div class=\"col-md-12\">\r\n                    <div class=\"form-group\">\r\n                        <label>{{'settings_web.themes.create.fields.description' | translate}}</label>&nbsp;\r\n                        <textarea class=\"form-control\" formControlName=\"description\" id=\"description\" name=\"description\" placeholder=\"{{'settings_web.themes.create.placeholders.placeholder3' | translate}}\"></textarea>\r\n                    </div>\r\n                </div>\r\n                <div class=\"col-md-12\">\r\n                    <div class=\"form-group\">\r\n                        <label [ngClass]=\"{ 'is-invalid': isFormSubmitted && themesControl.content_html.errors }\" for=\"content_html\">{{'settings_web.themes.create.fields.content_html' | translate}}</label>&nbsp;\r\n                        <span class=\"text-danger\">*</span>\r\n                        <ngx-monaco-editor [options]=\"editorOptions\" class=\"code-editor\" formControlName=\"content_html\"></ngx-monaco-editor>\r\n                        <div *ngIf=\"isFormSubmitted && themesControl.content_html.errors\" class=\"invalid-feedback\">\r\n                            <div>{{'settings_web.themes.create.fields.content_html' | translate}} {{'shared.error_messages.message1' | translate}}</div>\r\n                        </div>\r\n                    </div>\r\n                </div>\r\n            </div>\r\n\r\n        </div>\r\n    </div>\r\n    <div class=\"modal-footer\">\r\n        <button (click)=\"onCancel()\" class=\"btn btn-cancel mb-0\" data-dismiss=\"modal\" type=\"button\">{{'common.close' | translate}}</button>\r\n        <button class=\"btn btn-submit mb-0\" type=\"submit\"><span>{{'common.create' | translate}}</span></button>\r\n    </div>\r\n</form>\r\n");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/modules/settings-web/components/themes-edit/themes-edit.component.html":
/*!******************************************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/modules/settings-web/components/themes-edit/themes-edit.component.html ***!
  \******************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<div class=\"modal-header\">\r\n    <h2 class=\"modal-title font-weight-normal\">\r\n        <i aria-hidden=\"true\" class=\"fa fa-list-alt\"></i>&nbsp;{{'settings_web.themes.create.title2' | translate}}</h2>\r\n    <button (click)=\"bsModalRef.hide()\" aria-label=\"Close\" class=\"close\" data-dismiss=\"modal\" type=\"button\">\r\n        <span aria-hidden=\"true\">&times;</span></button>\r\n</div>\r\n<form (ngSubmit)=\"onSubmit()\" [formGroup]=\"editThemesForm\" class=\"bs4-forms\">\r\n    <div class=\"modal-body\">\r\n        <div class=\"form-body\">\r\n            <div class=\"row\">\r\n                <div class=\"col-md-12\">\r\n                    <div class=\"form-group\">\r\n                        <label for=\"name\">{{'settings_web.themes.create.fields.name' | translate}}</label>&nbsp;\r\n                        <span class=\"text-danger\">*</span>\r\n                        <input [ngClass]=\"{ 'is-invalid': isFormSubmitted && themesControl.name.errors }\" class=\"form-control\" formControlName=\"name\" placeholder=\"{{'settings_web.themes.create.placeholders.placeholder1' | translate}}\" type=\"text\"/>\r\n                        <div *ngIf=\"isFormSubmitted && themesControl.name.errors\" class=\"invalid-feedback\">\r\n                            <div>{{'settings_web.themes.create.fields.name' | translate}} {{'shared.error_messages.message1' | translate}}</div>\r\n                        </div>\r\n                    </div>\r\n                </div>\r\n                <div class=\"col-md-12\">\r\n                    <div class=\"form-group\">\r\n                        <label for=\"folder\">{{'settings_web.themes.create.fields.folder' | translate}}</label>&nbsp;\r\n                        <span class=\"text-danger\">*</span>\r\n                        <input [ngClass]=\"{ 'is-invalid': isFormSubmitted && themesControl.folder.errors }\" class=\"form-control\" formControlName=\"folder\" placeholder=\"{{'settings_web.themes.create.placeholders.placeholder2' | translate}}\" type=\"text\"/>\r\n                        <div *ngIf=\"isFormSubmitted && themesControl.folder.errors\" class=\"invalid-feedback\">\r\n                            <div *ngIf=\"themesControl.folder.errors.required\">{{'settings_web.themes.create.fields.folder' | translate}} {{'shared.error_messages.message1' | translate}}</div>\r\n                            <div *ngIf=\"themesControl.folder.errors.pattern\">{{'settings_web.themes.create.fields.folder' | translate}} {{'shared.error_messages.message2' | translate}} </div>\r\n                        </div>\r\n                    </div>\r\n                </div>\r\n                <div class=\"col-md-12\">\r\n                    <div class=\"form-group\">\r\n                        <label>{{'settings_web.themes.create.fields.description' | translate}}</label>&nbsp;\r\n                        <textarea class=\"form-control\" formControlName=\"description\" id=\"description\" name=\"description\" placeholder=\"{{'settings_web.themes.create.placeholders.placeholder3' | translate}}\"></textarea>\r\n                    </div>\r\n                </div>\r\n                <div class=\"col-md-12\">\r\n                    <div class=\"form-group\">\r\n                        <label [ngClass]=\"{ 'is-invalid': isFormSubmitted && themesControl.content_html.errors }\" for=\"content_html\">{{'settings_web.themes.create.fields.content_html' | translate}}</label>&nbsp;\r\n                        <span class=\"text-danger\">*</span>\r\n                        <ngx-monaco-editor [options]=\"editorOptions\" class=\"code-editor\" formControlName=\"content_html\"></ngx-monaco-editor>\r\n                        <div *ngIf=\"isFormSubmitted && themesControl.folder.errors\" class=\"invalid-feedback\">\r\n                            <div>{{'settings_web.themes.create.fields.content_html' | translate}} {{'shared.error_messages.message1' | translate}}</div>\r\n                        </div>\r\n                    </div>\r\n                </div>\r\n            </div>\r\n        </div>\r\n    </div>\r\n    <div class=\"modal-footer\">\r\n        <button (click)=\"onCancel()\" class=\"btn btn-cancel mb-0\" data-dismiss=\"modal\" type=\"button\">{{'common.close' | translate}}</button>\r\n        <button class=\"btn btn-submit mb-0\" type=\"submit\"><span>{{'common.update' | translate}}</span></button>\r\n    </div>\r\n</form>\r\n");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/modules/settings-web/components/themes/themes.component.html":
/*!********************************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/modules/settings-web/components/themes/themes.component.html ***!
  \********************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<!-- Card header -->\r\n<div class=\"card-header pl-0 pr-0 mb-3 border-bottom\">\r\n    <h4 class=\"sub-title mt-3\"><span>{{'settings_web.themes.title' | translate}}</span></h4>\r\n    <!-- <button (click)=\"openThemeCreateImportModal()\" *ngxPermissionsOnly=\"['admin', 'super_admin', 'customfields_create']\" class=\"btn btn-create mb-0\" tooltip=\"{{'common.create' | translate}}\" type=\"button\">\r\n        Import\r\n    </button> -->\r\n    <button (click)=\"openThemeCreateModal()\" *ngxPermissionsOnly=\"['admin', 'super_admin', 'themes_create']\" class=\"btn btn-create mb-0\" tooltip=\"{{'common.create' | translate}}\" type=\"button\">\r\n        <i class=\"fa fa-plus\"></i>\r\n    </button>\r\n</div>\r\n<div class=\"card-content\">\r\n    <div class=\"card-body\">\r\n        <div class=\"table-responsive-xs table-responsive-sm table-responsive-md table-responsive-lg table-responsive-xl\">\r\n            <table [dtOptions]=\"dtOptions\" [dtTrigger]=\"dtTrigger\" class=\"table table-bordered table-hover b4-datatable\" datatable id=\"custom_field_table\" width=\"100%\">\r\n                <thead>\r\n                <tr>\r\n                    <th>#</th>\r\n                    <th>{{'settings_web.themes.columns.name' | translate}}</th>\r\n                    <th>{{'settings_web.themes.columns.description' | translate}}</th>\r\n                    <th>{{'settings_web.themes.columns.folder' | translate}}</th>\r\n                    <th>{{'settings_web.themes.columns.status' | translate}}</th>\r\n                    <th>{{'settings_web.themes.columns.actions' | translate}}</th>\r\n                </tr>\r\n                </thead>\r\n                <tbody *ngIf=\"themes?.length != 0\">\r\n                <tr *ngFor=\"let theme of themes; index as i\">\r\n                    <td>{{i + 1}}</td>\r\n                    <td>{{theme.name}}</td>\r\n                    <td>{{theme.description}}</td>\r\n                    <td>{{theme.folder}}</td>\r\n                    <td>\r\n                        <div *ngxPermissionsOnly=\"['admin', 'super_admin', 'themes_edit']; else elseBlock1; then thenBlock1\"></div>\r\n                        <ng-template #elseBlock1>\r\n                            <div class=\"budges-status\">\r\n                                <span *ngIf=\"theme.status == '1'\" class=\"completed\">{{'common.status.active' | translate}}</span>\r\n                                <span *ngIf=\"theme.status == '0'\" class=\"cancel\">{{'common.status.inactive' | translate}}</span>\r\n                            </div>\r\n                        </ng-template>\r\n                        <ng-template #thenBlock1>\r\n                            <ui-switch (valueChange)=\"changeStatus($event, theme.id)\" [checked]=\"theme.status == '1' ? true : false\"></ui-switch>\r\n                        </ng-template>\r\n                    </td>\r\n                    <td class=\"actions-dropdown\">\r\n                        <div class=\"btn-group\" dropdown>\r\n                            <button aria-controls=\"dropdown-basic-1\" class=\"dropdown-toggle btn-action\" dropdownToggle id=\"button-basic-1\" type=\"button\">\r\n                                <i class=\"fa fa-ellipsis-v\"></i>\r\n                            </button>\r\n                            <ul *dropdownMenu aria-labelledby=\"button-basic-1\" class=\"dropdown-menu animated fadeIn\" id=\"dropdown-basic-1\" role=\"menu\">\r\n                                <!-- <li *ngxPermissionsOnly=\"['admin', 'super_admin', 'themes_edit']\" role=\"menuitem\">\r\n                                    <a [routerLink]=\"['/settings-web/manager-file', theme.id]\" class=\"dropdown-item btn btn-view btn-raised\" placement=\"top\" tooltip=\"{{'common.manager' | translate}}\"><i class=\"fa fa-cog\"></i></a>\r\n                                </li> -->\r\n                                <li *ngxPermissionsOnly=\"['admin', 'super_admin', 'themes_edit']\" role=\"menuitem\">\r\n                                    <a (click)=\"openThemeEditModal(theme)\" class=\"dropdown-item btn btn-edit btn-raised\" placement=\"top\" tooltip=\"{{'common.edit' | translate}}\"><i class=\"fa fa-pencil-square-o\"></i></a>\r\n                                </li>\r\n                                <li *ngxPermissionsOnly=\"['admin', 'super_admin', 'themes_delete']\" role=\"menuitem\">\r\n                                    <a (click)=\"removeTheme(theme.id)\" class=\"dropdown-item btn btn-delete btn-raised\" placement=\"top\" tooltip=\"{{'common.delete' | translate}}\"><i class=\"fa fa-trash-o\"></i></a>\r\n                                </li>\r\n                            </ul>\r\n                        </div>\r\n                    </td>\r\n                </tr>\r\n                </tbody>\r\n                <tfoot *ngIf=\"themes?.length == 0\" class=\"tfoot_dt\">\r\n                <tr>\r\n                    <td class=\"no-data-available text-center\" colspan=\"6\">{{'common.datatable.sEmptyTable' | translate}}</td>\r\n                </tr>\r\n                </tfoot>\r\n            </table>\r\n        </div>\r\n    </div>\r\n</div>\r\n");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/modules/settings-web/components/widgets-create/widgets-create.component.html":
/*!************************************************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/modules/settings-web/components/widgets-create/widgets-create.component.html ***!
  \************************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<div class=\"modal-header\">\r\n    <h2 class=\"modal-title font-weight-normal\">\r\n        <i aria-hidden=\"true\" class=\"fa fa-list-alt\"></i>&nbsp;{{'settings_web.widgets.create.title1' | translate}}</h2>\r\n    <button (click)=\"bsModalRef.hide()\" aria-label=\"Close\" class=\"close\" data-dismiss=\"modal\" type=\"button\">\r\n        <span aria-hidden=\"true\">&times;</span></button>\r\n</div>\r\n<form (ngSubmit)=\"onSubmit()\" [formGroup]=\"createWidgetsForm\" class=\"bs4-forms\">\r\n    <div class=\"modal-body\">\r\n        <div class=\"form-body\">\r\n            <div class=\"row\">\r\n                <div class=\"col-md-12\">\r\n                    <div class=\"form-group\">\r\n                        <label for=\"widget_type_id\">{{'settings_web.widgets.create.fields.widget_type' | translate}}</label>\r\n                        <span class=\"text-danger\">*</span>\r\n                        <ng-select [items]=\"widgetsTypesData\" [ngClass]=\"{ 'is-invalid': isFormSubmitted && widgetsControl.widget_type_id.errors }\" [searchable]=\"true\" [selectOnTab]=\"true\" bindLabel=\"name\" bindValue=\"id\" formControlName=\"widget_type_id\" placeholder=\"{{'settings_web.widgets.create.placeholders.placeholder1' | translate}}\"></ng-select>\r\n                        <div *ngIf=\"isFormSubmitted && widgetsControl.widget_type_id.errors\" class=\"invalid-feedback\">\r\n                            <div *ngIf=\"widgetsControl.widget_type_id.errors.required\">{{'settings_web.widgets.create.fields.widget_type' | translate}} {{'shared.error_messages.message1' | translate}}</div>\r\n                        </div>\r\n                    </div>\r\n                </div>\r\n                <div class=\"col-md-12\">\r\n                    <div class=\"form-group\">\r\n                        <label for=\"name\">{{'settings_web.widgets.create.fields.name' | translate}}</label>&nbsp;\r\n                        <span class=\"text-danger\">*</span>\r\n                        <input [ngClass]=\"{ 'is-invalid': isFormSubmitted && widgetsControl.name.errors }\" class=\"form-control\" formControlName=\"name\" placeholder=\"{{'settings_web.widgets.create.placeholders.placeholder2' | translate}}\" type=\"text\"/>\r\n                        <div *ngIf=\"isFormSubmitted && widgetsControl.name.errors\" class=\"invalid-feedback\">\r\n                            <div *ngIf=\"widgetsControl.name.errors.required\">{{'settings_web.widgets.create.fields.name' | translate}} {{'shared.error_messages.message1' | translate}}</div>\r\n                        </div>\r\n                    </div>\r\n                </div>\r\n                <div class=\"col-md-12\">\r\n                    <div class=\"form-group\">\r\n                        <label>{{'settings_web.widgets.create.fields.description' | translate}}</label>&nbsp;\r\n                        <textarea class=\"form-control\" formControlName=\"description\" id=\"description\" name=\"description\" placeholder=\"{{'settings_web.widgets.create.placeholders.placeholder3' | translate}}\"></textarea>\r\n                    </div>\r\n                </div>\r\n            </div>\r\n\r\n        </div>\r\n    </div>\r\n    <div class=\"modal-footer\">\r\n        <button (click)=\"onCancel()\" class=\"btn btn-cancel mb-0\" data-dismiss=\"modal\" type=\"button\">{{'common.close' | translate}}</button>\r\n        <button class=\"btn btn-submit mb-0\" type=\"submit\"><span>{{'common.create' | translate}}</span></button>\r\n    </div>\r\n</form>\r\n");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/modules/settings-web/components/widgets-edit-data/widgets-edit-data.component.html":
/*!******************************************************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/modules/settings-web/components/widgets-edit-data/widgets-edit-data.component.html ***!
  \******************************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<div class=\"modal-header\">\r\n    <h2 class=\"modal-title font-weight-normal\">\r\n        <i aria-hidden=\"true\" class=\"fa fa-list-alt\"></i>&nbsp;{{'settings_web.widgets.create.title3' | translate}}</h2>\r\n    <button (click)=\"bsModalRef.hide()\" aria-label=\"Close\" class=\"close\" data-dismiss=\"modal\" type=\"button\">\r\n        <span aria-hidden=\"true\">&times;</span></button>\r\n</div>\r\n<form (ngSubmit)=\"onSubmit()\" [formGroup]=\"editWidgetsForm\" class=\"bs4-forms\">\r\n    <div class=\"modal-body\">\r\n        <div class=\"form-body\">\r\n            <div class=\"row\">\r\n                <div class=\"col-md-12\">\r\n                    <div class=\"form-group\">\r\n                        <label for=\"widget_type_id\">{{'settings_web.widgets.create.fields.widget_type' | translate}}</label>\r\n                        <span class=\"text-danger\">*</span>\r\n                        <ng-select [items]=\"widgetsTypesData\" [ngClass]=\"{ 'is-invalid': isFormSubmitted && widgetsControl.widget_type_id.errors }\" [searchable]=\"true\" [selectOnTab]=\"true\" bindLabel=\"name\" bindValue=\"id\" formControlName=\"widget_type_id\" placeholder=\"{{'settings_web.widgets.create.placeholders.placeholder1' | translate}}\"></ng-select>\r\n                        <div *ngIf=\"isFormSubmitted && widgetsControl.widget_type_id.errors\" class=\"invalid-feedback\">\r\n                            <div *ngIf=\"widgetsControl.widget_type_id.errors.required\">{{'settings_web.widgets.create.fields.widget_type' | translate}} {{'shared.error_messages.message1' | translate}}</div>\r\n                        </div>\r\n                    </div>\r\n                </div>\r\n\r\n                <div class=\"col-md-12\">\r\n                    <div class=\"form-group\">\r\n                        <label for=\"data_type\">{{'settings_web.widgets.create.fields.use_data_type' | translate}}</label>\r\n                        <light-bulb [value]=\"data_hint\" *ngIf=\"editWidgetsForm.get('data_type').value && [3,6,8,10].indexOf(editWidgetsForm.get('data_type').value) > -1\"></light-bulb>\r\n                        <ng-select [items]=\"AllDataWidget\"  [searchable]=\"true\" [selectOnTab]=\"true\" bindLabel=\"name\" bindValue=\"id\" formControlName=\"data_type\" (change)=\"useDataChange($event, 'change')\" placeholder=\"{{'settings_web.widgets.create.placeholders.placeholder5' | translate}}\"></ng-select>\r\n                    </div>\r\n                </div>\r\n                <div class=\"col-md-12\" *ngIf=\"editWidgetsForm.get('data_type').value && [3,6,8,10].indexOf(editWidgetsForm.get('data_type').value) == -1\">\r\n                    <div class=\"form-group\">\r\n                        <label for=\"data_id\">{{'settings_web.widgets.create.fields.use_data' | translate}}</label> <span class=\"text-danger\">*</span>\r\n                        <light-bulb [value]=\"data_hint\"></light-bulb>\r\n                        <ng-select [items]=\"useData\"  [searchable]=\"true\" [multiple]=\"true\" [selectOnTab]=\"true\" bindLabel=\"name\" bindValue=\"id\" formControlName=\"data_id\" [ngClass]=\"{ 'is-invalid': isFormSubmitted && widgetsControl.data_id.errors }\" placeholder=\"{{'settings_web.widgets.create.placeholders.placeholder6' | translate}}\"></ng-select>\r\n                        <div *ngIf=\"isFormSubmitted && widgetsControl.data_id.errors\" class=\"invalid-feedback\">\r\n                            <div>{{'settings_web.widgets.create.fields.use_data' | translate}} {{'shared.error_messages.message1' | translate}}</div>\r\n                        </div>\r\n                    </div>\r\n                </div>\r\n\r\n                <ng-container formArrayName=\"custom_field\">\r\n                    <ng-container *ngFor=\"let option of editWidgetsForm.get('custom_field')['controls']; let j = index\">\r\n                        <ng-container [formGroupName]=\"j\">\r\n                            <ng-container *ngFor=\"let multipleData of customFields; let f = index\">\r\n                                <div class=\"col-md-12\">\r\n                                    <div class=\"form-group\">\r\n                                        <label for=\"multipleData.field_column\">{{multipleData.field_label}} </label>\r\n                                        <span *ngIf=\"multipleData.is_required == true || multipleData.is_required == 1 \" class=\"text-danger\">&nbsp;*</span>\r\n                                        <!-- <ng-container *ngIf=\"multipleData.field_type == 'file'\">{{leftEcho}}$file_path{{rightEcho}}</ng-container>\r\n                                        {{leftEcho}}${{widgets.machine_name}}['{{multipleData.field_column}}']{{rightEcho}} -->\r\n                                        <light-bulb [value]=\"leftEcho + '$file_path' + rightEcho + leftEcho + '$' + widgets.machine_name + '[' + multipleData.field_column + ']' + rightEcho\" *ngIf=\"multipleData.field_type == 'file'\"></light-bulb>\r\n                                        <light-bulb [value]=\"leftEcho + '$' + widgets.machine_name + '[' + multipleData.field_column + ']' + rightEcho\" *ngIf=\"multipleData.field_type != 'file'\"></light-bulb>\r\n                                        <br>\r\n\r\n                                        <ng-container *ngIf=\"multipleData.field_type == 'text' || multipleData.field_type == 'link'\">\r\n                                            <input [class.is-invalid]=\"widgetsControl.custom_field.controls[j].controls[multipleData.field_column].errors && isFormSubmitted\" [formControlName]=\"multipleData.field_column\" class=\"form-control text-capitalize\" placeholder=\"{{'shared.show_custom_field.placeholders.placeholder1' | translate:{'custom_field':multipleData.field_label} }}\" type=\"text\"/>\r\n                                            <div *ngIf=\"isFormSubmitted && widgetsControl.custom_field.controls[j].controls[multipleData.field_column].errors\" class=\"invalid-feedback\">\r\n                                                <div>{{'shared.show_custom_field.error_messages.message1' | translate:{'custom_field': multipleData.field_label | lowercase} }}</div>\r\n                                            </div>\r\n                                        </ng-container>\r\n                                        <!-- File -->\r\n                                        <ng-container *ngIf=\"multipleData.field_type == 'file'\">\r\n                                            <app-dropzone (dropzoneCallback)=\"dropzoneCallback($event)\" [defaultValue]=\"widgets.custom_field[j] && widgets.custom_field[j][multipleData.field_column] ? widgets.custom_field[j][multipleData.field_column] : ''\" [parentFormArrayName]=\"'custom_field'\" [parentFormControlName]=\"multipleData.field_column\" [parentFormGroupName]=\"j\"></app-dropzone>\r\n                                            <input [formControlName]=\"multipleData.field_column\" type=\"hidden\">\r\n                                        </ng-container>\r\n                                        <!-- Dropdown -->\r\n                                        <ng-container *ngIf=\"multipleData.field_type == 'dropdown'\">\r\n                                            <ng-select [class.is-invalid]=\"widgetsControl.custom_field.controls[j].controls[multipleData.field_column].errors && isFormSubmitted\" [formControlName]=\"multipleData.field_column\" [items]=\"multipleData.select_options | objToAr\" [searchable]=\"true\" [selectOnTab]=\"true\" bindLabel=\"label\" bindValue=\"value\" class=\"text-capitalize\" labelForId=\"multipleData.select_options | objToAr\" placeholder=\"{{'shared.show_custom_field.placeholders.placeholder2' | translate:{'custom_field':multipleData.field_label} }}\"></ng-select>\r\n                                            <div *ngIf=\"isFormSubmitted && widgetsControl.custom_field.controls[j].controls[multipleData.field_column].errors\" class=\"invalid-feedback\">\r\n                                                <div>{{'shared.show_custom_field.error_messages.message2' | translate:{'custom_field': multipleData.field_label | lowercase} }}</div>\r\n                                            </div>\r\n                                        </ng-container>\r\n                                        <!-- Textarea -->\r\n                                        <ng-container *ngIf=\"multipleData.field_type == 'textarea'\">\r\n                                            <textarea [class.is-invalid]=\"widgetsControl.custom_field.controls[j].controls[multipleData.field_column].errors && isFormSubmitted\" [formControlName]=\"multipleData.field_column\" class=\"form-control text-capitalize\" cols=\"50\" placeholder=\"{{'shared.show_custom_field.placeholders.placeholder1' | translate:{'custom_field':multipleData.field_label} }}\" rows=\"4\"></textarea>\r\n                                            <div *ngIf=\"isFormSubmitted && widgetsControl.custom_field.controls[j].controls[multipleData.field_column].errors\" class=\"invalid-feedback\">\r\n                                                <div>{{'shared.show_custom_field.error_messages.message1' | translate:{'custom_field': multipleData.field_label | lowercase} }}</div>\r\n                                            </div>\r\n                                        </ng-container>\r\n                                        <!-- Numeric -->\r\n                                        <ng-container *ngIf=\"multipleData.field_type == 'numeric'\">\r\n                                            <input [class.is-invalid]=\"widgetsControl.custom_field.controls[j].controls[multipleData.field_column].errors && isFormSubmitted\" [formControlName]=\"multipleData.field_column\" class=\"form-control text-capitalize\" placeholder=\"{{'shared.show_custom_field.placeholders.placeholder1' | translate:{'custom_field':multipleData.field_label} }}\" type=\"number\"/>\r\n                                            <div *ngIf=\"widgetsControl.custom_field.controls[j].controls[multipleData.field_column].errors && isFormSubmitted\" class=\"invalid-feedback\">\r\n                                                <div>{{'shared.show_custom_field.error_messages.message1' | translate:{'custom_field': multipleData.field_label | lowercase} }}</div>\r\n                                            </div>\r\n                                        </ng-container>\r\n                                        <!-- Checkbox -->\r\n                                        <ng-container *ngIf=\"multipleData.field_type == 'checkbox'\">\r\n                                            <label class=\"checkbox-container col-form-label\">\r\n                                                <input [class.is-invalid]=\"widgetsControl.custom_field.controls[j].controls[multipleData.field_column].errors && isFormSubmitted\" [formControlName]=\"multipleData.field_column\" class=\"form-control text-capitalize\" id=\"multipleData.field_column\" type=\"checkbox\"/>\r\n                                                <span [class.is-invalid]=\"widgetsControl.custom_field.controls[j].controls[multipleData.field_column].errors && isFormSubmitted\" class=\"checkbox-checkmark\"></span>\r\n                                            </label>\r\n                                            <div *ngIf=\"widgetsControl.custom_field.controls[j].controls[multipleData.field_column].errors && isFormSubmitted\" class=\"invalid-feedback\">\r\n                                                <div>{{'shared.show_custom_field.error_messages.message2' | translate:{'custom_field': multipleData.field_label | lowercase} }}</div>\r\n                                            </div>\r\n                                        </ng-container>\r\n\r\n                                        <!-- editor -->\r\n                                        <ng-container *ngIf=\"multipleData.field_type == 'editor'\">\r\n                                            <label class=\"checkbox-container col-form-label\">\r\n                                                <app-ngx-editor [class.is-invalid]=\"widgetsControl.custom_field.controls[j].controls[multipleData.field_column].errors && isFormSubmitted\" height=\"100px\" id=\"multipleData.field_column\" minHeight=\"50px\"></app-ngx-editor>\r\n                                            </label>\r\n                                            <div *ngIf=\"widgetsControl.custom_field.controls[j].controls[multipleData.field_column].errors && isFormSubmitted\" class=\"invalid-feedback\">\r\n                                                <div>{{'shared.show_custom_field.error_messages.message2' | translate:{'custom_field': multipleData.field_label | lowercase} }}</div>\r\n                                            </div>\r\n                                        </ng-container>\r\n                                    </div>\r\n                                </div>\r\n                            </ng-container>\r\n                        </ng-container>\r\n                    </ng-container>\r\n                </ng-container>\r\n\r\n                <div class=\"col-md-12\">\r\n                    <ng-container *ngIf=\"customFieldsMultiple.length > 0\">\r\n                        <!-- @foreach(${{widgets.machine_name}}['multipleData'] as $value)<br>\r\n                        <ng-container *ngFor=\"let item of customFieldsMultiple\">\r\n                            &nbsp;<ng-container *ngIf=\"item.field_type == 'file'\">{{leftEcho}}$file_path{{rightEcho}}</ng-container>\r\n                            {{leftEcho}}$value['{{item.field_column}}']{{rightEcho}}<br>\r\n                        </ng-container>\r\n                        @endforeach -->\r\n\r\n                        <light-bulb [value]=\"data_hint_multiple\"></light-bulb>\r\n                    </ng-container>\r\n                </div>\r\n                <div *ngIf=\"customFieldsMultiple.length > 0\" class=\"col-md-12\">\r\n                    <div class=\"table-responsive-xs table-responsive-sm table-responsive-md table-responsive-lg table-responsive-xl\">\r\n                        <ng-container formArrayName=\"custom_field_multiple\">\r\n                            <table cellpadding=\"0\" cellspacing=\"0\" class=\"table table-bordered table-hover b4-datatable\" width=\"100%\">\r\n                                <thead>\r\n                                <tr>\r\n                                    <th colspan=\"3\">\r\n                                        <button (click)=\"addOption('custom_field_multiple', customFieldsMultiple)\" class=\"btn btn-raised mint-gradient white mb-0\" type=\"button\">\r\n                                            <i class=\"fa fa-plus\"></i></button>\r\n                                    </th>\r\n                                </tr>\r\n                                </thead>\r\n                                <tbody *ngFor=\"let option of editWidgetsForm.get('custom_field_multiple').controls; let j = index\" style=\"background: #f0f0f5; margin-top: 10px;\">\r\n                                <ng-container [formGroupName]=\"j\">\r\n                                    <tr *ngFor=\"let multipleData of customFieldsMultiple; let f = index\">\r\n                                        <td>\r\n                                            <div class=\"col-md-12\">\r\n                                                <div class=\"form-group\">\r\n                                                    <label for=\"multipleData.field_column\">{{multipleData.field_label}} </label>\r\n                                                    <span *ngIf=\"multipleData.is_required == true || multipleData.is_required == 1 \" class=\"text-danger\">&nbsp;*</span>\r\n                                                    <ng-container *ngIf=\"multipleData.field_type == 'text' || multipleData.field_type == 'link'\">\r\n                                                        <input [class.is-invalid]=\"widgetsControl.custom_field_multiple.controls[j].controls[multipleData.field_column].errors && isFormSubmitted\" [formControlName]=\"multipleData.field_column\" class=\"form-control text-capitalize\" placeholder=\"{{'shared.show_custom_field.placeholders.placeholder1' | translate:{'custom_field':multipleData.field_label} }}\" type=\"text\"/>\r\n                                                        <div *ngIf=\"isFormSubmitted && widgetsControl.custom_field_multiple.controls[j].controls[multipleData.field_column].errors\" class=\"invalid-feedback\">\r\n                                                            <div>{{'shared.show_custom_field.error_messages.message1' | translate:{'custom_field': multipleData.field_label | lowercase} }}</div>\r\n                                                        </div>\r\n                                                    </ng-container>\r\n                                                    <!-- File -->\r\n                                                    <ng-container *ngIf=\"multipleData.field_type == 'file'\">\r\n                                                        <app-dropzone (dropzoneCallback)=\"dropzoneCallback($event)\" [defaultValue]=\"widgets && widgets.custom_field_multiple && widgets.custom_field_multiple[j] && widgets.custom_field_multiple[j][multipleData.field_column].length > 0 ? widgets.custom_field_multiple[j][multipleData.field_column] : ''\" [parentFormArrayName]=\"'custom_field_multiple'\" [parentFormControlName]=\"multipleData.field_column\" [parentFormGroupName]=\"j\"></app-dropzone>\r\n                                                        <input [formControlName]=\"multipleData.field_column\" type=\"hidden\">\r\n                                                    </ng-container>\r\n                                                    <!-- Dropdown -->\r\n                                                    <ng-container *ngIf=\"multipleData.field_type == 'dropdown'\">\r\n                                                        <ng-select [class.is-invalid]=\"widgetsControl.custom_field_multiple.controls[j].controls[multipleData.field_column].errors && isFormSubmitted\" [formControlName]=\"multipleData.field_column\" [items]=\"multipleData.select_options | objToAr\" [searchable]=\"true\" [selectOnTab]=\"true\" bindLabel=\"label\" bindValue=\"value\" class=\"text-capitalize\" labelForId=\"multipleData.select_options | objToAr\" placeholder=\"{{'shared.show_custom_field.placeholders.placeholder2' | translate:{'custom_field':multipleData.field_label} }}\"></ng-select>\r\n                                                        <div *ngIf=\"isFormSubmitted && widgetsControl.custom_field_multiple.controls[j].controls[multipleData.field_column].errors\" class=\"invalid-feedback\">\r\n                                                            <div>{{'shared.show_custom_field.error_messages.message2' | translate:{'custom_field': multipleData.field_label | lowercase} }}</div>\r\n                                                        </div>\r\n                                                    </ng-container>\r\n                                                    <!-- Textarea -->\r\n                                                    <ng-container *ngIf=\"multipleData.field_type == 'textarea'\">\r\n                                                        <textarea [class.is-invalid]=\"widgetsControl.custom_field_multiple.controls[j].controls[multipleData.field_column].errors && isFormSubmitted\" [formControlName]=\"multipleData.field_column\" class=\"form-control text-capitalize\" cols=\"50\" placeholder=\"{{'shared.show_custom_field.placeholders.placeholder1' | translate:{'custom_field':multipleData.field_label} }}\" rows=\"4\"></textarea>\r\n                                                        <div *ngIf=\"isFormSubmitted && widgetsControl.custom_field_multiple.controls[j].controls[multipleData.field_column].errors\" class=\"invalid-feedback\">\r\n                                                            <div>{{'shared.show_custom_field.error_messages.message1' | translate:{'custom_field': multipleData.field_label | lowercase} }}</div>\r\n                                                        </div>\r\n                                                    </ng-container>\r\n                                                    <!-- Numeric -->\r\n                                                    <ng-container *ngIf=\"multipleData.field_type == 'numeric'\">\r\n                                                        <input [class.is-invalid]=\"widgetsControl.custom_field_multiple.controls[j].controls[multipleData.field_column].errors && isFormSubmitted\" [formControlName]=\"multipleData.field_column\" class=\"form-control text-capitalize\" placeholder=\"{{'shared.show_custom_field.placeholders.placeholder1' | translate:{'custom_field':multipleData.field_label} }}\" type=\"number\"/>\r\n                                                        <div *ngIf=\"widgetsControl.custom_field_multiple.controls[j].controls[multipleData.field_column].errors && isFormSubmitted\" class=\"invalid-feedback\">\r\n                                                            <div>{{'shared.show_custom_field.error_messages.message1' | translate:{'custom_field': multipleData.field_label | lowercase} }}</div>\r\n                                                        </div>\r\n                                                    </ng-container>\r\n                                                    <!-- Date -->\r\n                                                    <!--\t\t\t\t\t\t\t\t\t\t\t\t\t\t<ng-container *ngIf=\"multipleData.field_type == 'date'\">-->\r\n                                                    <!--\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<div class=\"position-relative has-icon-left\">-->\r\n                                                    <!--\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<input type=\"text\" class=\"form-control text-capitalize\" #dp1=\"bsDatepicker\" bsDatepicker [bsConfig]=\"datepickerConfig\" [formControlName]=\"multipleData.field_column\" placeholder=\"{{'shared.show_custom_field.placeholders.placeholder2' | translate:{'custom_field':multipleData.field_label} }}\" [class.is-invalid]=\"widgetsControl.custom_field_multiple.controls[j].controls[multipleData.field_column].errors && isFormSubmitted\" />-->\r\n                                                    <!--\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<div class=\"form-control-position\"><i class=\"ft-calendar\"></i></div>-->\r\n                                                    <!--\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<div *ngIf=\"widgetsControl.custom_field_multiple.controls[j].controls[multipleData.field_column].errors && isFormSubmitted\" class=\"invalid-feedback\">-->\r\n                                                    <!--\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<div>{{'shared.show_custom_field.error_messages.message2' | translate:{'custom_field':multipleData.field_label | lowercase} }}</div>-->\r\n                                                    <!--\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t</div>-->\r\n                                                    <!--\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t</div>-->\r\n                                                    <!--\t\t\t\t\t\t\t\t\t\t\t\t\t\t</ng-container>-->\r\n                                                    <!-- Checkbox -->\r\n                                                    <ng-container *ngIf=\"multipleData.field_type == 'checkbox'\">\r\n                                                        <label class=\"checkbox-container col-form-label\">\r\n                                                            <input [class.is-invalid]=\"widgetsControl.custom_field_multiple.controls[j].controls[multipleData.field_column].errors && isFormSubmitted\" [formControlName]=\"multipleData.field_column\" class=\"form-control text-capitalize\" id=\"multipleData.field_column\" type=\"checkbox\"/>\r\n                                                            <span [class.is-invalid]=\"widgetsControl.custom_field_multiple.controls[j].controls[multipleData.field_column].errors && isFormSubmitted\" class=\"checkbox-checkmark\"></span>\r\n                                                        </label>\r\n                                                        <div *ngIf=\"widgetsControl.custom_field_multiple.controls[j].controls[multipleData.field_column].errors && isFormSubmitted\" class=\"invalid-feedback\">\r\n                                                            <div>{{'shared.show_custom_field.error_messages.message2' | translate:{'custom_field': multipleData.field_label | lowercase} }}</div>\r\n                                                        </div>\r\n                                                    </ng-container>\r\n\r\n                                                    <!-- editor -->\r\n                                                    <ng-container *ngIf=\"multipleData.field_type == 'editor'\">\r\n                                                        <label class=\"checkbox-container col-form-label\">\r\n                                                            <app-ngx-editor [class.is-invalid]=\"widgetsControl.custom_field_multiple.controls[j].controls[multipleData.field_column].errors && isFormSubmitted\" height=\"100px\" id=\"multipleData.field_column\" minHeight=\"50px\"></app-ngx-editor>\r\n                                                        </label>\r\n                                                        <div *ngIf=\"widgetsControl.custom_field_multiple.controls[j].controls[multipleData.field_column].errors && isFormSubmitted\" class=\"invalid-feedback\">\r\n                                                            <div>{{'shared.show_custom_field.error_messages.message2' | translate:{'custom_field': multipleData.field_label | lowercase} }}</div>\r\n                                                        </div>\r\n                                                    </ng-container>\r\n\r\n\r\n                                                </div>\r\n                                            </div>\r\n                                        </td>\r\n                                    </tr>\r\n                                    <tr>\r\n                                        <td>\r\n                                            <a (click)=\"deleteOption(j)\" class=\"btn btn-raised mint-gradient white\"><i class=\"fa fa-close\"></i></a>\r\n                                        </td>\r\n                                    </tr>\r\n                                </ng-container>\r\n                                </tbody>\r\n                            </table>\r\n                        </ng-container>\r\n                    </div>\r\n                </div>\r\n\r\n                <div class=\"col-md-12\">\r\n                    <div class=\"form-group\">\r\n                        <label for=\"content_html\">{{'settings_web.widgets.create.fields.content_html' | translate}}</label>&nbsp;\r\n                        <span class=\"text-danger\">*</span>\r\n                        <ngx-monaco-editor [ngClass]=\"{ 'is-invalid': isFormSubmitted && widgetsControl.content_html.errors }\" [options]=\"editorOptions\" class=\"code-editor\" formControlName=\"content_html\" id=\"content_html\"></ngx-monaco-editor>\r\n                        <div *ngIf=\"isFormSubmitted && widgetsControl.content_html.errors\" class=\"invalid-feedback\">\r\n                            <div *ngIf=\"widgetsControl.content_html.errors.required\">{{'settings_web.widgets.create.fields.content_html' | translate}} {{'shared.error_messages.message1' | translate}}</div>\r\n                        </div>\r\n                    </div>\r\n                </div>\r\n            </div>\r\n        </div>\r\n    </div>\r\n    <div class=\"modal-footer\">\r\n        <button (click)=\"onCancel()\" class=\"btn btn-cancel mb-0\" data-dismiss=\"modal\" type=\"button\">{{'common.close' | translate}}</button>\r\n        <button class=\"btn btn-submit mb-0\" type=\"submit\"><span>{{'common.update' | translate}}</span></button>\r\n    </div>\r\n</form>\r\n");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/modules/settings-web/components/widgets-edit/widgets-edit.component.html":
/*!********************************************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/modules/settings-web/components/widgets-edit/widgets-edit.component.html ***!
  \********************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<div class=\"modal-header\">\r\n    <h2 class=\"modal-title font-weight-normal\">\r\n        <i aria-hidden=\"true\" class=\"fa fa-list-alt\"></i>&nbsp;{{'settings_web.widgets.create.title2' | translate}}</h2>\r\n    <button (click)=\"bsModalRef.hide()\" aria-label=\"Close\" class=\"close\" data-dismiss=\"modal\" type=\"button\">\r\n        <span aria-hidden=\"true\">&times;</span></button>\r\n</div>\r\n<form (ngSubmit)=\"onSubmit()\" [formGroup]=\"editWidgetsForm\" class=\"bs4-forms\">\r\n    <div class=\"modal-body\">\r\n        <div class=\"form-body\">\r\n            <div class=\"row\">\r\n                <div class=\"col-md-12\">\r\n                    <div class=\"form-group\">\r\n                        <label for=\"widget_type_id\">{{'settings_web.widgets.create.fields.widget_type' | translate}}</label>\r\n                        <span class=\"text-danger\">*</span>\r\n                        <ng-select [items]=\"widgetsTypesData\" [ngClass]=\"{ 'is-invalid': isFormSubmitted && widgetsControl.widget_type_id.errors }\" [searchable]=\"true\" [selectOnTab]=\"true\" bindLabel=\"name\" bindValue=\"id\" formControlName=\"widget_type_id\" placeholder=\"{{'settings_web.widgets.create.placeholders.placeholder1' | translate}}\"></ng-select>\r\n                        <div *ngIf=\"isFormSubmitted && widgetsControl.widget_type_id.errors\" class=\"invalid-feedback\">\r\n                            <div *ngIf=\"widgetsControl.widget_type_id.errors.required\">{{'settings_web.widgets.create.fields.widget_type' | translate}} {{'shared.error_messages.message1' | translate}}</div>\r\n                        </div>\r\n                    </div>\r\n                </div>\r\n                <div class=\"col-md-12\">\r\n                    <div class=\"form-group\">\r\n                        <label for=\"name\">{{'settings_web.widgets.create.fields.name' | translate}}</label>&nbsp;\r\n                        <span class=\"text-danger\">*</span>\r\n                        <input [ngClass]=\"{ 'is-invalid': isFormSubmitted && widgetsControl.name.errors }\" class=\"form-control\" formControlName=\"name\" placeholder=\"{{'settings_web.widgets.create.placeholders.placeholder2' | translate}}\" type=\"text\"/>\r\n                        <div *ngIf=\"isFormSubmitted && widgetsControl.name.errors\" class=\"invalid-feedback\">\r\n                            <div *ngIf=\"widgetsControl.name.errors.required\">{{'settings_web.widgets.create.fields.name' | translate}} {{'shared.error_messages.message1' | translate}}</div>\r\n                        </div>\r\n                    </div>\r\n                </div>\r\n                <div class=\"col-md-12\">\r\n                    <div class=\"form-group\">\r\n                        <label>{{'settings_web.widgets.create.fields.description' | translate}}</label>&nbsp;\r\n                        <textarea class=\"form-control\" formControlName=\"description\" id=\"description\" name=\"description\" placeholder=\"{{'settings_web.widgets.create.placeholders.placeholder3' | translate}}\"></textarea>\r\n                    </div>\r\n                </div>\r\n            </div>\r\n        </div>\r\n    </div>\r\n    <div class=\"modal-footer\">\r\n        <button (click)=\"onCancel()\" class=\"btn btn-cancel mb-0\" data-dismiss=\"modal\" type=\"button\">{{'common.close' | translate}}</button>\r\n        <button class=\"btn btn-submit mb-0\" type=\"submit\"><span>{{'common.update' | translate}}</span></button>\r\n    </div>\r\n</form>\r\n");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/modules/settings-web/components/widgets-types-create/widgets-types-create.component.html":
/*!************************************************************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/modules/settings-web/components/widgets-types-create/widgets-types-create.component.html ***!
  \************************************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<div class=\"modal-header\">\r\n    <h2 class=\"modal-title font-weight-normal\">\r\n        <i aria-hidden=\"true\" class=\"fa fa-list-alt\"></i>&nbsp;{{'settings_web.widgets_types.create.title1' | translate}}</h2>\r\n    <button (click)=\"bsModalRef.hide()\" aria-label=\"Close\" class=\"close\" data-dismiss=\"modal\" type=\"button\">\r\n        <span aria-hidden=\"true\">&times;</span></button>\r\n</div>\r\n<form (ngSubmit)=\"onSubmit()\" [formGroup]=\"createWidgetsTypesForm\" class=\"bs4-forms\">\r\n    <div class=\"modal-body\">\r\n        <div class=\"form-body\">\r\n            <div class=\"row\">\r\n                <div class=\"col-md-12\">\r\n                    <div class=\"form-group\">\r\n                        <label for=\"name\">{{'settings_web.widgets_types.create.fields.name' | translate}}</label>&nbsp;\r\n                        <span class=\"text-danger\">*</span>\r\n                        <input [ngClass]=\"{ 'is-invalid': isFormSubmitted && widgetsTypesControl.name.errors }\" class=\"form-control\" formControlName=\"name\" placeholder=\"{{'settings_web.widgets_types.create.placeholders.placeholder1' | translate}}\" required=\"\" type=\"text\"/>\r\n                        <div *ngIf=\"isFormSubmitted && widgetsTypesControl.name.errors\" class=\"invalid-feedback\">\r\n                            <div *ngIf=\"widgetsTypesControl.name.errors.required\">{{'settings_web.regions.create.fields.name' | translate}} {{'shared.error_messages.message1' | translate}}</div>\r\n                        </div>\r\n                    </div>\r\n                </div>\r\n                <div class=\"col-md-12\">\r\n                    <div class=\"form-group\">\r\n                        <label>{{'settings_web.widgets_types.create.fields.description' | translate}}</label>&nbsp;\r\n                        <textarea class=\"form-control\" formControlName=\"description\" id=\"description\" name=\"description\" placeholder=\"{{'settings_web.widgets_types.create.placeholders.placeholder2' | translate}}\"></textarea>\r\n                    </div>\r\n                </div>\r\n            </div>\r\n\r\n        </div>\r\n    </div>\r\n    <div class=\"modal-footer\">\r\n        <button (click)=\"onCancel()\" class=\"btn btn-cancel mb-0\" data-dismiss=\"modal\" type=\"button\">{{'common.close' | translate}}</button>\r\n        <button class=\"btn btn-submit mb-0\" type=\"submit\"><span>{{'common.create' | translate}}</span></button>\r\n    </div>\r\n</form>\r\n");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/modules/settings-web/components/widgets-types-edit/widgets-types-edit.component.html":
/*!********************************************************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/modules/settings-web/components/widgets-types-edit/widgets-types-edit.component.html ***!
  \********************************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<div class=\"modal-header\">\r\n    <h2 class=\"modal-title font-weight-normal\">\r\n        <i aria-hidden=\"true\" class=\"fa fa-list-alt\"></i>&nbsp;{{'settings_web.widgets_types.create.title2' | translate}}</h2>\r\n    <button (click)=\"bsModalRef.hide()\" aria-label=\"Close\" class=\"close\" data-dismiss=\"modal\" type=\"button\">\r\n        <span aria-hidden=\"true\">&times;</span></button>\r\n</div>\r\n<form (ngSubmit)=\"onSubmit()\" [formGroup]=\"editWidgetsTypesForm\" class=\"bs4-forms\">\r\n    <div class=\"modal-body\">\r\n        <div class=\"form-body\">\r\n            <div class=\"row\">\r\n                <div class=\"col-md-12\">\r\n                    <div class=\"form-group\">\r\n                        <label for=\"name\">{{'settings_web.widgets_types.create.fields.name' | translate}}</label>&nbsp;\r\n                        <span class=\"text-danger\">*</span>\r\n                        <input [ngClass]=\"{ 'is-invalid': isFormSubmitted && widgetsTypesControl.name.errors }\" class=\"form-control\" formControlName=\"name\" placeholder=\"{{'settings_web.widgets_types.create.placeholders.placeholder1' | translate}}\" required=\"\" type=\"text\"/>\r\n                        <div *ngIf=\"isFormSubmitted && widgetsTypesControl.name.errors\" class=\"invalid-feedback\">\r\n                            <div *ngIf=\"widgetsTypesControl.name.errors.required\">{{'settings_web.regions.create.fields.name' | translate}} {{'shared.error_messages.message1' | translate}}</div>\r\n                        </div>\r\n                    </div>\r\n                </div>\r\n                <div class=\"col-md-12\">\r\n                    <div class=\"form-group\">\r\n                        <label>{{'settings_web.widgets_types.create.fields.description' | translate}}</label>&nbsp;\r\n                        <textarea class=\"form-control\" formControlName=\"description\" id=\"description\" name=\"description\" placeholder=\"{{'settings_web.widgets_types.create.placeholders.placeholder2' | translate}}\"></textarea>\r\n                    </div>\r\n                </div>\r\n            </div>\r\n        </div>\r\n    </div>\r\n    <div class=\"modal-footer\">\r\n        <button (click)=\"onCancel()\" class=\"btn btn-cancel mb-0\" data-dismiss=\"modal\" type=\"button\">{{'common.close' | translate}}</button>\r\n        <button class=\"btn btn-submit mb-0\" type=\"submit\"><span>{{'common.update' | translate}}</span></button>\r\n    </div>\r\n</form>\r\n");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/modules/settings-web/components/widgets-types/widgets-types.component.html":
/*!**********************************************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/modules/settings-web/components/widgets-types/widgets-types.component.html ***!
  \**********************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<!-- Card header -->\r\n<div class=\"card-header pl-0 pr-0 mb-3 border-bottom\">\r\n    <h4 class=\"sub-title mt-3\"><span>{{'settings_web.widgets_types.title' | translate}} </span></h4>\r\n    <button (click)=\"openWidgetsTypeCreateModal()\" *ngxPermissionsOnly=\"['admin', 'super_admin', 'widgets_types_create']\" class=\"btn btn-create mb-0\" tooltip=\"{{'common.create' | translate}}\" type=\"button\">\r\n        <i class=\"fa fa-plus\"></i>\r\n    </button>\r\n</div>\r\n<div class=\"card-content\">\r\n    <div class=\"card-body\">\r\n        <div class=\"table-responsive-xs table-responsive-sm table-responsive-md table-responsive-lg table-responsive-xl\">\r\n            <table [dtOptions]=\"dtOptions\" [dtTrigger]=\"dtTrigger\" class=\"table table-bordered table-hover b4-datatable\" datatable id=\"custom_field_table\" width=\"100%\">\r\n                <thead>\r\n                <tr>\r\n                    <th>#</th>\r\n                    <th>{{'settings_web.widgets_types.columns.name' | translate}}</th>\r\n                    <th>{{'settings_web.widgets_types.columns.description' | translate}}</th>\r\n                    <th>{{'settings_web.widgets_types.columns.actions' | translate}}</th>\r\n                </tr>\r\n                </thead>\r\n                <tbody *ngIf=\"widgets_types?.length != 0\">\r\n                <tr *ngFor=\"let widgets_type of widgets_types; index as i\">\r\n                    <td>{{i + 1}}</td>\r\n                    <td>{{widgets_type.name}}</td>\r\n                    <td>{{widgets_type.description}}</td>\r\n                    <td class=\"actions-dropdown\">\r\n                        <div class=\"btn-group\" dropdown>\r\n                            <button aria-controls=\"dropdown-basic-1\" class=\"dropdown-toggle btn-action\" dropdownToggle id=\"button-basic-1\" type=\"button\">\r\n                                <i class=\"fa fa-ellipsis-v\"></i></button>\r\n                            <ul *dropdownMenu aria-labelledby=\"button-basic-1\" class=\"dropdown-menu animated fadeIn\" id=\"dropdown-basic-1\" role=\"menu\">\r\n                                <li *ngxPermissionsOnly=\"['admin', 'super_admin', 'widgets_types_edit']\" role=\"menuitem\">\r\n                                    <a [routerLink]=\"['/settings-web/manager-widgets-types', widgets_type.id]\" class=\"dropdown-item btn btn-view btn-raised\" placement=\"top\" tooltip=\"{{'common.manager' | translate}}\"><i class=\"fa fa-cog\"></i></a>\r\n                                </li>\r\n                                <li *ngxPermissionsOnly=\"['admin', 'super_admin', 'widgets_types_edit']\" role=\"menuitem\">\r\n                                    <a (click)=\"openWidgetsTypeEditModal(widgets_type)\" class=\"dropdown-item btn btn-edit btn-raised\" placement=\"top\" tooltip=\"{{'common.edit' | translate}}\"><i class=\"fa fa-pencil-square-o\"></i></a>\r\n                                </li>\r\n                                <li *ngxPermissionsOnly=\"['admin', 'super_admin', 'widgets_types_delete']\" role=\"menuitem\">\r\n                                    <a (click)=\"removeWidgetsType(widgets_type.id)\" class=\"dropdown-item btn btn-delete btn-raised\" placement=\"top\" tooltip=\"{{'common.delete' | translate}}\"><i class=\"fa fa-trash-o\"></i></a>\r\n                                </li>\r\n                            </ul>\r\n                        </div>\r\n                    </td>\r\n                </tr>\r\n                </tbody>\r\n                <tfoot *ngIf=\"widgets_types?.length == 0\" class=\"tfoot_dt\">\r\n                <tr>\r\n                    <td class=\"no-data-available text-center\" colspan=\"4\">{{'common.datatable.sEmptyTable' | translate}}</td>\r\n                </tr>\r\n                </tfoot>\r\n            </table>\r\n        </div>\r\n    </div>\r\n</div>\r\n");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/modules/settings-web/components/widgets/widgets.component.html":
/*!**********************************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/modules/settings-web/components/widgets/widgets.component.html ***!
  \**********************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<!-- Card header -->\r\n<div class=\"card-header pl-0 pr-0 mb-3 border-bottom\">\r\n    <h4 class=\"sub-title mt-3\"><span>{{'settings_web.widgets.title' | translate}}</span></h4>\r\n    <button (click)=\"openWidgetCreateModal()\" *ngxPermissionsOnly=\"['admin', 'super_admin', 'widgets_create']\" class=\"btn btn-create mb-0\" tooltip=\"{{'common.create' | translate}}\" type=\"button\">\r\n        <i class=\"fa fa-plus\"></i>\r\n    </button>\r\n</div>\r\n<div class=\"card-content\">\r\n    <div class=\"card-body\">\r\n        <div class=\"table-responsive-xs table-responsive-sm table-responsive-md table-responsive-lg table-responsive-xl\">\r\n            <table [dtOptions]=\"dtOptions\" [dtTrigger]=\"dtTrigger\" class=\"table table-bordered table-hover b4-datatable\" datatable id=\"custom_field_table\" width=\"100%\">\r\n                <thead>\r\n                <tr>\r\n                    <th>#</th>\r\n                    <th>{{'settings_web.widgets.columns.name' | translate}}</th>\r\n                    <th>{{'settings_web.widgets.columns.widget_type' | translate}}</th>\r\n                    <th>{{'settings_web.widgets.columns.description' | translate}}</th>\r\n                    <th>{{'settings_web.widgets.columns.actions' | translate}}</th>\r\n                </tr>\r\n                </thead>\r\n                <tbody *ngIf=\"widgets?.length != 0\">\r\n                <tr *ngFor=\"let widget of widgets; index as i\">\r\n                    <td>{{i + 1}}</td>\r\n                    <td>{{widget.name}}\r\n                        <button (click)=\"openWidgetEditDataModal(widget)\" *ngxPermissionsOnly=\"['admin', 'super_admin', 'widgets_create']\" class=\"btn btn-create mb-0\" tooltip=\"{{'common.edit' | translate}}\" type=\"button\">\r\n                            Edit Data\r\n                        </button>\r\n                    </td>\r\n                    <td>{{widget.widget_type_name}}</td>\r\n                    <td>{{widget.description}}</td>\r\n                    <td class=\"actions-dropdown\">\r\n                        <div class=\"btn-group\" dropdown>\r\n                            <button aria-controls=\"dropdown-basic-1\" class=\"dropdown-toggle btn-action\" dropdownToggle id=\"button-basic-1\" type=\"button\">\r\n                                <i class=\"fa fa-ellipsis-v\"></i></button>\r\n                            <ul *dropdownMenu aria-labelledby=\"button-basic-1\" class=\"dropdown-menu animated fadeIn\" id=\"dropdown-basic-1\" role=\"menu\">\r\n                                <li *ngxPermissionsOnly=\"['admin', 'super_admin', 'widgets_edit']\" role=\"menuitem\">\r\n                                    <a (click)=\"openWidgetEditModal(widget)\" class=\"dropdown-item btn btn-edit btn-raised\" placement=\"top\" tooltip=\"{{'common.edit' | translate}}\"><i class=\"fa fa-pencil-square-o\"></i></a>\r\n                                </li>\r\n                                <li *ngxPermissionsOnly=\"['admin', 'super_admin', 'widgets_delete']\" role=\"menuitem\">\r\n                                    <a (click)=\"removeWidget(widget.id)\" class=\"dropdown-item btn btn-delete btn-raised\" placement=\"top\" tooltip=\"{{'common.delete' | translate}}\"><i class=\"fa fa-trash-o\"></i></a>\r\n                                </li>\r\n                            </ul>\r\n                        </div>\r\n                    </td>\r\n                </tr>\r\n                </tbody>\r\n                <tfoot *ngIf=\"widgets?.length == 0\" class=\"tfoot_dt\">\r\n                <tr>\r\n                    <td class=\"no-data-available text-center\" colspan=\"5\">{{'common.datatable.sEmptyTable' | translate}}</td>\r\n                </tr>\r\n                </tfoot>\r\n            </table>\r\n        </div>\r\n    </div>\r\n</div>\r\n");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/modules/settings-web/pages/manager-file/manager-file.component.html":
/*!***************************************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/modules/settings-web/pages/manager-file/manager-file.component.html ***!
  \***************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/modules/settings-web/pages/manager-regions/manager-regions.component.html":
/*!*********************************************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/modules/settings-web/pages/manager-regions/manager-regions.component.html ***!
  \*********************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<section class=\"hide_empty_message\">\r\n    <div class=\"row\">\r\n        <div class=\"col-sm-12\">\r\n            <div class=\"card pl-2 pr-2\">\r\n                <div class=\"card-header pl-0 pr-0 border-bottom\">\r\n                    <h4 class=\"main-title mt-2\">\r\n                        <span><a class=\"\" href=\"{{apiUrl}}/template-{{templateData.machine_name}}\" placement=\"top\" target=\"_blank\" tooltip=\"{{'common.view' | translate}}\">{{templateData.name}}</a></span>\r\n                    </h4>\r\n                    <button (click)=\"openManagerRegionCreateModal()\" *ngxPermissionsOnly=\"['admin', 'super_admin', 'managerRegions_create']\" class=\"btn btn-create mb-0\" tooltip=\"{{'common.create' | translate}}\" type=\"button\">\r\n                        <i class=\"fa fa-plus\"></i>\r\n                    </button>\r\n\r\n                </div>\r\n                <div class=\"card-content pt-3 pb-3\">\r\n                    <div class=\"card-body\">\r\n                        <div class=\"table-responsive-xs table-responsive-sm table-responsive-md table-responsive-lg table-responsive-xl\">\r\n                            <table [dtOptions]=\"dtOptions\" [dtTrigger]=\"dtTrigger\" class=\"table table-bordered table-hover b4-datatable\" datatable id=\"managerRegions_table\" width=\"100%\">\r\n                                <thead>\r\n                                <tr>\r\n                                    <th>#</th>\r\n                                    <th>{{'settings_web.manager_regions.columns.name' | translate}}</th>\r\n                                    <th>{{'settings_web.manager_regions.columns.index' | translate}}</th>\r\n                                    <th>{{'settings_web.manager_regions.columns.status' | translate}}</th>\r\n                                    <th>{{'settings_web.manager_regions.columns.actions' | translate}}</th>\r\n                                </tr>\r\n                                </thead>\r\n                                <tbody *ngIf=\"managerRegions?.length != 0\">\r\n                                <tr *ngFor=\"let managerRegion of managerRegions; index as i\">\r\n                                    <td>{{i + 1}}</td>\r\n                                    <td>{{managerRegion.name}}</td>\r\n                                    <td>{{managerRegion.index}}</td>\r\n                                    <td>\r\n                                        <div *ngxPermissionsOnly=\"['admin', 'super_admin', 'manager_regions_edit']; else elseBlock1; then thenBlock1\"></div>\r\n                                        <ng-template #elseBlock1>\r\n                                            <div class=\"budges-status\">\r\n                                                <span *ngIf=\"managerRegion.status == '1'\" class=\"completed\">{{'common.status.active' | translate}}</span>\r\n                                                <span *ngIf=\"managerRegion.status == '0'\" class=\"cancel\">{{'common.status.inactive' | translate}}</span>\r\n                                            </div>\r\n                                        </ng-template>\r\n                                        <ng-template #thenBlock1>\r\n                                            <ui-switch (valueChange)=\"changeStatus($event, managerRegion.id)\" [checked]=\"managerRegion.status == '1' ? true : false\"></ui-switch>\r\n                                        </ng-template>\r\n                                    </td>\r\n                                    <td class=\"actions-dropdown\">\r\n                                        <div class=\"btn-group\" dropdown>\r\n                                            <button aria-controls=\"dropdown-basic-1\" class=\"dropdown-toggle btn-action\" dropdownToggle id=\"button-basic-1\" type=\"button\">\r\n                                                <i class=\"fa fa-ellipsis-v\"></i></button>\r\n                                            <ul *dropdownMenu aria-labelledby=\"button-basic-1\" class=\"dropdown-menu animated fadeIn\" id=\"dropdown-basic-1\" role=\"menu\">\r\n                                                <li *ngxPermissionsOnly=\"['admin', 'super_admin', 'managerRegions_edit']\" role=\"menuitem\">\r\n                                                    <a (click)=\"openManagerRegionEditModal(managerRegion)\" class=\"dropdown-item btn btn-edit btn-raised\" placement=\"top\" tooltip=\"{{'common.edit' | translate}}\"><i class=\"fa fa-pencil-square-o\"></i></a>\r\n                                                </li>\r\n                                                <li *ngxPermissionsOnly=\"['admin', 'super_admin', 'managerRegions_delete']\" role=\"menuitem\">\r\n                                                    <a (click)=\"removeManagerRegion(managerRegion.id)\" class=\"dropdown-item btn btn-delete btn-raised\" placement=\"top\" tooltip=\"{{'common.delete' | translate}}\"><i class=\"fa fa-trash-o\"></i></a>\r\n                                                </li>\r\n                                            </ul>\r\n                                        </div>\r\n                                    </td>\r\n                                </tr>\r\n                                </tbody>\r\n                                <tfoot *ngIf=\"managerRegions?.length == 0\" class=\"tfoot_dt\">\r\n                                <tr>\r\n                                    <td class=\"no-data-available text-center\" colspan=\"5\">{{'common.datatable.sEmptyTable' | translate}}</td>\r\n                                </tr>\r\n                                </tfoot>\r\n                            </table>\r\n                        </div>\r\n                    </div>\r\n                </div>\r\n            </div>\r\n        </div>\r\n    </div>\r\n</section>\r\n\r\n");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/modules/settings-web/pages/manager-widgets-types/manager-widgets-types.component.html":
/*!*********************************************************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/modules/settings-web/pages/manager-widgets-types/manager-widgets-types.component.html ***!
  \*********************************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<script src=\"../../settings-web-routing.module.ts\"></script>\r\n<section class=\"hide_empty_message\">\r\n    <div class=\"row\">\r\n        <div class=\"col-sm-12\">\r\n            <div class=\"card pl-2 pr-2\">\r\n                <div class=\"card-header pl-0 pr-0 border-bottom\">\r\n                    <h4 class=\"main-title mt-2\"><span>{{dataWidgetType.name}}</span></h4>\r\n                    <button (click)=\"openManagerWidgetTypeCreateModal()\" *ngxPermissionsOnly=\"['admin', 'super_admin', 'customfields_create']\" class=\"btn btn-create mb-0\" tooltip=\"{{'common.create' | translate}}\" type=\"button\">\r\n                        <i class=\"fa fa-plus\"></i>\r\n                    </button>\r\n                </div>\r\n                <div class=\"card-content pt-3 pb-3\">\r\n                    <div class=\"card-body\">\r\n                        <div class=\"table-responsive-xs table-responsive-sm table-responsive-md table-responsive-lg table-responsive-xl\">\r\n                            <table [dtOptions]=\"dtOptions\" [dtTrigger]=\"dtTrigger\" class=\"table table-bordered table-hover b4-datatable\" datatable id=\"managerWidgetTypes_table\" width=\"100%\">\r\n                                <thead>\r\n                                <tr>\r\n                                    <th>{{'settings_web.manager_widgets_types.columns.field' | translate}}</th>\r\n                                    <th>{{'settings_web.manager_widgets_types.columns.label' | translate}}</th>\r\n                                    <th>{{'settings_web.manager_widgets_types.columns.required' | translate}}</th>\r\n                                    <th>{{'settings_web.manager_widgets_types.columns.render_type' | translate}}</th>\r\n                                    <th>{{'settings_web.manager_widgets_types.columns.index' | translate}}</th>\r\n                                    <th>{{'settings_web.manager_widgets_types.columns.actions' | translate}}</th>\r\n                                </tr>\r\n                                </thead>\r\n                                <tbody>\r\n                                <tr *ngFor=\"let managerWidgetType of managerWidgetTypes\">\r\n                                    <td>{{managerWidgetType.field_name}}</td>\r\n                                    <td>{{managerWidgetType.label}}</td>\r\n                                    <td>{{managerWidgetType.is_required ? \"True\" : \"False\"}}</td>\r\n                                    <td>{{managerWidgetType.render_type == 0 ? 'Single' : 'Multiple'}}</td>\r\n                                    <td>{{managerWidgetType.index}}</td>\r\n                                    <td class=\"actions-dropdown\">\r\n                                        <div class=\"btn-group\" dropdown>\r\n                                            <button aria-controls=\"dropdown-basic-1\" class=\"dropdown-toggle btn-action\" dropdownToggle id=\"button-basic-1\" type=\"button\">\r\n                                                <i class=\"fa fa-ellipsis-v\"></i></button>\r\n                                            <ul *dropdownMenu aria-labelledby=\"button-basic-1\" class=\"dropdown-menu animated fadeIn\" id=\"dropdown-basic-1\" role=\"menu\">\r\n                                                <li *ngxPermissionsOnly=\"['admin', 'super_admin', 'customfields_edit']\" role=\"menuitem\">\r\n                                                    <a (click)=\"openManagerWidgetTypeEditModal(managerWidgetType)\" class=\"dropdown-item btn btn-edit btn-raised\" placement=\"top\" tooltip=\"{{'common.edit' | translate}}\"><i class=\"fa fa-pencil-square-o\"></i></a>\r\n                                                </li>\r\n                                                <li *ngxPermissionsOnly=\"['admin', 'super_admin', 'customfields_delete']\" role=\"menuitem\">\r\n                                                    <a (click)=\"removeManagerWidgetType(managerWidgetType.id)\" class=\"dropdown-item btn btn-delete btn-raised\" placement=\"top\" tooltip=\"{{'common.delete' | translate}}\"><i class=\"fa fa-trash-o\"></i></a>\r\n                                                </li>\r\n                                            </ul>\r\n                                        </div>\r\n                                    </td>\r\n                                </tr>\r\n                                </tbody>\r\n                                <tfoot *ngIf=\"managerWidgetTypes?.length == 0\" class=\"tfoot_dt\">\r\n                                <tr>\r\n                                    <td class=\"no-data-available text-center\" colspan=\"5\">{{'common.datatable.sEmptyTable' | translate}}</td>\r\n                                </tr>\r\n                                </tfoot>\r\n                            </table>\r\n                        </div>\r\n                    </div>\r\n                </div>\r\n            </div>\r\n        </div>\r\n    </div>\r\n</section>\r\n\r\n");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/modules/settings-web/pages/manager-widgets/manager-widgets.component.html":
/*!*********************************************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/modules/settings-web/pages/manager-widgets/manager-widgets.component.html ***!
  \*********************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<section class=\"hide_empty_message\">\r\n    <div class=\"row\">\r\n        <div class=\"col-sm-12\">\r\n            <div class=\"card pl-2 pr-2\">\r\n                <div class=\"card-header pl-0 pr-0 border-bottom\">\r\n                    <h4 class=\"main-title mt-2\">\r\n                        <span>\r\n                            <a class=\"\" href=\"{{apiUrl}}/{{pageData.url}}\" placement=\"top\" target=\"_blank\" tooltip=\"{{'common.view' | translate}}\">{{pageData.name}}</a>\r\n                            &nbsp;({{pageData.template_name}})\r\n                        </span>\r\n                    </h4>\r\n                    <button (click)=\"openWidgetCreateModal()\" *ngxPermissionsOnly=\"['admin', 'super_admin', 'widgets_create']\" class=\"btn btn-create mb-0\" tooltip=\"{{'common.create' | translate}}\" type=\"button\">\r\n                        <i class=\"fa fa-plus\"></i>\r\n                    </button>\r\n\r\n                </div>\r\n                <div class=\"card-content pt-3 pb-3\">\r\n                    <div class=\"card-body\">\r\n                        <div class=\"table-responsive-xs table-responsive-sm table-responsive-md table-responsive-lg table-responsive-xl\">\r\n                            <table [dtOptions]=\"dtOptions\" [dtTrigger]=\"dtTrigger\" class=\"table table-bordered table-hover b4-datatable\" datatable id=\"managerWidgets_table\" width=\"100%\">\r\n                                <thead>\r\n                                <tr>\r\n                                    <th>{{'settings_web.manager_widgets.columns.region' | translate}}</th>\r\n                                    <th>{{'settings_web.manager_widgets.columns.widget' | translate}}</th>\r\n                                    <th>{{'settings_web.manager_widgets.columns.index' | translate}}</th>\r\n                                    <th>{{'settings_web.manager_widgets.columns.status' | translate}}</th>\r\n                                    <th>{{'settings_web.manager_widgets.columns.actions' | translate}}</th>\r\n                                </tr>\r\n                                </thead>\r\n                                <tbody *ngFor=\"let managerWidget of managerWidgets\">\r\n                                <ng-container *ngFor=\"let widgetData of managerWidget.widgetData | keyvalue\">\r\n                                    <tr>\r\n                                        <td>\r\n                                            {{managerWidget.region_name}}\r\n                                            <ng-container *ngIf=\"managerWidget.widgetData.length > 1\">{{widgetData.key}}</ng-container>\r\n                                            <button (click)=\"openManagerWidgetCreateModal(managerWidget.regions_id, widgetData.key)\" *ngxPermissionsOnly=\"['admin', 'super_admin', 'customfields_create']\" class=\"btn btn-create mb-0\" tooltip=\"{{'common.create' | translate}}\" type=\"button\">\r\n                                                <i class=\"fa fa-plus\"></i>\r\n                                            </button>\r\n                                        </td>\r\n                                        <td></td>\r\n                                        <td></td>\r\n                                        <td></td>\r\n                                        <td class=\"actions-dropdown\"></td>\r\n                                    </tr>\r\n                                    <tr *ngFor=\"let item of widgetData.value\">\r\n                                        <td></td>\r\n                                        <td>{{item.widget_name}}\r\n                                            <button (click)=\"openWidgetEditDataModal(item)\" *ngxPermissionsOnly=\"['admin', 'super_admin', 'widgets_create']\" class=\"btn btn-create mb-0\" tooltip=\"{{'common.edit' | translate}}\" type=\"button\">\r\n                                                Edit Data\r\n                                            </button>\r\n                                        </td>\r\n                                        <td>{{item.index}}</td>\r\n                                        <td>\r\n                                            <div *ngxPermissionsOnly=\"['admin', 'super_admin', 'manager_regions_edit']; else elseBlock1; then thenBlock1\"></div>\r\n                                            <ng-template #elseBlock1>\r\n                                                <div class=\"budges-status\">\r\n                                                    <span *ngIf=\"item.status == '1'\" class=\"completed\">{{'common.status.active' | translate}}</span>\r\n                                                    <span *ngIf=\"item.status == '0'\" class=\"cancel\">{{'common.status.inactive' | translate}}</span>\r\n                                                </div>\r\n                                            </ng-template>\r\n                                            <ng-template #thenBlock1>\r\n                                                <ui-switch (valueChange)=\"changeStatus($event, item.id)\" [checked]=\"item.status == '1' ? true : false\"></ui-switch>\r\n                                            </ng-template>\r\n                                        </td>\r\n                                        <td class=\"actions-dropdown\">\r\n                                            <div class=\"btn-group\" dropdown>\r\n                                                <button aria-controls=\"dropdown-basic-1\" class=\"dropdown-toggle btn-action\" dropdownToggle id=\"button-basic-1\" type=\"button\">\r\n                                                    <i class=\"fa fa-ellipsis-v\"></i></button>\r\n                                                <ul *dropdownMenu aria-labelledby=\"button-basic-1\" class=\"dropdown-menu animated fadeIn\" id=\"dropdown-basic-1\" role=\"menu\">\r\n                                                    <li *ngxPermissionsOnly=\"['admin', 'super_admin', 'customfields_edit']\" role=\"menuitem\">\r\n                                                        <a (click)=\"openManagerWidgetEditModal(item)\" class=\"dropdown-item btn btn-edit btn-raised\" placement=\"top\" tooltip=\"{{'common.edit' | translate}}\"><i class=\"fa fa-pencil-square-o\"></i></a>\r\n                                                    </li>\r\n                                                    <li *ngxPermissionsOnly=\"['admin', 'super_admin', 'customfields_delete']\" role=\"menuitem\">\r\n                                                        <a (click)=\"removeManagerWidget(item.id)\" class=\"dropdown-item btn btn-delete btn-raised\" placement=\"top\" tooltip=\"{{'common.delete' | translate}}\"><i class=\"fa fa-trash-o\"></i></a>\r\n                                                    </li>\r\n                                                </ul>\r\n                                            </div>\r\n                                        </td>\r\n                                    </tr>\r\n                                </ng-container>\r\n                                </tbody>\r\n                                <tfoot *ngIf=\"managerWidgets?.length == 0\" class=\"tfoot_dt\">\r\n                                <tr>\r\n                                    <td class=\"no-data-available text-center\" colspan=\"5\">{{'common.datatable.sEmptyTable' | translate}}</td>\r\n                                </tr>\r\n                                </tfoot>\r\n                            </table>\r\n                        </div>\r\n                    </div>\r\n                </div>\r\n            </div>\r\n        </div>\r\n    </div>\r\n</section>\r\n\r\n");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/modules/settings-web/pages/settings-web/settings-web.component.html":
/*!***************************************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/modules/settings-web/pages/settings-web/settings-web.component.html ***!
  \***************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<section>\r\n    <div class=\"row\">\r\n        <div class=\"col-sm-12\">\r\n            <div class=\"card pl-2 pr-2\">\r\n                <div class=\"card-header pl-0 pr-0 border-bottom\">\r\n                    <h4 class=\"main-title mb-0 mt-0\"><span>{{'settings.title' | translate}}</span></h4>\r\n                </div>\r\n                <div class=\"card-content custom-nav-tabs mt-3\">\r\n                    <div class=\"card-body\">\r\n                        <tabset #tabset [vertical]=\"false\" type=\"pills\">\r\n                            <ng-container *ngxPermissionsOnly=\"['admin', 'super_admin', 'pages_view']\">\r\n                                <tab (selectTab)=\"setSettingTab($event)\" heading=\"{{'settings_web.pages.title' | translate}}\" id=\"1\">\r\n                                    <app-pages *ngIf=\"getActiveSettingTab('1')\"></app-pages>\r\n                                </tab>\r\n                            </ng-container>\r\n                            <ng-container *ngxPermissionsOnly=\"['admin', 'super_admin', 'widgets_view']\">\r\n                                <tab (selectTab)=\"setSettingTab($event)\" heading=\"{{'settings_web.widgets.title' | translate}}\" id=\"4\" class=\"active\">\r\n                                    <app-widgets *ngIf=\"getActiveSettingTab('4')\"></app-widgets>\r\n                                </tab>\r\n                            </ng-container>\r\n                            <ng-container *ngxPermissionsOnly=\"['admin', 'super_admin', 'widgets_types_view']\">\r\n                                <tab (selectTab)=\"setSettingTab($event)\" heading=\"{{'settings_web.widgets_types.title' | translate}}\" id=\"3\">\r\n                                    <app-widgets-types *ngIf=\"getActiveSettingTab('3')\"></app-widgets-types>\r\n                                </tab>\r\n                            </ng-container>\r\n                            <ng-container *ngxPermissionsOnly=\"['admin', 'super_admin', 'templates_view']\">\r\n                                <tab (selectTab)=\"setSettingTab($event)\" heading=\"{{'settings_web.templates.title' | translate}}\" id=\"6\">\r\n                                    <app-templates *ngIf=\"getActiveSettingTab('6')\"></app-templates>\r\n                                </tab>\r\n                            </ng-container>\r\n                            <ng-container *ngxPermissionsOnly=\"['admin', 'super_admin', 'themes_view']\">\r\n                                <tab (selectTab)=\"setSettingTab($event)\" heading=\"{{'settings_web.themes.title' | translate}}\" id=\"2\">\r\n                                    <app-themes *ngIf=\"getActiveSettingTab('2')\"></app-themes>\r\n                                </tab>\r\n                            </ng-container>\r\n                            <ng-container *ngxPermissionsOnly=\"['admin', 'super_admin', 'regions_view']\">\r\n                                <tab (selectTab)=\"setSettingTab($event)\" heading=\"{{'settings_web.regions.title' | translate}}\" id=\"5\">\r\n                                    <app-regions *ngIf=\"getActiveSettingTab('5')\"></app-regions>\r\n                                </tab>\r\n                            </ng-container>\r\n                        </tabset>\r\n                    </div>\r\n                </div>\r\n            </div>\r\n        </div>\r\n    </div>\r\n</section>\r\n");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/shared/components/light-bulb/light-bulb.component.html":
/*!**************************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/shared/components/light-bulb/light-bulb.component.html ***!
  \**************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<div class=\"dropdown inline-block ml-2\" dropdown>\r\n  <i aria-hidden=\"true\" class=\"fa fa-lightbulb-o fa-1 relative\" dropdownToggle></i>\r\n  <div class=\"dropdown-menu mt-1 mr-3 person-dropdown p-2\" *dropdownMenu>\r\n      <div [innerHTML]=\"value\"></div>\r\n  </div>\r\n</div>");

/***/ }),

/***/ "./src/app/core/services/pages.service.ts":
/*!************************************************!*\
  !*** ./src/app/core/services/pages.service.ts ***!
  \************************************************/
/*! exports provided: PagesService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PagesService", function() { return PagesService; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../environments/environment */ "./src/environments/environment.ts");




var PagesService = /** @class */ (function () {
    function PagesService(http) {
        this.http = http;
        this.apiUrl = _environments_environment__WEBPACK_IMPORTED_MODULE_3__["environment"].apiUrl;
    }
    PagesService.prototype.getAll = function () {
        return this.http.get(this.apiUrl + "/api/pages");
    };
    PagesService.prototype.getById = function (id) {
        return this.http.get(this.apiUrl + "/api/pages/" + id);
    };
    PagesService.prototype.create = function (pages) {
        return this.http.post(this.apiUrl + "/api/pages", pages);
    };
    PagesService.prototype.update = function (pages) {
        return this.http.put(this.apiUrl + "/api/pages/" + pages.id, pages);
    };
    PagesService.prototype.clonePage = function (id) {
        return this.http.get(this.apiUrl + "/api/clonePage/" + id);
    };
    PagesService.prototype.delete = function (id) {
        return this.http.delete(this.apiUrl + "/api/pages/" + id);
    };
    PagesService.prototype.getWidgetById = function (id) {
        return this.http.get(this.apiUrl + "/api/pages-widget/" + id);
    };
    PagesService.prototype.managerWidgets = function (managerWidgets) {
        return this.http.post(this.apiUrl + "/api/pages/manager-widgets", managerWidgets);
    };
    PagesService.prototype.updateManagerWidget = function (managerWidgets) {
        return this.http.put(this.apiUrl + "/api/manager-widgets/" + managerWidgets.id, managerWidgets);
    };
    PagesService.prototype.deleteManagerWidget = function (id) {
        return this.http.delete(this.apiUrl + "/api/manager-widget/" + id);
    };
    PagesService.prototype.changeStatus = function (data) {
        return this.http.post(this.apiUrl + "/api/manager-widget-change-status/" + data.id, { status: data.status });
    };
    PagesService.ctorParameters = function () { return [
        { type: _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClient"] }
    ]; };
    PagesService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
            providedIn: 'root'
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClient"]])
    ], PagesService);
    return PagesService;
}());



/***/ }),

/***/ "./src/app/core/services/regions.service.ts":
/*!**************************************************!*\
  !*** ./src/app/core/services/regions.service.ts ***!
  \**************************************************/
/*! exports provided: RegionsService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "RegionsService", function() { return RegionsService; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../environments/environment */ "./src/environments/environment.ts");




var RegionsService = /** @class */ (function () {
    function RegionsService(http) {
        this.http = http;
        this.apiUrl = _environments_environment__WEBPACK_IMPORTED_MODULE_3__["environment"].apiUrl;
    }
    RegionsService.prototype.getAll = function () {
        return this.http.get(this.apiUrl + "/api/regions");
    };
    RegionsService.prototype.getById = function (id) {
        return this.http.get(this.apiUrl + "/api/regions/" + id);
    };
    RegionsService.prototype.create = function (regions) {
        return this.http.post(this.apiUrl + "/api/regions", regions);
    };
    RegionsService.prototype.update = function (regions) {
        return this.http.put(this.apiUrl + "/api/regions/" + regions.id, regions);
    };
    RegionsService.prototype.delete = function (id) {
        return this.http.delete(this.apiUrl + "/api/regions/" + id);
    };
    RegionsService.ctorParameters = function () { return [
        { type: _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClient"] }
    ]; };
    RegionsService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
            providedIn: 'root'
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClient"]])
    ], RegionsService);
    return RegionsService;
}());



/***/ }),

/***/ "./src/app/core/services/templates.service.ts":
/*!****************************************************!*\
  !*** ./src/app/core/services/templates.service.ts ***!
  \****************************************************/
/*! exports provided: TemplatesService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TemplatesService", function() { return TemplatesService; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../environments/environment */ "./src/environments/environment.ts");




var TemplatesService = /** @class */ (function () {
    function TemplatesService(http) {
        this.http = http;
        this.apiUrl = _environments_environment__WEBPACK_IMPORTED_MODULE_3__["environment"].apiUrl;
    }
    TemplatesService.prototype.getAll = function () {
        return this.http.get(this.apiUrl + "/api/templates");
    };
    TemplatesService.prototype.getById = function (id) {
        return this.http.get(this.apiUrl + "/api/templates/" + id);
    };
    TemplatesService.prototype.getRegionById = function (id) {
        return this.http.get(this.apiUrl + "/api/templates-region/" + id);
    };
    TemplatesService.prototype.create = function (templates) {
        return this.http.post(this.apiUrl + "/api/templates", templates);
    };
    TemplatesService.prototype.managerRegions = function (managerRegions) {
        return this.http.post(this.apiUrl + "/api/templates/manager-regions", managerRegions);
    };
    TemplatesService.prototype.update = function (templates) {
        return this.http.put(this.apiUrl + "/api/templates/" + templates.id, templates);
    };
    TemplatesService.prototype.updateManagerRegion = function (managerRegions) {
        return this.http.put(this.apiUrl + "/api/manager-regions/" + managerRegions.id, managerRegions);
    };
    TemplatesService.prototype.delete = function (id) {
        return this.http.delete(this.apiUrl + "/api/templates/" + id);
    };
    TemplatesService.prototype.deleteManagerRegion = function (id) {
        return this.http.delete(this.apiUrl + "/api/manager-region/" + id);
    };
    TemplatesService.prototype.changeStatus = function (data) {
        return this.http.post(this.apiUrl + "/api/manager-regions-change-status/" + data.id, { status: data.status });
    };
    TemplatesService.ctorParameters = function () { return [
        { type: _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClient"] }
    ]; };
    TemplatesService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
            providedIn: 'root'
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClient"]])
    ], TemplatesService);
    return TemplatesService;
}());



/***/ }),

/***/ "./src/app/core/services/themes.service.ts":
/*!*************************************************!*\
  !*** ./src/app/core/services/themes.service.ts ***!
  \*************************************************/
/*! exports provided: ThemesService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ThemesService", function() { return ThemesService; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../environments/environment */ "./src/environments/environment.ts");




var ThemesService = /** @class */ (function () {
    function ThemesService(http) {
        this.http = http;
        this.apiUrl = _environments_environment__WEBPACK_IMPORTED_MODULE_3__["environment"].apiUrl;
    }
    ThemesService.prototype.getAll = function () {
        return this.http.get(this.apiUrl + "/api/themes");
    };
    ThemesService.prototype.getById = function (id) {
        return this.http.get(this.apiUrl + "/api/themes/" + id);
    };
    ThemesService.prototype.create = function (themes) {
        return this.http.post(this.apiUrl + "/api/themes", themes);
    };
    ThemesService.prototype.createImport = function (themes) {
        return this.http.post(this.apiUrl + "/api/themes-import", themes);
    };
    ThemesService.prototype.update = function (themes) {
        return this.http.put(this.apiUrl + "/api/themes/" + themes.id, themes);
    };
    ThemesService.prototype.delete = function (id) {
        return this.http.delete(this.apiUrl + "/api/themes/" + id);
    };
    ThemesService.prototype.changeStatus = function (data) {
        return this.http.post(this.apiUrl + "/api/themes/" + data.id + "/change-status", { status: data.status });
    };
    ThemesService.ctorParameters = function () { return [
        { type: _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClient"] }
    ]; };
    ThemesService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
            providedIn: 'root'
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClient"]])
    ], ThemesService);
    return ThemesService;
}());



/***/ }),

/***/ "./src/app/core/services/widgets-types.service.ts":
/*!********************************************************!*\
  !*** ./src/app/core/services/widgets-types.service.ts ***!
  \********************************************************/
/*! exports provided: WidgetsTypesService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "WidgetsTypesService", function() { return WidgetsTypesService; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../environments/environment */ "./src/environments/environment.ts");




var WidgetsTypesService = /** @class */ (function () {
    function WidgetsTypesService(http) {
        this.http = http;
        this.apiUrl = _environments_environment__WEBPACK_IMPORTED_MODULE_3__["environment"].apiUrl;
    }
    WidgetsTypesService.prototype.getAll = function () {
        return this.http.get(this.apiUrl + "/api/widget-types");
    };
    WidgetsTypesService.prototype.getById = function (id) {
        return this.http.get(this.apiUrl + "/api/widget-types/" + id);
    };
    WidgetsTypesService.prototype.create = function (widgets_type) {
        return this.http.post(this.apiUrl + "/api/widget-types", widgets_type);
    };
    WidgetsTypesService.prototype.update = function (widgets_type) {
        return this.http.put(this.apiUrl + "/api/widget-types/" + widgets_type.id, widgets_type);
    };
    WidgetsTypesService.prototype.delete = function (id) {
        return this.http.delete(this.apiUrl + "/api/widget-types/" + id);
    };
    WidgetsTypesService.prototype.getFieldById = function (id) {
        return this.http.get(this.apiUrl + "/api/widget-types-field/" + id);
    };
    WidgetsTypesService.prototype.addFeildInWidget = function (managerWidgets) {
        return this.http.post(this.apiUrl + "/api/widget-types/add-field-in-widget", managerWidgets);
    };
    WidgetsTypesService.prototype.updateFeildInWidget = function (managerWidgets) {
        return this.http.put(this.apiUrl + "/api/widget-types-field/" + managerWidgets.id, managerWidgets);
    };
    WidgetsTypesService.prototype.deleteManagerWidgetsTypes = function (id) {
        return this.http.delete(this.apiUrl + "/api/widget-types-field/" + id);
    };
    WidgetsTypesService.prototype.getFieldAll = function () {
        return this.http.get(this.apiUrl + "/api/all-fields");
    };
    WidgetsTypesService.ctorParameters = function () { return [
        { type: _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClient"] }
    ]; };
    WidgetsTypesService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
            providedIn: 'root'
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClient"]])
    ], WidgetsTypesService);
    return WidgetsTypesService;
}());



/***/ }),

/***/ "./src/app/core/services/widgets.service.ts":
/*!**************************************************!*\
  !*** ./src/app/core/services/widgets.service.ts ***!
  \**************************************************/
/*! exports provided: WidgetsService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "WidgetsService", function() { return WidgetsService; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../environments/environment */ "./src/environments/environment.ts");




var WidgetsService = /** @class */ (function () {
    function WidgetsService(http) {
        this.http = http;
        this.apiUrl = _environments_environment__WEBPACK_IMPORTED_MODULE_3__["environment"].apiUrl;
    }
    WidgetsService.prototype.getAll = function () {
        return this.http.get(this.apiUrl + "/api/widgets");
    };
    WidgetsService.prototype.getById = function (id) {
        return this.http.get(this.apiUrl + "/api/widgets/" + id);
    };
    WidgetsService.prototype.create = function (widgets) {
        return this.http.post(this.apiUrl + "/api/widgets", widgets);
    };
    WidgetsService.prototype.update = function (widgets) {
        return this.http.put(this.apiUrl + "/api/widgets/" + widgets.id, widgets);
    };
    WidgetsService.prototype.delete = function (id) {
        return this.http.delete(this.apiUrl + "/api/widgets/" + id);
    };
    WidgetsService.prototype.getUseData = function () {
        return this.http.get(this.apiUrl + "/api/widgets/getusedata");
    };
    WidgetsService.ctorParameters = function () { return [
        { type: _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClient"] }
    ]; };
    WidgetsService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
            providedIn: 'root'
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClient"]])
    ], WidgetsService);
    return WidgetsService;
}());



/***/ }),

/***/ "./src/app/modules/settings-web/components/manager-regions-create/manager-regions-create.component.scss":
/*!**************************************************************************************************************!*\
  !*** ./src/app/modules/settings-web/components/manager-regions-create/manager-regions-create.component.scss ***!
  \**************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL21vZHVsZXMvc2V0dGluZ3Mtd2ViL2NvbXBvbmVudHMvbWFuYWdlci1yZWdpb25zLWNyZWF0ZS9tYW5hZ2VyLXJlZ2lvbnMtY3JlYXRlLmNvbXBvbmVudC5zY3NzIn0= */");

/***/ }),

/***/ "./src/app/modules/settings-web/components/manager-regions-create/manager-regions-create.component.ts":
/*!************************************************************************************************************!*\
  !*** ./src/app/modules/settings-web/components/manager-regions-create/manager-regions-create.component.ts ***!
  \************************************************************************************************************/
/*! exports provided: ManagerRegionsCreateComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ManagerRegionsCreateComponent", function() { return ManagerRegionsCreateComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var ngx_bootstrap_modal__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ngx-bootstrap/modal */ "./node_modules/ngx-bootstrap/modal/fesm5/ngx-bootstrap-modal.js");
/* harmony import */ var ngx_toastr__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ngx-toastr */ "./node_modules/ngx-toastr/fesm5/ngx-toastr.js");
/* harmony import */ var _ngx_translate_core__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @ngx-translate/core */ "./node_modules/@ngx-translate/core/fesm5/ngx-translate-core.js");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! rxjs */ "./node_modules/rxjs/_esm5/index.js");
/* harmony import */ var _core_services_templates_service__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../../../../core/services/templates.service */ "./src/app/core/services/templates.service.ts");
/* harmony import */ var _core_services_regions_service__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../../../../core/services/regions.service */ "./src/app/core/services/regions.service.ts");
/* harmony import */ var _core_services_helper_service__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../../../../core/services/helper.service */ "./src/app/core/services/helper.service.ts");










var ManagerRegionsCreateComponent = /** @class */ (function () {
    function ManagerRegionsCreateComponent(translate, bsModalRef, formBuilder, toastr, templatesService, regionsService, helperService) {
        this.translate = translate;
        this.bsModalRef = bsModalRef;
        this.formBuilder = formBuilder;
        this.toastr = toastr;
        this.templatesService = templatesService;
        this.regionsService = regionsService;
        this.helperService = helperService;
        this.event = new _angular_core__WEBPACK_IMPORTED_MODULE_1__["EventEmitter"]();
        this.isFormSubmitted = false;
        this.isPageLoaded = false;
        this.editorOptions = { theme: 'vs-dark', language: 'html' };
    }
    Object.defineProperty(ManagerRegionsCreateComponent.prototype, "managerRegionsControl", {
        get: function () {
            return this.createManagerRegionsForm.controls;
        },
        enumerable: true,
        configurable: true
    });
    ManagerRegionsCreateComponent.prototype.ngOnInit = function () {
        this.onClose = new rxjs__WEBPACK_IMPORTED_MODULE_6__["Subject"]();
        this.loadForms();
        this.getAllRegions();
    };
    ManagerRegionsCreateComponent.prototype.getAllRegions = function () {
        var _this = this;
        this.regionsService.getAll()
            .subscribe(function (data) {
            _this.regionData = data;
        });
    };
    ManagerRegionsCreateComponent.prototype.loadForms = function () {
        this.createManagerRegionsForm = this.formBuilder.group({
            regions_id: [null, _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required],
            index: [null, [_angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required, _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].min(0)]],
        });
    };
    ManagerRegionsCreateComponent.prototype.onSubmit = function () {
        var _this = this;
        this.isFormSubmitted = true;
        if (this.createManagerRegionsForm.invalid) {
            return;
        }
        this.createManagerRegionsForm.value.templates_id = this.managerRegions.templates_id;
        this.templatesService.managerRegions(this.createManagerRegionsForm.value)
            .subscribe(function (data) {
            _this.toastr.success(_this.translate.instant('settings_web.manager_regions.messages.create'), _this.translate.instant('settings_web.manager_regions.title'));
            _this.event.emit({ data: true });
            _this.onCancel();
        });
    };
    ManagerRegionsCreateComponent.prototype.onCancel = function () {
        this.onClose.next(false);
        this.bsModalRef.hide();
    };
    ManagerRegionsCreateComponent.ctorParameters = function () { return [
        { type: _ngx_translate_core__WEBPACK_IMPORTED_MODULE_5__["TranslateService"] },
        { type: ngx_bootstrap_modal__WEBPACK_IMPORTED_MODULE_3__["BsModalRef"] },
        { type: _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormBuilder"] },
        { type: ngx_toastr__WEBPACK_IMPORTED_MODULE_4__["ToastrService"] },
        { type: _core_services_templates_service__WEBPACK_IMPORTED_MODULE_7__["TemplatesService"] },
        { type: _core_services_regions_service__WEBPACK_IMPORTED_MODULE_8__["RegionsService"] },
        { type: _core_services_helper_service__WEBPACK_IMPORTED_MODULE_9__["HelperService"] }
    ]; };
    ManagerRegionsCreateComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-manager-regions-create',
            template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./manager-regions-create.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/modules/settings-web/components/manager-regions-create/manager-regions-create.component.html")).default,
            styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./manager-regions-create.component.scss */ "./src/app/modules/settings-web/components/manager-regions-create/manager-regions-create.component.scss")).default]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_ngx_translate_core__WEBPACK_IMPORTED_MODULE_5__["TranslateService"],
            ngx_bootstrap_modal__WEBPACK_IMPORTED_MODULE_3__["BsModalRef"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormBuilder"],
            ngx_toastr__WEBPACK_IMPORTED_MODULE_4__["ToastrService"],
            _core_services_templates_service__WEBPACK_IMPORTED_MODULE_7__["TemplatesService"],
            _core_services_regions_service__WEBPACK_IMPORTED_MODULE_8__["RegionsService"],
            _core_services_helper_service__WEBPACK_IMPORTED_MODULE_9__["HelperService"]])
    ], ManagerRegionsCreateComponent);
    return ManagerRegionsCreateComponent;
}());



/***/ }),

/***/ "./src/app/modules/settings-web/components/manager-regions-edit/manager-regions-edit.component.scss":
/*!**********************************************************************************************************!*\
  !*** ./src/app/modules/settings-web/components/manager-regions-edit/manager-regions-edit.component.scss ***!
  \**********************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL21vZHVsZXMvc2V0dGluZ3Mtd2ViL2NvbXBvbmVudHMvbWFuYWdlci1yZWdpb25zLWVkaXQvbWFuYWdlci1yZWdpb25zLWVkaXQuY29tcG9uZW50LnNjc3MifQ== */");

/***/ }),

/***/ "./src/app/modules/settings-web/components/manager-regions-edit/manager-regions-edit.component.ts":
/*!********************************************************************************************************!*\
  !*** ./src/app/modules/settings-web/components/manager-regions-edit/manager-regions-edit.component.ts ***!
  \********************************************************************************************************/
/*! exports provided: ManagerRegionsEditComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ManagerRegionsEditComponent", function() { return ManagerRegionsEditComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var ngx_bootstrap_modal__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ngx-bootstrap/modal */ "./node_modules/ngx-bootstrap/modal/fesm5/ngx-bootstrap-modal.js");
/* harmony import */ var ngx_toastr__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ngx-toastr */ "./node_modules/ngx-toastr/fesm5/ngx-toastr.js");
/* harmony import */ var _ngx_translate_core__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @ngx-translate/core */ "./node_modules/@ngx-translate/core/fesm5/ngx-translate-core.js");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! rxjs */ "./node_modules/rxjs/_esm5/index.js");
/* harmony import */ var _core_services_templates_service__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../../../../core/services/templates.service */ "./src/app/core/services/templates.service.ts");
/* harmony import */ var _core_services_regions_service__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../../../../core/services/regions.service */ "./src/app/core/services/regions.service.ts");
/* harmony import */ var _core_services_helper_service__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../../../../core/services/helper.service */ "./src/app/core/services/helper.service.ts");










var ManagerRegionsEditComponent = /** @class */ (function () {
    function ManagerRegionsEditComponent(translate, bsModalRef, formBuilder, toastr, templatesService, regionsService, helperService) {
        this.translate = translate;
        this.bsModalRef = bsModalRef;
        this.formBuilder = formBuilder;
        this.toastr = toastr;
        this.templatesService = templatesService;
        this.regionsService = regionsService;
        this.helperService = helperService;
        this.event = new _angular_core__WEBPACK_IMPORTED_MODULE_1__["EventEmitter"]();
        this.isFormSubmitted = false;
        this.isPageLoaded = false;
        this.editorOptions = { theme: 'vs-dark', language: 'html' };
    }
    Object.defineProperty(ManagerRegionsEditComponent.prototype, "managerRegionsControl", {
        get: function () {
            return this.editManagerRegionsForm.controls;
        },
        enumerable: true,
        configurable: true
    });
    ManagerRegionsEditComponent.prototype.ngOnInit = function () {
        this.onClose = new rxjs__WEBPACK_IMPORTED_MODULE_6__["Subject"]();
        this.loadForms();
        this.getAllRegions();
    };
    ManagerRegionsEditComponent.prototype.getAllRegions = function () {
        var _this = this;
        this.regionsService.getAll()
            .subscribe(function (data) {
            _this.regionData = data;
        });
    };
    ManagerRegionsEditComponent.prototype.loadForms = function () {
        this.editManagerRegionsForm = this.formBuilder.group({
            id: [this.managerRegions.id],
            regions_id: [this.managerRegions.regions_id, _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required],
            templates_id: [this.managerRegions.templates_id, _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required],
            index: [this.managerRegions.index, [_angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required, _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].min(0)]],
        });
        this.isPageLoaded = true;
    };
    ManagerRegionsEditComponent.prototype.onSubmit = function () {
        var _this = this;
        this.isFormSubmitted = true;
        if (this.editManagerRegionsForm.invalid) {
            return;
        }
        this.templatesService.updateManagerRegion(this.editManagerRegionsForm.value)
            .subscribe(function (data) {
            _this.toastr.success(_this.translate.instant('settings_web.manager_regions.messages.update'), _this.translate.instant('settings_web.manager_regions.title'));
            _this.event.emit({ data: true });
            _this.onCancel();
        });
    };
    ManagerRegionsEditComponent.prototype.onCancel = function () {
        this.onClose.next(false);
        this.bsModalRef.hide();
    };
    ManagerRegionsEditComponent.ctorParameters = function () { return [
        { type: _ngx_translate_core__WEBPACK_IMPORTED_MODULE_5__["TranslateService"] },
        { type: ngx_bootstrap_modal__WEBPACK_IMPORTED_MODULE_3__["BsModalRef"] },
        { type: _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormBuilder"] },
        { type: ngx_toastr__WEBPACK_IMPORTED_MODULE_4__["ToastrService"] },
        { type: _core_services_templates_service__WEBPACK_IMPORTED_MODULE_7__["TemplatesService"] },
        { type: _core_services_regions_service__WEBPACK_IMPORTED_MODULE_8__["RegionsService"] },
        { type: _core_services_helper_service__WEBPACK_IMPORTED_MODULE_9__["HelperService"] }
    ]; };
    ManagerRegionsEditComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-manager-regions-edit',
            template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./manager-regions-edit.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/modules/settings-web/components/manager-regions-edit/manager-regions-edit.component.html")).default,
            styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./manager-regions-edit.component.scss */ "./src/app/modules/settings-web/components/manager-regions-edit/manager-regions-edit.component.scss")).default]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_ngx_translate_core__WEBPACK_IMPORTED_MODULE_5__["TranslateService"],
            ngx_bootstrap_modal__WEBPACK_IMPORTED_MODULE_3__["BsModalRef"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormBuilder"],
            ngx_toastr__WEBPACK_IMPORTED_MODULE_4__["ToastrService"],
            _core_services_templates_service__WEBPACK_IMPORTED_MODULE_7__["TemplatesService"],
            _core_services_regions_service__WEBPACK_IMPORTED_MODULE_8__["RegionsService"],
            _core_services_helper_service__WEBPACK_IMPORTED_MODULE_9__["HelperService"]])
    ], ManagerRegionsEditComponent);
    return ManagerRegionsEditComponent;
}());



/***/ }),

/***/ "./src/app/modules/settings-web/components/manager-widgets-create/manager-widgets-create.component.scss":
/*!**************************************************************************************************************!*\
  !*** ./src/app/modules/settings-web/components/manager-widgets-create/manager-widgets-create.component.scss ***!
  \**************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL21vZHVsZXMvc2V0dGluZ3Mtd2ViL2NvbXBvbmVudHMvbWFuYWdlci13aWRnZXRzLWNyZWF0ZS9tYW5hZ2VyLXdpZGdldHMtY3JlYXRlLmNvbXBvbmVudC5zY3NzIn0= */");

/***/ }),

/***/ "./src/app/modules/settings-web/components/manager-widgets-create/manager-widgets-create.component.ts":
/*!************************************************************************************************************!*\
  !*** ./src/app/modules/settings-web/components/manager-widgets-create/manager-widgets-create.component.ts ***!
  \************************************************************************************************************/
/*! exports provided: ManagerWidgetsCreateComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ManagerWidgetsCreateComponent", function() { return ManagerWidgetsCreateComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var ngx_bootstrap_modal__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ngx-bootstrap/modal */ "./node_modules/ngx-bootstrap/modal/fesm5/ngx-bootstrap-modal.js");
/* harmony import */ var ngx_toastr__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ngx-toastr */ "./node_modules/ngx-toastr/fesm5/ngx-toastr.js");
/* harmony import */ var _ngx_translate_core__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @ngx-translate/core */ "./node_modules/@ngx-translate/core/fesm5/ngx-translate-core.js");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! rxjs */ "./node_modules/rxjs/_esm5/index.js");
/* harmony import */ var _core_services_pages_service__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../../../../core/services/pages.service */ "./src/app/core/services/pages.service.ts");
/* harmony import */ var _core_services_widgets_service__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../../../../core/services/widgets.service */ "./src/app/core/services/widgets.service.ts");
/* harmony import */ var _core_services_helper_service__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../../../../core/services/helper.service */ "./src/app/core/services/helper.service.ts");










var ManagerWidgetsCreateComponent = /** @class */ (function () {
    function ManagerWidgetsCreateComponent(translate, bsModalRef, formBuilder, toastr, pagesService, widgetsService, helperService) {
        this.translate = translate;
        this.bsModalRef = bsModalRef;
        this.formBuilder = formBuilder;
        this.toastr = toastr;
        this.pagesService = pagesService;
        this.widgetsService = widgetsService;
        this.helperService = helperService;
        this.event = new _angular_core__WEBPACK_IMPORTED_MODULE_1__["EventEmitter"]();
        this.isFormSubmitted = false;
        this.isPageLoaded = false;
        this.editorOptions = { theme: 'vs-dark', language: 'html' };
    }
    Object.defineProperty(ManagerWidgetsCreateComponent.prototype, "managerWidgetsControl", {
        get: function () {
            return this.createManagerWidgetsForm.controls;
        },
        enumerable: true,
        configurable: true
    });
    ManagerWidgetsCreateComponent.prototype.ngOnInit = function () {
        this.onClose = new rxjs__WEBPACK_IMPORTED_MODULE_6__["Subject"]();
        this.loadForms();
        this.getAllWidgets();
    };
    ManagerWidgetsCreateComponent.prototype.getAllWidgets = function () {
        var _this = this;
        this.widgetsService.getAll()
            .subscribe(function (data) {
            _this.widgetData = data;
        });
    };
    ManagerWidgetsCreateComponent.prototype.loadForms = function () {
        this.createManagerWidgetsForm = this.formBuilder.group({
            widgets_id: [null, _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required],
            index: [null, [_angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required, _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].min(0)]],
        });
    };
    ManagerWidgetsCreateComponent.prototype.onSubmit = function () {
        var _this = this;
        this.isFormSubmitted = true;
        if (this.createManagerWidgetsForm.invalid) {
            return;
        }
        this.createManagerWidgetsForm.value.pages_id = this.managerWidgets.pages_id;
        this.createManagerWidgetsForm.value.regions_id = this.managerWidgets.regions_id;
        this.createManagerWidgetsForm.value.regions_number = this.managerWidgets.regions_number;
        this.pagesService.managerWidgets(this.createManagerWidgetsForm.value)
            .subscribe(function (data) {
            _this.toastr.success(_this.translate.instant('settings_web.manager_widgets.messages.create'), _this.translate.instant('settings_web.manager_widgets.title'));
            _this.event.emit({ data: true });
            _this.onCancel();
        });
    };
    ManagerWidgetsCreateComponent.prototype.onCancel = function () {
        this.onClose.next(false);
        this.bsModalRef.hide();
    };
    ManagerWidgetsCreateComponent.ctorParameters = function () { return [
        { type: _ngx_translate_core__WEBPACK_IMPORTED_MODULE_5__["TranslateService"] },
        { type: ngx_bootstrap_modal__WEBPACK_IMPORTED_MODULE_3__["BsModalRef"] },
        { type: _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormBuilder"] },
        { type: ngx_toastr__WEBPACK_IMPORTED_MODULE_4__["ToastrService"] },
        { type: _core_services_pages_service__WEBPACK_IMPORTED_MODULE_7__["PagesService"] },
        { type: _core_services_widgets_service__WEBPACK_IMPORTED_MODULE_8__["WidgetsService"] },
        { type: _core_services_helper_service__WEBPACK_IMPORTED_MODULE_9__["HelperService"] }
    ]; };
    ManagerWidgetsCreateComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-manager-widgets-create',
            template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./manager-widgets-create.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/modules/settings-web/components/manager-widgets-create/manager-widgets-create.component.html")).default,
            styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./manager-widgets-create.component.scss */ "./src/app/modules/settings-web/components/manager-widgets-create/manager-widgets-create.component.scss")).default]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_ngx_translate_core__WEBPACK_IMPORTED_MODULE_5__["TranslateService"],
            ngx_bootstrap_modal__WEBPACK_IMPORTED_MODULE_3__["BsModalRef"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormBuilder"],
            ngx_toastr__WEBPACK_IMPORTED_MODULE_4__["ToastrService"],
            _core_services_pages_service__WEBPACK_IMPORTED_MODULE_7__["PagesService"],
            _core_services_widgets_service__WEBPACK_IMPORTED_MODULE_8__["WidgetsService"],
            _core_services_helper_service__WEBPACK_IMPORTED_MODULE_9__["HelperService"]])
    ], ManagerWidgetsCreateComponent);
    return ManagerWidgetsCreateComponent;
}());



/***/ }),

/***/ "./src/app/modules/settings-web/components/manager-widgets-edit/manager-widgets-edit.component.scss":
/*!**********************************************************************************************************!*\
  !*** ./src/app/modules/settings-web/components/manager-widgets-edit/manager-widgets-edit.component.scss ***!
  \**********************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL21vZHVsZXMvc2V0dGluZ3Mtd2ViL2NvbXBvbmVudHMvbWFuYWdlci13aWRnZXRzLWVkaXQvbWFuYWdlci13aWRnZXRzLWVkaXQuY29tcG9uZW50LnNjc3MifQ== */");

/***/ }),

/***/ "./src/app/modules/settings-web/components/manager-widgets-edit/manager-widgets-edit.component.ts":
/*!********************************************************************************************************!*\
  !*** ./src/app/modules/settings-web/components/manager-widgets-edit/manager-widgets-edit.component.ts ***!
  \********************************************************************************************************/
/*! exports provided: ManagerWidgetsEditComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ManagerWidgetsEditComponent", function() { return ManagerWidgetsEditComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var ngx_bootstrap_modal__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ngx-bootstrap/modal */ "./node_modules/ngx-bootstrap/modal/fesm5/ngx-bootstrap-modal.js");
/* harmony import */ var ngx_toastr__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ngx-toastr */ "./node_modules/ngx-toastr/fesm5/ngx-toastr.js");
/* harmony import */ var _ngx_translate_core__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @ngx-translate/core */ "./node_modules/@ngx-translate/core/fesm5/ngx-translate-core.js");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! rxjs */ "./node_modules/rxjs/_esm5/index.js");
/* harmony import */ var _core_services_pages_service__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../../../../core/services/pages.service */ "./src/app/core/services/pages.service.ts");
/* harmony import */ var _core_services_widgets_service__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../../../../core/services/widgets.service */ "./src/app/core/services/widgets.service.ts");
/* harmony import */ var _core_services_helper_service__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../../../../core/services/helper.service */ "./src/app/core/services/helper.service.ts");










var ManagerWidgetsEditComponent = /** @class */ (function () {
    function ManagerWidgetsEditComponent(translate, bsModalRef, formBuilder, toastr, pagesService, widgetsService, helperService) {
        this.translate = translate;
        this.bsModalRef = bsModalRef;
        this.formBuilder = formBuilder;
        this.toastr = toastr;
        this.pagesService = pagesService;
        this.widgetsService = widgetsService;
        this.helperService = helperService;
        this.event = new _angular_core__WEBPACK_IMPORTED_MODULE_1__["EventEmitter"]();
        this.isFormSubmitted = false;
        this.isPageLoaded = false;
        this.editorOptions = { theme: 'vs-dark', language: 'html' };
    }
    Object.defineProperty(ManagerWidgetsEditComponent.prototype, "managerWidgetsControl", {
        get: function () {
            return this.editManagerWidgetsForm.controls;
        },
        enumerable: true,
        configurable: true
    });
    ManagerWidgetsEditComponent.prototype.ngOnInit = function () {
        this.onClose = new rxjs__WEBPACK_IMPORTED_MODULE_6__["Subject"]();
        this.loadForms();
        this.getAllWidgets();
    };
    ManagerWidgetsEditComponent.prototype.getAllWidgets = function () {
        var _this = this;
        this.widgetsService.getAll()
            .subscribe(function (data) {
            _this.widgetData = data;
        });
    };
    ManagerWidgetsEditComponent.prototype.loadForms = function () {
        this.editManagerWidgetsForm = this.formBuilder.group({
            id: [this.managerWidgets.id],
            widgets_id: [this.managerWidgets.widgets_id, _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required],
            regions_id: [this.managerWidgets.regions_id, _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required],
            pages_id: [this.managerWidgets.pages_id, _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required],
            index: [this.managerWidgets.index, _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required],
        });
        this.isPageLoaded = true;
    };
    ManagerWidgetsEditComponent.prototype.onSubmit = function () {
        var _this = this;
        this.isFormSubmitted = true;
        if (this.editManagerWidgetsForm.invalid) {
            return;
        }
        this.pagesService.updateManagerWidget(this.editManagerWidgetsForm.value)
            .subscribe(function (data) {
            _this.toastr.success(_this.translate.instant('settings_web.manager_widgets.messages.update'), _this.translate.instant('settings_web.manager_widgets.title'));
            _this.event.emit({ data: true });
            _this.onCancel();
        });
    };
    ManagerWidgetsEditComponent.prototype.onCancel = function () {
        this.onClose.next(false);
        this.bsModalRef.hide();
    };
    ManagerWidgetsEditComponent.ctorParameters = function () { return [
        { type: _ngx_translate_core__WEBPACK_IMPORTED_MODULE_5__["TranslateService"] },
        { type: ngx_bootstrap_modal__WEBPACK_IMPORTED_MODULE_3__["BsModalRef"] },
        { type: _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormBuilder"] },
        { type: ngx_toastr__WEBPACK_IMPORTED_MODULE_4__["ToastrService"] },
        { type: _core_services_pages_service__WEBPACK_IMPORTED_MODULE_7__["PagesService"] },
        { type: _core_services_widgets_service__WEBPACK_IMPORTED_MODULE_8__["WidgetsService"] },
        { type: _core_services_helper_service__WEBPACK_IMPORTED_MODULE_9__["HelperService"] }
    ]; };
    ManagerWidgetsEditComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-manager-widgets-edit',
            template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./manager-widgets-edit.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/modules/settings-web/components/manager-widgets-edit/manager-widgets-edit.component.html")).default,
            styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./manager-widgets-edit.component.scss */ "./src/app/modules/settings-web/components/manager-widgets-edit/manager-widgets-edit.component.scss")).default]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_ngx_translate_core__WEBPACK_IMPORTED_MODULE_5__["TranslateService"],
            ngx_bootstrap_modal__WEBPACK_IMPORTED_MODULE_3__["BsModalRef"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormBuilder"],
            ngx_toastr__WEBPACK_IMPORTED_MODULE_4__["ToastrService"],
            _core_services_pages_service__WEBPACK_IMPORTED_MODULE_7__["PagesService"],
            _core_services_widgets_service__WEBPACK_IMPORTED_MODULE_8__["WidgetsService"],
            _core_services_helper_service__WEBPACK_IMPORTED_MODULE_9__["HelperService"]])
    ], ManagerWidgetsEditComponent);
    return ManagerWidgetsEditComponent;
}());



/***/ }),

/***/ "./src/app/modules/settings-web/components/manager-widgets-types-create/manager-widgets-types-create.component.scss":
/*!**************************************************************************************************************************!*\
  !*** ./src/app/modules/settings-web/components/manager-widgets-types-create/manager-widgets-types-create.component.scss ***!
  \**************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL21vZHVsZXMvc2V0dGluZ3Mtd2ViL2NvbXBvbmVudHMvbWFuYWdlci13aWRnZXRzLXR5cGVzLWNyZWF0ZS9tYW5hZ2VyLXdpZGdldHMtdHlwZXMtY3JlYXRlLmNvbXBvbmVudC5zY3NzIn0= */");

/***/ }),

/***/ "./src/app/modules/settings-web/components/manager-widgets-types-create/manager-widgets-types-create.component.ts":
/*!************************************************************************************************************************!*\
  !*** ./src/app/modules/settings-web/components/manager-widgets-types-create/manager-widgets-types-create.component.ts ***!
  \************************************************************************************************************************/
/*! exports provided: ManagerWidgetsTypesCreateComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ManagerWidgetsTypesCreateComponent", function() { return ManagerWidgetsTypesCreateComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var ngx_bootstrap_modal__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ngx-bootstrap/modal */ "./node_modules/ngx-bootstrap/modal/fesm5/ngx-bootstrap-modal.js");
/* harmony import */ var ngx_toastr__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ngx-toastr */ "./node_modules/ngx-toastr/fesm5/ngx-toastr.js");
/* harmony import */ var _ngx_translate_core__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @ngx-translate/core */ "./node_modules/@ngx-translate/core/fesm5/ngx-translate-core.js");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! rxjs */ "./node_modules/rxjs/_esm5/index.js");
/* harmony import */ var _core_services_widgets_types_service__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../../../../core/services/widgets-types.service */ "./src/app/core/services/widgets-types.service.ts");
/* harmony import */ var _core_services_helper_service__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../../../../core/services/helper.service */ "./src/app/core/services/helper.service.ts");









var ManagerWidgetsTypesCreateComponent = /** @class */ (function () {
    function ManagerWidgetsTypesCreateComponent(translate, bsModalRef, formBuilder, toastr, 
    // private widgetsTypesService: WidgetsTypesService,
    widgetsTypesService, helperService) {
        this.translate = translate;
        this.bsModalRef = bsModalRef;
        this.formBuilder = formBuilder;
        this.toastr = toastr;
        this.widgetsTypesService = widgetsTypesService;
        this.helperService = helperService;
        this.event = new _angular_core__WEBPACK_IMPORTED_MODULE_1__["EventEmitter"]();
        this.isFormSubmitted = false;
        this.isWidgetsTypeLoaded = false;
        this.editorOptions = { theme: 'vs-dark', language: 'html' };
    }
    Object.defineProperty(ManagerWidgetsTypesCreateComponent.prototype, "managerWidgetsTypesControl", {
        get: function () {
            return this.createManagerWidgetsTypesForm.controls;
        },
        enumerable: true,
        configurable: true
    });
    ManagerWidgetsTypesCreateComponent.prototype.ngOnInit = function () {
        this.onClose = new rxjs__WEBPACK_IMPORTED_MODULE_6__["Subject"]();
        this.loadForms();
        this.getFieldAll();
    };
    ManagerWidgetsTypesCreateComponent.prototype.getFieldAll = function () {
        var _this = this;
        this.widgetsTypesService.getFieldAll()
            .subscribe(function (result) {
            _this.fieldData = result['data'];
            _this.renderTypeData = result['render_type'];
        });
    };
    ManagerWidgetsTypesCreateComponent.prototype.loadForms = function () {
        this.createManagerWidgetsTypesForm = this.formBuilder.group({
            field_id: [null, _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required],
            label: [null, _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required],
            is_required: [null],
            render_type: [null, _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required],
            select_options: this.formBuilder.array([]),
            index: [null, [_angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required, _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].min(0)]],
        });
    };
    ManagerWidgetsTypesCreateComponent.prototype.addOption = function () {
        var control = this.createManagerWidgetsTypesForm.controls.select_options;
        control.push(this.formBuilder.group({
            value: [null, _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required],
            label: [null, _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required],
        }));
    };
    ManagerWidgetsTypesCreateComponent.prototype.deleteOption = function (index) {
        var control = this.createManagerWidgetsTypesForm.controls.select_options;
        control.removeAt(index);
    };
    ManagerWidgetsTypesCreateComponent.prototype.onChange = function (event) {
        if (event.id == 3) {
            this.addOption();
            return;
        }
        var arr = this.createManagerWidgetsTypesForm.controls.select_options;
        arr.controls = [];
        arr.removeAt(0);
        arr.reset();
    };
    ManagerWidgetsTypesCreateComponent.prototype.onSubmit = function () {
        var _this = this;
        this.isFormSubmitted = true;
        if (this.createManagerWidgetsTypesForm.invalid) {
            return;
        }
        if (this.createManagerWidgetsTypesForm.value.field_type == 3) {
            this.createManagerWidgetsTypesForm.patchValue({ default_value: this.createManagerWidgetsTypesForm.value.select_options });
        }
        this.createManagerWidgetsTypesForm.value.widget_type_id = this.managerWidgetsTypes.widget_type_id;
        this.widgetsTypesService.addFeildInWidget(this.createManagerWidgetsTypesForm.value)
            .subscribe(function (data) {
            _this.toastr.success(_this.translate.instant('settings_web.manager_widgets_types.messages.create'), _this.translate.instant('settings_web.manager_widgets_types.title'));
            _this.event.emit({ data: true });
            _this.onCancel();
        });
    };
    ManagerWidgetsTypesCreateComponent.prototype.onCancel = function () {
        this.onClose.next(false);
        this.bsModalRef.hide();
    };
    ManagerWidgetsTypesCreateComponent.ctorParameters = function () { return [
        { type: _ngx_translate_core__WEBPACK_IMPORTED_MODULE_5__["TranslateService"] },
        { type: ngx_bootstrap_modal__WEBPACK_IMPORTED_MODULE_3__["BsModalRef"] },
        { type: _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormBuilder"] },
        { type: ngx_toastr__WEBPACK_IMPORTED_MODULE_4__["ToastrService"] },
        { type: _core_services_widgets_types_service__WEBPACK_IMPORTED_MODULE_7__["WidgetsTypesService"] },
        { type: _core_services_helper_service__WEBPACK_IMPORTED_MODULE_8__["HelperService"] }
    ]; };
    ManagerWidgetsTypesCreateComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-manager-widgets-types-create',
            template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./manager-widgets-types-create.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/modules/settings-web/components/manager-widgets-types-create/manager-widgets-types-create.component.html")).default,
            styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./manager-widgets-types-create.component.scss */ "./src/app/modules/settings-web/components/manager-widgets-types-create/manager-widgets-types-create.component.scss")).default]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_ngx_translate_core__WEBPACK_IMPORTED_MODULE_5__["TranslateService"],
            ngx_bootstrap_modal__WEBPACK_IMPORTED_MODULE_3__["BsModalRef"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormBuilder"],
            ngx_toastr__WEBPACK_IMPORTED_MODULE_4__["ToastrService"],
            _core_services_widgets_types_service__WEBPACK_IMPORTED_MODULE_7__["WidgetsTypesService"],
            _core_services_helper_service__WEBPACK_IMPORTED_MODULE_8__["HelperService"]])
    ], ManagerWidgetsTypesCreateComponent);
    return ManagerWidgetsTypesCreateComponent;
}());



/***/ }),

/***/ "./src/app/modules/settings-web/components/manager-widgets-types-edit/manager-widgets-types-edit.component.scss":
/*!**********************************************************************************************************************!*\
  !*** ./src/app/modules/settings-web/components/manager-widgets-types-edit/manager-widgets-types-edit.component.scss ***!
  \**********************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL21vZHVsZXMvc2V0dGluZ3Mtd2ViL2NvbXBvbmVudHMvbWFuYWdlci13aWRnZXRzLXR5cGVzLWVkaXQvbWFuYWdlci13aWRnZXRzLXR5cGVzLWVkaXQuY29tcG9uZW50LnNjc3MifQ== */");

/***/ }),

/***/ "./src/app/modules/settings-web/components/manager-widgets-types-edit/manager-widgets-types-edit.component.ts":
/*!********************************************************************************************************************!*\
  !*** ./src/app/modules/settings-web/components/manager-widgets-types-edit/manager-widgets-types-edit.component.ts ***!
  \********************************************************************************************************************/
/*! exports provided: ManagerWidgetsTypesEditComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ManagerWidgetsTypesEditComponent", function() { return ManagerWidgetsTypesEditComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var ngx_bootstrap_modal__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ngx-bootstrap/modal */ "./node_modules/ngx-bootstrap/modal/fesm5/ngx-bootstrap-modal.js");
/* harmony import */ var ngx_toastr__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ngx-toastr */ "./node_modules/ngx-toastr/fesm5/ngx-toastr.js");
/* harmony import */ var _ngx_translate_core__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @ngx-translate/core */ "./node_modules/@ngx-translate/core/fesm5/ngx-translate-core.js");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! rxjs */ "./node_modules/rxjs/_esm5/index.js");
/* harmony import */ var _core_services_widgets_types_service__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../../../../core/services/widgets-types.service */ "./src/app/core/services/widgets-types.service.ts");
/* harmony import */ var _core_services_widgets_service__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../../../../core/services/widgets.service */ "./src/app/core/services/widgets.service.ts");
/* harmony import */ var _core_services_helper_service__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../../../../core/services/helper.service */ "./src/app/core/services/helper.service.ts");










var ManagerWidgetsTypesEditComponent = /** @class */ (function () {
    function ManagerWidgetsTypesEditComponent(translate, bsModalRef, formBuilder, toastr, widgetsTypesService, widgetsService, helperService) {
        this.translate = translate;
        this.bsModalRef = bsModalRef;
        this.formBuilder = formBuilder;
        this.toastr = toastr;
        this.widgetsTypesService = widgetsTypesService;
        this.widgetsService = widgetsService;
        this.helperService = helperService;
        this.event = new _angular_core__WEBPACK_IMPORTED_MODULE_1__["EventEmitter"]();
        this.isFormSubmitted = false;
        this.isWidgetsTypeLoaded = false;
        this.editorOptions = { theme: 'vs-dark', language: 'html' };
    }
    Object.defineProperty(ManagerWidgetsTypesEditComponent.prototype, "managerWidgetsTypesControl", {
        get: function () {
            return this.editManagerWidgetsTypesForm.controls;
        },
        enumerable: true,
        configurable: true
    });
    ManagerWidgetsTypesEditComponent.prototype.ngOnInit = function () {
        this.onClose = new rxjs__WEBPACK_IMPORTED_MODULE_6__["Subject"]();
        this.loadForms();
        this.getFieldAll();
    };
    ManagerWidgetsTypesEditComponent.prototype.getFieldAll = function () {
        var _this = this;
        this.widgetsTypesService.getFieldAll()
            .subscribe(function (result) {
            _this.fieldData = result['data'];
            _this.renderTypeData = result['render_type'];
        });
    };
    ManagerWidgetsTypesEditComponent.prototype.loadForms = function () {
        this.editManagerWidgetsTypesForm = this.formBuilder.group({
            id: [this.managerWidgetTypes.id],
            field_id: [this.managerWidgetTypes.field_id, _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required],
            widget_type_id: [this.managerWidgetTypes.widget_type_id, _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required],
            render_type: [this.managerWidgetTypes.render_type, _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required],
            label: [this.managerWidgetTypes.label, _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required],
            is_required: [this.managerWidgetTypes.is_required],
            select_options: this.formBuilder.array([]),
            index: [this.managerWidgetTypes.index, [_angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required, _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].min(0)]]
        });
        this.isWidgetsTypeLoaded = true;
        if (this.editManagerWidgetsTypesForm.get('field_id').value == 3 && this.managerWidgetTypes.select_options != []) {
            this.addDynamicOptions(this.managerWidgetTypes.select_options);
        }
    };
    ManagerWidgetsTypesEditComponent.prototype.addDynamicOptions = function (options) {
        var that = this;
        options.forEach(function (element) {
            var control = that.editManagerWidgetsTypesForm.controls.select_options;
            control.push(that.formBuilder.group({
                value: [element.value, _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required],
                label: [element.label, _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required],
            }));
        });
    };
    ManagerWidgetsTypesEditComponent.prototype.addOption = function () {
        var control = this.editManagerWidgetsTypesForm.controls.select_options;
        control.push(this.formBuilder.group({
            value: [null, _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required],
            label: [null, _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required],
        }));
    };
    ManagerWidgetsTypesEditComponent.prototype.deleteOption = function (index) {
        var control = this.editManagerWidgetsTypesForm.controls.select_options;
        control.removeAt(index);
    };
    ManagerWidgetsTypesEditComponent.prototype.onChange = function (event) {
        if (event.id == 3) {
            this.addOption();
            return;
        }
        var arr = this.editManagerWidgetsTypesForm.controls.select_options;
        arr.controls = [];
        arr.removeAt(0);
        arr.reset();
    };
    ManagerWidgetsTypesEditComponent.prototype.onSubmit = function () {
        var _this = this;
        this.isFormSubmitted = true;
        if (this.editManagerWidgetsTypesForm.invalid) {
            return;
        }
        this.widgetsTypesService.updateFeildInWidget(this.editManagerWidgetsTypesForm.value)
            .subscribe(function (data) {
            _this.toastr.success(_this.translate.instant('settings_web.manager_widgets_types.messages.update'), _this.translate.instant('settings_web.manager_widgets_types.title'));
            _this.event.emit({ data: true });
            _this.onCancel();
        });
    };
    ManagerWidgetsTypesEditComponent.prototype.onCancel = function () {
        this.onClose.next(false);
        this.bsModalRef.hide();
    };
    ManagerWidgetsTypesEditComponent.ctorParameters = function () { return [
        { type: _ngx_translate_core__WEBPACK_IMPORTED_MODULE_5__["TranslateService"] },
        { type: ngx_bootstrap_modal__WEBPACK_IMPORTED_MODULE_3__["BsModalRef"] },
        { type: _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormBuilder"] },
        { type: ngx_toastr__WEBPACK_IMPORTED_MODULE_4__["ToastrService"] },
        { type: _core_services_widgets_types_service__WEBPACK_IMPORTED_MODULE_7__["WidgetsTypesService"] },
        { type: _core_services_widgets_service__WEBPACK_IMPORTED_MODULE_8__["WidgetsService"] },
        { type: _core_services_helper_service__WEBPACK_IMPORTED_MODULE_9__["HelperService"] }
    ]; };
    ManagerWidgetsTypesEditComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-manager-widgets-types-edit',
            template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./manager-widgets-types-edit.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/modules/settings-web/components/manager-widgets-types-edit/manager-widgets-types-edit.component.html")).default,
            styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./manager-widgets-types-edit.component.scss */ "./src/app/modules/settings-web/components/manager-widgets-types-edit/manager-widgets-types-edit.component.scss")).default]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_ngx_translate_core__WEBPACK_IMPORTED_MODULE_5__["TranslateService"],
            ngx_bootstrap_modal__WEBPACK_IMPORTED_MODULE_3__["BsModalRef"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormBuilder"],
            ngx_toastr__WEBPACK_IMPORTED_MODULE_4__["ToastrService"],
            _core_services_widgets_types_service__WEBPACK_IMPORTED_MODULE_7__["WidgetsTypesService"],
            _core_services_widgets_service__WEBPACK_IMPORTED_MODULE_8__["WidgetsService"],
            _core_services_helper_service__WEBPACK_IMPORTED_MODULE_9__["HelperService"]])
    ], ManagerWidgetsTypesEditComponent);
    return ManagerWidgetsTypesEditComponent;
}());



/***/ }),

/***/ "./src/app/modules/settings-web/components/pages-create/pages-create.component.scss":
/*!******************************************************************************************!*\
  !*** ./src/app/modules/settings-web/components/pages-create/pages-create.component.scss ***!
  \******************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL21vZHVsZXMvc2V0dGluZ3Mtd2ViL2NvbXBvbmVudHMvcGFnZXMtY3JlYXRlL3BhZ2VzLWNyZWF0ZS5jb21wb25lbnQuc2NzcyJ9 */");

/***/ }),

/***/ "./src/app/modules/settings-web/components/pages-create/pages-create.component.ts":
/*!****************************************************************************************!*\
  !*** ./src/app/modules/settings-web/components/pages-create/pages-create.component.ts ***!
  \****************************************************************************************/
/*! exports provided: PagesCreateComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PagesCreateComponent", function() { return PagesCreateComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var ngx_bootstrap_modal__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ngx-bootstrap/modal */ "./node_modules/ngx-bootstrap/modal/fesm5/ngx-bootstrap-modal.js");
/* harmony import */ var ngx_toastr__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ngx-toastr */ "./node_modules/ngx-toastr/fesm5/ngx-toastr.js");
/* harmony import */ var _ngx_translate_core__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @ngx-translate/core */ "./node_modules/@ngx-translate/core/fesm5/ngx-translate-core.js");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! rxjs */ "./node_modules/rxjs/_esm5/index.js");
/* harmony import */ var _core_services_pages_service__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../../../../core/services/pages.service */ "./src/app/core/services/pages.service.ts");
/* harmony import */ var _core_services_templates_service__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../../../../core/services/templates.service */ "./src/app/core/services/templates.service.ts");
/* harmony import */ var _core_services_helper_service__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../../../../core/services/helper.service */ "./src/app/core/services/helper.service.ts");
/* harmony import */ var src_app_core_services_seo_service__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! src/app/core/services/seo.service */ "./src/app/core/services/seo.service.ts");











var PagesCreateComponent = /** @class */ (function () {
    function PagesCreateComponent(translate, bsModalRef, formBuilder, toastr, pagesService, seoService, templatesService, helperService) {
        this.translate = translate;
        this.bsModalRef = bsModalRef;
        this.formBuilder = formBuilder;
        this.toastr = toastr;
        this.pagesService = pagesService;
        this.seoService = seoService;
        this.templatesService = templatesService;
        this.helperService = helperService;
        this.event = new _angular_core__WEBPACK_IMPORTED_MODULE_1__["EventEmitter"]();
        this.isFormSubmitted = false;
        this.isSinglePage = true;
        this.isPageLoaded = false;
        this.isCollapsedHead1 = false;
        this.isCollapsedHead2 = false;
        this.dataType = [
            { label: 'Single Page', value: 0 },
            { label: 'Category Page', value: 1 },
            { label: 'Collection Page', value: 2 },
            { label: 'Products Page', value: 3 },
            { label: 'News Page', value: 4 }
        ];
        this.editorOptions = { theme: 'vs-dark', language: 'html' };
    }
    Object.defineProperty(PagesCreateComponent.prototype, "pagesControl", {
        get: function () {
            return this.createPagesForm.controls;
        },
        enumerable: true,
        configurable: true
    });
    PagesCreateComponent.prototype.ngOnInit = function () {
        this.onClose = new rxjs__WEBPACK_IMPORTED_MODULE_6__["Subject"]();
        this.getAllTemplates();
        this.getAllMeta();
        this.loadForms();
    };
    PagesCreateComponent.prototype.getAllTemplates = function () {
        var _this = this;
        this.templatesService.getAll()
            .subscribe(function (data) {
            _this.templateData = data;
        });
    };
    PagesCreateComponent.prototype.getAllMeta = function () {
        var _this = this;
        this.seoService.getAllMeta()
            .subscribe(function (data) {
            _this.seoData = data;
        });
    };
    PagesCreateComponent.prototype.loadForms = function () {
        this.createPagesForm = this.formBuilder.group({
            name: [null, _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required],
            templates_id: [null, _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required],
            description: [null],
            title: [null, _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required],
            type: [null, _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required],
            seoData: this.formBuilder.array([]),
            seo: [null],
            url: [null, _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required],
        });
        this.createPagesForm.patchValue({ type: 0 });
    };
    PagesCreateComponent.prototype.getSeoData = function (data) {
        return this.formBuilder.group({
            meta: [data.label, _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required],
            meta_id: [data.id, _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required],
            content: [null]
        });
    };
    PagesCreateComponent.prototype.addSeoData = function (data) {
        var control = this.createPagesForm.controls['seoData'];
        control.push(this.getSeoData(data));
    };
    PagesCreateComponent.prototype.onAddMetaTag = function (even) {
        var control = this.createPagesForm.controls['seoData'];
        control.push(this.getSeoData(even));
    };
    PagesCreateComponent.prototype.onRemoveMetaTag = function (even) {
        this.createPagesForm.get('seoData').removeAt(even.index);
    };
    PagesCreateComponent.prototype.onSubmit = function () {
        var _this = this;
        this.isFormSubmitted = true;
        if (this.createPagesForm.invalid) {
            return;
        }
        this.pagesService.create(this.createPagesForm.value)
            .subscribe(function (data) {
            _this.toastr.success(_this.translate.instant('settings_web.pages.messages.create'), _this.translate.instant('settings_web.pages.title'));
            _this.event.emit({ data: true });
            _this.onCancel();
        });
    };
    PagesCreateComponent.prototype.onCancel = function () {
        this.onClose.next(false);
        this.bsModalRef.hide();
    };
    PagesCreateComponent.prototype.typeChange = function ($event) {
        if ($event.value != 0) {
            this.createPagesForm.get('title').setValidators([]);
            this.createPagesForm.get('title').updateValueAndValidity();
            this.createPagesForm.get('url').setValidators([]);
            this.createPagesForm.get('url').updateValueAndValidity();
        }
        else {
            this.createPagesForm.get('title').setValidators([_angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required]);
            this.createPagesForm.get('title').updateValueAndValidity();
            this.createPagesForm.get('url').setValidators([_angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required]);
            this.createPagesForm.get('url').updateValueAndValidity();
        }
    };
    PagesCreateComponent.ctorParameters = function () { return [
        { type: _ngx_translate_core__WEBPACK_IMPORTED_MODULE_5__["TranslateService"] },
        { type: ngx_bootstrap_modal__WEBPACK_IMPORTED_MODULE_3__["BsModalRef"] },
        { type: _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormBuilder"] },
        { type: ngx_toastr__WEBPACK_IMPORTED_MODULE_4__["ToastrService"] },
        { type: _core_services_pages_service__WEBPACK_IMPORTED_MODULE_7__["PagesService"] },
        { type: src_app_core_services_seo_service__WEBPACK_IMPORTED_MODULE_10__["SeoService"] },
        { type: _core_services_templates_service__WEBPACK_IMPORTED_MODULE_8__["TemplatesService"] },
        { type: _core_services_helper_service__WEBPACK_IMPORTED_MODULE_9__["HelperService"] }
    ]; };
    PagesCreateComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-pages-create',
            template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./pages-create.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/modules/settings-web/components/pages-create/pages-create.component.html")).default,
            styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./pages-create.component.scss */ "./src/app/modules/settings-web/components/pages-create/pages-create.component.scss")).default]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_ngx_translate_core__WEBPACK_IMPORTED_MODULE_5__["TranslateService"],
            ngx_bootstrap_modal__WEBPACK_IMPORTED_MODULE_3__["BsModalRef"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormBuilder"],
            ngx_toastr__WEBPACK_IMPORTED_MODULE_4__["ToastrService"],
            _core_services_pages_service__WEBPACK_IMPORTED_MODULE_7__["PagesService"],
            src_app_core_services_seo_service__WEBPACK_IMPORTED_MODULE_10__["SeoService"],
            _core_services_templates_service__WEBPACK_IMPORTED_MODULE_8__["TemplatesService"],
            _core_services_helper_service__WEBPACK_IMPORTED_MODULE_9__["HelperService"]])
    ], PagesCreateComponent);
    return PagesCreateComponent;
}());



/***/ }),

/***/ "./src/app/modules/settings-web/components/pages-edit/pages-edit.component.scss":
/*!**************************************************************************************!*\
  !*** ./src/app/modules/settings-web/components/pages-edit/pages-edit.component.scss ***!
  \**************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL21vZHVsZXMvc2V0dGluZ3Mtd2ViL2NvbXBvbmVudHMvcGFnZXMtZWRpdC9wYWdlcy1lZGl0LmNvbXBvbmVudC5zY3NzIn0= */");

/***/ }),

/***/ "./src/app/modules/settings-web/components/pages-edit/pages-edit.component.ts":
/*!************************************************************************************!*\
  !*** ./src/app/modules/settings-web/components/pages-edit/pages-edit.component.ts ***!
  \************************************************************************************/
/*! exports provided: PagesEditComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PagesEditComponent", function() { return PagesEditComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var ngx_bootstrap_modal__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ngx-bootstrap/modal */ "./node_modules/ngx-bootstrap/modal/fesm5/ngx-bootstrap-modal.js");
/* harmony import */ var ngx_toastr__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ngx-toastr */ "./node_modules/ngx-toastr/fesm5/ngx-toastr.js");
/* harmony import */ var _ngx_translate_core__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @ngx-translate/core */ "./node_modules/@ngx-translate/core/fesm5/ngx-translate-core.js");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! rxjs */ "./node_modules/rxjs/_esm5/index.js");
/* harmony import */ var _core_services_pages_service__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../../../../core/services/pages.service */ "./src/app/core/services/pages.service.ts");
/* harmony import */ var _core_services_templates_service__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../../../../core/services/templates.service */ "./src/app/core/services/templates.service.ts");
/* harmony import */ var _core_services_helper_service__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../../../../core/services/helper.service */ "./src/app/core/services/helper.service.ts");
/* harmony import */ var src_app_core_services_seo_service__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! src/app/core/services/seo.service */ "./src/app/core/services/seo.service.ts");











var PagesEditComponent = /** @class */ (function () {
    function PagesEditComponent(translate, bsModalRef, formBuilder, toastr, pagesService, seoService, helperService, templatesService) {
        this.translate = translate;
        this.bsModalRef = bsModalRef;
        this.formBuilder = formBuilder;
        this.toastr = toastr;
        this.pagesService = pagesService;
        this.seoService = seoService;
        this.helperService = helperService;
        this.templatesService = templatesService;
        this.event = new _angular_core__WEBPACK_IMPORTED_MODULE_1__["EventEmitter"]();
        this.isFormSubmitted = false;
        this.isPageLoaded = false;
        this.isCollapsedHead1 = false;
        this.isCollapsedHead2 = false;
        this.dataType = [
            { label: 'Single Page', value: 0 },
            { label: 'Category Page', value: 1 },
            { label: 'Collection Page', value: 2 },
            { label: 'Products Page', value: 3 },
            { label: 'News Page', value: 4 }
        ];
        this.editorOptions = { theme: 'vs-dark', language: 'html' };
    }
    Object.defineProperty(PagesEditComponent.prototype, "pagesControl", {
        get: function () {
            return this.editPagesForm.controls;
        },
        enumerable: true,
        configurable: true
    });
    PagesEditComponent.prototype.ngOnInit = function () {
        this.onClose = new rxjs__WEBPACK_IMPORTED_MODULE_6__["Subject"]();
        this.getAllMeta();
        this.getAllTemplates();
        this.loadForms();
    };
    PagesEditComponent.prototype.getAllTemplates = function () {
        var _this = this;
        this.templatesService.getAll()
            .subscribe(function (data) {
            _this.templateData = data;
        });
    };
    PagesEditComponent.prototype.loadForms = function () {
        this.editPagesForm = this.formBuilder.group({
            id: [this.pages.id],
            name: [this.pages.name, _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required],
            description: [this.pages.description],
            templates_id: [this.pages.templates_id, _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required],
            title: [this.pages.title, _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required],
            type: [this.pages.type, _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required],
            seoData: this.formBuilder.array([]),
            seo: [this.pages.seo],
            url: [this.pages.url, _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required],
        });
        this.typeChange({ value: this.pages.type });
        // this.changeMetaTag(this.pages.seoData);
        for (var _i = 0, _a = this.pages.seoData; _i < _a.length; _i++) {
            var seo = _a[_i];
            this.onAddMetaTag(seo);
        }
        this.isPageLoaded = true;
    };
    PagesEditComponent.prototype.getAllMeta = function () {
        var _this = this;
        this.seoService.getAllMeta()
            .subscribe(function (data) {
            _this.seoData = data;
        });
    };
    PagesEditComponent.prototype.getSeoData = function (data) {
        !data.content ? data.content = null : '';
        return this.formBuilder.group({
            meta: [data.label, _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required],
            meta_id: [data.id, _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required],
            content: [data.content]
        });
    };
    PagesEditComponent.prototype.addSeoData = function (data) {
        var control = this.editPagesForm.controls['seoData'];
        control.push(this.getSeoData(data));
    };
    PagesEditComponent.prototype.onAddMetaTag = function (even) {
        var control = this.editPagesForm.controls['seoData'];
        control.push(this.getSeoData(even));
    };
    PagesEditComponent.prototype.onRemoveMetaTag = function (even) {
        this.editPagesForm.get('seoData').removeAt(even.index);
    };
    PagesEditComponent.prototype.onSubmit = function () {
        var _this = this;
        this.isFormSubmitted = true;
        if (this.editPagesForm.invalid) {
            return;
        }
        this.pagesService.update(this.editPagesForm.value)
            .subscribe(function (data) {
            _this.toastr.success(_this.translate.instant('settings_web.pages.messages.update'), _this.translate.instant('settings_web.pages.title'));
            _this.event.emit({ data: true });
            _this.onCancel();
        });
    };
    PagesEditComponent.prototype.onCancel = function () {
        this.onClose.next(false);
        this.bsModalRef.hide();
    };
    PagesEditComponent.prototype.typeChange = function ($event) {
        if ($event.value != 0) {
            this.editPagesForm.get('title').setValidators([]);
            this.editPagesForm.get('title').updateValueAndValidity();
            this.editPagesForm.get('url').setValidators([]);
            this.editPagesForm.get('url').updateValueAndValidity();
        }
        else {
            this.editPagesForm.get('title').setValidators([_angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required]);
            this.editPagesForm.get('title').updateValueAndValidity();
            this.editPagesForm.get('url').setValidators([_angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required]);
            this.editPagesForm.get('url').updateValueAndValidity();
        }
    };
    PagesEditComponent.ctorParameters = function () { return [
        { type: _ngx_translate_core__WEBPACK_IMPORTED_MODULE_5__["TranslateService"] },
        { type: ngx_bootstrap_modal__WEBPACK_IMPORTED_MODULE_3__["BsModalRef"] },
        { type: _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormBuilder"] },
        { type: ngx_toastr__WEBPACK_IMPORTED_MODULE_4__["ToastrService"] },
        { type: _core_services_pages_service__WEBPACK_IMPORTED_MODULE_7__["PagesService"] },
        { type: src_app_core_services_seo_service__WEBPACK_IMPORTED_MODULE_10__["SeoService"] },
        { type: _core_services_helper_service__WEBPACK_IMPORTED_MODULE_9__["HelperService"] },
        { type: _core_services_templates_service__WEBPACK_IMPORTED_MODULE_8__["TemplatesService"] }
    ]; };
    PagesEditComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-pages-edit',
            template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./pages-edit.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/modules/settings-web/components/pages-edit/pages-edit.component.html")).default,
            styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./pages-edit.component.scss */ "./src/app/modules/settings-web/components/pages-edit/pages-edit.component.scss")).default]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_ngx_translate_core__WEBPACK_IMPORTED_MODULE_5__["TranslateService"],
            ngx_bootstrap_modal__WEBPACK_IMPORTED_MODULE_3__["BsModalRef"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormBuilder"],
            ngx_toastr__WEBPACK_IMPORTED_MODULE_4__["ToastrService"],
            _core_services_pages_service__WEBPACK_IMPORTED_MODULE_7__["PagesService"],
            src_app_core_services_seo_service__WEBPACK_IMPORTED_MODULE_10__["SeoService"],
            _core_services_helper_service__WEBPACK_IMPORTED_MODULE_9__["HelperService"],
            _core_services_templates_service__WEBPACK_IMPORTED_MODULE_8__["TemplatesService"]])
    ], PagesEditComponent);
    return PagesEditComponent;
}());



/***/ }),

/***/ "./src/app/modules/settings-web/components/pages/pages.component.scss":
/*!****************************************************************************!*\
  !*** ./src/app/modules/settings-web/components/pages/pages.component.scss ***!
  \****************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("::ng-deep .odd {\n  display: none;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvbW9kdWxlcy9zZXR0aW5ncy13ZWIvY29tcG9uZW50cy9wYWdlcy9DOlxcVXNlcnNcXHRodWFuXFxPbmVEcml2ZVxcRGVza3RvcFxcZ2xhdmFsLXRodWFuZGluaC9zcmNcXGFwcFxcbW9kdWxlc1xcc2V0dGluZ3Mtd2ViXFxjb21wb25lbnRzXFxwYWdlc1xccGFnZXMuY29tcG9uZW50LnNjc3MiLCJzcmMvYXBwL21vZHVsZXMvc2V0dGluZ3Mtd2ViL2NvbXBvbmVudHMvcGFnZXMvcGFnZXMuY29tcG9uZW50LnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDSSxhQUFBO0FDQ0oiLCJmaWxlIjoic3JjL2FwcC9tb2R1bGVzL3NldHRpbmdzLXdlYi9jb21wb25lbnRzL3BhZ2VzL3BhZ2VzLmNvbXBvbmVudC5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiOjpuZy1kZWVwIC5vZGQge1xyXG4gICAgZGlzcGxheTogbm9uZVxyXG59XHJcbiIsIjo6bmctZGVlcCAub2RkIHtcbiAgZGlzcGxheTogbm9uZTtcbn0iXX0= */");

/***/ }),

/***/ "./src/app/modules/settings-web/components/pages/pages.component.ts":
/*!**************************************************************************!*\
  !*** ./src/app/modules/settings-web/components/pages/pages.component.ts ***!
  \**************************************************************************/
/*! exports provided: PagesComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PagesComponent", function() { return PagesComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var ngx_bootstrap_modal__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ngx-bootstrap/modal */ "./node_modules/ngx-bootstrap/modal/fesm5/ngx-bootstrap-modal.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");
/* harmony import */ var ngx_export_as__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ngx-export-as */ "./node_modules/ngx-export-as/fesm2015/ngx-export-as.js");
/* harmony import */ var ngx_toastr__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ngx-toastr */ "./node_modules/ngx-toastr/fesm5/ngx-toastr.js");
/* harmony import */ var _ngx_translate_core__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @ngx-translate/core */ "./node_modules/@ngx-translate/core/fesm5/ngx-translate-core.js");
/* harmony import */ var angular_datatables__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! angular-datatables */ "./node_modules/angular-datatables/index.js");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! rxjs */ "./node_modules/rxjs/_esm5/index.js");
/* harmony import */ var sweetalert2__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! sweetalert2 */ "./node_modules/sweetalert2/dist/sweetalert2.all.js");
/* harmony import */ var sweetalert2__WEBPACK_IMPORTED_MODULE_9___default = /*#__PURE__*/__webpack_require__.n(sweetalert2__WEBPACK_IMPORTED_MODULE_9__);
/* harmony import */ var _core_services_pages_service__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ../../../../core/services/pages.service */ "./src/app/core/services/pages.service.ts");
/* harmony import */ var _core_services_helper_service__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ../../../../core/services/helper.service */ "./src/app/core/services/helper.service.ts");
/* harmony import */ var _core_services_authentication_service__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ../../../../core/services/authentication.service */ "./src/app/core/services/authentication.service.ts");
/* harmony import */ var _pages_create_pages_create_component__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ../pages-create/pages-create.component */ "./src/app/modules/settings-web/components/pages-create/pages-create.component.ts");
/* harmony import */ var _pages_edit_pages_edit_component__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ../pages-edit/pages-edit.component */ "./src/app/modules/settings-web/components/pages-edit/pages-edit.component.ts");
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! ../../../../../environments/environment */ "./src/environments/environment.ts");
/* harmony import */ var datatables_net__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! datatables.net */ "./node_modules/datatables.net/js/jquery.dataTables.js");
/* harmony import */ var datatables_net__WEBPACK_IMPORTED_MODULE_16___default = /*#__PURE__*/__webpack_require__.n(datatables_net__WEBPACK_IMPORTED_MODULE_16__);
/* harmony import */ var datatables_net_bs4__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! datatables.net-bs4 */ "./node_modules/datatables.net-bs4/js/dataTables.bootstrap4.js");
/* harmony import */ var datatables_net_bs4__WEBPACK_IMPORTED_MODULE_17___default = /*#__PURE__*/__webpack_require__.n(datatables_net_bs4__WEBPACK_IMPORTED_MODULE_17__);


















var PagesComponent = /** @class */ (function () {
    function PagesComponent(translate, modalService, http, exportAsService, toastr, authenticationService, pagesService, helperService) {
        var _this = this;
        this.translate = translate;
        this.modalService = modalService;
        this.http = http;
        this.exportAsService = exportAsService;
        this.toastr = toastr;
        this.authenticationService = authenticationService;
        this.pagesService = pagesService;
        this.helperService = helperService;
        this.dtTrigger = new rxjs__WEBPACK_IMPORTED_MODULE_8__["Subject"]();
        this.dtOptions = {};
        this.pages = [];
        this.exportAsConfig = {
            type: 'pdf',
            elementIdOrContent: 'custom_field_table',
        };
        this.modalConfigs = {
            animated: true,
            keyboard: true,
            backdrop: true,
            ignoreBackdropClick: false,
            class: 'inmodal modal-dialog-centered animated fadeIn modal-lg'
        };
        this.apiUrl = _environments_environment__WEBPACK_IMPORTED_MODULE_15__["environment"].apiUrl;
        this.authenticationService.loginUser.subscribe(function (x) { return _this.loginUser = x; });
    }
    PagesComponent.prototype.ngOnInit = function () {
        // this.getAllFormFields();
        this.loadPageDatatable();
    };
    PagesComponent.prototype.clonePage = function (id) {
        var _this = this;
        sweetalert2__WEBPACK_IMPORTED_MODULE_9___default.a.fire({
            title: this.translate.instant('common.swal.title'),
            text: this.translate.instant('common.swal.text5'),
            type: 'warning',
            showCancelButton: true,
            confirmButtonText: this.translate.instant('common.swal.confirmText'),
            cancelButtonText: this.translate.instant('common.swal.cancel')
        }).then(function (result) {
            if (result.value) {
                _this.pagesService.clonePage(id)
                    .subscribe(function (data) {
                    _this.toastr.success(_this.translate.instant('settings_web.pages.title'));
                    _this.rerender();
                });
            }
        });
    };
    PagesComponent.prototype.loadPageDatatable = function () {
        var _this = this;
        var that = this;
        this.dtOptions = {
            pagingType: 'full_numbers',
            pageLength: that.loginUser.settings.tables_pagination_limit,
            serverSide: true,
            processing: true,
            dom: '<"html5buttons"B>ltfrtip',
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
                    'sortable': false,
                    'target': [3]
                }, {
                    'sortable': true,
                    'target': [4]
                }, {
                    'sortable': false,
                    'target': [5]
                }, {
                    'sortable': false,
                    'target': [6]
                }, {
                    'sortable': false,
                    'width': '5%',
                    'target': [7]
                }],
            buttons: [{
                    extend: 'csv',
                    title: this.translate.instant('settings_web.pages.title'),
                    className: 'btn btn-datatable-gredient',
                    action: function (e, dt, node, config) {
                        that.exportFiles('csv');
                    }
                }, {
                    extend: 'excel',
                    title: this.translate.instant('settings_web.pages.title'),
                    className: 'btn btn-datatable-gredient',
                    action: function (e, dt, node, config) {
                        that.exportFiles('xlsx');
                    }
                }, {
                    extend: 'pdf',
                    title: this.translate.instant('settings_web.pages.title'),
                    className: 'btn btn-datatable-gredient',
                    action: function (e, dt, node, config) {
                        that.exportFiles('pdf');
                    }
                }],
            language: {
                sLengthMenu: 'Show _MENU_',
                sSearch: '',
                sSearchPlaceholder: 'Search ...'
            },
            ajax: function (dataTablesParameters, callback) {
                _this.http
                    .post(_this.apiUrl + '/api/all-pages', dataTablesParameters, {})
                    .subscribe(function (resp) {
                    _this.pages = resp.data;
                    callback({
                        recordsTotal: resp.recordsTotal,
                        recordsFiltered: resp.recordsFiltered,
                        data: [],
                    });
                });
            }
        };
    };
    PagesComponent.prototype.exportFiles = function (type) {
        this.exportAsConfig.type = type;
        this.exportAsService.save(this.exportAsConfig, 'page').subscribe(function () {
        });
    };
    PagesComponent.prototype.ngAfterViewInit = function () {
        this.dtTrigger.next();
    };
    PagesComponent.prototype.ngOnDestroy = function () {
        this.dtTrigger.unsubscribe();
    };
    PagesComponent.prototype.rerender = function () {
        var _this = this;
        this.dtElement.dtInstance.then(function (dtInstance) {
            dtInstance.destroy();
            setTimeout(function () {
                _this.dtTrigger.next();
                if (_this.pages.length > 0) {
                    $('.tfoot_dt').addClass('d-none');
                }
                else {
                    $('.tfoot_dt').removeClass('d-none');
                }
            });
        });
    };
    PagesComponent.prototype.openPageCreateModal = function () {
        var _this = this;
        this.modalRef = this.modalService.show(_pages_create_pages_create_component__WEBPACK_IMPORTED_MODULE_13__["PagesCreateComponent"], this.modalConfigs);
        this.modalRef.content.event.subscribe(function (data) {
            _this.rerender();
        });
    };
    PagesComponent.prototype.openPageEditModal = function (Pages) {
        var _this = this;
        this.pagesService.getById(Pages.id)
            .subscribe(function (resp) {
            var modalConfig = {
                animated: true,
                keyboard: true,
                backdrop: true,
                ignoreBackdropClick: false,
                class: 'inmodal modal-dialog-centered animated fadeIn modal-lg',
                initialState: {
                    pages: resp
                }
            };
            _this.modalRef = _this.modalService.show(_pages_edit_pages_edit_component__WEBPACK_IMPORTED_MODULE_14__["PagesEditComponent"], modalConfig);
            _this.modalRef.content.event.subscribe(function (data) {
                _this.rerender();
            });
        });
    };
    PagesComponent.prototype.removePage = function (id) {
        var _this = this;
        sweetalert2__WEBPACK_IMPORTED_MODULE_9___default.a.fire({
            title: this.translate.instant('common.swal.title'),
            text: this.translate.instant('common.swal.text') + ' ' + this.translate.instant('settings_web.pages.title1'),
            type: 'warning',
            showCancelButton: true,
            confirmButtonText: this.translate.instant('common.swal.confirmButtonText'),
            cancelButtonText: this.translate.instant('common.swal.cancelButtonText')
        }).then(function (result) {
            if (result.value) {
                _this.pagesService.delete(id)
                    .subscribe(function (data) {
                    _this.toastr.success(_this.translate.instant('settings_web.pages.messages.delete'), _this.translate.instant('settings_web.pages.title'));
                    _this.rerender();
                });
            }
        });
    };
    PagesComponent.prototype.showTypePage = function (type) {
        switch (type) {
            case 0:
                return 'Single Page';
                break;
            case 1:
                return 'Category Page';
                break;
            case 2:
                return 'Collection Page';
                break;
            case 3:
                return 'Product Page';
                break;
            case 4:
                return 'News  Page';
                break;
        }
        return '';
    };
    PagesComponent.ctorParameters = function () { return [
        { type: _ngx_translate_core__WEBPACK_IMPORTED_MODULE_6__["TranslateService"] },
        { type: ngx_bootstrap_modal__WEBPACK_IMPORTED_MODULE_2__["BsModalService"] },
        { type: _angular_common_http__WEBPACK_IMPORTED_MODULE_3__["HttpClient"] },
        { type: ngx_export_as__WEBPACK_IMPORTED_MODULE_4__["ExportAsService"] },
        { type: ngx_toastr__WEBPACK_IMPORTED_MODULE_5__["ToastrService"] },
        { type: _core_services_authentication_service__WEBPACK_IMPORTED_MODULE_12__["AuthenticationService"] },
        { type: _core_services_pages_service__WEBPACK_IMPORTED_MODULE_10__["PagesService"] },
        { type: _core_services_helper_service__WEBPACK_IMPORTED_MODULE_11__["HelperService"] }
    ]; };
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewChild"])(angular_datatables__WEBPACK_IMPORTED_MODULE_7__["DataTableDirective"], { static: true }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", angular_datatables__WEBPACK_IMPORTED_MODULE_7__["DataTableDirective"])
    ], PagesComponent.prototype, "dtElement", void 0);
    PagesComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-pages',
            template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./pages.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/modules/settings-web/components/pages/pages.component.html")).default,
            styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./pages.component.scss */ "./src/app/modules/settings-web/components/pages/pages.component.scss")).default]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_ngx_translate_core__WEBPACK_IMPORTED_MODULE_6__["TranslateService"],
            ngx_bootstrap_modal__WEBPACK_IMPORTED_MODULE_2__["BsModalService"],
            _angular_common_http__WEBPACK_IMPORTED_MODULE_3__["HttpClient"],
            ngx_export_as__WEBPACK_IMPORTED_MODULE_4__["ExportAsService"],
            ngx_toastr__WEBPACK_IMPORTED_MODULE_5__["ToastrService"],
            _core_services_authentication_service__WEBPACK_IMPORTED_MODULE_12__["AuthenticationService"],
            _core_services_pages_service__WEBPACK_IMPORTED_MODULE_10__["PagesService"],
            _core_services_helper_service__WEBPACK_IMPORTED_MODULE_11__["HelperService"]])
    ], PagesComponent);
    return PagesComponent;
}());



/***/ }),

/***/ "./src/app/modules/settings-web/components/regions-create/regions-create.component.scss":
/*!**********************************************************************************************!*\
  !*** ./src/app/modules/settings-web/components/regions-create/regions-create.component.scss ***!
  \**********************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL21vZHVsZXMvc2V0dGluZ3Mtd2ViL2NvbXBvbmVudHMvcmVnaW9ucy1jcmVhdGUvcmVnaW9ucy1jcmVhdGUuY29tcG9uZW50LnNjc3MifQ== */");

/***/ }),

/***/ "./src/app/modules/settings-web/components/regions-create/regions-create.component.ts":
/*!********************************************************************************************!*\
  !*** ./src/app/modules/settings-web/components/regions-create/regions-create.component.ts ***!
  \********************************************************************************************/
/*! exports provided: RegionsCreateComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "RegionsCreateComponent", function() { return RegionsCreateComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var ngx_bootstrap_modal__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ngx-bootstrap/modal */ "./node_modules/ngx-bootstrap/modal/fesm5/ngx-bootstrap-modal.js");
/* harmony import */ var ngx_toastr__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ngx-toastr */ "./node_modules/ngx-toastr/fesm5/ngx-toastr.js");
/* harmony import */ var _ngx_translate_core__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @ngx-translate/core */ "./node_modules/@ngx-translate/core/fesm5/ngx-translate-core.js");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! rxjs */ "./node_modules/rxjs/_esm5/index.js");
/* harmony import */ var _core_services_regions_service__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../../../../core/services/regions.service */ "./src/app/core/services/regions.service.ts");
/* harmony import */ var _core_services_helper_service__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../../../../core/services/helper.service */ "./src/app/core/services/helper.service.ts");









var RegionsCreateComponent = /** @class */ (function () {
    function RegionsCreateComponent(translate, bsModalRef, formBuilder, toastr, regionsService, helperService) {
        this.translate = translate;
        this.bsModalRef = bsModalRef;
        this.formBuilder = formBuilder;
        this.toastr = toastr;
        this.regionsService = regionsService;
        this.helperService = helperService;
        this.event = new _angular_core__WEBPACK_IMPORTED_MODULE_1__["EventEmitter"]();
        this.isFormSubmitted = false;
        this.isPageLoaded = false;
        this.editorOptions = { theme: 'vs-dark', language: 'html' };
    }
    Object.defineProperty(RegionsCreateComponent.prototype, "regionsControl", {
        get: function () {
            return this.createRegionsForm.controls;
        },
        enumerable: true,
        configurable: true
    });
    RegionsCreateComponent.prototype.ngOnInit = function () {
        this.onClose = new rxjs__WEBPACK_IMPORTED_MODULE_6__["Subject"]();
        this.loadForms();
    };
    RegionsCreateComponent.prototype.loadForms = function () {
        this.createRegionsForm = this.formBuilder.group({
            name: [null, _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required],
            content_html: [null, _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required],
            number_content: [null, [_angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required, _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].min(1)]],
            description: [null],
        });
    };
    RegionsCreateComponent.prototype.onSubmit = function () {
        var _this = this;
        this.isFormSubmitted = true;
        if (this.createRegionsForm.invalid) {
            return;
        }
        this.regionsService.create(this.createRegionsForm.value)
            .subscribe(function (data) {
            _this.toastr.success(_this.translate.instant('settings_web.regions.messages.create'), _this.translate.instant('settings_web.regions.title'));
            _this.event.emit({ data: true });
            _this.onCancel();
        });
    };
    RegionsCreateComponent.prototype.onCancel = function () {
        this.onClose.next(false);
        this.bsModalRef.hide();
    };
    RegionsCreateComponent.ctorParameters = function () { return [
        { type: _ngx_translate_core__WEBPACK_IMPORTED_MODULE_5__["TranslateService"] },
        { type: ngx_bootstrap_modal__WEBPACK_IMPORTED_MODULE_3__["BsModalRef"] },
        { type: _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormBuilder"] },
        { type: ngx_toastr__WEBPACK_IMPORTED_MODULE_4__["ToastrService"] },
        { type: _core_services_regions_service__WEBPACK_IMPORTED_MODULE_7__["RegionsService"] },
        { type: _core_services_helper_service__WEBPACK_IMPORTED_MODULE_8__["HelperService"] }
    ]; };
    RegionsCreateComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-regions-create',
            template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./regions-create.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/modules/settings-web/components/regions-create/regions-create.component.html")).default,
            styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./regions-create.component.scss */ "./src/app/modules/settings-web/components/regions-create/regions-create.component.scss")).default]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_ngx_translate_core__WEBPACK_IMPORTED_MODULE_5__["TranslateService"],
            ngx_bootstrap_modal__WEBPACK_IMPORTED_MODULE_3__["BsModalRef"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormBuilder"],
            ngx_toastr__WEBPACK_IMPORTED_MODULE_4__["ToastrService"],
            _core_services_regions_service__WEBPACK_IMPORTED_MODULE_7__["RegionsService"],
            _core_services_helper_service__WEBPACK_IMPORTED_MODULE_8__["HelperService"]])
    ], RegionsCreateComponent);
    return RegionsCreateComponent;
}());



/***/ }),

/***/ "./src/app/modules/settings-web/components/regions-edit/regions-edit.component.scss":
/*!******************************************************************************************!*\
  !*** ./src/app/modules/settings-web/components/regions-edit/regions-edit.component.scss ***!
  \******************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL21vZHVsZXMvc2V0dGluZ3Mtd2ViL2NvbXBvbmVudHMvcmVnaW9ucy1lZGl0L3JlZ2lvbnMtZWRpdC5jb21wb25lbnQuc2NzcyJ9 */");

/***/ }),

/***/ "./src/app/modules/settings-web/components/regions-edit/regions-edit.component.ts":
/*!****************************************************************************************!*\
  !*** ./src/app/modules/settings-web/components/regions-edit/regions-edit.component.ts ***!
  \****************************************************************************************/
/*! exports provided: RegionsEditComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "RegionsEditComponent", function() { return RegionsEditComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var ngx_bootstrap_modal__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ngx-bootstrap/modal */ "./node_modules/ngx-bootstrap/modal/fesm5/ngx-bootstrap-modal.js");
/* harmony import */ var ngx_toastr__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ngx-toastr */ "./node_modules/ngx-toastr/fesm5/ngx-toastr.js");
/* harmony import */ var _ngx_translate_core__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @ngx-translate/core */ "./node_modules/@ngx-translate/core/fesm5/ngx-translate-core.js");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! rxjs */ "./node_modules/rxjs/_esm5/index.js");
/* harmony import */ var _core_services_regions_service__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../../../../core/services/regions.service */ "./src/app/core/services/regions.service.ts");
/* harmony import */ var _core_services_helper_service__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../../../../core/services/helper.service */ "./src/app/core/services/helper.service.ts");









var RegionsEditComponent = /** @class */ (function () {
    function RegionsEditComponent(translate, bsModalRef, formBuilder, toastr, regionsService, helperService) {
        this.translate = translate;
        this.bsModalRef = bsModalRef;
        this.formBuilder = formBuilder;
        this.toastr = toastr;
        this.regionsService = regionsService;
        this.helperService = helperService;
        this.event = new _angular_core__WEBPACK_IMPORTED_MODULE_1__["EventEmitter"]();
        this.isFormSubmitted = false;
        this.isPageLoaded = false;
        this.editorOptions = { theme: 'vs-dark', language: 'html' };
    }
    Object.defineProperty(RegionsEditComponent.prototype, "regionsControl", {
        get: function () {
            return this.editRegionsForm.controls;
        },
        enumerable: true,
        configurable: true
    });
    RegionsEditComponent.prototype.ngOnInit = function () {
        this.onClose = new rxjs__WEBPACK_IMPORTED_MODULE_6__["Subject"]();
        this.loadForms();
    };
    RegionsEditComponent.prototype.loadForms = function () {
        this.editRegionsForm = this.formBuilder.group({
            id: [this.regions.id],
            name: [this.regions.name, _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required],
            content_html: [this.regions.content_html, _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required],
            number_content: [this.regions.number_content, [_angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required, _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].min(1)]],
            description: [this.regions.description],
        });
        this.isPageLoaded = true;
    };
    RegionsEditComponent.prototype.onSubmit = function () {
        var _this = this;
        this.isFormSubmitted = true;
        if (this.editRegionsForm.invalid) {
            return;
        }
        this.regionsService.update(this.editRegionsForm.value)
            .subscribe(function (data) {
            _this.toastr.success(_this.translate.instant('settings_web.regions.messages.update'), _this.translate.instant('settings_web.regions.title'));
            _this.event.emit({ data: true });
            _this.onCancel();
        });
    };
    RegionsEditComponent.prototype.onCancel = function () {
        this.onClose.next(false);
        this.bsModalRef.hide();
    };
    RegionsEditComponent.ctorParameters = function () { return [
        { type: _ngx_translate_core__WEBPACK_IMPORTED_MODULE_5__["TranslateService"] },
        { type: ngx_bootstrap_modal__WEBPACK_IMPORTED_MODULE_3__["BsModalRef"] },
        { type: _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormBuilder"] },
        { type: ngx_toastr__WEBPACK_IMPORTED_MODULE_4__["ToastrService"] },
        { type: _core_services_regions_service__WEBPACK_IMPORTED_MODULE_7__["RegionsService"] },
        { type: _core_services_helper_service__WEBPACK_IMPORTED_MODULE_8__["HelperService"] }
    ]; };
    RegionsEditComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-regions-edit',
            template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./regions-edit.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/modules/settings-web/components/regions-edit/regions-edit.component.html")).default,
            styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./regions-edit.component.scss */ "./src/app/modules/settings-web/components/regions-edit/regions-edit.component.scss")).default]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_ngx_translate_core__WEBPACK_IMPORTED_MODULE_5__["TranslateService"],
            ngx_bootstrap_modal__WEBPACK_IMPORTED_MODULE_3__["BsModalRef"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormBuilder"],
            ngx_toastr__WEBPACK_IMPORTED_MODULE_4__["ToastrService"],
            _core_services_regions_service__WEBPACK_IMPORTED_MODULE_7__["RegionsService"],
            _core_services_helper_service__WEBPACK_IMPORTED_MODULE_8__["HelperService"]])
    ], RegionsEditComponent);
    return RegionsEditComponent;
}());



/***/ }),

/***/ "./src/app/modules/settings-web/components/regions/regions.component.scss":
/*!********************************************************************************!*\
  !*** ./src/app/modules/settings-web/components/regions/regions.component.scss ***!
  \********************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("::ng-deep .odd {\n  display: none;\n}\n\n::ng-deep ngx-monaco-editor {\n  height: 400px !important;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvbW9kdWxlcy9zZXR0aW5ncy13ZWIvY29tcG9uZW50cy9yZWdpb25zL0M6XFxVc2Vyc1xcdGh1YW5cXE9uZURyaXZlXFxEZXNrdG9wXFxnbGF2YWwtdGh1YW5kaW5oL3NyY1xcYXBwXFxtb2R1bGVzXFxzZXR0aW5ncy13ZWJcXGNvbXBvbmVudHNcXHJlZ2lvbnNcXHJlZ2lvbnMuY29tcG9uZW50LnNjc3MiLCJzcmMvYXBwL21vZHVsZXMvc2V0dGluZ3Mtd2ViL2NvbXBvbmVudHMvcmVnaW9ucy9yZWdpb25zLmNvbXBvbmVudC5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0ksYUFBQTtBQ0NKOztBREVBO0VBQ0ksd0JBQUE7QUNDSiIsImZpbGUiOiJzcmMvYXBwL21vZHVsZXMvc2V0dGluZ3Mtd2ViL2NvbXBvbmVudHMvcmVnaW9ucy9yZWdpb25zLmNvbXBvbmVudC5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiOjpuZy1kZWVwIC5vZGQge1xyXG4gICAgZGlzcGxheTogbm9uZVxyXG59XHJcblxyXG46Om5nLWRlZXAgbmd4LW1vbmFjby1lZGl0b3Ige1xyXG4gICAgaGVpZ2h0OiA0MDBweCAhaW1wb3J0YW50O1xyXG59XHJcbiIsIjo6bmctZGVlcCAub2RkIHtcbiAgZGlzcGxheTogbm9uZTtcbn1cblxuOjpuZy1kZWVwIG5neC1tb25hY28tZWRpdG9yIHtcbiAgaGVpZ2h0OiA0MDBweCAhaW1wb3J0YW50O1xufSJdfQ== */");

/***/ }),

/***/ "./src/app/modules/settings-web/components/regions/regions.component.ts":
/*!******************************************************************************!*\
  !*** ./src/app/modules/settings-web/components/regions/regions.component.ts ***!
  \******************************************************************************/
/*! exports provided: RegionsComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "RegionsComponent", function() { return RegionsComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var ngx_bootstrap_modal__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ngx-bootstrap/modal */ "./node_modules/ngx-bootstrap/modal/fesm5/ngx-bootstrap-modal.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");
/* harmony import */ var ngx_export_as__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ngx-export-as */ "./node_modules/ngx-export-as/fesm2015/ngx-export-as.js");
/* harmony import */ var ngx_toastr__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ngx-toastr */ "./node_modules/ngx-toastr/fesm5/ngx-toastr.js");
/* harmony import */ var _ngx_translate_core__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @ngx-translate/core */ "./node_modules/@ngx-translate/core/fesm5/ngx-translate-core.js");
/* harmony import */ var angular_datatables__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! angular-datatables */ "./node_modules/angular-datatables/index.js");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! rxjs */ "./node_modules/rxjs/_esm5/index.js");
/* harmony import */ var sweetalert2__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! sweetalert2 */ "./node_modules/sweetalert2/dist/sweetalert2.all.js");
/* harmony import */ var sweetalert2__WEBPACK_IMPORTED_MODULE_9___default = /*#__PURE__*/__webpack_require__.n(sweetalert2__WEBPACK_IMPORTED_MODULE_9__);
/* harmony import */ var _core_services_regions_service__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ../../../../core/services/regions.service */ "./src/app/core/services/regions.service.ts");
/* harmony import */ var _core_services_helper_service__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ../../../../core/services/helper.service */ "./src/app/core/services/helper.service.ts");
/* harmony import */ var _core_services_authentication_service__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ../../../../core/services/authentication.service */ "./src/app/core/services/authentication.service.ts");
/* harmony import */ var _regions_create_regions_create_component__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ../regions-create/regions-create.component */ "./src/app/modules/settings-web/components/regions-create/regions-create.component.ts");
/* harmony import */ var _regions_edit_regions_edit_component__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ../regions-edit/regions-edit.component */ "./src/app/modules/settings-web/components/regions-edit/regions-edit.component.ts");
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! ../../../../../environments/environment */ "./src/environments/environment.ts");
/* harmony import */ var datatables_net__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! datatables.net */ "./node_modules/datatables.net/js/jquery.dataTables.js");
/* harmony import */ var datatables_net__WEBPACK_IMPORTED_MODULE_16___default = /*#__PURE__*/__webpack_require__.n(datatables_net__WEBPACK_IMPORTED_MODULE_16__);
/* harmony import */ var datatables_net_bs4__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! datatables.net-bs4 */ "./node_modules/datatables.net-bs4/js/dataTables.bootstrap4.js");
/* harmony import */ var datatables_net_bs4__WEBPACK_IMPORTED_MODULE_17___default = /*#__PURE__*/__webpack_require__.n(datatables_net_bs4__WEBPACK_IMPORTED_MODULE_17__);


















var RegionsComponent = /** @class */ (function () {
    function RegionsComponent(translate, modalService, http, exportAsService, toastr, authenticationService, regionsService, helperService) {
        var _this = this;
        this.translate = translate;
        this.modalService = modalService;
        this.http = http;
        this.exportAsService = exportAsService;
        this.toastr = toastr;
        this.authenticationService = authenticationService;
        this.regionsService = regionsService;
        this.helperService = helperService;
        this.dtTrigger = new rxjs__WEBPACK_IMPORTED_MODULE_8__["Subject"]();
        this.dtOptions = {};
        this.regions = [];
        this.exportAsConfig = {
            type: 'pdf',
            elementIdOrContent: 'custom_field_table',
        };
        this.modalConfigs = {
            animated: true,
            keyboard: true,
            backdrop: true,
            ignoreBackdropClick: false,
            class: 'inmodal modal-dialog-centered animated fadeIn modal-lg'
        };
        this.apiUrl = _environments_environment__WEBPACK_IMPORTED_MODULE_15__["environment"].apiUrl;
        this.authenticationService.loginUser.subscribe(function (x) { return _this.loginUser = x; });
    }
    RegionsComponent.prototype.ngOnInit = function () {
        // this.getAllFormFields();
        this.loadRegionDatatable();
    };
    RegionsComponent.prototype.loadRegionDatatable = function () {
        var _this = this;
        var that = this;
        this.dtOptions = {
            pagingType: 'full_numbers',
            pageLength: that.loginUser.settings.tables_pagination_limit,
            serverSide: true,
            processing: true,
            dom: '<"html5buttons"B>ltfrtip',
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
                    'sortable': false,
                    'target': [3]
                }, {
                    'sortable': false,
                    'width': '5%',
                    'target': [4]
                }],
            buttons: [{
                    extend: 'csv',
                    title: this.translate.instant('settings_web.regions.title'),
                    className: 'btn btn-datatable-gredient',
                    action: function (e, dt, node, config) {
                        that.exportFiles('csv');
                    }
                }, {
                    extend: 'excel',
                    title: this.translate.instant('settings_web.regions.title'),
                    className: 'btn btn-datatable-gredient',
                    action: function (e, dt, node, config) {
                        that.exportFiles('xlsx');
                    }
                }, {
                    extend: 'pdf',
                    title: this.translate.instant('settings_web.regions.title'),
                    className: 'btn btn-datatable-gredient',
                    action: function (e, dt, node, config) {
                        that.exportFiles('pdf');
                    }
                }],
            language: {
                sLengthMenu: 'Show _MENU_',
                sSearch: '',
                sSearchPlaceholder: 'Search ...'
            },
            ajax: function (dataTablesParameters, callback) {
                _this.http
                    .post(_this.apiUrl + '/api/all-regions', dataTablesParameters, {})
                    .subscribe(function (resp) {
                    _this.regions = resp.data;
                    callback({
                        recordsTotal: resp.recordsTotal,
                        recordsFiltered: resp.recordsFiltered,
                        data: [],
                    });
                });
            }
        };
    };
    RegionsComponent.prototype.exportFiles = function (type) {
        this.exportAsConfig.type = type;
        this.exportAsService.save(this.exportAsConfig, 'region').subscribe(function () {
        });
    };
    RegionsComponent.prototype.ngAfterViewInit = function () {
        this.dtTrigger.next();
    };
    RegionsComponent.prototype.ngOnDestroy = function () {
        this.dtTrigger.unsubscribe();
    };
    RegionsComponent.prototype.rerender = function () {
        var _this = this;
        this.dtElement.dtInstance.then(function (dtInstance) {
            dtInstance.destroy();
            setTimeout(function () {
                _this.dtTrigger.next();
                if (_this.regions.length > 0) {
                    $('.tfoot_dt').addClass('d-none');
                }
                else {
                    $('.tfoot_dt').removeClass('d-none');
                }
            });
        });
    };
    RegionsComponent.prototype.openRegionCreateModal = function () {
        var _this = this;
        this.modalRef = this.modalService.show(_regions_create_regions_create_component__WEBPACK_IMPORTED_MODULE_13__["RegionsCreateComponent"], this.modalConfigs);
        this.modalRef.content.event.subscribe(function (data) {
            _this.rerender();
        });
    };
    RegionsComponent.prototype.openRegionEditModal = function (Regions) {
        var _this = this;
        this.regionsService.getById(Regions.id)
            .subscribe(function (resp) {
            var modalConfig = {
                animated: true,
                keyboard: true,
                backdrop: true,
                ignoreBackdropClick: false,
                class: 'inmodal modal-dialog-centered animated fadeIn modal-lg',
                initialState: {
                    regions: resp
                }
            };
            _this.modalRef = _this.modalService.show(_regions_edit_regions_edit_component__WEBPACK_IMPORTED_MODULE_14__["RegionsEditComponent"], modalConfig);
            _this.modalRef.content.event.subscribe(function (data) {
                _this.rerender();
            });
        });
    };
    RegionsComponent.prototype.removeRegion = function (id) {
        var _this = this;
        sweetalert2__WEBPACK_IMPORTED_MODULE_9___default.a.fire({
            title: this.translate.instant('common.swal.title'),
            text: this.translate.instant('common.swal.text') + ' ' + this.translate.instant('settings_web.regions.title1'),
            type: 'warning',
            showCancelButton: true,
            confirmButtonText: this.translate.instant('common.swal.confirmButtonText'),
            cancelButtonText: this.translate.instant('common.swal.cancelButtonText')
        }).then(function (result) {
            if (result.value) {
                _this.regionsService.delete(id)
                    .subscribe(function (data) {
                    _this.toastr.success(_this.translate.instant('settings_web.regions.messages.delete'), _this.translate.instant('settings_web.regions.title'));
                    _this.rerender();
                });
            }
        });
    };
    RegionsComponent.ctorParameters = function () { return [
        { type: _ngx_translate_core__WEBPACK_IMPORTED_MODULE_6__["TranslateService"] },
        { type: ngx_bootstrap_modal__WEBPACK_IMPORTED_MODULE_2__["BsModalService"] },
        { type: _angular_common_http__WEBPACK_IMPORTED_MODULE_3__["HttpClient"] },
        { type: ngx_export_as__WEBPACK_IMPORTED_MODULE_4__["ExportAsService"] },
        { type: ngx_toastr__WEBPACK_IMPORTED_MODULE_5__["ToastrService"] },
        { type: _core_services_authentication_service__WEBPACK_IMPORTED_MODULE_12__["AuthenticationService"] },
        { type: _core_services_regions_service__WEBPACK_IMPORTED_MODULE_10__["RegionsService"] },
        { type: _core_services_helper_service__WEBPACK_IMPORTED_MODULE_11__["HelperService"] }
    ]; };
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewChild"])(angular_datatables__WEBPACK_IMPORTED_MODULE_7__["DataTableDirective"], { static: true }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", angular_datatables__WEBPACK_IMPORTED_MODULE_7__["DataTableDirective"])
    ], RegionsComponent.prototype, "dtElement", void 0);
    RegionsComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-regions',
            template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./regions.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/modules/settings-web/components/regions/regions.component.html")).default,
            styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./regions.component.scss */ "./src/app/modules/settings-web/components/regions/regions.component.scss")).default]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_ngx_translate_core__WEBPACK_IMPORTED_MODULE_6__["TranslateService"],
            ngx_bootstrap_modal__WEBPACK_IMPORTED_MODULE_2__["BsModalService"],
            _angular_common_http__WEBPACK_IMPORTED_MODULE_3__["HttpClient"],
            ngx_export_as__WEBPACK_IMPORTED_MODULE_4__["ExportAsService"],
            ngx_toastr__WEBPACK_IMPORTED_MODULE_5__["ToastrService"],
            _core_services_authentication_service__WEBPACK_IMPORTED_MODULE_12__["AuthenticationService"],
            _core_services_regions_service__WEBPACK_IMPORTED_MODULE_10__["RegionsService"],
            _core_services_helper_service__WEBPACK_IMPORTED_MODULE_11__["HelperService"]])
    ], RegionsComponent);
    return RegionsComponent;
}());



/***/ }),

/***/ "./src/app/modules/settings-web/components/templates-create/templates-create.component.scss":
/*!**************************************************************************************************!*\
  !*** ./src/app/modules/settings-web/components/templates-create/templates-create.component.scss ***!
  \**************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL21vZHVsZXMvc2V0dGluZ3Mtd2ViL2NvbXBvbmVudHMvdGVtcGxhdGVzLWNyZWF0ZS90ZW1wbGF0ZXMtY3JlYXRlLmNvbXBvbmVudC5zY3NzIn0= */");

/***/ }),

/***/ "./src/app/modules/settings-web/components/templates-create/templates-create.component.ts":
/*!************************************************************************************************!*\
  !*** ./src/app/modules/settings-web/components/templates-create/templates-create.component.ts ***!
  \************************************************************************************************/
/*! exports provided: TemplatesCreateComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TemplatesCreateComponent", function() { return TemplatesCreateComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var ngx_bootstrap_modal__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ngx-bootstrap/modal */ "./node_modules/ngx-bootstrap/modal/fesm5/ngx-bootstrap-modal.js");
/* harmony import */ var ngx_toastr__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ngx-toastr */ "./node_modules/ngx-toastr/fesm5/ngx-toastr.js");
/* harmony import */ var _ngx_translate_core__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @ngx-translate/core */ "./node_modules/@ngx-translate/core/fesm5/ngx-translate-core.js");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! rxjs */ "./node_modules/rxjs/_esm5/index.js");
/* harmony import */ var _core_services_templates_service__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../../../../core/services/templates.service */ "./src/app/core/services/templates.service.ts");
/* harmony import */ var _core_services_helper_service__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../../../../core/services/helper.service */ "./src/app/core/services/helper.service.ts");









var TemplatesCreateComponent = /** @class */ (function () {
    function TemplatesCreateComponent(translate, bsModalRef, formBuilder, toastr, templatesService, helperService) {
        this.translate = translate;
        this.bsModalRef = bsModalRef;
        this.formBuilder = formBuilder;
        this.toastr = toastr;
        this.templatesService = templatesService;
        this.helperService = helperService;
        this.event = new _angular_core__WEBPACK_IMPORTED_MODULE_1__["EventEmitter"]();
        this.isFormSubmitted = false;
        this.isPageLoaded = false;
        this.editorOptions = { theme: 'vs-dark', language: 'html' };
    }
    Object.defineProperty(TemplatesCreateComponent.prototype, "templatesControl", {
        get: function () {
            return this.createTemplatesForm.controls;
        },
        enumerable: true,
        configurable: true
    });
    TemplatesCreateComponent.prototype.ngOnInit = function () {
        this.onClose = new rxjs__WEBPACK_IMPORTED_MODULE_6__["Subject"]();
        this.loadForms();
    };
    TemplatesCreateComponent.prototype.loadForms = function () {
        this.createTemplatesForm = this.formBuilder.group({
            name: [null, _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required],
            description: [null],
        });
    };
    TemplatesCreateComponent.prototype.onSubmit = function () {
        var _this = this;
        this.isFormSubmitted = true;
        if (this.createTemplatesForm.invalid) {
            return;
        }
        this.templatesService.create(this.createTemplatesForm.value)
            .subscribe(function (data) {
            _this.toastr.success(_this.translate.instant('settings_web.templates.messages.create'), _this.translate.instant('settings_web.templates.title'));
            _this.event.emit({ data: true });
            _this.onCancel();
        });
    };
    TemplatesCreateComponent.prototype.onCancel = function () {
        this.onClose.next(false);
        this.bsModalRef.hide();
    };
    TemplatesCreateComponent.ctorParameters = function () { return [
        { type: _ngx_translate_core__WEBPACK_IMPORTED_MODULE_5__["TranslateService"] },
        { type: ngx_bootstrap_modal__WEBPACK_IMPORTED_MODULE_3__["BsModalRef"] },
        { type: _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormBuilder"] },
        { type: ngx_toastr__WEBPACK_IMPORTED_MODULE_4__["ToastrService"] },
        { type: _core_services_templates_service__WEBPACK_IMPORTED_MODULE_7__["TemplatesService"] },
        { type: _core_services_helper_service__WEBPACK_IMPORTED_MODULE_8__["HelperService"] }
    ]; };
    TemplatesCreateComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-templates-create',
            template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./templates-create.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/modules/settings-web/components/templates-create/templates-create.component.html")).default,
            styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./templates-create.component.scss */ "./src/app/modules/settings-web/components/templates-create/templates-create.component.scss")).default]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_ngx_translate_core__WEBPACK_IMPORTED_MODULE_5__["TranslateService"],
            ngx_bootstrap_modal__WEBPACK_IMPORTED_MODULE_3__["BsModalRef"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormBuilder"],
            ngx_toastr__WEBPACK_IMPORTED_MODULE_4__["ToastrService"],
            _core_services_templates_service__WEBPACK_IMPORTED_MODULE_7__["TemplatesService"],
            _core_services_helper_service__WEBPACK_IMPORTED_MODULE_8__["HelperService"]])
    ], TemplatesCreateComponent);
    return TemplatesCreateComponent;
}());



/***/ }),

/***/ "./src/app/modules/settings-web/components/templates-edit/templates-edit.component.scss":
/*!**********************************************************************************************!*\
  !*** ./src/app/modules/settings-web/components/templates-edit/templates-edit.component.scss ***!
  \**********************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL21vZHVsZXMvc2V0dGluZ3Mtd2ViL2NvbXBvbmVudHMvdGVtcGxhdGVzLWVkaXQvdGVtcGxhdGVzLWVkaXQuY29tcG9uZW50LnNjc3MifQ== */");

/***/ }),

/***/ "./src/app/modules/settings-web/components/templates-edit/templates-edit.component.ts":
/*!********************************************************************************************!*\
  !*** ./src/app/modules/settings-web/components/templates-edit/templates-edit.component.ts ***!
  \********************************************************************************************/
/*! exports provided: TemplatesEditComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TemplatesEditComponent", function() { return TemplatesEditComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var ngx_bootstrap_modal__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ngx-bootstrap/modal */ "./node_modules/ngx-bootstrap/modal/fesm5/ngx-bootstrap-modal.js");
/* harmony import */ var ngx_toastr__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ngx-toastr */ "./node_modules/ngx-toastr/fesm5/ngx-toastr.js");
/* harmony import */ var _ngx_translate_core__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @ngx-translate/core */ "./node_modules/@ngx-translate/core/fesm5/ngx-translate-core.js");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! rxjs */ "./node_modules/rxjs/_esm5/index.js");
/* harmony import */ var _core_services_templates_service__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../../../../core/services/templates.service */ "./src/app/core/services/templates.service.ts");
/* harmony import */ var _core_services_helper_service__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../../../../core/services/helper.service */ "./src/app/core/services/helper.service.ts");









var TemplatesEditComponent = /** @class */ (function () {
    function TemplatesEditComponent(translate, bsModalRef, formBuilder, toastr, templatesService, helperService) {
        this.translate = translate;
        this.bsModalRef = bsModalRef;
        this.formBuilder = formBuilder;
        this.toastr = toastr;
        this.templatesService = templatesService;
        this.helperService = helperService;
        this.event = new _angular_core__WEBPACK_IMPORTED_MODULE_1__["EventEmitter"]();
        this.isFormSubmitted = false;
        this.isPageLoaded = false;
        this.editorOptions = { theme: 'vs-dark', language: 'html' };
    }
    Object.defineProperty(TemplatesEditComponent.prototype, "templatesControl", {
        get: function () {
            return this.editTemplatesForm.controls;
        },
        enumerable: true,
        configurable: true
    });
    TemplatesEditComponent.prototype.ngOnInit = function () {
        this.onClose = new rxjs__WEBPACK_IMPORTED_MODULE_6__["Subject"]();
        this.loadForms();
    };
    TemplatesEditComponent.prototype.loadForms = function () {
        this.editTemplatesForm = this.formBuilder.group({
            id: [this.templates.id],
            name: [this.templates.name, _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required],
            description: [this.templates.description],
        });
        this.isPageLoaded = true;
    };
    TemplatesEditComponent.prototype.onSubmit = function () {
        var _this = this;
        this.isFormSubmitted = true;
        if (this.editTemplatesForm.invalid) {
            return;
        }
        this.templatesService.update(this.editTemplatesForm.value)
            .subscribe(function (data) {
            _this.toastr.success(_this.translate.instant('settings.templates.messages.update'), _this.translate.instant('settings.templates.title'));
            _this.event.emit({ data: true });
            _this.onCancel();
        });
    };
    TemplatesEditComponent.prototype.onCancel = function () {
        this.onClose.next(false);
        this.bsModalRef.hide();
    };
    TemplatesEditComponent.ctorParameters = function () { return [
        { type: _ngx_translate_core__WEBPACK_IMPORTED_MODULE_5__["TranslateService"] },
        { type: ngx_bootstrap_modal__WEBPACK_IMPORTED_MODULE_3__["BsModalRef"] },
        { type: _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormBuilder"] },
        { type: ngx_toastr__WEBPACK_IMPORTED_MODULE_4__["ToastrService"] },
        { type: _core_services_templates_service__WEBPACK_IMPORTED_MODULE_7__["TemplatesService"] },
        { type: _core_services_helper_service__WEBPACK_IMPORTED_MODULE_8__["HelperService"] }
    ]; };
    TemplatesEditComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-templates-edit',
            template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./templates-edit.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/modules/settings-web/components/templates-edit/templates-edit.component.html")).default,
            styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./templates-edit.component.scss */ "./src/app/modules/settings-web/components/templates-edit/templates-edit.component.scss")).default]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_ngx_translate_core__WEBPACK_IMPORTED_MODULE_5__["TranslateService"],
            ngx_bootstrap_modal__WEBPACK_IMPORTED_MODULE_3__["BsModalRef"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormBuilder"],
            ngx_toastr__WEBPACK_IMPORTED_MODULE_4__["ToastrService"],
            _core_services_templates_service__WEBPACK_IMPORTED_MODULE_7__["TemplatesService"],
            _core_services_helper_service__WEBPACK_IMPORTED_MODULE_8__["HelperService"]])
    ], TemplatesEditComponent);
    return TemplatesEditComponent;
}());



/***/ }),

/***/ "./src/app/modules/settings-web/components/templates/templates.component.scss":
/*!************************************************************************************!*\
  !*** ./src/app/modules/settings-web/components/templates/templates.component.scss ***!
  \************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("::ng-deep .odd {\n  display: none;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvbW9kdWxlcy9zZXR0aW5ncy13ZWIvY29tcG9uZW50cy90ZW1wbGF0ZXMvQzpcXFVzZXJzXFx0aHVhblxcT25lRHJpdmVcXERlc2t0b3BcXGdsYXZhbC10aHVhbmRpbmgvc3JjXFxhcHBcXG1vZHVsZXNcXHNldHRpbmdzLXdlYlxcY29tcG9uZW50c1xcdGVtcGxhdGVzXFx0ZW1wbGF0ZXMuY29tcG9uZW50LnNjc3MiLCJzcmMvYXBwL21vZHVsZXMvc2V0dGluZ3Mtd2ViL2NvbXBvbmVudHMvdGVtcGxhdGVzL3RlbXBsYXRlcy5jb21wb25lbnQuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNJLGFBQUE7QUNDSiIsImZpbGUiOiJzcmMvYXBwL21vZHVsZXMvc2V0dGluZ3Mtd2ViL2NvbXBvbmVudHMvdGVtcGxhdGVzL3RlbXBsYXRlcy5jb21wb25lbnQuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIjo6bmctZGVlcCAub2RkIHtcclxuICAgIGRpc3BsYXk6IG5vbmVcclxufVxyXG4iLCI6Om5nLWRlZXAgLm9kZCB7XG4gIGRpc3BsYXk6IG5vbmU7XG59Il19 */");

/***/ }),

/***/ "./src/app/modules/settings-web/components/templates/templates.component.ts":
/*!**********************************************************************************!*\
  !*** ./src/app/modules/settings-web/components/templates/templates.component.ts ***!
  \**********************************************************************************/
/*! exports provided: TemplatesComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TemplatesComponent", function() { return TemplatesComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var ngx_bootstrap_modal__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ngx-bootstrap/modal */ "./node_modules/ngx-bootstrap/modal/fesm5/ngx-bootstrap-modal.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");
/* harmony import */ var ngx_export_as__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ngx-export-as */ "./node_modules/ngx-export-as/fesm2015/ngx-export-as.js");
/* harmony import */ var ngx_toastr__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ngx-toastr */ "./node_modules/ngx-toastr/fesm5/ngx-toastr.js");
/* harmony import */ var _ngx_translate_core__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @ngx-translate/core */ "./node_modules/@ngx-translate/core/fesm5/ngx-translate-core.js");
/* harmony import */ var angular_datatables__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! angular-datatables */ "./node_modules/angular-datatables/index.js");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! rxjs */ "./node_modules/rxjs/_esm5/index.js");
/* harmony import */ var sweetalert2__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! sweetalert2 */ "./node_modules/sweetalert2/dist/sweetalert2.all.js");
/* harmony import */ var sweetalert2__WEBPACK_IMPORTED_MODULE_9___default = /*#__PURE__*/__webpack_require__.n(sweetalert2__WEBPACK_IMPORTED_MODULE_9__);
/* harmony import */ var _core_services_templates_service__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ../../../../core/services/templates.service */ "./src/app/core/services/templates.service.ts");
/* harmony import */ var _core_services_helper_service__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ../../../../core/services/helper.service */ "./src/app/core/services/helper.service.ts");
/* harmony import */ var _core_services_authentication_service__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ../../../../core/services/authentication.service */ "./src/app/core/services/authentication.service.ts");
/* harmony import */ var _templates_create_templates_create_component__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ../templates-create/templates-create.component */ "./src/app/modules/settings-web/components/templates-create/templates-create.component.ts");
/* harmony import */ var _templates_edit_templates_edit_component__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ../templates-edit/templates-edit.component */ "./src/app/modules/settings-web/components/templates-edit/templates-edit.component.ts");
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! ../../../../../environments/environment */ "./src/environments/environment.ts");
/* harmony import */ var datatables_net__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! datatables.net */ "./node_modules/datatables.net/js/jquery.dataTables.js");
/* harmony import */ var datatables_net__WEBPACK_IMPORTED_MODULE_16___default = /*#__PURE__*/__webpack_require__.n(datatables_net__WEBPACK_IMPORTED_MODULE_16__);
/* harmony import */ var datatables_net_bs4__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! datatables.net-bs4 */ "./node_modules/datatables.net-bs4/js/dataTables.bootstrap4.js");
/* harmony import */ var datatables_net_bs4__WEBPACK_IMPORTED_MODULE_17___default = /*#__PURE__*/__webpack_require__.n(datatables_net_bs4__WEBPACK_IMPORTED_MODULE_17__);


















var TemplatesComponent = /** @class */ (function () {
    function TemplatesComponent(translate, modalService, http, exportAsService, toastr, authenticationService, templatesService, helperService) {
        var _this = this;
        this.translate = translate;
        this.modalService = modalService;
        this.http = http;
        this.exportAsService = exportAsService;
        this.toastr = toastr;
        this.authenticationService = authenticationService;
        this.templatesService = templatesService;
        this.helperService = helperService;
        this.dtTrigger = new rxjs__WEBPACK_IMPORTED_MODULE_8__["Subject"]();
        this.dtOptions = {};
        this.templates = [];
        this.exportAsConfig = {
            type: 'pdf',
            elementIdOrContent: 'custom_field_table',
        };
        this.modalConfigs = {
            animated: true,
            keyboard: true,
            backdrop: true,
            ignoreBackdropClick: false,
            class: 'inmodal modal-dialog-centered animated fadeIn modal-lg'
        };
        this.apiUrl = _environments_environment__WEBPACK_IMPORTED_MODULE_15__["environment"].apiUrl;
        this.authenticationService.loginUser.subscribe(function (x) { return _this.loginUser = x; });
    }
    TemplatesComponent.prototype.ngOnInit = function () {
        this.loadTemplateDatatable();
    };
    TemplatesComponent.prototype.loadTemplateDatatable = function () {
        var _this = this;
        var that = this;
        this.dtOptions = {
            pagingType: 'full_numbers',
            pageLength: that.loginUser.settings.tables_pagination_limit,
            serverSide: true,
            processing: true,
            dom: '<"html5buttons"B>ltfrtip',
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
                    'sortable': false,
                    'width': '5%',
                    'target': [3]
                }],
            buttons: [{
                    extend: 'csv',
                    title: this.translate.instant('settings_web.templates.title'),
                    className: 'btn btn-datatable-gredient',
                    action: function (e, dt, node, config) {
                        that.exportFiles('csv');
                    }
                }, {
                    extend: 'excel',
                    title: this.translate.instant('settings_web.templates.title'),
                    className: 'btn btn-datatable-gredient',
                    action: function (e, dt, node, config) {
                        that.exportFiles('xlsx');
                    }
                }, {
                    extend: 'pdf',
                    title: this.translate.instant('settings_web.templates.title'),
                    className: 'btn btn-datatable-gredient',
                    action: function (e, dt, node, config) {
                        that.exportFiles('pdf');
                    }
                }],
            language: {
                sLengthMenu: 'Show _MENU_',
                sSearch: '',
                sSearchPlaceholder: 'Search ...'
            },
            ajax: function (dataTablesParameters, callback) {
                _this.http
                    .post(_this.apiUrl + '/api/all-templates', dataTablesParameters, {})
                    .subscribe(function (resp) {
                    _this.templates = resp.data;
                    callback({
                        recordsTotal: resp.recordsTotal,
                        recordsFiltered: resp.recordsFiltered,
                        data: [],
                    });
                });
            }
        };
    };
    TemplatesComponent.prototype.exportFiles = function (type) {
        this.exportAsConfig.type = type;
        this.exportAsService.save(this.exportAsConfig, 'template').subscribe(function () {
        });
    };
    TemplatesComponent.prototype.ngAfterViewInit = function () {
        this.dtTrigger.next();
    };
    TemplatesComponent.prototype.ngOnDestroy = function () {
        this.dtTrigger.unsubscribe();
    };
    TemplatesComponent.prototype.rerender = function () {
        var _this = this;
        this.dtElement.dtInstance.then(function (dtInstance) {
            dtInstance.destroy();
            setTimeout(function () {
                _this.dtTrigger.next();
                if (_this.templates.length > 0) {
                    $('.tfoot_dt').addClass('d-none');
                }
                else {
                    $('.tfoot_dt').removeClass('d-none');
                }
            });
        });
    };
    TemplatesComponent.prototype.openTemplateCreateModal = function () {
        var _this = this;
        this.modalRef = this.modalService.show(_templates_create_templates_create_component__WEBPACK_IMPORTED_MODULE_13__["TemplatesCreateComponent"], this.modalConfigs);
        this.modalRef.content.event.subscribe(function (data) {
            _this.rerender();
        });
    };
    TemplatesComponent.prototype.openTemplateEditModal = function (Templates) {
        var _this = this;
        this.templatesService.getById(Templates.id)
            .subscribe(function (resp) {
            var modalConfig = {
                animated: true,
                keyboard: true,
                backdrop: true,
                ignoreBackdropClick: false,
                class: 'inmodal modal-dialog-centered animated fadeIn modal-lg',
                initialState: {
                    templates: resp
                }
            };
            _this.modalRef = _this.modalService.show(_templates_edit_templates_edit_component__WEBPACK_IMPORTED_MODULE_14__["TemplatesEditComponent"], modalConfig);
            _this.modalRef.content.event.subscribe(function (data) {
                _this.rerender();
            });
        });
    };
    TemplatesComponent.prototype.removeTemplate = function (id) {
        var _this = this;
        sweetalert2__WEBPACK_IMPORTED_MODULE_9___default.a.fire({
            title: this.translate.instant('common.swal.title'),
            text: this.translate.instant('common.swal.text') + ' ' + this.translate.instant('settings_web.templates.title1'),
            type: 'warning',
            showCancelButton: true,
            confirmButtonText: this.translate.instant('common.swal.confirmButtonText'),
            cancelButtonText: this.translate.instant('common.swal.cancelButtonText')
        }).then(function (result) {
            if (result.value) {
                _this.templatesService.delete(id)
                    .subscribe(function (data) {
                    _this.toastr.success(_this.translate.instant('settings_web.templates.messages.delete'), _this.translate.instant('settings_web.templates.title'));
                    _this.rerender();
                });
            }
        });
    };
    TemplatesComponent.prototype.cloneTemplate = function (Templates) {
        var _this = this;
        this.templatesService.getById(Templates.id)
            .subscribe(function (resp) {
            _this.toastr.success();
        });
    };
    TemplatesComponent.ctorParameters = function () { return [
        { type: _ngx_translate_core__WEBPACK_IMPORTED_MODULE_6__["TranslateService"] },
        { type: ngx_bootstrap_modal__WEBPACK_IMPORTED_MODULE_2__["BsModalService"] },
        { type: _angular_common_http__WEBPACK_IMPORTED_MODULE_3__["HttpClient"] },
        { type: ngx_export_as__WEBPACK_IMPORTED_MODULE_4__["ExportAsService"] },
        { type: ngx_toastr__WEBPACK_IMPORTED_MODULE_5__["ToastrService"] },
        { type: _core_services_authentication_service__WEBPACK_IMPORTED_MODULE_12__["AuthenticationService"] },
        { type: _core_services_templates_service__WEBPACK_IMPORTED_MODULE_10__["TemplatesService"] },
        { type: _core_services_helper_service__WEBPACK_IMPORTED_MODULE_11__["HelperService"] }
    ]; };
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewChild"])(angular_datatables__WEBPACK_IMPORTED_MODULE_7__["DataTableDirective"], { static: true }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", angular_datatables__WEBPACK_IMPORTED_MODULE_7__["DataTableDirective"])
    ], TemplatesComponent.prototype, "dtElement", void 0);
    TemplatesComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-templates',
            template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./templates.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/modules/settings-web/components/templates/templates.component.html")).default,
            styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./templates.component.scss */ "./src/app/modules/settings-web/components/templates/templates.component.scss")).default]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_ngx_translate_core__WEBPACK_IMPORTED_MODULE_6__["TranslateService"],
            ngx_bootstrap_modal__WEBPACK_IMPORTED_MODULE_2__["BsModalService"],
            _angular_common_http__WEBPACK_IMPORTED_MODULE_3__["HttpClient"],
            ngx_export_as__WEBPACK_IMPORTED_MODULE_4__["ExportAsService"],
            ngx_toastr__WEBPACK_IMPORTED_MODULE_5__["ToastrService"],
            _core_services_authentication_service__WEBPACK_IMPORTED_MODULE_12__["AuthenticationService"],
            _core_services_templates_service__WEBPACK_IMPORTED_MODULE_10__["TemplatesService"],
            _core_services_helper_service__WEBPACK_IMPORTED_MODULE_11__["HelperService"]])
    ], TemplatesComponent);
    return TemplatesComponent;
}());



/***/ }),

/***/ "./src/app/modules/settings-web/components/themes-create-import/themes-create-import.component.scss":
/*!**********************************************************************************************************!*\
  !*** ./src/app/modules/settings-web/components/themes-create-import/themes-create-import.component.scss ***!
  \**********************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL21vZHVsZXMvc2V0dGluZ3Mtd2ViL2NvbXBvbmVudHMvdGhlbWVzLWNyZWF0ZS1pbXBvcnQvdGhlbWVzLWNyZWF0ZS1pbXBvcnQuY29tcG9uZW50LnNjc3MifQ== */");

/***/ }),

/***/ "./src/app/modules/settings-web/components/themes-create-import/themes-create-import.component.ts":
/*!********************************************************************************************************!*\
  !*** ./src/app/modules/settings-web/components/themes-create-import/themes-create-import.component.ts ***!
  \********************************************************************************************************/
/*! exports provided: ThemesCreateImportComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ThemesCreateImportComponent", function() { return ThemesCreateImportComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var ngx_bootstrap_modal__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ngx-bootstrap/modal */ "./node_modules/ngx-bootstrap/modal/fesm5/ngx-bootstrap-modal.js");
/* harmony import */ var ngx_toastr__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ngx-toastr */ "./node_modules/ngx-toastr/fesm5/ngx-toastr.js");
/* harmony import */ var _ngx_translate_core__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @ngx-translate/core */ "./node_modules/@ngx-translate/core/fesm5/ngx-translate-core.js");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! rxjs */ "./node_modules/rxjs/_esm5/index.js");
/* harmony import */ var _core_services_themes_service__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../../../../core/services/themes.service */ "./src/app/core/services/themes.service.ts");
/* harmony import */ var _core_services_helper_service__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../../../../core/services/helper.service */ "./src/app/core/services/helper.service.ts");









var ThemesCreateImportComponent = /** @class */ (function () {
    function ThemesCreateImportComponent(translate, bsModalRef, formBuilder, toastr, themesService, helperService) {
        this.translate = translate;
        this.bsModalRef = bsModalRef;
        this.formBuilder = formBuilder;
        this.toastr = toastr;
        this.themesService = themesService;
        this.helperService = helperService;
        this.event = new _angular_core__WEBPACK_IMPORTED_MODULE_1__["EventEmitter"]();
        this.isFormSubmitted = false;
        this.isPageLoaded = false;
        this.editorOptions = { theme: 'vs-dark', language: 'html' };
    }
    ThemesCreateImportComponent.prototype.ngOnInit = function () {
        this.onClose = new rxjs__WEBPACK_IMPORTED_MODULE_6__["Subject"]();
        this.loadForms();
    };
    ThemesCreateImportComponent.prototype.loadForms = function () {
        this.createThemesForm = this.formBuilder.group({
            folder: [null, _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required],
        });
    };
    ThemesCreateImportComponent.prototype.onSubmit = function () {
        var _this = this;
        this.isFormSubmitted = true;
        if (this.createThemesForm.invalid) {
            return;
        }
        this.themesService.createImport(this.createThemesForm.value)
            .subscribe(function (data) {
            _this.toastr.success(_this.translate.instant('settings.custom_fields.messages.create'), _this.translate.instant('settings.custom_fields.title'));
            _this.event.emit({ data: true });
            _this.onCancel();
        });
    };
    ThemesCreateImportComponent.prototype.onCancel = function () {
        this.onClose.next(false);
        this.bsModalRef.hide();
    };
    ThemesCreateImportComponent.ctorParameters = function () { return [
        { type: _ngx_translate_core__WEBPACK_IMPORTED_MODULE_5__["TranslateService"] },
        { type: ngx_bootstrap_modal__WEBPACK_IMPORTED_MODULE_3__["BsModalRef"] },
        { type: _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormBuilder"] },
        { type: ngx_toastr__WEBPACK_IMPORTED_MODULE_4__["ToastrService"] },
        { type: _core_services_themes_service__WEBPACK_IMPORTED_MODULE_7__["ThemesService"] },
        { type: _core_services_helper_service__WEBPACK_IMPORTED_MODULE_8__["HelperService"] }
    ]; };
    ThemesCreateImportComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-themes-create-import',
            template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./themes-create-import.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/modules/settings-web/components/themes-create-import/themes-create-import.component.html")).default,
            styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./themes-create-import.component.scss */ "./src/app/modules/settings-web/components/themes-create-import/themes-create-import.component.scss")).default]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_ngx_translate_core__WEBPACK_IMPORTED_MODULE_5__["TranslateService"],
            ngx_bootstrap_modal__WEBPACK_IMPORTED_MODULE_3__["BsModalRef"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormBuilder"],
            ngx_toastr__WEBPACK_IMPORTED_MODULE_4__["ToastrService"],
            _core_services_themes_service__WEBPACK_IMPORTED_MODULE_7__["ThemesService"],
            _core_services_helper_service__WEBPACK_IMPORTED_MODULE_8__["HelperService"]])
    ], ThemesCreateImportComponent);
    return ThemesCreateImportComponent;
}());



/***/ }),

/***/ "./src/app/modules/settings-web/components/themes-create/themes-create.component.scss":
/*!********************************************************************************************!*\
  !*** ./src/app/modules/settings-web/components/themes-create/themes-create.component.scss ***!
  \********************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("::ng-deep ngx-monaco-editor {\n  height: 400px !important;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvbW9kdWxlcy9zZXR0aW5ncy13ZWIvY29tcG9uZW50cy90aGVtZXMtY3JlYXRlL0M6XFxVc2Vyc1xcdGh1YW5cXE9uZURyaXZlXFxEZXNrdG9wXFxnbGF2YWwtdGh1YW5kaW5oL3NyY1xcYXBwXFxtb2R1bGVzXFxzZXR0aW5ncy13ZWJcXGNvbXBvbmVudHNcXHRoZW1lcy1jcmVhdGVcXHRoZW1lcy1jcmVhdGUuY29tcG9uZW50LnNjc3MiLCJzcmMvYXBwL21vZHVsZXMvc2V0dGluZ3Mtd2ViL2NvbXBvbmVudHMvdGhlbWVzLWNyZWF0ZS90aGVtZXMtY3JlYXRlLmNvbXBvbmVudC5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0ksd0JBQUE7QUNDSiIsImZpbGUiOiJzcmMvYXBwL21vZHVsZXMvc2V0dGluZ3Mtd2ViL2NvbXBvbmVudHMvdGhlbWVzLWNyZWF0ZS90aGVtZXMtY3JlYXRlLmNvbXBvbmVudC5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiOjpuZy1kZWVwIG5neC1tb25hY28tZWRpdG9yIHtcclxuICAgIGhlaWdodDogNDAwcHggIWltcG9ydGFudDtcclxufVxyXG4iLCI6Om5nLWRlZXAgbmd4LW1vbmFjby1lZGl0b3Ige1xuICBoZWlnaHQ6IDQwMHB4ICFpbXBvcnRhbnQ7XG59Il19 */");

/***/ }),

/***/ "./src/app/modules/settings-web/components/themes-create/themes-create.component.ts":
/*!******************************************************************************************!*\
  !*** ./src/app/modules/settings-web/components/themes-create/themes-create.component.ts ***!
  \******************************************************************************************/
/*! exports provided: ThemesCreateComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ThemesCreateComponent", function() { return ThemesCreateComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var ngx_bootstrap_modal__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ngx-bootstrap/modal */ "./node_modules/ngx-bootstrap/modal/fesm5/ngx-bootstrap-modal.js");
/* harmony import */ var ngx_toastr__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ngx-toastr */ "./node_modules/ngx-toastr/fesm5/ngx-toastr.js");
/* harmony import */ var _ngx_translate_core__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @ngx-translate/core */ "./node_modules/@ngx-translate/core/fesm5/ngx-translate-core.js");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! rxjs */ "./node_modules/rxjs/_esm5/index.js");
/* harmony import */ var _core_services_themes_service__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../../../../core/services/themes.service */ "./src/app/core/services/themes.service.ts");
/* harmony import */ var _core_services_helper_service__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../../../../core/services/helper.service */ "./src/app/core/services/helper.service.ts");









var ThemesCreateComponent = /** @class */ (function () {
    function ThemesCreateComponent(translate, bsModalRef, formBuilder, toastr, themesService, helperService) {
        this.translate = translate;
        this.bsModalRef = bsModalRef;
        this.formBuilder = formBuilder;
        this.toastr = toastr;
        this.themesService = themesService;
        this.helperService = helperService;
        this.event = new _angular_core__WEBPACK_IMPORTED_MODULE_1__["EventEmitter"]();
        this.isFormSubmitted = false;
        this.isPageLoaded = false;
        this.editorOptions = { theme: 'vs-dark', language: 'html' };
    }
    Object.defineProperty(ThemesCreateComponent.prototype, "themesControl", {
        get: function () {
            return this.createThemesForm.controls;
        },
        enumerable: true,
        configurable: true
    });
    ThemesCreateComponent.prototype.ngOnInit = function () {
        this.onClose = new rxjs__WEBPACK_IMPORTED_MODULE_6__["Subject"]();
        this.loadForms();
    };
    ThemesCreateComponent.prototype.loadForms = function () {
        this.createThemesForm = this.formBuilder.group({
            name: [null, _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required],
            folder: [null, [_angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required, _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].pattern(/^[a-z0-9]*$/)]],
            content_html: [null, _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required],
            description: [null],
        });
    };
    ThemesCreateComponent.prototype.onSubmit = function () {
        var _this = this;
        this.isFormSubmitted = true;
        if (this.createThemesForm.invalid) {
            return;
        }
        this.themesService.create(this.createThemesForm.value)
            .subscribe(function (data) {
            _this.toastr.success(_this.translate.instant('settings_web.themes.messages.create'), _this.translate.instant('settings_web.themes.title'));
            _this.event.emit({ data: true });
            _this.onCancel();
        });
    };
    ThemesCreateComponent.prototype.onCancel = function () {
        this.onClose.next(false);
        this.bsModalRef.hide();
    };
    ThemesCreateComponent.ctorParameters = function () { return [
        { type: _ngx_translate_core__WEBPACK_IMPORTED_MODULE_5__["TranslateService"] },
        { type: ngx_bootstrap_modal__WEBPACK_IMPORTED_MODULE_3__["BsModalRef"] },
        { type: _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormBuilder"] },
        { type: ngx_toastr__WEBPACK_IMPORTED_MODULE_4__["ToastrService"] },
        { type: _core_services_themes_service__WEBPACK_IMPORTED_MODULE_7__["ThemesService"] },
        { type: _core_services_helper_service__WEBPACK_IMPORTED_MODULE_8__["HelperService"] }
    ]; };
    ThemesCreateComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-themes-create',
            template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./themes-create.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/modules/settings-web/components/themes-create/themes-create.component.html")).default,
            styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./themes-create.component.scss */ "./src/app/modules/settings-web/components/themes-create/themes-create.component.scss")).default]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_ngx_translate_core__WEBPACK_IMPORTED_MODULE_5__["TranslateService"],
            ngx_bootstrap_modal__WEBPACK_IMPORTED_MODULE_3__["BsModalRef"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormBuilder"],
            ngx_toastr__WEBPACK_IMPORTED_MODULE_4__["ToastrService"],
            _core_services_themes_service__WEBPACK_IMPORTED_MODULE_7__["ThemesService"],
            _core_services_helper_service__WEBPACK_IMPORTED_MODULE_8__["HelperService"]])
    ], ThemesCreateComponent);
    return ThemesCreateComponent;
}());



/***/ }),

/***/ "./src/app/modules/settings-web/components/themes-edit/themes-edit.component.scss":
/*!****************************************************************************************!*\
  !*** ./src/app/modules/settings-web/components/themes-edit/themes-edit.component.scss ***!
  \****************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL21vZHVsZXMvc2V0dGluZ3Mtd2ViL2NvbXBvbmVudHMvdGhlbWVzLWVkaXQvdGhlbWVzLWVkaXQuY29tcG9uZW50LnNjc3MifQ== */");

/***/ }),

/***/ "./src/app/modules/settings-web/components/themes-edit/themes-edit.component.ts":
/*!**************************************************************************************!*\
  !*** ./src/app/modules/settings-web/components/themes-edit/themes-edit.component.ts ***!
  \**************************************************************************************/
/*! exports provided: ThemesEditComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ThemesEditComponent", function() { return ThemesEditComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var ngx_bootstrap_modal__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ngx-bootstrap/modal */ "./node_modules/ngx-bootstrap/modal/fesm5/ngx-bootstrap-modal.js");
/* harmony import */ var ngx_toastr__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ngx-toastr */ "./node_modules/ngx-toastr/fesm5/ngx-toastr.js");
/* harmony import */ var _ngx_translate_core__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @ngx-translate/core */ "./node_modules/@ngx-translate/core/fesm5/ngx-translate-core.js");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! rxjs */ "./node_modules/rxjs/_esm5/index.js");
/* harmony import */ var _core_services_themes_service__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../../../../core/services/themes.service */ "./src/app/core/services/themes.service.ts");
/* harmony import */ var _core_services_helper_service__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../../../../core/services/helper.service */ "./src/app/core/services/helper.service.ts");









var ThemesEditComponent = /** @class */ (function () {
    function ThemesEditComponent(translate, bsModalRef, formBuilder, toastr, themesService, helperService) {
        this.translate = translate;
        this.bsModalRef = bsModalRef;
        this.formBuilder = formBuilder;
        this.toastr = toastr;
        this.themesService = themesService;
        this.helperService = helperService;
        this.event = new _angular_core__WEBPACK_IMPORTED_MODULE_1__["EventEmitter"]();
        this.isFormSubmitted = false;
        this.isPageLoaded = false;
        this.editorOptions = { theme: 'vs-dark', language: 'html' };
    }
    Object.defineProperty(ThemesEditComponent.prototype, "themesControl", {
        get: function () {
            return this.editThemesForm.controls;
        },
        enumerable: true,
        configurable: true
    });
    ThemesEditComponent.prototype.ngOnInit = function () {
        this.onClose = new rxjs__WEBPACK_IMPORTED_MODULE_6__["Subject"]();
        this.loadForms();
    };
    ThemesEditComponent.prototype.loadForms = function () {
        this.editThemesForm = this.formBuilder.group({
            id: [this.themes.id],
            name: [this.themes.name, _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required],
            description: [this.themes.description],
            folder: [this.themes.folder, [_angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required, _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].pattern(/^[a-z0-9]*$/)]],
            content_html: [this.themes.content_html, _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required],
        });
        this.isPageLoaded = true;
    };
    ThemesEditComponent.prototype.onSubmit = function () {
        var _this = this;
        this.isFormSubmitted = true;
        if (this.editThemesForm.invalid) {
            return;
        }
        this.themesService.update(this.editThemesForm.value)
            .subscribe(function (data) {
            _this.toastr.success(_this.translate.instant('settings_web.themes.messages.update'), _this.translate.instant('settings_web.themes.title'));
            _this.event.emit({ data: true });
            _this.onCancel();
        });
    };
    ThemesEditComponent.prototype.onCancel = function () {
        this.onClose.next(false);
        this.bsModalRef.hide();
    };
    ThemesEditComponent.ctorParameters = function () { return [
        { type: _ngx_translate_core__WEBPACK_IMPORTED_MODULE_5__["TranslateService"] },
        { type: ngx_bootstrap_modal__WEBPACK_IMPORTED_MODULE_3__["BsModalRef"] },
        { type: _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormBuilder"] },
        { type: ngx_toastr__WEBPACK_IMPORTED_MODULE_4__["ToastrService"] },
        { type: _core_services_themes_service__WEBPACK_IMPORTED_MODULE_7__["ThemesService"] },
        { type: _core_services_helper_service__WEBPACK_IMPORTED_MODULE_8__["HelperService"] }
    ]; };
    ThemesEditComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-themes-edit',
            template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./themes-edit.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/modules/settings-web/components/themes-edit/themes-edit.component.html")).default,
            styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./themes-edit.component.scss */ "./src/app/modules/settings-web/components/themes-edit/themes-edit.component.scss")).default]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_ngx_translate_core__WEBPACK_IMPORTED_MODULE_5__["TranslateService"],
            ngx_bootstrap_modal__WEBPACK_IMPORTED_MODULE_3__["BsModalRef"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormBuilder"],
            ngx_toastr__WEBPACK_IMPORTED_MODULE_4__["ToastrService"],
            _core_services_themes_service__WEBPACK_IMPORTED_MODULE_7__["ThemesService"],
            _core_services_helper_service__WEBPACK_IMPORTED_MODULE_8__["HelperService"]])
    ], ThemesEditComponent);
    return ThemesEditComponent;
}());



/***/ }),

/***/ "./src/app/modules/settings-web/components/themes/themes.component.scss":
/*!******************************************************************************!*\
  !*** ./src/app/modules/settings-web/components/themes/themes.component.scss ***!
  \******************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("::ng-deep .odd {\n  display: none;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvbW9kdWxlcy9zZXR0aW5ncy13ZWIvY29tcG9uZW50cy90aGVtZXMvQzpcXFVzZXJzXFx0aHVhblxcT25lRHJpdmVcXERlc2t0b3BcXGdsYXZhbC10aHVhbmRpbmgvc3JjXFxhcHBcXG1vZHVsZXNcXHNldHRpbmdzLXdlYlxcY29tcG9uZW50c1xcdGhlbWVzXFx0aGVtZXMuY29tcG9uZW50LnNjc3MiLCJzcmMvYXBwL21vZHVsZXMvc2V0dGluZ3Mtd2ViL2NvbXBvbmVudHMvdGhlbWVzL3RoZW1lcy5jb21wb25lbnQuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNJLGFBQUE7QUNDSiIsImZpbGUiOiJzcmMvYXBwL21vZHVsZXMvc2V0dGluZ3Mtd2ViL2NvbXBvbmVudHMvdGhlbWVzL3RoZW1lcy5jb21wb25lbnQuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIjo6bmctZGVlcCAub2RkIHtcclxuICAgIGRpc3BsYXk6IG5vbmVcclxufVxyXG4iLCI6Om5nLWRlZXAgLm9kZCB7XG4gIGRpc3BsYXk6IG5vbmU7XG59Il19 */");

/***/ }),

/***/ "./src/app/modules/settings-web/components/themes/themes.component.ts":
/*!****************************************************************************!*\
  !*** ./src/app/modules/settings-web/components/themes/themes.component.ts ***!
  \****************************************************************************/
/*! exports provided: ThemesComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ThemesComponent", function() { return ThemesComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var ngx_bootstrap_modal__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ngx-bootstrap/modal */ "./node_modules/ngx-bootstrap/modal/fesm5/ngx-bootstrap-modal.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");
/* harmony import */ var ngx_export_as__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ngx-export-as */ "./node_modules/ngx-export-as/fesm2015/ngx-export-as.js");
/* harmony import */ var ngx_toastr__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ngx-toastr */ "./node_modules/ngx-toastr/fesm5/ngx-toastr.js");
/* harmony import */ var _ngx_translate_core__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @ngx-translate/core */ "./node_modules/@ngx-translate/core/fesm5/ngx-translate-core.js");
/* harmony import */ var angular_datatables__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! angular-datatables */ "./node_modules/angular-datatables/index.js");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! rxjs */ "./node_modules/rxjs/_esm5/index.js");
/* harmony import */ var sweetalert2__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! sweetalert2 */ "./node_modules/sweetalert2/dist/sweetalert2.all.js");
/* harmony import */ var sweetalert2__WEBPACK_IMPORTED_MODULE_9___default = /*#__PURE__*/__webpack_require__.n(sweetalert2__WEBPACK_IMPORTED_MODULE_9__);
/* harmony import */ var _core_services_themes_service__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ../../../../core/services/themes.service */ "./src/app/core/services/themes.service.ts");
/* harmony import */ var _core_services_helper_service__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ../../../../core/services/helper.service */ "./src/app/core/services/helper.service.ts");
/* harmony import */ var _core_services_authentication_service__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ../../../../core/services/authentication.service */ "./src/app/core/services/authentication.service.ts");
/* harmony import */ var _themes_create_themes_create_component__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ../themes-create/themes-create.component */ "./src/app/modules/settings-web/components/themes-create/themes-create.component.ts");
/* harmony import */ var _themes_create_import_themes_create_import_component__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ../themes-create-import/themes-create-import.component */ "./src/app/modules/settings-web/components/themes-create-import/themes-create-import.component.ts");
/* harmony import */ var _themes_edit_themes_edit_component__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! ../themes-edit/themes-edit.component */ "./src/app/modules/settings-web/components/themes-edit/themes-edit.component.ts");
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! ../../../../../environments/environment */ "./src/environments/environment.ts");
/* harmony import */ var datatables_net__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! datatables.net */ "./node_modules/datatables.net/js/jquery.dataTables.js");
/* harmony import */ var datatables_net__WEBPACK_IMPORTED_MODULE_17___default = /*#__PURE__*/__webpack_require__.n(datatables_net__WEBPACK_IMPORTED_MODULE_17__);
/* harmony import */ var datatables_net_bs4__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! datatables.net-bs4 */ "./node_modules/datatables.net-bs4/js/dataTables.bootstrap4.js");
/* harmony import */ var datatables_net_bs4__WEBPACK_IMPORTED_MODULE_18___default = /*#__PURE__*/__webpack_require__.n(datatables_net_bs4__WEBPACK_IMPORTED_MODULE_18__);



















var ThemesComponent = /** @class */ (function () {
    function ThemesComponent(translate, modalService, http, exportAsService, toastr, authenticationService, themesService, helperService) {
        var _this = this;
        this.translate = translate;
        this.modalService = modalService;
        this.http = http;
        this.exportAsService = exportAsService;
        this.toastr = toastr;
        this.authenticationService = authenticationService;
        this.themesService = themesService;
        this.helperService = helperService;
        this.dtTrigger = new rxjs__WEBPACK_IMPORTED_MODULE_8__["Subject"]();
        this.dtOptions = {};
        this.themes = [];
        this.exportAsConfig = {
            type: 'pdf',
            elementIdOrContent: 'custom_field_table',
        };
        this.modalConfigs = {
            animated: true,
            keyboard: true,
            backdrop: true,
            ignoreBackdropClick: false,
            class: 'inmodal modal-dialog-centered animated fadeIn modal-lg'
        };
        this.apiUrl = _environments_environment__WEBPACK_IMPORTED_MODULE_16__["environment"].apiUrl;
        this.authenticationService.loginUser.subscribe(function (x) { return _this.loginUser = x; });
    }
    ThemesComponent.prototype.ngOnInit = function () {
        // this.getAllFormFields();
        this.loadThemeDatatable();
    };
    ThemesComponent.prototype.loadThemeDatatable = function () {
        var _this = this;
        var that = this;
        this.dtOptions = {
            pagingType: 'full_numbers',
            pageLength: that.loginUser.settings.tables_pagination_limit,
            serverSide: true,
            processing: true,
            dom: '<"html5buttons"B>ltfrtip',
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
                    'sortable': true,
                    'target': [4]
                }, {
                    'sortable': false,
                    'width': '5%',
                    'target': [5]
                }],
            buttons: [{
                    extend: 'csv',
                    title: this.translate.instant('settings_web.themes.title'),
                    className: 'btn btn-datatable-gredient',
                    action: function (e, dt, node, config) {
                        that.exportFiles('csv');
                    }
                }, {
                    extend: 'excel',
                    title: this.translate.instant('settings_web.themes.title'),
                    className: 'btn btn-datatable-gredient',
                    action: function (e, dt, node, config) {
                        that.exportFiles('xlsx');
                    }
                }, {
                    extend: 'pdf',
                    title: this.translate.instant('settings_web.themes.title'),
                    className: 'btn btn-datatable-gredient',
                    action: function (e, dt, node, config) {
                        that.exportFiles('pdf');
                    }
                }],
            language: {
                sLengthMenu: 'Show _MENU_',
                sSearch: '',
                sSearchPlaceholder: 'Search ...'
            },
            ajax: function (dataTablesParameters, callback) {
                _this.http
                    .post(_this.apiUrl + '/api/all-themes', dataTablesParameters, {})
                    .subscribe(function (resp) {
                    _this.themes = resp.data;
                    callback({
                        recordsTotal: resp.recordsTotal,
                        recordsFiltered: resp.recordsFiltered,
                        data: [],
                    });
                });
            }
        };
    };
    ThemesComponent.prototype.exportFiles = function (type) {
        this.exportAsConfig.type = type;
        this.exportAsService.save(this.exportAsConfig, 'theme').subscribe(function () {
        });
    };
    ThemesComponent.prototype.ngAfterViewInit = function () {
        this.dtTrigger.next();
    };
    ThemesComponent.prototype.ngOnDestroy = function () {
        this.dtTrigger.unsubscribe();
    };
    ThemesComponent.prototype.rerender = function () {
        var _this = this;
        this.dtElement.dtInstance.then(function (dtInstance) {
            dtInstance.destroy();
            setTimeout(function () {
                _this.dtTrigger.next();
                if (_this.themes.length > 0) {
                    $('.tfoot_dt').addClass('d-none');
                }
                else {
                    $('.tfoot_dt').removeClass('d-none');
                }
            });
        });
    };
    ThemesComponent.prototype.openThemeCreateModal = function () {
        var _this = this;
        this.modalRef = this.modalService.show(_themes_create_themes_create_component__WEBPACK_IMPORTED_MODULE_13__["ThemesCreateComponent"], this.modalConfigs);
        this.modalRef.content.event.subscribe(function (data) {
            _this.rerender();
        });
    };
    ThemesComponent.prototype.openThemeCreateImportModal = function () {
        var _this = this;
        this.modalRef = this.modalService.show(_themes_create_import_themes_create_import_component__WEBPACK_IMPORTED_MODULE_14__["ThemesCreateImportComponent"], this.modalConfigs);
        this.modalRef.content.event.subscribe(function (data) {
            _this.rerender();
        });
    };
    ThemesComponent.prototype.openThemeEditModal = function (Themes) {
        var _this = this;
        this.themesService.getById(Themes.id)
            .subscribe(function (resp) {
            var modalConfig = {
                animated: true,
                keyboard: true,
                backdrop: true,
                ignoreBackdropClick: false,
                class: 'inmodal modal-dialog-centered animated fadeIn modal-lg',
                initialState: {
                    themes: resp
                }
            };
            _this.modalRef = _this.modalService.show(_themes_edit_themes_edit_component__WEBPACK_IMPORTED_MODULE_15__["ThemesEditComponent"], modalConfig);
            _this.modalRef.content.event.subscribe(function (data) {
                _this.rerender();
            });
        });
    };
    ThemesComponent.prototype.removeTheme = function (id) {
        var _this = this;
        sweetalert2__WEBPACK_IMPORTED_MODULE_9___default.a.fire({
            title: this.translate.instant('common.swal.title'),
            text: this.translate.instant('common.swal.text') + ' ' + this.translate.instant('settings_web.themes.title'),
            type: 'warning',
            showCancelButton: true,
            confirmButtonText: this.translate.instant('common.swal.confirmButtonText'),
            cancelButtonText: this.translate.instant('common.swal.cancelButtonText')
        }).then(function (result) {
            if (result.value) {
                _this.themesService.delete(id)
                    .subscribe(function (data) {
                    _this.toastr.success(_this.translate.instant('settings_web.themes.messages.delete'), _this.translate.instant('settings_web.themes.title'));
                    _this.rerender();
                });
            }
        });
    };
    ThemesComponent.prototype.changeStatus = function (event, id) {
        var _this = this;
        this.themesService.changeStatus({ id: id, status: event })
            .subscribe(function (data) {
            _this.toastr.success(_this.translate.instant('settings_web.themes.messages.status'), _this.translate.instant('settings_web.themes.title'));
            _this.rerender();
        });
    };
    ThemesComponent.ctorParameters = function () { return [
        { type: _ngx_translate_core__WEBPACK_IMPORTED_MODULE_6__["TranslateService"] },
        { type: ngx_bootstrap_modal__WEBPACK_IMPORTED_MODULE_2__["BsModalService"] },
        { type: _angular_common_http__WEBPACK_IMPORTED_MODULE_3__["HttpClient"] },
        { type: ngx_export_as__WEBPACK_IMPORTED_MODULE_4__["ExportAsService"] },
        { type: ngx_toastr__WEBPACK_IMPORTED_MODULE_5__["ToastrService"] },
        { type: _core_services_authentication_service__WEBPACK_IMPORTED_MODULE_12__["AuthenticationService"] },
        { type: _core_services_themes_service__WEBPACK_IMPORTED_MODULE_10__["ThemesService"] },
        { type: _core_services_helper_service__WEBPACK_IMPORTED_MODULE_11__["HelperService"] }
    ]; };
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewChild"])(angular_datatables__WEBPACK_IMPORTED_MODULE_7__["DataTableDirective"], { static: true }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", angular_datatables__WEBPACK_IMPORTED_MODULE_7__["DataTableDirective"])
    ], ThemesComponent.prototype, "dtElement", void 0);
    ThemesComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-themes',
            template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./themes.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/modules/settings-web/components/themes/themes.component.html")).default,
            styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./themes.component.scss */ "./src/app/modules/settings-web/components/themes/themes.component.scss")).default]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_ngx_translate_core__WEBPACK_IMPORTED_MODULE_6__["TranslateService"],
            ngx_bootstrap_modal__WEBPACK_IMPORTED_MODULE_2__["BsModalService"],
            _angular_common_http__WEBPACK_IMPORTED_MODULE_3__["HttpClient"],
            ngx_export_as__WEBPACK_IMPORTED_MODULE_4__["ExportAsService"],
            ngx_toastr__WEBPACK_IMPORTED_MODULE_5__["ToastrService"],
            _core_services_authentication_service__WEBPACK_IMPORTED_MODULE_12__["AuthenticationService"],
            _core_services_themes_service__WEBPACK_IMPORTED_MODULE_10__["ThemesService"],
            _core_services_helper_service__WEBPACK_IMPORTED_MODULE_11__["HelperService"]])
    ], ThemesComponent);
    return ThemesComponent;
}());



/***/ }),

/***/ "./src/app/modules/settings-web/components/widgets-create/widgets-create.component.scss":
/*!**********************************************************************************************!*\
  !*** ./src/app/modules/settings-web/components/widgets-create/widgets-create.component.scss ***!
  \**********************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL21vZHVsZXMvc2V0dGluZ3Mtd2ViL2NvbXBvbmVudHMvd2lkZ2V0cy1jcmVhdGUvd2lkZ2V0cy1jcmVhdGUuY29tcG9uZW50LnNjc3MifQ== */");

/***/ }),

/***/ "./src/app/modules/settings-web/components/widgets-create/widgets-create.component.ts":
/*!********************************************************************************************!*\
  !*** ./src/app/modules/settings-web/components/widgets-create/widgets-create.component.ts ***!
  \********************************************************************************************/
/*! exports provided: WidgetsCreateComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "WidgetsCreateComponent", function() { return WidgetsCreateComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var ngx_bootstrap_modal__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ngx-bootstrap/modal */ "./node_modules/ngx-bootstrap/modal/fesm5/ngx-bootstrap-modal.js");
/* harmony import */ var ngx_toastr__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ngx-toastr */ "./node_modules/ngx-toastr/fesm5/ngx-toastr.js");
/* harmony import */ var _ngx_translate_core__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @ngx-translate/core */ "./node_modules/@ngx-translate/core/fesm5/ngx-translate-core.js");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! rxjs */ "./node_modules/rxjs/_esm5/index.js");
/* harmony import */ var _core_services_widgets_service__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../../../../core/services/widgets.service */ "./src/app/core/services/widgets.service.ts");
/* harmony import */ var _core_services_widgets_types_service__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../../../../core/services/widgets-types.service */ "./src/app/core/services/widgets-types.service.ts");
/* harmony import */ var _core_services_helper_service__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../../../../core/services/helper.service */ "./src/app/core/services/helper.service.ts");










var WidgetsCreateComponent = /** @class */ (function () {
    function WidgetsCreateComponent(translate, bsModalRef, formBuilder, toastr, widgetsService, helperService, widgetsTypesService) {
        this.translate = translate;
        this.bsModalRef = bsModalRef;
        this.formBuilder = formBuilder;
        this.toastr = toastr;
        this.widgetsService = widgetsService;
        this.helperService = helperService;
        this.widgetsTypesService = widgetsTypesService;
        this.event = new _angular_core__WEBPACK_IMPORTED_MODULE_1__["EventEmitter"]();
        this.isFormSubmitted = false;
        this.isPageLoaded = false;
        this.editorOptions = { theme: 'vs-dark', language: 'html' };
    }
    Object.defineProperty(WidgetsCreateComponent.prototype, "widgetsControl", {
        get: function () {
            return this.createWidgetsForm.controls;
        },
        enumerable: true,
        configurable: true
    });
    WidgetsCreateComponent.prototype.ngOnInit = function () {
        this.onClose = new rxjs__WEBPACK_IMPORTED_MODULE_6__["Subject"]();
        this.getAllWidgetsTypes();
        this.loadForms();
    };
    WidgetsCreateComponent.prototype.getAllWidgetsTypes = function () {
        var _this = this;
        this.widgetsTypesService.getAll()
            .subscribe(function (data) {
            _this.widgetsTypesData = data;
        });
    };
    WidgetsCreateComponent.prototype.loadForms = function () {
        this.createWidgetsForm = this.formBuilder.group({
            name: [null, _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required],
            content_html: [''],
            description: [null],
            widget_type_id: [null, _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required],
        });
    };
    WidgetsCreateComponent.prototype.onSubmit = function () {
        var _this = this;
        this.isFormSubmitted = true;
        if (this.createWidgetsForm.invalid) {
            return;
        }
        this.widgetsService.create(this.createWidgetsForm.value)
            .subscribe(function (data) {
            _this.toastr.success(_this.translate.instant('settings_web.widgets.messages.create'), _this.translate.instant('settings_web.widgets.title'));
            _this.event.emit({ data: true });
            _this.onCancel();
        });
    };
    WidgetsCreateComponent.prototype.onCancel = function () {
        this.onClose.next(false);
        this.bsModalRef.hide();
    };
    WidgetsCreateComponent.ctorParameters = function () { return [
        { type: _ngx_translate_core__WEBPACK_IMPORTED_MODULE_5__["TranslateService"] },
        { type: ngx_bootstrap_modal__WEBPACK_IMPORTED_MODULE_3__["BsModalRef"] },
        { type: _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormBuilder"] },
        { type: ngx_toastr__WEBPACK_IMPORTED_MODULE_4__["ToastrService"] },
        { type: _core_services_widgets_service__WEBPACK_IMPORTED_MODULE_7__["WidgetsService"] },
        { type: _core_services_helper_service__WEBPACK_IMPORTED_MODULE_9__["HelperService"] },
        { type: _core_services_widgets_types_service__WEBPACK_IMPORTED_MODULE_8__["WidgetsTypesService"] }
    ]; };
    WidgetsCreateComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-widgets-create',
            template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./widgets-create.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/modules/settings-web/components/widgets-create/widgets-create.component.html")).default,
            styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./widgets-create.component.scss */ "./src/app/modules/settings-web/components/widgets-create/widgets-create.component.scss")).default]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_ngx_translate_core__WEBPACK_IMPORTED_MODULE_5__["TranslateService"],
            ngx_bootstrap_modal__WEBPACK_IMPORTED_MODULE_3__["BsModalRef"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormBuilder"],
            ngx_toastr__WEBPACK_IMPORTED_MODULE_4__["ToastrService"],
            _core_services_widgets_service__WEBPACK_IMPORTED_MODULE_7__["WidgetsService"],
            _core_services_helper_service__WEBPACK_IMPORTED_MODULE_9__["HelperService"],
            _core_services_widgets_types_service__WEBPACK_IMPORTED_MODULE_8__["WidgetsTypesService"]])
    ], WidgetsCreateComponent);
    return WidgetsCreateComponent;
}());



/***/ }),

/***/ "./src/app/modules/settings-web/components/widgets-edit-data/widgets-edit-data.component.scss":
/*!****************************************************************************************************!*\
  !*** ./src/app/modules/settings-web/components/widgets-edit-data/widgets-edit-data.component.scss ***!
  \****************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL21vZHVsZXMvc2V0dGluZ3Mtd2ViL2NvbXBvbmVudHMvd2lkZ2V0cy1lZGl0LWRhdGEvd2lkZ2V0cy1lZGl0LWRhdGEuY29tcG9uZW50LnNjc3MifQ== */");

/***/ }),

/***/ "./src/app/modules/settings-web/components/widgets-edit-data/widgets-edit-data.component.ts":
/*!**************************************************************************************************!*\
  !*** ./src/app/modules/settings-web/components/widgets-edit-data/widgets-edit-data.component.ts ***!
  \**************************************************************************************************/
/*! exports provided: WidgetsEditDataComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "WidgetsEditDataComponent", function() { return WidgetsEditDataComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var ngx_bootstrap_modal__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ngx-bootstrap/modal */ "./node_modules/ngx-bootstrap/modal/fesm5/ngx-bootstrap-modal.js");
/* harmony import */ var ngx_toastr__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ngx-toastr */ "./node_modules/ngx-toastr/fesm5/ngx-toastr.js");
/* harmony import */ var _ngx_translate_core__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @ngx-translate/core */ "./node_modules/@ngx-translate/core/fesm5/ngx-translate-core.js");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! rxjs */ "./node_modules/rxjs/_esm5/index.js");
/* harmony import */ var _core_services_widgets_service__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../../../../core/services/widgets.service */ "./src/app/core/services/widgets.service.ts");
/* harmony import */ var _core_services_widgets_types_service__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../../../../core/services/widgets-types.service */ "./src/app/core/services/widgets-types.service.ts");
/* harmony import */ var _core_services_helper_service__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../../../../core/services/helper.service */ "./src/app/core/services/helper.service.ts");










var WidgetsEditDataComponent = /** @class */ (function () {
    function WidgetsEditDataComponent(translate, bsModalRef, formBuilder, toastr, widgetsService, helperService, widgetsTypesService) {
        this.translate = translate;
        this.bsModalRef = bsModalRef;
        this.formBuilder = formBuilder;
        this.toastr = toastr;
        this.widgetsService = widgetsService;
        this.helperService = helperService;
        this.widgetsTypesService = widgetsTypesService;
        this.event = new _angular_core__WEBPACK_IMPORTED_MODULE_1__["EventEmitter"]();
        this.useData = [];
        this.isFormSubmitted = false;
        this.isPageLoaded = false;
        this.leftEcho = '{{';
        this.rightEcho = '}}';
        this.editorOptions = { theme: 'vs-dark', language: 'html' };
    }
    Object.defineProperty(WidgetsEditDataComponent.prototype, "widgetsControl", {
        get: function () {
            return this.editWidgetsForm.controls;
        },
        enumerable: true,
        configurable: true
    });
    WidgetsEditDataComponent.prototype.ngOnInit = function () {
        var that = this;
        this.onClose = new rxjs__WEBPACK_IMPORTED_MODULE_6__["Subject"]();
        this.data_hint_multiple = "@foreach($" + this.widgets.machine_name + "['multipleData'] as $value)<br>";
        that.customFieldsMultiple.forEach(function (customFieldsMultiple) {
            if (customFieldsMultiple.field_type == 'file') {
                that.data_hint_multiple = that.data_hint_multiple + "{{$file_path}}";
            }
            that.data_hint_multiple = that.data_hint_multiple + "{{$value['" + customFieldsMultiple.field_column + "']}}<br>";
        });
        that.data_hint_multiple = that.data_hint_multiple + "@endforeach";
        this.getUseData();
        this.getAllWidgetsTypes();
        this.loadForms();
    };
    WidgetsEditDataComponent.prototype.getAllWidgetsTypes = function () {
        var _this = this;
        this.widgetsTypesService.getAll()
            .subscribe(function (data) {
            _this.widgetsTypesData = data;
        });
    };
    WidgetsEditDataComponent.prototype.getUseData = function () {
        var _this = this;
        this.widgetsService.getUseData()
            .subscribe(function (data) {
            _this.AllDataWidget = data;
            if (_this.widgets.data_type) {
                for (var i = 0; i < _this.AllDataWidget.length; ++i) {
                    if (_this.AllDataWidget[i].id == _this.widgets.data_type) {
                        _this.useDataChange(_this.AllDataWidget[i], 'load');
                    }
                }
            }
        });
    };
    WidgetsEditDataComponent.prototype.useDataChange = function (data, action) {
        if (action != 'load') {
            this.editWidgetsForm.controls['data_id'].setValue([[]]);
        }
        if (data && data.data) {
            this.useData = data.data;
            this.editWidgetsForm.get('data_id').setValidators([_angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required]);
            this.editWidgetsForm.get('data_id').updateValueAndValidity();
            this.data_hint = data.data_hint;
        }
        else {
            this.editWidgetsForm.get('data_id').setValidators([]);
            this.editWidgetsForm.get('data_id').updateValueAndValidity();
            this.data_hint = '';
        }
    };
    WidgetsEditDataComponent.prototype.loadForms = function () {
        this.editWidgetsForm = this.formBuilder.group({
            id: [this.widgets.id],
            name: [this.widgets.name, _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required],
            description: [this.widgets.description],
            widget_type_id: [{ value: this.widgets.widget_type_id, disabled: true }, _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required],
            content_html: [this.widgets.content_html, _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required],
            data_type: [this.widgets.data_type],
            data_id: [this.widgets.data_id],
            custom_field: this.formBuilder.array([]),
            custom_field_multiple: this.formBuilder.array([])
        });
        this.isPageLoaded = true;
        if (this.widgets.custom_field_multiple && this.widgets.custom_field_multiple.length > 0) {
            this.addDynamicOptions('custom_field_multiple', this.widgets.custom_field_multiple, this.customFieldsMultiple);
        }
        else {
            this.addOption('custom_field_multiple', this.customFieldsMultiple);
        }
        if (this.widgets.custom_field && this.widgets.custom_field.length > 0) {
            this.addDynamicOptions('custom_field', this.widgets.custom_field, this.customFields);
        }
        else {
            this.addOption('custom_field', this.customFields);
        }
    };
    WidgetsEditDataComponent.prototype.addOption = function (key, dataBuildField) {
        var control = this.editWidgetsForm.controls[key];
        var dataBuild = [];
        dataBuildField.forEach(function (element) {
            if (element.is_required == 1) {
                dataBuild[element.field_column] = [null, _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required];
            }
            else {
                dataBuild[element.field_column] = [null];
            }
        });
        control.push(this.formBuilder.group(dataBuild));
    };
    WidgetsEditDataComponent.prototype.dropzoneCallback = function (data) {
        var _a;
        var control = this.editWidgetsForm.get(data.parentFormArrayName).at(data.parentFormGroupName);
        control.patchValue((_a = {},
            _a[data.parentFormControlName] = data.file,
            _a));
    };
    WidgetsEditDataComponent.prototype.deleteOption = function (index) {
        var control = this.editWidgetsForm.controls.custom_field_multiple;
        control.removeAt(index);
    };
    WidgetsEditDataComponent.prototype.addDynamicOptions = function (key, options, dataBuildField) {
        var that = this;
        options.forEach(function (elementParent) {
            var dataBuild = [];
            var control = that.editWidgetsForm.controls[key];
            dataBuildField.forEach(function (element) {
                if (element.is_required == 1) {
                    dataBuild[element.field_column] = [elementParent[element.field_column], _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required];
                }
                else {
                    dataBuild[element.field_column] = [elementParent[element.field_column]];
                }
            });
            control.push(that.formBuilder.group(dataBuild));
        });
    };
    WidgetsEditDataComponent.prototype.onSubmit = function () {
        var _this = this;
        this.isFormSubmitted = true;
        if (this.editWidgetsForm.invalid) {
            return;
        }
        this.widgetsService.update(this.editWidgetsForm.value)
            .subscribe(function (data) {
            _this.toastr.success(_this.translate.instant('settings_web.widgets.messages.update'), _this.translate.instant('settings_web.widgets.title'));
            _this.event.emit({ data: true });
            _this.onCancel();
        });
    };
    WidgetsEditDataComponent.prototype.onCancel = function () {
        this.onClose.next(false);
        this.bsModalRef.hide();
    };
    WidgetsEditDataComponent.ctorParameters = function () { return [
        { type: _ngx_translate_core__WEBPACK_IMPORTED_MODULE_5__["TranslateService"] },
        { type: ngx_bootstrap_modal__WEBPACK_IMPORTED_MODULE_3__["BsModalRef"] },
        { type: _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormBuilder"] },
        { type: ngx_toastr__WEBPACK_IMPORTED_MODULE_4__["ToastrService"] },
        { type: _core_services_widgets_service__WEBPACK_IMPORTED_MODULE_7__["WidgetsService"] },
        { type: _core_services_helper_service__WEBPACK_IMPORTED_MODULE_9__["HelperService"] },
        { type: _core_services_widgets_types_service__WEBPACK_IMPORTED_MODULE_8__["WidgetsTypesService"] }
    ]; };
    WidgetsEditDataComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-widgets-edit-data',
            template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./widgets-edit-data.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/modules/settings-web/components/widgets-edit-data/widgets-edit-data.component.html")).default,
            styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./widgets-edit-data.component.scss */ "./src/app/modules/settings-web/components/widgets-edit-data/widgets-edit-data.component.scss")).default]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_ngx_translate_core__WEBPACK_IMPORTED_MODULE_5__["TranslateService"],
            ngx_bootstrap_modal__WEBPACK_IMPORTED_MODULE_3__["BsModalRef"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormBuilder"],
            ngx_toastr__WEBPACK_IMPORTED_MODULE_4__["ToastrService"],
            _core_services_widgets_service__WEBPACK_IMPORTED_MODULE_7__["WidgetsService"],
            _core_services_helper_service__WEBPACK_IMPORTED_MODULE_9__["HelperService"],
            _core_services_widgets_types_service__WEBPACK_IMPORTED_MODULE_8__["WidgetsTypesService"]])
    ], WidgetsEditDataComponent);
    return WidgetsEditDataComponent;
}());



/***/ }),

/***/ "./src/app/modules/settings-web/components/widgets-edit/widgets-edit.component.scss":
/*!******************************************************************************************!*\
  !*** ./src/app/modules/settings-web/components/widgets-edit/widgets-edit.component.scss ***!
  \******************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL21vZHVsZXMvc2V0dGluZ3Mtd2ViL2NvbXBvbmVudHMvd2lkZ2V0cy1lZGl0L3dpZGdldHMtZWRpdC5jb21wb25lbnQuc2NzcyJ9 */");

/***/ }),

/***/ "./src/app/modules/settings-web/components/widgets-edit/widgets-edit.component.ts":
/*!****************************************************************************************!*\
  !*** ./src/app/modules/settings-web/components/widgets-edit/widgets-edit.component.ts ***!
  \****************************************************************************************/
/*! exports provided: WidgetsEditComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "WidgetsEditComponent", function() { return WidgetsEditComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var ngx_bootstrap_modal__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ngx-bootstrap/modal */ "./node_modules/ngx-bootstrap/modal/fesm5/ngx-bootstrap-modal.js");
/* harmony import */ var ngx_toastr__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ngx-toastr */ "./node_modules/ngx-toastr/fesm5/ngx-toastr.js");
/* harmony import */ var _ngx_translate_core__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @ngx-translate/core */ "./node_modules/@ngx-translate/core/fesm5/ngx-translate-core.js");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! rxjs */ "./node_modules/rxjs/_esm5/index.js");
/* harmony import */ var _core_services_widgets_service__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../../../../core/services/widgets.service */ "./src/app/core/services/widgets.service.ts");
/* harmony import */ var _core_services_widgets_types_service__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../../../../core/services/widgets-types.service */ "./src/app/core/services/widgets-types.service.ts");
/* harmony import */ var _core_services_helper_service__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../../../../core/services/helper.service */ "./src/app/core/services/helper.service.ts");










var WidgetsEditComponent = /** @class */ (function () {
    function WidgetsEditComponent(translate, bsModalRef, formBuilder, toastr, widgetsService, helperService, widgetsTypesService) {
        this.translate = translate;
        this.bsModalRef = bsModalRef;
        this.formBuilder = formBuilder;
        this.toastr = toastr;
        this.widgetsService = widgetsService;
        this.helperService = helperService;
        this.widgetsTypesService = widgetsTypesService;
        this.event = new _angular_core__WEBPACK_IMPORTED_MODULE_1__["EventEmitter"]();
        this.isFormSubmitted = false;
        this.isPageLoaded = false;
        this.editorOptions = { theme: 'vs-dark', language: 'html' };
    }
    Object.defineProperty(WidgetsEditComponent.prototype, "widgetsControl", {
        get: function () {
            return this.editWidgetsForm.controls;
        },
        enumerable: true,
        configurable: true
    });
    WidgetsEditComponent.prototype.ngOnInit = function () {
        this.onClose = new rxjs__WEBPACK_IMPORTED_MODULE_6__["Subject"]();
        this.loadForms();
        this.getAllWidgetsTypes();
    };
    WidgetsEditComponent.prototype.getAllWidgetsTypes = function () {
        var _this = this;
        this.widgetsTypesService.getAll()
            .subscribe(function (data) {
            _this.widgetsTypesData = data;
        });
    };
    WidgetsEditComponent.prototype.loadForms = function () {
        this.editWidgetsForm = this.formBuilder.group({
            id: [this.widgets.id],
            name: [this.widgets.name, _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required],
            description: [this.widgets.description],
            widget_type_id: [this.widgets.widget_type_id, _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required],
            content_html: [this.widgets.content_html],
        });
        this.isPageLoaded = true;
    };
    WidgetsEditComponent.prototype.onSubmit = function () {
        var _this = this;
        this.isFormSubmitted = true;
        if (this.editWidgetsForm.invalid) {
            return;
        }
        this.widgetsService.update(this.editWidgetsForm.value)
            .subscribe(function (data) {
            _this.toastr.success(_this.translate.instant('settings_web.widgets.messages.update'), _this.translate.instant('settings_web.widgets.title'));
            _this.event.emit({ data: true });
            _this.onCancel();
        });
    };
    WidgetsEditComponent.prototype.onCancel = function () {
        this.onClose.next(false);
        this.bsModalRef.hide();
    };
    WidgetsEditComponent.ctorParameters = function () { return [
        { type: _ngx_translate_core__WEBPACK_IMPORTED_MODULE_5__["TranslateService"] },
        { type: ngx_bootstrap_modal__WEBPACK_IMPORTED_MODULE_3__["BsModalRef"] },
        { type: _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormBuilder"] },
        { type: ngx_toastr__WEBPACK_IMPORTED_MODULE_4__["ToastrService"] },
        { type: _core_services_widgets_service__WEBPACK_IMPORTED_MODULE_7__["WidgetsService"] },
        { type: _core_services_helper_service__WEBPACK_IMPORTED_MODULE_9__["HelperService"] },
        { type: _core_services_widgets_types_service__WEBPACK_IMPORTED_MODULE_8__["WidgetsTypesService"] }
    ]; };
    WidgetsEditComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-widgets-edit',
            template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./widgets-edit.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/modules/settings-web/components/widgets-edit/widgets-edit.component.html")).default,
            styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./widgets-edit.component.scss */ "./src/app/modules/settings-web/components/widgets-edit/widgets-edit.component.scss")).default]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_ngx_translate_core__WEBPACK_IMPORTED_MODULE_5__["TranslateService"],
            ngx_bootstrap_modal__WEBPACK_IMPORTED_MODULE_3__["BsModalRef"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormBuilder"],
            ngx_toastr__WEBPACK_IMPORTED_MODULE_4__["ToastrService"],
            _core_services_widgets_service__WEBPACK_IMPORTED_MODULE_7__["WidgetsService"],
            _core_services_helper_service__WEBPACK_IMPORTED_MODULE_9__["HelperService"],
            _core_services_widgets_types_service__WEBPACK_IMPORTED_MODULE_8__["WidgetsTypesService"]])
    ], WidgetsEditComponent);
    return WidgetsEditComponent;
}());



/***/ }),

/***/ "./src/app/modules/settings-web/components/widgets-types-create/widgets-types-create.component.scss":
/*!**********************************************************************************************************!*\
  !*** ./src/app/modules/settings-web/components/widgets-types-create/widgets-types-create.component.scss ***!
  \**********************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL21vZHVsZXMvc2V0dGluZ3Mtd2ViL2NvbXBvbmVudHMvd2lkZ2V0cy10eXBlcy1jcmVhdGUvd2lkZ2V0cy10eXBlcy1jcmVhdGUuY29tcG9uZW50LnNjc3MifQ== */");

/***/ }),

/***/ "./src/app/modules/settings-web/components/widgets-types-create/widgets-types-create.component.ts":
/*!********************************************************************************************************!*\
  !*** ./src/app/modules/settings-web/components/widgets-types-create/widgets-types-create.component.ts ***!
  \********************************************************************************************************/
/*! exports provided: WidgetsTypesCreateComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "WidgetsTypesCreateComponent", function() { return WidgetsTypesCreateComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var ngx_bootstrap_modal__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ngx-bootstrap/modal */ "./node_modules/ngx-bootstrap/modal/fesm5/ngx-bootstrap-modal.js");
/* harmony import */ var ngx_toastr__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ngx-toastr */ "./node_modules/ngx-toastr/fesm5/ngx-toastr.js");
/* harmony import */ var _ngx_translate_core__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @ngx-translate/core */ "./node_modules/@ngx-translate/core/fesm5/ngx-translate-core.js");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! rxjs */ "./node_modules/rxjs/_esm5/index.js");
/* harmony import */ var _core_services_widgets_types_service__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../../../../core/services/widgets-types.service */ "./src/app/core/services/widgets-types.service.ts");
/* harmony import */ var _core_services_templates_service__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../../../../core/services/templates.service */ "./src/app/core/services/templates.service.ts");
/* harmony import */ var _core_services_helper_service__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../../../../core/services/helper.service */ "./src/app/core/services/helper.service.ts");










var WidgetsTypesCreateComponent = /** @class */ (function () {
    function WidgetsTypesCreateComponent(translate, bsModalRef, formBuilder, toastr, widgets_typesService, templatesService, helperService) {
        this.translate = translate;
        this.bsModalRef = bsModalRef;
        this.formBuilder = formBuilder;
        this.toastr = toastr;
        this.widgets_typesService = widgets_typesService;
        this.templatesService = templatesService;
        this.helperService = helperService;
        this.event = new _angular_core__WEBPACK_IMPORTED_MODULE_1__["EventEmitter"]();
        this.isFormSubmitted = false;
        this.isWidgetsTypeLoaded = false;
        this.dataType = [
            { label: 'Basic', value: 0 },
            { label: 'Category', value: 1 },
            { label: 'Collection', value: 2 },
            { label: 'Products', value: 3 },
            { label: 'News', value: 4 }
        ];
        this.editorOptions = { theme: 'vs-dark', language: 'html' };
    }
    Object.defineProperty(WidgetsTypesCreateComponent.prototype, "widgetsTypesControl", {
        get: function () {
            return this.createWidgetsTypesForm.controls;
        },
        enumerable: true,
        configurable: true
    });
    WidgetsTypesCreateComponent.prototype.ngOnInit = function () {
        this.onClose = new rxjs__WEBPACK_IMPORTED_MODULE_6__["Subject"]();
        this.getAllTemplates();
        this.loadForms();
    };
    WidgetsTypesCreateComponent.prototype.getAllTemplates = function () {
        var _this = this;
        this.templatesService.getAll()
            .subscribe(function (data) {
            _this.templateData = data;
        });
    };
    WidgetsTypesCreateComponent.prototype.loadForms = function () {
        this.createWidgetsTypesForm = this.formBuilder.group({
            name: [null, _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required],
            description: [null],
        });
    };
    WidgetsTypesCreateComponent.prototype.onSubmit = function () {
        var _this = this;
        this.isFormSubmitted = true;
        if (this.createWidgetsTypesForm.invalid) {
            return;
        }
        this.widgets_typesService.create(this.createWidgetsTypesForm.value)
            .subscribe(function (data) {
            _this.toastr.success(_this.translate.instant('settings_web.widgets_types.messages.create'), _this.translate.instant('settings_web.widgets_types.title'));
            _this.event.emit({ data: true });
            _this.onCancel();
        });
    };
    WidgetsTypesCreateComponent.prototype.onCancel = function () {
        this.onClose.next(false);
        this.bsModalRef.hide();
    };
    WidgetsTypesCreateComponent.ctorParameters = function () { return [
        { type: _ngx_translate_core__WEBPACK_IMPORTED_MODULE_5__["TranslateService"] },
        { type: ngx_bootstrap_modal__WEBPACK_IMPORTED_MODULE_3__["BsModalRef"] },
        { type: _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormBuilder"] },
        { type: ngx_toastr__WEBPACK_IMPORTED_MODULE_4__["ToastrService"] },
        { type: _core_services_widgets_types_service__WEBPACK_IMPORTED_MODULE_7__["WidgetsTypesService"] },
        { type: _core_services_templates_service__WEBPACK_IMPORTED_MODULE_8__["TemplatesService"] },
        { type: _core_services_helper_service__WEBPACK_IMPORTED_MODULE_9__["HelperService"] }
    ]; };
    WidgetsTypesCreateComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-widgets-types-create',
            template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./widgets-types-create.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/modules/settings-web/components/widgets-types-create/widgets-types-create.component.html")).default,
            styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./widgets-types-create.component.scss */ "./src/app/modules/settings-web/components/widgets-types-create/widgets-types-create.component.scss")).default]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_ngx_translate_core__WEBPACK_IMPORTED_MODULE_5__["TranslateService"],
            ngx_bootstrap_modal__WEBPACK_IMPORTED_MODULE_3__["BsModalRef"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormBuilder"],
            ngx_toastr__WEBPACK_IMPORTED_MODULE_4__["ToastrService"],
            _core_services_widgets_types_service__WEBPACK_IMPORTED_MODULE_7__["WidgetsTypesService"],
            _core_services_templates_service__WEBPACK_IMPORTED_MODULE_8__["TemplatesService"],
            _core_services_helper_service__WEBPACK_IMPORTED_MODULE_9__["HelperService"]])
    ], WidgetsTypesCreateComponent);
    return WidgetsTypesCreateComponent;
}());



/***/ }),

/***/ "./src/app/modules/settings-web/components/widgets-types-edit/widgets-types-edit.component.scss":
/*!******************************************************************************************************!*\
  !*** ./src/app/modules/settings-web/components/widgets-types-edit/widgets-types-edit.component.scss ***!
  \******************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL21vZHVsZXMvc2V0dGluZ3Mtd2ViL2NvbXBvbmVudHMvd2lkZ2V0cy10eXBlcy1lZGl0L3dpZGdldHMtdHlwZXMtZWRpdC5jb21wb25lbnQuc2NzcyJ9 */");

/***/ }),

/***/ "./src/app/modules/settings-web/components/widgets-types-edit/widgets-types-edit.component.ts":
/*!****************************************************************************************************!*\
  !*** ./src/app/modules/settings-web/components/widgets-types-edit/widgets-types-edit.component.ts ***!
  \****************************************************************************************************/
/*! exports provided: WidgetsTypesEditComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "WidgetsTypesEditComponent", function() { return WidgetsTypesEditComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var ngx_bootstrap_modal__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ngx-bootstrap/modal */ "./node_modules/ngx-bootstrap/modal/fesm5/ngx-bootstrap-modal.js");
/* harmony import */ var ngx_toastr__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ngx-toastr */ "./node_modules/ngx-toastr/fesm5/ngx-toastr.js");
/* harmony import */ var _ngx_translate_core__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @ngx-translate/core */ "./node_modules/@ngx-translate/core/fesm5/ngx-translate-core.js");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! rxjs */ "./node_modules/rxjs/_esm5/index.js");
/* harmony import */ var _core_services_widgets_types_service__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../../../../core/services/widgets-types.service */ "./src/app/core/services/widgets-types.service.ts");
/* harmony import */ var _core_services_templates_service__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../../../../core/services/templates.service */ "./src/app/core/services/templates.service.ts");
/* harmony import */ var _core_services_helper_service__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../../../../core/services/helper.service */ "./src/app/core/services/helper.service.ts");










var WidgetsTypesEditComponent = /** @class */ (function () {
    function WidgetsTypesEditComponent(translate, bsModalRef, formBuilder, toastr, widgets_typesService, helperService, templatesService) {
        this.translate = translate;
        this.bsModalRef = bsModalRef;
        this.formBuilder = formBuilder;
        this.toastr = toastr;
        this.widgets_typesService = widgets_typesService;
        this.helperService = helperService;
        this.templatesService = templatesService;
        this.event = new _angular_core__WEBPACK_IMPORTED_MODULE_1__["EventEmitter"]();
        this.isFormSubmitted = false;
        this.isWidgetsTypeLoaded = false;
        this.editorOptions = { theme: 'vs-dark', language: 'html' };
    }
    Object.defineProperty(WidgetsTypesEditComponent.prototype, "widgetsTypesControl", {
        get: function () {
            return this.editWidgetsTypesForm.controls;
        },
        enumerable: true,
        configurable: true
    });
    WidgetsTypesEditComponent.prototype.ngOnInit = function () {
        this.onClose = new rxjs__WEBPACK_IMPORTED_MODULE_6__["Subject"]();
        this.getAllTemplates();
        this.loadForms();
    };
    WidgetsTypesEditComponent.prototype.getAllTemplates = function () {
        var _this = this;
        this.templatesService.getAll()
            .subscribe(function (data) {
            _this.templateData = data;
        });
    };
    WidgetsTypesEditComponent.prototype.loadForms = function () {
        this.editWidgetsTypesForm = this.formBuilder.group({
            id: [this.widgets_types.id],
            name: [this.widgets_types.name, _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required],
            description: [this.widgets_types.description],
        });
        this.isWidgetsTypeLoaded = true;
    };
    WidgetsTypesEditComponent.prototype.onSubmit = function () {
        var _this = this;
        this.isFormSubmitted = true;
        if (this.editWidgetsTypesForm.invalid) {
            return;
        }
        this.widgets_typesService.update(this.editWidgetsTypesForm.value)
            .subscribe(function (data) {
            _this.toastr.success(_this.translate.instant('settings_web.widgets_types.messages.update'), _this.translate.instant('settings_web.widgets_types.title'));
            _this.event.emit({ data: true });
            _this.onCancel();
        });
    };
    WidgetsTypesEditComponent.prototype.onCancel = function () {
        this.onClose.next(false);
        this.bsModalRef.hide();
    };
    WidgetsTypesEditComponent.ctorParameters = function () { return [
        { type: _ngx_translate_core__WEBPACK_IMPORTED_MODULE_5__["TranslateService"] },
        { type: ngx_bootstrap_modal__WEBPACK_IMPORTED_MODULE_3__["BsModalRef"] },
        { type: _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormBuilder"] },
        { type: ngx_toastr__WEBPACK_IMPORTED_MODULE_4__["ToastrService"] },
        { type: _core_services_widgets_types_service__WEBPACK_IMPORTED_MODULE_7__["WidgetsTypesService"] },
        { type: _core_services_helper_service__WEBPACK_IMPORTED_MODULE_9__["HelperService"] },
        { type: _core_services_templates_service__WEBPACK_IMPORTED_MODULE_8__["TemplatesService"] }
    ]; };
    WidgetsTypesEditComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-widgets-types-edit',
            template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./widgets-types-edit.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/modules/settings-web/components/widgets-types-edit/widgets-types-edit.component.html")).default,
            styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./widgets-types-edit.component.scss */ "./src/app/modules/settings-web/components/widgets-types-edit/widgets-types-edit.component.scss")).default]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_ngx_translate_core__WEBPACK_IMPORTED_MODULE_5__["TranslateService"],
            ngx_bootstrap_modal__WEBPACK_IMPORTED_MODULE_3__["BsModalRef"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormBuilder"],
            ngx_toastr__WEBPACK_IMPORTED_MODULE_4__["ToastrService"],
            _core_services_widgets_types_service__WEBPACK_IMPORTED_MODULE_7__["WidgetsTypesService"],
            _core_services_helper_service__WEBPACK_IMPORTED_MODULE_9__["HelperService"],
            _core_services_templates_service__WEBPACK_IMPORTED_MODULE_8__["TemplatesService"]])
    ], WidgetsTypesEditComponent);
    return WidgetsTypesEditComponent;
}());



/***/ }),

/***/ "./src/app/modules/settings-web/components/widgets-types/widgets-types.component.scss":
/*!********************************************************************************************!*\
  !*** ./src/app/modules/settings-web/components/widgets-types/widgets-types.component.scss ***!
  \********************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("::ng-deep .odd {\n  display: none;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvbW9kdWxlcy9zZXR0aW5ncy13ZWIvY29tcG9uZW50cy93aWRnZXRzLXR5cGVzL0M6XFxVc2Vyc1xcdGh1YW5cXE9uZURyaXZlXFxEZXNrdG9wXFxnbGF2YWwtdGh1YW5kaW5oL3NyY1xcYXBwXFxtb2R1bGVzXFxzZXR0aW5ncy13ZWJcXGNvbXBvbmVudHNcXHdpZGdldHMtdHlwZXNcXHdpZGdldHMtdHlwZXMuY29tcG9uZW50LnNjc3MiLCJzcmMvYXBwL21vZHVsZXMvc2V0dGluZ3Mtd2ViL2NvbXBvbmVudHMvd2lkZ2V0cy10eXBlcy93aWRnZXRzLXR5cGVzLmNvbXBvbmVudC5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0ksYUFBQTtBQ0NKIiwiZmlsZSI6InNyYy9hcHAvbW9kdWxlcy9zZXR0aW5ncy13ZWIvY29tcG9uZW50cy93aWRnZXRzLXR5cGVzL3dpZGdldHMtdHlwZXMuY29tcG9uZW50LnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyI6Om5nLWRlZXAgLm9kZCB7XHJcbiAgICBkaXNwbGF5OiBub25lXHJcbn1cclxuIiwiOjpuZy1kZWVwIC5vZGQge1xuICBkaXNwbGF5OiBub25lO1xufSJdfQ== */");

/***/ }),

/***/ "./src/app/modules/settings-web/components/widgets-types/widgets-types.component.ts":
/*!******************************************************************************************!*\
  !*** ./src/app/modules/settings-web/components/widgets-types/widgets-types.component.ts ***!
  \******************************************************************************************/
/*! exports provided: WidgetsTypesComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "WidgetsTypesComponent", function() { return WidgetsTypesComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var ngx_bootstrap_modal__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ngx-bootstrap/modal */ "./node_modules/ngx-bootstrap/modal/fesm5/ngx-bootstrap-modal.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");
/* harmony import */ var ngx_export_as__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ngx-export-as */ "./node_modules/ngx-export-as/fesm2015/ngx-export-as.js");
/* harmony import */ var ngx_toastr__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ngx-toastr */ "./node_modules/ngx-toastr/fesm5/ngx-toastr.js");
/* harmony import */ var _ngx_translate_core__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @ngx-translate/core */ "./node_modules/@ngx-translate/core/fesm5/ngx-translate-core.js");
/* harmony import */ var angular_datatables__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! angular-datatables */ "./node_modules/angular-datatables/index.js");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! rxjs */ "./node_modules/rxjs/_esm5/index.js");
/* harmony import */ var sweetalert2__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! sweetalert2 */ "./node_modules/sweetalert2/dist/sweetalert2.all.js");
/* harmony import */ var sweetalert2__WEBPACK_IMPORTED_MODULE_9___default = /*#__PURE__*/__webpack_require__.n(sweetalert2__WEBPACK_IMPORTED_MODULE_9__);
/* harmony import */ var _core_services_widgets_types_service__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ../../../../core/services/widgets-types.service */ "./src/app/core/services/widgets-types.service.ts");
/* harmony import */ var _core_services_helper_service__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ../../../../core/services/helper.service */ "./src/app/core/services/helper.service.ts");
/* harmony import */ var _core_services_authentication_service__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ../../../../core/services/authentication.service */ "./src/app/core/services/authentication.service.ts");
/* harmony import */ var _widgets_types_create_widgets_types_create_component__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ../widgets-types-create/widgets-types-create.component */ "./src/app/modules/settings-web/components/widgets-types-create/widgets-types-create.component.ts");
/* harmony import */ var _widgets_types_edit_widgets_types_edit_component__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ../widgets-types-edit/widgets-types-edit.component */ "./src/app/modules/settings-web/components/widgets-types-edit/widgets-types-edit.component.ts");
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! ../../../../../environments/environment */ "./src/environments/environment.ts");
/* harmony import */ var datatables_net__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! datatables.net */ "./node_modules/datatables.net/js/jquery.dataTables.js");
/* harmony import */ var datatables_net__WEBPACK_IMPORTED_MODULE_16___default = /*#__PURE__*/__webpack_require__.n(datatables_net__WEBPACK_IMPORTED_MODULE_16__);
/* harmony import */ var datatables_net_bs4__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! datatables.net-bs4 */ "./node_modules/datatables.net-bs4/js/dataTables.bootstrap4.js");
/* harmony import */ var datatables_net_bs4__WEBPACK_IMPORTED_MODULE_17___default = /*#__PURE__*/__webpack_require__.n(datatables_net_bs4__WEBPACK_IMPORTED_MODULE_17__);


















var WidgetsTypesComponent = /** @class */ (function () {
    function WidgetsTypesComponent(translate, modalService, http, exportAsService, toastr, authenticationService, widgets_typesService, helperService) {
        var _this = this;
        this.translate = translate;
        this.modalService = modalService;
        this.http = http;
        this.exportAsService = exportAsService;
        this.toastr = toastr;
        this.authenticationService = authenticationService;
        this.widgets_typesService = widgets_typesService;
        this.helperService = helperService;
        this.dtTrigger = new rxjs__WEBPACK_IMPORTED_MODULE_8__["Subject"]();
        this.dtOptions = {};
        this.widgets_types = [];
        this.exportAsConfig = {
            type: 'pdf',
            elementIdOrContent: 'custom_field_table',
        };
        this.modalConfigs = {
            animated: true,
            keyboard: true,
            backdrop: true,
            ignoreBackdropClick: false,
            class: 'inmodal modal-dialog-centered animated fadeIn modal-lg'
        };
        this.apiUrl = _environments_environment__WEBPACK_IMPORTED_MODULE_15__["environment"].apiUrl;
        this.authenticationService.loginUser.subscribe(function (x) { return _this.loginUser = x; });
    }
    WidgetsTypesComponent.prototype.ngOnInit = function () {
        // this.getAllFormFields();
        this.loadWidgetsTypeDatatable();
    };
    WidgetsTypesComponent.prototype.loadWidgetsTypeDatatable = function () {
        var _this = this;
        var that = this;
        this.dtOptions = {
            pagingType: 'full_numbers',
            widgets_typeLength: that.loginUser.settings.tables_pagination_limit,
            serverSide: true,
            processing: true,
            dom: '<"html5buttons"B>ltfrtip',
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
                    'sortable': false,
                    'width': '5%',
                    'target': [3]
                }],
            buttons: [{
                    extend: 'csv',
                    title: this.translate.instant('settings_web.widgets_types.title'),
                    className: 'btn btn-datatable-gredient',
                    action: function (e, dt, node, config) {
                        that.exportFiles('csv');
                    }
                }, {
                    extend: 'excel',
                    title: this.translate.instant('settings_web.widgets_types.title'),
                    className: 'btn btn-datatable-gredient',
                    action: function (e, dt, node, config) {
                        that.exportFiles('xlsx');
                    }
                }, {
                    extend: 'pdf',
                    title: this.translate.instant('settings_web.widgets_types.title'),
                    className: 'btn btn-datatable-gredient',
                    action: function (e, dt, node, config) {
                        that.exportFiles('pdf');
                    }
                }],
            language: {
                sLengthMenu: 'Show _MENU_',
                sSearch: '',
                sSearchPlaceholder: 'Search ...'
            },
            ajax: function (dataTablesParameters, callback) {
                _this.http
                    .post(_this.apiUrl + '/api/all-widget-types', dataTablesParameters, {})
                    .subscribe(function (resp) {
                    _this.widgets_types = resp.data;
                    callback({
                        recordsTotal: resp.recordsTotal,
                        recordsFiltered: resp.recordsFiltered,
                        data: [],
                    });
                });
            }
        };
    };
    WidgetsTypesComponent.prototype.exportFiles = function (type) {
        this.exportAsConfig.type = type;
        this.exportAsService.save(this.exportAsConfig, 'widgets-type').subscribe(function () {
        });
    };
    WidgetsTypesComponent.prototype.ngAfterViewInit = function () {
        this.dtTrigger.next();
    };
    WidgetsTypesComponent.prototype.ngOnDestroy = function () {
        this.dtTrigger.unsubscribe();
    };
    WidgetsTypesComponent.prototype.rerender = function () {
        var _this = this;
        this.dtElement.dtInstance.then(function (dtInstance) {
            dtInstance.destroy();
            setTimeout(function () {
                _this.dtTrigger.next();
                if (_this.widgets_types.length > 0) {
                    $('.tfoot_dt').addClass('d-none');
                }
                else {
                    $('.tfoot_dt').removeClass('d-none');
                }
            });
        });
    };
    WidgetsTypesComponent.prototype.openWidgetsTypeCreateModal = function () {
        var _this = this;
        this.modalRef = this.modalService.show(_widgets_types_create_widgets_types_create_component__WEBPACK_IMPORTED_MODULE_13__["WidgetsTypesCreateComponent"], this.modalConfigs);
        this.modalRef.content.event.subscribe(function (data) {
            _this.rerender();
        });
    };
    WidgetsTypesComponent.prototype.openWidgetsTypeEditModal = function (WidgetsTypes) {
        var _this = this;
        this.widgets_typesService.getById(WidgetsTypes.id)
            .subscribe(function (resp) {
            var modalConfig = {
                animated: true,
                keyboard: true,
                backdrop: true,
                ignoreBackdropClick: false,
                class: 'inmodal modal-dialog-centered animated fadeIn modal-lg',
                initialState: {
                    widgets_types: resp
                }
            };
            _this.modalRef = _this.modalService.show(_widgets_types_edit_widgets_types_edit_component__WEBPACK_IMPORTED_MODULE_14__["WidgetsTypesEditComponent"], modalConfig);
            _this.modalRef.content.event.subscribe(function (data) {
                _this.rerender();
            });
        });
    };
    WidgetsTypesComponent.prototype.removeWidgetsType = function (id) {
        var _this = this;
        sweetalert2__WEBPACK_IMPORTED_MODULE_9___default.a.fire({
            title: this.translate.instant('common.swal.title'),
            text: this.translate.instant('common.swal.text') + ' ' + this.translate.instant('settings_web.widgets_types.title1'),
            type: 'warning',
            showCancelButton: true,
            confirmButtonText: this.translate.instant('common.swal.confirmButtonText'),
            cancelButtonText: this.translate.instant('common.swal.cancelButtonText')
        }).then(function (result) {
            if (result.value) {
                _this.widgets_typesService.delete(id)
                    .subscribe(function (data) {
                    _this.toastr.success(_this.translate.instant('settings_web.widgets_types.messages.delete'), _this.translate.instant('settings_web.widgets_types.title'));
                    _this.rerender();
                });
            }
        });
    };
    WidgetsTypesComponent.ctorParameters = function () { return [
        { type: _ngx_translate_core__WEBPACK_IMPORTED_MODULE_6__["TranslateService"] },
        { type: ngx_bootstrap_modal__WEBPACK_IMPORTED_MODULE_2__["BsModalService"] },
        { type: _angular_common_http__WEBPACK_IMPORTED_MODULE_3__["HttpClient"] },
        { type: ngx_export_as__WEBPACK_IMPORTED_MODULE_4__["ExportAsService"] },
        { type: ngx_toastr__WEBPACK_IMPORTED_MODULE_5__["ToastrService"] },
        { type: _core_services_authentication_service__WEBPACK_IMPORTED_MODULE_12__["AuthenticationService"] },
        { type: _core_services_widgets_types_service__WEBPACK_IMPORTED_MODULE_10__["WidgetsTypesService"] },
        { type: _core_services_helper_service__WEBPACK_IMPORTED_MODULE_11__["HelperService"] }
    ]; };
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewChild"])(angular_datatables__WEBPACK_IMPORTED_MODULE_7__["DataTableDirective"], { static: true }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", angular_datatables__WEBPACK_IMPORTED_MODULE_7__["DataTableDirective"])
    ], WidgetsTypesComponent.prototype, "dtElement", void 0);
    WidgetsTypesComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-widgets-types',
            template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./widgets-types.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/modules/settings-web/components/widgets-types/widgets-types.component.html")).default,
            styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./widgets-types.component.scss */ "./src/app/modules/settings-web/components/widgets-types/widgets-types.component.scss")).default]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_ngx_translate_core__WEBPACK_IMPORTED_MODULE_6__["TranslateService"],
            ngx_bootstrap_modal__WEBPACK_IMPORTED_MODULE_2__["BsModalService"],
            _angular_common_http__WEBPACK_IMPORTED_MODULE_3__["HttpClient"],
            ngx_export_as__WEBPACK_IMPORTED_MODULE_4__["ExportAsService"],
            ngx_toastr__WEBPACK_IMPORTED_MODULE_5__["ToastrService"],
            _core_services_authentication_service__WEBPACK_IMPORTED_MODULE_12__["AuthenticationService"],
            _core_services_widgets_types_service__WEBPACK_IMPORTED_MODULE_10__["WidgetsTypesService"],
            _core_services_helper_service__WEBPACK_IMPORTED_MODULE_11__["HelperService"]])
    ], WidgetsTypesComponent);
    return WidgetsTypesComponent;
}());



/***/ }),

/***/ "./src/app/modules/settings-web/components/widgets/widgets.component.scss":
/*!********************************************************************************!*\
  !*** ./src/app/modules/settings-web/components/widgets/widgets.component.scss ***!
  \********************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("::ng-deep .odd {\n  display: none;\n}\n\n::ng-deep ngx-monaco-editor {\n  height: 400px !important;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvbW9kdWxlcy9zZXR0aW5ncy13ZWIvY29tcG9uZW50cy93aWRnZXRzL0M6XFxVc2Vyc1xcdGh1YW5cXE9uZURyaXZlXFxEZXNrdG9wXFxnbGF2YWwtdGh1YW5kaW5oL3NyY1xcYXBwXFxtb2R1bGVzXFxzZXR0aW5ncy13ZWJcXGNvbXBvbmVudHNcXHdpZGdldHNcXHdpZGdldHMuY29tcG9uZW50LnNjc3MiLCJzcmMvYXBwL21vZHVsZXMvc2V0dGluZ3Mtd2ViL2NvbXBvbmVudHMvd2lkZ2V0cy93aWRnZXRzLmNvbXBvbmVudC5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0ksYUFBQTtBQ0NKOztBREVBO0VBQ0ksd0JBQUE7QUNDSiIsImZpbGUiOiJzcmMvYXBwL21vZHVsZXMvc2V0dGluZ3Mtd2ViL2NvbXBvbmVudHMvd2lkZ2V0cy93aWRnZXRzLmNvbXBvbmVudC5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiOjpuZy1kZWVwIC5vZGQge1xyXG4gICAgZGlzcGxheTogbm9uZVxyXG59XHJcblxyXG46Om5nLWRlZXAgbmd4LW1vbmFjby1lZGl0b3Ige1xyXG4gICAgaGVpZ2h0OiA0MDBweCAhaW1wb3J0YW50O1xyXG59XHJcbiIsIjo6bmctZGVlcCAub2RkIHtcbiAgZGlzcGxheTogbm9uZTtcbn1cblxuOjpuZy1kZWVwIG5neC1tb25hY28tZWRpdG9yIHtcbiAgaGVpZ2h0OiA0MDBweCAhaW1wb3J0YW50O1xufSJdfQ== */");

/***/ }),

/***/ "./src/app/modules/settings-web/components/widgets/widgets.component.ts":
/*!******************************************************************************!*\
  !*** ./src/app/modules/settings-web/components/widgets/widgets.component.ts ***!
  \******************************************************************************/
/*! exports provided: WidgetsComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "WidgetsComponent", function() { return WidgetsComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var ngx_bootstrap_modal__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ngx-bootstrap/modal */ "./node_modules/ngx-bootstrap/modal/fesm5/ngx-bootstrap-modal.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");
/* harmony import */ var ngx_export_as__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ngx-export-as */ "./node_modules/ngx-export-as/fesm2015/ngx-export-as.js");
/* harmony import */ var ngx_toastr__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ngx-toastr */ "./node_modules/ngx-toastr/fesm5/ngx-toastr.js");
/* harmony import */ var _ngx_translate_core__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @ngx-translate/core */ "./node_modules/@ngx-translate/core/fesm5/ngx-translate-core.js");
/* harmony import */ var angular_datatables__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! angular-datatables */ "./node_modules/angular-datatables/index.js");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! rxjs */ "./node_modules/rxjs/_esm5/index.js");
/* harmony import */ var sweetalert2__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! sweetalert2 */ "./node_modules/sweetalert2/dist/sweetalert2.all.js");
/* harmony import */ var sweetalert2__WEBPACK_IMPORTED_MODULE_9___default = /*#__PURE__*/__webpack_require__.n(sweetalert2__WEBPACK_IMPORTED_MODULE_9__);
/* harmony import */ var _core_services_widgets_service__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ../../../../core/services/widgets.service */ "./src/app/core/services/widgets.service.ts");
/* harmony import */ var _core_services_helper_service__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ../../../../core/services/helper.service */ "./src/app/core/services/helper.service.ts");
/* harmony import */ var _core_services_authentication_service__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ../../../../core/services/authentication.service */ "./src/app/core/services/authentication.service.ts");
/* harmony import */ var _widgets_create_widgets_create_component__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ../widgets-create/widgets-create.component */ "./src/app/modules/settings-web/components/widgets-create/widgets-create.component.ts");
/* harmony import */ var _widgets_edit_widgets_edit_component__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ../widgets-edit/widgets-edit.component */ "./src/app/modules/settings-web/components/widgets-edit/widgets-edit.component.ts");
/* harmony import */ var _widgets_edit_data_widgets_edit_data_component__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! ../widgets-edit-data/widgets-edit-data.component */ "./src/app/modules/settings-web/components/widgets-edit-data/widgets-edit-data.component.ts");
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! ../../../../../environments/environment */ "./src/environments/environment.ts");
/* harmony import */ var datatables_net__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! datatables.net */ "./node_modules/datatables.net/js/jquery.dataTables.js");
/* harmony import */ var datatables_net__WEBPACK_IMPORTED_MODULE_17___default = /*#__PURE__*/__webpack_require__.n(datatables_net__WEBPACK_IMPORTED_MODULE_17__);
/* harmony import */ var datatables_net_bs4__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! datatables.net-bs4 */ "./node_modules/datatables.net-bs4/js/dataTables.bootstrap4.js");
/* harmony import */ var datatables_net_bs4__WEBPACK_IMPORTED_MODULE_18___default = /*#__PURE__*/__webpack_require__.n(datatables_net_bs4__WEBPACK_IMPORTED_MODULE_18__);



















var WidgetsComponent = /** @class */ (function () {
    function WidgetsComponent(translate, modalService, http, exportAsService, toastr, authenticationService, widgetsService, helperService) {
        var _this = this;
        this.translate = translate;
        this.modalService = modalService;
        this.http = http;
        this.exportAsService = exportAsService;
        this.toastr = toastr;
        this.authenticationService = authenticationService;
        this.widgetsService = widgetsService;
        this.helperService = helperService;
        this.dtTrigger = new rxjs__WEBPACK_IMPORTED_MODULE_8__["Subject"]();
        this.dtOptions = {};
        this.widgets = [];
        this.exportAsConfig = {
            type: 'pdf',
            elementIdOrContent: 'custom_field_table',
        };
        this.modalConfigs = {
            animated: true,
            keyboard: true,
            backdrop: true,
            ignoreBackdropClick: false,
            class: 'inmodal modal-dialog-centered animated fadeIn modal-lg'
        };
        this.apiUrl = _environments_environment__WEBPACK_IMPORTED_MODULE_16__["environment"].apiUrl;
        this.authenticationService.loginUser.subscribe(function (x) { return _this.loginUser = x; });
    }
    WidgetsComponent.prototype.ngOnInit = function () {
        // this.getAllFormFields();
        this.loadWidgetDatatable();
    };
    WidgetsComponent.prototype.loadWidgetDatatable = function () {
        var _this = this;
        var that = this;
        this.dtOptions = {
            pagingType: 'full_numbers',
            pageLength: that.loginUser.settings.tables_pagination_limit,
            serverSide: true,
            processing: true,
            dom: '<"html5buttons"B>ltfrtip',
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
                    'sortable': false,
                    'target': [3]
                }, {
                    'sortable': false,
                    'width': '5%',
                    'target': [4]
                }],
            buttons: [{
                    extend: 'csv',
                    title: this.translate.instant('settings_web.widgets.title'),
                    className: 'btn btn-datatable-gredient',
                    action: function (e, dt, node, config) {
                        that.exportFiles('csv');
                    }
                }, {
                    extend: 'excel',
                    title: this.translate.instant('settings_web.widgets.title'),
                    className: 'btn btn-datatable-gredient',
                    action: function (e, dt, node, config) {
                        that.exportFiles('xlsx');
                    }
                }, {
                    extend: 'pdf',
                    title: this.translate.instant('settings_web.widgets.title'),
                    className: 'btn btn-datatable-gredient',
                    action: function (e, dt, node, config) {
                        that.exportFiles('pdf');
                    }
                }],
            language: {
                sLengthMenu: 'Show _MENU_',
                sSearch: '',
                sSearchPlaceholder: 'Search ...'
            },
            ajax: function (dataTablesParameters, callback) {
                _this.http
                    .post(_this.apiUrl + '/api/all-widgets', dataTablesParameters, {})
                    .subscribe(function (resp) {
                    _this.widgets = resp.data;
                    callback({
                        recordsTotal: resp.recordsTotal,
                        recordsFiltered: resp.recordsFiltered,
                        data: [],
                    });
                });
            }
        };
    };
    WidgetsComponent.prototype.exportFiles = function (type) {
        this.exportAsConfig.type = type;
        this.exportAsService.save(this.exportAsConfig, 'widget').subscribe(function () {
        });
    };
    WidgetsComponent.prototype.ngAfterViewInit = function () {
        this.dtTrigger.next();
    };
    WidgetsComponent.prototype.ngOnDestroy = function () {
        this.dtTrigger.unsubscribe();
    };
    WidgetsComponent.prototype.rerender = function () {
        var _this = this;
        this.dtElement.dtInstance.then(function (dtInstance) {
            dtInstance.destroy();
            setTimeout(function () {
                _this.dtTrigger.next();
                if (_this.widgets.length > 0) {
                    $('.tfoot_dt').addClass('d-none');
                }
                else {
                    $('.tfoot_dt').removeClass('d-none');
                }
            });
        });
    };
    WidgetsComponent.prototype.openWidgetCreateModal = function () {
        var _this = this;
        this.modalRef = this.modalService.show(_widgets_create_widgets_create_component__WEBPACK_IMPORTED_MODULE_13__["WidgetsCreateComponent"], this.modalConfigs);
        this.modalRef.content.event.subscribe(function (data) {
            _this.rerender();
        });
    };
    WidgetsComponent.prototype.openWidgetEditModal = function (Widgets) {
        var _this = this;
        this.widgetsService.getById(Widgets.id)
            .subscribe(function (resp) {
            var modalConfig = {
                animated: true,
                keyboard: true,
                backdrop: true,
                ignoreBackdropClick: false,
                class: 'inmodal modal-dialog-centered animated fadeIn modal-lg',
                initialState: {
                    widgets: resp['data']
                }
            };
            _this.modalRef = _this.modalService.show(_widgets_edit_widgets_edit_component__WEBPACK_IMPORTED_MODULE_14__["WidgetsEditComponent"], modalConfig);
            _this.modalRef.content.event.subscribe(function (data) {
                _this.rerender();
            });
        });
    };
    WidgetsComponent.prototype.openWidgetEditDataModal = function (Widgets) {
        var _this = this;
        this.widgetsService.getById(Widgets.id)
            .subscribe(function (resp) {
            var modalConfig = {
                animated: true,
                keyboard: true,
                backdrop: true,
                ignoreBackdropClick: false,
                class: 'inmodal modal-dialog-centered animated fadeIn modal-lg',
                initialState: {
                    widgets: resp['data'],
                    customFields: resp['customFields']['single'],
                    customFieldsMultiple: resp['customFields']['multiple']
                }
            };
            _this.modalRef = _this.modalService.show(_widgets_edit_data_widgets_edit_data_component__WEBPACK_IMPORTED_MODULE_15__["WidgetsEditDataComponent"], modalConfig);
            _this.modalRef.content.event.subscribe(function (data) {
                _this.rerender();
            });
        });
    };
    WidgetsComponent.prototype.removeWidget = function (id) {
        var _this = this;
        sweetalert2__WEBPACK_IMPORTED_MODULE_9___default.a.fire({
            title: this.translate.instant('common.swal.title'),
            text: this.translate.instant('common.swal.text') + ' ' + this.translate.instant('settings_web.widgets.title1'),
            type: 'warning',
            showCancelButton: true,
            confirmButtonText: this.translate.instant('common.swal.confirmButtonText'),
            cancelButtonText: this.translate.instant('common.swal.cancelButtonText')
        }).then(function (result) {
            if (result.value) {
                _this.widgetsService.delete(id)
                    .subscribe(function (data) {
                    _this.toastr.success(_this.translate.instant('settings_web.widgets.messages.delete'), _this.translate.instant('settings_web.widgets.title'));
                    _this.rerender();
                });
            }
        });
    };
    WidgetsComponent.ctorParameters = function () { return [
        { type: _ngx_translate_core__WEBPACK_IMPORTED_MODULE_6__["TranslateService"] },
        { type: ngx_bootstrap_modal__WEBPACK_IMPORTED_MODULE_2__["BsModalService"] },
        { type: _angular_common_http__WEBPACK_IMPORTED_MODULE_3__["HttpClient"] },
        { type: ngx_export_as__WEBPACK_IMPORTED_MODULE_4__["ExportAsService"] },
        { type: ngx_toastr__WEBPACK_IMPORTED_MODULE_5__["ToastrService"] },
        { type: _core_services_authentication_service__WEBPACK_IMPORTED_MODULE_12__["AuthenticationService"] },
        { type: _core_services_widgets_service__WEBPACK_IMPORTED_MODULE_10__["WidgetsService"] },
        { type: _core_services_helper_service__WEBPACK_IMPORTED_MODULE_11__["HelperService"] }
    ]; };
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewChild"])(angular_datatables__WEBPACK_IMPORTED_MODULE_7__["DataTableDirective"], { static: true }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", angular_datatables__WEBPACK_IMPORTED_MODULE_7__["DataTableDirective"])
    ], WidgetsComponent.prototype, "dtElement", void 0);
    WidgetsComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-widgets',
            template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./widgets.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/modules/settings-web/components/widgets/widgets.component.html")).default,
            styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./widgets.component.scss */ "./src/app/modules/settings-web/components/widgets/widgets.component.scss")).default]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_ngx_translate_core__WEBPACK_IMPORTED_MODULE_6__["TranslateService"],
            ngx_bootstrap_modal__WEBPACK_IMPORTED_MODULE_2__["BsModalService"],
            _angular_common_http__WEBPACK_IMPORTED_MODULE_3__["HttpClient"],
            ngx_export_as__WEBPACK_IMPORTED_MODULE_4__["ExportAsService"],
            ngx_toastr__WEBPACK_IMPORTED_MODULE_5__["ToastrService"],
            _core_services_authentication_service__WEBPACK_IMPORTED_MODULE_12__["AuthenticationService"],
            _core_services_widgets_service__WEBPACK_IMPORTED_MODULE_10__["WidgetsService"],
            _core_services_helper_service__WEBPACK_IMPORTED_MODULE_11__["HelperService"]])
    ], WidgetsComponent);
    return WidgetsComponent;
}());



/***/ }),

/***/ "./src/app/modules/settings-web/pages/manager-file/manager-file.component.scss":
/*!*************************************************************************************!*\
  !*** ./src/app/modules/settings-web/pages/manager-file/manager-file.component.scss ***!
  \*************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = (".hide_empty_message ::ng-deep .odd {\n  display: none;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvbW9kdWxlcy9zZXR0aW5ncy13ZWIvcGFnZXMvbWFuYWdlci1maWxlL0M6XFxVc2Vyc1xcdGh1YW5cXE9uZURyaXZlXFxEZXNrdG9wXFxnbGF2YWwtdGh1YW5kaW5oL3NyY1xcYXBwXFxtb2R1bGVzXFxzZXR0aW5ncy13ZWJcXHBhZ2VzXFxtYW5hZ2VyLWZpbGVcXG1hbmFnZXItZmlsZS5jb21wb25lbnQuc2NzcyIsInNyYy9hcHAvbW9kdWxlcy9zZXR0aW5ncy13ZWIvcGFnZXMvbWFuYWdlci1maWxlL21hbmFnZXItZmlsZS5jb21wb25lbnQuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNJLGFBQUE7QUNDSiIsImZpbGUiOiJzcmMvYXBwL21vZHVsZXMvc2V0dGluZ3Mtd2ViL3BhZ2VzL21hbmFnZXItZmlsZS9tYW5hZ2VyLWZpbGUuY29tcG9uZW50LnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyIuaGlkZV9lbXB0eV9tZXNzYWdlIDo6bmctZGVlcCAub2RkIHtcclxuICAgIGRpc3BsYXk6IG5vbmVcclxufSIsIi5oaWRlX2VtcHR5X21lc3NhZ2UgOjpuZy1kZWVwIC5vZGQge1xuICBkaXNwbGF5OiBub25lO1xufSJdfQ== */");

/***/ }),

/***/ "./src/app/modules/settings-web/pages/manager-file/manager-file.component.ts":
/*!***********************************************************************************!*\
  !*** ./src/app/modules/settings-web/pages/manager-file/manager-file.component.ts ***!
  \***********************************************************************************/
/*! exports provided: ManagerFileComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ManagerFileComponent", function() { return ManagerFileComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var ngx_bootstrap_modal__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ngx-bootstrap/modal */ "./node_modules/ngx-bootstrap/modal/fesm5/ngx-bootstrap-modal.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");
/* harmony import */ var ngx_export_as__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ngx-export-as */ "./node_modules/ngx-export-as/fesm2015/ngx-export-as.js");
/* harmony import */ var ngx_toastr__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ngx-toastr */ "./node_modules/ngx-toastr/fesm5/ngx-toastr.js");
/* harmony import */ var _ngx_translate_core__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @ngx-translate/core */ "./node_modules/@ngx-translate/core/fesm5/ngx-translate-core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _core_services_helper_service__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../../../../core/services/helper.service */ "./src/app/core/services/helper.service.ts");
/* harmony import */ var _core_services_authentication_service__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../../../../core/services/authentication.service */ "./src/app/core/services/authentication.service.ts");
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ../../../../../environments/environment */ "./src/environments/environment.ts");











var ManagerFileComponent = /** @class */ (function () {
    function ManagerFileComponent(translate, modalService, http, exportAsService, toastr, authenticationService, 
    // private templatesService: TemplatesService,
    router, route, helperService) {
        var _this = this;
        this.translate = translate;
        this.modalService = modalService;
        this.http = http;
        this.exportAsService = exportAsService;
        this.toastr = toastr;
        this.authenticationService = authenticationService;
        this.router = router;
        this.route = route;
        this.helperService = helperService;
        this.apiUrl = _environments_environment__WEBPACK_IMPORTED_MODULE_10__["environment"].apiUrl;
        this.authenticationService.loginUser.subscribe(function (x) { return _this.loginUser = x; });
        this.route.paramMap.subscribe(function (params) {
            _this.params = params;
        });
    }
    ManagerFileComponent.prototype.ngOnInit = function () {
    };
    ManagerFileComponent.ctorParameters = function () { return [
        { type: _ngx_translate_core__WEBPACK_IMPORTED_MODULE_6__["TranslateService"] },
        { type: ngx_bootstrap_modal__WEBPACK_IMPORTED_MODULE_2__["BsModalService"] },
        { type: _angular_common_http__WEBPACK_IMPORTED_MODULE_3__["HttpClient"] },
        { type: ngx_export_as__WEBPACK_IMPORTED_MODULE_4__["ExportAsService"] },
        { type: ngx_toastr__WEBPACK_IMPORTED_MODULE_5__["ToastrService"] },
        { type: _core_services_authentication_service__WEBPACK_IMPORTED_MODULE_9__["AuthenticationService"] },
        { type: _angular_router__WEBPACK_IMPORTED_MODULE_7__["Router"] },
        { type: _angular_router__WEBPACK_IMPORTED_MODULE_7__["ActivatedRoute"] },
        { type: _core_services_helper_service__WEBPACK_IMPORTED_MODULE_8__["HelperService"] }
    ]; };
    ManagerFileComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-manager-file',
            template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./manager-file.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/modules/settings-web/pages/manager-file/manager-file.component.html")).default,
            styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./manager-file.component.scss */ "./src/app/modules/settings-web/pages/manager-file/manager-file.component.scss")).default]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_ngx_translate_core__WEBPACK_IMPORTED_MODULE_6__["TranslateService"],
            ngx_bootstrap_modal__WEBPACK_IMPORTED_MODULE_2__["BsModalService"],
            _angular_common_http__WEBPACK_IMPORTED_MODULE_3__["HttpClient"],
            ngx_export_as__WEBPACK_IMPORTED_MODULE_4__["ExportAsService"],
            ngx_toastr__WEBPACK_IMPORTED_MODULE_5__["ToastrService"],
            _core_services_authentication_service__WEBPACK_IMPORTED_MODULE_9__["AuthenticationService"],
            _angular_router__WEBPACK_IMPORTED_MODULE_7__["Router"],
            _angular_router__WEBPACK_IMPORTED_MODULE_7__["ActivatedRoute"],
            _core_services_helper_service__WEBPACK_IMPORTED_MODULE_8__["HelperService"]])
    ], ManagerFileComponent);
    return ManagerFileComponent;
}());



/***/ }),

/***/ "./src/app/modules/settings-web/pages/manager-regions/manager-regions.component.scss":
/*!*******************************************************************************************!*\
  !*** ./src/app/modules/settings-web/pages/manager-regions/manager-regions.component.scss ***!
  \*******************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = (".hide_empty_message ::ng-deep .odd {\n  display: none;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvbW9kdWxlcy9zZXR0aW5ncy13ZWIvcGFnZXMvbWFuYWdlci1yZWdpb25zL0M6XFxVc2Vyc1xcdGh1YW5cXE9uZURyaXZlXFxEZXNrdG9wXFxnbGF2YWwtdGh1YW5kaW5oL3NyY1xcYXBwXFxtb2R1bGVzXFxzZXR0aW5ncy13ZWJcXHBhZ2VzXFxtYW5hZ2VyLXJlZ2lvbnNcXG1hbmFnZXItcmVnaW9ucy5jb21wb25lbnQuc2NzcyIsInNyYy9hcHAvbW9kdWxlcy9zZXR0aW5ncy13ZWIvcGFnZXMvbWFuYWdlci1yZWdpb25zL21hbmFnZXItcmVnaW9ucy5jb21wb25lbnQuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNJLGFBQUE7QUNDSiIsImZpbGUiOiJzcmMvYXBwL21vZHVsZXMvc2V0dGluZ3Mtd2ViL3BhZ2VzL21hbmFnZXItcmVnaW9ucy9tYW5hZ2VyLXJlZ2lvbnMuY29tcG9uZW50LnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyIuaGlkZV9lbXB0eV9tZXNzYWdlIDo6bmctZGVlcCAub2RkIHtcclxuICAgIGRpc3BsYXk6IG5vbmVcclxufVxyXG5cclxuXHJcbiIsIi5oaWRlX2VtcHR5X21lc3NhZ2UgOjpuZy1kZWVwIC5vZGQge1xuICBkaXNwbGF5OiBub25lO1xufSJdfQ== */");

/***/ }),

/***/ "./src/app/modules/settings-web/pages/manager-regions/manager-regions.component.ts":
/*!*****************************************************************************************!*\
  !*** ./src/app/modules/settings-web/pages/manager-regions/manager-regions.component.ts ***!
  \*****************************************************************************************/
/*! exports provided: ManagerRegionsComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ManagerRegionsComponent", function() { return ManagerRegionsComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var ngx_bootstrap_modal__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ngx-bootstrap/modal */ "./node_modules/ngx-bootstrap/modal/fesm5/ngx-bootstrap-modal.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");
/* harmony import */ var ngx_export_as__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ngx-export-as */ "./node_modules/ngx-export-as/fesm2015/ngx-export-as.js");
/* harmony import */ var ngx_toastr__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ngx-toastr */ "./node_modules/ngx-toastr/fesm5/ngx-toastr.js");
/* harmony import */ var _ngx_translate_core__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @ngx-translate/core */ "./node_modules/@ngx-translate/core/fesm5/ngx-translate-core.js");
/* harmony import */ var angular_datatables__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! angular-datatables */ "./node_modules/angular-datatables/index.js");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! rxjs */ "./node_modules/rxjs/_esm5/index.js");
/* harmony import */ var sweetalert2__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! sweetalert2 */ "./node_modules/sweetalert2/dist/sweetalert2.all.js");
/* harmony import */ var sweetalert2__WEBPACK_IMPORTED_MODULE_9___default = /*#__PURE__*/__webpack_require__.n(sweetalert2__WEBPACK_IMPORTED_MODULE_9__);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _core_services_templates_service__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ../../../../core/services/templates.service */ "./src/app/core/services/templates.service.ts");
/* harmony import */ var _core_services_helper_service__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ../../../../core/services/helper.service */ "./src/app/core/services/helper.service.ts");
/* harmony import */ var _core_services_authentication_service__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ../../../../core/services/authentication.service */ "./src/app/core/services/authentication.service.ts");
/* harmony import */ var _components_manager_regions_create_manager_regions_create_component__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ../../components/manager-regions-create/manager-regions-create.component */ "./src/app/modules/settings-web/components/manager-regions-create/manager-regions-create.component.ts");
/* harmony import */ var _components_manager_regions_edit_manager_regions_edit_component__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! ../../components/manager-regions-edit/manager-regions-edit.component */ "./src/app/modules/settings-web/components/manager-regions-edit/manager-regions-edit.component.ts");
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! ../../../../../environments/environment */ "./src/environments/environment.ts");
/* harmony import */ var datatables_net__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! datatables.net */ "./node_modules/datatables.net/js/jquery.dataTables.js");
/* harmony import */ var datatables_net__WEBPACK_IMPORTED_MODULE_17___default = /*#__PURE__*/__webpack_require__.n(datatables_net__WEBPACK_IMPORTED_MODULE_17__);
/* harmony import */ var datatables_net_bs4__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! datatables.net-bs4 */ "./node_modules/datatables.net-bs4/js/dataTables.bootstrap4.js");
/* harmony import */ var datatables_net_bs4__WEBPACK_IMPORTED_MODULE_18___default = /*#__PURE__*/__webpack_require__.n(datatables_net_bs4__WEBPACK_IMPORTED_MODULE_18__);



















var ManagerRegionsComponent = /** @class */ (function () {
    function ManagerRegionsComponent(translate, modalService, http, exportAsService, toastr, authenticationService, templatesService, router, route, helperService) {
        var _this = this;
        this.translate = translate;
        this.modalService = modalService;
        this.http = http;
        this.exportAsService = exportAsService;
        this.toastr = toastr;
        this.authenticationService = authenticationService;
        this.templatesService = templatesService;
        this.router = router;
        this.route = route;
        this.helperService = helperService;
        this.apiUrl = _environments_environment__WEBPACK_IMPORTED_MODULE_16__["environment"].apiUrl;
        this.dtTrigger = new rxjs__WEBPACK_IMPORTED_MODULE_8__["Subject"]();
        this.dtOptions = {};
        this.managerRegions = [];
        this.templateData = [];
        this.exportAsConfig = {
            type: 'pdf',
            elementIdOrContent: 'custom_field_table',
        };
        this.modalConfigs = {
            animated: true,
            keyboard: true,
            backdrop: true,
            ignoreBackdropClick: false,
            class: 'inmodal modal-dialog-centered animated fadeIn modal-lg',
            initialState: {}
        };
        this.authenticationService.loginUser.subscribe(function (x) { return _this.loginUser = x; });
        this.route.paramMap.subscribe(function (params) {
            _this.params = params;
        });
    }
    ManagerRegionsComponent.prototype.ngOnInit = function () {
        // this.getAllFormFields();
        this.loadManagerRegionDatatable();
    };
    ManagerRegionsComponent.prototype.loadManagerRegionDatatable = function () {
        var _this = this;
        var that = this;
        this.dtOptions = {
            // template_id: params.get('id'),
            pagingType: 'full_numbers',
            pageLength: that.loginUser.settings.tables_pagination_limit,
            serverSide: true,
            processing: true,
            dom: '<"html5buttons"B>ltfrtip',
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
                    'width': '5%',
                    'target': [4]
                }],
            buttons: [{
                    extend: 'csv',
                    title: this.translate.instant('settings_web.manager-regions.title'),
                    className: 'btn btn-datatable-gredient',
                    action: function (e, dt, node, config) {
                        that.exportFiles('csv');
                    }
                }, {
                    extend: 'excel',
                    title: this.translate.instant('settings_web.manager-regions.title'),
                    className: 'btn btn-datatable-gredient',
                    action: function (e, dt, node, config) {
                        that.exportFiles('xlsx');
                    }
                }, {
                    extend: 'pdf',
                    title: this.translate.instant('settings_web.manager-regions.title'),
                    className: 'btn btn-datatable-gredient',
                    action: function (e, dt, node, config) {
                        that.exportFiles('pdf');
                    }
                }],
            language: {
                sLengthMenu: 'Show _MENU_',
                sSearch: '',
                sSearchPlaceholder: 'Search ...'
            },
            ajax: function (dataTablesParameters, callback) {
                dataTablesParameters.template_id = _this.params.get('id');
                _this.http
                    .post(_this.apiUrl + '/api/all-manager-regions', dataTablesParameters, {})
                    .subscribe(function (resp) {
                    _this.managerRegions = resp.data;
                    _this.templateData = resp.parentData;
                    callback({
                        recordsTotal: resp.recordsTotal,
                        recordsFiltered: resp.recordsFiltered,
                        data: [],
                    });
                });
            }
        };
    };
    ManagerRegionsComponent.prototype.exportFiles = function (type) {
        this.exportAsConfig.type = type;
        this.exportAsService.save(this.exportAsConfig, 'managerRegion').subscribe(function () {
        });
    };
    ManagerRegionsComponent.prototype.ngAfterViewInit = function () {
        this.dtTrigger.next();
    };
    ManagerRegionsComponent.prototype.ngOnDestroy = function () {
        this.dtTrigger.unsubscribe();
    };
    ManagerRegionsComponent.prototype.rerender = function () {
        var _this = this;
        this.dtElement.dtInstance.then(function (dtInstance) {
            dtInstance.destroy();
            setTimeout(function () {
                _this.dtTrigger.next();
                if (_this.managerRegions.length > 0) {
                    $('.tfoot_dt').addClass('d-none');
                }
                else {
                    $('.tfoot_dt').removeClass('d-none');
                }
            });
        });
    };
    ManagerRegionsComponent.prototype.openManagerRegionCreateModal = function () {
        var _this = this;
        var modalConfig = {
            animated: true,
            keyboard: true,
            backdrop: true,
            ignoreBackdropClick: false,
            class: 'inmodal modal-dialog-centered animated fadeIn modal-lg',
            initialState: {
                managerRegions: {
                    templates_id: this.params.get('id')
                }
            }
        };
        this.modalRef = this.modalService.show(_components_manager_regions_create_manager_regions_create_component__WEBPACK_IMPORTED_MODULE_14__["ManagerRegionsCreateComponent"], modalConfig);
        this.modalRef.content.event.subscribe(function (data) {
            _this.rerender();
        });
    };
    ManagerRegionsComponent.prototype.openManagerRegionEditModal = function (ManagerRegions) {
        var _this = this;
        this.templatesService.getRegionById(ManagerRegions.id)
            .subscribe(function (resp) {
            var modalConfig = {
                animated: true,
                keyboard: true,
                backdrop: true,
                ignoreBackdropClick: false,
                class: 'inmodal modal-dialog-centered animated fadeIn modal-lg',
                initialState: {
                    managerRegions: resp
                }
            };
            _this.modalRef = _this.modalService.show(_components_manager_regions_edit_manager_regions_edit_component__WEBPACK_IMPORTED_MODULE_15__["ManagerRegionsEditComponent"], modalConfig);
            _this.modalRef.content.event.subscribe(function (data) {
                _this.rerender();
            });
        });
    };
    ManagerRegionsComponent.prototype.removeManagerRegion = function (id) {
        var _this = this;
        sweetalert2__WEBPACK_IMPORTED_MODULE_9___default.a.fire({
            title: this.translate.instant('common.swal.title'),
            text: this.translate.instant('common.swal.text') + ' ' + this.translate.instant('settings_web.manager_regions.title'),
            type: 'warning',
            showCancelButton: true,
            confirmButtonText: this.translate.instant('common.swal.confirmButtonText'),
            cancelButtonText: this.translate.instant('common.swal.cancelButtonText')
        }).then(function (result) {
            if (result.value) {
                _this.templatesService.deleteManagerRegion(id)
                    .subscribe(function (data) {
                    _this.toastr.success(_this.translate.instant('settings_web.manager_regions.messages.delete'), _this.translate.instant('settings_web.manager_regions.title'));
                    _this.rerender();
                });
            }
        });
    };
    ManagerRegionsComponent.prototype.changeStatus = function (event, id) {
        var _this = this;
        this.templatesService.changeStatus({ id: id, status: event })
            .subscribe(function (data) {
            _this.toastr.success(_this.translate.instant('settings_web.manager_regions.messages.status'), _this.translate.instant('settings_web.manager_regions.title'));
            _this.rerender();
        });
    };
    ManagerRegionsComponent.ctorParameters = function () { return [
        { type: _ngx_translate_core__WEBPACK_IMPORTED_MODULE_6__["TranslateService"] },
        { type: ngx_bootstrap_modal__WEBPACK_IMPORTED_MODULE_2__["BsModalService"] },
        { type: _angular_common_http__WEBPACK_IMPORTED_MODULE_3__["HttpClient"] },
        { type: ngx_export_as__WEBPACK_IMPORTED_MODULE_4__["ExportAsService"] },
        { type: ngx_toastr__WEBPACK_IMPORTED_MODULE_5__["ToastrService"] },
        { type: _core_services_authentication_service__WEBPACK_IMPORTED_MODULE_13__["AuthenticationService"] },
        { type: _core_services_templates_service__WEBPACK_IMPORTED_MODULE_11__["TemplatesService"] },
        { type: _angular_router__WEBPACK_IMPORTED_MODULE_10__["Router"] },
        { type: _angular_router__WEBPACK_IMPORTED_MODULE_10__["ActivatedRoute"] },
        { type: _core_services_helper_service__WEBPACK_IMPORTED_MODULE_12__["HelperService"] }
    ]; };
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewChild"])(angular_datatables__WEBPACK_IMPORTED_MODULE_7__["DataTableDirective"], { static: true }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", angular_datatables__WEBPACK_IMPORTED_MODULE_7__["DataTableDirective"])
    ], ManagerRegionsComponent.prototype, "dtElement", void 0);
    ManagerRegionsComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-manager-regions',
            template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./manager-regions.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/modules/settings-web/pages/manager-regions/manager-regions.component.html")).default,
            styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./manager-regions.component.scss */ "./src/app/modules/settings-web/pages/manager-regions/manager-regions.component.scss")).default]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_ngx_translate_core__WEBPACK_IMPORTED_MODULE_6__["TranslateService"],
            ngx_bootstrap_modal__WEBPACK_IMPORTED_MODULE_2__["BsModalService"],
            _angular_common_http__WEBPACK_IMPORTED_MODULE_3__["HttpClient"],
            ngx_export_as__WEBPACK_IMPORTED_MODULE_4__["ExportAsService"],
            ngx_toastr__WEBPACK_IMPORTED_MODULE_5__["ToastrService"],
            _core_services_authentication_service__WEBPACK_IMPORTED_MODULE_13__["AuthenticationService"],
            _core_services_templates_service__WEBPACK_IMPORTED_MODULE_11__["TemplatesService"],
            _angular_router__WEBPACK_IMPORTED_MODULE_10__["Router"],
            _angular_router__WEBPACK_IMPORTED_MODULE_10__["ActivatedRoute"],
            _core_services_helper_service__WEBPACK_IMPORTED_MODULE_12__["HelperService"]])
    ], ManagerRegionsComponent);
    return ManagerRegionsComponent;
}());



/***/ }),

/***/ "./src/app/modules/settings-web/pages/manager-widgets-types/manager-widgets-types.component.scss":
/*!*******************************************************************************************************!*\
  !*** ./src/app/modules/settings-web/pages/manager-widgets-types/manager-widgets-types.component.scss ***!
  \*******************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = (".hide_empty_message ::ng-deep .odd {\n  display: none;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvbW9kdWxlcy9zZXR0aW5ncy13ZWIvcGFnZXMvbWFuYWdlci13aWRnZXRzLXR5cGVzL0M6XFxVc2Vyc1xcdGh1YW5cXE9uZURyaXZlXFxEZXNrdG9wXFxnbGF2YWwtdGh1YW5kaW5oL3NyY1xcYXBwXFxtb2R1bGVzXFxzZXR0aW5ncy13ZWJcXHBhZ2VzXFxtYW5hZ2VyLXdpZGdldHMtdHlwZXNcXG1hbmFnZXItd2lkZ2V0cy10eXBlcy5jb21wb25lbnQuc2NzcyIsInNyYy9hcHAvbW9kdWxlcy9zZXR0aW5ncy13ZWIvcGFnZXMvbWFuYWdlci13aWRnZXRzLXR5cGVzL21hbmFnZXItd2lkZ2V0cy10eXBlcy5jb21wb25lbnQuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNJLGFBQUE7QUNDSiIsImZpbGUiOiJzcmMvYXBwL21vZHVsZXMvc2V0dGluZ3Mtd2ViL3BhZ2VzL21hbmFnZXItd2lkZ2V0cy10eXBlcy9tYW5hZ2VyLXdpZGdldHMtdHlwZXMuY29tcG9uZW50LnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyIuaGlkZV9lbXB0eV9tZXNzYWdlIDo6bmctZGVlcCAub2RkIHtcclxuICAgIGRpc3BsYXk6IG5vbmVcclxufVxyXG5cclxuXHJcbiIsIi5oaWRlX2VtcHR5X21lc3NhZ2UgOjpuZy1kZWVwIC5vZGQge1xuICBkaXNwbGF5OiBub25lO1xufSJdfQ== */");

/***/ }),

/***/ "./src/app/modules/settings-web/pages/manager-widgets-types/manager-widgets-types.component.ts":
/*!*****************************************************************************************************!*\
  !*** ./src/app/modules/settings-web/pages/manager-widgets-types/manager-widgets-types.component.ts ***!
  \*****************************************************************************************************/
/*! exports provided: ManagerWidgetTypesComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ManagerWidgetTypesComponent", function() { return ManagerWidgetTypesComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var ngx_bootstrap_modal__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ngx-bootstrap/modal */ "./node_modules/ngx-bootstrap/modal/fesm5/ngx-bootstrap-modal.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");
/* harmony import */ var ngx_export_as__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ngx-export-as */ "./node_modules/ngx-export-as/fesm2015/ngx-export-as.js");
/* harmony import */ var ngx_toastr__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ngx-toastr */ "./node_modules/ngx-toastr/fesm5/ngx-toastr.js");
/* harmony import */ var _ngx_translate_core__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @ngx-translate/core */ "./node_modules/@ngx-translate/core/fesm5/ngx-translate-core.js");
/* harmony import */ var angular_datatables__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! angular-datatables */ "./node_modules/angular-datatables/index.js");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! rxjs */ "./node_modules/rxjs/_esm5/index.js");
/* harmony import */ var sweetalert2__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! sweetalert2 */ "./node_modules/sweetalert2/dist/sweetalert2.all.js");
/* harmony import */ var sweetalert2__WEBPACK_IMPORTED_MODULE_9___default = /*#__PURE__*/__webpack_require__.n(sweetalert2__WEBPACK_IMPORTED_MODULE_9__);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _core_services_widgets_types_service__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ../../../../core/services/widgets-types.service */ "./src/app/core/services/widgets-types.service.ts");
/* harmony import */ var _core_services_helper_service__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ../../../../core/services/helper.service */ "./src/app/core/services/helper.service.ts");
/* harmony import */ var _core_services_authentication_service__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ../../../../core/services/authentication.service */ "./src/app/core/services/authentication.service.ts");
/* harmony import */ var _components_manager_widgets_types_create_manager_widgets_types_create_component__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ../../components/manager-widgets-types-create/manager-widgets-types-create.component */ "./src/app/modules/settings-web/components/manager-widgets-types-create/manager-widgets-types-create.component.ts");
/* harmony import */ var _components_manager_widgets_types_edit_manager_widgets_types_edit_component__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! ../../components/manager-widgets-types-edit/manager-widgets-types-edit.component */ "./src/app/modules/settings-web/components/manager-widgets-types-edit/manager-widgets-types-edit.component.ts");
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! ../../../../../environments/environment */ "./src/environments/environment.ts");
/* harmony import */ var datatables_net__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! datatables.net */ "./node_modules/datatables.net/js/jquery.dataTables.js");
/* harmony import */ var datatables_net__WEBPACK_IMPORTED_MODULE_17___default = /*#__PURE__*/__webpack_require__.n(datatables_net__WEBPACK_IMPORTED_MODULE_17__);
/* harmony import */ var datatables_net_bs4__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! datatables.net-bs4 */ "./node_modules/datatables.net-bs4/js/dataTables.bootstrap4.js");
/* harmony import */ var datatables_net_bs4__WEBPACK_IMPORTED_MODULE_18___default = /*#__PURE__*/__webpack_require__.n(datatables_net_bs4__WEBPACK_IMPORTED_MODULE_18__);



















var ManagerWidgetTypesComponent = /** @class */ (function () {
    function ManagerWidgetTypesComponent(translate, modalService, http, exportAsService, toastr, authenticationService, widgetsTypesService, router, route, helperService) {
        var _this = this;
        this.translate = translate;
        this.modalService = modalService;
        this.http = http;
        this.exportAsService = exportAsService;
        this.toastr = toastr;
        this.authenticationService = authenticationService;
        this.widgetsTypesService = widgetsTypesService;
        this.router = router;
        this.route = route;
        this.helperService = helperService;
        this.apiUrl = _environments_environment__WEBPACK_IMPORTED_MODULE_16__["environment"].apiUrl;
        this.dtTrigger = new rxjs__WEBPACK_IMPORTED_MODULE_8__["Subject"]();
        this.dtOptions = {};
        this.dataWidgetType = [];
        this.managerWidgetTypes = [];
        this.exportAsConfig = {
            type: 'pdf',
            elementIdOrContent: 'custom_field_table',
        };
        this.modalConfigs = {
            animated: true,
            keyboard: true,
            backdrop: true,
            ignoreBackdropClick: false,
            class: 'inmodal modal-dialog-centered animated fadeIn modal-lg',
            initialState: {}
        };
        this.authenticationService.loginUser.subscribe(function (x) { return _this.loginUser = x; });
        this.route.paramMap.subscribe(function (params) {
            _this.params = params;
        });
    }
    ManagerWidgetTypesComponent.prototype.ngOnInit = function () {
        // this.getAllFormFields();
        this.loadManagerWidgetTypeDatatable();
    };
    ManagerWidgetTypesComponent.prototype.loadManagerWidgetTypeDatatable = function () {
        var _this = this;
        var that = this;
        this.dtOptions = {
            pagingType: 'full_numbers',
            widgetsTypeLength: that.loginUser.settings.tables_pagination_limit,
            serverSide: true,
            processing: true,
            dom: '<"html5buttons"B>ltfrtip',
            columns: [{
                    'sortable': false,
                    'target': [0]
                }, {
                    'sortable': false,
                    'target': [1]
                }, {
                    'sortable': false,
                    'target': [2]
                }, {
                    'sortable': false,
                    'target': [3]
                }, {
                    'sortable': false,
                    'target': [4]
                }, {
                    'sortable': false,
                    'width': '5%',
                    'target': [4]
                }],
            buttons: [{
                    extend: 'csv',
                    title: this.translate.instant('settings_web.manager_widgets_types.title'),
                    className: 'btn btn-datatable-gredient',
                    action: function (e, dt, node, config) {
                        that.exportFiles('csv');
                    }
                }, {
                    extend: 'excel',
                    title: this.translate.instant('settings_web.manager_widgets_types.title'),
                    className: 'btn btn-datatable-gredient',
                    action: function (e, dt, node, config) {
                        that.exportFiles('xlsx');
                    }
                }, {
                    extend: 'pdf',
                    title: this.translate.instant('settings_web.manager_widgets_types.title'),
                    className: 'btn btn-datatable-gredient',
                    action: function (e, dt, node, config) {
                        that.exportFiles('pdf');
                    }
                }],
            language: {
                sLengthMenu: 'Show _MENU_',
                sSearch: '',
                sSearchPlaceholder: 'Search ...'
            },
            ajax: function (dataTablesParameters, callback) {
                dataTablesParameters.widget_type_id = _this.params.get('id');
                _this.http
                    .post(_this.apiUrl + '/api/all-manager-widgets-types', dataTablesParameters, {})
                    .subscribe(function (resp) {
                    _this.managerWidgetTypes = resp.data;
                    _this.dataWidgetType = resp.parentData;
                    callback({
                        recordsTotal: resp.recordsTotal,
                        recordsFiltered: resp.recordsFiltered,
                        data: [],
                    });
                });
            }
        };
    };
    ManagerWidgetTypesComponent.prototype.exportFiles = function (type) {
        this.exportAsConfig.type = type;
        this.exportAsService.save(this.exportAsConfig, 'managerWidgetType').subscribe(function () {
        });
    };
    ManagerWidgetTypesComponent.prototype.ngAfterViewInit = function () {
        this.dtTrigger.next();
    };
    ManagerWidgetTypesComponent.prototype.ngOnDestroy = function () {
        this.dtTrigger.unsubscribe();
    };
    ManagerWidgetTypesComponent.prototype.rerender = function () {
        var _this = this;
        this.dtElement.dtInstance.then(function (dtInstance) {
            dtInstance.destroy();
            setTimeout(function () {
                _this.dtTrigger.next();
                if (_this.managerWidgetTypes.length > 0) {
                    $('.tfoot_dt').addClass('d-none');
                }
                else {
                    $('.tfoot_dt').removeClass('d-none');
                }
            });
        });
    };
    ManagerWidgetTypesComponent.prototype.openManagerWidgetTypeCreateModal = function () {
        var _this = this;
        var modalConfig = {
            animated: true,
            keyboard: true,
            backdrop: true,
            ignoreBackdropClick: false,
            class: 'inmodal modal-dialog-centered animated fadeIn modal-lg',
            initialState: {
                managerWidgetsTypes: {
                    widget_type_id: this.params.get('id')
                }
            }
        };
        this.modalRef = this.modalService.show(_components_manager_widgets_types_create_manager_widgets_types_create_component__WEBPACK_IMPORTED_MODULE_14__["ManagerWidgetsTypesCreateComponent"], modalConfig);
        this.modalRef.content.event.subscribe(function (data) {
            _this.rerender();
        });
    };
    ManagerWidgetTypesComponent.prototype.openManagerWidgetTypeEditModal = function (ManagerWidgetTypes) {
        var _this = this;
        this.widgetsTypesService.getFieldById(ManagerWidgetTypes.id)
            .subscribe(function (resp) {
            var modalConfig = {
                animated: true,
                keyboard: true,
                backdrop: true,
                ignoreBackdropClick: false,
                class: 'inmodal modal-dialog-centered animated fadeIn modal-lg',
                initialState: {
                    managerWidgetTypes: resp
                }
            };
            _this.modalRef = _this.modalService.show(_components_manager_widgets_types_edit_manager_widgets_types_edit_component__WEBPACK_IMPORTED_MODULE_15__["ManagerWidgetsTypesEditComponent"], modalConfig);
            _this.modalRef.content.event.subscribe(function (data) {
                _this.rerender();
            });
        });
    };
    ManagerWidgetTypesComponent.prototype.removeManagerWidgetType = function (id) {
        var _this = this;
        sweetalert2__WEBPACK_IMPORTED_MODULE_9___default.a.fire({
            title: this.translate.instant('common.swal.title'),
            text: this.translate.instant('common.swal.text') + ' ' + this.translate.instant('settings_web.manager_widgets_types.title'),
            type: 'warning',
            showCancelButton: true,
            confirmButtonText: this.translate.instant('common.swal.confirmButtonText'),
            cancelButtonText: this.translate.instant('common.swal.cancelButtonText')
        }).then(function (result) {
            if (result.value) {
                _this.widgetsTypesService.deleteManagerWidgetsTypes(id)
                    .subscribe(function (data) {
                    _this.toastr.success(_this.translate.instant('settings_web.manager_widgets_types.messages.delete'), _this.translate.instant('settings_web.manager_widgets_types.title'));
                    _this.rerender();
                });
            }
        });
    };
    ManagerWidgetTypesComponent.ctorParameters = function () { return [
        { type: _ngx_translate_core__WEBPACK_IMPORTED_MODULE_6__["TranslateService"] },
        { type: ngx_bootstrap_modal__WEBPACK_IMPORTED_MODULE_2__["BsModalService"] },
        { type: _angular_common_http__WEBPACK_IMPORTED_MODULE_3__["HttpClient"] },
        { type: ngx_export_as__WEBPACK_IMPORTED_MODULE_4__["ExportAsService"] },
        { type: ngx_toastr__WEBPACK_IMPORTED_MODULE_5__["ToastrService"] },
        { type: _core_services_authentication_service__WEBPACK_IMPORTED_MODULE_13__["AuthenticationService"] },
        { type: _core_services_widgets_types_service__WEBPACK_IMPORTED_MODULE_11__["WidgetsTypesService"] },
        { type: _angular_router__WEBPACK_IMPORTED_MODULE_10__["Router"] },
        { type: _angular_router__WEBPACK_IMPORTED_MODULE_10__["ActivatedRoute"] },
        { type: _core_services_helper_service__WEBPACK_IMPORTED_MODULE_12__["HelperService"] }
    ]; };
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewChild"])(angular_datatables__WEBPACK_IMPORTED_MODULE_7__["DataTableDirective"], { static: true }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", angular_datatables__WEBPACK_IMPORTED_MODULE_7__["DataTableDirective"])
    ], ManagerWidgetTypesComponent.prototype, "dtElement", void 0);
    ManagerWidgetTypesComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-manager-widgets-types',
            template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./manager-widgets-types.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/modules/settings-web/pages/manager-widgets-types/manager-widgets-types.component.html")).default,
            styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./manager-widgets-types.component.scss */ "./src/app/modules/settings-web/pages/manager-widgets-types/manager-widgets-types.component.scss")).default]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_ngx_translate_core__WEBPACK_IMPORTED_MODULE_6__["TranslateService"],
            ngx_bootstrap_modal__WEBPACK_IMPORTED_MODULE_2__["BsModalService"],
            _angular_common_http__WEBPACK_IMPORTED_MODULE_3__["HttpClient"],
            ngx_export_as__WEBPACK_IMPORTED_MODULE_4__["ExportAsService"],
            ngx_toastr__WEBPACK_IMPORTED_MODULE_5__["ToastrService"],
            _core_services_authentication_service__WEBPACK_IMPORTED_MODULE_13__["AuthenticationService"],
            _core_services_widgets_types_service__WEBPACK_IMPORTED_MODULE_11__["WidgetsTypesService"],
            _angular_router__WEBPACK_IMPORTED_MODULE_10__["Router"],
            _angular_router__WEBPACK_IMPORTED_MODULE_10__["ActivatedRoute"],
            _core_services_helper_service__WEBPACK_IMPORTED_MODULE_12__["HelperService"]])
    ], ManagerWidgetTypesComponent);
    return ManagerWidgetTypesComponent;
}());



/***/ }),

/***/ "./src/app/modules/settings-web/pages/manager-widgets/manager-widgets.component.scss":
/*!*******************************************************************************************!*\
  !*** ./src/app/modules/settings-web/pages/manager-widgets/manager-widgets.component.scss ***!
  \*******************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = (".hide_empty_message ::ng-deep .odd {\n  display: none;\n}\n\n::ng-deep ngx-monaco-editor {\n  height: 400px !important;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvbW9kdWxlcy9zZXR0aW5ncy13ZWIvcGFnZXMvbWFuYWdlci13aWRnZXRzL0M6XFxVc2Vyc1xcdGh1YW5cXE9uZURyaXZlXFxEZXNrdG9wXFxnbGF2YWwtdGh1YW5kaW5oL3NyY1xcYXBwXFxtb2R1bGVzXFxzZXR0aW5ncy13ZWJcXHBhZ2VzXFxtYW5hZ2VyLXdpZGdldHNcXG1hbmFnZXItd2lkZ2V0cy5jb21wb25lbnQuc2NzcyIsInNyYy9hcHAvbW9kdWxlcy9zZXR0aW5ncy13ZWIvcGFnZXMvbWFuYWdlci13aWRnZXRzL21hbmFnZXItd2lkZ2V0cy5jb21wb25lbnQuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNJLGFBQUE7QUNDSjs7QURHQTtFQUNJLHdCQUFBO0FDQUoiLCJmaWxlIjoic3JjL2FwcC9tb2R1bGVzL3NldHRpbmdzLXdlYi9wYWdlcy9tYW5hZ2VyLXdpZGdldHMvbWFuYWdlci13aWRnZXRzLmNvbXBvbmVudC5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLmhpZGVfZW1wdHlfbWVzc2FnZSA6Om5nLWRlZXAgLm9kZCB7XHJcbiAgICBkaXNwbGF5OiBub25lXHJcbn1cclxuXHJcblxyXG46Om5nLWRlZXAgbmd4LW1vbmFjby1lZGl0b3Ige1xyXG4gICAgaGVpZ2h0OiA0MDBweCAhaW1wb3J0YW50O1xyXG59XHJcbiIsIi5oaWRlX2VtcHR5X21lc3NhZ2UgOjpuZy1kZWVwIC5vZGQge1xuICBkaXNwbGF5OiBub25lO1xufVxuXG46Om5nLWRlZXAgbmd4LW1vbmFjby1lZGl0b3Ige1xuICBoZWlnaHQ6IDQwMHB4ICFpbXBvcnRhbnQ7XG59Il19 */");

/***/ }),

/***/ "./src/app/modules/settings-web/pages/manager-widgets/manager-widgets.component.ts":
/*!*****************************************************************************************!*\
  !*** ./src/app/modules/settings-web/pages/manager-widgets/manager-widgets.component.ts ***!
  \*****************************************************************************************/
/*! exports provided: ManagerWidgetsComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ManagerWidgetsComponent", function() { return ManagerWidgetsComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var ngx_bootstrap_modal__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ngx-bootstrap/modal */ "./node_modules/ngx-bootstrap/modal/fesm5/ngx-bootstrap-modal.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");
/* harmony import */ var ngx_export_as__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ngx-export-as */ "./node_modules/ngx-export-as/fesm2015/ngx-export-as.js");
/* harmony import */ var ngx_toastr__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ngx-toastr */ "./node_modules/ngx-toastr/fesm5/ngx-toastr.js");
/* harmony import */ var _ngx_translate_core__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @ngx-translate/core */ "./node_modules/@ngx-translate/core/fesm5/ngx-translate-core.js");
/* harmony import */ var angular_datatables__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! angular-datatables */ "./node_modules/angular-datatables/index.js");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! rxjs */ "./node_modules/rxjs/_esm5/index.js");
/* harmony import */ var sweetalert2__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! sweetalert2 */ "./node_modules/sweetalert2/dist/sweetalert2.all.js");
/* harmony import */ var sweetalert2__WEBPACK_IMPORTED_MODULE_9___default = /*#__PURE__*/__webpack_require__.n(sweetalert2__WEBPACK_IMPORTED_MODULE_9__);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _core_services_pages_service__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ../../../../core/services/pages.service */ "./src/app/core/services/pages.service.ts");
/* harmony import */ var _core_services_helper_service__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ../../../../core/services/helper.service */ "./src/app/core/services/helper.service.ts");
/* harmony import */ var _core_services_authentication_service__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ../../../../core/services/authentication.service */ "./src/app/core/services/authentication.service.ts");
/* harmony import */ var _components_manager_widgets_create_manager_widgets_create_component__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ../../components/manager-widgets-create/manager-widgets-create.component */ "./src/app/modules/settings-web/components/manager-widgets-create/manager-widgets-create.component.ts");
/* harmony import */ var _components_manager_widgets_edit_manager_widgets_edit_component__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! ../../components/manager-widgets-edit/manager-widgets-edit.component */ "./src/app/modules/settings-web/components/manager-widgets-edit/manager-widgets-edit.component.ts");
/* harmony import */ var _components_widgets_create_widgets_create_component__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! ../../components/widgets-create/widgets-create.component */ "./src/app/modules/settings-web/components/widgets-create/widgets-create.component.ts");
/* harmony import */ var _components_widgets_edit_widgets_edit_component__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! ../../components/widgets-edit/widgets-edit.component */ "./src/app/modules/settings-web/components/widgets-edit/widgets-edit.component.ts");
/* harmony import */ var _components_widgets_edit_data_widgets_edit_data_component__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! ../../components/widgets-edit-data/widgets-edit-data.component */ "./src/app/modules/settings-web/components/widgets-edit-data/widgets-edit-data.component.ts");
/* harmony import */ var _core_services_widgets_service__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(/*! ../../../../core/services/widgets.service */ "./src/app/core/services/widgets.service.ts");
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__(/*! ../../../../../environments/environment */ "./src/environments/environment.ts");
/* harmony import */ var datatables_net__WEBPACK_IMPORTED_MODULE_21__ = __webpack_require__(/*! datatables.net */ "./node_modules/datatables.net/js/jquery.dataTables.js");
/* harmony import */ var datatables_net__WEBPACK_IMPORTED_MODULE_21___default = /*#__PURE__*/__webpack_require__.n(datatables_net__WEBPACK_IMPORTED_MODULE_21__);
/* harmony import */ var datatables_net_bs4__WEBPACK_IMPORTED_MODULE_22__ = __webpack_require__(/*! datatables.net-bs4 */ "./node_modules/datatables.net-bs4/js/dataTables.bootstrap4.js");
/* harmony import */ var datatables_net_bs4__WEBPACK_IMPORTED_MODULE_22___default = /*#__PURE__*/__webpack_require__.n(datatables_net_bs4__WEBPACK_IMPORTED_MODULE_22__);























var ManagerWidgetsComponent = /** @class */ (function () {
    function ManagerWidgetsComponent(translate, modalService, http, exportAsService, toastr, authenticationService, pagesService, router, route, widgetsService, helperService) {
        var _this = this;
        this.translate = translate;
        this.modalService = modalService;
        this.http = http;
        this.exportAsService = exportAsService;
        this.toastr = toastr;
        this.authenticationService = authenticationService;
        this.pagesService = pagesService;
        this.router = router;
        this.route = route;
        this.widgetsService = widgetsService;
        this.helperService = helperService;
        this.apiUrl = _environments_environment__WEBPACK_IMPORTED_MODULE_20__["environment"].apiUrl;
        this.dtTrigger = new rxjs__WEBPACK_IMPORTED_MODULE_8__["Subject"]();
        this.dtOptions = {};
        this.pageData = [];
        this.managerWidgets = [];
        this.exportAsConfig = {
            type: 'pdf',
            elementIdOrContent: 'custom_field_table',
        };
        this.modalConfigs = {
            animated: true,
            keyboard: true,
            backdrop: true,
            ignoreBackdropClick: false,
            class: 'inmodal modal-dialog-centered animated fadeIn modal-lg',
            initialState: {}
        };
        this.authenticationService.loginUser.subscribe(function (x) { return _this.loginUser = x; });
        this.route.paramMap.subscribe(function (params) {
            _this.params = params;
        });
    }
    ManagerWidgetsComponent.prototype.ngOnInit = function () {
        // this.getAllFormFields();
        this.loadManagerWidgetDatatable();
    };
    ManagerWidgetsComponent.prototype.loadManagerWidgetDatatable = function () {
        var _this = this;
        var that = this;
        this.dtOptions = {
            pagingType: 'full_numbers',
            pageLength: that.loginUser.settings.tables_pagination_limit,
            serverSide: true,
            processing: true,
            dom: '<"html5buttons"B>ltfrtip',
            columns: [{
                    'sortable': false,
                    'target': [0]
                }, {
                    'sortable': false,
                    'target': [1]
                }, {
                    'sortable': false,
                    'target': [2]
                }, {
                    'sortable': false,
                    'target': [3]
                }, {
                    'sortable': false,
                    'width': '5%',
                    'target': [4]
                }],
            buttons: [{
                    extend: 'csv',
                    title: this.translate.instant('settings_web.manager-widgets.title'),
                    className: 'btn btn-datatable-gredient',
                    action: function (e, dt, node, config) {
                        that.exportFiles('csv');
                    }
                }, {
                    extend: 'excel',
                    title: this.translate.instant('settings_web.manager-widgets.title'),
                    className: 'btn btn-datatable-gredient',
                    action: function (e, dt, node, config) {
                        that.exportFiles('xlsx');
                    }
                }, {
                    extend: 'pdf',
                    title: this.translate.instant('settings_web.manager-widgets.title'),
                    className: 'btn btn-datatable-gredient',
                    action: function (e, dt, node, config) {
                        that.exportFiles('pdf');
                    }
                }],
            language: {
                sLengthMenu: 'Show _MENU_',
                sSearch: '',
                sSearchPlaceholder: 'Search ...'
            },
            ajax: function (dataTablesParameters, callback) {
                dataTablesParameters.page_id = _this.params.get('id');
                _this.http
                    .post(_this.apiUrl + '/api/all-manager-widgets', dataTablesParameters, {})
                    .subscribe(function (resp) {
                    _this.managerWidgets = resp.data;
                    _this.pageData = resp.parentData;
                    callback({
                        recordsTotal: resp.recordsTotal,
                        recordsFiltered: resp.recordsFiltered,
                        data: [],
                    });
                });
            }
        };
    };
    ManagerWidgetsComponent.prototype.exportFiles = function (type) {
        this.exportAsConfig.type = type;
        this.exportAsService.save(this.exportAsConfig, 'managerWidget').subscribe(function () {
        });
    };
    ManagerWidgetsComponent.prototype.ngAfterViewInit = function () {
        this.dtTrigger.next();
    };
    ManagerWidgetsComponent.prototype.ngOnDestroy = function () {
        this.dtTrigger.unsubscribe();
    };
    ManagerWidgetsComponent.prototype.rerender = function () {
        var _this = this;
        this.dtElement.dtInstance.then(function (dtInstance) {
            dtInstance.destroy();
            setTimeout(function () {
                _this.dtTrigger.next();
                if (_this.managerWidgets.length > 0) {
                    $('.tfoot_dt').addClass('d-none');
                }
                else {
                    $('.tfoot_dt').removeClass('d-none');
                }
            });
        });
    };
    ManagerWidgetsComponent.prototype.openManagerWidgetCreateModal = function (regions_id, regions_number) {
        var _this = this;
        var modalConfig = {
            animated: true,
            keyboard: true,
            backdrop: true,
            ignoreBackdropClick: false,
            class: 'inmodal modal-dialog-centered animated fadeIn modal-lg',
            initialState: {
                managerWidgets: {
                    pages_id: this.params.get('id'),
                    regions_id: regions_id,
                    regions_number: regions_number
                }
            }
        };
        this.modalRef = this.modalService.show(_components_manager_widgets_create_manager_widgets_create_component__WEBPACK_IMPORTED_MODULE_14__["ManagerWidgetsCreateComponent"], modalConfig);
        this.modalRef.content.event.subscribe(function (data) {
            _this.rerender();
        });
    };
    ManagerWidgetsComponent.prototype.openManagerWidgetEditModal = function (ManagerWidgets) {
        var _this = this;
        this.pagesService.getWidgetById(ManagerWidgets.id)
            .subscribe(function (resp) {
            var modalConfig = {
                animated: true,
                keyboard: true,
                backdrop: true,
                ignoreBackdropClick: false,
                class: 'inmodal modal-dialog-centered animated fadeIn modal-lg',
                initialState: {
                    managerWidgets: resp
                }
            };
            _this.modalRef = _this.modalService.show(_components_manager_widgets_edit_manager_widgets_edit_component__WEBPACK_IMPORTED_MODULE_15__["ManagerWidgetsEditComponent"], modalConfig);
            _this.modalRef.content.event.subscribe(function (data) {
                _this.rerender();
            });
        });
    };
    ManagerWidgetsComponent.prototype.removeManagerWidget = function (id) {
        var _this = this;
        sweetalert2__WEBPACK_IMPORTED_MODULE_9___default.a.fire({
            title: this.translate.instant('common.swal.title'),
            text: this.translate.instant('common.swal.text') + ' ' + this.translate.instant('settings_web.manager_widgets.title'),
            type: 'warning',
            showCancelButton: true,
            confirmButtonText: this.translate.instant('common.swal.confirmButtonText'),
            cancelButtonText: this.translate.instant('common.swal.cancelButtonText')
        }).then(function (result) {
            if (result.value) {
                _this.pagesService.deleteManagerWidget(id)
                    .subscribe(function (data) {
                    _this.toastr.success(_this.translate.instant('settings_web.manager_widgets.messages.delete'), _this.translate.instant('settings_web.manager_widgets.title'));
                    _this.rerender();
                });
            }
        });
    };
    ManagerWidgetsComponent.prototype.openWidgetCreateModal = function () {
        var _this = this;
        this.modalRef = this.modalService.show(_components_widgets_create_widgets_create_component__WEBPACK_IMPORTED_MODULE_16__["WidgetsCreateComponent"], this.modalConfigs);
        this.modalRef.content.event.subscribe(function (data) {
            _this.rerender();
        });
    };
    ManagerWidgetsComponent.prototype.openWidgetEditModal = function (Widgets) {
        var _this = this;
        this.widgetsService.getById(Widgets.id)
            .subscribe(function (resp) {
            var modalConfig = {
                animated: true,
                keyboard: true,
                backdrop: true,
                ignoreBackdropClick: false,
                class: 'inmodal modal-dialog-centered animated fadeIn modal-lg',
                initialState: {
                    widgets: resp['data']
                }
            };
            _this.modalRef = _this.modalService.show(_components_widgets_edit_widgets_edit_component__WEBPACK_IMPORTED_MODULE_17__["WidgetsEditComponent"], modalConfig);
            _this.modalRef.content.event.subscribe(function (data) {
                _this.rerender();
            });
        });
    };
    ManagerWidgetsComponent.prototype.openWidgetEditDataModal = function (Widgets) {
        var _this = this;
        this.widgetsService.getById(Widgets.widgets_id)
            .subscribe(function (resp) {
            var modalConfig = {
                animated: true,
                keyboard: true,
                backdrop: true,
                ignoreBackdropClick: false,
                class: 'inmodal modal-dialog-centered animated fadeIn modal-lg',
                initialState: {
                    widgets: resp['data'],
                    customFields: resp['customFields']['single'],
                    customFieldsMultiple: resp['customFields']['multiple']
                }
            };
            _this.modalRef = _this.modalService.show(_components_widgets_edit_data_widgets_edit_data_component__WEBPACK_IMPORTED_MODULE_18__["WidgetsEditDataComponent"], modalConfig);
            _this.modalRef.content.event.subscribe(function (data) {
                _this.rerender();
            });
        });
    };
    ManagerWidgetsComponent.prototype.changeStatus = function (event, id) {
        var _this = this;
        this.pagesService.changeStatus({ id: id, status: event })
            .subscribe(function (data) {
            _this.toastr.success(_this.translate.instant('settings_web.manager_regions.messages.status'), _this.translate.instant('settings_web.manager_regions.title'));
            _this.rerender();
        });
    };
    ManagerWidgetsComponent.ctorParameters = function () { return [
        { type: _ngx_translate_core__WEBPACK_IMPORTED_MODULE_6__["TranslateService"] },
        { type: ngx_bootstrap_modal__WEBPACK_IMPORTED_MODULE_2__["BsModalService"] },
        { type: _angular_common_http__WEBPACK_IMPORTED_MODULE_3__["HttpClient"] },
        { type: ngx_export_as__WEBPACK_IMPORTED_MODULE_4__["ExportAsService"] },
        { type: ngx_toastr__WEBPACK_IMPORTED_MODULE_5__["ToastrService"] },
        { type: _core_services_authentication_service__WEBPACK_IMPORTED_MODULE_13__["AuthenticationService"] },
        { type: _core_services_pages_service__WEBPACK_IMPORTED_MODULE_11__["PagesService"] },
        { type: _angular_router__WEBPACK_IMPORTED_MODULE_10__["Router"] },
        { type: _angular_router__WEBPACK_IMPORTED_MODULE_10__["ActivatedRoute"] },
        { type: _core_services_widgets_service__WEBPACK_IMPORTED_MODULE_19__["WidgetsService"] },
        { type: _core_services_helper_service__WEBPACK_IMPORTED_MODULE_12__["HelperService"] }
    ]; };
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewChild"])(angular_datatables__WEBPACK_IMPORTED_MODULE_7__["DataTableDirective"], { static: true }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", angular_datatables__WEBPACK_IMPORTED_MODULE_7__["DataTableDirective"])
    ], ManagerWidgetsComponent.prototype, "dtElement", void 0);
    ManagerWidgetsComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-manager-widgets',
            template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./manager-widgets.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/modules/settings-web/pages/manager-widgets/manager-widgets.component.html")).default,
            styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./manager-widgets.component.scss */ "./src/app/modules/settings-web/pages/manager-widgets/manager-widgets.component.scss")).default]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_ngx_translate_core__WEBPACK_IMPORTED_MODULE_6__["TranslateService"],
            ngx_bootstrap_modal__WEBPACK_IMPORTED_MODULE_2__["BsModalService"],
            _angular_common_http__WEBPACK_IMPORTED_MODULE_3__["HttpClient"],
            ngx_export_as__WEBPACK_IMPORTED_MODULE_4__["ExportAsService"],
            ngx_toastr__WEBPACK_IMPORTED_MODULE_5__["ToastrService"],
            _core_services_authentication_service__WEBPACK_IMPORTED_MODULE_13__["AuthenticationService"],
            _core_services_pages_service__WEBPACK_IMPORTED_MODULE_11__["PagesService"],
            _angular_router__WEBPACK_IMPORTED_MODULE_10__["Router"],
            _angular_router__WEBPACK_IMPORTED_MODULE_10__["ActivatedRoute"],
            _core_services_widgets_service__WEBPACK_IMPORTED_MODULE_19__["WidgetsService"],
            _core_services_helper_service__WEBPACK_IMPORTED_MODULE_12__["HelperService"]])
    ], ManagerWidgetsComponent);
    return ManagerWidgetsComponent;
}());



/***/ }),

/***/ "./src/app/modules/settings-web/pages/settings-web/settings-web.component.scss":
/*!*************************************************************************************!*\
  !*** ./src/app/modules/settings-web/pages/settings-web/settings-web.component.scss ***!
  \*************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("@charset \"UTF-8\";\n/**\n * Nestable\n */\n.dd {\n  position: relative;\n  display: block;\n  margin: 0;\n  padding: 0;\n  max-width: 600px;\n  list-style: none;\n  font-size: 13px;\n  line-height: 20px;\n}\n.dd-list {\n  display: block;\n  position: relative;\n  margin: 0;\n  padding: 0;\n  list-style: none;\n}\n.dd-list .dd-list {\n  padding-left: 30px;\n}\n.dd-collapsed .dd-list {\n  display: none;\n}\n.dd-item,\n.dd-empty,\n.dd-placeholder {\n  display: block;\n  position: relative;\n  margin: 0;\n  padding: 0;\n  min-height: 20px;\n  font-size: 13px;\n  line-height: 20px;\n}\n.dd-handle {\n  display: block;\n  height: 30px;\n  margin: 5px 0;\n  padding: 5px 10px;\n  color: #333;\n  text-decoration: none;\n  font-weight: bold;\n  border: 1px solid #ccc;\n  background: #fafafa;\n  border-radius: 3px;\n  box-sizing: border-box;\n  -moz-box-sizing: border-box;\n}\n.dd-handle:hover {\n  color: #2ea8e5;\n  background: #fff;\n}\n.dd-item > button {\n  display: block;\n  position: relative;\n  cursor: pointer;\n  float: left;\n  width: 25px;\n  height: 20px;\n  margin: 5px 0;\n  padding: 0;\n  text-indent: 100%;\n  white-space: nowrap;\n  overflow: hidden;\n  border: 0;\n  background: transparent;\n  font-size: 12px;\n  line-height: 1;\n  text-align: center;\n  font-weight: bold;\n}\n.dd-item > button:before {\n  content: \"+\";\n  display: block;\n  position: absolute;\n  width: 100%;\n  text-align: center;\n  text-indent: 0;\n}\n.dd-item > button[data-action=collapse]:before {\n  content: \"-\";\n}\n.dd-placeholder,\n.dd-empty {\n  margin: 5px 0;\n  padding: 0;\n  min-height: 30px;\n  background: #f2fbff;\n  border: 1px dashed #b6bcbf;\n  box-sizing: border-box;\n  -moz-box-sizing: border-box;\n}\n.dd-empty {\n  border: 1px dashed #bbb;\n  min-height: 100px;\n  background-color: #e5e5e5;\n  background-image: linear-gradient(45deg, #fff 25%, transparent 25%, transparent 75%, #fff 75%, #fff), linear-gradient(45deg, #fff 25%, transparent 25%, transparent 75%, #fff 75%, #fff);\n  background-size: 60px 60px;\n  background-position: 0 0, 30px 30px;\n}\n.dd-dragel {\n  position: absolute;\n  pointer-events: none;\n  z-index: 9999;\n}\n.dd-dragel > .dd-item .dd-handle {\n  margin-top: 0;\n}\n.dd-dragel .dd-handle {\n  box-shadow: 2px 4px 6px 0 rgba(0, 0, 0, 0.1);\n}\n/**\n * Nestable Extras\n */\n.nestable-lists {\n  display: block;\n  clear: both;\n  padding: 30px 0;\n  width: 100%;\n  border: 0;\n  border-top: 2px solid #ddd;\n  border-bottom: 2px solid #ddd;\n}\n#nestable-menu {\n  padding: 0;\n  margin: 20px 0;\n}\n#nestable-output,\n#nestable2-output {\n  width: 100%;\n  height: 7em;\n  font-size: 0.75em;\n  line-height: 1.333333em;\n  font-family: Consolas, monospace;\n  padding: 5px;\n  box-sizing: border-box;\n  -moz-box-sizing: border-box;\n}\n#nestable2 .dd-handle {\n  color: #fff;\n  border: 1px solid #999;\n  background: #bbb;\n}\n#nestable2 .dd-handle:hover {\n  background: #bbb;\n}\n#nestable2 .dd-item > button:before {\n  color: #fff;\n}\n.dd-hover > .dd-handle {\n  background: #2ea8e5 !important;\n}\n/**\n * Nestable Draggable Handles\n */\n.dd3-content {\n  display: block;\n  height: 30px;\n  margin: 5px 0;\n  padding: 5px 10px 5px 40px;\n  color: #333;\n  text-decoration: none;\n  font-weight: bold;\n  border: 1px solid #ccc;\n  background: #fafafa;\n  border-radius: 3px;\n  box-sizing: border-box;\n  -moz-box-sizing: border-box;\n}\n.dd3-content:hover {\n  color: #2ea8e5;\n  background: #fff;\n}\n.dd-dragel > .dd3-item > .dd3-content {\n  margin: 0;\n}\n.dd3-item > button {\n  margin-left: 30px;\n}\n.dd3-handle {\n  position: absolute;\n  margin: 0;\n  left: 0;\n  top: 0;\n  cursor: pointer;\n  width: 30px;\n  text-indent: 100%;\n  white-space: nowrap;\n  overflow: hidden;\n  border: 1px solid #aaa;\n  background: #ddd;\n  border-top-right-radius: 0;\n  border-bottom-right-radius: 0;\n}\n.dd3-handle:before {\n  content: \"≡\";\n  display: block;\n  position: absolute;\n  left: 0;\n  top: 3px;\n  width: 100%;\n  text-align: center;\n  text-indent: 0;\n  color: #fff;\n  font-size: 20px;\n  font-weight: normal;\n}\n.dd3-handle:hover {\n  background: #ddd;\n}\n.disabled {\n  pointer-events: none;\n  opacity: 0.6;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvbW9kdWxlcy9zZXR0aW5ncy13ZWIvcGFnZXMvc2V0dGluZ3Mtd2ViL3NldHRpbmdzLXdlYi5jb21wb25lbnQuc2NzcyIsInNyYy9hcHAvbW9kdWxlcy9zZXR0aW5ncy13ZWIvcGFnZXMvc2V0dGluZ3Mtd2ViL0M6XFxVc2Vyc1xcdGh1YW5cXE9uZURyaXZlXFxEZXNrdG9wXFxnbGF2YWwtdGh1YW5kaW5oL3NyY1xcYXBwXFxtb2R1bGVzXFxzZXR0aW5ncy13ZWJcXHBhZ2VzXFxzZXR0aW5ncy13ZWJcXHNldHRpbmdzLXdlYi5jb21wb25lbnQuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQSxnQkFBZ0I7QUNBaEI7O0VBQUE7QUFJQTtFQUNJLGtCQUFBO0VBQ0EsY0FBQTtFQUNBLFNBQUE7RUFDQSxVQUFBO0VBQ0EsZ0JBQUE7RUFDQSxnQkFBQTtFQUNBLGVBQUE7RUFDQSxpQkFBQTtBRENKO0FDRUE7RUFDSSxjQUFBO0VBQ0Esa0JBQUE7RUFDQSxTQUFBO0VBQ0EsVUFBQTtFQUNBLGdCQUFBO0FEQ0o7QUNFQTtFQUNJLGtCQUFBO0FEQ0o7QUNFQTtFQUNJLGFBQUE7QURDSjtBQ0VBOzs7RUFHSSxjQUFBO0VBQ0Esa0JBQUE7RUFDQSxTQUFBO0VBQ0EsVUFBQTtFQUNBLGdCQUFBO0VBQ0EsZUFBQTtFQUNBLGlCQUFBO0FEQ0o7QUNFQTtFQUNJLGNBQUE7RUFDQSxZQUFBO0VBQ0EsYUFBQTtFQUNBLGlCQUFBO0VBQ0EsV0FBQTtFQUNBLHFCQUFBO0VBQ0EsaUJBQUE7RUFDQSxzQkFBQTtFQUNBLG1CQUFBO0VBRUEsa0JBQUE7RUFDQSxzQkFBQTtFQUNBLDJCQUFBO0FEQ0o7QUNFQTtFQUNJLGNBQUE7RUFDQSxnQkFBQTtBRENKO0FDRUE7RUFDSSxjQUFBO0VBQ0Esa0JBQUE7RUFDQSxlQUFBO0VBQ0EsV0FBQTtFQUNBLFdBQUE7RUFDQSxZQUFBO0VBQ0EsYUFBQTtFQUNBLFVBQUE7RUFDQSxpQkFBQTtFQUNBLG1CQUFBO0VBQ0EsZ0JBQUE7RUFDQSxTQUFBO0VBQ0EsdUJBQUE7RUFDQSxlQUFBO0VBQ0EsY0FBQTtFQUNBLGtCQUFBO0VBQ0EsaUJBQUE7QURDSjtBQ0VBO0VBQ0ksWUFBQTtFQUNBLGNBQUE7RUFDQSxrQkFBQTtFQUNBLFdBQUE7RUFDQSxrQkFBQTtFQUNBLGNBQUE7QURDSjtBQ0VBO0VBQ0ksWUFBQTtBRENKO0FDRUE7O0VBRUksYUFBQTtFQUNBLFVBQUE7RUFDQSxnQkFBQTtFQUNBLG1CQUFBO0VBQ0EsMEJBQUE7RUFDQSxzQkFBQTtFQUNBLDJCQUFBO0FEQ0o7QUNFQTtFQUNJLHVCQUFBO0VBQ0EsaUJBQUE7RUFDQSx5QkFBQTtFQUtBLHdMQUFBO0VBRUEsMEJBQUE7RUFDQSxtQ0FBQTtBREZKO0FDS0E7RUFDSSxrQkFBQTtFQUNBLG9CQUFBO0VBQ0EsYUFBQTtBREZKO0FDS0E7RUFDSSxhQUFBO0FERko7QUNLQTtFQUVJLDRDQUFBO0FERko7QUNLQTs7RUFBQTtBQUlBO0VBQ0ksY0FBQTtFQUNBLFdBQUE7RUFDQSxlQUFBO0VBQ0EsV0FBQTtFQUNBLFNBQUE7RUFDQSwwQkFBQTtFQUNBLDZCQUFBO0FESEo7QUNNQTtFQUNJLFVBQUE7RUFDQSxjQUFBO0FESEo7QUNNQTs7RUFFSSxXQUFBO0VBQ0EsV0FBQTtFQUNBLGlCQUFBO0VBQ0EsdUJBQUE7RUFDQSxnQ0FBQTtFQUNBLFlBQUE7RUFDQSxzQkFBQTtFQUNBLDJCQUFBO0FESEo7QUNNQTtFQUNJLFdBQUE7RUFDQSxzQkFBQTtFQUNBLGdCQUFBO0FESEo7QUNNQTtFQUNJLGdCQUFBO0FESEo7QUNNQTtFQUNJLFdBQUE7QURISjtBQ01BO0VBQ0ksOEJBQUE7QURISjtBQ01BOztFQUFBO0FBSUE7RUFDSSxjQUFBO0VBQ0EsWUFBQTtFQUNBLGFBQUE7RUFDQSwwQkFBQTtFQUNBLFdBQUE7RUFDQSxxQkFBQTtFQUNBLGlCQUFBO0VBQ0Esc0JBQUE7RUFDQSxtQkFBQTtFQUVBLGtCQUFBO0VBQ0Esc0JBQUE7RUFDQSwyQkFBQTtBREpKO0FDT0E7RUFDSSxjQUFBO0VBQ0EsZ0JBQUE7QURKSjtBQ09BO0VBQ0ksU0FBQTtBREpKO0FDT0E7RUFDSSxpQkFBQTtBREpKO0FDT0E7RUFDSSxrQkFBQTtFQUNBLFNBQUE7RUFDQSxPQUFBO0VBQ0EsTUFBQTtFQUNBLGVBQUE7RUFDQSxXQUFBO0VBQ0EsaUJBQUE7RUFDQSxtQkFBQTtFQUNBLGdCQUFBO0VBQ0Esc0JBQUE7RUFDQSxnQkFBQTtFQUNBLDBCQUFBO0VBQ0EsNkJBQUE7QURKSjtBQ09BO0VBQ0ksWUFBQTtFQUNBLGNBQUE7RUFDQSxrQkFBQTtFQUNBLE9BQUE7RUFDQSxRQUFBO0VBQ0EsV0FBQTtFQUNBLGtCQUFBO0VBQ0EsY0FBQTtFQUNBLFdBQUE7RUFDQSxlQUFBO0VBQ0EsbUJBQUE7QURKSjtBQ09BO0VBQ0ksZ0JBQUE7QURKSjtBQ09BO0VBQ0ksb0JBQUE7RUFDQSxZQUFBO0FESkoiLCJmaWxlIjoic3JjL2FwcC9tb2R1bGVzL3NldHRpbmdzLXdlYi9wYWdlcy9zZXR0aW5ncy13ZWIvc2V0dGluZ3Mtd2ViLmNvbXBvbmVudC5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiQGNoYXJzZXQgXCJVVEYtOFwiO1xuLyoqXG4gKiBOZXN0YWJsZVxuICovXG4uZGQge1xuICBwb3NpdGlvbjogcmVsYXRpdmU7XG4gIGRpc3BsYXk6IGJsb2NrO1xuICBtYXJnaW46IDA7XG4gIHBhZGRpbmc6IDA7XG4gIG1heC13aWR0aDogNjAwcHg7XG4gIGxpc3Qtc3R5bGU6IG5vbmU7XG4gIGZvbnQtc2l6ZTogMTNweDtcbiAgbGluZS1oZWlnaHQ6IDIwcHg7XG59XG5cbi5kZC1saXN0IHtcbiAgZGlzcGxheTogYmxvY2s7XG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcbiAgbWFyZ2luOiAwO1xuICBwYWRkaW5nOiAwO1xuICBsaXN0LXN0eWxlOiBub25lO1xufVxuXG4uZGQtbGlzdCAuZGQtbGlzdCB7XG4gIHBhZGRpbmctbGVmdDogMzBweDtcbn1cblxuLmRkLWNvbGxhcHNlZCAuZGQtbGlzdCB7XG4gIGRpc3BsYXk6IG5vbmU7XG59XG5cbi5kZC1pdGVtLFxuLmRkLWVtcHR5LFxuLmRkLXBsYWNlaG9sZGVyIHtcbiAgZGlzcGxheTogYmxvY2s7XG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcbiAgbWFyZ2luOiAwO1xuICBwYWRkaW5nOiAwO1xuICBtaW4taGVpZ2h0OiAyMHB4O1xuICBmb250LXNpemU6IDEzcHg7XG4gIGxpbmUtaGVpZ2h0OiAyMHB4O1xufVxuXG4uZGQtaGFuZGxlIHtcbiAgZGlzcGxheTogYmxvY2s7XG4gIGhlaWdodDogMzBweDtcbiAgbWFyZ2luOiA1cHggMDtcbiAgcGFkZGluZzogNXB4IDEwcHg7XG4gIGNvbG9yOiAjMzMzO1xuICB0ZXh0LWRlY29yYXRpb246IG5vbmU7XG4gIGZvbnQtd2VpZ2h0OiBib2xkO1xuICBib3JkZXI6IDFweCBzb2xpZCAjY2NjO1xuICBiYWNrZ3JvdW5kOiAjZmFmYWZhO1xuICAtd2Via2l0LWJvcmRlci1yYWRpdXM6IDNweDtcbiAgYm9yZGVyLXJhZGl1czogM3B4O1xuICBib3gtc2l6aW5nOiBib3JkZXItYm94O1xuICAtbW96LWJveC1zaXppbmc6IGJvcmRlci1ib3g7XG59XG5cbi5kZC1oYW5kbGU6aG92ZXIge1xuICBjb2xvcjogIzJlYThlNTtcbiAgYmFja2dyb3VuZDogI2ZmZjtcbn1cblxuLmRkLWl0ZW0gPiBidXR0b24ge1xuICBkaXNwbGF5OiBibG9jaztcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xuICBjdXJzb3I6IHBvaW50ZXI7XG4gIGZsb2F0OiBsZWZ0O1xuICB3aWR0aDogMjVweDtcbiAgaGVpZ2h0OiAyMHB4O1xuICBtYXJnaW46IDVweCAwO1xuICBwYWRkaW5nOiAwO1xuICB0ZXh0LWluZGVudDogMTAwJTtcbiAgd2hpdGUtc3BhY2U6IG5vd3JhcDtcbiAgb3ZlcmZsb3c6IGhpZGRlbjtcbiAgYm9yZGVyOiAwO1xuICBiYWNrZ3JvdW5kOiB0cmFuc3BhcmVudDtcbiAgZm9udC1zaXplOiAxMnB4O1xuICBsaW5lLWhlaWdodDogMTtcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xuICBmb250LXdlaWdodDogYm9sZDtcbn1cblxuLmRkLWl0ZW0gPiBidXR0b246YmVmb3JlIHtcbiAgY29udGVudDogXCIrXCI7XG4gIGRpc3BsYXk6IGJsb2NrO1xuICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gIHdpZHRoOiAxMDAlO1xuICB0ZXh0LWFsaWduOiBjZW50ZXI7XG4gIHRleHQtaW5kZW50OiAwO1xufVxuXG4uZGQtaXRlbSA+IGJ1dHRvbltkYXRhLWFjdGlvbj1jb2xsYXBzZV06YmVmb3JlIHtcbiAgY29udGVudDogXCItXCI7XG59XG5cbi5kZC1wbGFjZWhvbGRlcixcbi5kZC1lbXB0eSB7XG4gIG1hcmdpbjogNXB4IDA7XG4gIHBhZGRpbmc6IDA7XG4gIG1pbi1oZWlnaHQ6IDMwcHg7XG4gIGJhY2tncm91bmQ6ICNmMmZiZmY7XG4gIGJvcmRlcjogMXB4IGRhc2hlZCAjYjZiY2JmO1xuICBib3gtc2l6aW5nOiBib3JkZXItYm94O1xuICAtbW96LWJveC1zaXppbmc6IGJvcmRlci1ib3g7XG59XG5cbi5kZC1lbXB0eSB7XG4gIGJvcmRlcjogMXB4IGRhc2hlZCAjYmJiO1xuICBtaW4taGVpZ2h0OiAxMDBweDtcbiAgYmFja2dyb3VuZC1jb2xvcjogI2U1ZTVlNTtcbiAgYmFja2dyb3VuZC1pbWFnZTogLXdlYmtpdC1saW5lYXItZ3JhZGllbnQoNDVkZWcsICNmZmYgMjUlLCB0cmFuc3BhcmVudCAyNSUsIHRyYW5zcGFyZW50IDc1JSwgI2ZmZiA3NSUsICNmZmYpLCAtd2Via2l0LWxpbmVhci1ncmFkaWVudCg0NWRlZywgI2ZmZiAyNSUsIHRyYW5zcGFyZW50IDI1JSwgdHJhbnNwYXJlbnQgNzUlLCAjZmZmIDc1JSwgI2ZmZik7XG4gIGJhY2tncm91bmQtaW1hZ2U6IC1tb3otbGluZWFyLWdyYWRpZW50KDQ1ZGVnLCAjZmZmIDI1JSwgdHJhbnNwYXJlbnQgMjUlLCB0cmFuc3BhcmVudCA3NSUsICNmZmYgNzUlLCAjZmZmKSwgLW1vei1saW5lYXItZ3JhZGllbnQoNDVkZWcsICNmZmYgMjUlLCB0cmFuc3BhcmVudCAyNSUsIHRyYW5zcGFyZW50IDc1JSwgI2ZmZiA3NSUsICNmZmYpO1xuICBiYWNrZ3JvdW5kLWltYWdlOiBsaW5lYXItZ3JhZGllbnQoNDVkZWcsICNmZmYgMjUlLCB0cmFuc3BhcmVudCAyNSUsIHRyYW5zcGFyZW50IDc1JSwgI2ZmZiA3NSUsICNmZmYpLCBsaW5lYXItZ3JhZGllbnQoNDVkZWcsICNmZmYgMjUlLCB0cmFuc3BhcmVudCAyNSUsIHRyYW5zcGFyZW50IDc1JSwgI2ZmZiA3NSUsICNmZmYpO1xuICBiYWNrZ3JvdW5kLXNpemU6IDYwcHggNjBweDtcbiAgYmFja2dyb3VuZC1wb3NpdGlvbjogMCAwLCAzMHB4IDMwcHg7XG59XG5cbi5kZC1kcmFnZWwge1xuICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gIHBvaW50ZXItZXZlbnRzOiBub25lO1xuICB6LWluZGV4OiA5OTk5O1xufVxuXG4uZGQtZHJhZ2VsID4gLmRkLWl0ZW0gLmRkLWhhbmRsZSB7XG4gIG1hcmdpbi10b3A6IDA7XG59XG5cbi5kZC1kcmFnZWwgLmRkLWhhbmRsZSB7XG4gIC13ZWJraXQtYm94LXNoYWRvdzogMnB4IDRweCA2cHggMCByZ2JhKDAsIDAsIDAsIDAuMSk7XG4gIGJveC1zaGFkb3c6IDJweCA0cHggNnB4IDAgcmdiYSgwLCAwLCAwLCAwLjEpO1xufVxuXG4vKipcbiAqIE5lc3RhYmxlIEV4dHJhc1xuICovXG4ubmVzdGFibGUtbGlzdHMge1xuICBkaXNwbGF5OiBibG9jaztcbiAgY2xlYXI6IGJvdGg7XG4gIHBhZGRpbmc6IDMwcHggMDtcbiAgd2lkdGg6IDEwMCU7XG4gIGJvcmRlcjogMDtcbiAgYm9yZGVyLXRvcDogMnB4IHNvbGlkICNkZGQ7XG4gIGJvcmRlci1ib3R0b206IDJweCBzb2xpZCAjZGRkO1xufVxuXG4jbmVzdGFibGUtbWVudSB7XG4gIHBhZGRpbmc6IDA7XG4gIG1hcmdpbjogMjBweCAwO1xufVxuXG4jbmVzdGFibGUtb3V0cHV0LFxuI25lc3RhYmxlMi1vdXRwdXQge1xuICB3aWR0aDogMTAwJTtcbiAgaGVpZ2h0OiA3ZW07XG4gIGZvbnQtc2l6ZTogMC43NWVtO1xuICBsaW5lLWhlaWdodDogMS4zMzMzMzNlbTtcbiAgZm9udC1mYW1pbHk6IENvbnNvbGFzLCBtb25vc3BhY2U7XG4gIHBhZGRpbmc6IDVweDtcbiAgYm94LXNpemluZzogYm9yZGVyLWJveDtcbiAgLW1vei1ib3gtc2l6aW5nOiBib3JkZXItYm94O1xufVxuXG4jbmVzdGFibGUyIC5kZC1oYW5kbGUge1xuICBjb2xvcjogI2ZmZjtcbiAgYm9yZGVyOiAxcHggc29saWQgIzk5OTtcbiAgYmFja2dyb3VuZDogI2JiYjtcbn1cblxuI25lc3RhYmxlMiAuZGQtaGFuZGxlOmhvdmVyIHtcbiAgYmFja2dyb3VuZDogI2JiYjtcbn1cblxuI25lc3RhYmxlMiAuZGQtaXRlbSA+IGJ1dHRvbjpiZWZvcmUge1xuICBjb2xvcjogI2ZmZjtcbn1cblxuLmRkLWhvdmVyID4gLmRkLWhhbmRsZSB7XG4gIGJhY2tncm91bmQ6ICMyZWE4ZTUgIWltcG9ydGFudDtcbn1cblxuLyoqXG4gKiBOZXN0YWJsZSBEcmFnZ2FibGUgSGFuZGxlc1xuICovXG4uZGQzLWNvbnRlbnQge1xuICBkaXNwbGF5OiBibG9jaztcbiAgaGVpZ2h0OiAzMHB4O1xuICBtYXJnaW46IDVweCAwO1xuICBwYWRkaW5nOiA1cHggMTBweCA1cHggNDBweDtcbiAgY29sb3I6ICMzMzM7XG4gIHRleHQtZGVjb3JhdGlvbjogbm9uZTtcbiAgZm9udC13ZWlnaHQ6IGJvbGQ7XG4gIGJvcmRlcjogMXB4IHNvbGlkICNjY2M7XG4gIGJhY2tncm91bmQ6ICNmYWZhZmE7XG4gIC13ZWJraXQtYm9yZGVyLXJhZGl1czogM3B4O1xuICBib3JkZXItcmFkaXVzOiAzcHg7XG4gIGJveC1zaXppbmc6IGJvcmRlci1ib3g7XG4gIC1tb3otYm94LXNpemluZzogYm9yZGVyLWJveDtcbn1cblxuLmRkMy1jb250ZW50OmhvdmVyIHtcbiAgY29sb3I6ICMyZWE4ZTU7XG4gIGJhY2tncm91bmQ6ICNmZmY7XG59XG5cbi5kZC1kcmFnZWwgPiAuZGQzLWl0ZW0gPiAuZGQzLWNvbnRlbnQge1xuICBtYXJnaW46IDA7XG59XG5cbi5kZDMtaXRlbSA+IGJ1dHRvbiB7XG4gIG1hcmdpbi1sZWZ0OiAzMHB4O1xufVxuXG4uZGQzLWhhbmRsZSB7XG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgbWFyZ2luOiAwO1xuICBsZWZ0OiAwO1xuICB0b3A6IDA7XG4gIGN1cnNvcjogcG9pbnRlcjtcbiAgd2lkdGg6IDMwcHg7XG4gIHRleHQtaW5kZW50OiAxMDAlO1xuICB3aGl0ZS1zcGFjZTogbm93cmFwO1xuICBvdmVyZmxvdzogaGlkZGVuO1xuICBib3JkZXI6IDFweCBzb2xpZCAjYWFhO1xuICBiYWNrZ3JvdW5kOiAjZGRkO1xuICBib3JkZXItdG9wLXJpZ2h0LXJhZGl1czogMDtcbiAgYm9yZGVyLWJvdHRvbS1yaWdodC1yYWRpdXM6IDA7XG59XG5cbi5kZDMtaGFuZGxlOmJlZm9yZSB7XG4gIGNvbnRlbnQ6IFwi4omhXCI7XG4gIGRpc3BsYXk6IGJsb2NrO1xuICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gIGxlZnQ6IDA7XG4gIHRvcDogM3B4O1xuICB3aWR0aDogMTAwJTtcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xuICB0ZXh0LWluZGVudDogMDtcbiAgY29sb3I6ICNmZmY7XG4gIGZvbnQtc2l6ZTogMjBweDtcbiAgZm9udC13ZWlnaHQ6IG5vcm1hbDtcbn1cblxuLmRkMy1oYW5kbGU6aG92ZXIge1xuICBiYWNrZ3JvdW5kOiAjZGRkO1xufVxuXG4uZGlzYWJsZWQge1xuICBwb2ludGVyLWV2ZW50czogbm9uZTtcbiAgb3BhY2l0eTogMC42O1xufSIsIi8qKlxyXG4gKiBOZXN0YWJsZVxyXG4gKi9cclxuXHJcbi5kZCB7XHJcbiAgICBwb3NpdGlvbjogcmVsYXRpdmU7XHJcbiAgICBkaXNwbGF5OiBibG9jaztcclxuICAgIG1hcmdpbjogMDtcclxuICAgIHBhZGRpbmc6IDA7XHJcbiAgICBtYXgtd2lkdGg6IDYwMHB4O1xyXG4gICAgbGlzdC1zdHlsZTogbm9uZTtcclxuICAgIGZvbnQtc2l6ZTogMTNweDtcclxuICAgIGxpbmUtaGVpZ2h0OiAyMHB4O1xyXG59XHJcblxyXG4uZGQtbGlzdCB7XHJcbiAgICBkaXNwbGF5OiBibG9jaztcclxuICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcclxuICAgIG1hcmdpbjogMDtcclxuICAgIHBhZGRpbmc6IDA7XHJcbiAgICBsaXN0LXN0eWxlOiBub25lO1xyXG59XHJcblxyXG4uZGQtbGlzdCAuZGQtbGlzdCB7XHJcbiAgICBwYWRkaW5nLWxlZnQ6IDMwcHg7XHJcbn1cclxuXHJcbi5kZC1jb2xsYXBzZWQgLmRkLWxpc3Qge1xyXG4gICAgZGlzcGxheTogbm9uZTtcclxufVxyXG5cclxuLmRkLWl0ZW0sXHJcbi5kZC1lbXB0eSxcclxuLmRkLXBsYWNlaG9sZGVyIHtcclxuICAgIGRpc3BsYXk6IGJsb2NrO1xyXG4gICAgcG9zaXRpb246IHJlbGF0aXZlO1xyXG4gICAgbWFyZ2luOiAwO1xyXG4gICAgcGFkZGluZzogMDtcclxuICAgIG1pbi1oZWlnaHQ6IDIwcHg7XHJcbiAgICBmb250LXNpemU6IDEzcHg7XHJcbiAgICBsaW5lLWhlaWdodDogMjBweDtcclxufVxyXG5cclxuLmRkLWhhbmRsZSB7XHJcbiAgICBkaXNwbGF5OiBibG9jaztcclxuICAgIGhlaWdodDogMzBweDtcclxuICAgIG1hcmdpbjogNXB4IDA7XHJcbiAgICBwYWRkaW5nOiA1cHggMTBweDtcclxuICAgIGNvbG9yOiAjMzMzO1xyXG4gICAgdGV4dC1kZWNvcmF0aW9uOiBub25lO1xyXG4gICAgZm9udC13ZWlnaHQ6IGJvbGQ7XHJcbiAgICBib3JkZXI6IDFweCBzb2xpZCAjY2NjO1xyXG4gICAgYmFja2dyb3VuZDogI2ZhZmFmYTtcclxuICAgIC13ZWJraXQtYm9yZGVyLXJhZGl1czogM3B4O1xyXG4gICAgYm9yZGVyLXJhZGl1czogM3B4O1xyXG4gICAgYm94LXNpemluZzogYm9yZGVyLWJveDtcclxuICAgIC1tb3otYm94LXNpemluZzogYm9yZGVyLWJveDtcclxufVxyXG5cclxuLmRkLWhhbmRsZTpob3ZlciB7XHJcbiAgICBjb2xvcjogIzJlYThlNTtcclxuICAgIGJhY2tncm91bmQ6ICNmZmY7XHJcbn1cclxuXHJcbi5kZC1pdGVtID4gYnV0dG9uIHtcclxuICAgIGRpc3BsYXk6IGJsb2NrO1xyXG4gICAgcG9zaXRpb246IHJlbGF0aXZlO1xyXG4gICAgY3Vyc29yOiBwb2ludGVyO1xyXG4gICAgZmxvYXQ6IGxlZnQ7XHJcbiAgICB3aWR0aDogMjVweDtcclxuICAgIGhlaWdodDogMjBweDtcclxuICAgIG1hcmdpbjogNXB4IDA7XHJcbiAgICBwYWRkaW5nOiAwO1xyXG4gICAgdGV4dC1pbmRlbnQ6IDEwMCU7XHJcbiAgICB3aGl0ZS1zcGFjZTogbm93cmFwO1xyXG4gICAgb3ZlcmZsb3c6IGhpZGRlbjtcclxuICAgIGJvcmRlcjogMDtcclxuICAgIGJhY2tncm91bmQ6IHRyYW5zcGFyZW50O1xyXG4gICAgZm9udC1zaXplOiAxMnB4O1xyXG4gICAgbGluZS1oZWlnaHQ6IDE7XHJcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XHJcbiAgICBmb250LXdlaWdodDogYm9sZDtcclxufVxyXG5cclxuLmRkLWl0ZW0gPiBidXR0b246YmVmb3JlIHtcclxuICAgIGNvbnRlbnQ6ICcrJztcclxuICAgIGRpc3BsYXk6IGJsb2NrO1xyXG4gICAgcG9zaXRpb246IGFic29sdXRlO1xyXG4gICAgd2lkdGg6IDEwMCU7XHJcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XHJcbiAgICB0ZXh0LWluZGVudDogMDtcclxufVxyXG5cclxuLmRkLWl0ZW0gPiBidXR0b25bZGF0YS1hY3Rpb249XCJjb2xsYXBzZVwiXTpiZWZvcmUge1xyXG4gICAgY29udGVudDogJy0nO1xyXG59XHJcblxyXG4uZGQtcGxhY2Vob2xkZXIsXHJcbi5kZC1lbXB0eSB7XHJcbiAgICBtYXJnaW46IDVweCAwO1xyXG4gICAgcGFkZGluZzogMDtcclxuICAgIG1pbi1oZWlnaHQ6IDMwcHg7XHJcbiAgICBiYWNrZ3JvdW5kOiAjZjJmYmZmO1xyXG4gICAgYm9yZGVyOiAxcHggZGFzaGVkICNiNmJjYmY7XHJcbiAgICBib3gtc2l6aW5nOiBib3JkZXItYm94O1xyXG4gICAgLW1vei1ib3gtc2l6aW5nOiBib3JkZXItYm94O1xyXG59XHJcblxyXG4uZGQtZW1wdHkge1xyXG4gICAgYm9yZGVyOiAxcHggZGFzaGVkICNiYmI7XHJcbiAgICBtaW4taGVpZ2h0OiAxMDBweDtcclxuICAgIGJhY2tncm91bmQtY29sb3I6ICNlNWU1ZTU7XHJcbiAgICBiYWNrZ3JvdW5kLWltYWdlOiAtd2Via2l0LWxpbmVhci1ncmFkaWVudCg0NWRlZywgI2ZmZiAyNSUsIHRyYW5zcGFyZW50IDI1JSwgdHJhbnNwYXJlbnQgNzUlLCAjZmZmIDc1JSwgI2ZmZiksXHJcbiAgICAtd2Via2l0LWxpbmVhci1ncmFkaWVudCg0NWRlZywgI2ZmZiAyNSUsIHRyYW5zcGFyZW50IDI1JSwgdHJhbnNwYXJlbnQgNzUlLCAjZmZmIDc1JSwgI2ZmZik7XHJcbiAgICBiYWNrZ3JvdW5kLWltYWdlOiAtbW96LWxpbmVhci1ncmFkaWVudCg0NWRlZywgI2ZmZiAyNSUsIHRyYW5zcGFyZW50IDI1JSwgdHJhbnNwYXJlbnQgNzUlLCAjZmZmIDc1JSwgI2ZmZiksXHJcbiAgICAtbW96LWxpbmVhci1ncmFkaWVudCg0NWRlZywgI2ZmZiAyNSUsIHRyYW5zcGFyZW50IDI1JSwgdHJhbnNwYXJlbnQgNzUlLCAjZmZmIDc1JSwgI2ZmZik7XHJcbiAgICBiYWNrZ3JvdW5kLWltYWdlOiBsaW5lYXItZ3JhZGllbnQoNDVkZWcsICNmZmYgMjUlLCB0cmFuc3BhcmVudCAyNSUsIHRyYW5zcGFyZW50IDc1JSwgI2ZmZiA3NSUsICNmZmYpLFxyXG4gICAgbGluZWFyLWdyYWRpZW50KDQ1ZGVnLCAjZmZmIDI1JSwgdHJhbnNwYXJlbnQgMjUlLCB0cmFuc3BhcmVudCA3NSUsICNmZmYgNzUlLCAjZmZmKTtcclxuICAgIGJhY2tncm91bmQtc2l6ZTogNjBweCA2MHB4O1xyXG4gICAgYmFja2dyb3VuZC1wb3NpdGlvbjogMCAwLCAzMHB4IDMwcHg7XHJcbn1cclxuXHJcbi5kZC1kcmFnZWwge1xyXG4gICAgcG9zaXRpb246IGFic29sdXRlO1xyXG4gICAgcG9pbnRlci1ldmVudHM6IG5vbmU7XHJcbiAgICB6LWluZGV4OiA5OTk5O1xyXG59XHJcblxyXG4uZGQtZHJhZ2VsID4gLmRkLWl0ZW0gLmRkLWhhbmRsZSB7XHJcbiAgICBtYXJnaW4tdG9wOiAwO1xyXG59XHJcblxyXG4uZGQtZHJhZ2VsIC5kZC1oYW5kbGUge1xyXG4gICAgLXdlYmtpdC1ib3gtc2hhZG93OiAycHggNHB4IDZweCAwIHJnYmEoMCwgMCwgMCwgLjEpO1xyXG4gICAgYm94LXNoYWRvdzogMnB4IDRweCA2cHggMCByZ2JhKDAsIDAsIDAsIC4xKTtcclxufVxyXG5cclxuLyoqXHJcbiAqIE5lc3RhYmxlIEV4dHJhc1xyXG4gKi9cclxuXHJcbi5uZXN0YWJsZS1saXN0cyB7XHJcbiAgICBkaXNwbGF5OiBibG9jaztcclxuICAgIGNsZWFyOiBib3RoO1xyXG4gICAgcGFkZGluZzogMzBweCAwO1xyXG4gICAgd2lkdGg6IDEwMCU7XHJcbiAgICBib3JkZXI6IDA7XHJcbiAgICBib3JkZXItdG9wOiAycHggc29saWQgI2RkZDtcclxuICAgIGJvcmRlci1ib3R0b206IDJweCBzb2xpZCAjZGRkO1xyXG59XHJcblxyXG4jbmVzdGFibGUtbWVudSB7XHJcbiAgICBwYWRkaW5nOiAwO1xyXG4gICAgbWFyZ2luOiAyMHB4IDA7XHJcbn1cclxuXHJcbiNuZXN0YWJsZS1vdXRwdXQsXHJcbiNuZXN0YWJsZTItb3V0cHV0IHtcclxuICAgIHdpZHRoOiAxMDAlO1xyXG4gICAgaGVpZ2h0OiA3ZW07XHJcbiAgICBmb250LXNpemU6IDAuNzVlbTtcclxuICAgIGxpbmUtaGVpZ2h0OiAxLjMzMzMzM2VtO1xyXG4gICAgZm9udC1mYW1pbHk6IENvbnNvbGFzLCBtb25vc3BhY2U7XHJcbiAgICBwYWRkaW5nOiA1cHg7XHJcbiAgICBib3gtc2l6aW5nOiBib3JkZXItYm94O1xyXG4gICAgLW1vei1ib3gtc2l6aW5nOiBib3JkZXItYm94O1xyXG59XHJcblxyXG4jbmVzdGFibGUyIC5kZC1oYW5kbGUge1xyXG4gICAgY29sb3I6ICNmZmY7XHJcbiAgICBib3JkZXI6IDFweCBzb2xpZCAjOTk5O1xyXG4gICAgYmFja2dyb3VuZDogI2JiYjtcclxufVxyXG5cclxuI25lc3RhYmxlMiAuZGQtaGFuZGxlOmhvdmVyIHtcclxuICAgIGJhY2tncm91bmQ6ICNiYmI7XHJcbn1cclxuXHJcbiNuZXN0YWJsZTIgLmRkLWl0ZW0gPiBidXR0b246YmVmb3JlIHtcclxuICAgIGNvbG9yOiAjZmZmO1xyXG59XHJcblxyXG4uZGQtaG92ZXIgPiAuZGQtaGFuZGxlIHtcclxuICAgIGJhY2tncm91bmQ6ICMyZWE4ZTUgIWltcG9ydGFudDtcclxufVxyXG5cclxuLyoqXHJcbiAqIE5lc3RhYmxlIERyYWdnYWJsZSBIYW5kbGVzXHJcbiAqL1xyXG5cclxuLmRkMy1jb250ZW50IHtcclxuICAgIGRpc3BsYXk6IGJsb2NrO1xyXG4gICAgaGVpZ2h0OiAzMHB4O1xyXG4gICAgbWFyZ2luOiA1cHggMDtcclxuICAgIHBhZGRpbmc6IDVweCAxMHB4IDVweCA0MHB4O1xyXG4gICAgY29sb3I6ICMzMzM7XHJcbiAgICB0ZXh0LWRlY29yYXRpb246IG5vbmU7XHJcbiAgICBmb250LXdlaWdodDogYm9sZDtcclxuICAgIGJvcmRlcjogMXB4IHNvbGlkICNjY2M7XHJcbiAgICBiYWNrZ3JvdW5kOiAjZmFmYWZhO1xyXG4gICAgLXdlYmtpdC1ib3JkZXItcmFkaXVzOiAzcHg7XHJcbiAgICBib3JkZXItcmFkaXVzOiAzcHg7XHJcbiAgICBib3gtc2l6aW5nOiBib3JkZXItYm94O1xyXG4gICAgLW1vei1ib3gtc2l6aW5nOiBib3JkZXItYm94O1xyXG59XHJcblxyXG4uZGQzLWNvbnRlbnQ6aG92ZXIge1xyXG4gICAgY29sb3I6ICMyZWE4ZTU7XHJcbiAgICBiYWNrZ3JvdW5kOiAjZmZmO1xyXG59XHJcblxyXG4uZGQtZHJhZ2VsID4gLmRkMy1pdGVtID4gLmRkMy1jb250ZW50IHtcclxuICAgIG1hcmdpbjogMDtcclxufVxyXG5cclxuLmRkMy1pdGVtID4gYnV0dG9uIHtcclxuICAgIG1hcmdpbi1sZWZ0OiAzMHB4O1xyXG59XHJcblxyXG4uZGQzLWhhbmRsZSB7XHJcbiAgICBwb3NpdGlvbjogYWJzb2x1dGU7XHJcbiAgICBtYXJnaW46IDA7XHJcbiAgICBsZWZ0OiAwO1xyXG4gICAgdG9wOiAwO1xyXG4gICAgY3Vyc29yOiBwb2ludGVyO1xyXG4gICAgd2lkdGg6IDMwcHg7XHJcbiAgICB0ZXh0LWluZGVudDogMTAwJTtcclxuICAgIHdoaXRlLXNwYWNlOiBub3dyYXA7XHJcbiAgICBvdmVyZmxvdzogaGlkZGVuO1xyXG4gICAgYm9yZGVyOiAxcHggc29saWQgI2FhYTtcclxuICAgIGJhY2tncm91bmQ6ICNkZGQ7XHJcbiAgICBib3JkZXItdG9wLXJpZ2h0LXJhZGl1czogMDtcclxuICAgIGJvcmRlci1ib3R0b20tcmlnaHQtcmFkaXVzOiAwO1xyXG59XHJcblxyXG4uZGQzLWhhbmRsZTpiZWZvcmUge1xyXG4gICAgY29udGVudDogJ+KJoSc7XHJcbiAgICBkaXNwbGF5OiBibG9jaztcclxuICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcclxuICAgIGxlZnQ6IDA7XHJcbiAgICB0b3A6IDNweDtcclxuICAgIHdpZHRoOiAxMDAlO1xyXG4gICAgdGV4dC1hbGlnbjogY2VudGVyO1xyXG4gICAgdGV4dC1pbmRlbnQ6IDA7XHJcbiAgICBjb2xvcjogI2ZmZjtcclxuICAgIGZvbnQtc2l6ZTogMjBweDtcclxuICAgIGZvbnQtd2VpZ2h0OiBub3JtYWw7XHJcbn1cclxuXHJcbi5kZDMtaGFuZGxlOmhvdmVyIHtcclxuICAgIGJhY2tncm91bmQ6ICNkZGQ7XHJcbn1cclxuXHJcbi5kaXNhYmxlZCB7XHJcbiAgICBwb2ludGVyLWV2ZW50czogbm9uZTsgLy9UaGlzIG1ha2VzIGl0IG5vdCBjbGlja2FibGVcclxuICAgIG9wYWNpdHk6IDAuNjsgLy9UaGlzIGdyYXlzIGl0IG91dCB0byBsb29rIGRpc2FibGVkXHJcbn1cclxuIl19 */");

/***/ }),

/***/ "./src/app/modules/settings-web/pages/settings-web/settings-web.component.ts":
/*!***********************************************************************************!*\
  !*** ./src/app/modules/settings-web/pages/settings-web/settings-web.component.ts ***!
  \***********************************************************************************/
/*! exports provided: SettingsWebComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SettingsWebComponent", function() { return SettingsWebComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var ngx_bootstrap_tabs__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ngx-bootstrap/tabs */ "./node_modules/ngx-bootstrap/tabs/fesm5/ngx-bootstrap-tabs.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _core_services_setting_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../../../core/services/setting.service */ "./src/app/core/services/setting.service.ts");
/* harmony import */ var _core_services_helper_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../../../core/services/helper.service */ "./src/app/core/services/helper.service.ts");
/* harmony import */ var src_app_core_services_authentication_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! src/app/core/services/authentication.service */ "./src/app/core/services/authentication.service.ts");







var SettingsWebComponent = /** @class */ (function () {
    function SettingsWebComponent(settingService, helperService, authenticationService, route) {
        var _this = this;
        this.settingService = settingService;
        this.helperService = helperService;
        this.authenticationService = authenticationService;
        this.route = route;
        this.activeSettingTab = '1';
        this.isSettingsLoad = false;
        this.settings = [];
        // this.route.queryParams.subscribe(params => {
        //     if( params['tab'] && Number(params['tab'])){
        //         this.activeSettingTab = params['tab'];
        //     }
        // });
        this.authenticationService.loginUser.subscribe(function (x) { return _this.loginUser = x; });
    }
    SettingsWebComponent.prototype.ngOnInit = function () {
    };
    SettingsWebComponent.prototype.setSettingTab = function ($event) {
        this.activeSettingTab = $event.id;
    };
    SettingsWebComponent.prototype.getActiveSettingTab = function (tab) {
        return this.activeSettingTab === tab;
    };
    SettingsWebComponent.ctorParameters = function () { return [
        { type: _core_services_setting_service__WEBPACK_IMPORTED_MODULE_4__["SettingService"] },
        { type: _core_services_helper_service__WEBPACK_IMPORTED_MODULE_5__["HelperService"] },
        { type: src_app_core_services_authentication_service__WEBPACK_IMPORTED_MODULE_6__["AuthenticationService"] },
        { type: _angular_router__WEBPACK_IMPORTED_MODULE_3__["ActivatedRoute"] }
    ]; };
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewChild"])('tabset', { static: true }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", ngx_bootstrap_tabs__WEBPACK_IMPORTED_MODULE_2__["TabsetComponent"])
    ], SettingsWebComponent.prototype, "tabset", void 0);
    SettingsWebComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-settings',
            template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./settings-web.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/modules/settings-web/pages/settings-web/settings-web.component.html")).default,
            encapsulation: _angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewEncapsulation"].None,
            styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./settings-web.component.scss */ "./src/app/modules/settings-web/pages/settings-web/settings-web.component.scss")).default]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_core_services_setting_service__WEBPACK_IMPORTED_MODULE_4__["SettingService"],
            _core_services_helper_service__WEBPACK_IMPORTED_MODULE_5__["HelperService"],
            src_app_core_services_authentication_service__WEBPACK_IMPORTED_MODULE_6__["AuthenticationService"],
            _angular_router__WEBPACK_IMPORTED_MODULE_3__["ActivatedRoute"]])
    ], SettingsWebComponent);
    return SettingsWebComponent;
}());



/***/ }),

/***/ "./src/app/modules/settings-web/settings-web-routing.module.ts":
/*!*********************************************************************!*\
  !*** ./src/app/modules/settings-web/settings-web-routing.module.ts ***!
  \*********************************************************************/
/*! exports provided: SettingsWebRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SettingsWebRoutingModule", function() { return SettingsWebRoutingModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _pages_settings_web_settings_web_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./pages/settings-web/settings-web.component */ "./src/app/modules/settings-web/pages/settings-web/settings-web.component.ts");
/* harmony import */ var _pages_manager_regions_manager_regions_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./pages/manager-regions/manager-regions.component */ "./src/app/modules/settings-web/pages/manager-regions/manager-regions.component.ts");
/* harmony import */ var _pages_manager_widgets_manager_widgets_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./pages/manager-widgets/manager-widgets.component */ "./src/app/modules/settings-web/pages/manager-widgets/manager-widgets.component.ts");
/* harmony import */ var _pages_manager_widgets_types_manager_widgets_types_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./pages/manager-widgets-types/manager-widgets-types.component */ "./src/app/modules/settings-web/pages/manager-widgets-types/manager-widgets-types.component.ts");
/* harmony import */ var _pages_manager_file_manager_file_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./pages/manager-file/manager-file.component */ "./src/app/modules/settings-web/pages/manager-file/manager-file.component.ts");








var routes = [
    {
        path: '',
        children: [
            {
                path: '',
                component: _pages_settings_web_settings_web_component__WEBPACK_IMPORTED_MODULE_3__["SettingsWebComponent"],
            },
            {
                path: 'manager-regions/:id',
                component: _pages_manager_regions_manager_regions_component__WEBPACK_IMPORTED_MODULE_4__["ManagerRegionsComponent"],
                data: {
                    breadcrumbs: {
                        text: 'common.managerRegions',
                        icon: 'fa fa-product-hunt',
                        hasParams: false,
                        show: false,
                        isHome: false
                    }
                }
            },
            {
                path: 'manager-widgets/:id',
                component: _pages_manager_widgets_manager_widgets_component__WEBPACK_IMPORTED_MODULE_5__["ManagerWidgetsComponent"],
                data: {
                    breadcrumbs: {
                        text: 'common.managerWidgets',
                        icon: 'fa fa-product-hunt',
                        hasParams: false,
                        show: false,
                        isHome: false
                    }
                }
            },
            {
                path: 'manager-widgets-types/:id',
                component: _pages_manager_widgets_types_manager_widgets_types_component__WEBPACK_IMPORTED_MODULE_6__["ManagerWidgetTypesComponent"],
                data: {
                    breadcrumbs: {
                        text: 'common.managerFields',
                        icon: 'fa fa-product-hunt',
                        hasParams: false,
                        show: false,
                        isHome: false
                    }
                }
            },
            {
                path: 'manager-file/:id',
                component: _pages_manager_file_manager_file_component__WEBPACK_IMPORTED_MODULE_7__["ManagerFileComponent"],
                data: {
                    breadcrumbs: {
                        text: 'common.managerFields',
                        icon: 'fa fa-product-hunt',
                        hasParams: false,
                        show: false,
                        isHome: false
                    }
                }
            }
        ]
    }
];
var SettingsWebRoutingModule = /** @class */ (function () {
    function SettingsWebRoutingModule() {
    }
    SettingsWebRoutingModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)],
            exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]]
        })
    ], SettingsWebRoutingModule);
    return SettingsWebRoutingModule;
}());



/***/ }),

/***/ "./src/app/modules/settings-web/settings-web.module.ts":
/*!*************************************************************!*\
  !*** ./src/app/modules/settings-web/settings-web.module.ts ***!
  \*************************************************************/
/*! exports provided: SettingsModule, HttpLoaderFactory */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SettingsModule", function() { return SettingsModule; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "HttpLoaderFactory", function() { return HttpLoaderFactory; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _ng_select_ng_select__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @ng-select/ng-select */ "./node_modules/@ng-select/ng-select/fesm5/ng-select.js");
/* harmony import */ var ngx_bootstrap__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ngx-bootstrap */ "./node_modules/ngx-bootstrap/esm5/ngx-bootstrap.js");
/* harmony import */ var ngx_ui_switch__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ngx-ui-switch */ "./node_modules/ngx-ui-switch/ui-switch.es5.js");
/* harmony import */ var ngx_permissions__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ngx-permissions */ "./node_modules/ngx-permissions/ngx-permissions.umd.js");
/* harmony import */ var ngx_permissions__WEBPACK_IMPORTED_MODULE_8___default = /*#__PURE__*/__webpack_require__.n(ngx_permissions__WEBPACK_IMPORTED_MODULE_8__);
/* harmony import */ var ngx_editor__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ngx-editor */ "./node_modules/ngx-editor/fesm5/ngx-editor.js");
/* harmony import */ var ngx_export_as__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ngx-export-as */ "./node_modules/ngx-export-as/fesm2015/ngx-export-as.js");
/* harmony import */ var _ngx_translate_core__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! @ngx-translate/core */ "./node_modules/@ngx-translate/core/fesm5/ngx-translate-core.js");
/* harmony import */ var _ngx_translate_http_loader__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! @ngx-translate/http-loader */ "./node_modules/@ngx-translate/http-loader/fesm5/ngx-translate-http-loader.js");
/* harmony import */ var angular_checklist__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! angular-checklist */ "./node_modules/angular-checklist/fesm5/angular-checklist.js");
/* harmony import */ var angular_datatables__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! angular-datatables */ "./node_modules/angular-datatables/index.js");
/* harmony import */ var _shared_shared_module__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! ../../shared/shared.module */ "./src/app/shared/shared.module.ts");
/* harmony import */ var _settings_web_routing_module__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! ./settings-web-routing.module */ "./src/app/modules/settings-web/settings-web-routing.module.ts");
/* harmony import */ var _pages_settings_web_settings_web_component__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! ./pages/settings-web/settings-web.component */ "./src/app/modules/settings-web/pages/settings-web/settings-web.component.ts");
/* harmony import */ var _components_regions_regions_component__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! ./components/regions/regions.component */ "./src/app/modules/settings-web/components/regions/regions.component.ts");
/* harmony import */ var _components_regions_create_regions_create_component__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(/*! ./components/regions-create/regions-create.component */ "./src/app/modules/settings-web/components/regions-create/regions-create.component.ts");
/* harmony import */ var _components_regions_edit_regions_edit_component__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__(/*! ./components/regions-edit/regions-edit.component */ "./src/app/modules/settings-web/components/regions-edit/regions-edit.component.ts");
/* harmony import */ var _components_templates_templates_component__WEBPACK_IMPORTED_MODULE_21__ = __webpack_require__(/*! ./components/templates/templates.component */ "./src/app/modules/settings-web/components/templates/templates.component.ts");
/* harmony import */ var _components_templates_create_templates_create_component__WEBPACK_IMPORTED_MODULE_22__ = __webpack_require__(/*! ./components/templates-create/templates-create.component */ "./src/app/modules/settings-web/components/templates-create/templates-create.component.ts");
/* harmony import */ var _components_templates_edit_templates_edit_component__WEBPACK_IMPORTED_MODULE_23__ = __webpack_require__(/*! ./components/templates-edit/templates-edit.component */ "./src/app/modules/settings-web/components/templates-edit/templates-edit.component.ts");
/* harmony import */ var _components_pages_pages_component__WEBPACK_IMPORTED_MODULE_24__ = __webpack_require__(/*! ./components/pages/pages.component */ "./src/app/modules/settings-web/components/pages/pages.component.ts");
/* harmony import */ var _components_pages_create_pages_create_component__WEBPACK_IMPORTED_MODULE_25__ = __webpack_require__(/*! ./components/pages-create/pages-create.component */ "./src/app/modules/settings-web/components/pages-create/pages-create.component.ts");
/* harmony import */ var _components_pages_edit_pages_edit_component__WEBPACK_IMPORTED_MODULE_26__ = __webpack_require__(/*! ./components/pages-edit/pages-edit.component */ "./src/app/modules/settings-web/components/pages-edit/pages-edit.component.ts");
/* harmony import */ var _components_widgets_widgets_component__WEBPACK_IMPORTED_MODULE_27__ = __webpack_require__(/*! ./components/widgets/widgets.component */ "./src/app/modules/settings-web/components/widgets/widgets.component.ts");
/* harmony import */ var _components_widgets_create_widgets_create_component__WEBPACK_IMPORTED_MODULE_28__ = __webpack_require__(/*! ./components/widgets-create/widgets-create.component */ "./src/app/modules/settings-web/components/widgets-create/widgets-create.component.ts");
/* harmony import */ var _components_widgets_edit_widgets_edit_component__WEBPACK_IMPORTED_MODULE_29__ = __webpack_require__(/*! ./components/widgets-edit/widgets-edit.component */ "./src/app/modules/settings-web/components/widgets-edit/widgets-edit.component.ts");
/* harmony import */ var _components_widgets_edit_data_widgets_edit_data_component__WEBPACK_IMPORTED_MODULE_30__ = __webpack_require__(/*! ./components/widgets-edit-data/widgets-edit-data.component */ "./src/app/modules/settings-web/components/widgets-edit-data/widgets-edit-data.component.ts");
/* harmony import */ var _components_themes_themes_component__WEBPACK_IMPORTED_MODULE_31__ = __webpack_require__(/*! ./components/themes/themes.component */ "./src/app/modules/settings-web/components/themes/themes.component.ts");
/* harmony import */ var _components_themes_create_themes_create_component__WEBPACK_IMPORTED_MODULE_32__ = __webpack_require__(/*! ./components/themes-create/themes-create.component */ "./src/app/modules/settings-web/components/themes-create/themes-create.component.ts");
/* harmony import */ var _components_themes_edit_themes_edit_component__WEBPACK_IMPORTED_MODULE_33__ = __webpack_require__(/*! ./components/themes-edit/themes-edit.component */ "./src/app/modules/settings-web/components/themes-edit/themes-edit.component.ts");
/* harmony import */ var _components_themes_create_import_themes_create_import_component__WEBPACK_IMPORTED_MODULE_34__ = __webpack_require__(/*! ./components/themes-create-import/themes-create-import.component */ "./src/app/modules/settings-web/components/themes-create-import/themes-create-import.component.ts");
/* harmony import */ var _components_widgets_types_widgets_types_component__WEBPACK_IMPORTED_MODULE_35__ = __webpack_require__(/*! ./components/widgets-types/widgets-types.component */ "./src/app/modules/settings-web/components/widgets-types/widgets-types.component.ts");
/* harmony import */ var _components_widgets_types_create_widgets_types_create_component__WEBPACK_IMPORTED_MODULE_36__ = __webpack_require__(/*! ./components/widgets-types-create/widgets-types-create.component */ "./src/app/modules/settings-web/components/widgets-types-create/widgets-types-create.component.ts");
/* harmony import */ var _components_widgets_types_edit_widgets_types_edit_component__WEBPACK_IMPORTED_MODULE_37__ = __webpack_require__(/*! ./components/widgets-types-edit/widgets-types-edit.component */ "./src/app/modules/settings-web/components/widgets-types-edit/widgets-types-edit.component.ts");
/* harmony import */ var _pages_manager_regions_manager_regions_component__WEBPACK_IMPORTED_MODULE_38__ = __webpack_require__(/*! ./pages/manager-regions/manager-regions.component */ "./src/app/modules/settings-web/pages/manager-regions/manager-regions.component.ts");
/* harmony import */ var _components_manager_regions_create_manager_regions_create_component__WEBPACK_IMPORTED_MODULE_39__ = __webpack_require__(/*! ./components/manager-regions-create/manager-regions-create.component */ "./src/app/modules/settings-web/components/manager-regions-create/manager-regions-create.component.ts");
/* harmony import */ var _components_manager_regions_edit_manager_regions_edit_component__WEBPACK_IMPORTED_MODULE_40__ = __webpack_require__(/*! ./components/manager-regions-edit/manager-regions-edit.component */ "./src/app/modules/settings-web/components/manager-regions-edit/manager-regions-edit.component.ts");
/* harmony import */ var _pages_manager_widgets_manager_widgets_component__WEBPACK_IMPORTED_MODULE_41__ = __webpack_require__(/*! ./pages/manager-widgets/manager-widgets.component */ "./src/app/modules/settings-web/pages/manager-widgets/manager-widgets.component.ts");
/* harmony import */ var _components_manager_widgets_create_manager_widgets_create_component__WEBPACK_IMPORTED_MODULE_42__ = __webpack_require__(/*! ./components/manager-widgets-create/manager-widgets-create.component */ "./src/app/modules/settings-web/components/manager-widgets-create/manager-widgets-create.component.ts");
/* harmony import */ var _components_manager_widgets_edit_manager_widgets_edit_component__WEBPACK_IMPORTED_MODULE_43__ = __webpack_require__(/*! ./components/manager-widgets-edit/manager-widgets-edit.component */ "./src/app/modules/settings-web/components/manager-widgets-edit/manager-widgets-edit.component.ts");
/* harmony import */ var _pages_manager_widgets_types_manager_widgets_types_component__WEBPACK_IMPORTED_MODULE_44__ = __webpack_require__(/*! ./pages/manager-widgets-types/manager-widgets-types.component */ "./src/app/modules/settings-web/pages/manager-widgets-types/manager-widgets-types.component.ts");
/* harmony import */ var _components_manager_widgets_types_create_manager_widgets_types_create_component__WEBPACK_IMPORTED_MODULE_45__ = __webpack_require__(/*! ./components/manager-widgets-types-create/manager-widgets-types-create.component */ "./src/app/modules/settings-web/components/manager-widgets-types-create/manager-widgets-types-create.component.ts");
/* harmony import */ var _components_manager_widgets_types_edit_manager_widgets_types_edit_component__WEBPACK_IMPORTED_MODULE_46__ = __webpack_require__(/*! ./components/manager-widgets-types-edit/manager-widgets-types-edit.component */ "./src/app/modules/settings-web/components/manager-widgets-types-edit/manager-widgets-types-edit.component.ts");
/* harmony import */ var _pages_manager_file_manager_file_component__WEBPACK_IMPORTED_MODULE_47__ = __webpack_require__(/*! ./pages/manager-file/manager-file.component */ "./src/app/modules/settings-web/pages/manager-file/manager-file.component.ts");
/* harmony import */ var ngx_monaco_editor__WEBPACK_IMPORTED_MODULE_48__ = __webpack_require__(/*! ngx-monaco-editor */ "./node_modules/ngx-monaco-editor/fesm5/ngx-monaco-editor.js");
/* harmony import */ var src_app_shared_components_light_bulb_light_bulb_component__WEBPACK_IMPORTED_MODULE_49__ = __webpack_require__(/*! src/app/shared/components/light-bulb/light-bulb.component */ "./src/app/shared/components/light-bulb/light-bulb.component.ts");


















































var SettingsModule = /** @class */ (function () {
    function SettingsModule() {
    }
    SettingsModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            declarations: [
                _pages_settings_web_settings_web_component__WEBPACK_IMPORTED_MODULE_17__["SettingsWebComponent"],
                _components_regions_create_regions_create_component__WEBPACK_IMPORTED_MODULE_19__["RegionsCreateComponent"],
                _components_regions_edit_regions_edit_component__WEBPACK_IMPORTED_MODULE_20__["RegionsEditComponent"],
                _components_regions_regions_component__WEBPACK_IMPORTED_MODULE_18__["RegionsComponent"],
                _components_templates_create_templates_create_component__WEBPACK_IMPORTED_MODULE_22__["TemplatesCreateComponent"],
                _components_templates_edit_templates_edit_component__WEBPACK_IMPORTED_MODULE_23__["TemplatesEditComponent"],
                _components_templates_templates_component__WEBPACK_IMPORTED_MODULE_21__["TemplatesComponent"],
                _components_widgets_create_widgets_create_component__WEBPACK_IMPORTED_MODULE_28__["WidgetsCreateComponent"],
                _components_widgets_edit_widgets_edit_component__WEBPACK_IMPORTED_MODULE_29__["WidgetsEditComponent"],
                _components_widgets_edit_data_widgets_edit_data_component__WEBPACK_IMPORTED_MODULE_30__["WidgetsEditDataComponent"],
                _components_widgets_widgets_component__WEBPACK_IMPORTED_MODULE_27__["WidgetsComponent"],
                _components_pages_create_pages_create_component__WEBPACK_IMPORTED_MODULE_25__["PagesCreateComponent"],
                _components_pages_edit_pages_edit_component__WEBPACK_IMPORTED_MODULE_26__["PagesEditComponent"],
                _components_pages_pages_component__WEBPACK_IMPORTED_MODULE_24__["PagesComponent"],
                _pages_manager_regions_manager_regions_component__WEBPACK_IMPORTED_MODULE_38__["ManagerRegionsComponent"],
                _pages_manager_file_manager_file_component__WEBPACK_IMPORTED_MODULE_47__["ManagerFileComponent"],
                _components_manager_regions_create_manager_regions_create_component__WEBPACK_IMPORTED_MODULE_39__["ManagerRegionsCreateComponent"],
                _components_manager_regions_edit_manager_regions_edit_component__WEBPACK_IMPORTED_MODULE_40__["ManagerRegionsEditComponent"],
                _components_themes_themes_component__WEBPACK_IMPORTED_MODULE_31__["ThemesComponent"],
                _components_themes_create_themes_create_component__WEBPACK_IMPORTED_MODULE_32__["ThemesCreateComponent"],
                _components_themes_create_import_themes_create_import_component__WEBPACK_IMPORTED_MODULE_34__["ThemesCreateImportComponent"],
                _components_themes_edit_themes_edit_component__WEBPACK_IMPORTED_MODULE_33__["ThemesEditComponent"],
                _pages_manager_widgets_manager_widgets_component__WEBPACK_IMPORTED_MODULE_41__["ManagerWidgetsComponent"],
                _components_manager_widgets_create_manager_widgets_create_component__WEBPACK_IMPORTED_MODULE_42__["ManagerWidgetsCreateComponent"],
                _components_manager_widgets_edit_manager_widgets_edit_component__WEBPACK_IMPORTED_MODULE_43__["ManagerWidgetsEditComponent"],
                _components_widgets_types_widgets_types_component__WEBPACK_IMPORTED_MODULE_35__["WidgetsTypesComponent"],
                _components_widgets_types_create_widgets_types_create_component__WEBPACK_IMPORTED_MODULE_36__["WidgetsTypesCreateComponent"],
                _components_widgets_types_edit_widgets_types_edit_component__WEBPACK_IMPORTED_MODULE_37__["WidgetsTypesEditComponent"],
                _pages_manager_widgets_types_manager_widgets_types_component__WEBPACK_IMPORTED_MODULE_44__["ManagerWidgetTypesComponent"],
                _components_manager_widgets_types_create_manager_widgets_types_create_component__WEBPACK_IMPORTED_MODULE_45__["ManagerWidgetsTypesCreateComponent"],
                _components_manager_widgets_types_edit_manager_widgets_types_edit_component__WEBPACK_IMPORTED_MODULE_46__["ManagerWidgetsTypesEditComponent"],
                src_app_shared_components_light_bulb_light_bulb_component__WEBPACK_IMPORTED_MODULE_49__["LightBulbComponent"]
            ],
            imports: [
                _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
                _settings_web_routing_module__WEBPACK_IMPORTED_MODULE_16__["SettingsWebRoutingModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_4__["FormsModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_4__["ReactiveFormsModule"],
                _ng_select_ng_select__WEBPACK_IMPORTED_MODULE_5__["NgSelectModule"],
                angular_checklist__WEBPACK_IMPORTED_MODULE_13__["ChecklistModule"],
                angular_datatables__WEBPACK_IMPORTED_MODULE_14__["DataTablesModule"],
                ngx_permissions__WEBPACK_IMPORTED_MODULE_8__["NgxPermissionsModule"],
                ngx_editor__WEBPACK_IMPORTED_MODULE_9__["NgxEditorModule"],
                ngx_export_as__WEBPACK_IMPORTED_MODULE_10__["ExportAsModule"],
                ngx_bootstrap__WEBPACK_IMPORTED_MODULE_6__["TimepickerModule"].forRoot(),
                ngx_bootstrap__WEBPACK_IMPORTED_MODULE_6__["TabsModule"].forRoot(),
                ngx_bootstrap__WEBPACK_IMPORTED_MODULE_6__["ModalModule"].forRoot(),
                ngx_bootstrap__WEBPACK_IMPORTED_MODULE_6__["TooltipModule"].forRoot(),
                ngx_bootstrap__WEBPACK_IMPORTED_MODULE_6__["BsDropdownModule"].forRoot(),
                ngx_ui_switch__WEBPACK_IMPORTED_MODULE_7__["UiSwitchModule"].forRoot({
                    checkedLabel: 'Active',
                    uncheckedLabel: 'Inactive',
                    color: 'rgb(0, 189, 99)',
                    switchColor: '#fff',
                    defaultBgColor: '#c6c6c6',
                    defaultBoColor: '#c39ef8'
                }),
                _ngx_translate_core__WEBPACK_IMPORTED_MODULE_11__["TranslateModule"].forChild({
                    loader: {
                        provide: _ngx_translate_core__WEBPACK_IMPORTED_MODULE_11__["TranslateLoader"],
                        useFactory: (HttpLoaderFactory),
                        deps: [_angular_common_http__WEBPACK_IMPORTED_MODULE_3__["HttpClient"]]
                    }
                }),
                _shared_shared_module__WEBPACK_IMPORTED_MODULE_15__["SharedModule"],
                ngx_bootstrap__WEBPACK_IMPORTED_MODULE_6__["CollapseModule"],
                ngx_monaco_editor__WEBPACK_IMPORTED_MODULE_48__["MonacoEditorModule"].forRoot()
            ],
            entryComponents: [
                _components_regions_create_regions_create_component__WEBPACK_IMPORTED_MODULE_19__["RegionsCreateComponent"],
                _components_regions_edit_regions_edit_component__WEBPACK_IMPORTED_MODULE_20__["RegionsEditComponent"],
                _components_templates_create_templates_create_component__WEBPACK_IMPORTED_MODULE_22__["TemplatesCreateComponent"],
                _components_templates_edit_templates_edit_component__WEBPACK_IMPORTED_MODULE_23__["TemplatesEditComponent"],
                _components_widgets_create_widgets_create_component__WEBPACK_IMPORTED_MODULE_28__["WidgetsCreateComponent"],
                _components_widgets_edit_widgets_edit_component__WEBPACK_IMPORTED_MODULE_29__["WidgetsEditComponent"],
                _components_widgets_edit_data_widgets_edit_data_component__WEBPACK_IMPORTED_MODULE_30__["WidgetsEditDataComponent"],
                _components_pages_create_pages_create_component__WEBPACK_IMPORTED_MODULE_25__["PagesCreateComponent"],
                _components_pages_edit_pages_edit_component__WEBPACK_IMPORTED_MODULE_26__["PagesEditComponent"],
                _components_pages_pages_component__WEBPACK_IMPORTED_MODULE_24__["PagesComponent"],
                _components_manager_regions_create_manager_regions_create_component__WEBPACK_IMPORTED_MODULE_39__["ManagerRegionsCreateComponent"],
                _components_manager_regions_edit_manager_regions_edit_component__WEBPACK_IMPORTED_MODULE_40__["ManagerRegionsEditComponent"],
                _components_themes_create_themes_create_component__WEBPACK_IMPORTED_MODULE_32__["ThemesCreateComponent"],
                _components_themes_create_import_themes_create_import_component__WEBPACK_IMPORTED_MODULE_34__["ThemesCreateImportComponent"],
                _components_themes_edit_themes_edit_component__WEBPACK_IMPORTED_MODULE_33__["ThemesEditComponent"],
                _components_manager_widgets_create_manager_widgets_create_component__WEBPACK_IMPORTED_MODULE_42__["ManagerWidgetsCreateComponent"],
                _components_manager_widgets_edit_manager_widgets_edit_component__WEBPACK_IMPORTED_MODULE_43__["ManagerWidgetsEditComponent"],
                _components_widgets_types_create_widgets_types_create_component__WEBPACK_IMPORTED_MODULE_36__["WidgetsTypesCreateComponent"],
                _components_widgets_types_edit_widgets_types_edit_component__WEBPACK_IMPORTED_MODULE_37__["WidgetsTypesEditComponent"],
                _components_manager_widgets_types_create_manager_widgets_types_create_component__WEBPACK_IMPORTED_MODULE_45__["ManagerWidgetsTypesCreateComponent"],
                _components_manager_widgets_types_edit_manager_widgets_types_edit_component__WEBPACK_IMPORTED_MODULE_46__["ManagerWidgetsTypesEditComponent"],
                src_app_shared_components_light_bulb_light_bulb_component__WEBPACK_IMPORTED_MODULE_49__["LightBulbComponent"]
            ]
        })
    ], SettingsModule);
    return SettingsModule;
}());

// Required for AOT compilation
function HttpLoaderFactory(http) {
    return new _ngx_translate_http_loader__WEBPACK_IMPORTED_MODULE_12__["TranslateHttpLoader"](http, './assets/i18n/', '.json');
}


/***/ }),

/***/ "./src/app/shared/components/light-bulb/light-bulb.component.scss":
/*!************************************************************************!*\
  !*** ./src/app/shared/components/light-bulb/light-bulb.component.scss ***!
  \************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = (".dropdown-menu {\n  left: -20px !important;\n  box-shadow: 2px 2px 5px 0px #d6c0d6;\n}\n\n.person-dropdown:after {\n  content: \"\";\n  position: absolute;\n  top: -7px;\n  left: 15px;\n  width: 14px;\n  height: 14px;\n  -ms-transform: rotate(-45deg);\n      transform: rotate(-45deg);\n  z-index: -1;\n  background: white;\n  border-right: 1px solid rgba(0, 0, 0, 0.15);\n  border-top: 1px solid rgba(0, 0, 0, 0.15);\n}\n\n.inline-block {\n  display: inline-block;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvc2hhcmVkL2NvbXBvbmVudHMvbGlnaHQtYnVsYi9DOlxcVXNlcnNcXHRodWFuXFxPbmVEcml2ZVxcRGVza3RvcFxcZ2xhdmFsLXRodWFuZGluaC9zcmNcXGFwcFxcc2hhcmVkXFxjb21wb25lbnRzXFxsaWdodC1idWxiXFxsaWdodC1idWxiLmNvbXBvbmVudC5zY3NzIiwic3JjL2FwcC9zaGFyZWQvY29tcG9uZW50cy9saWdodC1idWxiL2xpZ2h0LWJ1bGIuY29tcG9uZW50LnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDSSxzQkFBQTtFQUNBLG1DQUFBO0FDQ0o7O0FERUE7RUFDUSxXQUFBO0VBQ0Esa0JBQUE7RUFDQSxTQUFBO0VBQ0EsVUFBQTtFQUNBLFdBQUE7RUFDQSxZQUFBO0VBQ0EsNkJBQUE7TUFBQSx5QkFBQTtFQUNBLFdBQUE7RUFDQSxpQkFBQTtFQUNBLDJDQUFBO0VBQ0EseUNBQUE7QUNDUjs7QURDSTtFQUNJLHFCQUFBO0FDRVIiLCJmaWxlIjoic3JjL2FwcC9zaGFyZWQvY29tcG9uZW50cy9saWdodC1idWxiL2xpZ2h0LWJ1bGIuY29tcG9uZW50LnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyIuZHJvcGRvd24tbWVudXtcclxuICAgIGxlZnQ6IC0yMHB4ICFpbXBvcnRhbnQ7XHJcbiAgICBib3gtc2hhZG93OiAycHggMnB4IDVweCAwcHggcmdiYSgyMTQsMTkyLDIxNCwxKTtcclxufVxyXG4gICAgXHJcbi5wZXJzb24tZHJvcGRvd246YWZ0ZXIge1xyXG4gICAgICAgIGNvbnRlbnQ6IFwiXCI7XHJcbiAgICAgICAgcG9zaXRpb246IGFic29sdXRlO1xyXG4gICAgICAgIHRvcDogLTdweDtcclxuICAgICAgICBsZWZ0OiAxNXB4O1xyXG4gICAgICAgIHdpZHRoOiAxNHB4O1xyXG4gICAgICAgIGhlaWdodDogMTRweDtcclxuICAgICAgICB0cmFuc2Zvcm06IHJvdGF0ZSgtNDVkZWcpO1xyXG4gICAgICAgIHotaW5kZXg6IC0xO1xyXG4gICAgICAgIGJhY2tncm91bmQ6IHdoaXRlO1xyXG4gICAgICAgIGJvcmRlci1yaWdodDogMXB4IHNvbGlkIHJnYmEoMCwgMCwgMCwgMC4xNSk7XHJcbiAgICAgICAgYm9yZGVyLXRvcDogMXB4IHNvbGlkIHJnYmEoMCwgMCwgMCwgMC4xNSk7XHJcbiAgICB9XHJcbiAgICAuaW5saW5lLWJsb2Nre1xyXG4gICAgICAgIGRpc3BsYXk6IGlubGluZS1ibG9jaztcclxuICAgIH1cclxuICAgICIsIi5kcm9wZG93bi1tZW51IHtcbiAgbGVmdDogLTIwcHggIWltcG9ydGFudDtcbiAgYm94LXNoYWRvdzogMnB4IDJweCA1cHggMHB4ICNkNmMwZDY7XG59XG5cbi5wZXJzb24tZHJvcGRvd246YWZ0ZXIge1xuICBjb250ZW50OiBcIlwiO1xuICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gIHRvcDogLTdweDtcbiAgbGVmdDogMTVweDtcbiAgd2lkdGg6IDE0cHg7XG4gIGhlaWdodDogMTRweDtcbiAgdHJhbnNmb3JtOiByb3RhdGUoLTQ1ZGVnKTtcbiAgei1pbmRleDogLTE7XG4gIGJhY2tncm91bmQ6IHdoaXRlO1xuICBib3JkZXItcmlnaHQ6IDFweCBzb2xpZCByZ2JhKDAsIDAsIDAsIDAuMTUpO1xuICBib3JkZXItdG9wOiAxcHggc29saWQgcmdiYSgwLCAwLCAwLCAwLjE1KTtcbn1cblxuLmlubGluZS1ibG9jayB7XG4gIGRpc3BsYXk6IGlubGluZS1ibG9jaztcbn0iXX0= */");

/***/ }),

/***/ "./src/app/shared/components/light-bulb/light-bulb.component.ts":
/*!**********************************************************************!*\
  !*** ./src/app/shared/components/light-bulb/light-bulb.component.ts ***!
  \**********************************************************************/
/*! exports provided: LightBulbComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LightBulbComponent", function() { return LightBulbComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var ngx_bootstrap__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ngx-bootstrap */ "./node_modules/ngx-bootstrap/esm5/ngx-bootstrap.js");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! rxjs */ "./node_modules/rxjs/_esm5/index.js");




var LightBulbComponent = /** @class */ (function () {
    function LightBulbComponent(bsModalRef) {
        this.bsModalRef = bsModalRef;
    }
    LightBulbComponent.prototype.ngOnInit = function () {
        this.onClose = new rxjs__WEBPACK_IMPORTED_MODULE_3__["Subject"]();
    };
    LightBulbComponent.prototype.onCancel = function () {
        this.onClose.next(false);
        this.bsModalRef.hide();
    };
    LightBulbComponent.ctorParameters = function () { return [
        { type: ngx_bootstrap__WEBPACK_IMPORTED_MODULE_2__["BsModalRef"] }
    ]; };
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])(),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", Object)
    ], LightBulbComponent.prototype, "value", void 0);
    LightBulbComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'light-bulb',
            template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./light-bulb.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/shared/components/light-bulb/light-bulb.component.html")).default,
            styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./light-bulb.component.scss */ "./src/app/shared/components/light-bulb/light-bulb.component.scss")).default]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [ngx_bootstrap__WEBPACK_IMPORTED_MODULE_2__["BsModalRef"]])
    ], LightBulbComponent);
    return LightBulbComponent;
}());



/***/ })

}]);
//# sourceMappingURL=modules-settings-web-settings-web-module.js.map