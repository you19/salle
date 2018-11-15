import { Component, OnInit, Input, Output,EventEmitter } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { ClientComponent } from '../client/client.component';
import { MatDialog } from '../../../node_modules/@angular/material';
import { Globals } from '../globals';


@Component({
  selector: 'app-tournoi',
  templateUrl: './tournoi.component.html',
  styleUrls: ['./tournoi.component.css']
})
export class TournoieComponent implements OnInit {
  pageTournoi:any;
  dialog: any;


  constructor(public http:HttpClient,public dialo:MatDialog,private globals:Globals) { 
 
   }

  ngOnInit() {
    
    this.http.get("http://localhost:8080/chercher_tournoi").subscribe(data=>{
      this.pageTournoi=data;},err=>{console.log(err);})
  }
  onCreate(){
    
   
    this.dialo.open(ClientComponent);
    
  }

}