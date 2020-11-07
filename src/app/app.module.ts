import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

// MATERIALS //
import {MatInputModule} from '@angular/material/input';
import {MatButtonModule} from '@angular/material/button';
import {MatCardModule} from '@angular/material/card';
import {MatSidenavModule} from '@angular/material/sidenav';


// COMPONENTS //
import { AppComponent } from './app.component';
import { PhoneListComponent } from './components/phone-list/phone-list.component';
import { AddContactsPopoverComponent } from './components/add-contacts-popover/add-contacts-popover.component';

// SERVICES //
import { ContactsService } from './services/contacts.service';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { EditContactsPopoverComponent } from './components/edit-contacts-popover/edit-contacts-popover.component'


@NgModule({
  declarations: [
    AppComponent,
    PhoneListComponent,
    AddContactsPopoverComponent,
    EditContactsPopoverComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    BrowserAnimationsModule,
    MatInputModule,
    MatButtonModule,
    MatCardModule,
    MatSidenavModule
  ],
  providers: [ContactsService],
  bootstrap: [AppComponent]
})
export class AppModule { }
