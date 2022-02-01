(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["modules-admin-announcement-announcement-module"],{

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/modules/admin/announcement/pages/announcement-create/announcement-create.component.html":
/*!***********************************************************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/modules/admin/announcement/pages/announcement-create/announcement-create.component.html ***!
  \***********************************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<section id=\"basic-form-layouts\">\r\n    <form (ngSubmit)=\"onSubmit()\" [formGroup]=\"createAnnouncementForm\">\r\n        <div class=\"row\">\r\n            <div class=\"col-sm-12\">\r\n                <div class=\"card\">\r\n                    <div class=\"card-header\">\r\n                        <h4 class=\"card-title\" id=\"basic-layout-form\">{{'announcements.create.title1' | translate }}</h4>\r\n                    </div>\r\n                    <div class=\"card-body\">\r\n                        <div class=\"px-3\">\r\n                            <div class=\"form-body\">\r\n                                <div class=\"row\">\r\n                                    <div class=\"col-sm-6\">\r\n                                        <div class=\"form-group\">\r\n                                            <label for=\"title\">{{'announcements.create.fields.title' | translate }}\r\n                                                <span class=\"text-danger\">&nbsp;*</span></label>\r\n                                            <input [ngClass]=\"{ 'is-invalid': isFormSubmitted && announcementControl.title.errors }\" class=\"form-control\" formControlName=\"title\" id=\"title\" placeholder=\"{{'announcements.create.placeholders.placeholder1' | translate }}\" type=\"text\"/>\r\n                                            <div *ngIf=\"isFormSubmitted && announcementControl.title.errors\" class=\"invalid-feedback\">\r\n                                                <div *ngIf=\"announcementControl.title.errors.required\">{{'announcements.create.error_messages.message1' | translate }}</div>\r\n                                                <div *ngIf=\"announcementControl.title.errors.maxlength\">{{'announcements.create.error_messages.message2' | translate }}</div>\r\n                                            </div>\r\n                                        </div>\r\n                                    </div>\r\n                                    <div class=\"col-sm-3\">\r\n                                        <div class=\"form-group\">\r\n                                            <label>{{'announcements.create.fields.status' | translate }}\r\n                                                <span class=\"text-danger\">&nbsp;*</span></label><br>\r\n                                            <div class=\"form-check radio-container d-block\">\r\n                                                <input class=\"form-check-input\" formControlName=\"status\" id=\"checkbox1\" type=\"radio\" value=\"1\">\r\n                                                <label class=\"form-check-label\" for=\"checkbox1\">&nbsp;{{'announcements.create.fields.publish' | translate }}&nbsp;</label>\r\n                                                <span class=\"radio-checkmark\"></span>\r\n                                            </div>\r\n                                            <div class=\"form-check radio-container d-block\">\r\n                                                <input class=\"form-check-input\" formControlName=\"status\" id=\"checkbox2\" type=\"radio\" value=\"0\">\r\n                                                <label class=\"form-check-label\" for=\"checkbox2\">&nbsp;{{'announcements.create.fields.unpublish' | translate }}</label>\r\n                                                <span class=\"radio-checkmark\"></span>\r\n                                            </div>\r\n                                        </div>\r\n                                    </div>\r\n                                    <div class=\"col-sm-3\">\r\n                                        <div class=\"form-group\">\r\n                                            <label for=\"all_client\">{{'announcements.create.fields.all_clients' | translate }}</label>\r\n                                            <div class=\"form-check checkbox-container d-block\">\r\n                                                <input class=\"form-check-input\" formControlName=\"all_client\" id=\"all_client\" type=\"checkbox\">\r\n                                                <label></label>\r\n                                                <span class=\"checkbox-checkmark\"></span>\r\n                                            </div>\r\n                                        </div>\r\n                                    </div>\r\n                                </div>\r\n                                <div class=\"row\">\r\n                                    <div class=\"col-sm-6\">\r\n                                        <div class=\"form-group\">\r\n                                            <label for=\"start_date\">{{'announcements.create.fields.start_date' | translate }}\r\n                                                <span class=\"text-danger\">&nbsp;*</span></label>\r\n                                            <div class=\"position-relative has-icon-left\">\r\n                                                <input #dp=\"bsDatepicker\" (bsValueChange)=\"startDateChange($event)\" [bsConfig]=\"datepickerConfig\" [ngClass]=\"{ 'is-invalid': isFormSubmitted && announcementControl.start_date.errors }\" aria-describedby=\"inputGroupPrepend3\" bsDatepicker class=\"form-control\" formControlName=\"start_date\" id=\"start_date\" placeholder=\"{{'announcements.create.placeholders.placeholder2' | translate }}\" type=\"text\"/>\r\n                                                <div class=\"form-control-position\"><i class=\"ft-calendar\"></i></div>\r\n                                            </div>\r\n                                            <div *ngIf=\"isFormSubmitted && announcementControl.start_date.errors\" class=\"invalid-feedback\">\r\n                                                <div *ngIf=\"announcementControl.start_date.errors.required\">{{'announcements.create.error_messages.message3' | translate }}</div>\r\n                                            </div>\r\n                                        </div>\r\n                                    </div>\r\n                                    <div class=\"col-sm-6\">\r\n                                        <div class=\"form-group\">\r\n                                            <label for=\"end_date\">{{'announcements.create.fields.end_date' | translate }}\r\n                                                <span class=\"text-danger\">&nbsp;*</span></label>\r\n                                            <div class=\"position-relative has-icon-left\">\r\n                                                <input #dp=\"bsDatepicker\" [bsConfig]=\"datepickerConfig\" [minDate]=\"createAnnouncementForm.get('start_date').value\" [ngClass]=\"{ 'is-invalid': isFormSubmitted && announcementControl.end_date.errors }\" aria-describedby=\"inputGroupPrepend3\" bsDatepicker class=\"form-control\" formControlName=\"end_date\" id=\"end_date\" placeholder=\"{{'announcements.create.placeholders.placeholder3' | translate }}\" type=\"text\"/>\r\n                                                <div class=\"form-control-position\"><i class=\"ft-calendar\"></i></div>\r\n                                            </div>\r\n                                            <div *ngIf=\"isFormSubmitted && announcementControl.end_date.errors\" class=\"invalid-feedback\">\r\n                                                <div *ngIf=\"announcementControl.end_date.errors.required\">{{'announcements.create.error_messages.message4' | translate }}</div>\r\n                                            </div>\r\n                                        </div>\r\n                                    </div>\r\n                                </div>\r\n                                <div class=\"row\">\r\n                                    <div class=\"col-sm-12\">\r\n                                        <div class=\"form-group\">\r\n                                            <label for=\"description\">{{'announcements.create.fields.description' | translate }}</label>\r\n                                            <app-ngx-editor [placeholder]=\"''\" [spellcheck]=\"true\" formControlName=\"description\" height=\"150px\" id=\"description\" minHeight=\"100px\"></app-ngx-editor>\r\n                                        </div>\r\n                                    </div>\r\n                                </div>\r\n                                <div class=\"row\">\r\n                                    <div class=\"col-sm-12 text-right\">\r\n                                        <a [routerLink]=\"['/announcements']\" class=\"btn btn-cancel\">{{'common.cancel' | translate }}</a>\r\n                                        <button class=\"btn btn-submit\" type=\"submit\">{{'common.create' | translate }}</button>\r\n                                    </div>\r\n                                </div>\r\n                            </div>\r\n                        </div>\r\n                    </div>\r\n                </div>\r\n            </div>\r\n        </div>\r\n    </form>\r\n</section>\r\n");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/modules/admin/announcement/pages/announcement-edit/announcement-edit.component.html":
/*!*******************************************************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/modules/admin/announcement/pages/announcement-edit/announcement-edit.component.html ***!
  \*******************************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<section *ngIf=\"isPageLoaded\" id=\"basic-form-layouts\">\r\n    <form (ngSubmit)=\"onSubmit()\" [formGroup]=\"editAnnouncementForm\">\r\n        <div class=\"row\">\r\n            <div class=\"col-sm-12\">\r\n                <div class=\"card\">\r\n                    <div class=\"card-header\">\r\n                        <h4 class=\"card-title\" id=\"basic-layout-form\">{{'announcements.create.title2' | translate }}</h4>\r\n                    </div>\r\n                    <div class=\"card-body\">\r\n                        <div class=\"px-3\">\r\n                            <div class=\"form-body\">\r\n                                <div class=\"row\">\r\n                                    <div class=\"col-sm-6\">\r\n                                        <div class=\"form-group\">\r\n                                            <label for=\"title\">{{'announcements.create.fields.title' | translate }}\r\n                                                <span class=\"text-danger\">&nbsp;*</span></label>\r\n                                            <input [ngClass]=\"{ 'is-invalid': isFormSubmitted && announcementControl.title.errors }\" class=\"form-control\" formControlName=\"title\" id=\"title\" placeholder=\"{{'announcements.create.placeholders.placeholder1' | translate }}\" type=\"text\"/>\r\n                                            <div *ngIf=\"isFormSubmitted && announcementControl.title.errors\" class=\"invalid-feedback\">\r\n                                                <div *ngIf=\"announcementControl.title.errors.required\">{{'announcements.create.error_messages.message1' | translate }}</div>\r\n                                                <div *ngIf=\"announcementControl.title.errors.maxlength\">{{'announcements.create.error_messages.message2' | translate }}</div>\r\n                                            </div>\r\n                                        </div>\r\n                                    </div>\r\n                                    <div class=\"col-sm-3\">\r\n                                        <div class=\"form-group\">\r\n                                            <label>{{'announcements.create.fields.status' | translate }}\r\n                                                <span class=\"text-danger\">&nbsp;*</span></label><br>\r\n                                            <div class=\"form-check radio-container d-block\">\r\n                                                <input class=\"form-check-input\" formControlName=\"status\" id=\"checkbox1\" type=\"radio\" value=\"1\">\r\n                                                <label class=\"form-check-label\" for=\"checkbox1\">&nbsp;{{'announcements.create.fields.publish' | translate }}&nbsp;</label>\r\n                                                <span class=\"radio-checkmark\"></span>\r\n                                            </div>\r\n                                            <div class=\"form-check radio-container d-block\">\r\n                                                <input class=\"form-check-input\" formControlName=\"status\" id=\"checkbox2\" type=\"radio\" value=\"0\">\r\n                                                <label class=\"form-check-label\" for=\"checkbox2\">&nbsp;{{'announcements.create.fields.unpublish' | translate }}</label>\r\n                                                <span class=\"radio-checkmark\"></span>\r\n                                            </div>\r\n                                        </div>\r\n                                    </div>\r\n                                    <div class=\"col-sm-3\">\r\n                                        <div class=\"form-group\">\r\n                                            <label for=\"all_client\">{{'announcements.create.fields.all_clients' | translate }}</label>\r\n                                            <div class=\"form-check checkbox-container d-block\">\r\n                                                <input class=\"form-check-input\" formControlName=\"all_client\" id=\"all_client\" type=\"checkbox\">\r\n                                                <label></label>\r\n                                                <span class=\"checkbox-checkmark\"></span>\r\n                                            </div>\r\n                                        </div>\r\n                                    </div>\r\n                                </div>\r\n                                <div class=\"row\">\r\n                                    <div class=\"col-sm-6\">\r\n                                        <div class=\"form-group\">\r\n                                            <label for=\"start_date\">{{'announcements.create.fields.start_date' | translate }}\r\n                                                <span class=\"text-danger\">&nbsp;*</span></label>\r\n                                            <div class=\"position-relative has-icon-left\">\r\n                                                <input #hhhhhhh=\"bsDatepicker\" [bsConfig]=\"datepickerConfig\" [ngClass]=\"{ 'is-invalid': isFormSubmitted && announcementControl.start_date.errors }\" bsDatepicker class=\"form-control\" formControlName=\"start_date\" id=\"start_date\" placeholder=\"{{'announcements.create.placeholders.placeholder2' | translate }}\" type=\"text\"/>\r\n                                                <div class=\"form-control-position\"><i class=\"ft-calendar\"></i></div>\r\n                                            </div>\r\n                                            <div *ngIf=\"isFormSubmitted && announcementControl.start_date.errors\" class=\"invalid-feedback\">\r\n                                                <div *ngIf=\"announcementControl.start_date.errors.required\">{{'announcements.create.error_messages.message3' | translate }}</div>\r\n                                            </div>\r\n                                        </div>\r\n                                    </div>\r\n                                    <div class=\"col-sm-6\">\r\n                                        <div class=\"form-group\">\r\n                                            <label for=\"end_date\">{{'announcements.create.fields.end_date' | translate }}\r\n                                                <span class=\"text-danger\">&nbsp;*</span></label>\r\n                                            <div class=\"position-relative has-icon-left\">\r\n                                                <input #fffffff=\"bsDatepicker\" [bsConfig]=\"datepickerConfig\" [minDate]=\"editAnnouncementForm.get('start_date').value\" [ngClass]=\"{ 'is-invalid': isFormSubmitted && announcementControl.end_date.errors }\" bsDatepicker class=\"form-control\" formControlName=\"end_date\" id=\"end_date\" placeholder=\"{{'announcements.create.placeholders.placeholder3' | translate }}\" type=\"text\"/>\r\n                                                <div class=\"form-control-position\"><i class=\"ft-calendar\"></i></div>\r\n                                            </div>\r\n                                            <div *ngIf=\"isFormSubmitted && announcementControl.end_date.errors\" class=\"invalid-feedback\">\r\n                                                <div *ngIf=\"announcementControl.end_date.errors.required\">{{'announcements.create.error_messages.message4' | translate }}</div>\r\n                                            </div>\r\n                                        </div>\r\n                                    </div>\r\n                                </div>\r\n                                <div class=\"row\">\r\n                                    <div class=\"col-sm-12\">\r\n                                        <div class=\"form-group\">\r\n                                            <label for=\"description\">{{'announcements.create.fields.description' | translate }}</label>\r\n                                            <app-ngx-editor [placeholder]=\"''\" [spellcheck]=\"true\" formControlName=\"description\" height=\"150px\" id=\"description\" minHeight=\"100px\"></app-ngx-editor>\r\n                                        </div>\r\n                                    </div>\r\n                                </div>\r\n                                <div class=\"row\">\r\n                                    <div class=\"col-sm-12 text-right\">\r\n                                        <a [routerLink]=\"['/announcements']\" class=\"btn btn-cancel\">{{'common.cancel' | translate }}</a>\r\n                                        <button class=\"btn btn-submit\" type=\"submit\">{{'common.update' | translate }}</button>\r\n                                    </div>\r\n                                </div>\r\n                            </div>\r\n                        </div>\r\n                    </div>\r\n                </div>\r\n            </div>\r\n        </div>\r\n    </form>\r\n</section>\r\n");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/modules/admin/announcement/pages/announcement/announcement.component.html":
/*!*********************************************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/modules/admin/announcement/pages/announcement/announcement.component.html ***!
  \*********************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<section class=\"hide_empty_message\">\r\n    <div class=\"row\">\r\n        <div class=\"col-sm-12\">\r\n            <div class=\"card pl-2 pr-2\">\r\n                <div class=\"card-header pl-0 pr-0 border-bottom\">\r\n                    <h4 class=\"main-title mt-2\"><span>{{'announcements.title' | translate }}</span></h4>\r\n                    <a *ngxPermissionsOnly=\"['admin', 'super_admin', 'announcements_create']\" [routerLink]=\"['/announcements/create']\" class=\"btn btn-create mb-0\" tooltip=\"{{'common.create' | translate}}\"><i class=\"fa fa-plus\"></i></a>\r\n                </div>\r\n                <div class=\"card-content pt-3 pb-3\">\r\n                    <div class=\"card-body\">\r\n                        <div class=\"table-responsive-xs table-responsive-sm table-responsive-md table-responsive-lg table-responsive-xl\">\r\n                            <table [dtOptions]=\"dtOptions\" [dtTrigger]=\"dtTrigger\" class=\"table table-bordered table-hover b4-datatable\" datatable id=\"announcement_table\" width=\"100%\">\r\n                                <thead>\r\n                                <tr>\r\n                                    <th>#</th>\r\n                                    <th>{{'announcements.columns.title' | translate}}</th>\r\n                                    <th>{{'announcements.columns.creator' | translate}}</th>\r\n                                    <th>{{'announcements.columns.start_date' | translate}}</th>\r\n                                    <th>{{'announcements.columns.end_date' | translate}}</th>\r\n                                    <th>{{'announcements.columns.status' | translate}}</th>\r\n                                    <th>{{'announcements.columns.actions' | translate}}</th>\r\n                                </tr>\r\n                                </thead>\r\n                                <tbody *ngIf=\"announcements?.length != 0\">\r\n                                <tr *ngFor=\"let announcement of announcements; index as i\">\r\n                                    <td>{{i + 1}}</td>\r\n                                    <td>\r\n                                        <ng-container *ngIf=\"getCheckPermission(announcement); else elseBlock1;\">\r\n                                            <inline-edit-input (updateValue)=\"saveAnnouncementDetail(i, 'title', $event);\" [elementFor]=\"'announcements.columns.title' | translate\" [fieldValue]=\"announcement.title\" [isRequired]=\"'true'\" [maxLength]=\"100\" [name]=\"'title'\" [type]=\"'text'\"></inline-edit-input>\r\n                                        </ng-container>\r\n                                        <ng-template #elseBlock1>{{announcement.title}}</ng-template>\r\n                                    </td>\r\n                                    <td class=\"people-lists\">\r\n                                        <a [routerLink]=\"['/users/profile', announcement.user_id]\" class=\"btn btn-profile-info rounded-circle text-dark\" placement=\"top\" tooltip=\"{{announcement.firstname}} {{announcement.lastname}}\">\r\n                                            <img *ngIf=\"announcement.avatar\" alt=\"Profile\" class=\"img-sm rounded-circle\" src=\"{{apiUrl}}/uploads/profile/{{announcement.avatar}}\"/>\r\n                                            <img *ngIf=\"!announcement.avatar\" alt=\"Profile\" class=\"img-sm rounded-circle\" src=\"../assets/img/profile_small.jpg\"/>\r\n                                        </a>\r\n                                    </td>\r\n                                    <td>{{announcement.start_date | dateTimeFormatFilter: loginUser.settings.date_format}}</td>\r\n                                    <td>{{announcement.end_date | dateTimeFormatFilter: loginUser.settings.date_format }}</td>\r\n                                    <td class=\"budges-status\">\r\n                                        <span *ngIf=\"announcement.status == 0\" class=\"waiting\">{{'common.status.unpublished' | translate}}</span>\r\n                                        <span *ngIf=\"announcement.status != 0\" class=\"completed\">{{'common.status.published' | translate}}</span>\r\n                                    </td>\r\n                                    <td class=\"actions-dropdown\">\r\n                                        <div *ngIf=\"getCheckPermission(announcement)\" class=\"btn-group\" dropdown>\r\n                                            <button aria-controls=\"dropdown-basic-1\" class=\"dropdown-toggle btn-action\" dropdownToggle id=\"button-basic-1\" type=\"button\">\r\n                                                <i class=\"fa fa-ellipsis-v\"></i></button>\r\n                                            <ul *dropdownMenu aria-labelledby=\"button-basic-1\" class=\"dropdown-menu animated fadeIn\" id=\"dropdown-basic-1\" role=\"menu\">\r\n                                                <li role=\"menuitem\">\r\n                                                    <a [routerLink]=\"['edit', announcement.id]\" class=\"dropdown-item btn btn-edit btn-raised\" tooltip=\"{{'common.edit' | translate}}\"><i class=\"fa fa-pencil-square-o\"></i></a>\r\n                                                </li>\r\n                                                <li role=\"menuitem\">\r\n                                                    <a (click)=\"deleteAnnouncement(announcement.id)\" class=\"dropdown-item btn btn-delete btn-raised\" tooltip=\"{{'common.delete' | translate}}\"><i class=\"fa fa-trash-o\"></i></a>\r\n                                                </li>\r\n                                            </ul>\r\n                                        </div>\r\n                                    </td>\r\n                                </tr>\r\n                                </tbody>\r\n                                <tfoot *ngIf=\"announcements?.length == 0\" class=\"tfoot_dt\">\r\n                                <tr>\r\n                                    <td class=\"no-data-available text-center\" colspan=\"7\">{{'common.datatable.sEmptyTable' | translate}}</td>\r\n                                </tr>\r\n                                </tfoot>\r\n                            </table>\r\n                        </div>\r\n                    </div>\r\n                </div>\r\n            </div>\r\n        </div>\r\n    </div>\r\n</section>\r\n");

/***/ }),

