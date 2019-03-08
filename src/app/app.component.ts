import { Component, OnInit } from '@angular/core';
import { LayoutService } from './shared/services/layout.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.less']
})
export class AppComponent implements OnInit{
  isLayoutVisible = false;

  constructor(
    private layoutService: LayoutService
  ) { }

  ngOnInit() {
    this.layoutService.layoutVisibleSource$.subscribe(
      (isVisible) => this.isLayoutVisible = isVisible
    );
  }
}
