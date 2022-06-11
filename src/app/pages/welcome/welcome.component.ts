import { Component, OnInit } from '@angular/core'

@Component({
  templateUrl: './welcome.component.html',
  styleUrls: ['./welcome.component.css'],
})
export class WelcomeComponent implements OnInit {
  version = APP_VERSION

  constructor() {}

  ngOnInit() {}
}
