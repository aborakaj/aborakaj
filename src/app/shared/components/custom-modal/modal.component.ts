import { Component, EventEmitter, Input, Output } from '@angular/core';

@Component({
  selector: 'app-modal',
  templateUrl: './modal.component.html',
  styleUrls: ['./modal.component.scss'],
})
export class ModalComponent {
  @Input() actionButtonLabel: string = '';
  @Input() isDisplayModal: boolean = false;
  @Input() isActionButtonDisabled?: boolean = false;
  @Input() style?: object;
  @Input() header?: string;


  @Output() onActionButtonClick = new EventEmitter<void>();
  @Output() close = new EventEmitter<void>();

  handleActionButtonClick() {
    this.onActionButtonClick.emit();
  }

  onCancelButtonClick() {
    this.close.emit();
  }
}
