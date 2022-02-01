(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["modules-pm-reports-reports-module"],{

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/modules/pm/reports/components/defect-reports/defect-reports.component.html":
/*!**********************************************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/modules/pm/reports/components/defect-reports/defect-reports.component.html ***!
  \**********************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<!-- Card header -->\r\n<div class=\"pl-0 pr-0 border-bottom\">\r\n    <h4 class=\"main-title mt-2\"><span>{{'reports.headings.defect_report' | translate}}</span></h4>\r\n</div><!-- Card body -->\r\n<div class=\"card-body pt-3 overflow-x-scroll overflow-y-hidden\">\r\n    <div class=\"row\">\r\n        <div class=\"col-lg-12 mb-3\">\r\n            <div class=\"table-responsive-xs table-responsive-sm table-responsive-md table-responsive-lg table-responsive-xl\">\r\n                <table [dtOptions]=\"dtOptions\" [dtTrigger]=\"dtTrigger\" class=\"table table-bordered table-hover b4-datatable\" datatable id=\"defects_table\" width=\"100%\">\r\n                    <thead>\r\n                    <tr class=\"display_all\">\r\n                        <th>{{'defects.columns.id' | translate}}</th>\r\n                        <th>{{'defects.columns.defect_name' | translate}}</th>\r\n                        <th>{{'defects.columns.start_date' | translate}}</th>\r\n                        <th>{{'defects.columns.end_date' | translate}}</th>\r\n                        <th>{{'defects.columns.actual_hours' | translate}}</th>\r\n                        <th>{{'defects.columns.creator' | translate}}</th>\r\n                        <th>{{'defects.columns.assigned' | translate}}</th>\r\n                        <th>{{'defects.columns.type' | translate}}</th>\r\n                        <th>{{'defects.columns.severity' | translate}}</th>\r\n                        <th>{{'defects.columns.status' | translate}}</th>\r\n                        <th>{{'defects.columns.project' | translate}}</th>\r\n                        <th>{{'defects.columns.project_version' | translate}}</th>\r\n                    </tr>\r\n                    </thead>\r\n                    <tbody *ngIf=\"defects?.length != 0\">\r\n                    <tr *ngFor=\"let defect of defects\">\r\n                        <td>{{defect.generated_id}}</td>\r\n                        <td>{{defect.defect_name}}</td>\r\n                        <td>{{defect.start_date | dateTimeFormatFilter: loginUser.settings.date_format }}</td>\r\n                        <td>{{defect.end_date | dateTimeFormatFilter: loginUser.settings.date_format }}</td>\r\n                        <td>\r\n                            <ng-container *ngIf=\"defect.actual_hours else elseBlock2;\">{{defect.actual_hours}}</ng-container>\r\n                            <ng-template #elseBlock2>-</ng-template>\r\n                        </td>\r\n                        <td class=\"people-lists\">\r\n                            <a [routerLink]=\"['/users/profile', defect.create_user_id]\" class=\"btn btn-profile-info rounded-circle text-dark\" tooltip=\"{{defect.created_firstname}} {{defect.created_lastname}}\">\r\n                                <img *ngIf=\"defect.created_avatar\" alt=\"Profile\" class=\"img-sm rounded-circle\" src=\"{{apiUrl}}/uploads/profile/{{defect.created_avatar}}\"/>\r\n                                <img *ngIf=\"!defect.created_avatar\" alt=\"Profile\" class=\"img-sm rounded-circle\" src=\"../assets/img/profile_small.jpg\"/>\r\n                            </a>\r\n                        </td>\r\n                        <td class=\"people-lists\">\r\n                            <ng-container *ngIf=\"defect.assign_member == 'Unassign' || defect.assign_member == '' || defect.assign_member == null; else elseBlock1;\">\r\n                                <a class=\"btn btn-profile-danger rounded-circle text-dark\" href=\"javascript:void(0);\" placement=\"top\" tooltip=\"{{'common.unassigned' | translate}}\">\r\n                                    <img alt=\"Profile\" class=\"img-sm rounded-circle\" src=\"../assets/img/unassign.jpg\"/>\r\n                                </a>\r\n                            </ng-container>\r\n                            <ng-template #elseBlock1>\r\n                                <a [routerLink]=\"['/users/profile', defect.assign_member]\" class=\"btn btn-profile-danger rounded-circle text-dark\" placement=\"top\" tooltip=\"{{defect.assigned_firstname}} {{defect.assigned_lastname}}\">\r\n                                    <img *ngIf=\"defect.assigned_avatar\" alt=\"Profile\" class=\"img-sm rounded-circle\" src=\"{{apiUrl}}/uploads/profile/{{defect.assigned_avatar}}\"/>\r\n                                    <img *ngIf=\"!defect.assigned_avatar\" alt=\"Profile\" class=\"img-sm rounded-circle\" src=\"../assets/img/profile_small.jpg\"/>\r\n                                </a>\r\n                            </ng-template>\r\n                        </td>\r\n                        <td class=\"budges-status\">\r\n                            <ng-container *ngFor=\"let type of ('defects.defect_types' | translate)\">\r\n                                <span *ngIf=\"type.id == defect.defect_type\" class=\"badge badge-secondary\">{{type.label}}</span>\r\n                            </ng-container>\r\n                        </td>\r\n                        <td class=\"budges-status\">\r\n                            <ng-container *ngFor=\"let severity of ('defects.severities' | translate)\">\r\n                                <span *ngIf=\"severity.id == defect.severity\" class=\"badge {{severity.class}}\">{{severity.label}}</span>\r\n                            </ng-container>\r\n                        </td>\r\n                        <td class=\"budges-status\">\r\n                            <ng-container *ngFor=\"let status of ('defects.status' | translate)\">\r\n                                <span *ngIf=\"status.id == defect.status\" class=\"badge {{status.class}}\">{{status.label}}</span>\r\n                            </ng-container>\r\n                        </td>\r\n                        <td>{{defect.project_name}}</td>\r\n                        <td><span class=\"badge badge-secondary\">{{defect.project_version}}</span></td>\r\n                    </tr>\r\n                    </tbody>\r\n                    <tfoot>\r\n                    <tr>\r\n                        <th>\r\n                            <input class=\"form-control\" name=\"defect_ID\" placeholder=\"{{'defects.columns.id' | translate}}\" type=\"text\"/>\r\n                        </th>\r\n                        <th>\r\n                            <input class=\"form-control\" name=\"defect_Id\" placeholder=\"{{'defects.columns.defect_name' | translate}}\" type=\"text\"/>\r\n                        </th>\r\n                        <th>\r\n                            <input class=\"form-control\" name=\"start_date\" placeholder=\"{{'defects.columns.start_date' | translate}}\" type=\"text\"/>\r\n                        </th>\r\n                        <th>\r\n                            <input class=\"form-control\" name=\"end_date\" placeholder=\"{{'defects.columns.end_date' | translate}}\" type=\"text\"/>\r\n                        </th>\r\n                        <th>\r\n                            <input class=\"form-control\" name=\"actual_hours\" placeholder=\"{{'defects.columns.actual_hours' | translate}}\" type=\"text\"/>\r\n                        </th>\r\n                        <th>\r\n                            <input class=\"form-control\" name=\"created\" placeholder=\"{{'defects.columns.creator' | translate}}\" type=\"text\"/>\r\n                        </th>\r\n                        <th>\r\n                            <input class=\"form-control\" name=\"assigned\" placeholder=\"{{'defects.columns.assigned' | translate}}\" type=\"text\"/>\r\n                        </th>\r\n                        <th>\r\n                            <input class=\"form-control\" name=\"type\" placeholder=\"{{'defects.columns.type' | translate}}\" type=\"text\"/>\r\n                        </th>\r\n                        <th>\r\n                            <input class=\"form-control\" name=\"Severity\" placeholder=\"{{'defects.columns.severity' | translate}}\" type=\"text\"/>\r\n                        </th>\r\n                        <th>\r\n                            <input class=\"form-control\" name=\"status\" placeholder=\"{{'defects.columns.status' | translate}}\" type=\"text\"/>\r\n                        </th>\r\n                        <th>\r\n                            <input class=\"form-control\" name=\"project\" placeholder=\"{{'defects.columns.project' | translate}}\" type=\"text\"/>\r\n                        </th>\r\n                        <th>\r\n                            <input class=\"form-control\" name=\"project_version\" placeholder=\"{{'defects.columns.project_version' | translate}}\" type=\"text\"/>\r\n                        </th>\r\n                    </tr>\r\n                    </tfoot>\r\n                    <tfoot *ngIf=\"defects?.length == 0\" class=\"tfoot_dt\">\r\n                    <tr>\r\n                        <td class=\"text-center\" colspan=\"12\">\r\n                            <img src=\"assets/img/norecord-img.png\" width=\"50\">\r\n                            <p class=\"mt-1\">{{'common.empty_message.defects' | translate}}</p>\r\n                        </td>\r\n                    </tr>\r\n                    </tfoot>\r\n                </table>\r\n            </div>\r\n        </div>\r\n    </div>\r\n</div>\r\n");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/modules/pm/reports/components/incident-reports/incident-reports.component.html":
/*!**************************************************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/modules/pm/reports/components/incident-reports/incident-reports.component.html ***!
  \**************************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<!-- Card header -->\r\n<div class=\"pl-0 pr-0 border-bottom\">\r\n    <h4 class=\"main-title mt-2\"><span>{{'reports.headings.incident_report' | translate}}</span></h4>\r\n</div><!-- Card body -->\r\n<div class=\"card-body pt-3 overflow-x-scroll overflow-y-hidden\">\r\n    <div class=\"row\">\r\n        <div class=\"col-lg-12 mb-3\">\r\n            <div class=\"table-responsive-xs table-responsive-sm table-responsive-md table-responsive-lg table-responsive-xl\">\r\n                <table [dtOptions]=\"dtOptions\" [dtTrigger]=\"dtTrigger\" class=\"table table-bordered table-hover b4-datatable\" datatable id=\"incidents_table\" width=\"100%\">\r\n                    <thead>\r\n                    <tr class=\"display_all\">\r\n                        <th>{{'incidents.columns.id' | translate}}</th>\r\n                        <th>{{'incidents.columns.incident_name' | translate}}</th>\r\n                        <th>{{'incidents.columns.start_date' | translate}}</th>\r\n                        <th>{{'incidents.columns.end_date' | translate}}</th>\r\n                        <th>{{'incidents.columns.actual_hours' | translate}}</th>\r\n                        <th>{{'incidents.columns.creator' | translate}}</th>\r\n                        <th>{{'incidents.columns.assigned' | translate}}</th>\r\n                        <th>{{'incidents.columns.type' | translate}}</th>\r\n                        <th>{{'incidents.columns.priority' | translate}}</th>\r\n                        <th>{{'incidents.columns.status' | translate}}</th>\r\n                        <th>{{'incidents.columns.project' | translate}}</th>\r\n                        <th>{{'incidents.columns.project_version' | translate}}</th>\r\n                    </tr>\r\n                    </thead>\r\n                    <tbody *ngIf=\"incidents?.length != 0\">\r\n                    <tr *ngFor=\"let incident of incidents\">\r\n                        <td>{{incident.generated_id}}</td>\r\n                        <td>{{incident.incident_name}}</td>\r\n                        <td>{{incident.start_date | dateTimeFormatFilter: loginUser.settings.date_format }}</td>\r\n                        <td>{{incident.end_date | dateTimeFormatFilter: loginUser.settings.date_format }}</td>\r\n                        <td>\r\n                            <ng-container *ngIf=\"incident.actual_hours else elseBlock2;\">{{incident.actual_hours}}</ng-container>\r\n                            <ng-template #elseBlock2>-</ng-template>\r\n                        </td>\r\n                        <td class=\"people-lists\">\r\n                            <a [routerLink]=\"['/users/profile', incident.create_user_id]\" class=\"btn btn-profile-info rounded-circle text-dark\" tooltip=\"{{incident.created_firstname}} {{incident.created_lastname}}\">\r\n                                <img *ngIf=\"incident.created_avatar\" alt=\"Profile\" class=\"img-sm rounded-circle\" src=\"{{apiUrl}}/uploads/profile/{{incident.created_avatar}}\"/>\r\n                                <img *ngIf=\"!incident.created_avatar\" alt=\"Profile\" class=\"img-sm rounded-circle\" src=\"../assets/img/profile_small.jpg\"/>\r\n                            </a>\r\n                        </td>\r\n                        <td class=\"people-lists\">\r\n                            <ng-container *ngIf=\"incident.assign_to == 'Unassign' || incident.assign_to == '' || incident.assign_to == null; else elseBlock\">\r\n                                <a class=\"btn btn-profile-danger rounded-circle text-dark\" href=\"javascript:void(0);\" placement=\"top\" tooltip=\"{{'common.unassigned' | translate}}\">\r\n                                    <img alt=\"Profile\" class=\"img-sm rounded-circle\" src=\"../assets/img/unassign.jpg\"/>\r\n                                </a>\r\n                            </ng-container>\r\n                            <ng-template #elseBlock>\r\n                                <a [routerLink]=\"['/users/profile', incident.assign_to]\" class=\"btn btn-profile-info rounded-circle text-dark\" tooltip=\"{{incident.assigned_firstname}} {{incident.assigned_lastname}}\">\r\n                                    <img *ngIf=\"incident.assigned_avatar\" alt=\"Profile\" class=\"img-sm rounded-circle\" src=\"{{apiUrl}}/uploads/profile/{{incident.assigned_avatar}}\"/>\r\n                                    <img *ngIf=\"!incident.assigned_avatar\" alt=\"Profile\" class=\"img-sm rounded-circle\" src=\"../assets/img/profile_small.jpg\"/>\r\n                                </a>\r\n                            </ng-template>\r\n                        </td>\r\n                        <td class=\"budges-status\">\r\n                            <ng-container *ngFor=\"let type of ('incidents.incident_types' | translate)\">\r\n                                <span *ngIf=\"type.id == incident.incident_type\" class=\"badge badge-secondary\">{{type.label}}</span>\r\n                            </ng-container>\r\n                        </td>\r\n                        <td class=\"budges-status\">\r\n                            <ng-container *ngFor=\"let priority of ('incidents.priorities' | translate)\">\r\n                                <span *ngIf=\"priority.id == incident.priority\" class=\"badge {{priority.class}}\">{{priority.label}}</span>\r\n                            </ng-container>\r\n                        </td>\r\n                        <td class=\"budges-status\">\r\n                            <ng-container *ngFor=\"let status of ('incidents.status' | translate)\">\r\n                                <span *ngIf=\"status.id == incident.status\" class=\"badge {{status.class}}\">{{status.label}}</span>\r\n                            </ng-container>\r\n                        </td>\r\n                        <td>{{incident.project_name}}</td>\r\n                        <td><span class=\"badge badge-secondary\">{{incident.project_version}}</span></td>\r\n                    </tr>\r\n                    </tbody>\r\n                    <tfoot>\r\n                    <tr>\r\n                        <th>\r\n                            <input class=\"form-control\" name=\"incident_Id\" placeholder=\"{{'incidents.columns.id' | translate}}\" type=\"text\"/>\r\n                        </th>\r\n                        <th>\r\n                            <input class=\"form-control\" name=\"incident_name\" placeholder=\"{{'incidents.columns.incident_name' | translate}}\" type=\"text\"/>\r\n                        </th>\r\n                        <th>\r\n                            <input class=\"form-control\" name=\"start_date\" placeholder=\"{{'incidents.columns.start_date' | translate}}\" type=\"text\"/>\r\n                        </th>\r\n                        <th>\r\n                            <input class=\"form-control\" name=\"end_date\" placeholder=\"{{'incidents.columns.end_date' | translate}}\" type=\"text\"/>\r\n                        </th>\r\n                        <th>\r\n                            <input class=\"form-control\" name=\"actual_hours\" placeholder=\"{{'incidents.columns.actual_hours' | translate}}\" type=\"text\"/>\r\n                        </th>\r\n                        <th>\r\n                            <input class=\"form-control\" name=\"created\" placeholder=\"{{'incidents.columns.creator' | translate}}\" type=\"text\"/>\r\n                        </th>\r\n                        <th>\r\n                            <input class=\"form-control\" name=\"assigned\" placeholder=\"{{'incidents.columns.assigned' | translate}}\" type=\"text\"/>\r\n                        </th>\r\n                        <th>\r\n                            <input class=\"form-control\" name=\"incident_type\" placeholder=\"{{'incidents.columns.type' | translate}}\" type=\"text\"/>\r\n                        </th>\r\n                        <th>\r\n                            <input class=\"form-control\" name=\"priority\" placeholder=\"{{'incidents.columns.priority' | translate}}\" type=\"text\"/>\r\n                        </th>\r\n                        <th>\r\n                            <input class=\"form-control\" name=\"status\" placeholder=\"{{'incidents.columns.status' | translate}}\" type=\"text\"/>\r\n                        </th>\r\n                        <th>\r\n                            <input class=\"form-control\" name=\"project\" placeholder=\"{{'incidents.columns.project' | translate}}\" type=\"text\"/>\r\n                        </th>\r\n                        <th>\r\n                            <input class=\"form-control\" name=\"project_version\" placeholder=\"{{'incidents.columns.project_version' | translate}}\" type=\"text\"/>\r\n                        </th>\r\n                    </tr>\r\n                    </tfoot>\r\n                    <tfoot *ngIf=\"incidents?.length == 0\" class=\"tfoot_dt\">\r\n                    <tr>\r\n                        <td class=\"text-center\" colspan=\"12\">\r\n                            <img src=\"assets/img/norecord-img.png\" width=\"50\">\r\n                            <p class=\"mt-1\">{{'common.empty_message.incidents' | translate}}</p>\r\n                        </td>\r\n                    </tr>\r\n                    </tfoot>\r\n                </table>\r\n            </div>\r\n        </div>\r\n    </div>\r\n</div>\r\n");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/modules/pm/reports/components/project-reports/project-reports.component.html":
/*!************************************************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/modules/pm/reports/components/project-reports/project-reports.component.html ***!
  \************************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<!-- Card header -->\r\n<div class=\"pl-0 pr-0 border-bottom\">\r\n    <h4 class=\"main-title mt-2\"><span>{{'reports.headings.project_report' | translate}}</span></h4>\r\n</div><!-- Card body -->\r\n<div class=\"card-body pt-3 overflow-x-scroll overflow-y-hidden\">\r\n    <div class=\"row\">\r\n        <div class=\"col-lg-12 mb-3\">\r\n            <div class=\"table-responsive-xs table-responsive-sm table-responsive-md table-responsive-lg table-responsive-xl\">\r\n                <table [dtOptions]=\"dtOptions\" [dtTrigger]=\"dtTrigger\" class=\"table table-bordered table-hover b4-datatable\" datatable id=\"projects_table\">\r\n                    <thead>\r\n                    <tr class=\"display_all\">\r\n                        <th>{{'projects.columns.id' | translate}}</th>\r\n                        <th>{{'projects.columns.project_name' | translate}}</th>\r\n                        <th>{{'projects.columns.version' | translate}}</th>\r\n                        <th>{{'projects.columns.start' | translate}}</th>\r\n                        <th>{{'projects.columns.end' | translate}}</th>\r\n                        <th>{{'projects.columns.hours' | translate}}</th>\r\n                        <th>{{'projects.columns.progress' | translate}}</th>\r\n                        <th>{{'projects.columns.creator' | translate}}</th>\r\n                        <th>{{'projects.columns.assigned_To' | translate}}</th>\r\n                        <th>{{'projects.columns.status' | translate}}</th>\r\n                        <th>{{'projects.columns.billing' | translate}}</th>\r\n                        <th>{{'projects.columns.budget' | translate}}</th>\r\n                        <th>{{'projects.columns.client' | translate}}</th>\r\n                    </tr>\r\n                    </thead>\r\n                    <tbody *ngIf=\"projects?.length != 0\">\r\n                    <tr *ngFor=\"let project of projects\">\r\n                        <td>{{project.generated_id}}</td>\r\n                        <td>{{project.project_name}}</td>\r\n                        <td><span class=\"badge badge-secondary\">{{project.project_version}}</span></td>\r\n                        <td>{{project.start_date | dateTimeFormatFilter: loginUser.settings.date_format }}</td>\r\n                        <td>{{project.end_date | dateTimeFormatFilter: loginUser.settings.date_format }}</td>\r\n                        <td>\r\n                            <ng-container *ngIf=\"project.actual_hours else elseBlock4;\">{{project.actual_hours}}</ng-container>\r\n                            <ng-template #elseBlock4>-</ng-template>\r\n                        </td>\r\n                        <td>{{project.progress}}%</td>\r\n                        <td class=\"people-lists\">\r\n                            <a [routerLink]=\"['/users/profile', project.created_id]\" class=\"btn btn-profile-info rounded-circle text-dark\" tooltip=\"{{project.created_firstname}} {{project.created_lastname}}\">\r\n                                <img *ngIf=\"project.created_avatar\" alt=\"Profile\" class=\"img-sm rounded-circle\" src=\"{{apiUrl}}/uploads/profile/{{project.created_avatar}}\"/>\r\n                                <img *ngIf=\"!project.created_avatar\" alt=\"Profile\" class=\"img-sm rounded-circle\" src=\"../assets/img/profile_small.jpg\"/>\r\n                            </a>\r\n                        </td>\r\n                        <td class=\"people-lists\">\r\n                            <ng-container *ngIf=\"project.assign_members == 'Unassign' || project.assign_members == '' || project.assign_members == null; else elseBlock1;\">\r\n                                <a class=\"btn btn-profile-danger rounded-circle popover-item text-dark\" href=\"javascript:void(0);\" placement=\"top\" tooltip=\"{{'common.unassigned' | translate}}\">\r\n                                    <img alt=\"Profile\" class=\"img-sm rounded-circle\" src=\"../assets/img/unassign.jpg\"/>\r\n                                </a>\r\n                            </ng-container>\r\n                            <ng-template #elseBlock1>\r\n                                <ng-container *ngFor=\"let user_id of project.assign_members | stringToArrayFilter index as i; odd as isOdd; even as isEven\">\r\n                                    <a *ngIf=\"userLists[user_id]\" [ngClass]=\"{'btn-profile-info': isOdd, 'btn-profile-danger': isEven}\" [routerLink]=\"['/users/profile', user_id]\" class=\"btn rounded-circle popover-item text-dark\" tooltip=\"{{userLists[user_id].firstname}} {{userLists[user_id].lastname}}\">\r\n                                        <img *ngIf=\"userLists[user_id].avatar\" alt=\"Profile\" class=\"img-sm rounded-circle\" src=\"{{apiUrl}}/uploads/profile/{{userLists[user_id].avatar}}\"/>\r\n                                        <img *ngIf=\"!userLists[user_id].avatar\" alt=\"Profile\" class=\"img-sm rounded-circle\" src=\"../assets/img/profile_small.jpg\"/>\r\n                                    </a>\r\n                                </ng-container>\r\n                            </ng-template>\r\n                        </td>\r\n                        <td class=\"budges-status\">\r\n                            <ng-container *ngFor=\"let status of ('projects.status' | translate)\">\r\n                                <span *ngIf=\"status.id == project.status\" class=\"badge {{status.class}}\">{{status.label}}</span>\r\n                            </ng-container>\r\n                        </td>\r\n                        <td>\r\n                            <ng-container *ngIf=\"project.billing_type; else elseBlock2;\">\r\n                                <ng-container *ngFor=\"let type of ('projects.billing_types' | translate)\">\r\n                                    <span *ngIf=\"type.id == project.billing_type\" class=\"badge badge-secondary\">{{type.label}}</span>\r\n                                </ng-container>\r\n                            </ng-container>\r\n                            <ng-template #elseBlock2>-</ng-template>\r\n                        </td>\r\n                        <td>\r\n                            <ng-container *ngIf=\"project.price_rate else elseBlock3;\">{{project.price_rate}}</ng-container>\r\n                            <ng-template #elseBlock3>-</ng-template>\r\n                        </td>\r\n                        <td class=\"people-lists\">\r\n                            <ng-container *ngIf=\"project.client_id; else elseBlock5;\">\r\n                                <a [routerLink]=\"['/users/profile', project.client_id]\" class=\"btn btn-profile-info rounded-circle text-dark\" tooltip=\"{{project.client_firstname}} {{project.client_lastname}}\">\r\n                                    <img *ngIf=\"project.client_avatar\" alt=\"Profile\" class=\"img-sm rounded-circle\" src=\"{{apiUrl}}/uploads/profile/{{project.client_avatar}}\"/>\r\n                                    <img *ngIf=\"!project.client_avatar\" alt=\"Profile\" class=\"img-sm rounded-circle\" src=\"../assets/img/profile_small.jpg\"/>\r\n                                </a>\r\n                            </ng-container>\r\n                            <ng-template #elseBlock5>-</ng-template>\r\n                        </td>\r\n                    </tr>\r\n                    </tbody>\r\n                    <tfoot>\r\n                    <tr>\r\n                        <th>\r\n                            <input class=\"form-control\" name=\"generated_id\" placeholder=\"{{'projects.columns.id' | translate}}\" type=\"text\"/>\r\n                        </th>\r\n                        <th>\r\n                            <input class=\"form-control\" name=\"project_name\" placeholder=\"{{'projects.columns.project_name' | translate}}\" type=\"text\"/>\r\n                        </th>\r\n                        <th>\r\n                            <input class=\"form-control\" name=\"project_version\" placeholder=\"{{'projects.columns.version' | translate}}\" type=\"text\"/>\r\n                        </th>\r\n                        <th>\r\n                            <input class=\"form-control\" name=\"start_date\" placeholder=\"{{'projects.columns.start' | translate}}\" type=\"text\"/>\r\n                        </th>\r\n                        <th>\r\n                            <input class=\"form-control\" name=\"end_date\" placeholder=\"{{'projects.columns.end' | translate}}\" type=\"text\"/>\r\n                        </th>\r\n                        <th>\r\n                            <input class=\"form-control\" name=\"hours\" placeholder=\"{{'projects.columns.hours' | translate}}\" type=\"text\"/>\r\n                        </th>\r\n                        <th>\r\n                            <input class=\"form-control\" name=\"progress\" placeholder=\"{{'projects.columns.progress' | translate}}\" type=\"text\"/>\r\n                        </th>\r\n                        <th>\r\n                            <input class=\"form-control\" name=\"created\" placeholder=\"{{'projects.columns.creator' | translate}}\" type=\"text\"/>\r\n                        </th>\r\n                        <th>\r\n                            <input class=\"form-control\" name=\"assigned\" placeholder=\"{{'projects.columns.assigned_To' | translate}}\" type=\"text\"/>\r\n                        </th>\r\n                        <th>\r\n                            <input class=\"form-control\" name=\"status\" placeholder=\"{{'projects.columns.status' | translate}}\" type=\"text\"/>\r\n                        </th>\r\n                        <th>\r\n                            <input class=\"form-control\" name=\"billing\" placeholder=\"{{'projects.columns.billing' | translate}}\" type=\"text\"/>\r\n                        </th>\r\n                        <th>\r\n                            <input class=\"form-control\" name=\"budget\" placeholder=\"{{'projects.columns.budget' | translate}}\" type=\"text\"/>\r\n                        </th>\r\n                        <th>\r\n                            <input class=\"form-control\" name=\"client\" placeholder=\"{{'projects.columns.client' | translate}}\" type=\"text\"/>\r\n                        </th>\r\n                    </tr>\r\n                    </tfoot>\r\n                    <tfoot *ngIf=\"projects?.length == 0\" class=\"tfoot_dt\">\r\n                    <tr>\r\n                        <td class=\"text-center\" colspan=\"13\">\r\n                            <img src=\"assets/img/norecord-img.png\" width=\"50\">\r\n                            <p class=\"mt-1\">{{ 'common.empty_message.projects' | translate }}</p>\r\n                        </td>\r\n                    </tr>\r\n                    </tfoot>\r\n                </table>\r\n            </div>\r\n        </div>\r\n    </div>\r\n</div>\r\n");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/modules/pm/reports/components/task-reports/task-reports.component.html":
/*!******************************************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/modules/pm/reports/components/task-reports/task-reports.component.html ***!
  \******************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<!-- Card header -->\r\n<div class=\"pl-0 pr-0 border-bottom\">\r\n    <h4 class=\"main-title mt-2\"><span>{{'reports.headings.task_report' | translate}}</span></h4>\r\n</div><!-- Card body -->\r\n<div class=\"card-body pt-3 overflow-x-scroll overflow-y-hidden\">\r\n    <div class=\"row\">\r\n        <div class=\"col-lg-12 mb-3\">\r\n            <div class=\"table-responsive-xs table-responsive-sm table-responsive-md table-responsive-lg table-responsive-xl\">\r\n                <table [dtOptions]=\"dtOptions\" [dtTrigger]=\"dtTrigger\" class=\"table table-bordered table-hover b4-datatable\" datatable id=\"tasks_table\" width=\"100%\">\r\n                    <thead>\r\n                    <tr class=\"display_all\">\r\n                        <th>{{'tasks.columns.id' | translate}}</th>\r\n                        <th>{{'tasks.columns.task_name' | translate}}</th>\r\n                        <th>{{'tasks.columns.planned_start' | translate}}</th>\r\n                        <th>{{'tasks.columns.planned_end' | translate}}</th>\r\n                        <th>{{'tasks.columns.start_date' | translate}}</th>\r\n                        <th>{{'tasks.columns.end_date' | translate}}</th>\r\n                        <th>{{'tasks.columns.hours' | translate}}</th>\r\n                        <th>{{'tasks.columns.progress' | translate}}</th>\r\n                        <th>{{'tasks.columns.creator' | translate}}</th>\r\n                        <th>{{'tasks.columns.assigned' | translate}}</th>\r\n                        <th>{{'tasks.columns.priority' | translate}}</th>\r\n                        <th>{{'tasks.columns.status' | translate}}</th>\r\n                        <th>{{'tasks.columns.project' | translate}}</th>\r\n                        <th>{{'tasks.columns.project_version' | translate}}</th>\r\n                    </tr>\r\n                    </thead>\r\n                    <tbody *ngIf=\"tasks?.length != 0\">\r\n                    <tr *ngFor=\"let task of tasks\">\r\n                        <td>{{task.generated_id}}</td>\r\n                        <td>{{task.name}}</td>\r\n                        <td>{{task.planned_start_date | dateTimeFormatFilter: loginUser.settings.date_format }}</td>\r\n                        <td>{{task.planned_end_date | dateTimeFormatFilter: loginUser.settings.date_format }}</td>\r\n                        <td>{{task.task_start_date | dateTimeFormatFilter: loginUser.settings.date_time_format }}</td>\r\n                        <td>{{task.task_end_date | dateTimeFormatFilter: loginUser.settings.date_time_format }}</td>\r\n                        <td>\r\n                            <ng-container *ngIf=\"task.actual_hours else elseBlock1;\">{{task.actual_hours}}</ng-container>\r\n                            <ng-template #elseBlock1>-</ng-template>\r\n                        </td>\r\n                        <td>{{task.progress}}%</td>\r\n                        <td class=\"people-lists\">\r\n                            <a [routerLink]=\"['/users/profile', task.created_by]\" class=\"btn btn-profile-danger rounded-circle text-dark\" tooltip=\"{{task.created_firstname}} {{task.created_lastname}}\">\r\n                                <img *ngIf=\"task.created_avatar\" alt=\"Profile\" class=\"img-sm rounded-circle\" src=\"{{apiUrl}}/uploads/profile/{{task.created_avatar}}\"/>\r\n                                <img *ngIf=\"!task.created_avatar\" alt=\"Profile\" class=\"img-sm rounded-circle\" src=\"../assets/img/profile_small.jpg\"/>\r\n                            </a>\r\n                        </td>\r\n                        <td class=\"people-lists\">\r\n                            <ng-container *ngIf=\"task.assign_to == null; else elseBlock2\">\r\n                                <a class=\"btn btn-profile-danger rounded-circle text-dark\" href=\"javascript:void(0);\" placement=\"top\" tooltip=\"{{'common.unassigned' | translate}}\">\r\n                                    <img alt=\"Profile\" class=\"img-sm rounded-circle\" src=\"../assets/img/unassign.jpg\"/>\r\n                                </a>\r\n                            </ng-container>\r\n                            <ng-template #elseBlock2>\r\n                                <a [routerLink]=\"['/users/profile', task.assign_to]\" class=\"btn btn-profile-danger rounded-circle text-dark\" tooltip=\"{{task.assign_firstname}} {{task.assign_lastname}}\">\r\n                                    <img *ngIf=\"task.assign_avatar\" alt=\"Profile\" class=\"img-sm rounded-circle\" src=\"{{apiUrl}}/uploads/profile/{{task.assign_avatar}}\"/>\r\n                                    <img *ngIf=\"!task.assign_avatar\" alt=\"Profile\" class=\"img-sm rounded-circle\" src=\"../assets/img/profile_small.jpg\"/>\r\n                                </a>\r\n                            </ng-template>\r\n                        </td>\r\n                        <td class=\"budges-status\">\r\n                            <ng-container *ngFor=\"let priority of ('tasks.priorities' | translate)\">\r\n                                <span *ngIf=\"priority.id == task.priority\" class=\"badge {{priority.class}}\">{{priority.label}}</span>\r\n                            </ng-container>\r\n                        </td>\r\n                        <td class=\"budges-status\">\r\n                            <ng-container *ngFor=\"let status of ('tasks.status' | translate)\">\r\n                                <span *ngIf=\"status.id == task.status\" class=\"badge {{status.class}}\">{{status.label}}</span>\r\n                            </ng-container>\r\n                        </td>\r\n                        <td>{{task.project_name}}</td>\r\n                        <td><span class=\"badge badge-secondary\">{{task.project_version}}</span></td>\r\n                    </tr>\r\n                    </tbody>\r\n                    <tfoot>\r\n                    <tr>\r\n                        <th>\r\n                            <input class=\"form-control\" name=\"task_id\" placeholder=\"{{'tasks.columns.id' | translate}}\" type=\"text\"/>\r\n                        </th>\r\n                        <th>\r\n                            <input class=\"form-control\" name=\"name\" placeholder=\"{{'tasks.columns.task_name' | translate}}\" type=\"text\"/>\r\n                        </th>\r\n                        <th>\r\n                            <input class=\"form-control\" name=\"planned_start\" placeholder=\"{{'tasks.columns.planned_start' | translate}}\" type=\"text\"/>\r\n                        </th>\r\n                        <th>\r\n                            <input class=\"form-control\" name=\"planned_end\" placeholder=\"{{'tasks.columns.planned_end' | translate}}\" type=\"text\"/>\r\n                        </th>\r\n                        <th>\r\n                            <input class=\"form-control\" name=\"actual_start_date\" placeholder=\"{{'tasks.columns.actual_start' | translate}}\" type=\"text\"/>\r\n                        </th>\r\n                        <th>\r\n                            <input class=\"form-control\" name=\"actual_end_date\" placeholder=\"{{'tasks.columns.actual_end' | translate}}\" type=\"text\"/>\r\n                        </th>\r\n                        <th>\r\n                            <input class=\"form-control\" name=\"actual_hours\" placeholder=\"{{'tasks.columns.hours' | translate}}\" type=\"text\"/>\r\n                        </th>\r\n                        <th>\r\n                            <input class=\"form-control\" name=\"progress\" placeholder=\"{{'tasks.columns.progress' | translate}}\" type=\"text\"/>\r\n                        </th>\r\n                        <th>\r\n                            <input class=\"form-control\" name=\"task_created\" placeholder=\"{{'tasks.columns.creator' | translate}}\" type=\"text\"/>\r\n                        </th>\r\n                        <th>\r\n                            <input class=\"form-control\" name=\"assigned\" placeholder=\"{{'tasks.columns.assigned' | translate}}\" type=\"text\"/>\r\n                        </th>\r\n                        <th>\r\n                            <input class=\"form-control\" name=\"priority\" placeholder=\"{{'tasks.columns.priority' | translate}}\" type=\"text\"/>\r\n                        </th>\r\n                        <th>\r\n                            <input class=\"form-control\" name=\"status\" placeholder=\"{{'tasks.columns.status' | translate}}\" type=\"text\"/>\r\n                        </th>\r\n                        <th>\r\n                            <input class=\"form-control\" name=\"project\" placeholder=\"{{'tasks.columns.project' | translate}}\" type=\"text\"/>\r\n                        </th>\r\n                        <th>\r\n                            <input class=\"form-control\" name=\"project_version\" placeholder=\"{{'tasks.columns.project_version' | translate}}\" type=\"text\"/>\r\n                        </th>\r\n                    </tr>\r\n                    </tfoot>\r\n                    <tfoot *ngIf=\"tasks?.length == 0\" class=\"tfoot_dt\">\r\n                    <tr>\r\n                        <td class=\"text-center\" colspan=\"14\">\r\n                            <img src=\"assets/img/norecord-img.png\" width=\"50\">\r\n                            <p class=\"mt-1\">{{ 'common.empty_message.tasks' | translate }}</p>\r\n                        </td>\r\n                    </tr>\r\n                    </tfoot>\r\n                </table>\r\n            </div>\r\n        </div>\r\n    </div>\r\n</div>\r\n");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/modules/pm/reports/pages/reports/reports.component.html":
/*!***************************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/modules/pm/reports/pages/reports/reports.component.html ***!
  \***************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<section class=\"detail-page\">\r\n    <div class=\"card\">\r\n        <tabset class=\"nav nav-tabs d-flex justify-content-center mb-2\">\r\n            <tab (selectTab)=\"setActiveReportTab($event)\" customClass=\"text-left active\" id=\"1\">\r\n                <ng-template tabHeading>\r\n                    <div class=\"d-flex\">\r\n                        <i class=\"fa fa-product-hunt\"></i><span class=\"mt-1 ml-1\">{{'reports.headings.project_report' | translate}}</span>\r\n                    </div>\r\n                </ng-template>\r\n                <app-project-reports *ngIf=\"getActiveReportTab('1')\"></app-project-reports>\r\n            </tab>\r\n            <tab (selectTab)=\"setActiveReportTab($event)\" customClass=\"text-left\" id=\"2\">\r\n                <ng-template tabHeading>\r\n                    <div class=\"d-flex\">\r\n                        <i class=\"fa fa-tasks\"></i><span class=\"mt-1 ml-1\">{{'reports.headings.task_report' | translate}}</span>\r\n                    </div>\r\n                </ng-template>\r\n                <app-task-reports *ngIf=\"getActiveReportTab('2')\"></app-task-reports>\r\n            </tab>\r\n            <tab (selectTab)=\"setActiveReportTab($event)\" customClass=\"text-left\" id=\"3\">\r\n                <ng-template tabHeading>\r\n                    <div class=\"d-flex\">\r\n                        <i class=\"fa fa-bug\"></i><span class=\"mt-1 ml-1\">{{'reports.headings.defect_report' | translate}}</span>\r\n                    </div>\r\n                </ng-template>\r\n                <app-defect-reports *ngIf=\"getActiveReportTab('3')\"></app-defect-reports>\r\n            </tab>\r\n            <tab (selectTab)=\"setActiveReportTab($event)\" customClass=\"text-left\" id=\"4\">\r\n                <ng-template tabHeading>\r\n                    <div class=\"d-flex\">\r\n                        <i class=\"fa fa-ticket\"></i><span class=\"mt-1 ml-1\">{{'reports.headings.incident_report' | translate}}</span>\r\n                    </div>\r\n                </ng-template>\r\n                <app-incident-reports *ngIf=\"getActiveReportTab('4')\"></app-incident-reports>\r\n            </tab>\r\n        </tabset>\r\n    </div>\r\n</section>\r\n");

/***/ }),

