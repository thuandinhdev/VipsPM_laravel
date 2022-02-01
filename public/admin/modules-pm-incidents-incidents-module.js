(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["modules-pm-incidents-incidents-module"],{

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/modules/pm/incidents/components/create-attachment-modal/create-attachment-modal.component.html":
/*!******************************************************************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/modules/pm/incidents/components/create-attachment-modal/create-attachment-modal.component.html ***!
  \******************************************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<div class=\"modal-header\">\r\n    <h2 class=\"modal-title font-weight-normal\">\r\n        <i aria-hidden=\"true\" class=\"fa fa-paperclip modal-icon\"></i>&nbsp;{{'attachments.title' | translate}}</h2>\r\n    <button (click)=\"bsCreateAttachmentModalRef.hide()\" aria-label=\"Close\" class=\"close\" data-dismiss=\"modal\" type=\"button\">\r\n        <span aria-hidden=\"true\">&times;</span></button>\r\n</div>\r\n<form (ngSubmit)=\"onSubmit()\" [formGroup]=\"createAttachmentForm\" class=\"form\">\r\n    <div class=\"modal-body\">\r\n        <div class=\"form-body\">\r\n            <div class=\"row\">\r\n                <div class=\"col-md-12\">\r\n                    <div class=\"form-group\">\r\n                        <label for=\"file_name\">{{'attachments.create.fields.file_title' | translate }}\r\n                            <span class=\"text-danger\">&nbsp;*</span></label>\r\n                        <input [ngClass]=\"{ 'is-invalid': isFormSubmitted && attachment.file_name.errors }\" class=\"form-control\" formControlName=\"file_name\" id=\"file_name\" placeholder=\"{{'attachments.create.placeholders.placeholder1' | translate }}\" type=\"text\"/>\r\n                        <div *ngIf=\"isFormSubmitted && attachment.file_name.errors\" class=\"invalid-feedback\">\r\n                            <div *ngIf=\"attachment.file_name.errors.required\">{{'attachments.create.error_messages.message1' | translate }}</div>\r\n                            <div *ngIf=\"attachment.file_name.errors.maxlength\">{{'attachments.create.error_messages.message5' | translate}}</div>\r\n                        </div>\r\n                    </div>\r\n                </div>\r\n                <div class=\"col-md-12\">\r\n                    <div [ngClass]=\"{ 'is-invalid': isFormSubmitted && attachment.file.errors }\" class=\"form-group\">\r\n                        <label for=\"file\">{{'attachments.create.fields.attachment' | translate }}\r\n                            <span class=\"text-danger\">&nbsp;*</span></label>\r\n                        <input formControlName=\"file\" type=\"hidden\">\r\n                        <div #logodropzone class=\"dropzone dz-clickable\">\r\n                            <div class=\"dz-default dz-message\">\r\n                                <span><strong>{{'attachments.create.error_messages.message2' | translate }}</strong></span>\r\n                            </div>\r\n                        </div>\r\n                        <div *ngIf=\"isFormSubmitted && attachment.file.errors\" class=\"invalid-feedback\">\r\n                            <div *ngIf=\"attachment.file.errors.required\">{{'attachments.create.error_messages.message3' | translate }}</div>\r\n                        </div>\r\n                    </div>\r\n                </div>\r\n                <input formControlName=\"file_extension\" type=\"hidden\">\r\n            </div>\r\n        </div>\r\n    </div>\r\n    <div class=\"modal-footer\">\r\n        <button (click)=\"onCancel()\" class=\"btn btn-cancel mb-0\" type=\"button\">{{'common.cancel' | translate }}</button>\r\n        <button class=\"btn btn-submit mb-0\" type=\"submit\">{{'common.create' | translate }}</button>\r\n    </div>\r\n</form>\r\n");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/modules/pm/incidents/components/incident-activities/incident-activities.component.html":
/*!**********************************************************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/modules/pm/incidents/components/incident-activities/incident-activities.component.html ***!
  \**********************************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<div class=\"activity-timeline\">\r\n    <div class=\"card overflow-hidden shadow-none p-2\">\r\n        <div [perfectScrollbar]=\"scrollConfig\" class=\"card-body\">\r\n            <ul class=\"timeline pr-2\">\r\n                <li *ngFor=\"let activity of incident.activities; index as i\" class=\"d-flex flex-column\">\r\n                    <div class=\"d-flex flex-column flex-md-row justify-content-start justify-content-md-between\">\r\n                        <a [routerLink]=\"['/users/profile', activity.user.id]\" placement=\"top\" tooltip=\"{{activity.user.firstname}} {{activity.user.lastname}}\">\r\n                            <img *ngIf=\"!activity.user.avatar\" alt=\"Profile Photo\" class=\"user-profile\" src=\"../assets/img/profile_small.jpg\"/>\r\n                            <img *ngIf=\"activity.user.avatar\" alt=\"Profile Photo\" class=\"user-profile\" src=\"{{apiUrl}}/uploads/profile/{{activity.user.avatar}}\"/>\r\n                            <span class=\"ml-1 activity-user\">{{activity.user.firstname}} {{activity.user.lastname}}</span>\r\n                        </a>\r\n                        <a class=\"float-left activity-date\" href=\"javascript:void(0)\">\r\n                            <span class=\"badge badge-secondary\">{{activity.diff_for_humans}}</span>\r\n                            {{activity.created_at | dateTimeFormatFilter: loginUser.settings.date_time_format }}\r\n                        </a>\r\n                    </div>\r\n                    <p [innerHTML]=\"activity.description\"></p>\r\n                </li>\r\n            </ul>\r\n        </div>\r\n    </div>\r\n</div>\r\n");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/modules/pm/incidents/components/incident-attachment/incident-attachment.component.html":
/*!**********************************************************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/modules/pm/incidents/components/incident-attachment/incident-attachment.component.html ***!
  \**********************************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<!-- Card header -->\r\n<div class=\"card-header justify-content-center p-0\">\r\n    <div class=\"card-buttons pt-2 pb-2 pr-1\">\r\n        <button (click)=\"openAttachmentCreateModal()\" class=\"btn btn-create mb-0\" tooltip=\"{{'common.create' | translate}}\" type=\"button\">\r\n            <i class=\"fa fa-upload\"></i><span>{{'common.drag_file' | translate}}</span></button>\r\n    </div>\r\n</div><!-- Card body -->\r\n<div class=\"card-body\">\r\n    <div *ngIf=\"attachments?.length != 0\" class=\"row border-top pt-2\">\r\n        <div *ngFor=\"let file of attachments; index as i\" class=\"col-sm-4\">\r\n            <div class=\"file-browser\">\r\n                <div class=\"actions-dropdown text-right m-1 pr-2\">\r\n                    <div class=\"btn-group\" dropdown>\r\n                        <a aria-controls=\"dropdown-basic-1\" class=\"dropdown-toggle\" dropdownToggle href=\"javascript:void(0);\" id=\"button-basic-1\"><i class=\"fa fa-ellipsis-v\"></i></a>\r\n                        <ul *dropdownMenu aria-labelledby=\"button-basic-1\" class=\"dropdown-menu animated fadeIn\" id=\"dropdown-basic-1\" role=\"menu\">\r\n                            <li role=\"menuitem\">\r\n                                <a class=\"dropdown-item btn btn-download btn-raised\" download=\"{{file.file_name}}\" href=\"{{apiUrl}}/uploads/incident_attachment/{{file.file_hash}}\" target=\"_blank\" tooltip=\"{{'common.download' | translate}}\"><i class=\"fa fa-download\"></i></a>\r\n                            </li>\r\n                            <li *ngIf=\"permission\" role=\"menuitem\">\r\n                                <a (click)=\"attachmentDelete(attachment.id)\" class=\"dropdown-item btn btn-delete btn-raised\" tooltip=\"{{'common.delete' | translate}}\"><i class=\"fa fa-trash-o\"></i></a>\r\n                            </li>\r\n                        </ul>\r\n                    </div>\r\n                </div>\r\n                <div class=\"file-box\">\r\n                    <div class=\"files\">\r\n                        <div *ngIf=\"file.icon\" class=\"icon docx\">\r\n                            <i [ngClass]=\"file.icon\"></i>\r\n                        </div>\r\n                        <div *ngIf=\"file.isImageFile\" class=\"image\">\r\n                            <img alt=\"image\" class=\"img-fluid height-100\" src=\"{{ apiUrl }}/uploads/incident_attachment/{{file.file_hash}}\"/>\r\n                        </div>\r\n                        <div class=\"file-name\">\r\n                            <a download=\"{{file.file_name}}\" href=\"{{apiUrl}}/uploads/incident_attachment/{{file.file_hash}}\" target=\"_blank\" tooltip=\"{{file.file_name}}\">\r\n                                <h4>{{ (file.file_name.length > 20) ? (file.file_name | slice:0:20) + '..' : (file.file_name) }}</h4>\r\n                            </a>\r\n                            <p>{{'file_browser.title7' | translate}}: {{ file.updated_at | dateTimeFormatFilter:loginUser.settings.date_time_format }}</p>\r\n                        </div>\r\n                    </div>\r\n                    <span class=\"corner\"></span>\r\n                </div>\r\n            </div>\r\n        </div>\r\n    </div>\r\n    <div *ngIf=\"attachments?.length == 0\" class=\"row border-top pt-2\">\r\n        <div class=\"col-sm-12 text-center\">{{'common.datatable.sEmptyTable' | translate}}</div>\r\n    </div>\r\n</div>\r\n");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/modules/pm/incidents/components/incident-comments/incident-comments.component.html":
/*!******************************************************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/modules/pm/incidents/components/incident-comments/incident-comments.component.html ***!
  \******************************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<!-- Card header -->\r\n<div class=\"card-header p-0\">\r\n    <div class=\"card-buttons pt-2 pb-2 pr-1\">\r\n        <button (click)=\"onSubmit()\" class=\"btn btn-create mb-0\" id=\"post_comment\" tooltip=\"{{'common.create' | translate}}\">\r\n            <i class=\"fa fa-plus\"></i><span>{{'comments.buttons.button1' | translate}}</span></button>\r\n    </div>\r\n</div><!-- Card body -->\r\n<div class=\"card-body\">\r\n    <div class=\"row\">\r\n        <div class=\"col-sm-12\">\r\n            <form (ngSubmit)=\"onSubmit()\" [formGroup]=\"incidentCommentsForm\" class=\"bs4-forms\">\r\n                <div class=\"form-group\">\r\n                    <textarea [ngClass]=\"{ 'is-invalid': isCommentFormSubmitted && commentControl.comment.errors }\" class=\"form-control\" formControlName=\"comment\" id=\"comment\" name=\"comment\" placeholder=\"{{'comments.create.placeholders.placeholder1' | translate}}\"></textarea>\r\n                    <div *ngIf=\"isCommentFormSubmitted && commentControl.comment.errors\" class=\"invalid-feedback\">\r\n                        <div *ngIf=\"commentControl.comment.errors.required\">{{'comments.create.error_messages.message1' | translate}}</div>\r\n                    </div>\r\n                </div>\r\n                <div class=\"form-group\">\r\n                    <input formControlName=\"files\" type=\"hidden\">\r\n                    <div #commentdropzone class=\"dropzone dz-clickable\">\r\n                        <div class=\"dz-default dz-message\">\r\n                            <span><strong>{{'comments.create.error_messages.message2' | translate}}</strong></span>\r\n                        </div>\r\n                    </div>\r\n                </div>\r\n            </form>\r\n        </div>\r\n    </div>\r\n    <!-- Comments lists -->\r\n    <div class=\"row\">\r\n        <div class=\"col-sm-12\">\r\n            <accordion [closeOthers]=\"oneAtATime\">\r\n                <ng-container *ngFor=\"let comment of comments\">\r\n                    <accordion-group [panelClass]=\"customClass\">\r\n                        <button accordion-heading class=\"btn btn-link btn-block d-lg-flex justify-content-between\" type=\"button\">\r\n                            <div class=\"\">\r\n                                <i class=\"fa fa-angle-down\"></i>\r\n                                <img *ngIf=\"!comment.user.avatar\" alt=\"User profile\" class=\"img-sm rounded-circle\" src=\"../assets/img/profile_large.jpg\"/>\r\n                                <img *ngIf=\"comment.user.avatar\" alt=\"User profile\" class=\"img-sm rounded-circle\" src=\"{{apiUrl}}/uploads/profile/{{comment.user.avatar}}\"/>\r\n                                <span>{{comment.user.firstname}} {{comment.user.lastname}}</span>\r\n                            </div>\r\n                            <div class=\" text-dark pt-1\">{{comment.created_at | dateTimeFormatFilter: loginUser.settings.date_time_format }}</div>\r\n                        </button>\r\n                        <div class=\"comment-text\">\r\n                            <inline-edit-textarea (updateValue)=\"saveComments(comment, 'comment', $event);\" [elementFor]=\"'common.comment' | translate\" [fieldValue]=\"comment.comment\" [isRequired]=\"'true'\" [name]=\"'comment'\"></inline-edit-textarea>\r\n                            <ul *ngIf=\"comment.attachments\" class=\"attachment_box\">\r\n                                <li *ngFor=\"let item of comment.attachments;let i = index; trackBy: i\">\r\n                                    <a download=\"{{item.name}}\" href=\"{{apiUrl}}/uploads/incident_attachment/{{item.file}}\" target=\"_blank\"><span>{{item.name}}</span></a>\r\n                                </li>\r\n                            </ul>\r\n                        </div>\r\n                        <div class=\"comment-reply\">\r\n                            <a (click)=\"commentDelete(comment.id)\" *ngIf=\"permission\" class=\"text-danger\">{{'common.remove' | translate}}</a>\r\n                            <!-- <a (click)=\"showReplayCommentBox(comment.id)\">{{'comments.buttons.button2' | translate}}</a> -->\r\n                        </div>\r\n                    </accordion-group>\r\n                </ng-container>\r\n            </accordion>\r\n        </div>\r\n    </div>\r\n</div>\r\n");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/modules/pm/incidents/components/incident-details/incident-details.component.html":
/*!****************************************************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/modules/pm/incidents/components/incident-details/incident-details.component.html ***!
  \****************************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<div class=\"card-content\">\r\n    <div class=\"card-body\">\r\n        <div class=\"row mr-2 ml-2\">\r\n            <div class=\"col-md-12 card-separator\">\r\n                <div class=\"d-flex justify-content-between\">\r\n                    <div class=\"task-name d-lg-flex\">\r\n                        <h4 class=\"task-id\">\r\n                            <span>#{{incident.generated_id}} </span>\r\n                        </h4>\r\n                        <p class=\"task-title ml-lg-2\">\r\n                            {{incident.incident_name}}\r\n                        </p>\r\n                    </div>\r\n                    <div class=\"task-action d-flex\">\r\n                        <a *ngIf=\"permission\" [routerLink]=\"['/incidents/edit', incident.id]\" class=\"btn btn-create mb-2 mb-lg-0 float-right\" tooltip=\"{{'common.edit' | translate}}\"><i class=\"fa fa-pencil-square-o\"></i></a>\r\n                    </div>\r\n                </div>\r\n            </div>\r\n            <div class=\"col-md-12 pr-0 pl-0\">\r\n                <form class=\"form-body overflow-hidden mt-3\">\r\n                    <!-- Detail fields -->\r\n                    <div class=\"col-md-12\">\r\n                        <div class=\"row\">\r\n                            <div class=\"col-lg-4 pr-lg-3 pl-lg-2 pr-2 pl-2\">\r\n                                <div class=\"row\">\r\n                                    <div class=\"col\">\r\n                                        <div class=\"row\">\r\n                                            <div class=\"col card-separator mb-3\">\r\n                                                <div class=\"col-md-12 mb-3\">\r\n                                                    <label>{{'incidents.create.fields.project_name' | translate }}</label>\r\n                                                    <ng-container *ngIf=\"incident.project == null; else elseBlock5\">\r\n                                                        <div class=\"detail-inline\">-</div>\r\n                                                    </ng-container>\r\n                                                    <ng-template #elseBlock5>\r\n                                                        <div class=\"detail-inline\">{{incident.project.project_name}}</div>\r\n                                                    </ng-template>\r\n                                                </div>\r\n                                                <div class=\"col-md-12 mb-3\">\r\n                                                    <label>{{'incidents.create.fields.project_version' | translate }}</label>\r\n                                                    <ng-container *ngIf=\"incident.project_version == null; else elseBlock6\">\r\n                                                        <div class=\"detail-inline\">-</div>\r\n                                                    </ng-container>\r\n                                                    <ng-template #elseBlock6>\r\n                                                        <div class=\"detail-inline\">{{incident.project_version}}</div>\r\n                                                    </ng-template>\r\n                                                </div>\r\n                                                <div class=\"col-lg-12 mb-3 d-flex justify-content-between\">\r\n                                                    <div class=\"\">\r\n                                                        <label>{{'incidents.create.fields.status' | translate }}</label>\r\n                                                        <ng-container *ngIf=\"permission; else elseBlock2\">\r\n                                                            <div class=\"status-dropdown\">\r\n                                                                <div class=\"btn-group\" dropdown>\r\n                                                                    <button aria-controls=\"dropdown-basic\" class=\"btn dropdown-toggle\" dropdownToggle id=\"button-basic\" type=\"button\">{{getTranslateStatus(incident.status) | translate}}&nbsp;<span class=\"caret\"></span>\r\n                                                                    </button>\r\n                                                                    <ul *dropdownMenu aria-labelledby=\"button-basic\" class=\"dropdown-menu animated fadeIn\" id=\"dropdown-basic\" role=\"menu\">\r\n                                                                        <li *ngFor=\"let status of ('incidents.status' | translate)\" role=\"menuitem\">\r\n                                                                            <a (click)=\"changeIncidentStatus([incident.id], status);incident.status = status.id\" [ngClass]=\"{'active': incident.status == status.id}\" class=\"dropdown-item btn btn-sm {{status.class}}\">{{status.label}}</a>\r\n                                                                        </li>\r\n                                                                    </ul>\r\n                                                                </div>\r\n                                                            </div>\r\n                                                        </ng-container>\r\n                                                        <ng-template #elseBlock2>\r\n                                                            <ng-container *ngFor=\"let status of ('incidents.status' | translate)\">\r\n                                                                <div class=\"budges-status\">\r\n                                                                    <span *ngIf=\"status.id == incident.status\" class=\"{{status.class}}\">{{status.label}}</span>\r\n                                                                </div>\r\n                                                            </ng-container>\r\n                                                        </ng-template>\r\n                                                    </div>\r\n                                                    <div class=\"\">\r\n                                                        <label>{{'incidents.create.fields.priority' | translate }}</label>\r\n                                                        <ng-container *ngIf=\"permission; else elseBlock3\">\r\n                                                            <div class=\"status-dropdown\">\r\n                                                                <div class=\"btn-group\" dropdown>\r\n                                                                    <button aria-controls=\"dropdown-basic-1\" class=\"btn dropdown-toggle\" dropdownToggle id=\"button-basic-1\" type=\"button\">{{getTranslatePriorities(incident.priority) | translate}}&nbsp;<span class=\"caret\"></span>\r\n                                                                    </button>\r\n                                                                    <ul *dropdownMenu aria-labelledby=\"button-basic-1\" class=\"dropdown-menu animated fadeIn\" id=\"dropdown-basic-1\" role=\"menu\">\r\n                                                                        <li *ngFor=\"let priority of ('incidents.priorities' | translate)\" role=\"menuitem\">\r\n                                                                            <a (click)=\"changeIncidentSeverity([incident.id], priority);incident.priority = priority.id\" [ngClass]=\"{'active': incident.priority == priority.id}\" class=\"dropdown-item btn btn-sm {{priority.class}}\">{{priority.label}}</a>\r\n                                                                        </li>\r\n                                                                    </ul>\r\n                                                                </div>\r\n                                                            </div>\r\n                                                        </ng-container>\r\n                                                        <ng-template #elseBlock3>\r\n                                                            <ng-container *ngFor=\"let priority of ('incidents.priorities' | translate)\">\r\n                                                                <div class=\"budges-status\">\r\n                                                                    <span *ngIf=\"priority.id == incident.priority\" class=\"{{priority.class}}\">{{priority.label}}</span>\r\n                                                                </div>\r\n                                                            </ng-container>\r\n                                                        </ng-template>\r\n                                                    </div>\r\n                                                </div>\r\n                                                <div class=\"col-lg-12 mb-3 d-flex justify-content-between\">\r\n                                                    <div class=\"text-center\">\r\n                                                        <label>{{'incidents.create.fields.created_by' | translate }}</label>\r\n                                                        <div class=\"people-lists \">\r\n                                                            <a [routerLink]=\"['/users/profile', incident.created_user.id]\" class=\"btn btn-profile-info rounded-circle text-dark\" placement=\"top\" tooltip=\"{{incident.created_user.firstname}} {{incident.created_user.lastname}}\">\r\n                                                                <img *ngIf=\"incident.created_user.avatar\" alt=\"Profile\" class=\"img-sm rounded-circle\" src=\"{{apiUrl}}/uploads/profile/{{incident.created_user.avatar}}\"/>\r\n                                                                <img *ngIf=\"!incident.created_user.avatar\" alt=\"Profile\" class=\"img-sm rounded-circle\" src=\"../assets/img/profile_small.jpg\"/>\r\n                                                            </a><br>\r\n                                                            <span class=\"mt-1\">{{incident.created_user.firstname}} {{incident.created_user.lastname}}</span>\r\n                                                        </div>\r\n                                                    </div>\r\n                                                    <div class=\"text-center\">\r\n                                                        <label>{{'incidents.create.fields.assigned_To' | translate }}</label>\r\n                                                        <div class=\"people-lists\">\r\n                                                            <ng-container *ngIf=\"incident.assign_to == 'Unassign' || incident.assign_to == '' || incident.assign_to == null; else elseBlock\">\r\n                                                                <a class=\"btn btn-profile-danger rounded-circle text-dark\" href=\"javascript:void(0);\" placement=\"top\" tooltip=\"{{'common.unassigned' | translate}}\">\r\n                                                                    <img alt=\"Profile\" class=\"img-sm rounded-circle\" src=\"../assets/img/unassign.jpg\"/>\r\n                                                                </a>\r\n                                                            </ng-container>\r\n                                                            <ng-template #elseBlock>\r\n                                                                <a [routerLink]=\"['/users/profile', incident.assign_user.id]\" class=\"btn rounded-circle text-dark btn-profile-danger\" placement=\"top\" tooltip=\"{{incident.assign_user.firstname}} {{incident.assign_user.lastname}}\">\r\n                                                                    <img *ngIf=\"incident.assign_user.avatar\" alt=\"Profile\" class=\"img-sm rounded-circle\" src=\"{{apiUrl}}/uploads/profile/{{incident.assign_user.avatar}}\"/>\r\n                                                                    <img *ngIf=\"!incident.assign_user.avatar\" alt=\"Profile\" class=\"img-sm rounded-circle\" src=\"../assets/img/profile_small.jpg\"/>\r\n                                                                </a><br>\r\n                                                                <span class=\"mt-1\">{{incident.assign_user.firstname}} {{incident.assign_user.lastname}}</span>\r\n                                                            </ng-template>\r\n                                                        </div>\r\n                                                    </div>\r\n                                                </div>\r\n                                            </div>\r\n                                            <div class=\"col-md-12 card-separator\">\r\n                                                <div class=\"col-md-12 mb-3\">\r\n                                                    <label>{{'incidents.create.fields.start_date' | translate }}</label>\r\n                                                    <div class=\"detail-inline\">{{incident.start_date | dateTimeFormatFilter: loginUser.settings.date_format}}</div>\r\n                                                </div>\r\n                                                <div class=\"col-md-12 mb-3\">\r\n                                                    <label>{{'incidents.create.fields.end_date' | translate }}</label>\r\n                                                    <div class=\"detail-inline\">{{incident.end_date | dateTimeFormatFilter: loginUser.settings.date_format}}</div>\r\n                                                </div>\r\n                                                <div class=\"col-lg-12 mb-3\">\r\n                                                    <label>{{'incidents.create.fields.estimate_hours' | translate}}</label>\r\n                                                    <div class=\"detail-inline\">\r\n                                                        <ng-container *ngIf=\"permission; else elseBlock7\">\r\n                                                            <inline-edit-hours (updateValue)=\"saveIncidentDetail('estimated_hours', $event);\" [elementFor]=\"'incidents.inline_edit.estimate_hours' | translate\" [fieldValue]=\"incident.estimated_hours\" [isRequired]=\"'false'\" [name]=\"'estimated_hours'\"></inline-edit-hours>\r\n                                                        </ng-container>\r\n                                                        <ng-template #elseBlock7>{{ incident.estimated_hours}}</ng-template>\r\n                                                    </div>\r\n                                                </div>\r\n                                                <div class=\"col-lg-12 mb-3\">\r\n                                                    <label>{{'incidents.create.fields.actual_hours' | translate}}</label>\r\n                                                    <div class=\"detail-inline\">{{incident.actual_hours}}</div>\r\n                                                </div>\r\n                                                <div class=\"col-md-12 mb-3\">\r\n                                                    <label>{{'incidents.create.fields.incident_type' | translate }}</label>\r\n                                                    <div class=\"detail-inline\">\r\n                                                        <ng-container *ngIf=\"permission; else elseBlock1\">\r\n                                                            <inline-edit-select (updateValue)=\"saveIncidentDetail('incident_type', $event);\" [elementFor]=\"'incidents.inline_edit.incident_type' | translate\" [isRequired]=\"'true'\" [name]=\"'incident_type'\" [options]=\"('incidents.incident_types' | translate)\" [selectedValue]=\"incident.incident_type\" [txtField]=\"'incident Types'\"></inline-edit-select>\r\n                                                        </ng-container>\r\n                                                        <ng-template #elseBlock1>\r\n                                                            <ng-container *ngFor=\"let type of ('incidents.incident_types' | translate)\">\r\n                                                                <span *ngIf=\"type.id == incident.incident_type\" class=\"badge badge-secondary\">{{type.label | translate}}</span>\r\n                                                            </ng-container>\r\n                                                        </ng-template>\r\n                                                    </div>\r\n                                                </div>\r\n                                                <div class=\"col-md-12 mb-3\">\r\n                                                    <label>{{'common.created' | translate }}</label>\r\n                                                    <div class=\"detail-inline\">{{incident.created_at | dateTimeFormatFilter: loginUser.settings.date_time_format}}</div>\r\n                                                </div>\r\n                                                <div class=\"col-md-12 mb-3\">\r\n                                                    <label>{{'common.updated' | translate }}</label>\r\n                                                    <div class=\"detail-inline\">{{incident.updated_at | dateTimeFormatFilter: loginUser.settings.date_time_format}}</div>\r\n                                                </div>\r\n                                            </div>\r\n                                        </div>\r\n                                    </div>\r\n                                </div>\r\n                            </div>\r\n                            <div class=\"col-lg-8\">\r\n                                <div class=\"row\">\r\n                                    <!-- Description field -->\r\n                                    <div class=\"col-lg-12 col-md-12 col-xs-12 col-sm-12 mb-3 description-detail card-separator\">\r\n                                        <h4 class=\"sub-title\"><span>{{'incidents.details.title2' | translate}}</span>\r\n                                        </h4>\r\n                                        <div class=\"detail-inline\">\r\n                                            <ng-container *ngIf=\"permission; else elseBlock4\">\r\n                                                <inline-edit-text-editor (updateValue)=\"saveIncidentDetail('description', $event);\" [elementFor]=\"'incidents.inline_edit.description' | translate\" [fieldValue]=\"incident.description\" [name]=\"'description'\"></inline-edit-text-editor>\r\n                                            </ng-container>\r\n                                            <ng-template #elseBlock4>\r\n                                                <p [innerHtml]=\"incident.description\"></p>\r\n                                            </ng-template>\r\n                                        </div>\r\n                                    </div>\r\n                                    <!-- Custom fields -->\r\n                                    <div *ngIf=\"incident.custom_fields.length > 0\" class=\"col-lg-12 col-md-12 col-xs-12 col-sm-12 card-separator mb-3\">\r\n                                        <h4 class=\"sub-title\"><span>{{'incidents.details.title1' | translate}}</span>\r\n                                        </h4>\r\n                                        <div class=\"row\">\r\n                                            <ng-container *ngFor=\"let customField of incident.custom_fields\">\r\n                                                <div *ngIf=\"customField.field_type != 'textarea'\" class=\"col-lg-4 col-md-6 mt-2 mb-3\">\r\n                                                    <ng-container *ngIf=\"customField.field_type == 'text' || customField.field_type == 'numeric'\">\r\n                                                        <label>{{customField.field_label}}</label>\r\n                                                        <div class=\"detail-inline\">{{incident[customField.field_column]}}</div>\r\n                                                    </ng-container>\r\n                                                    <ng-container *ngIf=\"customField.field_type == 'date'\">\r\n                                                        <label>{{customField.field_label}}</label>\r\n                                                        <div class=\"detail-inline\">{{incident[customField.field_column] | dateTimeFormatFilter: loginUser.settings.date_format}}</div>\r\n                                                    </ng-container>\r\n                                                    <ng-container *ngIf=\"customField.field_type == 'dropdown'\">\r\n                                                        <label>{{customField.field_label}}</label>\r\n                                                        <div class=\"detail-inline\">\r\n                                                            <ng-container *ngFor=\"let fieldValue of getParseArray(customField.default_value)\">\r\n                                                                <ng-container *ngIf=\"fieldValue.value == incident[customField.field_column]\">\r\n                                                                    {{fieldValue.label}}\r\n                                                                </ng-container>\r\n                                                            </ng-container>\r\n                                                        </div>\r\n                                                    </ng-container>\r\n                                                    <ng-container *ngIf=\"customField.field_type == 'checkbox'\">\r\n                                                        <label>{{customField.field_label}}</label>\r\n                                                        <div class=\"detail-inline\">\r\n                                                            <div *ngIf=\"incident[customField.field_column] == 1; else checkboxElseBlock\">{{'common.true' | translate}}</div>\r\n                                                            <ng-template #checkboxElseBlock>{{'common.false' | translate}}</ng-template>\r\n                                                        </div>\r\n                                                    </ng-container>\r\n                                                </div>\r\n                                            </ng-container>\r\n                                            <ng-container *ngFor=\"let customField of incident.custom_fields\">\r\n                                                <div *ngIf=\"customField.field_type == 'textarea'\" class=\"col-lg-6 col-md-12 mt-2 mb-3\">\r\n                                                    <ng-container>\r\n                                                        <label>{{customField.field_label}}</label>\r\n                                                        <div class=\"detail-inline\">{{incident[customField.field_column]}}</div>\r\n                                                    </ng-container>\r\n                                                </div>\r\n                                            </ng-container>\r\n                                        </div>\r\n                                    </div>\r\n                                    <!-- Todos list -->\r\n                                    <div class=\"col-lg-12 col-md-12 col-xs-12 col-sm-12 card-separator mb-3\">\r\n                                        <app-todo-detail [module_id]=\"4\" [module_related_id]=\"incident.id\"></app-todo-detail>\r\n                                    </div>\r\n                                    <!-- Timesheet -->\r\n                                    <div class=\"col-lg-12 col-md-12 col-xs-12 col-sm-12 card-separator mb-3\">\r\n                                        <app-timesheet-list [apiUrl]=\"apiUrl\" [loginUser]=\"loginUser\" [module_id]=\"'4'\" [module_related_id]=\"incident.id\" [project_id]=\"incident.project_id\"></app-timesheet-list>\r\n                                    </div>\r\n                                    <!-- Tab Design -->\r\n                                    <tabset class=\"nav nav-tabs d-flex justify-content-left details-tabs col-md-12 p-0\">\r\n                                        <!-- Comments -->\r\n                                        <tab (selectTab)=\"setActiveIncidentTab($event)\" class=\"card-separator mb-3\" customClass=\"text-left\" id=\"1\">\r\n                                            <ng-template tabHeading>\r\n                                                <div class=\"d-flex\">\r\n                                                    <i class=\"fa fa-comments-o\"></i><span class=\"mt-1 ml-1\">{{'comments.title' | translate}}</span>\r\n                                                </div>\r\n                                            </ng-template>\r\n                                            <!-- Task Comment -->\r\n                                            <div class=\"col-lg-12 pr-0 pl-0\">\r\n                                                <app-incident-comments [apiUrl]=\"apiUrl\" [loginUser]=\"loginUser\" [permission]=\"permission\"></app-incident-comments>\r\n                                            </div>\r\n                                        </tab>\r\n                                        <!-- Attachments -->\r\n                                        <tab (selectTab)=\"setActiveIncidentTab($event)\" class=\"card-separator mb-3\" customClass=\"text-left\" id=\"2\">\r\n                                            <ng-template tabHeading>\r\n                                                <div class=\"d-flex\">\r\n                                                    <i class=\"fa fa-paperclip\"></i><span class=\"mt-1 ml-1\">{{'attachments.title' | translate}}</span>\r\n                                                </div>\r\n                                            </ng-template>\r\n                                            <!-- Task Attachment -->\r\n                                            <div class=\"col-lg-12 col-md-12 col-xs-12 col-sm-12 pr-0 pl-0\">\r\n                                                <app-incident-attachment [incident]=\"incident\" [loginUser]=\"loginUser\" [permission]=\"permission\"></app-incident-attachment>\r\n                                            </div>\r\n                                        </tab>\r\n                                        <!-- Notes -->\r\n                                        <tab (selectTab)=\"setActiveIncidentTab($event)\" class=\"card-separator mb-3 tab-width\" customClass=\"text-left\" id=\"3\">\r\n                                            <ng-template tabHeading>\r\n                                                <div class=\"d-flex\">\r\n                                                    <i class=\"fa fa-sticky-note-o\"></i><span class=\"mt-1 ml-1\">{{'notes.title' | translate}}</span>\r\n                                                </div>\r\n                                            </ng-template>\r\n                                            <!-- Notes -->\r\n                                            <div class=\"col-lg-12 col-md-12 col-xs-12 col-sm-12\">\r\n                                                <h4 class=\"sub-title mt-2\">\r\n                                                    <!-- <span>{{'notes.title' | translate}}</span> -->\r\n                                                </h4>\r\n                                                <div class=\"detail-inline\">\r\n                                                    <ng-container *ngIf=\"permission; else elseBlock4\">\r\n                                                        <inline-edit-text-editor (updateValue)=\"saveIncidentDetail('notes', $event);\" [elementFor]=\"'incidents.inline_edit.notes' | translate\" [fieldValue]=\"incident.notes\" [name]=\"'notes'\"></inline-edit-text-editor>\r\n                                                    </ng-container>\r\n                                                    <ng-template #elseBlock4>\r\n                                                        <p [innerHtml]=\"incident.notes\"></p>\r\n                                                    </ng-template>\r\n                                                </div>\r\n                                            </div>\r\n                                        </tab>\r\n                                        <!-- Activity -->\r\n                                        <tab (selectTab)=\"setActiveIncidentTab($event)\" class=\"card-separator mb-3\" customClass=\"text-left\" id=\"4\">\r\n                                            <ng-template tabHeading>\r\n                                                <div class=\"d-flex\">\r\n                                                    <i class=\"fa fa-list\"></i><span class=\"mt-1 ml-1\">{{'activities.title' | translate}}</span>\r\n                                                </div>\r\n                                            </ng-template>\r\n                                            <app-incident-activities [apiUrl]=\"apiUrl\" [incident]=\"incident\" [loginUser]=\"loginUser\"></app-incident-activities>\r\n                                        </tab>\r\n                                        <!-- History -->\r\n                                        <tab (selectTab)=\"setActiveIncidentTab($event)\" class=\"card-separator  mb-3 tab-width\" customClass=\"text-left\" id=\"5\">\r\n                                            <ng-template tabHeading>\r\n                                                <div class=\"d-flex\">\r\n                                                    <i class=\"fa fa-history\"></i><span class=\"mt-1 ml-1\">{{'histories.title' | translate}}</span>\r\n                                                </div>\r\n                                            </ng-template>\r\n                                            <app-incident-history [apiUrl]=\"apiUrl\" [incident]=\"incident\" [loginUser]=\"loginUser\"></app-incident-history>\r\n                                        </tab>\r\n                                    </tabset>\r\n                                    <!-- Tab Design End -->\r\n                                </div>\r\n                            </div>\r\n                        </div>\r\n                    </div>\r\n                </form>\r\n            </div>\r\n        </div>\r\n    </div>\r\n</div>\r\n");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/modules/pm/incidents/components/incident-history/incident-history.component.html":
/*!****************************************************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/modules/pm/incidents/components/incident-history/incident-history.component.html ***!
  \****************************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<!-- Card body -->\r\n<div class=\"card-body\">\r\n    <div class=\"row pl-2 pr-2 \">\r\n        <div class=\"col-md-12 mb-1 tab-table\">\r\n            <div class=\"table-responsive-xs table-responsive-sm table-responsive-md table-responsive-lg table-responsive-xl overflow-x-auto\">\r\n                <table [dtOptions]=\"dtOptions\" class=\"table table-bordered table-hover b4-datatable\" datatable id=\"history_table\" width=\"100%\">\r\n                    <thead>\r\n                    <tr>\r\n                        <th>{{'histories.columns.date' | translate }}</th>\r\n                        <th>{{'histories.columns.activity' | translate }}</th>\r\n                        <th>{{'histories.columns.creator' | translate }}</th>\r\n                        <th>{{'histories.columns.updated_by' | translate }}</th>\r\n                        <th>{{'histories.columns.commentor' | translate }}</th>\r\n                        <th>{{'histories.columns.solved_by' | translate }}</th>\r\n                        <th>{{'histories.columns.closed_by' | translate }}</th>\r\n                    </tr>\r\n                    </thead>\r\n                    <tbody>\r\n                    <tr *ngFor=\"let history of incident.history\">\r\n                        <td>{{ history.created_at | dateTimeFormatFilter: loginUser.settings.date_format }}</td>\r\n                        <td><p [innerHtml]=\"history.description\"></p></td>\r\n                        <td class=\"people-lists\">\r\n                            <ng-container *ngIf=\"userLists[history.created_by_id]; else elseBlock\">\r\n                                <a [routerLink]=\"['/users/profile', history.created_by_id]\" class=\"btn rounded-circle btn-profile-info text-dark\" placement=\"top\" tooltip=\"{{userLists[history.created_by_id].name}}\">\r\n                                    <img *ngIf=\"userLists[history.created_by_id].avatar\" alt=\"Profile\" class=\"img-sm rounded-circle\" src=\"{{apiUrl}}/uploads/profile/{{userLists[history.created_by_id].avatar}}\"/>\r\n                                    <img *ngIf=\"!userLists[history.created_by_id].avatar\" alt=\"Profile\" class=\"img-sm rounded-circle\" src=\"../assets/img/profile_small.jpg\"/>\r\n                                </a>\r\n                            </ng-container>\r\n                            <ng-template #elseBlock>-</ng-template>\r\n                        </td>\r\n                        <td class=\"people-lists\">\r\n                            <ng-container *ngIf=\"userLists[history.updated_by_id]; else elseBlock1\">\r\n                                <a [routerLink]=\"['/users/profile', history.updated_by_id]\" class=\"btn rounded-circle btn-profile-danger text-dark\" placement=\"top\" tooltip=\"{{userLists[history.updated_by_id].name}}\">\r\n                                    <img *ngIf=\"userLists[history.updated_by_id].avatar\" alt=\"Profile\" class=\"img-sm rounded-circle\" src=\"{{apiUrl}}/uploads/profile/{{userLists[history.updated_by_id].avatar}}\"/>\r\n                                    <img *ngIf=\"!userLists[history.updated_by_id].avatar\" alt=\"Profile\" class=\"img-sm rounded-circle\" src=\"../assets/img/profile_small.jpg\"/>\r\n                                </a>\r\n                            </ng-container>\r\n                            <ng-template #elseBlock1>-</ng-template>\r\n                        </td>\r\n                        <td class=\"people-lists\">\r\n                            <ng-container *ngIf=\"userLists[history.commented_by_id]; else elseBlock4\">\r\n                                <a [routerLink]=\"['/users/profile', history.commented_by_id]\" class=\"btn rounded-circle btn-profile-info text-dark\" placement=\"top\" tooltip=\"{{userLists[history.commented_by_id].name}}\">\r\n                                    <img *ngIf=\"userLists[history.commented_by_id].avatar\" alt=\"Profile\" class=\"img-sm rounded-circle\" src=\"{{apiUrl}}/uploads/profile/{{userLists[history.commented_by_id].avatar}}\"/>\r\n                                    <img *ngIf=\"!userLists[history.commented_by_id].avatar\" alt=\"Profile\" class=\"img-sm rounded-circle\" src=\"../assets/img/profile_small.jpg\"/>\r\n                                </a>\r\n                            </ng-container>\r\n                            <ng-template #elseBlock4>-</ng-template>\r\n                        </td>\r\n                        <td class=\"people-lists\">\r\n                            <ng-container *ngIf=\"userLists[history.solved_by_id]; else elseBlock2\">\r\n                                <a [routerLink]=\"['/users/profile', history.solved_by_id]\" class=\"btn rounded-circle btn-profile-info text-dark\" placement=\"top\" tooltip=\"{{userLists[history.solved_by_id].name}}\">\r\n                                    <img *ngIf=\"userLists[history.solved_by_id].avatar\" alt=\"Profile\" class=\"img-sm rounded-circle\" src=\"{{apiUrl}}/uploads/profile/{{userLists[history.solved_by_id].avatar}}\"/>\r\n                                    <img *ngIf=\"!userLists[history.solved_by_id].avatar\" alt=\"Profile\" class=\"img-sm rounded-circle\" src=\"../assets/img/profile_small.jpg\"/>\r\n                                </a>\r\n                            </ng-container>\r\n                            <ng-template #elseBlock2>-</ng-template>\r\n                        </td>\r\n                        <td class=\"people-lists\">\r\n                            <ng-container *ngIf=\"userLists[history.closed_by_id]; else elseBlock3\">\r\n                                <a [routerLink]=\"['/users/profile', history.closed_by_id]\" class=\"btn rounded-circle btn-profile-danger text-dark\" placement=\"top\" tooltip=\"{{userLists[history.closed_by_id].name}}\">\r\n                                    <img *ngIf=\"userLists[history.closed_by_id].avatar\" alt=\"Profile\" class=\"img-sm rounded-circle\" src=\"{{apiUrl}}/uploads/profile/{{userLists[history.closed_by_id].avatar}}\"/>\r\n                                    <img *ngIf=\"!userLists[history.closed_by_id].avatar\" alt=\"Profile\" class=\"img-sm rounded-circle\" src=\"../assets/img/profile_small.jpg\"/>\r\n                                </a>\r\n                            </ng-container>\r\n                            <ng-template #elseBlock3>-</ng-template>\r\n                        </td>\r\n                    </tr>\r\n                    </tbody>\r\n                </table>\r\n            </div>\r\n        </div>\r\n    </div>\r\n</div>\r\n");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/modules/pm/incidents/components/incident-notes/incident-notes.component.html":
/*!************************************************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/modules/pm/incidents/components/incident-notes/incident-notes.component.html ***!
  \************************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<!-- Card header -->\r\n<div class=\"card-header pl-0 pr-0 border-bottom\">\r\n    <h4 class=\"card-title mt-3\">{{'notes.title' | translate}}</h4>\r\n</div><!-- Card body -->\r\n<div class=\"card-body pt-3\">\r\n    <div class=\"row\">\r\n        <div class=\"col-lg-12\">\r\n            <form (ngSubmit)=\"onSubmit()\" [formGroup]=\"editNoteForm\" class=\"bs4-forms\">\r\n                <div class=\"form-group\">\r\n                    <app-ngx-editor [placeholder]=\"''\" [spellcheck]=\"true\" formControlName=\"notes\" height=\"100px\" id=\"notes\" minHeight=\"50px\"></app-ngx-editor>\r\n                </div>\r\n                <div *ngIf=\"permission\" class=\"form-group text-right mb-0\">\r\n                    <button class=\"btn btn-submit mb-0\" type=\"submit\">{{'common.update' | translate}}</button>\r\n                </div>\r\n            </form>\r\n        </div>\r\n    </div>\r\n</div>\r\n");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/modules/pm/incidents/pages/incident-create/incident-create.component.html":
/*!*********************************************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/modules/pm/incidents/pages/incident-create/incident-create.component.html ***!
  \*********************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<section *ngIf=\"isPageLoaded\" id=\"basic-form-layouts\">\r\n    <form (ngSubmit)=\"onSubmit()\" [formGroup]=\"createIncidentForm\">\r\n        <div class=\"row\">\r\n            <div class=\"col-md-6\">\r\n                <div class=\"card\">\r\n                    <div class=\"card-header\">\r\n                        <h4 class=\"card-title\">{{'incidents.title1' | translate }}</h4>\r\n                    </div>\r\n                    <div class=\"card-body\">\r\n                        <div class=\"px-3\">\r\n                            <div class=\"form-body\">\r\n                                <h4 class=\"form-section\">\r\n                                    <i class=\"fa fa-ticket\"></i> {{'incidents.headings.head1' | translate }}</h4>\r\n                                <div class=\"row\">\r\n                                    <div class=\"col-md-4\">\r\n                                        <div class=\"form-group\">\r\n                                            <label for=\"generated_id\">{{'incidents.create.fields.incident_ID' | translate }}&nbsp;<span class=\"text-danger\">*</span></label>\r\n                                            <input class=\"form-control\" formControlName=\"generated_id\" id=\"generated_id\" readonly type=\"text\"/>\r\n                                            <div *ngIf=\"isFormSubmitted && incidentControl.generated_id.errors\" class=\"invalid-feedback\">\r\n                                                <div *ngIf=\"incidentControl.generated_id.errors.required\">{{'incidents.create.error_messages.message3' | translate }}</div>\r\n                                            </div>\r\n                                        </div>\r\n                                    </div>\r\n                                    <div class=\"col-md-8\">\r\n                                        <div class=\"form-group\">\r\n                                            <label for=\"incident_name\">{{'incidents.create.fields.incident_name' | translate }}&nbsp;<span class=\"text-danger\">*</span></label>\r\n                                            <input [ngClass]=\"{ 'is-invalid': isFormSubmitted && incidentControl.incident_name.errors }\" class=\"form-control\" formControlName=\"incident_name\" id=\"incident_name\" placeholder=\"{{'incidents.create.placeholders.placeholder1' | translate }}\" type=\"text\"/>\r\n                                            <div *ngIf=\"isFormSubmitted && incidentControl.incident_name.errors\" class=\"invalid-feedback\">\r\n                                                <div *ngIf=\"incidentControl.incident_name.errors.required\">{{'incidents.create.error_messages.message1' | translate }}</div>\r\n                                                <div *ngIf=\"incidentControl.incident_name.errors.maxlength\">{{'incidents.create.error_messages.message2' | translate }}</div>\r\n                                            </div>\r\n                                        </div>\r\n                                    </div>\r\n                                    <div class=\"col-md-6\">\r\n                                        <div [ngClass]=\"{ 'is-invalid': isFormSubmitted && incidentControl.start_date.errors }\" class=\"form-group\">\r\n                                            <label for=\"start_date\">{{'incidents.create.fields.start_date' | translate }}</label>\r\n                                            <div class=\"position-relative has-icon-left\">\r\n                                                <input #dp1=\"bsDatepicker\" (bsValueChange)=\"startDateChange($event)\" [bsConfig]=\"datepickerConfig\" [minDate]=\"projectStartDate\" bsDatepicker class=\"form-control\" formControlName=\"start_date\" id=\"start_date\" placeholder=\"{{'incidents.create.placeholders.placeholder8' | translate }}\" type=\"text\"/>\r\n                                                <div class=\"form-control-position\"><i class=\"ft-calendar\"></i></div>\r\n                                                <div *ngIf=\"isFormSubmitted && incidentControl.start_date.errors\" class=\"invalid-feedback\">\r\n                                                    <div *ngIf=\"incidentControl.start_date.errors\">{{'incidents.create.error_messages.message7' | translate }}</div>\r\n                                                </div>\r\n                                            </div>\r\n                                        </div>\r\n                                    </div>\r\n                                    <div class=\"col-md-6\">\r\n                                        <div [ngClass]=\"{ 'is-invalid': isFormSubmitted && incidentControl.end_date.errors }\" class=\"form-group\">\r\n                                            <label for=\"end-date\">{{'incidents.create.fields.end_date' | translate }}</label>\r\n                                            <div class=\"position-relative has-icon-left\">\r\n                                                <input #dp2=\"bsDatepicker\" [bsConfig]=\"datepickerConfig\" [minDate]=\"createIncidentForm.get('start_date').value\" bsDatepicker class=\"form-control\" formControlName=\"end_date\" id=\"end_date\" placeholder=\"{{'incidents.create.placeholders.placeholder9' | translate }}\" type=\"text\"/>\r\n                                                <div class=\"form-control-position\"><i class=\"ft-calendar\"></i></div>\r\n                                                <div *ngIf=\"isFormSubmitted && incidentControl.end_date.errors\" class=\"invalid-feedback\">\r\n                                                    <div *ngIf=\"incidentControl.end_date.errors\">{{'incidents.create.error_messages.message8' | translate }}</div>\r\n                                                </div>\r\n                                            </div>\r\n                                        </div>\r\n                                    </div>\r\n                                    <div class=\"col-md-6\">\r\n                                        <div class=\"form-group\">\r\n                                            <label for=\"assigned_group_id\">{{'incidents.create.fields.assigned_group' | translate }}</label>\r\n                                            <ng-select (change)=\"assignGroupChange($event)\" [items]=\"teams\" [searchable]=\"true\" [selectOnTab]=\"true\" bindLabel=\"team_name\" bindValue=\"id\" formControlName=\"assigned_group_id\" labelForId=\"assigned_group_id\" placeholder=\"{{'incidents.create.placeholders.placeholder5' | translate }}\"></ng-select>\r\n                                        </div>\r\n                                    </div>\r\n                                    <div class=\"col-md-6\">\r\n                                        <div class=\"form-group\">\r\n                                            <label for=\"assign_to\">{{'incidents.create.fields.assigned_To' | translate }}</label>\r\n                                            <ng-select [items]=\"teamsMembers\" [multiple]=\"false\" [searchable]=\"true\" [selectOnTab]=\"true\" bindLabel=\"firstname\" bindValue=\"id\" formControlName=\"assign_to\" labelForId=\"assign_to\" placeholder=\"{{'common.unassigned' | translate}}\">\r\n                                                <ng-template let-item=\"item\" ng-option-tmp>\r\n                                                    {{item.firstname}} {{item.lastname}}\r\n                                                </ng-template>\r\n                                            </ng-select>\r\n                                        </div>\r\n                                    </div>\r\n                                    <div class=\"col-md-6\">\r\n                                        <div class=\"form-group\">\r\n                                            <label for=\"estimated_hours\">{{'incidents.create.fields.estimate_hours' | translate }}</label>\r\n                                            <input [ngClass]=\"{ 'is-invalid': isFormSubmitted && incidentControl.estimated_hours.errors }\" class=\"form-control\" formControlName=\"estimated_hours\" placeholder=\"00:00\" type='text'>\r\n                                            <div *ngIf=\"isFormSubmitted && incidentControl.estimated_hours.errors\" class=\"invalid-feedback\">\r\n                                                <div *ngIf=\"incidentControl.estimated_hours.errors.pattern\">{{'incidents.create.error_messages.message9' | translate }}</div>\r\n                                            </div>\r\n                                        </div>\r\n                                    </div>\r\n                                    <div class=\"col-md-6\">\r\n                                        <div [ngClass]=\"{ 'is-invalid': isFormSubmitted && incidentControl.status.errors }\" class=\"form-group\">\r\n                                            <label for=\"status\">{{'incidents.create.fields.status' | translate }}&nbsp;<span class=\"text-danger\">*</span>\r\n                                            </label>\r\n                                            <ng-select [items]=\"('incidents.status' | translate)\" [searchable]=\"true\" [selectOnTab]=\"true\" bindLabel=\"label\" bindValue=\"id\" formControlName=\"status\" labelForId=\"status\" placeholder=\"{{'incidents.create.placeholders.placeholder2' | translate }}\"></ng-select>\r\n                                            <div *ngIf=\"isFormSubmitted && incidentControl.status.errors\" class=\"invalid-feedback\">\r\n                                                <div *ngIf=\"incidentControl.status.errors.required\">{{'incidents.create.error_messages.message4' | translate }}</div>\r\n                                            </div>\r\n                                        </div>\r\n                                    </div>\r\n                                </div>\r\n                            </div>\r\n                        </div>\r\n                    </div>\r\n                </div>\r\n            </div>\r\n            <div class=\"col-md-6\">\r\n                <div class=\"card\">\r\n                    <div class=\"card-header\">&nbsp;</div>\r\n                    <div class=\"card-body\">\r\n                        <div class=\"px-3\">\r\n                            <div class=\"form-body\">\r\n                                <h4 class=\"form-section\">\r\n                                    <i class=\"ft-zap\"></i> {{'incidents.headings.head2' | translate }}</h4>\r\n                                <div class=\"row\">\r\n                                    <div class=\"col-md-6\">\r\n                                        <div class=\"form-group\">\r\n                                            <label for=\"project_id\">{{'incidents.create.fields.project' | translate }}</label>\r\n                                            <ng-select (change)=\"projectChange($event)\" [items]=\"projects\" [searchable]=\"true\" [selectOnTab]=\"true\" bindLabel=\"project_name\" bindValue=\"id\" formControlName=\"project_id\" labelForId=\"project_id\" placeholder=\"{{'incidents.create.placeholders.placeholder6' | translate }}\">\r\n                                                <ng-template let-item=\"item\" ng-option-tmp>\r\n                                                    {{item.project_name}}\r\n                                                </ng-template>\r\n                                            </ng-select>\r\n                                        </div>\r\n                                    </div>\r\n                                    <div class=\"col-md-6\">\r\n                                        <div class=\"form-group\">\r\n                                            <label for=\"project_version\">{{'incidents.create.fields.project_version' | translate }}</label>\r\n                                            <ng-select [items]=\"projectVersions\" [searchable]=\"true\" [selectOnTab]=\"true\" formControlName=\"project_version\" placeholder=\"{{'incidents.create.placeholders.placeholder7' | translate }}\">\r\n                                                <ng-template let-item=\"item\" ng-option-tmp>\r\n                                                    {{item}}\r\n                                                </ng-template>\r\n                                            </ng-select>\r\n                                        </div>\r\n                                    </div>\r\n                                </div>\r\n                                <h4 class=\"form-section\">\r\n                                    <i class=\"ft-box\"></i> {{'incidents.headings.head5' | translate}}</h4>\r\n                                <div class=\"row\">\r\n                                    <div class=\"col-md-6\">\r\n                                        <div [ngClass]=\"{ 'is-invalid': isFormSubmitted && incidentControl.priority.errors }\" class=\"form-group\">\r\n                                            <label for=\"priority\">{{'incidents.create.fields.priority' | translate }}&nbsp;<span class=\"text-danger\">*</span></label>\r\n                                            <ng-select [items]=\"('incidents.priorities' | translate)\" [searchable]=\"true\" [selectOnTab]=\"true\" bindLabel=\"label\" bindValue=\"id\" formControlName=\"priority\" labelForId=\"priority\" placeholder=\"{{'incidents.create.placeholders.placeholder3' | translate }}\"></ng-select>\r\n                                            <div *ngIf=\"isFormSubmitted && incidentControl.priority.errors\" class=\"invalid-feedback\">\r\n                                                <div *ngIf=\"incidentControl.priority.errors.required\">{{'incidents.create.error_messages.message5' | translate }}</div>\r\n                                            </div>\r\n                                        </div>\r\n                                    </div>\r\n                                    <div class=\"col-md-6\">\r\n                                        <div [ngClass]=\"{ 'is-invalid': isFormSubmitted && incidentControl.incident_type.errors }\" class=\"form-group\">\r\n                                            <label for=\"incident_type\">{{'incidents.create.fields.incident_type' | translate }}&nbsp;<span class=\"text-danger\">*</span></label>\r\n                                            <ng-select [items]=\"('incidents.incident_types' | translate)\" [searchable]=\"true\" [selectOnTab]=\"true\" bindLabel=\"label\" bindValue=\"id\" formControlName=\"incident_type\" labelForId=\"type\" placeholder=\"{{'incidents.create.placeholders.placeholder4' | translate }}\"></ng-select>\r\n                                            <div *ngIf=\"isFormSubmitted && incidentControl.incident_type.errors\" class=\"invalid-feedback\">\r\n                                                <div *ngIf=\"incidentControl.incident_type.errors.required\">{{'incidents.create.error_messages.message6' | translate }}</div>\r\n                                            </div>\r\n                                        </div>\r\n                                    </div>\r\n                                </div>\r\n                            </div>\r\n                        </div>\r\n                    </div>\r\n                </div>\r\n            </div>\r\n            <div *ngIf=\"customFields.length > 0\" class=\"col-md-12\">\r\n                <div class=\"card\">\r\n                    <div class=\"card-body\">\r\n                        <div class=\"px-3\">\r\n                            <div class=\"form-body\">\r\n                                <h4 class=\"form-section\">\r\n                                    <i class=\"ft-star\"></i>{{'incidents.headings.head3' | translate }}</h4>\r\n                                <div class=\"row mb-3\">\r\n                                    <div class=\"col-md-12\">\r\n                                        <app-show-custom-field-element [controls]=\"createIncidentForm.get('custom_field')\" [customFields]=\"customFields\" [formArray]=\"'custom_field'\" [formName]=\"createIncidentForm\" [isFormSubmitted]=\"isFormSubmitted\"></app-show-custom-field-element>\r\n                                    </div>\r\n                                </div>\r\n                            </div>\r\n                        </div>\r\n                    </div>\r\n                </div>\r\n            </div>\r\n            <div class=\"col-md-12\">\r\n                <div class=\"card\">\r\n                    <div class=\"card-body\">\r\n                        <div class=\"px-3\">\r\n                            <div class=\"form-body\">\r\n                                <h4 class=\"form-section\">\r\n                                    <i class=\"ft-message-square\"></i>{{'incidents.headings.head4' | translate }}</h4>\r\n                                <div class=\"row mb-3\">\r\n                                    <div class=\"col-md-12\">\r\n                                        <div class=\"form-group\">\r\n                                            <div class=\"form-group\">\r\n                                                <label for=\"description\">{{'incidents.create.fields.description' | translate }}</label>\r\n                                                <app-ngx-editor [placeholder]=\"''\" [spellcheck]=\"true\" formControlName=\"description\" height=\"100px\" id=\"description\" minHeight=\"50px\"></app-ngx-editor>\r\n                                            </div>\r\n                                        </div>\r\n                                    </div>\r\n                                    <div class=\"col-md-12 text-right\">\r\n                                        <a [routerLink]=\"['/incidents']\" class=\"btn btn-cancel mb-0\">{{'common.cancel' | translate}}</a>\r\n                                        <button class=\"btn btn-submit mb-0\" type=\"submit\">{{'common.create' | translate}}</button>\r\n                                    </div>\r\n                                </div>\r\n                            </div>\r\n                        </div>\r\n                    </div>\r\n                </div>\r\n            </div>\r\n        </div>\r\n    </form>\r\n</section>\r\n");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/modules/pm/incidents/pages/incident-detail/incident-detail.component.html":
/*!*********************************************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/modules/pm/incidents/pages/incident-detail/incident-detail.component.html ***!
  \*********************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<section class=\"row detail-page\">\r\n    <div *ngIf=\"isPageLoaded\" class=\"card bg-transparent\">\r\n        <app-incident-details [apiUrl]=\"apiUrl\" [incident]=\"incident\" [loginUser]=\"loginUser\" [permission]=\"permission\"></app-incident-details>\r\n    </div>\r\n</section>\r\n");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/modules/pm/incidents/pages/incident-edit/incident-edit.component.html":
/*!*****************************************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/modules/pm/incidents/pages/incident-edit/incident-edit.component.html ***!
  \*****************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<section *ngIf=\"isPageLoaded\" id=\"basic-form-layouts\">\r\n    <form (ngSubmit)=\"onSubmit()\" [formGroup]=\"editIncidentForm\">\r\n        <div class=\"row\">\r\n            <div class=\"col-md-6\">\r\n                <div class=\"card\">\r\n                    <div class=\"card-header\">\r\n                        <h4 class=\"card-title\">{{'incidents.title2' | translate }}</h4>\r\n                    </div>\r\n                    <div class=\"card-body\">\r\n                        <div class=\"px-3\">\r\n                            <div class=\"form-body\">\r\n                                <h4 class=\"form-section\">\r\n                                    <i class=\"fa fa-ticket\"></i> {{'incidents.headings.head1' | translate }}</h4>\r\n                                <div class=\"row\">\r\n                                    <div class=\"col-md-4\">\r\n                                        <div class=\"form-group\">\r\n                                            <label for=\"generated_id\">{{'incidents.create.fields.incident_ID' | translate }}&nbsp;<span class=\"text-danger\">*</span></label>\r\n                                            <input class=\"form-control\" formControlName=\"generated_id\" id=\"generated_id\" readonly type=\"text\"/>\r\n                                            <div *ngIf=\"isFormSubmitted && incidentControl.generated_id.errors\" class=\"invalid-feedback\">\r\n                                                <div *ngIf=\"incidentControl.generated_id.errors.required\">{{'incidents.create.error_messages.message3' | translate }}</div>\r\n                                            </div>\r\n                                        </div>\r\n                                    </div>\r\n                                    <div class=\"col-md-8\">\r\n                                        <div class=\"form-group\">\r\n                                            <label for=\"incident_name\">{{'incidents.create.fields.incident_name' | translate }}&nbsp;<span class=\"text-danger\">*</span></label>\r\n                                            <input [ngClass]=\"{ 'is-invalid': isFormSubmitted && incidentControl.incident_name.errors }\" class=\"form-control\" formControlName=\"incident_name\" id=\"incident_name\" placeholder=\"{{'incidents.create.placeholders.placeholder1' | translate }}\" type=\"text\"/>\r\n                                            <div *ngIf=\"isFormSubmitted && incidentControl.incident_name.errors\" class=\"invalid-feedback\">\r\n                                                <div *ngIf=\"incidentControl.incident_name.errors.required\">{{'incidents.create.error_messages.message1' | translate }}</div>\r\n                                                <div *ngIf=\"incidentControl.incident_name.errors.maxlength\">{{'incidents.create.error_messages.message2' | translate }}</div>\r\n                                            </div>\r\n                                        </div>\r\n                                    </div>\r\n                                    <div class=\"col-md-6\">\r\n                                        <div [ngClass]=\"{ 'is-invalid': isFormSubmitted && incidentControl.start_date.errors }\" class=\"form-group\">\r\n                                            <label for=\"start_date\">{{'incidents.create.fields.start_date' | translate }}</label>\r\n                                            <div class=\"position-relative has-icon-left\">\r\n                                                <input #dp1=\"bsDatepicker\" (onHidden)=\"startDateChange()\" [bsConfig]=\"datepickerConfig\" [minDate]=\"projectStartDate\" bsDatepicker class=\"form-control\" formControlName=\"start_date\" id=\"start_date\" placeholder=\"{{'incidents.create.placeholders.placeholder8' | translate }}\" type=\"text\"/>\r\n                                                <div class=\"form-control-position\"><i class=\"ft-calendar\"></i></div>\r\n                                                <div *ngIf=\"isFormSubmitted && incidentControl.start_date.errors\" class=\"invalid-feedback\">\r\n                                                    <div *ngIf=\"incidentControl.start_date.errors\">{{'incidents.create.error_messages.message7' | translate }}</div>\r\n                                                </div>\r\n                                            </div>\r\n                                        </div>\r\n                                    </div>\r\n                                    <div class=\"col-md-6\">\r\n                                        <div [ngClass]=\"{ 'is-invalid': isFormSubmitted && incidentControl.end_date.errors }\" class=\"form-group\">\r\n                                            <label for=\"end-date\">{{'incidents.create.fields.end_date' | translate }}</label>\r\n                                            <div class=\"position-relative has-icon-left\">\r\n                                                <input #dp2=\"bsDatepicker\" [bsConfig]=\"datepickerConfig\" [minDate]=\"editIncidentForm.get('start_date').value\" bsDatepicker class=\"form-control\" formControlName=\"end_date\" id=\"end_date\" placeholder=\"{{'incidents.create.placeholders.placeholder9' | translate }}\" type=\"text\"/>\r\n                                                <div class=\"form-control-position\"><i class=\"ft-calendar\"></i></div>\r\n                                                <div *ngIf=\"isFormSubmitted && incidentControl.end_date.errors\" class=\"invalid-feedback\">\r\n                                                    <div *ngIf=\"incidentControl.end_date.errors\">{{'incidents.create.error_messages.message8' | translate }}</div>\r\n                                                </div>\r\n                                            </div>\r\n                                        </div>\r\n                                    </div>\r\n                                    <div class=\"col-md-6\">\r\n                                        <div class=\"form-group\">\r\n                                            <label for=\"assigned_group_id\">{{'incidents.create.fields.assigned_group' | translate }}</label>\r\n                                            <ng-select (change)=\"assignGroupChange($event)\" [items]=\"teams\" [searchable]=\"true\" [selectOnTab]=\"true\" bindLabel=\"team_name\" bindValue=\"id\" formControlName=\"assigned_group_id\" labelForId=\"assigned_group_id\" placeholder=\"{{'incidents.create.placeholders.placeholder5' | translate }}\"></ng-select>\r\n                                        </div>\r\n                                    </div>\r\n                                    <div class=\"col-md-6\">\r\n                                        <div class=\"form-group\">\r\n                                            <label for=\"assign_to\">{{'incidents.create.fields.assigned_To' | translate }}</label>\r\n                                            <ng-select [items]=\"teamsMembers\" [multiple]=\"false\" [searchable]=\"true\" [selectOnTab]=\"true\" bindLabel=\"firstname\" bindValue=\"id\" formControlName=\"assign_to\" labelForId=\"assign_to\" placeholder=\"{{'common.unassigned' | translate}}\">\r\n                                                <ng-template let-item=\"item\" ng-option-tmp>\r\n                                                    {{item.firstname}} {{item.lastname}}\r\n                                                </ng-template>\r\n                                            </ng-select>\r\n                                        </div>\r\n                                    </div>\r\n                                    <div class=\"col-md-6\">\r\n                                        <div class=\"form-group\">\r\n                                            <label for=\"estimated_hours\">{{'incidents.create.fields.estimate_hours' | translate }}</label>\r\n                                            <input [ngClass]=\"{ 'is-invalid': isFormSubmitted && incidentControl.estimated_hours.errors }\" class=\"form-control\" formControlName=\"estimated_hours\" placeholder=\"00:00\" type='text'>\r\n                                            <div *ngIf=\"isFormSubmitted && incidentControl.estimated_hours.errors\" class=\"invalid-feedback\">\r\n                                                <div *ngIf=\"incidentControl.estimated_hours.errors.pattern\">{{'incidents.create.error_messages.message9' | translate }}</div>\r\n                                            </div>\r\n                                        </div>\r\n                                    </div>\r\n                                    <div class=\"col-md-6\">\r\n                                        <div [ngClass]=\"{ 'is-invalid': isFormSubmitted && incidentControl.status.errors }\" class=\"form-group\">\r\n                                            <label for=\"status\">{{'incidents.create.fields.status' | translate }}&nbsp;<span class=\"text-danger\">*</span>\r\n                                            </label>\r\n                                            <ng-select [items]=\"('incidents.status' | translate)\" [searchable]=\"true\" [selectOnTab]=\"true\" bindLabel=\"label\" bindValue=\"id\" formControlName=\"status\" labelForId=\"status\" placeholder=\"{{'incidents.create.placeholders.placeholder2' | translate }}\"></ng-select>\r\n                                            <div *ngIf=\"isFormSubmitted && incidentControl.status.errors\" class=\"invalid-feedback\">\r\n                                                <div *ngIf=\"incidentControl.status.errors.required\">{{'incidents.create.error_messages.message4' | translate }}</div>\r\n                                            </div>\r\n                                        </div>\r\n                                    </div>\r\n                                </div>\r\n                            </div>\r\n                        </div>\r\n                    </div>\r\n                </div>\r\n            </div>\r\n            <div class=\"col-md-6\">\r\n                <div class=\"card\">\r\n                    <div class=\"card-header\">&nbsp;</div>\r\n                    <div class=\"card-body\">\r\n                        <div class=\"px-3\">\r\n                            <div class=\"form-body\">\r\n                                <h4 class=\"form-section\">\r\n                                    <i class=\"ft-zap\"></i> {{'incidents.headings.head2' | translate }}</h4>\r\n                                <div class=\"row\">\r\n                                    <div class=\"col-md-6\">\r\n                                        <div class=\"form-group\">\r\n                                            <label for=\"project_id\">{{'incidents.create.fields.project' | translate }}</label>\r\n                                            <ng-select (change)=\"projectChange($event)\" [items]=\"projects\" [searchable]=\"true\" [selectOnTab]=\"true\" bindLabel=\"project_name\" bindValue=\"id\" formControlName=\"project_id\" labelForId=\"project_id\" placeholder=\"{{'incidents.create.placeholders.placeholder6' | translate }}\">\r\n                                                <ng-template let-item=\"item\" ng-option-tmp>\r\n                                                    {{item.project_name}}\r\n                                                </ng-template>\r\n                                            </ng-select>\r\n                                        </div>\r\n                                    </div>\r\n                                    <div class=\"col-md-6\">\r\n                                        <div class=\"form-group\">\r\n                                            <label for=\"project_version\">{{'incidents.create.fields.project_version' | translate }}</label>\r\n                                            <ng-select [items]=\"projectVersions\" [searchable]=\"true\" [selectOnTab]=\"true\" formControlName=\"project_version\" placeholder=\"{{'incidents.create.placeholders.placeholder7' | translate }}\">\r\n                                                <ng-template let-item=\"item\" ng-option-tmp>\r\n                                                    {{item}}\r\n                                                </ng-template>\r\n                                            </ng-select>\r\n                                        </div>\r\n                                    </div>\r\n                                </div>\r\n                                <h4 class=\"form-section\">\r\n                                    <i class=\"ft-box\"></i> {{'incidents.headings.head5' | translate}}</h4>\r\n                                <div class=\"row\">\r\n                                    <div class=\"col-md-6\">\r\n                                        <div [ngClass]=\"{ 'is-invalid': isFormSubmitted && incidentControl.priority.errors }\" class=\"form-group\">\r\n                                            <label for=\"priority\">{{'incidents.create.fields.priority' | translate }}&nbsp;<span class=\"text-danger\">*</span></label>\r\n                                            <ng-select [items]=\"('incidents.priorities' | translate)\" [searchable]=\"true\" [selectOnTab]=\"true\" bindLabel=\"label\" bindValue=\"id\" formControlName=\"priority\" labelForId=\"priority\" placeholder=\"{{'incidents.create.placeholders.placeholder3' | translate }}\"></ng-select>\r\n                                            <div *ngIf=\"isFormSubmitted && incidentControl.priority.errors\" class=\"invalid-feedback\">\r\n                                                <div *ngIf=\"incidentControl.priority.errors.required\">{{'incidents.create.error_messages.message5' | translate }}</div>\r\n                                            </div>\r\n                                        </div>\r\n                                    </div>\r\n                                    <div class=\"col-md-6\">\r\n                                        <div [ngClass]=\"{ 'is-invalid': isFormSubmitted && incidentControl.incident_type.errors }\" class=\"form-group\">\r\n                                            <label for=\"incident_type\">{{'incidents.create.fields.incident_type' | translate }}&nbsp;<span class=\"text-danger\">*</span></label>\r\n                                            <ng-select [items]=\"('incidents.incident_types' | translate)\" [searchable]=\"true\" [selectOnTab]=\"true\" bindLabel=\"label\" bindValue=\"id\" formControlName=\"incident_type\" labelForId=\"type\" placeholder=\"{{'incidents.create.placeholders.placeholder4' | translate }}\"></ng-select>\r\n                                            <div *ngIf=\"isFormSubmitted && incidentControl.incident_type.errors\" class=\"invalid-feedback\">\r\n                                                <div *ngIf=\"incidentControl.incident_type.errors.required\">{{'incidents.create.error_messages.message6' | translate }}</div>\r\n                                            </div>\r\n                                        </div>\r\n                                    </div>\r\n                                </div>\r\n                            </div>\r\n                        </div>\r\n                    </div>\r\n                </div>\r\n            </div>\r\n            <div *ngIf=\"customFields.length>0\" class=\"col-md-12\">\r\n                <div class=\"card\">\r\n                    <div class=\"card-body\">\r\n                        <div class=\"px-3\">\r\n                            <div class=\"form-body\">\r\n                                <h4 class=\"form-section\">\r\n                                    <i class=\"ft-star\"></i> {{'incidents.headings.head3' | translate }}</h4>\r\n                                <div class=\"row mb-3\">\r\n                                    <div class=\"col-md-12\">\r\n                                        <app-show-custom-field-element [controls]=\"editIncidentForm.get('custom_field')\" [customFields]=\"customFields\" [formArray]=\"'custom_field'\" [formName]=\"editIncidentForm\" [isFormSubmitted]=\"isFormSubmitted\"></app-show-custom-field-element>\r\n                                    </div>\r\n                                </div>\r\n                            </div>\r\n                        </div>\r\n                    </div>\r\n                </div>\r\n            </div>\r\n            <div class=\"col-md-12\">\r\n                <div class=\"card\">\r\n                    <div class=\"card-body\">\r\n                        <div class=\"px-3\">\r\n                            <div class=\"form-body\">\r\n                                <h4 class=\"form-section\">\r\n                                    <i class=\"ft-message-square\"></i> {{'incidents.headings.head4' | translate }}</h4>\r\n                                <div class=\"row mb-3\">\r\n                                    <div class=\"col-md-12\">\r\n                                        <div class=\"form-group\">\r\n                                            <div class=\"form-group\">\r\n                                                <label for=\"description\">{{'incidents.create.fields.description' | translate }}</label>\r\n                                                <app-ngx-editor [placeholder]=\"''\" [spellcheck]=\"true\" formControlName=\"description\" height=\"100px\" id=\"description\" minHeight=\"50px\"></app-ngx-editor>\r\n                                            </div>\r\n                                        </div>\r\n                                    </div>\r\n                                    <div class=\"col-md-12 text-right\">\r\n                                        <a class=\"btn btn-cancel mb-0\" href=\"#/incidents\">{{'common.cancel' | translate}}</a>\r\n                                        <button class=\"btn btn-submit mb-0\" type=\"submit\">{{'common.update' | translate}}</button>\r\n                                    </div>\r\n                                </div>\r\n                            </div>\r\n                        </div>\r\n                    </div>\r\n                </div>\r\n            </div>\r\n        </div>\r\n    </form>\r\n</section>\r\n");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/modules/pm/incidents/pages/incident-kanban/incident-kanban.component.html":
/*!*********************************************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/modules/pm/incidents/pages/incident-kanban/incident-kanban.component.html ***!
  \*********************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<section>\r\n    <div class=\"row\">\r\n        <div class=\"col-sm-12\">\r\n            <div class=\"card pl-2 pr-2 pb-2\">\r\n                <!-- Card header -->\r\n                <div class=\"card-header pl-0 pr-0\">\r\n                    <div class=\"col-sm-12\">\r\n                        <div class=\"row\">\r\n                            <div class=\"col-sm-3 p-0\">\r\n                                <h4 class=\"main-title mt-2 text-left\">\r\n                                    <span>{{'kanban_board.title2' | translate }}</span></h4>\r\n                            </div>\r\n                            <div class=\"col-sm-9 p-0\">\r\n                                <div class=\"card-buttons d-lg-flex float-lg-right\">\r\n                                    <div class=\"mr-md-1 mt-lg-0 mt-2\">\r\n                                        <ng-select (change)=\"getIncidents($event?.id, filter)\" [(ngModel)]=\"projectId\" [items]=\"projects\" [searchable]=\"true\" [selectOnTab]=\"true\" bindLabel=\"project_name\" bindValue=\"id\" labelForId=\"projectId\" placeholder=\"{{'common.placeholders.placeholder1' | translate}}\">\r\n                                            <ng-template let-item=\"item\" ng-option-tmp>\r\n                                                {{item.project_name}}\r\n                                            </ng-template>\r\n                                        </ng-select>\r\n                                    </div>\r\n                                    <div class=\"mr-1 mt-lg-0 mt-2 float-left tab-filter\">\r\n                                        <div class=\"btn-group\">\r\n                                            <label (click)=\"getIncidents(projectId, filter)\" [(ngModel)]=\"filter\" btnRadio=\"all\" class=\"btn btn-secondary\" role=\"button\" tabindex=\"0\">{{'common.status.all' | translate}}</label>\r\n                                            <label (click)=\"getIncidents(projectId, filter)\" [(ngModel)]=\"filter\" btnRadio=\"my\" class=\"btn btn-secondary\" role=\"button\" tabindex=\"0\">{{'common.status.my' | translate}}</label>\r\n                                        </div>\r\n                                    </div>\r\n                                    <div class=\"float-right mt-lg-0 mt-2\">\r\n                                        <a [routerLink]=\"['/incidents']\" class=\"btn btn-create mb-0 mr-1\" tooltip=\"{{'common.switch_to_list' | translate}}\"><i class=\"fa fa-list\"></i><span>{{'common.list' | translate}}</span></a>\r\n                                        <a *ngxPermissionsOnly=\"['admin', 'super_admin', 'incidents_create']\" [routerLink]=\"['/incidents/create']\" class=\"btn btn-create mb-0\" tooltip=\"{{'common.create' | translate}}\"><i class=\"fa fa-plus\"></i></a>\r\n                                    </div>\r\n                                </div>\r\n                            </div>\r\n                        </div>\r\n                    </div>\r\n                </div>\r\n                <!-- Card body -->\r\n                <div class=\"card-body\">\r\n                    <div class=\"row mb-4 taskboard\">\r\n                        <div class=\"col-md-3 col-lg-3 col-xl-3 col-12\">\r\n                            <h4 class=\"ml-2 mt-2 text-bold-500\">\r\n                                <i class=\"ft-list mr-1\"></i>&nbsp;{{'common.status.open' | translate}}</h4>\r\n                            <p class=\"ml-2 small\">\r\n                                <i class=\"fa fa-hand-o-up\"></i>&nbsp;{{'kanban_board.budges.budges1' | translate }}</p>\r\n                            <div class=\"drag-container\">\r\n                                <div #openLists=\"cdkDropList\" (cdkDropListDropped)=\"drop($event)\" [cdkDropListConnectedTo]=\"[assignedList, inprogressLists, completedLists]\" [cdkDropListData]=\"openIncidents\" cdkDropList class=\"item-list\">\r\n                                    <ul class=\"pl-0 open\">\r\n                                        <li *ngFor=\"let incident of openIncidents | orderBy: 'orders'\" cdkDrag class=\"card\">\r\n                                            <div class=\"card-box\">\r\n                                                <div class=\"row\">\r\n                                                    <h6 class=\"col-12 card-text\">\r\n                                                        <a [routerLink]=\"['/incidents/detail', incident.id]\" class=\"text-info\" tooltip=\"{{'common.view' | translate}}\">{{incident.generated_id}}</a>\r\n                                                        <ng-container *ngFor=\"let priority of ('incidents.priorities' | translate)\">\r\n                                                            <div class=\"budges-status d-inline\">\r\n                                                                <span *ngIf=\"priority.id == incident.priority\" class=\"{{priority.class}} pull-right\">{{priority.label | strToFirstLetter}}</span>\r\n                                                            </div>\r\n                                                        </ng-container>\r\n                                                        <br>{{incident.incident_name}}\r\n                                                    </h6>\r\n                                                </div>\r\n                                                <div class=\"row mt-2\">\r\n                                                    <div class=\"col-12\">\r\n                                                        <div class=\"taskboard-foot d-flex justify-content-between\">\r\n                                                            <div class=\"taskboard-date\">\r\n                                                                <i class=\"fa fa-calendar-o\"></i>&nbsp;{{incident.created_at | dateTimeFormatFilter: loginUser.settings.date_format}}\r\n                                                            </div>\r\n                                                            <div class=\"people-lists\">\r\n                                                                <ng-container *ngIf=\"incident.assign_user == null; else elseBlock\">\r\n                                                                    <a class=\"btn btn-profile-danger rounded-circle text-dark\" href=\"javascript:void(0);\" placement=\"top\" tooltip=\"{{'common.unassigned' | translate}}\">\r\n                                                                        <img alt=\"Profile\" class=\"img-sm rounded-circle\" src=\"../assets/img/unassign.jpg\"/>\r\n                                                                    </a>\r\n                                                                </ng-container>\r\n                                                                <ng-template #elseBlock>\r\n                                                                    <a [routerLink]=\"['/users/profile', incident.assign_user.id]\" class=\"btn rounded-circle text-dark btn-profile-danger\" placement=\"top\" tooltip=\"{{incident.assign_user.firstname}} {{incident.assign_user.lastname}}\">\r\n                                                                        <img *ngIf=\"incident.assign_user.avatar\" alt=\"Profile\" class=\"img-sm rounded-circle\" src=\"{{apiUrl}}/uploads/profile/{{incident.assign_user.avatar}}\"/>\r\n                                                                        <img *ngIf=\"!incident.assign_user.avatar\" alt=\"Profile\" class=\"img-sm rounded-circle\" src=\"../assets/img/profile_small.jpg\"/>\r\n                                                                    </a>\r\n                                                                </ng-template>\r\n                                                            </div>\r\n                                                        </div>\r\n                                                    </div>\r\n                                                </div>\r\n                                            </div>\r\n                                        </li>\r\n                                    </ul>\r\n                                </div>\r\n                            </div>\r\n                        </div>\r\n                        <div class=\"col-md-3 col-lg-3 col-xl-3 col-12\">\r\n                            <h4 class=\"ml-2 mt-2 text-bold-500\">\r\n                                <i class=\"ft-user-check mr-1\"></i>&nbsp;{{'common.status.assigned' | translate}}</h4>\r\n                            <p class=\"ml-2 small\">\r\n                                <i class=\"fa fa-hand-o-up\"></i>&nbsp;{{'kanban_board.budges.budges1' | translate }}</p>\r\n                            <div class=\"drag-container\">\r\n                                <div #assignedList=\"cdkDropList\" (cdkDropListDropped)=\"drop($event)\" [cdkDropListConnectedTo]=\"[openLists, inprogressLists, completedLists]\" [cdkDropListData]=\"assignedIncidents\" cdkDropList class=\"item-list\">\r\n                                    <ul class=\"pl-0 assigned\">\r\n                                        <li *ngFor=\"let incident of assignedIncidents | orderBy: 'orders'\" cdkDrag class=\"card\">\r\n                                            <div class=\"card-box\">\r\n                                                <div class=\"row\">\r\n                                                    <h6 class=\"col-12 card-text\">\r\n                                                        <a [routerLink]=\"['/incidents/detail', incident.id]\" class=\"text-info\" tooltip=\"{{'common.view' | translate}}\">{{incident.generated_id}}</a>\r\n                                                        <ng-container *ngFor=\"let priority of ('incidents.priorities' | translate)\">\r\n                                                            <div class=\"budges-status d-inline\">\r\n                                                                <span *ngIf=\"priority.id == incident.priority\" class=\"{{priority.class}} pull-right\">{{priority.label | strToFirstLetter}}</span>\r\n                                                            </div>\r\n                                                        </ng-container>\r\n                                                        <br>{{incident.incident_name}}\r\n                                                    </h6>\r\n                                                </div>\r\n                                                <div class=\"row mt-2\">\r\n                                                    <div class=\"col-12\">\r\n                                                        <div class=\"taskboard-foot d-flex justify-content-between\">\r\n                                                            <div class=\"taskboard-date\">\r\n                                                                <i class=\"fa fa-calendar-o\"></i>&nbsp;{{incident.created_at | dateTimeFormatFilter: loginUser.settings.date_format}}\r\n                                                            </div>\r\n                                                            <div class=\"people-lists\">\r\n                                                                <ng-container *ngIf=\"incident.assign_user == null; else elseBlock1\">\r\n                                                                    <a class=\"btn btn-profile-danger rounded-circle text-dark\" href=\"javascript:void(0);\" placement=\"top\" tooltip=\"{{'common.unassigned' | translate}}\">\r\n                                                                        <img alt=\"Profile\" class=\"img-sm rounded-circle\" src=\"../assets/img/unassign.jpg\"/>\r\n                                                                    </a>\r\n                                                                </ng-container>\r\n                                                                <ng-template #elseBlock1>\r\n                                                                    <a [routerLink]=\"['/users/profile', incident.assign_user.id]\" class=\"btn rounded-circle text-dark btn-profile-danger\" placement=\"top\" tooltip=\"{{incident.assign_user.firstname}} {{incident.assign_user.lastname}}\">\r\n                                                                        <img *ngIf=\"incident.assign_user.avatar\" alt=\"Profile\" class=\"img-sm rounded-circle\" src=\"{{apiUrl}}/uploads/profile/{{incident.assign_user.avatar}}\"/>\r\n                                                                        <img *ngIf=\"!incident.assign_user.avatar\" alt=\"Profile\" class=\"img-sm rounded-circle\" src=\"../assets/img/profile_small.jpg\"/>\r\n                                                                    </a>\r\n                                                                </ng-template>\r\n                                                            </div>\r\n                                                        </div>\r\n                                                    </div>\r\n                                                </div>\r\n                                            </div>\r\n                                        </li>\r\n                                    </ul>\r\n                                </div>\r\n                            </div>\r\n                        </div>\r\n                        <div class=\"col-md-3 col-lg-3 col-xl-3 col-12\">\r\n                            <h4 class=\"ml-2 mt-2 text-bold-500\">\r\n                                <i class=\"ft-trending-up mr-1\"></i>&nbsp;{{'common.status.in_progress' | translate}}\r\n                            </h4>\r\n                            <p class=\"ml-2 small\">\r\n                                <i class=\"fa fa-hand-o-up\"></i>&nbsp;{{'kanban_board.budges.budges1' | translate }}</p>\r\n                            <div class=\"drag-container\">\r\n                                <div #inprogressLists=\"cdkDropList\" (cdkDropListDropped)=\"drop($event)\" [cdkDropListConnectedTo]=\"[assignedList, openLists, completedLists]\" [cdkDropListData]=\"inprogressIncidents\" cdkDropList class=\"item-list\">\r\n                                    <ul class=\"pl-0 in-progress\">\r\n                                        <li *ngFor=\"let incident of inprogressIncidents | orderBy: 'orders'\" cdkDrag class=\"card\">\r\n                                            <div class=\"card-box\">\r\n                                                <div class=\"row\">\r\n                                                    <h6 class=\"col-12 card-text\">\r\n                                                        <a [routerLink]=\"['/incidents/detail', incident.id]\" class=\"text-info\" tooltip=\"{{'common.view' | translate}}\">{{incident.generated_id}}</a>\r\n                                                        <ng-container *ngFor=\"let priority of ('incidents.priorities' | translate)\">\r\n                                                            <div class=\"budges-status d-inline\">\r\n                                                                <span *ngIf=\"priority.id == incident.priority\" class=\"{{priority.class}} pull-right\">{{priority.label | strToFirstLetter}}</span>\r\n                                                            </div>\r\n                                                        </ng-container>\r\n                                                        <br>{{incident.incident_name}}\r\n                                                    </h6>\r\n                                                </div>\r\n                                                <div class=\"row mt-2\">\r\n                                                    <div class=\"col-12\">\r\n                                                        <div class=\"taskboard-foot d-flex justify-content-between\">\r\n                                                            <div class=\"taskboard-date\">\r\n                                                                <i class=\"fa fa-calendar-o\"></i>&nbsp;{{incident.created_at | dateTimeFormatFilter: loginUser.settings.date_format}}\r\n                                                            </div>\r\n                                                            <div class=\"people-lists\">\r\n                                                                <ng-container *ngIf=\"incident.assign_user == null; else elseBlock2\">\r\n                                                                    <a class=\"btn btn-profile-danger rounded-circle text-dark\" href=\"javascript:void(0);\" placement=\"top\" tooltip=\"{{'common.unassigned' | translate}}\">\r\n                                                                        <img alt=\"Profile\" class=\"img-sm rounded-circle\" src=\"../assets/img/unassign.jpg\"/>\r\n                                                                    </a>\r\n                                                                </ng-container>\r\n                                                                <ng-template #elseBlock2>\r\n                                                                    <a [routerLink]=\"['/users/profile', incident.assign_user.id]\" class=\"btn rounded-circle text-dark btn-profile-danger\" placement=\"top\" tooltip=\"{{incident.assign_user.firstname}} {{incident.assign_user.lastname}}\">\r\n                                                                        <img *ngIf=\"incident.assign_user.avatar\" alt=\"Profile\" class=\"img-sm rounded-circle\" src=\"{{apiUrl}}/uploads/profile/{{incident.assign_user.avatar}}\"/>\r\n                                                                        <img *ngIf=\"!incident.assign_user.avatar\" alt=\"Profile\" class=\"img-sm rounded-circle\" src=\"../assets/img/profile_small.jpg\"/>\r\n                                                                    </a>\r\n                                                                </ng-template>\r\n                                                            </div>\r\n                                                        </div>\r\n                                                    </div>\r\n                                                </div>\r\n                                            </div>\r\n                                        </li>\r\n                                    </ul>\r\n                                </div>\r\n                            </div>\r\n                        </div>\r\n                        <div class=\"col-md-3 col-lg-3 col-xl-3 col-12\">\r\n                            <h4 class=\"ml-2 mt-2 text-bold-500\">\r\n                                <i class=\"ft-thumbs-up mr-1\"></i>&nbsp;{{'common.status.completed' | translate}}</h4>\r\n                            <p class=\"ml-2 small\">\r\n                                <i class=\"fa fa-hand-o-up\"></i>&nbsp;{{'kanban_board.budges.budges1' | translate }}</p>\r\n                            <div class=\"drag-container\">\r\n                                <div #completedLists=\"cdkDropList\" (cdkDropListDropped)=\"drop($event)\" [cdkDropListConnectedTo]=\"[assignedList, openLists, inprogressLists]\" [cdkDropListData]=\"completedIncidents\" cdkDropList class=\"item-list\">\r\n                                    <ul class=\"pl-0 completed\">\r\n                                        <li *ngFor=\"let incident of completedIncidents | orderBy: 'orders'\" cdkDrag class=\"card\">\r\n                                            <div class=\"card-box\">\r\n                                                <div class=\"row\">\r\n                                                    <h6 class=\"col-12 card-text\">\r\n                                                        <a [routerLink]=\"['/incidents/detail', incident.id]\" class=\"text-info\" tooltip=\"{{'common.view' | translate}}\">{{incident.generated_id}}</a>\r\n                                                        <ng-container *ngFor=\"let priority of ('incidents.priorities' | translate)\">\r\n                                                            <div class=\"budges-status d-inline\">\r\n                                                                <span *ngIf=\"priority.id == incident.priority\" class=\"{{priority.class}} pull-right\">{{priority.label | strToFirstLetter}}</span>\r\n                                                            </div>\r\n                                                        </ng-container>\r\n                                                        <br>{{incident.incident_name}}\r\n                                                    </h6>\r\n                                                </div>\r\n                                                <div class=\"row mt-2\">\r\n                                                    <div class=\"col-12\">\r\n                                                        <div class=\"taskboard-foot d-flex justify-content-between\">\r\n                                                            <div class=\"taskboard-date\">\r\n                                                                <i class=\"fa fa-calendar-o\"></i>&nbsp;{{incident.created_at | dateTimeFormatFilter: loginUser.settings.date_format}}\r\n                                                            </div>\r\n                                                            <div class=\"people-lists\">\r\n                                                                <ng-container *ngIf=\"incident.assign_user == null; else elseBlock3\">\r\n                                                                    <a class=\"btn btn-profile-danger rounded-circle text-dark\" href=\"javascript:void(0);\" placement=\"top\" tooltip=\"{{'common.unassigned' | translate}}\">\r\n                                                                        <img alt=\"Profile\" class=\"img-sm rounded-circle\" src=\"../assets/img/unassign.jpg\"/>\r\n                                                                    </a>\r\n                                                                </ng-container>\r\n                                                                <ng-template #elseBlock3>\r\n                                                                    <a [routerLink]=\"['/users/profile', incident.assign_user.id]\" class=\"btn rounded-circle text-dark btn-profile-danger\" placement=\"top\" tooltip=\"{{incident.assign_user.firstname}} {{incident.assign_user.lastname}}\">\r\n                                                                        <img *ngIf=\"incident.assign_user.avatar\" alt=\"Profile\" class=\"img-sm rounded-circle\" src=\"{{apiUrl}}/uploads/profile/{{incident.assign_user.avatar}}\"/>\r\n                                                                        <img *ngIf=\"!incident.assign_user.avatar\" alt=\"Profile\" class=\"img-sm rounded-circle\" src=\"../assets/img/profile_small.jpg\"/>\r\n                                                                    </a>\r\n                                                                </ng-template>\r\n                                                            </div>\r\n                                                        </div>\r\n                                                    </div>\r\n                                                </div>\r\n                                            </div>\r\n                                        </li>\r\n                                    </ul>\r\n                                </div>\r\n                            </div>\r\n                        </div>\r\n                    </div>\r\n                </div>\r\n            </div>\r\n        </div>\r\n    </div>\r\n</section>\r\n");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/modules/pm/incidents/pages/incident-list/incident-list.component.html":
/*!*****************************************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/modules/pm/incidents/pages/incident-list/incident-list.component.html ***!
  \*****************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<section class=\"hide_empty_message\">\r\n    <div class=\"row\">\r\n        <div class=\"col-sm-12\">\r\n            <div class=\"card pl-2 pr-2 pb-2\">\r\n                <!-- Card header -->\r\n                <div class=\"card-header pl-0 pr-0 border-bottom\">\r\n                    <h4 class=\"main-title mt-2\"><span>{{'incidents.title' | translate}}</span></h4>\r\n                    <div class=\"card-buttons\">\r\n                        <a [routerLink]=\"['/incidents/kanban']\" class=\"btn btn-create mb-0\" tooltip=\"{{'common.switch_to_kanban' | translate}}\"><i class=\"fa fa-trello\"></i><span>{{'common.kanban' | translate}}</span></a>\r\n                        <a *ngxPermissionsOnly=\"['admin', 'super_admin', 'incidents_create']\" [routerLink]=\"['/incidents/create']\" class=\"btn btn-create mb-0\" tooltip=\"{{'common.create' | translate}}\"><i class=\"fa fa-plus\"></i></a>\r\n                    </div>\r\n                </div>\r\n                <!-- Card content -->\r\n                <div class=\"card-content pt-3\">\r\n                    <!-- Card body -->\r\n                    <div class=\"card-body\">\r\n                        <!-- Filter buttons -->\r\n                        <div *ngIf=\"isPageLoaded\" class=\"d-flex flex-column flex-lg-row d-lg-inline-flex btn-filters mb-3\">\r\n                            <div class=\"pr-0\">\r\n                                <div class=\"btn-group mr-2 mb-2\">\r\n                                    <label (click)=\"filterByStatus(statusfilterId, incidentFilterKey)\" [(ngModel)]=\"incidentFilterKey\" btnRadio=\"all\" class=\"btn btn-secondary btn-toggle m-0\" role=\"button\" tabindex=\"0\">{{'common.status.all' | translate}}</label>\r\n                                    <label (click)=\"filterByStatus(statusfilterId, incidentFilterKey)\" [(ngModel)]=\"incidentFilterKey\" btnRadio=\"selected\" class=\"btn btn-secondary btn-toggle m-0\" role=\"button\" tabindex=\"0\">{{'common.status.my' | translate}}</label>\r\n                                </div>\r\n                            </div>\r\n                            <div class=\"pl-lg-0\">\r\n                                <button (click)=\"filterByStatus(1, incidentFilterKey)\" [ngClass]=\"{'active': statusfilterId==1}\" class=\"btn btn-raised open\" type=\"button\">\r\n                                    <p>{{'common.status.open' | translate}}</p>\r\n                                    <span class=\"badge badge-light\">\r\n                                        <ng-container *ngIf=\"countStatus.open || countStatus.re_open; else elseCondition2;\">{{countStatus.open + countStatus.re_open}}</ng-container>\r\n                                        <ng-template #elseCondition2>0</ng-template>\r\n                                    </span>\r\n                                </button>\r\n                                <button (click)=\"filterByStatus(2, incidentFilterKey)\" [ngClass]=\"{'active': statusfilterId ==2}\" class=\"btn btn-raised assigned\" type=\"button\">\r\n                                    <p>{{'common.status.assigned' | translate}}</p>\r\n                                    <span class=\"badge badge-light\">\r\n                                        <ng-container *ngIf=\"countStatus.assigned; else elseCondition3;\">{{countStatus.assigned}}</ng-container>\r\n                                        <ng-template #elseCondition3>0</ng-template>\r\n                                    </span>\r\n                                </button>\r\n                                <button (click)=\"filterByStatus(3, incidentFilterKey)\" [ngClass]=\"{'active': statusfilterId==3}\" class=\"btn btn-raised in_progress\" type=\"button\">\r\n                                    <p>{{'common.status.in_progress' | translate}}</p>\r\n                                    <span class=\"badge badge-light\">\r\n                                        <ng-container *ngIf=\"countStatus.in_progress; else elseCondition4;\">{{countStatus.in_progress}}</ng-container>\r\n                                        <ng-template #elseCondition4>0</ng-template>\r\n                                    </span>\r\n                                </button>\r\n                                <button (click)=\"filterByStatus(4, incidentFilterKey)\" [ngClass]=\"{'active': statusfilterId==4}\" class=\"btn btn-raised solved\" type=\"button\">\r\n                                    <p>{{'common.status.solved' | translate}}</p>\r\n                                    <span class=\"badge badge-light\">\r\n                                        <ng-container *ngIf=\"countStatus.solved || countStatus.deferred || countStatus.closed; else elseCondition5;\">{{countStatus.solved + countStatus.deferred + countStatus.closed}}</ng-container>\r\n                                        <ng-template #elseCondition5>0</ng-template>\r\n                                    </span>\r\n                                </button>\r\n                                <button [ngClass]=\"{'active': statusfilterId ==0}\" [routerLink]=\"['/incidents', 0, incidentFilterKey]\" class=\"btn btn-raised  btn-secondary\" type=\"button\">\r\n                                    <p>{{'common.status.total' | translate}}</p>\r\n                                    <span class=\"badge badge-light\">\r\n                                        <ng-container *ngIf=\"countStatus.all; else elseCondition1;\">{{countStatus.all}}</ng-container>\r\n                                        <ng-template #elseCondition1>0</ng-template>\r\n                                    </span>\r\n                                </button>\r\n                            </div>\r\n                        </div>\r\n                        <!-- Incident list datatable -->\r\n                        <div class=\"row\">\r\n                            <div class=\"col-sm-12\">\r\n                                <div class=\"table-responsive-xs table-responsive-sm table-responsive-md table-responsive-lg table-responsive-xl overflow-x-auto\">\r\n                                    <table [dtOptions]=\"dtOptions\" [dtTrigger]=\"dtTrigger\" class=\"table table-bordered table-hover b4-datatable\" datatable id=\"incident_table\" width=\"100%\">\r\n                                        <thead>\r\n                                        <tr>\r\n                                            <th>{{'incidents.columns.id' | translate}}</th>\r\n                                            <th>{{'incidents.columns.incident_name' | translate}}</th>\r\n                                            <th>{{'incidents.columns.start_date' | translate}}</th>\r\n                                            <th>{{'incidents.columns.end_date' | translate}}</th>\r\n                                            <th>{{'incidents.columns.actual_hours' | translate}}</th>\r\n                                            <th>{{'incidents.columns.assigned' | translate}}</th>\r\n                                            <th>{{'incidents.columns.priority' | translate}}</th>\r\n                                            <th>{{'incidents.columns.status' | translate}}</th>\r\n                                            <th>{{'incidents.columns.actions' | translate}}</th>\r\n                                        </tr>\r\n                                        </thead>\r\n                                        <tbody *ngIf=\"incidents?.length != 0\">\r\n                                        <tr *ngFor=\"let incident of incidents; index as i\">\r\n                                            <td>\r\n                                                <a [routerLink]=\"['/incidents/detail', incident.id]\" tooltip=\"{{'common.view' | translate}}\">{{incident.generated_id}}</a>\r\n                                            </td>\r\n                                            <td>\r\n                                                <ng-container *ngIf=\"getCheckPermission(incident); else elseBlock\">\r\n                                                    <inline-edit-input (updateValue)=\"saveIncidentDetail(i, 'incident_name', $event);\" [elementFor]=\"'incidents.inline_edit.incident_name' | translate\" [fieldValue]=\"incident.incident_name\" [isRequired]=\"'true'\" [name]=\"'incident_name'\" [type]=\"'text'\"></inline-edit-input>\r\n                                                </ng-container>\r\n                                                <ng-template #elseBlock>{{incident.incident_name}}</ng-template>\r\n                                            </td>\r\n                                            <td>{{incident.start_date | dateTimeFormatFilter: loginUser.settings.date_format}}</td>\r\n                                            <td>{{incident.end_date | dateTimeFormatFilter: loginUser.settings.date_format}}</td>\r\n                                            <td>{{incident.actual_hours}}</td>\r\n                                            <td class=\"people-lists\">\r\n                                                <ng-container *ngIf=\"incident.assign_to == 'Unassign' || incident.assign_to == '' || incident.assign_to == null; else elseBlock3\">\r\n                                                    <a class=\"btn btn-profile-danger rounded-circle text-dark\" href=\"javascript:void(0);\" placement=\"top\" tooltip=\"{{'common.unassigned' | translate}}\">\r\n                                                        <img alt=\"Profile\" class=\"img-sm rounded-circle\" src=\"../assets/img/unassign.jpg\"/>\r\n                                                    </a>\r\n                                                </ng-container>\r\n                                                <ng-template #elseBlock3>\r\n                                                    <a [routerLink]=\"['/users/profile', incident.assign_to]\" class=\"btn rounded-circle text-dark btn-profile-danger\" placement=\"top\" tooltip=\"{{incident.assigned_firstname}} {{incident.assigned_lastname}}\">\r\n                                                        <img *ngIf=\"incident.assigned_avatar\" alt=\"Profile\" class=\"img-sm rounded-circle\" src=\"{{apiUrl}}/uploads/profile/{{incident.assigned_avatar}}\"/>\r\n                                                        <img *ngIf=\"!incident.assigned_avatar\" alt=\"Profile\" class=\"img-sm rounded-circle\" src=\"../assets/img/profile_small.jpg\"/>\r\n                                                    </a>\r\n                                                </ng-template>\r\n                                            </td>\r\n                                            <td>\r\n                                                <ng-container *ngIf=\"getCheckPermission(incident); else elseBlock2\">\r\n                                                    <div class=\"status-dropdown\">\r\n                                                        <div class=\"btn-group\" dropdown>\r\n                                                            <button aria-controls=\"dropdown-basic\" class=\"btn dropdown-toggle\" dropdownToggle id=\"button-basic\" type=\"button\">{{getTranslatePriorities(incident.priority) | translate}}&nbsp;<span class=\"caret\"></span>\r\n                                                            </button>\r\n                                                            <ul *dropdownMenu class=\"dropdown-menu animated fadeIn\" id=\"dropdown-basic\" role=\"menu\">\r\n                                                                <li *ngFor=\"let priority of ('incidents.priorities' | translate)\" role=\"menuitem\">\r\n                                                                    <a (click)=\"changeIncidentSeverity([incident.id], priority);incident.priority = priority.id\" [ngClass]=\"{'active': incident.priority == priority.id}\" class=\"dropdown-item btn btn-sm {{priority.class}}\">{{priority.label}}</a>\r\n                                                                </li>\r\n                                                            </ul>\r\n                                                        </div>\r\n                                                    </div>\r\n                                                </ng-container>\r\n                                                <ng-template #elseBlock2>\r\n                                                    <ng-container *ngFor=\"let priority of ('incidents.priorities' | translate)\">\r\n                                                        <div class=\"budges-status\">\r\n                                                            <span *ngIf=\"priority.id == incident.priority\" class=\"{{priority.class}}\">{{priority.label}}</span>\r\n                                                        </div>\r\n                                                    </ng-container>\r\n                                                </ng-template>\r\n                                            </td>\r\n                                            <td class=\"status-dropdown\">\r\n                                                <div class=\"overdue-td\">\r\n                                                    <ng-container *ngIf=\"getCheckPermission(incident); else elseBlock4\">\r\n                                                        <div class=\"btn-group\" dropdown>\r\n                                                            <button aria-controls=\"dropdown-basic\" class=\"btn dropdown-toggle\" dropdownToggle id=\"button-basic\" type=\"button\">{{getTranslateStatus(incident.status) | translate}}&nbsp;<span class=\"caret\"></span>\r\n                                                            </button>\r\n                                                            <ul *dropdownMenu class=\"dropdown-menu animated fadeIn\" id=\"dropdown-basic\" role=\"menu\">\r\n                                                                <li *ngFor=\"let status of ('incidents.status' | translate)\" role=\"menuitem\">\r\n                                                                    <a (click)=\"changeIncidentStatus([incident.id], status);incident.status = status.id\" [ngClass]=\"{'active': incident.status == status.id}\" class=\"dropdown-item btn btn-sm {{status.class}}\">{{status.label}}</a>\r\n                                                                </li>\r\n                                                            </ul>\r\n                                                        </div>\r\n                                                    </ng-container>\r\n                                                    <ng-template #elseBlock4>\r\n                                                        <ng-container *ngFor=\"let status of ('incidents.status' | translate)\">\r\n                                                            <div class=\"budges-status\">\r\n                                                                <span *ngIf=\"status.id == incident.status\" class=\"{{status.class}}\">{{status.label}}</span>\r\n                                                            </div>\r\n                                                        </ng-container>\r\n                                                    </ng-template>\r\n                                                    <ng-container *ngIf=\"incident.is_overdue\">\r\n                                                        <i aria-hidden=\"true\" class=\"fa fa-clock-o overdue-icon\" tooltip=\"{{'common.overdue' | translate}} : {{incident.is_overdue}} {{'common.days' | translate}}\"></i>\r\n                                                    </ng-container>\r\n                                                </div>\r\n                                            </td>\r\n                                            <td class=\"actions-dropdown\">\r\n                                                <div class=\"btn-group\" dropdown>\r\n                                                    <button aria-controls=\"dropdown-basic-1\" class=\"dropdown-toggle btn-action\" dropdownToggle id=\"button-basic-1\" type=\"button\">\r\n                                                        <i class=\"fa fa-ellipsis-v\"></i></button>\r\n                                                    <ul *dropdownMenu aria-labelledby=\"button-basic-1\" class=\"dropdown-menu animated fadeIn\" id=\"dropdown-basic-1\" role=\"menu\">\r\n                                                        <li *ngIf=\"getCheckPermission(incident)\" role=\"menuitem\">\r\n                                                            <a [routerLink]=\"['/incidents/edit', incident.id]\" class=\"dropdown-item btn btn-edit btn-raised\" tooltip=\"{{'common.edit' | translate}}\"><i class=\"fa fa-pencil-square-o\"></i></a>\r\n                                                        </li>\r\n                                                        <li *ngIf=\"getCheckPermission(incident)\" role=\"menuitem\">\r\n                                                            <a (click)=\"deleteIncident(incident.id)\" class=\"dropdown-item btn btn-delete btn-raised\" tooltip=\"{{'common.delete' | translate}}\"><i class=\"fa fa-trash-o\"></i></a>\r\n                                                        </li>\r\n                                                    </ul>\r\n                                                </div>\r\n                                            </td>\r\n                                        </tr>\r\n                                        </tbody>\r\n                                        <tfoot *ngIf=\"incidents?.length == 0\" class=\"tfoot_dt\">\r\n                                        <tr>\r\n                                            <td class=\"no-data-available text-center\" colspan=\"9\">{{'common.datatable.sEmptyTable' | translate}}</td>\r\n                                        </tr>\r\n                                        </tfoot>\r\n                                    </table>\r\n                                </div>\r\n                            </div>\r\n                        </div>\r\n                    </div>\r\n                </div>\r\n            </div>\r\n        </div>\r\n    </div>\r\n</section>\r\n");

/***/ }),

