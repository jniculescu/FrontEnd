import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Observable} from 'rxjs';
import {Contact} from '../contact';
import {environment} from '../../../environments/environment';
import {map} from 'rxjs/operators';
import {ContactProvider} from '../interfaces/contact-provider';

@Injectable({
  providedIn: 'root'
})
export class ContactHttpService implements ContactProvider {

  url: string;
  contacts: any;

  constructor(private httpClient: HttpClient) {
    this.url = environment.apiEndpointUrl + '/contacts';
  }

  get(): Observable<Contact[]> {
    return this.httpClient.get(this.url).pipe(map(response => {
      return response as Contact[];
    }));
  }

  getById(id: string): Observable<Contact> {
    return  this.httpClient.get(this.url + '/' + id).pipe(map( response => {
      return response as Contact;
    }));
  }

  edit(contact: Contact): Observable<Contact> {
    return this.httpClient.put(this.url + '/' + contact.id, contact).pipe(map( response => {
      return response as Contact;
  }));
  }

  create(contact: Contact): Observable<Contact> {
    console.log(contact);

    return this.httpClient.post(this.url, contact).pipe(map(response => {
      console.log(contact);
      return response as Contact;
    }));
  }

  delete(contact: Contact): Observable<any>
  {
    return this.httpClient.delete(this.url + '/' + contact.id);
  }

  search(searchText): Observable<Contact[]>
  {
    return this.httpClient.get(this.url + '?q=' + searchText).pipe(map(response => {
      return response as Contact[];
    }));
  }
}

