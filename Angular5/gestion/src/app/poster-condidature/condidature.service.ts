import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Candidature } from './model.candidature';
@Injectable()




export class CandidatureService{
    constructor(private http: HttpClient) { }
    saveMatch(candidature:Candidature){
        return this.http.post("http://localhost:8080/candidature",candidature);
      }
}