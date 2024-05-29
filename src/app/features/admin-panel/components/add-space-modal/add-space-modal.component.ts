import {
  Component,
  EventEmitter,
  Input,
  OnInit,
  Output,
  OnChanges,
  SimpleChanges,
} from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-add-space-modal',
  templateUrl: './add-space-modal.component.html',
  styleUrls: ['./add-space-modal.component.scss'],
})
export class AddSpaceModalComponent implements OnInit, OnChanges {
  spaceForm!: FormGroup;
  @Input() actionButtonLabel: string = '';
  @Input() header: string = '';
  @Input() visible: boolean = false;
  @Input() isEditMode: boolean = false;
  @Input() selectedSpace: any;
  @Output() addRoomClick = new EventEmitter<{
    spaceName: string;
    spaceDescription: string;
  }>();
  @Output() visibleChange: EventEmitter<boolean> = new EventEmitter<boolean>();

  constructor(private fb: FormBuilder) {}

  ngOnInit() {
    this.spaceForm = this.fb.group({
      spaceName: ['', Validators.required],
      spaceDescription: [''],
    });
    this.updateHeader();
    this.updateForm();
  }

  ngOnChanges(changes: SimpleChanges) {
    if (changes['selectedSpace']) {
      this.updateForm();
    }
  }

  updateHeader() {
    this.header = this.isEditMode ? 'Edit Space' : 'Add Space';
    this.actionButtonLabel = this.isEditMode ? 'Save Changes' : 'Add Room';
  }

  updateForm() {
    if (this.isEditMode && this.selectedSpace) {
      this.spaceForm.patchValue({
        spaceName: this.selectedSpace.name,
        spaceDescription: this.selectedSpace.description,
      });
    } else {
      this.spaceForm.reset();
    }
  }

  onAddRoom() {
    if (this.spaceForm.valid) {
      const spaceName = this.spaceForm.get('spaceName')?.value;
      const spaceDescription = this.spaceForm.get('spaceDescription')?.value;
      this.addRoomClick.emit({ spaceName, spaceDescription });
      this.onVisibleChange(false);
    }
  }

  onVisibleChange(event: boolean) {
    this.visibleChange.emit(event);
    if (!event) {
      this.spaceForm.reset();
      this.isEditMode = false;
      this.selectedSpace = null;
      this.updateHeader();
    }
  }

  checkForErrorsIn(controlName: string): string {
    const control = this.spaceForm.get(controlName);
    if (!control) return '';
    if (controlName === 'spaceName' && control.hasError('required')) {
      return 'Field is required';
    }
    return '';
  }

  allFieldsFilled(): boolean {
    return this.spaceForm.get('spaceName')?.valid ?? false;
  }
}
