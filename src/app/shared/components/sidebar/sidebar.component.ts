import { Component, EventEmitter, Output } from '@angular/core';

@Component({
  selector: 'app-sidebar',
  templateUrl: './sidebar.component.html',
  styleUrl: './sidebar.component.scss'
})

export class SidebarComponent {
  @Output() onCogIconClicked: EventEmitter<void> = new EventEmitter();

  onSettingsClick() {
    this.onCogIconClicked.emit();
  }
}
