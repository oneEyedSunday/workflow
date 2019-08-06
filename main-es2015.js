(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["main"],{

/***/ "./node_modules/raw-loader/index.js!./src/app/app.component.html":
/*!**************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/app.component.html ***!
  \**************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<router-outlet></router-outlet>"

/***/ }),

/***/ "./node_modules/raw-loader/index.js!./src/app/core/auth-layout.component.html":
/*!***************************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/core/auth-layout.component.html ***!
  \***************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"mt-5 mb-5\">\n    <div class=\"container\">\n        <router-outlet></router-outlet>\n    </div>\n</div>"

/***/ }),

/***/ "./node_modules/raw-loader/index.js!./src/app/core/footer/footer.component.html":
/*!*****************************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/core/footer/footer.component.html ***!
  \*****************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./node_modules/raw-loader/index.js!./src/app/core/header/header.component.html":
/*!*****************************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/core/header/header.component.html ***!
  \*****************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<nav class=\"navbar navbar-dark fixed-top bg-dark flex-md-nowrap p-0 shadow\">\n    <a class=\"navbar-brand col-sm-3 col-md-2 mr-0\" routerLink=\"/\">{{ organization.name }}</a>\n    <input class=\"form-control form-control-dark w-100\" type=\"text\" placeholder=\"Search\" aria-label=\"Search\">\n    <ul class=\"navbar-nav px-3\">\n      <li class=\"nav-item text-nowrap\">\n        <a class=\"nav-link\" routerLink=\"/\" (click)=\"logout()\">Sign out</a>\n      </li>\n    </ul>\n</nav>"

/***/ }),

/***/ "./node_modules/raw-loader/index.js!./src/app/core/landing/landing.component.html":
/*!*******************************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/core/landing/landing.component.html ***!
  \*******************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<!-- <div class=\"jumbotron\">\n    <p class=\"lead\">Welcome to Workflow</p>\n</div> -->\n\n<div class=\"cover-container d-flex w-100 h-100 p-3 mx-auto flex-column\">\n    <header class=\"masthead mb-auto\">\n      <div class=\"inner\">\n        <h3 class=\"masthead-brand\">Worflow</h3>\n        <nav class=\"nav nav-masthead justify-content-center\">\n          <a routerLink=\"/dashboard\" class=\"nav-link\" *ngIf=\"auth.user | async; else reauth\">Dashboard</a>\n          <ng-template #reauth>\n            <a class=\"nav-link\" routerLink=\"/account/signin\">Sign in</a>\n            <a class=\"nav-link\" routerLink=\"/account/organization/new\">Organization</a>\n          </ng-template>\n        </nav>\n      </div>\n    </header>\n  \n    <main role=\"main\" class=\"inner cover\">\n      <h1 class=\"cover-heading\">Workflow</h1>\n      <p class=\"lead\">\n          Workflow is a workflow manager.\n      </p>\n      <p class=\"lead\">\n        <a href=\"#\" class=\"btn btn-lg btn-secondary\">Learn more</a>\n      </p>\n    </main>\n  \n    <footer class=\"mastfoot mt-auto\">\n      <div class=\"inner\">\n        <p>Check out the <a href=\"https://github.com/oneEyedSunday/workflow/tree/master/docs\" target=\"_blank\">docs</a>, by <a href=\"https://twitter.com/idiakosesunday\">@oneeyedsunday</a>.</p>\n      </div>\n    </footer>\n</div>"

/***/ }),

/***/ "./node_modules/raw-loader/index.js!./src/app/core/layout/layout.component.html":
/*!*****************************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/core/layout/layout.component.html ***!
  \*****************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<app-header></app-header>\n<!-- Wrap in container here -->\n<div class=\"container-fluid\">\n    <div class=\"row\">\n        <app-sidebar></app-sidebar>\n        <main role=\"main\" class=\"col-md-9 ml-sm-auto col-lg-10 px-4\">\n            <router-outlet></router-outlet>\n        </main>\n    </div>\n</div>\n<app-footer></app-footer>"

/***/ }),

/***/ "./node_modules/raw-loader/index.js!./src/app/core/sidebar/sidebar.component.html":
/*!*******************************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/core/sidebar/sidebar.component.html ***!
  \*******************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<nav class=\"col-md-2 d-none d-md-block bg-light sidebar\">\n    <div class=\"sidebar-sticky\">\n      <ul class=\"nav flex-column\">\n        <li class=\"nav-item\">\n          <a class=\"nav-link\" routerLink=\"/dashboard\" \n          routerLinkActive=\"active\" [routerLinkActiveOptions]=\"{exact: true}\">\n            <span data-feather=\"bar-chart\"></span>\n            Dashboard <span class=\"sr-only\">(current)</span>\n          </a>\n        </li>\n        <li class=\"nav-item\">\n          <a class=\"nav-link\" routerLink=\"/projects\" routerLinkActive=\"active\">\n            <span data-feather=\"home\"></span>\n            Projects\n          </a>\n        </li>\n        <li class=\"nav-item\">\n          <a class=\"nav-link\" routerLink=\"/documents\" routerLinkActive=\"active\">\n            <span data-feather=\"clipboard\"></span>\n            Documents\n          </a>\n        </li>\n        <li class=\"nav-item\">\n          <a class=\"nav-link\" href=\"#\">\n            <span data-feather=\"users\"></span>\n            Tasks\n          </a>\n        </li>\n        <li class=\"nav-item\">\n          <a class=\"nav-link\" href=\"#\">\n            <span data-feather=\"bar-chart-2\"></span>\n            Stages\n          </a>\n        </li>\n        <li class=\"nav-item\">\n          <a class=\"nav-link\" href=\"#\">\n            <span data-feather=\"layers\"></span>\n            Integrations\n          </a>\n        </li>\n      </ul>\n\n      <h6 class=\"sidebar-heading d-flex justify-content-between align-items-center px-3 mt-4 mb-1 text-muted\">\n        <span>Organization Mgt.</span>\n        <a class=\"d-flex align-items-center text-muted\" href=\"#\">\n          <span data-feather=\"plus-circle\"></span>\n        </a>\n      </h6>\n      <ul class=\"nav flex-column mb-2\">\n        <li class=\"nav-item\">\n          <a class=\"nav-link\" routerLink=\"/organizations/groups\">\n            <span data-feather=\"file-text\"></span>\n            Groups\n          </a>\n        </li>\n      </ul>\n    </div>\n</nav>"

/***/ }),

