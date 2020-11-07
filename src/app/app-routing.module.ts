import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AppComponent } from './app.component';
import { PhoneListComponent } from './components/phone-list/phone-list.component';

const routes: Routes = [
{ path: '', component: AppComponent },
{ path: 'home', component: PhoneListComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
