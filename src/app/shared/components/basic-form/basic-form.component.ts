import { Component, Input, OnInit, TemplateRef } from '@angular/core'
import { FormBuilder, FormGroup, Validators } from '@angular/forms'
import { NzSelectOptionInterface } from 'ng-zorro-antd/select'

function replaceMessage(template: string, kv: any) {
  return template.replace(/\$\{([a-z]+)\}/gi, (match, p1) => kv[p1])
}

const validateMessageMap: { [key: string]: string } = {
  required: "'${label}' is required",
  email: "'${label}' is not a valid email",
  min: "'${label}' cannot be less than ${min}",
  max: "'${label}' cannot be greater than ${max}",
  minlength: "'${label}' cannot be less than ${requiredLength} in length",
  maxlength: "'${label}' cannot be greater than ${requiredLength} in length",
  pattern: "'${label}' does not match pattern ${requiredPattern}",
}

export interface FormItem {
  key: string
  label?: string
  labelTemplate?: TemplateRef<any>
  type: string
  validators?: Validators[]
  options?: NzSelectOptionInterface[]
  hidden?: boolean
}

// TODO 支持自定义的异步校验
@Component({
  selector: 'app-basic-form',
  templateUrl: './basic-form.component.html',
  styleUrls: ['./basic-form.component.css'],
})
export class BasicFormComponent implements OnInit {
  requiredValidator = Validators.required

  @Input() items: FormItem[] = []
  @Input() labelSpan: number = 6
  @Input() controlSpan: number = 14

  formLabelMap: { [key: string]: string } = {}

  form!: FormGroup

  constructor(private fb: FormBuilder) {}

  ngOnInit(): void {
    this.formLabelMap = this.items.reduce((total: any, current: any) => {
      const { key, label } = current
      total[key] = label
      return total
    }, {})

    const formGroup = this.items.reduce((total: any, current: any) => {
      const { key, validators = [] } = current
      total[key] = [undefined, validators]
      return total
    }, {})
    this.form = this.fb.group(formGroup)
  }

  parseErrorTip(formKey: string) {
    const { errors } = this.form.controls[formKey]

    if (!errors) {
      return ''
    }

    const errorKey = Object.keys(errors)[0]
    const errorValue = errors[errorKey]
    const label = this.formLabelMap[formKey]

    const template = validateMessageMap[errorKey]
    if (template) {
      const msg = replaceMessage(template, {
        label,
        ...(typeof errorValue === 'object' ? errorValue : {}),
      })
      return msg
    }

    return typeof errorValue === 'string'
      ? errorValue
      : JSON.stringify(errorValue)
  }

  // don't use this.form.valid, because hidden fields still affect form.valid
  validateFields() {
    const values: any = {}
    let errors: any = undefined

    this.items
      .filter(x => !x.hidden)
      .forEach(item => {
        const { key } = item
        const control = this.form.controls[key]
        values[key] = control.value
        if (control.invalid) {
          if (!errors) {
            errors = {}
          }
          errors[key] = control.errors
          control.markAsDirty()
          control.updateValueAndValidity({ onlySelf: true })
        }
      })

    return { values, errors }
  }
}
