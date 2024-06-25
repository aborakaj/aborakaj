import { Component, Input, OnInit, Output, EventEmitter, OnChanges } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-add-space-modal',
  templateUrl: './add-space-modal.component.html',
  styleUrls: ['./add-space-modal.component.scss']
})
export class AddSpaceModalComponent implements OnInit, OnChanges {
  spaceForm!: FormGroup;
  @Input() actionButtonLabel: string = '';
  @Input() header: string = '';
  @Input() visible: boolean = false;
  @Input() isEditMode: boolean = false;
  @Input() selectedSpace: any;
  @Output() addRoomClick = new EventEmitter<any>();
  @Output() visibleChange = new EventEmitter<boolean>();

  showAdditionalSettings: boolean = false;
  predefinedTags: string[] = ['All In', 'Design', 'HR', 'Dev', 'Visitor'];

  deskOptions: any[] = [
    { label: 'Table', value: 'Table' }
  ];

  constructor(private fb: FormBuilder) {}

  ngOnInit() {
    this.spaceForm = this.fb.group({
      spaceName: ['', Validators.required],
      spaceDescription: [''],
      numberOfDesks: [1, [Validators.required, Validators.min(1)]],
      tags: [[]], 
      floor: [1],
      table: [1],
      deskName: ['']
    });
  
    this.updateHeader();
    this.updateForm();
  }

  ngOnChanges() {
    this.updateForm();
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
        numberOfDesks: this.selectedSpace.numberOfDesks,
        tags: this.selectedSpace.tags || [],  
        floor: this.selectedSpace.floor,
        table: this.selectedSpace.table,
        deskName: this.selectedSpace.deskName,
      });
    } else {
      this.spaceForm.reset({ numberOfDesks: 1, floor: 1, table: 1 });
      this.spaceForm.get('tags')?.patchValue(this.predefinedTags);
    }
  }

  onAddRoom() {
    if (this.spaceForm.valid) {
      this.addRoomClick.emit(this.spaceForm.value);
      this.onVisibleChange(false);
    }
  }

  onVisibleChange(event: boolean) {
    this.visibleChange.emit(event);
    if (!event) {
      this.spaceForm.reset({ numberOfDesks: 1, floor: 1, table: 1 });
      this.isEditMode = false;
      this.selectedSpace = null;
      this.updateHeader();
    }
  }

  get allFieldsFilled(): boolean {
    return this.spaceForm.get('spaceName')?.valid ?? false;
  }

  toggleAdditionalSettings() {
    this.showAdditionalSettings = !this.showAdditionalSettings;
  }

  get additionalSettingsButtonLabel() {
    return this.showAdditionalSettings ? 'Close' : 'Additional settings';
  }

  checkForErrorsIn(controlName: string): string {
    const control = this.spaceForm.get(controlName);
    if (!control) return '';
    if (controlName === 'spaceName' && control.hasError('required')) {
      return 'Field is required';
    }
    return '';
  }

  removeTag(tag: string) {
    const tagsArray = this.spaceForm.get('tags') as any;
    const currentTags = tagsArray.value.filter((t: string) => t !== tag);
    tagsArray.setValue(currentTags);
  }

}
