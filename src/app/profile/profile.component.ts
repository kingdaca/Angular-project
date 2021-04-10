import { Component, OnInit } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {CookieService} from 'ngx-cookie-service';
import {Router} from '@angular/router';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.css']
})
export class ProfileComponent implements OnInit {

  products:any[];
  user:any;

  constructor(private http:HttpClient,private cookie:CookieService, private router:Router) { }

  ngOnInit(): void {
    let id = this.cookie.get('id');

    this.http.post("/Projekat/getUserByID?id="+id,1)
      .subscribe(res=>{
        this.user = res;
        console.log(this.user);
      })
  }

}
