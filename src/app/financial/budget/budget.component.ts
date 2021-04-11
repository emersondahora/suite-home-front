import { EntryFormComponent } from './entry-form/entry-form.component';
import { EntryType } from './entry/entry-type.enum';
import { AfterViewInit, Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

import { Entry } from './entry/entry';
import { EntryService } from './entry/entry.service';
import * as Bootstrap from 'bootstrap';

interface SummaryEntry {
  sum: number;
  received: number;
  receivable: number;
}

@Component({
  templateUrl: './budget.component.html',
  styleUrls: ['./budget.component.scss'],
})
export class BudgetComponent implements OnInit {
  entries: Entry[] = [];
  income: Entry[];
  incomeSumary: SummaryEntry;

  @ViewChild('entryForm') child: EntryFormComponent;

  constructor(private activatedRoute: ActivatedRoute, private entryService: EntryService) {}

  ngOnInit(): void {
    // private activatedRoute: ActivatedRoute,
    this.entries = this.activatedRoute.snapshot.data.entries;
    this.processEntries();
  }

  private summarizeEntries(entries: Entry[]): SummaryEntry {
    const summaryInitial = {
      sum: 0,
      received: 0,
      receivable: 0,
    } as SummaryEntry;
    return entries.reduce((total, current) => {
      total.sum += current.amount;
      current.accomplished ? (total.received += current.amount) : (total.receivable += current.amount);
      return total;
    }, summaryInitial);
  }
  private processEntries(): void {
    this.income = this.entries.filter((entry) => entry.type === EntryType.INCOME);
    this.incomeSumary = this.summarizeEntries(this.income);
  }

  entryTrClass(entry: Entry): string {
    if (!entry.amountDefined) {
      return 'table-secondary';
    } else if (entry.accomplished) {
      return 'table-success';
    } else {
      return 'table-warning';
    }
  }

  openIncomeForm(): void {
    this.openFormEntry(EntryType.INCOME);
  }
  openFormEntry(entryType: EntryType): void {
    this.child.open(entryType);
  }
}
