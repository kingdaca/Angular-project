import { Component, OnInit } from '@angular/core';
import {HttpClient, HttpErrorResponse} from '@angular/common/http';
import {ifError} from 'assert';


@Component({
  selector: 'app-user-tabel',
  templateUrl: './user-tabel.component.html',
  styleUrls: ['./user-tabel.component.css']
})
export class UserTabelComponent implements OnInit {

  users:any[];

  constructor(private http:HttpClient) { }

  ngOnInit(): void {
    this.http.get<any>('/Projekat/allUsers').subscribe(res=>{
      this.users = res;
    })
  }

  deleteUser(user){
    this.http.get("/Projekat/deleteUser?id="+user.id)
      .subscribe(res=>{
      });
    let index = this.users.indexOf(user);
    this.users.splice(index,1);
  }

  update(user){
    let name = prompt("Change name",user.name);
    let lName = prompt("Change lastName",user.lastName);
    let role = prompt("Change name",user.role);

    this.http.put("Projekat/updateUser?id="+user.id+"&ime="+name+"&prezime="+lName+"&role="+role,1).subscribe(res=>{
      res;
    });
    this.users.splice(0,0);

  }

}
