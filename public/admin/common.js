(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["common"],{

/***/ "./node_modules/angular-checklist/fesm5/angular-checklist.js":
/*!*******************************************************************!*\
  !*** ./node_modules/angular-checklist/fesm5/angular-checklist.js ***!
  \*******************************************************************/
/*! exports provided: ChecklistDirective, ChecklistModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ChecklistDirective", function() { return ChecklistDirective; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ChecklistModule", function() { return ChecklistModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");



var ChecklistDirective = /** @class */ (function () {
    function ChecklistDirective() {
        this.maxSelectedItems = -1;
        this.checklistChange = new _angular_core__WEBPACK_IMPORTED_MODULE_1__["EventEmitter"]();
    }
    ////////////
    ChecklistDirective.prototype.ngOnChanges = function () {
        var checklist = this.checklist || [];
        this.isChecked = checklist.indexOf(this.checklistValue) >= 0;
    };
    ChecklistDirective.prototype.triggerOnChange = function (target) {
        var updatedList;
        var checklist = this.checklist || [];
        if (target && target.checked) {
            if (this.maxSelectedItems === -1 || checklist.length < this.maxSelectedItems) {
                updatedList = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__spread"])(checklist, [this.checklistValue]);
                this.checklistChange.emit(updatedList);
            }
            else {
                target.checked = false;
            }
        }
        else {
            var i = checklist.indexOf(this.checklistValue);
            updatedList = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__spread"])(checklist.slice(0, i), checklist.slice(i + 1));
            this.checklistChange.emit(updatedList);
        }
    };
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])()
    ], ChecklistDirective.prototype, "checklist", void 0);
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])()
    ], ChecklistDirective.prototype, "checklistValue", void 0);
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])()
    ], ChecklistDirective.prototype, "maxSelectedItems", void 0);
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Output"])()
    ], ChecklistDirective.prototype, "checklistChange", void 0);
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["HostBinding"])('checked')
    ], ChecklistDirective.prototype, "isChecked", void 0);
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["HostListener"])('change', ['$event.target'])
    ], ChecklistDirective.prototype, "triggerOnChange", null);
    ChecklistDirective = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Directive"])({
            selector: '[checklist]'
        })
    ], ChecklistDirective);
    return ChecklistDirective;
}());

var ChecklistModule = /** @class */ (function () {
    function ChecklistModule() {
    }
    ChecklistModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            declarations: [
                ChecklistDirective,
            ],
            imports: [],
            exports: [
                ChecklistDirective,
            ]
        })
    ], ChecklistModule);
    return ChecklistModule;
}());

/*
 * Public API Surface of angular-checklist
 */

/**
 * Generated bundle index. Do not edit.
 */


//# sourceMappingURL=angular-checklist.js.map


/***/ }),

/***/ "./node_modules/ngx-order-pipe/fesm2015/ngx-order-pipe.js":
/*!****************************************************************!*\
  !*** ./node_modules/ngx-order-pipe/fesm2015/ngx-order-pipe.js ***!
  \****************************************************************/
