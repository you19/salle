import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { NgbCarouselConfig } from '@ng-bootstrap/ng-bootstrap';
import { MatDialog } from '../../../node_modules/@angular/material';
import { ClientComponent } from '../client/client.component';

@Component({
  selector: 'app-acceuil',
  templateUrl: './acceuil.component.html',
  styleUrls: ['./acceuil.component.css'],
  providers: [NgbCarouselConfig] 
})
export class AcceuilComponent implements OnInit  {
  CountTournoi:any;
  CountMatch:any;
  CountClient:any;
  CountAbonnement:any;
  CountAccessoire:any;
  CountBlack:any;
  constructor(config: NgbCarouselConfig,public http:HttpClient,public dialo:MatDialog) {
  
    // customize default values of carousels used by this component tree
    config.interval = 10000;
    config.wrap = false;
    config.keyboard = false;
    config.pauseOnHover = false;
  }
 ngOnInit() {
  this.http.get("http://localhost:8080/count_match").subscribe(data=>{
    this.CountMatch=data;},err=>{console.log(err);})
    this.http.get("http://localhost:8080/count_tournoi").subscribe(data=>{
      this.CountTournoi=data;},err=>{console.log(err);})
      this.http.get("http://localhost:8080/count_client").subscribe(data=>{
        this.CountClient=data;},err=>{console.log(err);})
        this.http.get("http://localhost:8080/count_abonnement").subscribe(data=>{
        this.CountAbonnement=data;},err=>{console.log(err);})
        this.http.get("http://localhost:8080/count_accessoire").subscribe(data=>{
        this.CountAccessoire=data;},err=>{console.log(err);})
        this.http.get("http://localhost:8080/count_black").subscribe(data=>{
          this.CountBlack=data;},err=>{console.log(err);})
  

  }
  onCreate1(){
     
    this.dialo.open(AcceuilTournoiComponent);
    
  }
  onCreate2(){
     
    this.dialo.open(AcceuilMatchComponent);
    
  }
  onCreate3(){
     
    this.dialo.open(AcceuilAbonnementComponent);
    
  }

}
@Component({
  selector: 'app-acceuil-tournoi',
  templateUrl: './acceuil-tournoi.component.html',
  
  providers: [NgbCarouselConfig] 
})
export class AcceuilTournoiComponent implements OnInit  {
  pageTournoi:any;
  constructor(config: NgbCarouselConfig,public http:HttpClient,public dialo:MatDialog) {
  
  }
  ngOnInit()
  {
    this.http.get("http://localhost:8080/Reservation_tournoi").subscribe(data=>{
      this.pageTournoi=data;},err=>{console.log(err);})
  }

  }
  @Component({
    selector: 'app-acceuil-match',
    templateUrl: './acceuil-match.component.html',
    
    providers: [NgbCarouselConfig] 
  })
  export class AcceuilMatchComponent implements OnInit  {
    pageTournoi:any;
    constructor(config: NgbCarouselConfig,public http:HttpClient,public dialo:MatDialog) {
    
    }
    ngOnInit()
    {
      this.http.get("http://localhost:8080/match").subscribe(data=>{
        this.pageTournoi=data;},err=>{console.log(err);})
    }
  
    }
    @Component({
      selector: 'app-acceuil-abonnement',
      templateUrl: './acceuil-abonnement.component.html',
      
      providers: [NgbCarouselConfig] 
    })
    export class AcceuilAbonnementComponent implements OnInit  {
      pageAbonnement:any;
      constructor(config: NgbCarouselConfig,public http:HttpClient,public dialo:MatDialog) {
      
      }
      ngOnInit()
      {
        this.http.get("http://localhost:8080/abonnement").subscribe(data=>{
          this.pageAbonnement=data;},err=>{console.log(err);})
      }
    
      }
  