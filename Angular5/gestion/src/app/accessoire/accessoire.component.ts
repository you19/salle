import { Component,OnInit  } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { AccessoireService } from './accessoire.service';
import { Accessoire } from './model.accessoire';

@Component({
  selector: 'app-accessoire',
  templateUrl: './accessoire.component.html',
  styleUrls: ['./accessoire.component.css']
})
export class AccessoireComponent implements OnInit {
  accessoire:Accessoire=new Accessoire();
  constructor(public http:HttpClient,public accessoireservice:AccessoireService ){}

  ngOnInit() {}

  saveAccessoire(){
  this.accessoireservice.saveAccessoire(this.accessoire).subscribe(data=>{
  
    console.log(data)},err=>{console.log(err);})
  
}

}
