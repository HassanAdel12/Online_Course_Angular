
import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import {   FormGroup, FormControl,ReactiveFormsModule, Validators } from '@angular/forms';
import { CourseService } from '../../../Service/course.service';
import { HttpClientModule } from '@angular/common/http';

@Component({
  selector: 'app-dash-board-grade-three',
  standalone: true,
  imports: [CommonModule,HttpClientModule,ReactiveFormsModule],
  templateUrl: './dash-board-grade-three.component.html',
  providers:[CourseService],
  styleUrl: './dash-board-grade-three.component.css'
})
export class DashBoardGradeThreeComponent {
  Grade:string="GradeThree";
  constructor(private courseService: CourseService) {this.profileForm.reset();}

  profileForm = new FormGroup({
    courseName: new FormControl(null,[Validators.minLength(3),Validators.maxLength(300),Validators.required]),
    coursePrice: new FormControl(0,[Validators.min(0),Validators.max(10000),Validators.required]),
    subject: new FormControl(0,Validators.required),
  });
  onSubmit(){
    const formData = {
      subject: this.profileForm.value.subject,
      Grade:this.Grade,
      GroupName:this.profileForm.value.courseName,
      GroupPrice:this.profileForm.value.coursePrice
    };
    this.courseService.addCourse(formData).subscribe(
      {
        next:(data)=>{
          this.profileForm.reset();
        },
        error:(err)=>{console.log(err)}
      }
    );
  }
  get nameValid()
  {
    return this.profileForm.controls["courseName"].valid;
  }
  get priceValid()
  {
    return this.profileForm.controls["coursePrice"].valid;
  }
  get subjectValid()
  {
    return this.profileForm.controls["subject"].valid;
  }
}
