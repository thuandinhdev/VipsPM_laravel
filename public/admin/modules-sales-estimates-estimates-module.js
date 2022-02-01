(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["modules-sales-estimates-estimates-module"],{

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/modules/sales/estimates/pages/estimate-create/estimate-create.component.html":
/*!************************************************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/modules/sales/estimates/pages/estimate-create/estimate-create.component.html ***!
  \************************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<section id=\"basic-form-layouts\">\r\n    <form (ngSubmit)=\"onSubmit()\" *ngIf=\"isFormLoaded\" [formGroup]=\"createEstimateForm\">\r\n        <div class=\"row\">\r\n            <div class=\"col-md-6\">\r\n                <div class=\"card\">\r\n                    <div class=\"card-header\">\r\n                        <h4 class=\"card-title\">{{'estimates.title2' | translate}}</h4>\r\n                    </div>\r\n                    <div class=\"card-body\">\r\n                        <div class=\"px-3\">\r\n                            <div class=\"form-body\">\r\n                                <h4 class=\"form-section\">\r\n                                    <i aria-hidden=\"true\" class=\"ft-user\"></i>{{'estimates.headings.head1' | translate}}\r\n                                </h4>\r\n                                <div class=\"row\">\r\n                                    <div class=\"col-md-6\">\r\n                                        <div [ngClass]=\"{ 'is-invalid': isFormSubmitted && estimateControl.client_id.errors }\" class=\"form-group\">\r\n                                            <label for=\"client_id\">{{'estimates.create.fields.customer' | translate}}&nbsp;<span class=\"text-danger\">*</span>\r\n                                            </label>\r\n                                            <ng-select [clearable]=\"false\" [items]=\"clients\" [searchable]=\"true\" [selectOnTab]=\"true\" bindLabel=\"firstname\" bindValue=\"id\" formControlName=\"client_id\" labelForId=\"client_id\" placeholder=\"{{'estimates.create.placeholders.placeholder1' | translate}}\">\r\n                                                <ng-template let-item=\"item\" ng-option-tmp>\r\n                                                    {{item.firstname}} {{item.lastname}}\r\n                                                </ng-template>\r\n                                            </ng-select>\r\n                                            <div *ngIf=\"isFormSubmitted && estimateControl.client_id.errors\" class=\"invalid-feedback\">\r\n                                                <div *ngIf=\"estimateControl.client_id.errors.required\">{{'estimates.create.error_messages.message1' | translate}}</div>\r\n                                            </div>\r\n                                        </div>\r\n                                    </div>\r\n                                </div>\r\n                                <h4 class=\"form-section\">\r\n                                    <i class=\"ft-calendar\"></i>{{'estimates.headings.head2' | translate}}</h4>\r\n                                <div class=\"row\">\r\n                                    <div class=\"col-md-6\">\r\n                                        <div [ngClass]=\"{ 'is-invalid': isFormSubmitted && estimateControl.estimate_date.errors }\" class=\"form-group\">\r\n                                            <label for=\"estimate_date\">{{'estimates.create.fields.estimate_date' | translate}}&nbsp;<span class=\"text-danger\">*</span></label>\r\n                                            <div class=\"position-relative has-icon-left\">\r\n                                                <input #dp1=\"bsDatepicker\" [bsConfig]=\"datepickerConfig\" bsDatepicker class=\"form-control\" formControlName=\"estimate_date\" id=\"estimate_date\" placeholder=\"{{'estimates.create.placeholders.placeholder2' | translate}}\" type=\"text\"/>\r\n                                                <div class=\"form-control-position\"><i class=\"ft-calendar\"></i></div>\r\n                                                <div *ngIf=\"isFormSubmitted && estimateControl.estimate_date.errors\" class=\"invalid-feedback\">\r\n                                                    <div *ngIf=\"estimateControl.estimate_date.errors.required\">{{'estimates.create.error_messages.message2' | translate}}</div>\r\n                                                </div>\r\n                                            </div>\r\n                                        </div>\r\n                                    </div>\r\n                                    <div class=\"col-md-6\">\r\n                                        <div [ngClass]=\"{ 'is-invalid': isFormSubmitted && estimateControl.valid_till.errors }\" class=\"form-group\">\r\n                                            <label for=\"end-date\">{{'estimates.create.fields.valid_till' | translate}}&nbsp;<span class=\"text-danger\">*</span></label>\r\n                                            <div class=\"position-relative has-icon-left\">\r\n                                                <input #dp2=\"bsDatepicker\" [bsConfig]=\"datepickerConfig\" bsDatepicker class=\"form-control\" formControlName=\"valid_till\" id=\"valid_till\" placeholder=\"{{'estimates.create.placeholders.placeholder3' | translate}}\" type=\"text\"/>\r\n                                                <div class=\"form-control-position\"><i class=\"ft-calendar\"></i></div>\r\n                                                <div *ngIf=\"isFormSubmitted && estimateControl.valid_till.errors\" class=\"invalid-feedback\">\r\n                                                    <div *ngIf=\"estimateControl.valid_till.errors.required\">{{'estimates.create.error_messages.message3' | translate}}</div>\r\n                                                </div>\r\n                                            </div>\r\n                                        </div>\r\n                                    </div>\r\n                                </div>\r\n                            </div>\r\n                        </div>\r\n                    </div>\r\n                </div>\r\n            </div>\r\n            <div class=\"col-md-6\">\r\n                <div class=\"card\">\r\n                    <div class=\"card-header\">&nbsp;</div>\r\n                    <div class=\"card-body\">\r\n                        <div class=\"px-3\">\r\n                            <div class=\"form-body\">\r\n                                <h4 class=\"form-section\">\r\n                                    <i class=\"ft-box\"></i>{{'estimates.headings.head3' | translate}}</h4>\r\n                                <div class=\"row\">\r\n                                    <div class=\"col-md-12\">\r\n                                        <div class=\"form-group\">\r\n                                            <label for=\"reference\">{{'estimates.create.fields.reference' | translate}} #</label>\r\n                                            <input class=\"form-control\" formControlName=\"reference\" id=\"reference\" placeholder=\"{{'estimates.create.placeholders.placeholder4' | translate}}\" type=\"text\"/>\r\n                                        </div>\r\n                                    </div>\r\n                                    <div class=\"col-md-6\">\r\n                                        <div class=\"form-group\">\r\n                                            <label for=\"type\">{{'estimates.create.fields.discount_type' | translate}}</label>\r\n                                            <ng-select (change)=\"changeDiscountType($event)\" [clearable]=\"false\" [items]=\"('estimates.discount_type' | translate)\" [searchable]=\"true\" [selectOnTab]=\"true\" bindLabel=\"label\" bindValue=\"id\" formControlName=\"discount_type\" labelForId=\"discount_type\" placeholder=\"{{'estimates.create.placeholders.placeholder5' | translate}}\"></ng-select>\r\n                                        </div>\r\n                                    </div>\r\n                                </div>\r\n                            </div>\r\n                        </div>\r\n                    </div>\r\n                </div>\r\n            </div>\r\n            <div class=\"col-md-12\">\r\n                <div class=\"card\">\r\n                    <div class=\"card-form\">\r\n                        <h4 class=\"card-title\">{{'estimates.headings.head4' | translate}}</h4>\r\n                        <div class=\"card-button estimate-form\">\r\n                            <ng-select (change)=\"changeItem($event)\" [clearable]=\"false\" [items]=\"items\" bindLabel=\"name\" bindValue=\"id\" formControlName=\"selectedItem\" placeholder=\"{{'estimates.create.placeholders.placeholder7' | translate}}\">\r\n                                <ng-template let-index=\"index\" let-item=\"item\" let-search=\"searchTerm\" ng-option-tmp>\r\n                                    <div class=\"card mt-1 mb-1\">\r\n                                        <div class=\"card-body p-2\">\r\n                                            <h5 [ngOptionHighlight]=\"search\" class=\"card-title\">({{loginUser.currency.symbol}}{{item.price}}) {{item.name}}</h5>\r\n                                            <p class=\"card-text\">{{item.description}}</p>\r\n                                        </div>\r\n                                    </div>\r\n                                </ng-template>\r\n                            </ng-select>\r\n                        </div>\r\n                    </div>\r\n                    <div class=\"card-body\">\r\n                        <div class=\"table-responsive-xs table-responsive-sm table-responsive-md table-responsive-lg table-responsive-xl\">\r\n                            <table class=\"table table-bordered table-hover b4-datatable\" id=\"estimate_table\" width=\"100%\">\r\n                                <thead>\r\n                                <tr>\r\n                                    <th>{{'estimates.create.fields.item_name' | translate}}</th>\r\n                                    <th>{{'estimates.create.fields.item_description' | translate}}</th>\r\n                                    <th class=\"width-100\">{{'estimates.create.fields.quantity' | translate}}</th>\r\n                                    <th class=\"width-150\">{{'estimates.create.fields.unit_price' | translate}}</th>\r\n                                    <th class=\"width-250\">{{'estimates.create.fields.item_tax' | translate}}</th>\r\n                                    <th>{{'estimates.create.fields.total_item_amount' | translate}} ({{loginUser.currency.symbol}})</th>\r\n                                    <th class=\"text-right\">{{'common.actions' | translate}}</th>\r\n                                </tr>\r\n                                </thead>\r\n                                <tbody>\r\n                                <tr formArrayName=\"item\">\r\n                                    <td>\r\n                                        <div class=\"form-group\">\r\n                                            <input class=\"form-control\" formControlName=\"item_name\" id=\"item_name\" placeholder=\"{{'estimates.create.placeholders.placeholder8' | translate}}\" type=\"text\"/>\r\n                                        </div>\r\n                                    </td>\r\n                                    <td>\r\n                                        <div class=\"form-group\">\r\n\t\t\t\t\t\t\t\t\t\t\t\t<textarea class=\"form-control\" formControlName=\"item_description\" id=\"item_description\" placeholder=\"{{'estimates.create.placeholders.placeholder9' | translate}}\">\r\n\t\t\t\t\t\t\t\t\t\t\t\t</textarea>\r\n                                        </div>\r\n                                    </td>\r\n                                    <td>\r\n                                        <div class=\"form-group\">\r\n                                            <input class=\"form-control\" formControlName=\"quantity\" id=\"quantity\" min=\"1\" placeholder=\"{{'estimates.create.placeholders.placeholder10' | translate}}\" type=\"number\"/>\r\n                                            <input class=\"inp\" formControlName=\"item_unit\" placeholder=\"{{'estimates.create.fields.unit' | translate}}\" type=\"text\"/>\r\n                                        </div>\r\n                                    </td>\r\n                                    <td>\r\n                                        <div class=\"form-group\">\r\n                                            <input class=\"form-control\" formControlName=\"unit_price\" id=\"unit_price\" min=\"0\" placeholder=\"{{'estimates.create.placeholders.placeholder11' | translate}}\" type=\"number\"/>\r\n                                        </div>\r\n                                    </td>\r\n                                    <td>\r\n                                        <div class=\"form-group\">\r\n                                            <ng-select [clearable]=\"false\" [items]=\"taxes\" [multiple]=\"true\" [searchable]=\"true\" [selectOnTab]=\"true\" bindLabel=\"tax_name\" bindValue=\"id\" formControlName=\"taxes\" placeholder=\"{{'estimates.create.placeholders.placeholder12' | translate}}\">\r\n                                                <ng-template let-index=\"index\" let-item=\"item\" let-search=\"searchTerm\" ng-option-tmp>\r\n                                                    {{item.tax_name}}({{item.tax_rate}}%)\r\n                                                </ng-template>\r\n                                            </ng-select>\r\n                                        </div>\r\n                                    </td>\r\n                                    <td>&nbsp;</td>\r\n                                    <td class=\"text-right\">\r\n                                        <button (click)=\"addItem($event)\" class=\"btn btn-secondary\" placement=\"left\" tooltip=\"{{'common.add' | translate}}\">\r\n                                            <i class=\"fa fa-plus\"></i></button>\r\n                                    </td>\r\n                                </tr>\r\n                                <tr *ngFor=\"let item of itemsArray; index as i\">\r\n                                    <td>\r\n                                        <inline-edit-input (updateValue)=\"saveItemDetail(i, 'item_name', $event);\" [elementFor]=\"'estimates.inline_edit.item_name' | translate\" [fieldValue]=\"item.item_name\" [isRequired]=\"'true'\" [name]=\"'item_name'\" [type]=\"'text'\"></inline-edit-input>\r\n                                    </td>\r\n                                    <td>\r\n                                        <inline-edit-textarea (updateValue)=\"saveItemDetail(i, 'item_description', $event);\" [elementFor]=\"'estimates.inline_edit.item_description' | translate\" [fieldValue]=\"item.item_description\" [isRequired]=\"'false'\" [name]=\"'item_description'\"></inline-edit-textarea>\r\n                                    </td>\r\n                                    <td>\r\n                                        <inline-edit-input (updateValue)=\"saveItemDetail(i, 'quantity', $event);\" [elementFor]=\"'estimates.inline_edit.quantity' | translate\" [fieldValue]=\"item.quantity\" [isRequired]=\"'true'\" [name]=\"'quantity'\" [type]=\"'number'\"></inline-edit-input>\r\n                                    </td>\r\n                                    <td>\r\n                                        <inline-edit-input (updateValue)=\"saveItemDetail(i, 'unit_price', $event);\" [elementFor]=\"'estimates.inline_edit.unit_price' | translate\" [fieldValue]=\"item.unit_price\" [isRequired]=\"'true'\" [name]=\"'unit_price'\" [type]=\"'number'\"></inline-edit-input>\r\n                                    </td>\r\n                                    <td>\r\n                                        <inline-edit-select-items (updateValue)=\"saveItemDetail(i, 'taxes', $event);\" [elementFor]=\"'estimates.inline_edit.item_tax' | translate\" [isRequired]=\"'true'\" [name]=\"'taxes'\" [options]=\"taxes\" [selectedValue]=\"item.taxes\" [txtField]=\"'Taxes'\"></inline-edit-select-items>\r\n                                    </td>\r\n                                    <td class=\"text-center\">{{item.quantity * item.unit_price}}</td>\r\n                                    <td class=\"actions-dropdown text-right\">\r\n                                        <div class=\"btn-group\" dropdown>\r\n                                            <button aria-controls=\"dropdown-basic-1\" class=\"dropdown-toggle btn-action\" dropdownToggle id=\"button-basic-1\" type=\"button\">\r\n                                                <i class=\"fa fa-ellipsis-v\"></i></button>\r\n                                            <ul *dropdownMenu aria-labelledby=\"button-basic-1\" class=\"dropdown-menu animated fadeIn\" id=\"dropdown-basic-1\" role=\"menu\">\r\n                                                <li role=\"menuitem\">\r\n                                                    <a (click)=\"deleteItem(i)\" class=\"dropdown-item btn btn-delete btn-raised\"><i class=\"fa fa-trash-o\" tooltip=\"{{'common.delete' | translate}}\"></i></a>\r\n                                                </li>\r\n                                            </ul>\r\n                                        </div>\r\n                                    </td>\r\n                                </tr>\r\n                                </tbody>\r\n                                <tbody class=\"mt-4\">\r\n                                <tr>\r\n                                    <td></td>\r\n                                    <td></td>\r\n                                    <td></td>\r\n                                    <td></td>\r\n                                    <td class=\"text-right\">\r\n                                        <strong>{{'estimates.create.fields.sub_total' | translate}}:</strong></td>\r\n                                    <td class=\"text-center\">{{loginUser.currency.symbol}}{{ estimates.sub_total | number : '1.2-2' }}</td>\r\n                                    <td></td>\r\n                                </tr>\r\n                                <tr *ngFor=\"let tax of itemTaxes | keyvalue\">\r\n                                    <ng-container *ngIf=\"tax\">\r\n                                        <td></td>\r\n                                        <td></td>\r\n                                        <td></td>\r\n                                        <td></td>\r\n                                        <td class=\"text-right\">\r\n                                            <strong>{{taxesNameValues[tax.key].tax_name}}({{taxesNameValues[tax.key].tax_rate}}%)</strong>\r\n                                        </td>\r\n                                        <td class=\"text-center\">{{loginUser.currency.symbol}}{{tax.value | number : '1.2-2'}}</td>\r\n                                        <td></td>\r\n                                    </ng-container>\r\n                                </tr>\r\n                                <tr>\r\n                                    <td></td>\r\n                                    <td></td>\r\n                                    <td></td>\r\n                                    <td class=\"text-right\">\r\n                                        <strong>{{'estimates.create.fields.discount' | translate}}</strong></td>\r\n                                    <td>\r\n                                        <input (change)=\"changeDiscountAdjustment($event, 'discount')\" class=\"form-control\" formControlName=\"discount\" name=\"discount\" placeholder=\"00.00\" type=\"number\">\r\n                                    </td>\r\n                                    <td class=\"danger text-center\">(-) {{loginUser.currency.symbol}}{{total_discount | number : '1.2-2'}}</td>\r\n                                    <td></td>\r\n                                </tr>\r\n                                <tr>\r\n                                    <td></td>\r\n                                    <td></td>\r\n                                    <td></td>\r\n                                    <td class=\"text-right\">\r\n                                        <strong>{{'estimates.create.fields.adjustment' | translate}}</strong></td>\r\n                                    <td>\r\n                                        <input (change)=\"changeDiscountAdjustment($event, 'adjustment')\" class=\"form-control\" formControlName=\"adjustment\" min=\"0\" name=\"adjustment\" placeholder=\"00.00\" type=\"number\">\r\n                                    </td>\r\n                                    <td class=\"text-center\">{{loginUser.currency.symbol}}{{ estimates.adjustment }}</td>\r\n                                    <td></td>\r\n                                </tr>\r\n                                <tr>\r\n                                    <td></td>\r\n                                    <td></td>\r\n                                    <td></td>\r\n                                    <td></td>\r\n                                    <td class=\"text-right\">\r\n                                        <strong>{{'estimates.create.fields.total_amount' | translate}}:</strong></td>\r\n                                    <td class=\"text-center\">{{loginUser.currency.symbol}}{{ estimates.total | number : '1.2-2'}}</td>\r\n                                    <td></td>\r\n                                </tr>\r\n                                </tbody>\r\n                            </table>\r\n                        </div>\r\n                        <div class=\"col-md-12 text-right pt-3 pb-3\">\r\n                            <a [routerLink]=\"['/estimates']\" class=\"btn btn-cancel mb-0\">{{'common.cancel' | translate }}</a>\r\n                            <button class=\"btn btn-submit mb-0\" type=\"submit\">{{'common.create' | translate }}</button>\r\n                        </div>\r\n                    </div>\r\n                </div>\r\n            </div>\r\n        </div>\r\n    </form>\r\n</section>\r\n");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/modules/sales/estimates/pages/estimate-edit/estimate-edit.component.html":
/*!********************************************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/modules/sales/estimates/pages/estimate-edit/estimate-edit.component.html ***!
  \********************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<section id=\"basic-form-layouts\">\r\n    <form (ngSubmit)=\"onSubmit()\" *ngIf=\"isFormLoaded\" [formGroup]=\"editEstimateForm\">\r\n        <div class=\"row\">\r\n            <div class=\"col-md-6\">\r\n                <div class=\"card\">\r\n                    <div class=\"card-header\">\r\n                        <h4 class=\"card-title\">{{'estimates.title3' | translate}}</h4>\r\n                    </div>\r\n                    <div class=\"card-body\">\r\n                        <div class=\"px-3\">\r\n                            <div class=\"form-body\">\r\n                                <h4 class=\"form-section\">\r\n                                    <i aria-hidden=\"true\" class=\"ft-user\"></i>{{'estimates.headings.head1' | translate}}\r\n                                </h4>\r\n                                <div class=\"row\">\r\n                                    <div class=\"col-md-6\">\r\n                                        <div [ngClass]=\"{ 'is-invalid': isFormSubmitted && estimateControl.client_id.errors }\" class=\"form-group\">\r\n                                            <label for=\"client_id\">{{'estimates.create.fields.customer' | translate}}&nbsp;<span class=\"text-danger\">*</span>\r\n                                            </label>\r\n                                            <ng-select [clearable]=\"false\" [clearable]=\"false\" [items]=\"clients\" [searchable]=\"true\" [selectOnTab]=\"true\" bindLabel=\"firstname\" bindValue=\"id\" formControlName=\"client_id\" labelForId=\"client_id\" placeholder=\"{{'estimates.create.placeholders.placeholder1' | translate}}\">\r\n                                                <ng-template let-item=\"item\" ng-option-tmp>\r\n                                                    {{item.firstname}} {{item.lastname}}\r\n                                                </ng-template>\r\n                                            </ng-select>\r\n                                            <div *ngIf=\"isFormSubmitted && estimateControl.client_id.errors\" class=\"invalid-feedback\">\r\n                                                <div *ngIf=\"estimateControl.client_id.errors.required\">{{'estimates.create.error_messages.message1' | translate}}</div>\r\n                                            </div>\r\n                                        </div>\r\n                                    </div>\r\n                                </div>\r\n                                <h4 class=\"form-section\">\r\n                                    <i class=\"ft-calendar\"></i>{{'estimates.headings.head2' | translate}}</h4>\r\n                                <div class=\"row\">\r\n                                    <div class=\"col-md-6\">\r\n                                        <div [ngClass]=\"{ 'is-invalid': isFormSubmitted && estimateControl.estimate_date.errors }\" class=\"form-group\">\r\n                                            <label for=\"estimate_date\">{{'estimates.create.fields.estimate_date' | translate}}&nbsp;<span class=\"text-danger\">*</span></label>\r\n                                            <div class=\"position-relative has-icon-left\">\r\n                                                <input #dp1=\"bsDatepicker\" [bsConfig]=\"datepickerConfig\" bsDatepicker class=\"form-control\" formControlName=\"estimate_date\" id=\"estimate_date\" placeholder=\"{{'estimates.create.placeholders.placeholder2' | translate}}\" type=\"text\"/>\r\n                                                <div class=\"form-control-position\"><i class=\"ft-calendar\"></i></div>\r\n                                                <div *ngIf=\"isFormSubmitted && estimateControl.estimate_date.errors\" class=\"invalid-feedback\">\r\n                                                    <div *ngIf=\"estimateControl.estimate_date.errors.required\">{{'estimates.create.error_messages.message2' | translate}}</div>\r\n                                                </div>\r\n                                            </div>\r\n                                        </div>\r\n                                    </div>\r\n                                    <div class=\"col-md-6\">\r\n                                        <div [ngClass]=\"{ 'is-invalid': isFormSubmitted && estimateControl.valid_till.errors }\" class=\"form-group\">\r\n                                            <label for=\"end-date\">{{'estimates.create.fields.valid_till' | translate}}&nbsp;<span class=\"text-danger\">*</span></label>\r\n                                            <div class=\"position-relative has-icon-left\">\r\n                                                <input #dp2=\"bsDatepicker\" [bsConfig]=\"datepickerConfig\" bsDatepicker class=\"form-control\" formControlName=\"valid_till\" id=\"valid_till\" placeholder=\"{{'estimates.create.placeholders.placeholder3' | translate}}\" type=\"text\"/>\r\n                                                <div class=\"form-control-position\"><i class=\"ft-calendar\"></i></div>\r\n                                                <div *ngIf=\"isFormSubmitted && estimateControl.valid_till.errors\" class=\"invalid-feedback\">\r\n                                                    <div *ngIf=\"estimateControl.valid_till.errors.required\">{{'estimates.create.error_messages.message3' | translate}}</div>\r\n                                                </div>\r\n                                            </div>\r\n                                        </div>\r\n                                    </div>\r\n                                </div>\r\n                            </div>\r\n                        </div>\r\n                    </div>\r\n                </div>\r\n            </div>\r\n            <div class=\"col-md-6\">\r\n                <div class=\"card\">\r\n                    <div class=\"card-header\">&nbsp;</div>\r\n                    <div class=\"card-body\">\r\n                        <div class=\"px-3\">\r\n                            <div class=\"form-body\">\r\n                                <h4 class=\"form-section\">\r\n                                    <i class=\"ft-box\"></i>{{'estimates.headings.head3' | translate}}</h4>\r\n                                <div class=\"row\">\r\n                                    <div class=\"col-md-6\">\r\n                                        <div class=\"form-group\">\r\n                                            <label for=\"estimate_number\">{{'estimates.create.fields.estimate_number' | translate}} #</label>\r\n                                            <input aria-describedby=\"basic-addon1\" class=\"form-control\" formControlName=\"estimate_number\" id=\"estimate_number\" readonly=\"\" type=\"text\">\r\n                                        </div>\r\n                                    </div>\r\n                                    <div class=\"col-md-6\">\r\n                                        <div class=\"form-group\">\r\n                                            <label for=\"reference\">{{'estimates.create.fields.reference' | translate}} #</label>\r\n                                            <input class=\"form-control\" formControlName=\"reference\" id=\"reference\" placeholder=\"{{'estimates.create.placeholders.placeholder4' | translate}}\" type=\"text\"/>\r\n                                        </div>\r\n                                    </div>\r\n                                    <div class=\"col-md-6\">\r\n                                        <div class=\"form-group\">\r\n                                            <label for=\"type\">{{'estimates.create.fields.discount_type' | translate}}</label>\r\n                                            <ng-select (change)=\"changeDiscountType($event)\" [clearable]=\"false\" [items]=\"('estimates.discount_type' | translate)\" [searchable]=\"true\" [selectOnTab]=\"true\" bindLabel=\"label\" bindValue=\"id\" formControlName=\"discount_type\" labelForId=\"discount_type\" placeholder=\"{{'estimates.create.placeholders.placeholder5' | translate}}\"></ng-select>\r\n                                        </div>\r\n                                    </div>\r\n                                </div>\r\n                            </div>\r\n                        </div>\r\n                    </div>\r\n                </div>\r\n            </div>\r\n            <div class=\"col-md-12\">\r\n                <div class=\"card\">\r\n                    <div class=\"card-form\">\r\n                        <h4 class=\"card-title\">{{'estimates.headings.head4' | translate}}</h4>\r\n                        <div class=\"card-button estimate-form\">\r\n                            <ng-select (change)=\"changeItem($event)\" [clearable]=\"false\" [items]=\"items\" bindLabel=\"name\" bindValue=\"id\" formControlName=\"selectedItem\" placeholder=\"{{'estimates.create.placeholders.placeholder7' | translate}}\">\r\n                                <ng-template let-index=\"index\" let-item=\"item\" let-search=\"searchTerm\" ng-option-tmp>\r\n                                    <div class=\"card mt-1 mb-1\">\r\n                                        <div class=\"card-body p-2\">\r\n                                            <h5 [ngOptionHighlight]=\"search\" class=\"card-title\">({{loginUser.currency.symbol}}{{item.price}}) {{item.name}}</h5>\r\n                                            <p class=\"card-text\">{{item.description}}</p>\r\n                                        </div>\r\n                                    </div>\r\n                                </ng-template>\r\n                            </ng-select>\r\n                        </div>\r\n                    </div>\r\n                    <div class=\"card-body\">\r\n                        <div class=\"table-responsive-xs table-responsive-sm table-responsive-md table-responsive-lg table-responsive-xl\">\r\n                            <table class=\"table table-bordered table-hover b4-datatable\" id=\"estimate_table\" width=\"100%\">\r\n                                <thead>\r\n                                <tr>\r\n                                    <th>{{'estimates.create.fields.item_name' | translate}}</th>\r\n                                    <th>{{'estimates.create.fields.item_description' | translate}}</th>\r\n                                    <th class=\"width-100\">{{'estimates.create.fields.quantity' | translate}}</th>\r\n                                    <th class=\"width-150\">{{'estimates.create.fields.unit_price' | translate}}</th>\r\n                                    <th class=\"width-250\">{{'estimates.create.fields.item_tax' | translate}}</th>\r\n                                    <th>{{'estimates.create.fields.total_item_amount' | translate}} ({{loginUser.currency.symbol}})</th>\r\n                                    <th class=\"text-right\">{{'common.actions' | translate}}</th>\r\n                                </tr>\r\n                                </thead>\r\n                                <tbody>\r\n                                <tr formArrayName=\"item\">\r\n                                    <td>\r\n                                        <div class=\"form-group\">\r\n                                            <input class=\"form-control\" formControlName=\"item_name\" id=\"item_name\" placeholder=\"{{'estimates.create.placeholders.placeholder8' | translate}}\" type=\"text\"/>\r\n                                        </div>\r\n                                    </td>\r\n                                    <td>\r\n                                        <div class=\"form-group\">\r\n\t\t\t\t\t\t\t\t\t\t\t\t<textarea class=\"form-control\" formControlName=\"item_description\" id=\"item_description\" placeholder=\"{{'estimates.create.placeholders.placeholder9' | translate}}\">\r\n\t\t\t\t\t\t\t\t\t\t\t\t</textarea>\r\n                                        </div>\r\n                                    </td>\r\n                                    <td>\r\n                                        <div class=\"form-group\">\r\n                                            <input class=\"form-control\" formControlName=\"quantity\" id=\"quantity\" min=\"1\" placeholder=\"{{'estimates.create.placeholders.placeholder10' | translate}}\" type=\"number\"/>\r\n                                            <input class=\"inp\" formControlName=\"item_unit\" placeholder=\"{{'estimates.create.fields.unit' | translate}}\" type=\"text\"/>\r\n                                        </div>\r\n                                    </td>\r\n                                    <td>\r\n                                        <div class=\"form-group\">\r\n                                            <input class=\"form-control\" formControlName=\"unit_price\" id=\"unit_price\" min=\"0\" placeholder=\"{{'estimates.create.placeholders.placeholder11' | translate}}\" type=\"number\"/>\r\n                                        </div>\r\n                                    </td>\r\n                                    <td>\r\n                                        <div class=\"form-group\">\r\n                                            <ng-select [clearable]=\"false\" [items]=\"taxes\" [multiple]=\"true\" [searchable]=\"true\" [selectOnTab]=\"true\" bindLabel=\"tax_name\" bindValue=\"id\" formControlName=\"taxes\" placeholder=\"{{'estimates.create.placeholders.placeholder12' | translate}}\">\r\n                                                <ng-template let-index=\"index\" let-item=\"item\" let-search=\"searchTerm\" ng-option-tmp>\r\n                                                    {{item.tax_name}}({{item.tax_rate}}%)\r\n                                                </ng-template>\r\n                                            </ng-select>\r\n                                        </div>\r\n                                    </td>\r\n                                    <td>&nbsp;</td>\r\n                                    <td class=\"text-right\">\r\n                                        <button (click)=\"addItem($event)\" class=\"btn btn-secondary\" placement=\"left\" tooltip=\"{{'common.add' | translate}}\">\r\n                                            <i class=\"fa fa-plus\"></i></button>\r\n                                    </td>\r\n                                </tr>\r\n                                <tr *ngFor=\"let item of itemsArray; index as i\">\r\n                                    <td>\r\n                                        <inline-edit-input (updateValue)=\"saveItemDetail(i, 'item_name', $event);\" [elementFor]=\"'estimates.inline_edit.item_name' | translate\" [fieldValue]=\"item.item_name\" [isRequired]=\"'true'\" [name]=\"'item_name'\" [type]=\"'text'\"></inline-edit-input>\r\n                                    </td>\r\n                                    <td>\r\n                                        <inline-edit-textarea (updateValue)=\"saveItemDetail(i, 'item_description', $event);\" [elementFor]=\"'estimates.inline_edit.item_description' | translate\" [fieldValue]=\"item.item_description\" [isRequired]=\"'false'\" [name]=\"'item_description'\"></inline-edit-textarea>\r\n                                    </td>\r\n                                    <td>\r\n                                        <inline-edit-input (updateValue)=\"saveItemDetail(i, 'quantity', $event);\" [elementFor]=\"'estimates.inline_edit.quantity' | translate\" [fieldValue]=\"item.quantity\" [isRequired]=\"'true'\" [name]=\"'quantity'\" [type]=\"'number'\"></inline-edit-input>\r\n                                    </td>\r\n                                    <td>\r\n                                        <inline-edit-input (updateValue)=\"saveItemDetail(i, 'unit_price', $event);\" [elementFor]=\"'estimates.inline_edit.unit_price' | translate\" [fieldValue]=\"item.unit_price\" [isRequired]=\"'true'\" [name]=\"'unit_price'\" [type]=\"'number'\"></inline-edit-input>\r\n                                    </td>\r\n                                    <td>\r\n                                        <inline-edit-select-items (updateValue)=\"saveItemDetail(i, 'taxes', $event);\" [elementFor]=\"'estimates.inline_edit.item_tax' | translate\" [isRequired]=\"'true'\" [name]=\"'taxes'\" [options]=\"taxes\" [selectedValue]=\"item.taxes\" [txtField]=\"'Taxes'\"></inline-edit-select-items>\r\n                                    </td>\r\n                                    <td class=\"text-center\">{{item.quantity * item.unit_price}}</td>\r\n                                    <td class=\"actions-dropdown text-right\">\r\n                                        <div class=\"btn-group\" dropdown>\r\n                                            <button aria-controls=\"dropdown-basic-1\" class=\"dropdown-toggle btn-action\" dropdownToggle id=\"button-basic-1\" type=\"button\">\r\n                                                <i class=\"fa fa-ellipsis-v\"></i></button>\r\n                                            <ul *dropdownMenu aria-labelledby=\"button-basic-1\" class=\"dropdown-menu animated fadeIn\" id=\"dropdown-basic-1\" role=\"menu\">\r\n                                                <li role=\"menuitem\">\r\n                                                    <a (click)=\"deleteItem(i)\" class=\"dropdown-item btn btn-delete btn-raised\"><i class=\"fa fa-trash-o\" tooltip=\"{{'common.delete' | translate}}\"></i></a>\r\n                                                </li>\r\n                                            </ul>\r\n                                        </div>\r\n                                    </td>\r\n                                </tr>\r\n                                </tbody>\r\n                                <tbody class=\"mt-4\">\r\n                                <tr>\r\n                                    <td></td>\r\n                                    <td></td>\r\n                                    <td></td>\r\n                                    <td></td>\r\n                                    <td class=\"text-right\">\r\n                                        <strong>{{'estimates.create.fields.sub_total' | translate}}:</strong></td>\r\n                                    <td class=\"text-center\">{{loginUser.currency.symbol}}{{estimates.sub_total | number : '1.2-2'}}</td>\r\n                                    <td></td>\r\n                                </tr>\r\n                                <tr *ngFor=\"let tax of itemTaxes | keyvalue\">\r\n                                    <ng-container *ngIf=\"tax\">\r\n                                        <td></td>\r\n                                        <td></td>\r\n                                        <td></td>\r\n                                        <td></td>\r\n                                        <td class=\"text-right\">\r\n                                            <strong>{{taxesNameValues[tax.key].tax_name}}({{taxesNameValues[tax.key].tax_rate}}%)</strong>\r\n                                        </td>\r\n                                        <td class=\"text-center\">{{loginUser.currency.symbol}}{{tax.value | number : '1.2-2'}}</td>\r\n                                        <td></td>\r\n                                    </ng-container>\r\n                                </tr>\r\n                                <tr>\r\n                                    <td></td>\r\n                                    <td></td>\r\n                                    <td></td>\r\n                                    <td class=\"text-right\">\r\n                                        <strong>{{'estimates.create.fields.discount' | translate}}</strong></td>\r\n                                    <td>\r\n                                        <input (change)=\"changeDiscountAdjustment($event, 'discount')\" class=\"form-control\" formControlName=\"discount\" name=\"discount\" placeholder=\"00.00\" type=\"number\">\r\n                                    </td>\r\n                                    <td class=\"danger text-center\">(-) {{loginUser.currency.symbol}}{{total_discount | number : '1.2-2'}}</td>\r\n                                    <td></td>\r\n                                </tr>\r\n                                <tr>\r\n                                    <td></td>\r\n                                    <td></td>\r\n                                    <td></td>\r\n                                    <td class=\"text-right\">\r\n                                        <strong>{{'estimates.create.fields.adjustment' | translate}}</strong></td>\r\n                                    <td>\r\n                                        <input (change)=\"changeDiscountAdjustment($event, 'adjustment')\" class=\"form-control\" formControlName=\"adjustment\" min=\"0\" name=\"adjustment\" placeholder=\"00.00\" type=\"number\">\r\n                                    </td>\r\n                                    <td class=\"text-center\">{{loginUser.currency.symbol}}{{estimates.adjustment | number : '1.2-2'}}</td>\r\n                                    <td></td>\r\n                                </tr>\r\n                                <tr>\r\n                                    <td></td>\r\n                                    <td></td>\r\n                                    <td></td>\r\n                                    <td></td>\r\n                                    <td class=\"text-right\">\r\n                                        <strong>{{'estimates.create.fields.total_amount' | translate}}:</strong></td>\r\n                                    <td class=\"text-center\">{{loginUser.currency.symbol}}{{estimates.total | number : '1.2-2'}}</td>\r\n                                    <td></td>\r\n                                </tr>\r\n                                </tbody>\r\n                            </table>\r\n                        </div>\r\n                        <div class=\"col-md-12 text-right pt-3 pb-3\">\r\n                            <a [routerLink]=\"['/estimates']\" class=\"btn btn-cancel mb-0\">{{'common.cancel' | translate }}</a>\r\n                            <button class=\"btn btn-submit mb-0\" type=\"submit\">{{'common.edit' | translate }}</button>\r\n                        </div>\r\n                    </div>\r\n                </div>\r\n            </div>\r\n        </div>\r\n    </form>\r\n</section>\r\n");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/modules/sales/estimates/pages/estimate-lists/estimate-lists.component.html":
/*!**********************************************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/modules/sales/estimates/pages/estimate-lists/estimate-lists.component.html ***!
  \**********************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<section class=\"hide_empty_message\">\r\n    <div class=\"row\">\r\n        <div class=\"col-sm-12\">\r\n            <div class=\"card pl-2 pr-2\">\r\n                <div class=\"card-header pl-0 pr-0 border-bottom\">\r\n                    <h4 class=\"main-title mt-2\"><span>{{'estimates.title' | translate}}</span></h4>\r\n                    <div *ngxPermissionsOnly=\"['admin', 'super_admin', 'estimates_create']\" class=\"card-buttons\">\r\n                        <a [routerLink]=\"['/estimates/create']\" class=\"btn btn-create mb-0\" tooltip=\"{{'common.create' | translate}}\"><i class=\"fa fa-plus\"></i></a>\r\n                    </div>\r\n                </div>\r\n                <div class=\"card-content pt-3 pb-3\">\r\n                    <div class=\"card-body\">\r\n                        <div class=\"row\">\r\n                            <div class=\"col-sm-12\">\r\n                                <div class=\"table-responsive-xs table-responsive-sm table-responsive-md table-responsive-lg table-responsive-xl\">\r\n                                    <table [dtOptions]=\"dtOptions\" [dtTrigger]=\"dtTrigger\" class=\"table table-bordered table-hover b4-datatable\" datatable id=\"estimate_table\" width=\"100%\">\r\n                                        <thead>\r\n                                        <tr>\r\n                                            <th>{{'estimates.columns.estimate_number' | translate}} #</th>\r\n                                            <th>{{'estimates.columns.customer' | translate}}</th>\r\n                                            <th>{{'estimates.columns.estimate_date' | translate}}</th>\r\n                                            <th>{{'estimates.columns.valid_till' | translate}}</th>\r\n                                            <th>{{'estimates.columns.total_amount' | translate}}</th>\r\n                                            <th>{{'estimates.columns.status' | translate}}</th>\r\n                                            <th>{{'common.actions' | translate}}</th>\r\n                                        </tr>\r\n                                        </thead>\r\n                                        <tbody>\r\n                                        <tr *ngFor=\"let estimate of estimates; index as i\">\r\n                                            <td>\r\n                                                <a [routerLink]=\"['/estimates/detail', estimate.id]\">{{estimate.estimate_number}}</a>\r\n                                            </td>\r\n                                            <td>{{estimate.client_firstname}} {{estimate.client_lastname}}</td>\r\n                                            <td>{{estimate.estimate_date | dateTimeFormatFilter: loginUser.settings.date_format}}</td>\r\n                                            <td>{{estimate.valid_till | dateTimeFormatFilter: loginUser.settings.date_format}}</td>\r\n                                            <td>{{loginUser.currency.symbol}}{{estimate.total_amount | number : '1.2-2'}}</td>\r\n                                            <td class=\"budges-status\">\r\n                                                <ng-container *ngFor=\"let status of ('estimates.status' | translate)\">\r\n                                                    <span *ngIf=\"status.id == estimate.status\" class=\"{{status.class}}\">{{status.label}}</span>\r\n                                                </ng-container>\r\n                                            </td>\r\n                                            <td class=\"actions-dropdown\">\r\n                                                <div class=\"btn-group\" dropdown>\r\n                                                    <button aria-controls=\"dropdown-basic-1\" class=\"dropdown-toggle btn-action\" dropdownToggle id=\"button-basic-1\" type=\"button\">\r\n                                                        <i class=\"fa fa-ellipsis-v\"></i></button>\r\n                                                    <ul *dropdownMenu aria-labelledby=\"button-basic-1\" class=\"dropdown-menu animated fadeIn\" id=\"dropdown-basic-1\" role=\"menu\">\r\n                                                        <li role=\"menuitem\">\r\n                                                            <a *ngxPermissionsOnly=\"['admin', 'super_admin', 'estimates_edit']\" [routerLink]=\"['/estimates/edit', estimate.id]\" class=\"dropdown-item btn btn-edit btn-raised\"><i class=\"fa fa-pencil-square-o\" tooltip=\"{{'common.edit' | translate}}\"></i></a>\r\n                                                        </li>\r\n                                                        <li role=\"menuitem\">\r\n                                                            <a (click)=\"deleteEstimate(estimate.id)\" *ngxPermissionsOnly=\"['admin', 'super_admin', 'estimates_delete']\" class=\"dropdown-item btn btn-delete btn-raised\"><i class=\"fa fa-trash-o\" tooltip=\"{{'common.delete' | translate}}\"></i></a>\r\n                                                        </li>\r\n                                                    </ul>\r\n                                                </div>\r\n                                            </td>\r\n                                        </tr>\r\n                                        </tbody>\r\n                                        <tfoot *ngIf=\"estimates?.length == 0\" class=\"tfoot_dt\">\r\n                                        <tr>\r\n                                            <td class=\"no-data-available text-center\" colspan=\"7\">{{'common.datatable.sEmptyTable' | translate}}</td>\r\n                                        </tr>\r\n                                        </tfoot>\r\n                                    </table>\r\n                                </div>\r\n                            </div>\r\n                        </div>\r\n                    </div>\r\n                </div>\r\n            </div>\r\n        </div>\r\n    </div>\r\n</section>\r\n");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/modules/sales/estimates/pages/estimate-view/estimate-view.component.html":
/*!********************************************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/modules/sales/estimates/pages/estimate-view/estimate-view.component.html ***!
  \********************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<section *ngIf=\"isPageLoad\">\r\n    <div class=\"row\">\r\n        <div class=\"col-12 text-center text-sm-right\">\r\n            <a *ngxPermissionsOnly=\"['admin', 'super_admin', 'estimates_view']\" class=\"btn btn-secondary text-white mb-0\" href=\"{{apiUrl}}/estimates/download/{{estimate.secret_id}}/{{estimate.client.id}}\" type=\"button\"><i class=\"ft-upload mr-1\"></i>{{'estimates.view.download' | translate}}\r\n            </a>\r\n        </div>\r\n    </div>\r\n    <div class=\"row\" id=\"estimate_table\">\r\n        <div class=\"col-md-12 col-12\">\r\n            <div class=\"card\">\r\n                <div class=\"card-content p-3\">\r\n                    <div class=\"card-body pb-0\">\r\n                        <div class=\"row\">\r\n                            <div class=\"col-md-6 col-12\">\r\n                                <div *ngIf=\"estimate.status == 'draft'\" class=\"ribbon ribbon-bookmark ribbon-draft\">{{'estimates.view.draft' | translate}}</div>\r\n                                <div *ngIf=\"estimate.status == 'sent'\" class=\"ribbon ribbon-bookmark ribbon-sent\">{{'estimates.view.sent' | translate}}</div>\r\n                                <div *ngIf=\"estimate.status == 'expired'\" class=\"ribbon ribbon-bookmark ribbon-expired\">{{'estimates.view.expired' | translate}}</div>\r\n                                <div *ngIf=\"estimate.status == 'declined'\" class=\"ribbon ribbon-bookmark ribbon-declined\">{{'estimates.view.decline' | translate}}</div>\r\n                                <div *ngIf=\"estimate.status == 'accepted'\" class=\"ribbon ribbon-bookmark ribbon-accepted\">{{'estimates.view.accepted' | translate}}</div>\r\n\r\n                                <div class=\"media logo-img pt-5\">\r\n                                    <img *ngIf=\"estimateSettings.estimate_logo\" alt=\"Estimate Logo\" height=\"80\" src=\"{{apiUrl}}/uploads/estimate_logo/{{estimateSettings.estimate_logo}}\" width=\"80\">\r\n                                    <img *ngIf=\"!estimateSettings.estimate_logo\" alt=\"Estimate Logo\" height=\"80\" src=\"assets/img/logos/vipspm_logo.png\" width=\"80\">\r\n                                    <div class=\"media-body ml-4\">\r\n                                        <ul class=\"m-0 list-unstyled\">\r\n                                            <li class=\"text-bold-800\">{{loginUser.settings.company_name}}</li>\r\n                                            <li class=\"nl2br\">{{loginUser.settings.company_address}}</li>\r\n                                            <li>{{loginUser.settings.company_phone}}</li>\r\n                                        </ul>\r\n                                    </div>\r\n                                </div>\r\n                            </div>\r\n                            <div class=\"col-md-6 col-12 text-right\">\r\n                                <h2 class=\"primary text-uppercase\">{{'estimates.title4' | translate}}</h2>\r\n                                <p class=\"pb-3\"># {{estimate.estimate_number}}</p>\r\n                                <!-- <ul class=\"px-0 list-unstyled\">\r\n                                    <li>{{'estimates.view.balance_due' | translate}}</li>\r\n                                    <li class=\"font-medium-2 text-bold-700\">{{loginUser.currency.symbol}}{{estimates.total | number : '1.2-2'}}</li>\r\n                                </ul> -->\r\n                            </div>\r\n                        </div>\r\n                        <div class=\"row\" id=\"invoice-customer-details\">\r\n                            <div class=\"col-12\">\r\n                                <p class=\"text-muted mb-1\">{{'estimates.view.bill_to' | translate}}</p>\r\n                            </div>\r\n                            <div class=\"col-md-4 col-12 text-left\">\r\n                                <ul class=\"m-0 list-unstyled\">\r\n                                    <li class=\"text-bold-800\">{{estimate.client.firstname}} {{estimate.client.lastname}}</li>\r\n                                    <li class=\"nl2br\">{{estimate.client.address}}</li>\r\n                                    <li>{{estimate.client.phone}}</li>\r\n                                    <li>{{estimate.client.mobile}}</li>\r\n                                </ul>\r\n                            </div>\r\n                            <div class=\"col-md-8 col-12 text-right\">\r\n                                <p *ngIf=\"estimate.reference\">\r\n                                    <span class=\"text-muted\">{{'estimates.create.fields.reference' | translate}} :</span> {{estimate.reference}}\r\n                                </p>\r\n                                <p>\r\n                                    <span class=\"text-muted\">{{'estimates.view.estimate_date' | translate}} :</span> {{estimate.estimate_date | dateTimeFormatFilter: loginUser.settings.date_format}}\r\n                                </p>\r\n                                <p class=\"m-0\">\r\n                                    <span class=\"text-muted\">{{'estimates.view.due_date' | translate}} :</span> {{estimate.valid_till | dateTimeFormatFilter: loginUser.settings.date_format}}\r\n                                </p>\r\n                            </div>\r\n                        </div>\r\n                        <div id=\"invoice-items-details\">\r\n                            <div class=\"row\">\r\n                                <div class=\"table-responsive col-12\">\r\n                                    <table class=\"table mt-3\">\r\n                                        <thead>\r\n                                        <tr>\r\n                                            <th>#</th>\r\n                                            <th>{{'estimates.create.fields.item_name' | translate}} &amp; {{'estimates.create.fields.item_description' | translate}}</th>\r\n                                            <th>{{'estimates.create.fields.quantity' | translate}}</th>\r\n                                            <th>{{'estimates.create.fields.unit_price' | translate}}</th>\r\n                                            <th>{{'estimates.create.fields.item_tax' | translate}}</th>\r\n                                            <th class=\"text-right\">{{'estimates.create.fields.total_item_amount' | translate}} ({{loginUser.currency.symbol}})</th>\r\n                                        </tr>\r\n                                        </thead>\r\n                                        <tbody>\r\n                                        <tr *ngFor=\"let item of estimate.items; index as i\">\r\n                                            <th scope=\"row\">{{i + 1}}</th>\r\n                                            <td>\r\n                                                <p class=\"mb-0\">{{item.item_name}}</p>\r\n                                                <p class=\"mb-0 text-muted\">{{item.item_description}}</p>\r\n                                            </td>\r\n                                            <td><span>{{item.quantity}}<small>&nbsp;{{item.item_unit}}</small></span>\r\n                                            </td>\r\n                                            <td>{{item.unit_price}}</td>\r\n                                            <td class=\"budges-status\">\r\n                                                <ng-container *ngFor=\"let tax of item.taxes\">\r\n                                                    <span class=\"open\">{{tax.tax_name}} ({{tax.tax_rate}}%)</span>\r\n                                                </ng-container>\r\n                                            </td>\r\n                                            <td class=\"text-right\">{{item.unit_price * item.quantity}}</td>\r\n                                        </tr>\r\n                                        </tbody>\r\n                                    </table>\r\n                                </div>\r\n                            </div>\r\n                            <div class=\"row mt-3 mt-md-0\">\r\n                                <div class=\"col-md-6 col-12 text-left\"></div>\r\n                                <div class=\"col-md-6 col-12\">\r\n                                    <div class=\"table-responsive-xs table-responsive-sm table-responsive-md table-responsive-lg table-responsive-xl\">\r\n                                        <table class=\"table\">\r\n                                            <tbody>\r\n                                            <tr>\r\n                                                <td>{{'estimates.create.fields.sub_total' | translate}}</td>\r\n                                                <td class=\"text-right\">{{loginUser.currency.symbol}}{{estimates.sub_total | number : '1.2-2'}}</td>\r\n                                            </tr>\r\n                                            <tr *ngFor=\"let tax of itemTaxes | keyvalue\">\r\n                                                <td>{{taxesNameValues[tax.key].tax_name}} ({{taxesNameValues[tax.key].tax_rate}}%)</td>\r\n                                                <td class=\"text-right\">{{loginUser.currency.symbol}}{{tax.value | number : '1.2-2'}}</td>\r\n                                            </tr>\r\n                                            <tr>\r\n                                                <td>{{'estimates.create.fields.discount' | translate}}</td>\r\n                                                <td class=\"danger text-right\">(-) {{loginUser.currency.symbol}}{{estimate.total_discount | number : '1.2-2'}}</td>\r\n                                            </tr>\r\n                                            <tr>\r\n                                                <td>{{'estimates.create.fields.adjustment' | translate}}</td>\r\n                                                <td class=\"text-right\">{{loginUser.currency.symbol}}{{estimate.adjustment | number : '1.2-2'}}</td>\r\n                                            </tr>\r\n                                            <tr>\r\n                                                <td class=\"text-bold-500\">{{'estimates.create.fields.total_amount' | translate}}</td>\r\n                                                <td class=\"text-bold-500 text-right\"> {{loginUser.currency.symbol}}{{estimates.total | number : '1.2-2'}}</td>\r\n                                            </tr>\r\n                                            </tbody>\r\n                                        </table>\r\n                                    </div>\r\n                                </div>\r\n                            </div>\r\n                            <div class=\"row mt-2 mt-sm-0 pt-3 border-top\">\r\n                                <div class=\"col-md-12 col-12 d-flex align-items-center\">\r\n                                    <div class=\"terms-conditions mb-2\">\r\n                                        <h6><strong>{{'estimates.view.terms' | translate}}</strong></h6>\r\n                                        <p>{{estimateSettings.terms_conditions}}</p>\r\n                                    </div>\r\n                                </div>\r\n                            </div>\r\n                        </div>\r\n                    </div>\r\n                </div>\r\n            </div>\r\n        </div>\r\n    </div>\r\n    <div class=\"row\">\r\n        <div class=\"col-12 text-center text-sm-right\">\r\n            <ng-container *ngIf=\"estimate.status == 'draft' || estimate.status == 'sent'\">\r\n                <button (click)=\"changeEstimateStatus(estimate.id, 'accepted');\" class=\"btn btn-submit\" type=\"button\">{{'estimates.view.accept' | translate}}</button>\r\n                <button (click)=\"changeEstimateStatus(estimate.id, 'declined');\" class=\"btn btn-cancel\" type=\"button\">{{'estimates.view.decline' | translate}}</button>\r\n            </ng-container>\r\n            <ng-container *ngIf=\"estimate.status == 'declined'\">\r\n                <button (click)=\"changeEstimateStatus(estimate.id, 'accepted');\" class=\"btn btn-submit\" type=\"button\">{{'estimates.view.accept' | translate}}</button>\r\n            </ng-container>\r\n        </div>\r\n    </div>\r\n</section>\r\n");

/***/ }),