/***/ "./src/app/core/services/custom-fields.service.ts":
/*!********************************************************!*\
  !*** ./src/app/core/services/custom-fields.service.ts ***!
  \********************************************************/
/*! exports provided: CustomFieldsService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CustomFieldsService", function() { return CustomFieldsService; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../environments/environment */ "./src/environments/environment.ts");




var CustomFieldsService = /** @class */ (function () {
    function CustomFieldsService(http) {
        this.http = http;
        this.apiUrl = _environments_environment__WEBPACK_IMPORTED_MODULE_3__["environment"].apiUrl;
    }
    CustomFieldsService.prototype.getAll = function () {
        return this.http.get(this.apiUrl + "/api/customfields");
    };
    CustomFieldsService.prototype.getById = function (id) {
        return this.http.get(this.apiUrl + "/api/customfields/" + id);
    };
    CustomFieldsService.prototype.create = function (customField) {
        return this.http.post(this.apiUrl + "/api/customfields", customField);
    };
    CustomFieldsService.prototype.update = function (customField) {
        return this.http.put(this.apiUrl + "/api/customfields/" + customField.id, customField);
    };
    CustomFieldsService.prototype.delete = function (id) {
        return this.http.delete(this.apiUrl + "/api/customfields/" + id);
    };
    CustomFieldsService.prototype.changeStatus = function (customField) {
        return this.http.post(this.apiUrl + "/api/customfields/" + customField.id + "/change-status", { status: customField.status });
    };
    CustomFieldsService.prototype.getFormTables = function () {
        return this.http.get(this.apiUrl + "/api/customfields/form");
    };
    CustomFieldsService.prototype.getCustomFieldByForm = function (formId) {
        return this.http.get(this.apiUrl + "/api/customfields/form/" + formId);
    };
    CustomFieldsService.prototype.getCustomFieldDetailByForm = function (formId, isView) {
        return this.http.get(this.apiUrl + "/api/customfields/form/" + formId + "/1");
    };
    CustomFieldsService.ctorParameters = function () { return [
        { type: _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClient"] }
    ]; };
    CustomFieldsService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
            providedIn: 'root'
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClient"]])
    ], CustomFieldsService);
    return CustomFieldsService;
}());



