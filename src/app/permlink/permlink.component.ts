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
    logger.log('route data: ' + JSON.stringify(activeRoute.data));
    logger.log('route firstChild: ' + JSON.stringify(activeRoute.firstChild));
    logger.log('route fragment: ' + JSON.stringify(activeRoute.fragment));
    logger.log('route outlet: ' + JSON.stringify(activeRoute.outlet));
    logger.log('route paramMap: ' + JSON.stringify(activeRoute.paramMap));
    logger.log('route queryParamMap: ' + JSON.stringify(activeRoute.queryParamMap));
    let urlvalue: string = '';
    activeRoute.url.forEach((value: UrlSegment[]) => {
      urlvalue = urlvalue + '/' + value;
    })
    logger.log('url: ' + urlvalue);
  }

  ngOnInit() {
    this.activeRoute.paramMap.subscribe(params => {
      this.location = params.get('location');
    });
    if (this.location) {
      this.logger.log('redirect rout to: ', this.location);
      this.gotoRoute(this.location);
    }
  }

  gotoRoute(location: string) {
    this.router.navigate([location]);
  }
}
