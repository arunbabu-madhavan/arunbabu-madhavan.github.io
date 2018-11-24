(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["main"],{

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

/***/ "./src/app/about/about.component.css":
/*!*******************************************!*\
  !*** ./src/app/about/about.component.css ***!
  \*******************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".about-container{\r\n    margin-top:50px;\r\n    min-height: 900px;\r\n    display: flex;\r\n    flex-direction: column;\r\n    align-items: flex-start;\r\n}\r\n\r\n.about-container > * {\r\n    margin: 30pt 0pt;\r\n    -ms-grid-row-align: center;\r\n        align-self: center;\r\n   \r\n}\r\n\r\napp-experience,app-skills{\r\n    display: flex;\r\n    flex-direction: column;\r\n    justify-content: center;\r\n    align-items: center;\r\n    margin: 0 auto;\r\n    padding: 0 10px;\r\n    box-sizing: border-box;\r\n    font-family: 'Roboto','sans-serif';\r\n}\r\n\r\napp-skills{\r\n    position: -webkit-sticky;\r\n    position: sticky;\r\n    top: 50px;\r\n}\r\n\r\n@media screen and (min-width: 600px)\r\n{\r\napp-experience {\r\n    padding: 0 10px;\r\n}\r\n.about-container > * {\r\n    margin: 30pt;\r\n}\r\n\r\n.about-container > * {\r\n    -ms-grid-row-align: center;\r\n        align-self: center;\r\n    }\r\n\r\n\r\n@media screen and (min-width: 1500px)\r\n{\r\n    .about-container {\r\n        flex-direction: row;\r\n        margin: 30pt;\r\n        \r\n}\r\n\r\n.about-container > * {\r\n    -ms-grid-row-align: initial;\r\n        align-self: initial;\r\n    }\r\n\r\n\r\n}\r\n\r\n}"

/***/ }),

/***/ "./src/app/about/about.component.html":
/*!********************************************!*\
  !*** ./src/app/about/about.component.html ***!
  \********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\r\n<div class=\"about-container\">\r\n<app-experience></app-experience>\r\n<app-skills></app-skills>\r\n\r\n</div>\r\n<app-navigation-arrows   [nextPage]=\"['/projects']\" ></app-navigation-arrows>"

/***/ }),

/***/ "./src/app/about/about.component.ts":
/*!******************************************!*\
  !*** ./src/app/about/about.component.ts ***!
  \******************************************/
/*! exports provided: AboutComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AboutComponent", function() { return AboutComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var AboutComponent = /** @class */ (function () {
    function AboutComponent() {
    }
    AboutComponent.prototype.ngOnInit = function () {
    };
    AboutComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            template: __webpack_require__(/*! ./about.component.html */ "./src/app/about/about.component.html"),
            styles: [__webpack_require__(/*! ./about.component.css */ "./src/app/about/about.component.css")]
        }),
        __metadata("design:paramtypes", [])
    ], AboutComponent);
    return AboutComponent;
}());



/***/ }),

/***/ "./src/app/about/experience/experience.component.css":
/*!***********************************************************!*\
  !*** ./src/app/about/experience/experience.component.css ***!
  \***********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".experience-title{\r\n    font-size: 32px;\r\n    font-family: 'Roboto','sans-serif';\r\n    font-weight: 900;\r\n    text-align: center;\r\n}\r\n\r\n.experience-title > p::before{\r\n    display: none;\r\n}\r\n\r\n.experience-title > p::after{\r\n    content: \" \";\r\n    background-color: #000;\r\n    width: 350px;\r\n    height: 3px;\r\n    display: inline-block;\r\n    position: relative;\r\n    top: -8px;\r\n    margin-right: 12px;\r\n    margin-left: 12px;\r\n}\r\n\r\n.experience-item{\r\n    display: flex;\r\n    flex-direction: column;\r\n    margin-top: 45px;\r\n    line-height: 23px;\r\n}\r\n\r\n.experience-info{\r\n    margin-top: 30px;\r\n    padding: 15px;\r\n    padding-top: 0px;\r\n    margin-left: 0;\r\n}\r\n\r\n.experience-image img{\r\n    border-radius: 10px;\r\n    background-color: #eee;\r\n    box-shadow:0px 2px 3px 5px #ccc;\r\n    width: 350px;\r\n\r\n}\r\n\r\n.experience-image{\r\n    -ms-grid-row-align: center;\r\n        align-self: center;\r\n}\r\n\r\n.company-name{\r\n    font-size: 24px;\r\n    color: #04C2C9;\r\n    font-weight: 400;\r\n}\r\n\r\n.position{\r\n    font-size: 16px;\r\n    font-weight: 600;\r\n}\r\n\r\n.position > span{\r\n font-style: italic;\r\n}\r\n\r\n.location{\r\n    font-size: 15px;\r\n    font-weight: 700;\r\n}\r\n\r\n.experience-info > div{\r\n    margin-bottom:5pt;\r\n}\r\n\r\n.summary{\r\n    line-height: 20pt;\r\n}\r\n\r\n@media screen and (min-width: 850px)\r\n{\r\n\r\n.experience-title > p::before, \r\n.experience-title > p::after{\r\ncontent: \" \";\r\nbackground-color: #000;\r\nwidth: 100px;\r\nheight: 3px;\r\ndisplay: inline-block;\r\nposition: relative;\r\ntop: -8px;\r\nmargin-right: 12px;\r\nmargin-left: 12px;\r\n}\r\n\r\n.experience-item{\r\n  \r\n    flex-direction: row;\r\n    \r\n}\r\n\r\n.experience-info{\r\n    margin-top: 0px;\r\n    margin-left: 30px;\r\n}\r\n\r\n}"

/***/ }),

/***/ "./src/app/about/experience/experience.component.html":
/*!************************************************************!*\
  !*** ./src/app/about/experience/experience.component.html ***!
  \************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"experience-title\"><p>My career so far</p></div>\r\n<div class=\"experience-list-container\">\r\n<div class=\"experience-item\" *ngFor=\"let experience of experiences\">\r\n    <div class=\"experience-image\"><img [alt]=\"experience.companyName\" [src]=\"experience.imagePath\"></div>\r\n    <div class=\"experience-info\">\r\n      <div class=\"company-name\">{{ experience.companyName }}</div>\r\n      <ng-container *ngFor=\"let position of experience.positions\">\r\n      <div class=\"position\">{{ position.designation }}<span>, {{position.timePeriod}}</span></div>\r\n      <div class=\"location\">{{ experience.location }}</div>\r\n      <div class=\"summary\">{{ position.summary }}</div>\r\n      </ng-container>\r\n    </div>\r\n</div>\r\n</div>"

/***/ }),

/***/ "./src/app/about/experience/experience.component.ts":
/*!**********************************************************!*\
  !*** ./src/app/about/experience/experience.component.ts ***!
  \**********************************************************/
/*! exports provided: ExperienceComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ExperienceComponent", function() { return ExperienceComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var src_app_data_data_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! src/app/data/data.service */ "./src/app/data/data.service.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var ExperienceComponent = /** @class */ (function () {
    function ExperienceComponent(dataService) {
        this.dataService = dataService;
    }
    ExperienceComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.dataService.getExperience()
            .subscribe(function (x) { _this.experiences = x; });
    };
    ExperienceComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-experience',
            template: __webpack_require__(/*! ./experience.component.html */ "./src/app/about/experience/experience.component.html"),
            styles: [__webpack_require__(/*! ./experience.component.css */ "./src/app/about/experience/experience.component.css")]
        }),
        __metadata("design:paramtypes", [src_app_data_data_service__WEBPACK_IMPORTED_MODULE_1__["DataService"]])
    ], ExperienceComponent);
    return ExperienceComponent;
}());



/***/ }),

/***/ "./src/app/about/skills/skills.component.css":
/*!***************************************************!*\
  !*** ./src/app/about/skills/skills.component.css ***!
  \***************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".skills-title{\r\n    font-size: 32px;\r\n    font-family: 'Roboto','sans-serif';\r\n    font-weight: 900;\r\n    text-align: center;\r\n}\r\n\r\n.skills-title > p::before{\r\n    display: none;\r\n}\r\n\r\nprogress{\r\n    width: 180pt;\r\n    height: 4pt;\r\n    -webkit-appearance: none;\r\n    -moz-appearance: none;\r\n         appearance: none;\r\n}\r\n\r\n.skills-title > p::after{\r\n    content: \" \";\r\n    background-color: #000;\r\n    width: 350px;\r\n    height: 3px;\r\n    display: inline-block;\r\n    position: relative;\r\n    top: -8px;\r\n    margin-right: 12px;\r\n    margin-left: 12px;\r\n}\r\n\r\n.skill-item{\r\n    display: flex;\r\n    flex-direction: column;\r\n    margin-top: 20px;\r\n    line-height: 23px;\r\n    align-content: left;\r\n   \r\n    align-items: flex-start;   \r\n}\r\n\r\n.skill-item > div {\r\n    align-self: flex-start;\r\n    font-size: medium;\r\n    font-weight: 600;\r\n    margin-bottom: 3pt;\r\n    width: 100%;\r\n    position: relative;\r\n    \r\n}\r\n\r\n.skill-item > div >span{\r\n    position: absolute;\r\n    right: 5pt;\r\n    font-weight: 200;\r\n}\r\n\r\n@media screen and (min-width: 460px)\r\n{\r\n\r\n.skills-title > p::before, \r\n.skills-title > p::after{\r\ncontent: \" \";\r\nbackground-color: #000;\r\nwidth: 100px;\r\nheight: 3px;\r\ndisplay: inline-block;\r\nposition: relative;\r\ntop: -8px;\r\nmargin-right: 12px;\r\nmargin-left: 12px;\r\n}\r\n\r\n.skills-item{\r\n  \r\n    flex-direction: row;\r\n    \r\n}\r\n\r\n}\r\n\r\n@media screen and (min-width: 560px)\r\n{\r\nprogress{\r\n    width: 380pt;\r\n    height: 6.5pt;;\r\n   \r\n}\r\n}\r\n\r\nprogress[value]::-webkit-progress-bar {\r\n    background-color: #eee;\r\n}\r\n\r\nprogress.red::-webkit-progress-value { background: #c0392b;}\r\n\r\nprogress.green::-webkit-progress-value { background: #27ae60; }\r\n\r\nprogress.blue::-webkit-progress-value { background: #1199ff; }\r\n\r\nprogress.orange::-webkit-progress-value { background: #ffa500; }\r\n\r\nprogress.purple::-webkit-progress-value { background: #9b59b6;}\r\n\r\nprogress.blueberry::-webkit-progress-value { background: rgba(0, 153, 204, 1);}\r\n\r\n"

/***/ }),

/***/ "./src/app/about/skills/skills.component.html":
/*!****************************************************!*\
  !*** ./src/app/about/skills/skills.component.html ***!
  \****************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"skills-title\"><p>Skills</p></div>\r\n<div>\r\n<div class=\"skill-item\" *ngFor=\"let skill of skillList\">\r\n  <div>{{skill.name}} <span>{{skill.confidenceLevel}}%</span></div>\r\n  <progress max=\"100\" [value]=\"skill.confidenceLevel\" colorPalette></progress> \r\n\r\n</div>\r\n</div>"

/***/ }),

/***/ "./src/app/about/skills/skills.component.ts":
/*!**************************************************!*\
  !*** ./src/app/about/skills/skills.component.ts ***!
  \**************************************************/
/*! exports provided: SkillsComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SkillsComponent", function() { return SkillsComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var src_app_data_data_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! src/app/data/data.service */ "./src/app/data/data.service.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var SkillsComponent = /** @class */ (function () {
    function SkillsComponent(dataService) {
        this.dataService = dataService;
    }
    SkillsComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.dataService.getSkill()
            .subscribe(function (x) { _this.skillList = x; });
    };
    SkillsComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-skills',
            template: __webpack_require__(/*! ./skills.component.html */ "./src/app/about/skills/skills.component.html"),
            styles: [__webpack_require__(/*! ./skills.component.css */ "./src/app/about/skills/skills.component.css")]
        }),
        __metadata("design:paramtypes", [src_app_data_data_service__WEBPACK_IMPORTED_MODULE_1__["DataService"]])
    ], SkillsComponent);
    return SkillsComponent;
}());



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
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _home_home_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./home/home.component */ "./src/app/home/home.component.ts");
/* harmony import */ var _about_about_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./about/about.component */ "./src/app/about/about.component.ts");
/* harmony import */ var _projects_projects_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./projects/projects.component */ "./src/app/projects/projects.component.ts");
/* harmony import */ var _bio_bio_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./bio/bio.component */ "./src/app/bio/bio.component.ts");
/* harmony import */ var _article_article_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./article/article.component */ "./src/app/article/article.component.ts");
/* harmony import */ var _projects_projectdetail_projectdetail_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./projects/projectdetail/projectdetail.component */ "./src/app/projects/projectdetail/projectdetail.component.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};








var routes = [
    { path: "home", component: _home_home_component__WEBPACK_IMPORTED_MODULE_2__["HomeComponent"], data: { title: "Home", state: "home" } },
    { path: "profile", component: _about_about_component__WEBPACK_IMPORTED_MODULE_3__["AboutComponent"], data: { title: "Profile", state: 'profile' } },
    { path: "projects", component: _projects_projects_component__WEBPACK_IMPORTED_MODULE_4__["ProjectsComponent"], data: { title: "Projects", state: 'projects' }, children: [
            { path: "project/:id", component: _projects_projectdetail_projectdetail_component__WEBPACK_IMPORTED_MODULE_7__["ProjectdetailComponent"], data: { title: "Projects", state: 'project' } },
        ]
    },
    { path: "about", component: _bio_bio_component__WEBPACK_IMPORTED_MODULE_5__["BioComponent"], data: { title: "About", state: 'about' } },
    { path: "articles", component: _article_article_component__WEBPACK_IMPORTED_MODULE_6__["ArticleComponent"], data: { title: "Articles", state: 'article' } },
    { path: '', redirectTo: 'home', pathMatch: 'full' },
    { path: '**', redirectTo: 'home', pathMatch: 'full' }
];
var AppRoutingModule = /** @class */ (function () {
    function AppRoutingModule() {
    }
    AppRoutingModule = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"])({
            imports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"].forRoot(routes)],
            exports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]]
        })
    ], AppRoutingModule);
    return AppRoutingModule;
}());



/***/ }),

/***/ "./src/app/app.component.css":
/*!***********************************!*\
  !*** ./src/app/app.component.css ***!
  \***********************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "main{\r\n    min-height: 100vh;\r\n}\r\n\r\n"

/***/ }),

/***/ "./src/app/app.component.html":
/*!************************************!*\
  !*** ./src/app/app.component.html ***!
  \************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<app-top-navigation-bar></app-top-navigation-bar>\r\n\r\n<main [@routerTransition]=\"getState(o)\">\r\n<router-outlet #o=\"outlet\"></router-outlet>\r\n</main>\r\n <app-footer></app-footer> "

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
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/platform-browser */ "./node_modules/@angular/platform-browser/fesm5/platform-browser.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! rxjs/operators */ "./node_modules/rxjs/_esm5/operators/index.js");
/* harmony import */ var _shared_services_layout_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./shared/services/layout.service */ "./src/app/shared/services/layout.service.ts");
/* harmony import */ var _router_transtions__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./router.transtions */ "./src/app/router.transtions.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};






