import { Component } from '@angular/core';

@Component({
  selector: 'app-my-spaces',
  templateUrl: './my-spaces.component.html',
  styleUrl: './my-spaces.component.scss'
})
export class MySpacesComponent {
  ngOnInit() {
    console.log('MySpacesComponent loaded');
  }
}
