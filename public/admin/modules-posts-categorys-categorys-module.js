(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["modules-posts-categorys-categorys-module"],{

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/modules/posts/categorys/pages/category-create/category-create.component.html":
/*!************************************************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/modules/posts/categorys/pages/category-create/category-create.component.html ***!
  \************************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<section id=\"basic-form-layouts\">\r\n    <form (ngSubmit)=\"onSubmit()\" *ngIf=\"isFormLoaded\" [formGroup]=\"createCategoryForm\">\r\n        <div class=\"row\">\r\n            <div class=\"col-md-8\">\r\n                <div class=\"card\">\r\n                    <div class=\"card-header\">\r\n                        <h4 class=\"card-title\">{{'categorys.title1' | translate}}</h4>\r\n                    </div>\r\n                    <div class=\"card-body\">\r\n                        <div class=\"px-3\">\r\n                            <div class=\"form-body\">\r\n                                <h4 class=\"form-section\" (click)=\"isCollapsedHead1 = !isCollapsedHead1\" [attr.aria-expanded]=\"!isCollapsedHead1\" aria-controls=\"collapseBasic\">\r\n                                    {{'categorys.headings.head1' | translate}}\r\n                                    <i class=\"fa\" [ngClass] = \"isCollapsedHead1 ? 'fa-plus' : 'fa-minus'\"></i>\r\n                                </h4>\r\n                                <div class=\"row\" [collapse]=\"isCollapsedHead1\" [isAnimated]=\"true\">\r\n                                    <div class=\"col-md-12\">\r\n                                        <div [ngClass]=\"{ 'is-invalid': isFormSubmitted && categoryControl.name.errors }\" class=\"form-group\">\r\n                                            <label for=\"name\">{{'categorys.create.fields.name' | translate}}&nbsp;<span class=\"text-danger\">*</span>\r\n                                            </label>\r\n                                            <input [ngClass]=\"{ 'is-invalid': isFormSubmitted && categoryControl.name.errors }\" class=\"form-control\" formControlName=\"name\" id=\"name\" placeholder=\"{{'categorys.create.placeholders.placeholder1' | translate }}\" type=\"text\"/>\r\n                                            <div *ngIf=\"isFormSubmitted && categoryControl.name.errors\" class=\"invalid-feedback\">\r\n                                                <div *ngIf=\"categoryControl.name.errors.required\">{{'categorys.create.error_messages.message1' | translate}}</div>\r\n                                            </div>\r\n                                        </div>\r\n                                    </div>\r\n                                    <div class=\"col-md-12\">\r\n                                        <div [ngClass]=\"{ 'is-invalid': isFormSubmitted && categoryControl.parent_id.errors }\" class=\"form-group\">\r\n                                            <label for=\"parent_id\">{{'categorys.create.fields.parent' | translate}}&nbsp;<span class=\"text-danger\">*</span>\r\n                                            </label>\r\n                                            <ng-select [clearable]=\"false\" [items]=\"listcategorys\" [searchable]=\"true\" [selectOnTab]=\"true\" bindLabel=\"name\" bindValue=\"id\" formControlName=\"parent_id\" labelForId=\"parent_id\" placeholder=\"{{'categorys.create.placeholders.placeholder3' | translate}}\">\r\n                                                <ng-template let-item=\"item\" ng-option-tmp>\r\n                                                    {{item.name}}\r\n                                                </ng-template>\r\n                                            </ng-select>\r\n                                            <div *ngIf=\"isFormSubmitted && categoryControl.parent_id.errors\" class=\"invalid-feedback\">\r\n                                                <div *ngIf=\"categoryControl.parent_id.errors.required\">{{'categorys.create.error_messages.message2' | translate}}</div>\r\n                                            </div>\r\n                                        </div>\r\n                                    </div>\r\n                                    <div class=\"col-md-12\">\r\n                                        <div [ngClass]=\"{ 'is-invalid': isFormSubmitted && categoryControl.description.errors }\" class=\"form-group\">\r\n                                            <label for=\"description\">{{'categorys.create.fields.description' | translate}}&nbsp;\r\n                                            </label>\r\n                                            <textarea [ngClass]=\"{ 'is-invalid': isFormSubmitted && categoryControl.description.errors }\" class=\"form-control\" formControlName=\"description\" id=\"description\" name=\"description\" placeholder=\"{{'categorys.create.placeholders.placeholder2' | translate}}\"></textarea>\r\n                                            <div *ngIf=\"isFormSubmitted && categoryControl.description.errors\" class=\"invalid-feedback\">\r\n                                                <div *ngIf=\"categoryControl.description.errors.required\">{{'categorys.create.error_messages.message2' | translate}}</div>\r\n                                            </div>\r\n                                        </div>\r\n                                    </div>\r\n                                </div>\r\n                            </div>\r\n                        </div>\r\n                    </div>\r\n                </div>\r\n                <div class=\"card\">\r\n                    <div class=\"card-body\">\r\n                        <div class=\"px-3\">\r\n                            <div class=\"form-body\">\r\n                                <h4 class=\"form-section\" (click)=\"isCollapsedHead2 = !isCollapsedHead2\" [attr.aria-expanded]=\"!isCollapsedHead2\" aria-controls=\"collapseBasic\">\r\n                                    {{'categorys.headings.head2' | translate}}\r\n                                    <i class=\"fa\" [ngClass] = \"isCollapsedHead2 ? 'fa-plus' : 'fa-minus'\"></i>\r\n                                </h4>\r\n                                <div class=\"row\" [collapse]=\"isCollapsedHead2\" [isAnimated]=\"true\">\r\n                                    <div class=\"col-md-12\">\r\n                                        <div [ngClass]=\"{ 'is-invalid': isFormSubmitted && categoryControl.page_title.errors }\" class=\"form-group\">\r\n                                            <label for=\"page_title\">{{'categorys.create.fields.page_title' | translate}}\r\n                                            </label>\r\n                                            <input [ngClass]=\"{ 'is-invalid': isFormSubmitted && categoryControl.page_title.errors }\" class=\"form-control\" formControlName=\"page_title\" id=\"page_title\" placeholder=\"{{'categorys.create.placeholders.placeholder7' | translate }}\" type=\"text\"/>\r\n                                            <div *ngIf=\"isFormSubmitted && categoryControl.page_title.errors\" class=\"invalid-feedback\">\r\n                                                <div *ngIf=\"categoryControl.page_title.errors.required\">{{'categorys.create.error_messages.message1' | translate}}</div>\r\n                                            </div>\r\n                                        </div>\r\n                                    </div>\r\n                                    <div class=\"col-md-12\">\r\n                                        <div [ngClass]=\"{ 'is-invalid': isFormSubmitted && categoryControl.page_description.errors }\" class=\"form-group\">\r\n                                            <label for=\"page_description\">{{'categorys.create.fields.page_description' | translate}}\r\n                                            </label>\r\n                                            <textarea [ngClass]=\"{ 'is-invalid': isFormSubmitted && categoryControl.page_description.errors }\" class=\"form-control\" formControlName=\"page_description\" id=\"page_description\" name=\"page_description\" placeholder=\"{{'categorys.create.placeholders.placeholder8' | translate}}\"></textarea>\r\n                                            <div *ngIf=\"isFormSubmitted && categoryControl.page_description.errors\" class=\"invalid-feedback\">\r\n                                                <div *ngIf=\"categoryControl.page_description.errors.required\">{{'categorys.create.error_messages.message2' | translate}}</div>\r\n                                            </div>\r\n                                        </div>\r\n                                    </div>\r\n                                    <div class=\"col-md-12\">\r\n                                        <div [ngClass]=\"{ 'is-invalid': isFormSubmitted && categoryControl.url_and_handle.errors }\" class=\"form-group\">\r\n                                            <label for=\"url_and_handle\">{{'categorys.create.fields.url_and_handle' | translate}}&nbsp;<span class=\"text-danger\">*</span>\r\n                                            </label>\r\n                                            <input [ngClass]=\"{ 'is-invalid': isFormSubmitted && categoryControl.url_and_handle.errors }\" class=\"form-control\" formControlName=\"url_and_handle\" id=\"url_and_handle\" placeholder=\"{{'categorys.create.placeholders.placeholder9' | translate }}\" type=\"text\"/>\r\n                                            <div *ngIf=\"isFormSubmitted && categoryControl.url_and_handle.errors\" class=\"invalid-feedback\">\r\n                                                <div *ngIf=\"categoryControl.url_and_handle.errors.required\">{{'categorys.create.error_messages.message3' | translate}}</div>\r\n                                            </div>\r\n                                        </div>\r\n                                    </div>\r\n                                    <div class=\"col-md-12\">\r\n                                        <div class=\"form-group\">\r\n                                            <label for=\"seo\">{{'seo.create.fields.meta' | translate}}</label>\r\n                                            <ng-select  (add)=\"onAddMetaTag($event)\" (remove)=\"onRemoveMetaTag($event)\" [clearable]=\"false\" [multiple]=\"true\" [items]=\"seoData\" [searchable]=\"true\" [selectOnTab]=\"true\" bindLabel=\"label\" bindValue=\"id\" formControlName=\"seo\" labelForId=\"seo\" placeholder=\"{{'seo.create.placeholders.placeholder6' | translate}}\">\r\n                                                <ng-template let-item=\"item\" ng-option-tmp>\r\n                                                    {{item.label}}\r\n                                                </ng-template>\r\n                                            </ng-select>\r\n                                        </div>\r\n                                    </div>\r\n                                    <div class=\"px-2\">\r\n                                        <div class=\"table-responsive-xs table-responsive-sm table-responsive-md table-responsive-lg table-responsive-xl\" formArrayName=\"seoData\">\r\n                                            <table class=\"table table-bordered table-hover b4-datatable\" id=\"variations_table\" width=\"100%\">\r\n                                                <thead>\r\n                                                <tr>\r\n                                                    <th>{{'seo.create.fields.stt' | translate}}</th>\r\n                                                    <th >{{'seo.create.fields.meta' | translate}}</th>\r\n                                                    <th>{{'seo.create.fields.content' | translate}}</th>\r\n                                                </tr>\r\n                                                </thead>\r\n                                                <tbody>\r\n                                                <tr  *ngFor=\"let seo of createCategoryForm.controls.seoData.controls; let i=index\" [formGroupName]=\"i\">\r\n                                                    <td>\r\n                                                        <label>{{i+1}}</label>\r\n                                                    </td>\r\n                                                    <td >\r\n                                                        <div class=\"form-group\">\r\n                                                            <label>{{createCategoryForm.value.seoData[i]['meta']}}</label>\r\n                                                        </div>\r\n                                                    </td>\r\n                                                    <td>\r\n                                                        <div class=\"form-group\">\r\n                                                            <textarea class=\"form-control\" formControlName=\"content\" name=\"description\" placeholder=\"{{'seo.create.placeholders.placeholder7' | translate}}\"></textarea>\r\n                                                        </div>\r\n                                                    </td>\r\n                                                </tr>\r\n                                                </tbody>\r\n                                            </table>\r\n                                        </div>\r\n                                    </div>\r\n                                </div>\r\n                            </div>\r\n                        </div>\r\n                    </div>\r\n                </div>\r\n            </div>\r\n            <div class=\"col-md-4\">\r\n                <div class=\"card\">\r\n                    <div class=\"card-body\">\r\n                        <div class=\"px-3\">\r\n                            <div class=\"form-body\">\r\n                                <div class=\"row\">\r\n                                    <div class=\"col-md-12\">\r\n                                        <div [ngClass]=\"{ 'is-invalid': isFormSubmitted && categoryControl.active.errors }\" class=\"form-group mg-t-1rem\">\r\n                                            <label for=\"active\">{{'categorys.create.fields.status' | translate}}&nbsp;<span class=\"text-danger\">*</span>\r\n                                            </label>\r\n                                            <ng-select [items]=\"liststatus\" [searchable]=\"false\" [selectOnTab]=\"true\" bindValue=\"value\" formControlName=\"active\" labelForId=\"active\" placeholder=\"{{'categorys.create.placeholders.placeholder4' | translate}}\"></ng-select>\r\n                                            <div *ngIf=\"isFormSubmitted && categoryControl.active.errors\" class=\"invalid-feedback\">\r\n                                                <div *ngIf=\"categoryControl.active.errors.required\">{{'categorys.create.error_messages.message4' | translate}}</div>\r\n\r\n                                            </div>\r\n                                        </div>\r\n                                    </div>\r\n                                </div>\r\n                            </div>\r\n                        </div>\r\n                    </div>\r\n                </div>\r\n                <!-- <div class=\"card\">\r\n                    <div class=\"card-body\">\r\n                        <div class=\"px-3\">\r\n                            <div class=\"form-body\">\r\n                                <div class=\"row\">\r\n                                    <div class=\"col-md-12\">\r\n                                        <div [ngClass]=\"{ 'is-invalid': isFormSubmitted && categoryControl.keyword.errors }\" class=\"form-group mg-t-1rem\">\r\n                                            <label for=\"keyword\">{{'categorys.create.fields.keyword' | translate}}\r\n                                            </label>\r\n                                            <input [ngClass]=\"{ 'is-invalid': isFormSubmitted && categoryControl.keyword.errors }\" class=\"form-control\" formControlName=\"keyword\" id=\"keyword\" placeholder=\"{{'categorys.create.placeholders.placeholder5' | translate }}\" type=\"text\"/>\r\n                                            <div *ngIf=\"isFormSubmitted && categoryControl.keyword.errors\" class=\"invalid-feedback\">\r\n                                                <div *ngIf=\"categoryControl.keyword.errors.required\">{{'categorys.create.error_messages.message2' | translate}}</div>\r\n                                            </div>\r\n                                        </div>\r\n                                    </div>\r\n                                </div>\r\n                            </div>\r\n                        </div>\r\n                    </div>\r\n                </div> -->\r\n                <div class=\"card\" *ngIf=\"moduletype == 'products'\">\r\n                    <div class=\"card-body\">\r\n                        <div class=\"px-3\">\r\n                            <div class=\"form-body\">\r\n                                <div class=\"row\">\r\n                                    <div class=\"col-md-12\">\r\n                                        <div [ngClass]=\"{ 'is-invalid': isFormSubmitted && categoryControl.specifications.errors }\" class=\"form-group mg-t-1rem\">\r\n                                            <label for=\"specifications\">{{'categorys.create.fields.specifications' | translate}}&nbsp;<span class=\"text-danger\">*</span>\r\n                                            </label>\r\n                                            <ng-select [items]=\"specifications\" [multiple]=\"true\" [searchable]=\"true\" bindLabel=\"name\" bindValue=\"indentify\" formControlName=\"specifications\" placeholder=\"{{'categorys.create.placeholders.placeholder2' | translate}}\">\r\n                                                <ng-template let-item=\"item\" ng-option-tmp>\r\n                                                    {{item.name}}\r\n                                                </ng-template>\r\n                                            </ng-select>\r\n                                            <div *ngIf=\"isFormSubmitted && categoryControl.specifications.errors\" class=\"invalid-feedback\">\r\n                                                <div *ngIf=\"categoryControl.specifications.errors.required\">{{'categorys.create.error_messages.message2' | translate}}</div>\r\n                                            </div>\r\n                                        </div>\r\n                                    </div>\r\n                                </div>\r\n                            </div>\r\n                        </div>\r\n                    </div>\r\n                </div>\r\n                <div class=\"card\">\r\n                    <div class=\"card-body\">\r\n                        <div class=\"px-3\">\r\n                            <div class=\"form-body\">\r\n                                <div class=\"row\">\r\n                                    <div class=\"col-md-12\">\r\n                                        <div [ngClass]=\"{ 'is-invalid': isFormSubmitted && categoryControl.avatar.errors }\" class=\"form-group mg-t-1rem\">\r\n                                            <label for=\"avatar\">{{'categorys.create.fields.avatar' | translate}}&nbsp;<span class=\"text-danger\">*</span>\r\n                                            </label>\r\n                                            <input formControlName=\"avatar\" type=\"hidden\">\r\n                                            <div #logodropzone class=\"dropzone dz-clickable\">\r\n                                                <div class=\"dz-default dz-message\">\r\n                                                    <span><strong>{{'categorys.create.placeholders.placeholder10' | translate }}</strong></span>\r\n                                                </div>\r\n                                            </div>\r\n                                        </div>\r\n                                    </div>\r\n                                </div>\r\n                            </div>\r\n                        </div>\r\n                    </div>\r\n                </div>\r\n                <div class=\"card\">\r\n                    <div class=\"card-body\">\r\n                        <div class=\"px-3\">\r\n                            <div class=\"form-body\">\r\n                                <div class=\"row\">\r\n                                    <div class=\"col-md-12\">\r\n                                        <div [ngClass]=\"{ 'is-invalid': isFormSubmitted && categoryControl.pages_id.errors }\" class=\"form-group mg-t-1rem\">\r\n                                            <label for=\"pages_id\">{{'categorys.create.fields.template' | translate}}&nbsp;<span class=\"text-danger\">*</span>\r\n                                            </label>\r\n                                            <ng-select [items]=\"listTemplate\" [searchable]=\"true\" [selectOnTab]=\"true\" bindLabel=\"name\" bindValue=\"id\" formControlName=\"pages_id\" labelForId=\"pages_id\" placeholder=\"{{'categorys.create.placeholders.placeholder6' | translate}}\"></ng-select>\r\n                                            <!--                                            <input [ngClass]=\"{ 'is-invalid': isFormSubmitted && categoryControl.template.errors }\" class=\"form-control\" formControlName=\"template\" id=\"template\" placeholder=\"{{'categorys.create.placeholders.placeholder6' | translate }}\" type=\"text\"/>-->\r\n                                            <div *ngIf=\"isFormSubmitted && categoryControl.pages_id.errors\" class=\"invalid-feedback\">\r\n                                                <div *ngIf=\"categoryControl.pages_id.errors.required\">{{'categorys.create.error_messages.message2' | translate}}</div>\r\n                                            </div>\r\n                                        </div>\r\n                                    </div>\r\n                                </div>\r\n                            </div>\r\n                        </div>\r\n                    </div>\r\n                </div>\r\n            </div>\r\n            <div class=\"col-md-12\">\r\n                <div class=\"card\">\r\n                    <div class=\"card-body\">\r\n                        <div class=\"px-3\">\r\n                            <div class=\"form-body\">\r\n                                <div class=\"row mb-3\">\r\n                                    <div class=\"col-md-12 text-right pt-3\">\r\n                                        <a [routerLink]=\"urlPage\" class=\"btn btn-cancel mb-0\">{{'common.cancel' | translate }}</a>\r\n                                        <button class=\"btn btn-submit mb-0\" type=\"submit\">{{'common.create' | translate }}</button>\r\n                                    </div>\r\n                                </div>\r\n                            </div>\r\n                        </div>\r\n                    </div>\r\n                </div>\r\n            </div>\r\n        </div>\r\n    </form>\r\n</section>\r\n");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/modules/posts/categorys/pages/category-edit/category-edit.component.html":
/*!********************************************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/modules/posts/categorys/pages/category-edit/category-edit.component.html ***!
  \********************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<section id=\"basic-form-layouts\">\r\n    <form (ngSubmit)=\"onSubmit()\" *ngIf=\"isFormLoaded\" [formGroup]=\"editCategoryForm\">\r\n        <div class=\"row\">\r\n            <div class=\"col-md-8\">\r\n                <div class=\"card\">\r\n                    <div class=\"card-header\">\r\n                        <h4 class=\"card-title\">{{'categorys.title2' | translate}}</h4>\r\n                    </div>\r\n                    <div class=\"card-body\">\r\n                        <div class=\"px-3\">\r\n                            <div class=\"form-body\">\r\n                                <h4 class=\"form-section\" (click)=\"isCollapsedHead1 = !isCollapsedHead1\" [attr.aria-expanded]=\"!isCollapsedHead1\" aria-controls=\"collapseBasic\">\r\n                                    {{'categorys.headings.head1' | translate}}\r\n                                    <i class=\"fa\" [ngClass] = \"isCollapsedHead1 ? 'fa-plus' : 'fa-minus'\"></i>\r\n                                </h4>\r\n                                <div class=\"row\" [collapse]=\"isCollapsedHead1\" [isAnimated]=\"true\">\r\n                                    <div class=\"col-md-12\">\r\n                                        <div [ngClass]=\"{ 'is-invalid': isFormSubmitted && categoryControl.name.errors }\" class=\"form-group\">\r\n                                            <label for=\"name\">{{'categorys.create.fields.name' | translate}}&nbsp;<span class=\"text-danger\">*</span>\r\n                                            </label>\r\n                                            <input [ngClass]=\"{ 'is-invalid': isFormSubmitted && categoryControl.name.errors }\" class=\"form-control\" formControlName=\"name\" id=\"name\" placeholder=\"{{'categorys.create.placeholders.placeholder1' | translate }}\" type=\"text\"/>\r\n                                            <div *ngIf=\"isFormSubmitted && categoryControl.name.errors\" class=\"invalid-feedback\">\r\n                                                <div *ngIf=\"categoryControl.name.errors.required\">{{'categorys.create.error_messages.message1' | translate}}</div>\r\n                                            </div>\r\n                                        </div>\r\n                                    </div>\r\n                                    <div class=\"col-md-12\">\r\n                                        <div [ngClass]=\"{ 'is-invalid': isFormSubmitted && categoryControl.parent_id.errors }\" class=\"form-group\">\r\n                                            <label for=\"parent_id\">{{'categorys.create.fields.parent' | translate}}&nbsp;<span class=\"text-danger\">*</span>\r\n                                            </label>\r\n                                            <ng-select [clearable]=\"false\" [items]=\"listcategorys\" [searchable]=\"true\" [selectOnTab]=\"true\" bindLabel=\"name\" bindValue=\"id\" formControlName=\"parent_id\" labelForId=\"parent_id\" placeholder=\"{{'categorys.create.placeholders.placeholder3' | translate}}\">\r\n                                                <ng-template let-item=\"item\" ng-option-tmp>\r\n                                                    {{item.name}}\r\n                                                </ng-template>\r\n                                            </ng-select>\r\n                                            <div *ngIf=\"isFormSubmitted && categoryControl.parent_id.errors\" class=\"invalid-feedback\">\r\n                                                <div *ngIf=\"categoryControl.parent_id.errors.required\">{{'categorys.create.error_messages.message2' | translate}}</div>\r\n                                            </div>\r\n                                        </div>\r\n                                    </div>\r\n                                    <div class=\"col-md-12\">\r\n                                        <div [ngClass]=\"{ 'is-invalid': isFormSubmitted && categoryControl.description.errors }\" class=\"form-group\">\r\n                                            <label for=\"description\">{{'categorys.create.fields.description' | translate}}&nbsp;\r\n                                            </label>\r\n                                            <textarea [ngClass]=\"{ 'is-invalid': isFormSubmitted && categoryControl.description.errors }\" class=\"form-control\" formControlName=\"description\" id=\"description\" name=\"description\" placeholder=\"{{'categorys.create.placeholders.placeholder2' | translate}}\"></textarea>\r\n                                            <div *ngIf=\"isFormSubmitted && categoryControl.description.errors\" class=\"invalid-feedback\">\r\n                                                <div *ngIf=\"categoryControl.description.errors.required\">{{'categorys.create.error_messages.message2' | translate}}</div>\r\n                                            </div>\r\n                                        </div>\r\n                                    </div>\r\n                                </div>\r\n                            </div>\r\n                        </div>\r\n                    </div>\r\n                </div>\r\n                <div class=\"card\">\r\n                    <div class=\"card-body\">\r\n                        <div class=\"px-3\">\r\n                            <div class=\"form-body\">\r\n                                <h4 class=\"form-section\" (click)=\"isCollapsedHead2 = !isCollapsedHead2\" [attr.aria-expanded]=\"!isCollapsedHead2\" aria-controls=\"collapseBasic\">\r\n                                    {{'categorys.headings.head2' | translate}}\r\n                                    <i class=\"fa\" [ngClass] = \"isCollapsedHead2 ? 'fa-plus' : 'fa-minus'\"></i>\r\n                                </h4>\r\n                                <div class=\"row\" [collapse]=\"isCollapsedHead2\" [isAnimated]=\"true\">\r\n                                    <div class=\"col-md-12\">\r\n                                        <div [ngClass]=\"{ 'is-invalid': isFormSubmitted && categoryControl.page_title.errors }\" class=\"form-group\">\r\n                                            <label for=\"page_title\">{{'categorys.create.fields.page_title' | translate}}\r\n                                            </label>\r\n                                            <input [ngClass]=\"{ 'is-invalid': isFormSubmitted && categoryControl.page_title.errors }\" class=\"form-control\" formControlName=\"page_title\" id=\"page_title\" placeholder=\"{{'categorys.create.placeholders.placeholder7' | translate }}\" type=\"text\"/>\r\n                                            <div *ngIf=\"isFormSubmitted && categoryControl.page_title.errors\" class=\"invalid-feedback\">\r\n                                                <div *ngIf=\"categoryControl.page_title.errors.required\">{{'categorys.create.error_messages.message1' | translate}}</div>\r\n                                            </div>\r\n                                        </div>\r\n                                    </div>\r\n                                    <div class=\"col-md-12\">\r\n                                        <div [ngClass]=\"{ 'is-invalid': isFormSubmitted && categoryControl.page_description.errors }\" class=\"form-group\">\r\n                                            <label for=\"page_description\">{{'categorys.create.fields.page_description' | translate}}\r\n                                            </label>\r\n                                            <textarea [ngClass]=\"{ 'is-invalid': isFormSubmitted && categoryControl.page_description.errors }\" class=\"form-control\" formControlName=\"page_description\" id=\"page_description\" name=\"page_description\" placeholder=\"{{'categorys.create.placeholders.placeholder8' | translate}}\"></textarea>\r\n                                            <div *ngIf=\"isFormSubmitted && categoryControl.page_description.errors\" class=\"invalid-feedback\">\r\n                                                <div *ngIf=\"categoryControl.page_description.errors.required\">{{'categorys.create.error_messages.message2' | translate}}</div>\r\n                                            </div>\r\n                                        </div>\r\n                                    </div>\r\n                                    <div class=\"col-md-12\">\r\n                                        <div [ngClass]=\"{ 'is-invalid': isFormSubmitted && categoryControl.url_and_handle.errors }\" class=\"form-group\">\r\n                                            <label for=\"url_and_handle\">{{'categorys.create.fields.url_and_handle' | translate}}&nbsp;<span class=\"text-danger\">*</span>\r\n                                            </label>\r\n                                            <input [ngClass]=\"{ 'is-invalid': isFormSubmitted && categoryControl.url_and_handle.errors }\" class=\"form-control\" formControlName=\"url_and_handle\" id=\"url_and_handle\" placeholder=\"{{'categorys.create.placeholders.placeholder9' | translate }}\" type=\"text\"/>\r\n                                            <div *ngIf=\"isFormSubmitted && categoryControl.url_and_handle.errors\" class=\"invalid-feedback\">\r\n                                                <div *ngIf=\"categoryControl.url_and_handle.errors.required\">{{'categorys.create.error_messages.message3' | translate}}</div>\r\n                                            </div>\r\n                                        </div>\r\n                                    </div>\r\n                                    <div class=\"col-md-12\">\r\n                                        <div class=\"form-group\">\r\n                                            <label for=\"seo\">{{'seo.create.fields.meta' | translate}}</label>\r\n                                            <ng-select (add)=\"onAddMetaTag($event)\" (remove)=\"onRemoveMetaTag($event)\" [clearable]=\"false\" [multiple]=\"true\" [items]=\"seoData\" [searchable]=\"true\" [selectOnTab]=\"true\" bindLabel=\"label\" bindValue=\"id\" formControlName=\"seo\" labelForId=\"seo\" placeholder=\"{{'seo.create.placeholders.placeholder6' | translate}}\">\r\n                                                <ng-template let-item=\"item\" ng-option-tmp>\r\n                                                    {{item.label}}\r\n                                                </ng-template>\r\n                                            </ng-select>\r\n                                        </div>\r\n                                    </div>\r\n                                    <div class=\"px-2\">\r\n                                        <div class=\"table-responsive-xs table-responsive-sm table-responsive-md table-responsive-lg table-responsive-xl\" formArrayName=\"seoData\">\r\n                                            <table class=\"table table-bordered table-hover b4-datatable\" id=\"variations_table\" width=\"100%\">\r\n                                                <thead>\r\n                                                <tr>\r\n                                                    <th>{{'seo.create.fields.stt' | translate}}</th>\r\n                                                    <th >{{'seo.create.fields.meta' | translate}}</th>\r\n                                                    <th>{{'seo.create.fields.content' | translate}}</th>\r\n                                                </tr>\r\n                                                </thead>\r\n                                                <tbody>\r\n                                                <tr  *ngFor=\"let seo of editCategoryForm.controls.seoData.controls; let i=index\" [formGroupName]=\"i\">\r\n                                                    <td>\r\n                                                        <label>{{i+1}}</label>\r\n                                                    </td>\r\n                                                    <td >\r\n                                                        <div class=\"form-group\">\r\n                                                            <label>{{editCategoryForm.value.seoData[i]['meta']}}</label>\r\n                                                        </div>\r\n                                                    </td>\r\n                                                    <td>\r\n                                                        <div class=\"form-group\">\r\n                                                            <textarea class=\"form-control\" formControlName=\"content\"  name=\"description\" placeholder=\"{{'seo.create.placeholders.placeholder7' | translate}}\"></textarea>\r\n                                                        </div>\r\n                                                    </td>\r\n                                                </tr>\r\n                                                </tbody>\r\n                                            </table>\r\n                                        </div>\r\n                                    </div>\r\n                                </div>\r\n                            </div>\r\n                        </div>\r\n                    </div>\r\n                </div>\r\n            </div>\r\n            <div class=\"col-md-4\">\r\n                <div class=\"card\">\r\n                    <div class=\"card-body\">\r\n                        <div class=\"px-3\">\r\n                            <div class=\"form-body\">\r\n                                <div class=\"row\">\r\n                                    <div class=\"col-md-12\">\r\n                                        <div [ngClass]=\"{ 'is-invalid': isFormSubmitted && categoryControl.active.errors }\" class=\"form-group mg-t-1rem\">\r\n                                            <label for=\"active\">{{'categorys.create.fields.status' | translate}}&nbsp;<span class=\"text-danger\">*</span>\r\n                                            </label>\r\n                                            <ng-select [items]=\"liststatus\" [searchable]=\"false\" [selectOnTab]=\"true\" bindValue=\"value\" formControlName=\"active\" labelForId=\"active\" placeholder=\"{{'categorys.create.placeholders.placeholder4' | translate}}\"></ng-select>\r\n                                            <!--                                            <input [ngClass]=\"{ 'is-invalid': isFormSubmitted && categoryControl.status.errors }\" class=\"form-control\" formControlName=\"status\" id=\"status\" placeholder=\"{{'categorys.create.placeholders.placeholder2' | translate }}\" type=\"text\"/>-->\r\n                                            <div *ngIf=\"isFormSubmitted && categoryControl.active.errors\" class=\"invalid-feedback\">\r\n                                                <div *ngIf=\"categoryControl.active.errors.required\">{{'categorys.create.error_messages.message4' | translate}}</div>\r\n                                            </div>\r\n                                        </div>\r\n                                    </div>\r\n                                </div>\r\n                            </div>\r\n                        </div>\r\n                    </div>\r\n                </div>\r\n                <!-- <div class=\"card\">\r\n                    <div class=\"card-body\">\r\n                        <div class=\"px-3\">\r\n                            <div class=\"form-body\">\r\n                                <div class=\"row\">\r\n                                    <div class=\"col-md-12\">\r\n                                        <div [ngClass]=\"{ 'is-invalid': isFormSubmitted && categoryControl.keyword.errors }\" class=\"form-group mg-t-1rem\">\r\n                                            <label for=\"keyword\">{{'categorys.create.fields.keyword' | translate}}\r\n                                            </label>\r\n                                            <input [ngClass]=\"{ 'is-invalid': isFormSubmitted && categoryControl.keyword.errors }\" class=\"form-control\" formControlName=\"keyword\" id=\"keyword\" placeholder=\"{{'categorys.create.placeholders.placeholder5' | translate }}\" type=\"text\"/>\r\n                                            <div *ngIf=\"isFormSubmitted && categoryControl.keyword.errors\" class=\"invalid-feedback\">\r\n                                                <div *ngIf=\"categoryControl.keyword.errors.required\">{{'categorys.create.error_messages.message2' | translate}}</div>\r\n                                            </div>\r\n                                        </div>\r\n                                    </div>\r\n                                </div>\r\n                            </div>\r\n                        </div>\r\n                    </div>\r\n                </div> -->\r\n                <div class=\"card\" *ngIf=\"moduletype == 'products'\">\r\n                    <div class=\"card-body\">\r\n                        <div class=\"px-3\">\r\n                            <div class=\"form-body\">\r\n                                <div class=\"row\">\r\n                                    <div class=\"col-md-12\">\r\n                                        <div [ngClass]=\"{ 'is-invalid': isFormSubmitted && categoryControl.specifications.errors }\" class=\"form-group mg-t-1rem\">\r\n                                            <label for=\"specifications\">{{'categorys.create.fields.specifications' | translate}}&nbsp;<span class=\"text-danger\">*</span>\r\n                                            </label>\r\n                                            <ng-select [items]=\"specifications\" [multiple]=\"true\" [searchable]=\"true\" bindLabel=\"name\" bindValue=\"indentify\" formControlName=\"specifications\" placeholder=\"{{'categorys.create.placeholders.placeholder2' | translate}}\">\r\n                                                <ng-template let-item=\"item\" ng-option-tmp>\r\n                                                    {{item.name}}\r\n                                                </ng-template>\r\n                                            </ng-select>\r\n                                            <div *ngIf=\"isFormSubmitted && categoryControl.specifications.errors\" class=\"invalid-feedback\">\r\n                                                <div *ngIf=\"categoryControl.specifications.errors.required\">{{'categorys.create.error_messages.message2' | translate}}</div>\r\n                                            </div>\r\n                                        </div>\r\n                                    </div>\r\n                                </div>\r\n                            </div>\r\n                        </div>\r\n                    </div>\r\n                </div>\r\n                <div class=\"card\">\r\n                    <div class=\"card-body\">\r\n                        <div class=\"px-3\">\r\n                            <div class=\"form-body\">\r\n                                <div class=\"row\">\r\n                                    <div class=\"col-md-12\">\r\n                                        <div [ngClass]=\"{ 'is-invalid': isFormSubmitted && categoryControl.avatar.errors }\" class=\"form-group mg-t-1rem\">\r\n                                            <label for=\"avatar\">{{'categorys.create.fields.avatar' | translate}}&nbsp;<span class=\"text-danger\">*</span>\r\n                                            </label>\r\n                                            <input formControlName=\"avatar\" type=\"hidden\">\r\n                                            <div #logodropzone class=\"dropzone dz-clickable\">\r\n                                                <div *ngIf=\"isLogoLoaded && category.avatar\" class=\"dz-preview dz-image-preview\">\r\n                                                    <div class=\"dz-image\">\r\n                                                        <img height=\"100\" src=\"{{apiUrl}}/uploads/project/{{category.avatar}}\" width=\"100\"/>\r\n                                                    </div>\r\n                                                    <a (click)=\"removeDropzoneImage()\" class=\"btn btn-sm btn-block\">{{ 'common.remove_file' | translate }}</a>\r\n                                                </div>\r\n                                                <!-- <div class=\"dz-default dz-message\">\r\n                                                    <span><strong>{{'categorys.create.placeholders.placeholder10' | translate }}</strong></span>\r\n                                                </div> -->\r\n                                            </div>\r\n                                        </div>\r\n                                    </div>\r\n                                </div>\r\n                            </div>\r\n                        </div>\r\n                    </div>\r\n                </div>\r\n                <div class=\"card\">\r\n                    <div class=\"card-body\">\r\n                        <div class=\"px-3\">\r\n                            <div class=\"form-body\">\r\n                                <div class=\"row\">\r\n                                    <div class=\"col-md-12\">\r\n                                        <div [ngClass]=\"{ 'is-invalid': isFormSubmitted && categoryControl.pages_id.errors }\" class=\"form-group mg-t-1rem\">\r\n                                            <label for=\"pages_id\">{{'categorys.create.fields.template' | translate}}&nbsp;<span class=\"text-danger\">*</span>\r\n                                            </label>\r\n                                            <ng-select [items]=\"listTemplate\" [searchable]=\"true\" [selectOnTab]=\"true\" bindLabel=\"name\" bindValue=\"id\" formControlName=\"pages_id\" labelForId=\"pages_id\" placeholder=\"{{'categorys.create.placeholders.placeholder6' | translate}}\"></ng-select>\r\n                                            <!--                                            <input [ngClass]=\"{ 'is-invalid': isFormSubmitted && categoryControl.template.errors }\" class=\"form-control\" formControlName=\"template\" id=\"template\" placeholder=\"{{'categorys.create.placeholders.placeholder6' | translate }}\" type=\"text\"/>-->\r\n                                            <div *ngIf=\"isFormSubmitted && categoryControl.pages_id.errors\" class=\"invalid-feedback\">\r\n                                                <div *ngIf=\"categoryControl.pages_id.errors.required\">{{'categorys.create.error_messages.message2' | translate}}</div>\r\n                                            </div>\r\n                                        </div>\r\n                                    </div>\r\n                                </div>\r\n                            </div>\r\n                        </div>\r\n                    </div>\r\n                </div>\r\n            </div>\r\n            <div class=\"col-md-12\">\r\n                <div class=\"card\">\r\n                    <div class=\"card-body\">\r\n                        <div class=\"px-3\">\r\n                            <div class=\"form-body\">\r\n                                <div class=\"row mb-3\">\r\n                                    <div class=\"col-md-12 text-right pt-3\">\r\n                                        <a [routerLink]=\"urlPage\" class=\"btn btn-cancel mb-0\">{{'common.cancel' | translate }}</a>\r\n                                        <button class=\"btn btn-submit mb-0\" type=\"submit\">{{'common.create' | translate }}</button>\r\n                                    </div>\r\n                                </div>\r\n                            </div>\r\n                        </div>\r\n                    </div>\r\n                </div>\r\n            </div>\r\n        </div>\r\n    </form>\r\n</section>\r\n");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/modules/posts/categorys/pages/category-item-translate/category-item-translate.component.html":
/*!****************************************************************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/modules/posts/categorys/pages/category-item-translate/category-item-translate.component.html ***!
  \****************************************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<form (ngSubmit)=\"onSubmit()\" *ngIf=\"isFormLoaded\" [formGroup]=\"createCategoryForm\">\r\n  <div class=\"row\">\r\n      <div class=\"col-md-8\">\r\n          <div class=\"card\">\r\n              <div class=\"card-header\">\r\n                  <h4 class=\"card-title\">{{'categorys.title1' | translate}}</h4>\r\n              </div>\r\n              <div class=\"card-body\">\r\n                  <div class=\"px-3\">\r\n                      <div class=\"form-body\">\r\n                          <h4 class=\"form-section\" (click)=\"isCollapsedHead1 = !isCollapsedHead1\" [attr.aria-expanded]=\"!isCollapsedHead1\" aria-controls=\"collapseBasic\">\r\n                              {{'categorys.headings.head1' | translate}}\r\n                              <i class=\"fa\" [ngClass] = \"isCollapsedHead1 ? 'fa-plus' : 'fa-minus'\"></i>\r\n                          </h4>\r\n                          <div class=\"row\" [collapse]=\"isCollapsedHead1\" [isAnimated]=\"true\">\r\n                              <div class=\"col-md-12\">\r\n                                  <div [ngClass]=\"{ 'is-invalid': isFormSubmitted && categoryControl.name.errors }\" class=\"form-group\">\r\n                                      <label for=\"name\">{{'categorys.create.fields.name' | translate}}&nbsp;<span class=\"text-danger\">*</span>\r\n                                      </label>\r\n                                      <input [ngClass]=\"{ 'is-invalid': isFormSubmitted && categoryControl.name.errors }\" class=\"form-control\" formControlName=\"name\" id=\"name\" placeholder=\"{{'categorys.create.placeholders.placeholder1' | translate }}\" type=\"text\"/>\r\n                                      <div *ngIf=\"isFormSubmitted && categoryControl.name.errors\" class=\"invalid-feedback\">\r\n                                          <div *ngIf=\"categoryControl.name.errors.required\">{{'categorys.create.error_messages.message1' | translate}}</div>\r\n                                      </div>\r\n                                  </div>\r\n                              </div>\r\n                              <div class=\"col-md-12\">\r\n                                  <div [ngClass]=\"{ 'is-invalid': isFormSubmitted && categoryControl.parent_id.errors }\" class=\"form-group\">\r\n                                      <label for=\"parent_id\">{{'categorys.create.fields.parent' | translate}}&nbsp;<span class=\"text-danger\">*</span>\r\n                                      </label>\r\n                                      <ng-select [clearable]=\"false\" [items]=\"listcategorys\" [searchable]=\"true\" [selectOnTab]=\"true\" bindLabel=\"name\" bindValue=\"id\" formControlName=\"parent_id\" labelForId=\"parent_id\" placeholder=\"{{'categorys.create.placeholders.placeholder3' | translate}}\">\r\n                                          <ng-template let-item=\"item\" ng-option-tmp>\r\n                                              {{item.name}}\r\n                                          </ng-template>\r\n                                      </ng-select>\r\n                                      <div *ngIf=\"isFormSubmitted && categoryControl.parent_id.errors\" class=\"invalid-feedback\">\r\n                                          <div *ngIf=\"categoryControl.parent_id.errors.required\">{{'categorys.create.error_messages.message2' | translate}}</div>\r\n                                      </div>\r\n                                  </div>\r\n                              </div>\r\n                              <div class=\"col-md-12\">\r\n                                  <div [ngClass]=\"{ 'is-invalid': isFormSubmitted && categoryControl.description.errors }\" class=\"form-group\">\r\n                                      <label for=\"description\">{{'categorys.create.fields.description' | translate}}&nbsp;\r\n                                      </label>\r\n                                      <textarea [ngClass]=\"{ 'is-invalid': isFormSubmitted && categoryControl.description.errors }\" class=\"form-control\" formControlName=\"description\" id=\"description\" name=\"description\" placeholder=\"{{'categorys.create.placeholders.placeholder2' | translate}}\"></textarea>\r\n                                      <div *ngIf=\"isFormSubmitted && categoryControl.description.errors\" class=\"invalid-feedback\">\r\n                                          <div *ngIf=\"categoryControl.description.errors.required\">{{'categorys.create.error_messages.message2' | translate}}</div>\r\n                                      </div>\r\n                                  </div>\r\n                              </div>\r\n                          </div>\r\n                      </div>\r\n                  </div>\r\n              </div>\r\n          </div>\r\n          <div class=\"card\">\r\n              <div class=\"card-body\">\r\n                  <div class=\"px-3\">\r\n                      <div class=\"form-body\">\r\n                          <h4 class=\"form-section\" (click)=\"isCollapsedHead2 = !isCollapsedHead2\" [attr.aria-expanded]=\"!isCollapsedHead2\" aria-controls=\"collapseBasic\">\r\n                              {{'categorys.headings.head2' | translate}}\r\n                              <i class=\"fa\" [ngClass] = \"isCollapsedHead2 ? 'fa-plus' : 'fa-minus'\"></i>\r\n                          </h4>\r\n                          <div class=\"row\" [collapse]=\"isCollapsedHead2\" [isAnimated]=\"true\">\r\n                              <div class=\"col-md-12\">\r\n                                  <div [ngClass]=\"{ 'is-invalid': isFormSubmitted && categoryControl.page_title.errors }\" class=\"form-group\">\r\n                                      <label for=\"page_title\">{{'categorys.create.fields.page_title' | translate}}\r\n                                      </label>\r\n                                      <input [ngClass]=\"{ 'is-invalid': isFormSubmitted && categoryControl.page_title.errors }\" class=\"form-control\" formControlName=\"page_title\" id=\"page_title\" placeholder=\"{{'categorys.create.placeholders.placeholder7' | translate }}\" type=\"text\"/>\r\n                                      <div *ngIf=\"isFormSubmitted && categoryControl.page_title.errors\" class=\"invalid-feedback\">\r\n                                          <div *ngIf=\"categoryControl.page_title.errors.required\">{{'categorys.create.error_messages.message1' | translate}}</div>\r\n                                      </div>\r\n                                  </div>\r\n                              </div>\r\n                              <div class=\"col-md-12\">\r\n                                  <div [ngClass]=\"{ 'is-invalid': isFormSubmitted && categoryControl.page_description.errors }\" class=\"form-group\">\r\n                                      <label for=\"page_description\">{{'categorys.create.fields.page_description' | translate}}\r\n                                      </label>\r\n                                      <textarea [ngClass]=\"{ 'is-invalid': isFormSubmitted && categoryControl.page_description.errors }\" class=\"form-control\" formControlName=\"page_description\" id=\"page_description\" name=\"page_description\" placeholder=\"{{'categorys.create.placeholders.placeholder8' | translate}}\"></textarea>\r\n                                      <div *ngIf=\"isFormSubmitted && categoryControl.page_description.errors\" class=\"invalid-feedback\">\r\n                                          <div *ngIf=\"categoryControl.page_description.errors.required\">{{'categorys.create.error_messages.message2' | translate}}</div>\r\n                                      </div>\r\n                                  </div>\r\n                              </div>\r\n                              <div class=\"col-md-12\">\r\n                                  <div [ngClass]=\"{ 'is-invalid': isFormSubmitted && categoryControl.url_and_handle.errors }\" class=\"form-group\">\r\n                                      <label for=\"url_and_handle\">{{'categorys.create.fields.url_and_handle' | translate}}&nbsp;<span class=\"text-danger\">*</span>\r\n                                      </label>\r\n                                      <input [ngClass]=\"{ 'is-invalid': isFormSubmitted && categoryControl.url_and_handle.errors }\" class=\"form-control\" formControlName=\"url_and_handle\" id=\"url_and_handle\" placeholder=\"{{'categorys.create.placeholders.placeholder9' | translate }}\" type=\"text\"/>\r\n                                      <div *ngIf=\"isFormSubmitted && categoryControl.url_and_handle.errors\" class=\"invalid-feedback\">\r\n                                          <div *ngIf=\"categoryControl.url_and_handle.errors.required\">{{'categorys.create.error_messages.message3' | translate}}</div>\r\n                                      </div>\r\n                                  </div>\r\n                              </div>\r\n                          </div>\r\n                      </div>\r\n                  </div>\r\n              </div>\r\n          </div>\r\n      </div>\r\n      <div class=\"col-md-4\">\r\n          <div class=\"card\">\r\n              <div class=\"card-body\">\r\n                  <div class=\"px-3\">\r\n                      <div class=\"form-body\">\r\n                          <div class=\"row\">\r\n                              <div class=\"col-md-12\">\r\n                                  <div [ngClass]=\"{ 'is-invalid': isFormSubmitted && categoryControl.active.errors }\" class=\"form-group mg-t-1rem\">\r\n                                      <label for=\"active\">{{'categorys.create.fields.status' | translate}}&nbsp;<span class=\"text-danger\">*</span>\r\n                                      </label>\r\n                                      <ng-select [items]=\"liststatus\" [searchable]=\"false\" [selectOnTab]=\"true\" bindValue=\"value\" formControlName=\"active\" labelForId=\"active\" placeholder=\"{{'categorys.create.placeholders.placeholder4' | translate}}\"></ng-select>\r\n<!--                                            <input [ngClass]=\"{ 'is-invalid': isFormSubmitted && categoryControl.status.errors }\" class=\"form-control\" formControlName=\"status\" id=\"status\" placeholder=\"{{'categorys.create.placeholders.placeholder2' | translate }}\" type=\"text\"/>-->\r\n                                      <div *ngIf=\"isFormSubmitted && categoryControl.active.errors\" class=\"invalid-feedback\">\r\n                                          <div *ngIf=\"categoryControl.active.errors.required\">{{'categorys.create.error_messages.message4' | translate}}</div>\r\n\r\n                                      </div>\r\n                                  </div>\r\n                              </div>\r\n                          </div>\r\n                      </div>\r\n                  </div>\r\n              </div>\r\n          </div>\r\n          <div class=\"card\">\r\n              <div class=\"card-body\">\r\n                  <div class=\"px-3\">\r\n                      <div class=\"form-body\">\r\n                          <div class=\"row\">\r\n                              <div class=\"col-md-12\">\r\n                                  <div [ngClass]=\"{ 'is-invalid': isFormSubmitted && categoryControl.keyword.errors }\" class=\"form-group mg-t-1rem\">\r\n                                      <label for=\"keyword\">{{'categorys.create.fields.keyword' | translate}}\r\n                                      </label>\r\n                                      <input [ngClass]=\"{ 'is-invalid': isFormSubmitted && categoryControl.keyword.errors }\" class=\"form-control\" formControlName=\"keyword\" id=\"keyword\" placeholder=\"{{'categorys.create.placeholders.placeholder5' | translate }}\" type=\"text\"/>\r\n                                      <div *ngIf=\"isFormSubmitted && categoryControl.keyword.errors\" class=\"invalid-feedback\">\r\n                                          <div *ngIf=\"categoryControl.keyword.errors.required\">{{'categorys.create.error_messages.message2' | translate}}</div>\r\n                                      </div>\r\n                                  </div>\r\n                              </div>\r\n                          </div>\r\n                      </div>\r\n                  </div>\r\n              </div>\r\n          </div>\r\n          <div class=\"card\" *ngIf=\"moduletype == 'products'\">\r\n              <div class=\"card-body\">\r\n                  <div class=\"px-3\">\r\n                      <div class=\"form-body\">\r\n                          <div class=\"row\">\r\n                              <div class=\"col-md-12\">\r\n                                  <div [ngClass]=\"{ 'is-invalid': isFormSubmitted && categoryControl.specifications.errors }\" class=\"form-group mg-t-1rem\">\r\n                                      <label for=\"specifications\">{{'categorys.create.fields.specifications' | translate}}&nbsp;<span class=\"text-danger\">*</span>\r\n                                      </label>\r\n                                      <ng-select [items]=\"specifications\" [multiple]=\"true\" [searchable]=\"true\" bindLabel=\"indentify\" bindValue=\"id\" formControlName=\"specifications\" placeholder=\"{{'categorys.create.placeholders.placeholder2' | translate}}\">\r\n                                          <ng-template let-item=\"item\" ng-option-tmp>\r\n                                              {{item.indentify}}\r\n                                          </ng-template>\r\n                                      </ng-select>\r\n                                      <div *ngIf=\"isFormSubmitted && categoryControl.specifications.errors\" class=\"invalid-feedback\">\r\n                                          <div *ngIf=\"categoryControl.specifications.errors.required\">{{'categorys.create.error_messages.message2' | translate}}</div>\r\n                                      </div>\r\n                                  </div>\r\n                              </div>\r\n                          </div>\r\n                      </div>\r\n                  </div>\r\n              </div>\r\n          </div>\r\n          <div class=\"card\">\r\n              <div class=\"card-body\">\r\n                  <div class=\"px-3\">\r\n                      <div class=\"form-body\">\r\n                          <div class=\"row\">\r\n                              <div class=\"col-md-12\">\r\n                                  <div [ngClass]=\"{ 'is-invalid': isFormSubmitted && categoryControl.avatar.errors }\" class=\"form-group mg-t-1rem\">\r\n                                      <label for=\"avatar\">{{'categorys.create.fields.avatar' | translate}}&nbsp;<span class=\"text-danger\">*</span>\r\n                                      </label>\r\n                                      <input formControlName=\"avatar\" type=\"hidden\">\r\n                                      <div #logodropzone class=\"dropzone dz-clickable\">\r\n                                          <div class=\"dz-default dz-message\">\r\n                                              <span><strong>{{'categorys.create.placeholders.placeholder10' | translate }}</strong></span>\r\n                                          </div>\r\n                                      </div>\r\n                                  </div>\r\n                              </div>\r\n                          </div>\r\n                      </div>\r\n                  </div>\r\n              </div>\r\n          </div>\r\n          <div class=\"card\">\r\n              <div class=\"card-body\">\r\n                  <div class=\"px-3\">\r\n                      <div class=\"form-body\">\r\n                          <div class=\"row\">\r\n                              <div class=\"col-md-12\">\r\n                                  <div [ngClass]=\"{ 'is-invalid': isFormSubmitted && categoryControl.pages_id.errors }\" class=\"form-group mg-t-1rem\">\r\n                                      <label for=\"pages_id\">{{'categorys.create.fields.template' | translate}}&nbsp;<span class=\"text-danger\">*</span>\r\n                                      </label>\r\n                                      <ng-select [items]=\"listTemplate\" [searchable]=\"true\" [selectOnTab]=\"true\" bindLabel=\"name\" bindValue=\"id\" formControlName=\"pages_id\" labelForId=\"pages_id\" placeholder=\"{{'categorys.create.placeholders.placeholder6' | translate}}\"></ng-select>\r\n                                      <!--                                            <input [ngClass]=\"{ 'is-invalid': isFormSubmitted && categoryControl.template.errors }\" class=\"form-control\" formControlName=\"template\" id=\"template\" placeholder=\"{{'categorys.create.placeholders.placeholder6' | translate }}\" type=\"text\"/>-->\r\n                                      <div *ngIf=\"isFormSubmitted && categoryControl.pages_id.errors\" class=\"invalid-feedback\">\r\n                                          <div *ngIf=\"categoryControl.pages_id.errors.required\">{{'categorys.create.error_messages.message2' | translate}}</div>\r\n                                      </div>\r\n                                  </div>\r\n                              </div>\r\n                          </div>\r\n                      </div>\r\n                  </div>\r\n              </div>\r\n          </div>\r\n      </div>\r\n      <div class=\"col-md-12\">\r\n          <div class=\"card\">\r\n              <div class=\"card-body\">\r\n                  <div class=\"px-3\">\r\n                      <div class=\"form-body\">\r\n                          <div class=\"row mb-3\">\r\n                              <div class=\"col-md-12 text-right pt-3\">\r\n                                  <a [routerLink]=\"urlPage\" class=\"btn btn-cancel mb-0\">{{'common.cancel' | translate }}</a>\r\n                                  <button class=\"btn btn-submit mb-0\" type=\"submit\">{{'common.create' | translate }}</button>\r\n                              </div>\r\n                          </div>\r\n                      </div>\r\n                  </div>\r\n              </div>\r\n          </div>\r\n      </div>\r\n  </div>\r\n</form>");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/modules/posts/categorys/pages/category-lists/category-lists.component.html":
/*!**********************************************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/modules/posts/categorys/pages/category-lists/category-lists.component.html ***!
  \**********************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<section class=\"hide_empty_message\">\r\n    <div class=\"row\">\r\n        <div class=\"col-sm-12\">\r\n            <div class=\"card pl-2 pr-2\">\r\n                <div class=\"card-header pl-0 pr-0 border-bottom\">\r\n                    <h4 class=\"main-title mt-2\"><span>{{'categorys.title' | translate}}</span></h4>\r\n                    <div *ngxPermissionsOnly=\"['admin', 'super_admin', 'categorys_create']\" class=\"card-buttons\">\r\n                        <a [routerLink]=\"getUrl('create', '')\" class=\"btn btn-create mb-0\" tooltip=\"{{'common.create' | translate}}\"><i class=\"fa fa-plus\"></i></a>\r\n<!--                    [routerLink]=\"['/postscategory/create']\"-->\r\n                    </div>\r\n                </div>\r\n                <div class=\"card-content pt-3 pb-3\">\r\n                    <div class=\"card-body\">\r\n                        <div class=\"row\">\r\n                            <div class=\"col-sm-12\">\r\n                                <div class=\"table-responsive-xs table-responsive-sm table-responsive-md table-responsive-lg table-responsive-xl\">\r\n                                    <table [dtOptions]=\"dtOptions\" [dtTrigger]=\"dtTrigger\" class=\"table table-bordered table-hover b4-datatable\" datatable id=\"category_table\" width=\"100%\">\r\n                                        <thead>\r\n                                        <tr>\r\n                                            <th>{{'categorys.columns.name' | translate}}</th>\r\n                                            <th>{{'categorys.columns.description' | translate}}</th>\r\n                                            <th>{{'categorys.columns.parent' | translate}}</th>\r\n                                            <th>{{'common.actions' | translate}}</th>\r\n                                        </tr>\r\n                                        </thead>\r\n                                        <tbody>\r\n                                        <tr *ngFor=\"let category of categorys; index as i\">\r\n                                            <td>\r\n                                                <a class=\"\" href=\"{{apiUrl}}/{{category.url}}{{category.prefix}}{{category.alias}}\" placement=\"top\" target=\"_blank\" tooltip=\"{{'common.view' | translate}}\">{{category.name}}</a>\r\n                                            </td>\r\n                                            <td>{{category.description}}</td>\r\n                                            <td>{{category.parent}}</td>\r\n                                            <td class=\"actions-dropdown\">\r\n                                                <div class=\"btn-group\" dropdown>\r\n                                                    <button aria-controls=\"dropdown-basic-1\" class=\"dropdown-toggle btn-action\" dropdownToggle id=\"button-basic-1\" type=\"button\">\r\n                                                        <i class=\"fa fa-ellipsis-v\"></i></button>\r\n                                                    <ul *dropdownMenu aria-labelledby=\"button-basic-1\" class=\"dropdown-menu animated fadeIn\" id=\"dropdown-basic-1\" role=\"menu\">\r\n                                                        <li role=\"menuitem\">\r\n                                                            <a *ngxPermissionsOnly=\"['admin', 'super_admin', 'categorys_edit']\" [routerLink]=\"getUrl('edit', category.id)\" class=\"dropdown-item btn btn-edit btn-raised\"><i class=\"fa fa-pencil-square-o\" tooltip=\"{{'common.edit' | translate}}\"></i></a>\r\n                                                        </li>\r\n                                                        <li role=\"menuitem\">\r\n                                                            <a (click)=\"deleteCategory(category.id)\" *ngxPermissionsOnly=\"['admin', 'super_admin', 'categorys_delete']\" class=\"dropdown-item btn btn-delete btn-raised\"><i class=\"fa fa-trash-o\" tooltip=\"{{'common.delete' | translate}}\"></i></a>\r\n                                                        </li>\r\n                                                    </ul>\r\n                                                </div>\r\n                                            </td>\r\n                                        </tr>\r\n                                        </tbody>\r\n                                        <tfoot *ngIf=\"categorys?.length == 0\" class=\"tfoot_dt\">\r\n                                        <tr>\r\n                                            <td class=\"no-data-available text-center\" colspan=\"4\">{{'common.datatable.sEmptyTable' | translate}}</td>\r\n                                        </tr>\r\n                                        </tfoot>\r\n                                    </table>\r\n                                </div>\r\n                            </div>\r\n                        </div>\r\n                    </div>\r\n                </div>\r\n            </div>\r\n        </div>\r\n    </div>\r\n</section>\r\n");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/modules/posts/categorys/pages/category-translate/category-translate.component.html":
/*!******************************************************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/modules/posts/categorys/pages/category-translate/category-translate.component.html ***!
  \******************************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<section id=\"basic-form-layouts\">\r\n  <tabset>\r\n      <tab [heading]=\"item.title\" *ngFor=\"let item of dataTabs;let i = index;\">\r\n          <category-item-translate [tabValue]=\"item\"></category-item-translate>\r\n      </tab>\r\n  </tabset>\r\n</section>");

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

/***/ "./src/app/modules/posts/categorys/categorys-routing.module.ts":
/*!*********************************************************************!*\
  !*** ./src/app/modules/posts/categorys/categorys-routing.module.ts ***!
  \*********************************************************************/
/*! exports provided: CategorysRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CategorysRoutingModule", function() { return CategorysRoutingModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var ngx_permissions__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ngx-permissions */ "./node_modules/ngx-permissions/ngx-permissions.umd.js");
/* harmony import */ var ngx_permissions__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(ngx_permissions__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _pages_category_lists_category_lists_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./pages/category-lists/category-lists.component */ "./src/app/modules/posts/categorys/pages/category-lists/category-lists.component.ts");
/* harmony import */ var _pages_category_create_category_create_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./pages/category-create/category-create.component */ "./src/app/modules/posts/categorys/pages/category-create/category-create.component.ts");
/* harmony import */ var _pages_category_edit_category_edit_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./pages/category-edit/category-edit.component */ "./src/app/modules/posts/categorys/pages/category-edit/category-edit.component.ts");