/***/ "./src/app/core/services/announcement.service.ts":
/*!*******************************************************!*\
  !*** ./src/app/core/services/announcement.service.ts ***!
  \*******************************************************/
/*! exports provided: AnnouncementService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AnnouncementService", function() { return AnnouncementService; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../environments/environment */ "./src/environments/environment.ts");




var AnnouncementService = /** @class */ (function () {
    function AnnouncementService(http) {
        this.http = http;
        this.apiUrl = _environments_environment__WEBPACK_IMPORTED_MODULE_3__["environment"].apiUrl;
    }
    AnnouncementService.prototype.getAll = function () {
        return this.http.get(this.apiUrl + "/api/announcements");
    };
    AnnouncementService.prototype.getById = function (id) {
        return this.http.get(this.apiUrl + "/api/announcements/" + id);
    };
    AnnouncementService.prototype.create = function (announcement) {
        return this.http.post(this.apiUrl + "/api/announcements", announcement);
    };
    AnnouncementService.prototype.update = function (announcement) {
        return this.http.put(this.apiUrl + "/api/announcements/" + announcement.id, announcement);
    };
    AnnouncementService.prototype.delete = function (id) {
        return this.http.delete(this.apiUrl + "/api/announcements/" + id);
    };
    AnnouncementService.ctorParameters = function () { return [
        { type: _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClient"] }
    ]; };
    AnnouncementService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
            providedIn: 'root'
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClient"]])
    ], AnnouncementService);
    return AnnouncementService;
}());



