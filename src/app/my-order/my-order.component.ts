import { Component, OnInit } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {CookieService} from 'ngx-cookie-service';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-my-order',
  templateUrl: './my-order.component.html',
  styleUrls: ['./my-order.component.css']
})
export class MyOrderComponent implements OnInit {

  orders:any[];

  constructor(private http:HttpClient,private cookie:CookieService) { }

  ngOnInit(): void {
    let id = this.cookie.get('id');
    this.http.get<any>("/Projekat/AllOrderById?UserId="+id)
      .subscribe(res=>{
        this.orders = res;
        console.log(this.orders);
      })
  }

  deleteOrder(order){
    this.http.get("/Projekat/deleteOrder?id="+order.id)
      .subscribe(res=>{
        res;
      });
    let index = this.orders.indexOf(order);
    this.orders.splice(index,1);
    Swal.fire("Delete is success","","success");
  }

}
