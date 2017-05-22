"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = require("@angular/core");
var platform_browser_1 = require("@angular/platform-browser");
var http_1 = require("@angular/http");
var app_component_1 = require("./app.component");
var app_routing_1 = require("./app.routing");
var tasks_component_1 = require("./components/tasks/tasks.component");
var forms_1 = require("@angular/forms");
var login_component_1 = require("./components/login/login.component");
var home_component_1 = require("./components/home/home.component");
var register_component_1 = require("./components/register/register.component");
var welcome_component_1 = require("./components/welcome/welcome.component");
var orders_component_1 = require("./components/orders/orders.component");
var clothing_component_1 = require("./components/clothing/clothing.component");
var books_component_1 = require("./components/books/books.component");
var apparells_component_1 = require("./components/apparells/apparells.component");
var entertainment_component_1 = require("./components/entertainment/entertainment.component");
var stationary_component_1 = require("./components/stationary/stationary.component");
var AppModule = (function () {
    function AppModule() {
    }
    return AppModule;
}());
AppModule = __decorate([
    core_1.NgModule({
        imports: [platform_browser_1.BrowserModule, http_1.HttpModule, forms_1.FormsModule, app_routing_1.AppRoutingModule],
        declarations: [
            app_component_1.AppComponent,
            tasks_component_1.TasksComponent,
            login_component_1.LoginComponent,
            home_component_1.HomeComponent,
            register_component_1.RegisterComponent,
            welcome_component_1.WelcomeComponent,
            orders_component_1.OrdersComponent,
            clothing_component_1.ClothingComponent,
            entertainment_component_1.EntertainmentComponent,
            apparells_component_1.ApparellsComponent,
            books_component_1.BooksComponent,
            stationary_component_1.StationaryComponent
        ],
        bootstrap: [app_component_1.AppComponent]
    })
], AppModule);
exports.AppModule = AppModule;
//# sourceMappingURL=app.module.js.map