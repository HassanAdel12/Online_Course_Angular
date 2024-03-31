import { Component } from '@angular/core';
import { Router, RouterLink, RouterModule } from '@angular/router';
import { JwtService } from '../../Service/jwt.service';
import { HttpClient, HttpClientModule } from '@angular/common/http';
import { FormBuilder, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-login',
  standalone: true,
  imports: [ RouterLink,
    RouterModule,HttpClientModule,ReactiveFormsModule,CommonModule ],
    providers:[JwtService],
  templateUrl: './login.component.html',
  styleUrl: './login.component.css'
})
export class LoginComponent {
  show:boolean=false;
  loginForm: FormGroup;

  constructor(private fb: FormBuilder, private jwtservice: JwtService, private router: Router) {
    this.loginForm = this.fb.group({
      username: ['', [Validators.required, Validators.minLength(3)]],
      password: ['', [Validators.required, Validators.minLength(6), Validators.maxLength(20)]]
    });
  }

  onSubmit() {
    this.show=true;
    if (this.loginForm.valid) {

      this.jwtservice.login(this.loginForm.value).subscribe({
        next: (data) => {
          
          
          const DataUser = data;
         
          localStorage.setItem('DataUser', JSON.stringify(DataUser));
          
          if (DataUser.roles == 'Instructor') {
            this.router.navigate(['/Instructordashboard']);
          } else if ( DataUser.roles == 'Student') {
            this.router.navigate(['/mygroups']);
          }

          //window.location.reload();

        },
        error: (err) => {
          console.log(err.message);
          this.show=false;
        },
      });
      
      
      
    }
  }
 
}
