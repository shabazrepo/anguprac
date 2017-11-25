import {Injectable}from '@angular/core'; 
import {Http}from '@angular/http'; 
import 'rxjs/add/operator/map'; 

@Injectable()
export class PostsService {

    constructor(private http:Http) {
        console.log("posts sevice initialized"); 
    }

    getPosts() {

        return this.http.get('http://jsonplaceholder.typicode.com/todos')
.map(res => res.json())
    }
}