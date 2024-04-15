import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { FormBuilder, FormGroup, Validators, AbstractControl } from '@angular/forms';

@Component({
  selector: 'app-add-user',
  templateUrl: './add-user.component.html',
  styleUrls: ['./add-user.component.scss']
})

export class AddUserComponent implements OnInit {
  userForm!: FormGroup
  @Input() visible!: boolean;
  @Input() actionButtonLabel!: string;
  @Input() header!: string;
  @Output() addUserClick = new EventEmitter<void>();
  @Output() visibleChange: EventEmitter<boolean> = new EventEmitter<boolean>();

  onAddUserClick() {
    this.addUserClick.emit();
  }

  onVisibleChange(event: boolean) {
    this.visibleChange.emit(event);
    this.userForm.reset();
  }

  constructor(private fb: FormBuilder) { }
  ngOnInit() {
    this.userForm = this.fb.group({
      firstName: ['', [Validators.required, Validators.minLength(2)]],
      lastName: ['', [Validators.required, Validators.minLength(2)]],
      phoneNumber: ['', [Validators.required, Validators.minLength(10)]],
      email: ['', [Validators.required, Validators.pattern('^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\\.[a-zA-Z]{2,}$')]],
    },
      { updateOn: "blur" }
    );
  }

  onSubmitUser() {
    if (this.userForm.valid) {
      const userData = { ...this.userForm.value };
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
