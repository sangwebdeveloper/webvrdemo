webpackJsonp([0,4],{

/***/ 266:
/***/ function(module, exports, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_rxjs_observable_TimerObservable__ = __webpack_require__(309);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_rxjs_observable_TimerObservable___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_rxjs_observable_TimerObservable__);
/* harmony export (binding) */ __webpack_require__.d(exports, "a", function() { return AppComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var AppComponent = (function () {
    function AppComponent(ref) {
        this.cuePointData = {};
        this.hideTitle = true;
        this.videos = [
            {
                id: 'v0',
                url: 'http://static.videogular.com/assets/videos/vr-route-0.mp4',
                track: 'assets/data/stage-1.vtt',
                doors: [
                    { id: 'd1', position: '-3 2 -10', rotation: '0 0 0', goto: 'v1' }
                ],
                texts: [],
                textPlanes: []
            },
            {
                id: 'v1',
                url: 'http://static.videogular.com/assets/videos/vr-route-1.mp4',
                track: 'assets/data/stage-2.vtt',
                doors: [
                    { id: 'd1', position: '-15 -3 -18', rotation: '0 -180 0', goto: 'v0' },
                    { id: 'd2', position: '8 1 9', rotation: '0 -130 0', goto: 'v2' }
                ],
                texts: [
                    {
                        id: 't1',
                        text: 'text: St. Maurici lake',
                        position: '6 0 -4',
                        rotation: '0 -30 0',
                        scale: '2 2 2',
                        opaAnim: 'startEvents: t1; property: opacity; dur: 300; from: 0; to: 1; elasticity: 1000',
                        posAnim: 'startEvents: t1; property: position; dur: 500; from: 6 0 -4; to: 6 0.3 -4; elasticity: 1000'
                    }
                ],
                textPlanes: [
                    { id: 'p1', position: '17 0 -7', rotation: '-90 -30 0', width: 20, height: 20, target: 't1', isShown: false }
                ]
            },
            {
                id: 'v2',
                url: 'http://static.videogular.com/assets/videos/vr-route-2.mp4',
                track: 'assets/data/stage-3.vtt',
                doors: [
                    { id: 'd1', position: '-1 1 -8', rotation: '0 -30 0', goto: 'v1' },
                    { id: 'd2', position: '0 2 7', rotation: '0 180 0', goto: 'v3' }
                ],
                texts: [],
                textPlanes: []
            },
            {
                id: 'v3',
                url: 'http://static.videogular.com/assets/videos/vr-route-3.mp4',
                track: 'assets/data/stage-4.vtt',
                doors: [
                    { id: 'd1', position: '-5 2 7', rotation: '0 130 0', goto: 'v2' },
                    { id: 'd2', position: '3 4 7', rotation: '0 210 0', goto: 'v4' }
                ],
                texts: [],
                textPlanes: []
            },
            {
                id: 'v4',
                url: 'http://static.videogular.com/assets/videos/vr-route-4.mp4',
                track: 'assets/data/stage-5.vtt',
                doors: [
                    { id: 'd1', position: '2 1 10', rotation: '0 180 0', goto: 'v3' },
                    { id: 'd2', position: '3 2 -10', rotation: '0 180 0', goto: 'v0' }
                ],
                texts: [
                    {
                        id: 't1',
                        text: 'Ratera lake',
                        position: '9 0 -7',
                        rotation: '0 -90 0',
                        scale: '2 2 2',
                        opaAnim: 'startEvents: t1; property: opacity; dur: 300; from: 0; to: 1; elasticity: 1000',
                        posAnim: 'startEvents: t1; property: position; dur: 500; from: 9 0 -7; to: 9 0.6 -7; elasticity: 1000'
                    }
                ],
                textPlanes: [
                    { id: 'p1', position: '17 0 -7', rotation: '-90 0 0', width: 20, height: 40, target: 't1', isShown: false }
                ]
            }
        ];
        this.elem = ref.nativeElement;
        this.currentVideo = this.videos[0];
    }
    AppComponent.prototype.ngOnInit = function () {
        this.aframe = this.elem.querySelector('a-scene');
    };
    AppComponent.prototype.onAframeRenderStart = function () {
        var media = this.vgApi.getDefaultMedia();
        if (media.isMetadataLoaded) {
            this.displayDoors();
        }
    };
    AppComponent.prototype.onPlayerReady = function (api) {
        this.vgApi = api;
        var media = api.getDefaultMedia();
        if (media.isMetadataLoaded) {
            this.displayDoors();
        }
        media.subscriptions.loadedMetadata.subscribe(this.displayDoors.bind(this));
    };
    AppComponent.prototype.displayDoors = function () {
        Array.from(document.querySelectorAll('a-image'))
            .forEach(function (item) { return item.dispatchEvent(new CustomEvent('vgStartFadeInAnimation')); });
    };
    AppComponent.prototype.onMouseEnterPlane = function (plane) {
        if (!plane.isShown) {
            var target = document.querySelector('#' + plane.target);
            target.dispatchEvent(new CustomEvent(plane.target));
            plane.isShown = true;
        }
    };
    AppComponent.prototype.onMouseEnter = function ($event, door) {
        var _this = this;
        console.log(door);
        $event.target.dispatchEvent(new CustomEvent('vgStartAnimation'));
        this.timeout = __WEBPACK_IMPORTED_MODULE_1_rxjs_observable_TimerObservable__["TimerObservable"].create(2000).subscribe(function () {
            _this.currentVideo = _this.videos.filter(function (v) { return v.id === door.goto; })[0];
        });
    };
    AppComponent.prototype.onMouseLeave = function ($event) {
        $event.target.dispatchEvent(new CustomEvent('vgPauseAnimation'));
        // Send start and pause again to reset the scale and opacity
        $event.target.dispatchEvent(new CustomEvent('vgStartAnimation'));
        $event.target.dispatchEvent(new CustomEvent('vgPauseAnimation'));
        this.timeout.unsubscribe();
    };
    AppComponent.prototype.onEnterCuePoint = function ($event) {
        this.hideTitle = false;
        this.cuePointData = JSON.parse($event.text);
    };
    AppComponent.prototype.onExitCuePoint = function ($event) {
        var _this = this;
        this.hideTitle = true;
        // wait transition
        __WEBPACK_IMPORTED_MODULE_1_rxjs_observable_TimerObservable__["TimerObservable"].create(500).subscribe(function () { _this.cuePointData = {}; });
    };
    AppComponent.prototype.ngOnDestroy = function () {
        this.timeout.unsubscribe();
    };
    AppComponent.prototype.test = function (evt) {
        console.log(evt);
    };
    AppComponent = __decorate([
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'app-root',
            template: __webpack_require__(572),
            styles: [__webpack_require__(571)]
        }), 
        __metadata('design:paramtypes', [(typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_0__angular_core__["ElementRef"] !== 'undefined' && __WEBPACK_IMPORTED_MODULE_0__angular_core__["ElementRef"]) === 'function' && _a) || Object])
    ], AppComponent);
    return AppComponent;
    var _a;
}());
//# sourceMappingURL=/www/sites/videogular2-starter/src/app.component.js.map

/***/ },

