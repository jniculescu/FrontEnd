import { Injectable } from '@angular/core';
import {Contact} from '../contact';

@Injectable({
  providedIn: 'root'
})
export class ContactService {

  contacts: Contact[];
  newContact : Contact;

 // constructor(private localStorageService: StorageService)

  constructor() {
    this.contacts = [];
    this.contacts.push(new Contact(1, 'Blah', 'Bla', '040002234', 'blah1@blaaa.com'));
    this.contacts.push(new Contact(2, 'Blah2', 'Bla2', '040034334', 'blah2@blaaa.com'));
    this.contacts.push(new Contact(3, 'Blah3', 'Bla3', '040054754', 'blah3@blaaa.com'));
    this.contacts.push(new Contact(4, 'Blah4', 'Bla4', '040004564', 'blah4@blaaa.com'));
    this.contacts.push(new Contact(5, 'Blah5', 'Bla5', '040045646', 'blah5@blaaa.com'));
    this.contacts.push(new Contact(6, 'Blah6', 'Bla6', '044564564', 'blah6@blaaa.com'));
    this.contacts.push(new Contact(7, 'Blah7', 'Bla7', '040064563', 'blah7@blaaa.com'));
  }

  getContacts(): Contact[]
  {
    return this.contacts;
    return this.contactLocalStorage.getContacts();
  }
  setContacts(contact1)
  {
    this.newContact = contact1;
    let newId = this.contacts[this.contacts.length -1 ].id + 1;
    console.log(newId);
    this.newContact.id = newId;
    console.log(this.newContact);
    this.contacts.push(new Contact(this.newContact.id, this.newContact.firstName, this.newContact.lastName, this.newContact.numPhone, this.newContact.email));
  }

  removeContact(removeId)
  {
    console.log(removeId + ' removing this id');

    for(let i = 0; i < this.contacts.length; i++)
    {
      console.log(i);
      if(this.contacts[i].id === removeId)
      {
      this.contacts.splice(i, 1);
      }
    }
  }
}
