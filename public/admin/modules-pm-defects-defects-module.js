(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["modules-pm-defects-defects-module"],{

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/modules/pm/defects/components/create-attachment-modal/create-attachment-modal.component.html":
/*!****************************************************************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/modules/pm/defects/components/create-attachment-modal/create-attachment-modal.component.html ***!
  \****************************************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<div class=\"modal-header\">\r\n    <h2 class=\"modal-title font-weight-normal\">\r\n        <i aria-hidden=\"true\" class=\"fa fa-paperclip modal-icon\"></i>&nbsp;{{'attachments.title' | translate}}</h2>\r\n    <button (click)=\"bsCreateAttachmentModalRef.hide()\" aria-label=\"Close\" class=\"close\" data-dismiss=\"modal\" type=\"button\">\r\n        <span aria-hidden=\"true\">&times;</span></button>\r\n</div>\r\n<form (ngSubmit)=\"onSubmit()\" [formGroup]=\"createAttachmentForm\" class=\"form\">\r\n    <div class=\"modal-body\">\r\n        <div class=\"form-body\">\r\n            <div class=\"row\">\r\n                <div class=\"col-md-12\">\r\n                    <div class=\"form-group\">\r\n                        <label for=\"file_name\">{{'attachments.create.fields.file_title' | translate }}\r\n                            <span class=\"text-danger\">&nbsp;*</span></label>\r\n                        <input [ngClass]=\"{ 'is-invalid': isFormSubmitted && attachment.file_name.errors }\" class=\"form-control\" formControlName=\"file_name\" id=\"file_name\" placeholder=\"{{'attachments.create.placeholders.placeholder1' | translate }}\" type=\"text\"/>\r\n                        <div *ngIf=\"isFormSubmitted && attachment.file_name.errors\" class=\"invalid-feedback\">\r\n                            <div *ngIf=\"attachment.file_name.errors.required\">{{'attachments.create.error_messages.message1' | translate }}</div>\r\n                            <div *ngIf=\"attachment.file_name.errors.maxlength\">{{'attachments.create.error_messages.message5' | translate}}</div>\r\n                        </div>\r\n                    </div>\r\n                </div>\r\n                <div class=\"col-md-12\">\r\n                    <div [ngClass]=\"{ 'is-invalid': isFormSubmitted && attachment.file.errors }\" class=\"form-group\">\r\n                        <label for=\"file\">{{'attachments.create.fields.attachment' | translate }}\r\n                            <span class=\"text-danger\">&nbsp;*</span></label>\r\n                        <input formControlName=\"file\" type=\"hidden\">\r\n                        <div #pdfdropzone class=\"dropzone dz-clickable\">\r\n                            <div class=\"dz-default dz-message\">\r\n                                <span><strong>{{'attachments.create.error_messages.message2' | translate }}</strong></span>\r\n                            </div>\r\n                        </div>\r\n                        <div *ngIf=\"isFormSubmitted && attachment.file.errors\" class=\"invalid-feedback\">\r\n                            <div *ngIf=\"attachment.file.errors.required\">{{'attachments.create.error_messages.message3' | translate }}</div>\r\n                        </div>\r\n                    </div>\r\n                </div>\r\n                <input formControlName=\"file_extension\" type=\"hidden\">\r\n            </div>\r\n        </div>\r\n    </div>\r\n    <div class=\"modal-footer\">\r\n        <button (click)=\"onCancel()\" class=\"btn btn-cancel mb-0\" data-dismiss=\"modal\" type=\"button\">{{'common.cancel' | translate }}</button>\r\n        <button class=\"btn btn-submit mb-0\" type=\"submit\">{{'common.create' | translate }}</button>\r\n    </div>\r\n</form>\r\n");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/modules/pm/defects/components/defect-activities/defect-activities.component.html":
/*!****************************************************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/modules/pm/defects/components/defect-activities/defect-activities.component.html ***!
  \****************************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<div class=\"activity-timeline\">\r\n    <div class=\"card overflow-hidden shadow-none p-2\">\r\n        <div [perfectScrollbar]=\"scrollConfig\" class=\"card-body\">\r\n            <ul class=\"timeline pr-2\">\r\n                <li *ngFor=\"let activity of defect.activities; index as i\" class=\"d-flex flex-column\">\r\n                    <div class=\"d-flex flex-column flex-md-row justify-content-start justify-content-md-between\">\r\n                        <a [routerLink]=\"['/users/profile', activity.user.id]\" placement=\"top\" tooltip=\"{{activity.user.firstname}} {{activity.user.lastname}}\">\r\n                            <img *ngIf=\"!activity.user.avatar\" alt=\"Profile Photo\" class=\"user-profile\" src=\"../assets/img/profile_small.jpg\"/>\r\n                            <img *ngIf=\"activity.user.avatar\" alt=\"Profile Photo\" class=\"user-profile\" src=\"{{apiUrl}}/uploads/profile/{{activity.user.avatar}}\"/>\r\n                            <span class=\"ml-1 activity-user\">{{activity.user.firstname}} {{activity.user.lastname}}</span>\r\n                        </a>\r\n                        <a class=\"float-left activity-date\" href=\"javascript:void(0)\"><span class=\"badge badge-secondary mr-1\">{{activity.diff_for_humans}}</span>{{activity.created_at | dateTimeFormatFilter: loginUser.settings.date_time_format }}\r\n                        </a>\r\n                    </div>\r\n                    <p [innerHTML]=\"activity.description\"></p>\r\n                </li>\r\n            </ul>\r\n        </div>\r\n    </div>\r\n</div>\r\n");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/modules/pm/defects/components/defect-attachment/defect-attachment.component.html":
/*!****************************************************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/modules/pm/defects/components/defect-attachment/defect-attachment.component.html ***!
  \****************************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<!-- Card header -->\r\n<div class=\"card-header justify-content-center p-0\">\r\n    <div class=\"card-buttons pt-2 pb-2 pr-1\">\r\n        <button (click)=\"openAttachmentCreateModal()\" class=\"btn btn-create mb-0\" tooltip=\"{{'common.create' | translate}}\" type=\"button\">\r\n            <i class=\"fa fa-upload\"></i><span>{{'common.drag_file' | translate}}</span></button>\r\n    </div>\r\n</div><!-- Card body -->\r\n<div class=\"card-body\">\r\n    <div *ngIf=\"attachments?.length != 0\" class=\"row border-top pt-2\">\r\n        <div *ngFor=\"let file of attachments; index as i\" class=\"col-sm-4\">\r\n            <div class=\"file-browser\">\r\n                <div class=\"actions-dropdown text-right m-1 pr-2\">\r\n                    <div class=\"btn-group\" dropdown>\r\n                        <a aria-controls=\"dropdown-basic-1\" class=\"dropdown-toggle\" dropdownToggle href=\"javascript:void(0);\" id=\"button-basic-1\"><i class=\"fa fa-ellipsis-v\"></i></a>\r\n                        <ul *dropdownMenu aria-labelledby=\"button-basic-1\" class=\"dropdown-menu animated fadeIn\" id=\"dropdown-basic-1\" role=\"menu\">\r\n                            <li role=\"menuitem\">\r\n                                <a class=\"dropdown-item btn btn-download btn-raised\" download=\"{{file.file_name}}\" href=\"{{apiUrl}}/uploads/defect_attachment/{{file.file_hash}}\" target=\"_blank\" tooltip=\"{{'common.download' | translate}}\"><i class=\"fa fa-download\"></i></a>\r\n                            </li>\r\n                            <li *ngIf=\"permission\" role=\"menuitem\">\r\n                                <a (click)=\"attachmentDelete(attachment.id)\" class=\"dropdown-item btn btn-delete btn-raised\" tooltip=\"{{'common.delete' | translate}}\"><i class=\"fa fa-trash-o\"></i></a>\r\n                            </li>\r\n                        </ul>\r\n                    </div>\r\n                </div>\r\n                <div class=\"file-box\">\r\n                    <div class=\"files\">\r\n                        <div *ngIf=\"file.icon\" class=\"icon docx\">\r\n                            <i [ngClass]=\"file.icon\"></i>\r\n                        </div>\r\n                        <div *ngIf=\"file.isImageFile\" class=\"image\">\r\n                            <img alt=\"image\" class=\"img-fluid height-100\" src=\"{{ apiUrl }}/uploads/defect_attachment/{{file.file_hash}}\"/>\r\n                        </div>\r\n                        <div class=\"file-name\">\r\n                            <a download=\"{{file.file_name}}\" href=\"{{apiUrl}}/uploads/defect_attachment/{{file.file_hash}}\" target=\"_blank\" tooltip=\"{{file.file_name}}\">\r\n                                <h4>{{ (file.file_name.length > 20) ? (file.file_name | slice:0:20) + '..' : (file.file_name) }}</h4>\r\n                            </a>\r\n                            <p>{{'file_browser.title7' | translate}}: {{ file.updated_at | dateTimeFormatFilter:loginUser.settings.date_time_format }}</p>\r\n                        </div>\r\n                    </div>\r\n                    <span class=\"corner\"></span>\r\n                </div>\r\n            </div>\r\n        </div>\r\n    </div>\r\n    <div *ngIf=\"attachments?.length == 0\" class=\"row border-top pt-2\">\r\n        <div class=\"col-sm-12 text-center\">{{'common.datatable.sEmptyTable' | translate}}</div>\r\n    </div>\r\n</div>\r\n");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/modules/pm/defects/components/defect-comments/defect-comments.component.html":
/*!************************************************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/modules/pm/defects/components/defect-comments/defect-comments.component.html ***!
  \************************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<!-- Card header -->\r\n<div class=\"card-header p-0\">\r\n    <div class=\"card-buttons pt-2 pb-2 pr-1\">\r\n        <button (click)=\"onSubmit()\" class=\"btn btn-create mb-0\" id=\"post_comment\" tooltip=\"{{'common.create_comment' | translate}}\">\r\n            <i class=\"fa fa-plus\"></i><span>{{'comments.buttons.button1' | translate}}</span></button>\r\n    </div>\r\n</div><!-- Card body -->\r\n<div class=\"card-body\">\r\n    <div class=\"row\">\r\n        <div class=\"col-sm-12\">\r\n            <form [formGroup]=\"defectCommentsForm\" class=\"bs4-forms\">\r\n                <div class=\"form-group\">\r\n                    <textarea [ngClass]=\"{ 'is-invalid': isCommentFormSubmitted && commentControl.comment.errors }\" class=\"form-control\" formControlName=\"comment\" id=\"comment\" name=\"comment\" placeholder=\"{{'comments.create.placeholders.placeholder1' | translate}}\"></textarea>\r\n                    <div *ngIf=\"isCommentFormSubmitted && commentControl.comment.errors\" class=\"invalid-feedback\">\r\n                        <div *ngIf=\"commentControl.comment.errors.required\">{{'comments.create.error_messages.message1' | translate}}</div>\r\n                    </div>\r\n                </div>\r\n                <div class=\"form-group\">\r\n                    <input formControlName=\"files\" type=\"hidden\">\r\n                    <div #commentdropzone class=\"dropzone dz-clickable\">\r\n                        <div class=\"dz-default dz-message\">\r\n                            <span><strong>{{'comments.create.error_messages.message2' | translate}}</strong></span>\r\n                        </div>\r\n                    </div>\r\n                </div>\r\n            </form>\r\n        </div>\r\n    </div>\r\n    <!-- Comments lists -->\r\n    <div class=\"row\">\r\n        <div class=\"col-sm-12\">\r\n            <accordion [closeOthers]=\"oneAtATime\">\r\n                <ng-container *ngFor=\"let comment of comments\">\r\n                    <accordion-group [panelClass]=\"customClass\">\r\n                        <button accordion-heading class=\"btn btn-link btn-block d-lg-flex justify-content-between\" type=\"button\">\r\n                            <div class=\"\">\r\n                                <i class=\"fa fa-angle-down\"></i>\r\n                                <img *ngIf=\"!comment.user.avatar\" alt=\"User profile\" class=\"img-sm rounded-circle\" src=\"../assets/img/profile_large.jpg\"/>\r\n                                <img *ngIf=\"comment.user.avatar\" alt=\"User profile\" class=\"img-sm rounded-circle\" src=\"{{apiUrl}}/uploads/profile/{{comment.user.avatar}}\"/>\r\n                                <span>{{comment.user.firstname}} {{comment.user.lastname}}</span>\r\n                            </div>\r\n                            <div class=\" text-dark pt-1\">{{comment.created_at | dateTimeFormatFilter: loginUser.settings.date_time_format }}</div>\r\n                        </button>\r\n                        <div class=\"comment-text\">\r\n                            <inline-edit-textarea (updateValue)=\"saveComments(comment, 'comment', $event);\" [elementFor]=\"'common.comment' | translate\" [fieldValue]=\"comment.comment\" [isRequired]=\"'true'\" [name]=\"'comment'\"></inline-edit-textarea>\r\n                            <ul *ngIf=\"comment.attachments\" class=\"attachment_box\">\r\n                                <li *ngFor=\"let item of comment.attachments;let i = index; trackBy: i\">\r\n                                    <a download=\"{{item.name}}\" href=\"{{apiUrl}}/uploads/defect_attachment/{{item.file}}\" target=\"_blank\"><span>{{item.name}}</span></a>\r\n                                </li>\r\n                            </ul>\r\n                        </div>\r\n                        <div class=\"comment-reply\">\r\n                            <a (click)=\"commentDelete(comment.id)\" *ngIf=\"permission\" class=\"text-danger\">{{'common.remove' | translate}}</a>\r\n                            <!-- <a (click)=\"showReplayCommentBox(comment.id)\">{{'comments.buttons.button2' | translate}}</a> -->\r\n                        </div>\r\n                    </accordion-group>\r\n                </ng-container>\r\n            </accordion>\r\n        </div>\r\n    </div>\r\n</div>\r\n");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/modules/pm/defects/components/defect-details/defect-details.component.html":
/*!**********************************************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/modules/pm/defects/components/defect-details/defect-details.component.html ***!
  \**********************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<div class=\"card-content\">\r\n    <div class=\"card-body\">\r\n        <div class=\"row mr-2 ml-2\">\r\n            <div class=\"col-md-12 card-separator\">\r\n                <div class=\"d-flex justify-content-between\">\r\n                    <div class=\"task-name d-lg-flex\">\r\n                        <h4 class=\"task-id\">\r\n                            <span>#{{defect.generated_id}}</span>\r\n                        </h4>\r\n                        <p class=\"task-title ml-lg-2\">\r\n                            {{defect.defect_name}}\r\n                        </p>\r\n                    </div>\r\n                    <div class=\"task-action d-flex\">\r\n                        <a *ngIf=\"permission\" [routerLink]=\"['/defects/edit', defect.id]\" class=\"btn btn-create mb-2 mb-lg-0 float-right\" tooltip=\"{{'common.edit' | translate}}\"><i class=\"fa fa-pencil-square-o\"></i></a>\r\n                        <a *ngIf=\"defect.attachment_hash\" class=\"btn btn-create mb-2 mb-lg-0 float-right\" download=\"{{defect.attachment}}\" href=\"{{ apiUrl }}/uploads/defect/{{defect.attachment_hash}}\" placement=\"top\" target=\"_blank\" tooltip=\"{{'defects.tooltips.attachment' | translate }}\"><i class=\"fa fa-files-o\"></i></a>\r\n                    </div>\r\n                </div>\r\n            </div>\r\n            <div class=\"col-md-12 pr-0 pl-0\">\r\n                <form class=\"form-body overflow-hidden mt-3\">\r\n                    <!-- Detail fields -->\r\n                    <div class=\"col-md-12\">\r\n                        <div class=\"row\">\r\n                            <div class=\"col-lg-4 pr-lg-3 pl-lg-3 pr-2 pl-2\">\r\n                                <div class=\"row\">\r\n                                    <div class=\"col\">\r\n                                        <div class=\"row\">\r\n                                            <div class=\"col card-separator mb-3\">\r\n                                                <div class=\"col-lg-12 mb-3\">\r\n                                                    <label>{{'defects.create.fields.project_name' | translate}}</label>\r\n                                                    <div class=\"detail-inline\">{{defect.project.project_name}}</div>\r\n                                                </div>\r\n                                                <div class=\"col-lg-12 mb-3\">\r\n                                                    <label>{{'defects.create.fields.project_version' | translate}}</label>\r\n                                                    <div class=\"detail-inline\">{{defect.project_version}}</div>\r\n                                                </div>\r\n                                                <div class=\"col-lg-12 mb-3 d-flex justify-content-between\">\r\n                                                    <!-- <div class=\"row\"> -->\r\n                                                    <div class=\"\">\r\n                                                        <label>{{'defects.create.fields.status' | translate}}</label>\r\n                                                        <div class=\"status-dropdown\">\r\n                                                            <ng-container *ngIf=\"permission; else elseBlock6\">\r\n                                                                <div class=\"btn-group\" dropdown>\r\n                                                                    <button aria-controls=\"dropdown-basic-2\" class=\"btn dropdown-toggle select-btn-lg\" dropdownToggle id=\"button-basic-2\" type=\"button\">{{getTranslateStatus(defect.status) | translate}}&nbsp;<span class=\"caret\"></span>\r\n                                                                    </button>\r\n                                                                    <ul *dropdownMenu aria-labelledby=\"button-basic-2\" class=\"dropdown-menu animated fadeIn\" id=\"dropdown-basic-2\" role=\"menu\">\r\n                                                                        <li *ngFor=\"let status of ('defects.status' | translate)\" role=\"menuitem\">\r\n                                                                            <a (click)=\"changeDefectStatus([defect.id], status);defect.status = status.id\" [ngClass]=\"{'active': defect.status == status.id}\" class=\"dropdown-item btn btn-sm {{status.class}}\">{{status.label}}</a>\r\n                                                                        </li>\r\n                                                                    </ul>\r\n                                                                </div>\r\n                                                            </ng-container>\r\n                                                            <ng-template #elseBlock6>\r\n                                                                <ng-container *ngFor=\"let status of ('defects.status' | translate)\">\r\n                                                                    <div class=\"budges-status\">\r\n                                                                        <span *ngIf=\"status.id == defect.status\" class=\"{{status.class}}\">{{status.label}}</span>\r\n                                                                    </div>\r\n                                                                </ng-container>\r\n                                                            </ng-template>\r\n                                                        </div>\r\n                                                    </div>\r\n                                                    <div class=\"\">\r\n                                                        <label>{{'defects.create.fields.severity' | translate}}</label>\r\n                                                        <div class=\"status-dropdown\">\r\n                                                            <ng-container *ngIf=\"permission; else elseBlock5\">\r\n                                                                <div class=\"btn-group\" dropdown>\r\n                                                                    <button aria-controls=\"dropdown-basic-1\" class=\"btn dropdown-toggle select-btn-lg\" dropdownToggle id=\"button-basic-1\" type=\"button\">{{getTranslateSeverities(defect.severity) | translate}}&nbsp;<span class=\"caret\"></span>\r\n                                                                    </button>\r\n                                                                    <ul *dropdownMenu aria-labelledby=\"button-basic-1\" class=\"dropdown-menu animated fadeIn\" id=\"dropdown-basic-1\" role=\"menu\">\r\n                                                                        <li *ngFor=\"let severity of ('defects.severities' | translate)\" role=\"menuitem\">\r\n                                                                            <a (click)=\"changeDefectSeverity([defect.id], severity);defect.severity = severity.id\" [ngClass]=\"{'active': defect.severity == severity.id}\" class=\"dropdown-item btn btn-sm {{severity.class}}\">{{severity.label}}</a>\r\n                                                                        </li>\r\n                                                                    </ul>\r\n                                                                </div>\r\n                                                            </ng-container>\r\n                                                            <ng-template #elseBlock5>\r\n                                                                <ng-container *ngFor=\"let severity of ('defects.severities' | translate)\">\r\n                                                                    <div class=\"budges-status\">\r\n                                                                        <span *ngIf=\"severity.id == defect.severity\" class=\"{{severity.class}}\">{{severity.label}}</span>\r\n                                                                    </div>\r\n                                                                </ng-container>\r\n                                                            </ng-template>\r\n                                                        </div>\r\n                                                    </div>\r\n                                                    <!--  </div> -->\r\n                                                </div>\r\n                                                <div class=\"col-lg-12 mb-3 d-flex justify-content-between\">\r\n                                                    <div class=\"text-center\">\r\n                                                        <label>{{'defects.create.fields.created_by' | translate}}</label>\r\n                                                        <div class=\"people-lists\">\r\n                                                            <a [routerLink]=\"['/users/profile', defect.created_user.id]\" class=\"btn btn-profile-info rounded-circle text-dark\" placement=\"top\" tooltip=\"{{defect.created_user.firstname}} {{defect.created_user.lastname}}\">\r\n                                                                <img *ngIf=\"defect.created_user.avatar\" alt=\"Profile\" class=\"img-sm rounded-circle\" src=\"{{apiUrl}}/uploads/profile/{{defect.created_user.avatar}}\"/>\r\n                                                                <img *ngIf=\"!defect.created_user.avatar\" alt=\"Profile\" class=\"img-sm rounded-circle\" src=\"../assets/img/profile_small.jpg\"/>\r\n                                                            </a><br>\r\n                                                            <span class=\"mt-2\">{{defect.created_user.firstname}} {{defect.created_user.lastname}}</span>\r\n                                                        </div>\r\n                                                    </div>\r\n                                                    <div class=\"text-center\">\r\n                                                        <label>{{'defects.create.fields.assigned_To' | translate}}</label>\r\n                                                        <div class=\"people-lists\">\r\n                                                            <ng-container *ngIf=\"defect.assign_member == 'Unassign' || defect.assign_member == '' || defect.assign_member == null else elseBlock3;\">\r\n                                                                <a class=\"btn btn-profile-danger rounded-circle text-dark\" href=\"javascript:void(0);\" placement=\"top\" tooltip=\"{{'common.unassigned' | translate}}\">\r\n                                                                    <img alt=\"Profile\" class=\"img-sm rounded-circle\" src=\"../assets/img/unassign.jpg\"/>\r\n                                                                </a>\r\n                                                            </ng-container>\r\n                                                            <ng-template #elseBlock3>\r\n                                                                <a [routerLink]=\"['/users/profile', defect.assign_user.id]\" class=\"btn btn-profile-info rounded-circle text-dark\" placement=\"top\" tooltip=\"{{defect.assign_user.firstname}} {{defect.assign_user.lastname}}\">\r\n                                                                    <img *ngIf=\"defect.assign_user.avatar\" alt=\"Profile\" class=\"img-sm rounded-circle\" src=\"{{apiUrl}}/uploads/profile/{{defect.assign_user.avatar}}\"/>\r\n                                                                    <img *ngIf=\"!defect.assign_user.avatar\" alt=\"Profile\" class=\"img-sm rounded-circle\" src=\"../assets/img/profile_small.jpg\"/>\r\n                                                                </a><br>\r\n                                                                <span class=\"mt-2\">{{defect.assign_user.firstname}} {{defect.assign_user.lastname}}</span>\r\n                                                            </ng-template>\r\n                                                        </div>\r\n                                                    </div>\r\n                                                </div>\r\n                                            </div>\r\n                                            <div class=\"col-md-12 card-separator\">\r\n                                                <div class=\"col-lg-12 mb-3\">\r\n                                                    <label>{{'defects.create.fields.start_date' | translate}}</label>\r\n                                                    <div class=\"detail-inline\">{{defect.start_date | dateTimeFormatFilter : loginUser.settings.date_format}}</div>\r\n                                                </div>\r\n                                                <div class=\"col-lg-12 mb-3\">\r\n                                                    <label>{{'defects.create.fields.end_date' | translate}}</label>\r\n                                                    <div class=\"detail-inline\">{{defect.end_date | dateTimeFormatFilter : loginUser.settings.date_format}}</div>\r\n                                                </div>\r\n                                                <div class=\"col-lg-12 mb-3\">\r\n                                                    <label>{{'defects.create.fields.estimate_hours' | translate}}</label>\r\n                                                    <div class=\"detail-inline\">\r\n                                                        <ng-container *ngIf=\"permission; else elseBlock7\">\r\n                                                            <inline-edit-hours (updateValue)=\"saveDefectDetail('estimated_hours', $event);\" [elementFor]=\"'defects.inline_edit.estimate_hours' | translate\" [fieldValue]=\"defect.estimated_hours\" [isRequired]=\"'false'\" [name]=\"'estimated_hours'\"></inline-edit-hours>\r\n                                                        </ng-container>\r\n                                                        <ng-template #elseBlock7>{{ defect.estimated_hours}}</ng-template>\r\n                                                    </div>\r\n                                                </div>\r\n                                                <div class=\"col-lg-12 mb-3\">\r\n                                                    <label>{{'defects.create.fields.actual_hours' | translate}}</label>\r\n                                                    <div class=\"detail-inline\">{{defect.actual_hours}}</div>\r\n                                                </div>\r\n                                                <div class=\"col-lg-12 mb-3\">\r\n                                                    <label>{{'defects.create.fields.defect_type' | translate}}</label>\r\n                                                    <div class=\"detail-inline\">\r\n                                                        <ng-container *ngIf=\"permission; else elseBlock4\">\r\n                                                            <inline-edit-select (updateValue)=\"saveDefectDetail('defect_type', $event);\" [elementFor]=\"'defects.inline_edit.defect_type' | translate\" [isRequired]=\"'true'\" [name]=\"'defect_type'\" [options]=\"('defects.defect_types' | translate)\" [selectedValue]=\"defect.defect_type\" [txtField]=\"'defect_type'\"></inline-edit-select>\r\n                                                        </ng-container>\r\n                                                        <ng-template #elseBlock4>\r\n                                                            <ng-container *ngFor=\"let type of ('defects.defect_types' | translate)\">\r\n                                                                <span *ngIf=\"type.id == defect.defect_type\">{{type.label}}</span>\r\n                                                            </ng-container>\r\n                                                        </ng-template>\r\n                                                    </div>\r\n                                                </div>\r\n                                                <div class=\"col-lg-12 mb-3\">\r\n                                                    <label>{{'common.created' | translate}}</label>\r\n                                                    <div class=\"detail-inline\">{{defect.created_at | dateTimeFormatFilter : loginUser.settings.date_time_format}}</div>\r\n                                                </div>\r\n                                                <div class=\"col-lg-12 mb-3\">\r\n                                                    <label>{{'common.updated' | translate}}</label>\r\n                                                    <div class=\"detail-inline\">{{defect.updated_at | dateTimeFormatFilter : loginUser.settings.date_time_format}}</div>\r\n                                                </div>\r\n                                            </div>\r\n                                        </div>\r\n                                    </div>\r\n                                </div>\r\n                            </div>\r\n                            <div class=\"col-lg-8\">\r\n                                <div class=\"row\">\r\n                                    <!-- Description field -->\r\n                                    <div class=\"col-lg-12 col-md-12 col-xs-12 col-sm-12 mb-3 description-detail card-separator\">\r\n                                        <h4 class=\"sub-title\"><span>{{'defects.details.title2' | translate}}</span></h4>\r\n                                        <div class=\"detail-inline\">\r\n                                            <ng-container *ngIf=\"permission; else elseBlock1\">\r\n                                                <inline-edit-text-editor (updateValue)=\"saveDefectDetail('description', $event);\" [elementFor]=\"'defects.inline_edit.description' | translate\" [fieldValue]=\"defect.description\" [name]=\"'description'\"></inline-edit-text-editor>\r\n                                            </ng-container>\r\n                                            <ng-template #elseBlock1>\r\n                                                <p [innerHtml]=\"defect.description\"></p>\r\n                                            </ng-template>\r\n                                        </div>\r\n                                    </div>\r\n                                    <!-- Custom fields -->\r\n                                    <div *ngIf=\"defect.custom_fields.length > 0\" class=\"col-lg-12 col-md-12 col-xs-12 col-sm-12 mb-3 card-separator\">\r\n                                        <h4 class=\"sub-title\"><span>{{'defects.details.title1' | translate}}</span></h4>\r\n                                        <div class=\"row\">\r\n                                            <ng-container *ngFor=\"let customField of defect.custom_fields\">\r\n                                                <div *ngIf=\"customField.field_type != 'textarea'\" class=\"col-lg-4 col-md-6 mt-2 mb-3\">\r\n                                                    <ng-container *ngIf=\"customField.field_type == 'text' || customField.field_type == 'numeric'\">\r\n                                                        <label>{{customField.field_label}}</label>\r\n                                                        <div class=\"detail-inline\">{{defect[customField.field_column]}}</div>\r\n                                                    </ng-container>\r\n                                                    <ng-container *ngIf=\"customField.field_type == 'date'\">\r\n                                                        <label>{{customField.field_label}}</label>\r\n                                                        <div class=\"detail-inline\">{{defect[customField.field_column] | dateTimeFormatFilter: loginUser.settings.date_format}}</div>\r\n                                                    </ng-container>\r\n                                                    <ng-container *ngIf=\"customField.field_type == 'dropdown'\">\r\n                                                        <label>{{customField.field_label}}</label>\r\n                                                        <div class=\"detail-inline\">\r\n                                                            <ng-container *ngFor=\"let fieldValue of getParseArray(customField.default_value)\">\r\n                                                                <ng-container *ngIf=\"fieldValue.value == defect[customField.field_column]\">\r\n                                                                    {{fieldValue.label}}\r\n                                                                </ng-container>\r\n                                                            </ng-container>\r\n                                                        </div>\r\n                                                    </ng-container>\r\n                                                    <ng-container *ngIf=\"customField.field_type == 'checkbox'\">\r\n                                                        <label>{{customField.field_label}}</label>\r\n                                                        <div class=\"detail-inline\">\r\n                                                            <div *ngIf=\"defect[customField.field_column] == 1; else checkboxElseBlock\">{{'common.true' | translate}}</div>\r\n                                                            <ng-template #checkboxElseBlock>{{'common.false' | translate}}</ng-template>\r\n                                                        </div>\r\n                                                    </ng-container>\r\n                                                </div>\r\n                                            </ng-container>\r\n                                            <ng-container *ngFor=\"let customField of defect.custom_fields\">\r\n                                                <div *ngIf=\"customField.field_type == 'textarea'\" class=\"col-lg-4 col-md-6 mt-2 mb-3\">\r\n                                                    <ng-container>\r\n                                                        <label>{{customField.field_label}}</label>\r\n                                                        <div class=\"detail-inline\">{{defect[customField.field_column]}}</div>\r\n                                                    </ng-container>\r\n                                                </div>\r\n                                            </ng-container>\r\n                                        </div>\r\n                                    </div>\r\n                                    <!-- Todos list -->\r\n                                    <div class=\"col-lg-12 col-md-12 col-xs-12 col-sm-12 mb-3 card-separator\">\r\n                                        <app-todo-detail [module_id]=\"3\" [module_related_id]=\"defect.id\"></app-todo-detail>\r\n                                    </div>\r\n                                    <!-- Defect Timesheet -->\r\n                                    <div class=\"col-lg-12 col-md-12 col-xs-12 col-sm-12 mb-3 card-separator\">\r\n                                        <app-timesheet-list [apiUrl]=\"apiUrl\" [loginUser]=\"loginUser\" [module_id]=\"'3'\" [module_related_id]=\"defect.id\" [project_id]=\"defect.project_id\"></app-timesheet-list>\r\n                                    </div>\r\n                                    <!-- Tab Design -->\r\n                                    <tabset class=\"nav nav-tabs d-flex justify-content-left details-tabs col-md-12 p-0\">\r\n                                        <!-- Comments -->\r\n                                        <tab (selectTab)=\"setActiveDefectTab($event)\" class=\"card-separator mb-3\" customClass=\"text-left\" id=\"1\">\r\n                                            <ng-template tabHeading>\r\n                                                <div class=\"d-flex\">\r\n                                                    <i class=\"fa fa-comments-o\"></i><span class=\"mt-1 ml-1\">{{'comments.title' | translate}}</span>\r\n                                                </div>\r\n                                            </ng-template>\r\n                                            <!-- Task Comment -->\r\n                                            <div class=\"col-lg-12 pr-0 pl-0\">\r\n                                                <app-defect-comments *ngIf=\"getActiveDefectTab('1')\" [apiUrl]=\"apiUrl\" [loginUser]=\"loginUser\" [permission]=\"permission\"></app-defect-comments>\r\n                                            </div>\r\n                                        </tab>\r\n                                        <!-- Attachments -->\r\n                                        <tab (selectTab)=\"setActiveDefectTab($event)\" class=\"card-separator mb-3\" customClass=\"text-left\" id=\"2\">\r\n                                            <ng-template tabHeading>\r\n                                                <div class=\"d-flex\">\r\n                                                    <i class=\"fa fa-paperclip\"></i><span class=\"mt-1 ml-1\">{{'attachments.title' | translate}}</span>\r\n                                                </div>\r\n                                            </ng-template>\r\n                                            <!-- Task Attachment -->\r\n                                            <div class=\"col-lg-12 col-md-12 col-xs-12 col-sm-12 pr-0 pl-0\">\r\n                                                <app-defect-attachment [apiUrl]=\"apiUrl\" [defect]=\"defect\" [loginUser]=\"loginUser\" [permission]=\"permission\"></app-defect-attachment>\r\n                                            </div>\r\n                                        </tab>\r\n                                        <!-- Notes -->\r\n                                        <tab (selectTab)=\"setActiveDefectTab($event)\" class=\"card-separator mb-3 tab-width\" customClass=\"text-left\" id=\"3\">\r\n                                            <ng-template tabHeading>\r\n                                                <div class=\"d-flex\">\r\n                                                    <i class=\"fa fa-sticky-note-o\"></i><span class=\"mt-1 ml-1\">{{'notes.title' | translate}}</span>\r\n                                                </div>\r\n                                            </ng-template>\r\n                                            <!-- Notes -->\r\n                                            <div class=\"col-lg-12 col-md-12 col-xs-12 col-sm-12\">\r\n                                                <h4 class=\"sub-title mt-2\">\r\n                                                    <!-- <span>{{'notes.title' | translate}}</span> -->\r\n                                                </h4>\r\n                                                <div class=\"detail-inline\">\r\n                                                    <ng-container *ngIf=\"permission; else elseBlock2\">\r\n                                                        <inline-edit-text-editor (updateValue)=\"saveDefectDetail('notes', $event);\" [elementFor]=\"'defects.inline_edit.notes' | translate\" [fieldValue]=\"defect.notes\" [name]=\"'notes'\"></inline-edit-text-editor>\r\n                                                    </ng-container>\r\n                                                    <ng-template #elseBlock2></ng-template>\r\n                                                </div>\r\n                                            </div>\r\n                                        </tab>\r\n                                        <!-- Activity -->\r\n                                        <tab (selectTab)=\"setActiveDefectTab($event)\" class=\"card-separator mb-3\" customClass=\"text-left\" id=\"4\">\r\n                                            <ng-template tabHeading>\r\n                                                <div class=\"d-flex\">\r\n                                                    <i class=\"fa fa-list\"></i><span class=\"mt-1 ml-1\">{{'activities.title' | translate}}</span>\r\n                                                </div>\r\n                                            </ng-template>\r\n                                            <app-defect-activities [apiUrl]=\"apiUrl\" [defect]=\"defect\" [loginUser]=\"loginUser\"></app-defect-activities>\r\n                                        </tab>\r\n                                        <!-- History -->\r\n                                        <tab (selectTab)=\"setActiveDefectTab($event)\" class=\"card-separator mb-3 tab-width\" customClass=\"text-left\" id=\"5\">\r\n                                            <ng-template tabHeading>\r\n                                                <div class=\"d-flex\">\r\n                                                    <i class=\"fa fa-history\"></i><span class=\"mt-1 ml-1\">{{'histories.title' | translate}}</span>\r\n                                                </div>\r\n                                            </ng-template>\r\n                                            <app-defect-history [apiUrl]=\"apiUrl\" [defect]=\"defect\" [loginUser]=\"loginUser\"></app-defect-history>\r\n                                        </tab>\r\n                                    </tabset>\r\n                                    <!-- Tab Design End -->\r\n                                </div>\r\n                            </div>\r\n                        </div>\r\n                    </div>\r\n                </form>\r\n            </div>\r\n        </div>\r\n    </div>\r\n</div>\r\n");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/modules/pm/defects/components/defect-history/defect-history.component.html":
/*!**********************************************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/modules/pm/defects/components/defect-history/defect-history.component.html ***!
  \**********************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<!-- Card body -->\r\n<div class=\"card-body\">\r\n    <div class=\"row pl-2 pr-2\">\r\n        <div class=\"col-lg-12 mb-1 tab-table\">\r\n            <div class=\"table-responsive-xs table-responsive-sm table-responsive-md table-responsive-lg table-responsive-xl overflow-x-auto\">\r\n                <table [dtOptions]=\"dtOptions\" class=\"table table-bordered table-hover b4-datatable\" datatable id=\"history_table\" width=\"100%\">\r\n                    <thead>\r\n                    <tr>\r\n                        <th>{{'histories.columns.date' | translate }}</th>\r\n                        <th>{{'histories.columns.activity' | translate }}</th>\r\n                        <th>{{'histories.columns.creator' | translate }}</th>\r\n                        <th>{{'histories.columns.updated_by' | translate }}</th>\r\n                        <th>{{'histories.columns.commentor' | translate }}</th>\r\n                        <th>{{'histories.columns.solved_by' | translate }}</th>\r\n                        <th>{{'histories.columns.closed_by' | translate }}</th>\r\n                    </tr>\r\n                    </thead>\r\n                    <tbody>\r\n                    <tr *ngFor=\"let history of defect.history\">\r\n                        <td>{{ history.created_at | dateTimeFormatFilter: loginUser.settings.date_format }}</td>\r\n                        <td>\r\n                            <p [innerHtml]=\"history.description\"></p>\r\n                        </td>\r\n                        <td class=\"people-lists\">\r\n                            <ng-container *ngIf=\"userLists[history.created_by_id]; else elseBlock\">\r\n                                <a [routerLink]=\"['/users/profile', history.created_by_id]\" class=\"btn rounded-circle btn-profile-info text-dark\" placement=\"top\" tooltip=\"{{userLists[history.created_by_id].name}}\">\r\n                                    <img *ngIf=\"userLists[history.created_by_id].avatar\" alt=\"Profile\" class=\"img-sm rounded-circle\" src=\"{{apiUrl}}/uploads/profile/{{userLists[history.created_by_id].avatar}}\"/>\r\n                                    <img *ngIf=\"!userLists[history.created_by_id].avatar\" alt=\"Profile\" class=\"img-sm rounded-circle\" src=\"../assets/img/profile_small.jpg\"/>\r\n                                </a>\r\n                            </ng-container>\r\n                            <ng-template #elseBlock>-</ng-template>\r\n                        </td>\r\n                        <td class=\"people-lists\">\r\n                            <ng-container *ngIf=\"userLists[history.updated_by_id]; else elseBlock1\">\r\n                                <a [routerLink]=\"['/users/profile', history.updated_by_id]\" class=\"btn rounded-circle btn-profile-danger text-dark\" placement=\"top\" tooltip=\"{{userLists[history.updated_by_id].name}}\">\r\n                                    <img *ngIf=\"userLists[history.updated_by_id].avatar\" alt=\"Profile\" class=\"img-sm rounded-circle\" src=\"{{apiUrl}}/uploads/profile/{{userLists[history.updated_by_id].avatar}}\"/>\r\n                                    <img *ngIf=\"!userLists[history.updated_by_id].avatar\" alt=\"Profile\" class=\"img-sm rounded-circle\" src=\"../assets/img/profile_small.jpg\"/>\r\n                                </a>\r\n                            </ng-container>\r\n                            <ng-template #elseBlock1>-</ng-template>\r\n                        </td>\r\n                        <td class=\"people-lists\">\r\n                            <ng-container *ngIf=\"userLists[history.commented_by_id]; else elseBlock4\">\r\n                                <a [routerLink]=\"['/users/profile', history.commented_by_id]\" class=\"btn rounded-circle btn-profile-info text-dark\" placement=\"top\" tooltip=\"{{userLists[history.commented_by_id].name}}\">\r\n                                    <img *ngIf=\"userLists[history.commented_by_id].avatar\" alt=\"Profile\" class=\"img-sm rounded-circle\" src=\"{{apiUrl}}/uploads/profile/{{userLists[history.commented_by_id].avatar}}\"/>\r\n                                    <img *ngIf=\"!userLists[history.commented_by_id].avatar\" alt=\"Profile\" class=\"img-sm rounded-circle\" src=\"../assets/img/profile_small.jpg\"/>\r\n                                </a>\r\n                            </ng-container>\r\n                            <ng-template #elseBlock4>-</ng-template>\r\n                        </td>\r\n                        <td class=\"people-lists\">\r\n                            <ng-container *ngIf=\"userLists[history.solved_by_id]; else elseBlock2\">\r\n                                <a [routerLink]=\"['/users/profile', history.solved_by_id]\" class=\"btn rounded-circle btn-profile-info text-dark\" placement=\"top\" tooltip=\"{{userLists[history.solved_by_id].name}}\">\r\n                                    <img *ngIf=\"userLists[history.solved_by_id].avatar\" alt=\"Profile\" class=\"img-sm rounded-circle\" src=\"{{apiUrl}}/uploads/profile/{{userLists[history.solved_by_id].avatar}}\"/>\r\n                                    <img *ngIf=\"!userLists[history.solved_by_id].avatar\" alt=\"Profile\" class=\"img-sm rounded-circle\" src=\"../assets/img/profile_small.jpg\"/>\r\n                                </a>\r\n                            </ng-container>\r\n                            <ng-template #elseBlock2>-</ng-template>\r\n                        </td>\r\n                        <td class=\"people-lists\">\r\n                            <ng-container *ngIf=\"userLists[history.closed_by_id]; else elseBlock3\">\r\n                                <a [routerLink]=\"['/users/profile', history.closed_by_id]\" class=\"btn rounded-circle btn-profile-danger text-dark\" placement=\"top\" tooltip=\"{{userLists[history.closed_by_id].name}}\">\r\n                                    <img *ngIf=\"userLists[history.closed_by_id].avatar\" alt=\"Profile\" class=\"img-sm rounded-circle\" src=\"{{apiUrl}}/uploads/profile/{{userLists[history.closed_by_id].avatar}}\"/>\r\n                                    <img *ngIf=\"!userLists[history.closed_by_id].avatar\" alt=\"Profile\" class=\"img-sm rounded-circle\" src=\"../assets/img/profile_small.jpg\"/>\r\n                                </a>\r\n                            </ng-container>\r\n                            <ng-template #elseBlock3>-</ng-template>\r\n                        </td>\r\n                    </tr>\r\n                    </tbody>\r\n                </table>\r\n            </div>\r\n        </div>\r\n    </div>\r\n</div>\r\n");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/modules/pm/defects/pages/defect-create/defect-create.component.html":
/*!***************************************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/modules/pm/defects/pages/defect-create/defect-create.component.html ***!
  \***************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<section *ngIf=\"isPageLoaded\" id=\"basic-form-layouts\">\r\n    <form (ngSubmit)=\"onSubmit()\" [formGroup]=\"createDefectForm\">\r\n        <div class=\"row\">\r\n            <div class=\"col-md-6\">\r\n                <div class=\"card\">\r\n                    <div class=\"card-header\">\r\n                        <h4 class=\"card-title\">{{'defects.title1' | translate }}</h4>\r\n                    </div>\r\n                    <div class=\"card-body\">\r\n                        <div class=\"px-3\">\r\n                            <div class=\"form-body\">\r\n                                <h4 class=\"form-section\">\r\n                                    <i class=\"fa fa-bug\"></i> {{'defects.headings.head1' | translate }}</h4>\r\n                                <div class=\"row\">\r\n                                    <div class=\"col-md-4\">\r\n                                        <div class=\"form-group\">\r\n                                            <label for=\"generated_id\">{{'defects.create.fields.defect_ID' | translate }}&nbsp;<span class=\"text-danger\">*</span></label>\r\n                                            <input [ngClass]=\"{ 'is-invalid': isFormSubmitted && defectControl.generated_id.errors }\" class=\"form-control\" formControlName=\"generated_id\" id=\"generated_id\" readonly type=\"text\"/>\r\n                                            <div *ngIf=\"isFormSubmitted && defectControl.generated_id.errors\" class=\"invalid-feedback\">\r\n                                                <div *ngIf=\"defectControl.generated_id.errors.required\">{{'defects.create.error_messages.message3' | translate }}</div>\r\n                                            </div>\r\n                                        </div>\r\n                                    </div>\r\n                                    <div class=\"col-md-8\">\r\n                                        <div class=\"form-group\">\r\n                                            <label for=\"defect_name\">{{'defects.create.fields.defect_name' | translate }}&nbsp;<span class=\"text-danger\">*</span></label>\r\n                                            <input [ngClass]=\"{ 'is-invalid': isFormSubmitted && defectControl.defect_name.errors }\" class=\"form-control\" formControlName=\"defect_name\" id=\"defect_name\" placeholder=\"{{'defects.create.placeholders.placeholder1' | translate }}\" type=\"text\"/>\r\n                                            <div *ngIf=\"isFormSubmitted && defectControl.defect_name.errors\" class=\"invalid-feedback\">\r\n                                                <div *ngIf=\"defectControl.defect_name.errors.required\">{{'defects.create.error_messages.message1' | translate }}</div>\r\n                                                <div *ngIf=\"defectControl.defect_name.errors.maxlength\">{{'defects.create.error_messages.message2' | translate }}</div>\r\n                                            </div>\r\n                                        </div>\r\n                                    </div>\r\n                                    <div class=\"col-md-6\">\r\n                                        <div [ngClass]=\"{ 'is-invalid': isFormSubmitted && defectControl.start_date.errors }\" class=\"form-group\">\r\n                                            <label for=\"start_date\">{{'defects.create.fields.start_date' | translate }}</label>\r\n                                            <div class=\"position-relative has-icon-left\">\r\n                                                <input #dp1=\"bsDatepicker\" (bsValueChange)=\"startDateChange($event)\" [bsConfig]=\"datepickerConfig\" [minDate]=\"projectStartDate\" bsDatepicker class=\"form-control\" formControlName=\"start_date\" id=\"start_date\" placeholder=\"{{'defects.create.placeholders.placeholder8' | translate }}\" type=\"text\"/>\r\n                                                <div class=\"form-control-position\"><i class=\"ft-calendar\"></i></div>\r\n                                                <div *ngIf=\"isFormSubmitted && defectControl.start_date.errors\" class=\"invalid-feedback\">\r\n                                                    <div *ngIf=\"defectControl.start_date.errors\">{{'defects.create.error_messages.message11' | translate }}</div>\r\n                                                </div>\r\n                                            </div>\r\n                                        </div>\r\n                                    </div>\r\n                                    <div class=\"col-md-6\">\r\n                                        <div [ngClass]=\"{ 'is-invalid': isFormSubmitted && defectControl.end_date.errors }\" class=\"form-group\">\r\n                                            <label for=\"end-date\">{{'defects.create.fields.end_date' | translate }}</label>\r\n                                            <div class=\"position-relative has-icon-left\">\r\n                                                <input #dp2=\"bsDatepicker\" [bsConfig]=\"datepickerConfig\" [minDate]=\"createDefectForm.get('start_date').value\" bsDatepicker class=\"form-control\" formControlName=\"end_date\" id=\"end_date\" placeholder=\"{{'defects.create.placeholders.placeholder9' | translate }}\" type=\"text\"/>\r\n                                                <div class=\"form-control-position\"><i class=\"ft-calendar\"></i></div>\r\n                                                <div *ngIf=\"isFormSubmitted && defectControl.end_date.errors\" class=\"invalid-feedback\">\r\n                                                    <div *ngIf=\"defectControl.end_date.errors\">{{'defects.create.error_messages.message12' | translate }}</div>\r\n                                                </div>\r\n                                            </div>\r\n                                        </div>\r\n                                    </div>\r\n                                    <div class=\"col-md-6\">\r\n                                        <div [ngClass]=\"{ 'is-invalid': isFormSubmitted && defectControl.defect_type.errors }\" class=\"form-group\">\r\n                                            <label for=\"defect_type\">{{'defects.create.fields.defect_type' | translate }}&nbsp;<span class=\"text-danger\">*</span></label>\r\n                                            <ng-select [items]=\"('defects.defect_types' | translate)\" [searchable]=\"true\" [selectOnTab]=\"true\" bindLabel=\"label\" bindValue=\"id\" formControlName=\"defect_type\" labelForId=\"type\" placeholder=\"{{'defects.create.placeholders.placeholder2' | translate }}\"></ng-select>\r\n                                            <div *ngIf=\"isFormSubmitted && defectControl.defect_type.errors\" class=\"invalid-feedback\">\r\n                                                <div *ngIf=\"defectControl.defect_type.errors.required\">{{'defects.create.error_messages.message4' | translate }}</div>\r\n                                            </div>\r\n                                        </div>\r\n                                    </div>\r\n                                    <div class=\"col-md-6\">\r\n                                        <div [ngClass]=\"{ 'is-invalid': isFormSubmitted && defectControl.severity.errors }\" class=\"form-group\">\r\n                                            <label for=\"severity\">{{'defects.create.fields.severity' | translate }}&nbsp;<span class=\"text-danger\">*</span></label>\r\n                                            <ng-select [items]=\"('defects.severities' | translate)\" [searchable]=\"true\" [selectOnTab]=\"true\" bindLabel=\"label\" bindValue=\"id\" formControlName=\"severity\" labelForId=\"severity\" placeholder=\"{{'defects.create.placeholders.placeholder4' | translate }}\"></ng-select>\r\n                                            <div *ngIf=\"isFormSubmitted && defectControl.severity.errors\" class=\"invalid-feedback\">\r\n                                                <div *ngIf=\"defectControl.severity.errors.required\">{{'defects.create.error_messages.message6' | translate }}</div>\r\n                                            </div>\r\n                                        </div>\r\n                                    </div>\r\n                                    <div class=\"col-md-6\">\r\n                                        <div class=\"form-group\">\r\n                                            <label for=\"assigned_group_id\">{{'defects.create.fields.assigned_group' | translate }}</label>\r\n                                            <ng-select (change)=\"assignGroupChange($event)\" [items]=\"teams\" [searchable]=\"true\" [selectOnTab]=\"true\" bindLabel=\"team_name\" bindValue=\"id\" formControlName=\"assigned_group_id\" labelForId=\"assigned_group_id\" placeholder=\"{{'defects.create.placeholders.placeholder5' | translate }}\"></ng-select>\r\n                                        </div>\r\n                                    </div>\r\n                                    <div class=\"col-md-6\">\r\n                                        <div class=\"form-group\">\r\n                                            <label for=\"assign_member\">{{'defects.create.fields.assigned_To' | translate }}</label>\r\n                                            <ng-select [items]=\"teamsMembers\" [multiple]=\"false\" [searchable]=\"true\" [selectOnTab]=\"true\" bindLabel=\"firstname\" bindValue=\"id\" formControlName=\"assign_member\" labelForId=\"assign_member\" placeholder=\"{{'common.unassigned' | translate}}\">\r\n                                                <ng-template let-item=\"item\" ng-option-tmp>\r\n                                                    {{item.firstname}} {{item.lastname}}\r\n                                                </ng-template>\r\n                                            </ng-select>\r\n                                        </div>\r\n                                    </div>\r\n                                    <div class=\"col-md-6\">\r\n                                        <div class=\"form-group\">\r\n                                            <label for=\"estimated_hours\">{{'defects.create.fields.estimate_hours' | translate }}</label>\r\n                                            <input [ngClass]=\"{ 'is-invalid': isFormSubmitted && defectControl.estimated_hours.errors }\" class=\"form-control\" formControlName=\"estimated_hours\" placeholder=\"00:00\" type='text'>\r\n                                            <div *ngIf=\"isFormSubmitted && defectControl.estimated_hours.errors\" class=\"invalid-feedback\">\r\n                                                <div *ngIf=\"defectControl.estimated_hours.errors.pattern\">{{'defects.create.error_messages.message13' | translate }}</div>\r\n                                            </div>\r\n                                        </div>\r\n                                    </div>\r\n                                    <div class=\"col-md-6\">\r\n                                        <div [ngClass]=\"{ 'is-invalid': isFormSubmitted && defectControl.status.errors }\" class=\"form-group\">\r\n                                            <label for=\"status\">{{'defects.create.fields.status' | translate }}&nbsp;<span class=\"text-danger\">*</span>\r\n                                            </label>\r\n                                            <ng-select [items]=\"('defects.status' | translate)\" [searchable]=\"true\" [selectOnTab]=\"true\" bindLabel=\"label\" bindValue=\"id\" formControlName=\"status\" labelForId=\"status\" placeholder=\"{{'defects.create.placeholders.placeholder3' | translate }}\"></ng-select>\r\n                                            <div *ngIf=\"isFormSubmitted && defectControl.status.errors\" class=\"invalid-feedback\">\r\n                                                <div *ngIf=\"defectControl.status.errors.required\">{{'defects.create.error_messages.message5' | translate }}</div>\r\n                                            </div>\r\n                                        </div>\r\n                                    </div>\r\n                                </div>\r\n                            </div>\r\n                        </div>\r\n                    </div>\r\n                </div>\r\n            </div>\r\n            <div class=\"col-md-6\">\r\n                <div class=\"card\">\r\n                    <div class=\"card-header\">&nbsp;</div>\r\n                    <div class=\"card-body\">\r\n                        <div class=\"px-3\">\r\n                            <div class=\"form-body\">\r\n                                <h4 class=\"form-section\">\r\n                                    <i class=\"ft-zap\"></i> {{'defects.headings.head2' | translate }}</h4>\r\n                                <div class=\"row\">\r\n                                    <div class=\"col-md-6\">\r\n                                        <div [ngClass]=\"{ 'is-invalid': isFormSubmitted && defectControl.project_id.errors }\" class=\"form-group\">\r\n                                            <label for=\"project_id\">{{'defects.create.fields.project_name' | translate }}&nbsp;<span class=\"text-danger\">*</span></label>\r\n                                            <ng-select (change)=\"projectChange($event)\" [items]=\"projects\" [searchable]=\"true\" [selectOnTab]=\"true\" bindLabel=\"project_name\" bindValue=\"id\" formControlName=\"project_id\" labelForId=\"project_id\" placeholder=\"{{'defects.create.placeholders.placeholder6' | translate }}\">\r\n                                                <ng-template let-item=\"item\" ng-option-tmp>\r\n                                                    {{item.project_name}}\r\n                                                </ng-template>\r\n                                            </ng-select>\r\n                                            <div *ngIf=\"isFormSubmitted && defectControl.project_id.errors\" class=\"invalid-feedback\">\r\n                                                <div *ngIf=\"defectControl.project_id.errors.required\">{{'defects.create.error_messages.message8' | translate }}</div>\r\n                                            </div>\r\n                                        </div>\r\n                                    </div>\r\n                                    <div class=\"col-md-6\">\r\n                                        <div class=\"form-group\">\r\n                                            <label for=\"project_version\">{{'defects.create.fields.project_version' | translate }}</label>\r\n                                            <ng-select [items]=\"projectVersion\" [searchable]=\"true\" [selectOnTab]=\"true\" formControlName=\"project_version\" placeholder=\"{{'defects.create.placeholders.placeholder7' | translate }}\">\r\n                                                <ng-template let-item=\"item\" ng-option-tmp>{{item}}</ng-template>\r\n                                            </ng-select>\r\n                                        </div>\r\n                                    </div>\r\n                                </div>\r\n                                <h4 class=\"form-section\">\r\n                                    <i class=\"ft-upload\"></i> {{'defects.headings.head3' | translate }}</h4>\r\n                                <div class=\"row\">\r\n                                    <div class=\"col-md-12\">\r\n                                        <div class=\"form-group\">\r\n                                            <label>{{'defects.create.fields.choose_file' | translate }}</label>\r\n                                            <input formControlName=\"file\" type=\"hidden\">\r\n                                            <div #logoropzone class=\"dropzone dz-clickable\">\r\n                                                <div class=\"dz-default dz-message\">\r\n                                                    <span><strong>{{'defects.create.error_messages.message10' | translate }}</strong></span>\r\n                                                </div>\r\n                                            </div>\r\n                                        </div>\r\n                                    </div>\r\n                                </div>\r\n                            </div>\r\n                        </div>\r\n                    </div>\r\n                </div>\r\n            </div>\r\n            <div *ngIf=\"customFields.length > 0\" class=\"col-md-12\">\r\n                <div class=\"card\">\r\n                    <div class=\"card-body\">\r\n                        <div class=\"px-3\">\r\n                            <div class=\"form-body\">\r\n                                <h4 class=\"form-section\">\r\n                                    <i class=\"ft-star\"></i>{{'defects.headings.head4' | translate }}</h4>\r\n                                <div class=\"row mb-3\">\r\n                                    <div class=\"col-md-12\">\r\n                                        <app-show-custom-field-element [controls]=\"createDefectForm.get('custom_field')\" [customFields]=\"customFields\" [formArray]=\"'custom_field'\" [formName]=\"createDefectForm\" [isFormSubmitted]=\"isFormSubmitted\"></app-show-custom-field-element>\r\n                                    </div>\r\n                                </div>\r\n                            </div>\r\n                        </div>\r\n                    </div>\r\n                </div>\r\n            </div>\r\n            <div class=\"col-md-12\">\r\n                <div class=\"card\">\r\n                    <div class=\"card-body\">\r\n                        <div class=\"px-3\">\r\n                            <div class=\"form-body\">\r\n                                <h4 class=\"form-section\">\r\n                                    <i class=\"ft-message-square\"></i> {{'defects.headings.head5' | translate }}</h4>\r\n                                <div class=\"row mb-3\">\r\n                                    <div class=\"col-md-12\">\r\n                                        <div class=\"form-group\">\r\n                                            <label for=\"description\">{{'defects.create.fields.description' | translate }}</label>\r\n                                            <app-ngx-editor [placeholder]=\"''\" [spellcheck]=\"true\" formControlName=\"description\" height=\"100px\" id=\"description\" minHeight=\"50px\"></app-ngx-editor>\r\n                                        </div>\r\n                                    </div>\r\n                                    <div class=\"col-md-12 text-right\">\r\n                                        <a [routerLink]=\"['/defects']\" class=\"btn btn-cancel mb-0\">{{'common.cancel' | translate}}</a>\r\n                                        <button class=\"btn btn-submit mb-0\" type=\"submit\">{{'common.create' | translate}}</button>\r\n                                    </div>\r\n                                </div>\r\n                            </div>\r\n                        </div>\r\n                    </div>\r\n                </div>\r\n            </div>\r\n        </div>\r\n    </form>\r\n</section>\r\n");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/modules/pm/defects/pages/defect-detail/defect-detail.component.html":
/*!***************************************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/modules/pm/defects/pages/defect-detail/defect-detail.component.html ***!
  \***************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<section class=\"row detail-page\">\r\n    <div *ngIf=\"isPageLoaded\" class=\"card bg-transparent\">\r\n        <app-defect-details [apiUrl]=\"apiUrl\" [defect]=\"defect\" [loginUser]=\"loginUser\" [permission]=\"permission\"></app-defect-details>\r\n    </div>\r\n</section>\r\n");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/modules/pm/defects/pages/defect-edit/defect-edit.component.html":
/*!***********************************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/modules/pm/defects/pages/defect-edit/defect-edit.component.html ***!
  \***********************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<section *ngIf=\"isPageLoaded\" id=\"basic-form-layouts\">\r\n    <form (ngSubmit)=\"onSubmit()\" [formGroup]=\"editDefectForm\">\r\n        <div class=\"row\">\r\n            <div class=\"col-md-6\">\r\n                <div class=\"card\">\r\n                    <div class=\"card-header\">\r\n                        <h4 class=\"card-title\">{{'defects.title2' | translate }}</h4>\r\n                    </div>\r\n                    <div class=\"card-body\">\r\n                        <div class=\"px-3\">\r\n                            <div class=\"form-body\">\r\n                                <h4 class=\"form-section\">\r\n                                    <i class=\"fa fa-bug\"></i> {{'defects.headings.head1' | translate }}</h4>\r\n                                <div class=\"row\">\r\n                                    <div class=\"col-md-4\">\r\n                                        <div class=\"form-group\">\r\n                                            <label for=\"generated_id\">{{'defects.create.fields.defect_ID' | translate }}&nbsp;<span class=\"text-danger\">*</span></label>\r\n                                            <input [ngClass]=\"{ 'is-invalid': isFormSubmitted && defectControl.generated_id.errors }\" class=\"form-control\" formControlName=\"generated_id\" id=\"generated_id\" readonly type=\"text\"/>\r\n                                            <div *ngIf=\"isFormSubmitted && defectControl.generated_id.errors\" class=\"invalid-feedback\">\r\n                                                <div *ngIf=\"defectControl.generated_id.errors.required\">{{'defects.create.error_messages.message4' | translate }}</div>\r\n                                            </div>\r\n                                        </div>\r\n                                    </div>\r\n                                    <div class=\"col-md-8\">\r\n                                        <div class=\"form-group\">\r\n                                            <label for=\"defect_name\">{{'defects.create.fields.defect_name' | translate }}&nbsp;<span class=\"text-danger\">*</span></label>\r\n                                            <input [ngClass]=\"{ 'is-invalid': isFormSubmitted && defectControl.defect_name.errors }\" class=\"form-control\" formControlName=\"defect_name\" id=\"defect_name\" placeholder=\"{{'defects.create.placeholders.placeholder1' | translate }}\" type=\"text\"/>\r\n                                            <div *ngIf=\"isFormSubmitted && defectControl.defect_name.errors\" class=\"invalid-feedback\">\r\n                                                <div *ngIf=\"defectControl.defect_name.errors.required\">{{'defects.create.error_messages.message1' | translate }}</div>\r\n                                                <div *ngIf=\"defectControl.defect_name.errors.maxlength\">{{'defects.create.error_messages.message2' | translate }}</div>\r\n                                            </div>\r\n                                        </div>\r\n                                    </div>\r\n                                    <div class=\"col-md-6\">\r\n                                        <div [ngClass]=\"{ 'is-invalid': isFormSubmitted && defectControl.start_date.errors }\" class=\"form-group\">\r\n                                            <label for=\"start_date\">{{'defects.create.fields.start_date' | translate }}</label>\r\n                                            <div class=\"position-relative has-icon-left\">\r\n                                                <input #dp1=\"bsDatepicker\" (onHidden)=\"startDateChange()\" [bsConfig]=\"datepickerConfig\" [minDate]=\"projectStartDate\" bsDatepicker class=\"form-control\" formControlName=\"start_date\" id=\"start_date\" placeholder=\"{{'defects.create.placeholders.placeholder8' | translate }}\" type=\"text\"/>\r\n                                                <div class=\"form-control-position\"><i class=\"ft-calendar\"></i></div>\r\n                                                <div *ngIf=\"isFormSubmitted && defectControl.start_date.errors\" class=\"invalid-feedback\">\r\n                                                    <div *ngIf=\"defectControl.start_date.errors\">{{'defects.create.error_messages.message11' | translate }}</div>\r\n                                                </div>\r\n                                            </div>\r\n                                        </div>\r\n                                    </div>\r\n                                    <div class=\"col-md-6\">\r\n                                        <div [ngClass]=\"{ 'is-invalid': isFormSubmitted && defectControl.end_date.errors }\" class=\"form-group\">\r\n                                            <label for=\"end-date\">{{'defects.create.fields.end_date' | translate }}</label>\r\n                                            <div class=\"position-relative has-icon-left\">\r\n                                                <input #dp2=\"bsDatepicker\" [bsConfig]=\"datepickerConfig\" [minDate]=\"editDefectForm.get('start_date').value\" bsDatepicker class=\"form-control\" formControlName=\"end_date\" id=\"end_date\" placeholder=\"{{'defects.create.placeholders.placeholder9' | translate }}\" type=\"text\"/>\r\n                                                <div class=\"form-control-position\"><i class=\"ft-calendar\"></i></div>\r\n                                                <div *ngIf=\"isFormSubmitted && defectControl.end_date.errors\" class=\"invalid-feedback\">\r\n                                                    <div *ngIf=\"defectControl.end_date.errors\">{{'defects.create.error_messages.message12' | translate }}</div>\r\n                                                </div>\r\n                                            </div>\r\n                                        </div>\r\n                                    </div>\r\n                                    <div class=\"col-md-6\">\r\n                                        <div [ngClass]=\"{ 'is-invalid': isFormSubmitted && defectControl.defect_type.errors }\" class=\"form-group\">\r\n                                            <label for=\"defect_type\">{{'defects.create.fields.defect_type' | translate }}&nbsp;<span class=\"text-danger\">*</span></label>\r\n                                            <ng-select [items]=\"('defects.defect_types' | translate)\" [searchable]=\"true\" [selectOnTab]=\"true\" bindLabel=\"label\" bindValue=\"id\" formControlName=\"defect_type\" labelForId=\"type\" placeholder=\"{{'defects.create.placeholders.placeholder2' | translate }}\"></ng-select>\r\n                                            <div *ngIf=\"isFormSubmitted && defectControl.defect_type.errors\" class=\"invalid-feedback\">\r\n                                                <div *ngIf=\"defectControl.defect_type.errors.required\">{{'defects.create.error_messages.message3' | translate }}</div>\r\n                                            </div>\r\n                                        </div>\r\n                                    </div>\r\n                                    <div class=\"col-md-6\">\r\n                                        <div [ngClass]=\"{ 'is-invalid': isFormSubmitted && defectControl.severity.errors }\" class=\"form-group\">\r\n                                            <label for=\"severity\">{{'defects.create.fields.severity' | translate }}&nbsp;<span class=\"text-danger\">*</span></label>\r\n                                            <ng-select [items]=\"('defects.severities' | translate)\" [searchable]=\"true\" [selectOnTab]=\"true\" bindLabel=\"label\" bindValue=\"id\" formControlName=\"severity\" labelForId=\"severity\" placeholder=\"{{'defects.create.placeholders.placeholder4' | translate }}\"></ng-select>\r\n                                            <div *ngIf=\"isFormSubmitted && defectControl.severity.errors\" class=\"invalid-feedback\">\r\n                                                <div *ngIf=\"defectControl.severity.errors.required\">{{'defects.create.error_messages.message6' | translate }}</div>\r\n                                            </div>\r\n                                        </div>\r\n                                    </div>\r\n                                    <div class=\"col-md-6\">\r\n                                        <div class=\"form-group\">\r\n                                            <label for=\"assigned_group_id\">{{'defects.create.fields.assigned_group' | translate }}</label>\r\n                                            <ng-select (change)=\"assignGroupChange($event)\" [items]=\"teams\" [searchable]=\"true\" [selectOnTab]=\"true\" bindLabel=\"team_name\" bindValue=\"id\" formControlName=\"assigned_group_id\" labelForId=\"assigned_group_id\" placeholder=\"{{'defects.create.placeholders.placeholder5' | translate }}\"></ng-select>\r\n                                        </div>\r\n                                    </div>\r\n                                    <div class=\"col-md-6\">\r\n                                        <div class=\"form-group\">\r\n                                            <label for=\"assign_member\">{{'defects.create.fields.assigned_To' | translate }}</label>\r\n                                            <ng-select [items]=\"teamsMembers\" [multiple]=\"false\" [searchable]=\"true\" [selectOnTab]=\"true\" bindLabel=\"firstname\" bindValue=\"id\" formControlName=\"assign_member\" labelForId=\"assign_member\" placeholder=\"{{'common.unassigned' | translate}}\">\r\n                                                <ng-template let-item=\"item\" ng-option-tmp>\r\n                                                    {{item.firstname}} {{item.lastname}}\r\n                                                </ng-template>\r\n                                            </ng-select>\r\n                                        </div>\r\n                                    </div>\r\n                                    <div class=\"col-md-6\">\r\n                                        <div class=\"form-group\">\r\n                                            <label for=\"estimated_hours\">{{'defects.create.fields.estimate_hours' | translate }}</label>\r\n                                            <input [ngClass]=\"{ 'is-invalid': isFormSubmitted && defectControl.estimated_hours.errors }\" class=\"form-control\" formControlName=\"estimated_hours\" placeholder=\"00:00\" type='text'>\r\n                                            <div *ngIf=\"isFormSubmitted && defectControl.estimated_hours.errors\" class=\"invalid-feedback\">\r\n                                                <div *ngIf=\"defectControl.estimated_hours.errors.pattern\">{{'defects.create.error_messages.message13' | translate }}</div>\r\n                                            </div>\r\n                                        </div>\r\n                                    </div>\r\n                                    <div class=\"col-md-6\">\r\n                                        <div [ngClass]=\"{ 'is-invalid': isFormSubmitted && defectControl.status.errors }\" class=\"form-group\">\r\n                                            <label for=\"status\">{{'defects.create.fields.status' | translate }}&nbsp;<span class=\"text-danger\">*</span>\r\n                                            </label>\r\n                                            <ng-select [items]=\"('defects.status' | translate)\" [searchable]=\"true\" [selectOnTab]=\"true\" bindLabel=\"label\" bindValue=\"id\" formControlName=\"status\" labelForId=\"status\" placeholder=\"{{'defects.create.placeholders.placeholder3' | translate }}\"></ng-select>\r\n                                            <div *ngIf=\"isFormSubmitted && defectControl.status.errors\" class=\"invalid-feedback\">\r\n                                                <div *ngIf=\"defectControl.status.errors.required\">{{'defects.create.error_messages.message5' | translate }}</div>\r\n                                            </div>\r\n                                        </div>\r\n                                    </div>\r\n                                </div>\r\n                            </div>\r\n                        </div>\r\n                    </div>\r\n                </div>\r\n            </div>\r\n            <div class=\"col-md-6\">\r\n                <div class=\"card\">\r\n                    <div class=\"card-header\">&nbsp;</div>\r\n                    <div class=\"card-body\">\r\n                        <div class=\"px-3\">\r\n                            <div class=\"form-body\">\r\n                                <h4 class=\"form-section\">\r\n                                    <i class=\"ft-zap\"></i> {{'defects.headings.head2' | translate }}</h4>\r\n                                <div class=\"row\">\r\n                                    <div class=\"col-md-6\">\r\n                                        <div [ngClass]=\"{ 'is-invalid': isFormSubmitted && defectControl.project_id.errors }\" class=\"form-group\">\r\n                                            <label for=\"project_id\">{{'defects.create.fields.project_name' | translate }}&nbsp;<span class=\"text-danger\">*</span></label>\r\n                                            <ng-select (change)=\"projectChange($event)\" [items]=\"projects\" [searchable]=\"true\" [selectOnTab]=\"true\" bindLabel=\"project_name\" bindValue=\"id\" formControlName=\"project_id\" labelForId=\"project_id\" placeholder=\"{{'defects.create.placeholders.placeholder6' | translate }}\"></ng-select>\r\n                                            <div *ngIf=\"isFormSubmitted && defectControl.project_id.errors\" class=\"invalid-feedback\">\r\n                                                <div *ngIf=\"defectControl.project_id.errors.required\">{{'defects.create.error_messages.message8' | translate }}</div>\r\n                                            </div>\r\n                                        </div>\r\n                                    </div>\r\n                                    <div class=\"col-md-6\">\r\n                                        <div class=\"form-group\">\r\n                                            <label for=\"project_version\">{{'defects.create.fields.project_version' | translate }}</label>\r\n                                            <ng-select [items]=\"projectVersion\" [searchable]=\"true\" [selectOnTab]=\"true\" formControlName=\"project_version\" placeholder=\"{{'defects.create.placeholders.placeholder7' | translate }}\">\r\n                                                <ng-template let-item=\"item\" ng-option-tmp>{{item}}</ng-template>\r\n                                            </ng-select>\r\n                                        </div>\r\n                                    </div>\r\n                                </div>\r\n                                <h4 class=\"form-section\">\r\n                                    <i class=\"ft-upload\"></i> {{'defects.headings.head3' | translate }}</h4>\r\n                                <div class=\"row\">\r\n                                    <div class=\"col-md-12\">\r\n                                        <div class=\"form-group\">\r\n                                            <label>{{'defects.create.fields.choose_file' | translate }}</label>\r\n                                            <input formControlName=\"file\" type=\"hidden\">\r\n                                            <div #logodropzone class=\"dropzone dz-clickable\">\r\n                                                <div *ngIf=\"isLogoUploaded\" class=\"dz-default dz-message\">\r\n                                                    <span><strong>{{'defects.create.error_messages.message10' | translate }}</strong></span>\r\n                                                </div>\r\n                                                <div *ngIf=\"isLogoLoaded && defect.attachment_hash\" class=\"dz-preview dz-image-preview\">\r\n                                                    <div class=\"dz-image\">\r\n                                                        <img height=\"100\" src=\"{{apiUrl}}/uploads/defect/{{defect.attachment_hash}}\" width=\"100\"/>\r\n                                                    </div>\r\n                                                    <a (click)=\"removeDropzoneImage()\" class=\"btn btn-sm btn-block\">{{ 'common.remove_file' | translate }}</a>\r\n                                                </div>\r\n                                            </div>\r\n                                        </div>\r\n                                    </div>\r\n                                </div>\r\n                            </div>\r\n                        </div>\r\n                    </div>\r\n                </div>\r\n            </div>\r\n            <div *ngIf=\"customFields.length > 0\" class=\"col-md-12\">\r\n                <div class=\"card\">\r\n                    <div class=\"card-body\">\r\n                        <div class=\"px-3\">\r\n                            <div class=\"form-body\">\r\n                                <h4 class=\"form-section\">\r\n                                    <i class=\"ft-star\"></i>{{'defects.headings.head4' | translate }}</h4>\r\n                                <div class=\"row mb-3\">\r\n                                    <div class=\"col-md-12\">\r\n                                        <app-show-custom-field-element [controls]=\"editDefectForm.get('custom_field')\" [customFields]=\"customFields\" [formArray]=\"'custom_field'\" [formName]=\"editDefectForm\" [isFormSubmitted]=\"isFormSubmitted\"></app-show-custom-field-element>\r\n                                    </div>\r\n                                </div>\r\n                            </div>\r\n                        </div>\r\n                    </div>\r\n                </div>\r\n            </div>\r\n            <div class=\"col-md-12\">\r\n                <div class=\"card\">\r\n                    <div class=\"card-body\">\r\n                        <div class=\"px-3\">\r\n                            <div class=\"form-body\">\r\n                                <h4 class=\"form-section\">\r\n                                    <i class=\"ft-message-square\"></i>{{'defects.headings.head5' | translate }}</h4>\r\n                                <div class=\"row mb-3\">\r\n                                    <div class=\"col-md-12\">\r\n                                        <div class=\"form-group\">\r\n                                            <label for=\"description\">{{'defects.create.fields.description' | translate }}</label>\r\n                                            <app-ngx-editor [placeholder]=\"''\" [spellcheck]=\"true\" formControlName=\"description\" height=\"100px\" id=\"description\" minHeight=\"50px\"></app-ngx-editor>\r\n                                        </div>\r\n                                    </div>\r\n                                    <div class=\"col-md-12 text-right\">\r\n                                        <a [routerLink]=\"['/defects']\" class=\"btn btn-cancel mb-0\">{{'common.cancel' | translate}}</a>\r\n                                        <button class=\"btn btn-submit mb-0\" type=\"submit\">{{'common.update' | translate}}</button>\r\n                                    </div>\r\n                                </div>\r\n                            </div>\r\n                        </div>\r\n                    </div>\r\n                </div>\r\n            </div>\r\n        </div>\r\n    </form>\r\n</section>\r\n");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/modules/pm/defects/pages/defect-kanban/defect-kanban.component.html":
/*!***************************************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/modules/pm/defects/pages/defect-kanban/defect-kanban.component.html ***!
  \***************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<section>\r\n    <div class=\"row\">\r\n        <div class=\"col-sm-12\">\r\n            <div class=\"card pl-2 pr-2 pb-2\">\r\n                <!-- Card header -->\r\n                <div class=\"card-header pl-0 pr-0\">\r\n                    <div class=\"col-sm-12 \">\r\n                        <div class=\"row\">\r\n                            <div class=\"col-sm-3 p-0\">\r\n                                <h4 class=\"main-title mt-2 text-left\">\r\n                                    <span>{{'kanban_board.title1' | translate }}</span></h4>\r\n                            </div>\r\n                            <div class=\"col-sm-9 p-0\">\r\n                                <div class=\"card-buttons d-lg-flex float-lg-right\">\r\n                                    <div class=\"mr-md-1 mt-lg-0 mt-2\">\r\n                                        <ng-select (change)=\"getDefects($event?.id, filter)\" [(ngModel)]=\"projectId\" [items]=\"projects\" [searchable]=\"true\" [selectOnTab]=\"true\" bindLabel=\"project_name\" bindValue=\"id\" labelForId=\"projectId\" placeholder=\"{{'common.placeholders.placeholder1' | translate}}\">\r\n                                            <ng-template let-item=\"item\" ng-option-tmp>\r\n                                                {{item.project_name}}\r\n                                            </ng-template>\r\n                                        </ng-select>\r\n                                    </div>\r\n                                    <div class=\"mr-1 mt-lg-0 mt-2 float-left\">\r\n                                        <div class=\"btn-group tab-filter\">\r\n                                            <label (click)=\"getDefects(projectId, filter)\" [(ngModel)]=\"filter\" btnRadio=\"all\" class=\"btn btn-secondary \" role=\"button\" tabindex=\"0\">{{'common.status.all' | translate}}</label>\r\n                                            <label (click)=\"getDefects(projectId, filter)\" [(ngModel)]=\"filter\" btnRadio=\"my\" class=\"btn btn-secondary\" role=\"button\" tabindex=\"0\">{{'common.status.my' | translate}}</label>\r\n                                        </div>\r\n                                    </div>\r\n                                    <div class=\"float-right mt-lg-0 mt-2\">\r\n                                        <a [routerLink]=\"['/defects']\" class=\"btn btn-create mb-0 mr-1\" tooltip=\"{{'common.switch_to_list' | translate}}\"><i class=\"fa fa-list\"></i><span>{{'common.list' | translate}}</span></a>\r\n                                        <a *ngxPermissionsOnly=\"['admin', 'super_admin', 'defects_create']\" [routerLink]=\"['/defects/create']\" class=\"btn btn-create mb-0\" tooltip=\"{{'common.create' | translate}}\"><i class=\"fa fa-plus\"></i></a>\r\n                                    </div>\r\n                                </div>\r\n                            </div>\r\n                        </div>\r\n                    </div>\r\n                </div>\r\n                <!-- Card body -->\r\n                <div class=\"card-body\">\r\n                    <div class=\"row mb-4 taskboard\">\r\n                        <div class=\"col-md-3 col-lg-3 col-xl-3 col-12\">\r\n                            <h4 class=\"ml-2 mt-2 text-bold-500\">\r\n                                <i class=\"ft-list mr-1\"></i>&nbsp;{{'common.status.open' | translate}}</h4>\r\n                            <p class=\"ml-2 small\">\r\n                                <i class=\"fa fa-hand-o-up\"></i>&nbsp;{{'kanban_board.budges.budges1' | translate }}</p>\r\n                            <div class=\"drag-container\">\r\n                                <div #openLists=\"cdkDropList\" (cdkDropListDropped)=\"drop($event)\" [cdkDropListConnectedTo]=\"[assignedList, inprogressLists, completedLists]\" [cdkDropListData]=\"openDefects\" cdkDropList class=\"item-list\">\r\n                                    <ul class=\"pl-0 open\">\r\n                                        <li *ngFor=\"let defect of openDefects | orderBy: 'orders'\" cdkDrag class=\"card\">\r\n                                            <div class=\"card-box\">\r\n                                                <div class=\"row\">\r\n                                                    <h6 class=\"col-12 card-text\">\r\n                                                        <a [routerLink]=\"['/defects/detail', defect.id]\" class=\"text-info\" tooltip=\"{{'common.view' | translate}}\">{{defect.generated_id}}</a>\r\n                                                        <ng-container *ngFor=\"let severity of ('defects.severities' | translate)\">\r\n                                                            <div class=\"budges-status d-inline\">\r\n                                                                <span *ngIf=\"severity.id == defect.severity\" class=\"{{severity.class}} pull-right\">{{severity.label | strToFirstLetter}}</span>\r\n                                                            </div>\r\n                                                        </ng-container>\r\n                                                        <br>{{defect.defect_name}}\r\n                                                    </h6>\r\n                                                </div>\r\n                                                <div class=\"row mt-2\">\r\n                                                    <div class=\"col-12\">\r\n                                                        <div class=\"taskboard-foot d-flex justify-content-between\">\r\n                                                            <div class=\"taskboard-date\">\r\n                                                                <i class=\"fa fa-calendar-o\"></i>&nbsp;{{defect.created_at | dateTimeFormatFilter: loginUser.settings.date_format}}\r\n                                                            </div>\r\n                                                            <div class=\"people-lists\">\r\n                                                                <ng-container *ngIf=\"defect.assign_member == 'Unassign' || defect.assign_member == '' || defect.assign_member == null else elseBlock;\">\r\n                                                                    <a class=\"btn btn-profile-danger rounded-circle text-dark\" href=\"javascript:void(0);\" placement=\"top\" tooltip=\"{{'common.unassigned' | translate}}\">\r\n                                                                        <img alt=\"Profile\" class=\"img-sm rounded-circle\" src=\"../assets/img/unassign.jpg\"/>\r\n                                                                    </a>\r\n                                                                </ng-container>\r\n                                                                <ng-template #elseBlock>\r\n                                                                    <a [routerLink]=\"['/users/profile', defect.assign_user.id]\" class=\"btn rounded-circle text-dark btn-profile-danger\" placement=\"top\" tooltip=\"{{defect.assign_user.firstname}} {{defect.assign_user.lastname}}\">\r\n                                                                        <img *ngIf=\"defect.assign_user.avatar\" alt=\"Profile\" class=\"img-sm rounded-circle\" src=\"{{apiUrl}}/uploads/profile/{{defect.assign_user.avatar}}\"/>\r\n                                                                        <img *ngIf=\"!defect.assign_user.avatar\" alt=\"Profile\" class=\"img-sm rounded-circle\" src=\"../assets/img/profile_small.jpg\"/>\r\n                                                                    </a>\r\n                                                                </ng-template>\r\n                                                            </div>\r\n                                                        </div>\r\n                                                    </div>\r\n                                                </div>\r\n                                            </div>\r\n                                        </li>\r\n                                    </ul>\r\n                                </div>\r\n                            </div>\r\n                        </div>\r\n                        <div class=\"col-md-3 col-lg-3 col-xl-3 col-12\">\r\n                            <h4 class=\"ml-2 mt-2 text-bold-500\">\r\n                                <i class=\"ft-user-check mr-1\"></i>&nbsp;{{'common.status.assigned' | translate}}</h4>\r\n                            <p class=\"ml-2 small\">\r\n                                <i class=\"fa fa-hand-o-up\"></i>&nbsp;{{'kanban_board.budges.budges1' | translate }}</p>\r\n                            <div class=\"drag-container\">\r\n                                <div #assignedList=\"cdkDropList\" (cdkDropListDropped)=\"drop($event)\" [cdkDropListConnectedTo]=\"[openLists, inprogressLists, completedLists]\" [cdkDropListData]=\"assignedDefects\" cdkDropList class=\"item-list\">\r\n                                    <ul class=\"pl-0 assigned\">\r\n                                        <li *ngFor=\"let defect of assignedDefects | orderBy: 'orders'\" cdkDrag class=\"card\">\r\n                                            <div class=\"card-box\">\r\n                                                <div class=\"row\">\r\n                                                    <h6 class=\"col-12 card-text\">\r\n                                                        <a [routerLink]=\"['/defects/detail', defect.id]\" class=\"text-info\" tooltip=\"{{'common.view' | translate}}\">{{defect.generated_id}}</a>\r\n                                                        <ng-container *ngFor=\"let severity of ('defects.severities' | translate)\">\r\n                                                            <div class=\"budges-status d-inline\">\r\n                                                                <span *ngIf=\"severity.id == defect.severity\" class=\"{{severity.class}} pull-right\">{{severity.label | strToFirstLetter}}</span>\r\n                                                            </div>\r\n                                                        </ng-container>\r\n                                                        <br>{{defect.defect_name}}\r\n                                                    </h6>\r\n                                                </div>\r\n                                                <div class=\"row mt-2\">\r\n                                                    <div class=\"col-12\">\r\n                                                        <div class=\"taskboard-foot d-flex justify-content-between\">\r\n                                                            <div class=\"taskboard-date\">\r\n                                                                <i class=\"fa fa-calendar-o\"></i>&nbsp;{{defect.created_at | dateTimeFormatFilter: loginUser.settings.date_format}}\r\n                                                            </div>\r\n                                                            <div class=\"people-lists\">\r\n                                                                <ng-container *ngIf=\"defect.assign_member == 'Unassign' || defect.assign_member == '' || defect.assign_member == null else elseBlock1;\">\r\n                                                                    <a class=\"btn btn-profile-danger rounded-circle text-dark\" href=\"javascript:void(0);\" placement=\"top\" tooltip=\"{{'common.unassigned' | translate}}\">\r\n                                                                        <img alt=\"Profile\" class=\"img-sm rounded-circle\" src=\"../assets/img/unassign.jpg\"/>\r\n                                                                    </a>\r\n                                                                </ng-container>\r\n                                                                <ng-template #elseBlock1>\r\n                                                                    <a [routerLink]=\"['/users/profile', defect.assign_user.id]\" class=\"btn rounded-circle text-dark btn-profile-danger\" placement=\"top\" tooltip=\"{{defect.assign_user.firstname}} {{defect.assign_user.lastname}}\">\r\n                                                                        <img *ngIf=\"defect.assign_user.avatar\" alt=\"Profile\" class=\"img-sm rounded-circle\" src=\"{{apiUrl}}/uploads/profile/{{defect.assign_user.avatar}}\"/>\r\n                                                                        <img *ngIf=\"!defect.assign_user.avatar\" alt=\"Profile\" class=\"img-sm rounded-circle\" src=\"../assets/img/profile_small.jpg\"/>\r\n                                                                    </a>\r\n                                                                </ng-template>\r\n                                                            </div>\r\n                                                        </div>\r\n                                                    </div>\r\n                                                </div>\r\n                                            </div>\r\n                                        </li>\r\n                                    </ul>\r\n                                </div>\r\n                            </div>\r\n                        </div>\r\n                        <div class=\"col-md-3 col-lg-3 col-xl-3 col-12\">\r\n                            <h4 class=\"ml-2 mt-2 text-bold-500\">\r\n                                <i class=\"ft-trending-up mr-1\"></i>&nbsp;{{'common.status.in_progress' | translate}}\r\n                            </h4>\r\n                            <p class=\"ml-2 small\">\r\n                                <i class=\"fa fa-hand-o-up\"></i>&nbsp;{{'kanban_board.budges.budges1' | translate }}</p>\r\n                            <div class=\"drag-container\">\r\n                                <div #inprogressLists=\"cdkDropList\" (cdkDropListDropped)=\"drop($event)\" [cdkDropListConnectedTo]=\"[assignedList, openLists, completedLists]\" [cdkDropListData]=\"inprogressDefects\" cdkDropList class=\"item-list\">\r\n                                    <ul class=\"pl-0 in-progress\">\r\n                                        <li *ngFor=\"let defect of inprogressDefects | orderBy: 'orders'\" cdkDrag class=\"card\">\r\n                                            <div class=\"card-box\">\r\n                                                <div class=\"row\">\r\n                                                    <h6 class=\"col-12 card-text\">\r\n                                                        <a [routerLink]=\"['/defects/detail', defect.id]\" class=\"text-info\" tooltip=\"{{'common.view' | translate}}\">{{defect.generated_id}}</a>\r\n                                                        <ng-container *ngFor=\"let severity of ('defects.severities' | translate)\">\r\n                                                            <div class=\"budges-status d-inline\">\r\n                                                                <span *ngIf=\"severity.id == defect.severity\" class=\"{{severity.class}} pull-right\">{{severity.label | strToFirstLetter}}</span>\r\n                                                            </div>\r\n                                                        </ng-container>\r\n                                                        <br>{{defect.defect_name}}\r\n                                                    </h6>\r\n                                                </div>\r\n                                                <div class=\"row mt-2\">\r\n                                                    <div class=\"col-12\">\r\n                                                        <div class=\"taskboard-foot d-flex justify-content-between\">\r\n                                                            <div class=\"taskboard-date\">\r\n                                                                <i class=\"fa fa-calendar-o\"></i>&nbsp;{{defect.created_at | dateTimeFormatFilter: loginUser.settings.date_format}}\r\n                                                            </div>\r\n                                                            <div class=\"people-lists\">\r\n                                                                <ng-container *ngIf=\"defect.assign_member == 'Unassign' || defect.assign_member == '' || defect.assign_member == null else elseBlock2;\">\r\n                                                                    <a class=\"btn btn-profile-danger rounded-circle text-dark\" href=\"javascript:void(0);\" placement=\"top\" tooltip=\"{{'common.unassigned' | translate}}\">\r\n                                                                        <img alt=\"Profile\" class=\"img-sm rounded-circle\" src=\"../assets/img/unassign.jpg\"/>\r\n                                                                    </a>\r\n                                                                </ng-container>\r\n                                                                <ng-template #elseBlock2>\r\n                                                                    <a [routerLink]=\"['/users/profile', defect.assign_user.id]\" class=\"btn rounded-circle text-dark btn-profile-danger\" placement=\"top\" tooltip=\"{{defect.assign_user.firstname}} {{defect.assign_user.lastname}}\">\r\n                                                                        <img *ngIf=\"defect.assign_user.avatar\" alt=\"Profile\" class=\"img-sm rounded-circle\" src=\"{{apiUrl}}/uploads/profile/{{defect.assign_user.avatar}}\"/>\r\n                                                                        <img *ngIf=\"!defect.assign_user.avatar\" alt=\"Profile\" class=\"img-sm rounded-circle\" src=\"../assets/img/profile_small.jpg\"/>\r\n                                                                    </a>\r\n                                                                </ng-template>\r\n                                                            </div>\r\n                                                        </div>\r\n                                                    </div>\r\n                                                </div>\r\n                                            </div>\r\n                                        </li>\r\n                                    </ul>\r\n                                </div>\r\n                            </div>\r\n                        </div>\r\n                        <div class=\"col-md-3 col-lg-3 col-xl-3 col-12\">\r\n                            <h4 class=\"ml-2 mt-2 text-bold-500\">\r\n                                <i class=\"ft-thumbs-up mr-1\"></i>&nbsp;{{'common.status.completed' | translate}}</h4>\r\n                            <p class=\"ml-2 small\">\r\n                                <i class=\"fa fa-hand-o-up\"></i>&nbsp;{{'kanban_board.budges.budges1' | translate }}</p>\r\n                            <div class=\"drag-container\">\r\n                                <div #completedLists=\"cdkDropList\" (cdkDropListDropped)=\"drop($event)\" [cdkDropListConnectedTo]=\"[assignedList, openLists, inprogressLists]\" [cdkDropListData]=\"completedDefects\" cdkDropList class=\"item-list\">\r\n                                    <ul class=\"pl-0 completed\">\r\n                                        <li *ngFor=\"let defect of completedDefects | orderBy: 'orders'\" cdkDrag class=\"card\">\r\n                                            <div class=\"card-box\">\r\n                                                <div class=\"row\">\r\n                                                    <h6 class=\"col-12 card-text\">\r\n                                                        <a [routerLink]=\"['/defects/detail', defect.id]\" class=\"text-info\" tooltip=\"{{'common.view' | translate}}\">{{defect.generated_id}}</a>\r\n                                                        <ng-container *ngFor=\"let severity of ('defects.severities' | translate)\">\r\n                                                            <div class=\"budges-status d-inline\">\r\n                                                                <span *ngIf=\"severity.id == defect.severity\" class=\"{{severity.class}} pull-right\">{{severity.label | strToFirstLetter}}</span>\r\n                                                            </div>\r\n                                                        </ng-container>\r\n                                                        <br>{{defect.defect_name}}\r\n                                                    </h6>\r\n                                                </div>\r\n                                                <div class=\"row mt-2\">\r\n                                                    <div class=\"col-12\">\r\n                                                        <div class=\"taskboard-foot d-flex justify-content-between\">\r\n                                                            <div class=\"taskboard-date\">\r\n                                                                <i class=\"fa fa-calendar-o\"></i>&nbsp;{{defect.created_at | dateTimeFormatFilter: loginUser.settings.date_format}}\r\n                                                            </div>\r\n                                                            <div class=\"people-lists\">\r\n                                                                <ng-container *ngIf=\"defect.assign_member == 'Unassign' || defect.assign_member == '' || defect.assign_member == null else elseBlock3;\">\r\n                                                                    <a class=\"btn btn-profile-danger rounded-circle text-dark\" href=\"javascript:void(0);\" placement=\"top\" tooltip=\"{{'common.unassigned' | translate}}\">\r\n                                                                        <img alt=\"Profile\" class=\"img-sm rounded-circle\" src=\"../assets/img/unassign.jpg\"/>\r\n                                                                    </a>\r\n                                                                </ng-container>\r\n                                                                <ng-template #elseBlock3>\r\n                                                                    <a [routerLink]=\"['/users/profile', defect.assign_user.id]\" class=\"btn rounded-circle text-dark btn-profile-danger\" placement=\"top\" tooltip=\"{{defect.assign_user.firstname}} {{defect.assign_user.lastname}}\">\r\n                                                                        <img *ngIf=\"defect.assign_user.avatar\" alt=\"Profile\" class=\"img-sm rounded-circle\" src=\"{{apiUrl}}/uploads/profile/{{defect.assign_user.avatar}}\"/>\r\n                                                                        <img *ngIf=\"!defect.assign_user.avatar\" alt=\"Profile\" class=\"img-sm rounded-circle\" src=\"../assets/img/profile_small.jpg\"/>\r\n                                                                    </a>\r\n                                                                </ng-template>\r\n                                                            </div>\r\n                                                        </div>\r\n                                                    </div>\r\n                                                </div>\r\n                                            </div>\r\n                                        </li>\r\n                                    </ul>\r\n                                </div>\r\n                            </div>\r\n                        </div>\r\n                    </div>\r\n                </div>\r\n            </div>\r\n        </div>\r\n    </div>\r\n</section>\r\n");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/modules/pm/defects/pages/defect-list/defect-list.component.html":
/*!***********************************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/modules/pm/defects/pages/defect-list/defect-list.component.html ***!
  \***********************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<section class=\"hide_empty_message\">\r\n    <div class=\"row\">\r\n        <div class=\"col-sm-12\">\r\n            <div class=\"card pl-2 pr-2 pb-2\">\r\n                <!-- Card header -->\r\n                <div class=\"card-header pl-0 pr-0 border-bottom\">\r\n                    <h4 class=\"main-title mt-2\"><span>{{'defects.title' | translate}}</span></h4>\r\n                    <div class=\"card-buttons\">\r\n                        <a [routerLink]=\"['/defects/kanban']\" class=\"btn btn-create mb-0\" tooltip=\"{{'common.switch_to_kanban' | translate}}\"><i class=\"fa fa-trello\"></i><span>{{'common.kanban' | translate}}</span></a>\r\n                        <a *ngxPermissionsOnly=\"['admin', 'super_admin', 'defects_create']\" [routerLink]=\"['/defects/create']\" class=\"btn btn-create mb-0\" tooltip=\"{{'common.create' | translate}}\"><i class=\"fa fa-plus\"></i></a>\r\n                    </div>\r\n                </div>\r\n                <!-- Card content -->\r\n                <div class=\"card-content pt-3\">\r\n                    <!-- Card body -->\r\n                    <div class=\"card-body\">\r\n                        <!-- Filter buttons -->\r\n                        <div *ngIf=\"isPageLoaded\" class=\"d-flex flex-column flex-lg-row d-lg-inline-flex mb-3\">\r\n                            <div class=\" pr-0\">\r\n                                <div class=\"btn-group mr-2 mb-2\">\r\n                                    <label (click)=\"filterByStatus(statusfilterId, defectFilterKey)\" [(ngModel)]=\"defectFilterKey\" btnRadio=\"all\" class=\"btn btn-secondary btn-toggle m-0\" role=\"button\" tabindex=\"0\">{{'common.status.all' | translate}}</label>\r\n                                    <label (click)=\"filterByStatus(statusfilterId, defectFilterKey)\" [(ngModel)]=\"defectFilterKey\" btnRadio=\"selected\" class=\"btn btn-secondary btn-toggle m-0\" role=\"button\" tabindex=\"0\">{{'common.status.my' | translate}}</label>\r\n                                </div>\r\n                            </div>\r\n                            <div class=\"pl-lg-0 btn-filters\">\r\n                                <button (click)=\"filterByStatus(4, defectFilterKey)\" [ngClass]=\"{'active': statusfilterId==4}\" class=\"btn btn-raised open\" type=\"button\">\r\n                                    <p>{{'common.status.open' | translate}}</p>\r\n                                    <span class=\"badge badge-light\">\r\n                                        <ng-container *ngIf=\"countStatus.open || countStatus.re_open; else elseCondition2;\">{{countStatus.open + countStatus.re_open}}</ng-container>\r\n                                        <ng-template #elseCondition2>0</ng-template>\r\n                                    </span>\r\n                                </button>\r\n                                <button (click)=\"filterByStatus(1, defectFilterKey)\" [ngClass]=\"{'active': statusfilterId ==1}\" class=\"btn btn-raised assigned\" type=\"button\">\r\n                                    <p>{{'common.status.assigned' | translate}}</p>\r\n                                    <span class=\"badge badge-light\">\r\n                                        <ng-container *ngIf=\"countStatus.assigned; else elseCondition3;\">{{countStatus.assigned}}</ng-container>\r\n                                        <ng-template #elseCondition3>0</ng-template>\r\n                                    </span>\r\n                                </button>\r\n                                <button (click)=\"filterByStatus(3, defectFilterKey)\" [ngClass]=\"{'active': statusfilterId==3}\" class=\"btn btn-raised in_progress\" type=\"button\">\r\n                                    <p>{{'common.status.in_progress' | translate}}</p>\r\n                                    <span class=\"badge badge-light\">\r\n                                        <ng-container *ngIf=\"countStatus.in_progress; else elseCondition4;\">{{countStatus.in_progress}}</ng-container>\r\n                                        <ng-template #elseCondition4>0</ng-template>\r\n                                    </span>\r\n                                </button>\r\n                                <button (click)=\"filterByStatus(5, defectFilterKey)\" [ngClass]=\"{'active': statusfilterId==5}\" class=\"btn btn-raised solved\" type=\"button\">\r\n                                    <p>{{'common.status.solved' | translate}}</p>\r\n                                    <span class=\"badge badge-light\">\r\n                                        <ng-container *ngIf=\"countStatus.solved || countStatus.deferred || countStatus.closed; else elseCondition5;\">{{countStatus.solved + countStatus.deferred + countStatus.closed}}</ng-container>\r\n                                        <ng-template #elseCondition5>0</ng-template>\r\n                                    </span>\r\n                                </button>\r\n                                <button [ngClass]=\"{'active': statusfilterId ==0}\" [routerLink]=\"['/defects', 0, defectFilterKey]\" class=\"btn btn-raised btn-secondary\" type=\"button\">\r\n                                    <p>{{'common.status.total' | translate}}</p>\r\n                                    <span class=\"badge badge-light\">\r\n                                        <ng-container *ngIf=\"countStatus.all; else elseCondition1;\">{{countStatus.all}}</ng-container>\r\n                                        <ng-template #elseCondition1>0</ng-template>\r\n                                    </span>\r\n                                </button>\r\n                            </div>\r\n                        </div>\r\n                        <!-- Defect list datatable -->\r\n                        <div class=\"row\">\r\n                            <div class=\"col-sm-12\">\r\n                                <div class=\"table-responsive-xs table-responsive-sm table-responsive-md table-responsive-lg table-responsive-xl overflow-x-auto\">\r\n                                    <table [dtOptions]=\"dtOptions\" [dtTrigger]=\"dtTrigger\" class=\"table table-bordered table-hover b4-datatable\" datatable id=\"defects_table\" width=\"100%\">\r\n                                        <thead>\r\n                                        <tr>\r\n                                            <th>{{'defects.columns.id' | translate}}</th>\r\n                                            <th>{{'defects.columns.defect_name' | translate}}</th>\r\n                                            <th>{{'defects.columns.start_date' | translate}}</th>\r\n                                            <th>{{'defects.columns.end_date' | translate}}</th>\r\n                                            <th>{{'defects.columns.actual_hours' | translate}}</th>\r\n                                            <th>{{'defects.columns.assigned' | translate}}</th>\r\n                                            <th>{{'defects.columns.severity' | translate}}</th>\r\n                                            <th>{{'defects.columns.status' | translate}}</th>\r\n                                            <th>{{'defects.columns.actions' | translate}}</th>\r\n                                        </tr>\r\n                                        </thead>\r\n                                        <tbody *ngIf=\"defects?.length != 0\">\r\n                                        <tr *ngFor=\"let defect of defects; index as i\">\r\n                                            <td>\r\n                                                <a [routerLink]=\"['/defects/detail', defect.id]\" tooltip=\"{{'common.view' | translate}}\">{{defect.generated_id}}</a>\r\n                                            </td>\r\n                                            <td>\r\n                                                <ng-container *ngIf=\"getCheckPermission(defect); else elseBlock\">\r\n                                                    <inline-edit-input (updateValue)=\"saveDefectDetail(i, 'defect_name', $event);\" [elementFor]=\"'defects.inline_edit.defect_name' | translate\" [fieldValue]=\"defect.defect_name\" [isRequired]=\"'true'\" [name]=\"'defect_name'\" [type]=\"'text'\"></inline-edit-input>\r\n                                                </ng-container>\r\n                                                <ng-template #elseBlock>{{defect.defect_name}}</ng-template>\r\n                                            </td>\r\n                                            <td>{{defect.start_date | dateTimeFormatFilter: loginUser.settings.date_format}}</td>\r\n                                            <td>{{defect.end_date | dateTimeFormatFilter: loginUser.settings.date_format}}</td>\r\n                                            <td>{{defect.actual_hours}}</td>\r\n                                            <td class=\"people-lists\">\r\n                                                <ng-container *ngIf=\"defect.assign_member == 'Unassign' || defect.assign_member == '' || defect.assign_member == null; else elseBlock2;\">\r\n                                                    <a class=\"btn btn-profile-danger rounded-circle text-dark\" href=\"javascript:void(0);\" placement=\"top\" tooltip=\"{{'common.unassigned' | translate}}\">\r\n                                                        <img alt=\"Profile\" class=\"img-sm rounded-circle\" src=\"../assets/img/unassign.jpg\"/>\r\n                                                    </a>\r\n                                                </ng-container>\r\n                                                <ng-template #elseBlock2>\r\n                                                    <a [routerLink]=\"['/users/profile', defect.assign_member]\" class=\"btn btn-profile-danger rounded-circle text-dark\" placement=\"top\" tooltip=\"{{defect.assigned_firstname}} {{defect.assigned_lastname}}\">\r\n                                                        <img *ngIf=\"defect.assigned_avatar\" alt=\"Profile\" class=\"img-sm rounded-circle\" src=\"{{apiUrl}}/uploads/profile/{{defect.assigned_avatar}}\"/>\r\n                                                        <img *ngIf=\"!defect.assigned_avatar\" alt=\"Profile\" class=\"img-sm rounded-circle\" src=\"../assets/img/profile_small.jpg\"/>\r\n                                                    </a>\r\n                                                </ng-template>\r\n                                            </td>\r\n                                            <td class=\"budges-status\">\r\n                                                <ng-container *ngFor=\"let severity of ('defects.severities' | translate)\">\r\n                                                    <span *ngIf=\"severity.id == defect.severity\" class=\"{{severity.class}}\">{{severity.label}}</span>\r\n                                                </ng-container>\r\n                                            </td>\r\n                                            <td class=\"status-dropdown\">\r\n                                                <div class=\"overdue-td\">\r\n                                                    <ng-container *ngIf=\"getCheckPermission(defect); else elseBlock3\">\r\n                                                        <div class=\"btn-group\" dropdown>\r\n                                                            <button aria-controls=\"dropdown-basic\" class=\"btn dropdown-toggle select-btn-lg\" dropdownToggle id=\"button-basic\" type=\"button\">{{getTranslateStatus(defect.status) | translate}}&nbsp;<span class=\"caret\"></span>\r\n                                                            </button>\r\n                                                            <ul *dropdownMenu aria-labelledby=\"button-basic\" class=\"dropdown-menu animated fadeIn\" id=\"dropdown-basic\" role=\"menu\">\r\n                                                                <li *ngFor=\"let status of ('defects.status' | translate)\" role=\"menuitem\">\r\n                                                                    <a (click)=\"changeDefectStatus([defect.id], status);defect.status = status.id\" [ngClass]=\"{'active': defect.status == status.id}\" class=\"dropdown-item btn btn-sm {{status.class}}\">{{status.label}}</a>\r\n                                                                </li>\r\n                                                            </ul>\r\n                                                        </div>\r\n                                                    </ng-container>\r\n                                                    <ng-template #elseBlock3>\r\n                                                        <ng-container *ngFor=\"let status of ('defects.status' | translate)\">\r\n                                                            <div class=\"budges-status\">\r\n                                                                <span *ngIf=\"status.id == defect.status\" class=\"{{status.class}}\">{{status.label}}</span>\r\n                                                            </div>\r\n                                                        </ng-container>\r\n                                                    </ng-template>\r\n                                                    <ng-container *ngIf=\"defect.is_overdue\">\r\n                                                        <i aria-hidden=\"true\" class=\"fa fa-clock-o danger overdue-icon\" tooltip=\"{{'common.overdue' | translate}} : {{defect.is_overdue}} {{'common.days' | translate}}\"></i>\r\n                                                    </ng-container>\r\n                                                </div>\r\n                                            </td>\r\n                                            <td class=\"actions-dropdown\">\r\n                                                <div class=\"btn-group\" dropdown>\r\n                                                    <button aria-controls=\"dropdown-basic-1\" class=\"dropdown-toggle btn-action\" dropdownToggle id=\"button-basic-1\" type=\"button\">\r\n                                                        <i class=\"fa fa-ellipsis-v\"></i></button>\r\n                                                    <ul *dropdownMenu aria-labelledby=\"button-basic-1\" class=\"dropdown-menu animated fadeIn\" id=\"dropdown-basic-1\" role=\"menu\">\r\n                                                        <li *ngIf=\"getCheckPermission(defect)\" role=\"menuitem\">\r\n                                                            <a [routerLink]=\"['/defects/edit', defect.id]\" class=\"dropdown-item btn btn-edit btn-raised\" tooltip=\"{{'common.edit' | translate}}\"><i class=\"fa fa-pencil-square-o\"></i></a>\r\n                                                        </li>\r\n                                                        <li *ngIf=\"getCheckPermission(defect)\" role=\"menuitem\">\r\n                                                            <a (click)=\"deleteDefect(defect.id)\" class=\"dropdown-item btn btn-delete btn-raised\" tooltip=\"{{'common.delete' | translate}}\"><i class=\"fa fa-trash-o\"></i></a>\r\n                                                        </li>\r\n                                                    </ul>\r\n                                                </div>\r\n                                            </td>\r\n                                        </tr>\r\n                                        </tbody>\r\n                                        <tfoot *ngIf=\"defects?.length == 0\" class=\"tfoot_dt\">\r\n                                        <tr>\r\n                                            <td class=\"no-data-available text-center\" colspan=\"9\">{{'common.datatable.sEmptyTable' | translate}}</td>\r\n                                        </tr>\r\n                                        </tfoot>\r\n                                    </table>\r\n                                </div>\r\n                            </div>\r\n                        </div>\r\n                    </div>\r\n                </div>\r\n            </div>\r\n        </div>\r\n    </div>\r\n</section>\r\n");

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

/***/ "./src/app/core/services/defect-attachment.service.ts":
/*!************************************************************!*\
  !*** ./src/app/core/services/defect-attachment.service.ts ***!
  \************************************************************/
/*! exports provided: DefectAttachmentService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DefectAttachmentService", function() { return DefectAttachmentService; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../environments/environment */ "./src/environments/environment.ts");




var DefectAttachmentService = /** @class */ (function () {
    function DefectAttachmentService(http) {
        this.http = http;
        this.apiUrl = _environments_environment__WEBPACK_IMPORTED_MODULE_3__["environment"].apiUrl;
    }
    DefectAttachmentService.prototype.getAllAttachmentById = function (defectId) {
        return this.http.get(this.apiUrl + "/api/defect-attachment/" + defectId);
    };
    DefectAttachmentService.prototype.create = function (defectAttachment) {
        return this.http.post(this.apiUrl + "/api/defect-attachment", defectAttachment);
    };
    DefectAttachmentService.prototype.delete = function (id) {
        return this.http.delete(this.apiUrl + "/api/defect-attachment/" + id);
    };
    DefectAttachmentService.ctorParameters = function () { return [
        { type: _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClient"] }
    ]; };
    DefectAttachmentService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
            providedIn: 'root'
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClient"]])
    ], DefectAttachmentService);
    return DefectAttachmentService;
}());