/***/ }),

/***/ "./src/app/modules/admin/announcement/announcement-routing.module.ts":
/*!***************************************************************************!*\
  !*** ./src/app/modules/admin/announcement/announcement-routing.module.ts ***!
  \***************************************************************************/
/*! exports provided: AnnouncementRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AnnouncementRoutingModule", function() { return AnnouncementRoutingModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var ngx_permissions__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ngx-permissions */ "./node_modules/ngx-permissions/ngx-permissions.umd.js");
/* harmony import */ var ngx_permissions__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(ngx_permissions__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _pages_announcement_announcement_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./pages/announcement/announcement.component */ "./src/app/modules/admin/announcement/pages/announcement/announcement.component.ts");
/* harmony import */ var _pages_announcement_create_announcement_create_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./pages/announcement-create/announcement-create.component */ "./src/app/modules/admin/announcement/pages/announcement-create/announcement-create.component.ts");
/* harmony import */ var _pages_announcement_edit_announcement_edit_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./pages/announcement-edit/announcement-edit.component */ "./src/app/modules/admin/announcement/pages/announcement-edit/announcement-edit.component.ts");







var routes = [
    {
        path: '',
        children: [
            {
                path: '',
                component: _pages_announcement_announcement_component__WEBPACK_IMPORTED_MODULE_4__["AnnouncementComponent"]
            },
            {
                path: 'create',
                canActivate: [ngx_permissions__WEBPACK_IMPORTED_MODULE_3__["NgxPermissionsGuard"]],
                data: {
                    breadcrumbs: {
                        text: 'common.create',
                        icon: 'fa fa-bullhorn',
                        show: true,
                        isHome: true
                    },
                    permissions: {
                        only: ['admin', 'super_admin', 'announcements_create']
                    }
                },
                component: _pages_announcement_create_announcement_create_component__WEBPACK_IMPORTED_MODULE_5__["AnnouncementCreateComponent"]
            },
            {
                path: 'edit/:id',
                canActivate: [ngx_permissions__WEBPACK_IMPORTED_MODULE_3__["NgxPermissionsGuard"]],
                data: {
                    breadcrumbs: {
                        text: 'common.edit',
                        icon: 'fa fa-bullhorn',
                        show: true,
                        isHome: true
                    },
                    permissions: {
                        only: ['admin', 'super_admin', 'announcements_edit']
                    }
                },
                component: _pages_announcement_edit_announcement_edit_component__WEBPACK_IMPORTED_MODULE_6__["AnnouncementEditComponent"]
            }
        ]
    }
];
var AnnouncementRoutingModule = /** @class */ (function () {
    function AnnouncementRoutingModule() {
    }
    AnnouncementRoutingModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)],
            exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]]
        })
    ], AnnouncementRoutingModule);
    return AnnouncementRoutingModule;
}());



