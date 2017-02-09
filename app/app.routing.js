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
var core_1 = require('@angular/core');
var router_1 = require('@angular/router');
var content_component_1 = require('./components/content.component');
var product_component_1 = require('./components/product.component');
var user_component_1 = require('./components/user.component');
var error404_component_1 = require('./components/error404.component');
var home_component_1 = require('./components/home.component');
var routes = [
    {
        path: '',
        component: content_component_1.ContentComponent
    },
    {
        path: 'home',
        component: home_component_1.HomeComponent
    }, {
        path: 'user',
        component: user_component_1.UserComponent
    },
    {
        path: 'product',
        component: product_component_1.ProductComponent
    },
    {
        path: '**',
        component: error404_component_1.Error404Component
    }
];
var AppRoutingModule = (function () {
    function AppRoutingModule() {
    }
    AppRoutingModule = __decorate([
        core_1.NgModule({
            imports: [
                router_1.RouterModule.forRoot(routes)
            ],
            exports: [
                router_1.RouterModule
            ]
        }), 
        __metadata('design:paramtypes', [])
    ], AppRoutingModule);
    return AppRoutingModule;
}());
exports.AppRoutingModule = AppRoutingModule;
exports.routingComponents = [user_component_1.UserComponent, product_component_1.ProductComponent, content_component_1.ContentComponent, error404_component_1.Error404Component];
//# sourceMappingURL=app.routing.js.map