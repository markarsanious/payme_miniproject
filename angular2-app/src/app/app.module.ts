import { NgModule }      from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import {FormsModule} from '@angular/forms';
import {HttpModule} from '@angular/http';

import { AppComponent }  from './app.component';
import { UserComponent }  from './components/user/user.component';
import { AboutComponent }  from './components/about/about.component';
import { SignupComponent }  from './components/signup/signup.component';
import { LoginComponent }  from './components/login/login.component';
import { ProfileTemplate }  from './components/template/profile-template.component';
import { TransferComponent }  from './components/transfer/transfer.component';
import { DepositComponent }  from './components/deposit/deposit.component';
import { WithdrawComponent }  from './components/withdraw/withdraw.component';

import {Authentication} from './services/authentication.services';

import {routing} from './app.routing';

@NgModule({
  imports:      [ BrowserModule, FormsModule, HttpModule, routing ],
  declarations: [ AppComponent, UserComponent, AboutComponent, SignupComponent, LoginComponent, ProfileTemplate, TransferComponent, DepositComponent, WithdrawComponent],
  bootstrap:    [ AppComponent ],
  providers: [Authentication]
})
export class AppModule { }
