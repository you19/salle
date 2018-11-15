import { Component, OnInit, Input } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Client } from './model.client';
import { ClientService } from './client.service';

import { ActivatedRoute, ActivatedRouteSnapshot } from '@angular/router';
import { MatDialog } from '../../../node_modules/@angular/material';
import { Globals } from '../globals';
@Component({
  selector: 'app-client',
  templateUrl: './client.component.html',
  styleUrls: ['./client.component.css']
})
export class ClientComponent implements OnInit {
client:Client=new Client();
idcon:number;
@Input()
public parentData;
  constructor(public http:HttpClient,public clientservice:ClientService,public activateRouter:ActivatedRoute,public dialog: MatDialog){
    this.idcon=activateRouter.snapshot.params['id'];
  }

  ngOnInit() {
   
    
  }

  saveClient(code:number){
    
     this.http.post("http://localhost:8080/Candidature_tournoi",this.client).subscribe(data=>{
    
      console.log(data)},err=>{console.log(err);})
    this.dialog.closeAll();
  }}