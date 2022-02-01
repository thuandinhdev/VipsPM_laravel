(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["modules-mailbox-mailbox-module"],{

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/modules/mailbox/pages/mailbox/mailbox.component.html":
/*!************************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/modules/mailbox/pages/mailbox/mailbox.component.html ***!
  \************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<section class=\"mailbox-page\">\r\n    <div class=\"card pl-2 pr-2\">\r\n        <div class=\"row\">\r\n            <!-- Sidebar -->\r\n            <div class=\"col-lg-3\">\r\n                <div class=\"sidebar-content\">\r\n                    <div class=\"card-header pl-0\">\r\n                        <h4 class=\"card-title\">{{'mailbox.title' | translate}} {{tableData.length}}</h4>\r\n                    </div>\r\n                    <button (click)=\"composeMail()\" *ngxPermissionsOnly=\"['admin', 'super_admin', 'mailbox_create']\" class=\"btn btn-create\">\r\n                        <i class=\"fa fa-plus\"></i><span>{{'mailbox.title2' | translate}}</span></button>\r\n                    <div [perfectScrollbar]=\"scrollConfig\" class=\"list-group-mail\">\r\n                        <h5>{{'mailbox.title19' | translate}}</h5>\r\n                        <div class=\"list-group list-group-messages no-border\">\r\n                            <a (click)=\"getMail('inbox', 'inbox')\" [ngClass]=\"{'active': tableParams.trashType == 'inbox'}\" class=\"list-group-item no-border\"><i class=\"ft-inbox mr-1\"></i> {{'mailbox.title4' | translate}}\r\n                                <span class=\"badge badge-dark badge-pill float-right\">{{tableData.countUnRead}}</span></a>\r\n                            <a (click)=\"getMail('sent', 'sent')\" [ngClass]=\"{'active': tableParams.trashType == 'sent'}\" class=\"list-group-item list-group-item-action no-border\"><i class=\"fa fa-paper-plane-o mr-1\"></i> {{'mailbox.title5' | translate}}\r\n                            </a>\r\n                            <a (click)=\"getMail('draft', 'draft')\" [ngClass]=\"{'active': tableParams.trashType == 'draft'}\" class=\"list-group-item list-group-item-action no-border\"><i class=\"ft-file mr-1\"></i> {{'mailbox.title6' | translate}}\r\n                            </a>\r\n                            <a (click)=\"getMail('favourite', 'favourite')\" [ngClass]=\"{'active': tableParams.trashType == 'favourite'}\" class=\"list-group-item list-group-item-action no-border\"><i class=\"ft-star mr-1\"></i> {{'mailbox.title7' | translate}}\r\n                                <span class=\"badge badge-danger badge-pill float-right\">{{tableData.countDraft}}</span></a>\r\n                            <a (click)=\"getMail('trash', 'inbox')\" [ngClass]=\"{'active': tableParams.trashType == 'trash'}\" class=\"list-group-item list-group-item-action no-border\"><i class=\"ft-trash-2 mr-1\"></i> {{'mailbox.title8' | translate}}\r\n                            </a>\r\n                        </div>\r\n                    </div>\r\n                </div>\r\n            </div>\r\n\r\n            <!-- Inbox -->\r\n            <div *ngIf=\"mailboxViewable\" class=\"col-lg-9 pr-4 pl-sm-3 pl-3 border-left\">\r\n                <div class=\"card-header pl-0 pr-0 border-bottom\">\r\n                    <h4 *ngIf=\"tableParams.emailType == 'inbox'\" class=\"card-title mt-3\">{{tableParams.emailType | titlecase }} ({{tableData.countUnRead}})</h4>\r\n                    <h4 *ngIf=\"tableParams.emailType != 'inbox'\" class=\"card-title mt-3\">{{tableParams.emailType | titlecase }} ({{tableData.totalData}})</h4>\r\n                    <!-- Search -->\r\n                    <div *ngIf=\"tableData.totalData != 0\" class=\"card-buttons d-flex\">\r\n                        <div class=\"btn-round-search mr-1\">\r\n                            <form>\r\n                                <div class=\"input-group mb-0\">\r\n                                    <input [(ngModel)]='txtSearch' aria-describedby=\"button-addon2\" class=\"form-control\" name=\"txtSearch\" placeholder=\"{{'mailbox.title1' | translate}}\" type=\"text\">\r\n                                    <button (click)=\"search()\" class=\"btn btn-raised btn-round\" type=\"submit\" type=\"button\">\r\n                                        <i class=\"fa fa-search\"></i></button>\r\n                                </div>\r\n                            </form>\r\n                        </div>\r\n                    </div>\r\n                </div>\r\n                <div *ngIf=\"tableData.totalData != 0\" class=\"mail-box-header\">\r\n                    <div class=\"mail-tools d-flex justify-content-between\">\r\n                        <div class=\"btn-group\">\r\n                            <button (click)=\"referesh()\" class=\"btn\" tooltip=\"{{'mailbox.title12' | translate}}\">\r\n                                <i class=\"fa fa-refresh\"></i></button>\r\n                            <!-- Trash -->\r\n                            <ng-container *ngIf=\"tableParams.emailType == 'trash'\">\r\n                                <button (click)=\"getMail('trash', 'inbox')\" [ngClass]=\"{'active': tableParams.trashType == 'inbox'}\" class=\"btn\" tooltip=\"{{'mailbox.title4' | translate}}\">\r\n                                    <i class=\"ft-inbox\"></i></button>\r\n                                <button (click)=\"getMail('trash', 'sent')\" [ngClass]=\"{'active': tableParams.trashType == 'sent'}\" class=\"btn\" tooltip=\"{{'mailbox.title5' | translate}}\">\r\n                                    <i class=\"fa fa-paper-plane-o\"></i></button>\r\n                                <button (click)=\"getMail('trash', 'draft')\" [ngClass]=\"{'active': tableParams.trashType == 'draft'}\" class=\"btn\" tooltip=\"{{'mailbox.title6' | translate}}\">\r\n                                    <i class=\"ft-star\"></i></button>\r\n                            </ng-container>\r\n                            <!-- Inbox -->\r\n                            <ng-container *ngIf=\"tableParams.emailType == 'inbox'\">\r\n                                <button (click)=\"markAsRead()\" *ngxPermissionsOnly=\"['admin', 'super_admin', 'mailbox_edit']\" class=\"btn\" tooltip=\"{{'mailbox.title13' | translate}}\">\r\n                                    <i class=\"fa fa-eye\"></i></button>\r\n                                <button (click)=\"markAsFavourite()\" *ngxPermissionsOnly=\"['admin', 'super_admin', 'mailbox_edit']\" class=\"btn\" tooltip=\"{{'mailbox.title14' | translate}}\">\r\n                                    <i class=\"fa fa-exclamation\"></i></button>\r\n                                <button (click)=\"moveToTrash()\" *ngxPermissionsOnly=\"['admin', 'super_admin', 'mailbox_delete']\" class=\"btn\" tooltip=\"{{'mailbox.title15' | translate}}\">\r\n                                    <i class=\"fa fa-trash-o\"></i></button>\r\n                            </ng-container>\r\n                        </div>\r\n                        <!-- Pagination -->\r\n                        <div class=\"btn-group\">\r\n                            <button (click)=\"setPage(tableParams.currentPage - 1)\" [ngClass]=\"{disabled:tableParams.currentPage === 1 || tableData.totalPage === 0}\" class=\"btn\">\r\n                                <i class=\"fa fa-arrow-left\"></i></button>\r\n                            <button (click)=\"setPage(tableParams.currentPage + 1)\" [ngClass]=\"{disabled:tableParams.currentPage === tableData.totalPage ||  tableData.totalPage === 0}\" class=\"btn\">\r\n                                <i class=\"fa fa-arrow-right\"></i></button>\r\n                        </div>\r\n                    </div>\r\n                </div>\r\n\r\n                <!-- Email list -->\r\n                <div class=\"mail-box\">\r\n                    <div class=\"table-responsive-xs table-responsive-sm table-responsive-md table-responsive-lg table-responsive-xl\">\r\n                        <table class=\"table table-hover table-mail\">\r\n                            <tbody *ngIf=\"tableData.totalData != 0\">\r\n                            <tr *ngFor=\"let mail of tableData.listData; index as i\" class=\"{{ ( mail.view_status == 1 ) ? 'read' : 'unread' }}\" class=\"unread\">\r\n                                <td *ngIf=\"tableParams.emailType == 'inbox'\" class=\"check-mail\">\r\n                                    <label class=\"checkbox-container\">\r\n                                        <input [(checklist)]=\"mail_checked\" [checklistValue]=\"mail.id\" class=\"form-control\" name=\"mail_check_{{i}}\" type=\"checkbox\"/>\r\n                                        <span class=\"checkbox-checkmark\"></span>\r\n                                    </label>\r\n                                </td>\r\n                                <td>\r\n\t\t\t\t\t\t\t\t\t\t<span *ngIf=\"mail.favourites == 1 && tableParams.emailType != 'trash'\">\r\n\t\t\t\t\t\t\t\t\t\t\t<a (click)=\"setUnFavouriteMail(mail.id)\" *ngxPermissionsOnly=\"['admin', 'super_admin', 'mailbox_edit']\">\r\n\t\t\t\t\t\t\t\t\t\t\t\t<i class=\"fa fa-star fa-lg text-warning\"></i>\r\n\t\t\t\t\t\t\t\t\t\t\t</a>\r\n\t\t\t\t\t\t\t\t\t\t</span>\r\n                                </td>\r\n                                <td class=\"mail-contact\">\r\n                                    <div *ngxPermissionsOnly=\"['admin', 'super_admin', 'mailbox_view']; else elseBlock1; then thenBlock1\"></div>\r\n                                    <ng-template #elseBlock1></ng-template>\r\n                                    <ng-template #thenBlock1>\r\n                                        <ng-container *ngIf=\"tableParams.emailType == 'inbox' || tableParams.emailType == 'favourite'\">\r\n                                            <a (click)=\"mailView(mail.id, 'inbox')\" [tooltipAnimation]=\"true\" placement=\"bottom\" tooltip=\"{{ getSentUser(mail.from) | titlecase }}\">{{ getSentUser(mail.from) | titlecase }}</a>\r\n                                        </ng-container>\r\n                                        <ng-container *ngIf=\"tableParams.emailType == 'sent'\">\r\n                                            <a (click)=\"mailView(mail.id, 'sent')\" [tooltipAnimation]=\"true\" placement=\"bottom\" tooltip=\"{{ getSentUser(mail.to) | titlecase }}\">{{ getSentUser(mail.to) | titlecase }}</a>\r\n                                        </ng-container>\r\n                                        <ng-template *ngIf=\"tableParams.emailType == 'draft' || tableParams.emailType == 'trash'\">\r\n                                            <a (click)=\"mailView(mail.id, 'draft')\" [tooltipAnimation]=\"true\" placement=\"bottom\" tooltip=\"{{ getSentUser(mail.user.email) | titlecase }}\">{{ getSentUser(mail.user.email) | titlecase }}</a>\r\n                                        </ng-template>\r\n                                    </ng-template>\r\n                                </td>\r\n                                <td class=\"mail-subject\">\r\n\t\t\t\t\t\t\t\t\t\t<span *ngIf=\"tableParams.emailType == 'trash'\" [tooltipAnimation]=\"true\" placement=\"bottom\" tooltip=\"{{ mail.subject }}\">\r\n\t\t\t\t\t\t\t\t\t\t\t{{mail.subject}}\r\n\t\t\t\t\t\t\t\t\t\t</span>\r\n                                    <span *ngIf=\"tableParams.emailType != 'trash'\">\r\n\t\t\t\t\t\t\t\t\t\t\t<a (click)=\"mailView(mail.id)\" [tooltipAnimation]=\"true\" placement=\"bottom\" tooltip=\"{{ mail.subject }}\">{{mail.subject}}</a>\r\n\t\t\t\t\t\t\t\t\t\t</span>\r\n                                </td>\r\n                                <td>\r\n\t\t\t\t\t\t\t\t\t\t<span *ngIf=\"tableParams.emailType != 'trash'\">\r\n\t\t\t\t\t\t\t\t\t\t\t<i (click)=\"mailView(mail.id)\" *ngIf=\"mail.attachments?.length\" class=\"fa fa-paperclip\"></i>\r\n\t\t\t\t\t\t\t\t\t\t</span>\r\n                                </td>\r\n                                <td class=\"text-right mail-date\">\r\n\t\t\t\t\t\t\t\t\t\t<span *ngIf=\"tableParams.emailType == 'trash'\">\r\n\t\t\t\t\t\t\t\t\t\t\t{{ mail.created_at | dateTimeFormatFilter: loginUser.settings.date_time_format }}\r\n\t\t\t\t\t\t\t\t\t\t</span>\r\n                                    <span *ngIf=\"tableParams.emailType != 'trash'\">\r\n\t\t\t\t\t\t\t\t\t\t\t<a (click)=\"mailView(mail.id)\">{{ mail.created_at | dateTimeFormatFilter: loginUser.settings.date_time_format }}</a>\r\n\t\t\t\t\t\t\t\t\t\t</span>\r\n                                </td>\r\n                            </tr>\r\n                            </tbody>\r\n                            <tbody *ngIf=\"tableData.totalData == 0\" class=\"tfoot_dt\">\r\n                            <tr>\r\n                                <td class=\"text-center\" colspan=\"6\">\r\n                                    <img src=\"assets/img/norecord-img.png\" width=\"50\">\r\n                                    <p class=\"mt-1\">{{'common.empty_message.mails' | translate}}</p>\r\n                                </td>\r\n                            </tr>\r\n                            </tbody>\r\n                        </table>\r\n                    </div>\r\n                </div>\r\n            </div>\r\n\r\n            <!-- Compose mail -->\r\n            <div *ngIf=\"composeViewable\" class=\"col-lg-9 pr-4 pl-sm-3 pl-3 border-left\">\r\n                <div class=\"card-header pl-0 pr-0 border-bottom\">\r\n                    <h4 class=\"card-title mt-2\">{{'mailbox.title3' | translate}}</h4>\r\n                    <div class=\"card-buttons\">\r\n                        <button (click)=\"onSubmit('draft')\" *ngxPermissionsOnly=\"['admin', 'super_admin', 'mailbox_create']\" class=\"btn btn-cancel btn-sm mb-0\" tooltip=\"{{'mailbox.title16' | translate}}\">\r\n                            <i class=\"fa fa-pencil\"></i> {{'mailbox.title6' | translate}}</button>\r\n                        <button (click)=\"getMail('inbox')\" class=\"btn btn-submit btn-sm mb-0\" tooltip=\"{{'mailbox.title17' | translate}}\">\r\n                            <i class=\"fa fa-times\"></i> {{'mailbox.title9' | translate}}</button>\r\n                    </div>\r\n                </div>\r\n                <div class=\"compose-box pt-3\">\r\n                    <form (ngSubmit)=\"onSubmit('inbox')\" [formGroup]=\"composeMailForm\">\r\n                        <div class=\"mail-body\">\r\n                            <div [ngClass]=\"{ 'is-invalid': submitted && mailForm.to.errors }\" class=\"form-group row\">\r\n                                <label class=\"col-sm-2\">{{'mailbox.compose.fields.to' | translate}}:</label>\r\n                                <div class=\"col-sm-10\">\r\n                                    <ng-select [closeOnSelect]=\"true\" [items]=\"mailboxUsers\" [multiple]=\"true\" [searchable]=\"true\" [selectOnTab]=\"true\" bindValue=\"value\" formControlName=\"to\" labelForId=\"to\" placeholder=\"{{'mailbox.compose.placeholders.placeholder1' | translate}}\"></ng-select>\r\n                                    <div *ngIf=\"submitted && mailForm.to.errors\" class=\"invalid-feedback\">\r\n                                        <div *ngIf=\"mailForm.to.errors.required\">{{'mailbox.compose.error_messages.message1' | translate}}</div>\r\n                                    </div>\r\n                                </div>\r\n                            </div>\r\n                            <div class=\"form-group row\">\r\n                                <label class=\"col-sm-2\">{{'mailbox.compose.fields.subject' | translate}}:</label>\r\n                                <div class=\"col-sm-10\">\r\n                                    <input [ngClass]=\"{ 'is-invalid': submitted && mailForm.subject.errors }\" class=\"form-control\" formControlName=\"subject\" id=\"subject\" placeholder=\"{{'mailbox.compose.placeholders.placeholder2' | translate}}\" type=\"text\">\r\n                                    <div *ngIf=\"submitted && mailForm.subject.errors\" class=\"invalid-feedback\">\r\n                                        <div *ngIf=\"mailForm.subject.errors.required\">{{'mailbox.compose.error_messages.message2' | translate}}</div>\r\n                                    </div>\r\n                                </div>\r\n                            </div>\r\n                            <div class=\"form-group row\">\r\n                                <div class=\"col-sm-12\">\r\n                                    <app-ngx-editor [placeholder]=\"''\" [spellcheck]=\"true\" formControlName=\"message_body\" height=\"100px\" id=\"message_body\" minHeight=\"50px\"></app-ngx-editor>\r\n                                </div>\r\n                            </div>\r\n                            <div class=\"form-group row\">\r\n                                <!-- Attachements -->\r\n                                <div class=\"col-sm-12\">\r\n                                    <label class=\"btn btn-raised btn-info round btn-file\">\r\n                                        <input [uploader]=\"uploader\" class=\"d-none\" multiple ng2FileSelect type=\"file\"/>\r\n                                        <span class=\"fa fa-paperclip\">&nbsp;{{'mailbox.title11' | translate}}</span>\r\n                                    </label>\r\n                                    <div *ngIf=\"uploader.queue.length != 0\" class=\"table-responsive-xs table-responsive-sm table-responsive-md table-responsive-lg table-responsive-xl\">\r\n                                        <table class=\"table table-hover b4-datatable\">\r\n                                            <thead>\r\n                                            <tr>\r\n                                                <th width=\"50%\">{{'mailbox.compose.columns.name' | translate}}</th>\r\n                                                <th>{{'mailbox.compose.columns.size' | translate}}</th>\r\n                                                <th>{{'mailbox.compose.columns.progress' | translate}}</th>\r\n                                                <th>{{'mailbox.compose.columns.status' | translate}}</th>\r\n                                                <th>{{'mailbox.compose.columns.actions' | translate}}</th>\r\n                                            </tr>\r\n                                            </thead>\r\n                                            <tbody>\r\n                                            <tr *ngFor=\"let item of uploader.queue; index as i\">\r\n                                                <td><strong>{{ item?.file?.name }}</strong></td>\r\n                                                <td *ngIf=\"uploader.options.isHTML5\" nowrap>{{ item?.file?.size / 1024 / 1024 | number:'.2' }} MB</td>\r\n                                                <td *ngIf=\"uploader.options.isHTML5\">\r\n                                                    <progressbar [animate]=\"true\" [striped]=\"true\" [value]=\"item.progress\" max=\"100\"></progressbar>\r\n                                                </td>\r\n                                                <td class=\"budges-status\">\r\n                                                    <span *ngIf=\"item.isSuccess\" class=\"completed\">{{'common.status.success' | translate}}</span>\r\n                                                    <span *ngIf=\"item.isCancel\" class=\"cancel\">{{'common.status.cancel' | translate}}</span>\r\n                                                    <span *ngIf=\"item.isError\" class=\"closed\">{{'common.status.error' | translate}}</span>\r\n                                                </td>\r\n                                                <td nowrap>\r\n                                                    <button (click)=\"item.remove();uploaderRemove(attachmentsArr[i])\" class=\"btn btn-raised btn-danger white btn-xs mb-0\" type=\"button\">\r\n                                                        <span class=\"fa fa-close\"></span></button>\r\n                                                </td>\r\n                                            </tr>\r\n                                            </tbody>\r\n                                        </table>\r\n                                    </div>\r\n                                </div>\r\n                            </div>\r\n                        </div>\r\n                        <div class=\"mail-foote text-right\">\r\n                            <button class=\"btn btn-submit btn-sm\" tooltip=\"{{'mailbox.title10' | translate}}\">\r\n                                <i class=\"fa fa-reply\"></i> {{'mailbox.title10' | translate}}</button>\r\n                        </div>\r\n                    </form>\r\n                </div>\r\n            </div>\r\n\r\n            <!-- Mail view -->\r\n            <div *ngIf=\"mailviewViewable && isMailLoaded\" class=\"col-lg-9 pr-4 pl-sm-3 pl-3 border-left\">\r\n                <div class=\"card-header pl-0 pr-0 border-bottom\">\r\n                    <h4 class=\"card-title mt-2\">{{'mailbox.title18' | translate}}</h4>\r\n                    <div class=\"card-buttons\">\r\n                        <button (click)='deleteMail(mailDetails.id)' *ngxPermissionsOnly=\"['admin', 'super_admin', 'mailbox_delete']\" class=\"btn btn-submit btn-action-icon mb-0 btn-round\" tooltip=\"{{'mailbox.title17' | translate}}\">\r\n                            <i class=\"fa fa-trash-o\"></i></button>\r\n                    </div>\r\n                </div>\r\n                <div class=\"card-body\">\r\n                    <div class=\"mail-tools-head d-flex justify-content-between pt-3\">\r\n                        <div class=\"mail-head-sub\">\r\n                            <h2><span>{{'mailbox.compose.fields.subject' | translate}}: </span>{{ mailDetails.subject }}\r\n                            </h2>\r\n                            <ng-container *ngIf=\"mailboxType == 'inbox'\">\r\n                                <h6>\r\n                                    <span>{{'mailbox.compose.fields.from' | translate}}: </span>{{ getSentUser(mailDetails.from) }}\r\n                                </h6>\r\n                            </ng-container>\r\n                            <ng-container *ngIf=\"mailboxType == 'sent'\">\r\n                                <h6>\r\n                                    <span>{{'mailbox.compose.fields.from' | translate}}: </span>{{ getSentUser(mailDetails.to) }}\r\n                                </h6>\r\n                            </ng-container>\r\n                            <ng-container *ngIf=\"mailboxType == 'draft'\">\r\n                                <h6>\r\n                                    <span>{{'mailbox.compose.fields.from' | translate}}: </span>{{ getSentUser(mailDetails.user.email) }}\r\n                                </h6>\r\n                            </ng-container>\r\n                        </div>\r\n                        <div class=\"mail-head-time\">\r\n                            <span>{{ mailDetails.created_at | dateTimeFormatFilter: loginUser.settings.date_time_format }}</span>\r\n                        </div>\r\n                    </div>\r\n                    <div class=\"mail-message\">\r\n                        <div [innerHTML]=\"mailDetails.message_body\"></div>\r\n                    </div>\r\n                    <div class=\"mail-attachment\">\r\n                        <p class=\"mail-attachment-child\">\r\n                            <span><i class=\"fa fa-paperclip\"></i> {{ mailDetails.attachments?.length || '0' }} {{'mailbox.title11' | translate}}</span>\r\n                        </p>\r\n                        <div class=\"row\">\r\n                            <div *ngFor=\"let mail of mailDetails.attachments; index as i\" class=\"col-xl-4 col-md-6\">\r\n                                <div class=\"file-browser\">\r\n                                    <div class=\"file-box\">\r\n                                        <div class=\"files\">\r\n                                            <a download=\"{{mail.file_name}}\" href=\"{{ apiUrl }}/uploads/mailbox/{{mail.file_hash}}\" target=\"_blank\">\r\n                                                <div *ngIf=\"mail.file_extension == 'jpg' || mail.file_extension == 'png'; else elseBlock\" class=\"image\">\r\n                                                    <img alt=\"image\" class=\"img-fluid height-100\" src=\"{{ apiUrl }}/uploads/mailbox/{{mail.file_hash}}\"/>\r\n                                                </div>\r\n                                                <ng-template #elseBlock>\r\n                                                    <div class=\"icon docx\">\r\n                                                        <i class=\"fa fa-file\"></i>\r\n                                                    </div>\r\n                                                </ng-template>\r\n                                                <div class=\"file-name\">\r\n                                                    <h4>{{ mail.file_name }}</h4>\r\n                                                    <p>Added: {{ mail.created_at | dateTimeFormatFilter: loginUser.settings.date_time_format }}</p>\r\n                                                </div>\r\n                                                <span class=\"corner\"></span>\r\n                                            </a>\r\n                                        </div>\r\n                                    </div>\r\n                                </div>\r\n                            </div>\r\n                        </div>\r\n                    </div>\r\n                </div>\r\n            </div>\r\n        </div>\r\n    </div>\r\n</section>\r\n");

/***/ }),

