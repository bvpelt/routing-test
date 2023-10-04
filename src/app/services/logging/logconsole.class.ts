import { Observable, of } from "rxjs";
import { LogEntry } from "./logentry.class";
import { LogPublisher } from "./logpublisher.class";

export class LogConsole extends LogPublisher {
    log (entry: LogEntry): Observable<boolean> {        
        // Log to console
        console.log(entry.buildLogString());        
        return of(true);
    }
    
    clear(): Observable<boolean> {
        console.clear();
        return of(true);
    }
}
