import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-space-modal',
  templateUrl: './add-space-modal.component.html',
  styleUrls: ['./add-space-modal.component.scss']
})
export class AddSpaceModalComponent implements OnInit {
  spaceForm!: FormGroup;
  isDisplayModal = false;
  title = 'Add Space';

  constructor(private formBuilder: FormBuilder) { }

  ngOnInit(): void {
    this.initializeForm();
  }

  initializeForm(): void {
    this.spaceForm = this.formBuilder.group({
      sname: ['', Validators.required],
      description: ['', Validators.required]
    });
  }

  onSubmitSpace(): void {
    
    console.log('Space submitted:', this.spaceForm.value);
    
    this.spaceForm.reset();
    this.isDisplayModal = false;
  }

  onSpaceModalClose(): void {
    console.log('Space modal closed');
    this.spaceForm.reset();
  }

}