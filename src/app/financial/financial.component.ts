import { MainContentTab } from './../core/main-content/main-content';
import { Component, OnInit } from '@angular/core';
import { financialChildren } from './financial-routing.module';

const tabs: MainContentTab[] = [
  {
    id: 'budget',
    label: 'Orçamento',
    link: '/financial/budget',
  },
  {
    id: 'credit-card',
    label: 'Cartões',
    link: '/financial/credit-card',
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
