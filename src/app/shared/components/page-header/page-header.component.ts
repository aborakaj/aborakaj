import { Component, EventEmitter, Input, Output } from '@angular/core';

@Component({
  selector: 'app-page-header',
  templateUrl: './page-header.component.html',
  styleUrl: './page-header.component.scss'
})
export class PageHeaderComponent {

  @Input() title!: string;
  @Input() subtitle!: string;
  @Input() actionButtonLabel!: string;
  @Input() actionButtonIcon!: string;
  @Output() actionButtonClick: EventEmitter<void> = new EventEmitter<void>();

  onActionButtonClick() {
    this.actionButtonClick.emit();
  }
}



