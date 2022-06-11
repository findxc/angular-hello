import { NgModule } from '@angular/core'
import { CommonModule } from '@angular/common'
import { ReactiveFormsModule } from '@angular/forms'
import { NzTableModule } from 'ng-zorro-antd/table'
import { NzModalModule } from 'ng-zorro-antd/modal'
import { NzButtonModule } from 'ng-zorro-antd/button'
import { NzFormModule } from 'ng-zorro-antd/form'
import { NzInputModule } from 'ng-zorro-antd/input'

import { UserRoutingModule } from './user-routing.module'
import { ListComponent } from './list/list.component'
import { LogComponent } from './log/log.component'
import { UserEditModalComponent } from './user-edit-modal/user-edit-modal.component'

@NgModule({
  declarations: [ListComponent, LogComponent, UserEditModalComponent],
  imports: [
    CommonModule,
    ReactiveFormsModule,
    UserRoutingModule,
    NzTableModule,
    NzModalModule,
    NzButtonModule,
    NzFormModule,
    NzInputModule,
  ],
})
export class UserModule {}
