import { Component, SimpleChanges } from '@angular/core';
import { Router, RouterLink, RouterModule } from '@angular/router';
import { CommonModule } from '@angular/common';
import { AllCoursesComponent } from '../../all-courses/all-courses.component';
import { GradeService } from '../../../../Service/grade.service';
import { DashBoardGradeOneComponent } from '../dash-board-grade/dash-board-grade.component';
import { FormControl, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { GroupService } from '../../../../Service/group.service';

@Component({
  selector: 'app-add-group',
  standalone: true,
  imports: [
    RouterModule,
    AllCoursesComponent,
    CommonModule,
    RouterLink,
    DashBoardGradeOneComponent,
    ReactiveFormsModule
  ],
  providers: [GradeService],
  templateUrl: './add-group.component.html',
  styleUrl: './add-group.component.css',
})
export class AddGroupComponent {

 // Grades: any;
  course_id=1;
  instructor_id=1;
  //check : Boolean = false;

  constructor(
    private readonly GradeService: GradeService,
    private router: Router,
   private groupserves:GroupService
  ) {
    //this.grade_ID = 0;
  }

  myform = new FormGroup ({
    groupName: new FormControl(null,[Validators.min(3),Validators.max(50),Validators.required]),
    StudentNumber: new FormControl(null,[Validators.min(1),Validators.max(100),Validators.required]),
    
    EndDate:new FormControl(null,Validators.required),
    Price:new FormControl(null,Validators.required)


  })


  submit() {
   
const data={
  groupName:this.myform.value.groupName,
  num_Students:this.myform.value.StudentNumber,
  creation_Date:Date.now,
  end_Date:this.myform.value.EndDate,
  price:this.myform.value.Price,
  instructor_ID:this.instructor_id,
  course_ID:this.course_id

}

   this.groupserves.addgroup(data).subscribe({
    next:(data)=>alert("add successfully"+data) ,
    error:(err)=>alert("sorry there is an error when add")
   })

    }
    get groupNamevalid()
    {
      return this.myform.controls["groupName"].valid;
    }
    get StudentNumbervalid()
    {
      return this.myform.controls["StudentNumber"].valid;
    }
   
    get EndDate()
    {
      return this.myform.controls["EndDate"].valid;
    }
    get Price()
    {
      return this.myform.controls["Price"].valid;
    }
  // ngOnInit(): void {
  //   this.GradeService.getAllGrades().subscribe({
  //     next: (data) => {
  //       this.Grades = data;
  //     },
  //     error: (err) => {
  //       this.router.navigate([
  //         '/Error',
  //         { errormessage: err.message as string },
  //       ]);
  //     },
  //   });
  // }


  // onchange(grade_ID: any) {
  //   this.grade_ID = grade_ID;

    

  // }

  showDashBoard: boolean = false;

  showAddGroup() {
    this.showDashBoard = true;
  }

  hideAddGroup() {
    this.showDashBoard = false;
  }
}
