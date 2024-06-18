import { Component, Input, Output, EventEmitter, OnInit, OnChanges, SimpleChanges } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-role-modal',
  templateUrl: './role-modal.component.html',
  styleUrls: ['./role-modal.component.scss']
})
export class RoleModalComponent implements OnInit, OnChanges {
  @Input() actionButtonLabel: string = '';
  @Input() visible: boolean = false;
  @Input() header: string = '';
  @Input() selectedRole: any; 
  @Output() onActionButtonClick = new EventEmitter<void>();
  @Output() visibleChange = new EventEmitter<boolean>();

  roleForm: FormGroup;

  constructor(private fb: FormBuilder) {
    this.roleForm = this.fb.group({
      roleName: ['', Validators.required],
      roleDescription: ['']
    });
  }

  ngOnInit(): void {
    this.patchRoleForm();
  }

  ngOnChanges(changes: SimpleChanges): void {
    if (changes['selectedRole'] && !changes['selectedRole'].firstChange) {
      this.patchRoleForm();
    }
  }

  patchRoleForm(): void {
    if (this.selectedRole) {
      this.roleForm.patchValue({
        roleName: this.selectedRole['name'], 
        roleDescription: this.selectedRole['description'] 
      });
    } else {
      this.roleForm.reset();
    }
  }


  allFieldsFilled(): boolean {
    return this.roleForm.valid;
  }

  onAddRole(): void {
    if (this.roleForm.valid) {
      this.onActionButtonClick.emit();
    }
  }

  checkForErrorsIn(field: string): string {
    const control = this.roleForm.get(field);
    if (control && control.touched && control.invalid) {
      if (control.errors?.['required']) {
        return 'This field is required.';
      }
    }
    return '';
  }

  onVisibleChange(event: boolean): void {
    this.visibleChange.emit(event);
  }
}
