import { Component, OnInit } from '@angular/core';
import {Contact} from '../contact';
import {ContactService} from '../services/contact.service';

@Component({
  selector: 'app-contact-list',
  templateUrl: './contact-list.component.html',
  styleUrls: ['./contact-list.component.css']
})
export class ContactListComponent implements OnInit {

  contacts: Contact[];

  constructor(private contactService: ContactService) {
    this.contacts = [];
  }

  ngOnInit() {
   /* this.contacts.push(new Contact(1, "Blah", "Bla"));
    this.contacts.push(new Contact(1, "Blah2", "Bla2"));
    this.contacts.push(new Contact(1, "Blah3", "Bla3"));*/
   this.contacts = this.contactService.getContacts();
    console.log(this.contacts);
  }

  OnContactSelect(contact: Contact){
    console.log('Contact Selected: ' + contact.id);
  }

}
