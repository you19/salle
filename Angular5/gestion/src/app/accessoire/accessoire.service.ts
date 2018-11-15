import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Accessoire } from './model.accessoire';



@Injectable()

export class AccessoireService{
    constructor(private http: HttpClient) { }
 

 
   saveAccessoire(accessoire:Accessoire){
      return this.http.post("http://localhost:8080/accessoire",accessoire);
    }
  
}