import {
  Component,
  Input,
  OnInit,
  ContentChildren,
  QueryList,
  TemplateRef,
  ContentChild,
  ElementRef,
  ChangeDetectionStrategy,
  ViewEncapsulation,
  Directive,
} from '@angular/core'

@Directive({
  selector: '[card-content]',
})
export class CardContentDirective {}

@Component({
  selector: 'app-my-card',
  // changeDetection: ChangeDetectionStrategy.OnPush,
  // encapsulation: ViewEncapsulation.None,
  template: `
    <ng-template
      ngFor
      let-item
      let-last="last"
      let-index="index"
      [ngForOf]="items"
    >
      <ng-container [ngTemplateOutlet]="item"></ng-container>
    </ng-template>
  `,
  styleUrls: ['./my-card.component.css'],
})
export class MyCardComponent {
  @Input() title!: string

  // @ContentChildren('aaa', { read: TemplateRef })
  // items!: QueryList<TemplateRef<any>>

  // @ContentChildren(CardContentDirective, {descendants: true}) items!: QueryList<any>;

  // @ContentChildren('aaa') items!: QueryList<any>
  @ContentChildren(CardContentDirective, { read: TemplateRef })
  items!: QueryList<TemplateRef<any>>

  // @ContentChildren('aaa') items!: QueryList<TemplateRef<any>>;

  ngAfterContentInit() {
    console.log(this.items)
    // setTimeout(() => {
    //   this.myCard.setTitle('123')
    // }, 0);
  }

  setTitle(title: string) {
    this.title = title
  }
}