/***/ "./src/app/core/services/mail.service.ts":
/*!***********************************************!*\
  !*** ./src/app/core/services/mail.service.ts ***!
  \***********************************************/
/*! exports provided: MailService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MailService", function() { return MailService; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../environments/environment */ "./src/environments/environment.ts");




var MailService = /** @class */ (function () {
    function MailService(http) {
        this.http = http;
        this.apiUrl = _environments_environment__WEBPACK_IMPORTED_MODULE_3__["environment"].apiUrl;
    }
    MailService.prototype.create = function (emailCompose) {
        return this.http.post(this.apiUrl + "/api/mailbox", emailCompose);
    };
    MailService.prototype.getAll = function (reqObj) {
        return this.http.post(this.apiUrl + "/api/all-mailbox", reqObj);
    };
    MailService.prototype.findById = function (id) {
        return this.http.get(this.apiUrl + "/api/mailbox/" + id);
    };
    MailService.prototype.destroy = function (id) {
        return this.http.delete(this.apiUrl + "/api/mailbox/" + id);
    };
    MailService.prototype.markAsRead = function (mailObj) {
        return this.http.post(this.apiUrl + "/api/mailbox/reads", mailObj);
    };
    MailService.prototype.markAsFavourite = function (mailObj) {
        return this.http.post(this.apiUrl + "/api/mailbox/favourite", mailObj);
    };
    MailService.prototype.removeMarkMails = function (mailObj) {
        return this.http.post(this.apiUrl + "/api/mailbox/remove", mailObj);
    };
    MailService.prototype.removeAttachments = function (dataObj) {
        return this.http.post(this.apiUrl + "/api/mailbox/attachment/remove", dataObj);
    };
    MailService.prototype.setUnFavouriteMail = function (dataObj) {
        return this.http.post(this.apiUrl + "/api/mailbox/unfavourite", dataObj);
    };
    MailService.prototype.getUnReadMails = function (length) {
        return this.http.post(this.apiUrl + "/api/mailbox/unread-emails", { length: length });
    };
    MailService.ctorParameters = function () { return [
        { type: _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClient"] }
    ]; };
    MailService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
            providedIn: 'root'
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClient"]])
    ], MailService);
    return MailService;
}());



