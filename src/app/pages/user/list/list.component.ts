import { Component, OnInit } from '@angular/core';
import { NzTableQueryParams } from 'ng-zorro-antd/table';

interface User {
  id: string;
  name: string;
  gender: string;
  email: string;
}

@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.css'],
})
export class ListComponent implements OnInit {
  list: User[] = [];
  loading = true;
  total = 0;
  pageSize = 10;
  pageIndex = 1;

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

  constructor() {}

  ngOnInit(): void {}
}
