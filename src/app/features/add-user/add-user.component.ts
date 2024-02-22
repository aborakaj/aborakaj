import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators, AbstractControl, ValidationErrors } from '@angular/forms';
import { UserService } from '../../core/services/user.service';
import { ToastrService } from 'ngx-toastr';

@Component({
  selector: 'app-add-user',
  templateUrl: './add-user.component.html',
  styleUrls: ['./add-user.component.scss']
})



export class AddUserComponent implements OnInit {
  userForm: FormGroup = new FormGroup({});
  user = {
    firstName: '',
    lastName: '',
    username: '',
    email: '',
    password: '',
    confirmPassword: '',
   
  };

  displayDialog: boolean = false;
  
  constructor(private fb: FormBuilder,
    private userService: UserService,
    private toastr: ToastrService,) {
  }

  ngOnInit() {
    this.userForm = this.fb.group({
      firstName: ['', [Validators.required, Validators.minLength(2)]],
      lastName: ['', [Validators.required, Validators.minLength(2)]],
      username: ['', [Validators.required, Validators.minLength(5)]],
      email: ['', [Validators.required, Validators.pattern('^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\\.[a-zA-Z]{2,}$')]],
      password: ['', [Validators.required, Validators.minLength(8)]],
      confirmPassword: ['', [Validators.required, Validators.minLength(8)]],
     
    }, {
      validator: this.passwordMatchValidator 
    });

  }

  passwordMatchValidator(control: AbstractControl): ValidationErrors | null {
    const password = control.get('password');
    const confirmPassword = control.get('confirmPassword');
  
    if (password && confirmPassword && password.value !== confirmPassword.value) {
      return { 'passwordMismatch': true };
    }
  
    return null;
  }

  showDialog() {
    this.displayDialog = true;
  }

  onClose() {
    this.displayDialog = false;
    this.userForm.reset();
    
  }

  saveUser() {
    if (this.userForm.valid) {
      const userData = { ...this.userForm.value };
    
  
      delete userData.confirmPassword;

      
      this.userService.submitUser(userData).subscribe({
        next: () => {
          this.toastr.success('User created', 'Success');
          this.userForm.reset();
        },
        error: () => {
          this.toastr.error('Error creating user');
        
        },
      });
    }
  }
}
