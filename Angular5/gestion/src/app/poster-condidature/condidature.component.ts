import { Component,OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { CandidatureService } from './condidature.service';
import { Candidature } from './model.candidature';

@Component({
  selector: 'app-poster-condidature',
  templateUrl: './condidature.component.html',
  styleUrls: ['./condidature.component.css']
})
export class CandidatureComponent implements OnInit {
  pageCandidature:any;
  codeCandidature:string="";
  candidature:Candidature=new Candidature();
  constructor(public http:HttpClient,public candidatureservice:CandidatureService) { }

  ngOnInit() {
  }
  saveCandidature(){
    this.candidatureservice.saveMatch(this.candidature).subscribe(data=>{

    console.log(data)},err=>{console.log(err);})
  
}
doSearch(){

  this.http.get("http://localhost:8080/chercher_mess/"+this. codeCandidature).subscribe(data=>{
    this. pageCandidature=data;},err=>{console.log(err);
    })
}
chercher(){
this.doSearch();
}
edit(message){
  let confirm=window.confirm('est vou sure d accepter la demande?');
  if(confirm==true){
    message.verification="accepter";
return this.http.put("http://localhost:8080/message/"+message.id,message).subscribe(data=>{
message=data;},err=>{console.log(err);
})
  }
}
delete(message){
let confirm=window.confirm('est vou sure de refusé la demande?');
if(confirm==true){
message.verification="refuser";
return this.http.put("http://localhost:8080/message/"+message.id,message).subscribe(data=>{
message=data;},err=>{console.log(err);
  })
}
}

}