import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, ParamMap } from '@angular/router';
import { LogService } from '../services/logging/log.service';

@Component({
  selector: 'app-first',
  templateUrl: './first.component.html',
  styleUrls: ['./first.component.css']
})
export class FirstComponent implements OnInit {
  id: string | null | undefined;

  constructor(private logger: LogService, private route: ActivatedRoute) {
    this.route.paramMap
    .subscribe({
      next: (params: ParamMap) => {
        this.id = params.get('id');
        this.logger.log('FirstComponent - end subscription first with parameter: ' + this.id);
        this.logger.log('FirstComponent - first with parameter: ' + this.id);
      },
      error: (error) => {
        this.logger.log('FirstComponent - error');
      },
      complete: () => {
       
      }
    });
  }

  ngOnInit() {



    //this.id = this.route.snapshot.queryParams['id'];

    if (!this.id) {
      this.logger.log('FirstComponent - first without parameter');
    }
  }
}
