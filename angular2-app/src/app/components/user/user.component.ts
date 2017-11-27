import { Component } from '@angular/core';
import { PostService } from '../../services/posts.services';
import { Authentication } from '../../services/authentication.services';



@Component({
    moduleId: module.id,
    selector: 'user',
    templateUrl:'./user.component.html'  ,
    providers: [PostService]
})
export class UserComponent  { 
  name:String;
  email:String;
  address: address;
  hobbies: string [];
  showHobbies: boolean;
  posts: Post[];

  constructor(private postService: PostService){
    this.name="Mark Isaac";
    this.email = 'mark.arsanious@gmail.com';
    this.address = {
        street:'3A Zaghloul St., El Zaher',
        city:'Cairo',
        country:'Egypt'
    }
    this.hobbies = ['Music', 'Movies','Sports'];
    this.showHobbies = false;

    this.postService.getPosts().subscribe(posts => {
        this.posts =posts;
    })

  }

  toggleHobbies(){
      if(this.showHobbies == true)
      {
          this.showHobbies= false;
      }
      else
      {
        this.showHobbies = true;
      }
  }

  addHobby(hobby){
    this.hobbies.push(hobby)
  }

  deleteHobby(i)
  {
    this.hobbies.splice(i,1);
  }
}

interface address {
    street: String;
    city: String;
    country: String;
}

interface Post {
    id: number;
    title: String;
    body: String;
}

