import { Component, Directive } from '@angular/core';
import { RouterModule, RouterOutlet } from '@angular/router';
import { HeaderComponent } from './header/header.component';
import { TeacherDashBoardComponent } from './component/teacher-dash-board/teacher-dash-board.component';
import { Home2Component } from './component/home2/home2.component';
import { FooterComponent } from './component/footer/footer.component';
import { DashBoardGradeOneComponent } from './component/DashBoard/dash-board-grade-one/dash-board-grade-one.component';
import { DashBoardGradeTwoComponent } from './component/DashBoard/dash-board-grade-two/dash-board-grade-two.component';
import { DashBoardGradeThreeComponent } from './component/DashBoard/dash-board-grade-three/dash-board-grade-three.component';
import { MainComponent } from './Students/main/main.component';
import { UnitsComponent } from './Students/units/units.component';
import { MainUComponent } from './Students/main-u/main-u.component';
import { CustomDirective } from './Directives/custom.directive';
import { ProfheaderComponent } from './Profile/profheader/profheader.component';
import { ProfmainComponent } from './Profile/profmain/profmain.component';
import { ProfsidebarComponent } from './Profile/profsidebar/profsidebar.component';
import { CourseselectedComponent } from './component/courseselected/courseselected.component';
import { CoursesComponent } from './courses/courses.component';
import { AllCoursesComponent } from './component/DashBoard/all-courses/all-courses.component';
import { CoursedetailsComponent } from './component/StudentComponent/coursedetails/coursedetails.component';
import { GradComponent } from './grad/grad.component';

@Component({
  selector: 'app-root',
  standalone: true, 
  imports: [RouterOutlet,
    HeaderComponent,
    TeacherDashBoardComponent,
    Home2Component,
    FooterComponent,
    DashBoardGradeOneComponent,
    DashBoardGradeTwoComponent,
    DashBoardGradeThreeComponent,
    RouterModule,
MainUComponent,
  MainComponent,
  CustomDirective,
  UnitsComponent,
  ProfheaderComponent,
  ProfmainComponent,
  ProfsidebarComponent,
  CourseselectedComponent,
  CoursesComponent,
  AllCoursesComponent,
  CoursedetailsComponent,
  GradComponent
  
],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'Online_Course_Angular';
}
