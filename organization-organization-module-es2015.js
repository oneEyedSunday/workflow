(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["organization-organization-module"],{

/***/ "./node_modules/raw-loader/index.js!./src/app/organization/components/group-card.component.html":
/*!*********************************************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/organization/components/group-card.component.html ***!
  \*********************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"card\">\n    <div class=\"card-header\">{{group.group_name}}</div>\n    <div class=\"card-body\">\n        <div class=\"d-flex flex-row\">\n            <!-- TODO (oneeyedsunday) Add borders? -->\n            <div class=\"group--card__widget\">\n                <span class=\"\">{{ group.group_name?.substr(0, 2)?.toLowerCase() }}</span>\n            </div>\n           \n            <div class=\"ml-2 group--card__description\">\n                {{ group.description }}\n            </div>\n        </div>\n    </div>\n</div>"

/***/ }),

/***/ "./node_modules/raw-loader/index.js!./src/app/organization/components/group-form.component.html":
/*!*********************************************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/organization/components/group-form.component.html ***!
  \*********************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<form #groupForm=\"ngForm\" (ngSubmit)=\"submitForm()\">\n    <!-- Group CRUD Form goes here -->\n</form>"

/***/ }),

/***/ "./node_modules/raw-loader/index.js!./src/app/organization/containers/create-update.component.html":
/*!************************************************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/organization/containers/create-update.component.html ***!
  \************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<p>Form to Create Group Goes here</p>"

/***/ }),

/***/ "./node_modules/raw-loader/index.js!./src/app/organization/containers/list.component.html":
/*!***************************************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/organization/containers/list.component.html ***!
  \***************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"my-5\">\n  <div class=\"container\">\n    <p>Groups \n      <span class=\"badge badge-rounded badge-secondary\">{{ groups?.length || 0}}</span> &nbsp; \n      <span style=\"cursor: pointer\" title=\"Add Group\"><i class=\"fa fa-plus\"></i></span></p>\n    <div class=\"row\">\n      <div class=\"col-md-6 col-lg-3 col-sm-12\" *ngFor=\"let group of groups\">\n        <app-group-description-card\n        [group]=\"group\"></app-group-description-card>\n      </div>\n    </div>\n  </div>\n</div>"

/***/ }),

/***/ "./node_modules/raw-loader/index.js!./src/app/organization/containers/single.component.html":
/*!*****************************************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/organization/containers/single.component.html ***!
  \*****************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<p>Group Description & Members go here</p>\n<p>First Group Description</p>\n<p>Then, list members, with options to remove them</p>\n<p>Then, a CTA to add</p>\n<p>CTA may open up a modal, unsure as of now</p>"

/***/ }),

