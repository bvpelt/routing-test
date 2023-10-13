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
    /*
    this.logger.log('NotfoundComponent - route data: ' + JSON.stringify(activeRoute.data));
    this.logger.log('NotfoundComponent - route firstChild: ' + JSON.stringify(activeRoute.firstChild));
    this.logger.log('NotfoundComponent - route fragment: ' + JSON.stringify(activeRoute.fragment));
    this.logger.log('NotfoundComponent - route outlet: ' + JSON.stringify(activeRoute.outlet));
    */
    this.logger.log('NotfoundComponent - route url: ' + JSON.stringify(activeRoute.url));
    this.logger.log('NotfoundComponent - route paramMap: ' + JSON.stringify(activeRoute.paramMap));
    this.logger.log('NotfoundComponent - route queryParamMap: ' + JSON.stringify(activeRoute.queryParamMap));
    
    let urlvalue: string = '';
    
    activeRoute.url.forEach((value: UrlSegment[]) => {
      //urlvalue = urlvalue + '/' + value;
      value.forEach((segment) =>  {
        urlvalue = urlvalue + '/'+ segment;
      })
    })
    
    this.logger.log('NotfoundComponent - url: ' + urlvalue);
  }
}