/***/ "./src/app/core/helpers/sale.helper.ts":
/*!*********************************************!*\
  !*** ./src/app/core/helpers/sale.helper.ts ***!
  \*********************************************/
/*! exports provided: estimate_status_value, invoice_status_value */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "estimate_status_value", function() { return estimate_status_value; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "invoice_status_value", function() { return invoice_status_value; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");

var estimate_status_value = [];
estimate_status_value['draft'] = 'common.status.draft';
estimate_status_value['sent'] = 'common.status.sent';
estimate_status_value['expired'] = 'common.status.expired';
estimate_status_value['declined'] = 'common.status.declined';
estimate_status_value['accepted'] = 'common.status.accepted';
// --
// Invoice status
var invoice_status_value = [];
estimate_status_value['paid'] = 'common.status.paid';
estimate_status_value['partially_paid'] = 'common.status.partially_paid';
estimate_status_value['unpaid'] = 'common.status.unpaid';


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

/***/ "./src/app/core/services/estimate.service.ts":
/*!***************************************************!*\
  !*** ./src/app/core/services/estimate.service.ts ***!
  \***************************************************/
/*! exports provided: EstimateService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "EstimateService", function() { return EstimateService; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../environments/environment */ "./src/environments/environment.ts");




var EstimateService = /** @class */ (function () {
    function EstimateService(http) {
        this.http = http;
        this.apiUrl = _environments_environment__WEBPACK_IMPORTED_MODULE_3__["environment"].apiUrl;
    }
    EstimateService.prototype.getAll = function (year) {
        return this.http.get(this.apiUrl + "/api/estimates");
    };
    EstimateService.prototype.getById = function (id) {
        return this.http.get(this.apiUrl + "/api/estimates/" + id);
    };
    EstimateService.prototype.create = function (estimate) {
        return this.http.post(this.apiUrl + "/api/estimates", estimate);
    };
    EstimateService.prototype.update = function (estimate) {
        return this.http.put(this.apiUrl + "/api/estimates/" + estimate.id, estimate);
    };
    EstimateService.prototype.delete = function (id) {
        return this.http.delete(this.apiUrl + "/api/estimates/" + id);
    };
    EstimateService.prototype.changeStatus = function (estimate) {
        return this.http.post(this.apiUrl + "/api/estimates/change-status/" + estimate.id, { 'status': estimate.status });
    };
    EstimateService.prototype.download = function (id) {
        return this.http.get(this.apiUrl + "/api/estimates/download/" + id);
    };
    EstimateService.ctorParameters = function () { return [
        { type: _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClient"] }
    ]; };
    EstimateService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
            providedIn: 'root'
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClient"]])
    ], EstimateService);
    return EstimateService;
}());



