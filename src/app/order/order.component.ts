import {Component, Input, OnInit, Output} from '@angular/core';
import {CookieService} from 'ngx-cookie-service';
import {HttpClient} from '@angular/common/http';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-order',
  templateUrl: './order.component.html',
  styleUrls: ['./order.component.css']
})
export class OrderComponent implements OnInit {


  @Input() orders: any[];

  constructor(private cookie: CookieService, private http: HttpClient) {
  }

  ngOnInit(): void {

  }

  totalPrice() {
    var totalPrice = 0;
    for (var i = 0; i < this.orders.length; i++) {
      totalPrice += parseInt(this.orders[i].price);
    }
    return totalPrice;
  }

  buy() {
    let idUser = this.cookie.get('id');
    for (var i = 0; i < this.orders.length; i++) {
      let idArticle = this.orders[i].id;
      this.http.get('/Projekat/buy?idUser=' + idUser + '&idArticle=' + idArticle).subscribe(res => {
        console.log(idArticle);
        console.log(res);
      });
        Swal.fire("You have successfully completed your purchase","","success");
    }
      this.orders.splice(0,this.orders.length);
  }

  reset(){
    this.orders.splice(0,this.orders.length);
  }

}


