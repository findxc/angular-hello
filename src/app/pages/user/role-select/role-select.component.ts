import { HttpClient } from '@angular/common/http'
import { Component, OnInit } from '@angular/core'
import { NG_VALUE_ACCESSOR } from '@angular/forms'
import { NzSelectOptionInterface } from 'ng-zorro-antd/select'
import { CustomFormControl } from '@utils/custom-form-control'

interface Role {
  id: number
  name: string
}

@Component({
  selector: 'app-role-select',
  templateUrl: './role-select.component.html',
  styleUrls: ['./role-select.component.css'],
  providers: [
    {
      provide: NG_VALUE_ACCESSOR,
      multi: true,
      useExisting: RoleSelectComponent,
    },
  ],
})
export class RoleSelectComponent extends CustomFormControl implements OnInit {
  options: NzSelectOptionInterface[] = []

  constructor(private http: HttpClient) {
    super()
  }

  ngOnInit(): void {
    this.http.get('api/role').subscribe((res: any) => {
      this.options = res.map((item: Role) => ({
        label: item.name,
        value: item.id,
      }))
    })
  }
}
