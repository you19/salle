import { Component,OnInit, ViewChild, ElementRef } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { map } from 'rxjs/operators';
import { MatchService } from './match.service';
import { Match } from './model.match';
import * as jsPDF from 'jspdf';
@Component({
  selector: 'app-reservation-match',
  templateUrl: './match.component.html',
  styleUrls: ['./match.component.css']
})
export class MatchComponent implements OnInit {
  
  match:Match=new Match();
  mode:number=1;
message:any;
  constructor(public http:HttpClient,public matchservice:MatchService ){}

  ngOnInit() {}

    saveMatch(){
     
  let confirm=window.confirm('est vou sure de reservé le match?');
  if(confirm==true){
      this.matchservice.saveMatch(this.match).subscribe(data=>{
        this.message=data;
        if(this.message==1){
          this.mode=2;}
         
      console.log(data)},err=>{console.log(err);})
    
    

      }
     
  }
  @ViewChild('content') content:ElementRef;
  downloadPDF(){
   
    let doc = new jsPDF();
    let specialElementHandlers = {
      '#editor': function(element,renderer){
        return true;
      }
    };
    
    let content = this.content.nativeElement;
    doc.fromHTML(content.innerHTML,15,15,{
      'width':190,
      'elementHandlers': specialElementHandlers
    });

    doc.save('test.pdf');


  }
}