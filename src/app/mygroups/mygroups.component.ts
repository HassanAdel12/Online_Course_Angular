import { CommonModule } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';
import { Component, OnInit, SimpleChanges } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { Router, RouterModule } from '@angular/router';
import { GroupService } from '../../Service/group.service';
import { AccountService } from '../../Service/Account.service';

@Component({
  selector: 'app-mygroups',
  standalone: true,
  imports: [FormsModule, HttpClientModule, RouterModule, CommonModule],
  providers: [GroupService, AccountService],
  templateUrl: './mygroups.component.html',
  styleUrl: './mygroups.component.css',
})
export class MygroupsComponent implements OnInit {
  stId: any;
  courseGroups: any;
  // Define the property to hold the static data

  constructor(
    private router: Router,
    private GroupService: GroupService,
    private AccountService: AccountService
  ) {

    this.AccountService.GetID().subscribe({
      next: (data) => {
        this.stId = {};
        //console.log(data);
        this.stId.studentId = data;
        //console.log(this.studentId);
      },
      error: (err) => {
        this.router.navigate([
          '/Error',
          { errormessage: err.message as string },
        ]);
      },
    });
  }

  ngOnInit(): void {
    

    console.log(this.stId);

    // this.GroupService.getGroupBystudentID(this.studentId).subscribe({
    //   next: (data) => {
    //     this.courseGroups = data;
    //   },
    //   error: (err) => {
    //     console.error('Error fetching groups:', err);
    //   },
    // });

    
    console.log(this.stId);

    //console.log(this.studentId);
  }

  onchange(){

    this.GroupService.getGroupBystudentID(this.stId.studentId).subscribe({
      next: (data) => {
        this.courseGroups = data;
      },
      error: (err) => {
        console.error('Error fetching groups:', err);
      },
    });
    
  }

  enrollNewGroup(): void {
    this.router.navigateByUrl('/choocegrade');
  }

  takeQuiz(Group_ID: number): void {
    this.router.navigate(['/Exam/' + Group_ID]);
  }

  viewSession(Group_ID: number): void {
    this.router.navigate(['/courseselected/' + Group_ID]);
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
