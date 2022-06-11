import { NgModule } from '@angular/core'
import { CommonModule } from '@angular/common'
import { NzButtonModule } from 'ng-zorro-antd/button'

import { LoginRoutingModule } from './login-routing.module'
import { LoginComponent } from './login/login.component'

@NgModule({
  declarations: [LoginComponent],
  imports: [CommonModule, LoginRoutingModule, NzButtonModule],
})
export class LoginModule {}
