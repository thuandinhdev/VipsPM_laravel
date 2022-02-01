(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["modules-posts-collections-collections-module"],{

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/modules/posts/collections/pages/collection-create/collection-create.component.html":
/*!******************************************************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/modules/posts/collections/pages/collection-create/collection-create.component.html ***!
  \******************************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<section id=\"basic-form-layouts\">\r\n    <form (ngSubmit)=\"onSubmit()\" *ngIf=\"isFormLoaded\" [formGroup]=\"createCollectionForm\">\r\n        <div class=\"row\">\r\n            <div class=\"col-md-8\">\r\n                <div class=\"card\">\r\n                    <div class=\"card-header\">\r\n                        <h4 class=\"card-title\">{{'collections.title1' | translate}}</h4>\r\n                    </div>\r\n                    <div class=\"card-body\">\r\n                        <div class=\"px-3\">\r\n                            <div class=\"form-body\">\r\n                                <h4 class=\"form-section\" (click)=\"isCollapsedHead1 = !isCollapsedHead1\" [attr.aria-expanded]=\"!isCollapsedHead1\" aria-controls=\"collapseBasic\">\r\n                                    {{'categorys.headings.head1' | translate}}\r\n                                    <i class=\"fa\" [ngClass] = \"isCollapsedHead1 ? 'fa-plus' : 'fa-minus'\"></i>\r\n                                </h4>\r\n                                <div class=\"row\" [collapse]=\"isCollapsedHead1\" [isAnimated]=\"true\">\r\n                                    <div class=\"col-md-12\">\r\n                                        <div [ngClass]=\"{ 'is-invalid': isFormSubmitted && collectionControl.name.errors }\" class=\"form-group\">\r\n                                            <label for=\"name\">{{'collections.create.fields.name' | translate}}&nbsp;<span class=\"text-danger\">*</span>\r\n                                            </label>\r\n                                            <input [ngClass]=\"{ 'is-invalid': isFormSubmitted && collectionControl.name.errors }\" class=\"form-control\" formControlName=\"name\" id=\"name\" placeholder=\"{{'collections.create.placeholders.placeholder1' | translate }}\" type=\"text\"/>\r\n                                            <div *ngIf=\"isFormSubmitted && collectionControl.name.errors\" class=\"invalid-feedback\">\r\n                                                <div *ngIf=\"collectionControl.name.errors.required\">{{'collections.create.error_messages.message1' | translate}}</div>\r\n                                            </div>\r\n                                        </div>\r\n                                    </div>\r\n                                    <div class=\"col-md-12\">\r\n                                        <div [ngClass]=\"{ 'is-invalid': isFormSubmitted && collectionControl.description.errors }\" class=\"form-group\">\r\n                                            <label for=\"description\">{{'collections.create.fields.description' | translate}}&nbsp;\r\n                                            </label>\r\n                                            <textarea [ngClass]=\"{ 'is-invalid': isFormSubmitted && collectionControl.description.errors }\" class=\"form-control\" formControlName=\"description\" id=\"description\" name=\"description\" placeholder=\"{{'collections.create.placeholders.placeholder2' | translate}}\"></textarea>\r\n                                            <div *ngIf=\"isFormSubmitted && collectionControl.description.errors\" class=\"invalid-feedback\">\r\n                                                <div *ngIf=\"collectionControl.description.errors.required\">{{'collections.create.error_messages.message2' | translate}}</div>\r\n                                            </div>\r\n                                        </div>\r\n                                    </div>\r\n                                </div>\r\n                            </div>\r\n                        </div>\r\n                    </div>\r\n                </div>\r\n                <div class=\"card\" *ngIf=\"moduletype == 'products'\">\r\n                    <div class=\"card-body\">\r\n                        <div class=\"px-3\">\r\n                            <div class=\"form-body\">\r\n                                <h4 class=\"form-section\" (click)=\"isCollapsedHead3 = !isCollapsedHead3\" [attr.aria-expanded]=\"!isCollapsedHead3\" aria-controls=\"collapseBasic\">\r\n                                    {{'collections.headings.head3' | translate}}\r\n                                    <i class=\"fa\" [ngClass] = \"isCollapsedHead3 ? 'fa-plus' : 'fa-minus'\"></i>\r\n                                </h4>\r\n                                <div class=\"row\" [collapse]=\"isCollapsedHead3\" [isAnimated]=\"true\">\r\n                                    <div class=\"col-md-12\">\r\n                                        <div class=\"form-group\">\r\n                                            <label for=\"page_title\">{{'collections.create.fields.filter_type' | translate}}\r\n                                            </label>\r\n                                            <ng-select (change)=\"changeFilterType($event)\" [items]=\"listFilterType\" [searchable]=\"false\" [selectOnTab]=\"true\" bindValue=\"value\" formControlName=\"type\" labelForId=\"type\" placeholder=\"{{'collections.create.placeholders.placeholder11' | translate}}\"></ng-select>\r\n                                        </div>\r\n                                    </div>\r\n                                    <div class=\"col-md-12\" *ngIf=\"createCollectionForm.value.type == 1\">\r\n                                        <div class=\"form-group\">\r\n                                            <label for=\"page_title\">{{'collections.create.fields.condition_type' | translate}}\r\n                                            </label>\r\n                                            <ng-select [items]=\"listFilterProductNeed\" [searchable]=\"false\" [selectOnTab]=\"true\" bindValue=\"value\" formControlName=\"condition_type\" labelForId=\"condition_type\" placeholder=\"{{'collections.create.placeholders.placeholder14' | translate}}\"></ng-select>\r\n                                        </div>\r\n                                    </div>\r\n                                    <div class=\"col-md-12\" *ngIf=\"createCollectionForm.value.type == 1\">\r\n                                        <div class=\"form-group\">\r\n                                            <label for=\"conditions\">{{'collections.create.fields.conditions' | translate}}</label>\r\n                                            <ng-select  (add)=\"onAddFilterCondition($event)\" (remove)=\"onRemoveFilterCondition($event)\" [clearable]=\"false\" [multiple]=\"true\" [items]=\"listFilterCondition\" [hideSelected]=\"true\" [searchable]=\"true\" [selectOnTab]=\"true\" bindLabel=\"name\" bindValue=\"type\" formControlName=\"conditions\" labelForId=\"conditions\" placeholder=\"{{'collections.create.placeholders.placeholder12' | translate}}\">\r\n                                                <ng-template let-item=\"item\" ng-option-tmp>\r\n                                                    {{item.name}}\r\n                                                </ng-template>\r\n                                            </ng-select>\r\n                                        </div>\r\n                                    </div>\r\n                                    <div class=\"px-2\" *ngIf=\"createCollectionForm.value.type == 1\">\r\n                                        <div class=\"table-responsive-xs table-responsive-sm table-responsive-md table-responsive-lg table-responsive-xl\" formArrayName=\"filter\">\r\n                                            <table class=\"table table-bordered table-hover b4-datatable\" id=\"filter_table\" width=\"100%\">\r\n                                                <thead>\r\n                                                <tr>\r\n                                                    <th>{{'collections.create.fields.name' | translate}}</th>\r\n                                                    <th >{{'collections.create.fields.condition' | translate}}</th>\r\n                                                    <th>{{'collections.create.fields.value' | translate}}</th>\r\n                                                </tr>\r\n                                                </thead>\r\n                                                <tbody>\r\n                                                <tr  *ngFor=\"let seo of createCollectionForm.controls.filter.controls; let i=index\" [formGroupName]=\"i\">\r\n                                                    <td>\r\n                                                        <label>{{createCollectionForm.value.filter[i]['name']}}</label>\r\n                                                    </td>\r\n                                                    <td >\r\n                                                        <div class=\"form-group\" [ngClass]=\"{ 'is-invalid': isFormSubmitted && controllFilter.controls[i].get('condition').errors }\">\r\n                                                             <ng-select [items]=\"listCondition\" [searchable]=\"false\" [selectOnTab]=\"true\" bindValue=\"value\" formControlName=\"condition\" labelForId=\"type\" placeholder=\"{{'collections.create.placeholders.placeholder12' | translate }} \"></ng-select>\r\n                                                        </div>\r\n                                                    </td>\r\n                                                    <td>\r\n                                                        <div class=\"form-group\">\r\n                                                            <input class=\"form-control\" formControlName=\"value\" placeholder=\"{{'collections.create.placeholders.placeholder13' | translate }}\" type=\"number\"  [ngClass]=\"{ 'is-invalid': isFormSubmitted && controllFilter.controls[i].get('value').errors }\" />\r\n                                                        </div>\r\n                                                    </td>\r\n                                                </tr>\r\n                                                </tbody>\r\n                                            </table>\r\n                                        </div>\r\n                                    </div>\r\n                                </div>\r\n                            </div>\r\n                        </div>\r\n                    </div>\r\n                </div>\r\n                <div class=\"card\">\r\n                    <div class=\"card-body\">\r\n                        <div class=\"px-3\">\r\n                            <div class=\"form-body\">\r\n                                <h4 class=\"form-section\" (click)=\"isCollapsedHead2 = !isCollapsedHead2\" [attr.aria-expanded]=\"!isCollapsedHead2\" aria-controls=\"collapseBasic\">\r\n                                    {{'categorys.headings.head2' | translate}}\r\n                                    <i class=\"fa\" [ngClass] = \"isCollapsedHead2 ? 'fa-plus' : 'fa-minus'\"></i>\r\n                                </h4>\r\n                                <div class=\"row\" [collapse]=\"isCollapsedHead2\" [isAnimated]=\"true\">\r\n                                    <div class=\"col-md-12\">\r\n                                        <div [ngClass]=\"{ 'is-invalid': isFormSubmitted && collectionControl.page_title.errors }\" class=\"form-group\">\r\n                                            <label for=\"page_title\">{{'collections.create.fields.page_title' | translate}}\r\n                                            </label>\r\n                                            <input [ngClass]=\"{ 'is-invalid': isFormSubmitted && collectionControl.page_title.errors }\" class=\"form-control\" formControlName=\"page_title\" id=\"page_title\" placeholder=\"{{'collections.create.placeholders.placeholder7' | translate }}\" type=\"text\"/>\r\n                                            <div *ngIf=\"isFormSubmitted && collectionControl.page_title.errors\" class=\"invalid-feedback\">\r\n                                                <div *ngIf=\"collectionControl.page_title.errors.required\">{{'collections.create.error_messages.message1' | translate}}</div>\r\n                                            </div>\r\n                                        </div>\r\n                                    </div>\r\n                                    <div class=\"col-md-12\">\r\n                                        <div [ngClass]=\"{ 'is-invalid': isFormSubmitted && collectionControl.page_description.errors }\" class=\"form-group\">\r\n                                            <label for=\"page_description\">{{'collections.create.fields.page_description' | translate}}\r\n                                            </label>\r\n                                            <textarea [ngClass]=\"{ 'is-invalid': isFormSubmitted && collectionControl.page_description.errors }\" class=\"form-control\" formControlName=\"page_description\" id=\"page_description\" name=\"page_description\" placeholder=\"{{'collections.create.placeholders.placeholder8' | translate}}\"></textarea>\r\n                                            <div *ngIf=\"isFormSubmitted && collectionControl.page_description.errors\" class=\"invalid-feedback\">\r\n                                                <div *ngIf=\"collectionControl.page_description.errors.required\">{{'collections.create.error_messages.message2' | translate}}</div>\r\n                                            </div>\r\n                                        </div>\r\n                                    </div>\r\n                                    <div class=\"col-md-12\">\r\n                                        <div [ngClass]=\"{ 'is-invalid': isFormSubmitted && collectionControl.url_and_handle.errors }\" class=\"form-group\">\r\n                                            <label for=\"url_and_handle\">{{'collections.create.fields.url_and_handle' | translate}}&nbsp;<span class=\"text-danger\">*</span>\r\n                                            </label>\r\n                                            <input [ngClass]=\"{ 'is-invalid': isFormSubmitted && collectionControl.url_and_handle.errors }\" class=\"form-control\" formControlName=\"url_and_handle\" id=\"url_and_handle\" placeholder=\"{{'collections.create.placeholders.placeholder9' | translate }}\" type=\"text\"/>\r\n                                            <div *ngIf=\"isFormSubmitted && collectionControl.url_and_handle.errors\" class=\"invalid-feedback\">\r\n                                                <div *ngIf=\"collectionControl.url_and_handle.errors.required\">{{'collections.create.error_messages.message3' | translate}}</div>\r\n                                            </div>\r\n                                        </div>\r\n                                    </div>\r\n                                    <div class=\"col-md-12\">\r\n                                        <div class=\"form-group\">\r\n                                            <label for=\"seo\">{{'seo.create.fields.meta' | translate}}</label>\r\n                                            <ng-select  (add)=\"onAddMetaTag($event)\" (remove)=\"onRemoveMetaTag($event)\" [clearable]=\"false\" [multiple]=\"true\" [items]=\"seoData\" [searchable]=\"true\" [selectOnTab]=\"true\" bindLabel=\"label\" bindValue=\"id\" formControlName=\"seo\" labelForId=\"seo\" placeholder=\"{{'seo.create.placeholders.placeholder6' | translate}}\" [hideSelected]=\"true\" >\r\n                                                <ng-template let-item=\"item\" ng-option-tmp>\r\n                                                    {{item.label}}\r\n                                                </ng-template>\r\n                                            </ng-select>\r\n                                        </div>\r\n                                    </div>\r\n                                    <div class=\"px-2\">\r\n                                        <div class=\"table-responsive-xs table-responsive-sm table-responsive-md table-responsive-lg table-responsive-xl\" formArrayName=\"seoData\">\r\n                                            <table class=\"table table-bordered table-hover b4-datatable\" id=\"variations_table\" width=\"100%\">\r\n                                                <thead>\r\n                                                <tr>\r\n                                                    <th>{{'seo.create.fields.stt' | translate}}</th>\r\n                                                    <th >{{'seo.create.fields.meta' | translate}}</th>\r\n                                                    <th>{{'seo.create.fields.content' | translate}}</th>\r\n                                                </tr>\r\n                                                </thead>\r\n                                                <tbody>\r\n                                                <tr  *ngFor=\"let seo of createCollectionForm.controls.seoData.controls; let i=index\" [formGroupName]=\"i\">\r\n                                                    <td>\r\n                                                        <label>{{i+1}}</label>\r\n                                                    </td>\r\n                                                    <td >\r\n                                                        <div class=\"form-group\">\r\n                                                            <label>{{createCollectionForm.value.seoData[i]['meta']}}</label>\r\n                                                        </div>\r\n                                                    </td>\r\n                                                    <td>\r\n                                                        <div class=\"form-group\">\r\n                                                            <textarea class=\"form-control\" formControlName=\"content\" name=\"description\" placeholder=\"{{'seo.create.placeholders.placeholder7' | translate}}\"></textarea>\r\n                                                        </div>\r\n                                                    </td>\r\n                                                </tr>\r\n                                                </tbody>\r\n                                            </table>\r\n                                        </div>\r\n                                    </div>\r\n                                </div>\r\n                            </div>\r\n                        </div>\r\n                    </div>\r\n                </div>\r\n            </div>\r\n            <div class=\"col-md-4\">\r\n                <div class=\"card\">\r\n                    <div class=\"card-body\">\r\n                        <div class=\"px-3\">\r\n                            <div class=\"form-body\">\r\n                                <div class=\"row\">\r\n                                    <div class=\"col-md-12\">\r\n                                        <div [ngClass]=\"{ 'is-invalid': isFormSubmitted && collectionControl.active.errors }\" class=\"form-group mg-t-1rem\">\r\n                                            <label for=\"active\">{{'collections.create.fields.active' | translate}}&nbsp;<span class=\"text-danger\">*</span>\r\n                                            </label>\r\n                                            <ng-select [items]=\"liststatus\" [searchable]=\"false\" [selectOnTab]=\"true\" bindValue=\"value\" formControlName=\"active\" labelForId=\"active\" placeholder=\"{{'collections.create.placeholders.placeholder4' | translate}}\"></ng-select>\r\n<!--                                            <input [ngClass]=\"{ 'is-invalid': isFormSubmitted && collectionControl.status.errors }\" class=\"form-control\" formControlName=\"status\" id=\"status\" placeholder=\"{{'collections.create.placeholders.placeholder2' | translate }}\" type=\"text\"/>-->\r\n                                            <div *ngIf=\"isFormSubmitted && collectionControl.active.errors\" class=\"invalid-feedback\">\r\n                                                <div *ngIf=\"collectionControl.active.errors.required\">{{'collections.create.error_messages.message4' | translate}}</div>\r\n\r\n                                            </div>\r\n                                        </div>\r\n                                    </div>\r\n                                </div>\r\n                            </div>\r\n                        </div>\r\n                    </div>\r\n                </div>\r\n                <!-- <div class=\"card\">\r\n                    <div class=\"card-body\">\r\n                        <div class=\"px-3\">\r\n                            <div class=\"form-body\">\r\n                                <div class=\"row\">\r\n                                    <div class=\"col-md-12\">\r\n                                        <div [ngClass]=\"{ 'is-invalid': isFormSubmitted && collectionControl.keyword.errors }\" class=\"form-group mg-t-1rem\">\r\n                                            <label for=\"keyword\">{{'collections.create.fields.keyword' | translate}}\r\n                                            </label>\r\n                                            <input [ngClass]=\"{ 'is-invalid': isFormSubmitted && collectionControl.keyword.errors }\" class=\"form-control\" formControlName=\"keyword\" id=\"keyword\" placeholder=\"{{'collections.create.placeholders.placeholder5' | translate }}\" type=\"text\"/>\r\n                                            <div *ngIf=\"isFormSubmitted && collectionControl.keyword.errors\" class=\"invalid-feedback\">\r\n                                                <div *ngIf=\"collectionControl.keyword.errors.required\">{{'collections.create.error_messages.message2' | translate}}</div>\r\n                                            </div>\r\n                                        </div>\r\n                                    </div>\r\n                                </div>\r\n                            </div>\r\n                        </div>\r\n                    </div>\r\n                </div> -->\r\n                <div class=\"card\">\r\n                    <div class=\"card-body\">\r\n                        <div class=\"px-3\">\r\n                            <div class=\"form-body\">\r\n                                <div class=\"row\">\r\n                                    <div class=\"col-md-12\">\r\n                                        <div [ngClass]=\"{ 'is-invalid': isFormSubmitted && collectionControl.avatar.errors }\" class=\"form-group mg-t-1rem\">\r\n                                            <label for=\"avatar\">{{'collections.create.fields.avatar' | translate}}&nbsp;<span class=\"text-danger\">*</span>\r\n                                            </label>\r\n                                            <input formControlName=\"avatar\" type=\"hidden\">\r\n                                            <div #logodropzone class=\"dropzone dz-clickable\">\r\n                                                <div class=\"dz-default dz-message\">\r\n                                                    <span><strong>{{'collections.create.placeholders.placeholder10' | translate }}</strong></span>\r\n                                                </div>\r\n                                            </div>\r\n                                        </div>\r\n                                    </div>\r\n                                </div>\r\n                            </div>\r\n                        </div>\r\n                    </div>\r\n                </div>\r\n                <div class=\"card\">\r\n                    <div class=\"card-body\">\r\n                        <div class=\"px-3\">\r\n                            <div class=\"form-body\">\r\n                                <div class=\"row\">\r\n                                    <div class=\"col-md-12\">\r\n                                        <div [ngClass]=\"{ 'is-invalid': isFormSubmitted && collectionControl.pages_id.errors }\" class=\"form-group mg-t-1rem\">\r\n                                            <label for=\"pages_id\">{{'collections.create.fields.template' | translate}}&nbsp;<span class=\"text-danger\">*</span>\r\n                                            </label>\r\n                                            <ng-select [items]=\"listTemplate\" [searchable]=\"true\" [selectOnTab]=\"true\" bindLabel=\"name\" bindValue=\"id\" formControlName=\"pages_id\" labelForId=\"pages_id\" placeholder=\"{{'collections.create.placeholders.placeholder6' | translate}}\"></ng-select>\r\n<!--                                            <input [ngClass]=\"{ 'is-invalid': isFormSubmitted && collectionControl.template.errors }\" class=\"form-control\" formControlName=\"template\" id=\"template\" placeholder=\"{{'collections.create.placeholders.placeholder6' | translate }}\" type=\"text\"/>-->\r\n                                            <div *ngIf=\"isFormSubmitted && collectionControl.pages_id.errors\" class=\"invalid-feedback\">\r\n                                                <div *ngIf=\"collectionControl.pages_id.errors.required\">{{'collections.create.error_messages.message2' | translate}}</div>\r\n                                            </div>\r\n                                        </div>\r\n                                    </div>\r\n                                </div>\r\n                            </div>\r\n                        </div>\r\n                    </div>\r\n                </div>\r\n            </div>\r\n            <div class=\"col-md-12\">\r\n                <div class=\"card\">\r\n                    <div class=\"card-body\">\r\n                        <div class=\"px-3\">\r\n                            <div class=\"form-body\">\r\n                                <div class=\"row mb-3\">\r\n                                    <div class=\"col-md-12 text-right pt-3\">\r\n                                        <a [routerLink]=\"urlPage\" class=\"btn btn-cancel mb-0\">{{'common.cancel' | translate }}</a>\r\n                                        <button class=\"btn btn-submit mb-0\" type=\"submit\">{{'common.create' | translate }}</button>\r\n                                    </div>\r\n                                </div>\r\n                            </div>\r\n                        </div>\r\n                    </div>\r\n                </div>\r\n            </div>\r\n        </div>\r\n    </form>\r\n</section>\r\n");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/modules/posts/collections/pages/collection-edit/collection-edit.component.html":
/*!**************************************************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/modules/posts/collections/pages/collection-edit/collection-edit.component.html ***!
  \**************************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<section id=\"basic-form-layouts\">\r\n    <form (ngSubmit)=\"onSubmit()\" *ngIf=\"isFormLoaded\" [formGroup]=\"editCollectionForm\">\r\n        <div class=\"row\">\r\n            <div class=\"col-md-8\">\r\n                <div class=\"card\">\r\n                    <div class=\"card-header\">\r\n                        <h4 class=\"card-title\">{{'collections.title2' | translate}}</h4>\r\n                    </div>\r\n                    <div class=\"card-body\">\r\n                        <div class=\"px-3\">\r\n                            <div class=\"form-body\">\r\n                                <h4 class=\"form-section\" (click)=\"isCollapsedHead1 = !isCollapsedHead1\" [attr.aria-expanded]=\"!isCollapsedHead1\" aria-controls=\"collapseBasic\">\r\n                                    {{'categorys.headings.head1' | translate}}\r\n                                    <i class=\"fa\" [ngClass] = \"isCollapsedHead1 ? 'fa-plus' : 'fa-minus'\"></i>\r\n                                </h4>\r\n                                <div class=\"row\" [collapse]=\"isCollapsedHead1\" [isAnimated]=\"true\">\r\n                                    <div class=\"col-md-12\">\r\n                                        <div [ngClass]=\"{ 'is-invalid': isFormSubmitted && collectionControl.name.errors }\" class=\"form-group\">\r\n                                            <label for=\"name\">{{'collections.create.fields.name' | translate}}&nbsp;<span class=\"text-danger\">*</span>\r\n                                            </label>\r\n                                            <input [ngClass]=\"{ 'is-invalid': isFormSubmitted && collectionControl.name.errors }\" class=\"form-control\" formControlName=\"name\" id=\"name\" placeholder=\"{{'collections.create.placeholders.placeholder1' | translate }}\" type=\"text\"/>\r\n                                            <div *ngIf=\"isFormSubmitted && collectionControl.name.errors\" class=\"invalid-feedback\">\r\n                                                <div *ngIf=\"collectionControl.name.errors.required\">{{'collections.create.error_messages.message1' | translate}}</div>\r\n                                            </div>\r\n                                        </div>\r\n                                    </div>\r\n                                    <div class=\"col-md-12\">\r\n                                        <div [ngClass]=\"{ 'is-invalid': isFormSubmitted && collectionControl.description.errors }\" class=\"form-group\">\r\n                                            <label for=\"description\">{{'collections.create.fields.description' | translate}}&nbsp;\r\n                                            </label>\r\n                                            <textarea [ngClass]=\"{ 'is-invalid': isFormSubmitted && collectionControl.description.errors }\" class=\"form-control\" formControlName=\"description\" id=\"description\" name=\"description\" placeholder=\"{{'collections.create.placeholders.placeholder2' | translate}}\"></textarea>\r\n                                            <div *ngIf=\"isFormSubmitted && collectionControl.description.errors\" class=\"invalid-feedback\">\r\n                                                <div *ngIf=\"collectionControl.description.errors.required\">{{'collections.create.error_messages.message2' | translate}}</div>\r\n                                            </div>\r\n                                        </div>\r\n                                    </div>\r\n                                </div>\r\n                            </div>\r\n                        </div>\r\n                    </div>\r\n                </div>\r\n                <div class=\"card\" *ngIf=\"moduletype == 'products'\">\r\n                    <div class=\"card-body\">\r\n                        <div class=\"px-3\">\r\n                            <div class=\"form-body\">\r\n                                <h4 class=\"form-section\" (click)=\"isCollapsedHead3 = !isCollapsedHead3\" [attr.aria-expanded]=\"!isCollapsedHead3\" aria-controls=\"collapseBasic\">\r\n                                    {{'collections.headings.head3' | translate}}\r\n                                    <i class=\"fa\" [ngClass] = \"isCollapsedHead3 ? 'fa-plus' : 'fa-minus'\"></i>\r\n                                </h4>\r\n                                <div class=\"row\" [collapse]=\"isCollapsedHead3\" [isAnimated]=\"true\">\r\n                                    <div class=\"col-md-12\">\r\n                                        <div class=\"form-group\">\r\n                                            <label for=\"page_title\">{{'collections.create.fields.filter_type' | translate}}\r\n                                            </label>\r\n                                            <ng-select [items]=\"listFilterType\" [searchable]=\"false\" [selectOnTab]=\"true\" bindValue=\"value\" formControlName=\"type\" labelForId=\"type\" placeholder=\"{{'collections.create.placeholders.placeholder11' | translate}}\"></ng-select>\r\n                                        </div>\r\n                                    </div>\r\n                                    <div class=\"col-md-12\" *ngIf=\"editCollectionForm.value.type == 1\">\r\n                                        <div class=\"form-group\">\r\n                                            <label for=\"page_title\">{{'collections.create.fields.condition_type' | translate}}\r\n                                            </label>\r\n                                            <ng-select [items]=\"listFilterProductNeed\" [searchable]=\"false\" [selectOnTab]=\"true\" bindValue=\"value\" formControlName=\"condition_type\" labelForId=\"condition_type\" placeholder=\"{{'collections.create.placeholders.placeholder14' | translate}}\"></ng-select>\r\n                                        </div>\r\n                                    </div>\r\n                                    <div class=\"col-md-12\" *ngIf=\"editCollectionForm.value.type == 1\">\r\n                                        <div class=\"form-group\">\r\n                                            <label for=\"conditions\">{{'collections.create.fields.conditions' | translate}}</label>\r\n                                            <ng-select  (add)=\"onAddFilterCondition($event)\" (remove)=\"onRemoveFilterCondition($event)\" [clearable]=\"false\" [multiple]=\"true\" [items]=\"listFilterCondition\" [hideSelected]=\"true\" [searchable]=\"true\" [selectOnTab]=\"true\" bindLabel=\"name\" bindValue=\"type\" formControlName=\"conditions\" labelForId=\"conditions\" placeholder=\"{{'collections.create.placeholders.placeholder12' | translate}}\">\r\n                                                <ng-template let-item=\"item\" ng-option-tmp>\r\n                                                    {{item.name}}\r\n                                                </ng-template>\r\n                                            </ng-select>\r\n                                        </div>\r\n                                    </div>\r\n                                    <div class=\"px-2\" *ngIf=\"editCollectionForm.value.type == 1\">\r\n                                        <div class=\"table-responsive-xs table-responsive-sm table-responsive-md table-responsive-lg table-responsive-xl\" formArrayName=\"filter\">\r\n                                            <table class=\"table table-bordered table-hover b4-datatable\" id=\"filter_table\" width=\"100%\">\r\n                                                <thead>\r\n                                                <tr>\r\n                                                    <th>{{'collections.create.fields.name' | translate}}</th>\r\n                                                    <th >{{'collections.create.fields.condition' | translate}}</th>\r\n                                                    <th>{{'collections.create.fields.value' | translate}}</th>\r\n                                                </tr>\r\n                                                </thead>\r\n                                                <tbody>\r\n                                                <tr  *ngFor=\"let seo of editCollectionForm.controls.filter.controls; let i=index\" [formGroupName]=\"i\">\r\n                                                    <td>\r\n                                                        <label>{{editCollectionForm.value.filter[i]['name']}}</label>\r\n                                                    </td>\r\n                                                    <td >\r\n                                                        <div class=\"form-group\" [ngClass]=\"{ 'is-invalid': isFormSubmitted && controllFilter.controls[i].get('condition').errors }\">\r\n                                                             <ng-select [items]=\"listCondition\" [searchable]=\"false\" [selectOnTab]=\"true\" bindValue=\"value\" formControlName=\"condition\" labelForId=\"type\" placeholder=\"{{'collections.create.placeholders.placeholder12' | translate }} \" ></ng-select>\r\n                                                        </div>\r\n                                                    </td>\r\n                                                    <td>\r\n                                                        <div class=\"form-group\">\r\n                                                            <input class=\"form-control\" formControlName=\"value\" placeholder=\"{{'collections.create.placeholders.placeholder13' | translate }}\" type=\"number\"  [ngClass]=\"{ 'is-invalid': isFormSubmitted && controllFilter.controls[i].get('value').errors }\" />\r\n                                                        </div>\r\n                                                    </td>\r\n                                                </tr>\r\n                                                </tbody>\r\n                                            </table>\r\n                                        </div>\r\n                                    </div>\r\n                                </div>\r\n                            </div>\r\n                        </div>\r\n                    </div>\r\n                </div>\r\n                <div class=\"card\">\r\n                    <div class=\"card-body\">\r\n                        <div class=\"px-3\">\r\n                            <div class=\"form-body\">\r\n                                <h4 class=\"form-section\" (click)=\"isCollapsedHead2 = !isCollapsedHead2\" [attr.aria-expanded]=\"!isCollapsedHead2\" aria-controls=\"collapseBasic\">\r\n                                    {{'categorys.headings.head2' | translate}}\r\n                                    <i class=\"fa\" [ngClass] = \"isCollapsedHead2 ? 'fa-plus' : 'fa-minus'\"></i>\r\n                                </h4>\r\n                                <div class=\"row\" [collapse]=\"isCollapsedHead2\" [isAnimated]=\"true\">\r\n                                    <div class=\"col-md-12\">\r\n                                        <div [ngClass]=\"{ 'is-invalid': isFormSubmitted && collectionControl.page_title.errors }\" class=\"form-group\">\r\n                                            <label for=\"page_title\">{{'collections.create.fields.page_title' | translate}}\r\n                                            </label>\r\n                                            <input [ngClass]=\"{ 'is-invalid': isFormSubmitted && collectionControl.page_title.errors }\" class=\"form-control\" formControlName=\"page_title\" id=\"page_title\" placeholder=\"{{'collections.create.placeholders.placeholder7' | translate }}\" type=\"text\"/>\r\n                                            <div *ngIf=\"isFormSubmitted && collectionControl.page_title.errors\" class=\"invalid-feedback\">\r\n                                                <div *ngIf=\"collectionControl.page_title.errors.required\">{{'collections.create.error_messages.message1' | translate}}</div>\r\n                                            </div>\r\n                                        </div>\r\n                                    </div>\r\n                                    <div class=\"col-md-12\">\r\n                                        <div [ngClass]=\"{ 'is-invalid': isFormSubmitted && collectionControl.page_description.errors }\" class=\"form-group\">\r\n                                            <label for=\"page_description\">{{'collections.create.fields.page_description' | translate}}\r\n                                            </label>\r\n                                            <textarea [ngClass]=\"{ 'is-invalid': isFormSubmitted && collectionControl.page_description.errors }\" class=\"form-control\" formControlName=\"page_description\" id=\"page_description\" name=\"page_description\" placeholder=\"{{'collections.create.placeholders.placeholder8' | translate}}\"></textarea>\r\n                                            <div *ngIf=\"isFormSubmitted && collectionControl.page_description.errors\" class=\"invalid-feedback\">\r\n                                                <div *ngIf=\"collectionControl.page_description.errors.required\">{{'collections.create.error_messages.message2' | translate}}</div>\r\n                                            </div>\r\n                                        </div>\r\n                                    </div>\r\n                                    <div class=\"col-md-12\">\r\n                                        <div [ngClass]=\"{ 'is-invalid': isFormSubmitted && collectionControl.url_and_handle.errors }\" class=\"form-group\">\r\n                                            <label for=\"url_and_handle\">{{'collections.create.fields.url_and_handle' | translate}}&nbsp;<span class=\"text-danger\">*</span>\r\n                                            </label>\r\n                                            <input [ngClass]=\"{ 'is-invalid': isFormSubmitted && collectionControl.url_and_handle.errors }\" class=\"form-control\" formControlName=\"url_and_handle\" id=\"url_and_handle\" placeholder=\"{{'collections.create.placeholders.placeholder9' | translate }}\" type=\"text\"/>\r\n                                            <div *ngIf=\"isFormSubmitted && collectionControl.url_and_handle.errors\" class=\"invalid-feedback\">\r\n                                                <div *ngIf=\"collectionControl.url_and_handle.errors.required\">{{'collections.create.error_messages.message3' | translate}}</div>\r\n                                            </div>\r\n                                        </div>\r\n                                    </div>\r\n                                    <div class=\"col-md-12\">\r\n                                        <div class=\"form-group\">\r\n                                            <label for=\"seo\">{{'seo.create.fields.meta' | translate}}</label>\r\n                                            <ng-select (add)=\"onAddMetaTag($event)\" (remove)=\"onRemoveMetaTag($event)\" [clearable]=\"false\" [multiple]=\"true\" [items]=\"seoData\" [searchable]=\"true\" [selectOnTab]=\"true\" bindLabel=\"label\" bindValue=\"id\" formControlName=\"seo\" labelForId=\"seo\" placeholder=\"{{'seo.create.placeholders.placeholder6' | translate}}\" [hideSelected]=\"true\">\r\n                                                <ng-template let-item=\"item\" ng-option-tmp>\r\n                                                    {{item.label}}\r\n                                                </ng-template>\r\n                                            </ng-select>\r\n                                        </div>\r\n                                    </div>\r\n                                    <div class=\"px-2\">\r\n                                        <div class=\"table-responsive-xs table-responsive-sm table-responsive-md table-responsive-lg table-responsive-xl\" formArrayName=\"seoData\">\r\n                                            <table class=\"table table-bordered table-hover b4-datatable\" id=\"variations_table\" width=\"100%\">\r\n                                                <thead>\r\n                                                <tr>\r\n                                                    <th>{{'seo.create.fields.stt' | translate}}</th>\r\n                                                    <th >{{'seo.create.fields.meta' | translate}}</th>\r\n                                                    <th>{{'seo.create.fields.content' | translate}}</th>\r\n                                                </tr>\r\n                                                </thead>\r\n                                                <tbody>\r\n                                                <tr  *ngFor=\"let seo of editCollectionForm.controls.seoData.controls; let i=index\" [formGroupName]=\"i\">\r\n                                                    <td>\r\n                                                        <label>{{i+1}}</label>\r\n                                                    </td>\r\n                                                    <td >\r\n                                                        <div class=\"form-group\">\r\n                                                            <label>{{editCollectionForm.value.seoData[i]['meta']}}</label>\r\n                                                        </div>\r\n                                                    </td>\r\n                                                    <td>\r\n                                                        <div class=\"form-group\">\r\n                                                            <textarea class=\"form-control\" formControlName=\"content\"  name=\"description\" placeholder=\"{{'seo.create.placeholders.placeholder7' | translate}}\"></textarea>\r\n                                                        </div>\r\n                                                    </td>\r\n                                                </tr>\r\n                                                </tbody>\r\n                                            </table>\r\n                                        </div>\r\n                                    </div>\r\n                                </div>\r\n                            </div>\r\n                        </div>\r\n                    </div>\r\n                </div>\r\n            </div>\r\n            <div class=\"col-md-4\">\r\n                <div class=\"card\">\r\n                    <div class=\"card-body\">\r\n                        <div class=\"px-3\">\r\n                            <div class=\"form-body\">\r\n                                <div class=\"row\">\r\n                                    <div class=\"col-md-12\">\r\n                                        <div [ngClass]=\"{ 'is-invalid': isFormSubmitted && collectionControl.active.errors }\" class=\"form-group mg-t-1rem\">\r\n                                            <label for=\"active\">{{'collections.create.fields.status' | translate}}&nbsp;<span class=\"text-danger\">*</span>\r\n                                            </label>\r\n                                            <ng-select [items]=\"liststatus\" [searchable]=\"false\" [selectOnTab]=\"true\" bindValue=\"value\" formControlName=\"active\" labelForId=\"active\" placeholder=\"{{'collections.create.placeholders.placeholder4' | translate}}\"></ng-select>\r\n                                            <!--                                            <input [ngClass]=\"{ 'is-invalid': isFormSubmitted && collectionControl.status.errors }\" class=\"form-control\" formControlName=\"status\" id=\"status\" placeholder=\"{{'collections.create.placeholders.placeholder2' | translate }}\" type=\"text\"/>-->\r\n                                            <div *ngIf=\"isFormSubmitted && collectionControl.active.errors\" class=\"invalid-feedback\">\r\n                                                <div *ngIf=\"collectionControl.active.errors.required\">{{'collections.create.error_messages.message4' | translate}}</div>\r\n                                            </div>\r\n                                        </div>\r\n                                    </div>\r\n                                </div>\r\n                            </div>\r\n                        </div>\r\n                    </div>\r\n                </div>\r\n                <!-- <div class=\"card\">\r\n                    <div class=\"card-body\">\r\n                        <div class=\"px-3\">\r\n                            <div class=\"form-body\">\r\n                                <div class=\"row\">\r\n                                    <div class=\"col-md-12\">\r\n                                        <div [ngClass]=\"{ 'is-invalid': isFormSubmitted && collectionControl.keyword.errors }\" class=\"form-group mg-t-1rem\">\r\n                                            <label for=\"keyword\">{{'collections.create.fields.keyword' | translate}}\r\n                                            </label>\r\n                                            <input [ngClass]=\"{ 'is-invalid': isFormSubmitted && collectionControl.keyword.errors }\" class=\"form-control\" formControlName=\"keyword\" id=\"keyword\" placeholder=\"{{'collections.create.placeholders.placeholder5' | translate }}\" type=\"text\"/>\r\n                                            <div *ngIf=\"isFormSubmitted && collectionControl.keyword.errors\" class=\"invalid-feedback\">\r\n                                                <div *ngIf=\"collectionControl.keyword.errors.required\">{{'collections.create.error_messages.message2' | translate}}</div>\r\n                                            </div>\r\n                                        </div>\r\n                                    </div>\r\n                                </div>\r\n                            </div>\r\n                        </div>\r\n                    </div>\r\n                </div> -->\r\n                <div class=\"card\">\r\n                    <div class=\"card-body\">\r\n                        <div class=\"px-3\">\r\n                            <div class=\"form-body\">\r\n                                <div class=\"row\">\r\n                                    <div class=\"col-md-12\">\r\n                                        <div [ngClass]=\"{ 'is-invalid': isFormSubmitted && collectionControl.avatar.errors }\" class=\"form-group mg-t-1rem\">\r\n                                            <label for=\"avatar\">{{'collections.create.fields.avatar' | translate}}&nbsp;<span class=\"text-danger\">*</span>\r\n                                            </label>\r\n                                            <input formControlName=\"avatar\" type=\"hidden\">\r\n                                            <div #logodropzone class=\"dropzone dz-clickable\">\r\n                                                <div *ngIf=\"isLogoLoaded && collection.avatar\" class=\"dz-preview dz-image-preview\">\r\n                                                    <div class=\"dz-image\">\r\n                                                        <img height=\"100\" src=\"{{apiUrl}}/uploads/project/{{collection.avatar}}\" width=\"100\"/>\r\n                                                    </div>\r\n                                                    <a (click)=\"removeDropzoneImage()\" class=\"btn btn-sm btn-block\">{{ 'common.remove_file' | translate }}</a>\r\n                                                </div>\r\n                                                <div class=\"dz-default dz-message\">\r\n                                                    <span><strong>{{'collections.create.placeholders.placeholder10' | translate }}</strong></span>\r\n                                                </div>\r\n                                            </div>\r\n                                        </div>\r\n                                    </div>\r\n                                </div>\r\n                            </div>\r\n                        </div>\r\n                    </div>\r\n                </div>\r\n                <div class=\"card\">\r\n                    <div class=\"card-body\">\r\n                        <div class=\"px-3\">\r\n                            <div class=\"form-body\">\r\n                                <div class=\"row\">\r\n                                    <div class=\"col-md-12\">\r\n                                        <div [ngClass]=\"{ 'is-invalid': isFormSubmitted && collectionControl.pages_id.errors }\" class=\"form-group mg-t-1rem\">\r\n                                            <label for=\"pages_id\">{{'collections.create.fields.template' | translate}}&nbsp;<span class=\"text-danger\">*</span>\r\n                                            </label>\r\n                                            <ng-select [items]=\"listTemplate\" [searchable]=\"true\" [selectOnTab]=\"true\" bindLabel=\"name\" bindValue=\"id\" formControlName=\"pages_id\" labelForId=\"pages_id\" placeholder=\"{{'collections.create.placeholders.placeholder6' | translate}}\"></ng-select>\r\n                                            <!--                                            <input [ngClass]=\"{ 'is-invalid': isFormSubmitted && collectionControl.template.errors }\" class=\"form-control\" formControlName=\"template\" id=\"template\" placeholder=\"{{'collections.create.placeholders.placeholder6' | translate }}\" type=\"text\"/>-->\r\n                                            <div *ngIf=\"isFormSubmitted && collectionControl.pages_id.errors\" class=\"invalid-feedback\">\r\n                                                <div *ngIf=\"collectionControl.pages_id.errors.required\">{{'collections.create.error_messages.message2' | translate}}</div>\r\n                                            </div>\r\n                                        </div>\r\n                                    </div>\r\n                                </div>\r\n                            </div>\r\n                        </div>\r\n                    </div>\r\n                </div>\r\n            </div>\r\n            <div class=\"col-md-12\">\r\n                <div class=\"card\">\r\n                    <div class=\"card-body\">\r\n                        <div class=\"px-3\">\r\n                            <div class=\"form-body\">\r\n                                <div class=\"row mb-3\">\r\n                                    <div class=\"col-md-12 text-right pt-3\">\r\n                                        <a [routerLink]=\"urlPage\" class=\"btn btn-cancel mb-0\">{{'common.cancel' | translate }}</a>\r\n                                        <button class=\"btn btn-submit mb-0\" type=\"submit\">{{'common.create' | translate }}</button>\r\n                                    </div>\r\n                                </div>\r\n                            </div>\r\n                        </div>\r\n                    </div>\r\n                </div>\r\n            </div>\r\n        </div>\r\n    </form>\r\n</section>\r\n");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/modules/posts/collections/pages/collection-lists/collection-lists.component.html":
/*!****************************************************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/modules/posts/collections/pages/collection-lists/collection-lists.component.html ***!
  \****************************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<section class=\"hide_empty_message\">\r\n    <div class=\"row\">\r\n        <div class=\"col-sm-12\">\r\n            <div class=\"card pl-2 pr-2\">\r\n                <div class=\"card-header pl-0 pr-0 border-bottom\">\r\n                    <h4 class=\"main-title mt-2\"><span>{{'collections.title' | translate}}</span></h4>\r\n                    <div *ngxPermissionsOnly=\"['admin', 'super_admin', 'collections_create']\" class=\"card-buttons\">\r\n                        <a [routerLink]=\"getUrl('create', '')\" class=\"btn btn-create mb-0\" tooltip=\"{{'common.create' | translate}}\"><i class=\"fa fa-plus\"></i></a>\r\n                    </div>\r\n                </div>\r\n                <div class=\"card-content pt-3 pb-3\">\r\n                    <div class=\"card-body\">\r\n                        <div class=\"row\">\r\n                            <div class=\"col-sm-12\">\r\n                                <div class=\"table-responsive-xs table-responsive-sm table-responsive-md table-responsive-lg table-responsive-xl\">\r\n                                    <table [dtOptions]=\"dtOptions\" [dtTrigger]=\"dtTrigger\" class=\"table table-bordered table-hover b4-datatable\" datatable id=\"collection_table\" width=\"100%\">\r\n                                        <thead>\r\n                                        <tr>\r\n                                            <th>{{'collections.columns.name' | translate}}</th>\r\n                                            <th>{{'collections.columns.description' | translate}}</th>\r\n                                            <th>{{'common.actions' | translate}}</th>\r\n                                        </tr>\r\n                                        </thead>\r\n                                        <tbody>\r\n                                        <tr *ngFor=\"let collection of collections; index as i\">\r\n                                            <td>\r\n                                                <a class=\"\" href=\"{{apiUrl}}/{{collection.url}}{{collection.prefix}}{{collection.alias}}\" placement=\"top\" target=\"_blank\" tooltip=\"{{'common.view' | translate}}\">{{collection.name}}</a>\r\n                                            </td>\r\n                                            <td>{{collection.description}}</td>\r\n                                            <td class=\"actions-dropdown\">\r\n                                                <div class=\"btn-group\" dropdown>\r\n                                                    <button aria-controls=\"dropdown-basic-1\" class=\"dropdown-toggle btn-action\" dropdownToggle id=\"button-basic-1\" type=\"button\">\r\n                                                        <i class=\"fa fa-ellipsis-v\"></i></button>\r\n                                                    <ul *dropdownMenu aria-labelledby=\"button-basic-1\" class=\"dropdown-menu animated fadeIn\" id=\"dropdown-basic-1\" role=\"menu\">\r\n                                                        <li role=\"menuitem\">\r\n                                                            <a *ngxPermissionsOnly=\"['admin', 'super_admin', 'collections_edit']\" [routerLink]=\"getUrl('edit', collection.id)\" class=\"dropdown-item btn btn-edit btn-raised\"><i class=\"fa fa-pencil-square-o\" tooltip=\"{{'common.edit' | translate}}\"></i></a>\r\n                                                        </li>\r\n                                                        <li role=\"menuitem\">\r\n                                                            <a (click)=\"deleteCollection(collection.id)\" *ngxPermissionsOnly=\"['admin', 'super_admin', 'collections_delete']\" class=\"dropdown-item btn btn-delete btn-raised\"><i class=\"fa fa-trash-o\" tooltip=\"{{'common.delete' | translate}}\"></i></a>\r\n                                                        </li>\r\n                                                    </ul>\r\n                                                </div>\r\n                                            </td>\r\n                                        </tr>\r\n                                        </tbody>\r\n                                        <tfoot *ngIf=\"collections?.length == 0\" class=\"tfoot_dt\">\r\n                                        <tr>\r\n                                            <td class=\"no-data-available text-center\" colspan=\"3\">{{'common.datatable.sEmptyTable' | translate}}</td>\r\n                                        </tr>\r\n                                        </tfoot>\r\n                                    </table>\r\n                                </div>\r\n                            </div>\r\n                        </div>\r\n                    </div>\r\n                </div>\r\n            </div>\r\n        </div>\r\n    </div>\r\n</section>\r\n");

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

/***/ "./src/app/modules/posts/collections/collections-routing.module.ts":
/*!*************************************************************************!*\
  !*** ./src/app/modules/posts/collections/collections-routing.module.ts ***!
  \*************************************************************************/
/*! exports provided: CollectionsRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CollectionsRoutingModule", function() { return CollectionsRoutingModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var ngx_permissions__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ngx-permissions */ "./node_modules/ngx-permissions/ngx-permissions.umd.js");
/* harmony import */ var ngx_permissions__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(ngx_permissions__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _pages_collection_lists_collection_lists_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./pages/collection-lists/collection-lists.component */ "./src/app/modules/posts/collections/pages/collection-lists/collection-lists.component.ts");
/* harmony import */ var _pages_collection_create_collection_create_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./pages/collection-create/collection-create.component */ "./src/app/modules/posts/collections/pages/collection-create/collection-create.component.ts");
/* harmony import */ var _pages_collection_edit_collection_edit_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./pages/collection-edit/collection-edit.component */ "./src/app/modules/posts/collections/pages/collection-edit/collection-edit.component.ts");