/***/ }),

/***/ "./src/app/core/services/incident-attachment.service.ts":
/*!**************************************************************!*\
  !*** ./src/app/core/services/incident-attachment.service.ts ***!
  \**************************************************************/
/*! exports provided: IncidentAttachmentService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "IncidentAttachmentService", function() { return IncidentAttachmentService; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../environments/environment */ "./src/environments/environment.ts");




var IncidentAttachmentService = /** @class */ (function () {
    function IncidentAttachmentService(http) {
        this.http = http;
        this.apiUrl = _environments_environment__WEBPACK_IMPORTED_MODULE_3__["environment"].apiUrl;
    }
    IncidentAttachmentService.prototype.getAllAttachmentById = function (incidentId) {
        return this.http.get(this.apiUrl + "/api/incidentattachment/" + incidentId);
    };
    IncidentAttachmentService.prototype.create = function (incidentAttachment) {
        return this.http.post(this.apiUrl + "/api/incidentattachment", incidentAttachment);
    };
    IncidentAttachmentService.prototype.delete = function (id) {
        return this.http.delete(this.apiUrl + "/api/incidentattachment/" + id);
    };
    IncidentAttachmentService.ctorParameters = function () { return [
        { type: _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClient"] }
    ]; };
    IncidentAttachmentService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
            providedIn: 'root'
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClient"]])
    ], IncidentAttachmentService);
    return IncidentAttachmentService;
}());