// import {CategoryViewComponent} from './pages/category-view/category-view.component';
var routes = [{
        path: '',
        children: [
            {
                path: '',
                canActivate: [ngx_permissions__WEBPACK_IMPORTED_MODULE_3__["NgxPermissionsGuard"]],
                component: _pages_category_lists_category_lists_component__WEBPACK_IMPORTED_MODULE_4__["CategoryListsComponent"]
            },
            {
                path: 'create',
                canActivate: [ngx_permissions__WEBPACK_IMPORTED_MODULE_3__["NgxPermissionsGuard"]],
                data: {
                    breadcrumbs: {
                        text: 'common.create',
                        icon: 'fa fa-external-link',
                        show: true,
                        isHome: true
                    },
                    permissions: {
                        only: ['admin', 'super_admin', 'categorys_create']
                    }
                },
                component: _pages_category_create_category_create_component__WEBPACK_IMPORTED_MODULE_5__["CategoryCreateComponent"]
            },
            {
                path: 'edit/:id',
                canActivate: [ngx_permissions__WEBPACK_IMPORTED_MODULE_3__["NgxPermissionsGuard"]],
                data: {
                    breadcrumbs: {
                        text: 'common.edit',
                        icon: 'fa fa-external-link',
                        show: true,
                        isHome: true
                    },
                    permissions: {
                        only: ['admin', 'super_admin', 'categorys_edit']
                    }
                },
                component: _pages_category_edit_category_edit_component__WEBPACK_IMPORTED_MODULE_6__["CategoryEditComponent"]
            },
        ]
    }
];
var CategorysRoutingModule = /** @class */ (function () {
    function CategorysRoutingModule() {
    }
    CategorysRoutingModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)],
            exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]]
        })
    ], CategorysRoutingModule);
    return CategorysRoutingModule;
}());



