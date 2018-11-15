import { Component,OnInit  } from '@angular/core';
import { HttpClient } from '@angular/common/http';

import { TournoiService } from './tournoi.service';
import { Tournoi } from './model.tournoi';
import {FormControl} from '@angular/forms';
import {Observable} from 'rxjs';
import {map, startWith} from 'rxjs/operators';


@Component({
  selector: 'app-reservation-tournoi',
  templateUrl: './tournoi.component.html',
  styleUrls: ['./tournoi.component.css']
})
export class TournoiComponent implements OnInit {
  pageTournoi:any;
  Tournois:any;
  codeTournoi:string="";
  tournoi:Tournoi=new Tournoi();
  mode:number=1;
  myControl = new FormControl();
  options: string[] = ['One', 'Two', 'Three'];
  filteredOptions: Observable<string[]>;
  constructor(public http:HttpClient,public tournoiservice:TournoiService ){}


  ngOnInit() {
    
    
this.http.get("http://localhost:8080/chercher_code").subscribe(data=>{
this.Tournois=data;this.filteredOptions = this.myControl.valueChanges.pipe(
  startWith(''),
  map(value => this._filter(value))
);
},
err=>{console.log(err);
})
  }
  doSearch(){

    this.http.get("http://localhost:8080/chercher_tournoi/"+this.codeTournoi).subscribe(data=>{
      this.pageTournoi=data;},err=>{console.log(err);
      })
  }
  chercher(){
  this.doSearch();
  }
  saveTournoi(){
    this.tournoiservice.saveTournoi(this.tournoi).subscribe(data=>{

      this.mode=1;},err=>{console.log(err);})
  }
  public _filter(value: string): string[] {
    const filterValue = value.toLowerCase();

    return this.Tournois.filter(option => option.toLowerCase().indexOf(filterValue) === 0);
  }
  
}