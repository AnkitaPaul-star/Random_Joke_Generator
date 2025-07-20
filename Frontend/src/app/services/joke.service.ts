import { Injectable } from "@angular/core";
import { HttpClient } from "@angular/common/http";
import { Observable } from "rxjs";

@Injectable({
    providedIn:'root',
})
export class JokeService{
   // private apiurl='https://v2.jokeapi.dev/joke/Any?type=single';
   private apiurl='https://official-joke-api.appspot.com/random_joke';
    constructor(private http: HttpClient){}
    getJokes(){
        return this.http.get(this.apiurl);
    }
}