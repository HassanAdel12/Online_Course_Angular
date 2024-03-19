import { Component } from '@angular/core';
import { MainComponent } from '../../Students/main/main.component';
import { MainUComponent } from '../../Students/main-u/main-u.component';
import { HttpClientModule } from '@angular/common/http';
import { CourseService } from '../../Service/course.service';

@Component({
  selector: 'app-courseselected',
  standalone: true,
  imports: [
 MainComponent,
 MainUComponent,
 HttpClientModule,
    
  ],
  providers:[
CourseService
  ],
  templateUrl: './courseselected.component.html',
  styleUrl: './courseselected.component.css'
})
export class CourseselectedComponent {
  course_name:any
constructor(private myservec:CourseService){}
ngOnInit():void
{
  this.myservec.getcourses().subscribe(
    {
      next:(data)=>this.course_name=data,
      error:(err)=>console.log(err)
    }
  )
}
}