/***/ }),

/***/ "./src/app/core/services/incident-comment.service.ts":
/*!***********************************************************!*\
  !*** ./src/app/core/services/incident-comment.service.ts ***!
  \***********************************************************/
/*! exports provided: IncidentCommentService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "IncidentCommentService", function() { return IncidentCommentService; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../environments/environment */ "./src/environments/environment.ts");




var IncidentCommentService = /** @class */ (function () {
    function IncidentCommentService(http) {
        this.http = http;
        this.apiUrl = _environments_environment__WEBPACK_IMPORTED_MODULE_3__["environment"].apiUrl;
    }
    IncidentCommentService.prototype.create = function (incidentComment) {
        return this.http.post(this.apiUrl + "/api/incidentcomment", incidentComment);
    };
    IncidentCommentService.prototype.update = function (incidentComment) {
        return this.http.put(this.apiUrl + "/api/incidentcomment/" + incidentComment.id, incidentComment);
    };
    IncidentCommentService.prototype.delete = function (id) {
        return this.http.delete(this.apiUrl + "/api/incidentcomment/" + id);
    };
    IncidentCommentService.ctorParameters = function () { return [
        { type: _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClient"] }
    ]; };
    IncidentCommentService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
            providedIn: 'root'
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClient"]])
    ], IncidentCommentService);
    return IncidentCommentService;
}());



/***/ }),

/***/ "./src/app/modules/pm/incidents/components/create-attachment-modal/create-attachment-modal.component.scss":
/*!****************************************************************************************************************!*\
  !*** ./src/app/modules/pm/incidents/components/create-attachment-modal/create-attachment-modal.component.scss ***!
  \****************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL21vZHVsZXMvcG0vaW5jaWRlbnRzL2NvbXBvbmVudHMvY3JlYXRlLWF0dGFjaG1lbnQtbW9kYWwvY3JlYXRlLWF0dGFjaG1lbnQtbW9kYWwuY29tcG9uZW50LnNjc3MifQ== */");

/***/ }),

/***/ "./src/app/modules/pm/incidents/components/create-attachment-modal/create-attachment-modal.component.ts":
/*!**************************************************************************************************************!*\
  !*** ./src/app/modules/pm/incidents/components/create-attachment-modal/create-attachment-modal.component.ts ***!
  \**************************************************************************************************************/
/*! exports provided: CreateAttachmentModalComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CreateAttachmentModalComponent", function() { return CreateAttachmentModalComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var ngx_bootstrap_modal__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ngx-bootstrap/modal */ "./node_modules/ngx-bootstrap/modal/fesm5/ngx-bootstrap-modal.js");
/* harmony import */ var ngx_toastr__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ngx-toastr */ "./node_modules/ngx-toastr/fesm5/ngx-toastr.js");
/* harmony import */ var _ngx_translate_core__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @ngx-translate/core */ "./node_modules/@ngx-translate/core/fesm5/ngx-translate-core.js");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! rxjs */ "./node_modules/rxjs/_esm5/index.js");
/* harmony import */ var _core_services_incident_attachment_service__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./../../../../../core/services/incident-attachment.service */ "./src/app/core/services/incident-attachment.service.ts");
/* harmony import */ var dropzone__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! dropzone */ "./node_modules/dropzone/dist/dropzone.js");
/* harmony import */ var dropzone__WEBPACK_IMPORTED_MODULE_9___default = /*#__PURE__*/__webpack_require__.n(dropzone__WEBPACK_IMPORTED_MODULE_9__);