/*! exports provided: OrderModule, OrderPipe */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "OrderModule", function() { return OrderModule; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "OrderPipe", function() { return OrderPipe; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");


class OrderPipe {
    /**
     * Check if a value is a string
     *
     * @param value
     */
    static isString(value) {
        return typeof value === "string" || value instanceof String;
    }
    /**
     * Sorts values ignoring the case
     *
     * @param a
     * @param b
     */
    static caseInsensitiveSort(a, b) {
        if (OrderPipe.isString(a) && OrderPipe.isString(b)) {
            return a.localeCompare(b);
        }
        return OrderPipe.defaultCompare(a, b);
    }
    /**
     * Default compare method
     *
     * @param a
     * @param b
     */
    static defaultCompare(a, b) {
        if (a && a instanceof Date) {
            a = a.getTime();
        }
        if (b && b instanceof Date) {
            b = b.getTime();
        }
        if (a === b) {
            return 0;
        }
        if (a == null) {
            return 1;
        }
        if (b == null) {
            return -1;
        }
        return a > b ? 1 : -1;
    }
    /**
     * Parse expression, split into items
     * @param expression
     * @returns {string[]}
     */
    static parseExpression(expression) {
        expression = expression.replace(/\[(\w+)\]/g, ".$1");
        expression = expression.replace(/^\./, "");
        return expression.split(".");
    }
    /**
     * Get value by expression
     *
     * @param object
     * @param expression
     * @returns {any}
     */
    static getValue(object, expression) {
        for (let i = 0, n = expression.length; i < n; ++i) {
            if (!object) {
                return;
            }
            const k = expression[i];
            if (!(k in object)) {
                return;
            }
            if (typeof object[k] === "function") {
                object = object[k]();
            }
            else {
                object = object[k];
            }
        }
        return object;
    }
    /**
     * Set value by expression
     *
     * @param object
     * @param value
     * @param expression
     */
    static setValue(object, value, expression) {
        let i;
        for (i = 0; i < expression.length - 1; i++) {
            object = object[expression[i]];
        }
        object[expression[i]] = value;
    }
    transform(value, expression, reverse, isCaseInsensitive = false, comparator) {
        if (!value) {
            return value;
        }
        if (Array.isArray(expression)) {
            return this.multiExpressionTransform(value, expression, reverse, isCaseInsensitive, comparator);
        }
        if (Array.isArray(value)) {
            return this.sortArray(value.slice(), expression, reverse, isCaseInsensitive, comparator);
        }
        if (typeof value === "object") {
            return this.transformObject(Object.assign({}, value), expression, reverse, isCaseInsensitive, comparator);
        }
        return value;
    }
    /**
     * Sort array
     *
     * @param value
     * @param expression
     * @param reverse
     * @param isCaseInsensitive
     * @param comparator
     * @returns {any[]}
     */
    sortArray(value, expression, reverse, isCaseInsensitive, comparator) {
        const isDeepLink = expression && expression.indexOf(".") !== -1;
        if (isDeepLink) {
            expression = OrderPipe.parseExpression(expression);
        }
        let compareFn;
        if (comparator && typeof comparator === "function") {
            compareFn = comparator;
        }
        else {
            compareFn = isCaseInsensitive
                ? OrderPipe.caseInsensitiveSort
                : OrderPipe.defaultCompare;
        }
        const array = value.sort((a, b) => {
            if (!expression) {
                return compareFn(a, b);
            }
            if (!isDeepLink) {
                if (a && b) {
                    return compareFn(a[expression], b[expression]);
                }
                return compareFn(a, b);
            }
            return compareFn(OrderPipe.getValue(a, expression), OrderPipe.getValue(b, expression));
        });
        if (reverse) {
            return array.reverse();
        }
        return array;
    }
    /**
     * Transform Object
     *
     * @param value
     * @param expression
     * @param reverse
     * @param isCaseInsensitive
     * @param comparator
     * @returns {any[]}
     */
    transformObject(value, expression, reverse, isCaseInsensitive, comparator) {
        const parsedExpression = OrderPipe.parseExpression(expression);
        let lastPredicate = parsedExpression.pop();
        let oldValue = OrderPipe.getValue(value, parsedExpression);
        if (!Array.isArray(oldValue)) {
            parsedExpression.push(lastPredicate);
            lastPredicate = null;
            oldValue = OrderPipe.getValue(value, parsedExpression);
        }
        if (!oldValue) {
            return value;
        }
        OrderPipe.setValue(value, this.transform(oldValue, lastPredicate, reverse, isCaseInsensitive), parsedExpression);
        return value;
    }
    /**
     * Apply multiple expressions
     *
     * @param value
     * @param {any[]} expressions
     * @param {boolean} reverse
     * @param {boolean} isCaseInsensitive
     * @param {Function} comparator
     * @returns {any}
     */
    multiExpressionTransform(value, expressions, reverse, isCaseInsensitive = false, comparator) {
        return expressions.reverse().reduce((result, expression) => {
            return this.transform(result, expression, reverse, isCaseInsensitive, comparator);
        }, value);
    }
}
OrderPipe.decorators = [
    { type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Pipe"], args: [{
                name: "orderBy",
                pure: false,
            },] }
];

/**
 * Created by vadimdez on 20/01/2017.
 */
class OrderModule {
}
OrderModule.decorators = [
    { type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"], args: [{
                declarations: [OrderPipe],
                exports: [OrderPipe],
                providers: [OrderPipe]
            },] }
];

/**
 * Generated bundle index. Do not edit.
 */


//# sourceMappingURL=ngx-order-pipe.js.map


/***/ }),

/***/ "./node_modules/webpack/buildin/harmony-module.js":
/*!*******************************************!*\
  !*** (webpack)/buildin/harmony-module.js ***!
  \*******************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = function(originalModule) {
	if (!originalModule.webpackPolyfill) {
		var module = Object.create(originalModule);
		// module.parent = undefined by default
		if (!module.children) module.children = [];
		Object.defineProperty(module, "loaded", {
			enumerable: true,
			get: function() {
				return module.l;
			}
		});
		Object.defineProperty(module, "id", {
			enumerable: true,
			get: function() {
				return module.i;
			}
		});
		Object.defineProperty(module, "exports", {
			enumerable: true
		});
		module.webpackPolyfill = 1;
	}
	return module;
};


/***/ }),

/***/ "./src/app/core/helpers/admin.helper.ts":
/*!**********************************************!*\
  !*** ./src/app/core/helpers/admin.helper.ts ***!
  \**********************************************/
/*! exports provided: Admin, UserAvatars, meeting_status_key_value, meeting_status_key_class */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Admin", function() { return Admin; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "UserAvatars", function() { return UserAvatars; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "meeting_status_key_value", function() { return meeting_status_key_value; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "meeting_status_key_class", function() { return meeting_status_key_class; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");

var Admin = /** @class */ (function () {
    function Admin() {
    }
    return Admin;
}());

// --
// User avtars.
var UserAvatars = [
    '1-man.png',
    '2-man.png',
    '3-man.png',
    '4-man.png',
    '5-man.png',
    '6-man.png',
    '1-woman.png',
    '2-woman.png',
    '3-woman.png',
    '4-woman.png',
    '5-woman.png',
    '6-woman.png'
];
//--
// Meetings
var meeting_status_key_value = [];
meeting_status_key_value[1] = 'common.status.open';
meeting_status_key_value[2] = 'common.status.in_progress';
meeting_status_key_value[3] = 'common.status.cancel';
meeting_status_key_value[4] = 'common.status.completed';
var meeting_status_key_class = [];
meeting_status_key_class[1] = 'open';
meeting_status_key_class[2] = 'in_progress';
meeting_status_key_class[3] = 'cancel';
meeting_status_key_class[4] = 'completed';


