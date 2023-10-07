import { Observable, of } from "rxjs";
import { LogEntry } from "./logentry.class";
import { LogPublisher } from "./logpublisher.class";
import { LogEntryResult } from "./logentryresult.class";

export class LogConsole extends LogPublisher {
    log (entry: LogEntry): Observable<LogEntryResult> {        
        // Log to console
        console.log(entry.buildLogString());    
        var logResult = new LogEntryResult();
        logResult.logentry = entry;
        logResult.result = true;    
        return of(logResult);
    }
    
    clear(): Observable<boolean> {
        console.clear();
        return of(true);
    }
}
