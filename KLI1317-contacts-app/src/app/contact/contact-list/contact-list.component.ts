import { Component, OnInit } from '@angular/core';
import {Contact} from '../contact';
import {ContactService} from '../services/contact.service';
import {ObservableMedia} from '@angular/flex-layout';
import {Router} from '@angular/router';
import {ToolbarService} from '../../UI/toolbarserv/toolbar.service';
import {ToolbarOptions} from '../../UI/toolbarserv/toolbar-options';

@Component({
  selector: 'app-contact-list',
  templateUrl: './contact-list.component.html',
  styleUrls: ['./contact-list.component.css']
})
export class ContactListComponent implements OnInit {


  contacts: Contact[];
  p: number;

  constructor(private contactService: ContactService, private router: Router, private  toolbar: ToolbarService) {
    this.contacts = [];
  }

  ngOnInit() {
  this.toolbar.setToolbarOptions(new ToolbarOptions('menu', 'Contacto Appo'));
  this.loadContacts();
  }

  onContactDeleted(contact: Contact) {
    console.log('Contact Selected: ' + contact.id);
    this.loadContacts();
  }

  onContactCreate() {
    console.log('Contactlistcomponento: on contactcreate');
    this.router.navigate(['/contacts/new']);
  }

  loadContacts()
  {
    this.contactService.getContacts().subscribe(result => {
      this.contacts = result;
    });
  }
}
