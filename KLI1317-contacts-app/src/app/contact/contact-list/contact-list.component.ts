import { Component, OnInit } from '@angular/core';
import {Contact} from '../contact';
import {ContactService} from '../services/contact.service';
import {ObservableMedia} from '@angular/flex-layout';
import {Router} from '@angular/router';

@Component({
  selector: 'app-contact-list',
  templateUrl: './contact-list.component.html',
  styleUrls: ['./contact-list.component.css']
})
export class ContactListComponent implements OnInit {


  contacts: Contact[];

  constructor(private contactService: ContactService, private router: Router) {
    this.contacts = [];
  }

  ngOnInit() {

   this.contacts = this.contactService.getContacts();
    console.log(this.contacts);
  }

  OnContactSelect(contact: Contact){
    console.log('Contact Selected: ' + contact.id);
  }

  onContactCreate(){
    this.router.navigate(['/contacts/new']);
  }
}
