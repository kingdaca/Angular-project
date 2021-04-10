import {Component, OnInit} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {ActivatedRoute} from '@angular/router';
import {CookieService} from 'ngx-cookie-service';
import {AuthService} from '../auth.service';

@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.css']
})
export class ProductComponent implements OnInit {


  article: any;
  id: string;
  user: any;


  constructor(private http: HttpClient, private route: ActivatedRoute, private cookie: CookieService, private auth: AuthService) {
  }

  ngOnInit(): void {
    let id;
    this.route.paramMap
      .subscribe(params => {
        this.id = params.get('id');
      });
    this.http.post<any>('/Projekat/getProduct?id=' + this.id, 1)
      .subscribe(res => {
        this.article = res;
        id = res.user;
        this.http.post<any>("/Projekat/getUserByID?id="+id,1)
          .subscribe(res=>{
            this.user = res;
          })
      });


  }


}
