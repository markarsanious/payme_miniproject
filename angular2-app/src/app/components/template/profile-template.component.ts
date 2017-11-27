import { Component } from '@angular/core';
import {Http} from '@angular/http';
import 'rxjs/add/operator/map';
import { Router } from '@angular/router';
import { Authentication } from '../../services/authentication.services';

@Component({
    moduleId: module.id,
    selector: 'profile-template',
    templateUrl:'./profile-template.component.html'  ,
    styleUrls: ['./profile-template.component.css'],
})

export class ProfileTemplate  { 
    name: String;
    type: String;
    allowed_balance: String;

    sender_daily_count: String;
    sender_daily_amount: String;
    sender_monthly_count:String;
    sender_monthly_amount:String;

    receiver_daily_count:String;
    receiver_daily_amount:String;
    receiver_monthly_count:String;
    receiver_monthly_amount:String;

    same_type_trans_daily_count:String;
    same_type_trans_daily_amount:String;
    same_type_trans_monthly_count:String;
    same_type_trans_monthly_amount:String;

    same_type_trans_sender_fees_type: String;
    same_type_trans_sender_fees_quantity: String;
    same_type_trans_sender_fees_min:String;
    same_type_trans_sender_fees_max:String;

    same_type_trans_receiver_fees_type: String;
    same_type_trans_receiver_fees_quantity: String;
    same_type_trans_receiver_fees_min:String;
    same_type_trans_receiver_fees_max:String;

    diff_type_trans_daily_count:String;
    diff_type_trans_daily_amount:String;
    diff_type_trans_monthly_count:String;
    diff_type_trans_monthly_amount:String;

    diff_type_trans_sender_fees_type: String;
    diff_type_trans_sender_fees_quantity: String;
    diff_type_trans_sender_fees_min:String;
    diff_type_trans_sender_fees_max:String;
    
    diff_type_trans_receiver_fees_type:String;
    diff_type_trans_receiver_fees_quantity:String;
    diff_type_trans_receiver_fees_min:String;
    diff_type_trans_receiver_fees_max:String;

    step_one: boolean = true;
    step_two: boolean = false;
    step_three: boolean = false;

    error_message:String;
    success_message:String;

  constructor(private http: Http, private router: Router, private authentication: Authentication){
    
  }

  global_limits()
  {
     if(this.name!=undefined && this.type!=undefined && this.allowed_balance!=undefined
        && this.sender_daily_count!=undefined && this.sender_daily_amount!=undefined && this.sender_monthly_count!=undefined && this.sender_monthly_amount!=undefined 
        && this.receiver_daily_count!=undefined && this.receiver_daily_amount!=undefined && this.receiver_monthly_count!=undefined && this.receiver_monthly_amount!=undefined )
        {
            this.step_one= false;
            this.step_two= true;
            this.step_three= false;
        }
    
  }

  same_type_trans()
  {
    
    if(this.same_type_trans_daily_count!=undefined && this.same_type_trans_daily_amount!=undefined && this.same_type_trans_monthly_count!=undefined && this.same_type_trans_monthly_amount!=undefined
        && this.same_type_trans_sender_fees_type!=undefined && this.same_type_trans_sender_fees_quantity!=undefined && this.same_type_trans_sender_fees_min!=undefined && this.same_type_trans_sender_fees_max!=undefined 
        && this.same_type_trans_receiver_fees_type!=undefined && this.same_type_trans_receiver_fees_quantity!=undefined && this.same_type_trans_receiver_fees_min!=undefined && this.same_type_trans_receiver_fees_max!=undefined )
        {
            this.step_one= false;
            this.step_two= false;
            this.step_three= true;
        }
  }

  same_type_trans_back()
  {
    this.step_one= true;
    this.step_two= false;
    this.step_three= false;
  }

  diff_type_trans_back()
  {
    this.step_one= false;
    this.step_two= true;
    this.step_three= false;
  }

  diff_type_trans()
  {
    let body = {"name":this.name, "type": this.type, "allowed_balance":this.allowed_balance,

        "sender_daily_count":this.sender_daily_count, "sender_daily_amount":this.sender_daily_amount,
        "sender_monthly_count":this.sender_monthly_count, "sender_monthly_amount":this.sender_monthly_amount,

        "receiver_daily_count":this.receiver_daily_count, "receiver_daily_amount":this.receiver_daily_amount,
        "receiver_monthly_count":this.receiver_monthly_count, "receiver_monthly_amount":this.receiver_monthly_amount,

        "same_type_trans_daily_count":this.same_type_trans_daily_count, "same_type_trans_daily_amount":this.same_type_trans_daily_amount,
        "same_type_trans_monthly_count":this.same_type_trans_monthly_count, "same_type_trans_monthly_amount":this.same_type_trans_monthly_amount,

        "same_type_trans_sender_fees_type":this.same_type_trans_sender_fees_type, "same_type_trans_sender_fees_quantity": this.same_type_trans_sender_fees_quantity,
        "same_type_trans_sender_fees_min":this.same_type_trans_sender_fees_min, "same_type_trans_sender_fees_max":this.same_type_trans_sender_fees_max,

        "same_type_trans_receiver_fees_type":this.same_type_trans_receiver_fees_type, "same_type_trans_receiver_fees_quantity": this.same_type_trans_receiver_fees_quantity,        
        "same_type_trans_receiver_fees_min":this.same_type_trans_receiver_fees_min, "same_type_trans_receiver_fees_max":this.same_type_trans_receiver_fees_max,
       
        "diff_type_trans_daily_count":this.diff_type_trans_daily_count, "diff_type_trans_daily_amount":this.diff_type_trans_daily_amount,
        "diff_type_trans_monthly_count":this.diff_type_trans_monthly_count, "diff_type_trans_monthly_amount":this.diff_type_trans_monthly_amount,
       
        "diff_type_trans_sender_fees_type":this.diff_type_trans_sender_fees_type, "diff_type_trans_sender_fees_quantity": this.diff_type_trans_sender_fees_quantity,
        "diff_type_trans_sender_fees_min":this.diff_type_trans_sender_fees_min, "diff_type_trans_sender_fees_max":this.diff_type_trans_sender_fees_max,
        
        "diff_type_trans_receiver_fees_type":this.diff_type_trans_receiver_fees_type, "diff_type_trans_receiver_fees_quantity": this.diff_type_trans_receiver_fees_quantity,                
        "diff_type_trans_receiver_fees_min":this.diff_type_trans_receiver_fees_min, "diff_type_trans_receiver_fees_max":this.diff_type_trans_receiver_fees_max
    }

    this.authentication.post('http://localhost:1337/template/create', body).subscribe((data) => { 
        this.error_message=null;
        this.success_message=data.data;
        //this.router.navigate(['/']);
      },(error) => { 
          this.success_message=null;
          this.error_message=error.json().message;
        });
  

        
       
       
  }

}