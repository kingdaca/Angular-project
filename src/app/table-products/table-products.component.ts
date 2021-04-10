import { Component, OnInit } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {CookieService} from 'ngx-cookie-service';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-table-products',
  templateUrl: './table-products.component.html',
  styleUrls: ['./table-products.component.css']
})
export class TableProductsComponent implements OnInit {
  products:any[];
  constructor(private http:HttpClient,private cookie:CookieService) { }

  ngOnInit(): void {
    this.http.get<any>("/Projekat/allArticals")
      .subscribe(res=>{
        this.products = res;
        console.log(this.products);
      })
  }

  deleteProduct(product){
    this.http.get("/Projekat/DeleteProduct?id="+product.id)
      .subscribe(res=>{
        res;
      });
    var index = this.products.indexOf(product);
    this.products.splice(index,1);
    Swal.fire("Success delete product","","success");
  }

}
