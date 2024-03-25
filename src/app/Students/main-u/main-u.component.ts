import { Component, Input, signal } from '@angular/core';
import { ActivatedRoute, RouterLink } from '@angular/router';
import { CourseService } from '../../Service/course.service';
import { HttpClientModule } from '@angular/common/http';

@Component({
  selector: 'app-main-u',
  standalone: true,
  imports: [
    RouterLink,HttpClientModule
  ],
  providers:[CourseService],
  templateUrl: './main-u.component.html',
  styleUrl: './main-u.component.css'
})
export class MainUComponent {
@Input() courses:any;


}