/***/ }),

/***/ "./src/app/core/helpers/custom-event-title-formatter.provider.ts":
/*!***********************************************************************!*\
  !*** ./src/app/core/helpers/custom-event-title-formatter.provider.ts ***!
  \***********************************************************************/
/*! exports provided: CustomEventTitleFormatter, CustomDateFormatter */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CustomEventTitleFormatter", function() { return CustomEventTitleFormatter; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CustomDateFormatter", function() { return CustomDateFormatter; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var angular_calendar__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! angular-calendar */ "./node_modules/angular-calendar/fesm5/angular-calendar.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");




var CustomEventTitleFormatter = /** @class */ (function (_super) {
    tslib__WEBPACK_IMPORTED_MODULE_0__["__extends"](CustomEventTitleFormatter, _super);
    function CustomEventTitleFormatter(locale) {
        var _this = _super.call(this) || this;
        _this.locale = locale;
        return _this;
    }
    // you can override any of the methods defined in the parent class
    CustomEventTitleFormatter.prototype.month = function (event) {
        return "" + event.title;
    };
    CustomEventTitleFormatter.prototype.week = function (event) {
        return "<b>" + new _angular_common__WEBPACK_IMPORTED_MODULE_3__["DatePipe"](this.locale).transform(event.start, 'h:m a', this.locale) + "</b> " + event.title;
    };
    CustomEventTitleFormatter.prototype.day = function (event) {
        return "<b>" + new _angular_common__WEBPACK_IMPORTED_MODULE_3__["DatePipe"](this.locale).transform(event.start, 'h:m a', this.locale) + "</b> " + event.title;
    };
    CustomEventTitleFormatter.ctorParameters = function () { return [
        { type: String, decorators: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Inject"], args: [_angular_core__WEBPACK_IMPORTED_MODULE_1__["LOCALE_ID"],] }] }
    ]; };
    CustomEventTitleFormatter = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])(),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__param"](0, Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Inject"])(_angular_core__WEBPACK_IMPORTED_MODULE_1__["LOCALE_ID"])),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [String])
    ], CustomEventTitleFormatter);
    return CustomEventTitleFormatter;
}(angular_calendar__WEBPACK_IMPORTED_MODULE_2__["CalendarEventTitleFormatter"]));

var CustomDateFormatter = /** @class */ (function (_super) {
    tslib__WEBPACK_IMPORTED_MODULE_0__["__extends"](CustomDateFormatter, _super);
    function CustomDateFormatter() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    // you can override any of the methods defined in the parent class
    CustomDateFormatter.prototype.dayViewHour = function (_a) {
        var date = _a.date, locale = _a.locale;
        return new _angular_common__WEBPACK_IMPORTED_MODULE_3__["DatePipe"](locale).transform(date, 'HH:mm', locale);
    };
    CustomDateFormatter.prototype.weekViewHour = function (_a) {
        var date = _a.date, locale = _a.locale;
        return this.dayViewHour({ date: date, locale: locale });
    };
    return CustomDateFormatter;
}(angular_calendar__WEBPACK_IMPORTED_MODULE_2__["CalendarDateFormatter"]));



/***/ }),

/***/ "./src/app/core/services/categorys.service.ts":
/*!****************************************************!*\
  !*** ./src/app/core/services/categorys.service.ts ***!
  \****************************************************/
/*! exports provided: CategorysService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CategorysService", function() { return CategorysService; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../environments/environment */ "./src/environments/environment.ts");




var CategorysService = /** @class */ (function () {
    function CategorysService(http) {
        this.http = http;
        this.apiUrl = _environments_environment__WEBPACK_IMPORTED_MODULE_3__["environment"].apiUrl;
    }
    CategorysService.prototype.getAll = function () {
        return this.http.get(this.apiUrl + "/api/categorys");
    };
    CategorysService.prototype.getTemplate = function () {
        return this.http.get(this.apiUrl + "/api/categorys/get-template");
    };
    CategorysService.prototype.getById = function (id) {
        return this.http.get(this.apiUrl + "/api/categorys/get-by-id/" + id);
    };
    CategorysService.prototype.create = function (categorys) {
        return this.http.post(this.apiUrl + "/api/categorys", categorys);
    };
    CategorysService.prototype.update = function (categorys) {
        return this.http.put(this.apiUrl + "/api/categorys/" + categorys.id, categorys);
    };
    CategorysService.prototype.delete = function (id) {
        return this.http.delete(this.apiUrl + "/api/categorys/destroy/" + id);
    };
    CategorysService.ctorParameters = function () { return [
        { type: _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClient"] }
    ]; };
    CategorysService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
            providedIn: 'root'
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClient"]])
    ], CategorysService);
    return CategorysService;
}());



/***/ }),

/***/ "./src/app/core/services/collections.service.ts":
/*!******************************************************!*\
  !*** ./src/app/core/services/collections.service.ts ***!
  \******************************************************/