var CreateAttachmentModalComponent = /** @class */ (function () {
    function CreateAttachmentModalComponent(translate, bsCreateAttachmentModalRef, router, route, formBuilder, toastr, incidentAttachmentService) {
        this.translate = translate;
        this.bsCreateAttachmentModalRef = bsCreateAttachmentModalRef;
        this.router = router;
        this.route = route;
        this.formBuilder = formBuilder;
        this.toastr = toastr;
        this.incidentAttachmentService = incidentAttachmentService;
        this.event = new _angular_core__WEBPACK_IMPORTED_MODULE_1__["EventEmitter"]();
        this.isFormSubmitted = false;
        this.isPageLoaded = false;
        this.isfileUploded = false;
        this.isfileLoaded = true;
    }
    Object.defineProperty(CreateAttachmentModalComponent.prototype, "attachment", {
        get: function () {
            return this.createAttachmentForm.controls;
        },
        enumerable: true,
        configurable: true
    });
    CreateAttachmentModalComponent.prototype.ngOnInit = function () {
        var _this_1 = this;
        this.onClose = new rxjs__WEBPACK_IMPORTED_MODULE_7__["Subject"]();
        this.loadForms();
        setTimeout(function () {
            _this_1.loadDropzone();
        });
    };
    CreateAttachmentModalComponent.prototype.loadForms = function () {
        this.createAttachmentForm = this.formBuilder.group({
            incident_id: [this.incidentId],
            file_name: ['', [_angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].required, _angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].maxLength(255)]],
            file: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].required],
            file_extension: [this.fileName],
            file_description: ['']
        });
    };
    CreateAttachmentModalComponent.prototype.loadDropzone = function () {
        var that = this;
        new dropzone__WEBPACK_IMPORTED_MODULE_9__(this.logodropzone.nativeElement, {
            url: 'https://httpbin.org/post',
            maxFiles: 1,
            clickable: true,
            createImageThumbnails: true,
            init: function () {
                this.on('addedfile', function (file) {
                    var removeButton = dropzone__WEBPACK_IMPORTED_MODULE_9__["createElement"]('<button class=\'btn btn-sm btn-block\'>' + that.translate.instant('common.remove_file') + '</button>');
                    var _this = this;
                    removeButton.addEventListener('click', function (e) {
                        e.preventDefault();
                        e.stopPropagation();
                        _this.removeFile(file);
                    });
                    file.previewElement.appendChild(removeButton);
                    if (file) {
                        var reader_1 = new FileReader();
                        that.fileName = file.name;
                        if (that.fileName) {
                            that.fileName = that.fileName.split('.').pop();
                        }
                        reader_1.onload = function (e) {
                            that.createAttachmentForm.patchValue({ file: reader_1.result });
                            that.createAttachmentForm.patchValue({ file_extension: that.fileName });
                        };
                        reader_1.readAsDataURL(file);
                    }
                });
                this.on('removedfile', function (file) {
                    that.createAttachmentForm.patchValue({ file: null });
                });
                this.on('error', function (file, message) {
                    if (file) {
                        that.toastr.error(message);
                    }
                });
            }
        });
    };
    CreateAttachmentModalComponent.prototype.removeDropzoneImage = function () {
        this.isfileUploded = true;
        this.isfileLoaded = false;
    };
    CreateAttachmentModalComponent.prototype.onSubmit = function () {
        var _this_1 = this;
        this.isFormSubmitted = true;
        if (this.createAttachmentForm.invalid) {
            return;
        }
        this.incidentAttachmentService.create(this.createAttachmentForm.value)
            .subscribe(function (data) {
            _this_1.toastr.success(_this_1.translate.instant('attachments.messages.create'), _this_1.translate.instant('attachments.title'));
            _this_1.event.emit({ data: data });
            _this_1.onCancel();
        });
    };
    CreateAttachmentModalComponent.prototype.onCancel = function () {
        this.onClose.next(false);
        this.bsCreateAttachmentModalRef.hide();
    };
    CreateAttachmentModalComponent.ctorParameters = function () { return [
        { type: _ngx_translate_core__WEBPACK_IMPORTED_MODULE_6__["TranslateService"] },
        { type: ngx_bootstrap_modal__WEBPACK_IMPORTED_MODULE_4__["BsModalRef"] },
        { type: _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"] },
        { type: _angular_router__WEBPACK_IMPORTED_MODULE_2__["ActivatedRoute"] },
        { type: _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormBuilder"] },
        { type: ngx_toastr__WEBPACK_IMPORTED_MODULE_5__["ToastrService"] },
        { type: _core_services_incident_attachment_service__WEBPACK_IMPORTED_MODULE_8__["IncidentAttachmentService"] }
    ]; };
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewChild"])('logodropzone', { static: false }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", _angular_core__WEBPACK_IMPORTED_MODULE_1__["ElementRef"])
    ], CreateAttachmentModalComponent.prototype, "logodropzone", void 0);
    CreateAttachmentModalComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-create-attachment-modal',
            template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./create-attachment-modal.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/modules/pm/incidents/components/create-attachment-modal/create-attachment-modal.component.html")).default,
            styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./create-attachment-modal.component.scss */ "./src/app/modules/pm/incidents/components/create-attachment-modal/create-attachment-modal.component.scss")).default]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_ngx_translate_core__WEBPACK_IMPORTED_MODULE_6__["TranslateService"],
            ngx_bootstrap_modal__WEBPACK_IMPORTED_MODULE_4__["BsModalRef"],
            _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"],
            _angular_router__WEBPACK_IMPORTED_MODULE_2__["ActivatedRoute"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormBuilder"],
            ngx_toastr__WEBPACK_IMPORTED_MODULE_5__["ToastrService"],
            _core_services_incident_attachment_service__WEBPACK_IMPORTED_MODULE_8__["IncidentAttachmentService"]])
    ], CreateAttachmentModalComponent);
    return CreateAttachmentModalComponent;
}());



/***/ }),

/***/ "./src/app/modules/pm/incidents/components/incident-activities/incident-activities.component.scss":
/*!********************************************************************************************************!*\
  !*** ./src/app/modules/pm/incidents/components/incident-activities/incident-activities.component.scss ***!
  \********************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = (".user-img {\n  height: 40px;\n  width: 40px;\n  margin-top: 10px;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvbW9kdWxlcy9wbS9pbmNpZGVudHMvY29tcG9uZW50cy9pbmNpZGVudC1hY3Rpdml0aWVzL0M6XFxVc2Vyc1xcdGh1YW5cXE9uZURyaXZlXFxEZXNrdG9wXFxnbGF2YWwtdGh1YW5kaW5oL3NyY1xcYXBwXFxtb2R1bGVzXFxwbVxcaW5jaWRlbnRzXFxjb21wb25lbnRzXFxpbmNpZGVudC1hY3Rpdml0aWVzXFxpbmNpZGVudC1hY3Rpdml0aWVzLmNvbXBvbmVudC5zY3NzIiwic3JjL2FwcC9tb2R1bGVzL3BtL2luY2lkZW50cy9jb21wb25lbnRzL2luY2lkZW50LWFjdGl2aXRpZXMvaW5jaWRlbnQtYWN0aXZpdGllcy5jb21wb25lbnQuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFJQTtFQUNJLFlBQUE7RUFDQSxXQUFBO0VBQ0EsZ0JBQUE7QUNISiIsImZpbGUiOiJzcmMvYXBwL21vZHVsZXMvcG0vaW5jaWRlbnRzL2NvbXBvbmVudHMvaW5jaWRlbnQtYWN0aXZpdGllcy9pbmNpZGVudC1hY3Rpdml0aWVzLmNvbXBvbmVudC5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLy8gOjpuZy1kZWVwIC5vZGQge1xyXG4vLyAgICAgZGlzcGxheTogbm9uZVxyXG4vLyB9XHJcblxyXG4udXNlci1pbWcge1xyXG4gICAgaGVpZ2h0OiA0MHB4O1xyXG4gICAgd2lkdGg6IDQwcHg7XHJcbiAgICBtYXJnaW4tdG9wOiAxMHB4O1xyXG59IiwiLnVzZXItaW1nIHtcbiAgaGVpZ2h0OiA0MHB4O1xuICB3aWR0aDogNDBweDtcbiAgbWFyZ2luLXRvcDogMTBweDtcbn0iXX0= */");

/***/ }),

/***/ "./src/app/modules/pm/incidents/components/incident-activities/incident-activities.component.ts":
/*!******************************************************************************************************!*\
  !*** ./src/app/modules/pm/incidents/components/incident-activities/incident-activities.component.ts ***!
  \******************************************************************************************************/
/*! exports provided: IncidentActivitiesComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "IncidentActivitiesComponent", function() { return IncidentActivitiesComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");


var IncidentActivitiesComponent = /** @class */ (function () {
    function IncidentActivitiesComponent() {
        this.scrollConfig = {};
    }
    IncidentActivitiesComponent.prototype.ngOnInit = function () {
    };
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])(),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", Object)
    ], IncidentActivitiesComponent.prototype, "incident", void 0);
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])(),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", Object)
    ], IncidentActivitiesComponent.prototype, "loginUser", void 0);
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])(),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", Object)
    ], IncidentActivitiesComponent.prototype, "apiUrl", void 0);
    IncidentActivitiesComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-incident-activities',
            template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./incident-activities.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/modules/pm/incidents/components/incident-activities/incident-activities.component.html")).default,
            styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./incident-activities.component.scss */ "./src/app/modules/pm/incidents/components/incident-activities/incident-activities.component.scss")).default]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [])
    ], IncidentActivitiesComponent);
    return IncidentActivitiesComponent;
}());



/***/ }),

/***/ "./src/app/modules/pm/incidents/components/incident-attachment/incident-attachment.component.scss":
/*!********************************************************************************************************!*\
  !*** ./src/app/modules/pm/incidents/components/incident-attachment/incident-attachment.component.scss ***!
  \********************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL21vZHVsZXMvcG0vaW5jaWRlbnRzL2NvbXBvbmVudHMvaW5jaWRlbnQtYXR0YWNobWVudC9pbmNpZGVudC1hdHRhY2htZW50LmNvbXBvbmVudC5zY3NzIn0= */");

/***/ }),

/***/ "./src/app/modules/pm/incidents/components/incident-attachment/incident-attachment.component.ts":
/*!******************************************************************************************************!*\
  !*** ./src/app/modules/pm/incidents/components/incident-attachment/incident-attachment.component.ts ***!
  \******************************************************************************************************/
/*! exports provided: IncidentAttachmentComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "IncidentAttachmentComponent", function() { return IncidentAttachmentComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var ngx_bootstrap_modal__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ngx-bootstrap/modal */ "./node_modules/ngx-bootstrap/modal/fesm5/ngx-bootstrap-modal.js");
/* harmony import */ var ngx_toastr__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ngx-toastr */ "./node_modules/ngx-toastr/fesm5/ngx-toastr.js");
/* harmony import */ var _ngx_translate_core__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @ngx-translate/core */ "./node_modules/@ngx-translate/core/fesm5/ngx-translate-core.js");
/* harmony import */ var sweetalert2__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! sweetalert2 */ "./node_modules/sweetalert2/dist/sweetalert2.all.js");
/* harmony import */ var sweetalert2__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(sweetalert2__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var _core_services_incident_attachment_service__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../../../../../core/services/incident-attachment.service */ "./src/app/core/services/incident-attachment.service.ts");
/* harmony import */ var _components_create_attachment_modal_create_attachment_modal_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../../components/create-attachment-modal/create-attachment-modal.component */ "./src/app/modules/pm/incidents/components/create-attachment-modal/create-attachment-modal.component.ts");
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../../../../../../environments/environment */ "./src/environments/environment.ts");










var IncidentAttachmentComponent = /** @class */ (function () {
    function IncidentAttachmentComponent(translate, toastr, route, modalService, incidentAttachmentService) {
        this.translate = translate;
        this.toastr = toastr;
        this.route = route;
        this.modalService = modalService;
        this.incidentAttachmentService = incidentAttachmentService;
        this.modalConfigs = {
            animated: true,
            keyboard: true,
            backdrop: true,
            ignoreBackdropClick: false,
            class: 'inmodal modal-dialog-centered modal-md animated fadeIn',
            initialState: {
                incidentId: this.route.snapshot.params.id,
            }
        };
        this.apiUrl = _environments_environment__WEBPACK_IMPORTED_MODULE_9__["environment"].apiUrl;
        this.getAttachments(this.route.snapshot.params.id);
    }
    IncidentAttachmentComponent.prototype.ngOnInit = function () {
    };
    IncidentAttachmentComponent.prototype.getAttachments = function (incidentId, isLoad) {
        var _this = this;
        if (isLoad === void 0) { isLoad = true; }
        this.incidentAttachmentService.getAllAttachmentById(incidentId).subscribe(function (data) {
            _this.attachments = data;
            _this.getFiles();
        });
    };
    IncidentAttachmentComponent.prototype.getFiles = function () {
        for (var iRow in this.attachments) {
            switch (this.attachments[iRow].file_extension) {
                case 'txt':
                    this.attachments[iRow].icon = 'fa fa-file-text';
                    break;
                case 'mp3':
                case 'wav':
                case 'raw':
                case 'tta':
                    this.attachments[iRow].icon = 'fa fa-music';
                    break;
                case 'webm':
                case 'flv':
                case 'ogg':
                case 'mov':
                case 'mp4':
                case 'm4p':
                case 'mpeg':
                case 'f4v':
                case '3gp':
                    this.attachments[iRow].icon = 'fa fa-film';
                    break;
                case 'pdf':
                    this.attachments[iRow].icon = 'fa fa-file-pdf-o';
                    break;
                case 'jpeg':
                case 'jpg':
                case 'png':
                case 'gif':
                case 'bmp':
                case 'svg':
                    this.attachments[iRow].isImageFile = true;
                    break;
                default:
                    this.attachments[iRow].isImageFile = false;
                    this.attachments[iRow].icon = 'fa fa-file';
                    break;
            }
        }
    };
    IncidentAttachmentComponent.prototype.openAttachmentCreateModal = function () {
        var _this = this;
        this.modalRef = this.modalService.show(_components_create_attachment_modal_create_attachment_modal_component__WEBPACK_IMPORTED_MODULE_8__["CreateAttachmentModalComponent"], this.modalConfigs);
        this.modalRef.content.event.subscribe(function (data) {
            _this.getAttachments(_this.incident.id, false);
        });
    };
    IncidentAttachmentComponent.prototype.attachmentDelete = function (attachmentId) {
        var _this = this;
        sweetalert2__WEBPACK_IMPORTED_MODULE_6___default.a.fire({
            title: this.translate.instant('common.swal.title'),
            text: this.translate.instant('common.swal.text'),
            type: 'warning',
            showCancelButton: true,
            confirmButtonText: this.translate.instant('common.swal.confirmButtonText'),
            cancelButtonText: this.translate.instant('common.swal.cancelButtonText')
        }).then(function (result) {
            if (result.value) {
                _this.incidentAttachmentService.delete(attachmentId).subscribe(function (data) {
                    _this.toastr.success(_this.translate.instant('attachments.messages.delete'), _this.translate.instant('incidents.title'));
                    _this.getAttachments(_this.incident.id, false);
                });
            }
        });
    };
    IncidentAttachmentComponent.ctorParameters = function () { return [
        { type: _ngx_translate_core__WEBPACK_IMPORTED_MODULE_5__["TranslateService"] },
        { type: ngx_toastr__WEBPACK_IMPORTED_MODULE_4__["ToastrService"] },
        { type: _angular_router__WEBPACK_IMPORTED_MODULE_2__["ActivatedRoute"] },
        { type: ngx_bootstrap_modal__WEBPACK_IMPORTED_MODULE_3__["BsModalService"] },
        { type: _core_services_incident_attachment_service__WEBPACK_IMPORTED_MODULE_7__["IncidentAttachmentService"] }
    ]; };
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])(),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", Object)
    ], IncidentAttachmentComponent.prototype, "incident", void 0);
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])(),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", Object)
    ], IncidentAttachmentComponent.prototype, "loginUser", void 0);
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])(),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", Object)
    ], IncidentAttachmentComponent.prototype, "permission", void 0);
    IncidentAttachmentComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-incident-attachment',
            template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./incident-attachment.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/modules/pm/incidents/components/incident-attachment/incident-attachment.component.html")).default,
            styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./incident-attachment.component.scss */ "./src/app/modules/pm/incidents/components/incident-attachment/incident-attachment.component.scss")).default]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_ngx_translate_core__WEBPACK_IMPORTED_MODULE_5__["TranslateService"],
            ngx_toastr__WEBPACK_IMPORTED_MODULE_4__["ToastrService"],
            _angular_router__WEBPACK_IMPORTED_MODULE_2__["ActivatedRoute"],
            ngx_bootstrap_modal__WEBPACK_IMPORTED_MODULE_3__["BsModalService"],
            _core_services_incident_attachment_service__WEBPACK_IMPORTED_MODULE_7__["IncidentAttachmentService"]])
    ], IncidentAttachmentComponent);
    return IncidentAttachmentComponent;
}());



/***/ }),

/***/ "./src/app/modules/pm/incidents/components/incident-comments/incident-comments.component.scss":
/*!****************************************************************************************************!*\
  !*** ./src/app/modules/pm/incidents/components/incident-comments/incident-comments.component.scss ***!
  \****************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL21vZHVsZXMvcG0vaW5jaWRlbnRzL2NvbXBvbmVudHMvaW5jaWRlbnQtY29tbWVudHMvaW5jaWRlbnQtY29tbWVudHMuY29tcG9uZW50LnNjc3MifQ== */");

/***/ }),

/***/ "./src/app/modules/pm/incidents/components/incident-comments/incident-comments.component.ts":
/*!**************************************************************************************************!*\
  !*** ./src/app/modules/pm/incidents/components/incident-comments/incident-comments.component.ts ***!
  \**************************************************************************************************/
/*! exports provided: IncidentCommentsComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "IncidentCommentsComponent", function() { return IncidentCommentsComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var ngx_toastr__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ngx-toastr */ "./node_modules/ngx-toastr/fesm5/ngx-toastr.js");
/* harmony import */ var _ngx_translate_core__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @ngx-translate/core */ "./node_modules/@ngx-translate/core/fesm5/ngx-translate-core.js");
/* harmony import */ var sweetalert2__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! sweetalert2 */ "./node_modules/sweetalert2/dist/sweetalert2.all.js");
/* harmony import */ var sweetalert2__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(sweetalert2__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var _core_services_incident_service__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../../../../../core/services/incident.service */ "./src/app/core/services/incident.service.ts");
/* harmony import */ var _core_services_incident_comment_service__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../../../../../core/services/incident-comment.service */ "./src/app/core/services/incident-comment.service.ts");
/* harmony import */ var dropzone__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! dropzone */ "./node_modules/dropzone/dist/dropzone.js");
/* harmony import */ var dropzone__WEBPACK_IMPORTED_MODULE_9___default = /*#__PURE__*/__webpack_require__.n(dropzone__WEBPACK_IMPORTED_MODULE_9__);










var IncidentCommentsComponent = /** @class */ (function () {
    function IncidentCommentsComponent(translate, router, route, formBuilder, toastr, incidentCommentsService, incidentService) {
        this.translate = translate;
        this.router = router;
        this.route = route;
        this.formBuilder = formBuilder;
        this.toastr = toastr;
        this.incidentCommentsService = incidentCommentsService;
        this.incidentService = incidentService;
        this.isPageLoaded = false;
        this.isCommentFormSubmitted = false;
        this.isReplayFormSubmitted = false;
        this.parentChild = [];
        this.selectedFiles = [];
        this.incidentId = this.route.snapshot.params.id;
        this.customClass = 'comment-collapse';
        this.oneAtATime = true;
    }
    Object.defineProperty(IncidentCommentsComponent.prototype, "commentControl", {
        get: function () {
            return this.incidentCommentsForm.controls;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(IncidentCommentsComponent.prototype, "replyCommentControl", {
        get: function () {
            return this.incidentCommentsReplyForm.controls;
        },
        enumerable: true,
        configurable: true
    });
    IncidentCommentsComponent.prototype.ngOnInit = function () {
        var _this_1 = this;
        this.loadForms();
        this.getComment(this.incidentId);
        this.loadReplyForm();
        setTimeout(function () {
            _this_1.loadDropzone();
        });
    };
    IncidentCommentsComponent.prototype.loadForms = function () {
        var that = this;
        this.incidentCommentsForm = this.formBuilder.group({
            incident_id: [this.incidentId],
            comment: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required],
            files: [null]
        });
    };
    IncidentCommentsComponent.prototype.loadReplyForm = function () {
        this.incidentCommentsReplyForm = this.formBuilder.group({
            incident_id: [this.incidentId],
            replay_comment: [''],
            parent_id: [null],
        });
    };
    IncidentCommentsComponent.prototype.loadDropzone = function () {
        var that = this;
        this.dropzoneObj = new dropzone__WEBPACK_IMPORTED_MODULE_9__(this.commentdropzone.nativeElement, {
            url: 'https://httpbin.org/post',
            maxFiles: 5,
            clickable: true,
            createImageThumbnails: true,
            init: function () {
                this.on('addedfile', function (file) {
                    var removeButton = dropzone__WEBPACK_IMPORTED_MODULE_9__["createElement"]('<button class=\'btn btn-sm btn-block\'>' + that.translate.instant('common.remove_file') + '</button>');
                    var _this = this;
                    removeButton.addEventListener('click', function (e) {
                        e.preventDefault();
                        e.stopPropagation();
                        _this.removeFile(file);
                    });
                    file.previewElement.appendChild(removeButton);
                    if (file) {
                        var reader_1 = new FileReader();
                        that.fileDetails = file;
                        reader_1.onload = function (e) {
                            var thisFile = {
                                uuid: that.fileDetails.upload.uuid,
                                name: file.name,
                                extension: file.name.split('.').pop(),
                                size: file.size,
                                file: reader_1.result
                            };
                            that.selectedFiles.push(thisFile);
                        };
                        reader_1.readAsDataURL(file);
                    }
                });
                this.on('removedfile', function (file) {
                    that.fileDetails = file;
                    that.selectedFiles.forEach(function (value, index) {
                        if (value.uuid == that.fileDetails.upload.uuid) {
                            that.selectedFiles.splice(index, 1);
                        }
                    });
                });
                this.on('error', function (file, message) {
                    if (file) {
                        that.toastr.error(message);
                    }
                });
            }
        });
    };
    IncidentCommentsComponent.prototype.onSubmit = function () {
        var _this_1 = this;
        this.isCommentFormSubmitted = true;
        this.incidentCommentsForm.patchValue({ files: this.selectedFiles });
        if (this.incidentCommentsForm.invalid) {
            return;
        }
        this.incidentCommentsService.create(this.incidentCommentsForm.value).subscribe(function (data) {
            _this_1.toastr.success(_this_1.translate.instant('comments.messages.create'), _this_1.translate.instant('comments.title'));
            _this_1.dropzoneObj.removeAllFiles();
            _this_1.getComment(_this_1.incidentId);
            _this_1.commentFormReset();
            _this_1.loadForms();
        });
    };
    IncidentCommentsComponent.prototype.replyFormReset = function () {
        this.incidentCommentsReplyForm.patchValue({ replay_comment: '' });
        this.incidentCommentsReplyForm.patchValue({ files: '' });
        this.incidentCommentsReplyForm.patchValue({ attachments: '' });
    };
    IncidentCommentsComponent.prototype.commentFormReset = function () {
        this.isCommentFormSubmitted = false;
        this.commentControl.comment.reset();
        this.incidentCommentsForm.patchValue({ attachments: null });
    };
    IncidentCommentsComponent.prototype.showReplayCommentBox = function (id) {
        $('#comment_replay_' + id).removeClass('d-none');
    };
    IncidentCommentsComponent.prototype.getComment = function (incidentId) {
        var _this_1 = this;
        this.incidentService.getById(incidentId).subscribe(function (data) {
            _this_1.incidentData = data;
            _this_1.incidentData.comments = _this_1.getNestedChildren(_this_1.incidentData.comments, 0);
            _this_1.comments = _this_1.incidentData.comments;
        });
    };
    IncidentCommentsComponent.prototype.getNestedChildren = function (comment, parent) {
        var parentChild = [];
        for (var i in comment) {
            if (comment[i].attachments && ($.type(comment[i].attachments) === 'string')) {
                var jsonParse = JSON.parse(comment[i].attachments);
                comment[i].attachments = jsonParse;
            }
            if (comment[i].parent_id == parent) {
                var child = this.getNestedChildren(comment, comment[i].id);
                if (child.length) {
                    comment[i].child = child;
                }
                parentChild.push(comment[i]);
            }
        }
        return parentChild;
    };
    IncidentCommentsComponent.prototype.postReplayComment = function (comment) {
        var _this_1 = this;
        if (this.incidentCommentsReplyForm.value.replay_comment) {
            this.isReplayFormSubmitted = true;
            comment.parent_id = comment.id;
            comment.files = '';
            comment.comment = this.incidentCommentsReplyForm.value.replay_comment;
            this.incidentCommentsReplyForm.patchValue({ attachments: '' });
            var replyCommentValues = {
                comment: this.incidentCommentsReplyForm.value.replay_comment,
                parent_id: comment.parent_id,
                incident_id: comment.incident_id,
                user: comment.user,
                user_id: comment.user_id,
                files: '',
                attachments: '',
                replay_comment: this.incidentCommentsReplyForm.value.replay_comment
            };
            if (this.incidentCommentsReplyForm.invalid) {
                return;
            }
            this.incidentCommentsService.create(replyCommentValues)
                .subscribe(function (resp) {
                _this_1.toastr.success(_this_1.translate.instant('comments.messages.create'), _this_1.translate.instant('comments.title'));
                _this_1.getComment(_this_1.incidentId);
                _this_1.replyFormReset();
                _this_1.loadForms();
            });
        }
        else {
            this.toastr.error(this.translate.instant('comments.create.error_messages.message4'), this.translate.instant('comments.title'));
            return false;
        }
    };
    IncidentCommentsComponent.prototype.commentDelete = function (commentId) {
        var _this_1 = this;
        sweetalert2__WEBPACK_IMPORTED_MODULE_6___default.a.fire({
            title: this.translate.instant('common.swal.title'),
            text: this.translate.instant('common.swal.text'),
            type: 'warning',
            showCancelButton: true,
            confirmButtonText: this.translate.instant('common.swal.confirmButtonText'),
            cancelButtonText: this.translate.instant('common.swal.cancelButtonText')
        }).then(function (result) {
            if (result.value) {
                _this_1.incidentCommentsService.delete(commentId)
                    .subscribe(function (data) {
                    _this_1.toastr.success(_this_1.translate.instant('comments.messages.delete'), _this_1.translate.instant('incidents.title'));
                    _this_1.getComment(_this_1.incidentId);
                });
            }
        });
    };
    IncidentCommentsComponent.prototype.saveComments = function (comment, index, value) {
        var _this_1 = this;
        comment[index] = value;
        this.incidentCommentsService.update(comment).subscribe(function (data) {
            _this_1.toastr.success(_this_1.translate.instant('comments.messages.update'), _this_1.translate.instant('tasks.title'));
            _this_1.getComment(_this_1.incidentId);
        });
    };
    IncidentCommentsComponent.ctorParameters = function () { return [
        { type: _ngx_translate_core__WEBPACK_IMPORTED_MODULE_5__["TranslateService"] },
        { type: _angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"] },
        { type: _angular_router__WEBPACK_IMPORTED_MODULE_3__["ActivatedRoute"] },
        { type: _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormBuilder"] },
        { type: ngx_toastr__WEBPACK_IMPORTED_MODULE_4__["ToastrService"] },
        { type: _core_services_incident_comment_service__WEBPACK_IMPORTED_MODULE_8__["IncidentCommentService"] },
        { type: _core_services_incident_service__WEBPACK_IMPORTED_MODULE_7__["IncidentService"] }
    ]; };
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])(),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", Object)
    ], IncidentCommentsComponent.prototype, "permission", void 0);
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])(),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", Object)
    ], IncidentCommentsComponent.prototype, "apiUrl", void 0);
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])(),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", Object)
    ], IncidentCommentsComponent.prototype, "loginUser", void 0);
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewChild"])('commentdropzone', { static: false }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", _angular_core__WEBPACK_IMPORTED_MODULE_1__["ElementRef"])
    ], IncidentCommentsComponent.prototype, "commentdropzone", void 0);
    IncidentCommentsComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-incident-comments',
            template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./incident-comments.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/modules/pm/incidents/components/incident-comments/incident-comments.component.html")).default,
            styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./incident-comments.component.scss */ "./src/app/modules/pm/incidents/components/incident-comments/incident-comments.component.scss")).default]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_ngx_translate_core__WEBPACK_IMPORTED_MODULE_5__["TranslateService"],
            _angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"],
            _angular_router__WEBPACK_IMPORTED_MODULE_3__["ActivatedRoute"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormBuilder"],
            ngx_toastr__WEBPACK_IMPORTED_MODULE_4__["ToastrService"],
            _core_services_incident_comment_service__WEBPACK_IMPORTED_MODULE_8__["IncidentCommentService"],
            _core_services_incident_service__WEBPACK_IMPORTED_MODULE_7__["IncidentService"]])
    ], IncidentCommentsComponent);
    return IncidentCommentsComponent;
}());



/***/ }),

/***/ "./src/app/modules/pm/incidents/components/incident-details/incident-details.component.scss":
/*!**************************************************************************************************!*\
  !*** ./src/app/modules/pm/incidents/components/incident-details/incident-details.component.scss ***!
  \**************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL21vZHVsZXMvcG0vaW5jaWRlbnRzL2NvbXBvbmVudHMvaW5jaWRlbnQtZGV0YWlscy9pbmNpZGVudC1kZXRhaWxzLmNvbXBvbmVudC5zY3NzIn0= */");

/***/ }),

/***/ "./src/app/modules/pm/incidents/components/incident-details/incident-details.component.ts":
/*!************************************************************************************************!*\
  !*** ./src/app/modules/pm/incidents/components/incident-details/incident-details.component.ts ***!
  \************************************************************************************************/
/*! exports provided: IncidentDetailsComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "IncidentDetailsComponent", function() { return IncidentDetailsComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var ngx_toastr__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ngx-toastr */ "./node_modules/ngx-toastr/fesm5/ngx-toastr.js");
/* harmony import */ var _ngx_translate_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @ngx-translate/core */ "./node_modules/@ngx-translate/core/fesm5/ngx-translate-core.js");
/* harmony import */ var _core_services_incident_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../../../../core/services/incident.service */ "./src/app/core/services/incident.service.ts");
/* harmony import */ var _core_helpers_pm_helper__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./../../../../../core/helpers/pm-helper */ "./src/app/core/helpers/pm-helper.ts");