/***/ }),

/***/ "./src/app/modules/mailbox/mailbox-routing.module.ts":
/*!***********************************************************!*\
  !*** ./src/app/modules/mailbox/mailbox-routing.module.ts ***!
  \***********************************************************/
/*! exports provided: MailboxRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MailboxRoutingModule", function() { return MailboxRoutingModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _pages_mailbox_mailbox_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./pages/mailbox/mailbox.component */ "./src/app/modules/mailbox/pages/mailbox/mailbox.component.ts");




var routes = [
    {
        path: '',
        children: [
            { path: '', component: _pages_mailbox_mailbox_component__WEBPACK_IMPORTED_MODULE_3__["MailboxComponent"] },
        ]
    }
];
var MailboxRoutingModule = /** @class */ (function () {
    function MailboxRoutingModule() {
    }
    MailboxRoutingModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)],
            exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]]
        })
    ], MailboxRoutingModule);
    return MailboxRoutingModule;
}());



/***/ }),

/***/ "./src/app/modules/mailbox/mailbox.module.ts":
/*!***************************************************!*\
  !*** ./src/app/modules/mailbox/mailbox.module.ts ***!
  \***************************************************/
/*! exports provided: MailboxModule, HttpLoaderFactory */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MailboxModule", function() { return MailboxModule; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "HttpLoaderFactory", function() { return HttpLoaderFactory; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _ng_select_ng_select__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @ng-select/ng-select */ "./node_modules/@ng-select/ng-select/fesm5/ng-select.js");
/* harmony import */ var ngx_editor__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ngx-editor */ "./node_modules/ngx-editor/fesm5/ngx-editor.js");
/* harmony import */ var ngx_bootstrap__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ngx-bootstrap */ "./node_modules/ngx-bootstrap/esm5/ngx-bootstrap.js");
/* harmony import */ var ngx_bootstrap_progressbar__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ngx-bootstrap/progressbar */ "./node_modules/ngx-bootstrap/progressbar/fesm5/ngx-bootstrap-progressbar.js");
/* harmony import */ var ngx_permissions__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ngx-permissions */ "./node_modules/ngx-permissions/ngx-permissions.umd.js");
/* harmony import */ var ngx_permissions__WEBPACK_IMPORTED_MODULE_9___default = /*#__PURE__*/__webpack_require__.n(ngx_permissions__WEBPACK_IMPORTED_MODULE_9__);
/* harmony import */ var ngx_perfect_scrollbar__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ngx-perfect-scrollbar */ "./node_modules/ngx-perfect-scrollbar/dist/ngx-perfect-scrollbar.es5.js");
/* harmony import */ var _ngx_translate_core__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! @ngx-translate/core */ "./node_modules/@ngx-translate/core/fesm5/ngx-translate-core.js");
/* harmony import */ var _ngx_translate_http_loader__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! @ngx-translate/http-loader */ "./node_modules/@ngx-translate/http-loader/fesm5/ngx-translate-http-loader.js");
/* harmony import */ var ng2_file_upload__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ng2-file-upload */ "./node_modules/ng2-file-upload/fesm5/ng2-file-upload.js");
/* harmony import */ var angular_checklist__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! angular-checklist */ "./node_modules/angular-checklist/fesm5/angular-checklist.js");
/* harmony import */ var _shared_shared_module__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! ../../shared/shared.module */ "./src/app/shared/shared.module.ts");
/* harmony import */ var _mailbox_routing_module__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! ./mailbox-routing.module */ "./src/app/modules/mailbox/mailbox-routing.module.ts");
/* harmony import */ var _pages_mailbox_mailbox_component__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! ./pages/mailbox/mailbox.component */ "./src/app/modules/mailbox/pages/mailbox/mailbox.component.ts");


















