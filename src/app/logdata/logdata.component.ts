import { Component, OnInit } from '@angular/core';
import { LogWebApi } from '../services/logging/logwebapi.class';
import { LogEntry } from '../services/logging/logentry.class';

@Component({
  selector: 'app-logdata',
  templateUrl: './logdata.component.html',
  styleUrls: ['./logdata.component.css']
})
export class LogdataComponent implements OnInit {
  public logentries: LogEntry[] = [];

  constructor(private log: LogWebApi) {

  }

  ngOnInit() {
    this.log.get().subscribe((result) => {
      this.logentries = result;
    })


  }

}
