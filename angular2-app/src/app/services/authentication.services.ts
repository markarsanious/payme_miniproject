import { Injectable } from '@angular/core';
import {Http, Headers, RequestOptions} from '@angular/http';
import 'rxjs/add/operator/map';
import { Router } from '@angular/router';



@Injectable()
export class Authentication{
    is_authenticated: boolean = false;
    user_type: String = "";
    user_name: String ="";
    user_id: String = "";
    success_message:String = null;
    errors: String[] = null;
    error_message: String = null;
    

    constructor(private http: Http, private router: Router){
        
    }

   updateStatus()
   {
       if(localStorage.getItem('token_id')!=null)
       {    
           this.is_authenticated= true;
           let body = {"token_id": localStorage.getItem('token_id')};
           
           this.http.post('http://localhost:1337/user/decode', body).subscribe(data => { 
                this.user_type= data.json().data.type;
                this.user_id= data.json().data.id;
                this.user_name= data.json().data.name;
                localStorage.setItem('user_type', data.json().data.type);
                localStorage.setItem('user_id', data.json().data.id); 
                              
          },(errors) => { console.log("err", errors); 
            });
           
       }
       else
       {    
           localStorage.removeItem('user_type');
           this.is_authenticated=false;
           this.user_id="";
           this.user_name="";
           this.user_type="";
       }
   }

   login(email: String, password: String)
   {
        const body = {"email":email, "password": password};
        this.http.post('http://localhost:1337/login', body).subscribe(data => { 
            localStorage.setItem('token_id', data.json().data) ;
            this.updateStatus();
            this.errors=null;
            this.error_message=null;
            this.success_message= "Welcome " + this.user_name + "! you have successfully logged in."              
            this.router.navigate(['/']);
        
      },(errors) => { 
            this.success_message=null;        
            this.errors= errors.json().message;
            this.error_message = errors.json().message;
            console.log(errors);
        });
   }

   logout()
   {
        localStorage.removeItem('token_id');
        this.updateStatus();
        this.success_message=null;
        this.errors=null;
        this.error_message=null;
        
   }

   get(url) {
    let options = {};
    if(localStorage.getItem('token_id')!=null)
    {
        let headers = new Headers();
        let authToken = localStorage.getItem('token_id');
        headers.append('Content-Type', 'application/json');
        headers.append('Authorization', authToken);
        headers.append('user_type', localStorage.getItem('user_type')); 
        headers.append('user_id', localStorage.getItem('user_id')); 
        options = new RequestOptions({ headers: headers });
    }   

    return this.http.get(url,options).map(res => res.json());;
  }

  post(url, body) {
    
    let options = {};
    if(localStorage.getItem('token_id')!=null)
    {
        let headers = new Headers();
        let authToken = localStorage.getItem('token_id');
        headers.append('Content-Type', 'application/json');
        headers.append('Authorization', authToken);
        headers.append('user_type', localStorage.getItem('user_type')); 
        headers.append('user_id', localStorage.getItem('user_id')); 
        options = new RequestOptions({ headers: headers });
    }   
   

    //let headers = new Headers().set('Authorization', );
    //let options = new RequestOptions({ headers: headers });
    

    return this.http.post(url, body, options).map(res => res.json());;
  }

}