/***/ "./src/app/modules/pm/reports/components/defect-reports/defect-reports.component.scss":
/*!********************************************************************************************!*\
  !*** ./src/app/modules/pm/reports/components/defect-reports/defect-reports.component.scss ***!
  \********************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("::ng-deep .odd {\n  display: none;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvbW9kdWxlcy9wbS9yZXBvcnRzL2NvbXBvbmVudHMvZGVmZWN0LXJlcG9ydHMvQzpcXFVzZXJzXFx0aHVhblxcT25lRHJpdmVcXERlc2t0b3BcXGdsYXZhbC10aHVhbmRpbmgvc3JjXFxhcHBcXG1vZHVsZXNcXHBtXFxyZXBvcnRzXFxjb21wb25lbnRzXFxkZWZlY3QtcmVwb3J0c1xcZGVmZWN0LXJlcG9ydHMuY29tcG9uZW50LnNjc3MiLCJzcmMvYXBwL21vZHVsZXMvcG0vcmVwb3J0cy9jb21wb25lbnRzL2RlZmVjdC1yZXBvcnRzL2RlZmVjdC1yZXBvcnRzLmNvbXBvbmVudC5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0ksYUFBQTtBQ0NKIiwiZmlsZSI6InNyYy9hcHAvbW9kdWxlcy9wbS9yZXBvcnRzL2NvbXBvbmVudHMvZGVmZWN0LXJlcG9ydHMvZGVmZWN0LXJlcG9ydHMuY29tcG9uZW50LnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyI6Om5nLWRlZXAgLm9kZCB7XHJcbiAgICBkaXNwbGF5OiBub25lXHJcbn0iLCI6Om5nLWRlZXAgLm9kZCB7XG4gIGRpc3BsYXk6IG5vbmU7XG59Il19 */");

