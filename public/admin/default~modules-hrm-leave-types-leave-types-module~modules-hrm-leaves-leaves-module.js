(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["default~modules-hrm-leave-types-leave-types-module~modules-hrm-leaves-leaves-module"],{

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/modules/hrm/leave-types/pages/leave-types-list/leave-types-list.component.html":
/*!**************************************************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/modules/hrm/leave-types/pages/leave-types-list/leave-types-list.component.html ***!
  \**************************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<section>\r\n    <div class=\"row\">\r\n        <div class=\"col-sm-12\">\r\n            <div class=\"card pl-2 pr-2\">\r\n                <div class=\"card-header pl-0 pr-0 border-bottom\">\r\n                    <h4 class=\"main-title mb-0 mt-2\"><span>{{'leave_types.title' | translate}}</span></h4>\r\n                </div>\r\n                <div class=\"card-content pt-3 pb-3\">\r\n                    <div class=\"card-body\">\r\n                        <div class=\"row\">\r\n                            <div *ngxPermissionsOnly=\"['admin', 'super_admin', 'leavetypes_create']\" class=\"col-md-3\">\r\n                                <form (ngSubmit)=\"onSubmit()\" [formGroup]=\"createLeaveTypeForm\" class=\"form\">\r\n                                    <div class=\"row\">\r\n                                        <div class=\"col-md-12\">\r\n                                            <div class=\"form-group\">\r\n                                                <label for=\"leave_type\">{{'leave_types.create.fields.leave_type' | translate}}\r\n                                                    <span class=\"text-danger\">&nbsp;*</span></label>\r\n                                                <input [ngClass]=\"{ 'is-invalid': isSubmitted && leavetypeControl.leave_type.errors }\" class=\"form-control\" formControlName=\"leave_type\" id=\"leave_type\" placeholder=\"{{'leave_types.create.placeholders.placeholder1' | translate }}\" type=\"text\"/>\r\n                                                <div *ngIf=\"isSubmitted && leavetypeControl.leave_type.errors\" class=\"invalid-feedback\">\r\n                                                    <div *ngIf=\"leavetypeControl.leave_type.errors.required\">{{'leave_types.create.error_messages.message1' | translate}}</div>\r\n                                                    <div *ngIf=\"leavetypeControl.leave_type.errors.maxlength\">{{'leave_types.create.error_messages.message2' | translate}}</div>\r\n                                                </div>\r\n                                            </div>\r\n                                        </div>\r\n                                        <div class=\"col-md-12\">\r\n                                            <div class=\"form-group\">\r\n                                                <label for=\"no_of_leaves\">{{'leave_types.create.fields.no_of_leaves' | translate}}\r\n                                                    <span class=\"text-danger\">&nbsp;*</span></label>\r\n                                                <input [ngClass]=\"{ 'is-invalid': isSubmitted && leavetypeControl.no_of_leaves.errors }\" class=\"form-control\" formControlName=\"no_of_leaves\" id=\"no_of_leaves\" placeholder=\"{{'leave_types.create.placeholders.placeholder2' | translate }}\" type=\"text\"/>\r\n                                                <div *ngIf=\"isSubmitted && leavetypeControl.no_of_leaves.errors\" class=\"invalid-feedback\">\r\n                                                    <div *ngIf=\"leavetypeControl.no_of_leaves.errors.required\">{{'leave_types.create.error_messages.message3' | translate}}</div>\r\n                                                    <div *ngIf=\"leavetypeControl.no_of_leaves.errors.pattern\">{{'leave_types.create.error_messages.message4' | translate}}</div>\r\n                                                </div>\r\n                                            </div>\r\n                                        </div>\r\n                                        <div class=\"col-md-12\">\r\n                                            <div class=\"form-group\">\r\n                                                <label for=\"color\">{{'leave_types.create.fields.color' | translate}}\r\n                                                    <span class=\"text-danger\">&nbsp;*</span></label>\r\n                                                <div class=\"position-relative has-icon-left\">\r\n                                                    <input (colorPickerChange)=\"createLeaveTypeForm.get('color').setValue($event)\" [colorPicker]=\"createLeaveTypeForm.get('color').value\" [cpCancelButton]=\"true\" [ngClass]=\"{ 'is-invalid': isSubmitted && leavetypeControl.color.errors }\" [style.background]=\"createLeaveTypeForm.get('color').value\" [value]=\"createLeaveTypeForm.get('color').value\" class=\"form-control\" formControlName=\"color\" id=\"color\">\r\n                                                    <div class=\"form-control-position\"><i class=\"ft-droplet\"></i></div>\r\n                                                    <div *ngIf=\"isSubmitted && leavetypeControl.color.errors\" class=\"invalid-feedback\">\r\n                                                        <div *ngIf=\"leavetypeControl.color.errors.required\">{{'leave_types.create.error_messages.message5' | translate}}</div>\r\n                                                    </div>\r\n                                                </div>\r\n                                            </div>\r\n                                        </div>\r\n                                        <div class=\"col-md-12\">\r\n                                            <div class=\"form-group text-center\">\r\n                                                <button class=\"btn btn-submit mb-0\" type=\"submit\">{{'common.create' | translate}}</button>\r\n                                            </div>\r\n                                        </div>\r\n                                    </div>\r\n                                </form>\r\n                            </div>\r\n                            <div class=\"col-md-9\">\r\n                                <div class=\"table-responsive-xs table-responsive-sm table-responsive-md table-responsive-lg table-responsive-xl\">\r\n                                    <table class=\"table table-bordered table-hover b4-datatable\" width=\"100%\">\r\n                                        <thead>\r\n                                        <tr>\r\n                                            <th>#</th>\r\n                                            <th>{{'leave_types.columns.leave_type' | translate}}</th>\r\n                                            <th>{{'leave_types.columns.no_of_leaves' | translate}}</th>\r\n                                            <th>{{'leave_types.columns.color' | translate}}</th>\r\n                                            <th class=\"text-center\">{{'common.actions' | translate}}</th>\r\n                                        </tr>\r\n                                        </thead>\r\n                                        <tbody>\r\n                                        <tr *ngFor=\"let leave of leaveTypes; index as i\">\r\n                                            <td>{{ i + 1 }}</td>\r\n                                            <td>\r\n                                                <ng-container *ngxPermissionsOnly=\"['admin', 'super_admin', 'leavetypes_edit'] else elseBlock1;\">\r\n                                                    <inline-edit-input (updateValue)=\"saveLeaveTypeDetail(i, 'leave_type', $event);\" [elementFor]=\"'leave_types.inline_edit.leave_type' | translate\" [fieldValue]=\"leave.leave_type\" [isRequired]=\"'true'\" [maxLength]=\"50\" [name]=\"'leave_type'\" [type]=\"'text'\"></inline-edit-input>\r\n                                                </ng-container>\r\n                                                <ng-template #elseBlock1>{{leave.leave_type}}</ng-template>\r\n                                            </td>\r\n                                            <td>\r\n                                                <ng-container *ngxPermissionsOnly=\"['admin', 'super_admin', 'leavetypes_edit'] else elseBlock2;\">\r\n                                                    <inline-edit-input (updateValue)=\"saveLeaveTypeDetail(i, 'no_of_leaves', $event);\" [elementFor]=\"'leave_types.inline_edit.no_of_leaves' | translate\" [fieldValue]=\"leave.no_of_leaves\" [isRequired]=\"'true'\" [maxLength]=\"50\" [name]=\"'no_of_leaves'\" [type]=\"'text'\" pattern=\"^-?(0|[1-9]\\d*)?$\"></inline-edit-input>\r\n                                                </ng-container>\r\n                                                <ng-template #elseBlock2>{{leave.no_of_leaves}}</ng-template>\r\n                                            </td>\r\n                                            <td>\r\n                                                <div [ngStyle]=\"{'background-color': leave.color}\" class=\"width-30 height-30\"></div>\r\n                                            </td>\r\n                                            <td class=\"actions-dropdown\">\r\n                                                <div class=\"btn-group\" dropdown>\r\n                                                    <button aria-controls=\"dropdown-basic-1\" class=\"dropdown-toggle btn-action\" dropdownToggle id=\"button-basic-1\" type=\"button\">\r\n                                                        <i class=\"fa fa-ellipsis-v\"></i></button>\r\n                                                    <ul *dropdownMenu aria-labelledby=\"button-basic-1\" class=\"dropdown-menu animated fadeIn\" id=\"dropdown-basic-1\" role=\"menu\">\r\n                                                        <li role=\"menuitem\">\r\n                                                            <a (click)=\"deleteLeaveType(leave.id)\" *ngxPermissionsOnly=\"['admin', 'super_admin', 'leavetypes_delete']\" class=\"dropdown-item btn btn-delete btn-raised\"><i class=\"fa fa-trash-o\" tooltip=\"{{'common.delete' | translate}}\"></i></a>\r\n                                                        </li>\r\n                                                    </ul>\r\n                                                </div>\r\n                                            </td>\r\n                                        </tr>\r\n                                        </tbody>\r\n                                        <tfoot *ngIf=\"leaveTypes?.length == 0\" class=\"tfoot_dt\">\r\n                                        <tr>\r\n                                            <td class=\"text-center\" colspan=\"4\">\r\n                                                <img src=\"assets/img/norecord-img.png\" width=\"50\">\r\n                                                <p class=\"mt-1\">{{'common.datatable.sEmptyTable' | translate}}</p>\r\n                                            </td>\r\n                                        </tr>\r\n                                        </tfoot>\r\n                                    </table>\r\n                                </div>\r\n                            </div>\r\n                        </div>\r\n                    </div>\r\n                </div>\r\n            </div>\r\n        </div>\r\n    </div>\r\n</section>\r\n");

/***/ }),

