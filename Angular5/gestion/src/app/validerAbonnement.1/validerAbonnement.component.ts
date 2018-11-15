import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Abonnement } from '../abonnement/model.abonnement';

@Component({
  selector: 'app-validerAbonnement',
  templateUrl: './validerAbonnement.component.html',
  styleUrls: ['./validerAbonnement.component.css']
})
export class ValiderAbonnementComponent implements OnInit {

  pageAbonnement:any;



  constructor(public http:HttpClient ){}

  ngOnInit() {

this.http.get("http://localhost:8080/abonnement").subscribe(data=>{
this.pageAbonnement=data;},err=>{console.log(err);
})
  }

  edit(abonnement){
    let confirm=window.confirm('est vou sure d accepter la demande?');
    if(confirm==true){
    abonnement.verification="accepter";
    return this.http.put("http://localhost:8080/abonnement/"+abonnement.id,abonnement).subscribe(data=>{
      abonnement=data;},err=>{console.log(err);
      })
    }
    }
    delete(abonnement){
      let confirm=window.confirm('est vou sure de refusé la demande?');
      if(confirm==true){
      abonnement.verification="refuser";
      return this.http.put("http://localhost:8080/abonnement/"+abonnement.id,abonnement).subscribe(data=>{
        abonnement=data;},err=>{console.log(err);
        })
      }
}}