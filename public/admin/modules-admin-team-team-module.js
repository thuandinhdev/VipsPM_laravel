(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["modules-admin-team-team-module"],{

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/modules/admin/team/components/import-team/import-team.component.html":
/*!****************************************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/modules/admin/team/components/import-team/import-team.component.html ***!
  \****************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<div class=\"modal-header\">\r\n    <h2 class=\"modal-title font-weight-normal\">\r\n        <i aria-hidden=\"true\" class=\"fa fa-file modal-icon\"></i>&nbsp;{{'teams.title1' | translate}}</h2>\r\n    <button (click)=\"onCancel()\" class=\"close\" type=\"button\"><span aria-hidden=\"true\">&times;</span></button>\r\n</div>\r\n<form (ngSubmit)=\"onSubmit()\" class=\"form\">\r\n    <div class=\"modal-body\">\r\n        <div class=\"form-body\">\r\n            <div class=\"row\">\r\n                <div class=\"col-md-12\">\r\n                    <div class=\"form-group\">\r\n                        <span class=\"text-danger\">{{'teams.labels.label1' | translate}}</span><br><br>\r\n                        <label>{{'teams.create.fields.csv_file' | translate}} <span class=\"text-danger\">*</span></label><br>\r\n                        <input (change)=\"fileUpload($event.target.files)\" accept=\".csv\" class=\"mb-3 btn btn-secondary\" id=\"file\" type=\"file\">\r\n                        <div *ngIf=\"!csvFileSelected && isFormSubmitted\" class=\"text-danger\">{{'teams.create.error_messages.message5' | translate}}</div>\r\n                    </div>\r\n                </div>\r\n            </div>\r\n        </div>\r\n    </div>\r\n    <div class=\"modal-footer\">\r\n        <button (click)=\"onCancel()\" class=\"btn btn-cancel mb-0\" type=\"button\">{{'common.close' | translate}}</button>\r\n        <button class=\"btn btn-submit mb-0\">{{'common.import' | translate}}</button>\r\n    </div>\r\n</form>\r\n");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/modules/admin/team/components/team-create-modal/team-create-modal.component.html":
/*!****************************************************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/modules/admin/team/components/team-create-modal/team-create-modal.component.html ***!
  \****************************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<div class=\"modal-header\">\r\n    <h2 class=\"modal-title font-weight-normal\">\r\n        <i aria-hidden=\"true\" class=\"fa fa-universal-access\"></i>&nbsp;{{'teams.title' | translate}}</h2>\r\n    <button (click)=\"bsModalRef.hide()\" aria-label=\"Close\" class=\"close\" data-dismiss=\"modal\" type=\"button\">\r\n        <span aria-hidden=\"true\">&times;</span></button>\r\n</div>\r\n<form (ngSubmit)=\"onSubmit()\" [formGroup]=\"createTeamForm\" class=\"form\">\r\n    <div class=\"modal-body\">\r\n        <div class=\"form-body\">\r\n            <div class=\"row\">\r\n                <div class=\"col-md-12\">\r\n                    <div class=\"form-group\">\r\n                        <label for=\"team_name\">{{'teams.create.fields.team_name' | translate}}\r\n                            <span class=\"text-danger\">&nbsp;*</span></label>\r\n                        <div class=\"position-relative has-icon-left\">\r\n                            <input [ngClass]=\"{ 'is-invalid': isFormSubmitted && teamControl.team_name.errors }\" class=\"form-control\" formControlName=\"team_name\" id=\"team_name\" placeholder=\"{{'teams.create.placeholders.placeholder1' | translate}}\" type=\"text\"/>\r\n                            <div class=\"form-control-position\">\r\n                                <i aria-hidden=\"true\" class=\"fa fa-lock\"></i>\r\n                            </div>\r\n                            <div *ngIf=\"isFormSubmitted && teamControl.team_name.errors\" class=\"invalid-feedback\">\r\n                                <div *ngIf=\"teamControl.team_name.errors.required\">{{'teams.create.error_messages.message1' | translate}}</div>\r\n                                <div *ngIf=\"teamControl.team_name.errors.maxlength\">{{'teams.create.error_messages.message2' | translate}}</div>\r\n                            </div>\r\n                        </div>\r\n                    </div>\r\n                </div>\r\n                <div class=\"col-md-6\">\r\n                    <div [ngClass]=\"{ 'is-invalid': isFormSubmitted && teamControl.members.errors }\" class=\"form-group\">\r\n                        <label for=\"members\">{{'teams.create.fields.members' | translate}}\r\n                            <span class=\"text-danger\">&nbsp;*</span></label>\r\n                        <ng-select (change)=\"teamMemberChange($event)\" [items]=\"users\" [multiple]=\"true\" [searchable]=\"true\" bindLabel=\"firstname\" bindValue=\"id\" formControlName=\"members\" placeholder=\"{{'teams.create.placeholders.placeholder2' | translate}}\">\r\n                            <ng-template let-item=\"item\" ng-option-tmp>\r\n                                {{item.firstname}} {{item.lastname}}\r\n                            </ng-template>\r\n                        </ng-select>\r\n                        <div *ngIf=\"isFormSubmitted && teamControl.members.errors\" class=\"invalid-feedback\">\r\n                            <div *ngIf=\"teamControl.members.errors.required\">{{'teams.create.error_messages.message3' | translate}}</div>\r\n                        </div>\r\n                    </div>\r\n                </div>\r\n                <div class=\"col-md-6\">\r\n                    <div [ngClass]=\"{ 'is-invalid': isFormSubmitted && teamControl.team_leader.errors }\" class=\"form-group\">\r\n                        <label for=\"team_leader\">{{'teams.create.fields.leader' | translate}}\r\n                            <span class=\"text-danger\">&nbsp;*</span></label>\r\n                        <ng-select [items]=\"teamLeaders\" [multiple]=\"false\" [searchable]=\"true\" bindLabel=\"firstname\" bindValue=\"id\" formControlName=\"team_leader\" placeholder=\"{{'teams.create.placeholders.placeholder3' | translate}}\">\r\n                            <ng-template let-item=\"item\" ng-option-tmp>\r\n                                {{item.firstname}} {{item.lastname}}\r\n                            </ng-template>\r\n                        </ng-select>\r\n                        <div *ngIf=\"isFormSubmitted && teamControl.team_leader.errors\" class=\"invalid-feedback\">\r\n                            <div *ngIf=\"teamControl.team_leader.errors.required\">{{'teams.create.error_messages.message4' | translate}}</div>\r\n                        </div>\r\n                    </div>\r\n                </div>\r\n                <div class=\"col-md-12\">\r\n                    <div class=\"form-group\">\r\n                        <label for=\"description\">{{'teams.create.fields.description' | translate}}</label>\r\n                        <app-ngx-editor [placeholder]=\"''\" [spellcheck]=\"true\" formControlName=\"description\" height=\"100px\" id=\"description\" minHeight=\"50px\"></app-ngx-editor>\r\n                    </div>\r\n                </div>\r\n            </div>\r\n        </div>\r\n    </div>\r\n    <div class=\"modal-footer\">\r\n        <button (click)=\"onCancel()\" class=\"btn btn-cancel mb-0\" type=\"button\">{{'common.close' | translate}}</button>\r\n        <button class=\"btn btn-submit mb-0\" type=\"submit\">{{'common.create' | translate}}</button>\r\n    </div>\r\n</form>\r\n");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/modules/admin/team/components/team-edit-modal/team-edit-modal.component.html":
/*!************************************************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/modules/admin/team/components/team-edit-modal/team-edit-modal.component.html ***!
  \************************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<div class=\"modal-header\">\r\n    <h2 class=\"modal-title font-weight-normal\">\r\n        <i aria-hidden=\"true\" class=\"fa fa-universal-access\"></i>&nbsp;{{'teams.title' | translate}}</h2>\r\n    <button (click)=\"bsModalRef.hide()\" aria-label=\"Close\" class=\"close\" data-dismiss=\"modal\" type=\"button\">\r\n        <span aria-hidden=\"true\">&times;</span></button>\r\n</div>\r\n<form (ngSubmit)=\"onSubmit()\" *ngIf=\"isPageLoaded\" [formGroup]=\"editTeamForm\" class=\"form\">\r\n    <div class=\"modal-body\">\r\n        <div class=\"form-body\">\r\n            <div class=\"row\">\r\n                <div class=\"col-md-12\">\r\n                    <div class=\"form-group\">\r\n                        <label for=\"team_name\">{{'teams.create.fields.team_name' | translate}}\r\n                            <span class=\"text-danger\">&nbsp;*</span></label>\r\n                        <div class=\"position-relative has-icon-left\">\r\n                            <input [ngClass]=\"{ 'is-invalid': isFormSubmitted && teamControl.team_name.errors }\" class=\"form-control\" formControlName=\"team_name\" id=\"team_name\" placeholder=\"{{'teams.create.placeholders.placeholder1' | translate}}\" type=\"text\"/>\r\n                            <div class=\"form-control-position\">\r\n                                <i aria-hidden=\"true\" class=\"fa fa-lock\"></i>\r\n                            </div>\r\n                            <div *ngIf=\"isFormSubmitted && teamControl.team_name.errors\" class=\"invalid-feedback\">\r\n                                <div *ngIf=\"teamControl.team_name.errors.required\">{{'teams.create.error_messages.message1' | translate}}</div>\r\n                                <div *ngIf=\"teamControl.team_name.errors.maxlength\">{{'teams.create.error_messages.message2' | translate}}</div>\r\n                            </div>\r\n                        </div>\r\n                    </div>\r\n                </div>\r\n                <div class=\"col-md-6\">\r\n                    <div [ngClass]=\"{ 'is-invalid': isFormSubmitted && teamControl.members.errors }\" class=\"form-group\">\r\n                        <label for=\"members\">{{'teams.create.fields.members' | translate}}\r\n                            <span class=\"text-danger\">&nbsp;*</span></label>\r\n                        <ng-select (change)=\"teamMemberChange($event)\" [items]=\"users\" [multiple]=\"true\" [searchable]=\"true\" bindLabel=\"firstname\" bindValue=\"id\" formControlName=\"members\" placeholder=\"{{'teams.create.placeholders.placeholder2' | translate}}\">\r\n                            <ng-template let-item=\"item\" ng-option-tmp>\r\n                                {{item.firstname}} {{item.lastname}}\r\n                            </ng-template>\r\n                        </ng-select>\r\n                        <div *ngIf=\"isFormSubmitted && teamControl.members.errors\" class=\"invalid-feedback\">\r\n                            <div *ngIf=\"teamControl.members.errors.required\">{{'teams.create.error_messages.message3' | translate}}</div>\r\n                        </div>\r\n                    </div>\r\n                </div>\r\n                <div class=\"col-md-6\">\r\n                    <div [ngClass]=\"{ 'is-invalid': isFormSubmitted && teamControl.team_leader.errors }\" class=\"form-group\">\r\n                        <label for=\"team_leader\">{{'teams.create.fields.leader' | translate}}\r\n                            <span class=\"text-danger\">&nbsp;*</span></label>\r\n                        <ng-select [items]=\"teamLeaders\" [multiple]=\"false\" [searchable]=\"true\" bindLabel=\"firstname\" bindValue=\"id\" formControlName=\"team_leader\" placeholder=\"{{'teams.create.placeholders.placeholder3' | translate}}\">\r\n                            <ng-template let-item=\"item\" ng-option-tmp>\r\n                                {{item.firstname}} {{item.lastname}}\r\n                            </ng-template>\r\n                        </ng-select>\r\n                        <div *ngIf=\"isFormSubmitted && teamControl.team_leader.errors\" class=\"invalid-feedback\">\r\n                            <div *ngIf=\"teamControl.team_leader.errors.required\">{{'teams.create.error_messages.message4' | translate}}</div>\r\n                        </div>\r\n                    </div>\r\n                </div>\r\n                <div class=\"col-md-12\">\r\n                    <div class=\"form-group\">\r\n                        <label for=\"description\">{{'teams.create.fields.description' | translate}}</label>\r\n                        <app-ngx-editor [placeholder]=\"''\" [spellcheck]=\"true\" formControlName=\"description\" height=\"100px\" id=\"description\" minHeight=\"50px\"></app-ngx-editor>\r\n                    </div>\r\n                </div>\r\n            </div>\r\n        </div>\r\n    </div>\r\n    <div class=\"modal-footer\">\r\n        <button (click)=\"onCancel()\" class=\"btn btn-cancel mb-0\" type=\"button\">{{'common.close' | translate}}</button>\r\n        <button class=\"btn btn-submit mb-0\" type=\"submit\">{{'common.update' | translate}}</button>\r\n    </div>\r\n</form>\r\n");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/modules/admin/team/pages/team/team.component.html":
/*!*********************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/modules/admin/team/pages/team/team.component.html ***!
  \*********************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<section class=\"hide_empty_message\">\r\n    <div class=\"row\">\r\n        <div class=\"col-sm-12\">\r\n            <div class=\"card pl-2 pr-2\">\r\n                <div class=\"card-header pl-0 pr-0 border-bottom\">\r\n                    <h4 class=\"main-title mt-2\"><span>{{'teams.title' | translate}}</span></h4>\r\n                    <div class=\"card-buttons\">\r\n                        <a *ngxPermissionsOnly=\"['admin', 'super_admin', 'teams_view']\" [routerLink]=\"['/teamboard']\" class=\"btn btn-create mb-0\" placement=\"top\" tooltip=\"{{'teams.title3' | translate}}\"><i class=\"fa fa-universal-access\"></i><span>{{'teams.title3' | translate}}</span></a>\r\n                        <a *ngxPermissionsOnly=\"['admin', 'super_admin', 'teams_create']\" class=\"btn btn-create mb-0\" download=\"import_teams.csv\" href=\"{{ apiUrl }}/csv/import_teams.csv\" placement=\"top\" target=\"_blank\" tooltip=\"{{'common.tooltip.team_csv_sample' | translate}}\"><i class=\"fa fa-files-o\"></i></a>\r\n                        <button (click)=\"openTeamImportModal()\" *ngxPermissionsOnly=\"['admin', 'super_admin', 'teams_create']\" class=\"btn btn-create mb-0\" tooltip=\"{{'common.import' | translate}}\">\r\n                            <i class=\"fa fa-upload\"></i></button>\r\n                        <button (click)=\"openTeamCreateModal()\" *ngxPermissionsOnly=\"['admin', 'super_admin', 'teams_create']\" class=\"btn btn-create mb-0\" tooltip=\"{{'common.create' | translate}}\">\r\n                            <i aria-hidden=\"true\" class=\"fa fa-plus\"></i></button>\r\n                    </div>\r\n                </div>\r\n                <div class=\"card-content pt-3 pb-3\">\r\n                    <div class=\"card-body\">\r\n                        <div class=\"table-responsive-xs table-responsive-sm table-responsive-md table-responsive-lg table-responsive-xl\">\r\n                            <table [dtOptions]=\"dtOptions\" [dtTrigger]=\"dtTrigger\" class=\"table table-bordered table-hover b4-datatable\" datatable id=\"team_table\" width=\"100%\">\r\n                                <thead>\r\n                                <tr>\r\n                                    <th>#</th>\r\n                                    <th>{{'teams.columns.team_name' | translate}}</th>\r\n                                    <th>{{'teams.columns.members' | translate}}</th>\r\n                                    <th>{{'teams.columns.leader' | translate}}</th>\r\n                                    <th>{{'teams.columns.actions' | translate}}</th>\r\n                                </tr>\r\n                                </thead>\r\n                                <tbody *ngIf=\"teams?.length != 0\">\r\n                                <tr *ngFor=\"let team of teams; index as i\">\r\n                                    <td>{{i + 1}}</td>\r\n                                    <td>\r\n                                        <div *ngxPermissionsOnly=\"['admin', 'super_admin', 'teams_edit']; else elseBlock1; then thenBlock1\"></div>\r\n                                        <ng-template #elseBlock1>{{team.team_name}}</ng-template>\r\n                                        <ng-template #thenBlock1>\r\n                                            <inline-edit-input (updateValue)=\"saveTeamDetail(i, 'team_name', $event);\" [elementFor]=\"'teams.inline_edit.team_name' | translate\" [fieldValue]=\"team.team_name\" [isRequired]=\"'true'\" [maxLength]=\"30\" [name]=\"'team_name'\" [type]=\"'text'\"></inline-edit-input>\r\n                                        </ng-template>\r\n                                    </td>\r\n                                    <td class=\"people-lists\">\r\n                                        <a *ngFor=\"let member of team.members index as i; odd as isOdd; even as isEven\" [ngClass]=\"{'btn-profile-info popover-item': isOdd, 'btn-profile-danger': isEven, 'popover-item': i!=0}\" [routerLink]=\"['/users/profile', member.id]\" class=\"btn rounded-circle text-dark\" placement=\"top\" tooltip=\"{{member.firstname}} {{member.lastname}}\">\r\n                                            <img *ngIf=\"member.avatar\" alt=\"Profile\" class=\"img-sm rounded-circle\" src=\"{{apiUrl}}/uploads/profile/{{member.avatar}}\"/>\r\n                                            <img *ngIf=\"!member.avatar\" alt=\"Profile\" class=\"img-sm rounded-circle\" src=\"../assets/img/profile_small.jpg\"/>\r\n                                        </a>\r\n                                    </td>\r\n                                    <td class=\"people-lists\">\r\n                                        <a [routerLink]=\"['/users/profile', team.team_leader]\" class=\"btn btn-profile-info rounded-circle text-dark\" placement=\"top\" tooltip=\"{{team.firstname}} {{team.lastname}}\">\r\n                                            <img *ngIf=\"team.avatar\" alt=\"Profile\" class=\"img-sm rounded-circle\" src=\"{{apiUrl}}/uploads/profile/{{team.avatar}}\"/>\r\n                                            <img *ngIf=\"!team.avatar\" alt=\"Profile\" class=\"img-sm rounded-circle\" src=\"../assets/img/profile_small.jpg\"/>\r\n                                        </a>\r\n                                    </td>\r\n                                    <td class=\"actions-dropdown\">\r\n                                        <div class=\"btn-group\" dropdown>\r\n                                            <button aria-controls=\"dropdown-basic-1\" class=\"dropdown-toggle btn-action\" dropdownToggle id=\"button-basic-1\" type=\"button\">\r\n                                                <i class=\"fa fa-ellipsis-v\"></i></button>\r\n                                            <ul *dropdownMenu aria-labelledby=\"button-basic-1\" class=\"dropdown-menu animated fadeIn\" id=\"dropdown-basic-1\" role=\"menu\">\r\n                                                <li *ngxPermissionsOnly=\"['admin', 'super_admin', 'teams_edit']\" role=\"menuitem\">\r\n                                                    <a (click)=\"openTeamEditModal(team)\" class=\"dropdown-item btn btn-edit btn-raised\" tooltip=\"{{'common.edit' | translate}}\"><i class=\"fa fa-pencil-square-o\"></i></a>\r\n                                                </li>\r\n                                                <li *ngxPermissionsOnly=\"['admin', 'super_admin', 'teams_delete']\" role=\"menuitem\">\r\n                                                    <a (click)=\"removeTeam(team.id)\" class=\"dropdown-item btn btn-delete btn-raised\" tooltip=\"{{'common.delete' | translate}}\"><i class=\"fa fa-trash-o\"></i></a>\r\n                                                </li>\r\n                                            </ul>\r\n                                        </div>\r\n                                    </td>\r\n                                </tr>\r\n                                </tbody>\r\n                                <tfoot *ngIf=\"teams?.length == 0\" class=\"tfoot_dt\">\r\n                                <tr>\r\n                                    <td class=\"no-data-available text-center\" colspan=\"5\">{{'common.datatable.sEmptyTable' | translate}}</td>\r\n                                </tr>\r\n                                </tfoot>\r\n                            </table>\r\n                        </div>\r\n                    </div>\r\n                </div>\r\n            </div>\r\n        </div>\r\n    </div>\r\n</section>\r\n");

/***/ }),

