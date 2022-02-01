(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["modules-file-browser-file-browser-module"],{

/***/ "./node_modules/file-saver/dist/FileSaver.min.js":
/*!*******************************************************!*\
  !*** ./node_modules/file-saver/dist/FileSaver.min.js ***!
  \*******************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var __WEBPACK_AMD_DEFINE_FACTORY__, __WEBPACK_AMD_DEFINE_ARRAY__, __WEBPACK_AMD_DEFINE_RESULT__;(function(a,b){if(true)!(__WEBPACK_AMD_DEFINE_ARRAY__ = [], __WEBPACK_AMD_DEFINE_FACTORY__ = (b),
				__WEBPACK_AMD_DEFINE_RESULT__ = (typeof __WEBPACK_AMD_DEFINE_FACTORY__ === 'function' ?
				(__WEBPACK_AMD_DEFINE_FACTORY__.apply(exports, __WEBPACK_AMD_DEFINE_ARRAY__)) : __WEBPACK_AMD_DEFINE_FACTORY__),
				__WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__));else {}})(this,function(){"use strict";function b(a,b){return"undefined"==typeof b?b={autoBom:!1}:"object"!=typeof b&&(console.warn("Deprecated: Expected third argument to be a object"),b={autoBom:!b}),b.autoBom&&/^\s*(?:text\/\S*|application\/xml|\S*\/\S*\+xml)\s*;.*charset\s*=\s*utf-8/i.test(a.type)?new Blob(["\uFEFF",a],{type:a.type}):a}function c(a,b,c){var d=new XMLHttpRequest;d.open("GET",a),d.responseType="blob",d.onload=function(){g(d.response,b,c)},d.onerror=function(){console.error("could not download file")},d.send()}function d(a){var b=new XMLHttpRequest;b.open("HEAD",a,!1);try{b.send()}catch(a){}return 200<=b.status&&299>=b.status}function e(a){try{a.dispatchEvent(new MouseEvent("click"))}catch(c){var b=document.createEvent("MouseEvents");b.initMouseEvent("click",!0,!0,window,0,0,0,80,20,!1,!1,!1,!1,0,null),a.dispatchEvent(b)}}var f="object"==typeof window&&window.window===window?window:"object"==typeof self&&self.self===self?self:"object"==typeof global&&global.global===global?global:void 0,a=f.navigator&&/Macintosh/.test(navigator.userAgent)&&/AppleWebKit/.test(navigator.userAgent)&&!/Safari/.test(navigator.userAgent),g=f.saveAs||("object"!=typeof window||window!==f?function(){}:"download"in HTMLAnchorElement.prototype&&!a?function(b,g,h){var i=f.URL||f.webkitURL,j=document.createElement("a");g=g||b.name||"download",j.download=g,j.rel="noopener","string"==typeof b?(j.href=b,j.origin===location.origin?e(j):d(j.href)?c(b,g,h):e(j,j.target="_blank")):(j.href=i.createObjectURL(b),setTimeout(function(){i.revokeObjectURL(j.href)},4E4),setTimeout(function(){e(j)},0))}:"msSaveOrOpenBlob"in navigator?function(f,g,h){if(g=g||f.name||"download","string"!=typeof f)navigator.msSaveOrOpenBlob(b(f,h),g);else if(d(f))c(f,g,h);else{var i=document.createElement("a");i.href=f,i.target="_blank",setTimeout(function(){e(i)})}}:function(b,d,e,g){if(g=g||open("","_blank"),g&&(g.document.title=g.document.body.innerText="downloading..."),"string"==typeof b)return c(b,d,e);var h="application/octet-stream"===b.type,i=/constructor/i.test(f.HTMLElement)||f.safari,j=/CriOS\/[\d]+/.test(navigator.userAgent);if((j||h&&i||a)&&"undefined"!=typeof FileReader){var k=new FileReader;k.onloadend=function(){var a=k.result;a=j?a:a.replace(/^data:[^;]*;/,"data:attachment/file;"),g?g.location.href=a:location=a,g=null},k.readAsDataURL(b)}else{var l=f.URL||f.webkitURL,m=l.createObjectURL(b);g?g.location=m:location.href=m,g=null,setTimeout(function(){l.revokeObjectURL(m)},4E4)}});f.saveAs=g.saveAs=g, true&&(module.exports=g)});

//# sourceMappingURL=FileSaver.min.js.map

/***/ }),

/***/ "./node_modules/ngx-filesaver/fesm5/ngx-filesaver.js":
/*!***********************************************************!*\
  !*** ./node_modules/ngx-filesaver/fesm5/ngx-filesaver.js ***!
  \***********************************************************/
/*! exports provided: FileSaverService, FileSaverDirective, FileSaverModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FileSaverService", function() { return FileSaverService; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FileSaverDirective", function() { return FileSaverDirective; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FileSaverModule", function() { return FileSaverModule; });
/* harmony import */ var file_saver__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! file-saver */ "./node_modules/file-saver/dist/FileSaver.min.js");
/* harmony import */ var file_saver__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(file_saver__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! rxjs */ "./node_modules/rxjs/_esm5/index.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");





var FileSaverService = /** @class */ (function () {
    function FileSaverService() {
    }
    FileSaverService.prototype.genType = function (fileName) {
        if (!fileName || fileName.lastIndexOf('.') === -1)
            return 'text/plain';
        var type = fileName.substr(fileName.lastIndexOf('.') + 1);
        switch (type) {
            case 'txt':
                return 'text/plain';
            case 'xml':
            case 'html':
                return "text/" + type;
            case 'json':
                return 'octet/stream';
            default:
                return "application/" + type;
        }
    };
    FileSaverService.prototype.save = function (blob, fileName, filtType) {
        if (!blob) {
            throw new Error('Muse spcify blod argument');
        }
        Object(file_saver__WEBPACK_IMPORTED_MODULE_0__["saveAs"])(new Blob([blob], { type: filtType || blob.type || this.genType(fileName) }), decodeURI(fileName || 'download'));
    };
    FileSaverService.prototype.saveText = function (txt, fileName) {
        var blob = new Blob([txt]);
        this.save(blob, fileName);
    };
    FileSaverService.decorators = [
        { type: _angular_core__WEBPACK_IMPORTED_MODULE_3__["Injectable"], args: [{ providedIn: 'root' },] }
    ];
    FileSaverService.ngInjectableDef = Object(_angular_core__WEBPACK_IMPORTED_MODULE_3__["defineInjectable"])({ factory: function FileSaverService_Factory() { return new FileSaverService(); }, token: FileSaverService, providedIn: "root" });
    return FileSaverService;
}());

var FileSaverDirective = /** @class */ (function () {
    function FileSaverDirective(el, _FileSaverService, _httpClient) {
        this.el = el;
        this._FileSaverService = _FileSaverService;
        this._httpClient = _httpClient;
        this.method = 'GET';
        this.success = new _angular_core__WEBPACK_IMPORTED_MODULE_3__["EventEmitter"]();
        this.error = new _angular_core__WEBPACK_IMPORTED_MODULE_3__["EventEmitter"]();
    }
    FileSaverDirective.prototype.getName = function (res) {
        return decodeURI(this.fileName ||
            res.headers.get('filename') ||
            res.headers.get('x-filename'));
    };
    FileSaverDirective.prototype._click = function () {
        var _this = this;
        var _http = this.http;
        if (!_http) {
            var params = new _angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpParams"](), _data = this.query || {};
            // tslint:disable-next-line:forin
            for (var item in _data) {
                params.set(item, _data[item]);
            }
            _http = this._httpClient.request(this.method, this.url, {
                observe: 'response',
                responseType: 'blob',
                headers: this.header,
                params: params
            });
        }
        this.el.nativeElement.disabled = true;
        _http.subscribe(function (res) {
            if (res.status !== 200 || res.body.size <= 0) {
                _this.error.emit(res);
                return;
            }
            _this._FileSaverService.save(res.body, _this.getName(res));
            _this.success.emit(res);
        }, function (err) {
            _this.error.emit(err);
        }, function () {
            _this.el.nativeElement.disabled = false;
        });
    };
    FileSaverDirective.decorators = [
        { type: _angular_core__WEBPACK_IMPORTED_MODULE_3__["Directive"], args: [{
                    selector: '[fileSaver]',
                    exportAs: 'fileSaver'
                },] }
    ];
    /** @nocollapse */
    FileSaverDirective.ctorParameters = function () { return [
        { type: _angular_core__WEBPACK_IMPORTED_MODULE_3__["ElementRef"] },
        { type: FileSaverService },
        { type: _angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpClient"] }
    ]; };
    FileSaverDirective.propDecorators = {
        method: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_3__["Input"] }],
        http: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_3__["Input"] }],
        query: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_3__["Input"] }],
        header: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_3__["Input"] }],
        url: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_3__["Input"] }],
        fileName: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_3__["Input"] }],
        success: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_3__["Output"] }],
        error: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_3__["Output"] }],
        _click: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_3__["HostListener"], args: ['click',] }]
    };
    return FileSaverDirective;
}());