/***/ }),

/***/ "./src/app/core/services/defect-comments.service.ts":
/*!**********************************************************!*\
  !*** ./src/app/core/services/defect-comments.service.ts ***!
  \**********************************************************/
/*! exports provided: DefectCommentsService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DefectCommentsService", function() { return DefectCommentsService; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../environments/environment */ "./src/environments/environment.ts");




var DefectCommentsService = /** @class */ (function () {
    function DefectCommentsService(http) {
        this.http = http;
        this.apiUrl = _environments_environment__WEBPACK_IMPORTED_MODULE_3__["environment"].apiUrl;
    }
    DefectCommentsService.prototype.create = function (defectComment) {
        return this.http.post(this.apiUrl + "/api/defect-comment", defectComment);
    };
    DefectCommentsService.prototype.update = function (defectComment) {
        return this.http.put(this.apiUrl + "/api/defect-comment/" + defectComment.id, defectComment);
    };
    DefectCommentsService.prototype.delete = function (id) {
        return this.http.delete(this.apiUrl + "/api/defect-comment/" + id);
    };
    DefectCommentsService.ctorParameters = function () { return [
        { type: _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClient"] }
    ]; };
    DefectCommentsService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
            providedIn: 'root'
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClient"]])
    ], DefectCommentsService);
    return DefectCommentsService;
}());