var AppComponent = /** @class */ (function () {
    function AppComponent(router, activatedRoute, titleService, layoutManager) {
        this.router = router;
        this.activatedRoute = activatedRoute;
        this.titleService = titleService;
        this.layoutManager = layoutManager;
        this.title = 'Arun Babu Madhavan | ';
    }
    AppComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.router.events.subscribe(function (evt) {
            if (!(evt instanceof _angular_router__WEBPACK_IMPORTED_MODULE_2__["NavigationEnd"])) {
                return;
            }
            window.scrollTo(0, 0);
        });
        this.router.events.pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["filter"])(function (event) { return event instanceof _angular_router__WEBPACK_IMPORTED_MODULE_2__["NavigationEnd"]; })).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["map"])(function () { return _this.activatedRoute; }))
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["map"])(function (route) {
            while (route.firstChild)
                route = route.firstChild;
            return route;
        }))
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["filter"])(function (route) { return route.outlet === 'primary'; })).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["mergeMap"])(function (route) { return route.data; }))
            .subscribe(function (event) {
            if (event['title']) {
                _this.titleService.setTitle(_this.title + event['title']);
                if (event['title'].toString().toLowerCase() === 'home')
                    _this.layoutManager.homePageSetting();
                else
                    _this.layoutManager.defaultPageSetting();
            }
        });
    };
    AppComponent.prototype.getState = function (outlet) {
        return outlet && outlet.activatedRouteData && outlet.activatedRouteData['state'];
    };
    AppComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-root',
            template: __webpack_require__(/*! ./app.component.html */ "./src/app/app.component.html"),
            animations: [_router_transtions__WEBPACK_IMPORTED_MODULE_5__["routerTransition"]],
            styles: [__webpack_require__(/*! ./app.component.css */ "./src/app/app.component.css")]
        }),
        __metadata("design:paramtypes", [_angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"], _angular_router__WEBPACK_IMPORTED_MODULE_2__["ActivatedRoute"], _angular_platform_browser__WEBPACK_IMPORTED_MODULE_1__["Title"], _shared_services_layout_service__WEBPACK_IMPORTED_MODULE_4__["LayoutManager"]])
    ], AppComponent);
    return AppComponent;
}());



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
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/platform-browser */ "./node_modules/@angular/platform-browser/fesm5/platform-browser.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _app_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./app.component */ "./src/app/app.component.ts");
/* harmony import */ var _app_routing_module__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./app-routing.module */ "./src/app/app-routing.module.ts");
/* harmony import */ var _home_home_module__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./home/home.module */ "./src/app/home/home.module.ts");
/* harmony import */ var _shared_shared_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./shared/shared.module */ "./src/app/shared/shared.module.ts");
/* harmony import */ var _about_about_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./about/about.component */ "./src/app/about/about.component.ts");
/* harmony import */ var _about_experience_experience_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./about/experience/experience.component */ "./src/app/about/experience/experience.component.ts");
/* harmony import */ var _shared_services_day_night_service__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./shared/services/day-night.service */ "./src/app/shared/services/day-night.service.ts");
/* harmony import */ var _shared_services_layout_service__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./shared/services/layout.service */ "./src/app/shared/services/layout.service.ts");
/* harmony import */ var _about_skills_skills_component__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./about/skills/skills.component */ "./src/app/about/skills/skills.component.ts");
/* harmony import */ var _data_data_service__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./data/data.service */ "./src/app/data/data.service.ts");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");
/* harmony import */ var _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! @angular/platform-browser/animations */ "./node_modules/@angular/platform-browser/fesm5/animations.js");
/* harmony import */ var _projects_projects_module__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ./projects/projects.module */ "./src/app/projects/projects.module.ts");
/* harmony import */ var _bio_bio_component__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! ./bio/bio.component */ "./src/app/bio/bio.component.ts");
/* harmony import */ var _article_article_component__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! ./article/article.component */ "./src/app/article/article.component.ts");
/* harmony import */ var _article_article_service__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! ./article/article.service */ "./src/app/article/article.service.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};


















var AppModule = /** @class */ (function () {
    function AppModule() {
    }
    AppModule = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            declarations: [
                _app_component__WEBPACK_IMPORTED_MODULE_2__["AppComponent"],
                _about_about_component__WEBPACK_IMPORTED_MODULE_6__["AboutComponent"],
                _about_experience_experience_component__WEBPACK_IMPORTED_MODULE_7__["ExperienceComponent"],
                _about_skills_skills_component__WEBPACK_IMPORTED_MODULE_10__["SkillsComponent"],
                _bio_bio_component__WEBPACK_IMPORTED_MODULE_15__["BioComponent"],
                _article_article_component__WEBPACK_IMPORTED_MODULE_16__["ArticleComponent"],
            ],
            imports: [
                _angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__["BrowserModule"],
                _home_home_module__WEBPACK_IMPORTED_MODULE_4__["HomeModule"],
                _app_routing_module__WEBPACK_IMPORTED_MODULE_3__["AppRoutingModule"],
                _shared_shared_module__WEBPACK_IMPORTED_MODULE_5__["SharedModule"],
                _angular_common_http__WEBPACK_IMPORTED_MODULE_12__["HttpClientModule"],
                _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_13__["BrowserAnimationsModule"],
                _projects_projects_module__WEBPACK_IMPORTED_MODULE_14__["ProjectsModule"]
            ],
            providers: [_shared_services_layout_service__WEBPACK_IMPORTED_MODULE_9__["LayoutManager"], _shared_services_day_night_service__WEBPACK_IMPORTED_MODULE_8__["DayNightService"], _data_data_service__WEBPACK_IMPORTED_MODULE_11__["DataService"], _article_article_service__WEBPACK_IMPORTED_MODULE_17__["ArticleService"]],
            bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_2__["AppComponent"]]
        })
    ], AppModule);
    return AppModule;
}());



/***/ }),

/***/ "./src/app/article/article.component.css":
/*!***********************************************!*\
  !*** ./src/app/article/article.component.css ***!
  \***********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".article-container{\r\n    min-height: 900px;\r\n    display: flex;\r\n    flex-direction: column;\r\n    max-width: 1200px;\r\n\r\n    margin: 0 auto;\r\n    margin-top:50px;\r\n    line-height: 21pt;\r\n}\r\n\r\n.heading{\r\n    font-family: 'Roboto';\r\n    font-size: xx-large;\r\n}\r\n\r\n.heading > img{\r\n    height: 88pt;\r\n}\r\n\r\n.article-list {\r\n   min-height: 150pt;\r\n   margin-bottom: 50pt;\r\n   display: flex;\r\n   flex-direction: column\r\n}\r\n\r\n.article-list-container{\r\n    padding: 25pt;\r\n}\r\n\r\ndiv.button{\r\n    background-color: #3dd28d;\r\n    padding: 12px;\r\n    cursor: pointer;\r\n}\r\n\r\n.article-list > div {\r\n    display: flex;\r\n    flex-direction: row;\r\n    align-content: center;\r\n}\r\n\r\n.article-list > div > div:first-child{\r\n    display: none;\r\n}\r\n\r\n.article-list > div > div:last-child{\r\n\r\n    margin-top: 2em;\r\n    margin-left: 2em;\r\n    flex: 1;\r\n    position: relative;\r\n\r\n}\r\n\r\n.article-list > div > div:last-child > div:last-child{\r\n\r\n \r\n   font-size: 8pt;\r\n\r\n}\r\n\r\n.heading-link > a{\r\ncolor:#15c;\r\nfont-size: large;\r\n\r\n}\r\n\r\n.heading-link > a:hover{\r\n    color:#1ac;\r\n}\r\n\r\n@media screen and (min-width:445px)\r\n{\r\n    .article-list > div > div:last-child{\r\n        margin-left: 3em;\r\n    }\r\n\r\n    .article-list > div > div:first-child{\r\n        display: block;\r\n    }\r\n}"

/***/ }),

/***/ "./src/app/article/article.component.html":
/*!************************************************!*\
  !*** ./src/app/article/article.component.html ***!
  \************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"article-container\">\r\n <div class=\"article-list-container\">\r\n  <div class=\"heading\"><img src=\"assets/images/articles/cp.png\">Recent Articles</div>\r\n  <div class=\"article-list\">\r\n    <div *ngFor=\"let article of articles\"> \r\n      <div>\r\n      <app-calendar [calendarDate]=\"article.date\"></app-calendar>\r\n      </div>\r\n      <div>\r\n         <div class=\"heading-link\"><a [href]=\"article.link\" target=\"_blank\">{{article.heading}}</a></div> \r\n         <div>{{article.subheading}}</div>\r\n         <div>{{article.views}} views | {{article.downloads}} downloads | {{article.bookmarked}} bookmarked </div>\r\n      </div>\r\n    </div>\r\n  </div>\r\n  <div class=\"heading-link\" style=\"text-align:center\" *ngIf=\"allArticles && articles && articles.length < allArticles.length\"><a>Load more...</a></div>\r\n  <div class=\"heading\"><img src=\"assets/images/articles/bulb.png\">Inspirations</div>\r\n  <div class=\"article-list\">\r\n    <div *ngFor=\"let inspiration of inspirations\">\r\n    <div></div>\r\n    <div>\r\n    <div class=\"heading-link\"><a [href]=\"inspiration.link\" target=\"_blank\">{{inspiration.heading}}</a></div> \r\n    <div><a [href]='inspiration.authorSite'>{{inspiration.author}}</a> | {{inspiration.aboutAuthor}}</div>\r\n  </div>\r\n  </div>\r\n\r\n    \r\n    \r\n  </div>\r\n </div>\r\n</div>\r\n<app-navigation-arrows [prevPage]=\"['/projects']\"  [nextPage]=\"['/about']\" ></app-navigation-arrows>"

/***/ }),

/***/ "./src/app/article/article.component.ts":
/*!**********************************************!*\
  !*** ./src/app/article/article.component.ts ***!
  \**********************************************/
/*! exports provided: ArticleComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ArticleComponent", function() { return ArticleComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _article_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./article.service */ "./src/app/article/article.service.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var MAX_RECENT_ARTICLES = 4;
var ArticleComponent = /** @class */ (function () {
    function ArticleComponent(articleServiceInstance) {
        this.articleServiceInstance = articleServiceInstance;
    }
    ArticleComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.articleServiceInstance.getArticles().subscribe(function (x) {
            x.sort(function (a, b) { return a.date < b.date ? 0 : -1; });
            _this.allArticles = x;
            _this.articles = _this.allArticles.splice(0, MAX_RECENT_ARTICLES);
        });
        this.articleServiceInstance.getInpirationArticles().subscribe(function (x) {
            _this.inspirations = x;
        });
    };
    ArticleComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-article',
            template: __webpack_require__(/*! ./article.component.html */ "./src/app/article/article.component.html"),
            styles: [__webpack_require__(/*! ./article.component.css */ "./src/app/article/article.component.css")]
        }),
        __metadata("design:paramtypes", [_article_service__WEBPACK_IMPORTED_MODULE_1__["ArticleService"]])
    ], ArticleComponent);
    return ArticleComponent;
}());



/***/ }),

/***/ "./src/app/article/article.service.ts":
/*!********************************************!*\
  !*** ./src/app/article/article.service.ts ***!
  \********************************************/
/*! exports provided: ArticleService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ArticleService", function() { return ArticleService; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var ArticleService = /** @class */ (function () {
    function ArticleService(http) {
        this.http = http;
    }
    ArticleService.prototype.getArticles = function () {
        return this.http.get('./data/codeProjectArticles.json');
    };
    ArticleService.prototype.getInpirationArticles = function () {
        return this.http.get('./data/inspirations.json');
    };
    ArticleService = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"])(),
        __metadata("design:paramtypes", [_angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpClient"]])
    ], ArticleService);
    return ArticleService;
}());



/***/ }),

/***/ "./src/app/bio/bio.component.css":
/*!***************************************!*\
  !*** ./src/app/bio/bio.component.css ***!
  \***************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".bio-container{\r\n   \r\n    min-height: 900px;\r\n    display: flex;\r\n    flex-direction: column;\r\n    max-width: 1200px;\r\n    margin: 0 auto;\r\n    margin-top:50px;\r\n    line-height: 21pt;\r\n    padding-left:30pt;\r\n\r\n  \r\n}\r\n.bio-container span{\r\n    font-weight: bold;\r\n}\r\n.bio-container > div:first-child{\r\n    align-self: flex-start;\r\n    font-family: 'Roboto','sans-serif';\r\n    font-size: xx-large;\r\n    padding: 20pt 0pt;\r\n\r\n}\r\n.dp-container\r\n{\r\n    display: flex;\r\n    flex-direction: column;\r\n    \r\n\r\n}\r\n.dp-container p i {\r\n    font-size: xx-large;\r\n    color: #444;\r\n}\r\n.dp-container > div\r\n{\r\n   margin-right: 25pt;\r\n   -ms-grid-row-align: center;\r\n       align-self: center;\r\n\r\n}\r\n.dp-container img{\r\n    height:245pt;width:220pt;\r\n}\r\n.bio-container > div.title\r\n{\r\n    font-family: 'Roboto','sans-serif';\r\n    font-size: larger;\r\n    font-weight: 600;\r\n}\r\n.bio-container > * {\r\n    padding: 10pt 0pt;\r\n}\r\n.image-container{\r\n    align-self: flex-start;\r\n    font-size: small;\r\n}\r\n.image-container > img{\r\n    width: calc(100vw - 50pt);\r\n}\r\n.image-container > div{\r\n    margin-top: -20pt;\r\n    text-align: left;\r\n}\r\n@media screen and (min-width:620px)\r\n{\r\n    .image-container > div{\r\n      \r\n        text-align: right;\r\n    }\r\n    .image-container{\r\n        -ms-grid-row-align: center;\r\n            align-self: center;\r\n    }\r\n    .image-container > img{\r\n        width: 570px;\r\n    }\r\n    .dp-container {\r\n        flex-direction: row;\r\n    }\r\n}\r\n.image-container a{\r\n\r\ncolor: blue;\r\n}\r\n"

/***/ }),

