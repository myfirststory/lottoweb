import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  constructor(private router: Router) { }

  ngOnInit() {
  }
  btnClick= function(){
    if(sessionStorage.getItem('username')=='admin'){
      this.router.navigateByUrl('/dashboard');
    }else{this.router.navigateByUrl('/login');}
    
  }
}
