import { MainContentTab } from './../core/main-content/main-content';
import { Component, OnInit } from '@angular/core';
//import { financialChildren } from './financial-routing.module';

const financialChildren = [
  {
    path: 'budget',
    data: {
      title: 'Orçamento',
      tab: 'budget',
    },
  },
  {
    path: 'credit-card',
    data: {
      title: 'Cartões',
      tab: 'credit-card',
    },
  },
];

@Component({
  templateUrl: './financial.component.html',
  styleUrls: ['./financial.component.scss'],
})
export class FinancialComponent implements OnInit {
  tabs = financialChildren.map((child) => ({
    id: child.path,
    label: child?.data.title,
    link: '/financial/' + child.path,
  }));

  constructor() {}

  ngOnInit(): void {}
}
