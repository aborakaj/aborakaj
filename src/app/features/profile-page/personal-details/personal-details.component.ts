import { Component } from '@angular/core';
import { AbstractControl, FormBuilder, FormGroup, Validators } from '@angular/forms';
@Component({
  selector: 'app-personal-details',
  templateUrl: './personal-details.component.html',
  styleUrl: './personal-details.component.scss',
})
export class PersonalDetailsComponent {
  userForm!: FormGroup;

  constructor(
    private formBuilder: FormBuilder,

  ) { }

  ngOnInit() {
    this.userForm = this.formBuilder.group({
      firstName: ['', [Validators.required, Validators.minLength(2)]],
      lastName: ['', [Validators.required, Validators.minLength(2)]],
      email: ['', [Validators.required, Validators.pattern('^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\\.[a-zA-Z]{2,}$')]],
    },
      { updateOn: "blur" }
    );

  }
  get fc() {
    return this.userForm.controls;
  }
  update() {
    //TODO
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
