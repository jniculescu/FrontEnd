import { Component, OnInit } from '@angular/core';
import {Contact} from '../contact';
import {ContactService} from '../services/contact.service';
import {ObservableMedia} from '@angular/flex-layout';
import {Router} from '@angular/router';
import {ToolbarService} from '../../UI/toolbarserv/toolbar.service';
import {ToolbarOptions} from '../../UI/toolbarserv/toolbar-options';
import {ConfirmDialogComponent} from '../../UI/confirm-dialog/confirm-dialog.component';
import {MatDialog} from '@angular/material';
import {ErrorDialogComponent} from '../../UI/error-dialog/error-dialog.component';

@Component({
  selector: 'app-contact-list',
  templateUrl: './contact-list.component.html',
  styleUrls: ['./contact-list.component.css']
})
export class ContactListComponent implements OnInit {

  searchText: string;
  contacts: Contact[];
  p: number;

  constructor(private contactService: ContactService, private router: Router, private  toolbar: ToolbarService, private dialog: MatDialog) {
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
    }, (error1) => {
      this.dialog.open(ErrorDialogComponent, {
        data: {err: 'Error ocurred in GET', error: error1},
      });
    });
  }

  SearchByName()
  {
    // IN LOCAL STORAGE WORKS BY FINDING A MATCHING firstName!
    console.log(this.searchText);
    this.contactService.searchContact(this.searchText).subscribe(result => {
      console.log(result);
      this.contacts = result;
    });
  }
}
