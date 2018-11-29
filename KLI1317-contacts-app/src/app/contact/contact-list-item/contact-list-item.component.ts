import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';
import {Contact} from '../contact';
import {ContactService} from '../services/contact.service';
import {Router} from '@angular/router';
import {MatDialog, MatSnackBar} from '@angular/material';

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
    /*
    const dialogRef = this.dialog.open(ConfirmDialogComponent);
    dialogRef.afterClosed().subscribe(result => {
    if(result)
    {

    }})
     */
    this.removeContact();
  }

  editContact()
  {
    this.router.navigate(['/contacts/edit', this.contact.id]);
  }

  removeContact()
  {
    this.contactService.removeContact(this.contact).subscribe(() => {
      this.snackBar.open('Contact Removed',
        this.contact.firstName + ' ' + this.contact.lastName,{
      duration: 3000,
        verticalPosition: 'top',
        horizontalPosition:  'center'
      });
      this.contactDeleted.emit(this.contact);
    })

  }

}
