import { Component, Input } from '@angular/core';
import { ActivatedRoute, RouterLink } from '@angular/router';
import { CourseService } from '../../Service/course.service';
import { HttpClientModule } from '@angular/common/http';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-main',
  standalone: true,
  imports: [RouterLink,HttpClientModule,CommonModule,FormsModule],
  providers:[CourseService],
  templateUrl: './main.component.html',
  styleUrl: './main.component.css'
})
export class MainComponent {
  id=0;
course:any


constructor(myActivat:ActivatedRoute, private myservic:CourseService){
this.id=myActivat.snapshot.params["id"];
}
  ngOnInit():void
  {

  
  this.myservic.getcoursebyid(this.id).subscribe(
    {
      next:(data:any)=>this.course=data,
     
      error:(err)=>console.log(err)
    }
  )
  }
  
  

}