/***/ }),

/***/ "./src/app/modules/pm/defects/components/create-attachment-modal/create-attachment-modal.component.scss":
/*!**************************************************************************************************************!*\
  !*** ./src/app/modules/pm/defects/components/create-attachment-modal/create-attachment-modal.component.scss ***!
  \**************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL21vZHVsZXMvcG0vZGVmZWN0cy9jb21wb25lbnRzL2NyZWF0ZS1hdHRhY2htZW50LW1vZGFsL2NyZWF0ZS1hdHRhY2htZW50LW1vZGFsLmNvbXBvbmVudC5zY3NzIn0= */");

/***/ }),

/***/ "./src/app/modules/pm/defects/components/create-attachment-modal/create-attachment-modal.component.ts":
/*!************************************************************************************************************!*\
  !*** ./src/app/modules/pm/defects/components/create-attachment-modal/create-attachment-modal.component.ts ***!
  \************************************************************************************************************/
/*! exports provided: CreateAttachmentModalComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CreateAttachmentModalComponent", function() { return CreateAttachmentModalComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var ngx_bootstrap_modal__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ngx-bootstrap/modal */ "./node_modules/ngx-bootstrap/modal/fesm5/ngx-bootstrap-modal.js");
/* harmony import */ var ngx_toastr__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ngx-toastr */ "./node_modules/ngx-toastr/fesm5/ngx-toastr.js");
/* harmony import */ var _ngx_translate_core__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @ngx-translate/core */ "./node_modules/@ngx-translate/core/fesm5/ngx-translate-core.js");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! rxjs */ "./node_modules/rxjs/_esm5/index.js");
/* harmony import */ var _core_services_defect_attachment_service__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./../../../../../core/services/defect-attachment.service */ "./src/app/core/services/defect-attachment.service.ts");
/* harmony import */ var dropzone__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! dropzone */ "./node_modules/dropzone/dist/dropzone.js");
/* harmony import */ var dropzone__WEBPACK_IMPORTED_MODULE_8___default = /*#__PURE__*/__webpack_require__.n(dropzone__WEBPACK_IMPORTED_MODULE_8__);









