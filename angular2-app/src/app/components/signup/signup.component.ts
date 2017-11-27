import { Component } from '@angular/core';
import {Http} from '@angular/http';
import 'rxjs/add/operator/map';
import { Router } from '@angular/router';

@Component({
    moduleId: module.id,
    selector: 'signup',
    templateUrl:'./signup.component.html'  ,
    styleUrls: ['./signup.component.css'],
})
export class SignupComponent  { 
  name:String;
  email:String;
  type: String;
  password: String;
  confirm: String;
  address: String;
  tel_num: String;
  errors: String[];
  success_message: String;

  constructor(private http: Http,private router: Router){

  }

  signup(){
    const body = {"name":this.name, "email": this.email, "password": this.password, 
    "confirm":this.confirm, "type": this.type,"tel_num":this.tel_num, "address":this.address};
    this.http.post('http://localhost:1337/signup', body).subscribe((data) => { 
        // Page redirect when getting response
        this.errors=null;
        this.success_message= data.json().message;
        //this.router.navigate(['/login']);
      },(errors) => { 
        this.success_message= null;
        this.errors= errors.json().data;

      });
  
  }

}