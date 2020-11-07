import { Component, OnInit } from '@angular/core';
import * as faker from 'faker';
import { ContactsService } from 'src/app/services/contacts.service';

@Component({
  selector: 'app-phone-list',
  templateUrl: './phone-list.component.html',
  styleUrls: ['./phone-list.component.scss']
})
export class PhoneListComponent implements OnInit {

  contacts = [];
  showAddForm: boolean = false;
  showEditForm: boolean = false;
  showRemovePopover: boolean = false;
  removeId: number;
  contactInfo: any;
  activeItem: string;


  constructor(public contactsService: ContactsService) { }
  showFiller = false;

  ngOnInit(): void {
    this.contactsService.contacts.subscribe(contacts => {
      this.contacts = contacts;
    })
  }

  tuggleAddForm() {
    this.showAddForm = !this.showAddForm;
  }

  tuggleEditForm(id) {
    this.showEditForm = !this.showEditForm;
    if (this.showEditForm) {
      this.contactInfo = this.contactsService.contacts.getValue().find(contact => contact.id === id)
    }
  }

  toggleRemove(id) {
    this.removeId = id;
    this.showRemovePopover = !this.showRemovePopover;
  }

  remove() {
    this.contactsService.removeContacts.next(this.removeId);
    this.showRemovePopover = !this.showRemovePopover;
  }

  cancel() {
    this.showRemovePopover = !this.showRemovePopover;
  }

  getContact(id) {
    this.contactInfo = this.contactsService.contacts.getValue().find(contact => contact.id === id);
  }

}
