import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-first',
  templateUrl: './first.component.html',
  styleUrls: ['./first.component.css']
})
export class FirstComponent {
  id: string | null | undefined;

  constructor(private route: ActivatedRoute) {
    console.log('route data: ' + JSON.stringify(route.data));
    console.log('route firstChild: ' + JSON.stringify(route.firstChild));
    console.log('route fragment: ' + JSON.stringify(route.fragment));
    console.log('route outlet: ' + JSON.stringify(route.outlet));
    console.log('route paramMap: ' + JSON.stringify(route.paramMap));
    console.log('route queryParamMap: ' + JSON.stringify(route.queryParamMap));

  }

  ngOnInit() {
    this.route.paramMap.subscribe(params => {
      this.id = params.get('id');
    });
  }
}
