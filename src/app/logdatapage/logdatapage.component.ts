import { Component } from '@angular/core';
import { LogEntry } from '../services/logging/logentry.class';
import { LogWebApi } from '../services/logging/logwebapi.class';

@Component({
  selector: 'app-logdatapage',
  templateUrl: './logdatapage.component.html',
  styleUrls: ['./logdatapage.component.css']
})
export class LogdatapageComponent {
  public page: number = 0;
  public pageSize: number = 20;

  public logentries: LogEntry[] = [];

  constructor(private log: LogWebApi) {

  }

  ngOnInit() {
    this.getdata();
  }

  nextpage() {
    this.page = this.page + 1;
    this.getdata();
  }

  prevpage() {
    this.page = this.page - 1;
    this.getdata();
  }

  currentpage() {
    this.page = 0;
    this.getdata();

  }

  private getdata() {
    this.log.getPage(this.page, this.pageSize).subscribe((result) => {
      this.logentries = result;
    })
  }

}