var FileSaverModule = /** @class */ (function () {
    function FileSaverModule() {
    }
    FileSaverModule.decorators = [
        { type: _angular_core__WEBPACK_IMPORTED_MODULE_3__["NgModule"], args: [{
                    declarations: [FileSaverDirective],
                    exports: [FileSaverDirective],
                },] }
    ];
    return FileSaverModule;
}());

/**
 * Generated bundle index. Do not edit.
 */



//# sourceMappingURL=ngx-filesaver.js.map

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/modules/file-browser/components/create-folder-model/create-folder-model.component.html":
/*!**********************************************************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/modules/file-browser/components/create-folder-model/create-folder-model.component.html ***!
  \**********************************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<div class=\"modal-header\">\r\n    <h2 class=\"modal-title font-weight-normal\">\r\n        <i aria-hidden=\"true\" class=\"fa fa-folder\"></i>&nbsp;{{'file_browser.title1' | translate}}</h2>\r\n    <button (click)=\"bsCreateFolderModalRef.hide()\" aria-label=\"Close\" class=\"close\" data-dismiss=\"modal\" type=\"button\">\r\n        <span aria-hidden=\"true\">&times;</span></button>\r\n</div>\r\n<form (ngSubmit)=\"onSubmit()\" [formGroup]=\"createFolderForm\" class=\"bs4-forms\">\r\n    <div class=\"modal-body\">\r\n        <div class=\"row\">\r\n            <div class=\"col-12\">\r\n                <div class=\"form-group\">\r\n                    <label for=\"folder_name\">{{'file_browser.create.fields.folder_name' | translate}}\r\n                        <span class=\"text-danger\">&nbsp;*</span></label>\r\n                    <input [ngClass]=\"{ 'is-invalid': isSubmitted && folderControl.folder_name.errors }\" class=\"form-control\" formControlName=\"folder_name\" id=\"folder_name\" placeholder=\"{{'file_browser.create.placeholders.placeholder1' | translate}}\" type=\"text\"/>\r\n                    <div *ngIf=\"isSubmitted && folderControl.folder_name.errors\" class=\"invalid-feedback\">\r\n                        <div *ngIf=\"folderControl.folder_name.errors.required\">{{'file_browser.create.error_messages.message1' | translate}}</div>\r\n                    </div>\r\n                </div>\r\n            </div>\r\n        </div>\r\n        <div class=\"row\">\r\n            <div class=\"col-12\">\r\n                <div class=\"form-group\">\r\n                    <label for=\"folder_desc\">{{'file_browser.create.fields.description' | translate}}</label>\r\n                    <app-ngx-editor [placeholder]=\"'file_browser.create.placeholders.placeholder2' | translate\" [spellcheck]=\"true\" formControlName=\"folder_desc\" height=\"100px\" id=\"folder_desc\" minHeight=\"50px\"></app-ngx-editor>\r\n                </div>\r\n            </div>\r\n        </div>\r\n    </div>\r\n    <div class=\"modal-footer\">\r\n        <button (click)=\"onCancel()\" class=\"btn btn-cancel mb-0\" data-dismiss=\"modal\" type=\"button\">{{'common.close' | translate}}</button>\r\n        <button class=\"btn btn-submit mb-0\" type=\"submit\"><span>{{'common.create' | translate}}</span></button>\r\n    </div>\r\n</form>\r\n");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/modules/file-browser/components/edit-file-modal/edit-file-modal.component.html":
/*!**************************************************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/modules/file-browser/components/edit-file-modal/edit-file-modal.component.html ***!
  \**************************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<div class=\"modal-header\">\r\n    <h2 class=\"modal-title font-weight-normal\">\r\n        <i aria-hidden=\"true\" class=\"fa fa-file\"></i>&nbsp;{{'file_browser.title4' | translate}}</h2>\r\n    <button (click)=\"bsEditFileModalRef.hide()\" aria-label=\"Close\" class=\"close\" data-dismiss=\"modal\" type=\"button\">\r\n        <span aria-hidden=\"true\">&times;</span></button>\r\n</div>\r\n<form (ngSubmit)=\"onSubmit()\" [formGroup]=\"editFileForm\" class=\"bs4-forms\">\r\n    <div class=\"modal-body\">\r\n        <div class=\"row\">\r\n            <div class=\"col-12\">\r\n                <div class=\"form-group\">\r\n                    <label for=\"name\">{{'file_browser.create.fields.file_name' | translate}}\r\n                        <span class=\"text-danger\">&nbsp;*</span></label>\r\n                    <input [ngClass]=\"{ 'is-invalid': isSubmitted && fileControl.file_name.errors }\" class=\"form-control\" formControlName=\"file_name\" id=\"file_name\" placeholder=\"{{'file_browser.create.placeholders.placeholder3' | translate}}\" type=\"text\"/>\r\n                    <div *ngIf=\"isSubmitted && fileControl.file_name.errors\" class=\"invalid-feedback\">\r\n                        <div *ngIf=\"fileControl.file_name.errors.required\">{{'file_browser.create.error_messages.message3' | translate}}</div>\r\n                    </div>\r\n                </div>\r\n            </div>\r\n        </div>\r\n    </div>\r\n    <div class=\"modal-footer\">\r\n        <button (click)=\"onCancel()\" class=\"btn btn-cancel mb-0\" data-dismiss=\"modal\" type=\"button\">{{'common.close' | translate}}</button>\r\n        <button class=\"btn btn-submit mb-0\" type=\"submit\"><span>{{'common.update' | translate}}</span></button>\r\n    </div>\r\n</form>\r\n");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/modules/file-browser/components/edit-folder-modal/edit-folder-modal.component.html":
/*!******************************************************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/modules/file-browser/components/edit-folder-modal/edit-folder-modal.component.html ***!
  \******************************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<div class=\"modal-header\">\r\n    <h2 class=\"modal-title font-weight-normal\">\r\n        <i aria-hidden=\"true\" class=\"fa fa-folder\"></i>&nbsp;{{'file_browser.title2' | translate}}</h2>\r\n    <button (click)=\"bsEditFolderModalRef.hide()\" aria-label=\"Close\" class=\"close\" data-dismiss=\"modal\" type=\"button\">\r\n        <span aria-hidden=\"true\">&times;</span></button>\r\n</div>\r\n<form (ngSubmit)=\"onSubmit()\" [formGroup]=\"editFolderForm\" class=\"bs4-forms\">\r\n    <div class=\"modal-body\">\r\n        <div class=\"row\">\r\n            <div class=\"col-12\">\r\n                <div class=\"form-group\">\r\n                    <label for=\"name\">{{'file_browser.create.fields.folder_name' | translate}}\r\n                        <span class=\"text-danger\">&nbsp;*</span></label>\r\n                    <input [ngClass]=\"{ 'is-invalid': isSubmitted && folderControl.folder_name.errors }\" class=\"form-control\" formControlName=\"folder_name\" id=\"folder_name\" placeholder=\"{{'file_browser.create.placeholders.placeholder1' | translate}}\" type=\"text\"/>\r\n                    <div *ngIf=\"isSubmitted && folderControl.folder_name.errors\" class=\"invalid-feedback\">\r\n                        <div *ngIf=\"folderControl.folder_name.errors.required\">{{'file_browser.create.error_messages.message1' | translate}}</div>\r\n                    </div>\r\n                </div>\r\n            </div>\r\n        </div>\r\n        <div class=\"row\">\r\n            <div class=\"col-12\">\r\n                <div class=\"form-group\">\r\n                    <label for=\"folder_desc\">{{'file_browser.create.fields.description' | translate}}</label>\r\n                    <app-ngx-editor [placeholder]=\"'file_browser.create.placeholders.placeholder2' | translate\" [spellcheck]=\"true\" formControlName=\"folder_desc\" height=\"100px\" id=\"folder_desc\" minHeight=\"50px\"></app-ngx-editor>\r\n                </div>\r\n            </div>\r\n        </div>\r\n    </div>\r\n    <div class=\"modal-footer\">\r\n        <button (click)=\"onCancel()\" class=\"btn btn-cancel\" data-dismiss=\"modal\" type=\"button\">{{'common.close' | translate}}</button>\r\n        <button class=\"btn btn-submit\" type=\"submit\"><span>{{'common.update' | translate}}</span></button>\r\n    </div>\r\n</form>\r\n");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/modules/file-browser/components/upload-files-model/upload-files-model.component.html":
/*!********************************************************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/modules/file-browser/components/upload-files-model/upload-files-model.component.html ***!
  \********************************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<div class=\"modal-header\">\r\n    <h2 class=\"modal-title font-weight-normal\">\r\n        <i aria-hidden=\"true\" class=\"fa fa-file\"></i>&nbsp;{{'file_browser.title3' | translate}}</h2>\r\n    <button (click)=\"bsCreateFileModalRef.hide()\" aria-label=\"Close\" class=\"close\" data-dismiss=\"modal\" type=\"button\">\r\n        <span aria-hidden=\"true\">&times;</span></button>\r\n</div>\r\n<div class=\"modal-body\">\r\n    <div class=\"row\">\r\n        <div class=\"col-md-12\">\r\n            <div (fileOver)=\"fileOverBase($event)\" [ngClass]=\"{'nv-file-over': hasBaseDropZoneOver}\" [uploader]=\"uploader\" class=\"well dropzone text-center\" ng2FileDrop>\r\n                <i class=\"fa fa-upload fa-4x\"></i>\r\n                <br/>\r\n                <h4 class=\"dz-message\">{{'file_browser.create.error_messages.message2' | translate}}</h4>\r\n            </div>\r\n        </div>\r\n        <div class=\"col-md-12 mt-2\">\r\n            <label class=\"btn btn-raised btn-info round btn-file\">\r\n                <input [uploader]=\"uploader\" class=\"d-none\" multiple ng2FileSelect type=\"file\"/>\r\n                <span><i class=\"fa fa-upload\"></i> {{'file_browser.title3' | translate}}</span>\r\n            </label>\r\n        </div>\r\n        <div *ngIf=\"uploader.queue.length != 0\" class=\"col-md-12\">\r\n            <table class=\"table table-responsive\">\r\n                <thead>\r\n                <tr>\r\n                    <th width=\"50%\">{{'file_browser.columns.name' | translate}}</th>\r\n                    <th>{{'file_browser.columns.size' | translate}}</th>\r\n                    <th>{{'file_browser.columns.progress' | translate}}</th>\r\n                    <th>{{'file_browser.columns.status' | translate}}</th>\r\n                    <th>{{'file_browser.columns.actions' | translate}}</th>\r\n                </tr>\r\n                </thead>\r\n                <tbody>\r\n                <tr *ngFor=\"let item of uploader.queue; index as i\">\r\n                    <td><strong>{{ item?.file?.name }}</strong></td>\r\n                    <td *ngIf=\"uploader.options.isHTML5\" nowrap>{{ item?.file?.size / 1024 / 1024 | number:'.2' }} MB</td>\r\n                    <td *ngIf=\"uploader.options.isHTML5\">\r\n                        <progressbar [animate]=\"true\" [striped]=\"true\" [value]=\"item.progress\" max=\"100\"></progressbar>\r\n                    </td>\r\n                    <td class=\"budges-status\">\r\n                        <span *ngIf=\"item.isSuccess\" class=\"completed\">{{'common.status.success' | translate}}</span>\r\n                        <span *ngIf=\"item.isCancel\" class=\"cancel\">{{'common.status.cancel' | translate}}</span>\r\n                        <span *ngIf=\"item.isError\" class=\"closed\">{{'common.status.error' | translate}}</span>\r\n                    </td>\r\n                    <td nowrap>\r\n                        <button (click)=\"item.remove();uploaderRemove(attachmentsArr[i])\" class=\"btn btn-raised btn-danger white btn-xs mb-0\" type=\"button\">\r\n                            <span class=\"fa fa-close\"></span></button>\r\n                    </td>\r\n                </tr>\r\n                </tbody>\r\n            </table>\r\n        </div>\r\n    </div>\r\n</div>\r\n<div class=\"modal-footer\">\r\n    <button (click)=\"onCancel()\" class=\"btn btn-cancel mb-0\" data-dismiss=\"modal\" type=\"button\">{{'common.close' | translate}}</button>\r\n</div>\r\n");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/modules/file-browser/pages/file-browser/file-browser.component.html":
/*!***************************************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/modules/file-browser/pages/file-browser/file-browser.component.html ***!
  \***************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<section>\r\n    <div class=\"row\">\r\n        <div class=\"col-sm-12\">\r\n            <div class=\"card pl-2 pr-2\">\r\n                <div class=\"card-header pl-0 pr-0 border-bottom\">\r\n                    <h4 class=\"main-title mt-2\"><span>{{'file_browser.title' | translate}}</span></h4>\r\n                    <div class=\"card-buttons\">\r\n                        <button (click)=\"uploadFileModal();\" *ngxPermissionsOnly=\"['filemanager_create']\" class=\"btn btn-create\" tooltip=\"{{'common.upload' | translate}}\">\r\n                            <i class=\"fa fa-upload\"></i></button>\r\n                        <button (click)=\"openFolderCreateModal();\" *ngxPermissionsOnly=\"['filemanager_create']\" class=\"btn btn-create\" tooltip=\"{{'common.create' | translate}}\">\r\n                            <i class=\"fa fa-plus\"></i></button>\r\n                    </div>\r\n                </div>\r\n                <div class=\"card-content\">\r\n                    <div class=\"card-body\">\r\n                        <div class=\"row\">\r\n                            <div class=\"col-sm-3 mt-2\">\r\n                                <div *ngIf=\"breadcrumbs?.length != 0\" class=\"folder-list p-2\">\r\n                                    <h4>Folders</h4>\r\n                                    <ul>\r\n                                        <li *ngFor=\"let breadcrumb of breadcrumbs;\">\r\n                                            <a (click)=\"getFileFolders(breadcrumb.parent_folder)\"><i class=\"fa fa-folder\"></i>&nbsp;{{breadcrumb.folder_name}}\r\n                                            </a></li>\r\n                                    </ul>\r\n                                </div>\r\n                            </div>\r\n                            <div class=\"col-sm-9 mt-2\">\r\n                                <div class=\"row\">\r\n                                    <!-- Folders -->\r\n                                    <div *ngFor=\"let folder of folders;\" class=\"col-sm-4\">\r\n                                        <div class=\"file-browser\">\r\n                                            <div class=\"actions-dropdown text-right m-1 pr-2\">\r\n                                                <div class=\"btn-group\" dropdown>\r\n                                                    <a aria-controls=\"dropdown-basic-1\" class=\"dropdown-toggle\" dropdownToggle href=\"javascript:void(0);\" id=\"button-basic-1\"><i class=\"fa fa-ellipsis-v\"></i></a>\r\n                                                    <ul *dropdownMenu aria-labelledby=\"button-basic-1\" class=\"dropdown-menu animated fadeIn\" id=\"dropdown-basic-1\" role=\"menu\">\r\n                                                        <li *ngxPermissionsOnly=\"['filemanager_edit']\" role=\"menuitem\">\r\n                                                            <a (click)=\"openFolderEditModal(folder)\" class=\"dropdown-item btn btn-edit btn-raised\" tooltip=\"{{'common.edit' | translate}}\"><i class=\"fa fa-pencil-square-o\"></i></a>\r\n                                                        </li>\r\n                                                        <li *ngxPermissionsOnly=\"['filemanager_edit']\" role=\"menuitem\">\r\n                                                            <a (click)=\"deleteFolder(folder.id)\" class=\"dropdown-item btn btn-delete btn-raised\" tooltip=\"{{'common.delete' | translate}}\"><i class=\"fa fa-trash-o\"></i></a>\r\n                                                        </li>\r\n                                                    </ul>\r\n                                                </div>\r\n                                            </div>\r\n                                            <div class=\"file-box\">\r\n                                                <div class=\"files\">\r\n                                                    <a (click)=\"getFileFolders(folder.id)\">\r\n                                                        <div class=\"icon docx\">\r\n                                                            <i class=\"fa fa-folder-o\"></i>\r\n                                                        </div>\r\n                                                        <div class=\"file-name\">\r\n                                                            <h4>{{ (folder.folder_name.length > 20) ? (folder.folder_name | slice:0:20) + '..' : (folder.folder_name) }}</h4>\r\n                                                            <p>{{'file_browser.title7' | translate}}: {{ folder.updated_at | dateTimeFormatFilter: loginUser.settings.date_time_format }}</p>\r\n                                                        </div>\r\n                                                    </a>\r\n                                                </div>\r\n                                                <span class=\"corner\"></span>\r\n                                            </div>\r\n                                        </div>\r\n                                    </div>\r\n                                    <!-- Files -->\r\n                                    <div *ngFor=\"let file of files; index as i\" class=\"col-sm-4\">\r\n                                        <div class=\"file-browser\">\r\n                                            <div class=\"actions-dropdown text-right m-1 pr-2\">\r\n                                                <div class=\"btn-group\" dropdown>\r\n                                                    <a aria-controls=\"dropdown-basic-1\" class=\"dropdown-toggle\" dropdownToggle href=\"javascript:void(0);\" id=\"button-basic-1\"><i class=\"fa fa-ellipsis-v\"></i></a>\r\n                                                    <ul *dropdownMenu aria-labelledby=\"button-basic-1\" class=\"dropdown-menu animated fadeIn\" id=\"dropdown-basic-1\" role=\"menu\">\r\n                                                        <li role=\"menuitem\">\r\n                                                            <a class=\"dropdown-item btn btn-download btn-raised\" download=\"{{file.file_name}}\" href=\"{{apiUrl}}/uploads/filebrowser/{{file.file_hash}}\" target=\"_blank\" tooltip=\"{{'common.download' | translate}}\"><i class=\"fa fa-download\"></i></a>\r\n                                                        </li>\r\n                                                        <li *ngxPermissionsOnly=\"['filemanager_edit']\" role=\"menuitem\">\r\n                                                            <a (click)=\"opneFileEditModal(file)\" class=\"dropdown-item btn btn-edit btn-raised\" tooltip=\"{{'common.edit' | translate}}\"><i class=\"fa fa-pencil-square-o\"></i></a>\r\n                                                        </li>\r\n                                                        <li *ngxPermissionsOnly=\"['filemanager_edit']\" role=\"menuitem\">\r\n                                                            <a (click)=\"deleteFile(file.id)\" class=\"dropdown-item btn btn-delete btn-raised\" tooltip=\"{{'common.delete' | translate}}\"><i class=\"fa fa-trash-o\"></i></a>\r\n                                                        </li>\r\n                                                    </ul>\r\n                                                </div>\r\n                                            </div>\r\n                                            <div class=\"file-box\">\r\n                                                <div class=\"files\">\r\n                                                    <div *ngIf=\"file.icon\" class=\"icon docx\">\r\n                                                        <i [ngClass]=\"file.icon\"></i>\r\n                                                    </div>\r\n                                                    <div *ngIf=\"file.isImageFile\" class=\"image\">\r\n                                                        <img alt=\"image\" class=\"img-fluid height-100\" src=\"{{ apiUrl }}/uploads/filebrowser/{{file.file_hash}}\"/>\r\n                                                    </div>\r\n                                                    <div class=\"file-name\">\r\n                                                        <a download=\"{{file.file_name}}\" href=\"{{apiUrl}}/uploads/filebrowser/{{file.file_hash}}\" target=\"_blank\" tooltip=\"{{file.file_name}}\">\r\n                                                            <h4>{{ (file.file_name.length > 20) ? (file.file_name | slice:0:20) + '..' : (file.file_name) }}</h4>\r\n                                                        </a>\r\n                                                        <p>{{'file_browser.title7' | translate}}: {{ file.updated_at | dateTimeFormatFilter:loginUser.settings.date_time_format }}</p>\r\n                                                    </div>\r\n                                                </div>\r\n                                                <span class=\"corner\"></span>\r\n                                            </div>\r\n                                        </div>\r\n                                    </div>\r\n                                </div>\r\n                                <div *ngIf=\"isEmptyObject(folders) && isEmptyObject(files)\" class=\"row\">\r\n                                    <div class=\"col-sm-12 text-center\">\r\n                                        <img src=\"assets/img/norecord-img.png\" width=\"50\">\r\n                                        <p class=\"mt-1\">{{'common.empty_message.file_browser' | translate}}</p>\r\n                                    </div>\r\n                                </div>\r\n                            </div>\r\n                        </div>\r\n                    </div>\r\n                </div>\r\n            </div>\r\n        </div>\r\n    </div>\r\n</section>\r\n");

/***/ }),