/***/ }),

/***/ "./src/app/modules/admin/announcement/announcement.module.ts":
/*!*******************************************************************!*\
  !*** ./src/app/modules/admin/announcement/announcement.module.ts ***!
  \*******************************************************************/
/*! exports provided: AnnouncementModule, HttpLoaderFactory */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AnnouncementModule", function() { return AnnouncementModule; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "HttpLoaderFactory", function() { return HttpLoaderFactory; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var ngx_bootstrap__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ngx-bootstrap */ "./node_modules/ngx-bootstrap/esm5/ngx-bootstrap.js");
/* harmony import */ var ngx_export_as__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ngx-export-as */ "./node_modules/ngx-export-as/fesm2015/ngx-export-as.js");
/* harmony import */ var ngx_editor__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ngx-editor */ "./node_modules/ngx-editor/fesm5/ngx-editor.js");
/* harmony import */ var ngx_permissions__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ngx-permissions */ "./node_modules/ngx-permissions/ngx-permissions.umd.js");
/* harmony import */ var ngx_permissions__WEBPACK_IMPORTED_MODULE_8___default = /*#__PURE__*/__webpack_require__.n(ngx_permissions__WEBPACK_IMPORTED_MODULE_8__);
/* harmony import */ var _ngx_translate_core__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @ngx-translate/core */ "./node_modules/@ngx-translate/core/fesm5/ngx-translate-core.js");
/* harmony import */ var _ngx_translate_http_loader__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @ngx-translate/http-loader */ "./node_modules/@ngx-translate/http-loader/fesm5/ngx-translate-http-loader.js");
/* harmony import */ var angular_datatables__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! angular-datatables */ "./node_modules/angular-datatables/index.js");
/* harmony import */ var _shared_shared_module__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ../../../shared/shared.module */ "./src/app/shared/shared.module.ts");
/* harmony import */ var _announcement_routing_module__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ./announcement-routing.module */ "./src/app/modules/admin/announcement/announcement-routing.module.ts");
/* harmony import */ var _pages_announcement_announcement_component__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ./pages/announcement/announcement.component */ "./src/app/modules/admin/announcement/pages/announcement/announcement.component.ts");
/* harmony import */ var _pages_announcement_create_announcement_create_component__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! ./pages/announcement-create/announcement-create.component */ "./src/app/modules/admin/announcement/pages/announcement-create/announcement-create.component.ts");
/* harmony import */ var _pages_announcement_edit_announcement_edit_component__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! ./pages/announcement-edit/announcement-edit.component */ "./src/app/modules/admin/announcement/pages/announcement-edit/announcement-edit.component.ts");

















