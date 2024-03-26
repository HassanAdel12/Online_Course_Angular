import { HttpClientModule } from '@angular/common/http';
import { Component } from '@angular/core';
import { ActivatedRoute, RouterLink } from '@angular/router';
import { CourseService } from '../../Service/course.service';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-std-exam-enroll',
  standalone: true,
  imports: [
    RouterLink,CommonModule,
    HttpClientModule
  ],
  providers:[
 CourseService
  ],
  templateUrl: './std-exam-enroll.component.html',
  styleUrl: './std-exam-enroll.component.css'
})
export class StdExamEnrollComponent {
  exam:any
<<<<<<< HEAD
item: any;
constructor(private myservice:CourseService){}
=======
  oneExam:any
  ID=0
constructor(private myservice:CourseService){

}
>>>>>>> 09d31080cfcf8eb5686948b28b56179c8e767356
ngOnInit():void
{
  this.myservice.getExams().subscribe({
    next:(data)=>this.exam=data
  })


}
}
