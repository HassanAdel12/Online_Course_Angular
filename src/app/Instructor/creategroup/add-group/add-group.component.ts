import { Component, SimpleChanges } from '@angular/core';
import { Router, RouterLink, RouterModule } from '@angular/router';
import { CommonModule } from '@angular/common';
import { AllCoursesComponent } from '../../all-courses/all-courses.component';
import { GradeService } from '../../../../Service/grade.service';
import { DashBoardGradeOneComponent } from '../dash-board-grade/dash-board-grade.component';

@Component({
  selector: 'app-add-group',
  standalone: true,
  imports: [
    RouterModule,
    AllCoursesComponent,
    CommonModule,
    RouterLink,
    DashBoardGradeOneComponent,
  ],
  providers: [GradeService],
  templateUrl: './add-group.component.html',
  styleUrl: './add-group.component.css',
})
export class AddGroupComponent {
  Grades: any;
  grade_ID: any;
  check : Boolean = false;

  constructor(
    private readonly GradeService: GradeService,
    private router: Router
  ) {
    this.grade_ID = 0;
  }

  ngOnInit(): void {
    this.GradeService.getAllGrades().subscribe({
      next: (data) => {
        this.Grades = data;
      },
      error: (err) => {
        this.router.navigate([
          '/Error',
          { errormessage: err.message as string },
        ]);
      },
    });
  }


  onchange(grade_ID: any) {
    this.grade_ID = grade_ID;

    

  }

  showDashBoard: boolean = false;

  showAddGroup() {
    this.showDashBoard = true;
  }

  hideAddGroup() {
    this.showDashBoard = false;
  }
}
