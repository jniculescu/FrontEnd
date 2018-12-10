import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';
import {Contact} from '../contact';
import {ContactService} from '../services/contact.service';
import {Router} from '@angular/router';
import {MatDialog, MatSnackBar} from '@angular/material';
import {ConfirmDialogComponent} from '../../UI/confirm-dialog/confirm-dialog.component';

@Component({
  selector: 'app-contact-list-item',
  templateUrl: './contact-list-item.component.html',
  styleUrls: ['./contact-list-item.component.css']
})
export class ContactListItemComponent implements OnInit {

  @Input() contact: Contact;
  @Output() contactDeleted: EventEmitter<any>;

  constructor(private contactService: ContactService, private router: Router, private snackBar: MatSnackBar, private dialog: MatDialog) {
    this.contactDeleted = new EventEmitter();

  }

  ngOnInit() {
    console.log(this.contact);
  }

  deleteItem()
  {
    let contactName = this.contact.lastName;
    const dialogRef = this.dialog.open(ConfirmDialogComponent, {
      data: {name: contactName},
    });

    dialogRef.afterClosed().subscribe(result => {
    if (result) {
      console.log('Removing Contact');
      this.removeContact();
    }
    else {
      console.log('Removing Cancelled');
    }});
  }

  editContact()
  {
    this.router.navigate(['/contacts/edit', this.contact.id]);
  }

  removeContact()
  {
    this.contactService.removeContact(this.contact).subscribe(() => {
      this.snackBar.open('Contact Removed',
        this.contact.firstName + ' ' + this.contact.lastName,
        {
      duration: 3000,
        verticalPosition: 'top',
          horizontalPosition:  'center'
      });
      this.contactDeleted.emit(this.contact);
    });
  }

  openMap()
  {
    this.router.navigate(['contacts/map', {address: this.contact.address, city: this.contact.city}]);
  }
}