/***/ 315:
/***/ function(module, exports) {

function webpackEmptyContext(req) {
	throw new Error("Cannot find module '" + req + "'.");
}
webpackEmptyContext.keys = function() { return []; };
webpackEmptyContext.resolve = webpackEmptyContext;
module.exports = webpackEmptyContext;
webpackEmptyContext.id = 315;


/***/ },

/***/ 316:
/***/ function(module, exports, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__polyfills_ts__ = __webpack_require__(419);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__polyfills_ts___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0__polyfills_ts__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_platform_browser_dynamic__ = __webpack_require__(396);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__environments_environment__ = __webpack_require__(418);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__app___ = __webpack_require__(417);





if (__WEBPACK_IMPORTED_MODULE_3__environments_environment__["a" /* environment */].production) {
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_2__angular_core__["enableProdMode"])();
}
__webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1__angular_platform_browser_dynamic__["a" /* platformBrowserDynamic */])().bootstrapModule(__WEBPACK_IMPORTED_MODULE_4__app___["a" /* AppModule */]);
//# sourceMappingURL=/www/sites/videogular2-starter/src/main.js.map

/***/ },

/***/ 416:
/***/ function(module, exports, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser__ = __webpack_require__(256);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__app_component__ = __webpack_require__(266);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_videogular2_core__ = __webpack_require__(600);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_videogular2_core___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_3_videogular2_core__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_videogular2_controls__ = __webpack_require__(599);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_videogular2_controls___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_4_videogular2_controls__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_videogular2_buffering__ = __webpack_require__(598);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_videogular2_buffering___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_5_videogular2_buffering__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6_videogular2_overlay_play__ = __webpack_require__(601);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6_videogular2_overlay_play___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_6_videogular2_overlay_play__);
/* harmony export (binding) */ __webpack_require__.d(exports, "a", function() { return AppModule; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};







var AppModule = (function () {
    function AppModule() {
    }
    AppModule = __decorate([
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1__angular_core__["NgModule"])({
            declarations: [
                __WEBPACK_IMPORTED_MODULE_2__app_component__["a" /* AppComponent */]
            ],
            imports: [
                __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser__["b" /* BrowserModule */],
                __WEBPACK_IMPORTED_MODULE_3_videogular2_core__["VgCoreModule"],
                __WEBPACK_IMPORTED_MODULE_4_videogular2_controls__["VgControlsModule"],
                __WEBPACK_IMPORTED_MODULE_5_videogular2_buffering__["VgBufferingModule"],
                __WEBPACK_IMPORTED_MODULE_6_videogular2_overlay_play__["VgOverlayPlayModule"]
            ],
            providers: [],
            bootstrap: [__WEBPACK_IMPORTED_MODULE_2__app_component__["a" /* AppComponent */]],
            schemas: [__WEBPACK_IMPORTED_MODULE_1__angular_core__["CUSTOM_ELEMENTS_SCHEMA"]]
        }), 
        __metadata('design:paramtypes', [])
    ], AppModule);
    return AppModule;
}());
//# sourceMappingURL=/www/sites/videogular2-starter/src/app.module.js.map

