import {Component, OnInit} from '@angular/core';
import {AuthService} from '../auth.service';
import {FormControl, FormGroup, Validators} from '@angular/forms';
import {Router} from '@angular/router';
import Swal from 'sweetalert2';
import {CookieService} from 'ngx-cookie-service';


@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit{
  ngOnInit(): void {
    if(this.cookie.get('loggedin') == 'true'){
      this.router.navigate(['home']);
    }
  }

  formGroup: FormGroup;

  constructor(private auth: AuthService, private router: Router, private cookie:CookieService) {
    this.formGroup = new FormGroup({
      username: new FormControl('', [Validators.required]),
      password: new FormControl('', [Validators.required])
    });
  }

  login() {
    let username = this.formGroup.value.username;
    let password = this.formGroup.value.password;
    if (this.formGroup.valid) {
      this.auth.authLogin(username, password)
        .subscribe(res => {
          if (res != null && res.username == username && res.password == password) {
            this.router.navigate(['home']);
            this.cookie.set('username', res.username);
            this.cookie.set('role', res.role);
            this.cookie.set('id', res.id);
            this.cookie.set('password', res.password);
            this.cookie.set('loggedin', 'true');
            Swal.fire({
              title: 'Login success',
              icon: 'success',
            });
            setTimeout(() => {
              window.location.reload();
            }, 1000);
          }
        });
      setTimeout(() => {
        window.location.reload();
      }, 1000);
    }
    Swal.fire({
      title: 'Username or password is invalid',
      icon: 'error',
    });
  }

}
