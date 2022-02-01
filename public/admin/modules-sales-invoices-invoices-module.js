(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["modules-sales-invoices-invoices-module"],{

/***/ "./node_modules/ngx-paypal/fesm5/ngx-paypal.js":
/*!*****************************************************!*\
  !*** ./node_modules/ngx-paypal/fesm5/ngx-paypal.js ***!
  \*****************************************************/
/*! exports provided: NgxPayPalModule, NgxPaypalComponent, PayPalScriptService, ɵa */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "NgxPayPalModule", function() { return NgxPayPalModule; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "NgxPaypalComponent", function() { return NgxPaypalComponent; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PayPalScriptService", function() { return PayPalScriptService; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ɵa", function() { return ScriptService; });
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! rxjs */ "./node_modules/rxjs/_esm5/index.js");
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");





/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
var ScriptService = /** @class */ (function () {
    function ScriptService(zone) {
        this.zone = zone;
    }
    /**
     * @param {?} url
     * @param {?} globalVar
     * @param {?} onReady
     * @return {?}
     */
    ScriptService.prototype.registerScript = /**
     * @param {?} url
     * @param {?} globalVar
     * @param {?} onReady
     * @return {?}
     */
    function (url, globalVar, onReady) {
        var _this = this;
        /** @type {?} */
        var existingGlobalVar = ((/** @type {?} */ (window)))[globalVar];
        if (existingGlobalVar) {
            // global variable is present = script was already loaded
            this.zone.run((/**
             * @return {?}
             */
            function () {
                onReady(existingGlobalVar);
            }));
            return;
        }
        // prepare script elem
        /** @type {?} */
        var scriptElem = document.createElement('script');
        scriptElem.id = this.getElemId(globalVar);
        scriptElem.innerHTML = '';
        scriptElem.onload = (/**
         * @return {?}
         */
        function () {
            _this.zone.run((/**
             * @return {?}
             */
            function () {
                onReady(((/** @type {?} */ (window)))[globalVar]);
            }));
        });
        scriptElem.src = url;
        scriptElem.async = true;
        scriptElem.defer = true;
        // add script to header
        document.getElementsByTagName('head')[0].appendChild(scriptElem);
    };
    /**
     * @param {?} globalVar
     * @return {?}
     */
    ScriptService.prototype.cleanup = /**
     * @param {?} globalVar
     * @return {?}
     */
    function (globalVar) {
        // remove script from DOM
        /** @type {?} */
        var scriptElem = document.getElementById(this.getElemId(globalVar));
        if (scriptElem) {
            scriptElem.remove();
        }
    };
    /**
     * @private
     * @param {?} globalVar
     * @return {?}
     */
    ScriptService.prototype.getElemId = /**
     * @private
     * @param {?} globalVar
     * @return {?}
     */
    function (globalVar) {
        return "ngx-paypal-script-elem-" + globalVar;
    };
    ScriptService.decorators = [
        { type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"] }
    ];
    /** @nocollapse */
    ScriptService.ctorParameters = function () { return [
        { type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["NgZone"] }
    ]; };
    return ScriptService;
}());

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
var PayPalScriptService = /** @class */ (function () {
    function PayPalScriptService(scriptService) {
        this.scriptService = scriptService;
        this.paypalWindowName = 'paypal';
    }
    /**
     * @param {?} config
     * @param {?} onReady
     * @return {?}
     */
    PayPalScriptService.prototype.registerPayPalScript = /**
     * @param {?} config
     * @param {?} onReady
     * @return {?}
     */
    function (config, onReady) {
        this.scriptService.registerScript(this.getUrlForConfig(config), this.paypalWindowName, onReady);
    };
    /**
     * @return {?}
     */
    PayPalScriptService.prototype.destroyPayPalScript = /**
     * @return {?}
     */
    function () {
        this.scriptService.cleanup(this.paypalWindowName);
    };
    /**
     * @private
     * @param {?} config
     * @return {?}
     */
    PayPalScriptService.prototype.getUrlForConfig = /**
     * @private
     * @param {?} config
     * @return {?}
     */
    function (config) {
        /** @type {?} */
        var params = [
            {
                name: 'client-id',
                value: config.clientId
            }
        ];
        if (config.currency) {
            params.push({
                name: 'currency',
                value: config.currency
            });
        }
        if (config.commit) {
            params.push({
                name: 'commit',
                value: config.commit
            });
        }
        if (config.extraParams) {
            params.push.apply(params, Object(tslib__WEBPACK_IMPORTED_MODULE_3__["__spread"])(config.extraParams));
        }
        return "https://www.paypal.com/sdk/js" + this.getQueryString(params);
    };
    /**
     * @private
     * @param {?} queryParams
     * @return {?}
     */
    PayPalScriptService.prototype.getQueryString = /**
     * @private
     * @param {?} queryParams
     * @return {?}
     */
    function (queryParams) {
        /** @type {?} */
        var queryString = '';
        for (var i = 0; i < queryParams.length; i++) {
            /** @type {?} */
            var queryParam = queryParams[i];
            if (i === 0) {
                queryString += '?';
            }
            else {
                queryString += '&';
            }
            queryString += queryParam.name + "=" + queryParam.value;
        }
        return queryString;
    };
    PayPalScriptService.decorators = [
        { type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"] }
    ];
    /** @nocollapse */
    PayPalScriptService.ctorParameters = function () { return [
        { type: ScriptService }
    ]; };
    return PayPalScriptService;
}());

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
var NgxPaypalComponent = /** @class */ (function () {
    function NgxPaypalComponent(paypalScriptService, cdr, ngZone) {
        this.paypalScriptService = paypalScriptService;
        this.cdr = cdr;
        this.ngZone = ngZone;
        /**
         * If enabled, paypal SDK script will be loaded. Useful if you want to have multiple PayPal components on the same page
         * sharing base configuration. In such a case only a single component may register script.
         */
        this.registerScript = true;
        /**
         * Emitted when paypal script is loaded
         */
        this.scriptLoaded = new _angular_core__WEBPACK_IMPORTED_MODULE_1__["EventEmitter"]();
        this.ngUnsubscribe = new rxjs__WEBPACK_IMPORTED_MODULE_2__["Subject"]();
        /**
         * Flag that indicates if paypal should be initialized (required for handling script load events and availability of DOM element)
         */
        this.initializePayPal = true;
    }
    Object.defineProperty(NgxPaypalComponent.prototype, "payPalButtonContainer", {
        set: /**
         * @param {?} content
         * @return {?}
         */
        function (content) {
            this.payPalButtonContainerElem = content;
        },
        enumerable: true,
        configurable: true
    });
    /**
     * @param {?} changes
     * @return {?}
     */
    NgxPaypalComponent.prototype.ngOnChanges = /**
     * @param {?} changes
     * @return {?}
     */
    function (changes) {
        var _this = this;
        if (!this.payPalButtonContainerId) {
            this.payPalButtonContainerId = this.generateElementId();
        }
        // first time config setup
        /** @type {?} */
        var config = this.config;
        if (changes.config.isFirstChange()) {
            if (config && this.registerScript) {
                this.initPayPalScript(config, (/**
                 * @param {?} payPal
                 * @return {?}
                 */
                function (payPal) {
                    // store reference to paypal global script
                    _this.payPal = payPal;
                    _this.doPayPalCheck();
                }));
            }
        }
        // changes to config
        if (!changes.config.isFirstChange()) {
            this.reinitialize(config);
        }
    };
    /**
     * @return {?}
     */
    NgxPaypalComponent.prototype.ngOnDestroy = /**
     * @return {?}
     */
    function () {
        this.paypalScriptService.destroyPayPalScript();
        this.ngUnsubscribe.next();
        this.ngUnsubscribe.complete();
    };
    /**
     * @return {?}
     */
    NgxPaypalComponent.prototype.ngAfterViewInit = /**
     * @return {?}
     */
    function () {
        this.doPayPalCheck();
    };
    /**
     * @param {?} payPal
     * @return {?}
     */
    NgxPaypalComponent.prototype.customInit = /**
     * @param {?} payPal
     * @return {?}
     */
    function (payPal) {
        this.payPal = payPal;
        this.doPayPalCheck();
    };
    /**
     * @param {?} config
     * @return {?}
     */
    NgxPaypalComponent.prototype.reinitialize = /**
     * @param {?} config
     * @return {?}
     */
    function (config) {
        var _this = this;
        this.config = config;
        this.payPal = undefined;
        this.paypalScriptService.destroyPayPalScript();
        this.payPalButtonContainerId = this.generateElementId();
        this.initializePayPal = true;
        if (this.payPalButtonContainerElem) {
            while (this.payPalButtonContainerElem.nativeElement.firstChild) {
                this.payPalButtonContainerElem.nativeElement.removeChild(this.payPalButtonContainerElem.nativeElement.firstChild);
            }
        }
        this.cdr.detectChanges();
        if (this.config) {
            if (!this.payPal) {
                this.initPayPalScript(this.config, (/**
                 * @param {?} payPal
                 * @return {?}
                 */
                function (payPal) {
                    // store reference to paypal global script
                    _this.payPal = payPal;
                    _this.doPayPalCheck();
                }));
            }
            else {
                this.doPayPalCheck();
            }
        }
    };
    /**
     * @private
     * @return {?}
     */
    NgxPaypalComponent.prototype.doPayPalCheck = /**
     * @private
     * @return {?}
     */
    function () {
        if (this.initializePayPal && this.config && this.payPal && this.payPalButtonContainerElem) {
            // make sure that id is also set
            if (this.payPalButtonContainerElem.nativeElement.id) {
                this.initializePayPal = false;
                this.initPayPal(this.config, this.payPal);
            }
        }
    };
    /**
     * @private
     * @param {?} config
     * @param {?} initPayPal
     * @return {?}
     */
    NgxPaypalComponent.prototype.initPayPalScript = /**
     * @private
     * @param {?} config
     * @param {?} initPayPal
     * @return {?}
     */
    function (config, initPayPal) {
        var _this = this;
        this.paypalScriptService.registerPayPalScript({
            clientId: config.clientId,
            commit: config.advanced && config.advanced.commit ? config.advanced.commit : undefined,
            currency: config.currency,
            extraParams: config.advanced && config.advanced.extraQueryParams ? config.advanced.extraQueryParams : []
        }, (/**
         * @param {?} paypal
         * @return {?}
         */
        function (paypal) {
            _this.scriptLoaded.next(paypal);
            initPayPal(paypal);
        }));
    };
    /**
     * @private
     * @return {?}
     */
    NgxPaypalComponent.prototype.generateElementId = /**
     * @private
     * @return {?}
     */
    function () {
        return "ngx-captcha-id-" + new Date().valueOf();
    };
    /**
     * @private
     * @param {?} config
     * @param {?} paypal
     * @return {?}
     */
    NgxPaypalComponent.prototype.initPayPal = /**
     * @private
     * @param {?} config
     * @param {?} paypal
     * @return {?}
     */
    function (config, paypal) {
        var _this = this;
        // Running outside angular zone prevents infinite ngDoCheck lifecycle calls
        this.ngZone.runOutsideAngular((/**
         * @return {?}
         */
        function () {
            // https://developer.paypal.com/docs/checkout/integrate/#2-add-the-paypal-script-to-your-web-page
            paypal.Buttons({
                style: config.style,
                createOrder: (/**
                 * @param {?} data
                 * @param {?} actions
                 * @return {?}
                 */
                function (data, actions) {
                    return _this.ngZone.run((/**
                     * @return {?}
                     */
                    function () {
                        if (config.createOrderOnClient && config.createOrderOnServer) {
                            throw Error("Both 'createOrderOnClient' and 'createOrderOnServer' are defined.\n                        Please choose one or the other.");
                        }
                        if (!config.createOrderOnClient && !config.createOrderOnServer) {
                            throw Error("Neither 'createOrderOnClient' or 'createOrderOnServer' are defined.\n                        Please define one of these to create order.");
                        }
                        if (config.createOrderOnClient) {
                            return actions.order.create(config.createOrderOnClient(data));
                        }
                        if (config.createOrderOnServer) {
                            return config.createOrderOnServer(data);
                        }
                        throw Error("Invalid state for 'createOrder'.");
                    }));
                }),
                onApprove: (/**
                 * @param {?} data
                 * @param {?} actions
                 * @return {?}
                 */
                function (data, actions) {
                    return _this.ngZone.run((/**
                     * @return {?}
                     */
                    function () {
                        if (config.onApprove) {
                            config.onApprove(data, actions);
                        }
                        // capture on server
                        if (config.authorizeOnServer) {
                            return config.authorizeOnServer(data, actions);
                        }
                        // capture on client
                        /** @type {?} */
                        var onClientAuthorization = config.onClientAuthorization;
                        if (onClientAuthorization) {
                            actions.order.capture().then((/**
                             * @param {?} details
                             * @return {?}
                             */
                            function (details) {
                                onClientAuthorization(details);
                            }));
                            return;
                        }
                    }));
                }),
                onError: (/**
                 * @param {?} error
                 * @return {?}
                 */
                function (error) {
                    _this.ngZone.run((/**
                     * @return {?}
                     */
                    function () {
                        if (config.onError) {
                            config.onError(error);
                        }
                    }));
                }),
                onCancel: (/**
                 * @param {?} data
                 * @param {?} actions
                 * @return {?}
                 */
                function (data, actions) {
                    _this.ngZone.run((/**
                     * @return {?}
                     */
                    function () {
                        if (config.onCancel) {
                            config.onCancel(data, actions);
                        }
                    }));
                }),
                onShippingChange: (/**
                 * @param {?} data
                 * @param {?} actions
                 * @return {?}
                 */
                function (data, actions) {
                    return _this.ngZone.run((/**
                     * @return {?}
                     */
                    function () {
                        if (config.onShippingChange) {
                            return config.onShippingChange(data, actions);
                        }
                    }));
                }),
                onClick: (/**
                 * @param {?} data
                 * @param {?} actions
                 * @return {?}
                 */
                function (data, actions) {
                    _this.ngZone.run((/**
                     * @return {?}
                     */
                    function () {
                        if (config.onClick) {
                            config.onClick(data, actions);
                        }
                    }));
                }),
                onInit: (/**
                 * @param {?} data
                 * @param {?} actions
                 * @return {?}
                 */
                function (data, actions) {
                    _this.ngZone.run((/**
                     * @return {?}
                     */
                    function () {
                        if (config.onInit) {
                            config.onInit(data, actions);
                        }
                    }));
                })
            }).render("#" + _this.payPalButtonContainerId);
        }));
    };
    NgxPaypalComponent.decorators = [
        { type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"], args: [{
                    changeDetection: _angular_core__WEBPACK_IMPORTED_MODULE_1__["ChangeDetectionStrategy"].OnPush,
                    selector: 'ngx-paypal',
                    template: "\n    <div #payPalButtonContainer [id]=\"payPalButtonContainerId\"></div>\n    "
                }] }
    ];
    /** @nocollapse */
    NgxPaypalComponent.ctorParameters = function () { return [
        { type: PayPalScriptService },
        { type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["ChangeDetectorRef"] },
        { type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["NgZone"] }
    ]; };
    NgxPaypalComponent.propDecorators = {
        config: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"] }],
        registerScript: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"] }],
        scriptLoaded: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Output"] }],
        payPalButtonContainer: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewChild"], args: ['payPalButtonContainer', { static: false },] }]
    };
    return NgxPaypalComponent;
}());

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
var NgxPayPalModule = /** @class */ (function () {
    function NgxPayPalModule() {
    }
    NgxPayPalModule.decorators = [
        { type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"], args: [{
                    imports: [
                        _angular_common__WEBPACK_IMPORTED_MODULE_0__["CommonModule"]
                    ],
                    declarations: [
                        NgxPaypalComponent,
                    ],
                    exports: [
                        NgxPaypalComponent,
                    ],
                    providers: [
                        ScriptService,
                        PayPalScriptService
                    ]
                },] }
    ];
    return NgxPayPalModule;
}());

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */


//# sourceMappingURL=ngx-paypal.js.map


