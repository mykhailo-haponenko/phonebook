import { Component, Output, EventEmitter, OnInit, Input } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import * as faker from 'faker';
import { ContactsService } from 'src/app/services/contacts.service';

@Component({
  selector: 'app-edit-contacts-popover',
  templateUrl: './edit-contacts-popover.component.html',
  styleUrls: ['./edit-contacts-popover.component.scss']
})
export class EditContactsPopoverComponent implements OnInit {
  @Input() contactInfo: any;
  @Output() showEditForm = new EventEmitter(false);
  public form: FormGroup;

  constructor(private _FB: FormBuilder,
    private contactsService: ContactsService) { }

  ngOnInit(): void {
    this.form = this._FB.group({
      id: this.contactInfo.id,
      firstName: [this.contactInfo.firstName, Validators.required],
      lastName: [this.contactInfo.lastName, Validators.required],
      phoneNumber: [this.contactInfo.phoneNumber, [Validators.required, Validators.pattern("^[0-9]*$"), Validators.minLength(1)]],
      urlAvatar: this.contactInfo.urlAvatar,
      descriptions: this.contactInfo.descriptions
    });
  }

  get _firstName() {
    return this.form.get('firstName');
  }

  get _lastName() {
    return this.form.get('lastName');
  }

  get _phoneNumber() {
    return this.form.get('phoneNumber');
  }

  submit(values) {
    if (this.checkValid()) {
      this.contactsService.editContacts.next(values)
      this.showEditForm.emit(false);
    }
  }

  addImage() {
    this.form.controls['urlAvatar'].setValue(faker.image.avatar());
  }

  keyPress(event: any) {
    const pattern = /[0-9\+\-\ ]/;
    let inputChar = String.fromCharCode(event.charCode);
    if (event.keyCode != 8 && !pattern.test(inputChar)) {
      event.preventDefault();
    }
  }

  checkValid() {
    const firstName = !this._firstName.errors?.required;
    const lastName = !this._lastName.errors?.required;
    const phoneNumer = !this._phoneNumber.errors?.required;

    if (firstName && lastName && phoneNumer) {
      return true;
    } else {
      return false
    }
  }

  cancel() {
    this.showEditForm.emit(false);
  }

}
