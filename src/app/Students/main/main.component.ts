import { Component, Input } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { CourseService } from '../../Service/course.service';

@Component({
  selector: 'app-main',
  standalone: true,
  imports: [],
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
    next:(data)=>this.course=data
  }
)
}

}
