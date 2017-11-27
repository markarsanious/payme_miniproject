import { Component } from '@angular/core';
import {Http} from '@angular/http';
import 'rxjs/add/operator/map';
import { Router } from '@angular/router';
import { Authentication } from '../../services/authentication.services';

@Component({
    moduleId: module.id,
    selector: 'login',
    templateUrl:'./login.component.html'  ,
    styleUrls: ['./login.component.css'],
})
export class LoginComponent  { 
  email:String;
  password: String;

  constructor(private http: Http, private router: Router, private authentication: Authentication){
    
  }

  login(){
    
      this.authentication.login(this.email, this.password);
  }


}