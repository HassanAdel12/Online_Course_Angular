import { Component } from '@angular/core';
import { RouterLink, RouterOutlet } from '@angular/router';

@Component({
  selector: 'app-instructor-date-header',
  standalone: true,
  imports: [RouterLink,RouterOutlet],
  templateUrl: './instructor-date-header.component.html',
  styleUrl: './instructor-date-header.component.css'
})
export class InstructorDateHeaderComponent {

}
