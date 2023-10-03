import { Component } from '@angular/core';
import { LogService } from '../services/log.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent {
  constructor(private logger: LogService) {
    logger.log("Started Homecomponent");
    logger.debug("Started Homecomponent", "param 1", "param 2");
    logger.error("Started Homecomponent", 1, ['a', 'b'],"string" );
    logger.info("Started Homecomponent");
  }

}
