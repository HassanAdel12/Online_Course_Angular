import { Component, Input, signal } from '@angular/core';

@Component({
  selector: 'app-main-u',
  standalone: true,
  imports: [],
  templateUrl: './main-u.component.html',
  styleUrl: './main-u.component.css'
})
export class MainUComponent {
@Input() courses:any;



}
