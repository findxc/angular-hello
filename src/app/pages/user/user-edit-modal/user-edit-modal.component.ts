import { HttpClient } from '@angular/common/http'
import {
  Component,
  Input,
  Output,
  EventEmitter,
  ViewChild,
  TemplateRef,
  OnChanges,
  AfterViewInit,
} from '@angular/core'
import { Validators, AbstractControl, ValidationErrors } from '@angular/forms'
import {
  BasicFormComponent,
  FormItem,
} from '@shared/components/basic-form/basic-form.component'

import { User } from '../list/list.component'

function roleValidator(control: AbstractControl): ValidationErrors | null {
  if (control?.value === 'admin') {
    return { noAdmin: 'cannot select admin' }
  }
  return null
}

@Component({
  selector: 'app-user-edit-modal',
  templateUrl: './user-edit-modal.component.html',
  styleUrls: ['./user-edit-modal.component.css'],
})
export class UserEditModalComponent implements OnChanges, AfterViewInit {
  @Input() visible = false
  @Input() detail: User = {}
  @Output() onCancel = new EventEmitter()
  @Output() onSuccess = new EventEmitter()

  @ViewChild(BasicFormComponent)
  basicFormComponent!: BasicFormComponent

  @ViewChild('nameLabel')
  nameLabel!: TemplateRef<any>

  get form() {
    return this.basicFormComponent.form
  }

  okLoading = false

  constructor(private http: HttpClient) {}

  formItems: FormItem[] = []

  ngAfterViewInit() {
    // must set formItems after view init, otherwise labelTemplate is undefined
    this.formItems = [
      {
        key: 'name',
        labelTemplate: this.nameLabel,
        type: 'input',
        validators: [Validators.required],
      },
      {
        key: 'gender',
        label: 'Gender',
        type: 'select',
        options: [
          { label: 'male', value: 'male' },
          { label: 'female', value: 'female' },
        ],
      },
      {
        key: 'email',
        label: 'Email',
        type: 'input',
        validators: [
          Validators.required,
          Validators.email,
          Validators.maxLength(10),
        ],
      },
      {
        key: 'role',
        label: 'Role',
        type: 'custom',
        validators: [Validators.required, roleValidator],
      },
      {
        key: 'forMale',
        label: 'ForMale',
        type: 'input',
        validators: [Validators.required],
      },
    ]
  }

  ngOnChanges() {
    if (this.visible) {
      setTimeout(() => {
        this.form.valueChanges.subscribe(value => {
          const hiddenForMale = value?.gender !== 'male'
          const forMale = this.formItems.find(x => x.key === 'forMale')
          if (forMale?.hidden !== hiddenForMale) {
            // @ts-ignore
            forMale.hidden = hiddenForMale
          }
        })
        this.form.reset({ ...this.detail })
      }, 0)
    }
  }

  onOk() {
    const { values, errors } = this.basicFormComponent.validateFields()
    console.log({ values, errors })

    if (errors) {
      return
    }

    this.okLoading = true
    const request = this.detail.id
      ? this.http.put(`api/user/${this.detail.id}`, values)
      : this.http.post('api/user', values)
    request.subscribe({
      next: () => {
        this.onSuccess.emit()
        this.okLoading = false
      },
      error: () => {
        this.okLoading = false
      },
    })
  }
}
