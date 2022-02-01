(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["modules-posts-posts-posts-module"],{

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/modules/posts/posts/pages/post-create/post-create.component.html":
/*!************************************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/modules/posts/posts/pages/post-create/post-create.component.html ***!
  \************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<section id=\"basic-form-layouts\">\r\n    <form (ngSubmit)=\"onSubmit()\" *ngIf=\"isFormLoaded\" [formGroup]=\"createPostForm\">\r\n        <div class=\"row\">\r\n            <div class=\"col-md-8\">\r\n                <div class=\"card\">\r\n                    <div class=\"card-header\">\r\n                        <h4 class=\"card-title\" *ngIf=\"moduletype == 'news'\">{{'posts.title2' | translate}}</h4>\r\n                        <h4 class=\"card-title\" *ngIf=\"moduletype != 'news'\">{{'posts.title4' | translate}}</h4>\r\n                    </div>\r\n                    <div class=\"card-body\">\r\n                        <div class=\"px-3\">\r\n                            <div class=\"form-body\">\r\n                                <h4 class=\"form-section\" (click)=\"isCollapsedHead1 = !isCollapsedHead1\" [attr.aria-expanded]=\"!isCollapsedHead1\" aria-controls=\"collapseBasic\">\r\n                                    {{'posts.headings.head1' | translate}}\r\n                                    <i class=\"fa\" [ngClass] = \"isCollapsedHead1 ? 'fa-plus' : 'fa-minus'\"></i>\r\n                                </h4>\r\n                                <div class=\"row\" [collapse]=\"isCollapsedHead1\" [isAnimated]=\"true\">\r\n                                    <div class=\"col-md-12\">\r\n                                        <div [ngClass]=\"{ 'is-invalid': isFormSubmitted && postControl.name.errors }\" class=\"form-group\">\r\n                                            <label for=\"name\">{{'posts.create.fields.name' | translate}}&nbsp;<span class=\"text-danger\">*</span>\r\n                                            </label>\r\n                                            <input [ngClass]=\"{ 'is-invalid': isFormSubmitted && postControl.name.errors }\" class=\"form-control\" formControlName=\"name\" id=\"name\" placeholder=\"{{'posts.create.placeholders.placeholder1' | translate }}\" type=\"text\"/>\r\n                                            <div *ngIf=\"isFormSubmitted && postControl.name.errors\" class=\"invalid-feedback\">\r\n                                                <div *ngIf=\"postControl.name.errors.required\">{{'posts.create.error_messages.message1' | translate}}</div>\r\n                                            </div>\r\n                                        </div>\r\n                                    </div>\r\n                                    <div class=\"col-md-12\" *ngIf=\"moduletype != 'products'\">\r\n                                        <div [ngClass]=\"{ 'is-invalid': isFormSubmitted && postControl.category.errors }\" class=\"form-group\">\r\n                                            <label for=\"category\">{{'posts.create.fields.category' | translate}}&nbsp;<span class=\"text-danger\">*</span>\r\n                                            </label>\r\n                                            <ng-select (change)=\"changeCategory($event)\" [clearable]=\"false\" [items]=\"listcategorys\" [searchable]=\"true\" [selectOnTab]=\"true\" bindLabel=\"name\" bindValue=\"id\" formControlName=\"category\" labelForId=\"category\" placeholder=\"{{'posts.create.placeholders.placeholder3' | translate}}\">\r\n                                                <ng-template let-item=\"item\" ng-option-tmp>\r\n                                                    {{item.name}}\r\n                                                </ng-template>\r\n                                            </ng-select>\r\n                                            <div *ngIf=\"isFormSubmitted && postControl.category.errors\" class=\"invalid-feedback\">\r\n                                                <div *ngIf=\"postControl.category.errors.required\">{{'posts.create.error_messages.message2' | translate}}</div>\r\n                                            </div>\r\n                                        </div>\r\n                                    </div>\r\n                                    <div class=\"col-md-12\">\r\n                                        <div [ngClass]=\"{ 'is-invalid': isFormSubmitted && postControl.description.errors }\" class=\"form-group\">\r\n                                            <label for=\"description\">{{'posts.create.fields.description' | translate}}&nbsp;\r\n                                            </label>\r\n                                            <textarea [ngClass]=\"{ 'is-invalid': isFormSubmitted && postControl.description.errors }\" class=\"form-control\" formControlName=\"description\" id=\"description\" name=\"description\" placeholder=\"{{'posts.create.placeholders.placeholder2' | translate}}\"></textarea>\r\n                                            <div *ngIf=\"isFormSubmitted && postControl.description.errors\" class=\"invalid-feedback\">\r\n                                                <div *ngIf=\"postControl.description.errors.required\">{{'posts.create.error_messages.message2' | translate}}</div>\r\n                                            </div>\r\n                                        </div>\r\n                                    </div>\r\n                                    <div class=\"col-md-12\">\r\n                                        <div [ngClass]=\"{ 'is-invalid': isFormSubmitted && postControl.image.errors }\" class=\"form-group mg-t-1rem\">\r\n                                            <label for=\"image\">{{'posts.create.fields.image' | translate}}&nbsp;<span class=\"text-danger\">*</span>\r\n                                            </label>\r\n                                            <input formControlName=\"image\" type=\"hidden\">\r\n                                            <div #imagedropzone class=\"dropzone dz-clickable\">\r\n                                                <div class=\"dz-default dz-message\">\r\n                                                    <span><strong>{{'posts.create.placeholders.placeholder11' | translate }}</strong></span>\r\n                                                </div>\r\n                                            </div>\r\n                                        </div>\r\n                                    </div>\r\n                                    <div class=\"col-md-12\">\r\n                                        <div [ngClass]=\"{ 'is-invalid': isFormSubmitted && postControl.content.errors }\" class=\"form-group\">\r\n                                            <label for=\"content\">{{'posts.create.fields.content' | translate}}&nbsp;<span class=\"text-danger\">*</span>\r\n                                            </label>\r\n                                            <app-ngx-editor formControlName=\"content\" height=\"400px\" minHeight=\"50px\"></app-ngx-editor>\r\n                                        </div>\r\n                                    </div>\r\n                                </div>\r\n                            </div>\r\n                        </div>\r\n                    </div>\r\n                </div>\r\n                <div class=\"card\" *ngIf=\"moduletype == 'products'\">\r\n                    <div class=\"card-body\">\r\n                        <div class=\"px-3\">\r\n                            <h4 class=\"form-section\" (click)=\"isCollapsedHead2 = !isCollapsedHead2\" [attr.aria-expanded]=\"!isCollapsedHead2\" aria-controls=\"collapseBasic\">\r\n                                {{'posts.headings.head3' | translate}}\r\n                                <i class=\"fa\" [ngClass] = \"isCollapsedHead2 ? 'fa-plus' : 'fa-minus'\"></i>\r\n                            </h4>\r\n                            <div class=\"row\" [collapse]=\"isCollapsedHead2\" [isAnimated]=\"true\">\r\n                                <div class=\"col-md-12\">\r\n                                    <div [ngClass]=\"{ 'is-invalid': isFormSubmitted && postControl.category.errors }\" class=\"form-group\">\r\n                                        <label for=\"category\">{{'posts.create.fields.category' | translate}}&nbsp;<span class=\"text-danger\">*</span>\r\n                                        </label>\r\n                                        <ng-select (change)=\"changeCategory($event)\" [clearable]=\"false\" [items]=\"listcategorys\" [searchable]=\"true\" [selectOnTab]=\"true\" bindLabel=\"name\" bindValue=\"id\" formControlName=\"category\" labelForId=\"category\" placeholder=\"{{'posts.create.placeholders.placeholder3' | translate}}\">\r\n                                            <ng-template let-item=\"item\" ng-option-tmp>\r\n                                                {{item.name}}\r\n                                            </ng-template>\r\n                                        </ng-select>\r\n                                        <div *ngIf=\"isFormSubmitted && postControl.category.errors\" class=\"invalid-feedback\">\r\n                                            <div *ngIf=\"postControl.category.errors.required\">{{'posts.create.error_messages.message2' | translate}}</div>\r\n                                        </div>\r\n                                    </div>\r\n                                </div>\r\n                                <div class=\"px-2\">\r\n                                    <div class=\"table-responsive-xs table-responsive-sm table-responsive-md table-responsive-lg table-responsive-xl\" formArrayName=\"specifications\">\r\n                                        <table class=\"table table-bordered table-hover b4-datatable\" id=\"specification_table\" width=\"100%\">\r\n                                            <thead>\r\n                                            <tr>\r\n                                                <th>{{'posts.create.fields.stt' | translate}}</th>\r\n                                                <th>{{'posts.create.fields.name' | translate}}</th>\r\n                                                <th>{{'posts.create.fields.value' | translate}}</th>\r\n                                                <th class=\"width-100\">{{'posts.create.fields.check' | translate}}</th>\r\n                                            </tr>\r\n                                            </thead>\r\n                                            <tbody>\r\n                                                <tr  *ngFor=\"let specification of createPostForm.controls.specifications.controls; let j=index\" [formGroupName]=\"j\">\r\n                                                    <td>\r\n                                                        <label>{{j+1}}</label>\r\n                                                    </td>\r\n                                                    <td>\r\n                                                        <div class=\"form-group\">\r\n                                                            <input class=\"form-control\" formControlName=\"name\" id=\"name-{{j}}\" placeholder=\"{{'posts.create.placeholders.placeholder8' | translate}}\" type=\"text\" disabled/>\r\n                                                        </div>\r\n                                                    </td>\r\n                                                    <td>\r\n                                                        <div class=\"form-group\" [ngClass]=\"{ 'is-invalid': isFormSubmitted && controllSpecifications.controls[j].get('value').errors }\">\r\n                                                            <ng-select [items]=\"specifications[j].value\" [searchable]=\"false\" [selectOnTab]=\"true\" bindLabel=\"name\" bindValue=\"indentify\" formControlName=\"value\" placeholder=\"{{'posts.create.placeholders.placeholder14' | translate}}\">\r\n                                                            </ng-select>\r\n                                                        </div>\r\n                                                    </td>\r\n                                                    <td>\r\n                                                        <div class=\"form-group\">\r\n                                                            <input class=\"form-control\" formControlName=\"check\" id=\"check-{{j}}\" placeholder=\"{{'posts.create.placeholders.placeholder11' | translate}}\" type=\"checkbox\"/>\r\n                                                        </div>\r\n                                                    </td>\r\n                                                </tr>\r\n                                            </tbody>\r\n                                        </table>\r\n                                    </div>\r\n                                </div>\r\n                            </div>\r\n                        </div>\r\n                    </div>\r\n                </div>\r\n                <div class=\"card\" *ngIf=\"moduletype == 'products'\">\r\n                    <div class=\"card-body\">\r\n                        <div class=\"px-3\">\r\n                            <h4 class=\"form-section\" (click)=\"isCollapsedHead3 = !isCollapsedHead3\" [attr.aria-expanded]=\"!isCollapsedHead3\" aria-controls=\"collapseBasic\">\r\n                                {{'posts.headings.head4' | translate}}\r\n                                <i class=\"fa\" [ngClass] = \"isCollapsedHead3 ? 'fa-plus' : 'fa-minus'\"></i>\r\n                            </h4>\r\n                            <div class=\"row\" [collapse]=\"isCollapsedHead3\" [isAnimated]=\"true\">\r\n                                <div class=\"col-md-12\">\r\n                                    <div [ngClass]=\"{ 'is-invalid': isFormSubmitted && postControl.properties.errors }\" class=\"form-group mg-t-1rem\">\r\n                                        <label for=\"properties\">{{'posts.create.fields.properties' | translate}}\r\n                                        </label>\r\n                                        <ng-select (change)=\"changePropertiesList($event)\" [items]=\"properties\" [multiple]=\"true\" [searchable]=\"true\" bindLabel=\"name\" bindValue=\"indentify\" formControlName=\"properties\" placeholder=\"{{'posts.create.placeholders.placeholder12' | translate}}\">\r\n                                            <ng-template let-item=\"item\" ng-option-tmp>\r\n                                                {{item.name}}\r\n                                            </ng-template>\r\n                                        </ng-select>\r\n                                        <div *ngIf=\"isFormSubmitted && postControl.properties.errors\" class=\"invalid-feedback\">\r\n                                            <div *ngIf=\"postControl.properties.errors.required\">{{'posts.create.error_messages.message2' | translate}}</div>\r\n                                        </div>\r\n                                    </div>\r\n                                </div>\r\n                                <div class=\"col-md-12\">\r\n                                    <div [ngClass]=\"{ 'is-invalid': isFormSubmitted && postControl.price.errors }\" class=\"form-group\">\r\n                                        <label for=\"price\">{{'posts.create.fields.price' | translate}}&nbsp;<span class=\"text-danger\">*</span>\r\n                                        </label>\r\n                                        <input [ngClass]=\"{ 'is-invalid': isFormSubmitted && postControl.price.errors }\" class=\"form-control\" formControlName=\"price\" id=\"price\" placeholder=\"{{'posts.create.placeholders.placeholder10' | translate }}\" type=\"number\"/>\r\n                                        <div *ngIf=\"isFormSubmitted && postControl.price.errors\" class=\"invalid-feedback\">\r\n                                            <div *ngIf=\"postControl.price.errors.required\">{{'posts.create.error_messages.message5' | translate}}</div>\r\n                                        </div>\r\n                                    </div>\r\n                                </div>\r\n                                <div class=\"col-md-12\">\r\n                                    <div [ngClass]=\"{ 'is-invalid': isFormSubmitted && postControl.compare_price.errors }\" class=\"form-group\">\r\n                                        <label for=\"compare_price\">{{'posts.create.fields.compare_price' | translate}}&nbsp;<span class=\"text-danger\">*</span>\r\n                                        </label>\r\n                                        <input [ngClass]=\"{ 'is-invalid': isFormSubmitted && postControl.compare_price.errors }\" class=\"form-control\" formControlName=\"compare_price\" id=\"compare_price\" placeholder=\"{{'posts.create.placeholders.placeholder15' | translate }}\" type=\"number\"/>\r\n                                        <div *ngIf=\"isFormSubmitted && postControl.compare_price.errors\" class=\"invalid-feedback\">\r\n                                            <div *ngIf=\"postControl.compare_price.errors.required\">{{'posts.create.error_messages.message6' | translate}}</div>\r\n                                        </div>\r\n                                    </div>\r\n                                </div>\r\n                                <div class=\"px-2\">\r\n                                    <div class=\"table-responsive-xs table-responsive-sm table-responsive-md table-responsive-lg table-responsive-xl\" formArrayName=\"variations\">\r\n                                        <table class=\"table table-bordered table-hover b4-datatable\" id=\"variations_table\" width=\"100%\">\r\n                                            <thead>\r\n                                            <tr>\r\n                                                <th>{{'posts.create.fields.stt' | translate}}</th>\r\n                                                <th *ngFor=\"let header of propertiesHeader; let i=index\">{{header.name}}</th>\r\n                                                <th>{{'posts.create.fields.price' | translate}}</th>\r\n                                                <th>{{'posts.create.fields.compare_price' | translate}}</th>\r\n                                                <th class=\"width-100\">{{'posts.create.fields.check' | translate}}</th>\r\n                                            </tr>\r\n                                            </thead>\r\n                                            <tbody>\r\n                                            <tr  *ngFor=\"let variations of createPostForm.controls.variations.controls; let i=index\" [formGroupName]=\"i\">\r\n                                                <td>\r\n                                                    <label>{{i+1}}</label>\r\n                                                </td>\r\n                                                <td  *ngFor=\"let header of propertiesHeader; let j=index\">\r\n                                                    <div class=\"form-group\">\r\n                                                        <label> {{createPostForm.value.variations[i][header.indentify+ 'label']}} </label>\r\n                                                    </div>\r\n                                                </td>\r\n                                                <td>\r\n                                                    <div class=\"form-group\">\r\n                                                        <input class=\"form-control\" formControlName=\"price\" id=\"price-{{i}}\" placeholder=\"{{'posts.create.placeholders.placeholder10' | translate}}\" type=\"number\" [ngClass]=\"{ 'is-invalid': isFormSubmitted && controllVariations.controls[i].get('price').errors }\"/>\r\n                                                    </div>\r\n                                                </td>\r\n                                                <td>\r\n                                                    <div class=\"form-group\">\r\n                                                        <input class=\"form-control\" formControlName=\"compare_price\" id=\"compare_price-{{i}}\" placeholder=\"{{'posts.create.placeholders.placeholder15' | translate}}\" type=\"number\" [ngClass]=\"{ 'is-invalid': isFormSubmitted && controllVariations.controls[i].get('compare_price').errors }\"/>\r\n                                                    </div>\r\n                                                </td>\r\n                                                <td>\r\n                                                    <div class=\"form-group\">\r\n                                                        <input class=\"form-control\" formControlName=\"check\" id=\"check-variations-{{i}}\" placeholder=\"{{'posts.create.placeholders.placeholder11' | translate}}\" type=\"checkbox\"/>\r\n                                                    </div>\r\n                                                </td>\r\n                                            </tr>\r\n                                            </tbody>\r\n                                        </table>\r\n                                    </div>\r\n                                </div>\r\n                            </div>\r\n                        </div>\r\n                    </div>\r\n                </div>\r\n                <div class=\"card\">\r\n                    <div class=\"card-body\">\r\n                        <div class=\"px-3\">\r\n                            <div class=\"form-body\">\r\n                                <h4 class=\"form-section\" (click)=\"isCollapsedHead4 = !isCollapsedHead4\" [attr.aria-expanded]=\"!isCollapsedHead4\" aria-controls=\"collapseBasic\">\r\n                                    {{'posts.headings.head2' | translate}}\r\n                                    <i class=\"fa\" [ngClass] = \"isCollapsedHead4 ? 'fa-plus' : 'fa-minus'\"></i>\r\n                                </h4>\r\n                                <div class=\"row\" [collapse]=\"isCollapsedHead4\" [isAnimated]=\"true\">\r\n                                    <div class=\"col-md-12\">\r\n                                        <div [ngClass]=\"{ 'is-invalid': isFormSubmitted && postControl.page_title.errors }\" class=\"form-group\">\r\n                                            <label for=\"page_title\">{{'posts.create.fields.page_title' | translate}}\r\n                                            </label>\r\n                                            <input [ngClass]=\"{ 'is-invalid': isFormSubmitted && postControl.page_title.errors }\" class=\"form-control\" formControlName=\"page_title\" id=\"page_title\" placeholder=\"{{'posts.create.placeholders.placeholder7' | translate }}\" type=\"text\"/>\r\n                                            <div *ngIf=\"isFormSubmitted && postControl.page_title.errors\" class=\"invalid-feedback\">\r\n                                                <div *ngIf=\"postControl.page_title.errors.required\">{{'posts.create.error_messages.message1' | translate}}</div>\r\n                                            </div>\r\n                                        </div>\r\n                                    </div>\r\n                                    <div class=\"col-md-12\">\r\n                                        <div [ngClass]=\"{ 'is-invalid': isFormSubmitted && postControl.page_description.errors }\" class=\"form-group\">\r\n                                            <label for=\"page_description\">{{'posts.create.fields.page_description' | translate}}\r\n                                            </label>\r\n                                            <textarea [ngClass]=\"{ 'is-invalid': isFormSubmitted && postControl.page_description.errors }\" class=\"form-control\" formControlName=\"page_description\" id=\"page_description\" name=\"page_description\" placeholder=\"{{'posts.create.placeholders.placeholder8' | translate}}\"></textarea>\r\n                                            <div *ngIf=\"isFormSubmitted && postControl.page_description.errors\" class=\"invalid-feedback\">\r\n                                                <div *ngIf=\"postControl.page_description.errors.required\">{{'posts.create.error_messages.message2' | translate}}</div>\r\n                                            </div>\r\n                                        </div>\r\n                                    </div>\r\n                                    <div class=\"col-md-12\">\r\n                                        <div [ngClass]=\"{ 'is-invalid': isFormSubmitted && postControl.url_and_handle.errors }\" class=\"form-group\">\r\n                                            <label for=\"url_and_handle\">{{'posts.create.fields.url_and_handle' | translate}}&nbsp;<span class=\"text-danger\">*</span>\r\n                                            </label>\r\n                                            <input [ngClass]=\"{ 'is-invalid': isFormSubmitted && postControl.url_and_handle.errors }\" class=\"form-control\" formControlName=\"url_and_handle\" id=\"url_and_handle\" placeholder=\"{{'posts.create.placeholders.placeholder9' | translate }}\" type=\"text\"/>\r\n                                            <div *ngIf=\"isFormSubmitted && postControl.url_and_handle.errors\" class=\"invalid-feedback\">\r\n                                                <div *ngIf=\"postControl.url_and_handle.errors.required\">{{'posts.create.error_messages.message3' | translate}}</div>\r\n                                            </div>\r\n                                        </div>\r\n                                    </div>\r\n                                    <div class=\"col-md-12\">\r\n                                        <div class=\"form-group\">\r\n                                            <label for=\"seo\">{{'seo.create.fields.meta' | translate}}</label>\r\n                                            <ng-select  (add)=\"onAddMetaTag($event)\" (remove)=\"onRemoveMetaTag($event)\" [clearable]=\"false\" [multiple]=\"true\" [items]=\"seoData\" [searchable]=\"true\" [selectOnTab]=\"true\" bindLabel=\"label\" bindValue=\"id\" formControlName=\"seo\" labelForId=\"seo\" placeholder=\"{{'seo.create.placeholders.placeholder6' | translate}}\">\r\n                                                <ng-template let-item=\"item\" ng-option-tmp>\r\n                                                    {{item.label}}\r\n                                                </ng-template>\r\n                                            </ng-select>\r\n                                        </div>\r\n                                    </div>\r\n                                    <div class=\"px-2\">\r\n                                        <div class=\"table-responsive-xs table-responsive-sm table-responsive-md table-responsive-lg table-responsive-xl\" formArrayName=\"seoData\">\r\n                                            <table class=\"table table-bordered table-hover b4-datatable\" id=\"variations_table\" width=\"100%\">\r\n                                                <thead>\r\n                                                <tr>\r\n                                                    <th>{{'seo.create.fields.stt' | translate}}</th>\r\n                                                    <th >{{'seo.create.fields.meta' | translate}}</th>\r\n                                                    <th>{{'seo.create.fields.content' | translate}}</th>\r\n                                                </tr>\r\n                                                </thead>\r\n                                                <tbody>\r\n                                                <tr  *ngFor=\"let seo of createPostForm.controls.seoData.controls; let i=index\" [formGroupName]=\"i\">\r\n                                                    <td>\r\n                                                        <label>{{i+1}}</label>\r\n                                                    </td>\r\n                                                    <td >\r\n                                                        <div class=\"form-group\">\r\n                                                            <label>{{createPostForm.value.seoData[i]['meta']}}</label>\r\n                                                        </div>\r\n                                                    </td>\r\n                                                    <td>\r\n                                                        <div class=\"form-group\">\r\n                                                            <textarea class=\"form-control\" formControlName=\"content\" name=\"description\" placeholder=\"{{'seo.create.placeholders.placeholder7' | translate}}\"></textarea>\r\n                                                        </div>\r\n                                                    </td>\r\n                                                </tr>\r\n                                                </tbody>\r\n                                            </table>\r\n                                        </div>\r\n                                    </div>\r\n                                </div>\r\n                            </div>\r\n                        </div>\r\n                    </div>\r\n                </div>\r\n            </div>\r\n            <div class=\"col-md-4\">\r\n                <div class=\"card\">\r\n                    <div class=\"card-body\">\r\n                        <div class=\"px-3\">\r\n                            <div class=\"form-body\">\r\n                                <div class=\"row\">\r\n                                    <div class=\"col-md-12\">\r\n                                        <div [ngClass]=\"{ 'is-invalid': isFormSubmitted && postControl.active.errors }\" class=\"form-group mg-t-1rem\">\r\n                                            <label for=\"active\">{{'posts.create.fields.active' | translate}}&nbsp;<span class=\"text-danger\">*</span>\r\n                                            </label>\r\n                                            <ng-select [items]=\"liststatus\" [searchable]=\"false\" [selectOnTab]=\"true\" bindValue=\"value\" formControlName=\"active\" labelForId=\"active\" placeholder=\"{{'posts.create.placeholders.placeholder4' | translate}}\"></ng-select>\r\n                                            <div *ngIf=\"isFormSubmitted && postControl.active.errors\" class=\"invalid-feedback\">\r\n                                                <div *ngIf=\"postControl.active.errors.required\">{{'posts.create.error_messages.message4' | translate}}</div>\r\n\r\n                                            </div>\r\n                                        </div>\r\n                                    </div>\r\n                                </div>\r\n                            </div>\r\n                        </div>\r\n                    </div>\r\n                </div>\r\n                <div class=\"card\" *ngIf=\"moduletype == 'products'\">\r\n                    <div class=\"card-body\">\r\n                        <div class=\"px-3\">\r\n                            <div class=\"form-body\">\r\n                                <div class=\"row\">\r\n                                    <div class=\"col-md-12\">\r\n                                        <div [ngClass]=\"{ 'is-invalid': isFormSubmitted && postControl.manufacturers.errors }\" class=\"form-group mg-t-1rem\">\r\n                                            <label for=\"manufacturers\">{{'posts.create.fields.manufacturers' | translate}}&nbsp;<span class=\"text-danger\">*</span>\r\n                                            </label>\r\n                                            <ng-select [items]=\"manufacturers\" [multiple]=\"false\" [searchable]=\"true\" bindLabel=\"name\" bindValue=\"indentify\" formControlName=\"manufacturers\" placeholder=\"{{'posts.create.placeholders.placeholder13' | translate}}\">\r\n                                                <ng-template let-item=\"item\" ng-option-tmp>\r\n                                                    {{item.name}}\r\n                                                </ng-template>\r\n                                            </ng-select>\r\n                                            <div *ngIf=\"isFormSubmitted && postControl.manufacturers.errors\" class=\"invalid-feedback\">\r\n                                                <div *ngIf=\"postControl.manufacturers.errors.required\">{{'posts.create.error_messages.message2' | translate}}</div>\r\n                                            </div>\r\n                                        </div>\r\n                                    </div>\r\n                                </div>\r\n                            </div>\r\n                        </div>\r\n                    </div>\r\n                </div>\r\n                <div class=\"card\">\r\n                    <div class=\"card-body\">\r\n                        <div class=\"px-3\">\r\n                            <div class=\"form-body\">\r\n                                <div class=\"row\">\r\n                                    <div class=\"col-md-12\">\r\n                                        <div [ngClass]=\"{ 'is-invalid': isFormSubmitted && postControl.pages_id.errors }\" class=\"form-group mg-t-1rem\">\r\n                                            <label for=\"pages_id\">{{'posts.create.fields.template' | translate}}&nbsp;<span class=\"text-danger\">*</span>\r\n                                            </label>\r\n                                            <ng-select [items]=\"listTemplate\" [searchable]=\"true\" [selectOnTab]=\"true\" bindLabel=\"name\" bindValue=\"id\" formControlName=\"pages_id\" labelForId=\"pages_id\" placeholder=\"{{'posts.create.placeholders.placeholder6' | translate}}\"></ng-select>\r\n                                            <div *ngIf=\"isFormSubmitted && postControl.pages_id.errors\" class=\"invalid-feedback\">\r\n                                                <div *ngIf=\"postControl.pages_id.errors.required\">{{'posts.create.error_messages.message2' | translate}}</div>\r\n                                            </div>\r\n                                        </div>\r\n                                    </div>\r\n                                </div>\r\n                            </div>\r\n                        </div>\r\n                    </div>\r\n                </div>\r\n                <div class=\"card\">\r\n                    <div class=\"card-body\">\r\n                        <div class=\"px-3\">\r\n                            <div class=\"form-body\">\r\n                                <div class=\"row\">\r\n                                    <div class=\"col-md-12\">\r\n                                        <div [ngClass]=\"{ 'is-invalid': isFormSubmitted && postControl.avatar.errors }\" class=\"form-group mg-t-1rem\">\r\n                                            <label for=\"avatar\">{{'posts.create.fields.avatar' | translate}}&nbsp;<span class=\"text-danger\">*</span>\r\n                                            </label>\r\n                                            <input formControlName=\"avatar\" type=\"hidden\">\r\n                                            <div #avatardropzone class=\"dropzone dz-clickable\">\r\n                                                <div class=\"dz-default dz-message\">\r\n                                                    <span><strong>{{'posts.create.placeholders.placeholder11' | translate }}</strong></span>\r\n                                                </div>\r\n                                            </div>\r\n                                        </div>\r\n                                    </div>\r\n                                </div>\r\n                            </div>\r\n                        </div>\r\n                    </div>\r\n                </div>\r\n                <div class=\"card\">\r\n                    <div class=\"card-body\">\r\n                        <div class=\"px-3\">\r\n                            <div class=\"form-body\">\r\n                                <div class=\"row\">\r\n                                    <div class=\"col-md-12\">\r\n                                        <div [ngClass]=\"{ 'is-invalid': isFormSubmitted && postControl.keyword.errors }\" class=\"form-group mg-t-1rem\">\r\n                                            <label for=\"keyword\">{{'posts.create.fields.keyword' | translate}}\r\n                                            </label>\r\n                                            <ng-select [items]=\"keywordData\" [addTag]=\"true\" [multiple]=\"true\" placeholder=\"{{'posts.create.placeholders.placeholder5' | translate }}\" formControlName=\"keyword\"> </ng-select>\r\n                                        </div>\r\n                                    </div>\r\n                                </div>\r\n                            </div>\r\n                        </div>\r\n                    </div>\r\n                </div>\r\n                <div class=\"card\">\r\n                    <div class=\"card-body\">\r\n                        <div class=\"px-3\">\r\n                            <div class=\"form-body\">\r\n                                <div class=\"row\">\r\n                                    <div class=\"col-md-12\">\r\n                                        <div [ngClass]=\"{ 'is-invalid': isFormSubmitted && postControl.collections.errors }\" class=\"form-group mg-t-1rem\">\r\n                                            <label for=\"collections\">{{'posts.create.fields.collections' | translate}}\r\n                                            </label>\r\n                                            <ng-select [items]=\"collectionsData\" bindValue=\"id\" bindLabel=\"name\" [multiple]=\"true\" placeholder=\"{{'posts.create.placeholders.placeholder16' | translate }}\" formControlName=\"collections\"> </ng-select>\r\n                                        </div>\r\n                                    </div>\r\n                                </div>\r\n                            </div>\r\n                        </div>\r\n                    </div>\r\n                </div>\r\n            </div>\r\n            <div class=\"col-md-12\">\r\n                <div class=\"card\">\r\n                    <div class=\"card-body\">\r\n                        <div class=\"px-3\">\r\n                            <div class=\"form-body\">\r\n                                <div class=\"row mb-3\">\r\n                                    <div class=\"col-md-12 text-right pt-3\">\r\n                                        <a [routerLink]=\"urlPage\" class=\"btn btn-cancel mb-0\">{{'common.cancel' | translate }}</a>\r\n                                        <button class=\"btn btn-submit mb-0\" type=\"submit\">{{'common.create' | translate }}</button>\r\n                                    </div>\r\n                                </div>\r\n                            </div>\r\n                        </div>\r\n                    </div>\r\n                </div>\r\n            </div>\r\n        </div>\r\n    </form>\r\n</section>\r\n");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/modules/posts/posts/pages/post-edit/post-edit.component.html":
/*!********************************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/modules/posts/posts/pages/post-edit/post-edit.component.html ***!
  \********************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<section id=\"basic-form-layouts\">\r\n    <form (ngSubmit)=\"onSubmit()\" *ngIf=\"isFormLoaded\" [formGroup]=\"editPostForm\">\r\n        <div class=\"row\">\r\n            <div class=\"col-md-8\">\r\n                <div class=\"card\">\r\n                    <div class=\"card-header\">\r\n                        <h4 class=\"card-title\" *ngIf=\"moduletype == 'news'\">{{'posts.title3' | translate}}</h4>\r\n                        <h4 class=\"card-title\" *ngIf=\"moduletype != 'news'\">{{'posts.title5' | translate}}</h4>\r\n                    </div>\r\n                    <div class=\"card-body\">\r\n                        <div class=\"px-3\">\r\n                            <div class=\"form-body\">\r\n                                <h4 class=\"form-section\" (click)=\"isCollapsedHead1 = !isCollapsedHead1\" [attr.aria-expanded]=\"!isCollapsedHead1\" aria-controls=\"collapseBasic\">\r\n                                    {{'posts.headings.head1' | translate}}\r\n                                    <i class=\"fa\" [ngClass] = \"isCollapsedHead1 ? 'fa-plus' : 'fa-minus'\"></i>\r\n                                </h4>\r\n                                <div class=\"row\" [collapse]=\"isCollapsedHead1\" [isAnimated]=\"true\">\r\n                                    <div class=\"col-md-12\">\r\n                                        <div [ngClass]=\"{ 'is-invalid': isFormSubmitted && postControl.name.errors }\" class=\"form-group\">\r\n                                            <label for=\"name\">{{'posts.create.fields.name' | translate}}&nbsp;<span class=\"text-danger\">*</span>\r\n                                            </label>\r\n                                            <input [ngClass]=\"{ 'is-invalid': isFormSubmitted && postControl.name.errors }\" class=\"form-control\" formControlName=\"name\" id=\"name\" placeholder=\"{{'posts.create.placeholders.placeholder1' | translate }}\" type=\"text\"/>\r\n                                            <div *ngIf=\"isFormSubmitted && postControl.name.errors\" class=\"invalid-feedback\">\r\n                                                <div *ngIf=\"postControl.name.errors.required\">{{'posts.create.error_messages.message1' | translate}}</div>\r\n                                            </div>\r\n                                        </div>\r\n                                    </div>\r\n                                    <div class=\"col-md-12\">\r\n                                        <div [ngClass]=\"{ 'is-invalid': isFormSubmitted && postControl.description.errors }\" class=\"form-group\">\r\n                                            <label for=\"description\">{{'posts.create.fields.description' | translate}}&nbsp;\r\n                                            </label>\r\n                                            <textarea [ngClass]=\"{ 'is-invalid': isFormSubmitted && postControl.description.errors }\" class=\"form-control\" formControlName=\"description\" id=\"description\" name=\"description\" placeholder=\"{{'posts.create.placeholders.placeholder2' | translate}}\"></textarea>\r\n                                            <div *ngIf=\"isFormSubmitted && postControl.description.errors\" class=\"invalid-feedback\">\r\n                                                <div *ngIf=\"postControl.description.errors.required\">{{'posts.create.error_messages.message2' | translate}}</div>\r\n                                            </div>\r\n                                        </div>\r\n                                    </div>\r\n                                    <div class=\"col-md-12\">\r\n                                        <div [ngClass]=\"{ 'is-invalid': isFormSubmitted && postControl.image.errors }\" class=\"form-group mg-t-1rem\">\r\n                                            <label for=\"image\">{{'posts.create.fields.image' | translate}}&nbsp;<span class=\"text-danger\">*</span>\r\n                                            </label>\r\n                                            <input formControlName=\"image\" type=\"hidden\">\r\n                                            <div #imagedropzone class=\"dropzone dz-clickable\">\r\n                                                <ng-container *ngIf=\"isLogoLoaded && post.image.length > 0\">\r\n                                                <div class=\"dz-preview dz-image-preview\" *ngFor=\"let attachment of post.image; let j = index\">\r\n                                                    <div class=\"dz-image\">\r\n                                                        <img height=\"100\" src=\"{{apiUrl}}/uploads/project/{{attachment.url}}\" width=\"100\"/>\r\n                                                    </div>\r\n                                                    <a (click)=\"removeattachments(attachment.id)\" class=\"btn btn-sm btn-block\">{{ 'common.remove_file' | translate }}</a>\r\n                                                </div>\r\n                                                </ng-container>\r\n                                            </div>\r\n                                        </div>\r\n                                    </div>\r\n                                    <div class=\"col-md-12\">\r\n                                        <div [ngClass]=\"{ 'is-invalid': isFormSubmitted && postControl.content.errors }\" class=\"form-group\">\r\n                                            <label for=\"content\">{{'posts.create.fields.content' | translate}}&nbsp;<span class=\"text-danger\">*</span>\r\n                                            </label>\r\n                                            <app-ngx-editor formControlName=\"content\" height=\"400px\" minHeight=\"50px\"></app-ngx-editor>\r\n                                        </div>\r\n                                    </div>\r\n                                </div>\r\n                            </div>\r\n                        </div>\r\n                    </div>\r\n                </div>\r\n                <div class=\"card\" *ngIf=\"moduletype == 'products'\">\r\n                    <div class=\"card-body\">\r\n                        <div class=\"px-3\">\r\n                            <h4 class=\"form-section\" (click)=\"isCollapsedHead2 = !isCollapsedHead2\" [attr.aria-expanded]=\"!isCollapsedHead2\" aria-controls=\"collapseBasic\">\r\n                                {{'posts.headings.head3' | translate}}\r\n                                <i class=\"fa\" [ngClass] = \"isCollapsedHead2 ? 'fa-plus' : 'fa-minus'\"></i>\r\n                            </h4>\r\n                            <div [collapse]=\"isCollapsedHead2\" [isAnimated]=\"true\">\r\n                                <div class=\"row\">\r\n                                    <div class=\"col-md-12\">\r\n                                        <div [ngClass]=\"{ 'is-invalid': isFormSubmitted && postControl.category.errors }\" class=\"form-group\">\r\n                                            <label for=\"category\">{{'posts.create.fields.category' | translate}}&nbsp;<span class=\"text-danger\">*</span>\r\n                                            </label>\r\n                                            <ng-select (change)=\"changeCategory($event, [])\" [clearable]=\"false\" [items]=\"listcategorys\" [searchable]=\"true\" [selectOnTab]=\"true\" bindLabel=\"name\" bindValue=\"id\" formControlName=\"category\" labelForId=\"category\" placeholder=\"{{'posts.create.placeholders.placeholder3' | translate}}\">\r\n                                                <ng-template let-item=\"item\" ng-option-tmp>\r\n                                                    {{item.name}}\r\n                                                </ng-template>\r\n                                            </ng-select>\r\n                                            <div *ngIf=\"isFormSubmitted && postControl.category.errors\" class=\"invalid-feedback\">\r\n                                                <div *ngIf=\"postControl.category.errors.required\">{{'posts.create.error_messages.message2' | translate}}</div>\r\n                                            </div>\r\n                                        </div>\r\n                                    </div>\r\n                                </div>\r\n                                <div class=\"table-responsive-xs table-responsive-sm table-responsive-md table-responsive-lg table-responsive-xl\" formArrayName=\"specifications\">\r\n                                    <table class=\"table table-bordered table-hover b4-datatable\" id=\"specification_table\" width=\"100%\">\r\n                                        <thead>\r\n                                        <tr>\r\n                                            <th>{{'posts.create.fields.stt' | translate}}</th>\r\n                                            <th>{{'posts.create.fields.name' | translate}}</th>\r\n                                            <th>{{'posts.create.fields.value' | translate}}</th>\r\n                                            <th class=\"width-100\">{{'posts.create.fields.check' | translate}}</th>\r\n                                        </tr>\r\n                                        </thead>\r\n                                        <tbody>\r\n                                            <tr  *ngFor=\"let specification of editPostForm.controls.specifications.controls; let i=index\" [formGroupName]=\"i\">\r\n                                                <td>\r\n                                                    <label>{{i+1}}</label>\r\n                                                </td>\r\n                                                <td>\r\n                                                    <div class=\"form-group\">\r\n                                                        <input class=\"form-control\" formControlName=\"name\" id=\"name-{{i}}\" placeholder=\"{{'posts.create.placeholders.placeholder8' | translate}}\" type=\"text\" disabled/>\r\n                                                    </div>\r\n                                                </td>\r\n                                                <td>\r\n                                                    <div class=\"form-group\" [ngClass]=\"{ 'is-invalid': isFormSubmitted && controllSpecifications.controls[i].get('value').errors }\">\r\n                                                        <ng-select [items]=\"specifications[i].value\" [searchable]=\"false\" [selectOnTab]=\"true\" bindLabel=\"name\" bindValue=\"indentify\" formControlName=\"value\" placeholder=\"{{'posts.create.placeholders.placeholder14' | translate}}\">\r\n                                                        </ng-select>\r\n                                                    </div>\r\n                                                </td>\r\n                                                <td>\r\n                                                    <div class=\"form-group\">\r\n                                                        <input class=\"form-control\" formControlName=\"check\" id=\"check-{{i}}\" placeholder=\"{{'posts.create.placeholders.placeholder11' | translate}}\" type=\"checkbox\"/>\r\n                                                    </div>\r\n                                                </td>\r\n                                            </tr>\r\n                                        </tbody>\r\n                                    </table>\r\n                                </div>\r\n                            </div>\r\n                        </div>\r\n                    </div>\r\n                </div>\r\n                <div class=\"card\" *ngIf=\"moduletype == 'products'\">\r\n                    <div class=\"card-body\">\r\n                        <div class=\"px-3\">\r\n                            <h4 class=\"form-section\" (click)=\"isCollapsedHead3 = !isCollapsedHead3\" [attr.aria-expanded]=\"!isCollapsedHead3\" aria-controls=\"collapseBasic\">\r\n                                {{'posts.headings.head4' | translate}}\r\n                                <i class=\"fa\" [ngClass] = \"isCollapsedHead3 ? 'fa-plus' : 'fa-minus'\"></i>\r\n                            </h4>\r\n                            <div [collapse]=\"isCollapsedHead3\" [isAnimated]=\"true\">\r\n                                <div class=\"row\">\r\n                                    <div class=\"col-md-12\">\r\n                                        <div [ngClass]=\"{ 'is-invalid': isFormSubmitted && postControl.properties.errors }\" class=\"form-group mg-t-1rem\">\r\n                                            <label for=\"properties\">{{'posts.create.fields.properties' | translate}}&nbsp;<span class=\"text-danger\">*</span>\r\n                                            </label>\r\n                                            <ng-select (change)=\"changePropertiesList($event, [])\" [items]=\"properties\" [multiple]=\"true\" [searchable]=\"true\" bindLabel=\"name\" bindValue=\"indentify\" formControlName=\"properties\" placeholder=\"{{'posts.create.placeholders.placeholder12' | translate}}\">\r\n                                                <ng-template let-item=\"item\" ng-option-tmp>\r\n                                                    {{item.name}}\r\n                                                </ng-template>\r\n                                            </ng-select>\r\n                                            <div *ngIf=\"isFormSubmitted && postControl.properties.errors\" class=\"invalid-feedback\">\r\n                                                <div *ngIf=\"postControl.properties.errors.required\">{{'posts.create.error_messages.message2' | translate}}</div>\r\n                                            </div>\r\n                                        </div>\r\n                                    </div>\r\n                                    <div class=\"col-md-12\">\r\n                                        <div [ngClass]=\"{ 'is-invalid': isFormSubmitted && postControl.price.errors }\" class=\"form-group\">\r\n                                            <label for=\"price\">{{'posts.create.fields.price' | translate}}&nbsp;<span class=\"text-danger\">*</span>\r\n                                            </label>\r\n                                            <input [ngClass]=\"{ 'is-invalid': isFormSubmitted && postControl.price.errors }\" class=\"form-control\" formControlName=\"price\" id=\"price\" placeholder=\"{{'posts.create.placeholders.placeholder10' | translate }}\" type=\"number\"/>\r\n                                            <div *ngIf=\"isFormSubmitted && postControl.price.errors\" class=\"invalid-feedback\">\r\n                                                <div *ngIf=\"postControl.price.errors.required\">{{'posts.create.error_messages.message5' | translate}}</div>\r\n                                            </div>\r\n                                        </div>\r\n                                    </div>\r\n                                    <div class=\"col-md-12\">\r\n                                        <div [ngClass]=\"{ 'is-invalid': isFormSubmitted && postControl.compare_price.errors }\" class=\"form-group\">\r\n                                            <label for=\"compare_price\">{{'posts.create.fields.compare_price' | translate}}&nbsp;<span class=\"text-danger\">*</span>\r\n                                            </label>\r\n                                            <input [ngClass]=\"{ 'is-invalid': isFormSubmitted && postControl.compare_price.errors }\" class=\"form-control\" formControlName=\"compare_price\" id=\"compare_price\" placeholder=\"{{'posts.create.placeholders.placeholder15' | translate }}\" type=\"number\"/>\r\n                                            <div *ngIf=\"isFormSubmitted && postControl.compare_price.errors\" class=\"invalid-feedback\">\r\n                                                <div *ngIf=\"postControl.compare_price.errors.required\">{{'posts.create.error_messages.message6' | translate}}</div>\r\n                                            </div>\r\n                                        </div>\r\n                                    </div>\r\n                                </div>\r\n                                <div class=\"px-2\">\r\n                                    <div class=\"table-responsive-xs table-responsive-sm table-responsive-md table-responsive-lg table-responsive-xl\" formArrayName=\"variations\">\r\n                                        <table class=\"table table-bordered table-hover b4-datatable\" id=\"variations_table\" width=\"100%\">\r\n                                            <thead>\r\n                                            <tr>\r\n                                                <th>{{'posts.create.fields.stt' | translate}}</th>\r\n                                                <th *ngFor=\"let header of propertiesHeader; let i=index\">{{header.name}}</th>\r\n                                                <th>{{'posts.create.fields.price' | translate}}</th>\r\n                                                <th>{{'posts.create.fields.compare_price' | translate}}</th>\r\n                                                <th class=\"width-100\">{{'posts.create.fields.check' | translate}}</th>\r\n                                            </tr>\r\n                                            </thead>\r\n                                            <tbody>\r\n                                            <tr  *ngFor=\"let variations of editPostForm.controls.variations.controls; let i=index\" [formGroupName]=\"i\">\r\n                                                <td>\r\n                                                    <label>{{i+1}}</label>\r\n                                                </td>\r\n                                                <td  *ngFor=\"let header of propertiesHeader; let j=index\">\r\n                                                    <div class=\"form-group\">\r\n                                                        <label>{{editPostForm.value.variations[i][header.indentify + 'label']}}</label>\r\n                                                    </div>\r\n                                                </td>\r\n                                                <td>\r\n                                                    <div class=\"form-group\">\r\n                                                        <input class=\"form-control\" formControlName=\"price\" id=\"price-{{i}}\" placeholder=\"{{'posts.create.placeholders.placeholder10' | translate}}\" type=\"number\" [ngClass]=\"{ 'is-invalid': isFormSubmitted && controllVariations.controls[i].get('price').errors }\"/>\r\n                                                    </div>\r\n                                                </td>\r\n                                                <td>\r\n                                                    <div class=\"form-group\">\r\n                                                        <input class=\"form-control\" formControlName=\"compare_price\" id=\"compare_price-{{i}}\" placeholder=\"{{'posts.create.placeholders.placeholder15' | translate}}\" type=\"number\" [ngClass]=\"{ 'is-invalid': isFormSubmitted && controllVariations.controls[i].get('compare_price').errors }\"/>\r\n                                                    </div>\r\n                                                </td>\r\n                                                <td>\r\n                                                    <div class=\"form-group\">\r\n                                                        <input class=\"form-control\" formControlName=\"check\" id=\"check-variations-{{i}}\" placeholder=\"{{'posts.create.placeholders.placeholder11' | translate}}\" type=\"checkbox\"/>\r\n                                                    </div>\r\n                                                </td>\r\n                                            </tr>\r\n                                            </tbody>\r\n                                        </table>\r\n                                    </div>\r\n                                </div>\r\n                            </div>\r\n                        </div>\r\n                    </div>\r\n                </div>\r\n                <div class=\"card\">\r\n                    <div class=\"card-body\">\r\n                        <div class=\"px-3\">\r\n                            <div class=\"form-body\">\r\n                                <h4 class=\"form-section\" (click)=\"isCollapsedHead4 = !isCollapsedHead4\" [attr.aria-expanded]=\"!isCollapsedHead4\" aria-controls=\"collapseBasic\">\r\n                                    {{'posts.headings.head2' | translate}}\r\n                                    <i class=\"fa\" [ngClass] = \"isCollapsedHead4 ? 'fa-plus' : 'fa-minus'\"></i>\r\n                                </h4>\r\n                                <div class=\"row\" [collapse]=\"isCollapsedHead4\" [isAnimated]=\"true\">\r\n                                    <div class=\"col-md-12\">\r\n                                        <div [ngClass]=\"{ 'is-invalid': isFormSubmitted && postControl.page_title.errors }\" class=\"form-group\">\r\n                                            <label for=\"page_title\">{{'posts.create.fields.page_title' | translate}}\r\n                                            </label>\r\n                                            <input [ngClass]=\"{ 'is-invalid': isFormSubmitted && postControl.page_title.errors }\" class=\"form-control\" formControlName=\"page_title\" id=\"page_title\" placeholder=\"{{'posts.create.placeholders.placeholder7' | translate }}\" type=\"text\"/>\r\n                                            <div *ngIf=\"isFormSubmitted && postControl.page_title.errors\" class=\"invalid-feedback\">\r\n                                                <div *ngIf=\"postControl.page_title.errors.required\">{{'posts.create.error_messages.message1' | translate}}</div>\r\n                                            </div>\r\n                                        </div>\r\n                                    </div>\r\n                                    <div class=\"col-md-12\">\r\n                                        <div [ngClass]=\"{ 'is-invalid': isFormSubmitted && postControl.page_description.errors }\" class=\"form-group\">\r\n                                            <label for=\"page_description\">{{'posts.create.fields.page_description' | translate}}\r\n                                            </label>\r\n                                            <textarea [ngClass]=\"{ 'is-invalid': isFormSubmitted && postControl.page_description.errors }\" class=\"form-control\" formControlName=\"page_description\" id=\"page_description\" name=\"page_description\" placeholder=\"{{'posts.create.placeholders.placeholder8' | translate}}\"></textarea>\r\n                                            <div *ngIf=\"isFormSubmitted && postControl.page_description.errors\" class=\"invalid-feedback\">\r\n                                                <div *ngIf=\"postControl.page_description.errors.required\">{{'posts.create.error_messages.message2' | translate}}</div>\r\n                                            </div>\r\n                                        </div>\r\n                                    </div>\r\n                                    <div class=\"col-md-12\">\r\n                                        <div [ngClass]=\"{ 'is-invalid': isFormSubmitted && postControl.url_and_handle.errors }\" class=\"form-group\">\r\n                                            <label for=\"url_and_handle\">{{'posts.create.fields.url_and_handle' | translate}}&nbsp;<span class=\"text-danger\">*</span>\r\n                                            </label>\r\n                                            <input [ngClass]=\"{ 'is-invalid': isFormSubmitted && postControl.url_and_handle.errors }\" class=\"form-control\" formControlName=\"url_and_handle\" id=\"url_and_handle\" placeholder=\"{{'posts.create.placeholders.placeholder9' | translate }}\" type=\"text\"/>\r\n                                            <div *ngIf=\"isFormSubmitted && postControl.url_and_handle.errors\" class=\"invalid-feedback\">\r\n                                                <div *ngIf=\"postControl.url_and_handle.errors.required\">{{'posts.create.error_messages.message3' | translate}}</div>\r\n                                            </div>\r\n                                        </div>\r\n                                    </div>\r\n                                    <div class=\"col-md-12\">\r\n                                        <div class=\"form-group\">\r\n                                            <label for=\"seo\">{{'seo.create.fields.meta' | translate}}</label>\r\n                                            <ng-select (add)=\"onAddMetaTag($event)\" (remove)=\"onRemoveMetaTag($event)\" [clearable]=\"false\" [multiple]=\"true\" [items]=\"seoData\" [searchable]=\"true\" [selectOnTab]=\"true\" bindLabel=\"label\" bindValue=\"id\" formControlName=\"seo\" labelForId=\"seo\" placeholder=\"{{'seo.create.placeholders.placeholder6' | translate}}\">\r\n                                                <ng-template let-item=\"item\" ng-option-tmp>\r\n                                                    {{item.label}}\r\n                                                </ng-template>\r\n                                            </ng-select>\r\n                                        </div>\r\n                                    </div>\r\n                                    <div class=\"px-2\">\r\n                                        <div class=\"table-responsive-xs table-responsive-sm table-responsive-md table-responsive-lg table-responsive-xl\" formArrayName=\"seoData\">\r\n                                            <table class=\"table table-bordered table-hover b4-datatable\" id=\"variations_table\" width=\"100%\">\r\n                                                <thead>\r\n                                                <tr>\r\n                                                    <th>{{'seo.create.fields.stt' | translate}}</th>\r\n                                                    <th >{{'seo.create.fields.meta' | translate}}</th>\r\n                                                    <th>{{'seo.create.fields.content' | translate}}</th>\r\n                                                </tr>\r\n                                                </thead>\r\n                                                <tbody>\r\n                                                <tr  *ngFor=\"let seo of editPostForm.controls.seoData.controls; let i=index\" [formGroupName]=\"i\">\r\n                                                    <td>\r\n                                                        <label>{{i+1}}</label>\r\n                                                    </td>\r\n                                                    <td >\r\n                                                        <div class=\"form-group\">\r\n                                                            <label>{{editPostForm.value.seoData[i]['meta']}}</label>\r\n                                                        </div>\r\n                                                    </td>\r\n                                                    <td>\r\n                                                        <div class=\"form-group\">\r\n                                                            <textarea class=\"form-control\" formControlName=\"content\"  name=\"description\" placeholder=\"{{'seo.create.placeholders.placeholder7' | translate}}\"></textarea>\r\n                                                        </div>\r\n                                                    </td>\r\n                                                </tr>\r\n                                                </tbody>\r\n                                            </table>\r\n                                        </div>\r\n                                    </div>\r\n                                </div>\r\n                            </div>\r\n                        </div>\r\n                    </div>\r\n                </div>\r\n            </div>\r\n            <div class=\"col-md-4\">\r\n                <div class=\"card\">\r\n                    <div class=\"card-body\">\r\n                        <div class=\"px-3\">\r\n                            <div class=\"form-body\">\r\n                                <div class=\"row\">\r\n                                    <div class=\"col-md-12\">\r\n                                        <div [ngClass]=\"{ 'is-invalid': isFormSubmitted && postControl.active.errors }\" class=\"form-group mg-t-1rem\">\r\n                                            <label for=\"active\">{{'posts.create.fields.active' | translate}}&nbsp;<span class=\"text-danger\">*</span>\r\n                                            </label>\r\n                                            <ng-select [items]=\"liststatus\" [searchable]=\"false\" [selectOnTab]=\"true\" bindValue=\"value\" formControlName=\"active\" labelForId=\"active\" placeholder=\"{{'posts.create.placeholders.placeholder4' | translate}}\"></ng-select>\r\n                                            <div *ngIf=\"isFormSubmitted && postControl.active.errors\" class=\"invalid-feedback\">\r\n                                                <div *ngIf=\"postControl.active.errors.required\">{{'posts.create.error_messages.message4' | translate}}</div>\r\n\r\n                                            </div>\r\n                                        </div>\r\n                                    </div>\r\n                                </div>\r\n                            </div>\r\n                        </div>\r\n                    </div>\r\n                </div>\r\n                <div class=\"card\" *ngIf=\"moduletype == 'products'\">\r\n                    <div class=\"card-body\">\r\n                        <div class=\"px-3\">\r\n                            <div class=\"form-body\">\r\n                                <div class=\"row\">\r\n                                    <div class=\"col-md-12\">\r\n                                        <div [ngClass]=\"{ 'is-invalid': isFormSubmitted && postControl.manufacturers.errors }\" class=\"form-group mg-t-1rem\">\r\n                                            <label for=\"manufacturers\">{{'posts.create.fields.manufacturers' | translate}}&nbsp;<span class=\"text-danger\">*</span>\r\n                                            </label>\r\n                                            <ng-select [items]=\"manufacturers\" [multiple]=\"false\" [searchable]=\"true\" bindLabel=\"name\" bindValue=\"indentify\" formControlName=\"manufacturers\" placeholder=\"{{'posts.create.placeholders.placeholder13' | translate}}\">\r\n                                                <ng-template let-item=\"item\" ng-option-tmp>\r\n                                                    {{item.name}}\r\n                                                </ng-template>\r\n                                            </ng-select>\r\n                                            <div *ngIf=\"isFormSubmitted && postControl.manufacturers.errors\" class=\"invalid-feedback\">\r\n                                                <div *ngIf=\"postControl.manufacturers.errors.required\">{{'posts.create.error_messages.message2' | translate}}</div>\r\n                                            </div>\r\n                                        </div>\r\n                                    </div>\r\n                                </div>\r\n                            </div>\r\n                        </div>\r\n                    </div>\r\n                </div>\r\n                <div class=\"card\">\r\n                    <div class=\"card-body\">\r\n                        <div class=\"px-3\">\r\n                            <div class=\"form-body\">\r\n                                <div class=\"row\">\r\n                                    <div class=\"col-md-12\">\r\n                                        <div [ngClass]=\"{ 'is-invalid': isFormSubmitted && postControl.pages_id.errors }\" class=\"form-group mg-t-1rem\">\r\n                                            <label for=\"pages_id\">{{'posts.create.fields.template' | translate}}&nbsp;<span class=\"text-danger\">*</span>\r\n                                            </label>\r\n                                            <ng-select [items]=\"listTemplate\" [searchable]=\"true\" [selectOnTab]=\"true\" bindLabel=\"name\" bindValue=\"id\" formControlName=\"pages_id\" labelForId=\"pages_id\" placeholder=\"{{'posts.create.placeholders.placeholder6' | translate}}\"></ng-select>\r\n                                            <div *ngIf=\"isFormSubmitted && postControl.pages_id.errors\" class=\"invalid-feedback\">\r\n                                                <div *ngIf=\"postControl.pages_id.errors.required\">{{'posts.create.error_messages.message2' | translate}}</div>\r\n                                            </div>\r\n                                        </div>\r\n                                    </div>\r\n                                </div>\r\n                            </div>\r\n                        </div>\r\n                    </div>\r\n                </div>\r\n                <div class=\"card\">\r\n                    <div class=\"card-body\">\r\n                        <div class=\"px-3\">\r\n                            <div class=\"form-body\">\r\n                                <div class=\"row\">\r\n                                    <div class=\"col-md-12\">\r\n                                        <div [ngClass]=\"{ 'is-invalid': isFormSubmitted && postControl.avatar.errors }\" class=\"form-group mg-t-1rem\">\r\n                                            <label for=\"avatar\">{{'posts.create.fields.avatar' | translate}}&nbsp;<span class=\"text-danger\">*</span>\r\n                                            </label>\r\n                                            <input formControlName=\"avatar\" type=\"hidden\">\r\n                                            <div #avatardropzone class=\"dropzone dz-clickable\">\r\n                                                <div *ngIf=\"isLogoLoaded && post.avatar\" class=\"dz-preview dz-image-preview\">\r\n                                                    <div class=\"dz-image\">\r\n                                                        <img height=\"100\" src=\"{{apiUrl}}/uploads/project/{{post.avatar}}\" width=\"100\"/>\r\n                                                    </div>\r\n                                                    <a (click)=\"removeDropzoneImage()\" class=\"btn btn-sm btn-block\">{{ 'common.remove_file' | translate }}</a>\r\n                                                </div>\r\n                                                <div class=\"dz-default dz-message\">\r\n                                                    <span><strong>{{'posts.create.placeholders.placeholder11' | translate }}</strong></span>\r\n                                                </div>\r\n                                            </div>\r\n                                        </div>\r\n                                    </div>\r\n                                </div>\r\n                            </div>\r\n                        </div>\r\n                    </div>\r\n                </div>\r\n                <div class=\"card\">\r\n                    <div class=\"card-body\">\r\n                        <div class=\"px-3\">\r\n                            <div class=\"form-body\">\r\n                                <div class=\"row\">\r\n                                    <div class=\"col-md-12\">\r\n                                        <div [ngClass]=\"{ 'is-invalid': isFormSubmitted && postControl.keyword.errors }\" class=\"form-group mg-t-1rem\">\r\n                                            <label for=\"keyword\">{{'posts.create.fields.keyword' | translate}}\r\n                                            </label>\r\n                                            <ng-select [items]=\"keywordData\" [addTag]=\"true\" [multiple]=\"true\" placeholder=\"{{'posts.create.placeholders.placeholder5' | translate }}\" formControlName=\"keyword\"> </ng-select>\r\n                                        </div>\r\n                                    </div>\r\n                                </div>\r\n                            </div>\r\n                        </div>\r\n                    </div>\r\n                </div>\r\n                <div class=\"card\">\r\n                    <div class=\"card-body\">\r\n                        <div class=\"px-3\">\r\n                            <div class=\"form-body\">\r\n                                <div class=\"row\">\r\n                                    <div class=\"col-md-12\">\r\n                                        <div [ngClass]=\"{ 'is-invalid': isFormSubmitted && postControl.collections.errors }\" class=\"form-group mg-t-1rem\">\r\n                                            <label for=\"collections\">{{'posts.create.fields.collections' | translate}}\r\n                                            </label>\r\n                                            <ng-select [items]=\"collectionsData\" bindValue=\"id\" bindLabel=\"name\" [multiple]=\"true\" placeholder=\"{{'posts.create.placeholders.placeholder16' | translate }}\" formControlName=\"collections\"> </ng-select>\r\n                                        </div>\r\n                                    </div>\r\n                                </div>\r\n                            </div>\r\n                        </div>\r\n                    </div>\r\n                </div>\r\n            </div>\r\n            <div class=\"col-md-12\">\r\n                <div class=\"card\">\r\n                    <div class=\"card-body\">\r\n                        <div class=\"px-3\">\r\n                            <div class=\"form-body\">\r\n                                <div class=\"row mb-3\">\r\n                                    <div class=\"col-md-12 text-right pt-3\">\r\n                                        <a [routerLink]=\"urlPage\" class=\"btn btn-cancel mb-0\">{{'common.cancel' | translate }}</a>\r\n                                        <button class=\"btn btn-submit mb-0\" type=\"submit\">{{'common.create' | translate }}</button>\r\n                                    </div>\r\n                                </div>\r\n                            </div>\r\n                        </div>\r\n                    </div>\r\n                </div>\r\n            </div>\r\n        </div>\r\n    </form>\r\n</section>\r\n");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/modules/posts/posts/pages/post-lists/post-lists.component.html":
/*!**********************************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/modules/posts/posts/pages/post-lists/post-lists.component.html ***!
  \**********************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<section class=\"hide_empty_message\">\r\n    <div class=\"row\">\r\n        <div class=\"col-sm-12\">\r\n            <div class=\"card pl-2 pr-2\">\r\n                <div class=\"card-header pl-0 pr-0 border-bottom\">\r\n                    <h4 class=\"main-title mt-2\">\r\n                        <span *ngIf=\"moduletype == 'news'\">{{'posts.title' | translate}}</span>\r\n                        <span *ngIf=\"moduletype != 'news'\">{{'posts.title1' | translate}}</span>\r\n                    </h4>\r\n                    <div *ngxPermissionsOnly=\"['admin', 'super_admin', 'posts_create']\" class=\"card-buttons\">\r\n                        <a [routerLink]=\"getUrl('create', '')\" class=\"btn btn-create mb-0\" tooltip=\"{{'common.create' | translate}}\"><i class=\"fa fa-plus\"></i></a>\r\n                    </div>\r\n                </div>\r\n                <div class=\"card-content pt-3 pb-3\">\r\n                    <div class=\"card-body\">\r\n                        <div class=\"row\">\r\n                            <div class=\"col-sm-12\">\r\n                                <div class=\"table-responsive-xs table-responsive-sm table-responsive-md table-responsive-lg table-responsive-xl\">\r\n                                    <table [dtOptions]=\"dtOptions\" [dtTrigger]=\"dtTrigger\" class=\"table table-bordered table-hover b4-datatable\" datatable id=\"post_table\" width=\"100%\">\r\n                                        <thead>\r\n                                        <tr>\r\n                                            <th>{{'posts.columns.name' | translate}}</th>\r\n                                            <th>{{'posts.columns.description' | translate}}</th>\r\n                                            <th>{{'posts.columns.parent' | translate}}</th>\r\n                                            <th>{{'common.actions' | translate}}</th>\r\n                                        </tr>\r\n                                        </thead>\r\n                                        <tbody>\r\n                                        <tr *ngFor=\"let post of posts; index as i\">\r\n                                            <td>\r\n                                                <a class=\"\" href=\"{{apiUrl}}/{{post.url}}{{post.prefix}}{{post.alias}}\" placement=\"top\" target=\"_blank\" tooltip=\"{{'common.view' | translate}}\">{{post.name}}</a>\r\n                                            </td>\r\n                                            <td>{{post.description}}</td>\r\n                                            <td>{{post.categoryName}}</td>\r\n                                            <td class=\"actions-dropdown\">\r\n                                                <div class=\"btn-group\" dropdown>\r\n                                                    <button aria-controls=\"dropdown-basic-1\" class=\"dropdown-toggle btn-action\" dropdownToggle id=\"button-basic-1\" type=\"button\">\r\n                                                        <i class=\"fa fa-ellipsis-v\"></i></button>\r\n                                                    <ul *dropdownMenu aria-labelledby=\"button-basic-1\" class=\"dropdown-menu animated fadeIn\" id=\"dropdown-basic-1\" role=\"menu\">\r\n                                                        <li role=\"menuitem\">\r\n                                                            <a *ngxPermissionsOnly=\"['admin', 'super_admin', 'posts_edit']\" [routerLink]=\"getUrl('edit', post.id)\" class=\"dropdown-item btn btn-edit btn-raised\"><i class=\"fa fa-pencil-square-o\" tooltip=\"{{'common.edit' | translate}}\"></i></a>\r\n                                                        </li>\r\n                                                        <li role=\"menuitem\">\r\n                                                            <a (click)=\"deletePost(post.id)\" *ngxPermissionsOnly=\"['admin', 'super_admin', 'posts_delete']\" class=\"dropdown-item btn btn-delete btn-raised\"><i class=\"fa fa-trash-o\" tooltip=\"{{'common.delete' | translate}}\"></i></a>\r\n                                                        </li>\r\n                                                    </ul>\r\n                                                </div>\r\n                                            </td>\r\n                                        </tr>\r\n                                        </tbody>\r\n                                        <tfoot *ngIf=\"posts?.length == 0\" class=\"tfoot_dt\">\r\n                                        <tr>\r\n                                            <td class=\"no-data-available text-center\" colspan=\"4\">{{'common.datatable.sEmptyTable' | translate}}</td>\r\n                                        </tr>\r\n                                        </tfoot>\r\n                                    </table>\r\n                                </div>\r\n                            </div>\r\n                        </div>\r\n                    </div>\r\n                </div>\r\n            </div>\r\n        </div>\r\n    </div>\r\n</section>\r\n");

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

/***/ "./src/app/core/services/posts.service.ts":
/*!************************************************!*\
  !*** ./src/app/core/services/posts.service.ts ***!
  \************************************************/
/*! exports provided: PostsService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PostsService", function() { return PostsService; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../environments/environment */ "./src/environments/environment.ts");




var PostsService = /** @class */ (function () {
    function PostsService(http) {
        this.http = http;
        this.apiUrl = _environments_environment__WEBPACK_IMPORTED_MODULE_3__["environment"].apiUrl;
    }
    PostsService.prototype.getAll = function () {
        return this.http.get(this.apiUrl + "/api/posts");
    };
    PostsService.prototype.getTemplate = function () {
        return this.http.get(this.apiUrl + "/api/posts/get-template");
    };
    PostsService.prototype.getById = function (id) {
        return this.http.get(this.apiUrl + "/api/posts/get-by-id/" + id);
    };
    PostsService.prototype.create = function (posts) {
        return this.http.post(this.apiUrl + "/api/posts", posts);
    };
    PostsService.prototype.update = function (posts) {
        return this.http.put(this.apiUrl + "/api/posts/" + posts.id, posts);
    };
    PostsService.prototype.delete = function (id) {
        return this.http.delete(this.apiUrl + "/api/posts/destroy/" + id);
    };
    PostsService.ctorParameters = function () { return [
        { type: _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClient"] }
    ]; };
    PostsService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
            providedIn: 'root'
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClient"]])
    ], PostsService);
    return PostsService;
}());



