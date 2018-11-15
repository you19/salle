import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Evenement } from './model.evenement';
import { EvenementService } from './evenement.service';

@Component({
  selector: 'app-evenement',
  templateUrl: './evenement.component.html',
  styleUrls: ['./evenement.component.css']
})
export class EvenementComponent implements OnInit {

  pageAbonnement:any;
 evenement:Evenement=new Evenement();


  constructor(public http:HttpClient,public evenementservice: EvenementService){}

  ngOnInit() {


  }
  saveEvenement(){
    let confirm=window.confirm('est vou sure d ajouter cette evenement?');
    if(confirm==true){
    this.evenementservice.saveEvenement(this.evenement).subscribe(data=>{
    
      console.log(data)},err=>{console.log(err);})
    
  }
  }
  

}