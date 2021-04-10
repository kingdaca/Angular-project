import { Component, OnInit } from '@angular/core';
import {HttpClient} from '@angular/common/http';


@Component({
  selector: 'app-models-table',
  templateUrl: './models-table.component.html',
  styleUrls: ['./models-table.component.css']
})
export class ModelsTableComponent implements OnInit {

  models:any[];

  constructor(private http:HttpClient){ }

  ngOnInit(): void {
    this.http.get<any>("/Projekat/ModelsTable").subscribe(res=>{
      this.models = res
      console.log(this.models);
    })
  }

  updatePost(models){

  }

}
