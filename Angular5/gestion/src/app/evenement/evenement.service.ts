import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

import { Evenement } from './model.evenement';
@Injectable()

export class EvenementService{
    constructor(private http: HttpClient) { }
 

 
   saveEvenement(evenement:Evenement){
      return this.http.post("http://localhost:8080/evenement",evenement);
    }
  
}