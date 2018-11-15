import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Router } from '@angular/router';
import { MatDialog } from '../../../node_modules/@angular/material';
import { MessageComponent } from '../message/message.component';
import { Globals } from '../globals';

@Component({
  selector: 'app-profil',
  templateUrl: './profil.component.html',
  styleUrls: ['./profil.component.css']
})
export class ProfilComponent implements OnInit {
  
  pageTournoi:any;
  constructor(public http:HttpClient,public router:Router,public dialog: MatDialog,private globals:Globals ){}
 
  ngOnInit() {
    this.http.get("http://localhost:8080/candidature").subscribe(data=>{
      this.pageTournoi=data;},err=>{console.log(err);})
      
  }
  getList(){
 
}

envoyer(id:String){
 // var myurl = `${'/utilisateur/(contentOutlet:message)'}/${id}`;
 // this.router.navigateByUrl(myurl);
 this.router.navigate(['message',id]);
 //this.router.navigate(['/utilisateur/{(contentOutlet:message)}']);
}
onCreate(){
  this.dialog.open(MessageComponent);
}
}