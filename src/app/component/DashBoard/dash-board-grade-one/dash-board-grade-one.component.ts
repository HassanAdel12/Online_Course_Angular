import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import {   FormGroup, FormControl,ReactiveFormsModule, Validators } from '@angular/forms';
import { CourseService } from '../../../Service/course.service';
import { HttpClientModule } from '@angular/common/http';

@Component({
  selector: 'app-dash-board-grade-one',
  standalone: true,
  imports: [CommonModule,HttpClientModule,ReactiveFormsModule],
  templateUrl: './dash-board-grade-one.component.html',
  providers:[CourseService],
  styleUrl: './dash-board-grade-one.component.css'
})
export class DashBoardGradeOneComponent {
  // selectedSubject: string | null = null;
  // subjects = ['Math', 'Arabic', 'Science', 'English', 'Social Studies'];
  Grade:string="GradeOne";
  // CourseName:any;
  // CoursePrice:number=0;
  constructor(private courseService: CourseService) {this.profileForm.reset();}

  profileForm = new FormGroup({
    courseName: new FormControl(null,[Validators.minLength(3),Validators.maxLength(300),Validators.required]),
    coursePrice: new FormControl(0,[Validators.min(0),Validators.max(10000),Validators.required]),
    subject: new FormControl(0,Validators.required),
  });
  // submitForm(form: NgForm) {
  //   const formData = {
  //     subject: this.selectedSubject,
  //     Grade:this.Grade,
  //     CourseName:this.CourseName,
  //     CoursePrice:this.CoursePrice
  //   };

  //   this.courseService.addCourse(formData).subscribe(
  //     {
  //       next:(data)=>{
  //         console.log(data);
  //         form.reset();
  //       },
  //       error:(err)=>{console.log(err)}
  //     }
  //   );
  // }
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
          // this.profileForm.reset({subject:-1, CourseName:null});
          // this.profileForm.reset();
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
