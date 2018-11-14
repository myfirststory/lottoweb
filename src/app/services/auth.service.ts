import { Injectable } from '@angular/core';
import {Router} from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  constructor(private router:Router) { }

  isLoggedIn(){
    if(sessionStorage.getItem('username')=='admin'&&sessionStorage.getItem('password')=='123'){
      return true;
     }else{
      this.router.navigate(['/login']);
      return false;
     }
  }
}