/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/modules/sales/invoices/components/paypal-payment/paypal-payment.component.html":
/*!**************************************************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/modules/sales/invoices/components/paypal-payment/paypal-payment.component.html ***!
  \**************************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<div class=\"form-group\">\r\n    <input [(ngModel)]=\"amount\" class=\"form-control\" name=\"amount\" type=\"number\">\r\n</div>\r\n<ngx-paypal [config]=\"payPalConfig\"></ngx-paypal>\r\n");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/modules/sales/invoices/components/stripe-payment/stripe-payment.component.html":
/*!**************************************************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/modules/sales/invoices/components/stripe-payment/stripe-payment.component.html ***!
  \**************************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<div class=\"form-group\">\r\n    <input [(ngModel)]=\"amount\" class=\"form-control\" name=\"amount\" type=\"number\">\r\n</div>\r\n<button (click)=\"pay(amount)\" class=\"btn btn-secondary btn-block\" type=\"button\">{{'settings.stripe_settings.title1' | translate}} {{loginUser.currency.symbol}}{{amount}}</button>\r\n");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/modules/sales/invoices/pages/invoice-create/invoice-create.component.html":
/*!*********************************************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/modules/sales/invoices/pages/invoice-create/invoice-create.component.html ***!
  \*********************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<section id=\"basic-form-layouts\">\r\n    <form (ngSubmit)=\"onSubmit()\" *ngIf=\"isFormLoaded\" [formGroup]=\"createInvoiceForm\">\r\n        <div class=\"row\">\r\n            <div class=\"col-md-6\">\r\n                <div class=\"card\">\r\n                    <div class=\"card-header\">\r\n                        <h4 class=\"card-title\">{{'invoices.title2' | translate}}</h4>\r\n                    </div>\r\n                    <div class=\"card-body\">\r\n                        <div class=\"px-3\">\r\n                            <div class=\"form-body\">\r\n                                <h4 class=\"form-section\">\r\n                                    <i aria-hidden=\"true\" class=\"ft-user\"></i>{{'invoices.headings.head1' | translate}}\r\n                                </h4>\r\n                                <div class=\"row\">\r\n                                    <div class=\"col-md-6\">\r\n                                        <div class=\"form-group\">\r\n                                            <label for=\"project_id\">{{'invoices.create.fields.project' | translate}}</label>\r\n                                            <ng-select (change)=\"projectChange($event)\" [clearable]=\"false\" [items]=\"projects\" [searchable]=\"true\" [selectOnTab]=\"true\" bindLabel=\"project_name\" bindValue=\"id\" formControlName=\"project_id\" labelForId=\"project_id\" placeholder=\"{{'invoices.create.placeholders.placeholder13' | translate}}\"></ng-select>\r\n                                        </div>\r\n                                    </div>\r\n                                    <div class=\"col-md-6\">\r\n                                        <div [ngClass]=\"{ 'is-invalid': isFormSubmitted && invoiceControl.client_id.errors }\" class=\"form-group\">\r\n                                            <label for=\"client_id\">{{'invoices.create.fields.customer' | translate}}&nbsp;<span class=\"text-danger\">*</span>\r\n                                            </label>\r\n                                            <ng-select [clearable]=\"false\" [items]=\"clients\" [searchable]=\"true\" [selectOnTab]=\"true\" bindLabel=\"firstname\" bindValue=\"id\" formControlName=\"client_id\" labelForId=\"client_id\" placeholder=\"{{'invoices.create.placeholders.placeholder1' | translate}}\">\r\n                                                <ng-template let-item=\"item\" ng-option-tmp>\r\n                                                    {{item.firstname}} {{item.lastname}}\r\n                                                </ng-template>\r\n                                            </ng-select>\r\n                                            <div *ngIf=\"isFormSubmitted && invoiceControl.client_id.errors\" class=\"invalid-feedback\">\r\n                                                <div *ngIf=\"invoiceControl.client_id.errors.required\">{{'invoices.create.error_messages.message1' | translate}}</div>\r\n                                            </div>\r\n                                        </div>\r\n                                    </div>\r\n                                </div>\r\n                                <h4 class=\"form-section\">\r\n                                    <i class=\"ft-calendar\"></i>{{'invoices.headings.head2' | translate}}</h4>\r\n                                <div class=\"row\">\r\n                                    <div class=\"col-md-6\">\r\n                                        <div [ngClass]=\"{ 'is-invalid': isFormSubmitted && invoiceControl.invoice_date.errors }\" class=\"form-group\">\r\n                                            <label for=\"invoice_date\">{{'invoices.create.fields.invoice_date' | translate}}&nbsp;<span class=\"text-danger\">*</span></label>\r\n                                            <div class=\"position-relative has-icon-left\">\r\n                                                <input #dp1=\"bsDatepicker\" [bsConfig]=\"datepickerConfig\" bsDatepicker class=\"form-control\" formControlName=\"invoice_date\" id=\"invoice_date\" placeholder=\"{{'invoices.create.placeholders.placeholder2' | translate}}\" type=\"text\"/>\r\n                                                <div class=\"form-control-position\"><i class=\"ft-calendar\"></i></div>\r\n                                                <div *ngIf=\"isFormSubmitted && invoiceControl.invoice_date.errors\" class=\"invalid-feedback\">\r\n                                                    <div *ngIf=\"invoiceControl.invoice_date.errors.required\">{{'invoices.create.error_messages.message2' | translate}}</div>\r\n                                                </div>\r\n                                            </div>\r\n                                        </div>\r\n                                    </div>\r\n                                    <div class=\"col-md-6\">\r\n                                        <div [ngClass]=\"{ 'is-invalid': isFormSubmitted && invoiceControl.due_date.errors }\" class=\"form-group\">\r\n                                            <label for=\"end-date\">{{'invoices.create.fields.due_date' | translate}}&nbsp;<span class=\"text-danger\">*</span></label>\r\n                                            <div class=\"position-relative has-icon-left\">\r\n                                                <input #dp2=\"bsDatepicker\" [bsConfig]=\"datepickerConfig\" bsDatepicker class=\"form-control\" formControlName=\"due_date\" id=\"due_date\" placeholder=\"{{'invoices.create.placeholders.placeholder3' | translate}}\" type=\"text\"/>\r\n                                                <div class=\"form-control-position\"><i class=\"ft-calendar\"></i></div>\r\n                                                <div *ngIf=\"isFormSubmitted && invoiceControl.due_date.errors\" class=\"invalid-feedback\">\r\n                                                    <div *ngIf=\"invoiceControl.due_date.errors.required\">{{'invoices.create.error_messages.message3' | translate}}</div>\r\n                                                </div>\r\n                                            </div>\r\n                                        </div>\r\n                                    </div>\r\n                                </div>\r\n                            </div>\r\n                        </div>\r\n                    </div>\r\n                </div>\r\n            </div>\r\n            <div class=\"col-md-6\">\r\n                <div class=\"card\">\r\n                    <div class=\"card-header\">&nbsp;</div>\r\n                    <div class=\"card-body\">\r\n                        <div class=\"px-3\">\r\n                            <div class=\"form-body\">\r\n                                <h4 class=\"form-section\"><i class=\"ft-box\"></i>{{'invoices.headings.head3' | translate}}\r\n                                </h4>\r\n                                <div class=\"row\">\r\n                                    <div class=\"col-md-12\">\r\n                                        <div class=\"form-group\">\r\n                                            <label for=\"reference\">{{'invoices.create.fields.reference' | translate}} #</label>\r\n                                            <input class=\"form-control\" formControlName=\"reference\" id=\"reference\" placeholder=\"{{'invoices.create.placeholders.placeholder4' | translate}}\" type=\"text\"/>\r\n                                        </div>\r\n                                    </div>\r\n                                    <div class=\"col-md-6\">\r\n                                        <div class=\"form-group\">\r\n                                            <label for=\"type\">{{'invoices.create.fields.discount_type' | translate}}</label>\r\n                                            <ng-select (change)=\"changeDiscountType($event)\" [clearable]=\"false\" [items]=\"('invoices.discount_type' | translate)\" [searchable]=\"true\" [selectOnTab]=\"true\" bindLabel=\"label\" bindValue=\"id\" formControlName=\"discount_type\" labelForId=\"discount_type\" placeholder=\"{{'invoices.create.placeholders.placeholder5' | translate}}\"></ng-select>\r\n                                        </div>\r\n                                    </div>\r\n                                </div>\r\n                            </div>\r\n                        </div>\r\n                    </div>\r\n                </div>\r\n            </div>\r\n            <div class=\"col-md-12\">\r\n                <div class=\"card\">\r\n                    <div class=\"card-form\">\r\n                        <h4 class=\"card-title\">{{'invoices.headings.head4' | translate}}</h4>\r\n                        <div class=\"card-button estimate-form\">\r\n                            <ng-select (change)=\"changeItem($event)\" [clearable]=\"false\" [items]=\"items\" bindLabel=\"name\" bindValue=\"id\" formControlName=\"selectedItem\" placeholder=\"{{'invoices.create.placeholders.placeholder7' | translate}}\">\r\n                                <ng-template let-index=\"index\" let-item=\"item\" let-search=\"searchTerm\" ng-option-tmp>\r\n                                    <div class=\"card mt-1 mb-1\">\r\n                                        <div class=\"card-body p-2\">\r\n                                            <h5 [ngOptionHighlight]=\"search\" class=\"card-title\">({{loginUser.currency.symbol}}{{item.price}}) {{item.name}}</h5>\r\n                                            <p class=\"card-text\">{{item.description}}</p>\r\n                                        </div>\r\n                                    </div>\r\n                                </ng-template>\r\n                            </ng-select>\r\n                        </div>\r\n                    </div>\r\n                    <div class=\"card-body\">\r\n                        <div class=\"table-responsive-xs table-responsive-sm table-responsive-md table-responsive-lg table-responsive-xl\">\r\n                            <table class=\"table table-bordered table-hover b4-datatable\" width=\"100%\">\r\n                                <thead>\r\n                                <tr>\r\n                                    <th>{{'invoices.create.fields.item_name' | translate}}</th>\r\n                                    <th>{{'invoices.create.fields.item_description' | translate}}</th>\r\n                                    <th class=\"width-100\">{{'invoices.create.fields.quantity' | translate}}</th>\r\n                                    <th class=\"width-150\">{{'invoices.create.fields.unit_price' | translate}}</th>\r\n                                    <th class=\"width-250\">{{'invoices.create.fields.item_tax' | translate}}</th>\r\n                                    <th>{{'invoices.create.fields.total_item_amount' | translate}} ({{loginUser.currency.symbol}})</th>\r\n                                    <th class=\"text-right\">{{'common.actions' | translate}}</th>\r\n                                </tr>\r\n                                </thead>\r\n                                <tbody>\r\n                                <tr formArrayName=\"item\">\r\n                                    <td>\r\n                                        <div class=\"form-group\">\r\n                                            <input class=\"form-control\" formControlName=\"item_name\" id=\"item_name\" placeholder=\"{{'invoices.create.placeholders.placeholder8' | translate}}\" type=\"text\"/>\r\n                                        </div>\r\n                                    </td>\r\n                                    <td>\r\n                                        <div class=\"form-group\">\r\n\t\t\t\t\t\t\t\t\t\t\t\t<textarea class=\"form-control\" formControlName=\"item_description\" id=\"item_description\" placeholder=\"{{'invoices.create.placeholders.placeholder9' | translate}}\">\r\n\t\t\t\t\t\t\t\t\t\t\t\t</textarea>\r\n                                        </div>\r\n                                    </td>\r\n                                    <td>\r\n                                        <div class=\"form-group\">\r\n                                            <input class=\"form-control\" formControlName=\"quantity\" id=\"quantity\" min=\"1\" placeholder=\"{{'invoices.create.placeholders.placeholder10' | translate}}\" type=\"number\"/>\r\n                                            <input class=\"inp\" formControlName=\"item_unit\" placeholder=\"{{'invoices.create.fields.unit' | translate}}\" type=\"text\"/>\r\n                                        </div>\r\n                                    </td>\r\n                                    <td>\r\n                                        <div class=\"form-group\">\r\n                                            <input class=\"form-control\" formControlName=\"unit_price\" id=\"unit_price\" min=\"0\" placeholder=\"{{'invoices.create.placeholders.placeholder11' | translate}}\" type=\"number\"/>\r\n                                        </div>\r\n                                    </td>\r\n                                    <td>\r\n                                        <div class=\"form-group\">\r\n                                            <ng-select [items]=\"taxes\" [multiple]=\"true\" [searchable]=\"true\" [selectOnTab]=\"true\" bindLabel=\"tax_name\" bindValue=\"id\" formControlName=\"taxes\" placeholder=\"{{'invoices.create.placeholders.placeholder12' | translate}}\">\r\n                                                <ng-template let-index=\"index\" let-item=\"item\" let-search=\"searchTerm\" ng-option-tmp>\r\n                                                    {{item.tax_name}}({{item.tax_rate}}%)\r\n                                                </ng-template>\r\n                                            </ng-select>\r\n                                        </div>\r\n                                    </td>\r\n                                    <td>&nbsp;</td>\r\n                                    <td class=\"text-right\">\r\n                                        <button (click)=\"addItem($event)\" class=\"btn btn-secondary\" placement=\"left\" tooltip=\"{{'common.add' | translate}}\">\r\n                                            <i class=\"fa fa-plus\"></i></button>\r\n                                    </td>\r\n                                </tr>\r\n                                <tr *ngFor=\"let item of itemsArray; index as i\">\r\n                                    <td>\r\n                                        <inline-edit-input (updateValue)=\"saveItemDetail(i, 'item_name', $event);\" [elementFor]=\"'invoices.inline_edit.item_name' | translate\" [fieldValue]=\"item.item_name\" [isRequired]=\"'true'\" [name]=\"'item_name'\" [type]=\"'text'\"></inline-edit-input>\r\n                                    </td>\r\n                                    <td>\r\n                                        <inline-edit-textarea (updateValue)=\"saveItemDetail(i, 'item_description', $event);\" [elementFor]=\"'invoices.inline_edit.item_description' | translate\" [fieldValue]=\"item.item_description\" [isRequired]=\"'false'\" [name]=\"'item_description'\"></inline-edit-textarea>\r\n                                    </td>\r\n                                    <td>\r\n                                        <inline-edit-input (updateValue)=\"saveItemDetail(i, 'quantity', $event);\" [elementFor]=\"'invoices.inline_edit.quantity' | translate\" [fieldValue]=\"item.quantity\" [isRequired]=\"'true'\" [name]=\"'quantity'\" [type]=\"'number'\"></inline-edit-input>\r\n                                    </td>\r\n                                    <td>\r\n                                        <inline-edit-input (updateValue)=\"saveItemDetail(i, 'unit_price', $event);\" [elementFor]=\"'invoices.inline_edit.unit_price' | translate\" [fieldValue]=\"item.unit_price\" [isRequired]=\"'true'\" [name]=\"'unit_price'\" [type]=\"'number'\"></inline-edit-input>\r\n                                    </td>\r\n                                    <td>\r\n                                        <inline-edit-select-items (updateValue)=\"saveItemDetail(i, 'taxes', $event);\" [elementFor]=\"'invoices.inline_edit.item_tax' | translate\" [isRequired]=\"'true'\" [name]=\"'taxes'\" [options]=\"taxes\" [selectedValue]=\"item.taxes\" [txtField]=\"'Taxes'\"></inline-edit-select-items>\r\n                                    </td>\r\n                                    <td class=\"text-center\">{{item.quantity * item.unit_price}}</td>\r\n                                    <td class=\"actions-dropdown text-right\">\r\n                                        <div class=\"btn-group\" dropdown>\r\n                                            <button aria-controls=\"dropdown-basic-1\" class=\"dropdown-toggle btn-action\" dropdownToggle id=\"button-basic-1\" type=\"button\">\r\n                                                <i class=\"fa fa-ellipsis-v\"></i></button>\r\n                                            <ul *dropdownMenu aria-labelledby=\"button-basic-1\" class=\"dropdown-menu animated fadeIn\" id=\"dropdown-basic-1\" role=\"menu\">\r\n                                                <li role=\"menuitem\">\r\n                                                    <a (click)=\"deleteItem(i)\" class=\"dropdown-item btn btn-delete btn-raised\"><i class=\"fa fa-trash-o\" tooltip=\"{{'common.delete' | translate}}\"></i></a>\r\n                                                </li>\r\n                                            </ul>\r\n                                        </div>\r\n                                    </td>\r\n                                </tr>\r\n                                </tbody>\r\n                                <tbody class=\"mt-4\">\r\n                                <tr>\r\n                                    <td></td>\r\n                                    <td></td>\r\n                                    <td></td>\r\n                                    <td></td>\r\n                                    <td class=\"text-right\">\r\n                                        <strong>{{'invoices.create.fields.sub_total' | translate}}:</strong></td>\r\n                                    <td class=\"text-center\">{{loginUser.currency.symbol}}{{ invoices.sub_total | number : '1.2-2' }}</td>\r\n                                    <td></td>\r\n                                </tr>\r\n                                <tr *ngFor=\"let tax of itemTaxes | keyvalue\">\r\n                                    <ng-container *ngIf=\"tax\">\r\n                                        <td></td>\r\n                                        <td></td>\r\n                                        <td></td>\r\n                                        <td></td>\r\n                                        <td class=\"text-right\">\r\n                                            <strong>{{taxesNameValues[tax.key].tax_name}}({{taxesNameValues[tax.key].tax_rate}})</strong>\r\n                                        </td>\r\n                                        <td class=\"text-center\">{{loginUser.currency.symbol}}{{tax.value | number : '1.2-2'}}</td>\r\n                                        <td></td>\r\n                                    </ng-container>\r\n                                </tr>\r\n                                <tr>\r\n                                    <td></td>\r\n                                    <td></td>\r\n                                    <td></td>\r\n                                    <td class=\"text-right\">\r\n                                        <strong>{{'invoices.create.fields.discount' | translate}}</strong></td>\r\n                                    <td>\r\n                                        <input (change)=\"changeDiscountAdjustment($event, 'discount')\" class=\"form-control\" formControlName=\"discount\" name=\"discount\" placeholder=\"00.00\" type=\"number\">\r\n                                    </td>\r\n                                    <td class=\"danger text-center\">(-) {{loginUser.currency.symbol}}{{total_discount | number : '1.2-2'}}</td>\r\n                                    <td></td>\r\n                                </tr>\r\n                                <tr>\r\n                                    <td></td>\r\n                                    <td></td>\r\n                                    <td></td>\r\n                                    <td class=\"text-right\">\r\n                                        <strong>{{'invoices.create.fields.adjustment' | translate}}</strong></td>\r\n                                    <td>\r\n                                        <input (change)=\"changeDiscountAdjustment($event, 'adjustment')\" class=\"form-control\" formControlName=\"adjustment\" min=\"0\" name=\"adjustment\" placeholder=\"00.00\" type=\"number\">\r\n                                    </td>\r\n                                    <td class=\"text-center\">{{loginUser.currency.symbol}}{{ invoices.adjustment | number : '1.2-2'}}</td>\r\n                                    <td></td>\r\n                                </tr>\r\n                                <tr>\r\n                                    <td></td>\r\n                                    <td></td>\r\n                                    <td></td>\r\n                                    <td></td>\r\n                                    <td class=\"text-right\">\r\n                                        <strong>{{'invoices.create.fields.total_amount' | translate}}:</strong></td>\r\n                                    <td class=\"text-center\">{{loginUser.currency.symbol}}{{ invoices.total | number : '1.2-2' }}</td>\r\n                                    <td></td>\r\n                                </tr>\r\n                                </tbody>\r\n                            </table>\r\n                        </div>\r\n                        <div class=\"col-md-12 text-right pt-3 pb-3\">\r\n                            <a [routerLink]=\"['/invoices']\" class=\"btn btn-cancel mb-0\">{{'common.cancel' | translate }}</a>\r\n                            <button class=\"btn btn-submit mb-0\" type=\"submit\">{{'common.create' | translate }}</button>\r\n                        </div>\r\n                    </div>\r\n                </div>\r\n            </div>\r\n        </div>\r\n    </form>\r\n</section>\r\n");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/modules/sales/invoices/pages/invoice-edit/invoice-edit.component.html":
/*!*****************************************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/modules/sales/invoices/pages/invoice-edit/invoice-edit.component.html ***!
  \*****************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<section id=\"basic-form-layouts\">\r\n    <form (ngSubmit)=\"onSubmit()\" *ngIf=\"isFormLoaded\" [formGroup]=\"editInvoiceForm\">\r\n        <div class=\"row\">\r\n            <div class=\"col-md-6\">\r\n                <div class=\"card\">\r\n                    <div class=\"card-header\">\r\n                        <h4 class=\"card-title\">{{'invoices.title3' | translate}}</h4>\r\n                    </div>\r\n                    <div class=\"card-body\">\r\n                        <div class=\"px-3\">\r\n                            <div class=\"form-body\">\r\n                                <h4 class=\"form-section\">\r\n                                    <i aria-hidden=\"true\" class=\"ft-user\"></i>{{'invoices.headings.head1' | translate}}\r\n                                </h4>\r\n                                <div class=\"row\">\r\n                                    <div class=\"col-md-6\">\r\n                                        <div class=\"form-group\">\r\n                                            <label for=\"project_id\">{{'invoices.create.fields.project' | translate}}</label>\r\n                                            <ng-select (change)=\"projectChange($event)\" [clearable]=\"false\" [items]=\"projects\" [searchable]=\"true\" [selectOnTab]=\"true\" bindLabel=\"project_name\" bindValue=\"id\" formControlName=\"project_id\" labelForId=\"project_id\" placeholder=\"{{'invoices.create.placeholders.placeholder13' | translate}}\"></ng-select>\r\n                                        </div>\r\n                                    </div>\r\n                                    <div class=\"col-md-6\">\r\n                                        <div [ngClass]=\"{ 'is-invalid': isFormSubmitted && invoiceControl.client_id.errors }\" class=\"form-group\">\r\n                                            <label for=\"client_id\">{{'invoices.create.fields.customer' | translate}}&nbsp;<span class=\"text-danger\">*</span>\r\n                                            </label>\r\n                                            <ng-select [clearable]=\"false\" [items]=\"clients\" [searchable]=\"true\" [selectOnTab]=\"true\" bindLabel=\"firstname\" bindValue=\"id\" formControlName=\"client_id\" labelForId=\"client_id\" placeholder=\"{{'invoices.create.placeholders.placeholder1' | translate}}\">\r\n                                                <ng-template let-item=\"item\" ng-option-tmp>\r\n                                                    {{item.firstname}} {{item.lastname}}\r\n                                                </ng-template>\r\n                                            </ng-select>\r\n                                            <div *ngIf=\"isFormSubmitted && invoiceControl.client_id.errors\" class=\"invalid-feedback\">\r\n                                                <div *ngIf=\"invoiceControl.client_id.errors.required\">{{'invoices.create.error_messages.message1' | translate}}</div>\r\n                                            </div>\r\n                                        </div>\r\n                                    </div>\r\n                                </div>\r\n                                <h4 class=\"form-section\">\r\n                                    <i class=\"ft-calendar\"></i>{{'invoices.headings.head2' | translate}}</h4>\r\n                                <div class=\"row\">\r\n                                    <div class=\"col-md-6\">\r\n                                        <div [ngClass]=\"{ 'is-invalid': isFormSubmitted && invoiceControl.invoice_date.errors }\" class=\"form-group\">\r\n                                            <label for=\"invoice_date\">{{'invoices.create.fields.invoice_date' | translate}}&nbsp;<span class=\"text-danger\">*</span></label>\r\n                                            <div class=\"position-relative has-icon-left\">\r\n                                                <input #dp1=\"bsDatepicker\" [bsConfig]=\"datepickerConfig\" bsDatepicker class=\"form-control\" formControlName=\"invoice_date\" id=\"invoice_date\" placeholder=\"{{'invoices.create.placeholders.placeholder2' | translate}}\" type=\"text\"/>\r\n                                                <div class=\"form-control-position\"><i class=\"ft-calendar\"></i></div>\r\n                                                <div *ngIf=\"isFormSubmitted && invoiceControl.invoice_date.errors\" class=\"invalid-feedback\">\r\n                                                    <div *ngIf=\"invoiceControl.invoice_date.errors.required\">{{'invoices.create.error_messages.message2' | translate}}</div>\r\n                                                </div>\r\n                                            </div>\r\n                                        </div>\r\n                                    </div>\r\n                                    <div class=\"col-md-6\">\r\n                                        <div [ngClass]=\"{ 'is-invalid': isFormSubmitted && invoiceControl.due_date.errors }\" class=\"form-group\">\r\n                                            <label for=\"end-date\">{{'invoices.create.fields.due_date' | translate}}&nbsp;<span class=\"text-danger\">*</span></label>\r\n                                            <div class=\"position-relative has-icon-left\">\r\n                                                <input #dp2=\"bsDatepicker\" [bsConfig]=\"datepickerConfig\" bsDatepicker class=\"form-control\" formControlName=\"due_date\" id=\"due_date\" placeholder=\"{{'invoices.create.placeholders.placeholder3' | translate}}\" type=\"text\"/>\r\n                                                <div class=\"form-control-position\"><i class=\"ft-calendar\"></i></div>\r\n                                                <div *ngIf=\"isFormSubmitted && invoiceControl.due_date.errors\" class=\"invalid-feedback\">\r\n                                                    <div *ngIf=\"invoiceControl.due_date.errors.required\">{{'invoices.create.error_messages.message3' | translate}}</div>\r\n                                                </div>\r\n                                            </div>\r\n                                        </div>\r\n                                    </div>\r\n                                </div>\r\n                            </div>\r\n                        </div>\r\n                    </div>\r\n                </div>\r\n            </div>\r\n            <div class=\"col-md-6\">\r\n                <div class=\"card\">\r\n                    <div class=\"card-header\">&nbsp;</div>\r\n                    <div class=\"card-body\">\r\n                        <div class=\"px-3\">\r\n                            <div class=\"form-body\">\r\n                                <h4 class=\"form-section\"><i class=\"ft-box\"></i>{{'invoices.headings.head3' | translate}}\r\n                                </h4>\r\n                                <div class=\"row\">\r\n                                    <div class=\"col-md-6\">\r\n                                        <div class=\"form-group\">\r\n                                            <label for=\"invoice_number\">{{'invoices.create.fields.invoice_number' | translate}} #</label>\r\n                                            <input aria-describedby=\"basic-addon1\" class=\"form-control\" formControlName=\"invoice_number\" id=\"invoice_number\" readonly=\"\" type=\"text\">\r\n                                        </div>\r\n                                    </div>\r\n                                    <div class=\"col-md-6\">\r\n                                        <div class=\"form-group\">\r\n                                            <label for=\"reference\">{{'invoices.create.fields.reference' | translate}} #</label>\r\n                                            <input class=\"form-control\" formControlName=\"reference\" id=\"reference\" placeholder=\"{{'invoices.create.placeholders.placeholder4' | translate}}\" type=\"text\"/>\r\n                                        </div>\r\n                                    </div>\r\n                                    <div class=\"col-md-6\">\r\n                                        <div class=\"form-group\">\r\n                                            <label for=\"type\">{{'invoices.create.fields.discount_type' | translate}}</label>\r\n                                            <ng-select (change)=\"changeDiscountType($event)\" [clearable]=\"false\" [items]=\"('invoices.discount_type' | translate)\" [searchable]=\"true\" [selectOnTab]=\"true\" bindLabel=\"label\" bindValue=\"id\" formControlName=\"discount_type\" labelForId=\"discount_type\" placeholder=\"{{'invoices.create.placeholders.placeholder5' | translate}}\"></ng-select>\r\n                                        </div>\r\n                                    </div>\r\n                                </div>\r\n                            </div>\r\n                        </div>\r\n                    </div>\r\n                </div>\r\n            </div>\r\n            <div class=\"col-md-12\">\r\n                <div class=\"card\">\r\n                    <div class=\"card-form\">\r\n                        <h4 class=\"card-title\">{{'invoices.headings.head4' | translate}}</h4>\r\n                        <div class=\"card-button estimate-form\">\r\n                            <ng-select (change)=\"changeItem($event)\" [clearable]=\"false\" [items]=\"items\" bindLabel=\"name\" bindValue=\"id\" formControlName=\"selectedItem\" placeholder=\"{{'invoices.create.placeholders.placeholder7' | translate}}\">\r\n                                <ng-template let-index=\"index\" let-item=\"item\" let-search=\"searchTerm\" ng-option-tmp>\r\n                                    <div class=\"card mt-1 mb-1\">\r\n                                        <div class=\"card-body p-2\">\r\n                                            <h5 [ngOptionHighlight]=\"search\" class=\"card-title\">({{loginUser.currency.symbol}}{{item.price}}) {{item.name}}</h5>\r\n                                            <p class=\"card-text\">{{item.description}}</p>\r\n                                        </div>\r\n                                    </div>\r\n                                </ng-template>\r\n                            </ng-select>\r\n                        </div>\r\n                    </div>\r\n                    <div class=\"card-body\">\r\n                        <div class=\"table-responsive-xs table-responsive-sm table-responsive-md table-responsive-lg table-responsive-xl\">\r\n                            <table class=\"table table-bordered table-hover b4-datatable\" width=\"100%\">\r\n                                <thead>\r\n                                <tr>\r\n                                    <th>{{'invoices.create.fields.item_name' | translate}}</th>\r\n                                    <th>{{'invoices.create.fields.item_description' | translate}}</th>\r\n                                    <th class=\"width-100\">{{'invoices.create.fields.quantity' | translate}}</th>\r\n                                    <th class=\"width-150\">{{'invoices.create.fields.unit_price' | translate}}</th>\r\n                                    <th class=\"width-250\">{{'invoices.create.fields.item_tax' | translate}}</th>\r\n                                    <th>{{'invoices.create.fields.total_item_amount' | translate}} ({{loginUser.currency.symbol}})</th>\r\n                                    <th class=\"text-right\">{{'common.actions' | translate}}</th>\r\n                                </tr>\r\n                                </thead>\r\n                                <tbody>\r\n                                <tr formArrayName=\"item\">\r\n                                    <td>\r\n                                        <div class=\"form-group\">\r\n                                            <input class=\"form-control\" formControlName=\"item_name\" id=\"item_name\" placeholder=\"{{'invoices.create.placeholders.placeholder8' | translate}}\" type=\"text\"/>\r\n                                        </div>\r\n                                    </td>\r\n                                    <td>\r\n                                        <div class=\"form-group\">\r\n\t\t\t\t\t\t\t\t\t\t\t\t<textarea class=\"form-control\" formControlName=\"item_description\" id=\"item_description\" placeholder=\"{{'invoices.create.placeholders.placeholder9' | translate}}\">\r\n\t\t\t\t\t\t\t\t\t\t\t\t</textarea>\r\n                                        </div>\r\n                                    </td>\r\n                                    <td>\r\n                                        <div class=\"form-group\">\r\n                                            <input class=\"form-control\" formControlName=\"quantity\" id=\"quantity\" min=\"1\" placeholder=\"{{'invoices.create.placeholders.placeholder10' | translate}}\" type=\"number\"/>\r\n                                            <input class=\"inp\" formControlName=\"item_unit\" placeholder=\"{{'invoices.create.fields.unit' | translate}}\" type=\"text\"/>\r\n                                        </div>\r\n                                    </td>\r\n                                    <td>\r\n                                        <div class=\"form-group\">\r\n                                            <input class=\"form-control\" formControlName=\"unit_price\" id=\"unit_price\" min=\"0\" placeholder=\"{{'invoices.create.placeholders.placeholder11' | translate}}\" type=\"number\"/>\r\n                                        </div>\r\n                                    </td>\r\n                                    <td>\r\n                                        <div class=\"form-group\">\r\n                                            <ng-select [items]=\"taxes\" [multiple]=\"true\" [searchable]=\"true\" [selectOnTab]=\"true\" bindLabel=\"tax_name\" bindValue=\"id\" formControlName=\"taxes\" placeholder=\"{{'invoices.create.placeholders.placeholder12' | translate}}\">\r\n                                                <ng-template let-index=\"index\" let-item=\"item\" let-search=\"searchTerm\" ng-option-tmp>\r\n                                                    {{item.tax_name}}({{item.tax_rate}}%)\r\n                                                </ng-template>\r\n                                            </ng-select>\r\n                                        </div>\r\n                                    </td>\r\n                                    <td>&nbsp;</td>\r\n                                    <td class=\"text-right\">\r\n                                        <button (click)=\"addItem($event)\" class=\"btn btn-secondary\" placement=\"left\" tooltip=\"{{'common.add' | translate}}\">\r\n                                            <i class=\"fa fa-plus\"></i></button>\r\n                                    </td>\r\n                                </tr>\r\n                                <tr *ngFor=\"let item of itemsArray; index as i\">\r\n                                    <td>\r\n                                        <inline-edit-input (updateValue)=\"saveItemDetail(i, 'item_name', $event);\" [elementFor]=\"'invoices.inline_edit.item_name' | translate\" [fieldValue]=\"item.item_name\" [isRequired]=\"'true'\" [name]=\"'item_name'\" [type]=\"'text'\"></inline-edit-input>\r\n                                    </td>\r\n                                    <td>\r\n                                        <inline-edit-textarea (updateValue)=\"saveItemDetail(i, 'item_description', $event);\" [elementFor]=\"'invoices.inline_edit.item_description' | translate\" [fieldValue]=\"item.item_description\" [isRequired]=\"'false'\" [name]=\"'item_description'\"></inline-edit-textarea>\r\n                                    </td>\r\n                                    <td>\r\n                                        <inline-edit-input (updateValue)=\"saveItemDetail(i, 'quantity', $event);\" [elementFor]=\"'invoices.inline_edit.quantity' | translate\" [fieldValue]=\"item.quantity\" [isRequired]=\"'true'\" [name]=\"'quantity'\" [type]=\"'number'\"></inline-edit-input>\r\n                                    </td>\r\n                                    <td>\r\n                                        <inline-edit-input (updateValue)=\"saveItemDetail(i, 'unit_price', $event);\" [elementFor]=\"'invoices.inline_edit.unit_price' | translate\" [fieldValue]=\"item.unit_price\" [isRequired]=\"'true'\" [name]=\"'unit_price'\" [type]=\"'number'\"></inline-edit-input>\r\n                                    </td>\r\n                                    <td>\r\n                                        <inline-edit-select-items (updateValue)=\"saveItemDetail(i, 'taxes', $event);\" [elementFor]=\"'invoices.inline_edit.item_tax' | translate\" [isRequired]=\"'true'\" [name]=\"'taxes'\" [options]=\"taxes\" [selectedValue]=\"item.taxes\" [txtField]=\"'Taxes'\"></inline-edit-select-items>\r\n                                    </td>\r\n                                    <td class=\"text-center\">{{item.quantity * item.unit_price}}</td>\r\n                                    <td class=\"actions-dropdown text-right\">\r\n                                        <div class=\"btn-group\" dropdown>\r\n                                            <button aria-controls=\"dropdown-basic-1\" class=\"dropdown-toggle btn-action\" dropdownToggle id=\"button-basic-1\" type=\"button\">\r\n                                                <i class=\"fa fa-ellipsis-v\"></i></button>\r\n                                            <ul *dropdownMenu aria-labelledby=\"button-basic-1\" class=\"dropdown-menu animated fadeIn\" id=\"dropdown-basic-1\" role=\"menu\">\r\n                                                <li role=\"menuitem\">\r\n                                                    <a (click)=\"deleteItem(i)\" class=\"dropdown-item btn btn-delete btn-raised\"><i class=\"fa fa-trash-o\" tooltip=\"{{'common.delete' | translate}}\"></i></a>\r\n                                                </li>\r\n                                            </ul>\r\n                                        </div>\r\n                                    </td>\r\n                                </tr>\r\n                                </tbody>\r\n                                <tbody class=\"mt-4\">\r\n                                <tr>\r\n                                    <td></td>\r\n                                    <td></td>\r\n                                    <td></td>\r\n                                    <td></td>\r\n                                    <td class=\"text-right\">\r\n                                        <strong>{{'invoices.create.fields.sub_total' | translate}}:</strong></td>\r\n                                    <td class=\"text-center\">{{loginUser.currency.symbol}}{{invoices.sub_total | number : '1.2-2'}}</td>\r\n                                    <td></td>\r\n                                </tr>\r\n                                <tr *ngFor=\"let tax of itemTaxes | keyvalue\">\r\n                                    <ng-container *ngIf=\"tax\">\r\n                                        <td></td>\r\n                                        <td></td>\r\n                                        <td></td>\r\n                                        <td></td>\r\n                                        <td class=\"text-right\">\r\n                                            <strong>{{taxesNameValues[tax.key].tax_name}}({{taxesNameValues[tax.key].tax_rate}})</strong>\r\n                                        </td>\r\n                                        <td class=\"text-center\">{{loginUser.currency.symbol}}{{tax.value | number : '1.2-2'}}</td>\r\n                                        <td></td>\r\n                                    </ng-container>\r\n                                </tr>\r\n                                <tr>\r\n                                    <td></td>\r\n                                    <td></td>\r\n                                    <td></td>\r\n                                    <td class=\"text-right\">\r\n                                        <strong>{{'invoices.create.fields.discount' | translate}}</strong></td>\r\n                                    <td>\r\n                                        <input (change)=\"changeDiscountAdjustment($event, 'discount')\" class=\"form-control\" formControlName=\"discount\" name=\"discount\" placeholder=\"00.00\" type=\"number\">\r\n                                    </td>\r\n                                    <td class=\"danger text-center\">(-) {{loginUser.currency.symbol}}{{total_discount | number : '1.2-2'}}</td>\r\n                                    <td></td>\r\n                                </tr>\r\n                                <tr>\r\n                                    <td></td>\r\n                                    <td></td>\r\n                                    <td></td>\r\n                                    <td class=\"text-right\">\r\n                                        <strong>{{'invoices.create.fields.adjustment' | translate}}</strong></td>\r\n                                    <td>\r\n                                        <input (change)=\"changeDiscountAdjustment($event, 'adjustment')\" class=\"form-control\" formControlName=\"adjustment\" min=\"0\" name=\"adjustment\" placeholder=\"00.00\" type=\"number\">\r\n                                    </td>\r\n                                    <td class=\"text-center\">{{loginUser.currency.symbol}}{{invoices.adjustment | number : '1.2-2'}}</td>\r\n                                    <td></td>\r\n                                </tr>\r\n                                <tr>\r\n                                    <td></td>\r\n                                    <td></td>\r\n                                    <td></td>\r\n                                    <td></td>\r\n                                    <td class=\"text-right\">\r\n                                        <strong>{{'invoices.create.fields.total_amount' | translate}}:</strong></td>\r\n                                    <td class=\"text-center\">{{loginUser.currency.symbol}}{{invoices.total | number : '1.2-2'}}</td>\r\n                                    <td></td>\r\n                                </tr>\r\n                                </tbody>\r\n                            </table>\r\n                        </div>\r\n                        <div class=\"col-md-12 text-right pt-3 pb-3\">\r\n                            <a [routerLink]=\"['/invoices']\" class=\"btn btn-cancel mb-0\">{{'common.cancel' | translate }}</a>\r\n                            <button class=\"btn btn-submit mb-0\" type=\"submit\">{{'common.edit' | translate }}</button>\r\n                        </div>\r\n                    </div>\r\n                </div>\r\n            </div>\r\n        </div>\r\n    </form>\r\n</section>\r\n");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/modules/sales/invoices/pages/invoice-list/invoice-list.component.html":
/*!*****************************************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/modules/sales/invoices/pages/invoice-list/invoice-list.component.html ***!
  \*****************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<section class=\"hide_empty_message\">\r\n    <div class=\"row\">\r\n        <div class=\"col-sm-12\">\r\n            <div class=\"card pl-2 pr-2\">\r\n                <div class=\"card-header pl-0 pr-0 border-bottom\">\r\n                    <h4 class=\"main-title mt-2\"><span>{{'invoices.title' | translate}}</span></h4>\r\n                    <div *ngxPermissionsOnly=\"['admin', 'super_admin', 'invoices_create']\" class=\"card-buttons\">\r\n                        <a [routerLink]=\"['/invoices/create']\" class=\"btn btn-create mb-0\" placement=\"left\" tooltip=\"{{'common.create' | translate}}\"><i class=\"fa fa-plus\"></i></a>\r\n                    </div>\r\n                </div>\r\n                <!-- Card content -->\r\n                <div class=\"card-content pt-3 pb-3\">\r\n                    <!-- Card body -->\r\n                    <div class=\"card-body\">\r\n                        <!-- Invoices list datatable -->\r\n                        <div class=\"row\">\r\n                            <div class=\"col-sm-12\">\r\n                                <div class=\"table-responsive-xs table-responsive-sm table-responsive-md table-responsive-lg table-responsive-xl\">\r\n                                    <table [dtOptions]=\"dtOptions\" [dtTrigger]=\"dtTrigger\" class=\"table table-bordered table-hover b4-datatable\" datatable id=\"invoices_table\" width=\"100%\">\r\n                                        <thead>\r\n                                        <tr>\r\n                                            <th>{{'invoices.columns.invoice_number' | translate}} #</th>\r\n                                            <th>{{'invoices.columns.customer' | translate}}</th>\r\n                                            <th>{{'invoices.columns.invoice_date' | translate}}</th>\r\n                                            <th>{{'invoices.columns.due_date' | translate}}</th>\r\n                                            <th>{{'invoices.columns.total_amount' | translate}}</th>\r\n                                            <th>{{'invoices.columns.status' | translate}}</th>\r\n                                            <th>{{'common.actions' | translate}}</th>\r\n                                        </tr>\r\n                                        </thead>\r\n                                        <tbody>\r\n                                        <tr *ngFor=\"let invoice of invoices; index as i\">\r\n                                            <td>\r\n                                                <ng-container *ngxPermissionsOnly=\"['admin', 'super_admin', 'invoices_view'] else elseBlock1;\">\r\n                                                    <a [routerLink]=\"['/invoices/detail', invoice.id]\" tooltip=\"{{'common.view' | translate}}\">{{invoice.invoice_number}}</a>\r\n                                                </ng-container>\r\n                                                <ng-template #elseBlock1>{{invoice.invoice_number}}</ng-template>\r\n                                            </td>\r\n                                            <td>{{invoice.client_firstname}} {{invoice.client_lastname}}</td>\r\n                                            <td>{{invoice.invoice_date | dateTimeFormatFilter: loginUser.settings.date_format}}</td>\r\n                                            <td>{{invoice.due_date | dateTimeFormatFilter: loginUser.settings.date_format}}</td>\r\n                                            <td>{{loginUser.currency.symbol}}{{invoice.total_amount | number : '1.2-2'}}</td>\r\n                                            <td class=\"budges-status\">\r\n                                                <ng-container *ngFor=\"let status of ('invoices.status' | translate)\">\r\n                                                    <span *ngIf=\"status.id == invoice.status\" class=\"{{status.class}}\">{{status.label}}</span>\r\n                                                </ng-container>\r\n                                            </td>\r\n                                            <td class=\"actions-dropdown\">\r\n                                                <div class=\"btn-group\" dropdown>\r\n                                                    <button aria-controls=\"dropdown-basic-1\" class=\"dropdown-toggle btn-action\" dropdownToggle id=\"button-basic-1\" type=\"button\">\r\n                                                        <i class=\"fa fa-ellipsis-v\"></i></button>\r\n                                                    <ul *dropdownMenu aria-labelledby=\"button-basic-1\" class=\"dropdown-menu animated fadeIn\" id=\"dropdown-basic-1\" role=\"menu\">\r\n                                                        <li role=\"menuitem\">\r\n                                                            <a *ngxPermissionsOnly=\"['admin', 'super_admin', 'invoices_edit']\" [routerLink]=\"['edit', invoice.id]\" class=\"dropdown-item btn btn-edit btn-raised\" tooltip=\"{{'common.edit' | translate}}\"><i class=\"fa fa-pencil-square-o\"></i></a>\r\n                                                        </li>\r\n                                                        <li role=\"menuitem\">\r\n                                                            <a (click)=\"deleteInvoice(invoice.id)\" *ngxPermissionsOnly=\"['admin', 'super_admin', 'invoices_delete']\" class=\"dropdown-item btn btn-danger btn-delete btn-raised\" tooltip=\"{{'common.delete' | translate}}\"><i class=\"fa fa-trash-o\"></i></a>\r\n                                                        </li>\r\n                                                    </ul>\r\n                                                </div>\r\n                                            </td>\r\n                                        </tr>\r\n                                        </tbody>\r\n                                        <tfoot *ngIf=\"invoices?.length == 0\" class=\"tfoot_dt\">\r\n                                        <tr>\r\n                                            <td class=\"no-data-available text-center\" colspan=\"7\">{{'common.datatable.sEmptyTable' | translate}}</td>\r\n                                        </tr>\r\n                                        </tfoot>\r\n                                    </table>\r\n                                </div>\r\n                            </div>\r\n                        </div>\r\n                    </div>\r\n                </div>\r\n            </div>\r\n        </div>\r\n    </div>\r\n</section>\r\n");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/modules/sales/invoices/pages/invoice-view/invoice-view.component.html":
/*!*****************************************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/modules/sales/invoices/pages/invoice-view/invoice-view.component.html ***!
  \*****************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<section *ngIf=\"isPageLoad\">\r\n    <div class=\"row\">\r\n        <div class=\"col-md-12 col-12 text-center text-sm-right\">\r\n            <a *ngIf=\"isDownloadable\" class=\"btn btn-secondary text-white mb-0\" href=\"{{apiUrl}}/invoices/download/{{invoice.secret_id}}/{{invoice.client.id}}\" type=\"button\"><i class=\"ft-upload mr-1\"></i>{{'invoices.view.download' | translate}}\r\n            </a>\r\n            <ng-container *ngIf=\"invoice.status != 'paid'\">\r\n                <button (click)=\"openPaymentCreateModal()\" *ngxPermissionsOnly=\"['admin', 'super_admin', 'payments_create']\" class=\"btn btn-create mb-0 ml-1\">\r\n                    <i class=\"fa fa-plus\"></i><span>{{'invoices.view.add_payment' | translate}}</span></button>\r\n            </ng-container>\r\n        </div>\r\n    </div>\r\n    <div class=\"row\" id=\"invoice_table\">\r\n        <div class=\"col-md-12 col-12\">\r\n            <div class=\"card\">\r\n                <div class=\"card-content p-3\">\r\n                    <div class=\"card-body pb-0\">\r\n                        <div class=\"row\">\r\n                            <div class=\"col-md-6 col-12\">\r\n                                <div *ngIf=\"invoice.status == 'paid'\" class=\"ribbon ribbon-bookmark ribbon-paid\">{{'invoices.view.paid' | translate}}</div>\r\n                                <div *ngIf=\"invoice.status == 'partially_paid'\" class=\"ribbon ribbon-bookmark ribbon-partially_paid\">{{'invoices.view.partially_paid' | translate}}</div>\r\n                                <div *ngIf=\"invoice.status == 'unpaid'\" class=\"ribbon ribbon-bookmark ribbon-unpaid\">{{'invoices.view.unpaid' | translate}}</div>\r\n\r\n                                <div class=\"media logo-img pt-5\">\r\n                                    <img *ngIf=\"invoiceSettings.invoice_logo\" alt=\"Invoice Logo\" height=\"80\" src=\"{{apiUrl}}/uploads/invoice_logo/{{invoiceSettings.invoice_logo}}\" width=\"80\">\r\n                                    <img *ngIf=\"!invoiceSettings.invoice_logo\" alt=\"Invoice Logo\" height=\"80\" src=\"assets/img/logos/vipspm_logo.png\" width=\"80\">\r\n                                    <div class=\"media-body ml-4\">\r\n                                        <ul class=\"m-0 list-unstyled\">\r\n                                            <li class=\"text-bold-800\">{{loginUser.settings.company_name}}</li>\r\n                                            <li class=\"nl2br\">{{loginUser.settings.company_address}}</li>\r\n                                            <li>{{loginUser.settings.company_phone}}</li>\r\n                                            <li *ngIf=\"invoiceSettings.show_gst_number\">{{'invoices.view.gst_number' | translate}}: {{invoiceSettings.gst_number}}</li>\r\n                                        </ul>\r\n                                    </div>\r\n                                </div>\r\n                            </div>\r\n                            <div class=\"col-md-6 col-12 text-right\">\r\n                                <h2 class=\"primary text-uppercase\">{{'invoices.title4' | translate}}</h2>\r\n                                <p class=\"pb-3\"># {{invoice.invoice_number}}</p>\r\n                            </div>\r\n                        </div>\r\n                        <div class=\"row\" id=\"invoice-customer-details\">\r\n                            <div class=\"col-12 text-left\">\r\n                                <p class=\"text-muted mb-1\">{{'invoices.view.bill_to' | translate}}</p>\r\n                            </div>\r\n                            <div class=\"col-md-4 col-12 text-left\">\r\n                                <ul class=\"m-0 list-unstyled\">\r\n                                    <li class=\"text-bold-800\">{{invoice.client.firstname}} {{invoice.client.lastname}}</li>\r\n                                    <li class=\"nl2br\">{{invoice.client.address}}</li>\r\n                                    <li>{{invoice.client.phone}}</li>\r\n                                    <li>{{invoice.client.mobile}}</li>\r\n                                </ul>\r\n                            </div>\r\n                            <div class=\"col-md-8 col-12 text-right\">\r\n                                <p *ngIf=\"invoice.reference\">\r\n                                    <span class=\"text-muted\">{{'invoices.create.fields.reference' | translate}} :</span> {{invoice.reference}}\r\n                                </p>\r\n                                <p>\r\n                                    <span class=\"text-muted\">{{'invoices.view.invoice_date' | translate}} :</span> {{invoice.invoice_date | dateTimeFormatFilter: loginUser.settings.date_format}}\r\n                                </p>\r\n                                <p class=\"m-0\">\r\n                                    <span class=\"text-muted\">{{'invoices.view.due_date' | translate}} :</span> {{invoice.due_date | dateTimeFormatFilter: loginUser.settings.date_format}}\r\n                                </p>\r\n                            </div>\r\n                        </div>\r\n                        <div id=\"invoice-items-details\">\r\n                            <div class=\"row\">\r\n                                <div class=\"table-responsive col-12\">\r\n                                    <table class=\"table mt-3\">\r\n                                        <thead>\r\n                                        <tr>\r\n                                            <th>#</th>\r\n                                            <th>{{'invoices.create.fields.item_name' | translate}} &amp; {{'invoices.create.fields.item_description' | translate}}</th>\r\n                                            <th>{{'invoices.create.fields.quantity' | translate}}</th>\r\n                                            <th>{{'invoices.create.fields.unit_price' | translate}}</th>\r\n                                            <th>{{'invoices.create.fields.item_tax' | translate}}</th>\r\n                                            <th class=\"text-right\">{{'invoices.create.fields.total_item_amount' | translate}} ({{loginUser.currency.symbol}})</th>\r\n                                        </tr>\r\n                                        </thead>\r\n                                        <tbody>\r\n                                        <tr *ngFor=\"let item of invoice.items; index as i\">\r\n                                            <th scope=\"row\">{{i + 1}}</th>\r\n                                            <td>\r\n                                                <p class=\"mb-0\">{{item.item_name}}</p>\r\n                                                <p class=\"mb-0 text-muted\">{{item.item_description}}</p>\r\n                                            </td>\r\n                                            <td><span>{{item.quantity}}<small>&nbsp;{{item.item_unit}}</small></span>\r\n                                            </td>\r\n                                            <td>{{item.unit_price}}</td>\r\n                                            <td class=\"budges-status\">\r\n                                                <ng-container *ngFor=\"let tax of item.taxes\">\r\n                                                    <span class=\"open\">{{tax.tax_name}} ({{tax.tax_rate}}%)</span>\r\n                                                </ng-container>\r\n                                            </td>\r\n                                            <td class=\"text-right\">{{item.unit_price * item.quantity}}</td>\r\n                                        </tr>\r\n                                        </tbody>\r\n                                    </table>\r\n                                </div>\r\n                            </div>\r\n                            <div class=\"row mt-3 mt-md-0\">\r\n                                <div class=\"col-md-6 col-12\"></div>\r\n                                <div class=\"col-md-6 col-12\">\r\n                                    <div class=\"table-responsive-xs table-responsive-sm table-responsive-md table-responsive-lg table-responsive-xl\">\r\n                                        <table class=\"table\" width=\"100%\">\r\n                                            <tbody>\r\n                                            <tr>\r\n                                                <td>{{'invoices.create.fields.sub_total' | translate}}</td>\r\n                                                <td class=\"text-right\">{{loginUser.currency.symbol}}{{invoices.sub_total | number : '1.2-2'}}</td>\r\n                                            </tr>\r\n                                            <tr *ngFor=\"let tax of itemTaxes | keyvalue\">\r\n                                                <td>{{taxesNameValues[tax.key].tax_name}} ({{taxesNameValues[tax.key].tax_rate}}%)</td>\r\n                                                <td class=\"text-right\">{{loginUser.currency.symbol}}{{tax.value}}</td>\r\n                                            </tr>\r\n                                            <tr>\r\n                                                <td>{{'invoices.create.fields.discount' | translate}}</td>\r\n                                                <td class=\"danger text-right\">(-) {{loginUser.currency.symbol}}{{invoice.total_discount | number : '1.2-2'}}</td>\r\n                                            </tr>\r\n                                            <tr>\r\n                                                <td>{{'invoices.create.fields.adjustment' | translate}}</td>\r\n                                                <td class=\"text-right\">{{loginUser.currency.symbol}}{{invoice.adjustment | number : '1.2-2'}}</td>\r\n                                            </tr>\r\n                                            <tr>\r\n                                                <td class=\"text-bold-500\">{{'invoices.create.fields.total_amount' | translate}}</td>\r\n                                                <td class=\"text-bold-500 text-right\"> {{loginUser.currency.symbol}}{{invoice.total_amount | number : '1.2-2'}}</td>\r\n                                            </tr>\r\n                                            <tr>\r\n                                                <td class=\"text-bold-500 danger\">{{'invoices.create.fields.total_amount_due' | translate}}</td>\r\n                                                <td class=\"text-bold-500 text-right danger\"> {{loginUser.currency.symbol}} {{ invoice.total_due_amount | number : '1.2-2'}}</td>\r\n                                            </tr>\r\n                                            </tbody>\r\n                                        </table>\r\n                                    </div>\r\n                                </div>\r\n                            </div>\r\n                            <div class=\"row mt-2 mt-sm-0 pt-3 border-top\">\r\n                                <div class=\"col-md-12 col-12 d-flex align-items-center\">\r\n                                    <div class=\"terms-conditions mb-2\">\r\n                                        <h6><strong>{{'invoices.view.terms' | translate}}</strong></h6>\r\n                                        <p>{{invoiceSettings.terms_conditions}}</p>\r\n                                    </div>\r\n                                </div>\r\n                            </div>\r\n                            <div class=\"row mt-2 mt-sm-0 pt-3 border-top\">\r\n                                <div class=\"col-md-12\">\r\n                                    <h6><strong>{{'invoices.view.transactions' | translate}}</strong></h6>\r\n                                    <div class=\"table-responsive-xs table-responsive-sm table-responsive-md table-responsive-lg table-responsive-xl\">\r\n                                        <table class=\"table table-bordered table-hover b4-datatable\" width=\"100%\">\r\n                                            <thead>\r\n                                            <tr>\r\n                                                <th>{{'invoices.view.payment' | translate}} #</th>\r\n                                                <th>{{'invoices.view.payment_mode' | translate}}</th>\r\n                                                <th>{{'invoices.view.date' | translate}}</th>\r\n                                                <th>{{'invoices.view.status' | translate}}</th>\r\n                                                <th>{{'invoices.view.amount' | translate}} ({{loginUser.currency.symbol}})</th>\r\n                                            </tr>\r\n                                            </thead>\r\n                                            <tbody *ngIf=\"invoice.payments?.length != 0\">\r\n                                            <tr *ngFor=\"let payment of invoice.payments; index as i\">\r\n                                                <td>\r\n                                                    <ng-container *ngxPermissionsOnly=\"['admin', 'super_admin', 'payments_view'] else elseBlock1;\">\r\n                                                        <a [routerLink]=\"['/payments/detail', payment.id]\" tooltip=\"{{'common.view' | translate}}\">{{payment.receipt_number}}</a>\r\n                                                    </ng-container>\r\n                                                    <ng-template #elseBlock1>{{payment.receipt_number}}</ng-template>\r\n                                                </td>\r\n                                                <td>{{payment.payment_method}}</td>\r\n                                                <td>{{payment.date | dateTimeFormatFilter: loginUser.settings.date_time_format}}</td>\r\n                                                <td class=\"budges-status\">\r\n                                                    <ng-container *ngFor=\"let status of ('payments.status' | translate)\">\r\n                                                        <span *ngIf=\"status.id == payment.status\" class=\"{{status.class}}\">{{status.label}}</span>\r\n                                                    </ng-container>\r\n                                                </td>\r\n                                                <td>{{payment.amount}}</td>\r\n                                            </tr>\r\n                                            </tbody>\r\n                                            <tbody *ngIf=\"invoice.payments?.length == 0\">\r\n                                            <tr>\r\n                                                <td class=\"no-data-available text-center\" colspan=\"5\">{{'common.datatable.sEmptyTable' | translate}}</td>\r\n                                            </tr>\r\n                                            </tbody>\r\n                                        </table>\r\n                                    </div>\r\n                                </div>\r\n                            </div>\r\n                            <div *ngIf=\"invoice.status != 'paid'\" class=\"row mt-2 mt-sm-0 pt-3 border-top\">\r\n                                <div class=\"col-md-12 col-12\">\r\n                                    <h6><strong>{{'payments.columns.payment_mode' | translate}}</strong></h6>\r\n                                    <div class=\"row\">\r\n                                        <div class=\"col-md-12\">\r\n                                            <div class=\"table-responsive-xs table-responsive-sm table-responsive-md table-responsive-lg table-responsive-xl\">\r\n                                                <table class=\"table\" width=\"100%\">\r\n                                                    <tbody>\r\n                                                    <tr *ngIf=\"gatewaySettings.paypal_checkout_status\">\r\n                                                        <td class=\"width-600\">\r\n                                                            <div class=\"form-check radio-container d-block\">\r\n                                                                <input [(ngModel)]=\"paymentMethod\" class=\"form-check-input\" id=\"checkbox1\" type=\"radio\" value=\"paypal\">\r\n                                                                <label class=\"form-check-label\" for=\"checkbox1\">&nbsp;{{'invoices.view.paypal' | translate}}&nbsp;</label>\r\n                                                                <span class=\"radio-checkmark\"></span>\r\n                                                            </div>\r\n                                                        </td>\r\n                                                        <td class=\"width-300\">\r\n                                                            <ng-container *ngIf=\"paymentMethod == 'paypal'\">\r\n                                                                <app-paypal-payment (onPaymentSuccess)=\"getPaymentSuccess($event)\" [gatewaySettings]=\"gatewaySettings\" [invoice]=\"invoice\" [loginUser]=\"loginUser\"></app-paypal-payment>\r\n                                                            </ng-container>\r\n                                                        </td>\r\n                                                    </tr>\r\n                                                    <tr *ngIf=\"gatewaySettings.stripe_status\">\r\n                                                        <td class=\"width-600\">\r\n                                                            <div class=\"form-check radio-container d-block\">\r\n                                                                <input [(ngModel)]=\"paymentMethod\" class=\"form-check-input\" id=\"checkbox2\" type=\"radio\" value=\"stripe\">\r\n                                                                <label class=\"form-check-label\" for=\"checkbox2\">&nbsp;{{'invoices.view.stripe' | translate}}</label>\r\n                                                                <span class=\"radio-checkmark\"></span>\r\n                                                            </div>\r\n                                                        </td>\r\n                                                        <td class=\"width-300\">\r\n                                                            <ng-container *ngIf=\"paymentMethod == 'stripe'\">\r\n                                                                <app-stripe-payment (onPaymentSuccess)=\"getPaymentSuccess($event)\" [gatewaySettings]=\"gatewaySettings\" [invoice]=\"invoice\" [loginUser]=\"loginUser\"></app-stripe-payment>\r\n                                                            </ng-container>\r\n                                                        </td>\r\n                                                    </tr>\r\n                                                    <tr *ngFor=\"let mode of paymentModes; index as i\">\r\n                                                        <ng-container *ngIf=\"mode.show_on_pdf && (mode.status == 'active' || mode.status == '1')\">\r\n                                                            <td class=\"width-600\">\r\n                                                                <div class=\"form-check radio-container d-block\">\r\n                                                                    <input [(ngModel)]=\"paymentMethod\" class=\"form-check-input\" id=\"checkbox2_{{i}}\" type=\"radio\" value=\"{{mode.method_name}}\">\r\n                                                                    <label class=\"form-check-label\" for=\"checkbox2_{{i}}\">&nbsp;{{mode.method_name}}</label>\r\n                                                                    <span class=\"radio-checkmark\"></span>\r\n                                                                </div>\r\n                                                            </td>\r\n                                                            <td class=\"nl2br width-300\">\r\n                                                                <ng-container *ngIf=\"paymentMethod == mode.method_name\">\r\n                                                                    {{mode.description}}\r\n                                                                </ng-container>\r\n                                                            </td>\r\n                                                        </ng-container>\r\n                                                    </tr>\r\n                                                    </tbody>\r\n                                                </table>\r\n                                            </div>\r\n                                        </div>\r\n                                    </div>\r\n                                </div>\r\n                            </div>\r\n                        </div>\r\n                    </div>\r\n                </div>\r\n            </div>\r\n        </div>\r\n    </div>\r\n</section>\r\n");

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

/***/ "./src/app/core/services/invoice.service.ts":
/*!**************************************************!*\
  !*** ./src/app/core/services/invoice.service.ts ***!
  \**************************************************/
