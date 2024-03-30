import { Component } from "@angular/core";
import { HeaderComponent } from "./header/header.component";
import { FooterComponent } from "./footer/footer.component";
import { RouterOutlet } from "@angular/router";

import { choosegradeComponent } from "./Student/grades/ChooseGrade/ChooseGrade.component";
import { CourseselectedComponent } from "./Student/courseselected/courseselected/courseselected.component";
import { ExamPageComponent } from "./Student/showExam/std-exam/exam-page/exam-page.component";
import { MainComponent } from "./Student/courseselected/main/main.component";
import { CoursesComponent } from "./Student/courseselected/courses/courses.component";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  providers: [HeaderComponent, FooterComponent, RouterOutlet, choosegradeComponent, CourseselectedComponent, ExamPageComponent, MainComponent, CoursesComponent]
})
export class AppComponent {
  title: any;
}
