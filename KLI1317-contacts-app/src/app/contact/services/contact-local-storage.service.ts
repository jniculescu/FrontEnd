import { Injectable } from '@angular/core';
import {Contact} from '../contact';
import {ContactProvider} from '../interfaces/contact-provider';
import {Observable, of} from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ContactLocalStorageService implements ContactProvider{

  localStorageKey = 'contacts-app';
  newContact: Contact;
  contacts: Contact[];
  contactById: Contact;
  searchedContact: Contact;
  foundContact: Contact[];

  constructor()
  {
    if (!localStorage.getItem(this.localStorageKey))
    {
      localStorage.setItem(this.localStorageKey, JSON.stringify([]));
    }

    const storageElement = localStorage.getItem(this.localStorageKey);
    this.contacts = JSON.parse(storageElement);
  }

  get(): Observable<Contact[]> {
   // const storageElement = localStorage.getItem(this.localStorageKey);
   // const contacts = JSON.parse(storageElement);
    return of(this.contacts);
  }

  getById(id: string): Observable<Contact>
  {
    for (let i = 0; i < this.contacts.length; i++)
    {
      console.log(i);
      if (this.contacts[i].id === Number(id))
      {
        this.contactById = Object.assign({}, this.contacts[i]);
        return of(this.contactById);
      }
    }
  }

  edit(contact: Contact): Observable<Contact>
  {
    for (let i = 0; i < this.contacts.length; i++)
    {
      console.log(i);
      if (this.contacts[i].id === Number(contact.id))
      {
        this.contacts[i] = contact;
      }
    }

    localStorage.removeItem(this.localStorageKey);
    localStorage.setItem(this.localStorageKey, JSON.stringify(this.contacts));

    return of(contact);
  }

  delete(contact: Contact): Observable<any>
  {
    console.log(contact.id + ' removing this id');

    for (let i = 0; i < this.contacts.length; i++)
    {
      console.log(i);
      if (this.contacts[i].id === contact.id)
      {
        this.contacts.splice(i, 1);
      }
    }
    return of(contact);
  }

  create(contact: Contact): Observable<Contact>
  {
     let lastId = 1;

    if(this.contacts.length > 0)
    {
      lastId = this.contacts[this.contacts.length - 1].id + 1;
    }

    contact.id = lastId;
    this.contacts.push(contact);

    localStorage.removeItem(this.localStorageKey);
    localStorage.setItem(this.localStorageKey, JSON.stringify(this.contacts));

    return of(contact);
  }

  search(searchText): Observable<Contact[]>
  {
    this.foundContact = [];

    for (let i = 0; i < this.contacts.length; i++)
    {
      let firstNameUP = (this.contacts[i].firstName).toUpperCase();
      console.log(i);
      if (firstNameUP === (searchText).toUpperCase())
      {
        console.log("match found");
        this.searchedContact = this.contacts[i];
        this.foundContact.push(this.searchedContact);
        console.log(this.foundContact);
        return of(this.foundContact);
      }
    }
    if(this.foundContact.length > 0)
    {
      console.log(this.foundContact);
      return of(this.foundContact);
    }
    else
    {
      //if nothing found. return full list.
      return of(this.contacts);
    }
  }
}