/***/ "./src/app/core/services/leavetype.service.ts":
/*!****************************************************!*\
  !*** ./src/app/core/services/leavetype.service.ts ***!
  \****************************************************/
/*! exports provided: LeavetypeService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LeavetypeService", function() { return LeavetypeService; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../environments/environment */ "./src/environments/environment.ts");




var LeavetypeService = /** @class */ (function () {
    function LeavetypeService(http) {
        this.http = http;
        this.apiUrl = _environments_environment__WEBPACK_IMPORTED_MODULE_3__["environment"].apiUrl;
    }
    LeavetypeService.prototype.getAll = function () {
        return this.http.get(this.apiUrl + "/api/leave-type");
    };
    LeavetypeService.prototype.getById = function (id) {
        return this.http.get(this.apiUrl + "/api/leave-type/" + id);
    };
    LeavetypeService.prototype.create = function (leavetype) {
        return this.http.post(this.apiUrl + "/api/leave-type", leavetype);
    };
    LeavetypeService.prototype.update = function (leavetype) {
        return this.http.put(this.apiUrl + "/api/leave-type/" + leavetype.id, leavetype);
    };
    LeavetypeService.prototype.delete = function (id) {
        return this.http.delete(this.apiUrl + "/api/leave-type/" + id);
    };
    LeavetypeService.ctorParameters = function () { return [
        { type: _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClient"] }
    ]; };
    LeavetypeService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
            providedIn: 'root'
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClient"]])
    ], LeavetypeService);
    return LeavetypeService;
}());