/***/ }),

/***/ "./src/app/modules/posts/posts/pages/post-create/post-create.component.scss":
/*!**********************************************************************************!*\
  !*** ./src/app/modules/posts/posts/pages/post-create/post-create.component.scss ***!
  \**********************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = (".mg-t-1rem {\n  margin-top: 1rem;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvbW9kdWxlcy9wb3N0cy9wb3N0cy9wYWdlcy9wb3N0LWNyZWF0ZS9DOlxcVXNlcnNcXHRodWFuXFxPbmVEcml2ZVxcRGVza3RvcFxcZ2xhdmFsLXRodWFuZGluaC9zcmNcXGFwcFxcbW9kdWxlc1xccG9zdHNcXHBvc3RzXFxwYWdlc1xccG9zdC1jcmVhdGVcXHBvc3QtY3JlYXRlLmNvbXBvbmVudC5zY3NzIiwic3JjL2FwcC9tb2R1bGVzL3Bvc3RzL3Bvc3RzL3BhZ2VzL3Bvc3QtY3JlYXRlL3Bvc3QtY3JlYXRlLmNvbXBvbmVudC5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0ksZ0JBQUE7QUNDSiIsImZpbGUiOiJzcmMvYXBwL21vZHVsZXMvcG9zdHMvcG9zdHMvcGFnZXMvcG9zdC1jcmVhdGUvcG9zdC1jcmVhdGUuY29tcG9uZW50LnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyIubWctdC0xcmVtIHtcclxuICAgIG1hcmdpbi10b3A6IDFyZW07XHJcbn1cclxuIiwiLm1nLXQtMXJlbSB7XG4gIG1hcmdpbi10b3A6IDFyZW07XG59Il19 */");

