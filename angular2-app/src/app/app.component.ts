import { Component } from '@angular/core';
import {Http} from '@angular/http';
import 'rxjs/add/operator/map';
import { Authentication } from './services/authentication.services';


@Component({
  selector: 'my-app',
  templateUrl: './app.component.html'
})
export class AppComponent { 
  
  constructor(private http: Http,private authentication: Authentication){

  }

  logout()
  {
      this.authentication.logout();
  }
  
}


