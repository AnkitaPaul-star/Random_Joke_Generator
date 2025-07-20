import { Injectable } from "@angular/core";
import { HttpClient } from "@angular/common/http";
import { Observable } from "rxjs";

@Injectable({
    providedIn: 'root'
})
export class Adminservice{
    private apiurl='http://localhost:3000/api/fetch_details';
    constructor(private http:HttpClient){}
    getUsers():Observable<any>{
        return this.http.get(this.apiurl);
    }
}