/***/ "./src/app/modules/admin/team/components/import-team/import-team.component.scss":
/*!**************************************************************************************!*\
  !*** ./src/app/modules/admin/team/components/import-team/import-team.component.scss ***!
  \**************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL21vZHVsZXMvYWRtaW4vdGVhbS9jb21wb25lbnRzL2ltcG9ydC10ZWFtL2ltcG9ydC10ZWFtLmNvbXBvbmVudC5zY3NzIn0= */");

/***/ }),

/***/ "./src/app/modules/admin/team/components/import-team/import-team.component.ts":
/*!************************************************************************************!*\
  !*** ./src/app/modules/admin/team/components/import-team/import-team.component.ts ***!
  \************************************************************************************/
/*! exports provided: ImportTeamComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ImportTeamComponent", function() { return ImportTeamComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var ngx_bootstrap_modal__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ngx-bootstrap/modal */ "./node_modules/ngx-bootstrap/modal/fesm5/ngx-bootstrap-modal.js");
/* harmony import */ var ngx_toastr__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ngx-toastr */ "./node_modules/ngx-toastr/fesm5/ngx-toastr.js");
/* harmony import */ var _ngx_translate_core__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ngx-translate/core */ "./node_modules/@ngx-translate/core/fesm5/ngx-translate-core.js");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! rxjs */ "./node_modules/rxjs/_esm5/index.js");
/* harmony import */ var _core_services_team_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../../../../core/services/team.service */ "./src/app/core/services/team.service.ts");







