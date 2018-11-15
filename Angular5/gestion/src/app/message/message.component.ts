import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { MessageService } from './message.service';
import { Message } from './model.message';
import { ActivatedRoute, ActivatedRouteSnapshot } from '@angular/router';
import { Globals } from '../globals';
@Component({
  selector: 'app-message',
  templateUrl: './message.component.html',
  styleUrls: ['./message.component.css']
})
export class MessageComponent implements OnInit {
message:Message=new Message();
pageCandidature:any;
nom:string="";

idcon:string;

  constructor(public http:HttpClient,public messageservice:MessageService,public activateRouter:ActivatedRoute,private globals: Globals ){
    this.idcon=activateRouter.snapshot.params['id'];
    
      // console.log(ActivatedRouteSnapshot['codeCandidature']);
  }

  ngOnInit() 
  {}

  saveMessage(){
    let confirm=window.confirm('est vou sure d accepter la demande?');
  if(confirm==true){
    this.message.codeCandidature=this.idcon;
  this.messageservice.saveMessage(this.message).subscribe(data=>{
  
    console.log(data)},err=>{console.log(err);})}
  
}
doSearch(){

  this.http.get("http://localhost:8080/chercher_message/"+this. nom).subscribe(data=>{
    this. pageCandidature=data;},err=>{console.log(err);
    })
}
chercher(){
this.doSearch();
}
s
}
