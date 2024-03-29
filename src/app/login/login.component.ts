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
      username: ['', Validators.required],
      password: ['', Validators.required]
    });
  }

  onSubmit() {
    if (this.loginForm.valid) {
      this.jwtservice.login(this.loginForm.value).subscribe(
        (response: any) => {
         
          const token = response.token;
         
          localStorage.setItem('token', token);
          if (this.loginForm.value.username === 'Ahmed') {
            this.router.navigate(['/Login']);
          } else if ( this.loginForm.value.username=== 'Ali') {
            this.router.navigate(['/Dashboard']);
          }



          this.router.navigate(['/choocegrade']);
        },
        (error: any) => {
          console.error('Login failed:', error);
        
        }
      );
    }
  }
 
}
