import { Component } from '@angular/core';
import { ActivatedRoute, ParamMap } from '@angular/router';
import { LogService } from 'src/app/services/logging/log.service';

@Component({
  selector: 'app-childb',
  templateUrl: './childb.component.html',
  styleUrls: ['./childb.component.css']
})
export class ChildbComponent {
  constructor(private logger: LogService, private route: ActivatedRoute) {
    let paramstring = "";
    route.queryParamMap.forEach((value: ParamMap) => {
      let keys: string[] = value.keys;
      keys.forEach((key) => {
        paramstring = paramstring + 'key: ' + key + ' value: ' + value.get(key) + ' ';
      })
    })
    if (paramstring.length > 0) {
      logger.log("Started ChildbComponent", "route params = " + paramstring);
    } else {
      logger.log("Started ChildbComponent - no parameters");
    }
  }
}