/***/ },

/***/ 417:
/***/ function(module, exports, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__app_component__ = __webpack_require__(266);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__app_module__ = __webpack_require__(416);
/* unused harmony namespace reexport */
/* harmony namespace reexport (by used) */ __webpack_require__.d(exports, "a", function() { return __WEBPACK_IMPORTED_MODULE_1__app_module__["a"]; });


//# sourceMappingURL=/www/sites/videogular2-starter/src/index.js.map

/***/ },

/***/ 418:
/***/ function(module, exports, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(exports, "a", function() { return environment; });
// The file contents for the current environment will overwrite these during build.
// The build system defaults to the dev environment which uses `environment.ts`, but if you do
// `ng build --env=prod` then `environment.prod.ts` will be used instead.
// The list of which env maps to which file can be found in `angular-cli.json`.
var environment = {
    production: false
};
//# sourceMappingURL=/www/sites/videogular2-starter/src/environment.js.map

/***/ },

/***/ 419:
/***/ function(module, exports, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_core_js_es6_symbol__ = __webpack_require__(433);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_core_js_es6_symbol___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_core_js_es6_symbol__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_core_js_es6_object__ = __webpack_require__(426);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_core_js_es6_object___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_core_js_es6_object__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_core_js_es6_function__ = __webpack_require__(422);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_core_js_es6_function___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_core_js_es6_function__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_core_js_es6_parse_int__ = __webpack_require__(428);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_core_js_es6_parse_int___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_3_core_js_es6_parse_int__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_core_js_es6_parse_float__ = __webpack_require__(427);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_core_js_es6_parse_float___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_4_core_js_es6_parse_float__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_core_js_es6_number__ = __webpack_require__(425);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_core_js_es6_number___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_5_core_js_es6_number__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6_core_js_es6_math__ = __webpack_require__(424);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6_core_js_es6_math___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_6_core_js_es6_math__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7_core_js_es6_string__ = __webpack_require__(432);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7_core_js_es6_string___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_7_core_js_es6_string__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8_core_js_es6_date__ = __webpack_require__(421);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8_core_js_es6_date___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_8_core_js_es6_date__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9_core_js_es6_array__ = __webpack_require__(420);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9_core_js_es6_array___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_9_core_js_es6_array__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10_core_js_es6_regexp__ = __webpack_require__(430);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10_core_js_es6_regexp___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_10_core_js_es6_regexp__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_11_core_js_es6_map__ = __webpack_require__(423);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_11_core_js_es6_map___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_11_core_js_es6_map__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_12_core_js_es6_set__ = __webpack_require__(431);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_12_core_js_es6_set___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_12_core_js_es6_set__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_13_core_js_es6_reflect__ = __webpack_require__(429);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_13_core_js_es6_reflect___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_13_core_js_es6_reflect__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_14_core_js_es7_reflect__ = __webpack_require__(434);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_14_core_js_es7_reflect___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_14_core_js_es7_reflect__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_15_zone_js_dist_zone__ = __webpack_require__(93);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_15_zone_js_dist_zone___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_15_zone_js_dist_zone__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_16_reflect_metadata__ = __webpack_require__(130);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_16_reflect_metadata___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_16_reflect_metadata__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_17_zone_js_dist_long_stack_trace_zone__ = __webpack_require__(620);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_17_zone_js_dist_long_stack_trace_zone___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_17_zone_js_dist_long_stack_trace_zone__);



















//# sourceMappingURL=/www/sites/videogular2-starter/src/polyfills.js.map

/***/ },

