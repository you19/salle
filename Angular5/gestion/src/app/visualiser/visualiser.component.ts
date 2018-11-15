import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { NgbCarouselConfig } from '@ng-bootstrap/ng-bootstrap';
import { Globals } from '../globals';
import { Router, ActivatedRoute } from '../../../node_modules/@angular/router';


@Component({
  selector: 'app-visualiser',
  templateUrl: './visualiser.component.html',
  styleUrls: ['./visualiser.component.css'],
  providers: [NgbCarouselConfig] 
})
export class VisualiserComponent  {
  

private role:string;


  constructor(config: NgbCarouselConfig,private globals: Globals,public router:Router,private route:ActivatedRoute) {
    // customize default values of carousels used by this component tree
    config.interval = 10000;
    config.wrap = false;
    config.keyboard = false;
    config.pauseOnHover = false;
  }

  private changedRole() {
    this.globals.role = this.role;
    this.router.navigate(['utilisateur/dashboard']);
  
  }
}