/***/ }),

/***/ "./src/app/modules/sales/estimates/estimates-routing.module.ts":
/*!*********************************************************************!*\
  !*** ./src/app/modules/sales/estimates/estimates-routing.module.ts ***!
  \*********************************************************************/
/*! exports provided: EstimatesRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "EstimatesRoutingModule", function() { return EstimatesRoutingModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var ngx_permissions__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ngx-permissions */ "./node_modules/ngx-permissions/ngx-permissions.umd.js");
/* harmony import */ var ngx_permissions__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(ngx_permissions__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _pages_estimate_lists_estimate_lists_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./pages/estimate-lists/estimate-lists.component */ "./src/app/modules/sales/estimates/pages/estimate-lists/estimate-lists.component.ts");
/* harmony import */ var _pages_estimate_create_estimate_create_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./pages/estimate-create/estimate-create.component */ "./src/app/modules/sales/estimates/pages/estimate-create/estimate-create.component.ts");
/* harmony import */ var _pages_estimate_edit_estimate_edit_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./pages/estimate-edit/estimate-edit.component */ "./src/app/modules/sales/estimates/pages/estimate-edit/estimate-edit.component.ts");
/* harmony import */ var _pages_estimate_view_estimate_view_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./pages/estimate-view/estimate-view.component */ "./src/app/modules/sales/estimates/pages/estimate-view/estimate-view.component.ts");