/***/ "./src/app/bio/bio.component.html":
/*!****************************************!*\
  !*** ./src/app/bio/bio.component.html ***!
  \****************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"bio-container\">\r\n<div>A Little Bit About Me</div>\r\n<div class=\"dp-container\">\r\n<div><img alt=\"My Photo\" [src]=\"image\"></div>\r\n  <div>\r\n    <p><span>Name:</span> Arun Babu Madhavan</p>\r\n      <p><span>Location:</span> Born in Pondicherry, India.</p>\r\n      <p>Currently residing in Dallas,Texas</p>\r\n      <p><span>Words that best describe me:</span> Calm, Composed and Cooperative <i class=\"fa fa-puzzle-piece\"></i></p></div>\r\n</div>\r\n<div>You can call me <span>Arun</span>, I build websites. I am an award winning web developer with 6 years of proven performance in software development. I like to design and develop apps, games and architect enterprise solutions with good design patterns. I designed and developed this website \r\nfrom scratch using Angular. Designs are inspired from personal websites of many talented UI/UX developers.  \r\n\r\nI started coding from a young age and I spend most my day thinking and \r\ncoding which I really love to do. When I am not coding, I watch Anime, read books (novels and comics - thrillers are my favorite) and play video games.</div>\r\n<div class=\"title\">\r\n  Coding is an Art!\r\n</div>\r\n<div class=\"image-container\">\r\n <img alt=\"commicStrip\" src='assets/images/bio/art.jpg'>\r\n <div>via <a href=\"http://www.commitstrip.com/\" target=\"_blank\">CommitStrip.com\r\n </a></div>\r\n</div>\r\n</div>\r\n<app-navigation-arrows [prevPage]=\"['/articles']\" ></app-navigation-arrows>\r\n"

/***/ }),

/***/ "./src/app/bio/bio.component.ts":
/*!**************************************!*\
  !*** ./src/app/bio/bio.component.ts ***!
  \**************************************/
/*! exports provided: BioComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "BioComponent", function() { return BioComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var BioComponent = /** @class */ (function () {
    function BioComponent() {
        this.images = ["assets/images/bio/1.png"];
    }
    BioComponent.prototype.ngOnInit = function () {
        this.image = this.images[Math.floor(Math.random() * 100) % this.images.length];
    };
    BioComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-bio',
            template: __webpack_require__(/*! ./bio.component.html */ "./src/app/bio/bio.component.html"),
            styles: [__webpack_require__(/*! ./bio.component.css */ "./src/app/bio/bio.component.css")]
        }),
        __metadata("design:paramtypes", [])
    ], BioComponent);
    return BioComponent;
}());



/***/ }),

/***/ "./src/app/data/data.service.ts":
/*!**************************************!*\
  !*** ./src/app/data/data.service.ts ***!
  \**************************************/
/*! exports provided: DataService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DataService", function() { return DataService; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var DataService = /** @class */ (function () {
    function DataService(http) {
        this.http = http;
    }
    DataService.prototype.getExperience = function () {
        return this.http.get('./data/experience.json');
    };
    DataService.prototype.getSkill = function () {
        return this.http.get('./data/skills.json');
    };
    DataService = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"])(),
        __metadata("design:paramtypes", [_angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpClient"]])
    ], DataService);
    return DataService;
}());



/***/ }),

/***/ "./src/app/home/greeting/greeting.component.css":
/*!******************************************************!*\
  !*** ./src/app/home/greeting/greeting.component.css ***!
  \******************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\r\ndiv{\r\n    font-family: 'Anonymous Pro', monospace;  \r\n   \r\n    z-index: 10000;\r\n}\r\n\r\n@-webkit-keyframes blinkTextCursor{\r\n    from{border-right-color: rgba(146, 131, 131, 0.75);}\r\n    to{border-right-color: transparent;}\r\n  }\r\n\r\n@keyframes blinkTextCursor{\r\n    from{border-right-color: rgba(146, 131, 131, 0.75);}\r\n    to{border-right-color: transparent;}\r\n  }\r\n\r\n@-webkit-keyframes typewriter{\r\n    from{width: 0;}\r\n    to{width: 11em;}\r\n  }\r\n\r\n@keyframes typewriter{\r\n    from{width: 0;}\r\n    to{width: 11em;}\r\n  }\r\n\r\n.anim-typewriter{\r\n    -webkit-animation: typewriter 3.4s steps(30) 0.5s 1 normal both,\r\n               blinkTextCursor 650ms steps(30) 4 forwards;\r\n            animation: typewriter 3.4s steps(30) 0.5s 1 normal both,\r\n               blinkTextCursor 650ms steps(30) 4 forwards;\r\n  }\r\n\r\n.line-1{\r\n    position: absolute;\r\n    top: 10%;  \r\n  padding-left: 1px;\r\n    width: 11em;\r\n    left:calc(50%);\r\n   \r\n    font-size: 180%;\r\n    border-right: 2px solid rgba(146, 131, 131, 0.75);\r\n    white-space: nowrap;\r\n    overflow: hidden;\r\n    -webkit-transform: translateY(-50%);\r\n            transform: translateY(-50%);     \r\n}\r\n"

/***/ }),

/***/ "./src/app/home/greeting/greeting.component.html":
/*!*******************************************************!*\
  !*** ./src/app/home/greeting/greeting.component.html ***!
  \*******************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"line-1 anim-typewriter\" [style.marginLeft.px]=\"greetingAdjustment\">{{Greeting}}</div>"

/***/ }),

/***/ "./src/app/home/greeting/greeting.component.ts":
/*!*****************************************************!*\
  !*** ./src/app/home/greeting/greeting.component.ts ***!
  \*****************************************************/
/*! exports provided: GreetingComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "GreetingComponent", function() { return GreetingComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var GreetingComponent = /** @class */ (function () {
    function GreetingComponent() {
    }
    GreetingComponent.prototype.ngOnInit = function () {
        this.greetingMessage = this.getGreetingMessage();
        if (this.greetingMessage)
            this.greetingAdjustment = -(this.greetingMessage.length * 7);
    };
    Object.defineProperty(GreetingComponent.prototype, "Greeting", {
        get: function () {
            return this.greetingMessage;
        },
        enumerable: true,
        configurable: true
    });
    GreetingComponent.prototype.getGreetingMessage = function () {
        var greeting;
        var now = new Date();
        var hours = now.getHours();
        if (hours > 12) {
            if (hours < 17)
                return "Good Afternoon!";
            else
                return "Good Evening!";
        }
        else {
            if (hours > 4)
                return "Good Morning!";
        }
    };
    GreetingComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-greeting',
            template: __webpack_require__(/*! ./greeting.component.html */ "./src/app/home/greeting/greeting.component.html"),
            styles: [__webpack_require__(/*! ./greeting.component.css */ "./src/app/home/greeting/greeting.component.css")]
        }),
        __metadata("design:paramtypes", [])
    ], GreetingComponent);
    return GreetingComponent;
}());



/***/ }),

/***/ "./src/app/home/home.component.css":
/*!*****************************************!*\
  !*** ./src/app/home/home.component.css ***!
  \*****************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".particle-container{\r\n    position:absolute;\r\n    top:0;\r\n    left:0;\r\n    bottom:0;\r\n    overflow:hidden;\r\n\r\n}\r\n*{\r\noverflow: hidden;\r\n}\r\n.intro-container{\r\n    position:absolute;\r\n    top: 20%;  \r\n    width: 100%;\r\n    z-index: 10000;\r\n    text-align: center;\r\n}\r\nright-point-button{\r\n    font-size: x-large;\r\n    font-weight: 600;\r\n}\r\n.night{\r\n    color: rgba(255,255,255,.75); \r\n}"

/***/ }),

/***/ "./src/app/home/home.component.html":
/*!******************************************!*\
  !*** ./src/app/home/home.component.html ***!
  \******************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\r\n<div class=\"greeting-container\" dayNightColor><app-greeting></app-greeting></div>\r\n<div class=\"particle-container\">\r\n<app-particle [speed]=\"particleVelocity\"></app-particle> \r\n</div>\r\n<div class=\"intro-container\" dayNightColor>\r\n    <home-intro></home-intro>\r\n</div>\r\n<div class=\"intro-button-container\">\r\n    <right-point-button [routerLink]=\"['/projects']\" (hover)=\"increaseParticleSpeed($event)\">Take a look around</right-point-button>\r\n</div>\r\n"

/***/ }),

/***/ "./src/app/home/home.component.ts":
/*!****************************************!*\
  !*** ./src/app/home/home.component.ts ***!
  \****************************************/
/*! exports provided: HomeComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "HomeComponent", function() { return HomeComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var maxSphereSpeed = 6;
var defaultSpeed = 2;
var HomeComponent = /** @class */ (function () {
    function HomeComponent() {
        this.particleVelocity = defaultSpeed;
    }
    HomeComponent.prototype.ngOnInit = function () {
        // document.body.style.backgroundColor="#000";
    };
    HomeComponent.prototype.increaseParticleSpeed = function (toIncrease) {
        this.particleVelocity = toIncrease ? maxSphereSpeed : defaultSpeed;
    };
    HomeComponent.prototype.ngOnDestroy = function () {
        // document.body.style.backgroundColor="#fff";
    };
    HomeComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            template: __webpack_require__(/*! ./home.component.html */ "./src/app/home/home.component.html"),
            styles: [__webpack_require__(/*! ./home.component.css */ "./src/app/home/home.component.css")]
        }),
        __metadata("design:paramtypes", [])
    ], HomeComponent);
    return HomeComponent;
}());



/***/ }),

/***/ "./src/app/home/home.module.ts":
/*!*************************************!*\
  !*** ./src/app/home/home.module.ts ***!
  \*************************************/
/*! exports provided: HomeModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "HomeModule", function() { return HomeModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _particle_particle_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./particle/particle.component */ "./src/app/home/particle/particle.component.ts");
/* harmony import */ var _greeting_greeting_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./greeting/greeting.component */ "./src/app/home/greeting/greeting.component.ts");
/* harmony import */ var _home_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./home.component */ "./src/app/home/home.component.ts");
/* harmony import */ var _intro_intro_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./intro/intro.component */ "./src/app/home/intro/intro.component.ts");
/* harmony import */ var _shared_shared_module__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../shared/shared.module */ "./src/app/shared/shared.module.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};








var HomeModule = /** @class */ (function () {
    function HomeModule() {
    }
    HomeModule = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"])({
            imports: [
                _angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"],
                _shared_shared_module__WEBPACK_IMPORTED_MODULE_6__["SharedModule"],
                _angular_router__WEBPACK_IMPORTED_MODULE_7__["RouterModule"]
            ],
            declarations: [_particle_particle_component__WEBPACK_IMPORTED_MODULE_2__["ParticleComponent"], _greeting_greeting_component__WEBPACK_IMPORTED_MODULE_3__["GreetingComponent"], _home_component__WEBPACK_IMPORTED_MODULE_4__["HomeComponent"], _intro_intro_component__WEBPACK_IMPORTED_MODULE_5__["IntroComponent"]]
        })
    ], HomeModule);
    return HomeModule;
}());



/***/ }),

/***/ "./src/app/home/intro/intro.component.css":
/*!************************************************!*\
  !*** ./src/app/home/intro/intro.component.css ***!
  \************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "span{\r\n    color:#04C2C9;\r\n}\r\nh1{\r\n    font-size: x-large;\r\n    font-weight: 600;\r\n    \r\n}"

/***/ }),

/***/ "./src/app/home/intro/intro.component.html":
/*!*************************************************!*\
  !*** ./src/app/home/intro/intro.component.html ***!
  \*************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<h1>\r\nI am <span>Arun Babu Madhavan,</span><br/> a Full-Stack Web Developer and UI/UX enthusiast.\r\n</h1>"

/***/ }),

/***/ "./src/app/home/intro/intro.component.ts":
/*!***********************************************!*\
  !*** ./src/app/home/intro/intro.component.ts ***!
  \***********************************************/
/*! exports provided: IntroComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "IntroComponent", function() { return IntroComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var IntroComponent = /** @class */ (function () {
    function IntroComponent() {
    }
    IntroComponent.prototype.ngOnInit = function () {
    };
    IntroComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'home-intro',
            template: __webpack_require__(/*! ./intro.component.html */ "./src/app/home/intro/intro.component.html"),
            styles: [__webpack_require__(/*! ./intro.component.css */ "./src/app/home/intro/intro.component.css")]
        }),
        __metadata("design:paramtypes", [])
    ], IntroComponent);
    return IntroComponent;
}());



/***/ }),

/***/ "./src/app/home/particle/particle.component.html":
/*!*******************************************************!*\
  !*** ./src/app/home/particle/particle.component.html ***!
  \*******************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div>\r\n<canvas #particleCanvas [attr.width]=\"width\" [attr.height]=\"height\">\r\n  Your browser does not support HTML5 canvas.\r\n  </canvas>\r\n</div>"

/***/ }),

/***/ "./src/app/home/particle/particle.component.ts":
/*!*****************************************************!*\
  !*** ./src/app/home/particle/particle.component.ts ***!
  \*****************************************************/