var ImportTeamComponent = /** @class */ (function () {
    function ImportTeamComponent(translate, bsImportUserModalRef, toastr, teamService) {
        this.translate = translate;
        this.bsImportUserModalRef = bsImportUserModalRef;
        this.toastr = toastr;
        this.teamService = teamService;
        this.event = new _angular_core__WEBPACK_IMPORTED_MODULE_1__["EventEmitter"]();
        this.fileAttached = false;
        this.isPageLoaded = false;
        this.isFormSubmitted = false;
        this.csvFileSelected = false;
    }
    ImportTeamComponent.prototype.ngOnInit = function () {
        this.onClose = new rxjs__WEBPACK_IMPORTED_MODULE_5__["Subject"]();
    };
    ImportTeamComponent.prototype.fileUpload = function (files) {
        var _this = this;
        if (files && files.length > 0) {
            var file = files.item(0), reader_1 = new FileReader();
            reader_1.readAsText(file);
            reader_1.onload = function (event) {
                var csvdata = reader_1.result;
                _this.csvData = csvdata;
                _this.fileAttached = true;
                if (_this.csvData != undefined) {
                    _this.csvFileSelected = true;
                }
                else {
                    _this.csvFileSelected = false;
                }
                var filename = files[0].name;
                var ext = filename.substr(filename.lastIndexOf('.') + 1);
                if (ext != 'csv') {
                    _this.toastr.error(_this.translate.instant('teams.create.error_messages.message6'), _this.translate.instant('teams.title'));
                    _this.csvFileSelected = false;
                    return;
                }
                var newLinebrk = csvdata.split('\n');
                var columnNames = newLinebrk[0].split(',');
                _this.csvFileColumnName = columnNames;
            };
        }
    };
    ImportTeamComponent.prototype.onSubmit = function () {
        var _this = this;
        this.isFormSubmitted = true;
        if (!this.csvFileSelected) {
            return false;
        }
        this.teamService.import({ csv_file: this.csvData })
            .subscribe(function (data) {
            _this.event.emit({ data: true });
            _this.onCancel();
        });
    };
    ImportTeamComponent.prototype.onCancel = function () {
        this.onClose.next(false);
        this.bsImportUserModalRef.hide();
    };
    ImportTeamComponent.ctorParameters = function () { return [
        { type: _ngx_translate_core__WEBPACK_IMPORTED_MODULE_4__["TranslateService"] },
        { type: ngx_bootstrap_modal__WEBPACK_IMPORTED_MODULE_2__["BsModalRef"] },
        { type: ngx_toastr__WEBPACK_IMPORTED_MODULE_3__["ToastrService"] },
        { type: _core_services_team_service__WEBPACK_IMPORTED_MODULE_6__["TeamService"] }
    ]; };
    ImportTeamComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-import-team',
            template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./import-team.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/modules/admin/team/components/import-team/import-team.component.html")).default,
            styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./import-team.component.scss */ "./src/app/modules/admin/team/components/import-team/import-team.component.scss")).default]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_ngx_translate_core__WEBPACK_IMPORTED_MODULE_4__["TranslateService"],
            ngx_bootstrap_modal__WEBPACK_IMPORTED_MODULE_2__["BsModalRef"],
            ngx_toastr__WEBPACK_IMPORTED_MODULE_3__["ToastrService"],
            _core_services_team_service__WEBPACK_IMPORTED_MODULE_6__["TeamService"]])
    ], ImportTeamComponent);
    return ImportTeamComponent;
}());



