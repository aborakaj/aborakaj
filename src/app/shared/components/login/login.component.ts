import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { AuthService } from '../../../core/services/auth.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {
  loginForm!: FormGroup;
  isSubmitted = false;

  constructor(
    private formBuilder: FormBuilder,
    private authService: AuthService,
    private router: Router,
    private toastr: ToastrService
  ) { }

  ngOnInit(): void {
    this.loginForm = this.formBuilder.group({
      identifier: ['', [Validators.required, Validators.email]],
      password: ['', Validators.required]
    });
  }

  get fc() {
    return this.loginForm.controls;
  }

  login(): void {
    this.isSubmitted = true;
    if (this.loginForm.invalid) {
      this.toastr.error('Please correct the errors in the form', 'Error');
      return;
    }

    const identifier = this.loginForm.get('identifier')?.value;
    const password = this.loginForm.get('password')?.value;

    if (identifier && password) {
      this.authService.login(identifier, password).subscribe({
        next: (response) => {
          this.authService.saveToken(response.access_token);

          const userRole = this.authService.getPayloadPropertyFromToken('role')

          if (userRole === 'Admin') {
            this.router.navigate(['/home/users']);
          } else {
            this.router.navigate(['/home/reservations']);
          }
          this.toastr.success('Logged in successfully', 'Success');
        },
        error: (error) => {
          this.toastr.error('Login failed', 'Error');
          console.error('Login failed:', error);
        }
      });
    } else {
      this.toastr.error('Login failed', 'Error');
    }
  }
}