// import {CollectionViewComponent} from './pages/collection-view/collection-view.component';
var routes = [{
        path: '',
        children: [
            {
                path: '',
                canActivate: [ngx_permissions__WEBPACK_IMPORTED_MODULE_3__["NgxPermissionsGuard"]],
                component: _pages_collection_lists_collection_lists_component__WEBPACK_IMPORTED_MODULE_4__["CollectionListsComponent"]
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
                        only: ['admin', 'super_admin', 'collections_create']
                    }
                },
                component: _pages_collection_create_collection_create_component__WEBPACK_IMPORTED_MODULE_5__["CollectionCreateComponent"]
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
                        only: ['admin', 'super_admin', 'collections_edit']
                    }
                },
                component: _pages_collection_edit_collection_edit_component__WEBPACK_IMPORTED_MODULE_6__["CollectionEditComponent"]
            },
        ]
    }
];
var CollectionsRoutingModule = /** @class */ (function () {
    function CollectionsRoutingModule() {
    }
    CollectionsRoutingModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)],
            exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]]
        })
    ], CollectionsRoutingModule);
    return CollectionsRoutingModule;
}());



/***/ }),

/***/ "./src/app/modules/posts/collections/collections.module.ts":
/*!*****************************************************************!*\
  !*** ./src/app/modules/posts/collections/collections.module.ts ***!
  \*****************************************************************/