var AnnouncementModule = /** @class */ (function () {
    function AnnouncementModule() {
    }
    AnnouncementModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            declarations: [
                _pages_announcement_announcement_component__WEBPACK_IMPORTED_MODULE_14__["AnnouncementComponent"],
                _pages_announcement_create_announcement_create_component__WEBPACK_IMPORTED_MODULE_15__["AnnouncementCreateComponent"],
                _pages_announcement_edit_announcement_edit_component__WEBPACK_IMPORTED_MODULE_16__["AnnouncementEditComponent"]
            ],
            imports: [
                _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
                _announcement_routing_module__WEBPACK_IMPORTED_MODULE_13__["AnnouncementRoutingModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_4__["FormsModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_4__["ReactiveFormsModule"],
                angular_datatables__WEBPACK_IMPORTED_MODULE_11__["DataTablesModule"],
                ngx_export_as__WEBPACK_IMPORTED_MODULE_6__["ExportAsModule"],
                ngx_editor__WEBPACK_IMPORTED_MODULE_7__["NgxEditorModule"],
                ngx_permissions__WEBPACK_IMPORTED_MODULE_8__["NgxPermissionsModule"],
                ngx_bootstrap__WEBPACK_IMPORTED_MODULE_5__["TooltipModule"].forRoot(),
                ngx_bootstrap__WEBPACK_IMPORTED_MODULE_5__["DatepickerModule"].forRoot(),
                ngx_bootstrap__WEBPACK_IMPORTED_MODULE_5__["BsDatepickerModule"].forRoot(),
                ngx_bootstrap__WEBPACK_IMPORTED_MODULE_5__["BsDropdownModule"].forRoot(),
                _ngx_translate_core__WEBPACK_IMPORTED_MODULE_9__["TranslateModule"].forChild({
                    loader: {
                        provide: _ngx_translate_core__WEBPACK_IMPORTED_MODULE_9__["TranslateLoader"],
                        useFactory: (HttpLoaderFactory),
                        deps: [_angular_common_http__WEBPACK_IMPORTED_MODULE_3__["HttpClient"]]
                    }
                }),
                _shared_shared_module__WEBPACK_IMPORTED_MODULE_12__["SharedModule"]
            ]
        })
    ], AnnouncementModule);
    return AnnouncementModule;
}());

// Required for AOT compilation
function HttpLoaderFactory(http) {
    return new _ngx_translate_http_loader__WEBPACK_IMPORTED_MODULE_10__["TranslateHttpLoader"](http, './assets/i18n/', '.json');
}


/***/ }),

/***/ "./src/app/modules/admin/announcement/pages/announcement-create/announcement-create.component.scss":
/*!*********************************************************************************************************!*\
  !*** ./src/app/modules/admin/announcement/pages/announcement-create/announcement-create.component.scss ***!
  \*********************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL21vZHVsZXMvYWRtaW4vYW5ub3VuY2VtZW50L3BhZ2VzL2Fubm91bmNlbWVudC1jcmVhdGUvYW5ub3VuY2VtZW50LWNyZWF0ZS5jb21wb25lbnQuc2NzcyJ9 */");

/***/ }),

/***/ "./src/app/modules/admin/announcement/pages/announcement-create/announcement-create.component.ts":
/*!*******************************************************************************************************!*\
  !*** ./src/app/modules/admin/announcement/pages/announcement-create/announcement-create.component.ts ***!
  \*******************************************************************************************************/
/*! exports provided: AnnouncementCreateComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AnnouncementCreateComponent", function() { return AnnouncementCreateComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var ngx_toastr__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ngx-toastr */ "./node_modules/ngx-toastr/fesm5/ngx-toastr.js");
/* harmony import */ var _ngx_translate_core__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @ngx-translate/core */ "./node_modules/@ngx-translate/core/fesm5/ngx-translate-core.js");
/* harmony import */ var _core_services_announcement_service__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../../../../../core/services/announcement.service */ "./src/app/core/services/announcement.service.ts");








var AnnouncementCreateComponent = /** @class */ (function () {
    function AnnouncementCreateComponent(translate, datePipe, router, formBuilder, toastr, announcementService) {
        this.translate = translate;
        this.datePipe = datePipe;
        this.router = router;
        this.formBuilder = formBuilder;
        this.toastr = toastr;
        this.announcementService = announcementService;
        this.isFormSubmitted = false;
        this.datepickerConfig = {
            dateInputFormat: 'YYYY-MM-DD',
            containerClass: 'theme-red'
        };
    }
    Object.defineProperty(AnnouncementCreateComponent.prototype, "announcementControl", {
        get: function () {
            return this.createAnnouncementForm.controls;
        },
        enumerable: true,
        configurable: true
    });
    AnnouncementCreateComponent.prototype.ngOnInit = function () {
        this.loadForms();
    };
    AnnouncementCreateComponent.prototype.loadForms = function () {
        this.createAnnouncementForm = this.formBuilder.group({
            title: [null, [_angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].required, _angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].maxLength(100)]],
            start_date: [new Date(), _angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].required],
            end_date: [new Date(), _angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].required],
            status: ['1', _angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].required],
            all_client: [false],
            description: [''],
        });
    };
    AnnouncementCreateComponent.prototype.startDateChange = function (event) {
        this.createAnnouncementForm.patchValue({ end_date: event });
    };
    AnnouncementCreateComponent.prototype.onSubmit = function () {
        var _this = this;
        this.isFormSubmitted = true;
        if (this.createAnnouncementForm.invalid) {
            return;
        }
        if (this.createAnnouncementForm.value.start_date instanceof Date) {
            this.createAnnouncementForm.value.start_date = this.datePipe.transform(this.createAnnouncementForm.value.start_date, 'yyyy-MM-dd h:mm:ss a');
        }
        if (this.createAnnouncementForm.value.end_date instanceof Date) {
            this.createAnnouncementForm.value.end_date = this.datePipe.transform(this.createAnnouncementForm.value.end_date, 'yyyy-MM-dd h:mm:ss a');
        }
        this.announcementService.create(this.createAnnouncementForm.value)
            .subscribe(function (data) {
            _this.toastr.success(_this.translate.instant('announcements.messages.create'), _this.translate.instant('announcements.title'));
            _this.router.navigate(['announcements']);
        });
    };
    AnnouncementCreateComponent.ctorParameters = function () { return [
        { type: _ngx_translate_core__WEBPACK_IMPORTED_MODULE_6__["TranslateService"] },
        { type: _angular_common__WEBPACK_IMPORTED_MODULE_2__["DatePipe"] },
        { type: _angular_router__WEBPACK_IMPORTED_MODULE_4__["Router"] },
        { type: _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormBuilder"] },
        { type: ngx_toastr__WEBPACK_IMPORTED_MODULE_5__["ToastrService"] },
        { type: _core_services_announcement_service__WEBPACK_IMPORTED_MODULE_7__["AnnouncementService"] }
    ]; };
    AnnouncementCreateComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-announcement-create',
            template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./announcement-create.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/modules/admin/announcement/pages/announcement-create/announcement-create.component.html")).default,
            providers: [_angular_common__WEBPACK_IMPORTED_MODULE_2__["DatePipe"]],
            styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./announcement-create.component.scss */ "./src/app/modules/admin/announcement/pages/announcement-create/announcement-create.component.scss")).default]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_ngx_translate_core__WEBPACK_IMPORTED_MODULE_6__["TranslateService"],
            _angular_common__WEBPACK_IMPORTED_MODULE_2__["DatePipe"],
            _angular_router__WEBPACK_IMPORTED_MODULE_4__["Router"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormBuilder"],
            ngx_toastr__WEBPACK_IMPORTED_MODULE_5__["ToastrService"],
            _core_services_announcement_service__WEBPACK_IMPORTED_MODULE_7__["AnnouncementService"]])
    ], AnnouncementCreateComponent);
    return AnnouncementCreateComponent;
}());



