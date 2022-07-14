import {
  Component,
  ElementRef,
  ViewChild,
  ViewChildren,
  QueryList,
  Directive,
  ContentChildren,
  Input,
  TemplateRef,
} from '@angular/core'
import { MyCardComponent } from '@shared/components/my-card/my-card.component'

@Component({
  template: `
    <div>hello, {{ version }}</div>
    <app-my-card #card title="card 1">
      <div #aaa *card-content>content 1</div>
      <div #aaa *card-content>content 2</div>
      <!-- <div card-content>content 2</div> -->
    </app-my-card>
    <!-- <app-my-card #card title="card 2"></app-my-card> -->
  `,
  styleUrls: ['./welcome.component.css'],
})
export class WelcomeComponent {
  version = APP_VERSION

  @ViewChildren('aaa') private card!: ElementRef

  //   @ViewChildren(MyCardComponent) cards!: MyCardComponent

  //   @ViewChild('fixedEl', { static: true }) private fixedEl!: ElementRef<HTMLDivElement>;

  //   @ViewChild('content', { static: false }) content?: ElementRef;

  //   @ViewChild(TemplateRef, { static: false }) template?: TemplateRef<{}>;

  //   template: `
  //   <ng-template>
  //     <ng-content></ng-content>
  //   </ng-template>
  // `

  constructor() {}

  ngAfterViewInit() {
    // console.log(this.card)
    // setTimeout(() => {
    //   this.myCard.setTitle('123')
    // }, 0);
  }
}
