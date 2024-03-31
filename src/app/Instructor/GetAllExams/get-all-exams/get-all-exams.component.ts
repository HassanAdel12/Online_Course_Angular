import { QuizService } from './../../../../Service/quiz.service';
import { CommonModule } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-get-all-exams',
  standalone: true,
  imports: [FormsModule, CommonModule, HttpClientModule],
  providers: [QuizService],
  templateUrl: './get-all-exams.component.html',
  styleUrl: './get-all-exams.component.css',
})
export class GetAllExamsComponent implements OnInit {
  id = 1;
  exams: any;

  constructor(private QuizServices: QuizService, private router: Router) {}

  ngOnInit(): void {
    this.loadexams();
  }

  loadexams() {
    this.QuizServices.getQuizByGroupID(this.id).subscribe({
      next: (data) => {
        this.exams = data;
        console.log(data);
      },
      error: (err) => {
        this.router.navigate([
          '/Error',
          { errormessage: err.message as string },
        ]);
      },
    });
  }

  updateexam(id: number, updateexam: any): void {
    this.QuizServices.updateQuiz(id, updateexam).subscribe({
      next: () => {
        console.log('Group updated successfully');

        this.loadexams();
      },
      error: (err) => {
        console.error('Error updating group:', err);
      },
    });
  }

  deleteGroup(id: number): void {
    this.QuizServices.deleteQuiz(id).subscribe({
      next: () => {
        console.log('Group deleted successfully');

        this.loadexams();
      },
      error: (err) => {
        console.error('Error deleting group:', err);
      },
    });
  }
  
}
