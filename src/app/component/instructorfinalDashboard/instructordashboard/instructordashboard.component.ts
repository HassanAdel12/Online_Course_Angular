import { Component } from '@angular/core';
import { Router, RouterModule } from '@angular/router';

@Component({
  selector: 'app-instructordashboard',
  standalone: true,
  imports: [RouterModule],
  templateUrl: './instructordashboard.component.html',
  styleUrl: './instructordashboard.component.css'
})
export class InstructordashboardComponent {
  constructor(private router: Router) {
    
  }
  createexam(){
   
    window.location.href = '/ExamComponent';
  }


}