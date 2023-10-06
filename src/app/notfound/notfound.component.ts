import { Component } from '@angular/core';
import { LogService } from '../services/logging/log.service';
import { ActivatedRoute, Router, UrlSegment } from '@angular/router';

@Component({
  selector: 'app-notfound',
  templateUrl: './notfound.component.html',
  styleUrls: ['./notfound.component.css']
})
export class NotfoundComponent {
  constructor(private logger: LogService, private activeRoute: ActivatedRoute, private router: Router) {
    logger.log('route data: ' + JSON.stringify(activeRoute.data));
    logger.log('route firstChild: ' + JSON.stringify(activeRoute.firstChild));
    logger.log('route fragment: ' + JSON.stringify(activeRoute.fragment));
    logger.log('route outlet: ' + JSON.stringify(activeRoute.outlet));
    logger.log('route paramMap: ' + JSON.stringify(activeRoute.paramMap));
    logger.log('route queryParamMap: ' + JSON.stringify(activeRoute.queryParamMap));
    let urlvalue: string = '';
    activeRoute.url.forEach((value: UrlSegment[]) => {
      //urlvalue = urlvalue + '/' + value;
      value.forEach((segment) =>  {
        urlvalue = urlvalue + '/'+ segment;
      })
    })
    logger.log('url: ' + urlvalue);
  }
}
