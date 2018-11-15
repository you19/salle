import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Black } from './model.black';
import { BlackService } from './black.service';

@Component({
  selector: 'app-black',
  templateUrl: './black.component.html',
  styleUrls: ['./black.component.css']
})
export class BlackComponent implements OnInit {

 

black:Black=new Black();

  constructor(public http:HttpClient,public blackservice:BlackService ){}

  ngOnInit() {


  }

  saveBlack(){
    let confirm=window.confirm('est vou sure de black lister se personne?');
    if(confirm==true){
    this.blackservice.saveBlack(this.black).subscribe(data=>{
    
      console.log(data)},err=>{console.log(err);})}
    
  }

}