/***/ "./src/app/organization/components/group-card.component.scss":
/*!*******************************************************************!*\
  !*** ./src/app/organization/components/group-card.component.scss ***!
  \*******************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ":host {\n  display: block;\n  padding: 1em 0;\n}\n\n.group--card__description {\n  max-height: 200px;\n  overflow-y: hidden;\n  text-overflow: ellipsis;\n}\n\n.group--card__widget {\n  height: 70px;\n  width: 7em;\n  min-width: 70px;\n}\n\n.group--card__widget > span {\n  font-size: 3em;\n  color: white;\n  background: #6279;\n  border-radius: 5px;\n  padding: 2px 5px;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy9pc3BvYS9Xb3Jrc3BhY2Uvd29ya2Zsb3cvZnJvbnRlbmQvc3JjL2FwcC9vcmdhbml6YXRpb24vY29tcG9uZW50cy9ncm91cC1jYXJkLmNvbXBvbmVudC5zY3NzIiwic3JjL2FwcC9vcmdhbml6YXRpb24vY29tcG9uZW50cy9ncm91cC1jYXJkLmNvbXBvbmVudC5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0ksY0FBQTtFQUNBLGNBQUE7QUNDSjs7QURHSTtFQUNJLGlCQUFBO0VBQ0Esa0JBQUE7RUFDQSx1QkFBQTtBQ0FSOztBREdJO0VBQ0ksWUFBQTtFQUNBLFVBQUE7RUFDQSxlQUFBO0FDRFI7O0FER1E7RUFDSSxjQUFBO0VBQ0EsWUFBQTtFQUNBLGlCQUFBO0VBQ0Esa0JBQUE7RUFDQSxnQkFBQTtBQ0RaIiwiZmlsZSI6InNyYy9hcHAvb3JnYW5pemF0aW9uL2NvbXBvbmVudHMvZ3JvdXAtY2FyZC5jb21wb25lbnQuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIjpob3N0IHtcbiAgICBkaXNwbGF5OiBibG9jaztcbiAgICBwYWRkaW5nOiAxZW0gMDtcbn1cblxuLmdyb3VwLS1jYXJkIHtcbiAgICAmX19kZXNjcmlwdGlvbiB7XG4gICAgICAgIG1heC1oZWlnaHQ6IDIwMHB4O1xuICAgICAgICBvdmVyZmxvdy15OiBoaWRkZW47XG4gICAgICAgIHRleHQtb3ZlcmZsb3c6IGVsbGlwc2lzO1xuICAgIH1cblxuICAgICZfX3dpZGdldCB7XG4gICAgICAgIGhlaWdodDogNzBweDtcbiAgICAgICAgd2lkdGg6IDdlbTtcbiAgICAgICAgbWluLXdpZHRoOiA3MHB4O1xuXG4gICAgICAgICYgPiBzcGFuIHtcbiAgICAgICAgICAgIGZvbnQtc2l6ZTogM2VtO1xuICAgICAgICAgICAgY29sb3I6IHdoaXRlO1xuICAgICAgICAgICAgYmFja2dyb3VuZDogIzYyNzk7XG4gICAgICAgICAgICBib3JkZXItcmFkaXVzOiA1cHg7XG4gICAgICAgICAgICBwYWRkaW5nOiAycHggNXB4O1xuICAgICAgICB9XG4gICAgfVxufSIsIjpob3N0IHtcbiAgZGlzcGxheTogYmxvY2s7XG4gIHBhZGRpbmc6IDFlbSAwO1xufVxuXG4uZ3JvdXAtLWNhcmRfX2Rlc2NyaXB0aW9uIHtcbiAgbWF4LWhlaWdodDogMjAwcHg7XG4gIG92ZXJmbG93LXk6IGhpZGRlbjtcbiAgdGV4dC1vdmVyZmxvdzogZWxsaXBzaXM7XG59XG4uZ3JvdXAtLWNhcmRfX3dpZGdldCB7XG4gIGhlaWdodDogNzBweDtcbiAgd2lkdGg6IDdlbTtcbiAgbWluLXdpZHRoOiA3MHB4O1xufVxuLmdyb3VwLS1jYXJkX193aWRnZXQgPiBzcGFuIHtcbiAgZm9udC1zaXplOiAzZW07XG4gIGNvbG9yOiB3aGl0ZTtcbiAgYmFja2dyb3VuZDogIzYyNzk7XG4gIGJvcmRlci1yYWRpdXM6IDVweDtcbiAgcGFkZGluZzogMnB4IDVweDtcbn0iXX0= */"

/***/ }),

/***/ "./src/app/organization/components/group-card.component.ts":
/*!*****************************************************************!*\
  !*** ./src/app/organization/components/group-card.component.ts ***!
  \*****************************************************************/
/*! exports provided: GroupDescriptionCardComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "GroupDescriptionCardComponent", function() { return GroupDescriptionCardComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");


let GroupDescriptionCardComponent = class GroupDescriptionCardComponent {
};
tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])(),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", Object)
], GroupDescriptionCardComponent.prototype, "group", void 0);
GroupDescriptionCardComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-group-description-card',
        template: __webpack_require__(/*! raw-loader!./group-card.component.html */ "./node_modules/raw-loader/index.js!./src/app/organization/components/group-card.component.html"),
        styles: [__webpack_require__(/*! ./group-card.component.scss */ "./src/app/organization/components/group-card.component.scss")]
    })
], GroupDescriptionCardComponent);



