import { Component } from '@angular/core';
import { ActivatedRoute, UrlSegment } from '@angular/router';
import { Router } from '@angular/router';
import { LogService } from '../services/logging/log.service';

@Component({
  selector: 'app-permlink',
  templateUrl: './permlink.component.html',
  styleUrls: ['./permlink.component.css']
})
export class PermlinkComponent {
  location: string | null | undefined;

  constructor(private logger: LogService, private activeRoute: ActivatedRoute, private router: Router) {
/*
    this.logger.log('PermlinkComponent - route data: ' + JSON.stringify(activeRoute.data));
    this.logger.log('PermlinkComponent - route firstChild: ' + JSON.stringify(activeRoute.firstChild));
    this.logger.log('PermlinkComponent - route fragment: ' + JSON.stringify(activeRoute.fragment));
    this.logger.log('PermlinkComponent - route outlet: ' + JSON.stringify(activeRoute.outlet));
    */
    this.logger.log('PermlinkComponent - route url: ' + JSON.stringify(activeRoute.url));
    this.logger.log('PermlinkComponent - route paramMap: ' + JSON.stringify(activeRoute.paramMap));
    this.logger.log('PermlinkComponent - route queryParamMap: ' + JSON.stringify(activeRoute.queryParamMap));

    let urlvalue: string = '';
    activeRoute.url.forEach((value: UrlSegment[]) => {
      urlvalue = urlvalue + '/' + value;
    })

    this.logger.log('PermlinkComponent - url: ' + urlvalue);
  }

  ngOnInit() {
    this.activeRoute.paramMap.subscribe(params => {
      this.location = params.get('location');
      this.logger.log('PermlinkComponent - received location: ', this.location);
    });

    if (this.location) {
      this.logger.log('PermlinkComponent - redirect route to: ', this.location);
      this.gotoRoute(this.location);
    }
  }

  gotoRoute(location: string) {
    this.router.navigate([location]);
  }
}