var DEFAULT_PERFECT_SCROLLBAR_CONFIG = {
    suppressScrollX: true
};
var MailboxModule = /** @class */ (function () {
    function MailboxModule() {
    }
    MailboxModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            declarations: [_pages_mailbox_mailbox_component__WEBPACK_IMPORTED_MODULE_17__["MailboxComponent"]],
            imports: [
                _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
                _mailbox_routing_module__WEBPACK_IMPORTED_MODULE_16__["MailboxRoutingModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_4__["FormsModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_4__["ReactiveFormsModule"],
                ngx_editor__WEBPACK_IMPORTED_MODULE_6__["NgxEditorModule"],
                angular_checklist__WEBPACK_IMPORTED_MODULE_14__["ChecklistModule"],
                _angular_common_http__WEBPACK_IMPORTED_MODULE_3__["HttpClientModule"],
                ng2_file_upload__WEBPACK_IMPORTED_MODULE_13__["FileUploadModule"],
                _ng_select_ng_select__WEBPACK_IMPORTED_MODULE_5__["NgSelectModule"],
                ngx_perfect_scrollbar__WEBPACK_IMPORTED_MODULE_10__["PerfectScrollbarModule"],
                ngx_permissions__WEBPACK_IMPORTED_MODULE_9__["NgxPermissionsModule"],
                ngx_bootstrap__WEBPACK_IMPORTED_MODULE_7__["TooltipModule"].forRoot(),
                ngx_bootstrap_progressbar__WEBPACK_IMPORTED_MODULE_8__["ProgressbarModule"].forRoot(),
                _ngx_translate_core__WEBPACK_IMPORTED_MODULE_11__["TranslateModule"].forChild({
                    loader: {
                        provide: _ngx_translate_core__WEBPACK_IMPORTED_MODULE_11__["TranslateLoader"],
                        useFactory: (HttpLoaderFactory),
                        deps: [_angular_common_http__WEBPACK_IMPORTED_MODULE_3__["HttpClient"]]
                    }
                }),
                _shared_shared_module__WEBPACK_IMPORTED_MODULE_15__["SharedModule"]
            ],
            providers: [{
                    provide: ngx_perfect_scrollbar__WEBPACK_IMPORTED_MODULE_10__["PERFECT_SCROLLBAR_CONFIG"],
                    useValue: DEFAULT_PERFECT_SCROLLBAR_CONFIG
                }]
        })
    ], MailboxModule);
    return MailboxModule;
}());

