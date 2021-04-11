import { EntryService } from './../entry/entry.service';
import { AfterViewInit, Component, ElementRef, OnInit, SimpleChanges, ViewChild } from '@angular/core';
import { startOfMonth, format } from 'date-fns';

import { EntryType } from './../entry/entry-type.enum';
import { Modal } from 'bootstrap';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Entry } from '../entry/entry';

const labels = {
  income: {
    title: 'Adicionar despesas',
  },
};

@Component({
  selector: 'shm-entry-form',
  templateUrl: './entry-form.component.html',
  styleUrls: ['./entry-form.component.scss'],
})
export class EntryFormComponent implements AfterViewInit, OnInit {
  title: string;
  entryType: EntryType = null;

  entry = {} as Entry;

  @ViewChild('entryFormModal') entryFormModalDiv: ElementRef<HTMLDivElement>;
  entryFormModal: Modal;

  entryForm: FormGroup;

  constructor(private formBuilder: FormBuilder, private entryService: EntryService) {}

  ngOnInit(): void {
    this.entryForm = this.formBuilder.group({
      expectedDate: ['', Validators.required],
      description: ['', Validators.required],
      amount: ['', [Validators.required]],
      amountDefined: [true],
      accomplished: [''],
    });
    this.entryForm.get('amountDefined').valueChanges.subscribe({
      next: (checked) => {
        const accomplished = this.entryForm.get('accomplished');
        if (checked) {
          accomplished.enable();
        } else {
          accomplished.disable();
          accomplished.setValue(false);
        }
      },
    });
  }

  ngAfterViewInit(): void {
    this.entryFormModal = new Modal(this.entryFormModalDiv.nativeElement);
  }

  open(entryType: EntryType, month: Date = new Date(), entry: Entry = {} as Entry): void {
    this.entryType = entryType;
    this.changeTitle();
    this.entryFormModal.show();
    this.entry.type = entryType;

    this.entry = {
      ...entry,
      description: 'Teste Vegano',
      expectedDate: new Date(),
      month: startOfMonth(month),
      type: entryType,
      amount: 5000,
      accomplished: true,
      amountDefined: true,
    };
    const expectedDate = format(this.entry.expectedDate, 'yyyy-MM-d');
    console.log(this.entry.expectedDate);
    console.log(expectedDate);
    this.entryForm.patchValue({ ...this.entry, expectedDate });
  }

  changeTitle(): void {
    this.title = this.entryType == EntryType.INCOME ? 'Adicionar Receita' : 'Adicionar Despesa';
  }

  save(): void {
    const entry = {
      ...this.entry,
      ...this.entryForm.getRawValue(),
    } as Entry;
    this.entryService.create(entry).subscribe({ next: (response) => console.log(response) });
  }
}
