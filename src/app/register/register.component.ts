import {Component, OnInit} from '@angular/core';
import {FormControl, FormGroup, Validators} from '@angular/forms';
import {HttpClient} from '@angular/common/http';
import {Router} from '@angular/router';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {

  fGroup: FormGroup;

  constructor(private http: HttpClient, private router: Router) {
    this.fGroup = new FormGroup({
      firstName: new FormControl('', [Validators.required]),
      lastName: new FormControl('', [Validators.required]),
      username: new FormControl('', [Validators.required]),
      password: new FormControl('', [Validators.required]),
      email: new FormControl('', [Validators.required]),
      adress: new FormControl('', [Validators.required]),
      phone: new FormControl('', [Validators.required])
    });
  }

  ngOnInit(): void {
  }

  Register() {
    let fName = this.fGroup.value.firstName;
    let lName = this.fGroup.value.lastName;
    let username = this.fGroup.value.username;
    let password = this.fGroup.value.password;
    let email = this.fGroup.value.email;
    let adress = this.fGroup.value.adress;
    let phone = this.fGroup.value.phone;

    console.log(fName);
    console.log(lName);
    console.log(username);
    console.log(password);
    console.log(adress);
    console.log(phone);
    if (this.fGroup.valid) {
      this.http.get<any>('Projekat/RegisterServlet?ime=' + fName + '&prezime=' + lName + '&email=' + email + '&username=' + username + '&pass=' + password + '&adresa=' + adress + '&phone=' + phone)
        .subscribe(res => {
          JSON.parse(res);
          console.log(res);
        });
      this.router.navigate(['login']);
      Swal.fire('Registracija je uspela', '', 'success');
    } else {
      Swal.fire('Registracija je uspela', '', 'error');
    }

  }


}