/***/ "./src/app/core/services/file-browser.service.ts":
/*!*******************************************************!*\
  !*** ./src/app/core/services/file-browser.service.ts ***!
  \*******************************************************/
/*! exports provided: FileBrowserService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FileBrowserService", function() { return FileBrowserService; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../environments/environment */ "./src/environments/environment.ts");




var options = { headers: new _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpHeaders"]({ 'Content-Type': 'application/json' }) };
var FileBrowserService = /** @class */ (function () {
    function FileBrowserService(http) {
        this.http = http;
        this.apiUrl = _environments_environment__WEBPACK_IMPORTED_MODULE_3__["environment"].apiUrl;
    }
    FileBrowserService.prototype.getFolders = function (reqObj) {
        return this.http.get(this.apiUrl + "/api/file-browser", { params: reqObj });
    };
    FileBrowserService.prototype.createFolder = function (reqObj) {
        return this.http.post(this.apiUrl + "/api/file-browser", reqObj, options);
    };
    FileBrowserService.prototype.getById = function (current_folder_id) {
        return this.http.get(this.apiUrl + "/api/file-browser/" + current_folder_id);
    };
    FileBrowserService.prototype.updateFolder = function (folder) {
        return this.http.put(this.apiUrl + "/api/file-browser/" + folder.id, folder);
    };
    FileBrowserService.prototype.deleteFolder = function (id) {
        return this.http.delete(this.apiUrl + "/api/file-browser/" + id);
    };
    FileBrowserService.prototype.getFolderBreadcrumb = function (reqObj) {
        return this.http.get(this.apiUrl + "/api/file-browser/breadcrumb", { params: reqObj });
    };
    FileBrowserService.prototype.getFiles = function (reqObj) {
        return this.http.get(this.apiUrl + "/api/files", { params: reqObj });
    };
    FileBrowserService.prototype.updateFile = function (file) {
        return this.http.put(this.apiUrl + "/api/files/" + file.id, file);
    };
    FileBrowserService.prototype.deleteFile = function (id) {
        return this.http.delete(this.apiUrl + "/api/files/" + id);
    };
    FileBrowserService.prototype.removeAttachments = function (dataObj) {
        return this.http.post(this.apiUrl + "/api/files/attachment/remove", dataObj);
    };
    FileBrowserService.ctorParameters = function () { return [
        { type: _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClient"] }
    ]; };
    FileBrowserService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
            providedIn: 'root'
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClient"]])
    ], FileBrowserService);
    return FileBrowserService;
}());



