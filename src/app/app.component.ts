import { Component } from '@angular/core';
import { RouterModule, RouterOutlet } from '@angular/router';
import { HeaderComponent } from './header/header.component';
import { TeacherDashBoardComponent } from './component/teacher-dash-board/teacher-dash-board.component';
import { Home2Component } from './component/home2/home2.component';
import { FooterComponent } from './component/footer/footer.component';
import { DashBoardGradeOneComponent } from './component/DashBoard/dash-board-grade-one/dash-board-grade-one.component';
import { DashBoardGradeTwoComponent } from './component/DashBoard/dash-board-grade-two/dash-board-grade-two.component';
import { DashBoardGradeThreeComponent } from './component/DashBoard/dash-board-grade-three/dash-board-grade-three.component';
import { LoginComponent } from './component/login/login.component';
import { RegestarComponent } from './component/regestar/regestar.component';

@Component({
  selector: 'app-root',
  standalone: true, 
  imports: [RouterOutlet,HeaderComponent,TeacherDashBoardComponent,
    Home2Component,FooterComponent,DashBoardGradeOneComponent,
    DashBoardGradeTwoComponent,DashBoardGradeThreeComponent,RouterModule,LoginComponent,RegestarComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'Online_Course_Angular';
}