var routes = [{
        path: '',
        children: [
            {
                path: '',
                canActivate: [ngx_permissions__WEBPACK_IMPORTED_MODULE_3__["NgxPermissionsGuard"]],
                component: _pages_estimate_lists_estimate_lists_component__WEBPACK_IMPORTED_MODULE_4__["EstimateListsComponent"]
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
                        only: ['admin', 'super_admin', 'estimates_create']
                    }
                },
                component: _pages_estimate_create_estimate_create_component__WEBPACK_IMPORTED_MODULE_5__["EstimateCreateComponent"]
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
                        only: ['admin', 'super_admin', 'estimates_edit']
                    }
                },
                component: _pages_estimate_edit_estimate_edit_component__WEBPACK_IMPORTED_MODULE_6__["EstimateEditComponent"]
            },
            {
                path: 'detail/:id',
                canActivate: [ngx_permissions__WEBPACK_IMPORTED_MODULE_3__["NgxPermissionsGuard"]],
                data: {
                    breadcrumbs: {
                        text: 'common.detail',
                        icon: 'fa fa-external-link'
                    },
                    permissions: {
                        only: ['admin', 'super_admin', 'estimates_view']
                    }
                },
                component: _pages_estimate_view_estimate_view_component__WEBPACK_IMPORTED_MODULE_7__["EstimateViewComponent"]
            }
        ]
    }
];
var EstimatesRoutingModule = /** @class */ (function () {
    function EstimatesRoutingModule() {
    }
    EstimatesRoutingModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)],
            exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]]
        })
    ], EstimatesRoutingModule);
    return EstimatesRoutingModule;
}());