/*! exports provided: CollectionsService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CollectionsService", function() { return CollectionsService; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../environments/environment */ "./src/environments/environment.ts");




var CollectionsService = /** @class */ (function () {
    function CollectionsService(http) {
        this.http = http;
        this.apiUrl = _environments_environment__WEBPACK_IMPORTED_MODULE_3__["environment"].apiUrl;
    }
    CollectionsService.prototype.getAll = function () {
        return this.http.get(this.apiUrl + "/api/collections");
    };
    CollectionsService.prototype.getTemplate = function () {
        return this.http.get(this.apiUrl + "/api/collections/get-template");
    };
    CollectionsService.prototype.getById = function (id) {
        return this.http.get(this.apiUrl + "/api/collections/get-by-id/" + id);
    };
    CollectionsService.prototype.create = function (collections) {
        return this.http.post(this.apiUrl + "/api/collections", collections);
    };
    CollectionsService.prototype.update = function (collections) {
        return this.http.put(this.apiUrl + "/api/collections/" + collections.id, collections);
    };
    CollectionsService.prototype.delete = function (id) {
        return this.http.delete(this.apiUrl + "/api/collections/destroy/" + id);
    };
    CollectionsService.ctorParameters = function () { return [
        { type: _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClient"] }
    ]; };
    CollectionsService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
            providedIn: 'root'
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClient"]])
    ], CollectionsService);
    return CollectionsService;
}());



/***/ }),

/***/ "./src/app/core/services/defect.service.ts":
/*!*************************************************!*\
  !*** ./src/app/core/services/defect.service.ts ***!
  \*************************************************/
/*! exports provided: DefectService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DefectService", function() { return DefectService; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../environments/environment */ "./src/environments/environment.ts");




var DefectService = /** @class */ (function () {
    function DefectService(http) {
        this.http = http;
        this.apiUrl = _environments_environment__WEBPACK_IMPORTED_MODULE_3__["environment"].apiUrl;
    }
    DefectService.prototype.getAll = function () {
        return this.http.get(this.apiUrl + "/api/defect");
    };
    DefectService.prototype.getById = function (id) {
        return this.http.get(this.apiUrl + "/api/defect/" + id);
    };
    DefectService.prototype.create = function (defect) {
        return this.http.post(this.apiUrl + "/api/defect", defect);
    };
    DefectService.prototype.update = function (defect) {
        return this.http.put(this.apiUrl + "/api/defect/" + defect.id, defect);
    };
    DefectService.prototype.delete = function (id) {
        return this.http.delete(this.apiUrl + "/api/defect/" + id);
    };
    DefectService.prototype.updateNotes = function (defect) {
        return this.http.put(this.apiUrl + "/api/defect/notes/" + defect.id, defect);
    };
    DefectService.prototype.changeStatus = function (defect) {
        return this.http.post(this.apiUrl + "/api/defect/" + defect.id + "/change-status", { 'status': defect.status });
    };
    DefectService.prototype.changeSeverity = function (defect) {
        return this.http.post(this.apiUrl + "/api/defect/" + defect.id + "/change-severity", { 'severity': defect.severity });
    };
    DefectService.prototype.getDefectGeneratedId = function () {
        return this.http.get(this.apiUrl + "/api/defect/get-generated-id");
    };
    DefectService.prototype.getDefectPermission = function (id, type) {
        return this.http.get(this.apiUrl + "/api/defect/" + id + "/permission/" + type, {});
    };
    DefectService.prototype.getDefectForKanban = function (defect) {
        return this.http.post(this.apiUrl + "/api/defect/kanban", defect);
    };
    DefectService.prototype.updateKanbanStatusList = function (defect) {
        return this.http.post(this.apiUrl + "/api/defect/update-kanban", defect);
    };
    DefectService.prototype.getDefectForCalendar = function (obj) {
        if (obj === void 0) { obj = {}; }
        return this.http.post(this.apiUrl + "/api/defect/calendar", obj);
    };
    DefectService.ctorParameters = function () { return [
        { type: _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClient"] }
    ]; };
    DefectService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
            providedIn: 'root'
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClient"]])
    ], DefectService);
    return DefectService;
}());



/***/ }),

/***/ "./src/app/core/services/department.service.ts":
/*!*****************************************************!*\
  !*** ./src/app/core/services/department.service.ts ***!
  \*****************************************************/
/*! exports provided: DepartmentService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DepartmentService", function() { return DepartmentService; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../environments/environment */ "./src/environments/environment.ts");