/***/ }),

/***/ "./src/app/organization/components/group-form.component.ts":
/*!*****************************************************************!*\
  !*** ./src/app/organization/components/group-form.component.ts ***!
  \*****************************************************************/
/*! exports provided: GroupFormComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "GroupFormComponent", function() { return GroupFormComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");


let GroupFormComponent = class GroupFormComponent {
    constructor() {
        this.formSubmitted = new _angular_core__WEBPACK_IMPORTED_MODULE_1__["EventEmitter"]();
    }
    submitForm() {
        this.formSubmitted.emit(this.group);
    }
    ngOnChanges(changes) {
        if (changes['errored'].currentValue) {
            // form has errored
            this.submitting = false;
        }
    }
};
tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])(),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", Object)
], GroupFormComponent.prototype, "group", void 0);
tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])(),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", Boolean)
], GroupFormComponent.prototype, "errored", void 0);
tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Output"])(),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", _angular_core__WEBPACK_IMPORTED_MODULE_1__["EventEmitter"])
], GroupFormComponent.prototype, "formSubmitted", void 0);
GroupFormComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-group-form',
        template: __webpack_require__(/*! raw-loader!./group-form.component.html */ "./node_modules/raw-loader/index.js!./src/app/organization/components/group-form.component.html"),
        changeDetection: _angular_core__WEBPACK_IMPORTED_MODULE_1__["ChangeDetectionStrategy"].OnPush
    })
], GroupFormComponent);



/***/ }),

/***/ "./src/app/organization/components/index.ts":
/*!**************************************************!*\
  !*** ./src/app/organization/components/index.ts ***!
  \**************************************************/
/*! exports provided: components, GroupDescriptionCardComponent, GroupFormComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "components", function() { return components; });
/* harmony import */ var _group_card_component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./group-card.component */ "./src/app/organization/components/group-card.component.ts");
/* harmony import */ var _group_form_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./group-form.component */ "./src/app/organization/components/group-form.component.ts");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "GroupDescriptionCardComponent", function() { return _group_card_component__WEBPACK_IMPORTED_MODULE_0__["GroupDescriptionCardComponent"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "GroupFormComponent", function() { return _group_form_component__WEBPACK_IMPORTED_MODULE_1__["GroupFormComponent"]; });



const components = [
    _group_card_component__WEBPACK_IMPORTED_MODULE_0__["GroupDescriptionCardComponent"],
    _group_form_component__WEBPACK_IMPORTED_MODULE_1__["GroupFormComponent"]
];




/***/ }),

/***/ "./src/app/organization/containers/create-update.component.ts":
/*!********************************************************************!*\
  !*** ./src/app/organization/containers/create-update.component.ts ***!
  \********************************************************************/
/*! exports provided: GroupCreateUpdateComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "GroupCreateUpdateComponent", function() { return GroupCreateUpdateComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");


let GroupCreateUpdateComponent = class GroupCreateUpdateComponent {
    ngOnInit() { }
};
GroupCreateUpdateComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-group-create-update',
        template: __webpack_require__(/*! raw-loader!./create-update.component.html */ "./node_modules/raw-loader/index.js!./src/app/organization/containers/create-update.component.html")
    })
], GroupCreateUpdateComponent);



/***/ }),

/***/ "./src/app/organization/containers/index.ts":
/*!**************************************************!*\
  !*** ./src/app/organization/containers/index.ts ***!
  \**************************************************/
