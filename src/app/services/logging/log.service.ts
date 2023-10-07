
import { LogEntry, LogLevel } from './logentry.class';
import { Injectable } from '@angular/core';
import { LogpublishersService } from './logpublishers.service';
import { LogPublisher } from './logpublisher.class';

@Injectable()
export class LogService {
  level: LogLevel = LogLevel.All;
  logWithDate: boolean = true;
  publishers: LogPublisher[] = [];

  constructor(private publishersService: LogpublishersService) {
    this.publishers = this.publishersService.publishers;
  }

  debug(msg: string, ...optionalParams: any[]) {
    this.writeToLog(msg, LogLevel.Debug, optionalParams);
  }

  info(msg: string, ...optionalParams: any[]) {
    this.writeToLog(msg, LogLevel.Info, optionalParams);
  }

  warn(msg: string, ...optionalParams: any[]) {
    this.writeToLog(msg, LogLevel.Warn, optionalParams);
  }

  error(msg: string, ...optionalParams: any[]) {
    this.writeToLog(msg, LogLevel.Error, optionalParams);
  }

  fatal(msg: string, ...optionalParams: any[]) {
    this.writeToLog(msg, LogLevel.Fatal, optionalParams);
  }

  log(msg: string, ...optionalParams: any[]) {
    this.writeToLog(msg, LogLevel.All, optionalParams);
  }



  private writeToLog(msg: string, level: LogLevel, params: any[]) {
    if (this.shouldLog(level)) {
      let entry: LogEntry = new LogEntry();
      entry.message = msg;
      entry.level = level;
      entry.extraInfo = params;
      entry.logWithDate = this.logWithDate;
      //console.log(entry.buildLogString());
      for (let logger of this.publishers) {
        logger.log(entry).subscribe(response => {
          if (response.result !== true) {
            console.log(JSON.stringify(response))
          }
        });
      }
    }
  }


  private shouldLog(level: LogLevel): boolean {
    let ret: boolean = false;
    if ((level >= this.level && level !== LogLevel.Off) || this.level === LogLevel.All) {
      ret = true;
    }
    return ret;
  }

  private formatParams(params: any[]): string {
    let ret: string = params.join(",");

    // Is there at least one object in the array?
    if (params.some(p => typeof p == "object")) {
      ret = "";

      // Build comma-delimited string
      for (let item of params) {
        ret += JSON.stringify(item) + ",";
      }
    }
    return ret;
  }

}
