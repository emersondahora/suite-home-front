import {
  Component,
  OnInit,
  ChangeDetectionStrategy,
  Input,
} from '@angular/core';

import { MainContentTab } from './main-content';
import { MainContentService } from './main-content.service';

@Component({
  selector: 'shm-main-content',
  templateUrl: './main-content.component.html',
  styleUrls: ['./main-content.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class MainContentComponent implements OnInit {
  @Input() title: string;
  @Input() icon: string;
  @Input() tabs: MainContentTab[];

  activeTab: string;

  constructor(private service: MainContentService) {}

  ngOnInit(): void {
    this.service.getActiveTab().subscribe({
      next: (activeTab) => this.activeTab = activeTab,
    });
  }
}
