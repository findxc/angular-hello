import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  templateUrl: './layout.component.html',
  styleUrls: ['./layout.component.css'],
})
export class LayoutComponent {
  isCollapsed = false;

  constructor(private router: Router) {}

  onClickLogout() {
    this.router.navigate(['login']);
  }
}