/***/ }),

/***/ "./src/app/modules/pm/reports/components/defect-reports/defect-reports.component.ts":
/*!******************************************************************************************!*\
  !*** ./src/app/modules/pm/reports/components/defect-reports/defect-reports.component.ts ***!
  \******************************************************************************************/
/*! exports provided: DefectReportsComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DefectReportsComponent", function() { return DefectReportsComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");
/* harmony import */ var ngx_export_as__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ngx-export-as */ "./node_modules/ngx-export-as/fesm2015/ngx-export-as.js");
/* harmony import */ var _ngx_translate_core__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ngx-translate/core */ "./node_modules/@ngx-translate/core/fesm5/ngx-translate-core.js");
/* harmony import */ var angular_datatables__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! angular-datatables */ "./node_modules/angular-datatables/index.js");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! rxjs */ "./node_modules/rxjs/_esm5/index.js");
/* harmony import */ var _core_services_authentication_service__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../../../../../core/services/authentication.service */ "./src/app/core/services/authentication.service.ts");
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../../../../../../environments/environment */ "./src/environments/environment.ts");
/* harmony import */ var datatables_net__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! datatables.net */ "./node_modules/datatables.net/js/jquery.dataTables.js");
/* harmony import */ var datatables_net__WEBPACK_IMPORTED_MODULE_9___default = /*#__PURE__*/__webpack_require__.n(datatables_net__WEBPACK_IMPORTED_MODULE_9__);
/* harmony import */ var datatables_net_bs4__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! datatables.net-bs4 */ "./node_modules/datatables.net-bs4/js/dataTables.bootstrap4.js");
/* harmony import */ var datatables_net_bs4__WEBPACK_IMPORTED_MODULE_10___default = /*#__PURE__*/__webpack_require__.n(datatables_net_bs4__WEBPACK_IMPORTED_MODULE_10__);











