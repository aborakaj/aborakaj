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
  @Input() style?: any;
  @Input() header?: string;


  @Output() onActionButtonClick = new EventEmitter<void>();
  @Output() close = new EventEmitter<void>();

  ngOnInit() {

    if (!this.style) {
      this.style = { width: '640px' };
    } else if (!this.style.width) {
      this.style = { ...this.style, width: '640px' };
    }
  }

  handleActionButtonClick() {
    this.onActionButtonClick.emit();
  }

  onCancelButtonClick() {
    this.close.emit();
  }
}