var CreateAttachmentModalComponent = /** @class */ (function () {
    function CreateAttachmentModalComponent(translate, bsCreateAttachmentModalRef, formBuilder, toastr, defectAttachmentService) {
        this.translate = translate;
        this.bsCreateAttachmentModalRef = bsCreateAttachmentModalRef;
        this.formBuilder = formBuilder;
        this.toastr = toastr;
        this.defectAttachmentService = defectAttachmentService;
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
        this.onClose = new rxjs__WEBPACK_IMPORTED_MODULE_6__["Subject"]();
        this.loadForms();
    };
    CreateAttachmentModalComponent.prototype.loadForms = function () {
        var _this_1 = this;
        this.createAttachmentForm = this.formBuilder.group({
            defect_id: [this.defectId],
            file_name: ['', [_angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required, _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].maxLength(255)]],
            file: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required],
            file_extension: [this.fileName],
            file_description: ['']
        });
        setTimeout(function () {
            _this_1.loadDropzone();
        });
    };
    CreateAttachmentModalComponent.prototype.loadDropzone = function () {
        var that = this;
        new dropzone__WEBPACK_IMPORTED_MODULE_8__(this.pdfdropzone.nativeElement, {
            url: 'https://httpbin.org/post',
            maxFiles: 1,
            clickable: true,
            createImageThumbnails: true,
            init: function () {
                this.on('addedfile', function (file) {
                    var removeButton = dropzone__WEBPACK_IMPORTED_MODULE_8__["createElement"]('<button class=\'btn btn-sm btn-block\'>' + that.translate.instant('common.remove_file') + '</button>');
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
                    that.createAttachmentForm.patchValue({ file_extension: null });
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
        this.defectAttachmentService.create(this.createAttachmentForm.value)
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
        { type: _ngx_translate_core__WEBPACK_IMPORTED_MODULE_5__["TranslateService"] },
        { type: ngx_bootstrap_modal__WEBPACK_IMPORTED_MODULE_3__["BsModalRef"] },
        { type: _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormBuilder"] },
        { type: ngx_toastr__WEBPACK_IMPORTED_MODULE_4__["ToastrService"] },
        { type: _core_services_defect_attachment_service__WEBPACK_IMPORTED_MODULE_7__["DefectAttachmentService"] }
    ]; };
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewChild"])('pdfdropzone', { static: false }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", _angular_core__WEBPACK_IMPORTED_MODULE_1__["ElementRef"])
    ], CreateAttachmentModalComponent.prototype, "pdfdropzone", void 0);
    CreateAttachmentModalComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-create-attachment-modal',
            template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./create-attachment-modal.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/modules/pm/defects/components/create-attachment-modal/create-attachment-modal.component.html")).default,
            styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./create-attachment-modal.component.scss */ "./src/app/modules/pm/defects/components/create-attachment-modal/create-attachment-modal.component.scss")).default]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_ngx_translate_core__WEBPACK_IMPORTED_MODULE_5__["TranslateService"],
            ngx_bootstrap_modal__WEBPACK_IMPORTED_MODULE_3__["BsModalRef"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormBuilder"],
            ngx_toastr__WEBPACK_IMPORTED_MODULE_4__["ToastrService"],
            _core_services_defect_attachment_service__WEBPACK_IMPORTED_MODULE_7__["DefectAttachmentService"]])
    ], CreateAttachmentModalComponent);
    return CreateAttachmentModalComponent;
}());



