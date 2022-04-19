import { Component } from '@angular/core';
import { NzTableQueryParams } from 'ng-zorro-antd/table';

export interface User {
  id?: string;
  name?: string;
  gender?: string;
  email?: string;
}

@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.css'],
})
export class ListComponent {
  list: User[] = [];
  loading = true;
  total = 0;
  pageSize = 10;
  pageIndex = 1;

  editModalVisible = false;
  editDetail: User = {};

  onQueryParamsChange(params: NzTableQueryParams): void {
    const { pageSize, pageIndex } = params;
    this.fetchList(pageIndex, pageSize);
  }

  fetchList(pageIndex: number, pageSize: number) {
    this.loading = true;
    this.pageIndex = pageIndex;
    this.pageSize = pageSize;

    setTimeout(() => {
      this.list = new Array(10).fill('').map((_, index) => {
        const id = String(index + 1 + pageSize * (pageIndex - 1));
        return {
          id,
          name: `name${id}`,
          gender: `gender${id}`,
          email: `email${id}`,
        };
      });
      this.total = 25;
      this.loading = false;
    }, 500);
  }

  onClickEdit(detail: User) {
    this.editDetail = detail;
    this.editModalVisible = true;
  }

  onCancelEdit() {
    this.editModalVisible = false;
  }

  onSuccessEdit() {
    this.editModalVisible = false;
    this.fetchList(this.editDetail.id ? this.pageIndex : 1, this.pageSize);
  }
}
