import { Injectable } from '@angular/core';
import{ HttpClient, HttpHeaders} from '@angular/common/http';
import { CookieService } from 'ngx-cookie-service';

@Injectable()
export class AppService{

    authendicated: boolean = false;
    constructor(private http:HttpClient, private cookieService: CookieService){}
    authenticate(credentials, callback) {
        if(credentials){
          const token = btoa(credentials.username + ':' + credentials.password);
          this.cookieService.set('token',token);
         
    
          this.http.get("http://localhost:8080/api/user").subscribe(response => {
              if (response && response['name']) {
                console.log(response);
                  this.authendicated = true;
                
              } else {
                  this.authendicated = false;
              }
              return callback && callback();
          });
        }
        else {
          this.authendicated = false;
        }
      }
}