/***/ }),

/***/ "./src/app/modules/sales/estimates/estimates.module.ts":
/*!*************************************************************!*\
  !*** ./src/app/modules/sales/estimates/estimates.module.ts ***!
  \*************************************************************/
/*! exports provided: EstimatesModule, HttpLoaderFactory */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "EstimatesModule", function() { return EstimatesModule; });
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
/* harmony import */ var _estimates_routing_module__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ./estimates-routing.module */ "./src/app/modules/sales/estimates/estimates-routing.module.ts");
/* harmony import */ var _shared_shared_module__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ../../../shared/shared.module */ "./src/app/shared/shared.module.ts");
/* harmony import */ var _pages_estimate_lists_estimate_lists_component__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! ./pages/estimate-lists/estimate-lists.component */ "./src/app/modules/sales/estimates/pages/estimate-lists/estimate-lists.component.ts");
/* harmony import */ var _pages_estimate_create_estimate_create_component__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! ./pages/estimate-create/estimate-create.component */ "./src/app/modules/sales/estimates/pages/estimate-create/estimate-create.component.ts");
/* harmony import */ var _pages_estimate_edit_estimate_edit_component__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! ./pages/estimate-edit/estimate-edit.component */ "./src/app/modules/sales/estimates/pages/estimate-edit/estimate-edit.component.ts");
/* harmony import */ var _pages_estimate_view_estimate_view_component__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! ./pages/estimate-view/estimate-view.component */ "./src/app/modules/sales/estimates/pages/estimate-view/estimate-view.component.ts");



















var EstimatesModule = /** @class */ (function () {
    function EstimatesModule() {
    }
    EstimatesModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            declarations: [
                _pages_estimate_lists_estimate_lists_component__WEBPACK_IMPORTED_MODULE_15__["EstimateListsComponent"],
                _pages_estimate_create_estimate_create_component__WEBPACK_IMPORTED_MODULE_16__["EstimateCreateComponent"],
                _pages_estimate_edit_estimate_edit_component__WEBPACK_IMPORTED_MODULE_17__["EstimateEditComponent"],
                _pages_estimate_view_estimate_view_component__WEBPACK_IMPORTED_MODULE_18__["EstimateViewComponent"]
            ],
            imports: [
                _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
                _estimates_routing_module__WEBPACK_IMPORTED_MODULE_13__["EstimatesRoutingModule"],
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
                _shared_shared_module__WEBPACK_IMPORTED_MODULE_14__["SharedModule"]
            ]
        })
    ], EstimatesModule);
    return EstimatesModule;
}());

// Required for AOT compilation
function HttpLoaderFactory(http) {
    return new _ngx_translate_http_loader__WEBPACK_IMPORTED_MODULE_11__["TranslateHttpLoader"](http, './assets/i18n/', '.json');
}


/***/ }),

/***/ "./src/app/modules/sales/estimates/pages/estimate-create/estimate-create.component.scss":
/*!**********************************************************************************************!*\
  !*** ./src/app/modules/sales/estimates/pages/estimate-create/estimate-create.component.scss ***!
  \**********************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = (".ng-select.ng-select-single .ng-select-container {\n  min-width: 500px;\n}\n\n.inp {\n  border: none;\n  border-bottom: 1px solid #e8eef3;\n  padding: 5px 10px;\n  outline: none;\n  width: 100%;\n}\n\n[placeholder]:focus::-webkit-input-placeholder {\n  transition: text-indent 0.4s 0.4s ease;\n  text-indent: -100%;\n  opacity: 1;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvbW9kdWxlcy9zYWxlcy9lc3RpbWF0ZXMvcGFnZXMvZXN0aW1hdGUtY3JlYXRlL0M6XFxVc2Vyc1xcdGh1YW5cXE9uZURyaXZlXFxEZXNrdG9wXFxnbGF2YWwtdGh1YW5kaW5oL3NyY1xcYXBwXFxtb2R1bGVzXFxzYWxlc1xcZXN0aW1hdGVzXFxwYWdlc1xcZXN0aW1hdGUtY3JlYXRlXFxlc3RpbWF0ZS1jcmVhdGUuY29tcG9uZW50LnNjc3MiLCJzcmMvYXBwL21vZHVsZXMvc2FsZXMvZXN0aW1hdGVzL3BhZ2VzL2VzdGltYXRlLWNyZWF0ZS9lc3RpbWF0ZS1jcmVhdGUuY29tcG9uZW50LnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFFSSxnQkFBQTtBQ0FKOztBREdBO0VBQ0ksWUFBQTtFQUNBLGdDQUFBO0VBQ0EsaUJBQUE7RUFDQSxhQUFBO0VBQ0EsV0FBQTtBQ0FKOztBREdBO0VBQ0ksc0NBQUE7RUFDQSxrQkFBQTtFQUNBLFVBQUE7QUNBSiIsImZpbGUiOiJzcmMvYXBwL21vZHVsZXMvc2FsZXMvZXN0aW1hdGVzL3BhZ2VzL2VzdGltYXRlLWNyZWF0ZS9lc3RpbWF0ZS1jcmVhdGUuY29tcG9uZW50LnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyIubmctc2VsZWN0Lm5nLXNlbGVjdC1zaW5nbGVcclxuLm5nLXNlbGVjdC1jb250YWluZXIge1xyXG4gICAgbWluLXdpZHRoOiA1MDBweDtcclxufVxyXG5cclxuLmlucCB7XHJcbiAgICBib3JkZXI6IG5vbmU7XHJcbiAgICBib3JkZXItYm90dG9tOiAxcHggc29saWQgI2U4ZWVmMztcclxuICAgIHBhZGRpbmc6IDVweCAxMHB4O1xyXG4gICAgb3V0bGluZTogbm9uZTtcclxuICAgIHdpZHRoOiAxMDAlO1xyXG59XHJcblxyXG5bcGxhY2Vob2xkZXJdOmZvY3VzOjotd2Via2l0LWlucHV0LXBsYWNlaG9sZGVyIHtcclxuICAgIHRyYW5zaXRpb246IHRleHQtaW5kZW50IDAuNHMgMC40cyBlYXNlO1xyXG4gICAgdGV4dC1pbmRlbnQ6IC0xMDAlO1xyXG4gICAgb3BhY2l0eTogMTtcclxufVxyXG4iLCIubmctc2VsZWN0Lm5nLXNlbGVjdC1zaW5nbGUgLm5nLXNlbGVjdC1jb250YWluZXIge1xuICBtaW4td2lkdGg6IDUwMHB4O1xufVxuXG4uaW5wIHtcbiAgYm9yZGVyOiBub25lO1xuICBib3JkZXItYm90dG9tOiAxcHggc29saWQgI2U4ZWVmMztcbiAgcGFkZGluZzogNXB4IDEwcHg7XG4gIG91dGxpbmU6IG5vbmU7XG4gIHdpZHRoOiAxMDAlO1xufVxuXG5bcGxhY2Vob2xkZXJdOmZvY3VzOjotd2Via2l0LWlucHV0LXBsYWNlaG9sZGVyIHtcbiAgdHJhbnNpdGlvbjogdGV4dC1pbmRlbnQgMC40cyAwLjRzIGVhc2U7XG4gIHRleHQtaW5kZW50OiAtMTAwJTtcbiAgb3BhY2l0eTogMTtcbn0iXX0= */");

/***/ }),

/***/ "./src/app/modules/sales/estimates/pages/estimate-create/estimate-create.component.ts":
/*!********************************************************************************************!*\
  !*** ./src/app/modules/sales/estimates/pages/estimate-create/estimate-create.component.ts ***!
  \********************************************************************************************/
/*! exports provided: EstimateCreateComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "EstimateCreateComponent", function() { return EstimateCreateComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var ngx_toastr__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ngx-toastr */ "./node_modules/ngx-toastr/fesm5/ngx-toastr.js");
/* harmony import */ var _ngx_translate_core__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @ngx-translate/core */ "./node_modules/@ngx-translate/core/fesm5/ngx-translate-core.js");
/* harmony import */ var _core_services_estimate_setting_service__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../../../../../core/services/estimate-setting.service */ "./src/app/core/services/estimate-setting.service.ts");
/* harmony import */ var _core_services_estimate_service__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../../../../../core/services/estimate.service */ "./src/app/core/services/estimate.service.ts");
/* harmony import */ var _core_services_item_service__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../../../../../core/services/item.service */ "./src/app/core/services/item.service.ts");
/* harmony import */ var _core_services_client_service__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ../../../../../core/services/client.service */ "./src/app/core/services/client.service.ts");
/* harmony import */ var _core_services_tax_service__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ../../../../../core/services/tax.service */ "./src/app/core/services/tax.service.ts");
/* harmony import */ var _core_services_authentication_service__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ../../../../../core/services/authentication.service */ "./src/app/core/services/authentication.service.ts");













