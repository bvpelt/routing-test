import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { LogService } from '../services/logging/log.service';

@Component({
  selector: 'app-first',
  templateUrl: './first.component.html',
  styleUrls: ['./first.component.css']
})
export class FirstComponent implements OnInit {
  id: string | null | undefined;

  constructor(private logger: LogService, private route: ActivatedRoute) {
    this.logger.log('FirstComponent - first');
  }

  ngOnInit() {
    /*
    this.route.paramMap.subscribe(params => {
      this.id = params.get('id');
    });
*/
    this.id = this.route.snapshot.queryParams['id'];

    if (this.id) {
      this.logger.log('FirstComponent - first with parameter: ' + this.id);
    } else {
      this.logger.log('FirstComponent - first without parameter');
    }
  }
}
