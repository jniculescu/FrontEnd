import { BrowserModule } from '@angular/platform-browser';
import {NgModule} from '@angular/core';

import { AppComponent } from './app.component';
import { ContactListComponent } from './contact/contact-list/contact-list.component';
import { ContactListItemComponent } from './contact/contact-list-item/contact-list-item.component';
import {ContactService} from './contact/services/contact.service';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { ToolbarComponent } from './UI/toolbar/toolbar.component';
import {MatToolbarModule} from '@angular/material/toolbar';
import {MatButtonModule} from '@angular/material/button';
import {MatIconModule} from '@angular/material/icon';
import {MatSidenavModule} from '@angular/material/sidenav';
import {MatCardModule} from '@angular/material/card';
import {FlexLayoutModule} from '@angular/flex-layout';
import {NgxPaginationModule} from 'ngx-pagination';
import { ContactDetailComponent } from './contact/contact-detail/contact-detail.component';
import {RouterModule, Routes} from '@angular/router';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import {MatFormFieldModule} from '@angular/material/form-field';
import {MatDialogModule, MatInputModule, MatSnackBarModule} from '@angular/material';
import {ToolbarService} from './UI/toolbarserv/toolbar.service';
import {ContactLocalStorageService} from './contact/services/contact-local-storage.service';
import {HttpClientModule} from '@angular/common/http';
import {ContactProvider} from './contact/interfaces/contact-provider';
import {ContactHttpService} from './contact/services/contact-http.service';
import {environment} from '../environments/environment';
import { ContactMapComponent } from './contact/contact-map/contact-map.component';
import { SafeUrlPipe } from './pipes/safe-url.pipe';

const appRoutes: Routes = [
  {path: 'contacts', component: ContactListComponent},
  {path: 'contacts/new', component: ContactDetailComponent},
  {path: 'contacts/edit/:id', component: ContactDetailComponent},
  {path: 'contacts/map', component: ContactMapComponent},
  {path: '', redirectTo: '/contacts', pathMatch: 'full'}
];

@NgModule({
  declarations: [
    AppComponent,
    ContactListComponent,
    ContactListItemComponent,
    ToolbarComponent,
    ContactDetailComponent,
    ContactMapComponent,
    SafeUrlPipe
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    MatToolbarModule,
    MatButtonModule,
    MatIconModule,
    MatSidenavModule,
    MatCardModule,
    FlexLayoutModule,
    NgxPaginationModule,
    RouterModule.forRoot(appRoutes),
    FormsModule,
    MatFormFieldModule,
    MatInputModule,
    ReactiveFormsModule,
    HttpClientModule,
    MatSnackBarModule,
    MatDialogModule,

  ],
  providers: [ContactService, ToolbarService, ContactLocalStorageService, {provide: ContactProvider, useClass: environment.apiEnabled ? ContactHttpService : ContactLocalStorageService}, ],
  bootstrap: [AppComponent]
})
export class AppModule { }