var DefectReportsComponent = /** @class */ (function () {
    function DefectReportsComponent(translate, http, authenticationService, exportAsService) {
        var _this = this;
        this.translate = translate;
        this.http = http;
        this.authenticationService = authenticationService;
        this.exportAsService = exportAsService;
        this.dtTrigger = new rxjs__WEBPACK_IMPORTED_MODULE_6__["Subject"]();
        this.dtOptions = {};
        this.defects = [];
        this.isPageLoaded = false;
        this.exportAsConfig = {
            type: 'pdf',
            elementIdOrContent: 'defects_table',
        };
        this.apiUrl = _environments_environment__WEBPACK_IMPORTED_MODULE_8__["environment"].apiUrl;
        this.authenticationService.loginUser.subscribe(function (x) { return _this.loginUser = x; });
    }
    DefectReportsComponent.prototype.ngOnInit = function () {
        this.loadDatatable();
    };
    DefectReportsComponent.prototype.loadDatatable = function () {
        var _this = this;
        var that = this;
        this.dtOptions = {
            pagingType: 'full_numbers',
            pageLength: that.loginUser.settings.tables_pagination_limit,
            serverSide: true,
            responsive: true,
            searching: true,
            processing: true,
            dom: '<"html5buttons"B>ltfrtip',
            order: [0],
            columns: [
                {
                    'sortable': true,
                    'target': [0]
                },
                {
                    'sortable': true,
                    'target': [1]
                },
                {
                    'sortable': true,
                    'target': [2]
                },
                {
                    'sortable': true,
                    'target': [3]
                },
                {
                    'sortable': true,
                    'target': [4]
                },
                {
                    'sortable': true,
                    'target': [5]
                },
                {
                    'sortable': true,
                    'target': [6]
                },
                {
                    'sortable': true,
                    'target': [7]
                },
                {
                    'sortable': true,
                    'target': [8]
                },
                {
                    'sortable': true,
                    'target': [9]
                },
                {
                    'sortable': true,
                    'target': [10]
                },
                {
                    'sortable': true,
                    'target': [11]
                }
            ],
            buttons: [
                {
                    extend: 'csv',
                    title: this.translate.instant('reports.headings.defect_report'),
                    className: 'btn btn-datatable-gredient',
                    action: function (e, dt, node, config) {
                        that.exportFiles('csv');
                    }
                }, {
                    extend: 'excel',
                    title: this.translate.instant('reports.headings.defect_report'),
                    className: 'btn btn-datatable-gredient',
                    action: function (e, dt, node, config) {
                        that.exportFiles('xlsx');
                    }
                }, {
                    extend: 'pdf',
                    title: this.translate.instant('reports.headings.defect_report'),
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
                    .post(_this.apiUrl + '/api/defect/defect-report', dataTablesParameters, {})
                    .subscribe(function (resp) {
                    _this.defects = resp.data;
                    _this.isPageLoaded = true;
                    callback({
                        recordsTotal: resp.recordsTotal,
                        recordsFiltered: resp.recordsFiltered,
                        data: [],
                    });
                });
            }
        };
    };
    DefectReportsComponent.prototype.exportFiles = function (type) {
        this.exportAsConfig.type = type;
        this.exportAsService.save(this.exportAsConfig, this.translate.instant('reports.headings.defect_report')).subscribe(function () {
        });
    };
    DefectReportsComponent.prototype.ngOnDestroy = function () {
        this.dtTrigger.unsubscribe();
    };
    DefectReportsComponent.prototype.rerender = function () {
        var _this = this;
        this.dtElement.dtInstance.then(function (dtInstance) {
            dtInstance.destroy();
            setTimeout(function () {
                _this.dtTrigger.next();
                if (_this.defects.length > 0) {
                    $('.tfoot_dt').addClass('d-none');
                }
                else {
                    $('.tfoot_dt').removeClass('d-none');
                }
            });
        });
    };
    DefectReportsComponent.prototype.ngAfterViewInit = function () {
        this.dtTrigger.next();
        this.dtElement.dtInstance.then(function (dtInstance) {
            dtInstance.columns().every(function () {
                var that = this;
                $('input', this.footer()).on('keyup change', function () {
                    if (that.search() !== this['value']) {
                        that.search(this['value']).draw();
                    }
                });
            });
        });
    };
    DefectReportsComponent.ctorParameters = function () { return [
        { type: _ngx_translate_core__WEBPACK_IMPORTED_MODULE_4__["TranslateService"] },
        { type: _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClient"] },
        { type: _core_services_authentication_service__WEBPACK_IMPORTED_MODULE_7__["AuthenticationService"] },
        { type: ngx_export_as__WEBPACK_IMPORTED_MODULE_3__["ExportAsService"] }
    ]; };
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewChild"])(angular_datatables__WEBPACK_IMPORTED_MODULE_5__["DataTableDirective"], { static: true }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", angular_datatables__WEBPACK_IMPORTED_MODULE_5__["DataTableDirective"])
    ], DefectReportsComponent.prototype, "dtElement", void 0);
    DefectReportsComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-defect-reports',
            template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./defect-reports.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/modules/pm/reports/components/defect-reports/defect-reports.component.html")).default,
            styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./defect-reports.component.scss */ "./src/app/modules/pm/reports/components/defect-reports/defect-reports.component.scss")).default]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_ngx_translate_core__WEBPACK_IMPORTED_MODULE_4__["TranslateService"],
            _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClient"],
            _core_services_authentication_service__WEBPACK_IMPORTED_MODULE_7__["AuthenticationService"],
            ngx_export_as__WEBPACK_IMPORTED_MODULE_3__["ExportAsService"]])
    ], DefectReportsComponent);
    return DefectReportsComponent;
}());