/***/ "./node_modules/raw-loader/index.js!./src/app/shared/status-badge.component.html":
/*!******************************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/shared/status-badge.component.html ***!
  \******************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<span class=\"badge py-1 px-2 text-uppercase text-light rounded-0\" [ngClass]=\"bgClass\">\n    {{ text  }}\n</span> "

/***/ }),

/***/ "./src/$$_lazy_route_resource lazy recursive":
/*!**********************************************************!*\
  !*** ./src/$$_lazy_route_resource lazy namespace object ***!
  \**********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

function webpackEmptyAsyncContext(req) {
	// Here Promise.resolve().then() is used instead of new Promise() to prevent
	// uncaught exception popping up in devtools
	return Promise.resolve().then(function() {
		var e = new Error("Cannot find module '" + req + "'");
		e.code = 'MODULE_NOT_FOUND';
		throw e;
	});
}
webpackEmptyAsyncContext.keys = function() { return []; };
webpackEmptyAsyncContext.resolve = webpackEmptyAsyncContext;
module.exports = webpackEmptyAsyncContext;
webpackEmptyAsyncContext.id = "./src/$$_lazy_route_resource lazy recursive";

/***/ }),

/***/ "./src/app/app-routing.module.ts":
/*!***************************************!*\
  !*** ./src/app/app-routing.module.ts ***!
  \***************************************/
/*! exports provided: AppRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppRoutingModule", function() { return AppRoutingModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");
/* harmony import */ var _core_layout_layout_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./core/layout/layout.component */ "./src/app/core/layout/layout.component.ts");
/* harmony import */ var _core__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./core */ "./src/app/core/index.ts");





const routes = [
    {
        path: '',
        component: _core__WEBPACK_IMPORTED_MODULE_4__["LandingComponent"]
    },
    {
        path: '',
        component: _core__WEBPACK_IMPORTED_MODULE_4__["AuthLayoutComponent"],
        children: [
            {
                path: 'account',
                loadChildren: () => __webpack_require__.e(/*! import() | auth-auth-module */ "auth-auth-module").then(__webpack_require__.bind(null, /*! ./auth/auth.module */ "./src/app/auth/auth.module.ts")).then(m => m.AuthModule)
            },
        ]
    },
    {
        path: '',
        component: _core_layout_layout_component__WEBPACK_IMPORTED_MODULE_3__["LayoutComponent"],
        children: [
            {
                path: 'projects',
                loadChildren: () => Promise.all(/*! import() | projects-projects-module */[__webpack_require__.e("default~documents-documents-module~forms-forms-module~projects-projects-module"), __webpack_require__.e("common"), __webpack_require__.e("projects-projects-module")]).then(__webpack_require__.bind(null, /*! ./projects/projects.module */ "./src/app/projects/projects.module.ts")).then(m => m.ProjectsModule)
            },
            {
                path: 'forms',
                loadChildren: () => Promise.all(/*! import() | forms-forms-module */[__webpack_require__.e("default~documents-documents-module~forms-forms-module~projects-projects-module"), __webpack_require__.e("forms-forms-module")]).then(__webpack_require__.bind(null, /*! ./forms/forms.module */ "./src/app/forms/forms.module.ts")).then(m => m.WorkflowFormsModule)
            },
            {
                path: 'dashboard',
                loadChildren: () => __webpack_require__.e(/*! import() | dashboard-dashboard-module */ "dashboard-dashboard-module").then(__webpack_require__.bind(null, /*! ./dashboard/dashboard.module */ "./src/app/dashboard/dashboard.module.ts")).then(m => m.DashboardModule)
            },
            {
                path: 'documents',
                loadChildren: () => Promise.all(/*! import() | documents-documents-module */[__webpack_require__.e("default~documents-documents-module~forms-forms-module~projects-projects-module"), __webpack_require__.e("common"), __webpack_require__.e("documents-documents-module")]).then(__webpack_require__.bind(null, /*! ./documents/documents.module */ "./src/app/documents/documents.module.ts")).then(m => m.DocumentsModule)
            },
            {
                path: 'organizations',
                loadChildren: () => Promise.all(/*! import() | organization-organization-module */[__webpack_require__.e("common"), __webpack_require__.e("organization-organization-module")]).then(__webpack_require__.bind(null, /*! ./organization/organization.module */ "./src/app/organization/organization.module.ts")).then(m => m.OrganizationModule)
            }
        ]
    },
    { path: '**', redirectTo: '' }
];
let AppRoutingModule = class AppRoutingModule {
};
AppRoutingModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forRoot(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]]
    })
], AppRoutingModule);