/*! exports provided: InvoiceService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "InvoiceService", function() { return InvoiceService; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../environments/environment */ "./src/environments/environment.ts");




var InvoiceService = /** @class */ (function () {
    function InvoiceService(http) {
        this.http = http;
        this.apiUrl = _environments_environment__WEBPACK_IMPORTED_MODULE_3__["environment"].apiUrl;
    }
    InvoiceService.prototype.getById = function (id) {
        return this.http.get(this.apiUrl + "/api/invoices/" + id);
    };
    InvoiceService.prototype.create = function (invoice) {
        return this.http.post(this.apiUrl + "/api/invoices", invoice);
    };
    InvoiceService.prototype.update = function (invoice) {
        return this.http.put(this.apiUrl + "/api/invoices/" + invoice.id, invoice);
    };
    InvoiceService.prototype.delete = function (id) {
        return this.http.delete(this.apiUrl + "/api/invoices/" + id);
    };
    InvoiceService.prototype.changeStatus = function (invoice) {
        return this.http.post(this.apiUrl + "/api/invoices/change-status/" + invoice.id, { 'status': invoice.status });
    };
    InvoiceService.ctorParameters = function () { return [
        { type: _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClient"] }
    ]; };
    InvoiceService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
            providedIn: 'root'
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClient"]])
    ], InvoiceService);
    return InvoiceService;
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

/***/ "./src/app/modules/sales/invoices/components/paypal-payment/paypal-payment.component.scss":
/*!************************************************************************************************!*\
  !*** ./src/app/modules/sales/invoices/components/paypal-payment/paypal-payment.component.scss ***!
  \************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL21vZHVsZXMvc2FsZXMvaW52b2ljZXMvY29tcG9uZW50cy9wYXlwYWwtcGF5bWVudC9wYXlwYWwtcGF5bWVudC5jb21wb25lbnQuc2NzcyJ9 */");

/***/ }),

