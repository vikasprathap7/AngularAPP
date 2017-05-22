"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = require("@angular/core");
var router_1 = require("@angular/router");
var home_component_1 = require("./components/home/home.component");
var login_component_1 = require("./components/login/login.component");
var welcome_component_1 = require("./components/welcome/welcome.component");
var register_component_1 = require("./components/register/register.component");
var orders_component_1 = require("./components/orders/orders.component");
var clothing_component_1 = require("./components/clothing/clothing.component");
var books_component_1 = require("./components/books/books.component");
var apparells_component_1 = require("./components/apparells/apparells.component");
var entertainment_component_1 = require("./components/entertainment/entertainment.component");
var stationary_component_1 = require("./components/stationary/stationary.component");
var routes = [
    { path: 'home', component: home_component_1.HomeComponent },
    { path: '', component: welcome_component_1.WelcomeComponent },
    { path: 'login', component: login_component_1.LoginComponent },
    { path: 'register', component: register_component_1.RegisterComponent },
    { path: 'orderDetails/:id', component: orders_component_1.OrdersComponent },
    { path: 'home/clothing', component: clothing_component_1.ClothingComponent },
    { path: 'home/stationary', component: stationary_component_1.StationaryComponent },
    { path: 'home/entertainment', component: entertainment_component_1.EntertainmentComponent },
    { path: 'home/apparells', component: apparells_component_1.ApparellsComponent },
    { path: 'home/books', component: books_component_1.BooksComponent },
];
var AppRoutingModule = (function () {
    function AppRoutingModule() {
    }
    return AppRoutingModule;
}());
AppRoutingModule = __decorate([
    core_1.NgModule({
        imports: [router_1.RouterModule.forRoot(routes)],
        exports: [router_1.RouterModule]
    })
], AppRoutingModule);
exports.AppRoutingModule = AppRoutingModule;
//# sourceMappingURL=app.routing.js.map