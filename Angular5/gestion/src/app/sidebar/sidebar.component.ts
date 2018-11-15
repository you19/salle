import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '../../../node_modules/@angular/router';
import { Globals } from '../globals';

@Component({
  selector: 'app-sidebar',
  templateUrl: './sidebar.component.html',
  styleUrls: ['./sidebar.component.css']
})
export class SidebarComponent implements OnInit {

  private role: string;
  constructor(private route:ActivatedRoute
    ,public router:Router,private globals: Globals) { }

  ngOnInit() {
  }
one(){
  this.router.navigate(['visualiser'],{relativeTo:this.route});
}
one1(){
  this.router.navigate(['dashboard'],{relativeTo:this.route});
}

}
