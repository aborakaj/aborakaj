import { Component, OnInit } from '@angular/core';
import {
  AbstractControl,
  FormBuilder,
  FormGroup,
  Validators,
} from '@angular/forms';
import { Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { AuthService } from '../../../core/services/auth.service';
import { Message } from 'primeng/api';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss'],
})
export class LoginComponent implements OnInit {
  loginForm!: FormGroup;

  message!: Message[];

  constructor(
    private formBuilder: FormBuilder,
    private authService: AuthService,
    private router: Router,
    private toastr: ToastrService
  ) {}

  ngOnInit() {
    this.loginForm = this.formBuilder.group(
      {
        identifier: [
          '',
          [
            Validators.required,
            Validators.pattern(
              '^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\\.[a-zA-Z]{2,}$'
            ),
          ],
        ],
        password: ['', [Validators.required, Validators.minLength(5)]],
        remember: [false],
      },
      { updateOn: 'blur' }
    );
    this.message = [
      {
        severity: 'info',
        detail:
          'This is a private space. If you have an approved account, please log in below.',
      },
    ];
  }

  get fc() {
    return this.loginForm.controls;
  }

  login(): void {
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

          const userRole = this.authService.getTokenPayload().role;

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
        },
      });
    } else {
      this.toastr.error('Login failed', 'Error');
    }
  }

  checkForErrorsIn(control: AbstractControl | null): string {
    if (!control) return '';
    if (control.hasError('required')) {
      return 'Field is required';
    } else if (control.hasError('pattern')) {
      return 'Invalid format';
    } else if (control.hasError('minlength')) {
      return `Minimum length ${control.errors?.['minlength'].requiredLength}`;
    }
    return '';
  }
}
