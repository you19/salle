import { Component,OnInit } from '@angular/core';
import{FormGroup, FormBuilder,Validators} from '@angular/forms'
import { AppService } from '../app.service';
import { Router } from '@angular/router';
import { Client } from './model.login';
import { HttpClient } from '../../../node_modules/@angular/common/http';
@Component({
  selector: 'app-root',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  client:Client=new Client();
 loginForm:FormGroup;
 credentials = {
   username:'',
   password:''
 };
 constructor(private fb:FormBuilder,private appService:AppService,private router:Router,public http:HttpClient){

 }
 ngOnInit(){
   this.loginForm=this.fb.group({
     username:['',Validators.required,Validators.minLength(3)],
     password:['',Validators.required,Validators.minLength(3)]
   });

 }
 login(){
   if(this.credentials.username=='user1'){
   this.appService.authenticate(this.credentials,()=>{
    this.router.navigate(['utilisateur/dashboard']);
     
   })
  }
 if (this.credentials.username=='admin') {
   
  this.appService.authenticate(this.credentials,()=>{
    this.router.navigate(['fournisseur/acceuil']);
   
  })
    
  }
 }
 saveClient(){
  this.http.post("http://localhost:8080/client",this.client).subscribe(data=>{
  
    console.log(data)},err=>{console.log(err);})
  
}
}