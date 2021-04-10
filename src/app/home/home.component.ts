import {Component, OnInit} from '@angular/core';
import * as mdb from 'mdb-ui-kit'; // lib
import {Input} from 'mdb-ui-kit';
import {Router} from '@angular/router'; // module

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {


  constructor(private router:Router) {
  }

  ngOnInit(): void {

  }

  onClick() {
    this.router.navigate(["models"]);
  }

}