/*! exports provided: CollectionsModule, HttpLoaderFactory */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CollectionsModule", function() { return CollectionsModule; });
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
/* harmony import */ var _collections_routing_module__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ./collections-routing.module */ "./src/app/modules/posts/collections/collections-routing.module.ts");
/* harmony import */ var _shared_shared_module__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ../../../shared/shared.module */ "./src/app/shared/shared.module.ts");
/* harmony import */ var _pages_collection_lists_collection_lists_component__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! ./pages/collection-lists/collection-lists.component */ "./src/app/modules/posts/collections/pages/collection-lists/collection-lists.component.ts");
/* harmony import */ var _pages_collection_create_collection_create_component__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! ./pages/collection-create/collection-create.component */ "./src/app/modules/posts/collections/pages/collection-create/collection-create.component.ts");
/* harmony import */ var _pages_collection_edit_collection_edit_component__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! ./pages/collection-edit/collection-edit.component */ "./src/app/modules/posts/collections/pages/collection-edit/collection-edit.component.ts");


















// import {CollectionViewComponent} from './pages/collection-view/collection-view.component';
var CollectionsModule = /** @class */ (function () {
    function CollectionsModule() {
    }
    CollectionsModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            declarations: [
                _pages_collection_lists_collection_lists_component__WEBPACK_IMPORTED_MODULE_15__["CollectionListsComponent"],
                _pages_collection_create_collection_create_component__WEBPACK_IMPORTED_MODULE_16__["CollectionCreateComponent"],
                _pages_collection_edit_collection_edit_component__WEBPACK_IMPORTED_MODULE_17__["CollectionEditComponent"],
            ],
            imports: [
                _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
                _collections_routing_module__WEBPACK_IMPORTED_MODULE_13__["CollectionsRoutingModule"],
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
                ngx_bootstrap__WEBPACK_IMPORTED_MODULE_5__["CollapseModule"]
            ],
        })
    ], CollectionsModule);
    return CollectionsModule;
}());

