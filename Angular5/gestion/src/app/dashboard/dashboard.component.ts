import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Globals } from '../globals';
import { Router } from '../../../node_modules/@angular/router';
import { DashboardService } from './dashboard.service';
@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit  {
pageDash:any;
  public role:string;
  constructor(public http:HttpClient,public globals:Globals,public router:Router,private  dashboard:DashboardService) { }

  ngOnInit() {
    this.dashboard.getAll().subscribe(data=>{
this.pageDash=data;},err=>{console.log(err);
})

  }
  private changedRole() {
    this.globals.role = this.role;
    this.router.navigate(['utilisateur/visualiser']);
  
  }

}
