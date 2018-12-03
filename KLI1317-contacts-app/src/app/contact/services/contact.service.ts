import { Injectable } from '@angular/core';
import {Contact} from '../contact';
import {Observable} from 'rxjs';
import {ContactProvider} from '../interfaces/contact-provider';

@Injectable({
  providedIn: 'root'
})
export class ContactService {

  contacts: Contact[];
  newContact: Contact;

  constructor(private contactProvider: ContactProvider) {
  }

  getContacts(): Observable<Contact[]>
  {
    return this.contactProvider.get();
  }
  setContacts(contact1): Observable<Contact>
  {
    return this.contactProvider.create(contact1);
  }

  removeContact(contact: Contact): Observable<any>
  {
    return this.contactProvider.delete(contact);
  }

  editContact(contact: Contact): Observable<Contact>
  {
    return this.contactProvider.edit(contact);
  }

  getContactById(id: string): Observable<Contact> {
    return this.contactProvider.getById(id);
  }
}
