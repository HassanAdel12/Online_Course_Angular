import { Component } from '@angular/core';

@Component({
  selector: 'app-all-courses',
  standalone: true,
  imports: [],
  templateUrl: './all-courses.component.html',
  styleUrl: './all-courses.component.css'
})
export class AllCoursesComponent {
  courseName:string="";
  courseGrad:string="";
  courseSupject:string="";
  courseStudents:number=0;

}
