import { LoadingService } from './../../shared/components/loading/loading.service';
import { AlertService } from './../../shared/components/alert/alert.service';
import { Component, OnInit } from '@angular/core';

const menuItens = [
  {
    label: 'Financeiro',
    icon: 'monetization_on',
    link: 'financial',
    active: true,
  },
  {
    label: 'Compras',
    icon: 'shopping_cart',
    link: 'shopping',
  },
  {
    label: 'Saúde',
    icon: 'directions_run',
    link: 'health',
  },
];

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss'],
})
export class HeaderComponent implements OnInit {
  menuItens = menuItens;

  constructor() {}

  ngOnInit(): void {}
}
