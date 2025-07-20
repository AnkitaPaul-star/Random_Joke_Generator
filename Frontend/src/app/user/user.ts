import { Component } from '@angular/core';
import { JokeService } from '../services/joke.service';
import { CommonModule } from '@angular/common';
import { HttpClient} from '@angular/common/http';

import { RouterModule } from '@angular/router';


@Component({
  selector: 'app-user',
  imports: [CommonModule,RouterModule],
  templateUrl: './user.html',
  styleUrl: './user.css'
})
export class User {
  joke:any;
   liked: boolean = false;
  constructor(private jokeService:JokeService){}
  generateJoke(){
    this.jokeService.getJokes().subscribe((data:any)=>{
        console.log(data);
        this.joke=data;
       this.liked = false;
    })
  }
  likeJoke() {
    this.liked = true;
  }

}

    
    