/***/ }),

/***/ "./src/app/modules/posts/categorys/categorys.module.ts":
/*!*************************************************************!*\
  !*** ./src/app/modules/posts/categorys/categorys.module.ts ***!
  \*************************************************************/
/*! exports provided: CategorysModule, HttpLoaderFactory */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CategorysModule", function() { return CategorysModule; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "HttpLoaderFactory", function() { return HttpLoaderFactory; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");
/* harmony import */ var ngx_bootstrap__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ngx-bootstrap */ "./node_modules/ngx-bootstrap/esm5/ngx-bootstrap.js");
/* harmony import */ var ngx_export_as__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ngx-export-as */ "./node_modules/ngx-export-as/fesm2015/ngx-export-as.js");
/* harmony import */ var ngx_editor__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ngx-editor */ "./node_modules/ngx-editor/fesm5/ngx-editor.js");
/* harmony import */ var ngx_permissions__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ngx-permissions */ "./node_modules/ngx-permissions/ngx-permissions.umd.js");
/* harmony import */ var ngx_permissions__WEBPACK_IMPORTED_MODULE_8___default = /*#__PURE__*/__webpack_require__.n(ngx_permissions__WEBPACK_IMPORTED_MODULE_8__);
/* harmony import */ var _ng_select_ng_select__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @ng-select/ng-select */ "./node_modules/@ng-select/ng-select/fesm5/ng-select.js");
/* harmony import */ var _ngx_translate_core__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @ngx-translate/core */ "./node_modules/@ngx-translate/core/fesm5/ngx-translate-core.js");
/* harmony import */ var _ngx_translate_http_loader__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! @ngx-translate/http-loader */ "./node_modules/@ngx-translate/http-loader/fesm5/ngx-translate-http-loader.js");
/* harmony import */ var angular_datatables__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! angular-datatables */ "./node_modules/angular-datatables/index.js");
/* harmony import */ var _categorys_routing_module__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ./categorys-routing.module */ "./src/app/modules/posts/categorys/categorys-routing.module.ts");
/* harmony import */ var _shared_shared_module__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ../../../shared/shared.module */ "./src/app/shared/shared.module.ts");
/* harmony import */ var _pages_category_lists_category_lists_component__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! ./pages/category-lists/category-lists.component */ "./src/app/modules/posts/categorys/pages/category-lists/category-lists.component.ts");
/* harmony import */ var _pages_category_create_category_create_component__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! ./pages/category-create/category-create.component */ "./src/app/modules/posts/categorys/pages/category-create/category-create.component.ts");
/* harmony import */ var _pages_category_edit_category_edit_component__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! ./pages/category-edit/category-edit.component */ "./src/app/modules/posts/categorys/pages/category-edit/category-edit.component.ts");
/* harmony import */ var _pages_category_translate_category_translate_component__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! ./pages/category-translate/category-translate.component */ "./src/app/modules/posts/categorys/pages/category-translate/category-translate.component.ts");
/* harmony import */ var _pages_category_item_translate_category_item_translate_component__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(/*! ./pages/category-item-translate/category-item-translate.component */ "./src/app/modules/posts/categorys/pages/category-item-translate/category-item-translate.component.ts");




















