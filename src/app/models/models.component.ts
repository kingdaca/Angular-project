import {Component, OnInit} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {log} from 'util';
import {AuthService} from '../auth.service';
import {CookieService} from 'ngx-cookie-service';


@Component({
  selector: 'app-models',
  templateUrl: './models.component.html',
  styleUrls: ['./models.component.css']
})
export class ModelsComponent implements OnInit {

  user: any;
  articles: any[];
  order: any[] = [];
  search:string;

  constructor(private http: HttpClient, private auth: AuthService, private cookie :CookieService) {
  }

  ngOnInit(): void {
    this.http.get<any>('/Projekat/allArticals').subscribe(res => {
      this.articles = res;
    });
  }

  addOder(article) {
    this.order.push(article);
    console.log(this.order);
  }

}
