"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
exports.__esModule = true;
exports.AddContactsPopoverComponent = void 0;
var core_1 = require("@angular/core");
var forms_1 = require("@angular/forms");
var faker = require("faker");
var AddContactsPopoverComponent = /** @class */ (function () {
    function AddContactsPopoverComponent(_FB, contactsService) {
        this._FB = _FB;
        this.contactsService = contactsService;
        this.showAddForm = new core_1.EventEmitter(false);
    }
    AddContactsPopoverComponent.prototype.ngOnInit = function () {
        this.form = this._FB.group({
            id: Math.floor(Math.random() * 100),
            firstName: ['', forms_1.Validators.required],
            lastName: ['', forms_1.Validators.required],
            phoneNumber: [null, [forms_1.Validators.required, forms_1.Validators.pattern("^[0-9]*$"), forms_1.Validators.minLength(1)]],
            urlAvatar: '',
            descriptions: ''
        });
    };
    AddContactsPopoverComponent.prototype.keyPress = function (event) {
        var pattern = /[0-9\+\-\ ]/;
        var inputChar = String.fromCharCode(event.charCode);
        if (event.keyCode != 8 && !pattern.test(inputChar)) {
            event.preventDefault();
        }
    };
    Object.defineProperty(AddContactsPopoverComponent.prototype, "_firstName", {
        get: function () {
            return this.form.get('firstName');
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(AddContactsPopoverComponent.prototype, "_lastName", {
        get: function () {
            return this.form.get('lastName');
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(AddContactsPopoverComponent.prototype, "_phoneNumber", {
        get: function () {
            return this.form.get('phoneNumber');
        },
        enumerable: false,
        configurable: true
    });
    AddContactsPopoverComponent.prototype.addImage = function () {
        this.form.controls['urlAvatar'].setValue(faker.image.avatar());
    };
    AddContactsPopoverComponent.prototype.submit = function (values) {
        if (this.checkValid()) {
            console.log(values);
            this.contactsService.addContacts.next(values);
            this.showAddForm.emit(false);
        }
    };
    AddContactsPopoverComponent.prototype.checkValid = function () {
        var _a, _b, _c;
        var firstName = !((_a = this._firstName.errors) === null || _a === void 0 ? void 0 : _a.required);
        var lastName = !((_b = this._lastName.errors) === null || _b === void 0 ? void 0 : _b.required);
        var phoneNumer = !((_c = this._phoneNumber.errors) === null || _c === void 0 ? void 0 : _c.required);
        if (firstName && lastName && phoneNumer) {
            return true;
        }
        else {
            return false;
        }
    };
    AddContactsPopoverComponent.prototype.cancel = function () {
        this.showAddForm.emit(false);
    };
    __decorate([
        core_1.Output()
    ], AddContactsPopoverComponent.prototype, "showAddForm");
    AddContactsPopoverComponent = __decorate([
        core_1.Component({
            selector: 'app-add-contacts-popover',
            templateUrl: './add-contacts-popover.component.html',
            styleUrls: ['./add-contacts-popover.component.scss']
        })
    ], AddContactsPopoverComponent);
    return AddContactsPopoverComponent;
}());
exports.AddContactsPopoverComponent = AddContactsPopoverComponent;