/***/ }),

/***/ "./src/app/modules/pm/reports/components/incident-reports/incident-reports.component.scss":
/*!************************************************************************************************!*\
  !*** ./src/app/modules/pm/reports/components/incident-reports/incident-reports.component.scss ***!
  \************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("::ng-deep .odd {\n  display: none;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvbW9kdWxlcy9wbS9yZXBvcnRzL2NvbXBvbmVudHMvaW5jaWRlbnQtcmVwb3J0cy9DOlxcVXNlcnNcXHRodWFuXFxPbmVEcml2ZVxcRGVza3RvcFxcZ2xhdmFsLXRodWFuZGluaC9zcmNcXGFwcFxcbW9kdWxlc1xccG1cXHJlcG9ydHNcXGNvbXBvbmVudHNcXGluY2lkZW50LXJlcG9ydHNcXGluY2lkZW50LXJlcG9ydHMuY29tcG9uZW50LnNjc3MiLCJzcmMvYXBwL21vZHVsZXMvcG0vcmVwb3J0cy9jb21wb25lbnRzL2luY2lkZW50LXJlcG9ydHMvaW5jaWRlbnQtcmVwb3J0cy5jb21wb25lbnQuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNJLGFBQUE7QUNDSiIsImZpbGUiOiJzcmMvYXBwL21vZHVsZXMvcG0vcmVwb3J0cy9jb21wb25lbnRzL2luY2lkZW50LXJlcG9ydHMvaW5jaWRlbnQtcmVwb3J0cy5jb21wb25lbnQuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIjo6bmctZGVlcCAub2RkIHtcclxuICAgIGRpc3BsYXk6IG5vbmVcclxufSIsIjo6bmctZGVlcCAub2RkIHtcbiAgZGlzcGxheTogbm9uZTtcbn0iXX0= */");

/***/ }),

/***/ "./src/app/modules/pm/reports/components/incident-reports/incident-reports.component.ts":
/*!**********************************************************************************************!*\
  !*** ./src/app/modules/pm/reports/components/incident-reports/incident-reports.component.ts ***!
  \**********************************************************************************************/
/*! exports provided: IncidentReportsComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "IncidentReportsComponent", function() { return IncidentReportsComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");
/* harmony import */ var angular_datatables__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! angular-datatables */ "./node_modules/angular-datatables/index.js");
/* harmony import */ var ngx_export_as__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ngx-export-as */ "./node_modules/ngx-export-as/fesm2015/ngx-export-as.js");
/* harmony import */ var _ngx_translate_core__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @ngx-translate/core */ "./node_modules/@ngx-translate/core/fesm5/ngx-translate-core.js");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! rxjs */ "./node_modules/rxjs/_esm5/index.js");
/* harmony import */ var _core_services_authentication_service__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../../../../../core/services/authentication.service */ "./src/app/core/services/authentication.service.ts");
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../../../../../../environments/environment */ "./src/environments/environment.ts");
/* harmony import */ var datatables_net__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! datatables.net */ "./node_modules/datatables.net/js/jquery.dataTables.js");
/* harmony import */ var datatables_net__WEBPACK_IMPORTED_MODULE_9___default = /*#__PURE__*/__webpack_require__.n(datatables_net__WEBPACK_IMPORTED_MODULE_9__);
/* harmony import */ var datatables_net_bs4__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! datatables.net-bs4 */ "./node_modules/datatables.net-bs4/js/dataTables.bootstrap4.js");
/* harmony import */ var datatables_net_bs4__WEBPACK_IMPORTED_MODULE_10___default = /*#__PURE__*/__webpack_require__.n(datatables_net_bs4__WEBPACK_IMPORTED_MODULE_10__);