/***/ }),

/***/ "./src/app/modules/file-browser/components/create-folder-model/create-folder-model.component.scss":
/*!********************************************************************************************************!*\
  !*** ./src/app/modules/file-browser/components/create-folder-model/create-folder-model.component.scss ***!
  \********************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL21vZHVsZXMvZmlsZS1icm93c2VyL2NvbXBvbmVudHMvY3JlYXRlLWZvbGRlci1tb2RlbC9jcmVhdGUtZm9sZGVyLW1vZGVsLmNvbXBvbmVudC5zY3NzIn0= */");

/***/ }),

/***/ "./src/app/modules/file-browser/components/create-folder-model/create-folder-model.component.ts":
/*!******************************************************************************************************!*\
  !*** ./src/app/modules/file-browser/components/create-folder-model/create-folder-model.component.ts ***!
  \******************************************************************************************************/
/*! exports provided: CreateFolderModelComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CreateFolderModelComponent", function() { return CreateFolderModelComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _ngx_translate_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @ngx-translate/core */ "./node_modules/@ngx-translate/core/fesm5/ngx-translate-core.js");
/* harmony import */ var ngx_bootstrap_modal__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ngx-bootstrap/modal */ "./node_modules/ngx-bootstrap/modal/fesm5/ngx-bootstrap-modal.js");
/* harmony import */ var ngx_toastr__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ngx-toastr */ "./node_modules/ngx-toastr/fesm5/ngx-toastr.js");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! rxjs */ "./node_modules/rxjs/_esm5/index.js");
/* harmony import */ var _core_services_file_browser_service__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../../../../core/services/file-browser.service */ "./src/app/core/services/file-browser.service.ts");








var CreateFolderModelComponent = /** @class */ (function () {
    function CreateFolderModelComponent(translate, bsCreateFolderModalRef, formBuilder, fbService, toastr) {
        this.translate = translate;
        this.bsCreateFolderModalRef = bsCreateFolderModalRef;
        this.formBuilder = formBuilder;
        this.fbService = fbService;
        this.toastr = toastr;
        this.isSubmitted = false;
    }
    Object.defineProperty(CreateFolderModelComponent.prototype, "folderControl", {
        get: function () {
            return this.createFolderForm.controls;
        },
        enumerable: true,
        configurable: true
    });
    CreateFolderModelComponent.prototype.ngOnInit = function () {
        this.onClose = new rxjs__WEBPACK_IMPORTED_MODULE_6__["Subject"]();
        this.loadForm();
    };
    CreateFolderModelComponent.prototype.loadForm = function () {
        this.createFolderForm = this.formBuilder.group({
            parent_folder: [this.current_folder, _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required],
            folder_name: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required],
            folder_desc: ['']
        });
    };
    CreateFolderModelComponent.prototype.onSubmit = function () {
        var _this = this;
        this.isSubmitted = true;
        if (this.createFolderForm.invalid) {
            return;
        }
        this.fbService.createFolder(this.createFolderForm.value).subscribe(function (data) {
            _this.toastr.success(_this.translate.instant('file_browser.messages.create_folder'), _this.translate.instant('file_browser.title'));
            _this.onCancel();
        });
    };
    CreateFolderModelComponent.prototype.onCancel = function () {
        this.onClose.next(false);
        this.bsCreateFolderModalRef.hide();
    };
    CreateFolderModelComponent.ctorParameters = function () { return [
        { type: _ngx_translate_core__WEBPACK_IMPORTED_MODULE_3__["TranslateService"] },
        { type: ngx_bootstrap_modal__WEBPACK_IMPORTED_MODULE_4__["BsModalRef"] },
        { type: _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormBuilder"] },
        { type: _core_services_file_browser_service__WEBPACK_IMPORTED_MODULE_7__["FileBrowserService"] },
        { type: ngx_toastr__WEBPACK_IMPORTED_MODULE_5__["ToastrService"] }
    ]; };
    CreateFolderModelComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-create-folder-model',
            template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./create-folder-model.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/modules/file-browser/components/create-folder-model/create-folder-model.component.html")).default,
            styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./create-folder-model.component.scss */ "./src/app/modules/file-browser/components/create-folder-model/create-folder-model.component.scss")).default]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_ngx_translate_core__WEBPACK_IMPORTED_MODULE_3__["TranslateService"],
            ngx_bootstrap_modal__WEBPACK_IMPORTED_MODULE_4__["BsModalRef"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormBuilder"],
            _core_services_file_browser_service__WEBPACK_IMPORTED_MODULE_7__["FileBrowserService"],
            ngx_toastr__WEBPACK_IMPORTED_MODULE_5__["ToastrService"]])
    ], CreateFolderModelComponent);
    return CreateFolderModelComponent;
}());