// import {CategoryViewComponent} from './pages/category-view/category-view.component';
var CategorysModule = /** @class */ (function () {
    function CategorysModule() {
    }
    CategorysModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            declarations: [
                _pages_category_lists_category_lists_component__WEBPACK_IMPORTED_MODULE_15__["CategoryListsComponent"],
                _pages_category_create_category_create_component__WEBPACK_IMPORTED_MODULE_16__["CategoryCreateComponent"],
                _pages_category_edit_category_edit_component__WEBPACK_IMPORTED_MODULE_17__["CategoryEditComponent"],
                _pages_category_translate_category_translate_component__WEBPACK_IMPORTED_MODULE_18__["CategoryTranslateComponent"],
                _pages_category_item_translate_category_item_translate_component__WEBPACK_IMPORTED_MODULE_19__["CategoryItemTranslateComponent"],
            ],
            imports: [
                _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
                _categorys_routing_module__WEBPACK_IMPORTED_MODULE_13__["CategorysRoutingModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_3__["ReactiveFormsModule"],
                ngx_permissions__WEBPACK_IMPORTED_MODULE_8__["NgxPermissionsModule"],
                angular_datatables__WEBPACK_IMPORTED_MODULE_12__["DataTablesModule"],
                ngx_export_as__WEBPACK_IMPORTED_MODULE_6__["ExportAsModule"],
                ngx_editor__WEBPACK_IMPORTED_MODULE_7__["NgxEditorModule"],
                _ng_select_ng_select__WEBPACK_IMPORTED_MODULE_9__["NgSelectModule"],
                ngx_bootstrap__WEBPACK_IMPORTED_MODULE_5__["ModalModule"].forRoot(),
                ngx_bootstrap__WEBPACK_IMPORTED_MODULE_5__["DatepickerModule"].forRoot(),
                ngx_bootstrap__WEBPACK_IMPORTED_MODULE_5__["BsDatepickerModule"].forRoot(),
                ngx_bootstrap__WEBPACK_IMPORTED_MODULE_5__["TooltipModule"].forRoot(),
                ngx_bootstrap__WEBPACK_IMPORTED_MODULE_5__["BsDropdownModule"].forRoot(),
                _ngx_translate_core__WEBPACK_IMPORTED_MODULE_10__["TranslateModule"].forChild({
                    loader: {
                        provide: _ngx_translate_core__WEBPACK_IMPORTED_MODULE_10__["TranslateLoader"],
                        useFactory: (HttpLoaderFactory),
                        deps: [_angular_common_http__WEBPACK_IMPORTED_MODULE_4__["HttpClient"]]
                    }
                }),
                _shared_shared_module__WEBPACK_IMPORTED_MODULE_14__["SharedModule"],
                ngx_bootstrap__WEBPACK_IMPORTED_MODULE_5__["CollapseModule"],
                ngx_bootstrap__WEBPACK_IMPORTED_MODULE_5__["TabsModule"].forRoot()
            ],
        })
    ], CategorysModule);
    return CategorysModule;
}());

