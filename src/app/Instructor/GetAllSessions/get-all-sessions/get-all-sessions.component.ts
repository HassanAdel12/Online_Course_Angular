import { SessionService } from './../../../../Service/session.service';
import { CommonModule } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { Router } from '@angular/router';
import { GroupService } from '../../../../Service/group.service';
import { AccountService } from '../../../../Service/Account.service';

@Component({
  selector: 'app-get-all-sessions',
  standalone: true,
  imports: [FormsModule, CommonModule, HttpClientModule],
  providers: [SessionService, GroupService ,AccountService],
  templateUrl: './get-all-sessions.component.html',
  styleUrl: './get-all-sessions.component.css',
})
export class GetAllSessionsComponent implements OnInit {
  
  
  constructor(
    private SessionService: SessionService,
    private router: Router,
    private GroupService: GroupService,
    private AccountService: AccountService
  ) {}

  instructor_id : any;
  sessions: any;
  showgroup: any;
  selectedGroup: any;


  private async getAccountID(): Promise<any> {
    return new Promise((resolve, reject) => {
      this.AccountService.GetID().subscribe({
        next: (data) => resolve(data),
        error: (err) => reject(err),
      });
    });
  }

  async ngOnInit() {
    const instructor_id = await this.getAccountID();
    this.instructor_id = instructor_id;

    //this.loadsessions();
    this.loadGroups();
  }
  
  
  loadsessions() {

    console.log(this.selectedGroup)

    this.SessionService.getSessionByGroupID(this.selectedGroup).subscribe({
      next: (data) => {
        this.sessions = data;
        //console.log(data);
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

  updateGroup(id: number, updatesession: any): void {
    // this.SessionService.updateSession(id, updatesession).subscribe({
    //   next: () => {
    //     console.log('Group updated successfully');

    //     this.loadsessions();
    //   },
    //   error: (err) => {
    //     console.error('Error updating group:', err);
    //   },
    // });
  }
  deleteGroup(id: number): void {
    this.SessionService.deleteSession(id).subscribe({
      next: () => {
        console.log('Group deleted successfully');

        this.loadsessions();
      },
      error: (err) => {
        console.error('Error deleting group:', err);
      },
    });
  }

  Create(){
    if(this.selectedGroup){
      this.router.navigate(['/Createsession/'+this.selectedGroup])
    }
    else{
      alert('choose group');
    }
  }
}
