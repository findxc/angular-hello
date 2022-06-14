import { NgModule } from '@angular/core'
import { SharedModule } from '@shared/shared.module'
import { UserRoutingModule } from './user-routing.module'
import { ListComponent } from './list/list.component'
import { LogComponent } from './log/log.component'
import { UserEditModalComponent } from './user-edit-modal/user-edit-modal.component'

@NgModule({
  declarations: [ListComponent, LogComponent, UserEditModalComponent],
  imports: [UserRoutingModule, SharedModule],
})
export class UserModule {}