// Required for AOT compilation
function HttpLoaderFactory(http) {
    return new _ngx_translate_http_loader__WEBPACK_IMPORTED_MODULE_11__["TranslateHttpLoader"](http, './assets/i18n/', '.json');
}


/***/ }),

/***/ "./src/app/modules/posts/categorys/pages/category-create/category-create.component.scss":
/*!**********************************************************************************************!*\
  !*** ./src/app/modules/posts/categorys/pages/category-create/category-create.component.scss ***!
  \**********************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = (".mg-t-1rem {\n  margin-top: 1rem;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvbW9kdWxlcy9wb3N0cy9jYXRlZ29yeXMvcGFnZXMvY2F0ZWdvcnktY3JlYXRlL0M6XFxVc2Vyc1xcdGh1YW5cXE9uZURyaXZlXFxEZXNrdG9wXFxnbGF2YWwtdGh1YW5kaW5oL3NyY1xcYXBwXFxtb2R1bGVzXFxwb3N0c1xcY2F0ZWdvcnlzXFxwYWdlc1xcY2F0ZWdvcnktY3JlYXRlXFxjYXRlZ29yeS1jcmVhdGUuY29tcG9uZW50LnNjc3MiLCJzcmMvYXBwL21vZHVsZXMvcG9zdHMvY2F0ZWdvcnlzL3BhZ2VzL2NhdGVnb3J5LWNyZWF0ZS9jYXRlZ29yeS1jcmVhdGUuY29tcG9uZW50LnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDSSxnQkFBQTtBQ0NKIiwiZmlsZSI6InNyYy9hcHAvbW9kdWxlcy9wb3N0cy9jYXRlZ29yeXMvcGFnZXMvY2F0ZWdvcnktY3JlYXRlL2NhdGVnb3J5LWNyZWF0ZS5jb21wb25lbnQuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIi5tZy10LTFyZW0ge1xyXG4gICAgbWFyZ2luLXRvcDogMXJlbTtcclxufVxyXG4iLCIubWctdC0xcmVtIHtcbiAgbWFyZ2luLXRvcDogMXJlbTtcbn0iXX0= */");

/***/ }),

/***/ "./src/app/modules/posts/categorys/pages/category-create/category-create.component.ts":
/*!********************************************************************************************!*\
  !*** ./src/app/modules/posts/categorys/pages/category-create/category-create.component.ts ***!
  \********************************************************************************************/
/*! exports provided: CategoryCreateComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CategoryCreateComponent", function() { return CategoryCreateComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var ngx_toastr__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ngx-toastr */ "./node_modules/ngx-toastr/fesm5/ngx-toastr.js");
/* harmony import */ var _ngx_translate_core__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @ngx-translate/core */ "./node_modules/@ngx-translate/core/fesm5/ngx-translate-core.js");
/* harmony import */ var _core_services_categorys_service__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../../../../../core/services/categorys.service */ "./src/app/core/services/categorys.service.ts");
/* harmony import */ var _core_services_options_service__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../../../../../core/services/options.service */ "./src/app/core/services/options.service.ts");
/* harmony import */ var _core_services_client_service__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../../../../../core/services/client.service */ "./src/app/core/services/client.service.ts");
/* harmony import */ var _core_services_tax_service__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ../../../../../core/services/tax.service */ "./src/app/core/services/tax.service.ts");
/* harmony import */ var _core_services_authentication_service__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ../../../../../core/services/authentication.service */ "./src/app/core/services/authentication.service.ts");
/* harmony import */ var src_app_core_services_seo_service__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! src/app/core/services/seo.service */ "./src/app/core/services/seo.service.ts");
/* harmony import */ var dropzone__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! dropzone */ "./node_modules/dropzone/dist/dropzone.js");
/* harmony import */ var dropzone__WEBPACK_IMPORTED_MODULE_13___default = /*#__PURE__*/__webpack_require__.n(dropzone__WEBPACK_IMPORTED_MODULE_13__);







// import {CategorySettingService} from '../../../../../core/services/category-setting.service';