/***/ "./src/app/modules/sales/invoices/components/paypal-payment/paypal-payment.component.ts":
/*!**********************************************************************************************!*\
  !*** ./src/app/modules/sales/invoices/components/paypal-payment/paypal-payment.component.ts ***!
  \**********************************************************************************************/
/*! exports provided: PaypalPaymentComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PaypalPaymentComponent", function() { return PaypalPaymentComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _ngx_translate_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @ngx-translate/core */ "./node_modules/@ngx-translate/core/fesm5/ngx-translate-core.js");
/* harmony import */ var ngx_toastr__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ngx-toastr */ "./node_modules/ngx-toastr/fesm5/ngx-toastr.js");
/* harmony import */ var _core_services_payment_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../../../../core/services/payment.service */ "./src/app/core/services/payment.service.ts");





var PaypalPaymentComponent = /** @class */ (function () {
    function PaypalPaymentComponent(translate, toastr, paymentService) {
        this.translate = translate;
        this.toastr = toastr;
        this.paymentService = paymentService;
        this.onPaymentSuccess = new _angular_core__WEBPACK_IMPORTED_MODULE_1__["EventEmitter"]();
        this.unitAmount = '00.00';
        this.amount = '00.00';
    }
    PaypalPaymentComponent.prototype.ngOnInit = function () {
        this.amount = this.invoice.total_due_amount;
        this.initConfig();
    };
    PaypalPaymentComponent.prototype.addPayment = function (details) {
        var _this = this;
        var params = {
            invoice_id: this.invoice.id,
            client_id: this.invoice.client_id,
            transaction_id: details.id,
            payment_method: 'PayPal Checkout',
            isPaypal_payment: true,
            amount: details.purchase_units[0].amount.value,
            status: 'successful'
        };
        this.paymentService.create(params)
            .subscribe(function (data) {
            _this.toastr.success(_this.translate.instant('payments.messages.create'), _this.translate.instant('settings.paypal_settings.title'));
            _this.onPaymentSuccess.emit(true);
        });
    };
    PaypalPaymentComponent.prototype.cancelPayment = function () {
        var _this = this;
        var params = {
            invoice_id: this.invoice.id,
            client_id: this.invoice.client_id,
            payment_method: 'PayPal Checkout',
            amount: this.amount,
            isPaypal_payment: true,
            status: 'failed'
        };
        this.paymentService.create(params)
            .subscribe(function (data) {
            _this.toastr.error(_this.translate.instant('payments.messages.failed'), _this.translate.instant('settings.paypal_settings.title'));
            _this.onPaymentSuccess.emit(true);
        });
    };
    PaypalPaymentComponent.prototype.initConfig = function () {
        var _this = this;
        this.payPalConfig = {
            currency: this.loginUser.currency.code,
            clientId: this.gatewaySettings.paypal_checkout_client_id,
            createOrderOnClient: function (data) { return ({
                intent: 'CAPTURE',
                purchase_units: [
                    {
                        amount: {
                            currency_code: _this.loginUser.currency.code,
                            value: _this.amount,
                            breakdown: {
                                item_total: {
                                    currency_code: _this.loginUser.currency.code,
                                    value: _this.amount
                                }
                            }
                        },
                    }
                ]
            }); },
            advanced: {
                commit: 'true'
            },
            style: {
                label: this.gatewaySettings.paypal_checkout_label,
                layout: 'vertical',
                shape: 'pill'
            },
            onApprove: function (data, actions) {
                actions.order.get().then(function (details) {
                });
            },
            onClientAuthorization: function (data) {
                _this.addPayment(data);
            },
            onCancel: function (data, actions) {
                _this.cancelPayment();
            },
            onError: function (err) {
                _this.cancelPayment();
            },
            onClick: function (data, actions) {
            },
        };
    };
    PaypalPaymentComponent.ctorParameters = function () { return [
        { type: _ngx_translate_core__WEBPACK_IMPORTED_MODULE_2__["TranslateService"] },
        { type: ngx_toastr__WEBPACK_IMPORTED_MODULE_3__["ToastrService"] },
        { type: _core_services_payment_service__WEBPACK_IMPORTED_MODULE_4__["PaymentService"] }
    ]; };
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Output"])(),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", _angular_core__WEBPACK_IMPORTED_MODULE_1__["EventEmitter"])
    ], PaypalPaymentComponent.prototype, "onPaymentSuccess", void 0);
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])(),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", Object)
    ], PaypalPaymentComponent.prototype, "loginUser", void 0);
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])(),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", Object)
    ], PaypalPaymentComponent.prototype, "invoice", void 0);
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])(),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", Object)
    ], PaypalPaymentComponent.prototype, "gatewaySettings", void 0);
    PaypalPaymentComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-paypal-payment',
            template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./paypal-payment.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/modules/sales/invoices/components/paypal-payment/paypal-payment.component.html")).default,
            styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./paypal-payment.component.scss */ "./src/app/modules/sales/invoices/components/paypal-payment/paypal-payment.component.scss")).default]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_ngx_translate_core__WEBPACK_IMPORTED_MODULE_2__["TranslateService"],
            ngx_toastr__WEBPACK_IMPORTED_MODULE_3__["ToastrService"],
            _core_services_payment_service__WEBPACK_IMPORTED_MODULE_4__["PaymentService"]])
    ], PaypalPaymentComponent);
    return PaypalPaymentComponent;
}());



