import { Component } from '@angular/core';
import { Router, RouterLink, RouterModule } from '@angular/router';
import { CreatesessionComponent } from '../../createsession/createsession.component';
import { CreateexamComponent } from '../../createExam/createexam/createexam.component';
import { CommonModule } from '@angular/common';
import { GetAllExamsComponent } from '../../GetAllExams/get-all-exams/get-all-exams.component';
import { GetAllGroupsComponent } from '../../GetAllGroups/get-all-groups/get-all-groups.component';
import { GetAllSessionsComponent } from '../../GetAllSessions/get-all-sessions/get-all-sessions.component';

@Component({
  selector: 'app-instructordashboard',
  standalone: true,
  imports: [RouterModule,RouterLink,CommonModule , GetAllExamsComponent,GetAllGroupsComponent,GetAllSessionsComponent],
  templateUrl: './instructordashboard.component.html',
  styleUrl: './instructordashboard.component.css'
})
export class InstructordashboardComponent {
  
  Groups : boolean = false;
  Exams : boolean = false;
  Sessions : boolean = false;

  constructor(private router: Router) {
    
  }
  

  AllGroups(){
    this.Groups = true;
    this.Exams = false;
    this.Sessions = false;
    console.log("AllGroups")
  }

  AllExams(){

    this.Groups = false;
    this.Exams = true;
    this.Sessions = false;
    console.log("AllExams")
  }

  AllSessions(){

    this.Groups = false;
    this.Exams = false;
    this.Sessions = true;
    console.log("AllSessions")
  }

}