var CategoryCreateComponent = /** @class */ (function () {
    function CategoryCreateComponent(translate, datepipe, router, formBuilder, toastr, categorysService, optionsService, seoService, clientService, taxService, 
    // private categorySettingService: CategorySettingService,
    authenticationService) {
        var _this_1 = this;
        this.translate = translate;
        this.datepipe = datepipe;
        this.router = router;
        this.formBuilder = formBuilder;
        this.toastr = toastr;
        this.categorysService = categorysService;
        this.optionsService = optionsService;
        this.seoService = seoService;
        this.clientService = clientService;
        this.taxService = taxService;
        this.authenticationService = authenticationService;
        this.liststatus = [
            { value: 'yes', label: 'Show' },
            { value: 'no', label: 'Hide' },
        ];
        this.listcategorys = [];
        this.listTemplate = [];
        this.isFormSubmitted = false;
        this.isFormLoaded = false;
        this.datepickerConfig = {
            dateInputFormat: 'YYYY-MM-DD',
            containerClass: 'theme-red'
        };
        this.isCollapsedHead1 = false;
        this.isCollapsedHead2 = false;
        this.authenticationService.loginUser.subscribe(function (x) { return _this_1.loginUser = x; });
    }
    Object.defineProperty(CategoryCreateComponent.prototype, "categoryControl", {
        get: function () {
            return this.createCategoryForm.controls;
        },
        enumerable: true,
        configurable: true
    });
    CategoryCreateComponent.prototype.ngOnInit = function () {
        if (this.router.url === '/postscategory/create') {
            this.moduletype = 'news';
            this.urlPage = '/postscategory';
        }
        else {
            this.moduletype = 'products';
            this.urlPage = '/productscategory';
        }
        this.getTemplate();
        this.getSpecifications();
        this.getAllMeta();
        this.getCategorys();
    };
    CategoryCreateComponent.prototype.loadForm = function () {
        var that = this;
        this.createCategoryForm = this.formBuilder.group({
            name: [null, _angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].required],
            avatar: [null, _angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].required],
            description: [null],
            parent_id: [null],
            page_title: [null],
            page_description: [null],
            url_and_handle: [null, _angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].required],
            active: [null, _angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].required],
            keyword: [null],
            po_types_indentify: [this.moduletype],
            specifications: [null],
            seoData: this.formBuilder.array([]),
            seo: [null],
            pages_id: [null, _angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].required],
        });
        setTimeout(function () {
            that.loadDropzone();
        });
        this.isFormLoaded = true;
    };
    CategoryCreateComponent.prototype.getSeoData = function (data) {
        return this.formBuilder.group({
            meta: [data.label, _angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].required],
            meta_id: [data.id, _angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].required],
            content: [null]
        });
    };
    CategoryCreateComponent.prototype.addSeoData = function (data) {
        var control = this.createCategoryForm.controls['seoData'];
        control.push(this.getSeoData(data));
    };
    CategoryCreateComponent.prototype.onAddMetaTag = function (even) {
        var control = this.createCategoryForm.controls['seoData'];
        control.push(this.getSeoData(even));
    };
    CategoryCreateComponent.prototype.onRemoveMetaTag = function (even) {
        this.createCategoryForm.get('seoData').removeAt(even.index);
    };
    CategoryCreateComponent.prototype.getCategorys = function () {
        var _this_1 = this;
        this.categorysService.getAll().subscribe(function (data) {
            if (Array.isArray(data)) {
                _this_1.listcategorys = data.filter(function (res) { return (res.id == null || res['po_types_indentify'] == _this_1.moduletype); });
            }
            // this.listcategorys = data;
            _this_1.loadForm();
        });
    };
    CategoryCreateComponent.prototype.getAllMeta = function () {
        var _this_1 = this;
        this.seoService.getAllMeta()
            .subscribe(function (data) {
            _this_1.seoData = data;
        });
    };
    CategoryCreateComponent.prototype.getSpecifications = function () {
        var _this_1 = this;
        this.optionsService.getAll('specifications').subscribe(function (data) {
            _this_1.specifications = data;
        });
    };
    CategoryCreateComponent.prototype.getTemplate = function () {
        var _this_1 = this;
        this.categorysService.getTemplate().subscribe(function (data) {
            _this_1.listTemplate = data;
        });
    };
    CategoryCreateComponent.prototype.onSubmit = function () {
        var _this_1 = this;
        this.isFormSubmitted = true;
        if (this.createCategoryForm.invalid) {
            return;
        }
        this.categorysService.create(this.createCategoryForm.value)
            .subscribe(function (data) {
            _this_1.toastr.success(_this_1.translate.instant('categorys.messages.create'), _this_1.translate.instant('categorys.title'));
            if (_this_1.moduletype === 'news') {
                _this_1.router.navigate(['postscategory']);
            }
            else {
                _this_1.router.navigate(['productscategory']);
            }
        });
    };
    CategoryCreateComponent.prototype.loadDropzone = function () {
        var that = this;
        new dropzone__WEBPACK_IMPORTED_MODULE_13__(this.logodropzone.nativeElement, {
            url: 'https://httpbin.org/post',
            maxFiles: 1,
            clickable: true,
            acceptedFiles: 'image/*',
            createImageThumbnails: true,
            init: function () {
                this.on('addedfile', function (file) {
                    var removeButton = dropzone__WEBPACK_IMPORTED_MODULE_13__["createElement"]('<button class=\'btn btn-sm btn-block\'>' + that.translate.instant('common.remove_file') + '</button>');
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
                            that.createCategoryForm.patchValue({ avatar: reader_1.result });
                        };
                        reader_1.readAsDataURL(file);
                    }
                });
                this.on('removedfile', function (file) {
                    that.createCategoryForm.patchValue({ avatar: null });
                });
                this.on('error', function (file, message) {
                    if (file) {
                        that.toastr.error(message);
                    }
                });
            }
        });
    };
    CategoryCreateComponent.ctorParameters = function () { return [
        { type: _ngx_translate_core__WEBPACK_IMPORTED_MODULE_6__["TranslateService"] },
        { type: _angular_common__WEBPACK_IMPORTED_MODULE_2__["DatePipe"] },
        { type: _angular_router__WEBPACK_IMPORTED_MODULE_4__["Router"] },
        { type: _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormBuilder"] },
        { type: ngx_toastr__WEBPACK_IMPORTED_MODULE_5__["ToastrService"] },
        { type: _core_services_categorys_service__WEBPACK_IMPORTED_MODULE_7__["CategorysService"] },
        { type: _core_services_options_service__WEBPACK_IMPORTED_MODULE_8__["OptionsService"] },
        { type: src_app_core_services_seo_service__WEBPACK_IMPORTED_MODULE_12__["SeoService"] },
        { type: _core_services_client_service__WEBPACK_IMPORTED_MODULE_9__["ClientService"] },
        { type: _core_services_tax_service__WEBPACK_IMPORTED_MODULE_10__["TaxService"] },
        { type: _core_services_authentication_service__WEBPACK_IMPORTED_MODULE_11__["AuthenticationService"] }
    ]; };
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewChild"])('logodropzone', { static: false }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", _angular_core__WEBPACK_IMPORTED_MODULE_1__["ElementRef"])
    ], CategoryCreateComponent.prototype, "logodropzone", void 0);
    CategoryCreateComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-category-create',
            template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./category-create.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/modules/posts/categorys/pages/category-create/category-create.component.html")).default,
            providers: [_angular_common__WEBPACK_IMPORTED_MODULE_2__["DatePipe"]],
            styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./category-create.component.scss */ "./src/app/modules/posts/categorys/pages/category-create/category-create.component.scss")).default]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_ngx_translate_core__WEBPACK_IMPORTED_MODULE_6__["TranslateService"],
            _angular_common__WEBPACK_IMPORTED_MODULE_2__["DatePipe"],
            _angular_router__WEBPACK_IMPORTED_MODULE_4__["Router"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormBuilder"],
            ngx_toastr__WEBPACK_IMPORTED_MODULE_5__["ToastrService"],
            _core_services_categorys_service__WEBPACK_IMPORTED_MODULE_7__["CategorysService"],
            _core_services_options_service__WEBPACK_IMPORTED_MODULE_8__["OptionsService"],
            src_app_core_services_seo_service__WEBPACK_IMPORTED_MODULE_12__["SeoService"],
            _core_services_client_service__WEBPACK_IMPORTED_MODULE_9__["ClientService"],
            _core_services_tax_service__WEBPACK_IMPORTED_MODULE_10__["TaxService"],
            _core_services_authentication_service__WEBPACK_IMPORTED_MODULE_11__["AuthenticationService"]])
    ], CategoryCreateComponent);
    return CategoryCreateComponent;
}());



/***/ }),

/***/ "./src/app/modules/posts/categorys/pages/category-edit/category-edit.component.scss":
/*!******************************************************************************************!*\
  !*** ./src/app/modules/posts/categorys/pages/category-edit/category-edit.component.scss ***!
  \******************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = (".ng-select.ng-select-single .ng-select-container {\n  min-width: 500px;\n}\n\n.inp {\n  border: none;\n  border-bottom: 1px solid #e8eef3;\n  padding: 5px 10px;\n  outline: none;\n  width: 100%;\n}\n\n[placeholder]:focus::-webkit-input-placeholder {\n  transition: text-indent 0.4s 0.4s ease;\n  text-indent: -100%;\n  opacity: 1;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvbW9kdWxlcy9wb3N0cy9jYXRlZ29yeXMvcGFnZXMvY2F0ZWdvcnktZWRpdC9DOlxcVXNlcnNcXHRodWFuXFxPbmVEcml2ZVxcRGVza3RvcFxcZ2xhdmFsLXRodWFuZGluaC9zcmNcXGFwcFxcbW9kdWxlc1xccG9zdHNcXGNhdGVnb3J5c1xccGFnZXNcXGNhdGVnb3J5LWVkaXRcXGNhdGVnb3J5LWVkaXQuY29tcG9uZW50LnNjc3MiLCJzcmMvYXBwL21vZHVsZXMvcG9zdHMvY2F0ZWdvcnlzL3BhZ2VzL2NhdGVnb3J5LWVkaXQvY2F0ZWdvcnktZWRpdC5jb21wb25lbnQuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUVJLGdCQUFBO0FDQUo7O0FER0E7RUFDSSxZQUFBO0VBQ0EsZ0NBQUE7RUFDQSxpQkFBQTtFQUNBLGFBQUE7RUFDQSxXQUFBO0FDQUo7O0FER0E7RUFDSSxzQ0FBQTtFQUNBLGtCQUFBO0VBQ0EsVUFBQTtBQ0FKIiwiZmlsZSI6InNyYy9hcHAvbW9kdWxlcy9wb3N0cy9jYXRlZ29yeXMvcGFnZXMvY2F0ZWdvcnktZWRpdC9jYXRlZ29yeS1lZGl0LmNvbXBvbmVudC5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLm5nLXNlbGVjdC5uZy1zZWxlY3Qtc2luZ2xlXHJcbi5uZy1zZWxlY3QtY29udGFpbmVyIHtcclxuICAgIG1pbi13aWR0aDogNTAwcHg7XHJcbn1cclxuXHJcbi5pbnAge1xyXG4gICAgYm9yZGVyOiBub25lO1xyXG4gICAgYm9yZGVyLWJvdHRvbTogMXB4IHNvbGlkICNlOGVlZjM7XHJcbiAgICBwYWRkaW5nOiA1cHggMTBweDtcclxuICAgIG91dGxpbmU6IG5vbmU7XHJcbiAgICB3aWR0aDogMTAwJTtcclxufVxyXG5cclxuW3BsYWNlaG9sZGVyXTpmb2N1czo6LXdlYmtpdC1pbnB1dC1wbGFjZWhvbGRlciB7XHJcbiAgICB0cmFuc2l0aW9uOiB0ZXh0LWluZGVudCAwLjRzIDAuNHMgZWFzZTtcclxuICAgIHRleHQtaW5kZW50OiAtMTAwJTtcclxuICAgIG9wYWNpdHk6IDE7XHJcbn1cclxuIiwiLm5nLXNlbGVjdC5uZy1zZWxlY3Qtc2luZ2xlIC5uZy1zZWxlY3QtY29udGFpbmVyIHtcbiAgbWluLXdpZHRoOiA1MDBweDtcbn1cblxuLmlucCB7XG4gIGJvcmRlcjogbm9uZTtcbiAgYm9yZGVyLWJvdHRvbTogMXB4IHNvbGlkICNlOGVlZjM7XG4gIHBhZGRpbmc6IDVweCAxMHB4O1xuICBvdXRsaW5lOiBub25lO1xuICB3aWR0aDogMTAwJTtcbn1cblxuW3BsYWNlaG9sZGVyXTpmb2N1czo6LXdlYmtpdC1pbnB1dC1wbGFjZWhvbGRlciB7XG4gIHRyYW5zaXRpb246IHRleHQtaW5kZW50IDAuNHMgMC40cyBlYXNlO1xuICB0ZXh0LWluZGVudDogLTEwMCU7XG4gIG9wYWNpdHk6IDE7XG59Il19 */");

/***/ }),

/***/ "./src/app/modules/posts/categorys/pages/category-edit/category-edit.component.ts":
/*!****************************************************************************************!*\
  !*** ./src/app/modules/posts/categorys/pages/category-edit/category-edit.component.ts ***!
  \****************************************************************************************/
/*! exports provided: CategoryEditComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CategoryEditComponent", function() { return CategoryEditComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var ngx_toastr__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ngx-toastr */ "./node_modules/ngx-toastr/fesm5/ngx-toastr.js");
/* harmony import */ var _ngx_translate_core__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @ngx-translate/core */ "./node_modules/@ngx-translate/core/fesm5/ngx-translate-core.js");
/* harmony import */ var _core_services_categorys_service__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../../../../../core/services/categorys.service */ "./src/app/core/services/categorys.service.ts");
/* harmony import */ var _core_services_item_service__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../../../../../core/services/item.service */ "./src/app/core/services/item.service.ts");
/* harmony import */ var _core_services_client_service__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../../../../../core/services/client.service */ "./src/app/core/services/client.service.ts");
/* harmony import */ var _core_services_tax_service__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ../../../../../core/services/tax.service */ "./src/app/core/services/tax.service.ts");
/* harmony import */ var _core_services_authentication_service__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ../../../../../core/services/authentication.service */ "./src/app/core/services/authentication.service.ts");
/* harmony import */ var _core_services_options_service__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ../../../../../core/services/options.service */ "./src/app/core/services/options.service.ts");
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ../../../../../../environments/environment */ "./src/environments/environment.ts");
/* harmony import */ var src_app_core_services_seo_service__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! src/app/core/services/seo.service */ "./src/app/core/services/seo.service.ts");
/* harmony import */ var dropzone__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! dropzone */ "./node_modules/dropzone/dist/dropzone.js");
/* harmony import */ var dropzone__WEBPACK_IMPORTED_MODULE_15___default = /*#__PURE__*/__webpack_require__.n(dropzone__WEBPACK_IMPORTED_MODULE_15__);
















