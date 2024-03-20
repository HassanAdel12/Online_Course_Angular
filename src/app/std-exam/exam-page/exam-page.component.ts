import { Component, Input } from '@angular/core';
import { StdExamComponent } from '../std-exam.component';
import { StdExamEnrollComponent } from '../std-exam-enroll/std-exam-enroll.component';

@Component({
  selector: 'app-exam-page',
  standalone: true,
  imports: [
    StdExamComponent,
    StdExamEnrollComponent
  ],
  templateUrl: './exam-page.component.html',
  styleUrl: './exam-page.component.css'
})
export class ExamPageComponent {

}
