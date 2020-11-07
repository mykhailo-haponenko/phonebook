"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
exports.__esModule = true;
exports.ContactsService = void 0;
var core_1 = require("@angular/core");
var rxjs_1 = require("rxjs");
var ContactsService = /** @class */ (function () {
    function ContactsService() {
        var _this = this;
        this.contacts = new rxjs_1.BehaviorSubject([]);
        this.addContacts = new rxjs_1.BehaviorSubject({});
        this.removeContacts = new rxjs_1.BehaviorSubject(null);
        this.editContacts = new rxjs_1.BehaviorSubject({});
        this.contactsArr = [];
        this.addContacts.subscribe(function (add) {
            if (Object.keys(add).length != 0) {
                console.log(add);
                _this.contactsArr.push(add);
                _this.contacts.next(_this.contactsArr);
            }
        });
        this.removeContacts.subscribe(function (id) {
            var index = _this.contactsArr.findIndex(function (n) { return n.id === id; });
            if (index !== -1) {
                _this.contactsArr.splice(index, 1);
                _this.contacts.next(_this.contactsArr);
            }
        });
        this.editContacts.subscribe(function (contact) {
            var index = _this.contactsArr.findIndex(function (n) { return n.id === contact.id; });
            if (index !== -1) {
                _this.contactsArr[index] = contact;
                _this.contacts.next(_this.contactsArr);
            }
        });
    }
    ContactsService = __decorate([
        core_1.Injectable({
            providedIn: 'root'
        })
    ], ContactsService);
    return ContactsService;
}());
exports.ContactsService = ContactsService;
