import {
  Component,
  ElementRef,
  ViewChild,
  ViewChildren,
  QueryList,
} from '@angular/core'
import { MyCardComponent } from '@shared/components/my-card/my-card.component'

@Component({
  template: `
    <div>hello, {{ version }}</div>
    <app-my-card #card title="111">
      <div *appCardContent>11</div>
      <div *appCardContent>22</div>
    </app-my-card>
    <app-my-card #card title="222"></app-my-card>
  `,
  styleUrls: ['./welcome.component.css'],
})
export class WelcomeComponent {
  version = APP_VERSION

  @ViewChildren('card') private card!: ElementRef

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
    console.log(this.card)
    // setTimeout(() => {
    //   this.myCard.setTitle('123')
    // }, 0);
  }
}
