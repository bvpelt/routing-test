import { Component } from '@angular/core';
import { LogService } from '../services/logging/log.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent {
  constructor(private logger: LogService) {
  }
}
