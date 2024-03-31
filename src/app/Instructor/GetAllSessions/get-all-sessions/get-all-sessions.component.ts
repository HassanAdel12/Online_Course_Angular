import { SessionService } from './../../../../Service/session.service';
import { CommonModule } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { Router } from '@angular/router';


@Component({
  selector: 'app-get-all-sessions',
  standalone: true,
  imports: [FormsModule,CommonModule,HttpClientModule],
  providers: [SessionService],
  templateUrl: './get-all-sessions.component.html',
  styleUrl: './get-all-sessions.component.css'
})
export class GetAllSessionsComponent implements OnInit{
constructor(private SessionService:SessionService , private router: Router){}
id=1 ; 
sessions:any; 
  ngOnInit() {
    this.loadsessions();
    
  }
  loadsessions(){
    this.SessionService.getSessionByGroupID(this.id).subscribe({
      next: (data) => {
        this.sessions = data;
        console.log(data)
      },
      error: (err) => {
        this.router.navigate(['/Error', { errormessage: err.message as string }]);
      }
    });
  }
  
  updateGroup(id: number, updatesession: any): void {
    this.SessionService.updateSession(id, updatesession).subscribe({
      next: () => {
        console.log('Group updated successfully');
        
        this.loadsessions();
      },
      error: (err) => {
        console.error('Error updating group:', err);
      }
    });
  }
  deleteGroup(id:number): void {
    this.SessionService.deleteSession(id).subscribe({
      next: () => {
        console.log('Group deleted successfully');
        
        this.loadsessions();
      },
      error: (err) => {
        console.error('Error deleting group:', err);
      }
    });
  }




}
