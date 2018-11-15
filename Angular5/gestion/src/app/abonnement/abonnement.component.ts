import { Component,OnInit  } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Abonnement } from './model.abonnement';
import { AbonnementService } from './abonnement.service';

@Component({
  selector: 'app-abonnement',
  templateUrl: './abonnement.component.html',
  styleUrls: ['./abonnement.component.css']
})
export class AbonnementComponent implements OnInit {
  pageAbonnement:any;
  codeAbonnement:string="";
  abonnement:Abonnement=new Abonnement();
  constructor(public http:HttpClient,public abonnementservice:AbonnementService ){}

  ngOnInit() {}

  saveAbonnement(){
  this.abonnementservice.saveAbonnement(this.abonnement).subscribe(data=>{
  
    console.log(data)},err=>{console.log(err);})
  
}
doSearch(){

  this.http.get("http://localhost:8080/chercher_abonnement/"+this.codeAbonnement).subscribe(data=>{
    this.pageAbonnement=data;},err=>{console.log(err);
    })
}
chercher(){
this.doSearch();
}
}