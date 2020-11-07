import { Component, Output, EventEmitter, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import * as faker from 'faker';
import { ContactsService } from 'src/app/services/contacts.service';

@Component({
  selector: 'app-add-contacts-popover',
  templateUrl: './add-contacts-popover.component.html',
  styleUrls: ['./add-contacts-popover.component.scss']
})
export class AddContactsPopoverComponent implements OnInit {
  @Output() showAddForm = new EventEmitter(false);
  public form: FormGroup;

  constructor(private _FB: FormBuilder,
    private contactsService: ContactsService) { }

  ngOnInit(): void {
    this.form = this._FB.group({
      id: Math.floor(Math.random() * 100),
      firstName: ['', Validators.required],
      lastName: ['', Validators.required],
      phoneNumber: [null, [Validators.required, Validators.pattern("^[0-9]*$"), Validators.minLength(1)]],
      urlAvatar: '',
      descriptions: ''
    });
  }

  keyPress(event: any) {
    const pattern = /[0-9\+\-\ ]/;
    let inputChar = String.fromCharCode(event.charCode);
    if (event.keyCode != 8 && !pattern.test(inputChar)) {
      event.preventDefault();
    }
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

  addImage() {
    this.form.controls['urlAvatar'].setValue(faker.image.avatar());
  }

  submit(values) {
    if (this.checkValid()) {
      console.log(values);

      this.contactsService.addContacts.next(values)
      this.showAddForm.emit(false);
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
    this.showAddForm.emit(false);
  }

}
