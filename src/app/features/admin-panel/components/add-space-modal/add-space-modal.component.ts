import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-add-space-modal',
  templateUrl: './add-space-modal.component.html',
  styleUrls: ['./add-space-modal.component.scss']
})
export class AddSpaceModalComponent implements OnInit {
  spaceForm!: FormGroup;
  @Input() visible: boolean=true;
  @Input() actionButtonLabel!: string;
  @Input() title!: string ;
  @Output() addRoomClick = new EventEmitter<void>();
  @Output() visibleChange: EventEmitter<boolean> = new EventEmitter<boolean>();

  constructor(private fb: FormBuilder) { }

  ngOnInit() {
    this.spaceForm = this.fb.group({
      spaceName: ['', Validators.required],
      spaceDescription: ['']
    });
  }

  onAddRoom() {
      this.addRoomClick.emit();
  }

  onVisibleChange(event: boolean) {
    this.visibleChange.emit(event);
    if (!event) {
      this.spaceForm.reset();
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