/***/ }),

/***/ "./src/app/app.component.scss":
/*!************************************!*\
  !*** ./src/app/app.component.scss ***!
  \************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2FwcC5jb21wb25lbnQuc2NzcyJ9 */"

/***/ }),

/***/ "./src/app/app.component.ts":
/*!**********************************!*\
  !*** ./src/app/app.component.ts ***!
  \**********************************/
/*! exports provided: AppComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppComponent", function() { return AppComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var feather_icons__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! feather-icons */ "./node_modules/feather-icons/dist/feather.js");
/* harmony import */ var feather_icons__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(feather_icons__WEBPACK_IMPORTED_MODULE_2__);



let AppComponent = class AppComponent {
    ngAfterViewInit() {
        setTimeout(() => feather_icons__WEBPACK_IMPORTED_MODULE_2__["replace"](), 100);
    }
};
AppComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-root',
        template: __webpack_require__(/*! raw-loader!./app.component.html */ "./node_modules/raw-loader/index.js!./src/app/app.component.html"),
        styles: [__webpack_require__(/*! ./app.component.scss */ "./src/app/app.component.scss")]
    })
], AppComponent);



/***/ }),

/***/ "./src/app/app.module.ts":
/*!*******************************!*\
  !*** ./src/app/app.module.ts ***!
  \*******************************/
/*! exports provided: AppModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppModule", function() { return AppModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/platform-browser */ "./node_modules/@angular/platform-browser/fesm2015/platform-browser.js");
/* harmony import */ var _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/platform-browser/animations */ "./node_modules/@angular/platform-browser/fesm2015/animations.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm2015/http.js");
/* harmony import */ var _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @ng-bootstrap/ng-bootstrap */ "./node_modules/@ng-bootstrap/ng-bootstrap/fesm2015/ng-bootstrap.js");
/* harmony import */ var _shared_guards__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @shared/guards */ "./src/app/shared/guards/index.ts");
/* harmony import */ var _shared_auth__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @shared/auth */ "./src/app/shared/auth/index.ts");
/* harmony import */ var ngx_toastr__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ngx-toastr */ "./node_modules/ngx-toastr/fesm2015/ngx-toastr.js");
/* harmony import */ var _app_routing_module__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./app-routing.module */ "./src/app/app-routing.module.ts");
/* harmony import */ var _shared_shared_module__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @shared/shared.module */ "./src/app/shared/shared.module.ts");
/* harmony import */ var _shared_http_error_handler_service__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! @shared/http-error-handler.service */ "./src/app/shared/http-error-handler.service.ts");
/* harmony import */ var _app_component__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ./app.component */ "./src/app/app.component.ts");
/* harmony import */ var _core__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ./core */ "./src/app/core/index.ts");














// TODO angular-calendar or full-calendar 4 dashboard
// TODO ng bootstraps toast looks good for projects page at least
// TODO may need to import quill here
let AppModule = class AppModule {
};
AppModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_3__["NgModule"])({
        declarations: [
            _app_component__WEBPACK_IMPORTED_MODULE_12__["AppComponent"],
            ..._core__WEBPACK_IMPORTED_MODULE_13__["layoutCmps"]
        ],
        imports: [
            _angular_platform_browser__WEBPACK_IMPORTED_MODULE_1__["BrowserModule"],
            _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_2__["BrowserAnimationsModule"],
            _angular_common_http__WEBPACK_IMPORTED_MODULE_4__["HttpClientModule"],
            _app_routing_module__WEBPACK_IMPORTED_MODULE_9__["AppRoutingModule"],
            _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_5__["NgbDatepickerModule"],
            _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_5__["NgbTimepickerModule"],
            _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_5__["NgbModalModule"],
            _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_5__["NgbDropdownModule"],
            _shared_shared_module__WEBPACK_IMPORTED_MODULE_10__["SharedModule"],
            ngx_toastr__WEBPACK_IMPORTED_MODULE_8__["ToastrModule"].forRoot({
                timeOut: 5000,
                closeButton: true,
                preventDuplicates: true,
                tapToDismiss: true,
                positionClass: 'toast-top-center'
            })
        ],
        providers: [
            _shared_auth__WEBPACK_IMPORTED_MODULE_7__["AuthService"],
            _shared_http_error_handler_service__WEBPACK_IMPORTED_MODULE_11__["HttpErrorHandler"],
            ..._shared_guards__WEBPACK_IMPORTED_MODULE_6__["guards"],
            { provide: _angular_common_http__WEBPACK_IMPORTED_MODULE_4__["HTTP_INTERCEPTORS"], useClass: _shared_auth__WEBPACK_IMPORTED_MODULE_7__["AuthInterceptor"], multi: true },
        ],
        bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_12__["AppComponent"]]
    })
], AppModule);



/***/ }),

/***/ "./src/app/core/auth-layout.component.ts":
/*!***********************************************!*\
  !*** ./src/app/core/auth-layout.component.ts ***!
  \***********************************************/
