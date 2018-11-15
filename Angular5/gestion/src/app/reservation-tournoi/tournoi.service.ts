import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Tournoi } from './model.tournoi';


 
@Injectable()
export class TournoiService {
 
 
 
  constructor(private http: HttpClient) { }
 

 
  getList(){
    return this.http.get("http://localhost:8080/Reservation_tournoi");

  }
  getLis(codetournoi:string){
    return this.http.get("http://localhost:8080/chercher_tournoi/"+codetournoi);
  }
 saveTournoi(tournoi:Tournoi){
    return this.http.post("http://localhost:8080/Reservation_tournoi",tournoi);
  }
}