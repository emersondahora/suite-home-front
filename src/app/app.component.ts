import { MainContentService } from './core/main-content/main-content.service';
import { OnInit } from '@angular/core';
import { Component } from '@angular/core';
import { Title } from '@angular/platform-browser';
import { ActivatedRoute, NavigationEnd, Router } from '@angular/router';
import { Observable } from 'rxjs';
import { filter, map, switchMap, tap } from 'rxjs/operators';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent implements OnInit {
  constructor(
    private router: Router,
    private activatedRoute: ActivatedRoute,
    private titleService: Title,
    private mainContantService: MainContentService
  ) {}

  ngOnInit(): void {
    this.router.events
      .pipe(filter((event) => event instanceof NavigationEnd))
      .pipe(map(() => this.activatedRoute))
      .pipe(
        map((route) => {
          while (route.firstChild) {
            route = route.firstChild;
          }
          return route;
        })
      )
      .pipe(switchMap((route) => route.data))
      .subscribe({
        next: (event: any) => {
          this.titleService.setTitle(
            'Suite Home ' + (event.title && '- ' + event.title)
          );
          this.mainContantService.setActiveTab(event.tab);
        },
      });
  }
  setTitle(title: string): void {}
}
