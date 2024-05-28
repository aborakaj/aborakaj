import { Component, OnInit } from '@angular/core';
import { AbstractControl, FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { AuthService } from '../../core/services/auth.service';
import { Message } from 'primeng/api';


interface Department {
  name: string;
}
interface EmployeeNumber {
  number: Number;
}
@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrl: './register.component.scss'
})
export class RegisterComponent implements OnInit {
  registerForm!: FormGroup;
  departments: Department[] | undefined;

  selectedDepartment: Department | undefined;

  employeeNrs: EmployeeNumber[] | undefined;

  selectedEmployeeNr: EmployeeNumber | undefined;

  message!: Message[];


  constructor(
    private formBuilder: FormBuilder,
    private authService: AuthService,
    private router: Router,
    private toastr: ToastrService
  ) { }

  ngOnInit() {
    this.registerForm = this.formBuilder.group({
      organizationName: ['', [Validators.required, Validators.minLength(3)]],
      selectedDepartment: ['',],
      selectedEmployeeNr: ['',],
      firstName: ['', [Validators.required, Validators.minLength(2)]],
      lastName: ['', [Validators.required, Validators.minLength(2)]],
      phoneNumber: ['', [Validators.required, Validators.minLength(10)]],
      email: ['', [Validators.required, Validators.pattern('^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\\.[a-zA-Z]{2,}$')]],
      remember: [false]
    },
      { updateOn: "blur" }
    );

    this.departments = [
      { name: 'IT' },
      { name: 'Finance' },
      { name: 'Logistics' },
      { name: 'Service' },

    ];
    this.employeeNrs = [
      { number: 20 },
      { number: 50 },
      { number: 100 },
      { number: 200 },


    ];


  }



  get fc() {
    return this.registerForm.controls;
  }



  login(): void {

    if (this.registerForm.invalid) {
      this.toastr.error('Please correct the errors in the form', 'Error');
      return;
    }

    const identifier = this.registerForm.get('identifier')?.value;
    const password = this.registerForm.get('password')?.value;

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
        }
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