var IncidentReportsComponent = /** @class */ (function () {
    function IncidentReportsComponent(translate, http, authenticationService, exportAsService) {
        var _this = this;
        this.translate = translate;
        this.http = http;
        this.authenticationService = authenticationService;
        this.exportAsService = exportAsService;
        this.dtTrigger = new rxjs__WEBPACK_IMPORTED_MODULE_6__["Subject"]();
        this.dtOptions = {};
        this.incidents = [];
        this.isPageLoaded = false;
        this.exportAsConfig = {
            type: 'pdf',
            elementIdOrContent: 'incidents_table',
        };
        this.apiUrl = _environments_environment__WEBPACK_IMPORTED_MODULE_8__["environment"].apiUrl;
        this.authenticationService.loginUser.subscribe(function (x) { return _this.loginUser = x; });
    }
    IncidentReportsComponent.prototype.ngOnInit = function () {
        this.loadDatatable();
    };
    IncidentReportsComponent.prototype.loadDatatable = function () {
        var _this = this;
        var that = this;
        this.dtOptions = {
            pagingType: 'full_numbers',
            pageLength: that.loginUser.settings.tables_pagination_limit,
            serverSide: true,
            responsive: true,
            searching: true,
            processing: true,
            dom: '<"html5buttons"B>ltfrtip',
            order: [0],
            columns: [
                {
                    'sortable': true,
                    'target': [0]
                },
                {
                    'sortable': true,
                    'target': [1]
                },
                {
                    'sortable': true,
                    'target': [2]
                },
                {
                    'sortable': true,
                    'target': [3]
                },
                {
                    'sortable': true,
                    'target': [4]
                },
                {
                    'sortable': true,
                    'target': [5]
                },
                {
                    'sortable': true,
                    'target': [6]
                },
                {
                    'sortable': true,
                    'target': [7]
                },
                {
                    'sortable': true,
                    'target': [8]
                },
                {
                    'sortable': true,
                    'target': [9]
                },
                {
                    'sortable': true,
                    'target': [10]
                },
                {
                    'sortable': true,
                    'target': [11]
                }
            ],
            buttons: [
                {
                    extend: 'csv',
                    title: this.translate.instant('reports.headings.incident_report'),
                    className: 'btn btn-datatable-gredient',
                    action: function (e, dt, node, config) {
                        that.exportFiles('csv');
                    }
                }, {
                    extend: 'excel',
                    title: this.translate.instant('reports.headings.incident_report'),
                    className: 'btn btn-datatable-gredient',
                    action: function (e, dt, node, config) {
                        that.exportFiles('xlsx');
                    }
                }, {
                    extend: 'pdf',
                    title: this.translate.instant('reports.headings.incident_report'),
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
                    .post(_this.apiUrl + '/api/incident/incident-report', dataTablesParameters, {})
                    .subscribe(function (resp) {
                    _this.incidents = resp.data;
                    _this.isPageLoaded = true;
                    callback({
                        recordsTotal: resp.recordsTotal,
                        recordsFiltered: resp.recordsFiltered,
                        data: [],
                    });
                });
            }
        };
    };
    IncidentReportsComponent.prototype.exportFiles = function (type) {
        this.exportAsConfig.type = type;
        this.exportAsService.save(this.exportAsConfig, this.translate.instant('reports.headings.incident_report')).subscribe(function () {
        });
    };
    IncidentReportsComponent.prototype.ngOnDestroy = function () {
        this.dtTrigger.unsubscribe();
    };
    IncidentReportsComponent.prototype.rerender = function () {
        var _this = this;
        this.dtElement.dtInstance.then(function (dtInstance) {
            dtInstance.destroy();
            setTimeout(function () {
                _this.dtTrigger.next();
                if (_this.incidents.length > 0) {
                    $('.tfoot_dt').addClass('d-none');
                }
                else {
                    $('.tfoot_dt').removeClass('d-none');
                }
            });
        });
    };
    IncidentReportsComponent.prototype.ngAfterViewInit = function () {
        this.dtTrigger.next();
        this.dtElement.dtInstance.then(function (dtInstance) {
            dtInstance.columns().every(function () {
                var that = this;
                $('input', this.footer()).on('keyup change', function () {
                    if (that.search() !== this['value']) {
                        that.search(this['value']).draw();
                    }
                });
            });
        });
    };
    IncidentReportsComponent.ctorParameters = function () { return [
        { type: _ngx_translate_core__WEBPACK_IMPORTED_MODULE_5__["TranslateService"] },
        { type: _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClient"] },
        { type: _core_services_authentication_service__WEBPACK_IMPORTED_MODULE_7__["AuthenticationService"] },
        { type: ngx_export_as__WEBPACK_IMPORTED_MODULE_4__["ExportAsService"] }
    ]; };
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewChild"])(angular_datatables__WEBPACK_IMPORTED_MODULE_3__["DataTableDirective"], { static: true }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", angular_datatables__WEBPACK_IMPORTED_MODULE_3__["DataTableDirective"])
    ], IncidentReportsComponent.prototype, "dtElement", void 0);
    IncidentReportsComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-incident-reports',
            template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./incident-reports.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/modules/pm/reports/components/incident-reports/incident-reports.component.html")).default,
            styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./incident-reports.component.scss */ "./src/app/modules/pm/reports/components/incident-reports/incident-reports.component.scss")).default]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_ngx_translate_core__WEBPACK_IMPORTED_MODULE_5__["TranslateService"],
            _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClient"],
            _core_services_authentication_service__WEBPACK_IMPORTED_MODULE_7__["AuthenticationService"],
            ngx_export_as__WEBPACK_IMPORTED_MODULE_4__["ExportAsService"]])
    ], IncidentReportsComponent);
    return IncidentReportsComponent;
}());



/***/ }),

/***/ "./src/app/modules/pm/reports/components/project-reports/project-reports.component.scss":
/*!**********************************************************************************************!*\
  !*** ./src/app/modules/pm/reports/components/project-reports/project-reports.component.scss ***!
  \**********************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("::ng-deep .odd {\n  display: none;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvbW9kdWxlcy9wbS9yZXBvcnRzL2NvbXBvbmVudHMvcHJvamVjdC1yZXBvcnRzL0M6XFxVc2Vyc1xcdGh1YW5cXE9uZURyaXZlXFxEZXNrdG9wXFxnbGF2YWwtdGh1YW5kaW5oL3NyY1xcYXBwXFxtb2R1bGVzXFxwbVxccmVwb3J0c1xcY29tcG9uZW50c1xccHJvamVjdC1yZXBvcnRzXFxwcm9qZWN0LXJlcG9ydHMuY29tcG9uZW50LnNjc3MiLCJzcmMvYXBwL21vZHVsZXMvcG0vcmVwb3J0cy9jb21wb25lbnRzL3Byb2plY3QtcmVwb3J0cy9wcm9qZWN0LXJlcG9ydHMuY29tcG9uZW50LnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDSSxhQUFBO0FDQ0oiLCJmaWxlIjoic3JjL2FwcC9tb2R1bGVzL3BtL3JlcG9ydHMvY29tcG9uZW50cy9wcm9qZWN0LXJlcG9ydHMvcHJvamVjdC1yZXBvcnRzLmNvbXBvbmVudC5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiOjpuZy1kZWVwIC5vZGQge1xyXG4gICAgZGlzcGxheTogbm9uZVxyXG59IiwiOjpuZy1kZWVwIC5vZGQge1xuICBkaXNwbGF5OiBub25lO1xufSJdfQ== */");

/***/ }),

/***/ "./src/app/modules/pm/reports/components/project-reports/project-reports.component.ts":
/*!********************************************************************************************!*\
  !*** ./src/app/modules/pm/reports/components/project-reports/project-reports.component.ts ***!
  \********************************************************************************************/
/*! exports provided: ProjectReportsComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ProjectReportsComponent", function() { return ProjectReportsComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");
/* harmony import */ var angular_datatables__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! angular-datatables */ "./node_modules/angular-datatables/index.js");
/* harmony import */ var ngx_export_as__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ngx-export-as */ "./node_modules/ngx-export-as/fesm2015/ngx-export-as.js");
/* harmony import */ var _ngx_translate_core__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @ngx-translate/core */ "./node_modules/@ngx-translate/core/fesm5/ngx-translate-core.js");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! rxjs */ "./node_modules/rxjs/_esm5/index.js");
/* harmony import */ var _core_services_user_service__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../../../../../core/services/user.service */ "./src/app/core/services/user.service.ts");
/* harmony import */ var _core_services_authentication_service__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../../../../../core/services/authentication.service */ "./src/app/core/services/authentication.service.ts");
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../../../../../../environments/environment */ "./src/environments/environment.ts");
/* harmony import */ var datatables_net__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! datatables.net */ "./node_modules/datatables.net/js/jquery.dataTables.js");
/* harmony import */ var datatables_net__WEBPACK_IMPORTED_MODULE_10___default = /*#__PURE__*/__webpack_require__.n(datatables_net__WEBPACK_IMPORTED_MODULE_10__);
/* harmony import */ var datatables_net_bs4__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! datatables.net-bs4 */ "./node_modules/datatables.net-bs4/js/dataTables.bootstrap4.js");
/* harmony import */ var datatables_net_bs4__WEBPACK_IMPORTED_MODULE_11___default = /*#__PURE__*/__webpack_require__.n(datatables_net_bs4__WEBPACK_IMPORTED_MODULE_11__);












