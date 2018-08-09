import { Component, OnInit } from '@angular/core';

import { AppStateService } from '../app-state.service';
import{ UserAccountService } from '../services/user-account.service';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit {
  hasUnreadMails: boolean = false; // TODO: should be a property of an account service
  constructor(
    public  appStateService : AppStateService
  ) {

  }

  ngOnInit() {
  }
  accounts = this.appStateService.accounts;
  setCurrentAccount(account: UserAccountService){
    this.appStateService.set_currentAccount( account );
  }
  account_signup(){
      location.href="https://login.eveonline.com/oauth/authorize?response_type=code&redirect_uri=https://www.eve-mails.com&Client_id=31fb6d6b42ef4528a267376f4b73d19f&scope=esi-mail.read_mail.v1%20esi-mail.organize_mail.v1%20esi-mail.send_mail.v1";
  }
}
