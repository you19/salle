import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Black } from './model.black';

@Injectable()

export class BlackService{
    constructor(private http: HttpClient) { }
 

 
   saveBlack(black:Black){
      return this.http.post("http://localhost:8080/black",black);
    }
  
}