/*! exports provided: AuthLayoutComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AuthLayoutComponent", function() { return AuthLayoutComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");


let AuthLayoutComponent = class AuthLayoutComponent {
};
AuthLayoutComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-auth-layout',
        template: __webpack_require__(/*! raw-loader!./auth-layout.component.html */ "./node_modules/raw-loader/index.js!./src/app/core/auth-layout.component.html")
    })
], AuthLayoutComponent);



/***/ }),

/***/ "./src/app/core/footer/footer.component.ts":
/*!*************************************************!*\
  !*** ./src/app/core/footer/footer.component.ts ***!
  \*************************************************/
/*! exports provided: FooterComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FooterComponent", function() { return FooterComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");


let FooterComponent = class FooterComponent {
    constructor() { }
    ngOnInit() {
    }
};
FooterComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-footer',
        template: __webpack_require__(/*! raw-loader!./footer.component.html */ "./node_modules/raw-loader/index.js!./src/app/core/footer/footer.component.html")
    }),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [])
], FooterComponent);



/***/ }),

/***/ "./src/app/core/header/header.component.ts":
/*!*************************************************!*\
  !*** ./src/app/core/header/header.component.ts ***!
  \*************************************************/
/*! exports provided: HeaderComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "HeaderComponent", function() { return HeaderComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _shared_auth__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @shared/auth */ "./src/app/shared/auth/index.ts");



let HeaderComponent = class HeaderComponent {
    constructor() {
        this.organization = {
            name: 'Workflow #1'
        };
    }
    ngOnInit() {
    }
    logout() {
        _shared_auth__WEBPACK_IMPORTED_MODULE_2__["AuthService"].logout();
    }
};
HeaderComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-header',
        template: __webpack_require__(/*! raw-loader!./header.component.html */ "./node_modules/raw-loader/index.js!./src/app/core/header/header.component.html")
    }),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [])
], HeaderComponent);



/***/ }),

/***/ "./src/app/core/index.ts":
/*!*******************************!*\
  !*** ./src/app/core/index.ts ***!
  \*******************************/
/*! exports provided: layoutCmps, LandingComponent, AuthLayoutComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "layoutCmps", function() { return layoutCmps; });
/* harmony import */ var _layout_layout_component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./layout/layout.component */ "./src/app/core/layout/layout.component.ts");
/* harmony import */ var _header_header_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./header/header.component */ "./src/app/core/header/header.component.ts");
/* harmony import */ var _footer_footer_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./footer/footer.component */ "./src/app/core/footer/footer.component.ts");
/* harmony import */ var _sidebar_sidebar_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./sidebar/sidebar.component */ "./src/app/core/sidebar/sidebar.component.ts");
/* harmony import */ var _landing_landing_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./landing/landing.component */ "./src/app/core/landing/landing.component.ts");
/* harmony import */ var _auth_layout_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./auth-layout.component */ "./src/app/core/auth-layout.component.ts");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "LandingComponent", function() { return _landing_landing_component__WEBPACK_IMPORTED_MODULE_4__["LandingComponent"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "AuthLayoutComponent", function() { return _auth_layout_component__WEBPACK_IMPORTED_MODULE_5__["AuthLayoutComponent"]; });







const layoutCmps = [
    _layout_layout_component__WEBPACK_IMPORTED_MODULE_0__["LayoutComponent"],
    _header_header_component__WEBPACK_IMPORTED_MODULE_1__["HeaderComponent"],
    _footer_footer_component__WEBPACK_IMPORTED_MODULE_2__["FooterComponent"],
    _sidebar_sidebar_component__WEBPACK_IMPORTED_MODULE_3__["SidebarComponent"],
    _landing_landing_component__WEBPACK_IMPORTED_MODULE_4__["LandingComponent"],
    _auth_layout_component__WEBPACK_IMPORTED_MODULE_5__["AuthLayoutComponent"]
];




/***/ }),

/***/ "./src/app/core/landing/landing.component.scss":
/*!*****************************************************!*\
  !*** ./src/app/core/landing/landing.component.scss ***!
  \*****************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ":host {\n  display: flex;\n  height: 100%;\n  width: 100vw;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy9pc3BvYS9Xb3Jrc3BhY2Uvd29ya2Zsb3cvZnJvbnRlbmQvc3JjL2FwcC9jb3JlL2xhbmRpbmcvbGFuZGluZy5jb21wb25lbnQuc2NzcyIsInNyYy9hcHAvY29yZS9sYW5kaW5nL2xhbmRpbmcuY29tcG9uZW50LnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDSSxhQUFBO0VBQ0EsWUFBQTtFQUNBLFlBQUE7QUNDSiIsImZpbGUiOiJzcmMvYXBwL2NvcmUvbGFuZGluZy9sYW5kaW5nLmNvbXBvbmVudC5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiOmhvc3Qge1xuICAgIGRpc3BsYXk6IGZsZXg7XG4gICAgaGVpZ2h0OiAxMDAlO1xuICAgIHdpZHRoOiAxMDB2dztcbn0iLCI6aG9zdCB7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGhlaWdodDogMTAwJTtcbiAgd2lkdGg6IDEwMHZ3O1xufSJdfQ== */"

/***/ }),

