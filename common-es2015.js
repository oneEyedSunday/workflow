(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["common"],{

/***/ "./src/app/shared/interfaces/document.ts":
/*!***********************************************!*\
  !*** ./src/app/shared/interfaces/document.ts ***!
  \***********************************************/
/*! exports provided: Document */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Document", function() { return Document; });
class Document {
    constructor() {
        this.filename = '';
    }
}


/***/ }),

/***/ "./src/app/shared/interfaces/group.ts":
/*!********************************************!*\
  !*** ./src/app/shared/interfaces/group.ts ***!
  \********************************************/
/*! exports provided: Group */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Group", function() { return Group; });
class Group {
    constructor(groupObj) {
        if (groupObj) {
            this.description = groupObj.description;
            this.group_name = groupObj.group_name;
        }
    }
}
Group.ctorParameters = () => [
    { type: undefined }
];


/***/ }),

/***/ "./src/app/shared/interfaces/index.ts":
/*!********************************************!*\
  !*** ./src/app/shared/interfaces/index.ts ***!
  \********************************************/
/*! exports provided: Task, Stage, Process, Document, Group */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _task__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./task */ "./src/app/shared/interfaces/task.ts");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "Task", function() { return _task__WEBPACK_IMPORTED_MODULE_0__["Task"]; });

/* harmony import */ var _stage__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./stage */ "./src/app/shared/interfaces/stage.ts");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "Stage", function() { return _stage__WEBPACK_IMPORTED_MODULE_1__["Stage"]; });

/* harmony import */ var _process__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./process */ "./src/app/shared/interfaces/process.ts");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "Process", function() { return _process__WEBPACK_IMPORTED_MODULE_2__["Process"]; });

/* harmony import */ var _document__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./document */ "./src/app/shared/interfaces/document.ts");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "Document", function() { return _document__WEBPACK_IMPORTED_MODULE_3__["Document"]; });

/* harmony import */ var _group__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./group */ "./src/app/shared/interfaces/group.ts");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "Group", function() { return _group__WEBPACK_IMPORTED_MODULE_4__["Group"]; });








/***/ }),

/***/ "./src/app/shared/interfaces/process.ts":
/*!**********************************************!*\
  !*** ./src/app/shared/interfaces/process.ts ***!
  \**********************************************/
/*! exports provided: Process */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Process", function() { return Process; });
/* harmony import */ var _stage__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./stage */ "./src/app/shared/interfaces/stage.ts");
/* harmony import */ var _task__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./task */ "./src/app/shared/interfaces/task.ts");


class Process {
    constructor() {
        this.name = 'Demo Process';
        this.stages = [
            new _stage__WEBPACK_IMPORTED_MODULE_0__["Stage"]({ name: 'Demo Stage', tasks: [new _task__WEBPACK_IMPORTED_MODULE_1__["Task"](), new _task__WEBPACK_IMPORTED_MODULE_1__["Task"]()] }),
            new _stage__WEBPACK_IMPORTED_MODULE_0__["Stage"]({ name: 'Stage 2', tasks: [] })
        ];
        this.status = Math.random() > 0.46 ? 'In progress' : 'Complete';
        this.description = Array(40).fill('a');
        this.lastUpdatedAt = new Date(Date.now() - 250000 * Math.random() * 10 * Math.random() * 100);
    }
}


/***/ }),

/***/ "./src/app/shared/interfaces/stage.ts":
/*!********************************************!*\
  !*** ./src/app/shared/interfaces/stage.ts ***!
  \********************************************/
/*! exports provided: Stage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Stage", function() { return Stage; });
class Stage {
    constructor(initObj) {
        this.name = initObj ? initObj.name : 'Demo Stage';
        this.tasks = initObj ? initObj.tasks : [];
    }
}
Stage.ctorParameters = () => [
    { type: undefined }
];


/***/ }),

/***/ "./src/app/shared/interfaces/task.ts":
/*!*******************************************!*\
  !*** ./src/app/shared/interfaces/task.ts ***!
  \*******************************************/
/*! exports provided: Task */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Task", function() { return Task; });
class Task {
    constructor(initObj) {
        this.summary = 'Send Reports to HOD';
        this.status = 'ongoing';
        this.taskId = initObj ? initObj.taskId : null;
    }
}
Task.ctorParameters = () => [
    { type: undefined }
];


/***/ })

}]);
//# sourceMappingURL=common-es2015.js.map