/***/ }),

/***/ "./src/app/modules/posts/posts/pages/post-create/post-create.component.ts":
/*!********************************************************************************!*\
  !*** ./src/app/modules/posts/posts/pages/post-create/post-create.component.ts ***!
  \********************************************************************************/
/*! exports provided: PostCreateComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PostCreateComponent", function() { return PostCreateComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var ngx_toastr__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ngx-toastr */ "./node_modules/ngx-toastr/fesm5/ngx-toastr.js");
/* harmony import */ var _ngx_translate_core__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @ngx-translate/core */ "./node_modules/@ngx-translate/core/fesm5/ngx-translate-core.js");
/* harmony import */ var _core_services_posts_service__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../../../../../core/services/posts.service */ "./src/app/core/services/posts.service.ts");
/* harmony import */ var _core_services_item_service__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../../../../../core/services/item.service */ "./src/app/core/services/item.service.ts");
/* harmony import */ var _core_services_client_service__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../../../../../core/services/client.service */ "./src/app/core/services/client.service.ts");
/* harmony import */ var _core_services_tax_service__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ../../../../../core/services/tax.service */ "./src/app/core/services/tax.service.ts");
/* harmony import */ var _core_services_authentication_service__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ../../../../../core/services/authentication.service */ "./src/app/core/services/authentication.service.ts");
/* harmony import */ var _core_services_categorys_service__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ../../../../../core/services/categorys.service */ "./src/app/core/services/categorys.service.ts");
/* harmony import */ var _core_services_options_service__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ../../../../../core/services/options.service */ "./src/app/core/services/options.service.ts");
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ../../../../../../environments/environment */ "./src/environments/environment.ts");
/* harmony import */ var src_app_core_services_seo_service__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! src/app/core/services/seo.service */ "./src/app/core/services/seo.service.ts");
/* harmony import */ var src_app_core_services_collections_service__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! src/app/core/services/collections.service */ "./src/app/core/services/collections.service.ts");
/* harmony import */ var dropzone__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! dropzone */ "./node_modules/dropzone/dist/dropzone.js");
/* harmony import */ var dropzone__WEBPACK_IMPORTED_MODULE_17___default = /*#__PURE__*/__webpack_require__.n(dropzone__WEBPACK_IMPORTED_MODULE_17__);







