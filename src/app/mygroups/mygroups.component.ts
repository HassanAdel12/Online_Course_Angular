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
export class MygroupsComponent implements  OnInit {
  courseGroups: any;
  // Define the property to hold the static data

  constructor(private router: Router, private service: GroupService) { }
  ngOnInit(): void {
    const studentId = 4;
    this.service.getGroupBystudentID(studentId).subscribe({
      next: (data) => {
        this.courseGroups = data;
      },
      error: (err) => {
        console.error('Error fetching groups:', err);
      }
    });
  }

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