var ProjectReportsComponent = /** @class */ (function () {
    function ProjectReportsComponent(translate, http, userService, authenticationService, exportAsService) {
        var _this = this;
        this.translate = translate;
        this.http = http;
        this.userService = userService;
        this.authenticationService = authenticationService;
        this.exportAsService = exportAsService;
        this.dtTrigger = new rxjs__WEBPACK_IMPORTED_MODULE_6__["Subject"]();
        this.isPageLoaded = false;
        this.dtOptions = {};
        this.projects = [];
        this.userLists = [];
        this.exportAsConfig = {
            type: 'pdf',
            elementIdOrContent: 'projects_table',
        };
        this.apiUrl = _environments_environment__WEBPACK_IMPORTED_MODULE_9__["environment"].apiUrl;
        this.authenticationService.loginUser.subscribe(function (x) { return _this.loginUser = x; });
    }
    ProjectReportsComponent.prototype.ngOnInit = function () {
        this.getUserkeyBy();
        this.loadProjectDatatable();
    };
    ProjectReportsComponent.prototype.getUserkeyBy = function () {
        var _this = this;
        this.userService.getUserkeyBy().subscribe(function (data) {
            _this.userLists = data;
        });
    };
    ProjectReportsComponent.prototype.loadProjectDatatable = function () {
        var _this = this;
        var that = this;
        this.dtOptions = {
            pagingType: 'full_numbers',
            pageLength: that.loginUser.settings.tables_pagination_limit,
            serverSide: true,
            searching: true,
            processing: true,
            responsive: true,
            dom: '<"html5buttons"B>ltfrtip',
            order: [0],
            columns: [
                {
                    'sortable': true,
                    'target': [0]
                },
                {
                    'sortable': true,
                    'target': [1]
                },
                {
                    'sortable': true,
                    'target': [2]
                },
                {
                    'sortable': true,
                    'target': [3]
                },
                {
                    'sortable': true,
                    'target': [4]
                },
                {
                    'sortable': true,
                    'target': [5]
                },
                {
                    'sortable': true,
                    'target': [6]
                },
                {
                    'sortable': true,
                    'target': [7]
                },
                {
                    'sortable': true,
                    'target': [8]
                },
                {
                    'sortable': true,
                    'target': [9]
                },
                {
                    'sortable': true,
                    'target': [10]
                },
                {
                    'sortable': true,
                    'target': [11]
                },
                {
                    'sortable': true,
                    'target': [12]
                }
            ],
            buttons: [
                {
                    extend: 'csv',
                    title: this.translate.instant('reports.headings.project_report'),
                    className: 'btn btn-datatable-gredient',
                    action: function (e, dt, node, config) {
                        that.exportFiles('csv');
                    }
                }, {
                    extend: 'excel',
                    title: this.translate.instant('reports.headings.project_report'),
                    className: 'btn btn-datatable-gredient',
                    action: function (e, dt, node, config) {
                        that.exportFiles('xlsx');
                    }
                }, {
                    extend: 'pdf',
                    title: this.translate.instant('reports.headings.project_report'),
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
                    .post(_this.apiUrl + '/api/projects/project-report', dataTablesParameters, {})
                    .subscribe(function (resp) {
                    _this.projects = resp.data;
                    _this.isPageLoaded = true;
                    callback({
                        recordsTotal: resp.recordsTotal,
                        recordsFiltered: resp.recordsFiltered,
                        data: [],
                    });
                });
            }
        };
    };
    ProjectReportsComponent.prototype.exportFiles = function (type) {
        this.exportAsConfig.type = type;
        this.exportAsService.save(this.exportAsConfig, this.translate.instant('reports.headings.project_report')).subscribe(function () {
        });
    };
    ProjectReportsComponent.prototype.ngOnDestroy = function () {
        this.dtTrigger.unsubscribe();
    };
    ProjectReportsComponent.prototype.rerender = function () {
        var _this = this;
        this.dtElement.dtInstance.then(function (dtInstance) {
            dtInstance.destroy();
            setTimeout(function () {
                _this.dtTrigger.next();
                if (_this.projects.length > 0) {
                    $('.tfoot_dt').addClass('d-none');
                }
                else {
                    $('.tfoot_dt').removeClass('d-none');
                }
            });
        });
    };
    ProjectReportsComponent.prototype.ngAfterViewInit = function () {
        this.dtTrigger.next();
        this.dtElement.dtInstance.then(function (dtInstance) {
            dtInstance.columns().every(function () {
                var that = this;
                $('input', this.footer()).on('keyup change', function () {
                    if (that.search() !== this['value']) {
                        that.search(this['value']).draw();
                    }
                });
            });
        });
    };
    ProjectReportsComponent.ctorParameters = function () { return [
        { type: _ngx_translate_core__WEBPACK_IMPORTED_MODULE_5__["TranslateService"] },
        { type: _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClient"] },
        { type: _core_services_user_service__WEBPACK_IMPORTED_MODULE_7__["UserService"] },
        { type: _core_services_authentication_service__WEBPACK_IMPORTED_MODULE_8__["AuthenticationService"] },
        { type: ngx_export_as__WEBPACK_IMPORTED_MODULE_4__["ExportAsService"] }
    ]; };
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewChild"])(angular_datatables__WEBPACK_IMPORTED_MODULE_3__["DataTableDirective"], { static: true }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", angular_datatables__WEBPACK_IMPORTED_MODULE_3__["DataTableDirective"])
    ], ProjectReportsComponent.prototype, "dtElement", void 0);
    ProjectReportsComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-project-reports',
            template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./project-reports.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/modules/pm/reports/components/project-reports/project-reports.component.html")).default,
            styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./project-reports.component.scss */ "./src/app/modules/pm/reports/components/project-reports/project-reports.component.scss")).default]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_ngx_translate_core__WEBPACK_IMPORTED_MODULE_5__["TranslateService"],
            _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClient"],
            _core_services_user_service__WEBPACK_IMPORTED_MODULE_7__["UserService"],
            _core_services_authentication_service__WEBPACK_IMPORTED_MODULE_8__["AuthenticationService"],
            ngx_export_as__WEBPACK_IMPORTED_MODULE_4__["ExportAsService"]])
    ], ProjectReportsComponent);
    return ProjectReportsComponent;
}());



/***/ }),

/***/ "./src/app/modules/pm/reports/components/task-reports/task-reports.component.scss":
/*!****************************************************************************************!*\
  !*** ./src/app/modules/pm/reports/components/task-reports/task-reports.component.scss ***!
  \****************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("::ng-deep .odd {\n  display: none;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvbW9kdWxlcy9wbS9yZXBvcnRzL2NvbXBvbmVudHMvdGFzay1yZXBvcnRzL0M6XFxVc2Vyc1xcdGh1YW5cXE9uZURyaXZlXFxEZXNrdG9wXFxnbGF2YWwtdGh1YW5kaW5oL3NyY1xcYXBwXFxtb2R1bGVzXFxwbVxccmVwb3J0c1xcY29tcG9uZW50c1xcdGFzay1yZXBvcnRzXFx0YXNrLXJlcG9ydHMuY29tcG9uZW50LnNjc3MiLCJzcmMvYXBwL21vZHVsZXMvcG0vcmVwb3J0cy9jb21wb25lbnRzL3Rhc2stcmVwb3J0cy90YXNrLXJlcG9ydHMuY29tcG9uZW50LnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDSSxhQUFBO0FDQ0oiLCJmaWxlIjoic3JjL2FwcC9tb2R1bGVzL3BtL3JlcG9ydHMvY29tcG9uZW50cy90YXNrLXJlcG9ydHMvdGFzay1yZXBvcnRzLmNvbXBvbmVudC5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiOjpuZy1kZWVwIC5vZGQge1xyXG4gICAgZGlzcGxheTogbm9uZVxyXG59IiwiOjpuZy1kZWVwIC5vZGQge1xuICBkaXNwbGF5OiBub25lO1xufSJdfQ== */");

/***/ }),

/***/ "./src/app/modules/pm/reports/components/task-reports/task-reports.component.ts":
/*!**************************************************************************************!*\
  !*** ./src/app/modules/pm/reports/components/task-reports/task-reports.component.ts ***!
  \**************************************************************************************/
/*! exports provided: TaskReportsComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TaskReportsComponent", function() { return TaskReportsComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");
/* harmony import */ var angular_datatables__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! angular-datatables */ "./node_modules/angular-datatables/index.js");
/* harmony import */ var ngx_export_as__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ngx-export-as */ "./node_modules/ngx-export-as/fesm2015/ngx-export-as.js");
/* harmony import */ var _ngx_translate_core__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @ngx-translate/core */ "./node_modules/@ngx-translate/core/fesm5/ngx-translate-core.js");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! rxjs */ "./node_modules/rxjs/_esm5/index.js");
/* harmony import */ var _core_services_authentication_service__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../../../../../core/services/authentication.service */ "./src/app/core/services/authentication.service.ts");
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../../../../../../environments/environment */ "./src/environments/environment.ts");
/* harmony import */ var datatables_net__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! datatables.net */ "./node_modules/datatables.net/js/jquery.dataTables.js");
/* harmony import */ var datatables_net__WEBPACK_IMPORTED_MODULE_9___default = /*#__PURE__*/__webpack_require__.n(datatables_net__WEBPACK_IMPORTED_MODULE_9__);
/* harmony import */ var datatables_net_bs4__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! datatables.net-bs4 */ "./node_modules/datatables.net-bs4/js/dataTables.bootstrap4.js");
/* harmony import */ var datatables_net_bs4__WEBPACK_IMPORTED_MODULE_10___default = /*#__PURE__*/__webpack_require__.n(datatables_net_bs4__WEBPACK_IMPORTED_MODULE_10__);











var TaskReportsComponent = /** @class */ (function () {
    function TaskReportsComponent(translate, http, authenticationService, exportAsService) {
        var _this = this;
        this.translate = translate;
        this.http = http;
        this.authenticationService = authenticationService;
        this.exportAsService = exportAsService;
        this.dtTrigger = new rxjs__WEBPACK_IMPORTED_MODULE_6__["Subject"]();
        this.dtOptions = {};
        this.tasks = [];
        this.isPageLoaded = false;
        this.exportAsConfig = {
            type: 'pdf',
            elementIdOrContent: 'tasks_table',
        };
        this.apiUrl = _environments_environment__WEBPACK_IMPORTED_MODULE_8__["environment"].apiUrl;
        this.authenticationService.loginUser.subscribe(function (x) { return _this.loginUser = x; });
    }
    TaskReportsComponent.prototype.ngOnInit = function () {
        this.loadDatatable();
    };
    TaskReportsComponent.prototype.loadDatatable = function () {
        var _this = this;
        var that = this;
        this.dtOptions = {
            pagingType: 'full_numbers',
            pageLength: that.loginUser.settings.tables_pagination_limit,
            serverSide: true,
            searching: true,
            processing: true,
            responsive: true,
            dom: '<"html5buttons"B>ltfrtip',
            order: [0],
            columns: [
                {
                    'sortable': true,
                    'target': [0]
                },
                {
                    'sortable': true,
                    'target': [1]
                },
                {
                    'sortable': true,
                    'target': [2]
                },
                {
                    'sortable': true,
                    'target': [3]
                },
                {
                    'sortable': true,
                    'target': [4]
                },
                {
                    'sortable': true,
                    'target': [5]
                },
                {
                    'sortable': true,
                    'target': [6]
                },
                {
                    'sortable': true,
                    'target': [7]
                },
                {
                    'sortable': true,
                    'target': [8]
                },
                {
                    'sortable': true,
                    'target': [9]
                },
                {
                    'sortable': true,
                    'target': [10]
                },
                {
                    'sortable': true,
                    'target': [11]
                },
                {
                    'sortable': true,
                    'target': [12]
                },
                {
                    'sortable': true,
                    'target': [13]
                }
            ],
            buttons: [
                {
                    extend: 'csv',
                    title: this.translate.instant('reports.headings.task_report'),
                    className: 'btn btn-datatable-gredient',
                    action: function (e, dt, node, config) {
                        that.exportFiles('csv');
                    }
                }, {
                    extend: 'excel',
                    title: this.translate.instant('reports.headings.task_report'),
                    className: 'btn btn-datatable-gredient',
                    action: function (e, dt, node, config) {
                        that.exportFiles('xlsx');
                    }
                }, {
                    extend: 'pdf',
                    title: this.translate.instant('reports.headings.task_report'),
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
                    .post(_this.apiUrl + '/api/tasks/task-report', dataTablesParameters, {})
                    .subscribe(function (resp) {
                    _this.tasks = resp.data;
                    _this.isPageLoaded = true;
                    callback({
                        recordsTotal: resp.recordsTotal,
                        recordsFiltered: resp.recordsFiltered,
                        data: [],
                    });
                });
            }
        };
    };
    TaskReportsComponent.prototype.exportFiles = function (type) {
        this.exportAsConfig.type = type;
        this.exportAsService.save(this.exportAsConfig, this.translate.instant('reports.headings.task_report')).subscribe(function () {
        });
    };
    TaskReportsComponent.prototype.ngOnDestroy = function () {
        this.dtTrigger.unsubscribe();
    };
    TaskReportsComponent.prototype.rerender = function () {
        var _this = this;
        this.dtElement.dtInstance.then(function (dtInstance) {
            dtInstance.destroy();
            setTimeout(function () {
                _this.dtTrigger.next();
                if (_this.tasks.length > 0) {
                    $('.tfoot_dt').addClass('d-none');
                }
                else {
                    $('.tfoot_dt').removeClass('d-none');
                }
            });
        });
    };
    TaskReportsComponent.prototype.ngAfterViewInit = function () {
        this.dtTrigger.next();
        this.dtElement.dtInstance.then(function (dtInstance) {
            dtInstance.columns().every(function () {
                var that = this;
                $('input', this.footer()).on('keyup change', function () {
                    if (that.search() !== this['value']) {
                        that.search(this['value']).draw();
                    }
                });
            });
        });
    };
    TaskReportsComponent.ctorParameters = function () { return [
        { type: _ngx_translate_core__WEBPACK_IMPORTED_MODULE_5__["TranslateService"] },
        { type: _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClient"] },
        { type: _core_services_authentication_service__WEBPACK_IMPORTED_MODULE_7__["AuthenticationService"] },
        { type: ngx_export_as__WEBPACK_IMPORTED_MODULE_4__["ExportAsService"] }
    ]; };
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewChild"])(angular_datatables__WEBPACK_IMPORTED_MODULE_3__["DataTableDirective"], { static: true }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", angular_datatables__WEBPACK_IMPORTED_MODULE_3__["DataTableDirective"])
    ], TaskReportsComponent.prototype, "dtElement", void 0);
    TaskReportsComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-task-reports',
            template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./task-reports.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/modules/pm/reports/components/task-reports/task-reports.component.html")).default,
            styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./task-reports.component.scss */ "./src/app/modules/pm/reports/components/task-reports/task-reports.component.scss")).default]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_ngx_translate_core__WEBPACK_IMPORTED_MODULE_5__["TranslateService"],
            _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClient"],
            _core_services_authentication_service__WEBPACK_IMPORTED_MODULE_7__["AuthenticationService"],
            ngx_export_as__WEBPACK_IMPORTED_MODULE_4__["ExportAsService"]])
    ], TaskReportsComponent);
    return TaskReportsComponent;
}());



