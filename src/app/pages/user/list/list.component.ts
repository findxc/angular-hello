import { Component } from '@angular/core';
import { NzTableQueryParams } from 'ng-zorro-antd/table';
import { HttpClient } from '@angular/common/http';

export interface User {
  id?: number;
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

  constructor(private http: HttpClient) {}

  onQueryParamsChange(params: NzTableQueryParams): void {
    const { pageSize, pageIndex } = params;
    this.fetchList(pageIndex, pageSize);
  }

  fetchList(pageIndex: number, pageSize: number) {
    this.loading = true;
    this.pageIndex = pageIndex;
    this.pageSize = pageSize;

    this.http.get('api/user').subscribe((res: any) => {
      this.list = res.data;
      this.total = res.total;
      this.loading = false;
    });
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
