import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class CourseService {
  private apiUrl = 'http://localhost:3000/Groups'; 

  constructor(private http: HttpClient) { }

  addCourse(courseData: any) {
    return this.http.post(this.apiUrl, courseData);
  }
  getAllGroups(){
    return this.http.get(this.apiUrl);
  }
}
