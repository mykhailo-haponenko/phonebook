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

  addImage() {
    this.form.controls['urlAvatar'].setValue(faker.image.avatar());
  }

  submit(values) {
    if (this.form.valid) {
      console.log(values);

      this.contactsService.addContacts.next(values)
      this.showAddForm.emit(false);
    }
  }

  cancel() {
    this.showAddForm.emit(false);
  }

}
