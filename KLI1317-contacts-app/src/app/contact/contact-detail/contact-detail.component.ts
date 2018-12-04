import { Component, OnInit } from '@angular/core';
import {ActivatedRoute, Router} from '@angular/router';
import {Contact} from '../contact';
import {ContactService} from '../services/contact.service';
import {ToolbarOptions} from '../../UI/toolbarserv/toolbar-options';
import {ToolbarService} from '../../UI/toolbarserv/toolbar.service';

@Component({
  selector: 'app-contact-detail',
  templateUrl: './contact-detail.component.html',
  styleUrls: ['./contact-detail.component.css']
})
export class ContactDetailComponent implements OnInit {

  newContact: Contact;
  contactId: any;

  constructor(private service: ContactService, private router: Router, private route: ActivatedRoute, private toolbar: ToolbarService) {
    this.newContact = new Contact();
  }

  ngOnInit()
  {
    this.contactId = this.route.snapshot.paramMap.get('id');
    if (this.contactId != null) {
      //  contact by id
      this.toolbar.setToolbarOptions(new ToolbarOptions('back', 'Edit Contact'));
/*
      if (this.service.getContactById(this.contactId) !== undefined)
      {
        this.newContact = this.service.getContactById(this.contactId);
      } else
        {
        this.router.navigate(['/contacts']);
        }
        */
      this.service.getContactById(this.contactId).subscribe(result => {
        this.newContact = result;
      }, error => {
        // failed to find contact ->
        console.error(error);
        this.router.navigate(['/contacts']);
      });
    }
    else {
      this.toolbar.setToolbarOptions(new ToolbarOptions('back', 'Create Contact'));
    }
  }

  onSave(): void
  {
    if (this.contactId != null)
    {
      this.service.editContact(this.newContact).subscribe(result => {
        this.newContact = result;
      }, error => {
        console.error(error);
      this.router.navigate(['/contacts']);
    });
    }
    else
      {
        this.service.setContacts(this.newContact).subscribe(result => {
          this.newContact = result;
        }, error => {
          console.error(error);
          this.router.navigate(['/contacts']);
        });
      }
    this.router.navigate(['/contacts']);
    this.service.getContacts();
  }
}
