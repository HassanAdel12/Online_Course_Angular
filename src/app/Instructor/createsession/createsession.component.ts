import { Component, OnInit } from '@angular/core';
import { GradeService } from '../../../Service/grade.service';
import { CommonModule } from '@angular/common';
import {
  FormControl,
  FormGroup,
  FormsModule,
  ReactiveFormsModule,
  Validators,
} from '@angular/forms';
import { GroupService } from '../../../Service/group.service';
import { SessionService } from '../../../Service/session.service';
import { AccountService } from '../../../Service/Account.service';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-createsession',
  standalone: true,
  imports: [CommonModule, FormsModule, ReactiveFormsModule],
  providers: [GroupService, SessionService , AccountService],
  templateUrl: './createsession.component.html',
  styleUrl: './createsession.component.css',
})
export class CreatesessionComponent implements OnInit {
  //groups:any;
  instructor_id: any;
  group_ID: any;
  Name: any;
  url: any;
  group : any;

  constructor(
    private readonly GroupService: GroupService,
    private readonly SessionService: SessionService,
    private AccountService: AccountService,
    private Actived: ActivatedRoute,
    private router: Router,
  ) {
    this.group_ID = this.Actived.snapshot.params['id'];
  }

  private async getAccountID(): Promise<any> {
    return new Promise((resolve, reject) => {
      this.AccountService.GetID().subscribe({
        next: (data) => resolve(data),
        error: (err) => reject(err),
      });
    });
  }

  myform = new FormGroup({
    Name: new FormControl(null, [
      Validators.min(3),
      Validators.max(50),
      Validators.required,
    ]),
    URLZoom: new FormControl(null, [Validators.required]),
    URLOnlineVideo: new FormControl(null, [Validators.required]),

    EndDate: new FormControl(null, Validators.required),

    CreationDate: new FormControl(null, Validators.required),
  });

  async ngOnInit(): Promise<void> {

    const instructor_id = await this.getAccountID();
    this.instructor_id = instructor_id;
    
    // this.QuizService.getAllQuizs().subscribe({
    //   next: (data) => {
    //     this.grade = data;
    //   },
    //   error: (err) => {
    //     console.log(err);
    //   },
    // });
    this.GroupService.getGroupByID(this.group_ID).subscribe({
      next: (data) => {
        this.group = data;
      },
      error: (err) => {
        console.log(err);
      },
    });
  }

  // onchange(group_ID: any) {
  //   this.group_ID = group_ID;
  // }

  submitForm() {
    const formData = {
      sessionName: this.myform.value.Name,
      rate: 0,
      start_Date: this.myform.value.CreationDate,
      end_at: this.myform.value.EndDate,
      instructor_ID: this.instructor_id,
      group_ID: this.group.group_ID,
      zoom: this.myform.value.URLZoom,
      onlineVideo: this.myform.value.URLOnlineVideo,
    };

    if(this.myform.valid){
      this.SessionService.AddNewSession(formData).subscribe({
        next: (data) => {
  
          this.router.navigate(['/Instructordashboard'])
  
        },
        error: (err) => {
          window.alert(
            'sorry there is an error when add: ' + this.Name + ' group'
          );
          //console.log(formData)
        },
      });
    }
    
  }

  get sessionNamevalid() {
    return this.myform.controls['Name'].valid;
  }
  get URLZoomvalid() {
    return this.myform.controls['URLZoom'].valid;
  }

  get URLOnlineVideovalid() {
    return this.myform.controls['URLOnlineVideo'].valid;
  }

  get EndDate() {
    return this.myform.controls['EndDate'].valid;
  }

}
