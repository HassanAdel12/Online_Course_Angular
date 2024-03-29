import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { ActivatedRoute, Router, RouterLink, RouterModule } from '@angular/router';
import { GradeService } from '../../../../Service/grade.service';
import { GroupService } from '../../../../Service/group.service';
import { CourseService } from '../../../../Service/course.service';

@Component({
  selector: 'app-chooseinstructor',
  standalone: true,
  imports: [CommonModule, FormsModule, RouterLink,
    RouterModule],
  templateUrl: './ChooseGroup.component.html',
  styleUrl: './ChooseGroup.component.css'
})
export class ChooseinstructorComponent {

  id : any;
  course :any;
  groups:any;

  // items: any[] = [
  //   {
  //     photo: 'assets/images/teacher1.jpeg',
  //     alt: 'Photo 1',
  //     description: ' MR/Mohamed AbdElhamid ',
  //     button1: { label: ' Enroll', clicked: false },
  //     button2: { label: ' Details', clicked: false }
  //   },
  //   {
  //     photo: 'assets/images/teacher1.jpeg',
  //     alt: 'Photo 1',
  //     description: ' MR/Mohamed AbdElhamid ',
  //     button1: { label: ' Enroll', clicked: false },
  //     button2: { label: ' Details', clicked: false }
  //   }
  // ];

  constructor(private GroupService:GroupService ,private CourseService:CourseService ,
    private router: Router , private Actived : ActivatedRoute){ 
   this.id = this.Actived.snapshot.params["id"];
 }

  

 ngOnInit(): void {

  this.CourseService.getCourseByID(this.id).subscribe({
    next:(data)=>{
      this.course = data;
    },
    error:(err)=>{
      this.router.navigate(['/Error',{errormessage : err.message as string}]);
    }
  })

  this.GroupService.getGroupByCourseID(this.id).subscribe({
    next:(data)=>{
      this.groups = data;
    },
    error:(err)=>{
      this.router.navigate(['/Error',{errormessage : err.message as string}]);
    }
  })
 }
  


}