// import {PostSettingService} from '../../../../../core/services/post-setting.service';











var PostCreateComponent = /** @class */ (function () {
    function PostCreateComponent(translate, datepipe, router, formBuilder, toastr, categorysService, postsService, clientService, itemService, optionsService, taxService, seoService, collectionsService, authenticationService) {
        var _this_1 = this;
        this.translate = translate;
        this.datepipe = datepipe;
        this.router = router;
        this.formBuilder = formBuilder;
        this.toastr = toastr;
        this.categorysService = categorysService;
        this.postsService = postsService;
        this.clientService = clientService;
        this.itemService = itemService;
        this.optionsService = optionsService;
        this.taxService = taxService;
        this.seoService = seoService;
        this.collectionsService = collectionsService;
        this.authenticationService = authenticationService;
        this.liststatus = [
            { value: 'yes', label: 'Show' },
            { value: 'no', label: 'Hide' }
        ];
        this.selectedFiles = [];
        this.keywordData = [];
        this.collectionsData = [];
        this.propertiesHeader = [];
        this.specifications = [];
        this.listposts = [];
        this.listcategorys = [];
        this.listTemplate = [];
        this.isFormSubmitted = false;
        this.isFormLoaded = false;
        this.datepickerConfig = {
            dateInputFormat: 'YYYY-MM-DD',
            containerClass: 'theme-red'
        };
        this.apiUrl = _environments_environment__WEBPACK_IMPORTED_MODULE_14__["environment"].apiUrl;
        this.authenticationService.loginUser.subscribe(function (x) { return _this_1.loginUser = x; });
    }
    Object.defineProperty(PostCreateComponent.prototype, "postControl", {
        get: function () {
            return this.createPostForm.controls;
        },
        enumerable: true,
        configurable: true
    });
    PostCreateComponent.prototype.ngOnInit = function () {
        if (this.router.url === '/allnews/create') {
            this.moduletype = 'news';
            this.urlPage = '/allnews';
        }
        else {
            this.moduletype = 'products';
            this.urlPage = '/allproducts';
            this.getOptions('manufacturers');
            this.getOptions('properties');
            this.getAllMeta();
            this.getAllKeyword();
            // this.getOptions('specifications');
        }
        this.getAllCollections();
        this.getTemplate();
    };
    PostCreateComponent.prototype.loadForm = function () {
        var that = this;
        this.createPostForm = this.formBuilder.group({
            name: [null, _angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].required],
            description: [null],
            category: [null, _angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].required],
            page_title: [null],
            page_description: [null],
            url_and_handle: [null, _angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].required],
            active: [null, _angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].required],
            keyword: [null],
            avatar: [null, _angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].required],
            po_types_indentify: [this.moduletype],
            pages_id: [null, _angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].required],
            price: [null, _angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].required],
            compare_price: [null, _angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].required],
            image: [null],
            seoData: this.formBuilder.array([]),
            seo: [null],
            collections: [null],
            content: [null, _angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].required],
            manufacturers: [null, _angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].required],
            properties: [null],
            variations: this.formBuilder.array([]),
            specifications: this.formBuilder.array([])
        });
        if (this.moduletype == 'products') {
        }
        else {
            this.createPostForm.get('properties').setValidators([]);
            this.createPostForm.get('properties').updateValueAndValidity();
            this.createPostForm.get('manufacturers').setValidators([]);
            this.createPostForm.get('manufacturers').updateValueAndValidity();
            this.createPostForm.get('price').setValidators([]);
            this.createPostForm.get('price').updateValueAndValidity();
            this.createPostForm.get('compare_price').setValidators([]);
            this.createPostForm.get('compare_price').updateValueAndValidity();
        }
        setTimeout(function () {
            that.loadDropzone('avatardropzone');
            that.loadDropzone('imagedropzone');
        });
        this.isFormLoaded = true;
    };
    PostCreateComponent.prototype.getAllKeyword = function () {
        var _this_1 = this;
        this.seoService.getAllKeyword()
            .subscribe(function (data) {
            _this_1.keywordData = data;
        });
    };
    PostCreateComponent.prototype.getAllCollections = function () {
        var _this_1 = this;
        this.collectionsService.getAll()
            .subscribe(function (data) {
            if (Array.isArray(data)) {
                _this_1.collectionsData = data.filter(function (res) { return (res.id != null && res['type'] == "select" && res['po_types_indentify'] == _this_1.moduletype); });
            }
        });
    };
    PostCreateComponent.prototype.getAllMeta = function () {
        var _this_1 = this;
        this.seoService.getAllMeta()
            .subscribe(function (data) {
            _this_1.seoData = data;
        });
    };
    Object.defineProperty(PostCreateComponent.prototype, "controllSpecifications", {
        get: function () {
            return this.createPostForm.get('specifications');
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(PostCreateComponent.prototype, "controllVariations", {
        get: function () {
            return this.createPostForm.get('variations');
        },
        enumerable: true,
        configurable: true
    });
    PostCreateComponent.prototype.getSeoData = function (data) {
        return this.formBuilder.group({
            meta: [data.label, _angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].required],
            meta_id: [data.id, _angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].required],
            content: [null]
        });
    };
    PostCreateComponent.prototype.addSeoData = function (data) {
        var control = this.createPostForm.controls['seoData'];
        control.push(this.getSeoData(data));
    };
    PostCreateComponent.prototype.onAddMetaTag = function (even) {
        var control = this.createPostForm.controls['seoData'];
        control.push(this.getSeoData(even));
    };
    PostCreateComponent.prototype.onRemoveMetaTag = function (even) {
        this.createPostForm.get('seoData').removeAt(even.index);
    };
    PostCreateComponent.prototype.changeCategory = function (even) {
        this.specifications = even.specifications;
        console.log(this.specifications);
        this.createPostForm.get('specifications').clear();
        if (even.specifications.length > 0) {
            for (var _i = 0, _a = even.specifications; _i < _a.length; _i++) {
                var specification = _a[_i];
                this.addSpecifications(specification);
            }
        }
    };
    PostCreateComponent.prototype.addSpecifications = function (data) {
        var control = this.createPostForm.controls['specifications'];
        control.push(this.getSpecifications(data));
    };
    PostCreateComponent.prototype.getSpecifications = function (data) {
        return this.formBuilder.group({
            name: [data.name, _angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].required],
            options_indentify: [data.options_indentify, _angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].required],
            value: [null, _angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].required],
            check: [true]
        });
    };
    PostCreateComponent.prototype.builVariations = function (data, listIndexVariations) {
        var variationsData = [];
        for (var i = 0; i < listIndexVariations.length; i++) {
            variationsData.push(data[i].value[listIndexVariations[i]]);
        }
        var controlVariations = this.createPostForm.controls['variations'];
        controlVariations.push(this.getVariations(variationsData));
        for (var j = listIndexVariations.length - 1; j >= 0; j--) {
            if (listIndexVariations[j] >= data[j].value.length - 1) {
                listIndexVariations[j] = 0;
            }
            else {
                listIndexVariations[j] = listIndexVariations[j] + 1;
                return this.builVariations(data, listIndexVariations);
            }
        }
        console.log(controlVariations);
    };
    PostCreateComponent.prototype.changePropertiesList = function (even) {
        this.propertiesHeader = even;
        console.log(this.propertiesHeader);
        this.createPostForm.get('variations').clear();
        if (even.length > 0) {
            var listIndexVariations = [];
            for (var i = 0; i < even.length; i++) {
                listIndexVariations.push(0);
            }
            this.builVariations(even, listIndexVariations);
        }
    };
    PostCreateComponent.prototype.getVariations = function (data) {
        var variationsData = {
            price: ['', [_angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].required, _angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].min(1)]],
            compare_price: ['', [_angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].required, _angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].min(1)]],
            check: [true]
        };
        for (var i = 0; i < data.length; i++) {
            variationsData[data[i].options_indentify] = [data[i].indentify, _angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].required];
            variationsData[data[i].options_indentify + 'label'] = [data[i].name];
        }
        return this.formBuilder.group(variationsData);
    };
    PostCreateComponent.prototype.getOptions = function (action) {
        var _this_1 = this;
        this.optionsService.getAll(action).subscribe(function (data) {
            switch (action) {
                case 'manufacturers':
                    _this_1.manufacturers = data;
                    break;
                case 'properties':
                    _this_1.properties = data;
                    break;
                case 'specifications':
                    _this_1.specifications = data;
                    break;
            }
        });
    };
    PostCreateComponent.prototype.getCategorys = function () {
        var _this_1 = this;
        this.categorysService.getAll().subscribe(function (data) {
            _this_1.listcategorys = data;
            if (Array.isArray(data)) {
                _this_1.listcategorys = data.filter(function (res) { return (res.id != null && res['po_types_indentify'] == _this_1.moduletype); });
            }
            _this_1.loadForm();
        });
    };
    PostCreateComponent.prototype.getTemplate = function () {
        var _this_1 = this;
        this.postsService.getTemplate().subscribe(function (data) {
            if (Array.isArray(data)) {
                _this_1.listTemplate = data.filter(function (res) { return res.type == (_this_1.moduletype == 'news' ? 4 : 3); });
            }
            _this_1.getCategorys();
        });
    };
    PostCreateComponent.prototype.onSubmit = function () {
        var _this_1 = this;
        this.isFormSubmitted = true;
        this.createPostForm.patchValue({ image: this.selectedFiles });
        if (this.createPostForm.invalid) {
            return;
        }
        this.postsService.create(this.createPostForm.value)
            .subscribe(function (data) {
            _this_1.toastr.success(_this_1.translate.instant('posts.messages.create'), _this_1.translate.instant('posts.title'));
            _this_1.router.navigate([_this_1.urlPage]);
        });
    };
    PostCreateComponent.prototype.loadDropzone = function (elementDropzone) {
        var that = this;
        var limitFile;
        elementDropzone == 'avatardropzone' ? limitFile = 1 : limitFile = 100;
        var myDropzone = new dropzone__WEBPACK_IMPORTED_MODULE_17__(this[elementDropzone].nativeElement, {
            url: 'https://httpbin.org/post',
            maxFiles: limitFile,
            clickable: true,
            acceptedFiles: 'image/*',
            createImageThumbnails: true,
            init: function () {
                this.on('addedfile', function (file) {
                    var removeButton = dropzone__WEBPACK_IMPORTED_MODULE_17__["createElement"]('<button class=\'btn btn-sm btn-block\'>' + that.translate.instant('common.remove_file') + '</button>');
                    var _this = this;
                    removeButton.addEventListener('click', function (e) {
                        e.preventDefault();
                        e.stopPropagation();
                        _this.removeFile(file);
                    });
                    file.previewElement.appendChild(removeButton);
                    if (file) {
                        var reader_1 = new FileReader();
                        if (elementDropzone == 'avatardropzone') {
                            reader_1.onload = function (e) {
                                that.createPostForm.patchValue({ avatar: reader_1.result });
                            };
                        }
                        else {
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
                        }
                        reader_1.readAsDataURL(file);
                    }
                });
                this.on('removedfile', function (file) {
                    if (elementDropzone == 'avatardropzone') {
                        that.createPostForm.patchValue({ avatar: null });
                    }
                    else {
                        that.fileDetails = file;
                        that.selectedFiles.forEach(function (value, index) {
                            if (value.uuid == that.fileDetails.upload.uuid) {
                                that.selectedFiles.splice(index, 1);
                            }
                        });
                    }
                });
                this.on('error', function (file, message) {
                    if (file) {
                        that.toastr.error(message);
                    }
                });
            }
        });
    };
    PostCreateComponent.ctorParameters = function () { return [
        { type: _ngx_translate_core__WEBPACK_IMPORTED_MODULE_6__["TranslateService"] },
        { type: _angular_common__WEBPACK_IMPORTED_MODULE_2__["DatePipe"] },
        { type: _angular_router__WEBPACK_IMPORTED_MODULE_4__["Router"] },
        { type: _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormBuilder"] },
        { type: ngx_toastr__WEBPACK_IMPORTED_MODULE_5__["ToastrService"] },
        { type: _core_services_categorys_service__WEBPACK_IMPORTED_MODULE_12__["CategorysService"] },
        { type: _core_services_posts_service__WEBPACK_IMPORTED_MODULE_7__["PostsService"] },
        { type: _core_services_client_service__WEBPACK_IMPORTED_MODULE_9__["ClientService"] },
        { type: _core_services_item_service__WEBPACK_IMPORTED_MODULE_8__["ItemService"] },
        { type: _core_services_options_service__WEBPACK_IMPORTED_MODULE_13__["OptionsService"] },
        { type: _core_services_tax_service__WEBPACK_IMPORTED_MODULE_10__["TaxService"] },
        { type: src_app_core_services_seo_service__WEBPACK_IMPORTED_MODULE_15__["SeoService"] },
        { type: src_app_core_services_collections_service__WEBPACK_IMPORTED_MODULE_16__["CollectionsService"] },
        { type: _core_services_authentication_service__WEBPACK_IMPORTED_MODULE_11__["AuthenticationService"] }
    ]; };
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewChild"])('avatardropzone', { static: false }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", _angular_core__WEBPACK_IMPORTED_MODULE_1__["ElementRef"])
    ], PostCreateComponent.prototype, "avatardropzone", void 0);
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewChild"])('imagedropzone', { static: false }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", _angular_core__WEBPACK_IMPORTED_MODULE_1__["ElementRef"])
    ], PostCreateComponent.prototype, "imagedropzone", void 0);
    PostCreateComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-post-create',
            template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./post-create.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/modules/posts/posts/pages/post-create/post-create.component.html")).default,
            providers: [_angular_common__WEBPACK_IMPORTED_MODULE_2__["DatePipe"]],
            styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./post-create.component.scss */ "./src/app/modules/posts/posts/pages/post-create/post-create.component.scss")).default]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_ngx_translate_core__WEBPACK_IMPORTED_MODULE_6__["TranslateService"],
            _angular_common__WEBPACK_IMPORTED_MODULE_2__["DatePipe"],
            _angular_router__WEBPACK_IMPORTED_MODULE_4__["Router"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormBuilder"],
            ngx_toastr__WEBPACK_IMPORTED_MODULE_5__["ToastrService"],
            _core_services_categorys_service__WEBPACK_IMPORTED_MODULE_12__["CategorysService"],
            _core_services_posts_service__WEBPACK_IMPORTED_MODULE_7__["PostsService"],
            _core_services_client_service__WEBPACK_IMPORTED_MODULE_9__["ClientService"],
            _core_services_item_service__WEBPACK_IMPORTED_MODULE_8__["ItemService"],
            _core_services_options_service__WEBPACK_IMPORTED_MODULE_13__["OptionsService"],
            _core_services_tax_service__WEBPACK_IMPORTED_MODULE_10__["TaxService"],
            src_app_core_services_seo_service__WEBPACK_IMPORTED_MODULE_15__["SeoService"],
            src_app_core_services_collections_service__WEBPACK_IMPORTED_MODULE_16__["CollectionsService"],
            _core_services_authentication_service__WEBPACK_IMPORTED_MODULE_11__["AuthenticationService"]])
    ], PostCreateComponent);
    return PostCreateComponent;
}());



