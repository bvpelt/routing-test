import { LogEntry, LogLevel } from "./logentry.class";

export class LogEntries {
     // Public Properties
     entryDate: Date = new Date();
     message: string = "";
     level: LogLevel = LogLevel.Debug;
     extraInfo: string = "";
     logWithDate: boolean = true;

     constructor(logentry: LogEntry) {
        this.entryDate = logentry.entryDate;
        this.message = logentry.message;
        this.level = logentry.level;
        this.extraInfo = this.formatParams(logentry.extraInfo);
        this.logWithDate = logentry.logWithDate;
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