var CategoryEditComponent = /** @class */ (function () {
    function CategoryEditComponent(translate, datepipe, router, route, formBuilder, toastr, categoryService, optionsService, clientService, itemService, seoService, taxService, authenticationService) {
        var _this_1 = this;
        this.translate = translate;
        this.datepipe = datepipe;
        this.router = router;
        this.route = route;
        this.formBuilder = formBuilder;
        this.toastr = toastr;
        this.categoryService = categoryService;
        this.optionsService = optionsService;
        this.clientService = clientService;
        this.itemService = itemService;
        this.seoService = seoService;
        this.taxService = taxService;
        this.authenticationService = authenticationService;
        this.isLogoLoaded = true;
        this.listcategorys = [];
        this.listTemplate = [];
        this.isFormSubmitted = false;
        this.isFormLoaded = false;
        this.liststatus = [
            { value: 'yes', label: 'Show' },
            { value: 'no', label: 'Hide' },
        ];
        this.datepickerConfig = {
            dateInputFormat: 'YYYY-MM-DD',
            containerClass: 'theme-red'
        };
        this.isCollapsedHead1 = false;
        this.isCollapsedHead2 = false;
        this.apiUrl = _environments_environment__WEBPACK_IMPORTED_MODULE_13__["environment"].apiUrl;
        this.authenticationService.loginUser.subscribe(function (x) { return _this_1.loginUser = x; });
        this.route.paramMap.subscribe(function (params) {
            _this_1.getById(params.get('id'));
        });
    }
    Object.defineProperty(CategoryEditComponent.prototype, "categoryControl", {
        get: function () {
            return this.editCategoryForm.controls;
        },
        enumerable: true,
        configurable: true
    });
    CategoryEditComponent.prototype.ngOnInit = function () {
        if (this.router.url.indexOf('/postscategory/edit') !== -1) {
            this.moduletype = 'news';
            this.urlPage = '/postscategory';
        }
        else {
            this.moduletype = 'products';
            this.urlPage = '/productscategory';
        }
    };
    CategoryEditComponent.prototype.loadForm = function () {
        var that = this;
        this.editCategoryForm = this.formBuilder.group({
            id: [this.category.id, _angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].required],
            name: [this.category.name, _angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].required],
            description: [this.category.description],
            parent_id: [this.category.parent_id],
            page_title: [this.category.page_title],
            page_description: [this.category.page_description],
            url_and_handle: [this.category.url_and_handle, _angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].required],
            active: [this.category.active, _angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].required],
            avatar: [this.category.avatar, _angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].required],
            keyword: [this.category.keyword],
            po_types_indentify: [this.moduletype],
            seoData: this.formBuilder.array([]),
            seo: [this.category.seo],
            specifications: [this.category.specifications],
            pages_id: [this.category.pages_id, _angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].required],
        });
        this.editCategoryForm.patchValue({ avatar: this.category.avatar });
        setTimeout(function () {
            that.loadDropzone();
        });
        for (var _i = 0, _a = this.category.seoData; _i < _a.length; _i++) {
            var seo = _a[_i];
            this.onAddMetaTag(seo);
        }
        this.isFormLoaded = true;
    };
    CategoryEditComponent.prototype.getAllMeta = function () {
        var _this_1 = this;
        this.seoService.getAllMeta()
            .subscribe(function (data) {
            _this_1.seoData = data;
            _this_1.loadForm();
        });
    };
    CategoryEditComponent.prototype.getSeoData = function (data) {
        !data.content ? data.content = null : '';
        return this.formBuilder.group({
            meta: [data.label, _angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].required],
            meta_id: [data.id, _angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].required],
            content: [data.content]
        });
    };
    CategoryEditComponent.prototype.addSeoData = function (data) {
        var control = this.editCategoryForm.controls['seoData'];
        control.push(this.getSeoData(data));
    };
    CategoryEditComponent.prototype.onAddMetaTag = function (even) {
        var control = this.editCategoryForm.controls['seoData'];
        control.push(this.getSeoData(even));
    };
    CategoryEditComponent.prototype.onRemoveMetaTag = function (even) {
        this.editCategoryForm.get('seoData').removeAt(even.index);
    };
    CategoryEditComponent.prototype.getById = function (categoryId) {
        var _this_1 = this;
        this.categoryService.getById(categoryId).subscribe(function (data) {
            _this_1.category = data;
            _this_1.getTemplate();
        });
    };
    CategoryEditComponent.prototype.getCategorys = function () {
        var _this_1 = this;
        this.categoryService.getAll().subscribe(function (data) {
            if (Array.isArray(data)) {
                _this_1.listcategorys = data.filter(function (res) { return (res.id == null || res['po_types_indentify'] == _this_1.moduletype); });
            }
            // this.listcategorys = data;
            _this_1.getAllMeta();
        });
    };
    CategoryEditComponent.prototype.getSpecifications = function () {
        var _this_1 = this;
        this.optionsService.getAll('specifications').subscribe(function (data) {
            _this_1.specifications = data;
            _this_1.getCategorys();
        });
    };
    CategoryEditComponent.prototype.getTemplate = function () {
        var _this_1 = this;
        this.categoryService.getTemplate().subscribe(function (data) {
            _this_1.listTemplate = data;
            _this_1.getSpecifications();
        });
    };
    CategoryEditComponent.prototype.onSubmit = function () {
        var _this_1 = this;
        this.isFormSubmitted = true;
        if (this.editCategoryForm.invalid) {
            return;
        }
        this.categoryService.update(this.editCategoryForm.value)
            .subscribe(function (data) {
            _this_1.toastr.success(_this_1.translate.instant('categorys.messages.update'), _this_1.translate.instant('categorys.title'));
            _this_1.router.navigate([_this_1.urlPage]);
        });
    };
    CategoryEditComponent.prototype.loadDropzone = function () {
        var that = this;
        this['fileDropZone'] = new dropzone__WEBPACK_IMPORTED_MODULE_15__(this.logodropzone.nativeElement, {
            url: 'https://httpbin.org/post',
            maxFiles: 1,
            clickable: true,
            acceptedFiles: 'image/*',
            createImageThumbnails: true,
            init: function () {
                var _this = this;
                that.editCategoryForm.get('avatar').value ? _this.previewsContainer.lastChild['hidden'] = true : _this.previewsContainer.lastChild['hidden'] = false;
                this.on('addedfile', function (file) {
                    var _this_1 = this;
                    var removeButton = dropzone__WEBPACK_IMPORTED_MODULE_15__["createElement"]('<button class=\'btn btn-sm btn-block\'>Remove file</button>');
                    if (_this.options.maxFiles == 1) {
                        that.removeDropzoneImage();
                        if (_this.files.length > 1) {
                            _this.removeFile(_this.files[0]);
                        }
                    }
                    removeButton.addEventListener('click', function (e) {
                        e.preventDefault();
                        e.stopPropagation();
                        _this.removeFile(file);
                    });
                    file.previewElement.appendChild(removeButton);
                    if (file) {
                        var reader_1 = new FileReader();
                        reader_1.onload = function (e) {
                            that.editCategoryForm.patchValue({ avatar: reader_1.result });
                            _this_1.isLogoLoaded = false;
                        };
                        reader_1.readAsDataURL(file);
                    }
                });
                this.on('removedfile', function (file) {
                    that.editCategoryForm.patchValue({ avatar: null });
                });
                this.on('error', function (file, message) {
                    if (file) {
                        that.toastr.error(message);
                    }
                });
            }
        });
    };
    CategoryEditComponent.prototype.removeDropzoneImage = function () {
        this.isLogoLoaded = false;
        this.editCategoryForm.patchValue({ avatar: null });
        this.editCategoryForm.get('avatar').value ? this['fileDropZone'].previewsContainer.lastChild['hidden'] = true : this['fileDropZone'].previewsContainer.lastChild['hidden'] = false;
    };
    CategoryEditComponent.ctorParameters = function () { return [
        { type: _ngx_translate_core__WEBPACK_IMPORTED_MODULE_6__["TranslateService"] },
        { type: _angular_common__WEBPACK_IMPORTED_MODULE_2__["DatePipe"] },
        { type: _angular_router__WEBPACK_IMPORTED_MODULE_4__["Router"] },
        { type: _angular_router__WEBPACK_IMPORTED_MODULE_4__["ActivatedRoute"] },
        { type: _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormBuilder"] },
        { type: ngx_toastr__WEBPACK_IMPORTED_MODULE_5__["ToastrService"] },
        { type: _core_services_categorys_service__WEBPACK_IMPORTED_MODULE_7__["CategorysService"] },
        { type: _core_services_options_service__WEBPACK_IMPORTED_MODULE_12__["OptionsService"] },
        { type: _core_services_client_service__WEBPACK_IMPORTED_MODULE_9__["ClientService"] },
        { type: _core_services_item_service__WEBPACK_IMPORTED_MODULE_8__["ItemService"] },
        { type: src_app_core_services_seo_service__WEBPACK_IMPORTED_MODULE_14__["SeoService"] },
        { type: _core_services_tax_service__WEBPACK_IMPORTED_MODULE_10__["TaxService"] },
        { type: _core_services_authentication_service__WEBPACK_IMPORTED_MODULE_11__["AuthenticationService"] }
    ]; };
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewChild"])('logodropzone', { static: false }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", _angular_core__WEBPACK_IMPORTED_MODULE_1__["ElementRef"])
    ], CategoryEditComponent.prototype, "logodropzone", void 0);
    CategoryEditComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-category-edit',
            template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./category-edit.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/modules/posts/categorys/pages/category-edit/category-edit.component.html")).default,
            styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./category-edit.component.scss */ "./src/app/modules/posts/categorys/pages/category-edit/category-edit.component.scss")).default]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_ngx_translate_core__WEBPACK_IMPORTED_MODULE_6__["TranslateService"],
            _angular_common__WEBPACK_IMPORTED_MODULE_2__["DatePipe"],
            _angular_router__WEBPACK_IMPORTED_MODULE_4__["Router"],
            _angular_router__WEBPACK_IMPORTED_MODULE_4__["ActivatedRoute"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormBuilder"],
            ngx_toastr__WEBPACK_IMPORTED_MODULE_5__["ToastrService"],
            _core_services_categorys_service__WEBPACK_IMPORTED_MODULE_7__["CategorysService"],
            _core_services_options_service__WEBPACK_IMPORTED_MODULE_12__["OptionsService"],
            _core_services_client_service__WEBPACK_IMPORTED_MODULE_9__["ClientService"],
            _core_services_item_service__WEBPACK_IMPORTED_MODULE_8__["ItemService"],
            src_app_core_services_seo_service__WEBPACK_IMPORTED_MODULE_14__["SeoService"],
            _core_services_tax_service__WEBPACK_IMPORTED_MODULE_10__["TaxService"],
            _core_services_authentication_service__WEBPACK_IMPORTED_MODULE_11__["AuthenticationService"]])
    ], CategoryEditComponent);
    return CategoryEditComponent;
}());



/***/ }),

/***/ "./src/app/modules/posts/categorys/pages/category-item-translate/category-item-translate.component.scss":
/*!**************************************************************************************************************!*\
  !*** ./src/app/modules/posts/categorys/pages/category-item-translate/category-item-translate.component.scss ***!
  \**************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL21vZHVsZXMvcG9zdHMvY2F0ZWdvcnlzL3BhZ2VzL2NhdGVnb3J5LWl0ZW0tdHJhbnNsYXRlL2NhdGVnb3J5LWl0ZW0tdHJhbnNsYXRlLmNvbXBvbmVudC5zY3NzIn0= */");

/***/ }),

/***/ "./src/app/modules/posts/categorys/pages/category-item-translate/category-item-translate.component.ts":
/*!************************************************************************************************************!*\
  !*** ./src/app/modules/posts/categorys/pages/category-item-translate/category-item-translate.component.ts ***!
  \************************************************************************************************************/
/*! exports provided: CategoryItemTranslateComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CategoryItemTranslateComponent", function() { return CategoryItemTranslateComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _ngx_translate_core__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @ngx-translate/core */ "./node_modules/@ngx-translate/core/fesm5/ngx-translate-core.js");
/* harmony import */ var dropzone__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! dropzone */ "./node_modules/dropzone/dist/dropzone.js");
/* harmony import */ var dropzone__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(dropzone__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var ngx_toastr__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ngx-toastr */ "./node_modules/ngx-toastr/fesm5/ngx-toastr.js");
/* harmony import */ var src_app_core_services_authentication_service__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! src/app/core/services/authentication.service */ "./src/app/core/services/authentication.service.ts");
/* harmony import */ var src_app_core_services_categorys_service__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! src/app/core/services/categorys.service */ "./src/app/core/services/categorys.service.ts");
/* harmony import */ var src_app_core_services_client_service__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! src/app/core/services/client.service */ "./src/app/core/services/client.service.ts");
/* harmony import */ var src_app_core_services_options_service__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! src/app/core/services/options.service */ "./src/app/core/services/options.service.ts");
/* harmony import */ var src_app_core_services_tax_service__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! src/app/core/services/tax.service */ "./src/app/core/services/tax.service.ts");













var CategoryItemTranslateComponent = /** @class */ (function () {
    function CategoryItemTranslateComponent(translate, datepipe, router, formBuilder, toastr, categorysService, optionsService, clientService, taxService, 
    // private categorySettingService: CategorySettingService,
    authenticationService) {
        var _this_1 = this;
        this.translate = translate;
        this.datepipe = datepipe;
        this.router = router;
        this.formBuilder = formBuilder;
        this.toastr = toastr;
        this.categorysService = categorysService;
        this.optionsService = optionsService;
        this.clientService = clientService;
        this.taxService = taxService;
        this.authenticationService = authenticationService;
        this.liststatus = [
            { value: 'no', label: 'Hide' },
            { value: 'yes', label: 'Show' },
        ];
        this.listcategorys = [];
        this.listTemplate = [];
        this.isFormSubmitted = false;
        this.isFormLoaded = false;
        this.datepickerConfig = {
            dateInputFormat: 'YYYY-MM-DD',
            containerClass: 'theme-red'
        };
        this.isCollapsedHead1 = false;
        this.isCollapsedHead2 = false;
        this.authenticationService.loginUser.subscribe(function (x) { return _this_1.loginUser = x; });
    }
    Object.defineProperty(CategoryItemTranslateComponent.prototype, "categoryControl", {
        get: function () {
            return this.createCategoryForm.controls;
        },
        enumerable: true,
        configurable: true
    });
    CategoryItemTranslateComponent.prototype.ngOnInit = function () {
        if (this.router.url === '/postscategory/create') {
            this.moduletype = 'news';
            this.urlPage = '/postscategory';
        }
        else {
            this.moduletype = 'products';
            this.urlPage = '/productscategory';
        }
        this.getTemplate();
        this.getSpecifications();
        this.getOptions('specifications');
        this.getCategorys();
    };
    CategoryItemTranslateComponent.prototype.loadForm = function () {
        var that = this;
        this.createCategoryForm = this.formBuilder.group({
            name: [null, _angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].required],
            avatar: [null, _angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].required],
            description: [null],
            parent_id: [null],
            page_title: [null],
            page_description: [null],
            url_and_handle: [null, _angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].required],
            active: [null, _angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].required],
            keyword: [null],
            po_types_indentify: [this.moduletype],
            specifications: [null],
            pages_id: [null, _angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].required],
        });
        setTimeout(function () {
            // that.loadDropzone();
        });
        this.isFormLoaded = true;
    };
    CategoryItemTranslateComponent.prototype.getCategorys = function () {
        var _this_1 = this;
        this.categorysService.getAll().subscribe(function (data) {
            _this_1.listcategorys = data;
            _this_1.loadForm();
        });
    };
    CategoryItemTranslateComponent.prototype.getOptions = function (action) {
        var _this_1 = this;
        this.optionsService.getAll(action).subscribe(function (data) {
            _this_1.specifications = data;
        });
    };
    CategoryItemTranslateComponent.prototype.getSpecifications = function () {
        var _this_1 = this;
        this.optionsService.getAll('specifications').subscribe(function (data) {
            _this_1.specifications = data;
        });
    };
    CategoryItemTranslateComponent.prototype.getTemplate = function () {
        var _this_1 = this;
        this.categorysService.getTemplate().subscribe(function (data) {
            _this_1.listTemplate = data;
        });
    };
    CategoryItemTranslateComponent.prototype.onSubmit = function () {
        this.isFormSubmitted = true;
        console.log(this.createCategoryForm.value);
        // if (this.createCategoryForm.invalid) {
        //   return;
        // }
        // this.categorysService.create(this.createCategoryForm.value)
        //   .subscribe(
        //     data => {
        //       this.toastr.success(this.translate.instant('categorys.messages.create'), this.translate.instant('categorys.title'));
        //       if (this.moduletype === 'news') {
        //         this.router.navigate(['postscategory']);
        //       } else {
        //         this.router.navigate(['productscategory']);
        //       }
        //     });
    };
    CategoryItemTranslateComponent.prototype.loadDropzone = function () {
        var that = this;
        new dropzone__WEBPACK_IMPORTED_MODULE_6__(this.logodropzone.nativeElement, {
            url: 'https://httpbin.org/post',
            maxFiles: 1,
            clickable: true,
            acceptedFiles: 'image/*',
            createImageThumbnails: true,
            init: function () {
                this.on('addedfile', function (file) {
                    var removeButton = dropzone__WEBPACK_IMPORTED_MODULE_6__["createElement"]('<button class=\'btn btn-sm btn-block\'>' + that.translate.instant('common.remove_file') + '</button>');
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
                            that.createCategoryForm.patchValue({ avatar: reader_1.result });
                        };
                        reader_1.readAsDataURL(file);
                    }
                });
                this.on('removedfile', function (file) {
                    that.createCategoryForm.patchValue({ avatar: null });
                });
                this.on('error', function (file, message) {
                    if (file) {
                        that.toastr.error(message);
                    }
                });
            }
        });
    };
    CategoryItemTranslateComponent.ctorParameters = function () { return [
        { type: _ngx_translate_core__WEBPACK_IMPORTED_MODULE_5__["TranslateService"] },
        { type: _angular_common__WEBPACK_IMPORTED_MODULE_1__["DatePipe"] },
        { type: _angular_router__WEBPACK_IMPORTED_MODULE_4__["Router"] },
        { type: _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormBuilder"] },
        { type: ngx_toastr__WEBPACK_IMPORTED_MODULE_7__["ToastrService"] },
        { type: src_app_core_services_categorys_service__WEBPACK_IMPORTED_MODULE_9__["CategorysService"] },
        { type: src_app_core_services_options_service__WEBPACK_IMPORTED_MODULE_11__["OptionsService"] },
        { type: src_app_core_services_client_service__WEBPACK_IMPORTED_MODULE_10__["ClientService"] },
        { type: src_app_core_services_tax_service__WEBPACK_IMPORTED_MODULE_12__["TaxService"] },
        { type: src_app_core_services_authentication_service__WEBPACK_IMPORTED_MODULE_8__["AuthenticationService"] }
    ]; };
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["Input"])(),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", Object)
    ], CategoryItemTranslateComponent.prototype, "tabValue", void 0);
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["ViewChild"])('logodropzone', { static: false }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", _angular_core__WEBPACK_IMPORTED_MODULE_2__["ElementRef"])
    ], CategoryItemTranslateComponent.prototype, "logodropzone", void 0);
    CategoryItemTranslateComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["Component"])({
            selector: 'category-item-translate',
            template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./category-item-translate.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/modules/posts/categorys/pages/category-item-translate/category-item-translate.component.html")).default,
            styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./category-item-translate.component.scss */ "./src/app/modules/posts/categorys/pages/category-item-translate/category-item-translate.component.scss")).default]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_ngx_translate_core__WEBPACK_IMPORTED_MODULE_5__["TranslateService"],
            _angular_common__WEBPACK_IMPORTED_MODULE_1__["DatePipe"],
            _angular_router__WEBPACK_IMPORTED_MODULE_4__["Router"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormBuilder"],
            ngx_toastr__WEBPACK_IMPORTED_MODULE_7__["ToastrService"],
            src_app_core_services_categorys_service__WEBPACK_IMPORTED_MODULE_9__["CategorysService"],
            src_app_core_services_options_service__WEBPACK_IMPORTED_MODULE_11__["OptionsService"],
            src_app_core_services_client_service__WEBPACK_IMPORTED_MODULE_10__["ClientService"],
            src_app_core_services_tax_service__WEBPACK_IMPORTED_MODULE_12__["TaxService"],
            src_app_core_services_authentication_service__WEBPACK_IMPORTED_MODULE_8__["AuthenticationService"]])
    ], CategoryItemTranslateComponent);
    return CategoryItemTranslateComponent;
}());