/***/ 571:
/***/ function(module, exports) {

module.exports = ".title {\n    position: absolute;\n    color: white;\n    z-index: 500;\n    font-size: 60px;\n    background: black;\n    padding: 10px;\n    margin: 10px;\n    opacity: 0.5;\n    font-family: Helvetica, Arial, sans-serif;\n    -webkit-transition: all 0.5s ease;\n    transition: all 0.5s ease;\n\n}\n\n\n.title.hide {\n     opacity: 0;\n }\n"

/***/ },

/***/ 572:
/***/ function(module, exports) {

module.exports = "<vg-player (onPlayerReady)=\"onPlayerReady($event)\">\n    <div class=\"title\" [ngClass]=\"{ 'hide': hideTitle }\">{{ cuePointData.title }}</div>\n\n\n    <a-scene vr-mode-ui=\"enabled: true\" (renderstart)=\"onAframeRenderStart()\">\n        <a-assets>\n            <img id=\"ringImg\" src=\"assets/images/ring1.png\" width=\"512\" height=\"512\">\n            <video vgMedia #media id=\"video\" [src]=\"currentVideo.url\" preload=\"auto\" crossorigin=\"anonymous\" loop autoplay muted>\n                <track [src]=\"currentVideo.track\" kind=\"metadata\" label=\"Cue Points\" default\n                       #metadataTrack\n                       vgCuePoints\n                       (onEnterCuePoint)=\"onEnterCuePoint($event)\"\n                       (onExitCuePoint)=\"onExitCuePoint($event)\">\n            </video>\n\n        </a-assets>\n\n        <a-plane\n                *ngFor=\"let txtPlane of currentVideo.textPlanes; let i=index\"\n                [attr.depth]=\"i\"\n                [attr.rotation]=\"txtPlane.rotation\"\n                [attr.position]=\"txtPlane.position\"\n                [attr.width]=\"txtPlane.width\"\n                [attr.height]=\"txtPlane.height\"\n                (mouseenter)=\"onMouseEnterPlane(txtPlane)\">\n        </a-plane>\n        <a-entity\n                *ngFor=\"let txt of currentVideo.texts; let i=index\"\n                color=\"#FFF\"\n                [id]=\"txt.id\"\n                [attr.depth]=\"10 + i\"\n                [attr.position]=\"txt.position\"\n                [attr.rotation]=\"txt.rotation\"\n                [attr.scale]=\"txt.scale\"\n                [attr.bmfont-text]=\"txt.text\"\n                [attr.animation__visibility]=\"txt.opaAnim\"\n                [attr.animation__position]=\"txt.posAnim\"\n                opacity=\"0\"\n        ></a-entity>\n\n\n        <a-image\n                *ngFor=\"let door of currentVideo.doors; let i=index\"\n                [id]=\"door.id\"\n                [attr.depth]=\"100 + i\"\n                [attr.position]=\"door.position\"\n                [attr.rotation]=\"door.rotation\"\n                src=\"#ringImg\"\n                scale=\"0 0 0\"\n                class=\"link\"\n                (mouseenter)=\"onMouseEnter($event, door)\"\n                (mouseleave)=\"onMouseLeave($event)\"\n                animation__fadein=\"startEvents: vgStartFadeInAnimation; property: scale; dur: 2000; to: 1 1 1\"\n                animation__scale=\"startEvents: vgStartAnimation; pauseEvents: vgPauseAnimation; property: scale; dur: 2000; from: 1 1 1; to: 2 2 2\"\n                animation__visibility=\"startEvents: vgStartAnimation; pauseEvents: vgPauseAnimation; property: material.opacity; dur: 2000; from: 1; to: 0\"\n                sound=\"on: click; src: #click-sound\">\n        </a-image>\n\n        <a-videosphere src=\"#video\"></a-videosphere>\n\n\n        <a-entity camera look-controls>\n            <a-cursor id=\"cursor\"\n                      animation__click=\"property: scale; startEvents: click; from: 0.1 0.1 0.1; to: 1 1 1; dur: 150\"\n                      animation__fusing=\"property: fusing; startEvents: fusing; from: 1 1 1; to: 0.1 0.1 0.1; dur: 1500\"\n                      event-set__1=\"_event: mouseenter; color: springgreen\"\n                      event-set__2=\"_event: mouseleave; color: black\"\n                      raycaster=\"objects: .link\"></a-cursor>\n        </a-entity>\n    </a-scene>\n\n\n\n</vg-player>\n"

/***/ },

/***/ 621:
/***/ function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(316);


/***/ }

},[621]);
//# sourceMappingURL=main.bundle.map