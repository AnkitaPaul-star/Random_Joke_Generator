import { Component } from '@angular/core';
import { AuthService } from '../services/auth.service';
import { Router, RouterModule } from '@angular/router';
import { FormsModule } from '@angular/forms';
import { CommonModule} from '@angular/common';

@Component({
  selector: 'app-login',
  imports: [FormsModule,CommonModule,RouterModule],
  templateUrl: './login.html',
  styleUrl: './login.css'
})
export class Login {
  loginData={email: '',password: ''}
  errorMessage: string='';
  constructor(private authService:AuthService, private router:Router){}
  onLogin(){
    this.errorMessage='';
    const {email,password}=this.loginData;
    this.authService.login(email,password).subscribe({
      next:(response)=>{
           const token=response.token;
           localStorage.setItem('token',token);
           window.location.href='/user'
           this.router.navigate(['/user'])
      },
      error:(err)=>{
        this.errorMessage=err.errors?.message || 'Invalid Email or Password, Please Try Again!!'
      }
    })
  }
}