var EstimateCreateComponent = /** @class */ (function () {
    function EstimateCreateComponent(translate, datepipe, router, formBuilder, toastr, estimateService, clientService, itemService, taxService, estimateSettingService, authenticationService) {
        var _this = this;
        this.translate = translate;
        this.datepipe = datepipe;
        this.router = router;
        this.formBuilder = formBuilder;
        this.toastr = toastr;
        this.estimateService = estimateService;
        this.clientService = clientService;
        this.itemService = itemService;
        this.taxService = taxService;
        this.estimateSettingService = estimateSettingService;
        this.authenticationService = authenticationService;
        this.clients = [];
        this.items = [];
        this.itemsArray = [];
        this.taxes = [];
        this.itemTaxes = [];
        this.taxesNameValues = [];
        this.estimates = {
            sub_total: 0,
            total_taxes: 0,
            discount: 0.00,
            adjustment: 0.00,
            total: 0
        };
        this.total_discount = 0.00;
        this.isFormSubmitted = false;
        this.isFormLoaded = false;
        this.datepickerConfig = {
            dateInputFormat: 'YYYY-MM-DD',
            containerClass: 'theme-red'
        };
        this.authenticationService.loginUser.subscribe(function (x) { return _this.loginUser = x; });
    }
    Object.defineProperty(EstimateCreateComponent.prototype, "estimateControl", {
        get: function () {
            return this.createEstimateForm.controls;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(EstimateCreateComponent.prototype, "itemControl", {
        get: function () {
            return this.createEstimateForm.get('item');
        },
        enumerable: true,
        configurable: true
    });
    EstimateCreateComponent.prototype.ngOnInit = function () {
        this.getEstimateSettings();
        this.getClients();
        this.getTaxes();
    };
    EstimateCreateComponent.prototype.loadForm = function () {
        this.createEstimateForm = this.formBuilder.group({
            client_id: [null, _angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].required],
            estimate_date: [new Date(), _angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].required],
            valid_till: [this.addDays(new Date(), this.estimateSettings.due_after), _angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].required],
            reference: [null],
            discount_type: ['percent'],
            discount: [0],
            adjustment: [0],
            status: ['sent', _angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].required],
            selectedItem: [null],
            item: this.formBuilder.group({
                item_name: [null],
                item_description: [null],
                quantity: [null],
                unit_price: [null],
                item_unit: [null],
                taxes: [null],
                amount: [null]
            }),
            items: []
        });
        this.isFormLoaded = true;
    };
    EstimateCreateComponent.prototype.getClients = function () {
        var _this = this;
        this.clientService.getAll()
            .subscribe(function (data) {
            _this.clients = data;
            _this.getItems();
        });
    };
    EstimateCreateComponent.prototype.getItems = function () {
        var _this = this;
        this.itemService.getAll()
            .subscribe(function (data) {
            _this.items = data;
            _this.loadForm();
        });
    };
    EstimateCreateComponent.prototype.getTaxes = function () {
        var _this = this;
        this.taxService.getAll().subscribe(function (data) {
            _this.taxes = data;
            for (var iRow in _this.taxes) {
                if (_this.taxesNameValues[_this.taxes[iRow].id] == undefined) {
                    _this.taxesNameValues[_this.taxes[iRow].id] = [];
                }
                _this.taxesNameValues[_this.taxes[iRow].id] = _this.taxes[iRow];
            }
        });
    };
    EstimateCreateComponent.prototype.getEstimateSettings = function () {
        var _this = this;
        this.estimateSettingService.getAll()
            .subscribe(function (data) {
            _this.estimateSettings = data;
        });
    };
    EstimateCreateComponent.prototype.addDays = function (date, days) {
        return new Date(date.setDate(date.getDate() + days));
    };
    EstimateCreateComponent.prototype.changeItem = function (event) {
        if (event) {
            var taxes = [];
            for (var iRow in event.taxes) {
                taxes.push(event.taxes[iRow].id);
            }
            this.itemControl.patchValue({ item_name: event.name });
            this.itemControl.patchValue({ item_description: event.description });
            this.itemControl.patchValue({ quantity: 1 });
            this.itemControl.patchValue({ unit_price: event.price });
            this.itemControl.patchValue({ item_unit: event.unit });
            this.itemControl.patchValue({ taxes: taxes });
        }
    };
    EstimateCreateComponent.prototype.resetChildForm = function () {
        this.itemControl.patchValue({ item_name: null });
        this.itemControl.patchValue({ item_description: null });
        this.itemControl.patchValue({ quantity: null });
        this.itemControl.patchValue({ unit_price: null });
        this.itemControl.patchValue({ item_unit: null });
        this.itemControl.patchValue({ taxes: [] });
    };
    EstimateCreateComponent.prototype.changeDiscountType = function (event) {
        if (event.id == 'not_discount') {
            this.estimates.discount = 0;
        }
        this.getItemTaxes();
    };
    EstimateCreateComponent.prototype.changeDiscountAdjustment = function (event, type) {
        if (type == 'discount') {
            if (this.createEstimateForm.value.discount_type == 'not_discount') {
                this.toastr.error(this.translate.instant('estimates.create.error_messages.message7'), this.translate.instant('estimates.title'));
                return;
            }
            this.estimates.discount = parseFloat(event.target.value);
        }
        else {
            this.estimates.adjustment = parseFloat(event.target.value);
        }
        if (isNaN(this.estimates.discount)) {
            this.estimates.discount = 0;
        }
        if (isNaN(this.estimates.adjustment)) {
            this.estimates.adjustment = 0;
        }
        this.getItemTaxes();
    };
    EstimateCreateComponent.prototype.addItem = function (event) {
        event.preventDefault();
        var item = this.createEstimateForm.value.item;
        if (item.item_name == null || item.quantity == null || item.unit_price == null) {
            this.toastr.error(this.translate.instant('estimates.create.error_messages.message6'), this.translate.instant('estimates.title'));
            return false;
        }
        this.itemsArray.push(item);
        this.resetChildForm();
        this.estimates.discount = this.createEstimateForm.value.discount;
        this.estimates.adjustment = this.createEstimateForm.value.adjustment;
        this.getItemTaxes();
    };
    EstimateCreateComponent.prototype.saveItemDetail = function (index, name, value) {
        this.itemsArray[index][name] = value;
        this.getItemTaxes();
    };
    EstimateCreateComponent.prototype.deleteItem = function (index) {
        this.itemsArray.splice(index, 1);
        this.getItemTaxes();
    };
    EstimateCreateComponent.prototype.getItemTaxes = function () {
        this.itemTaxes = [];
        this.estimates.sub_total = 0;
        this.estimates.total_taxes = 0;
        this.estimates.total = 0;
        this.total_discount = 0.00;
        var totalItemAmount = 0;
        // --
        // Count item taxes
        for (var iRow in this.itemsArray) {
            totalItemAmount = this.itemsArray[iRow].quantity * this.itemsArray[iRow].unit_price;
            for (var jRow in this.itemsArray[iRow].taxes) {
                var totalTaxes = 0;
                if (this.itemTaxes[this.itemsArray[iRow].taxes[jRow]] == undefined) {
                    this.itemTaxes[this.itemsArray[iRow].taxes[jRow]] = 0;
                }
                totalTaxes = (totalItemAmount * this.taxesNameValues[this.itemsArray[iRow].taxes[jRow]].tax_rate) / 100;
                this.estimates.total_taxes += totalTaxes;
                this.itemTaxes[this.itemsArray[iRow].taxes[jRow]] = this.itemTaxes[this.itemsArray[iRow].taxes[jRow]] + totalTaxes;
            }
            // --
            // Count sub total
            this.estimates.sub_total += totalItemAmount;
        }
        // --
        // Count total
        if (this.createEstimateForm.value.discount_type == 'percent') {
            this.total_discount = ((this.estimates.sub_total + this.estimates.total_taxes) * this.estimates.discount) / 100;
        }
        else {
            this.total_discount = this.estimates.discount;
        }
        this.estimates.total = (this.estimates.sub_total + this.estimates.total_taxes - this.total_discount) + this.estimates.adjustment;
    };
    EstimateCreateComponent.prototype.onSubmit = function () {
        var _this = this;
        this.isFormSubmitted = true;
        if (this.createEstimateForm.invalid) {
            return;
        }
        if (this.itemsArray.length == 0) {
            this.toastr.error(this.translate.instant('estimates.create.error_messages.message5'), this.translate.instant('estimates.title'));
            return;
        }
        var estimateObj = {
            'client_id': this.createEstimateForm.value.client_id,
            'estimate_date': this.datepipe.transform(this.createEstimateForm.value.estimate_date, 'yyyy-MM-dd'),
            'valid_till': this.createEstimateForm.value.valid_till,
            'status': this.createEstimateForm.value.status,
            'reference': this.createEstimateForm.value.reference,
            'adjustment': this.estimates.adjustment,
            'discount_type': this.createEstimateForm.value.discount_type,
            'discount': this.estimates.discount,
            'items': this.itemsArray
        };
        this.estimateService.create(estimateObj)
            .subscribe(function (data) {
            _this.toastr.success(_this.translate.instant('estimates.messages.create'), _this.translate.instant('estimates.title'));
            _this.router.navigate(['estimates']);
        });
    };
    EstimateCreateComponent.ctorParameters = function () { return [
        { type: _ngx_translate_core__WEBPACK_IMPORTED_MODULE_6__["TranslateService"] },
        { type: _angular_common__WEBPACK_IMPORTED_MODULE_2__["DatePipe"] },
        { type: _angular_router__WEBPACK_IMPORTED_MODULE_4__["Router"] },
        { type: _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormBuilder"] },
        { type: ngx_toastr__WEBPACK_IMPORTED_MODULE_5__["ToastrService"] },
        { type: _core_services_estimate_service__WEBPACK_IMPORTED_MODULE_8__["EstimateService"] },
        { type: _core_services_client_service__WEBPACK_IMPORTED_MODULE_10__["ClientService"] },
        { type: _core_services_item_service__WEBPACK_IMPORTED_MODULE_9__["ItemService"] },
        { type: _core_services_tax_service__WEBPACK_IMPORTED_MODULE_11__["TaxService"] },
        { type: _core_services_estimate_setting_service__WEBPACK_IMPORTED_MODULE_7__["EstimateSettingService"] },
        { type: _core_services_authentication_service__WEBPACK_IMPORTED_MODULE_12__["AuthenticationService"] }
    ]; };
    EstimateCreateComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-estimate-create',
            template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./estimate-create.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/modules/sales/estimates/pages/estimate-create/estimate-create.component.html")).default,
            providers: [_angular_common__WEBPACK_IMPORTED_MODULE_2__["DatePipe"]],
            styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./estimate-create.component.scss */ "./src/app/modules/sales/estimates/pages/estimate-create/estimate-create.component.scss")).default]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_ngx_translate_core__WEBPACK_IMPORTED_MODULE_6__["TranslateService"],
            _angular_common__WEBPACK_IMPORTED_MODULE_2__["DatePipe"],
            _angular_router__WEBPACK_IMPORTED_MODULE_4__["Router"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormBuilder"],
            ngx_toastr__WEBPACK_IMPORTED_MODULE_5__["ToastrService"],
            _core_services_estimate_service__WEBPACK_IMPORTED_MODULE_8__["EstimateService"],
            _core_services_client_service__WEBPACK_IMPORTED_MODULE_10__["ClientService"],
            _core_services_item_service__WEBPACK_IMPORTED_MODULE_9__["ItemService"],
            _core_services_tax_service__WEBPACK_IMPORTED_MODULE_11__["TaxService"],
            _core_services_estimate_setting_service__WEBPACK_IMPORTED_MODULE_7__["EstimateSettingService"],
            _core_services_authentication_service__WEBPACK_IMPORTED_MODULE_12__["AuthenticationService"]])
    ], EstimateCreateComponent);
    return EstimateCreateComponent;
}());



/***/ }),

/***/ "./src/app/modules/sales/estimates/pages/estimate-edit/estimate-edit.component.scss":
/*!******************************************************************************************!*\
  !*** ./src/app/modules/sales/estimates/pages/estimate-edit/estimate-edit.component.scss ***!
  \******************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = (".ng-select.ng-select-single .ng-select-container {\n  min-width: 500px;\n}\n\n.inp {\n  border: none;\n  border-bottom: 1px solid #e8eef3;\n  padding: 5px 10px;\n  outline: none;\n  width: 100%;\n}\n\n[placeholder]:focus::-webkit-input-placeholder {\n  transition: text-indent 0.4s 0.4s ease;\n  text-indent: -100%;\n  opacity: 1;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvbW9kdWxlcy9zYWxlcy9lc3RpbWF0ZXMvcGFnZXMvZXN0aW1hdGUtZWRpdC9DOlxcVXNlcnNcXHRodWFuXFxPbmVEcml2ZVxcRGVza3RvcFxcZ2xhdmFsLXRodWFuZGluaC9zcmNcXGFwcFxcbW9kdWxlc1xcc2FsZXNcXGVzdGltYXRlc1xccGFnZXNcXGVzdGltYXRlLWVkaXRcXGVzdGltYXRlLWVkaXQuY29tcG9uZW50LnNjc3MiLCJzcmMvYXBwL21vZHVsZXMvc2FsZXMvZXN0aW1hdGVzL3BhZ2VzL2VzdGltYXRlLWVkaXQvZXN0aW1hdGUtZWRpdC5jb21wb25lbnQuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUVJLGdCQUFBO0FDQUo7O0FER0E7RUFDSSxZQUFBO0VBQ0EsZ0NBQUE7RUFDQSxpQkFBQTtFQUNBLGFBQUE7RUFDQSxXQUFBO0FDQUo7O0FER0E7RUFDSSxzQ0FBQTtFQUNBLGtCQUFBO0VBQ0EsVUFBQTtBQ0FKIiwiZmlsZSI6InNyYy9hcHAvbW9kdWxlcy9zYWxlcy9lc3RpbWF0ZXMvcGFnZXMvZXN0aW1hdGUtZWRpdC9lc3RpbWF0ZS1lZGl0LmNvbXBvbmVudC5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLm5nLXNlbGVjdC5uZy1zZWxlY3Qtc2luZ2xlXHJcbi5uZy1zZWxlY3QtY29udGFpbmVyIHtcclxuICAgIG1pbi13aWR0aDogNTAwcHg7XHJcbn1cclxuXHJcbi5pbnAge1xyXG4gICAgYm9yZGVyOiBub25lO1xyXG4gICAgYm9yZGVyLWJvdHRvbTogMXB4IHNvbGlkICNlOGVlZjM7XHJcbiAgICBwYWRkaW5nOiA1cHggMTBweDtcclxuICAgIG91dGxpbmU6IG5vbmU7XHJcbiAgICB3aWR0aDogMTAwJTtcclxufVxyXG5cclxuW3BsYWNlaG9sZGVyXTpmb2N1czo6LXdlYmtpdC1pbnB1dC1wbGFjZWhvbGRlciB7XHJcbiAgICB0cmFuc2l0aW9uOiB0ZXh0LWluZGVudCAwLjRzIDAuNHMgZWFzZTtcclxuICAgIHRleHQtaW5kZW50OiAtMTAwJTtcclxuICAgIG9wYWNpdHk6IDE7XHJcbn1cclxuIiwiLm5nLXNlbGVjdC5uZy1zZWxlY3Qtc2luZ2xlIC5uZy1zZWxlY3QtY29udGFpbmVyIHtcbiAgbWluLXdpZHRoOiA1MDBweDtcbn1cblxuLmlucCB7XG4gIGJvcmRlcjogbm9uZTtcbiAgYm9yZGVyLWJvdHRvbTogMXB4IHNvbGlkICNlOGVlZjM7XG4gIHBhZGRpbmc6IDVweCAxMHB4O1xuICBvdXRsaW5lOiBub25lO1xuICB3aWR0aDogMTAwJTtcbn1cblxuW3BsYWNlaG9sZGVyXTpmb2N1czo6LXdlYmtpdC1pbnB1dC1wbGFjZWhvbGRlciB7XG4gIHRyYW5zaXRpb246IHRleHQtaW5kZW50IDAuNHMgMC40cyBlYXNlO1xuICB0ZXh0LWluZGVudDogLTEwMCU7XG4gIG9wYWNpdHk6IDE7XG59Il19 */");

/***/ }),

/***/ "./src/app/modules/sales/estimates/pages/estimate-edit/estimate-edit.component.ts":
/*!****************************************************************************************!*\
  !*** ./src/app/modules/sales/estimates/pages/estimate-edit/estimate-edit.component.ts ***!
  \****************************************************************************************/
/*! exports provided: EstimateEditComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "EstimateEditComponent", function() { return EstimateEditComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var ngx_toastr__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ngx-toastr */ "./node_modules/ngx-toastr/fesm5/ngx-toastr.js");
/* harmony import */ var _ngx_translate_core__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @ngx-translate/core */ "./node_modules/@ngx-translate/core/fesm5/ngx-translate-core.js");
/* harmony import */ var _core_services_estimate_service__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../../../../../core/services/estimate.service */ "./src/app/core/services/estimate.service.ts");
/* harmony import */ var _core_services_item_service__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../../../../../core/services/item.service */ "./src/app/core/services/item.service.ts");
/* harmony import */ var _core_services_client_service__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../../../../../core/services/client.service */ "./src/app/core/services/client.service.ts");
/* harmony import */ var _core_services_tax_service__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ../../../../../core/services/tax.service */ "./src/app/core/services/tax.service.ts");
/* harmony import */ var _core_services_authentication_service__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ../../../../../core/services/authentication.service */ "./src/app/core/services/authentication.service.ts");












