import { HttpClientModule } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Route, Router, RouterModule } from '@angular/router';
import { CourseService } from '../Service/course.service';
import { CommonModule } from '@angular/common';
import { FormBuilder, FormControl, FormGroup, FormsModule, ReactiveFormsModule, Validators } from '@angular/forms';

@Component({
  selector: 'app-std-exam',
  standalone: true,
  imports: [
HttpClientModule,
CommonModule,
FormsModule,
ReactiveFormsModule

  ],
  providers:[
    CourseService
  ],
  templateUrl: './std-exam.component.html',
  styleUrl: './std-exam.component.css'
})
export class StdExamComponent implements OnInit {
  myForm=new FormGroup({
    answer:new FormControl(null,[Validators.required])
  })
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
 const data={
  StdAnswer:this.myForm.value.answer,
  Stdname:this.username,
  Stdid:this.std.id,
  //question id?

 };
 this.myservice.addstudentanswer(data).subscribe({
  next:(data)=>{
   
    window.location.reload();
  },
  error:(err)=>{window.alert("sorry there is an error when add: ")}
 })
  
  this.router.navigate(['/send']);
  this.std = this.student.find(s=>s.username===this.username);



}
checkanswers()
{
  return this.myForm.controls["answer"].valid
}
}