var IncidentDetailsComponent = /** @class */ (function () {
    function IncidentDetailsComponent(translate, toastr, incidentService) {
        this.translate = translate;
        this.toastr = toastr;
        this.incidentService = incidentService;
        this.incidentstatusKeyValue = _core_helpers_pm_helper__WEBPACK_IMPORTED_MODULE_5__["incident_status_key_value"];
        this.incidentSeveritiesKeyValue = _core_helpers_pm_helper__WEBPACK_IMPORTED_MODULE_5__["incident_severity_key_value"];
        this.isPageLoaded = false;
        this.isIncidentTab = 1;
        this.activeIncidentTab = '1';
    }
    IncidentDetailsComponent.prototype.ngOnInit = function () {
        this.getIncidentById(this.incident.id);
    };
    IncidentDetailsComponent.prototype.setActiveIncidentTab = function ($event) {
        this.isIncidentTab = $event.id;
    };
    IncidentDetailsComponent.prototype.getActiveIncidentTab = function (tab) {
        return this.isIncidentTab === tab;
    };
    IncidentDetailsComponent.prototype.getTranslateStatus = function (statusKey) {
        return this.incidentstatusKeyValue[statusKey];
    };
    IncidentDetailsComponent.prototype.getTranslatePriorities = function (statusKey) {
        return this.incidentSeveritiesKeyValue[statusKey];
    };
    IncidentDetailsComponent.prototype.getIncidentById = function (incidentId) {
        var _this = this;
        this.incidentService.getById(incidentId)
            .subscribe(function (data) {
            _this.incident = data;
            _this.isPageLoaded = true;
        });
    };
    IncidentDetailsComponent.prototype.getUsername = function (assignedUser) {
        return assignedUser.firstname + ' ' + assignedUser.lastname;
    };
    IncidentDetailsComponent.prototype.getParseArray = function (string) {
        return JSON.parse(string);
    };
    IncidentDetailsComponent.prototype.changeIncidentStatus = function (incidentId, status) {
        var _this = this;
        var changeIncident = {
            id: incidentId,
            status: status.id
        };
        this.incidentService.changeStatus(changeIncident)
            .subscribe(function (data) {
            _this.toastr.success(_this.translate.instant('incidents.messages.status'), _this.translate.instant('incidents.title'));
            _this.getIncidentById(_this.incident.id);
        });
    };
    IncidentDetailsComponent.prototype.changeIncidentSeverity = function (incidentId, priority) {
        var _this = this;
        this.incidentService.changeSeverity({
            id: incidentId,
            priority: priority.id
        }).subscribe(function (data) {
            _this.toastr.success(_this.translate.instant('incidents.messages.priority'), _this.translate.instant('incidents.title'));
            _this.getIncidentById(_this.incident.id);
        });
    };
    IncidentDetailsComponent.prototype.saveIncidentDetail = function (name, value) {
        var _this = this;
        this.incident[name] = value;
        this.incidentService.update(this.incident)
            .subscribe(function (data) {
            _this.toastr.success(_this.translate.instant('incidents.messages.update'), _this.translate.instant('incidents.title'));
            _this.getIncidentById(_this.incident.id);
        });
    };
    IncidentDetailsComponent.ctorParameters = function () { return [
        { type: _ngx_translate_core__WEBPACK_IMPORTED_MODULE_3__["TranslateService"] },
        { type: ngx_toastr__WEBPACK_IMPORTED_MODULE_2__["ToastrService"] },
        { type: _core_services_incident_service__WEBPACK_IMPORTED_MODULE_4__["IncidentService"] }
    ]; };
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])(),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", Object)
    ], IncidentDetailsComponent.prototype, "incident", void 0);
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])(),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", Object)
    ], IncidentDetailsComponent.prototype, "permission", void 0);
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])(),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", Object)
    ], IncidentDetailsComponent.prototype, "loginUser", void 0);
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])(),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", Object)
    ], IncidentDetailsComponent.prototype, "apiUrl", void 0);
    IncidentDetailsComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-incident-details',
            template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./incident-details.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/modules/pm/incidents/components/incident-details/incident-details.component.html")).default,
            styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./incident-details.component.scss */ "./src/app/modules/pm/incidents/components/incident-details/incident-details.component.scss")).default]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_ngx_translate_core__WEBPACK_IMPORTED_MODULE_3__["TranslateService"],
            ngx_toastr__WEBPACK_IMPORTED_MODULE_2__["ToastrService"],
            _core_services_incident_service__WEBPACK_IMPORTED_MODULE_4__["IncidentService"]])
    ], IncidentDetailsComponent);
    return IncidentDetailsComponent;
}());



/***/ }),

/***/ "./src/app/modules/pm/incidents/components/incident-history/incident-history.component.scss":
/*!**************************************************************************************************!*\
  !*** ./src/app/modules/pm/incidents/components/incident-history/incident-history.component.scss ***!
  \**************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL21vZHVsZXMvcG0vaW5jaWRlbnRzL2NvbXBvbmVudHMvaW5jaWRlbnQtaGlzdG9yeS9pbmNpZGVudC1oaXN0b3J5LmNvbXBvbmVudC5zY3NzIn0= */");

/***/ }),

/***/ "./src/app/modules/pm/incidents/components/incident-history/incident-history.component.ts":
/*!************************************************************************************************!*\
  !*** ./src/app/modules/pm/incidents/components/incident-history/incident-history.component.ts ***!
  \************************************************************************************************/
/*! exports provided: IncidentHistoryComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "IncidentHistoryComponent", function() { return IncidentHistoryComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _ngx_translate_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @ngx-translate/core */ "./node_modules/@ngx-translate/core/fesm5/ngx-translate-core.js");
/* harmony import */ var _core_services_user_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../../../core/services/user.service */ "./src/app/core/services/user.service.ts");
/* harmony import */ var datatables_net__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! datatables.net */ "./node_modules/datatables.net/js/jquery.dataTables.js");
/* harmony import */ var datatables_net__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(datatables_net__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var datatables_net_bs4__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! datatables.net-bs4 */ "./node_modules/datatables.net-bs4/js/dataTables.bootstrap4.js");
/* harmony import */ var datatables_net_bs4__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(datatables_net_bs4__WEBPACK_IMPORTED_MODULE_5__);






var IncidentHistoryComponent = /** @class */ (function () {
    function IncidentHistoryComponent(translate, userService) {
        this.translate = translate;
        this.userService = userService;
        this.dtOptions = {};
        this.userLists = [];
    }
    IncidentHistoryComponent.prototype.ngOnInit = function () {
        this.getUserIdName();
        this.loadDatatable();
    };
    IncidentHistoryComponent.prototype.loadDatatable = function () {
        var that = this;
        this.dtOptions = {
            dom: '<"html5buttons"B>lTfgtip',
            pagingType: 'full_numbers',
            paging: true,
            pageLength: that.loginUser.settings.tables_pagination_limit,
            responsive: false,
            autoWidth: false,
            order: [],
            buttons: [{
                    extend: 'csv',
                    title: this.translate.instant('histories.title'),
                    className: 'btn btn-datatable-gredient'
                }, {
                    extend: 'excel',
                    title: this.translate.instant('histories.title'),
                    className: 'btn btn-datatable-gredient'
                }, {
                    extend: 'pdf',
                    title: this.translate.instant('histories.title'),
                    className: 'btn btn-datatable-gredient'
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
            columnDefs: [
                { sortable: true, targets: [6] },
                { width: '8%', targets: [0] },
                { width: '30%', targets: [1] },
                { width: '8%', targets: [2] },
                { width: '8%', targets: [3] },
                { width: '8%', targets: [4] },
                { width: '8%', targets: [5] },
                { width: '10%', targets: [6] },
            ]
        };
    };
    IncidentHistoryComponent.prototype.getUserIdName = function () {
        var _this = this;
        this.userService.getUserIdName().subscribe(function (data) {
            _this.userData = data;
            _this.setUsers();
        });
    };
    IncidentHistoryComponent.prototype.setUsers = function () {
        this.userLists = [];
        for (var iRow in this.userData) {
            this.userLists[this.userData[iRow].id] = {
                'name': this.userData[iRow].firstname + ' ' + this.userData[iRow].lastname,
                'avatar': this.userData[iRow].avatar,
            };
        }
    };
    IncidentHistoryComponent.ctorParameters = function () { return [
        { type: _ngx_translate_core__WEBPACK_IMPORTED_MODULE_2__["TranslateService"] },
        { type: _core_services_user_service__WEBPACK_IMPORTED_MODULE_3__["UserService"] }
    ]; };
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])(),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", Object)
    ], IncidentHistoryComponent.prototype, "incident", void 0);
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])(),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", Object)
    ], IncidentHistoryComponent.prototype, "loginUser", void 0);
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])(),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", Object)
    ], IncidentHistoryComponent.prototype, "apiUrl", void 0);
    IncidentHistoryComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-incident-history',
            template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./incident-history.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/modules/pm/incidents/components/incident-history/incident-history.component.html")).default,
            styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./incident-history.component.scss */ "./src/app/modules/pm/incidents/components/incident-history/incident-history.component.scss")).default]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_ngx_translate_core__WEBPACK_IMPORTED_MODULE_2__["TranslateService"],
            _core_services_user_service__WEBPACK_IMPORTED_MODULE_3__["UserService"]])
    ], IncidentHistoryComponent);
    return IncidentHistoryComponent;
}());



/***/ }),

/***/ "./src/app/modules/pm/incidents/components/incident-notes/incident-notes.component.scss":
/*!**********************************************************************************************!*\
  !*** ./src/app/modules/pm/incidents/components/incident-notes/incident-notes.component.scss ***!
  \**********************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL21vZHVsZXMvcG0vaW5jaWRlbnRzL2NvbXBvbmVudHMvaW5jaWRlbnQtbm90ZXMvaW5jaWRlbnQtbm90ZXMuY29tcG9uZW50LnNjc3MifQ== */");

/***/ }),

/***/ "./src/app/modules/pm/incidents/components/incident-notes/incident-notes.component.ts":
/*!********************************************************************************************!*\
  !*** ./src/app/modules/pm/incidents/components/incident-notes/incident-notes.component.ts ***!
  \********************************************************************************************/
/*! exports provided: IncidentNotesComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "IncidentNotesComponent", function() { return IncidentNotesComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var ngx_toastr__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ngx-toastr */ "./node_modules/ngx-toastr/fesm5/ngx-toastr.js");
/* harmony import */ var _ngx_translate_core__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ngx-translate/core */ "./node_modules/@ngx-translate/core/fesm5/ngx-translate-core.js");
/* harmony import */ var _core_services_incident_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../../../../core/services/incident.service */ "./src/app/core/services/incident.service.ts");






var IncidentNotesComponent = /** @class */ (function () {
    function IncidentNotesComponent(translate, formBuilder, toastr, incidentService) {
        this.translate = translate;
        this.formBuilder = formBuilder;
        this.toastr = toastr;
        this.incidentService = incidentService;
        this.isFormSubmitted = false;
    }
    IncidentNotesComponent.prototype.ngOnInit = function () {
        this.editNoteForm = this.formBuilder.group({
            id: [this.incident.id],
            notes: [this.incident.notes]
        });
    };
    IncidentNotesComponent.prototype.onSubmit = function () {
        var _this = this;
        this.isFormSubmitted = true;
        if (this.editNoteForm.invalid) {
            return;
        }
        this.incidentService.updateNotes(this.editNoteForm.value)
            .subscribe(function (data) {
            _this.toastr.success(_this.translate.instant('notes.messages.update'), _this.translate.instant('incidents.title'));
        });
    };
    IncidentNotesComponent.ctorParameters = function () { return [
        { type: _ngx_translate_core__WEBPACK_IMPORTED_MODULE_4__["TranslateService"] },
        { type: _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormBuilder"] },
        { type: ngx_toastr__WEBPACK_IMPORTED_MODULE_3__["ToastrService"] },
        { type: _core_services_incident_service__WEBPACK_IMPORTED_MODULE_5__["IncidentService"] }
    ]; };
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])(),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", Object)
    ], IncidentNotesComponent.prototype, "incident", void 0);
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])(),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", Object)
    ], IncidentNotesComponent.prototype, "permission", void 0);
    IncidentNotesComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-incident-notes',
            template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./incident-notes.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/modules/pm/incidents/components/incident-notes/incident-notes.component.html")).default,
            styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./incident-notes.component.scss */ "./src/app/modules/pm/incidents/components/incident-notes/incident-notes.component.scss")).default]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_ngx_translate_core__WEBPACK_IMPORTED_MODULE_4__["TranslateService"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormBuilder"],
            ngx_toastr__WEBPACK_IMPORTED_MODULE_3__["ToastrService"],
            _core_services_incident_service__WEBPACK_IMPORTED_MODULE_5__["IncidentService"]])
    ], IncidentNotesComponent);
    return IncidentNotesComponent;
}());



/***/ }),

/***/ "./src/app/modules/pm/incidents/incidents-routing.module.ts":
/*!******************************************************************!*\
  !*** ./src/app/modules/pm/incidents/incidents-routing.module.ts ***!
  \******************************************************************/
/*! exports provided: IncidentsRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "IncidentsRoutingModule", function() { return IncidentsRoutingModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var ngx_permissions__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ngx-permissions */ "./node_modules/ngx-permissions/ngx-permissions.umd.js");
/* harmony import */ var ngx_permissions__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(ngx_permissions__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _pages_incident_list_incident_list_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./pages/incident-list/incident-list.component */ "./src/app/modules/pm/incidents/pages/incident-list/incident-list.component.ts");
/* harmony import */ var _pages_incident_detail_incident_detail_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./pages/incident-detail/incident-detail.component */ "./src/app/modules/pm/incidents/pages/incident-detail/incident-detail.component.ts");
/* harmony import */ var _pages_incident_create_incident_create_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./pages/incident-create/incident-create.component */ "./src/app/modules/pm/incidents/pages/incident-create/incident-create.component.ts");
/* harmony import */ var _pages_incident_edit_incident_edit_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./pages/incident-edit/incident-edit.component */ "./src/app/modules/pm/incidents/pages/incident-edit/incident-edit.component.ts");
/* harmony import */ var _pages_incident_kanban_incident_kanban_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./pages/incident-kanban/incident-kanban.component */ "./src/app/modules/pm/incidents/pages/incident-kanban/incident-kanban.component.ts");









var routes = [
    {
        path: '',
        children: [
            {
                path: '',
                canActivate: [ngx_permissions__WEBPACK_IMPORTED_MODULE_3__["NgxPermissionsGuard"]],
                component: _pages_incident_list_incident_list_component__WEBPACK_IMPORTED_MODULE_4__["IncidentListComponent"],
                data: {
                    permissions: {
                        only: ['admin', 'super_admin', 'incidents_view']
                    }
                }
            },
            {
                path: 'create',
                canActivate: [ngx_permissions__WEBPACK_IMPORTED_MODULE_3__["NgxPermissionsGuard"]],
                component: _pages_incident_create_incident_create_component__WEBPACK_IMPORTED_MODULE_6__["IncidentCreateComponent"],
                data: {
                    breadcrumbs: {
                        text: 'common.create',
                        icon: 'fa fa-ticket',
                        show: true,
                        isHome: true
                    },
                    permissions: {
                        only: ['admin', 'super_admin', 'incidents_create']
                    }
                }
            },
            {
                path: 'edit/:id',
                canActivate: [ngx_permissions__WEBPACK_IMPORTED_MODULE_3__["NgxPermissionsGuard"]],
                component: _pages_incident_edit_incident_edit_component__WEBPACK_IMPORTED_MODULE_7__["IncidentEditComponent"],
                data: {
                    breadcrumbs: {
                        text: 'common.edit',
                        icon: 'fa fa-ticket',
                        hasParams: true,
                        show: true,
                        isHome: true
                    },
                    permissions: {
                        only: ['admin', 'super_admin', 'incidents_edit']
                    }
                }
            },
            {
                path: 'detail/:id',
                canActivate: [ngx_permissions__WEBPACK_IMPORTED_MODULE_3__["NgxPermissionsGuard"]],
                component: _pages_incident_detail_incident_detail_component__WEBPACK_IMPORTED_MODULE_5__["IncidentDetailComponent"],
                data: {
                    breadcrumbs: {
                        text: 'common.detail',
                        icon: 'fa fa-ticket',
                        hasParams: true,
                        show: true,
                        isHome: true
                    },
                    permissions: {
                        only: ['admin', 'super_admin', 'incidents_view']
                    }
                }
            },
            {
                path: 'kanban',
                canActivate: [ngx_permissions__WEBPACK_IMPORTED_MODULE_3__["NgxPermissionsGuard"]],
                component: _pages_incident_kanban_incident_kanban_component__WEBPACK_IMPORTED_MODULE_8__["IncidentKanbanComponent"],
                data: {
                    breadcrumbs: {
                        text: 'common.kanban',
                        icon: 'fa fa-bug',
                        hasParams: true,
                        show: true,
                        isHome: true
                    },
                    permissions: {
                        only: ['admin', 'super_admin', 'incidents_view']
                    }
                }
            },
            {
                path: ':status/:incidentFilterKey',
                component: _pages_incident_list_incident_list_component__WEBPACK_IMPORTED_MODULE_4__["IncidentListComponent"]
            }
        ]
    }
];
var IncidentsRoutingModule = /** @class */ (function () {
    function IncidentsRoutingModule() {
    }
    IncidentsRoutingModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)],
            exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]]
        })
    ], IncidentsRoutingModule);
    return IncidentsRoutingModule;
}());



/***/ }),

/***/ "./src/app/modules/pm/incidents/incidents.module.ts":
/*!**********************************************************!*\
  !*** ./src/app/modules/pm/incidents/incidents.module.ts ***!
  \**********************************************************/
/*! exports provided: IncidentsModule, HttpLoaderFactory */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "IncidentsModule", function() { return IncidentsModule; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "HttpLoaderFactory", function() { return HttpLoaderFactory; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var ngx_bootstrap__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ngx-bootstrap */ "./node_modules/ngx-bootstrap/esm5/ngx-bootstrap.js");
/* harmony import */ var ngx_perfect_scrollbar__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ngx-perfect-scrollbar */ "./node_modules/ngx-perfect-scrollbar/dist/ngx-perfect-scrollbar.es5.js");
/* harmony import */ var ngx_export_as__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ngx-export-as */ "./node_modules/ngx-export-as/fesm2015/ngx-export-as.js");
/* harmony import */ var _ng_select_ng_select__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @ng-select/ng-select */ "./node_modules/@ng-select/ng-select/fesm5/ng-select.js");
/* harmony import */ var ngx_editor__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ngx-editor */ "./node_modules/ngx-editor/fesm5/ngx-editor.js");
/* harmony import */ var ngx_bootstrap_progressbar__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ngx-bootstrap/progressbar */ "./node_modules/ngx-bootstrap/progressbar/fesm5/ngx-bootstrap-progressbar.js");
/* harmony import */ var ngx_permissions__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ngx-permissions */ "./node_modules/ngx-permissions/ngx-permissions.umd.js");
/* harmony import */ var ngx_permissions__WEBPACK_IMPORTED_MODULE_11___default = /*#__PURE__*/__webpack_require__.n(ngx_permissions__WEBPACK_IMPORTED_MODULE_11__);
/* harmony import */ var _ngx_translate_core__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! @ngx-translate/core */ "./node_modules/@ngx-translate/core/fesm5/ngx-translate-core.js");
/* harmony import */ var _ngx_translate_http_loader__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! @ngx-translate/http-loader */ "./node_modules/@ngx-translate/http-loader/fesm5/ngx-translate-http-loader.js");
/* harmony import */ var ngx_order_pipe__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ngx-order-pipe */ "./node_modules/ngx-order-pipe/fesm2015/ngx-order-pipe.js");
/* harmony import */ var _angular_cdk_drag_drop__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! @angular/cdk/drag-drop */ "./node_modules/@angular/cdk/esm5/drag-drop.es5.js");
/* harmony import */ var angular_datatables__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! angular-datatables */ "./node_modules/angular-datatables/index.js");
/* harmony import */ var angular_draggable_droppable__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! angular-draggable-droppable */ "./node_modules/angular-draggable-droppable/fesm5/angular-draggable-droppable.js");
/* harmony import */ var angular_resizable_element__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! angular-resizable-element */ "./node_modules/angular-resizable-element/fesm5/angular-resizable-element.js");
/* harmony import */ var _incidents_routing_module__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(/*! ./incidents-routing.module */ "./src/app/modules/pm/incidents/incidents-routing.module.ts");
/* harmony import */ var _shared_shared_module__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__(/*! ../../../shared/shared.module */ "./src/app/shared/shared.module.ts");
/* harmony import */ var _admin_todo_todo_module__WEBPACK_IMPORTED_MODULE_21__ = __webpack_require__(/*! ../../admin/todo/todo.module */ "./src/app/modules/admin/todo/todo.module.ts");
/* harmony import */ var _pages_incident_list_incident_list_component__WEBPACK_IMPORTED_MODULE_22__ = __webpack_require__(/*! ./pages/incident-list/incident-list.component */ "./src/app/modules/pm/incidents/pages/incident-list/incident-list.component.ts");
/* harmony import */ var _pages_incident_detail_incident_detail_component__WEBPACK_IMPORTED_MODULE_23__ = __webpack_require__(/*! ./pages/incident-detail/incident-detail.component */ "./src/app/modules/pm/incidents/pages/incident-detail/incident-detail.component.ts");
/* harmony import */ var _pages_incident_create_incident_create_component__WEBPACK_IMPORTED_MODULE_24__ = __webpack_require__(/*! ./pages/incident-create/incident-create.component */ "./src/app/modules/pm/incidents/pages/incident-create/incident-create.component.ts");
/* harmony import */ var _pages_incident_edit_incident_edit_component__WEBPACK_IMPORTED_MODULE_25__ = __webpack_require__(/*! ./pages/incident-edit/incident-edit.component */ "./src/app/modules/pm/incidents/pages/incident-edit/incident-edit.component.ts");
/* harmony import */ var _components_incident_details_incident_details_component__WEBPACK_IMPORTED_MODULE_26__ = __webpack_require__(/*! ./components/incident-details/incident-details.component */ "./src/app/modules/pm/incidents/components/incident-details/incident-details.component.ts");
/* harmony import */ var _components_incident_comments_incident_comments_component__WEBPACK_IMPORTED_MODULE_27__ = __webpack_require__(/*! ./components/incident-comments/incident-comments.component */ "./src/app/modules/pm/incidents/components/incident-comments/incident-comments.component.ts");
/* harmony import */ var _components_incident_attachment_incident_attachment_component__WEBPACK_IMPORTED_MODULE_28__ = __webpack_require__(/*! ./components/incident-attachment/incident-attachment.component */ "./src/app/modules/pm/incidents/components/incident-attachment/incident-attachment.component.ts");
/* harmony import */ var _components_create_attachment_modal_create_attachment_modal_component__WEBPACK_IMPORTED_MODULE_29__ = __webpack_require__(/*! ./components/create-attachment-modal/create-attachment-modal.component */ "./src/app/modules/pm/incidents/components/create-attachment-modal/create-attachment-modal.component.ts");
/* harmony import */ var _components_incident_notes_incident_notes_component__WEBPACK_IMPORTED_MODULE_30__ = __webpack_require__(/*! ./components/incident-notes/incident-notes.component */ "./src/app/modules/pm/incidents/components/incident-notes/incident-notes.component.ts");
/* harmony import */ var _components_incident_activities_incident_activities_component__WEBPACK_IMPORTED_MODULE_31__ = __webpack_require__(/*! ./components/incident-activities/incident-activities.component */ "./src/app/modules/pm/incidents/components/incident-activities/incident-activities.component.ts");
/* harmony import */ var _components_incident_history_incident_history_component__WEBPACK_IMPORTED_MODULE_32__ = __webpack_require__(/*! ./components/incident-history/incident-history.component */ "./src/app/modules/pm/incidents/components/incident-history/incident-history.component.ts");
/* harmony import */ var _timesheet_timesheet_module__WEBPACK_IMPORTED_MODULE_33__ = __webpack_require__(/*! ../../timesheet/timesheet.module */ "./src/app/modules/timesheet/timesheet.module.ts");
/* harmony import */ var _pages_incident_kanban_incident_kanban_component__WEBPACK_IMPORTED_MODULE_34__ = __webpack_require__(/*! ./pages/incident-kanban/incident-kanban.component */ "./src/app/modules/pm/incidents/pages/incident-kanban/incident-kanban.component.ts");



































var IncidentsModule = /** @class */ (function () {
    function IncidentsModule() {
    }
    IncidentsModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            declarations: [
                _pages_incident_list_incident_list_component__WEBPACK_IMPORTED_MODULE_22__["IncidentListComponent"],
                _pages_incident_detail_incident_detail_component__WEBPACK_IMPORTED_MODULE_23__["IncidentDetailComponent"],
                _pages_incident_create_incident_create_component__WEBPACK_IMPORTED_MODULE_24__["IncidentCreateComponent"],
                _pages_incident_edit_incident_edit_component__WEBPACK_IMPORTED_MODULE_25__["IncidentEditComponent"],
                _components_incident_details_incident_details_component__WEBPACK_IMPORTED_MODULE_26__["IncidentDetailsComponent"],
                _components_incident_comments_incident_comments_component__WEBPACK_IMPORTED_MODULE_27__["IncidentCommentsComponent"],
                _components_incident_attachment_incident_attachment_component__WEBPACK_IMPORTED_MODULE_28__["IncidentAttachmentComponent"],
                _components_create_attachment_modal_create_attachment_modal_component__WEBPACK_IMPORTED_MODULE_29__["CreateAttachmentModalComponent"],
                _components_incident_notes_incident_notes_component__WEBPACK_IMPORTED_MODULE_30__["IncidentNotesComponent"],
                _components_incident_activities_incident_activities_component__WEBPACK_IMPORTED_MODULE_31__["IncidentActivitiesComponent"],
                _components_incident_history_incident_history_component__WEBPACK_IMPORTED_MODULE_32__["IncidentHistoryComponent"],
                _pages_incident_kanban_incident_kanban_component__WEBPACK_IMPORTED_MODULE_34__["IncidentKanbanComponent"]
            ],
            imports: [
                _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_4__["FormsModule"],
                _incidents_routing_module__WEBPACK_IMPORTED_MODULE_19__["IncidentsRoutingModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_4__["ReactiveFormsModule"],
                _ng_select_ng_select__WEBPACK_IMPORTED_MODULE_8__["NgSelectModule"],
                angular_datatables__WEBPACK_IMPORTED_MODULE_16__["DataTablesModule"],
                ngx_export_as__WEBPACK_IMPORTED_MODULE_7__["ExportAsModule"],
                ngx_bootstrap__WEBPACK_IMPORTED_MODULE_5__["BsDropdownModule"],
                ngx_editor__WEBPACK_IMPORTED_MODULE_9__["NgxEditorModule"],
                ngx_permissions__WEBPACK_IMPORTED_MODULE_11__["NgxPermissionsModule"],
                angular_draggable_droppable__WEBPACK_IMPORTED_MODULE_17__["DragAndDropModule"],
                angular_resizable_element__WEBPACK_IMPORTED_MODULE_18__["ResizableModule"],
                _angular_cdk_drag_drop__WEBPACK_IMPORTED_MODULE_15__["DragDropModule"],
                ngx_order_pipe__WEBPACK_IMPORTED_MODULE_14__["OrderModule"],
                ngx_bootstrap__WEBPACK_IMPORTED_MODULE_5__["ButtonsModule"],
                ngx_perfect_scrollbar__WEBPACK_IMPORTED_MODULE_6__["PerfectScrollbarModule"],
                ngx_bootstrap__WEBPACK_IMPORTED_MODULE_5__["TooltipModule"].forRoot(),
                ngx_bootstrap__WEBPACK_IMPORTED_MODULE_5__["DatepickerModule"].forRoot(),
                ngx_bootstrap__WEBPACK_IMPORTED_MODULE_5__["BsDatepickerModule"].forRoot(),
                ngx_bootstrap__WEBPACK_IMPORTED_MODULE_5__["ModalModule"].forRoot(),
                ngx_bootstrap_progressbar__WEBPACK_IMPORTED_MODULE_10__["ProgressbarModule"].forRoot(),
                ngx_bootstrap__WEBPACK_IMPORTED_MODULE_5__["TabsModule"].forRoot(),
                ngx_bootstrap__WEBPACK_IMPORTED_MODULE_5__["AccordionModule"].forRoot(),
                _ngx_translate_core__WEBPACK_IMPORTED_MODULE_12__["TranslateModule"].forChild({
                    loader: {
                        provide: _ngx_translate_core__WEBPACK_IMPORTED_MODULE_12__["TranslateLoader"],
                        useFactory: (HttpLoaderFactory),
                        deps: [_angular_common_http__WEBPACK_IMPORTED_MODULE_3__["HttpClient"]]
                    }
                }),
                _admin_todo_todo_module__WEBPACK_IMPORTED_MODULE_21__["TodoModule"],
                _timesheet_timesheet_module__WEBPACK_IMPORTED_MODULE_33__["TimesheetModule"],
                _shared_shared_module__WEBPACK_IMPORTED_MODULE_20__["SharedModule"]
            ],
            entryComponents: [_components_create_attachment_modal_create_attachment_modal_component__WEBPACK_IMPORTED_MODULE_29__["CreateAttachmentModalComponent"]]
        })
    ], IncidentsModule);
    return IncidentsModule;
}());

// Required for AOT compilation
function HttpLoaderFactory(http) {
    return new _ngx_translate_http_loader__WEBPACK_IMPORTED_MODULE_13__["TranslateHttpLoader"](http, './assets/i18n/', '.json');
}


/***/ }),

/***/ "./src/app/modules/pm/incidents/pages/incident-create/incident-create.component.scss":
/*!*******************************************************************************************!*\
  !*** ./src/app/modules/pm/incidents/pages/incident-create/incident-create.component.scss ***!
  \*******************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL21vZHVsZXMvcG0vaW5jaWRlbnRzL3BhZ2VzL2luY2lkZW50LWNyZWF0ZS9pbmNpZGVudC1jcmVhdGUuY29tcG9uZW50LnNjc3MifQ== */");