/*! exports provided: ParticleComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ParticleComponent", function() { return ParticleComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _shared_services_day_night_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../shared/services/day-night.service */ "./src/app/shared/services/day-night.service.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var particleRadius = 380;
var initialSpeed = 2;
var ParticleComponent = /** @class */ (function () {
    function ParticleComponent(ngZone, particleService) {
        this.ngZone = ngZone;
        this.particleService = particleService;
        this.speedFactor = initialSpeed;
        this.sphereRadius = particleRadius;
    }
    ParticleComponent.prototype.onResize = function (event) {
        this.height = event.target.innerHeight;
        this.width = event.target.innerWidth;
        this.sphereRadius = this.width < 600 ? 100 * (this.width / 100) : particleRadius;
        this.canvasRef.nativeElement.height = window.innerHeight;
        this.canvasRef.nativeElement.width = window.innerWidth;
        this.setupParticles();
    };
    ParticleComponent.prototype.ngOnChanges = function () {
        this.turnSpeed = this.speedFactor * Math.PI / 1900;
    };
    ParticleComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.height = window.innerHeight;
        this.width = window.innerWidth;
        this.canvasRef.nativeElement.height = this.height;
        this.canvasRef.nativeElement.width = this.width;
        this.particleSettings = this.particleService.getParticleSetting();
        this.backgroundcolor = this.particleService.getBackgroundColor();
        this.setupParticles();
        this.ngZone.runOutsideAngular(function () { return _this.animate(); });
    };
    ParticleComponent.prototype.setupParticles = function () {
        this.nextParticle = null;
        this.wait = 1;
        this.count = (this.wait - 1);
        this.numToAddEachFrame = 8;
        this.rgbString = "rgba(" + this.particleSettings.r + "," + this.particleSettings.g + "," + this.particleSettings.b + ","; //partial string for color which will be completed by appending alpha value.
        this.particleAlpha = 1; //maximum alpha
        this.displayHeight = this.canvasRef.nativeElement.height;
        this.displayWidth = this.canvasRef.nativeElement.width;
        this.projCenterX = this.displayWidth / 2;
        this.projCenterY = this.displayHeight / 2;
        this.fLen = 320;
        this.zMax = this.fLen - 2;
        this.randAccelX = 0.0;
        this.randAccelY = 0.0;
        this.randAccelZ = 0.0;
        this.particleList = {};
        this.objectPool = {};
        this.gravity = 0;
        this.sphereCenterX = 0;
        this.sphereCenterY = 0;
        this.sphereCenterZ = -3 - this.sphereRadius;
        //alpha values will lessen as particles move further back, causing depth-based darkening:
        this.zeroAlphaDepth = -750;
        this.turnSpeed = this.speedFactor * Math.PI / 1900; //the sphere will rotate at this speed (one complete rotation every 1600 frames).
        this.turnAngle = 0; //initial angle
    };
    ParticleComponent.prototype.animate = function () {
        var _this = this;
        var context = this.canvasRef.nativeElement.getContext('2d');
        this.count++;
        if (this.count >= this.wait) {
            this.count = 0;
            for (var i = 0; i < this.numToAddEachFrame; i++) {
                this.theta = Math.random() * 2 * Math.PI;
                this.phi = Math.acos(Math.random() * 2 - 1);
                this.x0 = this.sphereRadius * Math.sin(this.phi) * Math.cos(this.theta);
                this.y0 = this.sphereRadius * Math.sin(this.phi) * Math.sin(this.theta);
                this.z0 = this.sphereRadius * Math.cos(this.phi);
                var p = this.addParticle(this.x0, this.sphereCenterY + this.y0, this.sphereCenterZ + this.z0, 0.002 * this.x0, 0.002 * this.y0, 0.002 * this.z0);
                //we set some "envelope" parameters which will control the evolving alpha of the particles.
                p.attack = 50;
                p.hold = 50;
                p.decay = 160;
                p.initValue = 0;
                p.holdValue = this.particleAlpha;
                p.lastValue = 0;
                //the particle will be stuck in one place until this time has elapsed:
                p.stuckTime = 80 + Math.random() * 20;
                p.accelX = 0;
                p.accelY = this.gravity;
                p.accelZ = 0;
            }
        }
        this.turnAngle = (this.turnAngle + this.turnSpeed) % (2 * Math.PI);
        this.sinAngle = Math.sin(this.turnAngle);
        this.cosAngle = Math.cos(this.turnAngle);
        context.fillStyle = this.backgroundcolor;
        context.fillRect(0, 0, this.displayWidth, this.displayHeight);
        p = this.particleList.first;
        while (p != null) {
            this.nextParticle = p.next;
            //update age
            p.age++;
            //if the particle is past its "stuck" time, it will begin to move.
            if (p.age > p.stuckTime) {
                p.velX += p.accelX + this.randAccelX * (Math.random() * 2 - 1);
                p.velY += p.accelY + this.randAccelY * (Math.random() * 2 - 1);
                p.velZ += p.accelZ + this.randAccelZ * (Math.random() * 2 - 1);
                p.x += p.velX;
                p.y += p.velY;
                p.z += p.velZ;
            }
            this.rotX = this.cosAngle * p.x + this.sinAngle * (p.z - this.sphereCenterZ);
            this.rotZ = -this.sinAngle * p.x + this.cosAngle * (p.z - this.sphereCenterZ) + this.sphereCenterZ;
            this.m = this.fLen / (this.fLen - this.rotZ);
            p.projX = this.rotX * this.m + this.projCenterX;
            p.projY = p.y * this.m + this.projCenterY;
            //update alpha according to envelope parameters.
            if (p.age < p.attack + p.hold + p.decay) {
                if (p.age < p.attack) {
                    p.alpha = (p.holdValue - p.initValue) / p.attack * p.age + p.initValue;
                }
                else if (p.age < p.attack + p.hold) {
                    p.alpha = p.holdValue;
                }
                else if (p.age < p.attack + p.hold + p.decay) {
                    p.alpha = (p.lastValue - p.holdValue) / p.decay * (p.age - p.attack - p.hold) + p.holdValue;
                }
            }
            else {
                p.dead = true;
            }
            if ((p.projX > this.displayWidth) || (p.projX < 0) || (p.projY < 0) || (p.projY > this.displayHeight) || (this.rotZ > this.zMax)) {
                this.outsideFrame = true;
            }
            else {
                this.outsideFrame = false;
            }
            if (this.outsideFrame || p.dead) {
                this.recycle(p);
            }
            else {
                this.depthAlphaFactor = (1 - this.rotZ / this.zeroAlphaDepth);
                this.depthAlphaFactor = (this.depthAlphaFactor > 1) ? 1 : ((this.depthAlphaFactor < 0) ? 0 : this.depthAlphaFactor);
                context.fillStyle = this.rgbString + this.depthAlphaFactor * p.alpha + ")";
                //draw
                context.beginPath();
                context.arc(p.projX, p.projY, this.m * this.particleSettings.radius, 0, 2 * Math.PI, false);
                context.closePath();
                context.fill();
            }
            p = this.nextParticle;
        }
        requestAnimationFrame(function () { return _this.animate(); });
    };
    ParticleComponent.prototype.addParticle = function (x0, y0, z0, vx0, vy0, vz0) {
        var newParticle;
        var color;
        //check recycle bin for available drop:
        if (this.objectPool.first != null) {
            newParticle = this.objectPool.first;
            //remove from bin
            if (newParticle.next != null) {
                this.objectPool.first = newParticle.next;
                newParticle.next.prev = null;
            }
            else {
                this.objectPool.first = null;
            }
        }
        //if the recycle bin is empty, create a new particle (a new ampty object):
        else {
            newParticle = {};
        }
        //add to beginning of particle list
        if (this.particleList.first == null) {
            this.particleList.first = newParticle;
            newParticle.prev = null;
            newParticle.next = null;
        }
        else {
            newParticle.next = this.particleList.first;
            this.particleList.first.prev = newParticle;
            this.particleList.first = newParticle;
            newParticle.prev = null;
        }
        //intialize
        newParticle.x = x0;
        newParticle.y = y0;
        newParticle.z = z0;
        newParticle.velX = vx0;
        newParticle.velY = vy0;
        newParticle.velZ = vz0;
        newParticle.age = 0;
        newParticle.dead = false;
        if (Math.random() < 0.5) {
            newParticle.right = true;
        }
        else {
            newParticle.right = false;
        }
        return newParticle;
    };
    ParticleComponent.prototype.recycle = function (p) {
        if (this.particleList.first == p) {
            if (p.next != null) {
                p.next.prev = null;
                this.particleList.first = p.next;
            }
            else {
                this.particleList.first = null;
            }
        }
        else {
            if (p.next == null) {
                p.prev.next = null;
            }
            else {
                p.prev.next = p.next;
                p.next.prev = p.prev;
            }
        }
        //add to recycle bin
        if (this.objectPool.first == null) {
            this.objectPool.first = p;
            p.prev = null;
            p.next = null;
        }
        else {
            p.next = this.objectPool.first;
            this.objectPool.first.prev = p;
            this.objectPool.first = p;
            p.prev = null;
        }
    };
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewChild"])('particleCanvas'),
        __metadata("design:type", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ElementRef"])
    ], ParticleComponent.prototype, "canvasRef", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])('speed'),
        __metadata("design:type", Number)
    ], ParticleComponent.prototype, "speedFactor", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["HostListener"])('window:resize', ['$event']),
        __metadata("design:type", Function),
        __metadata("design:paramtypes", [Object]),
        __metadata("design:returntype", void 0)
    ], ParticleComponent.prototype, "onResize", null);
    ParticleComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-particle',
            template: __webpack_require__(/*! ./particle.component.html */ "./src/app/home/particle/particle.component.html"),
        }),
        __metadata("design:paramtypes", [_angular_core__WEBPACK_IMPORTED_MODULE_0__["NgZone"], _shared_services_day_night_service__WEBPACK_IMPORTED_MODULE_1__["DayNightService"]])
    ], ParticleComponent);
    return ParticleComponent;
}());



/***/ }),

/***/ "./src/app/projects/project.service.ts":
/*!*********************************************!*\
  !*** ./src/app/projects/project.service.ts ***!
  \*********************************************/
/*! exports provided: ProjectService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ProjectService", function() { return ProjectService; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! rxjs/operators */ "./node_modules/rxjs/_esm5/operators/index.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var ProjectService = /** @class */ (function () {
    function ProjectService(http) {
        this.http = http;
    }
    ProjectService.prototype.getProjects = function () {
        return this.http.get('./data/projects.json');
    };
    ProjectService.prototype.getProjectDetail = function (id) {
        return this.http.get('./data/projectdetails.json')
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["map"])(function (items) { return items.filter(function (item) { return item.ProjectId == id; })[0]; }));
    };
    ProjectService = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"])(),
        __metadata("design:paramtypes", [_angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpClient"]])
    ], ProjectService);
    return ProjectService;
}());



/***/ }),

/***/ "./src/app/projects/projectdetail/projectdetail.component.css":
/*!********************************************************************!*\
  !*** ./src/app/projects/projectdetail/projectdetail.component.css ***!
  \********************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\r\n.info{\r\n    flex-grow: 2;\r\n}\r\n.close{\r\n        align-self: flex-end;\r\n        align-items: flex-end;\r\n        text-align: right;\r\n        padding: 10pt;\r\n        padding-bottom: 10pt;\r\n        font-size: xx-large;\r\n        color: #555;\r\n        cursor: pointer;\r\n}\r\n.close:hover{\r\n    color: #aaa;\r\n}\r\n.info{\r\n    font-family: 'Roboto','Sans-serif';\r\n    display: flex;\r\n    flex-direction: column;\r\n\r\n    \r\n}\r\n.info > div:first-child{\r\n    font-size: x-large;\r\n    padding: 5pt;\r\n    font-weight: bold;\r\n  \r\n}\r\n.info > div.desc{\r\n    font-size: medium;\r\n    padding:5pt;\r\n    padding: 7pt;\r\n    color: #333;\r\n}\r\n.info > div.desc > p {\r\n    line-height: 22pt;\r\n}\r\n.info > div.desc > p > span{\r\n    font-weight: bold;\r\n}\r\n.info > div.links{\r\n    -ms-grid-row-align: center;\r\n        align-self: center;\r\n}\r\n.info > div.links > button{\r\n    border: none;\r\n    padding: 7pt;\r\n    cursor: pointer;\r\n}\r\n.info > div.links {\r\n    font-weight: bolder;\r\n}"

/***/ }),

/***/ "./src/app/projects/projectdetail/projectdetail.component.html":
/*!*********************************************************************!*\
  !*** ./src/app/projects/projectdetail/projectdetail.component.html ***!
  \*********************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"project-popup\" (click)=\"popupClicked($event)\">\n    <div *ngIf=\"project\">\n        <app-carousel [images]=\"project.carouselImages\"></app-carousel>\n        <div class=\"info\">\n            <div>\n              {{project.ProjectName}}\n            </div>\n            <div class=\"desc\">\n                <p [innerHTML]=\"project.Description\"></p>\n            </div>\n            <div class=\"links\" *ngIf=\"project.showLink\" [ngSwitch]=\"project.linkType\"> \n              <border-hover-led-button\n               *ngSwitchCase=\"1\"  [width]=178 [link]=\"project.linkhref\">\n               {{project.linkText}}</border-hover-led-button></div>\n        </div>\n        <div class=\"close\" routerLink=\"/projects\"><i  class=\"fa fa-times\"></i></div>\n    </div>\n  </div>\n  \n  "

/***/ }),

/***/ "./src/app/projects/projectdetail/projectdetail.component.ts":
/*!*******************************************************************!*\
  !*** ./src/app/projects/projectdetail/projectdetail.component.ts ***!
  \*******************************************************************/
/*! exports provided: ProjectdetailComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ProjectdetailComponent", function() { return ProjectdetailComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _project_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../project.service */ "./src/app/projects/project.service.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/platform-browser */ "./node_modules/@angular/platform-browser/fesm5/platform-browser.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var ProjectdetailComponent = /** @class */ (function () {
    function ProjectdetailComponent(projectService, route, titleService, router) {
        this.projectService = projectService;
        this.route = route;
        this.titleService = titleService;
        this.router = router;
        this.title = 'Arun Babu Madhavan | Projects - ';
    }
    ProjectdetailComponent.prototype.popupClicked = function (event) {
        if (event.srcElement.className == "project-popup")
            this.router.navigate(["/projects"]);
    };
    ProjectdetailComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.route.params.subscribe(function (params) {
            _this.projectService.getProjectDetail(+params['id'])
                .subscribe(function (x) {
                _this.project = x;
                _this.titleService.setTitle(_this.title + _this.project.ProjectName);
            });
        });
    };
    ProjectdetailComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-projectdetail',
            template: __webpack_require__(/*! ./projectdetail.component.html */ "./src/app/projects/projectdetail/projectdetail.component.html"),
            styles: [__webpack_require__(/*! ./projectdetail.component.css */ "./src/app/projects/projectdetail/projectdetail.component.css")]
        }),
        __metadata("design:paramtypes", [_project_service__WEBPACK_IMPORTED_MODULE_1__["ProjectService"], _angular_router__WEBPACK_IMPORTED_MODULE_2__["ActivatedRoute"], _angular_platform_browser__WEBPACK_IMPORTED_MODULE_3__["Title"], _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"]])
    ], ProjectdetailComponent);
    return ProjectdetailComponent;
}());



/***/ }),

