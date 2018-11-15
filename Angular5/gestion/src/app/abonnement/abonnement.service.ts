import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

import { Abonnement } from './model.abonnement';
@Injectable()

export class AbonnementService{
    constructor(private http: HttpClient) { }
 

 
   saveAbonnement(abonnement:Abonnement){
      return this.http.post("http://localhost:8080/abonnement",abonnement);
    }
  
}