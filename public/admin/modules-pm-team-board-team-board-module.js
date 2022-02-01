(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["modules-pm-team-board-team-board-module"],{

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/modules/pm/team-board/pages/team-board/team-board.component.html":
/*!************************************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/modules/pm/team-board/pages/team-board/team-board.component.html ***!
  \************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<section *ngIf=\"isPageLoaded\" class=\"team-boards\">\r\n    <div *ngIf=\"teams?.length != 0\" class=\"row\">\r\n        <div *ngFor=\"let team of teams; let i = index\" class=\"col-md-6\">\r\n            <div class=\"card\">\r\n                <div class=\"team-boards-head d-flex justify-content-between mb-3\">\r\n                    <h4 class=\"sub-title\">{{i + 1}} - {{team.team_name}}</h4>\r\n                    <div class=\"people-lists ml-4 mr-3\">\r\n\t\t\t\t\t\t<span *ngFor=\"let member of team.members index as i; odd as isOdd; even as isEven\">\r\n\t\t\t\t\t\t\t<a *ngIf=\"team.team_leader == member.id\" [routerLink]=\"['/users/profile', member.id]\" class=\"btn btn-profile-info rounded-circle text-dark popover-item images\" placement=\"top\" tooltip=\"{{'teams.title2' | translate}} - {{member.firstname}} {{member.lastname}}\">\r\n\t\t\t\t\t\t\t\t<img *ngIf=\"member.avatar && team.team_leader == member.id\" alt=\"Profile\" src=\"{{apiUrl}}/uploads/profile/{{member.avatar}}\">\r\n\t\t\t\t\t\t\t\t<img *ngIf=\"!member.avatar && team.team_leader == member.id\" alt=\"Profile\" src=\"../assets/img/profile_small.jpg\">\r\n\t\t\t\t\t\t\t</a>\r\n\t\t\t\t\t\t</span>\r\n                    </div>\r\n                    <div class=\"people-lists\">\r\n                        <a *ngFor=\"let member of team.members index as i; odd as isOdd; even as isEven\" [ngClass]=\"{'btn-profile-info popover-item': isOdd, 'btn-profile-danger': isEven, 'popover-item': i!=0}\" [routerLink]=\"['/users/profile', member.id]\" class=\"btn rounded-circle text-dark\" placement=\"top\" tooltip=\"{{member.firstname}} {{member.lastname}}\">\r\n                            <img *ngIf=\"member.avatar\" alt=\"Profile\" src=\"{{apiUrl}}/uploads/profile/{{member.avatar}}\">\r\n                            <img *ngIf=\"!member.avatar\" alt=\"Profile\" src=\"../assets/img/profile_small.jpg\">\r\n                        </a>\r\n                    </div>\r\n                </div>\r\n                <div class=\"team-details\">\r\n                    <p [innerHTML]=\"team.description\"></p>\r\n                    <div class=\"row\">\r\n                        <div class=\"col-lg-12 col-xl-6\">\r\n                            <div class=\"team-details-box\">\r\n                                <h6>{{'projects.title' | translate}}</h6>\r\n                                <span *ngIf=\"team.project\">{{team.project?.length || '0'}}</span>\r\n                            </div>\r\n                        </div>\r\n                        <div class=\"col-lg-12 col-xl-6\">\r\n                            <div class=\"team-details-box\">\r\n                                <h6>{{'teams.create.fields.members' | translate}}</h6>\r\n                                <span>{{team.members.length}}</span>\r\n                            </div>\r\n                        </div>\r\n                    </div>\r\n                </div>\r\n            </div>\r\n        </div>\r\n    </div>\r\n    <div *ngIf=\"teams?.length == 0\" class=\"row\">\r\n        <div class=\"col-sm-12 text-center\">\r\n            <img src=\"assets/img/norecord-img.png\" width=\"50\">\r\n            <p class=\"mt-1\">{{ 'common.empty_message.teams' | translate }}</p>\r\n        </div>\r\n    </div>\r\n</section>\r\n");

/***/ }),

/***/ "./src/app/modules/pm/team-board/pages/team-board/team-board.component.scss":
/*!**********************************************************************************!*\
  !*** ./src/app/modules/pm/team-board/pages/team-board/team-board.component.scss ***!
  \**********************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL21vZHVsZXMvcG0vdGVhbS1ib2FyZC9wYWdlcy90ZWFtLWJvYXJkL3RlYW0tYm9hcmQuY29tcG9uZW50LnNjc3MifQ== */");

/***/ }),

/***/ "./src/app/modules/pm/team-board/pages/team-board/team-board.component.ts":
/*!********************************************************************************!*\
  !*** ./src/app/modules/pm/team-board/pages/team-board/team-board.component.ts ***!
  \********************************************************************************/
/*! exports provided: TeamBoardComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TeamBoardComponent", function() { return TeamBoardComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");
/* harmony import */ var _core_services_team_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./../../../../../core/services/team.service */ "./src/app/core/services/team.service.ts");
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../../../../../environments/environment */ "./src/environments/environment.ts");





