import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { Router } from "@angular/router";
import { environment } from "../../environments/environment.development";
@Injectable({
    providedIn: 'root'
})
export class AuthService{
    constructor(private http: HttpClient, private router:Router){}

    signUp(name:string,email:string, password:string){
        const body={name,email,password};
        return this.http.post(`${environment.apiUrl}/register`,body);
    }
    login(email:string, password:string){
        const body={email,password};
        return this.http.post<{token:string}>(`${environment.apiUrl}/login`,body);
    }

    logout(){
        localStorage.removeItem('token');
        this.router.navigate(['/login'])
    }
    isLoggedIn(){
        return !!localStorage.getItem('token')
    }

    getToken(){
        return localStorage.getItem('token')
    }
}