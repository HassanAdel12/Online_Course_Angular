
import { CommonModule } from "@angular/common";
import { HttpClientModule } from "@angular/common/http";
import { Component, Input } from "@angular/core";
import { Router, RouterLink } from "@angular/router";
import { GroupService } from "../../../../../Service/group.service";
import { QuizService } from "../../../../../Service/quiz.service";

@Component({
  selector: 'app-std-exam-enroll',
  standalone: true,
  imports: [
    RouterLink,CommonModule,
    HttpClientModule
  ],
  providers:[
    GroupService,QuizService
  ],
  templateUrl: './std-exam-enroll.component.html',
  styleUrl: './std-exam-enroll.component.css'
})
export class StdExamEnrollComponent {
  exam:any;
  Group : any;
  @Input() Groupid: any;
  quizs :any;

  constructor(private GroupService:GroupService ,private QuizService:QuizService ,
    private router: Router){ 

 }

  

 ngOnInit(): void {

  this.GroupService.getGroupByID(this.Groupid).subscribe({
    next:(data)=>{
      this.Group = data;
    },
    error:(err)=>{
      this.router.navigate(['/Error',{errormessage : err.message as string}]);
    }
  })

  this.QuizService.getQuizByGroupID(this.Groupid).subscribe({
    next:(data)=>{
      this.quizs = data;
    },
    error:(err)=>{
      this.router.navigate(['/Error',{errormessage : err.message as string}]);
    }
  })
 }

}