/***/ }),

/***/ "./src/app/modules/pm/incidents/pages/incident-create/incident-create.component.ts":
/*!*****************************************************************************************!*\
  !*** ./src/app/modules/pm/incidents/pages/incident-create/incident-create.component.ts ***!
  \*****************************************************************************************/
/*! exports provided: IncidentCreateComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "IncidentCreateComponent", function() { return IncidentCreateComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _ngx_translate_core__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @ngx-translate/core */ "./node_modules/@ngx-translate/core/fesm5/ngx-translate-core.js");
/* harmony import */ var ngx_toastr__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ngx-toastr */ "./node_modules/ngx-toastr/fesm5/ngx-toastr.js");
/* harmony import */ var _core_services_team_service__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../../../../../core/services/team.service */ "./src/app/core/services/team.service.ts");
/* harmony import */ var _core_services_project_service__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../../../../../core/services/project.service */ "./src/app/core/services/project.service.ts");
/* harmony import */ var _core_services_incident_service__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../../../../../core/services/incident.service */ "./src/app/core/services/incident.service.ts");
/* harmony import */ var _core_services_custom_fields_service__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ../../../../../core/services/custom-fields.service */ "./src/app/core/services/custom-fields.service.ts");











var IncidentCreateComponent = /** @class */ (function () {
    function IncidentCreateComponent(translate, datepipe, router, formBuilder, toastr, teamService, projectService, incidentService, customFieldsService) {
        this.translate = translate;
        this.datepipe = datepipe;
        this.router = router;
        this.formBuilder = formBuilder;
        this.toastr = toastr;
        this.teamService = teamService;
        this.projectService = projectService;
        this.incidentService = incidentService;
        this.customFieldsService = customFieldsService;
        this.customFields = { length: 0 };
        this.isFormSubmitted = false;
        this.isPageLoaded = false;
        this.teams = [];
        this.teamsMembers = [];
        this.datepickerConfig = {
            dateInputFormat: 'YYYY-MM-DD',
            containerClass: 'theme-red'
        };
    }
    Object.defineProperty(IncidentCreateComponent.prototype, "incidentControl", {
        get: function () {
            return this.createIncidentForm.controls;
        },
        enumerable: true,
        configurable: true
    });
    IncidentCreateComponent.prototype.ngOnInit = function () {
        this.getTeams();
        this.getProjects();
        this.getCustomFieldByForm();
        this.loadForms();
    };
    IncidentCreateComponent.prototype.loadForms = function () {
        this.createIncidentForm = this.formBuilder.group({
            generated_id: ['INC0001', _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required],
            incident_name: ['', [_angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required, _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].maxLength(255)]],
            project_id: [null],
            project_version: [null],
            start_date: [null],
            end_date: [null],
            priority: [2, _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required],
            estimated_hours: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].pattern(/^[0-9]+\:[0-5][0-9]$/)],
            incident_type: [1, _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required],
            assigned_group_id: [null],
            assign_to: [null],
            status: [1, _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required],
            description: [''],
            custom_field: this.formBuilder.array([]),
            custom_fields: [null]
        });
        this.isPageLoaded = true;
        this.getIncidentGeneratedId();
    };
    IncidentCreateComponent.prototype.getCustomFieldByForm = function () {
        var _this = this;
        this.customFieldsService.getCustomFieldByForm(4)
            .subscribe(function (data) {
            _this.customFields = data;
            if (_this.customFields.length > 0) {
                _this.addDynamicField(_this.customFields);
            }
        });
    };
    IncidentCreateComponent.prototype.getProjects = function () {
        var _this = this;
        this.projectService.getMyProjects().subscribe(function (data) {
            _this.projects = data;
        });
    };
    IncidentCreateComponent.prototype.getTeams = function () {
        var _this = this;
        this.teamService.getAll().subscribe(function (data) {
            _this.teams = data;
        });
    };
    IncidentCreateComponent.prototype.getIncidentGeneratedId = function () {
        var _this = this;
        this.incidentService.getIncidentGeneratedId().subscribe(function (data) {
            _this.createIncidentForm.patchValue({ generated_id: data });
        });
    };
    IncidentCreateComponent.prototype.projectChange = function (event) {
        this.createIncidentForm.patchValue({ project_version: null });
        this.createIncidentForm.patchValue({ start_date: null });
        this.createIncidentForm.patchValue({ end_date: null });
        if (this.createIncidentForm.value.project_id == undefined || this.createIncidentForm.value.project_id == null || this.createIncidentForm.value.project_id == '') {
            this.projectVersions = null;
            return;
        }
        this.projectVersions = event.project_version.split(',');
        // --
        // Dates
        this.projectStartDate = new Date(event.start_date);
    };
    IncidentCreateComponent.prototype.startDateChange = function (event) {
        this.createIncidentForm.patchValue({ end_date: event });
    };
    IncidentCreateComponent.prototype.addDynamicField = function (fieldList) {
        var _this = this;
        fieldList.forEach(function (element) {
            var _a;
            var control = _this.createIncidentForm.controls.custom_field;
            var validators = null;
            if (element.is_required == 1) {
                validators = [_angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required];
            }
            control.push(_this.formBuilder.group((_a = {},
                _a[element.field_column] = [null, validators],
                _a)));
        });
    };
    IncidentCreateComponent.prototype.assignGroupChange = function (event) {
        if (this.createIncidentForm.value.assigned_group_id == undefined || this.createIncidentForm.value.assigned_group_id == null || this.createIncidentForm.value.assigned_group_id == '') {
            this.createIncidentForm.patchValue({ assign_to: null });
            this.teamsMembers = null;
            return;
        }
        this.teamsMembers = event.members;
    };
    IncidentCreateComponent.prototype.setCustomFields = function () {
        var arr = this.createIncidentForm.value.custom_field, obj = {}, iRow = 0, that = this;
        arr.forEach(function (item) {
            var key = Object.keys(item)[0];
            obj[key] = item[key];
            if (that.customFields[iRow++].field_type == 'date') {
                obj[key] = that.datepipe.transform(item[key], 'yyyy-MM-dd');
            }
        });
        this.createIncidentForm.patchValue({ custom_fields: obj });
    };
    IncidentCreateComponent.prototype.onSubmit = function () {
        var _this = this;
        this.isFormSubmitted = true;
        if (this.createIncidentForm.invalid) {
            return;
        }
        if (this.customFields.length > 0) {
            this.setCustomFields();
        }
        this.incidentService.create(this.createIncidentForm.value).subscribe(function (data) {
            _this.toastr.success(_this.translate.instant('incidents.messages.create'), _this.translate.instant('incidents.title'));
            _this.router.navigate(['incidents']);
        });
    };
    IncidentCreateComponent.ctorParameters = function () { return [
        { type: _ngx_translate_core__WEBPACK_IMPORTED_MODULE_5__["TranslateService"] },
        { type: _angular_common__WEBPACK_IMPORTED_MODULE_3__["DatePipe"] },
        { type: _angular_router__WEBPACK_IMPORTED_MODULE_4__["Router"] },
        { type: _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormBuilder"] },
        { type: ngx_toastr__WEBPACK_IMPORTED_MODULE_6__["ToastrService"] },
        { type: _core_services_team_service__WEBPACK_IMPORTED_MODULE_7__["TeamService"] },
        { type: _core_services_project_service__WEBPACK_IMPORTED_MODULE_8__["ProjectService"] },
        { type: _core_services_incident_service__WEBPACK_IMPORTED_MODULE_9__["IncidentService"] },
        { type: _core_services_custom_fields_service__WEBPACK_IMPORTED_MODULE_10__["CustomFieldsService"] }
    ]; };
    IncidentCreateComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-incident-create',
            template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./incident-create.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/modules/pm/incidents/pages/incident-create/incident-create.component.html")).default,
            preserveWhitespaces: true,
            styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./incident-create.component.scss */ "./src/app/modules/pm/incidents/pages/incident-create/incident-create.component.scss")).default]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_ngx_translate_core__WEBPACK_IMPORTED_MODULE_5__["TranslateService"],
            _angular_common__WEBPACK_IMPORTED_MODULE_3__["DatePipe"],
            _angular_router__WEBPACK_IMPORTED_MODULE_4__["Router"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormBuilder"],
            ngx_toastr__WEBPACK_IMPORTED_MODULE_6__["ToastrService"],
            _core_services_team_service__WEBPACK_IMPORTED_MODULE_7__["TeamService"],
            _core_services_project_service__WEBPACK_IMPORTED_MODULE_8__["ProjectService"],
            _core_services_incident_service__WEBPACK_IMPORTED_MODULE_9__["IncidentService"],
            _core_services_custom_fields_service__WEBPACK_IMPORTED_MODULE_10__["CustomFieldsService"]])
    ], IncidentCreateComponent);
    return IncidentCreateComponent;
}());



/***/ }),

/***/ "./src/app/modules/pm/incidents/pages/incident-detail/incident-detail.component.scss":
/*!*******************************************************************************************!*\
  !*** ./src/app/modules/pm/incidents/pages/incident-detail/incident-detail.component.scss ***!
  \*******************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL21vZHVsZXMvcG0vaW5jaWRlbnRzL3BhZ2VzL2luY2lkZW50LWRldGFpbC9pbmNpZGVudC1kZXRhaWwuY29tcG9uZW50LnNjc3MifQ== */");

/***/ }),

/***/ "./src/app/modules/pm/incidents/pages/incident-detail/incident-detail.component.ts":
/*!*****************************************************************************************!*\
  !*** ./src/app/modules/pm/incidents/pages/incident-detail/incident-detail.component.ts ***!
  \*****************************************************************************************/
/*! exports provided: IncidentDetailComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "IncidentDetailComponent", function() { return IncidentDetailComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var ngx_permissions__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ngx-permissions */ "./node_modules/ngx-permissions/ngx-permissions.umd.js");
/* harmony import */ var ngx_permissions__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(ngx_permissions__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _core_services_incident_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../../../../core/services/incident.service */ "./src/app/core/services/incident.service.ts");
/* harmony import */ var _core_services_authentication_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../../../../core/services/authentication.service */ "./src/app/core/services/authentication.service.ts");
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../../../../../environments/environment */ "./src/environments/environment.ts");







var IncidentDetailComponent = /** @class */ (function () {
    function IncidentDetailComponent(ngxRolesService, route, router, incidentService, authenticationService) {
        var _this = this;
        this.ngxRolesService = ngxRolesService;
        this.route = route;
        this.router = router;
        this.incidentService = incidentService;
        this.authenticationService = authenticationService;
        this.apiUrl = _environments_environment__WEBPACK_IMPORTED_MODULE_6__["environment"].apiUrl;
        this.IncidentTab = 1;
        this.isPageLoaded = false;
        this.activeIncidentTab = '1';
        this.permission = false;
        this.authenticationService.loginUser.subscribe(function (x) { return _this.loginUser = x; });
        this.route.paramMap.subscribe(function (params) {
            _this.getById(params.get('id'));
        });
    }
    IncidentDetailComponent.prototype.ngOnInit = function () {
    };
    IncidentDetailComponent.prototype.getCheckPermission = function (incident) {
        var role = this.ngxRolesService.getRole('admin');
        if ((role && role.name == 'admin') || this.loginUser.is_super_admin) {
            this.permission = true;
        }
        else if (incident.assign_to == this.loginUser.id || incident.create_user_id == this.loginUser.id) {
            this.permission = true;
        }
    };
    IncidentDetailComponent.prototype.getActiveIncidentTab = function (tab) {
        return this.activeIncidentTab = tab;
    };
    IncidentDetailComponent.prototype.setActiveIncidentTab = function (tab) {
        return this.activeIncidentTab === tab;
    };
    IncidentDetailComponent.prototype.getById = function (incidentId) {
        var _this = this;
        this.incidentService.getById(incidentId)
            .subscribe(function (data) {
            _this.incident = data;
            _this.getCheckPermission(_this.incident);
            _this.isPageLoaded = true;
        });
    };
    IncidentDetailComponent.ctorParameters = function () { return [
        { type: ngx_permissions__WEBPACK_IMPORTED_MODULE_3__["NgxRolesService"] },
        { type: _angular_router__WEBPACK_IMPORTED_MODULE_2__["ActivatedRoute"] },
        { type: _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"] },
        { type: _core_services_incident_service__WEBPACK_IMPORTED_MODULE_4__["IncidentService"] },
        { type: _core_services_authentication_service__WEBPACK_IMPORTED_MODULE_5__["AuthenticationService"] }
    ]; };
    IncidentDetailComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-incident-detail',
            template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./incident-detail.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/modules/pm/incidents/pages/incident-detail/incident-detail.component.html")).default,
            styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./incident-detail.component.scss */ "./src/app/modules/pm/incidents/pages/incident-detail/incident-detail.component.scss")).default]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [ngx_permissions__WEBPACK_IMPORTED_MODULE_3__["NgxRolesService"],
            _angular_router__WEBPACK_IMPORTED_MODULE_2__["ActivatedRoute"],
            _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"],
            _core_services_incident_service__WEBPACK_IMPORTED_MODULE_4__["IncidentService"],
            _core_services_authentication_service__WEBPACK_IMPORTED_MODULE_5__["AuthenticationService"]])
    ], IncidentDetailComponent);
    return IncidentDetailComponent;
}());



/***/ }),

/***/ "./src/app/modules/pm/incidents/pages/incident-edit/incident-edit.component.scss":
/*!***************************************************************************************!*\
  !*** ./src/app/modules/pm/incidents/pages/incident-edit/incident-edit.component.scss ***!
  \***************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL21vZHVsZXMvcG0vaW5jaWRlbnRzL3BhZ2VzL2luY2lkZW50LWVkaXQvaW5jaWRlbnQtZWRpdC5jb21wb25lbnQuc2NzcyJ9 */");

/***/ }),

/***/ "./src/app/modules/pm/incidents/pages/incident-edit/incident-edit.component.ts":
/*!*************************************************************************************!*\
  !*** ./src/app/modules/pm/incidents/pages/incident-edit/incident-edit.component.ts ***!
  \*************************************************************************************/
/*! exports provided: IncidentEditComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "IncidentEditComponent", function() { return IncidentEditComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var ngx_permissions__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ngx-permissions */ "./node_modules/ngx-permissions/ngx-permissions.umd.js");
/* harmony import */ var ngx_permissions__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(ngx_permissions__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _ngx_translate_core__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @ngx-translate/core */ "./node_modules/@ngx-translate/core/fesm5/ngx-translate-core.js");
/* harmony import */ var ngx_toastr__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ngx-toastr */ "./node_modules/ngx-toastr/fesm5/ngx-toastr.js");
/* harmony import */ var _core_services_team_service__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../../../../../core/services/team.service */ "./src/app/core/services/team.service.ts");
/* harmony import */ var _core_services_project_service__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../../../../../core/services/project.service */ "./src/app/core/services/project.service.ts");
/* harmony import */ var _core_services_incident_service__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ../../../../../core/services/incident.service */ "./src/app/core/services/incident.service.ts");
/* harmony import */ var _core_services_custom_fields_service__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ../../../../../core/services/custom-fields.service */ "./src/app/core/services/custom-fields.service.ts");
/* harmony import */ var _core_services_authentication_service__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ../../../../../core/services/authentication.service */ "./src/app/core/services/authentication.service.ts");













var IncidentEditComponent = /** @class */ (function () {
    function IncidentEditComponent(translate, datepipe, ngxRolesService, router, route, formBuilder, toastr, teamService, projectService, incidentService, customFieldsService, authenticationService) {
        var _this = this;
        this.translate = translate;
        this.datepipe = datepipe;
        this.ngxRolesService = ngxRolesService;
        this.router = router;
        this.route = route;
        this.formBuilder = formBuilder;
        this.toastr = toastr;
        this.teamService = teamService;
        this.projectService = projectService;
        this.incidentService = incidentService;
        this.customFieldsService = customFieldsService;
        this.authenticationService = authenticationService;
        this.customFields = { length: 0 };
        this.isFormSubmitted = false;
        this.isPageLoaded = false;
        this.teams = [];
        this.teamsMembers = [];
        this.datepickerConfig = {
            dateInputFormat: 'YYYY-MM-DD',
            containerClass: 'theme-red'
        };
        this.authenticationService.loginUser.subscribe(function (x) { return _this.loginUser = x; });
        this.route.paramMap.subscribe(function (params) {
            _this.getIncidentById(params.get('id'));
        });
    }
    Object.defineProperty(IncidentEditComponent.prototype, "incidentControl", {
        get: function () {
            return this.editIncidentForm.controls;
        },
        enumerable: true,
        configurable: true
    });
    IncidentEditComponent.prototype.ngOnInit = function () {
    };
    IncidentEditComponent.prototype.loadForms = function () {
        // --
        // Dates
        if (this.incident.project) {
            this.projectStartDate = new Date(this.incident.project.start_date);
        }
        if (this.incident.start_date) {
            this.incident.start_date = new Date(this.incident.start_date);
        }
        this.editIncidentForm = this.formBuilder.group({
            id: [this.incident.id],
            generated_id: [this.incident.generated_id, _angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].required],
            incident_name: [this.incident.incident_name, [_angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].required, _angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].maxLength(255)]],
            start_date: [this.incident.start_date],
            end_date: [this.incident.end_date],
            project_id: [this.incident.project_id],
            project_version: [this.incident.project_version],
            status: [this.incident.status, _angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].required],
            priority: [this.incident.priority, _angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].required],
            estimated_hours: [this.incident.estimated_hours, _angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].pattern(/^[0-9]+\:[0-5][0-9]$/)],
            assigned_group_id: [this.incident.assigned_group_id],
            assign_to: [this.incident.assign_to],
            incident_type: [this.incident.incident_type, _angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].required],
            description: [this.incident.description],
            custom_field: this.formBuilder.array([]),
            custom_fields: [null],
        });
        this.getCustomFieldByForm();
        this.isPageLoaded = true;
    };
    IncidentEditComponent.prototype.getCheckPermission = function (incident) {
        var role = this.ngxRolesService.getRole('admin');
        if ((role && role.name == 'admin') || this.loginUser.is_super_admin) {
        }
        else if (incident.assign_to == this.loginUser.id || incident.create_user_id == this.loginUser.id) {
        }
        else {
            this.router.navigate(['incidents']);
        }
    };
    IncidentEditComponent.prototype.getProjects = function () {
        var _this = this;
        this.projectService.getMyProjects().subscribe(function (data) {
            _this.projects = data;
            _this.getProjectVersions();
        });
    };
    IncidentEditComponent.prototype.getTeams = function () {
        var _this = this;
        this.teamService.getAll().subscribe(function (data) {
            _this.teams = data;
            var selectedTeam = _this.teams.find(function (i) { return i.id == _this.incident.assigned_group_id; });
            _this.getProjects();
            _this.loadForms();
            _this.assignGroupChange(selectedTeam);
        });
    };
    IncidentEditComponent.prototype.getProjectVersions = function () {
        for (var iRow in this.projects) {
            if (this.projects[iRow].id == this.incident.project_id) {
                this.projectVersions = this.projects[iRow].project_version.split(',');
            }
        }
    };
    IncidentEditComponent.prototype.getCustomFieldByForm = function () {
        var _this = this;
        this.customFieldsService.getCustomFieldByForm(4)
            .subscribe(function (data) {
            _this.customFields = data;
            if (_this.customFields.length > 0) {
                _this.addDynamicField(_this.customFields);
            }
        });
    };
    IncidentEditComponent.prototype.addDynamicField = function (fieldList) {
        var _this = this;
        fieldList.forEach(function (element) {
            var _a, _b;
            var control = _this.editIncidentForm.controls.custom_field;
            var validators = null;
            if (element.is_required == 1) {
                validators = [_angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].required];
            }
            if (element.field_type == 'date' && _this.incident[element.field_column] != null) {
                control.push(_this.formBuilder.group((_a = {},
                    _a[element.field_column] = [new Date(_this.incident[element.field_column]), validators],
                    _a)));
            }
            else {
                control.push(_this.formBuilder.group((_b = {},
                    _b[element.field_column] = [_this.incident[element.field_column], validators],
                    _b)));
            }
        });
    };
    IncidentEditComponent.prototype.assignGroupChange = function (event) {
        if (this.editIncidentForm.value.assigned_group_id == undefined || this.editIncidentForm.value.assigned_group_id == null || this.editIncidentForm.value.assigned_group_id == '') {
            this.editIncidentForm.patchValue({ assign_to: null });
            this.teamsMembers = null;
            return;
        }
        this.teamsMembers = event.members;
    };
    IncidentEditComponent.prototype.projectChange = function (event) {
        this.editIncidentForm.patchValue({ project_version: null });
        this.editIncidentForm.patchValue({ start_date: null });
        this.editIncidentForm.patchValue({ end_date: null });
        if (this.editIncidentForm.value.project_id == undefined || this.editIncidentForm.value.project_id == null || this.editIncidentForm.value.project_id == '') {
            this.projectVersions = null;
            return;
        }
        this.projectVersions = event.project_version.split(',');
        // --
        // Dates
        this.projectStartDate = new Date(event.start_date);
    };
    IncidentEditComponent.prototype.startDateChange = function () {
        this.editIncidentForm.patchValue({ end_date: this.editIncidentForm.value.start_date });
    };
    IncidentEditComponent.prototype.getIncidentById = function (incidentId) {
        var _this = this;
        this.incidentService.getById(incidentId)
            .subscribe(function (data) {
            _this.incident = data;
            _this.getCheckPermission(_this.incident);
            _this.getTeams();
        });
    };
    IncidentEditComponent.prototype.setCustomFields = function () {
        var arr = this.editIncidentForm.value.custom_field, obj = {}, iRow = 0, that = this;
        arr.forEach(function (item) {
            var key = Object.keys(item)[0];
            obj[key] = item[key];
            if (that.customFields[iRow++].field_type == 'date') {
                obj[key] = that.datepipe.transform(item[key], 'yyyy-MM-dd');
            }
        });
        this.editIncidentForm.patchValue({ custom_fields: obj });
    };
    IncidentEditComponent.prototype.onSubmit = function () {
        var _this = this;
        this.isFormSubmitted = true;
        if (this.editIncidentForm.invalid) {
            return;
        }
        if (this.customFields.length > 0) {
            this.setCustomFields();
        }
        if (this.editIncidentForm.invalid) {
            return;
        }
        this.editIncidentForm.value.start_date = this.datepipe.transform(this.editIncidentForm.value.start_date, 'yyyy-MM-dd');
        this.editIncidentForm.value.end_date = this.datepipe.transform(this.editIncidentForm.value.end_date, 'yyyy-MM-dd');
        this.incidentService.update(this.editIncidentForm.value).subscribe(function (data) {
            _this.toastr.success(_this.translate.instant('incidents.messages.update'), _this.translate.instant('incidents.title'));
            _this.router.navigate(['incidents']);
        });
    };
    IncidentEditComponent.ctorParameters = function () { return [
        { type: _ngx_translate_core__WEBPACK_IMPORTED_MODULE_6__["TranslateService"] },
        { type: _angular_common__WEBPACK_IMPORTED_MODULE_2__["DatePipe"] },
        { type: ngx_permissions__WEBPACK_IMPORTED_MODULE_5__["NgxRolesService"] },
        { type: _angular_router__WEBPACK_IMPORTED_MODULE_4__["Router"] },
        { type: _angular_router__WEBPACK_IMPORTED_MODULE_4__["ActivatedRoute"] },
        { type: _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormBuilder"] },
        { type: ngx_toastr__WEBPACK_IMPORTED_MODULE_7__["ToastrService"] },
        { type: _core_services_team_service__WEBPACK_IMPORTED_MODULE_8__["TeamService"] },
        { type: _core_services_project_service__WEBPACK_IMPORTED_MODULE_9__["ProjectService"] },
        { type: _core_services_incident_service__WEBPACK_IMPORTED_MODULE_10__["IncidentService"] },
        { type: _core_services_custom_fields_service__WEBPACK_IMPORTED_MODULE_11__["CustomFieldsService"] },
        { type: _core_services_authentication_service__WEBPACK_IMPORTED_MODULE_12__["AuthenticationService"] }
    ]; };
    IncidentEditComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-incident-edit',
            template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./incident-edit.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/modules/pm/incidents/pages/incident-edit/incident-edit.component.html")).default,
            preserveWhitespaces: true,
            styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./incident-edit.component.scss */ "./src/app/modules/pm/incidents/pages/incident-edit/incident-edit.component.scss")).default]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_ngx_translate_core__WEBPACK_IMPORTED_MODULE_6__["TranslateService"],
            _angular_common__WEBPACK_IMPORTED_MODULE_2__["DatePipe"],
            ngx_permissions__WEBPACK_IMPORTED_MODULE_5__["NgxRolesService"],
            _angular_router__WEBPACK_IMPORTED_MODULE_4__["Router"],
            _angular_router__WEBPACK_IMPORTED_MODULE_4__["ActivatedRoute"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormBuilder"],
            ngx_toastr__WEBPACK_IMPORTED_MODULE_7__["ToastrService"],
            _core_services_team_service__WEBPACK_IMPORTED_MODULE_8__["TeamService"],
            _core_services_project_service__WEBPACK_IMPORTED_MODULE_9__["ProjectService"],
            _core_services_incident_service__WEBPACK_IMPORTED_MODULE_10__["IncidentService"],
            _core_services_custom_fields_service__WEBPACK_IMPORTED_MODULE_11__["CustomFieldsService"],
            _core_services_authentication_service__WEBPACK_IMPORTED_MODULE_12__["AuthenticationService"]])
    ], IncidentEditComponent);
    return IncidentEditComponent;
}());



/***/ }),