/***/ }),

/***/ "./src/app/modules/pm/defects/components/defect-activities/defect-activities.component.scss":
/*!**************************************************************************************************!*\
  !*** ./src/app/modules/pm/defects/components/defect-activities/defect-activities.component.scss ***!
  \**************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL21vZHVsZXMvcG0vZGVmZWN0cy9jb21wb25lbnRzL2RlZmVjdC1hY3Rpdml0aWVzL2RlZmVjdC1hY3Rpdml0aWVzLmNvbXBvbmVudC5zY3NzIn0= */");

/***/ }),

/***/ "./src/app/modules/pm/defects/components/defect-activities/defect-activities.component.ts":
/*!************************************************************************************************!*\
  !*** ./src/app/modules/pm/defects/components/defect-activities/defect-activities.component.ts ***!
  \************************************************************************************************/
/*! exports provided: DefectActivitiesComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DefectActivitiesComponent", function() { return DefectActivitiesComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");


var DefectActivitiesComponent = /** @class */ (function () {
    function DefectActivitiesComponent() {
        this.scrollConfig = {};
    }
    DefectActivitiesComponent.prototype.ngOnInit = function () {
    };
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])(),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", Object)
    ], DefectActivitiesComponent.prototype, "defect", void 0);
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])(),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", Object)
    ], DefectActivitiesComponent.prototype, "loginUser", void 0);
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])(),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", Object)
    ], DefectActivitiesComponent.prototype, "apiUrl", void 0);
    DefectActivitiesComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-defect-activities',
            template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./defect-activities.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/modules/pm/defects/components/defect-activities/defect-activities.component.html")).default,
            styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./defect-activities.component.scss */ "./src/app/modules/pm/defects/components/defect-activities/defect-activities.component.scss")).default]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [])
    ], DefectActivitiesComponent);
    return DefectActivitiesComponent;
}());



/***/ }),

/***/ "./src/app/modules/pm/defects/components/defect-attachment/defect-attachment.component.scss":
/*!**************************************************************************************************!*\
  !*** ./src/app/modules/pm/defects/components/defect-attachment/defect-attachment.component.scss ***!
  \**************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL21vZHVsZXMvcG0vZGVmZWN0cy9jb21wb25lbnRzL2RlZmVjdC1hdHRhY2htZW50L2RlZmVjdC1hdHRhY2htZW50LmNvbXBvbmVudC5zY3NzIn0= */");

/***/ }),

/***/ "./src/app/modules/pm/defects/components/defect-attachment/defect-attachment.component.ts":
/*!************************************************************************************************!*\
  !*** ./src/app/modules/pm/defects/components/defect-attachment/defect-attachment.component.ts ***!
  \************************************************************************************************/
/*! exports provided: DefectAttachmentComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DefectAttachmentComponent", function() { return DefectAttachmentComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var ngx_bootstrap_modal__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ngx-bootstrap/modal */ "./node_modules/ngx-bootstrap/modal/fesm5/ngx-bootstrap-modal.js");
/* harmony import */ var ngx_toastr__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ngx-toastr */ "./node_modules/ngx-toastr/fesm5/ngx-toastr.js");
/* harmony import */ var _ngx_translate_core__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @ngx-translate/core */ "./node_modules/@ngx-translate/core/fesm5/ngx-translate-core.js");
/* harmony import */ var sweetalert2__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! sweetalert2 */ "./node_modules/sweetalert2/dist/sweetalert2.all.js");
/* harmony import */ var sweetalert2__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(sweetalert2__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var _core_services_defect_attachment_service__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../../../../../core/services/defect-attachment.service */ "./src/app/core/services/defect-attachment.service.ts");
/* harmony import */ var _components_create_attachment_modal_create_attachment_modal_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../../components/create-attachment-modal/create-attachment-modal.component */ "./src/app/modules/pm/defects/components/create-attachment-modal/create-attachment-modal.component.ts");









var DefectAttachmentComponent = /** @class */ (function () {
    function DefectAttachmentComponent(translate, toastr, modalService, route, defectAttachmentService) {
        this.translate = translate;
        this.toastr = toastr;
        this.modalService = modalService;
        this.route = route;
        this.defectAttachmentService = defectAttachmentService;
        this.modalConfigs = {
            animated: true,
            keyboard: true,
            backdrop: true,
            ignoreBackdropClick: false,
            class: 'inmodal modal-dialog-centered animated fadeIn',
            initialState: {
                defectId: this.route.snapshot.params.id,
            }
        };
        this.getAllAttachments(this.route.snapshot.params.id);
    }
    DefectAttachmentComponent.prototype.ngOnInit = function () {
    };
    DefectAttachmentComponent.prototype.getAllAttachments = function (defectId, isLoad) {
        var _this = this;
        if (isLoad === void 0) { isLoad = true; }
        this.defectAttachmentService.getAllAttachmentById(defectId).subscribe(function (data) {
            _this.attachments = data;
            _this.getFiles();
        });
    };
    DefectAttachmentComponent.prototype.getFiles = function () {
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
    DefectAttachmentComponent.prototype.openAttachmentCreateModal = function () {
        var _this = this;
        this.modalRef = this.modalService.show(_components_create_attachment_modal_create_attachment_modal_component__WEBPACK_IMPORTED_MODULE_8__["CreateAttachmentModalComponent"], this.modalConfigs);
        this.modalRef.content.event.subscribe(function (data) {
            _this.getAllAttachments(_this.defect.id, false);
        });
    };
    DefectAttachmentComponent.prototype.attachmentDelete = function (attachmentId) {
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
                _this.defectAttachmentService.delete(attachmentId).subscribe(function (data) {
                    _this.toastr.success(_this.translate.instant('attachments.messages.delete'), _this.translate.instant('defects.title'));
                    _this.getAllAttachments(_this.defect.id, false);
                });
            }
        });
    };
    DefectAttachmentComponent.ctorParameters = function () { return [
        { type: _ngx_translate_core__WEBPACK_IMPORTED_MODULE_5__["TranslateService"] },
        { type: ngx_toastr__WEBPACK_IMPORTED_MODULE_4__["ToastrService"] },
        { type: ngx_bootstrap_modal__WEBPACK_IMPORTED_MODULE_3__["BsModalService"] },
        { type: _angular_router__WEBPACK_IMPORTED_MODULE_2__["ActivatedRoute"] },
        { type: _core_services_defect_attachment_service__WEBPACK_IMPORTED_MODULE_7__["DefectAttachmentService"] }
    ]; };
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])(),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", Object)
    ], DefectAttachmentComponent.prototype, "defect", void 0);
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])(),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", Object)
    ], DefectAttachmentComponent.prototype, "loginUser", void 0);
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])(),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", Object)
    ], DefectAttachmentComponent.prototype, "permission", void 0);
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])(),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", Object)
    ], DefectAttachmentComponent.prototype, "apiUrl", void 0);
    DefectAttachmentComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-defect-attachment',
            template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./defect-attachment.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/modules/pm/defects/components/defect-attachment/defect-attachment.component.html")).default,
            styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./defect-attachment.component.scss */ "./src/app/modules/pm/defects/components/defect-attachment/defect-attachment.component.scss")).default]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_ngx_translate_core__WEBPACK_IMPORTED_MODULE_5__["TranslateService"],
            ngx_toastr__WEBPACK_IMPORTED_MODULE_4__["ToastrService"],
            ngx_bootstrap_modal__WEBPACK_IMPORTED_MODULE_3__["BsModalService"],
            _angular_router__WEBPACK_IMPORTED_MODULE_2__["ActivatedRoute"],
            _core_services_defect_attachment_service__WEBPACK_IMPORTED_MODULE_7__["DefectAttachmentService"]])
    ], DefectAttachmentComponent);
    return DefectAttachmentComponent;
}());



/***/ }),

/***/ "./src/app/modules/pm/defects/components/defect-comments/defect-comments.component.scss":
/*!**********************************************************************************************!*\
  !*** ./src/app/modules/pm/defects/components/defect-comments/defect-comments.component.scss ***!
  \**********************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL21vZHVsZXMvcG0vZGVmZWN0cy9jb21wb25lbnRzL2RlZmVjdC1jb21tZW50cy9kZWZlY3QtY29tbWVudHMuY29tcG9uZW50LnNjc3MifQ== */");

/***/ }),

/***/ "./src/app/modules/pm/defects/components/defect-comments/defect-comments.component.ts":
/*!********************************************************************************************!*\
  !*** ./src/app/modules/pm/defects/components/defect-comments/defect-comments.component.ts ***!
  \********************************************************************************************/
/*! exports provided: DefectCommentsComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DefectCommentsComponent", function() { return DefectCommentsComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var ngx_toastr__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ngx-toastr */ "./node_modules/ngx-toastr/fesm5/ngx-toastr.js");
/* harmony import */ var _ngx_translate_core__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @ngx-translate/core */ "./node_modules/@ngx-translate/core/fesm5/ngx-translate-core.js");
/* harmony import */ var sweetalert2__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! sweetalert2 */ "./node_modules/sweetalert2/dist/sweetalert2.all.js");
/* harmony import */ var sweetalert2__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(sweetalert2__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var _core_services_defect_service__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../../../../../core/services/defect.service */ "./src/app/core/services/defect.service.ts");
/* harmony import */ var _core_services_defect_comments_service__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../../../../../core/services/defect-comments.service */ "./src/app/core/services/defect-comments.service.ts");
/* harmony import */ var dropzone__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! dropzone */ "./node_modules/dropzone/dist/dropzone.js");
/* harmony import */ var dropzone__WEBPACK_IMPORTED_MODULE_9___default = /*#__PURE__*/__webpack_require__.n(dropzone__WEBPACK_IMPORTED_MODULE_9__);










var DefectCommentsComponent = /** @class */ (function () {
    function DefectCommentsComponent(translate, router, route, formBuilder, toastr, defectCommentsService, defectService) {
        this.translate = translate;
        this.router = router;
        this.route = route;
        this.formBuilder = formBuilder;
        this.toastr = toastr;
        this.defectCommentsService = defectCommentsService;
        this.defectService = defectService;
        this.isPageLoaded = false;
        this.isCommentFormSubmitted = false;
        this.isReplayFormSubmitted = false;
        this.parentChild = [];
        this.selectedFiles = [];
        this.defectId = this.route.snapshot.params.id;
        this.customClass = 'comment-collapse';
        this.oneAtATime = true;
    }
    Object.defineProperty(DefectCommentsComponent.prototype, "commentControl", {
        get: function () {
            return this.defectCommentsForm.controls;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(DefectCommentsComponent.prototype, "replyCommentControl", {
        get: function () {
            return this.defectCommentsReplyForm.controls;
        },
        enumerable: true,
        configurable: true
    });
    DefectCommentsComponent.prototype.ngOnInit = function () {
        var _this_1 = this;
        this.loadForms();
        this.getComment(this.defectId);
        this.loadReplyForm();
        setTimeout(function () {
            _this_1.loadDropzone();
        });
    };
    DefectCommentsComponent.prototype.loadForms = function () {
        var that = this;
        this.defectCommentsForm = this.formBuilder.group({
            defect_id: [this.defectId],
            comment: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required],
            files: [null]
        });
    };
    DefectCommentsComponent.prototype.loadReplyForm = function () {
        this.defectCommentsReplyForm = this.formBuilder.group({
            defect_id: [this.defectId],
            replay_comment: [''],
            parent_id: [null],
        });
    };
    DefectCommentsComponent.prototype.loadDropzone = function () {
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
    DefectCommentsComponent.prototype.onSubmit = function () {
        var _this_1 = this;
        this.isCommentFormSubmitted = true;
        if (this.defectCommentsForm.invalid) {
            return;
        }
        this.defectCommentsForm.patchValue({ files: this.selectedFiles });
        this.defectCommentsService.create(this.defectCommentsForm.value).subscribe(function (data) {
            _this_1.toastr.success(_this_1.translate.instant('comments.messages.create'), _this_1.translate.instant('comments.title'));
            _this_1.dropzoneObj.removeAllFiles();
            _this_1.getComment(_this_1.defectId);
            _this_1.commentFormReset();
            _this_1.loadForms();
        });
    };
    DefectCommentsComponent.prototype.replyFormReset = function () {
        this.defectCommentsReplyForm.patchValue({ replay_comment: '' });
        this.defectCommentsReplyForm.patchValue({ files: '' });
        this.defectCommentsReplyForm.patchValue({ attachments: '' });
    };
    DefectCommentsComponent.prototype.commentFormReset = function () {
        this.isCommentFormSubmitted = false;
        this.commentControl.comment.reset();
        this.defectCommentsForm.patchValue({ attachments: null });
    };
    DefectCommentsComponent.prototype.showReplayCommentBox = function (id) {
        $('#comment_replay_' + id).removeClass('d-none');
    };
    DefectCommentsComponent.prototype.getComment = function (defectId) {
        var _this_1 = this;
        this.defectService.getById(defectId).subscribe(function (data) {
            _this_1.defectData = data;
            _this_1.defectData.comments = _this_1.getNestedChildren(_this_1.defectData.comments, 0);
            _this_1.comments = _this_1.defectData.comments;
        });
    };
    DefectCommentsComponent.prototype.getNestedChildren = function (comment, parent) {
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
    DefectCommentsComponent.prototype.postReplayComment = function (comment) {
        var _this_1 = this;
        if (this.defectCommentsReplyForm.value.replay_comment) {
            this.isReplayFormSubmitted = true;
            comment.parent_id = comment.id;
            comment.files = '';
            comment.comment = this.defectCommentsReplyForm.value.replay_comment;
            this.defectCommentsReplyForm.patchValue({ attachments: '' });
            var replyCommentValues = {
                comment: this.defectCommentsReplyForm.value.replay_comment,
                parent_id: comment.parent_id,
                defect_id: comment.defect_id,
                user: comment.user,
                user_id: comment.user_id,
                files: '',
                attachments: '',
                replay_comment: this.defectCommentsReplyForm.value.replay_comment
            };
            if (this.defectCommentsReplyForm.invalid) {
                return;
            }
            this.defectCommentsService.create(replyCommentValues)
                .subscribe(function (resp) {
                _this_1.toastr.success(_this_1.translate.instant('comments.messages.create'), _this_1.translate.instant('comments.title'));
                _this_1.getComment(_this_1.defectId);
                _this_1.replyFormReset();
                _this_1.loadForms();
            });
        }
        else {
            this.toastr.error(this.translate.instant('comments.create.error_messages.message4'), this.translate.instant('comments.title'));
            return false;
        }
    };
    DefectCommentsComponent.prototype.commentDelete = function (commentId) {
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
                _this_1.defectCommentsService.delete(commentId)
                    .subscribe(function (data) {
                    _this_1.toastr.success(_this_1.translate.instant('comments.messages.delete'), _this_1.translate.instant('defects.title'));
                    _this_1.getComment(_this_1.defectId);
                });
            }
        });
    };
    DefectCommentsComponent.prototype.saveComments = function (comment, index, value) {
        var _this_1 = this;
        comment[index] = value;
        this.defectCommentsService.update(comment).subscribe(function (data) {
            _this_1.toastr.success(_this_1.translate.instant('comments.messages.update'), _this_1.translate.instant('defects.title'));
            _this_1.getComment(_this_1.defectId);
        });
    };
    DefectCommentsComponent.ctorParameters = function () { return [
        { type: _ngx_translate_core__WEBPACK_IMPORTED_MODULE_5__["TranslateService"] },
        { type: _angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"] },
        { type: _angular_router__WEBPACK_IMPORTED_MODULE_3__["ActivatedRoute"] },
        { type: _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormBuilder"] },
        { type: ngx_toastr__WEBPACK_IMPORTED_MODULE_4__["ToastrService"] },
        { type: _core_services_defect_comments_service__WEBPACK_IMPORTED_MODULE_8__["DefectCommentsService"] },
        { type: _core_services_defect_service__WEBPACK_IMPORTED_MODULE_7__["DefectService"] }
    ]; };
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])(),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", Object)
    ], DefectCommentsComponent.prototype, "permission", void 0);
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])(),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", Object)
    ], DefectCommentsComponent.prototype, "apiUrl", void 0);
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])(),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", Object)
    ], DefectCommentsComponent.prototype, "loginUser", void 0);
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewChild"])('commentdropzone', { static: false }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", _angular_core__WEBPACK_IMPORTED_MODULE_1__["ElementRef"])
    ], DefectCommentsComponent.prototype, "commentdropzone", void 0);
    DefectCommentsComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-defect-comments',
            template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./defect-comments.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/modules/pm/defects/components/defect-comments/defect-comments.component.html")).default,
            styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./defect-comments.component.scss */ "./src/app/modules/pm/defects/components/defect-comments/defect-comments.component.scss")).default]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_ngx_translate_core__WEBPACK_IMPORTED_MODULE_5__["TranslateService"],
            _angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"],
            _angular_router__WEBPACK_IMPORTED_MODULE_3__["ActivatedRoute"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormBuilder"],
            ngx_toastr__WEBPACK_IMPORTED_MODULE_4__["ToastrService"],
            _core_services_defect_comments_service__WEBPACK_IMPORTED_MODULE_8__["DefectCommentsService"],
            _core_services_defect_service__WEBPACK_IMPORTED_MODULE_7__["DefectService"]])
    ], DefectCommentsComponent);
    return DefectCommentsComponent;
}());



/***/ }),

/***/ "./src/app/modules/pm/defects/components/defect-details/defect-details.component.scss":
/*!********************************************************************************************!*\
  !*** ./src/app/modules/pm/defects/components/defect-details/defect-details.component.scss ***!
  \********************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL21vZHVsZXMvcG0vZGVmZWN0cy9jb21wb25lbnRzL2RlZmVjdC1kZXRhaWxzL2RlZmVjdC1kZXRhaWxzLmNvbXBvbmVudC5zY3NzIn0= */");

/***/ }),

/***/ "./src/app/modules/pm/defects/components/defect-details/defect-details.component.ts":
/*!******************************************************************************************!*\
  !*** ./src/app/modules/pm/defects/components/defect-details/defect-details.component.ts ***!
  \******************************************************************************************/
/*! exports provided: DefectDetailsComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DefectDetailsComponent", function() { return DefectDetailsComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var ngx_toastr__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ngx-toastr */ "./node_modules/ngx-toastr/fesm5/ngx-toastr.js");
/* harmony import */ var _ngx_translate_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @ngx-translate/core */ "./node_modules/@ngx-translate/core/fesm5/ngx-translate-core.js");
/* harmony import */ var _core_services_defect_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../../../../core/services/defect.service */ "./src/app/core/services/defect.service.ts");
/* harmony import */ var _core_helpers_pm_helper__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./../../../../../core/helpers/pm-helper */ "./src/app/core/helpers/pm-helper.ts");