/***/ "./src/app/projects/projects.component.css":
/*!*************************************************!*\
  !*** ./src/app/projects/projects.component.css ***!
  \*************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".project-container{\r\n\r\n    min-height: 100vh;\r\n    display: flex;\r\n    flex-direction: column;\r\n    /* justify-content: center; */\r\n    background-image: none;\r\n    align-items: center;\r\n \r\n    background-repeat: no-repeat;\r\n    background-position-x: right;\r\n    background-position-y: bottom;\r\n}\r\n\r\n.container-gallery{\r\n    flex-wrap: wrap;\r\n    flex-direction: row;\r\n     width: 100%;    \r\n    justify-content: center;\r\n    box-sizing: border-box;\r\n    max-width: 1080px;;\r\n    display: flex;\r\n \r\n   }\r\n\r\n.filter-container{\r\n    display: flex;\r\n    flex-direction: row;\r\n    justify-content: center;\r\n    width: 100%;\r\n  \r\n}\r\n\r\n.filter-container >div{\r\n    padding: 25px 10px;\r\n    text-transform: uppercase;\r\n    cursor: pointer;\r\n}\r\n\r\n@media screen and (min-width: 850px) {\r\n  .project-container{\r\n    margin-top:50px;\r\n  }\r\n  .filter-container >div{\r\n      padding: 25px 50px;\r\n  }    \r\n}\r\n\r\na {\r\n    \r\n    text-decoration: none;\r\n    font-size: 14pt;\r\n    color: #ccc;\r\n    position: relative;\r\n  }\r\n\r\na:hover,a.active{\r\n    color: #000;\r\n    font-weight: 800;\r\n  }\r\n\r\n.gallery-item{\r\n    width: calc(100vw - 50pt);\r\n    cursor: pointer;\r\n    height: 170px;\r\n    background-color: white;\r\n    box-shadow: 0 2px 3px 2px #ccc;\r\n    display: inline-block;\r\n    position: relative;\r\n    text-align: center;\r\n    background-repeat: no-repeat;\r\n    background-size: cover; \r\n    margin: 10pt;\r\n    background-position: center;  \r\n  }\r\n\r\n.gallery-item > div {\r\n    align-items: center;\r\n    width: 100%;\r\n    height: 170px;\r\n    align-content: center;\r\n    justify-content: center;\r\n    /* vertical-align: bottom; */\r\n    display: flex;\r\n    flex-direction: column;\r\n         position: absolute;\r\n  }\r\n\r\n@media screen and (min-width: 480px) {\r\n\r\n    .project-container{\r\n      margin-top:50px;\r\n      background-image: url('/assets/images/projects/skills_wall.png');\r\n    \r\n  }\r\n    a {\r\n        font-size: 26px;\r\n    }\r\n\r\n    .gallery-item{\r\n        width: 315px;\r\n        height: 256px;\r\n        position: relative;\r\n        display: inline-block;\r\n        background-color: white;\r\n        box-shadow: 0 2px 3px 2px #ccc;\r\n    \r\n    }\r\n\r\n    .filter-container{\r\n    \r\n      margin-top: 70px;\r\n    }\r\n\r\n\r\n    .gallery-item > div {\r\n        height: 256px;\r\n      }\r\n    \r\n}\r\n\r\na.active , .mixitup-control-active a{\r\n    color:#000;\r\n    font-weight: 800;\r\n    \r\n  }\r\n\r\na:before {\r\n    position: absolute;\r\n    top: 100%;\r\n    left: 0;\r\n    width: 100%;\r\n    height: 3px;\r\n    background-color: #04C2C9;\r\n    content: '';\r\n    -webkit-transform: translateY(8px);\r\n            transform: translateY(8px);\r\n    opacity: 0;\r\n    font-weight: 600;\r\n    transition-property: opacity, -webkit-transform;\r\n    transition-property: transform, opacity;\r\n    transition-property: transform, opacity, -webkit-transform;\r\n    transition-duration: .3s;\r\n  }\r\n\r\na:not(.active):hover:before {\r\n    -webkit-transform: translateY(0);\r\n            transform: translateY(0);\r\n    font-weight: 600;\r\n    opacity: 1;\r\n  }\r\n\r\n.gallery-item > div  > div{\r\n      display: none;\r\n      position: absolute;\r\n  }\r\n\r\n.gallery-item:hover {\r\n    background-image: none!important;\r\n  }\r\n\r\n.gallery-item:hover > div  > div{\r\n    display: block;\r\n    color: #04C2C9;\r\n  }\r\n\r\n.gallery-item span{\r\n      font-weight: bold;\r\n      color: #000;\r\n  }\r\n\r\n.gallery-item:hover > div  >div:first-child{\r\n    line-height: 21pt;\r\n\r\n}\r\n\r\n.gallery-item:hover > div  >div:first-child{\r\n     top: 15%;\r\n  \r\n  }\r\n\r\n.gallery-item:hover > div  >div:last-child{\r\n     bottom:15%;\r\n    \r\n  }\r\n\r\nbutton{\r\n    background:#E31B6D;\r\n    color:#fff;\r\n    border:none;\r\n    position:relative;\r\n    height:32pt;\r\n    font-size:1.2em;\r\n    padding:0.6em 2em;\r\n    cursor:pointer;\r\n    transition:800ms ease all;\r\n    outline:none;\r\n  }\r\n\r\nbutton:hover{\r\n    background:#fff;\r\n    color:#E31B6D;\r\n  }\r\n\r\nbutton:before,button:after{\r\n    content:'';\r\n    position:absolute;\r\n    top:0;\r\n    right:0;\r\n    height:2px;\r\n    width:0;\r\n    background: #E31B6D;\r\n    transition:400ms ease all;\r\n  }\r\n\r\nbutton:after{\r\n    right:inherit;\r\n    top:inherit;\r\n    left:0;\r\n    bottom:0;\r\n  }\r\n\r\nbutton:hover:before,button:hover:after{\r\n    width:100%;\r\n    transition:800ms ease all;\r\n  }\r\n  \r\n  \r\n  "

/***/ }),

/***/ "./src/app/projects/projects.component.html":
/*!**************************************************!*\
  !*** ./src/app/projects/projects.component.html ***!
  \**************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\r\n<div class=\"project-container\">\r\n    <div class=\"filter-container\">\r\n       <div class=\"filter active\" data-filter=\"all\"><a>ALL</a></div>\r\n        <div class=\"filter\" data-filter=\".js\"><a>JS</a></div>\r\n        <div class=\"filter\" data-filter=\".games\"><a>Games</a></div>\r\n        <div class=\"filter\" data-filter=\".android\"><a>Android</a></div>\r\n        <div class=\"filter\" data-filter=\".c\"><a>Java & C/C++</a></div>\r\n      </div>\r\n      <div class=\"container-gallery\">\r\n              <div class=\"gallery-item mix\" [ngClass]=\"project.Categories.join(' ')\" *ngFor=\"let project of projects\"\r\n              [ngStyle]=\"{'background-image': 'url('+ imagesDir + project.ImageFile +')'}\"\r\n              [routerLink]=\"['project',project.ProjectId]\">\r\n              <div>\r\n                  <div>\r\n                      <span>{{project.ProjectName}}</span><br/>\r\n                     {{ project.ShortDesc }}\r\n                 </div> \r\n                  <div>\r\n                   <button *ngIf=\"!project.InProgress; else inProgressButton\">More details</button>\r\n                 <ng-template #inProgressButton><button>In progress</button></ng-template>  \r\n                  </div>\r\n                </div>\r\n              </div>\r\n            </div>\r\n</div>\r\n<div [@routerTransition]=\"getState(o1)\">\r\n<router-outlet #o1=\"outlet\"></router-outlet>\r\n</div>\r\n<app-navigation-arrows [prevPage]=\"['/profile']\"  [nextPage]=\"['/articles']\" ></app-navigation-arrows>"

/***/ }),

/***/ "./src/app/projects/projects.component.ts":
/*!************************************************!*\
  !*** ./src/app/projects/projects.component.ts ***!
  \************************************************/
/*! exports provided: ProjectsComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ProjectsComponent", function() { return ProjectsComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var mixitup__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! mixitup */ "./node_modules/mixitup/dist/mixitup.js");
/* harmony import */ var mixitup__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(mixitup__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _router_transtions__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../router.transtions */ "./src/app/router.transtions.ts");
/* harmony import */ var _project_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./project.service */ "./src/app/projects/project.service.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var ProjectsComponent = /** @class */ (function () {
    function ProjectsComponent(projectService) {
        this.projectService = projectService;
        this.imagesDir = "assets/images/projects/";
    }
    ProjectsComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.projectService.getProjects()
            .subscribe(function (x) {
            _this.projects = x;
            setTimeout(function () {
                var mixer = mixitup__WEBPACK_IMPORTED_MODULE_1___default()(".container-gallery", {
                    animation: {
                        easing: 'ease-in-out',
                        animateResizeContainer: false,
                        duration: 900,
                    }
                });
            }, 1000);
        });
    };
    ProjectsComponent.prototype.getState = function (outlet) {
        return outlet && outlet.activatedRouteData
            && outlet.activatedRouteData['state'];
    };
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewChild"])("containerobj"),
        __metadata("design:type", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ElementRef"])
    ], ProjectsComponent.prototype, "containerRef", void 0);
    ProjectsComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            template: __webpack_require__(/*! ./projects.component.html */ "./src/app/projects/projects.component.html"),
            animations: [_router_transtions__WEBPACK_IMPORTED_MODULE_2__["routerTransition"]],
            styles: [__webpack_require__(/*! ./projects.component.css */ "./src/app/projects/projects.component.css")]
        }),
        __metadata("design:paramtypes", [_project_service__WEBPACK_IMPORTED_MODULE_3__["ProjectService"]])
    ], ProjectsComponent);
    return ProjectsComponent;
}());



/***/ }),

/***/ "./src/app/projects/projects.module.ts":
/*!*********************************************!*\
  !*** ./src/app/projects/projects.module.ts ***!
  \*********************************************/
/*! exports provided: ProjectsModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ProjectsModule", function() { return ProjectsModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _projects_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./projects.component */ "./src/app/projects/projects.component.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _shared_shared_module__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../shared/shared.module */ "./src/app/shared/shared.module.ts");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");
/* harmony import */ var _project_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./project.service */ "./src/app/projects/project.service.ts");
/* harmony import */ var _projectdetail_projectdetail_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./projectdetail/projectdetail.component */ "./src/app/projects/projectdetail/projectdetail.component.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};








var ProjectsModule = /** @class */ (function () {
    function ProjectsModule() {
    }
    ProjectsModule = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"])({
            imports: [
                _angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"],
                _angular_router__WEBPACK_IMPORTED_MODULE_3__["RouterModule"],
                _shared_shared_module__WEBPACK_IMPORTED_MODULE_4__["SharedModule"],
                _angular_common_http__WEBPACK_IMPORTED_MODULE_5__["HttpClientModule"]
            ],
            providers: [_project_service__WEBPACK_IMPORTED_MODULE_6__["ProjectService"]],
            declarations: [_projects_component__WEBPACK_IMPORTED_MODULE_2__["ProjectsComponent"], _projectdetail_projectdetail_component__WEBPACK_IMPORTED_MODULE_7__["ProjectdetailComponent"]],
            exports: []
        })
    ], ProjectsModule);
    return ProjectsModule;
}());



/***/ }),

/***/ "./src/app/router.transtions.ts":
/*!**************************************!*\
  !*** ./src/app/router.transtions.ts ***!
  \**************************************/
/*! exports provided: routerTransition */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "routerTransition", function() { return routerTransition; });
/* harmony import */ var _angular_animations__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/animations */ "./node_modules/@angular/animations/fesm5/animations.js");

var routerTransition = Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["trigger"])('routerTransition', [
    Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["transition"])('* => article', [
        Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["query"])(':enter', Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["style"])({ position: 'fixed', width: '100%' }), { optional: true }),
        Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["group"])([Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["query"])(' :enter', [
                Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["style"])({ opacity: 0, transform: 'translateY(-100%)' })
            ], { optional: true }),
            Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["query"])(':enter', [
                Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["style"])({ opacity: 0, transform: 'translateY(-100%)' }),
                Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["animate"])('750ms ease-in-out', Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["style"])({ opacity: 1, transform: 'translateY(0)' }))
            ], { optional: true })])
    ]),
    Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["transition"])('* => profile', [
        Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["query"])(':enter', Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["style"])({ position: 'fixed', width: '100%' }), { optional: true }),
        Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["group"])([Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["query"])(' :enter', [
                Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["style"])({ opacity: 0, transform: 'translateY(-100%)' })
            ], { optional: true }),
            Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["query"])(':enter', [
                Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["style"])({ opacity: 0, transform: 'translateY(-100%)' }),
                Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["animate"])('750ms ease-in-out', Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["style"])({ opacity: 1, transform: 'translateY(0)' }))
            ], { optional: true })])
    ]),
    Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["transition"])('* => about', [
        Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["query"])(':enter', Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["style"])({ position: 'fixed', width: '100%' }), { optional: true }),
        Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["group"])([Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["query"])(' :enter', [
                Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["style"])({ opacity: 0, transform: 'translateX(100%)' })
            ], { optional: true }),
            Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["query"])(':enter', [
                Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["style"])({ opacity: 0, transform: 'translateX(100%)' }),
                Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["animate"])('750ms ease-in-out', Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["style"])({ opacity: 1, transform: 'translateX(0)' }))
            ], { optional: true })])
    ]),
    Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["transition"])('* => articles', [
        Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["query"])(':enter', Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["style"])({ position: 'fixed', width: '100%' }), { optional: true }),
        Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["group"])([Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["query"])(' :enter', [
                Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["style"])({ opacity: 0, transform: 'scale(2)' })
            ], { optional: true }),
            Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["query"])(':enter', [
                Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["style"])({ opacity: 0, transform: 'scale(2)' }),
                Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["animate"])('750ms ease-in-out', Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["style"])({ opacity: 1, transform: 'scale(1)' }))
            ], { optional: true })])
    ]),
    Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["transition"])('* => project', [
        Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["query"])(':enter', Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["style"])({ opacity: 0, transform: 'scale(0)' }), { optional: true }),
        Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["group"])([Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["query"])(' :enter', [
                Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["style"])({ opacity: 1, transform: 'scale(1)' })
            ], { optional: true }),
            Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["query"])(':enter', [
                Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["style"])({ opacity: 0, transform: 'scale(0)' }),
                Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["animate"])('450ms ease-in-out', Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["style"])({ opacity: 1, transform: 'scale(1)' }))
            ], { optional: true })])
    ]),
    Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["transition"])('* => projects', [
        Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["query"])(':enter', Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["style"])({ position: 'fixed', width: '100%' }), { optional: true }),
        Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["group"])([Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["query"])(' :enter', [
                Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["style"])({ opacity: 0, transform: 'scale(0)' })
            ], { optional: true }),
            Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["query"])(':enter', [
                Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["style"])({ opacity: 0, transform: 'scale(0)' }),
                Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["animate"])('750ms ease-in-out', Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["style"])({ opacity: 1, transform: 'scale(1)' }))
            ], { optional: true })])
    ]),
]);


/***/ }),

/***/ "./src/app/shared/buttons/border-hover-led-button/border-hover-led-button.component.css":
/*!**********************************************************************************************!*\
  !*** ./src/app/shared/buttons/border-hover-led-button/border-hover-led-button.component.css ***!
  \**********************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\r\n.spot {\r\n    position: absolute;\r\n    width: 100%;\r\n    height: 100%;\r\n    top: 0;\r\n    left: 0;\r\n  }\r\n\r\n:focus {\r\n    outline: none;\r\n    box-shadow: none;\r\n    border-color: transparent;\r\n}\r\n\r\n.svg-wrapper {\r\n    margin-top: 0;\r\n    position: relative;\r\n    /*make sure to use same height/width as in the html*/\r\n    height: 40px;\r\n    display: inline-block;\r\n    border-radius: 3px;\r\n    margin-left: 5px;\r\n    margin-right: 5px;\r\n    cursor: pointer;\r\n    outline: none;\r\n    \r\n  }\r\n\r\n#shape {\r\n    stroke-width: 6px;\r\n    fill: transparent;\r\n    stroke: #009FFD;\r\n    stroke-dasharray: 85 400;\r\n    stroke-dashoffset: -220;\r\n    transition: 1s all ease;\r\n  }\r\n\r\n#text {\r\n    margin-top: -24pt;\r\n    text-align: center;\r\n  }\r\n\r\n#text a {\r\n    color: black;\r\n    text-decoration: none;\r\n    font-size: 1.3em;\r\n  }\r\n\r\n.svg-wrapper:hover #shape {\r\n    stroke-dasharray: 50 0;\r\n    stroke-width: 3pt;\r\n    stroke-dashoffset: 0;\r\n    stroke: #06D6A0;\r\n\r\n  }"

/***/ }),

/***/ "./src/app/shared/buttons/border-hover-led-button/border-hover-led-button.component.html":
/*!***********************************************************************************************!*\
  !*** ./src/app/shared/buttons/border-hover-led-button/border-hover-led-button.component.html ***!
  \***********************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\r\n<div class=\"svg-wrapper\" [style.width.px]=\"width\" >\r\n  <svg height=\"40\" [routerLink]=\"routerLink\" [attr.width]=\"width\">\r\n    <rect id=\"shape\" height=\"40\" [attr.width]=\"width\" [style.stroke-dashoffset]=\"dashOffset\"></rect>\r\n    </svg><div id=\"text\">\r\n      <a (click)=\"OnClick()\" [href]=\"link\" target=\"_blank\"><span class=\"spot\"></span><ng-content></ng-content></a>\r\n    </div>\r\n  \r\n</div>\r\n"

/***/ }),

