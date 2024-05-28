import { Component, EventEmitter, Output, Input } from '@angular/core';

@Component({
  selector: 'app-delete-confirmation',
  templateUrl: './delete-confirmation.component.html',
  styleUrls: ['./delete-confirmation.component.scss']
})
export class DeleteConfirmationComponent {
  @Input() visible: boolean = false;
  @Output() visibleChange: EventEmitter<boolean> = new EventEmitter<boolean>();
  
  @Input() space: any;
  @Output() onConfirm = new EventEmitter<void>();
  @Output() onCancel = new EventEmitter<void>();

  confirmDelete() {
    this.onConfirm.emit();
    this.visibleChange.emit(false);
  }

  cancelDelete() {
    this.onCancel.emit();
    this.visibleChange.emit(false);
  }
}