/*! exports provided: containers, GroupListComponent, SingleGroupViewComponent, GroupCreateUpdateComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "containers", function() { return containers; });
/* harmony import */ var _list_component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./list.component */ "./src/app/organization/containers/list.component.ts");
/* harmony import */ var _single_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./single.component */ "./src/app/organization/containers/single.component.ts");
/* harmony import */ var _create_update_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./create-update.component */ "./src/app/organization/containers/create-update.component.ts");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "GroupListComponent", function() { return _list_component__WEBPACK_IMPORTED_MODULE_0__["GroupListComponent"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "SingleGroupViewComponent", function() { return _single_component__WEBPACK_IMPORTED_MODULE_1__["SingleGroupViewComponent"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "GroupCreateUpdateComponent", function() { return _create_update_component__WEBPACK_IMPORTED_MODULE_2__["GroupCreateUpdateComponent"]; });




const containers = [
    _list_component__WEBPACK_IMPORTED_MODULE_0__["GroupListComponent"],
    _single_component__WEBPACK_IMPORTED_MODULE_1__["SingleGroupViewComponent"],
    _create_update_component__WEBPACK_IMPORTED_MODULE_2__["GroupCreateUpdateComponent"]
];





/***/ }),

/***/ "./src/app/organization/containers/list.component.ts":
/*!***********************************************************!*\
  !*** ./src/app/organization/containers/list.component.ts ***!
  \***********************************************************/
/*! exports provided: GroupListComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "GroupListComponent", function() { return GroupListComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _shared_interfaces__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @shared/interfaces */ "./src/app/shared/interfaces/index.ts");



let GroupListComponent = class GroupListComponent {
    ngOnInit() {
        this.groups = [
            // tslint:disable-next-line: max-line-length
            new _shared_interfaces__WEBPACK_IMPORTED_MODULE_2__["Group"]({ description: 'fter dragging Android File Transfer to the Applications folder, hold down the control key while clicking in the window and select Eject “Android File Transfer” from the menu. You can also delete the DMG file by moving it to the Trash.', group_name: 'janananana' }),
            new _shared_interfaces__WEBPACK_IMPORTED_MODULE_2__["Group"]({ description: 'anannana', group_name: 'janananana' }),
            new _shared_interfaces__WEBPACK_IMPORTED_MODULE_2__["Group"]({ description: 'This is an evangelical group', group_name: 'janananana' }),
            new _shared_interfaces__WEBPACK_IMPORTED_MODULE_2__["Group"]({ description: 'anannana', group_name: 'janananana' }),
            new _shared_interfaces__WEBPACK_IMPORTED_MODULE_2__["Group"]({ description: 'anannana', group_name: 'janananana' }),
            new _shared_interfaces__WEBPACK_IMPORTED_MODULE_2__["Group"]({ description: 'anannana', group_name: 'janananana' }),
            new _shared_interfaces__WEBPACK_IMPORTED_MODULE_2__["Group"]({ description: 'anannana', group_name: 'janananana' }),
            new _shared_interfaces__WEBPACK_IMPORTED_MODULE_2__["Group"]({ description: 'anannana', group_name: 'janananana' }),
            new _shared_interfaces__WEBPACK_IMPORTED_MODULE_2__["Group"]({ description: 'No swearing in this xtain subreddit', group_name: 'Wholesome Memes' }),
            new _shared_interfaces__WEBPACK_IMPORTED_MODULE_2__["Group"]({ description: 'anannana', group_name: 'janananana' }),
            new _shared_interfaces__WEBPACK_IMPORTED_MODULE_2__["Group"]({ description: 'anannana', group_name: 'janananana' }),
            new _shared_interfaces__WEBPACK_IMPORTED_MODULE_2__["Group"]({ description: 'We are all retards', group_name: 'WSB' }),
            new _shared_interfaces__WEBPACK_IMPORTED_MODULE_2__["Group"]()
        ];
    }
};
GroupListComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-group-list',
        template: __webpack_require__(/*! raw-loader!./list.component.html */ "./node_modules/raw-loader/index.js!./src/app/organization/containers/list.component.html")
    })
], GroupListComponent);



/***/ }),

/***/ "./src/app/organization/containers/single.component.ts":
/*!*************************************************************!*\
  !*** ./src/app/organization/containers/single.component.ts ***!
  \*************************************************************/
