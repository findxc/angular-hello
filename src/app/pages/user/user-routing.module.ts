import { NgModule } from '@angular/core'
import { RouterModule, Routes } from '@angular/router'

import { ListComponent } from './list/list.component'
import { LogComponent } from './log/log.component'

const routes: Routes = [
  { path: '', component: ListComponent },
  { path: 'log/:id', component: LogComponent },
]

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class UserRoutingModule {}
