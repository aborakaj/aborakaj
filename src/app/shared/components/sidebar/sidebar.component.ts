import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-sidebar',
  templateUrl: './sidebar.component.html',
  styleUrl: './sidebar.component.scss'
})
export class SidebarComponent {

  constructor(private router: Router) { }

  defaultURL='localhost:4200/'
  url=''

  navigateToRoute(route:string){
  this.url=this.defaultURL + route
  this.router.navigate(['this.url']);
  }
  
}
