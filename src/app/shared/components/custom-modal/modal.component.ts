import { Component, EventEmitter, Input, Output } from '@angular/core';

@Component({
  selector: 'app-modal',
  templateUrl: './modal.component.html',
  styleUrls: ['./modal.component.scss'],
})
export class ModalComponent {

  private defaultStyles: object = { width: '640px' };

  @Input() actionButtonLabel!: string;
  @Input() visible!: boolean;
  @Input() isActionButtonDisabled?: boolean;
  @Input() header?: string;
  @Input() set style(incomingStyles: object) {
    this.defaultStyles = { ...this.defaultStyles, ...incomingStyles };
  }
  @Output() onActionButtonClick = new EventEmitter<void>();
  @Output() visibleChange: EventEmitter<boolean> = new EventEmitter<boolean>();

  get style(): object {
    return this.defaultStyles;
  }

  handleActionButtonClick() {
    this.onActionButtonClick.emit();
  }

  onChangeVisibility(value:boolean) {
    this.visibleChange.emit(value);
  }
}
