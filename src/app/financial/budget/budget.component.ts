import { MainContentService } from './../../core/main-content/main-content.service';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

import { AlertService } from 'src/app/shared/components/alert/alert.service';

@Component({
  templateUrl: './budget.component.html',
  styleUrls: ['./budget.component.scss'],
})
export class BudgetComponent implements OnInit {
  constructor() {}

  ngOnInit(): void {

  }
}
