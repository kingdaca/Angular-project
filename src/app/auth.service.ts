import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  constructor(private http:HttpClient) { }

  authLogin(username,password){
    return this.http.post<any>("/Projekat/getUser?username="+username+"&password="+password,1);
  }


}