// Required for AOT compilation
function HttpLoaderFactory(http) {
    return new _ngx_translate_http_loader__WEBPACK_IMPORTED_MODULE_12__["TranslateHttpLoader"](http, './assets/i18n/', '.json');
}


/***/ }),

/***/ "./src/app/modules/mailbox/pages/mailbox/mailbox.component.scss":
/*!**********************************************************************!*\
  !*** ./src/app/modules/mailbox/pages/mailbox/mailbox.component.scss ***!
  \**********************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL21vZHVsZXMvbWFpbGJveC9wYWdlcy9tYWlsYm94L21haWxib3guY29tcG9uZW50LnNjc3MifQ== */");

/***/ }),

/***/ "./src/app/modules/mailbox/pages/mailbox/mailbox.component.ts":
/*!********************************************************************!*\
  !*** ./src/app/modules/mailbox/pages/mailbox/mailbox.component.ts ***!
  \********************************************************************/
/*! exports provided: MailboxComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MailboxComponent", function() { return MailboxComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var ngx_toastr__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ngx-toastr */ "./node_modules/ngx-toastr/fesm5/ngx-toastr.js");
/* harmony import */ var _ngx_translate_core__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ngx-translate/core */ "./node_modules/@ngx-translate/core/fesm5/ngx-translate-core.js");
/* harmony import */ var ng2_file_upload__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ng2-file-upload */ "./node_modules/ng2-file-upload/fesm5/ng2-file-upload.js");
/* harmony import */ var sweetalert2__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! sweetalert2 */ "./node_modules/sweetalert2/dist/sweetalert2.all.js");
/* harmony import */ var sweetalert2__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(sweetalert2__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var _core_services_authentication_service__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../../../../core/services/authentication.service */ "./src/app/core/services/authentication.service.ts");
/* harmony import */ var _core_services_mail_service__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../../../../core/services/mail.service */ "./src/app/core/services/mail.service.ts");
/* harmony import */ var _core_services_user_service__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../../../../core/services/user.service */ "./src/app/core/services/user.service.ts");
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ../../../../../environments/environment */ "./src/environments/environment.ts");