/***/ }),

/***/ "./src/app/modules/file-browser/components/edit-file-modal/edit-file-modal.component.scss":
/*!************************************************************************************************!*\
  !*** ./src/app/modules/file-browser/components/edit-file-modal/edit-file-modal.component.scss ***!
  \************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL21vZHVsZXMvZmlsZS1icm93c2VyL2NvbXBvbmVudHMvZWRpdC1maWxlLW1vZGFsL2VkaXQtZmlsZS1tb2RhbC5jb21wb25lbnQuc2NzcyJ9 */");

/***/ }),

/***/ "./src/app/modules/file-browser/components/edit-file-modal/edit-file-modal.component.ts":
/*!**********************************************************************************************!*\
  !*** ./src/app/modules/file-browser/components/edit-file-modal/edit-file-modal.component.ts ***!
  \**********************************************************************************************/
/*! exports provided: EditFileModalComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "EditFileModalComponent", function() { return EditFileModalComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _ngx_translate_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @ngx-translate/core */ "./node_modules/@ngx-translate/core/fesm5/ngx-translate-core.js");
/* harmony import */ var ngx_bootstrap_modal__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ngx-bootstrap/modal */ "./node_modules/ngx-bootstrap/modal/fesm5/ngx-bootstrap-modal.js");
/* harmony import */ var ngx_toastr__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ngx-toastr */ "./node_modules/ngx-toastr/fesm5/ngx-toastr.js");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! rxjs */ "./node_modules/rxjs/_esm5/index.js");
/* harmony import */ var _core_services_file_browser_service__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../../../../core/services/file-browser.service */ "./src/app/core/services/file-browser.service.ts");








var EditFileModalComponent = /** @class */ (function () {
    function EditFileModalComponent(translate, bsEditFileModalRef, formBuilder, fbService, toastr) {
        this.translate = translate;
        this.bsEditFileModalRef = bsEditFileModalRef;
        this.formBuilder = formBuilder;
        this.fbService = fbService;
        this.toastr = toastr;
        this.isSubmitted = false;
        this.renameFileFailederrors = [];
    }
    Object.defineProperty(EditFileModalComponent.prototype, "fileControl", {
        get: function () {
            return this.editFileForm.controls;
        },
        enumerable: true,
        configurable: true
    });
    EditFileModalComponent.prototype.ngOnInit = function () {
        this.onClose = new rxjs__WEBPACK_IMPORTED_MODULE_6__["Subject"]();
        this.loadForm();
    };
    EditFileModalComponent.prototype.loadForm = function () {
        this.editFileForm = this.formBuilder.group({
            id: [this.file.id],
            file_name: [this.file.file_name, _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required]
        });
    };
    EditFileModalComponent.prototype.onSubmit = function () {
        var _this = this;
        this.isSubmitted = true;
        if (this.editFileForm.invalid) {
            return;
        }
        this.fbService.updateFile(this.editFileForm.value)
            .subscribe(function (data) {
            _this.toastr.success(_this.translate.instant('file_browser.messages.update_file'), _this.translate.instant('file_browser.title'));
            _this.onCancel();
        });
    };
    EditFileModalComponent.prototype.onCancel = function () {
        this.onClose.next(false);
        this.bsEditFileModalRef.hide();
    };
    EditFileModalComponent.ctorParameters = function () { return [
        { type: _ngx_translate_core__WEBPACK_IMPORTED_MODULE_3__["TranslateService"] },
        { type: ngx_bootstrap_modal__WEBPACK_IMPORTED_MODULE_4__["BsModalRef"] },
        { type: _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormBuilder"] },
        { type: _core_services_file_browser_service__WEBPACK_IMPORTED_MODULE_7__["FileBrowserService"] },
        { type: ngx_toastr__WEBPACK_IMPORTED_MODULE_5__["ToastrService"] }
    ]; };
    EditFileModalComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-edit-file-modal',
            template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./edit-file-modal.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/modules/file-browser/components/edit-file-modal/edit-file-modal.component.html")).default,
            styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./edit-file-modal.component.scss */ "./src/app/modules/file-browser/components/edit-file-modal/edit-file-modal.component.scss")).default]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_ngx_translate_core__WEBPACK_IMPORTED_MODULE_3__["TranslateService"],
            ngx_bootstrap_modal__WEBPACK_IMPORTED_MODULE_4__["BsModalRef"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormBuilder"],
            _core_services_file_browser_service__WEBPACK_IMPORTED_MODULE_7__["FileBrowserService"],
            ngx_toastr__WEBPACK_IMPORTED_MODULE_5__["ToastrService"]])
    ], EditFileModalComponent);
    return EditFileModalComponent;
}());



/***/ }),

/***/ "./src/app/modules/file-browser/components/edit-folder-modal/edit-folder-modal.component.scss":
/*!****************************************************************************************************!*\
  !*** ./src/app/modules/file-browser/components/edit-folder-modal/edit-folder-modal.component.scss ***!
  \****************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL21vZHVsZXMvZmlsZS1icm93c2VyL2NvbXBvbmVudHMvZWRpdC1mb2xkZXItbW9kYWwvZWRpdC1mb2xkZXItbW9kYWwuY29tcG9uZW50LnNjc3MifQ== */");

/***/ }),

/***/ "./src/app/modules/file-browser/components/edit-folder-modal/edit-folder-modal.component.ts":
/*!**************************************************************************************************!*\
  !*** ./src/app/modules/file-browser/components/edit-folder-modal/edit-folder-modal.component.ts ***!
  \**************************************************************************************************/
/*! exports provided: EditFolderModalComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "EditFolderModalComponent", function() { return EditFolderModalComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _ngx_translate_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @ngx-translate/core */ "./node_modules/@ngx-translate/core/fesm5/ngx-translate-core.js");
/* harmony import */ var ngx_bootstrap_modal__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ngx-bootstrap/modal */ "./node_modules/ngx-bootstrap/modal/fesm5/ngx-bootstrap-modal.js");
/* harmony import */ var ngx_toastr__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ngx-toastr */ "./node_modules/ngx-toastr/fesm5/ngx-toastr.js");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! rxjs */ "./node_modules/rxjs/_esm5/index.js");
/* harmony import */ var _core_services_file_browser_service__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../../../../core/services/file-browser.service */ "./src/app/core/services/file-browser.service.ts");








var EditFolderModalComponent = /** @class */ (function () {
    function EditFolderModalComponent(translate, bsEditFolderModalRef, formBuilder, fbService, toastr) {
        this.translate = translate;
        this.bsEditFolderModalRef = bsEditFolderModalRef;
        this.formBuilder = formBuilder;
        this.fbService = fbService;
        this.toastr = toastr;
        this.isSubmitted = false;
    }
    Object.defineProperty(EditFolderModalComponent.prototype, "folderControl", {
        get: function () {
            return this.editFolderForm.controls;
        },
        enumerable: true,
        configurable: true
    });
    EditFolderModalComponent.prototype.ngOnInit = function () {
        this.onClose = new rxjs__WEBPACK_IMPORTED_MODULE_6__["Subject"]();
        this.loadForm();
    };
    EditFolderModalComponent.prototype.loadForm = function () {
        this.editFolderForm = this.formBuilder.group({
            id: [this.folder.id],
            folder_name: [this.folder.folder_name, _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required],
            folder_desc: [this.folder.folder_desc]
        });
    };
    EditFolderModalComponent.prototype.onSubmit = function () {
        var _this = this;
        this.isSubmitted = true;
        if (this.editFolderForm.invalid) {
            return;
        }
        this.fbService.updateFolder(this.editFolderForm.value)
            .subscribe(function (data) {
            _this.toastr.success(_this.translate.instant('file_browser.messages.update_folder'), _this.translate.instant('file_browser.title'));
            _this.onCancel();
        });
    };
    EditFolderModalComponent.prototype.onCancel = function () {
        this.onClose.next(false);
        this.bsEditFolderModalRef.hide();
    };
    EditFolderModalComponent.ctorParameters = function () { return [
        { type: _ngx_translate_core__WEBPACK_IMPORTED_MODULE_3__["TranslateService"] },
        { type: ngx_bootstrap_modal__WEBPACK_IMPORTED_MODULE_4__["BsModalRef"] },
        { type: _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormBuilder"] },
        { type: _core_services_file_browser_service__WEBPACK_IMPORTED_MODULE_7__["FileBrowserService"] },
        { type: ngx_toastr__WEBPACK_IMPORTED_MODULE_5__["ToastrService"] }
    ]; };
    EditFolderModalComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-edit-folder-modal',
            template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./edit-folder-modal.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/modules/file-browser/components/edit-folder-modal/edit-folder-modal.component.html")).default,
            styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./edit-folder-modal.component.scss */ "./src/app/modules/file-browser/components/edit-folder-modal/edit-folder-modal.component.scss")).default]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_ngx_translate_core__WEBPACK_IMPORTED_MODULE_3__["TranslateService"],
            ngx_bootstrap_modal__WEBPACK_IMPORTED_MODULE_4__["BsModalRef"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormBuilder"],
            _core_services_file_browser_service__WEBPACK_IMPORTED_MODULE_7__["FileBrowserService"],
            ngx_toastr__WEBPACK_IMPORTED_MODULE_5__["ToastrService"]])
    ], EditFolderModalComponent);
    return EditFolderModalComponent;
}());



