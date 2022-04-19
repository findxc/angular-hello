import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NzTabsModule } from 'ng-zorro-antd/tabs';

import { StatRoutingModule } from './stat-routing.module';
import { LayoutComponent } from './layout/layout.component';
import { AComponent } from './a/a.component';
import { BComponent } from './b/b.component';
import { CComponent } from './c/c.component';

@NgModule({
  declarations: [LayoutComponent, AComponent, BComponent, CComponent],
  imports: [CommonModule, StatRoutingModule, NzTabsModule],
})
export class StatModule {}
