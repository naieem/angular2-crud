import { Component } from '@angular/core';
import { PostService } from '../service/posts.service';
@Component({
  selector: 'user',
  templateUrl: './user.component.html',
  providers:[PostService]
//   styleUrls: ['./app.component.css']
})
export class UserComponent {
    name;
    title;
    hello:hello;
    users:string[];
    showUsers:boolean;
    posts:post;
  constructor(private postService: PostService){
      this.name="name";
      this.title="this is title";
      this.hello={
          name:"hello name",
          age:9
      }
      this.users=['forid','supto','imrul'];
      this.showUsers=false;
      this.postService.getposts().subscribe(posts =>{
          console.log(posts);
          this.posts=posts;
      });
  }
  toggleUser(){
      console.log("call from toggle button");
      this.showUsers=!this.showUsers;
  }
  addUser(user){
      console.log(user);
    //   this.users.push(user);
  }
}

interface hello{
    name:string,
    age:number
}
interface post{
    id:number,
    title:string,
    body:string
}