import {
  Component,
  Input,
  OnInit,
  ContentChildren,
  QueryList,
} from '@angular/core'
import { CardContentDirective } from '../../directives/card-content.directive'

@Component({
  selector: 'app-my-card',
  templateUrl: './my-card.component.html',
  styleUrls: ['./my-card.component.css'],
})
export class MyCardComponent implements OnInit {
  @Input() title!: string

  @ContentChildren(CardContentDirective) contents!: CardContentDirective

  ngAfterViewInit() {
    console.log(this.contents)
    // setTimeout(() => {
    //   this.myCard.setTitle('123')
    // }, 0);
  }

  setTitle(title: string) {
    this.title = title
  }

  constructor() {}

  ngOnInit(): void {}
}