/***/ }),

/***/ "./src/app/modules/hrm/leave-types/leave-types-routing.module.ts":
/*!***********************************************************************!*\
  !*** ./src/app/modules/hrm/leave-types/leave-types-routing.module.ts ***!
  \***********************************************************************/
/*! exports provided: LeaveTypesRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LeaveTypesRoutingModule", function() { return LeaveTypesRoutingModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var ngx_permissions__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ngx-permissions */ "./node_modules/ngx-permissions/ngx-permissions.umd.js");
/* harmony import */ var ngx_permissions__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(ngx_permissions__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _pages_leave_types_list_leave_types_list_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./pages/leave-types-list/leave-types-list.component */ "./src/app/modules/hrm/leave-types/pages/leave-types-list/leave-types-list.component.ts");





var routes = [
    {
        path: '',
        children: [
            {
                path: '',
                canActivate: [ngx_permissions__WEBPACK_IMPORTED_MODULE_3__["NgxPermissionsGuard"]],
                component: _pages_leave_types_list_leave_types_list_component__WEBPACK_IMPORTED_MODULE_4__["LeaveTypesListComponent"]
            }
        ]
    }
];
var LeaveTypesRoutingModule = /** @class */ (function () {
    function LeaveTypesRoutingModule() {
    }
    LeaveTypesRoutingModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)],
            exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]]
        })
    ], LeaveTypesRoutingModule);
    return LeaveTypesRoutingModule;
}());