/***/ }),

/***/ "./src/app/modules/posts/posts/pages/post-edit/post-edit.component.scss":
/*!******************************************************************************!*\
  !*** ./src/app/modules/posts/posts/pages/post-edit/post-edit.component.scss ***!
  \******************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = (".ng-select.ng-select-single .ng-select-container {\n  min-width: 500px;\n}\n\n.inp {\n  border: none;\n  border-bottom: 1px solid #e8eef3;\n  padding: 5px 10px;\n  outline: none;\n  width: 100%;\n}\n\n[placeholder]:focus::-webkit-input-placeholder {\n  transition: text-indent 0.4s 0.4s ease;\n  text-indent: -100%;\n  opacity: 1;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvbW9kdWxlcy9wb3N0cy9wb3N0cy9wYWdlcy9wb3N0LWVkaXQvQzpcXFVzZXJzXFx0aHVhblxcT25lRHJpdmVcXERlc2t0b3BcXGdsYXZhbC10aHVhbmRpbmgvc3JjXFxhcHBcXG1vZHVsZXNcXHBvc3RzXFxwb3N0c1xccGFnZXNcXHBvc3QtZWRpdFxccG9zdC1lZGl0LmNvbXBvbmVudC5zY3NzIiwic3JjL2FwcC9tb2R1bGVzL3Bvc3RzL3Bvc3RzL3BhZ2VzL3Bvc3QtZWRpdC9wb3N0LWVkaXQuY29tcG9uZW50LnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFFSSxnQkFBQTtBQ0FKOztBREdBO0VBQ0ksWUFBQTtFQUNBLGdDQUFBO0VBQ0EsaUJBQUE7RUFDQSxhQUFBO0VBQ0EsV0FBQTtBQ0FKOztBREdBO0VBQ0ksc0NBQUE7RUFDQSxrQkFBQTtFQUNBLFVBQUE7QUNBSiIsImZpbGUiOiJzcmMvYXBwL21vZHVsZXMvcG9zdHMvcG9zdHMvcGFnZXMvcG9zdC1lZGl0L3Bvc3QtZWRpdC5jb21wb25lbnQuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIi5uZy1zZWxlY3Qubmctc2VsZWN0LXNpbmdsZVxyXG4ubmctc2VsZWN0LWNvbnRhaW5lciB7XHJcbiAgICBtaW4td2lkdGg6IDUwMHB4O1xyXG59XHJcblxyXG4uaW5wIHtcclxuICAgIGJvcmRlcjogbm9uZTtcclxuICAgIGJvcmRlci1ib3R0b206IDFweCBzb2xpZCAjZThlZWYzO1xyXG4gICAgcGFkZGluZzogNXB4IDEwcHg7XHJcbiAgICBvdXRsaW5lOiBub25lO1xyXG4gICAgd2lkdGg6IDEwMCU7XHJcbn1cclxuXHJcbltwbGFjZWhvbGRlcl06Zm9jdXM6Oi13ZWJraXQtaW5wdXQtcGxhY2Vob2xkZXIge1xyXG4gICAgdHJhbnNpdGlvbjogdGV4dC1pbmRlbnQgMC40cyAwLjRzIGVhc2U7XHJcbiAgICB0ZXh0LWluZGVudDogLTEwMCU7XHJcbiAgICBvcGFjaXR5OiAxO1xyXG59XHJcbiIsIi5uZy1zZWxlY3Qubmctc2VsZWN0LXNpbmdsZSAubmctc2VsZWN0LWNvbnRhaW5lciB7XG4gIG1pbi13aWR0aDogNTAwcHg7XG59XG5cbi5pbnAge1xuICBib3JkZXI6IG5vbmU7XG4gIGJvcmRlci1ib3R0b206IDFweCBzb2xpZCAjZThlZWYzO1xuICBwYWRkaW5nOiA1cHggMTBweDtcbiAgb3V0bGluZTogbm9uZTtcbiAgd2lkdGg6IDEwMCU7XG59XG5cbltwbGFjZWhvbGRlcl06Zm9jdXM6Oi13ZWJraXQtaW5wdXQtcGxhY2Vob2xkZXIge1xuICB0cmFuc2l0aW9uOiB0ZXh0LWluZGVudCAwLjRzIDAuNHMgZWFzZTtcbiAgdGV4dC1pbmRlbnQ6IC0xMDAlO1xuICBvcGFjaXR5OiAxO1xufSJdfQ== */");