var MailboxComponent = /** @class */ (function () {
    function MailboxComponent(translate, authenticationService, mailService, userService, toastr, formBuilder) {
        var _this = this;
        this.translate = translate;
        this.authenticationService = authenticationService;
        this.mailService = mailService;
        this.userService = userService;
        this.toastr = toastr;
        this.formBuilder = formBuilder;
        this.scrollConfig = {};
        this.resData = {};
        this.mailDetails = {};
        this.mailboxData = {};
        this.tableData = {};
        this.tableParams = {};
        this.mail_checked = [];
        this.submitted = false;
        this.isMailLoaded = false;
        this.attachmentsArr = [];
        this.mailboxUsers = [];
        this.mailboxEmailsUsers = [];
        this.apiUrl = _environments_environment__WEBPACK_IMPORTED_MODULE_10__["environment"].apiUrl;
        this.loginToken = this.authenticationService.currentTokenValue;
        this.authenticationService.loginUser.subscribe(function (x) { return _this.loginUser = x; });
        this.toggle(true, false, false);
        this.loadFileUploader();
    }
    Object.defineProperty(MailboxComponent.prototype, "mailForm", {
        get: function () {
            return this.composeMailForm.controls;
        },
        enumerable: true,
        configurable: true
    });
    MailboxComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.setTableParams();
        this.tableParams.length = 5;
        this.tableParams.emailType = 'inbox';
        this.tableParams.trashType = 'inbox';
        this.getMail(this.tableParams.emailType);
        this.uploader.onBeforeUploadItem = function (item) {
            item.withCredentials = false;
        };
        this.uploader.onCompleteItem = function (item, response, status, headers) {
            if (!isNaN(response)) {
                _this.attachmentsArr.push(response);
                _this.toastr.success(_this.translate.instant('mailbox.messages.message'), _this.translate.instant('mailbox.title'));
            }
        };
        this.userService.getMailUsers().subscribe(function (resp) {
            _this.mailboxEmailsUsers = resp;
            resp.forEach(function (user) {
                _this.mailboxUsers.push({ value: user.id, label: user.firstname + ' ' + user.lastname });
            });
        });
    };
    MailboxComponent.prototype.loadFileUploader = function () {
        this.uploader = new ng2_file_upload__WEBPACK_IMPORTED_MODULE_5__["FileUploader"]({
            url: this.apiUrl + '/api/mailbox/files/upload',
            method: 'post',
            authToken: this.loginToken.token_type + ' ' + this.loginToken.token,
            removeAfterUpload: false,
            autoUpload: true,
            isHTML5: true,
        });
        this.hasBaseDropZoneOver = false;
    };
    MailboxComponent.prototype.getMail = function (emailType, trashType) {
        var _this = this;
        if (trashType === void 0) { trashType = this.tableParams.trashType; }
        this.toggle(true, false, false);
        if (emailType != this.tableParams.emailType) {
            this.tableParams.emailType = emailType;
            this.setTableParams();
        }
        if (trashType != this.tableParams.trashType && trashType != '') {
            this.tableParams.trashType = trashType;
            this.setTableParams();
        }
        var reqObj = {
            type: this.tableParams.emailType,
            trashType: this.tableParams.trashType,
            search: this.txtSearch,
            currentPage: this.tableParams.currentPage,
            length: this.tableParams.length,
            start: (this.tableParams.currentPage - 1) * this.tableParams.length,
        };
        this.mailService.getAll(reqObj).subscribe(function (resp) {
            _this.mailboxData = resp;
            _this.tableData = {
                listData: _this.mailboxData.mailbox,
                countUnRead: _this.mailboxData.countUnRead,
                countDraft: _this.mailboxData.countDraft,
                totalPage: _this.mailboxData.totalPage,
                totalData: _this.mailboxData.totalData,
            };
        });
    };
    MailboxComponent.prototype.search = function () {
        this.setTableParams();
        this.getMail(this.tableParams.emailType);
    };
    MailboxComponent.prototype.setPage = function (currentPage) {
        var isPageSet = true;
        if (currentPage < 1) {
            currentPage = 1;
            isPageSet = false;
        }
        else if (currentPage > this.tableData.totalPage) {
            currentPage = this.tableData.totalPage;
            isPageSet = false;
        }
        this.tableParams.currentPage = currentPage;
        if (isPageSet) {
            this.getMail(this.tableParams.emailType);
        }
    };
    MailboxComponent.prototype.setTableParams = function () {
        this.tableParams.start = 0;
        this.tableParams.currentPage = 1;
    };
    MailboxComponent.prototype.markAsRead = function () {
        var _this = this;
        var mailObj = {
            ids: this.mail_checked
        };
        if (this.mail_checked.length <= 0) {
            this.toastr.error(this.translate.instant('mailbox.messages.message2'), this.translate.instant('mailbox.title'));
            return false;
        }
        this.mailService.markAsRead(mailObj).subscribe(function (data) {
            _this.toastr.success(_this.translate.instant('mailbox.messages.message8'), _this.translate.instant('mailbox.title'));
            _this.referesh();
        });
    };
    MailboxComponent.prototype.markAsFavourite = function () {
        var _this = this;
        var mailObj = {
            ids: this.mail_checked
        };
        if (this.mail_checked.length <= 0) {
            this.toastr.error(this.translate.instant('mailbox.messages.message2'), this.translate.instant('mailbox.title'));
            return false;
        }
        this.mailService.markAsFavourite(mailObj).subscribe(function (data) {
            _this.toastr.success(_this.mail_checked.length + _this.translate.instant('mailbox.messages.message7'), _this.translate.instant('mailbox.title'));
            _this.referesh();
        });
    };
    MailboxComponent.prototype.setUnFavouriteMail = function (id) {
        var _this = this;
        var mailObj = {
            id: id
        };
        this.mailService.setUnFavouriteMail(mailObj).subscribe(function (data) {
            _this.toastr.success(_this.translate.instant('mailbox.messages.message6'), _this.translate.instant('mailbox.title'));
            _this.referesh();
        });
    };
    MailboxComponent.prototype.moveToTrash = function () {
        var _this = this;
        var mailObj = {
            ids: this.mail_checked
        };
        if (this.mail_checked.length <= 0) {
            this.toastr.error(this.translate.instant('mailbox.messages.message2'), this.translate.instant('mailbox.title'));
            return false;
        }
        this.mailService.removeMarkMails(mailObj).subscribe(function (data) {
            _this.toastr.success(_this.mail_checked.length + _this.translate.instant('mailbox.messages.message5'), _this.translate.instant('mailbox.title'));
            _this.referesh();
        });
    };
    MailboxComponent.prototype.composeMail = function () {
        this.toggle(false, true, false);
        this.attachmentsArr = [];
        this.composeMailForm = this.formBuilder.group({
            to: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required],
            subject: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required],
            message_body: [''],
        });
    };
    MailboxComponent.prototype.onSubmit = function (type) {
        var _this = this;
        this.submitted = true;
        if (this.composeMailForm.invalid) {
            return;
        }
        var mailComObj = {
            type: type,
            to: this.composeMailForm.value.to,
            subject: this.composeMailForm.value.subject,
            message_body: this.composeMailForm.value.message_body,
            attachments: this.attachmentsArr,
        };
        this.mailService.create(mailComObj).subscribe(function (data) {
            if (type == 'draft') {
                _this.toastr.success(_this.translate.instant('mailbox.messages.message9'), _this.translate.instant('mailbox.title'));
            }
            else {
                _this.toastr.success(_this.translate.instant('mailbox.messages.message3'), _this.translate.instant('mailbox.title'));
            }
            _this.toggle(true, false, false);
        });
    };
    // View mail.
    MailboxComponent.prototype.mailView = function (id, type) {
        var _this = this;
        this.isMailLoaded = false;
        this.mailboxType = type;
        this.mailService.findById(id).subscribe(function (resp) {
            _this.resData = resp;
            _this.mailDetails = _this.resData.mailbox;
            _this.toggle(false, false, true);
            _this.isMailLoaded = true;
        });
    };
    MailboxComponent.prototype.deleteMail = function (id) {
        var _this = this;
        sweetalert2__WEBPACK_IMPORTED_MODULE_6___default.a.fire({
            title: this.translate.instant('common.swal.title'),
            text: this.translate.instant('common.swal.text') + ' ' + this.translate.instant('mailbox.title20'),
            type: 'warning',
            showCancelButton: true,
            confirmButtonText: this.translate.instant('common.swal.confirmButtonText'),
            cancelButtonText: this.translate.instant('common.swal.cancelButtonText')
        }).then(function (result) {
            if (result.value) {
                _this.mailService.destroy(id).subscribe(function (data) {
                    _this.toastr.success(_this.translate.instant('mailbox.messages.message4'), _this.translate.instant('mailbox.title'));
                    _this.getMail(_this.tableParams.emailType);
                });
            }
        });
    };
    MailboxComponent.prototype.fileOverBase = function (e) {
        this.hasBaseDropZoneOver = e;
    };
    MailboxComponent.prototype.uploaderRemove = function (id) {
        var _this = this;
        var index = this.attachmentsArr.indexOf(id);
        if (index > -1) {
            var dataObj = {
                id: id,
            };
            this.mailService.removeAttachments(dataObj).subscribe(function (data) {
                _this.toastr.success(_this.translate.instant('mailbox.messages.message1'), _this.translate.instant('mailbox.title'));
            });
            this.attachmentsArr.splice(index, 1);
        }
    };
    MailboxComponent.prototype.toggle = function (mailboxViewable, composeViewable, mailviewViewable) {
        this.mailboxViewable = mailboxViewable;
        this.composeViewable = composeViewable;
        this.mailviewViewable = mailviewViewable;
    };
    MailboxComponent.prototype.referesh = function () {
        this.mail_checked = [];
        this.getMail(this.tableParams.emailType);
    };
    MailboxComponent.prototype.getSentUser = function (email) {
        for (var iRow in this.mailboxEmailsUsers) {
            if (this.mailboxEmailsUsers[iRow].email == email) {
                return this.mailboxEmailsUsers[iRow].firstname + ' ' + this.mailboxEmailsUsers[iRow].lastname;
            }
        }
    };
    MailboxComponent.ctorParameters = function () { return [
        { type: _ngx_translate_core__WEBPACK_IMPORTED_MODULE_4__["TranslateService"] },
        { type: _core_services_authentication_service__WEBPACK_IMPORTED_MODULE_7__["AuthenticationService"] },
        { type: _core_services_mail_service__WEBPACK_IMPORTED_MODULE_8__["MailService"] },
        { type: _core_services_user_service__WEBPACK_IMPORTED_MODULE_9__["UserService"] },
        { type: ngx_toastr__WEBPACK_IMPORTED_MODULE_3__["ToastrService"] },
        { type: _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormBuilder"] }
    ]; };
    MailboxComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-mailbox',
            template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./mailbox.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/modules/mailbox/pages/mailbox/mailbox.component.html")).default,
            styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./mailbox.component.scss */ "./src/app/modules/mailbox/pages/mailbox/mailbox.component.scss")).default]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_ngx_translate_core__WEBPACK_IMPORTED_MODULE_4__["TranslateService"],
            _core_services_authentication_service__WEBPACK_IMPORTED_MODULE_7__["AuthenticationService"],
            _core_services_mail_service__WEBPACK_IMPORTED_MODULE_8__["MailService"],
            _core_services_user_service__WEBPACK_IMPORTED_MODULE_9__["UserService"],
            ngx_toastr__WEBPACK_IMPORTED_MODULE_3__["ToastrService"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormBuilder"]])
    ], MailboxComponent);
    return MailboxComponent;
}());



/***/ })

}]);
//# sourceMappingURL=modules-mailbox-mailbox-module.js.map