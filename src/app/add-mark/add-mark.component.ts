import { Component, OnInit } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {CookieService} from 'ngx-cookie-service';
import {Router} from '@angular/router';
import {FormControl, FormGroup, Validators} from '@angular/forms';

@Component({
  selector: 'app-add-mark',
  templateUrl: './add-mark.component.html',
  styleUrls: ['./add-mark.component.css']
})
export class AddMarkComponent implements OnInit {

  formGroup : FormGroup;

  constructor(private http: HttpClient,private cookie:CookieService, private router:Router) {
    this.formGroup = new FormGroup({
      mark: new FormControl('', [Validators.required])
    });
  }

  ngOnInit(): void {
  }

  addMark(){
    var mark = this.formGroup.value.mark;
    this.http.post<any>("/Projekat/addMark?mark="+mark,1)
      .subscribe(res=>{

      })
    this.router.navigate(['/addModel']);
  }

}
