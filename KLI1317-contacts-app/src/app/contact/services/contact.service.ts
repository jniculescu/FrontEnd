import { Injectable } from '@angular/core';
import {Contact} from '../contact';
import {ContactLocalStorageService} from './contact-local-storage.service';

@Injectable({
  providedIn: 'root'
})
export class ContactService {

  contacts: Contact[];
  newContact: Contact;
  contactToEdit: Contact;

  constructor(private contactLocalStorage: ContactLocalStorageService) {
  }

  getContacts(): Contact[]
  {
    // return this.contacts;
    return this.contactLocalStorage.getContacts();
  }
  setContacts(contact1)// : Contact)
  {
    this.contactLocalStorage.addContact(contact1);
  }

  removeContact(removeId)
  {
     this.contactLocalStorage.deleteContact(removeId);
  }

  editContact(contact: Contact)
  {
     this.contactLocalStorage.editContact(contact);
  }

  getContactById(id: string)
  {
    this.contactToEdit = this.contactLocalStorage.getContactById(id);
    this.editContact(this.contactToEdit);
    return this.contactToEdit;
  }
}