/***/ }),

/***/ "./src/app/modules/sales/invoices/components/stripe-payment/stripe-payment.component.scss":
/*!************************************************************************************************!*\
  !*** ./src/app/modules/sales/invoices/components/stripe-payment/stripe-payment.component.scss ***!
  \************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL21vZHVsZXMvc2FsZXMvaW52b2ljZXMvY29tcG9uZW50cy9zdHJpcGUtcGF5bWVudC9zdHJpcGUtcGF5bWVudC5jb21wb25lbnQuc2NzcyJ9 */");

/***/ }),

/***/ "./src/app/modules/sales/invoices/components/stripe-payment/stripe-payment.component.ts":
/*!**********************************************************************************************!*\
  !*** ./src/app/modules/sales/invoices/components/stripe-payment/stripe-payment.component.ts ***!
  \**********************************************************************************************/
/*! exports provided: StripePaymentComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "StripePaymentComponent", function() { return StripePaymentComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _ngx_translate_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @ngx-translate/core */ "./node_modules/@ngx-translate/core/fesm5/ngx-translate-core.js");
/* harmony import */ var ngx_toastr__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ngx-toastr */ "./node_modules/ngx-toastr/fesm5/ngx-toastr.js");
/* harmony import */ var _core_services_payment_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../../../../core/services/payment.service */ "./src/app/core/services/payment.service.ts");





var StripePaymentComponent = /** @class */ (function () {
    function StripePaymentComponent(translate, toastr, paymentService) {
        this.translate = translate;
        this.toastr = toastr;
        this.paymentService = paymentService;
        this.onPaymentSuccess = new _angular_core__WEBPACK_IMPORTED_MODULE_1__["EventEmitter"]();
        this.handler = null;
        this.amount = '00.00';
    }
    StripePaymentComponent.prototype.ngOnInit = function () {
        this.amount = this.invoice.total_due_amount;
        this.loadStripe();
    };
    StripePaymentComponent.prototype.pay = function (amount) {
        var that = this;
        var handler = window.StripeCheckout.configure({
            key: this.gatewaySettings.stripe_api_key,
            locale: 'auto',
            currency: this.loginUser.currency.code,
            token: function (token) {
                that.stripePaymentCharge(token);
            }
        });
        handler.open({
            name: this.gatewaySettings.stripe_label,
            description: this.translate.instant('payments.view.payment_receipt') + ' ' + this.invoice.invoice_number,
            amount: amount * 100
        });
    };
    StripePaymentComponent.prototype.loadStripe = function () {
        var _this = this;
        var style = {
            base: {
                iconColor: '#c4f0ff',
                color: '#fff',
                fontWeight: 500,
                fontFamily: 'Roboto, Open Sans, Segoe UI, sans-serif',
                fontSize: '16px',
                fontSmoothing: 'antialiased',
                ':-webkit-autofill': {
                    color: '#fce883',
                },
                '::placeholder': {
                    color: '#87BBFD',
                },
            },
            invalid: {
                iconColor: '#FFC7EE',
                color: '#FFC7EE',
            }
        };
        if (!window.document.getElementById('stripe-script')) {
            var s = window.document.createElement('script');
            s.id = 'stripe-script';
            s.type = 'text/javascript';
            s.src = 'https://checkout.stripe.com/checkout.js';
            s.onload = function () {
                _this.handler = window.StripeCheckout.configure({
                    key: _this.gatewaySettings.stripe_api_key,
                    currency: _this.loginUser.currency.code,
                    locale: 'auto',
                    style: style,
                    token: function (token) {
                    }
                });
            };
            window.document.body.appendChild(s);
        }
    };
    StripePaymentComponent.prototype.stripePaymentCharge = function (token) {
        var _this = this;
        var params = {
            invoice_id: this.invoice.id,
            client_id: this.invoice.client_id,
            amount: this.amount,
            currency: this.loginUser.currency.code,
            description: token.id,
            email: token.email,
            payment_method: 'Stripe Checkout'
        };
        this.paymentService.stripePaymentCharge(params)
            .subscribe(function (data) {
            _this.toastr.success(_this.translate.instant('payments.messages.create'), _this.translate.instant('settings.stripe_settings.title'));
            _this.onPaymentSuccess.emit(true);
        }, function (error) {
            var msg = error.error;
            if (msg && msg.message) {
                msg = msg.message;
            }
            if (msg.error && msg.error.message) {
                msg = msg.error.message;
            }
            _this.toastr.error(msg, _this.translate.instant('settings.stripe_settings.title'));
        });
    };
    StripePaymentComponent.ctorParameters = function () { return [
        { type: _ngx_translate_core__WEBPACK_IMPORTED_MODULE_2__["TranslateService"] },
        { type: ngx_toastr__WEBPACK_IMPORTED_MODULE_3__["ToastrService"] },
        { type: _core_services_payment_service__WEBPACK_IMPORTED_MODULE_4__["PaymentService"] }
    ]; };
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Output"])(),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", _angular_core__WEBPACK_IMPORTED_MODULE_1__["EventEmitter"])
    ], StripePaymentComponent.prototype, "onPaymentSuccess", void 0);
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])(),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", Object)
    ], StripePaymentComponent.prototype, "loginUser", void 0);
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])(),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", Object)
    ], StripePaymentComponent.prototype, "invoice", void 0);
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])(),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", Object)
    ], StripePaymentComponent.prototype, "gatewaySettings", void 0);
    StripePaymentComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-stripe-payment',
            template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./stripe-payment.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/modules/sales/invoices/components/stripe-payment/stripe-payment.component.html")).default,
            styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./stripe-payment.component.scss */ "./src/app/modules/sales/invoices/components/stripe-payment/stripe-payment.component.scss")).default]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_ngx_translate_core__WEBPACK_IMPORTED_MODULE_2__["TranslateService"],
            ngx_toastr__WEBPACK_IMPORTED_MODULE_3__["ToastrService"],
            _core_services_payment_service__WEBPACK_IMPORTED_MODULE_4__["PaymentService"]])
    ], StripePaymentComponent);
    return StripePaymentComponent;
}());



/***/ }),

/***/ "./src/app/modules/sales/invoices/invoices-routing.module.ts":
/*!*******************************************************************!*\
  !*** ./src/app/modules/sales/invoices/invoices-routing.module.ts ***!
  \*******************************************************************/
/*! exports provided: InvoicesRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "InvoicesRoutingModule", function() { return InvoicesRoutingModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var ngx_permissions__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ngx-permissions */ "./node_modules/ngx-permissions/ngx-permissions.umd.js");
/* harmony import */ var ngx_permissions__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(ngx_permissions__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _pages_invoice_list_invoice_list_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./pages/invoice-list/invoice-list.component */ "./src/app/modules/sales/invoices/pages/invoice-list/invoice-list.component.ts");
/* harmony import */ var _pages_invoice_create_invoice_create_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./pages/invoice-create/invoice-create.component */ "./src/app/modules/sales/invoices/pages/invoice-create/invoice-create.component.ts");
/* harmony import */ var _pages_invoice_edit_invoice_edit_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./pages/invoice-edit/invoice-edit.component */ "./src/app/modules/sales/invoices/pages/invoice-edit/invoice-edit.component.ts");
/* harmony import */ var _pages_invoice_view_invoice_view_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./pages/invoice-view/invoice-view.component */ "./src/app/modules/sales/invoices/pages/invoice-view/invoice-view.component.ts");








var routes = [{
        path: '',
        children: [
            {
                path: '',
                canActivate: [ngx_permissions__WEBPACK_IMPORTED_MODULE_3__["NgxPermissionsGuard"]],
                component: _pages_invoice_list_invoice_list_component__WEBPACK_IMPORTED_MODULE_4__["InvoiceListComponent"]
            },
            {
                path: 'create',
                canActivate: [ngx_permissions__WEBPACK_IMPORTED_MODULE_3__["NgxPermissionsGuard"]],
                data: {
                    breadcrumbs: {
                        text: 'common.create',
                        icon: 'fa fa-file-pdf-o',
                        show: true,
                        isHome: true
                    },
                    permissions: {
                        only: ['admin', 'super_admin', 'invoices_create']
                    }
                },
                component: _pages_invoice_create_invoice_create_component__WEBPACK_IMPORTED_MODULE_5__["InvoiceCreateComponent"]
            },
            {
                path: 'edit/:id',
                canActivate: [ngx_permissions__WEBPACK_IMPORTED_MODULE_3__["NgxPermissionsGuard"]],
                data: {
                    breadcrumbs: {
                        text: 'common.edit',
                        icon: 'fa fa-file-pdf-o',
                        show: true,
                        isHome: true
                    },
                    permissions: {
                        only: ['admin', 'super_admin', 'invoices_edit']
                    }
                },
                component: _pages_invoice_edit_invoice_edit_component__WEBPACK_IMPORTED_MODULE_6__["InvoiceEditComponent"]
            },
            {
                path: 'detail/:id',
                canActivate: [ngx_permissions__WEBPACK_IMPORTED_MODULE_3__["NgxPermissionsGuard"]],
                data: {
                    breadcrumbs: {
                        text: 'common.detail',
                        icon: 'fa fa-file-pdf-o'
                    },
                    permissions: {
                        only: ['admin', 'super_admin', 'invoices_view']
                    }
                },
                component: _pages_invoice_view_invoice_view_component__WEBPACK_IMPORTED_MODULE_7__["InvoiceViewComponent"]
            }
        ]
    }
];
var InvoicesRoutingModule = /** @class */ (function () {
    function InvoicesRoutingModule() {
    }
    InvoicesRoutingModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)],
            exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]]
        })
    ], InvoicesRoutingModule);
    return InvoicesRoutingModule;
}());



/***/ }),

/***/ "./src/app/modules/sales/invoices/invoices.module.ts":
/*!***********************************************************!*\
  !*** ./src/app/modules/sales/invoices/invoices.module.ts ***!
  \***********************************************************/
/*! exports provided: InvoicesModule, HttpLoaderFactory */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "InvoicesModule", function() { return InvoicesModule; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "HttpLoaderFactory", function() { return HttpLoaderFactory; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");
/* harmony import */ var ngx_bootstrap__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ngx-bootstrap */ "./node_modules/ngx-bootstrap/esm5/ngx-bootstrap.js");
/* harmony import */ var ngx_export_as__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ngx-export-as */ "./node_modules/ngx-export-as/fesm2015/ngx-export-as.js");
/* harmony import */ var ngx_editor__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ngx-editor */ "./node_modules/ngx-editor/fesm5/ngx-editor.js");
/* harmony import */ var ngx_paypal__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ngx-paypal */ "./node_modules/ngx-paypal/fesm5/ngx-paypal.js");
/* harmony import */ var ngx_permissions__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ngx-permissions */ "./node_modules/ngx-permissions/ngx-permissions.umd.js");
/* harmony import */ var ngx_permissions__WEBPACK_IMPORTED_MODULE_9___default = /*#__PURE__*/__webpack_require__.n(ngx_permissions__WEBPACK_IMPORTED_MODULE_9__);
/* harmony import */ var _ng_select_ng_select__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @ng-select/ng-select */ "./node_modules/@ng-select/ng-select/fesm5/ng-select.js");
/* harmony import */ var _ngx_translate_core__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! @ngx-translate/core */ "./node_modules/@ngx-translate/core/fesm5/ngx-translate-core.js");
/* harmony import */ var _ngx_translate_http_loader__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! @ngx-translate/http-loader */ "./node_modules/@ngx-translate/http-loader/fesm5/ngx-translate-http-loader.js");
/* harmony import */ var angular_datatables__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! angular-datatables */ "./node_modules/angular-datatables/index.js");
/* harmony import */ var _invoices_routing_module__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ./invoices-routing.module */ "./src/app/modules/sales/invoices/invoices-routing.module.ts");
/* harmony import */ var _shared_shared_module__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! ../../../shared/shared.module */ "./src/app/shared/shared.module.ts");
/* harmony import */ var _payments_payments_module__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! ../payments/payments.module */ "./src/app/modules/sales/payments/payments.module.ts");
/* harmony import */ var _pages_invoice_list_invoice_list_component__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! ./pages/invoice-list/invoice-list.component */ "./src/app/modules/sales/invoices/pages/invoice-list/invoice-list.component.ts");
/* harmony import */ var _pages_invoice_create_invoice_create_component__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! ./pages/invoice-create/invoice-create.component */ "./src/app/modules/sales/invoices/pages/invoice-create/invoice-create.component.ts");
/* harmony import */ var _pages_invoice_edit_invoice_edit_component__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(/*! ./pages/invoice-edit/invoice-edit.component */ "./src/app/modules/sales/invoices/pages/invoice-edit/invoice-edit.component.ts");
/* harmony import */ var _components_paypal_payment_paypal_payment_component__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__(/*! ./components/paypal-payment/paypal-payment.component */ "./src/app/modules/sales/invoices/components/paypal-payment/paypal-payment.component.ts");
/* harmony import */ var _components_stripe_payment_stripe_payment_component__WEBPACK_IMPORTED_MODULE_21__ = __webpack_require__(/*! ./components/stripe-payment/stripe-payment.component */ "./src/app/modules/sales/invoices/components/stripe-payment/stripe-payment.component.ts");
/* harmony import */ var _pages_invoice_view_invoice_view_component__WEBPACK_IMPORTED_MODULE_22__ = __webpack_require__(/*! ./pages/invoice-view/invoice-view.component */ "./src/app/modules/sales/invoices/pages/invoice-view/invoice-view.component.ts");
/* harmony import */ var _payments_components_create_payment_create_payment_component__WEBPACK_IMPORTED_MODULE_23__ = __webpack_require__(/*! ../payments/components/create-payment/create-payment.component */ "./src/app/modules/sales/payments/components/create-payment/create-payment.component.ts");
/* harmony import */ var _payments_components_edit_payment_edit_payment_component__WEBPACK_IMPORTED_MODULE_24__ = __webpack_require__(/*! ../payments/components/edit-payment/edit-payment.component */ "./src/app/modules/sales/payments/components/edit-payment/edit-payment.component.ts");

























var InvoicesModule = /** @class */ (function () {
    function InvoicesModule() {
    }
    InvoicesModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            declarations: [
                _pages_invoice_list_invoice_list_component__WEBPACK_IMPORTED_MODULE_17__["InvoiceListComponent"],
                _components_paypal_payment_paypal_payment_component__WEBPACK_IMPORTED_MODULE_20__["PaypalPaymentComponent"],
                _components_stripe_payment_stripe_payment_component__WEBPACK_IMPORTED_MODULE_21__["StripePaymentComponent"],
                _pages_invoice_create_invoice_create_component__WEBPACK_IMPORTED_MODULE_18__["InvoiceCreateComponent"],
                _pages_invoice_edit_invoice_edit_component__WEBPACK_IMPORTED_MODULE_19__["InvoiceEditComponent"],
                _pages_invoice_view_invoice_view_component__WEBPACK_IMPORTED_MODULE_22__["InvoiceViewComponent"]
            ],
            imports: [
                _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
                _invoices_routing_module__WEBPACK_IMPORTED_MODULE_14__["InvoicesRoutingModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_3__["ReactiveFormsModule"],
                ngx_permissions__WEBPACK_IMPORTED_MODULE_9__["NgxPermissionsModule"],
                angular_datatables__WEBPACK_IMPORTED_MODULE_13__["DataTablesModule"],
                ngx_export_as__WEBPACK_IMPORTED_MODULE_6__["ExportAsModule"],
                ngx_editor__WEBPACK_IMPORTED_MODULE_7__["NgxEditorModule"],
                _ng_select_ng_select__WEBPACK_IMPORTED_MODULE_10__["NgSelectModule"],
                ngx_paypal__WEBPACK_IMPORTED_MODULE_8__["NgxPayPalModule"],
                ngx_bootstrap__WEBPACK_IMPORTED_MODULE_5__["ModalModule"].forRoot(),
                ngx_bootstrap__WEBPACK_IMPORTED_MODULE_5__["DatepickerModule"].forRoot(),
                ngx_bootstrap__WEBPACK_IMPORTED_MODULE_5__["BsDatepickerModule"].forRoot(),
                ngx_bootstrap__WEBPACK_IMPORTED_MODULE_5__["TooltipModule"].forRoot(),
                ngx_bootstrap__WEBPACK_IMPORTED_MODULE_5__["BsDropdownModule"].forRoot(),
                _ngx_translate_core__WEBPACK_IMPORTED_MODULE_11__["TranslateModule"].forChild({
                    loader: {
                        provide: _ngx_translate_core__WEBPACK_IMPORTED_MODULE_11__["TranslateLoader"],
                        useFactory: (HttpLoaderFactory),
                        deps: [_angular_common_http__WEBPACK_IMPORTED_MODULE_4__["HttpClient"]]
                    }
                }),
                _payments_payments_module__WEBPACK_IMPORTED_MODULE_16__["PaymentsModule"],
                _shared_shared_module__WEBPACK_IMPORTED_MODULE_15__["SharedModule"]
            ],
            entryComponents: [
                _payments_components_create_payment_create_payment_component__WEBPACK_IMPORTED_MODULE_23__["CreatePaymentComponent"],
                _payments_components_edit_payment_edit_payment_component__WEBPACK_IMPORTED_MODULE_24__["EditPaymentComponent"]
            ],
            providers: []
        })
    ], InvoicesModule);
    return InvoicesModule;
}());

