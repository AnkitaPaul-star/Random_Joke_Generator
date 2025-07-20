import { Component, OnInit } from '@angular/core';
import { Adminservice } from '../services/admin.service';
import { RouterModule } from '@angular/router';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-admin',
  imports: [RouterModule,CommonModule,FormsModule],
  templateUrl: './admin.html',
  styleUrl: './admin.css'
})
export class Admin implements OnInit{
  user:any[]=[];
  constructor(private adminService:Adminservice){}
  ngOnInit(): void {
    // Subscribe to the Observable returned by getUsers()
    this.adminService.getUsers().subscribe({
  next: (data: any[]) => { // 'next' handles successful responses
    this.user = data;
    console.log('Users fetched successfully:', data);
  },
  error: (err: any) => { // 'error' handles any errors during the request
    console.error('API Error during fetching users:', err);
    // You could also set an error message property here to display in UI
  },
 

  });
}
}



