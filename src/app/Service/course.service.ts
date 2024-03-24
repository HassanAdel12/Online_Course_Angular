import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class CourseService {
  private apiUrl = 'http://localhost:3000/Groups';
  
  private coursedb_url="http://localhost:3000/course";

  private examdb="http://localhost:3000/examdb";

  private std="http://localhost:3000/Student";

  private stdanswer ="http://localhost:3000/StudentAnswers";
  

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
  getcoursebyid(id:any)
  {
    return this.http.get(this.coursedb_url+"/"+id);
  }


  getExams()
  {
  return this.http.get(this.examdb);
  }

  getExambyid(id:any)
  {
 return this.http.get(this.examdb+"/"+id);
  }
  
  getstudent_quiz()
  {
    return this.http.get(this.std);
  }
  addstudentanswer(answers:any)
  {
 return this.http.post(this.stdanswer,answers)
  }
}
