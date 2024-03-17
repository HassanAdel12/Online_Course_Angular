import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import {   FormGroup, FormControl,ReactiveFormsModule, Validators } from '@angular/forms';
import { CourseService } from '../../../Service/course.service';
import { HttpClientModule } from '@angular/common/http';

@Component({
  selector: 'app-dash-board-grade-two',
  standalone: true,
  imports: [CommonModule,HttpClientModule,ReactiveFormsModule],
  templateUrl: '././dash-board-grade-two.component.html',
  providers:[CourseService],
  styleUrl: './dash-board-grade-two.component.css'
})
export class DashBoardGradeTwoComponent {
  Grade:string="GradeTow";
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
          window.alert("New Group: "+this.profileForm.value.courseName+" Added Sucsessfly");
          window.location.reload();
        },
        error:(err)=>{window.alert("sorry there is an error when add: "+this.profileForm.value.courseName+" group");}
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