/***/ }),

/***/ "./src/app/modules/admin/announcement/pages/announcement-edit/announcement-edit.component.scss":
/*!*****************************************************************************************************!*\
  !*** ./src/app/modules/admin/announcement/pages/announcement-edit/announcement-edit.component.scss ***!
  \*****************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL21vZHVsZXMvYWRtaW4vYW5ub3VuY2VtZW50L3BhZ2VzL2Fubm91bmNlbWVudC1lZGl0L2Fubm91bmNlbWVudC1lZGl0LmNvbXBvbmVudC5zY3NzIn0= */");

/***/ }),

/***/ "./src/app/modules/admin/announcement/pages/announcement-edit/announcement-edit.component.ts":
/*!***************************************************************************************************!*\
  !*** ./src/app/modules/admin/announcement/pages/announcement-edit/announcement-edit.component.ts ***!
  \***************************************************************************************************/
/*! exports provided: AnnouncementEditComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AnnouncementEditComponent", function() { return AnnouncementEditComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var ngx_toastr__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ngx-toastr */ "./node_modules/ngx-toastr/fesm5/ngx-toastr.js");
/* harmony import */ var _ngx_translate_core__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @ngx-translate/core */ "./node_modules/@ngx-translate/core/fesm5/ngx-translate-core.js");
/* harmony import */ var _core_services_announcement_service__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../../../../../core/services/announcement.service */ "./src/app/core/services/announcement.service.ts");








var AnnouncementEditComponent = /** @class */ (function () {
    function AnnouncementEditComponent(translate, datePipe, route, router, formBuilder, toastr, announcementService) {
        var _this = this;
        this.translate = translate;
        this.datePipe = datePipe;
        this.route = route;
        this.router = router;
        this.formBuilder = formBuilder;
        this.toastr = toastr;
        this.announcementService = announcementService;
        this.isFormSubmitted = false;
        this.isPageLoaded = false;
        this.loadDatepicker = false;
        this.datepickerConfig = {
            dateInputFormat: 'YYYY-MM-DD',
            containerClass: 'theme-red'
        };
        this.route.paramMap.subscribe(function (params) {
            _this.getAnnouncementById(params.get('id'));
        });
    }
    Object.defineProperty(AnnouncementEditComponent.prototype, "announcementControl", {
        get: function () {
            return this.editAnnouncementForm.controls;
        },
        enumerable: true,
        configurable: true
    });
    AnnouncementEditComponent.prototype.ngOnInit = function () {
    };
    AnnouncementEditComponent.prototype.getAnnouncementById = function (id) {
        var _this = this;
        this.announcementService.getById(id)
            .subscribe(function (data) {
            _this.announcementData = data;
            _this.loadForms();
        });
    };
    AnnouncementEditComponent.prototype.loadForms = function () {
        if (this.announcementData.status == 1) {
            this.announcementData.status = '1';
        }
        else {
            this.announcementData.status = '0';
        }
        if (this.announcementData.all_client == 0) {
            this.announcementData.all_client = false;
        }
        else {
            this.announcementData.all_client = true;
        }
        this.editAnnouncementForm = this.formBuilder.group({
            id: [this.announcementData.id],
            title: [this.announcementData.title, [_angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].required, _angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].maxLength(100)]],
            start_date: [new Date(this.announcementData.start_date), _angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].required],
            end_date: [new Date(this.announcementData.end_date), _angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].required],
            status: [this.announcementData.status, _angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].required],
            all_client: [this.announcementData.all_client],
            description: [this.announcementData.description],
        });
        this.isPageLoaded = true;
    };
    AnnouncementEditComponent.prototype.startDateChange = function (event) {
        this.editAnnouncementForm.patchValue({ end_date: event });
    };
    AnnouncementEditComponent.prototype.onSubmit = function () {
        var _this = this;
        this.isFormSubmitted = true;
        if (this.editAnnouncementForm.invalid) {
            return;
        }
        if (this.editAnnouncementForm.value.start_date instanceof Date) {
            this.editAnnouncementForm.value.start_date = this.datePipe.transform(this.editAnnouncementForm.value.start_date, 'yyyy-MM-dd h:mm:ss a');
        }
        if (this.editAnnouncementForm.value.end_date instanceof Date) {
            this.editAnnouncementForm.value.end_date = this.datePipe.transform(this.editAnnouncementForm.value.end_date, 'yyyy-MM-dd h:mm:ss a');
        }
        this.announcementService.update(this.editAnnouncementForm.value)
            .subscribe(function (data) {
            _this.toastr.success(_this.translate.instant('announcements.messages.update'), _this.translate.instant('announcements.title'));
            _this.router.navigate(['announcements']);
        });
    };
    AnnouncementEditComponent.ctorParameters = function () { return [
        { type: _ngx_translate_core__WEBPACK_IMPORTED_MODULE_6__["TranslateService"] },
        { type: _angular_common__WEBPACK_IMPORTED_MODULE_2__["DatePipe"] },
        { type: _angular_router__WEBPACK_IMPORTED_MODULE_4__["ActivatedRoute"] },
        { type: _angular_router__WEBPACK_IMPORTED_MODULE_4__["Router"] },
        { type: _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormBuilder"] },
        { type: ngx_toastr__WEBPACK_IMPORTED_MODULE_5__["ToastrService"] },
        { type: _core_services_announcement_service__WEBPACK_IMPORTED_MODULE_7__["AnnouncementService"] }
    ]; };
    AnnouncementEditComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-announcement-edit',
            template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./announcement-edit.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/modules/admin/announcement/pages/announcement-edit/announcement-edit.component.html")).default,
            providers: [_angular_common__WEBPACK_IMPORTED_MODULE_2__["DatePipe"]],
            styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./announcement-edit.component.scss */ "./src/app/modules/admin/announcement/pages/announcement-edit/announcement-edit.component.scss")).default]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_ngx_translate_core__WEBPACK_IMPORTED_MODULE_6__["TranslateService"],
            _angular_common__WEBPACK_IMPORTED_MODULE_2__["DatePipe"],
            _angular_router__WEBPACK_IMPORTED_MODULE_4__["ActivatedRoute"],
            _angular_router__WEBPACK_IMPORTED_MODULE_4__["Router"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormBuilder"],
            ngx_toastr__WEBPACK_IMPORTED_MODULE_5__["ToastrService"],
            _core_services_announcement_service__WEBPACK_IMPORTED_MODULE_7__["AnnouncementService"]])
    ], AnnouncementEditComponent);
    return AnnouncementEditComponent;
}());



