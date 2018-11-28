import { Injectable } from '@angular/core';
import {Contact} from '../contact';
import {ContactLocalStorageService} from './contact-local-storage.service';
import {ContactHttpService} from './contact-http.service';
import {Observable} from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ContactService {

  contacts: Contact[];
  newContact: Contact;
  contactToEdit: Contact;

  constructor(private contactLocalStorage: ContactLocalStorageService, private contactHttpService: ContactHttpService) {
  }

 /* getContacts(): Contact[]
  {
    return this.contactLocalStorage.getContacts();
  }*/

  getContacts(): Observable<Contact[]>
  {
    return this.contactHttpService.get();
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

  /* getContactById(id: string)
  {
    this.contactToEdit = this.contactLocalStorage.getContactById(id);
    this.editContact(this.contactToEdit);
    return this.contactToEdit;
  }*/

  getContactById(id: string): Observable<Contact> {
    return this.contactHttpService.getById(id);
  }
}
