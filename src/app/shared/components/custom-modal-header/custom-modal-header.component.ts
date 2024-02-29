import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-custom-modal-header',
  templateUrl: './custom-modal-header.component.html',
  styleUrl: './custom-modal-header.component.scss'
})
export class CustomModalHeaderComponent {
  @Input() title: string = ''; 
  @Input() icon?: string; 
  @Input() subtitle?: string;
}
