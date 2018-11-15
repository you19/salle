import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Client } from './model.client';

@Injectable()

export class ClientService {
    constructor(private http: HttpClient) { }
 

 
   saveClient(client:Client){
      return this.http.post("http://localhost:8080/client",client);
    }
  
}