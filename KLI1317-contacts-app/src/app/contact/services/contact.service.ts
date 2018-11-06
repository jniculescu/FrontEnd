import { Injectable } from '@angular/core';
import {Contact} from '../contact';

@Injectable({
  providedIn: 'root'
})
export class ContactService {

  contacts: Contact[];

  constructor() {
    this.contacts = [];
    this.contacts.push(new Contact(1, 'Blah', 'Bla'));
    this.contacts.push(new Contact(2, 'Blah2', 'Bla2'));
    this.contacts.push(new Contact(3, 'Blah3', 'Bla3'));
  }

  getContacts(): Contact[]
  {
    return this.contacts;
  }
}