/***/ "./src/app/shared/buttons/border-hover-led-button/border-hover-led-button.component.ts":
/*!*********************************************************************************************!*\
  !*** ./src/app/shared/buttons/border-hover-led-button/border-hover-led-button.component.ts ***!
  \*********************************************************************************************/
/*! exports provided: BorderHoverLedButtonComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "BorderHoverLedButtonComponent", function() { return BorderHoverLedButtonComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var BorderHoverLedButtonComponent = /** @class */ (function () {
    function BorderHoverLedButtonComponent() {
        this.ButtonClicked = new _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"]();
        this.width = 150;
    }
    BorderHoverLedButtonComponent.prototype.OnClick = function () {
        this.ButtonClicked.emit();
    };
    BorderHoverLedButtonComponent.prototype.ngOnInit = function () {
        this.dashOffset = 220;
    };
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Output"])(),
        __metadata("design:type", _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"])
    ], BorderHoverLedButtonComponent.prototype, "ButtonClicked", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])(),
        __metadata("design:type", Number)
    ], BorderHoverLedButtonComponent.prototype, "width", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])(),
        __metadata("design:type", Array)
    ], BorderHoverLedButtonComponent.prototype, "routerLink", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])(),
        __metadata("design:type", String)
    ], BorderHoverLedButtonComponent.prototype, "link", void 0);
    BorderHoverLedButtonComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'border-hover-led-button',
            template: __webpack_require__(/*! ./border-hover-led-button.component.html */ "./src/app/shared/buttons/border-hover-led-button/border-hover-led-button.component.html"),
            styles: [__webpack_require__(/*! ./border-hover-led-button.component.css */ "./src/app/shared/buttons/border-hover-led-button/border-hover-led-button.component.css")]
        }),
        __metadata("design:paramtypes", [])
    ], BorderHoverLedButtonComponent);
    return BorderHoverLedButtonComponent;
}());



/***/ }),

/***/ "./src/app/shared/buttons/right-point-button/right-point-button.component.css":
/*!************************************************************************************!*\
  !*** ./src/app/shared/buttons/right-point-button/right-point-button.component.css ***!
  \************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\r\na.night{\r\n    color: #fff;\r\n    border: 1px solid #fff;\r\n    box-shadow:none;\r\n  }\r\n\r\na.night:hover {\r\n    color: #04C2C9;\r\n  }\r\n\r\na.night:hover::before {\r\n    box-shadow: inset 0 0 0 13em #ffffff;\r\n  }\r\n\r\na {\r\n    z-index: 1000;\r\n    position: absolute;\r\n    top: 0;\r\n    left: 0;\r\n    right: 0;\r\n    bottom: 0;\r\n    margin: auto;\r\n    text-decoration: none;\r\n    cursor: pointer;\r\n    border: 1px solid #000;\r\n    border-radius: 8px;\r\n    height: 2.8em;\r\n    width: 12em;\r\n    padding: 0;\r\n    outline: none;\r\n    overflow: hidden;\r\n    color: #000;\r\n    transition: color 0.3s 0.1s ease-out;\r\n    text-align: center;\r\n    line-height: 250%;\r\n    box-shadow: 1px 2.5px #ccc;\r\n  }\r\n\r\na::before {\r\n    position: absolute;\r\n    top: 0;\r\n    left: 0;\r\n    right: 0;\r\n    bottom: 0;\r\n    margin: auto;\r\n    content: '';\r\n    border-radius: 50%;\r\n    display: block;\r\n    width: 21em;\r\n    height: 20em;\r\n    line-height: 20em;\r\n    left: -5em;\r\n    text-align: center;\r\n    transition: box-shadow 0.5s ease-out;\r\n    z-index: -1;\r\n  }\r\n\r\na:hover {\r\n    color: black;\r\n  }\r\n\r\na:hover::before {\r\n    box-shadow: inset 0 0 0 13em #04C2C9;\r\n  }\r\n  "

/***/ }),

/***/ "./src/app/shared/buttons/right-point-button/right-point-button.component.html":
/*!*************************************************************************************!*\
  !*** ./src/app/shared/buttons/right-point-button/right-point-button.component.html ***!
  \*************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<a dayNightColor [routerLink]=\"routerLink\" (mouseenter)=\"OnMouseOver(true)\" \r\n(mouseleave)=\"OnMouseOver(false)\" ><ng-content></ng-content>  &nbsp;&nbsp;<i class=\"fa fa-arrow-right\"></i></a>"

/***/ }),

/***/ "./src/app/shared/buttons/right-point-button/right-point-button.component.ts":
/*!***********************************************************************************!*\
  !*** ./src/app/shared/buttons/right-point-button/right-point-button.component.ts ***!
  \***********************************************************************************/
/*! exports provided: RightPointButtonComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "RightPointButtonComponent", function() { return RightPointButtonComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var RightPointButtonComponent = /** @class */ (function () {
    function RightPointButtonComponent() {
        this.hover = new _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"]();
    }
    RightPointButtonComponent.prototype.ngOnInit = function () {
    };
    RightPointButtonComponent.prototype.OnMouseOver = function (isMouseonTop) {
        if (this.hover)
            this.hover.emit(isMouseonTop);
    };
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])(),
        __metadata("design:type", Array)
    ], RightPointButtonComponent.prototype, "routerLink", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Output"])(),
        __metadata("design:type", _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"])
    ], RightPointButtonComponent.prototype, "hover", void 0);
    RightPointButtonComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'right-point-button',
            template: __webpack_require__(/*! ./right-point-button.component.html */ "./src/app/shared/buttons/right-point-button/right-point-button.component.html"),
            styles: [__webpack_require__(/*! ./right-point-button.component.css */ "./src/app/shared/buttons/right-point-button/right-point-button.component.css")]
        })
    ], RightPointButtonComponent);
    return RightPointButtonComponent;
}());



/***/ }),

/***/ "./src/app/shared/calendar/calendar.component.css":
/*!********************************************************!*\
  !*** ./src/app/shared/calendar/calendar.component.css ***!
  \********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\r\n.calendar\r\n{\r\n  font-size: 1em; \r\n  display: block;\r\n  position: relative;\r\n  width: 7em;\r\n  height: 7em;\r\n  background-color: #fff;\r\n  margin: 2em auto;\r\n  border-radius: 0.6em;\r\n  box-shadow: 0 1px 0 #bdbdbd, 0 2px 0 #fff, 0 3px 0 #bdbdbd, 0 4px 0 #fff, 0 5px 0 #bdbdbd, 0 0 0 1px #bdbdbd;\r\n  overflow: hidden;\r\n  -webkit-backface-visibility: hidden;\r\n          backface-visibility: hidden;\r\n  -webkit-transform: rotate(0deg) skewY(0deg);\r\n          transform: rotate(0deg) skewY(0deg);\r\n  -webkit-transform-origin: 50% 10%;\r\n          transform-origin: 50% 10%;\r\n  transform-origin: 50% 10%;\r\n}\r\n\r\n.calendar strong\r\n{\r\n  position: absolute;\r\n  top: 0;\r\n  padding: 0.4em 0;\r\n  color: #fff;\r\n  background-color: #fd9f1b;\r\n  border-bottom: 1px dashed #f37302;\r\n  box-shadow: 0 2px 0 #fd9f1b;\r\n}\r\n\r\n.calendar span\r\n{\r\n  width: 100%;\r\n  font-size: 1.8em;\r\n  letter-spacing: -0.05em;\r\n  padding-top: 1.8em;\r\n  color: #2f2f2f;\r\n}\r\n\r\n.calendar  > *\r\n{\r\n  display: block;\r\n  width: 100%;\r\n  font-size: 1em;\r\n  font-weight: bold;\r\n  font-style: normal;\r\n  text-align: center;\r\n}\r\n\r\n.calendar em\r\n{\r\n  position: absolute;\r\n  bottom: 0.3em;\r\n  color: #fd9f1b;\r\n}\r\n"

/***/ }),

/***/ "./src/app/shared/calendar/calendar.component.html":
/*!*********************************************************!*\
  !*** ./src/app/shared/calendar/calendar.component.html ***!
  \*********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"calendar\">\n    <em>{{calendarDate | date:\"MMMM\" }}</em>\n    <strong>{{calendarDate | date:\"yyyy\"}}</strong>\n    <span>{{calendarDate | date:\"d\"}}</span>\n</div>"

/***/ }),

/***/ "./src/app/shared/calendar/calendar.component.ts":
/*!*******************************************************!*\
  !*** ./src/app/shared/calendar/calendar.component.ts ***!
  \*******************************************************/
/*! exports provided: CalendarComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CalendarComponent", function() { return CalendarComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var CalendarComponent = /** @class */ (function () {
    function CalendarComponent() {
    }
    CalendarComponent.prototype.ngOnInit = function () {
    };
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])(),
        __metadata("design:type", Date)
    ], CalendarComponent.prototype, "calendarDate", void 0);
    CalendarComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-calendar',
            template: __webpack_require__(/*! ./calendar.component.html */ "./src/app/shared/calendar/calendar.component.html"),
            styles: [__webpack_require__(/*! ./calendar.component.css */ "./src/app/shared/calendar/calendar.component.css")]
        }),
        __metadata("design:paramtypes", [])
    ], CalendarComponent);
    return CalendarComponent;
}());



/***/ }),

/***/ "./src/app/shared/carousel/carousel.component.css":
/*!********************************************************!*\
  !*** ./src/app/shared/carousel/carousel.component.css ***!
  \********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".image-container > div{\r\n    width: 100%;\r\n    position: absolute;\r\n    top: 0;\r\n    height: 140px;\r\n    background-position: unset;\r\n    background-repeat: no-repeat;\r\n    visibility: hidden;\r\n    opacity: 0;\r\n    transition: all 750ms ease-in-out;\r\n    background-color: black;\r\n}\r\n\r\n\r\n.carousel-container{\r\n    height: 150px;\r\n  \r\n    position: relative;\r\n}\r\n\r\n\r\n@media screen and (min-width: 420px) {\r\n    .carousel-container{\r\n        height: 300px;\r\n      \r\n        position: relative;\r\n    }\r\n    .image-container > div{\r\n\r\n        height: 290px;\r\n    }\r\n    }\r\n\r\n\r\n@media screen and (min-width: 687px) {\r\n.carousel-container{\r\n    height: 460px;\r\n    width: 100%;\r\n    position: relative;\r\n}\r\n.image-container > div{\r\n    background-position: center;\r\n    height: 450px;\r\n}\r\n}\r\n\r\n\r\n.slider-controls{\r\n    position: absolute;\r\n    top: 46%;\r\n    width: 100%;\r\n   \r\n\r\n}\r\n\r\n\r\n.slider-radio-controls{\r\n    display: none;\r\n}\r\n\r\n\r\n.slider-controls >label::after{\r\n    padding-left: 6pt;\r\n    padding-top: 5.5pt;\r\n    padding-right: 6pt;\r\n    height: 45px;\r\n    width: 45px;\r\n    border: 1px solid transparent;\r\n\r\n    border-radius: 50%;\r\n    transition: background-color 750ms ease-in-out;\r\n}\r\n\r\n\r\n.slider-controls >label{\r\n    font-family: 'FontAwesome';\r\n    color: rgba(201,201,201,0.4);\r\n    font-size: xx-large;\r\n    cursor: pointer;\r\n  \r\n}\r\n\r\n\r\n.slider-controls >label:hover::after\r\n{\r\n    color: rgba(201,201,201,0.9);\r\n    background-color:rgba(0,0,0,0.7);\r\n}\r\n\r\n\r\n#slide1:checked ~ .slider-controls > label:nth-child(2),\r\n#slide1:checked ~ .slider-controls > label:nth-last-child(1),\r\n{\r\n      display: block;  \r\n     \r\n}\r\n\r\n\r\n#slide1:checked ~ .slider-controls > label:nth-child(2)::after,\r\n#slide2:checked ~ .slider-controls > label:nth-child(3)::after,\r\n#slide3:checked ~ .slider-controls > label:nth-child(4)::after,\r\n#slide4:checked ~ .slider-controls > label:nth-child(5)::after,\r\n#slide5:checked ~ .slider-controls > label:nth-child(6)::after,\r\n#slide6:checked ~ .slider-controls > label:nth-child(7)::after\r\n{\r\n    float: right;\r\n    content: '\\f054';\r\n    text-align: right;\r\n}\r\n\r\n\r\n#slide1:checked ~ .slider-controls > label:nth-last-child(1)::after{\r\n    float: left;\r\n    content: '\\f053';\r\n}\r\n\r\n\r\n#slide2:checked ~ .slider-controls > label:nth-child(1)::after,\r\n#slide3:checked ~ .slider-controls > label:nth-child(2)::after,\r\n#slide4:checked ~ .slider-controls > label:nth-child(3)::after,\r\n#slide5:checked ~ .slider-controls > label:nth-child(4)::after,\r\n#slide6:checked ~ .slider-controls > label:nth-child(5)::after,\r\n#slide7:checked ~ .slider-controls > label:nth-child(6)::after,\r\n#slide8:checked ~ .slider-controls > label:nth-child(7)::after{\r\n    float: left;\r\n    content: '\\f053';\r\n}\r\n\r\n\r\n.slider-radio-controls:last-of-type:checked ~ .slider-controls > label:nth-last-child(2)::after{\r\n    float: left;\r\n    content: '\\f053';\r\n}\r\n\r\n\r\n.slider-radio-controls:last-of-type:checked ~ .slider-controls > label:nth-child(1)::after{\r\n    float: right;\r\n    content: '\\f054';\r\n    text-align: right;\r\n}\r\n\r\n\r\n.image-container{\r\n    width: 100%;\r\n    position: relative;\r\n\r\n}\r\n\r\n\r\n#slide1:checked ~ .image-container > div:nth-child(1),\r\n#slide2:checked ~ .image-container > div:nth-child(2),\r\n#slide3:checked ~ .image-container > div:nth-child(3),\r\n#slide4:checked ~ .image-container > div:nth-child(4),\r\n#slide5:checked ~ .image-container > div:nth-child(5),\r\n#slide6:checked ~ .image-container > div:nth-child(6),\r\n#slide7:checked ~ .image-container > div:nth-child(7)\r\n{\r\n    visibility: visible;\r\n    opacity: 1;\r\n    \r\n}"

/***/ }),

/***/ "./src/app/shared/carousel/carousel.component.html":
/*!*********************************************************!*\
  !*** ./src/app/shared/carousel/carousel.component.html ***!
  \*********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"carousel-container\">\r\n    <input type=\"radio\" class=\"slider-radio-controls\" name=\"slider\" *ngFor=\"let image of images; let i = index\" [checked]=\"i==0\" [id]=\"'slide'+(i+1)\">\r\n\r\n    <div class=\"image-container\">\r\n      <div class=\"image\" *ngFor=\"let image of images; let i = index\" [ngStyle]=\"{'background-image': 'url(' + image + ')'}\">\r\n        \r\n      </div>\r\n    </div>\r\n\r\n    <div class=\"slider-controls\">\r\n      <label [for]=\"'slide'+(i+1)\" *ngFor=\"let image of images; let i = index\"></label> \r\n    </div>\r\n  \r\n  </div>  "

/***/ }),

