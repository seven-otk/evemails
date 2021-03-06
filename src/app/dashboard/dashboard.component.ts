import { Component, OnInit } from '@angular/core';

import { MailAccount } from '../classes/MailAccount';
import{ Character } from '../classes/Character';

import { AppStateService } from '../app-state.service';
import{ UserAccountService } from '../services/user-account.service';
import{ MailService } from '../services/user-account/mail.service';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit {
  accounts: {
    character: Character;
    mailAccount: MailAccount;
  }[] = [];
  constructor(
    public  appStateService : AppStateService,
    public  userAccountService : UserAccountService,
    public mailService: MailService
  )
  {
    // TODO:  loaclstorage should be added if it is provided in the url
    // TEMP: temporarily add localstorage until localStorage has been extended
    localStorage.setItem('accounts', JSON.stringify(
        [{
          characterId: 93920413,// TEMP:
          characterName: "Vexxy Munda",// TEMP:
          refreshToken: 'token',// TEMP:
          accessToken: '', // TEMP:
          tokenExpirationTime: '' // TEMP:
        },
        {
          characterId: 93898701,// TEMP:
          characterName: "Ishi Lar",// TEMP:
          refreshToken: 'token',// TEMP:
          accessToken: '', // TEMP:
          tokenExpirationTime: '' // TEMP:
        }]
      )
    );

    this.userAccountService.accounts.forEach( account => {
      this.accounts.push(
        {
          character: account,
          mailAccount: this.mailService.get_account( account.characterId )
        }
      );
    });
  }

  ngOnInit() {
    this.appStateService.currentPageName='dashboard';
  }
  account_signup(){
      location.href="https://login.eveonline.com/oauth/authorize?response_type=code&redirect_uri=https://www.eve-mails.com&Client_id=31fb6d6b42ef4528a267376f4b73d19f&scope=esi-mail.read_mail.v1%20esi-mail.organize_mail.v1%20esi-mail.send_mail.v1";
  }
}