/***/ }),

/***/ "./src/app/modules/admin/announcement/pages/announcement/announcement.component.scss":
/*!*******************************************************************************************!*\
  !*** ./src/app/modules/admin/announcement/pages/announcement/announcement.component.scss ***!
  \*******************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = (".hide_empty_message ::ng-deep .odd {\n  display: none;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvbW9kdWxlcy9hZG1pbi9hbm5vdW5jZW1lbnQvcGFnZXMvYW5ub3VuY2VtZW50L0M6XFxVc2Vyc1xcdGh1YW5cXE9uZURyaXZlXFxEZXNrdG9wXFxnbGF2YWwtdGh1YW5kaW5oL3NyY1xcYXBwXFxtb2R1bGVzXFxhZG1pblxcYW5ub3VuY2VtZW50XFxwYWdlc1xcYW5ub3VuY2VtZW50XFxhbm5vdW5jZW1lbnQuY29tcG9uZW50LnNjc3MiLCJzcmMvYXBwL21vZHVsZXMvYWRtaW4vYW5ub3VuY2VtZW50L3BhZ2VzL2Fubm91bmNlbWVudC9hbm5vdW5jZW1lbnQuY29tcG9uZW50LnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDSSxhQUFBO0FDQ0oiLCJmaWxlIjoic3JjL2FwcC9tb2R1bGVzL2FkbWluL2Fubm91bmNlbWVudC9wYWdlcy9hbm5vdW5jZW1lbnQvYW5ub3VuY2VtZW50LmNvbXBvbmVudC5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLmhpZGVfZW1wdHlfbWVzc2FnZSA6Om5nLWRlZXAgLm9kZCB7XHJcbiAgICBkaXNwbGF5OiBub25lXHJcbn0iLCIuaGlkZV9lbXB0eV9tZXNzYWdlIDo6bmctZGVlcCAub2RkIHtcbiAgZGlzcGxheTogbm9uZTtcbn0iXX0= */");

/***/ }),

/***/ "./src/app/modules/admin/announcement/pages/announcement/announcement.component.ts":
/*!*****************************************************************************************!*\
  !*** ./src/app/modules/admin/announcement/pages/announcement/announcement.component.ts ***!
  \*****************************************************************************************/
/*! exports provided: AnnouncementComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AnnouncementComponent", function() { return AnnouncementComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");
/* harmony import */ var angular_datatables__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! angular-datatables */ "./node_modules/angular-datatables/index.js");
/* harmony import */ var ngx_export_as__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ngx-export-as */ "./node_modules/ngx-export-as/fesm2015/ngx-export-as.js");
/* harmony import */ var ngx_toastr__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ngx-toastr */ "./node_modules/ngx-toastr/fesm5/ngx-toastr.js");
/* harmony import */ var ngx_permissions__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ngx-permissions */ "./node_modules/ngx-permissions/ngx-permissions.umd.js");
/* harmony import */ var ngx_permissions__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(ngx_permissions__WEBPACK_IMPORTED_MODULE_7__);
/* harmony import */ var _ngx_translate_core__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @ngx-translate/core */ "./node_modules/@ngx-translate/core/fesm5/ngx-translate-core.js");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! rxjs */ "./node_modules/rxjs/_esm5/index.js");
/* harmony import */ var sweetalert2__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! sweetalert2 */ "./node_modules/sweetalert2/dist/sweetalert2.all.js");
/* harmony import */ var sweetalert2__WEBPACK_IMPORTED_MODULE_10___default = /*#__PURE__*/__webpack_require__.n(sweetalert2__WEBPACK_IMPORTED_MODULE_10__);
/* harmony import */ var _core_services_announcement_service__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ../../../../../core/services/announcement.service */ "./src/app/core/services/announcement.service.ts");
/* harmony import */ var _core_services_authentication_service__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ../../../../../core/services/authentication.service */ "./src/app/core/services/authentication.service.ts");
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ../../../../../../environments/environment */ "./src/environments/environment.ts");
/* harmony import */ var datatables_net__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! datatables.net */ "./node_modules/datatables.net/js/jquery.dataTables.js");
/* harmony import */ var datatables_net__WEBPACK_IMPORTED_MODULE_14___default = /*#__PURE__*/__webpack_require__.n(datatables_net__WEBPACK_IMPORTED_MODULE_14__);
/* harmony import */ var datatables_net_bs4__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! datatables.net-bs4 */ "./node_modules/datatables.net-bs4/js/dataTables.bootstrap4.js");
/* harmony import */ var datatables_net_bs4__WEBPACK_IMPORTED_MODULE_15___default = /*#__PURE__*/__webpack_require__.n(datatables_net_bs4__WEBPACK_IMPORTED_MODULE_15__);
