// Required for AOT compilation
function HttpLoaderFactory(http) {
    return new _ngx_translate_http_loader__WEBPACK_IMPORTED_MODULE_11__["TranslateHttpLoader"](http, './assets/i18n/', '.json');
}


/***/ }),

/***/ "./src/app/modules/posts/collections/pages/collection-create/collection-create.component.scss":
/*!****************************************************************************************************!*\
  !*** ./src/app/modules/posts/collections/pages/collection-create/collection-create.component.scss ***!
  \****************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = (".mg-t-1rem {\n  margin-top: 1rem;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvbW9kdWxlcy9wb3N0cy9jb2xsZWN0aW9ucy9wYWdlcy9jb2xsZWN0aW9uLWNyZWF0ZS9DOlxcVXNlcnNcXHRodWFuXFxPbmVEcml2ZVxcRGVza3RvcFxcZ2xhdmFsLXRodWFuZGluaC9zcmNcXGFwcFxcbW9kdWxlc1xccG9zdHNcXGNvbGxlY3Rpb25zXFxwYWdlc1xcY29sbGVjdGlvbi1jcmVhdGVcXGNvbGxlY3Rpb24tY3JlYXRlLmNvbXBvbmVudC5zY3NzIiwic3JjL2FwcC9tb2R1bGVzL3Bvc3RzL2NvbGxlY3Rpb25zL3BhZ2VzL2NvbGxlY3Rpb24tY3JlYXRlL2NvbGxlY3Rpb24tY3JlYXRlLmNvbXBvbmVudC5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0ksZ0JBQUE7QUNDSiIsImZpbGUiOiJzcmMvYXBwL21vZHVsZXMvcG9zdHMvY29sbGVjdGlvbnMvcGFnZXMvY29sbGVjdGlvbi1jcmVhdGUvY29sbGVjdGlvbi1jcmVhdGUuY29tcG9uZW50LnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyIubWctdC0xcmVtIHtcclxuICAgIG1hcmdpbi10b3A6IDFyZW07XHJcbn1cclxuIiwiLm1nLXQtMXJlbSB7XG4gIG1hcmdpbi10b3A6IDFyZW07XG59Il19 */");

