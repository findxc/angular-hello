import {
  Component,
  Input,
  Output,
  EventEmitter,
  OnInit,
  OnChanges,
} from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

import { User } from '../list/list.component';

@Component({
  selector: 'app-user-edit-modal',
  templateUrl: './user-edit-modal.component.html',
  styleUrls: ['./user-edit-modal.component.css'],
})
export class UserEditModalComponent implements OnInit, OnChanges {
  constructor(private fb: FormBuilder) {}

  form!: FormGroup;

  @Input() visible = false;
  @Input() detail: User = {};
  @Output() onCancelEvent = new EventEmitter();
  @Output() onOkEvent = new EventEmitter();

  onCancel() {
    this.onCancelEvent.emit();
  }

  onOk() {
    if (!this.form.valid) {
      Object.values(this.form.controls).forEach((control) => {
        if (control.invalid) {
          control.markAsDirty();
          control.updateValueAndValidity({ onlySelf: true });
        }
      });
      return;
    }

    // TODO 发请求
    console.log('submit', this.form.value);
    this.onOkEvent.emit();
  }

  ngOnInit(): void {
    this.form = this.fb.group({
      name: [null, [Validators.required]],
      gender: [null, [Validators.required]],
      email: [null, [Validators.required]],
    });
  }

  ngOnChanges() {
    if (this.visible) {
      this.form.reset({
        name: this.detail.name ?? null,
        gender: this.detail.gender ?? null,
        email: this.detail.email ?? null,
      });
    }
  }
}