var AnnouncementComponent = /** @class */ (function () {
    function AnnouncementComponent(translate, ngxRolesService, datePipe, http, exportAsService, toastr, announcementService, authenticationService) {
        var _this = this;
        this.translate = translate;
        this.ngxRolesService = ngxRolesService;
        this.datePipe = datePipe;
        this.http = http;
        this.exportAsService = exportAsService;
        this.toastr = toastr;
        this.announcementService = announcementService;
        this.authenticationService = authenticationService;
        this.dtTrigger = new rxjs__WEBPACK_IMPORTED_MODULE_9__["Subject"]();
        this.dtOptions = {};
        this.announcements = [];
        this.exportAsConfig = {
            type: 'pdf',
            elementIdOrContent: 'announcement_table',
        };
        this.apiUrl = _environments_environment__WEBPACK_IMPORTED_MODULE_13__["environment"].apiUrl;
        this.authenticationService.loginUser.subscribe(function (x) { return _this.loginUser = x; });
    }
    AnnouncementComponent.prototype.ngOnInit = function () {
        this.loadAnnouncementDatatable();
    };
    AnnouncementComponent.prototype.getCheckPermission = function (annoucement) {
        var role = this.ngxRolesService.getRole('admin');
        if ((role && role.name == 'admin') || this.loginUser.is_super_admin) {
            return true;
        }
        else if (this.loginUser.id == annoucement.user_id) {
            return true;
        }
        else {
            return false;
        }
    };
    AnnouncementComponent.prototype.loadAnnouncementDatatable = function () {
        var _this = this;
        var that = this;
        this.dtOptions = {
            pagingType: 'full_numbers',
            pageLength: that.loginUser.settings.tables_pagination_limit,
            serverSide: true,
            processing: true,
            dom: '<"html5buttons"B>ltfrtip',
            columns: [
                {
                    'sortable': false,
                    'width': '1%',
                    'target': [0]
                },
                {
                    'sortable': true,
                    'width': '50%',
                    'target': [1]
                },
                {
                    'sortable': true,
                    'width': '18%',
                    'target': [2]
                },
                {
                    'sortable': true,
                    'width': '18%',
                    'target': [3]
                },
                {
                    'sortable': true,
                    'width': '18%',
                    'target': [4]
                },
                {
                    'sortable': true,
                    'width': '10%',
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
                    title: this.translate.instant('announcements.title'),
                    className: 'btn btn-datatable-gredient',
                    action: function (e, dt, node, config) {
                        that.exportFiles('csv');
                    }
                }, {
                    extend: 'excel',
                    title: this.translate.instant('announcements.title'),
                    className: 'btn btn-datatable-gredient',
                    action: function (e, dt, node, config) {
                        that.exportFiles('xlsx');
                    }
                }, {
                    extend: 'pdf',
                    title: this.translate.instant('announcements.title'),
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
                    .post(_this.apiUrl + '/api/all-announcements', dataTablesParameters, {})
                    .subscribe(function (resp) {
                    if (resp) {
                        _this.announcements = resp.data;
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
    AnnouncementComponent.prototype.exportFiles = function (type) {
        this.exportAsConfig.type = type;
        this.exportAsService.save(this.exportAsConfig, this.translate.instant('announcements.title')).subscribe(function () {
        });
    };
    AnnouncementComponent.prototype.ngAfterViewInit = function () {
        this.dtTrigger.next();
    };
    AnnouncementComponent.prototype.ngOnDestroy = function () {
        this.dtTrigger.unsubscribe();
    };
    AnnouncementComponent.prototype.rerender = function () {
        var _this = this;
        this.dtElement.dtInstance.then(function (dtInstance) {
            dtInstance.destroy();
            setTimeout(function () {
                _this.dtTrigger.next();
                if (_this.announcements.length > 0) {
                    $('.tfoot_dt').addClass('d-none');
                }
                else {
                    $('.tfoot_dt').removeClass('d-none');
                }
            });
        });
    };
    AnnouncementComponent.prototype.deleteAnnouncement = function (id) {
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
                _this.announcementService.delete(id)
                    .subscribe(function (data) {
                    _this.toastr.success(_this.translate.instant('announcements.messages.delete'), _this.translate.instant('announcements.title'));
                    _this.rerender();
                });
            }
        });
    };
    AnnouncementComponent.prototype.saveAnnouncementDetail = function (index, name, value) {
        var _this = this;
        if (value instanceof Date) {
            value = this.datePipe.transform(value, 'yyyy-MM-dd h:mm:ss a');
        }
        this.announcements[index][name] = value;
        this.announcementService.update(this.announcements[index])
            .subscribe(function (data) {
            _this.toastr.success(_this.translate.instant('announcements.messages.update'), _this.translate.instant('announcements.title'));
            _this.rerender();
        });
    };
    AnnouncementComponent.ctorParameters = function () { return [
        { type: _ngx_translate_core__WEBPACK_IMPORTED_MODULE_8__["TranslateService"] },
        { type: ngx_permissions__WEBPACK_IMPORTED_MODULE_7__["NgxRolesService"] },
        { type: _angular_common__WEBPACK_IMPORTED_MODULE_2__["DatePipe"] },
        { type: _angular_common_http__WEBPACK_IMPORTED_MODULE_3__["HttpClient"] },
        { type: ngx_export_as__WEBPACK_IMPORTED_MODULE_5__["ExportAsService"] },
        { type: ngx_toastr__WEBPACK_IMPORTED_MODULE_6__["ToastrService"] },
        { type: _core_services_announcement_service__WEBPACK_IMPORTED_MODULE_11__["AnnouncementService"] },
        { type: _core_services_authentication_service__WEBPACK_IMPORTED_MODULE_12__["AuthenticationService"] }
    ]; };
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewChild"])(angular_datatables__WEBPACK_IMPORTED_MODULE_4__["DataTableDirective"], { static: true }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", angular_datatables__WEBPACK_IMPORTED_MODULE_4__["DataTableDirective"])
    ], AnnouncementComponent.prototype, "dtElement", void 0);
    AnnouncementComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-announcement',
            template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./announcement.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/modules/admin/announcement/pages/announcement/announcement.component.html")).default,
            providers: [_angular_common__WEBPACK_IMPORTED_MODULE_2__["DatePipe"]],
            styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./announcement.component.scss */ "./src/app/modules/admin/announcement/pages/announcement/announcement.component.scss")).default]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_ngx_translate_core__WEBPACK_IMPORTED_MODULE_8__["TranslateService"],
            ngx_permissions__WEBPACK_IMPORTED_MODULE_7__["NgxRolesService"],
            _angular_common__WEBPACK_IMPORTED_MODULE_2__["DatePipe"],
            _angular_common_http__WEBPACK_IMPORTED_MODULE_3__["HttpClient"],
            ngx_export_as__WEBPACK_IMPORTED_MODULE_5__["ExportAsService"],
            ngx_toastr__WEBPACK_IMPORTED_MODULE_6__["ToastrService"],
            _core_services_announcement_service__WEBPACK_IMPORTED_MODULE_11__["AnnouncementService"],
            _core_services_authentication_service__WEBPACK_IMPORTED_MODULE_12__["AuthenticationService"]])
    ], AnnouncementComponent);
    return AnnouncementComponent;
}());



/***/ })

}]);
//# sourceMappingURL=modules-admin-announcement-announcement-module.js.map