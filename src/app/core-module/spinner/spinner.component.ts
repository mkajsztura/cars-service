import { Component, OnInit} from '@angular/core';
import { Router, NavigationStart, NavigationEnd, NavigationCancel, NavigationError } from '@angular/router';

@Component({
  selector: 'cs-spinner',
  templateUrl: './spinner.component.html',
  styleUrls: ['./spinner.component.less']
})
export class SpinnerComponent implements OnInit {
  isLoaderVisible = false;
  constructor(
    private router: Router
  ) { }

  ngOnInit() {
    this.router.events.subscribe((routerEvent) => this.checkRouterEvents(routerEvent));
  }

  private checkRouterEvents (routerEvent) {
    if (routerEvent instanceof NavigationStart) {
      this.isLoaderVisible = true;
    } else if (
        routerEvent instanceof NavigationEnd ||
        routerEvent instanceof NavigationCancel ||
        routerEvent instanceof NavigationError
      ) {
        this.isLoaderVisible = false;
      }
  }
}
