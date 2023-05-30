import { Component } from '@angular/core';
import links from './nav-item';
import { Router } from '@angular/router';


@Component({
  selector: 'app-toolbar',
  templateUrl: './toolbar.component.html',
  styleUrls: ['./toolbar.component.scss']
})
export class ToolbarComponent {
  showFiller = false;

  links = links;


  constructor (
    private router: Router
  ){
  }

  logout (): void {
    this.router.navigate (['login']);
    localStorage.removeItem('token');

  }
}