/***/ }),

/***/ "./src/app/modules/posts/categorys/pages/category-lists/category-lists.component.scss":
/*!********************************************************************************************!*\
  !*** ./src/app/modules/posts/categorys/pages/category-lists/category-lists.component.scss ***!
  \********************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = (".hide_empty_message ::ng-deep .odd {\n  display: none;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvbW9kdWxlcy9wb3N0cy9jYXRlZ29yeXMvcGFnZXMvY2F0ZWdvcnktbGlzdHMvQzpcXFVzZXJzXFx0aHVhblxcT25lRHJpdmVcXERlc2t0b3BcXGdsYXZhbC10aHVhbmRpbmgvc3JjXFxhcHBcXG1vZHVsZXNcXHBvc3RzXFxjYXRlZ29yeXNcXHBhZ2VzXFxjYXRlZ29yeS1saXN0c1xcY2F0ZWdvcnktbGlzdHMuY29tcG9uZW50LnNjc3MiLCJzcmMvYXBwL21vZHVsZXMvcG9zdHMvY2F0ZWdvcnlzL3BhZ2VzL2NhdGVnb3J5LWxpc3RzL2NhdGVnb3J5LWxpc3RzLmNvbXBvbmVudC5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0ksYUFBQTtBQ0NKIiwiZmlsZSI6InNyYy9hcHAvbW9kdWxlcy9wb3N0cy9jYXRlZ29yeXMvcGFnZXMvY2F0ZWdvcnktbGlzdHMvY2F0ZWdvcnktbGlzdHMuY29tcG9uZW50LnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyIuaGlkZV9lbXB0eV9tZXNzYWdlIDo6bmctZGVlcCAub2RkIHtcclxuICAgIGRpc3BsYXk6IG5vbmVcclxufSIsIi5oaWRlX2VtcHR5X21lc3NhZ2UgOjpuZy1kZWVwIC5vZGQge1xuICBkaXNwbGF5OiBub25lO1xufSJdfQ== */");

/***/ }),

/***/ "./src/app/modules/posts/categorys/pages/category-lists/category-lists.component.ts":
/*!******************************************************************************************!*\
  !*** ./src/app/modules/posts/categorys/pages/category-lists/category-lists.component.ts ***!
  \******************************************************************************************/
/*! exports provided: CategoryListsComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CategoryListsComponent", function() { return CategoryListsComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");
/* harmony import */ var _ngx_translate_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @ngx-translate/core */ "./node_modules/@ngx-translate/core/fesm5/ngx-translate-core.js");
/* harmony import */ var ngx_export_as__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ngx-export-as */ "./node_modules/ngx-export-as/fesm2015/ngx-export-as.js");
/* harmony import */ var ngx_toastr__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ngx-toastr */ "./node_modules/ngx-toastr/fesm5/ngx-toastr.js");
/* harmony import */ var _core_services_authentication_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../../../../core/services/authentication.service */ "./src/app/core/services/authentication.service.ts");
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../../../../../../environments/environment */ "./src/environments/environment.ts");
/* harmony import */ var angular_datatables__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! angular-datatables */ "./node_modules/angular-datatables/index.js");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! rxjs */ "./node_modules/rxjs/_esm5/index.js");
/* harmony import */ var sweetalert2__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! sweetalert2 */ "./node_modules/sweetalert2/dist/sweetalert2.all.js");
/* harmony import */ var sweetalert2__WEBPACK_IMPORTED_MODULE_10___default = /*#__PURE__*/__webpack_require__.n(sweetalert2__WEBPACK_IMPORTED_MODULE_10__);
/* harmony import */ var datatables_net__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! datatables.net */ "./node_modules/datatables.net/js/jquery.dataTables.js");
/* harmony import */ var datatables_net__WEBPACK_IMPORTED_MODULE_11___default = /*#__PURE__*/__webpack_require__.n(datatables_net__WEBPACK_IMPORTED_MODULE_11__);
/* harmony import */ var datatables_net_bs4__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! datatables.net-bs4 */ "./node_modules/datatables.net-bs4/js/dataTables.bootstrap4.js");
/* harmony import */ var datatables_net_bs4__WEBPACK_IMPORTED_MODULE_12___default = /*#__PURE__*/__webpack_require__.n(datatables_net_bs4__WEBPACK_IMPORTED_MODULE_12__);
/* harmony import */ var _core_services_categorys_service__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ../../../../../core/services/categorys.service */ "./src/app/core/services/categorys.service.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");















var CategoryListsComponent = /** @class */ (function () {
    function CategoryListsComponent(translate, exportAsService, http, toastr, router, categorysService, authenticationService) {
        var _this = this;
        this.translate = translate;
        this.exportAsService = exportAsService;
        this.http = http;
        this.toastr = toastr;
        this.router = router;
        this.categorysService = categorysService;
        this.authenticationService = authenticationService;
        this.dtTrigger = new rxjs__WEBPACK_IMPORTED_MODULE_9__["Subject"]();
        this.dtOptions = {};
        this.categorys = [];
        this.exportAsConfig = {
            type: 'pdf',
            elementIdOrContent: 'category_table',
        };
        this.apiUrl = _environments_environment__WEBPACK_IMPORTED_MODULE_7__["environment"].apiUrl;
        this.authenticationService.loginUser.subscribe(function (x) { return _this.loginUser = x; });
    }
    CategoryListsComponent.prototype.ngOnInit = function () {
        if (this.router.url === '/postscategory') {
            this.moduletype = 'news';
            this.curentModule = 'postscategory';
        }
        else {
            this.curentModule = 'productscategory';
            this.moduletype = 'products';
        }
        this.loadDatatable();
    };
    CategoryListsComponent.prototype.loadDatatable = function () {
        var _this = this;
        var that = this;
        this.dtOptions = {
            pagingType: 'full_numbers',
            pageLength: that.loginUser.settings.tables_pagination_limit,
            serverSide: true,
            processing: true,
            dom: '<"html5buttons"B>ltfrtip',
            data: [],
            order: [0],
            columns: [
                {
                    'sortable': true,
                    'width': '20%',
                    'target': [0]
                },
                {
                    'sortable': true,
                    'width': '20%',
                    'target': [1]
                },
                {
                    'sortable': true,
                    'width': '40%',
                    'target': [2]
                },
                {
                    'sortable': true,
                    'width': '20%',
                    'target': [3]
                }
            ],
            buttons: [{
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
                _this.http.post(_this.apiUrl + '/api/all-categorys', Object.assign(dataTablesParameters, { moduletype: _this.moduletype }), {}).subscribe(function (resp) {
                    _this.categorys = resp.data;
                    _this.settings = resp;
                    _this.settings = _this.settings.settings;
                    callback({
                        recordsTotal: resp.recordsTotal,
                        recordsFiltered: resp.recordsFiltered,
                        data: [],
                    });
                });
            }
        };
    };
    CategoryListsComponent.prototype.exportFiles = function (type) {
        this.exportAsConfig.type = type;
        this.exportAsService.save(this.exportAsConfig, this.translate.instant('categorys.title')).subscribe(function () {
        });
    };
    CategoryListsComponent.prototype.ngAfterViewInit = function () {
        this.dtTrigger.next();
    };
    CategoryListsComponent.prototype.ngOnDestroy = function () {
        this.dtTrigger.unsubscribe();
    };
    CategoryListsComponent.prototype.rerender = function () {
        var _this = this;
        this.dtElement.dtInstance.then(function (dtInstance) {
            dtInstance.destroy();
            setTimeout(function () {
                _this.dtTrigger.next();
                if (_this.categorys.length > 0) {
                    $('.tfoot_dt').addClass('d-none');
                }
                else {
                    $('.tfoot_dt').removeClass('d-none');
                }
            });
        });
    };
    CategoryListsComponent.prototype.deleteCategory = function (id) {
        var _this = this;
        sweetalert2__WEBPACK_IMPORTED_MODULE_10___default.a.fire({
            title: this.translate.instant('common.swal.title'),
            text: this.translate.instant('common.swal.text') + this.translate.instant('categorys.title'),
            type: 'warning',
            showCancelButton: true,
            confirmButtonText: this.translate.instant('common.swal.confirmButtonText'),
            cancelButtonText: this.translate.instant('common.swal.cancelButtonText')
        }).then(function (result) {
            if (result.value) {
                _this.categorysService.delete(id).subscribe(function (data) {
                    _this.toastr.success(_this.translate.instant('categorys.messages.delete'), _this.translate.instant('categorys.title'));
                    _this.rerender();
                });
            }
        });
    };
    CategoryListsComponent.prototype.getTranslateStatus = function (statusKey) {
        // return this.categoryStatusKeyValue[statusKey];
        return [];
    };
    CategoryListsComponent.prototype.getUrl = function (action, id) {
        if (action === 'create') {
            return ['/' + this.curentModule + '/create'];
        }
        else {
            return ['/' + this.curentModule + '/edit', id];
        }
    };
    CategoryListsComponent.ctorParameters = function () { return [
        { type: _ngx_translate_core__WEBPACK_IMPORTED_MODULE_3__["TranslateService"] },
        { type: ngx_export_as__WEBPACK_IMPORTED_MODULE_4__["ExportAsService"] },
        { type: _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClient"] },
        { type: ngx_toastr__WEBPACK_IMPORTED_MODULE_5__["ToastrService"] },
        { type: _angular_router__WEBPACK_IMPORTED_MODULE_14__["Router"] },
        { type: _core_services_categorys_service__WEBPACK_IMPORTED_MODULE_13__["CategorysService"] },
        { type: _core_services_authentication_service__WEBPACK_IMPORTED_MODULE_6__["AuthenticationService"] }
    ]; };
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewChild"])(angular_datatables__WEBPACK_IMPORTED_MODULE_8__["DataTableDirective"], { static: true }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", angular_datatables__WEBPACK_IMPORTED_MODULE_8__["DataTableDirective"])
    ], CategoryListsComponent.prototype, "dtElement", void 0);
    CategoryListsComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-category-lists',
            template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./category-lists.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/modules/posts/categorys/pages/category-lists/category-lists.component.html")).default,
            styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./category-lists.component.scss */ "./src/app/modules/posts/categorys/pages/category-lists/category-lists.component.scss")).default]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_ngx_translate_core__WEBPACK_IMPORTED_MODULE_3__["TranslateService"],
            ngx_export_as__WEBPACK_IMPORTED_MODULE_4__["ExportAsService"],
            _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClient"],
            ngx_toastr__WEBPACK_IMPORTED_MODULE_5__["ToastrService"],
            _angular_router__WEBPACK_IMPORTED_MODULE_14__["Router"],
            _core_services_categorys_service__WEBPACK_IMPORTED_MODULE_13__["CategorysService"],
            _core_services_authentication_service__WEBPACK_IMPORTED_MODULE_6__["AuthenticationService"]])
    ], CategoryListsComponent);
    return CategoryListsComponent;
}());



/***/ }),

/***/ "./src/app/modules/posts/categorys/pages/category-translate/category-translate.component.scss":
/*!****************************************************************************************************!*\
  !*** ./src/app/modules/posts/categorys/pages/category-translate/category-translate.component.scss ***!
  \****************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL21vZHVsZXMvcG9zdHMvY2F0ZWdvcnlzL3BhZ2VzL2NhdGVnb3J5LXRyYW5zbGF0ZS9jYXRlZ29yeS10cmFuc2xhdGUuY29tcG9uZW50LnNjc3MifQ== */");

/***/ }),

/***/ "./src/app/modules/posts/categorys/pages/category-translate/category-translate.component.ts":
/*!**************************************************************************************************!*\
  !*** ./src/app/modules/posts/categorys/pages/category-translate/category-translate.component.ts ***!
  \**************************************************************************************************/
/*! exports provided: CategoryTranslateComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CategoryTranslateComponent", function() { return CategoryTranslateComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");


var CategoryTranslateComponent = /** @class */ (function () {
    function CategoryTranslateComponent() {
    }
    CategoryTranslateComponent.prototype.ngOnInit = function () {
        this.dataTabs = [
            { title: 'title 1', formGroup: 'createCategoryForm' },
            { title: 'title 3', formGroup: 'createCategoryFormN' },
            { title: 'title 4', formGroup: 'createCategoryFormY' },
            { title: 'title 5', formGroup: 'createCategoryFormM' }
        ];
    };
    CategoryTranslateComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-category-translate',
            template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./category-translate.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/modules/posts/categorys/pages/category-translate/category-translate.component.html")).default,
            styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./category-translate.component.scss */ "./src/app/modules/posts/categorys/pages/category-translate/category-translate.component.scss")).default]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [])
    ], CategoryTranslateComponent);
    return CategoryTranslateComponent;
}());



/***/ })

}]);
//# sourceMappingURL=modules-posts-categorys-categorys-module.js.map