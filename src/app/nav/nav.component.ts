import {Component, OnInit} from '@angular/core';
import {CookieService} from 'ngx-cookie-service';
import {Router} from '@angular/router';

@Component({
  selector: 'app-nav',
  templateUrl: './nav.component.html',
  styleUrls: ['./nav.component.css']
})
export class NavComponent implements OnInit {

  localStorage: any = JSON.parse(localStorage.getItem('token'));
  rolee: boolean;

  constructor(public cookie:CookieService,private router:Router) {
  }

  ngOnInit(): void {
    if(this.cookie.get('loggedin') == 'true'){
      this.router.navigate(['home']);
    }

  }

  logout() {
    localStorage.removeItem('token');
    this.cookie.deleteAll();
  }

  ifif() {


  }
}

