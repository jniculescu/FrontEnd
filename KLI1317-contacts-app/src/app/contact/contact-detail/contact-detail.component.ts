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

  constructor(private service: ContactService, private router: Router, private route: ActivatedRoute, private toolbar: ToolbarService) {
    this.newContact = new Contact();
  }

  ngOnInit()
  {
    /*const contactId = this.route.snapshot.paramMap.get('id');
    if(contactId != null)
    {*/
      this.toolbar.setToolbarOptions(new ToolbarOptions('back', 'Contacto Appo'));
   // }
  }

  onSave(): void
  {
    //this.newContact.id = 9999;
    this.service.setContacts(this.newContact);
    this.router.navigate(['/contacts']);
    this.service.getContacts();
  }
}
