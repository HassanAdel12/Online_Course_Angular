import { Component } from "@angular/core";
import { HeaderComponent } from "./header/header.component";
import { FooterComponent } from "./footer/footer.component";
import { RouterOutlet } from "@angular/router";
import { choosegradeComponent } from "./Student/grades/ChooseGrade/ChooseGrade.component";
import { ChooseinstructorComponent } from "./Student/grades/ChooseGroup/ChooseGroup.component";
import { CourseselectedComponent } from "./Student/courseselected/courseselected/courseselected.component";
import { ExamPageComponent } from "./Student/showExam/std-exam/exam-page/exam-page.component";





@Component({
  selector: 'app-root',
  standalone: true,
  imports: [
    HeaderComponent,FooterComponent,RouterOutlet,choosegradeComponent,CourseselectedComponent,ExamPageComponent
  ],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title: any;

}
