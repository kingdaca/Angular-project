import { Component, OnInit } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {CookieService} from 'ngx-cookie-service';
import {Router} from '@angular/router';
import {FormControl, FormGroup, Validators} from '@angular/forms';
import Swal from 'sweetalert2';
import {timeout} from 'rxjs/operators';

@Component({
  selector: 'app-add-model',
  templateUrl: './add-model.component.html',
  styleUrls: ['./add-model.component.css']
})
export class AddModelComponent implements OnInit {

  marks: any[];
  formGroup: FormGroup;
  markID: string;


  constructor(private http: HttpClient,private cookie:CookieService, private router:Router) {
    this.formGroup = new FormGroup({
      mark: new FormControl('',[Validators.required]),
      model: new FormControl('',[Validators.required])
    })
  }

  ngOnInit(): void {
    this.http.get<any>('/Projekat/findMarka')
      .subscribe(res => {
        this.marks = res;
      });

  }

  saveValue($event) {
    this.markID = this.formGroup.value.mark;
  }
  addModel(){
    let model = this.formGroup.value.model;
    console.log(model);
    console.log(this.markID);
    this.http.get("/Projekat/addModel?markId="+this.markID+"&model="+model)
      .subscribe(res=>{
        console.log(res);
      });
    Swal.fire("Success","","success");
    setTimeout(() => {
      window.location.reload();
    }, 1000);
    this.router.navigate(['models']);
  }
}