/***/ }),

/***/ "./src/app/modules/admin/team/components/team-create-modal/team-create-modal.component.scss":
/*!**************************************************************************************************!*\
  !*** ./src/app/modules/admin/team/components/team-create-modal/team-create-modal.component.scss ***!
  \**************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL21vZHVsZXMvYWRtaW4vdGVhbS9jb21wb25lbnRzL3RlYW0tY3JlYXRlLW1vZGFsL3RlYW0tY3JlYXRlLW1vZGFsLmNvbXBvbmVudC5zY3NzIn0= */");

/***/ }),

/***/ "./src/app/modules/admin/team/components/team-create-modal/team-create-modal.component.ts":
/*!************************************************************************************************!*\
  !*** ./src/app/modules/admin/team/components/team-create-modal/team-create-modal.component.ts ***!
  \************************************************************************************************/
/*! exports provided: TeamCreateModalComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TeamCreateModalComponent", function() { return TeamCreateModalComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var ngx_bootstrap_modal__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ngx-bootstrap/modal */ "./node_modules/ngx-bootstrap/modal/fesm5/ngx-bootstrap-modal.js");
/* harmony import */ var ngx_toastr__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ngx-toastr */ "./node_modules/ngx-toastr/fesm5/ngx-toastr.js");
/* harmony import */ var _ngx_translate_core__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @ngx-translate/core */ "./node_modules/@ngx-translate/core/fesm5/ngx-translate-core.js");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! rxjs */ "./node_modules/rxjs/_esm5/index.js");
/* harmony import */ var _core_services_user_service__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../../../../../core/services/user.service */ "./src/app/core/services/user.service.ts");
/* harmony import */ var _core_services_team_service__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../../../../../core/services/team.service */ "./src/app/core/services/team.service.ts");