var TeamBoardComponent = /** @class */ (function () {
    function TeamBoardComponent(teamService, http) {
        this.teamService = teamService;
        this.http = http;
        this.isPageLoaded = false;
        this.apiUrl = _environments_environment__WEBPACK_IMPORTED_MODULE_4__["environment"].apiUrl;
    }
    TeamBoardComponent.prototype.ngOnInit = function () {
        this.getTeamForTeamBoard();
    };
    TeamBoardComponent.prototype.getTeamForTeamBoard = function () {
        var _this = this;
        this.teamService.getTeamForTeamBoard()
            .subscribe(function (data) {
            _this.teams = data;
            _this.isPageLoaded = true;
        });
    };
    TeamBoardComponent.ctorParameters = function () { return [
        { type: _core_services_team_service__WEBPACK_IMPORTED_MODULE_3__["TeamService"] },
        { type: _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClient"] }
    ]; };
    TeamBoardComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-team-board',
            template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./team-board.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/modules/pm/team-board/pages/team-board/team-board.component.html")).default,
            styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./team-board.component.scss */ "./src/app/modules/pm/team-board/pages/team-board/team-board.component.scss")).default]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_core_services_team_service__WEBPACK_IMPORTED_MODULE_3__["TeamService"],
            _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClient"]])
    ], TeamBoardComponent);
    return TeamBoardComponent;
}());



/***/ }),

/***/ "./src/app/modules/pm/team-board/team-board-routing.module.ts":
/*!********************************************************************!*\
  !*** ./src/app/modules/pm/team-board/team-board-routing.module.ts ***!
  \********************************************************************/
/*! exports provided: TeamBoardRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TeamBoardRoutingModule", function() { return TeamBoardRoutingModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var ngx_permissions__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ngx-permissions */ "./node_modules/ngx-permissions/ngx-permissions.umd.js");
/* harmony import */ var ngx_permissions__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(ngx_permissions__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _pages_team_board_team_board_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./pages/team-board/team-board.component */ "./src/app/modules/pm/team-board/pages/team-board/team-board.component.ts");





var routes = [
    {
        path: '',
        canActivate: [ngx_permissions__WEBPACK_IMPORTED_MODULE_3__["NgxPermissionsGuard"]],
        component: _pages_team_board_team_board_component__WEBPACK_IMPORTED_MODULE_4__["TeamBoardComponent"],
        data: {
            permissions: {
                only: ['teams_view']
            }
        }
    }
];
var TeamBoardRoutingModule = /** @class */ (function () {
    function TeamBoardRoutingModule() {
    }
    TeamBoardRoutingModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)],
            exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]]
        })
    ], TeamBoardRoutingModule);
    return TeamBoardRoutingModule;
}());



/***/ }),

/***/ "./src/app/modules/pm/team-board/team-board.module.ts":
/*!************************************************************!*\
  !*** ./src/app/modules/pm/team-board/team-board.module.ts ***!
  \************************************************************/
/*! exports provided: TeamBoardModule, HttpLoaderFactory */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TeamBoardModule", function() { return TeamBoardModule; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "HttpLoaderFactory", function() { return HttpLoaderFactory; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");
/* harmony import */ var ngx_bootstrap__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ngx-bootstrap */ "./node_modules/ngx-bootstrap/esm5/ngx-bootstrap.js");
/* harmony import */ var _ngx_translate_core__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @ngx-translate/core */ "./node_modules/@ngx-translate/core/fesm5/ngx-translate-core.js");
/* harmony import */ var _ngx_translate_http_loader__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @ngx-translate/http-loader */ "./node_modules/@ngx-translate/http-loader/fesm5/ngx-translate-http-loader.js");
/* harmony import */ var _shared_shared_module__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../../../shared/shared.module */ "./src/app/shared/shared.module.ts");
/* harmony import */ var _team_board_routing_module__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./team-board-routing.module */ "./src/app/modules/pm/team-board/team-board-routing.module.ts");
/* harmony import */ var _pages_team_board_team_board_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./pages/team-board/team-board.component */ "./src/app/modules/pm/team-board/pages/team-board/team-board.component.ts");










var TeamBoardModule = /** @class */ (function () {
    function TeamBoardModule() {
    }
    TeamBoardModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            declarations: [_pages_team_board_team_board_component__WEBPACK_IMPORTED_MODULE_9__["TeamBoardComponent"]],
            imports: [
                _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
                _team_board_routing_module__WEBPACK_IMPORTED_MODULE_8__["TeamBoardRoutingModule"],
                ngx_bootstrap__WEBPACK_IMPORTED_MODULE_4__["TooltipModule"].forRoot(),
                ngx_bootstrap__WEBPACK_IMPORTED_MODULE_4__["ModalModule"].forRoot(),
                _ngx_translate_core__WEBPACK_IMPORTED_MODULE_5__["TranslateModule"].forChild({
                    loader: {
                        provide: _ngx_translate_core__WEBPACK_IMPORTED_MODULE_5__["TranslateLoader"],
                        useFactory: (HttpLoaderFactory),
                        deps: [_angular_common_http__WEBPACK_IMPORTED_MODULE_3__["HttpClient"]]
                    }
                }),
                _shared_shared_module__WEBPACK_IMPORTED_MODULE_7__["SharedModule"]
            ]
        })
    ], TeamBoardModule);
    return TeamBoardModule;
}());

// Required for AOT compilation
function HttpLoaderFactory(http) {
    return new _ngx_translate_http_loader__WEBPACK_IMPORTED_MODULE_6__["TranslateHttpLoader"](http, './assets/i18n/', '.json');
}


/***/ })

}]);
//# sourceMappingURL=modules-pm-team-board-team-board-module.js.map