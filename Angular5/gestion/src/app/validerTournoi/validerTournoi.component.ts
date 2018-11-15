import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';


@Component({
  selector: 'app-validerTournoi',
  templateUrl: './validerTournoi.component.html',
  styleUrls: ['./validerTournoi.component.css']
})
export class ValiderTournoiComponent implements OnInit {
  pageTournoi:any;
  tournoi:any;


  constructor(public http:HttpClient ){}

  ngOnInit() {

this.http.get("http://localhost:8080/Reservation_tournoi").subscribe(data=>{
  this.pageTournoi=data;},err=>{console.log(err);
})
  }

  edit(t){
    this.tournoi=t;
    let confirm=window.confirm('est vou sure d accepter la demande?');
    if(confirm==true){

return this.http.put("http://localhost:8080/Reservation_tournoi/"+t.id,null)
.subscribe(data=>{
  this.tournoi=data;
},err=>{
  console.log(err);
  })
    }
}
delete(t){

this.tournoi=t;
  let confirm=window.confirm('est vou sure de refusé la demande?');
  if(confirm==true){
  return this.http.patch("http://localhost:8080/Reservation_tournoi/"+t.id,null).subscribe(data=>{
    this.tournoi=data;},err=>{console.log(err);
    })
  }
  }
  del(code:number){
    this.http.delete("http://localhost:8080/Reservation_tournoi/"+code).subscribe(data=>{
      this.tournoi=data;},err=>{console.log(err);
  }
    )
  this.ngOnInit();
  }}