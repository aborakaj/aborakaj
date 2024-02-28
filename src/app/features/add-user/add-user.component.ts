import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators, AbstractControl} from '@angular/forms';
import { UserService } from '../../core/services/user.service';
import { ToastrService } from 'ngx-toastr';

@Component({
  selector: 'app-add-user',
  templateUrl: './add-user.component.html',
  styleUrls: ['./add-user.component.scss']
})



export class AddUserComponent implements OnInit {
  userForm!: FormGroup


  displayDialog: boolean = false;

  
  constructor(private fb: FormBuilder,
    private userService: UserService,
    private toastr: ToastrService) {
  }

  ngOnInit() {
    this.userForm = this.fb.group({
      firstName:['', [Validators.required, Validators.minLength(2)]],
      lastName: ['', [Validators.required, Validators.minLength(2)]],
      phoneNumber: ['', [Validators.required, Validators.minLength(10)]],
      email: ['', [Validators.required, Validators.pattern('^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\\.[a-zA-Z]{2,}$')]],
     
    },
    { updateOn: "blur" }
    
    );

  }


  showDialog() {
    this.displayDialog = true;
  }

  onClose() {
    this.displayDialog = false;
    this.userForm.reset();
    
  }

  onSubmit() {
    if (this.userForm.valid) {
      const userData = { ...this.userForm.value };
    
      
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

  allFieldsFilled(): boolean {
    
    for (const controlName in this.userForm.controls) {
      if (this.userForm.controls.hasOwnProperty(controlName)) {
        const control = this.userForm.get(controlName);
   
        if (control && (control.value === null || control.value === '')) {
          return false;
        }
      }
    }
   
    return true;
  }
  
  
}
