(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["documents-documents-module"],{

/***/ "./src/app/documents/containers/create-update.component.ts":
/*!*****************************************************************!*\
  !*** ./src/app/documents/containers/create-update.component.ts ***!
  \*****************************************************************/
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
        selector: 'app-documents-create-update',
        template: ''
    }),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [])
], CreateUpdateComponent);



/***/ }),

/***/ "./src/app/documents/containers/index.ts":
/*!***********************************************!*\
  !*** ./src/app/documents/containers/index.ts ***!
  \***********************************************/
/*! exports provided: containers, CreateUpdateComponent, ListComponent, ViewComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "containers", function() { return containers; });
/* harmony import */ var _create_update_component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./create-update.component */ "./src/app/documents/containers/create-update.component.ts");
/* harmony import */ var _list_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./list.component */ "./src/app/documents/containers/list.component.ts");
/* harmony import */ var _view_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./view.component */ "./src/app/documents/containers/view.component.ts");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "CreateUpdateComponent", function() { return _create_update_component__WEBPACK_IMPORTED_MODULE_0__["CreateUpdateComponent"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "ListComponent", function() { return _list_component__WEBPACK_IMPORTED_MODULE_1__["ListComponent"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "ViewComponent", function() { return _view_component__WEBPACK_IMPORTED_MODULE_2__["ViewComponent"]; });




const containers = [
    _create_update_component__WEBPACK_IMPORTED_MODULE_0__["CreateUpdateComponent"],
    _list_component__WEBPACK_IMPORTED_MODULE_1__["ListComponent"],
    _view_component__WEBPACK_IMPORTED_MODULE_2__["ViewComponent"]
];





/***/ }),

/***/ "./src/app/documents/containers/list.component.ts":
/*!********************************************************!*\
  !*** ./src/app/documents/containers/list.component.ts ***!
  \********************************************************/
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
        selector: 'app-documents-list',
        template: ''
    }),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [])
], ListComponent);



/***/ }),

/***/ "./src/app/documents/containers/view.component.ts":
/*!********************************************************!*\
  !*** ./src/app/documents/containers/view.component.ts ***!
  \********************************************************/
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
        selector: 'app-documents-view',
        template: ''
    }),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [])
], ViewComponent);



/***/ }),

/***/ "./src/app/documents/documents-routing.module.ts":
/*!*******************************************************!*\
  !*** ./src/app/documents/documents-routing.module.ts ***!
  \*******************************************************/
/*! exports provided: DocumentsRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DocumentsRoutingModule", function() { return DocumentsRoutingModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");
/* harmony import */ var _containers__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./containers */ "./src/app/documents/containers/index.ts");




const routes = [
    { path: 'new', component: _containers__WEBPACK_IMPORTED_MODULE_3__["CreateUpdateComponent"], data: { edit: false } },
    { path: '', component: _containers__WEBPACK_IMPORTED_MODULE_3__["ListComponent"] },
    { path: '/:documentId/edit', component: _containers__WEBPACK_IMPORTED_MODULE_3__["CreateUpdateComponent"], data: { edit: true } },
    { path: '/:documentId', component: _containers__WEBPACK_IMPORTED_MODULE_3__["ViewComponent"] },
];
// TODO() new doc -> upload, rich text
let DocumentsRoutingModule = class DocumentsRoutingModule {
};
DocumentsRoutingModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]]
    })
], DocumentsRoutingModule);



/***/ }),

/***/ "./src/app/documents/documents.module.ts":
/*!***********************************************!*\
  !*** ./src/app/documents/documents.module.ts ***!
  \***********************************************/
/*! exports provided: DocumentsModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DocumentsModule", function() { return DocumentsModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm2015/common.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm2015/forms.js");
/* harmony import */ var ngx_quill__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ngx-quill */ "./node_modules/ngx-quill/fesm2015/ngx-quill.js");
/* harmony import */ var _services__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./services */ "./src/app/documents/services/index.ts");
/* harmony import */ var _containers__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./containers */ "./src/app/documents/containers/index.ts");
/* harmony import */ var _documents_routing_module__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./documents-routing.module */ "./src/app/documents/documents-routing.module.ts");








let DocumentsModule = class DocumentsModule {
};
DocumentsModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        declarations: [
            ..._containers__WEBPACK_IMPORTED_MODULE_6__["containers"]
        ],
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_3__["ReactiveFormsModule"],
            ngx_quill__WEBPACK_IMPORTED_MODULE_4__["QuillModule"].forRoot(),
            _documents_routing_module__WEBPACK_IMPORTED_MODULE_7__["DocumentsRoutingModule"]
        ],
        providers: [..._services__WEBPACK_IMPORTED_MODULE_5__["services"]]
    })
], DocumentsModule);



/***/ }),

/***/ "./src/app/documents/services/index.ts":
/*!*********************************************!*\
  !*** ./src/app/documents/services/index.ts ***!
  \*********************************************/
/*! exports provided: services */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "services", function() { return services; });
const services = [];


/***/ })

}]);
//# sourceMappingURL=documents-documents-module-es2015.js.map