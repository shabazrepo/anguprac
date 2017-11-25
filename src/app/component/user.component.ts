import {Component }from '@angular/core'; 
import {PostsService}from '../service/posts.service'; 
@Component( {
    moduleId:module.id, 
    selector:'user', 
    templateUrl:'user.component.html', 
    providers:[PostsService]

})
export class userComponent {
    title:string; 
    name:string; 
    email:string; 
    Address:address; 
    hobbies:string[]; 
    Showhobbies:boolean; 
    Posts:post[]; 
    //the constructor should go in the name of the class 

    constructor(private PostsService:PostsService ) {
        this.title = 'app'; 
        this.name = 'shankar narayan'; 
        this.email = 'shabymiyan@gmail.com'; 
        this.Address =  {

            street:'12 pine View ave '
        }
        this.hobbies = ['music', 'movies', 'singing']; 
        this.Showhobbies = false; 
        this.PostsService.getPosts().subscribe(posts =>{
          //  this.Posts = posts; 
          console.log(posts);
           
        }); 
    }

   
    togglehobbies () {
        if (this.Showhobbies == true) {
    this.Showhobbies = false; 

    }else
this.Showhobbies = true; 
}
    
    
addhobby(hobby) {
    this.hobbies.push(hobby); 

}
 
deleteHobby(i) {
     this.hobbies.splice(i, 1); 
 }
}
interface address {
  street:string; 
}




interface post {

    id:number; 
    first_name:string;
    last_name: string;
    avatar : string; 
}