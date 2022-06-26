// reference: https://blog.angular-university.io/angular-custom-form-controls/

import { ControlValueAccessor } from '@angular/forms'

// when you want to custom a form control component, extends this, an example is RoleSelectComponent
export class CustomFormControl implements ControlValueAccessor {
  value: any
  disabled = false
  touched = false

  registeredOnChange = (value: any) => {}
  registeredOnTouched = () => {}

  onChange(value: any) {
    this.value = value
    this.registeredOnChange(value)
  }

  onBlur() {
    if (!this.touched) {
      this.touched = true
      this.registeredOnTouched()
    }
  }

  writeValue(value: any) {
    this.value = value
  }

  registerOnChange(onChange: any) {
    this.registeredOnChange = onChange
  }

  registerOnTouched(onTouched: any) {
    this.registeredOnTouched = onTouched
  }

  setDisabledState(disabled: boolean) {
    this.disabled = disabled
  }
}
