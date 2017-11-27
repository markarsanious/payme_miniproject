import { Component } from '@angular/core';
import {Http} from '@angular/http';
import 'rxjs/add/operator/map';
import { Router } from '@angular/router';
import { Authentication } from '../../services/authentication.services';

@Component({
    moduleId: module.id,
    selector: 'deposit',
    templateUrl:'./deposit.component.html'  ,
    styleUrls: ['./deposit.component.css'],
})
export class DepositComponent  { 
  amount:String;
  error_message:String;
  success_message: String;
  
  constructor(private http: Http,private router: Router, private authentication: Authentication){

  }

  deposit(){
    const body = {"amount": this.amount};
    this.authentication.post('http://localhost:1337/deposit', body).subscribe((data) => { 
        // Page redirect when getting response
        this.error_message=null;
        console.log(data.data);
        this.success_message = data.data;
      },(error) => { 
        console.log("err", error); 
        this.amount="";
        this.success_message=null;
        this.error_message= error.json().message;
      });
  
  }

}