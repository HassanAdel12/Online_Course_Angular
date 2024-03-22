import { HttpClientModule } from '@angular/common/http';
import { Component } from '@angular/core';
import { ActivatedRoute, Route, Router, RouterModule } from '@angular/router';
import { CourseService } from '../Service/course.service';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-std-exam',
  standalone: true,
  imports: [
HttpClientModule,
CommonModule,
FormsModule

  ],
  providers:[
    CourseService
  ],
  templateUrl: './std-exam.component.html',
  styleUrl: './std-exam.component.css'
})
export class StdExamComponent {

  ID=0;
  examid:any
  student:any[]=[];
  std:any
  username="";


constructor(active:ActivatedRoute, private myservice:CourseService,private router:Router)
{
this.ID=active.snapshot.params["id"]
}
ngOnInit():void
{

  this.myservice.getstudent_quiz().subscribe({
    next:(data:any)=>this.student=data,
    error:(err)=>console.log(err)
  })

  this.myservice.getExambyid(this.ID).subscribe({
    next:(data)=>this.examid=data,
    error:(err)=>console.log(err)
  })
}
Submit() {
 
  this.router.navigate(['/send']);
  this.std = this.student.find(s=>s.username===this.username);
  if(this.std)
  {
    return this.std.id
  }
  else
  {
    return this.std=undefined
  }


}
}