// Required for AOT compilation
function HttpLoaderFactory(http) {
    return new _ngx_translate_http_loader__WEBPACK_IMPORTED_MODULE_12__["TranslateHttpLoader"](http, './assets/i18n/', '.json');
}


/***/ }),

/***/ "./src/app/modules/sales/invoices/pages/invoice-create/invoice-create.component.scss":
/*!*******************************************************************************************!*\
  !*** ./src/app/modules/sales/invoices/pages/invoice-create/invoice-create.component.scss ***!
  \*******************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = (".ng-select.ng-select-single .ng-select-container {\n  min-width: 500px;\n}\n\n.inp {\n  border: none;\n  border-bottom: 1px solid #e8eef3;\n  padding: 5px 10px;\n  outline: none;\n  width: 100%;\n}\n\n[placeholder]:focus::-webkit-input-placeholder {\n  transition: text-indent 0.4s 0.4s ease;\n  text-indent: -100%;\n  opacity: 1;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvbW9kdWxlcy9zYWxlcy9pbnZvaWNlcy9wYWdlcy9pbnZvaWNlLWNyZWF0ZS9DOlxcVXNlcnNcXHRodWFuXFxPbmVEcml2ZVxcRGVza3RvcFxcZ2xhdmFsLXRodWFuZGluaC9zcmNcXGFwcFxcbW9kdWxlc1xcc2FsZXNcXGludm9pY2VzXFxwYWdlc1xcaW52b2ljZS1jcmVhdGVcXGludm9pY2UtY3JlYXRlLmNvbXBvbmVudC5zY3NzIiwic3JjL2FwcC9tb2R1bGVzL3NhbGVzL2ludm9pY2VzL3BhZ2VzL2ludm9pY2UtY3JlYXRlL2ludm9pY2UtY3JlYXRlLmNvbXBvbmVudC5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBRUksZ0JBQUE7QUNBSjs7QURHQTtFQUNJLFlBQUE7RUFDQSxnQ0FBQTtFQUNBLGlCQUFBO0VBQ0EsYUFBQTtFQUNBLFdBQUE7QUNBSjs7QURHQTtFQUNJLHNDQUFBO0VBQ0Esa0JBQUE7RUFDQSxVQUFBO0FDQUoiLCJmaWxlIjoic3JjL2FwcC9tb2R1bGVzL3NhbGVzL2ludm9pY2VzL3BhZ2VzL2ludm9pY2UtY3JlYXRlL2ludm9pY2UtY3JlYXRlLmNvbXBvbmVudC5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLm5nLXNlbGVjdC5uZy1zZWxlY3Qtc2luZ2xlXHJcbi5uZy1zZWxlY3QtY29udGFpbmVyIHtcclxuICAgIG1pbi13aWR0aDogNTAwcHg7XHJcbn1cclxuXHJcbi5pbnAge1xyXG4gICAgYm9yZGVyOiBub25lO1xyXG4gICAgYm9yZGVyLWJvdHRvbTogMXB4IHNvbGlkICNlOGVlZjM7XHJcbiAgICBwYWRkaW5nOiA1cHggMTBweDtcclxuICAgIG91dGxpbmU6IG5vbmU7XHJcbiAgICB3aWR0aDogMTAwJTtcclxufVxyXG5cclxuW3BsYWNlaG9sZGVyXTpmb2N1czo6LXdlYmtpdC1pbnB1dC1wbGFjZWhvbGRlciB7XHJcbiAgICB0cmFuc2l0aW9uOiB0ZXh0LWluZGVudCAwLjRzIDAuNHMgZWFzZTtcclxuICAgIHRleHQtaW5kZW50OiAtMTAwJTtcclxuICAgIG9wYWNpdHk6IDE7XHJcbn1cclxuIiwiLm5nLXNlbGVjdC5uZy1zZWxlY3Qtc2luZ2xlIC5uZy1zZWxlY3QtY29udGFpbmVyIHtcbiAgbWluLXdpZHRoOiA1MDBweDtcbn1cblxuLmlucCB7XG4gIGJvcmRlcjogbm9uZTtcbiAgYm9yZGVyLWJvdHRvbTogMXB4IHNvbGlkICNlOGVlZjM7XG4gIHBhZGRpbmc6IDVweCAxMHB4O1xuICBvdXRsaW5lOiBub25lO1xuICB3aWR0aDogMTAwJTtcbn1cblxuW3BsYWNlaG9sZGVyXTpmb2N1czo6LXdlYmtpdC1pbnB1dC1wbGFjZWhvbGRlciB7XG4gIHRyYW5zaXRpb246IHRleHQtaW5kZW50IDAuNHMgMC40cyBlYXNlO1xuICB0ZXh0LWluZGVudDogLTEwMCU7XG4gIG9wYWNpdHk6IDE7XG59Il19 */");

/***/ }),

/***/ "./src/app/modules/sales/invoices/pages/invoice-create/invoice-create.component.ts":
/*!*****************************************************************************************!*\
  !*** ./src/app/modules/sales/invoices/pages/invoice-create/invoice-create.component.ts ***!
  \*****************************************************************************************/
/*! exports provided: InvoiceCreateComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "InvoiceCreateComponent", function() { return InvoiceCreateComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var ngx_toastr__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ngx-toastr */ "./node_modules/ngx-toastr/fesm5/ngx-toastr.js");
/* harmony import */ var _ngx_translate_core__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @ngx-translate/core */ "./node_modules/@ngx-translate/core/fesm5/ngx-translate-core.js");
/* harmony import */ var _core_services_invoice_service__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../../../../../core/services/invoice.service */ "./src/app/core/services/invoice.service.ts");
/* harmony import */ var _core_services_item_service__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../../../../../core/services/item.service */ "./src/app/core/services/item.service.ts");
/* harmony import */ var _core_services_client_service__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../../../../../core/services/client.service */ "./src/app/core/services/client.service.ts");
/* harmony import */ var _core_services_tax_service__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ../../../../../core/services/tax.service */ "./src/app/core/services/tax.service.ts");
/* harmony import */ var _core_services_project_service__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ../../../../../core/services/project.service */ "./src/app/core/services/project.service.ts");
/* harmony import */ var _core_services_authentication_service__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ../../../../../core/services/authentication.service */ "./src/app/core/services/authentication.service.ts");
/* harmony import */ var _core_services_invoice_setting_service__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ../../../../../core/services/invoice-setting.service */ "./src/app/core/services/invoice-setting.service.ts");














var InvoiceCreateComponent = /** @class */ (function () {
    function InvoiceCreateComponent(translate, datepipe, router, formBuilder, toastr, invoiceService, clientService, itemService, taxService, projectService, invoiceSettingService, authenticationService) {
        var _this = this;
        this.translate = translate;
        this.datepipe = datepipe;
        this.router = router;
        this.formBuilder = formBuilder;
        this.toastr = toastr;
        this.invoiceService = invoiceService;
        this.clientService = clientService;
        this.itemService = itemService;
        this.taxService = taxService;
        this.projectService = projectService;
        this.invoiceSettingService = invoiceSettingService;
        this.authenticationService = authenticationService;
        this.clients = [];
        this.items = [];
        this.itemsArray = [];
        this.taxes = [];
        this.itemTaxes = [];
        this.taxesNameValues = [];
        this.total_discount = 0.00;
        this.isFormSubmitted = false;
        this.isFormLoaded = false;
        this.invoices = {
            sub_total: 0,
            total_taxes: 0,
            discount: 0.00,
            adjustment: 0.00,
            total: 0
        };
        this.datepickerConfig = {
            dateInputFormat: 'YYYY-MM-DD',
            containerClass: 'theme-red'
        };
        this.authenticationService.loginUser.subscribe(function (x) { return _this.loginUser = x; });
    }
    Object.defineProperty(InvoiceCreateComponent.prototype, "invoiceControl", {
        get: function () {
            return this.createInvoiceForm.controls;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(InvoiceCreateComponent.prototype, "itemControl", {
        get: function () {
            return this.createInvoiceForm.get('item');
        },
        enumerable: true,
        configurable: true
    });
    InvoiceCreateComponent.prototype.ngOnInit = function () {
        this.getInvoiceSettings();
        this.getProjects();
        this.getClients();
        this.getTaxes();
    };
    InvoiceCreateComponent.prototype.loadForm = function () {
        this.createInvoiceForm = this.formBuilder.group({
            project_id: [null],
            client_id: [null, _angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].required],
            invoice_date: [new Date(), _angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].required],
            due_date: [this.addDays(new Date(), this.invoiceSettings.due_after), _angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].required],
            reference: [null],
            status: ['unpaid'],
            discount_type: ['percent'],
            selectedItem: [null],
            discount: [0],
            adjustment: [0],
            item: this.formBuilder.group({
                item_name: [null],
                item_description: [null],
                quantity: [null],
                unit_price: [null],
                item_unit: [null],
                taxes: [null],
                amount: [null]
            }),
            items: []
        });
        this.isFormLoaded = true;
    };
    InvoiceCreateComponent.prototype.getProjects = function () {
        var _this = this;
        this.projectService.getAll().subscribe(function (data) {
            _this.projects = data;
        });
    };
    InvoiceCreateComponent.prototype.getTaxes = function () {
        var _this = this;
        this.taxService.getAll().subscribe(function (data) {
            _this.taxes = data;
            for (var iRow in _this.taxes) {
                if (_this.taxesNameValues[_this.taxes[iRow].id] == undefined) {
                    _this.taxesNameValues[_this.taxes[iRow].id] = [];
                }
                _this.taxesNameValues[_this.taxes[iRow].id] = _this.taxes[iRow];
            }
        });
    };
    InvoiceCreateComponent.prototype.getClients = function () {
        var _this = this;
        this.clientService.getAll()
            .subscribe(function (data) {
            _this.clients = data;
            _this.getInvoiceSettings();
        });
    };
    InvoiceCreateComponent.prototype.getInvoiceSettings = function () {
        var _this = this;
        this.invoiceSettingService.getAll()
            .subscribe(function (data) {
            _this.invoiceSettings = data;
            _this.getItems();
        });
    };
    InvoiceCreateComponent.prototype.getItems = function () {
        var _this = this;
        this.itemService.getAll()
            .subscribe(function (data) {
            _this.items = data;
            _this.loadForm();
        });
    };
    InvoiceCreateComponent.prototype.addDays = function (date, days) {
        return new Date(date.setDate(date.getDate() + days));
    };
    InvoiceCreateComponent.prototype.changeItem = function (event) {
        var taxes = [];
        for (var iRow in event.taxes) {
            taxes.push(event.taxes[iRow].id);
        }
        this.itemControl.patchValue({ item_name: event.name });
        this.itemControl.patchValue({ item_description: event.description });
        this.itemControl.patchValue({ quantity: 1 });
        this.itemControl.patchValue({ unit_price: event.price });
        this.itemControl.patchValue({ item_unit: event.unit });
        this.itemControl.patchValue({ taxes: taxes });
    };
    InvoiceCreateComponent.prototype.resetChildForm = function () {
        this.itemControl.patchValue({ item_name: null });
        this.itemControl.patchValue({ item_description: null });
        this.itemControl.patchValue({ quantity: null });
        this.itemControl.patchValue({ unit_price: null });
        this.itemControl.patchValue({ item_unit: null });
        this.itemControl.patchValue({ taxes: [] });
    };
    InvoiceCreateComponent.prototype.changeDiscountType = function (event) {
        if (event.id == 'not_discount') {
            this.invoices.discount = 0;
        }
        this.getItemTaxes();
    };
    InvoiceCreateComponent.prototype.changeDiscountAdjustment = function (event, type) {
        if (type == 'discount') {
            if (this.createInvoiceForm.value.discount_type == 'not_discount') {
                this.toastr.error(this.translate.instant('invoices.create.error_messages.message7'), this.translate.instant('invoices.title'));
                return;
            }
            this.invoices.discount = parseFloat(event.target.value);
        }
        else {
            this.invoices.adjustment = parseFloat(event.target.value);
        }
        if (isNaN(this.invoices.discount)) {
            this.invoices.discount = 0;
        }
        if (isNaN(this.invoices.adjustment)) {
            this.invoices.adjustment = 0;
        }
        this.getItemTaxes();
    };
    InvoiceCreateComponent.prototype.projectChange = function (event) {
        if (this.createInvoiceForm.value.project_id == undefined || this.createInvoiceForm.value.project_id == null || this.createInvoiceForm.value.project_id == '') {
            this.createInvoiceForm.patchValue({ client_id: null });
            return;
        }
        this.createInvoiceForm.patchValue({ client_id: event.client_id });
    };
    InvoiceCreateComponent.prototype.addItem = function (event) {
        event.preventDefault();
        var item = this.createInvoiceForm.value.item;
        if (item.item_name == null || item.quantity == null || item.unit_price == null) {
            this.toastr.error(this.translate.instant('invoices.create.error_messages.message6'), this.translate.instant('invoices.title'));
            return false;
        }
        this.itemsArray.push(item);
        this.resetChildForm();
        this.invoices.discount = this.createInvoiceForm.value.discount;
        this.invoices.adjustment = this.createInvoiceForm.value.adjustment;
        this.getItemTaxes();
    };
    InvoiceCreateComponent.prototype.saveItemDetail = function (index, name, value) {
        this.itemsArray[index][name] = value;
        this.getItemTaxes();
    };
    InvoiceCreateComponent.prototype.deleteItem = function (index) {
        this.itemsArray.splice(index, 1);
        this.getItemTaxes();
    };
    InvoiceCreateComponent.prototype.getItemTaxes = function () {
        this.itemTaxes = [];
        this.invoices.sub_total = 0;
        this.invoices.total_taxes = 0;
        this.invoices.total = 0;
        this.total_discount = 0.00;
        var totalItemAmount = 0;
        // --
        // Count item taxes
        for (var iRow in this.itemsArray) {
            totalItemAmount = this.itemsArray[iRow].quantity * this.itemsArray[iRow].unit_price;
            for (var jRow in this.itemsArray[iRow].taxes) {
                var totalTaxes = 0;
                if (this.itemTaxes[this.itemsArray[iRow].taxes[jRow]] == undefined) {
                    this.itemTaxes[this.itemsArray[iRow].taxes[jRow]] = 0;
                }
                totalTaxes = (totalItemAmount * this.taxesNameValues[this.itemsArray[iRow].taxes[jRow]].tax_rate) / 100;
                this.invoices.total_taxes += totalTaxes;
                this.itemTaxes[this.itemsArray[iRow].taxes[jRow]] = this.itemTaxes[this.itemsArray[iRow].taxes[jRow]] + totalTaxes;
            }
            // --
            // Count sub total
            this.invoices.sub_total += totalItemAmount;
        }
        // --
        // Count total
        if (this.createInvoiceForm.value.discount_type == 'percent') {
            this.total_discount = ((this.invoices.sub_total + this.invoices.total_taxes) * this.invoices.discount) / 100;
        }
        else {
            this.total_discount = this.invoices.discount;
        }
        this.invoices.total = (this.invoices.sub_total + this.invoices.total_taxes - this.total_discount) + this.invoices.adjustment;
    };
    InvoiceCreateComponent.prototype.onSubmit = function () {
        var _this = this;
        this.isFormSubmitted = true;
        if (this.createInvoiceForm.invalid) {
            return;
        }
        if (this.itemsArray.length == 0) {
            this.toastr.error(this.translate.instant('invoices.create.error_messages.message5'), this.translate.instant('invoices.title'));
            return;
        }
        var invoiceObj = {
            'project_id': this.createInvoiceForm.value.project_id,
            'client_id': this.createInvoiceForm.value.client_id,
            'invoice_date': this.datepipe.transform(this.createInvoiceForm.value.invoice_date, 'yyyy-MM-dd'),
            'due_date': this.createInvoiceForm.value.due_date,
            'status': this.createInvoiceForm.value.status,
            'reference': this.createInvoiceForm.value.reference,
            'adjustment': this.createInvoiceForm.value.adjustment,
            'discount_type': this.createInvoiceForm.value.discount_type,
            'discount': this.createInvoiceForm.value.discount,
            'items': this.itemsArray
        };
        this.invoiceService.create(invoiceObj)
            .subscribe(function (data) {
            _this.toastr.success(_this.translate.instant('invoices.messages.create'), _this.translate.instant('invoices.title'));
            _this.router.navigate(['invoices']);
        });
    };
    InvoiceCreateComponent.ctorParameters = function () { return [
        { type: _ngx_translate_core__WEBPACK_IMPORTED_MODULE_6__["TranslateService"] },
        { type: _angular_common__WEBPACK_IMPORTED_MODULE_2__["DatePipe"] },
        { type: _angular_router__WEBPACK_IMPORTED_MODULE_4__["Router"] },
        { type: _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormBuilder"] },
        { type: ngx_toastr__WEBPACK_IMPORTED_MODULE_5__["ToastrService"] },
        { type: _core_services_invoice_service__WEBPACK_IMPORTED_MODULE_7__["InvoiceService"] },
        { type: _core_services_client_service__WEBPACK_IMPORTED_MODULE_9__["ClientService"] },
        { type: _core_services_item_service__WEBPACK_IMPORTED_MODULE_8__["ItemService"] },
        { type: _core_services_tax_service__WEBPACK_IMPORTED_MODULE_10__["TaxService"] },
        { type: _core_services_project_service__WEBPACK_IMPORTED_MODULE_11__["ProjectService"] },
        { type: _core_services_invoice_setting_service__WEBPACK_IMPORTED_MODULE_13__["InvoiceSettingService"] },
        { type: _core_services_authentication_service__WEBPACK_IMPORTED_MODULE_12__["AuthenticationService"] }
    ]; };
    InvoiceCreateComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-invoice-create',
            template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./invoice-create.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/modules/sales/invoices/pages/invoice-create/invoice-create.component.html")).default,
            providers: [_angular_common__WEBPACK_IMPORTED_MODULE_2__["DatePipe"]],
            styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./invoice-create.component.scss */ "./src/app/modules/sales/invoices/pages/invoice-create/invoice-create.component.scss")).default]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_ngx_translate_core__WEBPACK_IMPORTED_MODULE_6__["TranslateService"],
            _angular_common__WEBPACK_IMPORTED_MODULE_2__["DatePipe"],
            _angular_router__WEBPACK_IMPORTED_MODULE_4__["Router"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormBuilder"],
            ngx_toastr__WEBPACK_IMPORTED_MODULE_5__["ToastrService"],
            _core_services_invoice_service__WEBPACK_IMPORTED_MODULE_7__["InvoiceService"],
            _core_services_client_service__WEBPACK_IMPORTED_MODULE_9__["ClientService"],
            _core_services_item_service__WEBPACK_IMPORTED_MODULE_8__["ItemService"],
            _core_services_tax_service__WEBPACK_IMPORTED_MODULE_10__["TaxService"],
            _core_services_project_service__WEBPACK_IMPORTED_MODULE_11__["ProjectService"],
            _core_services_invoice_setting_service__WEBPACK_IMPORTED_MODULE_13__["InvoiceSettingService"],
            _core_services_authentication_service__WEBPACK_IMPORTED_MODULE_12__["AuthenticationService"]])
    ], InvoiceCreateComponent);
    return InvoiceCreateComponent;
}());



/***/ }),

