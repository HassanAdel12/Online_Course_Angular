import { CommonModule } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { Router, RouterModule } from '@angular/router';
import { GroupService } from '../../Service/group.service';

@Component({
  selector: 'app-mygroups',
  standalone: true,
  imports: [FormsModule,HttpClientModule,RouterModule,CommonModule],
  providers:[GroupService],
  templateUrl: './mygroups.component.html',
  styleUrl: './mygroups.component.css'
})
export class MygroupsComponent  {
  // Define the property to hold the static data

  constructor(private router: Router) { }

  enrollNewGroup(): void {
    this.router.navigateByUrl('/choocegrade');
  }
  takeQuiz(examId: number): void {
    this.router.navigate(['/Exam', examId]);
  }
  viewSession(courseId: number): void {
    this.router.navigate(['/courseselected', courseId]);
  }

    // Initialize the static data
   courseGroups = [
      {
        Group_ID: 1,
        GroupName: 'Group 1',
        Course_ID: 1,
        courseName: 'Course A',
        Instructor_ID: 201,
        InstructorName: 'Instructor X',
        Num_Students: 25,
        Creation_Date: '2024-01-01',
        End_Date: '2024-05-01',
        Price: 100
      },
      {
        Group_ID: 1,
        GroupName: 'Group 1',
        Course_ID: 101,
        courseName: 'Course A',
        Instructor_ID: 201,
        InstructorName: 'Instructor X',
        Num_Students: 25,
        Creation_Date: '2024-01-01',
        End_Date: '2024-05-01',
        Price: 100
      },
      {
        Group_ID: 1,
        GroupName: 'Group 1',
        Course_ID: 101,
        courseName: 'Course A',
        Instructor_ID: 201,
        InstructorName: 'Instructor X',
        Num_Students: 25,
        Creation_Date: '2024-01-01',
        End_Date: '2024-05-01',
        Price: 100
      },
      {
        Group_ID: 1,
        GroupName: 'Group 1',
        Course_ID: 101,
        courseName: 'Course A',
        Instructor_ID: 201,
        InstructorName: 'Instructor X',
        Num_Students: 25,
        Creation_Date: '2024-01-01',
        End_Date: '2024-05-01',
        Price: 100
      },

      // Add more static data as needed
    ];

  // courseGroups:any;
  // constructor(private Service:GroupService) {}
  // ngOnInit(): void {
  //   const studentId = 1;
  //   this.Service.getGroupBystudentID(studentId).subscribe(

  //     {
  //       next: (data) => {this.courseGroups = data;

  //       },
  //       error: (err) => {}
  //     }
  //   )


  // }

}
