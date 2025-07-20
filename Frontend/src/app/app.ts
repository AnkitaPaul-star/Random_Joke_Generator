import { Component, inject, signal } from '@angular/core';
import { RouterOutlet,RouterLink, RouterModule } from '@angular/router';
import { Login } from './login/login';
import {Signup} from './signup/signup';
import {Home} from './home/home';
import {User} from './user/user';
import { AuthService } from './services/auth.service';

@Component({
  selector: 'app-root',
  imports: [RouterLink,RouterOutlet,RouterModule,Login,Signup,Home,User],
  templateUrl: './app.html',
  styleUrl: './app.css'
})
export class App {
  //protected readonly title = signal('myapp');
   authService=inject(AuthService);

}