/***/ "./src/app/modules/pm/incidents/pages/incident-kanban/incident-kanban.component.scss":
/*!*******************************************************************************************!*\
  !*** ./src/app/modules/pm/incidents/pages/incident-kanban/incident-kanban.component.scss ***!
  \*******************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = (".section-heading {\n  padding: 5px 10px;\n  font-size: 15px;\n  font-weight: bold;\n}\n\n.drag-container {\n  width: 600px;\n  max-width: 100%;\n  margin: 0 25px 25px 0;\n  display: inline-block;\n  vertical-align: top;\n  background-color: #E9ECEF;\n  padding: 15px;\n  border-radius: 5px;\n}\n\n.item-list {\n  min-height: 60px;\n  border-radius: 4px;\n  display: block;\n}\n\n.item-box {\n  padding: 8px 10px;\n  border: solid 1px #ccc;\n  margin-bottom: 5px;\n  color: rgba(0, 0, 0, 0.87);\n  display: -ms-flexbox;\n  display: flex;\n  -ms-flex-direction: row;\n      flex-direction: row;\n  -ms-flex-align: center;\n      align-items: center;\n  -ms-flex-pack: justify;\n      justify-content: space-between;\n  box-sizing: border-box;\n  cursor: move;\n  background: white;\n  font-size: 14px;\n  border-radius: 20px;\n}\n\n.cdk-drag-preview {\n  box-sizing: border-box;\n  border-radius: 4px;\n  padding: 20px 20px;\n}\n\n.cdk-drag-placeholder {\n  opacity: 0;\n}\n\n.cdk-drag-animating {\n  transition: transform 250ms cubic-bezier(0, 0, 0.2, 1);\n}\n\n.item-list.cdk-drop-list-dragging .item-box:not(.cdk-drag-placeholder) {\n  transition: transform 250ms cubic-bezier(0, 0, 0.2, 1);\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvbW9kdWxlcy9wbS9pbmNpZGVudHMvcGFnZXMvaW5jaWRlbnQta2FuYmFuL0M6XFxVc2Vyc1xcdGh1YW5cXE9uZURyaXZlXFxEZXNrdG9wXFxnbGF2YWwtdGh1YW5kaW5oL3NyY1xcYXBwXFxtb2R1bGVzXFxwbVxcaW5jaWRlbnRzXFxwYWdlc1xcaW5jaWRlbnQta2FuYmFuXFxpbmNpZGVudC1rYW5iYW4uY29tcG9uZW50LnNjc3MiLCJzcmMvYXBwL21vZHVsZXMvcG0vaW5jaWRlbnRzL3BhZ2VzL2luY2lkZW50LWthbmJhbi9pbmNpZGVudC1rYW5iYW4uY29tcG9uZW50LnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDSSxpQkFBQTtFQUNBLGVBQUE7RUFDQSxpQkFBQTtBQ0NKOztBREVBO0VBQ0ksWUFBQTtFQUNBLGVBQUE7RUFDQSxxQkFBQTtFQUNBLHFCQUFBO0VBQ0EsbUJBQUE7RUFDQSx5QkFBQTtFQUNBLGFBQUE7RUFDQSxrQkFBQTtBQ0NKOztBREVBO0VBQ0ksZ0JBQUE7RUFDQSxrQkFBQTtFQUNBLGNBQUE7QUNDSjs7QURFQTtFQUNJLGlCQUFBO0VBQ0Esc0JBQUE7RUFDQSxrQkFBQTtFQUNBLDBCQUFBO0VBQ0Esb0JBQUE7RUFBQSxhQUFBO0VBQ0EsdUJBQUE7TUFBQSxtQkFBQTtFQUNBLHNCQUFBO01BQUEsbUJBQUE7RUFDQSxzQkFBQTtNQUFBLDhCQUFBO0VBQ0Esc0JBQUE7RUFDQSxZQUFBO0VBQ0EsaUJBQUE7RUFDQSxlQUFBO0VBQ0EsbUJBQUE7QUNDSjs7QURFQTtFQUNJLHNCQUFBO0VBQ0Esa0JBQUE7RUFDQSxrQkFBQTtBQ0NKOztBREVBO0VBQ0ksVUFBQTtBQ0NKOztBREVBO0VBQ0ksc0RBQUE7QUNDSjs7QURFQTtFQUNJLHNEQUFBO0FDQ0oiLCJmaWxlIjoic3JjL2FwcC9tb2R1bGVzL3BtL2luY2lkZW50cy9wYWdlcy9pbmNpZGVudC1rYW5iYW4vaW5jaWRlbnQta2FuYmFuLmNvbXBvbmVudC5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLnNlY3Rpb24taGVhZGluZyB7XHJcbiAgICBwYWRkaW5nOiA1cHggMTBweDtcclxuICAgIGZvbnQtc2l6ZTogMTVweDtcclxuICAgIGZvbnQtd2VpZ2h0OiBib2xkO1xyXG59XHJcblxyXG4uZHJhZy1jb250YWluZXIge1xyXG4gICAgd2lkdGg6IDYwMHB4O1xyXG4gICAgbWF4LXdpZHRoOiAxMDAlO1xyXG4gICAgbWFyZ2luOiAwIDI1cHggMjVweCAwO1xyXG4gICAgZGlzcGxheTogaW5saW5lLWJsb2NrO1xyXG4gICAgdmVydGljYWwtYWxpZ246IHRvcDtcclxuICAgIGJhY2tncm91bmQtY29sb3I6ICNFOUVDRUY7XHJcbiAgICBwYWRkaW5nOiAxNXB4O1xyXG4gICAgYm9yZGVyLXJhZGl1czogNXB4O1xyXG59XHJcblxyXG4uaXRlbS1saXN0IHtcclxuICAgIG1pbi1oZWlnaHQ6IDYwcHg7XHJcbiAgICBib3JkZXItcmFkaXVzOiA0cHg7XHJcbiAgICBkaXNwbGF5OiBibG9jaztcclxufVxyXG5cclxuLml0ZW0tYm94IHtcclxuICAgIHBhZGRpbmc6IDhweCAxMHB4O1xyXG4gICAgYm9yZGVyOiBzb2xpZCAxcHggI2NjYztcclxuICAgIG1hcmdpbi1ib3R0b206IDVweDtcclxuICAgIGNvbG9yOiByZ2JhKDAsIDAsIDAsIDAuODcpO1xyXG4gICAgZGlzcGxheTogZmxleDtcclxuICAgIGZsZXgtZGlyZWN0aW9uOiByb3c7XHJcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xyXG4gICAganVzdGlmeS1jb250ZW50OiBzcGFjZS1iZXR3ZWVuO1xyXG4gICAgYm94LXNpemluZzogYm9yZGVyLWJveDtcclxuICAgIGN1cnNvcjogbW92ZTtcclxuICAgIGJhY2tncm91bmQ6IHdoaXRlO1xyXG4gICAgZm9udC1zaXplOiAxNHB4O1xyXG4gICAgYm9yZGVyLXJhZGl1czogMjBweDtcclxufVxyXG5cclxuLmNkay1kcmFnLXByZXZpZXcge1xyXG4gICAgYm94LXNpemluZzogYm9yZGVyLWJveDtcclxuICAgIGJvcmRlci1yYWRpdXM6IDRweDtcclxuICAgIHBhZGRpbmc6IDIwcHggMjBweDtcclxufVxyXG5cclxuLmNkay1kcmFnLXBsYWNlaG9sZGVyIHtcclxuICAgIG9wYWNpdHk6IDA7XHJcbn1cclxuXHJcbi5jZGstZHJhZy1hbmltYXRpbmcge1xyXG4gICAgdHJhbnNpdGlvbjogdHJhbnNmb3JtIDI1MG1zIGN1YmljLWJlemllcigwLCAwLCAwLjIsIDEpO1xyXG59XHJcblxyXG4uaXRlbS1saXN0LmNkay1kcm9wLWxpc3QtZHJhZ2dpbmcgLml0ZW0tYm94Om5vdCguY2RrLWRyYWctcGxhY2Vob2xkZXIpIHtcclxuICAgIHRyYW5zaXRpb246IHRyYW5zZm9ybSAyNTBtcyBjdWJpYy1iZXppZXIoMCwgMCwgMC4yLCAxKTtcclxufVxyXG4iLCIuc2VjdGlvbi1oZWFkaW5nIHtcbiAgcGFkZGluZzogNXB4IDEwcHg7XG4gIGZvbnQtc2l6ZTogMTVweDtcbiAgZm9udC13ZWlnaHQ6IGJvbGQ7XG59XG5cbi5kcmFnLWNvbnRhaW5lciB7XG4gIHdpZHRoOiA2MDBweDtcbiAgbWF4LXdpZHRoOiAxMDAlO1xuICBtYXJnaW46IDAgMjVweCAyNXB4IDA7XG4gIGRpc3BsYXk6IGlubGluZS1ibG9jaztcbiAgdmVydGljYWwtYWxpZ246IHRvcDtcbiAgYmFja2dyb3VuZC1jb2xvcjogI0U5RUNFRjtcbiAgcGFkZGluZzogMTVweDtcbiAgYm9yZGVyLXJhZGl1czogNXB4O1xufVxuXG4uaXRlbS1saXN0IHtcbiAgbWluLWhlaWdodDogNjBweDtcbiAgYm9yZGVyLXJhZGl1czogNHB4O1xuICBkaXNwbGF5OiBibG9jaztcbn1cblxuLml0ZW0tYm94IHtcbiAgcGFkZGluZzogOHB4IDEwcHg7XG4gIGJvcmRlcjogc29saWQgMXB4ICNjY2M7XG4gIG1hcmdpbi1ib3R0b206IDVweDtcbiAgY29sb3I6IHJnYmEoMCwgMCwgMCwgMC44Nyk7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGZsZXgtZGlyZWN0aW9uOiByb3c7XG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gIGp1c3RpZnktY29udGVudDogc3BhY2UtYmV0d2VlbjtcbiAgYm94LXNpemluZzogYm9yZGVyLWJveDtcbiAgY3Vyc29yOiBtb3ZlO1xuICBiYWNrZ3JvdW5kOiB3aGl0ZTtcbiAgZm9udC1zaXplOiAxNHB4O1xuICBib3JkZXItcmFkaXVzOiAyMHB4O1xufVxuXG4uY2RrLWRyYWctcHJldmlldyB7XG4gIGJveC1zaXppbmc6IGJvcmRlci1ib3g7XG4gIGJvcmRlci1yYWRpdXM6IDRweDtcbiAgcGFkZGluZzogMjBweCAyMHB4O1xufVxuXG4uY2RrLWRyYWctcGxhY2Vob2xkZXIge1xuICBvcGFjaXR5OiAwO1xufVxuXG4uY2RrLWRyYWctYW5pbWF0aW5nIHtcbiAgdHJhbnNpdGlvbjogdHJhbnNmb3JtIDI1MG1zIGN1YmljLWJlemllcigwLCAwLCAwLjIsIDEpO1xufVxuXG4uaXRlbS1saXN0LmNkay1kcm9wLWxpc3QtZHJhZ2dpbmcgLml0ZW0tYm94Om5vdCguY2RrLWRyYWctcGxhY2Vob2xkZXIpIHtcbiAgdHJhbnNpdGlvbjogdHJhbnNmb3JtIDI1MG1zIGN1YmljLWJlemllcigwLCAwLCAwLjIsIDEpO1xufSJdfQ== */");

/***/ }),

/***/ "./src/app/modules/pm/incidents/pages/incident-kanban/incident-kanban.component.ts":
/*!*****************************************************************************************!*\
  !*** ./src/app/modules/pm/incidents/pages/incident-kanban/incident-kanban.component.ts ***!
  \*****************************************************************************************/
/*! exports provided: IncidentKanbanComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "IncidentKanbanComponent", function() { return IncidentKanbanComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var ngx_toastr__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ngx-toastr */ "./node_modules/ngx-toastr/fesm5/ngx-toastr.js");
/* harmony import */ var _ngx_translate_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @ngx-translate/core */ "./node_modules/@ngx-translate/core/fesm5/ngx-translate-core.js");
/* harmony import */ var _angular_cdk_drag_drop__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/cdk/drag-drop */ "./node_modules/@angular/cdk/esm5/drag-drop.es5.js");
/* harmony import */ var _core_services_authentication_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../../../../core/services/authentication.service */ "./src/app/core/services/authentication.service.ts");
/* harmony import */ var _core_services_incident_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../../../../core/services/incident.service */ "./src/app/core/services/incident.service.ts");
/* harmony import */ var _core_services_project_service__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../../../../../core/services/project.service */ "./src/app/core/services/project.service.ts");
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../../../../../../environments/environment */ "./src/environments/environment.ts");









var IncidentKanbanComponent = /** @class */ (function () {
    function IncidentKanbanComponent(translate, toastr, authenticationService, incidentService, projectService) {
        var _this = this;
        this.translate = translate;
        this.toastr = toastr;
        this.authenticationService = authenticationService;
        this.incidentService = incidentService;
        this.projectService = projectService;
        this.filter = 'my';
        this.apiUrl = _environments_environment__WEBPACK_IMPORTED_MODULE_8__["environment"].apiUrl;
        this.authenticationService.loginUser.subscribe(function (x) { return _this.loginUser = x; });
    }
    IncidentKanbanComponent.prototype.ngOnInit = function () {
        this.getProjects();
    };
    IncidentKanbanComponent.prototype.getProjects = function () {
        var _this = this;
        this.projectService.getMyProjects()
            .subscribe(function (data) {
            _this.projects = data;
            _this.getIncidents();
        });
    };
    IncidentKanbanComponent.prototype.getIncidents = function (projectId, filter) {
        var _this = this;
        if (projectId === void 0) { projectId = null; }
        if (filter === void 0) { filter = 'my'; }
        var params = {};
        if (projectId == null) {
            params = {
                'filter': filter
            };
        }
        else {
            params = {
                'project_id': projectId,
                'filter': filter
            };
        }
        this.projectId = projectId;
        this.incidentService.getIncidentForKanban(params).subscribe(function (data) {
            _this.setIncidents(data);
        });
    };
    IncidentKanbanComponent.prototype.setIncidents = function (incidents) {
        this.assignedIncidents = [];
        this.inprogressIncidents = [];
        this.openIncidents = [];
        this.completedIncidents = [];
        for (var iRow in incidents) {
            switch (incidents[iRow].status) {
                case 1:
                    this.assignedIncidents.push(incidents[iRow]);
                    break;
                case 3:
                    this.inprogressIncidents.push(incidents[iRow]);
                    break;
                case 4:
                case 6:
                    this.openIncidents.push(incidents[iRow]);
                    break;
                case 2:
                case 5:
                case 7:
                    this.completedIncidents.push(incidents[iRow]);
                    break;
                default:
                    break;
            }
        }
    };
    IncidentKanbanComponent.prototype.drop = function (event) {
        if (event.previousContainer === event.container) {
            Object(_angular_cdk_drag_drop__WEBPACK_IMPORTED_MODULE_4__["moveItemInArray"])(event.container.data, event.previousIndex, event.currentIndex);
        }
        else {
            Object(_angular_cdk_drag_drop__WEBPACK_IMPORTED_MODULE_4__["transferArrayItem"])(event.previousContainer.data, event.container.data, event.previousIndex, event.currentIndex);
        }
        var statusTask = [{
                status: 1,
                list: this.converToArray(this.assignedIncidents)
            }, {
                status: 3,
                list: this.converToArray(this.inprogressIncidents)
            }, {
                status: 4,
                list: this.converToArray(this.openIncidents)
            }, {
                status: 5,
                list: this.converToArray(this.completedIncidents)
            }];
        this.updateStatusList(statusTask);
    };
    IncidentKanbanComponent.prototype.converToArray = function (list) {
        var status_list = [];
        list.forEach(function (element) {
            status_list.push(parseInt(element.id));
        });
        return status_list;
    };
    IncidentKanbanComponent.prototype.updateStatusList = function (task) {
        var _this = this;
        this.incidentService.updateKanbanStatusList(task)
            .subscribe(function (data) {
            _this.toastr.success(_this.translate.instant('incidents.messages.status'), _this.translate.instant('incidents.title'));
        });
    };
    IncidentKanbanComponent.ctorParameters = function () { return [
        { type: _ngx_translate_core__WEBPACK_IMPORTED_MODULE_3__["TranslateService"] },
        { type: ngx_toastr__WEBPACK_IMPORTED_MODULE_2__["ToastrService"] },
        { type: _core_services_authentication_service__WEBPACK_IMPORTED_MODULE_5__["AuthenticationService"] },
        { type: _core_services_incident_service__WEBPACK_IMPORTED_MODULE_6__["IncidentService"] },
        { type: _core_services_project_service__WEBPACK_IMPORTED_MODULE_7__["ProjectService"] }
    ]; };
    IncidentKanbanComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-incident-kanban',
            template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./incident-kanban.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/modules/pm/incidents/pages/incident-kanban/incident-kanban.component.html")).default,
            styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./incident-kanban.component.scss */ "./src/app/modules/pm/incidents/pages/incident-kanban/incident-kanban.component.scss")).default]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_ngx_translate_core__WEBPACK_IMPORTED_MODULE_3__["TranslateService"],
            ngx_toastr__WEBPACK_IMPORTED_MODULE_2__["ToastrService"],
            _core_services_authentication_service__WEBPACK_IMPORTED_MODULE_5__["AuthenticationService"],
            _core_services_incident_service__WEBPACK_IMPORTED_MODULE_6__["IncidentService"],
            _core_services_project_service__WEBPACK_IMPORTED_MODULE_7__["ProjectService"]])
    ], IncidentKanbanComponent);
    return IncidentKanbanComponent;
}());



/***/ }),

/***/ "./src/app/modules/pm/incidents/pages/incident-list/incident-list.component.scss":
/*!***************************************************************************************!*\
  !*** ./src/app/modules/pm/incidents/pages/incident-list/incident-list.component.scss ***!
  \***************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = (".hide_empty_message ::ng-deep .odd {\n  display: none;\n}\n\n.btn-filters .status-dropdown .btn.assigned,\n.btn-filters .status-dropdown .btn.open {\n  background: none;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvbW9kdWxlcy9wbS9pbmNpZGVudHMvcGFnZXMvaW5jaWRlbnQtbGlzdC9DOlxcVXNlcnNcXHRodWFuXFxPbmVEcml2ZVxcRGVza3RvcFxcZ2xhdmFsLXRodWFuZGluaC9zcmNcXGFwcFxcbW9kdWxlc1xccG1cXGluY2lkZW50c1xccGFnZXNcXGluY2lkZW50LWxpc3RcXGluY2lkZW50LWxpc3QuY29tcG9uZW50LnNjc3MiLCJzcmMvYXBwL21vZHVsZXMvcG0vaW5jaWRlbnRzL3BhZ2VzL2luY2lkZW50LWxpc3QvaW5jaWRlbnQtbGlzdC5jb21wb25lbnQuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNJLGFBQUE7QUNDSjs7QURFQTs7RUFFSSxnQkFBQTtBQ0NKIiwiZmlsZSI6InNyYy9hcHAvbW9kdWxlcy9wbS9pbmNpZGVudHMvcGFnZXMvaW5jaWRlbnQtbGlzdC9pbmNpZGVudC1saXN0LmNvbXBvbmVudC5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLmhpZGVfZW1wdHlfbWVzc2FnZSA6Om5nLWRlZXAgLm9kZCB7XHJcbiAgICBkaXNwbGF5OiBub25lXHJcbn1cclxuXHJcbi5idG4tZmlsdGVycyAuc3RhdHVzLWRyb3Bkb3duIC5idG4uYXNzaWduZWQsXHJcbi5idG4tZmlsdGVycyAuc3RhdHVzLWRyb3Bkb3duIC5idG4ub3BlbiB7XHJcbiAgICBiYWNrZ3JvdW5kOiBub25lO1xyXG59XHJcbiIsIi5oaWRlX2VtcHR5X21lc3NhZ2UgOjpuZy1kZWVwIC5vZGQge1xuICBkaXNwbGF5OiBub25lO1xufVxuXG4uYnRuLWZpbHRlcnMgLnN0YXR1cy1kcm9wZG93biAuYnRuLmFzc2lnbmVkLFxuLmJ0bi1maWx0ZXJzIC5zdGF0dXMtZHJvcGRvd24gLmJ0bi5vcGVuIHtcbiAgYmFja2dyb3VuZDogbm9uZTtcbn0iXX0= */");

/***/ }),

/***/ "./src/app/modules/pm/incidents/pages/incident-list/incident-list.component.ts":
/*!*************************************************************************************!*\
  !*** ./src/app/modules/pm/incidents/pages/incident-list/incident-list.component.ts ***!
  \*************************************************************************************/
/*! exports provided: IncidentListComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "IncidentListComponent", function() { return IncidentListComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var ngx_bootstrap_modal__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ngx-bootstrap/modal */ "./node_modules/ngx-bootstrap/modal/fesm5/ngx-bootstrap-modal.js");
/* harmony import */ var ngx_export_as__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ngx-export-as */ "./node_modules/ngx-export-as/fesm2015/ngx-export-as.js");
/* harmony import */ var ngx_toastr__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ngx-toastr */ "./node_modules/ngx-toastr/fesm5/ngx-toastr.js");
/* harmony import */ var ngx_permissions__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ngx-permissions */ "./node_modules/ngx-permissions/ngx-permissions.umd.js");
/* harmony import */ var ngx_permissions__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(ngx_permissions__WEBPACK_IMPORTED_MODULE_7__);
/* harmony import */ var _ngx_translate_core__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @ngx-translate/core */ "./node_modules/@ngx-translate/core/fesm5/ngx-translate-core.js");
/* harmony import */ var angular_datatables__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! angular-datatables */ "./node_modules/angular-datatables/index.js");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! rxjs */ "./node_modules/rxjs/_esm5/index.js");
/* harmony import */ var sweetalert2__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! sweetalert2 */ "./node_modules/sweetalert2/dist/sweetalert2.all.js");
/* harmony import */ var sweetalert2__WEBPACK_IMPORTED_MODULE_11___default = /*#__PURE__*/__webpack_require__.n(sweetalert2__WEBPACK_IMPORTED_MODULE_11__);
/* harmony import */ var _core_services_incident_service__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ../../../../../core/services/incident.service */ "./src/app/core/services/incident.service.ts");
/* harmony import */ var _core_services_authentication_service__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ../../../../../core/services/authentication.service */ "./src/app/core/services/authentication.service.ts");
/* harmony import */ var _core_helpers_pm_helper__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ./../../../../../core/helpers/pm-helper */ "./src/app/core/helpers/pm-helper.ts");
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! ../../../../../../environments/environment */ "./src/environments/environment.ts");
/* harmony import */ var datatables_net__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! datatables.net */ "./node_modules/datatables.net/js/jquery.dataTables.js");
/* harmony import */ var datatables_net__WEBPACK_IMPORTED_MODULE_16___default = /*#__PURE__*/__webpack_require__.n(datatables_net__WEBPACK_IMPORTED_MODULE_16__);
/* harmony import */ var datatables_net_bs4__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! datatables.net-bs4 */ "./node_modules/datatables.net-bs4/js/dataTables.bootstrap4.js");
/* harmony import */ var datatables_net_bs4__WEBPACK_IMPORTED_MODULE_17___default = /*#__PURE__*/__webpack_require__.n(datatables_net_bs4__WEBPACK_IMPORTED_MODULE_17__);


















var IncidentListComponent = /** @class */ (function () {
    function IncidentListComponent(translate, ngxRolesService, router, http, route, modalService, exportAsService, toastr, incidentService, authenticationService) {
        var _this = this;
        this.translate = translate;
        this.ngxRolesService = ngxRolesService;
        this.router = router;
        this.http = http;
        this.route = route;
        this.modalService = modalService;
        this.exportAsService = exportAsService;
        this.toastr = toastr;
        this.incidentService = incidentService;
        this.authenticationService = authenticationService;
        this.dtTrigger = new rxjs__WEBPACK_IMPORTED_MODULE_10__["Subject"]();
        this.dtOptions = {};
        this.incidents = [];
        this.isPageLoaded = false;
        this.incidentstatusKeyValue = _core_helpers_pm_helper__WEBPACK_IMPORTED_MODULE_14__["incident_status_key_value"];
        this.incidentSeveritiesKeyValue = _core_helpers_pm_helper__WEBPACK_IMPORTED_MODULE_14__["incident_severity_key_value"];
        this.incidentFilterKey = 'selected';
        this.exportAsConfig = {
            type: 'pdf',
            elementIdOrContent: 'incident_table',
        };
        this.modalConfigs = {
            animated: true,
            keyboard: true,
            backdrop: true,
            ignoreBackdropClick: false,
            class: 'inmodal modal-dialog-centered animated fadeIn'
        };
        this.apiUrl = _environments_environment__WEBPACK_IMPORTED_MODULE_15__["environment"].apiUrl;
        this.authenticationService.loginUser.subscribe(function (x) { return _this.loginUser = x; });
    }
    IncidentListComponent.prototype.ngOnInit = function () {
        this.loadIncidentDatatable();
    };
    IncidentListComponent.prototype.getTranslateStatus = function (statusKey) {
        return this.incidentstatusKeyValue[statusKey];
    };
    IncidentListComponent.prototype.getTranslatePriorities = function (statusKey) {
        return this.incidentSeveritiesKeyValue[statusKey];
    };
    IncidentListComponent.prototype.loadIncidentDatatable = function () {
        var _this = this;
        this.statusfilterId = 0;
        if (this.route.snapshot.params['status']) {
            this.statusfilterId = this.route.snapshot.params['status'];
        }
        if (this.route.snapshot.params['incidentFilterKey']) {
            this.incidentFilterKey = this.route.snapshot.params['incidentFilterKey'];
        }
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
                    'width': '8%',
                    'target': [0]
                },
                {
                    'sortable': true,
                    'target': [1]
                },
                {
                    'sortable': true,
                    'width': '8%',
                    'target': [2]
                },
                {
                    'sortable': true,
                    'width': '8%',
                    'target': [3]
                },
                {
                    'sortable': true,
                    'width': '8%',
                    'target': [4]
                },
                {
                    'sortable': true,
                    'width': '10%',
                    'target': [5]
                },
                {
                    'sortable': true,
                    'width': '10%',
                    'target': [6]
                },
                {
                    'sortable': true,
                    'target': [7],
                    'width': '10%'
                },
                {
                    'sortable': false,
                    'target': [8],
                    'width': '5%'
                }
            ],
            buttons: [
                {
                    extend: 'csv',
                    title: this.translate.instant('incidents.title'),
                    className: 'btn btn-datatable-gredient',
                    action: function (e, dt, node, config) {
                        that.exportFiles('csv');
                    }
                }, {
                    extend: 'excel',
                    title: this.translate.instant('incidents.title'),
                    className: 'btn btn-datatable-gredient',
                    action: function (e, dt, node, config) {
                        that.exportFiles('xlsx');
                    }
                }, {
                    extend: 'pdf',
                    title: this.translate.instant('incidents.title'),
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
                    status: _this.statusfilterId,
                    filter: _this.incidentFilterKey
                };
                _this.http
                    .post(_this.apiUrl + '/api/all-incident', dataTablesParameters, {})
                    .subscribe(function (resp) {
                    _this.isPageLoaded = true;
                    _this.incidents = resp.data;
                    _this.countStatus = resp;
                    _this.countStatus = _this.countStatus.statusCount;
                    if (_this.countStatus.all == 0) {
                        _this.countStatus.open = 0;
                        _this.countStatus.in_progress = 0;
                        _this.countStatus.assigned = 0;
                        _this.countStatus.solved = 0;
                        _this.countStatus.deferred = 0;
                        _this.countStatus.re_open = 0;
                        _this.countStatus.closed = 0;
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
    IncidentListComponent.prototype.ngAfterViewInit = function () {
        this.dtTrigger.next();
    };
    IncidentListComponent.prototype.ngOnDestroy = function () {
        this.dtTrigger.unsubscribe();
    };
    IncidentListComponent.prototype.rerender = function () {
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
    IncidentListComponent.prototype.exportFiles = function (type) {
        this.exportAsConfig.type = type;
        this.exportAsService.save(this.exportAsConfig, this.translate.instant('incidents.title')).subscribe(function () {
        });
    };
    IncidentListComponent.prototype.getCheckPermission = function (incident) {
        var role = this.ngxRolesService.getRole('admin');
        if ((role && role.name == 'admin') || this.loginUser.is_super_admin) {
            return true;
        }
        else if (incident.assign_to == this.loginUser.id || incident.create_user_id == this.loginUser.id) {
            return true;
        }
        else {
            return false;
        }
    };
    IncidentListComponent.prototype.changeIncidentStatus = function (id, status) {
        var _this = this;
        var changeIncident = {
            id: id,
            status: status.id
        };
        this.incidentService.changeStatus(changeIncident)
            .subscribe(function (data) {
            _this.toastr.success(_this.translate.instant('incidents.messages.status'), _this.translate.instant('incidents.title'));
            _this.rerender();
        });
    };
    IncidentListComponent.prototype.changeIncidentSeverity = function (incidentId, priority) {
        var _this = this;
        this.incidentService.changeSeverity({
            id: incidentId,
            priority: priority.id
        }).subscribe(function (data) {
            _this.toastr.success(_this.translate.instant('incidents.messages.priority'), _this.translate.instant('incidents.title'));
            _this.rerender();
        });
    };
    IncidentListComponent.prototype.filterByStatus = function (statusID, incidentFilterKey) {
        this.router.routeReuseStrategy.shouldReuseRoute = function () { return false; };
        this.router.navigate(['incidents', statusID, incidentFilterKey]);
    };
    IncidentListComponent.prototype.deleteIncident = function (id) {
        var _this = this;
        sweetalert2__WEBPACK_IMPORTED_MODULE_11___default.a.fire({
            title: this.translate.instant('common.swal.title'),
            text: this.translate.instant('common.swal.text'),
            type: 'warning',
            showCancelButton: true,
            confirmButtonText: this.translate.instant('common.swal.confirmButtonText'),
            cancelButtonText: this.translate.instant('common.swal.cancelButtonText')
        }).then(function (result) {
            if (result.value) {
                _this.incidentService.delete(id)
                    .subscribe(function (data) {
                    _this.toastr.success(_this.translate.instant('incidents.messages.delete'), _this.translate.instant('incidents.title'));
                    _this.rerender();
                });
            }
        });
    };
    IncidentListComponent.prototype.saveIncidentDetail = function (index, name, value) {
        var _this = this;
        this.incidents[index][name] = value;
        this.incidentService.update(this.incidents[index])
            .subscribe(function (data) {
            _this.toastr.success(_this.translate.instant('incidents.messages.update'), _this.translate.instant('incidents.title'));
            _this.rerender();
        });
    };
    IncidentListComponent.ctorParameters = function () { return [
        { type: _ngx_translate_core__WEBPACK_IMPORTED_MODULE_8__["TranslateService"] },
        { type: ngx_permissions__WEBPACK_IMPORTED_MODULE_7__["NgxRolesService"] },
        { type: _angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"] },
        { type: _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClient"] },
        { type: _angular_router__WEBPACK_IMPORTED_MODULE_3__["ActivatedRoute"] },
        { type: ngx_bootstrap_modal__WEBPACK_IMPORTED_MODULE_4__["BsModalService"] },
        { type: ngx_export_as__WEBPACK_IMPORTED_MODULE_5__["ExportAsService"] },
        { type: ngx_toastr__WEBPACK_IMPORTED_MODULE_6__["ToastrService"] },
        { type: _core_services_incident_service__WEBPACK_IMPORTED_MODULE_12__["IncidentService"] },
        { type: _core_services_authentication_service__WEBPACK_IMPORTED_MODULE_13__["AuthenticationService"] }
    ]; };
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewChild"])(angular_datatables__WEBPACK_IMPORTED_MODULE_9__["DataTableDirective"], { static: true }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", angular_datatables__WEBPACK_IMPORTED_MODULE_9__["DataTableDirective"])
    ], IncidentListComponent.prototype, "dtElement", void 0);
    IncidentListComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-incident-list',
            template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./incident-list.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/modules/pm/incidents/pages/incident-list/incident-list.component.html")).default,
            preserveWhitespaces: true,
            styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./incident-list.component.scss */ "./src/app/modules/pm/incidents/pages/incident-list/incident-list.component.scss")).default]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_ngx_translate_core__WEBPACK_IMPORTED_MODULE_8__["TranslateService"],
            ngx_permissions__WEBPACK_IMPORTED_MODULE_7__["NgxRolesService"],
            _angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"],
            _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClient"],
            _angular_router__WEBPACK_IMPORTED_MODULE_3__["ActivatedRoute"],
            ngx_bootstrap_modal__WEBPACK_IMPORTED_MODULE_4__["BsModalService"],
            ngx_export_as__WEBPACK_IMPORTED_MODULE_5__["ExportAsService"],
            ngx_toastr__WEBPACK_IMPORTED_MODULE_6__["ToastrService"],
            _core_services_incident_service__WEBPACK_IMPORTED_MODULE_12__["IncidentService"],
            _core_services_authentication_service__WEBPACK_IMPORTED_MODULE_13__["AuthenticationService"]])
    ], IncidentListComponent);
    return IncidentListComponent;
}());



/***/ })

}]);
//# sourceMappingURL=modules-pm-incidents-incidents-module.js.map