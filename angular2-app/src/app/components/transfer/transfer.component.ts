import { Component } from '@angular/core';
import {Http} from '@angular/http';
import 'rxjs/add/operator/map';
import { Router } from '@angular/router';
import { Authentication } from '../../services/authentication.services';

@Component({
    moduleId: module.id,
    selector: 'transfer',
    templateUrl:'./transfer.component.html'  ,
    styleUrls: ['./transfer.component.css'],
})
export class TransferComponent  { 
  email:String;
  amount:String;
  errorMessage:String;
  successMessage: String;
  
  constructor(private http: Http,private router: Router, private authentication: Authentication){

  }

  transfer(){
    const body = {"email": this.email, "amount": this.amount};
    this.authentication.post('http://localhost:1337/transfer', body).subscribe((data) => { 
        // Page redirect when getting response
        this.errorMessage=null;
        this.successMessage = data.data;
      },(error) => { 
        console.log("err", error); 
        this.successMessage=null;
        this.errorMessage= error.json().message;
      });
  
  }

}