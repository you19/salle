import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Match } from './model.match';
@Injectable()




export class MatchService {
 
 
 
  constructor(private http: HttpClient) { }
 

 
  getList(){
    return this.http.get("http://localhost:8080/match");

  }
  //getLis(codematch:string){
    //return this.http.get("http://localhost:8080/chercher_tournoi/"+codematch);
  //}
 saveMatch(match:Match){
    return this.http.post("http://localhost:8080/match",match);
  }
}