import {Component, OnInit} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {FormControl, FormGroup, Validators} from '@angular/forms';
import {CookieService} from 'ngx-cookie-service';
import Swal from 'sweetalert2';
import {Route, Router} from '@angular/router';

@Component({
  selector: 'app-add-product',
  templateUrl: './add-product.component.html',
  styleUrls: ['./add-product.component.css']
})
export class AddProductComponent implements OnInit {

  marks: any[];
  models: any[];
  formGroup: FormGroup;
  markID: string;


  constructor(private http: HttpClient,private cookie:CookieService, private router:Router) {
    this.formGroup = new FormGroup({
      mark: new FormControl('', [Validators.required]),
      model: new FormControl('', [Validators.required]),
      power: new FormControl('', [Validators.required]),
      price: new FormControl('', [Validators.required]),
      cubic: new FormControl('', [Validators.required]),
      desc: new FormControl('', [Validators.required]),
      imgPath: new FormControl('', [Validators.required]),
    });
  }

  ngOnInit(): void {
    this.http.get<any>('/Projekat/findMarka')
      .subscribe(res => {
        this.marks = res;
      });
  }

  saveValue($event) {
    this.markID = this.formGroup.value.mark;
    this.http.get<any>('Projekat/getModelFromMarkaID?marka_id=' + this.markID)
      .subscribe(res => {
        this.models = res;
      });
  }

  submit() {

    let model = this.formGroup.value.model;
    let cubic = this.formGroup.value.cubic;
    let power = this.formGroup.value.power;
    let price = this.formGroup.value.price;
    let desc = this.formGroup.value.desc;
    let imgPath = this.formGroup.value.imgPath;
    let userID = this.cookie.get('id');;
    console.log(userID);
    console.log(cubic);
    console.log(power);
    console.log(price)
    console.log(desc);
    console.log(imgPath);
    console.log(model)

    this.http.post<any>("/Projekat/AddArticle?model="+model+"&cubic="+cubic+"&power="+power+"&price="+price+"&desc="+desc+"&imgPath="+imgPath+"&userID="+userID,1)
      .subscribe(res=>{
        console.log(res);
      })
      Swal.fire("Product is added","","success");
      this.router.navigate(['models']);

  }

}