/***/ }),

/***/ "./src/app/modules/hrm/leave-types/leave-types.module.ts":
/*!***************************************************************!*\
  !*** ./src/app/modules/hrm/leave-types/leave-types.module.ts ***!
  \***************************************************************/
/*! exports provided: LeaveTypesModule, HttpLoaderFactory */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LeaveTypesModule", function() { return LeaveTypesModule; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "HttpLoaderFactory", function() { return HttpLoaderFactory; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");
/* harmony import */ var ngx_bootstrap__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ngx-bootstrap */ "./node_modules/ngx-bootstrap/esm5/ngx-bootstrap.js");
/* harmony import */ var ngx_color_picker__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ngx-color-picker */ "./node_modules/ngx-color-picker/dist/ngx-color-picker.es5.js");
/* harmony import */ var ngx_permissions__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ngx-permissions */ "./node_modules/ngx-permissions/ngx-permissions.umd.js");
/* harmony import */ var ngx_permissions__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(ngx_permissions__WEBPACK_IMPORTED_MODULE_7__);
/* harmony import */ var _ngx_translate_core__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @ngx-translate/core */ "./node_modules/@ngx-translate/core/fesm5/ngx-translate-core.js");
/* harmony import */ var _ngx_translate_http_loader__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @ngx-translate/http-loader */ "./node_modules/@ngx-translate/http-loader/fesm5/ngx-translate-http-loader.js");
/* harmony import */ var _leave_types_routing_module__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./leave-types-routing.module */ "./src/app/modules/hrm/leave-types/leave-types-routing.module.ts");
/* harmony import */ var _shared_shared_module__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ../../../shared/shared.module */ "./src/app/shared/shared.module.ts");
/* harmony import */ var _pages_leave_types_list_leave_types_list_component__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ./pages/leave-types-list/leave-types-list.component */ "./src/app/modules/hrm/leave-types/pages/leave-types-list/leave-types-list.component.ts");













var LeaveTypesModule = /** @class */ (function () {
    function LeaveTypesModule() {
    }
    LeaveTypesModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            declarations: [_pages_leave_types_list_leave_types_list_component__WEBPACK_IMPORTED_MODULE_12__["LeaveTypesListComponent"]],
            imports: [
                _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
                _leave_types_routing_module__WEBPACK_IMPORTED_MODULE_10__["LeaveTypesRoutingModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_3__["ReactiveFormsModule"],
                ngx_permissions__WEBPACK_IMPORTED_MODULE_7__["NgxPermissionsModule"],
                ngx_color_picker__WEBPACK_IMPORTED_MODULE_6__["ColorPickerModule"],
                ngx_bootstrap__WEBPACK_IMPORTED_MODULE_5__["TooltipModule"].forRoot(),
                ngx_bootstrap__WEBPACK_IMPORTED_MODULE_5__["BsDropdownModule"].forRoot(),
                _ngx_translate_core__WEBPACK_IMPORTED_MODULE_8__["TranslateModule"].forChild({
                    loader: {
                        provide: _ngx_translate_core__WEBPACK_IMPORTED_MODULE_8__["TranslateLoader"],
                        useFactory: (HttpLoaderFactory),
                        deps: [_angular_common_http__WEBPACK_IMPORTED_MODULE_4__["HttpClient"]]
                    }
                }),
                _shared_shared_module__WEBPACK_IMPORTED_MODULE_11__["SharedModule"]
            ],
            exports: [
                _pages_leave_types_list_leave_types_list_component__WEBPACK_IMPORTED_MODULE_12__["LeaveTypesListComponent"]
            ]
        })
    ], LeaveTypesModule);
    return LeaveTypesModule;
}());

