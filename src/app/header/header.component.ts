import { Component, SimpleChanges } from '@angular/core';
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
  DataUser : any;
  check : any;

  constructor(private readonly GradeService:GradeService , private router: Router){ 
    this.DataUser = localStorage.getItem('DataUser');
    this.DataUser = JSON.parse(this.DataUser);

    if (localStorage.getItem('DataUser') !== null) {
      this.check = true;
    }
    
  }

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
  
  ngOnChanges(changes: SimpleChanges): void {
        console.log(this.DataUser)
    if (localStorage.getItem('DataUser') !== null) {
      this.check = true;
    }
  }

  // ///////
  
  onLogout(){
    localStorage.removeItem('DataUser');
    this.router.navigate(['/Login']);
    this.check = true;
  }

}