/***/ }),

/***/ "./src/app/modules/file-browser/components/upload-files-model/upload-files-model.component.scss":
/*!******************************************************************************************************!*\
  !*** ./src/app/modules/file-browser/components/upload-files-model/upload-files-model.component.scss ***!
  \******************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL21vZHVsZXMvZmlsZS1icm93c2VyL2NvbXBvbmVudHMvdXBsb2FkLWZpbGVzLW1vZGVsL3VwbG9hZC1maWxlcy1tb2RlbC5jb21wb25lbnQuc2NzcyJ9 */");

/***/ }),

/***/ "./src/app/modules/file-browser/components/upload-files-model/upload-files-model.component.ts":
/*!****************************************************************************************************!*\
  !*** ./src/app/modules/file-browser/components/upload-files-model/upload-files-model.component.ts ***!
  \****************************************************************************************************/
/*! exports provided: UploadFilesModelComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "UploadFilesModelComponent", function() { return UploadFilesModelComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _ngx_translate_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @ngx-translate/core */ "./node_modules/@ngx-translate/core/fesm5/ngx-translate-core.js");
/* harmony import */ var ngx_toastr__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ngx-toastr */ "./node_modules/ngx-toastr/fesm5/ngx-toastr.js");
/* harmony import */ var ngx_bootstrap_modal__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ngx-bootstrap/modal */ "./node_modules/ngx-bootstrap/modal/fesm5/ngx-bootstrap-modal.js");
/* harmony import */ var ng2_file_upload__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ng2-file-upload */ "./node_modules/ng2-file-upload/fesm5/ng2-file-upload.js");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! rxjs */ "./node_modules/rxjs/_esm5/index.js");
/* harmony import */ var _core_services_authentication_service__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../../../../core/services/authentication.service */ "./src/app/core/services/authentication.service.ts");
/* harmony import */ var _core_services_file_browser_service__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../../../../core/services/file-browser.service */ "./src/app/core/services/file-browser.service.ts");
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../../../../../environments/environment */ "./src/environments/environment.ts");










var UploadFilesModelComponent = /** @class */ (function () {
    function UploadFilesModelComponent(translate, bsCreateFileModalRef, toastr, fbService, authenticationService) {
        this.translate = translate;
        this.bsCreateFileModalRef = bsCreateFileModalRef;
        this.toastr = toastr;
        this.fbService = fbService;
        this.authenticationService = authenticationService;
        this.attachmentsArr = [];
        this.apiUrl = _environments_environment__WEBPACK_IMPORTED_MODULE_9__["environment"].apiUrl;
        this.loginToken = this.authenticationService.currentTokenValue;
    }
    UploadFilesModelComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.uploader = new ng2_file_upload__WEBPACK_IMPORTED_MODULE_5__["FileUploader"]({
            url: this.apiUrl + '/api/files/upload',
            authToken: this.loginToken.token_type + ' ' + this.loginToken.token,
            additionalParameter: { folder: this.current_folder },
            method: 'post',
            removeAfterUpload: false,
            autoUpload: true,
            isHTML5: true,
        });
        this.hasBaseDropZoneOver = false;
        this.onClose = new rxjs__WEBPACK_IMPORTED_MODULE_6__["Subject"]();
        this.uploader.onBeforeUploadItem = function (item) {
            item.withCredentials = false;
        };
        this.uploader.onCompleteItem = function (item, response, status, headers) {
            var obj = JSON.parse(response);
            if (obj.success) {
                _this.attachmentsArr.push(obj.id);
                _this.toastr.success(_this.translate.instant('file_browser.messages.upload_file'), _this.translate.instant('file_browser.title'));
            }
        };
    };
    UploadFilesModelComponent.prototype.fileOverBase = function (e) {
        this.hasBaseDropZoneOver = e;
    };
    UploadFilesModelComponent.prototype.uploaderRemove = function (id) {
        var _this = this;
        var index = this.attachmentsArr.indexOf(id);
        if (index > -1) {
            var dataObj = {
                id: id,
            };
            this.fbService.removeAttachments(dataObj).subscribe(function (data) {
                _this.toastr.success(_this.translate.instant('file_browser.messages.delete_file'), _this.translate.instant('file_browser.title'));
            });
            this.attachmentsArr.splice(index, 1);
        }
    };
    UploadFilesModelComponent.prototype.onCancel = function () {
        this.onClose.next(false);
        this.bsCreateFileModalRef.hide();
    };
    UploadFilesModelComponent.ctorParameters = function () { return [
        { type: _ngx_translate_core__WEBPACK_IMPORTED_MODULE_2__["TranslateService"] },
        { type: ngx_bootstrap_modal__WEBPACK_IMPORTED_MODULE_4__["BsModalRef"] },
        { type: ngx_toastr__WEBPACK_IMPORTED_MODULE_3__["ToastrService"] },
        { type: _core_services_file_browser_service__WEBPACK_IMPORTED_MODULE_8__["FileBrowserService"] },
        { type: _core_services_authentication_service__WEBPACK_IMPORTED_MODULE_7__["AuthenticationService"] }
    ]; };
    UploadFilesModelComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-upload-files-model',
            template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./upload-files-model.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/modules/file-browser/components/upload-files-model/upload-files-model.component.html")).default,
            styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./upload-files-model.component.scss */ "./src/app/modules/file-browser/components/upload-files-model/upload-files-model.component.scss")).default]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_ngx_translate_core__WEBPACK_IMPORTED_MODULE_2__["TranslateService"],
            ngx_bootstrap_modal__WEBPACK_IMPORTED_MODULE_4__["BsModalRef"],
            ngx_toastr__WEBPACK_IMPORTED_MODULE_3__["ToastrService"],
            _core_services_file_browser_service__WEBPACK_IMPORTED_MODULE_8__["FileBrowserService"],
            _core_services_authentication_service__WEBPACK_IMPORTED_MODULE_7__["AuthenticationService"]])
    ], UploadFilesModelComponent);
    return UploadFilesModelComponent;
}());



/***/ }),

/***/ "./src/app/modules/file-browser/file-browser-routing.module.ts":
/*!*********************************************************************!*\
  !*** ./src/app/modules/file-browser/file-browser-routing.module.ts ***!
  \*********************************************************************/
/*! exports provided: FileBrowserRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FileBrowserRoutingModule", function() { return FileBrowserRoutingModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _pages_file_browser_file_browser_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./pages/file-browser/file-browser.component */ "./src/app/modules/file-browser/pages/file-browser/file-browser.component.ts");




var routes = [
    {
        path: '',
        children: [
            {
                path: '',
                component: _pages_file_browser_file_browser_component__WEBPACK_IMPORTED_MODULE_3__["FileBrowserComponent"]
            },
        ]
    }
];
var FileBrowserRoutingModule = /** @class */ (function () {
    function FileBrowserRoutingModule() {
    }
    FileBrowserRoutingModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)],
            exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]]
        })
    ], FileBrowserRoutingModule);
    return FileBrowserRoutingModule;
}());



/***/ }),

/***/ "./src/app/modules/file-browser/file-browser.module.ts":
/*!*************************************************************!*\
  !*** ./src/app/modules/file-browser/file-browser.module.ts ***!
  \*************************************************************/
