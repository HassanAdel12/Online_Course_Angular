import { Component } from '@angular/core';

import { HttpClientModule } from '@angular/common/http';


import { ActivatedRoute, Router, RouterLink, RouterModule } from '@angular/router';
import { GroupService } from '../../../../Service/group.service';
import { MainComponent } from '../main/main.component';
import { MainUComponent } from '../main-u/main-u.component';

@Component({
  selector: 'app-courseselected',
  standalone: true,
  imports: [
    MainComponent,
    MainUComponent,
    HttpClientModule,
    RouterLink,
    RouterModule,
  ],
  providers: [GroupService],
  templateUrl: './courseselected.component.html',
  styleUrl: './courseselected.component.css',
})
export class CourseselectedComponent {
  
  id: any;
  
  constructor(
    private router: Router , private Actived : ActivatedRoute){ 
   this.id = this.Actived.snapshot.params["id"];
 }

}
