import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { FormsModule, NgForm } from '@angular/forms';

@Component({
  selector: 'app-dash-board-grade-one',
  standalone: true,
  imports: [FormsModule,CommonModule],
  templateUrl: './dash-board-grade-one.component.html',
  styleUrl: './dash-board-grade-one.component.css'
})
export class DashBoardGradeOneComponent {
  selectedSubject: string | null = null;
  subjects = ['Math', 'Arabic', 'Science', 'English', 'Social Studies'];

  submitForm(form: NgForm) {
    // Handle form submission logic here
  }
}
