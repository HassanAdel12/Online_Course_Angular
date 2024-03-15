import { Component } from '@angular/core';
import { RouterModule, RouterOutlet } from '@angular/router';
import { AllCoursesComponent } from '../DashBoard/all-courses/all-courses.component';

@Component({
  selector: 'app-teacher-dash-board',
  standalone: true,
  imports: [RouterModule,AllCoursesComponent],
  templateUrl: './teacher-dash-board.component.html',
  styleUrl: './teacher-dash-board.component.css'
})
export class TeacherDashBoardComponent {

}
