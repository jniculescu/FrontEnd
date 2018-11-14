import { Component, OnInit } from '@angular/core';
import {Router} from '@angular/router';
import {Contact} from '../contact';

@Component({
  selector: 'app-contact-detail',
  templateUrl: './contact-detail.component.html',
  styleUrls: ['./contact-detail.component.css']
})
export class ContactDetailComponent implements OnInit {

  contact: Contact;

  constructor(private router: Router) {
    this.contact = new Contact();
  }

  ngOnInit() {
  }

  onSave(): void
  {
    console.log('save function');
    this.router.navigate(['/contacts']);
  }
}
