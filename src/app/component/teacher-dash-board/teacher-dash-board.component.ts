import { Component, OnInit } from '@angular/core';
import { RouterModule, RouterOutlet } from '@angular/router';
import { AllCoursesComponent } from '../DashBoard/all-courses/all-courses.component';
import { CourseService } from '../../Service/course.service';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-teacher-dash-board',
  standalone: true,
  imports: [RouterModule,AllCoursesComponent,CommonModule],
  providers:[CourseService],
  templateUrl: './teacher-dash-board.component.html',
  styleUrl: './teacher-dash-board.component.css'
})
export class TeacherDashBoardComponent implements OnInit {
  groups:any;
  constructor(private courseservice:CourseService){};
  ngOnInit(): void {
    this.courseservice.getAllGroups().subscribe({
      next:(data)=>{this.groups=data},
        error:(err)=>{}
    });
  }
  showDashBoard:boolean=false;
  showAddGroup(){
    this.showDashBoard=true;
  }
  hideAddGroup(){
    this.showDashBoard=false;
  }
}