// Required for AOT compilation
function HttpLoaderFactory(http) {
    return new _ngx_translate_http_loader__WEBPACK_IMPORTED_MODULE_9__["TranslateHttpLoader"](http, './assets/i18n/', '.json');
}


/***/ }),

/***/ "./src/app/modules/hrm/leave-types/pages/leave-types-list/leave-types-list.component.scss":
/*!************************************************************************************************!*\
  !*** ./src/app/modules/hrm/leave-types/pages/leave-types-list/leave-types-list.component.scss ***!
  \************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL21vZHVsZXMvaHJtL2xlYXZlLXR5cGVzL3BhZ2VzL2xlYXZlLXR5cGVzLWxpc3QvbGVhdmUtdHlwZXMtbGlzdC5jb21wb25lbnQuc2NzcyJ9 */");

/***/ }),

/***/ "./src/app/modules/hrm/leave-types/pages/leave-types-list/leave-types-list.component.ts":
/*!**********************************************************************************************!*\
  !*** ./src/app/modules/hrm/leave-types/pages/leave-types-list/leave-types-list.component.ts ***!
  \**********************************************************************************************/
/*! exports provided: LeaveTypesListComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LeaveTypesListComponent", function() { return LeaveTypesListComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");
/* harmony import */ var ngx_toastr__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ngx-toastr */ "./node_modules/ngx-toastr/fesm5/ngx-toastr.js");
/* harmony import */ var _ngx_translate_core__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @ngx-translate/core */ "./node_modules/@ngx-translate/core/fesm5/ngx-translate-core.js");
/* harmony import */ var ngx_permissions__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ngx-permissions */ "./node_modules/ngx-permissions/ngx-permissions.umd.js");
/* harmony import */ var ngx_permissions__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(ngx_permissions__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var sweetalert2__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! sweetalert2 */ "./node_modules/sweetalert2/dist/sweetalert2.all.js");
/* harmony import */ var sweetalert2__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(sweetalert2__WEBPACK_IMPORTED_MODULE_7__);
/* harmony import */ var _core_services_leavetype_service__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../../../../../core/services/leavetype.service */ "./src/app/core/services/leavetype.service.ts");
/* harmony import */ var _core_services_authentication_service__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../../../../../core/services/authentication.service */ "./src/app/core/services/authentication.service.ts");