/***/ "./src/app/core/landing/landing.component.ts":
/*!***************************************************!*\
  !*** ./src/app/core/landing/landing.component.ts ***!
  \***************************************************/
/*! exports provided: LandingComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LandingComponent", function() { return LandingComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _shared_auth__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @shared/auth */ "./src/app/shared/auth/index.ts");



let LandingComponent = class LandingComponent {
    constructor(auth) {
        this.auth = auth;
    }
    ngOnInit() {
        // inject css into head
        const head = document.head || document.getElementsByTagName('head')[0];
        head.appendChild(this.createLinkTag());
    }
    createLinkTag() {
        const styleTag = document.createElement('style');
        const linkTag = document.createElement('link');
        linkTag.rel = 'stylesheet';
        linkTag.href = 'assets/styles/landing-cover.css';
        linkTag.id = 'landing__page--cover';
        return linkTag;
    }
    ngOnDestroy() {
        // remove stylesheet
        const head = document.head || document.getElementsByTagName('head')[0];
        head.removeChild(head.querySelector('link#landing__page--cover'));
    }
};
LandingComponent.ctorParameters = () => [
    { type: _shared_auth__WEBPACK_IMPORTED_MODULE_2__["AuthService"] }
];
LandingComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-landing',
        template: __webpack_require__(/*! raw-loader!./landing.component.html */ "./node_modules/raw-loader/index.js!./src/app/core/landing/landing.component.html"),
        styles: [__webpack_require__(/*! ./landing.component.scss */ "./src/app/core/landing/landing.component.scss")]
    }),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_shared_auth__WEBPACK_IMPORTED_MODULE_2__["AuthService"]])
], LandingComponent);



/***/ }),

/***/ "./src/app/core/layout/layout.component.ts":
/*!*************************************************!*\
  !*** ./src/app/core/layout/layout.component.ts ***!
  \*************************************************/
/*! exports provided: LayoutComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LayoutComponent", function() { return LayoutComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");


let LayoutComponent = class LayoutComponent {
    constructor() { }
    ngOnInit() {
    }
};
LayoutComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-layout',
        template: __webpack_require__(/*! raw-loader!./layout.component.html */ "./node_modules/raw-loader/index.js!./src/app/core/layout/layout.component.html")
    }),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [])
], LayoutComponent);



/***/ }),

/***/ "./src/app/core/sidebar/sidebar.component.ts":
/*!***************************************************!*\
  !*** ./src/app/core/sidebar/sidebar.component.ts ***!
  \***************************************************/
/*! exports provided: SidebarComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SidebarComponent", function() { return SidebarComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");


// TODO (oneyedsuday) restrict change detectin for comps like these
let SidebarComponent = class SidebarComponent {
    constructor() { }
    ngOnInit() {
    }
};
SidebarComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-sidebar',
        template: __webpack_require__(/*! raw-loader!./sidebar.component.html */ "./node_modules/raw-loader/index.js!./src/app/core/sidebar/sidebar.component.html")
    }),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [])
], SidebarComponent);



/***/ }),

/***/ "./src/app/shared/auth/auth-interceptor.ts":
/*!*************************************************!*\
  !*** ./src/app/shared/auth/auth-interceptor.ts ***!
  \*************************************************/
/*! exports provided: AuthInterceptor */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AuthInterceptor", function() { return AuthInterceptor; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _auth_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./auth.service */ "./src/app/shared/auth/auth.service.ts");



let AuthInterceptor = class AuthInterceptor {
    constructor() {
    }
    intercept(req, next) {
        const authToken = _auth_service__WEBPACK_IMPORTED_MODULE_2__["AuthService"].getToken();
        if (authToken) {
            req = req.clone({ headers: req.headers.set('Authorization', `Token ${authToken}`) });
        }
        return next.handle(req);
    }
};
AuthInterceptor = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])(),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [])
], AuthInterceptor);



/***/ }),

/***/ "./src/app/shared/auth/auth.service.ts":
/*!*********************************************!*\
  !*** ./src/app/shared/auth/auth.service.ts ***!
  \*********************************************/
/*! exports provided: AuthService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AuthService", function() { return AuthService; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! rxjs */ "./node_modules/rxjs/_esm2015/index.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm2015/http.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! rxjs/operators */ "./node_modules/rxjs/_esm2015/operators/index.js");
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../../environments/environment */ "./src/environments/environment.ts");

var AuthService_1;