/***/ "./src/app/modules/sales/invoices/pages/invoice-edit/invoice-edit.component.scss":
/*!***************************************************************************************!*\
  !*** ./src/app/modules/sales/invoices/pages/invoice-edit/invoice-edit.component.scss ***!
  \***************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = (".ng-select.ng-select-single .ng-select-container {\n  min-width: 500px;\n}\n\n.inp {\n  border: none;\n  border-bottom: 1px solid #e8eef3;\n  padding: 5px 10px;\n  outline: none;\n  width: 100%;\n}\n\n[placeholder]:focus::-webkit-input-placeholder {\n  transition: text-indent 0.4s 0.4s ease;\n  text-indent: -100%;\n  opacity: 1;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvbW9kdWxlcy9zYWxlcy9pbnZvaWNlcy9wYWdlcy9pbnZvaWNlLWVkaXQvQzpcXFVzZXJzXFx0aHVhblxcT25lRHJpdmVcXERlc2t0b3BcXGdsYXZhbC10aHVhbmRpbmgvc3JjXFxhcHBcXG1vZHVsZXNcXHNhbGVzXFxpbnZvaWNlc1xccGFnZXNcXGludm9pY2UtZWRpdFxcaW52b2ljZS1lZGl0LmNvbXBvbmVudC5zY3NzIiwic3JjL2FwcC9tb2R1bGVzL3NhbGVzL2ludm9pY2VzL3BhZ2VzL2ludm9pY2UtZWRpdC9pbnZvaWNlLWVkaXQuY29tcG9uZW50LnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFFSSxnQkFBQTtBQ0FKOztBREdBO0VBQ0ksWUFBQTtFQUNBLGdDQUFBO0VBQ0EsaUJBQUE7RUFDQSxhQUFBO0VBQ0EsV0FBQTtBQ0FKOztBREdBO0VBQ0ksc0NBQUE7RUFDQSxrQkFBQTtFQUNBLFVBQUE7QUNBSiIsImZpbGUiOiJzcmMvYXBwL21vZHVsZXMvc2FsZXMvaW52b2ljZXMvcGFnZXMvaW52b2ljZS1lZGl0L2ludm9pY2UtZWRpdC5jb21wb25lbnQuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIi5uZy1zZWxlY3Qubmctc2VsZWN0LXNpbmdsZVxyXG4ubmctc2VsZWN0LWNvbnRhaW5lciB7XHJcbiAgICBtaW4td2lkdGg6IDUwMHB4O1xyXG59XHJcblxyXG4uaW5wIHtcclxuICAgIGJvcmRlcjogbm9uZTtcclxuICAgIGJvcmRlci1ib3R0b206IDFweCBzb2xpZCAjZThlZWYzO1xyXG4gICAgcGFkZGluZzogNXB4IDEwcHg7XHJcbiAgICBvdXRsaW5lOiBub25lO1xyXG4gICAgd2lkdGg6IDEwMCU7XHJcbn1cclxuXHJcbltwbGFjZWhvbGRlcl06Zm9jdXM6Oi13ZWJraXQtaW5wdXQtcGxhY2Vob2xkZXIge1xyXG4gICAgdHJhbnNpdGlvbjogdGV4dC1pbmRlbnQgMC40cyAwLjRzIGVhc2U7XHJcbiAgICB0ZXh0LWluZGVudDogLTEwMCU7XHJcbiAgICBvcGFjaXR5OiAxO1xyXG59XHJcbiIsIi5uZy1zZWxlY3Qubmctc2VsZWN0LXNpbmdsZSAubmctc2VsZWN0LWNvbnRhaW5lciB7XG4gIG1pbi13aWR0aDogNTAwcHg7XG59XG5cbi5pbnAge1xuICBib3JkZXI6IG5vbmU7XG4gIGJvcmRlci1ib3R0b206IDFweCBzb2xpZCAjZThlZWYzO1xuICBwYWRkaW5nOiA1cHggMTBweDtcbiAgb3V0bGluZTogbm9uZTtcbiAgd2lkdGg6IDEwMCU7XG59XG5cbltwbGFjZWhvbGRlcl06Zm9jdXM6Oi13ZWJraXQtaW5wdXQtcGxhY2Vob2xkZXIge1xuICB0cmFuc2l0aW9uOiB0ZXh0LWluZGVudCAwLjRzIDAuNHMgZWFzZTtcbiAgdGV4dC1pbmRlbnQ6IC0xMDAlO1xuICBvcGFjaXR5OiAxO1xufSJdfQ== */");

/***/ }),

/***/ "./src/app/modules/sales/invoices/pages/invoice-edit/invoice-edit.component.ts":
/*!*************************************************************************************!*\
  !*** ./src/app/modules/sales/invoices/pages/invoice-edit/invoice-edit.component.ts ***!
  \*************************************************************************************/
/*! exports provided: InvoiceEditComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "InvoiceEditComponent", function() { return InvoiceEditComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var ngx_toastr__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ngx-toastr */ "./node_modules/ngx-toastr/fesm5/ngx-toastr.js");
/* harmony import */ var _ngx_translate_core__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @ngx-translate/core */ "./node_modules/@ngx-translate/core/fesm5/ngx-translate-core.js");
/* harmony import */ var _core_services_invoice_service__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../../../../../core/services/invoice.service */ "./src/app/core/services/invoice.service.ts");
/* harmony import */ var _core_services_item_service__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../../../../../core/services/item.service */ "./src/app/core/services/item.service.ts");
/* harmony import */ var _core_services_client_service__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../../../../../core/services/client.service */ "./src/app/core/services/client.service.ts");
/* harmony import */ var _core_services_tax_service__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ../../../../../core/services/tax.service */ "./src/app/core/services/tax.service.ts");
/* harmony import */ var _core_services_project_service__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ../../../../../core/services/project.service */ "./src/app/core/services/project.service.ts");
/* harmony import */ var _core_services_authentication_service__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ../../../../../core/services/authentication.service */ "./src/app/core/services/authentication.service.ts");













var InvoiceEditComponent = /** @class */ (function () {
    function InvoiceEditComponent(translate, datepipe, router, route, formBuilder, toastr, invoiceService, clientService, itemService, taxService, projectService, authenticationService) {
        var _this = this;
        this.translate = translate;
        this.datepipe = datepipe;
        this.router = router;
        this.route = route;
        this.formBuilder = formBuilder;
        this.toastr = toastr;
        this.invoiceService = invoiceService;
        this.clientService = clientService;
        this.itemService = itemService;
        this.taxService = taxService;
        this.projectService = projectService;
        this.authenticationService = authenticationService;
        this.clients = [];
        this.items = [];
        this.itemsArray = [];
        this.taxes = [];
        this.itemTaxes = [];
        this.taxesNameValues = [];
        this.total_discount = 0.00;
        this.isFormSubmitted = false;
        this.isFormLoaded = false;
        this.invoices = {
            sub_total: 0,
            total_taxes: 0,
            discount: 0.00,
            adjustment: 0.00,
            total: 0
        };
        this.datepickerConfig = {
            dateInputFormat: 'YYYY-MM-DD',
            containerClass: 'theme-red'
        };
        this.authenticationService.loginUser.subscribe(function (x) { return _this.loginUser = x; });
        this.route.paramMap.subscribe(function (params) {
            _this.getById(params.get('id'));
        });
    }
    Object.defineProperty(InvoiceEditComponent.prototype, "invoiceControl", {
        get: function () {
            return this.editInvoiceForm.controls;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(InvoiceEditComponent.prototype, "itemControl", {
        get: function () {
            return this.editInvoiceForm.get('item');
        },
        enumerable: true,
        configurable: true
    });
    InvoiceEditComponent.prototype.ngOnInit = function () {
        this.getProjects();
        this.getTaxes();
    };
    InvoiceEditComponent.prototype.loadForm = function () {
        this.editInvoiceForm = this.formBuilder.group({
            id: [this.invoice.id],
            project_id: [this.invoice.project_id],
            client_id: [this.invoice.client_id, _angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].required],
            invoice_date: [new Date(this.invoice.invoice_date), _angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].required],
            due_date: [new Date(this.invoice.due_date), _angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].required],
            reference: [this.invoice.reference],
            status: [this.invoice.status],
            discount_type: [this.invoice.discount_type],
            invoice_number: [this.invoice.invoice_number],
            selectedItem: [null],
            discount: [this.invoice.discount],
            adjustment: [this.invoice.adjustment],
            item: this.formBuilder.group({
                item_name: [null],
                item_description: [null],
                quantity: [null],
                unit_price: [null],
                item_unit: [null],
                taxes: [null],
                amount: [0]
            }),
            items: this.invoice.items
        });
        // --
        // Render selected items
        this.setSelectedItems(this.invoice.items);
        this.isFormLoaded = true;
    };
    InvoiceEditComponent.prototype.getProjects = function () {
        var _this = this;
        this.projectService.getAll()
            .subscribe(function (data) {
            _this.projects = data;
        });
    };
    InvoiceEditComponent.prototype.getById = function (invoiceId) {
        var _this = this;
        this.invoiceService.getById(invoiceId)
            .subscribe(function (data) {
            _this.invoice = data;
            _this.getClients();
        });
    };
    InvoiceEditComponent.prototype.getClients = function () {
        var _this = this;
        this.clientService.getAll()
            .subscribe(function (data) {
            _this.clients = data;
            _this.getItems();
        });
    };
    InvoiceEditComponent.prototype.getItems = function () {
        var _this = this;
        this.itemService.getAll()
            .subscribe(function (data) {
            _this.items = data;
            _this.loadForm();
        });
    };
    InvoiceEditComponent.prototype.getTaxes = function () {
        var _this = this;
        this.taxService.getAll().subscribe(function (data) {
            _this.taxes = data;
            for (var iRow in _this.taxes) {
                if (_this.taxesNameValues[_this.taxes[iRow].id] == undefined) {
                    _this.taxesNameValues[_this.taxes[iRow].id] = [];
                }
                _this.taxesNameValues[_this.taxes[iRow].id] = _this.taxes[iRow];
            }
        });
    };
    InvoiceEditComponent.prototype.addDays = function (date, days) {
        return new Date(date.setDate(date.getDate() + days));
    };
    InvoiceEditComponent.prototype.projectChange = function (event) {
        if (this.editInvoiceForm.value.project_id == undefined || this.editInvoiceForm.value.project_id == null || this.editInvoiceForm.value.project_id == '') {
            this.editInvoiceForm.patchValue({ client_id: null });
            return;
        }
        this.editInvoiceForm.patchValue({ client_id: event.client_id });
    };
    InvoiceEditComponent.prototype.setSelectedItems = function (items) {
        for (var iRow in items) {
            var taxes = [];
            for (var jRow in items[iRow].taxes) {
                taxes.push(items[iRow].taxes[jRow].id);
            }
            items[iRow].taxes = taxes;
            this.itemsArray.push(items[iRow]);
        }
        this.invoices.discount = this.invoice.discount;
        this.invoices.adjustment = this.invoice.adjustment;
        this.getItemTaxes();
    };
    InvoiceEditComponent.prototype.changeItem = function (event) {
        var taxes = [];
        for (var iRow in event.taxes) {
            taxes.push(event.taxes[iRow].id);
        }
        this.itemControl.patchValue({ item_name: event.name });
        this.itemControl.patchValue({ item_description: event.description });
        this.itemControl.patchValue({ quantity: 1 });
        this.itemControl.patchValue({ unit_price: event.price });
        this.itemControl.patchValue({ item_unit: event.unit });
        this.itemControl.patchValue({ taxes: taxes });
    };
    InvoiceEditComponent.prototype.resetChildForm = function () {
        this.itemControl.patchValue({ item_name: null });
        this.itemControl.patchValue({ item_description: null });
        this.itemControl.patchValue({ quantity: null });
        this.itemControl.patchValue({ unit_price: null });
        this.itemControl.patchValue({ item_unit: null });
        this.itemControl.patchValue({ taxes: [] });
    };
    InvoiceEditComponent.prototype.changeDiscountType = function (event) {
        if (event.id == 'not_discount') {
            this.invoices.discount = 0;
        }
        this.getItemTaxes();
    };
    InvoiceEditComponent.prototype.changeDiscountAdjustment = function (event, type) {
        if (type == 'discount') {
            if (this.editInvoiceForm.value.discount_type == 'not_discount') {
                this.toastr.error(this.translate.instant('invoices.create.error_messages.message7'), this.translate.instant('invoices.title'));
                return;
            }
            this.invoices.discount = parseFloat(event.target.value);
        }
        else {
            this.invoices.adjustment = parseFloat(event.target.value);
        }
        if (isNaN(this.invoices.discount)) {
            this.invoices.discount = 0;
        }
        if (isNaN(this.invoices.adjustment)) {
            this.invoices.adjustment = 0;
        }
        this.getItemTaxes();
    };
    InvoiceEditComponent.prototype.addItem = function (event) {
        event.preventDefault();
        var item = this.editInvoiceForm.value.item;
        if (item.item_name == null || item.quantity == null || item.unit_price == null) {
            this.toastr.error(this.translate.instant('invoices.create.error_messages.message6'), this.translate.instant('invoices.title'));
            return false;
        }
        this.itemsArray.push(item);
        this.resetChildForm();
        this.invoices.discount = this.editInvoiceForm.value.discount;
        this.invoices.adjustment = this.editInvoiceForm.value.adjustment;
        this.getItemTaxes();
    };
    InvoiceEditComponent.prototype.saveItemDetail = function (index, name, value) {
        this.itemsArray[index][name] = value;
        this.getItemTaxes();
    };
    InvoiceEditComponent.prototype.deleteItem = function (index) {
        this.itemsArray.splice(index, 1);
        this.getItemTaxes();
    };
    InvoiceEditComponent.prototype.getItemTaxes = function () {
        this.itemTaxes = [];
        this.invoices.sub_total = 0;
        this.invoices.total_taxes = 0;
        this.invoices.total = 0;
        this.total_discount = 0.00;
        var totalItemAmount = 0;
        // --
        // Count item taxes
        for (var iRow in this.itemsArray) {
            totalItemAmount = this.itemsArray[iRow].quantity * this.itemsArray[iRow].unit_price;
            for (var jRow in this.itemsArray[iRow].taxes) {
                var totalTaxes = 0;
                if (this.itemTaxes[this.itemsArray[iRow].taxes[jRow]] == undefined) {
                    this.itemTaxes[this.itemsArray[iRow].taxes[jRow]] = 0;
                }
                totalTaxes = (totalItemAmount * this.taxesNameValues[this.itemsArray[iRow].taxes[jRow]].tax_rate) / 100;
                this.invoices.total_taxes += totalTaxes;
                this.itemTaxes[this.itemsArray[iRow].taxes[jRow]] = this.itemTaxes[this.itemsArray[iRow].taxes[jRow]] + totalTaxes;
            }
            // --
            // Count sub total
            this.invoices.sub_total += totalItemAmount;
        }
        // --
        // Count total
        if (this.editInvoiceForm.value.discount_type == 'percent') {
            this.total_discount = ((this.invoices.sub_total + this.invoices.total_taxes) * this.invoices.discount) / 100;
        }
        else {
            this.total_discount = this.invoices.discount;
        }
        this.invoices.total = (this.invoices.sub_total + this.invoices.total_taxes - this.total_discount) + this.invoices.adjustment;
    };
    InvoiceEditComponent.prototype.onSubmit = function () {
        var _this = this;
        this.isFormSubmitted = true;
        if (this.editInvoiceForm.invalid) {
            return;
        }
        if (this.itemsArray.length == 0) {
            this.toastr.error(this.translate.instant('invoices.create.error_messages.message5'), this.translate.instant('invoices.title'));
            return;
        }
        var invoiceObj = {
            'id': this.editInvoiceForm.value.id,
            'project_id': this.editInvoiceForm.value.project_id,
            'client_id': this.editInvoiceForm.value.client_id,
            'invoice_date': this.datepipe.transform(this.editInvoiceForm.value.invoice_date, 'yyyy-MM-dd'),
            'due_date': this.editInvoiceForm.value.due_date,
            'status': this.editInvoiceForm.value.status,
            'reference': this.editInvoiceForm.value.reference,
            'adjustment': this.invoices.adjustment,
            'discount_type': this.editInvoiceForm.value.discount_type,
            'discount': this.invoices.discount,
            'items': this.itemsArray
        };
        this.invoiceService.update(invoiceObj).subscribe(function (data) {
            _this.toastr.success(_this.translate.instant('invoices.messages.update'), _this.translate.instant('invoices.title'));
            _this.router.navigate(['invoices']);
        });
    };
    InvoiceEditComponent.ctorParameters = function () { return [
        { type: _ngx_translate_core__WEBPACK_IMPORTED_MODULE_6__["TranslateService"] },
        { type: _angular_common__WEBPACK_IMPORTED_MODULE_2__["DatePipe"] },
        { type: _angular_router__WEBPACK_IMPORTED_MODULE_4__["Router"] },
        { type: _angular_router__WEBPACK_IMPORTED_MODULE_4__["ActivatedRoute"] },
        { type: _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormBuilder"] },
        { type: ngx_toastr__WEBPACK_IMPORTED_MODULE_5__["ToastrService"] },
        { type: _core_services_invoice_service__WEBPACK_IMPORTED_MODULE_7__["InvoiceService"] },
        { type: _core_services_client_service__WEBPACK_IMPORTED_MODULE_9__["ClientService"] },
        { type: _core_services_item_service__WEBPACK_IMPORTED_MODULE_8__["ItemService"] },
        { type: _core_services_tax_service__WEBPACK_IMPORTED_MODULE_10__["TaxService"] },
        { type: _core_services_project_service__WEBPACK_IMPORTED_MODULE_11__["ProjectService"] },
        { type: _core_services_authentication_service__WEBPACK_IMPORTED_MODULE_12__["AuthenticationService"] }
    ]; };
    InvoiceEditComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-invoice-edit',
            template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./invoice-edit.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/modules/sales/invoices/pages/invoice-edit/invoice-edit.component.html")).default,
            styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./invoice-edit.component.scss */ "./src/app/modules/sales/invoices/pages/invoice-edit/invoice-edit.component.scss")).default]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_ngx_translate_core__WEBPACK_IMPORTED_MODULE_6__["TranslateService"],
            _angular_common__WEBPACK_IMPORTED_MODULE_2__["DatePipe"],
            _angular_router__WEBPACK_IMPORTED_MODULE_4__["Router"],
            _angular_router__WEBPACK_IMPORTED_MODULE_4__["ActivatedRoute"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormBuilder"],
            ngx_toastr__WEBPACK_IMPORTED_MODULE_5__["ToastrService"],
            _core_services_invoice_service__WEBPACK_IMPORTED_MODULE_7__["InvoiceService"],
            _core_services_client_service__WEBPACK_IMPORTED_MODULE_9__["ClientService"],
            _core_services_item_service__WEBPACK_IMPORTED_MODULE_8__["ItemService"],
            _core_services_tax_service__WEBPACK_IMPORTED_MODULE_10__["TaxService"],
            _core_services_project_service__WEBPACK_IMPORTED_MODULE_11__["ProjectService"],
            _core_services_authentication_service__WEBPACK_IMPORTED_MODULE_12__["AuthenticationService"]])
    ], InvoiceEditComponent);
    return InvoiceEditComponent;
}());



/***/ }),

/***/ "./src/app/modules/sales/invoices/pages/invoice-list/invoice-list.component.scss":
/*!***************************************************************************************!*\
  !*** ./src/app/modules/sales/invoices/pages/invoice-list/invoice-list.component.scss ***!
  \***************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = (".hide_empty_message ::ng-deep .odd {\n  display: none;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvbW9kdWxlcy9zYWxlcy9pbnZvaWNlcy9wYWdlcy9pbnZvaWNlLWxpc3QvQzpcXFVzZXJzXFx0aHVhblxcT25lRHJpdmVcXERlc2t0b3BcXGdsYXZhbC10aHVhbmRpbmgvc3JjXFxhcHBcXG1vZHVsZXNcXHNhbGVzXFxpbnZvaWNlc1xccGFnZXNcXGludm9pY2UtbGlzdFxcaW52b2ljZS1saXN0LmNvbXBvbmVudC5zY3NzIiwic3JjL2FwcC9tb2R1bGVzL3NhbGVzL2ludm9pY2VzL3BhZ2VzL2ludm9pY2UtbGlzdC9pbnZvaWNlLWxpc3QuY29tcG9uZW50LnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDSSxhQUFBO0FDQ0oiLCJmaWxlIjoic3JjL2FwcC9tb2R1bGVzL3NhbGVzL2ludm9pY2VzL3BhZ2VzL2ludm9pY2UtbGlzdC9pbnZvaWNlLWxpc3QuY29tcG9uZW50LnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyIuaGlkZV9lbXB0eV9tZXNzYWdlIDo6bmctZGVlcCAub2RkIHtcclxuICAgIGRpc3BsYXk6IG5vbmVcclxufSIsIi5oaWRlX2VtcHR5X21lc3NhZ2UgOjpuZy1kZWVwIC5vZGQge1xuICBkaXNwbGF5OiBub25lO1xufSJdfQ== */");

