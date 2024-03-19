import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class RegustrationService {

  constructor(private http: HttpClient) { }
  private DB_url="http://localhost:3000/users"; 
  ADDNewusers(userdata: any){ 
    return this.http.post(this.DB_url, userdata);
  }
}
