import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import{ MailComponent } from './mail/mail.component'
import { ReceivedMailsComponent } from './received-mails/received-mails.component';
import{ DashboardComponent } from './dashboard/dashboard.component'
import{ NewMailComponent } from './new-mail/new-mail.component'

const routes: Routes = [
  { path: '', redirectTo: '/dashboard', pathMatch: 'full' },
  { path: ':account_id/inbox', component: ReceivedMailsComponent },
  // TEMP: temporary duplicated ReceivedMailsComponent routing
  { path: ':account_id/mails', component: ReceivedMailsComponent },
  { path: ':account_id/mail/:mail_id', component: MailComponent },
  { path: ':account_id/new-mail', component: NewMailComponent },
  { path: 'dashboard', component: DashboardComponent }
];

@NgModule({
  imports: [ RouterModule.forRoot(routes) ],
  exports: [ RouterModule ]
})

export class AppRoutingModule {
}
