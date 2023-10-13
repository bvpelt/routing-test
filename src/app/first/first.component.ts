import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { LogService } from '../services/logging/log.service';

@Component({
  selector: 'app-first',
  templateUrl: './first.component.html',
  styleUrls: ['./first.component.css']
})
export class FirstComponent {
  id: string | null | undefined;

  constructor(private logger: LogService, private route: ActivatedRoute) {
    this.logger.log('FirstComponent - first');
  }

  ngOnInit() {
    this.route.paramMap.subscribe(params => {
      this.id = params.get('id');
    });

    if (this.id) {
      this.logger.log('FirstComponent - first with parameter: ' + this.id);
    } else {
      this.logger.log('FirstComponent - first without parameter');
    }
  }
}
