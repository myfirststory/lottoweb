import { Component, OnInit } from '@angular/core';
import {HttpClientModule, HttpClient} from '@angular/common/http';
import { User } from 'src/models/user';
import { GlobalVarible } from 'src/models/url';
import {Router} from '@angular/router';
@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit {
  user:User
  constructor(private http:HttpClient, private router:Router) { }

  ngOnInit() {
    this.http.get<User>(GlobalVarible.host + "/api/User/List")
    .subscribe((data) => {
      this.user = data;
    });
  }
  btnClick(id){
            this.http.post(GlobalVarible.host + "/api/User/Delete/" + id, {}, GlobalVarible.httpOptions)
              .subscribe(data => {
                this.ngOnInit();
              });
  }
  logout(){
    sessionStorage.clear();
    this.router.navigate(['/login']);
    alert('Logout Successfully.')
  }

  adduser(){
    this.router.navigate(['/adduser']);
  }
}
