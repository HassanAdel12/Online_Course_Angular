import { Component, NgModule } from '@angular/core';
import { CommonModule ,NgForOf } from '@angular/common';
//import { VideoService } from '../../../Service/video.service';
import { FormsModule } from '@angular/forms';
import { RouterLink, RouterModule } from '@angular/router';
import { HttpClientModule } from '@angular/common/http';
import { SessionService } from '../../Service/session.service';
//import {  Video } from './session.model';

@Component({
  selector: 'app-showsessions',
  standalone: true,
  imports: [HttpClientModule,FormsModule,CommonModule],
  providers:[],
  
  templateUrl: './showsessions.component.html',
  styleUrl: './showsessions.component.css'
})
export class ShowsessionsComponent {
  
  // session: any = { sessionName: '', start_Date: '', end_at: '', rate: 0, OnlineVideo: '', instructor_ID: 0, group_ID: 0 };

  // constructor(private sessionService: VideoService) { }

  // upload() {
  //   this.sessionService.uploadSession(this.session).subscribe(() => {
  //     console.log('successfully');
  
  //     this.session = { sessionName: '', start_Date: '', end_at: '', rate: 0, OnlineVideo: '', instructor_ID: 0, group_ID: 0 };
  //   }, error => {
  //     console.error('Error uploading session:', error);
  //   });
  // }
  ////////////////
  // sessions: Session[] = [];
  // selectedSession: Session | null = null;


  //video: Video = { id: 0, title: '', url: 'http://commondatastorage.googleapis.com/gtv-videos-bucket/sample/ElephantsDream.mp4' };  ;
  videoId: number = 5;
  Session : any;  

  constructor(private SessionService: SessionService) { }
  
  ngOnInit(): void {
    this.loadVideo();
  }

  loadVideo(): void {
    this.SessionService.getSessionByID(this.videoId)
      .subscribe(Session => {
        this.Session = Session;
      });
  }

  addVideo(): void {
    //const newVideo: Video = { id: 0, title: 'New Video', url: 'video_url.mp4' }; 
    // this.videoService.addVideo(newVideo)
    //   .subscribe(video => {
    //     this.video = video;
    //   });
  }


 


}
