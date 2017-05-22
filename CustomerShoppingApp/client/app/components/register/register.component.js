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
var core_1 = require("@angular/core");
//import { LoginService } from '../../services/login_services/login.service';
var router_1 = require("@angular/router");
var RegisterComponent = (function () {
    function RegisterComponent(router) {
        this.router = router;
        this.data = {};
    }
    RegisterComponent.prototype.formSubmit = function () {
        if (this.data.uname == "harsha" && this.data.pswd == "123" && this.data.gender == "male"
            && this.data.mailId == "harsha@gmail.com" && this.data.city == "chicago") {
            this.router.navigate(['/login']);
        }
        else {
            console.log('Failed!!');
        }
    };
    return RegisterComponent;
}());
RegisterComponent = __decorate([
    core_1.Component({
        moduleId: module.id,
        selector: 'app-register',
        templateUrl: 'register.component.html'
    }),
    __metadata("design:paramtypes", [router_1.Router])
], RegisterComponent);
exports.RegisterComponent = RegisterComponent;
//# sourceMappingURL=register.component.js.map