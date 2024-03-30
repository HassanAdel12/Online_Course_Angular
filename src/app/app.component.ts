import { Component } from "@angular/core";
import { HeaderComponent } from "./header/header.component";
import { FooterComponent } from "./footer/footer.component";
import { RouterOutlet } from "@angular/router";
<<<<<<< Updated upstream
import { choosegradeComponent } from "./Student/grades/ChooseGrade/ChooseGrade.component";
import { ChooseinstructorComponent } from "./Student/grades/ChooseGroup/ChooseGroup.component";
import { CourseselectedComponent } from "./Student/courseselected/courseselected/courseselected.component";
import { ExamPageComponent } from "./Student/showExam/std-exam/exam-page/exam-page.component";
=======
import { MainComponent } from "./Student/courseselected/main/main.component";
import { CoursesComponent } from "./Student/courseselected/courses/courses.component";

>>>>>>> Stashed changes





@Component({
<<<<<<< Updated upstream
  selector: 'app-root',
  standalone: true,
  imports: [
    HeaderComponent,FooterComponent,RouterOutlet,choosegradeComponent,CourseselectedComponent,ExamPageComponent
  ],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
=======
    selector: 'app-root',
    standalone: true,
    templateUrl: './app.component.html',
    styleUrl: './app.component.css',
    imports: [
        HeaderComponent, FooterComponent, RouterOutlet,
        MainComponent,CoursesComponent
    ]
>>>>>>> Stashed changes
})
export class AppComponent {
  title: any;

}