/*! exports provided: SingleGroupViewComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SingleGroupViewComponent", function() { return SingleGroupViewComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");


let SingleGroupViewComponent = class SingleGroupViewComponent {
    ngOnInit() { }
};
SingleGroupViewComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-group-view',
        template: __webpack_require__(/*! raw-loader!./single.component.html */ "./node_modules/raw-loader/index.js!./src/app/organization/containers/single.component.html")
    })
], SingleGroupViewComponent);



/***/ }),

/***/ "./src/app/organization/organization-routing.module.ts":
/*!*************************************************************!*\
  !*** ./src/app/organization/organization-routing.module.ts ***!
  \*************************************************************/
/*! exports provided: OrganizationRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "OrganizationRoutingModule", function() { return OrganizationRoutingModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");
/* harmony import */ var _containers__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./containers */ "./src/app/organization/containers/index.ts");




const routes = [
    { path: 'groups/new', component: _containers__WEBPACK_IMPORTED_MODULE_3__["GroupCreateUpdateComponent"], data: { edit: false } },
    { path: 'groups', component: _containers__WEBPACK_IMPORTED_MODULE_3__["GroupListComponent"] },
    { path: 'groups/:groupId/', component: _containers__WEBPACK_IMPORTED_MODULE_3__["SingleGroupViewComponent"], data: { edit: true } },
    { path: 'groups/:groupId/edit', component: _containers__WEBPACK_IMPORTED_MODULE_3__["GroupCreateUpdateComponent"], data: { edit: true } }
];
let OrganizationRoutingModule = class OrganizationRoutingModule {
};
OrganizationRoutingModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]]
    })
], OrganizationRoutingModule);



/***/ }),

/***/ "./src/app/organization/organization.module.ts":
/*!*****************************************************!*\
  !*** ./src/app/organization/organization.module.ts ***!
  \*****************************************************/
/*! exports provided: OrganizationModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "OrganizationModule", function() { return OrganizationModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm2015/common.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm2015/forms.js");
/* harmony import */ var _services__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./services */ "./src/app/organization/services/index.ts");
/* harmony import */ var _containers__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./containers */ "./src/app/organization/containers/index.ts");
/* harmony import */ var _components__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./components */ "./src/app/organization/components/index.ts");
/* harmony import */ var _organization_routing_module__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./organization-routing.module */ "./src/app/organization/organization-routing.module.ts");
/* harmony import */ var _shared_shared_module__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @shared/shared.module */ "./src/app/shared/shared.module.ts");









let OrganizationModule = class OrganizationModule {
};
OrganizationModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        declarations: [
            ..._containers__WEBPACK_IMPORTED_MODULE_5__["containers"],
            ..._components__WEBPACK_IMPORTED_MODULE_6__["components"]
        ],
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"],
            _organization_routing_module__WEBPACK_IMPORTED_MODULE_7__["OrganizationRoutingModule"],
            _shared_shared_module__WEBPACK_IMPORTED_MODULE_8__["SharedModule"]
        ],
        providers: [
            ..._services__WEBPACK_IMPORTED_MODULE_4__["services"]
        ]
    })
], OrganizationModule);



/***/ }),

/***/ "./src/app/organization/services/groups.service.ts":
/*!*********************************************************!*\
  !*** ./src/app/organization/services/groups.service.ts ***!
  \*********************************************************/
/*! exports provided: GroupsService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "GroupsService", function() { return GroupsService; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");


let GroupsService = class GroupsService {
    fetchGroups() { }
    fetchGroup(groupId) { }
    createGroup(group) { }
    updateGroup(groupId, group) { }
};
GroupsService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])()
], GroupsService);



/***/ }),

/***/ "./src/app/organization/services/index.ts":
/*!************************************************!*\
  !*** ./src/app/organization/services/index.ts ***!
  \************************************************/
/*! exports provided: services */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "services", function() { return services; });
/* harmony import */ var _groups_service__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./groups.service */ "./src/app/organization/services/groups.service.ts");

const services = [
    _groups_service__WEBPACK_IMPORTED_MODULE_0__["GroupsService"]
];


/***/ })

}]);
//# sourceMappingURL=organization-organization-module-es2015.js.map