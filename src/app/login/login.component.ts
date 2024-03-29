import { Component } from '@angular/core';
import { Router, RouterLink, RouterModule } from '@angular/router';
import { JwtService } from '../../Service/jwt.service';
import { HttpClient, HttpClientModule } from '@angular/common/http';
import { FormBuilder, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';

@Component({
  selector: 'app-login',
  standalone: true,
  imports: [ RouterLink,
    RouterModule,HttpClientModule,ReactiveFormsModule ],
    providers:[JwtService],
  templateUrl: './login.component.html',
  styleUrl: './login.component.css'
})
export class LoginComponent {
  
  loginForm: FormGroup;

  constructor(private fb: FormBuilder, private jwtservice: JwtService, private router: Router) {
    this.loginForm = this.fb.group({
      username: ['', [Validators.required, Validators.minLength(3)]],
      password: ['', [Validators.required, Validators.minLength(6), Validators.maxLength(20)]]
    });
  }

  onSubmit() {

    if (this.loginForm.valid) {

      this.jwtservice.login(this.loginForm.value).subscribe({
        next: (data) => {
          
          
          const DataUser = data;
         
          localStorage.setItem('DataUser', JSON.stringify(DataUser));
          
          if (DataUser.roles == 'Instructor') {
            this.router.navigate(['/Instructordashboard']);
          } else if ( DataUser.roles == 'Student') {
            this.router.navigate(['/choocegrade']);
          }



        },
        error: (err) => {
          console.log(err.message);
        },
      });
      
      
      
    }
  }
 
}
