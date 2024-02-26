import { Component, EventEmitter, Input, Output } from '@angular/core';
import { FormGroup } from '@angular/forms';

@Component({
  selector: 'app-modal',
  templateUrl: './modal.component.html',
  styleUrls: ['./modal.component.scss'],
})
export class ModalComponent {
  @Input() title: string = '';
  @Input() actionLabel: string = '';
  @Input() form!: FormGroup; 
  @Input() display: boolean = false; 
  @Output() action = new EventEmitter<void>();
  @Output() close = new EventEmitter<void>();

  onClose() {
    this.display = false;
    this.close.emit();
  }
}