var DepartmentService = /** @class */ (function () {
    function DepartmentService(http) {
        this.http = http;
        this.apiUrl = _environments_environment__WEBPACK_IMPORTED_MODULE_3__["environment"].apiUrl;
    }
    DepartmentService.prototype.getAll = function () {
        return this.http.get(this.apiUrl + "/api/departments");
    };
    DepartmentService.prototype.getById = function (id) {
        return this.http.get(this.apiUrl + "/api/departments/" + id);
    };
    DepartmentService.prototype.create = function (department) {
        return this.http.post(this.apiUrl + "/api/departments", department);
    };
    DepartmentService.prototype.update = function (department) {
        return this.http.put(this.apiUrl + "/api/departments/" + department.id, department);
    };
    DepartmentService.prototype.delete = function (id) {
        return this.http.delete(this.apiUrl + "/api/departments/" + id);
    };
    DepartmentService.prototype.deleteDepartmentRole = function (id, roleId) {
        return this.http.delete(this.apiUrl + "/api/departments/" + id + "/" + roleId);
    };
    DepartmentService.prototype.getDepartmentDetail = function (id, roleId) {
        return this.http.get(this.apiUrl + "/api/departments/" + id + "/" + roleId);
    };
    DepartmentService.prototype.updateDepartmentDetail = function (id, roleId, menu) {
        return this.http.put(this.apiUrl + "/api/departments/" + id + "/" + roleId, menu);
    };
    DepartmentService.prototype.getDepartmentsClientsRoles = function () {
        return this.http.get(this.apiUrl + "/api/departments/clients-roles");
    };
    DepartmentService.ctorParameters = function () { return [
        { type: _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClient"] }
    ]; };
    DepartmentService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
            providedIn: 'root'
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClient"]])
    ], DepartmentService);
    return DepartmentService;
}());



/***/ }),

/***/ "./src/app/core/services/estimate-setting.service.ts":
/*!***********************************************************!*\
  !*** ./src/app/core/services/estimate-setting.service.ts ***!
  \***********************************************************/
/*! exports provided: EstimateSettingService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "EstimateSettingService", function() { return EstimateSettingService; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../environments/environment */ "./src/environments/environment.ts");




var EstimateSettingService = /** @class */ (function () {
    function EstimateSettingService(http) {
        this.http = http;
        this.apiUrl = _environments_environment__WEBPACK_IMPORTED_MODULE_3__["environment"].apiUrl;
    }
    EstimateSettingService.prototype.getAll = function () {
        return this.http.get(this.apiUrl + "/api/estimate-setting");
    };
    EstimateSettingService.prototype.create = function (params) {
        return this.http.post(this.apiUrl + "/api/estimate-setting", params);
    };
    EstimateSettingService.ctorParameters = function () { return [
        { type: _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClient"] }
    ]; };
    EstimateSettingService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
            providedIn: 'root'
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClient"]])
    ], EstimateSettingService);
    return EstimateSettingService;
}());



/***/ }),

/***/ "./src/app/core/services/holiday.service.ts":
/*!**************************************************!*\
  !*** ./src/app/core/services/holiday.service.ts ***!
  \**************************************************/
/*! exports provided: HolidayService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "HolidayService", function() { return HolidayService; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../environments/environment */ "./src/environments/environment.ts");




var HolidayService = /** @class */ (function () {
    function HolidayService(http) {
        this.http = http;
        this.apiUrl = _environments_environment__WEBPACK_IMPORTED_MODULE_3__["environment"].apiUrl;
    }
    HolidayService.prototype.getAll = function (year) {
        return this.http.get(this.apiUrl + "/api/holidays?year=" + year);
    };
    HolidayService.prototype.getById = function (id) {
        return this.http.get(this.apiUrl + "/api/holidays/" + id);
    };
    HolidayService.prototype.create = function (holiday) {
        return this.http.post(this.apiUrl + "/api/holidays", holiday);
    };
    HolidayService.prototype.update = function (holiday) {
        return this.http.put(this.apiUrl + "/api/holidays/" + holiday.id, holiday);
    };
    HolidayService.prototype.delete = function (id) {
        return this.http.delete(this.apiUrl + "/api/holidays/" + id);
    };
    HolidayService.prototype.yearAllHolidays = function (year) {
        return this.http.post(this.apiUrl + "/api/all-year-holidays", { year: year });
    };
    HolidayService.ctorParameters = function () { return [
        { type: _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClient"] }
    ]; };
    HolidayService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
            providedIn: 'root'
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClient"]])
    ], HolidayService);
    return HolidayService;
}());



/***/ }),

/***/ "./src/app/core/services/incident.service.ts":
/*!***************************************************!*\
  !*** ./src/app/core/services/incident.service.ts ***!
  \***************************************************/
/*! exports provided: IncidentService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "IncidentService", function() { return IncidentService; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../environments/environment */ "./src/environments/environment.ts");