var EstimateEditComponent = /** @class */ (function () {
    function EstimateEditComponent(translate, datepipe, router, route, formBuilder, toastr, estimateService, clientService, itemService, taxService, authenticationService) {
        var _this = this;
        this.translate = translate;
        this.datepipe = datepipe;
        this.router = router;
        this.route = route;
        this.formBuilder = formBuilder;
        this.toastr = toastr;
        this.estimateService = estimateService;
        this.clientService = clientService;
        this.itemService = itemService;
        this.taxService = taxService;
        this.authenticationService = authenticationService;
        this.clients = [];
        this.items = [];
        this.itemsArray = [];
        this.taxes = [];
        this.itemTaxes = [];
        this.taxesNameValues = [];
        this.total_discount = 0.00;
        this.estimates = {
            sub_total: 0,
            total_taxes: 0,
            discount: 0.00,
            adjustment: 0.00,
            total: 0
        };
        this.isFormSubmitted = false;
        this.isFormLoaded = false;
        this.datepickerConfig = {
            dateInputFormat: 'YYYY-MM-DD',
            containerClass: 'theme-red'
        };
        this.authenticationService.loginUser.subscribe(function (x) { return _this.loginUser = x; });
        this.route.paramMap.subscribe(function (params) {
            _this.getById(params.get('id'));
        });
    }
    Object.defineProperty(EstimateEditComponent.prototype, "estimateControl", {
        get: function () {
            return this.editEstimateForm.controls;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(EstimateEditComponent.prototype, "itemControl", {
        get: function () {
            return this.editEstimateForm.get('item');
        },
        enumerable: true,
        configurable: true
    });
    EstimateEditComponent.prototype.ngOnInit = function () {
    };
    EstimateEditComponent.prototype.loadForm = function () {
        this.editEstimateForm = this.formBuilder.group({
            id: [this.estimate.id],
            estimate_number: [this.estimate.estimate_number],
            client_id: [this.estimate.client_id, _angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].required],
            estimate_date: [new Date(this.estimate.estimate_date), _angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].required],
            valid_till: [new Date(this.estimate.valid_till), _angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].required],
            reference: [this.estimate.reference],
            status: [this.estimate.status, _angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].required],
            discount_type: [this.estimate.discount_type],
            discount: [this.estimate.discount],
            adjustment: [this.estimate.adjustment],
            selectedItem: [null],
            item: this.formBuilder.group({
                item_name: [null],
                item_description: [null],
                quantity: [null],
                unit_price: [null],
                item_unit: [null],
                taxes: [null],
                amount: [0]
            }),
            items: this.estimate.items
        });
        // --
        // Render selected items
        this.setSelectedItems(this.estimate.items);
        this.isFormLoaded = true;
    };
    EstimateEditComponent.prototype.getById = function (estimateId) {
        var _this = this;
        this.estimateService.getById(estimateId).subscribe(function (data) {
            _this.estimate = data;
            _this.getClients();
        });
    };
    EstimateEditComponent.prototype.getClients = function () {
        var _this = this;
        this.clientService.getAll()
            .subscribe(function (data) {
            _this.clients = data;
            _this.getItems();
        });
    };
    EstimateEditComponent.prototype.getItems = function () {
        var _this = this;
        this.itemService.getAll()
            .subscribe(function (data) {
            _this.items = data;
            _this.getTaxes();
        });
    };
    EstimateEditComponent.prototype.getTaxes = function () {
        var _this = this;
        this.taxService.getAll().subscribe(function (data) {
            _this.taxes = data;
            for (var iRow in _this.taxes) {
                if (_this.taxesNameValues[_this.taxes[iRow].id] == undefined) {
                    _this.taxesNameValues[_this.taxes[iRow].id] = [];
                }
                _this.taxesNameValues[_this.taxes[iRow].id] = _this.taxes[iRow];
            }
            _this.loadForm();
        });
    };
    EstimateEditComponent.prototype.addDays = function (date, days) {
        return new Date(date.setDate(date.getDate() + days));
    };
    EstimateEditComponent.prototype.setSelectedItems = function (items) {
        for (var iRow in items) {
            var taxes = [];
            for (var jRow in items[iRow].taxes) {
                taxes.push(items[iRow].taxes[jRow].id);
            }
            items[iRow].taxes = taxes;
            this.itemsArray.push(items[iRow]);
        }
        this.estimates.discount = this.estimate.discount;
        this.estimates.adjustment = this.estimate.adjustment;
        this.getItemTaxes();
    };
    EstimateEditComponent.prototype.changeItem = function (event) {
        var taxes = [];
        for (var iRow in event.taxes) {
            taxes.push(event.taxes[iRow].id);
        }
        this.itemControl.patchValue({ item_name: event.name });
        this.itemControl.patchValue({ item_description: event.description });
        this.itemControl.patchValue({ quantity: 1 });
        this.itemControl.patchValue({ unit_price: event.price });
        this.itemControl.patchValue({ item_unit: event.unit });
        this.itemControl.patchValue({ taxes: taxes });
    };
    EstimateEditComponent.prototype.resetChildForm = function () {
        this.itemControl.patchValue({ item_name: null });
        this.itemControl.patchValue({ item_description: null });
        this.itemControl.patchValue({ quantity: null });
        this.itemControl.patchValue({ unit_price: null });
        this.itemControl.patchValue({ item_unit: null });
        this.itemControl.patchValue({ taxes: [] });
    };
    EstimateEditComponent.prototype.changeDiscountType = function (event) {
        if (event.id == 'not_discount') {
            this.estimates.discount = 0;
        }
        this.getItemTaxes();
    };
    EstimateEditComponent.prototype.changeDiscountAdjustment = function (event, type) {
        if (type == 'discount') {
            if (this.editEstimateForm.value.discount_type == 'not_discount') {
                this.toastr.error(this.translate.instant('estimates.create.error_messages.message7'), this.translate.instant('estimates.title'));
                return;
            }
            this.estimates.discount = parseFloat(event.target.value);
        }
        else {
            this.estimates.adjustment = parseFloat(event.target.value);
        }
        if (isNaN(this.estimates.discount)) {
            this.estimates.discount = 0;
        }
        if (isNaN(this.estimates.adjustment)) {
            this.estimates.adjustment = 0;
        }
        this.getItemTaxes();
    };
    EstimateEditComponent.prototype.addItem = function (event) {
        event.preventDefault();
        var item = this.editEstimateForm.value.item;
        if (item.item_name == null || item.quantity == null || item.unit_price == null) {
            this.toastr.error(this.translate.instant('estimates.create.error_messages.message6'), this.translate.instant('estimates.title'));
            return false;
        }
        this.itemsArray.push(item);
        this.resetChildForm();
        this.estimates.discount = this.editEstimateForm.value.discount;
        this.estimates.adjustment = this.editEstimateForm.value.adjustment;
        this.getItemTaxes();
    };
    EstimateEditComponent.prototype.saveItemDetail = function (index, name, value) {
        this.itemsArray[index][name] = value;
        this.getItemTaxes();
    };
    EstimateEditComponent.prototype.deleteItem = function (index) {
        this.itemsArray.splice(index, 1);
        this.getItemTaxes();
    };
    EstimateEditComponent.prototype.getItemTaxes = function () {
        this.itemTaxes = [];
        this.estimates.sub_total = 0;
        this.estimates.total_taxes = 0;
        this.estimates.total = 0;
        this.total_discount = 0.00;
        var totalItemAmount = 0;
        // --
        // Count item taxes
        for (var iRow in this.itemsArray) {
            totalItemAmount = this.itemsArray[iRow].quantity * this.itemsArray[iRow].unit_price;
            for (var jRow in this.itemsArray[iRow].taxes) {
                var totalTaxes = 0;
                if (this.itemTaxes[this.itemsArray[iRow].taxes[jRow]] == undefined) {
                    this.itemTaxes[this.itemsArray[iRow].taxes[jRow]] = 0;
                }
                totalTaxes = (totalItemAmount * this.taxesNameValues[this.itemsArray[iRow].taxes[jRow]].tax_rate) / 100;
                this.estimates.total_taxes += totalTaxes;
                this.itemTaxes[this.itemsArray[iRow].taxes[jRow]] = this.itemTaxes[this.itemsArray[iRow].taxes[jRow]] + totalTaxes;
            }
            // --
            // Count sub total
            this.estimates.sub_total += totalItemAmount;
        }
        // --
        // Count total
        if (this.editEstimateForm.value.discount_type == 'percent') {
            this.total_discount = ((this.estimates.sub_total + this.estimates.total_taxes) * this.estimates.discount) / 100;
        }
        else {
            this.total_discount = this.estimates.discount;
        }
        this.estimates.total = (this.estimates.sub_total + this.estimates.total_taxes - this.total_discount) + this.estimates.adjustment;
    };
    EstimateEditComponent.prototype.onSubmit = function () {
        var _this = this;
        this.isFormSubmitted = true;
        if (this.editEstimateForm.invalid) {
            return;
        }
        if (this.itemsArray.length == 0) {
            this.toastr.error(this.translate.instant('estimates.create.error_messages.message5'), this.translate.instant('estimates.title'));
            return;
        }
        var estimateObj = {
            'id': this.editEstimateForm.value.id,
            'estimate_date': this.datepipe.transform(this.editEstimateForm.value.estimate_date, 'yyyy-MM-dd'),
            'valid_till': this.editEstimateForm.value.valid_till,
            'client_id': this.editEstimateForm.value.client_id,
            'status': this.editEstimateForm.value.status,
            'reference': this.editEstimateForm.value.reference,
            'items': this.itemsArray,
            'adjustment': this.estimates.adjustment,
            'discount_type': this.editEstimateForm.value.discount_type,
            'discount': this.estimates.discount
        };
        this.estimateService.update(estimateObj)
            .subscribe(function (data) {
            _this.toastr.success(_this.translate.instant('estimates.messages.update'), _this.translate.instant('estimates.title'));
            _this.router.navigate(['estimates']);
        });
    };
    EstimateEditComponent.ctorParameters = function () { return [
        { type: _ngx_translate_core__WEBPACK_IMPORTED_MODULE_6__["TranslateService"] },
        { type: _angular_common__WEBPACK_IMPORTED_MODULE_2__["DatePipe"] },
        { type: _angular_router__WEBPACK_IMPORTED_MODULE_4__["Router"] },
        { type: _angular_router__WEBPACK_IMPORTED_MODULE_4__["ActivatedRoute"] },
        { type: _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormBuilder"] },
        { type: ngx_toastr__WEBPACK_IMPORTED_MODULE_5__["ToastrService"] },
        { type: _core_services_estimate_service__WEBPACK_IMPORTED_MODULE_7__["EstimateService"] },
        { type: _core_services_client_service__WEBPACK_IMPORTED_MODULE_9__["ClientService"] },
        { type: _core_services_item_service__WEBPACK_IMPORTED_MODULE_8__["ItemService"] },
        { type: _core_services_tax_service__WEBPACK_IMPORTED_MODULE_10__["TaxService"] },
        { type: _core_services_authentication_service__WEBPACK_IMPORTED_MODULE_11__["AuthenticationService"] }
    ]; };
    EstimateEditComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-estimate-edit',
            template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./estimate-edit.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/modules/sales/estimates/pages/estimate-edit/estimate-edit.component.html")).default,
            styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./estimate-edit.component.scss */ "./src/app/modules/sales/estimates/pages/estimate-edit/estimate-edit.component.scss")).default]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_ngx_translate_core__WEBPACK_IMPORTED_MODULE_6__["TranslateService"],
            _angular_common__WEBPACK_IMPORTED_MODULE_2__["DatePipe"],
            _angular_router__WEBPACK_IMPORTED_MODULE_4__["Router"],
            _angular_router__WEBPACK_IMPORTED_MODULE_4__["ActivatedRoute"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormBuilder"],
            ngx_toastr__WEBPACK_IMPORTED_MODULE_5__["ToastrService"],
            _core_services_estimate_service__WEBPACK_IMPORTED_MODULE_7__["EstimateService"],
            _core_services_client_service__WEBPACK_IMPORTED_MODULE_9__["ClientService"],
            _core_services_item_service__WEBPACK_IMPORTED_MODULE_8__["ItemService"],
            _core_services_tax_service__WEBPACK_IMPORTED_MODULE_10__["TaxService"],
            _core_services_authentication_service__WEBPACK_IMPORTED_MODULE_11__["AuthenticationService"]])
    ], EstimateEditComponent);
    return EstimateEditComponent;
}());



/***/ }),

/***/ "./src/app/modules/sales/estimates/pages/estimate-lists/estimate-lists.component.scss":
/*!********************************************************************************************!*\
  !*** ./src/app/modules/sales/estimates/pages/estimate-lists/estimate-lists.component.scss ***!
  \********************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = (".hide_empty_message ::ng-deep .odd {\n  display: none;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvbW9kdWxlcy9zYWxlcy9lc3RpbWF0ZXMvcGFnZXMvZXN0aW1hdGUtbGlzdHMvQzpcXFVzZXJzXFx0aHVhblxcT25lRHJpdmVcXERlc2t0b3BcXGdsYXZhbC10aHVhbmRpbmgvc3JjXFxhcHBcXG1vZHVsZXNcXHNhbGVzXFxlc3RpbWF0ZXNcXHBhZ2VzXFxlc3RpbWF0ZS1saXN0c1xcZXN0aW1hdGUtbGlzdHMuY29tcG9uZW50LnNjc3MiLCJzcmMvYXBwL21vZHVsZXMvc2FsZXMvZXN0aW1hdGVzL3BhZ2VzL2VzdGltYXRlLWxpc3RzL2VzdGltYXRlLWxpc3RzLmNvbXBvbmVudC5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0ksYUFBQTtBQ0NKIiwiZmlsZSI6InNyYy9hcHAvbW9kdWxlcy9zYWxlcy9lc3RpbWF0ZXMvcGFnZXMvZXN0aW1hdGUtbGlzdHMvZXN0aW1hdGUtbGlzdHMuY29tcG9uZW50LnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyIuaGlkZV9lbXB0eV9tZXNzYWdlIDo6bmctZGVlcCAub2RkIHtcclxuICAgIGRpc3BsYXk6IG5vbmVcclxufSIsIi5oaWRlX2VtcHR5X21lc3NhZ2UgOjpuZy1kZWVwIC5vZGQge1xuICBkaXNwbGF5OiBub25lO1xufSJdfQ== */");

/***/ }),

/***/ "./src/app/modules/sales/estimates/pages/estimate-lists/estimate-lists.component.ts":
/*!******************************************************************************************!*\
  !*** ./src/app/modules/sales/estimates/pages/estimate-lists/estimate-lists.component.ts ***!
  \******************************************************************************************/
/*! exports provided: EstimateListsComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "EstimateListsComponent", function() { return EstimateListsComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");
/* harmony import */ var _ngx_translate_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @ngx-translate/core */ "./node_modules/@ngx-translate/core/fesm5/ngx-translate-core.js");
/* harmony import */ var ngx_export_as__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ngx-export-as */ "./node_modules/ngx-export-as/fesm2015/ngx-export-as.js");
/* harmony import */ var ngx_toastr__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ngx-toastr */ "./node_modules/ngx-toastr/fesm5/ngx-toastr.js");
/* harmony import */ var _core_services_authentication_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../../../../core/services/authentication.service */ "./src/app/core/services/authentication.service.ts");
/* harmony import */ var _core_services_estimate_service__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../../../../../core/services/estimate.service */ "./src/app/core/services/estimate.service.ts");
/* harmony import */ var _core_helpers_sale_helper__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../../../../../core/helpers/sale.helper */ "./src/app/core/helpers/sale.helper.ts");
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../../../../../../environments/environment */ "./src/environments/environment.ts");
/* harmony import */ var angular_datatables__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! angular-datatables */ "./node_modules/angular-datatables/index.js");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! rxjs */ "./node_modules/rxjs/_esm5/index.js");
/* harmony import */ var sweetalert2__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! sweetalert2 */ "./node_modules/sweetalert2/dist/sweetalert2.all.js");
/* harmony import */ var sweetalert2__WEBPACK_IMPORTED_MODULE_12___default = /*#__PURE__*/__webpack_require__.n(sweetalert2__WEBPACK_IMPORTED_MODULE_12__);
/* harmony import */ var datatables_net__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! datatables.net */ "./node_modules/datatables.net/js/jquery.dataTables.js");
/* harmony import */ var datatables_net__WEBPACK_IMPORTED_MODULE_13___default = /*#__PURE__*/__webpack_require__.n(datatables_net__WEBPACK_IMPORTED_MODULE_13__);
/* harmony import */ var datatables_net_bs4__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! datatables.net-bs4 */ "./node_modules/datatables.net-bs4/js/dataTables.bootstrap4.js");
/* harmony import */ var datatables_net_bs4__WEBPACK_IMPORTED_MODULE_14___default = /*#__PURE__*/__webpack_require__.n(datatables_net_bs4__WEBPACK_IMPORTED_MODULE_14__);















