import { group } from '@angular/animations';
import { QuizService } from './../../../../Service/quiz.service';
import { CommonModule } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';
import { Component, OnInit, SimpleChanges } from '@angular/core';
import { FormControl, FormGroup, FormsModule, ReactiveFormsModule, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { GroupService } from '../../../../Service/group.service';
import { AccountService } from '../../../../Service/Account.service';

@Component({
  selector: 'app-get-all-exams',
  standalone: true,
  imports: [FormsModule, CommonModule, HttpClientModule ,ReactiveFormsModule],
  providers: [QuizService, GroupService, AccountService],
  templateUrl: './get-all-exams.component.html',
  styleUrl: './get-all-exams.component.css',
})
export class GetAllExamsComponent implements OnInit {
  
  //options = ['Option 1', 'Option 2', 'Option 3']; // Array of options
  // selectedOption: any; // Property to bind to the selected option

  // onDropdownChange() {
  //   console.log('Selected option:', this.selectedGroup);

  // }



  instructor_id: any;
  exams: any;
  showgroup: any;
  selectedGroup: any;

  constructor(
    private QuizServices: QuizService,
    private router: Router,
    private GroupService: GroupService,
    private AccountService: AccountService
  ) {
    
  }

  private async getAccountID(): Promise<any> {
    return new Promise((resolve, reject) => {
      this.AccountService.GetID().subscribe({
        next: (data) => resolve(data),
        error: (err) => reject(err),
      });
    });
  }



  async ngOnInit(): Promise<void> {
    const instructor_id = await this.getAccountID();
    this.instructor_id = instructor_id;

    this.loadGroups();

    //this.loadexams();
    
    
  }
  

  // form: any;

  // ngOnChanges(changes: SimpleChanges): void {
  //   //Called before any other lifecycle hook. Use it to inject dependencies, but avoid any serious work here.
  //   //Add '${implements OnChanges}' to the class.
  //   this.loadexams()
  // }
  
  loadexams() {
    
    console.log(this.selectedGroup)
    
    this.QuizServices.getQuizByGroupID(this.selectedGroup).subscribe({
      next: (data) => {
        this.exams = data;
        console.log(data);
      },
      error: (err) => {
        this.router.navigate([
          '/Error',
          { errormessage: err.message as string },
        ]);
      },
    });

  }

  loadGroups() {
    this.GroupService.getGroupByInstructorID(this.instructor_id).subscribe({
      next: (data) => {
        this.showgroup = data;
        console.log(data);
      },
      error: (err) => {
        this.router.navigate([
          '/Error',
          { errormessage: err.message as string },
        ]);
      },
    });
  }

  // loadGroups() {
  //   this.groupservces.getAllGroups().subscribe({
  //     next: (data) => {
  //       this.showgroup = data;
  //       console.log(data);
  //     },
  //     error: (err) => {
  //       this.router.navigate([
  //         '/Error',
  //         { errormessage: err.message as string },
  //       ]);
  //     },
  //   });


  //}


  // onGroupSelect() {
  //   this.QuizServices.getAllQuizs().subscribe({
  //     next: (data) => {
  //       this.exams = data;
  //       console.log(data);
  //     },
  //     error: (err) => {
  //       this.router.navigate(['/Error', { errormessage: err.message as string }]);
  //     }
  //   });
  // }

  updateexam(id: number, updateexam: any): void {
    // this.QuizServices.updateQuiz(id, updateexam).subscribe({
    //   next: () => {
    //     console.log('Group updated successfully');

    //     this.loadexams();
    //   },
    //   error: (err) => {
    //     console.error('Error updating group:', err);
    //   },
    // });
  }
  deleteGroup(id: number): void {
    this.QuizServices.deleteQuiz(id).subscribe({
      next: () => {
        console.log('Group deleted successfully');

        this.loadexams();
      },
      error: (err) => {
        console.error('Error deleting group:', err);
      },
    });
  }


  Create(){

    if(this.selectedGroup){
      this.router.navigate(['/createExam/'+this.selectedGroup])
    }
    else{
      //alert('choose group');
    }

  }
}
