(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["forms-forms-module"],{

/***/ "./node_modules/raw-loader/index.js!./src/app/forms/components/form-builder.component.html":
/*!****************************************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/forms/components/form-builder.component.html ***!
  \****************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<p>Form Bulder works!!!</p>"

/***/ }),

/***/ "./src/app/forms/components/form-builder.component.ts":
/*!************************************************************!*\
  !*** ./src/app/forms/components/form-builder.component.ts ***!
  \************************************************************/
/*! exports provided: FormBuilderComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FormBuilderComponent", function() { return FormBuilderComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");


let FormBuilderComponent = class FormBuilderComponent {
    constructor() { }
    ngOnInit() {
    }
};
FormBuilderComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-forms-builder',
        template: __webpack_require__(/*! raw-loader!./form-builder.component.html */ "./node_modules/raw-loader/index.js!./src/app/forms/components/form-builder.component.html")
    }),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [])
], FormBuilderComponent);



/***/ }),

/***/ "./src/app/forms/components/index.ts":
/*!*******************************************!*\
  !*** ./src/app/forms/components/index.ts ***!
  \*******************************************/
/*! exports provided: components */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "components", function() { return components; });
/* harmony import */ var _form_builder_component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./form-builder.component */ "./src/app/forms/components/form-builder.component.ts");

const components = [
    _form_builder_component__WEBPACK_IMPORTED_MODULE_0__["FormBuilderComponent"]
];


/***/ }),

/***/ "./src/app/forms/containers/create-update.component.ts":
/*!*************************************************************!*\
  !*** ./src/app/forms/containers/create-update.component.ts ***!
  \*************************************************************/
/*! exports provided: CreateUpdateComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CreateUpdateComponent", function() { return CreateUpdateComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");


let CreateUpdateComponent = class CreateUpdateComponent {
    constructor() { }
    ngOnInit() {
    }
};
CreateUpdateComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-forms-create-update',
        template: ''
    }),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [])
], CreateUpdateComponent);



/***/ }),

/***/ "./src/app/forms/containers/index.ts":
/*!*******************************************!*\
  !*** ./src/app/forms/containers/index.ts ***!
  \*******************************************/
/*! exports provided: containers, CreateUpdateComponent, ListComponent, ViewComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "containers", function() { return containers; });
/* harmony import */ var _create_update_component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./create-update.component */ "./src/app/forms/containers/create-update.component.ts");
/* harmony import */ var _list_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./list.component */ "./src/app/forms/containers/list.component.ts");
/* harmony import */ var _view_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./view.component */ "./src/app/forms/containers/view.component.ts");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "CreateUpdateComponent", function() { return _create_update_component__WEBPACK_IMPORTED_MODULE_0__["CreateUpdateComponent"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "ListComponent", function() { return _list_component__WEBPACK_IMPORTED_MODULE_1__["ListComponent"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "ViewComponent", function() { return _view_component__WEBPACK_IMPORTED_MODULE_2__["ViewComponent"]; });




const containers = [
    _create_update_component__WEBPACK_IMPORTED_MODULE_0__["CreateUpdateComponent"],
    _list_component__WEBPACK_IMPORTED_MODULE_1__["ListComponent"],
    _view_component__WEBPACK_IMPORTED_MODULE_2__["ViewComponent"]
];





/***/ }),

/***/ "./src/app/forms/containers/list.component.ts":
/*!****************************************************!*\
  !*** ./src/app/forms/containers/list.component.ts ***!
  \****************************************************/
/*! exports provided: ListComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ListComponent", function() { return ListComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");


let ListComponent = class ListComponent {
    constructor() { }
    ngOnInit() {
    }
};
ListComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-forms-list',
        template: ''
    }),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [])
], ListComponent);



/***/ }),

/***/ "./src/app/forms/containers/view.component.ts":
/*!****************************************************!*\
  !*** ./src/app/forms/containers/view.component.ts ***!
  \****************************************************/
/*! exports provided: ViewComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ViewComponent", function() { return ViewComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");


let ViewComponent = class ViewComponent {
    constructor() { }
    ngOnInit() {
    }
};
ViewComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-forms-view',
        template: ''
    }),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [])
], ViewComponent);



/***/ }),

/***/ "./src/app/forms/forms-routing.module.ts":
/*!***********************************************!*\
  !*** ./src/app/forms/forms-routing.module.ts ***!
  \***********************************************/
/*! exports provided: FormsRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FormsRoutingModule", function() { return FormsRoutingModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");
/* harmony import */ var _containers__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./containers */ "./src/app/forms/containers/index.ts");




const routes = [
    { path: 'new', component: _containers__WEBPACK_IMPORTED_MODULE_3__["CreateUpdateComponent"], data: { edit: false } },
    { path: '', component: _containers__WEBPACK_IMPORTED_MODULE_3__["ListComponent"] },
    { path: '/:formId/edit', component: _containers__WEBPACK_IMPORTED_MODULE_3__["CreateUpdateComponent"], data: { edit: true } },
    { path: '/:formId', component: _containers__WEBPACK_IMPORTED_MODULE_3__["ViewComponent"] },
];
let FormsRoutingModule = class FormsRoutingModule {
};
FormsRoutingModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]]
    })
], FormsRoutingModule);



/***/ }),

/***/ "./src/app/forms/forms.module.ts":
/*!***************************************!*\
  !*** ./src/app/forms/forms.module.ts ***!
  \***************************************/
/*! exports provided: WorkflowFormsModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "WorkflowFormsModule", function() { return WorkflowFormsModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm2015/common.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm2015/forms.js");
/* harmony import */ var ngx_quill__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ngx-quill */ "./node_modules/ngx-quill/fesm2015/ngx-quill.js");
/* harmony import */ var _forms_routing_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./forms-routing.module */ "./src/app/forms/forms-routing.module.ts");
/* harmony import */ var _containers__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./containers */ "./src/app/forms/containers/index.ts");
/* harmony import */ var _components__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./components */ "./src/app/forms/components/index.ts");
/* harmony import */ var _services__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./services */ "./src/app/forms/services/index.ts");





// TODO import pop over and tooltip modules form ngbootstrap




let WorkflowFormsModule = class WorkflowFormsModule {
};
WorkflowFormsModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        declarations: [
            ..._components__WEBPACK_IMPORTED_MODULE_7__["components"],
            ..._containers__WEBPACK_IMPORTED_MODULE_6__["containers"]
        ],
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_3__["ReactiveFormsModule"],
            ngx_quill__WEBPACK_IMPORTED_MODULE_4__["QuillModule"].forRoot(),
            _forms_routing_module__WEBPACK_IMPORTED_MODULE_5__["FormsRoutingModule"]
        ],
        providers: [
            ..._services__WEBPACK_IMPORTED_MODULE_8__["services"]
        ]
    })
], WorkflowFormsModule);



/***/ }),

/***/ "./src/app/forms/services/index.ts":
/*!*****************************************!*\
  !*** ./src/app/forms/services/index.ts ***!
  \*****************************************/
/*! exports provided: services */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "services", function() { return services; });
const services = [];


/***/ })

}]);
//# sourceMappingURL=forms-forms-module-es2015.js.map