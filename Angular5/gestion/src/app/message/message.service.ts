import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Message } from './model.message';
@Injectable()

export class MessageService{
    constructor(private http: HttpClient) { }
 

 
   saveMessage(message:Message){
      return this.http.post("http://localhost:8080/message",message);
    }
  
}