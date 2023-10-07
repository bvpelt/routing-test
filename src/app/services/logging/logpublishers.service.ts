import { Injectable } from '@angular/core';
import { LogPublisher } from './logpublisher.class';
import { LogConsole } from './logconsole.class';
import { LogLocalStorage } from './loglocalStorage.class';
import { LogWebApi } from './logwebapi.class';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class LogpublishersService {
  constructor(private http: HttpClient) {
    // Build publishers arrays
    this.buildPublishers();
  }

  // Public properties
  publishers: LogPublisher[] = [];

  // Build publishers array
  buildPublishers(): void {
    // Create instance of LogConsole Class
    this.publishers.push(new LogConsole());

    // Create instance of `LogLocalStorage` Class
    this.publishers.push(new LogLocalStorage());

     // Create instance of `LogLocalStorage` Class
     this.publishers.push(new LogWebApi(this.http));
  }
}