/***/ }),

/***/ "./src/app/modules/posts/collections/pages/collection-create/collection-create.component.ts":
/*!**************************************************************************************************!*\
  !*** ./src/app/modules/posts/collections/pages/collection-create/collection-create.component.ts ***!
  \**************************************************************************************************/
/*! exports provided: CollectionCreateComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CollectionCreateComponent", function() { return CollectionCreateComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var ngx_toastr__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ngx-toastr */ "./node_modules/ngx-toastr/fesm5/ngx-toastr.js");
/* harmony import */ var _ngx_translate_core__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @ngx-translate/core */ "./node_modules/@ngx-translate/core/fesm5/ngx-translate-core.js");
/* harmony import */ var _core_services_collections_service__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../../../../../core/services/collections.service */ "./src/app/core/services/collections.service.ts");
/* harmony import */ var _core_services_item_service__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../../../../../core/services/item.service */ "./src/app/core/services/item.service.ts");
/* harmony import */ var _core_services_client_service__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../../../../../core/services/client.service */ "./src/app/core/services/client.service.ts");
/* harmony import */ var _core_services_tax_service__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ../../../../../core/services/tax.service */ "./src/app/core/services/tax.service.ts");
/* harmony import */ var _core_services_authentication_service__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ../../../../../core/services/authentication.service */ "./src/app/core/services/authentication.service.ts");
/* harmony import */ var _core_services_categorys_service__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ../../../../../core/services/categorys.service */ "./src/app/core/services/categorys.service.ts");
/* harmony import */ var src_app_core_services_seo_service__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! src/app/core/services/seo.service */ "./src/app/core/services/seo.service.ts");
/* harmony import */ var dropzone__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! dropzone */ "./node_modules/dropzone/dist/dropzone.js");
/* harmony import */ var dropzone__WEBPACK_IMPORTED_MODULE_14___default = /*#__PURE__*/__webpack_require__.n(dropzone__WEBPACK_IMPORTED_MODULE_14__);







// import {CollectionSettingService} from '../../../../../core/services/collection-setting.service';








