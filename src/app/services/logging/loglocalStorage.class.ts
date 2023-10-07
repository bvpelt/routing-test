import { LogPublisher } from "./logpublisher.class";
import { Observable, of } from "rxjs";
import { LogEntry } from "./logentry.class";
import { LogEntryResult } from "./logentryresult.class";


export class LogLocalStorage extends LogPublisher {
    constructor() {
        // Must call `super()`from derived classes
        super();

        // Set location
        this.location = "logging";
    }

    // Append log entry to local storage
    log(entry: LogEntry): Observable<LogEntryResult> {
        
        let values: LogEntry[];

        let logResult: LogEntryResult = new LogEntryResult();
        logResult.result = false;

        try {
            // Get previous values from local storage
            const prevEntry = localStorage.getItem(this.location);
            if (prevEntry) {
                values = JSON.parse(prevEntry) || [];
            } else {
                values = [];
            }
            // Add new log entry to array
            values.push(entry);
            // Store array into local storage
            localStorage.setItem(this.location, JSON.stringify(values));
        
            // Set return value
            logResult.logentry = entry;
            logResult.result = true;            
        } catch (ex) {
            // Display error in console
            console.log(ex);
        }

        return of(logResult);
    }

    // Clear all log entries from local storage
    clear(): Observable<boolean> {
        localStorage.removeItem(this.location);
        return of(true);
    }
}
