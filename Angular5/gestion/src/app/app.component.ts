import { Component,OnInit } from '@angular/core';
import { AppService } from './app.service'; 
import { Route, Router } from '@angular/router';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
 
  constructor(private appservice:AppService, private router:Router){}
  ngOnInit(){
if(!this.appservice.authendicated){
  this.router.navigateByUrl('/login');
 }else{
this.router.navigateByUrl('/fournisseur');
}

  }
 contact = {name : 'med' , prenom : 'ah'};
 showHideSideBar:boolean = false;
 oneShowSideBarChange(showHideSideBar){
this.showHideSideBar=showHideSideBar;
 }
}