/***/ }),

/***/ "./src/app/modules/posts/posts/pages/post-edit/post-edit.component.ts":
/*!****************************************************************************!*\
  !*** ./src/app/modules/posts/posts/pages/post-edit/post-edit.component.ts ***!
  \****************************************************************************/
/*! exports provided: PostEditComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PostEditComponent", function() { return PostEditComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var ngx_toastr__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ngx-toastr */ "./node_modules/ngx-toastr/fesm5/ngx-toastr.js");
/* harmony import */ var _ngx_translate_core__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @ngx-translate/core */ "./node_modules/@ngx-translate/core/fesm5/ngx-translate-core.js");
/* harmony import */ var _core_services_posts_service__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../../../../../core/services/posts.service */ "./src/app/core/services/posts.service.ts");
/* harmony import */ var _core_services_item_service__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../../../../../core/services/item.service */ "./src/app/core/services/item.service.ts");
/* harmony import */ var _core_services_client_service__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../../../../../core/services/client.service */ "./src/app/core/services/client.service.ts");
/* harmony import */ var _core_services_tax_service__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ../../../../../core/services/tax.service */ "./src/app/core/services/tax.service.ts");
/* harmony import */ var _core_services_authentication_service__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ../../../../../core/services/authentication.service */ "./src/app/core/services/authentication.service.ts");
/* harmony import */ var _core_services_categorys_service__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ../../../../../core/services/categorys.service */ "./src/app/core/services/categorys.service.ts");
/* harmony import */ var _core_services_options_service__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ../../../../../core/services/options.service */ "./src/app/core/services/options.service.ts");
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ../../../../../../environments/environment */ "./src/environments/environment.ts");
/* harmony import */ var src_app_core_services_seo_service__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! src/app/core/services/seo.service */ "./src/app/core/services/seo.service.ts");
/* harmony import */ var src_app_core_services_collections_service__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! src/app/core/services/collections.service */ "./src/app/core/services/collections.service.ts");
/* harmony import */ var dropzone__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! dropzone */ "./node_modules/dropzone/dist/dropzone.js");
/* harmony import */ var dropzone__WEBPACK_IMPORTED_MODULE_17___default = /*#__PURE__*/__webpack_require__.n(dropzone__WEBPACK_IMPORTED_MODULE_17__);


