var DefectDetailsComponent = /** @class */ (function () {
    function DefectDetailsComponent(translate, toastr, defectService) {
        this.translate = translate;
        this.toastr = toastr;
        this.defectService = defectService;
        this.defectstatusKeyValue = _core_helpers_pm_helper__WEBPACK_IMPORTED_MODULE_5__["defect_status_key_value"];
        this.defectSeveritiesKeyValue = _core_helpers_pm_helper__WEBPACK_IMPORTED_MODULE_5__["defect_severity_key_value"];
        this.isDefectTab = 1;
        this.activeDefectTab = '1';
    }
    DefectDetailsComponent.prototype.ngOnInit = function () {
    };
    DefectDetailsComponent.prototype.setActiveDefectTab = function ($event) {
        this.activeDefectTab = $event.id;
    };
    DefectDetailsComponent.prototype.getActiveDefectTab = function (tab) {
        return this.activeDefectTab === tab;
    };
    DefectDetailsComponent.prototype.getDefectById = function (defectId) {
        var _this = this;
        this.defectService.getById(defectId).subscribe(function (data) {
            _this.defect = data;
        });
    };
    DefectDetailsComponent.prototype.getTranslateStatus = function (statusKey) {
        return this.defectstatusKeyValue[statusKey];
    };
    DefectDetailsComponent.prototype.getTranslateSeverities = function (statusKey) {
        return this.defectSeveritiesKeyValue[statusKey];
    };
    DefectDetailsComponent.prototype.changeDefectStatus = function (defectId, status) {
        var _this = this;
        this.defectService.changeStatus({
            id: defectId,
            status: status.id
        }).subscribe(function (data) {
            _this.toastr.success(_this.translate.instant('defects.messages.status'), _this.translate.instant('defects.title'));
            _this.getDefectById(_this.defect.id);
        });
    };
    DefectDetailsComponent.prototype.changeDefectSeverity = function (defectId, severity) {
        var _this = this;
        this.defectService.changeSeverity({
            id: defectId,
            severity: severity.id
        }).subscribe(function (data) {
            _this.toastr.success(_this.translate.instant('defects.messages.severity'), _this.translate.instant('defects.title'));
            _this.getDefectById(_this.defect.id);
        });
    };
    DefectDetailsComponent.prototype.getParseArray = function (string) {
        return JSON.parse(string);
    };
    DefectDetailsComponent.prototype.saveDefectDetail = function (name, value) {
        var _this = this;
        this.defect[name] = value;
        this.defectService.update(this.defect).subscribe(function (data) {
            _this.toastr.success(_this.translate.instant('defects.messages.update'), _this.translate.instant('defects.title'));
            _this.getDefectById(_this.defect.id);
        });
    };
    DefectDetailsComponent.ctorParameters = function () { return [
        { type: _ngx_translate_core__WEBPACK_IMPORTED_MODULE_3__["TranslateService"] },
        { type: ngx_toastr__WEBPACK_IMPORTED_MODULE_2__["ToastrService"] },
        { type: _core_services_defect_service__WEBPACK_IMPORTED_MODULE_4__["DefectService"] }
    ]; };
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])(),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", Object)
    ], DefectDetailsComponent.prototype, "defect", void 0);
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])(),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", Object)
    ], DefectDetailsComponent.prototype, "loginUser", void 0);
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])(),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", Object)
    ], DefectDetailsComponent.prototype, "permission", void 0);
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])(),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", Object)
    ], DefectDetailsComponent.prototype, "apiUrl", void 0);
    DefectDetailsComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-defect-details',
            template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./defect-details.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/modules/pm/defects/components/defect-details/defect-details.component.html")).default,
            styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./defect-details.component.scss */ "./src/app/modules/pm/defects/components/defect-details/defect-details.component.scss")).default]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_ngx_translate_core__WEBPACK_IMPORTED_MODULE_3__["TranslateService"],
            ngx_toastr__WEBPACK_IMPORTED_MODULE_2__["ToastrService"],
            _core_services_defect_service__WEBPACK_IMPORTED_MODULE_4__["DefectService"]])
    ], DefectDetailsComponent);
    return DefectDetailsComponent;
}());



/***/ }),

/***/ "./src/app/modules/pm/defects/components/defect-history/defect-history.component.scss":
/*!********************************************************************************************!*\
  !*** ./src/app/modules/pm/defects/components/defect-history/defect-history.component.scss ***!
  \********************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL21vZHVsZXMvcG0vZGVmZWN0cy9jb21wb25lbnRzL2RlZmVjdC1oaXN0b3J5L2RlZmVjdC1oaXN0b3J5LmNvbXBvbmVudC5zY3NzIn0= */");

/***/ }),

/***/ "./src/app/modules/pm/defects/components/defect-history/defect-history.component.ts":
/*!******************************************************************************************!*\
  !*** ./src/app/modules/pm/defects/components/defect-history/defect-history.component.ts ***!
  \******************************************************************************************/
/*! exports provided: DefectHistoryComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DefectHistoryComponent", function() { return DefectHistoryComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _ngx_translate_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @ngx-translate/core */ "./node_modules/@ngx-translate/core/fesm5/ngx-translate-core.js");
/* harmony import */ var _core_services_user_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../../../../core/services/user.service */ "./src/app/core/services/user.service.ts");





var DefectHistoryComponent = /** @class */ (function () {
    function DefectHistoryComponent(translate, route, userService) {
        this.translate = translate;
        this.route = route;
        this.userService = userService;
        this.dtOptions = {};
        this.userData = [];
        this.userLists = [];
    }
    DefectHistoryComponent.prototype.ngOnInit = function () {
        this.getUserIdName();
        this.loadDatatable();
    };
    DefectHistoryComponent.prototype.loadDatatable = function () {
        var that = this;
        this.dtOptions = {
            pagingType: 'full_numbers',
            pageLength: that.loginUser.settings.tables_pagination_limit,
            serverSide: false,
            processing: false,
            dom: '<"html5buttons"B>ltfrtip',
            order: [0],
            buttons: [{
                    extend: 'csv',
                    title: this.translate.instant('histories.title'),
                    className: 'btn btn-datatable-gredient',
                }, {
                    extend: 'excel',
                    title: this.translate.instant('histories.title'),
                    className: 'btn btn-datatable-gredient',
                }, {
                    extend: 'pdf',
                    title: this.translate.instant('histories.title'),
                    className: 'btn btn-datatable-gredient',
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
            }
        };
    };
    DefectHistoryComponent.prototype.getUserIdName = function () {
        var _this = this;
        this.userService.getUserIdName().subscribe(function (data) {
            _this.userData = data;
            _this.setUsers();
        });
    };
    DefectHistoryComponent.prototype.setUsers = function () {
        this.userLists = [];
        for (var iRow in this.userData) {
            this.userLists[this.userData[iRow].id] = {
                'name': this.userData[iRow].firstname + ' ' + this.userData[iRow].lastname,
                'avatar': this.userData[iRow].avatar,
            };
        }
    };
    DefectHistoryComponent.ctorParameters = function () { return [
        { type: _ngx_translate_core__WEBPACK_IMPORTED_MODULE_3__["TranslateService"] },
        { type: _angular_router__WEBPACK_IMPORTED_MODULE_2__["ActivatedRoute"] },
        { type: _core_services_user_service__WEBPACK_IMPORTED_MODULE_4__["UserService"] }
    ]; };
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])(),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", Object)
    ], DefectHistoryComponent.prototype, "defect", void 0);
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])(),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", Object)
    ], DefectHistoryComponent.prototype, "loginUser", void 0);
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])(),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", Object)
    ], DefectHistoryComponent.prototype, "apiUrl", void 0);
    DefectHistoryComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-defect-history',
            template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./defect-history.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/modules/pm/defects/components/defect-history/defect-history.component.html")).default,
            styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./defect-history.component.scss */ "./src/app/modules/pm/defects/components/defect-history/defect-history.component.scss")).default]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_ngx_translate_core__WEBPACK_IMPORTED_MODULE_3__["TranslateService"],
            _angular_router__WEBPACK_IMPORTED_MODULE_2__["ActivatedRoute"],
            _core_services_user_service__WEBPACK_IMPORTED_MODULE_4__["UserService"]])
    ], DefectHistoryComponent);
    return DefectHistoryComponent;
}());



/***/ }),

/***/ "./src/app/modules/pm/defects/defects-routing.module.ts":
/*!**************************************************************!*\
  !*** ./src/app/modules/pm/defects/defects-routing.module.ts ***!
  \**************************************************************/
/*! exports provided: DefectsRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DefectsRoutingModule", function() { return DefectsRoutingModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var ngx_permissions__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ngx-permissions */ "./node_modules/ngx-permissions/ngx-permissions.umd.js");
/* harmony import */ var ngx_permissions__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(ngx_permissions__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _pages_defect_list_defect_list_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./pages/defect-list/defect-list.component */ "./src/app/modules/pm/defects/pages/defect-list/defect-list.component.ts");
/* harmony import */ var _pages_defect_create_defect_create_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./pages/defect-create/defect-create.component */ "./src/app/modules/pm/defects/pages/defect-create/defect-create.component.ts");
/* harmony import */ var _pages_defect_edit_defect_edit_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./pages/defect-edit/defect-edit.component */ "./src/app/modules/pm/defects/pages/defect-edit/defect-edit.component.ts");
/* harmony import */ var _pages_defect_detail_defect_detail_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./pages/defect-detail/defect-detail.component */ "./src/app/modules/pm/defects/pages/defect-detail/defect-detail.component.ts");
/* harmony import */ var _pages_defect_kanban_defect_kanban_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./pages/defect-kanban/defect-kanban.component */ "./src/app/modules/pm/defects/pages/defect-kanban/defect-kanban.component.ts");









var routes = [
    {
        path: '',
        children: [
            {
                path: '',
                canActivate: [ngx_permissions__WEBPACK_IMPORTED_MODULE_3__["NgxPermissionsGuard"]],
                component: _pages_defect_list_defect_list_component__WEBPACK_IMPORTED_MODULE_4__["DefectListComponent"],
                data: {
                    permissions: {
                        only: ['admin', 'super_admin', 'defects_view']
                    }
                }
            },
            {
                path: 'create',
                canActivate: [ngx_permissions__WEBPACK_IMPORTED_MODULE_3__["NgxPermissionsGuard"]],
                component: _pages_defect_create_defect_create_component__WEBPACK_IMPORTED_MODULE_5__["DefectCreateComponent"],
                data: {
                    breadcrumbs: {
                        text: 'common.create',
                        icon: 'fa fa-bug',
                        show: true,
                        isHome: true
                    },
                    permissions: {
                        only: ['admin', 'super_admin', 'defects_create']
                    }
                }
            },
            {
                path: 'edit/:id',
                canActivate: [ngx_permissions__WEBPACK_IMPORTED_MODULE_3__["NgxPermissionsGuard"]],
                component: _pages_defect_edit_defect_edit_component__WEBPACK_IMPORTED_MODULE_6__["DefectEditComponent"],
                data: {
                    breadcrumbs: {
                        text: 'common.edit',
                        icon: 'fa fa-bug',
                        hasParams: true,
                        show: true,
                        isHome: true
                    },
                    permissions: {
                        only: ['admin', 'super_admin', 'defects_edit']
                    }
                }
            },
            {
                path: 'detail/:id',
                canActivate: [ngx_permissions__WEBPACK_IMPORTED_MODULE_3__["NgxPermissionsGuard"]],
                component: _pages_defect_detail_defect_detail_component__WEBPACK_IMPORTED_MODULE_7__["DefectDetailComponent"],
                data: {
                    breadcrumbs: {
                        text: 'common.detail',
                        icon: 'fa fa-bug',
                        hasParams: true,
                        show: true,
                        isHome: true
                    },
                    permissions: {
                        only: ['admin', 'super_admin', 'defects_view']
                    }
                }
            },
            {
                path: 'kanban',
                canActivate: [ngx_permissions__WEBPACK_IMPORTED_MODULE_3__["NgxPermissionsGuard"]],
                component: _pages_defect_kanban_defect_kanban_component__WEBPACK_IMPORTED_MODULE_8__["DefectKanbanComponent"],
                data: {
                    breadcrumbs: {
                        text: 'common.kanban',
                        icon: 'fa fa-bug',
                        hasParams: true,
                        show: true,
                        isHome: true
                    },
                    permissions: {
                        only: ['admin', 'super_admin', 'defects_view']
                    }
                }
            },
            {
                path: ':status/:defectFilterKey',
                component: _pages_defect_list_defect_list_component__WEBPACK_IMPORTED_MODULE_4__["DefectListComponent"]
            }
        ]
    }
];
var DefectsRoutingModule = /** @class */ (function () {
    function DefectsRoutingModule() {
    }
    DefectsRoutingModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)],
            exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]]
        })
    ], DefectsRoutingModule);
    return DefectsRoutingModule;
}());



/***/ }),

/***/ "./src/app/modules/pm/defects/defects.module.ts":
/*!******************************************************!*\
  !*** ./src/app/modules/pm/defects/defects.module.ts ***!
  \******************************************************/
/*! exports provided: DefectsModule, HttpLoaderFactory */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DefectsModule", function() { return DefectsModule; });
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
/* harmony import */ var ngx_order_pipe__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ngx-order-pipe */ "./node_modules/ngx-order-pipe/fesm2015/ngx-order-pipe.js");
/* harmony import */ var _ngx_translate_core__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! @ngx-translate/core */ "./node_modules/@ngx-translate/core/fesm5/ngx-translate-core.js");
/* harmony import */ var _angular_cdk_drag_drop__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! @angular/cdk/drag-drop */ "./node_modules/@angular/cdk/esm5/drag-drop.es5.js");
/* harmony import */ var _ngx_translate_http_loader__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! @ngx-translate/http-loader */ "./node_modules/@ngx-translate/http-loader/fesm5/ngx-translate-http-loader.js");
/* harmony import */ var angular_datatables__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! angular-datatables */ "./node_modules/angular-datatables/index.js");
/* harmony import */ var angular_draggable_droppable__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! angular-draggable-droppable */ "./node_modules/angular-draggable-droppable/fesm5/angular-draggable-droppable.js");
/* harmony import */ var angular_resizable_element__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! angular-resizable-element */ "./node_modules/angular-resizable-element/fesm5/angular-resizable-element.js");
/* harmony import */ var _defects_routing_module__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(/*! ./defects-routing.module */ "./src/app/modules/pm/defects/defects-routing.module.ts");
/* harmony import */ var _shared_shared_module__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__(/*! ../../../shared/shared.module */ "./src/app/shared/shared.module.ts");
/* harmony import */ var _admin_todo_todo_module__WEBPACK_IMPORTED_MODULE_21__ = __webpack_require__(/*! ../../admin/todo/todo.module */ "./src/app/modules/admin/todo/todo.module.ts");
/* harmony import */ var _timesheet_timesheet_module__WEBPACK_IMPORTED_MODULE_22__ = __webpack_require__(/*! ../../timesheet/timesheet.module */ "./src/app/modules/timesheet/timesheet.module.ts");
/* harmony import */ var _pages_defect_create_defect_create_component__WEBPACK_IMPORTED_MODULE_23__ = __webpack_require__(/*! ./pages/defect-create/defect-create.component */ "./src/app/modules/pm/defects/pages/defect-create/defect-create.component.ts");
/* harmony import */ var _pages_defect_edit_defect_edit_component__WEBPACK_IMPORTED_MODULE_24__ = __webpack_require__(/*! ./pages/defect-edit/defect-edit.component */ "./src/app/modules/pm/defects/pages/defect-edit/defect-edit.component.ts");
/* harmony import */ var _pages_defect_list_defect_list_component__WEBPACK_IMPORTED_MODULE_25__ = __webpack_require__(/*! ./pages/defect-list/defect-list.component */ "./src/app/modules/pm/defects/pages/defect-list/defect-list.component.ts");
/* harmony import */ var _pages_defect_detail_defect_detail_component__WEBPACK_IMPORTED_MODULE_26__ = __webpack_require__(/*! ./pages/defect-detail/defect-detail.component */ "./src/app/modules/pm/defects/pages/defect-detail/defect-detail.component.ts");
/* harmony import */ var _components_defect_details_defect_details_component__WEBPACK_IMPORTED_MODULE_27__ = __webpack_require__(/*! ./components/defect-details/defect-details.component */ "./src/app/modules/pm/defects/components/defect-details/defect-details.component.ts");
/* harmony import */ var _components_defect_comments_defect_comments_component__WEBPACK_IMPORTED_MODULE_28__ = __webpack_require__(/*! ./components/defect-comments/defect-comments.component */ "./src/app/modules/pm/defects/components/defect-comments/defect-comments.component.ts");
/* harmony import */ var _components_defect_attachment_defect_attachment_component__WEBPACK_IMPORTED_MODULE_29__ = __webpack_require__(/*! ./components/defect-attachment/defect-attachment.component */ "./src/app/modules/pm/defects/components/defect-attachment/defect-attachment.component.ts");
/* harmony import */ var _components_defect_activities_defect_activities_component__WEBPACK_IMPORTED_MODULE_30__ = __webpack_require__(/*! ./components/defect-activities/defect-activities.component */ "./src/app/modules/pm/defects/components/defect-activities/defect-activities.component.ts");
/* harmony import */ var _components_defect_history_defect_history_component__WEBPACK_IMPORTED_MODULE_31__ = __webpack_require__(/*! ./components/defect-history/defect-history.component */ "./src/app/modules/pm/defects/components/defect-history/defect-history.component.ts");
/* harmony import */ var _components_create_attachment_modal_create_attachment_modal_component__WEBPACK_IMPORTED_MODULE_32__ = __webpack_require__(/*! ./components/create-attachment-modal/create-attachment-modal.component */ "./src/app/modules/pm/defects/components/create-attachment-modal/create-attachment-modal.component.ts");
/* harmony import */ var _pages_defect_kanban_defect_kanban_component__WEBPACK_IMPORTED_MODULE_33__ = __webpack_require__(/*! ./pages/defect-kanban/defect-kanban.component */ "./src/app/modules/pm/defects/pages/defect-kanban/defect-kanban.component.ts");


































var DefectsModule = /** @class */ (function () {
    function DefectsModule() {
    }
    DefectsModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            declarations: [
                _pages_defect_create_defect_create_component__WEBPACK_IMPORTED_MODULE_23__["DefectCreateComponent"],
                _pages_defect_edit_defect_edit_component__WEBPACK_IMPORTED_MODULE_24__["DefectEditComponent"],
                _pages_defect_list_defect_list_component__WEBPACK_IMPORTED_MODULE_25__["DefectListComponent"],
                _pages_defect_detail_defect_detail_component__WEBPACK_IMPORTED_MODULE_26__["DefectDetailComponent"],
                _components_defect_details_defect_details_component__WEBPACK_IMPORTED_MODULE_27__["DefectDetailsComponent"],
                _components_defect_comments_defect_comments_component__WEBPACK_IMPORTED_MODULE_28__["DefectCommentsComponent"],
                _components_defect_attachment_defect_attachment_component__WEBPACK_IMPORTED_MODULE_29__["DefectAttachmentComponent"],
                _components_defect_activities_defect_activities_component__WEBPACK_IMPORTED_MODULE_30__["DefectActivitiesComponent"],
                _components_defect_history_defect_history_component__WEBPACK_IMPORTED_MODULE_31__["DefectHistoryComponent"],
                _components_create_attachment_modal_create_attachment_modal_component__WEBPACK_IMPORTED_MODULE_32__["CreateAttachmentModalComponent"],
                _pages_defect_kanban_defect_kanban_component__WEBPACK_IMPORTED_MODULE_33__["DefectKanbanComponent"]
            ],
            imports: [
                _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
                _defects_routing_module__WEBPACK_IMPORTED_MODULE_19__["DefectsRoutingModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_4__["FormsModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_4__["ReactiveFormsModule"],
                _ng_select_ng_select__WEBPACK_IMPORTED_MODULE_8__["NgSelectModule"],
                ngx_bootstrap__WEBPACK_IMPORTED_MODULE_5__["BsDropdownModule"],
                angular_datatables__WEBPACK_IMPORTED_MODULE_16__["DataTablesModule"],
                ngx_export_as__WEBPACK_IMPORTED_MODULE_7__["ExportAsModule"],
                ngx_bootstrap__WEBPACK_IMPORTED_MODULE_5__["BsDropdownModule"],
                ngx_editor__WEBPACK_IMPORTED_MODULE_9__["NgxEditorModule"],
                angular_draggable_droppable__WEBPACK_IMPORTED_MODULE_17__["DragAndDropModule"],
                angular_resizable_element__WEBPACK_IMPORTED_MODULE_18__["ResizableModule"],
                _angular_cdk_drag_drop__WEBPACK_IMPORTED_MODULE_14__["DragDropModule"],
                ngx_order_pipe__WEBPACK_IMPORTED_MODULE_12__["OrderModule"],
                ngx_perfect_scrollbar__WEBPACK_IMPORTED_MODULE_6__["PerfectScrollbarModule"],
                ngx_bootstrap__WEBPACK_IMPORTED_MODULE_5__["ButtonsModule"].forRoot(),
                ngx_bootstrap_progressbar__WEBPACK_IMPORTED_MODULE_10__["ProgressbarModule"].forRoot(),
                ngx_permissions__WEBPACK_IMPORTED_MODULE_11__["NgxPermissionsModule"],
                ngx_bootstrap__WEBPACK_IMPORTED_MODULE_5__["TooltipModule"].forRoot(),
                ngx_bootstrap__WEBPACK_IMPORTED_MODULE_5__["DatepickerModule"].forRoot(),
                ngx_bootstrap__WEBPACK_IMPORTED_MODULE_5__["BsDatepickerModule"].forRoot(),
                ngx_bootstrap__WEBPACK_IMPORTED_MODULE_5__["ModalModule"].forRoot(),
                ngx_bootstrap__WEBPACK_IMPORTED_MODULE_5__["TabsModule"].forRoot(),
                ngx_bootstrap__WEBPACK_IMPORTED_MODULE_5__["AccordionModule"].forRoot(),
                _ngx_translate_core__WEBPACK_IMPORTED_MODULE_13__["TranslateModule"].forChild({
                    loader: {
                        provide: _ngx_translate_core__WEBPACK_IMPORTED_MODULE_13__["TranslateLoader"],
                        useFactory: (HttpLoaderFactory),
                        deps: [_angular_common_http__WEBPACK_IMPORTED_MODULE_3__["HttpClient"]]
                    }
                }),
                _admin_todo_todo_module__WEBPACK_IMPORTED_MODULE_21__["TodoModule"],
                _timesheet_timesheet_module__WEBPACK_IMPORTED_MODULE_22__["TimesheetModule"],
                _shared_shared_module__WEBPACK_IMPORTED_MODULE_20__["SharedModule"]
            ],
            entryComponents: [_components_create_attachment_modal_create_attachment_modal_component__WEBPACK_IMPORTED_MODULE_32__["CreateAttachmentModalComponent"]]
        })
    ], DefectsModule);
    return DefectsModule;
}());

// Required for AOT compilation
function HttpLoaderFactory(http) {
    return new _ngx_translate_http_loader__WEBPACK_IMPORTED_MODULE_15__["TranslateHttpLoader"](http, './assets/i18n/', '.json');
}


/***/ }),

/***/ "./src/app/modules/pm/defects/pages/defect-create/defect-create.component.scss":
/*!*************************************************************************************!*\
  !*** ./src/app/modules/pm/defects/pages/defect-create/defect-create.component.scss ***!
  \*************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL21vZHVsZXMvcG0vZGVmZWN0cy9wYWdlcy9kZWZlY3QtY3JlYXRlL2RlZmVjdC1jcmVhdGUuY29tcG9uZW50LnNjc3MifQ== */");

/***/ }),

/***/ "./src/app/modules/pm/defects/pages/defect-create/defect-create.component.ts":
/*!***********************************************************************************!*\
  !*** ./src/app/modules/pm/defects/pages/defect-create/defect-create.component.ts ***!
  \***********************************************************************************/
/*! exports provided: DefectCreateComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DefectCreateComponent", function() { return DefectCreateComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _ngx_translate_core__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @ngx-translate/core */ "./node_modules/@ngx-translate/core/fesm5/ngx-translate-core.js");
/* harmony import */ var ngx_toastr__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ngx-toastr */ "./node_modules/ngx-toastr/fesm5/ngx-toastr.js");
/* harmony import */ var _core_services_team_service__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../../../../../core/services/team.service */ "./src/app/core/services/team.service.ts");
/* harmony import */ var _core_services_project_service__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../../../../../core/services/project.service */ "./src/app/core/services/project.service.ts");
/* harmony import */ var _core_services_defect_service__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../../../../../core/services/defect.service */ "./src/app/core/services/defect.service.ts");
/* harmony import */ var _core_services_custom_fields_service__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ../../../../../core/services/custom-fields.service */ "./src/app/core/services/custom-fields.service.ts");
/* harmony import */ var dropzone__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! dropzone */ "./node_modules/dropzone/dist/dropzone.js");
/* harmony import */ var dropzone__WEBPACK_IMPORTED_MODULE_11___default = /*#__PURE__*/__webpack_require__.n(dropzone__WEBPACK_IMPORTED_MODULE_11__);












