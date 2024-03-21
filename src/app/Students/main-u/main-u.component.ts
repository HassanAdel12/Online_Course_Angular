import { Component, Input, signal } from '@angular/core';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-main-u',
  standalone: true,
  imports: [
    RouterLink
  ],
  templateUrl: './main-u.component.html',
  styleUrl: './main-u.component.css'
})
export class MainUComponent {
@Input() courses:any;



}