/***/ "./src/app/shared/carousel/carousel.component.ts":
/*!*******************************************************!*\
  !*** ./src/app/shared/carousel/carousel.component.ts ***!
  \*******************************************************/
/*! exports provided: CarouselComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CarouselComponent", function() { return CarouselComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var CarouselComponent = /** @class */ (function () {
    function CarouselComponent() {
    }
    CarouselComponent.prototype.ngOnInit = function () {
    };
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])(),
        __metadata("design:type", Array)
    ], CarouselComponent.prototype, "images", void 0);
    CarouselComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-carousel',
            template: __webpack_require__(/*! ./carousel.component.html */ "./src/app/shared/carousel/carousel.component.html"),
            styles: [__webpack_require__(/*! ./carousel.component.css */ "./src/app/shared/carousel/carousel.component.css")]
        }),
        __metadata("design:paramtypes", [])
    ], CarouselComponent);
    return CarouselComponent;
}());



/***/ }),

/***/ "./src/app/shared/directives/color-palette.directive.ts":
/*!**************************************************************!*\
  !*** ./src/app/shared/directives/color-palette.directive.ts ***!
  \**************************************************************/
/*! exports provided: ColorPaletteDirective */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ColorPaletteDirective", function() { return ColorPaletteDirective; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var colorClasses = ["blueberry"]; //,"blue","green", "orange","purple"]
var ColorPaletteDirective = /** @class */ (function () {
    function ColorPaletteDirective() {
    }
    ColorPaletteDirective.prototype.ngOnInit = function () {
        this.class = colorClasses[parseInt((Math.random() * 100).toString()) % colorClasses.length];
    };
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["HostBinding"])("class"),
        __metadata("design:type", String)
    ], ColorPaletteDirective.prototype, "class", void 0);
    ColorPaletteDirective = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Directive"])({
            selector: '[colorPalette]'
        }),
        __metadata("design:paramtypes", [])
    ], ColorPaletteDirective);
    return ColorPaletteDirective;
}());



/***/ }),

/***/ "./src/app/shared/directives/day-night-color.directive.ts":
/*!****************************************************************!*\
  !*** ./src/app/shared/directives/day-night-color.directive.ts ***!
  \****************************************************************/
/*! exports provided: DayNightColorDirective */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DayNightColorDirective", function() { return DayNightColorDirective; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _services_day_night_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../services/day-night.service */ "./src/app/shared/services/day-night.service.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var DayNightColorDirective = /** @class */ (function () {
    function DayNightColorDirective(dayNightServiceInstance) {
        this.dayNightServiceInstance = dayNightServiceInstance;
    }
    DayNightColorDirective.prototype.ngOnInit = function () {
        this.isDark = !this.dayNightServiceInstance.isDay();
    };
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["HostBinding"])("class.night"),
        __metadata("design:type", Boolean)
    ], DayNightColorDirective.prototype, "isDark", void 0);
    DayNightColorDirective = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Directive"])({
            selector: '[dayNightColor]'
        }),
        __metadata("design:paramtypes", [_services_day_night_service__WEBPACK_IMPORTED_MODULE_1__["DayNightService"]])
    ], DayNightColorDirective);
    return DayNightColorDirective;
}());



/***/ }),

/***/ "./src/app/shared/footer/footer.component.css":
/*!****************************************************!*\
  !*** ./src/app/shared/footer/footer.component.css ***!
  \****************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "footer {\r\n    position: relative;\r\n    bottom: 0;\r\n    left: 0;\r\n    display: flex;\r\n    padding: 18px 0px 30px 0px; \r\n    font-family: 'Roboto','Sans serif';\r\n    background-color: #1B242D;\r\n    border-top: 3px solid #E31B6D;\r\n    flex-direction: column;\r\n    align-items: center;\r\n    color:#fff;\r\n    z-index: 1000;\r\n}\r\n.footnote{\r\n    font-size: 10pt;\r\n}\r\nfooter > div:first-child{\r\n    top:5pt;\r\n    right: 0pt;\r\n \r\n  display: flex;\r\n  flex-direction: column;\r\n  align-items: center;\r\n  font-size: 8pt;\r\n  position: absolute;\r\n\r\n\r\n}\r\nfooter > div:first-child{\r\n    display: none;\r\n}\r\n@media screen and (min-width: 688px) {\r\n    footer > div:first-child{\r\n        display: flex;\r\n    }\r\n    }\r\n.content {\r\n    overflow: hidden;\r\n    width: 80%;\r\n    margin: auto;\r\n  }\r\n.gallery-item {\r\n    float: left;\r\n    width: 22%;\r\n    height: 0;\r\n    padding-bottom: 40%;\r\n    position: relative;\r\n    overflow: hidden;\r\n   \r\n  }\r\n.regular-img-container {\r\n    margin-right: 10%;\r\n  }\r\n.slider-container {\r\n    overflow: hidden;\r\n  }\r\n.slider-holder >a{\r\n      float: left;\r\n\r\n  }\r\n.slider-holder > a >img{\r\n      height: 43px;\r\n      width: 35px;\r\n      margin: 2px 5px;\r\n  }\r\n.slider-holder {\r\n    width: 500%;\r\n    position: relative;\r\n     -webkit-animation: scroller 15s infinite;\r\n             animation: scroller 15s infinite; \r\n    -webkit-animation-timing-function: ease-in-out; \r\n            animation-timing-function: ease-in-out;\r\n  }\r\n/* need a step for each slide */\r\n@-webkit-keyframes scroller {\r\n    0% {\r\n        -webkit-transform: translateX(0);\r\n                transform: translateX(0);\r\n      }\r\n      10% {\r\n        -webkit-transform: translateX(0);\r\n                transform: translateX(0);\r\n      }\r\n      30% {\r\n        -webkit-transform: translateX(-23%);\r\n                transform: translateX(-23%);\r\n      }\r\n      40% {\r\n        -webkit-transform: translateX(-23%);\r\n                transform: translateX(-23%);\r\n      }\r\n      60% {\r\n        -webkit-transform: translateX(-46%);\r\n                transform: translateX(-46%);\r\n      }\r\n      70% {\r\n        -webkit-transform: translateX(-46%);\r\n                transform: translateX(-46%);\r\n      }\r\n      90% {\r\n        -webkit-transform: translateX(-68.25%);\r\n                transform: translateX(-68.25%);\r\n      }\r\n      100% {\r\n        -webkit-transform: translateX(-68.25%);\r\n                transform: translateX(-68.25%);\r\n      }\r\n  }\r\n@keyframes scroller {\r\n    0% {\r\n        -webkit-transform: translateX(0);\r\n                transform: translateX(0);\r\n      }\r\n      10% {\r\n        -webkit-transform: translateX(0);\r\n                transform: translateX(0);\r\n      }\r\n      30% {\r\n        -webkit-transform: translateX(-23%);\r\n                transform: translateX(-23%);\r\n      }\r\n      40% {\r\n        -webkit-transform: translateX(-23%);\r\n                transform: translateX(-23%);\r\n      }\r\n      60% {\r\n        -webkit-transform: translateX(-46%);\r\n                transform: translateX(-46%);\r\n      }\r\n      70% {\r\n        -webkit-transform: translateX(-46%);\r\n                transform: translateX(-46%);\r\n      }\r\n      90% {\r\n        -webkit-transform: translateX(-68.25%);\r\n                transform: translateX(-68.25%);\r\n      }\r\n      100% {\r\n        -webkit-transform: translateX(-68.25%);\r\n                transform: translateX(-68.25%);\r\n      }\r\n  }\r\n.social-media-container > a:hover{\r\n    -webkit-transform: scale(1.5);\r\n            transform: scale(1.5); \r\n    \r\n}\r\n.social-media-container > a:last-child{\r\n    margin-right: 0px;\r\n   \r\n}\r\n.social-media-container > a:last-child:hover{\r\n    margin-right: 0px;\r\n   \r\n}\r\n.social-media-container > a{\r\n    margin-right: 25px;\r\n    transition: -webkit-transform 225ms ease-in;\r\n    transition: transform 225ms ease-in;\r\n    transition: transform 225ms ease-in, -webkit-transform 225ms ease-in;\r\n    font-size: xx-large;\r\n    padding: 0pt 15pt;\r\n    padding-bottom: 10pt;\r\n  \r\n    padding-top: 2pt;\r\n\r\n}\r\na.linkedin:hover\r\n{\r\n    color:#008cba;\r\n}\r\na.github:hover\r\n{\r\n    color:#800080;\r\n   \r\n}\r\na.facebook:hover{\r\n    color:#3B5999;\r\n}\r\na.mail:hover\r\n{\r\n    color:#b6d600;\r\n}\r\na{\r\n\r\n    text-transform: uppercase;\r\n    color:#fff;\r\n    \r\n}\r\na:hover{\r\n    color: #04C2C9;\r\n    cursor: pointer;\r\n    \r\n}\r\n.social-media-container{\r\n    display: flex;\r\n    justify-content: center;\r\n    align-items: center ;\r\n    flex-direction: row;\r\n    margin-bottom: 25px;    \r\n    font-family: 'Roboto','sans-serif';\r\n}\r\n\r\n"

/***/ }),

/***/ "./src/app/shared/footer/footer.component.html":
/*!*****************************************************!*\
  !*** ./src/app/shared/footer/footer.component.html ***!
  \*****************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<footer *ngIf=\"layout.showFooter\">\r\n\r\n    <div>\r\n      <div>developed with</div>\r\n        <div class=\"slider-container gallery-item\">\r\n          <div class=\"slider-holder\">\r\n          <a target=\"_blank\" href=\"https://angular.io/\"><img src=\"assets/images/footer/A.svg\" ></a>\r\n          <a target=\"_blank\" href=\"https://www.w3.org/TR/html52/\"><img src=\"assets/images/footer/html5.png\" ></a>\r\n          <a target=\"_blank\" href=\"https://www.w3.org/TR/2001/WD-css3-roadmap-20010523/\"><img src=\"assets/images/footer/css3.png\" ></a> \r\n          <a target=\"_blank\" href=\"https://angular.io/\"><img src=\"assets/images/footer/A.svg\" ></a>\r\n        </div> \r\n        </div> \r\n      </div>\r\n  <div class=\"social-media-container\">\r\n      <a class=\"mail\" target=\"_blank\" href=\"mailto:arunbabu.3.141@gmail.com\"><i class=\"fa fa-envelope\"></i></a>\r\n    <a class=\"linkedin\" href=\"https://www.linkedin.com/in/arun-babu-madhavan/\" target=\"_blank\"><i class=\"fa fa-linkedin\"></i></a>\r\n    <a class=\"github\" href=\"https://github.com/arunbabu-madhavan/\" target=\"_blank\"><i class=\"fa fa-github\"></i></a>\r\n    <a class=\"facebook\" href=\"https://www.facebook.com/Arunbmt\" target=\"_blank\"><i class=\"fa fa-facebook\"></i></a>\r\n    \r\n  </div>\r\n\r\n  <div class=\"footnote\">\r\n    <a href=\"mailto:arunbabu.3.141@gmail.com\">Arun Babu Madhavan</a> \r\n    <span> | &copy; 2018</span>\r\n  </div>\r\n\r\n</footer> "

/***/ }),

/***/ "./src/app/shared/footer/footer.component.ts":
/*!***************************************************!*\
  !*** ./src/app/shared/footer/footer.component.ts ***!
  \***************************************************/
/*! exports provided: FooterComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FooterComponent", function() { return FooterComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _services_layout_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../services/layout.service */ "./src/app/shared/services/layout.service.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var FooterComponent = /** @class */ (function () {
    function FooterComponent(layout) {
        this.layout = layout;
    }
    FooterComponent.prototype.ngOnInit = function () {
    };
    FooterComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-footer',
            template: __webpack_require__(/*! ./footer.component.html */ "./src/app/shared/footer/footer.component.html"),
            styles: [__webpack_require__(/*! ./footer.component.css */ "./src/app/shared/footer/footer.component.css")]
        }),
        __metadata("design:paramtypes", [_services_layout_service__WEBPACK_IMPORTED_MODULE_1__["LayoutManager"]])
    ], FooterComponent);
    return FooterComponent;
}());



/***/ }),

/***/ "./src/app/shared/navigation-arrows/navigation-arrows.component.css":
/*!**************************************************************************!*\
  !*** ./src/app/shared/navigation-arrows/navigation-arrows.component.css ***!
  \**************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "a {\r\n    text-decoration: none;\r\n    display: inline-block;\r\n    padding: 9pt 17px;\r\n}\r\na.disabled:hover{\r\n  background-color: #ddd;\r\n    color: black;\r\n}\r\na:hover {\r\n    opacity: 0.7;\r\n}\r\n.previous,.next {\r\n    background-color: #000;\r\n    color: #f1f1f1;\r\n    margin-right: 1pt;\r\n}\r\na.disabled{\r\n\r\n  background-color: #ddd;\r\n  color: black;\r\n}\r\ndiv{\r\n    display: flex;\r\n\r\n    flex-direction: row;\r\n    justify-content: flex-end;\r\n    text-align: right;\r\n    margin-right: 0.5vh;\r\n    margin-bottom: 5pt;\r\n}\r\n@media screen and (min-width: 700px){\r\n    \r\n\r\ndiv{\r\n    display: none;\r\n}\r\n\r\n}"

/***/ }),

/***/ "./src/app/shared/navigation-arrows/navigation-arrows.component.html":
/*!***************************************************************************!*\
  !*** ./src/app/shared/navigation-arrows/navigation-arrows.component.html ***!
  \***************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div>\n    <a [routerLink]=\"prevPage\" class=\"previous\" [ngClass]=\"{'disabled' : !prevPage}\">&#8249;</a>\n    <a [routerLink]=\"nextPage\" class=\"next\" [ngClass]=\"{'disabled' : !nextPage}\">&#8250;</a>\n <div>"

/***/ }),

/***/ "./src/app/shared/navigation-arrows/navigation-arrows.component.ts":
/*!*************************************************************************!*\
  !*** ./src/app/shared/navigation-arrows/navigation-arrows.component.ts ***!
  \*************************************************************************/
/*! exports provided: NavigationArrowsComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "NavigationArrowsComponent", function() { return NavigationArrowsComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var NavigationArrowsComponent = /** @class */ (function () {
    function NavigationArrowsComponent() {
    }
    NavigationArrowsComponent.prototype.ngOnInit = function () {
    };
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])(),
        __metadata("design:type", String)
    ], NavigationArrowsComponent.prototype, "prevPage", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])(),
        __metadata("design:type", String)
    ], NavigationArrowsComponent.prototype, "nextPage", void 0);
    NavigationArrowsComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-navigation-arrows',
            template: __webpack_require__(/*! ./navigation-arrows.component.html */ "./src/app/shared/navigation-arrows/navigation-arrows.component.html"),
            styles: [__webpack_require__(/*! ./navigation-arrows.component.css */ "./src/app/shared/navigation-arrows/navigation-arrows.component.css")]
        }),
        __metadata("design:paramtypes", [])
    ], NavigationArrowsComponent);
    return NavigationArrowsComponent;
}());