var DefectCreateComponent = /** @class */ (function () {
    function DefectCreateComponent(translate, datepipe, router, formBuilder, toastr, defectService, projectService, teamService, customFieldsService) {
        this.translate = translate;
        this.datepipe = datepipe;
        this.router = router;
        this.formBuilder = formBuilder;
        this.toastr = toastr;
        this.defectService = defectService;
        this.projectService = projectService;
        this.teamService = teamService;
        this.customFieldsService = customFieldsService;
        this.customFields = { length: 0 };
        this.isFormSubmitted = false;
        this.isPageLoaded = false;
        this.clients = [];
        this.teams = [];
        this.teamsMembers = [];
        this.datepickerConfig = {
            dateInputFormat: 'YYYY-MM-DD',
            containerClass: 'theme-red'
        };
    }
    Object.defineProperty(DefectCreateComponent.prototype, "defectControl", {
        get: function () {
            return this.createDefectForm.controls;
        },
        enumerable: true,
        configurable: true
    });
    DefectCreateComponent.prototype.ngOnInit = function () {
        this.getTeams();
        this.loadForms();
        this.getProjects();
        this.getCustomFieldByForm();
    };
    DefectCreateComponent.prototype.loadForms = function () {
        var that = this;
        this.createDefectForm = this.formBuilder.group({
            generated_id: ['DEF0001', _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required],
            project_id: [null, _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required],
            project_version: [null],
            defect_name: ['', [_angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required, _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].maxLength(255)]],
            start_date: [null],
            end_date: [null],
            status: [1, _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required],
            severity: [2, _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required],
            estimated_hours: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].pattern(/^[0-9]+\:[0-5][0-9]$/)],
            assigned_group_id: [null],
            assign_member: [null],
            defect_type: [1, _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required],
            file: [''],
            file_extension: [''],
            attachment: [''],
            description: [''],
            custom_field: this.formBuilder.array([]),
            custom_fields: [null],
        });
        this.isPageLoaded = true;
        this.getDefectGeneratedId();
        setTimeout(function () {
            that.loadDropzone();
        });
    };
    DefectCreateComponent.prototype.loadDropzone = function () {
        var that = this;
        new dropzone__WEBPACK_IMPORTED_MODULE_11__(this.logoropzone.nativeElement, {
            url: 'https://httpbin.org/post',
            maxFiles: 1,
            clickable: true,
            createImageThumbnails: true,
            init: function () {
                this.on('addedfile', function (file) {
                    var removeButton = dropzone__WEBPACK_IMPORTED_MODULE_11__["createElement"]('<button class=\'btn btn-sm btn-block\'>' + that.translate.instant('common.remove_file') + '</button>');
                    var _this = this;
                    removeButton.addEventListener('click', function (e) {
                        e.preventDefault();
                        e.stopPropagation();
                        _this.removeFile(file);
                    });
                    file.previewElement.appendChild(removeButton);
                    if (file) {
                        var reader_1 = new FileReader();
                        reader_1.onload = function (e) {
                            that.createDefectForm.patchValue({ file: reader_1.result });
                            that.createDefectForm.patchValue({ attachment: file.name });
                            that.createDefectForm.patchValue({ file_extension: file.name.split('.').pop() });
                        };
                        reader_1.readAsDataURL(file);
                    }
                });
                this.on('removedfile', function (file) {
                    that.createDefectForm.patchValue({ file: null });
                });
                this.on('error', function (file, message) {
                    if (file) {
                        that.toastr.error(message);
                    }
                });
            }
        });
    };
    DefectCreateComponent.prototype.getProjects = function () {
        var _this_1 = this;
        this.projectService.getMyProjects().subscribe(function (data) {
            _this_1.projects = data;
        });
    };
    DefectCreateComponent.prototype.projectChange = function (event) {
        this.createDefectForm.patchValue({ project_version: null });
        this.createDefectForm.patchValue({ start_date: null });
        this.createDefectForm.patchValue({ end_date: null });
        if (this.createDefectForm.value.project_id == undefined || this.createDefectForm.value.project_id == null || this.createDefectForm.value.project_id == '') {
            this.projectVersion = null;
            return;
        }
        this.projectVersion = event.project_version.split(',');
        // --
        // Dates
        this.projectStartDate = new Date(event.start_date);
    };
    DefectCreateComponent.prototype.startDateChange = function (event) {
        this.createDefectForm.patchValue({ end_date: event });
    };
    DefectCreateComponent.prototype.getTeams = function () {
        var _this_1 = this;
        this.teamService.getAll().subscribe(function (data) {
            _this_1.teams = data;
        });
    };
    DefectCreateComponent.prototype.assignGroupChange = function (event) {
        if (this.createDefectForm.value.assigned_group_id == undefined || this.createDefectForm.value.assigned_group_id == null || this.createDefectForm.value.assigned_group_id == '') {
            this.createDefectForm.patchValue({ assign_member: null });
            this.teamsMembers = null;
            return;
        }
        this.teamsMembers = event.members;
    };
    DefectCreateComponent.prototype.getDefectGeneratedId = function () {
        var _this_1 = this;
        this.defectService.getDefectGeneratedId().subscribe(function (data) {
            _this_1.createDefectForm.patchValue({ generated_id: data });
        });
    };
    DefectCreateComponent.prototype.getCustomFieldByForm = function () {
        var _this_1 = this;
        this.customFieldsService.getCustomFieldByForm(3).subscribe(function (data) {
            _this_1.customFields = data;
            if (_this_1.customFields.length > 0) {
                _this_1.addDynamicField(_this_1.customFields);
            }
        });
    };
    DefectCreateComponent.prototype.addDynamicField = function (fieldList) {
        var _this_1 = this;
        fieldList.forEach(function (element) {
            var _a;
            var control = _this_1.createDefectForm.controls.custom_field;
            var validators = null;
            if (element.is_required == 1) {
                validators = [_angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required];
            }
            control.push(_this_1.formBuilder.group((_a = {},
                _a[element.field_column] = [null, validators],
                _a)));
        });
    };
    DefectCreateComponent.prototype.setCustomFields = function () {
        var arr = this.createDefectForm.value.custom_field, obj = {}, iRow = 0, that = this;
        arr.forEach(function (item) {
            var key = Object.keys(item)[0];
            obj[key] = item[key];
            if (that.customFields[iRow++].field_type == 'date') {
                obj[key] = that.datepipe.transform(item[key], 'yyyy-MM-dd');
            }
        });
        this.createDefectForm.patchValue({ custom_fields: obj });
    };
    DefectCreateComponent.prototype.onSubmit = function () {
        var _this_1 = this;
        this.isFormSubmitted = true;
        if (this.createDefectForm.invalid) {
            return;
        }
        if (this.customFields.length > 0) {
            this.setCustomFields();
        }
        this.defectService.create(this.createDefectForm.value).subscribe(function (data) {
            _this_1.toastr.success(_this_1.translate.instant('defects.messages.create'), _this_1.translate.instant('defects.title'));
            _this_1.router.navigate(['defects']);
        });
    };
    DefectCreateComponent.ctorParameters = function () { return [
        { type: _ngx_translate_core__WEBPACK_IMPORTED_MODULE_5__["TranslateService"] },
        { type: _angular_common__WEBPACK_IMPORTED_MODULE_3__["DatePipe"] },
        { type: _angular_router__WEBPACK_IMPORTED_MODULE_4__["Router"] },
        { type: _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormBuilder"] },
        { type: ngx_toastr__WEBPACK_IMPORTED_MODULE_6__["ToastrService"] },
        { type: _core_services_defect_service__WEBPACK_IMPORTED_MODULE_9__["DefectService"] },
        { type: _core_services_project_service__WEBPACK_IMPORTED_MODULE_8__["ProjectService"] },
        { type: _core_services_team_service__WEBPACK_IMPORTED_MODULE_7__["TeamService"] },
        { type: _core_services_custom_fields_service__WEBPACK_IMPORTED_MODULE_10__["CustomFieldsService"] }
    ]; };
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewChild"])('logoropzone', { static: false }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", _angular_core__WEBPACK_IMPORTED_MODULE_1__["ElementRef"])
    ], DefectCreateComponent.prototype, "logoropzone", void 0);
    DefectCreateComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-defect-create',
            template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./defect-create.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/modules/pm/defects/pages/defect-create/defect-create.component.html")).default,
            preserveWhitespaces: true,
            styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./defect-create.component.scss */ "./src/app/modules/pm/defects/pages/defect-create/defect-create.component.scss")).default]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_ngx_translate_core__WEBPACK_IMPORTED_MODULE_5__["TranslateService"],
            _angular_common__WEBPACK_IMPORTED_MODULE_3__["DatePipe"],
            _angular_router__WEBPACK_IMPORTED_MODULE_4__["Router"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormBuilder"],
            ngx_toastr__WEBPACK_IMPORTED_MODULE_6__["ToastrService"],
            _core_services_defect_service__WEBPACK_IMPORTED_MODULE_9__["DefectService"],
            _core_services_project_service__WEBPACK_IMPORTED_MODULE_8__["ProjectService"],
            _core_services_team_service__WEBPACK_IMPORTED_MODULE_7__["TeamService"],
            _core_services_custom_fields_service__WEBPACK_IMPORTED_MODULE_10__["CustomFieldsService"]])
    ], DefectCreateComponent);
    return DefectCreateComponent;
}());



/***/ }),

/***/ "./src/app/modules/pm/defects/pages/defect-detail/defect-detail.component.scss":
/*!*************************************************************************************!*\
  !*** ./src/app/modules/pm/defects/pages/defect-detail/defect-detail.component.scss ***!
  \*************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL21vZHVsZXMvcG0vZGVmZWN0cy9wYWdlcy9kZWZlY3QtZGV0YWlsL2RlZmVjdC1kZXRhaWwuY29tcG9uZW50LnNjc3MifQ== */");

/***/ }),

/***/ "./src/app/modules/pm/defects/pages/defect-detail/defect-detail.component.ts":
/*!***********************************************************************************!*\
  !*** ./src/app/modules/pm/defects/pages/defect-detail/defect-detail.component.ts ***!
  \***********************************************************************************/
/*! exports provided: DefectDetailComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DefectDetailComponent", function() { return DefectDetailComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var ngx_permissions__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ngx-permissions */ "./node_modules/ngx-permissions/ngx-permissions.umd.js");
/* harmony import */ var ngx_permissions__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(ngx_permissions__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _core_services_defect_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../../../../core/services/defect.service */ "./src/app/core/services/defect.service.ts");
/* harmony import */ var _core_services_authentication_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../../../../core/services/authentication.service */ "./src/app/core/services/authentication.service.ts");
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../../../../../environments/environment */ "./src/environments/environment.ts");







var DefectDetailComponent = /** @class */ (function () {
    function DefectDetailComponent(route, ngxRolesService, defectService, authenticationService) {
        var _this = this;
        this.route = route;
        this.ngxRolesService = ngxRolesService;
        this.defectService = defectService;
        this.authenticationService = authenticationService;
        this.apiUrl = _environments_environment__WEBPACK_IMPORTED_MODULE_6__["environment"].apiUrl;
        this.isPageLoaded = false;
        this.permission = false;
        this.authenticationService.loginUser.subscribe(function (x) { return _this.loginUser = x; });
        this.route.paramMap.subscribe(function (params) {
            _this.getById(params.get('id'));
        });
    }
    DefectDetailComponent.prototype.ngOnInit = function () {
    };
    DefectDetailComponent.prototype.getCheckPermission = function (defect) {
        var role = this.ngxRolesService.getRole('admin');
        if ((role && role.name == 'admin') || this.loginUser.is_super_admin) {
            this.permission = true;
        }
        else if (defect.assign_member == this.loginUser.id || defect.create_user_id == this.loginUser.id) {
            this.permission = true;
        }
    };
    DefectDetailComponent.prototype.getById = function (defectId) {
        var _this = this;
        this.defectService.getById(defectId).subscribe(function (data) {
            _this.defect = data;
            _this.getCheckPermission(_this.defect);
            _this.isPageLoaded = true;
        });
    };
    DefectDetailComponent.ctorParameters = function () { return [
        { type: _angular_router__WEBPACK_IMPORTED_MODULE_2__["ActivatedRoute"] },
        { type: ngx_permissions__WEBPACK_IMPORTED_MODULE_3__["NgxRolesService"] },
        { type: _core_services_defect_service__WEBPACK_IMPORTED_MODULE_4__["DefectService"] },
        { type: _core_services_authentication_service__WEBPACK_IMPORTED_MODULE_5__["AuthenticationService"] }
    ]; };
    DefectDetailComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-defect-detail',
            template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./defect-detail.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/modules/pm/defects/pages/defect-detail/defect-detail.component.html")).default,
            styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./defect-detail.component.scss */ "./src/app/modules/pm/defects/pages/defect-detail/defect-detail.component.scss")).default]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_router__WEBPACK_IMPORTED_MODULE_2__["ActivatedRoute"],
            ngx_permissions__WEBPACK_IMPORTED_MODULE_3__["NgxRolesService"],
            _core_services_defect_service__WEBPACK_IMPORTED_MODULE_4__["DefectService"],
            _core_services_authentication_service__WEBPACK_IMPORTED_MODULE_5__["AuthenticationService"]])
    ], DefectDetailComponent);
    return DefectDetailComponent;
}());



/***/ }),

/***/ "./src/app/modules/pm/defects/pages/defect-edit/defect-edit.component.scss":
/*!*********************************************************************************!*\
  !*** ./src/app/modules/pm/defects/pages/defect-edit/defect-edit.component.scss ***!
  \*********************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL21vZHVsZXMvcG0vZGVmZWN0cy9wYWdlcy9kZWZlY3QtZWRpdC9kZWZlY3QtZWRpdC5jb21wb25lbnQuc2NzcyJ9 */");

/***/ }),

/***/ "./src/app/modules/pm/defects/pages/defect-edit/defect-edit.component.ts":
/*!*******************************************************************************!*\
  !*** ./src/app/modules/pm/defects/pages/defect-edit/defect-edit.component.ts ***!
  \*******************************************************************************/
/*! exports provided: DefectEditComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DefectEditComponent", function() { return DefectEditComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var ngx_toastr__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ngx-toastr */ "./node_modules/ngx-toastr/fesm5/ngx-toastr.js");
/* harmony import */ var ngx_permissions__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ngx-permissions */ "./node_modules/ngx-permissions/ngx-permissions.umd.js");
/* harmony import */ var ngx_permissions__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(ngx_permissions__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var _ngx_translate_core__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @ngx-translate/core */ "./node_modules/@ngx-translate/core/fesm5/ngx-translate-core.js");
/* harmony import */ var _core_services_team_service__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../../../../../core/services/team.service */ "./src/app/core/services/team.service.ts");
/* harmony import */ var _core_services_project_service__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../../../../../core/services/project.service */ "./src/app/core/services/project.service.ts");
/* harmony import */ var _core_services_defect_service__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ../../../../../core/services/defect.service */ "./src/app/core/services/defect.service.ts");
/* harmony import */ var _core_services_custom_fields_service__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ../../../../../core/services/custom-fields.service */ "./src/app/core/services/custom-fields.service.ts");
/* harmony import */ var _core_services_authentication_service__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ../../../../../core/services/authentication.service */ "./src/app/core/services/authentication.service.ts");
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ../../../../../../environments/environment */ "./src/environments/environment.ts");
/* harmony import */ var dropzone__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! dropzone */ "./node_modules/dropzone/dist/dropzone.js");
/* harmony import */ var dropzone__WEBPACK_IMPORTED_MODULE_14___default = /*#__PURE__*/__webpack_require__.n(dropzone__WEBPACK_IMPORTED_MODULE_14__);















var DefectEditComponent = /** @class */ (function () {
    function DefectEditComponent(translate, datepipe, ngxRolesService, router, route, formBuilder, toastr, defectService, projectService, customFieldsService, teamService, authenticationService) {
        var _this_1 = this;
        this.translate = translate;
        this.datepipe = datepipe;
        this.ngxRolesService = ngxRolesService;
        this.router = router;
        this.route = route;
        this.formBuilder = formBuilder;
        this.toastr = toastr;
        this.defectService = defectService;
        this.projectService = projectService;
        this.customFieldsService = customFieldsService;
        this.teamService = teamService;
        this.authenticationService = authenticationService;
        this.customFields = { length: 0 };
        this.isFormSubmitted = false;
        this.isPageLoaded = false;
        this.isLogoUploaded = false;
        this.isLogoLoaded = true;
        this.clients = [];
        this.teams = [];
        this.teamsMembers = [];
        this.datepickerConfig = {
            dateInputFormat: 'YYYY-MM-DD',
            containerClass: 'theme-red'
        };
        this.apiUrl = _environments_environment__WEBPACK_IMPORTED_MODULE_13__["environment"].apiUrl;
        this.route.paramMap.subscribe(function (params) {
            _this_1.getDefectById(params.get('id'));
        });
        this.authenticationService.loginUser.subscribe(function (x) { return _this_1.loginUser = x; });
    }
    Object.defineProperty(DefectEditComponent.prototype, "defectControl", {
        get: function () {
            return this.editDefectForm.controls;
        },
        enumerable: true,
        configurable: true
    });
    DefectEditComponent.prototype.ngOnInit = function () {
    };
    DefectEditComponent.prototype.loadForms = function () {
        // --
        // Dates
        this.projectStartDate = new Date(this.defect.project.start_date);
        if (this.defect.start_date) {
            this.defect.start_date = new Date(this.defect.start_date);
        }
        this.editDefectForm = this.formBuilder.group({
            id: [this.defect.id],
            generated_id: [this.defect.generated_id, _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required],
            project_id: [this.defect.project_id, _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required],
            project_version: [this.defect.project_version],
            defect_name: [this.defect.defect_name, [_angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required, _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].maxLength(255)]],
            start_date: [this.defect.start_date],
            end_date: [this.defect.end_date],
            status: [this.defect.status, _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required],
            severity: [this.defect.severity, _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required],
            estimated_hours: [this.defect.estimated_hours, _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].pattern(/^[0-9]+\:[0-5][0-9]$/)],
            assigned_group_id: [this.defect.assigned_group_id],
            assign_member: [this.defect.assign_member],
            defect_type: [this.defect.defect_type, _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required],
            file: [this.defect.file],
            file_extension: [this.defect.file_extension],
            attachment: [this.defect.attachment],
            description: [this.defect.description],
            custom_field: this.formBuilder.array([]),
            custom_fields: [null],
        });
        this.isPageLoaded = true;
        this.getCustomFieldByForm();
        if (!this.defect.file) {
            this.isLogoUploaded = true;
        }
    };
    DefectEditComponent.prototype.loadDropzone = function () {
        var that = this;
        new dropzone__WEBPACK_IMPORTED_MODULE_14__(this.logodropzone.nativeElement, {
            url: 'https://httpbin.org/post',
            maxFiles: 1,
            clickable: true,
            createImageThumbnails: true,
            init: function () {
                this.on('addedfile', function (file) {
                    var removeButton = dropzone__WEBPACK_IMPORTED_MODULE_14__["createElement"]('<button class=\'btn btn-sm btn-block\'>' + that.translate.instant('common.remove_file') + '</button>');
                    var _this = this;
                    removeButton.addEventListener('click', function (e) {
                        e.preventDefault();
                        e.stopPropagation();
                        _this.removeFile(file);
                    });
                    file.previewElement.appendChild(removeButton);
                    if (file) {
                        var reader_1 = new FileReader();
                        reader_1.onload = function (e) {
                            that.editDefectForm.patchValue({ file: reader_1.result });
                            that.editDefectForm.patchValue({ attachment: file.name });
                            that.editDefectForm.patchValue({ file_extension: file.name.split('.').pop() });
                            that.isLogoLoaded = false;
                        };
                        reader_1.readAsDataURL(file);
                    }
                });
                this.on('removedfile', function (file) {
                    that.editDefectForm.patchValue({ file: null });
                });
                this.on('error', function (file, message) {
                    if (file) {
                        that.toastr.error(message);
                    }
                });
            }
        });
    };
    DefectEditComponent.prototype.removeDropzoneImage = function () {
        this.isLogoUploaded = true;
        this.isLogoLoaded = false;
        this.editDefectForm.patchValue({ attachment_hash: null });
        this.editDefectForm.patchValue({ file: null });
        this.editDefectForm.patchValue({ attachment: null });
        this.editDefectForm.patchValue({ file_extension: null });
    };
    DefectEditComponent.prototype.getCheckPermission = function (defect) {
        var role = this.ngxRolesService.getRole('admin');
        if ((role && role.name == 'admin') || this.loginUser.is_super_admin) {
            return true;
        }
        else if (defect.assign_member == this.loginUser.id || defect.create_user_id == this.loginUser.id) {
            return true;
        }
        else {
            this.router.navigate(['defects']);
        }
    };
    DefectEditComponent.prototype.getProjects = function () {
        var _this_1 = this;
        this.projectService.getMyProjects().subscribe(function (data) {
            _this_1.projects = data;
            var selectedProject = _this_1.projects.find(function (i) { return i.id == _this_1.defect.project_id; });
            _this_1.projectVersion = selectedProject.project_version.split(',');
        });
    };
    DefectEditComponent.prototype.getTeams = function () {
        var _this_1 = this;
        this.teamService.getAll().subscribe(function (data) {
            _this_1.teams = data;
            var selectedTeam = _this_1.teams.find(function (i) { return i.id == _this_1.defect.assigned_group_id; });
            _this_1.assignGroupChange(selectedTeam);
        });
    };
    DefectEditComponent.prototype.getDefectById = function (defectId) {
        var _this_1 = this;
        this.defectService.getById(defectId).subscribe(function (data) {
            _this_1.defect = data;
            _this_1.getCheckPermission(_this_1.defect);
            _this_1.getProjects();
            _this_1.loadForms();
            _this_1.getTeams();
            setTimeout(function () {
                _this_1.loadDropzone();
            });
        });
    };
    DefectEditComponent.prototype.getCustomFieldByForm = function () {
        var _this_1 = this;
        this.customFieldsService.getCustomFieldByForm(3).subscribe(function (data) {
            _this_1.customFields = data;
            if (_this_1.customFields.length > 0) {
                _this_1.addDynamicField(_this_1.customFields);
            }
        });
    };
    DefectEditComponent.prototype.addDynamicField = function (fieldList) {
        var _this_1 = this;
        fieldList.forEach(function (element) {
            var _a, _b;
            var control = _this_1.editDefectForm.controls.custom_field;
            var validators = null;
            if (element.is_required == 1) {
                validators = [_angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required];
            }
            if (element.field_type == 'date' && _this_1.defect[element.field_column] != null) {
                control.push(_this_1.formBuilder.group((_a = {},
                    _a[element.field_column] = [new Date(_this_1.defect[element.field_column]), validators],
                    _a)));
            }
            else {
                control.push(_this_1.formBuilder.group((_b = {},
                    _b[element.field_column] = [_this_1.defect[element.field_column], validators],
                    _b)));
            }
        });
    };
    DefectEditComponent.prototype.assignGroupChange = function (event) {
        if (this.editDefectForm.value.assigned_group_id == undefined || this.editDefectForm.value.assigned_group_id == null || this.editDefectForm.value.assigned_group_id == '') {
            this.editDefectForm.patchValue({ assign_member: null });
            this.teamsMembers = null;
            return;
        }
        this.teamsMembers = event.members;
    };
    DefectEditComponent.prototype.projectChange = function (event) {
        this.editDefectForm.patchValue({ project_version: null });
        this.editDefectForm.patchValue({ start_date: null });
        this.editDefectForm.patchValue({ end_date: null });
        if (this.editDefectForm.value.project_id == undefined || this.editDefectForm.value.project_id == null || this.editDefectForm.value.project_id == '') {
            this.projectVersion = null;
            return;
        }
        this.projectVersion = event.project_version.split(',');
        // --
        // Dates
        this.projectStartDate = new Date(event.start_date);
    };
    DefectEditComponent.prototype.startDateChange = function () {
        this.editDefectForm.patchValue({ end_date: this.editDefectForm.value.start_date });
    };
    DefectEditComponent.prototype.setCustomField = function () {
        var arr = this.editDefectForm.value.custom_field, obj = {}, iRow = 0, that = this;
        arr.forEach(function (item) {
            var key = Object.keys(item)[0];
            obj[key] = item[key];
            if (that.customFields[iRow++].field_type == 'date') {
                obj[key] = that.datepipe.transform(item[key], 'yyyy-MM-dd');
            }
        });
        this.editDefectForm.patchValue({ custom_fields: obj });
    };
    DefectEditComponent.prototype.onSubmit = function () {
        var _this_1 = this;
        this.isFormSubmitted = true;
        if (this.editDefectForm.invalid) {
            return;
        }
        if (this.customFields.length > 0) {
            this.setCustomField();
        }
        this.editDefectForm.value.start_date = this.datepipe.transform(this.editDefectForm.value.start_date, 'yyyy-MM-dd');
        this.editDefectForm.value.end_date = this.datepipe.transform(this.editDefectForm.value.end_date, 'yyyy-MM-dd');
        this.defectService.update(this.editDefectForm.value).subscribe(function (data) {
            _this_1.toastr.success(_this_1.translate.instant('defects.messages.update'), _this_1.translate.instant('defects.title'));
            _this_1.router.navigate(['defects']);
        });
    };
    DefectEditComponent.ctorParameters = function () { return [
        { type: _ngx_translate_core__WEBPACK_IMPORTED_MODULE_7__["TranslateService"] },
        { type: _angular_common__WEBPACK_IMPORTED_MODULE_3__["DatePipe"] },
        { type: ngx_permissions__WEBPACK_IMPORTED_MODULE_6__["NgxRolesService"] },
        { type: _angular_router__WEBPACK_IMPORTED_MODULE_4__["Router"] },
        { type: _angular_router__WEBPACK_IMPORTED_MODULE_4__["ActivatedRoute"] },
        { type: _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormBuilder"] },
        { type: ngx_toastr__WEBPACK_IMPORTED_MODULE_5__["ToastrService"] },
        { type: _core_services_defect_service__WEBPACK_IMPORTED_MODULE_10__["DefectService"] },
        { type: _core_services_project_service__WEBPACK_IMPORTED_MODULE_9__["ProjectService"] },
        { type: _core_services_custom_fields_service__WEBPACK_IMPORTED_MODULE_11__["CustomFieldsService"] },
        { type: _core_services_team_service__WEBPACK_IMPORTED_MODULE_8__["TeamService"] },
        { type: _core_services_authentication_service__WEBPACK_IMPORTED_MODULE_12__["AuthenticationService"] }
    ]; };
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewChild"])('logodropzone', { static: false }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", _angular_core__WEBPACK_IMPORTED_MODULE_1__["ElementRef"])
    ], DefectEditComponent.prototype, "logodropzone", void 0);
    DefectEditComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-defect-edit',
            template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./defect-edit.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/modules/pm/defects/pages/defect-edit/defect-edit.component.html")).default,
            preserveWhitespaces: true,
            styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./defect-edit.component.scss */ "./src/app/modules/pm/defects/pages/defect-edit/defect-edit.component.scss")).default]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_ngx_translate_core__WEBPACK_IMPORTED_MODULE_7__["TranslateService"],
            _angular_common__WEBPACK_IMPORTED_MODULE_3__["DatePipe"],
            ngx_permissions__WEBPACK_IMPORTED_MODULE_6__["NgxRolesService"],
            _angular_router__WEBPACK_IMPORTED_MODULE_4__["Router"],
            _angular_router__WEBPACK_IMPORTED_MODULE_4__["ActivatedRoute"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormBuilder"],
            ngx_toastr__WEBPACK_IMPORTED_MODULE_5__["ToastrService"],
            _core_services_defect_service__WEBPACK_IMPORTED_MODULE_10__["DefectService"],
            _core_services_project_service__WEBPACK_IMPORTED_MODULE_9__["ProjectService"],
            _core_services_custom_fields_service__WEBPACK_IMPORTED_MODULE_11__["CustomFieldsService"],
            _core_services_team_service__WEBPACK_IMPORTED_MODULE_8__["TeamService"],
            _core_services_authentication_service__WEBPACK_IMPORTED_MODULE_12__["AuthenticationService"]])
    ], DefectEditComponent);
    return DefectEditComponent;
}());



/***/ }),