const USER_DATA_TOKEN = 'workflow_user_data';
const TOKEN = 'workflow_token';
let AuthService = AuthService_1 = class AuthService {
    constructor(http) {
        this.http = http;
        this._user = new rxjs__WEBPACK_IMPORTED_MODULE_1__["BehaviorSubject"](null);
    }
    get user() {
        this._user.next(AuthService_1.getUserFromLocalStorage());
        return this._user.asObservable();
    }
    get token() {
        return localStorage.getItem(TOKEN);
    }
    set token(token) {
        localStorage.setItem(TOKEN, token);
    }
    get currentUserValue() {
        // tslint:disable-next-line: no-unused-expression
        this.user;
        return this._user.getValue();
    }
    static getToken() {
        return localStorage.getItem(TOKEN);
    }
    static logout() {
        localStorage.removeItem(TOKEN);
        localStorage.removeItem(USER_DATA_TOKEN);
    }
    static getUserFromLocalStorage() {
        return JSON.parse(localStorage.getItem(USER_DATA_TOKEN));
    }
    login(creds) {
        return this.http.post(`${_environments_environment__WEBPACK_IMPORTED_MODULE_5__["AppConfig"].API_URL}/account/login/`, creds)
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["tap"])((response) => {
            this._user.next(response.User);
            localStorage.setItem(USER_DATA_TOKEN, JSON.stringify(response.User));
            this.token = response.Token;
        }));
    }
    // TODO (oneeyedsunday) support for file uploads
    register(creds) {
        return this.http.post(`${_environments_environment__WEBPACK_IMPORTED_MODULE_5__["AppConfig"].API_URL}/account/signup/`, creds)
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["tap"])((res) => {
            this._user.next(res.User);
            localStorage.setItem(USER_DATA_TOKEN, JSON.stringify(res.User));
            this.token = res.Token;
        }));
    }
};
AuthService.ctorParameters = () => [
    { type: _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClient"] }
];
AuthService = AuthService_1 = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_3__["Injectable"])(),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClient"]])
], AuthService);



/***/ }),

/***/ "./src/app/shared/auth/index.ts":
/*!**************************************!*\
  !*** ./src/app/shared/auth/index.ts ***!
  \**************************************/
/*! exports provided: AuthInterceptor, AuthService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _auth_interceptor__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./auth-interceptor */ "./src/app/shared/auth/auth-interceptor.ts");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "AuthInterceptor", function() { return _auth_interceptor__WEBPACK_IMPORTED_MODULE_0__["AuthInterceptor"]; });

/* harmony import */ var _auth_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./auth.service */ "./src/app/shared/auth/auth.service.ts");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "AuthService", function() { return _auth_service__WEBPACK_IMPORTED_MODULE_1__["AuthService"]; });





/***/ }),

/***/ "./src/app/shared/guards/auth.guard.ts":
/*!*********************************************!*\
  !*** ./src/app/shared/guards/auth.guard.ts ***!
  \*********************************************/
/*! exports provided: AuthGuard */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AuthGuard", function() { return AuthGuard; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");
/* harmony import */ var _auth_auth_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../auth/auth.service */ "./src/app/shared/auth/auth.service.ts");




let AuthGuard = class AuthGuard {
    // TODO use ngbootstrap v5's toast for notif
    constructor(router, auth) {
        this.router = router;
        this.auth = auth;
    }
    canActivate(route, state) {
        if (this.hasAuth()) {
            return true;
        }
        this.router.navigate(['/account/signin'], { queryParams: { returnUrl: state.url } });
    }
    hasAuth() {
        return !!this.auth.currentUserValue;
    }
};
AuthGuard.ctorParameters = () => [
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"] },
    { type: _auth_auth_service__WEBPACK_IMPORTED_MODULE_3__["AuthService"] }
];
AuthGuard = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({ providedIn: 'root' }),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"],
        _auth_auth_service__WEBPACK_IMPORTED_MODULE_3__["AuthService"]])
], AuthGuard);



/***/ }),

/***/ "./src/app/shared/guards/index.ts":
/*!****************************************!*\
  !*** ./src/app/shared/guards/index.ts ***!
  \****************************************/
/*! exports provided: guards, AuthGuard */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "guards", function() { return guards; });
/* harmony import */ var _auth_guard__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./auth.guard */ "./src/app/shared/guards/auth.guard.ts");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "AuthGuard", function() { return _auth_guard__WEBPACK_IMPORTED_MODULE_0__["AuthGuard"]; });


const guards = [
    _auth_guard__WEBPACK_IMPORTED_MODULE_0__["AuthGuard"]
];



/***/ }),

/***/ "./src/app/shared/http-error-handler.service.ts":
/*!******************************************************!*\
  !*** ./src/app/shared/http-error-handler.service.ts ***!
  \******************************************************/
/*! exports provided: HttpErrorHandler, LogError */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "HttpErrorHandler", function() { return HttpErrorHandler; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LogError", function() { return LogError; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! rxjs */ "./node_modules/rxjs/_esm2015/index.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var ngx_toastr__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ngx-toastr */ "./node_modules/ngx-toastr/fesm2015/ngx-toastr.js");




/** Handles HttpClient errors */
let HttpErrorHandler = class HttpErrorHandler {
    constructor(toastr) {
        this.toastr = toastr;
        /** Create curried handleError function that already knows the service name */
        this.createHandleError = (serviceName = '') => (operation = 'operation', result = null) => this.handleError(serviceName, operation, result);
    }
    /**
     * Returns a function that handles Http operation failures.
     * This error handler lets the app continue to run as if no error occurred.
     * @param serviceName = name of the data service that attempted the operation
     * @param operation - name of the operation that failed
     * @param result - optional value to return as the observable result
     */
    handleError(serviceName = '', operation = 'operation', result = {}) {
        return (e) => {
            let message;
            // Error throw logic based on API structure
            switch (true) {
                // TODO (oneeyedsunday) - hanlde 401, 403 and 404
                case e.error instanceof ProgressEvent: {
                    message = 'Server Unavailable';
                    break;
                }
                case e.status === 422 && e.error.body.isJoi: {
                    message = e.error.body.details[0].message;
                    break;
                }
                case (typeof e.error.body === 'string'): {
                    message = e.error.body;
                    break;
                }
                case (typeof e.error.message === 'string'): {
                    message = e.error.message;
                    break;
                }
                default: {
                    message = e.message;
                }
            }
            // Throw an Error Toast
            this.toastr.error(message, operation);
            // Let the app keep running by returning a safe result when its okay
            return result === null ? Object(rxjs__WEBPACK_IMPORTED_MODULE_1__["throwError"])(e) : Object(rxjs__WEBPACK_IMPORTED_MODULE_1__["of"])(result);
        };
    }
};
HttpErrorHandler.ctorParameters = () => [
    { type: ngx_toastr__WEBPACK_IMPORTED_MODULE_3__["ToastrService"] }
];
HttpErrorHandler = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["Injectable"])(),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [ngx_toastr__WEBPACK_IMPORTED_MODULE_3__["ToastrService"]])
], HttpErrorHandler);

