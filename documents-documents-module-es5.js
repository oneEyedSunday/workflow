(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["documents-documents-module"],{

/***/ "./node_modules/@cloudinary/angular-5.x/index.js":
/*!*******************************************************!*\
  !*** ./node_modules/@cloudinary/angular-5.x/index.js ***!
  \*******************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

function __export(m) {
    for (var p in m) if (!exports.hasOwnProperty(p)) exports[p] = m[p];
}
Object.defineProperty(exports, "__esModule", { value: true });
__export(__webpack_require__(/*! ./src/cloudinary.module */ "./node_modules/@cloudinary/angular-5.x/src/cloudinary.module.js"));
//# sourceMappingURL=index.js.map

/***/ }),

/***/ "./node_modules/@cloudinary/angular-5.x/src/cloudinary-background-image.directive.js":
/*!*******************************************************************************************!*\
  !*** ./node_modules/@cloudinary/angular-5.x/src/cloudinary-background-image.directive.js ***!
  \*******************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
var cloudinary_service_1 = __webpack_require__(/*! ./cloudinary.service */ "./node_modules/@cloudinary/angular-5.x/src/cloudinary.service.js");
var cloudinary_transformation_directive_1 = __webpack_require__(/*! ./cloudinary-transformation.directive */ "./node_modules/@cloudinary/angular-5.x/src/cloudinary-transformation.directive.js");
var CloudinaryBackgroundImageDirective = (function () {
    function CloudinaryBackgroundImageDirective(renderer, el, cloudinary) {
        this.renderer = renderer;
        this.el = el;
        this.cloudinary = cloudinary;
    }
    CloudinaryBackgroundImageDirective.prototype.isBrowser = function () {
        return typeof window !== 'undefined';
    };
    CloudinaryBackgroundImageDirective.prototype.ngAfterViewInit = function () {
        if (this.isBrowser()) {
            var nativeElement = this.el.nativeElement;
            var options = this.cloudinary.toCloudinaryAttributes(nativeElement.attributes, this.transformations);
            var imageUrl = this.cloudinary.url(this.clBackgroundImage, options);
            this.renderer.setStyle(nativeElement, 'background-image', "url('" + imageUrl + "')");
            this.renderer.setStyle(nativeElement, 'background-repeat', 'no-repeat');
            this.renderer.setStyle(nativeElement, 'background-position', 'center');
        }
    };
    __decorate([
        core_1.Input(),
        __metadata("design:type", String)
    ], CloudinaryBackgroundImageDirective.prototype, "clBackgroundImage", void 0);
    __decorate([
        core_1.ContentChildren(cloudinary_transformation_directive_1.CloudinaryTransformationDirective),
        __metadata("design:type", core_1.QueryList)
    ], CloudinaryBackgroundImageDirective.prototype, "transformations", void 0);
    CloudinaryBackgroundImageDirective = __decorate([
        core_1.Directive({
            selector: '[clBackgroundImage]'
        }),
        __metadata("design:paramtypes", [core_1.Renderer2, core_1.ElementRef, cloudinary_service_1.Cloudinary])
    ], CloudinaryBackgroundImageDirective);
    return CloudinaryBackgroundImageDirective;
}());
exports.CloudinaryBackgroundImageDirective = CloudinaryBackgroundImageDirective;
//# sourceMappingURL=cloudinary-background-image.directive.js.map

/***/ }),

/***/ "./node_modules/@cloudinary/angular-5.x/src/cloudinary-image-source.directive.js":
/*!***************************************************************************************!*\
  !*** ./node_modules/@cloudinary/angular-5.x/src/cloudinary-image-source.directive.js ***!
  \***************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
var cloudinary_service_1 = __webpack_require__(/*! ./cloudinary.service */ "./node_modules/@cloudinary/angular-5.x/src/cloudinary.service.js");
var cloudinary_transformation_directive_1 = __webpack_require__(/*! ./cloudinary-transformation.directive */ "./node_modules/@cloudinary/angular-5.x/src/cloudinary-transformation.directive.js");
var cloudinary_service_2 = __webpack_require__(/*! ./cloudinary.service */ "./node_modules/@cloudinary/angular-5.x/src/cloudinary.service.js");
var CloudinaryImageSourceDirective = (function () {
    function CloudinaryImageSourceDirective(el, cloudinary) {
        this.el = el;
        this.cloudinary = cloudinary;
    }
    CloudinaryImageSourceDirective.prototype.ngAfterViewInit = function () {
        if (cloudinary_service_2.isBrowser()) {
            var attrName = void 0;
            var propertyValue = void 0;
            if (this.clHref) {
                attrName = 'href';
                propertyValue = this.clHref;
            }
            else if (this.clSrc) {
                attrName = 'src';
                propertyValue = this.clSrc;
            }
            else if (this.clSrcset) {
                attrName = 'srcset';
                propertyValue = this.clSrcset;
            }
            var isSvg = false;
            if (this.clHref &&
                toString.call(this.el.nativeElement['href'] === '[object SVGAnimatedString]')) {
                this.el.nativeElement.setAttribute('xlinkHref', 'xlink:href');
                isSvg = true;
            }
            if (!attrName || !propertyValue) {
                throw new Error('Directive value is missing for clHref/clSrc/clSrcset');
            }
            var nativeElement = this.el.nativeElement;
            var options = this.cloudinary.toCloudinaryAttributes(nativeElement.attributes, this.transformations);
            var attrValue = this.cloudinary.url(propertyValue, options);
            this.el.nativeElement.setAttribute(attrName, attrValue);
            /*
             on IE, if "ngSrc" directive declaration is used and "src" attribute doesn't exist
             then calling element.setAttribute('src', 'foo') doesn't do anything, so we need
             to set the property as well to achieve the desired effect.
    
             Check for IE: http://stackoverflow.com/a/32139375/198095
             if is IE then documentMode contains IE version
             */
            var msie = this.el.nativeElement.ownerDocument.documentMode;
            if (msie && !isSvg) {
                // IE logic here
                this.el.nativeElement[attrName] = attrValue;
            }
        }
    };
    ;
    __decorate([
        core_1.Input(),
        __metadata("design:type", String)
    ], CloudinaryImageSourceDirective.prototype, "clHref", void 0);
    __decorate([
        core_1.Input(),
        __metadata("design:type", String)
    ], CloudinaryImageSourceDirective.prototype, "clSrc", void 0);
    __decorate([
        core_1.Input(),
        __metadata("design:type", String)
    ], CloudinaryImageSourceDirective.prototype, "clSrcset", void 0);
    __decorate([
        core_1.ContentChildren(cloudinary_transformation_directive_1.CloudinaryTransformationDirective),
        __metadata("design:type", core_1.QueryList)
    ], CloudinaryImageSourceDirective.prototype, "transformations", void 0);
    CloudinaryImageSourceDirective = __decorate([
        core_1.Directive({
            selector: '[clHref], [clSrc], [clSrcset]'
        }),
        __metadata("design:paramtypes", [core_1.ElementRef, cloudinary_service_1.Cloudinary])
    ], CloudinaryImageSourceDirective);
    return CloudinaryImageSourceDirective;
}());
exports.CloudinaryImageSourceDirective = CloudinaryImageSourceDirective;
//# sourceMappingURL=cloudinary-image-source.directive.js.map

/***/ }),

/***/ "./node_modules/@cloudinary/angular-5.x/src/cloudinary-image.component.js":
/*!********************************************************************************!*\
  !*** ./node_modules/@cloudinary/angular-5.x/src/cloudinary-image.component.js ***!
  \********************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
var cloudinary_service_1 = __webpack_require__(/*! ./cloudinary.service */ "./node_modules/@cloudinary/angular-5.x/src/cloudinary.service.js");
var cloudinary_transformation_directive_1 = __webpack_require__(/*! ./cloudinary-transformation.directive */ "./node_modules/@cloudinary/angular-5.x/src/cloudinary-transformation.directive.js");
var cloudinary_service_2 = __webpack_require__(/*! ./cloudinary.service */ "./node_modules/@cloudinary/angular-5.x/src/cloudinary.service.js");
var CloudinaryImage = (function () {
    function CloudinaryImage(el, cloudinary) {
        this.el = el;
        this.cloudinary = cloudinary;
        this.onLoad = new core_1.EventEmitter(); // Callback when an image is loaded successfully
        this.onError = new core_1.EventEmitter(); // Callback when an image is loaded with error
    }
    CloudinaryImage.prototype.ngOnInit = function () {
        var _this = this;
        if (cloudinary_service_2.isBrowser()) {
            // Create an observer instance
            this.observer = new MutationObserver(function () {
                _this.loadImage();
            });
            // Observe changes to attributes or child transformations to re-render the image
            var config = { attributes: true, childList: true };
            // pass in the target node, as well as the observer options
            this.observer.observe(this.el.nativeElement, config);
        }
    };
    CloudinaryImage.prototype.ngOnChanges = function (changes) {
        // Listen to changes on the data-bound property 'publicId'.
        // Update component unless this is the first value assigned.
        if (changes.publicId && !changes.publicId.isFirstChange()) {
            this.loadImage();
        }
    };
    CloudinaryImage.prototype.ngOnDestroy = function () {
        if (this.observer && this.observer.disconnect) {
            this.observer.disconnect();
        }
    };
    CloudinaryImage.prototype.ngAfterViewInit = function () {
        this.loadImage();
    };
    CloudinaryImage.prototype.loadImage = function () {
        var _this = this;
        // https://github.com/angular/universal#universal-gotchas
        // Fetch the image only for client side rendering by the browser
        if (cloudinary_service_2.isBrowser()) {
            if (!this.publicId) {
                throw new Error('You must set the public id of the image to load, e.g. <cl-image public-id={{photo.public_id}}...></cl-image>');
            }
            var nativeElement = this.el.nativeElement;
            var image = nativeElement.children[0];
            // Add onload and onerror handlers
            image.onload = function (e) {
                _this.onLoad.emit(e);
            };
            image.onerror = function (e) {
                _this.onError.emit(e);
            };
            var options = this.cloudinary.toCloudinaryAttributes(nativeElement.attributes, this.transformations);
            var imageTag = this.cloudinary.imageTag(this.publicId, options);
            this.setElementAttributes(image, imageTag.attributes());
            if (options.responsive) {
                this.cloudinary.responsive(image, options);
            }
        }
    };
    CloudinaryImage.prototype.setElementAttributes = function (element, attributesLiteral) {
        Object.keys(attributesLiteral).forEach(function (attrName) {
            element.setAttribute(attrName, attributesLiteral[attrName]);
        });
    };
    __decorate([
        core_1.Input('public-id'),
        __metadata("design:type", String)
    ], CloudinaryImage.prototype, "publicId", void 0);
    __decorate([
        core_1.ContentChildren(cloudinary_transformation_directive_1.CloudinaryTransformationDirective),
        __metadata("design:type", core_1.QueryList)
    ], CloudinaryImage.prototype, "transformations", void 0);
    __decorate([
        core_1.Output(),
        __metadata("design:type", core_1.EventEmitter)
    ], CloudinaryImage.prototype, "onLoad", void 0);
    __decorate([
        core_1.Output(),
        __metadata("design:type", core_1.EventEmitter)
    ], CloudinaryImage.prototype, "onError", void 0);
    CloudinaryImage = __decorate([
        core_1.Component({
            selector: 'cl-image',
            template: '<img>'
        }),
        __metadata("design:paramtypes", [core_1.ElementRef, cloudinary_service_1.Cloudinary])
    ], CloudinaryImage);
    return CloudinaryImage;
}());
exports.CloudinaryImage = CloudinaryImage;
//# sourceMappingURL=cloudinary-image.component.js.map

/***/ }),

/***/ "./node_modules/@cloudinary/angular-5.x/src/cloudinary-transformation.directive.js":
/*!*****************************************************************************************!*\
  !*** ./node_modules/@cloudinary/angular-5.x/src/cloudinary-transformation.directive.js ***!
  \*****************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
var CloudinaryTransformationDirective = (function () {
    function CloudinaryTransformationDirective(el) {
        this.el = el;
    }
    CloudinaryTransformationDirective.prototype.getAttributes = function () {
        return this.el.nativeElement.attributes;
    };
    CloudinaryTransformationDirective = __decorate([
        core_1.Directive({
            selector: 'cl-transformation'
        }),
        __metadata("design:paramtypes", [core_1.ElementRef])
    ], CloudinaryTransformationDirective);
    return CloudinaryTransformationDirective;
}());
exports.CloudinaryTransformationDirective = CloudinaryTransformationDirective;
//# sourceMappingURL=cloudinary-transformation.directive.js.map

/***/ }),

/***/ "./node_modules/@cloudinary/angular-5.x/src/cloudinary-video.component.js":
/*!********************************************************************************!*\
  !*** ./node_modules/@cloudinary/angular-5.x/src/cloudinary-video.component.js ***!
  \********************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __param = (this && this.__param) || function (paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
};
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
var common_1 = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
var cloudinary_service_1 = __webpack_require__(/*! ./cloudinary.service */ "./node_modules/@cloudinary/angular-5.x/src/cloudinary.service.js");
var cloudinary_transformation_directive_1 = __webpack_require__(/*! ./cloudinary-transformation.directive */ "./node_modules/@cloudinary/angular-5.x/src/cloudinary-transformation.directive.js");
var CloudinaryVideo = (function () {
    function CloudinaryVideo(el, cloudinary, platformId) {
        this.el = el;
        this.cloudinary = cloudinary;
        this.platformId = platformId;
    }
    CloudinaryVideo.prototype.ngOnInit = function () {
        var _this = this;
        if (typeof MutationObserver !== 'undefined') {
            // Create an observer instance
            this.observer = new MutationObserver(function () {
                _this.loadVideo(_this.publicId);
            });
            // Observe changes to attributes or child transformations to re-render the image
            var config = { attributes: true, childList: true };
            // pass in the target node, as well as the observer options
            this.observer.observe(this.el.nativeElement, config);
        }
    };
    CloudinaryVideo.prototype.ngOnChanges = function (changes) {
        // Listen to changes on the data-bound property 'publicId'.
        // Update component unless this is the first value assigned.
        if (changes.publicId && !changes.publicId.isFirstChange()) {
            this.loadVideo(changes.publicId.currentValue);
        }
    };
    CloudinaryVideo.prototype.ngOnDestroy = function () {
        if (this.observer && this.observer.disconnect) {
            this.observer.disconnect();
        }
    };
    CloudinaryVideo.prototype.ngAfterViewInit = function () {
        if (!this.publicId) {
            throw new Error('You must set the public id of the video to load, e.g. <cl-video public-id={{video.public_id}}...></cl-video>');
        }
        this.loadVideo(this.publicId);
    };
    CloudinaryVideo.prototype.loadVideo = function (publicId) {
        // https://github.com/angular/universal#universal-gotchas
        if (common_1.isPlatformBrowser(this.platformId)) {
            var nativeElement = this.el.nativeElement;
            var video = nativeElement.children[0];
            var options = this.cloudinary.toCloudinaryAttributes(nativeElement.attributes, this.transformations);
            var videoTag = this.cloudinary.videoTag(publicId, options);
            // Replace template with the custom video tag created by Cloudinary
            this.appendSourceElements(video, videoTag.content());
            // Add attributes
            this.setElementAttributes(video, videoTag.attributes());
        }
    };
    CloudinaryVideo.prototype.setElementAttributes = function (element, attributesLiteral) {
        Object.keys(attributesLiteral).forEach(function (attrName) {
            element.setAttribute(attrName, attributesLiteral[attrName]);
        });
    };
    CloudinaryVideo.prototype.appendSourceElements = function (element, html) {
        var fragment = document.createDocumentFragment();
        element.innerHTML = html;
        while (element.childNodes[0]) {
            fragment.appendChild(element.childNodes[0]);
        }
        element.appendChild(fragment);
    };
    __decorate([
        core_1.Input('public-id'),
        __metadata("design:type", String)
    ], CloudinaryVideo.prototype, "publicId", void 0);
    __decorate([
        core_1.ContentChildren(cloudinary_transformation_directive_1.CloudinaryTransformationDirective),
        __metadata("design:type", core_1.QueryList)
    ], CloudinaryVideo.prototype, "transformations", void 0);
    CloudinaryVideo = __decorate([
        core_1.Component({
            selector: 'cl-video',
            template: '<video></video>'
        })
        // See also video reference - http://cloudinary.com/documentation/video_manipulation_and_delivery#video_transformations_reference
        ,
        __param(2, core_1.Inject(core_1.PLATFORM_ID)),
        __metadata("design:paramtypes", [core_1.ElementRef, cloudinary_service_1.Cloudinary, Object])
    ], CloudinaryVideo);
    return CloudinaryVideo;
}());
exports.CloudinaryVideo = CloudinaryVideo;
//# sourceMappingURL=cloudinary-video.component.js.map

/***/ }),

/***/ "./node_modules/@cloudinary/angular-5.x/src/cloudinary.module.js":
/*!***********************************************************************!*\
  !*** ./node_modules/@cloudinary/angular-5.x/src/cloudinary.module.js ***!
  \***********************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
/* App Module */
var core_1 = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
var cloudinary_service_1 = __webpack_require__(/*! ./cloudinary.service */ "./node_modules/@cloudinary/angular-5.x/src/cloudinary.service.js");
var cloudinary_image_component_1 = __webpack_require__(/*! ./cloudinary-image.component */ "./node_modules/@cloudinary/angular-5.x/src/cloudinary-image.component.js");
var cloudinary_video_component_1 = __webpack_require__(/*! ./cloudinary-video.component */ "./node_modules/@cloudinary/angular-5.x/src/cloudinary-video.component.js");
var cloudinary_transformation_directive_1 = __webpack_require__(/*! ./cloudinary-transformation.directive */ "./node_modules/@cloudinary/angular-5.x/src/cloudinary-transformation.directive.js");
var cloudinary_image_source_directive_1 = __webpack_require__(/*! ./cloudinary-image-source.directive */ "./node_modules/@cloudinary/angular-5.x/src/cloudinary-image-source.directive.js");
var cloudinary_background_image_directive_1 = __webpack_require__(/*! ./cloudinary-background-image.directive */ "./node_modules/@cloudinary/angular-5.x/src/cloudinary-background-image.directive.js");
// Export for lib consumers
var cloudinary_image_component_2 = __webpack_require__(/*! ./cloudinary-image.component */ "./node_modules/@cloudinary/angular-5.x/src/cloudinary-image.component.js");
exports.CloudinaryImage = cloudinary_image_component_2.CloudinaryImage;
var cloudinary_video_component_2 = __webpack_require__(/*! ./cloudinary-video.component */ "./node_modules/@cloudinary/angular-5.x/src/cloudinary-video.component.js");
exports.CloudinaryVideo = cloudinary_video_component_2.CloudinaryVideo;
var cloudinary_transformation_directive_2 = __webpack_require__(/*! ./cloudinary-transformation.directive */ "./node_modules/@cloudinary/angular-5.x/src/cloudinary-transformation.directive.js");
exports.CloudinaryTransformationDirective = cloudinary_transformation_directive_2.CloudinaryTransformationDirective;
var cloudinary_image_source_directive_2 = __webpack_require__(/*! ./cloudinary-image-source.directive */ "./node_modules/@cloudinary/angular-5.x/src/cloudinary-image-source.directive.js");
exports.CloudinaryImageSourceDirective = cloudinary_image_source_directive_2.CloudinaryImageSourceDirective;
var cloudinary_background_image_directive_2 = __webpack_require__(/*! ./cloudinary-background-image.directive */ "./node_modules/@cloudinary/angular-5.x/src/cloudinary-background-image.directive.js");
exports.CloudinaryBackgroundImageDirective = cloudinary_background_image_directive_2.CloudinaryBackgroundImageDirective;
var cloudinary_service_2 = __webpack_require__(/*! ./cloudinary.service */ "./node_modules/@cloudinary/angular-5.x/src/cloudinary.service.js");
exports.Cloudinary = cloudinary_service_2.Cloudinary;
exports.provideCloudinary = cloudinary_service_2.provideCloudinary;
exports.CLOUDINARY_LIB = new core_1.InjectionToken('CLOUDINARY_LIB');
exports.CLOUDINARY_CONFIGURATION = new core_1.InjectionToken('CLOUDINARY_CONFIGURATION');
// Export this function to Angular's AOT to work
function createCloudinary(cloudinaryJsLib, configuration) {
    return new cloudinary_service_1.Cloudinary(cloudinaryJsLib, configuration);
}
exports.createCloudinary = createCloudinary;
;
var CloudinaryModule = (function () {
    function CloudinaryModule() {
    }
    CloudinaryModule_1 = CloudinaryModule;
    CloudinaryModule.forRoot = function (cloudinaryJsLib, cloudinaryConfiguration) {
        return {
            ngModule: CloudinaryModule_1,
            providers: [
                { provide: exports.CLOUDINARY_LIB, useValue: cloudinaryJsLib },
                { provide: exports.CLOUDINARY_CONFIGURATION, useValue: cloudinaryConfiguration },
                {
                    provide: cloudinary_service_1.Cloudinary,
                    useFactory: createCloudinary,
                    deps: [exports.CLOUDINARY_LIB, exports.CLOUDINARY_CONFIGURATION]
                }
            ]
        };
    };
    CloudinaryModule = CloudinaryModule_1 = __decorate([
        core_1.NgModule({
            declarations: [
                cloudinary_image_source_directive_1.CloudinaryImageSourceDirective,
                cloudinary_background_image_directive_1.CloudinaryBackgroundImageDirective,
                cloudinary_image_component_1.CloudinaryImage,
                cloudinary_video_component_1.CloudinaryVideo,
                cloudinary_transformation_directive_1.CloudinaryTransformationDirective
            ],
            exports: [
                cloudinary_image_source_directive_1.CloudinaryImageSourceDirective,
                cloudinary_background_image_directive_1.CloudinaryBackgroundImageDirective,
                cloudinary_image_component_1.CloudinaryImage,
                cloudinary_video_component_1.CloudinaryVideo,
                cloudinary_transformation_directive_1.CloudinaryTransformationDirective
            ]
        })
    ], CloudinaryModule);
    return CloudinaryModule;
    var CloudinaryModule_1;
}());
exports.CloudinaryModule = CloudinaryModule;
//# sourceMappingURL=cloudinary.module.js.map

/***/ }),

/***/ "./node_modules/@cloudinary/angular-5.x/src/cloudinary.service.js":
/*!************************************************************************!*\
  !*** ./node_modules/@cloudinary/angular-5.x/src/cloudinary.service.js ***!
  \************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
/**
 * Returns true if the given string begins with a left curly brace and ends with a right curly brace, e.g.
 * "{asdas d}" will return true, "asdasd}" will return false.
 *
 * this function does not validate the correctness of the string content other than the first and last character
 * @param str
 * @returns boolean
 */
var isJsonLikeString = function (str) {
    // [\s\S] allows the string to contain new lines
    return str && typeof str === 'string' && (str.trim().match(/^{[\s\S]*?}$/) !== null);
};
exports.isJsonLikeString = isJsonLikeString;
var isNamedNodeMap = function (obj) {
    return obj && (obj.constructor.name === 'NamedNodeMap' || obj instanceof NamedNodeMap);
};
exports.isNamedNodeMap = isNamedNodeMap;
var namedNodeMapToObject = function (source) {
    var target = {};
    Object.keys(source).forEach(function (index) {
        var name = source[index].name;
        var value = source[index].value;
        target[name] = value;
    });
    return target;
};
exports.namedNodeMapToObject = namedNodeMapToObject;
var transformKeyNames = function (obj) {
    var _obj = obj;
    if (isJsonLikeString(obj)) {
        // Given attribute value is in the form of a JSON object -
        // Transforms the string into an object, as the Javascript API expects
        _obj = JSON.parse(obj);
    }
    else if (isNamedNodeMap(obj)) {
        _obj = namedNodeMapToObject(obj);
    }
    if (Array.isArray(_obj)) {
        // Transform all the array values (e.g. transformation array)
        _obj = _obj.map(function (currentValue) {
            return transformKeyNames(currentValue);
        });
    }
    else if (typeof _obj === 'object') {
        Object.keys(_obj).forEach(function (key) {
            // Replace the key name with the snake_case
            // Then strip cld prefix if it exists (with an optional dash or underscore)
            var kebabKey = key.replace(/-/g, '_').toLocaleLowerCase().replace(/^cld(-|_)?/, '');
            var kebabValue = transformKeyNames(_obj[key]);
            delete _obj[key];
            _obj[kebabKey] = kebabValue;
        });
    }
    return _obj;
};
exports.transformKeyNames = transformKeyNames;
var Cloudinary = (function () {
    function Cloudinary(cloudinaryJsLib, configuration) {
        // Cloudinary JS already clones the given configuration so no need to clone it here too
        if (cloudinaryJsLib.CloudinaryJQuery) {
            this._cloudinaryInstance = new cloudinaryJsLib.CloudinaryJQuery(configuration);
        }
        else {
            this._cloudinaryInstance = new cloudinaryJsLib.Cloudinary(configuration);
        }
    }
    Object.defineProperty(Cloudinary.prototype, "cloudinaryInstance", {
        get: function () {
            return this._cloudinaryInstance;
        },
        enumerable: true,
        configurable: true
    });
    Cloudinary.prototype.config = function () {
        return this._cloudinaryInstance.config();
    };
    Cloudinary.prototype.url = function () {
        var parameters = [];
        for (var _i = 0; _i < arguments.length; _i++) {
            parameters[_i] = arguments[_i];
        }
        return (_a = this._cloudinaryInstance).url.apply(_a, parameters);
        var _a;
    };
    Cloudinary.prototype.imageTag = function () {
        var parameters = [];
        for (var _i = 0; _i < arguments.length; _i++) {
            parameters[_i] = arguments[_i];
        }
        return (_a = this._cloudinaryInstance).imageTag.apply(_a, parameters);
        var _a;
    };
    Cloudinary.prototype.videoTag = function () {
        var parameters = [];
        for (var _i = 0; _i < arguments.length; _i++) {
            parameters[_i] = arguments[_i];
        }
        return (_a = this._cloudinaryInstance).videoTag.apply(_a, parameters);
        var _a;
    };
    Cloudinary.prototype.responsive = function (img, options) {
        // Cloudinary underlying JS library will handle responsive behavior
        this._cloudinaryInstance.cloudinary_update(img, options);
        this._cloudinaryInstance.responsive(options, false);
    };
    /**
     * Transforms a set of attributes and chained transformations to an options object that can be consumed by Cloudinary JS API
     * @param attributes HTML element attributes
     * @param childTransformations QueryList with the element's <cl-transformation> children for chained transformations
     * @param cloudinary Cloudinary service
     * @returns An options object that can be consumed by Cloudinary JS API
     */
    Cloudinary.prototype.toCloudinaryAttributes = function (attributes, childTransformations) {
        var _this = this;
        var options = transformKeyNames(attributes);
        // Add chained transformations
        if (childTransformations && childTransformations.length > 0) {
            options.transformation = [];
            // Support chained transformations
            childTransformations.forEach(function (transformation) {
                options.transformation.push(_this.toCloudinaryAttributes(transformation.getAttributes()));
            });
        }
        // Add responsiveness
        if (options.responsive === '' || options.responsive === 'true' || options.responsive === true) {
            options.responsive = true;
        }
        return options;
    };
    ;
    return Cloudinary;
}());
exports.Cloudinary = Cloudinary;
/* Return a provider object that creates our configurable service */
function provideCloudinary(cloudinaryJsLib, configuration) {
    return { provide: Cloudinary, useFactory: function () { return new Cloudinary(cloudinaryJsLib, configuration); } };
}
exports.provideCloudinary = provideCloudinary;
;
var isBrowser = function () {
    return typeof window !== 'undefined';
};
exports.isBrowser = isBrowser;
//# sourceMappingURL=cloudinary.service.js.map

/***/ }),

/***/ "./node_modules/cloudinary-core/cloudinary-core.js":
/*!*********************************************************!*\
  !*** ./node_modules/cloudinary-core/cloudinary-core.js ***!
  \*********************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

/**
 * cloudinary-core.js
 * Cloudinary's JavaScript library - Version 2.6.2
 * Copyright Cloudinary
 * see https://github.com/cloudinary/cloudinary_js
 *
 */
(function webpackUniversalModuleDefinition(root, factory) {
	if(true)
		module.exports = factory(__webpack_require__(/*! lodash/assign */ "./node_modules/lodash/assign.js"), __webpack_require__(/*! lodash/cloneDeep */ "./node_modules/lodash/cloneDeep.js"), __webpack_require__(/*! lodash/compact */ "./node_modules/lodash/compact.js"), __webpack_require__(/*! lodash/difference */ "./node_modules/lodash/difference.js"), __webpack_require__(/*! lodash/functions */ "./node_modules/lodash/functions.js"), __webpack_require__(/*! lodash/identity */ "./node_modules/lodash/identity.js"), __webpack_require__(/*! lodash/includes */ "./node_modules/lodash/includes.js"), __webpack_require__(/*! lodash/isArray */ "./node_modules/lodash/isArray.js"), __webpack_require__(/*! lodash/isElement */ "./node_modules/lodash/isElement.js"), __webpack_require__(/*! lodash/isFunction */ "./node_modules/lodash/isFunction.js"), __webpack_require__(/*! lodash/isPlainObject */ "./node_modules/lodash/isPlainObject.js"), __webpack_require__(/*! lodash/isString */ "./node_modules/lodash/isString.js"), __webpack_require__(/*! lodash/merge */ "./node_modules/lodash/merge.js"), __webpack_require__(/*! lodash/trim */ "./node_modules/lodash/trim.js"));
	else {}
})(this, function(__WEBPACK_EXTERNAL_MODULE_lodash_assign__, __WEBPACK_EXTERNAL_MODULE_lodash_cloneDeep__, __WEBPACK_EXTERNAL_MODULE_lodash_compact__, __WEBPACK_EXTERNAL_MODULE_lodash_difference__, __WEBPACK_EXTERNAL_MODULE_lodash_functions__, __WEBPACK_EXTERNAL_MODULE_lodash_identity__, __WEBPACK_EXTERNAL_MODULE_lodash_includes__, __WEBPACK_EXTERNAL_MODULE_lodash_isArray__, __WEBPACK_EXTERNAL_MODULE_lodash_isElement__, __WEBPACK_EXTERNAL_MODULE_lodash_isFunction__, __WEBPACK_EXTERNAL_MODULE_lodash_isPlainObject__, __WEBPACK_EXTERNAL_MODULE_lodash_isString__, __WEBPACK_EXTERNAL_MODULE_lodash_merge__, __WEBPACK_EXTERNAL_MODULE_lodash_trim__) {
return /******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, { enumerable: true, get: getter });
/******/ 		}
/******/ 	};
/******/
/******/ 	// define __esModule on exports
/******/ 	__webpack_require__.r = function(exports) {
/******/ 		if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 			Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 		}
/******/ 		Object.defineProperty(exports, '__esModule', { value: true });
/******/ 	};
/******/
/******/ 	// create a fake namespace object
/******/ 	// mode & 1: value is a module id, require it
/******/ 	// mode & 2: merge all properties of value into the ns
/******/ 	// mode & 4: return value when already ns object
/******/ 	// mode & 8|1: behave like require
/******/ 	__webpack_require__.t = function(value, mode) {
/******/ 		if(mode & 1) value = __webpack_require__(value);
/******/ 		if(mode & 8) return value;
/******/ 		if((mode & 4) && typeof value === 'object' && value && value.__esModule) return value;
/******/ 		var ns = Object.create(null);
/******/ 		__webpack_require__.r(ns);
/******/ 		Object.defineProperty(ns, 'default', { enumerable: true, value: value });
/******/ 		if(mode & 2 && typeof value != 'string') for(var key in value) __webpack_require__.d(ns, key, function(key) { return value[key]; }.bind(null, key));
/******/ 		return ns;
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = "./src/namespace/cloudinary-core.js");
/******/ })
/************************************************************************/
/******/ ({

/***/ "./src/cloudinary.js":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _configuration__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("./src/configuration.js");
/* harmony import */ var _tags_htmltag__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__("./src/tags/htmltag.js");
/* harmony import */ var _tags_imagetag__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__("./src/tags/imagetag.js");
/* harmony import */ var _tags_picturetag__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__("./src/tags/picturetag.js");
/* harmony import */ var _tags_sourcetag__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__("./src/tags/sourcetag.js");
/* harmony import */ var _transformation__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__("./src/transformation.js");
/* harmony import */ var _url__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__("./src/url.js");
/* harmony import */ var _tags_videotag__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__("./src/tags/videotag.js");
/* harmony import */ var _constants__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__("./src/constants.js");
/* harmony import */ var _util__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__("./src/util/lodash.js");
function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

var applyBreakpoints, closestAbove, defaultBreakpoints, findContainerWidth, maxWidth, updateDpr;











defaultBreakpoints = function defaultBreakpoints(width) {
  var steps = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : 100;
  return steps * Math.ceil(width / steps);
};

closestAbove = function closestAbove(list, value) {
  var i;
  i = list.length - 2;

  while (i >= 0 && list[i] >= value) {
    i--;
  }

  return list[i + 1];
};

applyBreakpoints = function applyBreakpoints(tag, width, steps, options) {
  var ref, ref1, ref2, responsive_use_breakpoints;
  responsive_use_breakpoints = (ref = (ref1 = (ref2 = options['responsive_use_breakpoints']) != null ? ref2 : options['responsive_use_stoppoints']) != null ? ref1 : this.config('responsive_use_breakpoints')) != null ? ref : this.config('responsive_use_stoppoints');

  if (!responsive_use_breakpoints || responsive_use_breakpoints === 'resize' && !options.resizing) {
    return width;
  } else {
    return this.calc_breakpoint(tag, width, steps);
  }
};

findContainerWidth = function findContainerWidth(element) {
  var containerWidth, style;
  containerWidth = 0;

  while ((element = element != null ? element.parentNode : void 0) instanceof Element && !containerWidth) {
    style = window.getComputedStyle(element);

    if (!/^inline/.test(style.display)) {
      containerWidth = Object(_util__WEBPACK_IMPORTED_MODULE_9__["width"])(element);
    }
  }

  return containerWidth;
};

updateDpr = function updateDpr(dataSrc, roundDpr) {
  return dataSrc.replace(/\bdpr_(1\.0|auto)\b/g, 'dpr_' + this.device_pixel_ratio(roundDpr));
};

maxWidth = function maxWidth(requiredWidth, tag) {
  var imageWidth;
  imageWidth = Object(_util__WEBPACK_IMPORTED_MODULE_9__["getData"])(tag, 'width') || 0;

  if (requiredWidth > imageWidth) {
    imageWidth = requiredWidth;
    Object(_util__WEBPACK_IMPORTED_MODULE_9__["setData"])(tag, 'width', requiredWidth);
  }

  return imageWidth;
};

var Cloudinary =
/*#__PURE__*/
function () {
  /**
   * Main Cloudinary class
   * @class Cloudinary
   * @param {Object} options - options to configure Cloudinary
   * @see Configuration for more details
   * @example
   *    var cl = new cloudinary.Cloudinary( { cloud_name: "mycloud"});
   *    var imgTag = cl.image("myPicID");
   */
  function Cloudinary(options) {
    _classCallCheck(this, Cloudinary);

    var configuration;
    this.devicePixelRatioCache = {};
    this.responsiveConfig = {};
    this.responsiveResizeInitialized = false;
    configuration = new _configuration__WEBPACK_IMPORTED_MODULE_0__["default"](options); // Provided for backward compatibility

    this.config = function (newConfig, newValue) {
      return configuration.config(newConfig, newValue);
    };
    /**
     * Use \<meta\> tags in the document to configure this Cloudinary instance.
     * @return {Cloudinary} this for chaining
     */


    this.fromDocument = function () {
      configuration.fromDocument();
      return this;
    };
    /**
     * Use environment variables to configure this Cloudinary instance.
     * @return {Cloudinary} this for chaining
     */


    this.fromEnvironment = function () {
      configuration.fromEnvironment();
      return this;
    };
    /**
     * Initialize configuration.
     * @function Cloudinary#init
     * @see Configuration#init
     * @return {Cloudinary} this for chaining
     */


    this.init = function () {
      configuration.init();
      return this;
    };
  }
  /**
   * Convenience constructor
   * @param {Object} options
   * @return {Cloudinary}
   * @example cl = cloudinary.Cloudinary.new( { cloud_name: "mycloud"})
   */


  _createClass(Cloudinary, [{
    key: "url",

    /**
     * Generate an resource URL.
     * @function Cloudinary#url
     * @param {string} publicId - the public ID of the resource
     * @param {Object} [options] - options for the tag and transformations, possible values include all {@link Transformation} parameters
     *                          and {@link Configuration} parameters
     * @param {string} [options.type='upload'] - the classification of the resource
     * @param {Object} [options.resource_type='image'] - the type of the resource
     * @return {string} The resource URL
     */
    value: function url(publicId) {
      var options = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};
      return Object(_url__WEBPACK_IMPORTED_MODULE_6__["default"])(publicId, options, this.config());
    }
    /**
     * Generate an video resource URL.
     * @function Cloudinary#video_url
     * @param {string} publicId - the public ID of the resource
     * @param {Object} [options] - options for the tag and transformations, possible values include all {@link Transformation} parameters
     *                          and {@link Configuration} parameters
     * @param {string} [options.type='upload'] - the classification of the resource
     * @return {string} The video URL
     */

  }, {
    key: "video_url",
    value: function video_url(publicId, options) {
      options = Object(_util__WEBPACK_IMPORTED_MODULE_9__["assign"])({
        resource_type: 'video'
      }, options);
      return this.url(publicId, options);
    }
    /**
     * Generate an video thumbnail URL.
     * @function Cloudinary#video_thumbnail_url
     * @param {string} publicId - the public ID of the resource
     * @param {Object} [options] - options for the tag and transformations, possible values include all {@link Transformation} parameters
     *                          and {@link Configuration} parameters
     * @param {string} [options.type='upload'] - the classification of the resource
     * @return {string} The video thumbnail URL
     */

  }, {
    key: "video_thumbnail_url",
    value: function video_thumbnail_url(publicId, options) {
      options = Object(_util__WEBPACK_IMPORTED_MODULE_9__["assign"])({}, _constants__WEBPACK_IMPORTED_MODULE_8__["DEFAULT_POSTER_OPTIONS"], options);
      return this.url(publicId, options);
    }
    /**
     * Generate a string representation of the provided transformation options.
     * @function Cloudinary#transformation_string
     * @param {Object} options - the transformation options
     * @returns {string} The transformation string
     */

  }, {
    key: "transformation_string",
    value: function transformation_string(options) {
      return new _transformation__WEBPACK_IMPORTED_MODULE_5__["default"](options).serialize();
    }
    /**
     * Generate an image tag.
     * @function Cloudinary#image
     * @param {string} publicId - the public ID of the image
     * @param {Object} [options] - options for the tag and transformations
     * @return {HTMLImageElement} an image tag element
     */

  }, {
    key: "image",
    value: function image(publicId) {
      var options = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};
      var client_hints, img, ref;
      img = this.imageTag(publicId, options);
      client_hints = (ref = options.client_hints != null ? options.client_hints : this.config('client_hints')) != null ? ref : false;

      if (options.src == null && !client_hints) {
        // src must be removed before creating the DOM element to avoid loading the image
        img.setAttr("src", '');
      }

      img = img.toDOM();

      if (!client_hints) {
        // cache the image src
        Object(_util__WEBPACK_IMPORTED_MODULE_9__["setData"])(img, 'src-cache', this.url(publicId, options)); // set image src taking responsiveness in account

        this.cloudinary_update(img, options);
      }

      return img;
    }
    /**
     * Creates a new ImageTag instance, configured using this own's configuration.
     * @function Cloudinary#imageTag
     * @param {string} publicId - the public ID of the resource
     * @param {Object} options - additional options to pass to the new ImageTag instance
     * @return {ImageTag} An ImageTag that is attached (chained) to this Cloudinary instance
     */

  }, {
    key: "imageTag",
    value: function imageTag(publicId, options) {
      var tag;
      tag = new _tags_imagetag__WEBPACK_IMPORTED_MODULE_2__["default"](publicId, this.config());
      tag.transformation().fromOptions(options);
      return tag;
    }
    /**
     * Creates a new PictureTag instance, configured using this own's configuration.
     * @function Cloudinary#PictureTag
     * @param {string} publicId - the public ID of the resource
     * @param {Object} options - additional options to pass to the new ImageTag instance
     * @return {PictureTag} An PictureTag that is attached (chained) to this Cloudinary instance
     */

  }, {
    key: "pictureTag",
    value: function pictureTag(publicId, options) {
      var tag;
      tag = new _tags_picturetag__WEBPACK_IMPORTED_MODULE_3__["default"](publicId, this.config());
      tag.transformation().fromOptions(options);
      return tag;
    }
    /**
     * Creates a new SourceTag instance, configured using this own's configuration.
     * @function Cloudinary#SourceTag
     * @param {string} publicId - the public ID of the resource
     * @param {Object} options - additional options to pass to the new ImageTag instance
     * @return {SourceTag} An PictureTag that is attached (chained) to this Cloudinary instance
     */

  }, {
    key: "sourceTag",
    value: function sourceTag(publicId, options) {
      var tag;
      tag = new _tags_sourcetag__WEBPACK_IMPORTED_MODULE_4__["default"](publicId, this.config());
      tag.transformation().fromOptions(options);
      return tag;
    }
    /**
     * Generate an image tag for the video thumbnail.
     * @function Cloudinary#video_thumbnail
     * @param {string} publicId - the public ID of the video
     * @param {Object} [options] - options for the tag and transformations
     * @return {HTMLImageElement} An image tag element
     */

  }, {
    key: "video_thumbnail",
    value: function video_thumbnail(publicId, options) {
      return this.image(publicId, Object(_util__WEBPACK_IMPORTED_MODULE_9__["merge"])({}, _constants__WEBPACK_IMPORTED_MODULE_8__["DEFAULT_POSTER_OPTIONS"], options));
    }
    /**
     * @function Cloudinary#facebook_profile_image
     * @param {string} publicId - the public ID of the image
     * @param {Object} [options] - options for the tag and transformations
     * @return {HTMLImageElement} an image tag element
     */

  }, {
    key: "facebook_profile_image",
    value: function facebook_profile_image(publicId, options) {
      return this.image(publicId, Object(_util__WEBPACK_IMPORTED_MODULE_9__["assign"])({
        type: 'facebook'
      }, options));
    }
    /**
     * @function Cloudinary#twitter_profile_image
     * @param {string} publicId - the public ID of the image
     * @param {Object} [options] - options for the tag and transformations
     * @return {HTMLImageElement} an image tag element
     */

  }, {
    key: "twitter_profile_image",
    value: function twitter_profile_image(publicId, options) {
      return this.image(publicId, Object(_util__WEBPACK_IMPORTED_MODULE_9__["assign"])({
        type: 'twitter'
      }, options));
    }
    /**
     * @function Cloudinary#twitter_name_profile_image
     * @param {string} publicId - the public ID of the image
     * @param {Object} [options] - options for the tag and transformations
     * @return {HTMLImageElement} an image tag element
     */

  }, {
    key: "twitter_name_profile_image",
    value: function twitter_name_profile_image(publicId, options) {
      return this.image(publicId, Object(_util__WEBPACK_IMPORTED_MODULE_9__["assign"])({
        type: 'twitter_name'
      }, options));
    }
    /**
     * @function Cloudinary#gravatar_image
     * @param {string} publicId - the public ID of the image
     * @param {Object} [options] - options for the tag and transformations
     * @return {HTMLImageElement} an image tag element
     */

  }, {
    key: "gravatar_image",
    value: function gravatar_image(publicId, options) {
      return this.image(publicId, Object(_util__WEBPACK_IMPORTED_MODULE_9__["assign"])({
        type: 'gravatar'
      }, options));
    }
    /**
     * @function Cloudinary#fetch_image
     * @param {string} publicId - the public ID of the image
     * @param {Object} [options] - options for the tag and transformations
     * @return {HTMLImageElement} an image tag element
     */

  }, {
    key: "fetch_image",
    value: function fetch_image(publicId, options) {
      return this.image(publicId, Object(_util__WEBPACK_IMPORTED_MODULE_9__["assign"])({
        type: 'fetch'
      }, options));
    }
    /**
     * @function Cloudinary#video
     * @param {string} publicId - the public ID of the image
     * @param {Object} [options] - options for the tag and transformations
     * @return {HTMLImageElement} an image tag element
     */

  }, {
    key: "video",
    value: function video(publicId) {
      var options = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};
      return this.videoTag(publicId, options).toHtml();
    }
    /**
     * Creates a new VideoTag instance, configured using this own's configuration.
     * @function Cloudinary#videoTag
     * @param {string} publicId - the public ID of the resource
     * @param {Object} options - additional options to pass to the new VideoTag instance
     * @return {VideoTag} A VideoTag that is attached (chained) to this Cloudinary instance
     */

  }, {
    key: "videoTag",
    value: function videoTag(publicId, options) {
      options = Object(_util__WEBPACK_IMPORTED_MODULE_9__["defaults"])({}, options, this.config());
      return new _tags_videotag__WEBPACK_IMPORTED_MODULE_7__["default"](publicId, options);
    }
    /**
     * Generate the URL of the sprite image
     * @function Cloudinary#sprite_css
     * @param {string} publicId - the public ID of the resource
     * @param {Object} [options] - options for the tag and transformations
     * @see {@link http://cloudinary.com/documentation/sprite_generation Sprite generation}
     */

  }, {
    key: "sprite_css",
    value: function sprite_css(publicId, options) {
      options = Object(_util__WEBPACK_IMPORTED_MODULE_9__["assign"])({
        type: 'sprite'
      }, options);

      if (!publicId.match(/.css$/)) {
        options.format = 'css';
      }

      return this.url(publicId, options);
    }
    /**
    * Initialize the responsive behaviour.<br>
    * Calls {@link Cloudinary#cloudinary_update} to modify image tags.
     * @function Cloudinary#responsive
    * @param {Object} options
    * @param {String} [options.responsive_class='cld-responsive'] - provide an alternative class used to locate img tags
    * @param {number} [options.responsive_debounce=100] - the debounce interval in milliseconds.
    * @param {boolean} [bootstrap=true] if true processes the img tags by calling cloudinary_update. When false the tags will be processed only after a resize event.
    * @see {@link Cloudinary#cloudinary_update} for additional configuration parameters
     */

  }, {
    key: "responsive",
    value: function responsive(options) {
      var _this = this;

      var bootstrap = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : true;
      var ref, ref1, ref2, responsiveClass, responsiveResize, timeout;
      this.responsiveConfig = Object(_util__WEBPACK_IMPORTED_MODULE_9__["merge"])(this.responsiveConfig || {}, options);
      responsiveClass = (ref = this.responsiveConfig['responsive_class']) != null ? ref : this.config('responsive_class');

      if (bootstrap) {
        this.cloudinary_update("img.".concat(responsiveClass, ", img.cld-hidpi"), this.responsiveConfig);
      }

      responsiveResize = (ref1 = (ref2 = this.responsiveConfig['responsive_resize']) != null ? ref2 : this.config('responsive_resize')) != null ? ref1 : true;

      if (responsiveResize && !this.responsiveResizeInitialized) {
        this.responsiveConfig.resizing = this.responsiveResizeInitialized = true;
        timeout = null;
        return window.addEventListener('resize', function () {
          var debounce, ref3, ref4, reset, run, wait, waitFunc;
          debounce = (ref3 = (ref4 = _this.responsiveConfig['responsive_debounce']) != null ? ref4 : _this.config('responsive_debounce')) != null ? ref3 : 100;

          reset = function reset() {
            if (timeout) {
              clearTimeout(timeout);
              return timeout = null;
            }
          };

          run = function run() {
            return _this.cloudinary_update("img.".concat(responsiveClass), _this.responsiveConfig);
          };

          waitFunc = function waitFunc() {
            reset();
            return run();
          };

          wait = function wait() {
            reset();
            return timeout = setTimeout(waitFunc, debounce);
          };

          if (debounce) {
            return wait();
          } else {
            return run();
          }
        });
      }
    }
    /**
     * @function Cloudinary#calc_breakpoint
     * @private
     * @ignore
     */

  }, {
    key: "calc_breakpoint",
    value: function calc_breakpoint(element, width, steps) {
      var breakpoints = Object(_util__WEBPACK_IMPORTED_MODULE_9__["getData"])(element, 'breakpoints') || Object(_util__WEBPACK_IMPORTED_MODULE_9__["getData"])(element, 'stoppoints') || this.config('breakpoints') || this.config('stoppoints') || defaultBreakpoints;

      if (Object(_util__WEBPACK_IMPORTED_MODULE_9__["isFunction"])(breakpoints)) {
        return breakpoints(width, steps);
      } else {
        if (Object(_util__WEBPACK_IMPORTED_MODULE_9__["isString"])(breakpoints)) {
          breakpoints = breakpoints.split(',').map(function (point) {
            return parseInt(point);
          }).sort(function (a, b) {
            return a - b;
          });
        }

        return closestAbove(breakpoints, width);
      }
    }
    /**
     * @function Cloudinary#calc_stoppoint
     * @deprecated Use {@link calc_breakpoint} instead.
     * @private
     * @ignore
     */

  }, {
    key: "calc_stoppoint",
    value: function calc_stoppoint(element, width, steps) {
      return this.calc_breakpoint(element, width, steps);
    }
    /**
     * @function Cloudinary#device_pixel_ratio
     * @private
     */

  }, {
    key: "device_pixel_ratio",
    value: function device_pixel_ratio(roundDpr) {
      roundDpr = roundDpr == null ? true : roundDpr;
      var dpr = (typeof window !== "undefined" && window !== null ? window.devicePixelRatio : void 0) || 1;

      if (roundDpr) {
        dpr = Math.ceil(dpr);
      }

      if (dpr <= 0 || dpr === 0 / 0) {
        dpr = 1;
      }

      var dprString = dpr.toString();

      if (dprString.match(/^\d+$/)) {
        dprString += '.0';
      }

      return dprString;
    }
    /**
    * Finds all `img` tags under each node and sets it up to provide the image through Cloudinary
    * @param {Element[]} nodes the parent nodes to search for img under
    * @param {Object} [options={}] options and transformations params
    * @function Cloudinary#processImageTags
     */

  }, {
    key: "processImageTags",
    value: function processImageTags(nodes, options) {
      if (Object(_util__WEBPACK_IMPORTED_MODULE_9__["isEmpty"])(nodes)) {
        // similar to `$.fn.cloudinary`
        return this;
      }

      options = Object(_util__WEBPACK_IMPORTED_MODULE_9__["defaults"])({}, options || {}, this.config());
      var images = nodes.filter(function (node) {
        return /^img$/i.test(node.tagName);
      }).map(function (node) {
        var imgOptions = Object(_util__WEBPACK_IMPORTED_MODULE_9__["assign"])({
          width: node.getAttribute('width'),
          height: node.getAttribute('height'),
          src: node.getAttribute('src')
        }, options);
        var publicId = imgOptions['source'] || imgOptions['src'];
        delete imgOptions['source'];
        delete imgOptions['src'];
        var attr = new _transformation__WEBPACK_IMPORTED_MODULE_5__["default"](imgOptions).toHtmlAttributes();
        Object(_util__WEBPACK_IMPORTED_MODULE_9__["setData"])(node, 'src-cache', Object(_url__WEBPACK_IMPORTED_MODULE_6__["default"])(publicId, imgOptions));
        node.setAttribute('width', attr.width);
        node.setAttribute('height', attr.height);
        return node;
      });
      this.cloudinary_update(images, options);
      return this;
    }
    /**
    * Update hidpi (dpr_auto) and responsive (w_auto) fields according to the current container size and the device pixel ratio.
    * Only images marked with the cld-responsive class have w_auto updated.
    * @function Cloudinary#cloudinary_update
    * @param {(Array|string|NodeList)} elements - the elements to modify
    * @param {Object} options
    * @param {boolean|string} [options.responsive_use_breakpoints=true]
    *  - when `true`, always use breakpoints for width
    * - when `"resize"` use exact width on first render and breakpoints on resize
    * - when `false` always use exact width
    * @param {boolean} [options.responsive] - if `true`, enable responsive on this element. Can be done by adding cld-responsive.
    * @param {boolean} [options.responsive_preserve_height] - if set to true, original css height is preserved.
    *   Should only be used if the transformation supports different aspect ratios.
     */

  }, {
    key: "cloudinary_update",
    value: function cloudinary_update(elements, options) {
      var _this2 = this;

      var containerWidth, dataSrc, match, ref4, requiredWidth;

      if (elements === null) {
        return this;
      }

      if (options == null) {
        options = {};
      }

      var responsive = options.responsive != null ? options.responsive : this.config('responsive');

      elements = function () {
        switch (false) {
          case !Object(_util__WEBPACK_IMPORTED_MODULE_9__["isArray"])(elements):
            return elements;

          case elements.constructor.name !== "NodeList":
            return elements;

          case !Object(_util__WEBPACK_IMPORTED_MODULE_9__["isString"])(elements):
            return document.querySelectorAll(elements);

          default:
            return [elements];
        }
      }();

      var responsiveClass;

      if (this.responsiveConfig && this.responsiveConfig.responsive_class != null) {
        responsiveClass = this.responsiveConfig.responsive_class;
      } else if (options.responsive_class != null) {
        responsiveClass = options.responsive_class;
      } else {
        responsiveClass = this.config('responsive_class');
      }

      var roundDpr = options.round_dpr != null ? options.round_dpr : this.config('round_dpr');
      elements.forEach(function (tag) {
        if (/img/i.test(tag.tagName)) {
          var setUrl = true;

          if (responsive) {
            Object(_util__WEBPACK_IMPORTED_MODULE_9__["addClass"])(tag, responsiveClass);
          }

          dataSrc = Object(_util__WEBPACK_IMPORTED_MODULE_9__["getData"])(tag, 'src-cache') || Object(_util__WEBPACK_IMPORTED_MODULE_9__["getData"])(tag, 'src');

          if (!Object(_util__WEBPACK_IMPORTED_MODULE_9__["isEmpty"])(dataSrc)) {
            // Update dpr according to the device's devicePixelRatio
            dataSrc = updateDpr.call(_this2, dataSrc, roundDpr);

            if (_tags_htmltag__WEBPACK_IMPORTED_MODULE_1__["default"].isResponsive(tag, responsiveClass)) {
              containerWidth = findContainerWidth(tag);

              if (containerWidth !== 0) {
                switch (false) {
                  case !/w_auto:breakpoints/.test(dataSrc):
                    requiredWidth = maxWidth(containerWidth, tag);
                    dataSrc = dataSrc.replace(/w_auto:breakpoints([_0-9]*)(:[0-9]+)?/, "w_auto:breakpoints$1:".concat(requiredWidth));
                    break;

                  case !(match = /w_auto(:(\d+))?/.exec(dataSrc)):
                    requiredWidth = applyBreakpoints.call(_this2, tag, containerWidth, match[2], options);
                    requiredWidth = maxWidth(requiredWidth, tag);
                    dataSrc = dataSrc.replace(/w_auto[^,\/]*/g, "w_".concat(requiredWidth));
                }

                Object(_util__WEBPACK_IMPORTED_MODULE_9__["removeAttribute"])(tag, 'width');

                if (!options.responsive_preserve_height) {
                  Object(_util__WEBPACK_IMPORTED_MODULE_9__["removeAttribute"])(tag, 'height');
                }
              } else {
                // Container doesn't know the size yet - usually because the image is hidden or outside the DOM.
                setUrl = false;
              }
            }

            if (setUrl) {
              Object(_util__WEBPACK_IMPORTED_MODULE_9__["setAttribute"])(tag, 'src', dataSrc);
            }
          }
        }
      });
      return this;
    }
    /**
     * Provide a transformation object, initialized with own's options, for chaining purposes.
     * @function Cloudinary#transformation
     * @param {Object} options
     * @return {Transformation}
     */

  }, {
    key: "transformation",
    value: function transformation(options) {
      return _transformation__WEBPACK_IMPORTED_MODULE_5__["default"].new(this.config()).fromOptions(options).setParent(this);
    }
  }], [{
    key: "new",
    value: function _new(options) {
      return new this(options);
    }
  }]);

  return Cloudinary;
}();

Object(_util__WEBPACK_IMPORTED_MODULE_9__["assign"])(Cloudinary, _constants__WEBPACK_IMPORTED_MODULE_8__);
/* harmony default export */ __webpack_exports__["default"] = (Cloudinary);

/***/ }),

/***/ "./src/condition.js":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _expression__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("./src/expression.js");
function _typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } return _assertThisInitialized(self); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }

function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }



var Condition =
/*#__PURE__*/
function (_Expression) {
  _inherits(Condition, _Expression);

  /**
   * Represents a transformation condition
   * @param {string} conditionStr - a condition in string format
   * @class Condition
   * @example
   * // normally this class is not instantiated directly
   * var tr = cloudinary.Transformation.new()
   *    .if().width( ">", 1000).and().aspectRatio("<", "3:4").then()
   *      .width(1000)
   *      .crop("scale")
   *    .else()
   *      .width(500)
   *      .crop("scale")
   *
   * var tr = cloudinary.Transformation.new()
   *    .if("w > 1000 and aspectRatio < 3:4")
   *      .width(1000)
   *      .crop("scale")
   *    .else()
   *      .width(500)
   *      .crop("scale")
   *
   */
  function Condition(conditionStr) {
    _classCallCheck(this, Condition);

    return _possibleConstructorReturn(this, _getPrototypeOf(Condition).call(this, conditionStr));
  }
  /**
   * @function Condition#height
   * @param {string} operator the comparison operator (e.g. "<", "lt")
   * @param {string|number} value the right hand side value
   * @return {Condition} this condition
   */


  _createClass(Condition, [{
    key: "height",
    value: function height(operator, value) {
      return this.predicate("h", operator, value);
    }
    /**
     * @function Condition#width
     * @param {string} operator the comparison operator (e.g. "<", "lt")
     * @param {string|number} value the right hand side value
     * @return {Condition} this condition
     */

  }, {
    key: "width",
    value: function width(operator, value) {
      return this.predicate("w", operator, value);
    }
    /**
     * @function Condition#aspectRatio
     * @param {string} operator the comparison operator (e.g. "<", "lt")
     * @param {string|number} value the right hand side value
     * @return {Condition} this condition
     */

  }, {
    key: "aspectRatio",
    value: function aspectRatio(operator, value) {
      return this.predicate("ar", operator, value);
    }
    /**
     * @function Condition#pages
     * @param {string} operator the comparison operator (e.g. "<", "lt")
     * @param {string|number} value the right hand side value
     * @return {Condition} this condition
     */

  }, {
    key: "pageCount",
    value: function pageCount(operator, value) {
      return this.predicate("pc", operator, value);
    }
    /**
     * @function Condition#faces
     * @param {string} operator the comparison operator (e.g. "<", "lt")
     * @param {string|number} value the right hand side value
     * @return {Condition} this condition
     */

  }, {
    key: "faceCount",
    value: function faceCount(operator, value) {
      return this.predicate("fc", operator, value);
    }
  }]);

  return Condition;
}(_expression__WEBPACK_IMPORTED_MODULE_0__["default"]);

/* harmony default export */ __webpack_exports__["default"] = (Condition);

/***/ }),

/***/ "./src/configuration.js":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _util__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("./src/util/lodash.js");
function _slicedToArray(arr, i) { return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _nonIterableRest(); }

function _nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance"); }

function _iterableToArrayLimit(arr, i) { var _arr = []; var _n = true; var _d = false; var _e = undefined; try { for (var _i = arr[Symbol.iterator](), _s; !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i["return"] != null) _i["return"](); } finally { if (_d) throw _e; } } return _arr; }

function _arrayWithHoles(arr) { if (Array.isArray(arr)) return arr; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

/**
 * Cloudinary configuration class
 * Depends on 'utils'
 */

/**
 * Defaults configuration.
 */

var Configuration =
/*#__PURE__*/
function () {
  /**
   * Cloudinary configuration class
   * @constructor Configuration
   * @param {Object} options - configuration parameters
   */
  function Configuration(options) {
    _classCallCheck(this, Configuration);

    this.configuration = options == null ? {} : Object(_util__WEBPACK_IMPORTED_MODULE_0__["cloneDeep"])(options);
    Object(_util__WEBPACK_IMPORTED_MODULE_0__["defaults"])(this.configuration, DEFAULT_CONFIGURATION_PARAMS);
  }
  /**
   * Initialize the configuration.
   * The function first tries to retrieve the configuration form the environment and then from the document.
   * @function Configuration#init
   * @return {Configuration} returns this for chaining
   * @see fromDocument
   * @see fromEnvironment
   */


  _createClass(Configuration, [{
    key: "init",
    value: function init() {
      this.fromEnvironment();
      this.fromDocument();
      return this;
    }
    /**
     * Set a new configuration item
     * @function Configuration#set
     * @param {string} name - the name of the item to set
     * @param {*} value - the value to be set
     * @return {Configuration}
     *
     */

  }, {
    key: "set",
    value: function set(name, value) {
      this.configuration[name] = value;
      return this;
    }
    /**
     * Get the value of a configuration item
     * @function Configuration#get
     * @param {string} name - the name of the item to set
     * @return {*} the configuration item
     */

  }, {
    key: "get",
    value: function get(name) {
      return this.configuration[name];
    }
  }, {
    key: "merge",
    value: function merge(config) {
      Object(_util__WEBPACK_IMPORTED_MODULE_0__["assign"])(this.configuration, Object(_util__WEBPACK_IMPORTED_MODULE_0__["cloneDeep"])(config));
      return this;
    }
    /**
     * Initialize Cloudinary from HTML meta tags.
     * @function Configuration#fromDocument
     * @return {Configuration}
     * @example <meta name="cloudinary_cloud_name" content="mycloud">
     *
     */

  }, {
    key: "fromDocument",
    value: function fromDocument() {
      var el, i, len, meta_elements;
      meta_elements = typeof document !== "undefined" && document !== null ? document.querySelectorAll('meta[name^="cloudinary_"]') : void 0;

      if (meta_elements) {
        for (i = 0, len = meta_elements.length; i < len; i++) {
          el = meta_elements[i];
          this.configuration[el.getAttribute('name').replace('cloudinary_', '')] = el.getAttribute('content');
        }
      }

      return this;
    }
    /**
     * Initialize Cloudinary from the `CLOUDINARY_URL` environment variable.
     *
     * This function will only run under Node.js environment.
     * @function Configuration#fromEnvironment
     * @requires Node.js
     */

  }, {
    key: "fromEnvironment",
    value: function fromEnvironment() {
      var _this = this;

      var cloudinary_url, query, uri, uriRegex;

      if (typeof process !== "undefined" && process !== null && process.env && process.env.CLOUDINARY_URL) {
        cloudinary_url = process.env.CLOUDINARY_URL;
        uriRegex = /cloudinary:\/\/(?:(\w+)(?:\:([\w-]+))?@)?([\w\.-]+)(?:\/([^?]*))?(?:\?(.+))?/;
        uri = uriRegex.exec(cloudinary_url);

        if (uri) {
          if (uri[3] != null) {
            this.configuration['cloud_name'] = uri[3];
          }

          if (uri[1] != null) {
            this.configuration['api_key'] = uri[1];
          }

          if (uri[2] != null) {
            this.configuration['api_secret'] = uri[2];
          }

          if (uri[4] != null) {
            this.configuration['private_cdn'] = uri[4] != null;
          }

          if (uri[4] != null) {
            this.configuration['secure_distribution'] = uri[4];
          }

          query = uri[5];

          if (query != null) {
            query.split('&').forEach(function (value) {
              var _value$split = value.split('='),
                  _value$split2 = _slicedToArray(_value$split, 2),
                  k = _value$split2[0],
                  v = _value$split2[1];

              if (v == null) {
                v = true;
              }

              _this.configuration[k] = v;
            });
          }
        }
      }

      return this;
    }
    /**
     * Create or modify the Cloudinary client configuration
     *
     * Warning: `config()` returns the actual internal configuration object. modifying it will change the configuration.
     *
     * This is a backward compatibility method. For new code, use get(), merge() etc.
     * @function Configuration#config
     * @param {hash|string|boolean} new_config
     * @param {string} new_value
     * @returns {*} configuration, or value
     *
     * @see {@link fromEnvironment} for initialization using environment variables
     * @see {@link fromDocument} for initialization using HTML meta tags
     */

  }, {
    key: "config",
    value: function config(new_config, new_value) {
      switch (false) {
        case new_value === void 0:
          this.set(new_config, new_value);
          return this.configuration;

        case !Object(_util__WEBPACK_IMPORTED_MODULE_0__["isString"])(new_config):
          return this.get(new_config);

        case !Object(_util__WEBPACK_IMPORTED_MODULE_0__["isPlainObject"])(new_config):
          this.merge(new_config);
          return this.configuration;

        default:
          // Backward compatibility - return the internal object
          return this.configuration;
      }
    }
    /**
     * Returns a copy of the configuration parameters
     * @function Configuration#toOptions
     * @returns {Object} a key:value collection of the configuration parameters
     */

  }, {
    key: "toOptions",
    value: function toOptions() {
      return Object(_util__WEBPACK_IMPORTED_MODULE_0__["cloneDeep"])(this.configuration);
    }
  }]);

  return Configuration;
}();

var DEFAULT_CONFIGURATION_PARAMS = {
  responsive_class: 'cld-responsive',
  responsive_use_breakpoints: true,
  round_dpr: true,
  secure: (typeof window !== "undefined" && window !== null ? window.location ? window.location.protocol : void 0 : void 0) === 'https:'
};
Configuration.CONFIG_PARAMS = ["api_key", "api_secret", "callback", "cdn_subdomain", "cloud_name", "cname", "private_cdn", "protocol", "resource_type", "responsive", "responsive_class", "responsive_use_breakpoints", "responsive_width", "round_dpr", "secure", "secure_cdn_subdomain", "secure_distribution", "shorten", "type", "upload_preset", "url_suffix", "use_root_path", "version"];
/* harmony default export */ __webpack_exports__["default"] = (Configuration);

/***/ }),

/***/ "./src/constants.js":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "VERSION", function() { return VERSION; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CF_SHARED_CDN", function() { return CF_SHARED_CDN; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "OLD_AKAMAI_SHARED_CDN", function() { return OLD_AKAMAI_SHARED_CDN; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AKAMAI_SHARED_CDN", function() { return AKAMAI_SHARED_CDN; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SHARED_CDN", function() { return SHARED_CDN; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DEFAULT_POSTER_OPTIONS", function() { return DEFAULT_POSTER_OPTIONS; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DEFAULT_VIDEO_SOURCE_TYPES", function() { return DEFAULT_VIDEO_SOURCE_TYPES; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SEO_TYPES", function() { return SEO_TYPES; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DEFAULT_IMAGE_PARAMS", function() { return DEFAULT_IMAGE_PARAMS; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DEFAULT_VIDEO_PARAMS", function() { return DEFAULT_VIDEO_PARAMS; });
var VERSION = "2.5.0";
var CF_SHARED_CDN = "d3jpl91pxevbkh.cloudfront.net";
var OLD_AKAMAI_SHARED_CDN = "cloudinary-a.akamaihd.net";
var AKAMAI_SHARED_CDN = "res.cloudinary.com";
var SHARED_CDN = AKAMAI_SHARED_CDN;
var DEFAULT_POSTER_OPTIONS = {
  format: 'jpg',
  resource_type: 'video'
};
var DEFAULT_VIDEO_SOURCE_TYPES = ['webm', 'mp4', 'ogv'];
var SEO_TYPES = {
  "image/upload": "images",
  "image/private": "private_images",
  "image/authenticated": "authenticated_images",
  "raw/upload": "files",
  "video/upload": "videos"
};
/**
* @const {Object} Cloudinary.DEFAULT_IMAGE_PARAMS
* Defaults values for image parameters.
*
* (Previously defined using option_consume() )
 */

var DEFAULT_IMAGE_PARAMS = {
  resource_type: "image",
  transformation: [],
  type: 'upload'
};
/**
* Defaults values for video parameters.
* @const {Object} Cloudinary.DEFAULT_VIDEO_PARAMS
* (Previously defined using option_consume() )
 */

var DEFAULT_VIDEO_PARAMS = {
  fallback_content: '',
  resource_type: "video",
  source_transformation: {},
  source_types: DEFAULT_VIDEO_SOURCE_TYPES,
  transformation: [],
  type: 'upload'
};

/***/ }),

/***/ "./src/crc32.js":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _utf8_encode__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("./src/utf8_encode.js");
/**
 * CRC32 calculator
 * Depends on 'utf8_encode'
 */
var crc32;


crc32 = function crc32(str) {
  var crc, i, iTop, table, x, y; // http://kevin.vanzonneveld.net
  // +   original by: Webtoolkit.info (http://www.webtoolkit.info/)
  // +   improved by: T0bsn
  // +   improved by: http://stackoverflow.com/questions/2647935/javascript-crc32-function-and-php-crc32-not-matching
  // -    depends on: utf8_encode
  // *     example 1: crc32('Kevin van Zonneveld');
  // *     returns 1: 1249991249

  str = Object(_utf8_encode__WEBPACK_IMPORTED_MODULE_0__["default"])(str);
  table = '00000000 77073096 EE0E612C 990951BA 076DC419 706AF48F E963A535 9E6495A3 0EDB8832 79DCB8A4 E0D5E91E 97D2D988 09B64C2B 7EB17CBD E7B82D07 90BF1D91 1DB71064 6AB020F2 F3B97148 84BE41DE 1ADAD47D 6DDDE4EB F4D4B551 83D385C7 136C9856 646BA8C0 FD62F97A 8A65C9EC 14015C4F 63066CD9 FA0F3D63 8D080DF5 3B6E20C8 4C69105E D56041E4 A2677172 3C03E4D1 4B04D447 D20D85FD A50AB56B 35B5A8FA 42B2986C DBBBC9D6 ACBCF940 32D86CE3 45DF5C75 DCD60DCF ABD13D59 26D930AC 51DE003A C8D75180 BFD06116 21B4F4B5 56B3C423 CFBA9599 B8BDA50F 2802B89E 5F058808 C60CD9B2 B10BE924 2F6F7C87 58684C11 C1611DAB B6662D3D 76DC4190 01DB7106 98D220BC EFD5102A 71B18589 06B6B51F 9FBFE4A5 E8B8D433 7807C9A2 0F00F934 9609A88E E10E9818 7F6A0DBB 086D3D2D 91646C97 E6635C01 6B6B51F4 1C6C6162 856530D8 F262004E 6C0695ED 1B01A57B 8208F4C1 F50FC457 65B0D9C6 12B7E950 8BBEB8EA FCB9887C 62DD1DDF 15DA2D49 8CD37CF3 FBD44C65 4DB26158 3AB551CE A3BC0074 D4BB30E2 4ADFA541 3DD895D7 A4D1C46D D3D6F4FB 4369E96A 346ED9FC AD678846 DA60B8D0 44042D73 33031DE5 AA0A4C5F DD0D7CC9 5005713C 270241AA BE0B1010 C90C2086 5768B525 206F85B3 B966D409 CE61E49F 5EDEF90E 29D9C998 B0D09822 C7D7A8B4 59B33D17 2EB40D81 B7BD5C3B C0BA6CAD EDB88320 9ABFB3B6 03B6E20C 74B1D29A EAD54739 9DD277AF 04DB2615 73DC1683 E3630B12 94643B84 0D6D6A3E 7A6A5AA8 E40ECF0B 9309FF9D 0A00AE27 7D079EB1 F00F9344 8708A3D2 1E01F268 6906C2FE F762575D 806567CB 196C3671 6E6B06E7 FED41B76 89D32BE0 10DA7A5A 67DD4ACC F9B9DF6F 8EBEEFF9 17B7BE43 60B08ED5 D6D6A3E8 A1D1937E 38D8C2C4 4FDFF252 D1BB67F1 A6BC5767 3FB506DD 48B2364B D80D2BDA AF0A1B4C 36034AF6 41047A60 DF60EFC3 A867DF55 316E8EEF 4669BE79 CB61B38C BC66831A 256FD2A0 5268E236 CC0C7795 BB0B4703 220216B9 5505262F C5BA3BBE B2BD0B28 2BB45A92 5CB36A04 C2D7FFA7 B5D0CF31 2CD99E8B 5BDEAE1D 9B64C2B0 EC63F226 756AA39C 026D930A 9C0906A9 EB0E363F 72076785 05005713 95BF4A82 E2B87A14 7BB12BAE 0CB61B38 92D28E9B E5D5BE0D 7CDCEFB7 0BDBDF21 86D3D2D4 F1D4E242 68DDB3F8 1FDA836E 81BE16CD F6B9265B 6FB077E1 18B74777 88085AE6 FF0F6A70 66063BCA 11010B5C 8F659EFF F862AE69 616BFFD3 166CCF45 A00AE278 D70DD2EE 4E048354 3903B3C2 A7672661 D06016F7 4969474D 3E6E77DB AED16A4A D9D65ADC 40DF0B66 37D83BF0 A9BCAE53 DEBB9EC5 47B2CF7F 30B5FFE9 BDBDF21C CABAC28A 53B39330 24B4A3A6 BAD03605 CDD70693 54DE5729 23D967BF B3667A2E C4614AB8 5D681B02 2A6F2B94 B40BBE37 C30C8EA1 5A05DF1B 2D02EF8D';
  crc = 0;
  x = 0;
  y = 0;
  crc = crc ^ -1;
  i = 0;
  iTop = str.length;

  while (i < iTop) {
    y = (crc ^ str.charCodeAt(i)) & 0xFF;
    x = '0x' + table.substr(y * 9, 8);
    crc = crc >>> 8 ^ x;
    i++;
  }

  crc = crc ^ -1; //convert to unsigned 32-bit int if needed

  if (crc < 0) {
    crc += 4294967296;
  }

  return crc;
};

/* harmony default export */ __webpack_exports__["default"] = (crc32);

/***/ }),

/***/ "./src/expression.js":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

var Expression =
/*#__PURE__*/
function () {
  /**
   * Represents a transformation expression
   * @param {string} expressionStr - a expression in string format
   * @class Expression
   *
   */
  function Expression(expressionStr) {
    _classCallCheck(this, Expression);

    /**
     * @protected
     * @inner Expression-expressions
     */
    this.expressions = [];

    if (expressionStr != null) {
      this.expressions.push(Expression.normalize(expressionStr));
    }
  }
  /**
   * Convenience constructor method
   * @function Expression.new
   */


  _createClass(Expression, [{
    key: "serialize",

    /**
     * Serialize the expression
     * @return {string} the expression as a string
     */
    value: function serialize() {
      return Expression.normalize(this.expressions.join("_"));
    }
  }, {
    key: "toString",
    value: function toString() {
      return this.serialize();
    }
    /**
     * Get the parent transformation of this expression
     * @return Transformation
     */

  }, {
    key: "getParent",
    value: function getParent() {
      return this.parent;
    }
    /**
     * Set the parent transformation of this expression
     * @param {Transformation} the parent transformation
     * @return {Expression} this expression
     */

  }, {
    key: "setParent",
    value: function setParent(parent) {
      this.parent = parent;
      return this;
    }
    /**
     * Add a expression
     * @function Expression#predicate
     * @internal
     */

  }, {
    key: "predicate",
    value: function predicate(name, operator, value) {
      if (Expression.OPERATORS[operator] != null) {
        operator = Expression.OPERATORS[operator];
      }

      this.expressions.push("".concat(name, "_").concat(operator, "_").concat(value));
      return this;
    }
    /**
     * @function Expression#and
     */

  }, {
    key: "and",
    value: function and() {
      this.expressions.push("and");
      return this;
    }
    /**
     * @function Expression#or
     */

  }, {
    key: "or",
    value: function or() {
      this.expressions.push("or");
      return this;
    }
    /**
     * Conclude expression
     * @function Expression#then
     * @return {Transformation} the transformation this expression is defined for
     */

  }, {
    key: "then",
    value: function then() {
      return this.getParent().if(this.toString());
    }
    /**
     * @function Expression#height
     * @param {string} operator the comparison operator (e.g. "<", "lt")
     * @param {string|number} value the right hand side value
     * @return {Expression} this expression
     */

  }, {
    key: "height",
    value: function height(operator, value) {
      return this.predicate("h", operator, value);
    }
    /**
     * @function Expression#width
     * @param {string} operator the comparison operator (e.g. "<", "lt")
     * @param {string|number} value the right hand side value
     * @return {Expression} this expression
     */

  }, {
    key: "width",
    value: function width(operator, value) {
      return this.predicate("w", operator, value);
    }
    /**
     * @function Expression#aspectRatio
     * @param {string} operator the comparison operator (e.g. "<", "lt")
     * @param {string|number} value the right hand side value
     * @return {Expression} this expression
     */

  }, {
    key: "aspectRatio",
    value: function aspectRatio(operator, value) {
      return this.predicate("ar", operator, value);
    }
    /**
     * @function Expression#pages
     * @param {string} operator the comparison operator (e.g. "<", "lt")
     * @param {string|number} value the right hand side value
     * @return {Expression} this expression
     */

  }, {
    key: "pageCount",
    value: function pageCount(operator, value) {
      return this.predicate("pc", operator, value);
    }
    /**
     * @function Expression#faces
     * @param {string} operator the comparison operator (e.g. "<", "lt")
     * @param {string|number} value the right hand side value
     * @return {Expression} this expression
     */

  }, {
    key: "faceCount",
    value: function faceCount(operator, value) {
      return this.predicate("fc", operator, value);
    }
  }, {
    key: "value",
    value: function value(_value) {
      this.expressions.push(_value);
      return this;
    }
    /**
     */

  }], [{
    key: "new",
    value: function _new(expressionStr) {
      return new this(expressionStr);
    }
    /**
     * Normalize a string expression
     * @function Cloudinary#normalize
     * @param {string} expression a expression, e.g. "w gt 100", "width_gt_100", "width > 100"
     * @return {string} the normalized form of the value expression, e.g. "w_gt_100"
     */

  }, {
    key: "normalize",
    value: function normalize(expression) {
      var operators, pattern, replaceRE;

      if (expression == null) {
        return expression;
      }

      expression = String(expression);
      operators = "\\|\\||>=|<=|&&|!=|>|=|<|/|-|\\+|\\*";
      pattern = "((" + operators + ")(?=[ _])|" + Object.keys(Expression.PREDEFINED_VARS).join("|") + ")";
      replaceRE = new RegExp(pattern, "g");
      expression = expression.replace(replaceRE, function (match) {
        return Expression.OPERATORS[match] || Expression.PREDEFINED_VARS[match];
      });
      return expression.replace(/[ _]+/g, '_');
    }
  }, {
    key: "variable",
    value: function variable(name, value) {
      return new this(name).value(value);
    }
    /**
     * @returns Expression a new expression with the predefined variable "width"
     * @function Expression.width
     */

  }, {
    key: "width",
    value: function width() {
      return new this("width");
    }
    /**
     * @returns Expression a new expression with the predefined variable "height"
     * @function Expression.height
     */

  }, {
    key: "height",
    value: function height() {
      return new this("height");
    }
    /**
     * @returns Expression a new expression with the predefined variable "initialWidth"
     * @function Expression.initialWidth
     */

  }, {
    key: "initialWidth",
    value: function initialWidth() {
      return new this("initialWidth");
    }
    /**
     * @returns Expression a new expression with the predefined variable "initialHeight"
     * @function Expression.initialHeight
     */

  }, {
    key: "initialHeight",
    value: function initialHeight() {
      return new this("initialHeight");
    }
    /**
     * @returns Expression a new expression with the predefined variable "aspectRatio"
     * @function Expression.aspectRatio
     */

  }, {
    key: "aspectRatio",
    value: function aspectRatio() {
      return new this("aspectRatio");
    }
    /**
     * @returns Expression a new expression with the predefined variable "initialAspectRatio"
     * @function Expression.initialAspectRatio
     */

  }, {
    key: "initialAspectRatio",
    value: function initialAspectRatio() {
      return new this("initialAspectRatio");
    }
    /**
     * @returns Expression a new expression with the predefined variable "pageCount"
     * @function Expression.pageCount
     */

  }, {
    key: "pageCount",
    value: function pageCount() {
      return new this("pageCount");
    }
    /**
     * @returns Expression new expression with the predefined variable "faceCount"
     * @function Expression.faceCount
     */

  }, {
    key: "faceCount",
    value: function faceCount() {
      return new this("faceCount");
    }
    /**
     * @returns Expression a new expression with the predefined variable "currentPage"
     * @function Expression.currentPage
     */

  }, {
    key: "currentPage",
    value: function currentPage() {
      return new this("currentPage");
    }
    /**
     * @returns Expression a new expression with the predefined variable "tags"
     * @function Expression.tags
     */

  }, {
    key: "tags",
    value: function tags() {
      return new this("tags");
    }
    /**
     * @returns Expression a new expression with the predefined variable "pageX"
     * @function Expression.pageX
     */

  }, {
    key: "pageX",
    value: function pageX() {
      return new this("pageX");
    }
    /**
     * @returns Expression a new expression with the predefined variable "pageY"
     * @function Expression.pageY
     */

  }, {
    key: "pageY",
    value: function pageY() {
      return new this("pageY");
    }
  }]);

  return Expression;
}();
/**
 * @internal
 */


Expression.OPERATORS = {
  "=": 'eq',
  "!=": 'ne',
  "<": 'lt',
  ">": 'gt',
  "<=": 'lte',
  ">=": 'gte',
  "&&": 'and',
  "||": 'or',
  "*": "mul",
  "/": "div",
  "+": "add",
  "-": "sub"
};
/**
 * @internal
 */

Expression.PREDEFINED_VARS = {
  "aspect_ratio": "ar",
  "aspectRatio": "ar",
  "current_page": "cp",
  "currentPage": "cp",
  "face_count": "fc",
  "faceCount": "fc",
  "height": "h",
  "initial_aspect_ratio": "iar",
  "initial_height": "ih",
  "initial_width": "iw",
  "initialAspectRatio": "iar",
  "initialHeight": "ih",
  "initialWidth": "iw",
  "page_count": "pc",
  "page_x": "px",
  "page_y": "py",
  "pageCount": "pc",
  "pageX": "px",
  "pageY": "py",
  "tags": "tags",
  "width": "w"
};
/**
 * @internal
 */

Expression.BOUNDRY = "[ _]+";
/* harmony default export */ __webpack_exports__["default"] = (Expression);

/***/ }),

/***/ "./src/layer/fetchlayer.js":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _layer__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("./src/layer/layer.js");
/* harmony import */ var _util__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__("./src/util/lodash.js");
function _typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } return _assertThisInitialized(self); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }

function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }




var FetchLayer =
/*#__PURE__*/
function (_Layer) {
  _inherits(FetchLayer, _Layer);

  /**
   * @constructor FetchLayer
   * @param {Object|string} options - layer parameters or a url
   * @param {string} options.url the url of the image to fetch
   */
  function FetchLayer(options) {
    var _this;

    _classCallCheck(this, FetchLayer);

    _this = _possibleConstructorReturn(this, _getPrototypeOf(FetchLayer).call(this, options));

    if (Object(_util__WEBPACK_IMPORTED_MODULE_1__["isString"])(options)) {
      _this.options.url = options;
    } else if (options != null ? options.url : void 0) {
      _this.options.url = options.url;
    }

    return _this;
  }

  _createClass(FetchLayer, [{
    key: "url",
    value: function url(_url) {
      this.options.url = _url;
      return this;
    }
    /**
     * generate the string representation of the layer
     * @function FetchLayer#toString
     * @return {String}
     */

  }, {
    key: "toString",
    value: function toString() {
      return "fetch:".concat(Object(_util__WEBPACK_IMPORTED_MODULE_1__["base64EncodeURL"])(this.options.url));
    }
  }]);

  return FetchLayer;
}(_layer__WEBPACK_IMPORTED_MODULE_0__["default"]);

/* harmony default export */ __webpack_exports__["default"] = (FetchLayer);

/***/ }),

/***/ "./src/layer/layer.js":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _util__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("./src/util/lodash.js");
function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }



var Layer =
/*#__PURE__*/
function () {
  /**
   * Layer
   * @constructor Layer
   * @param {Object} options - layer parameters
   */
  function Layer(options) {
    var _this = this;

    _classCallCheck(this, Layer);

    this.options = {};

    if (options != null) {
      ["resourceType", "type", "publicId", "format"].forEach(function (key) {
        var ref;
        return _this.options[key] = (ref = options[key]) != null ? ref : options[Object(_util__WEBPACK_IMPORTED_MODULE_0__["snakeCase"])(key)];
      });
    }
  }

  _createClass(Layer, [{
    key: "resourceType",
    value: function resourceType(value) {
      this.options.resourceType = value;
      return this;
    }
  }, {
    key: "type",
    value: function type(value) {
      this.options.type = value;
      return this;
    }
  }, {
    key: "publicId",
    value: function publicId(value) {
      this.options.publicId = value;
      return this;
    }
    /**
     * Get the public ID, formatted for layer parameter
     * @function Layer#getPublicId
     * @return {String} public ID
     */

  }, {
    key: "getPublicId",
    value: function getPublicId() {
      var ref;
      return (ref = this.options.publicId) != null ? ref.replace(/\//g, ":") : void 0;
    }
    /**
     * Get the public ID, with format if present
     * @function Layer#getFullPublicId
     * @return {String} public ID
     */

  }, {
    key: "getFullPublicId",
    value: function getFullPublicId() {
      if (this.options.format != null) {
        return this.getPublicId() + "." + this.options.format;
      } else {
        return this.getPublicId();
      }
    }
  }, {
    key: "format",
    value: function format(value) {
      this.options.format = value;
      return this;
    }
    /**
     * generate the string representation of the layer
     * @function Layer#toString
     */

  }, {
    key: "toString",
    value: function toString() {
      var components;
      components = [];

      if (this.options.publicId == null) {
        throw "Must supply publicId";
      }

      if (!(this.options.resourceType === "image")) {
        components.push(this.options.resourceType);
      }

      if (!(this.options.type === "upload")) {
        components.push(this.options.type);
      }

      components.push(this.getFullPublicId());
      return Object(_util__WEBPACK_IMPORTED_MODULE_0__["compact"])(components).join(":");
    }
  }]);

  return Layer;
}();

/* harmony default export */ __webpack_exports__["default"] = (Layer);

/***/ }),

/***/ "./src/layer/subtitleslayer.js":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _textlayer__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("./src/layer/textlayer.js");
function _typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } return _assertThisInitialized(self); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }

function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }



var SubtitlesLayer =
/*#__PURE__*/
function (_TextLayer) {
  _inherits(SubtitlesLayer, _TextLayer);

  /**
   * Represent a subtitles layer
   * @constructor SubtitlesLayer
   * @param {Object} options - layer parameters
   */
  function SubtitlesLayer(options) {
    var _this;

    _classCallCheck(this, SubtitlesLayer);

    _this = _possibleConstructorReturn(this, _getPrototypeOf(SubtitlesLayer).call(this, options));
    _this.options.resourceType = "subtitles";
    return _this;
  }

  return SubtitlesLayer;
}(_textlayer__WEBPACK_IMPORTED_MODULE_0__["default"]);

/* harmony default export */ __webpack_exports__["default"] = (SubtitlesLayer);

/***/ }),

/***/ "./src/layer/textlayer.js":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _layer__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("./src/layer/layer.js");
/* harmony import */ var _util__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__("./src/util/lodash.js");
function _typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } return _assertThisInitialized(self); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }

function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }




var TextLayer =
/*#__PURE__*/
function (_Layer) {
  _inherits(TextLayer, _Layer);

  /**
   * @constructor TextLayer
   * @param {Object} options - layer parameters
   */
  function TextLayer(options) {
    var _this;

    _classCallCheck(this, TextLayer);

    var keys;
    _this = _possibleConstructorReturn(this, _getPrototypeOf(TextLayer).call(this, options));
    keys = ["resourceType", "resourceType", "fontFamily", "fontSize", "fontWeight", "fontStyle", "textDecoration", "textAlign", "stroke", "letterSpacing", "lineSpacing", "text"];

    if (options != null) {
      keys.forEach(function (key) {
        var ref;
        return _this.options[key] = (ref = options[key]) != null ? ref : options[Object(_util__WEBPACK_IMPORTED_MODULE_1__["snakeCase"])(key)];
      });
    }

    _this.options.resourceType = "text";
    return _this;
  }

  _createClass(TextLayer, [{
    key: "resourceType",
    value: function resourceType(_resourceType) {
      throw "Cannot modify resourceType for text layers";
    }
  }, {
    key: "type",
    value: function type(_type) {
      throw "Cannot modify type for text layers";
    }
  }, {
    key: "format",
    value: function format(_format) {
      throw "Cannot modify format for text layers";
    }
  }, {
    key: "fontFamily",
    value: function fontFamily(_fontFamily) {
      this.options.fontFamily = _fontFamily;
      return this;
    }
  }, {
    key: "fontSize",
    value: function fontSize(_fontSize) {
      this.options.fontSize = _fontSize;
      return this;
    }
  }, {
    key: "fontWeight",
    value: function fontWeight(_fontWeight) {
      this.options.fontWeight = _fontWeight;
      return this;
    }
  }, {
    key: "fontStyle",
    value: function fontStyle(_fontStyle) {
      this.options.fontStyle = _fontStyle;
      return this;
    }
  }, {
    key: "textDecoration",
    value: function textDecoration(_textDecoration) {
      this.options.textDecoration = _textDecoration;
      return this;
    }
  }, {
    key: "textAlign",
    value: function textAlign(_textAlign) {
      this.options.textAlign = _textAlign;
      return this;
    }
  }, {
    key: "stroke",
    value: function stroke(_stroke) {
      this.options.stroke = _stroke;
      return this;
    }
  }, {
    key: "letterSpacing",
    value: function letterSpacing(_letterSpacing) {
      this.options.letterSpacing = _letterSpacing;
      return this;
    }
  }, {
    key: "lineSpacing",
    value: function lineSpacing(_lineSpacing) {
      this.options.lineSpacing = _lineSpacing;
      return this;
    }
  }, {
    key: "text",
    value: function text(_text) {
      this.options.text = _text;
      return this;
    }
    /**
     * generate the string representation of the layer
     * @function TextLayer#toString
     * @return {String}
     */

  }, {
    key: "toString",
    value: function toString() {
      var components, hasPublicId, hasStyle, publicId, re, res, start, style, text, textSource;
      style = this.textStyleIdentifier();

      if (this.options.publicId != null) {
        publicId = this.getFullPublicId();
      }

      if (this.options.text != null) {
        hasPublicId = !Object(_util__WEBPACK_IMPORTED_MODULE_1__["isEmpty"])(publicId);
        hasStyle = !Object(_util__WEBPACK_IMPORTED_MODULE_1__["isEmpty"])(style);

        if (hasPublicId && hasStyle || !hasPublicId && !hasStyle) {
          throw "Must supply either style parameters or a public_id when providing text parameter in a text overlay/underlay, but not both!";
        }

        re = /\$\([a-zA-Z]\w*\)/g;
        start = 0; //        textSource = text.replace(new RegExp("[,/]", 'g'), (c)-> "%#{c.charCodeAt(0).toString(16).toUpperCase()}")

        textSource = Object(_util__WEBPACK_IMPORTED_MODULE_1__["smartEscape"])(this.options.text, /[,\/]/g);
        text = "";

        while (res = re.exec(textSource)) {
          text += Object(_util__WEBPACK_IMPORTED_MODULE_1__["smartEscape"])(textSource.slice(start, res.index));
          text += res[0];
          start = res.index + res[0].length;
        }

        text += Object(_util__WEBPACK_IMPORTED_MODULE_1__["smartEscape"])(textSource.slice(start));
      }

      components = [this.options.resourceType, style, publicId, text];
      return Object(_util__WEBPACK_IMPORTED_MODULE_1__["compact"])(components).join(":");
    }
  }, {
    key: "textStyleIdentifier",
    value: function textStyleIdentifier() {
      var components;
      components = [];

      if (this.options.fontWeight !== "normal") {
        components.push(this.options.fontWeight);
      }

      if (this.options.fontStyle !== "normal") {
        components.push(this.options.fontStyle);
      }

      if (this.options.textDecoration !== "none") {
        components.push(this.options.textDecoration);
      }

      components.push(this.options.textAlign);

      if (this.options.stroke !== "none") {
        components.push(this.options.stroke);
      }

      if (!(Object(_util__WEBPACK_IMPORTED_MODULE_1__["isEmpty"])(this.options.letterSpacing) && !Object(_util__WEBPACK_IMPORTED_MODULE_1__["isNumberLike"])(this.options.letterSpacing))) {
        components.push("letter_spacing_" + this.options.letterSpacing);
      }

      if (!(Object(_util__WEBPACK_IMPORTED_MODULE_1__["isEmpty"])(this.options.lineSpacing) && !Object(_util__WEBPACK_IMPORTED_MODULE_1__["isNumberLike"])(this.options.lineSpacing))) {
        components.push("line_spacing_" + this.options.lineSpacing);
      }

      if (!Object(_util__WEBPACK_IMPORTED_MODULE_1__["isEmpty"])(Object(_util__WEBPACK_IMPORTED_MODULE_1__["compact"])(components))) {
        if (Object(_util__WEBPACK_IMPORTED_MODULE_1__["isEmpty"])(this.options.fontFamily)) {
          throw "Must supply fontFamily. ".concat(components);
        }

        if (Object(_util__WEBPACK_IMPORTED_MODULE_1__["isEmpty"])(this.options.fontSize) && !Object(_util__WEBPACK_IMPORTED_MODULE_1__["isNumberLike"])(this.options.fontSize)) {
          throw "Must supply fontSize.";
        }
      }

      components.unshift(this.options.fontFamily, this.options.fontSize);
      components = Object(_util__WEBPACK_IMPORTED_MODULE_1__["compact"])(components).join("_");
      return components;
    }
  }]);

  return TextLayer;
}(_layer__WEBPACK_IMPORTED_MODULE_0__["default"]);

/* harmony default export */ __webpack_exports__["default"] = (TextLayer);

/***/ }),

/***/ "./src/namespace/cloudinary-core.js":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _utf8_encode__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("./src/utf8_encode.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "utf8_encode", function() { return _utf8_encode__WEBPACK_IMPORTED_MODULE_0__["default"]; });

/* harmony import */ var _crc32__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__("./src/crc32.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "crc32", function() { return _crc32__WEBPACK_IMPORTED_MODULE_1__["default"]; });

/* harmony import */ var _util__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__("./src/util/lodash.js");
/* harmony reexport (module object) */ __webpack_require__.d(__webpack_exports__, "Util", function() { return _util__WEBPACK_IMPORTED_MODULE_2__; });
/* harmony import */ var _transformation__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__("./src/transformation.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "Transformation", function() { return _transformation__WEBPACK_IMPORTED_MODULE_3__["default"]; });

/* harmony import */ var _condition__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__("./src/condition.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "Condition", function() { return _condition__WEBPACK_IMPORTED_MODULE_4__["default"]; });

/* harmony import */ var _configuration__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__("./src/configuration.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "Configuration", function() { return _configuration__WEBPACK_IMPORTED_MODULE_5__["default"]; });

/* harmony import */ var _tags_htmltag__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__("./src/tags/htmltag.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "HtmlTag", function() { return _tags_htmltag__WEBPACK_IMPORTED_MODULE_6__["default"]; });

/* harmony import */ var _tags_imagetag__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__("./src/tags/imagetag.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "ImageTag", function() { return _tags_imagetag__WEBPACK_IMPORTED_MODULE_7__["default"]; });

/* harmony import */ var _tags_picturetag__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__("./src/tags/picturetag.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "PictureTag", function() { return _tags_picturetag__WEBPACK_IMPORTED_MODULE_8__["default"]; });

/* harmony import */ var _tags_videotag__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__("./src/tags/videotag.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "VideoTag", function() { return _tags_videotag__WEBPACK_IMPORTED_MODULE_9__["default"]; });

/* harmony import */ var _tags_clienthintsmetatag__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__("./src/tags/clienthintsmetatag.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "ClientHintsMetaTag", function() { return _tags_clienthintsmetatag__WEBPACK_IMPORTED_MODULE_10__["default"]; });

/* harmony import */ var _layer_layer__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__("./src/layer/layer.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "Layer", function() { return _layer_layer__WEBPACK_IMPORTED_MODULE_11__["default"]; });

/* harmony import */ var _layer_fetchlayer__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__("./src/layer/fetchlayer.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "FetchLayer", function() { return _layer_fetchlayer__WEBPACK_IMPORTED_MODULE_12__["default"]; });

/* harmony import */ var _layer_textlayer__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__("./src/layer/textlayer.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "TextLayer", function() { return _layer_textlayer__WEBPACK_IMPORTED_MODULE_13__["default"]; });

/* harmony import */ var _layer_subtitleslayer__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__("./src/layer/subtitleslayer.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "SubtitlesLayer", function() { return _layer_subtitleslayer__WEBPACK_IMPORTED_MODULE_14__["default"]; });

/* harmony import */ var _cloudinary__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__("./src/cloudinary.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "Cloudinary", function() { return _cloudinary__WEBPACK_IMPORTED_MODULE_15__["default"]; });

/**
 * Creates the namespace for Cloudinary
 */
















/* harmony default export */ __webpack_exports__["default"] = ({
  ClientHintsMetaTag: _tags_clienthintsmetatag__WEBPACK_IMPORTED_MODULE_10__["default"],
  Cloudinary: _cloudinary__WEBPACK_IMPORTED_MODULE_15__["default"],
  Condition: _condition__WEBPACK_IMPORTED_MODULE_4__["default"],
  Configuration: _configuration__WEBPACK_IMPORTED_MODULE_5__["default"],
  crc32: _crc32__WEBPACK_IMPORTED_MODULE_1__["default"],
  FetchLayer: _layer_fetchlayer__WEBPACK_IMPORTED_MODULE_12__["default"],
  HtmlTag: _tags_htmltag__WEBPACK_IMPORTED_MODULE_6__["default"],
  ImageTag: _tags_imagetag__WEBPACK_IMPORTED_MODULE_7__["default"],
  Layer: _layer_layer__WEBPACK_IMPORTED_MODULE_11__["default"],
  PictureTag: _tags_picturetag__WEBPACK_IMPORTED_MODULE_8__["default"],
  SubtitlesLayer: _layer_subtitleslayer__WEBPACK_IMPORTED_MODULE_14__["default"],
  TextLayer: _layer_textlayer__WEBPACK_IMPORTED_MODULE_13__["default"],
  Transformation: _transformation__WEBPACK_IMPORTED_MODULE_3__["default"],
  utf8_encode: _utf8_encode__WEBPACK_IMPORTED_MODULE_0__["default"],
  Util: _util__WEBPACK_IMPORTED_MODULE_2__,
  VideoTag: _tags_videotag__WEBPACK_IMPORTED_MODULE_9__["default"]
});


/***/ }),

/***/ "./src/parameters.js":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Param", function() { return Param; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ArrayParam", function() { return ArrayParam; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TransformationParam", function() { return TransformationParam; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "RangeParam", function() { return RangeParam; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "RawParam", function() { return RawParam; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LayerParam", function() { return LayerParam; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ExpressionParam", function() { return ExpressionParam; });
/* harmony import */ var _expression__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("./src/expression.js");
/* harmony import */ var _transformation__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__("./src/transformation.js");
/* harmony import */ var _util__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__("./src/util/lodash.js");
/* harmony import */ var _layer_layer__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__("./src/layer/layer.js");
/* harmony import */ var _layer_textlayer__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__("./src/layer/textlayer.js");
/* harmony import */ var _layer_subtitleslayer__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__("./src/layer/subtitleslayer.js");
/* harmony import */ var _layer_fetchlayer__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__("./src/layer/fetchlayer.js");
function _typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } return _assertThisInitialized(self); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _get(target, property, receiver) { if (typeof Reflect !== "undefined" && Reflect.get) { _get = Reflect.get; } else { _get = function _get(target, property, receiver) { var base = _superPropBase(target, property); if (!base) return; var desc = Object.getOwnPropertyDescriptor(base, property); if (desc.get) { return desc.get.call(receiver); } return desc.value; }; } return _get(target, property, receiver || target); }

function _superPropBase(object, property) { while (!Object.prototype.hasOwnProperty.call(object, property)) { object = _getPrototypeOf(object); if (object === null) break; } return object; }

function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }

function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }








/**
 * Transformation parameters
 * Depends on 'util', 'transformation'
 */

var Param =
/*#__PURE__*/
function () {
  /**
   * Represents a single parameter
   * @class Param
   * @param {string} name - The name of the parameter in snake_case
   * @param {string} shortName - The name of the serialized form of the parameter.
   *                         If a value is not provided, the parameter will not be serialized.
   * @param {function} [process=Util.identity ] - Manipulate origValue when value is called
   * @ignore
   */
  function Param(name, shortName) {
    var process = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : _util__WEBPACK_IMPORTED_MODULE_2__["identity"];

    _classCallCheck(this, Param);

    /**
     * The name of the parameter in snake_case
     * @member {string} Param#name
     */
    this.name = name;
    /**
     * The name of the serialized form of the parameter
     * @member {string} Param#shortName
     */

    this.shortName = shortName;
    /**
     * Manipulate origValue when value is called
     * @member {function} Param#process
     */

    this.process = process;
  }
  /**
   * Set a (unprocessed) value for this parameter
   * @function Param#set
   * @param {*} origValue - the value of the parameter
   * @return {Param} self for chaining
   */


  _createClass(Param, [{
    key: "set",
    value: function set(origValue) {
      this.origValue = origValue;
      return this;
    }
    /**
     * Generate the serialized form of the parameter
     * @function Param#serialize
     * @return {string} the serialized form of the parameter
     */

  }, {
    key: "serialize",
    value: function serialize() {
      var val, valid;
      val = this.value();
      valid = Object(_util__WEBPACK_IMPORTED_MODULE_2__["isArray"])(val) || Object(_util__WEBPACK_IMPORTED_MODULE_2__["isPlainObject"])(val) || Object(_util__WEBPACK_IMPORTED_MODULE_2__["isString"])(val) ? !Object(_util__WEBPACK_IMPORTED_MODULE_2__["isEmpty"])(val) : val != null;

      if (this.shortName != null && valid) {
        return "".concat(this.shortName, "_").concat(val);
      } else {
        return '';
      }
    }
    /**
     * Return the processed value of the parameter
     * @function Param#value
     */

  }, {
    key: "value",
    value: function value() {
      return this.process(this.origValue);
    }
  }, {
    key: "build_array",
    value: function build_array(arg) {
      if (arg == null) {
        return [];
      } else if (Object(_util__WEBPACK_IMPORTED_MODULE_2__["isArray"])(arg)) {
        return arg;
      } else {
        return [arg];
      }
    }
    /**
    * Covert value to video codec string.
    *
    * If the parameter is an object,
    * @param {(string|Object)} param - the video codec as either a String or a Hash
    * @return {string} the video codec string in the format codec:profile:level
    * @example
    * vc_[ :profile : [level]]
    * or
      { codec: 'h264', profile: 'basic', level: '3.1' }
    * @ignore
     */

  }], [{
    key: "norm_color",
    value: function norm_color(value) {
      return value != null ? value.replace(/^#/, 'rgb:') : void 0;
    }
  }, {
    key: "process_video_params",
    value: function process_video_params(param) {
      var video;

      switch (param.constructor) {
        case Object:
          video = "";

          if ('codec' in param) {
            video = param['codec'];

            if ('profile' in param) {
              video += ":" + param['profile'];

              if ('level' in param) {
                video += ":" + param['level'];
              }
            }
          }

          return video;

        case String:
          return param;

        default:
          return null;
      }
    }
  }]);

  return Param;
}();

var ArrayParam =
/*#__PURE__*/
function (_Param) {
  _inherits(ArrayParam, _Param);

  /**
   * A parameter that represents an array
   * @param {string} name - The name of the parameter in snake_case
   * @param {string} shortName - The name of the serialized form of the parameter
   *                         If a value is not provided, the parameter will not be serialized.
   * @param {string} [sep='.'] - The separator to use when joining the array elements together
   * @param {function} [process=Util.identity ] - Manipulate origValue when value is called
   * @class ArrayParam
   * @extends Param
   * @ignore
   */
  function ArrayParam(name, shortName) {
    var _this;

    var sep = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : '.';
    var process = arguments.length > 3 ? arguments[3] : undefined;

    _classCallCheck(this, ArrayParam);

    _this = _possibleConstructorReturn(this, _getPrototypeOf(ArrayParam).call(this, name, shortName, process));
    _this.sep = sep;
    return _this;
  }

  _createClass(ArrayParam, [{
    key: "serialize",
    value: function serialize() {
      if (this.shortName != null) {
        var arrayValue = this.value();

        if (Object(_util__WEBPACK_IMPORTED_MODULE_2__["isEmpty"])(arrayValue)) {
          return '';
        } else if (Object(_util__WEBPACK_IMPORTED_MODULE_2__["isString"])(arrayValue)) {
          return "".concat(this.shortName, "_").concat(arrayValue);
        } else {
          var flat = arrayValue.map(function (t) {
            return Object(_util__WEBPACK_IMPORTED_MODULE_2__["isFunction"])(t.serialize) ? t.serialize() : t;
          }).join(this.sep);
          return "".concat(this.shortName, "_").concat(flat);
        }
      } else {
        return '';
      }
    }
  }, {
    key: "value",
    value: function value() {
      var _this2 = this;

      if (Object(_util__WEBPACK_IMPORTED_MODULE_2__["isArray"])(this.origValue)) {
        return this.origValue.map(function (v) {
          return _this2.process(v);
        });
      } else {
        return this.process(this.origValue);
      }
    }
  }, {
    key: "set",
    value: function set(origValue) {
      if (origValue == null || Object(_util__WEBPACK_IMPORTED_MODULE_2__["isArray"])(origValue)) {
        return _get(_getPrototypeOf(ArrayParam.prototype), "set", this).call(this, origValue);
      } else {
        return _get(_getPrototypeOf(ArrayParam.prototype), "set", this).call(this, [origValue]);
      }
    }
  }]);

  return ArrayParam;
}(Param);

var TransformationParam =
/*#__PURE__*/
function (_Param2) {
  _inherits(TransformationParam, _Param2);

  /**
   * A parameter that represents a transformation
   * @param {string} name - The name of the parameter in snake_case
   * @param {string} [shortName='t'] - The name of the serialized form of the parameter
   * @param {string} [sep='.'] - The separator to use when joining the array elements together
   * @param {function} [process=Util.identity ] - Manipulate origValue when value is called
   * @class TransformationParam
   * @extends Param
   * @ignore
   */
  function TransformationParam(name) {
    var _this3;

    var shortName = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : "t";
    var sep = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : '.';
    var process = arguments.length > 3 ? arguments[3] : undefined;

    _classCallCheck(this, TransformationParam);

    _this3 = _possibleConstructorReturn(this, _getPrototypeOf(TransformationParam).call(this, name, shortName, process));
    _this3.sep = sep;
    return _this3;
  }

  _createClass(TransformationParam, [{
    key: "serialize",
    value: function serialize() {
      var _this4 = this;

      if (Object(_util__WEBPACK_IMPORTED_MODULE_2__["isEmpty"])(this.value())) {
        return '';
      } else if (Object(_util__WEBPACK_IMPORTED_MODULE_2__["allStrings"])(this.value())) {
        var joined = this.value().join(this.sep);

        if (!Object(_util__WEBPACK_IMPORTED_MODULE_2__["isEmpty"])(joined)) {
          return "".concat(this.shortName, "_").concat(joined);
        } else {
          return '';
        }
      } else {
        return this.value().map(function (t) {
          if (Object(_util__WEBPACK_IMPORTED_MODULE_2__["isString"])(t) && !Object(_util__WEBPACK_IMPORTED_MODULE_2__["isEmpty"])(t)) {
            return "".concat(_this4.shortName, "_").concat(t);
          } else if (Object(_util__WEBPACK_IMPORTED_MODULE_2__["isFunction"])(t.serialize)) {
            return t.serialize();
          } else if (Object(_util__WEBPACK_IMPORTED_MODULE_2__["isPlainObject"])(t) && !Object(_util__WEBPACK_IMPORTED_MODULE_2__["isEmpty"])(t)) {
            return new _transformation__WEBPACK_IMPORTED_MODULE_1__["default"](t).serialize();
          } else {
            return undefined;
          }
        }).filter(function (t) {
          return t;
        });
      }
    }
  }, {
    key: "set",
    value: function set(origValue1) {
      this.origValue = origValue1;

      if (Object(_util__WEBPACK_IMPORTED_MODULE_2__["isArray"])(this.origValue)) {
        return _get(_getPrototypeOf(TransformationParam.prototype), "set", this).call(this, this.origValue);
      } else {
        return _get(_getPrototypeOf(TransformationParam.prototype), "set", this).call(this, [this.origValue]);
      }
    }
  }]);

  return TransformationParam;
}(Param);

var RangeParam =
/*#__PURE__*/
function (_Param3) {
  _inherits(RangeParam, _Param3);

  /**
   * A parameter that represents a range
   * @param {string} name - The name of the parameter in snake_case
   * @param {string} shortName - The name of the serialized form of the parameter
   *                         If a value is not provided, the parameter will not be serialized.
   * @param {function} [process=norm_range_value ] - Manipulate origValue when value is called
   * @class RangeParam
   * @extends Param
   * @ignore
   */
  function RangeParam(name, shortName, process) {
    var _this5;

    _classCallCheck(this, RangeParam);

    _this5 = _possibleConstructorReturn(this, _getPrototypeOf(RangeParam).call(this, name, shortName, process));
    _this5.process || (_this5.process = _this5.norm_range_value);
    return _this5;
  }

  _createClass(RangeParam, null, [{
    key: "norm_range_value",
    value: function norm_range_value(value) {
      var modifier, offset;
      offset = String(value).match(new RegExp('^' + offset_any_pattern + '$'));

      if (offset) {
        modifier = offset[5] != null ? 'p' : '';
        value = (offset[1] || offset[4]) + modifier;
      }

      return value;
    }
  }]);

  return RangeParam;
}(Param);

var RawParam =
/*#__PURE__*/
function (_Param4) {
  _inherits(RawParam, _Param4);

  function RawParam(name, shortName) {
    var process = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : _util__WEBPACK_IMPORTED_MODULE_2__["identity"];

    _classCallCheck(this, RawParam);

    return _possibleConstructorReturn(this, _getPrototypeOf(RawParam).call(this, name, shortName, process));
  }

  _createClass(RawParam, [{
    key: "serialize",
    value: function serialize() {
      return this.value();
    }
  }]);

  return RawParam;
}(Param);

var LAYER_KEYWORD_PARAMS = [["font_weight", "normal"], ["font_style", "normal"], ["text_decoration", "none"], ["text_align", null], ["stroke", "none"], ["letter_spacing", null], ["line_spacing", null]];

var LayerParam =
/*#__PURE__*/
function (_Param5) {
  _inherits(LayerParam, _Param5);

  function LayerParam() {
    _classCallCheck(this, LayerParam);

    return _possibleConstructorReturn(this, _getPrototypeOf(LayerParam).apply(this, arguments));
  }

  _createClass(LayerParam, [{
    key: "value",
    // Parse layer options
    // @return [string] layer transformation string
    // @private
    value: function value() {
      var result;
      var layerOptions = this.origValue;

      if (Object(_util__WEBPACK_IMPORTED_MODULE_2__["isPlainObject"])(layerOptions)) {
        layerOptions = Object(_util__WEBPACK_IMPORTED_MODULE_2__["withCamelCaseKeys"])(layerOptions);

        if (layerOptions.resourceType === "text" || layerOptions.text != null) {
          result = new _layer_textlayer__WEBPACK_IMPORTED_MODULE_4__["default"](layerOptions).toString();
        } else if (layerOptions.resourceType === "subtitles") {
          result = new _layer_subtitleslayer__WEBPACK_IMPORTED_MODULE_5__["default"](layerOptions).toString();
        } else if (layerOptions.resourceType === "fetch" || layerOptions.url != null) {
          result = new _layer_fetchlayer__WEBPACK_IMPORTED_MODULE_6__["default"](layerOptions).toString();
        } else {
          result = new _layer_layer__WEBPACK_IMPORTED_MODULE_3__["default"](layerOptions).toString();
        }
      } else if (Object(_util__WEBPACK_IMPORTED_MODULE_2__["isString"])(layerOptions) && /^fetch:.+/.test(layerOptions)) {
        result = new _layer_fetchlayer__WEBPACK_IMPORTED_MODULE_6__["default"](layerOptions.substr(6)).toString();
      } else {
        result = layerOptions;
      }

      return result;
    }
  }, {
    key: "textStyle",
    value: function textStyle(layer) {
      return new _layer_textlayer__WEBPACK_IMPORTED_MODULE_4__["default"](layer).textStyleIdentifier();
    }
  }]);

  return LayerParam;
}(Param);

var ExpressionParam =
/*#__PURE__*/
function (_Param6) {
  _inherits(ExpressionParam, _Param6);

  function ExpressionParam() {
    _classCallCheck(this, ExpressionParam);

    return _possibleConstructorReturn(this, _getPrototypeOf(ExpressionParam).apply(this, arguments));
  }

  _createClass(ExpressionParam, [{
    key: "serialize",
    value: function serialize() {
      return _expression__WEBPACK_IMPORTED_MODULE_0__["default"].normalize(_get(_getPrototypeOf(ExpressionParam.prototype), "serialize", this).call(this));
    }
  }]);

  return ExpressionParam;
}(Param);



/***/ }),

/***/ "./src/tags/clienthintsmetatag.js":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _htmltag__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("./src/tags/htmltag.js");
/* harmony import */ var _util__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__("./src/util/lodash.js");
function _typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } return _assertThisInitialized(self); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }

function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }

/**
 * Image Tag
 * Depends on 'tags/htmltag', 'cloudinary'
 */



var ClientHintsMetaTag =
/*#__PURE__*/
function (_HtmlTag) {
  _inherits(ClientHintsMetaTag, _HtmlTag);

  /**
   * Creates an HTML (DOM) Meta tag that enables client-hints.
   * @constructor ClientHintsMetaTag
   * @extends HtmlTag
   */
  function ClientHintsMetaTag(options) {
    _classCallCheck(this, ClientHintsMetaTag);

    return _possibleConstructorReturn(this, _getPrototypeOf(ClientHintsMetaTag).call(this, 'meta', void 0, Object(_util__WEBPACK_IMPORTED_MODULE_1__["assign"])({
      "http-equiv": "Accept-CH",
      content: "DPR, Viewport-Width, Width"
    }, options)));
  }
  /** @override */


  _createClass(ClientHintsMetaTag, [{
    key: "closeTag",
    value: function closeTag() {
      return "";
    }
  }]);

  return ClientHintsMetaTag;
}(_htmltag__WEBPACK_IMPORTED_MODULE_0__["default"]);

/* harmony default export */ __webpack_exports__["default"] = (ClientHintsMetaTag);

/***/ }),

/***/ "./src/tags/htmltag.js":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _util__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("./src/util/lodash.js");
/* harmony import */ var _transformation__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__("./src/transformation.js");
function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

/**
 * Generic HTML tag
 * Depends on 'transformation', 'util'
 */



var HtmlTag =
/*#__PURE__*/
function () {
  /**
   * Represents an HTML (DOM) tag
   * @constructor HtmlTag
   * @param {string} name - the name of the tag
   * @param {string} [publicId]
   * @param {Object} options
   * @example tag = new HtmlTag( 'div', { 'width': 10})
   */
  function HtmlTag(name, publicId, options) {
    _classCallCheck(this, HtmlTag);

    var transformation;
    this.name = name;
    this.publicId = publicId;

    if (options == null) {
      if (Object(_util__WEBPACK_IMPORTED_MODULE_0__["isPlainObject"])(publicId)) {
        options = publicId;
        this.publicId = void 0;
      } else {
        options = {};
      }
    }

    transformation = new _transformation__WEBPACK_IMPORTED_MODULE_1__["default"](options);
    transformation.setParent(this);

    this.transformation = function () {
      return transformation;
    };
  }
  /**
   * Convenience constructor
   * Creates a new instance of an HTML (DOM) tag
   * @function HtmlTag.new
   * @param {string} name - the name of the tag
   * @param {string} [publicId]
   * @param {Object} options
   * @return {HtmlTag}
   * @example tag = HtmlTag.new( 'div', { 'width': 10})
   */


  _createClass(HtmlTag, [{
    key: "htmlAttrs",

    /**
     * combine key and value from the `attr` to generate an HTML tag attributes string.
     * `Transformation::toHtmlTagOptions` is used to filter out transformation and configuration keys.
     * @protected
     * @param {Object} attrs
     * @return {string} the attributes in the format `'key1="value1" key2="value2"'`
     * @ignore
     */
    value: function htmlAttrs(attrs) {
      var key, pairs, value;
      return pairs = function () {
        var results;
        results = [];

        for (key in attrs) {
          value = escapeQuotes(attrs[key]);

          if (value) {
            results.push(toAttribute(key, value));
          }
        }

        return results;
      }().sort().join(' ');
    }
    /**
     * Get all options related to this tag.
     * @function HtmlTag#getOptions
     * @returns {Object} the options
     *
     */

  }, {
    key: "getOptions",
    value: function getOptions() {
      return this.transformation().toOptions();
    }
    /**
     * Get the value of option `name`
     * @function HtmlTag#getOption
     * @param {string} name - the name of the option
     * @returns {*} Returns the value of the option
     *
     */

  }, {
    key: "getOption",
    value: function getOption(name) {
      return this.transformation().getValue(name);
    }
    /**
     * Get the attributes of the tag.
     * @function HtmlTag#attributes
     * @returns {Object} attributes
     */

  }, {
    key: "attributes",
    value: function attributes() {
      // The attributes are be computed from the options every time this method is invoked.
      var htmlAttributes = this.transformation().toHtmlAttributes();
      Object.keys(htmlAttributes).forEach(function (key) {
        if (Object(_util__WEBPACK_IMPORTED_MODULE_0__["isPlainObject"])(htmlAttributes[key])) {
          delete htmlAttributes[key];
        }
      });

      if (htmlAttributes.attributes) {
        // Currently HTML attributes are defined both at the top level and under 'attributes'
        Object(_util__WEBPACK_IMPORTED_MODULE_0__["merge"])(htmlAttributes, htmlAttributes.attributes);
        delete htmlAttributes.attributes;
      }

      return htmlAttributes;
    }
    /**
     * Set a tag attribute named `name` to `value`
     * @function HtmlTag#setAttr
     * @param {string} name - the name of the attribute
     * @param {string} value - the value of the attribute
     */

  }, {
    key: "setAttr",
    value: function setAttr(name, value) {
      this.transformation().set("html_".concat(name), value);
      return this;
    }
    /**
     * Get the value of the tag attribute `name`
     * @function HtmlTag#getAttr
     * @param {string} name - the name of the attribute
     * @returns {*}
     */

  }, {
    key: "getAttr",
    value: function getAttr(name) {
      return this.attributes()["html_".concat(name)] || this.attributes()[name];
    }
    /**
     * Remove the tag attributed named `name`
     * @function HtmlTag#removeAttr
     * @param {string} name - the name of the attribute
     * @returns {*}
     */

  }, {
    key: "removeAttr",
    value: function removeAttr(name) {
      var ref;
      return (ref = this.transformation().remove("html_".concat(name))) != null ? ref : this.transformation().remove(name);
    }
    /**
     * @function HtmlTag#content
     * @protected
     * @ignore
     */

  }, {
    key: "content",
    value: function content() {
      return "";
    }
    /**
     * @function HtmlTag#openTag
     * @protected
     * @ignore
     */

  }, {
    key: "openTag",
    value: function openTag() {
      var tag = "<" + this.name;
      var htmlAttrs = this.htmlAttrs(this.attributes());

      if (htmlAttrs && htmlAttrs.length > 0) {
        tag += " " + htmlAttrs;
      }

      return tag + ">";
    }
    /**
     * @function HtmlTag#closeTag
     * @protected
     * @ignore
     */

  }, {
    key: "closeTag",
    value: function closeTag() {
      return "</".concat(this.name, ">");
    }
    /**
     * Generates an HTML representation of the tag.
     * @function HtmlTag#toHtml
     * @returns {string} Returns HTML in string format
     */

  }, {
    key: "toHtml",
    value: function toHtml() {
      return this.openTag() + this.content() + this.closeTag();
    }
    /**
     * Creates a DOM object representing the tag.
     * @function HtmlTag#toDOM
     * @returns {Element}
     */

  }, {
    key: "toDOM",
    value: function toDOM() {
      var element, name, ref, value;

      if (!Object(_util__WEBPACK_IMPORTED_MODULE_0__["isFunction"])(typeof document !== "undefined" && document !== null ? document.createElement : void 0)) {
        throw "Can't create DOM if document is not present!";
      }

      element = document.createElement(this.name);
      ref = this.attributes();

      for (name in ref) {
        value = ref[name];
        element.setAttribute(name, value);
      }

      return element;
    }
  }], [{
    key: "new",
    value: function _new(name, publicId, options) {
      return new this(name, publicId, options);
    }
  }, {
    key: "isResponsive",
    value: function isResponsive(tag, responsiveClass) {
      var dataSrc;
      dataSrc = Object(_util__WEBPACK_IMPORTED_MODULE_0__["getData"])(tag, 'src-cache') || Object(_util__WEBPACK_IMPORTED_MODULE_0__["getData"])(tag, 'src');
      return Object(_util__WEBPACK_IMPORTED_MODULE_0__["hasClass"])(tag, responsiveClass) && /\bw_auto\b/.exec(dataSrc);
    }
  }]);

  return HtmlTag;
}();
/**
 * Represent the given key and value as an HTML attribute.
 * @function toAttribute
 * @protected
 * @param {string} key - attribute name
 * @param {*|boolean} value - the value of the attribute. If the value is boolean `true`, return the key only.
 * @returns {string} the attribute
 *
 */


function toAttribute(key, value) {
  if (!value) {
    return void 0;
  } else if (value === true) {
    return key;
  } else {
    return "".concat(key, "=\"").concat(value, "\"");
  }
}
/**
 * If given value is a string, replaces quotes with character entities (&#34;, &#39;)
 * @param value - value to change
 * @returns {*} changed value
 */


function escapeQuotes(value) {
  return Object(_util__WEBPACK_IMPORTED_MODULE_0__["isString"])(value) ? value.replace('"', '&#34;').replace("'", '&#39;') : value;
}

/* harmony default export */ __webpack_exports__["default"] = (HtmlTag);

/***/ }),

/***/ "./src/tags/imagetag.js":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _htmltag__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("./src/tags/htmltag.js");
/* harmony import */ var _url__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__("./src/url.js");
/* harmony import */ var _util__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__("./src/util/lodash.js");
/* harmony import */ var _util_srcsetUtils__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__("./src/util/srcsetUtils.js");
function _typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } return _assertThisInitialized(self); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _get(target, property, receiver) { if (typeof Reflect !== "undefined" && Reflect.get) { _get = Reflect.get; } else { _get = function _get(target, property, receiver) { var base = _superPropBase(target, property); if (!base) return; var desc = Object.getOwnPropertyDescriptor(base, property); if (desc.get) { return desc.get.call(receiver); } return desc.value; }; } return _get(target, property, receiver || target); }

function _superPropBase(object, property) { while (!Object.prototype.hasOwnProperty.call(object, property)) { object = _getPrototypeOf(object); if (object === null) break; } return object; }

function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }

function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }

/**
 * Image Tag
 * Depends on 'tags/htmltag', 'cloudinary'
 */





var ImageTag =
/*#__PURE__*/
function (_HtmlTag) {
  _inherits(ImageTag, _HtmlTag);

  /**
   * Creates an HTML (DOM) Image tag using Cloudinary as the source.
   * @constructor ImageTag
   * @extends HtmlTag
   * @param {string} [publicId]
   * @param {Object} [options]
   */
  function ImageTag(publicId) {
    var options = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};

    _classCallCheck(this, ImageTag);

    return _possibleConstructorReturn(this, _getPrototypeOf(ImageTag).call(this, "img", publicId, options));
  }
  /** @override */


  _createClass(ImageTag, [{
    key: "closeTag",
    value: function closeTag() {
      return "";
    }
    /** @override */

  }, {
    key: "attributes",
    value: function attributes() {
      var attr, options, srcAttribute;
      attr = _get(_getPrototypeOf(ImageTag.prototype), "attributes", this).call(this) || {};
      options = this.getOptions();
      var srcsetParam = this.getOption('srcset');
      var attributes = this.getOption('attributes') || {};
      var responsiveAttributes = {};

      if (Object(_util__WEBPACK_IMPORTED_MODULE_2__["isString"])(srcsetParam)) {
        responsiveAttributes.srcset = srcsetParam;
      } else {
        responsiveAttributes = Object(_util_srcsetUtils__WEBPACK_IMPORTED_MODULE_3__["generateImageResponsiveAttributes"])(this.publicId, attributes, srcsetParam, options);
      }

      if (!Object(_util__WEBPACK_IMPORTED_MODULE_2__["isEmpty"])(responsiveAttributes)) {
        delete options.width;
        delete options.height;
      }

      Object(_util__WEBPACK_IMPORTED_MODULE_2__["merge"])(attr, responsiveAttributes);
      srcAttribute = options.responsive && !options.client_hints ? 'data-src' : 'src';

      if (attr[srcAttribute] == null) {
        attr[srcAttribute] = Object(_url__WEBPACK_IMPORTED_MODULE_1__["default"])(this.publicId, this.getOptions());
      }

      return attr;
    }
  }]);

  return ImageTag;
}(_htmltag__WEBPACK_IMPORTED_MODULE_0__["default"]);

/* harmony default export */ __webpack_exports__["default"] = (ImageTag);

/***/ }),

/***/ "./src/tags/picturetag.js":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _htmltag__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("./src/tags/htmltag.js");
/* harmony import */ var _imagetag__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__("./src/tags/imagetag.js");
/* harmony import */ var _transformation__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__("./src/transformation.js");
/* harmony import */ var _sourcetag__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__("./src/tags/sourcetag.js");
/* harmony import */ var _util__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__("./src/util/lodash.js");
function _typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } return _assertThisInitialized(self); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _get(target, property, receiver) { if (typeof Reflect !== "undefined" && Reflect.get) { _get = Reflect.get; } else { _get = function _get(target, property, receiver) { var base = _superPropBase(target, property); if (!base) return; var desc = Object.getOwnPropertyDescriptor(base, property); if (desc.get) { return desc.get.call(receiver); } return desc.value; }; } return _get(target, property, receiver || target); }

function _superPropBase(object, property) { while (!Object.prototype.hasOwnProperty.call(object, property)) { object = _getPrototypeOf(object); if (object === null) break; } return object; }

function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }

function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }







var PictureTag =
/*#__PURE__*/
function (_HtmlTag) {
  _inherits(PictureTag, _HtmlTag);

  function PictureTag(publicId) {
    var _this;

    var options = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};
    var sources = arguments.length > 2 ? arguments[2] : undefined;

    _classCallCheck(this, PictureTag);

    _this = _possibleConstructorReturn(this, _getPrototypeOf(PictureTag).call(this, 'picture', publicId, options));
    _this.widthList = sources;
    return _this;
  }
  /** @override */


  _createClass(PictureTag, [{
    key: "content",
    value: function content() {
      var _this2 = this;

      return this.widthList.map(function (_ref) {
        var min_width = _ref.min_width,
            max_width = _ref.max_width,
            transformation = _ref.transformation;

        var options = _this2.getOptions();

        var sourceTransformation = new _transformation__WEBPACK_IMPORTED_MODULE_2__["default"](options);
        sourceTransformation.chain().fromOptions(typeof transformation === 'string' ? {
          raw_transformation: transformation
        } : transformation);
        options = Object(_util__WEBPACK_IMPORTED_MODULE_4__["extractUrlParams"])(options);
        options.media = {
          min_width: min_width,
          max_width: max_width
        };
        options.transformation = sourceTransformation;
        return new _sourcetag__WEBPACK_IMPORTED_MODULE_3__["default"](_this2.publicId, options).toHtml();
      }).join('') + new _imagetag__WEBPACK_IMPORTED_MODULE_1__["default"](this.publicId, this.getOptions()).toHtml();
    }
    /** @override */

  }, {
    key: "attributes",
    value: function attributes() {
      var attr = _get(_getPrototypeOf(PictureTag.prototype), "attributes", this).call(this);

      delete attr.width;
      delete attr.height;
      return attr;
    }
    /** @override */

  }, {
    key: "closeTag",
    value: function closeTag() {
      return "</" + this.name + ">";
    }
  }]);

  return PictureTag;
}(_htmltag__WEBPACK_IMPORTED_MODULE_0__["default"]);

/* harmony default export */ __webpack_exports__["default"] = (PictureTag);

/***/ }),

/***/ "./src/tags/sourcetag.js":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _util_srcsetUtils__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("./src/util/srcsetUtils.js");
/* harmony import */ var _util__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__("./src/util/lodash.js");
/* harmony import */ var _url__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__("./src/url.js");
/* harmony import */ var _htmltag__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__("./src/tags/htmltag.js");
function _typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } return _assertThisInitialized(self); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _get(target, property, receiver) { if (typeof Reflect !== "undefined" && Reflect.get) { _get = Reflect.get; } else { _get = function _get(target, property, receiver) { var base = _superPropBase(target, property); if (!base) return; var desc = Object.getOwnPropertyDescriptor(base, property); if (desc.get) { return desc.get.call(receiver); } return desc.value; }; } return _get(target, property, receiver || target); }

function _superPropBase(object, property) { while (!Object.prototype.hasOwnProperty.call(object, property)) { object = _getPrototypeOf(object); if (object === null) break; } return object; }

function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }

function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }

/**
 * Image Tag
 * Depends on 'tags/htmltag', 'cloudinary'
 */





var SourceTag =
/*#__PURE__*/
function (_HtmlTag) {
  _inherits(SourceTag, _HtmlTag);

  /**
   * Creates an HTML (DOM) Image tag using Cloudinary as the source.
   * @constructor SourceTag
   * @extends HtmlTag
   * @param {string} [publicId]
   * @param {Object} [options]
   */
  function SourceTag(publicId) {
    var options = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};

    _classCallCheck(this, SourceTag);

    return _possibleConstructorReturn(this, _getPrototypeOf(SourceTag).call(this, "source", publicId, options));
  }
  /** @override */


  _createClass(SourceTag, [{
    key: "closeTag",
    value: function closeTag() {
      return "";
    }
    /** @override */

  }, {
    key: "attributes",
    value: function attributes() {
      var srcsetParam = this.getOption('srcset');
      var attr = _get(_getPrototypeOf(SourceTag.prototype), "attributes", this).call(this) || {};
      var options = this.getOptions();
      Object(_util__WEBPACK_IMPORTED_MODULE_1__["merge"])(attr, Object(_util_srcsetUtils__WEBPACK_IMPORTED_MODULE_0__["generateImageResponsiveAttributes"])(this.publicId, attr, srcsetParam, options));

      if (!attr.srcset) {
        attr.srcset = Object(_url__WEBPACK_IMPORTED_MODULE_2__["default"])(this.publicId, options);
      }

      if (!attr.media && options.media) {
        attr.media = Object(_util_srcsetUtils__WEBPACK_IMPORTED_MODULE_0__["generateMediaAttr"])(options.media);
      }

      return attr;
    }
  }]);

  return SourceTag;
}(_htmltag__WEBPACK_IMPORTED_MODULE_3__["default"]);

/* harmony default export */ __webpack_exports__["default"] = (SourceTag);

/***/ }),

/***/ "./src/tags/videotag.js":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _constants__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("./src/constants.js");
/* harmony import */ var _url__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__("./src/url.js");
/* harmony import */ var _util__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__("./src/util/lodash.js");
/* harmony import */ var _htmltag__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__("./src/tags/htmltag.js");
function _typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } return _assertThisInitialized(self); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _get(target, property, receiver) { if (typeof Reflect !== "undefined" && Reflect.get) { _get = Reflect.get; } else { _get = function _get(target, property, receiver) { var base = _superPropBase(target, property); if (!base) return; var desc = Object.getOwnPropertyDescriptor(base, property); if (desc.get) { return desc.get.call(receiver); } return desc.value; }; } return _get(target, property, receiver || target); }

function _superPropBase(object, property) { while (!Object.prototype.hasOwnProperty.call(object, property)) { object = _getPrototypeOf(object); if (object === null) break; } return object; }

function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }

function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }

/**
 * Video Tag
 * Depends on 'tags/htmltag', 'util', 'cloudinary'
 */




var VIDEO_TAG_PARAMS = ['source_types', 'source_transformation', 'fallback_content', 'poster'];
var DEFAULT_VIDEO_SOURCE_TYPES = ['webm', 'mp4', 'ogv'];
var DEFAULT_POSTER_OPTIONS = {
  format: 'jpg',
  resource_type: 'video'
};

var VideoTag =
/*#__PURE__*/
function (_HtmlTag) {
  _inherits(VideoTag, _HtmlTag);

  /**
   * Creates an HTML (DOM) Video tag using Cloudinary as the source.
   * @constructor VideoTag
   * @extends HtmlTag
   * @param {string} [publicId]
   * @param {Object} [options]
   */
  function VideoTag(publicId) {
    var options = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};

    _classCallCheck(this, VideoTag);

    options = Object(_util__WEBPACK_IMPORTED_MODULE_2__["defaults"])({}, options, _constants__WEBPACK_IMPORTED_MODULE_0__["DEFAULT_VIDEO_PARAMS"]);
    return _possibleConstructorReturn(this, _getPrototypeOf(VideoTag).call(this, "video", publicId.replace(/\.(mp4|ogv|webm)$/, ''), options));
  }
  /**
   * Set the transformation to apply on each source
   * @function VideoTag#setSourceTransformation
   * @param {Object} an object with pairs of source type and source transformation
   * @returns {VideoTag} Returns this instance for chaining purposes.
   */


  _createClass(VideoTag, [{
    key: "setSourceTransformation",
    value: function setSourceTransformation(value) {
      this.transformation().sourceTransformation(value);
      return this;
    }
    /**
     * Set the source types to include in the video tag
     * @function VideoTag#setSourceTypes
     * @param {Array<string>} an array of source types
     * @returns {VideoTag} Returns this instance for chaining purposes.
     */

  }, {
    key: "setSourceTypes",
    value: function setSourceTypes(value) {
      this.transformation().sourceTypes(value);
      return this;
    }
    /**
     * Set the poster to be used in the video tag
     * @function VideoTag#setPoster
     * @param {string|Object} value
     * - string: a URL to use for the poster
     * - Object: transformation parameters to apply to the poster. May optionally include a public_id to use instead of the video public_id.
     * @returns {VideoTag} Returns this instance for chaining purposes.
     */

  }, {
    key: "setPoster",
    value: function setPoster(value) {
      this.transformation().poster(value);
      return this;
    }
    /**
     * Set the content to use as fallback in the video tag
     * @function VideoTag#setFallbackContent
     * @param {string} value - the content to use, in HTML format
     * @returns {VideoTag} Returns this instance for chaining purposes.
     */

  }, {
    key: "setFallbackContent",
    value: function setFallbackContent(value) {
      this.transformation().fallbackContent(value);
      return this;
    }
  }, {
    key: "content",
    value: function content() {
      var fallback, innerTags, type, sourceTransformation, sourceTypes, src, srcType, transformation, videoType;
      sourceTypes = this.transformation().getValue('source_types');
      sourceTransformation = this.transformation().getValue('source_transformation');
      fallback = this.transformation().getValue('fallback_content');

      if (Object(_util__WEBPACK_IMPORTED_MODULE_2__["isArray"])(sourceTypes)) {
        var options = this.getOptions();

        innerTags = function () {
          var i, len, results;
          results = [];

          for (i = 0, len = sourceTypes.length; i < len; i++) {
            srcType = sourceTypes[i];
            transformation = sourceTransformation[srcType] || {};
            src = Object(_url__WEBPACK_IMPORTED_MODULE_1__["default"])("".concat(this.publicId), Object(_util__WEBPACK_IMPORTED_MODULE_2__["defaults"])({}, transformation, {
              resource_type: 'video',
              format: srcType
            }, options));
            videoType = srcType === 'ogv' ? 'ogg' : srcType;
            type = 'video/' + videoType;
            results.push("<source ".concat(this.htmlAttrs({
              src: src,
              type: type
            }), ">"));
          }

          return results;
        }.call(this);
      } else {
        innerTags = [];
      }

      return innerTags.join('') + fallback;
    }
  }, {
    key: "attributes",
    value: function attributes() {
      var a, attr, defaultOptions, i, len, poster, ref, ref1, sourceTypes;
      sourceTypes = this.getOption('source_types');
      poster = (ref = this.getOption('poster')) != null ? ref : {};

      if (Object(_util__WEBPACK_IMPORTED_MODULE_2__["isPlainObject"])(poster)) {
        defaultOptions = poster.public_id != null ? _constants__WEBPACK_IMPORTED_MODULE_0__["DEFAULT_IMAGE_PARAMS"] : DEFAULT_POSTER_OPTIONS;
        poster = Object(_url__WEBPACK_IMPORTED_MODULE_1__["default"])((ref1 = poster.public_id) != null ? ref1 : this.publicId, Object(_util__WEBPACK_IMPORTED_MODULE_2__["defaults"])({}, poster, defaultOptions, this.getOptions()));
      }

      attr = _get(_getPrototypeOf(VideoTag.prototype), "attributes", this).call(this) || [];

      for (i = 0, len = attr.length; i < len; i++) {
        a = attr[i];

        if (!Object(_util__WEBPACK_IMPORTED_MODULE_2__["contains"])(VIDEO_TAG_PARAMS)) {
          attr = a;
        }
      }

      if (!Object(_util__WEBPACK_IMPORTED_MODULE_2__["isArray"])(sourceTypes)) {
        attr["src"] = Object(_url__WEBPACK_IMPORTED_MODULE_1__["default"])(this.publicId, this.getOptions(), {
          resource_type: 'video',
          format: sourceTypes
        });
      }

      if (poster != null) {
        attr["poster"] = poster;
      }

      return attr;
    }
  }]);

  return VideoTag;
}(_htmltag__WEBPACK_IMPORTED_MODULE_3__["default"]);

/* harmony default export */ __webpack_exports__["default"] = (VideoTag);

/***/ }),

/***/ "./src/transformation.js":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _expression__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("./src/expression.js");
/* harmony import */ var _condition__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__("./src/condition.js");
/* harmony import */ var _configuration__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__("./src/configuration.js");
/* harmony import */ var _util__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__("./src/util/lodash.js");
/* harmony import */ var _parameters__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__("./src/parameters.js");
function _typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } return _assertThisInitialized(self); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }

function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }

function _slicedToArray(arr, i) { return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _nonIterableRest(); }

function _nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance"); }

function _iterableToArrayLimit(arr, i) { var _arr = []; var _n = true; var _d = false; var _e = undefined; try { for (var _i = arr[Symbol.iterator](), _s; !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i["return"] != null) _i["return"](); } finally { if (_d) throw _e; } } return _arr; }

function _arrayWithHoles(arr) { if (Array.isArray(arr)) return arr; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }






/**
 * Assign key, value to target, when value is not null.<br>
 *   This function mutates the target!
 * @param {object} target the object to assign the values to
 * @param {object} sources one or more objects to get values from
 * @returns {object} the target after the assignment
 */

function assignNotNull(target) {
  for (var _len = arguments.length, sources = new Array(_len > 1 ? _len - 1 : 0), _key = 1; _key < _len; _key++) {
    sources[_key - 1] = arguments[_key];
  }

  sources.forEach(function (source) {
    Object.keys(source).forEach(function (key) {
      if (source[key] != null) {
        target[key] = source[key];
      }
    });
  });
  return target;
}
/**
 * TransformationBase
 * Depends on 'configuration', 'parameters','util'
 * @internal
 */


var TransformationBase =
/*#__PURE__*/
function () {
  /**
   * The base class for transformations.
   * Members of this class are documented as belonging to the {@link Transformation} class for convenience.
   * @class TransformationBase
   */
  function TransformationBase(options) {
    _classCallCheck(this, TransformationBase);

    /** @private */

    /** @private */
    var parent, trans;
    parent = void 0;
    trans = {};
    /**
     * Return an options object that can be used to create an identical Transformation
     * @function Transformation#toOptions
     * @return {Object} Returns a plain object representing this transformation
     */

    this.toOptions = function (withChain) {
      var opt = {};

      if (withChain == null) {
        withChain = true;
      }

      Object.keys(trans).forEach(function (key) {
        return opt[key] = trans[key].origValue;
      });
      assignNotNull(opt, this.otherOptions);

      if (withChain && !Object(_util__WEBPACK_IMPORTED_MODULE_3__["isEmpty"])(this.chained)) {
        var list = this.chained.map(function (tr) {
          return tr.toOptions();
        });
        list.push(opt);
        opt = {};
        assignNotNull(opt, this.otherOptions);
        opt.transformation = list;
      }

      return opt;
    };
    /**
     * Set a parent for this object for chaining purposes.
     *
     * @function Transformation#setParent
     * @param {Object} object - the parent to be assigned to
     * @returns {Transformation} Returns this instance for chaining purposes.
     */


    this.setParent = function (object) {
      parent = object;

      if (object != null) {
        this.fromOptions(typeof object.toOptions === "function" ? object.toOptions() : void 0);
      }

      return this;
    };
    /**
     * Returns the parent of this object in the chain
     * @function Transformation#getParent
     * @protected
     * @return {Object} Returns the parent of this object if there is any
     */


    this.getParent = function () {
      return parent;
    }; // Helper methods to create parameter methods
    // These methods are defined here because they access `trans` which is
    // a private member of `TransformationBase`

    /** @protected */


    this.param = function (value, name, abbr, defaultValue, process) {
      if (process == null) {
        if (Object(_util__WEBPACK_IMPORTED_MODULE_3__["isFunction"])(defaultValue)) {
          process = defaultValue;
        } else {
          process = _util__WEBPACK_IMPORTED_MODULE_3__["identity"];
        }
      }

      trans[name] = new _parameters__WEBPACK_IMPORTED_MODULE_4__["Param"](name, abbr, process).set(value);
      return this;
    };
    /** @protected */


    this.rawParam = function (value, name, abbr, defaultValue) {
      var process = arguments.length > 4 && arguments[4] !== undefined ? arguments[4] : _util__WEBPACK_IMPORTED_MODULE_3__["identity"];
      process = lastArgCallback(arguments);
      trans[name] = new _parameters__WEBPACK_IMPORTED_MODULE_4__["RawParam"](name, abbr, process).set(value);
      return this;
    };
    /** @protected */


    this.rangeParam = function (value, name, abbr, defaultValue) {
      var process = arguments.length > 4 && arguments[4] !== undefined ? arguments[4] : _util__WEBPACK_IMPORTED_MODULE_3__["identity"];
      process = lastArgCallback(arguments);
      trans[name] = new _parameters__WEBPACK_IMPORTED_MODULE_4__["RangeParam"](name, abbr, process).set(value);
      return this;
    };
    /** @protected */


    this.arrayParam = function (value, name, abbr) {
      var sep = arguments.length > 3 && arguments[3] !== undefined ? arguments[3] : ":";
      var defaultValue = arguments.length > 4 && arguments[4] !== undefined ? arguments[4] : [];
      var process = arguments.length > 5 && arguments[5] !== undefined ? arguments[5] : _util__WEBPACK_IMPORTED_MODULE_3__["identity"];
      process = lastArgCallback(arguments);
      trans[name] = new _parameters__WEBPACK_IMPORTED_MODULE_4__["ArrayParam"](name, abbr, sep, process).set(value);
      return this;
    };
    /** @protected */


    this.transformationParam = function (value, name, abbr) {
      var sep = arguments.length > 3 && arguments[3] !== undefined ? arguments[3] : ".";
      var defaultValue = arguments.length > 4 ? arguments[4] : undefined;
      var process = arguments.length > 5 && arguments[5] !== undefined ? arguments[5] : _util__WEBPACK_IMPORTED_MODULE_3__["identity"];
      process = lastArgCallback(arguments);
      trans[name] = new _parameters__WEBPACK_IMPORTED_MODULE_4__["TransformationParam"](name, abbr, sep, process).set(value);
      return this;
    };

    this.layerParam = function (value, name, abbr) {
      trans[name] = new _parameters__WEBPACK_IMPORTED_MODULE_4__["LayerParam"](name, abbr).set(value);
      return this;
    }; // End Helper methods

    /**
     * Get the value associated with the given name.
     * @function Transformation#getValue
     * @param {string} name - the name of the parameter
     * @return {*} the processed value associated with the given name
     * @description Use {@link get}.origValue for the value originally provided for the parameter
     */


    this.getValue = function (name) {
      var value = trans[name] && trans[name].value();
      return value != null ? value : this.otherOptions[name];
    };
    /**
     * Get the parameter object for the given parameter name
     * @function Transformation#get
     * @param {string} name the name of the transformation parameter
     * @returns {Param} the param object for the given name, or undefined
     */


    this.get = function (name) {
      return trans[name];
    };
    /**
     * Remove a transformation option from the transformation.
     * @function Transformation#remove
     * @param {string} name - the name of the option to remove
     * @return {*} Returns the option that was removed or null if no option by that name was found. The type of the
     *              returned value depends on the value.
     */


    this.remove = function (name) {
      var temp;

      switch (false) {
        case trans[name] == null:
          temp = trans[name];
          delete trans[name];
          return temp.origValue;

        case this.otherOptions[name] == null:
          temp = this.otherOptions[name];
          delete this.otherOptions[name];
          return temp;

        default:
          return null;
      }
    };
    /**
     * Return an array of all the keys (option names) in the transformation.
     * @return {Array<string>} the keys in snakeCase format
     */


    this.keys = function () {
      var key;
      return function () {
        var results;
        results = [];

        for (key in trans) {
          if (key != null) {
            results.push(key.match(VAR_NAME_RE) ? key : Object(_util__WEBPACK_IMPORTED_MODULE_3__["snakeCase"])(key));
          }
        }

        return results;
      }().sort();
    };
    /**
     * Returns a plain object representation of the transformation. Values are processed.
     * @function Transformation#toPlainObject
     * @return {Object} the transformation options as plain object
     */


    this.toPlainObject = function () {
      var hash, key, list;
      hash = {};

      for (key in trans) {
        hash[key] = trans[key].value();

        if (Object(_util__WEBPACK_IMPORTED_MODULE_3__["isPlainObject"])(hash[key])) {
          hash[key] = Object(_util__WEBPACK_IMPORTED_MODULE_3__["cloneDeep"])(hash[key]);
        }
      }

      if (!Object(_util__WEBPACK_IMPORTED_MODULE_3__["isEmpty"])(this.chained)) {
        list = this.chained.map(function (tr) {
          return tr.toPlainObject();
        });
        list.push(hash);
        hash = {
          transformation: list
        };
      }

      return hash;
    };
    /**
     * Complete the current transformation and chain to a new one.
     * In the URL, transformations are chained together by slashes.
     * @function Transformation#chain
     * @return {Transformation} Returns this transformation for chaining
     * @example
     * var tr = cloudinary.Transformation.new();
     * tr.width(10).crop('fit').chain().angle(15).serialize()
     * // produces "c_fit,w_10/a_15"
     */


    this.chain = function () {
      var names, tr;
      names = Object.getOwnPropertyNames(trans);

      if (names.length !== 0) {
        tr = new this.constructor(this.toOptions(false));
        this.resetTransformations();
        this.chained.push(tr);
      }

      return this;
    };

    this.resetTransformations = function () {
      trans = {};
      return this;
    };

    this.otherOptions = {};
    this.chained = [];
    this.fromOptions(options);
  }
  /**
   * Merge the provided options with own's options
   * @param {Object} [options={}] key-value list of options
   * @returns {Transformation} Returns this instance for chaining
   */


  _createClass(TransformationBase, [{
    key: "fromOptions",
    value: function fromOptions(options) {
      if (!Object(_util__WEBPACK_IMPORTED_MODULE_3__["isEmpty"])(options)) {
        if (options instanceof TransformationBase) {
          this.fromTransformation(options);
        } else {
          options || (options = {});

          if (Object(_util__WEBPACK_IMPORTED_MODULE_3__["isString"])(options) || Object(_util__WEBPACK_IMPORTED_MODULE_3__["isArray"])(options)) {
            options = {
              transformation: options
            };
          }

          options = Object(_util__WEBPACK_IMPORTED_MODULE_3__["cloneDeep"])(options, function (value) {
            if (value instanceof TransformationBase) {
              return new value.constructor(value.toOptions());
            }
          }); // Handling of "if" statements precedes other options as it creates a chained transformation

          if (options["if"]) {
            this.set("if", options["if"]);
            delete options["if"];
          }

          for (var key in options) {
            var opt = options[key];

            if (key.match(VAR_NAME_RE)) {
              if (key !== '$attr') {
                this.set('variable', key, opt);
              }
            } else {
              this.set(key, opt);
            }
          }
        }
      }

      return this;
    }
  }, {
    key: "fromTransformation",
    value: function fromTransformation(other) {
      var _this = this;

      if (other instanceof TransformationBase) {
        other.keys().forEach(function (key) {
          return _this.set(key, other.get(key).origValue);
        });
      }

      return this;
    }
    /**
     * Set a parameter.
     * The parameter name `key` is converted to
     * @param {string} key - the name of the parameter
     * @param {*} values - the value of the parameter
     * @returns {Transformation} Returns this instance for chaining
     */

  }, {
    key: "set",
    value: function set(key) {
      var camelKey;
      camelKey = Object(_util__WEBPACK_IMPORTED_MODULE_3__["camelCase"])(key);

      for (var _len2 = arguments.length, values = new Array(_len2 > 1 ? _len2 - 1 : 0), _key2 = 1; _key2 < _len2; _key2++) {
        values[_key2 - 1] = arguments[_key2];
      }

      if (Object(_util__WEBPACK_IMPORTED_MODULE_3__["contains"])(Transformation.methods, camelKey)) {
        this[camelKey].apply(this, values);
      } else {
        this.otherOptions[key] = values[0];
      }

      return this;
    }
  }, {
    key: "hasLayer",
    value: function hasLayer() {
      return this.getValue("overlay") || this.getValue("underlay");
    }
    /**
     * Generate a string representation of the transformation.
     * @function Transformation#serialize
     * @return {string} Returns the transformation as a string
     */

  }, {
    key: "serialize",
    value: function serialize() {
      var ifParam, j, len, paramList, ref, ref1, ref2, ref3, ref4, resultArray, t, transformationList, transformationString, transformations, value, variables, vars;
      resultArray = this.chained.map(function (tr) {
        return tr.serialize();
      });
      paramList = this.keys();
      transformations = (ref = this.get("transformation")) != null ? ref.serialize() : void 0;
      ifParam = (ref1 = this.get("if")) != null ? ref1.serialize() : void 0;
      variables = processVar((ref2 = this.get("variables")) != null ? ref2.value() : void 0);
      paramList = Object(_util__WEBPACK_IMPORTED_MODULE_3__["difference"])(paramList, ["transformation", "if", "variables"]);
      vars = [];
      transformationList = [];

      for (j = 0, len = paramList.length; j < len; j++) {
        t = paramList[j];

        if (t.match(VAR_NAME_RE)) {
          vars.push(t + "_" + _expression__WEBPACK_IMPORTED_MODULE_0__["default"].normalize((ref3 = this.get(t)) != null ? ref3.value() : void 0));
        } else {
          transformationList.push((ref4 = this.get(t)) != null ? ref4.serialize() : void 0);
        }
      }

      switch (false) {
        case !Object(_util__WEBPACK_IMPORTED_MODULE_3__["isString"])(transformations):
          transformationList.push(transformations);
          break;

        case !Object(_util__WEBPACK_IMPORTED_MODULE_3__["isArray"])(transformations):
          resultArray = resultArray.concat(transformations);
      }

      transformationList = function () {
        var k, len1, results;
        results = [];

        for (k = 0, len1 = transformationList.length; k < len1; k++) {
          value = transformationList[k];

          if (Object(_util__WEBPACK_IMPORTED_MODULE_3__["isArray"])(value) && !Object(_util__WEBPACK_IMPORTED_MODULE_3__["isEmpty"])(value) || !Object(_util__WEBPACK_IMPORTED_MODULE_3__["isArray"])(value) && value) {
            results.push(value);
          }
        }

        return results;
      }();

      transformationList = vars.sort().concat(variables).concat(transformationList.sort());

      if (ifParam === "if_end") {
        transformationList.push(ifParam);
      } else if (!Object(_util__WEBPACK_IMPORTED_MODULE_3__["isEmpty"])(ifParam)) {
        transformationList.unshift(ifParam);
      }

      transformationString = Object(_util__WEBPACK_IMPORTED_MODULE_3__["compact"])(transformationList).join(this.param_separator);

      if (!Object(_util__WEBPACK_IMPORTED_MODULE_3__["isEmpty"])(transformationString)) {
        resultArray.push(transformationString);
      }

      return Object(_util__WEBPACK_IMPORTED_MODULE_3__["compact"])(resultArray).join(this.trans_separator);
    }
    /**
     * Provide a list of all the valid transformation option names
     * @function Transformation#listNames
     * @private
     * @return {Array<string>} a array of all the valid option names
     */

  }, {
    key: "listNames",
    value: function listNames() {
      return Transformation.methods;
    }
    /**
     * Returns attributes for an HTML tag.
     * @function Cloudinary.toHtmlAttributes
     * @return PlainObject
     */

  }, {
    key: "toHtmlAttributes",
    value: function toHtmlAttributes() {
      var _this2 = this;

      var attrName, height, key, options, ref2, ref3, value, width;
      options = {};

      for (key in this.otherOptions) {
        value = this.otherOptions[key];

        if (Object(_util__WEBPACK_IMPORTED_MODULE_3__["contains"])(Transformation.PARAM_NAMES, Object(_util__WEBPACK_IMPORTED_MODULE_3__["snakeCase"])(key))) {
          continue;
        }

        attrName = /^html_/.test(key) ? key.slice(5) : key;
        options[attrName] = value;
      } // convert all "html_key" to "key" with the same value


      this.keys().forEach(function (key) {
        if (/^html_/.test(key)) {
          options[Object(_util__WEBPACK_IMPORTED_MODULE_3__["camelCase"])(key.slice(5))] = _this2.getValue(key);
        }
      });

      if (!(this.hasLayer() || this.getValue("angle") || Object(_util__WEBPACK_IMPORTED_MODULE_3__["contains"])(["fit", "limit", "lfill"], this.getValue("crop")))) {
        width = (ref2 = this.get("width")) != null ? ref2.origValue : void 0;
        height = (ref3 = this.get("height")) != null ? ref3.origValue : void 0;

        if (parseFloat(width) >= 1.0) {
          if (options['width'] == null) {
            options['width'] = width;
          }
        }

        if (parseFloat(height) >= 1.0) {
          if (options['height'] == null) {
            options['height'] = height;
          }
        }
      }

      return options;
    }
  }, {
    key: "isValidParamName",
    value: function isValidParamName(name) {
      return Transformation.methods.indexOf(Object(_util__WEBPACK_IMPORTED_MODULE_3__["camelCase"])(name)) >= 0;
    }
    /**
     * Delegate to the parent (up the call chain) to produce HTML
     * @function Transformation#toHtml
     * @return {string} HTML representation of the parent if possible.
     * @example
     * tag = cloudinary.ImageTag.new("sample", {cloud_name: "demo"})
     * // ImageTag {name: "img", publicId: "sample"}
     * tag.toHtml()
     * // <img src="http://res.cloudinary.com/demo/image/upload/sample">
     * tag.transformation().crop("fit").width(300).toHtml()
     * // <img src="http://res.cloudinary.com/demo/image/upload/c_fit,w_300/sample">
     */

  }, {
    key: "toHtml",
    value: function toHtml() {
      var ref;
      return (ref = this.getParent()) != null ? typeof ref.toHtml === "function" ? ref.toHtml() : void 0 : void 0;
    }
  }, {
    key: "toString",
    value: function toString() {
      return this.serialize();
    }
  }]);

  return TransformationBase;
}();

var VAR_NAME_RE = /^\$[a-zA-Z0-9]+$/;
TransformationBase.prototype.trans_separator = '/';
TransformationBase.prototype.param_separator = ',';

function lastArgCallback(args) {
  var callback;
  callback = args != null ? args[args.length - 1] : void 0;

  if (Object(_util__WEBPACK_IMPORTED_MODULE_3__["isFunction"])(callback)) {
    return callback;
  } else {
    return void 0;
  }
}

function processVar(varArray) {
  var j, len, name, results, v;

  if (Object(_util__WEBPACK_IMPORTED_MODULE_3__["isArray"])(varArray)) {
    results = [];

    for (j = 0, len = varArray.length; j < len; j++) {
      var _varArray$j = _slicedToArray(varArray[j], 2);

      name = _varArray$j[0];
      v = _varArray$j[1];
      results.push("".concat(name, "_").concat(_expression__WEBPACK_IMPORTED_MODULE_0__["default"].normalize(v)));
    }

    return results;
  } else {
    return varArray;
  }
}
/**
 * Transformation Class methods.
 * This is a list of the parameters defined in Transformation.
 * Values are camelCased.
 * @const Transformation.methods
 * @private
 * @ignore
 * @type {Array<string>}
 */

/**
 * Parameters that are filtered out before passing the options to an HTML tag.
 *
 * The list of parameters is a combination of `Transformation::methods` and `Configuration::CONFIG_PARAMS`
 * @const {Array<string>} Transformation.PARAM_NAMES
 * @private
 * @ignore
 * @see toHtmlAttributes
 */


var Transformation =
/*#__PURE__*/
function (_TransformationBase) {
  _inherits(Transformation, _TransformationBase);

  /**
   *  Represents a single transformation.
   *  @class Transformation
   *  @example
   *  t = new cloudinary.Transformation();
   * t.angle(20).crop("scale").width("auto");
   *
   * // or
   *
   * t = new cloudinary.Transformation( {angle: 20, crop: "scale", width: "auto"});
   */
  function Transformation(options) {
    _classCallCheck(this, Transformation);

    return _possibleConstructorReturn(this, _getPrototypeOf(Transformation).call(this, options));
  }
  /**
   * Convenience constructor
   * @param {Object} options
   * @return {Transformation}
   * @example cl = cloudinary.Transformation.new( {angle: 20, crop: "scale", width: "auto"})
   */


  _createClass(Transformation, [{
    key: "angle",

    /*
      Transformation Parameters
    */
    value: function angle(value) {
      return this.arrayParam(value, "angle", "a", ".", _expression__WEBPACK_IMPORTED_MODULE_0__["default"].normalize);
    }
  }, {
    key: "audioCodec",
    value: function audioCodec(value) {
      return this.param(value, "audio_codec", "ac");
    }
  }, {
    key: "audioFrequency",
    value: function audioFrequency(value) {
      return this.param(value, "audio_frequency", "af");
    }
  }, {
    key: "aspectRatio",
    value: function aspectRatio(value) {
      return this.param(value, "aspect_ratio", "ar", _expression__WEBPACK_IMPORTED_MODULE_0__["default"].normalize);
    }
  }, {
    key: "background",
    value: function background(value) {
      return this.param(value, "background", "b", _parameters__WEBPACK_IMPORTED_MODULE_4__["Param"].norm_color);
    }
  }, {
    key: "bitRate",
    value: function bitRate(value) {
      return this.param(value, "bit_rate", "br");
    }
  }, {
    key: "border",
    value: function border(value) {
      return this.param(value, "border", "bo", function (border) {
        if (Object(_util__WEBPACK_IMPORTED_MODULE_3__["isPlainObject"])(border)) {
          border = Object(_util__WEBPACK_IMPORTED_MODULE_3__["assign"])({}, {
            color: "black",
            width: 2
          }, border);
          return "".concat(border.width, "px_solid_").concat(_parameters__WEBPACK_IMPORTED_MODULE_4__["Param"].norm_color(border.color));
        } else {
          return border;
        }
      });
    }
  }, {
    key: "color",
    value: function color(value) {
      return this.param(value, "color", "co", _parameters__WEBPACK_IMPORTED_MODULE_4__["Param"].norm_color);
    }
  }, {
    key: "colorSpace",
    value: function colorSpace(value) {
      return this.param(value, "color_space", "cs");
    }
  }, {
    key: "crop",
    value: function crop(value) {
      return this.param(value, "crop", "c");
    }
  }, {
    key: "defaultImage",
    value: function defaultImage(value) {
      return this.param(value, "default_image", "d");
    }
  }, {
    key: "delay",
    value: function delay(value) {
      return this.param(value, "delay", "dl");
    }
  }, {
    key: "density",
    value: function density(value) {
      return this.param(value, "density", "dn");
    }
  }, {
    key: "duration",
    value: function duration(value) {
      return this.rangeParam(value, "duration", "du");
    }
  }, {
    key: "dpr",
    value: function dpr(value) {
      return this.param(value, "dpr", "dpr", function (dpr) {
        dpr = dpr.toString();

        if (dpr != null ? dpr.match(/^\d+$/) : void 0) {
          return dpr + ".0";
        } else {
          return _expression__WEBPACK_IMPORTED_MODULE_0__["default"].normalize(dpr);
        }
      });
    }
  }, {
    key: "effect",
    value: function effect(value) {
      return this.arrayParam(value, "effect", "e", ":", _expression__WEBPACK_IMPORTED_MODULE_0__["default"].normalize);
    }
  }, {
    key: "else",
    value: function _else() {
      return this.if('else');
    }
  }, {
    key: "endIf",
    value: function endIf() {
      return this.if('end');
    }
  }, {
    key: "endOffset",
    value: function endOffset(value) {
      return this.rangeParam(value, "end_offset", "eo");
    }
  }, {
    key: "fallbackContent",
    value: function fallbackContent(value) {
      return this.param(value, "fallback_content");
    }
  }, {
    key: "fetchFormat",
    value: function fetchFormat(value) {
      return this.param(value, "fetch_format", "f");
    }
  }, {
    key: "format",
    value: function format(value) {
      return this.param(value, "format");
    }
  }, {
    key: "flags",
    value: function flags(value) {
      return this.arrayParam(value, "flags", "fl", ".");
    }
  }, {
    key: "gravity",
    value: function gravity(value) {
      return this.param(value, "gravity", "g");
    }
  }, {
    key: "fps",
    value: function fps(value) {
      return this.param(value, "fps", "fps", function (fps) {
        if (Object(_util__WEBPACK_IMPORTED_MODULE_3__["isString"])(fps)) {
          return fps;
        } else if (Object(_util__WEBPACK_IMPORTED_MODULE_3__["isArray"])(fps)) {
          return fps.join("-");
        } else {
          return fps;
        }
      });
    }
  }, {
    key: "height",
    value: function height(value) {
      var _this3 = this;

      return this.param(value, "height", "h", function () {
        if (_this3.getValue("crop") || _this3.getValue("overlay") || _this3.getValue("underlay")) {
          return _expression__WEBPACK_IMPORTED_MODULE_0__["default"].normalize(value);
        } else {
          return null;
        }
      });
    }
  }, {
    key: "htmlHeight",
    value: function htmlHeight(value) {
      return this.param(value, "html_height");
    }
  }, {
    key: "htmlWidth",
    value: function htmlWidth(value) {
      return this.param(value, "html_width");
    }
  }, {
    key: "if",
    value: function _if() {
      var value = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : "";
      var i, ifVal, j, ref, trIf, trRest;

      switch (value) {
        case "else":
          this.chain();
          return this.param(value, "if", "if");

        case "end":
          this.chain();

          for (i = j = ref = this.chained.length - 1; j >= 0; i = j += -1) {
            ifVal = this.chained[i].getValue("if");

            if (ifVal === "end") {
              break;
            } else if (ifVal != null) {
              trIf = Transformation.new().if(ifVal);
              this.chained[i].remove("if");
              trRest = this.chained[i];
              this.chained[i] = Transformation.new().transformation([trIf, trRest]);

              if (ifVal !== "else") {
                break;
              }
            }
          }

          return this.param(value, "if", "if");

        case "":
          return _condition__WEBPACK_IMPORTED_MODULE_1__["default"].new().setParent(this);

        default:
          return this.param(value, "if", "if", function (value) {
            return _condition__WEBPACK_IMPORTED_MODULE_1__["default"].new(value).toString();
          });
      }
    }
  }, {
    key: "keyframeInterval",
    value: function keyframeInterval(value) {
      return this.param(value, "keyframe_interval", "ki");
    }
  }, {
    key: "offset",
    value: function offset(value) {
      var end_o, start_o;

      var _ref = Object(_util__WEBPACK_IMPORTED_MODULE_3__["isFunction"])(value != null ? value.split : void 0) ? value.split('..') : Object(_util__WEBPACK_IMPORTED_MODULE_3__["isArray"])(value) ? value : [null, null];

      var _ref2 = _slicedToArray(_ref, 2);

      start_o = _ref2[0];
      end_o = _ref2[1];

      if (start_o != null) {
        this.startOffset(start_o);
      }

      if (end_o != null) {
        return this.endOffset(end_o);
      }
    }
  }, {
    key: "opacity",
    value: function opacity(value) {
      return this.param(value, "opacity", "o", _expression__WEBPACK_IMPORTED_MODULE_0__["default"].normalize);
    }
  }, {
    key: "overlay",
    value: function overlay(value) {
      return this.layerParam(value, "overlay", "l");
    }
  }, {
    key: "page",
    value: function page(value) {
      return this.param(value, "page", "pg");
    }
  }, {
    key: "poster",
    value: function poster(value) {
      return this.param(value, "poster");
    }
  }, {
    key: "prefix",
    value: function prefix(value) {
      return this.param(value, "prefix", "p");
    }
  }, {
    key: "quality",
    value: function quality(value) {
      return this.param(value, "quality", "q", _expression__WEBPACK_IMPORTED_MODULE_0__["default"].normalize);
    }
  }, {
    key: "radius",
    value: function radius(value) {
      return this.arrayParam(value, "radius", "r", ":", _expression__WEBPACK_IMPORTED_MODULE_0__["default"].normalize);
    }
  }, {
    key: "rawTransformation",
    value: function rawTransformation(value) {
      return this.rawParam(value, "raw_transformation");
    }
  }, {
    key: "size",
    value: function size(value) {
      var height, width;

      if (Object(_util__WEBPACK_IMPORTED_MODULE_3__["isFunction"])(value != null ? value.split : void 0)) {
        var _value$split = value.split('x');

        var _value$split2 = _slicedToArray(_value$split, 2);

        width = _value$split2[0];
        height = _value$split2[1];
        this.width(width);
        return this.height(height);
      }
    }
  }, {
    key: "sourceTypes",
    value: function sourceTypes(value) {
      return this.param(value, "source_types");
    }
  }, {
    key: "sourceTransformation",
    value: function sourceTransformation(value) {
      return this.param(value, "source_transformation");
    }
  }, {
    key: "startOffset",
    value: function startOffset(value) {
      return this.rangeParam(value, "start_offset", "so");
    }
  }, {
    key: "streamingProfile",
    value: function streamingProfile(value) {
      return this.param(value, "streaming_profile", "sp");
    }
  }, {
    key: "transformation",
    value: function transformation(value) {
      return this.transformationParam(value, "transformation", "t");
    }
  }, {
    key: "underlay",
    value: function underlay(value) {
      return this.layerParam(value, "underlay", "u");
    }
  }, {
    key: "variable",
    value: function variable(name, value) {
      return this.param(value, name, name);
    }
  }, {
    key: "variables",
    value: function variables(values) {
      return this.arrayParam(values, "variables");
    }
  }, {
    key: "videoCodec",
    value: function videoCodec(value) {
      return this.param(value, "video_codec", "vc", _parameters__WEBPACK_IMPORTED_MODULE_4__["Param"].process_video_params);
    }
  }, {
    key: "videoSampling",
    value: function videoSampling(value) {
      return this.param(value, "video_sampling", "vs");
    }
  }, {
    key: "width",
    value: function width(value) {
      var _this4 = this;

      return this.param(value, "width", "w", function () {
        if (_this4.getValue("crop") || _this4.getValue("overlay") || _this4.getValue("underlay")) {
          return _expression__WEBPACK_IMPORTED_MODULE_0__["default"].normalize(value);
        } else {
          return null;
        }
      });
    }
  }, {
    key: "x",
    value: function x(value) {
      return this.param(value, "x", "x", _expression__WEBPACK_IMPORTED_MODULE_0__["default"].normalize);
    }
  }, {
    key: "y",
    value: function y(value) {
      return this.param(value, "y", "y", _expression__WEBPACK_IMPORTED_MODULE_0__["default"].normalize);
    }
  }, {
    key: "zoom",
    value: function zoom(value) {
      return this.param(value, "zoom", "z", _expression__WEBPACK_IMPORTED_MODULE_0__["default"].normalize);
    }
  }], [{
    key: "new",
    value: function _new(options) {
      return new Transformation(options);
    }
  }]);

  return Transformation;
}(TransformationBase);
/**
 * Transformation Class methods.
 * This is a list of the parameters defined in Transformation.
 * Values are camelCased.
 */


Transformation.methods = ["angle", "audioCodec", "audioFrequency", "aspectRatio", "background", "bitRate", "border", "color", "colorSpace", "crop", "defaultImage", "delay", "density", "duration", "dpr", "effect", "else", "endIf", "endOffset", "fallbackContent", "fetchFormat", "format", "flags", "gravity", "fps", "height", "htmlHeight", "htmlWidth", "if", "keyframeInterval", "offset", "opacity", "overlay", "page", "poster", "prefix", "quality", "radius", "rawTransformation", "size", "sourceTypes", "sourceTransformation", "startOffset", "streamingProfile", "transformation", "underlay", "variable", "variables", "videoCodec", "videoSampling", "width", "x", "y", "zoom"];
/**
 * Parameters that are filtered out before passing the options to an HTML tag.
 *
 * The list of parameters is a combination of `Transformation::methods` and `Configuration::CONFIG_PARAMS`
 */

Transformation.PARAM_NAMES = Transformation.methods.map(_util__WEBPACK_IMPORTED_MODULE_3__["snakeCase"]).concat(_configuration__WEBPACK_IMPORTED_MODULE_2__["default"].CONFIG_PARAMS);
/* harmony default export */ __webpack_exports__["default"] = (Transformation);

/***/ }),

/***/ "./src/url.js":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return url; });
/* harmony import */ var _transformation__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("./src/transformation.js");
/* harmony import */ var _constants__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__("./src/constants.js");
/* harmony import */ var _util__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__("./src/util/lodash.js");
/* harmony import */ var _crc32__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__("./src/crc32.js");





function absolutize(url) {
  var prefix;

  if (!url.match(/^https?:\//)) {
    prefix = document.location.protocol + '//' + document.location.host;

    if (url[0] === '?') {
      prefix += document.location.pathname;
    } else if (url[0] !== '/') {
      prefix += document.location.pathname.replace(/\/[^\/]*$/, '/');
    }

    url = prefix + url;
  }

  return url;
} // Produce a number between 1 and 5 to be used for cdn sub domains designation


function cdnSubdomainNumber(publicId) {
  return Object(_crc32__WEBPACK_IMPORTED_MODULE_3__["default"])(publicId) % 5 + 1;
} //  * cdn_subdomain - Boolean (default: false). Whether to automatically build URLs with multiple CDN sub-domains. See this blog post for more details.
//  * private_cdn - Boolean (default: false). Should be set to true for Advanced plan's users that have a private CDN distribution.
//  * secure_distribution - The domain name of the CDN distribution to use for building HTTPS URLs. Relevant only for Advanced plan's users that have a private CDN distribution.
//  * cname - Custom domain name to use for building HTTP URLs. Relevant only for Advanced plan's users that have a private CDN distribution and a custom CNAME.
//  * secure - Boolean (default: false). Force HTTPS URLs of images even if embedded in non-secure HTTP pages.


function cloudinaryUrlPrefix(publicId, options) {
  var cdnPart, host, path, protocol, ref, subdomain;

  if (((ref = options.cloud_name) != null ? ref.indexOf("/") : void 0) === 0) {
    return '/res' + options.cloud_name;
  } // defaults


  protocol = "http://";
  cdnPart = "";
  subdomain = "res";
  host = ".cloudinary.com";
  path = "/" + options.cloud_name; // modifications

  if (options.protocol) {
    protocol = options.protocol + '//';
  }

  if (options.private_cdn) {
    cdnPart = options.cloud_name + "-";
    path = "";
  }

  if (options.cdn_subdomain) {
    subdomain = "res-" + cdnSubdomainNumber(publicId);
  }

  if (options.secure) {
    protocol = "https://";

    if (options.secure_cdn_subdomain === false) {
      subdomain = "res";
    }

    if (options.secure_distribution != null && options.secure_distribution !== _constants__WEBPACK_IMPORTED_MODULE_1__["OLD_AKAMAI_SHARED_CDN"] && options.secure_distribution !== _constants__WEBPACK_IMPORTED_MODULE_1__["SHARED_CDN"]) {
      cdnPart = "";
      subdomain = "";
      host = options.secure_distribution;
    }
  } else if (options.cname) {
    protocol = "http://";
    cdnPart = "";
    subdomain = options.cdn_subdomain ? 'a' + (Object(_crc32__WEBPACK_IMPORTED_MODULE_3__["default"])(publicId) % 5 + 1) + '.' : '';
    host = options.cname;
  }

  return [protocol, cdnPart, subdomain, host, path].join("");
}
/**
 * Return the resource type and action type based on the given configuration
 * @function Cloudinary#finalizeResourceType
 * @param {Object|string} resourceType
 * @param {string} [type='upload']
 * @param {string} [urlSuffix]
 * @param {boolean} [useRootPath]
 * @param {boolean} [shorten]
 * @returns {string} resource_type/type
 * @ignore
 */


function finalizeResourceType() {
  var resourceType = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : "image";
  var type = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : "upload";
  var urlSuffix = arguments.length > 2 ? arguments[2] : undefined;
  var useRootPath = arguments.length > 3 ? arguments[3] : undefined;
  var shorten = arguments.length > 4 ? arguments[4] : undefined;
  var options;
  resourceType = resourceType == null ? "image" : resourceType;
  type = type == null ? "upload" : type;

  if (Object(_util__WEBPACK_IMPORTED_MODULE_2__["isPlainObject"])(resourceType)) {
    options = resourceType;
    resourceType = options.resource_type;
    type = options.type;
    urlSuffix = options.url_suffix;
    useRootPath = options.use_root_path;
    shorten = options.shorten;
  }

  if (type == null) {
    type = 'upload';
  }

  if (urlSuffix != null) {
    resourceType = _constants__WEBPACK_IMPORTED_MODULE_1__["SEO_TYPES"]["".concat(resourceType, "/").concat(type)];
    type = null;

    if (resourceType == null) {
      throw new Error("URL Suffix only supported for ".concat(Object.keys(_constants__WEBPACK_IMPORTED_MODULE_1__["SEO_TYPES"]).join(', ')));
    }
  }

  if (useRootPath) {
    if (resourceType === 'image' && type === 'upload' || resourceType === "images") {
      resourceType = null;
      type = null;
    } else {
      throw new Error("Root path only supported for image/upload");
    }
  }

  if (shorten && resourceType === 'image' && type === 'upload') {
    resourceType = 'iu';
    type = null;
  }

  return [resourceType, type].join("/");
}
/**
 * Generate an resource URL.
 * @function Cloudinary#url
 * @param {string} publicId - the public ID of the resource
 * @param {Object} [options] - options for the tag and transformations, possible values include all {@link Transformation} parameters
 *                          and {@link Configuration} parameters
 * @param {string} [options.type='upload'] - the classification of the resource
 * @param {Object} [options.resource_type='image'] - the type of the resource
 * @param {Object} [config] URL configuration
 * @return {string} The resource URL
 */


function url(publicId) {
  var options = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};
  var config = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : {};
  var error, prefix, ref, resourceTypeAndType, transformation, transformationString, url, version;

  if (!publicId) {
    return publicId;
  }

  if (options instanceof _transformation__WEBPACK_IMPORTED_MODULE_0__["default"]) {
    options = options.toOptions();
  }

  options = Object(_util__WEBPACK_IMPORTED_MODULE_2__["defaults"])({}, options, config, _constants__WEBPACK_IMPORTED_MODULE_1__["DEFAULT_IMAGE_PARAMS"]);

  if (options.type === 'fetch') {
    options.fetch_format = options.fetch_format || options.format;
    publicId = absolutize(publicId);
  }

  transformation = new _transformation__WEBPACK_IMPORTED_MODULE_0__["default"](options);
  transformationString = transformation.serialize();

  if (!options.cloud_name) {
    throw 'Unknown cloud_name';
  } // if publicId has a '/' and doesn't begin with v<number> and doesn't start with http[s]:/ and version is empty


  if (publicId.search('/') >= 0 && !publicId.match(/^v[0-9]+/) && !publicId.match(/^https?:\//) && !((ref = options.version) != null ? ref.toString() : void 0)) {
    options.version = 1;
  }

  if (publicId.match(/^https?:/)) {
    if (options.type === 'upload' || options.type === 'asset') {
      url = publicId;
    } else {
      publicId = encodeURIComponent(publicId).replace(/%3A/g, ':').replace(/%2F/g, '/');
    }
  } else {
    try {
      // Make sure publicId is URI encoded.
      publicId = decodeURIComponent(publicId);
    } catch (error1) {
      error = error1;
    }

    publicId = encodeURIComponent(publicId).replace(/%3A/g, ':').replace(/%2F/g, '/');

    if (options.url_suffix) {
      if (options.url_suffix.match(/[\.\/]/)) {
        throw 'url_suffix should not include . or /';
      }

      publicId = publicId + '/' + options.url_suffix;
    }

    if (options.format) {
      if (!options.trust_public_id) {
        publicId = publicId.replace(/\.(jpg|png|gif|webp)$/, '');
      }

      publicId = publicId + '.' + options.format;
    }
  }

  prefix = cloudinaryUrlPrefix(publicId, options);
  resourceTypeAndType = finalizeResourceType(options.resource_type, options.type, options.url_suffix, options.use_root_path, options.shorten);
  version = options.version ? 'v' + options.version : '';
  return url || Object(_util__WEBPACK_IMPORTED_MODULE_2__["compact"])([prefix, resourceTypeAndType, transformationString, version, publicId]).join('/').replace(/([^:])\/+/g, '$1/');
}
;

/***/ }),

/***/ "./src/utf8_encode.js":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/**
 * UTF8 encoder
 *
 */
var utf8_encode;
/* harmony default export */ __webpack_exports__["default"] = (utf8_encode = function utf8_encode(argString) {
  var c1, enc, end, n, start, string, stringl, utftext; // http://kevin.vanzonneveld.net
  // +   original by: Webtoolkit.info (http://www.webtoolkit.info/)
  // +   improved by: Kevin van Zonneveld (http://kevin.vanzonneveld.net)
  // +   improved by: sowberry
  // +    tweaked by: Jack
  // +   bugfixed by: Onno Marsman
  // +   improved by: Yves Sucaet
  // +   bugfixed by: Onno Marsman
  // +   bugfixed by: Ulrich
  // +   bugfixed by: Rafal Kukawski
  // +   improved by: kirilloid
  // *     example 1: utf8_encode('Kevin van Zonneveld');
  // *     returns 1: 'Kevin van Zonneveld'

  if (argString === null || typeof argString === 'undefined') {
    return '';
  }

  string = argString + ''; // .replace(/\r\n/g, "\n").replace(/\r/g, "\n");

  utftext = '';
  start = void 0;
  end = void 0;
  stringl = 0;
  start = end = 0;
  stringl = string.length;
  n = 0;

  while (n < stringl) {
    c1 = string.charCodeAt(n);
    enc = null;

    if (c1 < 128) {
      end++;
    } else if (c1 > 127 && c1 < 2048) {
      enc = String.fromCharCode(c1 >> 6 | 192, c1 & 63 | 128);
    } else {
      enc = String.fromCharCode(c1 >> 12 | 224, c1 >> 6 & 63 | 128, c1 & 63 | 128);
    }

    if (enc !== null) {
      if (end > start) {
        utftext += string.slice(start, end);
      }

      utftext += enc;
      start = end = n + 1;
    }

    n++;
  }

  if (end > start) {
    utftext += string.slice(start, stringl);
  }

  return utftext;
});

/***/ }),

/***/ "./src/util/baseutil.js":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "allStrings", function() { return allStrings; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "without", function() { return without; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "isNumberLike", function() { return isNumberLike; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "smartEscape", function() { return smartEscape; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "defaults", function() { return defaults; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "objectProto", function() { return objectProto; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "objToString", function() { return objToString; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "isObject", function() { return isObject; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "funcTag", function() { return funcTag; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "isFunction", function() { return isFunction; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "reWords", function() { return reWords; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "camelCase", function() { return camelCase; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "snakeCase", function() { return snakeCase; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "convertKeys", function() { return convertKeys; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "withCamelCaseKeys", function() { return withCamelCaseKeys; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "withSnakeCaseKeys", function() { return withSnakeCaseKeys; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "base64Encode", function() { return base64Encode; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "base64EncodeURL", function() { return base64EncodeURL; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "extractUrlParams", function() { return extractUrlParams; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "patchFetchFormat", function() { return patchFetchFormat; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "optionConsume", function() { return optionConsume; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "isEmpty", function() { return isEmpty; });
function _typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

/*
 * Includes common utility methods and shims
 */

/**
 * Return true if all items in list are strings
 * @function Util.allString
 * @param {Array} list - an array of items
 */
var allStrings = function allStrings(list) {
  return list.length && list.every(function (value) {
    return typeof value === 'string';
  });
};
/**
* Creates a new array without the given item.
* @function Util.without
* @param {Array} array - original array
* @param {*} item - the item to exclude from the new array
* @return {Array} a new array made of the original array's items except for `item`
 */

var without = function without(array, item) {
  return array.filter(function (v) {
    return v !== item;
  });
};
/**
* Return true is value is a number or a string representation of a number.
* @function Util.isNumberLike
* @param {*} value
* @returns {boolean} true if value is a number
* @example
*    Util.isNumber(0) // true
*    Util.isNumber("1.3") // true
*    Util.isNumber("") // false
*    Util.isNumber(undefined) // false
 */

var isNumberLike = function isNumberLike(value) {
  return value != null && !isNaN(parseFloat(value));
};
/**
 * Escape all characters matching unsafe in the given string
 * @function Util.smartEscape
 * @param {string} string - source string to escape
 * @param {RegExp} unsafe - characters that must be escaped
 * @return {string} escaped string
 */

var smartEscape = function smartEscape(string) {
  var unsafe = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : /([^a-zA-Z0-9_.\-\/:]+)/g;
  return string.replace(unsafe, function (match) {
    return match.split("").map(function (c) {
      return "%" + c.charCodeAt(0).toString(16).toUpperCase();
    }).join("");
  });
};
/**
 * Assign values from sources if they are not defined in the destination.
 * Once a value is set it does not change
 * @function Util.defaults
 * @param {Object} destination - the object to assign defaults to
 * @param {...Object} source - the source object(s) to assign defaults from
 * @return {Object} destination after it was modified
 */

var defaults = function defaults(destination) {
  for (var _len = arguments.length, sources = new Array(_len > 1 ? _len - 1 : 0), _key = 1; _key < _len; _key++) {
    sources[_key - 1] = arguments[_key];
  }

  return sources.reduce(function (dest, source) {
    var key, value;

    for (key in source) {
      value = source[key];

      if (dest[key] === void 0) {
        dest[key] = value;
      }
    }

    return dest;
  }, destination);
};
/*********** lodash functions */

var objectProto = Object.prototype;
/**
 * Used to resolve the [`toStringTag`](http://ecma-international.org/ecma-262/6.0/#sec-object.prototype.tostring)
 * of values.
 */

var objToString = objectProto.toString;
/**
 * Checks if `value` is the [language type](https://es5.github.io/#x8) of `Object`.
 * (e.g. arrays, functions, objects, regexes, `new Number(0)`, and `new String('')`)
 *
 * @param {*} value The value to check.
 * @returns {boolean} Returns `true` if `value` is an object, else `false`.
 * @example
 *
#isObject({});
 * // => true
 *
#isObject([1, 2, 3]);
 * // => true
 *
#isObject(1);
 * // => false
 */

var isObject = function isObject(value) {
  var type; // Avoid a V8 JIT bug in Chrome 19-20.
  // See https://code.google.com/p/v8/issues/detail?id=2291 for more details.

  type = _typeof(value);
  return !!value && (type === 'object' || type === 'function');
};
var funcTag = '[object Function]';
/**
* Checks if `value` is classified as a `Function` object.
* @function Util.isFunction
* @param {*} value The value to check.
* @returns {boolean} Returns `true` if `value` is correctly classified, else `false`.
* @example
*
* function Foo(){};
* isFunction(Foo);
* // => true
*
* isFunction(/abc/);
* // => false
 */

var isFunction = function isFunction(value) {
  // The use of `Object#toString` avoids issues with the `typeof` operator
  // in older versions of Chrome and Safari which return 'function' for regexes
  // and Safari 8 which returns 'object' for typed array constructors.
  return isObject(value) && objToString.call(value) === funcTag;
};
/*********** lodash functions */

/** Used to match words to create compound words. */

var reWords = function () {
  var lower, upper;
  upper = '[A-Z]';
  lower = '[a-z]+';
  return RegExp(upper + '+(?=' + upper + lower + ')|' + upper + '?' + lower + '|' + upper + '+|[0-9]+', 'g');
}();
/**
* Convert string to camelCase
* @function Util.camelCase
* @param {string} source - the string to convert
* @return {string} in camelCase format
 */

var camelCase = function camelCase(source) {
  var words = source.match(reWords);
  words = words.map(function (word) {
    return word.charAt(0).toLocaleUpperCase() + word.slice(1).toLocaleLowerCase();
  });
  words[0] = words[0].toLocaleLowerCase();
  return words.join('');
};
/**
 * Convert string to snake_case
 * @function Util.snakeCase
 * @param {string} source - the string to convert
 * @return {string} in snake_case format
 */

var snakeCase = function snakeCase(source) {
  var words = source.match(reWords);
  words = words.map(function (word) {
    return word.toLocaleLowerCase();
  });
  return words.join('_');
};
/**
 * Creates a new object from source, with the keys transformed using the converter.
 * @param {object} source
 * @param {function|null} converter
 * @returns {object}
 */

var convertKeys = function convertKeys(source, converter) {
  var result, value;
  result = {};

  for (var key in source) {
    value = source[key];

    if (converter) {
      key = converter(key);
    }

    if (!isEmpty(key)) {
      result[key] = value;
    }
  }

  return result;
};
/**
 * Create a copy of the source object with all keys in camelCase
 * @function Util.withCamelCaseKeys
 * @param {Object} value - the object to copy
 * @return {Object} a new object
 */

var withCamelCaseKeys = function withCamelCaseKeys(source) {
  return convertKeys(source, camelCase);
};
/**
 * Create a copy of the source object with all keys in snake_case
 * @function Util.withSnakeCaseKeys
 * @param {Object} value - the object to copy
 * @return {Object} a new object
 */

var withSnakeCaseKeys = function withSnakeCaseKeys(source) {
  return convertKeys(source, snakeCase);
}; // Browser
// Node.js

var base64Encode = typeof btoa !== 'undefined' && isFunction(btoa) ? btoa : typeof Buffer !== 'undefined' && isFunction(Buffer) ? function (input) {
  if (!(input instanceof Buffer)) {
    input = new Buffer.from(String(input), 'binary');
  }

  return input.toString('base64');
} : function (input) {
  throw new Error("No base64 encoding function found");
};
/**
* Returns the Base64-decoded version of url.<br>
* This method delegates to `btoa` if present. Otherwise it tries `Buffer`.
* @function Util.base64EncodeURL
* @param {string} url - the url to encode. the value is URIdecoded and then re-encoded before converting to base64 representation
* @return {string} the base64 representation of the URL
 */

var base64EncodeURL = function base64EncodeURL(url) {
  try {
    url = decodeURI(url);
  } finally {
    url = encodeURI(url);
  }

  return base64Encode(url);
};
/**
 * A list of keys used by the url() function.
 * @private
 */

var URL_KEYS = ['api_secret', 'auth_token', 'cdn_subdomain', 'cloud_name', 'cname', 'format', 'private_cdn', 'resource_type', 'secure', 'secure_cdn_subdomain', 'secure_distribution', 'shorten', 'sign_url', 'ssl_detected', 'type', 'url_suffix', 'use_root_path', 'version'];
/**
 * Create a new object with only URL parameters
 * @param {object} options The source object
 * @return {Object} An object containing only URL parameters
 */

function extractUrlParams(options) {
  return URL_KEYS.reduce(function (obj, key) {
    if (options[key] != null) {
      obj[key] = options[key];
    }

    return obj;
  }, {});
}
/**
 * Handle the format parameter for fetch urls
 * @private
 * @param options url and transformation options. This argument may be changed by the function!
 */

function patchFetchFormat(options) {
  if (options == null) {
    options = {};
  }

  if (options.type === "fetch") {
    if (options.fetch_format == null) {
      options.fetch_format = optionConsume(options, "format");
    }
  }
}
/**
 * Deletes `option_name` from `options` and return the value if present.
 * If `options` doesn't contain `option_name` the default value is returned.
 * @param {Object} options a collection
 * @param {String} option_name the name (key) of the desired value
 * @param {*} [default_value] the value to return is option_name is missing
 */

function optionConsume(options, option_name, default_value) {
  var result = options[option_name];
  delete options[option_name];

  if (result != null) {
    return result;
  } else {
    return default_value;
  }
}
/**
 * Returns true if value is empty:
 * <ul>
 *   <li>value is null or undefined</li>
 *   <li>value is an array or string of length 0</li>
 *   <li>value is an object with no keys</li>
 * </ul>
 * @function Util.isEmpty
 * @param value
 * @returns {boolean} true if value is empty
 */

function isEmpty(value) {
  if (value == null) {
    return true;
  }

  if (typeof value.length == "number") {
    return value.length === 0;
  }

  if (typeof value.size == "number") {
    return value.size === 0;
  }

  if (_typeof(value) == "object") {
    for (var key in value) {
      if (value.hasOwnProperty(key)) {
        return false;
      }
    }

    return true;
  }

  return true;
}

/***/ }),

/***/ "./src/util/generateBreakpoints.js":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return generateBreakpoints; });
function _slicedToArray(arr, i) { return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _nonIterableRest(); }

function _nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance"); }

function _iterableToArrayLimit(arr, i) { var _arr = []; var _n = true; var _d = false; var _e = undefined; try { for (var _i = arr[Symbol.iterator](), _s; !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i["return"] != null) _i["return"](); } finally { if (_d) throw _e; } } return _arr; }

function _arrayWithHoles(arr) { if (Array.isArray(arr)) return arr; }

/**
 * Helper function. Gets or populates srcset breakpoints using provided parameters
 * Either the breakpoints or min_width, max_width, max_images must be provided.
 *
 * @module utils
 * @private
 * @param {srcset} srcset Options with either `breakpoints` or `min_width`, `max_width`, and `max_images`
 *
 * @return {number[]} Array of breakpoints
 *
 */
function generateBreakpoints(srcset) {
  var breakpoints = srcset.breakpoints || [];

  if (breakpoints.length) {
    return breakpoints;
  }

  var _map = [srcset.min_width, srcset.max_width, srcset.max_images].map(Number),
      _map2 = _slicedToArray(_map, 3),
      min_width = _map2[0],
      max_width = _map2[1],
      max_images = _map2[2];

  if ([min_width, max_width, max_images].some(isNaN)) {
    throw 'Either (min_width, max_width, max_images) ' + 'or breakpoints must be provided to the image srcset attribute';
  }

  if (min_width > max_width) {
    throw 'min_width must be less than max_width';
  }

  if (max_images <= 0) {
    throw 'max_images must be a positive integer';
  } else if (max_images === 1) {
    min_width = max_width;
  }

  var stepSize = Math.ceil((max_width - min_width) / Math.max(max_images - 1, 1));

  for (var current = min_width; current < max_width; current += stepSize) {
    breakpoints.push(current);
  }

  breakpoints.push(max_width);
  return breakpoints;
}

/***/ }),

/***/ "./src/util/lodash.js":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getData", function() { return getData; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "setData", function() { return setData; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getAttribute", function() { return getAttribute; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "setAttribute", function() { return setAttribute; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "removeAttribute", function() { return removeAttribute; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "setAttributes", function() { return setAttributes; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "hasClass", function() { return hasClass; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "addClass", function() { return addClass; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getStyles", function() { return getStyles; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "cssExpand", function() { return cssExpand; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "domStyle", function() { return domStyle; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "curCSS", function() { return curCSS; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "cssValue", function() { return cssValue; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "augmentWidthOrHeight", function() { return augmentWidthOrHeight; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getWidthOrHeight", function() { return getWidthOrHeight; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "width", function() { return width; });
/* harmony import */ var lodash_assign__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("lodash/assign");
/* harmony import */ var lodash_assign__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(lodash_assign__WEBPACK_IMPORTED_MODULE_0__);
/* harmony reexport (default from non-harmony) */ __webpack_require__.d(__webpack_exports__, "assign", function() { return lodash_assign__WEBPACK_IMPORTED_MODULE_0___default.a; });
/* harmony import */ var lodash_cloneDeep__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__("lodash/cloneDeep");
/* harmony import */ var lodash_cloneDeep__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(lodash_cloneDeep__WEBPACK_IMPORTED_MODULE_1__);
/* harmony reexport (default from non-harmony) */ __webpack_require__.d(__webpack_exports__, "cloneDeep", function() { return lodash_cloneDeep__WEBPACK_IMPORTED_MODULE_1___default.a; });
/* harmony import */ var lodash_compact__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__("lodash/compact");
/* harmony import */ var lodash_compact__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(lodash_compact__WEBPACK_IMPORTED_MODULE_2__);
/* harmony reexport (default from non-harmony) */ __webpack_require__.d(__webpack_exports__, "compact", function() { return lodash_compact__WEBPACK_IMPORTED_MODULE_2___default.a; });
/* harmony import */ var lodash_difference__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__("lodash/difference");
/* harmony import */ var lodash_difference__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(lodash_difference__WEBPACK_IMPORTED_MODULE_3__);
/* harmony reexport (default from non-harmony) */ __webpack_require__.d(__webpack_exports__, "difference", function() { return lodash_difference__WEBPACK_IMPORTED_MODULE_3___default.a; });
/* harmony import */ var lodash_functions__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__("lodash/functions");
/* harmony import */ var lodash_functions__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(lodash_functions__WEBPACK_IMPORTED_MODULE_4__);
/* harmony reexport (default from non-harmony) */ __webpack_require__.d(__webpack_exports__, "functions", function() { return lodash_functions__WEBPACK_IMPORTED_MODULE_4___default.a; });
/* harmony import */ var lodash_identity__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__("lodash/identity");
/* harmony import */ var lodash_identity__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(lodash_identity__WEBPACK_IMPORTED_MODULE_5__);
/* harmony reexport (default from non-harmony) */ __webpack_require__.d(__webpack_exports__, "identity", function() { return lodash_identity__WEBPACK_IMPORTED_MODULE_5___default.a; });
/* harmony import */ var lodash_includes__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__("lodash/includes");
/* harmony import */ var lodash_includes__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(lodash_includes__WEBPACK_IMPORTED_MODULE_6__);
/* harmony reexport (default from non-harmony) */ __webpack_require__.d(__webpack_exports__, "includes", function() { return lodash_includes__WEBPACK_IMPORTED_MODULE_6___default.a; });
/* harmony import */ var lodash_isArray__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__("lodash/isArray");
/* harmony import */ var lodash_isArray__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(lodash_isArray__WEBPACK_IMPORTED_MODULE_7__);
/* harmony reexport (default from non-harmony) */ __webpack_require__.d(__webpack_exports__, "isArray", function() { return lodash_isArray__WEBPACK_IMPORTED_MODULE_7___default.a; });
/* harmony import */ var lodash_isPlainObject__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__("lodash/isPlainObject");
/* harmony import */ var lodash_isPlainObject__WEBPACK_IMPORTED_MODULE_8___default = /*#__PURE__*/__webpack_require__.n(lodash_isPlainObject__WEBPACK_IMPORTED_MODULE_8__);
/* harmony reexport (default from non-harmony) */ __webpack_require__.d(__webpack_exports__, "isPlainObject", function() { return lodash_isPlainObject__WEBPACK_IMPORTED_MODULE_8___default.a; });
/* harmony import */ var lodash_isString__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__("lodash/isString");
/* harmony import */ var lodash_isString__WEBPACK_IMPORTED_MODULE_9___default = /*#__PURE__*/__webpack_require__.n(lodash_isString__WEBPACK_IMPORTED_MODULE_9__);
/* harmony reexport (default from non-harmony) */ __webpack_require__.d(__webpack_exports__, "isString", function() { return lodash_isString__WEBPACK_IMPORTED_MODULE_9___default.a; });
/* harmony import */ var lodash_merge__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__("lodash/merge");
/* harmony import */ var lodash_merge__WEBPACK_IMPORTED_MODULE_10___default = /*#__PURE__*/__webpack_require__.n(lodash_merge__WEBPACK_IMPORTED_MODULE_10__);
/* harmony reexport (default from non-harmony) */ __webpack_require__.d(__webpack_exports__, "merge", function() { return lodash_merge__WEBPACK_IMPORTED_MODULE_10___default.a; });
/* harmony reexport (default from non-harmony) */ __webpack_require__.d(__webpack_exports__, "contains", function() { return lodash_includes__WEBPACK_IMPORTED_MODULE_6___default.a; });
/* harmony import */ var lodash_isElement__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__("lodash/isElement");
/* harmony import */ var lodash_isElement__WEBPACK_IMPORTED_MODULE_11___default = /*#__PURE__*/__webpack_require__.n(lodash_isElement__WEBPACK_IMPORTED_MODULE_11__);
/* harmony reexport (module object) */ __webpack_require__.d(__webpack_exports__, "isElement", function() { return lodash_isElement__WEBPACK_IMPORTED_MODULE_11__; });
/* harmony import */ var lodash_isFunction__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__("lodash/isFunction");
/* harmony import */ var lodash_isFunction__WEBPACK_IMPORTED_MODULE_12___default = /*#__PURE__*/__webpack_require__.n(lodash_isFunction__WEBPACK_IMPORTED_MODULE_12__);
/* harmony reexport (module object) */ __webpack_require__.d(__webpack_exports__, "isFunction", function() { return lodash_isFunction__WEBPACK_IMPORTED_MODULE_12__; });
/* harmony import */ var lodash_trim__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__("lodash/trim");
/* harmony import */ var lodash_trim__WEBPACK_IMPORTED_MODULE_13___default = /*#__PURE__*/__webpack_require__.n(lodash_trim__WEBPACK_IMPORTED_MODULE_13__);
/* harmony reexport (module object) */ __webpack_require__.d(__webpack_exports__, "trim", function() { return lodash_trim__WEBPACK_IMPORTED_MODULE_13__; });
/* harmony import */ var _baseutil__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__("./src/util/baseutil.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "allStrings", function() { return _baseutil__WEBPACK_IMPORTED_MODULE_14__["allStrings"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "without", function() { return _baseutil__WEBPACK_IMPORTED_MODULE_14__["without"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "isNumberLike", function() { return _baseutil__WEBPACK_IMPORTED_MODULE_14__["isNumberLike"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "smartEscape", function() { return _baseutil__WEBPACK_IMPORTED_MODULE_14__["smartEscape"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "defaults", function() { return _baseutil__WEBPACK_IMPORTED_MODULE_14__["defaults"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "objectProto", function() { return _baseutil__WEBPACK_IMPORTED_MODULE_14__["objectProto"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "objToString", function() { return _baseutil__WEBPACK_IMPORTED_MODULE_14__["objToString"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "isObject", function() { return _baseutil__WEBPACK_IMPORTED_MODULE_14__["isObject"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "funcTag", function() { return _baseutil__WEBPACK_IMPORTED_MODULE_14__["funcTag"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "reWords", function() { return _baseutil__WEBPACK_IMPORTED_MODULE_14__["reWords"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "camelCase", function() { return _baseutil__WEBPACK_IMPORTED_MODULE_14__["camelCase"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "snakeCase", function() { return _baseutil__WEBPACK_IMPORTED_MODULE_14__["snakeCase"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "convertKeys", function() { return _baseutil__WEBPACK_IMPORTED_MODULE_14__["convertKeys"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "withCamelCaseKeys", function() { return _baseutil__WEBPACK_IMPORTED_MODULE_14__["withCamelCaseKeys"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "withSnakeCaseKeys", function() { return _baseutil__WEBPACK_IMPORTED_MODULE_14__["withSnakeCaseKeys"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "base64Encode", function() { return _baseutil__WEBPACK_IMPORTED_MODULE_14__["base64Encode"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "base64EncodeURL", function() { return _baseutil__WEBPACK_IMPORTED_MODULE_14__["base64EncodeURL"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "extractUrlParams", function() { return _baseutil__WEBPACK_IMPORTED_MODULE_14__["extractUrlParams"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "patchFetchFormat", function() { return _baseutil__WEBPACK_IMPORTED_MODULE_14__["patchFetchFormat"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "optionConsume", function() { return _baseutil__WEBPACK_IMPORTED_MODULE_14__["optionConsume"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "isEmpty", function() { return _baseutil__WEBPACK_IMPORTED_MODULE_14__["isEmpty"]; });

var nodeContains;

















/*
 * Includes utility methods and lodash / jQuery shims
 */

/**
 * Get data from the DOM element.
 *
 * This method will use jQuery's `data()` method if it is available, otherwise it will get the `data-` attribute
 * @param {Element} element - the element to get the data from
 * @param {string} name - the name of the data item
 * @returns the value associated with the `name`
 * @function Util.getData
 */

var getData = function getData(element, name) {
  switch (false) {
    case !(element == null):
      return void 0;

    case !lodash_isFunction__WEBPACK_IMPORTED_MODULE_12__(element.getAttribute):
      return element.getAttribute("data-".concat(name));

    case !lodash_isFunction__WEBPACK_IMPORTED_MODULE_12__(element.getAttr):
      return element.getAttr("data-".concat(name));

    case !lodash_isFunction__WEBPACK_IMPORTED_MODULE_12__(element.data):
      return element.data(name);

    case !(lodash_isFunction__WEBPACK_IMPORTED_MODULE_12__(typeof jQuery !== "undefined" && jQuery.fn && jQuery.fn.data) && lodash_isElement__WEBPACK_IMPORTED_MODULE_11__(element)):
      return jQuery(element).data(name);
  }
};
/**
 * Set data in the DOM element.
 *
 * This method will use jQuery's `data()` method if it is available, otherwise it will set the `data-` attribute
 * @function Util.setData
 * @param {Element} element - the element to set the data in
 * @param {string} name - the name of the data item
 * @param {*} value - the value to be set
 *
 */

var setData = function setData(element, name, value) {
  switch (false) {
    case !(element == null):
      return void 0;

    case !lodash_isFunction__WEBPACK_IMPORTED_MODULE_12__(element.setAttribute):
      return element.setAttribute("data-".concat(name), value);

    case !lodash_isFunction__WEBPACK_IMPORTED_MODULE_12__(element.setAttr):
      return element.setAttr("data-".concat(name), value);

    case !lodash_isFunction__WEBPACK_IMPORTED_MODULE_12__(element.data):
      return element.data(name, value);

    case !(lodash_isFunction__WEBPACK_IMPORTED_MODULE_12__(typeof jQuery !== "undefined" && jQuery.fn && jQuery.fn.data) && lodash_isElement__WEBPACK_IMPORTED_MODULE_11__(element)):
      return jQuery(element).data(name, value);
  }
};
/**
 * Get attribute from the DOM element.
 *
 * @function Util.getAttribute
 * @param {Element} element - the element to set the attribute for
 * @param {string} name - the name of the attribute
 * @returns {*} the value of the attribute
 *
 */

var getAttribute = function getAttribute(element, name) {
  switch (false) {
    case !(element == null):
      return void 0;

    case !lodash_isFunction__WEBPACK_IMPORTED_MODULE_12__(element.getAttribute):
      return element.getAttribute(name);

    case !lodash_isFunction__WEBPACK_IMPORTED_MODULE_12__(element.attr):
      return element.attr(name);

    case !lodash_isFunction__WEBPACK_IMPORTED_MODULE_12__(element.getAttr):
      return element.getAttr(name);
  }
};
/**
 * Set attribute in the DOM element.
 *
 * @function Util.setAttribute
 * @param {Element} element - the element to set the attribute for
 * @param {string} name - the name of the attribute
 * @param {*} value - the value to be set
 */

var setAttribute = function setAttribute(element, name, value) {
  switch (false) {
    case !(element == null):
      return void 0;

    case !lodash_isFunction__WEBPACK_IMPORTED_MODULE_12__(element.setAttribute):
      return element.setAttribute(name, value);

    case !lodash_isFunction__WEBPACK_IMPORTED_MODULE_12__(element.attr):
      return element.attr(name, value);

    case !lodash_isFunction__WEBPACK_IMPORTED_MODULE_12__(element.setAttr):
      return element.setAttr(name, value);
  }
};
/**
 * Remove an attribute in the DOM element.
 *
 * @function Util.removeAttribute
 * @param {Element} element - the element to set the attribute for
 * @param {string} name - the name of the attribute
 */

var removeAttribute = function removeAttribute(element, name) {
  switch (false) {
    case !(element == null):
      return void 0;

    case !lodash_isFunction__WEBPACK_IMPORTED_MODULE_12__(element.removeAttribute):
      return element.removeAttribute(name);

    default:
      return setAttribute(element, void 0);
  }
};
/**
 * Set a group of attributes to the element
 * @function Util.setAttributes
 * @param {Element} element - the element to set the attributes for
 * @param {Object} attributes - a hash of attribute names and values
 */

var setAttributes = function setAttributes(element, attributes) {
  var name, results, value;
  results = [];

  for (name in attributes) {
    value = attributes[name];

    if (value != null) {
      results.push(setAttribute(element, name, value));
    } else {
      results.push(removeAttribute(element, name));
    }
  }

  return results;
};
/**
 * Checks if element has a css class
 * @function Util.hasClass
 * @param {Element} element - the element to check
 * @param {string} name - the class name
 @returns {boolean} true if the element has the class
 */

var hasClass = function hasClass(element, name) {
  if (lodash_isElement__WEBPACK_IMPORTED_MODULE_11__(element)) {
    return element.className.match(new RegExp("\\b".concat(name, "\\b")));
  }
};
/**
 * Add class to the element
 * @function Util.addClass
 * @param {Element} element - the element
 * @param {string} name - the class name to add
 */

var addClass = function addClass(element, name) {
  if (!element.className.match(new RegExp("\\b".concat(name, "\\b")))) {
    return element.className = lodash_trim__WEBPACK_IMPORTED_MODULE_13__("".concat(element.className, " ").concat(name));
  }
}; // The following code is taken from jQuery

var getStyles = function getStyles(elem) {
  // Support: IE<=11+, Firefox<=30+ (#15098, #14150)
  // IE throws on elements created in popups
  // FF meanwhile throws on frame elements through "defaultView.getComputedStyle"
  if (elem.ownerDocument.defaultView.opener) {
    return elem.ownerDocument.defaultView.getComputedStyle(elem, null);
  }

  return window.getComputedStyle(elem, null);
};
var cssExpand = ["Top", "Right", "Bottom", "Left"];

nodeContains = function nodeContains(a, b) {
  var adown, bup;
  adown = a.nodeType === 9 ? a.documentElement : a;
  bup = b && b.parentNode;
  return a === bup || !!(bup && bup.nodeType === 1 && adown.contains(bup));
}; // Truncated version of jQuery.style(elem, name)


var domStyle = function domStyle(elem, name) {
  if (!(!elem || elem.nodeType === 3 || elem.nodeType === 8 || !elem.style)) {
    return elem.style[name];
  }
};
var curCSS = function curCSS(elem, name, computed) {
  var maxWidth, minWidth, ret, rmargin, style, width;
  rmargin = /^margin/;
  width = void 0;
  minWidth = void 0;
  maxWidth = void 0;
  ret = void 0;
  style = elem.style;
  computed = computed || getStyles(elem);

  if (computed) {
    // Support: IE9
    // getPropertyValue is only needed for .css('filter') (#12537)
    ret = computed.getPropertyValue(name) || computed[name];
  }

  if (computed) {
    if (ret === "" && !nodeContains(elem.ownerDocument, elem)) {
      ret = domStyle(elem, name);
    } // Support: iOS < 6
    // A tribute to the "awesome hack by Dean Edwards"
    // iOS < 6 (at least) returns percentage for a larger set of values, but width seems to be reliably pixels
    // this is against the CSSOM draft spec: http://dev.w3.org/csswg/cssom/#resolved-values


    if (rnumnonpx.test(ret) && rmargin.test(name)) {
      // Remember the original values
      width = style.width;
      minWidth = style.minWidth;
      maxWidth = style.maxWidth; // Put in the new values to get a computed value out

      style.minWidth = style.maxWidth = style.width = ret;
      ret = computed.width; // Revert the changed values

      style.width = width;
      style.minWidth = minWidth;
      style.maxWidth = maxWidth;
    }
  } // Support: IE
  // IE returns zIndex value as an integer.


  if (ret !== undefined) {
    return ret + "";
  } else {
    return ret;
  }
};
var cssValue = function cssValue(elem, name, convert, styles) {
  var val;
  val = curCSS(elem, name, styles);

  if (convert) {
    return parseFloat(val);
  } else {
    return val;
  }
};
var augmentWidthOrHeight = function augmentWidthOrHeight(elem, name, extra, isBorderBox, styles) {
  var i, len, side, sides, val; // If we already have the right measurement, avoid augmentation
  // Otherwise initialize for horizontal or vertical properties

  if (extra === (isBorderBox ? "border" : "content")) {
    return 0;
  } else {
    sides = name === "width" ? ["Right", "Left"] : ["Top", "Bottom"];
    val = 0;

    for (i = 0, len = sides.length; i < len; i++) {
      side = sides[i];

      if (extra === "margin") {
        // Both box models exclude margin, so add it if we want it
        val += cssValue(elem, extra + side, true, styles);
      }

      if (isBorderBox) {
        if (extra === "content") {
          // border-box includes padding, so remove it if we want content
          val -= cssValue(elem, "padding".concat(side), true, styles);
        }

        if (extra !== "margin") {
          // At this point, extra isn't border nor margin, so remove border
          val -= cssValue(elem, "border".concat(side, "Width"), true, styles);
        }
      } else {
        // At this point, extra isn't content, so add padding
        val += cssValue(elem, "padding".concat(side), true, styles);

        if (extra !== "padding") {
          // At this point, extra isn't content nor padding, so add border
          val += cssValue(elem, "border".concat(side, "Width"), true, styles);
        }
      }
    }

    return val;
  }
};
var pnum = /[+-]?(?:\d*\.|)\d+(?:[eE][+-]?\d+|)/.source;
var rnumnonpx = new RegExp("^(" + pnum + ")(?!px)[a-z%]+$", "i");
var getWidthOrHeight = function getWidthOrHeight(elem, name, extra) {
  var isBorderBox, styles, val, valueIsBorderBox; // Start with offset property, which is equivalent to the border-box value

  valueIsBorderBox = true;
  val = name === "width" ? elem.offsetWidth : elem.offsetHeight;
  styles = getStyles(elem);
  isBorderBox = cssValue(elem, "boxSizing", false, styles) === "border-box"; // Some non-html elements return undefined for offsetWidth, so check for null/undefined
  // svg - https://bugzilla.mozilla.org/show_bug.cgi?id=649285
  // MathML - https://bugzilla.mozilla.org/show_bug.cgi?id=491668

  if (val <= 0 || val == null) {
    // Fall back to computed then uncomputed css if necessary
    val = curCSS(elem, name, styles);

    if (val < 0 || val == null) {
      val = elem.style[name];
    }

    if (rnumnonpx.test(val)) {
      // Computed unit is not pixels. Stop here and return.
      return val;
    } // Check for style in case a browser which returns unreliable values
    // for getComputedStyle silently falls back to the reliable elem.style
    //    valueIsBorderBox = isBorderBox and (support.boxSizingReliable() or val is elem.style[name])


    valueIsBorderBox = isBorderBox && val === elem.style[name]; // Normalize "", auto, and prepare for extra

    val = parseFloat(val) || 0;
  } // Use the active box-sizing model to add/subtract irrelevant styles


  return val + augmentWidthOrHeight(elem, name, extra || (isBorderBox ? "border" : "content"), valueIsBorderBox, styles);
};
var width = function width(element) {
  return getWidthOrHeight(element, "width", "content");
};
/**
 * @class Util
 */

/**
 * Returns true if item is a string
 * @function Util.isString
 * @param item
 * @returns {boolean} true if item is a string
 */

/**
 * Returns true if item is empty:
 * <ul>
 *   <li>item is null or undefined</li>
 *   <li>item is an array or string of length 0</li>
 *   <li>item is an object with no keys</li>
 * </ul>
 * @function Util.isEmpty
 * @param item
 * @returns {boolean} true if item is empty
 */

/**
 * Assign source properties to destination.
 * If the property is an object it is assigned as a whole, overriding the destination object.
 * @function Util.assign
 * @param {Object} destination - the object to assign to
 */

/**
 * Recursively assign source properties to destination
 * @function Util.merge
 * @param {Object} destination - the object to assign to
 * @param {...Object} [sources] The source objects.
 */

/**
 * Create a new copy of the given object, including all internal objects.
 * @function Util.cloneDeep
 * @param {Object} value - the object to clone
 * @return {Object} a new deep copy of the object
 */

/**
 * Creates a new array from the parameter with "falsey" values removed
 * @function Util.compact
 * @param {Array} array - the array to remove values from
 * @return {Array} a new array without falsey values
 */

/**
 * Check if a given item is included in the given array
 * @function Util.contains
 * @param {Array} array - the array to search in
 * @param {*} item - the item to search for
 * @return {boolean} true if the item is included in the array
 */

/**
 * Returns values in the given array that are not included in the other array
 * @function Util.difference
 * @param {Array} arr - the array to select from
 * @param {Array} values - values to filter from arr
 * @return {Array} the filtered values
 */

/**
 * Returns a list of all the function names in obj
 * @function Util.functions
 * @param {Object} object - the object to inspect
 * @return {Array} a list of functions of object
 */

/**
 * Returns the provided value. This functions is used as a default predicate function.
 * @function Util.identity
 * @param {*} value
 * @return {*} the provided value
 */

/**
 * Remove leading or trailing spaces from text
 * @function Util.trim
 * @param {string} text
 * @return {string} the `text` without leading or trailing spaces
 */

/***/ }),

/***/ "./src/util/srcsetUtils.js":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "scaledUrl", function() { return scaledUrl; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getOrGenerateBreakpoints", function() { return getOrGenerateBreakpoints; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "generateSrcsetAttribute", function() { return generateSrcsetAttribute; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "generateSizesAttribute", function() { return generateSizesAttribute; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "generateImageResponsiveAttributes", function() { return generateImageResponsiveAttributes; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "generateMediaAttr", function() { return generateMediaAttr; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "srcsetUrl", function() { return srcsetUrl; });
/* harmony import */ var _util__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("./src/util/lodash.js");
/* harmony import */ var _generateBreakpoints__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__("./src/util/generateBreakpoints.js");
/* harmony import */ var _transformation__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__("./src/transformation.js");
/* harmony import */ var _url__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__("./src/url.js");

var isEmpty = _util__WEBPACK_IMPORTED_MODULE_0__["isEmpty"];



/**
 * Options used to generate the srcset attribute.
 * @typedef {object} srcset
 * @property {(number[]|string[])}   [breakpoints] An array of breakpoints.
 * @property {number}                [min_width]   Minimal width of the srcset images.
 * @property {number}                [max_width]   Maximal width of the srcset images.
 * @property {number}                [max_images]  Number of srcset images to generate.
 * @property {object|string}         [transformation] The transformation to use in the srcset urls.
 * @property {boolean}               [sizes] Whether to calculate and add the sizes attribute.
 */

/**
 * Options used to generate the srcset attribute.
 * @typedef {object} srcset
 * @property {(number[]|string[])}   [breakpoints] An array of breakpoints.
 * @property {number}                [min_width]   Minimal width of the srcset images.
 * @property {number}                [max_width]   Maximal width of the srcset images.
 * @property {number}                [max_images]  Number of srcset images to generate.
 * @property {object|string}         [transformation] The transformation to use in the srcset urls.
 * @property {boolean}               [sizes] Whether to calculate and add the sizes attribute.
 */

/**
 * Helper function. Generates a single srcset item url
 *
 * @private
 * @param {string} public_id  Public ID of the resource.
 * @param {number} width      Width in pixels of the srcset item.
 * @param {object|string} transformation
 * @param {object} options    Additional options.
 *
 * @return {string} Resulting URL of the item
 */

function scaledUrl(public_id, width, transformation) {
  var options = arguments.length > 3 && arguments[3] !== undefined ? arguments[3] : {};
  var configParams = _util__WEBPACK_IMPORTED_MODULE_0__["extractUrlParams"](options);
  transformation = transformation || options;
  configParams.raw_transformation = new _transformation__WEBPACK_IMPORTED_MODULE_2__["default"]([_util__WEBPACK_IMPORTED_MODULE_0__["merge"]({}, transformation), {
    crop: 'scale',
    width: width
  }]).toString();
  return Object(_url__WEBPACK_IMPORTED_MODULE_3__["default"])(public_id, configParams);
}
/**
 * If cache is enabled, get the breakpoints from the cache. If the values were not found in the cache,
 * or cache is not enabled, generate the values.
 * @param {srcset} srcset The srcset configuration parameters
 * @param {string} public_id
 * @param {object} options
 * @return {*|Array}
 */

function getOrGenerateBreakpoints(public_id) {
  var srcset = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};
  var options = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : {};
  return Object(_generateBreakpoints__WEBPACK_IMPORTED_MODULE_1__["default"])(srcset);
}
/**
 * Helper function. Generates srcset attribute value of the HTML img tag
 * @private
 *
 * @param {string} public_id  Public ID of the resource
 * @param {number[]} breakpoints An array of breakpoints (in pixels)
 * @param {object} transformation The transformation
 * @param {object} options Includes html tag options, transformation options
 * @return {string} Resulting srcset attribute value
 */

function generateSrcsetAttribute(public_id, breakpoints, transformation, options) {
  options = _util__WEBPACK_IMPORTED_MODULE_0__["cloneDeep"](options);
  _util__WEBPACK_IMPORTED_MODULE_0__["patchFetchFormat"](options);
  return breakpoints.map(function (width) {
    return "".concat(scaledUrl(public_id, width, transformation, options), " ").concat(width, "w");
  }).join(', ');
}
/**
 * Helper function. Generates sizes attribute value of the HTML img tag
 * @private
 * @param {number[]} breakpoints An array of breakpoints.
 * @return {string} Resulting sizes attribute value
 */

function generateSizesAttribute(breakpoints) {
  if (breakpoints == null) {
    return '';
  }

  return breakpoints.map(function (width) {
    return "(max-width: ".concat(width, "px) ").concat(width, "px");
  }).join(', ');
}
/**
 * Helper function. Generates srcset and sizes attributes of the image tag
 *
 * Generated attributes are added to attributes argument
 *
 * @private
 * @param {string}    publicId  The public ID of the resource
 * @param {object}    attributes Existing HTML attributes.
 * @param {srcset}    srcsetData
 * @param {object}    options    Additional options.
 *
 * @return array The responsive attributes
 */

function generateImageResponsiveAttributes(publicId) {
  var attributes = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};
  var srcsetData = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : {};
  var options = arguments.length > 3 && arguments[3] !== undefined ? arguments[3] : {};
  // Create both srcset and sizes here to avoid fetching breakpoints twice
  var responsiveAttributes = {};

  if (isEmpty(srcsetData)) {
    return responsiveAttributes;
  }

  var generateSizes = !attributes.sizes && srcsetData.sizes === true;
  var generateSrcset = !attributes.srcset;

  if (generateSrcset || generateSizes) {
    var breakpoints = getOrGenerateBreakpoints(publicId, srcsetData, options);

    if (generateSrcset) {
      var transformation = srcsetData.transformation;
      var srcsetAttr = generateSrcsetAttribute(publicId, breakpoints, transformation, options);

      if (!isEmpty(srcsetAttr)) {
        responsiveAttributes.srcset = srcsetAttr;
      }
    }

    if (generateSizes) {
      var sizesAttr = generateSizesAttribute(breakpoints);

      if (!isEmpty(sizesAttr)) {
        responsiveAttributes.sizes = sizesAttr;
      }
    }
  }

  return responsiveAttributes;
}
/**
 * Generate a media query
 *
 * @private
 * @param {object} options configuration options
 * @param {number|string} options.min_width
 * @param {number|string} options.max_width
 * @return {string} a media query string
 */

function generateMediaAttr(options) {
  var mediaQuery = [];

  if (options != null) {
    if (options.min_width != null) {
      mediaQuery.push("(min-width: ".concat(options.min_width, "px)"));
    }

    if (options.max_width != null) {
      mediaQuery.push("(max-width: ".concat(options.max_width, "px)"));
    }
  }

  return mediaQuery.join(' and ');
}
var srcsetUrl = scaledUrl;

/***/ }),

/***/ "lodash/assign":
/***/ (function(module, exports) {

module.exports = __WEBPACK_EXTERNAL_MODULE_lodash_assign__;

/***/ }),

/***/ "lodash/cloneDeep":
/***/ (function(module, exports) {

module.exports = __WEBPACK_EXTERNAL_MODULE_lodash_cloneDeep__;

/***/ }),

/***/ "lodash/compact":
/***/ (function(module, exports) {

module.exports = __WEBPACK_EXTERNAL_MODULE_lodash_compact__;

/***/ }),

/***/ "lodash/difference":
/***/ (function(module, exports) {

module.exports = __WEBPACK_EXTERNAL_MODULE_lodash_difference__;

/***/ }),

/***/ "lodash/functions":
/***/ (function(module, exports) {

module.exports = __WEBPACK_EXTERNAL_MODULE_lodash_functions__;

/***/ }),

/***/ "lodash/identity":
/***/ (function(module, exports) {

module.exports = __WEBPACK_EXTERNAL_MODULE_lodash_identity__;

/***/ }),

/***/ "lodash/includes":
/***/ (function(module, exports) {

module.exports = __WEBPACK_EXTERNAL_MODULE_lodash_includes__;

/***/ }),

/***/ "lodash/isArray":
/***/ (function(module, exports) {

module.exports = __WEBPACK_EXTERNAL_MODULE_lodash_isArray__;

/***/ }),

/***/ "lodash/isElement":
/***/ (function(module, exports) {

module.exports = __WEBPACK_EXTERNAL_MODULE_lodash_isElement__;

/***/ }),

/***/ "lodash/isFunction":
/***/ (function(module, exports) {

module.exports = __WEBPACK_EXTERNAL_MODULE_lodash_isFunction__;

/***/ }),

/***/ "lodash/isPlainObject":
/***/ (function(module, exports) {

module.exports = __WEBPACK_EXTERNAL_MODULE_lodash_isPlainObject__;

/***/ }),

/***/ "lodash/isString":
/***/ (function(module, exports) {

module.exports = __WEBPACK_EXTERNAL_MODULE_lodash_isString__;

/***/ }),

/***/ "lodash/merge":
/***/ (function(module, exports) {

module.exports = __WEBPACK_EXTERNAL_MODULE_lodash_merge__;

/***/ }),

/***/ "lodash/trim":
/***/ (function(module, exports) {

module.exports = __WEBPACK_EXTERNAL_MODULE_lodash_trim__;

/***/ })

/******/ });
});
//# sourceMappingURL=cloudinary-core.js.map

/***/ }),

/***/ "./node_modules/lodash/_DataView.js":
/*!******************************************!*\
  !*** ./node_modules/lodash/_DataView.js ***!
  \******************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var getNative = __webpack_require__(/*! ./_getNative */ "./node_modules/lodash/_getNative.js"),
    root = __webpack_require__(/*! ./_root */ "./node_modules/lodash/_root.js");

/* Built-in method references that are verified to be native. */
var DataView = getNative(root, 'DataView');

module.exports = DataView;


/***/ }),

/***/ "./node_modules/lodash/_Hash.js":
/*!**************************************!*\
  !*** ./node_modules/lodash/_Hash.js ***!
  \**************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var hashClear = __webpack_require__(/*! ./_hashClear */ "./node_modules/lodash/_hashClear.js"),
    hashDelete = __webpack_require__(/*! ./_hashDelete */ "./node_modules/lodash/_hashDelete.js"),
    hashGet = __webpack_require__(/*! ./_hashGet */ "./node_modules/lodash/_hashGet.js"),
    hashHas = __webpack_require__(/*! ./_hashHas */ "./node_modules/lodash/_hashHas.js"),
    hashSet = __webpack_require__(/*! ./_hashSet */ "./node_modules/lodash/_hashSet.js");

/**
 * Creates a hash object.
 *
 * @private
 * @constructor
 * @param {Array} [entries] The key-value pairs to cache.
 */
function Hash(entries) {
  var index = -1,
      length = entries == null ? 0 : entries.length;

  this.clear();
  while (++index < length) {
    var entry = entries[index];
    this.set(entry[0], entry[1]);
  }
}

// Add methods to `Hash`.
Hash.prototype.clear = hashClear;
Hash.prototype['delete'] = hashDelete;
Hash.prototype.get = hashGet;
Hash.prototype.has = hashHas;
Hash.prototype.set = hashSet;

module.exports = Hash;


/***/ }),

/***/ "./node_modules/lodash/_ListCache.js":
/*!*******************************************!*\
  !*** ./node_modules/lodash/_ListCache.js ***!
  \*******************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var listCacheClear = __webpack_require__(/*! ./_listCacheClear */ "./node_modules/lodash/_listCacheClear.js"),
    listCacheDelete = __webpack_require__(/*! ./_listCacheDelete */ "./node_modules/lodash/_listCacheDelete.js"),
    listCacheGet = __webpack_require__(/*! ./_listCacheGet */ "./node_modules/lodash/_listCacheGet.js"),
    listCacheHas = __webpack_require__(/*! ./_listCacheHas */ "./node_modules/lodash/_listCacheHas.js"),
    listCacheSet = __webpack_require__(/*! ./_listCacheSet */ "./node_modules/lodash/_listCacheSet.js");

/**
 * Creates an list cache object.
 *
 * @private
 * @constructor
 * @param {Array} [entries] The key-value pairs to cache.
 */
function ListCache(entries) {
  var index = -1,
      length = entries == null ? 0 : entries.length;

  this.clear();
  while (++index < length) {
    var entry = entries[index];
    this.set(entry[0], entry[1]);
  }
}

// Add methods to `ListCache`.
ListCache.prototype.clear = listCacheClear;
ListCache.prototype['delete'] = listCacheDelete;
ListCache.prototype.get = listCacheGet;
ListCache.prototype.has = listCacheHas;
ListCache.prototype.set = listCacheSet;

module.exports = ListCache;


/***/ }),

/***/ "./node_modules/lodash/_Map.js":
/*!*************************************!*\
  !*** ./node_modules/lodash/_Map.js ***!
  \*************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var getNative = __webpack_require__(/*! ./_getNative */ "./node_modules/lodash/_getNative.js"),
    root = __webpack_require__(/*! ./_root */ "./node_modules/lodash/_root.js");

/* Built-in method references that are verified to be native. */
var Map = getNative(root, 'Map');

module.exports = Map;


/***/ }),

/***/ "./node_modules/lodash/_MapCache.js":
/*!******************************************!*\
  !*** ./node_modules/lodash/_MapCache.js ***!
  \******************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var mapCacheClear = __webpack_require__(/*! ./_mapCacheClear */ "./node_modules/lodash/_mapCacheClear.js"),
    mapCacheDelete = __webpack_require__(/*! ./_mapCacheDelete */ "./node_modules/lodash/_mapCacheDelete.js"),
    mapCacheGet = __webpack_require__(/*! ./_mapCacheGet */ "./node_modules/lodash/_mapCacheGet.js"),
    mapCacheHas = __webpack_require__(/*! ./_mapCacheHas */ "./node_modules/lodash/_mapCacheHas.js"),
    mapCacheSet = __webpack_require__(/*! ./_mapCacheSet */ "./node_modules/lodash/_mapCacheSet.js");

/**
 * Creates a map cache object to store key-value pairs.
 *
 * @private
 * @constructor
 * @param {Array} [entries] The key-value pairs to cache.
 */
function MapCache(entries) {
  var index = -1,
      length = entries == null ? 0 : entries.length;

  this.clear();
  while (++index < length) {
    var entry = entries[index];
    this.set(entry[0], entry[1]);
  }
}

// Add methods to `MapCache`.
MapCache.prototype.clear = mapCacheClear;
MapCache.prototype['delete'] = mapCacheDelete;
MapCache.prototype.get = mapCacheGet;
MapCache.prototype.has = mapCacheHas;
MapCache.prototype.set = mapCacheSet;

module.exports = MapCache;


/***/ }),

/***/ "./node_modules/lodash/_Promise.js":
/*!*****************************************!*\
  !*** ./node_modules/lodash/_Promise.js ***!
  \*****************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var getNative = __webpack_require__(/*! ./_getNative */ "./node_modules/lodash/_getNative.js"),
    root = __webpack_require__(/*! ./_root */ "./node_modules/lodash/_root.js");

/* Built-in method references that are verified to be native. */
var Promise = getNative(root, 'Promise');

module.exports = Promise;


/***/ }),

/***/ "./node_modules/lodash/_Set.js":
/*!*************************************!*\
  !*** ./node_modules/lodash/_Set.js ***!
  \*************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var getNative = __webpack_require__(/*! ./_getNative */ "./node_modules/lodash/_getNative.js"),
    root = __webpack_require__(/*! ./_root */ "./node_modules/lodash/_root.js");

/* Built-in method references that are verified to be native. */
var Set = getNative(root, 'Set');

module.exports = Set;


/***/ }),

/***/ "./node_modules/lodash/_SetCache.js":
/*!******************************************!*\
  !*** ./node_modules/lodash/_SetCache.js ***!
  \******************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var MapCache = __webpack_require__(/*! ./_MapCache */ "./node_modules/lodash/_MapCache.js"),
    setCacheAdd = __webpack_require__(/*! ./_setCacheAdd */ "./node_modules/lodash/_setCacheAdd.js"),
    setCacheHas = __webpack_require__(/*! ./_setCacheHas */ "./node_modules/lodash/_setCacheHas.js");

/**
 *
 * Creates an array cache object to store unique values.
 *
 * @private
 * @constructor
 * @param {Array} [values] The values to cache.
 */
function SetCache(values) {
  var index = -1,
      length = values == null ? 0 : values.length;

  this.__data__ = new MapCache;
  while (++index < length) {
    this.add(values[index]);
  }
}

// Add methods to `SetCache`.
SetCache.prototype.add = SetCache.prototype.push = setCacheAdd;
SetCache.prototype.has = setCacheHas;

module.exports = SetCache;


/***/ }),

/***/ "./node_modules/lodash/_Stack.js":
/*!***************************************!*\
  !*** ./node_modules/lodash/_Stack.js ***!
  \***************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var ListCache = __webpack_require__(/*! ./_ListCache */ "./node_modules/lodash/_ListCache.js"),
    stackClear = __webpack_require__(/*! ./_stackClear */ "./node_modules/lodash/_stackClear.js"),
    stackDelete = __webpack_require__(/*! ./_stackDelete */ "./node_modules/lodash/_stackDelete.js"),
    stackGet = __webpack_require__(/*! ./_stackGet */ "./node_modules/lodash/_stackGet.js"),
    stackHas = __webpack_require__(/*! ./_stackHas */ "./node_modules/lodash/_stackHas.js"),
    stackSet = __webpack_require__(/*! ./_stackSet */ "./node_modules/lodash/_stackSet.js");

/**
 * Creates a stack cache object to store key-value pairs.
 *
 * @private
 * @constructor
 * @param {Array} [entries] The key-value pairs to cache.
 */
function Stack(entries) {
  var data = this.__data__ = new ListCache(entries);
  this.size = data.size;
}

// Add methods to `Stack`.
Stack.prototype.clear = stackClear;
Stack.prototype['delete'] = stackDelete;
Stack.prototype.get = stackGet;
Stack.prototype.has = stackHas;
Stack.prototype.set = stackSet;

module.exports = Stack;


/***/ }),

/***/ "./node_modules/lodash/_Symbol.js":
/*!****************************************!*\
  !*** ./node_modules/lodash/_Symbol.js ***!
  \****************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var root = __webpack_require__(/*! ./_root */ "./node_modules/lodash/_root.js");

/** Built-in value references. */
var Symbol = root.Symbol;

module.exports = Symbol;


/***/ }),

/***/ "./node_modules/lodash/_Uint8Array.js":
/*!********************************************!*\
  !*** ./node_modules/lodash/_Uint8Array.js ***!
  \********************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var root = __webpack_require__(/*! ./_root */ "./node_modules/lodash/_root.js");

/** Built-in value references. */
var Uint8Array = root.Uint8Array;

module.exports = Uint8Array;


/***/ }),

/***/ "./node_modules/lodash/_WeakMap.js":
/*!*****************************************!*\
  !*** ./node_modules/lodash/_WeakMap.js ***!
  \*****************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var getNative = __webpack_require__(/*! ./_getNative */ "./node_modules/lodash/_getNative.js"),
    root = __webpack_require__(/*! ./_root */ "./node_modules/lodash/_root.js");

/* Built-in method references that are verified to be native. */
var WeakMap = getNative(root, 'WeakMap');

module.exports = WeakMap;


/***/ }),

/***/ "./node_modules/lodash/_apply.js":
/*!***************************************!*\
  !*** ./node_modules/lodash/_apply.js ***!
  \***************************************/
/*! no static exports found */
/***/ (function(module, exports) {

/**
 * A faster alternative to `Function#apply`, this function invokes `func`
 * with the `this` binding of `thisArg` and the arguments of `args`.
 *
 * @private
 * @param {Function} func The function to invoke.
 * @param {*} thisArg The `this` binding of `func`.
 * @param {Array} args The arguments to invoke `func` with.
 * @returns {*} Returns the result of `func`.
 */
function apply(func, thisArg, args) {
  switch (args.length) {
    case 0: return func.call(thisArg);
    case 1: return func.call(thisArg, args[0]);
    case 2: return func.call(thisArg, args[0], args[1]);
    case 3: return func.call(thisArg, args[0], args[1], args[2]);
  }
  return func.apply(thisArg, args);
}

module.exports = apply;


/***/ }),

/***/ "./node_modules/lodash/_arrayEach.js":
/*!*******************************************!*\
  !*** ./node_modules/lodash/_arrayEach.js ***!
  \*******************************************/
/*! no static exports found */
/***/ (function(module, exports) {

/**
 * A specialized version of `_.forEach` for arrays without support for
 * iteratee shorthands.
 *
 * @private
 * @param {Array} [array] The array to iterate over.
 * @param {Function} iteratee The function invoked per iteration.
 * @returns {Array} Returns `array`.
 */
function arrayEach(array, iteratee) {
  var index = -1,
      length = array == null ? 0 : array.length;

  while (++index < length) {
    if (iteratee(array[index], index, array) === false) {
      break;
    }
  }
  return array;
}

module.exports = arrayEach;


/***/ }),

/***/ "./node_modules/lodash/_arrayFilter.js":
/*!*********************************************!*\
  !*** ./node_modules/lodash/_arrayFilter.js ***!
  \*********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

/**
 * A specialized version of `_.filter` for arrays without support for
 * iteratee shorthands.
 *
 * @private
 * @param {Array} [array] The array to iterate over.
 * @param {Function} predicate The function invoked per iteration.
 * @returns {Array} Returns the new filtered array.
 */
function arrayFilter(array, predicate) {
  var index = -1,
      length = array == null ? 0 : array.length,
      resIndex = 0,
      result = [];

  while (++index < length) {
    var value = array[index];
    if (predicate(value, index, array)) {
      result[resIndex++] = value;
    }
  }
  return result;
}

module.exports = arrayFilter;


/***/ }),

/***/ "./node_modules/lodash/_arrayIncludes.js":
/*!***********************************************!*\
  !*** ./node_modules/lodash/_arrayIncludes.js ***!
  \***********************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var baseIndexOf = __webpack_require__(/*! ./_baseIndexOf */ "./node_modules/lodash/_baseIndexOf.js");

/**
 * A specialized version of `_.includes` for arrays without support for
 * specifying an index to search from.
 *
 * @private
 * @param {Array} [array] The array to inspect.
 * @param {*} target The value to search for.
 * @returns {boolean} Returns `true` if `target` is found, else `false`.
 */
function arrayIncludes(array, value) {
  var length = array == null ? 0 : array.length;
  return !!length && baseIndexOf(array, value, 0) > -1;
}

module.exports = arrayIncludes;


/***/ }),

/***/ "./node_modules/lodash/_arrayIncludesWith.js":
/*!***************************************************!*\
  !*** ./node_modules/lodash/_arrayIncludesWith.js ***!
  \***************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

/**
 * This function is like `arrayIncludes` except that it accepts a comparator.
 *
 * @private
 * @param {Array} [array] The array to inspect.
 * @param {*} target The value to search for.
 * @param {Function} comparator The comparator invoked per element.
 * @returns {boolean} Returns `true` if `target` is found, else `false`.
 */
function arrayIncludesWith(array, value, comparator) {
  var index = -1,
      length = array == null ? 0 : array.length;

  while (++index < length) {
    if (comparator(value, array[index])) {
      return true;
    }
  }
  return false;
}

module.exports = arrayIncludesWith;


/***/ }),

/***/ "./node_modules/lodash/_arrayLikeKeys.js":
/*!***********************************************!*\
  !*** ./node_modules/lodash/_arrayLikeKeys.js ***!
  \***********************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var baseTimes = __webpack_require__(/*! ./_baseTimes */ "./node_modules/lodash/_baseTimes.js"),
    isArguments = __webpack_require__(/*! ./isArguments */ "./node_modules/lodash/isArguments.js"),
    isArray = __webpack_require__(/*! ./isArray */ "./node_modules/lodash/isArray.js"),
    isBuffer = __webpack_require__(/*! ./isBuffer */ "./node_modules/lodash/isBuffer.js"),
    isIndex = __webpack_require__(/*! ./_isIndex */ "./node_modules/lodash/_isIndex.js"),
    isTypedArray = __webpack_require__(/*! ./isTypedArray */ "./node_modules/lodash/isTypedArray.js");

/** Used for built-in method references. */
var objectProto = Object.prototype;

/** Used to check objects for own properties. */
var hasOwnProperty = objectProto.hasOwnProperty;

/**
 * Creates an array of the enumerable property names of the array-like `value`.
 *
 * @private
 * @param {*} value The value to query.
 * @param {boolean} inherited Specify returning inherited property names.
 * @returns {Array} Returns the array of property names.
 */
function arrayLikeKeys(value, inherited) {
  var isArr = isArray(value),
      isArg = !isArr && isArguments(value),
      isBuff = !isArr && !isArg && isBuffer(value),
      isType = !isArr && !isArg && !isBuff && isTypedArray(value),
      skipIndexes = isArr || isArg || isBuff || isType,
      result = skipIndexes ? baseTimes(value.length, String) : [],
      length = result.length;

  for (var key in value) {
    if ((inherited || hasOwnProperty.call(value, key)) &&
        !(skipIndexes && (
           // Safari 9 has enumerable `arguments.length` in strict mode.
           key == 'length' ||
           // Node.js 0.10 has enumerable non-index properties on buffers.
           (isBuff && (key == 'offset' || key == 'parent')) ||
           // PhantomJS 2 has enumerable non-index properties on typed arrays.
           (isType && (key == 'buffer' || key == 'byteLength' || key == 'byteOffset')) ||
           // Skip index properties.
           isIndex(key, length)
        ))) {
      result.push(key);
    }
  }
  return result;
}

module.exports = arrayLikeKeys;


/***/ }),

/***/ "./node_modules/lodash/_arrayMap.js":
/*!******************************************!*\
  !*** ./node_modules/lodash/_arrayMap.js ***!
  \******************************************/
/*! no static exports found */
/***/ (function(module, exports) {

/**
 * A specialized version of `_.map` for arrays without support for iteratee
 * shorthands.
 *
 * @private
 * @param {Array} [array] The array to iterate over.
 * @param {Function} iteratee The function invoked per iteration.
 * @returns {Array} Returns the new mapped array.
 */
function arrayMap(array, iteratee) {
  var index = -1,
      length = array == null ? 0 : array.length,
      result = Array(length);

  while (++index < length) {
    result[index] = iteratee(array[index], index, array);
  }
  return result;
}

module.exports = arrayMap;


/***/ }),

/***/ "./node_modules/lodash/_arrayPush.js":
/*!*******************************************!*\
  !*** ./node_modules/lodash/_arrayPush.js ***!
  \*******************************************/
/*! no static exports found */
/***/ (function(module, exports) {

/**
 * Appends the elements of `values` to `array`.
 *
 * @private
 * @param {Array} array The array to modify.
 * @param {Array} values The values to append.
 * @returns {Array} Returns `array`.
 */
function arrayPush(array, values) {
  var index = -1,
      length = values.length,
      offset = array.length;

  while (++index < length) {
    array[offset + index] = values[index];
  }
  return array;
}

module.exports = arrayPush;


/***/ }),

/***/ "./node_modules/lodash/_asciiToArray.js":
/*!**********************************************!*\
  !*** ./node_modules/lodash/_asciiToArray.js ***!
  \**********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

/**
 * Converts an ASCII `string` to an array.
 *
 * @private
 * @param {string} string The string to convert.
 * @returns {Array} Returns the converted array.
 */
function asciiToArray(string) {
  return string.split('');
}

module.exports = asciiToArray;


/***/ }),

/***/ "./node_modules/lodash/_assignMergeValue.js":
/*!**************************************************!*\
  !*** ./node_modules/lodash/_assignMergeValue.js ***!
  \**************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var baseAssignValue = __webpack_require__(/*! ./_baseAssignValue */ "./node_modules/lodash/_baseAssignValue.js"),
    eq = __webpack_require__(/*! ./eq */ "./node_modules/lodash/eq.js");

/**
 * This function is like `assignValue` except that it doesn't assign
 * `undefined` values.
 *
 * @private
 * @param {Object} object The object to modify.
 * @param {string} key The key of the property to assign.
 * @param {*} value The value to assign.
 */
function assignMergeValue(object, key, value) {
  if ((value !== undefined && !eq(object[key], value)) ||
      (value === undefined && !(key in object))) {
    baseAssignValue(object, key, value);
  }
}

module.exports = assignMergeValue;


/***/ }),

/***/ "./node_modules/lodash/_assignValue.js":
/*!*********************************************!*\
  !*** ./node_modules/lodash/_assignValue.js ***!
  \*********************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var baseAssignValue = __webpack_require__(/*! ./_baseAssignValue */ "./node_modules/lodash/_baseAssignValue.js"),
    eq = __webpack_require__(/*! ./eq */ "./node_modules/lodash/eq.js");

/** Used for built-in method references. */
var objectProto = Object.prototype;

/** Used to check objects for own properties. */
var hasOwnProperty = objectProto.hasOwnProperty;

/**
 * Assigns `value` to `key` of `object` if the existing value is not equivalent
 * using [`SameValueZero`](http://ecma-international.org/ecma-262/7.0/#sec-samevaluezero)
 * for equality comparisons.
 *
 * @private
 * @param {Object} object The object to modify.
 * @param {string} key The key of the property to assign.
 * @param {*} value The value to assign.
 */
function assignValue(object, key, value) {
  var objValue = object[key];
  if (!(hasOwnProperty.call(object, key) && eq(objValue, value)) ||
      (value === undefined && !(key in object))) {
    baseAssignValue(object, key, value);
  }
}

module.exports = assignValue;


/***/ }),

/***/ "./node_modules/lodash/_assocIndexOf.js":
/*!**********************************************!*\
  !*** ./node_modules/lodash/_assocIndexOf.js ***!
  \**********************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var eq = __webpack_require__(/*! ./eq */ "./node_modules/lodash/eq.js");

/**
 * Gets the index at which the `key` is found in `array` of key-value pairs.
 *
 * @private
 * @param {Array} array The array to inspect.
 * @param {*} key The key to search for.
 * @returns {number} Returns the index of the matched value, else `-1`.
 */
function assocIndexOf(array, key) {
  var length = array.length;
  while (length--) {
    if (eq(array[length][0], key)) {
      return length;
    }
  }
  return -1;
}

module.exports = assocIndexOf;


/***/ }),

/***/ "./node_modules/lodash/_baseAssign.js":
/*!********************************************!*\
  !*** ./node_modules/lodash/_baseAssign.js ***!
  \********************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var copyObject = __webpack_require__(/*! ./_copyObject */ "./node_modules/lodash/_copyObject.js"),
    keys = __webpack_require__(/*! ./keys */ "./node_modules/lodash/keys.js");

/**
 * The base implementation of `_.assign` without support for multiple sources
 * or `customizer` functions.
 *
 * @private
 * @param {Object} object The destination object.
 * @param {Object} source The source object.
 * @returns {Object} Returns `object`.
 */
function baseAssign(object, source) {
  return object && copyObject(source, keys(source), object);
}

module.exports = baseAssign;


/***/ }),

/***/ "./node_modules/lodash/_baseAssignIn.js":
/*!**********************************************!*\
  !*** ./node_modules/lodash/_baseAssignIn.js ***!
  \**********************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var copyObject = __webpack_require__(/*! ./_copyObject */ "./node_modules/lodash/_copyObject.js"),
    keysIn = __webpack_require__(/*! ./keysIn */ "./node_modules/lodash/keysIn.js");

/**
 * The base implementation of `_.assignIn` without support for multiple sources
 * or `customizer` functions.
 *
 * @private
 * @param {Object} object The destination object.
 * @param {Object} source The source object.
 * @returns {Object} Returns `object`.
 */
function baseAssignIn(object, source) {
  return object && copyObject(source, keysIn(source), object);
}

module.exports = baseAssignIn;


/***/ }),

/***/ "./node_modules/lodash/_baseAssignValue.js":
/*!*************************************************!*\
  !*** ./node_modules/lodash/_baseAssignValue.js ***!
  \*************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var defineProperty = __webpack_require__(/*! ./_defineProperty */ "./node_modules/lodash/_defineProperty.js");

/**
 * The base implementation of `assignValue` and `assignMergeValue` without
 * value checks.
 *
 * @private
 * @param {Object} object The object to modify.
 * @param {string} key The key of the property to assign.
 * @param {*} value The value to assign.
 */
function baseAssignValue(object, key, value) {
  if (key == '__proto__' && defineProperty) {
    defineProperty(object, key, {
      'configurable': true,
      'enumerable': true,
      'value': value,
      'writable': true
    });
  } else {
    object[key] = value;
  }
}

module.exports = baseAssignValue;


/***/ }),

/***/ "./node_modules/lodash/_baseClone.js":
/*!*******************************************!*\
  !*** ./node_modules/lodash/_baseClone.js ***!
  \*******************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var Stack = __webpack_require__(/*! ./_Stack */ "./node_modules/lodash/_Stack.js"),
    arrayEach = __webpack_require__(/*! ./_arrayEach */ "./node_modules/lodash/_arrayEach.js"),
    assignValue = __webpack_require__(/*! ./_assignValue */ "./node_modules/lodash/_assignValue.js"),
    baseAssign = __webpack_require__(/*! ./_baseAssign */ "./node_modules/lodash/_baseAssign.js"),
    baseAssignIn = __webpack_require__(/*! ./_baseAssignIn */ "./node_modules/lodash/_baseAssignIn.js"),
    cloneBuffer = __webpack_require__(/*! ./_cloneBuffer */ "./node_modules/lodash/_cloneBuffer.js"),
    copyArray = __webpack_require__(/*! ./_copyArray */ "./node_modules/lodash/_copyArray.js"),
    copySymbols = __webpack_require__(/*! ./_copySymbols */ "./node_modules/lodash/_copySymbols.js"),
    copySymbolsIn = __webpack_require__(/*! ./_copySymbolsIn */ "./node_modules/lodash/_copySymbolsIn.js"),
    getAllKeys = __webpack_require__(/*! ./_getAllKeys */ "./node_modules/lodash/_getAllKeys.js"),
    getAllKeysIn = __webpack_require__(/*! ./_getAllKeysIn */ "./node_modules/lodash/_getAllKeysIn.js"),
    getTag = __webpack_require__(/*! ./_getTag */ "./node_modules/lodash/_getTag.js"),
    initCloneArray = __webpack_require__(/*! ./_initCloneArray */ "./node_modules/lodash/_initCloneArray.js"),
    initCloneByTag = __webpack_require__(/*! ./_initCloneByTag */ "./node_modules/lodash/_initCloneByTag.js"),
    initCloneObject = __webpack_require__(/*! ./_initCloneObject */ "./node_modules/lodash/_initCloneObject.js"),
    isArray = __webpack_require__(/*! ./isArray */ "./node_modules/lodash/isArray.js"),
    isBuffer = __webpack_require__(/*! ./isBuffer */ "./node_modules/lodash/isBuffer.js"),
    isMap = __webpack_require__(/*! ./isMap */ "./node_modules/lodash/isMap.js"),
    isObject = __webpack_require__(/*! ./isObject */ "./node_modules/lodash/isObject.js"),
    isSet = __webpack_require__(/*! ./isSet */ "./node_modules/lodash/isSet.js"),
    keys = __webpack_require__(/*! ./keys */ "./node_modules/lodash/keys.js");

/** Used to compose bitmasks for cloning. */
var CLONE_DEEP_FLAG = 1,
    CLONE_FLAT_FLAG = 2,
    CLONE_SYMBOLS_FLAG = 4;

/** `Object#toString` result references. */
var argsTag = '[object Arguments]',
    arrayTag = '[object Array]',
    boolTag = '[object Boolean]',
    dateTag = '[object Date]',
    errorTag = '[object Error]',
    funcTag = '[object Function]',
    genTag = '[object GeneratorFunction]',
    mapTag = '[object Map]',
    numberTag = '[object Number]',
    objectTag = '[object Object]',
    regexpTag = '[object RegExp]',
    setTag = '[object Set]',
    stringTag = '[object String]',
    symbolTag = '[object Symbol]',
    weakMapTag = '[object WeakMap]';

var arrayBufferTag = '[object ArrayBuffer]',
    dataViewTag = '[object DataView]',
    float32Tag = '[object Float32Array]',
    float64Tag = '[object Float64Array]',
    int8Tag = '[object Int8Array]',
    int16Tag = '[object Int16Array]',
    int32Tag = '[object Int32Array]',
    uint8Tag = '[object Uint8Array]',
    uint8ClampedTag = '[object Uint8ClampedArray]',
    uint16Tag = '[object Uint16Array]',
    uint32Tag = '[object Uint32Array]';

/** Used to identify `toStringTag` values supported by `_.clone`. */
var cloneableTags = {};
cloneableTags[argsTag] = cloneableTags[arrayTag] =
cloneableTags[arrayBufferTag] = cloneableTags[dataViewTag] =
cloneableTags[boolTag] = cloneableTags[dateTag] =
cloneableTags[float32Tag] = cloneableTags[float64Tag] =
cloneableTags[int8Tag] = cloneableTags[int16Tag] =
cloneableTags[int32Tag] = cloneableTags[mapTag] =
cloneableTags[numberTag] = cloneableTags[objectTag] =
cloneableTags[regexpTag] = cloneableTags[setTag] =
cloneableTags[stringTag] = cloneableTags[symbolTag] =
cloneableTags[uint8Tag] = cloneableTags[uint8ClampedTag] =
cloneableTags[uint16Tag] = cloneableTags[uint32Tag] = true;
cloneableTags[errorTag] = cloneableTags[funcTag] =
cloneableTags[weakMapTag] = false;

/**
 * The base implementation of `_.clone` and `_.cloneDeep` which tracks
 * traversed objects.
 *
 * @private
 * @param {*} value The value to clone.
 * @param {boolean} bitmask The bitmask flags.
 *  1 - Deep clone
 *  2 - Flatten inherited properties
 *  4 - Clone symbols
 * @param {Function} [customizer] The function to customize cloning.
 * @param {string} [key] The key of `value`.
 * @param {Object} [object] The parent object of `value`.
 * @param {Object} [stack] Tracks traversed objects and their clone counterparts.
 * @returns {*} Returns the cloned value.
 */
function baseClone(value, bitmask, customizer, key, object, stack) {
  var result,
      isDeep = bitmask & CLONE_DEEP_FLAG,
      isFlat = bitmask & CLONE_FLAT_FLAG,
      isFull = bitmask & CLONE_SYMBOLS_FLAG;

  if (customizer) {
    result = object ? customizer(value, key, object, stack) : customizer(value);
  }
  if (result !== undefined) {
    return result;
  }
  if (!isObject(value)) {
    return value;
  }
  var isArr = isArray(value);
  if (isArr) {
    result = initCloneArray(value);
    if (!isDeep) {
      return copyArray(value, result);
    }
  } else {
    var tag = getTag(value),
        isFunc = tag == funcTag || tag == genTag;

    if (isBuffer(value)) {
      return cloneBuffer(value, isDeep);
    }
    if (tag == objectTag || tag == argsTag || (isFunc && !object)) {
      result = (isFlat || isFunc) ? {} : initCloneObject(value);
      if (!isDeep) {
        return isFlat
          ? copySymbolsIn(value, baseAssignIn(result, value))
          : copySymbols(value, baseAssign(result, value));
      }
    } else {
      if (!cloneableTags[tag]) {
        return object ? value : {};
      }
      result = initCloneByTag(value, tag, isDeep);
    }
  }
  // Check for circular references and return its corresponding clone.
  stack || (stack = new Stack);
  var stacked = stack.get(value);
  if (stacked) {
    return stacked;
  }
  stack.set(value, result);

  if (isSet(value)) {
    value.forEach(function(subValue) {
      result.add(baseClone(subValue, bitmask, customizer, subValue, value, stack));
    });
  } else if (isMap(value)) {
    value.forEach(function(subValue, key) {
      result.set(key, baseClone(subValue, bitmask, customizer, key, value, stack));
    });
  }

  var keysFunc = isFull
    ? (isFlat ? getAllKeysIn : getAllKeys)
    : (isFlat ? keysIn : keys);

  var props = isArr ? undefined : keysFunc(value);
  arrayEach(props || value, function(subValue, key) {
    if (props) {
      key = subValue;
      subValue = value[key];
    }
    // Recursively populate clone (susceptible to call stack limits).
    assignValue(result, key, baseClone(subValue, bitmask, customizer, key, value, stack));
  });
  return result;
}

module.exports = baseClone;


/***/ }),

/***/ "./node_modules/lodash/_baseCreate.js":
/*!********************************************!*\
  !*** ./node_modules/lodash/_baseCreate.js ***!
  \********************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var isObject = __webpack_require__(/*! ./isObject */ "./node_modules/lodash/isObject.js");

/** Built-in value references. */
var objectCreate = Object.create;

/**
 * The base implementation of `_.create` without support for assigning
 * properties to the created object.
 *
 * @private
 * @param {Object} proto The object to inherit from.
 * @returns {Object} Returns the new object.
 */
var baseCreate = (function() {
  function object() {}
  return function(proto) {
    if (!isObject(proto)) {
      return {};
    }
    if (objectCreate) {
      return objectCreate(proto);
    }
    object.prototype = proto;
    var result = new object;
    object.prototype = undefined;
    return result;
  };
}());

module.exports = baseCreate;


/***/ }),

/***/ "./node_modules/lodash/_baseDifference.js":
/*!************************************************!*\
  !*** ./node_modules/lodash/_baseDifference.js ***!
  \************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var SetCache = __webpack_require__(/*! ./_SetCache */ "./node_modules/lodash/_SetCache.js"),
    arrayIncludes = __webpack_require__(/*! ./_arrayIncludes */ "./node_modules/lodash/_arrayIncludes.js"),
    arrayIncludesWith = __webpack_require__(/*! ./_arrayIncludesWith */ "./node_modules/lodash/_arrayIncludesWith.js"),
    arrayMap = __webpack_require__(/*! ./_arrayMap */ "./node_modules/lodash/_arrayMap.js"),
    baseUnary = __webpack_require__(/*! ./_baseUnary */ "./node_modules/lodash/_baseUnary.js"),
    cacheHas = __webpack_require__(/*! ./_cacheHas */ "./node_modules/lodash/_cacheHas.js");

/** Used as the size to enable large array optimizations. */
var LARGE_ARRAY_SIZE = 200;

/**
 * The base implementation of methods like `_.difference` without support
 * for excluding multiple arrays or iteratee shorthands.
 *
 * @private
 * @param {Array} array The array to inspect.
 * @param {Array} values The values to exclude.
 * @param {Function} [iteratee] The iteratee invoked per element.
 * @param {Function} [comparator] The comparator invoked per element.
 * @returns {Array} Returns the new array of filtered values.
 */
function baseDifference(array, values, iteratee, comparator) {
  var index = -1,
      includes = arrayIncludes,
      isCommon = true,
      length = array.length,
      result = [],
      valuesLength = values.length;

  if (!length) {
    return result;
  }
  if (iteratee) {
    values = arrayMap(values, baseUnary(iteratee));
  }
  if (comparator) {
    includes = arrayIncludesWith;
    isCommon = false;
  }
  else if (values.length >= LARGE_ARRAY_SIZE) {
    includes = cacheHas;
    isCommon = false;
    values = new SetCache(values);
  }
  outer:
  while (++index < length) {
    var value = array[index],
        computed = iteratee == null ? value : iteratee(value);

    value = (comparator || value !== 0) ? value : 0;
    if (isCommon && computed === computed) {
      var valuesIndex = valuesLength;
      while (valuesIndex--) {
        if (values[valuesIndex] === computed) {
          continue outer;
        }
      }
      result.push(value);
    }
    else if (!includes(values, computed, comparator)) {
      result.push(value);
    }
  }
  return result;
}

module.exports = baseDifference;


/***/ }),

/***/ "./node_modules/lodash/_baseFindIndex.js":
/*!***********************************************!*\
  !*** ./node_modules/lodash/_baseFindIndex.js ***!
  \***********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

/**
 * The base implementation of `_.findIndex` and `_.findLastIndex` without
 * support for iteratee shorthands.
 *
 * @private
 * @param {Array} array The array to inspect.
 * @param {Function} predicate The function invoked per iteration.
 * @param {number} fromIndex The index to search from.
 * @param {boolean} [fromRight] Specify iterating from right to left.
 * @returns {number} Returns the index of the matched value, else `-1`.
 */
function baseFindIndex(array, predicate, fromIndex, fromRight) {
  var length = array.length,
      index = fromIndex + (fromRight ? 1 : -1);

  while ((fromRight ? index-- : ++index < length)) {
    if (predicate(array[index], index, array)) {
      return index;
    }
  }
  return -1;
}

module.exports = baseFindIndex;


/***/ }),

/***/ "./node_modules/lodash/_baseFlatten.js":
/*!*********************************************!*\
  !*** ./node_modules/lodash/_baseFlatten.js ***!
  \*********************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var arrayPush = __webpack_require__(/*! ./_arrayPush */ "./node_modules/lodash/_arrayPush.js"),
    isFlattenable = __webpack_require__(/*! ./_isFlattenable */ "./node_modules/lodash/_isFlattenable.js");

/**
 * The base implementation of `_.flatten` with support for restricting flattening.
 *
 * @private
 * @param {Array} array The array to flatten.
 * @param {number} depth The maximum recursion depth.
 * @param {boolean} [predicate=isFlattenable] The function invoked per iteration.
 * @param {boolean} [isStrict] Restrict to values that pass `predicate` checks.
 * @param {Array} [result=[]] The initial result value.
 * @returns {Array} Returns the new flattened array.
 */
function baseFlatten(array, depth, predicate, isStrict, result) {
  var index = -1,
      length = array.length;

  predicate || (predicate = isFlattenable);
  result || (result = []);

  while (++index < length) {
    var value = array[index];
    if (depth > 0 && predicate(value)) {
      if (depth > 1) {
        // Recursively flatten arrays (susceptible to call stack limits).
        baseFlatten(value, depth - 1, predicate, isStrict, result);
      } else {
        arrayPush(result, value);
      }
    } else if (!isStrict) {
      result[result.length] = value;
    }
  }
  return result;
}

module.exports = baseFlatten;


/***/ }),

/***/ "./node_modules/lodash/_baseFor.js":
/*!*****************************************!*\
  !*** ./node_modules/lodash/_baseFor.js ***!
  \*****************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var createBaseFor = __webpack_require__(/*! ./_createBaseFor */ "./node_modules/lodash/_createBaseFor.js");

/**
 * The base implementation of `baseForOwn` which iterates over `object`
 * properties returned by `keysFunc` and invokes `iteratee` for each property.
 * Iteratee functions may exit iteration early by explicitly returning `false`.
 *
 * @private
 * @param {Object} object The object to iterate over.
 * @param {Function} iteratee The function invoked per iteration.
 * @param {Function} keysFunc The function to get the keys of `object`.
 * @returns {Object} Returns `object`.
 */
var baseFor = createBaseFor();

module.exports = baseFor;


/***/ }),

/***/ "./node_modules/lodash/_baseFunctions.js":
/*!***********************************************!*\
  !*** ./node_modules/lodash/_baseFunctions.js ***!
  \***********************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var arrayFilter = __webpack_require__(/*! ./_arrayFilter */ "./node_modules/lodash/_arrayFilter.js"),
    isFunction = __webpack_require__(/*! ./isFunction */ "./node_modules/lodash/isFunction.js");

/**
 * The base implementation of `_.functions` which creates an array of
 * `object` function property names filtered from `props`.
 *
 * @private
 * @param {Object} object The object to inspect.
 * @param {Array} props The property names to filter.
 * @returns {Array} Returns the function names.
 */
function baseFunctions(object, props) {
  return arrayFilter(props, function(key) {
    return isFunction(object[key]);
  });
}

module.exports = baseFunctions;


/***/ }),

/***/ "./node_modules/lodash/_baseGetAllKeys.js":
/*!************************************************!*\
  !*** ./node_modules/lodash/_baseGetAllKeys.js ***!
  \************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var arrayPush = __webpack_require__(/*! ./_arrayPush */ "./node_modules/lodash/_arrayPush.js"),
    isArray = __webpack_require__(/*! ./isArray */ "./node_modules/lodash/isArray.js");

/**
 * The base implementation of `getAllKeys` and `getAllKeysIn` which uses
 * `keysFunc` and `symbolsFunc` to get the enumerable property names and
 * symbols of `object`.
 *
 * @private
 * @param {Object} object The object to query.
 * @param {Function} keysFunc The function to get the keys of `object`.
 * @param {Function} symbolsFunc The function to get the symbols of `object`.
 * @returns {Array} Returns the array of property names and symbols.
 */
function baseGetAllKeys(object, keysFunc, symbolsFunc) {
  var result = keysFunc(object);
  return isArray(object) ? result : arrayPush(result, symbolsFunc(object));
}

module.exports = baseGetAllKeys;


/***/ }),

/***/ "./node_modules/lodash/_baseGetTag.js":
/*!********************************************!*\
  !*** ./node_modules/lodash/_baseGetTag.js ***!
  \********************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var Symbol = __webpack_require__(/*! ./_Symbol */ "./node_modules/lodash/_Symbol.js"),
    getRawTag = __webpack_require__(/*! ./_getRawTag */ "./node_modules/lodash/_getRawTag.js"),
    objectToString = __webpack_require__(/*! ./_objectToString */ "./node_modules/lodash/_objectToString.js");

/** `Object#toString` result references. */
var nullTag = '[object Null]',
    undefinedTag = '[object Undefined]';

/** Built-in value references. */
var symToStringTag = Symbol ? Symbol.toStringTag : undefined;

/**
 * The base implementation of `getTag` without fallbacks for buggy environments.
 *
 * @private
 * @param {*} value The value to query.
 * @returns {string} Returns the `toStringTag`.
 */
function baseGetTag(value) {
  if (value == null) {
    return value === undefined ? undefinedTag : nullTag;
  }
  return (symToStringTag && symToStringTag in Object(value))
    ? getRawTag(value)
    : objectToString(value);
}

module.exports = baseGetTag;


/***/ }),

/***/ "./node_modules/lodash/_baseIndexOf.js":
/*!*********************************************!*\
  !*** ./node_modules/lodash/_baseIndexOf.js ***!
  \*********************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var baseFindIndex = __webpack_require__(/*! ./_baseFindIndex */ "./node_modules/lodash/_baseFindIndex.js"),
    baseIsNaN = __webpack_require__(/*! ./_baseIsNaN */ "./node_modules/lodash/_baseIsNaN.js"),
    strictIndexOf = __webpack_require__(/*! ./_strictIndexOf */ "./node_modules/lodash/_strictIndexOf.js");

/**
 * The base implementation of `_.indexOf` without `fromIndex` bounds checks.
 *
 * @private
 * @param {Array} array The array to inspect.
 * @param {*} value The value to search for.
 * @param {number} fromIndex The index to search from.
 * @returns {number} Returns the index of the matched value, else `-1`.
 */
function baseIndexOf(array, value, fromIndex) {
  return value === value
    ? strictIndexOf(array, value, fromIndex)
    : baseFindIndex(array, baseIsNaN, fromIndex);
}

module.exports = baseIndexOf;


/***/ }),

/***/ "./node_modules/lodash/_baseIsArguments.js":
/*!*************************************************!*\
  !*** ./node_modules/lodash/_baseIsArguments.js ***!
  \*************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var baseGetTag = __webpack_require__(/*! ./_baseGetTag */ "./node_modules/lodash/_baseGetTag.js"),
    isObjectLike = __webpack_require__(/*! ./isObjectLike */ "./node_modules/lodash/isObjectLike.js");

/** `Object#toString` result references. */
var argsTag = '[object Arguments]';

/**
 * The base implementation of `_.isArguments`.
 *
 * @private
 * @param {*} value The value to check.
 * @returns {boolean} Returns `true` if `value` is an `arguments` object,
 */
function baseIsArguments(value) {
  return isObjectLike(value) && baseGetTag(value) == argsTag;
}

module.exports = baseIsArguments;


/***/ }),

/***/ "./node_modules/lodash/_baseIsMap.js":
/*!*******************************************!*\
  !*** ./node_modules/lodash/_baseIsMap.js ***!
  \*******************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var getTag = __webpack_require__(/*! ./_getTag */ "./node_modules/lodash/_getTag.js"),
    isObjectLike = __webpack_require__(/*! ./isObjectLike */ "./node_modules/lodash/isObjectLike.js");

/** `Object#toString` result references. */
var mapTag = '[object Map]';

/**
 * The base implementation of `_.isMap` without Node.js optimizations.
 *
 * @private
 * @param {*} value The value to check.
 * @returns {boolean} Returns `true` if `value` is a map, else `false`.
 */
function baseIsMap(value) {
  return isObjectLike(value) && getTag(value) == mapTag;
}

module.exports = baseIsMap;


/***/ }),

/***/ "./node_modules/lodash/_baseIsNaN.js":
/*!*******************************************!*\
  !*** ./node_modules/lodash/_baseIsNaN.js ***!
  \*******************************************/
/*! no static exports found */
/***/ (function(module, exports) {

/**
 * The base implementation of `_.isNaN` without support for number objects.
 *
 * @private
 * @param {*} value The value to check.
 * @returns {boolean} Returns `true` if `value` is `NaN`, else `false`.
 */
function baseIsNaN(value) {
  return value !== value;
}

module.exports = baseIsNaN;


/***/ }),

/***/ "./node_modules/lodash/_baseIsNative.js":
/*!**********************************************!*\
  !*** ./node_modules/lodash/_baseIsNative.js ***!
  \**********************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var isFunction = __webpack_require__(/*! ./isFunction */ "./node_modules/lodash/isFunction.js"),
    isMasked = __webpack_require__(/*! ./_isMasked */ "./node_modules/lodash/_isMasked.js"),
    isObject = __webpack_require__(/*! ./isObject */ "./node_modules/lodash/isObject.js"),
    toSource = __webpack_require__(/*! ./_toSource */ "./node_modules/lodash/_toSource.js");

/**
 * Used to match `RegExp`
 * [syntax characters](http://ecma-international.org/ecma-262/7.0/#sec-patterns).
 */
var reRegExpChar = /[\\^$.*+?()[\]{}|]/g;

/** Used to detect host constructors (Safari). */
var reIsHostCtor = /^\[object .+?Constructor\]$/;

/** Used for built-in method references. */
var funcProto = Function.prototype,
    objectProto = Object.prototype;

/** Used to resolve the decompiled source of functions. */
var funcToString = funcProto.toString;

/** Used to check objects for own properties. */
var hasOwnProperty = objectProto.hasOwnProperty;

/** Used to detect if a method is native. */
var reIsNative = RegExp('^' +
  funcToString.call(hasOwnProperty).replace(reRegExpChar, '\\$&')
  .replace(/hasOwnProperty|(function).*?(?=\\\()| for .+?(?=\\\])/g, '$1.*?') + '$'
);

/**
 * The base implementation of `_.isNative` without bad shim checks.
 *
 * @private
 * @param {*} value The value to check.
 * @returns {boolean} Returns `true` if `value` is a native function,
 *  else `false`.
 */
function baseIsNative(value) {
  if (!isObject(value) || isMasked(value)) {
    return false;
  }
  var pattern = isFunction(value) ? reIsNative : reIsHostCtor;
  return pattern.test(toSource(value));
}

module.exports = baseIsNative;


/***/ }),

/***/ "./node_modules/lodash/_baseIsSet.js":
/*!*******************************************!*\
  !*** ./node_modules/lodash/_baseIsSet.js ***!
  \*******************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var getTag = __webpack_require__(/*! ./_getTag */ "./node_modules/lodash/_getTag.js"),
    isObjectLike = __webpack_require__(/*! ./isObjectLike */ "./node_modules/lodash/isObjectLike.js");

/** `Object#toString` result references. */
var setTag = '[object Set]';

/**
 * The base implementation of `_.isSet` without Node.js optimizations.
 *
 * @private
 * @param {*} value The value to check.
 * @returns {boolean} Returns `true` if `value` is a set, else `false`.
 */
function baseIsSet(value) {
  return isObjectLike(value) && getTag(value) == setTag;
}

module.exports = baseIsSet;


/***/ }),

/***/ "./node_modules/lodash/_baseIsTypedArray.js":
/*!**************************************************!*\
  !*** ./node_modules/lodash/_baseIsTypedArray.js ***!
  \**************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var baseGetTag = __webpack_require__(/*! ./_baseGetTag */ "./node_modules/lodash/_baseGetTag.js"),
    isLength = __webpack_require__(/*! ./isLength */ "./node_modules/lodash/isLength.js"),
    isObjectLike = __webpack_require__(/*! ./isObjectLike */ "./node_modules/lodash/isObjectLike.js");

/** `Object#toString` result references. */
var argsTag = '[object Arguments]',
    arrayTag = '[object Array]',
    boolTag = '[object Boolean]',
    dateTag = '[object Date]',
    errorTag = '[object Error]',
    funcTag = '[object Function]',
    mapTag = '[object Map]',
    numberTag = '[object Number]',
    objectTag = '[object Object]',
    regexpTag = '[object RegExp]',
    setTag = '[object Set]',
    stringTag = '[object String]',
    weakMapTag = '[object WeakMap]';

var arrayBufferTag = '[object ArrayBuffer]',
    dataViewTag = '[object DataView]',
    float32Tag = '[object Float32Array]',
    float64Tag = '[object Float64Array]',
    int8Tag = '[object Int8Array]',
    int16Tag = '[object Int16Array]',
    int32Tag = '[object Int32Array]',
    uint8Tag = '[object Uint8Array]',
    uint8ClampedTag = '[object Uint8ClampedArray]',
    uint16Tag = '[object Uint16Array]',
    uint32Tag = '[object Uint32Array]';

/** Used to identify `toStringTag` values of typed arrays. */
var typedArrayTags = {};
typedArrayTags[float32Tag] = typedArrayTags[float64Tag] =
typedArrayTags[int8Tag] = typedArrayTags[int16Tag] =
typedArrayTags[int32Tag] = typedArrayTags[uint8Tag] =
typedArrayTags[uint8ClampedTag] = typedArrayTags[uint16Tag] =
typedArrayTags[uint32Tag] = true;
typedArrayTags[argsTag] = typedArrayTags[arrayTag] =
typedArrayTags[arrayBufferTag] = typedArrayTags[boolTag] =
typedArrayTags[dataViewTag] = typedArrayTags[dateTag] =
typedArrayTags[errorTag] = typedArrayTags[funcTag] =
typedArrayTags[mapTag] = typedArrayTags[numberTag] =
typedArrayTags[objectTag] = typedArrayTags[regexpTag] =
typedArrayTags[setTag] = typedArrayTags[stringTag] =
typedArrayTags[weakMapTag] = false;

/**
 * The base implementation of `_.isTypedArray` without Node.js optimizations.
 *
 * @private
 * @param {*} value The value to check.
 * @returns {boolean} Returns `true` if `value` is a typed array, else `false`.
 */
function baseIsTypedArray(value) {
  return isObjectLike(value) &&
    isLength(value.length) && !!typedArrayTags[baseGetTag(value)];
}

module.exports = baseIsTypedArray;


/***/ }),

/***/ "./node_modules/lodash/_baseKeys.js":
/*!******************************************!*\
  !*** ./node_modules/lodash/_baseKeys.js ***!
  \******************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var isPrototype = __webpack_require__(/*! ./_isPrototype */ "./node_modules/lodash/_isPrototype.js"),
    nativeKeys = __webpack_require__(/*! ./_nativeKeys */ "./node_modules/lodash/_nativeKeys.js");

/** Used for built-in method references. */
var objectProto = Object.prototype;

/** Used to check objects for own properties. */
var hasOwnProperty = objectProto.hasOwnProperty;

/**
 * The base implementation of `_.keys` which doesn't treat sparse arrays as dense.
 *
 * @private
 * @param {Object} object The object to query.
 * @returns {Array} Returns the array of property names.
 */
function baseKeys(object) {
  if (!isPrototype(object)) {
    return nativeKeys(object);
  }
  var result = [];
  for (var key in Object(object)) {
    if (hasOwnProperty.call(object, key) && key != 'constructor') {
      result.push(key);
    }
  }
  return result;
}

module.exports = baseKeys;


/***/ }),

/***/ "./node_modules/lodash/_baseKeysIn.js":
/*!********************************************!*\
  !*** ./node_modules/lodash/_baseKeysIn.js ***!
  \********************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var isObject = __webpack_require__(/*! ./isObject */ "./node_modules/lodash/isObject.js"),
    isPrototype = __webpack_require__(/*! ./_isPrototype */ "./node_modules/lodash/_isPrototype.js"),
    nativeKeysIn = __webpack_require__(/*! ./_nativeKeysIn */ "./node_modules/lodash/_nativeKeysIn.js");

/** Used for built-in method references. */
var objectProto = Object.prototype;

/** Used to check objects for own properties. */
var hasOwnProperty = objectProto.hasOwnProperty;

/**
 * The base implementation of `_.keysIn` which doesn't treat sparse arrays as dense.
 *
 * @private
 * @param {Object} object The object to query.
 * @returns {Array} Returns the array of property names.
 */
function baseKeysIn(object) {
  if (!isObject(object)) {
    return nativeKeysIn(object);
  }
  var isProto = isPrototype(object),
      result = [];

  for (var key in object) {
    if (!(key == 'constructor' && (isProto || !hasOwnProperty.call(object, key)))) {
      result.push(key);
    }
  }
  return result;
}

module.exports = baseKeysIn;


/***/ }),

/***/ "./node_modules/lodash/_baseMerge.js":
/*!*******************************************!*\
  !*** ./node_modules/lodash/_baseMerge.js ***!
  \*******************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var Stack = __webpack_require__(/*! ./_Stack */ "./node_modules/lodash/_Stack.js"),
    assignMergeValue = __webpack_require__(/*! ./_assignMergeValue */ "./node_modules/lodash/_assignMergeValue.js"),
    baseFor = __webpack_require__(/*! ./_baseFor */ "./node_modules/lodash/_baseFor.js"),
    baseMergeDeep = __webpack_require__(/*! ./_baseMergeDeep */ "./node_modules/lodash/_baseMergeDeep.js"),
    isObject = __webpack_require__(/*! ./isObject */ "./node_modules/lodash/isObject.js"),
    keysIn = __webpack_require__(/*! ./keysIn */ "./node_modules/lodash/keysIn.js"),
    safeGet = __webpack_require__(/*! ./_safeGet */ "./node_modules/lodash/_safeGet.js");

/**
 * The base implementation of `_.merge` without support for multiple sources.
 *
 * @private
 * @param {Object} object The destination object.
 * @param {Object} source The source object.
 * @param {number} srcIndex The index of `source`.
 * @param {Function} [customizer] The function to customize merged values.
 * @param {Object} [stack] Tracks traversed source values and their merged
 *  counterparts.
 */
function baseMerge(object, source, srcIndex, customizer, stack) {
  if (object === source) {
    return;
  }
  baseFor(source, function(srcValue, key) {
    stack || (stack = new Stack);
    if (isObject(srcValue)) {
      baseMergeDeep(object, source, key, srcIndex, baseMerge, customizer, stack);
    }
    else {
      var newValue = customizer
        ? customizer(safeGet(object, key), srcValue, (key + ''), object, source, stack)
        : undefined;

      if (newValue === undefined) {
        newValue = srcValue;
      }
      assignMergeValue(object, key, newValue);
    }
  }, keysIn);
}

module.exports = baseMerge;


/***/ }),

/***/ "./node_modules/lodash/_baseMergeDeep.js":
/*!***********************************************!*\
  !*** ./node_modules/lodash/_baseMergeDeep.js ***!
  \***********************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var assignMergeValue = __webpack_require__(/*! ./_assignMergeValue */ "./node_modules/lodash/_assignMergeValue.js"),
    cloneBuffer = __webpack_require__(/*! ./_cloneBuffer */ "./node_modules/lodash/_cloneBuffer.js"),
    cloneTypedArray = __webpack_require__(/*! ./_cloneTypedArray */ "./node_modules/lodash/_cloneTypedArray.js"),
    copyArray = __webpack_require__(/*! ./_copyArray */ "./node_modules/lodash/_copyArray.js"),
    initCloneObject = __webpack_require__(/*! ./_initCloneObject */ "./node_modules/lodash/_initCloneObject.js"),
    isArguments = __webpack_require__(/*! ./isArguments */ "./node_modules/lodash/isArguments.js"),
    isArray = __webpack_require__(/*! ./isArray */ "./node_modules/lodash/isArray.js"),
    isArrayLikeObject = __webpack_require__(/*! ./isArrayLikeObject */ "./node_modules/lodash/isArrayLikeObject.js"),
    isBuffer = __webpack_require__(/*! ./isBuffer */ "./node_modules/lodash/isBuffer.js"),
    isFunction = __webpack_require__(/*! ./isFunction */ "./node_modules/lodash/isFunction.js"),
    isObject = __webpack_require__(/*! ./isObject */ "./node_modules/lodash/isObject.js"),
    isPlainObject = __webpack_require__(/*! ./isPlainObject */ "./node_modules/lodash/isPlainObject.js"),
    isTypedArray = __webpack_require__(/*! ./isTypedArray */ "./node_modules/lodash/isTypedArray.js"),
    safeGet = __webpack_require__(/*! ./_safeGet */ "./node_modules/lodash/_safeGet.js"),
    toPlainObject = __webpack_require__(/*! ./toPlainObject */ "./node_modules/lodash/toPlainObject.js");

/**
 * A specialized version of `baseMerge` for arrays and objects which performs
 * deep merges and tracks traversed objects enabling objects with circular
 * references to be merged.
 *
 * @private
 * @param {Object} object The destination object.
 * @param {Object} source The source object.
 * @param {string} key The key of the value to merge.
 * @param {number} srcIndex The index of `source`.
 * @param {Function} mergeFunc The function to merge values.
 * @param {Function} [customizer] The function to customize assigned values.
 * @param {Object} [stack] Tracks traversed source values and their merged
 *  counterparts.
 */
function baseMergeDeep(object, source, key, srcIndex, mergeFunc, customizer, stack) {
  var objValue = safeGet(object, key),
      srcValue = safeGet(source, key),
      stacked = stack.get(srcValue);

  if (stacked) {
    assignMergeValue(object, key, stacked);
    return;
  }
  var newValue = customizer
    ? customizer(objValue, srcValue, (key + ''), object, source, stack)
    : undefined;

  var isCommon = newValue === undefined;

  if (isCommon) {
    var isArr = isArray(srcValue),
        isBuff = !isArr && isBuffer(srcValue),
        isTyped = !isArr && !isBuff && isTypedArray(srcValue);

    newValue = srcValue;
    if (isArr || isBuff || isTyped) {
      if (isArray(objValue)) {
        newValue = objValue;
      }
      else if (isArrayLikeObject(objValue)) {
        newValue = copyArray(objValue);
      }
      else if (isBuff) {
        isCommon = false;
        newValue = cloneBuffer(srcValue, true);
      }
      else if (isTyped) {
        isCommon = false;
        newValue = cloneTypedArray(srcValue, true);
      }
      else {
        newValue = [];
      }
    }
    else if (isPlainObject(srcValue) || isArguments(srcValue)) {
      newValue = objValue;
      if (isArguments(objValue)) {
        newValue = toPlainObject(objValue);
      }
      else if (!isObject(objValue) || isFunction(objValue)) {
        newValue = initCloneObject(srcValue);
      }
    }
    else {
      isCommon = false;
    }
  }
  if (isCommon) {
    // Recursively merge objects and arrays (susceptible to call stack limits).
    stack.set(srcValue, newValue);
    mergeFunc(newValue, srcValue, srcIndex, customizer, stack);
    stack['delete'](srcValue);
  }
  assignMergeValue(object, key, newValue);
}

module.exports = baseMergeDeep;


/***/ }),

/***/ "./node_modules/lodash/_baseRest.js":
/*!******************************************!*\
  !*** ./node_modules/lodash/_baseRest.js ***!
  \******************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var identity = __webpack_require__(/*! ./identity */ "./node_modules/lodash/identity.js"),
    overRest = __webpack_require__(/*! ./_overRest */ "./node_modules/lodash/_overRest.js"),
    setToString = __webpack_require__(/*! ./_setToString */ "./node_modules/lodash/_setToString.js");

/**
 * The base implementation of `_.rest` which doesn't validate or coerce arguments.
 *
 * @private
 * @param {Function} func The function to apply a rest parameter to.
 * @param {number} [start=func.length-1] The start position of the rest parameter.
 * @returns {Function} Returns the new function.
 */
function baseRest(func, start) {
  return setToString(overRest(func, start, identity), func + '');
}

module.exports = baseRest;


/***/ }),

/***/ "./node_modules/lodash/_baseSetToString.js":
/*!*************************************************!*\
  !*** ./node_modules/lodash/_baseSetToString.js ***!
  \*************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var constant = __webpack_require__(/*! ./constant */ "./node_modules/lodash/constant.js"),
    defineProperty = __webpack_require__(/*! ./_defineProperty */ "./node_modules/lodash/_defineProperty.js"),
    identity = __webpack_require__(/*! ./identity */ "./node_modules/lodash/identity.js");

/**
 * The base implementation of `setToString` without support for hot loop shorting.
 *
 * @private
 * @param {Function} func The function to modify.
 * @param {Function} string The `toString` result.
 * @returns {Function} Returns `func`.
 */
var baseSetToString = !defineProperty ? identity : function(func, string) {
  return defineProperty(func, 'toString', {
    'configurable': true,
    'enumerable': false,
    'value': constant(string),
    'writable': true
  });
};

module.exports = baseSetToString;


/***/ }),

/***/ "./node_modules/lodash/_baseSlice.js":
/*!*******************************************!*\
  !*** ./node_modules/lodash/_baseSlice.js ***!
  \*******************************************/
/*! no static exports found */
/***/ (function(module, exports) {

/**
 * The base implementation of `_.slice` without an iteratee call guard.
 *
 * @private
 * @param {Array} array The array to slice.
 * @param {number} [start=0] The start position.
 * @param {number} [end=array.length] The end position.
 * @returns {Array} Returns the slice of `array`.
 */
function baseSlice(array, start, end) {
  var index = -1,
      length = array.length;

  if (start < 0) {
    start = -start > length ? 0 : (length + start);
  }
  end = end > length ? length : end;
  if (end < 0) {
    end += length;
  }
  length = start > end ? 0 : ((end - start) >>> 0);
  start >>>= 0;

  var result = Array(length);
  while (++index < length) {
    result[index] = array[index + start];
  }
  return result;
}

module.exports = baseSlice;


/***/ }),

/***/ "./node_modules/lodash/_baseTimes.js":
/*!*******************************************!*\
  !*** ./node_modules/lodash/_baseTimes.js ***!
  \*******************************************/
/*! no static exports found */
/***/ (function(module, exports) {

/**
 * The base implementation of `_.times` without support for iteratee shorthands
 * or max array length checks.
 *
 * @private
 * @param {number} n The number of times to invoke `iteratee`.
 * @param {Function} iteratee The function invoked per iteration.
 * @returns {Array} Returns the array of results.
 */
function baseTimes(n, iteratee) {
  var index = -1,
      result = Array(n);

  while (++index < n) {
    result[index] = iteratee(index);
  }
  return result;
}

module.exports = baseTimes;


/***/ }),

/***/ "./node_modules/lodash/_baseToString.js":
/*!**********************************************!*\
  !*** ./node_modules/lodash/_baseToString.js ***!
  \**********************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var Symbol = __webpack_require__(/*! ./_Symbol */ "./node_modules/lodash/_Symbol.js"),
    arrayMap = __webpack_require__(/*! ./_arrayMap */ "./node_modules/lodash/_arrayMap.js"),
    isArray = __webpack_require__(/*! ./isArray */ "./node_modules/lodash/isArray.js"),
    isSymbol = __webpack_require__(/*! ./isSymbol */ "./node_modules/lodash/isSymbol.js");

/** Used as references for various `Number` constants. */
var INFINITY = 1 / 0;

/** Used to convert symbols to primitives and strings. */
var symbolProto = Symbol ? Symbol.prototype : undefined,
    symbolToString = symbolProto ? symbolProto.toString : undefined;

/**
 * The base implementation of `_.toString` which doesn't convert nullish
 * values to empty strings.
 *
 * @private
 * @param {*} value The value to process.
 * @returns {string} Returns the string.
 */
function baseToString(value) {
  // Exit early for strings to avoid a performance hit in some environments.
  if (typeof value == 'string') {
    return value;
  }
  if (isArray(value)) {
    // Recursively convert values (susceptible to call stack limits).
    return arrayMap(value, baseToString) + '';
  }
  if (isSymbol(value)) {
    return symbolToString ? symbolToString.call(value) : '';
  }
  var result = (value + '');
  return (result == '0' && (1 / value) == -INFINITY) ? '-0' : result;
}

module.exports = baseToString;


/***/ }),

/***/ "./node_modules/lodash/_baseUnary.js":
/*!*******************************************!*\
  !*** ./node_modules/lodash/_baseUnary.js ***!
  \*******************************************/
/*! no static exports found */
/***/ (function(module, exports) {

/**
 * The base implementation of `_.unary` without support for storing metadata.
 *
 * @private
 * @param {Function} func The function to cap arguments for.
 * @returns {Function} Returns the new capped function.
 */
function baseUnary(func) {
  return function(value) {
    return func(value);
  };
}

module.exports = baseUnary;


/***/ }),

/***/ "./node_modules/lodash/_baseValues.js":
/*!********************************************!*\
  !*** ./node_modules/lodash/_baseValues.js ***!
  \********************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var arrayMap = __webpack_require__(/*! ./_arrayMap */ "./node_modules/lodash/_arrayMap.js");

/**
 * The base implementation of `_.values` and `_.valuesIn` which creates an
 * array of `object` property values corresponding to the property names
 * of `props`.
 *
 * @private
 * @param {Object} object The object to query.
 * @param {Array} props The property names to get values for.
 * @returns {Object} Returns the array of property values.
 */
function baseValues(object, props) {
  return arrayMap(props, function(key) {
    return object[key];
  });
}

module.exports = baseValues;


/***/ }),

/***/ "./node_modules/lodash/_cacheHas.js":
/*!******************************************!*\
  !*** ./node_modules/lodash/_cacheHas.js ***!
  \******************************************/
/*! no static exports found */
/***/ (function(module, exports) {

/**
 * Checks if a `cache` value for `key` exists.
 *
 * @private
 * @param {Object} cache The cache to query.
 * @param {string} key The key of the entry to check.
 * @returns {boolean} Returns `true` if an entry for `key` exists, else `false`.
 */
function cacheHas(cache, key) {
  return cache.has(key);
}

module.exports = cacheHas;


/***/ }),

/***/ "./node_modules/lodash/_castSlice.js":
/*!*******************************************!*\
  !*** ./node_modules/lodash/_castSlice.js ***!
  \*******************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var baseSlice = __webpack_require__(/*! ./_baseSlice */ "./node_modules/lodash/_baseSlice.js");

/**
 * Casts `array` to a slice if it's needed.
 *
 * @private
 * @param {Array} array The array to inspect.
 * @param {number} start The start position.
 * @param {number} [end=array.length] The end position.
 * @returns {Array} Returns the cast slice.
 */
function castSlice(array, start, end) {
  var length = array.length;
  end = end === undefined ? length : end;
  return (!start && end >= length) ? array : baseSlice(array, start, end);
}

module.exports = castSlice;


/***/ }),

/***/ "./node_modules/lodash/_charsEndIndex.js":
/*!***********************************************!*\
  !*** ./node_modules/lodash/_charsEndIndex.js ***!
  \***********************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var baseIndexOf = __webpack_require__(/*! ./_baseIndexOf */ "./node_modules/lodash/_baseIndexOf.js");

/**
 * Used by `_.trim` and `_.trimEnd` to get the index of the last string symbol
 * that is not found in the character symbols.
 *
 * @private
 * @param {Array} strSymbols The string symbols to inspect.
 * @param {Array} chrSymbols The character symbols to find.
 * @returns {number} Returns the index of the last unmatched string symbol.
 */
function charsEndIndex(strSymbols, chrSymbols) {
  var index = strSymbols.length;

  while (index-- && baseIndexOf(chrSymbols, strSymbols[index], 0) > -1) {}
  return index;
}

module.exports = charsEndIndex;


/***/ }),

/***/ "./node_modules/lodash/_charsStartIndex.js":
/*!*************************************************!*\
  !*** ./node_modules/lodash/_charsStartIndex.js ***!
  \*************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var baseIndexOf = __webpack_require__(/*! ./_baseIndexOf */ "./node_modules/lodash/_baseIndexOf.js");

/**
 * Used by `_.trim` and `_.trimStart` to get the index of the first string symbol
 * that is not found in the character symbols.
 *
 * @private
 * @param {Array} strSymbols The string symbols to inspect.
 * @param {Array} chrSymbols The character symbols to find.
 * @returns {number} Returns the index of the first unmatched string symbol.
 */
function charsStartIndex(strSymbols, chrSymbols) {
  var index = -1,
      length = strSymbols.length;

  while (++index < length && baseIndexOf(chrSymbols, strSymbols[index], 0) > -1) {}
  return index;
}

module.exports = charsStartIndex;


/***/ }),

/***/ "./node_modules/lodash/_cloneArrayBuffer.js":
/*!**************************************************!*\
  !*** ./node_modules/lodash/_cloneArrayBuffer.js ***!
  \**************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var Uint8Array = __webpack_require__(/*! ./_Uint8Array */ "./node_modules/lodash/_Uint8Array.js");

/**
 * Creates a clone of `arrayBuffer`.
 *
 * @private
 * @param {ArrayBuffer} arrayBuffer The array buffer to clone.
 * @returns {ArrayBuffer} Returns the cloned array buffer.
 */
function cloneArrayBuffer(arrayBuffer) {
  var result = new arrayBuffer.constructor(arrayBuffer.byteLength);
  new Uint8Array(result).set(new Uint8Array(arrayBuffer));
  return result;
}

module.exports = cloneArrayBuffer;


/***/ }),

/***/ "./node_modules/lodash/_cloneBuffer.js":
/*!*********************************************!*\
  !*** ./node_modules/lodash/_cloneBuffer.js ***!
  \*********************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

/* WEBPACK VAR INJECTION */(function(module) {var root = __webpack_require__(/*! ./_root */ "./node_modules/lodash/_root.js");

/** Detect free variable `exports`. */
var freeExports =  true && exports && !exports.nodeType && exports;

/** Detect free variable `module`. */
var freeModule = freeExports && typeof module == 'object' && module && !module.nodeType && module;

/** Detect the popular CommonJS extension `module.exports`. */
var moduleExports = freeModule && freeModule.exports === freeExports;

/** Built-in value references. */
var Buffer = moduleExports ? root.Buffer : undefined,
    allocUnsafe = Buffer ? Buffer.allocUnsafe : undefined;

/**
 * Creates a clone of  `buffer`.
 *
 * @private
 * @param {Buffer} buffer The buffer to clone.
 * @param {boolean} [isDeep] Specify a deep clone.
 * @returns {Buffer} Returns the cloned buffer.
 */
function cloneBuffer(buffer, isDeep) {
  if (isDeep) {
    return buffer.slice();
  }
  var length = buffer.length,
      result = allocUnsafe ? allocUnsafe(length) : new buffer.constructor(length);

  buffer.copy(result);
  return result;
}

module.exports = cloneBuffer;

/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../webpack/buildin/module.js */ "./node_modules/webpack/buildin/module.js")(module)))

/***/ }),

/***/ "./node_modules/lodash/_cloneDataView.js":
/*!***********************************************!*\
  !*** ./node_modules/lodash/_cloneDataView.js ***!
  \***********************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var cloneArrayBuffer = __webpack_require__(/*! ./_cloneArrayBuffer */ "./node_modules/lodash/_cloneArrayBuffer.js");

/**
 * Creates a clone of `dataView`.
 *
 * @private
 * @param {Object} dataView The data view to clone.
 * @param {boolean} [isDeep] Specify a deep clone.
 * @returns {Object} Returns the cloned data view.
 */
function cloneDataView(dataView, isDeep) {
  var buffer = isDeep ? cloneArrayBuffer(dataView.buffer) : dataView.buffer;
  return new dataView.constructor(buffer, dataView.byteOffset, dataView.byteLength);
}

module.exports = cloneDataView;


/***/ }),

/***/ "./node_modules/lodash/_cloneRegExp.js":
/*!*********************************************!*\
  !*** ./node_modules/lodash/_cloneRegExp.js ***!
  \*********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

/** Used to match `RegExp` flags from their coerced string values. */
var reFlags = /\w*$/;

/**
 * Creates a clone of `regexp`.
 *
 * @private
 * @param {Object} regexp The regexp to clone.
 * @returns {Object} Returns the cloned regexp.
 */
function cloneRegExp(regexp) {
  var result = new regexp.constructor(regexp.source, reFlags.exec(regexp));
  result.lastIndex = regexp.lastIndex;
  return result;
}

module.exports = cloneRegExp;


/***/ }),

/***/ "./node_modules/lodash/_cloneSymbol.js":
/*!*********************************************!*\
  !*** ./node_modules/lodash/_cloneSymbol.js ***!
  \*********************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var Symbol = __webpack_require__(/*! ./_Symbol */ "./node_modules/lodash/_Symbol.js");

/** Used to convert symbols to primitives and strings. */
var symbolProto = Symbol ? Symbol.prototype : undefined,
    symbolValueOf = symbolProto ? symbolProto.valueOf : undefined;

/**
 * Creates a clone of the `symbol` object.
 *
 * @private
 * @param {Object} symbol The symbol object to clone.
 * @returns {Object} Returns the cloned symbol object.
 */
function cloneSymbol(symbol) {
  return symbolValueOf ? Object(symbolValueOf.call(symbol)) : {};
}

module.exports = cloneSymbol;


/***/ }),

/***/ "./node_modules/lodash/_cloneTypedArray.js":
/*!*************************************************!*\
  !*** ./node_modules/lodash/_cloneTypedArray.js ***!
  \*************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var cloneArrayBuffer = __webpack_require__(/*! ./_cloneArrayBuffer */ "./node_modules/lodash/_cloneArrayBuffer.js");

/**
 * Creates a clone of `typedArray`.
 *
 * @private
 * @param {Object} typedArray The typed array to clone.
 * @param {boolean} [isDeep] Specify a deep clone.
 * @returns {Object} Returns the cloned typed array.
 */
function cloneTypedArray(typedArray, isDeep) {
  var buffer = isDeep ? cloneArrayBuffer(typedArray.buffer) : typedArray.buffer;
  return new typedArray.constructor(buffer, typedArray.byteOffset, typedArray.length);
}

module.exports = cloneTypedArray;


/***/ }),

/***/ "./node_modules/lodash/_copyArray.js":
/*!*******************************************!*\
  !*** ./node_modules/lodash/_copyArray.js ***!
  \*******************************************/
/*! no static exports found */
/***/ (function(module, exports) {

/**
 * Copies the values of `source` to `array`.
 *
 * @private
 * @param {Array} source The array to copy values from.
 * @param {Array} [array=[]] The array to copy values to.
 * @returns {Array} Returns `array`.
 */
function copyArray(source, array) {
  var index = -1,
      length = source.length;

  array || (array = Array(length));
  while (++index < length) {
    array[index] = source[index];
  }
  return array;
}

module.exports = copyArray;


/***/ }),

/***/ "./node_modules/lodash/_copyObject.js":
/*!********************************************!*\
  !*** ./node_modules/lodash/_copyObject.js ***!
  \********************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var assignValue = __webpack_require__(/*! ./_assignValue */ "./node_modules/lodash/_assignValue.js"),
    baseAssignValue = __webpack_require__(/*! ./_baseAssignValue */ "./node_modules/lodash/_baseAssignValue.js");

/**
 * Copies properties of `source` to `object`.
 *
 * @private
 * @param {Object} source The object to copy properties from.
 * @param {Array} props The property identifiers to copy.
 * @param {Object} [object={}] The object to copy properties to.
 * @param {Function} [customizer] The function to customize copied values.
 * @returns {Object} Returns `object`.
 */
function copyObject(source, props, object, customizer) {
  var isNew = !object;
  object || (object = {});

  var index = -1,
      length = props.length;

  while (++index < length) {
    var key = props[index];

    var newValue = customizer
      ? customizer(object[key], source[key], key, object, source)
      : undefined;

    if (newValue === undefined) {
      newValue = source[key];
    }
    if (isNew) {
      baseAssignValue(object, key, newValue);
    } else {
      assignValue(object, key, newValue);
    }
  }
  return object;
}

module.exports = copyObject;


/***/ }),

/***/ "./node_modules/lodash/_copySymbols.js":
/*!*********************************************!*\
  !*** ./node_modules/lodash/_copySymbols.js ***!
  \*********************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var copyObject = __webpack_require__(/*! ./_copyObject */ "./node_modules/lodash/_copyObject.js"),
    getSymbols = __webpack_require__(/*! ./_getSymbols */ "./node_modules/lodash/_getSymbols.js");

/**
 * Copies own symbols of `source` to `object`.
 *
 * @private
 * @param {Object} source The object to copy symbols from.
 * @param {Object} [object={}] The object to copy symbols to.
 * @returns {Object} Returns `object`.
 */
function copySymbols(source, object) {
  return copyObject(source, getSymbols(source), object);
}

module.exports = copySymbols;


/***/ }),

/***/ "./node_modules/lodash/_copySymbolsIn.js":
/*!***********************************************!*\
  !*** ./node_modules/lodash/_copySymbolsIn.js ***!
  \***********************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var copyObject = __webpack_require__(/*! ./_copyObject */ "./node_modules/lodash/_copyObject.js"),
    getSymbolsIn = __webpack_require__(/*! ./_getSymbolsIn */ "./node_modules/lodash/_getSymbolsIn.js");

/**
 * Copies own and inherited symbols of `source` to `object`.
 *
 * @private
 * @param {Object} source The object to copy symbols from.
 * @param {Object} [object={}] The object to copy symbols to.
 * @returns {Object} Returns `object`.
 */
function copySymbolsIn(source, object) {
  return copyObject(source, getSymbolsIn(source), object);
}

module.exports = copySymbolsIn;


/***/ }),

/***/ "./node_modules/lodash/_coreJsData.js":
/*!********************************************!*\
  !*** ./node_modules/lodash/_coreJsData.js ***!
  \********************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var root = __webpack_require__(/*! ./_root */ "./node_modules/lodash/_root.js");

/** Used to detect overreaching core-js shims. */
var coreJsData = root['__core-js_shared__'];

module.exports = coreJsData;


/***/ }),

/***/ "./node_modules/lodash/_createAssigner.js":
/*!************************************************!*\
  !*** ./node_modules/lodash/_createAssigner.js ***!
  \************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var baseRest = __webpack_require__(/*! ./_baseRest */ "./node_modules/lodash/_baseRest.js"),
    isIterateeCall = __webpack_require__(/*! ./_isIterateeCall */ "./node_modules/lodash/_isIterateeCall.js");

/**
 * Creates a function like `_.assign`.
 *
 * @private
 * @param {Function} assigner The function to assign values.
 * @returns {Function} Returns the new assigner function.
 */
function createAssigner(assigner) {
  return baseRest(function(object, sources) {
    var index = -1,
        length = sources.length,
        customizer = length > 1 ? sources[length - 1] : undefined,
        guard = length > 2 ? sources[2] : undefined;

    customizer = (assigner.length > 3 && typeof customizer == 'function')
      ? (length--, customizer)
      : undefined;

    if (guard && isIterateeCall(sources[0], sources[1], guard)) {
      customizer = length < 3 ? undefined : customizer;
      length = 1;
    }
    object = Object(object);
    while (++index < length) {
      var source = sources[index];
      if (source) {
        assigner(object, source, index, customizer);
      }
    }
    return object;
  });
}

module.exports = createAssigner;


/***/ }),

/***/ "./node_modules/lodash/_createBaseFor.js":
/*!***********************************************!*\
  !*** ./node_modules/lodash/_createBaseFor.js ***!
  \***********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

/**
 * Creates a base function for methods like `_.forIn` and `_.forOwn`.
 *
 * @private
 * @param {boolean} [fromRight] Specify iterating from right to left.
 * @returns {Function} Returns the new base function.
 */
function createBaseFor(fromRight) {
  return function(object, iteratee, keysFunc) {
    var index = -1,
        iterable = Object(object),
        props = keysFunc(object),
        length = props.length;

    while (length--) {
      var key = props[fromRight ? length : ++index];
      if (iteratee(iterable[key], key, iterable) === false) {
        break;
      }
    }
    return object;
  };
}

module.exports = createBaseFor;


/***/ }),

/***/ "./node_modules/lodash/_defineProperty.js":
/*!************************************************!*\
  !*** ./node_modules/lodash/_defineProperty.js ***!
  \************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var getNative = __webpack_require__(/*! ./_getNative */ "./node_modules/lodash/_getNative.js");

var defineProperty = (function() {
  try {
    var func = getNative(Object, 'defineProperty');
    func({}, '', {});
    return func;
  } catch (e) {}
}());

module.exports = defineProperty;


/***/ }),

/***/ "./node_modules/lodash/_freeGlobal.js":
/*!********************************************!*\
  !*** ./node_modules/lodash/_freeGlobal.js ***!
  \********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

/** Detect free variable `global` from Node.js. */
var freeGlobal = typeof global == 'object' && global && global.Object === Object && global;

module.exports = freeGlobal;


/***/ }),

/***/ "./node_modules/lodash/_getAllKeys.js":
/*!********************************************!*\
  !*** ./node_modules/lodash/_getAllKeys.js ***!
  \********************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var baseGetAllKeys = __webpack_require__(/*! ./_baseGetAllKeys */ "./node_modules/lodash/_baseGetAllKeys.js"),
    getSymbols = __webpack_require__(/*! ./_getSymbols */ "./node_modules/lodash/_getSymbols.js"),
    keys = __webpack_require__(/*! ./keys */ "./node_modules/lodash/keys.js");

/**
 * Creates an array of own enumerable property names and symbols of `object`.
 *
 * @private
 * @param {Object} object The object to query.
 * @returns {Array} Returns the array of property names and symbols.
 */
function getAllKeys(object) {
  return baseGetAllKeys(object, keys, getSymbols);
}

module.exports = getAllKeys;


/***/ }),

/***/ "./node_modules/lodash/_getAllKeysIn.js":
/*!**********************************************!*\
  !*** ./node_modules/lodash/_getAllKeysIn.js ***!
  \**********************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var baseGetAllKeys = __webpack_require__(/*! ./_baseGetAllKeys */ "./node_modules/lodash/_baseGetAllKeys.js"),
    getSymbolsIn = __webpack_require__(/*! ./_getSymbolsIn */ "./node_modules/lodash/_getSymbolsIn.js"),
    keysIn = __webpack_require__(/*! ./keysIn */ "./node_modules/lodash/keysIn.js");

/**
 * Creates an array of own and inherited enumerable property names and
 * symbols of `object`.
 *
 * @private
 * @param {Object} object The object to query.
 * @returns {Array} Returns the array of property names and symbols.
 */
function getAllKeysIn(object) {
  return baseGetAllKeys(object, keysIn, getSymbolsIn);
}

module.exports = getAllKeysIn;


/***/ }),

/***/ "./node_modules/lodash/_getMapData.js":
/*!********************************************!*\
  !*** ./node_modules/lodash/_getMapData.js ***!
  \********************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var isKeyable = __webpack_require__(/*! ./_isKeyable */ "./node_modules/lodash/_isKeyable.js");

/**
 * Gets the data for `map`.
 *
 * @private
 * @param {Object} map The map to query.
 * @param {string} key The reference key.
 * @returns {*} Returns the map data.
 */
function getMapData(map, key) {
  var data = map.__data__;
  return isKeyable(key)
    ? data[typeof key == 'string' ? 'string' : 'hash']
    : data.map;
}

module.exports = getMapData;


/***/ }),

/***/ "./node_modules/lodash/_getNative.js":
/*!*******************************************!*\
  !*** ./node_modules/lodash/_getNative.js ***!
  \*******************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var baseIsNative = __webpack_require__(/*! ./_baseIsNative */ "./node_modules/lodash/_baseIsNative.js"),
    getValue = __webpack_require__(/*! ./_getValue */ "./node_modules/lodash/_getValue.js");

/**
 * Gets the native function at `key` of `object`.
 *
 * @private
 * @param {Object} object The object to query.
 * @param {string} key The key of the method to get.
 * @returns {*} Returns the function if it's native, else `undefined`.
 */
function getNative(object, key) {
  var value = getValue(object, key);
  return baseIsNative(value) ? value : undefined;
}

module.exports = getNative;


/***/ }),

/***/ "./node_modules/lodash/_getPrototype.js":
/*!**********************************************!*\
  !*** ./node_modules/lodash/_getPrototype.js ***!
  \**********************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var overArg = __webpack_require__(/*! ./_overArg */ "./node_modules/lodash/_overArg.js");

/** Built-in value references. */
var getPrototype = overArg(Object.getPrototypeOf, Object);

module.exports = getPrototype;


/***/ }),

/***/ "./node_modules/lodash/_getRawTag.js":
/*!*******************************************!*\
  !*** ./node_modules/lodash/_getRawTag.js ***!
  \*******************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var Symbol = __webpack_require__(/*! ./_Symbol */ "./node_modules/lodash/_Symbol.js");

/** Used for built-in method references. */
var objectProto = Object.prototype;

/** Used to check objects for own properties. */
var hasOwnProperty = objectProto.hasOwnProperty;

/**
 * Used to resolve the
 * [`toStringTag`](http://ecma-international.org/ecma-262/7.0/#sec-object.prototype.tostring)
 * of values.
 */
var nativeObjectToString = objectProto.toString;

/** Built-in value references. */
var symToStringTag = Symbol ? Symbol.toStringTag : undefined;

/**
 * A specialized version of `baseGetTag` which ignores `Symbol.toStringTag` values.
 *
 * @private
 * @param {*} value The value to query.
 * @returns {string} Returns the raw `toStringTag`.
 */
function getRawTag(value) {
  var isOwn = hasOwnProperty.call(value, symToStringTag),
      tag = value[symToStringTag];

  try {
    value[symToStringTag] = undefined;
    var unmasked = true;
  } catch (e) {}

  var result = nativeObjectToString.call(value);
  if (unmasked) {
    if (isOwn) {
      value[symToStringTag] = tag;
    } else {
      delete value[symToStringTag];
    }
  }
  return result;
}

module.exports = getRawTag;


/***/ }),

/***/ "./node_modules/lodash/_getSymbols.js":
/*!********************************************!*\
  !*** ./node_modules/lodash/_getSymbols.js ***!
  \********************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var arrayFilter = __webpack_require__(/*! ./_arrayFilter */ "./node_modules/lodash/_arrayFilter.js"),
    stubArray = __webpack_require__(/*! ./stubArray */ "./node_modules/lodash/stubArray.js");

/** Used for built-in method references. */
var objectProto = Object.prototype;

/** Built-in value references. */
var propertyIsEnumerable = objectProto.propertyIsEnumerable;

/* Built-in method references for those with the same name as other `lodash` methods. */
var nativeGetSymbols = Object.getOwnPropertySymbols;

/**
 * Creates an array of the own enumerable symbols of `object`.
 *
 * @private
 * @param {Object} object The object to query.
 * @returns {Array} Returns the array of symbols.
 */
var getSymbols = !nativeGetSymbols ? stubArray : function(object) {
  if (object == null) {
    return [];
  }
  object = Object(object);
  return arrayFilter(nativeGetSymbols(object), function(symbol) {
    return propertyIsEnumerable.call(object, symbol);
  });
};

module.exports = getSymbols;


/***/ }),

/***/ "./node_modules/lodash/_getSymbolsIn.js":
/*!**********************************************!*\
  !*** ./node_modules/lodash/_getSymbolsIn.js ***!
  \**********************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var arrayPush = __webpack_require__(/*! ./_arrayPush */ "./node_modules/lodash/_arrayPush.js"),
    getPrototype = __webpack_require__(/*! ./_getPrototype */ "./node_modules/lodash/_getPrototype.js"),
    getSymbols = __webpack_require__(/*! ./_getSymbols */ "./node_modules/lodash/_getSymbols.js"),
    stubArray = __webpack_require__(/*! ./stubArray */ "./node_modules/lodash/stubArray.js");

/* Built-in method references for those with the same name as other `lodash` methods. */
var nativeGetSymbols = Object.getOwnPropertySymbols;

/**
 * Creates an array of the own and inherited enumerable symbols of `object`.
 *
 * @private
 * @param {Object} object The object to query.
 * @returns {Array} Returns the array of symbols.
 */
var getSymbolsIn = !nativeGetSymbols ? stubArray : function(object) {
  var result = [];
  while (object) {
    arrayPush(result, getSymbols(object));
    object = getPrototype(object);
  }
  return result;
};

module.exports = getSymbolsIn;


/***/ }),

/***/ "./node_modules/lodash/_getTag.js":
/*!****************************************!*\
  !*** ./node_modules/lodash/_getTag.js ***!
  \****************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var DataView = __webpack_require__(/*! ./_DataView */ "./node_modules/lodash/_DataView.js"),
    Map = __webpack_require__(/*! ./_Map */ "./node_modules/lodash/_Map.js"),
    Promise = __webpack_require__(/*! ./_Promise */ "./node_modules/lodash/_Promise.js"),
    Set = __webpack_require__(/*! ./_Set */ "./node_modules/lodash/_Set.js"),
    WeakMap = __webpack_require__(/*! ./_WeakMap */ "./node_modules/lodash/_WeakMap.js"),
    baseGetTag = __webpack_require__(/*! ./_baseGetTag */ "./node_modules/lodash/_baseGetTag.js"),
    toSource = __webpack_require__(/*! ./_toSource */ "./node_modules/lodash/_toSource.js");

/** `Object#toString` result references. */
var mapTag = '[object Map]',
    objectTag = '[object Object]',
    promiseTag = '[object Promise]',
    setTag = '[object Set]',
    weakMapTag = '[object WeakMap]';

var dataViewTag = '[object DataView]';

/** Used to detect maps, sets, and weakmaps. */
var dataViewCtorString = toSource(DataView),
    mapCtorString = toSource(Map),
    promiseCtorString = toSource(Promise),
    setCtorString = toSource(Set),
    weakMapCtorString = toSource(WeakMap);

/**
 * Gets the `toStringTag` of `value`.
 *
 * @private
 * @param {*} value The value to query.
 * @returns {string} Returns the `toStringTag`.
 */
var getTag = baseGetTag;

// Fallback for data views, maps, sets, and weak maps in IE 11 and promises in Node.js < 6.
if ((DataView && getTag(new DataView(new ArrayBuffer(1))) != dataViewTag) ||
    (Map && getTag(new Map) != mapTag) ||
    (Promise && getTag(Promise.resolve()) != promiseTag) ||
    (Set && getTag(new Set) != setTag) ||
    (WeakMap && getTag(new WeakMap) != weakMapTag)) {
  getTag = function(value) {
    var result = baseGetTag(value),
        Ctor = result == objectTag ? value.constructor : undefined,
        ctorString = Ctor ? toSource(Ctor) : '';

    if (ctorString) {
      switch (ctorString) {
        case dataViewCtorString: return dataViewTag;
        case mapCtorString: return mapTag;
        case promiseCtorString: return promiseTag;
        case setCtorString: return setTag;
        case weakMapCtorString: return weakMapTag;
      }
    }
    return result;
  };
}

module.exports = getTag;


/***/ }),

/***/ "./node_modules/lodash/_getValue.js":
/*!******************************************!*\
  !*** ./node_modules/lodash/_getValue.js ***!
  \******************************************/
/*! no static exports found */
/***/ (function(module, exports) {

/**
 * Gets the value at `key` of `object`.
 *
 * @private
 * @param {Object} [object] The object to query.
 * @param {string} key The key of the property to get.
 * @returns {*} Returns the property value.
 */
function getValue(object, key) {
  return object == null ? undefined : object[key];
}

module.exports = getValue;


/***/ }),

/***/ "./node_modules/lodash/_hasUnicode.js":
/*!********************************************!*\
  !*** ./node_modules/lodash/_hasUnicode.js ***!
  \********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

/** Used to compose unicode character classes. */
var rsAstralRange = '\\ud800-\\udfff',
    rsComboMarksRange = '\\u0300-\\u036f',
    reComboHalfMarksRange = '\\ufe20-\\ufe2f',
    rsComboSymbolsRange = '\\u20d0-\\u20ff',
    rsComboRange = rsComboMarksRange + reComboHalfMarksRange + rsComboSymbolsRange,
    rsVarRange = '\\ufe0e\\ufe0f';

/** Used to compose unicode capture groups. */
var rsZWJ = '\\u200d';

/** Used to detect strings with [zero-width joiners or code points from the astral planes](http://eev.ee/blog/2015/09/12/dark-corners-of-unicode/). */
var reHasUnicode = RegExp('[' + rsZWJ + rsAstralRange  + rsComboRange + rsVarRange + ']');

/**
 * Checks if `string` contains Unicode symbols.
 *
 * @private
 * @param {string} string The string to inspect.
 * @returns {boolean} Returns `true` if a symbol is found, else `false`.
 */
function hasUnicode(string) {
  return reHasUnicode.test(string);
}

module.exports = hasUnicode;


/***/ }),

/***/ "./node_modules/lodash/_hashClear.js":
/*!*******************************************!*\
  !*** ./node_modules/lodash/_hashClear.js ***!
  \*******************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var nativeCreate = __webpack_require__(/*! ./_nativeCreate */ "./node_modules/lodash/_nativeCreate.js");

/**
 * Removes all key-value entries from the hash.
 *
 * @private
 * @name clear
 * @memberOf Hash
 */
function hashClear() {
  this.__data__ = nativeCreate ? nativeCreate(null) : {};
  this.size = 0;
}

module.exports = hashClear;


/***/ }),

/***/ "./node_modules/lodash/_hashDelete.js":
/*!********************************************!*\
  !*** ./node_modules/lodash/_hashDelete.js ***!
  \********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

/**
 * Removes `key` and its value from the hash.
 *
 * @private
 * @name delete
 * @memberOf Hash
 * @param {Object} hash The hash to modify.
 * @param {string} key The key of the value to remove.
 * @returns {boolean} Returns `true` if the entry was removed, else `false`.
 */
function hashDelete(key) {
  var result = this.has(key) && delete this.__data__[key];
  this.size -= result ? 1 : 0;
  return result;
}

module.exports = hashDelete;


/***/ }),

/***/ "./node_modules/lodash/_hashGet.js":
/*!*****************************************!*\
  !*** ./node_modules/lodash/_hashGet.js ***!
  \*****************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var nativeCreate = __webpack_require__(/*! ./_nativeCreate */ "./node_modules/lodash/_nativeCreate.js");

/** Used to stand-in for `undefined` hash values. */
var HASH_UNDEFINED = '__lodash_hash_undefined__';

/** Used for built-in method references. */
var objectProto = Object.prototype;

/** Used to check objects for own properties. */
var hasOwnProperty = objectProto.hasOwnProperty;

/**
 * Gets the hash value for `key`.
 *
 * @private
 * @name get
 * @memberOf Hash
 * @param {string} key The key of the value to get.
 * @returns {*} Returns the entry value.
 */
function hashGet(key) {
  var data = this.__data__;
  if (nativeCreate) {
    var result = data[key];
    return result === HASH_UNDEFINED ? undefined : result;
  }
  return hasOwnProperty.call(data, key) ? data[key] : undefined;
}

module.exports = hashGet;


/***/ }),

/***/ "./node_modules/lodash/_hashHas.js":
/*!*****************************************!*\
  !*** ./node_modules/lodash/_hashHas.js ***!
  \*****************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var nativeCreate = __webpack_require__(/*! ./_nativeCreate */ "./node_modules/lodash/_nativeCreate.js");

/** Used for built-in method references. */
var objectProto = Object.prototype;

/** Used to check objects for own properties. */
var hasOwnProperty = objectProto.hasOwnProperty;

/**
 * Checks if a hash value for `key` exists.
 *
 * @private
 * @name has
 * @memberOf Hash
 * @param {string} key The key of the entry to check.
 * @returns {boolean} Returns `true` if an entry for `key` exists, else `false`.
 */
function hashHas(key) {
  var data = this.__data__;
  return nativeCreate ? (data[key] !== undefined) : hasOwnProperty.call(data, key);
}

module.exports = hashHas;


/***/ }),

/***/ "./node_modules/lodash/_hashSet.js":
/*!*****************************************!*\
  !*** ./node_modules/lodash/_hashSet.js ***!
  \*****************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var nativeCreate = __webpack_require__(/*! ./_nativeCreate */ "./node_modules/lodash/_nativeCreate.js");

/** Used to stand-in for `undefined` hash values. */
var HASH_UNDEFINED = '__lodash_hash_undefined__';

/**
 * Sets the hash `key` to `value`.
 *
 * @private
 * @name set
 * @memberOf Hash
 * @param {string} key The key of the value to set.
 * @param {*} value The value to set.
 * @returns {Object} Returns the hash instance.
 */
function hashSet(key, value) {
  var data = this.__data__;
  this.size += this.has(key) ? 0 : 1;
  data[key] = (nativeCreate && value === undefined) ? HASH_UNDEFINED : value;
  return this;
}

module.exports = hashSet;


/***/ }),

/***/ "./node_modules/lodash/_initCloneArray.js":
/*!************************************************!*\
  !*** ./node_modules/lodash/_initCloneArray.js ***!
  \************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

/** Used for built-in method references. */
var objectProto = Object.prototype;

/** Used to check objects for own properties. */
var hasOwnProperty = objectProto.hasOwnProperty;

/**
 * Initializes an array clone.
 *
 * @private
 * @param {Array} array The array to clone.
 * @returns {Array} Returns the initialized clone.
 */
function initCloneArray(array) {
  var length = array.length,
      result = new array.constructor(length);

  // Add properties assigned by `RegExp#exec`.
  if (length && typeof array[0] == 'string' && hasOwnProperty.call(array, 'index')) {
    result.index = array.index;
    result.input = array.input;
  }
  return result;
}

module.exports = initCloneArray;


/***/ }),

/***/ "./node_modules/lodash/_initCloneByTag.js":
/*!************************************************!*\
  !*** ./node_modules/lodash/_initCloneByTag.js ***!
  \************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var cloneArrayBuffer = __webpack_require__(/*! ./_cloneArrayBuffer */ "./node_modules/lodash/_cloneArrayBuffer.js"),
    cloneDataView = __webpack_require__(/*! ./_cloneDataView */ "./node_modules/lodash/_cloneDataView.js"),
    cloneRegExp = __webpack_require__(/*! ./_cloneRegExp */ "./node_modules/lodash/_cloneRegExp.js"),
    cloneSymbol = __webpack_require__(/*! ./_cloneSymbol */ "./node_modules/lodash/_cloneSymbol.js"),
    cloneTypedArray = __webpack_require__(/*! ./_cloneTypedArray */ "./node_modules/lodash/_cloneTypedArray.js");

/** `Object#toString` result references. */
var boolTag = '[object Boolean]',
    dateTag = '[object Date]',
    mapTag = '[object Map]',
    numberTag = '[object Number]',
    regexpTag = '[object RegExp]',
    setTag = '[object Set]',
    stringTag = '[object String]',
    symbolTag = '[object Symbol]';

var arrayBufferTag = '[object ArrayBuffer]',
    dataViewTag = '[object DataView]',
    float32Tag = '[object Float32Array]',
    float64Tag = '[object Float64Array]',
    int8Tag = '[object Int8Array]',
    int16Tag = '[object Int16Array]',
    int32Tag = '[object Int32Array]',
    uint8Tag = '[object Uint8Array]',
    uint8ClampedTag = '[object Uint8ClampedArray]',
    uint16Tag = '[object Uint16Array]',
    uint32Tag = '[object Uint32Array]';

/**
 * Initializes an object clone based on its `toStringTag`.
 *
 * **Note:** This function only supports cloning values with tags of
 * `Boolean`, `Date`, `Error`, `Map`, `Number`, `RegExp`, `Set`, or `String`.
 *
 * @private
 * @param {Object} object The object to clone.
 * @param {string} tag The `toStringTag` of the object to clone.
 * @param {boolean} [isDeep] Specify a deep clone.
 * @returns {Object} Returns the initialized clone.
 */
function initCloneByTag(object, tag, isDeep) {
  var Ctor = object.constructor;
  switch (tag) {
    case arrayBufferTag:
      return cloneArrayBuffer(object);

    case boolTag:
    case dateTag:
      return new Ctor(+object);

    case dataViewTag:
      return cloneDataView(object, isDeep);

    case float32Tag: case float64Tag:
    case int8Tag: case int16Tag: case int32Tag:
    case uint8Tag: case uint8ClampedTag: case uint16Tag: case uint32Tag:
      return cloneTypedArray(object, isDeep);

    case mapTag:
      return new Ctor;

    case numberTag:
    case stringTag:
      return new Ctor(object);

    case regexpTag:
      return cloneRegExp(object);

    case setTag:
      return new Ctor;

    case symbolTag:
      return cloneSymbol(object);
  }
}

module.exports = initCloneByTag;


/***/ }),

/***/ "./node_modules/lodash/_initCloneObject.js":
/*!*************************************************!*\
  !*** ./node_modules/lodash/_initCloneObject.js ***!
  \*************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var baseCreate = __webpack_require__(/*! ./_baseCreate */ "./node_modules/lodash/_baseCreate.js"),
    getPrototype = __webpack_require__(/*! ./_getPrototype */ "./node_modules/lodash/_getPrototype.js"),
    isPrototype = __webpack_require__(/*! ./_isPrototype */ "./node_modules/lodash/_isPrototype.js");

/**
 * Initializes an object clone.
 *
 * @private
 * @param {Object} object The object to clone.
 * @returns {Object} Returns the initialized clone.
 */
function initCloneObject(object) {
  return (typeof object.constructor == 'function' && !isPrototype(object))
    ? baseCreate(getPrototype(object))
    : {};
}

module.exports = initCloneObject;


/***/ }),

/***/ "./node_modules/lodash/_isFlattenable.js":
/*!***********************************************!*\
  !*** ./node_modules/lodash/_isFlattenable.js ***!
  \***********************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var Symbol = __webpack_require__(/*! ./_Symbol */ "./node_modules/lodash/_Symbol.js"),
    isArguments = __webpack_require__(/*! ./isArguments */ "./node_modules/lodash/isArguments.js"),
    isArray = __webpack_require__(/*! ./isArray */ "./node_modules/lodash/isArray.js");

/** Built-in value references. */
var spreadableSymbol = Symbol ? Symbol.isConcatSpreadable : undefined;

/**
 * Checks if `value` is a flattenable `arguments` object or array.
 *
 * @private
 * @param {*} value The value to check.
 * @returns {boolean} Returns `true` if `value` is flattenable, else `false`.
 */
function isFlattenable(value) {
  return isArray(value) || isArguments(value) ||
    !!(spreadableSymbol && value && value[spreadableSymbol]);
}

module.exports = isFlattenable;


/***/ }),

/***/ "./node_modules/lodash/_isIndex.js":
/*!*****************************************!*\
  !*** ./node_modules/lodash/_isIndex.js ***!
  \*****************************************/
/*! no static exports found */
/***/ (function(module, exports) {

/** Used as references for various `Number` constants. */
var MAX_SAFE_INTEGER = 9007199254740991;

/** Used to detect unsigned integer values. */
var reIsUint = /^(?:0|[1-9]\d*)$/;

/**
 * Checks if `value` is a valid array-like index.
 *
 * @private
 * @param {*} value The value to check.
 * @param {number} [length=MAX_SAFE_INTEGER] The upper bounds of a valid index.
 * @returns {boolean} Returns `true` if `value` is a valid index, else `false`.
 */
function isIndex(value, length) {
  var type = typeof value;
  length = length == null ? MAX_SAFE_INTEGER : length;

  return !!length &&
    (type == 'number' ||
      (type != 'symbol' && reIsUint.test(value))) &&
        (value > -1 && value % 1 == 0 && value < length);
}

module.exports = isIndex;


/***/ }),

/***/ "./node_modules/lodash/_isIterateeCall.js":
/*!************************************************!*\
  !*** ./node_modules/lodash/_isIterateeCall.js ***!
  \************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var eq = __webpack_require__(/*! ./eq */ "./node_modules/lodash/eq.js"),
    isArrayLike = __webpack_require__(/*! ./isArrayLike */ "./node_modules/lodash/isArrayLike.js"),
    isIndex = __webpack_require__(/*! ./_isIndex */ "./node_modules/lodash/_isIndex.js"),
    isObject = __webpack_require__(/*! ./isObject */ "./node_modules/lodash/isObject.js");

/**
 * Checks if the given arguments are from an iteratee call.
 *
 * @private
 * @param {*} value The potential iteratee value argument.
 * @param {*} index The potential iteratee index or key argument.
 * @param {*} object The potential iteratee object argument.
 * @returns {boolean} Returns `true` if the arguments are from an iteratee call,
 *  else `false`.
 */
function isIterateeCall(value, index, object) {
  if (!isObject(object)) {
    return false;
  }
  var type = typeof index;
  if (type == 'number'
        ? (isArrayLike(object) && isIndex(index, object.length))
        : (type == 'string' && index in object)
      ) {
    return eq(object[index], value);
  }
  return false;
}

module.exports = isIterateeCall;


/***/ }),

/***/ "./node_modules/lodash/_isKeyable.js":
/*!*******************************************!*\
  !*** ./node_modules/lodash/_isKeyable.js ***!
  \*******************************************/
/*! no static exports found */
/***/ (function(module, exports) {

/**
 * Checks if `value` is suitable for use as unique object key.
 *
 * @private
 * @param {*} value The value to check.
 * @returns {boolean} Returns `true` if `value` is suitable, else `false`.
 */
function isKeyable(value) {
  var type = typeof value;
  return (type == 'string' || type == 'number' || type == 'symbol' || type == 'boolean')
    ? (value !== '__proto__')
    : (value === null);
}

module.exports = isKeyable;


/***/ }),

/***/ "./node_modules/lodash/_isMasked.js":
/*!******************************************!*\
  !*** ./node_modules/lodash/_isMasked.js ***!
  \******************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var coreJsData = __webpack_require__(/*! ./_coreJsData */ "./node_modules/lodash/_coreJsData.js");

/** Used to detect methods masquerading as native. */
var maskSrcKey = (function() {
  var uid = /[^.]+$/.exec(coreJsData && coreJsData.keys && coreJsData.keys.IE_PROTO || '');
  return uid ? ('Symbol(src)_1.' + uid) : '';
}());

/**
 * Checks if `func` has its source masked.
 *
 * @private
 * @param {Function} func The function to check.
 * @returns {boolean} Returns `true` if `func` is masked, else `false`.
 */
function isMasked(func) {
  return !!maskSrcKey && (maskSrcKey in func);
}

module.exports = isMasked;


/***/ }),

/***/ "./node_modules/lodash/_isPrototype.js":
/*!*********************************************!*\
  !*** ./node_modules/lodash/_isPrototype.js ***!
  \*********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

/** Used for built-in method references. */
var objectProto = Object.prototype;

/**
 * Checks if `value` is likely a prototype object.
 *
 * @private
 * @param {*} value The value to check.
 * @returns {boolean} Returns `true` if `value` is a prototype, else `false`.
 */
function isPrototype(value) {
  var Ctor = value && value.constructor,
      proto = (typeof Ctor == 'function' && Ctor.prototype) || objectProto;

  return value === proto;
}

module.exports = isPrototype;


/***/ }),

/***/ "./node_modules/lodash/_listCacheClear.js":
/*!************************************************!*\
  !*** ./node_modules/lodash/_listCacheClear.js ***!
  \************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

/**
 * Removes all key-value entries from the list cache.
 *
 * @private
 * @name clear
 * @memberOf ListCache
 */
function listCacheClear() {
  this.__data__ = [];
  this.size = 0;
}

module.exports = listCacheClear;


/***/ }),

/***/ "./node_modules/lodash/_listCacheDelete.js":
/*!*************************************************!*\
  !*** ./node_modules/lodash/_listCacheDelete.js ***!
  \*************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var assocIndexOf = __webpack_require__(/*! ./_assocIndexOf */ "./node_modules/lodash/_assocIndexOf.js");

/** Used for built-in method references. */
var arrayProto = Array.prototype;

/** Built-in value references. */
var splice = arrayProto.splice;

/**
 * Removes `key` and its value from the list cache.
 *
 * @private
 * @name delete
 * @memberOf ListCache
 * @param {string} key The key of the value to remove.
 * @returns {boolean} Returns `true` if the entry was removed, else `false`.
 */
function listCacheDelete(key) {
  var data = this.__data__,
      index = assocIndexOf(data, key);

  if (index < 0) {
    return false;
  }
  var lastIndex = data.length - 1;
  if (index == lastIndex) {
    data.pop();
  } else {
    splice.call(data, index, 1);
  }
  --this.size;
  return true;
}

module.exports = listCacheDelete;


/***/ }),

/***/ "./node_modules/lodash/_listCacheGet.js":
/*!**********************************************!*\
  !*** ./node_modules/lodash/_listCacheGet.js ***!
  \**********************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var assocIndexOf = __webpack_require__(/*! ./_assocIndexOf */ "./node_modules/lodash/_assocIndexOf.js");

/**
 * Gets the list cache value for `key`.
 *
 * @private
 * @name get
 * @memberOf ListCache
 * @param {string} key The key of the value to get.
 * @returns {*} Returns the entry value.
 */
function listCacheGet(key) {
  var data = this.__data__,
      index = assocIndexOf(data, key);

  return index < 0 ? undefined : data[index][1];
}

module.exports = listCacheGet;


/***/ }),

/***/ "./node_modules/lodash/_listCacheHas.js":
/*!**********************************************!*\
  !*** ./node_modules/lodash/_listCacheHas.js ***!
  \**********************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var assocIndexOf = __webpack_require__(/*! ./_assocIndexOf */ "./node_modules/lodash/_assocIndexOf.js");

/**
 * Checks if a list cache value for `key` exists.
 *
 * @private
 * @name has
 * @memberOf ListCache
 * @param {string} key The key of the entry to check.
 * @returns {boolean} Returns `true` if an entry for `key` exists, else `false`.
 */
function listCacheHas(key) {
  return assocIndexOf(this.__data__, key) > -1;
}

module.exports = listCacheHas;


/***/ }),

/***/ "./node_modules/lodash/_listCacheSet.js":
/*!**********************************************!*\
  !*** ./node_modules/lodash/_listCacheSet.js ***!
  \**********************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var assocIndexOf = __webpack_require__(/*! ./_assocIndexOf */ "./node_modules/lodash/_assocIndexOf.js");

/**
 * Sets the list cache `key` to `value`.
 *
 * @private
 * @name set
 * @memberOf ListCache
 * @param {string} key The key of the value to set.
 * @param {*} value The value to set.
 * @returns {Object} Returns the list cache instance.
 */
function listCacheSet(key, value) {
  var data = this.__data__,
      index = assocIndexOf(data, key);

  if (index < 0) {
    ++this.size;
    data.push([key, value]);
  } else {
    data[index][1] = value;
  }
  return this;
}

module.exports = listCacheSet;


/***/ }),

/***/ "./node_modules/lodash/_mapCacheClear.js":
/*!***********************************************!*\
  !*** ./node_modules/lodash/_mapCacheClear.js ***!
  \***********************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var Hash = __webpack_require__(/*! ./_Hash */ "./node_modules/lodash/_Hash.js"),
    ListCache = __webpack_require__(/*! ./_ListCache */ "./node_modules/lodash/_ListCache.js"),
    Map = __webpack_require__(/*! ./_Map */ "./node_modules/lodash/_Map.js");

/**
 * Removes all key-value entries from the map.
 *
 * @private
 * @name clear
 * @memberOf MapCache
 */
function mapCacheClear() {
  this.size = 0;
  this.__data__ = {
    'hash': new Hash,
    'map': new (Map || ListCache),
    'string': new Hash
  };
}

module.exports = mapCacheClear;


/***/ }),

/***/ "./node_modules/lodash/_mapCacheDelete.js":
/*!************************************************!*\
  !*** ./node_modules/lodash/_mapCacheDelete.js ***!
  \************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var getMapData = __webpack_require__(/*! ./_getMapData */ "./node_modules/lodash/_getMapData.js");

/**
 * Removes `key` and its value from the map.
 *
 * @private
 * @name delete
 * @memberOf MapCache
 * @param {string} key The key of the value to remove.
 * @returns {boolean} Returns `true` if the entry was removed, else `false`.
 */
function mapCacheDelete(key) {
  var result = getMapData(this, key)['delete'](key);
  this.size -= result ? 1 : 0;
  return result;
}

module.exports = mapCacheDelete;


/***/ }),

/***/ "./node_modules/lodash/_mapCacheGet.js":
/*!*********************************************!*\
  !*** ./node_modules/lodash/_mapCacheGet.js ***!
  \*********************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var getMapData = __webpack_require__(/*! ./_getMapData */ "./node_modules/lodash/_getMapData.js");

/**
 * Gets the map value for `key`.
 *
 * @private
 * @name get
 * @memberOf MapCache
 * @param {string} key The key of the value to get.
 * @returns {*} Returns the entry value.
 */
function mapCacheGet(key) {
  return getMapData(this, key).get(key);
}

module.exports = mapCacheGet;


/***/ }),

/***/ "./node_modules/lodash/_mapCacheHas.js":
/*!*********************************************!*\
  !*** ./node_modules/lodash/_mapCacheHas.js ***!
  \*********************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var getMapData = __webpack_require__(/*! ./_getMapData */ "./node_modules/lodash/_getMapData.js");

/**
 * Checks if a map value for `key` exists.
 *
 * @private
 * @name has
 * @memberOf MapCache
 * @param {string} key The key of the entry to check.
 * @returns {boolean} Returns `true` if an entry for `key` exists, else `false`.
 */
function mapCacheHas(key) {
  return getMapData(this, key).has(key);
}

module.exports = mapCacheHas;


/***/ }),

/***/ "./node_modules/lodash/_mapCacheSet.js":
/*!*********************************************!*\
  !*** ./node_modules/lodash/_mapCacheSet.js ***!
  \*********************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var getMapData = __webpack_require__(/*! ./_getMapData */ "./node_modules/lodash/_getMapData.js");

/**
 * Sets the map `key` to `value`.
 *
 * @private
 * @name set
 * @memberOf MapCache
 * @param {string} key The key of the value to set.
 * @param {*} value The value to set.
 * @returns {Object} Returns the map cache instance.
 */
function mapCacheSet(key, value) {
  var data = getMapData(this, key),
      size = data.size;

  data.set(key, value);
  this.size += data.size == size ? 0 : 1;
  return this;
}

module.exports = mapCacheSet;


/***/ }),

/***/ "./node_modules/lodash/_nativeCreate.js":
/*!**********************************************!*\
  !*** ./node_modules/lodash/_nativeCreate.js ***!
  \**********************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var getNative = __webpack_require__(/*! ./_getNative */ "./node_modules/lodash/_getNative.js");

/* Built-in method references that are verified to be native. */
var nativeCreate = getNative(Object, 'create');

module.exports = nativeCreate;


/***/ }),

/***/ "./node_modules/lodash/_nativeKeys.js":
/*!********************************************!*\
  !*** ./node_modules/lodash/_nativeKeys.js ***!
  \********************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var overArg = __webpack_require__(/*! ./_overArg */ "./node_modules/lodash/_overArg.js");

/* Built-in method references for those with the same name as other `lodash` methods. */
var nativeKeys = overArg(Object.keys, Object);

module.exports = nativeKeys;


/***/ }),

/***/ "./node_modules/lodash/_nativeKeysIn.js":
/*!**********************************************!*\
  !*** ./node_modules/lodash/_nativeKeysIn.js ***!
  \**********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

/**
 * This function is like
 * [`Object.keys`](http://ecma-international.org/ecma-262/7.0/#sec-object.keys)
 * except that it includes inherited enumerable properties.
 *
 * @private
 * @param {Object} object The object to query.
 * @returns {Array} Returns the array of property names.
 */
function nativeKeysIn(object) {
  var result = [];
  if (object != null) {
    for (var key in Object(object)) {
      result.push(key);
    }
  }
  return result;
}

module.exports = nativeKeysIn;


/***/ }),

/***/ "./node_modules/lodash/_nodeUtil.js":
/*!******************************************!*\
  !*** ./node_modules/lodash/_nodeUtil.js ***!
  \******************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

/* WEBPACK VAR INJECTION */(function(module) {var freeGlobal = __webpack_require__(/*! ./_freeGlobal */ "./node_modules/lodash/_freeGlobal.js");

/** Detect free variable `exports`. */
var freeExports =  true && exports && !exports.nodeType && exports;

/** Detect free variable `module`. */
var freeModule = freeExports && typeof module == 'object' && module && !module.nodeType && module;

/** Detect the popular CommonJS extension `module.exports`. */
var moduleExports = freeModule && freeModule.exports === freeExports;

/** Detect free variable `process` from Node.js. */
var freeProcess = moduleExports && freeGlobal.process;

/** Used to access faster Node.js helpers. */
var nodeUtil = (function() {
  try {
    // Use `util.types` for Node.js 10+.
    var types = freeModule && freeModule.require && freeModule.require('util').types;

    if (types) {
      return types;
    }

    // Legacy `process.binding('util')` for Node.js < 10.
    return freeProcess && freeProcess.binding && freeProcess.binding('util');
  } catch (e) {}
}());

module.exports = nodeUtil;

/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../webpack/buildin/module.js */ "./node_modules/webpack/buildin/module.js")(module)))

/***/ }),

/***/ "./node_modules/lodash/_objectToString.js":
/*!************************************************!*\
  !*** ./node_modules/lodash/_objectToString.js ***!
  \************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

/** Used for built-in method references. */
var objectProto = Object.prototype;

/**
 * Used to resolve the
 * [`toStringTag`](http://ecma-international.org/ecma-262/7.0/#sec-object.prototype.tostring)
 * of values.
 */
var nativeObjectToString = objectProto.toString;

/**
 * Converts `value` to a string using `Object.prototype.toString`.
 *
 * @private
 * @param {*} value The value to convert.
 * @returns {string} Returns the converted string.
 */
function objectToString(value) {
  return nativeObjectToString.call(value);
}

module.exports = objectToString;


/***/ }),

/***/ "./node_modules/lodash/_overArg.js":
/*!*****************************************!*\
  !*** ./node_modules/lodash/_overArg.js ***!
  \*****************************************/
/*! no static exports found */
/***/ (function(module, exports) {

/**
 * Creates a unary function that invokes `func` with its argument transformed.
 *
 * @private
 * @param {Function} func The function to wrap.
 * @param {Function} transform The argument transform.
 * @returns {Function} Returns the new function.
 */
function overArg(func, transform) {
  return function(arg) {
    return func(transform(arg));
  };
}

module.exports = overArg;


/***/ }),

/***/ "./node_modules/lodash/_overRest.js":
/*!******************************************!*\
  !*** ./node_modules/lodash/_overRest.js ***!
  \******************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var apply = __webpack_require__(/*! ./_apply */ "./node_modules/lodash/_apply.js");

/* Built-in method references for those with the same name as other `lodash` methods. */
var nativeMax = Math.max;

/**
 * A specialized version of `baseRest` which transforms the rest array.
 *
 * @private
 * @param {Function} func The function to apply a rest parameter to.
 * @param {number} [start=func.length-1] The start position of the rest parameter.
 * @param {Function} transform The rest array transform.
 * @returns {Function} Returns the new function.
 */
function overRest(func, start, transform) {
  start = nativeMax(start === undefined ? (func.length - 1) : start, 0);
  return function() {
    var args = arguments,
        index = -1,
        length = nativeMax(args.length - start, 0),
        array = Array(length);

    while (++index < length) {
      array[index] = args[start + index];
    }
    index = -1;
    var otherArgs = Array(start + 1);
    while (++index < start) {
      otherArgs[index] = args[index];
    }
    otherArgs[start] = transform(array);
    return apply(func, this, otherArgs);
  };
}

module.exports = overRest;


/***/ }),

/***/ "./node_modules/lodash/_root.js":
/*!**************************************!*\
  !*** ./node_modules/lodash/_root.js ***!
  \**************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var freeGlobal = __webpack_require__(/*! ./_freeGlobal */ "./node_modules/lodash/_freeGlobal.js");

/** Detect free variable `self`. */
var freeSelf = typeof self == 'object' && self && self.Object === Object && self;

/** Used as a reference to the global object. */
var root = freeGlobal || freeSelf || Function('return this')();

module.exports = root;


/***/ }),

/***/ "./node_modules/lodash/_safeGet.js":
/*!*****************************************!*\
  !*** ./node_modules/lodash/_safeGet.js ***!
  \*****************************************/
/*! no static exports found */
/***/ (function(module, exports) {

/**
 * Gets the value at `key`, unless `key` is "__proto__" or "constructor".
 *
 * @private
 * @param {Object} object The object to query.
 * @param {string} key The key of the property to get.
 * @returns {*} Returns the property value.
 */
function safeGet(object, key) {
  if (key === 'constructor' && typeof object[key] === 'function') {
    return;
  }

  if (key == '__proto__') {
    return;
  }

  return object[key];
}

module.exports = safeGet;


/***/ }),

/***/ "./node_modules/lodash/_setCacheAdd.js":
/*!*********************************************!*\
  !*** ./node_modules/lodash/_setCacheAdd.js ***!
  \*********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

/** Used to stand-in for `undefined` hash values. */
var HASH_UNDEFINED = '__lodash_hash_undefined__';

/**
 * Adds `value` to the array cache.
 *
 * @private
 * @name add
 * @memberOf SetCache
 * @alias push
 * @param {*} value The value to cache.
 * @returns {Object} Returns the cache instance.
 */
function setCacheAdd(value) {
  this.__data__.set(value, HASH_UNDEFINED);
  return this;
}

module.exports = setCacheAdd;


/***/ }),

/***/ "./node_modules/lodash/_setCacheHas.js":
/*!*********************************************!*\
  !*** ./node_modules/lodash/_setCacheHas.js ***!
  \*********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

/**
 * Checks if `value` is in the array cache.
 *
 * @private
 * @name has
 * @memberOf SetCache
 * @param {*} value The value to search for.
 * @returns {number} Returns `true` if `value` is found, else `false`.
 */
function setCacheHas(value) {
  return this.__data__.has(value);
}

module.exports = setCacheHas;


/***/ }),

/***/ "./node_modules/lodash/_setToString.js":
/*!*********************************************!*\
  !*** ./node_modules/lodash/_setToString.js ***!
  \*********************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var baseSetToString = __webpack_require__(/*! ./_baseSetToString */ "./node_modules/lodash/_baseSetToString.js"),
    shortOut = __webpack_require__(/*! ./_shortOut */ "./node_modules/lodash/_shortOut.js");

/**
 * Sets the `toString` method of `func` to return `string`.
 *
 * @private
 * @param {Function} func The function to modify.
 * @param {Function} string The `toString` result.
 * @returns {Function} Returns `func`.
 */
var setToString = shortOut(baseSetToString);

module.exports = setToString;


/***/ }),

/***/ "./node_modules/lodash/_shortOut.js":
/*!******************************************!*\
  !*** ./node_modules/lodash/_shortOut.js ***!
  \******************************************/
/*! no static exports found */
/***/ (function(module, exports) {

/** Used to detect hot functions by number of calls within a span of milliseconds. */
var HOT_COUNT = 800,
    HOT_SPAN = 16;

/* Built-in method references for those with the same name as other `lodash` methods. */
var nativeNow = Date.now;

/**
 * Creates a function that'll short out and invoke `identity` instead
 * of `func` when it's called `HOT_COUNT` or more times in `HOT_SPAN`
 * milliseconds.
 *
 * @private
 * @param {Function} func The function to restrict.
 * @returns {Function} Returns the new shortable function.
 */
function shortOut(func) {
  var count = 0,
      lastCalled = 0;

  return function() {
    var stamp = nativeNow(),
        remaining = HOT_SPAN - (stamp - lastCalled);

    lastCalled = stamp;
    if (remaining > 0) {
      if (++count >= HOT_COUNT) {
        return arguments[0];
      }
    } else {
      count = 0;
    }
    return func.apply(undefined, arguments);
  };
}

module.exports = shortOut;


/***/ }),

/***/ "./node_modules/lodash/_stackClear.js":
/*!********************************************!*\
  !*** ./node_modules/lodash/_stackClear.js ***!
  \********************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var ListCache = __webpack_require__(/*! ./_ListCache */ "./node_modules/lodash/_ListCache.js");

/**
 * Removes all key-value entries from the stack.
 *
 * @private
 * @name clear
 * @memberOf Stack
 */
function stackClear() {
  this.__data__ = new ListCache;
  this.size = 0;
}

module.exports = stackClear;


/***/ }),

/***/ "./node_modules/lodash/_stackDelete.js":
/*!*********************************************!*\
  !*** ./node_modules/lodash/_stackDelete.js ***!
  \*********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

/**
 * Removes `key` and its value from the stack.
 *
 * @private
 * @name delete
 * @memberOf Stack
 * @param {string} key The key of the value to remove.
 * @returns {boolean} Returns `true` if the entry was removed, else `false`.
 */
function stackDelete(key) {
  var data = this.__data__,
      result = data['delete'](key);

  this.size = data.size;
  return result;
}

module.exports = stackDelete;


/***/ }),

/***/ "./node_modules/lodash/_stackGet.js":
/*!******************************************!*\
  !*** ./node_modules/lodash/_stackGet.js ***!
  \******************************************/
/*! no static exports found */
/***/ (function(module, exports) {

/**
 * Gets the stack value for `key`.
 *
 * @private
 * @name get
 * @memberOf Stack
 * @param {string} key The key of the value to get.
 * @returns {*} Returns the entry value.
 */
function stackGet(key) {
  return this.__data__.get(key);
}

module.exports = stackGet;


/***/ }),

/***/ "./node_modules/lodash/_stackHas.js":
/*!******************************************!*\
  !*** ./node_modules/lodash/_stackHas.js ***!
  \******************************************/
/*! no static exports found */
/***/ (function(module, exports) {

/**
 * Checks if a stack value for `key` exists.
 *
 * @private
 * @name has
 * @memberOf Stack
 * @param {string} key The key of the entry to check.
 * @returns {boolean} Returns `true` if an entry for `key` exists, else `false`.
 */
function stackHas(key) {
  return this.__data__.has(key);
}

module.exports = stackHas;


/***/ }),

/***/ "./node_modules/lodash/_stackSet.js":
/*!******************************************!*\
  !*** ./node_modules/lodash/_stackSet.js ***!
  \******************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var ListCache = __webpack_require__(/*! ./_ListCache */ "./node_modules/lodash/_ListCache.js"),
    Map = __webpack_require__(/*! ./_Map */ "./node_modules/lodash/_Map.js"),
    MapCache = __webpack_require__(/*! ./_MapCache */ "./node_modules/lodash/_MapCache.js");

/** Used as the size to enable large array optimizations. */
var LARGE_ARRAY_SIZE = 200;

/**
 * Sets the stack `key` to `value`.
 *
 * @private
 * @name set
 * @memberOf Stack
 * @param {string} key The key of the value to set.
 * @param {*} value The value to set.
 * @returns {Object} Returns the stack cache instance.
 */
function stackSet(key, value) {
  var data = this.__data__;
  if (data instanceof ListCache) {
    var pairs = data.__data__;
    if (!Map || (pairs.length < LARGE_ARRAY_SIZE - 1)) {
      pairs.push([key, value]);
      this.size = ++data.size;
      return this;
    }
    data = this.__data__ = new MapCache(pairs);
  }
  data.set(key, value);
  this.size = data.size;
  return this;
}

module.exports = stackSet;


/***/ }),

/***/ "./node_modules/lodash/_strictIndexOf.js":
/*!***********************************************!*\
  !*** ./node_modules/lodash/_strictIndexOf.js ***!
  \***********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

/**
 * A specialized version of `_.indexOf` which performs strict equality
 * comparisons of values, i.e. `===`.
 *
 * @private
 * @param {Array} array The array to inspect.
 * @param {*} value The value to search for.
 * @param {number} fromIndex The index to search from.
 * @returns {number} Returns the index of the matched value, else `-1`.
 */
function strictIndexOf(array, value, fromIndex) {
  var index = fromIndex - 1,
      length = array.length;

  while (++index < length) {
    if (array[index] === value) {
      return index;
    }
  }
  return -1;
}

module.exports = strictIndexOf;


/***/ }),

/***/ "./node_modules/lodash/_stringToArray.js":
/*!***********************************************!*\
  !*** ./node_modules/lodash/_stringToArray.js ***!
  \***********************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var asciiToArray = __webpack_require__(/*! ./_asciiToArray */ "./node_modules/lodash/_asciiToArray.js"),
    hasUnicode = __webpack_require__(/*! ./_hasUnicode */ "./node_modules/lodash/_hasUnicode.js"),
    unicodeToArray = __webpack_require__(/*! ./_unicodeToArray */ "./node_modules/lodash/_unicodeToArray.js");

/**
 * Converts `string` to an array.
 *
 * @private
 * @param {string} string The string to convert.
 * @returns {Array} Returns the converted array.
 */
function stringToArray(string) {
  return hasUnicode(string)
    ? unicodeToArray(string)
    : asciiToArray(string);
}

module.exports = stringToArray;


/***/ }),

/***/ "./node_modules/lodash/_toSource.js":
/*!******************************************!*\
  !*** ./node_modules/lodash/_toSource.js ***!
  \******************************************/
/*! no static exports found */
/***/ (function(module, exports) {

/** Used for built-in method references. */
var funcProto = Function.prototype;

/** Used to resolve the decompiled source of functions. */
var funcToString = funcProto.toString;

/**
 * Converts `func` to its source code.
 *
 * @private
 * @param {Function} func The function to convert.
 * @returns {string} Returns the source code.
 */
function toSource(func) {
  if (func != null) {
    try {
      return funcToString.call(func);
    } catch (e) {}
    try {
      return (func + '');
    } catch (e) {}
  }
  return '';
}

module.exports = toSource;


/***/ }),

/***/ "./node_modules/lodash/_unicodeToArray.js":
/*!************************************************!*\
  !*** ./node_modules/lodash/_unicodeToArray.js ***!
  \************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

/** Used to compose unicode character classes. */
var rsAstralRange = '\\ud800-\\udfff',
    rsComboMarksRange = '\\u0300-\\u036f',
    reComboHalfMarksRange = '\\ufe20-\\ufe2f',
    rsComboSymbolsRange = '\\u20d0-\\u20ff',
    rsComboRange = rsComboMarksRange + reComboHalfMarksRange + rsComboSymbolsRange,
    rsVarRange = '\\ufe0e\\ufe0f';

/** Used to compose unicode capture groups. */
var rsAstral = '[' + rsAstralRange + ']',
    rsCombo = '[' + rsComboRange + ']',
    rsFitz = '\\ud83c[\\udffb-\\udfff]',
    rsModifier = '(?:' + rsCombo + '|' + rsFitz + ')',
    rsNonAstral = '[^' + rsAstralRange + ']',
    rsRegional = '(?:\\ud83c[\\udde6-\\uddff]){2}',
    rsSurrPair = '[\\ud800-\\udbff][\\udc00-\\udfff]',
    rsZWJ = '\\u200d';

/** Used to compose unicode regexes. */
var reOptMod = rsModifier + '?',
    rsOptVar = '[' + rsVarRange + ']?',
    rsOptJoin = '(?:' + rsZWJ + '(?:' + [rsNonAstral, rsRegional, rsSurrPair].join('|') + ')' + rsOptVar + reOptMod + ')*',
    rsSeq = rsOptVar + reOptMod + rsOptJoin,
    rsSymbol = '(?:' + [rsNonAstral + rsCombo + '?', rsCombo, rsRegional, rsSurrPair, rsAstral].join('|') + ')';

/** Used to match [string symbols](https://mathiasbynens.be/notes/javascript-unicode). */
var reUnicode = RegExp(rsFitz + '(?=' + rsFitz + ')|' + rsSymbol + rsSeq, 'g');

/**
 * Converts a Unicode `string` to an array.
 *
 * @private
 * @param {string} string The string to convert.
 * @returns {Array} Returns the converted array.
 */
function unicodeToArray(string) {
  return string.match(reUnicode) || [];
}

module.exports = unicodeToArray;


/***/ }),

/***/ "./node_modules/lodash/assign.js":
/*!***************************************!*\
  !*** ./node_modules/lodash/assign.js ***!
  \***************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var assignValue = __webpack_require__(/*! ./_assignValue */ "./node_modules/lodash/_assignValue.js"),
    copyObject = __webpack_require__(/*! ./_copyObject */ "./node_modules/lodash/_copyObject.js"),
    createAssigner = __webpack_require__(/*! ./_createAssigner */ "./node_modules/lodash/_createAssigner.js"),
    isArrayLike = __webpack_require__(/*! ./isArrayLike */ "./node_modules/lodash/isArrayLike.js"),
    isPrototype = __webpack_require__(/*! ./_isPrototype */ "./node_modules/lodash/_isPrototype.js"),
    keys = __webpack_require__(/*! ./keys */ "./node_modules/lodash/keys.js");

/** Used for built-in method references. */
var objectProto = Object.prototype;

/** Used to check objects for own properties. */
var hasOwnProperty = objectProto.hasOwnProperty;

/**
 * Assigns own enumerable string keyed properties of source objects to the
 * destination object. Source objects are applied from left to right.
 * Subsequent sources overwrite property assignments of previous sources.
 *
 * **Note:** This method mutates `object` and is loosely based on
 * [`Object.assign`](https://mdn.io/Object/assign).
 *
 * @static
 * @memberOf _
 * @since 0.10.0
 * @category Object
 * @param {Object} object The destination object.
 * @param {...Object} [sources] The source objects.
 * @returns {Object} Returns `object`.
 * @see _.assignIn
 * @example
 *
 * function Foo() {
 *   this.a = 1;
 * }
 *
 * function Bar() {
 *   this.c = 3;
 * }
 *
 * Foo.prototype.b = 2;
 * Bar.prototype.d = 4;
 *
 * _.assign({ 'a': 0 }, new Foo, new Bar);
 * // => { 'a': 1, 'c': 3 }
 */
var assign = createAssigner(function(object, source) {
  if (isPrototype(source) || isArrayLike(source)) {
    copyObject(source, keys(source), object);
    return;
  }
  for (var key in source) {
    if (hasOwnProperty.call(source, key)) {
      assignValue(object, key, source[key]);
    }
  }
});

module.exports = assign;


/***/ }),

/***/ "./node_modules/lodash/cloneDeep.js":
/*!******************************************!*\
  !*** ./node_modules/lodash/cloneDeep.js ***!
  \******************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var baseClone = __webpack_require__(/*! ./_baseClone */ "./node_modules/lodash/_baseClone.js");

/** Used to compose bitmasks for cloning. */
var CLONE_DEEP_FLAG = 1,
    CLONE_SYMBOLS_FLAG = 4;

/**
 * This method is like `_.clone` except that it recursively clones `value`.
 *
 * @static
 * @memberOf _
 * @since 1.0.0
 * @category Lang
 * @param {*} value The value to recursively clone.
 * @returns {*} Returns the deep cloned value.
 * @see _.clone
 * @example
 *
 * var objects = [{ 'a': 1 }, { 'b': 2 }];
 *
 * var deep = _.cloneDeep(objects);
 * console.log(deep[0] === objects[0]);
 * // => false
 */
function cloneDeep(value) {
  return baseClone(value, CLONE_DEEP_FLAG | CLONE_SYMBOLS_FLAG);
}

module.exports = cloneDeep;


/***/ }),

/***/ "./node_modules/lodash/compact.js":
/*!****************************************!*\
  !*** ./node_modules/lodash/compact.js ***!
  \****************************************/
/*! no static exports found */
/***/ (function(module, exports) {

/**
 * Creates an array with all falsey values removed. The values `false`, `null`,
 * `0`, `""`, `undefined`, and `NaN` are falsey.
 *
 * @static
 * @memberOf _
 * @since 0.1.0
 * @category Array
 * @param {Array} array The array to compact.
 * @returns {Array} Returns the new array of filtered values.
 * @example
 *
 * _.compact([0, 1, false, 2, '', 3]);
 * // => [1, 2, 3]
 */
function compact(array) {
  var index = -1,
      length = array == null ? 0 : array.length,
      resIndex = 0,
      result = [];

  while (++index < length) {
    var value = array[index];
    if (value) {
      result[resIndex++] = value;
    }
  }
  return result;
}

module.exports = compact;


/***/ }),

/***/ "./node_modules/lodash/constant.js":
/*!*****************************************!*\
  !*** ./node_modules/lodash/constant.js ***!
  \*****************************************/
/*! no static exports found */
/***/ (function(module, exports) {

/**
 * Creates a function that returns `value`.
 *
 * @static
 * @memberOf _
 * @since 2.4.0
 * @category Util
 * @param {*} value The value to return from the new function.
 * @returns {Function} Returns the new constant function.
 * @example
 *
 * var objects = _.times(2, _.constant({ 'a': 1 }));
 *
 * console.log(objects);
 * // => [{ 'a': 1 }, { 'a': 1 }]
 *
 * console.log(objects[0] === objects[1]);
 * // => true
 */
function constant(value) {
  return function() {
    return value;
  };
}

module.exports = constant;


/***/ }),

/***/ "./node_modules/lodash/difference.js":
/*!*******************************************!*\
  !*** ./node_modules/lodash/difference.js ***!
  \*******************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var baseDifference = __webpack_require__(/*! ./_baseDifference */ "./node_modules/lodash/_baseDifference.js"),
    baseFlatten = __webpack_require__(/*! ./_baseFlatten */ "./node_modules/lodash/_baseFlatten.js"),
    baseRest = __webpack_require__(/*! ./_baseRest */ "./node_modules/lodash/_baseRest.js"),
    isArrayLikeObject = __webpack_require__(/*! ./isArrayLikeObject */ "./node_modules/lodash/isArrayLikeObject.js");

/**
 * Creates an array of `array` values not included in the other given arrays
 * using [`SameValueZero`](http://ecma-international.org/ecma-262/7.0/#sec-samevaluezero)
 * for equality comparisons. The order and references of result values are
 * determined by the first array.
 *
 * **Note:** Unlike `_.pullAll`, this method returns a new array.
 *
 * @static
 * @memberOf _
 * @since 0.1.0
 * @category Array
 * @param {Array} array The array to inspect.
 * @param {...Array} [values] The values to exclude.
 * @returns {Array} Returns the new array of filtered values.
 * @see _.without, _.xor
 * @example
 *
 * _.difference([2, 1], [2, 3]);
 * // => [1]
 */
var difference = baseRest(function(array, values) {
  return isArrayLikeObject(array)
    ? baseDifference(array, baseFlatten(values, 1, isArrayLikeObject, true))
    : [];
});

module.exports = difference;


/***/ }),

/***/ "./node_modules/lodash/eq.js":
/*!***********************************!*\
  !*** ./node_modules/lodash/eq.js ***!
  \***********************************/
/*! no static exports found */
/***/ (function(module, exports) {

/**
 * Performs a
 * [`SameValueZero`](http://ecma-international.org/ecma-262/7.0/#sec-samevaluezero)
 * comparison between two values to determine if they are equivalent.
 *
 * @static
 * @memberOf _
 * @since 4.0.0
 * @category Lang
 * @param {*} value The value to compare.
 * @param {*} other The other value to compare.
 * @returns {boolean} Returns `true` if the values are equivalent, else `false`.
 * @example
 *
 * var object = { 'a': 1 };
 * var other = { 'a': 1 };
 *
 * _.eq(object, object);
 * // => true
 *
 * _.eq(object, other);
 * // => false
 *
 * _.eq('a', 'a');
 * // => true
 *
 * _.eq('a', Object('a'));
 * // => false
 *
 * _.eq(NaN, NaN);
 * // => true
 */
function eq(value, other) {
  return value === other || (value !== value && other !== other);
}

module.exports = eq;


/***/ }),

/***/ "./node_modules/lodash/functions.js":
/*!******************************************!*\
  !*** ./node_modules/lodash/functions.js ***!
  \******************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var baseFunctions = __webpack_require__(/*! ./_baseFunctions */ "./node_modules/lodash/_baseFunctions.js"),
    keys = __webpack_require__(/*! ./keys */ "./node_modules/lodash/keys.js");

/**
 * Creates an array of function property names from own enumerable properties
 * of `object`.
 *
 * @static
 * @since 0.1.0
 * @memberOf _
 * @category Object
 * @param {Object} object The object to inspect.
 * @returns {Array} Returns the function names.
 * @see _.functionsIn
 * @example
 *
 * function Foo() {
 *   this.a = _.constant('a');
 *   this.b = _.constant('b');
 * }
 *
 * Foo.prototype.c = _.constant('c');
 *
 * _.functions(new Foo);
 * // => ['a', 'b']
 */
function functions(object) {
  return object == null ? [] : baseFunctions(object, keys(object));
}

module.exports = functions;


/***/ }),

/***/ "./node_modules/lodash/identity.js":
/*!*****************************************!*\
  !*** ./node_modules/lodash/identity.js ***!
  \*****************************************/
/*! no static exports found */
/***/ (function(module, exports) {

/**
 * This method returns the first argument it receives.
 *
 * @static
 * @since 0.1.0
 * @memberOf _
 * @category Util
 * @param {*} value Any value.
 * @returns {*} Returns `value`.
 * @example
 *
 * var object = { 'a': 1 };
 *
 * console.log(_.identity(object) === object);
 * // => true
 */
function identity(value) {
  return value;
}

module.exports = identity;


/***/ }),

/***/ "./node_modules/lodash/includes.js":
/*!*****************************************!*\
  !*** ./node_modules/lodash/includes.js ***!
  \*****************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var baseIndexOf = __webpack_require__(/*! ./_baseIndexOf */ "./node_modules/lodash/_baseIndexOf.js"),
    isArrayLike = __webpack_require__(/*! ./isArrayLike */ "./node_modules/lodash/isArrayLike.js"),
    isString = __webpack_require__(/*! ./isString */ "./node_modules/lodash/isString.js"),
    toInteger = __webpack_require__(/*! ./toInteger */ "./node_modules/lodash/toInteger.js"),
    values = __webpack_require__(/*! ./values */ "./node_modules/lodash/values.js");

/* Built-in method references for those with the same name as other `lodash` methods. */
var nativeMax = Math.max;

/**
 * Checks if `value` is in `collection`. If `collection` is a string, it's
 * checked for a substring of `value`, otherwise
 * [`SameValueZero`](http://ecma-international.org/ecma-262/7.0/#sec-samevaluezero)
 * is used for equality comparisons. If `fromIndex` is negative, it's used as
 * the offset from the end of `collection`.
 *
 * @static
 * @memberOf _
 * @since 0.1.0
 * @category Collection
 * @param {Array|Object|string} collection The collection to inspect.
 * @param {*} value The value to search for.
 * @param {number} [fromIndex=0] The index to search from.
 * @param- {Object} [guard] Enables use as an iteratee for methods like `_.reduce`.
 * @returns {boolean} Returns `true` if `value` is found, else `false`.
 * @example
 *
 * _.includes([1, 2, 3], 1);
 * // => true
 *
 * _.includes([1, 2, 3], 1, 2);
 * // => false
 *
 * _.includes({ 'a': 1, 'b': 2 }, 1);
 * // => true
 *
 * _.includes('abcd', 'bc');
 * // => true
 */
function includes(collection, value, fromIndex, guard) {
  collection = isArrayLike(collection) ? collection : values(collection);
  fromIndex = (fromIndex && !guard) ? toInteger(fromIndex) : 0;

  var length = collection.length;
  if (fromIndex < 0) {
    fromIndex = nativeMax(length + fromIndex, 0);
  }
  return isString(collection)
    ? (fromIndex <= length && collection.indexOf(value, fromIndex) > -1)
    : (!!length && baseIndexOf(collection, value, fromIndex) > -1);
}

module.exports = includes;


/***/ }),

/***/ "./node_modules/lodash/isArguments.js":
/*!********************************************!*\
  !*** ./node_modules/lodash/isArguments.js ***!
  \********************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var baseIsArguments = __webpack_require__(/*! ./_baseIsArguments */ "./node_modules/lodash/_baseIsArguments.js"),
    isObjectLike = __webpack_require__(/*! ./isObjectLike */ "./node_modules/lodash/isObjectLike.js");

/** Used for built-in method references. */
var objectProto = Object.prototype;

/** Used to check objects for own properties. */
var hasOwnProperty = objectProto.hasOwnProperty;

/** Built-in value references. */
var propertyIsEnumerable = objectProto.propertyIsEnumerable;

/**
 * Checks if `value` is likely an `arguments` object.
 *
 * @static
 * @memberOf _
 * @since 0.1.0
 * @category Lang
 * @param {*} value The value to check.
 * @returns {boolean} Returns `true` if `value` is an `arguments` object,
 *  else `false`.
 * @example
 *
 * _.isArguments(function() { return arguments; }());
 * // => true
 *
 * _.isArguments([1, 2, 3]);
 * // => false
 */
var isArguments = baseIsArguments(function() { return arguments; }()) ? baseIsArguments : function(value) {
  return isObjectLike(value) && hasOwnProperty.call(value, 'callee') &&
    !propertyIsEnumerable.call(value, 'callee');
};

module.exports = isArguments;


/***/ }),

/***/ "./node_modules/lodash/isArray.js":
/*!****************************************!*\
  !*** ./node_modules/lodash/isArray.js ***!
  \****************************************/
/*! no static exports found */
/***/ (function(module, exports) {

/**
 * Checks if `value` is classified as an `Array` object.
 *
 * @static
 * @memberOf _
 * @since 0.1.0
 * @category Lang
 * @param {*} value The value to check.
 * @returns {boolean} Returns `true` if `value` is an array, else `false`.
 * @example
 *
 * _.isArray([1, 2, 3]);
 * // => true
 *
 * _.isArray(document.body.children);
 * // => false
 *
 * _.isArray('abc');
 * // => false
 *
 * _.isArray(_.noop);
 * // => false
 */
var isArray = Array.isArray;

module.exports = isArray;


/***/ }),

/***/ "./node_modules/lodash/isArrayLike.js":
/*!********************************************!*\
  !*** ./node_modules/lodash/isArrayLike.js ***!
  \********************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var isFunction = __webpack_require__(/*! ./isFunction */ "./node_modules/lodash/isFunction.js"),
    isLength = __webpack_require__(/*! ./isLength */ "./node_modules/lodash/isLength.js");

/**
 * Checks if `value` is array-like. A value is considered array-like if it's
 * not a function and has a `value.length` that's an integer greater than or
 * equal to `0` and less than or equal to `Number.MAX_SAFE_INTEGER`.
 *
 * @static
 * @memberOf _
 * @since 4.0.0
 * @category Lang
 * @param {*} value The value to check.
 * @returns {boolean} Returns `true` if `value` is array-like, else `false`.
 * @example
 *
 * _.isArrayLike([1, 2, 3]);
 * // => true
 *
 * _.isArrayLike(document.body.children);
 * // => true
 *
 * _.isArrayLike('abc');
 * // => true
 *
 * _.isArrayLike(_.noop);
 * // => false
 */
function isArrayLike(value) {
  return value != null && isLength(value.length) && !isFunction(value);
}

module.exports = isArrayLike;


/***/ }),

/***/ "./node_modules/lodash/isArrayLikeObject.js":
/*!**************************************************!*\
  !*** ./node_modules/lodash/isArrayLikeObject.js ***!
  \**************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var isArrayLike = __webpack_require__(/*! ./isArrayLike */ "./node_modules/lodash/isArrayLike.js"),
    isObjectLike = __webpack_require__(/*! ./isObjectLike */ "./node_modules/lodash/isObjectLike.js");

/**
 * This method is like `_.isArrayLike` except that it also checks if `value`
 * is an object.
 *
 * @static
 * @memberOf _
 * @since 4.0.0
 * @category Lang
 * @param {*} value The value to check.
 * @returns {boolean} Returns `true` if `value` is an array-like object,
 *  else `false`.
 * @example
 *
 * _.isArrayLikeObject([1, 2, 3]);
 * // => true
 *
 * _.isArrayLikeObject(document.body.children);
 * // => true
 *
 * _.isArrayLikeObject('abc');
 * // => false
 *
 * _.isArrayLikeObject(_.noop);
 * // => false
 */
function isArrayLikeObject(value) {
  return isObjectLike(value) && isArrayLike(value);
}

module.exports = isArrayLikeObject;


/***/ }),

/***/ "./node_modules/lodash/isBuffer.js":
/*!*****************************************!*\
  !*** ./node_modules/lodash/isBuffer.js ***!
  \*****************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

/* WEBPACK VAR INJECTION */(function(module) {var root = __webpack_require__(/*! ./_root */ "./node_modules/lodash/_root.js"),
    stubFalse = __webpack_require__(/*! ./stubFalse */ "./node_modules/lodash/stubFalse.js");

/** Detect free variable `exports`. */
var freeExports =  true && exports && !exports.nodeType && exports;

/** Detect free variable `module`. */
var freeModule = freeExports && typeof module == 'object' && module && !module.nodeType && module;

/** Detect the popular CommonJS extension `module.exports`. */
var moduleExports = freeModule && freeModule.exports === freeExports;

/** Built-in value references. */
var Buffer = moduleExports ? root.Buffer : undefined;

/* Built-in method references for those with the same name as other `lodash` methods. */
var nativeIsBuffer = Buffer ? Buffer.isBuffer : undefined;

/**
 * Checks if `value` is a buffer.
 *
 * @static
 * @memberOf _
 * @since 4.3.0
 * @category Lang
 * @param {*} value The value to check.
 * @returns {boolean} Returns `true` if `value` is a buffer, else `false`.
 * @example
 *
 * _.isBuffer(new Buffer(2));
 * // => true
 *
 * _.isBuffer(new Uint8Array(2));
 * // => false
 */
var isBuffer = nativeIsBuffer || stubFalse;

module.exports = isBuffer;

/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../webpack/buildin/module.js */ "./node_modules/webpack/buildin/module.js")(module)))

/***/ }),

/***/ "./node_modules/lodash/isElement.js":
/*!******************************************!*\
  !*** ./node_modules/lodash/isElement.js ***!
  \******************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var isObjectLike = __webpack_require__(/*! ./isObjectLike */ "./node_modules/lodash/isObjectLike.js"),
    isPlainObject = __webpack_require__(/*! ./isPlainObject */ "./node_modules/lodash/isPlainObject.js");

/**
 * Checks if `value` is likely a DOM element.
 *
 * @static
 * @memberOf _
 * @since 0.1.0
 * @category Lang
 * @param {*} value The value to check.
 * @returns {boolean} Returns `true` if `value` is a DOM element, else `false`.
 * @example
 *
 * _.isElement(document.body);
 * // => true
 *
 * _.isElement('<body>');
 * // => false
 */
function isElement(value) {
  return isObjectLike(value) && value.nodeType === 1 && !isPlainObject(value);
}

module.exports = isElement;


/***/ }),

/***/ "./node_modules/lodash/isFunction.js":
/*!*******************************************!*\
  !*** ./node_modules/lodash/isFunction.js ***!
  \*******************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var baseGetTag = __webpack_require__(/*! ./_baseGetTag */ "./node_modules/lodash/_baseGetTag.js"),
    isObject = __webpack_require__(/*! ./isObject */ "./node_modules/lodash/isObject.js");

/** `Object#toString` result references. */
var asyncTag = '[object AsyncFunction]',
    funcTag = '[object Function]',
    genTag = '[object GeneratorFunction]',
    proxyTag = '[object Proxy]';

/**
 * Checks if `value` is classified as a `Function` object.
 *
 * @static
 * @memberOf _
 * @since 0.1.0
 * @category Lang
 * @param {*} value The value to check.
 * @returns {boolean} Returns `true` if `value` is a function, else `false`.
 * @example
 *
 * _.isFunction(_);
 * // => true
 *
 * _.isFunction(/abc/);
 * // => false
 */
function isFunction(value) {
  if (!isObject(value)) {
    return false;
  }
  // The use of `Object#toString` avoids issues with the `typeof` operator
  // in Safari 9 which returns 'object' for typed arrays and other constructors.
  var tag = baseGetTag(value);
  return tag == funcTag || tag == genTag || tag == asyncTag || tag == proxyTag;
}

module.exports = isFunction;


/***/ }),

/***/ "./node_modules/lodash/isLength.js":
/*!*****************************************!*\
  !*** ./node_modules/lodash/isLength.js ***!
  \*****************************************/
/*! no static exports found */
/***/ (function(module, exports) {

/** Used as references for various `Number` constants. */
var MAX_SAFE_INTEGER = 9007199254740991;

/**
 * Checks if `value` is a valid array-like length.
 *
 * **Note:** This method is loosely based on
 * [`ToLength`](http://ecma-international.org/ecma-262/7.0/#sec-tolength).
 *
 * @static
 * @memberOf _
 * @since 4.0.0
 * @category Lang
 * @param {*} value The value to check.
 * @returns {boolean} Returns `true` if `value` is a valid length, else `false`.
 * @example
 *
 * _.isLength(3);
 * // => true
 *
 * _.isLength(Number.MIN_VALUE);
 * // => false
 *
 * _.isLength(Infinity);
 * // => false
 *
 * _.isLength('3');
 * // => false
 */
function isLength(value) {
  return typeof value == 'number' &&
    value > -1 && value % 1 == 0 && value <= MAX_SAFE_INTEGER;
}

module.exports = isLength;


/***/ }),

/***/ "./node_modules/lodash/isMap.js":
/*!**************************************!*\
  !*** ./node_modules/lodash/isMap.js ***!
  \**************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var baseIsMap = __webpack_require__(/*! ./_baseIsMap */ "./node_modules/lodash/_baseIsMap.js"),
    baseUnary = __webpack_require__(/*! ./_baseUnary */ "./node_modules/lodash/_baseUnary.js"),
    nodeUtil = __webpack_require__(/*! ./_nodeUtil */ "./node_modules/lodash/_nodeUtil.js");

/* Node.js helper references. */
var nodeIsMap = nodeUtil && nodeUtil.isMap;

/**
 * Checks if `value` is classified as a `Map` object.
 *
 * @static
 * @memberOf _
 * @since 4.3.0
 * @category Lang
 * @param {*} value The value to check.
 * @returns {boolean} Returns `true` if `value` is a map, else `false`.
 * @example
 *
 * _.isMap(new Map);
 * // => true
 *
 * _.isMap(new WeakMap);
 * // => false
 */
var isMap = nodeIsMap ? baseUnary(nodeIsMap) : baseIsMap;

module.exports = isMap;


/***/ }),

/***/ "./node_modules/lodash/isObject.js":
/*!*****************************************!*\
  !*** ./node_modules/lodash/isObject.js ***!
  \*****************************************/
/*! no static exports found */
/***/ (function(module, exports) {

/**
 * Checks if `value` is the
 * [language type](http://www.ecma-international.org/ecma-262/7.0/#sec-ecmascript-language-types)
 * of `Object`. (e.g. arrays, functions, objects, regexes, `new Number(0)`, and `new String('')`)
 *
 * @static
 * @memberOf _
 * @since 0.1.0
 * @category Lang
 * @param {*} value The value to check.
 * @returns {boolean} Returns `true` if `value` is an object, else `false`.
 * @example
 *
 * _.isObject({});
 * // => true
 *
 * _.isObject([1, 2, 3]);
 * // => true
 *
 * _.isObject(_.noop);
 * // => true
 *
 * _.isObject(null);
 * // => false
 */
function isObject(value) {
  var type = typeof value;
  return value != null && (type == 'object' || type == 'function');
}

module.exports = isObject;


/***/ }),

/***/ "./node_modules/lodash/isObjectLike.js":
/*!*********************************************!*\
  !*** ./node_modules/lodash/isObjectLike.js ***!
  \*********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

/**
 * Checks if `value` is object-like. A value is object-like if it's not `null`
 * and has a `typeof` result of "object".
 *
 * @static
 * @memberOf _
 * @since 4.0.0
 * @category Lang
 * @param {*} value The value to check.
 * @returns {boolean} Returns `true` if `value` is object-like, else `false`.
 * @example
 *
 * _.isObjectLike({});
 * // => true
 *
 * _.isObjectLike([1, 2, 3]);
 * // => true
 *
 * _.isObjectLike(_.noop);
 * // => false
 *
 * _.isObjectLike(null);
 * // => false
 */
function isObjectLike(value) {
  return value != null && typeof value == 'object';
}

module.exports = isObjectLike;


/***/ }),

/***/ "./node_modules/lodash/isPlainObject.js":
/*!**********************************************!*\
  !*** ./node_modules/lodash/isPlainObject.js ***!
  \**********************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var baseGetTag = __webpack_require__(/*! ./_baseGetTag */ "./node_modules/lodash/_baseGetTag.js"),
    getPrototype = __webpack_require__(/*! ./_getPrototype */ "./node_modules/lodash/_getPrototype.js"),
    isObjectLike = __webpack_require__(/*! ./isObjectLike */ "./node_modules/lodash/isObjectLike.js");

/** `Object#toString` result references. */
var objectTag = '[object Object]';

/** Used for built-in method references. */
var funcProto = Function.prototype,
    objectProto = Object.prototype;

/** Used to resolve the decompiled source of functions. */
var funcToString = funcProto.toString;

/** Used to check objects for own properties. */
var hasOwnProperty = objectProto.hasOwnProperty;

/** Used to infer the `Object` constructor. */
var objectCtorString = funcToString.call(Object);

/**
 * Checks if `value` is a plain object, that is, an object created by the
 * `Object` constructor or one with a `[[Prototype]]` of `null`.
 *
 * @static
 * @memberOf _
 * @since 0.8.0
 * @category Lang
 * @param {*} value The value to check.
 * @returns {boolean} Returns `true` if `value` is a plain object, else `false`.
 * @example
 *
 * function Foo() {
 *   this.a = 1;
 * }
 *
 * _.isPlainObject(new Foo);
 * // => false
 *
 * _.isPlainObject([1, 2, 3]);
 * // => false
 *
 * _.isPlainObject({ 'x': 0, 'y': 0 });
 * // => true
 *
 * _.isPlainObject(Object.create(null));
 * // => true
 */
function isPlainObject(value) {
  if (!isObjectLike(value) || baseGetTag(value) != objectTag) {
    return false;
  }
  var proto = getPrototype(value);
  if (proto === null) {
    return true;
  }
  var Ctor = hasOwnProperty.call(proto, 'constructor') && proto.constructor;
  return typeof Ctor == 'function' && Ctor instanceof Ctor &&
    funcToString.call(Ctor) == objectCtorString;
}

module.exports = isPlainObject;


/***/ }),

/***/ "./node_modules/lodash/isSet.js":
/*!**************************************!*\
  !*** ./node_modules/lodash/isSet.js ***!
  \**************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var baseIsSet = __webpack_require__(/*! ./_baseIsSet */ "./node_modules/lodash/_baseIsSet.js"),
    baseUnary = __webpack_require__(/*! ./_baseUnary */ "./node_modules/lodash/_baseUnary.js"),
    nodeUtil = __webpack_require__(/*! ./_nodeUtil */ "./node_modules/lodash/_nodeUtil.js");

/* Node.js helper references. */
var nodeIsSet = nodeUtil && nodeUtil.isSet;

/**
 * Checks if `value` is classified as a `Set` object.
 *
 * @static
 * @memberOf _
 * @since 4.3.0
 * @category Lang
 * @param {*} value The value to check.
 * @returns {boolean} Returns `true` if `value` is a set, else `false`.
 * @example
 *
 * _.isSet(new Set);
 * // => true
 *
 * _.isSet(new WeakSet);
 * // => false
 */
var isSet = nodeIsSet ? baseUnary(nodeIsSet) : baseIsSet;

module.exports = isSet;


/***/ }),

/***/ "./node_modules/lodash/isString.js":
/*!*****************************************!*\
  !*** ./node_modules/lodash/isString.js ***!
  \*****************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var baseGetTag = __webpack_require__(/*! ./_baseGetTag */ "./node_modules/lodash/_baseGetTag.js"),
    isArray = __webpack_require__(/*! ./isArray */ "./node_modules/lodash/isArray.js"),
    isObjectLike = __webpack_require__(/*! ./isObjectLike */ "./node_modules/lodash/isObjectLike.js");

/** `Object#toString` result references. */
var stringTag = '[object String]';

/**
 * Checks if `value` is classified as a `String` primitive or object.
 *
 * @static
 * @since 0.1.0
 * @memberOf _
 * @category Lang
 * @param {*} value The value to check.
 * @returns {boolean} Returns `true` if `value` is a string, else `false`.
 * @example
 *
 * _.isString('abc');
 * // => true
 *
 * _.isString(1);
 * // => false
 */
function isString(value) {
  return typeof value == 'string' ||
    (!isArray(value) && isObjectLike(value) && baseGetTag(value) == stringTag);
}

module.exports = isString;


/***/ }),

/***/ "./node_modules/lodash/isSymbol.js":
/*!*****************************************!*\
  !*** ./node_modules/lodash/isSymbol.js ***!
  \*****************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var baseGetTag = __webpack_require__(/*! ./_baseGetTag */ "./node_modules/lodash/_baseGetTag.js"),
    isObjectLike = __webpack_require__(/*! ./isObjectLike */ "./node_modules/lodash/isObjectLike.js");

/** `Object#toString` result references. */
var symbolTag = '[object Symbol]';

/**
 * Checks if `value` is classified as a `Symbol` primitive or object.
 *
 * @static
 * @memberOf _
 * @since 4.0.0
 * @category Lang
 * @param {*} value The value to check.
 * @returns {boolean} Returns `true` if `value` is a symbol, else `false`.
 * @example
 *
 * _.isSymbol(Symbol.iterator);
 * // => true
 *
 * _.isSymbol('abc');
 * // => false
 */
function isSymbol(value) {
  return typeof value == 'symbol' ||
    (isObjectLike(value) && baseGetTag(value) == symbolTag);
}

module.exports = isSymbol;


/***/ }),

/***/ "./node_modules/lodash/isTypedArray.js":
/*!*********************************************!*\
  !*** ./node_modules/lodash/isTypedArray.js ***!
  \*********************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var baseIsTypedArray = __webpack_require__(/*! ./_baseIsTypedArray */ "./node_modules/lodash/_baseIsTypedArray.js"),
    baseUnary = __webpack_require__(/*! ./_baseUnary */ "./node_modules/lodash/_baseUnary.js"),
    nodeUtil = __webpack_require__(/*! ./_nodeUtil */ "./node_modules/lodash/_nodeUtil.js");

/* Node.js helper references. */
var nodeIsTypedArray = nodeUtil && nodeUtil.isTypedArray;

/**
 * Checks if `value` is classified as a typed array.
 *
 * @static
 * @memberOf _
 * @since 3.0.0
 * @category Lang
 * @param {*} value The value to check.
 * @returns {boolean} Returns `true` if `value` is a typed array, else `false`.
 * @example
 *
 * _.isTypedArray(new Uint8Array);
 * // => true
 *
 * _.isTypedArray([]);
 * // => false
 */
var isTypedArray = nodeIsTypedArray ? baseUnary(nodeIsTypedArray) : baseIsTypedArray;

module.exports = isTypedArray;


/***/ }),

/***/ "./node_modules/lodash/keys.js":
/*!*************************************!*\
  !*** ./node_modules/lodash/keys.js ***!
  \*************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var arrayLikeKeys = __webpack_require__(/*! ./_arrayLikeKeys */ "./node_modules/lodash/_arrayLikeKeys.js"),
    baseKeys = __webpack_require__(/*! ./_baseKeys */ "./node_modules/lodash/_baseKeys.js"),
    isArrayLike = __webpack_require__(/*! ./isArrayLike */ "./node_modules/lodash/isArrayLike.js");

/**
 * Creates an array of the own enumerable property names of `object`.
 *
 * **Note:** Non-object values are coerced to objects. See the
 * [ES spec](http://ecma-international.org/ecma-262/7.0/#sec-object.keys)
 * for more details.
 *
 * @static
 * @since 0.1.0
 * @memberOf _
 * @category Object
 * @param {Object} object The object to query.
 * @returns {Array} Returns the array of property names.
 * @example
 *
 * function Foo() {
 *   this.a = 1;
 *   this.b = 2;
 * }
 *
 * Foo.prototype.c = 3;
 *
 * _.keys(new Foo);
 * // => ['a', 'b'] (iteration order is not guaranteed)
 *
 * _.keys('hi');
 * // => ['0', '1']
 */
function keys(object) {
  return isArrayLike(object) ? arrayLikeKeys(object) : baseKeys(object);
}

module.exports = keys;


/***/ }),

/***/ "./node_modules/lodash/keysIn.js":
/*!***************************************!*\
  !*** ./node_modules/lodash/keysIn.js ***!
  \***************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var arrayLikeKeys = __webpack_require__(/*! ./_arrayLikeKeys */ "./node_modules/lodash/_arrayLikeKeys.js"),
    baseKeysIn = __webpack_require__(/*! ./_baseKeysIn */ "./node_modules/lodash/_baseKeysIn.js"),
    isArrayLike = __webpack_require__(/*! ./isArrayLike */ "./node_modules/lodash/isArrayLike.js");

/**
 * Creates an array of the own and inherited enumerable property names of `object`.
 *
 * **Note:** Non-object values are coerced to objects.
 *
 * @static
 * @memberOf _
 * @since 3.0.0
 * @category Object
 * @param {Object} object The object to query.
 * @returns {Array} Returns the array of property names.
 * @example
 *
 * function Foo() {
 *   this.a = 1;
 *   this.b = 2;
 * }
 *
 * Foo.prototype.c = 3;
 *
 * _.keysIn(new Foo);
 * // => ['a', 'b', 'c'] (iteration order is not guaranteed)
 */
function keysIn(object) {
  return isArrayLike(object) ? arrayLikeKeys(object, true) : baseKeysIn(object);
}

module.exports = keysIn;


/***/ }),

/***/ "./node_modules/lodash/merge.js":
/*!**************************************!*\
  !*** ./node_modules/lodash/merge.js ***!
  \**************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var baseMerge = __webpack_require__(/*! ./_baseMerge */ "./node_modules/lodash/_baseMerge.js"),
    createAssigner = __webpack_require__(/*! ./_createAssigner */ "./node_modules/lodash/_createAssigner.js");

/**
 * This method is like `_.assign` except that it recursively merges own and
 * inherited enumerable string keyed properties of source objects into the
 * destination object. Source properties that resolve to `undefined` are
 * skipped if a destination value exists. Array and plain object properties
 * are merged recursively. Other objects and value types are overridden by
 * assignment. Source objects are applied from left to right. Subsequent
 * sources overwrite property assignments of previous sources.
 *
 * **Note:** This method mutates `object`.
 *
 * @static
 * @memberOf _
 * @since 0.5.0
 * @category Object
 * @param {Object} object The destination object.
 * @param {...Object} [sources] The source objects.
 * @returns {Object} Returns `object`.
 * @example
 *
 * var object = {
 *   'a': [{ 'b': 2 }, { 'd': 4 }]
 * };
 *
 * var other = {
 *   'a': [{ 'c': 3 }, { 'e': 5 }]
 * };
 *
 * _.merge(object, other);
 * // => { 'a': [{ 'b': 2, 'c': 3 }, { 'd': 4, 'e': 5 }] }
 */
var merge = createAssigner(function(object, source, srcIndex) {
  baseMerge(object, source, srcIndex);
});

module.exports = merge;


/***/ }),

/***/ "./node_modules/lodash/stubArray.js":
/*!******************************************!*\
  !*** ./node_modules/lodash/stubArray.js ***!
  \******************************************/
/*! no static exports found */
/***/ (function(module, exports) {

/**
 * This method returns a new empty array.
 *
 * @static
 * @memberOf _
 * @since 4.13.0
 * @category Util
 * @returns {Array} Returns the new empty array.
 * @example
 *
 * var arrays = _.times(2, _.stubArray);
 *
 * console.log(arrays);
 * // => [[], []]
 *
 * console.log(arrays[0] === arrays[1]);
 * // => false
 */
function stubArray() {
  return [];
}

module.exports = stubArray;


/***/ }),

/***/ "./node_modules/lodash/stubFalse.js":
/*!******************************************!*\
  !*** ./node_modules/lodash/stubFalse.js ***!
  \******************************************/
/*! no static exports found */
/***/ (function(module, exports) {

/**
 * This method returns `false`.
 *
 * @static
 * @memberOf _
 * @since 4.13.0
 * @category Util
 * @returns {boolean} Returns `false`.
 * @example
 *
 * _.times(2, _.stubFalse);
 * // => [false, false]
 */
function stubFalse() {
  return false;
}

module.exports = stubFalse;


/***/ }),

/***/ "./node_modules/lodash/toFinite.js":
/*!*****************************************!*\
  !*** ./node_modules/lodash/toFinite.js ***!
  \*****************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var toNumber = __webpack_require__(/*! ./toNumber */ "./node_modules/lodash/toNumber.js");

/** Used as references for various `Number` constants. */
var INFINITY = 1 / 0,
    MAX_INTEGER = 1.7976931348623157e+308;

/**
 * Converts `value` to a finite number.
 *
 * @static
 * @memberOf _
 * @since 4.12.0
 * @category Lang
 * @param {*} value The value to convert.
 * @returns {number} Returns the converted number.
 * @example
 *
 * _.toFinite(3.2);
 * // => 3.2
 *
 * _.toFinite(Number.MIN_VALUE);
 * // => 5e-324
 *
 * _.toFinite(Infinity);
 * // => 1.7976931348623157e+308
 *
 * _.toFinite('3.2');
 * // => 3.2
 */
function toFinite(value) {
  if (!value) {
    return value === 0 ? value : 0;
  }
  value = toNumber(value);
  if (value === INFINITY || value === -INFINITY) {
    var sign = (value < 0 ? -1 : 1);
    return sign * MAX_INTEGER;
  }
  return value === value ? value : 0;
}

module.exports = toFinite;


/***/ }),

/***/ "./node_modules/lodash/toInteger.js":
/*!******************************************!*\
  !*** ./node_modules/lodash/toInteger.js ***!
  \******************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var toFinite = __webpack_require__(/*! ./toFinite */ "./node_modules/lodash/toFinite.js");

/**
 * Converts `value` to an integer.
 *
 * **Note:** This method is loosely based on
 * [`ToInteger`](http://www.ecma-international.org/ecma-262/7.0/#sec-tointeger).
 *
 * @static
 * @memberOf _
 * @since 4.0.0
 * @category Lang
 * @param {*} value The value to convert.
 * @returns {number} Returns the converted integer.
 * @example
 *
 * _.toInteger(3.2);
 * // => 3
 *
 * _.toInteger(Number.MIN_VALUE);
 * // => 0
 *
 * _.toInteger(Infinity);
 * // => 1.7976931348623157e+308
 *
 * _.toInteger('3.2');
 * // => 3
 */
function toInteger(value) {
  var result = toFinite(value),
      remainder = result % 1;

  return result === result ? (remainder ? result - remainder : result) : 0;
}

module.exports = toInteger;


/***/ }),

/***/ "./node_modules/lodash/toNumber.js":
/*!*****************************************!*\
  !*** ./node_modules/lodash/toNumber.js ***!
  \*****************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var isObject = __webpack_require__(/*! ./isObject */ "./node_modules/lodash/isObject.js"),
    isSymbol = __webpack_require__(/*! ./isSymbol */ "./node_modules/lodash/isSymbol.js");

/** Used as references for various `Number` constants. */
var NAN = 0 / 0;

/** Used to match leading and trailing whitespace. */
var reTrim = /^\s+|\s+$/g;

/** Used to detect bad signed hexadecimal string values. */
var reIsBadHex = /^[-+]0x[0-9a-f]+$/i;

/** Used to detect binary string values. */
var reIsBinary = /^0b[01]+$/i;

/** Used to detect octal string values. */
var reIsOctal = /^0o[0-7]+$/i;

/** Built-in method references without a dependency on `root`. */
var freeParseInt = parseInt;

/**
 * Converts `value` to a number.
 *
 * @static
 * @memberOf _
 * @since 4.0.0
 * @category Lang
 * @param {*} value The value to process.
 * @returns {number} Returns the number.
 * @example
 *
 * _.toNumber(3.2);
 * // => 3.2
 *
 * _.toNumber(Number.MIN_VALUE);
 * // => 5e-324
 *
 * _.toNumber(Infinity);
 * // => Infinity
 *
 * _.toNumber('3.2');
 * // => 3.2
 */
function toNumber(value) {
  if (typeof value == 'number') {
    return value;
  }
  if (isSymbol(value)) {
    return NAN;
  }
  if (isObject(value)) {
    var other = typeof value.valueOf == 'function' ? value.valueOf() : value;
    value = isObject(other) ? (other + '') : other;
  }
  if (typeof value != 'string') {
    return value === 0 ? value : +value;
  }
  value = value.replace(reTrim, '');
  var isBinary = reIsBinary.test(value);
  return (isBinary || reIsOctal.test(value))
    ? freeParseInt(value.slice(2), isBinary ? 2 : 8)
    : (reIsBadHex.test(value) ? NAN : +value);
}

module.exports = toNumber;


/***/ }),

/***/ "./node_modules/lodash/toPlainObject.js":
/*!**********************************************!*\
  !*** ./node_modules/lodash/toPlainObject.js ***!
  \**********************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var copyObject = __webpack_require__(/*! ./_copyObject */ "./node_modules/lodash/_copyObject.js"),
    keysIn = __webpack_require__(/*! ./keysIn */ "./node_modules/lodash/keysIn.js");

/**
 * Converts `value` to a plain object flattening inherited enumerable string
 * keyed properties of `value` to own properties of the plain object.
 *
 * @static
 * @memberOf _
 * @since 3.0.0
 * @category Lang
 * @param {*} value The value to convert.
 * @returns {Object} Returns the converted plain object.
 * @example
 *
 * function Foo() {
 *   this.b = 2;
 * }
 *
 * Foo.prototype.c = 3;
 *
 * _.assign({ 'a': 1 }, new Foo);
 * // => { 'a': 1, 'b': 2 }
 *
 * _.assign({ 'a': 1 }, _.toPlainObject(new Foo));
 * // => { 'a': 1, 'b': 2, 'c': 3 }
 */
function toPlainObject(value) {
  return copyObject(value, keysIn(value));
}

module.exports = toPlainObject;


/***/ }),

/***/ "./node_modules/lodash/toString.js":
/*!*****************************************!*\
  !*** ./node_modules/lodash/toString.js ***!
  \*****************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var baseToString = __webpack_require__(/*! ./_baseToString */ "./node_modules/lodash/_baseToString.js");

/**
 * Converts `value` to a string. An empty string is returned for `null`
 * and `undefined` values. The sign of `-0` is preserved.
 *
 * @static
 * @memberOf _
 * @since 4.0.0
 * @category Lang
 * @param {*} value The value to convert.
 * @returns {string} Returns the converted string.
 * @example
 *
 * _.toString(null);
 * // => ''
 *
 * _.toString(-0);
 * // => '-0'
 *
 * _.toString([1, 2, 3]);
 * // => '1,2,3'
 */
function toString(value) {
  return value == null ? '' : baseToString(value);
}

module.exports = toString;


/***/ }),

/***/ "./node_modules/lodash/trim.js":
/*!*************************************!*\
  !*** ./node_modules/lodash/trim.js ***!
  \*************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var baseToString = __webpack_require__(/*! ./_baseToString */ "./node_modules/lodash/_baseToString.js"),
    castSlice = __webpack_require__(/*! ./_castSlice */ "./node_modules/lodash/_castSlice.js"),
    charsEndIndex = __webpack_require__(/*! ./_charsEndIndex */ "./node_modules/lodash/_charsEndIndex.js"),
    charsStartIndex = __webpack_require__(/*! ./_charsStartIndex */ "./node_modules/lodash/_charsStartIndex.js"),
    stringToArray = __webpack_require__(/*! ./_stringToArray */ "./node_modules/lodash/_stringToArray.js"),
    toString = __webpack_require__(/*! ./toString */ "./node_modules/lodash/toString.js");

/** Used to match leading and trailing whitespace. */
var reTrim = /^\s+|\s+$/g;

/**
 * Removes leading and trailing whitespace or specified characters from `string`.
 *
 * @static
 * @memberOf _
 * @since 3.0.0
 * @category String
 * @param {string} [string=''] The string to trim.
 * @param {string} [chars=whitespace] The characters to trim.
 * @param- {Object} [guard] Enables use as an iteratee for methods like `_.map`.
 * @returns {string} Returns the trimmed string.
 * @example
 *
 * _.trim('  abc  ');
 * // => 'abc'
 *
 * _.trim('-_-abc-_-', '_-');
 * // => 'abc'
 *
 * _.map(['  foo  ', '  bar  '], _.trim);
 * // => ['foo', 'bar']
 */
function trim(string, chars, guard) {
  string = toString(string);
  if (string && (guard || chars === undefined)) {
    return string.replace(reTrim, '');
  }
  if (!string || !(chars = baseToString(chars))) {
    return string;
  }
  var strSymbols = stringToArray(string),
      chrSymbols = stringToArray(chars),
      start = charsStartIndex(strSymbols, chrSymbols),
      end = charsEndIndex(strSymbols, chrSymbols) + 1;

  return castSlice(strSymbols, start, end).join('');
}

module.exports = trim;


/***/ }),

/***/ "./node_modules/lodash/values.js":
/*!***************************************!*\
  !*** ./node_modules/lodash/values.js ***!
  \***************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var baseValues = __webpack_require__(/*! ./_baseValues */ "./node_modules/lodash/_baseValues.js"),
    keys = __webpack_require__(/*! ./keys */ "./node_modules/lodash/keys.js");

/**
 * Creates an array of the own enumerable string keyed property values of `object`.
 *
 * **Note:** Non-object values are coerced to objects.
 *
 * @static
 * @since 0.1.0
 * @memberOf _
 * @category Object
 * @param {Object} object The object to query.
 * @returns {Array} Returns the array of property values.
 * @example
 *
 * function Foo() {
 *   this.a = 1;
 *   this.b = 2;
 * }
 *
 * Foo.prototype.c = 3;
 *
 * _.values(new Foo);
 * // => [1, 2] (iteration order is not guaranteed)
 *
 * _.values('hi');
 * // => ['h', 'i']
 */
function values(object) {
  return object == null ? [] : baseValues(object, keys(object));
}

module.exports = values;


/***/ }),

/***/ "./node_modules/ng2-file-upload/file-upload/file-drop.directive.js":
/*!*************************************************************************!*\
  !*** ./node_modules/ng2-file-upload/file-upload/file-drop.directive.js ***!
  \*************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var core_1 = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
var file_uploader_class_1 = __webpack_require__(/*! ./file-uploader.class */ "./node_modules/ng2-file-upload/file-upload/file-uploader.class.js");
var FileDropDirective = (function () {
    function FileDropDirective(element) {
        this.fileOver = new core_1.EventEmitter();
        this.onFileDrop = new core_1.EventEmitter();
        this.element = element;
    }
    FileDropDirective.prototype.getOptions = function () {
        return this.uploader.options;
    };
    FileDropDirective.prototype.getFilters = function () {
        return {};
    };
    FileDropDirective.prototype.onDrop = function (event) {
        var transfer = this._getTransfer(event);
        if (!transfer) {
            return;
        }
        var options = this.getOptions();
        var filters = this.getFilters();
        this._preventAndStop(event);
        this.uploader.addToQueue(transfer.files, options, filters);
        this.fileOver.emit(false);
        this.onFileDrop.emit(transfer.files);
    };
    FileDropDirective.prototype.onDragOver = function (event) {
        var transfer = this._getTransfer(event);
        if (!this._haveFiles(transfer.types)) {
            return;
        }
        transfer.dropEffect = 'copy';
        this._preventAndStop(event);
        this.fileOver.emit(true);
    };
    FileDropDirective.prototype.onDragLeave = function (event) {
        if (this.element) {
            if (event.currentTarget === this.element[0]) {
                return;
            }
        }
        this._preventAndStop(event);
        this.fileOver.emit(false);
    };
    FileDropDirective.prototype._getTransfer = function (event) {
        return event.dataTransfer ? event.dataTransfer : event.originalEvent.dataTransfer; // jQuery fix;
    };
    FileDropDirective.prototype._preventAndStop = function (event) {
        event.preventDefault();
        event.stopPropagation();
    };
    FileDropDirective.prototype._haveFiles = function (types) {
        if (!types) {
            return false;
        }
        if (types.indexOf) {
            return types.indexOf('Files') !== -1;
        }
        else if (types.contains) {
            return types.contains('Files');
        }
        else {
            return false;
        }
    };
    return FileDropDirective;
}());
__decorate([
    core_1.Input(),
    __metadata("design:type", file_uploader_class_1.FileUploader)
], FileDropDirective.prototype, "uploader", void 0);
__decorate([
    core_1.Output(),
    __metadata("design:type", core_1.EventEmitter)
], FileDropDirective.prototype, "fileOver", void 0);
__decorate([
    core_1.Output(),
    __metadata("design:type", core_1.EventEmitter)
], FileDropDirective.prototype, "onFileDrop", void 0);
__decorate([
    core_1.HostListener('drop', ['$event']),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object]),
    __metadata("design:returntype", void 0)
], FileDropDirective.prototype, "onDrop", null);
__decorate([
    core_1.HostListener('dragover', ['$event']),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object]),
    __metadata("design:returntype", void 0)
], FileDropDirective.prototype, "onDragOver", null);
__decorate([
    core_1.HostListener('dragleave', ['$event']),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object]),
    __metadata("design:returntype", Object)
], FileDropDirective.prototype, "onDragLeave", null);
FileDropDirective = __decorate([
    core_1.Directive({ selector: '[ng2FileDrop]' }),
    __metadata("design:paramtypes", [core_1.ElementRef])
], FileDropDirective);
exports.FileDropDirective = FileDropDirective;


/***/ }),

/***/ "./node_modules/ng2-file-upload/file-upload/file-item.class.js":
/*!*********************************************************************!*\
  !*** ./node_modules/ng2-file-upload/file-upload/file-item.class.js ***!
  \*********************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var file_like_object_class_1 = __webpack_require__(/*! ./file-like-object.class */ "./node_modules/ng2-file-upload/file-upload/file-like-object.class.js");
var FileItem = (function () {
    function FileItem(uploader, some, options) {
        this.url = '/';
        this.headers = [];
        this.withCredentials = true;
        this.formData = [];
        this.isReady = false;
        this.isUploading = false;
        this.isUploaded = false;
        this.isSuccess = false;
        this.isCancel = false;
        this.isError = false;
        this.progress = 0;
        this.index = void 0;
        this.uploader = uploader;
        this.some = some;
        this.options = options;
        this.file = new file_like_object_class_1.FileLikeObject(some);
        this._file = some;
        if (uploader.options) {
            this.method = uploader.options.method || 'POST';
            this.alias = uploader.options.itemAlias || 'file';
        }
        this.url = uploader.options.url;
    }
    FileItem.prototype.upload = function () {
        try {
            this.uploader.uploadItem(this);
        }
        catch (e) {
            this.uploader._onCompleteItem(this, '', 0, {});
            this.uploader._onErrorItem(this, '', 0, {});
        }
    };
    FileItem.prototype.cancel = function () {
        this.uploader.cancelItem(this);
    };
    FileItem.prototype.remove = function () {
        this.uploader.removeFromQueue(this);
    };
    FileItem.prototype.onBeforeUpload = function () {
        return void 0;
    };
    FileItem.prototype.onBuildForm = function (form) {
        return { form: form };
    };
    FileItem.prototype.onProgress = function (progress) {
        return { progress: progress };
    };
    FileItem.prototype.onSuccess = function (response, status, headers) {
        return { response: response, status: status, headers: headers };
    };
    FileItem.prototype.onError = function (response, status, headers) {
        return { response: response, status: status, headers: headers };
    };
    FileItem.prototype.onCancel = function (response, status, headers) {
        return { response: response, status: status, headers: headers };
    };
    FileItem.prototype.onComplete = function (response, status, headers) {
        return { response: response, status: status, headers: headers };
    };
    FileItem.prototype._onBeforeUpload = function () {
        this.isReady = true;
        this.isUploading = true;
        this.isUploaded = false;
        this.isSuccess = false;
        this.isCancel = false;
        this.isError = false;
        this.progress = 0;
        this.onBeforeUpload();
    };
    FileItem.prototype._onBuildForm = function (form) {
        this.onBuildForm(form);
    };
    FileItem.prototype._onProgress = function (progress) {
        this.progress = progress;
        this.onProgress(progress);
    };
    FileItem.prototype._onSuccess = function (response, status, headers) {
        this.isReady = false;
        this.isUploading = false;
        this.isUploaded = true;
        this.isSuccess = true;
        this.isCancel = false;
        this.isError = false;
        this.progress = 100;
        this.index = void 0;
        this.onSuccess(response, status, headers);
    };
    FileItem.prototype._onError = function (response, status, headers) {
        this.isReady = false;
        this.isUploading = false;
        this.isUploaded = true;
        this.isSuccess = false;
        this.isCancel = false;
        this.isError = true;
        this.progress = 0;
        this.index = void 0;
        this.onError(response, status, headers);
    };
    FileItem.prototype._onCancel = function (response, status, headers) {
        this.isReady = false;
        this.isUploading = false;
        this.isUploaded = false;
        this.isSuccess = false;
        this.isCancel = true;
        this.isError = false;
        this.progress = 0;
        this.index = void 0;
        this.onCancel(response, status, headers);
    };
    FileItem.prototype._onComplete = function (response, status, headers) {
        this.onComplete(response, status, headers);
        if (this.uploader.options.removeAfterUpload) {
            this.remove();
        }
    };
    FileItem.prototype._prepareToUploading = function () {
        this.index = this.index || ++this.uploader._nextIndex;
        this.isReady = true;
    };
    return FileItem;
}());
exports.FileItem = FileItem;


/***/ }),

/***/ "./node_modules/ng2-file-upload/file-upload/file-like-object.class.js":
/*!****************************************************************************!*\
  !*** ./node_modules/ng2-file-upload/file-upload/file-like-object.class.js ***!
  \****************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

function isElement(node) {
    return !!(node && (node.nodeName || node.prop && node.attr && node.find));
}
var FileLikeObject = (function () {
    function FileLikeObject(fileOrInput) {
        this.rawFile = fileOrInput;
        var isInput = isElement(fileOrInput);
        var fakePathOrObject = isInput ? fileOrInput.value : fileOrInput;
        var postfix = typeof fakePathOrObject === 'string' ? 'FakePath' : 'Object';
        var method = '_createFrom' + postfix;
        this[method](fakePathOrObject);
    }
    FileLikeObject.prototype._createFromFakePath = function (path) {
        this.lastModifiedDate = void 0;
        this.size = void 0;
        this.type = 'like/' + path.slice(path.lastIndexOf('.') + 1).toLowerCase();
        this.name = path.slice(path.lastIndexOf('/') + path.lastIndexOf('\\') + 2);
    };
    FileLikeObject.prototype._createFromObject = function (object) {
        this.size = object.size;
        this.type = object.type;
        this.name = object.name;
    };
    return FileLikeObject;
}());
exports.FileLikeObject = FileLikeObject;


/***/ }),

/***/ "./node_modules/ng2-file-upload/file-upload/file-select.directive.js":
/*!***************************************************************************!*\
  !*** ./node_modules/ng2-file-upload/file-upload/file-select.directive.js ***!
  \***************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var core_1 = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
var file_uploader_class_1 = __webpack_require__(/*! ./file-uploader.class */ "./node_modules/ng2-file-upload/file-upload/file-uploader.class.js");
var FileSelectDirective = (function () {
    function FileSelectDirective(element) {
        this.onFileSelected = new core_1.EventEmitter();
        this.element = element;
    }
    FileSelectDirective.prototype.getOptions = function () {
        return this.uploader.options;
    };
    FileSelectDirective.prototype.getFilters = function () {
        return {};
    };
    FileSelectDirective.prototype.isEmptyAfterSelection = function () {
        return !!this.element.nativeElement.attributes.multiple;
    };
    FileSelectDirective.prototype.onChange = function () {
        var files = this.element.nativeElement.files;
        var options = this.getOptions();
        var filters = this.getFilters();
        this.uploader.addToQueue(files, options, filters);
        this.onFileSelected.emit(files);
        if (this.isEmptyAfterSelection()) {
            this.element.nativeElement.value = '';
        }
    };
    return FileSelectDirective;
}());
__decorate([
    core_1.Input(),
    __metadata("design:type", file_uploader_class_1.FileUploader)
], FileSelectDirective.prototype, "uploader", void 0);
__decorate([
    core_1.Output(),
    __metadata("design:type", core_1.EventEmitter)
], FileSelectDirective.prototype, "onFileSelected", void 0);
__decorate([
    core_1.HostListener('change'),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", []),
    __metadata("design:returntype", Object)
], FileSelectDirective.prototype, "onChange", null);
FileSelectDirective = __decorate([
    core_1.Directive({ selector: '[ng2FileSelect]' }),
    __metadata("design:paramtypes", [core_1.ElementRef])
], FileSelectDirective);
exports.FileSelectDirective = FileSelectDirective;


/***/ }),

/***/ "./node_modules/ng2-file-upload/file-upload/file-type.class.js":
/*!*********************************************************************!*\
  !*** ./node_modules/ng2-file-upload/file-upload/file-type.class.js ***!
  \*********************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var FileType = (function () {
    function FileType() {
    }
    FileType.getMimeClass = function (file) {
        var mimeClass = 'application';
        if (this.mime_psd.indexOf(file.type) !== -1) {
            mimeClass = 'image';
        }
        else if (file.type.match('image.*')) {
            mimeClass = 'image';
        }
        else if (file.type.match('video.*')) {
            mimeClass = 'video';
        }
        else if (file.type.match('audio.*')) {
            mimeClass = 'audio';
        }
        else if (file.type === 'application/pdf') {
            mimeClass = 'pdf';
        }
        else if (this.mime_compress.indexOf(file.type) !== -1) {
            mimeClass = 'compress';
        }
        else if (this.mime_doc.indexOf(file.type) !== -1) {
            mimeClass = 'doc';
        }
        else if (this.mime_xsl.indexOf(file.type) !== -1) {
            mimeClass = 'xls';
        }
        else if (this.mime_ppt.indexOf(file.type) !== -1) {
            mimeClass = 'ppt';
        }
        if (mimeClass === 'application') {
            mimeClass = this.fileTypeDetection(file.name);
        }
        return mimeClass;
    };
    FileType.fileTypeDetection = function (inputFilename) {
        var types = {
            'jpg': 'image',
            'jpeg': 'image',
            'tif': 'image',
            'psd': 'image',
            'bmp': 'image',
            'png': 'image',
            'nef': 'image',
            'tiff': 'image',
            'cr2': 'image',
            'dwg': 'image',
            'cdr': 'image',
            'ai': 'image',
            'indd': 'image',
            'pin': 'image',
            'cdp': 'image',
            'skp': 'image',
            'stp': 'image',
            '3dm': 'image',
            'mp3': 'audio',
            'wav': 'audio',
            'wma': 'audio',
            'mod': 'audio',
            'm4a': 'audio',
            'compress': 'compress',
            'zip': 'compress',
            'rar': 'compress',
            '7z': 'compress',
            'lz': 'compress',
            'z01': 'compress',
            'pdf': 'pdf',
            'xls': 'xls',
            'xlsx': 'xls',
            'ods': 'xls',
            'mp4': 'video',
            'avi': 'video',
            'wmv': 'video',
            'mpg': 'video',
            'mts': 'video',
            'flv': 'video',
            '3gp': 'video',
            'vob': 'video',
            'm4v': 'video',
            'mpeg': 'video',
            'm2ts': 'video',
            'mov': 'video',
            'doc': 'doc',
            'docx': 'doc',
            'eps': 'doc',
            'txt': 'doc',
            'odt': 'doc',
            'rtf': 'doc',
            'ppt': 'ppt',
            'pptx': 'ppt',
            'pps': 'ppt',
            'ppsx': 'ppt',
            'odp': 'ppt'
        };
        var chunks = inputFilename.split('.');
        if (chunks.length < 2) {
            return 'application';
        }
        var extension = chunks[chunks.length - 1].toLowerCase();
        if (types[extension] === undefined) {
            return 'application';
        }
        else {
            return types[extension];
        }
    };
    return FileType;
}());
/*  MS office  */
FileType.mime_doc = [
    'application/msword',
    'application/msword',
    'application/vnd.openxmlformats-officedocument.wordprocessingml.document',
    'application/vnd.openxmlformats-officedocument.wordprocessingml.template',
    'application/vnd.ms-word.document.macroEnabled.12',
    'application/vnd.ms-word.template.macroEnabled.12'
];
FileType.mime_xsl = [
    'application/vnd.ms-excel',
    'application/vnd.ms-excel',
    'application/vnd.ms-excel',
    'application/vnd.openxmlformats-officedocument.spreadsheetml.sheet',
    'application/vnd.openxmlformats-officedocument.spreadsheetml.template',
    'application/vnd.ms-excel.sheet.macroEnabled.12',
    'application/vnd.ms-excel.template.macroEnabled.12',
    'application/vnd.ms-excel.addin.macroEnabled.12',
    'application/vnd.ms-excel.sheet.binary.macroEnabled.12'
];
FileType.mime_ppt = [
    'application/vnd.ms-powerpoint',
    'application/vnd.ms-powerpoint',
    'application/vnd.ms-powerpoint',
    'application/vnd.ms-powerpoint',
    'application/vnd.openxmlformats-officedocument.presentationml.presentation',
    'application/vnd.openxmlformats-officedocument.presentationml.template',
    'application/vnd.openxmlformats-officedocument.presentationml.slideshow',
    'application/vnd.ms-powerpoint.addin.macroEnabled.12',
    'application/vnd.ms-powerpoint.presentation.macroEnabled.12',
    'application/vnd.ms-powerpoint.presentation.macroEnabled.12',
    'application/vnd.ms-powerpoint.slideshow.macroEnabled.12'
];
/* PSD */
FileType.mime_psd = [
    'image/photoshop',
    'image/x-photoshop',
    'image/psd',
    'application/photoshop',
    'application/psd',
    'zz-application/zz-winassoc-psd'
];
/* Compressed files */
FileType.mime_compress = [
    'application/x-gtar',
    'application/x-gcompress',
    'application/compress',
    'application/x-tar',
    'application/x-rar-compressed',
    'application/octet-stream'
];
exports.FileType = FileType;


/***/ }),

/***/ "./node_modules/ng2-file-upload/file-upload/file-upload.module.js":
/*!************************************************************************!*\
  !*** ./node_modules/ng2-file-upload/file-upload/file-upload.module.js ***!
  \************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var common_1 = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
var core_1 = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
var file_drop_directive_1 = __webpack_require__(/*! ./file-drop.directive */ "./node_modules/ng2-file-upload/file-upload/file-drop.directive.js");
var file_select_directive_1 = __webpack_require__(/*! ./file-select.directive */ "./node_modules/ng2-file-upload/file-upload/file-select.directive.js");
var FileUploadModule = (function () {
    function FileUploadModule() {
    }
    return FileUploadModule;
}());
FileUploadModule = __decorate([
    core_1.NgModule({
        imports: [common_1.CommonModule],
        declarations: [file_drop_directive_1.FileDropDirective, file_select_directive_1.FileSelectDirective],
        exports: [file_drop_directive_1.FileDropDirective, file_select_directive_1.FileSelectDirective]
    })
], FileUploadModule);
exports.FileUploadModule = FileUploadModule;


/***/ }),

/***/ "./node_modules/ng2-file-upload/file-upload/file-uploader.class.js":
/*!*************************************************************************!*\
  !*** ./node_modules/ng2-file-upload/file-upload/file-uploader.class.js ***!
  \*************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var core_1 = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
var file_like_object_class_1 = __webpack_require__(/*! ./file-like-object.class */ "./node_modules/ng2-file-upload/file-upload/file-like-object.class.js");
var file_item_class_1 = __webpack_require__(/*! ./file-item.class */ "./node_modules/ng2-file-upload/file-upload/file-item.class.js");
var file_type_class_1 = __webpack_require__(/*! ./file-type.class */ "./node_modules/ng2-file-upload/file-upload/file-type.class.js");
function isFile(value) {
    return (File && value instanceof File);
}
var FileUploader = (function () {
    function FileUploader(options) {
        this.isUploading = false;
        this.queue = [];
        this.progress = 0;
        this._nextIndex = 0;
        this.options = {
            autoUpload: false,
            isHTML5: true,
            filters: [],
            removeAfterUpload: false,
            disableMultipart: false,
            formatDataFunction: function (item) { return item._file; },
            formatDataFunctionIsAsync: false
        };
        this.setOptions(options);
        this.response = new core_1.EventEmitter();
    }
    FileUploader.prototype.setOptions = function (options) {
        this.options = Object.assign(this.options, options);
        this.authToken = this.options.authToken;
        this.authTokenHeader = this.options.authTokenHeader || 'Authorization';
        this.autoUpload = this.options.autoUpload;
        this.options.filters.unshift({ name: 'queueLimit', fn: this._queueLimitFilter });
        if (this.options.maxFileSize) {
            this.options.filters.unshift({ name: 'fileSize', fn: this._fileSizeFilter });
        }
        if (this.options.allowedFileType) {
            this.options.filters.unshift({ name: 'fileType', fn: this._fileTypeFilter });
        }
        if (this.options.allowedMimeType) {
            this.options.filters.unshift({ name: 'mimeType', fn: this._mimeTypeFilter });
        }
        for (var i = 0; i < this.queue.length; i++) {
            this.queue[i].url = this.options.url;
        }
    };
    FileUploader.prototype.addToQueue = function (files, options, filters) {
        var _this = this;
        var list = [];
        for (var _i = 0, files_1 = files; _i < files_1.length; _i++) {
            var file = files_1[_i];
            list.push(file);
        }
        var arrayOfFilters = this._getFilters(filters);
        var count = this.queue.length;
        var addedFileItems = [];
        list.map(function (some) {
            if (!options) {
                options = _this.options;
            }
            var temp = new file_like_object_class_1.FileLikeObject(some);
            if (_this._isValidFile(temp, arrayOfFilters, options)) {
                var fileItem = new file_item_class_1.FileItem(_this, some, options);
                addedFileItems.push(fileItem);
                _this.queue.push(fileItem);
                _this._onAfterAddingFile(fileItem);
            }
            else {
                var filter = arrayOfFilters[_this._failFilterIndex];
                _this._onWhenAddingFileFailed(temp, filter, options);
            }
        });
        if (this.queue.length !== count) {
            this._onAfterAddingAll(addedFileItems);
            this.progress = this._getTotalProgress();
        }
        this._render();
        if (this.options.autoUpload) {
            this.uploadAll();
        }
    };
    FileUploader.prototype.removeFromQueue = function (value) {
        var index = this.getIndexOfItem(value);
        var item = this.queue[index];
        if (item.isUploading) {
            item.cancel();
        }
        this.queue.splice(index, 1);
        this.progress = this._getTotalProgress();
    };
    FileUploader.prototype.clearQueue = function () {
        while (this.queue.length) {
            this.queue[0].remove();
        }
        this.progress = 0;
    };
    FileUploader.prototype.uploadItem = function (value) {
        var index = this.getIndexOfItem(value);
        var item = this.queue[index];
        var transport = this.options.isHTML5 ? '_xhrTransport' : '_iframeTransport';
        item._prepareToUploading();
        if (this.isUploading) {
            return;
        }
        this.isUploading = true;
        this[transport](item);
    };
    FileUploader.prototype.cancelItem = function (value) {
        var index = this.getIndexOfItem(value);
        var item = this.queue[index];
        var prop = this.options.isHTML5 ? item._xhr : item._form;
        if (item && item.isUploading) {
            prop.abort();
        }
    };
    FileUploader.prototype.uploadAll = function () {
        var items = this.getNotUploadedItems().filter(function (item) { return !item.isUploading; });
        if (!items.length) {
            return;
        }
        items.map(function (item) { return item._prepareToUploading(); });
        items[0].upload();
    };
    FileUploader.prototype.cancelAll = function () {
        var items = this.getNotUploadedItems();
        items.map(function (item) { return item.cancel(); });
    };
    FileUploader.prototype.isFile = function (value) {
        return isFile(value);
    };
    FileUploader.prototype.isFileLikeObject = function (value) {
        return value instanceof file_like_object_class_1.FileLikeObject;
    };
    FileUploader.prototype.getIndexOfItem = function (value) {
        return typeof value === 'number' ? value : this.queue.indexOf(value);
    };
    FileUploader.prototype.getNotUploadedItems = function () {
        return this.queue.filter(function (item) { return !item.isUploaded; });
    };
    FileUploader.prototype.getReadyItems = function () {
        return this.queue
            .filter(function (item) { return (item.isReady && !item.isUploading); })
            .sort(function (item1, item2) { return item1.index - item2.index; });
    };
    FileUploader.prototype.destroy = function () {
        return void 0;
    };
    FileUploader.prototype.onAfterAddingAll = function (fileItems) {
        return { fileItems: fileItems };
    };
    FileUploader.prototype.onBuildItemForm = function (fileItem, form) {
        return { fileItem: fileItem, form: form };
    };
    FileUploader.prototype.onAfterAddingFile = function (fileItem) {
        return { fileItem: fileItem };
    };
    FileUploader.prototype.onWhenAddingFileFailed = function (item, filter, options) {
        return { item: item, filter: filter, options: options };
    };
    FileUploader.prototype.onBeforeUploadItem = function (fileItem) {
        return { fileItem: fileItem };
    };
    FileUploader.prototype.onProgressItem = function (fileItem, progress) {
        return { fileItem: fileItem, progress: progress };
    };
    FileUploader.prototype.onProgressAll = function (progress) {
        return { progress: progress };
    };
    FileUploader.prototype.onSuccessItem = function (item, response, status, headers) {
        return { item: item, response: response, status: status, headers: headers };
    };
    FileUploader.prototype.onErrorItem = function (item, response, status, headers) {
        return { item: item, response: response, status: status, headers: headers };
    };
    FileUploader.prototype.onCancelItem = function (item, response, status, headers) {
        return { item: item, response: response, status: status, headers: headers };
    };
    FileUploader.prototype.onCompleteItem = function (item, response, status, headers) {
        return { item: item, response: response, status: status, headers: headers };
    };
    FileUploader.prototype.onCompleteAll = function () {
        return void 0;
    };
    FileUploader.prototype._mimeTypeFilter = function (item) {
        return !(this.options.allowedMimeType && this.options.allowedMimeType.indexOf(item.type) === -1);
    };
    FileUploader.prototype._fileSizeFilter = function (item) {
        return !(this.options.maxFileSize && item.size > this.options.maxFileSize);
    };
    FileUploader.prototype._fileTypeFilter = function (item) {
        return !(this.options.allowedFileType &&
            this.options.allowedFileType.indexOf(file_type_class_1.FileType.getMimeClass(item)) === -1);
    };
    FileUploader.prototype._onErrorItem = function (item, response, status, headers) {
        item._onError(response, status, headers);
        this.onErrorItem(item, response, status, headers);
    };
    FileUploader.prototype._onCompleteItem = function (item, response, status, headers) {
        item._onComplete(response, status, headers);
        this.onCompleteItem(item, response, status, headers);
        var nextItem = this.getReadyItems()[0];
        this.isUploading = false;
        if (nextItem) {
            nextItem.upload();
            return;
        }
        this.onCompleteAll();
        this.progress = this._getTotalProgress();
        this._render();
    };
    FileUploader.prototype._headersGetter = function (parsedHeaders) {
        return function (name) {
            if (name) {
                return parsedHeaders[name.toLowerCase()] || void 0;
            }
            return parsedHeaders;
        };
    };
    FileUploader.prototype._xhrTransport = function (item) {
        var _this = this;
        var that = this;
        var xhr = item._xhr = new XMLHttpRequest();
        var sendable;
        this._onBeforeUploadItem(item);
        if (typeof item._file.size !== 'number') {
            throw new TypeError('The file specified is no longer valid');
        }
        if (!this.options.disableMultipart) {
            sendable = new FormData();
            this._onBuildItemForm(item, sendable);
            var appendFile = function () { return sendable.append(item.alias, item._file, item.file.name); };
            if (!this.options.parametersBeforeFiles) {
                appendFile();
            }
            // For AWS, Additional Parameters must come BEFORE Files
            if (this.options.additionalParameter !== undefined) {
                Object.keys(this.options.additionalParameter).forEach(function (key) {
                    var paramVal = _this.options.additionalParameter[key];
                    // Allow an additional parameter to include the filename
                    if (typeof paramVal === 'string' && paramVal.indexOf('{{file_name}}') >= 0) {
                        paramVal = paramVal.replace('{{file_name}}', item.file.name);
                    }
                    sendable.append(key, paramVal);
                });
            }
            if (this.options.parametersBeforeFiles) {
                appendFile();
            }
        }
        else {
            sendable = this.options.formatDataFunction(item);
        }
        xhr.upload.onprogress = function (event) {
            var progress = Math.round(event.lengthComputable ? event.loaded * 100 / event.total : 0);
            _this._onProgressItem(item, progress);
        };
        xhr.onload = function () {
            var headers = _this._parseHeaders(xhr.getAllResponseHeaders());
            var response = _this._transformResponse(xhr.response, headers);
            var gist = _this._isSuccessCode(xhr.status) ? 'Success' : 'Error';
            var method = '_on' + gist + 'Item';
            _this[method](item, response, xhr.status, headers);
            _this._onCompleteItem(item, response, xhr.status, headers);
        };
        xhr.onerror = function () {
            var headers = _this._parseHeaders(xhr.getAllResponseHeaders());
            var response = _this._transformResponse(xhr.response, headers);
            _this._onErrorItem(item, response, xhr.status, headers);
            _this._onCompleteItem(item, response, xhr.status, headers);
        };
        xhr.onabort = function () {
            var headers = _this._parseHeaders(xhr.getAllResponseHeaders());
            var response = _this._transformResponse(xhr.response, headers);
            _this._onCancelItem(item, response, xhr.status, headers);
            _this._onCompleteItem(item, response, xhr.status, headers);
        };
        xhr.open(item.method, item.url, true);
        xhr.withCredentials = item.withCredentials;
        if (this.options.headers) {
            for (var _i = 0, _a = this.options.headers; _i < _a.length; _i++) {
                var header = _a[_i];
                xhr.setRequestHeader(header.name, header.value);
            }
        }
        if (item.headers.length) {
            for (var _b = 0, _c = item.headers; _b < _c.length; _b++) {
                var header = _c[_b];
                xhr.setRequestHeader(header.name, header.value);
            }
        }
        if (this.authToken) {
            xhr.setRequestHeader(this.authTokenHeader, this.authToken);
        }
        xhr.onreadystatechange = function () {
            if (xhr.readyState == XMLHttpRequest.DONE) {
                that.response.emit(xhr.responseText);
            }
        };
        if (this.options.formatDataFunctionIsAsync) {
            sendable.then(function (result) { return xhr.send(JSON.stringify(result)); });
        }
        else {
            xhr.send(sendable);
        }
        this._render();
    };
    FileUploader.prototype._getTotalProgress = function (value) {
        if (value === void 0) { value = 0; }
        if (this.options.removeAfterUpload) {
            return value;
        }
        var notUploaded = this.getNotUploadedItems().length;
        var uploaded = notUploaded ? this.queue.length - notUploaded : this.queue.length;
        var ratio = 100 / this.queue.length;
        var current = value * ratio / 100;
        return Math.round(uploaded * ratio + current);
    };
    FileUploader.prototype._getFilters = function (filters) {
        if (!filters) {
            return this.options.filters;
        }
        if (Array.isArray(filters)) {
            return filters;
        }
        if (typeof filters === 'string') {
            var names_1 = filters.match(/[^\s,]+/g);
            return this.options.filters
                .filter(function (filter) { return names_1.indexOf(filter.name) !== -1; });
        }
        return this.options.filters;
    };
    FileUploader.prototype._render = function () {
        return void 0;
    };
    FileUploader.prototype._queueLimitFilter = function () {
        return this.options.queueLimit === undefined || this.queue.length < this.options.queueLimit;
    };
    FileUploader.prototype._isValidFile = function (file, filters, options) {
        var _this = this;
        this._failFilterIndex = -1;
        return !filters.length ? true : filters.every(function (filter) {
            _this._failFilterIndex++;
            return filter.fn.call(_this, file, options);
        });
    };
    FileUploader.prototype._isSuccessCode = function (status) {
        return (status >= 200 && status < 300) || status === 304;
    };
    FileUploader.prototype._transformResponse = function (response, headers) {
        return response;
    };
    FileUploader.prototype._parseHeaders = function (headers) {
        var parsed = {};
        var key;
        var val;
        var i;
        if (!headers) {
            return parsed;
        }
        headers.split('\n').map(function (line) {
            i = line.indexOf(':');
            key = line.slice(0, i).trim().toLowerCase();
            val = line.slice(i + 1).trim();
            if (key) {
                parsed[key] = parsed[key] ? parsed[key] + ', ' + val : val;
            }
        });
        return parsed;
    };
    FileUploader.prototype._onWhenAddingFileFailed = function (item, filter, options) {
        this.onWhenAddingFileFailed(item, filter, options);
    };
    FileUploader.prototype._onAfterAddingFile = function (item) {
        this.onAfterAddingFile(item);
    };
    FileUploader.prototype._onAfterAddingAll = function (items) {
        this.onAfterAddingAll(items);
    };
    FileUploader.prototype._onBeforeUploadItem = function (item) {
        item._onBeforeUpload();
        this.onBeforeUploadItem(item);
    };
    FileUploader.prototype._onBuildItemForm = function (item, form) {
        item._onBuildForm(form);
        this.onBuildItemForm(item, form);
    };
    FileUploader.prototype._onProgressItem = function (item, progress) {
        var total = this._getTotalProgress(progress);
        this.progress = total;
        item._onProgress(progress);
        this.onProgressItem(item, progress);
        this.onProgressAll(total);
        this._render();
    };
    FileUploader.prototype._onSuccessItem = function (item, response, status, headers) {
        item._onSuccess(response, status, headers);
        this.onSuccessItem(item, response, status, headers);
    };
    FileUploader.prototype._onCancelItem = function (item, response, status, headers) {
        item._onCancel(response, status, headers);
        this.onCancelItem(item, response, status, headers);
    };
    return FileUploader;
}());
exports.FileUploader = FileUploader;


/***/ }),

/***/ "./node_modules/ng2-file-upload/index.js":
/*!***********************************************!*\
  !*** ./node_modules/ng2-file-upload/index.js ***!
  \***********************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

function __export(m) {
    for (var p in m) if (!exports.hasOwnProperty(p)) exports[p] = m[p];
}
__export(__webpack_require__(/*! ./file-upload/file-select.directive */ "./node_modules/ng2-file-upload/file-upload/file-select.directive.js"));
__export(__webpack_require__(/*! ./file-upload/file-drop.directive */ "./node_modules/ng2-file-upload/file-upload/file-drop.directive.js"));
__export(__webpack_require__(/*! ./file-upload/file-uploader.class */ "./node_modules/ng2-file-upload/file-upload/file-uploader.class.js"));
__export(__webpack_require__(/*! ./file-upload/file-item.class */ "./node_modules/ng2-file-upload/file-upload/file-item.class.js"));
__export(__webpack_require__(/*! ./file-upload/file-like-object.class */ "./node_modules/ng2-file-upload/file-upload/file-like-object.class.js"));
var file_upload_module_1 = __webpack_require__(/*! ./file-upload/file-upload.module */ "./node_modules/ng2-file-upload/file-upload/file-upload.module.js");
exports.FileUploadModule = file_upload_module_1.FileUploadModule;


/***/ }),

/***/ "./node_modules/raw-loader/index.js!./src/app/documents/containers/create-update.component.html":
/*!*********************************************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/documents/containers/create-update.component.html ***!
  \*********************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"my-5\">\n  <div class=\"card mx-auto\" style=\"max-width: 500px\">\n    <div class=\"card-header\">\n      {{ editing ? 'Update '.concat(document?.filename) : 'Create Document' }}\n    </div>\n    <div class=\"card-body\">\n      <form *ngIf=\"document else loading\" #documentForm=\"ngForm\" (ngSubmit)=\"onSubmit()\">\n          <div class=\"form-group\">\n            <label for=\"inputEmail3\" class=\"col-sm-2 col-form-label\">Name</label>\n            <div class=\"col-sm-10\">\n              <input type=\"email\" class=\"form-control\" name=\"name\"\n              [(ngModel)]=\"document.filename\" placeholder=\"Document Name\">\n            </div>\n          </div>\n          <div class=\"form-group\">\n              <label class=\"col-sm-4 col-form-label\">Description</label>\n              <div class=\"col-sm-10\">\n                <textarea name=\"description\" [(ngModel)]=\"document.description\" cols=\"30\" rows=\"10\"\n                class=\"form-control\" placeholder=\"Describe document\" required></textarea>\n              </div>\n          </div>\n          <div class=\"form-group\">\n            <label for=\"exampleFormControlFile1\" class=\"col-sm-4 col-form-label\">Upload Document</label>\n            <div class=\"col-sm-8\">\n                <input type=\"file\" class=\"form-control-file\" ng2FileSelect [uploader]=\"uploader\"\n                 name=\"file\">\n            </div>\n          </div>\n          <div class=\"form-group\">\n            <div class=\"col-sm-4\">\n                <button class=\"btn btn-primary\" [disabled]=\"submitting || uploadInProgress || !responses?.length\">\n                  <span class=\"fa fa-spin fa-spinner\" *ngIf=\"submitting\"></span>\n                  Save\n                </button>\n            </div>\n          </div>\n      </form>\n      <div class=\"file\" *ngIf=\"responses[responses?.length -1]\">\n        <h3>{{responses[responses?.length -1]?.file.name}}</h3>\n        <ng-container *ngIf=\"!responses[responses?.length - 1].status\">\n        \n          <div class=\"status\">\n            Uploading... {{responses[responses?.length -1]?.progress}}%\n            <div *ngIf=\"!responses[responses?.length -1]?.status\">In progress</div>\n          </div>\n          <div class=\"progress-bar\">\n            <div class=\"progress\" role=\"progressbar\" [style.width.%]=\"responses[responses?.length -1]?.progress\"></div>\n          </div>\n        </ng-container>\n        <div class=\"info\">\n          <table>\n            <tr *ngIf=\"responses[responses?.length -1]?.data?.pages\">\n              <td> Pages: </td>\n              <td> {{ responses[responses?.length -1]?.data?.pages }} </td>\n            </tr>\n          </table>\n        </div>\n      </div>\n  \n    </div>\n  </div>\n  <ng-template #loading>\n    <div class=\"screen--mask\">\n      <app-loader [size]=\"5\"></app-loader>\n    </div>\n  </ng-template>\n  \n</div>"

/***/ }),

/***/ "./node_modules/raw-loader/index.js!./src/app/documents/containers/list.component.html":
/*!************************************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/documents/containers/list.component.html ***!
  \************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"my-5\">\n    <div class=\"w-100 px-4 my-2 d-flex\" style=\"justify-content: flex-end\"\n    [ngClass]=\"{'d-none': loading }\">\n        <a routerLink=\"new\">&#x0002B; Document</a>\n    </div>\n    <div class=\"table-responsive\">\n        <table class=\"table table-striped\" *ngIf=\"documents?.length\">\n            <thead>\n                <tr>\n                    <th>#</th>\n                    <th>Name</th>\n                    <th></th>\n                    <!-- TODO copy public link -->\n                </tr>\n            </thead>\n            <tbody>\n                <tr *ngFor=\"let doc of documents; let index = index\">\n                    <td>{{ index + 1 }}</td>\n                    <td>{{ doc.filename }}</td>\n                    <td>\n                        <a href=\"{{doc.link}}\" target=\"_blank\">Preview</a>\n                    </td>\n                </tr>\n            </tbody>\n        </table>\n    </div>\n    <div class=\"screen--mask\" *ngIf=\"!documents?.length || loading\">\n        <p class=\"lead\" *ngIf=\"!documents?.length && documents\">\n            No Documents yet. Add &nbsp; <a routerLink=\"new\">here</a>\n        </p>\n        <app-loader [size]=\"5\" *ngIf=\"loading\"></app-loader>\n    </div>\n</div>"

/***/ }),

/***/ "./node_modules/webpack/buildin/module.js":
/*!***********************************!*\
  !*** (webpack)/buildin/module.js ***!
  \***********************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = function(module) {
	if (!module.webpackPolyfill) {
		module.deprecate = function() {};
		module.paths = [];
		// module.parent = undefined by default
		if (!module.children) module.children = [];
		Object.defineProperty(module, "loaded", {
			enumerable: true,
			get: function() {
				return module.l;
			}
		});
		Object.defineProperty(module, "id", {
			enumerable: true,
			get: function() {
				return module.i;
			}
		});
		module.webpackPolyfill = 1;
	}
	return module;
};


/***/ }),

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
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! rxjs */ "./node_modules/rxjs/_esm5/index.js");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! rxjs/operators */ "./node_modules/rxjs/_esm5/operators/index.js");
/* harmony import */ var _services__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../services */ "./src/app/documents/services/index.ts");
/* harmony import */ var _shared_interfaces__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @shared/interfaces */ "./src/app/shared/interfaces/index.ts");
/* harmony import */ var ng2_file_upload__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ng2-file-upload */ "./node_modules/ng2-file-upload/index.js");
/* harmony import */ var ng2_file_upload__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(ng2_file_upload__WEBPACK_IMPORTED_MODULE_7__);
/* harmony import */ var _cloudinary_angular_5_x__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @cloudinary/angular-5.x */ "./node_modules/@cloudinary/angular-5.x/index.js");
/* harmony import */ var _cloudinary_angular_5_x__WEBPACK_IMPORTED_MODULE_8___default = /*#__PURE__*/__webpack_require__.n(_cloudinary_angular_5_x__WEBPACK_IMPORTED_MODULE_8__);









var CreateUpdateComponent = /** @class */ (function () {
    function CreateUpdateComponent(_actRoute, _router, _docSvc, cloudinary, zone) {
        this._actRoute = _actRoute;
        this._router = _router;
        this._docSvc = _docSvc;
        this.cloudinary = cloudinary;
        this.zone = zone;
        this.responses = [];
    }
    Object.defineProperty(CreateUpdateComponent.prototype, "uploadInProgress", {
        get: function () {
            return this.responses.some(function (r) { return !r.status; });
        },
        enumerable: true,
        configurable: true
    });
    CreateUpdateComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.setUpCloudinaryUploader();
        this._actRoute.data.pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["switchMap"])(function (data) {
            _this.editing = !!data.edit;
            return Object(rxjs__WEBPACK_IMPORTED_MODULE_3__["iif"])(function () { return _this.editing; }, _this.getDocument(), Object(rxjs__WEBPACK_IMPORTED_MODULE_3__["of"])(new _shared_interfaces__WEBPACK_IMPORTED_MODULE_6__["Document"]()));
        }), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["tap"])(function (doc) { return _this.document = doc; }), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["catchError"])(function (err) { return _this.handleError(err); })).subscribe();
    };
    CreateUpdateComponent.prototype.getDocument = function () {
        var _this = this;
        return this._actRoute.paramMap.pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["switchMap"])(function (params) {
            if (isNaN(+params.get('documentId'))) {
                throw new Error('Invalid document identifier');
            }
            else {
                return _this._docSvc.getDocumentById(+params.get('documentId'));
            }
        }));
    };
    CreateUpdateComponent.prototype.handleError = function (err) {
        // show error in UI
        // TODO (oneeyedsunday) move this to shared since its similar
        return Object(rxjs__WEBPACK_IMPORTED_MODULE_3__["throwError"])(err);
    };
    CreateUpdateComponent.prototype.onSubmit = function () {
        if (this.submitting) {
            return;
        }
        this.submitting = true;
        var data = this.responses[this.responses.length - 1];
        this.document.link = data.data.secure_url || data.data.url;
        this.editing ? this.updateDocument() : this.createDocument();
    };
    CreateUpdateComponent.prototype.createDocument = function () {
        var _this = this;
        this._docSvc.addDocument(this.document)
            .subscribe(function (res) {
            // use toast service here
            // url of file and name?
            _this._router.navigate(['/documents']); // remove this? and just reste form
        }, function () { return _this.submitting = false; });
    };
    CreateUpdateComponent.prototype.updateDocument = function () {
    };
    CreateUpdateComponent.prototype.setUpCloudinaryUploader = function () {
        var _this = this;
        var uploaderOptions = {
            url: "https://api.cloudinary.com/v1_1/" + this.cloudinary.config().cloud_name + "/upload",
            // Upload files automatically upon addition to upload queue
            autoUpload: true,
            // Use xhrTransport in favor of iframeTransport
            isHTML5: true,
            // Calculate progress independently for each uploaded file
            removeAfterUpload: true,
            // XHR request headers
            headers: [
                {
                    name: 'X-Requested-With',
                    value: 'XMLHttpRequest'
                }
            ]
        };
        this.uploader = new ng2_file_upload__WEBPACK_IMPORTED_MODULE_7__["FileUploader"](uploaderOptions);
        this.uploader.onBuildItemForm = function (fileItem, form) {
            // Add Cloudinary unsigned upload preset to the upload form
            form.append('upload_preset', _this.cloudinary.config().upload_preset);
            // Add file to upload
            form.append('file', fileItem);
            form.append('tags', 'document');
            // Use default "withCredentials" value for CORS requests
            fileItem.withCredentials = false;
            return { fileItem: fileItem, form: form };
        };
        var upsertResponse = function (fileItem) {
            // Run the update in a custom zone since for some reason change detection isn't performed
            // as part of the XHR request to upload the files.
            // Running in a custom zone forces change detection
            _this.zone.run(function () {
                // Update an existing entry if it's upload hasn't completed yet
                // Find the id of an existing item
                var existingId = _this.responses.reduce(function (prev, current, index) {
                    if (current.file.name === fileItem.file.name && !current.status) {
                        return index;
                    }
                    return prev;
                }, -1);
                if (existingId > -1) {
                    // Update existing item with new data
                    _this.responses[existingId] = Object.assign(_this.responses[existingId], fileItem);
                }
                else {
                    // Create new response
                    _this.responses.push(fileItem);
                }
            });
        };
        this.uploader.onCompleteItem = function (item, response, status, headers) {
            return upsertResponse({
                file: item.file,
                status: status,
                data: JSON.parse(response)
            });
        };
        this.uploader.onProgressItem = function (fileItem, progress) {
            return upsertResponse({
                file: fileItem.file,
                progress: progress,
                data: {}
            });
        };
    };
    CreateUpdateComponent.prototype.fileOverBase = function (e) {
        this.hasBaseDropZoneOver = e;
    };
    CreateUpdateComponent.ctorParameters = function () { return [
        { type: _angular_router__WEBPACK_IMPORTED_MODULE_2__["ActivatedRoute"] },
        { type: _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"] },
        { type: _services__WEBPACK_IMPORTED_MODULE_5__["DocumentService"] },
        { type: _cloudinary_angular_5_x__WEBPACK_IMPORTED_MODULE_8__["Cloudinary"] },
        { type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["NgZone"] }
    ]; };
    CreateUpdateComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-documents-create-update',
            template: __webpack_require__(/*! raw-loader!./create-update.component.html */ "./node_modules/raw-loader/index.js!./src/app/documents/containers/create-update.component.html")
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_router__WEBPACK_IMPORTED_MODULE_2__["ActivatedRoute"],
            _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"],
            _services__WEBPACK_IMPORTED_MODULE_5__["DocumentService"],
            _cloudinary_angular_5_x__WEBPACK_IMPORTED_MODULE_8__["Cloudinary"],
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["NgZone"]])
    ], CreateUpdateComponent);
    return CreateUpdateComponent;
}());



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




var containers = [
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
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _services__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../services */ "./src/app/documents/services/index.ts");



var ListComponent = /** @class */ (function () {
    function ListComponent(_docSvc) {
        this._docSvc = _docSvc;
    }
    ListComponent.prototype.ngOnInit = function () {
        this.loading = true;
        this.getDocuments();
    };
    ListComponent.prototype.getDocuments = function () {
        var _this = this;
        this._docSvc.fetchDocuments()
            .subscribe(function (docs) { return _this.documents = docs; }, function () { _this.loading = false; }, function () { return _this.loading = false; });
    };
    ListComponent.ctorParameters = function () { return [
        { type: _services__WEBPACK_IMPORTED_MODULE_2__["DocumentService"] }
    ]; };
    ListComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-documents-list',
            template: __webpack_require__(/*! raw-loader!./list.component.html */ "./node_modules/raw-loader/index.js!./src/app/documents/containers/list.component.html")
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_services__WEBPACK_IMPORTED_MODULE_2__["DocumentService"]])
    ], ListComponent);
    return ListComponent;
}());



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
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");


var ViewComponent = /** @class */ (function () {
    function ViewComponent() {
    }
    ViewComponent.prototype.ngOnInit = function () {
    };
    ViewComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-documents-view',
            template: ''
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [])
    ], ViewComponent);
    return ViewComponent;
}());



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
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _containers__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./containers */ "./src/app/documents/containers/index.ts");




var routes = [
    { path: 'new', component: _containers__WEBPACK_IMPORTED_MODULE_3__["CreateUpdateComponent"], data: { edit: false } },
    { path: '', component: _containers__WEBPACK_IMPORTED_MODULE_3__["ListComponent"] },
    { path: '/:documentId/edit', component: _containers__WEBPACK_IMPORTED_MODULE_3__["CreateUpdateComponent"], data: { edit: true } },
    { path: '/:documentId', component: _containers__WEBPACK_IMPORTED_MODULE_3__["ViewComponent"] },
];
// TODO() new doc -> upload, rich text
var DocumentsRoutingModule = /** @class */ (function () {
    function DocumentsRoutingModule() {
    }
    DocumentsRoutingModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)],
            exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]]
        })
    ], DocumentsRoutingModule);
    return DocumentsRoutingModule;
}());



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
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var ngx_quill__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ngx-quill */ "./node_modules/ngx-quill/fesm5/ngx-quill.js");
/* harmony import */ var _services__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./services */ "./src/app/documents/services/index.ts");
/* harmony import */ var _containers__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./containers */ "./src/app/documents/containers/index.ts");
/* harmony import */ var _documents_routing_module__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./documents-routing.module */ "./src/app/documents/documents-routing.module.ts");
/* harmony import */ var _shared_shared_module__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @shared/shared.module */ "./src/app/shared/shared.module.ts");
/* harmony import */ var ng2_file_upload__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ng2-file-upload */ "./node_modules/ng2-file-upload/index.js");
/* harmony import */ var ng2_file_upload__WEBPACK_IMPORTED_MODULE_9___default = /*#__PURE__*/__webpack_require__.n(ng2_file_upload__WEBPACK_IMPORTED_MODULE_9__);
/* harmony import */ var _cloudinary_angular_5_x__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @cloudinary/angular-5.x */ "./node_modules/@cloudinary/angular-5.x/index.js");
/* harmony import */ var _cloudinary_angular_5_x__WEBPACK_IMPORTED_MODULE_10___default = /*#__PURE__*/__webpack_require__.n(_cloudinary_angular_5_x__WEBPACK_IMPORTED_MODULE_10__);
/* harmony import */ var cloudinary_core__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! cloudinary-core */ "./node_modules/cloudinary-core/cloudinary-core.js");
/* harmony import */ var cloudinary_core__WEBPACK_IMPORTED_MODULE_11___default = /*#__PURE__*/__webpack_require__.n(cloudinary_core__WEBPACK_IMPORTED_MODULE_11__);
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ../../environments/environment */ "./src/environments/environment.ts");













var DocumentsModule = /** @class */ (function () {
    function DocumentsModule() {
    }
    DocumentsModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            declarations: tslib__WEBPACK_IMPORTED_MODULE_0__["__spread"](_containers__WEBPACK_IMPORTED_MODULE_6__["containers"]),
            imports: [
                _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_3__["ReactiveFormsModule"],
                ngx_quill__WEBPACK_IMPORTED_MODULE_4__["QuillModule"].forRoot(),
                _documents_routing_module__WEBPACK_IMPORTED_MODULE_7__["DocumentsRoutingModule"],
                ng2_file_upload__WEBPACK_IMPORTED_MODULE_9__["FileUploadModule"],
                _cloudinary_angular_5_x__WEBPACK_IMPORTED_MODULE_10__["CloudinaryModule"].forRoot(cloudinary_core__WEBPACK_IMPORTED_MODULE_11__, _environments_environment__WEBPACK_IMPORTED_MODULE_12__["AppConfig"].CLOUDINARY),
                _shared_shared_module__WEBPACK_IMPORTED_MODULE_8__["SharedModule"]
            ],
            providers: tslib__WEBPACK_IMPORTED_MODULE_0__["__spread"](_services__WEBPACK_IMPORTED_MODULE_5__["services"])
        })
    ], DocumentsModule);
    return DocumentsModule;
}());



/***/ }),

/***/ "./src/app/documents/services/documents.service.ts":
/*!*********************************************************!*\
  !*** ./src/app/documents/services/documents.service.ts ***!
  \*********************************************************/
/*! exports provided: DocumentService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DocumentService", function() { return DocumentService; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../environments/environment */ "./src/environments/environment.ts");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");
/* harmony import */ var _shared_http_error_handler_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @shared/http-error-handler.service */ "./src/app/shared/http-error-handler.service.ts");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! rxjs/operators */ "./node_modules/rxjs/_esm5/operators/index.js");
/* harmony import */ var _shared_auth__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @shared/auth */ "./src/app/shared/auth/index.ts");







var DocumentService = /** @class */ (function () {
    function DocumentService(http, auth, httpErrorHandler) {
        this.http = http;
        this.auth = auth;
        this.url = _environments_environment__WEBPACK_IMPORTED_MODULE_2__["AppConfig"].API_URL;
        this.handleError = httpErrorHandler.createHandleError('Documents');
    }
    DocumentService.prototype.fetchDocuments = function () {
        return this.http.get(this.url + '/process/document')
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_5__["map"])(function (response) { return response; }), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_5__["catchError"])(this.handleError('Fetch Documnets', null)));
    };
    DocumentService.prototype.getDocumentById = function (identifier) {
        return this.http.get(this.url + '/process/document/' + identifier).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_5__["map"])(function (response) { return response; }), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_5__["catchError"])(this.handleError('Fetch Document', null)));
    };
    DocumentService.prototype.addDocument = function (document) {
        // TODO update organization
        var formData = new FormData();
        formData.append('link', document.link);
        formData.append('organization', '1');
        formData.append('user', this.auth.currentUserValue.id);
        formData.append('filename', document.filename);
        formData.append('description', document.description);
        return this.http.post(this.url + '/process/document/', formData);
    };
    DocumentService.ctorParameters = function () { return [
        { type: _angular_common_http__WEBPACK_IMPORTED_MODULE_3__["HttpClient"] },
        { type: _shared_auth__WEBPACK_IMPORTED_MODULE_6__["AuthService"] },
        { type: _shared_http_error_handler_service__WEBPACK_IMPORTED_MODULE_4__["HttpErrorHandler"] }
    ]; };
    DocumentService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])(),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_common_http__WEBPACK_IMPORTED_MODULE_3__["HttpClient"],
            _shared_auth__WEBPACK_IMPORTED_MODULE_6__["AuthService"],
            _shared_http_error_handler_service__WEBPACK_IMPORTED_MODULE_4__["HttpErrorHandler"]])
    ], DocumentService);
    return DocumentService;
}());



/***/ }),

/***/ "./src/app/documents/services/index.ts":
/*!*********************************************!*\
  !*** ./src/app/documents/services/index.ts ***!
  \*********************************************/
/*! exports provided: services, DocumentService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "services", function() { return services; });
/* harmony import */ var _documents_service__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./documents.service */ "./src/app/documents/services/documents.service.ts");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "DocumentService", function() { return _documents_service__WEBPACK_IMPORTED_MODULE_0__["DocumentService"]; });


var services = [
    _documents_service__WEBPACK_IMPORTED_MODULE_0__["DocumentService"]
];



/***/ })

}]);
//# sourceMappingURL=documents-documents-module-es5.js.map