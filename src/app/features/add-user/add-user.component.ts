import { Component, EventEmitter, Input, Output } from '@angular/core';
import { FormBuilder, FormGroup, Validators, AbstractControl } from '@angular/forms';
import { User } from '../../core/models/user.interface';

@Component({
  selector: 'app-add-user',
  templateUrl: './add-user.component.html',
  styleUrls: ['./add-user.component.scss']
})

export class AddUserComponent {

  userForm!: FormGroup;
  @Input() visible!: boolean;
  @Input() actionButtonLabel!: string;
  @Input() header!: string;
  @Input() selectedUser!: User;
  @Output() addUserClick = new EventEmitter<void>();
  @Output() visibleChange: EventEmitter<boolean> = new EventEmitter<boolean>();

  onVisibleChange(event: boolean) {
    this.visibleChange.emit(event);
  }

  constructor(private fb: FormBuilder) { }

  ngOnChanges() {
    this.userForm = this.fb.group({
      firstName: [this.selectedUser.firstName, [Validators.required, Validators.minLength(2)]],
      lastName: [this.selectedUser.lastName, [Validators.required, Validators.minLength(2)]],
      phoneNumber: [this.selectedUser.phoneNumber, [Validators.required, Validators.minLength(10)]],
      email: [this.selectedUser.email, [Validators.required, Validators.pattern('^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\\.[a-zA-Z]{2,}$')]],
    },
      { updateOn: "blur" }
    );
  }

  onSubmitUser() {
    this.addUserClick.emit();
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