/***/ }),

/***/ "./src/app/shared/services/day-night.service.ts":
/*!******************************************************!*\
  !*** ./src/app/shared/services/day-night.service.ts ***!
  \******************************************************/
/*! exports provided: DayNightService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DayNightService", function() { return DayNightService; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};

var DayNightService = /** @class */ (function () {
    function DayNightService() {
    }
    DayNightService.prototype.getParticleSetting = function () {
        var now = new Date();
        var hours = now.getHours();
        if (hours > 12) {
            if (hours < 17)
                return { b: 0, g: 137, r: 2, radius: 4.5 };
            else
                return { b: 228, g: 175, r: 80, radius: 1.5 };
        }
        else {
            if (hours > 4)
                return { b: 4, g: 128, r: 255, radius: 2.5 };
        }
        return { b: 228, g: 175, r: 80, radius: 1.5 };
    };
    DayNightService.prototype.getBackgroundColor = function () {
        return this.isDay() ? "#ffffff" : "#000000";
    };
    DayNightService.prototype.getTextColor = function () {
        return !this.isDay() ? "#ffffff" : "#000000";
    };
    DayNightService.prototype.isDay = function () {
        var now = new Date();
        var hours = now.getHours();
        return (hours > 5 && hours < 17);
    };
    DayNightService = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"])()
    ], DayNightService);
    return DayNightService;
}());



/***/ }),

/***/ "./src/app/shared/services/layout.service.ts":
/*!***************************************************!*\
  !*** ./src/app/shared/services/layout.service.ts ***!
  \***************************************************/
/*! exports provided: LayoutManager */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LayoutManager", function() { return LayoutManager; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var LayoutManager = /** @class */ (function () {
    function LayoutManager() {
        this.showFooter = false;
        this.showHeader = false;
    }
    LayoutManager.prototype.homePageSetting = function () {
        this.showFooter = false;
        this.showHeader = false;
    };
    LayoutManager.prototype.defaultPageSetting = function () {
        this.showHeader = true;
        this.showFooter = true;
    };
    LayoutManager = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"])(),
        __metadata("design:paramtypes", [])
    ], LayoutManager);
    return LayoutManager;
}());



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
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _buttons_right_point_button_right_point_button_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./buttons/right-point-button/right-point-button.component */ "./src/app/shared/buttons/right-point-button/right-point-button.component.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _top_navigation_bar_top_navigation_bar_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./top-navigation-bar/top-navigation-bar.component */ "./src/app/shared/top-navigation-bar/top-navigation-bar.component.ts");
/* harmony import */ var _directives_day_night_color_directive__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./directives/day-night-color.directive */ "./src/app/shared/directives/day-night-color.directive.ts");
/* harmony import */ var _footer_footer_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./footer/footer.component */ "./src/app/shared/footer/footer.component.ts");
/* harmony import */ var _directives_color_palette_directive__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./directives/color-palette.directive */ "./src/app/shared/directives/color-palette.directive.ts");
/* harmony import */ var _buttons_border_hover_led_button_border_hover_led_button_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./buttons/border-hover-led-button/border-hover-led-button.component */ "./src/app/shared/buttons/border-hover-led-button/border-hover-led-button.component.ts");
/* harmony import */ var _carousel_carousel_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./carousel/carousel.component */ "./src/app/shared/carousel/carousel.component.ts");
/* harmony import */ var _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @angular/platform-browser/animations */ "./node_modules/@angular/platform-browser/fesm5/animations.js");
/* harmony import */ var _navigation_arrows_navigation_arrows_component__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./navigation-arrows/navigation-arrows.component */ "./src/app/shared/navigation-arrows/navigation-arrows.component.ts");
/* harmony import */ var _calendar_calendar_component__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ./calendar/calendar.component */ "./src/app/shared/calendar/calendar.component.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};













var SharedModule = /** @class */ (function () {
    function SharedModule() {
    }
    SharedModule = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"])({
            imports: [
                _angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"],
                _angular_router__WEBPACK_IMPORTED_MODULE_3__["RouterModule"],
                _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_10__["BrowserAnimationsModule"]
            ],
            providers: [],
            declarations: [_buttons_right_point_button_right_point_button_component__WEBPACK_IMPORTED_MODULE_2__["RightPointButtonComponent"], _carousel_carousel_component__WEBPACK_IMPORTED_MODULE_9__["CarouselComponent"], _buttons_border_hover_led_button_border_hover_led_button_component__WEBPACK_IMPORTED_MODULE_8__["BorderHoverLedButtonComponent"], _top_navigation_bar_top_navigation_bar_component__WEBPACK_IMPORTED_MODULE_4__["TopNavigationBarComponent"], _directives_day_night_color_directive__WEBPACK_IMPORTED_MODULE_5__["DayNightColorDirective"], _footer_footer_component__WEBPACK_IMPORTED_MODULE_6__["FooterComponent"], _directives_color_palette_directive__WEBPACK_IMPORTED_MODULE_7__["ColorPaletteDirective"], _carousel_carousel_component__WEBPACK_IMPORTED_MODULE_9__["CarouselComponent"], _navigation_arrows_navigation_arrows_component__WEBPACK_IMPORTED_MODULE_11__["NavigationArrowsComponent"], _calendar_calendar_component__WEBPACK_IMPORTED_MODULE_12__["CalendarComponent"]],
            bootstrap: [],
            exports: [_buttons_right_point_button_right_point_button_component__WEBPACK_IMPORTED_MODULE_2__["RightPointButtonComponent"], _carousel_carousel_component__WEBPACK_IMPORTED_MODULE_9__["CarouselComponent"], _top_navigation_bar_top_navigation_bar_component__WEBPACK_IMPORTED_MODULE_4__["TopNavigationBarComponent"], _directives_day_night_color_directive__WEBPACK_IMPORTED_MODULE_5__["DayNightColorDirective"], _footer_footer_component__WEBPACK_IMPORTED_MODULE_6__["FooterComponent"], _directives_color_palette_directive__WEBPACK_IMPORTED_MODULE_7__["ColorPaletteDirective"], _buttons_border_hover_led_button_border_hover_led_button_component__WEBPACK_IMPORTED_MODULE_8__["BorderHoverLedButtonComponent"], _navigation_arrows_navigation_arrows_component__WEBPACK_IMPORTED_MODULE_11__["NavigationArrowsComponent"], _calendar_calendar_component__WEBPACK_IMPORTED_MODULE_12__["CalendarComponent"]]
        })
    ], SharedModule);
    return SharedModule;
}());



/***/ }),

/***/ "./src/app/shared/top-navigation-bar/top-navigation-bar.component.css":
/*!****************************************************************************!*\
  !*** ./src/app/shared/top-navigation-bar/top-navigation-bar.component.css ***!
  \****************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "nav{\r\n    position: fixed;\r\n    top:0;\r\n    left:0;\r\n    background-color: #1B242D;\r\n    width: 100%;\r\n   \r\n    z-index: 10001;\r\n    border-bottom: 3px solid #04C2C9;\r\n    display: flex;\r\n    justify-content: center;\r\n    flex-direction: column;\r\n    align-items: center;\r\n    text-align: left;\r\n  \r\n    color: #fff;\r\n}\r\n.collapsable a{\r\n    color: #fff;\r\n}\r\n.menu-links{\r\n    position: fixed;\r\n    height: 45pt;\r\n    width: 45pt;\r\n    right: 5vw;\r\n    bottom: 2vh;\r\n    border-radius: 50%;\r\n    cursor: pointer;\r\n    background-color: #335;\r\n}\r\n.collapsable > div > div > a:hover{\r\n    color: #E31B6D\r\n}\r\n.menu-trigger span,.menu-trigger span::after ,.menu-trigger span::before{\r\n    position: absolute;\r\n    width: 24px;\r\n    height: 3px;\r\n    background-color: #fff;\r\n}\r\n.menu-trigger span{\r\n    left:50%;\r\n    top:50%;\r\n    bottom: auto;\r\n    right: auto;\r\n    -webkit-transform: translate(-50%,-50%);\r\n            transform: translate(-50%,-50%);\r\n    transition: background-color 0.2s;\r\n}\r\n.menu-trigger span::after,.menu-trigger span::before{\r\n    content: '';\r\n    top: 0;\r\n    left: 0;\r\n    transition: -webkit-transform 0.2s;\r\n    transition: transform 0.2s;\r\n    transition: transform 0.2s, -webkit-transform 0.2s;\r\n}\r\n.menu-trigger span::after{\r\n    -webkit-transform: translateY(6px);\r\n            transform: translateY(6px);\r\n}\r\n.menu-trigger span::before{\r\n    -webkit-transform: translateY(-6px);\r\n            transform: translateY(-6px);\r\n}\r\nnav .menu-trigger.expand span::after{\r\n    -webkit-transform: rotate(45deg);\r\n            transform: rotate(45deg);\r\n}\r\nnav .menu-trigger.expand span::before{\r\n    -webkit-transform: rotate(-45deg);\r\n            transform: rotate(-45deg);\r\n}\r\n.menu-trigger.expand span{\r\n    background-color: transparent\r\n}\r\n.collapsable{\r\n    max-width: 1200px;\r\n    width: 100%;\r\n    position: absolute;\r\n    display: flex;\r\n    font-weight: 800;\r\n    flex-direction: row;\r\n    align-items: center;\r\n    top: 50px;\r\n    background: #335;\r\n    overflow: hidden;\r\n    height: 0;\r\n    transition: height .3s ease-out;\r\n}\r\n.collapsable > div{\r\n    display: flex;\r\n    flex-direction: column;\r\n\r\n}\r\n.collapsable div{\r\n    font-family: 'Roboto';\r\n    padding: 12px 20px;\r\n    font-size: 11pt;\r\n    cursor: pointer;\r\n    transition: color .5s;\r\n    text-transform: uppercase;\r\n}\r\n.collapsable.expand{\r\n    height: 100%;\r\n    position: fixed;\r\n    top: 0;\r\n    bottom: 0;\r\n    background-color: #1B242D;\r\n}\r\n.collapsable div{\r\n    font-size: 20pt;\r\n    margin: 5pt 0pt;\r\n}\r\n.collapsable div:first-child {\r\n    padding: 25px 20px 12px 20px;\r\n}\r\n@media screen and (min-width:700px) {\r\n.menu-links{\r\n        display: none;\r\n    }\r\n.collapsable{\r\n    position: initial;\r\n    background: none;\r\n    overflow: visible;\r\n    height: initial;\r\n    text-align: left;\r\n}\r\nnav{\r\n    height: 50px;\r\n}\r\n.collapsable > div > div > a.active{\r\n    color: #E31B6D;\r\n\r\n}\r\n.collapsable div{\r\n\r\n    margin: 0 40px;\r\n    padding: initial;\r\n    font-size: initial;\r\n    display: inline;\r\n    /* transition: all 0.25s ease-in-out; */\r\n\r\n}\r\n.collapsable > div > div:first-child {\r\n    padding: 0;\r\n    \r\n}\r\n.collapsable,.collapsable > div{\r\n    display: initial;\r\n  \r\n}\r\n}"

/***/ }),

/***/ "./src/app/shared/top-navigation-bar/top-navigation-bar.component.html":
/*!*****************************************************************************!*\
  !*** ./src/app/shared/top-navigation-bar/top-navigation-bar.component.html ***!
  \*****************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<nav *ngIf=\"layout.showHeader\">\r\n<div class=\"collapsable\" [ngClass]=\"expand ? 'expand':''\">\r\n  <div>\r\n  <div><a [routerLink]=\"['/home']\" (click)=\"expand = false\" > Home </a></div>\r\n  <div><a [routerLink]=\"['/projects']\" (click)=\"expand = false\" [routerLinkActive]=\"['active']\">Projects</a></div>\r\n  <div><a [routerLink]=\"['/profile']\" (click)=\"expand = false\" [routerLinkActive]=\"['active']\">Profile</a></div>\r\n  <div><a [routerLink]=\"['/articles']\" (click)=\"expand = false\" [routerLinkActive]=\"['active']\">Articles</a></div>\r\n  <div><a [routerLink]=\"['/about']\" (click)=\"expand = false\" [routerLinkActive]=\"['active']\">About</a></div>\r\n</div>\r\n</div>\r\n<div class=\"menu-links\" (click)=\"expand = !expand\" >\r\n<a class=\"menu-trigger\" [ngClass]=\"expand ? 'expand':''\">\r\n    <span></span>\r\n  </a>\r\n</div>\r\n</nav>"

/***/ }),

/***/ "./src/app/shared/top-navigation-bar/top-navigation-bar.component.ts":
/*!***************************************************************************!*\
  !*** ./src/app/shared/top-navigation-bar/top-navigation-bar.component.ts ***!
  \***************************************************************************/
/*! exports provided: TopNavigationBarComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TopNavigationBarComponent", function() { return TopNavigationBarComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _services_layout_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../services/layout.service */ "./src/app/shared/services/layout.service.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var TopNavigationBarComponent = /** @class */ (function () {
    function TopNavigationBarComponent(layout) {
        this.layout = layout;
    }
    TopNavigationBarComponent.prototype.ngOnInit = function () {
    };
    TopNavigationBarComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-top-navigation-bar',
            template: __webpack_require__(/*! ./top-navigation-bar.component.html */ "./src/app/shared/top-navigation-bar/top-navigation-bar.component.html"),
            styles: [__webpack_require__(/*! ./top-navigation-bar.component.css */ "./src/app/shared/top-navigation-bar/top-navigation-bar.component.css")]
        }),
        __metadata("design:paramtypes", [_services_layout_service__WEBPACK_IMPORTED_MODULE_1__["LayoutManager"]])
    ], TopNavigationBarComponent);
    return TopNavigationBarComponent;
}());



/***/ }),

/***/ "./src/environments/environment.ts":
/*!*****************************************!*\
  !*** ./src/environments/environment.ts ***!
  \*****************************************/
/*! exports provided: environment */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "environment", function() { return environment; });
// This file can be replaced during build by using the `fileReplacements` array.
// `ng build --prod` replaces `environment.ts` with `environment.prod.ts`.
// The list of file replacements can be found in `angular.json`.
var environment = {
    production: false
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
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/platform-browser-dynamic */ "./node_modules/@angular/platform-browser-dynamic/fesm5/platform-browser-dynamic.js");
/* harmony import */ var _app_app_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./app/app.module */ "./src/app/app.module.ts");
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./environments/environment */ "./src/environments/environment.ts");




if (_environments_environment__WEBPACK_IMPORTED_MODULE_3__["environment"].production) {
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["enableProdMode"])();
}
Object(_angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_1__["platformBrowserDynamic"])().bootstrapModule(_app_app_module__WEBPACK_IMPORTED_MODULE_2__["AppModule"])
    .catch(function (err) { return console.error(err); });


/***/ }),

/***/ 0:
/*!***************************!*\
  !*** multi ./src/main.ts ***!
  \***************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! E:\Github_Repo\arunbabu-madhavan-portfolio\src\main.ts */"./src/main.ts");


/***/ })

},[[0,"runtime","vendor"]]]);
//# sourceMappingURL=main.js.map