var PostEditComponent = /** @class */ (function () {
    function PostEditComponent(translate, datepipe, router, route, formBuilder, toastr, postService, clientService, optionsService, categorysService, itemService, taxService, seoService, collectionsService, authenticationService) {
        var _this_1 = this;
        this.translate = translate;
        this.datepipe = datepipe;
        this.router = router;
        this.route = route;
        this.formBuilder = formBuilder;
        this.toastr = toastr;
        this.postService = postService;
        this.clientService = clientService;
        this.optionsService = optionsService;
        this.categorysService = categorysService;
        this.itemService = itemService;
        this.taxService = taxService;
        this.seoService = seoService;
        this.collectionsService = collectionsService;
        this.authenticationService = authenticationService;
        this.listposts = [];
        this.listcategorys = [];
        this.selectedFiles = [];
        this.keywordData = [];
        this.collectionsData = [];
        this.removedFiles = [];
        this.properties = [];
        this.propertiesHeader = [];
        this.listTemplate = [];
        this.isFormSubmitted = false;
        this.isLogoLoaded = true;
        this.isFormLoaded = false;
        this.liststatus = [
            { value: 'yes', label: 'Show' },
            { value: 'no', label: 'Hide' },
        ];
        this.datepickerConfig = {
            dateInputFormat: 'YYYY-MM-DD',
            containerClass: 'theme-red'
        };
        this.apiUrl = _environments_environment__WEBPACK_IMPORTED_MODULE_14__["environment"].apiUrl;
        this.authenticationService.loginUser.subscribe(function (x) { return _this_1.loginUser = x; });
        this.route.paramMap.subscribe(function (params) {
            _this_1.getById(params.get('id'));
        });
    }
    Object.defineProperty(PostEditComponent.prototype, "postControl", {
        get: function () {
            return this.editPostForm.controls;
        },
        enumerable: true,
        configurable: true
    });
    PostEditComponent.prototype.ngOnInit = function () {
        if (this.router.url.indexOf('/allnews/edit') !== -1) {
            this.moduletype = 'news';
            this.urlPage = '/allnews';
        }
        else {
            this.moduletype = 'products';
            this.urlPage = '/allproducts';
            this.getOptions('manufacturers');
            this.getOptions('specifications');
            this.getAllKeyword();
        }
        this.getAllCollections();
    };
    PostEditComponent.prototype.loadForm = function () {
        var _this_1 = this;
        var that = this;
        this.editPostForm = this.formBuilder.group({
            id: [this.post.id, _angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].required],
            name: [this.post.name, _angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].required],
            description: [this.post.description],
            category: [this.post.po_cates_id, _angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].required],
            page_title: [this.post.page_title],
            page_description: [this.post.page_description],
            url_and_handle: [this.post.url_and_handle, _angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].required],
            active: [this.post.active, _angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].required],
            keyword: [this.post.keyword],
            avatar: [this.post.avatar, _angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].required],
            po_types_indentify: [this.moduletype],
            pages_id: [this.post.pages_id, _angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].required],
            manufacturers: [this.post.manufacturers, _angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].required],
            image: [this.post.image],
            price: [this.post.price, _angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].required],
            compare_price: [this.post.compare_price, _angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].required],
            removed_images: [[]],
            seoData: this.formBuilder.array([]),
            seo: [this.post.seo],
            collections: [this.post.collections],
            content: [this.post.content, _angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].required],
            properties: [this.post.properties],
            variations: this.formBuilder.array([]),
            specifications: this.formBuilder.array([])
        });
        if (this.moduletype == 'products') {
            // for (let specification of this.specifications) {
            //     this.addSpecifications(specification);
            // }
        }
        else {
            this.editPostForm.get('properties').setValidators([]);
            this.editPostForm.get('properties').updateValueAndValidity();
            this.editPostForm.get('manufacturers').setValidators([]);
            this.editPostForm.get('manufacturers').updateValueAndValidity();
            this.editPostForm.get('price').setValidators([]);
            this.editPostForm.get('price').updateValueAndValidity();
            this.editPostForm.get('compare_price').setValidators([]);
            this.editPostForm.get('compare_price').updateValueAndValidity();
        }
        this.editPostForm.patchValue({ avatar: this.post.avatar });
        this.editPostForm.patchValue({ image: this.post.image });
        setTimeout(function () {
            that.loadDropzone('avatardropzone');
            that.loadDropzone('imagedropzone');
            // const control = <FormArray>this.editPostForm.controls['specifications'];
            // control.push(this.getSpecifications(data));
            for (var _i = 0, _a = _this_1.listcategorys; _i < _a.length; _i++) {
                var categorys = _a[_i];
                if (categorys.id == _this_1.post.po_cates_id) {
                    that.changeCategory(categorys, _this_1.post.infotechs);
                }
            }
            // console.log(dataProperties);
            // for (let categorys of this.listcategorys) {
            //     if(blockedTile.indexOf("118") != -1){
            //     }
            // }
            // for (var i = 0; i < length; ++i) {
            //     this.properties
            // }
        });
        for (var _i = 0, _a = this.post.seoData; _i < _a.length; _i++) {
            var seo = _a[_i];
            this.onAddMetaTag(seo);
        }
        this.getOptions('properties');
        this.isFormLoaded = true;
    };
    PostEditComponent.prototype.getAllCollections = function () {
        var _this_1 = this;
        this.collectionsService.getAll()
            .subscribe(function (data) {
            if (Array.isArray(data)) {
                _this_1.collectionsData = data.filter(function (res) { return (res.id != null && res['type'] == "select" && res['po_types_indentify'] == _this_1.moduletype); });
            }
        });
    };
    PostEditComponent.prototype.getAllKeyword = function () {
        var _this_1 = this;
        this.seoService.getAllKeyword()
            .subscribe(function (data) {
            _this_1.keywordData = data;
        });
    };
    PostEditComponent.prototype.getAllMeta = function () {
        var _this_1 = this;
        this.seoService.getAllMeta()
            .subscribe(function (data) {
            _this_1.seoData = data;
            _this_1.loadForm();
        });
    };
    PostEditComponent.prototype.getSeoData = function (data) {
        !data.content ? data.content = null : '';
        return this.formBuilder.group({
            meta: [data.label, _angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].required],
            meta_id: [data.id, _angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].required],
            content: [data.content]
        });
    };
    PostEditComponent.prototype.addSeoData = function (data) {
        var control = this.editPostForm.controls['seoData'];
        control.push(this.getSeoData(data));
    };
    PostEditComponent.prototype.onAddMetaTag = function (even) {
        var control = this.editPostForm.controls['seoData'];
        control.push(this.getSeoData(even));
    };
    PostEditComponent.prototype.onRemoveMetaTag = function (even) {
        this.editPostForm.get('seoData').removeAt(even.index);
    };
    PostEditComponent.prototype.getById = function (postId) {
        var _this_1 = this;
        this.postService.getById(postId).subscribe(function (data) {
            _this_1.post = data;
            _this_1.getCategorys();
            _this_1.getTemplate();
        });
    };
    PostEditComponent.prototype.getCategorys = function () {
        var _this_1 = this;
        this.categorysService.getAll().subscribe(function (data) {
            _this_1.listcategorys = data;
            if (Array.isArray(data)) {
                _this_1.listcategorys = data.filter(function (res) { return (res.id != null && res['po_types_indentify'] == _this_1.moduletype); });
            }
            // this.loadForm();
        });
    };
    PostEditComponent.prototype.getOptions = function (action) {
        var _this_1 = this;
        this.optionsService.getAll(action).subscribe(function (data) {
            switch (action) {
                case 'manufacturers':
                    _this_1.manufacturers = data;
                    break;
                case 'properties':
                    _this_1.properties = data;
                    if (_this_1.properties.length > 0) {
                        var dataProperties = _this_1.properties.filter(function (x) { return _this_1.post.properties.indexOf(x.indentify) != -1; });
                        _this_1.changePropertiesList(dataProperties, _this_1.post.product);
                    }
                    break;
                case 'specifications':
                    _this_1.specifications = data;
                    break;
            }
        });
    };
    PostEditComponent.prototype.getTemplate = function () {
        var _this_1 = this;
        this.postService.getTemplate().subscribe(function (data) {
            if (Array.isArray(data)) {
                _this_1.listTemplate = data.filter(function (res) { return res.type == (_this_1.moduletype == 'news' ? 4 : 3); });
            }
            _this_1.getAllMeta();
        });
    };
    PostEditComponent.prototype.onSubmit = function () {
        var _this_1 = this;
        this.isFormSubmitted = true;
        this.editPostForm.patchValue({ image: this.selectedFiles });
        if (this.editPostForm.invalid) {
            return;
        }
        this.editPostForm.patchValue({ image: this.selectedFiles });
        this.editPostForm.patchValue({ removed_images: this.removedFiles });
        this.postService.update(this.editPostForm.value)
            .subscribe(function (data) {
            _this_1.toastr.success(_this_1.translate.instant('posts.messages.update'), _this_1.translate.instant('posts.title'));
            _this_1.router.navigate([_this_1.urlPage]);
        });
    };
    Object.defineProperty(PostEditComponent.prototype, "controllSpecifications", {
        get: function () {
            return this.editPostForm.get('specifications');
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(PostEditComponent.prototype, "controllVariations", {
        get: function () {
            return this.editPostForm.get('variations');
        },
        enumerable: true,
        configurable: true
    });
    PostEditComponent.prototype.loadDropzone = function (elementDropzone) {
        var that = this;
        var limitFile;
        elementDropzone == 'avatardropzone' ? limitFile = 1 : limitFile = 100;
        that[elementDropzone + 'element'] = new dropzone__WEBPACK_IMPORTED_MODULE_17__(that[elementDropzone].nativeElement, {
            url: 'https://httpbin.org/post',
            maxFiles: limitFile,
            clickable: true,
            acceptedFiles: 'image/*',
            createImageThumbnails: true,
            init: function () {
                var _this = this;
                if (elementDropzone == 'avatardropzone') {
                    that.editPostForm.get('avatar').value ? _this.previewsContainer.lastChild['hidden'] = true : _this.previewsContainer.lastChild['hidden'] = false;
                }
                else {
                    that.editPostForm.get('image').value ? _this.previewsContainer.lastChild['hidden'] = true : _this.previewsContainer.lastChild['hidden'] = false;
                }
                this.on('addedfile', function (file) {
                    var removeButton = dropzone__WEBPACK_IMPORTED_MODULE_17__["createElement"]('<button class=\'btn btn-sm btn-block\'>' + that.translate.instant('common.remove_file') + '</button>');
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
                        if (elementDropzone == 'avatardropzone') {
                            reader_1.onload = function (e) {
                                that.editPostForm.patchValue({ avatar: reader_1.result });
                            };
                        }
                        else {
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
                        }
                        reader_1.readAsDataURL(file);
                    }
                });
                this.on('removedfile', function (file) {
                    if (elementDropzone == 'avatardropzone') {
                        that.editPostForm.patchValue({ avatar: null });
                    }
                    else {
                        that.fileDetails = file;
                        that.selectedFiles.forEach(function (value, index) {
                            if (value.uuid == that.fileDetails.upload.uuid) {
                                that.selectedFiles.splice(index, 1);
                            }
                        });
                    }
                });
                this.on('error', function (file, message) {
                    if (file) {
                        that.toastr.error(message);
                    }
                });
            }
        });
    };
    PostEditComponent.prototype.removeDropzoneImage = function () {
        this.isLogoLoaded = false;
        this.editPostForm.patchValue({ avatar: null });
        this.editPostForm.get('avatar').value ? this['fileDropZone'].previewsContainer.lastChild['hidden'] = true : this['fileDropZone'].previewsContainer.lastChild['hidden'] = false;
    };
    PostEditComponent.prototype.removeattachments = function (id) {
        var _this_1 = this;
        this.post.image.forEach(function (value, index) {
            if (value.id == id) {
                _this_1.post.image.splice(index, 1);
                _this_1.removedFiles.push(id);
            }
        });
    };
    PostEditComponent.prototype.changeCategory = function (even, value) {
        this.specifications = even.specifications;
        this.editPostForm.get('specifications').clear();
        if (even.specifications.length > 0) {
            for (var i = 0; i < even.specifications.length; ++i) {
                // for (let specification of even.specifications) {
                this.addSpecifications(even.specifications[i], value[i]);
            }
        }
    };
    PostEditComponent.prototype.addSpecifications = function (data, value) {
        var control = this.editPostForm.controls['specifications'];
        control.push(this.getSpecifications(data, value));
    };
    PostEditComponent.prototype.getSpecifications = function (data, value) {
        var valueSpecifications = (value && value.options_value_indentify) ? value.options_value_indentify : null;
        return this.formBuilder.group({
            name: [data.name, _angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].required],
            id: [data.id, _angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].required],
            options_indentify: [data.options_indentify, _angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].required],
            value: [valueSpecifications, _angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].required],
            check: [true]
        });
    };
    PostEditComponent.prototype.builVariations = function (data, listIndexVariations, LoadValues) {
        var variationsData = [];
        for (var i = 0; i < listIndexVariations.length; i++) {
            variationsData.push(data[i].value[listIndexVariations[i]]);
        }
        var controlVariations = this.editPostForm.controls['variations'];
        controlVariations.push(this.getVariations(variationsData, LoadValues[controlVariations.length]));
        for (var j = listIndexVariations.length - 1; j >= 0; j--) {
            if (listIndexVariations[j] >= data[j].value.length - 1) {
                listIndexVariations[j] = 0;
            }
            else {
                listIndexVariations[j] = listIndexVariations[j] + 1;
                return this.builVariations(data, listIndexVariations, LoadValues);
            }
        }
    };
    PostEditComponent.prototype.changePropertiesList = function (even, LoadValues) {
        this.propertiesHeader = even;
        this.editPostForm.get('variations').clear();
        if (even.length > 0) {
            var listIndexVariations = [];
            for (var i = 0; i < even.length; i++) {
                listIndexVariations.push(0);
            }
            this.builVariations(even, listIndexVariations, LoadValues);
        }
    };
    PostEditComponent.prototype.getVariations = function (data, LoadValues) {
        var variationsData = {};
        for (var i = 0; i < data.length; i++) {
            variationsData[data[i].options_indentify] = [data[i].indentify, _angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].required];
            variationsData[data[i].options_indentify + 'label'] = [data[i].name, _angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].required];
        }
        if (LoadValues && LoadValues.id && LoadValues.price) {
            variationsData['price'] = [LoadValues.price, [_angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].required, _angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].min(1)]];
            variationsData['compare_price'] = [LoadValues.compare_price, [_angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].required, _angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].min(1)]];
            variationsData['id'] = [LoadValues.id];
            variationsData['sku'] = [LoadValues.sku];
            variationsData['check'] = [LoadValues.status];
        }
        else {
            variationsData['compare_price'] = ['', [_angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].required, _angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].min(1)]];
            variationsData['price'] = ['', [_angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].required, _angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].min(1)]];
            variationsData['check'] = [true];
        }
        return this.formBuilder.group(variationsData);
    };
    PostEditComponent.ctorParameters = function () { return [
        { type: _ngx_translate_core__WEBPACK_IMPORTED_MODULE_6__["TranslateService"] },
        { type: _angular_common__WEBPACK_IMPORTED_MODULE_2__["DatePipe"] },
        { type: _angular_router__WEBPACK_IMPORTED_MODULE_4__["Router"] },
        { type: _angular_router__WEBPACK_IMPORTED_MODULE_4__["ActivatedRoute"] },
        { type: _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormBuilder"] },
        { type: ngx_toastr__WEBPACK_IMPORTED_MODULE_5__["ToastrService"] },
        { type: _core_services_posts_service__WEBPACK_IMPORTED_MODULE_7__["PostsService"] },
        { type: _core_services_client_service__WEBPACK_IMPORTED_MODULE_9__["ClientService"] },
        { type: _core_services_options_service__WEBPACK_IMPORTED_MODULE_13__["OptionsService"] },
        { type: _core_services_categorys_service__WEBPACK_IMPORTED_MODULE_12__["CategorysService"] },
        { type: _core_services_item_service__WEBPACK_IMPORTED_MODULE_8__["ItemService"] },
        { type: _core_services_tax_service__WEBPACK_IMPORTED_MODULE_10__["TaxService"] },
        { type: src_app_core_services_seo_service__WEBPACK_IMPORTED_MODULE_15__["SeoService"] },
        { type: src_app_core_services_collections_service__WEBPACK_IMPORTED_MODULE_16__["CollectionsService"] },
        { type: _core_services_authentication_service__WEBPACK_IMPORTED_MODULE_11__["AuthenticationService"] }
    ]; };
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewChild"])('avatardropzone', { static: false }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", _angular_core__WEBPACK_IMPORTED_MODULE_1__["ElementRef"])
    ], PostEditComponent.prototype, "avatardropzone", void 0);
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewChild"])('imagedropzone', { static: false }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", _angular_core__WEBPACK_IMPORTED_MODULE_1__["ElementRef"])
    ], PostEditComponent.prototype, "imagedropzone", void 0);
    PostEditComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-post-edit',
            template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./post-edit.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/modules/posts/posts/pages/post-edit/post-edit.component.html")).default,
            styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./post-edit.component.scss */ "./src/app/modules/posts/posts/pages/post-edit/post-edit.component.scss")).default]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_ngx_translate_core__WEBPACK_IMPORTED_MODULE_6__["TranslateService"],
            _angular_common__WEBPACK_IMPORTED_MODULE_2__["DatePipe"],
            _angular_router__WEBPACK_IMPORTED_MODULE_4__["Router"],
            _angular_router__WEBPACK_IMPORTED_MODULE_4__["ActivatedRoute"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormBuilder"],
            ngx_toastr__WEBPACK_IMPORTED_MODULE_5__["ToastrService"],
            _core_services_posts_service__WEBPACK_IMPORTED_MODULE_7__["PostsService"],
            _core_services_client_service__WEBPACK_IMPORTED_MODULE_9__["ClientService"],
            _core_services_options_service__WEBPACK_IMPORTED_MODULE_13__["OptionsService"],
            _core_services_categorys_service__WEBPACK_IMPORTED_MODULE_12__["CategorysService"],
            _core_services_item_service__WEBPACK_IMPORTED_MODULE_8__["ItemService"],
            _core_services_tax_service__WEBPACK_IMPORTED_MODULE_10__["TaxService"],
            src_app_core_services_seo_service__WEBPACK_IMPORTED_MODULE_15__["SeoService"],
            src_app_core_services_collections_service__WEBPACK_IMPORTED_MODULE_16__["CollectionsService"],
            _core_services_authentication_service__WEBPACK_IMPORTED_MODULE_11__["AuthenticationService"]])
    ], PostEditComponent);
    return PostEditComponent;
}());



