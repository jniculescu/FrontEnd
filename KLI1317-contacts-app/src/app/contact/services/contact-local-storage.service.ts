import { Injectable } from '@angular/core';
import {Contact} from '../contact';

@Injectable({
  providedIn: 'root'
})
export class ContactLocalStorageService {

  localStorageKey = 'contacts-app';
  newContact: Contact;
  contacts: Contact[];

  constructor()
  {/*
    this.contacts = [];
    this.contacts.push(new Contact(1, 'Blah', 'Bla', '040002234', 'blah1@blaaa.com'));
    this.contacts.push(new Contact(2, 'Blah2', 'Bla2', '040034334', 'blah2@blaaa.com'));
    this.contacts.push(new Contact(3, 'Blah3', 'Bla3', '040054754', 'blah3@blaaa.com'));
    this.contacts.push(new Contact(4, 'Blah4', 'Bla4', '040004564', 'blah4@blaaa.com'));
    this.contacts.push(new Contact(5, 'Blah5', 'Bla5', '040045646', 'blah5@blaaa.com'));
    this.contacts.push(new Contact(6, 'Blah6', 'Bla6', '044564564', 'blah6@blaaa.com'));
    this.contacts.push(new Contact(7, 'Blah7', 'Bla7', '040064563', 'blah7@blaaa.com'));
    */
    if (!localStorage.getItem(this.localStorageKey))
    {
      localStorage.setItem(this.localStorageKey, JSON.stringify([]));
    }

    const storageElement = localStorage.getItem(this.localStorageKey);
    this.contacts = JSON.parse(storageElement);
  }

  getContacts(): Contact[] {
   // const storageElement = localStorage.getItem(this.localStorageKey);
   // const contacts = JSON.parse(storageElement);
    return this.contacts;
  }

  getContactById(id: string): Contact
  {
    for (let i = 0; i < this.contacts.length; i++)
    {
      console.log(i);
      if (this.contacts[i].id === Number(id))
      {
        return this.contacts[i];
      }
    }
  }

  editContact(contact: Contact)
  {

  }

  deleteContact(id: number)
  {
    console.log(id + ' removing this id');

    for (let i = 0; i < this.contacts.length; i++)
    {
      console.log(i);
      if (this.contacts[i].id === id)
      {
        this.contacts.splice(i, 1);
      }
    }
  }

  addContact(contact: Contact)
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
  }
}