/*! exports provided: FileBrowserModule, HttpLoaderFactory */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FileBrowserModule", function() { return FileBrowserModule; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "HttpLoaderFactory", function() { return HttpLoaderFactory; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var ng2_file_upload__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ng2-file-upload */ "./node_modules/ng2-file-upload/fesm5/ng2-file-upload.js");
/* harmony import */ var ngx_filesaver__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ngx-filesaver */ "./node_modules/ngx-filesaver/fesm5/ngx-filesaver.js");
/* harmony import */ var ngx_permissions__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ngx-permissions */ "./node_modules/ngx-permissions/ngx-permissions.umd.js");
/* harmony import */ var ngx_permissions__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(ngx_permissions__WEBPACK_IMPORTED_MODULE_7__);
/* harmony import */ var ngx_editor__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ngx-editor */ "./node_modules/ngx-editor/fesm5/ngx-editor.js");
/* harmony import */ var ngx_bootstrap__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ngx-bootstrap */ "./node_modules/ngx-bootstrap/esm5/ngx-bootstrap.js");
/* harmony import */ var ngx_bootstrap_progressbar__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ngx-bootstrap/progressbar */ "./node_modules/ngx-bootstrap/progressbar/fesm5/ngx-bootstrap-progressbar.js");
/* harmony import */ var _ngx_translate_core__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! @ngx-translate/core */ "./node_modules/@ngx-translate/core/fesm5/ngx-translate-core.js");
/* harmony import */ var _ngx_translate_http_loader__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! @ngx-translate/http-loader */ "./node_modules/@ngx-translate/http-loader/fesm5/ngx-translate-http-loader.js");
/* harmony import */ var _file_browser_routing_module__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ./file-browser-routing.module */ "./src/app/modules/file-browser/file-browser-routing.module.ts");
/* harmony import */ var _shared_shared_module__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ../../shared/shared.module */ "./src/app/shared/shared.module.ts");
/* harmony import */ var _pages_file_browser_file_browser_component__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! ./pages/file-browser/file-browser.component */ "./src/app/modules/file-browser/pages/file-browser/file-browser.component.ts");
/* harmony import */ var _components_upload_files_model_upload_files_model_component__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! ./components/upload-files-model/upload-files-model.component */ "./src/app/modules/file-browser/components/upload-files-model/upload-files-model.component.ts");
/* harmony import */ var _components_create_folder_model_create_folder_model_component__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! ./components/create-folder-model/create-folder-model.component */ "./src/app/modules/file-browser/components/create-folder-model/create-folder-model.component.ts");
/* harmony import */ var _components_edit_folder_modal_edit_folder_modal_component__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! ./components/edit-folder-modal/edit-folder-modal.component */ "./src/app/modules/file-browser/components/edit-folder-modal/edit-folder-modal.component.ts");
/* harmony import */ var _components_edit_file_modal_edit_file_modal_component__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(/*! ./components/edit-file-modal/edit-file-modal.component */ "./src/app/modules/file-browser/components/edit-file-modal/edit-file-modal.component.ts");




















var FileBrowserModule = /** @class */ (function () {
    function FileBrowserModule() {
    }
    FileBrowserModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            declarations: [
                _pages_file_browser_file_browser_component__WEBPACK_IMPORTED_MODULE_15__["FileBrowserComponent"],
                _components_upload_files_model_upload_files_model_component__WEBPACK_IMPORTED_MODULE_16__["UploadFilesModelComponent"],
                _components_create_folder_model_create_folder_model_component__WEBPACK_IMPORTED_MODULE_17__["CreateFolderModelComponent"],
                _components_edit_folder_modal_edit_folder_modal_component__WEBPACK_IMPORTED_MODULE_18__["EditFolderModalComponent"],
                _components_edit_folder_modal_edit_folder_modal_component__WEBPACK_IMPORTED_MODULE_18__["EditFolderModalComponent"],
                _components_edit_file_modal_edit_file_modal_component__WEBPACK_IMPORTED_MODULE_19__["EditFileModalComponent"]
            ],
            imports: [
                _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
                _file_browser_routing_module__WEBPACK_IMPORTED_MODULE_13__["FileBrowserRoutingModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_4__["FormsModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_4__["ReactiveFormsModule"],
                ngx_permissions__WEBPACK_IMPORTED_MODULE_7__["NgxPermissionsModule"],
                ngx_editor__WEBPACK_IMPORTED_MODULE_8__["NgxEditorModule"],
                ng2_file_upload__WEBPACK_IMPORTED_MODULE_5__["FileUploadModule"],
                _angular_common_http__WEBPACK_IMPORTED_MODULE_3__["HttpClientModule"],
                ngx_filesaver__WEBPACK_IMPORTED_MODULE_6__["FileSaverModule"],
                ngx_bootstrap__WEBPACK_IMPORTED_MODULE_9__["ModalModule"].forRoot(),
                ngx_bootstrap__WEBPACK_IMPORTED_MODULE_9__["TooltipModule"].forRoot(),
                ngx_bootstrap_progressbar__WEBPACK_IMPORTED_MODULE_10__["ProgressbarModule"].forRoot(),
                ngx_bootstrap__WEBPACK_IMPORTED_MODULE_9__["BsDropdownModule"].forRoot(),
                _ngx_translate_core__WEBPACK_IMPORTED_MODULE_11__["TranslateModule"].forChild({
                    loader: {
                        provide: _ngx_translate_core__WEBPACK_IMPORTED_MODULE_11__["TranslateLoader"],
                        useFactory: (HttpLoaderFactory),
                        deps: [_angular_common_http__WEBPACK_IMPORTED_MODULE_3__["HttpClient"]]
                    }
                }),
                _shared_shared_module__WEBPACK_IMPORTED_MODULE_14__["SharedModule"]
            ],
            entryComponents: [
                _components_upload_files_model_upload_files_model_component__WEBPACK_IMPORTED_MODULE_16__["UploadFilesModelComponent"],
                _components_edit_file_modal_edit_file_modal_component__WEBPACK_IMPORTED_MODULE_19__["EditFileModalComponent"],
                _components_create_folder_model_create_folder_model_component__WEBPACK_IMPORTED_MODULE_17__["CreateFolderModelComponent"],
                _components_edit_folder_modal_edit_folder_modal_component__WEBPACK_IMPORTED_MODULE_18__["EditFolderModalComponent"]
            ]
        })
    ], FileBrowserModule);
    return FileBrowserModule;
}());

// Required for AOT compilation
function HttpLoaderFactory(http) {
    return new _ngx_translate_http_loader__WEBPACK_IMPORTED_MODULE_12__["TranslateHttpLoader"](http, './assets/i18n/', '.json');
}


/***/ }),

/***/ "./src/app/modules/file-browser/pages/file-browser/file-browser.component.scss":
/*!*************************************************************************************!*\
  !*** ./src/app/modules/file-browser/pages/file-browser/file-browser.component.scss ***!
  \*************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL21vZHVsZXMvZmlsZS1icm93c2VyL3BhZ2VzL2ZpbGUtYnJvd3Nlci9maWxlLWJyb3dzZXIuY29tcG9uZW50LnNjc3MifQ== */");

/***/ }),

/***/ "./src/app/modules/file-browser/pages/file-browser/file-browser.component.ts":
/*!***********************************************************************************!*\
  !*** ./src/app/modules/file-browser/pages/file-browser/file-browser.component.ts ***!
  \***********************************************************************************/
/*! exports provided: FileBrowserComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FileBrowserComponent", function() { return FileBrowserComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var ngx_bootstrap_modal__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ngx-bootstrap/modal */ "./node_modules/ngx-bootstrap/modal/fesm5/ngx-bootstrap-modal.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");
/* harmony import */ var _ngx_translate_core__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ngx-translate/core */ "./node_modules/@ngx-translate/core/fesm5/ngx-translate-core.js");
/* harmony import */ var ngx_toastr__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ngx-toastr */ "./node_modules/ngx-toastr/fesm5/ngx-toastr.js");
/* harmony import */ var ngx_filesaver__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ngx-filesaver */ "./node_modules/ngx-filesaver/fesm5/ngx-filesaver.js");
/* harmony import */ var sweetalert2__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! sweetalert2 */ "./node_modules/sweetalert2/dist/sweetalert2.all.js");
/* harmony import */ var sweetalert2__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(sweetalert2__WEBPACK_IMPORTED_MODULE_7__);
/* harmony import */ var _core_services_file_browser_service__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../../../../core/services/file-browser.service */ "./src/app/core/services/file-browser.service.ts");
/* harmony import */ var _core_services_authentication_service__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../../../../core/services/authentication.service */ "./src/app/core/services/authentication.service.ts");
/* harmony import */ var _components_upload_files_model_upload_files_model_component__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ../../components/upload-files-model/upload-files-model.component */ "./src/app/modules/file-browser/components/upload-files-model/upload-files-model.component.ts");
/* harmony import */ var _components_edit_file_modal_edit_file_modal_component__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ../../components/edit-file-modal/edit-file-modal.component */ "./src/app/modules/file-browser/components/edit-file-modal/edit-file-modal.component.ts");
/* harmony import */ var _components_create_folder_model_create_folder_model_component__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ../../components/create-folder-model/create-folder-model.component */ "./src/app/modules/file-browser/components/create-folder-model/create-folder-model.component.ts");
/* harmony import */ var _components_edit_folder_modal_edit_folder_modal_component__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ../../components/edit-folder-modal/edit-folder-modal.component */ "./src/app/modules/file-browser/components/edit-folder-modal/edit-folder-modal.component.ts");
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ../../../../../environments/environment */ "./src/environments/environment.ts");















