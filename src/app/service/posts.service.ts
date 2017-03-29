    import { Injectable }              from '@angular/core';
    import { Http, Response }          from '@angular/http';
    import { Observable } from 'rxjs/Observable';
    import 'rxjs/add/operator/catch';
    import 'rxjs/add/operator/map';
    @Injectable()
    export class PostService {
    //   private heroesUrl = 'api/heroes';  // URL to web API
      constructor (private http: Http) {
          console.log("PostService initiated")
      }
      getposts(){
          return this.http.get('https://jsonplaceholder.typicode.com/posts').map(res => res.json());
      }
    }