var CollectionCreateComponent = /** @class */ (function () {
    function CollectionCreateComponent(translate, datepipe, router, formBuilder, toastr, categorysService, collectionsService, clientService, seoService, itemService, taxService, 
    // private collectionSettingService: CollectionSettingService,
    authenticationService) {
        var _this_1 = this;
        this.translate = translate;
        this.datepipe = datepipe;
        this.router = router;
        this.formBuilder = formBuilder;
        this.toastr = toastr;
        this.categorysService = categorysService;
        this.collectionsService = collectionsService;
        this.clientService = clientService;
        this.seoService = seoService;
        this.itemService = itemService;
        this.taxService = taxService;
        this.authenticationService = authenticationService;
        this.liststatus = [
            { value: 'yes', label: 'Show' },
            { value: 'no', label: 'Hide' },
        ];
        this.listCondition = [
            { value: 0, label: '>' },
            { value: 1, label: '<' },
            { value: 2, label: '=' }
        ];
        this.listFilterType = [
            { value: 0, label: 'Select' },
            { value: 1, label: 'Auto' },
        ];
        this.listFilterProductNeed = [
            { value: 0, label: 'All Conditions' },
            { value: 1, label: 'Any condition' },
        ];
        this.listFilterCondition = [
            { type: 0, condition: null, value: null, name: "Price" },
            { type: 1, condition: null, value: null, name: "Compare Price" },
        ];
        this.listcollections = [];
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
        this.isCollapsedHead3 = false;
        this.authenticationService.loginUser.subscribe(function (x) { return _this_1.loginUser = x; });
    }
    Object.defineProperty(CollectionCreateComponent.prototype, "collectionControl", {
        get: function () {
            return this.createCollectionForm.controls;
        },
        enumerable: true,
        configurable: true
    });
    CollectionCreateComponent.prototype.ngOnInit = function () {
        if (this.router.url === '/productcollections/create') {
            this.moduletype = 'products';
            this.urlPage = '/productcollections';
        }
        else {
            this.moduletype = 'news';
            this.urlPage = '/newscollections';
        }
        this.getTemplate();
        this.getAllMeta();
        this.getCategorys();
    };
    CollectionCreateComponent.prototype.loadForm = function () {
        var that = this;
        this.createCollectionForm = this.formBuilder.group({
            name: [null, _angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].required],
            description: [null],
            page_title: [null],
            page_description: [null],
            avatar: [null, _angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].required],
            url_and_handle: [null, _angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].required],
            active: [null, _angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].required],
            keyword: [null],
            condition_type: [null],
            type: [0],
            conditions: [],
            seoData: this.formBuilder.array([]),
            filter: this.formBuilder.array([]),
            seo: [null],
            po_types_indentify: [this.moduletype],
            pages_id: [null, _angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].required],
        });
        setTimeout(function () {
            that.loadDropzone();
        });
        // for (let filterCondition of this.listFilterCondition) {
        //     this.addFilterCondition(filterCondition);
        // }
        this.isFormLoaded = true;
    };
    CollectionCreateComponent.prototype.getAllMeta = function () {
        var _this_1 = this;
        this.seoService.getAllMeta()
            .subscribe(function (data) {
            _this_1.seoData = data;
        });
    };
    CollectionCreateComponent.prototype.getFilterCondition = function (data) {
        return this.formBuilder.group({
            type: [data.type, _angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].required],
            name: [data.name],
            condition: [null, _angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].required],
            value: [null, _angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].required]
        });
    };
    Object.defineProperty(CollectionCreateComponent.prototype, "controllFilter", {
        get: function () {
            return this.createCollectionForm.get('filter');
        },
        enumerable: true,
        configurable: true
    });
    CollectionCreateComponent.prototype.addFilterCondition = function (data) {
        var controlFilter = this.createCollectionForm.controls['filter'];
        controlFilter.push(this.getFilterCondition(data));
    };
    CollectionCreateComponent.prototype.onAddFilterCondition = function (even) {
        var control = this.createCollectionForm.controls['filter'];
        control.push(this.getFilterCondition(even));
    };
    CollectionCreateComponent.prototype.onRemoveFilterCondition = function (even) {
        for (var i = 0; i < this.createCollectionForm.value.filter.length; ++i) {
            if (even.value.type == this.createCollectionForm.value.filter[i].type) {
                this.createCollectionForm.get('filter').removeAt(i);
            }
        }
    };
    CollectionCreateComponent.prototype.getSeoData = function (data) {
        return this.formBuilder.group({
            meta: [data.label, _angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].required],
            meta_id: [data.id, _angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].required],
            content: [null]
        });
    };
    CollectionCreateComponent.prototype.addSeoData = function (data) {
        var control = this.createCollectionForm.controls['seoData'];
        control.push(this.getSeoData(data));
    };
    CollectionCreateComponent.prototype.onAddMetaTag = function (even) {
        var control = this.createCollectionForm.controls['seoData'];
        control.push(this.getSeoData(even));
    };
    CollectionCreateComponent.prototype.onRemoveMetaTag = function (even) {
        for (var i = 0; i < this.createCollectionForm.value.seoData.length; ++i) {
            if (even.value.id == this.createCollectionForm.value.seoData[i].meta_id) {
                this.createCollectionForm.get('seoData').removeAt(i);
            }
        }
    };
    CollectionCreateComponent.prototype.getCategorys = function () {
        var _this_1 = this;
        this.categorysService.getAll().subscribe(function (data) {
            _this_1.listcategorys = data;
            _this_1.loadForm();
        });
    };
    CollectionCreateComponent.prototype.changeFilterType = function (data) {
        console.log(data);
    };
    CollectionCreateComponent.prototype.getTemplate = function () {
        var _this_1 = this;
        this.collectionsService.getTemplate().subscribe(function (data) {
            _this_1.listTemplate = data;
        });
    };
    CollectionCreateComponent.prototype.onSubmit = function () {
        var _this_1 = this;
        this.isFormSubmitted = true;
        if (this.createCollectionForm.invalid) {
            return;
        }
        this.collectionsService.create(this.createCollectionForm.value)
            .subscribe(function (data) {
            _this_1.toastr.success(_this_1.translate.instant('collections.messages.create'), _this_1.translate.instant('collections.title'));
            if (_this_1.moduletype === 'products') {
                _this_1.router.navigate(['productcollections']);
            }
            else {
                _this_1.router.navigate(['newscollections']);
            }
        });
    };
    CollectionCreateComponent.prototype.loadDropzone = function () {
        var that = this;
        new dropzone__WEBPACK_IMPORTED_MODULE_14__(this.logodropzone.nativeElement, {
            url: 'https://httpbin.org/post',
            maxFiles: 1,
            clickable: true,
            acceptedFiles: 'image/*',
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
                            that.createCollectionForm.patchValue({ avatar: reader_1.result });
                        };
                        reader_1.readAsDataURL(file);
                    }
                });
                this.on('removedfile', function (file) {
                    that.createCollectionForm.patchValue({ avatar: null });
                });
                this.on('error', function (file, message) {
                    if (file) {
                        that.toastr.error(message);
                    }
                });
            }
        });
    };
    CollectionCreateComponent.ctorParameters = function () { return [
        { type: _ngx_translate_core__WEBPACK_IMPORTED_MODULE_6__["TranslateService"] },
        { type: _angular_common__WEBPACK_IMPORTED_MODULE_2__["DatePipe"] },
        { type: _angular_router__WEBPACK_IMPORTED_MODULE_4__["Router"] },
        { type: _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormBuilder"] },
        { type: ngx_toastr__WEBPACK_IMPORTED_MODULE_5__["ToastrService"] },
        { type: _core_services_categorys_service__WEBPACK_IMPORTED_MODULE_12__["CategorysService"] },
        { type: _core_services_collections_service__WEBPACK_IMPORTED_MODULE_7__["CollectionsService"] },
        { type: _core_services_client_service__WEBPACK_IMPORTED_MODULE_9__["ClientService"] },
        { type: src_app_core_services_seo_service__WEBPACK_IMPORTED_MODULE_13__["SeoService"] },
        { type: _core_services_item_service__WEBPACK_IMPORTED_MODULE_8__["ItemService"] },
        { type: _core_services_tax_service__WEBPACK_IMPORTED_MODULE_10__["TaxService"] },
        { type: _core_services_authentication_service__WEBPACK_IMPORTED_MODULE_11__["AuthenticationService"] }
    ]; };
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewChild"])('logodropzone', { static: false }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", _angular_core__WEBPACK_IMPORTED_MODULE_1__["ElementRef"])
    ], CollectionCreateComponent.prototype, "logodropzone", void 0);
    CollectionCreateComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-collection-create',
            template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./collection-create.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/modules/posts/collections/pages/collection-create/collection-create.component.html")).default,
            providers: [_angular_common__WEBPACK_IMPORTED_MODULE_2__["DatePipe"]],
            styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./collection-create.component.scss */ "./src/app/modules/posts/collections/pages/collection-create/collection-create.component.scss")).default]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_ngx_translate_core__WEBPACK_IMPORTED_MODULE_6__["TranslateService"],
            _angular_common__WEBPACK_IMPORTED_MODULE_2__["DatePipe"],
            _angular_router__WEBPACK_IMPORTED_MODULE_4__["Router"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormBuilder"],
            ngx_toastr__WEBPACK_IMPORTED_MODULE_5__["ToastrService"],
            _core_services_categorys_service__WEBPACK_IMPORTED_MODULE_12__["CategorysService"],
            _core_services_collections_service__WEBPACK_IMPORTED_MODULE_7__["CollectionsService"],
            _core_services_client_service__WEBPACK_IMPORTED_MODULE_9__["ClientService"],
            src_app_core_services_seo_service__WEBPACK_IMPORTED_MODULE_13__["SeoService"],
            _core_services_item_service__WEBPACK_IMPORTED_MODULE_8__["ItemService"],
            _core_services_tax_service__WEBPACK_IMPORTED_MODULE_10__["TaxService"],
            _core_services_authentication_service__WEBPACK_IMPORTED_MODULE_11__["AuthenticationService"]])
    ], CollectionCreateComponent);
    return CollectionCreateComponent;
}());



/***/ }),

/***/ "./src/app/modules/posts/collections/pages/collection-edit/collection-edit.component.scss":
/*!************************************************************************************************!*\
  !*** ./src/app/modules/posts/collections/pages/collection-edit/collection-edit.component.scss ***!
  \************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = (".ng-select.ng-select-single .ng-select-container {\n  min-width: 500px;\n}\n\n.inp {\n  border: none;\n  border-bottom: 1px solid #e8eef3;\n  padding: 5px 10px;\n  outline: none;\n  width: 100%;\n}\n\n[placeholder]:focus::-webkit-input-placeholder {\n  transition: text-indent 0.4s 0.4s ease;\n  text-indent: -100%;\n  opacity: 1;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvbW9kdWxlcy9wb3N0cy9jb2xsZWN0aW9ucy9wYWdlcy9jb2xsZWN0aW9uLWVkaXQvQzpcXFVzZXJzXFx0aHVhblxcT25lRHJpdmVcXERlc2t0b3BcXGdsYXZhbC10aHVhbmRpbmgvc3JjXFxhcHBcXG1vZHVsZXNcXHBvc3RzXFxjb2xsZWN0aW9uc1xccGFnZXNcXGNvbGxlY3Rpb24tZWRpdFxcY29sbGVjdGlvbi1lZGl0LmNvbXBvbmVudC5zY3NzIiwic3JjL2FwcC9tb2R1bGVzL3Bvc3RzL2NvbGxlY3Rpb25zL3BhZ2VzL2NvbGxlY3Rpb24tZWRpdC9jb2xsZWN0aW9uLWVkaXQuY29tcG9uZW50LnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFFSSxnQkFBQTtBQ0FKOztBREdBO0VBQ0ksWUFBQTtFQUNBLGdDQUFBO0VBQ0EsaUJBQUE7RUFDQSxhQUFBO0VBQ0EsV0FBQTtBQ0FKOztBREdBO0VBQ0ksc0NBQUE7RUFDQSxrQkFBQTtFQUNBLFVBQUE7QUNBSiIsImZpbGUiOiJzcmMvYXBwL21vZHVsZXMvcG9zdHMvY29sbGVjdGlvbnMvcGFnZXMvY29sbGVjdGlvbi1lZGl0L2NvbGxlY3Rpb24tZWRpdC5jb21wb25lbnQuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIi5uZy1zZWxlY3Qubmctc2VsZWN0LXNpbmdsZVxyXG4ubmctc2VsZWN0LWNvbnRhaW5lciB7XHJcbiAgICBtaW4td2lkdGg6IDUwMHB4O1xyXG59XHJcblxyXG4uaW5wIHtcclxuICAgIGJvcmRlcjogbm9uZTtcclxuICAgIGJvcmRlci1ib3R0b206IDFweCBzb2xpZCAjZThlZWYzO1xyXG4gICAgcGFkZGluZzogNXB4IDEwcHg7XHJcbiAgICBvdXRsaW5lOiBub25lO1xyXG4gICAgd2lkdGg6IDEwMCU7XHJcbn1cclxuXHJcbltwbGFjZWhvbGRlcl06Zm9jdXM6Oi13ZWJraXQtaW5wdXQtcGxhY2Vob2xkZXIge1xyXG4gICAgdHJhbnNpdGlvbjogdGV4dC1pbmRlbnQgMC40cyAwLjRzIGVhc2U7XHJcbiAgICB0ZXh0LWluZGVudDogLTEwMCU7XHJcbiAgICBvcGFjaXR5OiAxO1xyXG59XHJcbiIsIi5uZy1zZWxlY3Qubmctc2VsZWN0LXNpbmdsZSAubmctc2VsZWN0LWNvbnRhaW5lciB7XG4gIG1pbi13aWR0aDogNTAwcHg7XG59XG5cbi5pbnAge1xuICBib3JkZXI6IG5vbmU7XG4gIGJvcmRlci1ib3R0b206IDFweCBzb2xpZCAjZThlZWYzO1xuICBwYWRkaW5nOiA1cHggMTBweDtcbiAgb3V0bGluZTogbm9uZTtcbiAgd2lkdGg6IDEwMCU7XG59XG5cbltwbGFjZWhvbGRlcl06Zm9jdXM6Oi13ZWJraXQtaW5wdXQtcGxhY2Vob2xkZXIge1xuICB0cmFuc2l0aW9uOiB0ZXh0LWluZGVudCAwLjRzIDAuNHMgZWFzZTtcbiAgdGV4dC1pbmRlbnQ6IC0xMDAlO1xuICBvcGFjaXR5OiAxO1xufSJdfQ== */");