var IncidentService = /** @class */ (function () {
    function IncidentService(http) {
        this.http = http;
        this.apiUrl = _environments_environment__WEBPACK_IMPORTED_MODULE_3__["environment"].apiUrl;
    }
    IncidentService.prototype.getAll = function () {
        return this.http.get(this.apiUrl + "/api/incident");
    };
    IncidentService.prototype.getById = function (id) {
        return this.http.get(this.apiUrl + "/api/incident/" + id);
    };
    IncidentService.prototype.create = function (incident) {
        return this.http.post(this.apiUrl + "/api/incident", incident);
    };
    IncidentService.prototype.update = function (incident) {
        return this.http.put(this.apiUrl + "/api/incident/" + incident.id, incident);
    };
    IncidentService.prototype.delete = function (id) {
        return this.http.delete(this.apiUrl + "/api/incident/" + id);
    };
    IncidentService.prototype.updateNotes = function (incident) {
        return this.http.put(this.apiUrl + "/api/incident/notes/" + incident.id, incident);
    };
    IncidentService.prototype.changeStatus = function (incident) {
        return this.http.post(this.apiUrl + "/api/incident/" + incident.id + "/change-status", { 'status': incident.status });
    };
    IncidentService.prototype.changeSeverity = function (incident) {
        return this.http.post(this.apiUrl + "/api/incident/" + incident.id + "/change-severity", { 'priority': incident.priority });
    };
    IncidentService.prototype.getIncidentGeneratedId = function () {
        return this.http.get(this.apiUrl + "/api/incident/get-generated-id");
    };
    IncidentService.prototype.getIncidentPermission = function (id, type) {
        return this.http.get(this.apiUrl + "/api/incident/" + id + "/permission/" + type, {});
    };
    IncidentService.prototype.getIncidentForKanban = function (incident) {
        return this.http.post(this.apiUrl + "/api/incident/kanban", incident);
    };
    IncidentService.prototype.updateKanbanStatusList = function (incident) {
        return this.http.post(this.apiUrl + "/api/incident/update-kanban", incident);
    };
    IncidentService.prototype.getIncidentForCalendar = function (obj) {
        if (obj === void 0) { obj = {}; }
        return this.http.post(this.apiUrl + "/api/incident/calendar", obj);
    };
    IncidentService.ctorParameters = function () { return [
        { type: _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClient"] }
    ]; };
    IncidentService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
            providedIn: 'root'
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClient"]])
    ], IncidentService);
    return IncidentService;
}());



/***/ }),

/***/ "./src/app/core/services/item.service.ts":
/*!***********************************************!*\
  !*** ./src/app/core/services/item.service.ts ***!
  \***********************************************/
/*! exports provided: ItemService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ItemService", function() { return ItemService; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../environments/environment */ "./src/environments/environment.ts");




var ItemService = /** @class */ (function () {
    function ItemService(http) {
        this.http = http;
        this.apiUrl = _environments_environment__WEBPACK_IMPORTED_MODULE_3__["environment"].apiUrl;
    }
    ItemService.prototype.getAll = function () {
        return this.http.get(this.apiUrl + "/api/items");
    };
    ItemService.prototype.getById = function (id) {
        return this.http.get(this.apiUrl + "/api/items/" + id);
    };
    ItemService.prototype.create = function (item) {
        return this.http.post(this.apiUrl + "/api/items", item);
    };
    ItemService.prototype.update = function (item) {
        return this.http.put(this.apiUrl + "/api/items/" + item.id, item);
    };
    ItemService.prototype.delete = function (id) {
        return this.http.delete(this.apiUrl + "/api/items/" + id);
    };
    ItemService.ctorParameters = function () { return [
        { type: _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClient"] }
    ]; };
    ItemService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
            providedIn: 'root'
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClient"]])
    ], ItemService);
    return ItemService;
}());



/***/ }),

/***/ "./src/app/core/services/options.service.ts":
/*!**************************************************!*\
  !*** ./src/app/core/services/options.service.ts ***!
  \**************************************************/
/*! exports provided: OptionsService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "OptionsService", function() { return OptionsService; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../environments/environment */ "./src/environments/environment.ts");




var OptionsService = /** @class */ (function () {
    function OptionsService(http) {
        this.http = http;
        this.apiUrl = _environments_environment__WEBPACK_IMPORTED_MODULE_3__["environment"].apiUrl;
    }
    OptionsService.prototype.getAll = function (typeOption) {
        return this.http.post(this.apiUrl + "/api/options/getAll", { typeOption: typeOption });
    };
    OptionsService.prototype.getById = function (id) {
        return this.http.get(this.apiUrl + "/api/options/get-by-id/" + id);
    };
    OptionsService.prototype.create = function (customField) {
        return this.http.post(this.apiUrl + "/api/options", customField);
    };
    OptionsService.prototype.update = function (customField) {
        return this.http.put(this.apiUrl + "/api/options/" + customField.id, customField);
    };
    OptionsService.prototype.delete = function (id) {
        return this.http.delete(this.apiUrl + "/api/options/" + id);
    };
    OptionsService.prototype.changeStatus = function (customField) {
        return this.http.post(this.apiUrl + "/api/options/" + customField.id + "/change-status", { status: customField.status });
    };
    OptionsService.prototype.getFormTables = function () {
        return this.http.get(this.apiUrl + "/api/options/form");
    };
    OptionsService.prototype.getOptionsByForm = function (formId) {
        return this.http.get(this.apiUrl + "/api/options/form/" + formId);
    };
    OptionsService.prototype.getOptionsDetailByForm = function (formId, isView) {
        return this.http.get(this.apiUrl + "/api/options/form/" + formId + "/1");
    };
    OptionsService.ctorParameters = function () { return [
        { type: _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClient"] }
    ]; };
    OptionsService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
            providedIn: 'root'
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClient"]])
    ], OptionsService);
    return OptionsService;
}());



/***/ }),

/***/ "./src/app/core/services/provider.service.ts":
/*!***************************************************!*\
  !*** ./src/app/core/services/provider.service.ts ***!
  \***************************************************/
/*! exports provided: ProviderService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ProviderService", function() { return ProviderService; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../environments/environment */ "./src/environments/environment.ts");




