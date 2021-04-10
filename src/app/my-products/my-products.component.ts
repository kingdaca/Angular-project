import { Component, OnInit } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {CookieService} from 'ngx-cookie-service';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-my-products',
  templateUrl: './my-products.component.html',
  styleUrls: ['./my-products.component.css']
})
export class MyProductsComponent implements OnInit {
  products:any[];
  constructor(private http:HttpClient,private cookie:CookieService) { }

  ngOnInit(){
    let id = this.cookie.get('id');
    this.http.get<any>("/Projekat/getProductsByUserId?UserId="+id)
      .subscribe(res=>{
        this.products = res;
      })
  }

  deleteProduct(product){
    this.http.get("/Projekat/DeleteProduct?id="+product.id)
      .subscribe(res=>{
        res;
      });
    let index = this.products.indexOf(product);
    this.products.splice(index,1);
    Swal.fire("Delete is success","","success");
  }


}
