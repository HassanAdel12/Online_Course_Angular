import { HttpClientModule } from '@angular/common/http';
import { Component } from '@angular/core';
import { RouterLink } from '@angular/router';
import { CourseService } from '../Service/course.service';

@Component({
  selector: 'app-grad',
  standalone: true,
  imports: [
    RouterLink,
    HttpClientModule
  ],
  providers:[
    CourseService
      ],
  templateUrl: './grad.component.html',
  styleUrl: './grad.component.css'
})
export class GradComponent {
  coursename:any
constructor(private myservec:CourseService){}
ngOnInit():void
{
  this.myservec.getcourses().subscribe(
    {
      next:(data)=>this.coursename=data,
      error:(err)=>console.log(err)
    }
  )
}
}
