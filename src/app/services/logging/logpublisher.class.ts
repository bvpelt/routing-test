import { LogEntry } from './logentry.class';
import { Observable } from "rxjs";
import { LogEntryResult } from './logentryresult.class';


export abstract class LogPublisher {
    location: string = '';
    abstract log(record: LogEntry): Observable<LogEntryResult>
    abstract clear(): Observable<boolean>;
}