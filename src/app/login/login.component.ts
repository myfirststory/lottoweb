import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import {AuthService} from '../services/auth.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  constructor(private router:Router, auth:AuthService) {
   }

  ngOnInit() {
  }
loginUser(e){
  e.preventDefault()
  const target = e.target; 
  const username = target.querySelector('#username').value;
  const password = target.querySelector('#password').value;
  if(username==''||password==''){
    
  }
  sessionStorage.setItem('username',username);
  sessionStorage.setItem('password',password);
  this.router.navigate(['dashboard']);
}
}
