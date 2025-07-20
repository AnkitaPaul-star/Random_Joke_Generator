import { Routes } from '@angular/router';
import {Login} from './login/login';
import { Signup } from './signup/signup';
import { Home } from './home/home';
import { User } from './user/user';
import { Admin } from './admin/admin';
export const routes: Routes = [
    {
        path:'',
        component:Home
    },
    {
        path:'login',
        component: Login
    },
    {
        path:'signup',
        component:Signup
    },
     {
        path:'user',
        component:User
    },
    {
        path:'admin',
        component:Admin
    }
];