var TeamCreateModalComponent = /** @class */ (function () {
    function TeamCreateModalComponent(translate, bsModalRef, formBuilder, toastr, userService, teamService) {
        this.translate = translate;
        this.bsModalRef = bsModalRef;
        this.formBuilder = formBuilder;
        this.toastr = toastr;
        this.userService = userService;
        this.teamService = teamService;
        this.event = new _angular_core__WEBPACK_IMPORTED_MODULE_1__["EventEmitter"]();
        this.isFormSubmitted = false;
        this.isPageLoaded = false;
        this.users = [];
        this.teamLeaders = [];
    }
    Object.defineProperty(TeamCreateModalComponent.prototype, "teamControl", {
        get: function () {
            return this.createTeamForm.controls;
        },
        enumerable: true,
        configurable: true
    });
    TeamCreateModalComponent.prototype.ngOnInit = function () {
        this.onClose = new rxjs__WEBPACK_IMPORTED_MODULE_6__["Subject"]();
        this.getUsers();
        this.loadForms();
    };
    TeamCreateModalComponent.prototype.getUsers = function () {
        var _this = this;
        this.userService.getAll()
            .subscribe(function (data) {
            _this.users = data;
            _this.isPageLoaded = true;
        });
    };
    TeamCreateModalComponent.prototype.loadForms = function () {
        this.createTeamForm = this.formBuilder.group({
            team_name: [null, [_angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required, _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].maxLength(30)]],
            members: [null, _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required],
            team_leader: [null, _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required],
            description: ['']
        });
    };
    TeamCreateModalComponent.prototype.teamMemberChange = function (event) {
        this.teamLeaders = event;
    };
    TeamCreateModalComponent.prototype.onSubmit = function () {
        var _this = this;
        this.isFormSubmitted = true;
        if (this.createTeamForm.invalid) {
            return;
        }
        this.teamService.create(this.createTeamForm.value)
            .subscribe(function (data) {
            _this.toastr.success(_this.translate.instant('teams.messages.create'), _this.translate.instant('teams.title'));
            _this.event.emit({ data: true });
            _this.onCancel();
        }, function (error) {
            _this.onCancel();
        });
    };
    TeamCreateModalComponent.prototype.onCancel = function () {
        this.onClose.next(false);
        this.bsModalRef.hide();
    };
    TeamCreateModalComponent.ctorParameters = function () { return [
        { type: _ngx_translate_core__WEBPACK_IMPORTED_MODULE_5__["TranslateService"] },
        { type: ngx_bootstrap_modal__WEBPACK_IMPORTED_MODULE_3__["BsModalRef"] },
        { type: _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormBuilder"] },
        { type: ngx_toastr__WEBPACK_IMPORTED_MODULE_4__["ToastrService"] },
        { type: _core_services_user_service__WEBPACK_IMPORTED_MODULE_7__["UserService"] },
        { type: _core_services_team_service__WEBPACK_IMPORTED_MODULE_8__["TeamService"] }
    ]; };
    TeamCreateModalComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-team-create-modal',
            template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./team-create-modal.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/modules/admin/team/components/team-create-modal/team-create-modal.component.html")).default,
            styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./team-create-modal.component.scss */ "./src/app/modules/admin/team/components/team-create-modal/team-create-modal.component.scss")).default]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_ngx_translate_core__WEBPACK_IMPORTED_MODULE_5__["TranslateService"],
            ngx_bootstrap_modal__WEBPACK_IMPORTED_MODULE_3__["BsModalRef"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormBuilder"],
            ngx_toastr__WEBPACK_IMPORTED_MODULE_4__["ToastrService"],
            _core_services_user_service__WEBPACK_IMPORTED_MODULE_7__["UserService"],
            _core_services_team_service__WEBPACK_IMPORTED_MODULE_8__["TeamService"]])
    ], TeamCreateModalComponent);
    return TeamCreateModalComponent;
}());



/***/ }),

/***/ "./src/app/modules/admin/team/components/team-edit-modal/team-edit-modal.component.scss":
/*!**********************************************************************************************!*\
  !*** ./src/app/modules/admin/team/components/team-edit-modal/team-edit-modal.component.scss ***!
  \**********************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL21vZHVsZXMvYWRtaW4vdGVhbS9jb21wb25lbnRzL3RlYW0tZWRpdC1tb2RhbC90ZWFtLWVkaXQtbW9kYWwuY29tcG9uZW50LnNjc3MifQ== */");

/***/ }),

/***/ "./src/app/modules/admin/team/components/team-edit-modal/team-edit-modal.component.ts":
/*!********************************************************************************************!*\
  !*** ./src/app/modules/admin/team/components/team-edit-modal/team-edit-modal.component.ts ***!
  \********************************************************************************************/
/*! exports provided: TeamEditModalComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TeamEditModalComponent", function() { return TeamEditModalComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var ngx_bootstrap_modal__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ngx-bootstrap/modal */ "./node_modules/ngx-bootstrap/modal/fesm5/ngx-bootstrap-modal.js");
/* harmony import */ var ngx_toastr__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ngx-toastr */ "./node_modules/ngx-toastr/fesm5/ngx-toastr.js");
/* harmony import */ var _ngx_translate_core__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @ngx-translate/core */ "./node_modules/@ngx-translate/core/fesm5/ngx-translate-core.js");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! rxjs */ "./node_modules/rxjs/_esm5/index.js");
/* harmony import */ var _core_services_user_service__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../../../../../core/services/user.service */ "./src/app/core/services/user.service.ts");
/* harmony import */ var _core_services_team_service__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../../../../../core/services/team.service */ "./src/app/core/services/team.service.ts");









var TeamEditModalComponent = /** @class */ (function () {
    function TeamEditModalComponent(translate, bsModalRef, formBuilder, toastr, userService, teamService) {
        this.translate = translate;
        this.bsModalRef = bsModalRef;
        this.formBuilder = formBuilder;
        this.toastr = toastr;
        this.userService = userService;
        this.teamService = teamService;
        this.event = new _angular_core__WEBPACK_IMPORTED_MODULE_1__["EventEmitter"]();
        this.isFormSubmitted = false;
        this.isPageLoaded = false;
        this.users = [];
        this.teamLeaders = [];
        this.members = [];
    }
    Object.defineProperty(TeamEditModalComponent.prototype, "teamControl", {
        get: function () {
            return this.editTeamForm.controls;
        },
        enumerable: true,
        configurable: true
    });
    TeamEditModalComponent.prototype.ngOnInit = function () {
        this.onClose = new rxjs__WEBPACK_IMPORTED_MODULE_6__["Subject"]();
        this.getUsers();
    };
    TeamEditModalComponent.prototype.getUsers = function () {
        var _this = this;
        this.userService.getAll()
            .subscribe(function (data) {
            _this.users = data;
            _this.loadForms();
        });
    };
    TeamEditModalComponent.prototype.loadForms = function () {
        for (var iRow in this.team.members) {
            this.members.push(this.team.members[iRow].id);
        }
        this.teamLeaders = this.team.members;
        this.editTeamForm = this.formBuilder.group({
            id: [this.team.id],
            team_name: [this.team.team_name, [_angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required, _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].maxLength(30)]],
            members: [this.members, _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required],
            team_leader: [this.team.team_leader, _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required],
            description: [this.team.description]
        });
        this.isPageLoaded = true;
    };
    TeamEditModalComponent.prototype.teamMemberChange = function (event) {
        this.editTeamForm.patchValue({ team_leader: null });
        this.teamLeaders = event;
    };
    TeamEditModalComponent.prototype.onSubmit = function () {
        var _this = this;
        this.isFormSubmitted = true;
        if (this.editTeamForm.invalid) {
            return;
        }
        // // --
        // this.toastr.error(this.translate.instant('common.not_allowed'));
        // this.onCancel();
        // return;
        this.teamService.update(this.editTeamForm.value)
            .subscribe(function (data) {
            _this.toastr.success(_this.translate.instant('teams.messages.update'), _this.translate.instant('teams.title'));
            _this.event.emit({ data: true });
            _this.onCancel();
        }, function (error) {
            _this.onCancel();
        });
    };
    TeamEditModalComponent.prototype.onCancel = function () {
        this.onClose.next(false);
        this.bsModalRef.hide();
    };
    TeamEditModalComponent.ctorParameters = function () { return [
        { type: _ngx_translate_core__WEBPACK_IMPORTED_MODULE_5__["TranslateService"] },
        { type: ngx_bootstrap_modal__WEBPACK_IMPORTED_MODULE_3__["BsModalRef"] },
        { type: _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormBuilder"] },
        { type: ngx_toastr__WEBPACK_IMPORTED_MODULE_4__["ToastrService"] },
        { type: _core_services_user_service__WEBPACK_IMPORTED_MODULE_7__["UserService"] },
        { type: _core_services_team_service__WEBPACK_IMPORTED_MODULE_8__["TeamService"] }
    ]; };
    TeamEditModalComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-team-edit-modal',
            template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./team-edit-modal.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/modules/admin/team/components/team-edit-modal/team-edit-modal.component.html")).default,
            styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./team-edit-modal.component.scss */ "./src/app/modules/admin/team/components/team-edit-modal/team-edit-modal.component.scss")).default]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_ngx_translate_core__WEBPACK_IMPORTED_MODULE_5__["TranslateService"],
            ngx_bootstrap_modal__WEBPACK_IMPORTED_MODULE_3__["BsModalRef"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormBuilder"],
            ngx_toastr__WEBPACK_IMPORTED_MODULE_4__["ToastrService"],
            _core_services_user_service__WEBPACK_IMPORTED_MODULE_7__["UserService"],
            _core_services_team_service__WEBPACK_IMPORTED_MODULE_8__["TeamService"]])
    ], TeamEditModalComponent);
    return TeamEditModalComponent;
}());



