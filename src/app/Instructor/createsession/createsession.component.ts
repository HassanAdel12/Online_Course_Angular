import { Component, OnInit } from '@angular/core';
import { GradeService } from '../../../Service/grade.service';
import { CommonModule } from '@angular/common';
import { FormControl, FormGroup, FormsModule, ReactiveFormsModule, Validators } from '@angular/forms';
import { GroupService } from '../../../Service/group.service';
import { SessionService } from '../../../Service/session.service';

@Component({
  selector: 'app-createsession',
  standalone: true,
  imports: [CommonModule,FormsModule,ReactiveFormsModule],
  providers: [GroupService,SessionService],
  templateUrl: './createsession.component.html',
  styleUrl: './createsession.component.css'
})

export class CreatesessionComponent implements OnInit{


  groups:any; 
  instructor_ID = 1;
  group_ID : any;
  Name : any;
  url : any;
  constructor(private readonly GroupService : GroupService ,
    private readonly SessionService : SessionService){}
  

    myform = new FormGroup ({
      Name: new FormControl(null,[Validators.min(3),Validators.max(50),Validators.required]),
      URL: new FormControl(null,[Validators.min(1),Validators.max(100),Validators.required]),
      
      EndDate:new FormControl(null,Validators.required)
      
  
  
    })

  ngOnInit(): void {

    // this.QuizService.getAllQuizs().subscribe({
    //   next: (data) => {
    //     this.grade = data;
    //   },
    //   error: (err) => {
    //     console.log(err);
    //   },
    // });

    this.GroupService.getGroupByInstructorID(this.instructor_ID).subscribe({
      next: (data) => {
        this.groups = data;
      },
      error: (err) => {
        console.log(err);
      },
    });

  }
  
  onchange(group_ID : any){

    this.group_ID = group_ID;
  }
  
  submitForm() {
    
    const formData = {
      sessionName: this.Name,
      rate: 0,
      start_Date: Date.now,
      end_at: this.myform.value.EndDate,
      instructor_ID: this.instructor_ID,
      group_ID: this.group_ID,
      Url: this.myform.value.URL
    };

    this.SessionService.AddNewSession(formData).subscribe({
      next: (data) => {
        // this.profileForm.reset({subject:-1, CourseName:null});
        //this.profileForm.reset();

        window.alert(
          'New Session: ' +
            this.Name +
            ' Added Sucsessfly'
        );
      },
      error: (err) => {
        window.alert(
          'sorry there is an error when add: ' +
            this.Name +
            ' group'
        );
      },
    });
    //console.log('Form submitted');
  }

}