var EstimateListsComponent = /** @class */ (function () {
    function EstimateListsComponent(translate, exportAsService, http, toastr, authenticationService, estimateService) {
        var _this = this;
        this.translate = translate;
        this.exportAsService = exportAsService;
        this.http = http;
        this.toastr = toastr;
        this.authenticationService = authenticationService;
        this.estimateService = estimateService;
        this.dtTrigger = new rxjs__WEBPACK_IMPORTED_MODULE_11__["Subject"]();
        this.dtOptions = {};
        this.estimates = [];
        this.exportAsConfig = {
            type: 'pdf',
            elementIdOrContent: 'estimate_table',
        };
        this.estimateStatusKeyValue = _core_helpers_sale_helper__WEBPACK_IMPORTED_MODULE_8__["estimate_status_value"];
        this.apiUrl = _environments_environment__WEBPACK_IMPORTED_MODULE_9__["environment"].apiUrl;
        this.authenticationService.loginUser.subscribe(function (x) { return _this.loginUser = x; });
    }
    EstimateListsComponent.prototype.ngOnInit = function () {
        this.loadDatatable();
    };
    EstimateListsComponent.prototype.loadDatatable = function () {
        var _this = this;
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
                    'width': '16%',
                    'target': [0]
                },
                {
                    'sortable': true,
                    'width': '16%',
                    'target': [1]
                },
                {
                    'sortable': true,
                    'width': '16%',
                    'target': [2]
                },
                {
                    'sortable': true,
                    'width': '16%',
                    'target': [3]
                },
                {
                    'sortable': true,
                    'width': '16%',
                    'target': [4]
                },
                {
                    'sortable': true,
                    'width': '15%',
                    'target': [5]
                },
                {
                    'sortable': false,
                    'width': '5%',
                    'target': [6]
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
                _this.http.post(_this.apiUrl + '/api/all-estimates', dataTablesParameters, {}).subscribe(function (resp) {
                    _this.estimates = resp.data;
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
    EstimateListsComponent.prototype.exportFiles = function (type) {
        this.exportAsConfig.type = type;
        this.exportAsService.save(this.exportAsConfig, this.translate.instant('estimates.title')).subscribe(function () {
        });
    };
    EstimateListsComponent.prototype.ngAfterViewInit = function () {
        this.dtTrigger.next();
    };
    EstimateListsComponent.prototype.ngOnDestroy = function () {
        this.dtTrigger.unsubscribe();
    };
    EstimateListsComponent.prototype.rerender = function () {
        var _this = this;
        this.dtElement.dtInstance.then(function (dtInstance) {
            dtInstance.destroy();
            setTimeout(function () {
                _this.dtTrigger.next();
                if (_this.estimates.length > 0) {
                    $('.tfoot_dt').addClass('d-none');
                }
                else {
                    $('.tfoot_dt').removeClass('d-none');
                }
            });
        });
    };
    EstimateListsComponent.prototype.changeEstimateStatus = function (id, status) {
        var _this = this;
        this.estimateService.changeStatus({ 'id': id, 'status': status.id }).subscribe(function (data) {
            _this.toastr.success(_this.translate.instant('estimates.messages.status'), _this.translate.instant('estimates.title'));
            _this.rerender();
        });
    };
    EstimateListsComponent.prototype.deleteEstimate = function (id) {
        var _this = this;
        sweetalert2__WEBPACK_IMPORTED_MODULE_12___default.a.fire({
            title: this.translate.instant('common.swal.title'),
            text: this.translate.instant('common.swal.text') + this.translate.instant('estimates.title1'),
            type: 'warning',
            showCancelButton: true,
            confirmButtonText: this.translate.instant('common.swal.confirmButtonText'),
            cancelButtonText: this.translate.instant('common.swal.cancelButtonText')
        }).then(function (result) {
            if (result.value) {
                _this.estimateService.delete(id).subscribe(function (data) {
                    _this.toastr.success(_this.translate.instant('estimates.messages.delete'), _this.translate.instant('estimates.title'));
                    _this.rerender();
                });
            }
        });
    };
    EstimateListsComponent.prototype.getTranslateStatus = function (statusKey) {
        return this.estimateStatusKeyValue[statusKey];
    };
    EstimateListsComponent.ctorParameters = function () { return [
        { type: _ngx_translate_core__WEBPACK_IMPORTED_MODULE_3__["TranslateService"] },
        { type: ngx_export_as__WEBPACK_IMPORTED_MODULE_4__["ExportAsService"] },
        { type: _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClient"] },
        { type: ngx_toastr__WEBPACK_IMPORTED_MODULE_5__["ToastrService"] },
        { type: _core_services_authentication_service__WEBPACK_IMPORTED_MODULE_6__["AuthenticationService"] },
        { type: _core_services_estimate_service__WEBPACK_IMPORTED_MODULE_7__["EstimateService"] }
    ]; };
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewChild"])(angular_datatables__WEBPACK_IMPORTED_MODULE_10__["DataTableDirective"], { static: true }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", angular_datatables__WEBPACK_IMPORTED_MODULE_10__["DataTableDirective"])
    ], EstimateListsComponent.prototype, "dtElement", void 0);
    EstimateListsComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-estimate-lists',
            template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./estimate-lists.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/modules/sales/estimates/pages/estimate-lists/estimate-lists.component.html")).default,
            styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./estimate-lists.component.scss */ "./src/app/modules/sales/estimates/pages/estimate-lists/estimate-lists.component.scss")).default]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_ngx_translate_core__WEBPACK_IMPORTED_MODULE_3__["TranslateService"],
            ngx_export_as__WEBPACK_IMPORTED_MODULE_4__["ExportAsService"],
            _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClient"],
            ngx_toastr__WEBPACK_IMPORTED_MODULE_5__["ToastrService"],
            _core_services_authentication_service__WEBPACK_IMPORTED_MODULE_6__["AuthenticationService"],
            _core_services_estimate_service__WEBPACK_IMPORTED_MODULE_7__["EstimateService"]])
    ], EstimateListsComponent);
    return EstimateListsComponent;
}());



/***/ }),

/***/ "./src/app/modules/sales/estimates/pages/estimate-view/estimate-view.component.scss":
/*!******************************************************************************************!*\
  !*** ./src/app/modules/sales/estimates/pages/estimate-view/estimate-view.component.scss ***!
  \******************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL21vZHVsZXMvc2FsZXMvZXN0aW1hdGVzL3BhZ2VzL2VzdGltYXRlLXZpZXcvZXN0aW1hdGUtdmlldy5jb21wb25lbnQuc2NzcyJ9 */");

/***/ }),

/***/ "./src/app/modules/sales/estimates/pages/estimate-view/estimate-view.component.ts":
/*!****************************************************************************************!*\
  !*** ./src/app/modules/sales/estimates/pages/estimate-view/estimate-view.component.ts ***!
  \****************************************************************************************/
/*! exports provided: EstimateViewComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "EstimateViewComponent", function() { return EstimateViewComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var ngx_toastr__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ngx-toastr */ "./node_modules/ngx-toastr/fesm5/ngx-toastr.js");
/* harmony import */ var ngx_export_as__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ngx-export-as */ "./node_modules/ngx-export-as/fesm2015/ngx-export-as.js");
/* harmony import */ var _ngx_translate_core__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @ngx-translate/core */ "./node_modules/@ngx-translate/core/fesm5/ngx-translate-core.js");
/* harmony import */ var _core_services_authentication_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../../../../core/services/authentication.service */ "./src/app/core/services/authentication.service.ts");
/* harmony import */ var _core_services_estimate_setting_service__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../../../../../core/services/estimate-setting.service */ "./src/app/core/services/estimate-setting.service.ts");
/* harmony import */ var _core_services_estimate_service__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../../../../../core/services/estimate.service */ "./src/app/core/services/estimate.service.ts");
/* harmony import */ var _core_services_helper_service__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../../../../../core/services/helper.service */ "./src/app/core/services/helper.service.ts");
/* harmony import */ var _core_services_tax_service__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ../../../../../core/services/tax.service */ "./src/app/core/services/tax.service.ts");
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ../../../../../../environments/environment */ "./src/environments/environment.ts");












var EstimateViewComponent = /** @class */ (function () {
    function EstimateViewComponent(translate, router, route, toastr, exportAsService, estimateService, estimateSettingService, taxService, helperService, authenticationService) {
        var _this = this;
        this.translate = translate;
        this.router = router;
        this.route = route;
        this.toastr = toastr;
        this.exportAsService = exportAsService;
        this.estimateService = estimateService;
        this.estimateSettingService = estimateSettingService;
        this.taxService = taxService;
        this.helperService = helperService;
        this.authenticationService = authenticationService;
        this.itemTaxes = [];
        this.taxesNameValues = [];
        this.isPageLoad = false;
        this.estimates = {
            sub_total: 0,
            total_taxes: 0,
            total: 0
        };
        this.exportAsConfig = {
            type: 'pdf',
            elementIdOrContent: 'estimate_table',
        };
        this.apiUrl = _environments_environment__WEBPACK_IMPORTED_MODULE_11__["environment"].apiUrl;
        this.authenticationService.loginUser.subscribe(function (x) { return _this.loginUser = x; });
        this.route.paramMap.subscribe(function (params) {
            _this.getById(params.get('id'));
        });
    }
    EstimateViewComponent.prototype.ngOnInit = function () {
        this.getEstimateSettings();
    };
    EstimateViewComponent.prototype.getById = function (estimateId) {
        var _this = this;
        this.estimateService.getById(estimateId).subscribe(function (data) {
            _this.estimate = data;
            _this.getTaxes();
        });
    };
    EstimateViewComponent.prototype.getEstimateSettings = function () {
        var _this = this;
        this.estimateSettingService.getAll()
            .subscribe(function (data) {
            _this.estimateSettings = data;
        });
    };
    EstimateViewComponent.prototype.getTaxes = function () {
        var _this = this;
        this.taxService.getAll().subscribe(function (data) {
            _this.taxes = data;
            for (var iRow in _this.taxes) {
                if (_this.taxesNameValues[_this.taxes[iRow].id] == undefined) {
                    _this.taxesNameValues[_this.taxes[iRow].id] = [];
                }
                _this.taxesNameValues[_this.taxes[iRow].id] = _this.taxes[iRow];
            }
            _this.getItemTaxes();
        });
    };
    EstimateViewComponent.prototype.getItemTaxes = function () {
        this.estimates.sub_total = 0;
        this.estimates.total_taxes = 0;
        this.estimates.total = 0;
        var totalItemAmount = 0;
        var total_discount = 0;
        // --
        // Count item taxes
        for (var iRow in this.estimate.items) {
            totalItemAmount = this.estimate.items[iRow].quantity * this.estimate.items[iRow].unit_price;
            for (var jRow in this.estimate.items[iRow].taxes) {
                var totalTaxes = 0;
                if (this.itemTaxes[this.estimate.items[iRow].taxes[jRow].id] == undefined) {
                    this.itemTaxes[this.estimate.items[iRow].taxes[jRow].id] = 0;
                }
                totalTaxes = (totalItemAmount * this.estimate.items[iRow].taxes[jRow].tax_rate) / 100;
                this.estimates.total_taxes += totalTaxes;
                this.itemTaxes[this.estimate.items[iRow].taxes[jRow].id] = this.itemTaxes[this.estimate.items[iRow].taxes[jRow].id] + totalTaxes;
            }
            // --
            // Count sub total
            this.estimates.sub_total += totalItemAmount;
        }
        // --
        // Count total
        this.estimates.total = (this.estimates.sub_total + this.estimates.total_taxes - this.estimate.total_discount) + this.estimate.adjustment;
        this.isPageLoad = true;
    };
    EstimateViewComponent.prototype.downloadInvoice = function (estimateNumber) {
        this.exportAsService.save(this.exportAsConfig, estimateNumber).subscribe(function () {
        });
    };
    EstimateViewComponent.prototype.changeEstimateStatus = function (id, status) {
        var _this = this;
        this.estimateService.changeStatus({ 'id': id, 'status': status })
            .subscribe(function (data) {
            _this.toastr.success(_this.translate.instant('estimates.messages.status'), _this.translate.instant('estimates.title'));
            _this.estimate.status = status;
        });
    };
    EstimateViewComponent.ctorParameters = function () { return [
        { type: _ngx_translate_core__WEBPACK_IMPORTED_MODULE_5__["TranslateService"] },
        { type: _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"] },
        { type: _angular_router__WEBPACK_IMPORTED_MODULE_2__["ActivatedRoute"] },
        { type: ngx_toastr__WEBPACK_IMPORTED_MODULE_3__["ToastrService"] },
        { type: ngx_export_as__WEBPACK_IMPORTED_MODULE_4__["ExportAsService"] },
        { type: _core_services_estimate_service__WEBPACK_IMPORTED_MODULE_8__["EstimateService"] },
        { type: _core_services_estimate_setting_service__WEBPACK_IMPORTED_MODULE_7__["EstimateSettingService"] },
        { type: _core_services_tax_service__WEBPACK_IMPORTED_MODULE_10__["TaxService"] },
        { type: _core_services_helper_service__WEBPACK_IMPORTED_MODULE_9__["HelperService"] },
        { type: _core_services_authentication_service__WEBPACK_IMPORTED_MODULE_6__["AuthenticationService"] }
    ]; };
    EstimateViewComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-estimate-view',
            template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./estimate-view.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/modules/sales/estimates/pages/estimate-view/estimate-view.component.html")).default,
            styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./estimate-view.component.scss */ "./src/app/modules/sales/estimates/pages/estimate-view/estimate-view.component.scss")).default]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_ngx_translate_core__WEBPACK_IMPORTED_MODULE_5__["TranslateService"],
            _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"],
            _angular_router__WEBPACK_IMPORTED_MODULE_2__["ActivatedRoute"],
            ngx_toastr__WEBPACK_IMPORTED_MODULE_3__["ToastrService"],
            ngx_export_as__WEBPACK_IMPORTED_MODULE_4__["ExportAsService"],
            _core_services_estimate_service__WEBPACK_IMPORTED_MODULE_8__["EstimateService"],
            _core_services_estimate_setting_service__WEBPACK_IMPORTED_MODULE_7__["EstimateSettingService"],
            _core_services_tax_service__WEBPACK_IMPORTED_MODULE_10__["TaxService"],
            _core_services_helper_service__WEBPACK_IMPORTED_MODULE_9__["HelperService"],
            _core_services_authentication_service__WEBPACK_IMPORTED_MODULE_6__["AuthenticationService"]])
    ], EstimateViewComponent);
    return EstimateViewComponent;
}());



/***/ })

}]);
//# sourceMappingURL=modules-sales-estimates-estimates-module.js.map