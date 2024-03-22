import { CommonModule, NgIf } from '@angular/common';
import { Component, NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-units',
  standalone: true,
  imports: [
    CommonModule,
    FormsModule

  ],
  templateUrl: './units.component.html',
  styleUrl: './units.component.css'
})
export class UnitsComponent {
bool=true;
angry: number = 1;
student:any[]=[
  {
    name:"ahmed",
    age:10,
    salary:100
  },
  {
    name:"ibrahem",
    age:20,
    salary:200
  }
]
}