const LogError = error => console.error(error);


/***/ }),

/***/ "./src/app/shared/loader.component.ts":
/*!********************************************!*\
  !*** ./src/app/shared/loader.component.ts ***!
  \********************************************/
/*! exports provided: LoaderComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LoaderComponent", function() { return LoaderComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");


let LoaderComponent = class LoaderComponent {
    constructor() {
        this.size = 1;
    }
    ngOnInit() {
        this.style = `font-size: ${this.size}em`;
    }
};
tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])(),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", Object)
], LoaderComponent.prototype, "size", void 0);
LoaderComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-loader',
        template: `
    <div>
      <span [attr.style]="style | sanitizeStyle">
        <i class="fa fa-spin fa-spinner"></i>
      </span>
    </div>
  `
    })
], LoaderComponent);



/***/ }),

/***/ "./src/app/shared/pipes/index.ts":
/*!***************************************!*\
  !*** ./src/app/shared/pipes/index.ts ***!
  \***************************************/
/*! exports provided: pipes, SanitizeStylePipe */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "pipes", function() { return pipes; });
/* harmony import */ var _sanitize_styles_pipe__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./sanitize-styles.pipe */ "./src/app/shared/pipes/sanitize-styles.pipe.ts");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "SanitizeStylePipe", function() { return _sanitize_styles_pipe__WEBPACK_IMPORTED_MODULE_0__["SanitizeStylePipe"]; });


const pipes = [
    _sanitize_styles_pipe__WEBPACK_IMPORTED_MODULE_0__["SanitizeStylePipe"]
];



/***/ }),

/***/ "./src/app/shared/pipes/sanitize-styles.pipe.ts":
/*!******************************************************!*\
  !*** ./src/app/shared/pipes/sanitize-styles.pipe.ts ***!
  \******************************************************/
/*! exports provided: SanitizeStylePipe */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SanitizeStylePipe", function() { return SanitizeStylePipe; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/platform-browser */ "./node_modules/@angular/platform-browser/fesm2015/platform-browser.js");



let SanitizeStylePipe = class SanitizeStylePipe {
    constructor(_sanitizer) {
        this._sanitizer = _sanitizer;
    }
    transform(value) {
        return this._sanitizer.bypassSecurityTrustStyle(value);
    }
};
SanitizeStylePipe.ctorParameters = () => [
    { type: _angular_platform_browser__WEBPACK_IMPORTED_MODULE_2__["DomSanitizer"] }
];
SanitizeStylePipe = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Pipe"])({
        name: 'sanitizeStyle'
    }),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_platform_browser__WEBPACK_IMPORTED_MODULE_2__["DomSanitizer"]])
], SanitizeStylePipe);



/***/ }),

/***/ "./src/app/shared/shared.module.ts":
/*!*****************************************!*\
  !*** ./src/app/shared/shared.module.ts ***!
  \*****************************************/
/*! exports provided: SharedModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SharedModule", function() { return SharedModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm2015/common.js");
/* harmony import */ var _pipes__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./pipes */ "./src/app/shared/pipes/index.ts");
/* harmony import */ var _loader_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./loader.component */ "./src/app/shared/loader.component.ts");
/* harmony import */ var _status_badges_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./status-badges.component */ "./src/app/shared/status-badges.component.ts");






let SharedModule = class SharedModule {
};
SharedModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        declarations: [
            _loader_component__WEBPACK_IMPORTED_MODULE_4__["LoaderComponent"],
            _status_badges_component__WEBPACK_IMPORTED_MODULE_5__["StatusBadgeComponent"],
            ..._pipes__WEBPACK_IMPORTED_MODULE_3__["pipes"]
        ],
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"]
        ],
        providers: [],
        exports: [
            // TODO install bootstrap fontawesome
            _loader_component__WEBPACK_IMPORTED_MODULE_4__["LoaderComponent"],
            _status_badges_component__WEBPACK_IMPORTED_MODULE_5__["StatusBadgeComponent"],
            ..._pipes__WEBPACK_IMPORTED_MODULE_3__["pipes"]
        ]
    })
], SharedModule);



/***/ }),

