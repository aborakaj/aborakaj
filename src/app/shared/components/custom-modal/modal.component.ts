import { Component, EventEmitter, Input, Output } from '@angular/core';

@Component({
  selector: 'app-modal',
  templateUrl: './modal.component.html',
  styleUrls: ['./modal.component.scss'],
})
export class ModalComponent {
  private defaultStyles: object = { width: '640px' }

  @Input() actionButtonLabel: string = '';
  @Input() isDisplayModal: boolean = false;
  @Input() isActionButtonDisabled?: boolean = false;
  @Input() header?: string;
  @Input() set style(incomingStyles: object) {
    this.defaultStyles = { ...this.defaultStyles, ...incomingStyles };
  }

  @Output() onActionButtonClick = new EventEmitter<void>();
  @Output() close = new EventEmitter<void>();

  get style(): object {
    return this.defaultStyles;
  }

  handleActionButtonClick() {
    this.onActionButtonClick.emit();
  }

  onCancelButtonClick() {
    this.close.emit();
  }
}