/***/ }),

/***/ "./src/app/modules/sales/invoices/pages/invoice-list/invoice-list.component.ts":
/*!*************************************************************************************!*\
  !*** ./src/app/modules/sales/invoices/pages/invoice-list/invoice-list.component.ts ***!
  \*************************************************************************************/
/*! exports provided: InvoiceListComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "InvoiceListComponent", function() { return InvoiceListComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");
/* harmony import */ var _ngx_translate_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @ngx-translate/core */ "./node_modules/@ngx-translate/core/fesm5/ngx-translate-core.js");
/* harmony import */ var ngx_export_as__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ngx-export-as */ "./node_modules/ngx-export-as/fesm2015/ngx-export-as.js");
/* harmony import */ var ngx_toastr__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ngx-toastr */ "./node_modules/ngx-toastr/fesm5/ngx-toastr.js");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! rxjs */ "./node_modules/rxjs/_esm5/index.js");
/* harmony import */ var sweetalert2__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! sweetalert2 */ "./node_modules/sweetalert2/dist/sweetalert2.all.js");
/* harmony import */ var sweetalert2__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(sweetalert2__WEBPACK_IMPORTED_MODULE_7__);
/* harmony import */ var _core_services_authentication_service__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../../../../../core/services/authentication.service */ "./src/app/core/services/authentication.service.ts");
/* harmony import */ var _core_services_invoice_service__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../../../../../core/services/invoice.service */ "./src/app/core/services/invoice.service.ts");
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ../../../../../../environments/environment */ "./src/environments/environment.ts");
/* harmony import */ var angular_datatables__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! angular-datatables */ "./node_modules/angular-datatables/index.js");
/* harmony import */ var datatables_net__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! datatables.net */ "./node_modules/datatables.net/js/jquery.dataTables.js");
/* harmony import */ var datatables_net__WEBPACK_IMPORTED_MODULE_12___default = /*#__PURE__*/__webpack_require__.n(datatables_net__WEBPACK_IMPORTED_MODULE_12__);
/* harmony import */ var datatables_net_bs4__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! datatables.net-bs4 */ "./node_modules/datatables.net-bs4/js/dataTables.bootstrap4.js");
/* harmony import */ var datatables_net_bs4__WEBPACK_IMPORTED_MODULE_13___default = /*#__PURE__*/__webpack_require__.n(datatables_net_bs4__WEBPACK_IMPORTED_MODULE_13__);














var InvoiceListComponent = /** @class */ (function () {
    function InvoiceListComponent(translate, exportAsService, http, toastr, authenticationService, invoiceService) {
        var _this = this;
        this.translate = translate;
        this.exportAsService = exportAsService;
        this.http = http;
        this.toastr = toastr;
        this.authenticationService = authenticationService;
        this.invoiceService = invoiceService;
        this.apiUrl = _environments_environment__WEBPACK_IMPORTED_MODULE_10__["environment"].apiUrl;
        this.dtTrigger = new rxjs__WEBPACK_IMPORTED_MODULE_6__["Subject"]();
        this.dtOptions = {};
        this.invoices = [];
        this.exportAsConfig = {
            type: 'pdf',
            elementIdOrContent: 'invoices_table',
        };
        this.authenticationService.loginUser.subscribe(function (x) { return _this.loginUser = x; });
    }
    InvoiceListComponent.prototype.ngOnInit = function () {
        this.loadDatatable();
    };
    InvoiceListComponent.prototype.loadDatatable = function () {
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
                    'width': '16%',
                    'target': [0]
                },
                {
                    'sortable': true,
                    'width': '16%',
                    'target': [1]
                },
                {
                    'sortable': true,
                    'width': '16%',
                    'target': [2]
                },
                {
                    'sortable': true,
                    'width': '16%',
                    'target': [3]
                },
                {
                    'sortable': true,
                    'width': '16%',
                    'target': [4]
                },
                {
                    'sortable': true,
                    'width': '15%',
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
                };
                _this.http.post(_this.apiUrl + '/api/all-invoices', dataTablesParameters, {}).subscribe(function (resp) {
                    that.invoices = resp.data;
                    callback({
                        recordsTotal: resp.recordsTotal,
                        recordsFiltered: resp.recordsFiltered,
                        data: [],
                    });
                });
            }
        };
    };
    InvoiceListComponent.prototype.exportFiles = function (type) {
        this.exportAsConfig.type = type;
        this.exportAsService.save(this.exportAsConfig, this.translate.instant('invoices.title')).subscribe(function () {
        });
    };
    InvoiceListComponent.prototype.ngAfterViewInit = function () {
        this.dtTrigger.next();
    };
    InvoiceListComponent.prototype.ngOnDestroy = function () {
        this.dtTrigger.unsubscribe();
    };
    InvoiceListComponent.prototype.rerender = function () {
        var _this = this;
        this.dtElement.dtInstance.then(function (dtInstance) {
            dtInstance.destroy();
            setTimeout(function () {
                _this.dtTrigger.next();
                if (_this.invoices.length > 0) {
                    $('.tfoot_dt').addClass('d-none');
                }
                else {
                    $('.tfoot_dt').removeClass('d-none');
                }
            });
        });
    };
    InvoiceListComponent.prototype.deleteInvoice = function (id) {
        var _this = this;
        sweetalert2__WEBPACK_IMPORTED_MODULE_7___default.a.fire({
            title: this.translate.instant('common.swal.title'),
            text: this.translate.instant('common.swal.text') + this.translate.instant('invoices.title1'),
            type: 'warning',
            showCancelButton: true,
            confirmButtonText: this.translate.instant('common.swal.confirmButtonText'),
            cancelButtonText: this.translate.instant('common.swal.cancelButtonText')
        }).then(function (result) {
            if (result.value) {
                _this.invoiceService.delete(id).subscribe(function (data) {
                    _this.rerender();
                    _this.toastr.success(_this.translate.instant('invoices.messages.delete'), _this.translate.instant('invoices.title'));
                });
            }
        });
    };
    InvoiceListComponent.ctorParameters = function () { return [
        { type: _ngx_translate_core__WEBPACK_IMPORTED_MODULE_3__["TranslateService"] },
        { type: ngx_export_as__WEBPACK_IMPORTED_MODULE_4__["ExportAsService"] },
        { type: _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClient"] },
        { type: ngx_toastr__WEBPACK_IMPORTED_MODULE_5__["ToastrService"] },
        { type: _core_services_authentication_service__WEBPACK_IMPORTED_MODULE_8__["AuthenticationService"] },
        { type: _core_services_invoice_service__WEBPACK_IMPORTED_MODULE_9__["InvoiceService"] }
    ]; };
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewChild"])(angular_datatables__WEBPACK_IMPORTED_MODULE_11__["DataTableDirective"], { static: true }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", angular_datatables__WEBPACK_IMPORTED_MODULE_11__["DataTableDirective"])
    ], InvoiceListComponent.prototype, "dtElement", void 0);
    InvoiceListComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-invoice-list',
            template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./invoice-list.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/modules/sales/invoices/pages/invoice-list/invoice-list.component.html")).default,
            styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./invoice-list.component.scss */ "./src/app/modules/sales/invoices/pages/invoice-list/invoice-list.component.scss")).default]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_ngx_translate_core__WEBPACK_IMPORTED_MODULE_3__["TranslateService"],
            ngx_export_as__WEBPACK_IMPORTED_MODULE_4__["ExportAsService"],
            _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClient"],
            ngx_toastr__WEBPACK_IMPORTED_MODULE_5__["ToastrService"],
            _core_services_authentication_service__WEBPACK_IMPORTED_MODULE_8__["AuthenticationService"],
            _core_services_invoice_service__WEBPACK_IMPORTED_MODULE_9__["InvoiceService"]])
    ], InvoiceListComponent);
    return InvoiceListComponent;
}());



/***/ }),

/***/ "./src/app/modules/sales/invoices/pages/invoice-view/invoice-view.component.scss":
/*!***************************************************************************************!*\
  !*** ./src/app/modules/sales/invoices/pages/invoice-view/invoice-view.component.scss ***!
  \***************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL21vZHVsZXMvc2FsZXMvaW52b2ljZXMvcGFnZXMvaW52b2ljZS12aWV3L2ludm9pY2Utdmlldy5jb21wb25lbnQuc2NzcyJ9 */");

/***/ }),

/***/ "./src/app/modules/sales/invoices/pages/invoice-view/invoice-view.component.ts":
/*!*************************************************************************************!*\
  !*** ./src/app/modules/sales/invoices/pages/invoice-view/invoice-view.component.ts ***!
  \*************************************************************************************/
/*! exports provided: InvoiceViewComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "InvoiceViewComponent", function() { return InvoiceViewComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var ngx_bootstrap_modal__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ngx-bootstrap/modal */ "./node_modules/ngx-bootstrap/modal/fesm5/ngx-bootstrap-modal.js");
/* harmony import */ var ngx_toastr__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ngx-toastr */ "./node_modules/ngx-toastr/fesm5/ngx-toastr.js");
/* harmony import */ var ngx_export_as__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ngx-export-as */ "./node_modules/ngx-export-as/fesm2015/ngx-export-as.js");
/* harmony import */ var _ngx_translate_core__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @ngx-translate/core */ "./node_modules/@ngx-translate/core/fesm5/ngx-translate-core.js");
/* harmony import */ var ngx_permissions__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ngx-permissions */ "./node_modules/ngx-permissions/ngx-permissions.umd.js");
/* harmony import */ var ngx_permissions__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(ngx_permissions__WEBPACK_IMPORTED_MODULE_7__);
/* harmony import */ var _core_services_authentication_service__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../../../../../core/services/authentication.service */ "./src/app/core/services/authentication.service.ts");
/* harmony import */ var _core_services_invoice_setting_service__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../../../../../core/services/invoice-setting.service */ "./src/app/core/services/invoice-setting.service.ts");
/* harmony import */ var _core_services_invoice_service__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ../../../../../core/services/invoice.service */ "./src/app/core/services/invoice.service.ts");
/* harmony import */ var _core_services_helper_service__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ../../../../../core/services/helper.service */ "./src/app/core/services/helper.service.ts");
/* harmony import */ var _core_services_tax_service__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ../../../../../core/services/tax.service */ "./src/app/core/services/tax.service.ts");
/* harmony import */ var _core_services_setting_service__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ../../../../../core/services/setting.service */ "./src/app/core/services/setting.service.ts");
/* harmony import */ var _core_services_payment_method_service__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ../../../../../core/services/payment-method.service */ "./src/app/core/services/payment-method.service.ts");
/* harmony import */ var _payments_components_create_payment_create_payment_component__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! ../../../payments/components/create-payment/create-payment.component */ "./src/app/modules/sales/payments/components/create-payment/create-payment.component.ts");
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! ../../../../../../environments/environment */ "./src/environments/environment.ts");

















var InvoiceViewComponent = /** @class */ (function () {
    function InvoiceViewComponent(translate, ngxRolesService, modalService, router, route, toastr, exportAsService, invoiceService, settingService, invoiceSettingService, taxService, helperService, authenticationService, paymentMethodService) {
        var _this = this;
        this.translate = translate;
        this.ngxRolesService = ngxRolesService;
        this.modalService = modalService;
        this.router = router;
        this.route = route;
        this.toastr = toastr;
        this.exportAsService = exportAsService;
        this.invoiceService = invoiceService;
        this.settingService = settingService;
        this.invoiceSettingService = invoiceSettingService;
        this.taxService = taxService;
        this.helperService = helperService;
        this.authenticationService = authenticationService;
        this.paymentMethodService = paymentMethodService;
        this.itemTaxes = [];
        this.taxesNameValues = [];
        this.isPageLoad = false;
        this.paymentMethod = 'paypal';
        this.isDownloadable = false;
        this.invoices = {
            sub_total: 0,
            total_taxes: 0,
            total: 0,
            total_due_amount: 0
        };
        this.exportAsConfig = {
            type: 'pdf',
            elementIdOrContent: 'invoice_table',
        };
        this.apiUrl = _environments_environment__WEBPACK_IMPORTED_MODULE_16__["environment"].apiUrl;
        this.authenticationService.loginUser.subscribe(function (x) { return _this.loginUser = x; });
        this.route.paramMap.subscribe(function (params) {
            _this.getById(params.get('id'), true);
        });
    }
    InvoiceViewComponent.prototype.ngOnInit = function () {
        this.getInvoiceSettings();
        this.getPaymentGatewaySettings();
    };
    InvoiceViewComponent.prototype.getById = function (invoiceId, isLoad) {
        var _this = this;
        if (isLoad === void 0) { isLoad = false; }
        this.invoiceService.getById(invoiceId).subscribe(function (data) {
            _this.invoice = data;
            if (isLoad) {
                _this.getPaymentMethods();
                _this.getInvoiceAmount();
                _this.getCheckPermission();
            }
        });
    };
    InvoiceViewComponent.prototype.getCheckPermission = function () {
        var role = this.ngxRolesService.getRole('admin');
        if (this.loginUser.id == this.invoice.client_id) {
            this.isDownloadable = true;
        }
        if ((role && role.name == 'admin') || this.loginUser.is_super_admin) {
            this.isDownloadable = true;
        }
    };
    InvoiceViewComponent.prototype.getInvoiceAmount = function () {
        for (var iRow in this.invoice.payments) {
            this.invoices.total_due_amount += this.invoice.payments[iRow].amount;
        }
    };
    InvoiceViewComponent.prototype.getInvoiceSettings = function () {
        var _this = this;
        this.invoiceSettingService.getAll()
            .subscribe(function (data) {
            _this.invoiceSettings = data;
        });
    };
    InvoiceViewComponent.prototype.getPaymentGatewaySettings = function () {
        var _this = this;
        this.settingService.getPaymentGatewaySettings()
            .subscribe(function (data) {
            _this.gatewaySettings = data;
        });
    };
    InvoiceViewComponent.prototype.getPaymentMethods = function () {
        var _this = this;
        this.paymentMethodService.getAll()
            .subscribe(function (data) {
            _this.paymentModes = data;
            _this.getTaxes();
        });
    };
    InvoiceViewComponent.prototype.getTaxes = function () {
        var _this = this;
        this.taxService.getAll().subscribe(function (data) {
            _this.taxes = data;
            for (var iRow in _this.taxes) {
                if (_this.taxesNameValues[_this.taxes[iRow].id] == undefined) {
                    _this.taxesNameValues[_this.taxes[iRow].id] = [];
                }
                _this.taxesNameValues[_this.taxes[iRow].id] = _this.taxes[iRow];
            }
            _this.getItemTaxes();
        });
    };
    InvoiceViewComponent.prototype.getItemTaxes = function () {
        this.invoices.sub_total = 0;
        this.invoices.total_taxes = 0;
        this.invoices.total = 0;
        var totalItemAmount = 0;
        var total_discount = 0;
        // --
        // Count item taxes
        for (var iRow in this.invoice.items) {
            totalItemAmount = this.invoice.items[iRow].quantity * this.invoice.items[iRow].unit_price;
            for (var jRow in this.invoice.items[iRow].taxes) {
                var totalTaxes = 0;
                if (this.itemTaxes[this.invoice.items[iRow].taxes[jRow].id] == undefined) {
                    this.itemTaxes[this.invoice.items[iRow].taxes[jRow].id] = 0;
                }
                totalTaxes = (totalItemAmount * this.invoice.items[iRow].taxes[jRow].tax_rate) / 100;
                this.invoices.total_taxes += totalTaxes;
                this.itemTaxes[this.invoice.items[iRow].taxes[jRow].id] = this.itemTaxes[this.invoice.items[iRow].taxes[jRow].id] + totalTaxes;
            }
            // --
            // Count sub total
            this.invoices.sub_total += totalItemAmount;
        }
        // --
        // Count total
        this.invoices.total = (this.invoices.sub_total + this.invoices.total_taxes - this.invoice.total_discount) + this.invoice.adjustment;
        this.isPageLoad = true;
    };
    InvoiceViewComponent.prototype.openPaymentCreateModal = function () {
        var _this = this;
        var modalConfigs = {
            animated: true,
            keyboard: true,
            backdrop: true,
            ignoreBackdropClick: false,
            class: 'inmodal modal-dialog-centered animated fadeIn',
            initialState: {
                invoice: this.invoice
            }
        };
        this.modalRef = this.modalService.show(_payments_components_create_payment_create_payment_component__WEBPACK_IMPORTED_MODULE_15__["CreatePaymentComponent"], modalConfigs);
        this.modalRef.content.event.subscribe(function (data) {
            _this.getById(_this.invoice.id);
        });
    };
    InvoiceViewComponent.prototype.getPaymentSuccess = function () {
        this.getById(this.invoice.id);
    };
    InvoiceViewComponent.ctorParameters = function () { return [
        { type: _ngx_translate_core__WEBPACK_IMPORTED_MODULE_6__["TranslateService"] },
        { type: ngx_permissions__WEBPACK_IMPORTED_MODULE_7__["NgxRolesService"] },
        { type: ngx_bootstrap_modal__WEBPACK_IMPORTED_MODULE_3__["BsModalService"] },
        { type: _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"] },
        { type: _angular_router__WEBPACK_IMPORTED_MODULE_2__["ActivatedRoute"] },
        { type: ngx_toastr__WEBPACK_IMPORTED_MODULE_4__["ToastrService"] },
        { type: ngx_export_as__WEBPACK_IMPORTED_MODULE_5__["ExportAsService"] },
        { type: _core_services_invoice_service__WEBPACK_IMPORTED_MODULE_10__["InvoiceService"] },
        { type: _core_services_setting_service__WEBPACK_IMPORTED_MODULE_13__["SettingService"] },
        { type: _core_services_invoice_setting_service__WEBPACK_IMPORTED_MODULE_9__["InvoiceSettingService"] },
        { type: _core_services_tax_service__WEBPACK_IMPORTED_MODULE_12__["TaxService"] },
        { type: _core_services_helper_service__WEBPACK_IMPORTED_MODULE_11__["HelperService"] },
        { type: _core_services_authentication_service__WEBPACK_IMPORTED_MODULE_8__["AuthenticationService"] },
        { type: _core_services_payment_method_service__WEBPACK_IMPORTED_MODULE_14__["PaymentMethodService"] }
    ]; };
    InvoiceViewComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-invoice-view',
            template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./invoice-view.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/modules/sales/invoices/pages/invoice-view/invoice-view.component.html")).default,
            styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./invoice-view.component.scss */ "./src/app/modules/sales/invoices/pages/invoice-view/invoice-view.component.scss")).default]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_ngx_translate_core__WEBPACK_IMPORTED_MODULE_6__["TranslateService"],
            ngx_permissions__WEBPACK_IMPORTED_MODULE_7__["NgxRolesService"],
            ngx_bootstrap_modal__WEBPACK_IMPORTED_MODULE_3__["BsModalService"],
            _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"],
            _angular_router__WEBPACK_IMPORTED_MODULE_2__["ActivatedRoute"],
            ngx_toastr__WEBPACK_IMPORTED_MODULE_4__["ToastrService"],
            ngx_export_as__WEBPACK_IMPORTED_MODULE_5__["ExportAsService"],
            _core_services_invoice_service__WEBPACK_IMPORTED_MODULE_10__["InvoiceService"],
            _core_services_setting_service__WEBPACK_IMPORTED_MODULE_13__["SettingService"],
            _core_services_invoice_setting_service__WEBPACK_IMPORTED_MODULE_9__["InvoiceSettingService"],
            _core_services_tax_service__WEBPACK_IMPORTED_MODULE_12__["TaxService"],
            _core_services_helper_service__WEBPACK_IMPORTED_MODULE_11__["HelperService"],
            _core_services_authentication_service__WEBPACK_IMPORTED_MODULE_8__["AuthenticationService"],
            _core_services_payment_method_service__WEBPACK_IMPORTED_MODULE_14__["PaymentMethodService"]])
    ], InvoiceViewComponent);
    return InvoiceViewComponent;
}());



/***/ })

}]);
//# sourceMappingURL=modules-sales-invoices-invoices-module.js.map