import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-instructorchoose',
  standalone: true,
  imports: [CommonModule,FormsModule],
  templateUrl: './instructorchoose.component.html',
  styleUrl: './instructorchoose.component.css'
})
export class InstructorchooseComponent {
  items: any[] = [
    {
      photo: 'assets/images/teacher1.jpeg',
      alt: 'Photo 1',
      description: ' MR/Mohamed AbdElhamid ',
      button1: { label: ' Enroll', clicked: false }, // Add clicked property
      button2: { label: ' Details', clicked: false } // Add clicked property
    },
    // Add more items as needed
  ];

  constructor() { }
  clicked: boolean = false;
  ngOnInit(): void {
  }
  toggleClicked(button: any) {
    button.clicked = !button.clicked;
}


}
