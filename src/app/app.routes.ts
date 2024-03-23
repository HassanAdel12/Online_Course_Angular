import { Routes } from '@angular/router';

import { DashBoardGradeOneComponent } from './component/DashBoard/dash-board-grade-one/dash-board-grade-one.component';
import { DashBoardGradeTwoComponent } from './component/DashBoard/dash-board-grade-two/dash-board-grade-two.component';
import { DashBoardGradeThreeComponent } from './component/DashBoard/dash-board-grade-three/dash-board-grade-three.component';
import { CourseDetailsComponent } from './component/DashBoard/course-details/course-details.component';
import { GradComponent } from './grad/grad.component';
import { CourseselectedComponent } from './component/courseselected/courseselected.component';
import { StdExamComponent } from './std-exam/std-exam.component';
import { ExamPageComponent } from './std-exam/exam-page/exam-page.component';
import { SendComponent } from './std-exam/send/send.component';
import { InstructorDataComponent } from './component/instructor-data/instructor-data.component';
import { InstructorDateHeaderComponent } from './component/instructor-data/instructor-date-header/instructor-date-header.component';
import { InstructordatatwoComponent } from './component/instructor-data/instructordatatwo/instructordatatwo.component';

export const routes: Routes = [
    {path:"First",component:DashBoardGradeOneComponent },
    {path:"Second",component:DashBoardGradeTwoComponent},
    {path:"Third",component:DashBoardGradeThreeComponent},
    { path: 'Details/:id', component: CourseDetailsComponent },
    { path: 'grade', component:GradComponent },
    { path: 'courseselected/:id', component:CourseselectedComponent },
    { path: 'stdexam/:id', component:StdExamComponent },
    { path: 'group', component:CourseselectedComponent },
    { path: 'exam', component:ExamPageComponent },
    { path: 'send', component:SendComponent },
    { path: 'instructordata', component:InstructorDataComponent },
    { path: 'instructordataheader', component:InstructorDateHeaderComponent},
    { path: 'instructordatatwo', component:InstructordatatwoComponent},

];