var ProviderService = /** @class */ (function () {
    function ProviderService(http) {
        this.http = http;
        this.apiUrl = _environments_environment__WEBPACK_IMPORTED_MODULE_3__["environment"].apiUrl;
    }
    ProviderService.prototype.getAll = function () {
        return this.http.get(this.apiUrl + "/api/providers");
    };
    ProviderService.prototype.getById = function (id) {
        return this.http.get(this.apiUrl + "/api/providers/" + id);
    };
    ProviderService.prototype.create = function (providers) {
        return this.http.post(this.apiUrl + "/api/providers", providers);
    };
    ProviderService.prototype.update = function (providers) {
        return this.http.put(this.apiUrl + "/api/providers/" + providers.id, providers);
    };
    ProviderService.prototype.delete = function (id) {
        return this.http.delete(this.apiUrl + "/api/providers/" + id);
    };
    ProviderService.ctorParameters = function () { return [
        { type: _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClient"] }
    ]; };
    ProviderService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
            providedIn: 'root'
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClient"]])
    ], ProviderService);
    return ProviderService;
}());



/***/ }),

/***/ "./src/app/core/services/role.service.ts":
/*!***********************************************!*\
  !*** ./src/app/core/services/role.service.ts ***!
  \***********************************************/
/*! exports provided: RoleService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "RoleService", function() { return RoleService; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../environments/environment */ "./src/environments/environment.ts");




var RoleService = /** @class */ (function () {
    function RoleService(http) {
        this.http = http;
        this.apiUrl = _environments_environment__WEBPACK_IMPORTED_MODULE_3__["environment"].apiUrl;
    }
    RoleService.prototype.getAll = function () {
        return this.http.get(this.apiUrl + "/api/roles");
    };
    RoleService.prototype.getById = function (id) {
        return this.http.get(this.apiUrl + "/api/roles/" + id);
    };
    RoleService.prototype.create = function (role) {
        return this.http.post(this.apiUrl + "/api/roles", role);
    };
    RoleService.prototype.update = function (role) {
        return this.http.put(this.apiUrl + "/api/roles/" + role.id, role);
    };
    RoleService.prototype.delete = function (id) {
        return this.http.delete(this.apiUrl + "/api/roles/" + id);
    };
    RoleService.ctorParameters = function () { return [
        { type: _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClient"] }
    ]; };
    RoleService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
            providedIn: 'root'
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClient"]])
    ], RoleService);
    return RoleService;
}());



/***/ }),

/***/ "./src/app/core/services/seo.service.ts":
/*!**********************************************!*\
  !*** ./src/app/core/services/seo.service.ts ***!
  \**********************************************/
/*! exports provided: SeoService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SeoService", function() { return SeoService; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var src_environments_environment__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! src/environments/environment */ "./src/environments/environment.ts");




var SeoService = /** @class */ (function () {
    function SeoService(http) {
        this.http = http;
        this.apiUrl = src_environments_environment__WEBPACK_IMPORTED_MODULE_3__["environment"].apiUrl;
    }
    SeoService.prototype.getAll = function () {
        return this.http.get(this.apiUrl + "/api/seo");
    };
    SeoService.prototype.getAllMeta = function () {
        return this.http.get(this.apiUrl + "/api/get-all-seo");
    };
    SeoService.prototype.getAllKeyword = function () {
        return this.http.get(this.apiUrl + "/api/get-all-keyword");
    };
    SeoService.prototype.getById = function (id) {
        return this.http.get(this.apiUrl + "/api/seo/" + id);
    };
    SeoService.prototype.create = function (seo) {
        return this.http.post(this.apiUrl + "/api/seo", seo);
    };
    SeoService.prototype.update = function (seo) {
        return this.http.put(this.apiUrl + "/api/seo/" + seo.id, seo);
    };
    SeoService.prototype.delete = function (id) {
        return this.http.delete(this.apiUrl + "/api/seo/" + id);
    };
    SeoService.ctorParameters = function () { return [
        { type: _angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpClient"] }
    ]; };
    SeoService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["Injectable"])({
            providedIn: 'root'
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpClient"]])
    ], SeoService);
    return SeoService;
}());



/***/ }),

/***/ "./src/app/core/services/task.service.ts":
/*!***********************************************!*\
  !*** ./src/app/core/services/task.service.ts ***!
  \***********************************************/
/*! exports provided: TaskService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TaskService", function() { return TaskService; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../environments/environment */ "./src/environments/environment.ts");