/***/ }),

/***/ "./src/app/modules/admin/team/pages/team/team.component.scss":
/*!*******************************************************************!*\
  !*** ./src/app/modules/admin/team/pages/team/team.component.scss ***!
  \*******************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = (".hide_empty_message ::ng-deep .odd {\n  display: none;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvbW9kdWxlcy9hZG1pbi90ZWFtL3BhZ2VzL3RlYW0vQzpcXFVzZXJzXFx0aHVhblxcT25lRHJpdmVcXERlc2t0b3BcXGdsYXZhbC10aHVhbmRpbmgvc3JjXFxhcHBcXG1vZHVsZXNcXGFkbWluXFx0ZWFtXFxwYWdlc1xcdGVhbVxcdGVhbS5jb21wb25lbnQuc2NzcyIsInNyYy9hcHAvbW9kdWxlcy9hZG1pbi90ZWFtL3BhZ2VzL3RlYW0vdGVhbS5jb21wb25lbnQuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNJLGFBQUE7QUNDSiIsImZpbGUiOiJzcmMvYXBwL21vZHVsZXMvYWRtaW4vdGVhbS9wYWdlcy90ZWFtL3RlYW0uY29tcG9uZW50LnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyIuaGlkZV9lbXB0eV9tZXNzYWdlIDo6bmctZGVlcCAub2RkIHtcclxuICAgIGRpc3BsYXk6IG5vbmVcclxufSIsIi5oaWRlX2VtcHR5X21lc3NhZ2UgOjpuZy1kZWVwIC5vZGQge1xuICBkaXNwbGF5OiBub25lO1xufSJdfQ== */");

/***/ }),

/***/ "./src/app/modules/admin/team/pages/team/team.component.ts":
/*!*****************************************************************!*\
  !*** ./src/app/modules/admin/team/pages/team/team.component.ts ***!
  \*****************************************************************/
/*! exports provided: TeamComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TeamComponent", function() { return TeamComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var angular_datatables__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! angular-datatables */ "./node_modules/angular-datatables/index.js");
/* harmony import */ var ngx_export_as__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ngx-export-as */ "./node_modules/ngx-export-as/fesm2015/ngx-export-as.js");
/* harmony import */ var ngx_bootstrap_modal__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ngx-bootstrap/modal */ "./node_modules/ngx-bootstrap/modal/fesm5/ngx-bootstrap-modal.js");
/* harmony import */ var ngx_toastr__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ngx-toastr */ "./node_modules/ngx-toastr/fesm5/ngx-toastr.js");
/* harmony import */ var _ngx_translate_core__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @ngx-translate/core */ "./node_modules/@ngx-translate/core/fesm5/ngx-translate-core.js");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! rxjs */ "./node_modules/rxjs/_esm5/index.js");
/* harmony import */ var sweetalert2__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! sweetalert2 */ "./node_modules/sweetalert2/dist/sweetalert2.all.js");
/* harmony import */ var sweetalert2__WEBPACK_IMPORTED_MODULE_10___default = /*#__PURE__*/__webpack_require__.n(sweetalert2__WEBPACK_IMPORTED_MODULE_10__);
/* harmony import */ var _core_services_team_service__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ../../../../../core/services/team.service */ "./src/app/core/services/team.service.ts");
/* harmony import */ var _core_services_authentication_service__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ../../../../../core/services/authentication.service */ "./src/app/core/services/authentication.service.ts");
/* harmony import */ var _components_team_create_modal_team_create_modal_component__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ../../components/team-create-modal/team-create-modal.component */ "./src/app/modules/admin/team/components/team-create-modal/team-create-modal.component.ts");
/* harmony import */ var _components_team_edit_modal_team_edit_modal_component__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ../../components/team-edit-modal/team-edit-modal.component */ "./src/app/modules/admin/team/components/team-edit-modal/team-edit-modal.component.ts");
/* harmony import */ var _components_import_team_import_team_component__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! ../../components/import-team/import-team.component */ "./src/app/modules/admin/team/components/import-team/import-team.component.ts");
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! ../../../../../../environments/environment */ "./src/environments/environment.ts");
/* harmony import */ var datatables_net__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! datatables.net */ "./node_modules/datatables.net/js/jquery.dataTables.js");
/* harmony import */ var datatables_net__WEBPACK_IMPORTED_MODULE_17___default = /*#__PURE__*/__webpack_require__.n(datatables_net__WEBPACK_IMPORTED_MODULE_17__);
/* harmony import */ var datatables_net_bs4__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! datatables.net-bs4 */ "./node_modules/datatables.net-bs4/js/dataTables.bootstrap4.js");
/* harmony import */ var datatables_net_bs4__WEBPACK_IMPORTED_MODULE_18___default = /*#__PURE__*/__webpack_require__.n(datatables_net_bs4__WEBPACK_IMPORTED_MODULE_18__);



