var LeaveTypesListComponent = /** @class */ (function () {
    function LeaveTypesListComponent(translate, ngxRolesService, http, toastr, formBuilder, authenticationService, leavetypeService) {
        this.translate = translate;
        this.ngxRolesService = ngxRolesService;
        this.http = http;
        this.toastr = toastr;
        this.formBuilder = formBuilder;
        this.authenticationService = authenticationService;
        this.leavetypeService = leavetypeService;
        this.leaveTypes = [];
        this.isSubmitted = false;
    }
    Object.defineProperty(LeaveTypesListComponent.prototype, "leavetypeControl", {
        get: function () {
            return this.createLeaveTypeForm.controls;
        },
        enumerable: true,
        configurable: true
    });
    LeaveTypesListComponent.prototype.ngOnInit = function () {
        this.getLeaveTypes();
        this.loadForms();
    };
    LeaveTypesListComponent.prototype.loadForms = function () {
        this.createLeaveTypeForm = this.formBuilder.group({
            leave_type: [null, [_angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required, _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].maxLength(20)]],
            no_of_leaves: [null, [_angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required, _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].pattern(/^-?(0|[1-9]\d*)?$/)]],
            color: ['#1ab394', [_angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required]]
        });
    };
    LeaveTypesListComponent.prototype.getLeaveTypes = function () {
        var _this = this;
        this.leavetypeService.getAll()
            .subscribe(function (data) {
            _this.leaveTypes = data;
        });
    };
    LeaveTypesListComponent.prototype.saveLeaveTypeDetail = function (index, name, value) {
        var _this = this;
        this.leaveTypes[index][name] = value;
        this.leavetypeService.update(this.leaveTypes[index])
            .subscribe(function (data) {
            _this.toastr.success(_this.translate.instant('leave_types.messages.update'), _this.translate.instant('leave_types.title'));
            _this.getLeaveTypes();
        });
    };
    LeaveTypesListComponent.prototype.onSubmit = function () {
        var _this = this;
        this.isSubmitted = true;
        if (this.createLeaveTypeForm.invalid) {
            return;
        }
        this.leavetypeService.create(this.createLeaveTypeForm.value).subscribe(function (data) {
            _this.toastr.success(_this.translate.instant('leave_types.messages.create'), _this.translate.instant('leave_types.title'));
            _this.getLeaveTypes();
            _this.isSubmitted = false;
            _this.createLeaveTypeForm.reset();
        });
    };
    LeaveTypesListComponent.prototype.deleteLeaveType = function (id) {
        var _this = this;
        sweetalert2__WEBPACK_IMPORTED_MODULE_7___default.a.fire({
            title: this.translate.instant('common.swal.title'),
            text: this.translate.instant('common.swal.text') + this.translate.instant('leave_types.title1'),
            type: 'warning',
            showCancelButton: true,
            confirmButtonText: this.translate.instant('common.swal.confirmButtonText'),
            cancelButtonText: this.translate.instant('common.swal.cancelButtonText')
        }).then(function (result) {
            if (result.value) {
                _this.leavetypeService.delete(id)
                    .subscribe(function (data) {
                    _this.toastr.success(_this.translate.instant('leave_types.messages.delete'), _this.translate.instant('leave_types.title'));
                    _this.getLeaveTypes();
                });
            }
        });
    };
    LeaveTypesListComponent.ctorParameters = function () { return [
        { type: _ngx_translate_core__WEBPACK_IMPORTED_MODULE_5__["TranslateService"] },
        { type: ngx_permissions__WEBPACK_IMPORTED_MODULE_6__["NgxRolesService"] },
        { type: _angular_common_http__WEBPACK_IMPORTED_MODULE_3__["HttpClient"] },
        { type: ngx_toastr__WEBPACK_IMPORTED_MODULE_4__["ToastrService"] },
        { type: _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormBuilder"] },
        { type: _core_services_authentication_service__WEBPACK_IMPORTED_MODULE_9__["AuthenticationService"] },
        { type: _core_services_leavetype_service__WEBPACK_IMPORTED_MODULE_8__["LeavetypeService"] }
    ]; };
    LeaveTypesListComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-leave-types-list',
            template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./leave-types-list.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/modules/hrm/leave-types/pages/leave-types-list/leave-types-list.component.html")).default,
            styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./leave-types-list.component.scss */ "./src/app/modules/hrm/leave-types/pages/leave-types-list/leave-types-list.component.scss")).default]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_ngx_translate_core__WEBPACK_IMPORTED_MODULE_5__["TranslateService"],
            ngx_permissions__WEBPACK_IMPORTED_MODULE_6__["NgxRolesService"],
            _angular_common_http__WEBPACK_IMPORTED_MODULE_3__["HttpClient"],
            ngx_toastr__WEBPACK_IMPORTED_MODULE_4__["ToastrService"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormBuilder"],
            _core_services_authentication_service__WEBPACK_IMPORTED_MODULE_9__["AuthenticationService"],
            _core_services_leavetype_service__WEBPACK_IMPORTED_MODULE_8__["LeavetypeService"]])
    ], LeaveTypesListComponent);
    return LeaveTypesListComponent;
}());



/***/ })

}]);
//# sourceMappingURL=default~modules-hrm-leave-types-leave-types-module~modules-hrm-leaves-leaves-module.js.map