/***/ "./src/app/modules/pm/defects/pages/defect-kanban/defect-kanban.component.scss":
/*!*************************************************************************************!*\
  !*** ./src/app/modules/pm/defects/pages/defect-kanban/defect-kanban.component.scss ***!
  \*************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = (".section-heading {\n  padding: 5px 10px;\n  font-size: 15px;\n  font-weight: bold;\n}\n\n.drag-container {\n  width: 600px;\n  max-width: 100%;\n  margin: 0 25px 25px 0;\n  display: inline-block;\n  vertical-align: top;\n  background-color: #E9ECEF;\n  padding: 15px;\n  border-radius: 5px;\n}\n\n.item-list {\n  min-height: 60px;\n  border-radius: 4px;\n  display: block;\n}\n\n.item-box {\n  padding: 8px 10px;\n  border: solid 1px #ccc;\n  margin-bottom: 5px;\n  color: rgba(0, 0, 0, 0.87);\n  display: -ms-flexbox;\n  display: flex;\n  -ms-flex-direction: row;\n      flex-direction: row;\n  -ms-flex-align: center;\n      align-items: center;\n  -ms-flex-pack: justify;\n      justify-content: space-between;\n  box-sizing: border-box;\n  cursor: move;\n  background: white;\n  font-size: 14px;\n  border-radius: 20px;\n}\n\n.cdk-drag-preview {\n  box-sizing: border-box;\n  border-radius: 4px;\n  padding: 20px 20px;\n}\n\n.cdk-drag-placeholder {\n  opacity: 0;\n}\n\n.cdk-drag-animating {\n  transition: transform 250ms cubic-bezier(0, 0, 0.2, 1);\n}\n\n.item-list.cdk-drop-list-dragging .item-box:not(.cdk-drag-placeholder) {\n  transition: transform 250ms cubic-bezier(0, 0, 0.2, 1);\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvbW9kdWxlcy9wbS9kZWZlY3RzL3BhZ2VzL2RlZmVjdC1rYW5iYW4vQzpcXFVzZXJzXFx0aHVhblxcT25lRHJpdmVcXERlc2t0b3BcXGdsYXZhbC10aHVhbmRpbmgvc3JjXFxhcHBcXG1vZHVsZXNcXHBtXFxkZWZlY3RzXFxwYWdlc1xcZGVmZWN0LWthbmJhblxcZGVmZWN0LWthbmJhbi5jb21wb25lbnQuc2NzcyIsInNyYy9hcHAvbW9kdWxlcy9wbS9kZWZlY3RzL3BhZ2VzL2RlZmVjdC1rYW5iYW4vZGVmZWN0LWthbmJhbi5jb21wb25lbnQuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNJLGlCQUFBO0VBQ0EsZUFBQTtFQUNBLGlCQUFBO0FDQ0o7O0FERUE7RUFDSSxZQUFBO0VBQ0EsZUFBQTtFQUNBLHFCQUFBO0VBQ0EscUJBQUE7RUFDQSxtQkFBQTtFQUNBLHlCQUFBO0VBQ0EsYUFBQTtFQUNBLGtCQUFBO0FDQ0o7O0FERUE7RUFDSSxnQkFBQTtFQUNBLGtCQUFBO0VBQ0EsY0FBQTtBQ0NKOztBREVBO0VBQ0ksaUJBQUE7RUFDQSxzQkFBQTtFQUNBLGtCQUFBO0VBQ0EsMEJBQUE7RUFDQSxvQkFBQTtFQUFBLGFBQUE7RUFDQSx1QkFBQTtNQUFBLG1CQUFBO0VBQ0Esc0JBQUE7TUFBQSxtQkFBQTtFQUNBLHNCQUFBO01BQUEsOEJBQUE7RUFDQSxzQkFBQTtFQUNBLFlBQUE7RUFDQSxpQkFBQTtFQUNBLGVBQUE7RUFDQSxtQkFBQTtBQ0NKOztBREVBO0VBQ0ksc0JBQUE7RUFDQSxrQkFBQTtFQUNBLGtCQUFBO0FDQ0o7O0FERUE7RUFDSSxVQUFBO0FDQ0o7O0FERUE7RUFDSSxzREFBQTtBQ0NKOztBREVBO0VBQ0ksc0RBQUE7QUNDSiIsImZpbGUiOiJzcmMvYXBwL21vZHVsZXMvcG0vZGVmZWN0cy9wYWdlcy9kZWZlY3Qta2FuYmFuL2RlZmVjdC1rYW5iYW4uY29tcG9uZW50LnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyIuc2VjdGlvbi1oZWFkaW5nIHtcclxuICAgIHBhZGRpbmc6IDVweCAxMHB4O1xyXG4gICAgZm9udC1zaXplOiAxNXB4O1xyXG4gICAgZm9udC13ZWlnaHQ6IGJvbGQ7XHJcbn1cclxuXHJcbi5kcmFnLWNvbnRhaW5lciB7XHJcbiAgICB3aWR0aDogNjAwcHg7XHJcbiAgICBtYXgtd2lkdGg6IDEwMCU7XHJcbiAgICBtYXJnaW46IDAgMjVweCAyNXB4IDA7XHJcbiAgICBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XHJcbiAgICB2ZXJ0aWNhbC1hbGlnbjogdG9wO1xyXG4gICAgYmFja2dyb3VuZC1jb2xvcjogI0U5RUNFRjtcclxuICAgIHBhZGRpbmc6IDE1cHg7XHJcbiAgICBib3JkZXItcmFkaXVzOiA1cHg7XHJcbn1cclxuXHJcbi5pdGVtLWxpc3Qge1xyXG4gICAgbWluLWhlaWdodDogNjBweDtcclxuICAgIGJvcmRlci1yYWRpdXM6IDRweDtcclxuICAgIGRpc3BsYXk6IGJsb2NrO1xyXG59XHJcblxyXG4uaXRlbS1ib3gge1xyXG4gICAgcGFkZGluZzogOHB4IDEwcHg7XHJcbiAgICBib3JkZXI6IHNvbGlkIDFweCAjY2NjO1xyXG4gICAgbWFyZ2luLWJvdHRvbTogNXB4O1xyXG4gICAgY29sb3I6IHJnYmEoMCwgMCwgMCwgMC44Nyk7XHJcbiAgICBkaXNwbGF5OiBmbGV4O1xyXG4gICAgZmxleC1kaXJlY3Rpb246IHJvdztcclxuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XHJcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWJldHdlZW47XHJcbiAgICBib3gtc2l6aW5nOiBib3JkZXItYm94O1xyXG4gICAgY3Vyc29yOiBtb3ZlO1xyXG4gICAgYmFja2dyb3VuZDogd2hpdGU7XHJcbiAgICBmb250LXNpemU6IDE0cHg7XHJcbiAgICBib3JkZXItcmFkaXVzOiAyMHB4O1xyXG59XHJcblxyXG4uY2RrLWRyYWctcHJldmlldyB7XHJcbiAgICBib3gtc2l6aW5nOiBib3JkZXItYm94O1xyXG4gICAgYm9yZGVyLXJhZGl1czogNHB4O1xyXG4gICAgcGFkZGluZzogMjBweCAyMHB4O1xyXG59XHJcblxyXG4uY2RrLWRyYWctcGxhY2Vob2xkZXIge1xyXG4gICAgb3BhY2l0eTogMDtcclxufVxyXG5cclxuLmNkay1kcmFnLWFuaW1hdGluZyB7XHJcbiAgICB0cmFuc2l0aW9uOiB0cmFuc2Zvcm0gMjUwbXMgY3ViaWMtYmV6aWVyKDAsIDAsIDAuMiwgMSk7XHJcbn1cclxuXHJcbi5pdGVtLWxpc3QuY2RrLWRyb3AtbGlzdC1kcmFnZ2luZyAuaXRlbS1ib3g6bm90KC5jZGstZHJhZy1wbGFjZWhvbGRlcikge1xyXG4gICAgdHJhbnNpdGlvbjogdHJhbnNmb3JtIDI1MG1zIGN1YmljLWJlemllcigwLCAwLCAwLjIsIDEpO1xyXG59XHJcbiIsIi5zZWN0aW9uLWhlYWRpbmcge1xuICBwYWRkaW5nOiA1cHggMTBweDtcbiAgZm9udC1zaXplOiAxNXB4O1xuICBmb250LXdlaWdodDogYm9sZDtcbn1cblxuLmRyYWctY29udGFpbmVyIHtcbiAgd2lkdGg6IDYwMHB4O1xuICBtYXgtd2lkdGg6IDEwMCU7XG4gIG1hcmdpbjogMCAyNXB4IDI1cHggMDtcbiAgZGlzcGxheTogaW5saW5lLWJsb2NrO1xuICB2ZXJ0aWNhbC1hbGlnbjogdG9wO1xuICBiYWNrZ3JvdW5kLWNvbG9yOiAjRTlFQ0VGO1xuICBwYWRkaW5nOiAxNXB4O1xuICBib3JkZXItcmFkaXVzOiA1cHg7XG59XG5cbi5pdGVtLWxpc3Qge1xuICBtaW4taGVpZ2h0OiA2MHB4O1xuICBib3JkZXItcmFkaXVzOiA0cHg7XG4gIGRpc3BsYXk6IGJsb2NrO1xufVxuXG4uaXRlbS1ib3gge1xuICBwYWRkaW5nOiA4cHggMTBweDtcbiAgYm9yZGVyOiBzb2xpZCAxcHggI2NjYztcbiAgbWFyZ2luLWJvdHRvbTogNXB4O1xuICBjb2xvcjogcmdiYSgwLCAwLCAwLCAwLjg3KTtcbiAgZGlzcGxheTogZmxleDtcbiAgZmxleC1kaXJlY3Rpb246IHJvdztcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAganVzdGlmeS1jb250ZW50OiBzcGFjZS1iZXR3ZWVuO1xuICBib3gtc2l6aW5nOiBib3JkZXItYm94O1xuICBjdXJzb3I6IG1vdmU7XG4gIGJhY2tncm91bmQ6IHdoaXRlO1xuICBmb250LXNpemU6IDE0cHg7XG4gIGJvcmRlci1yYWRpdXM6IDIwcHg7XG59XG5cbi5jZGstZHJhZy1wcmV2aWV3IHtcbiAgYm94LXNpemluZzogYm9yZGVyLWJveDtcbiAgYm9yZGVyLXJhZGl1czogNHB4O1xuICBwYWRkaW5nOiAyMHB4IDIwcHg7XG59XG5cbi5jZGstZHJhZy1wbGFjZWhvbGRlciB7XG4gIG9wYWNpdHk6IDA7XG59XG5cbi5jZGstZHJhZy1hbmltYXRpbmcge1xuICB0cmFuc2l0aW9uOiB0cmFuc2Zvcm0gMjUwbXMgY3ViaWMtYmV6aWVyKDAsIDAsIDAuMiwgMSk7XG59XG5cbi5pdGVtLWxpc3QuY2RrLWRyb3AtbGlzdC1kcmFnZ2luZyAuaXRlbS1ib3g6bm90KC5jZGstZHJhZy1wbGFjZWhvbGRlcikge1xuICB0cmFuc2l0aW9uOiB0cmFuc2Zvcm0gMjUwbXMgY3ViaWMtYmV6aWVyKDAsIDAsIDAuMiwgMSk7XG59Il19 */");

/***/ }),

/***/ "./src/app/modules/pm/defects/pages/defect-kanban/defect-kanban.component.ts":
/*!***********************************************************************************!*\
  !*** ./src/app/modules/pm/defects/pages/defect-kanban/defect-kanban.component.ts ***!
  \***********************************************************************************/
/*! exports provided: DefectKanbanComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DefectKanbanComponent", function() { return DefectKanbanComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var ngx_toastr__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ngx-toastr */ "./node_modules/ngx-toastr/fesm5/ngx-toastr.js");
/* harmony import */ var _ngx_translate_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @ngx-translate/core */ "./node_modules/@ngx-translate/core/fesm5/ngx-translate-core.js");
/* harmony import */ var _angular_cdk_drag_drop__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/cdk/drag-drop */ "./node_modules/@angular/cdk/esm5/drag-drop.es5.js");
/* harmony import */ var _core_services_authentication_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../../../../core/services/authentication.service */ "./src/app/core/services/authentication.service.ts");
/* harmony import */ var _core_services_defect_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../../../../core/services/defect.service */ "./src/app/core/services/defect.service.ts");
/* harmony import */ var _core_services_project_service__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../../../../../core/services/project.service */ "./src/app/core/services/project.service.ts");
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../../../../../../environments/environment */ "./src/environments/environment.ts");









var DefectKanbanComponent = /** @class */ (function () {
    function DefectKanbanComponent(translate, toastr, authenticationService, defectService, projectService) {
        var _this = this;
        this.translate = translate;
        this.toastr = toastr;
        this.authenticationService = authenticationService;
        this.defectService = defectService;
        this.projectService = projectService;
        this.filter = 'my';
        this.apiUrl = _environments_environment__WEBPACK_IMPORTED_MODULE_8__["environment"].apiUrl;
        this.authenticationService.loginUser.subscribe(function (x) { return _this.loginUser = x; });
    }
    DefectKanbanComponent.prototype.ngOnInit = function () {
        this.getProjects();
    };
    DefectKanbanComponent.prototype.getProjects = function () {
        var _this = this;
        this.projectService.getMyProjects()
            .subscribe(function (data) {
            _this.projects = data;
            _this.getDefects();
        });
    };
    DefectKanbanComponent.prototype.getDefects = function (projectId, filter) {
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
        this.defectService.getDefectForKanban(params).subscribe(function (data) {
            _this.setDefects(data);
        });
    };
    DefectKanbanComponent.prototype.setDefects = function (defects) {
        this.assignedDefects = [];
        this.inprogressDefects = [];
        this.openDefects = [];
        this.completedDefects = [];
        for (var iRow in defects) {
            switch (defects[iRow].status) {
                case 1:
                    this.assignedDefects.push(defects[iRow]);
                    break;
                case 3:
                    this.inprogressDefects.push(defects[iRow]);
                    break;
                case 4:
                case 6:
                    this.openDefects.push(defects[iRow]);
                    break;
                case 2:
                case 7:
                case 5:
                    this.completedDefects.push(defects[iRow]);
                    break;
                default:
                    break;
            }
        }
    };
    DefectKanbanComponent.prototype.drop = function (event) {
        if (event.previousContainer === event.container) {
            Object(_angular_cdk_drag_drop__WEBPACK_IMPORTED_MODULE_4__["moveItemInArray"])(event.container.data, event.previousIndex, event.currentIndex);
        }
        else {
            Object(_angular_cdk_drag_drop__WEBPACK_IMPORTED_MODULE_4__["transferArrayItem"])(event.previousContainer.data, event.container.data, event.previousIndex, event.currentIndex);
        }
        var statusTask = [{
                status: 1,
                list: this.converToArray(this.assignedDefects)
            }, {
                status: 3,
                list: this.converToArray(this.inprogressDefects)
            }, {
                status: 4,
                list: this.converToArray(this.openDefects)
            }, {
                status: 5,
                list: this.converToArray(this.completedDefects)
            }];
        this.updateStatusList(statusTask);
    };
    DefectKanbanComponent.prototype.converToArray = function (list) {
        var status_list = [];
        list.forEach(function (element) {
            status_list.push(parseInt(element.id));
        });
        return status_list;
    };
    DefectKanbanComponent.prototype.updateStatusList = function (task) {
        var _this = this;
        this.defectService.updateKanbanStatusList(task)
            .subscribe(function (data) {
            _this.toastr.success(_this.translate.instant('defects.messages.status'), _this.translate.instant('defects.title'));
        });
    };
    DefectKanbanComponent.ctorParameters = function () { return [
        { type: _ngx_translate_core__WEBPACK_IMPORTED_MODULE_3__["TranslateService"] },
        { type: ngx_toastr__WEBPACK_IMPORTED_MODULE_2__["ToastrService"] },
        { type: _core_services_authentication_service__WEBPACK_IMPORTED_MODULE_5__["AuthenticationService"] },
        { type: _core_services_defect_service__WEBPACK_IMPORTED_MODULE_6__["DefectService"] },
        { type: _core_services_project_service__WEBPACK_IMPORTED_MODULE_7__["ProjectService"] }
    ]; };
    DefectKanbanComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-defect-kanban',
            template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./defect-kanban.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/modules/pm/defects/pages/defect-kanban/defect-kanban.component.html")).default,
            styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./defect-kanban.component.scss */ "./src/app/modules/pm/defects/pages/defect-kanban/defect-kanban.component.scss")).default]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_ngx_translate_core__WEBPACK_IMPORTED_MODULE_3__["TranslateService"],
            ngx_toastr__WEBPACK_IMPORTED_MODULE_2__["ToastrService"],
            _core_services_authentication_service__WEBPACK_IMPORTED_MODULE_5__["AuthenticationService"],
            _core_services_defect_service__WEBPACK_IMPORTED_MODULE_6__["DefectService"],
            _core_services_project_service__WEBPACK_IMPORTED_MODULE_7__["ProjectService"]])
    ], DefectKanbanComponent);
    return DefectKanbanComponent;
}());



/***/ }),

/***/ "./src/app/modules/pm/defects/pages/defect-list/defect-list.component.scss":
/*!*********************************************************************************!*\
  !*** ./src/app/modules/pm/defects/pages/defect-list/defect-list.component.scss ***!
  \*********************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = (".hide_empty_message ::ng-deep .odd {\n  display: none;\n}\n\n.btn-filters .status-dropdown .btn.assigned,\n.btn-filters .status-dropdown .btn.open {\n  background: none;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvbW9kdWxlcy9wbS9kZWZlY3RzL3BhZ2VzL2RlZmVjdC1saXN0L0M6XFxVc2Vyc1xcdGh1YW5cXE9uZURyaXZlXFxEZXNrdG9wXFxnbGF2YWwtdGh1YW5kaW5oL3NyY1xcYXBwXFxtb2R1bGVzXFxwbVxcZGVmZWN0c1xccGFnZXNcXGRlZmVjdC1saXN0XFxkZWZlY3QtbGlzdC5jb21wb25lbnQuc2NzcyIsInNyYy9hcHAvbW9kdWxlcy9wbS9kZWZlY3RzL3BhZ2VzL2RlZmVjdC1saXN0L2RlZmVjdC1saXN0LmNvbXBvbmVudC5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0ksYUFBQTtBQ0NKOztBREVBOztFQUVJLGdCQUFBO0FDQ0oiLCJmaWxlIjoic3JjL2FwcC9tb2R1bGVzL3BtL2RlZmVjdHMvcGFnZXMvZGVmZWN0LWxpc3QvZGVmZWN0LWxpc3QuY29tcG9uZW50LnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyIuaGlkZV9lbXB0eV9tZXNzYWdlIDo6bmctZGVlcCAub2RkIHtcclxuICAgIGRpc3BsYXk6IG5vbmVcclxufVxyXG5cclxuLmJ0bi1maWx0ZXJzIC5zdGF0dXMtZHJvcGRvd24gLmJ0bi5hc3NpZ25lZCxcclxuLmJ0bi1maWx0ZXJzIC5zdGF0dXMtZHJvcGRvd24gLmJ0bi5vcGVuIHtcclxuICAgIGJhY2tncm91bmQ6IG5vbmU7XHJcbn1cclxuIiwiLmhpZGVfZW1wdHlfbWVzc2FnZSA6Om5nLWRlZXAgLm9kZCB7XG4gIGRpc3BsYXk6IG5vbmU7XG59XG5cbi5idG4tZmlsdGVycyAuc3RhdHVzLWRyb3Bkb3duIC5idG4uYXNzaWduZWQsXG4uYnRuLWZpbHRlcnMgLnN0YXR1cy1kcm9wZG93biAuYnRuLm9wZW4ge1xuICBiYWNrZ3JvdW5kOiBub25lO1xufSJdfQ== */");

/***/ }),

/***/ "./src/app/modules/pm/defects/pages/defect-list/defect-list.component.ts":
/*!*******************************************************************************!*\
  !*** ./src/app/modules/pm/defects/pages/defect-list/defect-list.component.ts ***!
  \*******************************************************************************/
/*! exports provided: DefectListComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DefectListComponent", function() { return DefectListComponent; });
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
/* harmony import */ var _core_services_defect_service__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ../../../../../core/services/defect.service */ "./src/app/core/services/defect.service.ts");
/* harmony import */ var _core_services_authentication_service__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ../../../../../core/services/authentication.service */ "./src/app/core/services/authentication.service.ts");
/* harmony import */ var _core_helpers_pm_helper__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ./../../../../../core/helpers/pm-helper */ "./src/app/core/helpers/pm-helper.ts");
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! ../../../../../../environments/environment */ "./src/environments/environment.ts");
/* harmony import */ var datatables_net__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! datatables.net */ "./node_modules/datatables.net/js/jquery.dataTables.js");
/* harmony import */ var datatables_net__WEBPACK_IMPORTED_MODULE_16___default = /*#__PURE__*/__webpack_require__.n(datatables_net__WEBPACK_IMPORTED_MODULE_16__);
/* harmony import */ var datatables_net_bs4__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! datatables.net-bs4 */ "./node_modules/datatables.net-bs4/js/dataTables.bootstrap4.js");
/* harmony import */ var datatables_net_bs4__WEBPACK_IMPORTED_MODULE_17___default = /*#__PURE__*/__webpack_require__.n(datatables_net_bs4__WEBPACK_IMPORTED_MODULE_17__);


















var DefectListComponent = /** @class */ (function () {
    function DefectListComponent(translate, ngxRolesService, router, route, http, modalService, exportAsService, toastr, defectService, authenticationService) {
        var _this = this;
        this.translate = translate;
        this.ngxRolesService = ngxRolesService;
        this.router = router;
        this.route = route;
        this.http = http;
        this.modalService = modalService;
        this.exportAsService = exportAsService;
        this.toastr = toastr;
        this.defectService = defectService;
        this.authenticationService = authenticationService;
        this.dtTrigger = new rxjs__WEBPACK_IMPORTED_MODULE_10__["Subject"]();
        this.dtOptions = {};
        this.defects = [];
        this.defectstatusKeyValue = _core_helpers_pm_helper__WEBPACK_IMPORTED_MODULE_14__["defect_status_key_value"];
        this.defectFilterKey = 'selected';
        this.isPageLoaded = false;
        this.exportAsConfig = {
            type: 'pdf',
            elementIdOrContent: 'defects_table',
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
    DefectListComponent.prototype.ngOnInit = function () {
        this.loadDefectDatatable();
    };
    DefectListComponent.prototype.getTranslateStatus = function (statusKey) {
        return this.defectstatusKeyValue[statusKey];
    };
    DefectListComponent.prototype.loadDefectDatatable = function () {
        var _this = this;
        this.statusfilterId = 0;
        if (this.route.snapshot.params['status']) {
            this.statusfilterId = this.route.snapshot.params['status'];
        }
        if (this.route.snapshot.params['defectFilterKey']) {
            this.defectFilterKey = this.route.snapshot.params['defectFilterKey'];
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
                    'width': '10%',
                    'target': [7]
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
                    title: this.translate.instant('defects.title'),
                    className: 'btn btn-datatable-gredient',
                    action: function (e, dt, node, config) {
                        that.exportFiles('csv');
                    }
                }, {
                    extend: 'excel',
                    title: this.translate.instant('defects.title'),
                    className: 'btn btn-datatable-gredient',
                    action: function (e, dt, node, config) {
                        that.exportFiles('xlsx');
                    }
                }, {
                    extend: 'pdf',
                    title: this.translate.instant('defects.title'),
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
                    filter: _this.defectFilterKey
                };
                _this.http
                    .post(_this.apiUrl + '/api/all-defects', dataTablesParameters, {})
                    .subscribe(function (resp) {
                    _this.isPageLoaded = true;
                    _this.defects = resp.data;
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
    DefectListComponent.prototype.ngAfterViewInit = function () {
        this.dtTrigger.next();
    };
    DefectListComponent.prototype.ngOnDestroy = function () {
        this.dtTrigger.unsubscribe();
    };
    DefectListComponent.prototype.rerender = function () {
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
    DefectListComponent.prototype.exportFiles = function (type) {
        this.exportAsConfig.type = type;
        this.exportAsService.save(this.exportAsConfig, this.translate.instant('defects.title')).subscribe(function () {
        });
    };
    DefectListComponent.prototype.filterByStatus = function (statusID, defectFilterKey) {
        this.router.routeReuseStrategy.shouldReuseRoute = function () { return false; };
        this.router.navigate(['defects', statusID, defectFilterKey]);
    };
    DefectListComponent.prototype.getCheckPermission = function (defect) {
        var role = this.ngxRolesService.getRole('admin');
        if ((role && role.name == 'admin') || this.loginUser.is_super_admin) {
            return true;
        }
        else if (defect.assign_member == this.loginUser.id || defect.create_user_id == this.loginUser.id) {
            return true;
        }
        else {
            return false;
        }
    };
    DefectListComponent.prototype.deleteDefect = function (id) {
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
                _this.defectService.delete(id)
                    .subscribe(function (data) {
                    _this.toastr.success(_this.translate.instant('defects.messages.delete'), _this.translate.instant('defects.title'));
                    _this.rerender();
                });
            }
        });
    };
    DefectListComponent.prototype.changeDefectStatus = function (defectId, status) {
        var _this = this;
        var changeDefect = {
            id: defectId,
            status: status.id
        };
        this.defectService.changeStatus(changeDefect)
            .subscribe(function (data) {
            _this.toastr.success(_this.translate.instant('defects.messages.status'), _this.translate.instant('defects.title'));
            _this.rerender();
        });
    };
    DefectListComponent.prototype.saveDefectDetail = function (index, name, value) {
        var _this = this;
        this.defects[index][name] = value;
        this.defectService.update(this.defects[index])
            .subscribe(function (data) {
            _this.toastr.success(_this.translate.instant('defects.messages.update'), _this.translate.instant('defects.title'));
            _this.rerender();
        });
    };
    DefectListComponent.ctorParameters = function () { return [
        { type: _ngx_translate_core__WEBPACK_IMPORTED_MODULE_8__["TranslateService"] },
        { type: ngx_permissions__WEBPACK_IMPORTED_MODULE_7__["NgxRolesService"] },
        { type: _angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"] },
        { type: _angular_router__WEBPACK_IMPORTED_MODULE_3__["ActivatedRoute"] },
        { type: _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClient"] },
        { type: ngx_bootstrap_modal__WEBPACK_IMPORTED_MODULE_4__["BsModalService"] },
        { type: ngx_export_as__WEBPACK_IMPORTED_MODULE_5__["ExportAsService"] },
        { type: ngx_toastr__WEBPACK_IMPORTED_MODULE_6__["ToastrService"] },
        { type: _core_services_defect_service__WEBPACK_IMPORTED_MODULE_12__["DefectService"] },
        { type: _core_services_authentication_service__WEBPACK_IMPORTED_MODULE_13__["AuthenticationService"] }
    ]; };
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewChild"])(angular_datatables__WEBPACK_IMPORTED_MODULE_9__["DataTableDirective"], { static: true }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", angular_datatables__WEBPACK_IMPORTED_MODULE_9__["DataTableDirective"])
    ], DefectListComponent.prototype, "dtElement", void 0);
    DefectListComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-defect-list',
            template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./defect-list.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/modules/pm/defects/pages/defect-list/defect-list.component.html")).default,
            preserveWhitespaces: true,
            styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./defect-list.component.scss */ "./src/app/modules/pm/defects/pages/defect-list/defect-list.component.scss")).default]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_ngx_translate_core__WEBPACK_IMPORTED_MODULE_8__["TranslateService"],
            ngx_permissions__WEBPACK_IMPORTED_MODULE_7__["NgxRolesService"],
            _angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"],
            _angular_router__WEBPACK_IMPORTED_MODULE_3__["ActivatedRoute"],
            _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClient"],
            ngx_bootstrap_modal__WEBPACK_IMPORTED_MODULE_4__["BsModalService"],
            ngx_export_as__WEBPACK_IMPORTED_MODULE_5__["ExportAsService"],
            ngx_toastr__WEBPACK_IMPORTED_MODULE_6__["ToastrService"],
            _core_services_defect_service__WEBPACK_IMPORTED_MODULE_12__["DefectService"],
            _core_services_authentication_service__WEBPACK_IMPORTED_MODULE_13__["AuthenticationService"]])
    ], DefectListComponent);
    return DefectListComponent;
}());



/***/ })

}]);
//# sourceMappingURL=modules-pm-defects-defects-module.js.map