var TaskService = /** @class */ (function () {
    function TaskService(http) {
        this.http = http;
        this.apiUrl = _environments_environment__WEBPACK_IMPORTED_MODULE_3__["environment"].apiUrl;
    }
    TaskService.prototype.create = function (task) {
        return this.http.post(this.apiUrl + "/api/tasks", task);
    };
    TaskService.prototype.getAll = function () {
        return this.http.get(this.apiUrl + "/api/tasks");
    };
    TaskService.prototype.getById = function (id) {
        return this.http.get(this.apiUrl + "/api/tasks/" + id);
    };
    TaskService.prototype.update = function (task) {
        return this.http.put(this.apiUrl + "/api/tasks/" + task.id, task);
    };
    TaskService.prototype.delete = function (id) {
        return this.http.delete(this.apiUrl + "/api/tasks/" + id);
    };
    TaskService.prototype.getTaskActivity = function (id) {
        return this.http.get(this.apiUrl + "/api/activities/Task/" + id);
    };
    TaskService.prototype.changeStatus = function (task) {
        return this.http.post(this.apiUrl + "/api/tasks/" + task.id + "/change-status", { 'status': task.status });
    };
    TaskService.prototype.changePriority = function (task) {
        return this.http.post(this.apiUrl + "/api/tasks/" + task.id + "/change-priority", { 'priority': task.priority });
    };
    TaskService.prototype.updateNotes = function (task) {
        return this.http.put(this.apiUrl + "/api/tasks/notes/" + task.id, task);
    };
    TaskService.prototype.getGeneratedId = function () {
        return this.http.get(this.apiUrl + "/api/tasks/get-generated-id");
    };
    TaskService.prototype.getParentTask = function (id) {
        return this.http.get(this.apiUrl + "/api/tasks/" + id + "/parent-task", {});
    };
    TaskService.prototype.getsubTaskCountByParent = function (id) {
        return this.http.get(this.apiUrl + "/api/tasks/" + id + "/subtask-count-by-parent", {});
    };
    TaskService.prototype.getTaskForTaskBoard = function (params) {
        return this.http.post(this.apiUrl + "/api/taskboard", params);
    };
    TaskService.prototype.updateStatusList = function (task) {
        return this.http.post(this.apiUrl + "/api/tasks/status-list", task);
    };
    TaskService.prototype.getTaskPermission = function (id, type) {
        return this.http.get(this.apiUrl + "/api/tasks/" + id + "/permission/" + type, {});
    };
    TaskService.prototype.getCalendarTasks = function () {
        return this.http.get(this.apiUrl + "/api/tasks/calendar");
    };
    TaskService.prototype.convertSprintTaskToTask = function (task) {
        return this.http.post(this.apiUrl + "/api/tasks/convertsprinttask-to-task", task);
    };
    TaskService.ctorParameters = function () { return [
        { type: _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClient"] }
    ]; };
    TaskService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
            providedIn: 'root'
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClient"]])
    ], TaskService);
    return TaskService;
}());



/***/ }),

/***/ "./src/app/core/services/tax.service.ts":
/*!**********************************************!*\
  !*** ./src/app/core/services/tax.service.ts ***!
  \**********************************************/
/*! exports provided: TaxService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TaxService", function() { return TaxService; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../environments/environment */ "./src/environments/environment.ts");




var TaxService = /** @class */ (function () {
    function TaxService(http) {
        this.http = http;
        this.apiUrl = _environments_environment__WEBPACK_IMPORTED_MODULE_3__["environment"].apiUrl;
    }
    TaxService.prototype.getAll = function () {
        return this.http.get(this.apiUrl + "/api/taxes");
    };
    TaxService.prototype.getById = function (id) {
        return this.http.get(this.apiUrl + "/api/taxes/" + id);
    };
    TaxService.prototype.create = function (tax) {
        return this.http.post(this.apiUrl + "/api/taxes", tax);
    };
    TaxService.prototype.update = function (tax) {
        return this.http.put(this.apiUrl + "/api/taxes/" + tax.id, tax);
    };
    TaxService.prototype.delete = function (id) {
        return this.http.delete(this.apiUrl + "/api/taxes/" + id);
    };
    TaxService.ctorParameters = function () { return [
        { type: _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClient"] }
    ]; };
    TaxService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
            providedIn: 'root'
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClient"]])
    ], TaxService);
    return TaxService;
}());



/***/ }),

/***/ "./src/app/core/services/team.service.ts":
/*!***********************************************!*\
  !*** ./src/app/core/services/team.service.ts ***!
  \***********************************************/
/*! exports provided: TeamService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TeamService", function() { return TeamService; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../environments/environment */ "./src/environments/environment.ts");




var TeamService = /** @class */ (function () {
    function TeamService(http) {
        this.http = http;
        this.apiUrl = _environments_environment__WEBPACK_IMPORTED_MODULE_3__["environment"].apiUrl;
    }
    TeamService.prototype.getAll = function () {
        return this.http.get(this.apiUrl + "/api/teams");
    };
    TeamService.prototype.getById = function (id) {
        return this.http.get(this.apiUrl + "/api/teams/" + id);
    };
    TeamService.prototype.create = function (team) {
        return this.http.post(this.apiUrl + "/api/teams", team);
    };
    TeamService.prototype.update = function (team) {
        return this.http.put(this.apiUrl + "/api/teams/" + team.id, team);
    };
    TeamService.prototype.delete = function (id) {
        return this.http.delete(this.apiUrl + "/api/teams/" + id);
    };
    TeamService.prototype.getTeamForTeamBoard = function () {
        return this.http.get(this.apiUrl + "/api/teams/teamboard");
    };
    TeamService.prototype.import = function (importTeams) {
        return this.http.post(this.apiUrl + "/api/teams/import", importTeams);
    };
    TeamService.ctorParameters = function () { return [
        { type: _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClient"] }
    ]; };
    TeamService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
            providedIn: 'root'
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClient"]])
    ], TeamService);
    return TeamService;
}());



/***/ })

}]);
//# sourceMappingURL=common.js.map