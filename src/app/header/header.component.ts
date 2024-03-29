import { Component } from '@angular/core';
import { Router, RouterLink, RouterModule } from '@angular/router';
import { GradeService } from '../../Service/grade.service';

@Component({
  selector: 'app-header',
  standalone: true,
  imports: [
    RouterLink,
    RouterModule
  ],
  templateUrl: './header.component.html',
  styleUrl: './header.component.css'
})
export class HeaderComponent {

  Grades:any;

  constructor(private readonly GradeService:GradeService , private router: Router){ }

  ngOnInit(): void {

    this.GradeService.getAllGrades().subscribe({
      next:(data)=>{
        this.Grades = data;
      },
      error:(err)=>{
        this.router.navigate(['/Error',{errormessage : err.message as string}]);
      }
    })

  }
  

  // ///////
  

}