/***/ }),

/***/ "./src/app/modules/pm/reports/pages/reports/reports.component.scss":
/*!*************************************************************************!*\
  !*** ./src/app/modules/pm/reports/pages/reports/reports.component.scss ***!
  \*************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL21vZHVsZXMvcG0vcmVwb3J0cy9wYWdlcy9yZXBvcnRzL3JlcG9ydHMuY29tcG9uZW50LnNjc3MifQ== */");

/***/ }),

/***/ "./src/app/modules/pm/reports/pages/reports/reports.component.ts":
/*!***********************************************************************!*\
  !*** ./src/app/modules/pm/reports/pages/reports/reports.component.ts ***!
  \***********************************************************************/
/*! exports provided: ReportsComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ReportsComponent", function() { return ReportsComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");


var ReportsComponent = /** @class */ (function () {
    function ReportsComponent() {
        this.activeActiveReportTab = '1';
    }
    ReportsComponent.prototype.ngOnInit = function () {
    };
    ReportsComponent.prototype.setActiveReportTab = function ($event) {
        this.activeActiveReportTab = $event.id;
    };
    ReportsComponent.prototype.getActiveReportTab = function (tab) {
        return this.activeActiveReportTab === tab;
    };
    ReportsComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-reports',
            template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./reports.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/modules/pm/reports/pages/reports/reports.component.html")).default,
            styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./reports.component.scss */ "./src/app/modules/pm/reports/pages/reports/reports.component.scss")).default]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [])
    ], ReportsComponent);
    return ReportsComponent;
}());



/***/ }),

/***/ "./src/app/modules/pm/reports/reports-routing.module.ts":
/*!**************************************************************!*\
  !*** ./src/app/modules/pm/reports/reports-routing.module.ts ***!
  \**************************************************************/
/*! exports provided: ReportsRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ReportsRoutingModule", function() { return ReportsRoutingModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var ngx_permissions__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ngx-permissions */ "./node_modules/ngx-permissions/ngx-permissions.umd.js");
/* harmony import */ var ngx_permissions__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(ngx_permissions__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _pages_reports_reports_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./pages/reports/reports.component */ "./src/app/modules/pm/reports/pages/reports/reports.component.ts");





var routes = [
    {
        path: '',
        canActivate: [ngx_permissions__WEBPACK_IMPORTED_MODULE_3__["NgxPermissionsGuard"]],
        component: _pages_reports_reports_component__WEBPACK_IMPORTED_MODULE_4__["ReportsComponent"],
        data: {
            permissions: {
                only: ['reports_view']
            }
        }
    }
];
var ReportsRoutingModule = /** @class */ (function () {
    function ReportsRoutingModule() {
    }
    ReportsRoutingModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)],
            exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]]
        })
    ], ReportsRoutingModule);
    return ReportsRoutingModule;
}());



/***/ }),

/***/ "./src/app/modules/pm/reports/reports.module.ts":
/*!******************************************************!*\
  !*** ./src/app/modules/pm/reports/reports.module.ts ***!
  \******************************************************/
/*! exports provided: ReportsModule, HttpLoaderFactory */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ReportsModule", function() { return ReportsModule; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "HttpLoaderFactory", function() { return HttpLoaderFactory; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var ngx_bootstrap__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ngx-bootstrap */ "./node_modules/ngx-bootstrap/esm5/ngx-bootstrap.js");
/* harmony import */ var ngx_export_as__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ngx-export-as */ "./node_modules/ngx-export-as/fesm2015/ngx-export-as.js");
/* harmony import */ var _ng_select_ng_select__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @ng-select/ng-select */ "./node_modules/@ng-select/ng-select/fesm5/ng-select.js");
/* harmony import */ var _ngx_translate_core__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @ngx-translate/core */ "./node_modules/@ngx-translate/core/fesm5/ngx-translate-core.js");
/* harmony import */ var _ngx_translate_http_loader__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @ngx-translate/http-loader */ "./node_modules/@ngx-translate/http-loader/fesm5/ngx-translate-http-loader.js");
/* harmony import */ var angular_datatables__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! angular-datatables */ "./node_modules/angular-datatables/index.js");
/* harmony import */ var _shared_shared_module__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ../../../shared/shared.module */ "./src/app/shared/shared.module.ts");
/* harmony import */ var _reports_routing_module__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ./reports-routing.module */ "./src/app/modules/pm/reports/reports-routing.module.ts");
/* harmony import */ var _components_project_reports_project_reports_component__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ./components/project-reports/project-reports.component */ "./src/app/modules/pm/reports/components/project-reports/project-reports.component.ts");
/* harmony import */ var _components_task_reports_task_reports_component__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ./components/task-reports/task-reports.component */ "./src/app/modules/pm/reports/components/task-reports/task-reports.component.ts");
/* harmony import */ var _components_defect_reports_defect_reports_component__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! ./components/defect-reports/defect-reports.component */ "./src/app/modules/pm/reports/components/defect-reports/defect-reports.component.ts");
/* harmony import */ var _components_incident_reports_incident_reports_component__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! ./components/incident-reports/incident-reports.component */ "./src/app/modules/pm/reports/components/incident-reports/incident-reports.component.ts");
/* harmony import */ var _pages_reports_reports_component__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! ./pages/reports/reports.component */ "./src/app/modules/pm/reports/pages/reports/reports.component.ts");


















var ReportsModule = /** @class */ (function () {
    function ReportsModule() {
    }
    ReportsModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            declarations: [
                _components_project_reports_project_reports_component__WEBPACK_IMPORTED_MODULE_13__["ProjectReportsComponent"],
                _components_task_reports_task_reports_component__WEBPACK_IMPORTED_MODULE_14__["TaskReportsComponent"],
                _components_defect_reports_defect_reports_component__WEBPACK_IMPORTED_MODULE_15__["DefectReportsComponent"],
                _components_incident_reports_incident_reports_component__WEBPACK_IMPORTED_MODULE_16__["IncidentReportsComponent"],
                _pages_reports_reports_component__WEBPACK_IMPORTED_MODULE_17__["ReportsComponent"]
            ],
            imports: [
                _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
                _reports_routing_module__WEBPACK_IMPORTED_MODULE_12__["ReportsRoutingModule"],
                _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_4__["FormsModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_4__["ReactiveFormsModule"],
                _ng_select_ng_select__WEBPACK_IMPORTED_MODULE_7__["NgSelectModule"],
                angular_datatables__WEBPACK_IMPORTED_MODULE_10__["DataTablesModule"],
                ngx_export_as__WEBPACK_IMPORTED_MODULE_6__["ExportAsModule"],
                ngx_bootstrap__WEBPACK_IMPORTED_MODULE_5__["TooltipModule"].forRoot(),
                ngx_bootstrap__WEBPACK_IMPORTED_MODULE_5__["DatepickerModule"].forRoot(),
                ngx_bootstrap__WEBPACK_IMPORTED_MODULE_5__["BsDatepickerModule"].forRoot(),
                ngx_bootstrap__WEBPACK_IMPORTED_MODULE_5__["ModalModule"].forRoot(),
                ngx_bootstrap__WEBPACK_IMPORTED_MODULE_5__["TabsModule"].forRoot(),
                _ngx_translate_core__WEBPACK_IMPORTED_MODULE_8__["TranslateModule"].forChild({
                    loader: {
                        provide: _ngx_translate_core__WEBPACK_IMPORTED_MODULE_8__["TranslateLoader"],
                        useFactory: (HttpLoaderFactory),
                        deps: [_angular_common_http__WEBPACK_IMPORTED_MODULE_3__["HttpClient"]]
                    }
                }),
                _shared_shared_module__WEBPACK_IMPORTED_MODULE_11__["SharedModule"]
            ]
        })
    ], ReportsModule);
    return ReportsModule;
}());

// Required for AOT compilation
function HttpLoaderFactory(http) {
    return new _ngx_translate_http_loader__WEBPACK_IMPORTED_MODULE_9__["TranslateHttpLoader"](http, './assets/i18n/', '.json');
}


/***/ })

}]);
//# sourceMappingURL=modules-pm-reports-reports-module.js.map