var TeamComponent = /** @class */ (function () {
    function TeamComponent(translate, modalService, router, route, http, exportAsService, toastr, teamService, authenticationService) {
        var _this = this;
        this.translate = translate;
        this.modalService = modalService;
        this.router = router;
        this.route = route;
        this.http = http;
        this.exportAsService = exportAsService;
        this.toastr = toastr;
        this.teamService = teamService;
        this.authenticationService = authenticationService;
        this.dtTrigger = new rxjs__WEBPACK_IMPORTED_MODULE_9__["Subject"]();
        this.dtOptions = {};
        this.teams = [];
        this.exportAsConfig = {
            type: 'pdf',
            elementIdOrContent: 'team_table',
        };
        this.modalConfigs = {
            animated: true,
            keyboard: true,
            backdrop: true,
            ignoreBackdropClick: false,
            class: 'inmodal modal-dialog-centered modal-md animated fadeIn'
        };
        this.apiUrl = _environments_environment__WEBPACK_IMPORTED_MODULE_16__["environment"].apiUrl;
        this.authenticationService.loginUser.subscribe(function (x) { return _this.loginUser = x; });
    }
    TeamComponent.prototype.ngOnInit = function () {
        this.loadRoleDatatable();
    };
    TeamComponent.prototype.loadRoleDatatable = function () {
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
                    'width': '2%',
                    'target': [0]
                }, {
                    'sortable': true,
                    'target': [1]
                }, {
                    'sortable': false,
                    'target': [2]
                }, {
                    'sortable': true,
                    'width': '5%',
                    'target': [3]
                }, {
                    'sortable': false,
                    'width': '5%',
                    'target': [4]
                }
            ],
            buttons: [{
                    extend: 'csv',
                    title: this.translate.instant('teams.title'),
                    className: 'btn btn-datatable-gredient',
                    action: function (e, dt, node, config) {
                        that.exportFiles('csv');
                    }
                }, {
                    extend: 'excel',
                    title: this.translate.instant('teams.title'),
                    className: 'btn btn-datatable-gredient',
                    action: function (e, dt, node, config) {
                        that.exportFiles('xlsx');
                    }
                }, {
                    extend: 'pdf',
                    title: this.translate.instant('teams.title'),
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
                    .post(_this.apiUrl + '/api/all-teams', dataTablesParameters, {})
                    .subscribe(function (resp) {
                    if (resp) {
                        _this.teams = resp.data;
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
    TeamComponent.prototype.exportFiles = function (type) {
        this.exportAsConfig.type = type;
        this.exportAsService.save(this.exportAsConfig, this.translate.instant('teams.title')).subscribe(function () {
        });
    };
    TeamComponent.prototype.ngAfterViewInit = function () {
        this.dtTrigger.next();
    };
    TeamComponent.prototype.ngOnDestroy = function () {
        this.dtTrigger.unsubscribe();
    };
    TeamComponent.prototype.rerender = function () {
        var _this = this;
        this.dtElement.dtInstance.then(function (dtInstance) {
            dtInstance.destroy();
            setTimeout(function () {
                _this.dtTrigger.next();
                if (_this.teams.length > 0) {
                    $('.tfoot_dt').addClass('d-none');
                }
                else {
                    $('.tfoot_dt').removeClass('d-none');
                }
            });
        });
    };
    TeamComponent.prototype.openTeamCreateModal = function () {
        var _this = this;
        this.modalRef = this.modalService.show(_components_team_create_modal_team_create_modal_component__WEBPACK_IMPORTED_MODULE_13__["TeamCreateModalComponent"], this.modalConfigs);
        this.modalRef.content.event.subscribe(function (data) {
            _this.rerender();
        });
    };
    TeamComponent.prototype.openTeamEditModal = function (team) {
        var _this = this;
        var modalConfig = {
            animated: true,
            keyboard: true,
            backdrop: true,
            ignoreBackdropClick: false,
            class: 'inmodal modal-dialog-centered modal-md animated fadeIn',
            initialState: {
                team: team
            }
        };
        this.modalRef = this.modalService.show(_components_team_edit_modal_team_edit_modal_component__WEBPACK_IMPORTED_MODULE_14__["TeamEditModalComponent"], modalConfig);
        this.modalRef.content.event.subscribe(function (data) {
            _this.rerender();
        });
    };
    TeamComponent.prototype.openTeamImportModal = function () {
        var _this = this;
        var modalConfig = {
            animated: true,
            keyboard: true,
            backdrop: true,
            ignoreBackdropClick: false,
            class: 'inmodal modal-dialog-centered animated fadeIn'
        };
        this.modalRef = this.modalService.show(_components_import_team_import_team_component__WEBPACK_IMPORTED_MODULE_15__["ImportTeamComponent"], modalConfig);
        this.modalRef.content.event.subscribe(function (data) {
            _this.toastr.success(_this.translate.instant('teams.messages.import'), _this.translate.instant('teams.title'));
            _this.rerender();
        });
    };
    TeamComponent.prototype.removeTeam = function (id) {
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
                // --
                // this.toastr.error(this.translate.instant('common.not_allowed'));
                // return;
                _this.teamService.delete(id)
                    .subscribe(function (data) {
                    _this.toastr.success(_this.translate.instant('teams.messages.delete'), _this.translate.instant('teams.title'));
                    _this.rerender();
                });
            }
        });
    };
    TeamComponent.prototype.saveTeamDetail = function (index, name, value) {
        var _this = this;
        this.teams[index][name] = value;
        var members = [];
        for (var iRow in this.teams[index].members) {
            members.push(this.teams[index].members[iRow].id);
        }
        var team = {
            id: this.teams[index].id,
            team_name: this.teams[index].team_name,
            members: members,
            team_leader: this.teams[index].team_leader,
            description: this.teams[index].description
        };
        this.teamService.update(team)
            .subscribe(function (data) {
            _this.toastr.success(_this.translate.instant('teams.messages.update'), _this.translate.instant('teams.title'));
            _this.rerender();
        });
    };
    TeamComponent.ctorParameters = function () { return [
        { type: _ngx_translate_core__WEBPACK_IMPORTED_MODULE_8__["TranslateService"] },
        { type: ngx_bootstrap_modal__WEBPACK_IMPORTED_MODULE_6__["BsModalService"] },
        { type: _angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"] },
        { type: _angular_router__WEBPACK_IMPORTED_MODULE_3__["ActivatedRoute"] },
        { type: _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClient"] },
        { type: ngx_export_as__WEBPACK_IMPORTED_MODULE_5__["ExportAsService"] },
        { type: ngx_toastr__WEBPACK_IMPORTED_MODULE_7__["ToastrService"] },
        { type: _core_services_team_service__WEBPACK_IMPORTED_MODULE_11__["TeamService"] },
        { type: _core_services_authentication_service__WEBPACK_IMPORTED_MODULE_12__["AuthenticationService"] }
    ]; };
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewChild"])(angular_datatables__WEBPACK_IMPORTED_MODULE_4__["DataTableDirective"], { static: true }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", angular_datatables__WEBPACK_IMPORTED_MODULE_4__["DataTableDirective"])
    ], TeamComponent.prototype, "dtElement", void 0);
    TeamComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-team',
            template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./team.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/modules/admin/team/pages/team/team.component.html")).default,
            styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./team.component.scss */ "./src/app/modules/admin/team/pages/team/team.component.scss")).default]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_ngx_translate_core__WEBPACK_IMPORTED_MODULE_8__["TranslateService"],
            ngx_bootstrap_modal__WEBPACK_IMPORTED_MODULE_6__["BsModalService"],
            _angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"],
            _angular_router__WEBPACK_IMPORTED_MODULE_3__["ActivatedRoute"],
            _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClient"],
            ngx_export_as__WEBPACK_IMPORTED_MODULE_5__["ExportAsService"],
            ngx_toastr__WEBPACK_IMPORTED_MODULE_7__["ToastrService"],
            _core_services_team_service__WEBPACK_IMPORTED_MODULE_11__["TeamService"],
            _core_services_authentication_service__WEBPACK_IMPORTED_MODULE_12__["AuthenticationService"]])
    ], TeamComponent);
    return TeamComponent;
}());



