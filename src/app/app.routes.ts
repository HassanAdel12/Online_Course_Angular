import { Routes } from '@angular/router';
import { DashBoardGradeOneComponent } from './component/DashBoard/dash-board-grade-one/dash-board-grade-one.component';
import { DashBoardGradeTwoComponent } from './component/DashBoard/dash-board-grade-two/dash-board-grade-two.component';
import { DashBoardGradeThreeComponent } from './component/DashBoard/dash-board-grade-three/dash-board-grade-three.component';

export const routes: Routes = [
    {path:"First",component:DashBoardGradeOneComponent},
    {path:"Second",component:DashBoardGradeTwoComponent},
    {path:"Third",component:DashBoardGradeThreeComponent}
];
