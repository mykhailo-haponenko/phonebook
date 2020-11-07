import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ContactsService {

  contacts: BehaviorSubject<any[]> = new BehaviorSubject([])
  addContacts: BehaviorSubject<{}> = new BehaviorSubject({});
  removeContacts: BehaviorSubject<number> = new BehaviorSubject(null);
  editContacts: BehaviorSubject<any> = new BehaviorSubject({});
  contactsArr = [];

  constructor() {

    this.addContacts.subscribe(add => {
      if (Object.keys(add).length != 0) {
        console.log(add);

        this.contactsArr.push(add);
        this.contacts.next(this.contactsArr)
      }
    });

    this.removeContacts.subscribe(id => {
      const index = this.contactsArr.findIndex(n => n.id === id);
      if (index !== -1) {
        this.contactsArr.splice(index, 1);
        this.contacts.next(this.contactsArr);
      }
    })

    this.editContacts.subscribe(contact => {
      const index = this.contactsArr.findIndex(n => n.id === contact.id);
      if (index !== -1) {
        this.contactsArr[index] = contact;
        this.contacts.next(this.contactsArr);
      }
    })

  }
}
