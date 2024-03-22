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
      description: 'مستر محمد عبدالحميد',
      button1: { label: 'سجل الان', clicked: false }, // Add clicked property
      button2: { label: ' التفاصيل', clicked: false } // Add clicked property
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