var FileBrowserComponent = /** @class */ (function () {
    function FileBrowserComponent(translate, modalService, toastr, fbService, _http, _FileSaverService, authenticationService) {
        var _this = this;
        this.translate = translate;
        this.modalService = modalService;
        this.toastr = toastr;
        this.fbService = fbService;
        this._http = _http;
        this._FileSaverService = _FileSaverService;
        this.authenticationService = authenticationService;
        this.current_folder = 0;
        this.apiUrl = _environments_environment__WEBPACK_IMPORTED_MODULE_14__["environment"].apiUrl;
        this.authenticationService.loginUser.subscribe(function (x) { return _this.loginUser = x; });
    }
    FileBrowserComponent.prototype.ngOnInit = function () {
        this.getFolderBreadcrumb();
        this.getFolders();
        this.getFiles();
    };
    FileBrowserComponent.prototype.getFileFolders = function (id) {
        this.current_folder = id;
        this.getFolderBreadcrumb();
        this.getFolders();
        this.getFiles();
    };
    FileBrowserComponent.prototype.getFolderBreadcrumb = function () {
        var _this = this;
        var reqObj = { folder: this.current_folder };
        this.fbService.getFolderBreadcrumb(reqObj).subscribe(function (resp) {
            _this.breadcrumbs = resp;
        });
    };
    FileBrowserComponent.prototype.getFolders = function () {
        var _this = this;
        var reqObj = { folder: this.current_folder };
        this.fbService.getFolders(reqObj).subscribe(function (resp) {
            _this.folders = resp;
        });
    };
    FileBrowserComponent.prototype.isEmptyObject = function (obj) {
        return (obj && (Object.keys(obj).length === 0));
    };
    FileBrowserComponent.prototype.getFiles = function () {
        var _this = this;
        var reqObj = { folder: this.current_folder };
        this.fbService.getFiles(reqObj).subscribe(function (resp) {
            _this.files = resp;
            if (_this.files) {
                // --
                // Render files based on file type
                for (var iRow in _this.files) {
                    switch (_this.files[iRow].file_extension) {
                        case 'txt':
                            _this.files[iRow].icon = 'fa fa-file-text';
                            break;
                        case 'mp3':
                        case 'wav':
                        case 'raw':
                        case 'tta':
                            _this.files[iRow].icon = 'fa fa-music';
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
                            _this.files[iRow].icon = 'fa fa-film';
                            break;
                        case 'pdf':
                            _this.files[iRow].icon = 'fa fa-file-pdf-o';
                            break;
                        case 'jpeg':
                        case 'jpg':
                        case 'png':
                        case 'gif':
                        case 'bmp':
                        case 'svg':
                            _this.files[iRow].isImageFile = true;
                            break;
                        default:
                            _this.files[iRow].isImageFile = false;
                            _this.files[iRow].icon = 'fa fa-file';
                            break;
                    }
                }
            }
        });
    };
    FileBrowserComponent.prototype.getParentFolderId = function () {
        var _this = this;
        this.fbService.getById(this.current_folder).subscribe(function (resp) {
            _this.current_folder = resp;
            _this.getFileFolders(_this.current_folder);
        });
    };
    FileBrowserComponent.prototype.uploadFileModal = function () {
        var _this = this;
        var modalConfig = {
            animated: true,
            keyboard: true,
            backdrop: true,
            ignoreBackdropClick: false,
            class: 'inmodal modal-dialog-centered modal-md animated fadeIn',
            initialState: {
                current_folder: this.current_folder
            }
        };
        this.modalRef = this.modalService.show(_components_upload_files_model_upload_files_model_component__WEBPACK_IMPORTED_MODULE_10__["UploadFilesModelComponent"], modalConfig);
        this.modalRef.content.onClose.subscribe(function (result) {
            _this.getFileFolders(_this.current_folder);
        });
    };
    FileBrowserComponent.prototype.opneFileEditModal = function (file) {
        var _this = this;
        var modalConfig = {
            animated: true,
            keyboard: true,
            backdrop: true,
            ignoreBackdropClick: false,
            class: 'inmodal modal-dialog-centered modal-md animated fadeIn',
            initialState: {
                file: file
            }
        };
        this.modalRef = this.modalService.show(_components_edit_file_modal_edit_file_modal_component__WEBPACK_IMPORTED_MODULE_11__["EditFileModalComponent"], modalConfig);
        this.modalRef.content.onClose.subscribe(function (result) {
            _this.getFileFolders(_this.current_folder);
        });
    };
    FileBrowserComponent.prototype.openFolderCreateModal = function () {
        var _this = this;
        var modalConfig = {
            animated: true,
            keyboard: true,
            backdrop: true,
            ignoreBackdropClick: false,
            class: 'inmodal modal-dialog-centered modal-md animated fadeIn',
            initialState: {
                current_folder: this.current_folder
            }
        };
        this.modalRef = this.modalService.show(_components_create_folder_model_create_folder_model_component__WEBPACK_IMPORTED_MODULE_12__["CreateFolderModelComponent"], modalConfig);
        this.modalRef.content.onClose.subscribe(function (result) {
            _this.getFileFolders(_this.current_folder);
        });
    };
    FileBrowserComponent.prototype.openFolderEditModal = function (folder) {
        var _this = this;
        var modalConfig = {
            animated: true,
            keyboard: true,
            backdrop: true,
            ignoreBackdropClick: false,
            class: 'inmodal modal-dialog-centered modal-md animated fadeIn',
            initialState: {
                folder: folder
            }
        };
        this.modalRef = this.modalService.show(_components_edit_folder_modal_edit_folder_modal_component__WEBPACK_IMPORTED_MODULE_13__["EditFolderModalComponent"], modalConfig);
        this.modalRef.content.onClose.subscribe(function (result) {
            _this.getFileFolders(_this.current_folder);
        });
    };
    FileBrowserComponent.prototype.deleteFolder = function (id) {
        var _this = this;
        sweetalert2__WEBPACK_IMPORTED_MODULE_7___default.a.fire({
            title: this.translate.instant('common.swal.title'),
            text: this.translate.instant('common.swal.text') + ' ' + this.translate.instant('file_browser.title6'),
            type: 'warning',
            showCancelButton: true,
            confirmButtonText: this.translate.instant('common.swal.confirmButtonText'),
            cancelButtonText: this.translate.instant('common.swal.cancelButtonText')
        }).then(function (result) {
            if (result.value) {
                _this.fbService.deleteFolder(id)
                    .subscribe(function (data) {
                    _this.toastr.success(_this.translate.instant('file_browser.messages.delete_folder'), _this.translate.instant('file_browser.title'));
                    _this.getFileFolders(_this.current_folder);
                });
            }
        });
    };
    FileBrowserComponent.prototype.deleteFile = function (id) {
        var _this = this;
        sweetalert2__WEBPACK_IMPORTED_MODULE_7___default.a.fire({
            title: this.translate.instant('common.swal.title'),
            text: this.translate.instant('common.swal.text') + ' ' + this.translate.instant('file_browser.title5'),
            type: 'warning',
            showCancelButton: true,
            confirmButtonText: this.translate.instant('common.swal.confirmButtonText'),
            cancelButtonText: this.translate.instant('common.swal.cancelButtonText')
        }).then(function (result) {
            if (result.value) {
                _this.fbService.deleteFile(id)
                    .subscribe(function (data) {
                    _this.toastr.success(_this.translate.instant('file_browser.messages.delete_file'), _this.translate.instant('file_browser.title'));
                    _this.getFileFolders(_this.current_folder);
                });
            }
        });
    };
    FileBrowserComponent.ctorParameters = function () { return [
        { type: _ngx_translate_core__WEBPACK_IMPORTED_MODULE_4__["TranslateService"] },
        { type: ngx_bootstrap_modal__WEBPACK_IMPORTED_MODULE_2__["BsModalService"] },
        { type: ngx_toastr__WEBPACK_IMPORTED_MODULE_5__["ToastrService"] },
        { type: _core_services_file_browser_service__WEBPACK_IMPORTED_MODULE_8__["FileBrowserService"] },
        { type: _angular_common_http__WEBPACK_IMPORTED_MODULE_3__["HttpClient"] },
        { type: ngx_filesaver__WEBPACK_IMPORTED_MODULE_6__["FileSaverService"] },
        { type: _core_services_authentication_service__WEBPACK_IMPORTED_MODULE_9__["AuthenticationService"] }
    ]; };
    FileBrowserComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-file-browser',
            template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./file-browser.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/modules/file-browser/pages/file-browser/file-browser.component.html")).default,
            styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./file-browser.component.scss */ "./src/app/modules/file-browser/pages/file-browser/file-browser.component.scss")).default]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_ngx_translate_core__WEBPACK_IMPORTED_MODULE_4__["TranslateService"],
            ngx_bootstrap_modal__WEBPACK_IMPORTED_MODULE_2__["BsModalService"],
            ngx_toastr__WEBPACK_IMPORTED_MODULE_5__["ToastrService"],
            _core_services_file_browser_service__WEBPACK_IMPORTED_MODULE_8__["FileBrowserService"],
            _angular_common_http__WEBPACK_IMPORTED_MODULE_3__["HttpClient"],
            ngx_filesaver__WEBPACK_IMPORTED_MODULE_6__["FileSaverService"],
            _core_services_authentication_service__WEBPACK_IMPORTED_MODULE_9__["AuthenticationService"]])
    ], FileBrowserComponent);
    return FileBrowserComponent;
}());



/***/ })

}]);
//# sourceMappingURL=modules-file-browser-file-browser-module.js.map