/***/ }),

/***/ "./src/app/modules/admin/team/team-routing.module.ts":
/*!***********************************************************!*\
  !*** ./src/app/modules/admin/team/team-routing.module.ts ***!
  \***********************************************************/
/*! exports provided: TeamRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TeamRoutingModule", function() { return TeamRoutingModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _pages_team_team_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./pages/team/team.component */ "./src/app/modules/admin/team/pages/team/team.component.ts");




var routes = [
    {
        path: '',
        component: _pages_team_team_component__WEBPACK_IMPORTED_MODULE_3__["TeamComponent"]
    }
];
var TeamRoutingModule = /** @class */ (function () {
    function TeamRoutingModule() {
    }
    TeamRoutingModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)],
            exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]]
        })
    ], TeamRoutingModule);
    return TeamRoutingModule;
}());



/***/ }),

/***/ "./src/app/modules/admin/team/team.module.ts":
/*!***************************************************!*\
  !*** ./src/app/modules/admin/team/team.module.ts ***!
  \***************************************************/
/*! exports provided: TeamModule, HttpLoaderFactory */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TeamModule", function() { return TeamModule; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "HttpLoaderFactory", function() { return HttpLoaderFactory; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");
/* harmony import */ var ngx_bootstrap__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ngx-bootstrap */ "./node_modules/ngx-bootstrap/esm5/ngx-bootstrap.js");
/* harmony import */ var ngx_export_as__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ngx-export-as */ "./node_modules/ngx-export-as/fesm2015/ngx-export-as.js");
/* harmony import */ var _ng_select_ng_select__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @ng-select/ng-select */ "./node_modules/@ng-select/ng-select/fesm5/ng-select.js");
/* harmony import */ var ngx_editor__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ngx-editor */ "./node_modules/ngx-editor/fesm5/ngx-editor.js");
/* harmony import */ var _ngx_translate_core__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @ngx-translate/core */ "./node_modules/@ngx-translate/core/fesm5/ngx-translate-core.js");
/* harmony import */ var _ngx_translate_http_loader__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @ngx-translate/http-loader */ "./node_modules/@ngx-translate/http-loader/fesm5/ngx-translate-http-loader.js");
/* harmony import */ var ngx_permissions__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ngx-permissions */ "./node_modules/ngx-permissions/ngx-permissions.umd.js");
/* harmony import */ var ngx_permissions__WEBPACK_IMPORTED_MODULE_11___default = /*#__PURE__*/__webpack_require__.n(ngx_permissions__WEBPACK_IMPORTED_MODULE_11__);
/* harmony import */ var angular_datatables__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! angular-datatables */ "./node_modules/angular-datatables/index.js");
/* harmony import */ var _shared_shared_module__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ../../../shared/shared.module */ "./src/app/shared/shared.module.ts");
/* harmony import */ var _team_routing_module__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ./team-routing.module */ "./src/app/modules/admin/team/team-routing.module.ts");
/* harmony import */ var _pages_team_team_component__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! ./pages/team/team.component */ "./src/app/modules/admin/team/pages/team/team.component.ts");
/* harmony import */ var _components_team_create_modal_team_create_modal_component__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! ./components/team-create-modal/team-create-modal.component */ "./src/app/modules/admin/team/components/team-create-modal/team-create-modal.component.ts");
/* harmony import */ var _components_team_edit_modal_team_edit_modal_component__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! ./components/team-edit-modal/team-edit-modal.component */ "./src/app/modules/admin/team/components/team-edit-modal/team-edit-modal.component.ts");
/* harmony import */ var _components_import_team_import_team_component__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! ./components/import-team/import-team.component */ "./src/app/modules/admin/team/components/import-team/import-team.component.ts");



















var TeamModule = /** @class */ (function () {
    function TeamModule() {
    }
    TeamModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            declarations: [
                _pages_team_team_component__WEBPACK_IMPORTED_MODULE_15__["TeamComponent"],
                _components_team_create_modal_team_create_modal_component__WEBPACK_IMPORTED_MODULE_16__["TeamCreateModalComponent"],
                _components_team_edit_modal_team_edit_modal_component__WEBPACK_IMPORTED_MODULE_17__["TeamEditModalComponent"],
                _components_import_team_import_team_component__WEBPACK_IMPORTED_MODULE_18__["ImportTeamComponent"]
            ],
            imports: [
                _angular_common__WEBPACK_IMPORTED_MODULE_3__["CommonModule"],
                _ng_select_ng_select__WEBPACK_IMPORTED_MODULE_7__["NgSelectModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormsModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_2__["ReactiveFormsModule"],
                _team_routing_module__WEBPACK_IMPORTED_MODULE_14__["TeamRoutingModule"],
                angular_datatables__WEBPACK_IMPORTED_MODULE_12__["DataTablesModule"],
                ngx_export_as__WEBPACK_IMPORTED_MODULE_6__["ExportAsModule"],
                ngx_editor__WEBPACK_IMPORTED_MODULE_8__["NgxEditorModule"],
                ngx_permissions__WEBPACK_IMPORTED_MODULE_11__["NgxPermissionsModule"],
                ngx_bootstrap__WEBPACK_IMPORTED_MODULE_5__["ModalModule"].forRoot(),
                ngx_bootstrap__WEBPACK_IMPORTED_MODULE_5__["TooltipModule"].forRoot(),
                ngx_bootstrap__WEBPACK_IMPORTED_MODULE_5__["BsDropdownModule"].forRoot(),
                _ngx_translate_core__WEBPACK_IMPORTED_MODULE_9__["TranslateModule"].forChild({
                    loader: {
                        provide: _ngx_translate_core__WEBPACK_IMPORTED_MODULE_9__["TranslateLoader"],
                        useFactory: (HttpLoaderFactory),
                        deps: [_angular_common_http__WEBPACK_IMPORTED_MODULE_4__["HttpClient"]]
                    }
                }),
                _shared_shared_module__WEBPACK_IMPORTED_MODULE_13__["SharedModule"]
            ],
            entryComponents: [_components_team_create_modal_team_create_modal_component__WEBPACK_IMPORTED_MODULE_16__["TeamCreateModalComponent"], _components_team_edit_modal_team_edit_modal_component__WEBPACK_IMPORTED_MODULE_17__["TeamEditModalComponent"], _components_import_team_import_team_component__WEBPACK_IMPORTED_MODULE_18__["ImportTeamComponent"]],
        })
    ], TeamModule);
    return TeamModule;
}());

// Required for AOT compilation
function HttpLoaderFactory(http) {
    return new _ngx_translate_http_loader__WEBPACK_IMPORTED_MODULE_10__["TranslateHttpLoader"](http, './assets/i18n/', '.json');
}


/***/ })

}]);
//# sourceMappingURL=modules-admin-team-team-module.js.map