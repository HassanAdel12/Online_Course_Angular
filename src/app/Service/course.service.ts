import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class CourseService {
  private apiUrl = 'http://localhost:3000/Groups';
  
  private coursedb_url="http://localhost:3000/course";

  constructor(private http: HttpClient) { }

  addCourse(courseData: any) {
    return this.http.post(this.apiUrl, courseData);
  }
  getAllGroups(){
    return this.http.get(this.apiUrl);
  }
  getcourses()
  {
    return this.http.get(this.coursedb_url);
  }
  
}