/***/ "./src/app/shared/status-badge.component.scss":
/*!****************************************************!*\
  !*** ./src/app/shared/status-badge.component.scss ***!
  \****************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".status__inactive {\n  background-color: #f86c6b !important;\n}\n.status__pending {\n  background-color: #e8ac3f;\n}\n.status__declined {\n  background-color: #f86c6b;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy9pc3BvYS9Xb3Jrc3BhY2Uvd29ya2Zsb3cvZnJvbnRlbmQvc3JjL2FwcC9zaGFyZWQvc3RhdHVzLWJhZGdlLmNvbXBvbmVudC5zY3NzIiwic3JjL2FwcC9zaGFyZWQvc3RhdHVzLWJhZGdlLmNvbXBvbmVudC5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUVJO0VBQ0ksb0NBQUE7QUNEUjtBREdJO0VBQ0UseUJBQUE7QUNETjtBRElJO0VBQ0UseUJBQUE7QUNGTiIsImZpbGUiOiJzcmMvYXBwL3NoYXJlZC9zdGF0dXMtYmFkZ2UuY29tcG9uZW50LnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyIuc3RhdHVzIHtcblxuICAgICZfX2luYWN0aXZlIHtcbiAgICAgICAgYmFja2dyb3VuZC1jb2xvcjogI2Y4NmM2YiAhaW1wb3J0YW50O1xuICAgIH1cbiAgICAmX19wZW5kaW5nIHtcbiAgICAgIGJhY2tncm91bmQtY29sb3I6ICNlOGFjM2Y7XG4gICAgfVxuXG4gICAgJl9fZGVjbGluZWQge1xuICAgICAgYmFja2dyb3VuZC1jb2xvcjogI2Y4NmM2YjtcbiAgICB9XG59IiwiLnN0YXR1c19faW5hY3RpdmUge1xuICBiYWNrZ3JvdW5kLWNvbG9yOiAjZjg2YzZiICFpbXBvcnRhbnQ7XG59XG4uc3RhdHVzX19wZW5kaW5nIHtcbiAgYmFja2dyb3VuZC1jb2xvcjogI2U4YWMzZjtcbn1cbi5zdGF0dXNfX2RlY2xpbmVkIHtcbiAgYmFja2dyb3VuZC1jb2xvcjogI2Y4NmM2Yjtcbn0iXX0= */"

/***/ }),

/***/ "./src/app/shared/status-badges.component.ts":
/*!***************************************************!*\
  !*** ./src/app/shared/status-badges.component.ts ***!
  \***************************************************/
/*! exports provided: StatusBadgeComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "StatusBadgeComponent", function() { return StatusBadgeComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");


let StatusBadgeComponent = class StatusBadgeComponent {
    ngOnInit() {
        this.bgClass = Math.random() > 0.45 ? 'bg-primary' : 'bg-success';
    }
};
tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])(),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", String)
], StatusBadgeComponent.prototype, "status", void 0);
tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])(),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", String)
], StatusBadgeComponent.prototype, "text", void 0);
tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])(),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", Object)
], StatusBadgeComponent.prototype, "type", void 0);
StatusBadgeComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-status-badge',
        template: __webpack_require__(/*! raw-loader!./status-badge.component.html */ "./node_modules/raw-loader/index.js!./src/app/shared/status-badge.component.html"),
        styles: [__webpack_require__(/*! ./status-badge.component.scss */ "./src/app/shared/status-badge.component.scss")]
    })
], StatusBadgeComponent);



/***/ }),

/***/ "./src/environments/environment.ts":
/*!*****************************************!*\
  !*** ./src/environments/environment.ts ***!
  \*****************************************/
/*! exports provided: environment, AppConfig */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "environment", function() { return environment; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppConfig", function() { return AppConfig; });
// This file can be replaced during build by using the `fileReplacements` array.
// `ng build --prod` replaces `environment.ts` with `environment.prod.ts`.
// The list of file replacements can be found in `angular.json`.
const environment = {
    production: false
};
const AppConfig = {
    API_URL: 'https://workflow801.herokuapp.com',
    CLOUDINARY: {
        cloud_name: 'dj55g6uya',
        upload_preset: 'flhrdgqx'
    }
};
/*
 * For easier debugging in development mode, you can import the following file
 * to ignore zone related error stack frames such as `zone.run`, `zoneDelegate.invokeTask`.
 *
 * This import should be commented out in production mode because it will have a negative impact
 * on performance if an error is thrown.
 */
// import 'zone.js/dist/zone-error';  // Included with Angular CLI.


/***/ }),

/***/ "./src/main.ts":
/*!*********************!*\
  !*** ./src/main.ts ***!
  \*********************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/platform-browser-dynamic */ "./node_modules/@angular/platform-browser-dynamic/fesm2015/platform-browser-dynamic.js");
/* harmony import */ var _app_app_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./app/app.module */ "./src/app/app.module.ts");
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./environments/environment */ "./src/environments/environment.ts");




if (_environments_environment__WEBPACK_IMPORTED_MODULE_3__["environment"].production) {
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["enableProdMode"])();
}
Object(_angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_1__["platformBrowserDynamic"])().bootstrapModule(_app_app_module__WEBPACK_IMPORTED_MODULE_2__["AppModule"])
    .catch(err => console.error(err));


/***/ }),

/***/ 0:
/*!***************************!*\
  !*** multi ./src/main.ts ***!
  \***************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! /Users/ispoa/Workspace/workflow/frontend/src/main.ts */"./src/main.ts");


/***/ })

},[[0,"runtime","vendor"]]]);
//# sourceMappingURL=main-es2015.js.map