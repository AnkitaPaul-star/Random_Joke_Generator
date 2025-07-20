import { Component } from '@angular/core';
import { AuthService } from '../services/auth.service';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { FormsModule } from '@angular/forms';
import {  HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-signup',
  imports: [CommonModule,RouterModule,FormsModule],
  templateUrl: './signup.html',
  styleUrl: './signup.css'
})
export class Signup {
     signupData={name: '',email: '',password:''};
     successMessage='';
     errorMessage='';
     constructor(private http:HttpClient){}
      onSignup(){
        this.successMessage='';
        this.errorMessage='';
     const {name,email,password}=this.signupData;
     console.log("signup data", this.signupData);
     
     this.http.post('http://localhost:3000/api/register',{
       name: this.signupData.name,
  email: this.signupData.email,
  password: this.signupData.password
     }).subscribe({
      next:()=>{
        this.successMessage='Account Created Successfully, Please Login.';
        this.signupData={name: '',email: '',password: ''}
      },
      error:(err)=>{
        this.errorMessage=err.error?.message || 'Failed to Sign Up';
      }
     })
      }
     

}
