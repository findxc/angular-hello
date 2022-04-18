import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { UserRoutingModule } from './user-routing.module';
import { ListComponent } from './list/list.component';
import { LogComponent } from './log/log.component';


@NgModule({
  declarations: [
    ListComponent,
    LogComponent
  ],
  imports: [
    CommonModule,
    UserRoutingModule
  ]
})
export class UserModule { }