/***/ }),

/***/ "./src/app/modules/posts/collections/pages/collection-edit/collection-edit.component.ts":
/*!**********************************************************************************************!*\
  !*** ./src/app/modules/posts/collections/pages/collection-edit/collection-edit.component.ts ***!
  \**********************************************************************************************/
/*! exports provided: CollectionEditComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CollectionEditComponent", function() { return CollectionEditComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var ngx_toastr__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ngx-toastr */ "./node_modules/ngx-toastr/fesm5/ngx-toastr.js");
/* harmony import */ var _ngx_translate_core__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @ngx-translate/core */ "./node_modules/@ngx-translate/core/fesm5/ngx-translate-core.js");
/* harmony import */ var _core_services_collections_service__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../../../../../core/services/collections.service */ "./src/app/core/services/collections.service.ts");
/* harmony import */ var _core_services_item_service__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../../../../../core/services/item.service */ "./src/app/core/services/item.service.ts");
/* harmony import */ var _core_services_client_service__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../../../../../core/services/client.service */ "./src/app/core/services/client.service.ts");
/* harmony import */ var _core_services_tax_service__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ../../../../../core/services/tax.service */ "./src/app/core/services/tax.service.ts");
/* harmony import */ var _core_services_authentication_service__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ../../../../../core/services/authentication.service */ "./src/app/core/services/authentication.service.ts");
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ../../../../../../environments/environment */ "./src/environments/environment.ts");
/* harmony import */ var src_app_core_services_seo_service__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! src/app/core/services/seo.service */ "./src/app/core/services/seo.service.ts");
/* harmony import */ var dropzone__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! dropzone */ "./node_modules/dropzone/dist/dropzone.js");
/* harmony import */ var dropzone__WEBPACK_IMPORTED_MODULE_14___default = /*#__PURE__*/__webpack_require__.n(dropzone__WEBPACK_IMPORTED_MODULE_14__);















var CollectionEditComponent = /** @class */ (function () {
    function CollectionEditComponent(translate, datepipe, router, route, formBuilder, toastr, collectionService, clientService, itemService, taxService, seoService, authenticationService) {
        var _this_1 = this;
        this.translate = translate;
        this.datepipe = datepipe;
        this.router = router;
        this.route = route;
        this.formBuilder = formBuilder;
        this.toastr = toastr;
        this.collectionService = collectionService;
        this.clientService = clientService;
        this.itemService = itemService;
        this.taxService = taxService;
        this.seoService = seoService;
        this.authenticationService = authenticationService;
        this.listCondition = [
            { value: 0, label: '>' },
            { value: 1, label: '<' },
            { value: 2, label: '=' }
        ];
        this.listFilterType = [
            { value: 0, label: 'Select' },
            { value: 1, label: 'Auto' },
        ];
        this.listFilterProductNeed = [
            { value: 0, label: 'All Conditions' },
            { value: 1, label: 'Any condition' },
        ];
        this.listFilterCondition = [
            { type: 0, condition: null, value: null, name: "Price" },
            { type: 1, condition: null, value: null, name: "Compare Price" },
        ];
        this.isLogoLoaded = true;
        this.listcollections = [];
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
        this.isCollapsedHead3 = false;
        this.apiUrl = _environments_environment__WEBPACK_IMPORTED_MODULE_12__["environment"].apiUrl;
        this.authenticationService.loginUser.subscribe(function (x) { return _this_1.loginUser = x; });
        this.route.paramMap.subscribe(function (params) {
            _this_1.getById(params.get('id'));
        });
    }
    Object.defineProperty(CollectionEditComponent.prototype, "collectionControl", {
        get: function () {
            return this.editCollectionForm.controls;
        },
        enumerable: true,
        configurable: true
    });
    CollectionEditComponent.prototype.ngOnInit = function () {
        if (this.router.url.indexOf('/productcollections/edit') !== -1) {
            this.moduletype = 'products';
            this.urlPage = '/productcollections';
        }
        else {
            this.moduletype = 'news';
            this.urlPage = '/newscollections';
        }
    };
    CollectionEditComponent.prototype.loadForm = function () {
        var that = this;
        this.editCollectionForm = this.formBuilder.group({
            id: [this.collection.id, _angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].required],
            name: [this.collection.name, _angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].required],
            description: [this.collection.description],
            page_title: [this.collection.page_title],
            page_description: [this.collection.page_description],
            url_and_handle: [this.collection.url_and_handle, _angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].required],
            active: [this.collection.active, _angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].required],
            avatar: [this.collection.avatar, _angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].required],
            keyword: [this.collection.keyword],
            seoData: this.formBuilder.array([]),
            seo: [this.collection.seo],
            condition_type: [this.collection.condition_type],
            type: [this.collection.type],
            conditions: [this.collection.conditions],
            filter: this.formBuilder.array([]),
            po_types_indentify: [this.moduletype],
            pages_id: [this.collection.pages_id, _angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].required],
        });
        this.editCollectionForm.patchValue({ avatar: this.collection.avatar });
        setTimeout(function () {
            that.loadDropzone();
        });
        for (var _i = 0, _a = this.collection.seoData; _i < _a.length; _i++) {
            var seo = _a[_i];
            this.onAddMetaTag(seo);
        }
        for (var _b = 0, _c = this.collection.filter; _b < _c.length; _b++) {
            var filter = _c[_b];
            this.addFilterCondition(filter);
        }
        this.isFormLoaded = true;
    };
    CollectionEditComponent.prototype.getFilterCondition = function (data) {
        return this.formBuilder.group({
            type: [data.type, _angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].required],
            name: [data.name],
            condition: [data.condition, _angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].required],
            value: [data.value, _angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].required]
        });
    };
    Object.defineProperty(CollectionEditComponent.prototype, "controllFilter", {
        get: function () {
            return this.editCollectionForm.get('filter');
        },
        enumerable: true,
        configurable: true
    });
    CollectionEditComponent.prototype.addFilterCondition = function (data) {
        var controlFilter = this.editCollectionForm.controls['filter'];
        controlFilter.push(this.getFilterCondition(data));
    };
    CollectionEditComponent.prototype.onAddFilterCondition = function (even) {
        var control = this.editCollectionForm.controls['filter'];
        control.push(this.getFilterCondition(even));
    };
    CollectionEditComponent.prototype.onRemoveFilterCondition = function (even) {
        for (var i = 0; i < this.editCollectionForm.value.filter.length; ++i) {
            if (even.value.type == this.editCollectionForm.value.filter[i].type) {
                this.editCollectionForm.get('filter').removeAt(i);
            }
        }
    };
    CollectionEditComponent.prototype.getAllMeta = function () {
        var _this_1 = this;
        this.seoService.getAllMeta()
            .subscribe(function (data) {
            _this_1.seoData = data;
            _this_1.loadForm();
        });
    };
    CollectionEditComponent.prototype.getSeoData = function (data) {
        !data.content ? data.content = null : '';
        return this.formBuilder.group({
            meta: [data.label, _angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].required],
            meta_id: [data.id, _angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].required],
            content: [data.content]
        });
    };
    CollectionEditComponent.prototype.addSeoData = function (data) {
        var control = this.editCollectionForm.controls['seoData'];
        control.push(this.getSeoData(data));
    };
    CollectionEditComponent.prototype.onAddMetaTag = function (even) {
        var control = this.editCollectionForm.controls['seoData'];
        control.push(this.getSeoData(even));
    };
    CollectionEditComponent.prototype.onRemoveMetaTag = function (even) {
        this.editCollectionForm.get('seoData').removeAt(even.index);
    };
    CollectionEditComponent.prototype.getById = function (collectionId) {
        var _this_1 = this;
        this.collectionService.getById(collectionId).subscribe(function (data) {
            _this_1.collection = data;
            _this_1.getTemplate();
            _this_1.getCollections();
        });
    };
    CollectionEditComponent.prototype.getCollections = function () {
        var _this_1 = this;
        this.collectionService.getAll().subscribe(function (data) {
            _this_1.listcollections = data;
            _this_1.getAllMeta();
        });
    };
    CollectionEditComponent.prototype.getTemplate = function () {
        var _this_1 = this;
        this.collectionService.getTemplate().subscribe(function (data) {
            _this_1.listTemplate = data;
        });
    };
    CollectionEditComponent.prototype.onSubmit = function () {
        var _this_1 = this;
        this.isFormSubmitted = true;
        if (this.editCollectionForm.invalid) {
            return;
        }
        this.collectionService.update(this.editCollectionForm.value)
            .subscribe(function (data) {
            _this_1.toastr.success(_this_1.translate.instant('collections.messages.update'), _this_1.translate.instant('collections.title'));
            _this_1.router.navigate([_this_1.urlPage]);
        });
    };
    CollectionEditComponent.prototype.loadDropzone = function () {
        var that = this;
        this['fileDropZone'] = new dropzone__WEBPACK_IMPORTED_MODULE_14__(this.logodropzone.nativeElement, {
            url: 'https://httpbin.org/post',
            maxFiles: 1,
            clickable: true,
            acceptedFiles: 'image/*',
            createImageThumbnails: true,
            init: function () {
                var _this = this;
                that.editCollectionForm.get('avatar').value ? _this.previewsContainer.lastChild['hidden'] = true : _this.previewsContainer.lastChild['hidden'] = false;
                this.on('addedfile', function (file) {
                    var _this_1 = this;
                    var removeButton = dropzone__WEBPACK_IMPORTED_MODULE_14__["createElement"]('<button class=\'btn btn-sm btn-block\'>Remove file</button>');
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
                            that.editCollectionForm.patchValue({ avatar: reader_1.result });
                            _this_1.isLogoLoaded = false;
                        };
                        reader_1.readAsDataURL(file);
                    }
                });
                this.on('removedfile', function (file) {
                    that.editCollectionForm.patchValue({ avatar: null });
                });
                this.on('error', function (file, message) {
                    if (file) {
                        that.toastr.error(message);
                    }
                });
            }
        });
    };
    CollectionEditComponent.prototype.removeDropzoneImage = function () {
        this.isLogoLoaded = false;
        this.editCollectionForm.patchValue({ avatar: null });
        this.editCollectionForm.get('avatar').value ? this['fileDropZone'].previewsContainer.lastChild['hidden'] = true : this['fileDropZone'].previewsContainer.lastChild['hidden'] = false;
    };
    CollectionEditComponent.ctorParameters = function () { return [
        { type: _ngx_translate_core__WEBPACK_IMPORTED_MODULE_6__["TranslateService"] },
        { type: _angular_common__WEBPACK_IMPORTED_MODULE_2__["DatePipe"] },
        { type: _angular_router__WEBPACK_IMPORTED_MODULE_4__["Router"] },
        { type: _angular_router__WEBPACK_IMPORTED_MODULE_4__["ActivatedRoute"] },
        { type: _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormBuilder"] },
        { type: ngx_toastr__WEBPACK_IMPORTED_MODULE_5__["ToastrService"] },
        { type: _core_services_collections_service__WEBPACK_IMPORTED_MODULE_7__["CollectionsService"] },
        { type: _core_services_client_service__WEBPACK_IMPORTED_MODULE_9__["ClientService"] },
        { type: _core_services_item_service__WEBPACK_IMPORTED_MODULE_8__["ItemService"] },
        { type: _core_services_tax_service__WEBPACK_IMPORTED_MODULE_10__["TaxService"] },
        { type: src_app_core_services_seo_service__WEBPACK_IMPORTED_MODULE_13__["SeoService"] },
        { type: _core_services_authentication_service__WEBPACK_IMPORTED_MODULE_11__["AuthenticationService"] }
    ]; };
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewChild"])('logodropzone', { static: false }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", _angular_core__WEBPACK_IMPORTED_MODULE_1__["ElementRef"])
    ], CollectionEditComponent.prototype, "logodropzone", void 0);
    CollectionEditComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-collection-edit',
            template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./collection-edit.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/modules/posts/collections/pages/collection-edit/collection-edit.component.html")).default,
            styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./collection-edit.component.scss */ "./src/app/modules/posts/collections/pages/collection-edit/collection-edit.component.scss")).default]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_ngx_translate_core__WEBPACK_IMPORTED_MODULE_6__["TranslateService"],
            _angular_common__WEBPACK_IMPORTED_MODULE_2__["DatePipe"],
            _angular_router__WEBPACK_IMPORTED_MODULE_4__["Router"],
            _angular_router__WEBPACK_IMPORTED_MODULE_4__["ActivatedRoute"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormBuilder"],
            ngx_toastr__WEBPACK_IMPORTED_MODULE_5__["ToastrService"],
            _core_services_collections_service__WEBPACK_IMPORTED_MODULE_7__["CollectionsService"],
            _core_services_client_service__WEBPACK_IMPORTED_MODULE_9__["ClientService"],
            _core_services_item_service__WEBPACK_IMPORTED_MODULE_8__["ItemService"],
            _core_services_tax_service__WEBPACK_IMPORTED_MODULE_10__["TaxService"],
            src_app_core_services_seo_service__WEBPACK_IMPORTED_MODULE_13__["SeoService"],
            _core_services_authentication_service__WEBPACK_IMPORTED_MODULE_11__["AuthenticationService"]])
    ], CollectionEditComponent);
    return CollectionEditComponent;
}());



