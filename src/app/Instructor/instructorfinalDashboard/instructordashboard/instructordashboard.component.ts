import { Component } from '@angular/core';
import { Router, RouterLink, RouterModule } from '@angular/router';

@Component({
  selector: 'app-instructordashboard',
  standalone: true,
  imports: [RouterModule,RouterLink],
  templateUrl: './instructordashboard.component.html',
  styleUrl: './instructordashboard.component.css'
})
export class InstructordashboardComponent {
  
  constructor(private router: Router) {
    
  }
  


}