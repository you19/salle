import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from '../../../node_modules/rxjs';



@Injectable()
export class DashboardService{

  constructor(private http: HttpClient){

  }

  getAll(): Observable<any>{
    return this.http.get("http://localhost:8080/evenement");
  }
}