/***/ }),

/***/ "./src/app/modules/posts/collections/pages/collection-lists/collection-lists.component.scss":
/*!**************************************************************************************************!*\
  !*** ./src/app/modules/posts/collections/pages/collection-lists/collection-lists.component.scss ***!
  \**************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = (".hide_empty_message ::ng-deep .odd {\n  display: none;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvbW9kdWxlcy9wb3N0cy9jb2xsZWN0aW9ucy9wYWdlcy9jb2xsZWN0aW9uLWxpc3RzL0M6XFxVc2Vyc1xcdGh1YW5cXE9uZURyaXZlXFxEZXNrdG9wXFxnbGF2YWwtdGh1YW5kaW5oL3NyY1xcYXBwXFxtb2R1bGVzXFxwb3N0c1xcY29sbGVjdGlvbnNcXHBhZ2VzXFxjb2xsZWN0aW9uLWxpc3RzXFxjb2xsZWN0aW9uLWxpc3RzLmNvbXBvbmVudC5zY3NzIiwic3JjL2FwcC9tb2R1bGVzL3Bvc3RzL2NvbGxlY3Rpb25zL3BhZ2VzL2NvbGxlY3Rpb24tbGlzdHMvY29sbGVjdGlvbi1saXN0cy5jb21wb25lbnQuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNJLGFBQUE7QUNDSiIsImZpbGUiOiJzcmMvYXBwL21vZHVsZXMvcG9zdHMvY29sbGVjdGlvbnMvcGFnZXMvY29sbGVjdGlvbi1saXN0cy9jb2xsZWN0aW9uLWxpc3RzLmNvbXBvbmVudC5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLmhpZGVfZW1wdHlfbWVzc2FnZSA6Om5nLWRlZXAgLm9kZCB7XHJcbiAgICBkaXNwbGF5OiBub25lXHJcbn0iLCIuaGlkZV9lbXB0eV9tZXNzYWdlIDo6bmctZGVlcCAub2RkIHtcbiAgZGlzcGxheTogbm9uZTtcbn0iXX0= */");

/***/ }),

/***/ "./src/app/modules/posts/collections/pages/collection-lists/collection-lists.component.ts":
/*!************************************************************************************************!*\
  !*** ./src/app/modules/posts/collections/pages/collection-lists/collection-lists.component.ts ***!
  \************************************************************************************************/
/*! exports provided: CollectionListsComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CollectionListsComponent", function() { return CollectionListsComponent; });
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
/* harmony import */ var _core_services_collections_service__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ../../../../../core/services/collections.service */ "./src/app/core/services/collections.service.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");















var CollectionListsComponent = /** @class */ (function () {
    function CollectionListsComponent(translate, exportAsService, http, toastr, router, collectionsService, authenticationService) {
        var _this = this;
        this.translate = translate;
        this.exportAsService = exportAsService;
        this.http = http;
        this.toastr = toastr;
        this.router = router;
        this.collectionsService = collectionsService;
        this.authenticationService = authenticationService;
        this.dtTrigger = new rxjs__WEBPACK_IMPORTED_MODULE_9__["Subject"]();
        this.dtOptions = {};
        this.collections = [];
        this.exportAsConfig = {
            type: 'pdf',
            elementIdOrContent: 'collection_table',
        };
        this.apiUrl = _environments_environment__WEBPACK_IMPORTED_MODULE_7__["environment"].apiUrl;
        this.authenticationService.loginUser.subscribe(function (x) { return _this.loginUser = x; });
    }
    CollectionListsComponent.prototype.ngOnInit = function () {
        if (this.router.url === '/productcollections') {
            this.curentModule = 'productcollections';
            this.moduletype = 'products';
        }
        else {
            this.moduletype = 'news';
            this.curentModule = 'newscollections';
        }
        this.loadDatatable();
    };
    CollectionListsComponent.prototype.loadDatatable = function () {
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
                    'width': '30%',
                    'target': [0]
                },
                {
                    'sortable': true,
                    'width': '30%',
                    'target': [1]
                },
                {
                    'sortable': true,
                    'width': '20%',
                    'target': [2]
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
                'sInfoCollectionFix': this.translate.instant('common.datatable.sInfoCollectionFix'),
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
                _this.http.post(_this.apiUrl + '/api/all-collections', Object.assign(dataTablesParameters, { moduletype: _this.moduletype }), {}).subscribe(function (resp) {
                    _this.collections = resp.data;
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
    CollectionListsComponent.prototype.exportFiles = function (type) {
        this.exportAsConfig.type = type;
        this.exportAsService.save(this.exportAsConfig, this.translate.instant('collections.title')).subscribe(function () {
        });
    };
    CollectionListsComponent.prototype.ngAfterViewInit = function () {
        this.dtTrigger.next();
    };
    CollectionListsComponent.prototype.ngOnDestroy = function () {
        this.dtTrigger.unsubscribe();
    };
    CollectionListsComponent.prototype.rerender = function () {
        var _this = this;
        this.dtElement.dtInstance.then(function (dtInstance) {
            dtInstance.destroy();
            setTimeout(function () {
                _this.dtTrigger.next();
                if (_this.collections.length > 0) {
                    $('.tfoot_dt').addClass('d-none');
                }
                else {
                    $('.tfoot_dt').removeClass('d-none');
                }
            });
        });
    };
    CollectionListsComponent.prototype.deleteCollection = function (id) {
        var _this = this;
        sweetalert2__WEBPACK_IMPORTED_MODULE_10___default.a.fire({
            title: this.translate.instant('common.swal.title'),
            text: this.translate.instant('common.swal.text') + this.translate.instant('collections.title'),
            type: 'warning',
            showCancelButton: true,
            confirmButtonText: this.translate.instant('common.swal.confirmButtonText'),
            cancelButtonText: this.translate.instant('common.swal.cancelButtonText')
        }).then(function (result) {
            if (result.value) {
                _this.collectionsService.delete(id).subscribe(function (data) {
                    _this.toastr.success(_this.translate.instant('collections.messages.delete'), _this.translate.instant('collections.title'));
                    _this.rerender();
                });
            }
        });
    };
    CollectionListsComponent.prototype.getTranslateStatus = function (statusKey) {
        // return this.collectionStatusKeyValue[statusKey];
        return [];
    };
    CollectionListsComponent.prototype.getUrl = function (action, id) {
        if (action === 'create') {
            return ['/' + this.curentModule + '/create'];
        }
        else {
            return ['/' + this.curentModule + '/edit', id];
        }
    };
    CollectionListsComponent.ctorParameters = function () { return [
        { type: _ngx_translate_core__WEBPACK_IMPORTED_MODULE_3__["TranslateService"] },
        { type: ngx_export_as__WEBPACK_IMPORTED_MODULE_4__["ExportAsService"] },
        { type: _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClient"] },
        { type: ngx_toastr__WEBPACK_IMPORTED_MODULE_5__["ToastrService"] },
        { type: _angular_router__WEBPACK_IMPORTED_MODULE_14__["Router"] },
        { type: _core_services_collections_service__WEBPACK_IMPORTED_MODULE_13__["CollectionsService"] },
        { type: _core_services_authentication_service__WEBPACK_IMPORTED_MODULE_6__["AuthenticationService"] }
    ]; };
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewChild"])(angular_datatables__WEBPACK_IMPORTED_MODULE_8__["DataTableDirective"], { static: true }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", angular_datatables__WEBPACK_IMPORTED_MODULE_8__["DataTableDirective"])
    ], CollectionListsComponent.prototype, "dtElement", void 0);
    CollectionListsComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-collection-lists',
            template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./collection-lists.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/modules/posts/collections/pages/collection-lists/collection-lists.component.html")).default,
            styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./collection-lists.component.scss */ "./src/app/modules/posts/collections/pages/collection-lists/collection-lists.component.scss")).default]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_ngx_translate_core__WEBPACK_IMPORTED_MODULE_3__["TranslateService"],
            ngx_export_as__WEBPACK_IMPORTED_MODULE_4__["ExportAsService"],
            _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClient"],
            ngx_toastr__WEBPACK_IMPORTED_MODULE_5__["ToastrService"],
            _angular_router__WEBPACK_IMPORTED_MODULE_14__["Router"],
            _core_services_collections_service__WEBPACK_IMPORTED_MODULE_13__["CollectionsService"],
            _core_services_authentication_service__WEBPACK_IMPORTED_MODULE_6__["AuthenticationService"]])
    ], CollectionListsComponent);
    return CollectionListsComponent;
}());



/***/ })

}]);
//# sourceMappingURL=modules-posts-collections-collections-module.js.map