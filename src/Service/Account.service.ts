import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class AccountService {

  constructor(private http: HttpClient) { }

  private DB_url="http://localhost:48190/api/Account/"; 
  
  AddNewUser(userdata: any){ 

    return this.http.post( this.DB_url + "register", userdata );

  }

  LoginUser(userdata: any){ 

    return this.http.post( this.DB_url + "login", userdata );
    
  }
  
}