/***/ }),

/***/ "./src/app/modules/posts/posts/pages/post-lists/post-lists.component.scss":
/*!********************************************************************************!*\
  !*** ./src/app/modules/posts/posts/pages/post-lists/post-lists.component.scss ***!
  \********************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = (".hide_empty_message ::ng-deep .odd {\n  display: none;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvbW9kdWxlcy9wb3N0cy9wb3N0cy9wYWdlcy9wb3N0LWxpc3RzL0M6XFxVc2Vyc1xcdGh1YW5cXE9uZURyaXZlXFxEZXNrdG9wXFxnbGF2YWwtdGh1YW5kaW5oL3NyY1xcYXBwXFxtb2R1bGVzXFxwb3N0c1xccG9zdHNcXHBhZ2VzXFxwb3N0LWxpc3RzXFxwb3N0LWxpc3RzLmNvbXBvbmVudC5zY3NzIiwic3JjL2FwcC9tb2R1bGVzL3Bvc3RzL3Bvc3RzL3BhZ2VzL3Bvc3QtbGlzdHMvcG9zdC1saXN0cy5jb21wb25lbnQuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNJLGFBQUE7QUNDSiIsImZpbGUiOiJzcmMvYXBwL21vZHVsZXMvcG9zdHMvcG9zdHMvcGFnZXMvcG9zdC1saXN0cy9wb3N0LWxpc3RzLmNvbXBvbmVudC5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLmhpZGVfZW1wdHlfbWVzc2FnZSA6Om5nLWRlZXAgLm9kZCB7XHJcbiAgICBkaXNwbGF5OiBub25lXHJcbn0iLCIuaGlkZV9lbXB0eV9tZXNzYWdlIDo6bmctZGVlcCAub2RkIHtcbiAgZGlzcGxheTogbm9uZTtcbn0iXX0= */");

/***/ }),

/***/ "./src/app/modules/posts/posts/pages/post-lists/post-lists.component.ts":
/*!******************************************************************************!*\
  !*** ./src/app/modules/posts/posts/pages/post-lists/post-lists.component.ts ***!
  \******************************************************************************/
/*! exports provided: PostListsComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PostListsComponent", function() { return PostListsComponent; });
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
/* harmony import */ var _core_services_posts_service__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ../../../../../core/services/posts.service */ "./src/app/core/services/posts.service.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");















var PostListsComponent = /** @class */ (function () {
    function PostListsComponent(translate, exportAsService, http, toastr, router, postsService, authenticationService) {
        var _this = this;
        this.translate = translate;
        this.exportAsService = exportAsService;
        this.http = http;
        this.toastr = toastr;
        this.router = router;
        this.postsService = postsService;
        this.authenticationService = authenticationService;
        this.dtTrigger = new rxjs__WEBPACK_IMPORTED_MODULE_9__["Subject"]();
        this.dtOptions = {};
        this.posts = [];
        this.exportAsConfig = {
            type: 'pdf',
            elementIdOrContent: 'post_table',
        };
        this.apiUrl = _environments_environment__WEBPACK_IMPORTED_MODULE_7__["environment"].apiUrl;
        this.authenticationService.loginUser.subscribe(function (x) { return _this.loginUser = x; });
    }
    PostListsComponent.prototype.ngOnInit = function () {
        if (this.router.url === '/allnews') {
            this.moduletype = 'news';
            this.curentModule = 'allnews';
        }
        else {
            this.curentModule = 'allproducts';
            this.moduletype = 'products';
        }
        this.loadDatatable();
    };
    PostListsComponent.prototype.loadDatatable = function () {
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
                    'width': '5%',
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
                _this.http.post(_this.apiUrl + '/api/all-posts', Object.assign(dataTablesParameters, { moduletype: _this.moduletype }), {}).subscribe(function (resp) {
                    _this.posts = resp.data;
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
    PostListsComponent.prototype.exportFiles = function (type) {
        this.exportAsConfig.type = type;
        this.exportAsService.save(this.exportAsConfig, this.translate.instant('posts.title')).subscribe(function () {
        });
    };
    PostListsComponent.prototype.ngAfterViewInit = function () {
        this.dtTrigger.next();
    };
    PostListsComponent.prototype.ngOnDestroy = function () {
        this.dtTrigger.unsubscribe();
    };
    PostListsComponent.prototype.rerender = function () {
        var _this = this;
        this.dtElement.dtInstance.then(function (dtInstance) {
            dtInstance.destroy();
            setTimeout(function () {
                _this.dtTrigger.next();
                if (_this.posts.length > 0) {
                    $('.tfoot_dt').addClass('d-none');
                }
                else {
                    $('.tfoot_dt').removeClass('d-none');
                }
            });
        });
    };
    PostListsComponent.prototype.deletePost = function (id) {
        var _this = this;
        sweetalert2__WEBPACK_IMPORTED_MODULE_10___default.a.fire({
            title: this.translate.instant('common.swal.title'),
            text: this.translate.instant('common.swal.text') + this.translate.instant('posts.title'),
            type: 'warning',
            showCancelButton: true,
            confirmButtonText: this.translate.instant('common.swal.confirmButtonText'),
            cancelButtonText: this.translate.instant('common.swal.cancelButtonText')
        }).then(function (result) {
            if (result.value) {
                _this.postsService.delete(id).subscribe(function (data) {
                    _this.toastr.success(_this.translate.instant('posts.messages.delete'), _this.translate.instant('posts.title'));
                    _this.rerender();
                });
            }
        });
    };
    PostListsComponent.prototype.getTranslateStatus = function (statusKey) {
        // return this.postStatusKeyValue[statusKey];
        return [];
    };
    PostListsComponent.prototype.getUrl = function (action, id) {
        if (action === 'create') {
            return ['/' + this.curentModule + '/create'];
        }
        else {
            return ['/' + this.curentModule + '/edit', id];
        }
    };
    PostListsComponent.ctorParameters = function () { return [
        { type: _ngx_translate_core__WEBPACK_IMPORTED_MODULE_3__["TranslateService"] },
        { type: ngx_export_as__WEBPACK_IMPORTED_MODULE_4__["ExportAsService"] },
        { type: _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClient"] },
        { type: ngx_toastr__WEBPACK_IMPORTED_MODULE_5__["ToastrService"] },
        { type: _angular_router__WEBPACK_IMPORTED_MODULE_14__["Router"] },
        { type: _core_services_posts_service__WEBPACK_IMPORTED_MODULE_13__["PostsService"] },
        { type: _core_services_authentication_service__WEBPACK_IMPORTED_MODULE_6__["AuthenticationService"] }
    ]; };
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewChild"])(angular_datatables__WEBPACK_IMPORTED_MODULE_8__["DataTableDirective"], { static: true }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", angular_datatables__WEBPACK_IMPORTED_MODULE_8__["DataTableDirective"])
    ], PostListsComponent.prototype, "dtElement", void 0);
    PostListsComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-post-lists',
            template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./post-lists.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/modules/posts/posts/pages/post-lists/post-lists.component.html")).default,
            styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./post-lists.component.scss */ "./src/app/modules/posts/posts/pages/post-lists/post-lists.component.scss")).default]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_ngx_translate_core__WEBPACK_IMPORTED_MODULE_3__["TranslateService"],
            ngx_export_as__WEBPACK_IMPORTED_MODULE_4__["ExportAsService"],
            _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClient"],
            ngx_toastr__WEBPACK_IMPORTED_MODULE_5__["ToastrService"],
            _angular_router__WEBPACK_IMPORTED_MODULE_14__["Router"],
            _core_services_posts_service__WEBPACK_IMPORTED_MODULE_13__["PostsService"],
            _core_services_authentication_service__WEBPACK_IMPORTED_MODULE_6__["AuthenticationService"]])
    ], PostListsComponent);
    return PostListsComponent;
}());



/***/ }),

/***/ "./src/app/modules/posts/posts/posts-routing.module.ts":
/*!*************************************************************!*\
  !*** ./src/app/modules/posts/posts/posts-routing.module.ts ***!
  \*************************************************************/
/*! exports provided: PostsRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PostsRoutingModule", function() { return PostsRoutingModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var ngx_permissions__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ngx-permissions */ "./node_modules/ngx-permissions/ngx-permissions.umd.js");
/* harmony import */ var ngx_permissions__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(ngx_permissions__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _pages_post_lists_post_lists_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./pages/post-lists/post-lists.component */ "./src/app/modules/posts/posts/pages/post-lists/post-lists.component.ts");
/* harmony import */ var _pages_post_create_post_create_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./pages/post-create/post-create.component */ "./src/app/modules/posts/posts/pages/post-create/post-create.component.ts");
/* harmony import */ var _pages_post_edit_post_edit_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./pages/post-edit/post-edit.component */ "./src/app/modules/posts/posts/pages/post-edit/post-edit.component.ts");







// import {PostViewComponent} from './pages/post-view/post-view.component';
var routes = [{
        path: '',
        children: [
            {
                path: '',
                canActivate: [ngx_permissions__WEBPACK_IMPORTED_MODULE_3__["NgxPermissionsGuard"]],
                component: _pages_post_lists_post_lists_component__WEBPACK_IMPORTED_MODULE_4__["PostListsComponent"]
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
                        only: ['admin', 'super_admin', 'posts_create']
                    }
                },
                component: _pages_post_create_post_create_component__WEBPACK_IMPORTED_MODULE_5__["PostCreateComponent"]
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
                        only: ['admin', 'super_admin', 'posts_edit']
                    }
                },
                component: _pages_post_edit_post_edit_component__WEBPACK_IMPORTED_MODULE_6__["PostEditComponent"]
            },
        ]
    }
];
var PostsRoutingModule = /** @class */ (function () {
    function PostsRoutingModule() {
    }
    PostsRoutingModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)],
            exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]]
        })
    ], PostsRoutingModule);
    return PostsRoutingModule;
}());



/***/ }),

/***/ "./src/app/modules/posts/posts/posts.module.ts":
/*!*****************************************************!*\
  !*** ./src/app/modules/posts/posts/posts.module.ts ***!
  \*****************************************************/
/*! exports provided: PostsModule, HttpLoaderFactory */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PostsModule", function() { return PostsModule; });
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
/* harmony import */ var _posts_routing_module__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ./posts-routing.module */ "./src/app/modules/posts/posts/posts-routing.module.ts");
/* harmony import */ var _shared_shared_module__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ../../../shared/shared.module */ "./src/app/shared/shared.module.ts");
/* harmony import */ var _pages_post_lists_post_lists_component__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! ./pages/post-lists/post-lists.component */ "./src/app/modules/posts/posts/pages/post-lists/post-lists.component.ts");
/* harmony import */ var _pages_post_create_post_create_component__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! ./pages/post-create/post-create.component */ "./src/app/modules/posts/posts/pages/post-create/post-create.component.ts");
/* harmony import */ var _pages_post_edit_post_edit_component__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! ./pages/post-edit/post-edit.component */ "./src/app/modules/posts/posts/pages/post-edit/post-edit.component.ts");


















// import {PostViewComponent} from './pages/post-view/post-view.component';
var PostsModule = /** @class */ (function () {
    function PostsModule() {
    }
    PostsModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            declarations: [
                _pages_post_lists_post_lists_component__WEBPACK_IMPORTED_MODULE_15__["PostListsComponent"],
                _pages_post_create_post_create_component__WEBPACK_IMPORTED_MODULE_16__["PostCreateComponent"],
                _pages_post_edit_post_edit_component__WEBPACK_IMPORTED_MODULE_17__["PostEditComponent"],
            ],
            imports: [
                _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
                _posts_routing_module__WEBPACK_IMPORTED_MODULE_13__["PostsRoutingModule"],
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
    ], PostsModule);
    return PostsModule;
}());

// Required for AOT compilation
function HttpLoaderFactory(http) {
    return new _ngx_translate_http_loader__WEBPACK_IMPORTED_MODULE_11__["TranslateHttpLoader"](http, './assets/i18n/', '.json');
}


/***/ })

}]);
//# sourceMappingURL=modules-posts-posts-posts-module.js.map